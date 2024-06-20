'use client'

import Spline from '@splinetool/react-spline'
import { Application } from '@splinetool/runtime'
import { useTheme } from 'next-themes'

export default function PricingCard() {
  const theme = useTheme()

  function onLoad(spline: Application) {
    spline.setVariable('Theme', theme.resolvedTheme!)
    console.log(spline.getVariables())
  }

  return (
    <Spline
      scene="https://prod.spline.design/hdvfU3ZZcxwRvbJG/scene.splinecode"
      onLoad={onLoad}
    />
  )
}
