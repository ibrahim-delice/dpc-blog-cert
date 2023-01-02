import { ITurboPost } from '@turbo-blog/types'

export interface ITurboPostsListProps {
  posts: Array<ITurboPost>
  emptyMessage: string
  onClick: (posts: ITurboPost) => void
}

export const TurboPostsList = (props: ITurboPostsListProps) => {
  const { posts, emptyMessage, onClick } = props

  if (!posts.length) return <div>{emptyMessage}</div>

  return (
    <ol>
      {posts.map((post) => (
        <li key={post.id} onClick={() => onClick(post)}>
          <h1 className="text-4xl">{post.heading}</h1>
          <p>{post.content}</p>
          <p>
            Tags:{' '}
            {post.tags?.length ? JSON.stringify(post.tags, null, 2) : 'none'}
          </p>
        </li>
      ))}
    </ol>
  )
}
