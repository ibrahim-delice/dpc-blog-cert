import { Button, TextArea, TextInput } from 'common'
import { BaseSyntheticEvent, KeyboardEvent } from 'react'

export interface ITurboPostFormProps {
  onSubmit: (e?: BaseSyntheticEvent<object, any, any>) => Promise<void>
  isSubmitting: boolean
  setValue: (name: string, value: string) => void
  onTags: (key: KeyboardEvent<HTMLInputElement>) => void
  tags: string
}

export const TurboPostForm = (props: ITurboPostFormProps) => {
  const { onSubmit, isSubmitting, setValue, onTags, tags } = props

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col w-full gap-14 justify-center items-center px-5"
    >
      <label>
        Heading:
        <TextInput
          onChange={(event) => setValue('heading', event.target.value)}
          required
        />
      </label>
      <label>
        Tags:
        <div>
          <p>{tags}</p>
          <TextInput name="tags" onKeyUp={onTags} required />
        </div>
      </label>
      <label>
        Content:
        <TextArea
          name="content"
          onChange={(event) => setValue('content', event.target.value)}
        />
      </label>

      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  )
}
