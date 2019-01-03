import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import About from '../About/About';
import Header from '../Header'
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="background-wallpaper" >
                        <Header />
                        <img src="./wallpaper.jpg" />
                    </div>
                    <Route exact path="/" component={Home}  />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/blog" component={Blog} />

                    <footer className="text-center">&copy; 2016-2019 Akiraff</footer>
                </div>
            </Router>
        );
    }
}

export default App;
