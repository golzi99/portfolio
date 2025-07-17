'use client'
import s from './Logo.module.scss'
import { animateScroll as scroll } from 'react-scroll'
import { Icon } from '@/shared/ui'

type Props = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
  fill?: string
}

export const Logo = (props: Props) => {
  return (
    <a
      className={s.logo}
      onClick={() => {
        scroll.scrollToTop()
      }}
    >
      <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} fill={props.fill} />
    </a>
  )
}
