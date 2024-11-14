import { Card } from "primereact/card";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

interface SponsorCardProps {
    sponsorUrl: string | undefined;
    sponsorLogo: string | undefined;
    sponsorDescription: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined;
}

export const SponsorCard = ({ sponsorUrl, sponsorLogo, sponsorDescription }: SponsorCardProps) => {
    return (
        <div className="flex justify-content-center p-0 m-4 font-sans">
            <Card className="z-10 bg-PrimaryColor shadow-lg p-0 font-sans">
                <a href={sponsorUrl} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="flex flex-col items-center pb-5 sponsor-logo-hover">
                    <img className="w-64 h-auto p-2 bg-whitesmoke soft-aura" 
                        src={"/sponsor-logos/" + sponsorLogo} 
                        alt={sponsorLogo}  
                        style={{
                            // boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
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