import { createContext, useState } from 'react';

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
  const [theme, setTheme] = useState<ThemeContextType>('dark');

  const toggleTheme = (theme: ThemeContextType) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
