import { SponsorCard } from "./sponsorComponents/SponsorCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandshake } from "@fortawesome/free-solid-svg-icons";

export interface ISponsorCard {
  sponsorUrl: string
  sponsorLogo: string
  sponsorDescription: string

}

const OurSponsorsC = () => {

  const sponsors: ISponsorCard[] = [
    {
      sponsorUrl: "#",
      sponsorLogo: "Gold-Sponsor",
      sponsorDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      sponsorUrl: "#",
      sponsorLogo: "Gold-Sponsor2",
      sponsorDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      sponsorUrl: "#",
      sponsorLogo: "Gold-Sponsor3",
      sponsorDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      sponsorUrl: "#",
      sponsorLogo: "Gold-Sponsor4",
      sponsorDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },

  ]

  return (

    <div className="card relative bg-cover bg-center bg-coffeeBgImg no-repeat z-0">
      <div className="absolute inset-0 w-full h-full bg-gray-200 bg-opacity-70 z-0"></div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-10 pb-5 mb-3">
        <h3 className="z-10 flex items-center text-black text-[36px] leading-tight font-bold mb-4 md:mb-0">
          <FontAwesomeIcon icon={faHandshake} className="ml-2 md:ml-4" />
          Special Thanks to Our Sponsors
        </h3>
        <button className="z-10 text-lg bg-OHighlightColor text-PrimaryColor shadow-md hover:bg-OHighlightColor/80 hover:border hover:border-OHighlightColor md:mt-0">
          Become A Sponsor
        </button>
      </div>


      <hr className="relative z-10 border-2 border-dashed border-SecondaryColor" />
      <div className="grid grid-cols-1 md:grid-cols-2 xlg:grid-cols-4">
        {sponsors.map((sponsor, index) => (
          <SponsorCard
            key={index}
            sponsorUrl={sponsor.sponsorUrl}
            sponsorLogo={sponsor.sponsorLogo}
            sponsorDescription={sponsor.sponsorDescription}
          />
        ))}

      </div>
    </div>
  )
}

export default OurSponsorsC