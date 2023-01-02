import { Provider } from 'react-redux'
import { store, turboPostsActions } from '@turbo-blog/store'
import { ITurboPost } from '@turbo-blog/types'
import { render, screen, fireEvent } from '@testing-library/react'
import {
  TurboPostsFilter,
  TurboPostsFilterableList,
  TurboPostsFilteredList,
} from './containers/features'

describe('TurboPostsFilterableList', () => {
  beforeEach(() => {
    store.dispatch(turboPostsActions.clearSelectedTags())
  })

  it('Rendered blogposts should shrink when filtered', () => {
    const { queryAllByText } = render(
      <Provider store={store}>
        <TurboPostsFilterableList posts={dummyPosts} />
      </Provider>,
    )
    expect(queryAllByText('His mother had always taught him')).toHaveLength(1)
    expect(
      queryAllByText('He was an expert but not in a discipline'),
    ).toHaveLength(1)

    fireEvent.click(screen.getByText('history'))
    expect(queryAllByText('His mother had always taught him')).toHaveLength(1)
    expect(
      queryAllByText('He was an expert but not in a discipline'),
    ).toHaveLength(0)
  })

  it('Rendered blogposts should shrink when filtered (Refactored)', () => {
    const { queryAllByText } = render(
      <Provider store={store}>
        <TurboPostsFilter posts={dummyPosts} />
        <TurboPostsFilteredList posts={dummyPosts} />
      </Provider>,
    )
    expect(queryAllByText('His mother had always taught him')).toHaveLength(1)
    expect(
      queryAllByText('He was an expert but not in a discipline'),
    ).toHaveLength(1)

    fireEvent.click(screen.getByText('history'))

    expect(queryAllByText('His mother had always taught him')).toHaveLength(1)
    expect(
      queryAllByText('He was an expert but not in a discipline'),
    ).toHaveLength(0)
  })
})

const dummyPosts: ITurboPost[] = [
  {
    id: 1,
    heading: 'His mother had always taught him',
    content:
      "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    tags: ['history', 'american', 'crime'],
  },
  {
    id: 2,
    heading: 'He was an expert but not in a discipline',
    content:
      'He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.',
    tags: ['french', 'fiction', 'english'],
  },
]
