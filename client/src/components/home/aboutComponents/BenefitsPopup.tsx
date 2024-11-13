import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChalkboardTeacher, faHeart, faTag, faUsers} from "@fortawesome/free-solid-svg-icons";


interface BenefitsPopupProps {
    trigger: boolean;
    closePopup: () => void;
}

export default function BenefitsPopup({trigger, closePopup}: BenefitsPopupProps) {
    const footerContent = (
        <div className="flex justify-center pt-3 sm:pt-5">
            <Button
                label="close"
                onClick={closePopup}
                className="p-2 text-sm sm:text-base"
            />
        </div>

    );
    return(
        <>
            {trigger && (
                <div className="card flex justify-content-center">
                    <Dialog
                        visible={trigger}
                        footer={footerContent}
                        style={{width: '50rem'}}
                        onHide={closePopup}
                        closable={false}
                        dismissableMask={true}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-center md:text-left">
                            Member Benefits
                        </h2>
                        <hr className="border border-dashed border-SecondaryColor mx-2 sm:mx-5 mb-2"/>
                        <div
                            className="relative w-full rounded-lg p-4 sm:p-6 overflow-hidden bg-gradient-to-r from-SecondaryColor/40 to-SecondaryColor/20 shadow-xl">
                            <div
                                className="absolute inset-0 top-1/4 sm:top-1/5 bg-SecondaryColor/50"
                                style={{borderTopLeftRadius: '100%'}}
                            ></div>
                            <div className="relative z-10 w-full">
                                <ul className="w-full space-y-2 sm:space-y-3 list-disc pl-4 sm:pl-6 text-lg sm:text-xl text-black font-bold">
                                    <li className="flex items-center">
                                        <FontAwesomeIcon icon={faUsers} className="mr-2 text-OHighlightColor"/>
                                        Join an inclusive, collaborative developer network
                                    </li>
                                    <li className="flex items-center">
                                        <FontAwesomeIcon icon={faHeart} className="mr-2 text-OHighlightColor"/>
                                        Immerse in an environment supportive of your personal goals
                                    </li>
                                    <li className="flex items-center">
                                        <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2 text-OHighlightColor"/>
                                        Lead workshops on topics of personal interest
                                    </li>
                                    <li className="flex items-center">
                                        <FontAwesomeIcon icon={faTag} className="mr-2 text-OHighlightColor"/>
                                        10% discount on a TechArtista Coworking Membership
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Dialog>
                 </div>
            )}
        </>)
}