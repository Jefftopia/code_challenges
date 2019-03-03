import React, { Component } from 'react';
import "./styles.css";

export default class Header extends Component {

    render() {
        return (
            <div className="HeaderRoot">
                <div className="name" >
                    <h1 className="pup" >PUPPY</h1>
                    <h1 className="town">TOWN</h1>
                </div>
                <div className="sections" >
                    <h3 className="selected" >Puppies</h3>
                    <h3 className="unselected">Kittens</h3>
                    <h3 className="unselected">Bananas</h3>
                    <h3 className="unselected">Mystery Section</h3>
                </div>
            </div>

        )
    }

}