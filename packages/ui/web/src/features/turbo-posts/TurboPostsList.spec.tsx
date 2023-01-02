import { render, fireEvent, screen } from '@testing-library/react'
import { TurboPostsList } from './TurboPostsList'
import { ITurboPost } from '@turbo-blog/types'

const posts: ITurboPost[] = [
  {
    id: 1,
    content: 'hello world',
    heading: 'Art',
    tags: ['a', 'b'],
  },
  {
    id: 2,
    content: 'hello world 2',
    heading: 'Tech',
    tags: ['a', 'j'],
  },
  {
    id: 3,
    content: 'hello world 3',
    heading: 'Sport',
    tags: ['m', 'b'],
  },
]

describe('Turbo posts list', () => {
  it('renders', () => {
    const handleClick = jest.fn()

    const { queryAllByText } = render(
      <TurboPostsList
        posts={posts}
        emptyMessage="Empty list.."
        onClick={handleClick}
      />,
    )

    expect(queryAllByText(/hello world/)).toHaveLength(3)
  })

  it('handle click', () => {
    const handleClick = jest.fn()

    render(
      <TurboPostsList
        posts={posts}
        emptyMessage="Empty list.."
        onClick={handleClick}
      />,
    )

    fireEvent.click(screen.queryAllByText(/hello world/)[0])

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('empty list', () => {
    const handleClick = jest.fn()

    const { queryAllByText } = render(
      <TurboPostsList
        posts={[]}
        emptyMessage="Empty list.."
        onClick={handleClick}
      />,
    )

    expect(queryAllByText('Empty list..')).toHaveLength(1)
  })
})
