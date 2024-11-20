import { SponsorCard } from "./sponsorComponents/SponsorCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { Button } from "primereact/button";
import sponsorsData from './sponsorComponents/sponsors.json';
import { useState, useEffect, useRef } from "react";
import backgroundImage from '../../assets/CoffeeBg.jpg';

export interface ISponsorCard {
  sponsorUrl: string
  sponsorLogo: string
  sponsorDescription: string
}

const OurSponsorsC = () => {

  const [sponsors, setSponsors] = useState<ISponsorCard[]>([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) {
      const cardsNeeded = Math.ceil(window.innerWidth / 250) + 10;
      const duplicatedCards = Array(cardsNeeded)
        .fill(sponsorsData)
        .flat();
      setSponsors(duplicatedCards);
    } else {
      setSponsors(sponsorsData);
    }
  }, [isMobile]);
  
  const togglePlayState = () => {
    setIsPlaying((prev) => !prev);
    const elements = document.querySelectorAll(".small-screen");
    elements.forEach((element) => {
      const htmlElement = element as HTMLElement;
      if (htmlElement) {
        htmlElement.style.animationPlayState = isPlaying ? "paused" : "running";
      }
    });
  };

  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
 
  return (
    <div className="card relative carousel-container bg-contain bg-center h-auto min-h-screen"
      style={{
      backgroundImage: `url(${backgroundImage})`,
      }}
    >
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

        <div ref={trackRef} className={`relative ${isMobile ? "carousel-track animated" : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1"}`}>
         {sponsors.map((sponsor, index) => (
                        <SponsorCard
                            key={index}
                            sponsorUrl={sponsor.sponsorUrl}
                            sponsorLogo={sponsor.sponsorLogo}
                            sponsorDescription={sponsor.sponsorDescription}
                        />
          ))}
        </div>

        {isMobile && (
            <div className="control-buttons">
              <Button
                label={isPlaying ? "⏸ Pause Here" : "▶ Keep Exploring"}
                onClick={togglePlayState}
                className="p-button-rounded p-button-primary"
              />
            </div>
        )} 
           
      </div>
    </div>
  );
}
export default OurSponsorsC