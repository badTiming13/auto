import ServiceTabs from "@/components/ServiceTabs";


const testTabs = [
    {
        icon: "🍅",
        label: "Web App ",
        description: "Our team specializes in developing custom web solutions that drive business success. Combining innovative design with technical excellence, we turn your vision into leading digital experiences. We use cutting-edge technologies to create secure, scalable, and fast web applications.",
        type: "WebApp"
    },
    {
        icon: "🍅",
        label: "E-commerce",
        description: "Master complex markets with our tailored e-commerce solutions. We excel in sophisticated builds beyond standard offerings, focusing on revolutionizing logistics, unique marketplaces, and advanced B2B platforms. Elevate your online presence with our custom, market-leading expertise.",
        type: "ECommerce"
    },
    {
        icon: "🍅",
        label: "Automation",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae. Cum accusamus, non fuga et reprehenderit maxime debitis! Non expedita vitae dolores aspernatur. Sunt, enim.",
        type: "Automation"
    },
    {
        icon: "🍅",
        label: "AI",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae. Cum accusamus, non fuga et reprehenderit maxime debitis! Non expedita vitae dolores aspernatur. Sunt, enim.",
        type: "AiDev"
    },
]

export default function ServiceSection() {
    return (
        <div className="py-32 px-12 flex flex-col">
            <div className="flex items-center justify-around">
                <div>
                    <h1 className=" text-[1.75rem] font-semibold text-white lg:text-[3.5rem] max-w-2xl">Our web development solutions</h1>
                </div>
                <div>
                    <ServiceTabs tabs={testTabs} />
                </div>
            </div>
            <div className="h-[30vh]"></div>
            <div className="flex items-center justify-around ">
                <div>
                    <ServiceTabs tabs={testTabs} />
                </div>
                <div className="pl-[10%]">
                    <h1 className=" text-[1.75rem] font-semibold text-white lg:text-[3.5rem]">Mobile development solutions</h1>
                </div>
            </div>
            <div className="h-[30vh]"></div>
            <div className="flex items-center justify-around">
                <div>
                    <h1 className=" text-[1.75rem] font-semibold text-white lg:text-[3.5rem]">Our design solutions</h1>
                </div>
                <div>
                    <ServiceTabs tabs={testTabs} />
                </div>
            </div>
        </div>
    )
}