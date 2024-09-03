"use client";

import {MdOutlineHorizontalRule} from "react-icons/md";

export default function GridWhiteTile({ text, mark }) {
  return (
    <div className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 bg-white shadow-sm">
      {mark && (
        <div className="absolute flex flex-col items-center justify-center top-1/2 -translate-y-1/2 -right-7 w-8 h-8">
          <MdOutlineHorizontalRule className="min-w-8 min-h-8 text-[--aquamarine]" />
        </div>
      )}
      <div className="text-lg" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}
