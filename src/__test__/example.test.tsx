import { render, screen } from '@testing-library/react'
import Test from '@/app/page'

describe('Test Component', () => {
  it('renders the test correctly', () => {
    render(<Test />)
    const headerElement = screen.getByTestId('test')
    expect(headerElement).toBeInTheDocument()
    expect(headerElement).toHaveTextContent('test')
  })
})
