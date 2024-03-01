import React from "react";
import Food, { foodILike } from "./Food";

function App() {
    return (
        <div>
            {foodILike.map(dish => (
                <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
            ))}
        </div>

    )
}

export default App;
