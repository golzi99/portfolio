import React from 'react'
import s from './Work.module.scss'
import Image from 'next/image'
import { Button, Logo, TechStack } from '@/shared/ui'

type Props = {
  title: string
  text: string
  src: string
  altText: string
  techText: string
  liveLink: string
  codeLink: string
}

export const Work = (props: Props) => {
  return (
    <div className={s.work}>
      <div className={s.imageWrapper}>
        <Image src={props.src} alt={props.altText} className={s.image} height={300} width={0} />
        <Button as={'a'} target={'_blank'} href={props.liveLink} className={s.imageButton}>
          Открыть проект
        </Button>
      </div>
      <div className={s.textWrapper}>
        <h3 className={s.projectTitle}>{props.title}</h3>
        <p className={s.projectText}>{props.text}</p>
        <TechStack techText={props.techText} />
        <div className={s.flexWrapper}>
          <a className={s.link} href={props.liveLink} target={'_blank'}>
            Live Preview
          </a>
          <Logo iconId={'linkLogo'} width={'20'} height={'20'} viewBox={'0 0 32 32'} fill={`var(--worksCards)`} />
          <a href={props.codeLink} target={'_blank'}>
            View Code
          </a>
        </div>
      </div>
    </div>
  )
}
