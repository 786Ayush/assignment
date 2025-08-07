"use client";

import { Onboarding } from "@/Component/onboarding";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [page, setpage] = useState(1);
  const router=useRouter();
  const handleChange = () => {
    if(page===3)
    {
      router.push("/mobilenumber")
    }
    setpage(page + 1);
  };
  return (
    <>
      <Onboarding
        content={
          page == 1
            ? "Groceries at Your Doorstep in 10–30 Minutes"
            : page === 2
            ? "Trusted Franchise Stores Near You"
            : "Real-Time Tracking & Easy Returns"
        }
        img={page == 1 ? "/img1.png" : page === 2 ? "img2.png" : "img3.png"}
        page={page}
        handleChange={handleChange}
      />
    </>
  );
}
