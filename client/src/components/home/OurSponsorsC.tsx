import { SponsorProps } from "../../interfaces/sponsorProps"

const OurSponsorsC = () => {
    return (
        <div className="relative h-[400px] bg-cover bg-center bg-no-repeat mb-8 md:h-[75vh] bg-coffeeBgImg">
                <div className="absolute inset-0 w-full h-full bg-gray-200 bg-opacity-75">
                <div  className="flex justify-around pt-20 mb-5 content-cneter">
                    <h3 className="flex pt-8 ml-0 text-black font-medium text-xl">Special Thanks to Our Sponsors
                    <img className="object-scale-down h-7 w-7 ml-3" src="../../src/assets/hand-shake.svg" alt="sponsorIcon" /></h3>
                    <button className="text-PrimaryColor bg-OHighlightColor hover:bg-OHighlightColor/80 shadow-md">Become A Sponsor</button>
                </div>
                <img className="object-scale-down h-5 w-30" src="../../src/assets/Line.png" alt="line" />
                <div className="flex">
                    <SponsorProps
                    sponsorUrl = "#"
                    sponsorLogo="Gold-Sponsor"
                    sponsorDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                    />
                    <SponsorProps
                    sponsorUrl = "#"
                    sponsorLogo="Gold-Sponsor2"
                    sponsorDescription="2.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                    />
                    <SponsorProps
                    sponsorUrl = "#"
                    sponsorLogo="Gold-Sponsor3"
                    sponsorDescription="3.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                    />
                    <SponsorProps
                    sponsorUrl = "#"
                    sponsorLogo="Gold-Sponsor4"
                    sponsorDescription="4.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                    />
                 </div>
            </div>
        </div> 
    )
}

export default OurSponsorsC