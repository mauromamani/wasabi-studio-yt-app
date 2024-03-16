import { createContext, useEffect, useState } from 'react';
import { StylesConfig } from '../../../modules/home/interfaces';
import { useAppDispatch } from '../../../core/store/hooks';
import { actions } from '../../../modules/home/redux/slice';

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
    const theme = localStorage.getItem('chatbox-name-styles');
    const themeParsed = theme ? (JSON.parse(theme) as StylesConfig) : null;

    if (theme) {
      dispatch(actions.setStylesFromLocalStorage(themeParsed));
    }
  }, [dispatch]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
