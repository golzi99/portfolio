'use client'
import s from './Main.module.scss'
import { Container } from '@/shared/ui'
import Typewriter from 'typewriter-effect'
import Image from 'next/image'

export const Main = () => {
  return (
    <section className={s.Main} id={'home'}>
      <Container>
        <div className={s.flexWrapper}>
          <div className={s.mainTextArea}>
            <span className={s.hello}>Приветствую!</span>
            <span className={s.text}>Меня зовут </span>
            <h2 className={s.name}>Золотов Павел</h2>
            <h1 className={s.title}>
              <p>FrontEnd разработчик и хороший человек</p>
              <Typewriter
                options={{
                  strings: ['React разработчик', 'Создаю Web-будущее', 'FrontEnd Developer', 'NextJS разработчик'],
                  autoStart: true,
                  loop: true,
                  delay: 150,
                }}
              />
            </h1>
          </div>
          <div className={s.photoWrapper}>
            <Image
              src={'./myPhoto2Cut.jpg'}
              alt={'photo'}
              width={350}
              height={450}
              priority
              sizes="(max-width: 576px) 310px, 465px"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
