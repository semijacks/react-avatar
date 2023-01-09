import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'

import DismissableBlurb from './DismissableBlurb'

// renders a

describe('Dismissable Blurb', () => {
  beforeEach(() => {
    cleanup()
  })
  it('Renders children inside blurb', () => {
    render(
      <DismissableBlurb>
        <h3>Hello</h3>
      </DismissableBlurb>
    )

    const text = screen.getByText(/Hello/i)
    expect(text).toBeInTheDocument()
  })

  it('Checks that close button exists', () => {
    render(<DismissableBlurb />)

    const closeButton = screen.getByTestId('close-svg')
    expect(closeButton).toBeInTheDocument()
  })

  it('Expect blurb on close on button click', () => {
    render(
      <DismissableBlurb>
        <h3>Welcome to the new feed</h3>
      </DismissableBlurb>
    )

    const closeButton = screen.getByTestId('close-svg')
    fireEvent.click(closeButton)
    expect(closeButton).not.toBeInTheDocument()
  })
})
