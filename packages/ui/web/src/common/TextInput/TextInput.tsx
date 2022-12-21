import { InputHTMLAttributes } from 'react'

export interface ITextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = (props: ITextInputProps) => {
  return <input {...props} className="border" />
}
