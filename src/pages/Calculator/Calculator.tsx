/* eslint no-eval: 0 */

import React, { useState } from 'react';
import ThemeChanger from './components/ThemeChanger';
import './Calculator.scss';
import DisplayScreen from './components/DisplayScreen';
import KeysContainer from './components/KeysContainer';
import { KeyEvent } from '../../constants/enum';

function Calculator() {
   
  const [theme, setTheme] = useState(1);
  const [evalString, setEvalString] = useState('');
  
  const onKeyClickHandler = (key: KeyEvent) => {
    console.log(evalString);

    let evalStringToChange = evalString;

    if (key >= KeyEvent.ZERO && key <= KeyEvent.NINE) {
        evalStringToChange += key;
    } else {
        switch (key) {
            case KeyEvent.DEL:
                evalStringToChange = evalStringToChange.slice(0,-1)
                break;
            case KeyEvent.DOT:
                const lastNumberStr = getLastNumberString(evalStringToChange);
                if (!lastNumberStr?.includes('.')) {
                    evalStringToChange+='.';
                }
                break;
            case KeyEvent.PLUS:
                if (isLastCharacterNotOperation(evalStringToChange)) {
                    evalStringToChange+='+';
                }
                break;
            case KeyEvent.MINUS:
                if (isLastCharacterNotOperation(evalStringToChange)) {
                    evalStringToChange+='-';
                }
                break;
            case KeyEvent.DIVIDE:
                if (isLastCharacterNotOperation(evalStringToChange)) {
                    evalStringToChange+='/';
                }
                break;
            case KeyEvent.MULTIPLY:
                if (isLastCharacterNotOperation(evalStringToChange)) {
                    evalStringToChange+='*';
                }
                break;
            case KeyEvent.RESET:
                evalStringToChange='';
                break;
            case KeyEvent.EQUALS:
                evalStringToChange = eval(evalStringToChange);
                break;
        }
    }
    setEvalString(evalStringToChange + '');
  }

  const getLastNumberString = (numberStr: string) => {
    const numbersStrArr = numberStr.split(/([-+/*])/g);
    return numbersStrArr.pop();
  }

  const isLastCharacterNotOperation = (numberStr: string) => {
    const lastCharacter = numberStr.split('').pop();
    const operations = ['+', '-', '/', '*'];
    return operations.every(operation => operation !== lastCharacter);
  }

  return (
    <div className={`theme-${theme}`} data-testid="theme-container">
        <div data-testid="calculator" className="calculator">
                <div className="calculator__container">
                    <div className="calculator__header">
                        <div className="calculator__title">
                        calc
                        </div>
                        <ThemeChanger onThemeChange={setTheme}></ThemeChanger>
                    </div>
                    <DisplayScreen evalString={evalString}></DisplayScreen>
                    <KeysContainer onKeyClick={onKeyClickHandler}></KeysContainer>
                </div>
            </div>
    </div>
   
  );
}

export default Calculator;
