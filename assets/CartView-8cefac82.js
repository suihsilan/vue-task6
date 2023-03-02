import{_ as g,o as c,c as r,a as m,d as t,F as h,f as p,g as I,t as n,h as v,v as x}from"./index-ada980ad.js";const{VITE_APP_URL:i,VITE_APP_PATH:u}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"sui-vue",BASE_URL:"/vue-task6/",MODE:"production",DEV:!1,PROD:!0},C={data(){return{products:[],productId:"",cart:{},loadingItem:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCarts(){this.$http.get(`${i}/v2/api/${u}/cart`).then(e=>{this.cart=e.data.data}).catch(e=>{console.log(e.data.message)})},updateCartItem(e){const o={product_id:e.product.id,qty:e.qty};this.loadingItem=e.id,this.$http.put(`${i}/v2/api/${u}/cart/${e.id}`,{data:o}).then(d=>{this.cart=d.data.data,this.getCarts(),this.loadingItem=null}).catch(d=>{console.log(d.data.message)})},deleteItem(e){this.$http.delete(`${i}/v2/api/${u}/cart/${e.id}`).then(o=>{this.getCarts(),this.loadingItem=null}).catch(o=>{console.log(o.data.message)})},clearCart(){this.$http.delete(`${i}/v2/api/${u}/carts`).then(e=>{this.getCarts(),this.loadingItem=null}).catch(e=>{console.log(e.data.message)})}},mounted(){this.getCarts()}},b={class:"table align-middle"},f=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",null,"單價")])],-1),$=["disabled","onClick"],y={class:"input-group input-group-sm"},P=["disabled","onUpdate:modelValue","onChange"],V=["value"],k={class:"text-end"},E=t("td",{colspan:"3",class:"text-end"},"總計",-1),A={class:"text-end"},T=t("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),D={class:"text-end text-success"};function U(e,o,d,q,l,_){return c(),r(h,null,[m(" 這是購物車頁面 "),t("table",b,[f,t("tbody",null,[l.cart.carts?(c(!0),r(h,{key:0},p(l.cart.carts,s=>(c(),r("tr",{key:s.id},[t("td",null,[t("button",{disabled:s.id===l.loadingItem,type:"button",class:"btn btn-outline-danger btn-sm",onClick:a=>_.deleteItem(s)}," x ",8,$)]),t("td",null,n(s.product.title)+" ",1),t("td",null,[t("div",y,[v(t("select",{disabled:s.id===l.loadingItem,name:"",id:"","onUpdate:modelValue":a=>s.qty=a,onChange:a=>_.updateCartItem(s)},[(c(),r(h,null,p(20,a=>t("option",{value:a,key:a+"12345678"},n(a),9,V)),64))],40,P),[[x,s.qty]])])]),t("td",k,n(s.total)+" 元 ",1)]))),128)):I("",!0)]),t("tfoot",null,[t("tr",null,[E,t("td",A,n(l.cart.final_total)+" 元",1)]),t("tr",null,[T,t("td",D,n(l.cart.final_total)+" 元",1)])])])],64)}const L=g(C,[["render",U]]);export{L as default};
