(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a9f90f6"],{"9b64":function(a,t,e){"use strict";e.d(t,"a",function(){return r});var n=e("b775");function r(a){return Object(n["b"])({url:"/brandindex",method:"get",params:a})}},a968:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("a-auto-complete",{style:"width:"+a.autoWidth,attrs:{dataSource:a.pageData.brandName,value:a.modelBrandId,placeholder:"输入品牌"},on:{search:a.handleSearchBrand,select:a.onSelect}})},r=[],d=(e("6b54"),e("4917"),e("a481"),e("9b64")),u={props:{autoWidth:{type:String,default:"180px"},brandId:{type:String,default:""}},data:function(){return{pageData:{brandSource:[]},modelBrandId:""}},watch:{brandId:function(a){a||(this.modelBrandId=a)}},methods:{handleSearchBrand:function(a){var t=this;this.modelBrandId=a;var e=/[\u4E00-\u9FA5\uF900-\uFA2D]/,n=/[0-9]+/;if(e.test(a)||n.test(a)){var r={BrandName:a.replace(/[0-9]/g,"").replace("[]","")};n.test(a)&&(r={BrandId:a.match(n)[0]}),Object(d["a"])(r).then(function(a){var e=a.data.map(function(a){return{brandId:a.brandId,brandName:a.brandName+"["+a.brandId+"]"}});t.pageData={brandSource:e,brandName:e.map(function(a){return a.brandName})}})}},onSelect:function(a){this.modelBrandId=a;var t=this.pageData,e=t.brandSource,n=t.brandName,r=n.indexOf(a),d=e[r].brandId;this.$emit("result",d.toString())}}},c=u,o=e("2877"),i=Object(o["a"])(c,n,r,!1,null,null,null);t["default"]=i.exports}}]);