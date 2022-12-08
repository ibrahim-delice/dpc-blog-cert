import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from '../../src'

export interface ITurboPostsState {
  selectedTags: Array<string>
}

export const turboPostsInitialState: ITurboPostsState = {
  selectedTags: [],
}

export const turboPostsSlice = createSlice({
  name: 'turboPostsSlice',
  initialState: turboPostsInitialState,
  reducers: {
    toggleSelectedTag: ({ selectedTags }, action: PayloadAction<string>) => {
      const { payload } = action
      const newState = [...selectedTags]

      const matchIndex = newState.indexOf(payload)

      if (matchIndex > -1) {
        newState.splice(matchIndex, 1)
      } else {
        newState.push(payload)
      }

      selectedTags = newState
    },
    clearSelectedTags: (state) => {
      state.selectedTags = []
    },
  },
})

export const selectTurboPostsSelectedTags = (state: AppState) =>
  state.turboPosts.selectedTags

export const turboPostsActions = turboPostsSlice.actions

export const turboPostsReducer = turboPostsSlice.reducer

export default turboPostsSlice
