import React from 'react'
import s from './Footer.module.scss'
import { Container, iconsType, SocialList } from '@/shared/ui'

const iconsObj: Array<iconsType> = [
  {
    id: 'gitHubSocialLink',
    size: '30',
    viewBox: '0 0 30 30',
    link: 'https://github.com/golzi99',
    aria: 'Link to my gitHub',
  },
  {
    id: 'gmailSocialLink',
    size: '30',
    viewBox: '-0.5 0 48 48',
    link: 'mailto:zolotovpa99@gmail.com',
    aria: 'Link to email',
  },
  {
    id: 'whatsAppSocialLink',
    size: '30',
    viewBox: '0 0 32 32',
    link: 'https://wa.me/79295859285',
    aria: 'Link to my WhatsApp',
  },
  {
    id: 'telegramSocialLink',
    size: '30',
    viewBox: '2 2 20 20',
    link: 'https://t.me/ZolotovPA',
    aria: 'Link to my Telegram',
  },
]

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.flexWrapper}>
          <h2 className={s.title}>Контакты</h2>
          <span className={s.PhoneMail}>+79295859285</span>
          <span className={s.PhoneMail}>zolotovpa99@gmail.com</span>
          <div className={s.socialWrapper}>
            <SocialList iconsInfo={iconsObj} />
          </div>
          <small className={s.copyright}>
            Designed and built by
            <span className={s.smallSpan}> Zolotov Pavel </span>
            with
            <span className={s.smallSpan}> Love </span>&<span className={s.smallSpan}> Tea</span>
          </small>
        </div>
      </Container>
    </footer>
  )
}
