import BlogList from "@/components/blogList";
import Mainheader from "@/components/ui/mainHeader";
import BlogFilter from "@/components/blogFilter";
import { Suspense } from "react";

export async function getCategories() {
  
const query = `
  {
    categories(where: { exclude: 1 }) {
      edges {
        node {
          name
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

  return data.categories.edges

}

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

export async function generateMetadata() {

  return {
    title: 'Blog, Szakmai Tartalmak - Perlay Éva',
    description: 'Olvass bele szakmai tartalmaimba, ha úgy érzed elakadtál céljaid megvalósításában, vagy fejlődésre vágysz szakmai területen, vagy a magánéletben.',
    alternates: {
      canonical: `https://www.evaperlay.com/blog`
    }
  }
  
}


export default async function BlogArchive() {

  const categories = await getCategories()
  const posts = await getPosts()

  return (
    <>
    <Mainheader title={'Blog'} subtitle={'Szakmai tartalmaim'} image={'/eva/hol-tartok.webp'}/>
    <Suspense>
    {/*<BlogFilter categories={categories}/>*/}
    <div className="container">
    <BlogList posts={posts} gridclassname={'lg:grid-cols-3 grid-cols-1 lg:py-32 py-16 w-full'} tilebg={'bg-white'}/>
    </div>
    </Suspense>
    </>
  )
}
