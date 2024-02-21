import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Tailwind,
  Text,
} from '@react-email/components'
import * as React from 'react'

interface EmailTemplateProps {
  name: string
  email: String
  message: String
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              <strong>{name}</strong> would like to contact you about something!
            </Heading>

            <Text className="text-[14px] leading-[24px] text-black">
              {email}
            </Text>

            <Text className="text-[14px] leading-[24px] text-black">
              {message}
            </Text>

            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              This message was sent by : {name}.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
