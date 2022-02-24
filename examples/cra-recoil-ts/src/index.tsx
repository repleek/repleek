import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import App from './App'
import theme from './assets/theme'

dayjs.extend(relativeTime)

const rootElement = document.getElementById('root')
render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  rootElement
)
