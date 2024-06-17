'use client'

import interact from '@/public/interact.webp'
import random1 from '@/public/random1.jpg'
import testing from '@/public/testing.png'
import { Card } from '@/ui/card'
import clsx from 'clsx'
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
    src: testing,
  },
]

function Element({
  title,
  description,
  setCurrent,
  current,
  index,
}: {
  title: string
  description: string
  setCurrent: Dispatch<SetStateAction<number>>
  current: number
  index: number
}) {
  const showDesc = current == index
  return (
    <button
      onClick={() => setCurrent(index)}
      className="flex w-full max-w-[500px] items-center justify-between rounded-md px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-50 focus-visible:ring-2 focus-visible:ring-gray-500 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-400"
    >
      <div className="flex w-11/12 items-center space-x-3">
        <kbd className="flex items-start justify-start">{index + 1}</kbd>
        <div className="flex flex-col items-start">
          <h5 className="">{title}</h5>
          <p
            className={clsx(
              'text-start text-sm text-gray-500 transition-all duration-300 ease-linear dark:text-gray-400 ',
              showDesc ? 'h-32 opacity-100 sm:h-20' : 'h-0 opacity-0',
            )}
          >
            {showDesc ? description : null}
          </p>
        </div>
      </div>
      <div className="h-5 w-5">
        <ChevronRightIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </div>
    </button>
  )
}

export function Features() {
  const [current, setCurrent] = useState(0)
  return (
    <div className="my-32 flex items-center justify-center sm:px-2 md:px-8 lg:px-0 xl:px-12">
      <Card className="flex w-full max-w-[1000px] justify-around p-4 md:p-6">
        <div className="space-y-2 p-4">
          <div className="space-y-2">
            {list.map((item, index) => (
              <Element
                key={index}
                {...item}
                setCurrent={setCurrent}
                current={current}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="flex h-fit w-96 items-center justify-center md:w-[500px]">
          <Image
            alt={list[current].alt}
            className="h-auto w-full rounded-lg"
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
