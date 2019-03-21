import React, { Component } from 'react';
import './FaceRecognition.css';

class FaceRecognition extends Component {
    render() {
        const elements = this.props.boxes;
        const boxes = []

        for (const value of elements) {
            boxes.push(<div className='bounding-box' style={{ top: value.topRow, right: value.rightCol, bottom: value.bottomRow, left: value.leftCol }}></div>)
        }

        return (
            <div className='center ma'>
                <div className='absolute mt2'>
                    <img id='inputimage' src={this.props.urlImage} alt='' width="500px" height="auto" />
                    {boxes}
                </div>
            </div>
        )
    }
}

export default FaceRecognition; 