(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19697aa4","chunk-2d0c426a","chunk-2d0b37d2"],{"291f":function(e,t,r){"use strict";r.r(t),r.d(t,"mixin",function(){return u});var a=r("cebc"),n=(r("ac6a"),r("456d"),r("2f62")),u={data:function(){return{breadcrumb:0,breadcrumbQuery:{test:1}}},beforeRouteLeave:function(e,t,r){var a=Object.keys(e.query);Array.isArray(a)&&(this.SET_POP_BREADCRUMB(e.query),this.SET_SUB_MENU_INFO()),r()},methods:Object(a["a"])({},Object(n["d"])(["SET_SUB_MENU_INFO","SET_POP_BREADCRUMB"]),{goToPage:function(e){this.$router.push(e)}})}},"3a39":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[e.breadcrumb>0?r("a-breadcrumb",[r("a-breadcrumb-item",[r("router-link",{attrs:{to:{path:"/account"}}},[e._v("推广运营")])],1),e.breadcrumb>=1?r("a-breadcrumb-item",[r("router-link",{attrs:{to:{path:"/plan",query:e.accountQuery}}},[e._v("账户|"+e._s(e.accountQuery.accountName))])],1):e._e(),e.breadcrumb>=2?r("a-breadcrumb-item",[r("router-link",{attrs:{to:{path:"/unit",query:e.planQuery}}},[e._v("计划|"+e._s(e.planQuery.planName))])],1):e._e(),e.breadcrumb>=3?r("a-breadcrumb-item",[e._v("\n      单元|"+e._s(e.unitQuery.unitName)+"\n    ")]):e._e()],1):e._e(),e._t("default")],2)},n=[],u=(r("6762"),r("2fdb"),r("ac6a"),r("456d"),r("cebc")),o=r("2f62"),c={data:function(){return{}},computed:Object(u["a"])({},Object(o["e"])({query:function(e){return e.permission.popBreadcrumb}}),{breadcrumb:function(){var e=Object.keys(this.query).filter(function(e){return["account","plan","unit"].includes(e)});return e.length},accountQuery:function(){return this.getUrlParams("account")},planQuery:function(){return this.getUrlParams("plan")},unitQuery:function(){return this.getUrlParams("unit")}}),create:function(){},methods:{getUrlParams:function(e){var t=this;if(!e)return{};if(0===Object.keys(this.query).length)return{};var r={account:["account","accountName"],plan:["account","plan","accountName","planName"],unit:["account","plan","unit","accountName","planName","unitName"]},a={};return r[e].forEach(function(e){(t.query[e]||0===t.query[e])&&(a[e]=t.query[e])}),console.log(a),a}}},i=c,s=r("2877"),m=Object(s["a"])(i,a,n,!1,null,null,null);t["default"]=m.exports},6188:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("page-view",[r("div",{attrs:{id:"components-form-demo-advanced-search"}},[r("a-form",{staticClass:"ant-advanced-search-form",attrs:{form:e.form},on:{submit:e.handleSearch}},[r("a-row",{attrs:{gutter:24}},[r("a-col",{attrs:{span:8}},[r("a-form-item",{attrs:{label:"日期"}},[r("a-range-picker",{style:{width:"256px"},model:{value:e.defaultDate,callback:function(t){e.defaultDate=t},expression:"defaultDate"}},[r("template",{slot:"renderExtraFooter"},[e._v("可选区间90天")])],2)],1)],1),r("a-col",{attrs:{span:8}},[r("a-button",{on:{click:function(t){return e.timeSearch(-1)}}},[e._v("上一天")]),r("a-button",{style:{marginLeft:"8px"},on:{click:function(t){return e.timeSearch(1)}}},[e._v("下一天")]),r("a-button",{style:{marginLeft:"8px"},attrs:{type:"primary"},on:{click:function(t){return e.$refs.table.refresh(!0)}}},[e._v("搜索")]),r("a-button",{style:{marginLeft:"8px"},on:{click:function(){return e.queryParam={}}}},[e._v("重置")]),r("a",{style:{marginLeft:"8px",fontSize:"12px"},on:{click:e.toggle}},[e._v("\n            高级搜索\n            "),r("a-icon",{attrs:{type:e.expand?"up":"down"}})],1)],1)],1),r("a-row",{style:{display:e.count?"block":"none"},attrs:{gutter:24}},[r("a-col",{attrs:{span:8}},[r("a-form-item",{attrs:{label:"关键词"}},[r("a-auto-complete",{attrs:{placeholder:"输入关键词"},on:{search:e.handleSearchKeyword},model:{value:e.queryParam.onlyKeywordId,callback:function(t){e.$set(e.queryParam,"onlyKeywordId",t)},expression:"queryParam.onlyKeywordId"}},[r("template",{slot:"dataSource"},e._l(e.otherParam.keywordSource,function(t){return r("a-select-option",{key:t.keywordId+""},[e._v(e._s(t.keyword))])}),1)],2)],1)],1),r("a-col",{attrs:{span:8}},[r("a-form-item",{attrs:{label:"搜索词"}},[r("a-auto-complete",{attrs:{placeholder:"输入搜索词"},on:{search:e.handleSearchQuery},model:{value:e.queryParam.onlyQuerywordId,callback:function(t){e.$set(e.queryParam,"onlyQuerywordId",t)},expression:"queryParam.onlyQuerywordId"}},[r("template",{slot:"dataSource"},e._l(e.otherParam.querySource,function(t){return r("a-select-option",{key:t.keywordId+""},[e._v(e._s(t.keyword))])}),1)],2)],1)],1)],1)],1)],1),r("s-table",{ref:"table",attrs:{orignColumns:e.columns,data:e.loadData,scroll:{x:110},pageSize:20,bordered:"",size:"middle"},scopedSlots:e._u([{key:"accountName",fn:function(t,a){return r("span",{},[r("a",{attrs:{href:"javascipt:;"},on:{click:function(r){return e.goToPage({path:"/plan",query:{account:a.accountId,accountName:t}})}}},[e._v(e._s(t))])])}}])})],1)},n=[],u=(r("a481"),r("28a5"),r("2af9")),o=r("732a"),c=r("c1df"),i=r.n(c),s=r("ca00"),m=r("291f"),d=r("3a39"),l={name:"clue-out-txid-list",components:{STable:u["q"],Ellipsis:u["g"],PageView:d["default"]},mixins:[m["mixin"]],data:function(){var e=this;return{dateFormat:"YYYY-MM-DD",dateIntFormat:"YYYYMMDD",expand:!1,form:this.$form.createForm(this),brandSource:[],queryParam:{startTime:"",endTime:""},otherParam:{sectionDay:-1,isRefreshData:!1,isMonitorTime:!1,isOneDayTime:!1,keywordSource:[],keyupValue:[],querySource:[]},columns:[],loadData:function(t){e.queryParam.startTime||(e.defaultDate=e.generatorDate(-1));var r=/[0-9]/;if(!e.queryParam.onlyKeywordId||r.test(e.queryParam.onlyKeywordId)){if(!e.queryParam.onlyQuerywordId||r.test(e.queryParam.onlyQuerywordId))return Object(o["a"])(Object.assign(t,e.queryParam)).then(function(e){return e});e.$notification.info({message:"提示",description:"请选择一个搜索词"})}else e.$notification.info({message:"提示",description:"请选择一个关键词"})},CrmClass20025:[],defaultDate:[]}},watch:{defaultDate:function(e){if(0!=e.length)return this.otherParam.originTime=e[0].format(this.dateFormat),this.queryParam.startTime=e[0].format(this.dateIntFormat),void(this.queryParam.endTime=e[1].format(this.dateIntFormat));delete this.queryParam.startTime,delete this.queryParam.endTime}},created:function(){var e=this;Object(o["b"])().then(function(t){t.success&&(e.columns=t.data)})},computed:{count:function(){return this.expand}},methods:{moment:i.a,timeSearch:function(e){this.defaultDate=this.generatorDate(e,new Date(this.otherParam.originTime)),this.$refs.table.refresh(!0)},generatorDate:function(e,t){t||(t=new Date),this.otherParam.sectionDay=e;var r=Object(s["b"])(e,t).split(",");return this.queryParam.startTime=r[0].replace(/-/g,""),this.queryParam.endTime=r[1].replace(/-/g,""),[this.moment(r[0],this.dateFormat),this.moment(r[1],this.dateFormat)]},handleSearch:function(e){e.preventDefault(),this.form.validateFields(function(e,t){console.log("error",e),console.log("Received values of form: ",t)})},toggle:function(){this.expand=!this.expand},handleSearchKeyword:function(e){this.handleSearchKeywordByType(e,1)},handleSearchQuery:function(e){this.handleSearchKeywordByType(e,2)},handleSearchKeywordByType:function(e,t){var r=this,a=/[\u4E00-\u9FA5\uF900-\uFA2D]/,n=/[0-9]/;(a.test(e)||n.test(e))&&(a.test(e)&&(e=e.replace(/[0-9]/g,"").replace("[]","").replace(/[a-zA-Z]/g,"")),this.otherParam.keyupValue[this.otherParam.keyupValue.length-1]!=e&&(this.otherParam.keyupValue.push(e),setTimeout(function(){Object(o["o"])({keyword:r.otherParam.keyupValue[r.otherParam.keyupValue.length-1].replace(/ /g,"")}).then(function(e){var a=e.data.map(function(e){return{keywordId:e.keywordId,keyword:"["+e.keywordId+"]"+e.keyword}});switch(t){case 1:r.otherParam.keywordSource=a;break;case 2:r.otherParam.querySource=a;break}for(var n=r.otherParam.keyupValue.length-1;n>=0;n--)n>0&&r.otherParam.keyupValue.splice(0,1)})},1e3)))}}},y=l,f=(r("df7f"),r("2877")),h=Object(f["a"])(y,a,n,!1,null,null,null);t["default"]=h.exports},"732a":function(e,t,r){"use strict";r.d(t,"e",function(){return n}),r.d(t,"f",function(){return u}),r.d(t,"g",function(){return o}),r.d(t,"h",function(){return c}),r.d(t,"m",function(){return i}),r.d(t,"n",function(){return s}),r.d(t,"i",function(){return m}),r.d(t,"j",function(){return d}),r.d(t,"a",function(){return l}),r.d(t,"b",function(){return y}),r.d(t,"o",function(){return f}),r.d(t,"c",function(){return h}),r.d(t,"d",function(){return p}),r.d(t,"k",function(){return b}),r.d(t,"l",function(){return w});var a=r("b775");function n(e){return Object(a["b"])({url:"/KeywordSummary/GetKeywordQueryWater",method:"get",params:e})}function u(e){return Object(a["b"])({url:"/KeywordSummary/KeywordQueryWaterColunms",method:"get",params:e})}function o(e){return Object(a["b"])({url:"/KeywordSummary/GetKeywordWater",method:"get",params:e})}function c(e){return Object(a["b"])({url:"/KeywordSummary/KeywordWaterColunms",method:"get",params:e})}function i(e){return Object(a["b"])({url:"/KeywordSummary/GetUnit",method:"get",params:e})}function s(e){return Object(a["b"])({url:"/KeywordSummary/UnitColunms",method:"get",params:e})}function m(e){return Object(a["b"])({url:"/KeywordSummary/GetPlan",method:"get",params:e})}function d(e){return Object(a["b"])({url:"/KeywordSummary/PlanColunms",method:"get",params:e})}function l(e){return Object(a["b"])({url:"/KeywordSummary/GetAccount",method:"get",params:e})}function y(e){return Object(a["b"])({url:"/KeywordSummary/AccountColunms",method:"get",params:e})}function f(e){return Object(a["b"])({url:"/SEMKeyword/GetKeywordSearch",method:"get",params:e})}function h(e){return Object(a["b"])({url:"/KeywordSummary/GetKeyword",method:"get",params:e})}function p(e){return Object(a["b"])({url:"/KeywordSummary/KeywordColunms",method:"get",params:e})}function b(e){return Object(a["b"])({url:"/KeywordSummary/GetQuery",method:"get",params:e})}function w(e){return Object(a["b"])({url:"/KeywordSummary/QueryColunms",method:"get",params:e})}},b4de:function(e,t,r){},df7f:function(e,t,r){"use strict";var a=r("b4de"),n=r.n(a);n.a}}]);