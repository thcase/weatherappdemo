/**
 * Provides Unit Tests for search Form Component
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

// NPM Imports
import { act } from "react-dom/test-utils"
import { render, unmountComponentAtNode } from 'react-dom'
import { fireEvent } from '@testing-library/react'

// Local Imports
import SearchForm from "./SearchForm"

// Tests
describe('SearchForm Component should:', () => {
  let searchVal = ''
  let onChange = jest.fn()
  let onSubmit = jest.fn()

  let container = null

  beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })

  it("Should have Label", () => {
    act(() => {
      render(<SearchForm searchVal={searchVal} onChange={onChange} onSubmit={onSubmit}/>, container)
    })
    const labelElement = document.getElementsByTagName('label')
    expect(labelElement).toBeDefined()
    expect(labelElement.length).toBe(1)
    expect(labelElement[0].textContent).toBe("Look up Weather for:")
  })

  it("Should have Input Field", () => {
    act(() => {
      render(<SearchForm searchVal={searchVal} onChange={onChange} onSubmit={onSubmit}/>, container)
    })
    const inputElement = document.getElementsByTagName('input')
    expect(inputElement).toBeDefined()
    expect(inputElement.length).toBe(1)
  })

  it("Should have search Button", () => {
    act(() => {
      render(<SearchForm searchVal={searchVal} onChange={onChange} onSubmit={onSubmit}/>, container)
    })
    const buttonElement = document.getElementsByTagName('button')
    expect(buttonElement).toBeDefined()
    expect(buttonElement.length).toBe(1)
  })

  it("Input onChange is called when fired", () => {
    act(() => {
      render(<SearchForm searchVal={searchVal} onChange={onChange} onSubmit={onSubmit}/>, container)
    })
    const inputElement = document.getElementsByTagName('input')
    expect(inputElement).toBeDefined()
    expect(inputElement.length).toBe(1)
    fireEvent.input(inputElement[0], { target: { value: 'test' } })
    expect(onChange).toHaveBeenCalled()
  })

  it("onSubmit is called when fired", () => {
    act(() => {
      render(<SearchForm searchVal={searchVal} onChange={onChange} onSubmit={onSubmit}/>, container)
    })
    const formElement = document.getElementsByTagName('form')
    expect(formElement).toBeDefined()
    expect(formElement.length).toBe(1)
    fireEvent.submit(formElement[0])
    expect(onSubmit).toHaveBeenCalled()
  })

})
