import React from 'react'
import s from './Skill.module.scss'
import { Icon } from '@/shared/ui'

type Props = {
  iconId: string
  title: string
  iconViewBox: string
}

export const Skill = (props: Props) => {
  return (
    <div className={s.skill}>
      <Icon iconId={props.iconId} viewBox={props.iconViewBox} />
      <span className={s.skillTitle}>{props.title}</span>
    </div>
  )
}
