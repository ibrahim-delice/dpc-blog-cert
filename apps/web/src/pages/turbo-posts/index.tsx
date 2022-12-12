import Head from 'next/head'
import { ITurboPost } from '@turbo-blog/types'
import { GetStaticProps } from 'next'
import dummyposts from '../../util/dummy-posts'
import TurboPostsFilterableList from '../../containers/features/turbo-posts/TurboPostsFilterableList/TurboPostsFilterableList'

interface ITurboPostsProps {
  posts: Array<ITurboPost>
}

const TurboPosts = ({ posts }: ITurboPostsProps) => {
  return (
    <>
      <Head>
        <title>Turbo posts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-6xl mb-10">Turbo posts</h1>
      <TurboPostsFilterableList posts={posts} />
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
