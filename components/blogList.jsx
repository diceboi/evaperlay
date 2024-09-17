"use client";

import Blogtile from "./ui/blogTile";
import { useSearchParams, usePathname } from "next/navigation";

export default function BlogList({ posts, gridclassname, tilebg }) {
  const searchParams = useSearchParams();
  const pathname = usePathname(); // Get the current pathname

  const categoryFromQuery = searchParams.get("category");

  const filteredPosts = categoryFromQuery
    ? posts.filter(
        (post) => post.node.categories.nodes[0].name === categoryFromQuery
      )
    : posts;

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is 0-indexed
    const year = date.getFullYear();

    return `${year}.${month < 10 ? "0" : ""}${month}.${
      day < 10 ? "0" : ""
    }${day}.`;
  };

  return (
    <div className={`grid ${gridclassname} gap-8`}>
      {pathname === "/blog" &&
        filteredPosts.map((post, index) => (
          <Blogtile
            key={index}
            featuredimage={post.node.featuredImage.node.sourceUrl}
            postdate={formatDate(post.node.date)}
            title={post.node.title}
            authorimage={post.node.author.node.avatar.url}
            authorname={post.node.author.node.name}
            category={post.node.categories.nodes[0].name}
            classname={`group relative flex flex-col w-full ${tilebg} gap-4 shadow-sm hover:shadow-xl hover:border-transparent transition-all ${
              index === 0
                ? "lg:col-span-3 min-h-96 lg:flex-row after:content-['Legfrissebb'] after:p-2 after:w-auto after:h-auto after:bg-[--aquamarine] after:absolute after:top-4 after:left-4 after:text-sm after:uppercase after:tracking-widest after:font-bold"
                : "flex-col"
            }`}
            content={post.node.excerpt}
            href={`/blog/${post.node.slug}`}
          />
        ))}

      {pathname !== "/blog" &&
        posts
          .slice(0, 3)
          .map((post, index) => (
            <Blogtile
              key={index}
              featuredimage={post.node.featuredImage.node.sourceUrl}
              postdate={formatDate(post.node.date)}
              title={post.node.title}
              authorimage={post.node.author.node.avatar.url}
              authorname={post.node.author.node.name}
              category={post.node.categories.nodes[0].name}
              classname={`group relative flex flex-col w-full ${tilebg}  shadow-sm hover:shadow-xl hover:border-transparent transition-all ${
                index === 0
                  ? "lg:col-span-2 min-h-96 lg:flex-row after:content-['Legfrissebb'] after:p-2 after:w-auto after:h-auto after:bg-[--aquamarine] after:absolute after:top-4 after:left-4 after:text-sm after:uppercase after:tracking-widest after:font-bold"
                  : "flex-col"
              }`}
              content={post.node.excerpt}
              href={`/blog/${post.node.slug}`}
            />
          ))}
    </div>
  );
}
