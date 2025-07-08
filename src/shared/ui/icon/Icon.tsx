'use client'

type Props = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
  fill?: string
}

export const Icon = (props: Props) => {
  return (
    <svg
      width={props.width || '110'}
      height={props.height || '110'}
      viewBox={props.viewBox || '0 0 120 120'}
      fill={props.fill || 'white'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`/sprite_svg.svg#${props.iconId}`} />
    </svg>
  )
}
