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
    toggleSelectedTag: (state, action: PayloadAction<string>) => {
      const { payload } = action
      const { selectedTags } = state

      const matchIndex = selectedTags.indexOf(payload)

      if (matchIndex > -1) {
        selectedTags.splice(matchIndex, 1)
      } else {
        selectedTags.push(payload)
      }
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
