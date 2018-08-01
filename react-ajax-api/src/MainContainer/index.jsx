import React, { Component } from 'react';
import NewsList from '../NewsList/index';

class MainContainer extends Component {
    constructor() {
        super();

        this.state = {
            news: []
        }
    }

    getNews = async () => {
        try {
            const news = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f39c06a1c02946c88832985fcc5924e0')
            // parse response from json, allowing to read the request
            let newsJson = await news.json();
            newsJson = newsJson.articles;
            return newsJson;

        } catch (err) {
            return err;
        }
    }

    // ##### SAMPLE Delete Function, 
    // deleteNews = (index, e) => {
    //   this.setState({
    //     news: this.state.news.filter((article, i) => {
    //       return i !== index
    //     })
    //   })
    // }
    // ##### Next line bellow would be used in the return of the render() function
    //  <NewsList news={this.state.news} deleteNews={this.deleteNews} />
    // #### See NewsList/index.js for the button implementation

    componentDidMount() {
        // we want to set state immediately after we get the data
        this.getNews().then((data) => {
            this.setState({ news: data })
        })
    }

    render() {
        return (
            <div className="App">
                <NewsList news={this.state.news} />
            </div>
        );
    }
}

export default MainContainer;