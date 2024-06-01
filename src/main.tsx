import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme-provider'
import router from '@/router'
import '@/index.css'
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
      <Toaster />
      </PersistGate>
        </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
