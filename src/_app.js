import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'components/_theme'
import CSS from 'components/_CSS'
import { SidebarLayout, ScopeProvider } from '@compositor/x0/components'
import scope from '_scope'

const App = props => (
  <React.Fragment>
    <CSS />

    <ThemeProvider theme={theme}>
      <ScopeProvider scope={scope} >
        <SidebarLayout {...props} />
      </ScopeProvider>
    </ThemeProvider>
  </React.Fragment>
)

App.defaultProps = {
  title: 'Playground'
}

export default App
