'use client'
import React from 'react'
import { AboutBg, background } from './aboutBG/AboutBG'
import { Container } from '@/shared/ui'
import s from './About.module.scss'
import Image from 'next/image'

const aboutText: string =
  'Frontend-разработчик прошел обучение в IT-Инкубаторе, где получил ценный опыт работы в команде и разработки реальных проектов. Специализируюсь на создании SPA с использованием React, NextJS, TypeScript, Redux, RTK, RTK Query. В разработке проектов использовал CSS, SCSS, MUI и Style-Components.  Отличаюсь целеустремленностью, вежливостью и способностью эффективно общаться с людьми. Постоянно стремлюсь к новым знаниям и улучшению своих навыков в разработке и взаимодействии с коллегами.'

const expData: Array<background> = [
  {
    text: 'Front-end development: React, Redux, TypeScript, NextJS, Storybook',
    place: 'IT-Incubator:',
    date: '2023 - н.в.',
  },
]

const eduData: Array<background> = [
  {
    text: 'Ведущий Инженер',
    place: 'Техническая Академия Росатом:',
    date: '2018 - 2021',
  },
  {
    text: 'Инженер',
    place: 'НИ ТПУ:',
    date: '2012 - 2018',
  },
]

export const About = () => {
  return (
    <section id={'about'}>
      <Container>
        <div className={s.flexWrapper}>
          <Image src={'./Kura.png'} alt={'photo'} width={300} height={350} className={s.image} />
          <div className={s.aboutTextArea}>
            <h2 className={s.sectionAboutTitle}>О себе</h2>
            <p className={s.aboutText}>{aboutText}</p>

            <h2 className={s.sectionAboutTitle}>Опыт</h2>
            <AboutBg infoAboutMe={expData} />

            <h2 className={s.sectionAboutTitle}>Образование</h2>
            <AboutBg infoAboutMe={eduData} />
          </div>
        </div>
      </Container>
    </section>
  )
}
