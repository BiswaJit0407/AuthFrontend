import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Planes = () => {
  
  const[toggle,setToggle]=useState("monthly")

  const plandata = [
    {
      name: "Basic",
      monthlyPrice: "$9.99",
      yearlyPrice: "$99.99",
      features: ["10 Projects", "Basic Analytics", "Email Support"],
    },
    {
      name: "Pro",
      monthlyPrice: "$19.99",
      yearlyPrice: "$199.99",
      features: [
        "Unlimited Projects",
        "Advanced Analytics",
        "Priority Support",
      ],
    },
    {
      name: "Enterprise",
      monthlyPrice: "$49.99",
      yearlyPrice: "$499.99",
      features: ["All Features", "Dedicated Account Manager", "24/7 Support"],
    },
  ];

  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 rounded-l-lg ${
              toggle === "monthly"
                ? "bg-green-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setToggle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg ${
              toggle === "yearly"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setToggle("yearly")}
          >
            Yearly (Save 20%)
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plandata.map((plan, index) => (
            <Card key={index} className="shadow-lg border">
              <CardHeader>
                <CardTitle className="text-center text-lg font-semibold">
                  {plan.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-2xl font-bold ">
                  {toggle === "monthly"
                    ? plan.monthlyPrice
                    : plan.yearlyPrice}
                </p>
                <ul className="mt-4 space-y-2 text-center">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                       {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button className="w-full">Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Planes;
