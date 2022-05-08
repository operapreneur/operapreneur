import Link from '@/components/Link'
import { PageSEO } from '@/components/global/SEO'
import SectionContainer from '@/components/global/SectionContainer'
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
      <SectionContainer>
        <Link 
          href="/blog/operapreneur-launch"
          aria-label="Operapreneur Launch"
        >
          <div className="pt-3 md:h-[70vh] md:grid md:grid-cols-5 md:grid-rows-6 md:gap-3">
            <div className="mb-8 md:mb-0 h-[33vh] md:h-full lg:py-8 lg:px-8 md:py-4 py-4 px-4 justify-center flex flex-col z-10 md:-translate-x-8 bg-mint div1">
              <h1 className="text-teal-600 text-lg leading-7">
                Hello World
              </h1>
              <p className="text-teal-600 text-3xl font-serif leading-9 sm:leading-10 md:text-4xl">
                {siteMetadata.description}
              </p>
            </div>
            <div className="mb-8 md:mb-0 div2 w-full h-[33vh] md:h-full bg-cover bg-center bg-teal-500"></div>
            <div className="mb-8 md:mb-0 div3 w-full h-[33vh] md:h-full bg-cover bg-center bg-sage-500"></div>
            <div className="div4 w-full h-[33vh] md:h-full bg-cover bg-center bg-mint"></div>
          </div>
        </Link>
      </SectionContainer>
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
