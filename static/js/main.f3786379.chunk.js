(this["webpackJsonpbeer-catalog"]=this["webpackJsonpbeer-catalog"]||[]).push([[0],{246:function(e,t,a){},271:function(e,t,a){},331:function(e,t,a){},399:function(e,t,a){},400:function(e,t,a){},459:function(e,t,a){},460:function(e,t,a){},461:function(e,t,a){"use strict";a.r(t);var r,n=a(0),c=a.n(n),i=a(28),s=a.n(i),l=a(29),o=a(33),d=(a(245),{main:function(){return"/"},mainWithCategory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":category";return"/".concat(e)},details:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":category",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:":id";return"/".concat(e,"/details/").concat(t)},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":category";return"/".concat(e,"/cart")},order:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":category";return"/".concat(e,"/order")}}),b=(a(246),a(463)),u=a(469),j=a(171),m=a(472),h=a(473),g={hard:{params:{abv_gt:10},label:"Hard"},middle:{params:{abv_lt:10,abv_gt:5},label:"Middle"},light:{params:{abv_lt:5},label:"Light"}},O={lightBlonde:{params:{ebc_gt:6,ebc_lt:9},label:"Light Blonde"},blonde:{params:{ebc_gt:9,ebc_lt:12},label:"Blonde (yellow)"},gold:{params:{ebc_gt:12,ebc_lt:20},label:"Gold"},amber:{params:{ebc_gt:20,ebc_lt:30},label:"Amber"},copper:{params:{ebc_gt:30,ebc_lt:45},label:"Copper"},darkCopper:{params:{ebc_gt:45,ebc_lt:75},label:"Dark Copper / Brown"},veryDarkBrown:{params:{ebc_gt:75,ebc_lt:120},label:"Very Dark Brown (transparent)"},black:{params:{ebc_gt:120},label:"Black (not transparent)"}},p=function(e){return(g[e]||O[e]).label},x=a(3),f=j.a.SubMenu,v=function(e){var t=e.selectedCategory;return Object(x.jsxs)(j.a,{style:{height:"100%"},defaultSelectedKeys:[t],defaultOpenKeys:["sub1","colours","strength"],mode:"inline",children:[Object(x.jsx)(f,{icon:Object(x.jsx)(m.a,{}),title:"Beer Colours",children:Object.keys(O).map((function(e){return Object(x.jsx)(j.a.Item,{children:Object(x.jsx)(l.b,{to:d.mainWithCategory(e),children:O[e].label},e)},e)}))},"colours"),Object(x.jsx)(f,{icon:Object(x.jsx)(h.a,{}),title:"Strength of Beer",children:Object.keys(g).map((function(e){return Object(x.jsx)(j.a.Item,{children:Object(x.jsx)(l.b,{to:d.mainWithCategory(e),children:g[e].label},e)},e)}))},"strength")]})},y=n.memo(v),N=a(229),_=a(464),S=a(468),C=a(470),B=a(101),I=a(465),w=a(474),E=a(238),k=a(475),P=a(476),T=a(477),L=a(478),F=a(48),V=a(57),D=a.n(V),W=a(230),q=a.n(W),z=a(7),J={id:0,name:"",tagline:"",abv:0,attenuation_level:0,boil_volume:{value:0,unit:""},brewers_tips:"",contributed_by:"",description:"",ebc:null,first_brewed:"",food_pairing:[],ibu:null,image_url:"",ph:null,srm:null,target_fg:0,target_og:0,volume:{value:0,unit:""}},R=z.d.model({value:z.d.number,unit:z.d.string}),A=z.d.model({id:z.d.number,name:z.d.string,tagline:z.d.string,abv:z.d.number,attenuation_level:z.d.number,boil_volume:R,brewers_tips:z.d.string,contributed_by:z.d.string,description:z.d.string,ebc:z.d.maybeNull(z.d.number),first_brewed:z.d.string,food_pairing:z.d.array(z.d.string),ibu:z.d.maybeNull(z.d.number),image_url:z.d.maybeNull(z.d.string),ph:z.d.maybeNull(z.d.number),srm:z.d.maybeNull(z.d.number),target_fg:z.d.number,target_og:z.d.number,volume:R,selectedCount:z.d.optional(z.d.number,1)}).actions((function(e){return{setCount:function(t){e.selectedCount=t||1}}}));!function(e){e.initial="initial",e.pending="pending",e.error="error",e.loadSuccess="loadSuccess",e.saveSuccess="saveSuccess"}(r||(r={}));var M=z.d.model("RemoteDataModel").volatile((function(){return{loadStatus:r.initial}})).views((function(e){return{get dataInitial(){return e.loadStatus===r.initial},get dataPending(){return e.loadStatus===r.pending},get dataError(){return e.loadStatus===r.error},get dataLoadSuccess(){return e.loadStatus===r.loadSuccess},get dataSaveSuccess(){return e.loadStatus===r.saveSuccess}}})).actions((function(e){return{setInitial:function(){e.loadStatus=r.initial},setPending:function(){e.loadStatus=r.pending},setError:function(){e.loadStatus=r.error},setLoadSuccess:function(){e.loadStatus=r.loadSuccess},setSaveSuccess:function(){e.loadStatus=r.saveSuccess}}})),$=z.d.compose(M,z.d.model({items:z.d.array(A)})).named("BeerCollection").actions((function(e){return{loadByParams:Object(z.c)(D.a.mark((function t(){var a,r,n,c=arguments;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=c.length>0&&void 0!==c[0]?c[0]:{},e.setPending(),t.prev=2,t.next=5,de.get(a);case 5:r=t.sent,n=r.data,setTimeout((function(){Object(z.a)(e.items,n),e.setLoadSuccess()}),400),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),e.setError(),ee.addError(t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})))}})),H=z.d.model({errors:z.d.array(z.d.string)}).actions((function(e){return{addError:function(t){e.errors.push(t)},clearErrors:function(){e.errors.clear()}}})),G=H,K=z.d.model({}).actions((function(e){return{setField:function(t,a){e[t]=Object(z.b)(a)}}})),U=z.d.model({items:z.d.array(A),totalPrice:z.d.maybeNull(z.d.number),address:z.d.maybeNull(z.d.string)}),Q=z.d.compose(K,M,U).named("Cart").views((function(e){return{get count(){return e.items.toJSON().length}}})).actions((function(e){return{getCurrentProduct:function(t){return e.items.toJSON().find((function(e){return e.id===t}))},loadByIds:Object(z.c)(D.a.mark((function t(a){var r,n;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setPending(),t.prev=1,t.next=4,de.getByIds(a);case 4:r=t.sent,n=r.data,setTimeout((function(){Object(z.a)(e.items,n),e.setLoadSuccess()}),400),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),ee.addError(t.t0),e.setError();case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))}})),X=z.d.model({id:z.d.string,label:z.d.string,url:z.d.string}),Y=z.d.model({items:z.d.array(X)}).actions((function(e){return{set:function(t){Object(z.a)(e.items,t)}}})),Z=$.create({items:[]}),ee=G.create({errors:[]}),te=Q.create({items:[]}),ae=Y.create({items:[{id:"catalog",label:"Catalog",url:d.main()}]}),re={404:"\u0417\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d",502:"\u0421\u0435\u0440\u0432\u0438\u0441 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d (502)",503:"\u0421\u0435\u0440\u0432\u0438\u0441 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d (503)",504:"\u0412\u0440\u0435\u043c\u044f \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f \u043e\u0442\u0432\u0435\u0442\u0430 \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u043e (504)",network:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043e\u0442\u0432\u0435\u0442\u0438\u043b, \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0441\u0435\u0442\u044c\u044e",default:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u0441\u0435\u0442\u0435\u0432\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430"},ne=q.a.create({baseURL:"",timeout:6e4});ne.interceptors.response.use((function(e){return e}),(function(e){return e.config.skipError||function(e){e.response?re[e.response.status]&&ee.addError("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(re[e.response.status])):e.request?ee.addError(re.network):ee.addError(re.default)}(e),e.axios=!0,Promise.reject(e)}));var ce,ie,se,le,oe=ne,de={get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return oe.get("/beers",{params:e})},getById:function(e){return oe.get("/beers/".concat(e))},getByIds:function(e){return oe.get("/beers/",{params:{ids:e}})}},be=z.d.compose(K,M,A).named("Beer").actions((function(e){return{loadById:Object(z.c)(D.a.mark((function t(a){var r,n;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setPending(),t.prev=1,t.next=4,de.getById(a);case 4:r=t.sent,n=r.data,setTimeout((function(){Object(z.a)(e,n[0]),e.setLoadSuccess()}),400),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),e.setError(),ee.addError(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))}})),ue=(a(271),a(116)),je=function(e,t){var a=e&&e.split("?")[1].split("&")||[];return a.length?a.length?a.map((function(e){return e.split("=")})).find((function(e){return e[0]===t}))?"?".concat(a.map((function(e){var a=e.split("="),r=Object(ue.a)(a,2),n=r[0],c=r[1];return n===t?"".concat(n,"=").concat(+c+1):e})).join("&")):"".concat(e,"&").concat(t,"=1"):"":"?".concat(t,"=1")},me=function(e,t){var a=e&&e.split("?")[1].split("&")||[];return a.map((function(e){return e.split("=")})).find((function(e){return e[0]===t}))?"?".concat(a.map((function(e){var a=e.split("="),r=Object(ue.a)(a,2),n=r[0],c=r[1];return n===t?"".concat(n,"=").concat(1===+c?1:+c-1):e})).join("&")):""},he=function(e,t){var a=e&&e.split("?")[1].split("&")||[];return t?a.length?a.map((function(e){return e.split("=")})).filter((function(e){return e[0]!==t})).map((function(e,t){return"".concat(t?"&":"?").concat(e[0],"=").concat(e[1])})).join(""):"":e},ge=function(e,t){return!!e.replace("?","").split("&").map((function(e){return e.split("=")})).find((function(e){return e[0]===t}))},Oe=function(e,t){var a=e.replace("?","").split("&").map((function(e){return e.split("=")})).find((function(e){return e[0]===t}));return a?+a[1]:0},pe=function(e){return e?e.replace("?","").split("&").length:0},xe=Object(F.a)((function(){var e=Object(o.h)(),t=e.category,a=e.id,r=Object(o.g)().search,c=n.useRef(be.create(Object(N.a)({},J))).current;return n.useEffect((function(){a&&c.loadById(a)}),[a]),n.useEffect((function(){ae.set([{id:t,label:"Catalog ".concat(p(t)),url:d.mainWithCategory(t)},{id:a,label:c.name,url:d.details(t,a)+r}])}),[c.name]),Object(x.jsxs)(_.a,{title:c.name,actions:[Object(x.jsx)(w.a,{})],children:[c.dataPending&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(S.a,{loading:!0,active:!0}),Object(x.jsx)(S.a,{loading:!0,active:!0})]}),c.dataLoadSuccess&&Object(x.jsxs)("div",{className:"details-container",children:[Object(x.jsx)("img",{className:"details-beer-img",src:c.image_url||"",alt:c.name}),Object(x.jsxs)("div",{children:[Object(x.jsxs)(C.b,{className:"beer-card_description",title:"Details",size:"middle",column:2,children:[Object(x.jsx)(C.b.Item,{label:"Description",span:2,children:c.description}),Object(x.jsx)(C.b.Item,{label:"Brewers tips",span:2,children:c.brewers_tips}),Object(x.jsx)(C.b.Item,{label:"Contributed by",span:1,children:c.contributed_by}),Object(x.jsx)(C.b.Item,{label:"First brewed",children:c.first_brewed}),Object(x.jsx)(C.b.Item,{label:"Food pairing",children:c.food_pairing.map((function(e,t){return Object(x.jsxs)("span",{className:"food-span",children:[e,c.food_pairing.length===t+1?"":", "]},e)}))})]}),Object(x.jsxs)("div",{className:"actions-container",children:[Object(x.jsx)(l.b,{to:d.details(t,a)+je(r,a),children:Object(x.jsx)(B.a,{icon:Object(x.jsx)(E.a,{})})}),Object(x.jsx)(l.b,{to:d.details(t,a)+me(r,a),children:Object(x.jsx)(B.a,{icon:Object(x.jsx)(k.a,{})})}),Object(x.jsx)(I.a,{className:"actions-container_item",children:Oe(r,a)}),ge(r,a)?Object(x.jsx)(l.b,{to:d.details(t,a)+he(r,String(a)),children:Object(x.jsx)(B.a,{className:"actions-container_item",icon:Object(x.jsx)(P.a,{}),children:"Remove from Card"})}):Object(x.jsx)(l.b,{to:d.details(t,a)+je(r,String(a)),children:Object(x.jsx)(B.a,{className:"actions-container_item",icon:Object(x.jsx)(T.a,{}),children:"Add to Card"})}),Object(x.jsx)(l.b,{to:d.cart(t)+r,children:Object(x.jsx)(B.a,{className:"actions-container_item",icon:Object(x.jsx)(L.a,{}),children:"Go to Cart"})})]})]})]})]})})),fe=a(471),ve=a(466),ye=a(467),Ne=a(30),_e=a(166),Se=a.n(_e),Ce=a(233),Be=a.n(Ce);!function(e){e.city="city",e.street="street",e.houseNumber="houseNumber",e.name="name",e.email="email",e.phone="phone",e.cardNumber="cardNumber"}(le||(le={}));var Ie=(ce={},Object(Ne.a)(ce,le.city,""),Object(Ne.a)(ce,le.street,""),Object(Ne.a)(ce,le.houseNumber,0),Object(Ne.a)(ce,le.name,""),Object(Ne.a)(ce,le.email,""),Object(Ne.a)(ce,le.phone,""),Object(Ne.a)(ce,le.cardNumber,""),ce),we=z.d.model((ie={},Object(Ne.a)(ie,le.city,z.d.maybeNull(z.d.string)),Object(Ne.a)(ie,le.street,z.d.maybeNull(z.d.string)),Object(Ne.a)(ie,le.houseNumber,z.d.maybeNull(z.d.number)),Object(Ne.a)(ie,le.name,z.d.maybeNull(z.d.string)),Object(Ne.a)(ie,le.email,z.d.maybeNull(z.d.string)),Object(Ne.a)(ie,le.phone,z.d.maybeNull(z.d.string)),Object(Ne.a)(ie,le.cardNumber,z.d.maybeNull(z.d.string)),ie)),Ee=new Se.a;Be()(Ee);var ke={properties:(se={},Object(Ne.a)(se,le.city,{type:"string"}),Object(Ne.a)(se,le.street,{type:"string"}),Object(Ne.a)(se,le.houseNumber,{type:"number"}),Object(Ne.a)(se,le.name,{type:"string"}),Object(Ne.a)(se,le.email,{format:"email"}),Object(Ne.a)(se,le.phone,{type:"number"}),Object(Ne.a)(se,le.cardNumber,{type:"number"}),se)},Pe=Ee.compile(ke),Te=z.d.model("Validator",{}).views((function(e){return{get isValid(){return Pe(e)},propertyValidation:function(t){var a=Object(Ne.a)({},t,Object(z.b)(e[t]));return Pe(a),Pe.errors}}})),Le=z.d.compose(K,we,Te),Fe=(a(331),I.a.Title),Ve=Object(F.a)((function(){var e=Object(o.g)().search,t=Object(o.h)().category,a=n.useRef(Le.create(Ie)).current,r=pe(e);n.useEffect((function(){ae.set([{id:t,label:"Catalog ".concat(p(t)),url:d.mainWithCategory(t)},{id:"cart",label:r?"Selected ".concat(r," products in cart"):"Empty Cart",url:d.cart(t)+e},{id:"order",label:"Order",url:d.order(t)+e}])}),[r,e,t]);var c=function(e){return function(t){a.setField(e,t.target.value)}};return Object(x.jsxs)(_.a,{title:"Ordering",className:"beer-order",children:[!r&&Object(x.jsx)(fe.a,{message:"Products not found",type:"info"}),r&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"delivery-information",children:[Object(x.jsx)(Fe,{level:4,children:"Delivery info"}),Object(x.jsx)("div",{className:"order-field",children:Object(x.jsx)(ve.a.Item,{name:le.city,label:"City/Town",rules:[{required:!0}],validateTrigger:"onBlur",help:!!a.propertyValidation(le.city)&&"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442",children:Object(x.jsx)(ye.a,{placeholder:"Prague",value:a.city||"",onChange:c(le.city)})})}),Object(x.jsx)("div",{className:"order-field",children:Object(x.jsx)(ve.a.Item,{name:le.street,label:"Street",rules:[{required:!0}],validateTrigger:"onBlur",help:!!a.propertyValidation(le.street)&&"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442",children:Object(x.jsx)(ye.a,{placeholder:"Parizhska",value:a.street||"",onChange:c(le.street)})})}),Object(x.jsx)("div",{className:"order-field",children:Object(x.jsx)(ve.a.Item,{name:le.houseNumber,label:"House number",rules:[{required:!0}],validateTrigger:"onBlur",help:!!a.propertyValidation(le.houseNumber)&&"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442",children:Object(x.jsx)(ye.a,{placeholder:"1",value:a.houseNumber||"",onChange:c(le.houseNumber)})})})]}),Object(x.jsxs)("div",{className:"contact-information",children:[Object(x.jsx)(Fe,{level:4,children:"Contact info"}),Object(x.jsx)("div",{className:"order-field",children:Object(x.jsx)(ve.a.Item,{name:le.name,label:"Name",rules:[{required:!0}],validateTrigger:"onBlur",help:!!a.propertyValidation(le.name)&&"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442",children:Object(x.jsx)(ye.a,{value:a.name||"",onChange:c(le.name)})})}),Object(x.jsx)("div",{className:"order-field",children:Object(x.jsx)(ve.a.Item,{name:le.email,label:"Email",rules:[{required:!0}],validateTrigger:"onBlur",help:!!a.propertyValidation(le.email)&&"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 email",children:Object(x.jsx)(ye.a,{placeholder:"example@gmai.com",value:a.email||"",onChange:c(le.email)})})}),Object(x.jsx)("div",{className:"order-field",children:Object(x.jsx)(ve.a.Item,{name:le.phone,label:"Phone",rules:[{required:!0}],validateTrigger:"onBlur",help:!!a.propertyValidation(le.phone)&&"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043d\u043e\u043c\u0435\u0440\u0430 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",children:Object(x.jsx)(ye.a,{placeholder:"+7-999-000-00-00",value:a.phone||"",onChange:c(le.phone)})})})]}),Object(x.jsxs)("div",{className:"contact-information",children:[Object(x.jsx)(Fe,{level:4,children:"Payment info"}),Object(x.jsx)("div",{className:"order-field",children:Object(x.jsx)(ve.a.Item,{name:le.cardNumber,label:"card numder",rules:[{required:!0}],validateTrigger:"onBlur",help:!!a.propertyValidation(le.cardNumber)&&"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043a\u0430\u0440\u0442\u044b",children:Object(x.jsx)(ye.a,{placeholder:"example@gmai.com",value:a.city||"",onChange:c(le.cardNumber)})})})]}),Object(x.jsx)("div",{className:"cart_button-container",children:Object(x.jsx)(l.b,{to:d.order(t),children:Object(x.jsx)(B.a,{disabled:a.isValid,type:"primary",children:"Buy $$$"})})})]})]})})),De=a(235),We=a.n(De),qe=a(102),ze=a(56),Je=(a(399),_.a.Meta),Re=Object(F.a)((function(e){var t=e.category,a=e.data,r=Object(o.g)().search;return Object(x.jsx)(_.a,{title:a.name,actions:[Object(x.jsx)(B.a,{icon:Object(x.jsx)(w.a,{})}),Object(x.jsx)(l.b,{to:d.details(t,String(a.id))+r,children:Object(x.jsx)(B.a,{children:"Details..."})}),Object(x.jsx)(l.b,{to:d.mainWithCategory(t)+je(r,String(a.id)),children:Object(x.jsx)(B.a,{className:"beer_add-to-cart",icon:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(T.a,{})," 1 in",Object(x.jsx)(L.a,{})]})})}),Object(x.jsx)(l.b,{to:d.cart()+r,children:Object(x.jsx)(B.a,{className:"actions-container_item",icon:Object(x.jsx)(L.a,{})})})],children:Object(x.jsx)(Je,{avatar:Object(x.jsx)("img",{className:"beer-img",src:a.image_url||"",alt:a.name}),title:a.name,description:a.description})})})),Ae=(a(400),Object(F.a)((function(){var e=Object(o.g)().search,t=Object(o.h)().category;n.useEffect((function(){t&&(ae.set([{id:t,label:"Catalog ".concat(p(t)),url:d.mainWithCategory(t)}]),Z.loadByParams(t.includes("strength")?g[t].params:O[t].params))}),[t]);return Object(x.jsxs)("div",{className:"main-page_container",children:[Object(x.jsxs)("div",{className:"main-page_header",children:[Object(x.jsx)("div",{className:"main-page_search_container",children:Object(x.jsx)(We.a,{placeholder:"please input text",enterButton:"Search",size:"large",onSearch:function(e){Z.loadByParams({beer_name:e})}})}),!!pe(e)&&Object(x.jsx)(l.b,{to:d.cart(t)+e,children:Object(x.jsxs)(B.a,{className:"actions-container_item",icon:Object(x.jsx)(L.a,{}),children:["In Cart ",pe(e)," items"]})})]}),Object(x.jsxs)(qe.a,{children:[Z.dataPending&&new Array(12).fill({}).map((function(e,t){return Object(x.jsx)(ze.a,{className:"main-page_beer-list_col",span:8,children:Object(x.jsx)(_.a,{children:Object(x.jsx)(S.a,{className:"catalog-item-sceleton",loading:!0,avatar:!0,active:!0})})},t)})),Z.dataLoadSuccess&&Z.items.toJSON().map((function(e){return Object(x.jsx)(ze.a,{className:"main-page_beer-list_col",span:8,children:Object(x.jsx)(Re,{category:t,data:e})},e.id)}))]})]})}))),Me=function(e){n.useEffect((function(){var t=e&&e.split("?")[1].split("&")||[],a="",r=[];t.forEach((function(e,n){var c=e.split("="),i=Object(ue.a)(c,2),s=i[0],l=i[1];a+="".concat(s).concat(n<t.length?"|":""),r.push(+l)})),te.loadByIds(a).then((function(){te.items.forEach((function(e,t){e.setCount(r[t])}))}))}),[e])},$e=(a(459),I.a.Title),He=Object(F.a)((function(){var e=Object(o.h)().category,t=Object(o.g)().search;Me(t);var a=function(e){return e.replace("?","").split("&").map((function(e){return e.split("=")})).reduce((function(e,t){return e+Number(t[1])}),0)}(t),r=pe(t);return n.useEffect((function(){ae.set([{id:e,label:"Catalog ".concat(p(e)),url:d.mainWithCategory(e)},{id:"cart",label:"Cart",url:d.cart(e)+t}])}),[e,t]),Object(x.jsxs)(_.a,{title:"Cart",className:"beer-cart",children:[te.dataPending&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(S.a,{loading:!0,active:!0}),Object(x.jsx)(S.a,{loading:!0,active:!0}),Object(x.jsx)(S.a,{loading:!0,active:!0})]}),te.dataLoadSuccess&&!r&&Object(x.jsx)(fe.a,{message:"Empty Cart",type:"info"}),te.dataLoadSuccess&&!!r&&Object(x.jsxs)(x.Fragment,{children:[te.items.map((function(a,r){return Object(x.jsx)(n.Fragment,{children:Object(x.jsxs)("div",{className:"card_item-container",children:[Object(x.jsx)("img",{className:"cart-beer-img",src:a.image_url||"",alt:a.name}),Object(x.jsxs)("div",{children:[Object(x.jsxs)(C.b,{className:"cart_item_description",title:"".concat(r+1,". ").concat(a.name),size:"middle",column:2,children:[Object(x.jsx)(C.b.Item,{label:"Description",span:2,children:a.description}),Object(x.jsx)(C.b.Item,{label:"count",children:Oe(t,String(a.id))}),Object(x.jsxs)(C.b.Item,{label:"price",children:[3.5*Oe(t,String(a.id))," $"]})]}),Object(x.jsxs)("div",{className:"cart_item_actions",children:[Object(x.jsx)(l.b,{to:d.details(e,a.id.toString())+t,children:Object(x.jsx)(B.a,{className:"cart_item_first_btn",children:"Details"})}),Object(x.jsx)(l.b,{to:d.cart(e)+he(t,String(a.id)),children:Object(x.jsx)(B.a,{children:"Remove"})})]})]})]})},a.id)})),Object(x.jsxs)($e,{level:4,children:["TOTAL: ",3.5*a," $"]}),te.items.toJSON().length&&Object(x.jsx)("div",{className:"cart_button-container",children:Object(x.jsx)(l.b,{to:d.order(e)+t,children:Object(x.jsx)(B.a,{type:"primary",children:"Go to ordering"})})})]})]})})),Ge=(a(460),b.a.Header),Ke=b.a.Content,Ue=b.a.Footer,Qe=b.a.Sider,Xe=Object(F.a)((function(){var e=Object(o.h)().category;return Object(x.jsxs)(b.a,{children:[Object(x.jsxs)(Ge,{className:"header",children:[Object(x.jsx)("div",{className:"logo"}),"Beans Love Beers"]}),Object(x.jsxs)(Ke,{style:{padding:"0 50px"},children:[Object(x.jsx)(u.a,{style:{margin:"16px 0",fontSize:18},children:ae.items.toJSON().map((function(e){return Object(x.jsx)(u.a.Item,{children:Object(x.jsx)(l.b,{to:e.url,children:e.label})},e.id)}))}),Object(x.jsxs)(b.a,{className:"site-layout-background",children:[Object(x.jsx)(Qe,{className:"site-layout-background",width:200,children:Object(x.jsx)(y,{selectedCategory:e})}),Object(x.jsx)(Ke,{style:{padding:"0 24px",minHeight:280},children:Object(x.jsxs)(o.d,{children:[Object(x.jsx)(o.b,{exact:!0,path:d.mainWithCategory(),children:Object(x.jsx)(Ae,{})}),Object(x.jsx)(o.b,{exact:!0,path:d.main(),children:Object(x.jsx)(Ae,{})}),Object(x.jsx)(o.b,{path:d.details(),children:Object(x.jsx)(xe,{})}),Object(x.jsx)(o.b,{path:d.cart(),children:Object(x.jsx)(He,{})}),Object(x.jsx)(o.b,{path:d.order(),children:Object(x.jsx)(Ve,{})})]})})]})]}),Object(x.jsx)(Ue,{style:{textAlign:"center"},children:"Beer Catalog developed by Igor Bezdeneznhykh"}),!e&&Object(x.jsx)(o.a,{to:d.mainWithCategory("lightBlonde")})]})})),Ye=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,479)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),c(e),i(e)}))};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(l.a,{basename:"/Beer-catalog",children:Object(x.jsx)(o.b,{path:d.main(),children:Object(x.jsx)(Xe,{})})})}),document.getElementById("root")),Ye()}},[[461,1,2]]]);
//# sourceMappingURL=main.f3786379.chunk.js.map