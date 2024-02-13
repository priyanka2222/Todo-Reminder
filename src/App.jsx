import { Suspense } from 'react'
import { useRoutes } from 'react-router'
import routers from './router';
import Loader from './Components/Loader';

const App = () => {
  const routes = useRoutes(routers);
  return <Suspense fallback={<Loader />}>{routes}</Suspense>
}

export default App