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



    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" width="100" className="mr-2"></img>;

    return (
        <div className="card">
            <Menubar
                className="bg-PrimaryColor"
                model={items}
                start={start}
            />
        </div>
    )
}

export default NavBar