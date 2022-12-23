import React from 'react';
import './Key.scss';

type KeyProps = {
    className: string;
    children: any;
    onClickEvent: Function;
}

function Key(props: KeyProps) { 

  const onClickHandler = () => {
    props.onClickEvent();
  }

  return (
   <div onClick={onClickHandler} className={`key ${props.className}`}>
    {props.children}
   </div>
  );
}

export default Key;
