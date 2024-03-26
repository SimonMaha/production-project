import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Suspense, useEffect } from 'react';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserMounted, userActions } from 'entity/User';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const mounted = useSelector(getUserMounted);

  useEffect(() => {
    if (Math.random() > 0.9) {
      throw new Error();
    }

    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', { } , [ theme ])}>
      <Suspense fallback="loading">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {mounted && <AppRouter/>}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
