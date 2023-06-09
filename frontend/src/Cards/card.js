import './card.css';
import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
    render() {
        var cardStyle = {
            height: 200,
            width: 150,
            padding: 0,
            backgroundColor: "#FFF",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)",
            display: "inline-block",
            margin: "45px"
        };

        return (
            <div style={cardStyle}>
                <h4>{this.props.title}</h4>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default Card;