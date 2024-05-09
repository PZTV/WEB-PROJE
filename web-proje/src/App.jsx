import { useState } from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  createRoutesFromChildren,
} from 'react-router-dom'

import MainPage from './pages/MainPage'
import About from './pages/About'

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/">
      <Route index element={<MainPage />} />,
      <Route path="/about" element={<About />} />,
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
