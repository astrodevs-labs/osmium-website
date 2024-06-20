'use client'

import Spline from '@splinetool/react-spline'
import { Application } from '@splinetool/runtime'
import { useTheme } from 'next-themes'
import { useContext } from 'react'
import { SplineContext } from 'src/app/splineProvider'

export default function PricingCard() {
  const theme = useTheme()
  const { setSpline } = useContext(SplineContext)

  function onLoad(spline: Application) {
    spline.setVariable('Theme', theme.resolvedTheme!)
    setSpline(spline)
  }

  return (
    <Spline
      scene="https://prod.spline.design/hdvfU3ZZcxwRvbJG/scene.splinecode"
      onLoad={onLoad}
    />
  )
}
