import { useGetPostQuery } from '@turbo-blog/api'
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

export default TurboPost
