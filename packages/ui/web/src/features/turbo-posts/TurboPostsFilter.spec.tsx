import { render, fireEvent, screen } from '@testing-library/react'
import { IFilter } from '@turbo-blog/types'
import { TurboPostsFilter } from './TurboPostsFilter'

const filters: IFilter[] = [
  {
    title: 'Technology',
  },
  {
    title: 'Art',
  },
  {
    title: 'Books',
  },
  {
    title: 'Photographs',
  },
]

describe('Turbo posts filter', () => {
  it('renders', () => {
    const handleToggle = jest.fn()

    const { queryAllByText } = render(
      <TurboPostsFilter filters={filters} onToggle={handleToggle} />,
    )

    expect(queryAllByText('Technology')).toHaveLength(1)
    expect(queryAllByText('Art')).toHaveLength(1)
    expect(queryAllByText('Books')).toHaveLength(1)
    expect(queryAllByText('Photographs')).toHaveLength(1)
  })

  it('toggles', () => {
    const handleToggle = jest.fn()

    render(<TurboPostsFilter filters={filters} onToggle={handleToggle} />)

    fireEvent.click(screen.getByText(/Art/i))

    expect(handleToggle).toHaveBeenCalledTimes(1)
  })

  it('clears', () => {
    const handleToggle = jest.fn()
    const handleClear = jest.fn()

    render(
      <TurboPostsFilter
        filters={filters}
        onToggle={handleToggle}
        onClear={handleClear}
      />,
    )

    fireEvent.click(screen.getByText(/Clear all filters/i))

    expect(handleClear).toHaveBeenCalledTimes(1)
  })
})
