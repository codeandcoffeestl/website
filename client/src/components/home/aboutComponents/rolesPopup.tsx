import { ReactNode, useEffect } from "react";
import { RolesCard } from "./RolesCard";
import roles from './roles.json';
import { Button } from "primereact/button";

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
            <div className="popup-inner bg-WAccentColor rounded-lg shadow-lg 
                            pt-10 pb-4 max-w-[90vw] sm:max-w-[700px] sm:items-center lg:max-w-[900px] 
                            xl:max-w-6xl mx-auto sm:mx-7 flex flex-col items-end sm:ml-0 ml-0 sm:mr-0 mr-0">
               { children }

               <div className="overflow-auto max-h-[calc(100vh-345px)] p-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
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
                <Button 
                    label="Close" 
                    className="close-btn mt-4 self-center" 
                    onClick={closePopup}
                />
            </div>
        </div>
    ): null;
};

export default RolesPopup