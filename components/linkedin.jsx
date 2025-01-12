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
import Label from "./ui/typo/Label";
import Link from "next/link";
import EmailSub from "./ui/EmailSub";

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
              src="/eva/linkedin3.webp"
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
            <BlogList posts={posts} gridclassname={'lg:grid-cols-1 grid-cols-1 py-0 w-full lg:w-2/3'} tilebg={'bg-[--white]'}/>
          </Suspense>
          <Link href={'https://coachszemle.hu/2023/05/31/perlay-eva-felsovezetoi-coaching-a-dei-szolgalataban/'} target={'__blank'} className="relative flex flex-col gap-8 p-8 lg:w-2/3 min-h-[50vh] rounded-xl overflow-hidden">
            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50 z-10"></div>
            <Image src={'/coach-palyazat-szemle-borito-1500x500-1.jpg'} fill style={{ objectFit: 'cover', objectPosition: 'left' }} />
            <Label classname={'z-20 border border-white px-4 py-2 rounded-full w-fit text-white'}>coachszemle.hu</Label>
            <H2 classname={'text-white hover:underline z-20'}>Perlay Éva: Felsővezetői coaching a DEI szolgálatában</H2>
            <Paragraph classname={'text-white z-20'}>A következőkben szeretnék betekintést adni szakdolgozati témámba, amely azzal foglalkozik, hogy a felsővezetői egyéni coaching hogyan tudja támogatni a szervezetek sokszínűséggel...</Paragraph>
          </Link>
        </div>
        <EmailSub type={"blue"} baselayout={"row"}/>
        <Primarygreenbuton
          text={"További olvasmányok"}
          link={"/blog"}
          classname={"self-center my-8"}
        />
      </div>
    </Regularcontainer>
  );
}
