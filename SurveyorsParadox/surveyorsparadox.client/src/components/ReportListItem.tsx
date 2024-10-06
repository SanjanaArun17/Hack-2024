// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
//   } from "@/components/ui/accordion"

import Dialog from "./Dialog";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function ReportListItem(){

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

    const [buttonText, setButtonText] = useState("Open")

    useEffect(()=>{
        if(isOpen)
            setButtonText("Close")
        else
            setButtonText("Open")
    }, [isOpen])

    return(
        <>

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
                                        <Button className={`rounded hover:bg-white hover:text-black` } onClick={openModal}>{buttonText}</Button>
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
                <Dialog isOpen={isModalOpen} onClose={closeModal}>
                    <h2 className="text-lg font-bold">Modal Content</h2>
                    <p className="text-gray-700">
                    This is some content inside the modal. You can add as much content as
                    you like, and this area will become scrollable if there’s too much text.
                    </p>
                    <p className="text-gray-700 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                    vestibulum nibh nec elit hendrerit varius. Duis ac dictum libero. Sed
                    non urna a nibh varius auctor.
                    </p>
                    <p className="text-gray-700 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                    vestibulum nibh nec elit hendrerit varius. Duis ac dictum libero. Sed
                    non urna a nibh varius auctor.
                    </p>
                    <p className="text-gray-700 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                    vestibulum nibh nec elit hendrerit varius. Duis ac dictum libero. Sed
                    non urna a nibh varius auctor.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam porro fugiat dolorem iste maxime quo, pariatur eligendi quaerat recusandae rem id inventore consectetur molestiae dicta! Esse dolorum porro quis, facilis eius expedita temporibus quos fuga consequatur aspernatur tenetur ex vitae. Cumque quaerat error beatae ea cum voluptate incidunt dolorum nulla rem sequi, consequuntur aperiam eveniet harum voluptates deleniti quas et optio quam necessitatibus distinctio delectus molestiae perferendis quis? Aperiam dicta, inventore, numquam facere iure nemo quisquam tempore laudantium quis reprehenderit totam minus? Totam commodi placeat, ea sapiente ipsa molestias, earum, dolor illum iure amet aspernatur nam magnam. Ea, expedita provident.
                    </p>
                </Dialog>
            </div>
        </>
    );
}