import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'components/_theme'
import CSS from 'components/_CSS'
import { SidebarLayout } from '@compositor/x0/components'

const App = props => (
  <React.Fragment>
    <CSS />

    <ThemeProvider theme={theme}>
      <SidebarLayout {...props} />
    </ThemeProvider>
  </React.Fragment>
)

App.defaultProps = {
  title: 'Playground'
}

export default App
