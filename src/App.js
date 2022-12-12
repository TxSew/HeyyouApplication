import { useRoutes } from 'react-router-dom';

// Pages
import { Route } from './routes';
// console.log('====================================');
// console.log(router);
// console.log('====================================');

const App = () => {

  const routes = useRoutes(Route);

  return routes;
};

export default App;