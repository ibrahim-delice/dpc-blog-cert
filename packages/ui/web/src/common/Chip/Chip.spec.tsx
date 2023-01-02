import { render, fireEvent, screen } from '@testing-library/react'
import { Chip } from './Chip'

describe('Chip', () => {
  it('renders', () => {
    const { queryAllByText } = render(<Chip title="Filter" />)

    expect(queryAllByText('Filter')).toHaveLength(1)
  })

  it('clicks', () => {
    const handleClick = jest.fn()

    render(<Chip onClick={handleClick} title="Filter" />)

    fireEvent.click(screen.getByText(/Filter/i))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('cannot click if disabled', () => {
    const handleClick = jest.fn()

    render(<Chip onClick={handleClick} title="Filter" disabled={true} />)

    fireEvent.click(screen.getByText(/Filter/i))

    expect(handleClick).toHaveBeenCalledTimes(0)
  })
})
