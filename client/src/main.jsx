import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ChakraProvider, extendTheme} from "@chakra-ui/react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './screens/Home.jsx'

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
  }
]);

const theme = extendTheme({
  styles: {
    global: {

      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: '"Montserrat Alternates", sans-serif',
      },
      body: {
        height: "120vh",
        width: '100%',
        background: 'radial-gradient(circle at top, #085195 10%, #03386a 30%,#011950 80%)',
        margin: 0,
        color: 'white', // Optional: For text color to stand out
      },
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
    <RouterProvider router={router} />

    </ChakraProvider>
  </StrictMode>,
)
