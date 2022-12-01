var __wxAppData=__wxAppData||{};var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};if(this&&this.__g===undefined)Object.defineProperty(this,"__g",{configurable:false,enumerable:false,writable:false,value:function(){function D(e,t){if(typeof t!="undefined")e.children.push(t)}function S(e){if(typeof e!="undefined")return{tag:"virtual",wxKey:e,children:[]};return{tag:"virtual",children:[]}}function v(e){$gwxc++;if($gwxc>=16e3){throw"Dom limit exceeded, please check if there's any mistake you've made."}return{tag:"wx-"+e,attr:{},children:[],n:[],raw:{},generics:{}}}function e(e,t){t&&e.properities.push(t)}function t(e,t,r){return typeof e[r]!="undefined"?e[r]:t[r]}function u(e){console.warn("WXMLRT_"+g+":"+e)}function r(e,t){u(t+":-1:-1:-1: Template `"+e+"` is being called recursively, will be stop.")}var s=console.warn;var n=console.log;function o(){function e(){}e.prototype={hn:function(e,t){if(typeof e=="object"){var r=0;var n=false,o=false;for(var a in e){n=n|a==="__value__";o=o|a==="__wxspec__";r++;if(r>2)break}return r==2&&n&&o&&(t||e.__wxspec__!=="m"||this.hn(e.__value__)==="h")?"h":"n"}return"n"},nh:function(e,t){return{__value__:e,__wxspec__:t?t:true}},rv:function(e){return this.hn(e,true)==="n"?e:this.rv(e.__value__)},hm:function(e){if(typeof e=="object"){var t=0;var r=false,n=false;for(var o in e){r=r|o==="__value__";n=n|o==="__wxspec__";t++;if(t>2)break}return t==2&&r&&n&&(e.__wxspec__==="m"||this.hm(e.__value__))}return false}};return new e}var A=o();function T(e){var t=e.split("\n "+" "+" "+" ");for(var r=0;r<t.length;++r){if(0==r)continue;if(")"===t[r][t[r].length-1])t[r]=t[r].replace(/\s\(.*\)$/,"");else t[r]="at anonymous function"}return t.join("\n "+" "+" "+" ")}function a(M){function m(e,t,r,n,o){var a=false;var i=e[0][1];var p,u,l,f,v,c;switch(i){case"?:":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):x(e[3],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"&&":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):A.rv(p);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"||":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?A.rv(p):x(e[2],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"+":case"*":case"/":case"%":case"|":case"^":case"&":case"===":case"==":case"!=":case"!==":case">=":case"<=":case">":case"<":case"<<":case">>":p=x(e[1],t,r,n,o,a);u=x(e[2],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");switch(i){case"+":f=A.rv(p)+A.rv(u);break;case"*":f=A.rv(p)*A.rv(u);break;case"/":f=A.rv(p)/A.rv(u);break;case"%":f=A.rv(p)%A.rv(u);break;case"|":f=A.rv(p)|A.rv(u);break;case"^":f=A.rv(p)^A.rv(u);break;case"&":f=A.rv(p)&A.rv(u);break;case"===":f=A.rv(p)===A.rv(u);break;case"==":f=A.rv(p)==A.rv(u);break;case"!=":f=A.rv(p)!=A.rv(u);break;case"!==":f=A.rv(p)!==A.rv(u);break;case">=":f=A.rv(p)>=A.rv(u);break;case"<=":f=A.rv(p)<=A.rv(u);break;case">":f=A.rv(p)>A.rv(u);break;case"<":f=A.rv(p)<A.rv(u);break;case"<<":f=A.rv(p)<<A.rv(u);break;case">>":f=A.rv(p)>>A.rv(u);break;default:break}return l?A.nh(f,"c"):f;break;case"-":p=e.length===3?x(e[1],t,r,n,o,a):0;u=e.length===3?x(e[2],t,r,n,o,a):x(e[1],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");f=l?A.rv(p)-A.rv(u):p-u;return l?A.nh(f,"c"):f;break;case"!":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=!A.rv(p);return l?A.nh(f,"c"):f;case"~":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=~A.rv(p);return l?A.nh(f,"c"):f;default:s("unrecognized op"+i)}}function x(e,t,r,n,o,a){var i=e[0];var p=false;if(typeof a!=="undefined")o.ap=a;if(typeof i==="object"){var u=i[0];var l,f,v,c,s,y,b,d,h,_,g;switch(u){case 2:return m(e,t,r,n,o);break;case 4:return x(e[1],t,r,n,o,p);break;case 5:switch(e.length){case 2:l=x(e[1],t,r,n,o,p);return M?[l]:[A.rv(l)];return[l];break;case 1:return[];break;default:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);l.push(M?v:A.rv(v));return l;break}break;case 6:l=x(e[1],t,r,n,o);var w=o.ap;h=A.hn(l)==="h";f=h?A.rv(l):l;o.is_affected|=h;if(M){if(f===null||typeof f==="undefined"){return h?A.nh(undefined,"e"):undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return h||_?A.nh(undefined,"e"):undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return h||_?g?y:A.nh(y,"e"):y}else{if(f===null||typeof f==="undefined"){return undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return g?A.rv(y):y}case 7:switch(e[1][0]){case 11:o.is_affected|=A.hn(n)==="h";return n;case 3:b=A.rv(r);d=A.rv(t);v=e[1][1];if(n&&n.f&&n.f.hasOwnProperty(v)){l=n.f;o.ap=true}else{l=b&&b.hasOwnProperty(v)?r:d&&d.hasOwnProperty(v)?t:undefined}if(M){if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;y=h&&!g?A.nh(y,"e"):y;return y}}else{if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;return A.rv(y)}}return undefined}break;case 8:l={};l[e[1]]=x(e[2],t,r,n,o,p);return l;break;case 9:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);function O(e,t,r){var n,o;h=A.hn(e)==="h";_=A.hn(t)==="h";f=A.rv(e);c=A.rv(t);for(var a in c){if(r||!f.hasOwnProperty(a)){f[a]=M?_?A.nh(c[a],"e"):c[a]:A.rv(c[a])}}return e}var s=l;var j=true;if(typeof e[1][0]==="object"&&e[1][0][0]===10){l=v;v=s;j=false}if(typeof e[1][0]==="object"&&e[1][0][0]===10){var P={};return O(O(P,l,j),v,j)}else return O(l,v,j);break;case 10:l=x(e[1],t,r,n,o,p);l=M?l:A.rv(l);return l;break;case 12:var P;l=x(e[1],t,r,n,o);if(!o.ap){return M&&A.hn(l)==="h"?A.nh(P,"f"):P}var w=o.ap;v=x(e[2],t,r,n,o,p);o.ap=w;h=A.hn(l)==="h";_=N(v);f=A.rv(l);c=A.rv(v);snap_bb=K(c,"nv_");try{P=typeof f==="function"?K(f.apply(null,snap_bb)):undefined}catch(t){t.message=t.message.replace(/nv_/g,"");t.stack=t.stack.substring(0,t.stack.indexOf("\n",t.stack.lastIndexOf("at nv_")));t.stack=t.stack.replace(/\snv_/g," ");t.stack=T(t.stack);if(n.debugInfo){t.stack+="\n "+" "+" "+" at "+n.debugInfo[0]+":"+n.debugInfo[1]+":"+n.debugInfo[2];console.error(t)}P=undefined}return M&&(_||h)?A.nh(P,"f"):P}}else{if(i===3||i===1)return e[1];else if(i===11){var l="";for(var D=1;D<e.length;D++){var S=A.rv(x(e[D],t,r,n,o,p));l+=typeof S==="undefined"?"":S}return l}}}function e(e,t,r,n,o,a){if(e[0]=="11182016"){n.debugInfo=e[2];return x(e[1],t,r,n,o,a)}else{n.debugInfo=null;return x(e,t,r,n,o,a)}}return e}var f=a(true);var c=a(false);function i(e,t,r,n,o,a,i,p){{var u={is_affected:false};var l=f(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(a)||u.is_affected!=p){console.warn("A. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(a)+", "+p+" is expected")}}{var u={is_affected:false};var l=c(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(i)||u.is_affected!=p){console.warn("B. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(i)+", "+p+" is expected")}}}function y(e,t,r,n,o,a,i,p,u){var l=A.hn(e)==="n";var f=A.rv(n);var v=f.hasOwnProperty(i);var c=f.hasOwnProperty(p);var s=f[i];var y=f[p];var b=Object.prototype.toString.call(A.rv(e));var d=b[8];if(d==="N"&&b[10]==="l")d="X";var h;if(l){if(d==="A"){var _;for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");_=A.rv(e[g]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;var _;for(var O in e){f[i]=e[O];f[p]=l?O:A.nh(O,"h");_=A.rv(e[O]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<e;g++){f[i]=g;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}else{var j=A.rv(e);var _,P;if(d==="A"){for(var g=0;g<j.length;g++){P=j[g];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?g:A.nh(g,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;for(var O in j){P=j[O];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?O:A.nh(O,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<j.length;g++){P=A.nh(j[g],"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<j;g++){P=A.nh(g,"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}if(v){f[i]=s}else{delete f[i]}if(c){f[p]=y}else{delete f[p]}}function N(e){if(A.hn(e)=="h")return true;if(typeof e!=="object")return false;for(var t in e){if(e.hasOwnProperty(t)){if(N(e[t]))return true}}return false}function b(e,t,r,n,o){var a=false;var i=K(n,"",2);if(o.ap&&i&&i.constructor===Function){t="$wxs:"+t;e.attr["$gdc"]=K}if(o.is_affected||N(n)){e.n.push(t);e.raw[t]=n}e.attr[t]=i}function d(e,t,r,n,o,a){a.opindex=r;var i={},p;var u=c(z[r],n,o,a,i);b(e,t,r,u,i)}function h(e,t,r,n,o,a,i){i.opindex=n;var p={},u;var l=c(e[n],o,a,i,p);b(t,r,n,l,p)}function p(e,t,r,n){n.opindex=e;var o={};var a=c(z[e],t,r,n,o);return a&&a.constructor===Function?undefined:a}function l(e,t,r,n,o){o.opindex=t;var a={};var i=c(e[t],r,n,o,a);return i&&i.constructor===Function?undefined:i}function _(e,t,r,n,o){var o=o||{};n.opindex=e;return f(z[e],t,r,n,o)}function w(e,t,r,n,o,a){var a=a||{};o.opindex=t;return f(e[t],r,n,o,a)}function O(e,t,r,n,o,a,i,p,u){var l={};var f=_(e,r,n,o);y(f,t,r,n,o,a,i,p,u)}function j(e,t,r,n,o,a,i,p,u,l){var f={};var v=w(e,t,n,o,a);y(v,r,n,o,a,i,p,u,l)}function P(e,t,r,n,o,a){var i=v(e);var p=0;for(var u=0;u<t.length;u+=2){if(p+t[u+1]<0){i.attr[t[u]]=true}else{d(i,t[u],p+t[u+1],n,o,a);if(p===0)p=t[u+1]}}for(var u=0;u<r.length;u+=2){if(p+r[u+1]<0){i.generics[r[u]]=""}else{var l=c(z[p+r[u+1]],n,o,a);if(l!="")l="wx-"+l;i.generics[r[u]]=l;if(p===0)p=r[u+1]}}return i}function M(e,t,r,n,o,a,i){var p=v(t);var u=0;for(var l=0;l<r.length;l+=2){if(u+r[l+1]<0){p.attr[r[l]]=true}else{h(e,p,r[l],u+r[l+1],o,a,i);if(u===0)u=r[l+1]}}for(var l=0;l<n.length;l+=2){if(u+n[l+1]<0){p.generics[n[l]]=""}else{var f=c(e[u+n[l+1]],o,a,i);if(f!="")f="wx-"+f;p.generics[n[l]]=f;if(u===0)u=n[l+1]}}return p}var m=function(){if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){x();C();k();U();I();L();E();R();F()}if(typeof __WXML_GLOBAL__!=="undefined")__WXML_GLOBAL__.wxs_nf_init=true};var x=function(){Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"});Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return"[object Object]"}})};var C=function(){Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"});Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length},set:function(){}});Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return"[function Function]"}})};var k=function(){Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join()}});Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(e){e=undefined==e?",":e;var t="";for(var r=0;r<this.length;++r){if(0!=r)t+=e;if(null==this[r]||undefined==this[r])t+="";else if(typeof this[r]=="function")t+=this[r].nv_toString();else if(typeof this[r]=="object"&&this[r].nv_constructor==="Array")t+=this[r].nv_join();else t+=this[r].toString()}return t}});Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"});Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat});Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop});Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push});Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse});Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift});Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice});Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort});Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice});Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift});Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf});Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf});Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every});Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some});Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach});Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map});Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter});Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce});Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight});Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var U=function(){Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"});Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString});Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf});Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt});Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt});Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat});Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf});Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf});Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare});Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match});Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace});Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search});Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice});Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split});Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring});Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase});Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase});Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase});Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase});Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim});Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var I=function(){Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"});Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString});Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})};var L=function(){Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE});Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE});Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY});Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY});Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"});Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString});Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString});Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf});Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed});Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential});Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})};var E=function(){Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E});Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10});Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2});Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E});Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E});Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI});Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2});Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2});Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs});Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos});Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin});Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan});Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2});Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil});Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos});Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp});Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor});Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log});Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max});Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min});Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow});Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random});Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round});Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin});Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt});Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})};var R=function(){Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"});Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse});Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC});Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now});Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString});Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString});Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString});Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString});Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString});Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString});Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf});Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime});Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear});Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear});Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth});Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth});Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate});Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate});Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay});Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay});Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours});Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours});Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes});Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes});Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds});Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds});Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds});Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset});Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime});Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds});Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds});Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds});Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes});Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes});Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours});Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours});Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate});Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate});Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth});Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth});Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear});Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear});Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString});Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString});Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})};var F=function(){Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"});Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec});Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test});Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString});Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex},set:function(e){this.lastIndex=e}})};m();var J=function(){var e=Array.prototype.slice.call(arguments);e.unshift(Date);return new(Function.prototype.bind.apply(Date,e))};var B=function(){var e=Array.prototype.slice.call(arguments);e.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp,e))};var Y={};Y.nv_log=function(){var e="WXSRT:";for(var t=0;t<arguments.length;++t)e+=arguments[t]+" ";console.log(e)};var G=parseInt,X=parseFloat,H=isNaN,V=isFinite,$=decodeURI,W=decodeURIComponent,Q=encodeURI,q=encodeURIComponent;function K(e,t,r){e=A.rv(e);if(e===null||e===undefined)return e;if(typeof e==="string"||typeof e==="boolean"||typeof e==="number")return e;if(e.constructor===Object){var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o))if(undefined===t)n[o.substring(3)]=K(e[o],t,r);else n[t+o]=K(e[o],t,r);return n}if(e.constructor===Array){var n=[];for(var a=0;a<e.length;a++)n.push(K(e[a],t,r));return n}if(e.constructor===Date){var n=new Date;n.setTime(e.getTime());return n}if(e.constructor===RegExp){var i="";if(e.global)i+="g";if(e.ignoreCase)i+="i";if(e.multiline)i+="m";return new RegExp(e.source,i)}if(r&&typeof e==="function"){if(r==1)return K(e(),undefined,2);if(r==2)return e}return null}var Z={};Z.nv_stringify=function(e){JSON.stringify(e);return JSON.stringify(K(e))};Z.nv_parse=function(e){if(e===undefined)return undefined;var t=JSON.parse(e);return K(t,"nv_")};function ee(e,t,r,n){e.extraAttr={t_action:t,t_rawid:r};if(typeof n!="undefined")e.extraAttr.t_cid=n}function te(){if(typeof __globalThis.__webview_engine_version__=="undefined")return 0;return __globalThis.__webview_engine_version__}function re(e,t,r,n,o,a){var i=ne(t,r,n);if(i)e.push(i);else{e.push("");u(n+":import:"+o+":"+a+": Path `"+t+"` not found from `"+n+"`.")}}function ne(e,t,r){if(e[0]!="/"){var n=r.split("/");n.pop();var o=e.split("/");for(var a=0;a<o.length;a++){if(o[a]=="..")n.pop();else if(!o[a]||o[a]==".")continue;else n.push(o[a])}e=n.join("/")}if(r[0]=="."&&e[0]=="/")e="."+e;if(t[e])return e;if(t[e+".wxml"])return e+".wxml"}function oe(e,t,r,n){if(!t)return;if(n[e][t])return n[e][t];for(var o=r[e].i.length-1;o>=0;o--){if(r[e].i[o]&&n[r[e].i[o]][t])return n[r[e].i[o]][t]}for(var o=r[e].ti.length-1;o>=0;o--){var a=ne(r[e].ti[o],r,e);if(a&&n[a][t])return n[a][t]}var i=ae(r,e);for(var o=0;o<i.length;o++){if(i[o]&&n[i[o]][t])return n[i[o]][t]}for(var p=r[e].j.length-1;p>=0;p--)if(r[e].j[p]){for(var a=r[r[e].j[p]].ti.length-1;a>=0;a--){var u=ne(r[r[e].j[p]].ti[a],r,e);if(u&&n[u][t]){return n[u][t]}}}}function ae(e,t){if(!t)return[];if($gaic[t]){return $gaic[t]}var r=[],n=[],o=0,a=0,i={},p={};n.push(t);p[t]=true;a++;while(o<a){var u=n[o++];for(var l=0;l<e[u].ic.length;l++){var f=e[u].ic[l];var v=ne(f,e,u);if(v&&!p[v]){p[v]=true;n.push(v);a++}}for(var l=0;u!=t&&l<e[u].ti.length;l++){var c=e[u].ti[l];var s=ne(c,e,u);if(s&&!i[s]){i[s]=true;r.push(s)}}}$gaic[t]=r;return r}var ie={};function pe(e,t,r,n,o,a,i){var p=ne(e,t,r);t[r].j.push(p);if(p){if(ie[p]){u("-1:include:-1:-1: `"+e+"` is being included in a loop, will be stop.");return}ie[p]=true;try{t[p].f(n,o,a,i)}catch(n){}ie[p]=false}else{u(r+":include:-1:-1: Included path `"+e+"` not found from `"+r+"`.")}}function ue(e,t,r,n){u(t+":template:"+r+":"+n+": Template `"+e+"` not found.")}function le(e){var t=false;delete e.properities;delete e.n;if(e.children){do{t=false;var r=[];for(var n=0;n<e.children.length;n++){var o=e.children[n];if(o.tag=="virtual"){t=true;for(var a=0;o.children&&a<o.children.length;a++){r.push(o.children[a])}}else{r.push(o)}}e.children=r}while(t);for(var n=0;n<e.children.length;n++){le(e.children[n])}}return e}function fe(e){if(e.tag=="wx-wx-scope"){e.tag="virtual";e.wxCkey="11";e["wxScopeData"]=e.attr["wx:scope-data"];delete e.n;delete e.raw;delete e.generics;delete e.attr}for(var t=0;e.children&&t<e.children.length;t++){fe(e.children[t])}return e}return{a:D,b:S,c:v,d:e,e:t,f:u,g:r,h:s,i:n,j:o,k:A,l:T,m:a,n:f,o:c,p:i,q:y,r:N,s:b,t:d,u:h,v:p,w:l,x:_,y:w,z:O,A:j,B:P,C:M,D:J,E:B,F:Y,G:G,H:X,I:H,J:V,K:$,L:W,M:Q,N:q,O:K,P:Z,Q:ee,R:te,S:re,T:ne,U:oe,V:ae,W:ie,X:pe,Y:ue,Z:le,aa:fe}}()});Object.freeze(__g);g="";	__wxAppCode__['components/ExplainDetail/ExplainDetail.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/Passenger/Passenger.json'] = {"component":true,"usingComponents":{"TabPubPop":"/components/TabPubPop/TabPubPop"}};
		__wxAppCode__['components/SelectedPass/SelectedPass.json'] = {"component":true,"usingComponents":{"TicketType":"/components/TicketType/TicketType"}};
		__wxAppCode__['components/TabPubPop/TabPubPop.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/TicketType/TicketType.json'] = {"component":true,"usingComponents":{"TabPubPop":"/components/TabPubPop/TabPubPop"}};
		__wxAppCode__['components/calendars/calendars.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/cityAlphabet/cityAlphabet.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/loginPopup/loginPopup.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/nineList/nineList.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/orderDetail/orderBaseInfo/orderBaseInfo.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/orderDetail/orderCancelPopup/orderCancelPopup.json'] = {"component":true,"usingComponents":{"Popup":"../../popup/popup"}};
		__wxAppCode__['components/orderDetail/orderFooter/orderFooter.json'] = {"component":true,"usingComponents":{"Popup":"../../popup/popup"}};
		__wxAppCode__['components/orderDetail/orderService/orderService.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/orderDetail/orderStatus/orderStatus.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/orderDetail/qrcode/qrcode.json'] = {"component":true,"usingComponents":{"Popup":"../../popup/popup"}};
		__wxAppCode__['components/orderRefund/orderRefundPopup/orderRefundPopup.json'] = {"component":true,"usingComponents":{"Popup":"../../popup/popup"}};
		__wxAppCode__['components/orderRefund/passengerInfo/passengerInfo.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/orderRefund/priceInfo/priceInfo.json'] = {"component":true,"usingComponents":{"explain-detail":"../../ExplainDetail/ExplainDetail"}};
		__wxAppCode__['components/popup/popup.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['pages/agreement/agreement.json'] = {"navigationBarTitleText":"服务协议","usingComponents":{}};
		__wxAppCode__['pages/bus/orderDetail/orderDetail.json'] = {"usingComponents":{}};
		__wxAppCode__['pages/carline/booking/booking.json'] = {"navigationBarTitleText":"填写订单","usingComponents":{"Passenger":"/components/Passenger/Passenger","SelectedPass":"/components/SelectedPass/SelectedPass","ExplainDetail":"/components/ExplainDetail/ExplainDetail","login-popup":"/components/loginPopup/loginPopup"}};
		__wxAppCode__['pages/carline/orderDetail/orderDetail.json'] = {"usingComponents":{"Popup":"../../../components/popup/popup","order-status":"../../../components/orderDetail/orderStatus/orderStatus","order-footer":"../../../components/orderDetail/orderFooter/orderFooter","order-baseinfo":"../../../components/orderDetail/orderBaseInfo/orderBaseInfo","explain-detail":"../../../components/ExplainDetail/ExplainDetail","order-service":"../../../components/orderDetail/orderService/orderService","order-cancel-popup":"../../../components/orderDetail/orderCancelPopup/orderCancelPopup","order-qrcode":"../../../components/orderDetail/qrcode/qrcode"}};
		__wxAppCode__['pages/carline/refundConfirm/refundConfirm.json'] = {"navigationBarTitleText":"退票确认","usingComponents":{"passenger-info":"../../../components/orderRefund/passengerInfo/passengerInfo","price-info":"../../../components/orderRefund/priceInfo/priceInfo","order-footer":"../../../components/orderDetail/orderFooter/orderFooter"}};
		__wxAppCode__['pages/carline/shifts/index.json'] = {"usingComponents":{"login-popup":"../../../components/loginPopup/loginPopup","calendars":"../../../components/calendars/calendars","popup":"/components/popup/popup"}};
		__wxAppCode__['pages/common/busIDCard/busIDCard.json'] = {"navigationBarTitleText":"添加乘客","usingComponents":{}};
		__wxAppCode__['pages/common/calendar/calendar.json'] = {"navigationBarTitleText":"选择日期","onReachBottomDistance":100,"usingComponents":{}};
		__wxAppCode__['pages/contactadd/index.json'] = {"usingComponents":{},"navigationBarTitleText":"添加乘客"};
		__wxAppCode__['pages/contacts/index.json'] = {"usingComponents":{},"navigationBarTitleText":"常用信息"};
		__wxAppCode__['pages/customline/booking/booking.json'] = {"navigationBarTitleText":"填写订单","usingComponents":{"Passenger":"/components/Passenger/Passenger","SelectedPass":"/components/SelectedPass/SelectedPass","ExplainDetail":"/components/ExplainDetail/ExplainDetail","login-popup":"/components/loginPopup/loginPopup"}};
		__wxAppCode__['pages/customline/orderDetail/orderDetail.json'] = {"usingComponents":{"Popup":"../../../components/popup/popup","order-status":"../../../components/orderDetail/orderStatus/orderStatus","order-footer":"../../../components/orderDetail/orderFooter/orderFooter","order-baseinfo":"../../../components/orderDetail/orderBaseInfo/orderBaseInfo","explain-detail":"../../../components/ExplainDetail/ExplainDetail","order-service":"../../../components/orderDetail/orderService/orderService","order-cancel-popup":"../../../components/orderDetail/orderCancelPopup/orderCancelPopup","login-popup":"../../../components/loginPopup/loginPopup","order-qrcode":"../../../components/orderDetail/qrcode/qrcode"}};
		__wxAppCode__['pages/customline/refundConfirm/refundConfirm.json'] = {"navigationBarTitleText":"退票确认","usingComponents":{"passenger-info":"../../../components/orderRefund/passengerInfo/passengerInfo","price-info":"../../../components/orderRefund/priceInfo/priceInfo","order-footer":"../../../components/orderDetail/orderFooter/orderFooter","refund-popup":"../../../components/orderRefund/orderRefundPopup/orderRefundPopup"}};
		__wxAppCode__['pages/customline/shifts/index.json'] = {"usingComponents":{"login-popup":"../../../components/loginPopup/loginPopup","calendars":"../../../components/calendars/calendars","popup":"/components/popup/popup"}};
		__wxAppCode__['pages/customline/sitemap/index.json'] = {"usingComponents":{"popup":"/components/popup/popup"},"navigationBarTitleText":"车站地图"};
		__wxAppCode__['pages/home/home.json'] = {"navigationBarTitleText":"","usingComponents":{}};
		__wxAppCode__['pages/login/login.json'] = {"usingComponents":{"popup":"../../components/popup/popup"}};
		__wxAppCode__['pages/mine/index.json'] = {"usingComponents":{"login-popup":"../../components/loginPopup/loginPopup"},"navigationBarBackgroundColor":"#FFFFFF"};
		__wxAppCode__['pages/mineset/index.json'] = {"usingComponents":{},"navigationBarTitleText":"设置"};
		__wxAppCode__['pages/orderList/orderList.json'] = {"navigationBarTitleText":"行程","enablePullDownRefresh":true,"usingComponents":{"Popup":"../../../components/popup/popup","login-popup":"../../components/loginPopup/loginPopup"}};
		__wxAppCode__['pages/selectCity/selectCity.json'] = {"usingComponents":{"city-alphabet":"../../components/cityAlphabet/cityAlphabet","nine-list":"../../components/nineList/nineList"}};
		__wxAppCode__['pages/webview/webview.json'] = {"usingComponents":{}};
	;var __WXML_DEP__=__WXML_DEP__||{};var __wxAppData=__wxAppData||{};var __wxRoute=__wxRoute||"";var __wxRouteBegin=__wxRouteBegin||"";var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var __wxAppCurrentFile__=__wxAppCurrentFile__||"";var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};
/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"m_./components/SelectedPass/SelectedPass.wxml:cardModule":np_0,"m_./pages/carline/booking/booking.wxml:dateModule":np_2,"m_./pages/carline/booking/booking.wxml:moneyModule":np_3,"m_./pages/contacts/index.wxml:numberModule":np_4,"m_./pages/customline/booking/booking.wxml:dateModule":np_5,"m_./pages/customline/booking/booking.wxml:moneyModule":np_6,"m_./pages/customline/booking/booking.wxml:timeModule":np_7,"m_./pages/customline/shifts/index.wxml:m1":np_8,"m_./pages/mine/index.wxml:numberModule":np_9,"m_./pages/mineset/index.wxml:numberModule":np_10,"p_./components/SelectedPass/SelectedPass.wxs":np_1,};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./components/SelectedPass/SelectedPass.wxml']={};
f_['./components/SelectedPass/SelectedPass.wxml']['util'] =f_['./components/SelectedPass/SelectedPass.wxs'] || nv_require("p_./components/SelectedPass/SelectedPass.wxs");
f_['./components/SelectedPass/SelectedPass.wxml']['util']();
f_['./components/SelectedPass/SelectedPass.wxml']['cardModule'] =nv_require("m_./components/SelectedPass/SelectedPass.wxml:cardModule");
function np_0(){var nv_module={nv_exports:{}};nv_getCard = (function (nv_cardId){if (nv_cardId.nv_length == 18){return(nv_cardId.nv_substring(0,6) + "********" + nv_cardId.nv_substring(14))} else if (nv_cardId.nv_length == 16){return(nv_cardId.nv_substring(0,4) + "********" + nv_cardId.nv_substring(12))} else if (nv_cardId.nv_length > 8){return(nv_cardId.nv_substring(0,4) + "****" + nv_cardId.nv_substring(8))} else {return(nv_cardId)}});nv_module.nv_exports.nv_getCard = nv_getCard;return nv_module.nv_exports;}

f_['./components/SelectedPass/SelectedPass.wxs'] = nv_require("p_./components/SelectedPass/SelectedPass.wxs");
function np_1(){var nv_module={nv_exports:{}};nv_module.nv_exports = ({nv_typeTicketCN:(function (nv_typeEN){var nv_CNmeans = '';switch(nv_typeEN){case 'adult':nv_CNmeans = '成人票';break;case 'child':nv_CNmeans = '儿童票';break;case 'baby':nv_CNmeans = '携童票';break;case 'student':nv_CNmeans = '学生票';break;};return(nv_CNmeans)}),});return nv_module.nv_exports;}

f_['./pages/carline/booking/booking.wxml']={};
f_['./pages/carline/booking/booking.wxml']['dateModule'] =nv_require("m_./pages/carline/booking/booking.wxml:dateModule");
function np_2(){var nv_module={nv_exports:{}};nv_getWeekDate = (function (nv_date){if (!!!nv_date)return;;var nv_weekArray = ["日","一","二","三","四","五","六"];var nv_week = nv_weekArray[((nt_0=(nv_getDate(nv_date).nv_getDay()),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))];return(nv_date.nv_substring(5) + " 周" + nv_week)});nv_module.nv_exports.nv_getWeekDate = nv_getWeekDate;return nv_module.nv_exports;}
f_['./pages/carline/booking/booking.wxml']['moneyModule'] =nv_require("m_./pages/carline/booking/booking.wxml:moneyModule");
function np_3(){var nv_module={nv_exports:{}};nv_getMoney = (function (nv_money,nv_toFixed){if (!!!nv_money)nv_money = 0;;return(nv_money.nv_toFixed(nv_toFixed))});nv_module.nv_exports.nv_getMoney = nv_getMoney;return nv_module.nv_exports;}

f_['./pages/contacts/index.wxml']={};
f_['./pages/contacts/index.wxml']['numberModule'] =nv_require("m_./pages/contacts/index.wxml:numberModule");
function np_4(){var nv_module={nv_exports:{}};nv_numberHide = (function (nv_str,nv_start,nv_size){if (nv_str.nv_length == 0 || nv_str == undefined){return("")};var nv_length = nv_str.nv_length;var nv_replaceStr = '';for(var nv_i = 0;nv_i < nv_size;nv_i++){nv_replaceStr = nv_replaceStr + "*"};if (nv_length >= nv_start + nv_size){return(nv_str.nv_substring(0,nv_start) + nv_replaceStr + nv_str.nv_substring(nv_start + nv_size,nv_length))} else {return(nv_str)}});nv_module.nv_exports.nv_numberHide = nv_numberHide;return nv_module.nv_exports;}

f_['./pages/customline/booking/booking.wxml']={};
f_['./pages/customline/booking/booking.wxml']['dateModule'] =nv_require("m_./pages/customline/booking/booking.wxml:dateModule");
function np_5(){var nv_module={nv_exports:{}};nv_getWeekDate = (function (nv_mydateStr){if (!!!nv_mydateStr)return;;var nv_weekArray = ["日","一","二","三","四","五","六"];var nv_week = nv_weekArray[((nt_0=(nv_getDate(nv_mydateStr).nv_getDay()),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))];return(nv_mydateStr.nv_substring(5) + " 周" + nv_week)});nv_module.nv_exports.nv_getWeekDate = nv_getWeekDate;return nv_module.nv_exports;}
f_['./pages/customline/booking/booking.wxml']['moneyModule'] =nv_require("m_./pages/customline/booking/booking.wxml:moneyModule");
function np_6(){var nv_module={nv_exports:{}};nv_getMoney = (function (nv_money,nv_toFixed){if (!!!nv_money)nv_money = 0;;return(nv_money.nv_toFixed(nv_toFixed))});nv_module.nv_exports.nv_getMoney = nv_getMoney;return nv_module.nv_exports;}
f_['./pages/customline/booking/booking.wxml']['timeModule'] =nv_require("m_./pages/customline/booking/booking.wxml:timeModule");
function np_7(){var nv_module={nv_exports:{}};nv_getTime = (function (nv_time){if (!!!nv_time)nv_time = 0;;return((nv_parseInt(nv_time) / 60.0).nv_toFixed(2))});nv_module.nv_exports.nv_getTime = nv_getTime;return nv_module.nv_exports;}

f_['./pages/customline/shifts/index.wxml']={};
f_['./pages/customline/shifts/index.wxml']['m1'] =nv_require("m_./pages/customline/shifts/index.wxml:m1");
function np_8(){var nv_module={nv_exports:{}};var nv_timeTransfer = (function (nv_minutes){if (nv_minutes == '' || nv_minutes == undefined){return('')};var nv_hour = Math.nv_floor(nv_minutes / 60);var nv_minute = (Math.nv_ceil(nv_minutes) % 60);return(((nv_hour || nv_minute) ? '约' + ((nv_hour ? nv_hour + "小时":'') + (nv_minute ? nv_minute + "分钟":'')):''))});nv_module.nv_exports.nv_timeTransfer = nv_timeTransfer;return nv_module.nv_exports;}

f_['./pages/mine/index.wxml']={};
f_['./pages/mine/index.wxml']['numberModule'] =nv_require("m_./pages/mine/index.wxml:numberModule");
function np_9(){var nv_module={nv_exports:{}};nv_numberHide = (function (nv_str,nv_start,nv_size){if (nv_str.nv_length == 0 || nv_str == undefined){return("")};var nv_length = nv_str.nv_length;var nv_replaceStr = '';for(var nv_i = 0;nv_i < nv_size;nv_i++){nv_replaceStr = nv_replaceStr + "*"};if (nv_length >= nv_start + nv_size){return(nv_str.nv_substring(0,nv_start) + nv_replaceStr + nv_str.nv_substring(nv_start + nv_size,nv_length))} else {return(nv_str)}});nv_module.nv_exports.nv_numberHide = nv_numberHide;return nv_module.nv_exports;}

f_['./pages/mineset/index.wxml']={};
f_['./pages/mineset/index.wxml']['numberModule'] =nv_require("m_./pages/mineset/index.wxml:numberModule");
function np_10(){var nv_module={nv_exports:{}};nv_numberHide = (function (nv_str,nv_start,nv_size){if (nv_str.nv_length == 0 || nv_str == undefined){return("")};var nv_length = nv_str.nv_length;var nv_replaceStr = '';for(var nv_i = 0;nv_i < nv_size;nv_i++){nv_replaceStr = nv_replaceStr + "*"};if (nv_length >= nv_start + nv_size){return(nv_str.nv_substring(0,nv_start) + nv_replaceStr + nv_str.nv_substring(nv_start + nv_size,nv_length))} else {return(nv_str)}});nv_module.nv_exports.nv_numberHide = nv_numberHide;return nv_module.nv_exports;}

var x=[];if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx();;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/arrayLikeToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=r[e];return n}module.exports=_arrayLikeToArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/arrayLikeToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/arrayWithoutHoles.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var arrayLikeToArray=require("./arrayLikeToArray");function _arrayWithoutHoles(r){if(Array.isArray(r))return arrayLikeToArray(r)}module.exports=_arrayWithoutHoles;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/arrayWithoutHoles.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/asyncToGenerator.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function asyncGeneratorStep(n,e,r,t,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void r(n)}i.done?e(u):Promise.resolve(u).then(t,o)}function _asyncToGenerator(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var a=n.apply(e,r);function c(n){asyncGeneratorStep(a,t,o,c,i,"next",n)}function i(n){asyncGeneratorStep(a,t,o,c,i,"throw",n)}c(void 0)}))}}module.exports=_asyncToGenerator;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/asyncToGenerator.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/classCallCheck.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _classCallCheck(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}module.exports=_classCallCheck;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/classCallCheck.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/createClass.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}module.exports=_createClass;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/createClass.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/createForOfIteratorHelper.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var unsupportedIterableToArray=require("./unsupportedIterableToArray");function _createForOfIteratorHelper(r,e){var t;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(t=unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,i=!1;return{s:function(){t=r[Symbol.iterator]()},n:function(){var r=t.next();return u=r.done,r},e:function(r){i=!0,a=r},f:function(){try{u||null==t.return||t.return()}finally{if(i)throw a}}}}module.exports=_createForOfIteratorHelper;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/createForOfIteratorHelper.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/defineProperty.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _defineProperty(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}module.exports=_defineProperty;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/defineProperty.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/interopRequireDefault.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}module.exports=_interopRequireDefault;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/interopRequireDefault.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/interopRequireWildcard.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var _typeof=require("./typeof");function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache();if(r&&r.has(e))return r.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(t,i,o):t[i]=e[i]}return t.default=e,r&&r.set(e,t),t}module.exports=_interopRequireWildcard;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/interopRequireWildcard.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/iterableToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _iterableToArray(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}module.exports=_iterableToArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/iterableToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/nonIterableSpread.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=_nonIterableSpread;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/nonIterableSpread.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/objectSpread2.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var defineProperty=require("./defineProperty");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}module.exports=_objectSpread2;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/objectSpread2.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/toConsumableArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var arrayWithoutHoles=require("./arrayWithoutHoles"),iterableToArray=require("./iterableToArray"),unsupportedIterableToArray=require("./unsupportedIterableToArray"),nonIterableSpread=require("./nonIterableSpread");function _toConsumableArray(r){return arrayWithoutHoles(r)||iterableToArray(r)||unsupportedIterableToArray(r)||nonIterableSpread()}module.exports=_toConsumableArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/toConsumableArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/typeof.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _typeof(o){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?module.exports=_typeof=function(o){return typeof o}:module.exports=_typeof=function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}module.exports=_typeof;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/typeof.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/unsupportedIterableToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var arrayLikeToArray=require("./arrayLikeToArray");function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?arrayLikeToArray(r,e):void 0}}module.exports=_unsupportedIterableToArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/unsupportedIterableToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/regenerator.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
!function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof module,h=t.regeneratorRuntime;if(h)u&&(module.exports=h);else{(h=t.regeneratorRuntime=u?module.exports:{}).wrap=w;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={},v={};v[i]=function(){return this};var d=Object.getPrototypeOf,g=d&&d(d(P([])));g&&g!==e&&n.call(g,i)&&(v=g);var m=b.prototype=x.prototype=Object.create(v);E.prototype=m.constructor=b,b.constructor=E,b[c]=E.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===E||"GeneratorFunction"===(r.displayName||r.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},h.awrap=function(t){return{__await:t}},_(j.prototype),j.prototype[a]=function(){return this},h.AsyncIterator=j,h.async=function(t,r,e,n){var o=new j(w(t,r,e,n));return h.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},_(m),m[c]="Generator",m[i]=function(){return this},m.toString=function(){return"[object Generator]"},h.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},h.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function w(t,r,e,n){var o=r&&r.prototype instanceof x?r:x,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=O(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=L(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function L(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function x(){}function E(){}function b(){}function _(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function j(t){var r;this._invoke=function(e,o){function i(){return new Promise(function(r,i){!function r(e,o,i,a){var c=L(t[e],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?Promise.resolve(h.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(h).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}(e,o,r,i)})}return r=r?r.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=L(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")());
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/regenerator.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("components/behavior.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../@babel/runtime/helpers/interopRequireWildcard")(require("../utils/util")),require("../utils/calc"),require("../utils/config"),getApp();module.exports=Behavior({behaviors:[],data:{},methods:{$root:function(){return this.createSelectorQuery(this)._defaultComponent},pushNoticeInfo:function(e,r){this.triggerEvent("selected",{name:e,data:r})}},created:function(){},error:function(e){console.error(e)}});
},{isPage:false,isComponent:false,currentFile:'components/behavior.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("pages/agreement/desc.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports={serviceAgreement:'<p style="text-align: center; margin: 0cm 0cm 0.0001pt; font-size: 10.5pt; font-family: 等线;" align="center"><strong><span style="font-family: 微软雅黑, sans-serif;">鸿狐网上客运会员服务协议</span></strong></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">发布时间：2022年11月04日</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">生效时间：2022年11月11日</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">&nbsp;</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">本协议是【海南鸿鹄慧行网络科技有限公司】（以下简称"鸿狐"或&ldquo;我们&rdquo;)与您就使用客运服务所订立的有效合约。<strong>请您仔细阅读本协议，尤其是加粗字体。如果您不接受本协议条款，您应立即停止使用产品服务，如您点击&ldquo;提交订单&rdquo;&ldquo;购买&rdquo;或类似同意下单按钮，即视为您已理解并接受本协议所有条款，</strong>并同意成为鸿狐的注册会员，享受会员活动<strong>。</strong></span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">&nbsp;</span></p>\n<ul style="margin-bottom: 0cm; margin-top: 0px;">\n<li style="margin: 0cm 0cm 0.0001pt 0px; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">服务说明</span></li>\n</ul>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">1</span><span style="font-family: 微软雅黑, sans-serif;">、我们为您提供的是汽车票和定制班线用车服务及相关的技术服务。您可根据您的出行需求，点击购买车票，完成相应订单。您同意从您的微信账户扣取相应服务费用以完成您的订单。</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">2</span><span style="font-family: 微软雅黑, sans-serif;">、您知晓您所预订的出行服务（包括车辆、司机、运输服务），除了部分由我们直接向您提供外，<strong>部分还可能由第三方供应商直接为您提供，具体以订单页面提示为准。如系第三方提供的出行服务，则与订单相关的退改标准、退改费用、线路价格等亦由供应商提供，在此情况下我们仅提供信息发布服务及相应技术服务，并非实际承运方。</strong>如用车预订需求匹配成功，我们将代为收取订单费用，在您出行成功后，我们将相应费用结算给供应商。</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">&nbsp;</span></p>\n<ul style="margin-bottom: 0cm; margin-top: 0px;">\n<li style="margin: 0cm 0cm 0.0001pt 0px; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">用户注册</span></li>\n</ul>\n<ol style="margin-bottom: 0cm; margin-top: 0px;">\n<li style="margin: 0cm 0cm 0.0001pt 0px; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">您注册成为我们的用户后，应妥善保管您的账户和密码，不得转让或出借给他人使用。任何基于您账户下的操作，均视为您本人的操作或受到您本人授权的行为。如您发现您的账户被盗用或其他非法使用的情况，应立即通知我们采取相应措施以避免损失扩大。</span></li>\n<li style="margin: 0cm 0cm 0.0001pt 0px; text-align: justify; font-size: 10.5pt; font-family: 等线;"><strong><span style="font-family: 微软雅黑, sans-serif;">您注册成功后，同意并授权我们通过短信、电子邮件、在线推送等方式，向您提供订单服务信息、优惠信息、结算服务信息以及广告推广等信息。</span></strong></li>\n<li style="margin: 0cm 0cm 0.0001pt 0px; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">为了保障您的安全出行，以及可能需要与您取得及时的联系，您同意向我们预留您的手机号码等联系方式。您应保证您预留的联系方式真实有效。通过您预留的联系方式向我们发出的任何预约用车请求，均视为出于您的真实意思表示，构成对您有约束力的要约。</span></li>\n<li style="margin: 0cm 0cm 0.0001pt 0px; text-align: justify; font-size: 10.5pt; font-family: 等线;"><strong><span style="font-family: 微软雅黑, sans-serif;">您使用我们的服务，应具备完全民事行为能力（年满18周岁，或年满16周岁、以自己的劳动收入为主要生活来源，且精神健康能完全辨认自己的行为）。如您不属于前述人群，请务必在家长或其他监护人的陪同下阅读本服务协议，并在进行注册、下单、支付等任何行为或使用鸿狐的其他任何服务前，应事先征得您的家长或其他监护人的同意。</span></strong></li>\n</ol>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">&nbsp;</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">三、下单预约及费用</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">1</span><span style="font-family: 微软雅黑, sans-serif;">、您下单预约行程时，应向我们提供用车时间、起讫地点、车型、费用等完整订单所需的信息，如您提供的信息不完整或错误，因此可能产生的损失由您自行承担。</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">2</span><span style="font-family: 微软雅黑, sans-serif;">、如您在下单后取消订单，应及时对订单进行取消操作并按约承担相应的退改费用。</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">3</span><span style="font-family: 微软雅黑, sans-serif;">、<strong>驾驶员或平台取消：在发生特殊情况（例如恶劣天气、疫情管控、严重交通堵塞、意外事故等）时，驾驶员或平台可能取消您的订单。在此情况下我们会尽快通过合适的方式通知您。</strong></span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">4</span><span style="font-family: 微软雅黑, sans-serif;">、<strong>您知悉并同意：用车出行服务受制于交通运输状况、疫情防控交通管制等原因用时无法准确估算，请您提前做好出行安排，如有延误，您需自行承担相应损失。如您有赶飞机等对时间有要求的重要行程，请谨慎选择，并建议乘客出发前提前联系驾驶员确认行程。如因您未及时乘机等导致的损失，平台不予承担。</strong></span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">&nbsp;</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">四、乘车须知</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">1</span><span style="font-family: 微软雅黑, sans-serif;">、您不得在用车过程中发生不文明的行为、影响乘车安全的行为(包括但不限于吸烟、喝酒、吐痰、辱骂司机、抢夺方向盘等），您知晓并同意因您原因导致的损失（包括但不限于致使人员受伤、发生交通事故、造成车辆损坏等），您应根据实际损失情况进行赔偿。</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">2</span><span style="font-family: 微软雅黑, sans-serif;">、您不得携带危险品及其他法律、法规规定禁止携带的物品搭乘车辆，若您强行携带，司机有权拒绝您的用车。因携带上述违禁物品造成的处罚、损失或其他不利后果均由您自行承担。</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">3</span><span style="font-family: 微软雅黑, sans-serif;">、您乘车时不允许携带宠物，若一定要携带宠物乘车，需要在司机接单之后及时与司机沟通协商相关事宜（包括但不限于能否携带宠物上车、是否需要支付的额外费用等），具体能否携带宠物以最终沟通结果为准。</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">4</span><span style="font-family: 微软雅黑, sans-serif;">、<strong>订单匹配成功后，您应按照约定的时间到达指定的用车地点，在乘车前应仔细核对用车订单信息。如您发现实际用车时间、地点、车辆信息等与订单信息不符，您应当拒绝乘车，同时您应当及时联系我们反馈实际情况，我们将为您协调处理。如发生以上情形您仍然选择乘车的，表示您接受订单的变更，将由您自行承担不利后果。</strong></span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">5</span><span style="font-family: 微软雅黑, sans-serif;">、请您不要在不乘坐车辆的情况下，委托驾驶员单独运送物品。否则，您需自行承担相应责任及可能产生的损失。</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">6</span><span style="font-family: 微软雅黑, sans-serif;">、您不得在未获得车辆驾驶员事先同意的情况下，在使用服务过程中进行照相、录音、录像、网络直播等行为。在征得车辆驾驶员同意的前提下进行的照相、录音、录像等行为所获得的内容仅能为记录服务过程中的证明信息之目的，不得通过网络传输、线下拷贝等任何方式进行复制、传播、扩散。</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">&nbsp;</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">五、我们的权利与义务</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">1</span><span style="font-family: 微软雅黑, sans-serif;">、我们采取商业上合理的努力，在技术上维护服务系统的安全、有效、正常运行，使您能够顺利使用本协议约定服务，并向您提供乘车记录等查询的服务，但我们不承担任何因通讯、停电故障、黑客攻击、不可抗力等非我们原因所引起交易中断、交易错误引起的责任。</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">2</span><span style="font-family: 微软雅黑, sans-serif;">、<strong>我们可根据业务的需要调整本服务的服务费用，服务费用的收取方式以公告或您在使用本服务时收到的各类通知、告知为准。我们发出的有关收费的各类公告、通知、告知均为本协议的组成部分，如您不接受服务费用的调整，您应立即停止使用本服务。</strong></span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">3</span><span style="font-family: 微软雅黑, sans-serif;">、我们对您在使用本服务过程中填写的相关信息及历史使用记录负有保密义务，但双方另有约定或法律法规另有规定的除外。</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">4</span><span style="font-family: 微软雅黑, sans-serif;">、为保证为您提供良好的预订服务，我们将记录您的用车时间、起止地点、预订人/乘客姓名、联系方式等个人信息，并将此类信息发送给供应商及司机。我们亦将妥善管理上述信息，不做用车信息服务以外之用途。</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">5</span><span style="font-family: 微软雅黑, sans-serif;">、如在乘车过程中发生纠纷，我们将在收到投诉或反馈后安排工作人员及时进行相关情况的调查与核实并根据实际发生的情况做出处理决定（为切实保障您的权益，您应向我们反馈真实情况并配合完成处理方案的执行）。</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">6</span><span style="font-family: 微软雅黑, sans-serif;">、<strong>如您有未结清的订单款项，在未完全支付前，我们有权拒绝提供服务，直至您完成支付。</strong></span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">&nbsp;</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">六、协议的中止和终止</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">我们有权基于业务调整或风险管控的需要，暂停、中断或终止向您提供本服务的全部或部分功能，同时，我们认为您有可疑交易或有违反法律法规或本协议的规定之情形时，有权先行暂停、中断或终止向您提供部分或全部服务功能。</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">&nbsp;</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">七、违约责任</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">本协议任何一方违反本协议规定的内容，给另一方造成损害的，应当承担违约责任，赔偿另一方因此而造成的直接损失。</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">&nbsp;</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">八、法律适用及争议解决</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">本协议适用中华人民共和国大陆地区法律。就本协议的确认、履行或解释发生争议，应努力友好协商解决。如协商不成，双方同意由本协议签订地苏州工业园区有管辖权的人民法院管辖审理双方的纠纷或争议。</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">&nbsp;</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">九、其他</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: 等线;"><span style="font-family: 微软雅黑, sans-serif;">本协议内容包括协议正文及所有我们已经发布的或将来可能发布的使用规则。所有规则为本协议不可分割的一部分，与协议正文具有相同法律效力。您认可并同意若本服务协议中的某一部分条款或指述被相关司法机关判定为无效，该判定无效并不影响其他部分的有效性，您仍需依照本协议中的其他部分条款履行相关义务同时行使相关权利。若您在本协议内容或相关附属规则发生修订后，继续使用本服务的，则视为您同意最新修订的协议内容，否则您须立即停止使用本服务。</span></p>'};
},{isPage:false,isComponent:false,currentFile:'pages/agreement/desc.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/appInfo.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault"),t=e(require("./config")),a=require("./fetch"),r=e(require("./util"));module.exports={getAppInfo:function(){return new Promise((function(e,o){var n=wx.getStorageSync("appCode"),p=wx.getStorageSync("appInfo");if(n&&!r.default.isEmpty(p))return e(p),!1;(0,a.fetch)({url:"".concat(t.default.urlPrefix,"/appinfo/getAppInfo"),method:"GET",data:{wxAppId:"wx84fe73c9806bca0a"},complete:function(t){var a=t.data;a&&"200"===a.code&&!r.default.isEmpty(a.data)?(wx.setStorageSync("appCode",a.data.code),wx.setStorageSync("appInfo",a.data),e(a.data)):o(t)}})}))}};
},{isPage:false,isComponent:false,currentFile:'utils/appInfo.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/calc.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";function r(r){for(var n="";r--;)n+="0";return n}function n(r){var n,t=(n=r<1e-6?function(r){var n=String(r).split(/[eE]/);if(1==n.length)return n[0];var t="",e=r<0?"-":"",u=n[0].replace(".",""),a=Number(n[1])+1;if(a<0){for(t=e+"0.";a++;)t+="0";return t+u.replace(/^\-/,"")}for(a-=u.length;a--;)t+="0";return u+t}(r):r+"").lastIndexOf(".");return t<0?[n,0]:[n.replace(".",""),n.length-t-1]}function t(r,n,t,e){switch(t){case"+":return(r+n)/e;case"-":return(r-n)/e;case"*":return r*n/(e*e);case"/":return r/n}}function e(e,u,a){var o=n(e),c=n(u),i=Math.max(o[1],c[1]);if(0===i)return t(Number(e),Number(u),a,1);var f=Math.pow(10,i);return o[1]!==c[1]&&(o[1]>c[1]?c[0]+=r(o[1]-c[1]):o[0]+=r(c[1]-o[1])),t(Number(o[0]),Number(c[0]),a,f)}module.exports={add:function(r,n){return e(r,n,"+")},sub:function(r,n){return e(r,n,"-")},mul:function(r,n){return e(r,n,"*")},div:function(r,n){return e(r,n,"/")},round:function(r,n){return Math.round(r*Math.pow(10,n))/Math.pow(10,n)}};
},{isPage:false,isComponent:false,currentFile:'utils/calc.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/calendar.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var a=getApp(),n=require("util.js");module.exports={show:function(e){var l=e.basePageUrl||"",r=e.isShowPri||!1,c=n.extend(!0,{},e,{callback:"calendarCallback"});a.globalData.calendarCallback=function(a){return e.callback&&e.callback(a)},c.isFlightCross=!!e.isFlightCross,e.rangeFn&&(c.rangeFn="calendarRangeFn",a.globalData.calendarRangeFn=function(a){return e.rangeFn(a)}),e.rangeUnPass&&(c.rangeUnPass="calendarrangeUnPass",a.globalData.calendarrangeUnPass=function(a){return e.rangeUnPass(a)}),e.goBack&&(c.goBack="calendargoBack",a.globalData.calendargoBack=function(a){e.goBack(a)}),e.ishotelInterLocaltime&&e.hotelInterLocal&&(c.ishotelInterLocaltime=!0,c.hotelInterLocal=e.hotelInterLocal),a.globalData.calendarParam=c;var o=r?"":"?isNotShowPri=true";l?wx.navigateTo({url:l+"pages/common/calendar/calendar"+o}):wx.navigateTo({url:"/pages/common/calendar/calendar"})}};
},{isPage:false,isComponent:false,currentFile:'utils/calendar.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/common.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports={setEvent:function(e,t,a,s,n){a=a||"";var g=EventTracer.event({pagename:"pageName",productcode:"2021",category:"一站式出行-首页-小程序",action:"汽车票",label:"label",value:"value",debug:!0});g.settings.pagename=e,g.settings.label=t,a&&(g.settings.value=a),s&&(g.settings.category=s),n&&(g.settings.productcode=n),g.submit()}};
},{isPage:false,isComponent:false,currentFile:'utils/common.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/config.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/objectSpread2"),t=1;if(1!==t&&wx.getAccountInfoSync&&"function"==typeof wx.getAccountInfoSync){var a=wx.getAccountInfoSync().miniProgram;a&&"release"===a.envVersion&&(t=1)}var n=1===t?"https://honghu.17u.cn/":2===t?"https://honghu.t.17u.cn/":3===t?"https://honghu.qa.17u.cn/":"http://localhost:8081/",o={env:t,baseUrl:n,wxOpenId:"".concat(n,"appapi/user/login/117"),wxUnionId:"".concat(n,"appapi/user/getunionid/117"),wxPhone:"".concat(n,"appapi/user/getmobile/117"),customSaleOrder:"".concat(n,"platformopenapi/customTraffic/order/saleOrder"),carlineSaleOrder:"".concat(n,"platformopenapi/stationTraffic/order/saleOrder"),getSign:"".concat(n,"platformopenapi/weChatPay/getSign"),getRule:"".concat(n,"platformopenapi/rule/getRule"),getResourceConfigInfo:"".concat(n,"platformopenapi/systemConfig/getResourceConfigInfo"),getWechatSign:"".concat(n,"platformopenapi/weChatPay/getSign"),getMemberInfo:"".concat(n,"platformopenapi/member/getMemberInfoByMemberId")},r=n+"platformopenapi",p=n+"platformopenapi/passenger/getPassengerList",i=n+"platformopenapi/passenger/addPassenger",s=n+"platformopenapi/passenger/deletePassenger",c=n+"platformopenapi/customTraffic/resource/getShiftList",l=n+"platformopenapi/stationTraffic/resource/getShiftList";module.exports=e(e({},o),{},{baseUrl:n,urlPrefix:r,picBaseUrl:"https://file.40017.cn/groundtraffic/linebus/linebus/travel-platform-applet",tenxunMapKey:"FO7BZ-PBL3D-PYE4Z-HZLTZ-5JZGV-MTBQU",getPassengerList:p,addLinkerNew:i,deletePassenger:s,cusList:c,busUrl:l});
},{isPage:false,isComponent:false,currentFile:'utils/config.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/fetch.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=0,t=[],n=[],a=[],o=[];module.exports={fetch:function l(u){if(n.length?t=n:a.length?t=a:o.length&&(t=o),e>=10)return 1===u.priority?n.push(u):3===u.priority?o.push(u):a.push(u),n.length?t=n:a.length?t=a:o.length&&(t=o),!1;e++;var i=null,r=wx.request({url:u.url,data:u.data,header:u.header||{"Content-Type":"application/json"},responseType:u.responseType||"text",dataType:u.dataType||"json",method:u.method||"GET",enableHttp2:u.enableHttp2||!1,enableQuic:u.enableQuic||!1,enableCache:u.enableCache||!1,timeout:u.timeout||4e4,success:function(e){u&&u.success&&u.success(e)},fail:function(e){u&&u.fail&&u.fail(e)},complete:function(n){i&&(clearTimeout(i),i=null),u&&u.complete&&u.complete(n),e--;var a=t.shift();a&&l(a)}});return u.timeout&&r&&r.abort&&!getApp().globalData.reqCanTimeout&&(i=setTimeout((function(){r&&r.abort()}),u.timeout)),r}};
},{isPage:false,isComponent:false,currentFile:'utils/fetch.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/manba.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";!function(t,e){var r="function"==typeof define;"undefined"!=typeof module&&module.exports?module.exports=e():r?define(e):this.manba=e()}(0,(function(){var t={l:"YYYY-MM-DD",ll:"YYYY年MM月DD日",k:"YYYY-MM-DD hh:mm",kk:"YYYY年MM月DD日 hh点mm分",kkk:"YYYY年MM月DD日 hh点mm分 q",f:"YYYY-MM-DD hh:mm:ss",ff:"YYYY年MM月DD日 hh点mm分ss秒",fff:"YYYY年MM月DD日 hh点mm分ss秒 星期w",n:"MM-DD",nn:"MM月DD日"},e=0,r=new Date(1970,0,1,0,0,0).getTime(),a=["日","一","二","三","四","五","六"],n=["上午","下午"];function i(t,e){return o.initmanba(this,t,e),this}i.prototype.format=function(e){var r=this.isValid();if(!0!==r)return r;var a=t[e=e||"l"]||e;return o.format(this._date,a)},i.prototype.UTCformat=function(e){var r=this.isValid();if(!0!==r)return r;var a=t[e=e||"l"]||e;return o.UTCformat(this._date,a)},i.prototype.toString=function(){var t=this.isValid();return!0!==t?t:this._date.toString()},i.prototype.toISOString=function(t){var e=this.isValid();if(!0!==e)return e;var r=0,a=(r=void 0!==t?60*t:-(new Date).getTimezoneOffset())>=0?"+":"-";return p(this.time()+60*r*1e3).UTCformat("yyyy-MM-ddThh:mm:ss")+a+o.pad(parseInt(r/60))+":"+o.pad(r%60)},i.prototype.toLocalString=function(){var t=this.isValid();if(!0!==t)return t;var e=-(new Date).getTimezoneOffset(),r=e>=0?"+":"-";return this.format("yyyy-MM-ddThh:mm:ss")+r+o.pad(parseInt(e/60))+":"+o.pad(e%60)},i.prototype.distance=function(t,e,r){var a=this.isValid();if(!0!==a)return a;var n=this;e=e||p.DAY;var i=(t=p(t)).isValid();if(!0!==i)return i;switch(e){case p.MINUTE:return Math.floor((n.time()-t.time())/60/1e3);case p.HOUR:return o.getHours(n._date)-o.getHours(t._date);case p.DAY:return o.getDays(n._date)-o.getDays(t._date);case p.WEEK:return(o.getDays(n.startOf(p.WEEK,r)._date)-o.getDays(t.startOf(p.WEEK,r)._date))/7;case p.MONTH:return o.getMonths(n._date)-o.getMonths(t._date);case p.YEAR:return n._date.getYear()-t._date.getYear()}return 0},i.prototype.getWeekOfYear=function(t){t=(t||0)-0,(isNaN(t)||t>6)&&(t=0);var e=this.startOf(p.YEAR),r=(7-e.day()+t)%7,a=(this.startOf(p.DAY).time()-e.time())/864e5+1;return Math.ceil((a-r)/7)},i.prototype.getWeekOfMonth=function(t){t=(t||0)-0,(isNaN(t)||t>6)&&(t=0);var e=this.day(),r=this.date();return Math.ceil((r-e-1)/7)+(e>=t?1:0)},i.prototype.isLeapYear=function(){var t=this.isValid();return!0!==t?t:o.isLeapYear(this.year())},i.prototype.isThisYear=function(){var t=this.isValid();return!0!==t?t:o.timestamp(this._date)},i.prototype.isBefore=function(){var t=this.isValid();return!0!==t?t:o.timestamp(this._date)},i.prototype.isAfter=function(){var t=this.isValid();return!0!==t?t:o.timestamp(this._date)},i.prototype.month=function(t){var e=this.isValid();if(!0!==e)return e;var r=this;return null==t?r._date.getMonth()+1:(t=parseInt(t),t=r._date.setMonth(t-1),r)},i.prototype.add=function(t,e){var r=this.isValid();if(!0!==r)return r;var a=this;switch(t=parseInt(t),e=e||p.DAY){case p.DAY:a.time(a.time()+864e5*t);break;case p.MONTH:var n=a.date(),i=a.month()+t;a.month(i),a.date()!=n&&(a.add(-1,p.MONTH),a.date(a.endOf(p.MONTH).date()));break;case p.QUARTER:a.month(a.month()+3*t);break;case p.YEAR:a.year(a.year()+t);break;case p.WEEK:a.time(a.time()+6048e5*t);break;case p.HOUR:a.time(a.time()+36e5*t);break;case p.MINUTE:a.time(a.time()+6e4*t);break;case p.SECOND:a.time(a.time()+1e3*t);break;case p.TIME:a.time(a.time()+t)}return a},i.prototype.clone=function(){return new i(this)},i.prototype.endOf=function(t,e){var r=this.isValid();if(!0!==r)return r;var a=new i(this),n=t||p.DAY;return(a=a.startOf(n,e)).add(1,n),a.add(-1,p.SECOND),a},i.prototype.startOf=function(t,e){var r=this.isValid();if(!0!==r)return r;var a=new i(this);switch(t||p.DAY){case p.DAY:a.milliseconds(0),a.seconds(0),a.minutes(0),a.hours(0);break;case p.MONTH:a.date(1),a=a.startOf(p.DAY);break;case p.QUARTER:(a=a.startOf(p.MONTH)).add(-(a.month()-1)%3,p.MONTH);break;case p.WEEK:a=a.startOf(p.DAY);var n=(e=e||p.SUNDAY)==p.SUNDAY?0:1;0==a.day()&&1==n&&(n=-6),a.add(-a.day()+n,p.DAY);break;case p.YEAR:(a=a.startOf(p.DAY)).month(1),a.date(1);break;case p.HOUR:a.time(36e5*Math.floor(a.time()/36e5))}return a},i.prototype.isValid=function(){return!!o.isDate(this._date)||"Invalid Date"},i.prototype.getServerTime=function(){return 0!=e?this.add(e,p.TIME):this};var o={initmanba:function(t,e,r){var a=new Date;null!=e&&(o.isNumber(e)?a.setTime(e):o.isArray(e)?(o.padMonth(e),a=o.initDateWithArray(e)):o.isDate(e)?a=e:o.isString(e)?a=o.parse(e,r):e instanceof i&&(a=new Date(e.time()))),t._date=a},initDateWithArray:function(t){return t.length>1?new Date((new(Function.prototype.bind.apply(Date,[0].concat(t)))).setFullYear(t[0])):new Date},pad:function(t,e){e=e||2;var r="0";return(t=String(Math.abs(t)||0)).length>=e?t:(e-=t.length,(r+=Array(e+1).join(r)).slice(0,e)+String(t))},parse:function(t,e){if(o.isString(e)){var r={Y:0,M:1,D:1,H:0,m:0,S:0};return e.replace(/([^YyMDdHhmsS]*?)(([YyMDdHhmsS])\3*)([^YyMDdHhmsS]*?)/g,(function(e,a,n,i,o,s,u){var c=parseInt(t.substr(s+a.length,n.length),10);return"m"==i.toLowerCase()?r[i]=c:r[i.toUpperCase()]=c,""})),r.M--,a=o.initDateWithArray([r.Y,r.M,r.D,r.H,r.m,r.S])}var a,n=/^(\d{4,})\-(\d{2})\-(\d{2})\s?\:?(\d{2})?\:?(\d{2})?\:?(\d{2})?$/i.exec(t);if(null!==n)return n.shift(),o.padMonth(n),o.popUndefined(n),o.initDateWithArray(n);if("Invalid Date"==(a=new Date(t)))throw new Error("Invalid date parse from "+t);return a},popUndefined:function(t){return t.length>0&&null==t[t.length-1]?(t.pop(),o.popUndefined(t)):t},padMonth:function(t){t.length>1&&t[1]>0&&(t[1]-=1)},isLeapYear:function(t){return t%4==0&&t%100!=0||t%400==0},format:function(t,e){var r=e;return r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=r.replace(/yyyy|YYYY/,this.pad(t.getFullYear(),4))).replace(/yy|YY/,t.getFullYear()%100>8?(t.getFullYear()%100).toString():"0"+t.getFullYear()%100)).replace(/MM/,t.getMonth()>8?(t.getMonth()+1).toString():"0"+(t.getMonth()+1))).replace(/M/g,t.getMonth()+1)).replace(/w|W/g,a[t.getDay()])).replace(/dd|DD/,this.pad(t.getDate()))).replace(/d|D/g,t.getDate())).replace(/hh|HH/,this.pad(t.getHours()))).replace(/h|H/g,t.getHours())).replace(/mm/,this.pad(t.getMinutes()))).replace(/m/g,t.getMinutes())).replace(/ss|SS/,this.pad(t.getSeconds()))).replace(/s|S/g,t.getSeconds())).replace(/q|Q/g,t.getHours()>12?n[1]:n[0])},UTCformat:function(t,e){var r=e;return r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=r.replace(/yyyy|YYYY/,this.pad(t.getUTCFullYear(),4))).replace(/yy|YY/,t.getUTCFullYear()%100>8?(t.getUTCFullYear()%100).toString():"0"+t.getUTCFullYear()%100)).replace(/MM/,t.getUTCMonth()>8?(t.getUTCMonth()+1).toString():"0"+(t.getUTCMonth()+1))).replace(/M/g,t.getUTCMonth()+1)).replace(/w|W/g,a[t.getUTCDay()])).replace(/dd|DD/,this.pad(t.getUTCDate()))).replace(/d|D/g,t.getUTCDate())).replace(/hh|HH/,this.pad(t.getUTCHours()))).replace(/h|H/g,t.getUTCHours())).replace(/mm/,this.pad(t.getUTCMinutes()))).replace(/m/g,t.getUTCMinutes())).replace(/ss|SS/,this.pad(t.getUTCSeconds()))).replace(/s|S/g,t.getUTCSeconds())).replace(/q|Q/g,t.getUTCHours()>12?n[1]:n[0])},timestamp:function(t){return Math.floor(t.getTime()/1e3)},getDays:function(t){return Math.floor((t.getTime()-r)/864e5)},getHours:function(t){return Math.floor((t.getTime()-r)/36e5)},getMonths:function(t){return 12*t.getYear()+t.getMonth()+1},isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},isArray:function(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)},isDate:function(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)},isNumber:function(t){return t instanceof Number||"[object Number]"===Object.prototype.toString.call(t)},isString:function(t){return t instanceof String||"[object String]"===Object.prototype.toString.call(t)},extend:function(t,e){for(var r in e)s(e,r)&&(t[r]=e[r]);return s(e,"toString")&&(t.toString=e.toString),s(e,"valueOf")&&(t.valueOf=e.valueOf),t},makeGetSet:function(t){return function(e){return null!=e?(Date.prototype["set"+t].call(this._date,e),this):Date.prototype["get"+t].call(this._date)}}};function s(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var u=i.prototype,c={year:"FullYear",day:"Day",date:"Date",hours:"Hours",milliseconds:"Milliseconds",seconds:"Seconds",minutes:"Minutes",time:"Time"};for(var d in c)u[d]=o.makeGetSet(c[d]);var p=function r(a,n){return a instanceof i?new i(a):o.isObject(a)?(a.formatString&&o.isObject(a.formatString)&&o.extend(t,a.formatString),void(a.now&&(e=r(a.now).time()-r().time()))):new i(a,n)};return p.config=function(r){r.formatString&&o.isObject(r.formatString)&&o.extend(t,r.formatString),r.now&&(e=p(r.now).time()-p().time())},p.SECOND="SECOND",p.MINUTE="MINUTE",p.HOUR="HOUR",p.DAY="DAY",p.MONTH="MONTH",p.YEAR="YEAR",p.WEEK="WEEK",p.TIME="TIME",p.QUARTER="QUARTER",p.MONDAY=1,p.TUESDAY=2,p.WEDNESDAY=3,p.THURSDAY=4,p.FRIDAY=5,p.SATURDAY=6,p.SUNDAY=7,p}));
},{isPage:false,isComponent:false,currentFile:'utils/manba.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/touch.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e,t,u=require("../@babel/runtime/helpers/classCallCheck"),a=require("../@babel/runtime/helpers/createClass"),c=function(){function c(){u(this,c)}return a(c,[{key:"_touchstart",value:function(u,a){return a.forEach((function(e,t){e.isTouchMove&&(e.isTouchMove=!1)})),e=u.changedTouches[0].clientX,t=u.changedTouches[0].clientY,a}},{key:"_touchmove",value:function(u,a,c){var n=u.currentTarget.dataset.id,r=u.changedTouches[0].clientX,o=u.changedTouches[0].clientY,i=this._angle({X:e,Y:t},{X:r,Y:o});return a.forEach((function(t,u){t.isTouchMove=!1,Math.abs(i)>30||t[c]==n&&(t.isTouchMove=!(r>e))})),a}},{key:"_angle",value:function(e,t){var u=t.X-e.X,a=t.Y-e.Y;return 360*Math.atan(a/u)/(2*Math.PI)}}]),c}();exports.default=c;
},{isPage:false,isComponent:false,currentFile:'utils/touch.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/typeSetting.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports={certTypeSetting:{0:"身份证"},orderStatusSetting:{0:"待支付",1:"出票中",2:"出票成功",3:"已取消",4:"已完成",5:"退票中",6:"已退票"},orderStatusDescSetting:{0:"请在XXX时间内/时间前完成支付，否则将为您自动取消",1:"正在出票中，请等待",2:"请您关注出发时间，祝您一路平安",3:"很遗憾，未能为您服务",4:"已完成",5:"正在努力为您办理退票，请耐心等待",6:"退票成功，退款将于1-7个工作日返回到您的支付账户"}};
},{isPage:false,isComponent:false,currentFile:'utils/typeSetting.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/userInfo.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault"),n=e(require("../@babel/runtime/regenerator")),t=require("../@babel/runtime/helpers/asyncToGenerator"),a=require("../@babel/runtime/helpers/objectSpread2"),r=e(require("./config")),o=require("./fetch"),u=e(require("./util")),i=require("./appInfo");function d(){return new Promise((function(e,n){var t=wx.getStorageSync("openId"),d=wx.getStorageSync("loginInfo");if(t&&!u.default.isEmpty(d))return e(d),!1;wx.login({timeout:1e4,success:function(t){(0,i.getAppInfo)().then((function(i){(0,o.fetch)({url:"".concat(r.default.urlPrefix,"/wechatapplet/getOpenId"),method:"GET",data:{appCode:i.code,code:t.code},complete:function(t){var r=t.data;if(r&&"200"===r.code&&!u.default.isEmpty(r.data)){var o=a(a({},r.data),{},{appCode:i.code});wx.setStorageSync("openId",r.data.openId),wx.setStorageSync("loginInfo",o),e(o)}else n(t)}})}))},fail:function(e){n(e)}})}))}module.exports={getOpenid:d,getUnionId:function(){return new Promise(function(){var e=t(n.default.mark((function e(t,a){var r,o,i,c;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=wx.getStorageSync("wxuserinfo"),o=wx.getStorageSync("openId"),i=wx.getStorageSync("unionId"),r&&r.encryptedData&&r.iv){e.next=6;break}return a("无encryptedData或iv，无法请求api.wxUnionId方法"),e.abrupt("return",!1);case 6:if(!o||!i){e.next=9;break}return t({openId:o,unionId:i}),e.abrupt("return",!1);case 9:if(o){e.next=31;break}return c={},e.prev=11,e.next=14,d();case 14:c=e.sent,e.next=20;break;case 17:e.prev=17,e.t0=e.catch(11),c={};case 20:if(!c.openId){e.next=29;break}if(!c.unionId){e.next=26;break}return t({openId:c.openId,unionId:c.unionId}),e.abrupt("return",!1);case 26:o=c.openId;case 27:e.next=31;break;case 29:return a("getOpenid 方法获取 openId 失败"),e.abrupt("return",!1);case 31:u.default.$http(api.wxUnionId,{openId:o,encryptedData:r.encryptedData,iv:r.iv}).then((function(e){!u.default.isEmpty(e)&&e.unionId?(wx.setStorageSync("unionId",e.unionId),wx.setStorageSync("tongcheng.aesUnionId",e.aesUnionId),t({openId:o,unionId:e.unionId})):(u.default.TMLogCollect({methodName:"wxUnionId",reqParams:{openId:o,encryptedData:r.encryptedData,iv:r.iv},resParams:e}),a(e))})).catch((function(e){u.default.TMLogCollect({methodName:"wxUnionId",reqParams:{openId:o,encryptedData:r.encryptedData,iv:r.iv},resParams:e}),a(e)}));case 32:case"end":return e.stop()}}),e,null,[[11,17]])})));return function(n,t){return e.apply(this,arguments)}}())},getWxMobile:function(e,n,t){return new Promise((function(i,c){if(t||e&&n){var p=0;!function f(){d().then((function(d){!u.default.isEmpty(d)&&d.openId?(0,o.fetch)({url:"".concat(r.default.urlPrefix,"/wechatapplet/getPhoneNo"),method:"POST",data:{appCode:d.appCode,openId:d.openId,sessionKey:d.sessionKey,encryptedData:e,iv:n,code:t||""},complete:function(e){var n=e.data;n&&n.data&&n.data.phoneNo?(p=0,i(a({phone:n.data.phoneNo},d))):p>0?(u.default.alert("获取手机号失败，请稍后重试"),c()):(wx.setStorageSync("openId",""),p++,f())}}):(u.default.alert("获取用户信息失败，请稍后重试"),c())}))}()}else c()}))},getUserInfo:function(e,n){var t=wx.getStorageSync("wxuserinfo");if(t&&t.userInfo&&!u.default.isEmpty(t.userInfo))return u.default.isFn(e)&&e(t.userInfo),!1;!function(e,n){getApp().cbGetUserInfo=function(t){t.userInfo?(getApp().globalData.userInfo=t.userInfo,u.default.isFn(e)&&e(t.userInfo)):u.default.isFn(n)&&n(t)},wx.navigateTo({url:"/pages/getAuthInfo/getAuthInfo"})}(e,n)}};
},{isPage:false,isComponent:false,currentFile:'utils/userInfo.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/util.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../@babel/runtime/regenerator")),n=require("../@babel/runtime/helpers/objectSpread2"),r=require("../@babel/runtime/helpers/asyncToGenerator"),o=require("../@babel/runtime/helpers/typeof"),a=e(require("./config")),i=require("./fetch");function c(e,t){var n;t=t||"Y-M-D H:F:S";return e instanceof Date?n=e:"string"==typeof e?n=new Date(s(e,0)):"number"==typeof e&&(n=new Date(e)),t.replace(/Y|y|M|m|D|d|H|h|F|f|S|s/g,(function(t){switch(t){case"y":return(n.getFullYear()+"").slice(2);case"Y":return n.getFullYear();case"m":return n.getMonth()+1;case"M":return l(n.getMonth()+1);case"d":return e.getDate();case"D":return l(n.getDate());case"h":return n.getHours();case"H":return l(n.getHours());case"f":return n.getMinutes();case"F":return l(n.getMinutes());case"s":return n.getSeconds();case"S":return l(n.getSeconds())}}))}function u(e,t){"string"==typeof e&&(e=v(e));var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),/(w+)/.test(t)&&(t=t.replace(RegExp.$1,[["日","一","二","三","四","五","六"],["周日","周一","周二","周三","周四","周五","周六"],["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]][RegExp.$1.length-1][e.getDay()])),n)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return t}function s(e,t){return 0==t?e.replace("T"," ").replace(/-/g,"/"):1==t?e.replace(/T/," ").replace(/\//g,"-"):void 0}function l(e){return e<10?"0"+e:e}var f=[].slice,g={},d=g.toString;function p(e){var t=Object.prototype.toString;if(null==e)return!0;if("[object Array]"==t.call(e)||"[object String]"==t.call(e))return 0===e.length;if("[object Object]"==t.call(e))for(var n in e)return!1;return!0}function m(e){return"object"==function(e){return null==e?String(e):g[d.call(e)]||"object"}(e)}function h(e){return m(e)&&Object.getPrototypeOf(e)==Object.prototype}"Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach((function(e,t){g["[object "+e+"]"]=e.toLowerCase()}));var w=Array.isArray||function(e){return e instanceof Array};function S(e){var t={"content-type":"application/json",openid:wx.getStorageSync("openId"),unionId:wx.getStorageSync("unionId"),memberId:wx.getStorageSync("memberId"),Refid:wx.getStorageSync("refid"),filter1:wx.getStorageSync("filter")};if(e)for(var n in e)t[n]=e[n];return t}function b(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:5e3,a=null,i=null;return r=Object.assign({"content-type":"application/json",openid:wx.getStorageSync("openId"),unionId:wx.getStorageSync("unionId"),memberId:wx.getStorageSync("memberId"),Refid:wx.getStorageSync("refid"),filter1:wx.getStorageSync("filter")},r),new Promise((function(c,u){i=wx.request({url:e,data:t,header:r,method:n||"POST",success:function(e){if(200==e.statusCode){var t=e.data;!p(t)&&p(t.header)?c(t):!p(t.header)&&t.header.isSuccess?c(t.body):u(t.header)}else u(e||"请求失败")},fail:function(e){u(e||"请求失败")},complete:function(){clearTimeout(a)}}),o&&o>0&&(a=setTimeout((function(){u("请求超时"),i&&i.abort()}),o))}))}function v(e){return e?new Date(e.replace(/-/g,"/")):new Date}function y(e){return"function"==typeof e}function x(e){var t,n=f.call(arguments,1);return"boolean"==typeof e&&(t=e,e=n.shift()),n.forEach((function(n){D(e,n,t)})),e}function D(e,t,n){for(var r in t)n&&(h(t[r])||w(t[r]))?(h(t[r])&&!h(e[r])&&(e[r]={}),w(t[r])&&!w(e[r])&&(e[r]=[]),x(n,e[r],t[r])):void 0!==t[r]&&(e[r]=t[r])}function T(e){return""!==e&&null!==e&&("number"==typeof e&&!isNaN(e))}var I=null;function M(){var e=wx.getStorageSync("userLabelSaved");return"boolean"==typeof e&&e}function O(){var e=wx.getStorageSync("userLabel");return T(e)?e:0}var P=function(e){return"[object String]"===Object.prototype.toString.call(e)};function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.split("?"),n={};return t.length>1&&(t=t[1].split("&")).forEach((function(e){e=e.split("="),n[e[0]]=e[1]})),n}function k(){return(k=r(t.default.mark((function e(){var r,o,c,u,s,l=arguments;return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=l.length>0&&void 0!==l[0]?l[0]:{},o=getCurrentPages(),c=o[o.length-1]||{},u=c.route,s="",!(r.scene&&decodeURIComponent(r.scene).indexOf("id=")>-1)){e.next=9;break}return e.next=8,new Promise((function(e){(0,i.fetch)({url:a.default.getParamsByScene,method:"POST",data:{scene:decodeURIComponent(r.scene)},complete:function(t){var n=t.data,o=(void 0===n?{}:n).body,a=(void 0===o?{}:o).params,i=void 0===a?"":a,c=i.indexOf(u)>-1;i&&delete r.scene,e(c?i:""),!c&&i&&wx.navigateTo({url:i})}})}));case 8:s=e.sent;case 9:return s&&(r=n(n({},r),j(s))),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{appId:"",path:"",extraData:{},envVersion:"release",shortLink:"",success:function(){},fail:function(){},complete:function(){}},t=y(wx.openEmbeddedMiniProgram);t?wx.openEmbeddedMiniProgram(n({},e)):wx.navigateToMiniProgram(n({},e))}module.exports={isString:P,isFn:y,formatNumber:function(e){return(e=(~~e).toString())[1]?e:"0"+e},format:c,format1:u,switchConnectSign:s,getDate:function(e){return e?"string"==typeof e?new Date(e.replace(/-/g,"/")):new Date(e):new Date},addDay:function(e,t,n){var r=t||new Date;n=n||"yyyy-MM-dd","string"!=typeof r&&"number"!=typeof r||(r=new Date(t));var o=864e5*e,a=new Date(r.getTime()+o);return{date:a,day:u(a,n)}},subDay:function(e,t,n){var r=t||new Date;n=n||"yyyy-MM-dd","string"==typeof r?r=new Date(s(t,0)):"number"==typeof r&&(r=new Date(t));var o=864e5*e,a=new Date(r.getTime()-o);return{date:a,day:u(a,n)}},$http:b,wxhttp:function(e,t,n,r){return r=Object.assign({"content-type":"application/json",openid:wx.getStorageSync("openId"),unionId:wx.getStorageSync("unionId"),memberId:wx.getStorageSync("memberId"),Refid:wx.getStorageSync("refid"),filter1:wx.getStorageSync("filter")},r),new Promise((function(o,a){wx.request({url:e,data:JSON.stringify(t),method:n||"POST",header:r,success:function(e){var t=e.data;!p(t.header)&&t.header.isSuccess?o(t):a(t)},fail:function(e){a(e)},complete:function(e){}})}))},$req:function(e,t,n,r,o){var a=null,i=null;return r=Object.assign({"content-type":"application/json",openid:wx.getStorageSync("openId"),unionId:wx.getStorageSync("unionId"),memberId:wx.getStorageSync("memberId"),Refid:wx.getStorageSync("refid"),filter1:wx.getStorageSync("filter")},r),new Promise((function(c,u){i=wx.request({url:e,data:t,header:r,method:n||"POST",success:function(e){c(e.data)},fail:function(e){u(e||"请求失败")},complete:function(){clearTimeout(a)}}),o&&o>0&&(a=setTimeout((function(){u("请求超时"),i&&i.abort()}),o))}))},isEmpty:p,getCurrentPageUrlWithArgs:function(){var e=getCurrentPages(),t=e[e.length-1],n=t.route,r=t.options,o="/".concat(n,"?");for(var a in r){var i=r[a];o+="".concat(a,"=").concat(i,"&")}return o=o.substring(0,o.length-1)},debounce:function(e,t,n){var r;return t=t||0,function(){var n=this,o=arguments;r&&(clearTimeout(r),r=null),r=setTimeout((function(){e.apply(n,o)}),t)}},throttle:function(e,t){var n=null;return t=t||0,function(){var r=this,o=arguments,a=+new Date;(a-n>t||!n)&&(e.apply(r,o),n=a,console.log("执行throttle"))}},parseDate:v,alert:function(e,t,n,r,o,a,i,c){wx.showModal({content:e||"",title:t||"温馨提示",showCancel:n||!1,cancelText:r||"我知道了",confirmText:o||"确定",confirmColor:c||"#3D8FFF",success:function(e){e.confirm?y(a)&&a(e):y(i)&&i()}})},loading:function(e){wx.showToast({title:e||"加载中...",icon:"loading",mask:!0,duration:1e6})},hideLoading:function(){wx.hideToast()},showToast:function(e,t,n,r){wx.showToast({title:e||"加载中...",icon:t||"loading",duration:n||1500,mask:!0,success:r||null})},formatOptions:function(e){var t="";for(var n in e)t+=n+"="+e[n]+"&";return t=t.slice(0,t.length-1)},clearStorage:function(e){Array.isArray(e)&&e.map((function(e){wx.removeStorageSync(e)}))},changeTime:function(e){if(e){new Date(e);var t=(i(36e5,24)+i(6e4,60)+i(1e3,60)).split(""),n="",r="";if(e>864e5&&e<36e7){r=(n=""+24*Math.floor(e/864e5)).split("");var o=+t[0]+ +r[0],a=+t[1]+ +r[1];return a>=10&&(o+=Math.floor(a/10),a=Math.floor(a%10)),o+""+a+":"+t[2]+t[3]+":"+t[4]+t[5]}return e>=36e7?(n=Math.floor(e/864e5)+"天")+""+t[0]+t[1]+":"+t[2]+t[3]+":"+t[4]+t[5]:n+""+t[0]+t[1]+":"+t[2]+t[3]+":"+t[4]+t[5]}function i(t,n){var r=Math.floor(e/t%n);return r<10?"0"+r:""+r}},addTime:function(e,t,n){var r,o=e||new Date;if("string"==typeof o)o=new Date(s(o,0));else if("number"==typeof o)o=new Date(o);else if(!t||t.search(/Y|M|D|H|F|S/g)<0)return;var a=t.split(/Y|M|D|H|F|S/g)[0];switch(t.substr(-1,1)){case"M":r=30*a*24*60*60*1e3;break;case"D":r=24*a*60*60*1e3;break;case"H":r=60*a*60*1e3;break;case"F":r=60*a*1e3;break;case"S":r=1e3*a}return o.setTime(o.getTime()+r),n?c(o,n):o},formatNum:l,setHeader:S,extend:x,saveFormid:function(e,t,n,r,o){if(""==e||"the formId is a mock one"==e)return!1;var i=encodeURIComponent,c="openid=".concat(i(wx.getStorageSync("openId")),"&unionid=").concat(i(wx.getStorageSync("unionId")),"&memberid=").concat(i(wx.getStorageSync("memberId")),"&formid=").concat(i(e),"&category=").concat(i(t)||"category","&action=").concat(i(n)||"click","&label=").concat(i(r),"&value=").concat(i(o||r),"&scene=").concat(getApp().globalData.scene);b(a.default.saveFormid,c,"POST",{"Content-Type":"application/x-www-form-urlencoded"},3e3).then((function(e){})).catch((function(e){}))},getNewOrderApi:function(e,t){if(e)for(var n in t)/order\/|pay\/|wechatWithHold\//.test(t[n])&&(/wxbusapi\//gi.test(t[n])?t[n]=t[n].replace(/wxbusapi\//gi,"busorderapi/"):t[n]=t[n].replace(/wxbusapitest\//gi,"busorderapitest/"),t[n].indexOf("wechatWithHold/")>-1&&(t[n]=t[n].replace(/wechatWithHold\//gi,"pay/")));else for(var r in t)/order\/|pay\//.test(t[r])&&(/busorderapi\//gi.test(t[r])?t[r]=t[r].replace(/busorderapi\//gi,"wxbusapi/"):t[r]=t[r].replace(/busorderapitest\//gi,"wxbusapitest/"),/queryNew\/|channelForApplet\/|channel\//.test(t[r])&&(t[r]=t[r].replace(/pay\//gi,"wechatWithHold/")));return t},tmSaveFormId:function(e){if(""===e||"the formId is a mock one"===e)return!1;var t=S();(0,i.fetch)({url:a.default.collect,method:"POST",header:t,data:{formId:e,channelId:"001"},success:function(){},fail:function(){}})},isRealNum:T,isFunc:function(e){return"function"==typeof e},handleDecimal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if("number"!=typeof e)return 0;if(e%1==0)return e;var n=e.toString(),r=n.indexOf("."),o=n.slice(0,r+t+1);return Number(o)},isIphoneX:function(){try{return wx.getSystemInfoSync().safeArea.top>20}catch(e){console.error("获取SystemInfo兼容iPhone X错误",e)}return!1},timer:function(){return new Promise((function(e,t){I=setTimeout((function(){e(I)}),1e3*(time||0))}))},jumpParams:function(e){var t=[];for(var n in e)t.push(n+"="+e[n]);return"?"+t.join("&")},getParams:function(e,t){var n=new RegExp("(^|\\?|&)".concat(e,"=([^|&]*)([&|$]?)"),"i"),r=t?t.match(n):"";return p(r)?null:decodeURIComponent(r[2])},TMLogCollect:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.className,n=void 0===t?"BusWechat":t,r=e.methodName,o=void 0===r?"":r,c=e.filterTxt,u=void 0===c?"":c,s=e.level,l=void 0===s?3:s,f=e.reqParams,g=void 0===f?"":f,d=e.resParams,p=void 0===d?"":d,m=(new Date).getTime(),h="",w="";if("string"!=typeof g)try{h=JSON.stringify(g)}catch(e){h="{}"}else h=g||"{}";if("string"!=typeof p)try{w=JSON.stringify(p)}catch(e){w="{}"}else w=p||"{}";var S='{"request":'.concat(h,',"response":').concat(w,"}");(0,i.fetch)({url:"".concat(a.default.tmLogApi,"/collect/put"),method:"POST",data:{Header:{MachineNo:"BusWechat",SecretKey:"",TimesTamp:m},Body:{className:n,methodName:o,createTime:m,filterTxt:u||getApp().globalData.tmLogRandomNum,level:l,params:S}},priority:3,complete:function(){}})},giveNewUserGoldRule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;return new Promise((function(t){(0,i.fetch)({url:"".concat(a.default.tmMinaApi,"/goldRule/getNewUserGiveGoldRule"),method:"POST",data:{source:e},complete:function(e){var n=e.data,r=0,o=1;p(n)||"0000"!==n.ErrCode||p(n.Data)||(r=n.Data.goldNum,o=n.Data.popSec),t({goldNum:r,popSec:o})}})}))},findNewAndGrant:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3;return new Promise((function(o){(0,i.fetch)({url:"".concat(a.default.tmMinaApi,"/gold/findNewAndGrant"),method:"POST",data:{openId:e,unionId:t,memberId:"",nickName:n,source:r},complete:function(e){var t=e.data,n=!1,r=0,a=0;p(t)||"0000"!==t.ErrCode||p(t.Data)||(n=!0,r=t.Data.grantGoldAmount,a=t.Data.exchangeRate),o({isNewUser:n,grantGoldAmount:r,exchangeRate:a})}})}))},tmDebounce:function(e,t){var n=null;return function(){var r=this,o=arguments;n&&clearTimeout(n),n=setTimeout((function(){e.apply(r,o)}),t||500)}},getWXLoginCode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;return new Promise((function(t){wx.login({timeout:e,success:function(e){e.code?t(e.code):t("")},fail:function(){t("")}})}))},initSocket:function(e,t){var n=null,r=null,o=getApp();o.globalData.SocketTask=wx.connectSocket({url:a.default.websocket,success:function(){},fail:function(e){console.error("Socket连接失败",e)}}),n=o.globalData.SocketTask,console.log("this.globalData.SocketTask",n),n&&(n.onOpen((function(){var e;console.log("通道已打开",n),t.onOpen&&t.onOpen(),e=n,clearInterval(r),r=setInterval((function(){e.send({data:""})}),2e4)})),n.onClose((function(e){console.error("close",e)})),n.onError((function(e){console.error("error ",e)})),n.onMessage((function(e){t.onMessage&&t.onMessage(e)})))},equals:function e(t,n){if(t===n)return!0;if(t instanceof Date&&n instanceof Date)return t.getTime()===n.getTime();if(!t||!n||"object"!==o(t)&&"object"!==o(n))return t===n;if(t.prototype!==n.prototype)return!1;var r=Object.keys(t);return r.length===Object.keys(n).length&&r.every((function(r){return e(t[r],n[r])}))},initGlobalData:function(e,t){p(e.globalData.bus)&&(e.globalData.bus={}),p(e.globalData.bus.book)&&(e.globalData.bus.book={}),t&&(e.globalData.bus.book={})},isMobile:function(e){return/^(1[3-9])\d{9}$/.test(e)},sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))},isAnonymity:function(e){var t=e.nickName,n=e.avatarUrl;return!!p(t)||"微信用户"===t&&"https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132"===n},getUserLabelSavedStorage:M,setUserLabelSavedStorage:function(){wx.setStorageSync("userLabelSaved",!0)},getUserLabelStorage:O,setUserLabelStorage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,t=M();if(!t){var n=O();n||wx.setStorageSync("userLabel",e)}},newDate:function(e){return P(e)?new Date(e.replace(/-/g,"/")):new Date(e)},analysisScene:function(){return k.apply(this,arguments)},jumpEmbeddedMiniProgram:N,viewInfo:function(){var e=wx.getSystemInfoSync()||{},t=e.safeArea||{},n=750/(e.screenWidth||375),r=e.windowHeight*n,o=e.screenHeight-t.bottom||0;return{winRpxHeight:r,bottomSafeHeight:o*=n,rpxRatio:n,statusBarHeight:e.statusBarHeight||20}},isNotEmptyString:function(e){return"string"==typeof e&&""!==e},jumpMiniProgramOrWebview:function(e,t){t&&(e?"wx84fe73c9806bca0a"!=e?N({appId:e,path:t}):wx.navigateTo({url:t}):wx.navigateTo({url:"/pages/webview/webview?src=".concat(encodeURIComponent(t))}))},formatSeconds:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=/^(-|\+)?\d+$/;if(n.test(e)){var r=Math.floor(e/3600),o=Math.floor(e%3600/60),a=e%60,i="";return r>0&&(r<10&&(i+="0"),i+=r,i+="小时"),o>0&&(o<10&&(i+="0"),i+=o,i+="分钟",t)?i:(a<10&&(i+="0"),i+=a,i+="秒")}return""}};
},{isPage:false,isComponent:false,currentFile:'utils/util.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/validate.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports={phoneValid:/^1\d{10}$|^[6|9]\d{7}$|^[0][9]\d{8}$|^[6][8|6]\d{5}$/,idCardValid:/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/};
},{isPage:false,isComponent:false,currentFile:'utils/validate.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/weapp.qrcode.esm.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../@babel/runtime/helpers/typeof"),e=Object.prototype.hasOwnProperty,r=Object.prototype.toString,o=Object.defineProperty,n=Object.getOwnPropertyDescriptor,i=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===r.call(t)},a=function(t){if(!t||"[object Object]"!==r.call(t))return!1;var o,n=e.call(t,"constructor"),i=t.constructor&&t.constructor.prototype&&e.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!i)return!1;for(o in t);return void 0===o||e.call(t,o)},u=function(t,e){o&&"__proto__"===e.name?o(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},s=function(t,r){if("__proto__"===r){if(!e.call(t,r))return;if(n)return n(t,r).value}return t[r]};function h(t){this.mode=f.MODE_8BIT_BYTE,this.data=t}function l(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=new Array}h.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},l.prototype={addData:function(t){var e=new h(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=C.getRSBlocks(t,this.errorCorrectLevel),r=new E,o=0,n=0;n<e.length;n++)o+=e[n].dataCount;for(n=0;n<this.dataList.length;n++){var i=this.dataList[n];r.put(i.mode,4),r.put(i.getLength(),d.getLengthInBits(i.mode,t)),i.write(r)}if(r.getLengthInBits()<=8*o)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[r][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=l.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var o=-1;o<=7;o++)e+o<=-1||this.moduleCount<=e+o||(this.modules[t+r][e+o]=0<=r&&r<=6&&(0==o||6==o)||0<=o&&o<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=o&&o<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var o=d.getLostPoint(this);(0==r||t>o)&&(t=o,e=r)}return e},createMovieClip:function(t,e,r){var o=t.createEmptyMovieClip(e,r);this.make();for(var n=0;n<this.modules.length;n++)for(var i=1*n,a=0;a<this.modules[n].length;a++){var u=1*a;this.modules[n][a]&&(o.beginFill(0,100),o.moveTo(u,i),o.lineTo(u+1,i),o.lineTo(u+1,i+1),o.lineTo(u,i+1),o.endFill())}return o},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=d.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var o=t[e],n=t[r];if(null==this.modules[o][n])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[o+i][n+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},setupTypeNumber:function(t){for(var e=d.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var o=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=o}for(r=0;r<18;r++)o=!t&&1==(e>>r&1),this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=o},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,o=d.getBCHTypeInfo(r),n=0;n<15;n++){var i=!t&&1==(o>>n&1);n<6?this.modules[n][8]=i:n<8?this.modules[n+1][8]=i:this.modules[this.moduleCount-15+n][8]=i}for(n=0;n<15;n++)i=!t&&1==(o>>n&1),n<8?this.modules[8][this.moduleCount-n-1]=i:n<9?this.modules[8][15-n-1+1]=i:this.modules[8][15-n-1]=i;this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,o=this.moduleCount-1,n=7,i=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var u=0;u<2;u++)if(null==this.modules[o][a-u]){var s=!1;i<t.length&&(s=1==(t[i]>>>n&1)),d.getMask(e,o,a-u)&&(s=!s),this.modules[o][a-u]=s,-1==--n&&(i++,n=7)}if((o+=r)<0||this.moduleCount<=o){o-=r,r=-r;break}}}},l.PAD0=236,l.PAD1=17,l.createData=function(t,e,r){for(var o=C.getRSBlocks(t,e),n=new E,i=0;i<r.length;i++){var a=r[i];n.put(a.mode,4),n.put(a.getLength(),d.getLengthInBits(a.mode,t)),a.write(n)}var u=0;for(i=0;i<o.length;i++)u+=o[i].dataCount;if(n.getLengthInBits()>8*u)throw new Error("code length overflow. ("+n.getLengthInBits()+">"+8*u+")");for(n.getLengthInBits()+4<=8*u&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(!1);for(;!(n.getLengthInBits()>=8*u||(n.put(l.PAD0,8),n.getLengthInBits()>=8*u));)n.put(l.PAD1,8);return l.createBytes(n,o)},l.createBytes=function(t,e){for(var r=0,o=0,n=0,i=new Array(e.length),a=new Array(e.length),u=0;u<e.length;u++){var s=e[u].dataCount,h=e[u].totalCount-s;o=Math.max(o,s),n=Math.max(n,h),i[u]=new Array(s);for(var l=0;l<i[u].length;l++)i[u][l]=255&t.buffer[l+r];r+=s;var f=d.getErrorCorrectPolynomial(h),g=new p(i[u],f.getLength()-1).mod(f);for(a[u]=new Array(f.getLength()-1),l=0;l<a[u].length;l++){var c=l+g.getLength()-a[u].length;a[u][l]=c>=0?g.get(c):0}}var m=0;for(l=0;l<e.length;l++)m+=e[l].totalCount;var v=new Array(m),C=0;for(l=0;l<o;l++)for(u=0;u<e.length;u++)l<i[u].length&&(v[C++]=i[u][l]);for(l=0;l<n;l++)for(u=0;u<e.length;u++)l<a[u].length&&(v[C++]=a[u][l]);return v};for(var f={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},g={L:1,M:0,Q:3,H:2},c={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},d={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;d.getBCHDigit(e)-d.getBCHDigit(d.G15)>=0;)e^=d.G15<<d.getBCHDigit(e)-d.getBCHDigit(d.G15);return(t<<10|e)^d.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;d.getBCHDigit(e)-d.getBCHDigit(d.G18)>=0;)e^=d.G18<<d.getBCHDigit(e)-d.getBCHDigit(d.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return d.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case c.PATTERN000:return(e+r)%2==0;case c.PATTERN001:return e%2==0;case c.PATTERN010:return r%3==0;case c.PATTERN011:return(e+r)%3==0;case c.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case c.PATTERN101:return e*r%2+e*r%3==0;case c.PATTERN110:return(e*r%2+e*r%3)%2==0;case c.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new p([1],0),r=0;r<t;r++)e=e.multiply(new p([1,m.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case f.MODE_NUMBER:return 10;case f.MODE_ALPHA_NUM:return 9;case f.MODE_8BIT_BYTE:case f.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case f.MODE_NUMBER:return 12;case f.MODE_ALPHA_NUM:return 11;case f.MODE_8BIT_BYTE:return 16;case f.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case f.MODE_NUMBER:return 14;case f.MODE_ALPHA_NUM:return 13;case f.MODE_8BIT_BYTE:return 16;case f.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,o=0;o<e;o++)for(var n=0;n<e;n++){for(var i=0,a=t.isDark(o,n),u=-1;u<=1;u++)if(!(o+u<0||e<=o+u))for(var s=-1;s<=1;s++)n+s<0||e<=n+s||0==u&&0==s||a==t.isDark(o+u,n+s)&&i++;i>5&&(r+=3+i-5)}for(o=0;o<e-1;o++)for(n=0;n<e-1;n++){var h=0;t.isDark(o,n)&&h++,t.isDark(o+1,n)&&h++,t.isDark(o,n+1)&&h++,t.isDark(o+1,n+1)&&h++,0!=h&&4!=h||(r+=3)}for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(o,n)&&!t.isDark(o,n+1)&&t.isDark(o,n+2)&&t.isDark(o,n+3)&&t.isDark(o,n+4)&&!t.isDark(o,n+5)&&t.isDark(o,n+6)&&(r+=40);for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(o,n)&&!t.isDark(o+1,n)&&t.isDark(o+2,n)&&t.isDark(o+3,n)&&t.isDark(o+4,n)&&!t.isDark(o+5,n)&&t.isDark(o+6,n)&&(r+=40);var l=0;for(n=0;n<e;n++)for(o=0;o<e;o++)t.isDark(o,n)&&l++;return r+Math.abs(100*l/e/e-50)/5*10}},m={glog:function(t){if(t<1)throw new Error("glog("+t+")");return m.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return m.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},v=0;v<8;v++)m.EXP_TABLE[v]=1<<v;for(v=8;v<256;v++)m.EXP_TABLE[v]=m.EXP_TABLE[v-4]^m.EXP_TABLE[v-5]^m.EXP_TABLE[v-6]^m.EXP_TABLE[v-8];for(v=0;v<255;v++)m.LOG_TABLE[m.EXP_TABLE[v]]=v;function p(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var o=0;o<t.length-r;o++)this.num[o]=t[o+r]}function C(t,e){this.totalCount=t,this.dataCount=e}function E(){this.buffer=new Array,this.length=0}p.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var o=0;o<t.getLength();o++)e[r+o]^=m.gexp(m.glog(this.get(r))+m.glog(t.get(o)));return new p(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=m.glog(this.get(0))-m.glog(t.get(0)),r=new Array(this.getLength()),o=0;o<this.getLength();o++)r[o]=this.get(o);for(o=0;o<t.getLength();o++)r[o]^=m.gexp(m.glog(t.get(o))+e);return new p(r,0).mod(t)}},C.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],C.getRSBlocks=function(t,e){var r=C.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=r.length/3,n=new Array,i=0;i<o;i++)for(var a=r[3*i+0],u=r[3*i+1],s=r[3*i+2],h=0;h<a;h++)n.push(new C(u,s));return n},C.getRsBlockTable=function(t,e){switch(e){case g.L:return C.RS_BLOCK_TABLE[4*(t-1)+0];case g.M:return C.RS_BLOCK_TABLE[4*(t-1)+1];case g.Q:return C.RS_BLOCK_TABLE[4*(t-1)+2];case g.H:return C.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},E.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var T=function(e){(e=function e(){var r,o,n,h,l,f,g=arguments[0],c=1,d=arguments.length,m=!1;for("boolean"==typeof g&&(m=g,g=arguments[1]||{},c=2),(null==g||"object"!=t(g)&&"function"!=typeof g)&&(g={});c<d;++c)if(null!=(r=arguments[c]))for(o in r)n=s(g,o),g!==(h=s(r,o))&&(m&&h&&(a(h)||(l=i(h)))?(l?(l=!1,f=n&&i(n)?n:[]):f=n&&a(n)?n:{},u(g,{name:o,newValue:e(m,f,h)})):void 0!==h&&u(g,{name:o,newValue:h}));return g}(!0,{width:256,height:256,x:0,y:0,typeNumber:-1,correctLevel:g.H,background:"#ffffff",foreground:"#000000",image:{imageResource:"",dx:0,dy:0,dWidth:100,dHeight:100}},e=e||{})).canvasId||e.ctx?function(){var t,r=new l(e.typeNumber,e.correctLevel);r.addData(function(t){var e,r,o,n;for(e="",o=t.length,r=0;r<o;r++)(n=t.charCodeAt(r))>=1&&n<=127?e+=t.charAt(r):n>2047?(e+=String.fromCharCode(224|n>>12&15),e+=String.fromCharCode(128|n>>6&63),e+=String.fromCharCode(128|n>>0&63)):(e+=String.fromCharCode(192|n>>6&31),e+=String.fromCharCode(128|n>>0&63));return e}(e.text)),r.make(),t=e.ctx?e.ctx:e._this?wx.createCanvasContext&&wx.createCanvasContext(e.canvasId,e._this):wx.createCanvasContext&&wx.createCanvasContext(e.canvasId);for(var o=e.width/r.getModuleCount(),n=e.height/r.getModuleCount(),i=0;i<r.getModuleCount();i++)for(var a=0;a<r.getModuleCount();a++){var u=r.isDark(i,a)?e.foreground:e.background;t.setFillStyle(u);var s=Math.ceil((a+1)*o)-Math.floor(a*o),h=Math.ceil((i+1)*o)-Math.floor(i*o);t.fillRect(Math.round(a*o)+e.x,Math.round(i*n)+e.y,s,h)}e.image.imageResource&&t.drawImage(e.image.imageResource,e.image.dx,e.image.dy,e.image.dWidth,e.image.dHeight),t.draw(!1,(function(t){e.callback&&e.callback(t)}))}():console.warn("please set canvasId or ctx!")};exports.default=T;
},{isPage:false,isComponent:false,currentFile:'utils/weapp.qrcode.esm.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("app.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@babel/runtime/helpers/interopRequireDefault"),t=e(require("./utils/touch")),n=e(require("./utils/util")),o=require("./utils/appInfo");App({onLaunch:function(){if(wx.canIUse("getUpdateManager")){var e=wx.getUpdateManager();e.onCheckForUpdate((function(t){t.hasUpdate&&(e.onUpdateReady((function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(t){t.confirm&&e.applyUpdate()}})})),e.onUpdateFailed((function(){wx.showModal({title:"已经有新版本了哟~",content:"新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"})})))}))}else wx.showModal({title:"提示",content:"当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"})},onShow:function(){var e=this;this.globalData.appCode||(0,o.getAppInfo)().then((function(t){!n.default.isEmpty(t)&&t.code&&(e.globalData.appCode=t.code)}))},globalData:{appCode:"",userInfo:null,openId:"",unionId:"",vcode:""},touch:new t.default});
},{isPage:false,isComponent:false,currentFile:'app.js'});require("app.js");$gwx_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_0 || [];
function gz$gwx_XC_0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'show']],[[2,'!'],[[2,'!'],[[2,'!'],[[6],[[7],[3,'serviceConfig']],[3,'ruleConfigList']]]]]])
Z([[2,'&&'],[[7],[3,'show']],[[2,'!'],[[2,'!'],[[6],[[7],[3,'serviceConfig']],[3,'ruleConfigList']]]]])
Z([3,'item'])
Z([[6],[[7],[3,'serviceConfig']],[3,'ruleConfigList']])
Z([3,'index'])
Z([[2,'==='],[[7],[3,'activeTab']],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_0=true;
var x=['./components/ExplainDetail/ExplainDetail.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_0_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
var xC=_v()
_(r,xC)
if(_oz(z,1,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
if(_oz(z,5,hG,cF,gg)){oJ.wxVkey=1
}
oJ.wxXCkey=1
return oH
}
oD.wxXCkey=2
_2z(z,3,fE,e,s,gg,oD,'item','index','index')
}
oB.wxXCkey=1
xC.wxXCkey=1
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_0";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/ExplainDetail/ExplainDetail.wxml'] = [$gwx_XC_0, './components/ExplainDetail/ExplainDetail.wxml'];else __wxAppCode__['components/ExplainDetail/ExplainDetail.wxml'] = $gwx_XC_0( './components/ExplainDetail/ExplainDetail.wxml' );
	;__wxRoute = "components/ExplainDetail/ExplainDetail";__wxRouteBegin = true;__wxAppCurrentFile__="components/ExplainDetail/ExplainDetail.js";define("components/ExplainDetail/ExplainDetail.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../utils/util");Component({options:{addGlobalClass:!0},properties:{show:{type:Boolean,value:!1,observer:function(t){var o=this;setTimeout((function(){o.setData({showPop:t})}),10)}},serviceConfig:{type:Object,value:{}}},data:{activeTab:0,markers:[],local:{},showPop:!1,notice:"",showNotice:!1},methods:{btnTab:function(t){var o=+t.currentTarget.dataset.index;this.setData({activeTab:o})},btnOk:function(){this.setData({show:!1})},btnCall:function(){var t=this.data.busInfo.dptStationInfo.ContactPhoneNo;wx.makePhoneCall({phoneNumber:t})},btnNotice:function(){this.setData({showNotice:!this.data.showNotice})},btnMap:function(){}}});
},{isPage:false,isComponent:true,currentFile:'components/ExplainDetail/ExplainDetail.js'});require("components/ExplainDetail/ExplainDetail.js");$gwx_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_1 || [];
function gz$gwx_XC_1_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'btnClose'])
Z([3,'btnOk'])
Z([3,'我知道了'])
Z([3,'auto'])
Z([3,'65vh'])
Z([[7],[3,'show']])
Z([[4],[[5],[1,'选择乘客']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_1=true;
var x=['./components/Passenger/Passenger.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_1_1()
var aL=_mz(z,'TabPubPop',['bindclose',0,'bindok',1,'btnTxt',1,'height',2,'maxheight',3,'show',4,'tabs',5],[],e,s,gg)
_(r,aL)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_1";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/Passenger/Passenger.wxml'] = [$gwx_XC_1, './components/Passenger/Passenger.wxml'];else __wxAppCode__['components/Passenger/Passenger.wxml'] = $gwx_XC_1( './components/Passenger/Passenger.wxml' );
	;__wxRoute = "components/Passenger/Passenger";__wxRouteBegin = true;__wxAppCurrentFile__="components/Passenger/Passenger.js";define("components/Passenger/Passenger.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../@babel/runtime/helpers/objectSpread2"),s=require("../../@babel/runtime/helpers/defineProperty"),a=e(require("../behavior")),n=require("../../utils/util");Component({behaviors:[a.default],properties:{show:{type:Boolean,value:!1},passengers:{type:Array,value:[]},busInfo:{type:Object,value:{}},maxAdultNum:{type:Number,value:0}},data:{},observers:{busInfo:function(e){}},methods:{btnSelected:function(e){var t=e.currentTarget.dataset.id,a=this.data,r=a.passengers,i=(a.busInfo,r.findIndex((function(e){return e.id==t}))),o=r.filter((function(e){return e.selected})),u=r[i];this.$root().selectComponent("#SelectedPass");!u.selected&&o.length>=a.maxAdultNum?n.alert("最多只能预订".concat(a.maxAdultNum,"张票")):this.setData(s({},"passengers[".concat(i,"].selected"),!u.selected))},btnOk:function(){var e=this.data.passengers,t=this.$root().selectComponent("#SelectedPass");wx.setStorage({key:"bus_lastPassengers",data:e.filter((function(e){return e.selected}))}),t.setData({passengers:JSON.parse(JSON.stringify(this.data.passengers))}),t.fromPassUpdateSP()},btnClose:function(){this.setData({passengers:[]})},btnAdd:function(){var e=this.data.busInfo,t=this.$root();wx.navigateTo({url:"/pages/common/busIDCard/busIDCard",events:{updatePass:function(e){var a=t.selectComponent("#SelectedPass");a.setData({isGetLastPass:!1,show:!0}),t.getPassengers().then((function(t){n.isEmpty(e)||setTimeout((function(){var t;a.btnShowPassengers(),a.setData((s(t={},"passengers[".concat(0,"].typeTicket"),e.typeTicket),s(t,"passengers[".concat(0,"].selected"),!0),t)),a.syncPassengers()}),1e3)}))}},success:function(t){t.eventChannel.emit("passdata",{busInfo:e})},fail:function(e){console.error(e)}})},btnEdit:function(e){var a=e.currentTarget.dataset.index,r=this.data,i=r.busInfo,o=r.passengers[a],u=this.$root();wx.navigateTo({url:"/pages/common/busIDCard/busIDCard",events:{updatePass:function(e){var t=u.selectComponent("#SelectedPass");t.setData({isGetLastPass:!1,show:!0}),u.getPassengers().then((function(a){if(!n.isEmpty(e)){var r=o.id>0?a.findIndex((function(t){return t.id==e.id})):0;setTimeout((function(){t.btnShowPassengers(),r>-1&&(t.setData(s({},"passengers[".concat(r,"].selected"),!0)),t.syncPassengers())}),1e3)}}))}},success:function(e){e.eventChannel.emit("passdata",{busInfo:i,isEdit:!0,passInfo:t(t({},o),{},{ticketType:o.typeTicket,passengerName:o.passengerName,certificateNumber:o.certificateNumber})})}})}}});
},{isPage:false,isComponent:true,currentFile:'components/Passenger/Passenger.js'});require("components/Passenger/Passenger.js");$gwx_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];
function gz$gwx_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'selectedPass new-pass'])
Z([[2,'&&'],[[7],[3,'isShowPerPassengerPhone']],[1,false]])
Z([[2,'>'],[[6],[[7],[3,'passengers']],[3,'length']],[1,0]])
Z([a,[3,'cap flex_box flex_align_center '],[[2,'?:'],[[2,'>'],[[6],[[7],[3,'passengers']],[3,'length']],[1,0]],[1,'bor-bottom'],[1,'']]])
Z([[2,'>'],[[6],[[7],[3,'passengers']],[3,'length']],[1,0]])
Z(z[4])
Z([3,'idx'])
Z([3,'item'])
Z([[7],[3,'selectedPass']])
Z(z[6])
Z([3,'btnEdit'])
Z([3,'passWrap'])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'showDeleteBtn']]])
Z(z[1])
Z([[2,'<='],[[6],[[7],[3,'selectedPass']],[3,'length']],[1,0]])
Z([1,true])
Z([3,'choseTTypeCb'])
Z([[7],[3,'busInfo']])
Z([3,'TicketType'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_2=true;
var x=['./components/SelectedPass/SelectedPass.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_2_1()
var eN=_n('view')
_rz(z,eN,'class',0,e,s,gg)
var bO=_v()
_(eN,bO)
if(_oz(z,1,e,s,gg)){bO.wxVkey=1
}
var oP=_v()
_(eN,oP)
if(_oz(z,2,e,s,gg)){oP.wxVkey=1
var fS=_n('view')
_rz(z,fS,'class',3,e,s,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,4,e,s,gg)){cT.wxVkey=1
}
var hU=_v()
_(fS,hU)
if(_oz(z,5,e,s,gg)){hU.wxVkey=1
}
cT.wxXCkey=1
hU.wxXCkey=1
_(oP,fS)
}
var oV=_v()
_(eN,oV)
var cW=function(lY,oX,aZ,gg){
var e2=_mz(z,'view',['catchtap',10,'class',1],[],lY,oX,gg)
var b3=_v()
_(e2,b3)
if(_oz(z,12,lY,oX,gg)){b3.wxVkey=1
}
var o4=_v()
_(e2,o4)
if(_oz(z,13,lY,oX,gg)){o4.wxVkey=1
}
b3.wxXCkey=1
o4.wxXCkey=1
_(aZ,e2)
return aZ
}
oV.wxXCkey=2
_2z(z,8,cW,e,s,gg,oV,'item','idx','idx')
var xQ=_v()
_(eN,xQ)
if(_oz(z,14,e,s,gg)){xQ.wxVkey=1
}
var oR=_v()
_(eN,oR)
if(_oz(z,15,e,s,gg)){oR.wxVkey=1
}
bO.wxXCkey=1
oP.wxXCkey=1
xQ.wxXCkey=1
oR.wxXCkey=1
_(r,eN)
var x5=_mz(z,'TicketType',['bindcallback',16,'busInfo',1,'id',2],[],e,s,gg)
_(r,x5)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_2";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/SelectedPass/SelectedPass.wxml'] = [$gwx_XC_2, './components/SelectedPass/SelectedPass.wxml'];else __wxAppCode__['components/SelectedPass/SelectedPass.wxml'] = $gwx_XC_2( './components/SelectedPass/SelectedPass.wxml' );
	;__wxRoute = "components/SelectedPass/SelectedPass";__wxRouteBegin = true;__wxAppCurrentFile__="components/SelectedPass/SelectedPass.js";define("components/SelectedPass/SelectedPass.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../@babel/runtime/helpers/createForOfIteratorHelper"),s=require("../../@babel/runtime/helpers/defineProperty"),a=require("../../utils/util"),n=e(require("../behavior")),r=require("../../utils/util"),i=require("../../utils/config");Component({behaviors:[n.default],options:{addGlobalClass:!0},properties:{maxAdultNum:{type:Number,value:0},passengers:{type:Array,value:[]},busInfo:{type:Object,value:{}},headcount:{type:Number,value:0},isShowPerPassengerPhone:{type:Boolean,value:!1}},data:{selectedPass:[],isGetLastPass:!1,phoneFormat:"",scrollX:0,_scrollNum:[]},observers:{"passengers.**, busInfo":r.debounce((function(e,t){if(!r.isEmpty(e)){this.data;var s=this.$root(),a=e.filter((function(e){return e.selected}))||[];this.setData({selectedPass:a}),s.setData({headcount:0,selectedPass:a}),this.pushNoticeInfo("passenger",{headcount:0})}}),200),busInfo:function(e){r.isEmpty(e)||this.needMobileBySupplierId()},"selectedPass,_scrollNum":function(e,t){r.isEmpty(e)||r.isEmpty(t)||this.fnScrollX()}},methods:{syncPassengers:function(e){for(var t=JSON.parse(JSON.stringify(this.data.passengers))||[],a=this.data.passengers,n=0,i=t.length;n<i;n++){var o=t[n],c=a[n];r.equals(o,c)||this.setData(s({},"passengers[".concat(n,"]"),t[n]))}},btnEdit:function(){},setPhoneFromLocal:function(){var e=wx.getStorageSync("bus_newContactPhone")||"";this.assignPhone(e)},assignPhone:function(e){var t,s=e.length;e=e.replace(/\s+/g,""),t=s<=3?e:s>3&&s<=7?"".concat(e.substr(0,3)," ").concat(e.substr(3)):"".concat(e.substr(0,3)," ").concat(e.substr(3,4)," ").concat(e.substr(7,4)),this.setData({contactPhone:e,phoneFormat:t}),wx.setStorageSync("bus_newContactPhone",e)},btnSendEvPhone:function(e){this.assignPhone(e.detail.value)},toogleSelectPass:function(e){var t=e.currentTarget.dataset.index,a=this.data,n=(a.busInfo,a.passengers[t]),i=a.selectedPass;if(n.selected)this.setData(s({},"passengers[".concat(t,"].selected"),!1));else{if(!n.selected&&i.length>=a.maxAdultNum)return void r.alert("最多只能预订".concat(a.maxAdultNum,"张票"));this.setData(s({},"passengers[".concat(t,"].selected"),!0))}this.syncPassengers()},updatePassengers:function(e){var t=this.data.passengers;t[e.index].selected=e.selected,this.setData({passengers:t})},fromPassUpdateSP:function(){var e,s=this,a=[],n=t(this.data.passengers);try{for(n.s();!(e=n.n()).done;){var r=e.value;(r.selected&&0==r.source||r.selected&&1==r.source&&this.data.isHas12306&&this.data.isCheck12306)&&function(){var e=JSON.parse(JSON.stringify(r));e.idType=e.listNos[0].certType,e.showDeleteBtn=!1,s.data.selectedPass.forEach((function(t){e.certificateNumber==t.certificateNumber&&e.passengerName==t.passengerName&&(e.typeTicket=t.typeTicket)})),delete e.selected,a.push(e)}()}}catch(e){n.e(e)}finally{n.f()}this.setData({selectedPass:a})},btnToggleDelBtn:function(e){var t=e.currentTarget.dataset.index,s=this.data.selectedPass;s[t].showDeleteBtn=!s[t].showDeleteBtn,this.setData({selectedPass:s})},btnDeletePass:function(e){var t=e.currentTarget.dataset.id,a=this.data.passengers,n=a.findIndex((function(e){return e.id==t})),r=a[n];r.showDeleteBtn=!r.showDeleteBtn,r.selected=!r.selected,this.setData(s({},"passengers[".concat(n,"]"),r)),this.updatePassengers({selected:!1,index:n}),this.fromPassUpdateSP()},btnEveryPhone:function(e){var t=e.currentTarget.dataset.id,a=this.data.passengers,n=e.detail.value,i=a.findIndex((function(e){return e.id==t})),o=a[i];wx.tcValidate.isMobile(n)?(o.mobile=n,this.setData(s({},"passengers[".concat(i,"]"),o)),this.fromPassUpdateSP()):r.alert("请输入正确的手机号码")},btnShowTicketType:function(e){var t=e.currentTarget.dataset.id,s=this.data.passengers,a=s.findIndex((function(e){return e.id==t})),n=s[a];this.selectComponent("#TicketType").setData({isShowTType:!0,mapPass:n,mapPassIdx:a})},needMobileBySupplierId:function(){var e=this;r.$http(i.needMobileBySupplierId,{projectId:0,supplierId:this.data.busInfo.supplierId}).then((function(t){e.$root().setData({isShowPerPassengerPhone:!!t})})).catch((function(t){e.$root().setData({isShowPerPassengerPhone:!0})}))},choseTTypeCb:function(e){var t=e.detail;console.log(t)},domScrollXNum:function(){var e=wx.createSelectorQuery().in(this),t=this;e.selectAll("#passList .item").boundingClientRect((function(e){t.setData({_scrollNum:e})})).exec()},fnScrollX:function(){var e,t=this.data,s=t.passengers.findIndex((function(e){return e.selected}));if(!(0,a.isEmpty)(t._scrollNum)){var n=t._scrollNum[s>-1?s:0]||{};e=n.left?n.left-27:0,this.setData({scrollX:e})}},btnShowPassengers:function(){var e=this,t=e.data,a=e.$root();0!=t.passengers.length?this.$root().selectComponent("#Passenger").setData({show:!0,maxAdultNum:t.maxAdultNum,passengers:JSON.parse(JSON.stringify(t.passengers)),busInfo:t.busInfo}):wx.navigateTo({url:"/pages/common/busIDCard/busIDCard",events:{updatePass:function(t){e.setData({isGetLastPass:!1,show:!0}),a.getPassengers().then((function(a){r.isEmpty(t)||setTimeout((function(){e.setData(s({},"passengers[".concat(0,"].selected"),!0)),e.syncPassengers()}),1e3)}))}},success:function(e){e.eventChannel.emit("passdata",{busInfo:t.busInfo})},fail:function(e){console.error(e)}})}},attached:function(){this.setPhoneFromLocal()}});
},{isPage:false,isComponent:true,currentFile:'components/SelectedPass/SelectedPass.js'});require("components/SelectedPass/SelectedPass.js");$gwx_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_3 || [];
function gz$gwx_XC_3_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'tpp-container'])
Z([3,'z-index: 900;'])
Z([[7],[3,'tabs']])
Z([3,'index'])
Z([[2,'?:'],[[2,'>'],[[6],[[7],[3,'tabs']],[3,'length']],[1,1]],[[7],[3,'item']],[1,'']])
Z([[7],[3,'showBtn']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_3=true;
var x=['./components/TabPubPop/TabPubPop.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_3_1()
var f7=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var h9=_v()
_(f7,h9)
var o0=function(oBB,cAB,lCB,gg){
var tEB=_n('slot')
_rz(z,tEB,'name',4,oBB,cAB,gg)
_(lCB,tEB)
return lCB
}
h9.wxXCkey=2
_2z(z,2,o0,e,s,gg,h9,'item','index','index')
var c8=_v()
_(f7,c8)
if(_oz(z,5,e,s,gg)){c8.wxVkey=1
}
c8.wxXCkey=1
_(r,f7)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_3";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/TabPubPop/TabPubPop.wxml'] = [$gwx_XC_3, './components/TabPubPop/TabPubPop.wxml'];else __wxAppCode__['components/TabPubPop/TabPubPop.wxml'] = $gwx_XC_3( './components/TabPubPop/TabPubPop.wxml' );
	;__wxRoute = "components/TabPubPop/TabPubPop";__wxRouteBegin = true;__wxAppCurrentFile__="components/TabPubPop/TabPubPop.js";define("components/TabPubPop/TabPubPop.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({options:{multipleSlots:!0},properties:{show:{type:Boolean,value:!1},tabs:{type:Array,value:[]},btnTxt:{type:String,value:"我知道了"},hasBg:{type:Boolean,value:!1},showBtn:{type:Boolean,value:!0},btnColorReverse:{type:Boolean,value:!1},height:{type:String,value:""},minheight:{type:String,value:""},maxheight:{type:String,value:""},zIndex:{type:Number,value:null},btEmpty:{type:String,value:""}},data:{active:0,showAn:!1},methods:{btnTab:function(t){var e=t.currentTarget.dataset.index;this.setData({active:e}),this.triggerEvent("active",e)},btnClose:function(){this.setData({active:0}),this.hide(),this.triggerEvent("close")},btnOk:function(){this.setData({active:0}),this.hide(),this.triggerEvent("ok")},hide:function(){this.setData({active:0}),this.setData({show:!1})}}});
},{isPage:false,isComponent:true,currentFile:'components/TabPubPop/TabPubPop.js'});require("components/TabPubPop/TabPubPop.js");$gwx_XC_4=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_4 || [];
function gz$gwx_XC_4_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'60vh'])
Z([[7],[3,'isShowTType']])
Z([1,false])
Z([[4],[[5],[1,'选择票种']]])
Z([[7],[3,'typeArr']])
Z([3,'avatar'])
Z([3,'btnChoseType'])
Z([a,[3,'tItem flex_box flex_align_center '],[[2,'&&'],[[6],[[7],[3,'item']],[3,'forbidden']],[1,'forbidden']],[3,' '],[[2,'&&'],[[2,'!='],[[2,'-'],[[6],[[7],[3,'typeArr']],[3,'length']],[1,1]],[[7],[3,'index']]],[1,'bor-bottom']]])
Z([[7],[3,'index']])
Z([3,'tLeft approw'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'student']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'adult']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'child']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'baby']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_4=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_4=true;
var x=['./components/TicketType/TicketType.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_4_1()
var bGB=_mz(z,'TabPubPop',['height',0,'show',1,'showBtn',1,'tabs',2],[],e,s,gg)
var oHB=_v()
_(bGB,oHB)
var xIB=function(fKB,oJB,cLB,gg){
var oNB=_mz(z,'view',['bindtap',6,'class',1,'data-index',2],[],fKB,oJB,gg)
var cOB=_n('view')
_rz(z,cOB,'class',9,fKB,oJB,gg)
var oPB=_v()
_(cOB,oPB)
if(_oz(z,10,fKB,oJB,gg)){oPB.wxVkey=1
}
var lQB=_v()
_(cOB,lQB)
if(_oz(z,11,fKB,oJB,gg)){lQB.wxVkey=1
}
var aRB=_v()
_(cOB,aRB)
if(_oz(z,12,fKB,oJB,gg)){aRB.wxVkey=1
}
var tSB=_v()
_(cOB,tSB)
if(_oz(z,13,fKB,oJB,gg)){tSB.wxVkey=1
}
oPB.wxXCkey=1
lQB.wxXCkey=1
aRB.wxXCkey=1
tSB.wxXCkey=1
_(oNB,cOB)
_(cLB,oNB)
return cLB
}
oHB.wxXCkey=2
_2z(z,4,xIB,e,s,gg,oHB,'item','index','avatar')
_(r,bGB)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_4";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_4();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/TicketType/TicketType.wxml'] = [$gwx_XC_4, './components/TicketType/TicketType.wxml'];else __wxAppCode__['components/TicketType/TicketType.wxml'] = $gwx_XC_4( './components/TicketType/TicketType.wxml' );
	;__wxRoute = "components/TicketType/TicketType";__wxRouteBegin = true;__wxAppCurrentFile__="components/TicketType/TicketType.js";define("components/TicketType/TicketType.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../utils/util");Component({properties:{busInfo:{type:Object,value:{}},isShowTType:{type:Boolean,value:!1},mapPass:{type:Object,optionalTypes:[String],value:{}},mapPassIdx:{type:Number,value:-1}},data:{typeArr:[{avatar:"https://file.40017.cn/img140017cnproduct/touch/bus/wx_bus/fiveinone/adult.png",name:"成人票",type:"adult",price:0,left:0,tips:"有座 身份证取票",selected:!0,forbidden:!1},{avatar:"https://file.40017.cn/img140017cnproduct/touch/bus/wx_bus/fiveinone/child.png",name:"儿童票",type:"child",price:0,left:0,tips:'有座 限<span class="sub-color">1.5米以下</span>儿童 身份证或户口本取票',selected:!1,forbidden:!0},{avatar:"https://file.40017.cn/img140017cnproduct/touch/bus/wx_bus/fiveinone/baby.png",name:"携童票",type:"baby",price:0,left:0,tips:'<span class="sub-color">无座</span> 限<span class="sub-color">1.2米以下</span>儿童 同成人共用一张票',selected:!1,forbidden:!0},{avatar:"https://file.40017.cn/groundtraffic/linebus/linebus/travel-platform-applet/student.png",name:"学生票",type:"student",price:0,left:0,tips:"有座 身份证+学生证取票",selected:!1,forbidden:!0}],freeChildLeft:0,isStudent:!1},observers:{},methods:{btnChoseType:function(e){var t=e.currentTarget.dataset.index,s=this.data,a=s.typeArr,n=a[t];n.forbidden||(n.selected||(a.forEach((function(e){e.selected=!1})),n.selected=!0),this.triggerEvent("callback",{type:n.type,index:s.mapPassIdx}),this.setData({typeArr:a,isShowTType:!1}))}}});
},{isPage:false,isComponent:true,currentFile:'components/TicketType/TicketType.js'});require("components/TicketType/TicketType.js");$gwx_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];
function gz$gwx_XC_5_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'itemI'])
Z([3,'itemS'])
Z([[7],[3,'daysList']])
Z(z[0])
Z([3,'changeDate'])
Z([a,[3,'date-item '],[[2,'?:'],[[2,'=='],[[7],[3,'itemI']],[[7],[3,'select']]],[1,'selected'],[1,'']],[3,'  '],[[2,'?:'],[[2,'=='],[[7],[3,'itemI']],[[7],[3,'tomorrow']]],[1,'tomorrow'],[1,'']]])
Z([[6],[[7],[3,'itemS']],[3,'date']])
Z([[7],[3,'itemI']])
Z([[6],[[7],[3,'itemS']],[3,'icon']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_5=true;
var x=['./components/calendars/calendars.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
var bUB=_v()
_(r,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_mz(z,'view',['catchtap',4,'class',1,'data-date',2,'data-index',3],[],oXB,xWB,gg)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,8,oXB,xWB,gg)){o2B.wxVkey=1
}
o2B.wxXCkey=1
_(fYB,h1B)
return fYB
}
bUB.wxXCkey=2
_2z(z,2,oVB,e,s,gg,bUB,'itemS','itemI','itemI')
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_5";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/calendars/calendars.wxml'] = [$gwx_XC_5, './components/calendars/calendars.wxml'];else __wxAppCode__['components/calendars/calendars.wxml'] = $gwx_XC_5( './components/calendars/calendars.wxml' );
	;__wxRoute = "components/calendars/calendars";__wxRouteBegin = true;__wxAppCurrentFile__="components/calendars/calendars.js";define("components/calendars/calendars.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/manba")),e=getApp(),a=require("../../utils/util");Component({properties:{isLoading:{type:Boolean,value:!0},coverSelf:Boolean},data:{daysList:[],scrollLeft:0,defaultWidth:60,select:0,startdate:"",enddate:"",querydate:"",navHeight:2*e.globalData.totalNavHeight,calendarIconData:{}},methods:{togCalendar:function(t){this.triggerEvent("toggleCalendar")},changeDate:function(t){if(!this.data.isLoading){var e=t.currentTarget.dataset;console.log(e);var a=e.index,s=0,i=e.date;this.data.querydate=new Date(i.split("-").join("/")).getTime(),s=a>2?(a-2)*this.data.defaultWidth:0,this.setData({select:a,tomorrow:a+1,scrollLeft:s}),this.initDayList(),this.triggerEvent("select",e)}},initDayList:function(){var t=this.getDayTime(this.data.querydate),e=this.getDayTime(this.data.startdate),a=this.getDayTime(this.data.enddate),s=864e5,i=t-e,r=a-t,l=[],n=0,o=0;if(i<=6048e5){for(var d=0;d<1296e6;d-=-s){var h=e- -d;d==i&&(n=d/s,this.data.select=n);var g=this.format(Number(h),"yyyy-MM-dd ww"),u={week:h==e?"今天":h==e- -s?"明天":h==e- -2*s?"后天":g.split(" ")[1],date:g.split(" ")[0],showDay:g.split(" ")[0].substring(5),showDayNew:g.split(" ")[0].substring(8),oriWeek:g.split(" ")[1]};l.push(u)}o=n>2?(n-2)*this.data.defaultWidth:0}else if(r<=6048e5){for(d=0;d<1296e6;d-=-s){h=a- -d-1296e6- -s;d==r&&(n=(1296e6-d-s)/s,this.data.select=n);u={week:(g=this.format(Number(h),"yyyy-MM-dd ww")).split(" ")[1],date:g.split(" ")[0],showDay:g.split(" ")[0].substring(5),showDayNew:g.split(" ")[0].substring(8),oriWeek:g.split(" ")[1]};l.push(u)}o=n>2?(n-2)*this.data.defaultWidth:0}else{n=7,this.data.select=n,o=(n-2)*this.data.defaultWidth;for(d=0;d<6048e5;d-=-s){h=t-6048e5- -d,u={week:(g=this.format(Number(h),"yyyy-MM-dd ww")).split(" ")[1],date:g.split(" ")[0],showDay:g.split(" ")[0].substring(5),showDayNew:g.split(" ")[0].substring(8),oriWeek:g.split(" ")[1]};l.push(u)}var p=this.format(Number(t),"yyyy-MM-dd ww");l.push({week:p.split(" ")[1],date:p.split(" ")[0],showDay:p.split(" ")[0].substring(5),showDayNew:p.split(" ")[0].substring(8),oriWeek:g.split(" ")[1]});for(d=s;d<=6048e5;d-=-s){h=t- -d,u={week:(g=this.format(h,"yyyy-MM-dd ww")).split(" ")[1],date:g.split(" ")[0],showDay:g.split(" ")[0].substring(5),showDayNew:g.split(" ")[0].substring(8),oriWeek:g.split(" ")[1]};l.push(u)}}console.log("daysList---\x3e",l),this.setData({daysList:l,select:n,tomorrow:n+1,scrollLeft:o})},init:function(){console.log("init calendar"),this.initDayList()},getDayTime:function(e){return e?a.isString(e)?new Date((0,t.default)(e)).getTime():new Date((0,t.default)(e).format("YYYY/MM/DD")).getTime():new Date((0,t.default)().format("YYYY/MM/DD")).getTime()},format:function(t,e){var a={"M+":(t="string"==typeof t?this.parseDate(t):new Date(t)).getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var s in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),/(w+)/.test(e)&&(e=e.replace(RegExp.$1,[["日","一","二","三","四","五","六"],["周日","周一","周二","周三","周四","周五","周六"],["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]][RegExp.$1.length-1][t.getDay()])),a)new RegExp("("+s+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?a[s]:("00"+a[s]).substr((""+a[s]).length)));return e},getDateOnly:function(t){return t=this.format(t,"yyyy/MM/dd"),new Date(Date.parse(t))},parseDate:function(t){return new Date(Date.parse(t.replace(/-/g,"/")))}}});
},{isPage:false,isComponent:true,currentFile:'components/calendars/calendars.js'});require("components/calendars/calendars.js");$gwx_XC_6=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_6 || [];
function gz$gwx_XC_6_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_6=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_6=true;
var x=['./components/cityAlphabet/cityAlphabet.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_6_1()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_6";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_6();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/cityAlphabet/cityAlphabet.wxml'] = [$gwx_XC_6, './components/cityAlphabet/cityAlphabet.wxml'];else __wxAppCode__['components/cityAlphabet/cityAlphabet.wxml'] = $gwx_XC_6( './components/cityAlphabet/cityAlphabet.wxml' );
	;__wxRoute = "components/cityAlphabet/cityAlphabet";__wxRouteBegin = true;__wxAppCurrentFile__="components/cityAlphabet/cityAlphabet.js";define("components/cityAlphabet/cityAlphabet.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{},data:{alphabetList:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]},methods:{selectAlphabet:function(t){var e=t.currentTarget.dataset.alphabet;this.triggerEvent("select",e)},handleScroll:function(t){var e=t.currentTarget.dataset.type;this.triggerEvent("scroll",e)}}});
},{isPage:false,isComponent:true,currentFile:'components/cityAlphabet/cityAlphabet.js'});require("components/cityAlphabet/cityAlphabet.js");$gwx_XC_7=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_7 || [];
function gz$gwx_XC_7_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_7=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_7=true;
var x=['./components/loginPopup/loginPopup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_7_1()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_7";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_7();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/loginPopup/loginPopup.wxml'] = [$gwx_XC_7, './components/loginPopup/loginPopup.wxml'];else __wxAppCode__['components/loginPopup/loginPopup.wxml'] = $gwx_XC_7( './components/loginPopup/loginPopup.wxml' );
	;__wxRoute = "components/loginPopup/loginPopup";__wxRouteBegin = true;__wxAppCurrentFile__="components/loginPopup/loginPopup.js";define("components/loginPopup/loginPopup.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../../utils/config")),o=e(require("../../utils/util")),i=require("../../utils/fetch"),n=require("../../utils/userInfo");Component({properties:{},data:{},methods:{goPhoneLogin:function(){wx.navigateTo({url:"/pages/login/login"})},getWxPhone:function(e){var t=this,i=e.detail,r=i.encryptedData,a=i.iv,u=i.errMsg,l=i.code;console.log(e.detail),"getPhoneNumber:ok"===u&&(0,n.getWxMobile)(r,a,l).then((function(e){!o.default.isEmpty(e)&&e.phone&&t.wxPhoneLogin(e)}))},wxPhoneLogin:function(e){var n=this;console.log(e),(0,i.fetch)({url:"".concat(t.default.urlPrefix,"/member/register"),method:"POST",data:{openId:e.openId,mobile:e.phone,appCode:e.appCode,sms:!1},complete:function(e){var t=e.data;t&&"200"===t.code&&t.data?(wx.setStorageSync("memberId",t.data.memberId),n.triggerEvent("loginSuccess",t.data)):o.default.alert(t.msg||"登录失败，请稍后再试")}})}}});
},{isPage:false,isComponent:true,currentFile:'components/loginPopup/loginPopup.js'});require("components/loginPopup/loginPopup.js");$gwx_XC_8=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_8 || [];
function gz$gwx_XC_8_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_8=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_8=true;
var x=['./components/nineList/nineList.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_8_1()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_8";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_8();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/nineList/nineList.wxml'] = [$gwx_XC_8, './components/nineList/nineList.wxml'];else __wxAppCode__['components/nineList/nineList.wxml'] = $gwx_XC_8( './components/nineList/nineList.wxml' );
	;__wxRoute = "components/nineList/nineList";__wxRouteBegin = true;__wxAppCurrentFile__="components/nineList/nineList.js";define("components/nineList/nineList.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/objectSpread2");Component({properties:{list:Array,num:{type:Number,value:3},prop:{type:String,value:"label"}},externalClasses:["class-name"],data:{listNew:[]},observers:{list:function(e,t){this.formateList()}},methods:{formateList:function(){var t=[],r=this.data,a=r.list,i=r.num,s=r.prop;if(i&&a&&a.length){for(var n=Math.ceil(a.length/i),l=0;l<n;l++){var o=l*i,u=o+i;t[l]=a.slice(o,u).map((function(t){return e(e({},t),{},{label:t[s]||""})}))}var h=i-t[n-1].length;if(h>0)for(var c=0;c<h;c++)t[n-1].push({name:"",hidden:!0});this.setData({listNew:t})}},handleClick:function(e){var t=e.currentTarget.dataset.item;t.hidden||this.triggerEvent("click",t)}}});
},{isPage:false,isComponent:true,currentFile:'components/nineList/nineList.js'});require("components/nineList/nineList.js");$gwx_XC_9=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_9 || [];
function gz$gwx_XC_9_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_9=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_9=true;
var x=['./components/orderDetail/orderBaseInfo/orderBaseInfo.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_9_1()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_9";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_9();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/orderDetail/orderBaseInfo/orderBaseInfo.wxml'] = [$gwx_XC_9, './components/orderDetail/orderBaseInfo/orderBaseInfo.wxml'];else __wxAppCode__['components/orderDetail/orderBaseInfo/orderBaseInfo.wxml'] = $gwx_XC_9( './components/orderDetail/orderBaseInfo/orderBaseInfo.wxml' );
	;__wxRoute = "components/orderDetail/orderBaseInfo/orderBaseInfo";__wxRouteBegin = true;__wxAppCurrentFile__="components/orderDetail/orderBaseInfo/orderBaseInfo.js";define("components/orderDetail/orderBaseInfo/orderBaseInfo.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{orderDetail:Object},data:{},methods:{}});
},{isPage:false,isComponent:true,currentFile:'components/orderDetail/orderBaseInfo/orderBaseInfo.js'});require("components/orderDetail/orderBaseInfo/orderBaseInfo.js");$gwx_XC_10=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_10 || [];
function gz$gwx_XC_10_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_10=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_10=true;
var x=['./components/orderDetail/orderCancelPopup/orderCancelPopup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_10_1()
var e8B=_n('Popup')
_rz(z,e8B,'show',0,e,s,gg)
_(r,e8B)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_10";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_10();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/orderDetail/orderCancelPopup/orderCancelPopup.wxml'] = [$gwx_XC_10, './components/orderDetail/orderCancelPopup/orderCancelPopup.wxml'];else __wxAppCode__['components/orderDetail/orderCancelPopup/orderCancelPopup.wxml'] = $gwx_XC_10( './components/orderDetail/orderCancelPopup/orderCancelPopup.wxml' );
	;__wxRoute = "components/orderDetail/orderCancelPopup/orderCancelPopup";__wxRouteBegin = true;__wxAppCurrentFile__="components/orderDetail/orderCancelPopup/orderCancelPopup.js";define("components/orderDetail/orderCancelPopup/orderCancelPopup.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{show:{type:Boolean,value:!0}},data:{},methods:{pass:function(){this.triggerEvent("hidden")},submit:function(){this.triggerEvent("hidden")}}});
},{isPage:false,isComponent:true,currentFile:'components/orderDetail/orderCancelPopup/orderCancelPopup.js'});require("components/orderDetail/orderCancelPopup/orderCancelPopup.js");$gwx_XC_11=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_11 || [];
function gz$gwx_XC_11_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleFooterPopup'])
Z([3,'bottom'])
Z([[7],[3,'showFooterPopup']])
Z([3,'金额明细'])
Z([3,'price-detail-box'])
Z([[6],[[7],[3,'priceInfo']],[3,'serviceFee']])
Z(z[5])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_11=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_11=true;
var x=['./components/orderDetail/orderFooter/orderFooter.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_11_1()
var o0B=_mz(z,'Popup',['bind:hidden',0,'position',1,'show',1,'title',2],[],e,s,gg)
var xAC=_n('view')
_rz(z,xAC,'class',4,e,s,gg)
var oBC=_v()
_(xAC,oBC)
if(_oz(z,5,e,s,gg)){oBC.wxVkey=1
}
var fCC=_v()
_(xAC,fCC)
if(_oz(z,6,e,s,gg)){fCC.wxVkey=1
}
oBC.wxXCkey=1
fCC.wxXCkey=1
_(o0B,xAC)
_(r,o0B)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_11";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_11();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/orderDetail/orderFooter/orderFooter.wxml'] = [$gwx_XC_11, './components/orderDetail/orderFooter/orderFooter.wxml'];else __wxAppCode__['components/orderDetail/orderFooter/orderFooter.wxml'] = $gwx_XC_11( './components/orderDetail/orderFooter/orderFooter.wxml' );
	;__wxRoute = "components/orderDetail/orderFooter/orderFooter";__wxRouteBegin = true;__wxAppCurrentFile__="components/orderDetail/orderFooter/orderFooter.js";define("components/orderDetail/orderFooter/orderFooter.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{orderDetail:{type:Object,value:{},observer:function(e){if(e.orderNo){var t=e.passengers;t&&t.length&&this.setData({priceInfo:{ticketPrice:t[0].price,num:t.length,serviceFee:t[0].serviceFee}})}}},pageName:String},data:{showFooterPopup:!1,priceInfo:{}},methods:{handleFooterPopup:function(){this.setData({showFooterPopup:!this.data.showFooterPopup})},goHome:function(){wx.switchTab({url:"/pages/home/home"})},footerClick:function(){var e=this.data.orderDetail.orderDisplayStatus;0===e?this.triggerEvent("pay"):1===e?this.triggerEvent("refresh"):this.triggerEvent("click")}}});
},{isPage:false,isComponent:true,currentFile:'components/orderDetail/orderFooter/orderFooter.js'});require("components/orderDetail/orderFooter/orderFooter.js");$gwx_XC_12=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_12 || [];
function gz$gwx_XC_12_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_12=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_12=true;
var x=['./components/orderDetail/orderService/orderService.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_12_1()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_12";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_12();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/orderDetail/orderService/orderService.wxml'] = [$gwx_XC_12, './components/orderDetail/orderService/orderService.wxml'];else __wxAppCode__['components/orderDetail/orderService/orderService.wxml'] = $gwx_XC_12( './components/orderDetail/orderService/orderService.wxml' );
	;__wxRoute = "components/orderDetail/orderService/orderService";__wxRouteBegin = true;__wxAppCurrentFile__="components/orderDetail/orderService/orderService.js";define("components/orderDetail/orderService/orderService.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{},data:{},methods:{}});
},{isPage:false,isComponent:true,currentFile:'components/orderDetail/orderService/orderService.js'});require("components/orderDetail/orderService/orderService.js");$gwx_XC_13=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_13 || [];
function gz$gwx_XC_13_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_13=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_13=true;
var x=['./components/orderDetail/orderStatus/orderStatus.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_13_1()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_13";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_13();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/orderDetail/orderStatus/orderStatus.wxml'] = [$gwx_XC_13, './components/orderDetail/orderStatus/orderStatus.wxml'];else __wxAppCode__['components/orderDetail/orderStatus/orderStatus.wxml'] = $gwx_XC_13( './components/orderDetail/orderStatus/orderStatus.wxml' );
	;__wxRoute = "components/orderDetail/orderStatus/orderStatus";__wxRouteBegin = true;__wxAppCurrentFile__="components/orderDetail/orderStatus/orderStatus.js";define("components/orderDetail/orderStatus/orderStatus.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../../utils/typeSetting"),a=e(require("../../../utils/config")),r=e(require("../../../utils/util")),i=require("../../../utils/fetch"),u=e(require("../../../utils/manba")),n=null,o=null;Component({properties:{orderDetail:{type:Object,value:{},observer:function(e){if(e.orderNo){var a=e.orderDisplayStatus,r=t.orderStatusSetting[a],i=t.orderStatusDescSetting[a];0===a?(this.calcLeftTime(e.cancelSecond,e.bookTime),this.loopOrderStatus(e)):(this.cleanTimmer(),this.cleanTimmerStatus()),this.setData({statusName:r||"",statusDesc:i||""})}}},appCode:String,memberId:String},data:{statusName:"",statusDesc:""},detached:function(){this.cleanTimmer(),this.cleanTimmerStatus()},methods:{getTime:function(){return new Promise((function(e,t){(0,i.fetch)({url:"".concat(a.default.urlPrefix,"/orderInfo/gettime"),method:"GET",complete:function(a){var r=a.data;r&&"200"===r.code&&r.data?e(r.data):t(r)}})}))},calcLeftTime:function(e,t){var a=this;this.getTime().then((function(i){var o=e-((0,u.default)(i).time()-(0,u.default)(t).time())/1e3;!function e(){var t="请在0秒内完成支付，否则将为您自动取消";if(o<=0)a.cleanTimmer();else{var i=r.default.formatSeconds(o);t="请在".concat(i,"内完成支付，否则将为您自动取消"),n=setTimeout((function(){o--,e()}),1e3)}a.setData({statusDesc:t||""})}()}))},cleanTimmer:function(){n&&clearTimeout(n),n=null},cleanTimmerStatus:function(){o&&clearTimeout(o),o=null},loopOrderStatus:function(){var e=this;!function t(){var r=e.data.orderDetail,u=r.orderDisplayStatus,n=r.orderNo;0===u?(0,i.fetch)({url:"".concat(a.default.urlPrefix,"/orderInfo/orderStatus"),method:"POST",data:{appCode:e.data.appCode,orderNo:n,memberId:e.data.memberId},complete:function(a){var r=a.data;r&&"200"===r.code&&r.data&&(0!==r.data.orderDisplayStatus?(e.triggerEvent("refresh"),e.cleanTimmerStatus()):o=setTimeout((function(){t()}),3e3))}}):e.cleanTimmerStatus()}()}}});
},{isPage:false,isComponent:true,currentFile:'components/orderDetail/orderStatus/orderStatus.js'});require("components/orderDetail/orderStatus/orderStatus.js");$gwx_XC_14=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_14 || [];
function gz$gwx_XC_14_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showQrcodePopup']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_14=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_14=true;
var x=['./components/orderDetail/qrcode/qrcode.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_14_1()
var cGC=_n('Popup')
_rz(z,cGC,'show',0,e,s,gg)
_(r,cGC)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_14";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_14();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/orderDetail/qrcode/qrcode.wxml'] = [$gwx_XC_14, './components/orderDetail/qrcode/qrcode.wxml'];else __wxAppCode__['components/orderDetail/qrcode/qrcode.wxml'] = $gwx_XC_14( './components/orderDetail/qrcode/qrcode.wxml' );
	;__wxRoute = "components/orderDetail/qrcode/qrcode";__wxRouteBegin = true;__wxAppCurrentFile__="components/orderDetail/qrcode/qrcode.js";define("components/orderDetail/qrcode/qrcode.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../utils/weapp.qrcode.esm.js"));Component({properties:{passengerList:{type:Array,value:[],observer:function(t){var e=this;if(t&&t.length){var r=JSON.parse(JSON.stringify(this.data.passengerList));this.setData({list:r}),r.forEach((function(t,r){e.drawOrderQrcode(r,t.checkNo)}))}}},departureDateFormat:String},data:{showExplain:!1,swiperCurrent:0,list:[],showQrcodePopup:!1},methods:{drawOrderQrcode:function(e,r){var s=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200;if(r){var i=this.data.list,o="orderQrcode"+e;(0,t.default)({width:a,height:a,canvasId:o,text:r,_this:this,callback:function(){setTimeout((function(){wx.canvasToTempFilePath({x:0,y:0,width:a,height:a,destWidth:a,destHeight:a,canvasId:o,success:function(t){i[e].qrcodeSrc=t.tempFilePath,s.setData({list:i}),console.log(i,"list")}},s)}),500)}})}},qrcodeBack:function(){var t=this.data.swiperCurrent-1;t>=0&&this.setData({swiperCurrent:t})},qrcodeNext:function(){var t=this.data.swiperCurrent+1;t<=this.data.passengerList.length-1&&this.setData({swiperCurrent:t})},handleQrcodePopup:function(t){this.setData({showQrcodePopup:!this.data.showQrcodePopup})}}});
},{isPage:false,isComponent:true,currentFile:'components/orderDetail/qrcode/qrcode.js'});require("components/orderDetail/qrcode/qrcode.js");$gwx_XC_15=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_15 || [];
function gz$gwx_XC_15_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_15=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_15=true;
var x=['./components/orderRefund/orderRefundPopup/orderRefundPopup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_15_1()
var lIC=_n('Popup')
_(r,lIC)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_15";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_15();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/orderRefund/orderRefundPopup/orderRefundPopup.wxml'] = [$gwx_XC_15, './components/orderRefund/orderRefundPopup/orderRefundPopup.wxml'];else __wxAppCode__['components/orderRefund/orderRefundPopup/orderRefundPopup.wxml'] = $gwx_XC_15( './components/orderRefund/orderRefundPopup/orderRefundPopup.wxml' );
	;__wxRoute = "components/orderRefund/orderRefundPopup/orderRefundPopup";__wxRouteBegin = true;__wxAppCurrentFile__="components/orderRefund/orderRefundPopup/orderRefundPopup.js";define("components/orderRefund/orderRefundPopup/orderRefundPopup.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{show:{type:Boolean,value:!0}},data:{selectedIndex:0,refundReasonList:[{id:0,reason:"订单价格较高"},{id:1,reason:"乘客信息填写错误"},{id:2,reason:"出行计划有变"},{id:3,reason:"其他"}]},methods:{selectReason:function(e){var t=e.currentTarget.dataset.index;this.setData({selectedIndex:t})},pass:function(){this.triggerEvent("pass")},submit:function(){var e=this.data,t=e.refundReasonList[e.selectedIndex];this.triggerEvent("submit",t)}}});
},{isPage:false,isComponent:true,currentFile:'components/orderRefund/orderRefundPopup/orderRefundPopup.js'});require("components/orderRefund/orderRefundPopup/orderRefundPopup.js");$gwx_XC_16=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_16 || [];
function gz$gwx_XC_16_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_16=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_16=true;
var x=['./components/orderRefund/passengerInfo/passengerInfo.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_16_1()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_16";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_16();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/orderRefund/passengerInfo/passengerInfo.wxml'] = [$gwx_XC_16, './components/orderRefund/passengerInfo/passengerInfo.wxml'];else __wxAppCode__['components/orderRefund/passengerInfo/passengerInfo.wxml'] = $gwx_XC_16( './components/orderRefund/passengerInfo/passengerInfo.wxml' );
	;__wxRoute = "components/orderRefund/passengerInfo/passengerInfo";__wxRouteBegin = true;__wxAppCurrentFile__="components/orderRefund/passengerInfo/passengerInfo.js";define("components/orderRefund/passengerInfo/passengerInfo.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{passengers:{type:Object,value:[]}},data:{},methods:{}});
},{isPage:false,isComponent:true,currentFile:'components/orderRefund/passengerInfo/passengerInfo.js'});require("components/orderRefund/passengerInfo/passengerInfo.js");$gwx_XC_17=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_17 || [];
function gz$gwx_XC_17_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'refund-info'])
Z([[6],[[7],[3,'orderDetail']],[3,'serviceFeeAmount']])
Z([[6],[[7],[3,'refundDetail']],[3,'refundChargeAmount']])
Z([[7],[3,'showExplain']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_17=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_17=true;
var x=['./components/orderRefund/priceInfo/priceInfo.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_17_1()
var eLC=_n('view')
_rz(z,eLC,'class',0,e,s,gg)
var bMC=_v()
_(eLC,bMC)
if(_oz(z,1,e,s,gg)){bMC.wxVkey=1
}
var oNC=_v()
_(eLC,oNC)
if(_oz(z,2,e,s,gg)){oNC.wxVkey=1
}
bMC.wxXCkey=1
oNC.wxXCkey=1
_(r,eLC)
var xOC=_n('explain-detail')
_rz(z,xOC,'show',3,e,s,gg)
_(r,xOC)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_17";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_17();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/orderRefund/priceInfo/priceInfo.wxml'] = [$gwx_XC_17, './components/orderRefund/priceInfo/priceInfo.wxml'];else __wxAppCode__['components/orderRefund/priceInfo/priceInfo.wxml'] = $gwx_XC_17( './components/orderRefund/priceInfo/priceInfo.wxml' );
	;__wxRoute = "components/orderRefund/priceInfo/priceInfo";__wxRouteBegin = true;__wxAppCurrentFile__="components/orderRefund/priceInfo/priceInfo.js";define("components/orderRefund/priceInfo/priceInfo.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{orderDetail:{type:Object,value:{}},refundDetail:{type:Object,value:{}}},data:{showExplain:!1},methods:{openExplain:function(){this.setData({showExplain:!0})}}});
},{isPage:false,isComponent:true,currentFile:'components/orderRefund/priceInfo/priceInfo.js'});require("components/orderRefund/priceInfo/priceInfo.js");$gwx_XC_18=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_18 || [];
function gz$gwx_XC_18_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
Z([[2,'?:'],[[7],[3,'overlay']],[1,'popup-container'],[1,'popup-bottom-container']])
Z([[2,'==='],[[7],[3,'position']],[1,'center']])
Z([[2,'==='],[[7],[3,'position']],[1,'bottom']])
Z([a,[3,'popup-bottom-box '],[[2,'&&'],[[7],[3,'round']],[1,'round']]])
Z([[7],[3,'showTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_18=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_18=true;
var x=['./components/popup/popup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_18_1()
var fQC=_v()
_(r,fQC)
if(_oz(z,0,e,s,gg)){fQC.wxVkey=1
var cRC=_n('view')
_rz(z,cRC,'class',1,e,s,gg)
var hSC=_v()
_(cRC,hSC)
if(_oz(z,2,e,s,gg)){hSC.wxVkey=1
var oTC=_n('slot')
_(hSC,oTC)
}
else if(_oz(z,3,e,s,gg)){hSC.wxVkey=2
var cUC=_n('view')
_rz(z,cUC,'class',4,e,s,gg)
var oVC=_v()
_(cUC,oVC)
if(_oz(z,5,e,s,gg)){oVC.wxVkey=1
}
var lWC=_n('slot')
_(cUC,lWC)
oVC.wxXCkey=1
_(hSC,cUC)
}
hSC.wxXCkey=1
_(fQC,cRC)
}
fQC.wxXCkey=1
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_18";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_18();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/popup/popup.wxml'] = [$gwx_XC_18, './components/popup/popup.wxml'];else __wxAppCode__['components/popup/popup.wxml'] = $gwx_XC_18( './components/popup/popup.wxml' );
	;__wxRoute = "components/popup/popup";__wxRouteBegin = true;__wxAppCurrentFile__="components/popup/popup.js";define("components/popup/popup.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({options:{multipleSlots:!0},properties:{show:{type:Boolean,value:!0},showTitle:{type:Boolean,value:!0},position:{type:String,value:"center"},round:{type:Boolean,value:!0},overlay:{type:Boolean,value:!0}},data:{},methods:{hidden:function(){this.triggerEvent("hidden")}}});
},{isPage:false,isComponent:true,currentFile:'components/popup/popup.js'});require("components/popup/popup.js");$gwx_XC_19=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_19 || [];
function gz$gwx_XC_19_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_19_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_19_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_19=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_19=true;
var x=['./pages/agreement/agreement.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_19_1()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_19";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_19();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/agreement/agreement.wxml'] = [$gwx_XC_19, './pages/agreement/agreement.wxml'];else __wxAppCode__['pages/agreement/agreement.wxml'] = $gwx_XC_19( './pages/agreement/agreement.wxml' );
	;__wxRoute = "pages/agreement/agreement";__wxRouteBegin = true;__wxAppCurrentFile__="pages/agreement/agreement.js";define("pages/agreement/agreement.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("./desc.js");Page({data:{content:e.serviceAgreement},onLoad:function(e){}});
},{isPage:true,isComponent:true,currentFile:'pages/agreement/agreement.js'});require("pages/agreement/agreement.js");$gwx_XC_20=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_20 || [];
function gz$gwx_XC_20_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'busshift'])
Z([[2,'!='],[[7],[3,'type']],[1,'vega']])
Z([[2,'=='],[[7],[3,'type']],[1,'vega']])
Z(z[2])
Z(z[1])
Z([[2,'||'],[[2,'||'],[[6],[[7],[3,'orderDetail']],[3,'qrcode']],[[6],[[7],[3,'qrCodeList']],[3,'length']]],[[7],[3,'isHasBarCode']]])
Z([[2,'?:'],[[6],[[7],[3,'qrCodeList']],[3,'length']],[[7],[3,'qrCodeList']],[[6],[[7],[3,'orderDetail']],[3,'passengersInfo']]])
Z([[7],[3,'item']])
Z([[6],[[7],[3,'item']],[3,'name']])
Z([[2,'=='],[[7],[3,'showExplainDetail']],[1,true]])
Z([3,'showExplainDetail'])
Z([3,'detailView1'])
Z([3,'explain'])
Z([[2,'=='],[[7],[3,'explainType']],[1,1]])
Z([[2,'=='],[[7],[3,'explainType']],[1,2]])
Z([[2,'=='],[[7],[3,'showTagDetail']],[1,true]])
Z([3,'showTagDetail'])
Z([3,'detailView'])
Z([3,'attrRowView'])
Z([3,'height:auto;'])
Z([[2,'&&'],[[7],[3,'serverFee']],[[2,'>'],[[7],[3,'serverFee']],[1,0]]])
Z([[2,'&&'],[[7],[3,'couponValue']],[[2,'>'],[[7],[3,'couponValue']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_20=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_20=true;
var x=['./pages/bus/orderDetail/orderDetail.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_20_1()
var o2C=_n('view')
_rz(z,o2C,'class',0,e,s,gg)
var x3C=_v()
_(o2C,x3C)
if(_oz(z,1,e,s,gg)){x3C.wxVkey=1
}
var o4C=_v()
_(o2C,o4C)
if(_oz(z,2,e,s,gg)){o4C.wxVkey=1
}
var f5C=_v()
_(o2C,f5C)
if(_oz(z,3,e,s,gg)){f5C.wxVkey=1
}
var c6C=_v()
_(o2C,c6C)
if(_oz(z,4,e,s,gg)){c6C.wxVkey=1
}
var h7C=_v()
_(o2C,h7C)
if(_oz(z,5,e,s,gg)){h7C.wxVkey=1
var o8C=_v()
_(h7C,o8C)
var c9C=function(lAD,o0C,aBD,gg){
var eDD=_v()
_(aBD,eDD)
if(_oz(z,8,lAD,o0C,gg)){eDD.wxVkey=1
}
eDD.wxXCkey=1
return aBD
}
o8C.wxXCkey=2
_2z(z,6,c9C,e,s,gg,o8C,'item','index','{{item}}')
}
x3C.wxXCkey=1
o4C.wxXCkey=1
f5C.wxXCkey=1
c6C.wxXCkey=1
h7C.wxXCkey=1
_(r,o2C)
var eZC=_v()
_(r,eZC)
if(_oz(z,9,e,s,gg)){eZC.wxVkey=1
var bED=_mz(z,'view',['bindtap',10,'class',1],[],e,s,gg)
var oFD=_n('view')
_rz(z,oFD,'class',12,e,s,gg)
var xGD=_v()
_(oFD,xGD)
if(_oz(z,13,e,s,gg)){xGD.wxVkey=1
}
var oHD=_v()
_(oFD,oHD)
if(_oz(z,14,e,s,gg)){oHD.wxVkey=1
}
xGD.wxXCkey=1
oHD.wxXCkey=1
_(bED,oFD)
_(eZC,bED)
}
var b1C=_v()
_(r,b1C)
if(_oz(z,15,e,s,gg)){b1C.wxVkey=1
var fID=_mz(z,'view',['bindtap',16,'class',1],[],e,s,gg)
var cJD=_mz(z,'view',['class',18,'style',1],[],e,s,gg)
var hKD=_v()
_(cJD,hKD)
if(_oz(z,20,e,s,gg)){hKD.wxVkey=1
}
var oLD=_v()
_(cJD,oLD)
if(_oz(z,21,e,s,gg)){oLD.wxVkey=1
}
hKD.wxXCkey=1
oLD.wxXCkey=1
_(fID,cJD)
_(b1C,fID)
}
eZC.wxXCkey=1
b1C.wxXCkey=1
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_20";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_20();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/bus/orderDetail/orderDetail.wxml'] = [$gwx_XC_20, './pages/bus/orderDetail/orderDetail.wxml'];else __wxAppCode__['pages/bus/orderDetail/orderDetail.wxml'] = $gwx_XC_20( './pages/bus/orderDetail/orderDetail.wxml' );
	;__wxRoute = "pages/bus/orderDetail/orderDetail";__wxRouteBegin = true;__wxAppCurrentFile__="pages/bus/orderDetail/orderDetail.js";define("pages/bus/orderDetail/orderDetail.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Page({data:{explainType:1,showTagDetail:!1,type:"vega",showExplainDetail:!1,statusEnum:{0:{name:"待付款",title:"提示：请在XXX时间内/时间前完成支付，否则将为您自动取消"},1:{name:"取消订单",title:"提示：已取消订单"},2:{name:"出票中",title:"提示：正在出票中，请等待"},3:{name:"出票成功",title:"提示：请您关注出发时间，祝你一路平安"},4:{name:"已退款",title:"提示：以为您进行退款操作"}}},onLoad:function(n){},where:function(){wx.openLocation({latitude:Number("28"),longitude:Number("111"),address:"this.data.serverInfo.address",scale:18})},tel:function(){wx.makePhoneCall({phoneNumber:"251542642",success:function(){console.log("拨打电话成功！")},fail:function(){console.log("拨打电话失败！")}})},showExplainDetail:function(){this.setData({showExplainDetail:!this.data.showExplainDetail})},bookExplain:function(){this.setData({explainType:1})},showTagDetail:function(){this.setData({showTagDetail:!this.data.showTagDetail})},haveExplain:function(){this.setData({explainType:2})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/bus/orderDetail/orderDetail.js'});require("pages/bus/orderDetail/orderDetail.js");$gwx_XC_21=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_21 || [];
function gz$gwx_XC_21_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'fnSelectedProduct'])
Z([[7],[3,'busInfo']])
Z([3,'SelectedPass'])
Z([[7],[3,'isShowPerPassengerPhone']])
Z([[7],[3,'maxAdultNum']])
Z([[7],[3,'passengers']])
Z([[2,'&&'],[[2,'!'],[[2,'!'],[[7],[3,'serviceConfig']]]],[[2,'>'],[[6],[[7],[3,'serviceConfig']],[3,'serviceFee']],[1,0]]])
Z([3,'fnSyncPass'])
Z([3,'Passenger'])
Z([[7],[3,'serviceConfig']])
Z([[7],[3,'showTicketExplain']])
Z([[2,'=='],[[7],[3,'showExplainDetail']],[1,true]])
Z([3,'showExplainDetail'])
Z([3,'detailView1'])
Z([3,'ddd'])
Z([3,'explain'])
Z([[2,'=='],[[7],[3,'explainType']],[1,1]])
Z([[2,'=='],[[7],[3,'explainType']],[1,2]])
Z([[2,'=='],[[7],[3,'showStationDetail']],[1,true]])
Z([3,'showStationDetail'])
Z(z[13])
Z(z[14])
Z(z[15])
Z([[2,'=='],[[7],[3,'stationType']],[1,1]])
Z([[2,'=='],[[7],[3,'stationType']],[1,2]])
Z([[7],[3,'showLogin']])
Z([3,'wxLoginSuccess'])
Z([[2,'=='],[[7],[3,'showTagDetail']],[1,true]])
Z([3,'showTagDetail'])
Z([3,'detailView'])
Z([3,'attrRowView'])
Z([a,[3,'height:auto;padding-bottom: env(safe-area-inset-bottom);'],[[2,'?:'],[[6],[[7],[3,'model']],[3,'show']],[1,'padding-bottom:60rpx'],[1,'']]])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[2,'!'],[[7],[3,'serviceConfig']]]],[[6],[[7],[3,'serviceConfig']],[3,'serviceFee']]],[[2,'>'],[[6],[[7],[3,'serviceConfig']],[3,'serviceFee']],[1,0]]])
Z([[2,'&&'],[[7],[3,'couponValue']],[[2,'>'],[[7],[3,'couponValue']],[1,0]]])
Z(z[32])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_21=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_21=true;
var x=['./pages/carline/booking/booking.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_21_1()
var bSD=_mz(z,'SelectedPass',['bindselected',0,'busInfo',1,'id',1,'isShowPerPassengerPhone',2,'maxAdultNum',3,'passengers',4],[],e,s,gg)
_(r,bSD)
var oND=_v()
_(r,oND)
if(_oz(z,6,e,s,gg)){oND.wxVkey=1
}
var oTD=_mz(z,'Passenger',['bindsyncPass',7,'id',1],[],e,s,gg)
_(r,oTD)
var xUD=_mz(z,'ExplainDetail',['serviceConfig',9,'show',1],[],e,s,gg)
_(r,xUD)
var lOD=_v()
_(r,lOD)
if(_oz(z,11,e,s,gg)){lOD.wxVkey=1
var oVD=_mz(z,'view',['bindtap',12,'class',1],[],e,s,gg)
var fWD=_mz(z,'view',['catchtap',14,'class',1],[],e,s,gg)
var cXD=_v()
_(fWD,cXD)
if(_oz(z,16,e,s,gg)){cXD.wxVkey=1
}
var hYD=_v()
_(fWD,hYD)
if(_oz(z,17,e,s,gg)){hYD.wxVkey=1
}
cXD.wxXCkey=1
hYD.wxXCkey=1
_(oVD,fWD)
_(lOD,oVD)
}
var aPD=_v()
_(r,aPD)
if(_oz(z,18,e,s,gg)){aPD.wxVkey=1
var oZD=_mz(z,'view',['bindtap',19,'class',1],[],e,s,gg)
var c1D=_mz(z,'view',['catchtap',21,'class',1],[],e,s,gg)
var o2D=_v()
_(c1D,o2D)
if(_oz(z,23,e,s,gg)){o2D.wxVkey=1
}
var l3D=_v()
_(c1D,l3D)
if(_oz(z,24,e,s,gg)){l3D.wxVkey=1
}
o2D.wxXCkey=1
l3D.wxXCkey=1
_(oZD,c1D)
_(aPD,oZD)
}
var tQD=_v()
_(r,tQD)
if(_oz(z,25,e,s,gg)){tQD.wxVkey=1
var a4D=_n('login-popup')
_rz(z,a4D,'bind:loginSuccess',26,e,s,gg)
_(tQD,a4D)
}
var eRD=_v()
_(r,eRD)
if(_oz(z,27,e,s,gg)){eRD.wxVkey=1
var t5D=_mz(z,'view',['bindtap',28,'class',1],[],e,s,gg)
var e6D=_mz(z,'view',['class',30,'style',1],[],e,s,gg)
var b7D=_v()
_(e6D,b7D)
if(_oz(z,32,e,s,gg)){b7D.wxVkey=1
}
var o8D=_v()
_(e6D,o8D)
if(_oz(z,33,e,s,gg)){o8D.wxVkey=1
}
var x9D=_v()
_(e6D,x9D)
if(_oz(z,34,e,s,gg)){x9D.wxVkey=1
}
b7D.wxXCkey=1
o8D.wxXCkey=1
x9D.wxXCkey=1
_(t5D,e6D)
_(eRD,t5D)
}
oND.wxXCkey=1
lOD.wxXCkey=1
aPD.wxXCkey=1
tQD.wxXCkey=1
tQD.wxXCkey=3
eRD.wxXCkey=1
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_21";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_21();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/carline/booking/booking.wxml'] = [$gwx_XC_21, './pages/carline/booking/booking.wxml'];else __wxAppCode__['pages/carline/booking/booking.wxml'] = $gwx_XC_21( './pages/carline/booking/booking.wxml' );
	;__wxRoute = "pages/carline/booking/booking";__wxRouteBegin = true;__wxAppCurrentFile__="pages/carline/booking/booking.js";define("pages/carline/booking/booking.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../../../utils/util")),a=e(require("../../../utils/config"));Page({data:{passengers:[],upStationList:[{name:"长沙火车站"},{name:"长沙火车站"},{name:"长沙火车站"},{name:"长沙火车站"},{name:"长沙火车站"}],downStationList:[{name:"常德火车站"},{name:"常德火车站"},{name:"常德火车站"},{name:"常德火车站"},{name:"常德火车站"}],upStation:{},downStation:{},showTicketExplain:!1,maxAdultNum:5,maxChildNum:0,maxBabyNum:0,headcount:0,explainType:1,stationType:1,showTagDetail:!1,showStationDetail:!1,showExplainDetail:!1,picBaseUrl:a.default.picBaseUrl},onLoad:function(e){var t=e.busInfo;t&&(t=JSON.parse(decodeURIComponent(t))),this.setData({busInfo:t})},getResourceConfigInfo:function(){var e=this,n=this.data.busInfo;return new Promise((function(o,i){t.default.$http(a.default.getResourceConfigInfo,{appCode:wx.getStorageSync("appCode"),resourcesCode:n.startStationCode}).then((function(a){"200"==a.code?e.setData({serviceConfig:a.data}):t.default.alert("分销配置有误，请联系管理员"),o(a)})).catch((function(e){i(e),console.error("request api.getResourceConfigInfo error ",e)}))}))},bookExplain:function(){this.setData({explainType:1})},showTicketExplain:function(){this.setData({showTicketExplain:!this.data.showTicketExplain})},showStationDetail:function(){this.setData({showStationDetail:!this.data.showStationDetail})},showTagDetail:function(){this.setData({showTagDetail:!this.data.showTagDetail})},haveExplain:function(){this.setData({explainType:2})},upStationClick:function(){this.setData({showStationDetail:!0,stationType:1})},upClick:function(e){var t=e.currentTarget.dataset.data;this.setData({upStation:t,dwonStation:{},stationType:2})},downClick:function(e){var t=e.currentTarget.dataset.data;this.setData({downStation:t,showStationDetail:!1})},downStationClick:function(){this.setData({showStationDetail:!0,stationType:2})},showExplainDetail:function(){this.setData({showExplainDetail:!this.data.showExplainDetail})},onReady:function(){},getPassengers:function(e){var n=this;return new Promise((function(o,i){t.default.$http(a.default.getPassengerList,{memberId:wx.getStorageSync("memberId")},"GET").then((function(t){var a=t.data;a.forEach((function(e){e.selected=!1,e.contact=0,e.typeTicket="adult"})),n.setData({passengers:a,isHasTcPass:!!a.find((function(e){return 0==e.source}))}),o(a),e&&e(a)})).catch((function(e){i(e),console.error("request api.getPassengerList error ",e)}))}))},ToFixed:function(e,t){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)},wxLoginSuccess:function(){console.log("-------------"),this.checkUser()&&this.setData({showLogin:!1})},checkUser:function(){return wx.getStorageSync("openId")&&wx.getStorageSync("memberId")&&!!wx.getStorageSync("appCode")||(this.setData({showLogin:!0}),!1)},onShow:function(){this.checkUser()&&(this.setData({showLogin:!1}),this.getPassengers(),this.getResourceConfigInfo())},onHide:function(){},onPay:function(){var e=wx.getStorageSync("bus_newContactPhone"),a=this.data.selectedPass||[],n=(this.data.busInfo,this.data.serviceConfig),o=this;if(a.length<=0)t.default.alert("请选择乘车用户");else if(e)if(t.default.isMobile(e))if(n){if(this.checkUser())if(n&&n.wechatAppletTemplateInfoList&&n.wechatAppletTemplateInfoList.length>0){for(var i=[],r=0;r<n.wechatAppletTemplateInfoList.length;r++)i.push(n.wechatAppletTemplateInfoList[r].templateId);i.length>0?wx.requestSubscribeMessage({tmplIds:i,complete:function(e){console.log(e),o.orderPay()}}):o.orderPay()}else o.orderPay()}else t.default.alert("分销配置错误，暂不提供购票");else t.default.alert("请输入正确的联系电话");else t.default.alert("请输入联系电话")},showPayDetail:function(){var e=this,t=this.data.serviceConfig;wx.showModal({title:"温馨提示",content:"您选的上车站点为:\r\n\r\n"+e.data.busInfo.startStationName+(t&&1==t.canRefund?"":"(不可线上退票)"),showCancel:!1,success:function(t){t.confirm?(console.log("用户点击确定"),e.orderPay()):t.cancel&&(console.log("用户点击取消"),e.setData({clickPay:!1}))}})},orderPay:function(){var e=wx.getStorageSync("bus_newContactPhone"),n=this.data.selectedPass||[],o=this.data.busInfo,i=this.data.serviceConfig,r=this;if(n.length<=0)t.default.alert("请选择乘车用户");else if(e)if(t.default.isMobile(e))if(i){if(this.checkUser()){for(var s=[],c=0;c<n.length;c++)s.push({name:n[c].passengerName,certNo:n[c].certificateNumber,mobile:n[c].mobile||e,price:o.price});var d={appCode:wx.getStorageSync("appCode"),openId:wx.getStorageSync("openId"),startCityCode:o.startCityCode,startCityName:o.startCityName,startStationCode:o.startStationCode,endStationCode:o.endStationCode,departureDate:o.departureDate,departureTime:o.departureTime,tcMemberId:wx.getStorageSync("memberId"),shiftNo:o.shiftNo,price:o.price,mobile:e,serviceFee:i.serviceFee,payAmount:((o.price+i.serviceFee)*(n.length||0)).toFixed(2),passengerList:s};return new Promise((function(e,n){t.default.loading(),t.default.$http(a.default.carlineSaleOrder,d).then((function(e){"200"==e.code?r.toPay(e.data):(t.default.alert(e.msg),t.default.hideLoading())})).catch((function(e){n(e),t.default.hideLoading(),console.error("request api.queryLinkerNew error ",e)}))}))}}else t.default.alert("分销配置错误，暂不提供购票");else t.default.alert("请输入正确的联系电话");else t.default.alert("请输入联系电话")},toPay:function(e){return new Promise((function(n,o){t.default.loading(),t.default.$http(a.default.getWechatSign,{appCode:wx.getStorageSync("appCode"),openId:wx.getStorageSync("openId"),orderNo:e.orderNo,unionOrderNo:e.unionOrderNo,serviceFeeOrderNo:e.serviceFeeOrderNo}).then((function(a){"200"==a.code?(t.default.hideLoading(),wx.requestPayment({timeStamp:a.data.timeStamp,nonceStr:a.data.nonceStr,package:a.data.packageStr,signType:a.data.signType,paySign:a.data.paySign,success:function(t){wx.redirectTo({url:"../orderDetail/orderDetail?orderNo=".concat(e.orderNo)})},fail:function(t){wx.redirectTo({url:"../orderDetail/orderDetail?orderNo=".concat(e.orderNo)})}})):(t.default.alert(a.msg),t.default.hideLoading()),t.default.hideLoading()})).catch((function(e){o(e),t.default.hideLoading(),console.error("request api.queryLinkerNew error ",e)}))}))},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/carline/booking/booking.js'});require("pages/carline/booking/booking.js");$gwx_XC_22=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_22 || [];
function gz$gwx_XC_22_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_22_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'appCode']])
Z([3,'queryOrderDetail'])
Z([3,'orderStatus'])
Z([[7],[3,'memberId']])
Z([[7],[3,'orderDetail']])
Z([3,'order-info-box'])
Z([[6],[[7],[3,'orderDetail']],[3,'seatNo']])
Z([[2,'==='],[[6],[[7],[3,'orderDetail']],[3,'orderDisplayStatus']],[1,2]])
Z([3,'order-qrcode-box'])
Z([[6],[[7],[3,'orderDetail']],[3,'takeTicketPassword']])
Z([[6],[[7],[3,'orderDetail']],[3,'departureDateFormat']])
Z([[7],[3,'passengerList']])
Z([[6],[[7],[3,'orderDetail']],[3,'passengers']])
Z([3,'index'])
Z([[2,'==='],[[7],[3,'index']],[1,0]])
Z([[2,'||'],[[2,'==='],[[6],[[7],[3,'orderDetail']],[3,'orderDisplayStatus']],[1,0]],[[2,'==='],[[6],[[7],[3,'orderDetail']],[3,'orderDisplayStatus']],[1,2]]])
Z([[2,'||'],[[2,'==='],[[6],[[7],[3,'orderDetail']],[3,'orderDisplayStatus']],[1,5]],[[2,'==='],[[6],[[7],[3,'orderDetail']],[3,'orderDisplayStatus']],[1,6]]])
Z(z[4])
Z([3,'toPay'])
Z(z[1])
Z(z[4])
Z([[7],[3,'showExplain']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_22_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_22=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_22=true;
var x=['./pages/carline/orderDetail/orderDetail.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_22_1()
var fAE=_mz(z,'order-status',['appCode',0,'bind:refresh',1,'id',1,'memberId',2,'orderDetail',3],[],e,s,gg)
_(r,fAE)
var cBE=_n('view')
_rz(z,cBE,'class',5,e,s,gg)
var hCE=_v()
_(cBE,hCE)
if(_oz(z,6,e,s,gg)){hCE.wxVkey=1
}
var oDE=_v()
_(cBE,oDE)
if(_oz(z,7,e,s,gg)){oDE.wxVkey=1
var lGE=_n('view')
_rz(z,lGE,'class',8,e,s,gg)
var aHE=_v()
_(lGE,aHE)
if(_oz(z,9,e,s,gg)){aHE.wxVkey=1
}
var tIE=_mz(z,'order-qrcode',['departureDateFormat',10,'passengerList',1],[],e,s,gg)
_(lGE,tIE)
aHE.wxXCkey=1
_(oDE,lGE)
}
var eJE=_v()
_(cBE,eJE)
var bKE=function(xME,oLE,oNE,gg){
var cPE=_v()
_(oNE,cPE)
if(_oz(z,14,xME,oLE,gg)){cPE.wxVkey=1
}
cPE.wxXCkey=1
return oNE
}
eJE.wxXCkey=2
_2z(z,12,bKE,e,s,gg,eJE,'item','index','index')
var cEE=_v()
_(cBE,cEE)
if(_oz(z,15,e,s,gg)){cEE.wxVkey=1
}
var oFE=_v()
_(cBE,oFE)
if(_oz(z,16,e,s,gg)){oFE.wxVkey=1
}
hCE.wxXCkey=1
oDE.wxXCkey=1
oDE.wxXCkey=3
cEE.wxXCkey=1
oFE.wxXCkey=1
_(r,cBE)
var hQE=_n('order-baseinfo')
_rz(z,hQE,'orderDetail',17,e,s,gg)
_(r,hQE)
var oRE=_mz(z,'order-footer',['bind:pay',18,'bind:refresh',1,'orderDetail',2],[],e,s,gg)
_(r,oRE)
var cSE=_n('order-service')
_(r,cSE)
var oTE=_n('explain-detail')
_rz(z,oTE,'show',21,e,s,gg)
_(r,oTE)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_22";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_22();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/carline/orderDetail/orderDetail.wxml'] = [$gwx_XC_22, './pages/carline/orderDetail/orderDetail.wxml'];else __wxAppCode__['pages/carline/orderDetail/orderDetail.wxml'] = $gwx_XC_22( './pages/carline/orderDetail/orderDetail.wxml' );
	;__wxRoute = "pages/carline/orderDetail/orderDetail";__wxRouteBegin = true;__wxAppCurrentFile__="pages/carline/orderDetail/orderDetail.js";define("pages/carline/orderDetail/orderDetail.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../../@babel/runtime/helpers/objectSpread2"),a=e(require("../../../utils/config")),r=e(require("../../../utils/util")),o=require("../../../utils/fetch"),d=require("../../../utils/userInfo"),n=e(require("../../../utils/manba")),i=(e(require("../../../utils/weapp.qrcode.esm.js")),!1),u={0:"身份证"};Page({data:{appCode:"",openId:"",memberId:"",orderNo:"",orderDetail:{},passengerList:[],showFooterPopup:!1,showQrcodePopup:!1,showExplain:!1,showCancelPopup:!1,swiperCurrent:0},onLoad:function(e){var t=this,a=wx.getStorageSync("memberId");a?e.orderNo?(0,d.getOpenid)().then((function(r){t.setData({memberId:a,appCode:r.appCode,openId:r.openId,orderNo:e.orderNo}),t.queryOrderDetail()})):r.default.alert("未获取到订单号"):r.default.alert("未登录")},onShow:function(){var e=this.data,t=e.orderNo,a=e.appCode,r=e.memberId;t&&a&&r&&this.queryOrderDetail()},queryOrderDetail:function(){var e=this;if(!i){i=!0,r.default.loading();var d=this.data,c=d.orderNo,s=d.appCode,l=d.memberId;(0,o.fetch)({url:"".concat(a.default.urlPrefix,"/stationTraffic/order/detail_station"),method:"POST",data:{appCode:s,orderNo:c,memberId:l},complete:function(a){r.default.hideLoading(),i=!1;var o=a.data;if(o&&"200"===o.code&&o.data){var d=o.data,c=[],s=o.data,l=s.departureDateTime,p=s.orderDisplayStatus,f=s.passengers;l&&(d.departureDateFormat=(0,n.default)(l).format("MM-DD 周w HH:mm:ss")),d.btnText=0===p?"取消订单":"退票",f&&f.length&&(c=f.map((function(e){return t(t({},e),{},{certTypeName:u[e.certType]||""})}))),e.setData({orderDetail:d,passengerList:c})}else r.default.alert(o.msg)}})}},handleFooterPopup:function(){this.setData({showFooterPopup:!this.data.showFooterPopup})},handleCancelPopup:function(){this.setData({showCancelPopup:!this.data.showCancelPopup})},openExplain:function(){this.setData({showExplain:!0})},cancelOrder:function(){var e=this,t=this.data.orderDetail,a=t.orderDisplayStatus,r=t.orderNo;2===a?wx.showModal({content:"确定要申请退票吗？",cancelText:"点错了",cancelColor:"#3D8FFF",confirmText:"申请退票",confirmColor:"#999999",success:function(e){e.confirm&&wx.navigateTo({url:"/pages/carline/refundConfirm/refundConfirm?orderNo=".concat(r)})}}):wx.showModal({content:"确定要申取消订单吗？",cancelText:"点错了",cancelColor:"#3D8FFF",confirmText:"取消订单",confirmColor:"#999999",success:function(t){t.confirm&&e.cancelOrderApi()}})},cancelOrderApi:function(){var e=this,t=this.data,d=t.appCode,n=t.openId,i=t.orderNo,u=t.memberId;(0,o.fetch)({url:"".concat(a.default.urlPrefix,"/stationTraffic/order/cancelOrder"),method:"POST",data:{appCode:d,openId:n,orderNo:i,memberId:u},complete:function(t){var a=t.data;a&&"200"===a.code&&a.data?(e.orderStatus=e.selectComponent("#orderStatus"),e.orderStatus.cleanTimmer(),e.orderStatus.cleanTimmerStatus(),e.queryOrderDetail()):r.default.alert(t.data.msg)}})},footerBtnClick:function(){},toPay:function(){var e=this;r.default.loading();var t=this.data,d=t.appCode,n=t.openId,i=t.orderNo;(0,o.fetch)({url:a.default.getWechatSign,method:"POST",data:{appCode:d,openId:n,orderNo:i,unionOrderNo:"",serviceFeeOrderNo:""},complete:function(t){r.default.hideLoading();var a=t.data;a&&"200"===a.code?wx.requestPayment({timeStamp:a.data.timeStamp,nonceStr:a.data.nonceStr,package:a.data.packageStr,signType:a.data.signType,paySign:a.data.paySign,success:function(){e.queryOrderDetail()},fail:function(){e.queryOrderDetail()}}):r.default.alert(a.msg||"支付失败")}})}});
},{isPage:true,isComponent:true,currentFile:'pages/carline/orderDetail/orderDetail.js'});require("pages/carline/orderDetail/orderDetail.js");$gwx_XC_23=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_23 || [];
function gz$gwx_XC_23_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'orderDetail']],[3,'passengers']])
Z([[6],[[7],[3,'orderDetail']],[3,'seatNo']])
Z([[7],[3,'orderDetail']])
Z([[7],[3,'refundDetail']])
Z([3,'submitRefund'])
Z(z[2])
Z([3,'refundConfirm'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_23=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_23=true;
var x=['./pages/carline/refundConfirm/refundConfirm.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_23_1()
var tWE=_n('passenger-info')
_rz(z,tWE,'passengers',0,e,s,gg)
_(r,tWE)
var aVE=_v()
_(r,aVE)
if(_oz(z,1,e,s,gg)){aVE.wxVkey=1
}
var eXE=_mz(z,'price-info',['orderDetail',2,'refundDetail',1],[],e,s,gg)
_(r,eXE)
var bYE=_mz(z,'order-footer',['bind:click',4,'orderDetail',1,'pageName',2],[],e,s,gg)
_(r,bYE)
aVE.wxXCkey=1
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_23";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_23();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/carline/refundConfirm/refundConfirm.wxml'] = [$gwx_XC_23, './pages/carline/refundConfirm/refundConfirm.wxml'];else __wxAppCode__['pages/carline/refundConfirm/refundConfirm.wxml'] = $gwx_XC_23( './pages/carline/refundConfirm/refundConfirm.wxml' );
	;__wxRoute = "pages/carline/refundConfirm/refundConfirm";__wxRouteBegin = true;__wxAppCurrentFile__="pages/carline/refundConfirm/refundConfirm.js";define("pages/carline/refundConfirm/refundConfirm.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault"),r=require("../../../@babel/runtime/helpers/objectSpread2"),t=e(require("../../../utils/config")),a=e(require("../../../utils/util")),d=require("../../../utils/fetch"),o=require("../../../utils/userInfo"),n=require("../../../utils/typeSetting"),u=e(require("../../../utils/manba"));Page({data:{appCode:"",openId:"",orderNo:"",orderDetail:{},showReasonPopup:!1,refundReason:"",refundDetail:{refundAmount:0,refundChargeAmount:0,refundStatus:0}},onLoad:function(e){var r=this,t=wx.getStorageSync("memberId");t?e.orderNo?(0,o.getOpenid)().then((function(a){r.setData({memberId:t,appCode:a.appCode,openId:a.openId,orderNo:e.orderNo}),r.queryOrderDetail(),r.queryRefundDetail()})):a.default.alert("未获取到订单号"):a.default.alert("未登录")},queryOrderDetail:function(){var e=this;a.default.loading();var o=this.data,i=o.appCode,f=o.orderNo,l={appCode:i,memberId:o.memberId,orderNo:f};(0,d.fetch)({url:"".concat(t.default.urlPrefix,"/stationTraffic/order/detail_station"),method:"POST",data:l,complete:function(t){a.default.hideLoading();var d=t.data;if(d&&"200"===d.code&&d.data){var o=d.data,i=d.data,f=i.departureDateTime,l=i.passengers;f&&(o.departureDateFormat=(0,u.default)(f).format("MM-DD 周w HH:mm:ss"));var s=l.length;s&&(o.ticketPrice=l[0].price,o.ticketNum=s,o.passengers=l.map((function(e){return r(r({},e),{},{certTypeName:n.certTypeSetting[e.certType]||""})}))),e.setData({orderDetail:o})}}})},queryRefundDetail:function(){var e=this,r=this.data,o=r.appCode,n=r.orderNo,u={appCode:o,memberId:r.memberId,orderNo:n};(0,d.fetch)({url:"".concat(t.default.urlPrefix,"/stationTraffic/order/refund_detail"),method:"POST",data:u,complete:function(r){var t=r.data;t&&"200"===t.code&&t.data?e.setData({refundDetail:{refundAmount:t.data.refundAmount,refundChargeAmount:t.data.refundChargeAmount,refundStatus:t.data.refundStatus}}):(a.default.alert(t.msg||"系统异常"),setTimeout((function(){wx.navigateBack()}),2e3))}})},refundOrderApi:function(){var e=this;a.default.loading();var r=this.data,o=r.appCode,n=r.openId,u=r.orderNo,i=r.refundDetail,f={appCode:o,openId:n,orderNo:u,memberId:r.memberId,refundMoney:i.refundAmount,refundFee:i.refundChargeAmount};(0,d.fetch)({url:"".concat(t.default.urlPrefix,"/stationTraffic/order/refundOrder"),method:"POST",data:f,complete:function(r){a.default.hideLoading();var t=r.data;t&&"200"===t.code?wx.redirectTo({url:"/pages/carline/orderDetail/orderDetail?orderNo=".concat(e.data.orderNo)}):a.default.alert(t.msg||"退票失败，请稍后再试")}})},submitRefund:function(){this.refundOrderApi()},passReason:function(){this.setData({refundReason:""})},submitReason:function(e){console.log(e)}});
},{isPage:true,isComponent:true,currentFile:'pages/carline/refundConfirm/refundConfirm.js'});require("pages/carline/refundConfirm/refundConfirm.js");$gwx_XC_24=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_24 || [];
function gz$gwx_XC_24_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'main-body'])
Z([3,'sixDateSel'])
Z([3,'toggleCalendar'])
Z([3,'calenders'])
Z([[7],[3,'coverSelf']])
Z([3,'slideCalendar'])
Z([[7],[3,'isLoading']])
Z([3,'scroll-body'])
Z([1,true])
Z([1,false])
Z([[2,'!'],[[2,'&&'],[[7],[3,'candidateDataBuses']],[[2,'>'],[[6],[[7],[3,'candidateDataBuses']],[3,'length']],[1,0]]]])
Z([3,'bus'])
Z([[7],[3,'candidateDataBuses']])
Z([3,'selectShift'])
Z([a,[3,'appleftrow appcard card '],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'bus']],[3,'shiftType']],[1,1]],[1,'flow'],[1,'']],[3,' '],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'bus']],[3,'shiftType']],[1,3]],[1,'pass-by'],[1,'']],[3,' ']])
Z([[7],[3,'bus']])
Z([3,'appcentercolumn card-rignt'])
Z([[6],[[7],[3,'bus']],[3,'discount']])
Z([[2,'!='],[[6],[[7],[3,'bus']],[3,'shiftType']],[1,3]])
Z(z[17])
Z([3,'showHideInnerPage'])
Z([3,'bottom'])
Z([[7],[3,'show']])
Z(z[9])
Z([3,'page-body'])
Z(z[8])
Z(z[8])
Z(z[9])
Z([[2,'=='],[[7],[3,'departType']],[1,1]])
Z([[2,'=='],[[7],[3,'departType']],[1,2]])
Z([[2,'=='],[[7],[3,'departType']],[1,3]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_24=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_24=true;
var x=['./pages/carline/shifts/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_24_1()
var x1E=_n('view')
_rz(z,x1E,'class',0,e,s,gg)
var o2E=_mz(z,'calendars',['bind:select',1,'bind:toggleCalendar',1,'class',2,'coverSelf',3,'id',4,'isLoading',5],[],e,s,gg)
_(x1E,o2E)
var f3E=_mz(z,'scroll-view',['class',7,'enhanced',1,'showScrollbar',2],[],e,s,gg)
var c4E=_v()
_(f3E,c4E)
if(_oz(z,10,e,s,gg)){c4E.wxVkey=1
}
else{c4E.wxVkey=2
var h5E=_v()
_(c4E,h5E)
var o6E=function(o8E,c7E,l9E,gg){
var tAF=_mz(z,'view',['bindtap',13,'class',1,'data-shift',2],[],o8E,c7E,gg)
var eBF=_n('view')
_rz(z,eBF,'class',16,o8E,c7E,gg)
var bCF=_v()
_(eBF,bCF)
if(_oz(z,17,o8E,c7E,gg)){bCF.wxVkey=1
}
var oDF=_v()
_(eBF,oDF)
if(_oz(z,18,o8E,c7E,gg)){oDF.wxVkey=1
}
var xEF=_v()
_(eBF,xEF)
if(_oz(z,19,o8E,c7E,gg)){xEF.wxVkey=1
}
bCF.wxXCkey=1
oDF.wxXCkey=1
xEF.wxXCkey=1
_(tAF,eBF)
_(l9E,tAF)
return l9E
}
h5E.wxXCkey=2
_2z(z,12,o6E,e,s,gg,h5E,'bus','index','')
}
c4E.wxXCkey=1
_(x1E,f3E)
_(r,x1E)
var oFF=_mz(z,'popup',['bind:hidden',20,'position',1,'show',2,'showTitle',3],[],e,s,gg)
var fGF=_mz(z,'scroll-view',['class',24,'enhanced',1,'scrollY',2,'showScrollbar',3],[],e,s,gg)
var cHF=_v()
_(fGF,cHF)
if(_oz(z,28,e,s,gg)){cHF.wxVkey=1
}
var hIF=_v()
_(fGF,hIF)
if(_oz(z,29,e,s,gg)){hIF.wxVkey=1
}
var oJF=_v()
_(fGF,oJF)
if(_oz(z,30,e,s,gg)){oJF.wxVkey=1
}
cHF.wxXCkey=1
hIF.wxXCkey=1
oJF.wxXCkey=1
_(oFF,fGF)
_(r,oFF)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_24";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_24();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/carline/shifts/index.wxml'] = [$gwx_XC_24, './pages/carline/shifts/index.wxml'];else __wxAppCode__['pages/carline/shifts/index.wxml'] = $gwx_XC_24( './pages/carline/shifts/index.wxml' );
	;__wxRoute = "pages/carline/shifts/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/carline/shifts/index.js";define("pages/carline/shifts/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var a=require("../../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../../@babel/runtime/helpers/toConsumableArray"),e=require("../../../@babel/runtime/helpers/objectSpread2"),i=a(require("../../../utils/calendar")),n=a(require("../../../utils/manba")),d=require("../../../utils/util"),s=require("../../../utils/config"),r=!1;Page({data:{candidateData:[{id:0,title:"不限",value:null,checked:!0},{id:1,title:"凌晨（00:00-06:00）",value:"00:00-06:00"},{id:2,title:"上午（06:00-12:00）",value:"06:00-12:00"},{id:3,title:"下午（12:00-18:00）",value:"12:00-18:00"},{id:4,title:"晚上（18:00-24:00）",value:"18:00-24:00"}],initData:[{id:0,title:"不限",value:null,checked:!0}],candidateStartData:[{id:0,title:"不限",value:null,checked:!0}],candidateEndData:[{id:0,title:"不限",value:null,checked:!0}],candidateDataBuses:[],show:!1,picBaseUrl:s.picBaseUrl,noMore:!1,queryDate:d.format(new Date,"Y-M-D"),sourceBusData:[],optionsInfo:null,businessType:0,dataMsg:""},onLoad:function(a){d.isEmpty(a)||(this.setData(e(e({},a),{},{optionsInfo:a,businessType:a.businessType?Number(a.businessType):0})),a.title&&wx.setNavigationBarTitle({title:a.title})),this.initCalendar()},onShow:function(){this.data.optionsInfo&&this.loadData(this.data.optionsInfo)},initCalendar:function(){this.slideCalendar=this.selectComponent("#slideCalendar");var a=this.slideCalendar.data;a.querydate=this.data.queryDate,a.startdate=new Date;var t=new Date;t.setDate(t.getDate()+14),a.enddate=t,this.slideCalendar.init()},sixDateSel:function(a){var t=a.detail;t.date!==this.data.queryDate&&(this.setData({isLoading:!0,queryDate:t.date}),this.data.optionsInfo&&this.loadData(this.data.optionsInfo))},toggleCalendar:function(a){var t=this;i.default.show({startDate:new Date,selectDate:this.data.queryDate,noticeLink:{type:"page",link:"/pages/login/login"},callback:function(a){console.log(a.date);var e=t.data.queryDate&&(0,n.default)(t.data.queryDate).format("YYYY-MM-DD"),i=a.date;i!=e&&(t.setData({queryDate:new Date(i)}),t.initCalendar())}})},filterfunc:function(a){var t=a.currentTarget.dataset.funn;this.setData({funN:t,departType:t}),this.showHideInnerPage()},showHideInnerPage:function(){this.setData({show:!this.data.show})},changeDepartType:function(a){var t=a.currentTarget.dataset.type;this.data.departType!=t&&(console.log("change depart..."),this.setData({departType:t}))},loadMore:function(a){console.log("load more"),d.loading(),setTimeout((function(){d.hideLoading()}),1500),this.setData({noMore:!0})},formSubmit:function(a){console.log(a.detail.value)},selectShift:function(a){var t=a.currentTarget.dataset.shift,e=this;if(3==t.shiftType)d.alert("途经车的下车地点可能不在车站内，请知晓","温馨提示",!1,"","确定",(function(){e.data.queryDate;wx.navigateTo({url:"../booking/booking?busInfo=".concat(encodeURIComponent(JSON.stringify(t)))})}));else{e.data.queryDate;wx.navigateTo({url:"../booking/booking?busInfo=".concat(encodeURIComponent(JSON.stringify(t)))})}},handleData:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this,i=a,n=[],d=[];if(a&&0!=a.length){a.forEach((function(a){-1==n.indexOf(a.startStationName)&&n.push(a.startStationName),-1==d.indexOf(a.endStationName)&&d.push(a.endStationName)}));var s=t(e.data.initData),r=t(e.data.initData);n.forEach((function(a){s.push({id:s.length,title:a,value:a})})),d.forEach((function(a){r.push({id:r.length,title:a,value:a})})),e.setData({sourceBusData:i,candidateDataBuses:a,candidateStartData:s,candidateEndData:r,startData:n,endData:d})}else e.setData({sourceBusData:[],candidateDataBuses:[],candidateStartData:[],candidateEndData:[],startData:n,endData:d})},loadData:function(){var a=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{appCode:"001",startCityCode:"0736",startCityName:"常德",startStationCode:"73601",endStationCode:"0006"};if(!r){r=!0;var i=this;new Promise((function(n,c){d.loading(),d.$http(s.busUrl,e(e({},t),{},{businessType:a.data.businessType,departureDate:i.data.queryDate})).then((function(a){200==parseInt(a.code)?(a.data&&a.data.length>0?i.handleData(a.data):i.setData({candidateDataBuses:[],sourceBusData:[],candidateStartData:[{id:0,title:"不限",value:null,checked:!0}],candidateEndData:[{id:0,title:"不限",value:null,checked:!0}]}),d.hideLoading()):(d.hideLoading(),d.showToast(a.msg,"error",2500,null),i.setData({candidateDataBuses:[],sourceBusData:[],candidateStartData:[{id:0,title:"不限",value:null,checked:!0}],candidateEndData:[{id:0,title:"不限",value:null,checked:!0}]})),r=!1,i.setData({isLoading:!1})})).catch((function(a){d.hideLoading(),d.showToast(a.msg,"error",2500,null),r=!1,i.setData({isLoading:!1})}))}))}},checkChange:function(a){var t=a.currentTarget.dataset.checkitem;switch(parseInt(this.data.departType)){case 1:this.setData({candidateData:this.reverseSelect(this.data.candidateData,t)});break;case 2:this.setData({candidateStartData:this.reverseSelect(this.data.candidateStartData,t)});break;case 3:this.setData({candidateEndData:this.reverseSelect(this.data.candidateEndData,t)})}},reverseSelect:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,e=0;return a.forEach((function(i){0!=t&&t==i.id&&(i.checked=!i.checked),0!=i.id&&i.checked&&(e++,a[0].checked=!1)})),0!=t&&0!=e&&e!=a.length-1||a.forEach((function(a){0==a.id?a.checked=!0:a.checked=!1})),a},confirmSelect:function(){var a=this,t=a.data.sourceBusData,e=Object.assign([],t),i=a.data.candidateData,n=a.data.candidateStartData,d=a.data.candidateEndData,s=[];i[0].checked||(i.forEach((function(a){a.checked&&s.push(a.value)})),s.length>0&&(e=e.filter((function(t){var e=!1;return s.forEach((function(i){var n=i.split("-");a.CompareDate(n[0],t.departureTime)&&a.CompareDate(t.departureTime,n[1])&&(e=!0)})),e}))));var r=[];n[0].checked||(n.forEach((function(a){a.checked&&r.push(a.value)})),e=e.filter((function(a){return r.indexOf(a.startStationName)>-1})));var c=[];d[0].checked||(d.forEach((function(a){a.checked&&c.push(a.value)})),e=e.filter((function(a){return c.indexOf(a.endStationName)>-1}))),s.length>0||r>0||c>0?a.setData({candidateDataBuses:e}):a.setData({candidateDataBuses:t}),this.showHideInnerPage()},colsePop:function(){this.resetFilterData(),this.showHideInnerPage()},resetFilterData:function(a){if(a){var t=a.currentTarget.dataset.departtype;switch(parseInt(t)){case 1:this.setData({candidateData:this.clearfilterData(this.data.candidateData)});break;case 2:this.setData({candidateStartData:this.clearfilterData(this.data.candidateStartData)});break;case 3:this.setData({candidateEndData:this.clearfilterData(this.data.candidateEndData)})}}else this.setData({candidateData:this.clearfilterData(this.data.candidateData),candidateStartData:this.clearfilterData(this.data.candidateStartData),candidateEndData:this.clearfilterData(this.data.candidateEndData)})},clearfilterData:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return a.forEach((function(a,t){0==t&&0==a.id?a.checked=!0:a.checked=!1})),a},CompareDate:function(a,t){var e=new Date,i=a.split(":"),n=t.split(":");return e.setHours(i[0],i[1])<e.setHours(n[0],n[1])}});
},{isPage:true,isComponent:true,currentFile:'pages/carline/shifts/index.js'});require("pages/carline/shifts/index.js");$gwx_XC_25=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_25 || [];
function gz$gwx_XC_25_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_25=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_25=true;
var x=['./pages/common/busIDCard/busIDCard.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_25_1()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_25";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_25();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/common/busIDCard/busIDCard.wxml'] = [$gwx_XC_25, './pages/common/busIDCard/busIDCard.wxml'];else __wxAppCode__['pages/common/busIDCard/busIDCard.wxml'] = $gwx_XC_25( './pages/common/busIDCard/busIDCard.wxml' );
	;__wxRoute = "pages/common/busIDCard/busIDCard";__wxRouteBegin = true;__wxAppCurrentFile__="pages/common/busIDCard/busIDCard.js";define("pages/common/busIDCard/busIDCard.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../utils/validate.js"),t=require("../../../utils/util"),i=(require("../../../utils/common"),require("../../../utils/config")),a=null;Component({options:{pureDataPattern:/^_/},data:{busInfo:{},passInfo:{ticketType:"adult",passengerName:"",certificateNumber:""},_oldPassInfo:{},isEdit:!1,tips:"",hasShowDemo:!1,_isCanSubmit:!0},observers:{},methods:{onLoad:function(e){var i=this;(a=this.getOpenerEventChannel()).on("passdata",(function(e){var a=e.passInfo,s={busInfo:e.busInfo,isEdit:!!e.isEdit};e.isEdit&&(s._oldPassInfo=JSON.parse(JSON.stringify(a)),wx.setNavigationBarTitle({title:"编辑常用旅客"})),t.isEmpty(a)||(s.passInfo={id:a.id,ticketType:a.ticketType,passengerName:a.passengerName,certificateNumber:a.certificateNumber,mobile:a.mobile}),i.setData(s)}))},showDemo:function(){this.setData({hasShowDemo:!this.data.hasShowDemo})},blurInput:function(e){var t=e.currentTarget.dataset,i=e.detail,a=this.data.passInfo;a[t.name]=i.value,this.setData({passInfo:a})},focusInput:function(){this.data.isEdit&&this.setData({"passInfo.idCard":""})},funValidateData:function(i,a,s){var r=this.data;if(!i.passengerName)return"请填写乘客姓名";if(i.passengerName.length<2)return"乘客姓名不得小于两个字";if(!new RegExp("^[a-zA-Z一-龥]+$").test(i.passengerName))return"姓名只能包含中文或者英文，不能有空格、符号等特殊字符!";if(!i.certificateNumber)return"请输入证件号码";if(!r.isEdit||!a){if(!e.idCardValid.test(i.certificateNumber))return"请输入合法身份证";var n=i.certificateNumber.slice(6,10),o=i.certificateNumber.slice(10,14),u=t.format(new Date,"YYYY"),m=t.format(new Date,"MMDD");if(n>u||n==u&&o>=m)return"请填写正确的身份证号码"}return i.mobile?!(r.isEdit&&s||e.phoneValid.test(i.mobile))&&"请输入合法手机号":"请输入手机号码"},submitData:function(){var e=this.data,s=e.passInfo,r=e._oldPassInfo,n=(r.passengerName,s.passengerName,r.certificateNumber==s.certificateNumber),o=r.mobile==s.mobile;if(e._isCanSubmit){var u={id:s.id,certificateNumber:s.certificateNumber,certType:1,encryptCertNo:1,passengerName:s.passengerName,mobile:s.mobile,memberId:wx.getStorageSync("memberId")},m=this.funValidateData(Object.assign(u,e.isEdit?{memberId:wx.getStorageSync("memberId")||"",linkerId:r.id}:{}),n,o);if(m)return t.alert(m),console.log("--------------"),!1;t.loading(),e._isCanSubmit=!1,t.$http(i.addLinkerNew,u).then((function(i){t.hideLoading(),e._isCanSubmit=!0,wx.navigateBack(),a.emit("updatePass",{isEdit:e.isEdit?r.id:0,typeTicket:s.ticketType})})).catch((function(i){t.hideLoading(),e._isCanSubmit=!0,t.showToast("保存失败，请稍后再试~")}))}}}});
},{isPage:true,isComponent:true,currentFile:'pages/common/busIDCard/busIDCard.js'});require("pages/common/busIDCard/busIDCard.js");$gwx_XC_26=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_26 || [];
function gz$gwx_XC_26_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_26_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'calendar-container'])
Z([[7],[3,'tipsMessage']])
Z([3,'item'])
Z([[7],[3,'dates']])
Z([3,'headId'])
Z([3,'index1'])
Z([3,'months'])
Z([[6],[[7],[3,'item']],[3,'month']])
Z([a,[[6],[[7],[3,'item']],[3,'headId']],[3,'-'],[[7],[3,'index1']]])
Z([3,'idx'])
Z([3,'day'])
Z([[7],[3,'months']])
Z([a,z[8][1],z[8][2],z[8][3],z[8][2],[[7],[3,'idx']]])
Z([3,'clickHandler'])
Z([3,'days tc'])
Z([[6],[[7],[3,'day']],[3,'date']])
Z([[2,'||'],[[2,'&&'],[[6],[[7],[3,'day']],[3,'disable']],[[2,'!'],[[2,'&&'],[[2,'&&'],[[7],[3,'lastEndDate2']],[[2,'>'],[[6],[[7],[3,'day']],[3,'times']],[[7],[3,'lastEndDate']]]],[[2,'<'],[[6],[[7],[3,'day']],[3,'times']],[[7],[3,'lastEndDate2']]]]]],[[2,'&&'],[[7],[3,'noExtendDataDisable']],[[2,'!'],[[6],[[6],[[7],[3,'dateExtend']],[[6],[[7],[3,'day']],[3,'date']]],[3,'value']]]]])
Z([[6],[[6],[[7],[3,'dateExtend']],[[6],[[7],[3,'day']],[3,'date']]],[3,'value']])
Z([[2,'&&'],[[6],[[7],[3,'dateExtend']],[[6],[[7],[3,'day']],[3,'date']]],[[6],[[6],[[7],[3,'dateExtend']],[[6],[[7],[3,'day']],[3,'date']]],[3,'extra']]])
Z([[6],[[7],[3,'day']],[3,'festival']])
Z([[6],[[6],[[7],[3,'prices']],[[6],[[7],[3,'day']],[3,'date']]],[3,'price']])
Z([[6],[[7],[3,'day']],[3,'times']])
Z([a,[3,'day-item-box '],[[2,'+'],[[2,'+'],[[6],[[7],[3,'day']],[3,'className']],[[2,'?:'],[[2,'||'],[[2,'=='],[[7],[3,'selectDate']],[[6],[[7],[3,'day']],[3,'date']]],[[2,'&&'],[[7],[3,'goDate']],[[2,'=='],[[7],[3,'goDate']],[[6],[[7],[3,'day']],[3,'date']]]]],[[2,'?:'],[[2,'||'],[[2,'&&'],[[6],[[7],[3,'day']],[3,'disable']],[[2,'!'],[[2,'&&'],[[2,'&&'],[[7],[3,'lastEndDate2']],[[2,'>'],[[6],[[7],[3,'day']],[3,'times']],[[7],[3,'lastEndDate']]]],[[2,'<'],[[6],[[7],[3,'day']],[3,'times']],[[7],[3,'lastEndDate2']]]]]],[[2,'&&'],[[7],[3,'noExtendDataDisable']],[[2,'!'],[[6],[[6],[[7],[3,'dateExtend']],[[6],[[7],[3,'day']],[3,'date']]],[3,'value']]]]],[1,' day-active-disable '],[1,' day-active ']],[1,'']]],[[2,'?:'],[[2,'&&'],[[7],[3,'currentDate_']],[[2,'>='],[[6],[[7],[3,'currentDate_']],[[6],[[7],[3,'day']],[3,'times']]],[1,0]]],[[2,'?:'],[[2,'||'],[[2,'&&'],[[6],[[7],[3,'day']],[3,'disable']],[[2,'!'],[[2,'&&'],[[2,'&&'],[[7],[3,'lastEndDate2']],[[2,'>'],[[6],[[7],[3,'day']],[3,'times']],[[7],[3,'lastEndDate']]]],[[2,'<'],[[6],[[7],[3,'day']],[3,'times']],[[7],[3,'lastEndDate2']]]]]],[[2,'&&'],[[7],[3,'noExtendDataDisable']],[[2,'!'],[[6],[[6],[[7],[3,'dateExtend']],[[6],[[7],[3,'day']],[3,'date']]],[3,'value']]]]],[1,' day-current-disable '],[1,' day-current ']],[1,'']]],[3,' '],[[2,'?:'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'currentDate']],[[2,'>'],[[6],[[7],[3,'day']],[3,'times']],[[6],[[7],[3,'currentDate']],[1,0]]]],[[7],[3,'currentDate']]],[[2,'<'],[[6],[[7],[3,'day']],[3,'times']],[[6],[[7],[3,'currentDate']],[1,1]]]],[[2,'?:'],[[2,'=='],[[7],[3,'soursePath']],[1,'hotel']],[1,'selectMiddle'],[1,'flightselectM']],[1,'']],[3,' '],[[2,'?:'],[[2,'&&'],[[2,'&&'],[[7],[3,'currentDate_']],[[2,'=='],[[6],[[7],[3,'currentDate_']],[[6],[[7],[3,'day']],[3,'times']]],[1,0]]],[[2,'=='],[[7],[3,'soursePath']],[1,'hotel']]],[1,'left-acitve'],[1,'']],[3,' '],[[2,'?:'],[[2,'&&'],[[2,'&&'],[[7],[3,'currentDate_']],[[2,'=='],[[6],[[7],[3,'currentDate_']],[[6],[[7],[3,'day']],[3,'times']]],[1,1]]],[[2,'=='],[[7],[3,'soursePath']],[1,'hotel']]],[1,'right-active'],[1,'']],[3,' '],[[2,'?:'],[[2,'&&'],[[2,'&&'],[[7],[3,'currentDate_']],[[2,'>='],[[6],[[7],[3,'currentDate_']],[[6],[[7],[3,'day']],[3,'times']]],[1,0]]],[[6],[[7],[3,'rangeText']],[[6],[[7],[3,'currentDate_']],[[6],[[7],[3,'day']],[3,'times']]]]],[1,' day-current'],[1,'']]])
Z([[2,'||'],[[6],[[7],[3,'day']],[3,'festival']],[[6],[[7],[3,'day']],[3,'topTxt']]])
Z([3,'day-top-box'])
Z(z[19])
Z([[6],[[7],[3,'day']],[3,'topTxt']])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'currentDate_']],[[2,'>='],[[6],[[7],[3,'currentDate_']],[[6],[[7],[3,'day']],[3,'times']]],[1,0]]],[[6],[[7],[3,'rangeText']],[[6],[[7],[3,'currentDate_']],[[6],[[7],[3,'day']],[3,'times']]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_26_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_26=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_26=true;
var x=['./pages/common/calendar/calendar.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_26_1()
var lMF=_n('view')
_rz(z,lMF,'class',0,e,s,gg)
var aNF=_v()
_(lMF,aNF)
if(_oz(z,1,e,s,gg)){aNF.wxVkey=1
}
var tOF=_v()
_(lMF,tOF)
var ePF=function(oRF,bQF,xSF,gg){
var fUF=_v()
_(xSF,fUF)
var cVF=function(oXF,hWF,cYF,gg){
var l1F=_v()
_(cYF,l1F)
var a2F=function(e4F,t3F,b5F,gg){
var x7F=_mz(z,'view',['bindtap',13,'class',1,'data-date',2,'data-disable',3,'data-extend',4,'data-extra',5,'data-festival',6,'data-price',7,'data-times',8],[],e4F,t3F,gg)
var o8F=_n('view')
_rz(z,o8F,'class',22,e4F,t3F,gg)
var f9F=_v()
_(o8F,f9F)
if(_oz(z,23,e4F,t3F,gg)){f9F.wxVkey=1
var hAG=_n('view')
_rz(z,hAG,'class',24,e4F,t3F,gg)
var oBG=_v()
_(hAG,oBG)
if(_oz(z,25,e4F,t3F,gg)){oBG.wxVkey=1
}
var cCG=_v()
_(hAG,cCG)
if(_oz(z,26,e4F,t3F,gg)){cCG.wxVkey=1
}
oBG.wxXCkey=1
cCG.wxXCkey=1
_(f9F,hAG)
}
var c0F=_v()
_(o8F,c0F)
if(_oz(z,27,e4F,t3F,gg)){c0F.wxVkey=1
}
f9F.wxXCkey=1
c0F.wxXCkey=1
_(x7F,o8F)
_(b5F,x7F)
return b5F
}
l1F.wxXCkey=2
_2z(z,11,a2F,oXF,hWF,gg,l1F,'day','idx','{{item.headId}}-{{index1}}-{{idx}}')
return cYF
}
fUF.wxXCkey=2
_2z(z,7,cVF,oRF,bQF,gg,fUF,'months','index1','{{item.headId}}-{{index1}}')
return xSF
}
tOF.wxXCkey=2
_2z(z,3,ePF,e,s,gg,tOF,'item','index','headId')
aNF.wxXCkey=1
_(r,lMF)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_26";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_26();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/common/calendar/calendar.wxml'] = [$gwx_XC_26, './pages/common/calendar/calendar.wxml'];else __wxAppCode__['pages/common/calendar/calendar.wxml'] = $gwx_XC_26( './pages/common/calendar/calendar.wxml' );
	;__wxRoute = "pages/common/calendar/calendar";__wxRouteBegin = true;__wxAppCurrentFile__="pages/common/calendar/calendar.js";define("pages/common/calendar/calendar.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../@babel/runtime/helpers/interopRequireDefault"),e=require("../../../@babel/runtime/helpers/typeof"),a=t(require("../../../utils/util")),i=getApp(),s={},r="";Page({festivals:{"2022-01-31":"除夕","2022-02-01":"春节","2022-02-15":"元宵","2022-04-05":"清明","2022-06-03":"端午","2022-08-04":"七夕","2022-09-10":"中秋","2022-10-04":"重阳","2023-01-21":"除夕","2023-01-22":"春节","2023-02-05":"元宵","2023-04-05":"清明","2023-06-22":"端午","2023-08-22":"七夕","2023-09-29":"中秋","2023-10-23":"重阳"},holidays:["2022-01-01","2022-01-02","2022-01-03","2022-01-31","2022-02-01","2022-02-02","2022-02-03","2022-02-04","2022-02-05","2022-02-06","2022-04-03","2022-04-04","2022-04-05","2022-04-30","2022-05-01","2022-05-02","2022-05-03","2022-05-04","2022-06-03","2022-06-04","2022-06-05","2022-09-10","2022-09-11","2022-09-12","2022-10-01","2022-10-02","2022-10-03","2022-10-04","2022-10-05","2022-10-06","2022-10-07","2022-12-31","2023-01-01","2023-01-02","2023-01-21","2023-01-22","2023-01-23","2023-01-24","2023-01-25","2023-01-26","2023-01-27"],workdays:["2022-01-29","2022-01-30","2022-04-02","2022-04-24","2022-05-07","2022-10-08","2022-10-09","2023-01-28","2023-01-29"],data:{totalNavHeight:i.globalData.totalNavHeight||0,dates:[],dateGrow:3,ajaxGrow:3,dateExtend:!1,tipsMessage:!1,toastHidden:!0,toastHidden1:!0,headerTop:getApp().globalData.totalNavHeight||0,trainTips:{}},callback:!1,validRangeSecondTime:function(t,e){console.log(t,e);var a=!0;if(!e)return a;t=this.ParseString(t).getTime();var i=e[0]||!1,s=e[1]||!1;return i?((t<i.getTime()||s&&t>s.getTime())&&(a=!1),a):a},updateRangeSecondTxt:function(){var t=this.rangeSecondTime;if(t){var e=t[0]||!1,a=t[1]||!1;"string"==typeof e&&(t[0]=e=this.ParseString(e),e=this.formateTimeYMD(e)),"string"==typeof a&&(t[1]=a=this.ParseString(a),a=this.formateTimeYMD(a)),this.updateData({lastEndDate2:t[1].getTime()}),t[1]?this.rangeSecondText="请选择"+e+"到"+a+"之间的日期":this.rangeSecondText="请选择"+e+"之后的日期"}},tipTimer:!1,showTips:function(t){this.tipTimer&&clearTimeout(this.tipTimer),this.updateData({toastHidden:!1,toastText:t});var e=this;this.tipTimer=setTimeout((function(){e.updateData({toastHidden:!0})}),1500)},showLoading:function(t){wx.showToast({title:"数据加载中...",icon:"loading",duration:t||2e3})},clickHandler:function(t){var s=t.currentTarget.dataset;if(s.extra)try{s.extra=JSON.parse(s.extra)}catch(t){}if(s&&("{}"==JSON.stringify(s)||!0===s.disable||"true"===s.disable))return!1;if("object"===e(this._currentDate)&&this.wxData.range){0===this._currentDate.length&&this.updateData({currentDate:!1});var r={},n=[],o={};if(1===this._currentDate.length){if(this.rangeSecondTime&&!this.validRangeSecondTime(s.date,this.rangeSecondTime)){var l=this.rangeSecondText;return i.globalData.calendarParam.rangeUnPass&&(l=i.globalData[i.globalData.calendarParam.rangeUnPass](s.date)||l),void this.showTips(l)}this.ParseString(this._currentDate[0].date).getTime()>this.ParseString(s.date).getTime()?this._currentDate[0]=s:this.ParseString(this._currentDate[0].date).getTime()!=this.ParseString(s.date).getTime()||this.wxData.rangeSame?this._currentDate.push(s):(this._currentDate.length=0,r.selectDate="")}else 0===this._currentDate.length&&(r.toastText1=this.wxData.rangeTips[0],this._currentDate.push(s),i.globalData.calendarParam.rangeFn&&(this.rangeSecondTime=i.globalData[i.globalData.calendarParam.rangeFn](s),this.updateRangeSecondTxt()));1===this._currentDate.length&&(r.selectDate=s.date,r.toastText1=this.wxData.rangeTips[1]);for(var h=0;h<this._currentDate.length;h++)o[this._currentDate[h].times]=h,n.push(this._currentDate[h].times);if(r.currentDate_=o,2==n.length&&(r.currentDate=n),console.log(2222222,r),2===this._currentDate.length){if(this.callback)return;var d=i.globalData[i.globalData.calendarParam.callback](this._currentDate);if(!1===d||"string"==typeof d)return this._currentDate=[this._currentDate[0]],void("string"==typeof d&&a.default.alert(d));setTimeout((function(){i.globalData.calendarParam.goBack?i.globalData[i.globalData.calendarParam.goBack]():wx.navigateBack({delta:1})}),500),this.callback=!0}this.updateData(r)}else this.updateData({selectDate:s.date,currentDate:!1}),i.globalData[i.globalData.calendarParam.callback](s),i.globalData.calendarParam.goBack?i.globalData[i.globalData.calendarParam.goBack]():wx.navigateBack({delta:1})},onLoad:function(){try{var t=wx.getSystemInfoSync(),e=t.brand,r=t.model;"iPhone"===e&&/unknown|iPhone X/.test(r)&&this.setData({isPhoneX:!0})}catch(t){}s={};var n=i.globalData.calendarParam;n||(n={}),this.wxData=this.data;var o=a.default.extend({},n,{});o.today=o.today||this.initializationDate(new Date),o.startDate=o.startDate||this.processUseDate(new Date(this.initializationDate(new Date).setDate(1)))[0];var l=o.nowSelect||o.selectDate||(o.currentDate||[])[0]||"";if(this.buildRecentDay(o.today),!o.endDate){var h=this.ParseString(o.startDate);h.setMonth(h.getMonth()+this.data.dateGrow),o.endDate=this.processUseDate(h)[0]}if(o.requestObj&&(this.requestObj=o.requestObj),this.formateDate(o),o.range&&o.rangeTips&&o.rangeTips.length&&(o.toastHidden1=!1,o.toastText1=o.rangeTips[0]),o.rangeTipsOne&&(o.toastHidden1=!1,o.toastText1=o.rangeTipsOne),this.updateNormalExtendData(o.dateData),o.dateData=null,this._startDate=this.ParseString(o.startDate),this._endDate=this.ParseString(o.endDate),o.hotelIsNight&&(this.yesterday=1*a.default.addDay(0,this._startDate).date),o.startDate=this.processUseDate(this.setDateToOne(this._startDate))[0],o.lastEndDate=this._endDate.getTime(),o.endDate=this.processUseDate(this.setDateToEnd(this._endDate))[0],l){var d=this.ParseString(l);if(d){var D=d.getMonth()-this._startDate.getMonth();D+=13*(d.getFullYear()-this._startDate.getFullYear()),o.dateGrow=D>this.wxData.dateGrow?D:this.wxData.dateGrow}}this.updateData(o),this.buildCalendar(),l&&l.split&&(this.setData({scrollid:"id"+l.split("-")[0]+l.split("-")[1]}),this.getSelectElement())},onReachBottom:function(){this.bottomEventHandle()},getSelectElement:function(){if(this.data.scrollid&&wx.createSelectorQuery){var t=this;wx.createSelectorQuery().select("#"+this.data.scrollid).boundingClientRect((function(e){if(e&&e.top){var a=e.top-68-t.data.totalNavHeight;t.data.tipsMessage&&"iflight"!=t.data.soursePath||(a=e.top-33-t.data.totalNavHeight),wx.pageScrollTo&&wx.pageScrollTo({scrollTop:a,duration:300})}})).exec()}},updateData:function(t){this.wxData=this.wxData||t,this.wxData=a.default.extend(this.wxData,t),this.setData(t)},buildRecentDay:function(t){t=this.ParseString(this.parseTimes(t));var e=new Date(t);e.setDate(e.getDate()+1);var a=new Date(t);a.setDate(a.getDate()+2),this.today=t,this.tomorrow=e,this.afterDay=a},buildCalendar:function(){this.requestObj?this.buildDateList=this.buildAjaxDateMonth:this.buildDateList=this.buildDate,this.buildDateList()},extend:function(t,e){for(var i in t=a.default.extend({},t),e)"[object Object]"===Object.prototype.toString.call(e[i])&&t[i]&&"[object Object]"===Object.prototype.toString.call(t[i])?t[i]=this.extend(t[i],e[i]):t[i]=e[i];return t},buildAjaxDateMonth:function(){this.buildDate(),this.buildDateByAjax()},pipes:[],isLoadData:!1,buildDateByAjax:function(t){var e=this.requestObj,i=this,s=i.lastAjaxBuildDate||i.processUseDate(i._startDate)[0]||"",r=this.ParseString(s);s=s.split("-");if(i.showLoading(1e5),i.isLoadData)this.pipes.push(1);else{i.isLoadData=!0;var n={};n[e.grow||"grow"]=i.data.ajaxGrow,n[e.year||"year"]=s[0],n[e.month||"month"]=s[1],a.default.requestData({url:e.url,data:a.default.extend({},e.data,n),timeout:8e3,success:function(e){i.setDateExtend(e.data),r.setMonth(r.getMonth()+i.data.ajaxGrow),i.lastAjaxBuildDate=i.processUseDate(r)[0],"function"==typeof t&&t()},complete:function(){wx.hideToast(),i.isLoadData=!1,i.lastAjaxBuildDate&&i.ParseString(i.lastAjaxBuildDate).getTime()<i.ParseString(i.data.lastBuildDate).getTime()&&i.buildDateByAjax()}})}},updateNormalExtendData:function(t){if(t)try{for(var a in t){var i=t[a];"object"!==e(i)?t[a]={value:t[a]}:i.extra&&"[object Object]"===Object.prototype.toString.call(i.extra)&&(i.extra=JSON.stringify(i.extra)),t[a].value&&(s[a]={},s[a].price=t[a].value.replace("￥",""))}var r=this.wxData.dateExtend||{};r=this.extend(t,r),this.isEmptyObject(r)&&(r=!1),this.updateData({dateExtend:r})}catch(t){}},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},setDateExtend:function(t){var e=this.requestObj.success;t=e&&e(t)||t,this.updateNormalExtendData(t)},buildDate:function(){var t=[].concat(this.wxData.dates),e=this.wxData.lastBuildDate&&this.ParseString(this.wxData.lastBuildDate),a=this.createDateArr(e||!1);t=this.extendArrWithOutSame(t,a),e||(e=this.ParseString(this.wxData.startDate)),e.setMonth(e.getMonth()+this.wxData.dateGrow);var i={dates:t,lastBuildDate:this.processUseDate(e)[0]};this.updateData(i)},extendArrWithOutSame:function(t,e){t=[].concat(t),e=[].concat(e);for(var a=[],i=0;i<e.length;i++)a.push(e[i].headDate);for(i=0;i<t.length;i++){var s=a.indexOf(t[i].headDate);-1!==s&&(t[i]=e[s],e[s]=null)}for(i=0;i<e.length;i++)e[i]&&t.push(e[i]);return t},bottomEventHandle:function(t){var e=this.ParseString(this.wxData.lastBuildDate),a=this.ParseString(this.wxData.endDate);(!e||e.getTime()<a.getTime())&&this.buildDateList()},createDateArr:function(t){t&&(t=new Date(t)),t=t||this.ParseString(this.wxData.startDate);var e=[],a=new Date(t),i=this._endDate;for(a.setMonth(a.getMonth()+this.wxData.dateGrow),a.getTime()<i.getTime()&&(i=a),r=this.data.startGrab?this.data.startGrab:1*(r=this.data.today)<16118496e5?new Date("2021/2/12"):r.setDate(r.getDate()+15);t<=i;)e.push(this.createMonthArr(t)),t.setMonth(t.getMonth()+1);return e},createMonthArr:function(t){for(var e=[],a=new Date(t),i=a.getDay(),r=[],n=this.data.cycle||[0,1,2,3,4,5,6];i>0;)r.push(""),i--;for(;a.getMonth()===t.getMonth();){var o={},l=a.getDay();0!==r.length&&r.length%7==0&&(e.push(r),r=[]);var h=a.getTime();(h<this._startDate.getTime()||h>this._endDate.getTime()||n.indexOf(l)<0)&&(o.disable=!0),o.txt=this.getRecentDay(a)||a.getDate();var d=this.getFestival(a),D=this.processUseDate(a);o.date=D[0],o.className="",o.topClass="",o.festivalClass="",o.times=h,6!=a.getDay()&&0!=a.getDay()||(o.isWeekday=!0),-1!==this.workdays.indexOf(D[0])&&(o.topTxt="班",o.isWeekday=!1),-1!==this.holidays.indexOf(D[0])&&(o.topTxt="休",o.topClass+=" top-weekday-color",o.isWeekday=!0),d&&(o.isWeekday=!0,o.festival=d,o.festivalClass+=" weekday-color"),s[o.date]&&(o.bottomTxt=0==s[o.date].price?"":"¥"+s[o.date].price,o.monthlowestprice=s[o.date].monthlowestprice),"今天"===o.txt&&(o.className+=o.disable?" day-today-disable ":" day-today "),this.wxData.dateExtend&&(o.extendTxt=this.wxData.dateExtend[D[0]]||!1,o.extendTxt&&o.extendTxt.monthlowestprice&&(o.monthlowestprice=o.extendTxt.monthlowestprice),this.wxData.noExtendDataDisable&&!o.extendTxt&&(o.disable=!0)),this.yesterday&&h==this.yesterday&&(o.disable=!1,o.txt="深夜"),o.disable&&(o.festivalClass=" day-top-disable"),r.push(o),a.setDate(a.getDate()+1)}if(r.length){for(var c=r.length;c<7;c++)r.push("");e.push(r),r=null}return{month:e,headDate:t.getFullYear()+"年"+(t.getMonth()+1)+"月",headId:"id"+t.getFullYear()+(t.getMonth()+1>9?t.getMonth()+1:"0"+(t.getMonth()+1)),monthNum:t.getMonth()+1}},processUseDate:function(t){if(t){var e=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();return[e+"-"+(a>9?"":"0")+a+"-"+(i>9?"":"0")+i,e+"-"+(a>9?"":"0")+a]}},formateDate:function(t){if(this.convertProp(t,["startDate","endDate"]),t.currentDate){this._currentDate=[],t.currentDate_={};for(var e=0;e<t.currentDate.length;e++)t.currentDate[e]&&"string"==typeof t.currentDate[e]?t.currentDate[e]=this.ParseString(t.currentDate[e]).getTime():t.currentDate[e]instanceof Date&&(t.currentDate[e]=this.initializationDate(t.currentDate[e]).getTime()),t.currentDate_[t.currentDate[e]]=e;t.currentDate=t.currentDate.length>1&&t.currentDate}t.selectDate?"string"==typeof t.selectDate?t.selectDate=this.processUseDate(this.ParseString(t.selectDate))[0]:t.selectDate instanceof Date?t.selectDate=this.processUseDate(t.selectDate)[0]:t.selectDate=!1:t.selectDate=!1},convertProp:function(t,e){for(var a,i=0,s=e.length;i<s;i++)t[a=e[i]]=this.parseTimes(t[a])},parseTimes:function(t){return a.default.isNotEmptyString(t)&&(t=this.ParseString(t)),t=t instanceof Date?this.processUseDate(t)[0]:void 0},ParseString:function(t){if(t){var e=/(\d{4})-(\d{1,2})-(\d{1,2})(?:\s+(\d{1,2}):(\d{1,2}):(\d{1,2}))?/i,a=e.exec(t),i=0,s=null;return i=a&&a.length&&t?a.length>5&&a[6]?Date.parse(t.replace(e,"$2/$3/$1 $4:$5:$6")):Date.parse(t.replace(e,"$2/$3/$1")):Date.parse(t),isNaN(i)||(s=new Date(i)),s}},initializationDate:function(t){return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t},setDateToOne:function(t){return(t=new Date(t)).setDate(1),t},setDateToEnd:function(t){return(t=new Date(t)).setDate(1),t.setMonth(t.getMonth()+1),new Date(t.getTime()-864e5)},getHolidays:function(t){return-1!==this.holidays.indexOf(t)},getWorkdays:function(t){return-1!==this.workdays.indexOf(t)},getRecentDay:function(t){if(t.getTime()===this.today.getTime())return"今天"},formateTimeYMD:function(t){return t.getFullYear()+"年"+(t.getMonth()+1)+"月"+t.getDate()+"日"},getFestival:function(t){t.getFullYear();var e=t.getMonth()+1,a=t.getDate(),i=this.processUseDate(t)[0],s=this.festivals[i];return s||(s=1===e&&1===a?"元旦":2===e&&14===a?"情人节":5===e&&1===a?"五一":6===e&&1===a?"儿童节":10===e&&1===a?"国庆":12===e&&25===a&&"圣诞")},jumpNotice:function(){var t=this.data.noticeLink;if(t&&t.link){var e=t.type,a=t.link;"webview"===e?wx.navigateTo({url:"/page/home/webview/webview?src="+encodeURIComponent(a)}):wx.navigateTo({url:a})}}});
},{isPage:true,isComponent:true,currentFile:'pages/common/calendar/calendar.js'});require("pages/common/calendar/calendar.js");$gwx_XC_27=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_27 || [];
function gz$gwx_XC_27_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_27_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_27_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_27=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_27=true;
var x=['./pages/contactadd/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_27_1()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_27";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_27();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/contactadd/index.wxml'] = [$gwx_XC_27, './pages/contactadd/index.wxml'];else __wxAppCode__['pages/contactadd/index.wxml'] = $gwx_XC_27( './pages/contactadd/index.wxml' );
	;__wxRoute = "pages/contactadd/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/contactadd/index.js";define("pages/contactadd/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var a=require("../../utils/util");Page({data:{},onLoad:function(a){var t=a.person;t&&this.setData(JSON.parse(t))},confirmInput:function(a){console.log(a.detail.value);var t=a.detail.value;this.validaInput(t)&&wx.navigateBack()},validaInput:function(t){t||(0,a.alert)("请输入内容！")}});
},{isPage:true,isComponent:true,currentFile:'pages/contactadd/index.js'});require("pages/contactadd/index.js");$gwx_XC_28=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_28 || [];
function gz$gwx_XC_28_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_28_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_28_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_28_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_28_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_28_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_28=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_28=true;
var x=['./pages/contacts/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_28_1()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_28";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_28();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/contacts/index.wxml'] = [$gwx_XC_28, './pages/contacts/index.wxml'];else __wxAppCode__['pages/contacts/index.wxml'] = $gwx_XC_28( './pages/contacts/index.wxml' );
	;__wxRoute = "pages/contacts/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/contacts/index.js";define("pages/contacts/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../utils/util"),e=require("../../utils/config"),a=getApp();Page({data:{picBaseUrl:e.picBaseUrl},onLoad:function(t){var e=wx.getStorageSync("memberId");this.setData({memberId:e})},onShow:function(){console.log("onshow"),this.loadPassengerData()},loadPassengerData:function(){t.loading();var a=this;t.$http(e.getPassengerList,{memberId:a.data.memberId},{}).then((function(e){200===parseInt(e.code)?a.setData({list:e.data}):t.alert(e.msg),t.hideLoading()}))},addPerson:function(t){wx.navigateTo({url:"/pages/common/busIDCard/busIDCard",success:function(t){t.eventChannel.emit("passdata",{})}})},handleSelect:function(t){var e=t.currentTarget.dataset.id,a=this.data.list;e&&(a.forEach((function(t){e==t.id&&(t.checked=!t.checked)})),this.setData({list:a}))},handleEdit:function(t){var e=t.currentTarget.dataset.person;wx.navigateTo({url:"/pages/common/busIDCard/busIDCard?person=".concat(JSON.stringify(e)),success:function(t){t.eventChannel.emit("passdata",{isEdit:!0,passInfo:e})}})},touchstart:function(t){var e=a.touch._touchstart(t,this.data.list);this.setData({list:e})},touchmove:function(t){var e=a.touch._touchmove(t,this.data.list,"id");this.setData({list:e})},delete:function(a){var s=this,n=a.currentTarget.dataset.id;console.log("edit item id is : "+n),wx.showModal({cancelColor:"#3D8FFF",title:"删除乘客",content:"确认要删除该联系人吗？",confirmColor:"#3D8FFF",success:function(a){a.confirm?(t.loading(),t.$http(e.deletePassenger,{id:n},"get").then((function(e){200==parseInt(e.code)?(t.alert("操作成功"),s.loadPassengerData()):t.alert(e.msg)})),t.hideLoading(),console.log("success")):a.cancel&&console.log("cancel")}})},confirmSelect:function(){getCurrentPages()}});
},{isPage:true,isComponent:true,currentFile:'pages/contacts/index.js'});require("pages/contacts/index.js");$gwx_XC_29=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_29 || [];
function gz$gwx_XC_29_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_29_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_29_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_29_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'busshift'])
Z([[2,'=='],[[7],[3,'type']],[1,'vega']])
Z(z[1])
Z([[2,'!='],[[7],[3,'type']],[1,'vega']])
Z([3,'fnSelectedProduct'])
Z([[7],[3,'busInfo']])
Z([3,'SelectedPass'])
Z([[7],[3,'isShowPerPassengerPhone']])
Z([[7],[3,'maxAdultNum']])
Z([[7],[3,'passengers']])
Z([[2,'&&'],[[2,'!'],[[2,'!'],[[7],[3,'serviceConfig']]]],[[2,'>'],[[6],[[7],[3,'serviceConfig']],[3,'serviceFee']],[1,0]]])
Z([3,'fnSyncPass'])
Z([3,'Passenger'])
Z([[7],[3,'serviceConfig']])
Z([[7],[3,'showTicketExplain']])
Z([[2,'=='],[[7],[3,'showExplainDetail']],[1,true]])
Z([3,'showExplainDetail'])
Z([3,'detailView1'])
Z([3,'ddd'])
Z([3,'explain'])
Z([[2,'=='],[[7],[3,'explainType']],[1,1]])
Z([[2,'=='],[[7],[3,'explainType']],[1,2]])
Z([[2,'=='],[[7],[3,'showStationDetail']],[1,true]])
Z([3,'showStationDetail'])
Z(z[17])
Z(z[18])
Z(z[19])
Z([[2,'=='],[[7],[3,'stationType']],[1,1]])
Z([[2,'=='],[[7],[3,'stationType']],[1,2]])
Z([[2,'<='],[[6],[[6],[[7],[3,'busInfo']],[3,'selectDownStationList']],[3,'length']],[1,0]])
Z([[2,'=='],[[7],[3,'showTagDetail']],[1,true]])
Z([3,'showTagDetail'])
Z([3,'detailView'])
Z([3,'attrRowView'])
Z([3,'height:auto;padding-bottom: env(safe-area-inset-bottom)'])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[2,'!'],[[7],[3,'serviceConfig']]]],[[6],[[7],[3,'serviceConfig']],[3,'serviceFee']]],[[2,'>'],[[6],[[7],[3,'serviceConfig']],[3,'serviceFee']],[1,0]]])
Z([[2,'&&'],[[7],[3,'couponValue']],[[2,'>'],[[7],[3,'couponValue']],[1,0]]])
Z(z[35])
Z([[7],[3,'showLogin']])
Z([3,'wxLoginSuccess'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_29_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_29_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_29=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_29=true;
var x=['./pages/customline/booking/booking.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_29_1()
var oLG=_n('view')
_rz(z,oLG,'class',0,e,s,gg)
var fMG=_v()
_(oLG,fMG)
if(_oz(z,1,e,s,gg)){fMG.wxVkey=1
}
var cNG=_v()
_(oLG,cNG)
if(_oz(z,2,e,s,gg)){cNG.wxVkey=1
}
var hOG=_v()
_(oLG,hOG)
if(_oz(z,3,e,s,gg)){hOG.wxVkey=1
}
fMG.wxXCkey=1
cNG.wxXCkey=1
hOG.wxXCkey=1
_(r,oLG)
var oPG=_mz(z,'SelectedPass',['bindselected',4,'busInfo',1,'id',2,'isShowPerPassengerPhone',3,'maxAdultNum',4,'passengers',5],[],e,s,gg)
_(r,oPG)
var tGG=_v()
_(r,tGG)
if(_oz(z,10,e,s,gg)){tGG.wxVkey=1
}
var cQG=_mz(z,'Passenger',['bindsyncPass',11,'id',1],[],e,s,gg)
_(r,cQG)
var oRG=_mz(z,'ExplainDetail',['serviceConfig',13,'show',1],[],e,s,gg)
_(r,oRG)
var eHG=_v()
_(r,eHG)
if(_oz(z,15,e,s,gg)){eHG.wxVkey=1
var lSG=_mz(z,'view',['bindtap',16,'class',1],[],e,s,gg)
var aTG=_mz(z,'view',['catchtap',18,'class',1],[],e,s,gg)
var tUG=_v()
_(aTG,tUG)
if(_oz(z,20,e,s,gg)){tUG.wxVkey=1
}
var eVG=_v()
_(aTG,eVG)
if(_oz(z,21,e,s,gg)){eVG.wxVkey=1
}
tUG.wxXCkey=1
eVG.wxXCkey=1
_(lSG,aTG)
_(eHG,lSG)
}
var bIG=_v()
_(r,bIG)
if(_oz(z,22,e,s,gg)){bIG.wxVkey=1
var bWG=_mz(z,'view',['bindtap',23,'class',1],[],e,s,gg)
var oXG=_mz(z,'view',['catchtap',25,'class',1],[],e,s,gg)
var xYG=_v()
_(oXG,xYG)
if(_oz(z,27,e,s,gg)){xYG.wxVkey=1
}
var oZG=_v()
_(oXG,oZG)
if(_oz(z,28,e,s,gg)){oZG.wxVkey=1
var f1G=_v()
_(oZG,f1G)
if(_oz(z,29,e,s,gg)){f1G.wxVkey=1
}
f1G.wxXCkey=1
}
xYG.wxXCkey=1
oZG.wxXCkey=1
_(bWG,oXG)
_(bIG,bWG)
}
var oJG=_v()
_(r,oJG)
if(_oz(z,30,e,s,gg)){oJG.wxVkey=1
var c2G=_mz(z,'view',['bindtap',31,'class',1],[],e,s,gg)
var h3G=_mz(z,'view',['class',33,'style',1],[],e,s,gg)
var o4G=_v()
_(h3G,o4G)
if(_oz(z,35,e,s,gg)){o4G.wxVkey=1
}
var c5G=_v()
_(h3G,c5G)
if(_oz(z,36,e,s,gg)){c5G.wxVkey=1
}
var o6G=_v()
_(h3G,o6G)
if(_oz(z,37,e,s,gg)){o6G.wxVkey=1
}
o4G.wxXCkey=1
c5G.wxXCkey=1
o6G.wxXCkey=1
_(c2G,h3G)
_(oJG,c2G)
}
var xKG=_v()
_(r,xKG)
if(_oz(z,38,e,s,gg)){xKG.wxVkey=1
var l7G=_n('login-popup')
_rz(z,l7G,'bind:loginSuccess',39,e,s,gg)
_(xKG,l7G)
}
tGG.wxXCkey=1
eHG.wxXCkey=1
bIG.wxXCkey=1
oJG.wxXCkey=1
xKG.wxXCkey=1
xKG.wxXCkey=3
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_29";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_29();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/customline/booking/booking.wxml'] = [$gwx_XC_29, './pages/customline/booking/booking.wxml'];else __wxAppCode__['pages/customline/booking/booking.wxml'] = $gwx_XC_29( './pages/customline/booking/booking.wxml' );
	;__wxRoute = "pages/customline/booking/booking";__wxRouteBegin = true;__wxAppCurrentFile__="pages/customline/booking/booking.js";define("pages/customline/booking/booking.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../@babel/runtime/helpers/interopRequireDefault"),e=t(require("../../../utils/util")),a=t(require("../../../utils/config"));Page({data:{passengers:[],upStation:{},downStation:{},showTicketExplain:!1,maxAdultNum:5,maxChildNum:0,maxBabyNum:0,headcount:0,type:"vega",explainType:1,stationType:1,showTagDetail:!1,showStationDetail:!1,showExplainDetail:!1,payPrice:0,picBaseUrl:a.default.picBaseUrl},onLoad:function(t){var e=t.busInfo,a=t.upStation,i=t.downStation;if(e&&(e=JSON.parse(decodeURIComponent(e))),a&&(a=JSON.parse(decodeURIComponent(a))),i&&(i=JSON.parse(decodeURIComponent(i))),e.selectDownStationList=e.downStationList,1==e.businessType){for(var o=[],n=0;n<e.downStationList.length;n++){var s=e.downStationList[n];if(s.sequenceNum>a.sequenceNum){for(var r=!1,d=0;d<e.stationPriceList.length;d++){var c=e.stationPriceList[d];c.downStationCode&&c.upStationCode&&c.downStationCode==s.shiftStationId&&c.upStationCode==a.shiftStationId&&(r=!0)}r&&o.push(s)}}e.selectDownStationList=o}this.setData({busInfo:e,upStation:a,downStation:i,payPrice:e.price}),this.getPrice()},bookExplain:function(){this.setData({explainType:1})},showTicketExplain:function(){this.setData({showTicketExplain:!this.data.showTicketExplain})},showStationDetail:function(){this.setData({showStationDetail:!this.data.showStationDetail})},showTagDetail:function(){this.setData({showTagDetail:!this.data.showTagDetail})},haveExplain:function(){this.setData({explainType:2})},upStationClick:function(){this.setData({showStationDetail:!0,stationType:1})},upClick:function(t){var e=t.currentTarget.dataset.data,a=this.data.busInfo;if(a.selectDownStationList=a.downStationList,1==a.businessType){for(var i=[],o=0;o<a.downStationList.length;o++){var n=a.downStationList[o];if(n.sequenceNum>e.sequenceNum){for(var s=!1,r=0;r<a.stationPriceList.length;r++){var d=a.stationPriceList[r];d.downStationCode&&d.upStationCode&&d.downStationCode==n.shiftStationId&&d.upStationCode==e.shiftStationId&&(s=!0)}s&&i.push(n)}}a.selectDownStationList=i}this.setData({busInfo:a,upStation:e,downStation:{},stationType:2}),this.getPrice()},downClick:function(t){var e=t.currentTarget.dataset.data;this.setData({downStation:e,showStationDetail:!1}),this.getPrice()},downStationClick:function(){this.setData({showStationDetail:!0,stationType:2})},showExplainDetail:function(){this.setData({showExplainDetail:!this.data.showExplainDetail})},onReady:function(){},getPrice:function(){var t=this.data,e=t.busInfo,a=t.downStation,i=t.upStation;if(a&&i&&a.stationName&&i.stationName&&e.stationPriceList)for(var o=0;o<e.stationPriceList.length;o++){var n=e.stationPriceList[o];(2==e.businessType&&n.upStationName&&n.downStationName&&n.downStationName==a.stationName&&n.upStationName==i.stationName||1==e.businessType&&n.upStationCode&&n.downStationCode&&n.downStationCode==a.shiftStationId&&n.upStationCode==i.shiftStationId)&&this.setData({payPrice:n.price})}},getResourceConfigInfo:function(){var t=this,i=this.data.busInfo;return new Promise((function(o,n){e.default.$http(a.default.getResourceConfigInfo,{appCode:wx.getStorageSync("appCode"),resourcesCode:1==t.data.busInfo.businessType?i.supplierCode:i.depotCode}).then((function(a){"200"==a.code?t.setData({serviceConfig:a.data}):e.default.alert("分销配置有误，请联系管理员"),o(a)})).catch((function(t){n(t),console.error("request api.getResourceConfigInfo error ",t)}))}))},getPassengers:function(t){var i=this;return new Promise((function(o,n){e.default.$http(a.default.getPassengerList,{memberId:wx.getStorageSync("memberId")},"GET").then((function(e){var a=e.data;a.forEach((function(t){t.selected=!1,t.contact=0,t.typeTicket="adult"})),i.setData({passengers:a,isHasTcPass:!!a.find((function(t){return 0==t.source}))}),o(a),t&&t(a)})).catch((function(t){n(t),console.error("request api.getPassengerList error ",t)}))}))},ToFixed:function(t,e){return Math.round(t*Math.pow(10,e))/Math.pow(10,e)},onShow:function(){this.checkUser()&&(this.setData({showLogin:!1}),this.getPassengers(),this.getResourceConfigInfo())},checkUser:function(){return wx.getStorageSync("openId")&&wx.getStorageSync("memberId")&&!!wx.getStorageSync("appCode")||(this.setData({showLogin:!0}),!1)},onHide:function(){},onPay:function(){this.getPrice();var t=wx.getStorageSync("bus_newContactPhone"),a=this.data.selectedPass||[],i=this.data.busInfo,o=this.data.upStation,n=this,s=this.data.downStation,r=this.data.serviceConfig;this.data.payPrice||i.price;if(a.length<=0)e.default.alert("请选择乘车用户");else if(t)if(e.default.isMobile(t))if(i.stationPriceList)if(r)if(s&&o&&s.stationName&&o.stationName){if(this.checkUser())if(r&&r.wechatAppletTemplateInfoList&&r.wechatAppletTemplateInfoList.length>0){for(var d=[],c=0;c<r.wechatAppletTemplateInfoList.length;c++)d.push(r.wechatAppletTemplateInfoList[c].templateId);d.length>0?wx.requestSubscribeMessage({tmplIds:d,complete:function(t){console.log(t),n.orderPay()}}):n.orderPay()}else n.orderPay()}else e.default.alert("请选择上下车站点");else e.default.alert("分销配置错误，暂不提供购票");else e.default.alert("当前线路票价配置有误");else e.default.alert("请输入正确的联系电话");else e.default.alert("请输入联系电话")},showPayDetail:function(){var t=this,e=this.data.serviceConfig;wx.showModal({title:"温馨提示",content:"您选的上车站点为:\r\n\r\n"+t.data.busInfo.startStationName+(e&&1==e.canRefund?"":"(不可线上退票)"),showCancel:!1,success:function(e){e.confirm?(console.log("用户点击确定"),t.orderPay()):e.cancel&&(console.log("用户点击取消"),t.setData({clickPay:!1}))}})},wxLoginSuccess:function(){this.checkUser()&&this.setData({showLogin:!1})},orderPay:function(){this.getPrice();var t=wx.getStorageSync("bus_newContactPhone"),i=this.data.selectedPass||[],o=this.data.busInfo,n=this.data.upStation,s=this,r=this.data.downStation,d=this.data.serviceConfig,c=this.data.payPrice||o.price;if(i.length<=0)e.default.alert("请选择乘车用户");else if(t)if(e.default.isMobile(t))if(o.stationPriceList)if(d)if(r&&n&&r.stationName&&n.stationName){for(var u=[],l=0;l<i.length;l++)u.push({name:i[l].passengerName,certNo:i[l].certificateNumber,mobile:i[l].mobile||t,price:c});var f={};if(o.ticketTypeInfoList){f=o.ticketTypeInfoList[0];for(l=0;l<o.ticketTypeInfoList.length;l++)"成人票"==o.ticketTypeInfoList[l].name&&(f=o.ticketTypeInfoList[l])}if(this.checkUser()){var p={appCode:wx.getStorageSync("appCode"),openId:wx.getStorageSync("openId"),tcMemberId:wx.getStorageSync("memberId"),businessType:o.businessType,shiftId:o.shiftId,depotCode:o.depotCode,startCityCode:o.startCityCode,startCityName:o.startCityName,startStationCode:o.startStationCode,endCityCode:o.endCityCode,endCityName:o.endCityName,endStationCode:o.endStationCode,upShiftStationCode:n.shiftStationId,upStationName:n.stationName,upStationCode:n.stationId,upStationLatitude:n.latitude,upStationLongitude:n.longitude,upStationAddress:n.address,downShiftStationCode:r.shiftStationId,downStationName:r.stationName,downStationCode:r.stationId,downStationLatitude:r.latitude,downStationLongitude:r.longitude,downStationAddress:r.address,arriveDateTime:n.departureDateTime,departureDate:o.departureDate,departureTime:o.departureTime,shiftNo:o.shiftNo,price:c,mobile:t,serviceFee:d.serviceFee,ticketAmount:(c*(i.length||0)).toFixed(2),payAmount:((c+d.serviceFee)*(i.length||0)).toFixed(2),passengerList:u,ticketTypeInfo:f};return new Promise((function(t,i){e.default.loading(),e.default.$http(a.default.customSaleOrder,p).then((function(t){"200"==t.code?s.toPay(t.data):(e.default.alert(t.msg),e.default.hideLoading())})).catch((function(t){i(t),e.default.hideLoading(),console.error("request api.queryLinkerNew error ",t)}))}))}}else e.default.alert("请选择上下车站点");else e.default.alert("分销配置错误，暂不提供购票");else e.default.alert("当前线路票价配置有误");else e.default.alert("请输入正确的联系电话");else e.default.alert("请输入联系电话")},toPay:function(t){return new Promise((function(i,o){e.default.loading(),e.default.$http(a.default.getWechatSign,{appCode:wx.getStorageSync("appCode"),openId:wx.getStorageSync("openId"),orderNo:t.orderNo,unionOrderNo:t.unionOrderNo,serviceFeeOrderNo:t.serviceFeeOrderNo}).then((function(a){"200"==a.code?(e.default.hideLoading(),wx.requestPayment({timeStamp:a.data.timeStamp,nonceStr:a.data.nonceStr,package:a.data.packageStr,signType:a.data.signType,paySign:a.data.paySign,success:function(e){wx.redirectTo({url:"../orderDetail/orderDetail?orderNo=".concat(t.orderNo)})},fail:function(e){wx.redirectTo({url:"../orderDetail/orderDetail?orderNo=".concat(t.orderNo)})}})):(e.default.alert(a.msg),e.default.hideLoading()),e.default.hideLoading()})).catch((function(t){o(t),e.default.hideLoading(),console.error("request api.queryLinkerNew error ",t)}))}))},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/customline/booking/booking.js'});require("pages/customline/booking/booking.js");$gwx_XC_30=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_30 || [];
function gz$gwx_XC_30_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'appCode']])
Z([3,'queryOrderDetail'])
Z([3,'orderStatus'])
Z([[7],[3,'memberId']])
Z([[7],[3,'orderDetail']])
Z([3,'order-info-box'])
Z([[2,'==='],[[6],[[7],[3,'orderDetail']],[3,'orderDisplayStatus']],[1,2]])
Z([[2,'||'],[[6],[[7],[3,'orderDetail']],[3,'licensePlateNumber']],[[6],[[7],[3,'orderDetail']],[3,'driverMobile']]])
Z([3,'vehicle-info'])
Z([[6],[[7],[3,'orderDetail']],[3,'licensePlateNumber']])
Z([[6],[[7],[3,'orderDetail']],[3,'driverMobile']])
Z([[6],[[7],[3,'orderDetail']],[3,'departureDateFormat']])
Z([[7],[3,'passengerList']])
Z(z[12])
Z([3,'index'])
Z([[2,'==='],[[7],[3,'index']],[1,0]])
Z([[2,'||'],[[2,'==='],[[6],[[7],[3,'orderDetail']],[3,'orderDisplayStatus']],[1,0]],[[2,'==='],[[6],[[7],[3,'orderDetail']],[3,'orderDisplayStatus']],[1,2]]])
Z([[2,'||'],[[2,'==='],[[6],[[7],[3,'orderDetail']],[3,'orderDisplayStatus']],[1,5]],[[2,'==='],[[6],[[7],[3,'orderDetail']],[3,'orderDisplayStatus']],[1,6]]])
Z(z[4])
Z([3,'toPay'])
Z(z[1])
Z(z[4])
Z([[7],[3,'showExplain']])
Z([3,'handleCancelPopup'])
Z([[7],[3,'showCancelPopup']])
Z([[7],[3,'showLogin']])
Z([3,'checkLogin'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_30=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_30=true;
var x=['./pages/customline/orderDetail/orderDetail.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_30_1()
var e0G=_mz(z,'order-status',['appCode',0,'bind:refresh',1,'id',1,'memberId',2,'orderDetail',3],[],e,s,gg)
_(r,e0G)
var bAH=_n('view')
_rz(z,bAH,'class',5,e,s,gg)
var oBH=_v()
_(bAH,oBH)
if(_oz(z,6,e,s,gg)){oBH.wxVkey=1
var fEH=_v()
_(oBH,fEH)
if(_oz(z,7,e,s,gg)){fEH.wxVkey=1
var cFH=_n('view')
_rz(z,cFH,'class',8,e,s,gg)
var hGH=_v()
_(cFH,hGH)
if(_oz(z,9,e,s,gg)){hGH.wxVkey=1
}
var oHH=_v()
_(cFH,oHH)
if(_oz(z,10,e,s,gg)){oHH.wxVkey=1
}
hGH.wxXCkey=1
oHH.wxXCkey=1
_(fEH,cFH)
}
var cIH=_mz(z,'order-qrcode',['departureDateFormat',11,'passengerList',1],[],e,s,gg)
_(oBH,cIH)
fEH.wxXCkey=1
}
var oJH=_v()
_(bAH,oJH)
var lKH=function(tMH,aLH,eNH,gg){
var oPH=_v()
_(eNH,oPH)
if(_oz(z,15,tMH,aLH,gg)){oPH.wxVkey=1
}
oPH.wxXCkey=1
return eNH
}
oJH.wxXCkey=2
_2z(z,13,lKH,e,s,gg,oJH,'item','index','index')
var xCH=_v()
_(bAH,xCH)
if(_oz(z,16,e,s,gg)){xCH.wxVkey=1
}
var oDH=_v()
_(bAH,oDH)
if(_oz(z,17,e,s,gg)){oDH.wxVkey=1
}
oBH.wxXCkey=1
oBH.wxXCkey=3
xCH.wxXCkey=1
oDH.wxXCkey=1
_(r,bAH)
var xQH=_n('order-baseinfo')
_rz(z,xQH,'orderDetail',18,e,s,gg)
_(r,xQH)
var oRH=_mz(z,'order-footer',['bind:pay',19,'bind:refresh',1,'orderDetail',2],[],e,s,gg)
_(r,oRH)
var fSH=_n('order-service')
_(r,fSH)
var cTH=_n('explain-detail')
_rz(z,cTH,'show',22,e,s,gg)
_(r,cTH)
var hUH=_mz(z,'order-cancel-popup',['bind:hidden',23,'show',1],[],e,s,gg)
_(r,hUH)
var t9G=_v()
_(r,t9G)
if(_oz(z,25,e,s,gg)){t9G.wxVkey=1
var oVH=_n('login-popup')
_rz(z,oVH,'bind:loginSuccess',26,e,s,gg)
_(t9G,oVH)
}
t9G.wxXCkey=1
t9G.wxXCkey=3
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_30";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_30();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/customline/orderDetail/orderDetail.wxml'] = [$gwx_XC_30, './pages/customline/orderDetail/orderDetail.wxml'];else __wxAppCode__['pages/customline/orderDetail/orderDetail.wxml'] = $gwx_XC_30( './pages/customline/orderDetail/orderDetail.wxml' );
	;__wxRoute = "pages/customline/orderDetail/orderDetail";__wxRouteBegin = true;__wxAppCurrentFile__="pages/customline/orderDetail/orderDetail.js";define("pages/customline/orderDetail/orderDetail.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../../@babel/runtime/helpers/objectSpread2"),a=e(require("../../../utils/config")),r=e(require("../../../utils/util")),o=require("../../../utils/fetch"),n=require("../../../utils/userInfo"),i=e(require("../../../utils/manba")),d=!1,c={0:"身份证"};Page({data:{showLogin:!1,appCode:"",openId:"",memberId:"",orderNo:"",orderDetail:{},passengerList:[],showFooterPopup:!1,showQrcodePopup:!1,showExplain:!1,showCancelPopup:!1,swiperCurrent:0},onShow:function(){var e=getCurrentPages(),t=e[e.length-1].options;t.orderNo?(this.setData({orderNo:t.orderNo}),this.checkLogin()):r.default.alert("未获取到订单号")},checkLogin:function(){var e=this,t=wx.getStorageSync("memberId");t?(0,n.getOpenid)().then((function(a){a.openId?(e.setData({showLogin:!1,appCode:a.appCode,openId:a.openId,memberId:t}),e.queryOrderDetail()):e.setData({showLogin:!0})})):this.setData({showLogin:!0})},queryOrderDetail:function(){var e=this;if(!d){d=!0,r.default.loading();var n=this.data,s=n.orderNo,u=n.appCode,l=n.memberId;(0,o.fetch)({url:"".concat(a.default.urlPrefix,"/customTraffic/order/detail_custom"),method:"POST",data:{appCode:u,orderNo:s,memberId:l},complete:function(a){r.default.hideLoading(),d=!1;var o=a.data;if(o&&"200"===o.code&&o.data){var n=o.data,s=[],u=o.data,l=u.departureDateTime,p=u.orderDisplayStatus,m=u.passengers;l&&(n.departureDateFormat=(0,i.default)(l).format("MM-DD 周w HH:mm:ss")),n.lastTime=n.costTime%60>0?parseInt(n.costTime/60)+"小时"+n.costTime%60+"分钟":n.costTime/60+"小时",n.btnText=0===p?"取消订单":"退票",m&&m.length&&(s=m.map((function(e){return t(t({},e),{},{certTypeName:c[e.certType]||""})}))),e.setData({orderDetail:n,passengerList:s})}else r.default.alert(o.msg)}})}},handleFooterPopup:function(){this.setData({showFooterPopup:!this.data.showFooterPopup})},handleCancelPopup:function(){this.setData({showCancelPopup:!this.data.showCancelPopup})},openMap:function(){console.log("打开地图");var e=this.data.orderDetail;e.departureStationLocation,e.arriveStationLocation},callDriver:function(){var e=this.data.orderDetail.driverMobile;e&&wx.makePhoneCall({phoneNumber:e})},openExplain:function(){this.setData({showExplain:!0})},cancelOrder:function(){var e=this,t=this.data.orderDetail,a=t.orderDisplayStatus,r=t.orderNo;2===a?wx.showModal({content:"确定要申请退票吗？",cancelText:"点错了",cancelColor:"#3D8FFF",confirmText:"申请退票",confirmColor:"#999999",success:function(e){e.confirm&&wx.navigateTo({url:"/pages/customline/refundConfirm/refundConfirm?orderNo=".concat(r)})}}):wx.showModal({content:"确定要申取消订单吗？",cancelText:"点错了",cancelColor:"#3D8FFF",confirmText:"取消订单",confirmColor:"#999999",success:function(t){t.confirm&&e.cancelOrderApi()}})},cancelOrderApi:function(){var e=this,t=this.data,n=t.appCode,i=t.openId,d=t.orderNo,c=t.memberId;(0,o.fetch)({url:"".concat(a.default.urlPrefix,"/customTraffic/order/cancelOrder"),method:"POST",data:{appCode:n,openId:i,orderNo:d,memberId:c},complete:function(t){var a=t.data;a&&"200"===a.code&&a.data?(e.orderStatus=e.selectComponent("#orderStatus"),e.orderStatus.cleanTimmer(),e.orderStatus.cleanTimmerStatus(),e.queryOrderDetail()):r.default.alert(t.data.msg)}})},footerBtnClick:function(){},toPay:function(){var e=this;r.default.loading();var t=this.data,n=t.appCode,i=t.openId,d=t.orderNo,c=t.orderDetail;(0,o.fetch)({url:a.default.getWechatSign,method:"POST",data:{appCode:n,openId:i,orderNo:d,unionOrderNo:c.unionOrderNo||"",serviceFeeOrderNo:c.serviceFeeOrderNo||""},complete:function(t){r.default.hideLoading();var a=t.data;a&&"200"===a.code?wx.requestPayment({timeStamp:a.data.timeStamp,nonceStr:a.data.nonceStr,package:a.data.packageStr,signType:a.data.signType,paySign:a.data.paySign,success:function(){e.queryOrderDetail()},fail:function(){e.queryOrderDetail()}}):r.default.alert(a.msg||"支付失败")}})}});
},{isPage:true,isComponent:true,currentFile:'pages/customline/orderDetail/orderDetail.js'});require("pages/customline/orderDetail/orderDetail.js");$gwx_XC_31=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_31 || [];
function gz$gwx_XC_31_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_31_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'orderDetail']],[3,'passengers']])
Z([[7],[3,'orderDetail']])
Z([[7],[3,'refundDetail']])
Z([3,'submitRefund'])
Z(z[1])
Z([3,'refundConfirm'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_31_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_31=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_31=true;
var x=['./pages/customline/refundConfirm/refundConfirm.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_31_1()
var oXH=_n('passenger-info')
_rz(z,oXH,'passengers',0,e,s,gg)
_(r,oXH)
var lYH=_mz(z,'price-info',['orderDetail',1,'refundDetail',1],[],e,s,gg)
_(r,lYH)
var aZH=_mz(z,'order-footer',['bind:click',3,'orderDetail',1,'pageName',2],[],e,s,gg)
_(r,aZH)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_31";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_31();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/customline/refundConfirm/refundConfirm.wxml'] = [$gwx_XC_31, './pages/customline/refundConfirm/refundConfirm.wxml'];else __wxAppCode__['pages/customline/refundConfirm/refundConfirm.wxml'] = $gwx_XC_31( './pages/customline/refundConfirm/refundConfirm.wxml' );
	;__wxRoute = "pages/customline/refundConfirm/refundConfirm";__wxRouteBegin = true;__wxAppCurrentFile__="pages/customline/refundConfirm/refundConfirm.js";define("pages/customline/refundConfirm/refundConfirm.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../../@babel/runtime/helpers/objectSpread2"),r=e(require("../../../utils/config")),a=e(require("../../../utils/util")),d=require("../../../utils/fetch"),o=require("../../../utils/userInfo"),u=require("../../../utils/typeSetting"),n=e(require("../../../utils/manba"));Page({data:{appCode:"",openId:"",orderNo:"",memberId:"",orderDetail:{},showReasonPopup:!1,refundReason:""},onLoad:function(e){var t=this,r=wx.getStorageSync("memberId");r?e.orderNo?(0,o.getOpenid)().then((function(a){t.setData({appCode:a.appCode,openId:a.openId,orderNo:e.orderNo,memberId:r}),t.queryOrderDetail(),t.queryRefundDetail()})):a.default.alert("未获取到订单号"):a.default.alert("未登录")},queryOrderDetail:function(){var e=this;a.default.loading();var o=this.data,i=o.orderNo,f=o.appCode,s=o.memberId;(0,d.fetch)({url:"".concat(r.default.urlPrefix,"/customTraffic/order/detail_custom"),method:"POST",data:{appCode:f,orderNo:i,memberId:s},complete:function(r){a.default.hideLoading();var d=r.data;if(d&&"200"===d.code&&d.data){var o=d.data,i=d.data,f=i.departureDateTime,s=i.passengers;f&&(o.departureDateFormat=(0,n.default)(f).format("MM-DD 周w HH:mm:ss")),o.lastTime=o.costTime%60>0?parseInt(o.costTime/60)+"小时"+o.costTime%60+"分钟":o.costTime/60+"小时";var l=s.length;l&&(o.ticketPrice=s[0].price,o.ticketNum=l,o.passengers=s.map((function(e){return t(t({},e),{},{certTypeName:u.certTypeSetting[e.certType]||""})}))),e.setData({orderDetail:o})}else a.default.alert(d.msg)}})},queryRefundDetail:function(){var e=this,t=this.data,o=t.appCode,u=t.orderNo,n={appCode:o,memberId:t.memberId,orderNo:u};(0,d.fetch)({url:"".concat(r.default.urlPrefix,"/customTraffic/order/refund_detail"),method:"POST",data:n,complete:function(t){var r=t.data;r&&"200"===r.code&&r.data?e.setData({refundDetail:{refundAmount:r.data.refundAmount,refundChargeAmount:r.data.refundChargeAmount,refundStatus:r.data.refundStatus}}):(a.default.alert(r.msg||"系统异常"),setTimeout((function(){wx.navigateBack()}),2e3))}})},refundOrderApi:function(){var e=this;a.default.loading();var t=this.data,o=t.appCode,u=t.openId,n=t.orderNo,i=t.memberId,f=t.refundDetail,s={appCode:o,openId:u,orderNo:n,memberId:i,refundMoney:f.refundAmount,refundFee:f.refundChargeAmount};(0,d.fetch)({url:"".concat(r.default.urlPrefix,"/customTraffic/order/refundOrder"),method:"POST",data:s,complete:function(t){a.default.hideLoading();var r=t.data;r&&"200"===r.code?wx.redirectTo({url:"/pages/customline/orderDetail/orderDetail?orderNo=".concat(e.data.orderNo)}):a.default.alert(r.msg||"退票失败，请稍后再试")}})},submitRefund:function(){this.refundOrderApi()},passReason:function(){this.setData({refundReason:""})},submitReason:function(e){console.log(e)}});
},{isPage:true,isComponent:true,currentFile:'pages/customline/refundConfirm/refundConfirm.js'});require("pages/customline/refundConfirm/refundConfirm.js");$gwx_XC_32=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_32 || [];
function gz$gwx_XC_32_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_32_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_32_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_32_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'sixDateSel'])
Z([3,'toggleCalendar'])
Z([3,'calenders'])
Z([[7],[3,'coverSelf']])
Z([3,'slideCalendar'])
Z([[7],[3,'isLoading']])
Z([3,'showHideInnerPage'])
Z([3,'bottom'])
Z([[7],[3,'show']])
Z([1,false])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_32_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_32_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_32=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_32=true;
var x=['./pages/customline/shifts/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_32_1()
var e2H=_mz(z,'calendars',['bind:select',0,'bind:toggleCalendar',1,'class',1,'coverSelf',2,'id',3,'isLoading',4],[],e,s,gg)
_(r,e2H)
var b3H=_mz(z,'popup',['bind:hidden',6,'position',1,'show',2,'showTitle',3],[],e,s,gg)
_(r,b3H)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_32";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_32();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/customline/shifts/index.wxml'] = [$gwx_XC_32, './pages/customline/shifts/index.wxml'];else __wxAppCode__['pages/customline/shifts/index.wxml'] = $gwx_XC_32( './pages/customline/shifts/index.wxml' );
	;__wxRoute = "pages/customline/shifts/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/customline/shifts/index.js";define("pages/customline/shifts/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var a=require("../../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../../@babel/runtime/helpers/objectSpread2"),e=a(require("../../../utils/calendar")),n=a(require("../../../utils/manba")),i=require("../../../utils/config"),d=require("../../../utils/util"),s=!1;Page({data:{candidateData:[{id:1,title:"00:00-06:00",value:"00:00-06:00"},{id:2,title:"06:00-12:00",value:"06:00-12:00"},{id:3,title:"12:00-18:00",value:"12:00-18:00"},{id:4,title:"18:00-24:00",value:"18:00-24:00"}],show:!1,noMore:!1,queryDate:d.format(new Date,"Y-M-D"),candidateDataBuses:[],candidateStartData:[],candidateEndData:[],sourceBusData:[],businessType:1,optionsInfo:null,picBaseUrl:i.picBaseUrl},onLoad:function(a){d.isEmpty(a)||this.setData(t(t({},a),{},{optionsInfo:a}));a.businessType;this.setData({businessType:1}),this.initCalendar(),a.title&&wx.setNavigationBarTitle({title:a.title})},onShow:function(){this.data.optionsInfo&&this.loadData(this.data.optionsInfo)},handleData:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=this,e=a,n=[],i=[];if(a&&0!=a.length){a.forEach((function(a){-1==n.indexOf(a.startStationName)&&n.push(a.startStationName),-1==i.indexOf(a.endStationName)&&i.push(a.endStationName)}));var d=[],s=[];n.forEach((function(a){d.push({id:d.length,title:a,value:a})})),i.forEach((function(a){s.push({id:s.length,title:a,value:a})})),t.setData({sourceBusData:e,candidateDataBuses:a,candidateEndData:s,candidateStartData:d})}},initCalendar:function(){this.slideCalendar=this.selectComponent("#slideCalendar");var a=this.slideCalendar.data;a.querydate=this.data.queryDate,a.startdate=new Date;var t=new Date;t.setDate(t.getDate()+14),a.enddate=t,this.slideCalendar.init()},sixDateSel:function(a){var t=a.detail;t.date!==this.data.queryDate&&(this.setData({isLoading:!0,queryDate:t.date}),this.data.optionsInfo&&this.loadData(this.data.optionsInfo))},toggleCalendar:function(a){var t=this;e.default.show({startDate:new Date,selectDate:this.data.queryDate,noticeLink:{type:"page",link:"/pages/login/login"},callback:function(a){console.log(a.date);var e=t.data.queryDate&&(0,n.default)(t.data.queryDate).format("YYYY-MM-DD"),i=a.date;i!=e&&(t.setData({queryDate:new Date(i)}),t.initCalendar())}})},filterfunc:function(a){var t=a.currentTarget.dataset.funn;this.setData({funN:t}),this.showHideInnerPage()},showHideInnerPage:function(){this.setData({show:!this.data.show})},loadMore:function(){d.loading(),setTimeout((function(){d.hideLoading()}),1500),this.setData({noMore:!0})},checkAllStations:function(a){console.log(a)},applyForBuy:function(a){var t=a.currentTarget.dataset.bus,e=this.data.queryDate;wx.navigateTo({url:"../sitemap/index?queryDate=".concat(e),success:function(a){a.eventChannel.emit("receiteBusData",{busdetail:t})}})},checkChange:function(a){var t=a.currentTarget.dataset.checkitem,e=this.data.candidateData;e.forEach((function(a){a.id==t&&(a.checked=!a.checked)})),this.setData({candidateData:e})},startStationSelect:function(a){var t=a.currentTarget.dataset.startid,e=this.data.candidateStartData;e.forEach((function(a){a.id==t&&(a.checked=!a.checked)})),this.setData({candidateStartData:e})},endStationSelect:function(a){var t=a.currentTarget.dataset.endid,e=this.data.candidateEndData;e.forEach((function(a){a.id==t&&(a.checked=!a.checked)})),this.setData({candidateEndData:e})},loadData:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{appCode:"001",businessType:this.data.businessType,startCityCode:"521",startCityName:"靖江",startStationCode:"207",endCityCode:"3945",endCityName:"吴中",endStationCode:"4456"};if(s)this.data.businessType;else{s=!0;var e=this;d.loading(),d.$http(i.cusList,t(t({},a),{},{departureDate:e.data.queryDate}),"post").then((function(a){200==parseInt(a.code)?(a.data&&a.data.length>0?e.handleData(a.data):e.setData({sourceBusData:[],candidateDataBuses:[],candidateEndData:[],candidateStartData:[]}),d.hideLoading()):(d.hideLoading(),d.showToast(a.msg,"error",2500,null),e.setData({sourceBusData:[],candidateDataBuses:[],candidateEndData:[],candidateStartData:[]})),s=!1,e.setData({isLoading:!1})})).catch((function(a){e.setData({isLoading:!1}),d.hideLoading(),d.showToast(a.msg,"error",2500,null),s=!1}))}},resetPop:function(){var a=this.data.candidateData,t=this.data.candidateEndData,e=this.data.candidateStartData;this.setData({candidateData:this.clearfilterData(a),candidateEndData:this.clearfilterData(t),candidateStartData:this.clearfilterData(e)})},comfirmPop:function(){var a=this,t=a.data.sourceBusData,e=Object.assign([],t),n=a.data.candidateData,i=a.data.candidateStartData,d=a.data.candidateEndData,s=[];n.forEach((function(a){a.checked&&s.push(a.value)})),s.length>0&&(e=e.filter((function(t){var e=!1;return s.forEach((function(n){var i=n.split("-");a.CompareDate(i[0],t.departureTime)&&a.CompareDate(t.departureTime,i[1])&&(e=!0)})),e})));var r=[];i.forEach((function(a){a.checked&&r.push(a.value)})),r.length>0&&(e=e.filter((function(a){return r.indexOf(a.startStationName)>-1})));var o=[];o.length>0&&(d.forEach((function(a){a.checked&&o.push(a.value)})),e=e.filter((function(a){return o.indexOf(a.endStationName)>-1}))),r.length>0||o.length>0||s.length>0?a.setData({candidateDataBuses:e}):a.setData({candidateDataBuses:t}),a.showHideInnerPage()},clearfilterData:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return a.forEach((function(a){a.checked&&(a.checked=!1)})),a},CompareDate:function(a,t){var e=new Date,n=a.split(":"),i=t.split(":");return e.setHours(n[0],n[1])<e.setHours(i[0],i[1])}});
},{isPage:true,isComponent:true,currentFile:'pages/customline/shifts/index.js'});require("pages/customline/shifts/index.js");$gwx_XC_33=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_33 || [];
function gz$gwx_XC_33_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_33_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'showHideInnerPage'])
Z([1,false])
Z([3,'bottom'])
Z([1,true])
Z(z[1])
Z([[7],[3,'curList']])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'hide']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_33_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_33=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_33=true;
var x=['./pages/customline/sitemap/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_33_1()
var x5H=_mz(z,'popup',['bind:hidden',0,'overlay',1,'position',1,'show',2,'showTitle',3],[],e,s,gg)
var o6H=_v()
_(x5H,o6H)
var f7H=function(h9H,c8H,o0H,gg){
var oBI=_v()
_(o0H,oBI)
if(_oz(z,6,h9H,c8H,gg)){oBI.wxVkey=1
}
oBI.wxXCkey=1
return o0H
}
o6H.wxXCkey=2
_2z(z,5,f7H,e,s,gg,o6H,'item','index','')
_(r,x5H)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_33";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_33();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/customline/sitemap/index.wxml'] = [$gwx_XC_33, './pages/customline/sitemap/index.wxml'];else __wxAppCode__['pages/customline/sitemap/index.wxml'] = $gwx_XC_33( './pages/customline/sitemap/index.wxml' );
	;__wxRoute = "pages/customline/sitemap/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/customline/sitemap/index.js";define("pages/customline/sitemap/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../utils/config"),e=require("../../../utils/util"),a=null;Page({data:{subkey:t.tenxunMapKey,latitude:"",longitude:"",departType:0,markers:[],picBaseUrl:t.picBaseUrl,curList:[],endStations:[],startStations:[]},onLoad:function(t){var e=this,a=t.queryDate,i=this.getOpenerEventChannel();e.setData({queryData:a}),i.on("receiteBusData",(function(t){var a=t.busdetail;e.setData({busInfo:a,startStations:a.upStationList,endStations:a.downStationList}),e.changeCurListByType(1)}))},onReady:function(){a=wx.createMapContext("myMap");var t=this.data.curList;this.creatMarker(t),this.createTcPolygon(t)},mapUpdated:function(){this.includeAllPoints(this.data.curList)},creatMarker:function(e){if(e){var a=[];e.forEach((function(e){if(!e.hide){var i={id:e.id,width:1,height:1,longitude:e.longitude,latitude:e.latitude,iconPath:t.picBaseUrl+"/insivible.png",callout:{content:e.stationName,color:"#fff",fontSize:14,bgColor:"#3D8FFF",borderRadius:8,borderColor:"#3D8FFF",borderWidth:1,padding:5,anchorY:-5,display:"ALWAYS"}};a.push(i)}})),a.length&&this.setData({markers:a,longitude:e[0].longitude,latitude:e[0].latitude})}},createTcPolygon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(t&&0!=t.length){var e=this,a=[],i=[];t.forEach((function(t){var e={},n=[];t.coordinateList&&0!=t.coordinateList.length&&(t.coordinateList.forEach((function(t){n.push({longitude:t.lon,latitude:t.lat})})),e.points=n,e.strokeColor="#A5BBEDFF",e.fillColor="#A5BBED80",a.push(e),t.coordinateList.forEach((function(t){i.push({longitude:t.lon,latitude:t.lat})})))})),e.setData({polygons:a,allPoints:i})}},includeAllPoints:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(t.length){var e=[];t.forEach((function(t){e.push({latitude:t.latitude,longitude:t.longitude}),t.coordinateList&&0!=t.coordinateList.length&&t.coordinateList.forEach((function(t){e.push({latitude:t.lat,longitude:t.lon})}))})),1!=e.length&&0!=e.length&&a.includePoints({padding:[50,50,50,50],points:e})}},changeRegin:function(t){},changeDepartType:function(t){if(t){t=parseInt(t),this.changeCurListByType(t)}},tabChange:function(t){var e=t.currentTarget.dataset.type;this.data.departType!=e&&(console.log("change depart..."),this.changeDepartType(e),this.includeAllPoints(this.data.curList))},changeCurListByType:function(t){var e=[],a=this.data.downStation,i=this.data.upStation,n=this.data.busInfo.stationPriceList;if(1==wx.getStorageSync("businessType"))if(1===parseInt(t)){(e=this.data.startStations.filter((function(t){var e=!1;return n.forEach((function(a){t.shiftStationId!=parseInt(a.upStationCode)||(e=!0)})),e}))).forEach((function(t){a&&t.sequenceNum>=a.sequenceNum?t.hide=!0:t.hide=!1}))}else{var o=this.data.endStations;e=o,(e=o.filter((function(t){var e=!1;return n.forEach((function(a){t.shiftStationId!=parseInt(a.downStationCode)||(e=!0)})),e}))).forEach((function(t){i&&t.sequenceNum<=i.sequenceNum?t.hide=!0:t.hide=!1}))}else e=1===parseInt(t)?this.data.startStations:this.data.endStations;this.creatMarker(e),this.createTcPolygon(e),this.setData({curList:e,departType:t})},btnLeft:function(){wx.navigateBack()},btnRight:function(){var t=this,a=t.data.departType;if(1==parseInt(a)){if(!t.checkStaionChecked(t.data.startStations))return void e.alert("请选择出发站点","提示");t.changeDepartType(2)}else if(2==parseInt(a)){if(!t.checkStaionChecked(t.data.startStations))return void e.alert("请选择出发站点","提示","","","",(function(){t.changeDepartType(1)}));if(!t.checkStaionChecked(t.data.endStations))return void e.alert("请选择到达站站点","提示");t.data.startStations.forEach((function(t){t.isChecked&&t})),t.data.endStations.forEach((function(t){t.isChecked&&t}));var i=this.data,n=i.busInfo,o=i.upStation,s=i.downStation;wx.navigateTo({url:"../booking/booking?busInfo=".concat(encodeURIComponent(JSON.stringify(n)),"&upStation=").concat(encodeURIComponent(JSON.stringify(o)),"&downStation=").concat(encodeURIComponent(JSON.stringify(s)))})}},checkStaionChecked:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(t){var a=!1;return t.forEach((function(t){t.isChecked&&(a=!0)})),a}e.alert("未获取到站点信息","提示")},destSelect:function(t){var e=t.currentTarget.dataset.dest,a=(e.id,e.longitude),i=e.latitude;e.buildName,e.address;this.handleSelect(t),this.setData({longitude:a,latitude:i})},handleSelect:function(t){var e,a=t.currentTarget.dataset.dest,i=a.stationId,n=(a.longitude,a.latitude,a.buildName,a.address,this.data.curList);n.forEach((function(t){t.stationId===i?(null==t.isChecked||""==t.isChecked?t.isChecked=!0:t.isChecked=!t.isChecked,t.isChecked&&(e=t)):t.isChecked=!1})),1==this.data.departType?this.setData({curList:n,upStation:e}):this.setData({curList:n,downStation:e})},showHideInnerPage:function(){this.setData({show:!this.data.show})},poitap:function(t){console.log(t)}});
},{isPage:true,isComponent:true,currentFile:'pages/customline/sitemap/index.js'});require("pages/customline/sitemap/index.js");$gwx_XC_34=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_34 || [];
function gz$gwx_XC_34_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_34_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'home-container'])
Z([[2,'&&'],[[7],[3,'businessTypeList']],[[6],[[7],[3,'businessTypeList']],[3,'length']]])
Z([[2,'&&'],[[7],[3,'homeHistory']],[[6],[[7],[3,'homeHistory']],[3,'length']]])
Z([[2,'&&'],[[7],[3,'footerAdvertiseList']],[[6],[[7],[3,'footerAdvertiseList']],[3,'length']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_34_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_34=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_34=true;
var x=['./pages/home/home.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_34_1()
var aDI=_n('view')
_rz(z,aDI,'class',0,e,s,gg)
var tEI=_v()
_(aDI,tEI)
if(_oz(z,1,e,s,gg)){tEI.wxVkey=1
var bGI=_v()
_(tEI,bGI)
if(_oz(z,2,e,s,gg)){bGI.wxVkey=1
}
bGI.wxXCkey=1
}
var eFI=_v()
_(aDI,eFI)
if(_oz(z,3,e,s,gg)){eFI.wxVkey=1
}
tEI.wxXCkey=1
eFI.wxXCkey=1
_(r,aDI)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_34";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_34();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/home/home.wxml'] = [$gwx_XC_34, './pages/home/home.wxml'];else __wxAppCode__['pages/home/home.wxml'] = $gwx_XC_34( './pages/home/home.wxml' );
	;__wxRoute = "pages/home/home";__wxRouteBegin = true;__wxAppCurrentFile__="pages/home/home.js";define("pages/home/home.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault"),e=t(require("../../utils/config")),a=t(require("../../utils/util")),s=require("../../utils/fetch"),n=require("../../utils/appInfo"),i=t(require("../../utils/manba")),o=t(require("../../utils/calendar")),r=!1,u=!1;Page({data:{businessType:0,customLineObj:{start:"上海",end:"苏州"},list:[{name:"城市公交"},{name:"城市公交111"},{name:"城市公交"},{name:"城市公交"},{name:"城市公交222"},{name:"城市公交"}],homeHistory:["苏州-上海","苏州-上海","苏州-上海"],startStation:{},endStation:{},startStationCustom:{},endStationCustom:{},appCode:"",bannerList:[],footerAdvertiseList:[],businessTypeList:[],currentTab:0,departureDate:{formatDate:"",date:"",desc:"今天出发"}},onLoad:function(){var t=this,e=wx.getStorageSync("homeHistory")||[];this.setData({departureDate:{formatDate:(0,i.default)().format("MM月DD日"),date:(0,i.default)().format(),desc:"今天出发"},homeHistory:e}),(0,n.getAppInfo)().then((function(e){e.name&&wx.setNavigationBarTitle({title:e.name}),t.setData({appCode:e.code}),t.getAdvertisement(),t.getAppBusinessTypeList()}))},onShow:function(){var t=wx.getStorageSync("startStation")||{},e=wx.getStorageSync("endStation")||{},a=wx.getStorageSync("startStationCustom")||{},s=wx.getStorageSync("endStationCustom")||{};this.setData({startStation:t,endStation:e,startStationCustom:a,endStationCustom:s}),this.data.appCode&&(this.getAdvertisement(),this.getAppBusinessTypeList())},getAppBusinessTypeList:function(){var t=this;r||(r=!0,(0,s.fetch)({url:"".concat(e.default.urlPrefix,"/appbusiness/getAppBusinessTypeList"),method:"GET",data:{appCode:this.data.appCode},complete:function(e){if(r=!1,e&&e.data&&"200"===e.data.code&&e.data.data){var a=e.data,s=[],n=null,i=null,o=wx.getStorageSync("businessType")||0;a.data.forEach((function(t){0===t?n={businessType:0,businessTypeName:"汽车票"}:i={businessType:t,businessTypeName:"定制班次"}})),n?(s.push(n),i&&s.push(i)):i&&(t.setData({businessType:i.businessType}),s.push(i));var u=s.length;if(1===u)o=s[0].businessType;else if(2===u){s.findIndex((function(t){return t.businessType===o}))<0&&(o=s[0].businessType)}var d=0;o>0&&2===u&&(d=1),t.setData({currentTab:d,businessType:o,businessTypeList:s}),wx.setStorageSync("businessTypeList",s),wx.setStorageSync("businessType",o)}}}))},getAdvertisement:function(){var t=this;u||(u=!0,(0,s.fetch)({url:"".concat(e.default.urlPrefix,"/advertisement/getAdvertisement"),method:"GET",data:{code:this.data.appCode},complete:function(e){if(u=!1,e&&e.data&&"200"===e.data.code&&e.data.data){var a=e.data,s=[],n=[];a.data.forEach((function(t){1===t.position&&s.push(t),2===t.position&&n.push(t)})),n.length&&(n=n.sort((function(t,e){return t.sort-e.sort}))),t.setData({bannerList:s,footerAdvertiseList:n})}}}))},switchTicketType:function(t){var e=t.currentTarget.dataset.index,a=this.data.businessTypeList[e].businessType;this.setData({businessType:a,currentTab:e}),wx.setStorageSync("businessType",a)},switchStation:function(){if(0===this.data.businessType){var t=JSON.parse(JSON.stringify(this.data.startStation)),e=JSON.parse(JSON.stringify(this.data.endStation));t.name&&e.name&&(this.setData({startStation:e,endStation:t}),wx.setStorageSync("startStation",e),wx.setStorageSync("endStation",t))}else{var a=JSON.parse(JSON.stringify(this.data.startStationCustom)),s=JSON.parse(JSON.stringify(this.data.endStationCustom));a.name&&s.name&&(this.setData({startStationCustom:s,endStationCustom:a}),wx.setStorageSync("startStationCustom",s),wx.setStorageSync("endStationCustom",a))}},clearHistory:function(){this.setData({homeHistory:[]}),wx.setStorageSync("homeHistory",[])},selectHistory:function(t){var e=this.data.homeHistory,a=t.currentTarget.dataset.index,s=e[a];e.unshift(e.splice(a,1)[0]),this.setData({homeHistory:e}),wx.setStorageSync("homeHistory",e),this.goShiftList(s)},search:function(){var t=this.data.businessType,e=this.data.homeHistory,a=null,s=null;if(0===t?(a=this.data.startStation,s=this.data.endStation):(a=this.data.startStationCustom,s=this.data.endStationCustom),a&&s&&a.name&&s.name){var n={startStation:a,endStation:s,name:a.name+"-"+s.name},i=e.findIndex((function(t){return t.name===n.name}));-1===i?(e.unshift(n),e.length>3&&e.splice(3)):e.unshift(e.splice(i,1)[0]),this.setData({homeHistory:e}),wx.setStorageSync("homeHistory",e);var o={name:n.name,startStation:a,endStation:s};this.goShiftList(o)}},goShiftList:function(t){var e=t.startStation,a=t.endStation,s=this.data,n=s.businessType,i=s.appCode,o=t.name,r=e.cityCode,u=e.cityName,d=e.stationCode,c=e.stationName,p=a.cityCode,m=a.cityName,S=a.stationCode,f=a.stationName,y=this.data.departureDate.date,h=0===n?"carline":"customline",l=d?"startStationCode=".concat(d,"&startStationName=").concat(c):"",g=S?"endStationCode=".concat(S,"&endStationName=").concat(f):"",T="/pages/".concat(h,"/shifts/index?businessType=").concat(n,"&queryDate=").concat(y,"&appCode=").concat(i,"&title=").concat(o)+"&startCityCode=".concat(r,"&startCityName=").concat(u,"&")+l+"&endCityCode=".concat(p,"&endCityName=").concat(m,"&")+g;wx.navigateTo({url:T})},configJump:function(t){var e=t.currentTarget.dataset.item;console.log(e);var s=e.appId,n=e.linkUrl;a.default.jumpMiniProgramOrWebview(s,n)},goSelectCity:function(t){var e=t.currentTarget.dataset.type,a=this.data.businessType,s="start"===e?1:0;wx.navigateTo({url:"/pages/selectCity/selectCity?businessType=".concat(a,"&isStart=").concat(s)})},goCalendar:function(){var t=this,e=this.data.departureDate,a=(0,i.default)().add(1,i.default.MONTH),s=(0,i.default)(a).endOf(i.default.MONTH).format();o.default.show({startDate:new Date,endDate:s,selectDate:e.date,callback:function(a){if(e.date!==a.date){var s={formatDate:(0,i.default)(a.date).format("MM月DD日"),date:a.date,desc:a.date===(0,i.default)().format()?"今天出发":(0,i.default)(a.date).format("周w")+"出发"};t.setData({departureDate:s})}}})},bannerJump:function(t){var e=t.currentTarget.dataset.item;a.default.jumpMiniProgramOrWebview(e.appId,e.linkUrl)}});
},{isPage:true,isComponent:true,currentFile:'pages/home/home.js'});require("pages/home/home.js");$gwx_XC_35=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_35 || [];
function gz$gwx_XC_35_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_35_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_35_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_35_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_35_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_35_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_35=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_35=true;
var x=['./pages/login/login.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_35_1()
var xII=_v()
_(r,xII)
if(_oz(z,0,e,s,gg)){xII.wxVkey=1
var oJI=_n('popup')
_(xII,oJI)
}
xII.wxXCkey=1
xII.wxXCkey=3
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_35";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_35();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/login/login.wxml'] = [$gwx_XC_35, './pages/login/login.wxml'];else __wxAppCode__['pages/login/login.wxml'] = $gwx_XC_35( './pages/login/login.wxml' );
	;__wxRoute = "pages/login/login";__wxRouteBegin = true;__wxAppCurrentFile__="pages/login/login.js";define("pages/login/login.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault"),e=t(require("../../utils/config")),a=t(require("../../utils/util")),i=require("../../utils/fetch"),n=require("../../utils/validate"),o=require("../../utils/userInfo"),s=60,d=null,u=!1;Page({data:{mobile:"",code:"",isChecked:!1,isDisabled:!0,openId:"",unionId:"",appCode:"",countDownBtn:"获取动态码",countDownDisabled:!1},onLoad:function(t){var e=this;(0,o.getOpenid)().then((function(t){e.setData({openId:t.openId,appCode:t.appCode})}))},onShow:function(){},bindInputMobile:function(t){this.setData({mobile:t.detail.value}),this.watchSubmitStatus(t.detail.value,this.data.code)},bindInputCode:function(t){this.setData({code:t.detail.value}),this.watchSubmitStatus(this.data.mobile,t.detail.value)},handleRadioClick:function(){this.setData({isChecked:!this.data.isChecked})},getCode:function(){var t=this;if(!this.data.countDownDisabled&&!u){var o=this.data,s=o.mobile,d=o.appCode;if(!s)return a.default.showToast("请填写手机号","none"),!1;if(!n.phoneValid.test(s))return a.default.showToast("请填写正确的手机号","none"),!1;u=!0,(0,i.fetch)({url:"".concat(e.default.urlPrefix,"/member/sendSms"),method:"GET",data:{phone:s,code:d},complete:function(e){u=!1,"200"===e.data.code&&t.countDownFn()}})}},countDownFn:function(){var t=this;d=setInterval((function(){0===s?(clearInterval(d),d=null,s=60,t.setData({countDownBtn:"获取动态码",countDownDisabled:!1})):(--s,t.setData({countDownBtn:s+"s后重新获取",countDownDisabled:!0}))}),1e3)},watchSubmitStatus:function(t,e){n.phoneValid.test(t)&&e?this.setData({isDisabled:!1}):this.setData({isDisabled:!0})},popupConfirm:function(){this.setData({show:!1})},submit:function(){if(!this.data.isDisabled)if(this.data.isChecked){var t=this.data,n=t.mobile,o=t.appCode,s=t.code,d=t.openId;(0,i.fetch)({url:"".concat(e.default.urlPrefix,"/member/register"),method:"POST",data:{mobile:n,appCode:o,sms:!0,smsCode:s,openId:d},complete:function(t){var e=t.data;"200"!==e.code||a.default.isEmpty(e.data)?a.default.alert(e.msg||"登录失败"):(wx.setStorageSync("memberId",e.data.memberId),wx.navigateBack())}})}else this.setData({show:!0})},goAgreement:function(){wx.navigateTo({url:"/pages/agreement/agreement"})}});
},{isPage:true,isComponent:true,currentFile:'pages/login/login.js'});require("pages/login/login.js");$gwx_XC_36=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_36 || [];
function gz$gwx_XC_36_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_36_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'memberInfo']],[3,'mobile']])
Z([[7],[3,'showLogin']])
Z([3,'wxLoginSuccess'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_36_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_36_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_36=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_36=true;
var x=['./pages/mine/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_36_1()
var cLI=_v()
_(r,cLI)
if(_oz(z,0,e,s,gg)){cLI.wxVkey=1
}
var hMI=_v()
_(r,hMI)
if(_oz(z,1,e,s,gg)){hMI.wxVkey=1
var oNI=_n('login-popup')
_rz(z,oNI,'bind:loginSuccess',2,e,s,gg)
_(hMI,oNI)
}
cLI.wxXCkey=1
hMI.wxXCkey=1
hMI.wxXCkey=3
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_36";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_36();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/index.wxml'] = [$gwx_XC_36, './pages/mine/index.wxml'];else __wxAppCode__['pages/mine/index.wxml'] = $gwx_XC_36( './pages/mine/index.wxml' );
	;__wxRoute = "pages/mine/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/mine/index.js";define("pages/mine/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../utils/config"),e=require("../../utils/userInfo"),a=require("../../utils/config"),n=require("../../utils/util");Page({data:{picBaseUrl:t.picBaseUrl,showLogin:!1},onLoad:function(t){},onShow:function(){var t=wx.getStorageSync("memberId");t?(this.loadData(),this.setData({showLogin:!1,memberId:t})):this.setData({showLogin:!0,memberId:t,memberInfo:null})},loadData:function(){var t=this;n.loading(),n.$http(a.getMemberInfo,{memberId:wx.getStorageSync("memberId")},"get").then((function(e){200==parseInt(e.code)&&(e.data?t.setData({memberInfo:e.data}):busUtilswx.showToast({title:e.msg})),n.hideLoading()})).catch((function(t){n.showToast(t.msg),n.hideLoading()}))},mineSet:function(t){wx.navigateTo({url:"../mineset/index"})},checkContactInfo:function(){wx.navigateTo({url:"../contacts/index"})},wxLoginSuccess:function(){var t=this,a=wx.getStorageSync("memberId");a&&(0,e.getOpenid)().then((function(e){e.openId&&(t.setData({showLogin:!1,memberId:a}),t.loadData())}))},btnAllOrders:function(){getApp().globalData.tabIndex=2,wx.switchTab({url:"/pages/orderList/orderList?=tab=2"})},btnWaitPay:function(){getApp().globalData.tabIndex=1,wx.switchTab({url:"/pages/orderList/orderList?tab=1"})},btnWaitTrait:function(){getApp().globalData.tabIndex=0,wx.switchTab({url:"/pages/orderList/orderList?tab=0"})}});
},{isPage:true,isComponent:true,currentFile:'pages/mine/index.js'});require("pages/mine/index.js");$gwx_XC_37=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_37 || [];
function gz$gwx_XC_37_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_37_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_37_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_37_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_37_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_37_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_37=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_37=true;
var x=['./pages/mineset/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_37_1()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_37";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_37();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mineset/index.wxml'] = [$gwx_XC_37, './pages/mineset/index.wxml'];else __wxAppCode__['pages/mineset/index.wxml'] = $gwx_XC_37( './pages/mineset/index.wxml' );
	;__wxRoute = "pages/mineset/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/mineset/index.js";define("pages/mineset/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../utils/util"),t=require("../../utils/config");Page({data:{picBaseUrl:t.picBaseUrl},onLoad:function(e){},onShow:function(){this.loadData();var e=wx.getStorageSync("memberId");this.setData({memberId:e})},loadData:function(){var a=this;e.loading(),e.$http(t.getMemberInfo,{memberId:wx.getStorageSync("memberId")},"get").then((function(t){200==parseInt(t.code)&&(t.data?a.setData({memberInfo:t.data}):busUtilswx.showToast({title:t.msg})),e.hideLoading()})).catch((function(t){e.showToast(t.msg),e.hideLoading()}))},checkAgreement:function(){wx.navigateTo({url:"/pages/agreement/agreement"})},alterPhoneNum:function(){},logOut:function(){wx.clearStorage(),wx.navigateBack()}});
},{isPage:true,isComponent:true,currentFile:'pages/mineset/index.js'});require("pages/mineset/index.js");$gwx_XC_38=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_38 || [];
function gz$gwx_XC_38_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_38_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_38_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_38_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleFilterPopup'])
Z([3,'bottom'])
Z([[7],[3,'showFilter']])
Z([3,'筛选'])
Z([[7],[3,'showLogin']])
Z([3,'checkLogin'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_38_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_38_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_38=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_38=true;
var x=['./pages/orderList/orderList.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_38_1()
var aRI=_mz(z,'Popup',['bind:hidden',0,'position',1,'show',1,'title',2],[],e,s,gg)
_(r,aRI)
var lQI=_v()
_(r,lQI)
if(_oz(z,4,e,s,gg)){lQI.wxVkey=1
var tSI=_n('login-popup')
_rz(z,tSI,'bind:loginSuccess',5,e,s,gg)
_(lQI,tSI)
}
lQI.wxXCkey=1
lQI.wxXCkey=3
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_38";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_38();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/orderList/orderList.wxml'] = [$gwx_XC_38, './pages/orderList/orderList.wxml'];else __wxAppCode__['pages/orderList/orderList.wxml'] = $gwx_XC_38( './pages/orderList/orderList.wxml' );
	;__wxRoute = "pages/orderList/orderList";__wxRouteBegin = true;__wxAppCurrentFile__="pages/orderList/orderList.js";define("pages/orderList/orderList.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../@babel/runtime/helpers/objectSpread2"),a=e(require("../../utils/config")),r=e(require("../../utils/util")),i=require("../../utils/fetch"),n=require("../../utils/userInfo"),o=require("../../utils/typeSetting"),s=e(require("../../utils/manba")),d=!1,l=null,c={pageIndex:1,pageSize:10},u=[];Page({data:{appCode:"",memberId:"",openId:"",showLogin:!1,tabList:[{name:"待出行",orderStatus:1},{name:"待付款",orderStatus:2},{name:"全部订单",orderStatus:0}],tabIndex:2,orderList:[],filterList:[],selectFilterIndex:0,selectFilterIndexCopy:0,showFilter:!1,isFinished:!1},onLoad:function(e){},onShow:function(){var e=getApp().globalData.tabIndex;null!=e&&this.setData({tabIndex:e});var t=wx.getStorageSync("businessTypeList")||[],a=t.map((function(e){return e.businessType}));u=JSON.parse(JSON.stringify(a));var r=[{businessTypeName:"全部"}];r=r.concat(t),this.setData({filterList:r,businessTypes:a,selectFilterIndex:0,selectFilterIndexCopy:0}),this.checkLogin()},onHide:function(){this.cleanTimmer()},onReachBottom:function(){this.data.isFinished||this.queryOrderList(c.pageIndex)},onPullDownRefresh:function(){this.queryOrderList()},checkLogin:function(){var e=this,t=wx.getStorageSync("memberId");t?(0,n.getOpenid)().then((function(a){a.openId?(e.setData({showLogin:!1,appCode:a.appCode,openId:a.openId,memberId:t}),e.queryOrderList()):e.setData({showLogin:!0})})):this.setData({showLogin:!0})},queryOrderList:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(!d){d=!0,this.setData({isFinished:!1}),this.cleanTimmer(),r.default.loading(),c.pageIndex=n;var l=this.data,u=l.tabIndex,f=l.appCode,m=l.tabList,p=l.memberId,h=l.businessTypes,g=m[u],I=t({appCode:f,memberId:p,businessTypes:h,orderStatus:g.orderStatus},c);(0,i.fetch)({url:"".concat(a.default.urlPrefix,"/orderInfo/mylist"),method:"POST",data:I,complete:function(a){r.default.hideLoading(),d=!1;var i=a.data;if(i&&"200"===i.code&&i.data&&i.data.records){var l=i.data,u=l.records,f=l.pages,m=e.data.orderList,p=u.map((function(e){var a=e.orderDisplayStatus,r=(e.cancelSecond,e.bookTime),i=e.departureDateTime;return t(t({},e),{},{orderStatusName:o.orderStatusSetting[a],bookTimeFormat:r?(0,s.default)(r).format("MM-DD 周w HH:mm:ss"):"",departureDateFormat:i?(0,s.default)(i).format("MM-DD 周w HH:mm:ss"):"",leftSecondFormat:"0秒"})}));m=1===n?p:m.concat(p),e.setData({orderList:m}),c.pageIndex++,c.pageIndex>f&&e.setData({isFinished:!0}),e.calcLeftTime()}else r.default.alert(i.msg)}})}},handleSelectTab:function(e){var t=e.currentTarget.dataset.index;t!==this.data.tabIndex&&(this.setData({tabIndex:t}),this.queryOrderList())},handleFilterPopup:function(){this.setData({showFilter:!this.data.showFilter,selectFilterIndex:this.data.selectFilterIndexCopy})},selectFilter:function(e){var t=e.currentTarget.dataset.index;t!==this.data.selectFilterIndex&&this.setData({selectFilterIndex:t})},clearFilter:function(){this.setData({selectFilterIndexCopy:0}),0!==this.data.selectFilterIndex&&(this.setData({businessTypes:u,selectFilterIndex:0}),this.queryOrderList()),this.handleFilterPopup()},submitFilter:function(){var e=this.data,t=e.filterList,a=e.selectFilterIndex,r=t[a],i=0===a?u:[r.businessType];this.setData({selectFilterIndexCopy:a,businessTypes:i}),this.queryOrderList(),this.handleFilterPopup()},deleteOrder:function(e){var t=this,a=e.currentTarget.dataset.orderno;wx.showModal({title:"删除订单记录不等于取消预订",content:"删除后订单记录无法还原和查询确定删除吗？",cancelText:"删除订单",confirmText:"点错了",cancelColor:"#3D8FFF",confirmColor:"#3D8FFF",success:function(e){e.confirm?console.log("用户点击确定"):e.cancel&&t.deleteOrderApi(a)}})},deleteOrderApi:function(e){var t=this;r.default.loading();var n=this.data,o=n.openId,s=n.appCode,d=n.memberId;(0,i.fetch)({url:"".concat(a.default.urlPrefix,"/orderInfo/delete"),method:"POST",data:{appCode:s,memberId:d,openId:o,orderNo:e},complete:function(e){r.default.hideLoading();var a=e.data;a&&"200"===a.code?t.queryOrderList():r.default.alert(a&&a.msg||"删除失败，请稍后再试")}})},goHome:function(){wx.switchTab({url:"/pages/home/home"})},goOrderDetail:function(e){var t=e.currentTarget.dataset.item,a=0===t.businessType?"/pages/carline/orderDetail/orderDetail?orderNo=".concat(t.orderNo):"/pages/customline/orderDetail/orderDetail?orderNo=".concat(t.orderNo);wx.navigateTo({url:a})},getTime:function(){return new Promise((function(e,t){(0,i.fetch)({url:"".concat(a.default.urlPrefix,"/orderInfo/gettime"),method:"GET",complete:function(a){var r=a.data;r&&"200"===r.code&&r.data?e(r.data):t(r)}})}))},calcLeftTime:function(){var e=this;this.getTime().then((function(t){var a=t;!function(){var t=e.data.orderList.filter((function(e){var t=e.cancelSecond-((0,s.default)(a).time()-(0,s.default)(e.bookTime).time())/1e3;return 0===e.orderDisplayStatus&&t>=0}));if(t&&t.length){var i=e.data.orderList;i.forEach((function(t,n){if(0===t.orderDisplayStatus){var o=t.cancelSecond-((0,s.default)(a).time()-(0,s.default)(t.bookTime).time())/1e3;if(o>=0){var d=r.default.formatSeconds(o,!0);i[n].leftSecondFormat=d,e.setData({orderList:i})}}}))}}()}))},cancelOrderApi:function(e){var t=this,n=this.data,o=n.appCode,s=n.openId,d=n.memberId;(0,i.fetch)({url:"".concat(a.default.urlPrefix,"/customTraffic/order/cancelOrder"),method:"POST",data:{appCode:o,openId:s,orderNo:e,memberId:d},complete:function(e){var a=e.data;a&&"200"===a.code&&a.data?t.queryOrderList():r.default.alert(e.data.msg)}})},cleanTimmer:function(){l&&clearTimeout(l),l=null}});
},{isPage:true,isComponent:true,currentFile:'pages/orderList/orderList.js'});require("pages/orderList/orderList.js");$gwx_XC_39=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_39 || [];
function gz$gwx_XC_39_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_39_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'search-box'])
Z([[7],[3,'searchValue']])
Z([[7],[3,'isSearching']])
Z([3,'scroll-body'])
Z([[7],[3,'currentStationName']])
Z([[2,'&&'],[[7],[3,'historyList']],[[6],[[7],[3,'historyList']],[3,'length']]])
Z([3,'handleSelectHistory'])
Z([3,'city-item'])
Z([[7],[3,'historyList']])
Z([1,3])
Z([3,'name'])
Z([[2,'&&'],[[7],[3,'cityAndStationList']],[[6],[[7],[3,'cityAndStationList']],[3,'length']]])
Z([3,'list-right'])
Z([[2,'!=='],[[7],[3,'businessType']],[1,0]])
Z([3,'handleSelectStation'])
Z([3,'station-list'])
Z([3,'station-name'])
Z([[6],[[7],[3,'selectedCity']],[3,'stationList']])
Z([1,2])
Z([3,'stationName'])
Z([[7],[3,'isFinished']])
Z(z[2])
Z([[7],[3,'searchResultList']])
Z([3,'cityCode'])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'stationList']],[[6],[[6],[[7],[3,'item']],[3,'stationList']],[3,'length']]])
Z([3,'sindex'])
Z([3,'sitem'])
Z([[6],[[7],[3,'item']],[3,'stationList']])
Z([3,'stationCode'])
Z([3,'searchSelectStation'])
Z([3,'result-station-item'])
Z([[7],[3,'item']])
Z([[7],[3,'sitem']])
Z([[2,'==='],[[7],[3,'sindex']],[1,0]])
Z([3,'handleScroll'])
Z([3,'handleAlphabetSelect'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_39_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_39_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_39=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_39=true;
var x=['./pages/selectCity/selectCity.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_39_1()
var oVI=_n('view')
_rz(z,oVI,'class',0,e,s,gg)
var xWI=_v()
_(oVI,xWI)
if(_oz(z,1,e,s,gg)){xWI.wxVkey=1
}
var oXI=_v()
_(oVI,oXI)
if(_oz(z,2,e,s,gg)){oXI.wxVkey=1
}
xWI.wxXCkey=1
oXI.wxXCkey=1
_(r,oVI)
var fYI=_n('view')
_rz(z,fYI,'class',3,e,s,gg)
var cZI=_v()
_(fYI,cZI)
if(_oz(z,4,e,s,gg)){cZI.wxVkey=1
}
var h1I=_v()
_(fYI,h1I)
if(_oz(z,5,e,s,gg)){h1I.wxVkey=1
var c3I=_mz(z,'nine-list',['bind:click',6,'className',1,'list',2,'num',3,'prop',4],[],e,s,gg)
_(h1I,c3I)
}
var o2I=_v()
_(fYI,o2I)
if(_oz(z,11,e,s,gg)){o2I.wxVkey=1
var o4I=_n('view')
_rz(z,o4I,'class',12,e,s,gg)
var l5I=_v()
_(o4I,l5I)
if(_oz(z,13,e,s,gg)){l5I.wxVkey=1
}
var a6I=_mz(z,'nine-list',['bind:click',14,'class',1,'className',2,'list',3,'num',4,'prop',5],[],e,s,gg)
_(o4I,a6I)
l5I.wxXCkey=1
_(o2I,o4I)
}
else if(_oz(z,20,e,s,gg)){o2I.wxVkey=2
}
cZI.wxXCkey=1
h1I.wxXCkey=1
h1I.wxXCkey=3
o2I.wxXCkey=1
o2I.wxXCkey=3
_(r,fYI)
var bUI=_v()
_(r,bUI)
if(_oz(z,21,e,s,gg)){bUI.wxVkey=1
var t7I=_v()
_(bUI,t7I)
var e8I=function(o0I,b9I,xAJ,gg){
var fCJ=_v()
_(xAJ,fCJ)
if(_oz(z,24,o0I,b9I,gg)){fCJ.wxVkey=1
var cDJ=_v()
_(fCJ,cDJ)
var hEJ=function(cGJ,oFJ,oHJ,gg){
var aJJ=_mz(z,'view',['bind:tap',29,'class',1,'data-item',2,'data-sitem',3],[],cGJ,oFJ,gg)
var tKJ=_v()
_(aJJ,tKJ)
if(_oz(z,33,cGJ,oFJ,gg)){tKJ.wxVkey=1
}
tKJ.wxXCkey=1
_(oHJ,aJJ)
return oHJ
}
cDJ.wxXCkey=2
_2z(z,27,hEJ,o0I,b9I,gg,cDJ,'sitem','sindex','stationCode')
}
fCJ.wxXCkey=1
return xAJ
}
t7I.wxXCkey=2
_2z(z,22,e8I,e,s,gg,t7I,'item','index','cityCode')
}
else{bUI.wxVkey=2
var eLJ=_mz(z,'city-alphabet',['bind:scroll',34,'bind:select',1],[],e,s,gg)
_(bUI,eLJ)
}
bUI.wxXCkey=1
bUI.wxXCkey=3
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_39";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_39();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/selectCity/selectCity.wxml'] = [$gwx_XC_39, './pages/selectCity/selectCity.wxml'];else __wxAppCode__['pages/selectCity/selectCity.wxml'] = $gwx_XC_39( './pages/selectCity/selectCity.wxml' );
	;__wxRoute = "pages/selectCity/selectCity";__wxRouteBegin = true;__wxAppCurrentFile__="pages/selectCity/selectCity.js";define("pages/selectCity/selectCity.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault"),i=t(require("../../utils/config")),a=t(require("../../utils/util")),e=require("../../utils/fetch"),s=require("../../utils/appInfo"),n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","#"],o=!1,r="historyList",c="startStation",d="endStation";Page({data:{isFinished:!1,appCode:"",businessType:0,isStart:!0,currentStation:{},currentStationName:"",startStation:null,endStation:null,isSearching:!1,historyList:[],cityList:[],scrollIntoView:"",searchValue:"",searchResultList:[],cityAndStationList:[],selectedCity:{}},onLoad:function(t){var i,a,e,n=this,o=0,u=!0,y={};void 0!==t.businessType&&(o=Number(t.businessType)),void 0!==t.isStart&&(u=1===Number(t.isStart)),0===o?(c="startStation",d="endStation",r="historyList"):(r="historyListCustom",c="startStationCustom",d="endStationCustom"),a=wx.getStorageSync(c)||null,e=wx.getStorageSync(d)||null,i=(y=u?a:e)&&(y.stationName||y.cityName)||"",this.setData({businessType:o,isStart:u,currentStation:y,currentStationName:i,startStation:a,endStation:e}),(0,s.getAppInfo)().then((function(t){n.setData({appCode:t.code}),0===o?u?n.getStartCityAndStationList():n.getEndCityAndStationList():u?n.getStartCityAndStationListCustom():n.getEndCityAndStationListCustom()}))},onShow:function(){var t=0===this.data.businessType?wx.getStorageSync("historyList"):wx.getStorageSync("historyListCustom");this.setData({historyList:t||[]})},getStartCityAndStationList:function(){var t=this;if(!o){o=!0;var s=this.data.appCode;(0,e.fetch)({url:"".concat(i.default.urlPrefix,"/stationTraffic/resource/getStartCityAndStationList"),method:"POST",data:{appCode:s},complete:function(i){o=!1,t.setData({isFinished:!0});var e=i.data;e&&"200"===e.code&&!a.default.isEmpty(e.data)&&(t.setData({cityList:e.data}),t.formatCityList(e.data,!0))}})}},getEndCityAndStationList:function(){var t=this;if(!o){o=!0;var s=this.data,n=s.appCode,r=s.startStation,c=r?{appCode:n,startCityCode:r&&r.cityCode||"",startStationCode:r&&r.stationCode||""}:{appCode:n};(0,e.fetch)({url:"".concat(i.default.urlPrefix,"/stationTraffic/resource/getEndCityAndStationList"),method:"POST",data:c,complete:function(i){o=!1,t.setData({isFinished:!0});var e=i.data;e&&"200"===e.code&&!a.default.isEmpty(e.data)&&(t.setData({cityList:e.data}),t.formatCityList(e.data,!0))}})}},getStartCityAndStationListCustom:function(){var t=this;if(!o){o=!0;var s=this.data,n=s.appCode,r=s.businessType;(0,e.fetch)({url:"".concat(i.default.urlPrefix,"/customTraffic/resource/getStartCityAndStationList"),method:"POST",data:{appCode:n,businessType:r},complete:function(i){o=!1,t.setData({isFinished:!0});var e=i.data;e&&"200"===e.code&&!a.default.isEmpty(e.data)&&(t.setData({cityList:e.data}),t.formatCityList(e.data,!0))}})}},getEndCityAndStationListCustom:function(){var t=this;if(!o){o=!0;var s=this.data,n=s.appCode,r=s.businessType,c=s.startStation;(0,e.fetch)({url:"".concat(i.default.urlPrefix,"/customTraffic/resource/getEndCityAndStationList"),method:"POST",data:{appCode:n,businessType:r,startCityCode:c&&c.cityCode||"",startStationCode:c&&c.stationCode||""},complete:function(i){o=!1,t.setData({isFinished:!0});var e=i.data;e&&"200"===e.code&&!a.default.isEmpty(e.data)&&(t.setData({cityList:e.data}),t.formatCityList(e.data,!0))}})}},formatCityList:function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=[],e={};n.forEach((function(i){var e=t.filter((function(t){return t.cityNamePinYin&&t.cityNamePinYin.substring(0,1).toUpperCase()===i}));e&&e.length&&a.push({alphabet:i,list:e})}));var s=t.filter((function(t){return!t.cityNamePinYin||!/^[a-zA-Z\d]+$/.test(t.cityNamePinYin)}));a.push({alphabet:"#",list:s}),i&&a.length&&((e=a[0].list[0]).selected=!0,this.setData({selectedCity:e})),this.setData({cityAndStationList:a})},handleSearchCancel:function(){this.setData({isSearching:!1,searchValue:""})},handleSearchClear:function(){this.setData({searchValue:"",searchResultList:[]})},bindInputSearch:function(t){var i=t.detail.value;if(this.setData({searchValue:i}),i){var a=[];if(/^[a-zA-Z\d]+$/.test(i)){var e=i.toUpperCase();a=this.data.cityList.filter((function(t){return t.cityNamePinYin&&t.cityNamePinYin.toUpperCase().indexOf(e)>-1}))}else a=this.data.cityList.filter((function(t){return t.cityName&&t.cityName.indexOf(i)>-1}));console.log(this.data.cityList,"searchResultList"),this.setData({searchResultList:a,isSearching:!0})}},handleAlphabetSelect:function(t){var i=t.detail;this.setData({scrollIntoView:"item-"+i})},handleScroll:function(t){var i=t.detail;this.setData({scrollIntoView:i})},handleSelectCity:function(t){var i=t.currentTarget.dataset,a=i.alphabetindex,e=i.cityindex,s=i.cityitem,n=this.data.cityAndStationList;n.forEach((function(t){t.list.forEach((function(t){return t.selected=!1}))})),n[a].list[e].selected=!0,this.setData({selectedCity:s,cityAndStationList:n})},handleSelectStation:function(t){var i=t.detail,a=this.data.selectedCity,e={cityCode:a.cityCode,cityName:a.cityName,stationCode:i.stationCode,stationName:i.stationName,name:i.stationName||a.cityName||""};this.setStationStorage(e)},handleSelectStationAll:function(){if(0!==this.data.businessType){var t=this.data.selectedCity,i={cityCode:t.cityCode,cityName:t.cityName,name:t.cityName||""};this.setStationStorage(i)}},searchSelectCity:function(t){var i=t.currentTarget.dataset.item,a={cityCode:i.cityCode,cityName:i.cityName,name:i.cityName||""};this.setStationStorage(a)},searchSelectStation:function(t){var i=t.currentTarget.dataset,a=i.item,e=i.sitem,s={cityCode:a.cityCode,cityName:a.cityName,stationCode:e.stationCode,stationName:e.stationName,name:e.stationName||a.cityName||""};this.setStationStorage(s)},setStationStorage:function(t){this.data.isStart?wx.setStorageSync(c,t):wx.setStorageSync(d,t),this.setHistoryList(t),wx.switchTab({url:"/pages/home/home"})},setHistoryList:function(t){var i=this.data.historyList,a=i.findIndex((function(i){return i.name===t.name}));-1===a?(i.unshift(t),i.length>6&&i.splice(6)):i.unshift(i.splice(a,1)[0]),wx.setStorageSync(r,i)},handleSelectHistory:function(t){var i=t.detail,a=i.stationCode||i.stationName?{cityCode:i.cityCode,cityName:i.cityName,stationCode:i.stationCode,stationName:i.stationName,name:i.name}:{cityCode:i.cityCode,cityName:i.cityName,name:i.name};this.setStationStorage(a)},clearHistory:function(){this.setData({historyList:[]}),wx.setStorageSync(r,[])},goHome:function(){wx.switchTab({url:"/pages/home/home"})}});
},{isPage:true,isComponent:true,currentFile:'pages/selectCity/selectCity.js'});require("pages/selectCity/selectCity.js");$gwx_XC_40=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_40 || [];
function gz$gwx_XC_40_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_40_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_40_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_40_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'canHtml']],[[7],[3,'canUInfo']]])
Z([[7],[3,'src']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_40_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_40_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_40=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_40=true;
var x=['./pages/webview/webview.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_40_1()
var oNJ=_v()
_(r,oNJ)
if(_oz(z,0,e,s,gg)){oNJ.wxVkey=1
var xOJ=_v()
_(oNJ,xOJ)
if(_oz(z,1,e,s,gg)){xOJ.wxVkey=1
}
xOJ.wxXCkey=1
}
else{oNJ.wxVkey=2
}
oNJ.wxXCkey=1
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_40";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_40();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/webview/webview.wxml'] = [$gwx_XC_40, './pages/webview/webview.wxml'];else __wxAppCode__['pages/webview/webview.wxml'] = $gwx_XC_40( './pages/webview/webview.wxml' );
	;__wxRoute = "pages/webview/webview";__wxRouteBegin = true;__wxAppCurrentFile__="pages/webview/webview.js";define("pages/webview/webview.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),a=e(require("../../@babel/runtime/regenerator")),n=require("../../@babel/runtime/helpers/asyncToGenerator"),t=e(require("../../utils/config")),r=require("../../utils/userInfo"),i=require("../../utils/util"),o=getApp();Page({data:{src:"",oriSrc:"",canUInfo:wx.canIUse&&wx.canIUse("button.open-type.getUserInfo"),canHtml:wx.canIUse&&wx.canIUse("web-view"),needwrap:0,neednick:0,showBack:!1,noLocalUserInfo:!1,oid:"",uid:"",nick:"",avatar:""},wxrefid:"",src:"",shareInfo:[],opts:{},onLoad:function(e){var t=this;console.log(e),1!=e.needwrap&&(e.needwrap=2),this.opts=e,2==e.needwrap?r.getOpenid().then(function(){var r=n(a.default.mark((function n(r){return a.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log("webview getUnionIdCb success:",r),r.openId&&t.setData({oid:r.openId}),t.processOptions(e);case 3:case"end":return a.stop()}}),n)})));return function(e){return r.apply(this,arguments)}}(),(function(e){console.log("webview getUnionIdCb err:",e),i.alert(e.header.errMsg||"未获取到用户信息")})):this.processOptions(e),o.comWebSetH5Data=this.setH5Data},processOptions:function(e){var a=this;if(e.scene){var n=decodeURIComponent(e.scene);if(1==i.getParams("p",n)){var r="https://wx.".concat(1!=t.default.env?"t.":"","17u.cn/groundtrafficAct/virusrgter/#/");e.src=decodeURIComponent("".concat(r,"?vcode=").concat(i.getParams("v",n),"&codeId=").concat(i.getParams("c",n)))}}var c=e.neednick?this.fnGetUserNick():Promise.resolve("do_not_need_userinfo");Promise.all([Promise.resolve(e),c]).then((function(e){var n=e[0],t=e[1],r=a.data.oid,c=a.data.uid,s="",d="",p=0,l=0,h=encodeURIComponent;if(n.neednick&&(t.nickName?a.setData({nick:t.nickName,avatar:t.avatarUrl||"https://file.40017.cn/touchweixinqq/wxapp/img/bargain/icon_default.png"}):(i.alert("未获取到用户信息"),a.setData({nick:"匿名用户",avatar:"https://file.40017.cn/touchweixinqq/wxapp/img/bargain/icon_default.png"}))),n.src&&(d=s=decodeURIComponent(n.src||"").replace(/(^\s*)|(\s*$)/g,"")),1==n.hideShare&&wx.hideShareMenu&&wx.hideShareMenu(),1==n.showBack&&(l=1),n.needwrap&&1==n.needwrap&&(p=1,s="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3827070276e49e30&redirect_uri=https%3a%2f%2fwx.17u.cn%2fwxinfo%2fWxMember%2fRedirectBind%3furl%3d".concat(h(h(s)),"%26refid%3d").concat(o.globalData.wxrefid,"%26hasCode%3dfalse%26wxAppScene%3d").concat(o.globalData.scene,"%26setMember%3dtrue&response_type=code&scope=snsapi_base&state=123#wechat_redirect")),n.needwrap&&2==n.needwrap){p=2;var u=s.split("#/");if((u=u.filter((function(e){return e.length}))).length){var f,w=u[0].indexOf("?"),g=w>=0;g&&w==u[0].length-1&&(g=!1,u[0]=u[0].substr(0,w)),u[0]=function e(a){return"/"==a[a.length-1]&&(a=a.substr(0,a.length-1)),"/"==a[a.length-1]?e(a):a}(u[0]),f=g?"&":"/?",n.neednick?u[0]="".concat(u[0]).concat(f,"oid=").concat(r,"&uid=").concat(c,"&nick=").concat(h(a.data.nick),"&avatar=").concat(a.data.avatar):u[0]="".concat(u[0]).concat(f,"oid=").concat(r,"&uid=").concat(c)}s=u.join("#/")}a.setData({src:s,oriSrc:d,needwrap:p,neednick:n.neednick||0,showBack:l}),a.wxrefid=n.wxrefid||"",a.src=n.src||""}))},fnGetUserNick:function(){},bdMessage:function(e){console.log("bus webview bindmessage ============>",e);var a=e.detail.data;if(!i.isEmpty(a)){a.forEach((function(e){i.isRealNum(e.indexNavTab)&&(o.globalData.indexNavTab=e.indexNavTab),i.isEmpty(e.WxOpenId)||(o.globalData.WxOpenId=e.WxOpenId,wx.setStorageSync("WxOpenId",e.WxOpenId))}));var n=a.filter((function(e){return e.interact}));n.length&&wx.setStorageSync("bus_webInteractData",n[0]),this.shareInfo=a.filter((function(e){return e.shareInfo&&e.shareInfo.currentPath}))}},bdError:function(e){},setH5Data:function(e){this.miniappData=encodeURIComponent(JSON.stringify({data:e.data,v:Date.now()})),this.backUrl=e.backUrl?decodeURIComponent(e.backUrl):this.baseUrl},onShow:function(){if(this.miniappData){var e="";if(this.backUrl.indexOf("#")>-1){var a=this.backUrl.split("#");e=a[0]+"#"+a[1]+(a[1].indexOf("?")>-1?"&":"?")+"_miniappData=".concat(this.miniappData),this.miniappData=null}else{var n=this.backUrl;e=n+(n.indexOf("?")>-1?"&":"?")+"_miniappData=".concat(this.miniappData),this.miniappData=null}this.setData({src:e})}},onShareAppMessage:function(e){console.log("bus webview onShareAppMessage ============>",e);var a=this.shareInfo.filter((function(a){return e.webViewUrl.replace("https://","").split("?")[0].split("#")[0]==(a.shareInfo||{}).currentPath})),n="",t="/pages/webview/webview?";if(2==this.data.needwrap?(t+="needwrap=".concat(this.data.needwrap,"&"),e.webViewUrl=this.data.oriSrc,n=this.data.oriSrc):n=this.data.src,this.data.neednick&&(t+="neednick=1&"),a.length){a=a[a.length-1].shareInfo;var r="".concat(t,"src=")+encodeURIComponent(a.path||e.webViewUrl||n);return(this.data.showBack||a.showBack)&&(r="/pages/index/index?shareUrl="+encodeURIComponent("".concat(t,"showBack=1&src=")+encodeURIComponent(a.path||e.webViewUrl||n))),console.log("path",r),{path:r,title:a.title||"",imageUrl:a.imageUrl||""}}var i="".concat(t,"src=")+encodeURIComponent(e.webViewUrl||n);return this.data.showBack&&(i="/pages/index/index?shareUrl="+encodeURIComponent("".concat(t,"src=")+encodeURIComponent(e.webViewUrl||n))),console.log("path",i),{path:i}}});
},{isPage:true,isComponent:true,currentFile:'pages/webview/webview.js'});require("pages/webview/webview.js");
