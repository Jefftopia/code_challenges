import React, { Component } from 'react';

import './styles.css';

import Review from './review';

export default class Reviews extends Component {

    renderReview = () => {
        const reviews = [
            {
                author: "JoeyBaseball",
                rating: 0.5,
                writing: "My real dog got jelous and ate it, I am currently at the vet with a very sick dog. Do not buy if you have jelous animals."
            },
            {
                author: "Jill123",
                rating: 5,
                writing: "My son plays with it everyday!"
            },
            {
                author: "ApatheticGuy1",
                rating: 2.5,
                writing: "Meh."
            }
        ]
        return (
            <div className="reviewsContainer">
                {reviews.map(review => {
                    return (
                    <Review 
                       author={review.author}
                       rating={review.rating}
                       writing={review.writing} 
                    />)
                })}
            </div>
        )
    }


    render() {
        const reviews = this.renderReview();
        return (
            <div className="reviewsRoot" >
                <p className="Title">
                    Here's what people have to say about the Jiffy Puppy
                </p>
                {reviews}
                <button className="leaveReview">
                    Leave A Review
                </button>
            </div>
        )
    }
}