import { Menu } from "antd";

import Link from "next/link";



 const menuItems = [
    {
        key: '1',
        label: (
            <Link href='/'>Inicio</Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link href='/construcciones'>Construcciones</Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link href='/terrenos'>Terrenos</Link>
        ),
    },
    {
        key: '4',
        label: (
            <Link href='/propietarios'>Propietarios</Link>
        ),
    },
    {
        key: '5',
        label: (
            <Link href='/predios'>Predios</Link>
        ),
    },
];


export const MenuComponent = () => {
  return (
    <Menu theme="dark" mode="horizontal" items={menuItems} />
  );
};