import { useContext } from 'react';
import { HomePage } from './modules/home/page';
import { Layaout } from './shared/layout';
import { ThemeContext } from './shared/context/themes/index.theme';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`${
        theme === 'dark' ? 'dark dark-bg ' : 'light-bg '
      }text-foreground min-h-screen`}
    >
      <Layaout>
        <HomePage />
      </Layaout>
    </main>
  );
};

export default App;
