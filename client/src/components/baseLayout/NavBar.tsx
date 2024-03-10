import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    const itemRenderer = (item: MenuItem) => (
        <a className="flex p-menuitem-link text-white">
            <span className="mx-2 ">{item.label}</span>
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
            label: 'About',
            command: handleClick('about'),
            template: itemRenderer,
        },
        {
            label: 'Events',
            command: handleClick('events')
            ,
            template: itemRenderer,
        },
        {
            label: 'Contact',
            command: handleClick('contact'),
            template: itemRenderer,
        },
        {
            // This is a demo of how to implement navigation when building additional pages
            label: 'StyleDemo',
            command: () => navigate('stylesample'),
            template: itemRenderer,
        }
    ];



    return (
        <div className="flex items-center justify-between bg-PrimaryColor pt-2 pb-2 pl-2 ">
            <a onClick={() => navigate('/')}><img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" width="100" className="mr-2" /></a>
            <Menubar
                className="bg-PrimaryColor"
                model={items}
            />
        </div>
    )
}

export default NavBar