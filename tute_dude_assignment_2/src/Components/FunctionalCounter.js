import React, { useState } from "react";

function FunctionalCounter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <h1>Functional Component</h1>
            <h3>Count: {count}</h3>
            <button onClick={() => increment()}>+</button>
            <button onClick={() => decrement()}>-</button>
        </div>
    );
}

export default FunctionalCounter;
