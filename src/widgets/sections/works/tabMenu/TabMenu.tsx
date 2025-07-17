import React from 'react'
import s from './TabMenu.module.scss'
import { clsx } from 'clsx'

export type TabsStatusType = 'all' | 'React' | 'NextJS' | 'Mini project'

type Props = {
  tabsItems: Array<{ title: string; status: TabsStatusType }>
  changeFilterStatus: (value: TabsStatusType) => void
  currentFilterStatus: string
}

export const TabMenu = (props: Props) => {
  return (
    <nav className={s.tabMenu}>
      <ul role={'menu'}>
        {props.tabsItems.map((item, index) => {
          const buttonStyle = clsx(s.tabLink, props.currentFilterStatus === item.status && s.activeTabLink)

          return (
            <li key={index} className={s.listItem}>
              <button className={buttonStyle} onClick={() => props.changeFilterStatus(item.status)}>
                {item.title}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
