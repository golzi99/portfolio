'use client'
import React from 'react'
import { Container } from '@/shared/ui'
import s from './About.module.scss'
import Image from 'next/image'
import { AboutBg, background } from '@/widgets/sections/about/aboutBG'

const aboutText: string =
  'Я Frontend-разработчик, специализирующийся на создании удобных и доступных интерфейсов. Легко встраиваюсь в команду, предлагаю улучшения и беру ответственность за результат. Сейчас развиваю навыки в React Native и TanStack для кроссплатформенной разработки и эффективной работы с данными.'

const expData: Array<background> = [
  {
    text: 'Инженер Frontend-разработчик',
    place: 'АО "НИКИЭТ":',
    date: ' 2021 - 2025',
  },
  {
    text: 'Front-end development: React, RTK, TypeScript, NextJS, Storybook',
    place: 'IT-Incubator:',
    date: ' 2021 - 2022',
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
