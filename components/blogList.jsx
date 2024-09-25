"use client";

import Blogtile from "./ui/blogTile";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import H2 from "./ui/typo/H3";
import Label from "./ui/typo/Label";
import Paragraph from "./ui/typo/Paragraph";
import Image from "next/image";

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

  console.log(posts[0].node.blocks)

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
            content={post.node.blocks[0].saveContent}
            href={`/blog/${post.node.slug}`}
          />
        ))}
        <Link href={'https://coachszemle.hu/2023/05/31/perlay-eva-felsovezetoi-coaching-a-dei-szolgalataban/'} target={'__blank'} className={`relative flex-col gap-8 p-8 ${ pathname === '/blog' ? 'flex' : 'hidden lg:w-2/3' } min-h-[50vh] rounded-xl overflow-hidden`}>
            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50 z-10"></div>
            <Image src={'/coach-palyazat-szemle-borito-1500x500-1.jpg'} fill style={{ objectFit: 'cover', objectPosition: 'left' }} />
            <Label classname={'z-20 border border-white px-4 py-2 rounded-full w-fit text-white'}>coachszemle.hu</Label>
            <H2 classname={'text-white hover:underline z-20'}>Perlay Éva: Felsővezetői coaching a DEI szolgálatában</H2>
            <Paragraph classname={'text-white z-20'}>A következőkben szeretnék betekintést adni szakdolgozati témámba, amely azzal foglalkozik, hogy a felsővezetői egyéni coaching hogyan tudja támogatni a szervezetek sokszínűséggel...</Paragraph>
          </Link>

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
                index === 0 && posts.length > 1
                  ? "lg:col-span-2 min-h-96 lg:flex-row after:content-['Legfrissebb'] after:p-2 after:w-auto after:h-auto after:bg-[--aquamarine] after:absolute after:top-4 after:left-4 after:text-sm after:uppercase after:tracking-widest after:font-bold"
                  : "flex-col"
              }`}
              content={post.node.blocks[0].saveContent}
              href={`/blog/${post.node.slug}`}
            />
          ))}
    </div>
  );
}
