import { PropsWithChildren, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

type DismissableBlurbProps = PropsWithChildren<{
  defaultOpen?: Boolean
}>

function DismissableBlurb({
  children,
  defaultOpen = true,
}: DismissableBlurbProps) {
  const [isBlurbOpen, setIsBlurbOpen] = useState(defaultOpen)

  return isBlurbOpen ? (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        border: '1px solid gray',
        padding: '1rem 1rem',
        borderRadius: '1rem',
        maxWidth: '720px',
      }}
    >
      <div>{children}</div>
      <span
        onClick={() => setIsBlurbOpen(!isBlurbOpen)}
        data-testid='close-svg'
      >
        <AiOutlineClose style={{ fontSize: '1.5rem' }} />
      </span>
    </div>
  ) : null
}

export default DismissableBlurb
