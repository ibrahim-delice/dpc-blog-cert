import { extendedTurboPostsApiSlice, useGetPostQuery } from '@turbo-blog/api'
import { makeStore, wrapper } from '@turbo-blog/store'
import { ITurboPost } from '@turbo-blog/types'
import { Button, TurboPost as UITurboPost } from '@turbo-blog/web-ui'
import Head from 'next/head'
import { useRouter } from 'next/router'

const TurboPost = () => {
  const router = useRouter()
  const { id } = router.query

  const { data: post, isLoading, isError, error } = useGetPostQuery(String(id))

  const handleBack = () => router.back()

  if (isLoading) return <div>loading..</div>
  if (isError) return <div>{JSON.stringify(error, null, 2)}</div>

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

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const id = context.params?.id

    store.dispatch(
      extendedTurboPostsApiSlice.endpoints.getPost.initiate(String(id)),
    )

    await Promise.all(
      store.dispatch(
        extendedTurboPostsApiSlice.util.getRunningOperationPromises,
      ),
    )

    return {
      props: {}, // Return empty props. The data is in the store now.
    }
  },
)

export async function getStaticPaths() {
  const store = makeStore()

  const result = await store.dispatch(
    extendedTurboPostsApiSlice.endpoints.getPosts.initiate(),
  )

  const paths = result.data?.map((post) => ({
    params: { id: String(post.id) },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default TurboPost
