(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fb6db9b"],{"10f8":function(t,e,a){"use strict";a.d(e,"a",function(){return r});var n=a("b775");function r(t){return Object(n["b"])({url:"/brand",method:"get",params:t})}},"3c49":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"components-form-demo-advanced-search"}},[a("a-form",{staticClass:"ant-advanced-search-form",attrs:{form:t.form},on:{submit:t.handleSearch}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:8}},[a("a-form-item",{attrs:{label:"日期"}},[a("a-range-picker",{on:{change:t.onChange}},[a("template",{slot:"renderExtraFooter"},[t._v("可选区间30天")])],2)],1)],1),a("a-col",{attrs:{span:8}},[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$refs.table.refresh(!0)}}},[t._v("搜索")]),a("a-button",{style:{marginLeft:"8px"},on:{click:function(){return t.queryParam={}}}},[t._v("重置")]),a("a",{style:{marginLeft:"8px",fontSize:"12px"},on:{click:t.toggle}},[t._v("\n            高级搜索\n            "),a("a-icon",{attrs:{type:t.expand?"up":"down"}})],1)],1),a("a-col",{attrs:{span:8}},[a("span",[t._v("默认展示最近7天的数据")])])],1),a("a-row",{style:{display:t.count?"block":"none"},attrs:{gutter:24}},[a("a-col",{attrs:{span:8}},[a("a-form-item",{attrs:{label:"平台"}},[a("a-select",{on:{focus:function(e){return t.loadSelectDataCrmClass(20025)}},model:{value:t.queryParam.nexId,callback:function(e){t.$set(t.queryParam,"nexId",e)},expression:"queryParam.nexId"}},t._l(t.CrmClass20025,function(e){return a("a-select-option",{key:e.key,attrs:{value:e.value}},[t._v(t._s(e.name))])}),1)],1)],1),a("a-col",{attrs:{span:8}},[a("a-form-item",{attrs:{label:"品牌"}},[a("a-auto-complete",{attrs:{placeholder:"输入品牌名称"},on:{search:t.handleSearchBrand},model:{value:t.queryParam.brand,callback:function(e){t.$set(t.queryParam,"brand",e)},expression:"queryParam.brand"}},[a("template",{slot:"dataSource"},t._l(t.brandSource,function(e){return a("a-select-option",{key:e.brandId+""},[t._v(t._s(e.brandName))])}),1)],2)],1)],1),a("a-col",{attrs:{span:8}},[a("a-form-item",{attrs:{label:"是否在线"}},[a("a-select",{attrs:{defaultValue:"0"},model:{value:t.queryParam.brandOnline,callback:function(e){t.$set(t.queryParam,"brandOnline",e)},expression:"queryParam.brandOnline"}},[a("a-select-option",{attrs:{value:"0"}},[t._v("全部")]),a("a-select-option",{attrs:{value:"1"}},[t._v("在线")]),a("a-select-option",{attrs:{value:"2"}},[t._v("不在线")])],1)],1)],1)],1)],1)],1),a("s-table",{ref:"table",attrs:{orignColumns:t.columns,data:t.loadData,bordered:"",size:"middle",showPagination:!1},scopedSlots:t._u([{key:"notConnectCountRatio",fn:function(e){return a("span",{},[a("ellipsis",{attrs:{length:5,tooltip:""}},[t._v(t._s(e))])],1)}}])}),a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:12}},[a("v-chart",{attrs:{"force-fit":!0,height:t.height,data:t.chartData,scale:t.scale}},[a("v-tooltip"),a("v-axis"),a("v-legend"),a("v-line",{attrs:{position:"month*temperature",color:"city"}}),a("v-point",{attrs:{position:"month*temperature",color:"city",size:4,"v-style":t.style,shape:"circle"}})],1)],1),a("a-col",{attrs:{span:12}},[a("v-chart",{attrs:{"force-fit":!0,height:t.height,data:t.chartData2,scale:t.scale}},[a("v-tooltip"),a("v-axis",{attrs:{"data-key":"temperature",label:t.labelFormat}}),a("v-legend"),a("v-line",{attrs:{position:"month*temperature",color:"city"}}),a("v-point",{attrs:{position:"month*temperature",color:"city",size:4,"v-style":t.style,shape:"circle"}})],1)],1)],1)],1)},r=[],o=(a("7f7f"),a("a481"),a("c5f6"),a("2af9")),u=a("b2f8"),s=a("b35f"),c=a("10f8"),i=(a("7104"),{textStyle:{fill:"#aaaaaa"},formatter:function(t){return t+"%"}}),l={name:"clue-out-txid-list",components:{STable:o["q"],Ellipsis:o["g"]},data:function(){var t=this;return{expand:!1,form:this.$form.createForm(this),brandSource:[],chartData:[],chartData2:[],labelFormat:i,scale:[{dataKey:"month",min:0,max:1}],height:400,style:{stroke:"#fff",lineWidth:1},queryParam:{},columns:[],loadData:function(e){if(!t.queryParam.brand||Number(t.queryParam.brand))return Object(u["e"])(Object.assign(e,t.queryParam)).then(function(t){return t});t.$notification.info({message:"提示",description:"请选择一个品牌"})},CrmClass20025:[]}},created:function(){var t=this;Object(u["k"])().then(function(e){e.success&&(e.data.filter(function(t){return"first"==t.dataIndex})[0].align="left",t.columns=e.data)})},computed:{count:function(){return this.expand}},methods:{handleSearch:function(t){t.preventDefault(),this.form.validateFields(function(t,e){console.log("error",t),console.log("Received values of form: ",e)})},handleReset:function(){window.location.href=window.location.href,this.form.table.resetFields()},onChange:function(t,e){e&&(this.queryParam.KfTime=e.join(","),","!=this.queryParam.KfTime)||delete this.queryParam.KfTime},toggle:function(){this.expand=!this.expand},handleChange:function(t){console.log("selected ".concat(t))},loadSelectDataCrmClass:function(t){var e=this;0==this["CrmClass"+t].length&&Object(s["a"])({ParentId:t}).then(function(a){a.data&&a.data.length>0&&(e["CrmClass"+t]=a.data)})},handleSearchBrand:function(t){var e=this,a=/[\u4E00-\u9FA5\uF900-\uFA2D]/,n=/[0-9]/;(a.test(t)||n.test(t))&&(a.test(t)&&(t=t.replace(/[0-9]/g,"").replace("[]","")),Object(c["a"])({BrandName:t}).then(function(t){e.brandSource=t.data.map(function(t){return{brandId:t.brandId,brandName:"["+t.brandId+"]"+t.name}})}))}}},m=l,d=(a("4ada"),a("2877")),f=Object(d["a"])(m,n,r,!1,null,null,null);e["default"]=f.exports},"4ada":function(t,e,a){"use strict";var n=a("7d11"),r=a.n(n);r.a},"7d11":function(t,e,a){},b2f8:function(t,e,a){"use strict";a.d(e,"c",function(){return r}),a.d(e,"a",function(){return o}),a.d(e,"f",function(){return u}),a.d(e,"d",function(){return s}),a.d(e,"j",function(){return c}),a.d(e,"e",function(){return i}),a.d(e,"k",function(){return l}),a.d(e,"i",function(){return m}),a.d(e,"h",function(){return d}),a.d(e,"b",function(){return f}),a.d(e,"g",function(){return b});var n=a("b775");function r(t){return Object(n["b"])({url:"/KfSummary/DownDateCount",method:"get",responseType:"blob",params:t})}function o(t){return Object(n["b"])({url:"/KfSummary/GetBrandCount",method:"get",params:t})}function u(t){return Object(n["b"])({url:"/KfSummary/BrandColunms",method:"get",params:t})}function s(t){return Object(n["b"])({url:"/KfSummary/GetMediaCount",method:"get",params:t})}function c(t){return Object(n["b"])({url:"/KfSummary/MediaColunms",method:"get",params:t})}function i(t){return Object(n["b"])({url:"/KfSummary/GetNexCount",method:"get",params:t})}function l(t){return Object(n["b"])({url:"/KfSummary/NexColunms",method:"get",params:t})}function m(t){return Object(n["b"])({url:"/KfSummary/GetHourCount",method:"get",params:t})}function d(t){return Object(n["b"])({url:"/KfSummary/HourColunms",method:"get",params:t})}function f(t){return Object(n["b"])({url:"/KfSummary/GetDateCount",method:"get",params:t})}function b(t){return Object(n["b"])({url:"/KfSummary/DateColunms",method:"get",params:t})}},b35f:function(t,e,a){"use strict";a.d(e,"a",function(){return r});var n=a("b775");function r(t){return Object(n["b"])({url:"/crmClass",method:"get",params:t})}}}]);