'use client'

import { Application } from '@splinetool/runtime'
import { ReactNode, createContext, useState } from 'react'

export const SplineContext = createContext<{
  spline: Application | null
  setSpline: React.Dispatch<React.SetStateAction<Application | null>>
}>({ spline: null, setSpline: () => {} })

export default function SplineProvider({ children }: { children: ReactNode }) {
  const [spline, setSpline] = useState<Application | null>(null)

  return (
    <SplineContext.Provider value={{ spline, setSpline }}>
      {children}
    </SplineContext.Provider>
  )
}
