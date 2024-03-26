import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
// import { useGetSimilarArtists } from './lib/spotify-api-hooks';
// import { useGetEvents } from './lib/ticketmaster-api-hooks';
// import { FetchState } from './types';
import Artists from './views/Artists';
import Events from './views/Events';

function App() {
  //   const [events, fetchStateEvents, getEvents] = useGetEvents()
  //   const [artists, fetchStateArtists, getSimilarArtists] = useGetSimilarArtists()

  return (
    <>
      <BrowserRouter>
        <h1>Explore New Music</h1>
        <Routes>
          <Route path="/artist/:id/:name" element={<Events />} />
          <Route path="/" element={<Artists />} />
        </Routes>
        {/* {
        fetchStateEvents === FetchState.DEFAULT && <button onClick={getEvents}>Get Events</button>
      }
      {fetchStateEvents === FetchState.LOADING && <p>Loading...</p>}
      {fetchStateEvents === FetchState.ERROR && <p>There was an error</p>}
      {fetchStateEvents === FetchState.SUCCESS && (
        <ul>
        {events.map((event) => (
          <li key={event.id}>
          <h2>{event.name}</h2>
          <p>{event.dates.start.localDate} at {event.dates.start.localTime}</p>
          <p>{event.url}</p>
          </li>
          ))}
          </ul>
        )} */}
      </BrowserRouter>
    </>
  );
}

export default App;
