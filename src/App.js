import React from 'react';
import './App.scss';
import Routers from './pages/Routers';
import { AuthProvider } from './hooks/AuthProvider';
import { formatTimeStrings } from './utils/formatTimeString';





function App() {


  return (
    <div>
      <p>Тут есть какое то время: {formatTimeStrings(['28.03.2022'])}</p>
      <AuthProvider>
        <Routers />
      </AuthProvider>
    </div>

  );
}


export default App;