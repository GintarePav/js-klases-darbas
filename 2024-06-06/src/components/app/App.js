import { useState, useEffect } from "react";
import CatCard from "../catCards/CatCard";

const App = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    try {
      fetch("https://api.thecatapi.com/v1/breeds")
        .then((response) => response.json())
        .then((data) => setCats(data));
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <section>
      {cats.map((cat) => {
        // console.log(cat);
        return (
          <CatCard key={cat.id} name={cat.name} description={cat.description} />
        );
      })}
    </section>
  );
};

export default App;
