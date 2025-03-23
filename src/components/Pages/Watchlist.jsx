import React from "react";

function Watchlist() {
  const movies = [
    {
      title: "Inception",
      year: 2010,
      duration: "148 min",
      rating: 8.8,
      director: "Christopher Nolan",
      genre: "Action, Sci-Fi",
      addedDate: "10/15/2023",
    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      duration: "142 min",
      rating: 9.3,
      director: "Frank Darabont",
      genre: "Drama",
      addedDate: "10/10/2023",
    },
  ];

  return <h1>Watchlist</h1>;
}

export default Watchlist;
