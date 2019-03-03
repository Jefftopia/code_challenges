import React, { Component } from 'react';
import PropTypes from  'prop-types';

import "./styles.css";

export default class ImageSelector extends Component {


    state = {
        currentImage: 0 // index in the array of images
    }

    renderSelectors = () => {
        var i = -1;
        const selectors = this.props.images.map(image => {
            i++;
            const copyOfi = i; // pass a deep copy of i because react is dumb
            return(
                <button 
                    key={i}
                    onClick={() => {
                        this.setState({currentImage: copyOfi});
                    }}
                    className={i === this.state.currentImage ? "selectedPreview" : "notSelectedPreview"}
                >
                    <img
                        className="previewImage" 
                        src={image}
                    />
                </button>
            )
        });
        return (
            <div className="previewRoot">
                {selectors}
            </div>
        )
    }

    render() {
        const selectors = this.renderSelectors();
        return (
            <div className="imageSelectorRoot" >

                <img 
                    className="selectedImage"
                    src={this.props.images[this.state.currentImage]} 
                    />

                {selectors}

           </div>
        )
    }

}

ImageSelector.propTypes = {
    images: PropTypes.array
}