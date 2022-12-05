import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { ReactNode } from 'react'
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  Provider,
} from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'

import { extra_midlewares, reducers } from './store_config'

export function makeStore() {
  return configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(extra_midlewares)
    },
  })
}

export const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>
}
export type AppStore = ReturnType<typeof makeStore>
export const wrapper = createWrapper<AppStore>(() => store, { debug: true })
