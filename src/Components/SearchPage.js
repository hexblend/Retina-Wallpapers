import React, { Component } from 'react';

// Assets
import '../Assets/css/main.min.css';

// Components
import Form from './Form';
import Photos from './Photos';

const API_KEY = '1686e47585b8407987d325464925639fa05f1195fca4b2c201d4dae923a7f274';

class SearchPage extends Component {

    state = {
        photos: []
    }
    
    componentWillMount = async () => {
        const Search = this.props.match.params.keyword;
        const api_call = await fetch(`https://api.unsplash.com/search/photos?client_id=${API_KEY}&page=1&query=${Search}&orientation=landscape&per_page=40&order_by=popular`);
        const data = await api_call.json();
        this.setState({ photos: data.results });
    }

    render() {
        return (
            <div className="App">
                <header className="header">
                    <h1>Search</h1>
                    <p>Wallpapers perfect for your high-resolution screen.</p>
                </header>
                <div className="container-fluid body-container">
                    <div className="row">

                        <Form />
                        <Photos getPhotos={this.state.photos} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchPage;
