'use client'
import s from './page.module.scss'
import { Header } from '@/widgets'

export default function Home() {
  return (
    <div className={s.container}>
      <Header />
    </div>
  )
}
