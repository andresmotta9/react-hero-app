import { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';

export const AppRouter: FunctionComponent = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />

        <Route path='/*' element={<HeroesRoutes />} />
      </Routes>
    </>
  )
}
