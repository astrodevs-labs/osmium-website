'use client'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

export default function GoogleCaptchaWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const recaptchaKey: string | undefined = process?.env?.RECAPTCHA_SITE_KEY
  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey ?? 'NOT DEFINED'}>
      {children}
    </GoogleReCaptchaProvider>
  )
}
