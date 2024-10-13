const events = [
  {
    date: 'Released',
    title: 'Solidity Basic Features',
    description:
      'Get access to syntax highlighting, linting, formatting, references, testing with Foundry, gas estimation, deploying and interacting with contracts and scripts, Foundry compiler integration, and static security analysis with Slither, all in one place.',
  },
  {
    date: 'Q3 2024',
    title: 'Solidity Debugger',
    description:
      'With a debugger, our extension will completely support Solidity development.',
  },
]

function Event({
  date,
  title,
  description,
}: {
  date: string
  title: string
  description: string
}) {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {date}
      </time>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400 ">
        {description}
      </p>
    </li>
  )
}

export default function Timeline() {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {events.map((event) => (
          <Event
            date={event.date}
            title={event.title}
            description={event.description}
            key={event.title}
          />
        ))}
      </ol>
    </section>
  )
}
