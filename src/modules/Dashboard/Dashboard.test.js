import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import Dashboard from './Dashboard'
import { fetchUserDreams, fetchUserDreamsByDates } from '../../API/APIcalls'
import user from '../../data/fakeUser'
import UserContext from '../Context/UserContext'
import fakeDreams from '../../data/fakeDreams'
jest.mock('../../API/APIcalls')

describe('Dashboard', () => {
  it.only('should render the dashboard', () => {
    fetchUserDreamsByDates.mockResolvedValueOnce(fakeDreams.dreams)
    
    render(
      <MemoryRouter>
        <UserContext.Provider value={user}>
          <Dashboard />
        </UserContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getByText('Welcome')).toBeInTheDocument()
    expect(screen.getByTestId('addButton')).toBeInTheDocument()
  })

})
