import React, { createContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import TodoList from './pages/TodoList'
import { Provider } from 'react-redux'
import mystore from './store/store'

const App = () => {
  return (
    <>
      <Provider store={mystore}>
        <TodoList />
      </Provider>
    </>
  )
}

export default App