import { createContext, useEffect, useState } from 'react';
import { StylesConfig } from '../../../modules/home/interfaces';
import { useAppDispatch } from '../../../core/store/hooks';
import { actions } from '../../../modules/home/redux/slice';
import { NAME_CHATBOX_STYLES_LS, NAME_CHATBOX_THEME } from '../../constants';

type ThemeContextType = 'light' | 'dark';

interface ThemeContextProps {
  theme: ThemeContextType;
  toggleTheme: (theme: ThemeContextType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'dark',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const [theme, setTheme] = useState<ThemeContextType>('dark');

  const toggleTheme = (theme: ThemeContextType) => {
    setTheme(theme);
  };

  // load styles from local storage
  useEffect(() => {
    const theme = localStorage.getItem(NAME_CHATBOX_THEME);

    if (theme) {
      setTheme(theme as ThemeContextType);
    }

    const styles = localStorage.getItem(NAME_CHATBOX_STYLES_LS);
    const stylesParsed = styles ? (JSON.parse(styles) as StylesConfig) : null;

    if (styles) {
      dispatch(actions.setStylesFromLocalStorage(stylesParsed));
    }
  }, [dispatch]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
