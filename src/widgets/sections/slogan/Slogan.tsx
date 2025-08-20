import React from 'react'
import s from './Slogan.module.scss'
import { Container } from '@/shared/ui'

export const Slogan = () => {
  return (
    <div className={s.slogan}>
      <Container>
        <div className={s.flexWrapper}>
          <p className={s.title}>Давайте поработаем вместе над вашим проектом:</p>
          <span className={s.email}>zolotovpa99@gmail.com</span>
        </div>
      </Container>
    </div>
  )
}
