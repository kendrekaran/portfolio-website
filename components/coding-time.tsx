"use client";

import { useEffect, useState } from "react";

export default function CodingTime() {
  const [hours, setHours] = useState<string>("--");

  useEffect(() => {
    fetch("/api/coding-time")
      .then((res) => res.json())
      .then((data) => {
        if (data.hours) {
          setHours(data.hours);
        } else {
          setHours("0");
        }
      })
      .catch((error) => {
        console.error("Failed to fetch coding time:", error);
        setHours("0");
      });
  }, []);

  return (
    <div className="p-4 bg-gray-900 text-white rounded-xl shadow-md w-fit text-center">
      💻 {hours} hours coded today
    </div>
  );
}
