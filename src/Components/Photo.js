import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Titles from './Titles';
import Footer from './Footer';

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
                <div className="content">
                    <header>
                        <div className="center-elements">
                            <Titles />
                        </div>
                    </header>
                    <div className="SectionElements">
                        {this.state.currentPhoto.length !== 0 &&
                            <div className="FlexSection">
                                <div className="Image">
                                    <img src={photo.urls.regular} alt={photo.description} />
                                </div>
                                <div className="Text">
                                    <div className="title-row">
                                        <h2>By {photo.user.name}</h2>
                                        <div className="buttons">
                                            <a href={photo.links.download + '?force=true'} className="DownloadBtnOne" download>
                                                Download
                                    </a>
                                            <button onClick={this.props.history.goBack}>Go Back</button>
                                        </div>
                                    </div>
                                    <h4>Location: <span>{photo.user.location}</span></h4>
                                    <h4>Original resolution: <span>{photo.width}x{photo.height}</span></h4>
                                    <h4>Views: <span>{photo.views.toLocaleString()}</span></h4>
                                    <h4>Downloads: <span>{photo.downloads.toLocaleString()}</span></h4>
                                    <a href={photo.links.download + '?force=true'} className="DownloadBtnTwo" download>
                                        Download
                                </a>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

export default withRouter(Photo);