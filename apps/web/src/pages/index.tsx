import { NextPage } from 'next'
import React from 'react'
import { Text, PageLayout } from '@turbo-blog/web-ui'
import { useAppSelector, selectExampleValue } from '@turbo-blog/store'
import { useGetTodosQuery } from '@turbo-blog/api'

const IndexPage: NextPage = () => {
  //get a value from global state
  const exampleValue = useAppSelector(selectExampleValue)

  //get data from API
  const { data: todos } = useGetTodosQuery()

  return (
    <PageLayout>
      <Text type="h1" bottomMargin={'large'}>
        This is DPC Next RTKQ
      </Text>
      <Text bottomMargin="small">
        A simple NextJS site with a minimal ui library containing a few basic
        components
      </Text>
      <Text
        type={'subtitle1'}
        bottomMargin="small"
        text="It has packages for RTK State manager, typescript definitions, API Query caching, Mocking of data"
      />
      <Text type={'subtitle2'} text={`Current state value: ${exampleValue}`} />
      <Text>
        <>
          <br />
          Some data coming from API or mocked API:
          {todos &&
            todos
              .slice(0, 3)
              .map((todo) => <li key={todo.id}>{todo.title}</li>)}
        </>
      </Text>
    </PageLayout>
  )
}

export default IndexPage
