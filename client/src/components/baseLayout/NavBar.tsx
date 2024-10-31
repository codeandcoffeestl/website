import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    const itemRenderer = (item: MenuItem) => (
        <a className="p-menuitem-link text-white bg-SecondaryColor flex items-center lg:w-auto w-36 float-right">
            <span className='mx-2' >{item.label}</span>
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
            label: 'About',
            command: handleClick('about'),
            template: itemRenderer,
        },
        {
            id: "Nav2",
            label: 'Events',
            command: handleClick('events')
            ,
            template: itemRenderer,
        },
        {
            id: "Nav3",
            label: 'Contact',
            command: handleClick('contact'),
            template: itemRenderer,
        },
    ];



    return (
        <div className="flex
                        items-center
                        justify-between
                        bg-SecondaryColor
                        pt-2
                        pb-2
                        pl-2
                        flex-col
                        md:flex-row">
            <a onClick={() => navigate('/')}
               className="order-1
                          md:order-none mb-2 md:mb-0">
                <img
                    alt="logo"
                    src="/code&coffee-original.png"
                    className="h-16  md:h-20
                               w-40 md:w-48
                               mr-0 md:mr-2
                               ml-0 md:ml-[27px]"
                />
            </a>

            <p className="text-sm sm:text-base md:text-lg lg:text-2xl
                            font-medium
                            text-white
                            text-center
                            md:text-left
                            order-2
                            mt-auto">
                Sponsored by TechArtista Foundation
            </p>

            <Menubar
                className="bg-SecondaryColor
                            text-white
                            order-3"
                model={items}
            />
        </div>

    )
}

export default NavBar