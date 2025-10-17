"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Pricing from "@/components/pricing";
import { creditBenefits, features, testimonials } from "@/lib/data";

export default function Home() {
  return (
    <div className="bg-background text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-32">
        {/* Floating gradient blob */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/20 via-transparent to-emerald-900/40 blur-3xl animate-pulse" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Badge
                variant="outline"
                className="bg-emerald-900/40 border-emerald-600/30 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.4)] px-4 py-2 text-sm font-medium backdrop-blur-sm"
              >
                Healthcare made simple
              </Badge>

              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Connect with doctors <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent animate-gradient">
                  anytime, anywhere
                </span>
              </h1>

              <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                Book appointments, consult via video, and manage your healthcare
                journey — all in one secure platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all"
                >
                  <Link href="/onboarding">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-emerald-700/50 hover:bg-emerald-900/20 backdrop-blur-sm transition-all"
                >
                  <Link href="/doctors">Find Doctors</Link>
                </Button>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden group"
            >
              <Image
                src="/banner2.png"
                alt="Doctor consultation"
                fill
                priority
                className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform makes healthcare accessible with just a few clicks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, 1, -1, 0],
                  transition: { duration: 0.4 },
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-400 to-emerald-700 rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <Card className="relative bg-emerald-950/40 border border-emerald-800/40 rounded-2xl shadow-md backdrop-blur-sm transition-all duration-500">
                  <CardHeader className="pb-2">
                    <div className="bg-emerald-900/40 p-3 rounded-lg w-fit mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDIT SYSTEM */}
      <section id="pricing" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center mb-16"
          >
            <Badge className="bg-emerald-900/30 border-emerald-700/40 text-emerald-300 px-4 py-1">
              Affordable Healthcare
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Consultation Packages</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the perfect consultation package that fits your healthcare
              needs.
            </p>
          </motion.div>

          <Pricing />

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative group mt-12"
          >
            <div className="absolute inset-0 bg-[conic-gradient(at_top_left,_#10b981,_#0d9488,_#064e3b,_#10b981)] animate-spin-slow opacity-40 rounded-2xl blur-md group-hover:opacity-70 transition-opacity duration-700" />
            <Card className="relative bg-emerald-950/40 border border-emerald-700/50 backdrop-blur-lg text-emerald-50 shadow-[0_0_25px_rgba(16,185,129,0.2)] transition-all duration-500 hover:shadow-[0_0_35px_rgba(16,185,129,0.35)]">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center">
                  <Stethoscope className="h-5 w-5 mr-2 text-emerald-400" />
                  How Our Credit System Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {creditBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 bg-emerald-900/20 p-1 rounded-full">
                        <svg
                          className="h-4 w-4 text-emerald-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p
                        className="text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: benefit }}
                      />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-emerald-950/30 blur-2xl" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <Card className="bg-gradient-to-r from-emerald-900/40 to-emerald-950/20 border border-emerald-800/40 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] transition-all duration-700 backdrop-blur-md">
              <CardContent className="p-10 text-center space-y-6">
                <h2 className="text-4xl font-bold">
                  Ready to take control of your healthcare?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Join thousands of users who have simplified their healthcare
                  journey with our platform.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    <Link href="/sign-up">Sign Up Now</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-emerald-700/50 hover:bg-emerald-900/30"
                  >
                    <Link href="#pricing">View Pricing</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
