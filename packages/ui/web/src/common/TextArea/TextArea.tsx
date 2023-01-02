import { TextareaHTMLAttributes } from 'react'

export interface ITextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = (props: ITextAreaProps) => {
  return <textarea {...props} className="border" />
}
