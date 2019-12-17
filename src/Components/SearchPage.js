import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Components
import Titles from './Titles';
import Form from './Form';
import Photos from './Photos';
import Footer from './Footer';

const API_KEY = '1686e47585b8407987d325464925639fa05f1195fca4b2c201d4dae923a7f274';

class SearchPage extends Component {
    state = {
        photos: []
    }

    componentWillMount = async () => {
        const Search = this.props.match.params.keyword;
        const api_call = await fetch(`https://api.unsplash.com/search/photos?client_id=${API_KEY}&page=${this.state.page}&query=${Search}&orientation=landscape&per_page=40&order_by=popular`);
        const data = await api_call.json();
        this.setState({ photos: data.results });
    }

    getInput = () => {
        setTimeout(async () => {
            const newSearch = this.props.match.params.keyword;
            const api_request = await fetch(`https://api.unsplash.com/search/photos?client_id=${API_KEY}&page=${this.state.page}&query=${newSearch}&orientation=landscape&per_page=40&order_by=popular`);
            const api_response = await api_request.json();
            this.setState({ photos: api_response.results });
        }, 100);
    }

    render() {
        return (
            <div className="SearchPage">
                <Link to='/'>
                    <button className="backButton" onClick={this.props.history.goBack}>Go Back</button>
                </Link>
                <header>
                    <div className="center-elements">
                        <Titles />
                        <Form onSubmit={this.getInput} value={this.props.match.params.keyword} />
                    </div>
                </header>
                <Photos getPhotos={this.state.photos} />
                <Footer />
            </div>
        );
    }
}

export default withRouter(SearchPage);
