import { render, fireEvent, screen } from "@testing-library/react";
import ThemeChanger from "../../../pages/Calculator/components/ThemeChanger";


describe('Test ThemeChanger', () => {
    let latestTheme: number;
    const mockThemeChangeHandler = (theme: number) => {
        latestTheme = theme;
    }
    
    it('should create ThemeChanger component', () => {
        const component = render(<ThemeChanger onThemeChange={mockThemeChangeHandler}></ThemeChanger>)
        
        const themeChangerElement = screen.getByTestId('theme-changer');
        expect(themeChangerElement).toBeInTheDocument();
    });

    it('should update and return rigth theme on click of toggle on ThemeChanger', () => {
        const component = render(<ThemeChanger onThemeChange={mockThemeChangeHandler}></ThemeChanger>)
        let theme = 1, maxThemeNumber =3;
        const numberOfClickAttempts = 5;
        const themeChangerToggleElement = screen.getByTestId('theme-changer-toggle');
        
        for (let i = 0; i < numberOfClickAttempts; i++) {
            fireEvent.click(themeChangerToggleElement);
            theme = theme >= maxThemeNumber ? 1 : theme + 1;

            expect(latestTheme).toBe(theme);

        }
    });
});