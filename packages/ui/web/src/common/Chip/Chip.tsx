import clsx from 'clsx'
import { IFilter } from '@turbo-blog/types'

export interface IChipProps extends IFilter {
  onClick?: () => void
}

export const Chip = (props: IChipProps) => {
  const { title = 'Filter chip', disabled, selected, onClick } = props

  const containerClassNames = clsx(
    'flex',
    'items-center',
    'justify-center',
    'border-2',
    'border-accent-default',
    'rounded-lg',
    'w-fit',
    'px-2',
    'py-1',
    'group',
    'cursor-pointer',
    {
      'bg-accent-default': selected,
      'cursor-not-allowed': disabled,
      'hover:bg-accent-light': !disabled,
      'hover:text-black': !disabled,
      'bg-white': disabled,
      'border-accent-disabled': disabled,
      'shadow-none': disabled,
    },
  )

  const titleClassNames = clsx({
    'text-white': selected,
    'group-hover:text-black': !disabled,
    'text-slate-300': disabled,
  })

  return (
    <button
      disabled={disabled}
      className={containerClassNames}
      onClick={disabled ? undefined : onClick}
    >
      <span className={titleClassNames}>{title}</span>
    </button>
  )
}
