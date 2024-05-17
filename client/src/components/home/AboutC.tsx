const AboutC = () => {

    return (
        <div id="about" className="bg-SecondaryColor p-20 flex justify-center">

            <div className="bg-WAccentColor py-10 px-20 max-w-3xl shadow-xl">
             
                <h2 className="text-black text-3xl font-bold mb-1 text-center md:text-left">
                    About Code & Coffee St.Louis</h2>

                <hr className="border-2 border-dashed border-SecondaryColor" />

                <p className="mt-5 mb-4 text-center md:text-left">
                    Code and Coffee is an inclusive, informal co-working session for anyone in the tech space! 
                    People of all skill level attend, and we love it that way.
                    Many people (optionally) bring projects ot work on, and many other people (optioonally) socialize the entire time.
                    It's completely up to you!
                </p>

                <button>
                    Contributes List &gt;&gt;
                </button>
            </div>

        </div>
    )
}

export default AboutC