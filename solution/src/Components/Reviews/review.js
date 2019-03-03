import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating';

import profilePic from '../../assets/blank-profile-picture.png';


import './styles.css';

export default class Review extends Component {


    render() {
        return (
            <div className="reviewRoot">
                <div className="topPart" >
                    <div className="userSection" >
                        <img src={profilePic} className="profilePicture" />
                        <p className="userName">
                            {this.props.author}
                        </p>
                    </div>
                    <Rating 
                        className="rating"
                        initialRating={this.props.rating}
                        readonly
                    />
                </div>
                <p className="reviewText">
                    {this.props.writing}
                </p>
                
            </div>
        )
    }

}

Review.propTypes = {
    author: PropTypes.string,
    rating: PropTypes.number,
    writing: PropTypes.string
}