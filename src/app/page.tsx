'use client'
import s from './page.module.scss'
import { Header } from '@/widgets'
import { ParticlesBackGround } from '@/widgets/parcticals/Particles'
import { Main } from '@/widgets/sections/main'
import { About } from '@/widgets/sections/about'
import { Skills } from '@/widgets/sections/skills'

export default function Home() {
  return (
    <div className={s.container}>
      <ParticlesBackGround />
      <Header />
      <Main />
      <About />
      <Skills />
    </div>
  )
}
