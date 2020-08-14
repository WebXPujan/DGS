import React from 'react';

const IntroTextWrap = ({intro1,intro2,highlight,para}) => {
    return (
        <div className="intro-wrap">
            <h1 className="title title__big big text-center intro">
                <strong className="number">{intro1}</strong><br/>
            <strong className="number">{intro2}<span className="green">{highlight}</span></strong>
            </h1>
            <p className="para">
            {para}
            </p>
        </div>
    );
}

export default IntroTextWrap;
