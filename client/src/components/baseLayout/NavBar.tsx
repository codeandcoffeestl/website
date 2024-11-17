import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    const itemRenderer = (item: MenuItem) => (
        <a className="p-menuitem-link
                       text-white
                       bg-SecondaryColor
                       flex
                       items-center
                       justify-center
                       float-right
                       w-screen
                       px-4 py-2
                       lg:w-auto md:w-36
                       ">
            <span className="mx-2">{item.label}</span>
        </a>
    );

    const handleClick = (anchor: string) => () => {
        const id = `${anchor}`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const items: MenuItem[] = [
        {
            id: "Nav1",
            label: "About",
            command: handleClick("about"),
            template: itemRenderer,
        },
        {
            id: "Nav2",
            label: "Events",
            command: handleClick("events"),
            template: itemRenderer,
        },
        {
            id: "Nav3",
            label: "Contact",
            command: handleClick("contact"),
            template: itemRenderer,
        },
    ];

    return (
        <div className="flex
                        items-center
                        justify-between
                        bg-SecondaryColor
                        py-2
                        px-4
                        text-center">

            <a
                onClick={() => navigate("/")}
                className="order-1 mb-0"
            >
                <img
                    alt="logo"
                    src="/code&coffee-original.png"
                    className="h-auto
                                w-[80px] sm:w-[120px]
                                md:w-[150px] lg:w-[200px]
                                min-w-[120px]
                                max-w-full
                                mr-0 md:mr-2
                                ml-0 md:ml-[27px]"

                />
            </a>

            <p className="text-sm sm:text-base md:text-lg lg:text-2xl
                            font-medium
                            text-white
                            order-2
                            mx-4">
                Sponsored by TechArtista Foundation
            </p>

            <div className="order-3
                            flex
                            items-center
                            mx-4">
                <Menubar
                    className="bg-SecondaryColor
                            text-white
                            text-center"
                    model={items}
                />
            </div>
        </div>
    );
};

export default NavBar;


// {/*"h-auto*/}
// {/*            w-[150px] sm:w-[180px]*/}
// {/*            md:w-[200px] lg:w-[200px]*/}
// {/*            max-w-full*/}
// {/*            mr-4"