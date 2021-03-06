import React from 'react';

const Option = (props) => (
        <div>
            {props.optionText}
            <button onClick={(e) => props.remove(props.optionText)}>remove</button>
        </div>
    );

export default Option;
