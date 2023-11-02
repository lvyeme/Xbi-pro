import ReactECharts from 'echarts-for-react';
import React from 'react';

const Page: React.FC = () => {
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return <ReactECharts option={options} />;
};

export default Page;
// import Footer from '@/components/Footer';
// import {
//   LockOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
// import {LoginForm, ProFormCheckbox, ProFormText,} from '@ant-design/pro-components';
// import {useEmotionCss} from '@ant-design/use-emotion-css';
// import {Helmet, history, useModel} from '@umijs/max';
// import {Alert, message, Tabs} from 'antd';
// import React, {useState} from 'react';
// import {flushSync} from 'react-dom';
// import Settings from '../../../../config/defaultSettings';
// import {getLoginUserUsingGET, userLoginUsingPOST} from "@/services/ xbi/userController";
// import {Link} from "umi";
//
//
// const Login: React.FC = () => {
//   const [type, setType] = useState<string>('account');
//   const {initialState, setInitialState} = useModel('@@initialState');
//   const containerClassName = useEmotionCss(() => {
//     return {
//       display: 'flex',
//       flexDirection: 'column',
//       height: '100vh',
//       overflow: 'auto',
//       backgroundImage:
//         "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
//       backgroundSize: '100% 100%',
//     };
//   });
//
//   const fetchUserInfo = async () => {
//     const userInfo = await getLoginUserUsingGET();
//     if (userInfo) {
//       flushSync(() => {
//         setInitialState((s) => ({
//           ...s,
//           currentUser: userInfo,
//         }));
//       });
//     }
//   };
//   const handleSubmit = async (values: API.UserLoginRequest) => {
//     try {
//       // 登录
//       const res = await userLoginUsingPOST(values);
//       if (res.code === 0) {
//         const defaultLoginSuccessMessage = '登录成功！';
//         message.success(defaultLoginSuccessMessage);
//         await fetchUserInfo();
//         const urlParams = new URL(window.location.href).searchParams;
//         history.push(urlParams.get('redirect') || '/');
//         return;
//       } else {
//         message.error(res.message);
//       }
//     } catch (error) {
//       const defaultLoginFailureMessage = '登录失败，请重试！';
//       console.log(error);
//       message.error(defaultLoginFailureMessage);
//     }
//   };
//   return (
//     <div className={containerClassName}>
//       <Helmet>
//         <title>
//           {'登录'}- {Settings.title}
//         </title>
//       </Helmet>
//       <div
//         style={{
//           flex: '1',
//           padding: '32px 0',
//         }}
//       >
//         <LoginForm
//           contentStyle={{
//             minWidth: 280,
//             maxWidth: '75vw',
//           }}
//           logo={<img alt="logo" src="/logo.svg"/>}
//           title="X智能 BI"
//           subTitle={'X智能 BI 是帅气逼人先生最具影响力的 Web 设计规范'}
//
//           // initialValues={{//自动登录
//           //   autoLogin: true,
//           // }}
//           onFinish={async (values) => {
//             await handleSubmit(values as API.UserLoginRequest);
//           }}
//         >
//           <Tabs
//             activeKey={type}
//             onChange={setType}
//             centered
//             items={[
//               {
//                 key: 'account',
//                 label: '账户密码登录',
//               },
//             ]}
//           />
//
//           {type === 'account' && (
//             <>
//               <ProFormText
//                 name="userAccount"
//                 fieldProps={{
//                   size: 'large',
//                   prefix: <UserOutlined/>,
//                 }}
//                 placeholder={'请输入用户名'}
//                 rules={[
//                   {
//                     required: true,
//                     message: '用户名是必填项！',
//                   },
//                 ]}
//               />
//               <ProFormText.Password
//                 name="userPassword"
//                 fieldProps={{
//                   size: 'large',
//                   prefix: <LockOutlined/>,
//                 }}
//                 placeholder={'请输入密码'}
//                 rules={[
//                   {
//                     required: true,
//                     message: '密码是必填项！',
//                   },
//                 ]}
//               />
//             </>
//           )}
//
//           <div
//             style={{
//               marginBottom: 24,
//             }}
//           >
//             <Link to="/user/register">注册</Link>
//           </div>
//
//
//         </LoginForm>
//       </div>
//       <Footer/>
//     </div>
//   );
// };
// export default Login;
