import { Card } from "primereact/card";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

interface SponsorCardProps {
    sponsorUrl: string | undefined;
    sponsorLogo: string | undefined;
    sponsorDescription: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined;
}

export const SponsorCard = ({ sponsorUrl, sponsorLogo, sponsorDescription }: SponsorCardProps) => {
    return (
        <div className="card flex justify-content-center ">
            <Card className="z-10 bg-PrimaryColor shadow-lg">
                <a className="flex flex-col items-center" href={sponsorUrl}>
                    <img className="w-32 h-auto" src={"../../src/assets/" + sponsorLogo + ".png"} alt={sponsorLogo + " Logo"} />
                    <h2 className="text-lg text-SecondaryColor mt-2">{sponsorLogo}</h2>
                </a>
                <h4 className="p-2 text-white leading-relaxed overflow-hidden">{sponsorDescription}</h4>
            </Card>
        </div>
    );
}