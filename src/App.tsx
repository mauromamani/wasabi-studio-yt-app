import { HomePage } from './modules/home/page';
import { Layaout } from './shared/layout';

const App = () => {
  return (
    <main className='dark dark-bg text-foreground min-h-screen '>
      <Layaout>
        <HomePage />
      </Layaout>
    </main>
  );
};

export default App;
