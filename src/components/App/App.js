import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Link
import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import About from '../About/About';
import Header from '../Header'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            test: []
        };
    }
    componentDidMount() {
        console.log(axios);
        axios.get('/api/test').then(res => console.log(res.data.a));
    }

    render() {
        return (
            <Router>
                <div>
                    <div className="background-wallpaper" >
                        <Header />
                    </div>
                    <Route exact path="/" component={Home}  />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/blog" component={Blog} />

                    <footer className="footer text-center">&copy; 2016-2019 Akiraff</footer>
                </div>
            </Router>
        );
    }
}

export default App;
