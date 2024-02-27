import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Faq() {
  return (
    <section className="my-40 flex w-full flex-col items-center space-y-4 px-2">
      <p className="text-3xl font-bold">Common Questions</p>
      <div className="flex w-full items-center justify-center">
        <Accordion
          type="single"
          collapsible
          className="w-96 md:w-[600px] xl:w-[750px]"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Will you be supporting the Solidity language?
            </AccordionTrigger>
            <AccordionContent>
              Osmium already supports the Solidity language.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Will you be supporting all languages for smart contract
              development?
            </AccordionTrigger>
            <AccordionContent>
              No, if you desire a language to be supported by Osmium, you can
              contact us and inform us of your request.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              We wish for Osmium to support our chain, is this possible?
            </AccordionTrigger>
            <AccordionContent>
              Please reach out to us, and we will initiate discussions with you.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
