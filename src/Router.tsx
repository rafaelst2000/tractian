import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home'
import { Units } from './pages/Units'
import { Companies } from './pages/Companies'
import { Users } from './pages/Users'
import { Workorders } from './pages/Workorders'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/units" element={<Units />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workorders" element={<Workorders />} />
      </Route>
    </Routes>
  )
}
