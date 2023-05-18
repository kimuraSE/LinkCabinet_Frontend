import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import axios from 'axios'

import { useEffect } from 'react'
import { CsrfToken } from '@/types'

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();


export default function App({ Component, pageProps }: AppProps) {

  useEffect(()=>{
    axios.defaults.withCredentials = true
    const getCsrfToken = async () => {
      const {data}=await axios.get<CsrfToken>(
          `http://localhost:8080/csrf`
      )
      axios.defaults.headers.common['X-CSRF-TOKEN']=data.csrf_token
  }
    getCsrfToken()
  },[])

  return (
  <QueryClientProvider client={queryClient}>
  <Component {...pageProps} />
  </QueryClientProvider>
  )
}
