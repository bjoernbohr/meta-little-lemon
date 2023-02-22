import logo from '../../assets/logo.png'
import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx';
import {GrClose} from 'react-icons/gr';
import './styles.css';
interface Menu {
  label: string;
  route?: string;
}
export const Navigation = (): JSX.Element => {

  const location = useLocation().pathname;
  function useToggle(initialValue: boolean): [boolean, () => void] {
    const [value, setValue] = useState<boolean>(initialValue);
    const toggleValue = () => setValue(!value);
    return [value, toggleValue];
  }

  const [isActive, toggleActive] = useToggle(false);

  const [menu] = useState<Menu[]>(
    [
      {
        label: 'Home',
        route: '/',
      },
      {
        label: 'About',
      },
      {
        label: 'Menu',
      },
      {
        label: 'Reservation',
        route: '/reservation',
      },
      {
        label: 'Login',
      },
      {
        label: 'Donate',
      },
    ]
  )

  return (
    <nav className={'sticky top-0 bg-white border-b border-nandor z-[25]'}>
      <div className={'container flex items-center justify-between mx-auto'}>
        <Link to={'/'}>
          <img
            className={'max-w-[250px]'}
            src={logo}
            alt={'logo hero'}
          />
        </Link>
        <button className={'realtive md:hidden fill-nandor text-2xl z-[25]'} onClick={toggleActive}>
          {!isActive?
            <RxHamburgerMenu />
            :
            <GrClose />
          }
        </button>
        <ul
          className={`${isActive ?? 'active '} fixed md:relative flex flex-col md:flex-row md:flex-wrap items-center justify-center bg-white inset-0 z-[2] transition-all ease-in-out duration-300`}
        >
          {
            menu.map((v,i) => {
              return (
                <li key={i}>
                  {v.route?
                    <a
                      className={`${v.route===location ? 'text-ripe-lemon ':''} block font-markazi md:font-karla text-4xl md:text-base hover:text-ripe-lemon transition-all ease-in-out duration-300 px-3 py-4`}
                      href={v.route}
                      title={v.label}
                    >
                      {v.label}
                    </a>
                  :
                    <span className={'block font-markazi md:font-karla text-4xl md:text-base hover:text-ripe-lemon transition-all ease-in-out duration-300 px-3 py-4 '}>
                      {v.label}
                    </span>
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  );
}
