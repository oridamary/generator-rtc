import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import theme from './theme'

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={createMuiTheme(theme)}>{children}</ThemeProvider>
    </React.Fragment>
  )
}

export default Layout
