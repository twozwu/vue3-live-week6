(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d634"],{d0a3:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),o={class:"container text-center"},a=Object(n["g"])("h1",{class:"m-5"},"This is an coupons page",-1),s={class:"table"},u=Object(n["g"])("thead",null,[Object(n["g"])("tr",null,[Object(n["g"])("th",{scope:"col"},"日期"),Object(n["g"])("th",{scope:"col"},"優惠項目"),Object(n["g"])("th",{scope:"col"},"折數")])],-1),i={key:0};function d(t,e,c,d,l,b){return Object(n["s"])(),Object(n["d"])("div",o,[a,Object(n["g"])("table",s,[u,Object(n["g"])("tbody",null,[(Object(n["s"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(l.coupons,(function(e){return Object(n["s"])(),Object(n["d"])("tr",{key:e.id},[Object(n["g"])("td",null,Object(n["A"])(t.dateParse(e.due_date)),1),Object(n["g"])("td",null,Object(n["A"])(e.title),1),Object(n["g"])("td",null,Object(n["A"])(e.percent),1)])})),128))])]),l.coupons?(Object(n["s"])(),Object(n["d"])("div",i,"目前無優惠券")):Object(n["e"])("",!0)])}c("99af");var l={data:function(){return{apiUrl:"https://vue3-course-api.hexschool.io",apiPath:"onedog",coupons:{}}},methods:{getCoupons:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.axios.get("".concat(this.apiUrl,"/api/").concat(this.apiPath,"/admin/coupons?page=").concat(e)).then((function(e){e.data.success?t.coupons=e.data.coupons:alert(e.data.message)})).catch((function(t){return console.log(t)}))}},mounted:function(){this.getCoupons()}};l.render=d;e["default"]=l}}]);
//# sourceMappingURL=chunk-2d21d634.9fc506b6.js.map