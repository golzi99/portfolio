'use client'
import React from 'react'
import { Container } from '@/shared/ui'
import s from './About.module.scss'
import Image from 'next/image'
import { AboutBg, background } from '@/widgets/sections/about/aboutBG'

const aboutText: string =
  'Я Frontend-разработчик, который прошел обучение в IT-Инкубаторе, где получил ценный опыт работы в команде и разработки реальных проектов. Специализируюсь на создании SPA с использованием React, NextJS, TypeScript, Redux, RTK, RTK Query. В разработке проектов использовал CSS, SCSS, MUI и Style-Components. Я умею ставить цели и добиваться их, легко нахожу общий язык с людьми и всегда стараюсь вести себя корректно. Постоянно учусь новому и стремлюсь развиваться как в профессиональном плане, так и в командной работе.'

const expData: Array<background> = [
  {
    text: 'Инженер Frontend-разработчик',
    place: 'АО "НИКИЭТ":',
    date: ' 2022 - 2024',
  },
  {
    text: 'Front-end development: React, RTK, TypeScript, NextJS, Storybook',
    place: 'IT-Incubator:',
    date: ' 2024 - н.в.',
  },
]

const eduData: Array<background> = [
  {
    text: 'Инженер',
    place: 'НИЯУ "МИФИ":',
    date: ' 2017 - 2023',
  },
]

export const About = () => {
  return (
    <section id={'about'}>
      <Container>
        <div className={s.flexWrapper}>
          <Image src={'./myPhoto3.jpg'} alt={'photo'} width={0} height={340} className={s.image} />
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
