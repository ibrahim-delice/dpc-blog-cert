import { ITurboPost } from '@turbo-blog/types'
import { Button, TurboPost as UITurboPost } from '@turbo-blog/web-ui'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import dummyposts from '../../util/dummy-posts'

interface ITurboPostProps {
  post: ITurboPost
}

const TurboPost = ({ post }: ITurboPostProps) => {
  const router = useRouter()

  const handleBack = () => router.back()

  return (
    <>
      <Head>
        <title>{String(post.id)}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Button onClick={() => handleBack()}>Back</Button>
      <UITurboPost content={post.content} heading={post.heading} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const post = dummyposts.find(
    (post) => post.id === parseInt(context.params.id.toString()),
  )

  return {
    props: {
      post,
    },
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = dummyposts.map((post) => ({
    params: { id: String(post.id) },
  }))

  return { paths, fallback: 'blocking' }
}

export default TurboPost
