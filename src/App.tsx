import { BrowserRouter, HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import routes from './config/routes';
import Navbar from './components/Navbar';
import AuthChecker from './auth/AuthChecker';



function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route 
            key={index} 
            path={route.path} 
            element={
              route.protected ? (
                <AuthChecker>
                  <route.component />
                  </AuthChecker>
          ): (
            <route.component />
          )
          } 
          />
      ))}
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;