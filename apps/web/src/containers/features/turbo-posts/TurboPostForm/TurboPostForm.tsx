import { TurboPostForm as UITurboPostForm } from '@turbo-blog/web-ui'
import { ChangeEvent, KeyboardEvent } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

interface IData {
  heading: string
  content: string
  tags: Array<{
    value: string
  }>
}

export interface ITurboPostFormProps {
  isLoading?: boolean
  error?: string
  onSubmit: (data: IData) => void
}

export const TurboPostForm = (props: ITurboPostFormProps) => {
  const { isLoading, error, onSubmit } = props

  const {
    getValues,
    control,
    formState,
    register,
    handleSubmit,
    setValue,
    reset,
  } = useForm<IData>()

  const { replace } = useFieldArray<IData>({
    control,
    name: 'tags',
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  // Register the input's in UITurboPostForm here
  register('heading')
  register('content')
  register('tags')

  const handleTags = (key: KeyboardEvent<HTMLInputElement>) => {
    if (key.code !== 'Space') return

    replace({ value: key.currentTarget.value })
  }

  const handleContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue('content', event.target.value)
  }

  const handleHeading = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('heading', event.target.value)
  }

  const tags = getValues('tags')
    ?.map((tag) => tag.value)
    .join()
    .replaceAll(' ', ', ')
    .trim()

  return (
    <UITurboPostForm
      onChangeContent={handleContent}
      onChangeHeading={handleHeading}
      onChangeTags={handleTags}
      isSubmitting={formState.isSubmitting}
      onSubmit={handleSubmit((data) => {
        onSubmit(data)
        reset()
      })}
      tags={tags}
    />
  )
}
