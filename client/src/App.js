import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Articles from "./pages/Articles";
// import Search from "./components/Search";
// import Result from "./components/Result";
// import Saved from "./components/Saved";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Nav />
//         <Search />
//         <Result />
//         <Saved />

//       </div>
//     );
//   }
// }

const App = () => (
  <div>
    <Nav />
    <Articles />
  </div>
 );

export default App;
