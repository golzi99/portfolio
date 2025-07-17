import React from 'react'
import s from './TechStack.module.scss'

type Props = { techText: string }

export const TechStack = (props: Props) => {
  return (
    <div className={s.techStack}>
      <span className={s.techStackTitle}>Технологии: </span>
      <span className={s.techStackText}>{props.techText}</span>
    </div>
  )
}
