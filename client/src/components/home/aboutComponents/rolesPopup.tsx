import { ReactNode, useEffect } from "react";

interface RolesPopupProps {
    trigger: boolean;
    closePopup: () => void;
    children: ReactNode;
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
        <div className="rolesPopup fixed top-0 left-0 w-full h-screen bg-black/20 flex justify-center items-center">
            <div className="popup-inner bg-white rounded-lg shadow-lg p-6 w-96 h-72">
                <button className="close-btn" onClick={closePopup}>close</button>
                { children }
            </div>
        </div>
    ): null;
}

export default RolesPopup