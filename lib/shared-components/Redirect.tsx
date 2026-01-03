"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export const Redirect = ({path} : {path: string}) => {
    const router = useRouter()

    useEffect(() => {
        router.replace(path)
    }, [router])

  return <></>
}