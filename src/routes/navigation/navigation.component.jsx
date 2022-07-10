import { Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div>
        <nav>Navigation</nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
