import CreateUserForm from 'components/Forms/CreateUserForm';
import Layout from 'components/Layout/Layout';
import { Route, Routes } from 'react-router';

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CreateUserForm />} />
        <Route path="login" element={<div>Login</div>} />
        <Route path="admin">
          <Route index element={<div>Pocetna admin</div>} />
          <Route path="users" element={<div>Kreiraj korisnika</div>} />
        </Route>
        <Route path="ambulance">
          <Route index element={<div>Pocetna hitna</div>} />
          <Route path="patient" element={<div>Pocetna hitna</div>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RouterApp;
