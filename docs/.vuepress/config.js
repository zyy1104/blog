module.exports = {
  "title": "白熊有信仰",
  "description": "脑子是个好东西",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/gruel.ico"
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
    "valineConfig": {
      "appId": 'BdOGuCiJF2RaN8LqcbGrCqej-gzGzoHsz',// your appId
      "appKey": '3Rng5yi0gNDA9x58IUDU5uhl', // your appKey
    },
    "themePicker": {
		color1: '#E16B8C', //梅红
		color2: '#BF6766', //砖红
		color3: '#E2943B', //黄
		color4: '#A28C37', //绿
		color5: '#00AA90', //青
		color6: '#58B2DC', //蓝
		color7: '#986DB2' //紫
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
          //   "text": "简历",
          //   "link": "/personalInfo/",
          //   "icon": "reco-blog"
          // },
          {
            "text": "GitHub",
            "link": "https://github.com/zyy1104",
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
          // {
          //   "text": "QQ",
          //   "link": "https://s2.ax1x.com/2019/11/28/QifbrV.jpg",
          //   "icon": "reco-qq"
          // },
          // {
          //   "text": "WeChat",
          //   "link": "https://s2.ax1x.com/2019/11/28/QiWbAe.jpg",
          //   "icon": "reco-wechat"
          // }
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
    "logo": "/xz.jpg",  //左侧logo
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "Yuri",
    // "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  },
  "base": "/blog/",
  "dest": "./docs/.vuepress/dist"
}