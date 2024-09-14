import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";

const BlogPostHero = ({
  title,
  authorimage,
  authorname,
  postdate,
  category,
  featuredimage,
}) => {
  return (
    <>
      <div className="flex justify-center items-end">
        <div
          style={{ backgroundImage: `url("${featuredimage}")` }}
          className="relative flex flex-col justify-end gap-4 w-full min-h-[50vh] lg:min-h-[50vh] m-auto p-4 bg-cover bg-center bg-no-repeat"
        >
          <div className="flex flex-col gap-4 lg:w-8/12 w-full mx-auto z-10">
            <div className="flex items-center gap-4 w-full z-10 text-white pt-8">
              <Image
                src={authorimage}
                height={50}
                width={50}
                alt="author"
                className="rounded-full"
              />
              <div className="flex items-center gap-1 lg:gap-4 h-full">
                <div className="flex flex-col items-center gap-2 border-r border-neutral-300 pr-4">
                  <h4 className="text-xs lg:text-sm font-medium uppercase">
                    Szerző
                  </h4>
                  <p className="text-xs lg:text-sm">{authorname}</p>
                </div>
                <div className="flex flex-col items-center gap-2 border-r border-neutral-300 pr-4">
                  <h4 className="text-xs lg:text-sm font-medium uppercase">
                    Megjelent
                  </h4>
                  <p className="text-xs lg:text-sm">{postdate}</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h4 className="text-xs lg:text-sm font-medium uppercase">
                    Kategória
                  </h4>
                  <p className="text-xs lg:-text-sm underline cursor-pointer hover:bg-white hover:text-black ease duration-200">
                    <Link href={`/blog?category=${category}`}>{category}</Link>
                  </p>
                </div>
              </div>
            </div>

            <ul className="flex flex-wrap items-center gap-2 w-full text-white z-10 text-sm underline pt-4">
              <li>
                <Link href={`/`}>Kezdőoldal</Link>
              </li>
              <FiChevronRight className="text-[--aquamarine]" />
              <li>
                <Link href={`/blog`}>Blog</Link>
              </li>
              <FiChevronRight className="text-[--aquamarine]" />
              <li>{title}</li>
            </ul>
          </div>
          <div className="absolute w-full h-full bottom-0 right-0 bg-gradient-to-b from-[#1e066fb3] to-[#1e066f92]"></div>
        </div>
      </div>
    </>
  );
};

export default BlogPostHero;
