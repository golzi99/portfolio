'use client'
import s from './page.module.scss'
import { About, Footer, Header, Main, ParticlesBackGround, Skills, Slogan, Works } from '@/widgets'

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
      <Footer />
    </div>
  )
}
