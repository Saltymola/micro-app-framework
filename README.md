# Build my own micro-app


 ## 双线程通信 web-worker

设计两个 button ，点击“ main ”按钮由主线程执行一个较复杂的计算任务，点击“ worker ”按钮 worker 线程执行此复杂计算任务，借此可以看出web-worker的优越性。并且，此复杂计算任务可以写为一个单独的函数写入 compute.js 进行模块化。

<img src=".\assets\page.png" alt="page" style="zoom:67%;" />

从结果上来看，点击“ main ”按钮页面会出现明显的卡顿，直至计算完毕；而点击“ worker ”按钮，由 worker 线程执行计算任务，页面并不会卡顿，在计算期间仍可点击页面按钮，主页面也可同时进行计算。

<img src=".\assets\log.png" alt="log" style="zoom:80%;" />

## 渲染框架与编译

以 jsx 作为 DSL ，实现一个简单的渲染框架，支持一些简单的语句和组件，使用babel进行编译。

```
npm run dev
```

编译后打开 index.html（插入了编译结果的 .js 文件）。