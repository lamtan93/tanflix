import { BrowserRouter } from 'react-router-dom'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import reducers from '../redux/reducers'

const store = createStore(reducers, {}, applyMiddleware(thunk))
function ProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  )
}

export default ProviderWrapper
