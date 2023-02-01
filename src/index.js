import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import App from './App'
import { Main } from './components/Main/Main'
import { SignForms } from './components/SignForms/SignForms'
import { ProfileForm } from './components/ProfileForm/ProfileForm'
import { store } from './redux/store'
import { Cart } from './components/Cart/Cart'
import { ProductDetailPage } from './components/ProductDetailPage/ProductDetailPage'
import { FilterContextProvider } from './components/FilterContext/FilterContextProvider'
import { Favourites } from './components/Favourites/Favourites'
import { AddProduct } from './components/AddProduct/AddProduct'

// const queryClient = new QueryClient()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'login',
        element: <SignForms />,
      },

      {
        path: 'signup',
        element: <SignForms />,
      },
      {
        path: 'profile',
        element: <ProfileForm />,
      },
      {
        path: 'product/:id',
        element: <ProductDetailPage />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'favourites',
        element: <Favourites />,
      },
      {
        path: 'add_product',
        element: <AddProduct />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <FilterContextProvider>
          <RouterProvider router={myRouter} />
        </FilterContextProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
