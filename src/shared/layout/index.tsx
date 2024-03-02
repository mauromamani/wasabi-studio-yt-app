import { Navbar } from '../components/navbar';
import { Sidebar } from '../components/sidebar';

interface LayaoutProps {
  children: React.ReactNode;
}

export const Layaout = ({ children }: LayaoutProps) => {
  return (
    <div className='flex w-full min-h-screen'>
      <Sidebar />

      <div className='flex-1'>
        <Navbar />
        {children}
      </div>
    </div>
  );
};
