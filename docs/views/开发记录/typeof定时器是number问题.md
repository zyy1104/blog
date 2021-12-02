---
title: typeof定时器是number问题
date: 2021-12-02
sidebar: auto
categories:
- 开发记录
author: 白熊
---

每一个timer在创建后都会返回一个唯一的Id，这个id是递增的。可以由clearInterval(id)或clearTimeout(id)来实现对对应定时器的清除。

> 清除页面所有定时器（包括未知）

我们知道定时器对应的数是从1开始依次递增的，那么我们只要再创建一个定时器并且用一个变量end储存起来，这个数end就是n+1，这样我们就求出n了，然后就可以从1循环到n了，哦，记得还有把刚刚创建的第n+1个定时器给清除掉，所以循环是从1到end。

```
let end = setInterval(() => {}, 1e4)
for(let i = 1; i <= end; i++){
    clearInterval(i)
}

```

