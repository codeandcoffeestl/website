import { ReactNode, useEffect } from "react";
import { RolesCard } from "./RolesCard";
import roles from './roles.json';

interface RolesPopupProps {
    trigger: boolean;
    closePopup: () => void;
    children: ReactNode;
}

export interface IrolesCard {
    contributorName: string;
    roleName: string;
    roleUrl: string;
    roleImage: string;
    roleDescription: string;
}

// const roles: IrolesCard[] = [
//     {
//         contributorName: "ContributorName-1",
//         roleName: "roleName-1",
//         roleUrl: "#",
//         roleImage: "role-1",
//         roleDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
//     },
//     {
//         contributorName: "ContributorName-2",
//         roleName: "roleName-2",
//         roleUrl: "#",
//         roleImage: "role-2",
//         roleDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"

//     },
//     {
//         contributorName: "ContributorName-3",
//         roleName: "roleName-3",
//         roleUrl: "#",
//         roleImage: "role-3",
//         roleDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"

//     },
//     {
//         contributorName: "ContributorName-4",
//         roleName: "roleName-4",
//         roleUrl: "#",
//         roleImage: "role-4",
//         roleDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"

//     },
//     {
//         contributorName: "ContributorName-5",
//         roleName: "roleName-5",
//         roleUrl: "#",
//         roleImage: "role-5",
//         roleDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
//     },
//     {
//         contributorName: "ContributorName-6",
//         roleName: "roleName-6",
//         roleUrl: "#",
//         roleImage: "role-6",
//         roleDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
//     },
//     {
//         contributorName: "ContributorName-7",
//         roleName: "roleName-7",
//         roleUrl: "#",
//         roleImage: "role-7",
//         roleDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
//     },
//     {
//         contributorName: "ContributorName-8",
//         roleName: "roleName-8",
//         roleUrl: "#",
//         roleImage: "role-8",
//         roleDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
//     }
// ]

const RolesPopup: React.FC<RolesPopupProps> = ({trigger, closePopup, children}) => {

    useEffect(() => {
        if (trigger) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [trigger]);
    

    return trigger ? (
        <div className="rolesPopup fixed top-0 left-0 w-full h-screen bg-black/40 flex justify-center items-center z-50">
            <div className="popup-inner bg-WAccentColor rounded-lg shadow-lg pt-10 pr-8 pb-4 pl-8 max-w-6xl w-full max-h-[80vh] mx-4 md:mx-8 flex flex-col items-center md:w-700 lg:w-700 xl:w-full basis-content">
               { children }

               <div className="overflow-auto max-h-[calc(100vh-345px)] p-2">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                            {roles.map((role, index) => (
                                 <div className="w-full max-w-xl">
                                <RolesCard
                                    key={index} 
                                    contributorName={role.contributorName}
                                    roleName={role.roleName}
                                    roleUrl={role.roleUrl}
                                    roleImage={role.roleImage}
                                    roleDescription={role.roleDescription}
                                />
                                </div>
                            ))}
                    </div>
                </div>
                <button className="close-btn mt-4" onClick={closePopup}>close</button>

            </div>
        </div>
    ): null;
};

export default RolesPopup