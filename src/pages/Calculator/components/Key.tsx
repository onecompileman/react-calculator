import React from 'react';
import { KeyType } from '../../../constants/keys';
import './Key.scss';

type KeyProps = {
    className: string;
    children: any;
    onClickEvent: Function;
    keyData: KeyType;
}

function Keys(props: KeyProps) { 

  const onClickHandler = () => {
    props.onClickEvent();
  }

  return (
   <div onClick={onClickHandler} data-testid={`key-${props.keyData.keyEvent}`} className={`key ${props.className}`}>
    {props.children}
   </div>
  );
}

export default Keys;
