// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
//   } from "@/components/ui/accordion"

export default function ReportListItem(){
    return(
        <>

            {/* <div className="flex justify-center">
                <div className="w-2/3 border-2 border-slate-100 p-6">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Report Item</AccordionTrigger>
                                <AccordionContent>
                                    Report Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque quisquam officiis ipsa quae voluptatum? Voluptatibus accusamus possimus voluptatem iste, alias praesentium facere sed aliquam minima sequi laborum, quos earum?
                                </AccordionContent>
                        </AccordionItem>
                        
                    </Accordion>
                </div>
            </div> */}

            <div className="flex justify-center my-6">
                <div className="w-4/5 border-2 rounded-md border-slate-100 p-6">
                    <div className="grid grid-cols-2">
                        <div>
                            <div>
                                <div className="text-4xl my-2">27-09-2024</div>
                                <div className="text-zinc-400 text-sm my-2">Trimble Information Technology Building</div>
                                <div className="my-2">Name</div>
                            </div>
                        </div>

                        <div className="flex justify-end h-full">
                                <div>
                                    <div>Icon</div>
                                    <div>Icon.png</div>
                                </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        
        </>
    );
}