import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3'
import { Button } from './ui/button'

const CaptchaButton = ({ onVerifyCaptcha }: { onVerifyCaptcha: any }) => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const clickHandler = async () => {
    if (!executeRecaptcha) {
      return
    }

    const token = await executeRecaptcha('/')

    onVerifyCaptcha(token)
  }

  return (
    <Button onClick={clickHandler}>Please validate you are a human.</Button>
  )
}

export const ReCaptcha = ({ onVerifyCaptcha }: { onVerifyCaptcha: any }) => (
  <GoogleReCaptchaProvider
    reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
  >
    <CaptchaButton onVerifyCaptcha={onVerifyCaptcha} />
  </GoogleReCaptchaProvider>
)
