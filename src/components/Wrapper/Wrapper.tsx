import '../../App.css'
import { PropsWithChildren } from 'react'

type WrapperProps = PropsWithChildren<{
  caption: string
}>

function Wrapper({ caption, children }: WrapperProps) {
  return (
    <figure className='wrapper'>
      {children}
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export default Wrapper
