import { render, fireEvent, screen } from "@testing-library/react";
import { KeyEvent } from "../../../constants/enum";
import { KeysData, KeyType } from "../../../constants/keys";
import KeysContainer from "../../../pages/Calculator/components/KeysContainer";

describe('Test KeysContainer', () => {
    let latestClickedKeyEvent: KeyEvent;
        
    const mockClickKeyHandler = (keyEvent: KeyEvent) => {
        latestClickedKeyEvent = keyEvent;
    }
    
    it('should create KeysContainer component', () => {
        const component = render(<KeysContainer onKeyClick={mockClickKeyHandler}></KeysContainer>)
        const keysContainerElement = screen.getByTestId('keys-container');
        
        expect(keysContainerElement).toBeInTheDocument();
    })

    it('should render same number of keys defined in KeyData', () => {
        const component = render(<KeysContainer onKeyClick={mockClickKeyHandler}></KeysContainer>)
        const keyData = KeysData;
        
        const keysElements = screen.getAllByTestId('key-wrapper');
        
        expect(keysElements.length).toBe(keyData.length);
    });

    it('should get the right keyEvent value for every keys Clicked', () => {
        const component = render(<KeysContainer onKeyClick={mockClickKeyHandler}></KeysContainer>)
        const keyData = KeysData;

        const testKey1 = keyData[7];
        const testKey2 = keyData[5];

        const testId1 = `key-${testKey1.keyEvent}`;
        const testId2 = `key-${testKey2.keyEvent}`;
        
        const keyElement1 = screen.getByTestId(testId1);
        const keyElement2 = screen.getByTestId(testId2);

        fireEvent.click(keyElement1);
        expect(latestClickedKeyEvent).toBe(testKey1.keyEvent);

        fireEvent.click(keyElement2);
        expect(latestClickedKeyEvent).toBe(testKey2.keyEvent);
       
    });

});