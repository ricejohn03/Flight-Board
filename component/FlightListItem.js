const FlightListItem = ({ ship, flight}) => {
    console.log(`ship name: ${ship} Flight: ${flight}`)
    return(
    <tr>
        <td>{ship}</td>
        <td>{flight.origin}</td>
        <td>{flight.destination}</td>
        <td>{flight.departureTime.current}</td>
        <td>{flight.arrivalTime.current}</td>
        </tr>
        )

}

export default FlightListItem