import { Input } from "@/components/ui/input";
import React from "react";

function FormUi({ dashboardFormss }) {
  if (!dashboardFormss) {
    return <div>Data tidak tersedia</div>; // Pesan error jika data tidak ada
  }

  if (!dashboardFormss.form || !Array.isArray(dashboardFormss.form)) {
    return <div>Form tidak tersedia atau tidak valid</div>; // Pesan error jika form tidak ada atau tidak valid
  }

  return (
    <div className="border">
      <h2 className="font-bold text-center text-2xl">
        {dashboardFormss.formTitle}
      </h2>
      <h2 className="text-sm text-gray-400 text-center">
        {dashboardFormss.formSubheading}
      </h2>
      {dashboardFormss.form.map((field, index) => (
        <div>
          <Input
            type={field?.fieldType}
            placeholder={field?.placeholderName}
            name={field?.formName}
          />
        </div>
      ))}
    </div>
  );
}

export default FormUi;
