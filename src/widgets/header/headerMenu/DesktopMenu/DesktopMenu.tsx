import s from './DesktopMenu.module.scss'
import { HeaderMenu } from '@/widgets/header/headerMenu'

export const DesktopMenu = () => {
  return (
    <nav className={s.desktopMenu}>
      <HeaderMenu />
    </nav>
  )
}
