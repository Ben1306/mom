import {ArrowRightIcon} from "@heroicons/react/24/outline";

export default function GoToText({onClick}){
    return(
        <div className="flex justify-center my-44">
            <button onClick={onClick} className="font-kalam flex items-center gap-8 group text-4xl rounded-full border-2 border-black px-12 py-4">
                {"Commencer"}
                <ArrowRightIcon className="transition duration-700 ease-out w-10 h-10 group-hover:rotate-90 group-hover:translate-x-[20px]" />
            </button>
        </div>
    )
}