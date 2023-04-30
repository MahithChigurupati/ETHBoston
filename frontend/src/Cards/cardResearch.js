import './cardResearch.css';
import React from 'react';
import ReactDOM from 'react-dom';
import NewlineText from './NewlineText';

class CardResearch extends React.Component {

    
    render() {
        var cardStyle = {
            height: 200,
            width: 150,
            padding: 0,
            backgroundColor: "#FFF",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)",
            display: "inline-block",
            margin: "45px",
        };

        return (
            <div style={cardStyle}>
                <img require src={this.props.image} style={{width:150, height: 200}}/>
                <h3>{this.props.title}</h3>
                {/* <div style={}>
                {this.props.information}
                </div>  */}

                <NewlineText text={this.props.information} />
            </div>
        );
    }
}

export default CardResearch;