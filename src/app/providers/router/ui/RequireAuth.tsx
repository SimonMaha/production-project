import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entity/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({ children }:{children: JSX.Element}) {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    console.log('Is not auth');
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
}
