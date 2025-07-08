'use client'
import s from './Header.module.scss'
import { Container } from '@/shared/ui'
import { useEffect, useState } from 'react'
import { Logo } from '@/widgets/header/logo/Logo'
import { DesktopMenu, MobileMenu } from '@/widgets/header/headerMenu'

const logoSetting = {
  id: 'logo',
  width: '60',
  height: '60',
  viewBox: '0 0 32 32',
  fill: 'var(--accent)',
}

export const Header = () => {
  const [width, setWidth] = useState(0)
  const breakPoint = 768

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <header className={s.Header}>
      <Container>
        <div className={s.flexWrapper}>
          <Logo
            iconId={logoSetting.id}
            width={logoSetting.width}
            height={logoSetting.height}
            viewBox={logoSetting.viewBox}
            fill={logoSetting.fill}
          />

          {width < breakPoint ? <MobileMenu /> : <DesktopMenu />}
        </div>
      </Container>
    </header>
  )
}
