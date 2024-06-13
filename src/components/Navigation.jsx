import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navlist = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      to: '/', // Enlace para Home
      component: Link,
    },
    {
      label: 'About',
      icon: 'pi pi-fw pi-file',
      to: '/About', // Enlace para About
      component: Link,
    },
    {
      label: 'Contact',
      icon: 'pi pi-fw pi-phone',
      to: '/Contact', // Enlace para Contact
      component: Link,
    },
    {
      label: 'Data',
      icon: 'pi pi-fw pi-table',
      to: '/Data', // Enlace para Data
      component: Link,
    },
  ];

  return (
    <div>
      <header>
        <nav>
          <ul>
            <Menubar model={navlist} />
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
