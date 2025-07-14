'use client'
import React from 'react'
import s from './AboutBG.module.scss'

export type background = {
  text: string
  place: string
  date: string
}

export const AboutBg = (props: { infoAboutMe: background[] }) => {
  return (
    <div>
      {props.infoAboutMe.map((item, index) => {
        return (
          <div key={index} className={s.myBG}>
            <p className={s.myBGText}>{item.text}</p>
            <p className={s.place}>
              {item.place}
              <span className={s.date}>{item.date}</span>
            </p>
          </div>
        )
      })}
    </div>
  )
}
