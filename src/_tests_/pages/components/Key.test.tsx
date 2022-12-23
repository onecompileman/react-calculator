import { render, fireEvent, screen } from "@testing-library/react";
import { KeyEvent } from "../../../constants/enum";
import { KeyType } from "../../../constants/keys";
import Key from "../../../pages/Calculator/components/Key";

describe('Test Key', () => {
    
    const mockKeyData: KeyType = {
        value: '7',
        keyEvent: KeyEvent.SEVEN,
        className: '',
        wrapperClassName: 'key-wrapper'
    };
    let mockOnKeyClickHandlerIsCalled = false;
    
    const mockOnKeyClickHandler = () => {
        mockOnKeyClickHandlerIsCalled = true;
    }

    
    it('should render key component', () => {
        const component = render(<Key onClickEvent={mockOnKeyClickHandler} keyData={mockKeyData} className={mockKeyData.className}>{mockKeyData.value}</Key>)
        
        const key = screen.getByTestId('key-' + mockKeyData.keyEvent);
    
        expect(key).toBeInTheDocument();
    
        expect(key.textContent).toBe(mockKeyData.value);
    });

    it('should trigger click handler when clicked', () => {
        const component = render(<Key onClickEvent={mockOnKeyClickHandler} keyData={mockKeyData} className={mockKeyData.className}>{mockKeyData.value}</Key>)

        const key = screen.getByTestId('key-' + mockKeyData.keyEvent);
        
        fireEvent.click(key);
    
        expect(mockOnKeyClickHandlerIsCalled).toBeTruthy();
    })
})
