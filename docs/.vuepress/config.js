/**
 * @author wuyiccc
 * @date 2021/8/28 17:21
 */

module.exports = {
  title: 'Spring Document Book',
  description: 'Spring官方文档中译版本及要点诠释',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      {text: 'Github', link: 'https://github.com/wuyiccc'},
      {text: 'LeetCode', link: 'https://leetcode-cn.com/u/wuyiccc/'},
      {text: '作者信息', link: '/base/author-info.md'}
    ],
    sidebar: {
      '/springframework/overview.html': [
        {
          title: '测试菜单1',   // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ['test1.md', '子菜单1'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
            ['test3.md', '子菜单2']
          ]
        },
        {
          title: '测试菜单2',
          collapsable: false,
          children: [
            ['test2.md', '子菜单1']
          ]
        }
      ],
    }
  }

};
