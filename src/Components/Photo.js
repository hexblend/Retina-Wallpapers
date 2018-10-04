import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Titles from './Titles';

const API_KEY = '1686e47585b8407987d325464925639fa05f1195fca4b2c201d4dae923a7f274';

class Photo extends React.Component {
    state = {
        currentPhoto: []
    }

    componentDidMount = async () => {
        const PHOTO_ID = this.props.location.state.photo;
        const request = await fetch(`https://api.unsplash.com/photos/${PHOTO_ID}?&client_id=${API_KEY}`);
        const response = await request.json();
        this.setState({ currentPhoto: response });
        console.log(this.state.currentPhoto);
    }

    render(){
        const photo = this.state.currentPhoto;
        return(
            <div className="Photo-Component">
                <Link to='/'>
                    <button className="backButton" onClick={this.props.history.goBack}>Go Back</button>
                </Link>
                <header>
                    <div className="center-elements">
                        <Titles />
                    </div>
                </header>
                <div className="SectionElements">
                    { this.state.currentPhoto.length !== 0 && 
                        <div className="FlexSection">
                            <div className="Image">
                                <img src={photo.urls.regular} alt={photo.description} />
                            </div>
                            <div className="Text">
                                <h2>By {photo.user.name}</h2>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
};

export default withRouter(Photo);