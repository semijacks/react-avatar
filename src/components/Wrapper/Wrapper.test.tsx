import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'

import Avatar from '../Avatar/Avatar'
import Wrapper from './Wrapper'

describe('Wrapper', () => {
  beforeEach(() => {
    cleanup()
  })

  it('Should render a caption and an image', () => {
    const url = 'https://avatars.githubusercontent.com/u/1021430?v=4'
    const alt = '@tkdodo-profile-img'
    const cap = "@tkdodo's profile picture"
    render(
      <Wrapper caption={cap}>
        <Avatar url={url} alt={alt} />
      </Wrapper>
    )
    const img = screen.getByAltText(alt)
    const caption = screen.getByText(cap)
    expect(img).toBeInTheDocument()
    expect(caption).toBeInTheDocument()
  })
})
