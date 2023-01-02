import { render, fireEvent, screen } from '@testing-library/react'
import {
  Chip,
  TurboPostsFilter,
  TurboPost,
  TurboPostsList,
} from '@turbo-blog/web-ui'
import { IFilter, ITurboPost } from '@turbo-blog/types'

describe('Chip', () => {
  it('renders', () => {
    const { queryAllByText } = render(<Chip title="Test" />)
    expect(queryAllByText('Test')).toHaveLength(1)
  })
  it('clicks', () => {
    const handleClick = jest.fn()
    render(<Chip onClick={handleClick} title="test" />)
    fireEvent.click(screen.getByText(/test/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})

describe('TurboPostsFilter', () => {
  const filters: IFilter[] = [
    {
      title: 'Filter',
    },
    {
      title: 'Filter',
      selected: true,
    },
    {
      title: 'Filter2',
      disabled: true,
    },
  ]

  it('renders', () => {
    const { queryAllByText } = render(<TurboPostsFilter filters={filters} />)
    expect(queryAllByText('Filter')).toHaveLength(2)
  })
  it('clicks', () => {
    const handleClick = jest.fn((filter) => {})
    render(<TurboPostsFilter filters={filters} onToggle={handleClick} />)
    fireEvent.click(screen.getAllByText(/Filter/i)[0])
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
  it('dosent click', () => {
    const handleClick2 = jest.fn((filter) => {})
    render(<TurboPostsFilter filters={filters} onToggle={handleClick2} />)
    fireEvent.click(screen.getByText(/Filter2/i))
    expect(handleClick2).toHaveBeenCalledTimes(0)
  })
})

export const mockPosts: ITurboPost[] = [
  {
    id: 1,
    heading: 'His mother had always taught him',
    content:
      "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
  },
  {
    id: 2,
    heading: 'He was an expert but not in a discipline',
    content:
      'He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.',
  },
]

describe('TurboPostsList', () => {
  const handlePostListClick = jest.fn((post) => {})
  it('renders & handles clicks', () => {
    const { queryAllByText } = render(
      <TurboPostsList
        posts={mockPosts}
        emptyMessage=""
        onClick={handlePostListClick}
      />,
    )
    const el = queryAllByText('His mother had always taught him')
    expect(el).toHaveLength(1)
    fireEvent.click(el[0])
    expect(handlePostListClick).toHaveBeenCalledTimes(1)
  })
})

describe('TurboPost', () => {
  it('renders', () => {
    const { queryAllByText } = render(
      <TurboPost
        content={mockPosts[0].content}
        heading={mockPosts[0].heading}
      />,
    )
    expect(queryAllByText('His mother had always taught him')).toHaveLength(1)
    expect(
      screen.getByText(/He never looked down on those/),
    ).toBeInTheDocument()
  })
})
