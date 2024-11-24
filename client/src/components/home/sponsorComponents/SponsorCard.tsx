import { Card } from "primereact/card";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useEffect, useRef, useState } from "react";

interface SponsorCardProps {
    sponsorUrl: string | undefined;
    sponsorLogo: string | undefined;
    sponsorDescription: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined;
}

export const SponsorCard = ({ sponsorUrl, sponsorLogo, sponsorDescription }: SponsorCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null); 
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 768);
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const element = cardRef.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8) {
                    element.classList.add("fade-in-up");
                }
            }
        };

        window.addEventListener("scroll", handleScroll); 
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <div
            ref={cardRef}
            className={`flex justify-content-center p-0 m-4 font-sans sponsor-card
                ${isVisible ? "fade-in-up" : ""} 
                ${isMobile ? "small-screen" : ""}
            `}
        >
            <Card className="z-10 bg-PrimaryColor shadow-lg p-0 font-sans">
                <a href={sponsorUrl} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="flex flex-col items-center pb-5 sponsor-logo-hover">
                    <img className="w-64 h-auto p-2 bg-whitesmoke box shadow-xl" 
                        src={"/sponsor-logos/" + sponsorLogo} 
                        alt={sponsorLogo}  
                        style={{
                            borderRadius: '5px'
                        }}/>
                </a>
                <h4 className="p-0 lg:p-3 text-white leading-relaxed overflow-hidden text-left">
                    {sponsorDescription}
                </h4>
            </Card>
        </div>

        
    );
}