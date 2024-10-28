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
        <div className="flex items-center justify-between bg-SecondaryColor pt-2 pb-2 pl-2 ">
            <a onClick={() => navigate('/')}><img alt="logo" src="../../public/code&coffee-original.png" width="100" className="mr-2 ml-[27px] h-16 w-40 md:h-20 md:w-48" /></a>
            <Menubar
                className="bg-SecondaryColor text-white"
                model={items}
            />
        </div>
    )
}

export default NavBar