---
title: 直接跳转后台返回的url
date: 2021-12-06
sidebar: auto
categories:
- 开发记录
author: 白熊
---



```
一、返回的是url
let link = document.createElement('a');     
link.style.display = 'none';
link.href = 'https://baidu.com'
document.body.appendChild(link);
link.click();
document.body.removeChild(link);

二、返回的是流
const blob = data
const url = window.URL // || window.webkitURL || window.moxURL
// 创建下载链接
const downloadHref = url.createObjectURL(blob)

let fileName = ''
let link = document.createElement('a');
link.download = fileName;
link.style.display = 'none';
link.href = downloadHref
document.body.appendChild(link);
link.click();
URL.revokeObjectURL(link.href); // 释放URL 对象
document.body.removeChild(link);
```