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

        const expectedOutput3 = '27';
        const seriesOfKeyEvents3 = [KeyEvent.SIX, KeyEvent.PLUS, KeyEvent.FIVE, KeyEvent.EQUALS, KeyEvent.MULTIPLY, KeyEvent.FIVE, KeyEvent.EQUALS, KeyEvent.MINUS, KeyEvent.ZERO, KeyEvent.EQUALS, KeyEvent.DIVIDE, KeyEvent.TWO, KeyEvent.EQUALS, KeyEvent.DEL, KeyEvent.DOT, KeyEvent.DEL, KeyEvent.DOT, KeyEvent.EQUALS];


        const component = render(<Calculator />);
        const displayScreenElement = screen.getByTestId('display-screen');

        executeSeriesOfKeyEvents(seriesOfKeyEvents1);
        expect(displayScreenElement.textContent).toBe(expectedOutput1);

        executeSeriesOfKeyEvents([resetKeyEvent]);

        executeSeriesOfKeyEvents(seriesOfKeyEvents2);
        expect(displayScreenElement.textContent).toBe(expectedOutput2);
        
        executeSeriesOfKeyEvents([resetKeyEvent]);

        executeSeriesOfKeyEvents(seriesOfKeyEvents3);
        expect(displayScreenElement.textContent).toBe(expectedOutput3);
    });


    it('should change Theme class on ThemeChanger event', () => {
        const component = render(<Calculator />);
        const themeChangerToggleElement = screen.getByTestId('theme-changer-toggle');
        const themeContainerElement = screen.getByTestId('theme-container');
        fireEvent.click(themeChangerToggleElement);
        
        expect(themeContainerElement.className).toBe('theme-2');
    })

});