import "./App.css";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Row from "./Components/Row";
import Requests from "./Requests";

function App({ fetchUrl }) {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="Trending Now"
        fetchUrl={Requests.fetchTrending}
        isLargeRow={false}
      />
      <Row
        title="Top Rated"
        fetchUrl={Requests.fetchTopRated}
        isLargeRow={false}
      />
      <Row
        title="Action Movies"
        fetchUrl={Requests.fetchActionMovies}
        isLargeRow={false}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={Requests.fetchComedyMovies}
        isLargeRow={false}
      />

      <Row
        title="Horror Movies"
        fetchUrl={Requests.fetchHorrorMovies}
        isLargeRow={false}
      />

      <Row
        title="Romance Movies"
        fetchUrl={Requests.fetchRomanceMovies}
        isLargeRow={false}
      />

      <Row
        title="Documentaries"
        fetchUrl={Requests.fetchDocumentaries}
        isLargeRow={false}
      />
    </div>
  );
}

export default App;
