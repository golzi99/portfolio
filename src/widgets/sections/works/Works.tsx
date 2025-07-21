import React, { useState } from 'react'
import { TabMenu, TabsStatusType } from '@/widgets/sections/works/tabMenu'
import { Container, SectionTitle } from '@/shared/ui'
import { AnimatePresence, motion } from 'framer-motion'
import s from './Works.module.scss'
import { Work } from '@/widgets/sections/works/work'

const titlesData = {
  mainTitle: 'Проекты',
  subTitle: 'Проекты разработанные мной (декабрь 2024 - н.в.)',
}

const tabsItems: Array<{ title: string; status: TabsStatusType }> = [
  {
    title: 'Все',
    status: 'all',
  },
  {
    title: 'React',
    status: 'React',
  },
  {
    title: 'NextJS',
    status: 'NextJS',
  },
  {
    title: 'Мини',
    status: 'Mini project',
  },
]

const worksData = [
  {
    title: 'Task Master',
    text: 'Приложение для управления задачами, созданное для повышения вашей продуктивности и организации. С его помощью вы сможете легко планировать свой день, устанавливать приоритеты и отслеживать выполнение задач. Вы студент, родитель или просто работник, который хочет лучше управлять своим временем, Task Master станет вашим надежным помощником в достижении целей.',
    src: './toDoList.jpeg',
    altText: 'TaskMaster project',
    techText: 'React',
    liveLink: 'https://golzi99.github.io/TodoList',
    codeLink: 'https://github.com/golzi99/TodoList',
    id: 1,
  },
  {
    title: 'Picture-Verse',
    text: 'Инновационная социальная сеть, созданная для того, чтобы объединять людей по всему миру. С Connectify вы можете легко находить и общаться с друзьями, делиться своими мыслями, фотографиями, а также участвовать в интересных обсуждениях. Приложение предлагает интуитивно понятный интерфейс. Независимо от того, хотите ли вы оставаться на связи с близкими, находить единомышленников или просто делиться своими увлечениями, Connectify станет вашим надежным проводником в мире социальных сетей.',
    src: './pictureverse.jpg',
    altText: 'Connectify project',
    techText: 'NextJS',
    liveLink: 'https://picture-verse.com/',
    codeLink: 'https://github.com/IncubatorSamurai/Inctagram',
    id: 2,
  },
  {
    title: 'Counter',
    text: 'Простое, но полезное приложение, предназначенное для отслеживания числовых значений. Оно может быть использовано в самых разных целях, таких как подсчет дней до события, ведение учета задач, отслеживание времени или просто подсчет чего-либо',
    src: './counter.jpeg',
    altText: 'Counter project',
    techText: 'Mini project',
    liveLink: 'https://golzi99.github.io/best-counter/',
    codeLink: 'https://github.com/golzi99/best-counter',
    id: 3,
  },
]

export const Works = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState('all')

  let filteredWorks = worksData

  if (currentFilterStatus === 'React') {
    filteredWorks = worksData.filter((work) => {
      return work.techText === 'React'
    })
  }

  if (currentFilterStatus === 'NextJS') {
    filteredWorks = worksData.filter((work) => {
      return work.techText === 'NextJS'
    })
  }

  if (currentFilterStatus === 'Mini project') {
    filteredWorks = worksData.filter((work) => {
      return work.techText === 'Mini project'
    })
  }

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value)
  }

  return (
    <section id={'projects'}>
      <Container>
        <SectionTitle mainTitle={titlesData.mainTitle} subTitle={titlesData.subTitle} />
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <div className={s.workWrapper}>
          <AnimatePresence>
            {filteredWorks.map((el) => {
              return (
                <motion.div
                  layout={true}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={el.id}
                >
                  <Work
                    key={el.id}
                    title={el.title}
                    text={el.text}
                    src={el.src}
                    altText={el.altText}
                    techText={el.techText}
                    liveLink={el.liveLink}
                    codeLink={el.codeLink}
                  />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
