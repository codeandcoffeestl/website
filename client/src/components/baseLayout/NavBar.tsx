import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';

const NavBar = () => {
    const itemRenderer = (item: MenuItem) => (
        <a className="flex align-items-right p-menuitem-link">
            <span className="mx-2 float-right">{item.label}</span>
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
        }
    ];



    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;

    return (
        <div className="card">
            <Menubar
                className="bg-PrimaryColor"
                model={items}
                start={start} />
        </div>
    )
}

export default NavBar