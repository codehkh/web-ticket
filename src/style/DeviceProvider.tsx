'use client'

import { ThemeProvider } from 'styled-components'
import StyleRegistry from '@/style/StyleRegistry'
import GlobalStyle from '@/style/GlobalStyles'

function DeviceProvider(props: React.PropsWithChildren) {
  const theme = {
    mobile: '768px',
    web: '1024px',
  }

  return (
    <StyleRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {props.children}
      </ThemeProvider>
    </StyleRegistry>
  )
}

export default DeviceProvider
