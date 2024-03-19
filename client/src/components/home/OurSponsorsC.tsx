import { SponsorProps } from "./sponsorProps"

const OurSponsorsC = () => {
    return (
        <div>
            <div className="container md:flex-shrink-0 pl-100 mx-auto md:px-12 relative bg-cover bg-center bg-coffeeBgImg no-repeat">
            <div className="absolute inset-0 w-full h-full bg-gray-200 bg-opacity-70"></div>
                <div  className="flex justify-around pt-10 pb-5  mb-3 content-center">
                     <h3 className="z-10 flex pt-8 ml-0 text-black font-medium text-2xl">Special Thanks to Our Sponsors
                     <img className="z-10 object-scale-down h-10 w-10 ml-3" src="../../src/assets/hand-shake.svg" alt="sponsorIcon" /></h3>
                     <button className="z-10 text-lg bg-OHighlightColor mt-auto text-PrimaryColor shadow-md hover:bg-OHighlightColor/80 hover:border hover:border-OHighlightColor">Become A Sponsor</button>
                </div>

                 <hr className="relative z-10 border-2 border-dashed border-SecondaryColor" />

                <div className="flex flex-wrap mt-12 pb-14 lg:gap-1 lg:grid-cols-4 justify-center">
                            <div>
                              <SponsorProps
                                sponsorUrl = "#"
                                sponsorLogo="Gold-Sponsor"
                                sponsorDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                              />
                            </div>
                            <div>
                              <SponsorProps
                                sponsorUrl = "#"
                                sponsorLogo="Gold-Sponsor2"
                                sponsorDescription="2.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                              />
                            </div>
                            <div>
                              <SponsorProps
                                sponsorUrl = "#"
                                sponsorLogo="Gold-Sponsor3"
                                sponsorDescription="3.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                              />
                            </div>
                            <div>
                              <SponsorProps
                                sponsorUrl = "#"
                                sponsorLogo="Gold-Sponsor4"
                                sponsorDescription="4.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                              />
                            </div>
                </div>
            </div>
        </div>
    )
}

export default OurSponsorsC