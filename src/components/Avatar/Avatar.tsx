import { useState } from 'react'

export const FALLBACK_AVATAR_URL =
  'https://avatars.githubusercontent.com/u/12433465?v=4'
export const FALLBACK_AVATAR_ALT_TEXT = '@github-handle'

type AvatarProps = {
  /** the url of an image to render for the avatar. **/
  url?: string
  /** the alt text to use for the url image. **/
  alt?: string
}

function Avatar({
  url = FALLBACK_AVATAR_URL,
  alt = FALLBACK_AVATAR_ALT_TEXT,
}: AvatarProps) {
  const [srcToRender, setSrcToRender] = useState(url)
  return (
    <img
      style={{ borderRadius: '2em' }}
      src={srcToRender}
      alt={alt}
      onError={() => setSrcToRender(FALLBACK_AVATAR_URL)}
    />
  )
}

export default Avatar
