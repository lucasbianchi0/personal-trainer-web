'use client'

import { createTheme, NextUIProvider } from '@nextui-org/react';

const theme = createTheme({
  type: 'light',
});


export function Providers({children}) {
  return (
    <NextUIProvider theme={theme}>
      {children}
    </NextUIProvider>
  )
}