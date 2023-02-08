import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, unstable_HistoryRouter as Router } from 'react-router-dom'

import { customHistory } from './utils';
import Home from './pages/Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router history={customHistory}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
