export default function SliderCard({num, title}){
    return(
        <div data-number={num} className="flex w-full items-center justify-center min-w-96 min-h-[350px]  cursor-grab numerate">
            <h1 className="text-white text-2xl">{title}</h1>
        </div>
    )
}