import React from "react";
import Food, { foodILike, renderFood } from "./Food";

function App() {
  return (
      <div>
          {foodILike.map(renderFood)}
          {/*{foodILike.map(dish => (*/}
          {/*    <Food name={dish.name} picture={dish.image}/>*/}
          {/*))}*/}
      </div>

  )
}

export default App;
