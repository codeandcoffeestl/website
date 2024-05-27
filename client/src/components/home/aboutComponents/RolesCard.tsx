import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from "react";

interface RoleCardProps {
    contributorName: string | undefined;
    roleName: string | undefined;
    roleUrl: string | undefined;
    roleImage: string | undefined;
    roleDescription: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined;
}

export const RolesCard: React.FC<RoleCardProps> = ({ contributorName, roleName, roleUrl, roleImage, roleDescription }) => {
    return (
        <div className="w-full p-2">
            <div className="relative w-full rounded-lg p-4 overflow-hidden bg-SecondaryColor/30 shadow-lg">
                <div className="absolute inset-0 top-1/5 bg-SecondaryColor/50" style={{ borderTopLeftRadius: '100%' }}></div>
                <div className="relative z-10 flex justify-between items-center pl-5 pr-5 text-left">
                    <div className="flex flex-col">
                        <h2 className="text-xl text-black font-bold">{contributorName}</h2>
                        <h4 className="text-black">Role: {roleName}</h4>

                        <a href={roleUrl} className="text-lg cursor-pointer flex items-center hover:text-shadow-none hover:font-bold" style={{ background: 'transparent' }}>
                            <FontAwesomeIcon icon={faUserGroup} className="text-OHighlightColor fa-md pr-2" />
                            <h4 style={{ textShadow: '2px 2px 2px rgba(0,0,0,0.2)', boxShadow: 'none'}} 
                              onMouseEnter={(e) => e.target.style.textShadow = 'none'}
                              onMouseLeave={(e) => e.target.style.textShadow = '2px 2px 2px rgba(0,0,0,0.3)'}
                            >
                                Reach me here</h4>                           
                        </a>
                    </div>
                    <img className="w-25 h-25 bg-SecondaryColor rounded-full object-cover" src={"../../src/assets/" + roleImage + ".png"} alt={roleImage + " roleImage"} />
                </div>
                <div className="relative z-10 mt-4 pl-5 md:pb-3 text-left">
                    <p className="text-black leading-relaxed overflow-hidden">{roleDescription}</p>
                </div>
            </div>
      </div>
    );
  };

export default RolesCard;