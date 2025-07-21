import React from 'react'
import s from './SocialList.module.scss'
import { Icon } from '@/shared/ui'

export type iconsType = {
  id: string
  size: string
  viewBox: string
  link: string
  aria: string
}

export const SocialList = (props: { iconsInfo: Array<iconsType> }) => {
  return (
    <ul className={s.socialList}>
      {props.iconsInfo.map((el, index) => (
        <li key={index}>
          <a className={s.socialLink} href={el.link} target={'_blank'} aria-label={el.aria}>
            <Icon iconId={el.id} width={el.size} height={el.size} viewBox={el.viewBox} />
          </a>
        </li>
      ))}
    </ul>
  )
}
