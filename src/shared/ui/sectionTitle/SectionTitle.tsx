import React from 'react'
import s from './SectionTitle.module.scss'

type Props = {
  mainTitle?: string
  subTitle?: string
}

export const SectionTitle = (props: Props) => {
  return (
    <div className={s.sectionTitle}>
      <h2 className={s.sectionMainTitle}>{props.mainTitle}</h2>
      <h3 className={s.sectionSubTitle}> {props.subTitle}</h3>
    </div>
  )
}
