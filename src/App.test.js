/**
 * Provides Unit Test for main App Component
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

import { render, screen } from '@testing-library/react'
import App from './App'

describe('App should: ',() => {

  it('Have Title Present', () => {
    render(<App />)
    const linkElement = screen.getByText(/Demo Weather app/i)
    expect(linkElement).toBeInTheDocument()
  })

  it('Have Copyright Present',() => {
    const text = /© \d{4} T.H. Case/i
    render(<App />)
    const linkElement = screen.getByText(text)
    expect(linkElement).toBeInTheDocument()
  })

})

