(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-679d4cf8"],{"0cb2":function(t,e,n){var a=n("7b0b"),c=Math.floor,o="".replace,r=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,i,s,d){var u=n+t.length,p=i.length,b=l;return void 0!==s&&(s=a(s),b=r),o.call(d,b,(function(a,o){var r;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(u);case"<":r=s[o.slice(1,-1)];break;default:var l=+o;if(0===l)return a;if(l>p){var d=c(l/10);return 0===d?a:d<=p?void 0===i[d-1]?o.charAt(1):i[d-1]+o.charAt(1):a}r=i[l-1]}return void 0===r?"":r}))}},"14c3":function(t,e,n){var a=n("c6b6"),c=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return c.call(t,e)}},5319:function(t,e,n){"use strict";var a=n("d784"),c=n("825a"),o=n("50c4"),r=n("a691"),l=n("1d80"),i=n("8aa5"),s=n("0cb2"),d=n("14c3"),u=Math.max,p=Math.min,b=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,n,a){var g=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=a.REPLACE_KEEPS_$0,f=g?"$":"$0";return[function(n,a){var c=l(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,c,a):e.call(String(c),n,a)},function(t,a){if(!g&&m||"string"===typeof a&&-1===a.indexOf(f)){var l=n(e,t,this,a);if(l.done)return l.value}var h=c(t),O=String(this),j="function"===typeof a;j||(a=String(a));var v=h.global;if(v){var x=h.unicode;h.lastIndex=0}var y=[];while(1){var U=d(h,O);if(null===U)break;if(y.push(U),!v)break;var I=String(U[0]);""===I&&(h.lastIndex=i(O,o(h.lastIndex),x))}for(var k="",E=0,w=0;w<y.length;w++){U=y[w];for(var P=String(U[0]),C=u(p(r(U.index),O.length),0),M=[],_=1;_<U.length;_++)M.push(b(U[_]));var $=U.groups;if(j){var S=[P].concat(M,C,O);void 0!==$&&S.push($);var R=String(a.apply(void 0,S))}else R=s(P,O,C,M,$,a);C>=E&&(k+=O.slice(E,C)+R,E=C+P.length)}return k+O.slice(E)}]}))},"857a":function(t,e,n){var a=n("1d80"),c=/"/g;t.exports=function(t,e,n,o){var r=String(a(t)),l="<"+e;return""!==n&&(l+=" "+n+'="'+String(o).replace(c,"&quot;")+'"'),l+">"+r+"</"+e+">"}},"8aa5":function(t,e,n){"use strict";var a=n("6547").charAt;t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},9263:function(t,e,n){"use strict";var a=n("ad6d"),c=n("9f7f"),o=n("5692"),r=RegExp.prototype.exec,l=o("native-string-replace",String.prototype.replace),i=r,s=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),d=c.UNSUPPORTED_Y||c.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],p=s||u||d;p&&(i=function(t){var e,n,c,o,i=this,p=d&&i.sticky,b=a.call(i),g=i.source,m=0,f=t;return p&&(b=b.replace("y",""),-1===b.indexOf("g")&&(b+="g"),f=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(g="(?: "+g+")",f=" "+f,m++),n=new RegExp("^(?:"+g+")",b)),u&&(n=new RegExp("^"+g+"$(?!\\s)",b)),s&&(e=i.lastIndex),c=r.call(p?n:i,f),p?c?(c.input=c.input.slice(m),c[0]=c[0].slice(m),c.index=i.lastIndex,i.lastIndex+=c[0].length):i.lastIndex=0:s&&c&&(i.lastIndex=i.global?c.index+c[0].length:e),u&&c&&c.length>1&&l.call(c[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(c[o]=void 0)})),c}),t.exports=i},9911:function(t,e,n){"use strict";var a=n("23e7"),c=n("857a"),o=n("af03");a({target:"String",proto:!0,forced:o("link")},{link:function(t){return c(this,"a","href",t)}})},"9f7f":function(t,e,n){"use strict";var a=n("d039");function c(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=c("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=c("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var a=n("23e7"),c=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},ad6d:function(t,e,n){"use strict";var a=n("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},af03:function(t,e,n){var a=n("d039");t.exports=function(t){return a((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},d416:function(t,e,n){"use strict";n.r(e);var a=n("7a23"),c={class:"container"},o={class:"text-end mt-4"},r={class:"table shadow mt-4 bg-light"},l=Object(a["g"])("thead",{class:"table mt-4 bg-info"},[Object(a["g"])("tr",null,[Object(a["g"])("th",{width:"120"}," 分類 "),Object(a["g"])("th",null,"產品名稱"),Object(a["g"])("th",{width:"120",class:"text-end pe-5"}," 原價 "),Object(a["g"])("th",{width:"120",class:"text-end pe-5"}," 售價 "),Object(a["g"])("th",{width:"100"}," 是否啟用 "),Object(a["g"])("th",{width:"120"}," 編輯 ")])],-1),i={class:"text-end pe-5"},s={class:"text-end pe-5"},d={key:0,class:"text-success"},u={key:1},p={class:"btn-group"},b={class:"d-flex justify-content-center"};function g(t,e,n,g,m,f){var h=Object(a["x"])("pagination"),O=Object(a["x"])("product-modal"),j=Object(a["x"])("del-product-modal");return Object(a["s"])(),Object(a["d"])(a["a"],null,[Object(a["g"])("div",c,[Object(a["g"])("div",o,[Object(a["g"])("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=function(t){return f.openModal("newItem")})}," 建立新的產品 ")]),Object(a["g"])("table",r,[l,Object(a["g"])("tbody",null,[(Object(a["s"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(m.products,(function(t){return Object(a["s"])(),Object(a["d"])("tr",{key:t.id},[Object(a["g"])("td",null,Object(a["A"])(t.category),1),Object(a["g"])("td",null,Object(a["A"])(t.title),1),Object(a["g"])("td",i,Object(a["A"])(t.origin_price),1),Object(a["g"])("td",s,Object(a["A"])(t.price),1),Object(a["g"])("td",null,[t.is_enabled?(Object(a["s"])(),Object(a["d"])("span",d,"啟用")):(Object(a["s"])(),Object(a["d"])("span",u,"未啟用"))]),Object(a["g"])("td",null,[Object(a["g"])("div",p,[Object(a["g"])("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(e){return f.openModal("editItem",t)}}," 編輯 ",8,["onClick"]),Object(a["g"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return f.openModal("delItem",t)}}," 刪除 ",8,["onClick"])])])])})),128))])]),Object(a["g"])("div",b,[Object(a["g"])(h,{pages:m.pagination,onEmitPage:f.getData},null,8,["pages","onEmitPage"])])]),Object(a["g"])(O,{ref:"productModal",onUpdate:f.getData},null,8,["onUpdate"]),Object(a["g"])(j,{ref:"delProductModal",onUpdate:f.getData},null,8,["onUpdate"])],64)}n("ac1f"),n("5319"),n("99af");var m={"aria-label":"Page navigation example"},f={class:"pagination"},h=Object(a["g"])("span",{"aria-hidden":"true"},"«",-1),O=Object(a["g"])("span",{"aria-hidden":"true"},"»",-1);function j(t,e,n,c,o,r){return Object(a["s"])(),Object(a["d"])("nav",m,[Object(a["g"])("ul",f,[Object(a["g"])("li",{class:["page-item",{disabled:1==n.pages.current_page}]},[Object(a["g"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[1]||(e[1]=Object(a["J"])((function(t){return r.emitPage(n.pages.current_page-1)}),["prevent"]))},[h])],2),(Object(a["s"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(n.pages.total_pages,(function(t,e){return Object(a["s"])(),Object(a["d"])("li",{class:["page-item",{active:t==n.pages.current_page}],key:e},[Object(a["g"])("a",{class:"page-link",href:"#",onClick:Object(a["J"])((function(e){return r.emitPage(t)}),["prevent"])},Object(a["A"])(t),9,["onClick"])],2)})),128)),Object(a["g"])("li",{class:["page-item",{disabled:n.pages.current_page==n.pages.total_pages}]},[Object(a["g"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[2]||(e[2]=Object(a["J"])((function(t){return r.emitPage(n.pages.current_page+1)}),["prevent"]))},[O])],2)])])}var v={props:["pages"],methods:{emitPage:function(t){this.$emit("emit-page",t)}}};v.render=j;var x=v,y={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},U={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},I={class:"modal-content border-0"},k=Object(a["g"])("div",{class:"modal-header bg-danger text-white"},[Object(a["g"])("h5",{id:"delProductModalLabel",class:"modal-title"},[Object(a["g"])("span",null,"刪除產品")]),Object(a["g"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),E={class:"modal-body"},w=Object(a["f"])(" 是否刪除 "),P={class:"text-danger"},C=Object(a["f"])(" 商品(刪除後將無法恢復)。 "),M={class:"modal-footer"},_=Object(a["g"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function $(t,e,n,c,o,r){return Object(a["s"])(),Object(a["d"])("div",y,[Object(a["g"])("div",U,[Object(a["g"])("div",I,[k,Object(a["g"])("div",E,[w,Object(a["g"])("strong",P,Object(a["A"])(o.product.title),1),C]),Object(a["g"])("div",M,[_,Object(a["g"])("button",{type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=function(){return r.delItem&&r.delItem.apply(r,arguments)})}," 確認刪除 ")])])])],512)}var S=n("7c2b"),R=n.n(S),A={data:function(){return{apiUrl:"https://vue3-course-api.hexschool.io",apiPath:"onedog",modal:"",product:{}}},methods:{delItem:function(){var t=this;this.axios.delete("".concat(this.apiUrl,"/api/").concat(this.apiPath,"/admin/product/").concat(this.product.id)).then((function(e){e.data.success?(alert(e.data.message),t.$emit("update")):(console.log(e.data.message),alert(e.data.message)),t.hideModal()})).catch((function(t){return console.log(t)}))},openModal:function(t){this.product=t,this.modal.show()},hideModal:function(){this.modal.hide()}},mounted:function(){this.modal=new R.a(this.$refs.delProductModal)}};A.render=$;var T=A,N=(n("a4d3"),n("e01a"),{id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"}),D={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"},V={class:"modal-content border-0"},L={class:"modal-header bg-dark text-white"},J={id:"productModalLabel",class:"modal-title"},B=Object(a["g"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),K={class:"modal-body"},F={class:"row"},z={class:"col-sm-4"},G={class:"form-group"},X=Object(a["g"])("label",{for:"imageUrl"},"主要圖片",-1),Y=Object(a["g"])("div",{class:"mb-1"},"多圖新增",-1),q={key:0},H={class:"form-group"},Q=Object(a["g"])("label",{for:"imagesUrl"},"輸入圖片網址",-1),W={key:0},Z={key:1},tt={key:1},et={class:"col-sm-8"},nt={class:"form-group"},at=Object(a["g"])("label",{for:"title"},"標題",-1),ct={class:"row"},ot={class:"form-group col-md-6"},rt=Object(a["g"])("label",{for:"category"},"分類",-1),lt={class:"form-group col-md-6"},it=Object(a["g"])("label",{for:"unit"},"單位",-1),st={class:"row"},dt={class:"form-group col-md-6"},ut=Object(a["g"])("label",{for:"origin_price"},"原價",-1),pt={class:"form-group col-md-6"},bt=Object(a["g"])("label",{for:"price"},"售價",-1),gt=Object(a["g"])("hr",null,null,-1),mt={class:"form-group"},ft=Object(a["g"])("label",{for:"description"},"產品描述",-1),ht={class:"form-group"},Ot=Object(a["g"])("label",{for:"content"},"說明內容",-1),jt={class:"form-group"},vt={class:"form-check"},xt=Object(a["g"])("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),yt={class:"modal-footer"},Ut=Object(a["g"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function It(t,e,n,c,o,r){return Object(a["s"])(),Object(a["d"])("div",N,[Object(a["g"])("div",D,[Object(a["g"])("div",V,[Object(a["g"])("div",L,[Object(a["g"])("h5",J,[Object(a["g"])("span",null,Object(a["A"])(o.title),1)]),B]),Object(a["g"])("div",K,[Object(a["g"])("div",F,[Object(a["g"])("div",z,[Object(a["g"])("div",G,[X,Object(a["I"])(Object(a["g"])("input",{id:"imageUrl","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.products.imageUrl=t}),type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[a["E"],o.products.imageUrl]]),Object(a["g"])("input",{type:"file",class:"form-control",placeholder:"請輸入圖片連結",ref:"file",onChange:e[2]||(e[2]=function(){return r.tempImg&&r.tempImg.apply(r,arguments)})},null,544),Object(a["g"])("img",{class:"img-fluid",src:o.products.imageUrl},null,8,["src"])]),Y,o.products.imagesUrl.length>0?(Object(a["s"])(),Object(a["d"])("div",q,[(Object(a["s"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(o.products.imagesUrl,(function(t,n){return Object(a["s"])(),Object(a["d"])("div",{class:"mb-1",key:n},[Object(a["g"])("div",H,[Q,Object(a["I"])(Object(a["g"])("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":function(t){return o.products.imagesUrl[n]=t}},null,8,["onUpdate:modelValue"]),[[a["E"],o.products.imagesUrl[n]]]),Object(a["g"])("input",{type:"file",class:"form-control",ref:"file",onChange:e[3]||(e[3]=function(){return r.tempImg&&r.tempImg.apply(r,arguments)})},null,544),Object(a["g"])("img",{class:"img-fluid",src:t,alt:""},null,8,["src"])])])})),128)),!o.products.imagesUrl.length||o.products.imagesUrl[o.products.imagesUrl.length-1]?(Object(a["s"])(),Object(a["d"])("div",W,[Object(a["g"])("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[4]||(e[4]=function(t){return o.products.imagesUrl.push("")})}," 新增圖片(in多圖) ")])):(Object(a["s"])(),Object(a["d"])("div",Z,[Object(a["g"])("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[5]||(e[5]=function(){return r.uploadImg&&r.uploadImg.apply(r,arguments)})}," 上傳圖片(in多圖) "),Object(a["g"])("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[6]||(e[6]=function(){return r.multiple&&r.multiple.apply(r,arguments)})}," 自動產生圖片(in多圖) "),Object(a["g"])("button",{type:"button",class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[7]||(e[7]=function(t){return o.products.imagesUrl.pop()})}," 刪除圖片 ")]))])):(Object(a["s"])(),Object(a["d"])("div",tt,[Object(a["g"])("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[8]||(e[8]=function(t){return r.uploadImg("main")})}," 上傳圖片(in主要圖片) "),Object(a["g"])("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[9]||(e[9]=function(){return r.autoImg&&r.autoImg.apply(r,arguments)})}," 自動產生圖片(in主要圖片) "),Object(a["g"])("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[10]||(e[10]=function(){return r.addImg&&r.addImg.apply(r,arguments)})}," 新增圖片(in主要圖片) ")]))]),Object(a["g"])("div",et,[Object(a["g"])("div",nt,[at,Object(a["I"])(Object(a["g"])("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[11]||(e[11]=function(t){return o.products.title=t})},null,512),[[a["E"],o.products.title]])]),Object(a["g"])("div",ct,[Object(a["g"])("div",ot,[rt,Object(a["I"])(Object(a["g"])("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[12]||(e[12]=function(t){return o.products.category=t})},null,512),[[a["E"],o.products.category]])]),Object(a["g"])("div",lt,[it,Object(a["I"])(Object(a["g"])("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[13]||(e[13]=function(t){return o.products.unit=t})},null,512),[[a["E"],o.products.unit]])])]),Object(a["g"])("div",st,[Object(a["g"])("div",dt,[ut,Object(a["I"])(Object(a["g"])("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[14]||(e[14]=function(t){return o.products.origin_price=t})},null,512),[[a["E"],o.products.origin_price,void 0,{number:!0}]])]),Object(a["g"])("div",pt,[bt,Object(a["I"])(Object(a["g"])("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[15]||(e[15]=function(t){return o.products.price=t})},null,512),[[a["E"],o.products.price,void 0,{number:!0}]])])]),gt,Object(a["g"])("div",mt,[ft,Object(a["I"])(Object(a["g"])("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[16]||(e[16]=function(t){return o.products.description=t})},"\n                ",512),[[a["E"],o.products.description]])]),Object(a["g"])("div",ht,[Ot,Object(a["I"])(Object(a["g"])("textarea",{id:"content",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[17]||(e[17]=function(t){return o.products.content=t})},"\n                ",512),[[a["E"],o.products.content]])]),Object(a["g"])("div",jt,[Object(a["g"])("div",vt,[Object(a["I"])(Object(a["g"])("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":"1","false-value":"0","onUpdate:modelValue":e[18]||(e[18]=function(t){return o.products.is_enabled=t})},null,512),[[a["D"],o.products.is_enabled]]),xt])])])])]),Object(a["g"])("div",yt,[Ut,Object(a["g"])("button",{type:"button",class:"btn btn-primary",onClick:e[19]||(e[19]=function(){return r.addItem&&r.addItem.apply(r,arguments)})}," 確認 ")])])])],512)}n("9911");var kt={data:function(){return{apiUrl:"https://vue3-course-api.hexschool.io",apiPath:"onedog",temp:{},modal:"",products:{imageUrl:"",imagesUrl:[],uploadImg:[]},title:"",isNew:!1}},methods:{addItem:function(){var t=this,e="".concat(this.apiUrl,"/api/").concat(this.apiPath,"/admin/product"),n="post";this.isNew||(e="".concat(this.apiUrl,"/api/").concat(this.apiPath,"/admin/product/").concat(this.products.id),n="put"),this.axios[n](e,{data:this.products}).then((function(e){e.data.success?(alert(e.data.message),t.$emit("update"),t.hideModal()):(console.log(e.data.message),alert(e.data.message))})).catch((function(t){return console.log(t)}))},addImg:function(){this.products.imagesUrl.push("")},autoImg:function(){this.products.imageUrl="https://picsum.photos/400",this.products.imagesUrl.push("")},multiple:function(){var t=this.products.imagesUrl.length-1;""===this.products.imagesUrl[t]?(this.products.imagesUrl[t]="https://picsum.photos/40".concat(this.products.imagesUrl.length),this.products.imagesUrl.push("")):this.products.imagesUrl.push("https://picsum.photos/40".concat(this.products.imagesUrl.length))},tempImg:function(t){var e=t.target.files[0].temp;this.temp=e},clearFile:function(){this.$refs.file.value=null},uploadImg:function(){var t=this,e="";this.axios({method:"POST",url:"https://api.imgur.com/3/image",data:this.temp,headers:{Authorization:"Client-ID d442039f04fbe67"},mimeType:"multipart/form-data"}).then((function(n){n.data.success?("main"===e?(t.products.imageUrl=n.data.data.link,t.products.imagesUrl.push("")):(e=t.products.imagesUrl.length-1,t.products.imagesUrl[e]=n.data.data.link,t.products.imagesUrl.push("")),alert("上傳圖片成功"),t.temp={}):alert(n.data.data.error)})).catch((function(t){alert(t.data.data.error)}))},openModal:function(t,e){"newItem"===t?(this.products={imagesUrl:[]},this.title=e,this.isNew=!0):(this.products=t,this.title=e,this.isNew=!1),this.modal.show()},hideModal:function(){this.modal.hide()}},mounted:function(){this.modal=new R.a(this.$refs.productModal)}};kt.render=It;var Et=kt,wt={data:function(){return{apiUrl:"https://vue3-course-api.hexschool.io",apiPath:"onedog",isNew:!1,title:"",products:[],tempProducts:{imagesUrl:[]},pagination:{}}},components:{pagination:x,productModal:Et,delProductModal:T},methods:{getData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.axios.defaults.headers.common.Authorization="".concat(n),this.axios.get("".concat(this.apiUrl,"/api/").concat(this.apiPath,"/admin/products?page=").concat(e)).then((function(e){e.data.success?(t.products=e.data.products,t.pagination=e.data.pagination):console.log(e.data)})).catch((function(t){return console.log(t)}))},openModal:function(t,e){if("newItem"===t){var n="新增產品";this.$refs.productModal.openModal(t,n)}else if("editItem"===t){var a="編輯產品";this.$refs.productModal.openModal(e,a)}else this.$refs.delProductModal.openModal(e)}},mounted:function(){this.getData()}};wt.render=g;e["default"]=wt},d784:function(t,e,n){"use strict";n("ac1f");var a=n("6eeb"),c=n("9263"),o=n("d039"),r=n("b622"),l=n("9112"),i=r("species"),s=RegExp.prototype,d=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),p=r("replace"),b=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),g=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,p){var m=r(t),f=!o((function(){var e={};return e[m]=function(){return 7},7!=""[t](e)})),h=f&&!o((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[i]=function(){return n},n.flags="",n[m]=/./[m]),n.exec=function(){return e=!0,null},n[m](""),!e}));if(!f||!h||"replace"===t&&(!d||!u||b)||"split"===t&&!g){var O=/./[m],j=n(m,""[t],(function(t,e,n,a,o){var r=e.exec;return r===c||r===s.exec?f&&!o?{done:!0,value:O.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:b}),v=j[0],x=j[1];a(String.prototype,t,v),a(s,m,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}p&&l(s[m],"sham",!0)}}}]);
//# sourceMappingURL=chunk-679d4cf8.cd428296.js.map