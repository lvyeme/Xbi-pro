export default [
  { path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/', redirect: '/add_chart' },
  { path: '/add_chart', name: '智能分析', icon: 'areaChart', component: './AddChart' },
  { path: '/add_chart_async', name: '智能分析异步', icon: 'barChart', component: './AddChartAsync' },
  { path: '/my_chart', name: '我的图表', icon: 'pieChart', component: './MyChart' },
  {  path: '/test', name: '智能分析样图', component: '@/pages/Test/index2' , icon: 'cloudOutlined'},
  // { path: '/test_page' },
  // { path: '/test_page', name: '测试智能分析', icon: 'smile', component: './Test' },

  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', name: 'test', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: 'test',component: './Admin' },
    ],
  },
  { icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
