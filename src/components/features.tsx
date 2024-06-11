import { Card } from '@/components/ui/card'
import { JSX, SVGProps } from 'react'

function Element({
  title,
  description,
  alt,
}: {
  title: string
  description: string
  alt: string
}) {
  return (
    <button className="flex w-full items-center justify-between rounded-md px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-50 focus-visible:ring-2 focus-visible:ring-gray-500 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-400">
      <div className="flex items-center space-x-3">
        <img
          alt={alt}
          className="rounded-md"
          height={40}
          src="/placeholder.svg"
          style={{
            aspectRatio: '40/40',
            objectFit: 'cover',
          }}
          width={40}
        />
        <div className="grid gap-1">
          <span>{title}</span>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
      <ChevronRightIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
    </button>
  )
}

export function Features() {
  return (
    <Card className="grid gap-6 p-4 md:grid-cols-[300px_1fr] md:p-6">
      <div className="space-y-2">
        <div className="p-4">
          <h2 className="mb-4 text-lg font-semibold">Galerie</h2>
          <div className="space-y-2">
            <Element
              title="Image 1"
              description="This is the first image in the gallery."
              alt="Image 1"
            />
            <Element
              title="Image 2"
              description="This is the second image in the gallery."
              alt="Image 2"
            />
            <Element
              title="Image 3"
              description="This is the third image in the gallery."
              alt="Image 3"
            />
            <Element
              title="Image 4"
              description="This is the fourth image in the gallery."
              alt="Image 4"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          alt="Image Preview"
          className="h-auto max-h-[400px] w-full max-w-[600px] object-contain"
          height={400}
          src="/placeholder.svg"
          style={{
            aspectRatio: '600/400',
            objectFit: 'cover',
          }}
          width={600}
        />
      </div>
    </Card>
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
