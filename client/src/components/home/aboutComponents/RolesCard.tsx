import { Card } from "primereact/card";
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
        <Card className="bg-PrimaryColor shadow-lg w-full h-55 p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <a href={roleUrl}>
                    <h2 className="text-white font-bold">{contributorName}</h2>
                    <h4 className="text-white">Role: {roleName}</h4>
                </a>
                <img className="w-16 h-16 object-cover" src={"../../src/assets/" + roleImage + ".png"} alt={roleImage + " roleImage"} />
            </div>
            <div className="mt-4">
                <p className="text-white leading-relaxed overflow-hidden">{roleDescription}</p>
            </div>
        </Card>
    </div>
    );
}

export default RolesCard;