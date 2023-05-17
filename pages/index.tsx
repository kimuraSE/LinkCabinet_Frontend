import Footer from "@/components/footer/_footer"
import Header from "@/components/header/_header"

import { useState, FormEvent } from 'react'
import { CheckBadgeIcon, ArrowPathIcon } from '@heroicons/react/24/solid'
import { useMutateAuth } from '../hooks/useMutateAuth'



export default function Home() {

  
  return (

    <div>
      <Header />

      <Footer />
    </div>
  

  )
}
