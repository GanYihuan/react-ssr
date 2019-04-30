# react-serverrender

## 流程

1. 服务器接受请求，这时 store 为空
2. 服务器端不会执行 componentDidMount，所以列表内容获取不到
3. 客户端代码运行，这时 store 为空
4. 客户端服务器端不会执行 componentDidMount，列表数据获取
5. store 中列表数据更新
6. 客户端渲染出 store 中 list 数据对应列表内容
