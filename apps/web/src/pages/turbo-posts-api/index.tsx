import Head from 'next/head'
import { useGetPostsQuery } from '@turbo-blog/api'
import { TurboPostsFilterableList } from '../../containers/features/turbo-posts/TurboPostsFilterableList/TurboPostsFilterableList'

const TurboPosts = () => {
  const { data, isLoading, isError, error } = useGetPostsQuery()

  if (isLoading) return <div>loading..</div>
  if (isError) return <div>{JSON.stringify(error, null, 2)}</div>

  return (
    <>
      <Head>
        <title>Turbo posts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-6xl mb-10">Turbo posts</h1>
      <TurboPostsFilterableList posts={data} />
    </>
  )
}

export default TurboPosts
