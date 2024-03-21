import { RouterProvider } from 'react-router-dom'
import RouterConfig from './routes/_RouterConfig';

function App() {
  return (
    <>
        <RouterProvider router={RouterConfig} />
    </>
  );
}
export default App;