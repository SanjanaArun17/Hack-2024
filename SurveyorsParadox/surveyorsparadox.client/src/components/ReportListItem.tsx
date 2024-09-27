// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
//   } from "@/components/ui/accordion"

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function ReportListItem(){

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [buttonText, setButtonText] = useState("Open")

    const toggleCollapse = () => {
        
        setIsOpen(!isOpen);
    };

    useEffect(()=>{
        if(isOpen)
            setButtonText("Close")
        else
            setButtonText("Open")
    }, [isOpen])

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

            <div>
                <div className="flex justify-center my-6">
                    <div className="w-4/5 border-2 rounded-md border-slate-100 hover:border-yellow-300 p-6">
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
                                        <Button className={`rounded hover:bg-white hover:text-black` } onClick={toggleCollapse}>{buttonText}</Button>
                                    </div>
                            </div>
                        </div>

                        <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
                            <div className="p-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eveniet est distinctio facere ipsum deleniti architecto sit doloribus quasi beatae, ipsam unde vel aliquam odio praesentium quae voluptatum illo veniam molestiae consectetur cum impedit! Ab ipsam tempore quaerat. Voluptas quas recusandae consequatur cumque blanditiis, dolores sint ex nulla distinctio, culpa ratione numquam! Obcaecati numquam earum nemo ab dolorum accusantium facere nostrum perspiciatis soluta repellendus? Aliquid ratione exercitationem blanditiis eius voluptates deleniti laudantium illo repellendus maiores alias sunt assumenda inventore, unde cupiditate tenetur dolore rem at delectus quasi a porro illum vitae nobis iusto? Unde consectetur a dicta! Officiis, nobis distinctio!
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </>
    );
}