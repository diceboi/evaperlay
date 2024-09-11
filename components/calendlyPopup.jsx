"use client"

import React from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
import { useRouter } from "next/navigation";

const CalendlyPopup = () => {

  const router = useRouter()

  useCalendlyEventListener({
    onEventScheduled: (e) => router.push('/koszonjuk'),
  });

  return (
    <div className="App">
      <InlineWidget 
      url="https://calendly.com/szasz-szabolcs1995/30min" 
      styles={{
        height: '600px',
        width: '300px',
      }}
      />
    </div>
  );
};

export default CalendlyPopup;