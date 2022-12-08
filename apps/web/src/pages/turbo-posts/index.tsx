import Head from 'next/head'
import { ITurboPost } from '@turbo-blog/types'
import { GetStaticProps } from 'next'
import dummyposts from '../../util/dummy-posts'
import { TurboPostsList } from '@turbo-blog/web-ui'
import { useRouter } from 'next/router'

interface ITurboPostsProps {
  posts: Array<ITurboPost>
}

const TurboPosts = ({ posts }: ITurboPostsProps) => {
  const router = useRouter()

  const handlePostRoute = (post: ITurboPost) => {
    router.push(`${router.asPath}/${post.id}`)
  }

  return (
    <>
      <Head>
        <title>Turbo posts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-6xl mb-10">Turbo posts</h1>
      <TurboPostsList
        emptyMessage="Empty posts.."
        onClick={handlePostRoute}
        posts={posts}
      />
      <div>{JSON.stringify(posts, null, 2)}</div>
    </>
  )
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      posts: dummyposts,
    },
  }
}

export default TurboPosts
