import React, {Component} from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    state = {
        reversed: false
    };

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        App name
                        <button className="btn" onClick={this.revert}>Revert</button>
                    </h1>
                </div>
                <ArticleList articles={!this.state.reversed ? articles.reverse() : articles}/>
            </div>
        )
    }

    revert = () => this.setState({
        reverted: !this.state.reversed
    })
}

export default App