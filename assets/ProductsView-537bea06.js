import{_ as h,e as P,r as m,o as s,c as n,a as c,d as t,F as l,f as b,t as $,b as f,w as g}from"./index-78744e8a.js";const{VITE_APP_URL:d,VITE_APP_PATH:i}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"sui-vue",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},T={data(){return{products:[]}},components:{RouterLink:P},methods:{getProducts(){this.$http.get(`${d}/v2/api/${i}/products/all`).then(e=>{console.log(e),this.products=e.data.products})},addToCart(e){const a={product_id:e,qty:1};this.$http.post(`${d}/v2/api/${i}/cart`,{data:a}).then(r=>{console.log(r)})}},mounted(){this.getProducts()}},V={class:"table"},k=["src"],E=["onClick"];function y(e,a,r,A,u,_){const p=m("RouterLink");return s(),n(l,null,[c(" 這是產品列表頁面 "),t("table",V,[t("tbody",null,[(s(!0),n(l,null,b(u.products,o=>(s(),n("tr",{key:o.id},[t("td",null,$(o.title),1),t("td",null,[t("img",{src:o.imageUrl,width:"200",alt:""},null,8,k)]),t("td",null,[f(p,{to:`/product/${o.id}`,class:"btn btn-outline-secondary"},{default:g(()=>[c("產品細節")]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-outline-primary",onClick:L=>_.addToCart(o.id)},"加入購物車",8,E)])]))),128))])])],64)}const v=h(T,[["render",y]]);export{v as default};
