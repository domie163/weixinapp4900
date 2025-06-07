import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import caozuorizhi from '@/views/modules/caozuorizhi/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import meishuguan from '@/views/modules/meishuguan/list'
    import meishuguanCollection from '@/views/modules/meishuguanCollection/list'
    import meishuguanLiuyan from '@/views/modules/meishuguanLiuyan/list'
    import meishuguanOrder from '@/views/modules/meishuguanOrder/list'
    import news from '@/views/modules/news/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zhanpin from '@/views/modules/zhanpin/list'
    import zhanpinCollection from '@/views/modules/zhanpinCollection/list'
    import zhanpinLiuyan from '@/views/modules/zhanpinLiuyan/list'
    import config from '@/views/modules/config/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryMeishuguan from '@/views/modules/dictionaryMeishuguan/list'
    import dictionaryMeishuguanCollection from '@/views/modules/dictionaryMeishuguanCollection/list'
    import dictionaryMeishuguanOrder from '@/views/modules/dictionaryMeishuguanOrder/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryZhanpin from '@/views/modules/dictionaryZhanpin/list'
    import dictionaryZhanpinCollection from '@/views/modules/dictionaryZhanpinCollection/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryMeishuguan',
        name: '美术馆类型',
        component: dictionaryMeishuguan
    }
    ,{
        path: '/dictionaryMeishuguanCollection',
        name: '收藏表类型',
        component: dictionaryMeishuguanCollection
    }
    ,{
        path: '/dictionaryMeishuguanOrder',
        name: '订单类型',
        component: dictionaryMeishuguanOrder
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryZhanpin',
        name: '展品类型',
        component: dictionaryZhanpin
    }
    ,{
        path: '/dictionaryZhanpinCollection',
        name: '收藏表类型',
        component: dictionaryZhanpinCollection
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/caozuorizhi',
        name: '操作日志',
        component: caozuorizhi
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/meishuguan',
        name: '美术馆',
        component: meishuguan
      }
    ,{
        path: '/meishuguanCollection',
        name: '美术馆收藏',
        component: meishuguanCollection
      }
    ,{
        path: '/meishuguanLiuyan',
        name: '美术馆留言',
        component: meishuguanLiuyan
      }
    ,{
        path: '/meishuguanOrder',
        name: '参观预约',
        component: meishuguanOrder
      }
    ,{
        path: '/news',
        name: '公告通知',
        component: news
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/zhanpin',
        name: '展品信息',
        component: zhanpin
      }
    ,{
        path: '/zhanpinCollection',
        name: '展品收藏',
        component: zhanpinCollection
      }
    ,{
        path: '/zhanpinLiuyan',
        name: '展品留言',
        component: zhanpinLiuyan
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
