import { Button, TextArea, TextInput } from 'common'
import { BaseSyntheticEvent, ChangeEvent, KeyboardEvent } from 'react'

export interface ITurboPostFormProps {
  onSubmit: (e?: BaseSyntheticEvent<object, any, any>) => Promise<void>
  isSubmitting: boolean
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onChangeHeading: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeTags: (key: KeyboardEvent<HTMLInputElement>) => void
  tags: string
}

export const TurboPostForm = (props: ITurboPostFormProps) => {
  const {
    onSubmit,
    isSubmitting,
    onChangeContent,
    onChangeHeading,
    onChangeTags,
    tags,
  } = props

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col w-full gap-14 justify-center items-center px-5"
    >
      <label>
        Heading:
        <TextInput onChange={onChangeHeading} required />
      </label>
      <label>
        Tags:
        <div>
          <p>{tags}</p>
          <TextInput name="tags" onKeyUp={onChangeTags} required />
        </div>
      </label>
      <label>
        Content:
        <TextArea name="content" onChange={onChangeContent} />
      </label>

      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  )
}
