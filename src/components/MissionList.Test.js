const mission = [
    {
        mission_name: "thaicom",
        mission_id:90187E0,
    },
    {
        mission_name: "Telstar",
        mission_id: "F4F83DE",
    },
]

test('missions list shows data when rerender with new missions data', () => {
    const { rerender } = render(<MissionList errors="" mission={{}}/>)
    let missionsObjects = screen.queryAllByTestId('mission')
    expect(missionsObjects).toHaveLength(0)

    rerender(<MissionsList errors="" mission={missions}/>)
    missionsObjects = screen.queryAllByTestId('mission')
    expect(missionsObjects).toHaveLength(2)
})