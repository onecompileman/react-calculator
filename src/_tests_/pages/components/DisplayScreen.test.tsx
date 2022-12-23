import { render, fireEvent, screen } from "@testing-library/react";

import DisplayScreen from "../../../pages/Calculator/components/DisplayScreen";

describe('Test DisplayScreen', () => {
    it('should create DisplayScreen component', () => {
        const component = render(<DisplayScreen evalString="123"></DisplayScreen>)
        
        const displayElement = screen.getByTestId('display');
        expect(displayElement).toBeInTheDocument();
    });

    it('should display updated evalString prop on DisplayScreen component', () => {

        const propValue1 = '1234';
        const propValue2 = '12+2';

        const component = render(<DisplayScreen evalString={propValue1}></DisplayScreen>);
        const displayScreenElement = screen.getByTestId('display-screen');

        expect(displayScreenElement.textContent).toBe(propValue1);


        component.rerender(<DisplayScreen evalString={propValue2}></DisplayScreen>)
        expect(displayScreenElement.textContent).toBe(propValue2);
    });
});
