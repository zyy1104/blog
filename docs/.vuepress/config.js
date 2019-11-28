module.exports = {
  "title": "ares9y",
  "description": "Girls'journey is the sea of stars, not the love of the world",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/bitbug_favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    // huawei: true,
    // keyPage: {
    //   keys: ['123456'],
    //   color: '#42b983', // 登录页动画球的颜色
    //   lineColor: '#42b983' // 登录页动画线的颜色
    // },
    valineConfig: {
      appId: 'BdOGuCiJF2RaN8LqcbGrCqej-gzGzoHsz',// your appId
      appKey: '3Rng5yi0gNDA9x58IUDU5uhl', // your appKey
    },
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeLine/",
        "icon": "reco-date"
      },
      {
        "text": "关于我",
        "icon": "reco-message",
        "items": [
          // {
          //   "text": "NPM",
          //   "link": "https://www.npmjs.com/~reco_luan",
          //   "icon": "reco-npm"
          // },
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          },
          // {
          //   "text": "简书",
          //   "link": "https://www.jianshu.com/u/cd674a19515e",
          //   "icon": "reco-jianshu"
          // },
          // {
          //   "text": "CSDN",
          //   "link": "https://blog.csdn.net/recoluan",
          //   "icon": "reco-csdn"
          // },
          // {
          //   "text": "博客园",
          //   "link": "https://www.cnblogs.com/luanhewei/",
          //   "icon": "reco-bokeyuan"
          // },
          {
            "text": "WeChat",
            "link": "https://mp.weixin.qq.com/s/mXFqeUTegdvPliXknAAG_A",
            "icon": "reco-wechat"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "logo": "/head.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "ares9y",
    // "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}