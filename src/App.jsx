import { useState } from "react";
import Cards from "./component/Cards";
import Filters from "./component/Filters";
import Heading from "./component/Heading";
import menu from "./data";
import Card from "./component/Card";
import Filter from "./component/Filter";

const App = () => {
  const [showItems, setShowItems] = useState(menu);

  const showAll = () => {
    setShowItems(menu);
  };
  const showBreakfast = () => {
    const breakfast = menu.filter((item) => item.category === "breakfast");
    setShowItems(breakfast);
  };
  const showLunch = () => {
    const lunch = menu.filter((item) => item.category === "lunch");
    setShowItems(lunch);
  };
  const showShakes = () => {
    const shakes = menu.filter((item) => item.category === "shakes");
    setShowItems(shakes);
  };
  return (
    <main>
      <Heading />
      <Filters>
        <Filter category={"All"} onClick={showAll} />
        <Filter category={"breakfast"} onClick={showBreakfast} />
        <Filter category={"lunch"} onClick={showLunch} />
        <Filter category={"shakes"} onClick={showShakes} />
      </Filters>
      <Cards showItems={showItems}>
        {showItems.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </Cards>
    </main>
  );
};
export default App;
