"use client"

import CalendlyPopup from './calendlyPopup'
import { useContext } from 'react'
import { CalendlyContext } from '@/app/CalendlyContext'
import { IoClose } from "react-icons/io5";

export default function CalendlyModal() {
  const { openPopup, toggleCalendly } = useContext(CalendlyContext);

  const handleClickOutside = (e) => {
    // If the clicked element is the backdrop (not the popup content), close the modal
    if (e.target.id === 'calendly-modal-backdrop') {
      toggleCalendly();
    }
  };

  return (
    <div
      id="calendly-modal-backdrop"
      onClick={handleClickOutside} // Attach the click event handler here
      className={`${openPopup ? 'flex' : 'hidden'} fixed top-0 left-0 w-full h-full flex-col items-center justify-center backdrop-brightness-[25%] z-50`}
    >
      <div className="flex flex-col items-end justify-center">
        <IoClose className='absolute top-2 right-2 text-white min-w-8 min-h-8 cursor-pointer' onClick={toggleCalendly}/>
        <CalendlyPopup />
      </div>
    </div>
  );
}
