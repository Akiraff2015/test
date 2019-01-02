import React, {Component} from 'react';

import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import About from '../About/About';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="font-thasadith container">
                <Home />
                <Blog/>
                <About />

                <footer className="text-center">
                    &copy; Akiraff 2016 - 2019. Created with React <i className="fas fa-heart"></i>
                </footer>
            </div>
        );
    }
}

export default App;
