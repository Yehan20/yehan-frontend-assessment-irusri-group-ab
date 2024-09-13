import { RouterProvider } from 'react-router-dom'
import RouterContext from './router/router-context'
import AuthProvider from './context/auth-context'
import { ThemeProvider } from '@emotion/react'
import theme from './theme/theme'


function App() {

  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
           <RouterProvider router={RouterContext} />
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}

export default App
