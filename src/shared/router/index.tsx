import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import { TestPage } from '../../modules/test/page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/testing',
    element: <TestPage />,
  },
  {
    path: '*',
    element: (
      <div>
        <h1>404</h1>
        <p>Not found</p>
      </div>
    ),
  },
]);
