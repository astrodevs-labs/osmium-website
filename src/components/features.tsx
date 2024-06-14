'use client'

import { Card } from '@/components/ui/card'
import interact from '@/public/interact.png'
import random1 from '@/public/random1.jpg'
import random2 from '@/public/random2.jpg'
import random3 from '@/public/random3.jpg'
import Image from 'next/image'
import { Dispatch, JSX, SVGProps, SetStateAction, useState } from 'react'

const list = [
  {
    title: ' Main Interface of the Extension:',
    description:
      'Discover the main interface of our VS Code extension, designed to simplify the development of smart contracts. Easily access all necessary tools from a single intuitive interface.',
    alt: 'Image ',
    src: interact,
  },
  {
    title: ' Automated Security Analysis:',
    description:
      'Take advantage of our automated security analysis tool to detect potential vulnerabilities in your smart contracts. Ensure your code is secure and follows best practices.',
    alt: 'Image ',
    src: random1,
  },
  {
    title: ' Integrated Testing Panel:',
    description:
      'View your smart contract tests directly within the VS Code test panel. Ensure the quality and robustness of your code by managing and running tests seamlessly within the editor.',
    alt: 'Image ',
    src: random2,
  },
  {
    title: ' Integrated Deployment Tools:',
    description:
      'Visualize the powerful deployment tools integrated into our extension. Deploy your smart contracts on different blockchains with just a few clicks, without leaving your code editor.',
    alt: 'Image ',
    src: random3,
  },
]

function Element({
  title,
  description,
  setCurrent,
  index,
}: {
  title: string
  description: string
  setCurrent: Dispatch<SetStateAction<number>>
  index: number
}) {
  return (
    <button
      onClick={() => setCurrent(index)}
      className="flex w-full max-w-[500px] items-center justify-between rounded-md px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-50 focus-visible:ring-2 focus-visible:ring-gray-500 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-400"
    >
      <div className="flex items-center space-x-3">
        <kbd className="flex items-start justify-start">{index + 1}</kbd>
        <div className="flex flex-col items-start">
          <h5 className="">{title}</h5>
          <p className="text-start text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
      <ChevronRightIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
    </button>
  )
}

export function Features() {
  const [current, setCurrent] = useState(0)
  return (
    <div className="my-32 flex items-center justify-center">
      <Card className="flex w-fit justify-around p-4 md:p-6">
        <div className="space-y-2">
          <div className="p-4">
            <h2 className="mb-4 text-lg font-semibold">Galerie</h2>
            <div className="space-y-2">
              {list.map((item, index) => (
                <Element
                  key={index}
                  {...item}
                  setCurrent={setCurrent}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex h-fit w-[500px] items-center justify-center">
          <Image
            alt={list[current].alt}
            className="h-auto w-full"
            src={list[current].src}
          />
        </div>
      </Card>
    </div>
  )
}

function ChevronRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
