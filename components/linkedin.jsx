import Regularcontainer from "./ui/regularcontainer";
import Image from "next/image";
import LinkedInButton from "./ui/LinkedInButton";
import Logocarousel from "./logocarousel";
import Primarygreenbuton from "./ui/primaryGreenButon";
import SubTitle from "./ui/typo/SubTitle";
import H2 from "./ui/typo/H2";
import H3 from "./ui/typo/H3";
import Paragraph from "./ui/typo/Paragraph";
import BlogList from "./blogList";
import { Suspense } from "react";

export async function getPosts() {

  const query = `
  {
      posts {
        edges {
          node {
            date
            title
            slug
            author {
              node {
                avatar {
                  url
                }
                name
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              nodes {
                name
                id
              }
            }
            blocks {
              saveContent
              order
            }
            excerpt
          }
        }
      }
    }
  `;
  
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
      query
    )}`,
    { next: { revalidate: 10 } },
    {
      method: "GET",
      headers: {
        "Content-type" : "application/json",
      }
    }
  )
  
  const { data } = await res.json()
  
  return data.posts.edges
    
  }

export default async function Linkedin() {

  const posts = await getPosts()

  return (
    <Regularcontainer bgcolor={"bg-white"} padding={"py-16 lg:py-32"}>
      <div className="flex flex-col lg:gap-16 gap-8">
        <div className="flex flex-col gap-4">
          <SubTitle classname={"lg:self-center"}>Blog</SubTitle>
          <H2 classname={"lg:self-center"}>Szakmai tartalmaim</H2>
        </div>
        <div
          className="flex flex-col gap-8 lg:flex-row rounded-3xl w-full min-h-[60vh]"
        >
          <div className="relative flex flex-col items-center justify-end gap-4 lg:w-1/3 w-full p-8 rounded-xl h-auto min-h-[50vh]">
            <Image
              src="/eva/linkedin.webp"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              alt="Éva ül"
              className="w-full rounded-xl"
            />
            <Paragraph classname={"z-10 text-center text-white self-end"}>
              Kövess be LinkedIn-en és olvass bele szakmai tartalmaimba.
            </Paragraph>
            <LinkedInButton />
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-b from-transparent to-[--black] rounded-xl opacity-50"></div>
          </div>
          <Suspense>
            <BlogList posts={posts} gridclassname={'lg:grid-cols-2 grid-cols-1 py-0 w-full'} tilebg={'bg-[--white]'}/>
          </Suspense>
        </div>
        <Primarygreenbuton
          text={"További olvasmányok"}
          link={"/blog"}
          classname={"self-center my-8"}
        />
        <div className="flex flex-col w-full">
          <H3 classname={"self-center text-center"}>
            Partnereim, akik már bizalmat szavaztak nekem:
          </H3>
          <Logocarousel />
        </div>
      </div>
    </Regularcontainer>
  );
}
