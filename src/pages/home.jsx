import React, { useState } from "react";

export default function Home() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    // Handle input changes and button clicks
    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const clearInput = () => {
        setInput("");
        setResult("");
    };

    const calculate = () => {
        try {
            // Safely evaluate the input
            const evaluated = new Function("return " + input)();
            setResult(evaluated);
        } catch (err) {
            setResult("Error");
        }
    };

    return (
        <div className="w-72 mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
            <div className="mb-4">
                <input
                    type="text"
                    value={input}
                    readOnly
                    className="w-full h-10 text-right text-lg border-b mb-2 px-2 focus:outline-none"
                    placeholder="0"
                />
                <div className="text-right text-xl font-semibold">{result}</div>
            </div>

            <div className="grid grid-cols-4 gap-3">
                <button onClick={() => handleClick("1")} className="btn">1</button>
                <button onClick={() => handleClick("2")} className="btn">2</button>
                <button onClick={() => handleClick("3")} className="btn">3</button>
                <button onClick={() => handleClick("+")} className="btn btn-op">+</button>

                <button onClick={() => handleClick("4")} className="btn">4</button>
                <button onClick={() => handleClick("5")} className="btn">5</button>
                <button onClick={() => handleClick("6")} className="btn">6</button>
                <button onClick={() => handleClick("-")} className="btn btn-op">-</button>

                <button onClick={() => handleClick("7")} className="btn">7</button>
                <button onClick={() => handleClick("8")} className="btn">8</button>
                <button onClick={() => handleClick("9")} className="btn">9</button>
                <button onClick={() => handleClick("*")} className="btn btn-op">*</button>

                <button onClick={clearInput} className="btn btn-clear">C</button>
                <button onClick={() => handleClick("0")} className="btn">0</button>
                <button onClick={calculate} className="btn btn-equals">=</button>
                <button onClick={() => handleClick("/")} className="btn btn-op">/</button>
            </div>
        </div>
    );
}
