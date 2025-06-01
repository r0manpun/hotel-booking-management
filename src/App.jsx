import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Booking from './pages/Booking';
import Cabins from './pages/Cabins';
import Checkin from './pages/Checkin';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Account from './pages/Account';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import GlobalStyles from './styles/GlobalStyles';
import ProtectedRoutes from './components/ProtectedRoute';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoutes>
                  <AppLayout />
                </ProtectedRoutes>
              }>
              <Route
                index
                element={
                  <Navigate
                    to='dashboard'
                    replace
                  />
                }
              />
              <Route
                path='dashboard'
                element={<Dashboard />}
              />
              <Route
                path='bookings'
                element={<Bookings />}
              />
              <Route
                path='bookings/:bookingId'
                element={<Booking />}
              />
              <Route
                path='cabins'
                element={<Cabins />}
              />
              <Route
                path='checkin/:bookingId'
                element={<Checkin />}
              />
              <Route
                path='users'
                element={<Users />}
              />
              <Route
                path='settings'
                element={<Settings />}
              />
              <Route
                path='account'
                element={<Account />}
              />
            </Route>
            <Route
              path='login'
              element={<Login />}
            />
            <Route
              path='*'
              element={<PageNotFound />}
            />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
