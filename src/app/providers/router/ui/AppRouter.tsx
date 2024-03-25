import { Route, Routes } from 'react-router-dom';
import { memo, Suspense, useMemo } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entity/User';

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => (
    Object.values(routeConfig).filter(route => {
      return !(route.authOnly && !isAuth);
    })
  ), [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <div className="page-wrapper">
        <Routes>
          {routes.map(({ element, path }) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ))}
        </Routes>
      </div>
    </Suspense>
  );
};

export default memo(AppRouter);
