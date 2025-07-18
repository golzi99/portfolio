'use client'
import s from './page.module.scss'
import { About, Header, Main, ParticlesBackGround, Skills, Slogan, Works } from '@/widgets'

export default function Home() {
  return (
    <div className={s.container}>
      <ParticlesBackGround />
      <Header />
      <Main />
      <About />
      <Skills />
      <Works />
      <Slogan />
    </div>
  )
}
