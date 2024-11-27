import BlogPostHero from "@/components/ui/blogPostHero";
import Blogtile from "@/components/ui/blogTile";
import { headers } from "next/headers";

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
            seo {
              metaDesc
              title
            }
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

export async function generateMetadata() {

  const posts = await getPosts()

  const headersList = headers();
  const pathname = headersList.get('x-pathname');

  const slug = pathname.split('/').filter(Boolean).pop();

  // Find the post with the matching slug
  const currentpost = posts?.find(post => post.node.slug === slug);

  return {
    title: `${currentpost.node?.seo?.title}`,
    description: `${currentpost.node?.seo?.metaDesc}`,
    alternates: {
      canonical: `https://www.evaperlay.com/blog/${currentpost.node.slug}`
    },
    openGraph: {
      images: [{ url: currentpost.node.featuredImage.node.sourceUrl }]
    }
  }
  
}

export default async function Blog() {

  const posts = await getPosts()

  const headersList = headers();
  const pathname = headersList.get('x-pathname');

  const slug = pathname.split('/').filter(Boolean).pop();

  // Find the post with the matching slug
  const currentpost = posts?.find(post => post.node.slug === slug);
  const recentposts = posts?.filter(recentPost => recentPost.node.slug !== slug);

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is 0-indexed
    const year = date.getFullYear();

    return `${year}.${month < 10 ? "0" : ""}${month}.${day < 10 ? "0" : ""}${day}.`;
  };

    return(
        <>
        <BlogPostHero featuredimage={currentpost.node.featuredImage.node.sourceUrl} title={currentpost.node.title} authorimage={currentpost.node.author.node.avatar.url} authorname={currentpost.node.author.node.name} postdate={formatDate(currentpost.node.date)} category={currentpost.node.categories.nodes[0].name} slug={""}/>
        <div className='flex lg:flex-row flex-col lg:gap-20 w-full lg:w-8/12 m-auto'>
          <article className='flex text-lg flex-col gap-8 w-full lg:w-2/3 px-4 lg:px-0 py-8 lg:py-20'>
          <h1>{currentpost.node.title}</h1>
          {currentpost.node.blocks.map((block, index) => (
            <div
              key={index}
              className="flex flex-col gap-2"
              dangerouslySetInnerHTML={{ __html: block.saveContent }}
            />
          ))}
          </article>
          <div className='flex flex-col justify-start mx-auto lg:w-1/3 w-11/12 gap-8 pt-20'>
            <h3 className='text-sm lg:text-lg border-b border-black w-fit'>
              Ezeket olvastad már?
            </h3>
            {recentposts?.slice(0, 4).map((posts) => (
            <Blogtile
              classname={"group relative flex flex-col w-full bg-white gap-4 h-[430px] shadow-sm hover:shadow-2xl transition-all"}
              href={`/blog/${posts.node.slug}`}
              key={posts.node.slug}
              featuredimage={posts.node.featuredImage?.node.sourceUrl} 
              title={posts.node.title}
              authorimage={posts.node.author.node.avatar.url}
              authorname={posts.node.author.node.name}
              postdate={formatDate(posts.node.date)}
              category={posts.node.categories.nodes[0].name}
              content={posts.node.excerpt}
            />
            ))}
          </div>
      </div>
      </>
    )
}