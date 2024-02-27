import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Suspense, useEffect } from 'react';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch } from 'react-redux';
import { userActions } from 'entity/User';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (Math.random() > 0.9) {
      throw new Error();
    }

    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', { } , [  ])}>
      <Suspense fallback="loading">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
