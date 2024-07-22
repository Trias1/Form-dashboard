"use client";
import { db } from "@/configs";
import { DashboardForms } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import FormUi from "../_components/FormUi";

function EditForm() {
  const { user } = useUser();
  const [dashboardFormss, setDashboardFormss] = useState([]);
  const router = useRouter();

  useEffect(() => {
    user && GetFormData();
  }, [user]);

  const GetFormData = async () => {
    const result = await db.select().from(DashboardForms);

    console.log(JSON.parse(result[0].nameForm));
    setDashboardFormss(JSON.parse(result[0].nameForm));
  };
  return (
    <div className="p-10">
      <h2
        className="flex gap-2 items-center my-5 cursor-pointer hover:font-bold"
        onClick={() => router.back()}
      >
        <ArrowLeft /> Back
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-5 border rounded-lg shadow-md">Controller</div>
        <div className="md:col-span-2 border rounded-lg p-5 h-screen flex items-center justify-center">
          <FormUi dashboardFormss={dashboardFormss} /> 
        </div>
      </div>
    </div>
  );
}

export default EditForm;
