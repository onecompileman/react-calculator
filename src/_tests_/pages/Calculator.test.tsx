import { render, fireEvent, screen } from "@testing-library/react";
import { KeyEvent } from "../../constants/enum";
import Calculator from "../../pages/Calculator/Calculator";


describe('Test Calculator', () => {

    const executeSeriesOfKeyEvents = (keyEvents: KeyEvent[]) => {
        keyEvents.forEach(keyEvent => {
            const keyElement = screen.getByTestId(`key-${keyEvent}`);
            fireEvent.click(keyElement);
        });
    }

    it('should create Calculator component', () => {
        const component = render(<Calculator />);
        
        const calculatorElement = screen.getByTestId('calculator');
        expect(calculatorElement).toBeInTheDocument();
    });

    it('should respond and display proper values when keys are selected in Calculator component', () => {
        const resetKeyEvent = KeyEvent.RESET;

        const expectedOutput1 = '25';
        const seriesOfKeyEvents1 = [KeyEvent.FIVE, KeyEvent.MULTIPLY, KeyEvent.FIVE, KeyEvent.EQUALS];

        const expectedOutput2 = '11';
        const seriesOfKeyEvents2 = [KeyEvent.SIX, KeyEvent.PLUS, KeyEvent.FIVE, KeyEvent.EQUALS];

        const component = render(<Calculator />);
        const displayScreenElement = screen.getByTestId('display-screen');

        executeSeriesOfKeyEvents(seriesOfKeyEvents1);
        expect(displayScreenElement.textContent).toBe(expectedOutput1);

        executeSeriesOfKeyEvents([resetKeyEvent]);


        executeSeriesOfKeyEvents(seriesOfKeyEvents2);
        expect(displayScreenElement.textContent).toBe(expectedOutput2);
    });



});