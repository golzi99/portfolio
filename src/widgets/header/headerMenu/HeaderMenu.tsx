import React from 'react'
import { Link } from 'react-scroll'
import s from './HeaderMenu.module.scss'

const items = [
  {
    title: 'Главная',
    href: 'home',
  },
  {
    title: 'О себе',
    href: 'about',
  },
  {
    title: 'Технологии',
    href: 'techStack',
  },
  {
    title: 'Проекты',
    href: 'projects',
  },
]

type Props = {
  closeMenu?: () => void
}

export const HeaderMenu = ({ closeMenu }: Props) => {
  return (
    <ul role="menu">
      {items.map((el: { title: string; href: string }) => (
        <li key={el.href} role="menuitem">
          <Link
            className={s.Link}
            onClick={() => {
              if (closeMenu) closeMenu()
            }}
            activeClass="active"
            to={el.href}
            smooth={true}
            spy={true}
            duration={2000}
            offset={-50}
          >
            {el.title}
            <span></span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
