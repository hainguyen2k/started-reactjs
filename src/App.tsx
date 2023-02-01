import "./App.css";
import CardItem from "./components/CardItem/CardItem";
import Header from "./components/Header/Header";
import { CardDataDummy } from "./data/CardDataDummy";
function App() {
  console.log(CardDataDummy);
  return (
    <div className="App">
      <Header name="Hai"></Header>
      <CardItem
        img="https://images.unsplash.com/photo-1675055477411-31cfa13b4798?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        cardTitle="Huou cao co"
        cardDescription="Day la con huou cao co"
      ></CardItem>
      {CardDataDummy.map((data) => (
        <CardItem
          img={data.img}
          cardTitle={data.cardTitle}
          cardDescription={data.cardDescription}
        ></CardItem>
      ))}
    </div>
  );
}

export default App;
