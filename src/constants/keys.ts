import { KeyEvent } from './enum';

export type KeyType = {
    value: string;
    keyEvent: KeyEvent;
    wrapperClassName: string;
    className: string;
}

export const KeysData: KeyType[] = [
    {
        value: '7',
        keyEvent: KeyEvent.SEVEN,
        wrapperClassName: 'key-wrapper',
        className: ''
    },
    {
        value: '8',
        keyEvent: KeyEvent.EIGHT,
        wrapperClassName: 'key-wrapper',
        className: ''
    },
    {
        value: '9',
        keyEvent: KeyEvent.NINE,
        wrapperClassName: 'key-wrapper',
        className: ''
    },
    {
        value: 'DEL',
        keyEvent: KeyEvent.DEL,
        wrapperClassName: 'key-wrapper',
        className: 'key--action-1'
    },
    {
        value: '4',
        keyEvent: KeyEvent.FOUR,
        wrapperClassName: 'key-wrapper',
        className: ''
    },
    {
        value: '5',
        keyEvent: KeyEvent.FIVE,
        wrapperClassName: 'key-wrapper',
        className: ''
    },
    {
        value: '6',
        keyEvent: KeyEvent.SIX,
        wrapperClassName: 'key-wrapper',
        className: ''
    },
    {
        value: '+',
        keyEvent: KeyEvent.PLUS,
        wrapperClassName: 'key-wrapper',
        className: ''
    },
    {
        value: '1',
        keyEvent: KeyEvent.ONE,
        wrapperClassName: 'key-wrapper',
        className: ''
    },
    {
        value: '2',
        keyEvent: KeyEvent.TWO,
        wrapperClassName: 'key-wrapper',
        className: ''
    },
    {
        value: '3',
        keyEvent: KeyEvent.THREE,
        wrapperClassName: 'key-wrapper',
        className: ''
    },
    {
        value: '-',
        keyEvent: KeyEvent.MINUS,
        wrapperClassName: 'key-wrapper',
        className: ''
    },
    {
        value: '.',
        keyEvent: KeyEvent.DOT,
        wrapperClassName: 'key-wrapper',
        className: ''
    },
    {
        value: '0',
        keyEvent: KeyEvent.ZERO,
        wrapperClassName: 'key-wrapper',
        className: ''
    },
    {
        value: '/',
        keyEvent: KeyEvent.DIVIDE,
        wrapperClassName: 'key-wrapper',
        className: ''
    },
    {
        value: 'X',
        keyEvent: KeyEvent.MULTIPLY,
        wrapperClassName: 'key-wrapper',
        className: ''
    },

    {
        value: 'RESET',
        keyEvent: KeyEvent.RESET,
        wrapperClassName: 'special-key-wrapper',
        className: 'key--action-1'
    },
    {
        value: '=',
        keyEvent: KeyEvent.EQUALS,
        wrapperClassName: 'special-key-wrapper',
        className: 'key--action-2'
    },
] 