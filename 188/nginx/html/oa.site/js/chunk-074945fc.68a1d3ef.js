(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-074945fc"],{a726:function(e,t,a){},af3c:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{attrs:{id:"components-form-demo-advanced-search"}},[a("a-form",{staticClass:"ant-advanced-search-form",attrs:{form:e.form},on:{submit:e.handleSearch}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:8}},[a("a-form-item",{attrs:{label:"日期"}},[a("a-range-picker",{style:{width:"256px"},model:{value:e.defaultDate,callback:function(t){e.defaultDate=t},expression:"defaultDate"}},[a("template",{slot:"renderExtraFooter"},[e._v("可选区间90天")])],2)],1)],1),a("a-col",{attrs:{span:8}},[a("a-button",{on:{click:function(t){return e.timeSearch(-1)}}},[e._v("上一天")]),a("a-button",{style:{marginLeft:"8px"},on:{click:function(t){return e.timeSearch(1)}}},[e._v("下一天")]),a("a-button",{style:{marginLeft:"8px"},attrs:{type:"primary"},on:{click:function(t){return e.$refs.table.refresh(!0)}}},[e._v("搜索")]),a("a-button",{style:{marginLeft:"8px"},on:{click:function(){return e.queryParam={}}}},[e._v("重置")]),a("a",{style:{marginLeft:"8px",fontSize:"12px"},on:{click:e.toggle}},[e._v("\n            高级搜索\n            "),a("a-icon",{attrs:{type:e.expand?"up":"down"}})],1)],1)],1),a("a-row",{style:{display:e.count?"block":"none"},attrs:{gutter:24}},[a("a-col",{attrs:{span:8}},[a("a-form-item",{attrs:{label:"API状态"}},[a("a-select",{staticStyle:{width:"120px"},attrs:{defaultValue:"-1"},on:{change:function(t){return e.queryParam.status=t}}},[a("a-select-option",{attrs:{value:"-1"}},[e._v("全部")]),a("a-select-option",{attrs:{value:"0"}},[e._v("暂停")]),a("a-select-option",{attrs:{value:"1"}},[e._v("正常")]),a("a-select-option",{attrs:{value:"2"}},[e._v("异常")])],1)],1)],1)],1)],1)],1),a("s-table",{ref:"table",attrs:{orignColumns:e.columns,data:e.loadData,scroll:{x:110},pageSize:20,bordered:"",size:"middle"},scopedSlots:e._u([{key:"notConnectCountRatio",fn:function(t){return a("span",{},[a("ellipsis",{attrs:{length:5,tooltip:""}},[e._v(e._s(t))])],1)}},{key:"statusName",fn:function(t,r){return a("span",{staticClass:"table-operation"},[e._v("\n      "+e._s(t)+"\n      "),1==r.status?a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.setApiStatus(r,0)}}},[e._v("暂停")]):2==r.status?a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.setApplyStatus(r)}}},[e._v("申请")]):a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.setApiStatus(r,1)}}},[e._v("启用")]),a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("router-link",{attrs:{to:{path:"/SEM/Account/"+r.accountId+"/Error",query:{accountId:r.accountId,title:"异常["+r.accountId+"]详情"}}}},[e._v("异常信息查看")])],1),a("a-menu-item",[a("router-link",{attrs:{to:{path:"/SEM/Account/"+r.accountId+"/ErrorApply",query:{accountId:r.accountId,title:"启用["+r.accountId+"]申请"}}}},[e._v("启用申请")])],1),a("a-menu-item",{on:{click:function(t){return e.setApplyStatus(r)}}},[e._v("修改API配置")]),a("a-menu-item",[a("a",{attrs:{type:"primary"},on:{click:function(t){return e.dropdownOpen(r,"employee")}}},[e._v("分配媒介人员")])])],1),a("a",{attrs:{href:"javascript:;"}},[e._v("\n          更多\n          "),a("a-icon",{attrs:{type:"down"}})],1)],1)],1)}}])}),a("a-drawer",{attrs:{title:"选择媒介人员",placement:"right",closable:!1,visible:e.pageVariable.employee},on:{close:function(){return e.pageVariable.employee=!1}}},[a("a-directory-tree",{attrs:{multiple:"",defaultExpandAll:"",autoExpandParent:!0,treeData:e.pageData.employeeData},on:{select:e.onSelectEmployee}})],1),a("a-drawer",{attrs:{title:"修改账户API配置信息",width:720,visible:e.pageVariable.accountAuth,wrapStyle:{height:"calc(100% - 108px)",overflow:"auto",paddingBottom:"108px"}},on:{close:function(){return e.pageVariable.accountAuth=!1}}},[a("a-form",{attrs:{form:e.form,layout:"vertical",hideRequiredMark:""}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"Name"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"Please enter user name"}]}],expression:"['name', {\n                rules: [{ required: true, message: 'Please enter user name' }]\n              }]"}],attrs:{placeholder:"Please enter user name"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"Url"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{rules:[{required:!0,message:"please enter url"}]}],expression:"['url', {\n                rules: [{ required: true, message: 'please enter url' }]\n              }]"}],staticStyle:{width:"100%"},attrs:{addonBefore:"http://",addonAfter:".com",placeholder:"please enter url"}})],1)],1)],1),a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"Owner"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["owner",{rules:[{required:!0,message:"Please select an owner"}]}],expression:"['owner', {\n                rules: [{ required: true, message: 'Please select an owner' }]\n              }]"}],attrs:{placeholder:"Please a-s an owner"}},[a("a-select-option",{attrs:{value:"xiao"}},[e._v("Xiaoxiao Fu")]),a("a-select-option",{attrs:{value:"mao"}},[e._v("Maomao Zhou")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"Type"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:[{required:!0,message:"Please choose the type"}]}],expression:"['type', {\n                rules: [{ required: true, message: 'Please choose the type' }]\n              }]"}],attrs:{placeholder:"Please choose the type"}},[a("a-select-option",{attrs:{value:"private"}},[e._v("Private")]),a("a-select-option",{attrs:{value:"public"}},[e._v("Public")])],1)],1)],1)],1),a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"Approver"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["approver",{rules:[{required:!0,message:"Please choose the approver"}]}],expression:"['approver', {\n                rules: [{ required: true, message: 'Please choose the approver' }]\n              }]"}],attrs:{placeholder:"Please choose the approver"}},[a("a-select-option",{attrs:{value:"jack"}},[e._v("Jack Ma")]),a("a-select-option",{attrs:{value:"tom"}},[e._v("Tom Liu")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"DateTime"}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["dateTime",{rules:[{required:!0,message:"Please choose the dateTime"}]}],expression:"['dateTime', {\n                rules: [{ required: true, message: 'Please choose the dateTime' }]\n              }]"}],staticStyle:{width:"100%"},attrs:{getPopupContainer:function(e){return e.parentNode}}})],1)],1)],1),a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"Description"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",{rules:[{required:!0,message:"Please enter url description"}]}],expression:"['description', {\n                rules: [{ required: true, message: 'Please enter url description' }]\n              }]"}],attrs:{rows:4,placeholder:"please enter url description"}})],1)],1)],1)],1),a("div",{style:{position:"absolute",left:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right"}},[a("a-button",{style:{marginRight:"8px"},on:{click:function(){return e.pageVariable.accountAuth=!1}}},[e._v("取消")]),a("a-button",{attrs:{type:"primary"},on:{click:e.setAccountAuth}},[e._v("提交")])],1)],1)],1)},o=[],n=a("bd86"),s=a("2af9"),i=a("b775");function c(e){return Object(i["b"])({url:"/OldEmployee/GetEmployeeList",method:"get",params:e})}function l(e){return Object(i["b"])({url:"/SEMAccountNew/SetEmployee",method:"get",params:e})}function u(e){return Object(i["b"])({url:"/SEMAccountNew",method:"get",params:e})}function p(e){return Object(i["b"])({url:"/SEMAccountNew/Colunms",method:"get",params:e})}var d={name:"clue-out-txid-list",components:{STable:s["q"],Ellipsis:s["g"]},data:function(){var e=this;return{pageVariable:{employee:!1,accountAuth:!1},pageData:{thisAccount:{},employeeData:[]},expand:!1,form:this.$form.createForm(this),queryParam:{startTime:"",endTime:""},columns:[],loadData:function(t){return u(Object.assign(t,e.queryParam)).then(function(e){return e})},defaultDate:[]}},watch:Object(n["a"])({},"pageVariable.employee",function(e){1==e&&this.getMeijie()}),created:function(){var e=this;p().then(function(t){t.success&&(e.columns=t.data)})},computed:{count:function(){return this.expand}},methods:{setAccountAuth:function(e){console.log("提交api表单",e)},dropdownOpen:function(e,t){this.pageData.thisAccount=e,this.pageVariable[t]=!0},openNotificationWithIcon:function(e,t){this.$notification[e]({message:"操作提醒",description:t})},onSelectEmployee:function(e){var t=this,a=t.pageData.thisAccount;this.$confirm({title:"确认选择【"+t.pageData.employeeData.filter(function(t){return t.key==e[0]})[0].title+"】么？",content:"来自账户："+a.accountName,okText:"确认",cancelText:"取消",maskClosable:!0,onOk:function(r){l({AccountMasterIn:e[0],AccountId:a.accountId}).then(function(e){e.success?(t.openNotificationWithIcon("success",e.msg),t.pageVariable.employee=!1,t.$refs.table.refresh(!0)):t.openNotificationWithIcon("error",e.msg),r()})}})},getMeijie:function(){var e=this;0==this.pageData.employeeData.length&&c({DepartMent:"42|29",EIds:"1638|1650|1655"}).then(function(t){e.pageData.employeeData=t.data})},setApiStatus:function(e,t){console.log(e,t)},setApplyStatus:function(e){this.pageData.thisAccount=e,this.pageVariable.accountAuth=!0},handleSearch:function(e){e.preventDefault(),this.form.validateFields(function(e,t){console.log("error",e),console.log("Received values of form: ",t)})},toggle:function(){this.expand=!this.expand},handleSearchKeyword:function(e){this.handleSearchKeywordByType(e,1)},handleSearchQuery:function(e){this.handleSearchKeywordByType(e,2)}}},m=d,f=(a("dd4f"),a("2877")),h=Object(f["a"])(m,r,o,!1,null,null,null);t["default"]=h.exports},dd4f:function(e,t,a){"use strict";var r=a("a726"),o=a.n(r);o.a}}]);