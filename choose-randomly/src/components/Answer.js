import React from 'react';

const Answer = () => {
    return (
        <div style={{margin: '2em', padding: '2em', backgroundColor: 'antiquewhite', borderRadius: '14px'}}>
            <h1>Answering qoustions</h1>
            <h3>How React Works</h3>
            <p>React create our html code that we write before as JSX- JavScript extensive markup language. And it give us react dom that interact with browser to make userInterface. We write jsx code, react render jsx code to browser dom.</p>
            <h3>Props vs State</h3>
            <li>Props do carry data from components to another components and it cannot be carry data parant component. it only carry data child to child.</li>
            <li>State stored data in local component it cannot read or manupulate other components data. It only manupulate this components variable data. It use for store data in component</li>
        </div>
    );
};

export default Answer;