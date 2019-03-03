import React, { Component } from 'react';
import "./styles.css";

export default class Footer extends Component {

    render() {
        return (
            <div className="FooterRoot">
                <div className="sections" >
                    <p>Accidentally Received Real Puppy</p>
                    <p>FAQ</p>
                    <p>Shipping</p>
                    <p>Returns</p>
                </div>
                <p>© Copyright PuppyTown 2019. All Rights Reserved.</p>
                
            </div>

        )
    }

}