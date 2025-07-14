'use client'
import s from './page.module.scss'
import { Header } from '@/widgets'
import { ParticlesBackGround } from '@/widgets/parcticals/Particles'
import { Main } from '@/widgets/sections/main/Main'
import { About } from '@/widgets/sections/about/About'

export default function Home() {
  return (
    <div className={s.container}>
      <ParticlesBackGround />
      <Header />
      <Main />
      <About />
    </div>
  )
}
