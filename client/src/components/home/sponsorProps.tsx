import { Card } from "primereact/card";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export const SponsorProps = (props: { sponsorUrl: string | undefined; 
                                      sponsorLogo: string | undefined; 
                                      sponsorDescription: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                                     }) => {
    return (
                <div className="md:h-full md:w-48 md:mx-3 relative shadow-lg">
                    {/* <!-- Card --> */}
                        <Card className="sm:mb-10 max-w-sm bg-PrimaryColor shadow-lg">

                            <a className="block h-auto w-full" href={"props.sponsorUrl"}>
                                <img className="block h-auto w-full" src={"../../src/assets/" + props.sponsorLogo + ".png"} 
                                alt={"{props.sponsorLogo} + Logo"} />

                                <h2 className="text-lg items-center justify-between p-1 md:p-1 text-SecondaryColor">{props.sponsorLogo}</h2>
                            </a>
                                <h4 className="p-2 text-white leading-relaxed flex items-center leading-none p-2 md:p-4">{props.sponsorDescription}</h4>
                        </Card>
                    {/* <!-- END Card --> */}
                </div>
 );
}