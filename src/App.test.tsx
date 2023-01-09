import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import Wrapper from './components/Wrapper/Wrapper'
import Avatar from './components/Avatar/Avatar'

describe('App', () => {
  it('should render with the title visible', () => {
    render(
      <Wrapper caption="@tkdodo's-profile-img">
        <Avatar
          url='https://avatars.githubusercontent.com/u/1021430?v=4'
          alt='profile-img'
        />
      </Wrapper>
    )
    const img = screen.getByAltText('profile-img')
    expect(img).toBeInTheDocument()
    expect(img.tagName).toBe('IMG')
  })
})
