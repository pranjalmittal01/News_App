import './App.css';
import News from './components/News';
import NavBar from './components/NavBar';
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <NavBar/> */}
        {/* <News pageSize={15} country="in" category="science"/> */}
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="technology" pageSize={15} country="in" category="general"/>}></Route>
            <Route exact path="/business" element={<News key="business" pageSize={15} country="in" category="business"/>}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={15} country="in" category="entertainment"/>}></Route>
            <Route exact path="/general" element={<News key="general" pageSize={15} country="in" category="general"/>}></Route>
            <Route exact path="/health" element={<News key="health" pageSize={15} country="in" category="health"/>}></Route>
            <Route exact path="/science" element={<News key="science" pageSize={15} country="in" category="science"/>}></Route>
            <Route exact path="/sports" element={<News key="sports" pageSize={15} country="in" category="sports"/>}></Route>
            <Route exact path="/technology" element={<News key="technology" pageSize={15} country="in" category="technology"/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}



// import React, { useState } from 'react'
// import NavBar from './components/NavBar';
// 
// import LoadingBar from 'react-top-loading-bar'

// const App = () => {
//   const pageSize = 10;
//   // const apiKey = process.env.REACT_APP_NEWS_API
//   const [progress, setProgress] = useState(0)

//   return (
//     <div>        
//     </div>
//   )

// }

// export default App;
