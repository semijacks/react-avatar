import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'

import Avatar, { FALLBACK_AVATAR_URL, FALLBACK_AVATAR_ALT_TEXT } from './Avatar'

describe('Avatar', () => {
  beforeEach(() => {
    cleanup()
  })

  it('Should render an img', () => {
    const url = 'https://cataas.com/cat/says/hello%20world!'
    const alt = 'profile img'

    render(<Avatar url={url} alt={alt} />)

    const img = screen.getByAltText(alt)
    expect(img).toBeInTheDocument()
    expect(img.tagName).toBe('IMG')
  })
  it('Should render the url and alt passed in', () => {
    const url = 'https://cataas.com/cat/says/hello%20world!'
    const alt = 'a beautiful cat'

    render(<Avatar url={url} alt={alt} />)

    const img = screen.getByAltText(alt)
    expect(img).toHaveAttribute('src', url)
  })
  it('Should use a fallback url if no URL is passed in', () => {
    render(<Avatar />)

    const img = screen.getByAltText(FALLBACK_AVATAR_ALT_TEXT)
    expect(img).toHaveAttribute('src', FALLBACK_AVATAR_URL)
  })
  it('Should use a fallback image if image fails to load', () => {
    render(<Avatar url='https://images/image.png' />)

    const img = screen.getByAltText(FALLBACK_AVATAR_ALT_TEXT)
    fireEvent.error(img)
    expect(img).toHaveAttribute('src', FALLBACK_AVATAR_URL)
  })
  it('Should use a fallback image if url is empty string', () => {
    render(<Avatar url='' />)

    const img = screen.getByAltText(FALLBACK_AVATAR_ALT_TEXT)
    fireEvent.error(img)
    expect(img).toHaveAttribute('src', FALLBACK_AVATAR_URL)
  })
})
