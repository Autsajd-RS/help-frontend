import { Provider } from 'react-redux';
import { store } from './app-redux/store';
import { Button, Checkbox, ConfigProvider, Form, Input } from 'antd';
import './main.less';
import RouterApp from 'router/RouterApp';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider>
        <BrowserRouter>
          <RouterApp />
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
