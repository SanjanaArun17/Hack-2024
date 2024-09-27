// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
//   } from "@/components/ui/accordion"
  
  import ReportListItem from "../ReportListItem"


  export default function ReportListComponent() {
    return (
        <>
            <div className=" text-white font-bold">

                <nav className="grid grid-cols-3 h-20 border border-b-slate-100 items-center mb-12">
                    <div className="col-span-2 mx-2">MOBILE INSPECTOR</div>
                    <div className="col-span-1 flex justify-around">
                        <div className="mx-4">ASSIGN TASK</div>
                        <div className="mx-4">CALENDAR</div>
                        <div className="mx-4 text-yellow-200">REPORTS</div>
                    </div>
                </nav>

                <ReportListItem></ReportListItem>
                <ReportListItem></ReportListItem>
                <ReportListItem></ReportListItem>

                {/* <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                    </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It's animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                    </AccordionItem>
                </Accordion> */}
            </div>
        </>
    )
  }
  