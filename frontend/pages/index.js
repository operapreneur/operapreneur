import Link from '@/components/Link'
import { PageSEO } from '@/components/global/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

// import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="">
        <div class="h-[70vh] grid grid-cols-5 grid-rows-6 gap-3">
          <div class="z-10 -translate-x-5 p-8 bg-mint div1">
            <h1 className="text-teal-600 text-3xl font-serif leading-9 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hello World
            </h1>
            <p className="text-teal-600 text-lg leading-7">
              {siteMetadata.description}
            </p>
          </div>
          <div class="div2 bg-cover bg-center bg-teal-500">

          </div>
          <div class="div3 bg-cover bg-center bg-sage-500">

          </div>
          <div class="div4 bg-cover bg-center bg-mint">

          </div>
        </div>
      </div>
      {/* {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )} */}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
