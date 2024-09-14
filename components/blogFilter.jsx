"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function BlogFilter({ categories }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category"); // Get the current category from URL query params

  return (
    <div className="flex lg:flex-row flex-col justify-center py-4 items-center gap-4 w-full pt-16">
      <h3 className="font-bold mr-4">Kategóriák:</h3>
      <div className="flex flex-wrap gap-2">
        <button
          className={`font-bold w-auto p-2 px-3 hover:bg-[--aquamarine] focus:bg-[--aquamarine] active:bg-[--aquamarine] ${
            !currentCategory
              ? "bg-[--aquamarine]" // Style the "All" button as active when no category is selected
              : "bg-white"
          } ease-in-out duration-200`}
          onClick={() => {
            router.push("/blog");
          }}
        >
          Összes
        </button>

        {categories.map((category, index) => (
          <button
            key={index}
            className={`font-bold w-auto p-2 px-3 hover:bg-[--aquamarine] focus:bg-[--aquamarine] active:bg-[--aquamarine] ${
              currentCategory === category.node.name
                ? "bg-[--aquamarine]" // Style the button as active when its category matches the current one
                : "bg-white "
            } ease-in-out duration-200`}
            onClick={() => {
              router.push(
                `/blog?category=${encodeURIComponent(category.node.name)}`
              );
            }}
          >
            {category.node.name}
          </button>
        ))}
      </div>
    </div>
  );
}
