---
title: 配置vscode右键打开
date: 2019-12-28
sidebar: auto
categories:
- 开发记录
author: 白熊
---

## 1、.reg文件形式

[点我，你自己看吧](https://blog.csdn.net/GreekMrzzJ/article/details/82194913 )

1. 新建一个名为 1.reg 的文件，找一个记事本或者sublime打开，名称无所谓，但是一定需要带上 .reg 后缀。
2. 查看你自己的电脑的vscode安装目录，最简单的方法就是右键桌面的vscode，查看属性就知道了。以我的安装地址为例：C:\\Program Files\\Microsoft VS Code\\Code.exe ， 单反斜杠最好都换成双反斜杠。
3. 复制一下内容到 1.reg 文件中。

```
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\*\shell\VSCode]
@="Open with Code"
"Icon"="C:\\Program Files\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\*\shell\VSCode\command]
@="\"C:\\Program Files\\Microsoft VS Code\\Code.exe\" \"%1\""

Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\shell\VSCode]
@="Open with Code"
"Icon"="C:\\Program Files\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\Directory\shell\VSCode\command]
@="\"C:\\Program Files\\Microsoft VS Code\\Code.exe\" \"%V\""

Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode]
@="Open with Code"
"Icon"="C:\\Program Files\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode\command]
@="\"C:\\Program Files\\Microsoft VS Code\\Code.exe\" \"%V\""
```

## 2、修改注册表形式

[点我，你自己看吧](https://blog.csdn.net/zzsan/article/details/79305279)

