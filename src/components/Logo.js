import React, { Component } from 'react';

class Logo extends Component {

    render() {
        return (
            <header className="App-header">
                {this.props.title} 
                <img className="cyf-image" src="https://codeyourfuture.io/static/media/cyf_brand.fbcea877.png"/>
            </header> 
        )
    }
}

export default Logo;