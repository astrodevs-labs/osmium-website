'use client'

import interact from '@/public/interact.webp'
import slither from '@/public/slither.png'
import testing from '@/public/testing.png'
import Image from 'next/image'
import { useState } from 'react'

const features = [
  {
    title: ' Main Interface of the Extension',
    description:
      'Discover the main interface of our VS Code extension, designed to simplify the development of smart contracts. Easily access all necessary tools from a single intuitive interface.',
    alt: 'Image ',
    image: interact,
  },
  {
    title: ' Automated Security Analysis',
    description:
      'Take advantage of our automated security analysis tool to detect potential vulnerabilities in your smart contracts. Ensure your code is secure and follows best practices.',
    alt: 'Image ',
    image: slither,
  },
  {
    title: ' Integrated Testing Panel',
    description:
      'View your smart contract tests directly within the VS Code test panel. Ensure the quality and robustness of your code by managing and running tests seamlessly within the editor.',
    alt: 'Image ',
    image: testing,
  },
]

export function Features() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center p-4">
      <div className="mb-4 flex overflow-hidden rounded-md bg-gray-200 dark:bg-gray-800">
        {features.map((item, index) => (
          <button
            key={index}
            className={`flex-1 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              activeIndex === index
                ? 'rounded-md bg-gray-300 text-black dark:bg-gray-900 dark:text-white'
                : 'bg-gray-200 text-gray-500 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="max-w-screen-sm rounded-lg bg-gray-200 p-6 shadow-md dark:bg-gray-900 dark:text-white">
        <p className="mb-4 text-lg">{features[activeIndex].description}</p>
        <div className="flex w-full items-center justify-center">
          <Image
            src={features[activeIndex].image}
            alt={`Image for ${features[activeIndex].title}`}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  )
}
