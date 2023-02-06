import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Song from "./components/Song";
import ListSong from "./components/ListSong";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="grid grid-cols-4 bg-slate-800 h-screen-navbar-player">
        <Song></Song>
        <ListSong></ListSong>
      </div>
    </div>
  );
}

export default App;
