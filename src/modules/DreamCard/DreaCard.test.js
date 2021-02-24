import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import DreamCard from './DreamCard'

describe('DreamCard', () => {
  it('should render a dream card showing a title', () => {
    render(
      <DreamCard 
      title='Creepy dream'
      description='I was in the woods and it was creepy'
      date='June Tuesday 22'
      emotion={1}
      />
    )
    expect(screen.getByText('Creepy dream')).toBeInTheDocument()
    expect(screen.getByText('June Tuesday 22')).toBeInTheDocument()
  })

  it('should show the details of the card when the show more arrow is presses', () => {
    render(
      <DreamCard
        title="Happy cloud"
        description="I was jumping on a cloud"
        date="June Wednesday 23"
        emotion={5}
      />
    )

    expect(screen.getByText('Happy cloud')).toBeInTheDocument()
    expect(screen.getByText('June Wednesday 23')).toBeInTheDocument()
    const showMoreButton = screen.getByLabelText('show more')
    userEvent.click(showMoreButton)
    expect(screen.getByText('I was jumping on a cloud')).toBeInTheDocument()


  })
})