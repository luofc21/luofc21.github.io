(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{801:function(i,o,s){},882:function(i,o,s){var e=s(1),n=s(883),t=s(197);e({target:"Array",proto:!0},{fill:n}),t("fill")},883:function(i,o,s){"use strict";var e=s(16),n=s(196),t=s(15);i.exports=function(i){for(var o=e(this),s=t(o.length),p=arguments.length,a=n(p>1?arguments[1]:void 0,s),r=p>2?arguments[2]:void 0,h=void 0===r?s:n(r,s);h>a;)o[a++]=i;return o}},884:function(i,o,s){s(1)({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},885:function(i,o,s){s(1)({target:"Function",proto:!0},{bind:s(329)})},886:function(i,o,s){"use strict";s(801)},941:function(i,o,s){"use strict";s.r(o);s(882),s(884),s(118),s(191),s(885);var e={data:function(){return{height:0}},mounted:function(){this.height=window.innerHeight-58+"px";var i,o,s,e=document.querySelector("canvas"),n=e.getContext("2d"),t=["#003049","#D62828","#F77F00","#FDFFFC","#2EC4B6"],p=[];function a(){i=[window.innerWidth,window.innerHeight],e.width=i[0],e.height=i[1],p=[],o=70}function r(){(s=[0,0])[0]=Math.ceil(i[0]/o)+1,s[1]=Math.ceil(i[1]/o)+1;for(var e=0;e<s[0];e++){p[e]=[];for(var n=0;n<s[1];n++)p[e][n]={position:[e*o-o/2,n*o-o/2],colorIndex:z(0,5),shape:{colorIndex:z(0,5),type:z(0,13),size:1}}}}function h(i){var s=Math.sqrt(Math.pow(i.position[0]+o/2-v[0],2)+Math.pow(i.position[1]+o/2-v[1],2))/200;return s<.1?0:s>1?1:s}function c(){for(var i=0;i<s[0];i++)for(var e=0;e<s[1];e++)n.fillStyle=t[p[i][e].colorIndex],n.fillRect(p[i][e].position[0],p[i][e].position[1],o,o),n.fillStyle=t[p[i][e].shape.colorIndex],n.beginPath(),l(p[i][e]),n.fill()}function l(i){switch(i.shape.type){case 1:n.arc(i.position[0]+o/2,i.position[1]+o/2,.5*o*i.shape.size,0,2*Math.PI);break;case 2:n.moveTo(i.position[0],i.position[1]),n.bezierCurveTo(i.position[0],i.position[1]+o/1.5*i.shape.size,i.position[0]+o,i.position[1]+o/1.5*i.shape.size,i.position[0]+o,i.position[1]);break;case 3:n.moveTo(i.position[0],i.position[1]+o),n.bezierCurveTo(i.position[0],i.position[1]+o-o/1.5*i.shape.size,i.position[0]+o,i.position[1]+o-o/1.5*i.shape.size,i.position[0]+o,i.position[1]+o);break;case 4:n.moveTo(i.position[0],i.position[1]),n.bezierCurveTo(i.position[0]+o/1.5*i.shape.size,i.position[1],i.position[0]+o/1.5*i.shape.size,i.position[1]+o,i.position[0],i.position[1]+o);break;case 5:n.moveTo(i.position[0]+o,i.position[1]),n.bezierCurveTo(i.position[0]+o-o/1.5*i.shape.size,i.position[1],i.position[0]+o-o/1.5*i.shape.size,i.position[1]+o,i.position[0]+o,i.position[1]+o);break;case 6:n.moveTo(i.position[0],i.position[1]),n.lineTo(i.position[0],i.position[1]+o*i.shape.size),n.lineTo(i.position[0]+o*i.shape.size,i.position[1]),n.lineTo(i.position[0],i.position[1]);break;case 7:n.moveTo(i.position[0]+o,i.position[1]),n.lineTo(i.position[0]+o,i.position[1]+o*i.shape.size),n.lineTo(i.position[0]+o-o*i.shape.size,i.position[1]),n.lineTo(i.position[0]+o,i.position[1]);break;case 8:n.moveTo(i.position[0],i.position[1]),n.lineTo(i.position[0]+o/2*i.shape.size,i.position[1]),n.lineTo(i.position[0]+o/2*i.shape.size,i.position[1]+o),n.lineTo(i.position[0],i.position[1]+o);break;case 9:n.moveTo(i.position[0],i.position[1]),n.lineTo(i.position[0],i.position[1]+o/2*i.shape.size),n.lineTo(i.position[0]+o,i.position[1]+o/2*i.shape.size),n.lineTo(i.position[0]+o,i.position[1]);break;case 10:n.moveTo(i.position[0],i.position[1]),n.lineTo(i.position[0],i.position[1]+o*i.shape.size),n.bezierCurveTo(i.position[0]+o*i.shape.size/2,i.position[1]+o*i.shape.size,i.position[0]+o*i.shape.size,i.position[1]+o*i.shape.size/2,i.position[0]+o*i.shape.size,i.position[1]),n.lineTo(i.position[0],i.position[1]);break;case 11:n.moveTo(i.position[0]+o,i.position[1]+o),n.lineTo(i.position[0]+o-o*i.shape.size,i.position[1]+o),n.bezierCurveTo(i.position[0]+o-o*i.shape.size,i.position[1]+o-o*i.shape.size/2,i.position[0]+o-o*i.shape.size/2,i.position[1]+o-o*i.shape.size,i.position[0]+o,i.position[1]+o-o*i.shape.size),n.lineTo(i.position[0]+o,i.position[1]+o);break;case 12:n.moveTo(i.position[0]+o,i.position[1]),n.lineTo(i.position[0]+o-o*i.shape.size,i.position[1]),n.bezierCurveTo(i.position[0]+o-o*i.shape.size,i.position[1]+o*i.shape.size/2,i.position[0]+o-o*i.shape.size/2,i.position[1]+o*i.shape.size,i.position[0]+o,i.position[1]+o*i.shape.size),n.lineTo(i.position[0]+o,i.position[1]);break;case 13:n.moveTo(i.position[0],i.position[1]+o),n.lineTo(i.position[0]+o*i.shape.size,i.position[1]+o),n.bezierCurveTo(i.position[0]+o*i.shape.size,i.position[1]+o-o*i.shape.size/2,i.position[0]+o*i.shape.size/2,i.position[1]+o-o*i.shape.size,i.position[0],i.position[1]+o-o*i.shape.size),n.lineTo(i.position[0],i.position[1]+o)}}var u=Date.now();function z(i,o){return Math.floor(Math.random()*(o-i+1))+i}a(),r(),function i(){requestAnimationFrame(i);var o=Date.now(),s=o-u;s>1e3/60&&(u=o-s%(1e3/60),c())}(),window.addEventListener("resize",(function(){a(),r(),c()}));var v=[0,0],T=document.querySelector(".cursor");document.addEventListener("mousemove",function(i){v[0]=i.clientX,v[1]=i.clientY,function(i){for(var o=0;o<s[0];o++)for(var e=0;e<s[1];e++)p[o][e].shape.size=h(p[o][e])}(),T.style="top: ".concat(v[1],"px; left: ").concat(v[0]-319,"px")}.bind(this))}},n=(s(886),s(44)),t=Object(n.a)(e,(function(){var i=this.$createElement,o=this._self._c||i;return o("div",{staticClass:"shapescolor flex",style:{height:this.height}},[o("canvas"),this._v(" "),o("div",{staticClass:"cursor"})])}),[],!1,null,"da72d718",null);o.default=t.exports}}]);