import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="imageContainerMenu">
        <img
          src="/src/assets/ironhack.png"
          alt="ironHackLogo"
          className="ironhack-logo"
        />
        <img src="/src/assets/menutop.png" alt="menuTop" className="menu-top" />
      </div>
      <h1>
        Say hello to <span className="reactJS">ReactJS</span>
      </h1>
      <p>
        You will learn how to use{" "}
        <span className="p1">the most popular frontend library,</span> and
        become a super Ninja developer
      </p>
      <button className="button">Awesome!</button>
      <br />
      <div className="imageContainerIcons">
        <img src="/src/assets/icon1.png" alt="icon1" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
        <img src="/src/assets/icon2.png" alt="icon2" />
        <h3>Comnponents</h3>
        <p>Build encapsulated components that manage their state.</p>
        <img src="/src/assets/icon3.png" alt="icon3" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's.</p>
        <img src="/src/assets/icon4.png" alt="icon4" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

export default App;
