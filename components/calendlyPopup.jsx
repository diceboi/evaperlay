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
    <>
    <div className="App lg:block hidden">
      <InlineWidget 
      url="https://calendly.com/evaperlay/30min" 
      styles={{
        height: '700px',
        width: '1024px',
      }}
      />
    </div>
    <div className="App lg:hidden block">
    <InlineWidget 
    url="https://calendly.com/evaperlay/30min" 
    styles={{
      height: '700px',
      width: '300px',
    }}
    />
  </div>
  </>
  );
};

export default CalendlyPopup;