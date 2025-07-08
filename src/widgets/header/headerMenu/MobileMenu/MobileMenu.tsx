import s from './MobileMenu.module.scss'
import { useState } from 'react'
import { clsx } from 'clsx'
import { HeaderMenu } from '@/widgets/header/headerMenu'

export const MobileMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function onBurgerBtnClick() {
    setMenuIsOpen(!menuIsOpen)
  }

  const buttonStyles = clsx(s.burgerButton, menuIsOpen || s.burgerButtonOpen)
  const mobileMenuStyles = clsx(s.MobileMenuPopup, menuIsOpen || s.MobileMenuPopupOpen)

  return (
    <nav className={s.mobileMenu}>
      <button onClick={onBurgerBtnClick} className={buttonStyles} aria-label="MobileMenu_Button">
        <span></span>
      </button>
      <div
        className={mobileMenuStyles}
        role={'dialog'}
        aria-modal={'true'}
        aria-label="MobileMenu_Modal_Window"
        onClick={() => {
          setMenuIsOpen(false)
        }}
      >
        <HeaderMenu closeMenu={() => setMenuIsOpen(false)} />
      </div>
    </nav>
  )
}
