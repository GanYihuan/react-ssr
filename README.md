# react-serverrender

## 流程

1. 服务器接受请求，这时 store 为空
2. 服务器端不会执行 componentDidMount，所以列表内容获取不到
3. 客户端代码运行，这时 store 为空
4. 客户端执行 componentDidMount，列表数据获取
5. store 中列表数据更新
6. 客户端渲染出 store 中 list 数据对应列表内容

## 登录切换

1. 刚进入页面处于非登录状态
2. 用户点击登录按钮

  1) 浏览器发请求给 NodeJS 服务器
  2) 转发 api 服务器进行登录
  3) api 服务器生成 cookie
  4) 浏览器存在 cookie 登录成功

3. 用户重新刷新页面时
