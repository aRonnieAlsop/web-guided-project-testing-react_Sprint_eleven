import { fireEvent, render, screen, wait } from "@testing-library/react"
import React from 'react'
import App from "./App"

import mockFetchMission from './api/fetchMissions'
jest.mock('./api/fetchMission')

test("renders without errors", () => {
    render(<App />)
})

test('fetches and renders mission data', async () => {
    render(<App />)
    mockFetchMission.mockResolvedValueOnce({
        data: [
            {mission_name: "Mission 1", mission_id: "mission 1"},
            {mission_name: "Mission 2", mission_id: "mission 2"}
        ]
       
    })
    const button = screen.getByRole('button')
    fireEvent.click(button)

    await wait()

    expect(screen.getAllByTestId("mission")).toHaveLength(2)
})


