import { Banner } from "./components/Banner";
import { Movies } from "./components/Movies";
import { Navbar } from "./components/Navbar";
import { Watchlist } from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  let [watchlist, setWatchlist] = useState([]);

  let handleAddtoWatchlist = (movieobj) => {
    let newWatchList = [...watchlist, movieobj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setWatchlist(newWatchList);
    console.log(watchlist);
  };

  let handleRemovetoWatchlist = (movieobj) => {
    let filterwatchlist = watchlist.filter((movie) => {
      return movie.id != movieobj.id;
    });
    setWatchlist(filterwatchlist);
    console.log(watchlist);
  };

  useEffect(() => {
    let moviesFromlocalStorage = localStorage.getItem("moviesApp");
    if (!moviesFromlocalStorage) {
      return;
    } else {
      setWatchlist(JSON.parse(moviesFromlocalStorage));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchlist={watchlist}
                  handleAddtoWatchlist={handleAddtoWatchlist}
                  handleRemovetoWatchlist={handleRemovetoWatchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist watchlist={watchlist} setWatchlist={setWatchlist} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
