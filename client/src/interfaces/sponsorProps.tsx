import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export const SponsorProps = (props: { sponsorUrl: string | undefined; 
                                      sponsorLogo: string | undefined; 
                                      sponsorDescription: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                                     }) => {
    return (
    
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-8 bg-PrimaryColor">
            <a className="p-10" href={"props.sponsorUrl"}>
                <img className="p-10" src={"../../src/assets/" + props.sponsorLogo + ".png"} 
                 alt={"{props.sponsorLogo} + Logo"} />
            <h4 className="p-2 text-white">{props.sponsorDescription}</h4>
            </a>
        </div>
    );
}