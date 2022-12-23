import React from 'react';
import { KeyType, KeysData } from '../../../constants/keys';
import Key from './Key';
import './KeysContainer.scss';

type KeysContainerProps = {
    onKeyClick: Function;
}

function KeysContainer(props: KeysContainerProps) { 
  
  const keysData = KeysData;

  const keysRender = (key: KeyType) => {
    const onClickKeyHandler = () => {
        props.onKeyClick(key.keyEvent);
    }

    return (
        <div key={key.value} className={key.wrapperClassName}>
            <Key onClickEvent={onClickKeyHandler} className={key.className}>{key.value}</Key>
        </div>
    )
  }

  return (
    <div className='keys-container'>
        {keysData.map(keysRender)}
    </div>
  );
}

export default KeysContainer;
