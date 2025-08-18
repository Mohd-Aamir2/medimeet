'use client';
import { PricingTable } from '@clerk/nextjs'
import React from 'react'
import { Card, CardContent } from "./ui/card";

const Pricing = () => {
  return (
    <div>
         <Card className="border-emerald-900/30 shadow-lg bg-gradient-to-b from-emerald-950/30 to-transparent">
      <CardContent className="p-6 md:p-8">
        <PricingTable /></CardContent>    </Card>
    </div>
  )
}

export default Pricing
