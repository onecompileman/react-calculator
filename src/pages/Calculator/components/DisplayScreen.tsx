import React, { useEffect, useState } from 'react';
import './DisplayScreen.scss';

type DisplayScreenProps = {
    evalString: string;
}

function DisplayScreen(props: DisplayScreenProps) {
  
    const [ evalString, setEvalString ] = useState(props.evalString);
    
    useEffect(() => {
        setEvalString(props.evalString);
    }, [props.evalString]);

  
    return (
    <div className='display'>
        <span>{evalString}</span>
    </div>
  );
}

export default DisplayScreen;
