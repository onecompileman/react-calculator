import React, { useState } from 'react';
import './ThemeChanger.scss';

type ThemeChangerProps = {
    onThemeChange: Function;
}

function ThemeChanger(props: ThemeChangerProps) {
  const [theme, setTheme] = useState(1);

  const changeTheme = () => {
    let t = theme;
    t = t === 3 ? 1 : t + 1;
    setTheme(t);
    props.onThemeChange(t);
  }

  return (
    <div className="theme-changer" data-testid="theme-changer">
        <span className='theme-changer__name'>
            THEME
        </span>
        <div className='theme-changer__body'>
            <div className='theme-changer__themes'>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
            <div data-testid="theme-changer-toggle" onClick={changeTheme} className="theme-changer__toggle">
                <div className="theme-changer__toggle-handle"></div>
            </div>
        </div>
    </div>
  );
}

export default ThemeChanger;
