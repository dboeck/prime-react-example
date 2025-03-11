import * as React from 'react';
import './App.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router";
import {MyView} from "./views/my-view";
import {Home} from "./views/home";
import {MainTemplate} from "./components/layout/templates/main";


function App() {
  return (
      <PrimeReactProvider>
          <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainTemplate />}>
                        <Route index element={<Home />} />
                        <Route path="my-view" element={<MyView />} />
                    </Route>
                </Routes>
          </BrowserRouter>
      </PrimeReactProvider>
  )
}

export default App
