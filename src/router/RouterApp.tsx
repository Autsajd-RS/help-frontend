import Layout from 'components/Layout/Layout';
import { Route, Routes } from 'react-router';

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Test</div>} />
      </Route>
    </Routes>
  );
};

export default RouterApp;
