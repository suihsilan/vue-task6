import{_ as d,R as p,r as u,o as _,c as m,a as e,b as s,w as r,d as i,j as f,F as k}from"./index-78744e8a.js";const{VITE_APP_URL:$}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"sui-vue",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},V={components:{RouterView:p},methods:{logout(){document.cookie=`hexToken=;expires=${new Date};`,this.$router.push("/login")},checkLogin(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a;const o=`${$}api/user/check`;this.$http.post(o).then(t=>{t.data.success||this.$router.push("/login")}).catch(t=>{alert(t.response.data.message),this.$router.push("/login")})}},mounted(){this.checkLogin()}},g=i("hr",null,null,-1);function x(a,o,t,w,P,c){const n=u("router-link"),h=u("RouterView");return _(),m(k,null,[e(" 這是帥氣的後台頁面 "),s(n,{to:"/admin/products"},{default:r(()=>[e("後台產品列表")]),_:1}),e(" | "),s(n,{to:"/admin/orders"},{default:r(()=>[e("後台訂單列表")]),_:1}),e(" | "),s(n,{to:"/"},{default:r(()=>[e("回到前台首頁")]),_:1}),e(" | "),i("a",{href:"#",onClick:o[0]||(o[0]=f((...l)=>c.logout&&c.logout(...l),["prevent"]))},"登出"),g,s(h)],64)}const E=d(V,[["render",x]]);export{E as default};
