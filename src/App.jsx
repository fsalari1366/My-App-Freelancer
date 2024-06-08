import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import toast, { Toaster } from 'react-hot-toast'
import CompleteProfile from './pages/CompleteProfile';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AppLayout from './ui/AppLayout';
import OwnerDashboard from './pages/OwnerDashboard';



const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      
    <Routes>
      <Route path='/auth' element={<Auth />} />
      <Route path='/complete-profile' element={<CompleteProfile />} />
      <Route path='/owner' element={<AppLayout />}>
      <Route path='dashboard' element={<OwnerDashboard />} />
      </Route>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    
    </QueryClientProvider>
  )
}

export default App