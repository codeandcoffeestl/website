
const Footer = () => {
    return (
        <div className="flex gap-5 justify-between items-start px-px mt-3 w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col self-start text-2xl whitespace-nowrap text-stone-50">
                <div>About</div> <div className="mt-4">Events</div>{" "}
                <div className="mt-4">Volunteer</div>{" "}
                <div className="mt-4">Sponsor</div>{" "}
                <div className="mt-2.5">Contact</div>{" "}
                <div className="mt-8 text-base">Terms of Service</div>
            </div>{" "}
            <div className="self-end mt-8 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col items-center text-2xl whitespace-nowrap text-stone-50 max-md:mt-10">
                            <div>Visit Us</div>{" "}
                            <img
                                loading="lazy"
                                srcSet="..."
                                className="mt-8 aspect-[4] w-[284px]"
                            />
                        </div>
                    </div>{" "}
                    <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="..."
                            className="grow mt-4 w-full aspect-[1.96] max-md:mt-10"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer