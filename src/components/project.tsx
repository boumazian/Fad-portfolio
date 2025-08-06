// pages/example.tsx
import React from "react";
import CardProject from "./ui/cardProject";

export default function Project() {
  return (
    <div className="px-20 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <CardProject
        imageUrl="https://pagedone.io/asset/uploads/1695365240.png"
        title="Fast Transaction"
        description="Provides faster transaction, so money arrives in realtime"
      />
      <CardProject
        imageUrl="https://pagedone.io/asset/uploads/1695365240.png"
        title="Secure Payments"
        description="Your data is protected with end-to-end encryption"
      />
      <CardProject
        imageUrl="https://pagedone.io/asset/uploads/1695365240.png"
        title="Secure Payments"
        description="Your data is protected with end-to-end encryption"
      />
      <CardProject
        imageUrl="https://pagedone.io/asset/uploads/1695365240.png"
        title="Secure Payments"
        description="Your data is protected with end-to-end encryption"
      />
      <CardProject
        imageUrl="https://pagedone.io/asset/uploads/1695365240.png"
        title="Secure Payments"
        description="Your data is protected with end-to-end encryption"
      />
      <CardProject
        imageUrl="https://pagedone.io/asset/uploads/1695365240.png"
        title="Secure Payments"
        description="Your data is protected with end-to-end encryption"
      />
      {/* تقدر تزيد عدد لا نهائي */}
    </div>
  );
}
