module.exports = {
    title: 'jasmine-view', // 网站标题
    description: '一套好用的基于 Vue 的网页组件库', // 描述
    base: '/jasmine-view/', // 输出目录
    port: 1002, // dev模式的端口
    themeConfig: { //主题配置
        // 导航栏
        nav: [{
                text: '首页',
                link: '/',
            },
            {
                text: '组件',
                link: '/components/',
            }
        ],
        sidebar: {
            '/components/': [{
                title: '组件',
                collapsable: false,
                children: [
                    '',
                    'button',
                ],
            }]
        }
    }
}