'use client'

import Spline from '@splinetool/react-spline'
import { Application } from '@splinetool/runtime'
import { useTheme } from 'next-themes'
import { useContext, useEffect, useRef } from 'react'
import { SplineContext } from 'src/app/common/splineProvider'

export default function PricingCard() {
  const theme = useTheme()
  const { setSpline } = useContext(SplineContext)
  let initialZoom: number = 0
  const cube = useRef<any>()

  function getScaleValue() {
    const screenWidth = window.innerWidth
    if (screenWidth > 1600) {
      return 1.2
    } else if (screenWidth > 1600) {
      return 1
    } else if (screenWidth > 1200) {
      return 0.9
    } else if (screenWidth > 1000) {
      return 0.8
    } else if (screenWidth > 800) {
      return 0.65
    } else if (screenWidth > 700) {
      return 0.55
    } else if (screenWidth > 500) {
      return 0.45
    }
    return 0.35
  }

  function onLoad(spline: Application) {
    const scaleValue = getScaleValue()
    initialZoom = scaleValue
    spline.setZoom(scaleValue)
    const obj = spline.findObjectByName('Cube')
    cube.current = obj
    spline.setVariable('Theme', theme.resolvedTheme!)
    setSpline(spline)
  }

  function setSplineScale(scale: number) {
    if (cube.current === undefined) return
    const newScale = cube.current.scale
    newScale.x = scale
    newScale.y = scale
    newScale.z = scale
    cube.current.scale = newScale
  }

  useEffect(() => {
    function scaleSpline() {
      if (cube.current?.scale) {
        const scaleValue = getScaleValue()
        setSplineScale(scaleValue / initialZoom)
      }
    }
    window.addEventListener('resize', scaleSpline)
    return () => window.removeEventListener('resize', scaleSpline)
  }, [initialZoom])

  return (
    <Spline
      scene="https://prod.spline.design/hdvfU3ZZcxwRvbJG/scene.splinecode"
      onLoad={onLoad}
    />
  )
}
