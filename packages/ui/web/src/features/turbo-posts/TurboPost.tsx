export interface ITurboPostProps {
  heading: string
  content: string
}

export const TurboPost = (props: ITurboPostProps) => {
  const { heading, content } = props

  return (
    <div>
      <h1 className="text-4xl">{heading}</h1>
      <p>{content}</p>
    </div>
  )
}
