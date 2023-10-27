import { render } from "@testing-library/react"
import MissionForm from "./MissionForm"
import React from 'react'

test('MissionForm renders correctly', () => {
    render(<MissionForm />)
})

test('renders the message when isFetchingData is true', () => {
    render(<MissionFrom isFetchingData={true} />)
    const value = screen.queryByText(/we are fetching data/i)
    expect(value).not.toBeNull()
})

test('render button when isFetching Data is false', () => {
    render(<MissionForm isFetchingData={false} />)
    const value = screen.queryByRole('button')
    expect(value).not.toBeNull()
})

test('calls getData when button is pressed', () => {
    //a spy is going to be a func. that we can pass into a value as a 
    //value of a property to see if it gets called
    const mockGetData = jest.fn(() => {})
    render(<MissionForm getData={mockGetData} />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(mockGetData.mock.calls).toHaveLength(1)
})