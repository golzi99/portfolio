import { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './Button.module.scss'
import { clsx } from 'clsx'

type Props<T extends ElementType> = {
  as?: T
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>({ as, className, children, ...rest }: Props<T>) => {
  const Component = as || 'button'

  return (
    <Component className={clsx(s.button, className)} {...rest}>
      {children}
    </Component>
  )
}
