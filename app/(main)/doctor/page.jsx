import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  getDoctorAppointments,
  getDoctorAvailability,
} from "@/actions/doctor";
import { AvailabilitySettings } from "./_components/availability-settings";
import { getCurrentUser } from "@/actions/onboarding";
import { redirect } from "next/navigation";
import { Calendar, Clock, DollarSign } from "lucide-react";
import DoctorAppointmentsList from "./_components/appointments-list";
import { getDoctorEarnings, getDoctorPayouts } from "@/actions/payout";
import { DoctorEarnings } from "./_components/doctor-earnings";

export default async function DoctorDashboardPage() {
  // ✅ 1. Get logged-in user first
  const user = await getCurrentUser();

  // ✅ 2. Redirect if not a doctor
  if (!user || user.role !== "DOCTOR") {
    redirect("/onboarding");
  }

  // ✅ 3. Redirect if not verified
  if (user.verificationStatus !== "VERIFIED") {
    redirect("/doctor/verification");
  }

  const doctorId = user.id;

  // ✅ 4. Fetch data in parallel using doctor ID
  let appointmentsData = { appointments: [] };
  let availabilityData = { slots: [] };
  let earningsData = { earnings: {} };
  let payoutsData = { payouts: [] };

  try {
    [appointmentsData, availabilityData, earningsData, payoutsData] =
      await Promise.all([
        getDoctorAppointments(doctorId),
        getDoctorAvailability(doctorId),
        getDoctorEarnings(doctorId),
        getDoctorPayouts(doctorId),
      ]);
  } catch (error) {
    console.error("Error loading doctor dashboard:", error);
    // Optional: you can redirect to an error page or show fallback UI
  }

  // ✅ 5. Return UI safely even if one call fails
  return (
    <Tabs
      defaultValue="earnings"
      className="grid grid-cols-1 md:grid-cols-4 gap-6"
    >
      <TabsList className="md:col-span-1 bg-muted/30 border h-14 md:h-40 flex sm:flex-row md:flex-col w-full p-2 md:p-1 rounded-md md:space-y-2 sm:space-x-2 md:space-x-0">
        <TabsTrigger
          value="earnings"
          className="flex-1 md:flex md:items-center md:justify-start md:px-4 md:py-3 w-full cursor-pointer"
        >
          <DollarSign className="h-4 w-4 mr-2 hidden md:inline" />
          <span>Earnings</span>
        </TabsTrigger>

        <TabsTrigger
          value="appointments"
          className="flex-1 md:flex md:items-center md:justify-start md:px-4 md:py-3 w-full cursor-pointer"
        >
          <Calendar className="h-4 w-4 mr-2 hidden md:inline" />
          <span>Appointments</span>
        </TabsTrigger>

        <TabsTrigger
          value="availability"
          className="flex-1 md:flex md:items-center md:justify-start md:px-4 md:py-3 w-full cursor-pointer"
        >
          <Clock className="h-4 w-4 mr-2 hidden md:inline" />
          <span>Availability</span>
        </TabsTrigger>
      </TabsList>

      <div className="md:col-span-3">
        <TabsContent value="appointments" className="border-none p-0">
          <DoctorAppointmentsList
            appointments={appointmentsData?.appointments || []}
          />
        </TabsContent>

        <TabsContent value="availability" className="border-none p-0">
          <AvailabilitySettings slots={availabilityData?.slots || []} />
        </TabsContent>

        <TabsContent value="earnings" className="border-none p-0">
          <DoctorEarnings
            earnings={earningsData?.earnings || {}}
            payouts={payoutsData?.payouts || []}
          />
        </TabsContent>
      </div>
    </Tabs>
  );
}
