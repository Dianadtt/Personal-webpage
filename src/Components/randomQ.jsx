import React, { Component } from 'react'
import axios from 'axios'
import "../pages/landing-page.css"

class RandomQuote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: '',
            author: ''
        }
    }
    componentDidMount() {
        this.getQuote()
    }
    getQuote() {
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        axios.get(url)
            .then(res => {
                let data = res.data.quotes
                console.log(data)
                let quoteNum = Math.floor(Math.random() * data.length)
                let randomQuote = data[quoteNum]
                console.log(randomQuote)
                this.setState({
                    quote: randomQuote['quote'],
                    author: randomQuote['author']
                })
            })
    }
    getNewQuote = () => {
        this.getQuote()
    }
    render() {
        const { quote, author } = this.state
        return (
            <div >
                <div id='text'><p>"{quote}"</p>
                </div>
                <div id='author'><p>{author}</p>
                </div>
            </div>
        )
    }
}

export default RandomQuote