import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Movies from './pages/Movies.jsx'
import MoviesDetail from './pages/MoviesDetail.jsx'
import Navbar from './components/Navbar.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      { path: '/home', element: <Home />},
      { path: '/movies',element: <Movies />},
      { path: '/moviesdetail',element: <MoviesDetail />},
      
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
