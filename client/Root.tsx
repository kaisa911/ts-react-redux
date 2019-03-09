import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './route/App';
import store from './store/index';

const root = document.getElementById('bd');
const render = (Component: any) => {
  return ReactDOM.render(
    (
      <Provider store={store}>
        <Component />
      </Provider>
    ), 
    root);
};

render(App);

/**
 * 好几个坑，第一个是要在tslint里面加上 "moduleResolution": "node",
 * 第二个：hot不能显示，需要安装@types/webpack-env
 * 第三个，module.hot.accept 函数接收两个参数，第一个是string类型的url，另一个是一个cb
 * 第四个，export default的module，require需要用.default 来引入
 */
if (module.hot) {
  module.hot.accept('./route/App', () => {
    const NextApp = require('./route/App').default;
    render(NextApp);
  });
}
