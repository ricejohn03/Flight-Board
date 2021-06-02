import './App.css';
import FlightListItem from './component/FlightListItem';
import FLIGHT_DATA from './data.js'

function App() {
  return (
      <div className="App">
          <div>
              <h1 className="header">All Flights</h1>
              <table>
                  <tr>
                      <th>Ship</th>
                      <th>Origin</th>
                      <th>Destination</th>
                      <th>Depart</th>
                      <th>Arrive</th>
                  </tr>
                  {Object.entries(FLIGHT_DATA).map((item) => {
                      return (
                          item[1].map((flights) => {
                              return (<FlightListItem ship={item[0]} flight={flights} />)
                          })
                          )
                      })
                  }
              </table>
          </div>
    </div>
  );
}

export default App;
