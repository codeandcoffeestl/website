import { SponsorCard } from "./sponsorComponents/SponsorCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { Button } from "primereact/button";

export interface ISponsorCard {
  sponsorUrl: string
  sponsorLogo: string
  sponsorDescription: string

}

const OurSponsorsC = () => {

  const sponsors: ISponsorCard[] = [
    {
      sponsorUrl: "https://www.techartista.org/",
      sponsorLogo: "TA_logo.png",
      sponsorDescription: "TechArtista connects St. Louis innovators through diverse coworking spaces for creatives, businesses, and non-profits. Founded in 2014, it has expanded across the city, providing members with universal access and a premium coworking experience."
    },
    {
      sponsorUrl: "https://www.techartistafoundation.org/",
      sponsorLogo: "TA_foundation_logo.png",
      sponsorDescription: "The TechArtista Foundation is a grassroots community-building organization based in St. Louis, Missouri. They catalyze the next generation of entrepreneurs and artists through community, inspiration, and support."
    },
    {
      sponsorUrl: "",
      sponsorLogo: "improving_logo.png",
      sponsorDescription: ""
    },
    {
      sponsorUrl: "https://www.microsoft.com/en-us/teals",
      sponsorLogo: "Microsoft-TEALS-Program-logo.png",
      sponsorDescription: "Technology Education and Learning Support (TEALS) is a Microsoft Philanthropies program that creates sustainable computer science programs in high schools."
    },
    {
      sponsorUrl: "https://blueprintcoffee.com/",
      sponsorLogo: "blueprint-coffee-logo.jpg",
      sponsorDescription: "Blueprint Coffee fosters a mutually beneficial relationship between producers, vendors, partners, and customers. Founded by baristas seeking a more transparent way to serve coffee."
    },
    {
      sponsorUrl: "https://indalooppizzeria.com/#",
      sponsorLogo: "in-da-loop-logo.png",
      sponsorDescription: "In Da Loop is a local pizzeria in University City, MO, offering not just delicious food but a full experience with live music, karaoke, and private events."

    },
    {
      sponsorUrl: "https://www.devupconf.org/",
      sponsorLogo: "devup_logo.png",
      sponsorDescription: "dev up is a technology conference in St. Louis where developers gather to learn, network, and grow. dev up cover a wide range of topics, including cloud platforms (Azure, AWS), development languages (.NET, Java, Rust), DevOps tools, Agile practices, and Low Code/No Code solutions. "
    },
    {
      sponsorUrl: "https://www.architectnow.net/",
      sponsorLogo: "architectNow_logo.png",
      sponsorDescription: "Technology firm delivering customized software solutions to help businesses thrive in the digital age. Specializing in cloud technologies, mobile apps, and web applications, drive innovation and improve efficiency. ArchitectNow skilled team works with clients of all sizes, from startups to Fortune 500 companies, offering tailored solutions to meet their needs."
    },
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
 
  return (
    <div className="card relative bg-contain bg-center bg-coffeeBgImg h-auto min-h-screen">
      <div className="absolute inset-0 bg-gray-200 bg-opacity-80 z-0"></div>

      <div className="container mx-auto md:px-8 lg:px-12 md:pt-10 lg:pt-16 lg:pb-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-3">
          <h3 className="z-10 text-black text-3xl leading-tight font-bold mb-4 md:mb-0">
            Special Thanks to Our Community Partners and Sponsors
            <span style={{  display: 'inline', verticalAlign: 'baseline', position: 'relative', top: '4px' }}>
              <FontAwesomeIcon icon={faHandshake} className="ml-2 text-3xl align-middle" />
            </span>
          </h3>

          <div className="relative md:ml-auto">
            <Button 
              label="Become A Sponsor" 
              onClick={scrollToContact}
              style={{
                padding: '10px 20px',
                width: '200px',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>

        <hr className="relative z-10 border-2 border-dashed border-SecondaryColor" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1">
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
    </div>
  );
}
export default OurSponsorsC