import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    const itemRenderer = (item: MenuItem) => (
        <a className="p-menuitem-link text-white bg-PrimaryColor flex items-center lg:w-auto w-36 float-right">
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
        {
            // This is a demo of how to implement navigation when building additional pages
            id: "Nav4",
            label: 'StyleDemo',
            command: () => navigate('stylesample'),
            template: itemRenderer,


        }
    ];



    return (
        <div className="flex items-center justify-between bg-PrimaryColor pt-2 pb-2 pl-2 ">
            <a onClick={() => navigate('/')}><img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" width="100" className="mr-2" /></a>
            <Menubar
                className="bg-PrimaryColor text-white"
                model={items}
            />
        </div>
    )
}

export default NavBar