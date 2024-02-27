import { useState } from "react";
import Cards from "./component/Cards";
import Filters from "./component/Filters";
import Heading from "./component/Heading";
import menu from "./data";

const resultantCategories = [...new Set(menu.map((item) => item.category))];

const categories = ["all", ...resultantCategories];

const App = () => {
  const [showItems, setShowItems] = useState(menu);
  return (
    <main>
      <Heading />
      <Filters categories={categories} />
      <Cards showItems={showItems} />
    </main>
  );
};
export default App;
