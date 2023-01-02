import {
  extendedTurboPostsApiSlice,
  useAddTurboPostMutation,
} from '@turbo-blog/api'
import { TurboPostForm } from '../../containers'
import { Button } from '@turbo-blog/web-ui'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useAppDispatch } from '@turbo-blog/store'
import { useState } from 'react'

const TurboPostAdd = () => {
  const router = useRouter()
  const [sendRequest, result] = useAddTurboPostMutation()
  const dispatch = useAppDispatch()
  const [requestError, setRequestError] = useState(null)

  const handleSubmit = async (data: {
    heading: string
    content: string
    tags: Array<{ value: string }>
  }) => {
    const mappedData = {
      title: data.heading,
      body: data.content,
      userId: 1,
      tags: data.tags
        .map((tag) => tag.value.trim())
        .join(' ')
        .split(' '),
    }

    try {
      const response = await sendRequest(mappedData).unwrap()

      alert(JSON.stringify(response, null, 2))

      dispatch(
        extendedTurboPostsApiSlice.util.updateQueryData(
          'getPosts',
          undefined,
          (draftPosts) => {
            draftPosts.push({
              content: response.content,
              heading: response.heading,
              id: response.id,
              tags: response.tags,
            })
          },
        ),
      )
    } catch (error) {
      setRequestError(error)
    }
  }

  let error = undefined

  if (result.error) {
    error = result.error
  } else if (requestError) {
    error = requestError
  }

  return (
    <>
      <Head>
        <title>Turbo posts add</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex gap-10 flex-col justify-center items-center">
        <Button onClick={() => router.back()}>Back</Button>

        <h1>Add turbo post</h1>
        <TurboPostForm
          onSubmit={handleSubmit}
          error={JSON.stringify(error, null, 2)}
          isLoading={result.isLoading}
        />
      </div>
    </>
  )
}

export default TurboPostAdd
