import { useEffect, useState } from "react";
function App() {
  // const [str, setStr] = useState("software");
  // const [str2, setStr2] = useState("JEST");
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setStr("JEST");
  //     setStr2("software");
  //   }, 300);
  // }, []);

  // const str = "JEST";
  return (
    <div className="App">
      {/* <div> {str}</div>
      <div> {str2}</div>
      <div title="title">React Testing by using...</div>
      <div title="title">React Testing by using...</div> */}
      {/* htmlFor attribute'ı ile ilgili label ve input eşleştirilir. */}
      {/* <label htmlFor="input">First name</label>
      <input id="input" type="text" placeholder="Enter the first name"></input>
      <label htmlFor="input2">second Name</label>
      <input
        id="input2"
        type="text"
        placeholder="Enter the second name"
      ></input>
      <button>Test</button>
      <button>Test2</button>
      <h1>Testing React Elements</h1> */}
      {/* <h1>Testing React</h1> */}
      {/* <input data-testId="test" value="testing"></input> */}
      {/* <a href="http://google.com">Click</a>
      <img src="" alt="img"></img> */}
      <h1 id="counter">Counter:{counter}</h1>
      <button onClick={() => setCounter(counter + 2)}>Increase</button>
    </div>
  );
}

export default App;
