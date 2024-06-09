export default function TodayCitation({citation}) {
    return(
        <section
            className="flex flex-col gap-8 w-full max-w-screen-lg font-handwritten px-8 py-12 bg-white rounded-xl border-2 border-black">
            <div className="text-center text-5xl font-medium text-black">{"Petit mot du jour 🌟"}</div>
            <div className="text-center text-3xl text-slate-400 font-medium text-black">{citation}</div>
        </section>
    )
}