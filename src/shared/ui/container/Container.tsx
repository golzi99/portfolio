'use client'
import s from './Container.module.scss'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export const Container = ({ children }: Props) => {
  return <div className={s.container}>{children}</div>
}
