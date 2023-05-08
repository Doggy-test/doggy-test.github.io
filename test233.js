var __wxAppData=__wxAppData||{};var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};if(this&&this.__g===undefined)Object.defineProperty(this,"__g",{configurable:false,enumerable:false,writable:false,value:function(){function D(e,t){if(typeof t!="undefined")e.children.push(t)}function S(e){if(typeof e!="undefined")return{tag:"virtual",wxKey:e,children:[]};return{tag:"virtual",children:[]}}function v(e){$gwxc++;if($gwxc>=16e3){throw"Dom limit exceeded, please check if there's any mistake you've made."}return{tag:"wx-"+e,attr:{},children:[],n:[],raw:{},generics:{}}}function e(e,t){t&&e.properities.push(t)}function t(e,t,r){return typeof e[r]!="undefined"?e[r]:t[r]}function u(e){console.warn("WXMLRT_"+g+":"+e)}function r(e,t){u(t+":-1:-1:-1: Template `"+e+"` is being called recursively, will be stop.")}var s=console.warn;var n=console.log;function o(){function e(){}e.prototype={hn:function(e,t){if(typeof e=="object"){var r=0;var n=false,o=false;for(var a in e){n=n|a==="__value__";o=o|a==="__wxspec__";r++;if(r>2)break}return r==2&&n&&o&&(t||e.__wxspec__!=="m"||this.hn(e.__value__)==="h")?"h":"n"}return"n"},nh:function(e,t){return{__value__:e,__wxspec__:t?t:true}},rv:function(e){return this.hn(e,true)==="n"?e:this.rv(e.__value__)},hm:function(e){if(typeof e=="object"){var t=0;var r=false,n=false;for(var o in e){r=r|o==="__value__";n=n|o==="__wxspec__";t++;if(t>2)break}return t==2&&r&&n&&(e.__wxspec__==="m"||this.hm(e.__value__))}return false}};return new e}var A=o();function T(e){var t=e.split("\n "+" "+" "+" ");for(var r=0;r<t.length;++r){if(0==r)continue;if(")"===t[r][t[r].length-1])t[r]=t[r].replace(/\s\(.*\)$/,"");else t[r]="at anonymous function"}return t.join("\n "+" "+" "+" ")}function a(M){function m(e,t,r,n,o){var a=false;var i=e[0][1];var p,u,l,f,v,c;switch(i){case"?:":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):x(e[3],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"&&":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):A.rv(p);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"||":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?A.rv(p):x(e[2],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"+":case"*":case"/":case"%":case"|":case"^":case"&":case"===":case"==":case"!=":case"!==":case">=":case"<=":case">":case"<":case"<<":case">>":p=x(e[1],t,r,n,o,a);u=x(e[2],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");switch(i){case"+":f=A.rv(p)+A.rv(u);break;case"*":f=A.rv(p)*A.rv(u);break;case"/":f=A.rv(p)/A.rv(u);break;case"%":f=A.rv(p)%A.rv(u);break;case"|":f=A.rv(p)|A.rv(u);break;case"^":f=A.rv(p)^A.rv(u);break;case"&":f=A.rv(p)&A.rv(u);break;case"===":f=A.rv(p)===A.rv(u);break;case"==":f=A.rv(p)==A.rv(u);break;case"!=":f=A.rv(p)!=A.rv(u);break;case"!==":f=A.rv(p)!==A.rv(u);break;case">=":f=A.rv(p)>=A.rv(u);break;case"<=":f=A.rv(p)<=A.rv(u);break;case">":f=A.rv(p)>A.rv(u);break;case"<":f=A.rv(p)<A.rv(u);break;case"<<":f=A.rv(p)<<A.rv(u);break;case">>":f=A.rv(p)>>A.rv(u);break;default:break}return l?A.nh(f,"c"):f;break;case"-":p=e.length===3?x(e[1],t,r,n,o,a):0;u=e.length===3?x(e[2],t,r,n,o,a):x(e[1],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");f=l?A.rv(p)-A.rv(u):p-u;return l?A.nh(f,"c"):f;break;case"!":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=!A.rv(p);return l?A.nh(f,"c"):f;case"~":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=~A.rv(p);return l?A.nh(f,"c"):f;default:s("unrecognized op"+i)}}function x(e,t,r,n,o,a){var i=e[0];var p=false;if(typeof a!=="undefined")o.ap=a;if(typeof i==="object"){var u=i[0];var l,f,v,c,s,y,b,d,h,_,g;switch(u){case 2:return m(e,t,r,n,o);break;case 4:return x(e[1],t,r,n,o,p);break;case 5:switch(e.length){case 2:l=x(e[1],t,r,n,o,p);return M?[l]:[A.rv(l)];return[l];break;case 1:return[];break;default:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);l.push(M?v:A.rv(v));return l;break}break;case 6:l=x(e[1],t,r,n,o);var w=o.ap;h=A.hn(l)==="h";f=h?A.rv(l):l;o.is_affected|=h;if(M){if(f===null||typeof f==="undefined"){return h?A.nh(undefined,"e"):undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return h||_?A.nh(undefined,"e"):undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return h||_?g?y:A.nh(y,"e"):y}else{if(f===null||typeof f==="undefined"){return undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return g?A.rv(y):y}case 7:switch(e[1][0]){case 11:o.is_affected|=A.hn(n)==="h";return n;case 3:b=A.rv(r);d=A.rv(t);v=e[1][1];if(n&&n.f&&n.f.hasOwnProperty(v)){l=n.f;o.ap=true}else{l=b&&b.hasOwnProperty(v)?r:d&&d.hasOwnProperty(v)?t:undefined}if(M){if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;y=h&&!g?A.nh(y,"e"):y;return y}}else{if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;return A.rv(y)}}return undefined}break;case 8:l={};l[e[1]]=x(e[2],t,r,n,o,p);return l;break;case 9:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);function O(e,t,r){var n,o;h=A.hn(e)==="h";_=A.hn(t)==="h";f=A.rv(e);c=A.rv(t);for(var a in c){if(r||!f.hasOwnProperty(a)){f[a]=M?_?A.nh(c[a],"e"):c[a]:A.rv(c[a])}}return e}var s=l;var j=true;if(typeof e[1][0]==="object"&&e[1][0][0]===10){l=v;v=s;j=false}if(typeof e[1][0]==="object"&&e[1][0][0]===10){var P={};return O(O(P,l,j),v,j)}else return O(l,v,j);break;case 10:l=x(e[1],t,r,n,o,p);l=M?l:A.rv(l);return l;break;case 12:var P;l=x(e[1],t,r,n,o);if(!o.ap){return M&&A.hn(l)==="h"?A.nh(P,"f"):P}var w=o.ap;v=x(e[2],t,r,n,o,p);o.ap=w;h=A.hn(l)==="h";_=N(v);f=A.rv(l);c=A.rv(v);snap_bb=K(c,"nv_");try{P=typeof f==="function"?K(f.apply(null,snap_bb)):undefined}catch(t){t.message=t.message.replace(/nv_/g,"");t.stack=t.stack.substring(0,t.stack.indexOf("\n",t.stack.lastIndexOf("at nv_")));t.stack=t.stack.replace(/\snv_/g," ");t.stack=T(t.stack);if(n.debugInfo){t.stack+="\n "+" "+" "+" at "+n.debugInfo[0]+":"+n.debugInfo[1]+":"+n.debugInfo[2];console.error(t)}P=undefined}return M&&(_||h)?A.nh(P,"f"):P}}else{if(i===3||i===1)return e[1];else if(i===11){var l="";for(var D=1;D<e.length;D++){var S=A.rv(x(e[D],t,r,n,o,p));l+=typeof S==="undefined"?"":S}return l}}}function e(e,t,r,n,o,a){if(e[0]=="11182016"){n.debugInfo=e[2];return x(e[1],t,r,n,o,a)}else{n.debugInfo=null;return x(e,t,r,n,o,a)}}return e}var f=a(true);var c=a(false);function i(e,t,r,n,o,a,i,p){{var u={is_affected:false};var l=f(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(a)||u.is_affected!=p){console.warn("A. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(a)+", "+p+" is expected")}}{var u={is_affected:false};var l=c(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(i)||u.is_affected!=p){console.warn("B. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(i)+", "+p+" is expected")}}}function y(e,t,r,n,o,a,i,p,u){var l=A.hn(e)==="n";var f=A.rv(n);var v=f.hasOwnProperty(i);var c=f.hasOwnProperty(p);var s=f[i];var y=f[p];var b=Object.prototype.toString.call(A.rv(e));var d=b[8];if(d==="N"&&b[10]==="l")d="X";var h;if(l){if(d==="A"){var _;for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");_=A.rv(e[g]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;var _;for(var O in e){f[i]=e[O];f[p]=l?O:A.nh(O,"h");_=A.rv(e[O]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<e;g++){f[i]=g;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}else{var j=A.rv(e);var _,P;if(d==="A"){for(var g=0;g<j.length;g++){P=j[g];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?g:A.nh(g,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;for(var O in j){P=j[O];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?O:A.nh(O,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<j.length;g++){P=A.nh(j[g],"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<j;g++){P=A.nh(g,"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}if(v){f[i]=s}else{delete f[i]}if(c){f[p]=y}else{delete f[p]}}function N(e){if(A.hn(e)=="h")return true;if(typeof e!=="object")return false;for(var t in e){if(e.hasOwnProperty(t)){if(N(e[t]))return true}}return false}function b(e,t,r,n,o){var a=false;var i=K(n,"",2);if(o.ap&&i&&i.constructor===Function){t="$wxs:"+t;e.attr["$gdc"]=K}if(o.is_affected||N(n)){e.n.push(t);e.raw[t]=n}e.attr[t]=i}function d(e,t,r,n,o,a){a.opindex=r;var i={},p;var u=c(z[r],n,o,a,i);b(e,t,r,u,i)}function h(e,t,r,n,o,a,i){i.opindex=n;var p={},u;var l=c(e[n],o,a,i,p);b(t,r,n,l,p)}function p(e,t,r,n){n.opindex=e;var o={};var a=c(z[e],t,r,n,o);return a&&a.constructor===Function?undefined:a}function l(e,t,r,n,o){o.opindex=t;var a={};var i=c(e[t],r,n,o,a);return i&&i.constructor===Function?undefined:i}function _(e,t,r,n,o){var o=o||{};n.opindex=e;return f(z[e],t,r,n,o)}function w(e,t,r,n,o,a){var a=a||{};o.opindex=t;return f(e[t],r,n,o,a)}function O(e,t,r,n,o,a,i,p,u){var l={};var f=_(e,r,n,o);y(f,t,r,n,o,a,i,p,u)}function j(e,t,r,n,o,a,i,p,u,l){var f={};var v=w(e,t,n,o,a);y(v,r,n,o,a,i,p,u,l)}function P(e,t,r,n,o,a){var i=v(e);var p=0;for(var u=0;u<t.length;u+=2){if(p+t[u+1]<0){i.attr[t[u]]=true}else{d(i,t[u],p+t[u+1],n,o,a);if(p===0)p=t[u+1]}}for(var u=0;u<r.length;u+=2){if(p+r[u+1]<0){i.generics[r[u]]=""}else{var l=c(z[p+r[u+1]],n,o,a);if(l!="")l="wx-"+l;i.generics[r[u]]=l;if(p===0)p=r[u+1]}}return i}function M(e,t,r,n,o,a,i){var p=v(t);var u=0;for(var l=0;l<r.length;l+=2){if(u+r[l+1]<0){p.attr[r[l]]=true}else{h(e,p,r[l],u+r[l+1],o,a,i);if(u===0)u=r[l+1]}}for(var l=0;l<n.length;l+=2){if(u+n[l+1]<0){p.generics[n[l]]=""}else{var f=c(e[u+n[l+1]],o,a,i);if(f!="")f="wx-"+f;p.generics[n[l]]=f;if(u===0)u=n[l+1]}}return p}var m=function(){if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){x();C();k();U();I();L();E();R();F()}if(typeof __WXML_GLOBAL__!=="undefined")__WXML_GLOBAL__.wxs_nf_init=true};var x=function(){Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"});Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return"[object Object]"}})};var C=function(){Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"});Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length},set:function(){}});Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return"[function Function]"}})};var k=function(){Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join()}});Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(e){e=undefined==e?",":e;var t="";for(var r=0;r<this.length;++r){if(0!=r)t+=e;if(null==this[r]||undefined==this[r])t+="";else if(typeof this[r]=="function")t+=this[r].nv_toString();else if(typeof this[r]=="object"&&this[r].nv_constructor==="Array")t+=this[r].nv_join();else t+=this[r].toString()}return t}});Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"});Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat});Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop});Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push});Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse});Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift});Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice});Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort});Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice});Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift});Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf});Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf});Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every});Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some});Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach});Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map});Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter});Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce});Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight});Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var U=function(){Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"});Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString});Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf});Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt});Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt});Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat});Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf});Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf});Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare});Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match});Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace});Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search});Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice});Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split});Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring});Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase});Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase});Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase});Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase});Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim});Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var I=function(){Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"});Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString});Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})};var L=function(){Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE});Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE});Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY});Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY});Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"});Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString});Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString});Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf});Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed});Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential});Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})};var E=function(){Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E});Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10});Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2});Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E});Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E});Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI});Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2});Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2});Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs});Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos});Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin});Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan});Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2});Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil});Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos});Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp});Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor});Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log});Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max});Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min});Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow});Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random});Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round});Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin});Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt});Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})};var R=function(){Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"});Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse});Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC});Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now});Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString});Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString});Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString});Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString});Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString});Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString});Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf});Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime});Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear});Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear});Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth});Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth});Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate});Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate});Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay});Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay});Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours});Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours});Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes});Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes});Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds});Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds});Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds});Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset});Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime});Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds});Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds});Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds});Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes});Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes});Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours});Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours});Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate});Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate});Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth});Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth});Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear});Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear});Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString});Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString});Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})};var F=function(){Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"});Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec});Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test});Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString});Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex},set:function(e){this.lastIndex=e}})};m();var J=function(){var e=Array.prototype.slice.call(arguments);e.unshift(Date);return new(Function.prototype.bind.apply(Date,e))};var B=function(){var e=Array.prototype.slice.call(arguments);e.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp,e))};var Y={};Y.nv_log=function(){var e="WXSRT:";for(var t=0;t<arguments.length;++t)e+=arguments[t]+" ";console.log(e)};var G=parseInt,X=parseFloat,H=isNaN,V=isFinite,$=decodeURI,W=decodeURIComponent,Q=encodeURI,q=encodeURIComponent;function K(e,t,r){e=A.rv(e);if(e===null||e===undefined)return e;if(typeof e==="string"||typeof e==="boolean"||typeof e==="number")return e;if(e.constructor===Object){var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o))if(undefined===t)n[o.substring(3)]=K(e[o],t,r);else n[t+o]=K(e[o],t,r);return n}if(e.constructor===Array){var n=[];for(var a=0;a<e.length;a++)n.push(K(e[a],t,r));return n}if(e.constructor===Date){var n=new Date;n.setTime(e.getTime());return n}if(e.constructor===RegExp){var i="";if(e.global)i+="g";if(e.ignoreCase)i+="i";if(e.multiline)i+="m";return new RegExp(e.source,i)}if(r&&typeof e==="function"){if(r==1)return K(e(),undefined,2);if(r==2)return e}return null}var Z={};Z.nv_stringify=function(e){JSON.stringify(e);return JSON.stringify(K(e))};Z.nv_parse=function(e){if(e===undefined)return undefined;var t=JSON.parse(e);return K(t,"nv_")};function ee(e,t,r,n){e.extraAttr={t_action:t,t_rawid:r};if(typeof n!="undefined")e.extraAttr.t_cid=n}function te(){if(typeof __globalThis.__webview_engine_version__=="undefined")return 0;return __globalThis.__webview_engine_version__}function re(e,t,r,n,o,a){var i=ne(t,r,n);if(i)e.push(i);else{e.push("");u(n+":import:"+o+":"+a+": Path `"+t+"` not found from `"+n+"`.")}}function ne(e,t,r){if(e[0]!="/"){var n=r.split("/");n.pop();var o=e.split("/");for(var a=0;a<o.length;a++){if(o[a]=="..")n.pop();else if(!o[a]||o[a]==".")continue;else n.push(o[a])}e=n.join("/")}if(r[0]=="."&&e[0]=="/")e="."+e;if(t[e])return e;if(t[e+".wxml"])return e+".wxml"}function oe(e,t,r,n){if(!t)return;if(n[e][t])return n[e][t];for(var o=r[e].i.length-1;o>=0;o--){if(r[e].i[o]&&n[r[e].i[o]][t])return n[r[e].i[o]][t]}for(var o=r[e].ti.length-1;o>=0;o--){var a=ne(r[e].ti[o],r,e);if(a&&n[a][t])return n[a][t]}var i=ae(r,e);for(var o=0;o<i.length;o++){if(i[o]&&n[i[o]][t])return n[i[o]][t]}for(var p=r[e].j.length-1;p>=0;p--)if(r[e].j[p]){for(var a=r[r[e].j[p]].ti.length-1;a>=0;a--){var u=ne(r[r[e].j[p]].ti[a],r,e);if(u&&n[u][t]){return n[u][t]}}}}function ae(e,t){if(!t)return[];if($gaic[t]){return $gaic[t]}var r=[],n=[],o=0,a=0,i={},p={};n.push(t);p[t]=true;a++;while(o<a){var u=n[o++];for(var l=0;l<e[u].ic.length;l++){var f=e[u].ic[l];var v=ne(f,e,u);if(v&&!p[v]){p[v]=true;n.push(v);a++}}for(var l=0;u!=t&&l<e[u].ti.length;l++){var c=e[u].ti[l];var s=ne(c,e,u);if(s&&!i[s]){i[s]=true;r.push(s)}}}$gaic[t]=r;return r}var ie={};function pe(e,t,r,n,o,a,i){var p=ne(e,t,r);t[r].j.push(p);if(p){if(ie[p]){u("-1:include:-1:-1: `"+e+"` is being included in a loop, will be stop.");return}ie[p]=true;try{t[p].f(n,o,a,i)}catch(n){}ie[p]=false}else{u(r+":include:-1:-1: Included path `"+e+"` not found from `"+r+"`.")}}function ue(e,t,r,n){u(t+":template:"+r+":"+n+": Template `"+e+"` not found.")}function le(e){var t=false;delete e.properities;delete e.n;if(e.children){do{t=false;var r=[];for(var n=0;n<e.children.length;n++){var o=e.children[n];if(o.tag=="virtual"){t=true;for(var a=0;o.children&&a<o.children.length;a++){r.push(o.children[a])}}else{r.push(o)}}e.children=r}while(t);for(var n=0;n<e.children.length;n++){le(e.children[n])}}return e}function fe(e){if(e.tag=="wx-wx-scope"){e.tag="virtual";e.wxCkey="11";e["wxScopeData"]=e.attr["wx:scope-data"];delete e.n;delete e.raw;delete e.generics;delete e.attr}for(var t=0;e.children&&t<e.children.length;t++){fe(e.children[t])}return e}return{a:D,b:S,c:v,d:e,e:t,f:u,g:r,h:s,i:n,j:o,k:A,l:T,m:a,n:f,o:c,p:i,q:y,r:N,s:b,t:d,u:h,v:p,w:l,x:_,y:w,z:O,A:j,B:P,C:M,D:J,E:B,F:Y,G:G,H:X,I:H,J:V,K:$,L:W,M:Q,N:q,O:K,P:Z,Q:ee,R:te,S:re,T:ne,U:oe,V:ae,W:ie,X:pe,Y:ue,Z:le,aa:fe}}()});Object.freeze(__g);g="";	__wxAppCode__['pages/beckonCar/index.json'] = {"navigationBarBackgroundColor":"#fff","backgroundColor":"#f0f0f4","navigationStyle":"custom","usingComponents":{"backon-car":"./module/index","custom-header":"../../useCar/component/customHeader/customHeader"}};
		__wxAppCode__['pages/beckonCar/module/business/infoSelecter/infoSelecter.json'] = {"component":true,"usingComponents":{"pickup-time":"../../../../../useCar/component/pickupDateTime/index","action-sheet":"../../../../../useCar/component/actionSheet/actionSheet"}};
		__wxAppCode__['pages/beckonCar/module/business/menu/menu.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['pages/beckonCar/module/index.json'] = {"navigationBarBackgroundColor":"#fff","backgroundColor":"#f0f0f4","navigationBarTitleText":"同程打车","disableScroll":true,"component":true,"usingComponents":{"loading":"../../../useCar/component/pageLoading/pageLoading","menu":"./business/menu/menu","info-selecter":"./business/infoSelecter/infoSelecter"}};
		__wxAppCode__['pages/index/index.json'] = {"navigationBarBackgroundColor":"#fff","backgroundColor":"#f0f0f4","navigationBarTitleText":"同程打车","navigationStyle":"custom","usingComponents":{"use-car":"./module/index","custom-header":"../../useCar/component/customHeader/customHeader","author":"/useCar/component/PrivacyAuthorization/index"}};
		__wxAppCode__['pages/index/module/business/infoSelecter/infoSelecter.json'] = {"component":true,"usingComponents":{"pickup-time":"../../../../../useCar/component/pickupDateTime/index","action-sheet":"../../../../../useCar/component/actionSheet/actionSheet"}};
		__wxAppCode__['pages/index/module/business/menu/menu.json'] = {"component":true,"usingComponents":{"action-sheet":"/useCar/component/actionSheet/actionSheet"}};
		__wxAppCode__['pages/index/module/index.json'] = {"navigationBarBackgroundColor":"#fff","backgroundColor":"#f0f0f4","navigationBarTitleText":"同程打车","disableScroll":true,"component":true,"usingComponents":{"loading":"../../../useCar/component/pageLoading/pageLoading","menu":"./business/menu/menu","info-selecter":"./business/infoSelecter/infoSelecter","recpoi-selectpane":"../../../useCar/component/recStartPoi/recStartPoi","announcement":"../../../useCar/component/announcement/announcement","safe-comp":"../../../useCar/component/safeComp/safeComp","activity-popup":"../../../useCar/component/activityPopup/activityPopup","enterprise-enter":"../../../useCar/component/Enterprise/Enterprise","operation-enter":"../../../useCar/component/operationEnter/operationEnter","home-banner":"../../../useCar/component/homeBanner/homeBanner","tiktok-popup":"../../../useCar/component/tiktokPopup/tiktokPopup","author":"/useCar/component/PrivacyAuthorization/index"}};
		__wxAppCode__['pages/transit/transit.json'] = {"usingComponents":{}};
		__wxAppCode__['pages/webView/webView.json'] = {"navigationBarTitleText":"","usingComponents":{}};
		__wxAppCode__['useCar/component/Enterprise/Enterprise.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['useCar/component/PrivacyAuthorization/index.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['useCar/component/actionSheet/actionSheet.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['useCar/component/activityPopup/activityPopup.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['useCar/component/announcement/announcement.json'] = {"component":true,"usingComponents":{"transition":"../transition/transition"}};
		__wxAppCode__['useCar/component/augmentedAndQa/augmentedAndQa.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['useCar/component/customHeader/customHeader.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['useCar/component/homeBanner/homeBanner.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['useCar/component/newCustomer/newCustomer.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['useCar/component/normalNumber/normalNumber.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['useCar/component/numberScroller/numberScroller.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['useCar/component/operationEnter/operationEnter.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['useCar/component/orderPopup/orderPopup.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['useCar/component/pageEmpty/pageEmpty.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['useCar/component/pageLoading/pageLoading.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['useCar/component/pickupDateTime/index.json'] = {"component":true,"usingComponents":{"action-sheet":"../actionSheet/actionSheet"}};
		__wxAppCode__['useCar/component/popconfirm/index.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['useCar/component/recStartPoi/recStartPoi.json'] = {"component":true,"usingComponents":{"action-sheet":"/useCar/component/actionSheet/actionSheet"}};
		__wxAppCode__['useCar/component/safeComp/safeComp.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['useCar/component/scrollNumber2/scrollNumber2.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['useCar/component/tiktokPopup/tiktokPopup.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['useCar/component/toast/toast.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['useCar/component/transition/transition.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['useCar/navigation/navigation.json'] = {"usingComponents":{}};
	;var __WXML_DEP__=__WXML_DEP__||{};__WXML_DEP__["./pages/beckonCar/module/business/infoSelecter/infoSelecter.wxml"]=["./pages/beckonCar/module/template/addressSelect.wxml",];__WXML_DEP__["./pages/index/module/business/infoSelecter/infoSelecter.wxml"]=["./pages/index/module/template/addressSelect.wxml",];__WXML_DEP__["./pages/index/module/index.wxml"]=["./pages/index/module/template/addressSelect.wxml",];__WXML_DEP__["./useCar/component/recStartPoi/recStartPoi.wxml"]=["./useCar/component/recStartPoi/recStartPoiTpl.wxml",];var __wxAppData=__wxAppData||{};var __wxRoute=__wxRoute||"";var __wxRouteBegin=__wxRouteBegin||"";var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var __wxAppCurrentFile__=__wxAppCurrentFile__||"";var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};
/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'productTabSwitch'])
Z([[7],[3,'subtab']])
Z([[6],[[7],[3,'item']],[3,'tabToken']])
Z([3,'tapSubTab'])
Z([a,[[2,'?:'],[[2,'==='],[[6],[[7],[3,'item']],[3,'tabToken']],[[7],[3,'currentTab']]],[1,'active'],[1,'noactice']],[3,' '],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[1,0]],[1,'left'],[1,'']]])
Z(z[2])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'tabToken']],[1,'RIDE_SHARING']],[[6],[[7],[3,'item']],[3,'operatingLabel']]])
Z([3,'productTabSwitchA'])
Z(z[1])
Z([3,'tabToken'])
Z(z[3])
Z([a,[3,'tabItem '],z[4][1],z[4][2],z[4][3]])
Z(z[2])
Z([[6],[[7],[3,'item']],[3,'operatingLabel']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'productTabSwitch'])
Z([[7],[3,'subtab']])
Z([[6],[[7],[3,'item']],[3,'tabToken']])
Z([3,'tapSubTab'])
Z([a,[[2,'?:'],[[2,'==='],[[6],[[7],[3,'item']],[3,'tabToken']],[[7],[3,'currentTab']]],[1,'active'],[1,'noactice']],[3,' '],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[1,0]],[1,'left'],[1,'']]])
Z(z[2])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'tabToken']],[1,'RIDE_SHARING']],[[6],[[7],[3,'item']],[3,'operatingLabel']]])
Z([3,'productTabSwitchA'])
Z(z[1])
Z([3,'tabToken'])
Z(z[3])
Z([a,[3,'tabItem '],z[4][1],z[4][2],z[4][3]])
Z(z[2])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'RecPoiSelectPane'])
Z([[2,'=='],[[7],[3,'mode']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"m_./useCar/component/actionSheet/actionSheet.wxml:pop":np_5,"m_./useCar/component/announcement/announcement.wxml:selectCar":np_6,"m_./useCar/component/popconfirm/index.wxml:pop":np_8,"p_./pages/beckonCar/module/business/infoSelecter/inputer.wxs":np_0,"p_./pages/beckonCar/module/business/infoSelecter/parse.wxs":np_1,"p_./pages/index/module/business/infoSelecter/inputer.wxs":np_2,"p_./pages/index/module/business/infoSelecter/parse.wxs":np_3,"p_./useCar/common/common.wxs":np_4,"p_./useCar/component/announcement/announcement.wxs":np_7,};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./pages/beckonCar/module/business/infoSelecter/infoSelecter.wxml']={};
f_['./pages/beckonCar/module/business/infoSelecter/infoSelecter.wxml']['tools'] =f_['./useCar/common/common.wxs'] || nv_require("p_./useCar/common/common.wxs");
f_['./pages/beckonCar/module/business/infoSelecter/infoSelecter.wxml']['tools']();
f_['./pages/beckonCar/module/business/infoSelecter/infoSelecter.wxml']['inputer'] =f_['./pages/beckonCar/module/business/infoSelecter/inputer.wxs'] || nv_require("p_./pages/beckonCar/module/business/infoSelecter/inputer.wxs");
f_['./pages/beckonCar/module/business/infoSelecter/infoSelecter.wxml']['inputer']();
f_['./pages/beckonCar/module/business/infoSelecter/infoSelecter.wxml']['parse'] =f_['./pages/beckonCar/module/business/infoSelecter/parse.wxs'] || nv_require("p_./pages/beckonCar/module/business/infoSelecter/parse.wxs");
f_['./pages/beckonCar/module/business/infoSelecter/infoSelecter.wxml']['parse']();

f_['./pages/beckonCar/module/business/infoSelecter/inputer.wxs'] = nv_require("p_./pages/beckonCar/module/business/infoSelecter/inputer.wxs");
function np_0(){var nv_module={nv_exports:{}};var nv_fillTimeTip = (function (nv_temp,nv_args){if (!nv_temp)return("");;nv_args = nv_args || [];var nv_rp = nv_getRegExp("%([0-9]*)",["g"]);nv_temp = nv_temp.nv_replace(nv_rp,(function (nv__,nv_index){return(nv_args[((nt_0=(nv_parseInt(nv_index)),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))] || "")}));return(nv_temp)});function nv_createTimeTips(nv_elements,nv_productid){var nv_timeTIpsMap = ({"nv_b12":"航班预计%0到达","nv_b13":"航班预计%0出发","nv_b14":"火车%0预计%1到达","nv_b15":"火车%0预计%1出发",});var nv_templateTxt = nv_timeTIpsMap[((nt_1=('b' + nv_productid),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))];if (!nv_templateTxt)return("");;var nv_isFlightServe = nv_productid == "12" || nv_productid == "13";var nv_isTrainServe = nv_productid == "14" || nv_productid == "15";var nv_getFlightTime = (function (){if (nv_productid == "12"){return(nv_elements.nv_flightArrDate ? [nv_timeFormat(nv_elements.nv_flightArrDate)]:"")} else {return(nv_elements.nv_flightDepDate ? [nv_timeFormat(nv_elements.nv_flightDepDate)]:"")}});var nv_getTrinTime = (function (){if (nv_productid == "14"){return(nv_elements.nv_trainArrDate ? [nv_elements.nv_trains,nv_timeFormat(nv_elements.nv_trainArrDate)]:"")} else {return(nv_elements.nv_trainDepDate ? [nv_elements.nv_trains,nv_timeFormat(nv_elements.nv_trainDepDate)]:"")}});var nv_timeTipArgs = nv_isFlightServe ? nv_getFlightTime():(nv_isTrainServe ? nv_getTrinTime():"");var nv_timeTips = nv_timeTipArgs ? nv_fillTimeTip(nv_templateTxt,nv_timeTipArgs):"";return(nv_timeTips)};function nv_timeFormat(nv_time){var nv_reg = nv_getRegExp('(?:[0-9]{4}(?:-|/))([0-9]{2})(?:-|/)([0-9]{2})(.*)','g');var nv_result = nv_reg.nv_exec(nv_time || '') || [];var nv_m = nv_result[(1)];var nv_d = nv_result[(2)];var nv_t = nv_result[(3)].nv_slice(0,6);return(nv_m + '月' + nv_d + '日' + nv_t)};nv_module.nv_exports = ({nv_startInputer:(function (nv_elements,nv_productid){nv_elements = nv_elements || ({});var nv_hasTips = (nv_productid === 12 || nv_productid === 14);var nv_isMeetAirport = nv_productid === 12;if (nv_elements.nv__source == 'ticket'){nv_isMeetAirport = false};var nv_title = nv_isMeetAirport ? nv_elements.nv_flt:nv_elements.nv_startAddress;var nv_subtitle = nv_isMeetAirport ? nv_elements.nv_startAddress:"";var nv_timeTips = nv_hasTips ? nv_createTimeTips(nv_elements,nv_productid + ""):'';var nv_hint = nv_timeTips ? '':nv_elements.nv_hint;var nv_result = ({nv_light:!!nv_title ? "light":"",nv_title:nv_title,nv_subtitle:nv_subtitle,nv_hint:nv_hint,nv_timeTips:nv_timeTips,});return(nv_result)}),nv_endInputer:(function (nv_elements,nv_productid,nv_type){nv_elements = nv_elements || ({});var nv_hasTips = (nv_productid === 13 || nv_productid === 15);var nv_isSendAirport = nv_productid === 13;var nv_title = nv_isSendAirport ? (nv_elements.nv_flt || nv_elements.nv_endAddress):nv_elements.nv_endAddress;var nv_subtitle = (nv_isSendAirport && nv_elements.nv_flt) ? nv_elements.nv_endAddress:"";var nv_timeTips = nv_hasTips ? nv_createTimeTips(nv_elements,nv_productid + ""):"";var nv_result = ({nv_light:!!nv_title ? "light":"",nv_title:nv_title,nv_subtitle:nv_subtitle,nv_timeTips:nv_timeTips,});return(nv_result)}),nv_fillThree:(function (nv_list){nv_list = nv_list || [({})];var nv_sub = 3 - (nv_list.nv_length % 3);while(nv_sub-- > 0){nv_list.nv_push(({}))};return(nv_list)}),nv_sliceString:(function (nv_str,nv_n){return(nv_str.nv_slice(nv_n - 1))}),});return nv_module.nv_exports;}

f_['./pages/beckonCar/module/business/infoSelecter/parse.wxs'] = nv_require("p_./pages/beckonCar/module/business/infoSelecter/parse.wxs");
function np_1(){var nv_module={nv_exports:{}};var nv_station = (function (nv_array){nv_array = nv_array || [];return(nv_array.nv_reduce((function (nv_total,nv_current){return(nv_total.nv_concat(nv_current.nv_cityList))}),[]))});var nv_chooseHistory = (function (nv_obj){nv_obj = nv_obj || ({});var nv_latlon = nv_obj.nv_location.nv_split(',');return(({"nv_address":nv_obj.nv_name,"nv_name":nv_obj.nv_name,"nv_longitude":nv_latlon[(0)],"nv_latitude":nv_latlon[(1)],"nv_addressDetail":"","nv_cityId":nv_obj.nv_cityId,"nv_cityName":nv_obj.nv_cityName,"nv_airportCode":nv_obj.nv_pek || nv_obj.nv_airportCode || '',"nv_pek":nv_obj.nv_pek || nv_obj.nv_airportCode || '',}))});var nv_chooseTrain = (function (nv_obj){return(({"nv_address":nv_obj.nv_alias,"nv_name":nv_obj.nv_alias,"nv_longitude":nv_obj.nv_extend.nv_longitude,"nv_latitude":nv_obj.nv_extend.nv_latitude,"nv_addressDetail":nv_obj.nv_alias,"nv_cityId":nv_obj.nv_extend.nv_cityId,"nv_cityName":nv_obj.nv_extend.nv_city,}))});var nv_chooseAirport = (function (nv_obj){return(({"nv_address":nv_obj.nv_alias,"nv_name":nv_obj.nv_alias,"nv_longitude":nv_obj.nv_longitude,"nv_latitude":nv_obj.nv_latitude,"nv_addressDetail":nv_obj.nv_alias,"nv_airportCode":nv_obj.nv_pek || nv_obj.nv_airportCode || '',"nv_pek":nv_obj.nv_pek || nv_obj.nv_airportCode || '',}))});var nv_chooseRec = (function (nv_obj,nv_type){var nv_map = ['',nv_chooseTrain,nv_chooseAirport];return(nv_map[((nt_2=(+nv_type),null==nt_2?undefined:'number'=== typeof nt_2?nt_2:"nv_"+nt_2))] ? nv_map[((nt_3=(+nv_type),null==nt_3?undefined:'number'=== typeof nt_3?nt_3:"nv_"+nt_3))](nv_obj):nv_obj)});nv_module.nv_exports = ({nv_station:nv_station,nv_chooseHistory:nv_chooseHistory,nv_chooseRec:nv_chooseRec,});return nv_module.nv_exports;}

f_['./pages/beckonCar/module/business/menu/menu.wxml']={};
f_['./pages/beckonCar/module/business/menu/menu.wxml']['tools'] =f_['./useCar/common/common.wxs'] || nv_require("p_./useCar/common/common.wxs");
f_['./pages/beckonCar/module/business/menu/menu.wxml']['tools']();

f_['./pages/beckonCar/module/index.wxml']={};
f_['./pages/beckonCar/module/index.wxml']['tools'] =f_['./useCar/common/common.wxs'] || nv_require("p_./useCar/common/common.wxs");
f_['./pages/beckonCar/module/index.wxml']['tools']();

f_['./pages/beckonCar/module/template/addressSelect.wxml']={};
f_['./pages/beckonCar/module/template/addressSelect.wxml']['tools'] =f_['./useCar/common/common.wxs'] || nv_require("p_./useCar/common/common.wxs");
f_['./pages/beckonCar/module/template/addressSelect.wxml']['tools']();

f_['./pages/index/module/business/infoSelecter/infoSelecter.wxml']={};
f_['./pages/index/module/business/infoSelecter/infoSelecter.wxml']['tools'] =f_['./useCar/common/common.wxs'] || nv_require("p_./useCar/common/common.wxs");
f_['./pages/index/module/business/infoSelecter/infoSelecter.wxml']['tools']();
f_['./pages/index/module/business/infoSelecter/infoSelecter.wxml']['inputer'] =f_['./pages/index/module/business/infoSelecter/inputer.wxs'] || nv_require("p_./pages/index/module/business/infoSelecter/inputer.wxs");
f_['./pages/index/module/business/infoSelecter/infoSelecter.wxml']['inputer']();
f_['./pages/index/module/business/infoSelecter/infoSelecter.wxml']['parse'] =f_['./pages/index/module/business/infoSelecter/parse.wxs'] || nv_require("p_./pages/index/module/business/infoSelecter/parse.wxs");
f_['./pages/index/module/business/infoSelecter/infoSelecter.wxml']['parse']();

f_['./pages/index/module/business/infoSelecter/inputer.wxs'] = nv_require("p_./pages/index/module/business/infoSelecter/inputer.wxs");
function np_2(){var nv_module={nv_exports:{}};var nv_fillTimeTip = (function (nv_temp,nv_args){if (!nv_temp)return("");;nv_args = nv_args || [];var nv_rp = nv_getRegExp("%([0-9]*)",["g"]);nv_temp = nv_temp.nv_replace(nv_rp,(function (nv__,nv_index){return(nv_args[((nt_0=(nv_parseInt(nv_index)),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))] || "")}));return(nv_temp)});function nv_createTimeTips(nv_elements,nv_productid){var nv_timeTIpsMap = ({"nv_b12":"航班预计%0到达","nv_b13":"航班预计%0出发","nv_b14":"火车%0预计%1到达","nv_b15":"火车%0预计%1出发",});var nv_templateTxt = nv_timeTIpsMap[((nt_1=('b' + nv_productid),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))];if (!nv_templateTxt)return("");;var nv_isFlightServe = nv_productid == "12" || nv_productid == "13";var nv_isTrainServe = nv_productid == "14" || nv_productid == "15";var nv_getFlightTime = (function (){if (nv_productid == "12"){return(nv_elements.nv_flightArrDate ? [nv_timeFormat(nv_elements.nv_flightArrDate)]:"")} else {return(nv_elements.nv_flightDepDate ? [nv_timeFormat(nv_elements.nv_flightDepDate)]:"")}});var nv_getTrinTime = (function (){if (nv_productid == "14"){return(nv_elements.nv_trainArrDate ? [nv_elements.nv_trains,nv_timeFormat(nv_elements.nv_trainArrDate)]:"")} else {return(nv_elements.nv_trainDepDate ? [nv_elements.nv_trains,nv_timeFormat(nv_elements.nv_trainDepDate)]:"")}});var nv_timeTipArgs = nv_isFlightServe ? nv_getFlightTime():(nv_isTrainServe ? nv_getTrinTime():"");var nv_timeTips = nv_timeTipArgs ? nv_fillTimeTip(nv_templateTxt,nv_timeTipArgs):"";return(nv_timeTips)};function nv_timeFormat(nv_time){var nv_reg = nv_getRegExp('(?:[0-9]{4}(?:-|/))([0-9]{2})(?:-|/)([0-9]{2})(.*)','g');var nv_result = nv_reg.nv_exec(nv_time || '') || [];var nv_m = nv_result[(1)];var nv_d = nv_result[(2)];var nv_t = nv_result[(3)].nv_slice(0,6);return(nv_m + '月' + nv_d + '日' + nv_t)};nv_module.nv_exports = ({nv_startInputer:(function (nv_elements,nv_productid){nv_elements = nv_elements || ({});var nv_hasTips = (nv_productid === 12 || nv_productid === 14);var nv_isMeetAirport = nv_productid === 12;if (nv_elements.nv__source == 'ticket'){nv_isMeetAirport = false};var nv_title = nv_isMeetAirport ? nv_elements.nv_flt:nv_elements.nv_startAddress;var nv_subtitle = nv_isMeetAirport ? nv_elements.nv_startAddress:"";var nv_timeTips = nv_hasTips ? nv_createTimeTips(nv_elements,nv_productid + ""):'';var nv_hint = nv_timeTips ? '':nv_elements.nv_hint;var nv_result = ({nv_light:!!nv_title ? "light":"",nv_title:nv_title,nv_subtitle:nv_subtitle,nv_hint:nv_hint,nv_timeTips:nv_timeTips,});return(nv_result)}),nv_endInputer:(function (nv_elements,nv_productid,nv_type){nv_elements = nv_elements || ({});var nv_hasTips = (nv_productid === 13 || nv_productid === 15);var nv_isSendAirport = nv_productid === 13;var nv_title = nv_isSendAirport ? (nv_elements.nv_flt || nv_elements.nv_endAddress):nv_elements.nv_endAddress;var nv_subtitle = (nv_isSendAirport && nv_elements.nv_flt) ? nv_elements.nv_endAddress:"";var nv_timeTips = nv_hasTips ? nv_createTimeTips(nv_elements,nv_productid + ""):"";var nv_result = ({nv_light:!!nv_title ? "light":"",nv_title:nv_title,nv_subtitle:nv_subtitle,nv_timeTips:nv_timeTips,});return(nv_result)}),nv_fillThree:(function (nv_list){nv_list = nv_list || [({})];var nv_sub = 3 - (nv_list.nv_length % 3);while(nv_sub-- > 0){nv_list.nv_push(({}))};return(nv_list)}),nv_sliceString:(function (nv_str,nv_n){return(nv_str.nv_slice(nv_n - 1))}),});return nv_module.nv_exports;}

f_['./pages/index/module/business/infoSelecter/parse.wxs'] = nv_require("p_./pages/index/module/business/infoSelecter/parse.wxs");
function np_3(){var nv_module={nv_exports:{}};var nv_station = (function (nv_array){nv_array = nv_array || [];return(nv_array.nv_reduce((function (nv_total,nv_current){return(nv_total.nv_concat(nv_current.nv_cityList))}),[]))});var nv_chooseHistory = (function (nv_obj){nv_obj = nv_obj || ({});var nv_latlon = nv_obj.nv_location.nv_split(',');return(({"nv_address":nv_obj.nv_name,"nv_name":nv_obj.nv_name,"nv_longitude":nv_latlon[(0)],"nv_latitude":nv_latlon[(1)],"nv_addressDetail":"","nv_cityId":nv_obj.nv_cityId,"nv_cityName":nv_obj.nv_cityName,"nv_airportCode":nv_obj.nv_pek || nv_obj.nv_airportCode || '',"nv_pek":nv_obj.nv_pek || nv_obj.nv_airportCode || '',}))});var nv_chooseTrain = (function (nv_obj){return(({"nv_address":nv_obj.nv_alias,"nv_name":nv_obj.nv_alias,"nv_longitude":nv_obj.nv_extend.nv_longitude,"nv_latitude":nv_obj.nv_extend.nv_latitude,"nv_addressDetail":nv_obj.nv_alias,"nv_cityId":nv_obj.nv_extend.nv_cityId,"nv_cityName":nv_obj.nv_extend.nv_city,}))});var nv_chooseAirport = (function (nv_obj){return(({"nv_address":nv_obj.nv_alias,"nv_name":nv_obj.nv_alias,"nv_longitude":nv_obj.nv_longitude,"nv_latitude":nv_obj.nv_latitude,"nv_addressDetail":nv_obj.nv_alias,"nv_airportCode":nv_obj.nv_pek || nv_obj.nv_airportCode || '',"nv_pek":nv_obj.nv_pek || nv_obj.nv_airportCode || '',}))});var nv_chooseRec = (function (nv_obj,nv_type){var nv_map = ['',nv_chooseTrain,nv_chooseAirport];return(nv_map[((nt_2=(+nv_type),null==nt_2?undefined:'number'=== typeof nt_2?nt_2:"nv_"+nt_2))] ? nv_map[((nt_3=(+nv_type),null==nt_3?undefined:'number'=== typeof nt_3?nt_3:"nv_"+nt_3))](nv_obj):nv_obj)});nv_module.nv_exports = ({nv_station:nv_station,nv_chooseHistory:nv_chooseHistory,nv_chooseRec:nv_chooseRec,});return nv_module.nv_exports;}

f_['./pages/index/module/business/menu/menu.wxml']={};
f_['./pages/index/module/business/menu/menu.wxml']['tools'] =f_['./useCar/common/common.wxs'] || nv_require("p_./useCar/common/common.wxs");
f_['./pages/index/module/business/menu/menu.wxml']['tools']();

f_['./pages/index/module/index.wxml']={};
f_['./pages/index/module/index.wxml']['tools'] =f_['./useCar/common/common.wxs'] || nv_require("p_./useCar/common/common.wxs");
f_['./pages/index/module/index.wxml']['tools']();

f_['./pages/index/module/template/addressSelect.wxml']={};
f_['./pages/index/module/template/addressSelect.wxml']['tools'] =f_['./useCar/common/common.wxs'] || nv_require("p_./useCar/common/common.wxs");
f_['./pages/index/module/template/addressSelect.wxml']['tools']();

f_['./useCar/common/common.wxs'] = nv_require("p_./useCar/common/common.wxs");
function np_4(){var nv_module={nv_exports:{}};var nv_baseUrl = "https://file.40017.cn/groundtrafficstage/usecar/";var nv_imgUrlPrefix = nv_baseUrl + "distributioncomponents/img/";var nv_imgUrlNewUserPrefix = nv_baseUrl + "usecar/notice/";var nv_imgUrl = (function (nv_fileName){return(nv_imgUrlPrefix + nv_fileName)});var nv_imgNewUserUrl = (function (nv_fileName){return(nv_imgUrlNewUserPrefix + nv_fileName)});function nv_formatPrice(nv_price){return(nv_parseFloat(nv_price).nv_toFixed(2))};function nv_dateSplitTime(nv_dateStr){if (nv_dateStr && nv_dateStr.nv_split){var nv_s = nv_dateStr.nv_split(" ");return(nv_s.nv_length > 1 ? nv_s[(1)]:"")};return("")};function nv_timeFormat(nv_time){var nv_reg = nv_getRegExp('(?:[0-9]{4}(?:-|/))([0-9]{2})(?:-|/)([0-9]{2})(.*)','g');var nv_result = nv_reg.nv_exec(nv_time || '') || [];var nv_m = nv_result[(1)];var nv_d = nv_result[(2)];var nv_t = nv_result[(3)];return(nv_m + '月' + nv_d + '日' + nv_t)};function nv_lightTxt(nv_value){return(nv_value ? 'light':'')};function nv_tabNameChange(nv_name){var nv_nameMap = ({'nv_接送机':'接送机','nv_接送站':'接送站','nv_打车':'打车',});return(nv_nameMap[((nt_4=(nv_name),null==nt_4?undefined:'number'=== typeof nt_4?nt_4:"nv_"+nt_4))] || nv_name)};function nv_filterType(nv_list,nv_type){if (!nv_list || nv_list.nv_length == 0)return;;var nv_res = nv_list.nv_filter((function (nv_item){return(nv_item.nv_type == nv_type)}));return(nv_res)};function nv_formatTrainData(nv_obj,nv_type){var nv_trainRes;if (nv_type == 'start'){nv_trainRes = ({nv_cityId:nv_obj.nv_startCityId,nv_cityName:nv_obj.nv_startCityName,nv_name:nv_obj.nv_startAddress,nv_dateTxt:nv_obj.nv_dateTxt,nv_startTime:nv_obj.nv_timeTxt.nv_split('-')[(0)],nv_location:nv_obj.nv_startLongitude + ',' + nv_obj.nv_startLatitude,nv_label:nv_obj.nv_label,nv_labelColor:nv_obj.nv_labelColor,nv_labelColorFrame:nv_obj.nv_labelColorFrame,nv_isAgainstFlag:nv_obj.nv_isAgainstFlag,})} else if (nv_type == 'end'){nv_trainRes = ({nv_cityId:nv_obj.nv_endCityId,nv_cityName:nv_obj.nv_endCityName,nv_name:nv_obj.nv_endAddress,nv_dateTxt:nv_obj.nv_dateTxt,nv_endTime:nv_obj.nv_timeTxt.nv_split('-')[(1)],nv_location:nv_obj.nv_endLongitude + ',' + nv_obj.nv_endLatitude,nv_label:nv_obj.nv_label,nv_labelColor:nv_obj.nv_labelColor,nv_labelColorFrame:nv_obj.nv_labelColorFrame,nv_isAgainstFlag:nv_obj.nv_isAgainstFlag,})};return(nv_trainRes)};function nv_splitString(nv_string,nv_symbol){return(({nv_front:nv_string.nv_split(nv_symbol)[(0)],nv_behind:nv_string.nv_split(nv_symbol)[(1)],}))};function nv_filterH(nv_val){return(nv_val.nv_split(''))};function nv_isType(nv_val,nv_type){var nv_re;if (nv_type == 'symbol'){nv_re = nv_getRegExp("[`；：”“’。 ，、？_@!*()]")} else if (nv_type == 'china'){nv_re = nv_getRegExp('[^\x5cu4E00-\x5cu9FA5]')};return(nv_re.nv_test(nv_val))};function nv_handleLongName(nv_name,nv_len){if (!nv_name || nv_getStrLength(nv_name) <= nv_len)return(nv_name);;return(nv_getscalingText(nv_name,nv_len))};function nv_getStrLength(nv_str){var nv_strs = nv_str.nv_split('');var nv_len = 0;nv_strs.nv_forEach((function (nv_s){var nv_ccode = nv_s.nv_charCodeAt();if (nv_ccode >= 33 && nv_ccode <= 126){nv_len = nv_len + 1} else {nv_len = nv_len + 2}}));return(nv_len / 2)};function nv_getscalingText(nv_str,nv_length){var nv_strs = nv_str.nv_split('');var nv_leftStr = '';var nv_rightStr = '';nv_strs.nv_forEach((function (nv_s,nv_i){if (nv_getStrLength(nv_leftStr + '...' + nv_rightStr) >= nv_length)return;;var nv__rightStr = nv_strs[((nt_9=(nv_strs.nv_length - 1 - nv_i),null==nt_9?undefined:'number'=== typeof nt_9?nt_9:"nv_"+nt_9))] + nv_rightStr;if (nv_getStrLength(nv_leftStr + '...' + nv__rightStr) <= nv_length){nv_rightStr = nv_strs[((nt_10=(nv_strs.nv_length - 1 - nv_i),null==nt_10?undefined:'number'=== typeof nt_10?nt_10:"nv_"+nt_10))] + nv_rightStr};var nv__leftStr = nv_leftStr + nv_strs[((nt_11=(nv_i),null==nt_11?undefined:'number'=== typeof nt_11?nt_11:"nv_"+nt_11))];if (nv_getStrLength(nv__leftStr + '...' + nv_rightStr) <= nv_length){nv_leftStr = nv_leftStr + nv_strs[((nt_12=(nv_i),null==nt_12?undefined:'number'=== typeof nt_12?nt_12:"nv_"+nt_12))]}}));return(nv_leftStr + '...' + nv_rightStr)};function nv_stopPropagation(){return(false)};function nv_ellipsisMid(nv_name,nv_len,nv_sL,nv_eL){!nv_sL && (nv_sL = 3);!nv_eL && (nv_eL = 3);if (!nv_name || nv_name.nv_length <= nv_len)return(nv_name);;var nv_str1 = nv_name.nv_slice(0,nv_sL);var nv_str2 = nv_name.nv_slice(-nv_eL);return(nv_str1 + '...' + nv_str2)};var nv_tagStyle = (function (nv_tag){var nv_color = nv_tag.nv_color;return("background:" + nv_tag.nv_bg + ";border:1rpx solid " + nv_color + ";color:" + nv_color + ";")});nv_module.nv_exports = ({nv_imgUrl:nv_imgUrl,nv_imgUrlPrefix:nv_imgUrlPrefix,nv_imgNewUserUrl:nv_imgNewUserUrl,nv_imgUrlNewUserPrefix:nv_imgUrlNewUserPrefix,nv_formatPrice:nv_formatPrice,nv_dateSplitTime:nv_dateSplitTime,nv_lightTxt:nv_lightTxt,nv_timeFormat:nv_timeFormat,nv_tabNameChange:nv_tabNameChange,nv_filterType:nv_filterType,nv_formatTrainData:nv_formatTrainData,nv_splitString:nv_splitString,nv_filterH:nv_filterH,nv_isType:nv_isType,nv_handleLongName:nv_handleLongName,nv_stopPropagation:nv_stopPropagation,nv_ellipsisMid:nv_ellipsisMid,nv_tagStyle:nv_tagStyle,});return nv_module.nv_exports;}

f_['./useCar/component/actionSheet/actionSheet.wxml']={};
f_['./useCar/component/actionSheet/actionSheet.wxml']['pop'] =nv_require("m_./useCar/component/actionSheet/actionSheet.wxml:pop");
function np_5(){var nv_module={nv_exports:{}};nv_module.nv_exports = ({nv_touchstart:(function (nv_event,nv_instance){nv_instance.nv_callMethod("onTouchStart")}),nv_touchmove:(function (nv_event,nv_instance){return(false)}),nv_touchend:(function (nv_event,nv_instance){nv_instance.nv_callMethod("onTouchEnd");return(false)}),nv_tap:(function (nv_event,nv_instance){nv_instance.nv_callMethod("handleClose",nv_event);return(false)}),});return nv_module.nv_exports;}

f_['./useCar/component/announcement/announcement.wxml']={};
f_['./useCar/component/announcement/announcement.wxml']['tools'] =f_['./useCar/component/announcement/announcement.wxs'] || nv_require("p_./useCar/component/announcement/announcement.wxs");
f_['./useCar/component/announcement/announcement.wxml']['tools']();
f_['./useCar/component/announcement/announcement.wxml']['selectCar'] =nv_require("m_./useCar/component/announcement/announcement.wxml:selectCar");
function np_6(){var nv_module={nv_exports:{}};nv_module.nv_exports = ({nv_handleAnnouncementBgColor:(function (nv_isManualLocationInfo,nv_isManualClick,nv_bgColor){return(nv_isManualLocationInfo.nv_bgColor && !nv_isManualClick ? nv_isManualLocationInfo.nv_bgColor:nv_bgColor)}),});return nv_module.nv_exports;}

f_['./useCar/component/announcement/announcement.wxs'] = nv_require("p_./useCar/component/announcement/announcement.wxs");
function np_7(){var nv_module={nv_exports:{}};nv_module.nv_exports = ({nv_getHeight:(function (nv_newUserFlagShow,nv_list,nv_isManualLocationInfo,nv_fenceRedInfo){if (!nv_newUserFlagShow && !nv_fenceRedInfo)return(90);;if ((nv_newUserFlagShow || nv_fenceRedInfo) && (nv_list.nv_length > 0 || nv_isManualLocationInfo.nv_msg)){return(168)} else {return(111)}}),});return nv_module.nv_exports;}

f_['./useCar/component/newCustomer/newCustomer.wxml']={};
f_['./useCar/component/newCustomer/newCustomer.wxml']['tools'] =f_['./useCar/common/common.wxs'] || nv_require("p_./useCar/common/common.wxs");
f_['./useCar/component/newCustomer/newCustomer.wxml']['tools']();

f_['./useCar/component/popconfirm/index.wxml']={};
f_['./useCar/component/popconfirm/index.wxml']['pop'] =nv_require("m_./useCar/component/popconfirm/index.wxml:pop");
function np_8(){var nv_module={nv_exports:{}};nv_module.nv_exports = ({nv_touchstart:(function (nv_event,nv_instance){nv_instance.nv_callMethod("onTouchStart")}),nv_touchmove:(function (nv_event,nv_instance){return(false)}),nv_touchend:(function (nv_event,nv_instance){nv_instance.nv_callMethod("onTouchEnd");return(false)}),nv_tap:(function (nv_event,nv_instance){nv_instance.nv_callMethod("close");return(false)}),});return nv_module.nv_exports;}

f_['./useCar/component/safeComp/safeComp.wxml']={};
f_['./useCar/component/safeComp/safeComp.wxml']['tools'] =f_['./useCar/common/common.wxs'] || nv_require("p_./useCar/common/common.wxs");
f_['./useCar/component/safeComp/safeComp.wxml']['tools']();

var x=['./pages/beckonCar/module/template/addressSelect.wxml','./pages/index/module/template/addressSelect.wxml','./useCar/component/recStartPoi/recStartPoiTpl.wxml'];d_[x[0]]={}
d_[x[0]]["productTabSwitch"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':productTabSwitch'
r.wxVkey=b
gg.f=$gdc(f_["./pages/beckonCar/module/template/addressSelect.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_mz(z,'view',[':key',2,'bindtap',1,'class',2,'data-token',3],[],fE,oD,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,6,fE,oD,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,1,xC,e,s,gg,oB,'item','index','')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["productTabSwitchA"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':productTabSwitchA'
r.wxVkey=b
gg.f=$gdc(f_["./pages/beckonCar/module/template/addressSelect.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_mz(z,'view',['bindtap',10,'class',1,'data-token',2],[],fE,oD,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,13,fE,oD,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,8,xC,e,s,gg,oB,'item','index','tabToken')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
d_[x[1]]["productTabSwitch"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':productTabSwitch'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/module/template/addressSelect.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_mz(z,'view',[':key',2,'bindtap',1,'class',2,'data-token',3],[],fE,oD,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,6,fE,oD,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,1,xC,e,s,gg,oB,'item','index','')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["productTabSwitchA"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':productTabSwitchA'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/module/template/addressSelect.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_mz(z,'view',['bindtap',10,'class',1,'data-token',2],[],fE,oD,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,13,fE,oD,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,8,xC,e,s,gg,oB,'item','index','tabToken')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]=e_[x[1]]||{f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
d_[x[2]]["RecPoiSelectPane"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[2]+':RecPoiSelectPane'
r.wxVkey=b
gg.f=$gdc(f_["./useCar/component/recStartPoi/recStartPoiTpl.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]=e_[x[2]]||{f:m2,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/beckonCar/module/template/addressSelect.wxml'] = [$gwx, './pages/beckonCar/module/template/addressSelect.wxml'];else __wxAppCode__['pages/beckonCar/module/template/addressSelect.wxml'] = $gwx( './pages/beckonCar/module/template/addressSelect.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/module/template/addressSelect.wxml'] = [$gwx, './pages/index/module/template/addressSelect.wxml'];else __wxAppCode__['pages/index/module/template/addressSelect.wxml'] = $gwx( './pages/index/module/template/addressSelect.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/recStartPoi/recStartPoiTpl.wxml'] = [$gwx, './useCar/component/recStartPoi/recStartPoiTpl.wxml'];else __wxAppCode__['useCar/component/recStartPoi/recStartPoiTpl.wxml'] = $gwx( './useCar/component/recStartPoi/recStartPoiTpl.wxml' );
	;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define(".eslintrc.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports={env:{browser:!0,es2021:!0},extends:"eslint:recommended",parserOptions:{ecmaVersion:12,sourceType:"module"},globals:{App:"readonly",wx:"readonly",Page:"readonly",Component:"readonly",Behavior:"readonly",getApp:"readonly",require:"readonly",module:"readonly",getCurrentPages:"readonly",exports:"readonly",define:"readonly",global:"readonly",setImmediate:"readonly"},rules:{semi:"off","no-unused-vars":1,"no-extra-semi":1,"no-irregular-whitespace":1,"no-empty":1,"no-prototype-builtins":1,"no-mixed-spaces-and-tabs":1}};
},{isPage:false,isComponent:false,currentFile:'.eslintrc.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/Arrayincludes.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(r,e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if(0==n)return!1;for(var i,o,a=0|e,u=Math.max(0<=a?a:n-Math.abs(a),0);u<n;){if((i=t[u])===(o=r)||"number"==typeof i&&"number"==typeof o&&isNaN(i)&&isNaN(o))return!0;u++}return!1}});
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/Arrayincludes.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/Objectentries.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
Object.entries||(Object.entries=function(e){for(var r=Object.keys(e),t=r.length,n=new Array(t);t--;)n[t]=[r[t],e[r[t]]];return n});
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/Objectentries.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/Objectvalues.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
Object.values||(Object.values=function(e){if(e!==Object(e))throw new TypeError("Object.values called on a non-object");var t,r=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(e[t]);return r});
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/Objectvalues.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/arrayLikeToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=r[e];return n}module.exports=_arrayLikeToArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/arrayLikeToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/arrayWithHoles.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _arrayWithHoles(r){if(Array.isArray(r))return r}module.exports=_arrayWithHoles;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/arrayWithHoles.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/arrayWithoutHoles.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
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
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/iterableToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/iterableToArrayLimit.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _iterableToArrayLimit(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],i=!0,o=!1,l=void 0;try{for(var n,a=r[Symbol.iterator]();!(i=(n=a.next()).done)&&(e.push(n.value),!t||e.length!==t);i=!0);}catch(r){o=!0,l=r}finally{try{i||null==a.return||a.return()}finally{if(o)throw l}}return e}}module.exports=_iterableToArrayLimit;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/iterableToArrayLimit.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/nonIterableRest.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=_nonIterableRest;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/nonIterableRest.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/nonIterableSpread.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=_nonIterableSpread;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/nonIterableSpread.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/objectSpread2.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var defineProperty=require("./defineProperty");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}module.exports=_objectSpread2;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/objectSpread2.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/slicedToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var arrayWithHoles=require("./arrayWithHoles"),iterableToArrayLimit=require("./iterableToArrayLimit"),unsupportedIterableToArray=require("./unsupportedIterableToArray"),nonIterableRest=require("./nonIterableRest");function _slicedToArray(r,e){return arrayWithHoles(r)||iterableToArrayLimit(r,e)||unsupportedIterableToArray(r,e)||nonIterableRest()}module.exports=_slicedToArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/slicedToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/toConsumableArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var arrayWithoutHoles=require("./arrayWithoutHoles"),iterableToArray=require("./iterableToArray"),unsupportedIterableToArray=require("./unsupportedIterableToArray"),nonIterableSpread=require("./nonIterableSpread");function _toConsumableArray(r){return arrayWithoutHoles(r)||iterableToArray(r)||unsupportedIterableToArray(r)||nonIterableSpread()}module.exports=_toConsumableArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/toConsumableArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/typeof.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
function _typeof(o){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?module.exports=_typeof=function(o){return typeof o}:module.exports=_typeof=function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}module.exports=_typeof;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/typeof.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/unsupportedIterableToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
var arrayLikeToArray=require("./arrayLikeToArray");function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?arrayLikeToArray(r,e):void 0}}module.exports=_unsupportedIterableToArray;
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/unsupportedIterableToArray.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/regenerator.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
!function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof module,h=t.regeneratorRuntime;if(h)u&&(module.exports=h);else{(h=t.regeneratorRuntime=u?module.exports:{}).wrap=w;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={},v={};v[i]=function(){return this};var d=Object.getPrototypeOf,g=d&&d(d(P([])));g&&g!==e&&n.call(g,i)&&(v=g);var m=b.prototype=x.prototype=Object.create(v);E.prototype=m.constructor=b,b.constructor=E,b[c]=E.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===E||"GeneratorFunction"===(r.displayName||r.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},h.awrap=function(t){return{__await:t}},_(j.prototype),j.prototype[a]=function(){return this},h.AsyncIterator=j,h.async=function(t,r,e,n){var o=new j(w(t,r,e,n));return h.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},_(m),m[c]="Generator",m[i]=function(){return this},m.toString=function(){return"[object Generator]"},h.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},h.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function w(t,r,e,n){var o=r&&r.prototype instanceof x?r:x,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=O(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=L(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function L(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function x(){}function E(){}function b(){}function _(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function j(t){var r;this._invoke=function(e,o){function i(){return new Promise(function(r,i){!function r(e,o,i,a){var c=L(t[e],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?Promise.resolve(h.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(h).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}(e,o,r,i)})}return r=r?r.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=L(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")());
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/regenerator.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("config.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var c=(wx.getAccountInfoSync?wx.getAccountInfoSync():{}).miniProgram,n=void 0===c?{}:c,t=n.envVersion||"release",e="https://wxxcx.17u.cn/",o="https://wx.17u.cn";switch(t){case"local":case"develop":e="https://wxxcx.qa.17u.cn/",o="https://wx.t.17u.cn"}module.exports={ENV:t,base:e,USECARURL:"".concat(o,"/car-xcx-gateway/"),version:"".concat(n.envVersion||"unknown","|").concat(n.version||"4.35.32")};
},{isPage:false,isComponent:false,currentFile:'config.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("pages/beckonCar/module/behaviors/commonLogic.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return r.default}});var r=e(require("../../../index/module/behaviors/commonLogic"));
},{isPage:false,isComponent:false,currentFile:'pages/beckonCar/module/behaviors/commonLogic.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("pages/beckonCar/module/behaviors/map.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return r.default}});var r=e(require("../../../index/module/behaviors/map"));
},{isPage:false,isComponent:false,currentFile:'pages/beckonCar/module/behaviors/map.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("pages/beckonCar/module/behaviors/menu.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;e(require("../../../../utils/userInfo")),e(require("../../../../useCar/common/request"));var t=require("../../../../useCar/store/index"),r=Behavior({methods:{calcSwipeH:function(e,t){var r=70+90*e.length,o=t.length;return o&&(r+=248*(o/2>>0+o%2)),r+"rpx"},_reveal:function(){this.setData({menuShowLoading:!0,Height:this.calcSwipeH(this.data.menuList.filter((function(e){return"online"!=e.token&&"phone"!=e.token})),[]),style_mask:"width:100%;background:rgba(0,0,0,.5);",current:0,style_img:"opacity: 0;",isShowPersonPopup:!0});var e=t.store.getState().common;this.traceEvByPage("个人中心弹窗曝光","^个人中心弹窗^".concat(e.refId,"^"),"扬招个人中心")},showPersonPopup:function(){var e=t.store.getState().common;this.traceEvByPage("个人中心点击","^".concat("个人中心点击","^").concat(e.refId,"^"),"扬招个人中心"),this.setData({current:0}),this._reveal()}}});exports.default=r;
},{isPage:false,isComponent:false,currentFile:'pages/beckonCar/module/behaviors/menu.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("pages/beckonCar/module/behaviors/trackEvent.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../../../../@babel/runtime/helpers/defineProperty"),t=require("../../../../useCar/config/index"),r=require("../../../../useCar/common/common"),a=require("../../../../useCar/store/index"),c=require("../../../../useCar/common/business"),n=Behavior({methods:{tracePageHandle:function(e){var t=this.getPageName(e);t&&(0,r.tracePage)(t)},getPageName:function(e){var r={airport:"usecar/index/flight",smallTrain:"usecar/index/train",specialCarIndex:"usecar/index/car"}[e],c=a.store.getState().common.refid||t.kDefaultRefid;return"".concat(r,"?wxrefid=").concat(c)},traceEvByPage:function(){for(var e=a.store.getState().tabInfo.tabIndex,t=this.getPageName(e),c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];n.push(t),r.traceEv.apply(r.traceEv,n)},id2CnName:function(r){var a;return(a={},e(a,t.kProductIds.MEET_AIRPORT,"接机"),e(a,t.kProductIds.SEND_AIRPORT,"送机"),e(a,t.kProductIds.MEET_TRAIN,"接站"),e(a,t.kProductIds.SEND_TRAIN,"送站"),e(a,t.kProductIds.CAR_LATER,"预约"),e(a,t.kProductIds.CAR_NOW,"即时"),e(a,t.kProductIds.RIDE_SHARING,"顺风车"),e(a,t.kProductIds.BACKON_CAR,"扬招"),a)[r]},getEAction:function(e){return this._tcMap||(this._tcMap=(0,c.getTabDescObjFor)("接送机首页","接送站首页","打车首页","扬招首页")),this._tcMap[+e]},traceExposureHandle:function(e,t){var r=this.id2CnName(e),a="^".concat("页面加载","^").concat(r,"^").concat((0,c.getRefId)(),"^"),n=this.getEAction(e);this.traceEvByPage("页面加载",a,n)}}});exports.default=n;
},{isPage:false,isComponent:false,currentFile:'pages/beckonCar/module/behaviors/trackEvent.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("pages/beckonCar/module/business/infoSelecter/tapOperation.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../../../../../useCar/store/index"),t=require("../../../../../useCar/common/common"),s=(require("../../../../../useCar/config/index"),require("../../../../../useCar/common/business")),r=Behavior({data:{showExports:!1,initTime:0},methods:{selectStartAddressForPoi:function(){var e=this.__productId,t=this.data.information||this.data.elements,r=t.startCityId,a=t.startCityName,d=(this.__selectParamsHandle||{})._name||"choosedParams";(0,s.selectAddress)(d,e,r,a,"0","start")},selectStartAddress:function(e){e.currentTarget.dataset.fromCar;var s=this.__productId;switch(s){case 19:var r=wx.yc_carIndexIns||(0,t.getCurPage)();r.data.isRecommend?r.setMode(2):this.selectStartAddressForPoi();break;default:this.selectStartAddressForPoi()}this.ev_handle("上车点点击",s)},selectEndAddress:function(){this.selectEndAddressForPoi(),this.ev_handle("下车点点击",this.__productId)},selectEndAddressForPoi:function(){var t=e.store.getState().common.position,r=this.data.elements,a=this.__productId,d=r.endCityId||r.startCityId||t.cityId,i=r.endCityName||r.startCityName||t.cityName;(0,s.selectAddress)(this.__selectParamsHandle._name,a,d,i,"0","end",r)},ev_handle:function(e){(0,t.traceEv)(e,"^".concat(e,"^").concat((0,s.getRefId)(),"^"),"扬招首页")}}});exports.default=r;
},{isPage:false,isComponent:false,currentFile:'pages/beckonCar/module/business/infoSelecter/tapOperation.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("pages/index/module/behaviors/commonLogic.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../../@babel/runtime/helpers/interopRequireWildcard"),e=require("../../../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("../../../../@babel/runtime/helpers/Arrayincludes");var a=e(require("../../../../@babel/runtime/regenerator")),r=require("../../../../@babel/runtime/helpers/asyncToGenerator"),n=require("../../../../@babel/runtime/helpers/toConsumableArray"),i=require("../../../../@babel/runtime/helpers/objectSpread2"),o=(e(require("../../../../utils/regenerator-runtime")),require("../../../../useCar/common/common")),s=require("../../../../useCar/common/locationUtil"),c=require("../../../../useCar/common/business"),d=require("../../../../useCar/store/index"),u=t(require("../../../../useCar/store/actions/index")),l=e(require("../../../../useCar/common/request")),p=require("../../../../useCar/config/index"),m=require("../../../../useCar/common/init"),h=require("../../../../useCar/common/map/mapUtil"),g=require("../../../../useCar/services/commonReqs"),f=require("../../../../useCar/util/tool"),y=require("../../../../utils/locationUtils"),I=require("../../../../useCar/common/pickupSpotEvaluator"),v=t(require("../../../../useCar/util/logger")),C=1,P=Behavior({attached:function(){this.logicId=C++,this.setParamsTool({hint:""}),this.setData({defaultTime:(0,o.defaultDate)().day}),this.mapMoveToLocation=(0,o.debounce)(this.mapMoveToLocation,25),this.updateNearByCar=(0,o.debounce)(this.updateNearByCar,100)},observers:{pageMode:function(t){0==t&&this.hideWithoutRecAlert()}},data:{dragPendingTasks:[]},methods:{getProdName:function(){var t=this.__productId||this.data.productId||d.store.getState().productId;return Object.assign({},p.kProductNameMap,{11:"预约"})[t]},trackerCommon:function(t,e){Array.isArray(e)||(e=[e]);var a=(0,c.getRefId)(),r=[this.getProdName(),a].concat(e),n="打车首页";130===(this.__productId||d.store.getState().productId)&&(n="扬招首页"),(0,o.getCurPage)().route.indexOf("/immediateCar/immediateCar")>-1&&(n="上车点"),(0,o.traceEv)(t,"^"+r.join("^")+"^",n)},_trackConfirmStart:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=this.data.information||this.data.elements,r=a.startAddress,n=this._initParam||{},i=this.data.isRecommend?"场站":"普通",s=this.data.nearbyCarMarkers||[],d=e.pageName||"打车首页",u=function(e){(0,o.traceEv)("确认上车点",["^确认上车点",(0,c.getRefId)(),n.startAddress,r,t.getProdName(),t.nearbyCarCount,e.length,i].join("^")+"^",d)};this.getMapRegion().then((function(t){var e=s.filter((function(e){return(0,o.isLngLatInBounds)(e,t)}));u(e)})).catch((function(t){u([])}))},isCar:function(t){return 11==(t=t||this.data.productId||this.__productId||d.store.getState().productId)||19==t||80==t},setStartCity:function(t){var e=d.store.getState().common.position,a=e.cityId,r=e.cityName,n=function(){return!!(0,c.getParamsFor)(t).startAddress},i=function(e){var a={CityId:e.cityId,CityName:e.cityName},r=(0,c.createTargetParam)(a,t,"start");n()||this.setParamsTool(r)}.bind(this);n()||(a&&r?i({cityId:a,cityName:r}):(0,s.getLocationInfo)({timeout:1e4}).then(i).catch((function(t){(0,m.setPositionFail)(),console.error(t)})))},getReducerFor:function(t){return(0,c.getReducerFor)(t)},getParamsFor:function(t){return(0,c.getParamsFor)(t)},syncProductId:function(t){d.store.dispatch({type:u.SET_PRODUCTID,payload:t})},getDepSelection:function(t,e,a){var r={productId:d.store.getState().productId,cityId:t,cityName:e,endCityId:(a=a||{})&&a.endCityId,airport:a&&a.airport,train:a&&a.train,date:a&&a.date?"".concat(a.date,":00"):"",location:a&&a.location,startAddress:a.startAddress||"",useTime:a.useTime||""};return l.default.post("".concat(p.kCarApiGateWay,"traffic/api/basic/history/poi/"),r,{})},getMapContext:function(t){var e=this,a=t||this.mapSelector||"indexMapId";return new Promise((function(t,r){if(e.mapInstance)return t(e.mapInstance);setTimeout((function(){var n=wx.createSelectorQuery().in(e);n.select("#".concat(a)).context((function(a){a?(e.mapInstance=a.context,t(e.mapInstance)):r()})),n.exec()}))}))},getStation:function(t){var e="internalcarrainbowap.gettrainstationlist",a=i({cityName:t},{ref:"trainTab"}),r={interfaceid:e,isNeedLoading:!1};return l.default.post("car-inter-h5/ajax/getData/"+e,a,r)},getSubPOI:function(t){var e="internalcarrainbowap.getSubPoiList",a={poiName:t},r={interfaceid:e,isNeedLoading:!1};return l.default.post("car-inter-h5/ajax/getData/"+e,a,r)},overMapPending:function(){var t=this;this.setData({mapPending:3}),setTimeout((function(){3===t.data.mapPending&&t.setData({mapPending:0})}),600)},markerClickHandle:function(t){var e=t.marker,a=t.detail.markerId,r=this.data.spotMarkers||[],n=e||r.find((function(t){return t.id===a}));if(n&&n.label&&n.label.content){var i={lat:+n.latitude,lng:+n.longitude,name:n.label.content},o=i.lat,s=i.lng;this.mapMoveToLocation(o,s),this.applyNewAddr(i,{source:"mapMarker",adsorb:!1})}},dispatchRecSpot:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;if(["poiSelect"].includes(e.source))d.store.dispatch({type:u.SET_REC_SPOT_LIST,payload:n(t)});else{var r=+(this.__productId||this.data.productId||d.store.getState().productId);if((0,c.isTaxi)(r)){Array.isArray(t)&&t.forEach((function(t){return t.absorb=!1}));var i=null;if(!1!==e.adsorb){var o=a||{},s=o.betterPickupSpots;s&&(i=s)}try{(0,I.evalHandle)(e,a)}catch(t){console.error(t)}return e.absorb=!!i,i&&(i.absorb=!0,Object.assign(e,{sourcePrev:e.source,source:"mapMarkerAbsorb"})),d.store.dispatch({type:u.SET_REC_SPOT_LIST,payload:n(t)}),i}console.error("非打车业务，调用逻辑错误")}},cleanRecSpot:function(){d.store.dispatch({type:u.SET_REC_SPOT_LIST,payload:[]})},setMapDragText:function(t){this.setData({mapDragText:t})},setParamsTool:function(t,e){e=e||this.data.productId||d.store.getState().productId;var a=this.getReducerFor(e);if(a){var r=a(t);d.store.dispatch(r)}},getStartAndEndEle:function(){var t=d.store.getState(),e=this.__productId||this.data.productId||t.productId;return(0,c.getParamsFor)(e,t)},resetLocationHandle:function(t,e){var a=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};t=t||d.store.getState().productId;var n,c=wx.getStorageSync("yc_car_wx_location");return(0,o.privacyAuthorization)(1===r.clickType).then((function(e){return e?(a.isCar(t)&&(c?(a.setData({mapPending:1}),n=setTimeout((function(){a.setData({mapCenter:{lat:c.latitude,lng:c.longitude}})}),300)):a.setData({mapPending:2,mapPendingTime:Date.now()})),(0,s.getSysLocation)()):Promise.reject(new Error("privacy_auth_fail"))})).then((function(t){return c=i(i({},t),{},{timestamp:Date.now()}),wx.setStorage({key:"yc_car_wx_location",data:c}),clearTimeout(n),a.isCar()&&(a.setData({mapCenter:{lat:t.latitude,lng:t.longitude}}),1===r.clickType&&a.setMapScale(17),2!==a.data.mapPending&&a.setData({mapPending:2,mapPendingTime:Date.now()})),t})).then((function(e){return a.applyNewLatLnt({latLng:e,source:"mapLocation",logicId:a.logicId,productId:t})})).then((function(){setTimeout((function(){var t=[a.data.poiName,a.data.isRecommend?"场站":"普通"];1==r.clickType?a.trackerCommon("点击定位",t):a.trackerCommon("自动定位",t)}),150)})).catch((function(t){var n="位置获取失败";if(!(t&&String(t.errMsg).indexOf("abort")>-1)){if(t&&"privacy_auth_fail"===String(t.message)&&(n="定位失败",1===r.clickType))throw t;throw t&&t.errMsg&&t.errMsg.indexOf("auth")>-1&&(n="定位失败，请开启位置授权"),a.setData({mapPending:1}),"function"==typeof e&&e({message:n}),t&&(0,o.traceEv)("reset_location_err",t instanceof Error?t.stack.toString():JSON.stringify(t)),t}}))},stopLocation:function(){(0,y.offLocationChange)()},mapMoveToLocation:function(t,e){var a=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};t&&e?(0,o.privacyAuthorization)(!1).then((function(n){n?a.mapInstance&&a.mapInstance.moveToLocation(i({longitude:e,latitude:t,complete:function(){r&&r.complete&&r.complete(),a.setData({mapCenter:{lat:t,lng:e}})}},r)):a.setData({mapCenter:{lat:t,lng:e}},(function(){r&&r.complete&&r.complete()}))})):console.warn("mapMoveToLocation 坐标为空",t,e)},setMapScale:function(t){this.setData({mapScale:t})},syncProductIdForToken:function(t){this.syncProductId(p.kProductIds[t]||19)},syncProductIdForTab:function(t){var e=d.store.getState().tabInfo.subTabs[t][0].tabToken;this.syncProductId(p.kProductIds[e]||19)},showRecFence:function(t,e,a){var r,n=this;if(!t.is_recommend)return this.setMode(0),this.showWithoutRecFence(),null;(0,f.isNil)(e)&&(e=t.areaIndex||0),(0,f.isNil)(a)&&(a=t.poiIndex||0);var o=t.data_list,s=t.tag,c=t.data_info,d=2;if(o.length){var u=o[e]||{},l=u.poi_list;a>=l.length&&(a=l.length-1),this.showPoly(u.polygon),(r=u.poi_list[a]).name=r.poi_name||u.name+"-"+r.function_area,r.displayname=u.displayname}else c.length&&(1==c.length&&(d=3),this.showPoly([]),r=c[0]);this.recData=t,this.recIndex=e;var p=r.poi_name,m={lat:+r.lat,lng:+r.lng},h={id:"kRecMarkerId",latitude:m.lat,longitude:m.lng,iconPath:"https://pic5.40017.cn/i/ori/14W74lxdjSo.jpg",anchor:{x:.5,y:.5},width:"18rpx",height:"18rpx",zIndex:10},g=r.hint||"为您推荐".concat(r.displayname||r.name||"","的最佳上车点");r.hint=g;var y={poiId:t.poi_id,areaIndex:t.areaIndex,recPoiName:p,poiInfo:r,recMarker:h};"number"==typeof r.scale&&this.setMapScale(r.scale),this.data.isRecommend&&this.data.isDrag&&Object.assign(y,{isAlertRec:!0}),this.data.isRecommend!==!!t.is_recommend&&Object.assign(y,{pageMode:d,isRecommend:!!t.is_recommend}),this.setData(y),this.setMode(d),clearTimeout(this.moveCenterTid),this.moveCenterTid=setTimeout((function(){n.mapMoveToLocation(m.lat,m.lng,{success:function(){n.updateNearByCar(i(i({},m),{},{cityId:r.city_id}))}})})),this.preRecCenter=i({},m);var I=s?"train"==s?"火车站区域最佳上车点":"机场区域最佳上车点":"";this.recPoi={hint:g,startAddress:r.name||r.address,startAddressDetail:r.address_all,startCityId:r.city_id,startCityName:r.city_name,startLatitude:r.lat,startLongitude:r.lng,startPoiName:r.poiName,pointShowText:I},this.setStartParamsForAddr(r,{source:"mapFence"}),this.trackerCommon("展示场站围栏",r.displayname||r.name)},showWithoutRecFence:function(){this.data.isRecommend&&this.setData({isRecommend:!1,poly:[],pageMode:0})},hideWithoutRecAlert:function(){this.setData({isAlertRec:!1})},cancelDragPendingTask:function(){clearInterval(this.checkMapAniEndTid),clearTimeout(this.overTimer),this.data.dragPendingTasks.forEach((function(t){t.__requestTask&&t.__requestTask.abort()})),this.data.dragPendingTasks=[]},checkGeoFence:function(t){var e=this.data,a=e.poly,r=e.isRecommend,n=(0,f.isEmpty)(a)?null:a[0].points;return!wx.tcyc.__recClose&&r&&(0,h.isPointInPolygon)(t,n)?(this.mapMoveToLocation(this.preRecCenter.lat,this.preRecCenter.lng),this.setData({isAlertRec:!0}),this.setMode(2),!0):(this.setData({isAlertRec:!1}),!1)},updateNearByCar:function(t){var e=this;return r(a.default.mark((function r(){var n,i,s,c;return a.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=19==+e.__productId,i=e.mapInstance,!n||!i){a.next=12;break}return a.next=5,(0,o.wx_promising)(i.getScale);case 5:return s=a.sent,a.next=8,e.refreshNearByCar(+t.lng,+t.lat,t.cityId,s.scale);case 8:c=a.sent,e.setData({nearbyCarMarkers:c.markers||[]}),a.next=13;break;case 12:e.setData({nearbyCarMarkers:[]});case 13:case"end":return a.stop()}}),r)})))()},dealWithStartLatLnt:function(t,e){var a=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n={};this.data.dragPendingTasks.push(n);var s=this.data,c=s.pageType,l=s.productId,p="mapLocation"===r.source?1:0;return(0,o.geocoder)({longitude:e,latitude:t,pageType:c,productId:l,queryType:p},n).then((function(o){if((0,f.remove)(a.data.dragPendingTasks,(function(t){return t===n})),"mapLocation"===r.source&&(d.store.dispatch({type:u.SET_MY_POSITION,payload:o}),(0,v.updateLoc)(t,e,o.cityId,o.cityName)),!a.isCar(r.productId))return o;var s=o.pickupSpotsNew||[],c=v.default.bl("plrc",r.source,"".concat(e,",").concat(t)),l=a.dispatchRecSpot(s,r,o);if(l&&(t=l.lat,e=l.lng,Object.assign(o,i({},l),{source:r.source})),setTimeout((function(){s.forEach((function(t){var e=!!l&&(t.lat===l.lat&&t.lng===l.lng);c.add(e?"1":"0",i(i({},t),{},{ab:o.pickUpAbTest,hint:""}))})),c.send()}),0),r.logicId&&r.logicId!==a.logicId)a.setData({mapCenter:{lat:t,lng:e}});else if(!String(r.source).startsWith("map")||["mapMarkerAbsorb"].includes(r.source)){var p=a.moveCenterInit?0:550;a.moveCenterInit=!0,a.moveCenterTid=setTimeout((function(){a.mapMoveToLocation(+t,+e)}),p)}return a.updateNearByCar(o),o}))},dealWithStartAddr:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.isCar(a.productId)){if(wx.tcyc.__recClose||wx.tcyc.__fromCommonAddress)return this.setStartParamsForAddr(t,a),this.showWithoutRecFence(),wx.tcyc.__fromCommonAddress=void 0,Promise.resolve(null);var r={};return this.data.dragPendingTasks.push(r),(0,g.getPoiInfo)(t.cityId,t.name,t.lat,t.lng,r).then((function(n){return(0,f.remove)(e.data.dragPendingTasks,(function(t){return t===r})),e.onRecData?e.onRecData({detail:n}):e.showRecFence(n),n.is_recommend||e.setStartParamsForAddr(t,a),wx.tcyc.__fromCommonAddress=void 0,n}))}this.setStartParamsForAddr(t,a)},applyNewLatLnt:function(){var t=arguments,e=this;return r(a.default.mark((function r(){var n,s,c,u,l,p,m;return a.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:{},s=n.productId||e.data.productId||e.__productId||d.store.getState().productId,c=e.mapInstance,u=function(){return n.latLng?Promise.resolve(n.latLng):(0,o.wx_promising)(c.getCenterLocation)},l=n.source,a.next=7,u();case 7:if(p=a.sent,"mapDrag"!==l||!e.checkGeoFence(n.latLng)){a.next=11;break}return e.setData({mapPending:0}),a.abrupt("return",!1);case 11:return a.next=13,e.dealWithStartLatLnt(p.latitude,p.longitude,i(i({},n),{},{productId:s}));case 13:return m=a.sent,a.next=16,e.dealWithStartAddr(m,i(i({},n),{},{productId:s}));case 16:setTimeout((function(){e.overMapPending()}));case 17:case"end":return a.stop()}}),r)})))()},applyNewAddr:function(t){var e=arguments,n=this;return r(a.default.mark((function r(){var o,s,c,u,l,p,m;return a.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=e.length>1&&void 0!==e[1]?e[1]:{},s=o.productId||n.data.productId||n.__productId||d.store.getState().productId,c=o.source,String(c).startsWith("map")||n.setMapScale(17),u=t.lat,l=t.lng,n.isCar(s)&&n.setData({mapPending:2,mapPendingTime:Date.now()}),a.next=8,n.dealWithStartLatLnt(u,l,i(i({},o),{},{productId:s}));case 8:return p=a.sent,m=i({},p),t.name&&(m.name=t.name),a.next=13,n.dealWithStartAddr(m,i(i({},o),{},{productId:s}));case 13:n.overMapPending();case 14:case"end":return a.stop()}}),r)})))()},setStartParamsForAddr:function(t){var e,a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(r.source,r.productId||this.data.productId||this.__productId);t.startCityId&&t.startAddress?a=Object.assign({},t,{startSource:r.source}):(e=(0,o.location2Param)(Object.assign({},t,r)),a=(0,c.createTargetParam)(e,n,"start"));var s=t.hint||"",d=a.startAddress||"",u={poiNameLines:(0,o.breakerLine2)(d,12),poiName:d,hint:s};t.startPositionId;this.isCar(n)&&this.setData(u),this.setParamsTool(i(i({},a),{},{startLogicId:this.logicId,hint:s}),n)},showPoly:function(t){t=t.map((function(t){return t.lat?{latitude:t.lat,longitude:t.lng}:t})),this.setData({poly:[{points:t,strokeWidth:1,strokeColor:"#0DD66CFF",fillColor:"#27CE6220"}]})},setMode:function(t){this.setData({pageMode:t})},refreshNearByCar:function(t,e,a,r){var n=this;return new Promise((function(i){if(!t||!e)return i({});r=r||15;var o={};n.data.dragPendingTasks.push(o),l.default.postQC("nearby/carinfo",{lng:+t,lat:+e,zoom:r,cityId:""+a},{isShowErrMsg:!1},o).then((function(t){if((0,f.remove)(n.data.dragPendingTasks,(function(t){return t===o})),200!=t.status||!t.body||!t.body.carInfoList||!t.body.carInfoList.length)return i({markers:[],carTips:"",carCount:0});var e=t.body.carInfoList,a=[];e.forEach((function(e,r){a.push({customCallout:{},id:100+r,iconPath:t.body.carIcon||"https://file.40017.cn/groundtrafficstage/usecar/usecar/caricon/car.png",width:40,height:40,anchor:{x:.5,y:.5},label:"",zIndex:1,latitude:e.lat,longitude:e.lng,rotate:e.bearing})})),a.length&&i({markers:a})})).catch((function(t){i({})}))}))},noop:function(){}}});exports.default=P;
},{isPage:false,isComponent:false,currentFile:'pages/index/module/behaviors/commonLogic.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("pages/index/module/behaviors/couponTips.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../../../../useCar/lib/reselect"),e=require("../../../../useCar/config/index"),r=require("../../../../useCar/store/index"),o=require("../../../../useCar/common/common"),c=Behavior({methods:{_bindCouponTips:function(){var t=this._createTipsList();(0,r.bindState)(this,{info:"common.indexCouponTips",tipList:t,__refid:"common.refid",__productid:"productId"})},_trackExpose:function(){var t=this;if(!this.__alredayExpose){var e=this.id2CnName(this.__productid);this.__refid&&e?(this.traceEvByPage("通知栏曝光","^".concat("通知栏曝光","^").concat(this.__refid,"^").concat(e,"^"),"打车首页"),this.__alredayExpose=!0):setTimeout((function(){t._trackExpose()}),200)}},_createTipsList:function(){var e=this;return(0,t.createSelector)((function(t){return t.common.indexCouponTips}),(function(t){var r=[{txt:(t=t||{}).couponTxt,reduce:t.maxReduce,icon:t.couponIcon,sfcTxt:t.sfcCouponTxt||"",url:"/useCar/coupon/coupon",type:"cpe"}].filter((function(t){return t.txt}));return r&&r.length&&e._trackExpose(),r}))},toSeaLabel:function(t){var r=t.target.dataset||{},c=r.url,i=r.reduce;if(c){(0,o.openUrl)({jumpUrl:c});var a,n=this.__productId;a=11==n||19==n||80==n?"打车首页":"接送"+(n>13?"站":"机")+"首页",(0,o.traceEv)("优惠券标签点击","^优惠券标签点击^".concat(e.kProductNameMap[n],"^").concat(this.__refid,"^").concat(i,"^"),a)}},toSea:function(t){var r=t.target,c=t.currentTarget.dataset||{},i=r.dataset||{},a=i.url,n=i.type;if(a){(0,o.openUrl)({jumpUrl:a});var s=this.__productId,u="接送"+(s>13?"站":"机")+"首页";if("jiesong"!=c.type){var d=this.id2CnName(this.__productid),p={cpp:"售券入口",cpe:"优惠提醒入口"}[n];this.traceEvByPage("通知栏点击","^".concat("通知栏点击","^").concat(this.__refid,"^").concat(d,"^").concat(p,"^"),"打车首页")}else(0,o.traceEv)("优惠券入口点击","^优惠券入口点击^".concat(e.kProductNameMap[s],"^").concat(this.__refid,"^"),u)}}}});exports.default=c;
},{isPage:false,isComponent:false,currentFile:'pages/index/module/behaviors/couponTips.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("pages/index/module/behaviors/main.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/interopRequireWildcard"),t=require("../../../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;t(require("../../../../utils/regenerator-runtime"));var a=require("../../../../useCar/store/index"),r=e(require("../../../../useCar/store/actions/index")),n=require("../../../../useCar/config/index"),o=require("../../../../useCar/common/init"),s=Behavior({data:{productIdReady:!1},attached:function(){(0,a.bindState)(this,{tabList:"tabInfo.tabList",tabIndex:"tabInfo.tabIndex",subtab:"tabInfo.subtab",subtabIndex:"tabInfo.subtabIndex"})},detached:function(){},methods:{getMainData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(s,i){var d=a.store.getState().tabInfo;if(!d||!d.tabList.length){var c=wx.getStorageSync("usecar.tabList");if(c=c||n.DEFAULT_TABINFO){a.store.dispatch(r.setTabList(c));var u=(c||{}).subTabs;e.syncProductIdForToken(u.specialCarIndex[0].tabToken)}}if(t.btype&&t.stype){var b=t.btype,p=t.stype;a.store.dispatch({type:r.SET_TABINDEX,payload:{tabIndex:b,currentTab:p}}),e.syncProductIdForToken(p)}(0,o.refreshTabList)({cacheFirst:!0}).then((function(n){var o=t.btype||n.tabIndex,i=t.stype||n.currentTab;a.store.dispatch({type:r.SET_TABINDEX,payload:{tabIndex:o,currentTab:i}}),e.syncProductIdForToken(i),e.tracePageHandle(o),e.syncProductIdForToken(i),s()})).catch((function(t){c||(a.store.dispatch(r.setTabList(n.DEFAULT_TABINFO)),e.syncProductIdForToken("CAR_NOW")),e.setData({productIdReady:!0}),e.traceEvByPage("car-debug","^getTablist^fail^".concat(c?"cache":"default","^"),"首页"),console.error("getMainData err",t),s(t)}))}))}}});exports.default=s;
},{isPage:false,isComponent:false,currentFile:'pages/index/module/behaviors/main.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("pages/index/module/behaviors/map.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../../../../@babel/runtime/helpers/objectSpread2"),n=(t(require("../../../../utils/regenerator-runtime")),t(require("../../../../useCar/common/map"))),i=require("../../../../useCar/common/common"),a=require("../../../../useCar/store/index"),r=require("../../../../useCar/common/business"),o=t(require("../behaviors/commonLogic")),s=require("../../../../useCar/common/impact"),u=require("../../../../useCar/config/index"),c=require("../../../../useCar/common/init"),d=require("../../../../useCar/util/tool"),g=10100,l=Behavior({behaviors:[o.default],data:{mapPending:void 0},created:function(){},attached:function(){this.setupMap(this.data.mapId||"indexMapId")},methods:{getCurPid:function(){return a.store.getState().productId},initMap:function(t){var e=this;this.mapInstance||setTimeout((function(){var t=wx.createSelectorQuery().in(e);t.select("#indexMapId").context((function(t){e.mapInstance=t.context})),t.exec()}))},setupMap:function(t,e){this.initMap(t);var a=this.map;a||(a=new n.default(e)),this.map=a,this.dragEndMap=(0,i.debounce)(this.dragEndMap,50),this.regionChangeEnd=(0,i.debounce)(this.regionChangeEnd,100)},getMapRegion:function(){var t=this;return new Promise((function(e){t.mapInstance.getRegion({complete:function(t){e({northeast:t.northeast,southwest:t.southwest})}})}))},regionChange:function(t){var e=this;if(-1==[12,14].indexOf(this.data.productId))if("touchstart"===t.type&&t.touches.length>=2)this._gestureType="multipointStart";else{if("touchend"!==t.type||"multipointStart"!==this._gestureType)return"end"===t.type&&"scale"===t.causedBy?(this._regionDragBegin=0,this.setData({mapPending:0}),void this.setMapScale(t.detail.scale)):"begin"===t.type&&"gesture"===t.causedBy&&"multipointStart"!==this._gestureType?(this.data.mapPending&&this.cancelDragPendingTask(),this.setData({mapPending:1}),this.data.dragTime=(new Date).getTime(),this.data.isDrag=!0,void(this._regionDragBegin=1)):"end"===t.type&&this._regionDragBegin?(this._regionDragBegin=0,void setTimeout((function(){(0,i.wx_promising)(e.mapInstance.getCenterLocation).then((function(t){e.regionChangeEnd(t)}))}),60)):"touchend"===t.type&&this._regionDragBegin&&!(0,i.isIphoneIos)()?(this._regionDragBegin=0,void this.checkMapAniEndAsync().then((function(t){e.regionChangeEnd(t)}))):void 0;if(this._gestureType=null,this._regionDragBegin){var n=this.mapInstance;(0,i.wx_promising)(n.getScale).then((function(t){return e.setMapScale(t)}))}}},regionChangeEnd:function(t){var n=this;if(2!==this.data.mapPending){this.setData({mapPending:2,mapPendingTime:Date.now()}),this.setData({mapCenter:{lat:t.latitude,lng:t.longitude}});var i=e({},this.getStartAndEndEle());this.dragEndMap({latLng:t},(function(){n.data.isDrag=!1;var t=n.getStartAndEndEle(),e=[n.data.isRecommend?"场站":"普通",i.startAddress,t.startAddress];n.trackerCommon("拖动地图",e)}))}},checkMapAniEndAsync:function(){var t=this;return new Promise((function(e){var n;clearInterval(t.checkMapAniEndTid),t.checkMapAniEndTid=setInterval((function(){(0,i.wx_promising)(t.mapInstance.getCenterLocation).then((function(i){var a=i.latitude?[i.latitude,i.longitude].join(","):null;if(a&&n===a)return clearInterval(t.checkMapAniEndTid),void e(i);n=a}))}),500)}))},imd_regionChange:function(t){this.regionChange(t)},toScreenLocation:function(t){var e=this;this._recSpotArray=[];var n=t.map((function(t){return new Promise((function(n){e.mapInstance.toScreenLocation({latitude:t.latitude,longitude:t.longitude,success:function(e){n(Object.assign({},t,e))},fail:function(){n(null)}})}))}));return Promise.all(n)},toBePixelAbsord:function(t,e){var n=this;return new Promise((function(a,r){var o,s=n.data.spotMarkers,u=setTimeout(r,1e3);n.toScreenLocation(s).then((function(a){return o=a,(0,i.wx_promising)(n.mapInstance.toScreenLocation,{latitude:t,longitude:e})})).then((function(t){var e={d:10,p:null},i=o.reduce((function(e,n){var i,a,r=(a=n,(i=t)&&a?Math.sqrt(Math.pow(i.x-a.x,2)+Math.pow(i.y-a.y,2)):null);return null!==r&&r<=e.d&&(e={d:r,p:{latitude:n.latitude,longitude:n.longitude}}),e}),e).p;i?(n.mapMoveToLocation(i.latitude,i.longitude),a({latLng:i})):r()})).catch(r).finally((function(){o=null,clearTimeout(u),u=null}))}))},dragEndMap:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.toBePixelAbsord(e.latLng.latitude,e.latLng.longitude).then((function(e){t.dragToLatLng(e,n)})).catch((function(){t.dragToLatLng(e,n)}))},dragToLatLng:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.applyNewLatLnt(e(e({},n),{},{source:"mapDrag",logicId:this.logicId})).then((function(){"function"==typeof i&&i()})).catch((function(e){String(e.errMsg).indexOf("abort")>-1||(t.cleanRecSpot(),(0,c.setPositionFail)())}))},getRecSpotMarkers:function(t,n){var i,a=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(t.slice(-1)[0]||{}).isCenter&&(i=t.pop()),r.lat&&r.lng&&(t=t.map((function(t){return e(e({},t),{},{absorbed:t.lat==(0,d.cutFixed)(r.lat,6)&&t.lng==(0,d.cutFixed)(r.lng,6)})})));var o=(0,s.filterRect)(t,n);this.showMarkers=[];var c=o.map((function(t){var n=g++,i=t.data;a.showMarkers.push(e(e({},i),{},{id:n}));var r=i.absorbed?void 0:{content:i.name,fontSize:12,color:"#00b670",anchorX:10,anchorY:-15,padding:3,borderWidth:.5,bgColor:"#FFFFFF",borderColor:"#e4e4e4",borderRadius:20};return{id:n,latitude:i.lat,longitude:i.lng,label:r,zIndex:100,iconPath:u.kImgPrefix+"iconGet-on-the-bus-0917.png",width:12,height:12,anchor:{x:.5,y:.5}}}));return i&&c.push(i),c},getInitMapCenter:function(t){t=t||this.getCurPid();var e,n=a.store.getState(),i=(0,r.getParamsFor)(t,n),o=n.common.position,s=i||{},u=s.startLatitude,c=s.startLongitude,d=o.lat,g=o.lng;return{lat:+(e=this._menuIns._mapCenterForLocation?{lat:d,lng:g,cityId:o.cityId}:{lng:c||g||116.40717,lat:u||d||39.90469,cityId:i.startCityId}).lat,lng:+e.lng}}}});exports.default=l;
},{isPage:false,isComponent:false,currentFile:'pages/index/module/behaviors/map.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("pages/index/module/behaviors/menu.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("../../../../@babel/runtime/helpers/Arrayincludes");var t=e(require("../../../../@babel/runtime/regenerator")),r=require("../../../../@babel/runtime/helpers/asyncToGenerator"),n=e(require("../../../../utils/userInfo")),i=e(require("../../../../useCar/common/request")),o=require("../../../../useCar/store/index"),a=require("../../../../useCar/config/index"),u=require("../../../../useCar/common/common"),c=Behavior({methods:{calcSwipeH:function(e,t){var r=70+90*e.length,n=t.length;return n&&(r+=248*(n/2>>0+n%2)),r+"rpx"},_bindData:function(){var e=this;n.default.getUnionidPromise().then((function(n){var c=n.memberid,s={unionId:n.unionid,memberId:c,platForm:"xcx",userCarNewVersion:1};return i.default.post("".concat(a.kCarApiGateWay,"quickcar/home/geyMemberCenter"),s,{isNeedLoading:!1,isShowErrMsg:!1}).then(function(){var n=r(t.default.mark((function r(n){var i,a,c,s,d,l,f,p,m,h;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(200!=n.status){t.next=13;break}return i=n.body,a=i.menuList,c=i.activityList,s=e.data.serviceList,d=s.map((function(e){var t=a.filter((function(t){return t.token===e.token}));return t&&t.length>0&&(e.embedded=t[0].embedded),e})),t.next=6,(0,u.privacyAuthorization)(!1);case 6:l=t.sent,f=[],f=l?a:a.filter((function(e){return!["invoiced","service","feedback"].includes(e.token)})),e.setData({menuList:f.filter((function(e){return"online"!=e.token&&"phone"!=e.token})),activityList:c,serviceList:d,menuShowLoading:!0,Height:e.calcSwipeH(f.filter((function(e){return"online"!=e.token&&"phone"!=e.token})),c),style_mask:"width:100%;background:rgba(0,0,0,.5);",current:0,style_img:"opacity: 0;",isShowPersonPopup:!0}),"个人中心弹窗点击",p=o.store.getState(),m=p.productId,h=p.common,e.traceEvByPage("个人中心弹窗点击","^".concat("个人中心弹窗点击","^").concat(m,"^").concat(h.refId,"^"),"打车首页");case 13:case"end":return t.stop()}}),r)})));return function(e){return n.apply(this,arguments)}}())})).catch((function(){e._reveal()}))},_reveal:function(){this.setData({menuShowLoading:!0,Height:this.calcSwipeH(this.data.menuList.filter((function(e){return"online"!=e.token&&"phone"!=e.token})),[]),style_mask:"width:100%;background:rgba(0,0,0,.5);",current:0,style_img:"opacity: 0;",isShowPersonPopup:!0})},showPersonPopup:function(){var e=this;return r(t.default.mark((function r(){var n,i,a;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"个人中心弹窗点击",n=o.store.getState(),i=n.productId,a=n.common,e.traceEvByPage("个人中心弹窗点击","^".concat("个人中心弹窗点击","^").concat(i,"^").concat(a.refId,"^"),"打车首页"),e.setData({current:0}),e._bindData();case 5:case"end":return t.stop()}}),r)})))()}}});exports.default=c;
},{isPage:false,isComponent:false,currentFile:'pages/index/module/behaviors/menu.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("pages/index/module/behaviors/trackEvent.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../../../../@babel/runtime/helpers/defineProperty"),t=require("../../../../useCar/config/index"),r=require("../../../../useCar/common/common"),a=require("../../../../useCar/store/index"),c=require("../../../../useCar/common/business"),n=Behavior({methods:{tracePageHandle:function(e){var t=this.getPageName(e);t&&(0,r.tracePage)(t)},getPageName:function(e){var r={airport:"usecar/index/flight",smallTrain:"usecar/index/train",specialCarIndex:"usecar/index/car"}[e],c=a.store.getState().common.refid||t.kDefaultRefid;return"".concat(r,"?wxrefid=").concat(c)},traceEvByPage:function(){for(var e=a.store.getState().tabInfo.tabIndex,t=this.getPageName(e),c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];n.push(t),r.traceEv.apply(r.traceEv,n)},id2CnName:function(r){var a;return(a={},e(a,t.kProductIds.MEET_AIRPORT,"接机"),e(a,t.kProductIds.SEND_AIRPORT,"送机"),e(a,t.kProductIds.MEET_TRAIN,"接站"),e(a,t.kProductIds.SEND_TRAIN,"送站"),e(a,t.kProductIds.CAR_LATER,"预约"),e(a,t.kProductIds.CAR_NOW,"即时"),e(a,t.kProductIds.RIDE_SHARING,"顺风车"),e(a,t.kProductIds.BACKON_CAR,"扬招"),a)[r]},getEAction:function(e){return this._tcMap||(this._tcMap=(0,c.getTabDescObjFor)("接送机首页","接送站首页","打车首页")),this._tcMap[+e]},traceExposureHandle:function(e,t){var r=this.id2CnName(e),a="^".concat("页面加载","^").concat(r,"^").concat((0,c.getRefId)(),"^A|20210906_carindexstartend^"),n=this.getEAction(e);this.traceEvByPage("页面加载",a,n)}}});exports.default=n;
},{isPage:false,isComponent:false,currentFile:'pages/index/module/behaviors/trackEvent.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("pages/index/module/business/infoSelecter/quickChoose.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../../@babel/runtime/helpers/interopRequireWildcard"),t=require("../../../../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("../../../../../@babel/runtime/helpers/Arrayincludes");var n=t(require("../../../../../@babel/runtime/regenerator")),a=require("../../../../../@babel/runtime/helpers/asyncToGenerator"),r=require("../../../../../@babel/runtime/helpers/objectSpread2"),o=require("../../../../../@babel/runtime/helpers/defineProperty"),i=(t(require("../../../../../utils/regenerator-runtime")),require("../../../../../useCar/config/index")),c=(require("../../../../../useCar/common/common"),require("../../../../../useCar/common/business")),s=require("../../../../../useCar/store/index"),u=t(require("../../behaviors/trackEvent")),d=(require("../../../../../useCar/services/AddressService"),t(require("../../../../../utils/userInfo")),t(require("../../../../../useCar/common/request"))),l=t(require("../../../../../util/util")),m=t(require("../../../../../useCar/common/localStore")),h=e(require("../../../../../useCar/util/getChannelUrl")),f=t(require("../../../../../util/tcUtil")),p=require("../../../../../useCar/common/locationUtil"),g=function(e){var t={},g={2:"家",1:"公司"};function y(e){var t=e.type,n=e.name;this.traceEvByPage("常驻组件点击",["",g[t]||"常用地址",n||"未设置",n?"点击":"设置",(0,c.getRefId)(),"A|20210906_carindexstartend",""].join("^"),this.getEAction(this.__productId))}function k(e){this.$setData(o({},e,{}))}return Behavior({behaviors:[u.default],data:{quickChoose2Start:[],quickChoose2End:[]},attached:function(){var t=this;e.on("kSetHistory",(function(e){var n=t.__productId,a=e.cityName,r=e.cityId;t.setEndQuick(n,a,r)})),e.on("tapSubTab",(function(e){})),m.default.chooseCompanyHomeCallback=function(e){this.onSelCommonAddress(e)}.bind(this)},detached:function(){e.off("kSetHistory"),e.off("tapSubTab")},pageLifetimes:{show:function(){m.default.chooseCompanyHomeCallback=function(e){this.onSelCommonAddress(e)}.bind(this)}},methods:{_updateQc:function(e,t,n,a){this.$setData(o({},e,r({list:n,type:t},a)))},setEndQuick:function(e,t,r,o,c){var s=this;return a(n.default.mark((function a(){var u,d,m,h,f,g;return n.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(u=function(){var t=i.kProductIds.SEND_TRAIN==e&&o,n=s.__selectTicket,a=s.__productId!=e;if(((15==e||13==e)&&n||a)&&(t=1),t)return k.call(s,"quickChoose2End"),1})()){n.next=3;break}return n.abrupt("return");case 3:if(n.prev=3,d=null,!c){n.next=20;break}if(!c.location){n.next=10;break}d=c.location,n.next=20;break;case 10:if(!c.endLatitude){n.next=14;break}d="".concat(c.endLongitude,",").concat(c.endLatitude),n.next=20;break;case 14:if(!c.startLatitude){n.next=18;break}d="".concat(c.startLongitude,",").concat(c.startLatitude),n.next=20;break;case 18:return n.next=20,new Promise((function(e){(0,p.getLocationInfo)().then((function(t){t.lat&&(d="".concat(t.lng,",").concat(t.lat),e(d))})).catch(e()),setTimeout((function(){e()}),1e3)}));case 20:if(m=c&&{startAddress:c.startAddress||"",endCityId:c.endCityId||null,airport:c.airport||null,train:c.train||null,date:c.date||null,location:d},h=i.kProductIds.SEND_AIRPORT===+e,!m||11!=e&&19!=e||(m.useTime=l.default.format(new Date,i.kTimeFormat)),!u()){n.next=25;break}return n.abrupt("return");case 25:if(t||r){n.next=27;break}return n.abrupt("return");case 27:return n.next=29,s._getQuickFor(!1,t,r,m,h);case 29:if(f=n.sent,!u()){n.next=32;break}return n.abrupt("return");case 32:g={},s._updateQc("quickChoose2End","end",f,g),f&&f.length>0&&s.traceQKE(e,1),n.next=41;break;case 37:n.prev=37,n.t0=n.catch(3),console.error(n.t0),k.call(s,"quickChoose2End");case 41:case"end":return n.stop()}}),a,null,[[3,37]])})))()},_getQuickFor:function(e,n,a,o,s){var u=this;return new Promise((function(l,m){var h=u.data.productId;if(e)u._setQuickStation(n,a,o).then(l).catch(m);else if([i.kProductIds.CAR_NOW,i.kProductIds.CAR_LATER,i.kProductIds.RIDE_SHARING].includes(h)){var f=[{alias:"设置家庭地址",location:"",icon:"https://file.40017.cn/groundtrafficstage/usecar/usecar/selectAddress/icon-home@3x%20.png",lightIcon:"https://file.40017.cn/groundtrafficstage/usecar/icon/icon_home_selected@3x.png",setIcon:"https://file.40017.cn/groundtrafficstage/usecar/icon/icon-home-set.png",target:"home",type:2,isSet:!1},{alias:"设置公司地址",location:"",icon:"https://file.40017.cn/groundtrafficstage/usecar/usecar/selectAddress/icon-company@3x%20.png",lightIcon:"https://file.40017.cn/groundtrafficstage/usecar/icon/icon_company_selected@3x.png",setIcon:"https://file.40017.cn/groundtrafficstage/usecar/icon/icon-company-set.png",target:"company",type:1,isSet:!1},{alias:"设置常用地址",location:"",icon:"https://file.40017.cn/groundtrafficstage/usecar/usecar/selectAddress/icon_common_address.png",setIcon:"https://file.40017.cn/groundtrafficstage/usecar/icon/icon_commonly_place_have_set@3x.png",target:"common",type:3,isSet:!1}];d.default.postQC("commonAddress").then((function(e){if(e&&200===e.status&&e.body.address){var n=e.body.address,a=e.body.line||[];t={home:n.home,company:n.company};var o=function(e,t){return r(r({},e),{},{name:e.addressName,location:"".concat(e.lng,",").concat(e.lat),icon:f[t].setIcon,lightIcon:f[t].lightIcon,isSet:!0})},i=[n.home?o(n.home,0):f[0],n.company?o(n.company,1):f[1],n.common.length||a.length?r(r({},f[2]),{alias:"选择常用地址",icon:f[2].setIcon,name:"null",isSet:!0}):f[2]];u.traceEvByPage("常驻组件曝光",["","家",t.home?t.home.addressName:"未设置","公司",t.company?t.company.addressName:"未设置","",(0,c.getRefId)(),"A|null","常用地址","".concat(n.common.length?null:"未设置")].join("^"),u.getEAction(u.__productId)),l(i)}})).catch(m)}else u._setQuickHistory(n,a,o,s).then(l).catch(m)}))},_resetQuickChoose:function(e){k.call(this,e)},_trackQuick:function(e,t){for(var n=!1,a=!1,r=this.data.productId,o=0;o<e.length;o++){if(a&&n)return;var i=e[o];e[o]&&e[o].is_hotel&&this.utilHotelTrace("曝光","".concat(this.id2CnName(r),"^").concat(this.__refid),"打车首页"),i.icon&&!n?n=!0:a||(a=!0)}},_setQuickHistory:function(e,t,n,a){var r=this;return a?Promise.resolve([]):new Promise((function(a,o){r.getDepSelection(t,e,n).then((function(e){if("200"==e.status){var t=e.body;a(t),r._trackQuick(t)}else o(e.message)})).catch(o)}))},utilHotelTrace:function(e,t,n){this.traceEvByPage("酒店订单POI".concat(e),"^酒店订单POI".concat(e,"^").concat(t,"^"),n)},poiSetParam:function(e){var t=e.currentTab,n=e.type;return{SEND_TRAIN:"end",MEET_TRAIN:"start"}[t]==n},quickSelect:function(e,t){var n=e.target,a=this.__productId,r=n.dataset,o=r.info,u=r.type,d=r.chint,l=r.meettrain,m=r.oinfo,p=r.selCommonLine,g=void 0!==p&&p,k=r.recommend;if(void 0!==k&&k?this.traceEvByPage("推荐下车点点击",["","推荐下车点点击",i.kProductNameMap[a],o.name,"".concat(o.longitude),"".concat(o.latitude),(0,c.getRefId)()].join("^"),this.getEAction(this.__productId)):y.call(this,m),m.target||t){var _=this.data.position,b=_.cityId,I=_.cityName,v="common"==m.target?"comUseAddress":"setAddress",C=i.kCarUrlH5+v,x=i.kProductNameMap[a],q={globalFlag:0,fromwx:1,cityId:b,cityName:I,productId:a,addressTxt:"start"===u?"上车地址":"下车地址",content:"即时"===x?"现在打车":x,keys:2===m.type?"home":"company",showLine:this.showCommomLine(),newVersion:1},A=(0,h.default)(h.WEBVIEW,!0,{needwrap:1,openwxwrap:1,hideShare:1,src:encodeURIComponent(C+"?"+f.default.JsonToQuery(q))});wx.navigateTo({url:A})}else{this.traceQKE(a,"end"==u?1:0,!0);var E=this.data.currentTab,S=13==a&&"end"==u?m:o;if(S){this.poiSetParam({currentTab:E,type:u}),m.is_hotel&&this.utilHotelTrace("点击","".concat(this.id2CnName(this.data.productId),"^").concat(m.name,"^").concat(m.cityName,"^").concat(this.__refid),"打车首页");var N={CityId:S.cityId,CityName:S.cityName,Latitude:S.latitude||S.lat,Longitude:S.longitude||S.lng,Address:S.alias||S.name,AddressDetail:S.addressDetail||S.address},P=s.store.getState().productId,T=g?o:(0,c.createTargetParam)(N,P,u);(12==P&&"end"==u||13==P&&"start"==u)&&(delete S.pek,delete S.airportCode),"string"!=typeof S.pek&&"string"!=typeof S.airportCode||(T.pek=S.pek,T.airportCode=S.airportCode),d&&(T.hint=""),l&&(T.stationName=S.name),T.ticketTips="",this.data.elements.orderId&&((15==P||13==P)&&"end"===n.dataset.type||14==P&&"start"===n.dataset.type)&&(T.defaultTime=null,T.useTime=null),s.store.dispatch(this.__selectParamsHandle(T)),80==a&&(0,c.ev_validClick)("推荐POI",a,"顺风车tab"),this._trackQuick([m],!0)}}},onSelCommonAddress:function(e){var t=null;e&&[3,4].includes(Number(e.type))&&(t={target:{dataset:{info:e,type:"end",chint:"",meettrain:"",oinfo:{},selCommonLine:4==e.type}}}),t&&this.quickSelect(t)},showCommomLine:function(){return[11,19,80].includes(Number(this.__productId))?1:2},traceQKE:function(e,n,a){var r=+e,o="上下车点提示"+(a?"点击":"曝光");this.traceEvByPage(o,["",o,i.kProductNameMap[r],"".concat(["上","下"][n],"车点"),(0,c.getRefId)(),"家",t.home?t.home.addressName:"未设置","公司",t.company?t.company.addressName:"未设置","A|20210906_carindexstartend",""].join("^"),this.getEAction(r))}}})}(wx.tcyc.eventChannel);exports.default=g;
},{isPage:false,isComponent:false,currentFile:'pages/index/module/business/infoSelecter/quickChoose.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("pages/index/module/business/infoSelecter/tapOperation.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../../../../../useCar/store/index"),t=require("../../../../../useCar/common/common"),a=require("../../../../../useCar/config/index"),s=require("../../../../../useCar/common/business"),i=Behavior({data:{showExports:!1,rollerTimes:[{index:0,val:"落地后10分钟",text:"10"},{index:1,val:"落地后20分钟",text:"20"},{index:2,val:"落地后30分钟(无托运行李推荐)",text:"30"},{index:3,val:"落地后40分钟(有托运行李推荐)",text:"40"},{index:4,val:"落地后50分钟",text:"50"},{index:6,val:"落地后60分钟",text:"60"}],initTime:0},methods:{selectStartAddressForPoi:function(){var e=this.__productId,t=this.data.information||this.data.elements,a=t.startCityId,i=t.startCityName,d=(this.__selectParamsHandle||{})._name||"choosedParams";(0,s.selectAddress)(d,e,a,i,"0","start")},selectStartAddress:function(e){var i=e.currentTarget.dataset.fromCar,d=this.__productId,r=this.data.elements;switch(d){case a.kProductIds.MEET_TRAIN:(0,s.selectStation)(this.__selectParamsHandle._name,d,void 0,r.startLatitude&&r||void 0),(0,s.ev_event)("车站选择点击","^车站选择点击^".concat(this.__refid,"^").concat(r.flt||"null","^").concat(r.startAddress||"null"),"接送机首页");break;case a.kProductIds.MEET_AIRPORT:(0,s.selectFlightNo)(this.__selectParamsHandle._name,d,i),(0,s.ev_event)("航班号选择点击","^航班号选择点击^".concat(this.__refid,"^").concat(r.stationName||"null","^").concat(r.stationName||"null"),"接送机首页");break;case 80:case 11:case 19:var n=wx.yc_carIndexIns||(0,t.getCurPage)();n.data.isRecommend?n.setMode(2):this.selectStartAddressForPoi();break;default:this.selectStartAddressForPoi()}this.ev_handle("出发地点击",d)},selectEndAddress:function(){var e=this.__productId,t=this.data.elements;switch(e){case a.kProductIds.SEND_TRAIN:(0,s.selectStation)(this.__selectParamsHandle._name,e,void 0,t.startLatitude&&t||void 0);break;case a.kProductIds.SEND_AIRPORT:(0,s.selectTerminal)(this.__selectParamsHandle._name,e,0,t.startLatitude&&t||void 0),(0,s.ev_event)("航站楼选择点击","^航站楼选择点击^".concat(this.__refid,"^").concat(t.endAddress||"null"),"接送机首页");break;default:this.selectEndAddressForPoi()}this.ev_handle("目的地点击",e)},selectEndAddressForPoi:function(){var t=e.store.getState().common.position,a=this.data.elements,i=this.__productId,d=a.endCityId||a.startCityId||t.cityId,r=a.endCityName||a.startCityName||t.cityName,n=0,c=e.store.getState().specialCar.choosedParams;c.startAddress&&(11!=i||c.useTime)&&(n=1),(0,s.selectAddress)(this.__selectParamsHandle._name,i,d,r,"0","end",a,n)},onTime:function(t){var i=t.detail.useTime,d=this.data.elements.useTime;switch(e.store.dispatch(this.__selectParamsHandle({useTime:i})),this.__productId){case a.kProductIds.MEET_TRAIN:(0,s.ev_event)("送站时间选择点击","^送站时间选择点击^".concat(d||"null","^").concat(i,"^").concat(this.__refid,"^"),"接送机首页");break;case a.kProductIds.SEND_AIRPORT:(0,s.ev_event)("送机时间选择点击","^送机时间选择^".concat(d||"null","^").concat(i,"^").concat(this.__refid,"^"),"接送机首页");break;case a.kProductIds.SEND_TRAIN:(0,s.ev_event)("接站时间选择点击","^接站时间选择点击^".concat(d||"null","^").concat(i,"^").concat(this.__refid,"^"),"接送机首页")}},rollerTimeChange:function(i){var d=i.detail.value,r=this.data.elements.delayDuration,n=this.data.elements.flightArrDate,c=+this.data.rollerTimes[+d].text,o=(0,t.addMin)(c,n,a.kTimeFormat).day;this.setData({initTime:d}),e.store.dispatch(this.__selectParamsHandle({useTime:o,delayDuration:c})),(0,s.ev_event)("接机时间选择点击","^接机时间选择^航班到达".concat(r,"分钟用车^").concat(c,"分钟^"),"接送机首页")},checkMyOrder:function(){this.setData({initTime:"0"});var e=this.__productId;(0,t.navigateTo)("/pages/usecar/myOrder/myOrder",{productId:e,orderId:this.data.elements.orderId,type:2,refId:this.__refid,originFrom:"carhome"})},tapTime:function(){this.ev_handle("用车时间点击",this.__productId)},ev_handle:function(e,t){(0,s.ev_validClick)(e,t,this.getEAction(t))}}});exports.default=i;
},{isPage:false,isComponent:false,currentFile:'pages/index/module/business/infoSelecter/tapOperation.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("pages/index/module/config/baseData.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={pageData:e(require("./pageData")).default};exports.default=r;
},{isPage:false,isComponent:false,currentFile:'pages/index/module/config/baseData.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("pages/index/module/config/pageData.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default={tabList:[],tabIndex:0,subtab:[],subtabIndex:0,nativeABLoading:!0,map:{markers:[],centerLng:116.40717,centerLat:39.90469}};
},{isPage:false,isComponent:false,currentFile:'pages/index/module/config/pageData.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/abTest.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.NEW_EXTRA_INCOME=void 0;exports.NEW_EXTRA_INCOME="20221204_newfuying";
},{isPage:false,isComponent:false,currentFile:'useCar/common/abTest.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/bury/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PopupStatistics=void 0,exports.bannerClickStatistics=function(t){var c=t.name,o=t.pid,e=t.refId,i=t.position,r=t.startPoint;(0,a.traceEv)("首页围栏运营位点击","^首页围栏运营位点击^".concat(c,"^").concat(e,"^定位位置：[").concat(i.name,"]").concat(i.latitude,",").concat(i.longitude,"^上车点位置：[").concat(r.startAddress,"]").concat(r.startLatitude,",").concat(r.startLongitude,"^"),"".concat(n(+o),"首页"))},exports.bannerShowStatistics=function(t){var c=t.name,o=t.pid,e=t.refId,i=t.position,r=t.startPoint;(0,a.traceEv)("首页围栏运营位加载","^首页围栏运营位加载^".concat(c,"^").concat(e,"^定位位置：[").concat(i.name,"]").concat(i.latitude,",").concat(i.longitude,"^上车点位置：[").concat(r.startAddress,"]").concat(r.startLatitude,",").concat(r.startLongitude,"^"),"".concat(n(+o),"首页"))};var t=require("../../../@babel/runtime/helpers/classCallCheck"),c=require("../../../@babel/runtime/helpers/createClass"),a=require("../common"),o=require("../../config/index");function n(t){var c=[{text:"接送机",id:[12,13]},{text:"接送站",id:[14,15]},{text:"打车",id:[11,19]}].filter((function(c){return-1!=c.id.indexOf(t)}));return c&&c.length>0&&c[0].text}var e=function(){function e(c,a){t(this,e),this.refId=c,this.pageType=a}return c(e,[{key:"getCouponPopupShow",value:function(t){var c=t.name,o=t.coupon,n=o.batchNo,e=o.cardType,i=o.amount,r=o.title,u=0===e?"立减券":"折扣券";(0,a.traceEv)("发券弹窗曝光","^发券弹窗曝光^".concat(c,"^").concat(n,"^").concat(u,"^").concat(i,"^").concat(r,"^").concat(this.refId,"^"),this.pageType)}},{key:"getCouponPopupClick",value:function(t){var c=t.name,o=t.coupon,n=o.batchNo,e=o.cardType,i=o.amount,r=o.title,u=0===e?"立减券":"折扣券";(0,a.traceEv)("发券弹窗点击","^发券弹窗点击^".concat(c,"^").concat(n,"^").concat(u,"^").concat(i,"^").concat(r,"^").concat(this.refId,"^"),this.pageType)}},{key:"useCouponPopupShow",value:function(t){var c=t.name,o=t.coupon,n=o.batchNo,e=o.amount,i=o.title;(0,a.traceEv)("用券弹窗曝光","^用券弹窗曝光^".concat(c,"^").concat(n,"^").concat(e,"^").concat(i,"^").concat(this.refId,"^"),this.pageType)}},{key:"useCouponPopupClick",value:function(t){var c=t.name,o=t.coupon,n=o.batchNo,e=o.amount,i=o.title;(0,a.traceEv)("用券弹窗点击","^用券弹窗点击^".concat(c,"^").concat(n,"^").concat(e,"^").concat(i,"^").concat(this.refId,"^"),this.pageType)}},{key:"activityPopupShow",value:function(t){var c=t.name,e=t.pid,i=t.refId,r=t.position,u=t.startPoint,s=t.strategyId;(0,a.traceEv)("活动弹窗曝光","^活动弹窗曝光^".concat(c,"^").concat(o.kProductNameMap[+e],"^").concat(i,"^定位位置：[").concat(r.name,"]").concat(r.latitude,",").concat(r.longitude,"^上车点位置：[").concat(u.startAddress,"]").concat(u.startLatitude,",").concat(u.startLongitude,"^").concat(s,"^"),"".concat(n(+e),"首页"))}},{key:"activityPopupClick",value:function(t){var c=t.name,e=t.pid,i=t.refId,r=t.position,u=t.startPoint,s=t.strategyId;(0,a.traceEv)("活动弹窗点击","^活动弹窗点击^".concat(c,"^").concat(o.kProductNameMap[+e],"^").concat(i,"^定位位置：[").concat(r.name,"]").concat(r.latitude,",").concat(r.longitude,"^上车点位置：[").concat(u.startAddress,"]").concat(u.startLatitude,",").concat(u.startLongitude,"^").concat(s,"^"),"".concat(n(+e),"首页"))}},{key:"activityPopupClose",value:function(t){var c=t.name,e=t.pid,i=t.refId;(0,a.traceEv)("活动弹窗关闭","^活动弹窗关闭^".concat(c,"^").concat(o.kProductNameMap[+e],"^").concat(i,"^"),"".concat(n(+e),"首页"))}}]),e}();exports.PopupStatistics=e;
},{isPage:false,isComponent:false,currentFile:'useCar/common/bury/index.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/business.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireWildcard"),t=require("../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0});var r={emptyParams:!0,selectAddress:!0,selectImmediateCar:!0,selectStation:!0,selectTerminal:!0,selectFlightNo:!0,createTargetParam:!0,fromAddressGoBack:!0,checkStartAddr:!0,toSelectCar:!0,cutQueryParams:!0,cutAllQueryParams:!0,clearCarInsQueryParams:!0,chineseCominType:!0,chineseProductId:!0,toCoupon:!0,choosePropMap:!0,paramsKey:!0,choosePropArrMap:!0,getParamsFor:!0,getReducerFor:!0,getRefId:!0,ev_validClick:!0,ev_event:!0,getPageDesc:!0,getTabDesc:!0,getTabDescObjFor:!0,checkParamsAndJump:!0};exports.checkParamsAndJump=function(e,t,r,a){if(t.startAddress&&t.endAddress&&(11!=e||t.useTime)){if(11==e||19==e){var o=(0,y.default)(y.SELECT_CAR,!0,{params:"".concat(encodeURIComponent(JSON.stringify(t))),refId:"".concat(r)});wx.redirectTo({url:o})}else if(80==e){var n="".concat(u.kCarUrlH5,"transferOrder?").concat(g.default.JsonToQuery(s({refid:r},t))),c=(0,y.default)(y.WEBVIEW,!0,{src:encodeURIComponent(n),needwrap:1});wx.redirectTo({url:c})}}else a&&a()},exports.checkStartAddr=function(e){return g.default.get(wx,"tcyc.__recClose")?Promise.resolve(null):(0,h.getPoiInfo)(e.startCityId,e.startAddress,e.startLatitude,e.startLongitude).then((function(e){return e}))},exports.chineseCominType=function(e){var t="";switch(e){case"start":t="上车地址";break;case"end":t="下车地址"}return t},exports.chineseProductId=function(e){var t="";switch(e=+e){case 12:t="接机";break;case 13:t="送机";break;case 14:t="接站";break;case 15:t="送站"}return t},exports.choosePropMap=exports.choosePropArrMap=void 0,exports.clearCarInsQueryParams=function(e){e==u.kProductIds.CAR_NOW&&l.store.dispatch({type:l.actions.CHOOSE_CAR_PARAMS,payload:v(!0)})},exports.createTargetParam=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,a={},o=r||"start";return Object.keys(e).forEach((function(t){a[o+t]=e[t]})),Object.assign({},a,{tcServiceTypeId:t,tabServiceTypeId:t,__type:r})},exports.cutAllQueryParams=function(){Object.values(u.kProductIds).forEach(T)},exports.cutQueryParams=T,exports.emptyParams=v,exports.ev_event=function(e,t,r){(0,i.traceEv)(e,t,r)},exports.ev_validClick=function(e,t,r){r=r||"接送"+(t>13?"站":"机")+"首页",(0,i.traceEv)("有效流量点击","^".concat("有效流量点击","^").concat(e,"^").concat(u.kProductNameMap[t],"^").concat(_(),"^"),r)},exports.fromAddressGoBack=I,exports.getPageDesc=function(){return{airport:"接送机首页",smallTrain:"接送站首页",specialCarIndex:"打车首页"}[l.store.getState().tabInfo.tabIndex]},exports.getParamsFor=S,exports.getReducerFor=function(e){var t,r={11:"choosedParams",12:"chooseFlightMeetParams",13:"chooseFlightSendParams",14:"chooseTrainMeetParams",15:"chooseTrainSendParams",19:"choosedParams",80:"choosedParams",130:"choosedParams"};t||(t={},Object.keys(r).forEach((function(e){var a=l.actions[r[e]];a._name=r[e],t[e]=a})));return t[e]},exports.getRefId=_,exports.getTabDesc=function(){var e=l.store.getState().tabInfo,t=e.tabIndex,r=e.tabList,a="";return r.map((function(e){e.tabToken==t&&(a=e.tabName)})),a},exports.getTabDescObjFor=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"接送机",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"接送站",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"打车首页",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"扬招首页",o={};return o[12]=o[13]=e,o[14]=o[15]=t,o[11]=o[19]=o[80]=r,o[130]=a,o},exports.paramsKey=void 0,exports.selectAddress=function(e,t,r,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,s=arguments.length>5?arguments[5]:void 0,n=arguments.length>6?arguments[6]:void 0,c=arguments.length>7?arguments[7]:void 0,d=l.store.getState(),u=d.common,p=u.position,m=u.refId,f={xcxactionA:e,productId:t,globalFlag:o,fromwx:1,lng:p.lng,lat:p.lat,refId:m,startAddressData:n&&JSON.stringify(n),type:s||b(t),jumpSelectcar:c};r&&a&&Object.assign(f,{cityId:r,cityName:a});var h=(0,y.default)(y.POI);(0,i.navigateTo)(h,f)},exports.selectFlightNo=function(e,t,r){var a="".concat(u.kCarUrlH5,"inputFlightNumber?productId=12&type=start&refId=");(0,i.toWebviewOauth)(a)},exports.selectImmediateCar=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,s=l.store.getState(),n=s.common.refId,c={xcxactionA:e,productId:t,globalFlag:r,fromwx:1,refId:n,param:o,type:a};(0,i.navigateTo)("/useCar/immediateCar/immediateCar",c)},exports.selectStation=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=l.store.getState(),s=o.common.position,n={xcxactionA:e,productId:t,type:14===t?"start":"end",globalFlag:r,cityId:s.cityId,cityName:s.cityName,addressData:a&&JSON.stringify(a),backOnce:1},c="".concat(u.kCarUrlH5,"newSelectStation?");setTimeout((function(){return(0,i.toWebviewOauth)(c,n)}),0)},exports.selectTerminal=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=l.store.getState(),s=o.common.position,n={xcxactionA:e,productId:t,type:"end",globalFlag:r,cityId:s.cityId,addressData:a&&JSON.stringify(a),cityName:s.cityName},c="".concat(u.kCarUrlH5,"newSelectTerminal?");setTimeout((function(){return(0,i.toWebviewOauth)(c,n)}),0)},exports.toCoupon=function(e){if(!e)return;(0,i.toWebviewOauth)(e,{xcxversion:getApp().appVersion})},exports.toSelectCar=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cutParams:!1,delayJump:0,customParams:null,ignoreDifPid:!1,buriedPoint:"^^",isRedirect:!1};wx.tcyc.__locationP=(0,d.getLocationInfo)({timeout:3e3});var t=e.delayJump||0,r=l.store.getState(),h=r.productId,b=e.customParams,C=e.isRedirect||!1;b&&(h=b.productId||b.tabServiceTypeId||h);var A=e.refid||_()||u.kDefaultRefid;function k(){return R.apply(this,arguments)}function R(){return(R=n(a.default.mark((function n(){var d,g,v,b,C,_,O,k,R,E,w,N,M,D,q,F,L,H,U;return a.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(d=e.customParams,g=[].concat(o(u.kDefaultQueryKeys),o(u.kFlightQueryAddKeys),["psource"]),v=d||S(h),b={},C=(0,f.hasAddOrderForBookingPrice)(v._source),_="flyTrainSerialNo",e.psource&&(v.psource=e.psource),g.forEach((function(e){(v[e]||"number"==typeof v[e])&&(b[e]=v[e])})),(b=s(s({refId:A},b),{},c({endCityId:+b.endCityId,source:1},_,""))).useTime=b.useTime||p.default.format(new Date,u.kTimeFormat),C&&(b[_]=v[_]||""),O=new Date(b.useTime.replace(/\-/g,"/")),k=O.getTime()-(0,i.addMin)(90,new Date).date.getTime()<0,(h==r.productId||e.ignoreDifPid)&&b.endAddress){a.next=17;break}return T(h),I(),a.abrupt("return");case 17:if(setTimeout((function(){e.cutParams&&T(h)}),800+t),!k||h==u.kProductIds.CAR_NOW||h==u.kProductIds.CAR_LATER){a.next=39;break}return a.prev=19,a.next=22,m.default.postQC("validUseCar.useTime",b);case 22:if(!(R=a.sent)||200!=R.status||!R.body){a.next=27;break}R=R.body,a.next=28;break;case 27:throw new Error("useTime校验失败");case 28:if(!R||0!==R.code){a.next=33;break}return R.content=(0,i.parseLightText)(R.recommendDesc),l.store.dispatch({type:l.actions.SET_PRODUCT_CHG_DLG,payload:s(s({},R),{},{params:b})}),l.store.dispatch({type:l.actions.SET_PRODUCT_CHG_DLG_SHOW,payload:!0}),a.abrupt("return");case 33:a.next=39;break;case 35:a.prev=35,a.t0=a.catch(19),(k=O.getTime()-(0,i.addMin)(30,new Date).date.getTime()<0)&&(h=u.kProductIds.CAR_NOW,b.tabServiceTypeId=h);case 39:if(h==u.kProductIds.CAR_NOW||h==u.kProductIds.CAR_LATER){a.next=43;break}return h!=u.kProductIds.MEET_AIRPORT&&h!=u.kProductIds.SEND_AIRPORT||!v.orderId||(b.flightSerialNo=v.orderId),b.buriedPoint=e.buriedPoint,a.abrupt("return");case 43:E=l.store.getState(),b.localLatitude=E.common.position.lat,b.localLongitude=E.common.position.lng,P.PriceManager.productId=h,P.PriceManager.queryPrice({customParams:d}),w=l.store.getState().locaiotnStartInfoData,N=l.store.getState().common.position,D=(M=N||{}).lat,q=M.lng,L=(F=w||{}).startLatitude,H=F.startLongitude,U="",U=D==L&&q==H?"1":"",setTimeout((function(){var e=(0,y.default)(y.SELECT_CAR,!0,{isManualLocation:U});x()?wx.redirectTo({url:e}):wx.navigateTo({url:e})}),t);case 56:case"end":return a.stop()}}),n,null,[[19,35]])})))).apply(this,arguments)}if(O(A,h),h==u.kProductIds.RIDE_SHARING){var E=S(h),w=!0,N="",M="".concat(u.kCarUrlH5).concat(w?"transferOrder":"sfcNewOrder","?").concat(g.default.JsonToQuery(s({refid:A,from:"small_xcx_home",abResult:N},E))),D="跳转预订";(0,i.traceEv)(D,"^".concat(D,"^").concat(E.startCityName,"^").concat(E.startAddress,"^").concat(E.endCityName,"^").concat(E.endAddress,"^").concat(A,"^"),"顺风车tab"),(0,i.toWebview)(M,"","openwxwrap=1",C),setTimeout((function(){l.store.dispatch({type:l.actions.CHOOSE_CAR_PARAMS,payload:v()})}),1e3)}else k()},require("../../@babel/runtime/helpers/Objectvalues");var a=t(require("../../@babel/runtime/regenerator")),o=require("../../@babel/runtime/helpers/toConsumableArray"),s=require("../../@babel/runtime/helpers/objectSpread2"),n=require("../../@babel/runtime/helpers/asyncToGenerator"),c=require("../../@babel/runtime/helpers/defineProperty"),i=require("./common"),d=require("./locationUtil"),u=require("../config/index"),l=require("../store/index"),p=(t(require("../../utils/regenerator-runtime")),t(require("../../util/util"))),m=t(require("./request")),f=require("./condition");Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in exports&&exports[e]===f[e]||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return f[e]}}))}));var h=require("../services/commonReqs"),g=t(require("../../util/tcUtil")),P=require("./priceManager"),y=e(require("../util/getChannelUrl"));encodeURIComponent;function v(e){var t,r=e?"start":"end";return c(t={},r+"CityId",""),c(t,r+"CityName",""),c(t,r+"Latitude",""),c(t,r+"Longitude",""),c(t,r+"Address",""),c(t,r+"AddressDetail",""),c(t,"flyTrainSerialNo",""),t}function b(e){return(0,i.includesFor)([15,13,17],e)?"start":"end"}function I(){var e=getCurrentPages(),t=(0,y.default)(y.POI,!1);e&&e[e.length-1].route.indexOf(t)>-1&&wx.navigateBack()}function x(){var e=getCurrentPages(),t=(0,y.default)(y.POI,!1);return e&&e[e.length-1].route.indexOf(t)>-1}function T(e){e==u.kProductIds.MEET_AIRPORT?l.store.dispatch({type:l.actions.CHOOSE_Flight_MEET_PARAMS,payload:v()}):e==u.kProductIds.SEND_AIRPORT?l.store.dispatch({type:l.actions.CHOOSE_Flight_SEND_PARAMS,payload:{useTime:""}}):e==u.kProductIds.MEET_TRAIN?l.store.dispatch({type:l.actions.CHOOSE_Train_MEET_PARAMS,payload:{useTime:""}}):e==u.kProductIds.SEND_TRAIN?l.store.dispatch({type:l.actions.CHOOSE_Train_SEND_PARAMS,payload:{useTime:""}}):e==u.kProductIds.CAR_NOW?l.store.dispatch({type:l.actions.CHOOSE_CAR_PARAMS,payload:v()}):e==u.kProductIds.CAR_LATER&&l.store.dispatch({type:l.actions.CHOOSE_CAR_PARAMS,payload:{useTime:""}})}var C={11:"specialCar.choosedParams",12:"airport.meetChoosedParams",13:"airport.sendChoosedParams",14:"train.meetChoosedParams",15:"train.sendChoosedParams",19:"specialCar.choosedParams",80:"specialCar.choosedParams",130:"specialCar.choosedParams"};exports.choosePropMap=C;exports.paramsKey={11:"choosedParams",12:"chooseFlightMeetParams",13:"chooseFlightSendParams",14:"chooseTrainMeetParams",15:"chooseTrainSendParams",19:"choosedParams",80:"choosedParams",130:"choosedParams"};var A={};function S(e,t){t=t||l.store.getState();var r=A[e];return r&&t[r[0]][r[1]]||{}}function _(){return l.store.getState().common.refid||u.kDefaultRefid}function O(e,t){try{var r=l.store.getState().common.indexCouponTips;r.newUserShow&&(0,i.traceEv)("新客实验询价","^".concat(r.newUserShow,"^").concat(e,"^").concat(r.maxReduce,"^").concat(u.kProductNameMap[t],"^"),"打车首页")}catch(e){}}exports.choosePropArrMap=A,Object.keys(C).forEach((function(e){A[e]=C[e].split(".")}));
},{isPage:false,isComponent:false,currentFile:'useCar/common/business.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/cbehaviors.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../store/index"),t=Behavior({attached:function(){var t=this;setTimeout((function(){(0,e.bindState)(t,{refid:"common.refid"});t.options}))},detached:function(){},methods:{getRefId:function(){return e.store.getState().common.refid}}});exports.default=t;
},{isPage:false,isComponent:false,currentFile:'useCar/common/cbehaviors.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/common.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireWildcard"),t=require("../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.UserInfo=exports.SysInfo=void 0,exports.addMin=j,exports.addMonth=function(e,t,r){var n=t||new Date;r=r||"yyyy-MM-dd",("string"==typeof n||"number"==typeof n)&&(n=new Date(t.replace(/\-/g,"/")));var o=new Date(n.setMonth(n.getMonth()+e));return{date:o,day:c.default.format(o,r)}},exports.baseLibLimit=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"2.9.5",t=b.SDKVersion;if(h.default.compareVersion(t,e)<0)return!1;return!0},exports.breakerLine=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,o=t,i=[];for(;o.length&&i.length<n;){var a=o.slice(0,r);o=o.slice(r),i.length==n-1&&o&&(a=a.slice(0,r-1)+"..."),i.push(a)}return 1===i[i.length-1].length?e(t,r+1,n):i},exports.breakerLine2=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,o=t,i=[];for(;o.length&&i.length<n;){var a=void 0;i.length==n-1?a=N(o,r,parseInt(r/2-1),parseInt(r/2-1)):(a=o.slice(0,r),o=o.slice(r)),i.push(a)}return 1===i[i.length-1].length?e(t,r+1,n):i},exports.checkName=function(e){var t=e.length,r=new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"),n="",o=0;for(e.length;o<e.length;o++)n+=e.substr(o,1).replace(r,"");return t-n.length},exports.checkPoiChanged=function(e,t){return e.startLatitude!=t.startLatitude||e.startLongitude!=t.startLongitude||e.endLatitude!=t.endLatitude||e.endLongitude!=t.endLongitude},exports.compareObject=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=Object.assign({},t);function o(){var e=[];return function(t,r,n){return(t||r||n)&&e.push(r[t]==n[t]),e}}r.forEach((function(e){delete n[e]}));var i=o();return Object.keys(n).forEach((function(t){return i(t,e,n)})),-1==i().indexOf(!1)},Object.defineProperty(exports,"debounce",{enumerable:!0,get:function(){return y.debounce}}),exports.defaultDate=function(){return j(35,new Date,d.kTimeFormat)},exports.ellipsisMid=N,exports.eventChannel=void 0,exports.eventData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.target)return{};if(!e.target.dataset)return{};return e.target.dataset},exports.evtData=void 0,exports.fightListBack=function(e){wx.navigateBack({delta:e})},exports.filterParams=function(e){var t="",r="",n="";e.lat?(t=e.lat,r=e.lng,n=e.name):(t=e.startLatitude,r=e.startLongitude,n=e.startAddress);return{startAddress:n,startLatitude:t,startLongitude:r,startLatitudeOriginal:t,startLongitudeOriginal:r}},exports.formatSecord=function(e){"number"!=typeof e&&(e=Number.parseInt(e));var t=e%60;return(e/60>>0)+":"+(t=t<10?"0"+t:t)},exports.geocoder=function(e,t){var r=e.longitude,n=e.latitude,a=e.pageType,c=void 0===a?"smallHome":a,u=e.productId,s=e.queryType,l=void 0===s?1:s;return new Promise((function(e,a){i.default.getAddressByLocation({lat:n,lng:r,pageType:c,productId:u,queryType:l,noPickup:0},{isNeedLoading:!1},t).then((function(t){t=t.body,delete Object.assign({},t||{}).pickupSpotsNew,e(o(o({lat:n,lng:r},t),{},{isGetLocation:!0,address:t.name,location:t.lng+","+t.lat,globalFlag:t.globalFlag||0,isFail:!1}))})).catch(a)}))},exports.get=function(e,t,r){if(console.error("重复定义的方法，待清理"),null==e)return r;var n=JSON.stringify(t).match(/[^.,\s\[\]\'\"]+/g);if(!n)return r;for(var o=void 0,i=0,a=n.length;i<a;i++){if(null==(o=e[n[i]]))return r;e=o}return o},exports.getAbTesting=void 0,exports.getCurPage=function(){var e=getCurrentPages();return e[e.length-1]},exports.getCurrentPage=function(){return getCurrentPages().slice(-1)[0]||{}},exports.getDistance=function(e,t,r,n){if(e&&r&&t&&n){var o=Math,i=o.sin,a=o.cos,c=o.pow,u=function(e){return e*o.PI/180},s=u(e),l=u(r),d=s-l,p=u(t)-u(n);return 6378137*(2*o.asin(o.sqrt(c(i(d/2),2)+a(s)*a(l)*c(i(p/2),2))))}return 99999999},exports.getLocation=function(e){var t=!0;e&&e.clickType&&(t=1!=e.clickType);e=e||{timeout:1e4};var r=I,n=C;return new Promise((function(a,c){var u,s=e.timeout||1e4,l=setTimeout((function(){u=1,console.error("定位超时"),O("poiFail","^timeout^".concat(s,"^")),c(new Error("loc timeout"))}),s);M(1===e.clickType).then((function(e){if(e)return p.default.startLocation();throw c(new Error("privacy_auth_fail")),new Error("privacy_auth_fail")})).then((function(s){if(setTimeout((function(){p.default.offLocationChange()}),500),"function"==typeof e.onLatLnt&&e.onLatLnt(s),!u){clearTimeout(l),O("poiA","^".concat(s.accuracy,"^").concat(s.longitude,"^").concat(s.latitude,"^").concat(e.clickType,"^"));var d="k_".concat(s.latitude,"-").concat(s.longitude,"-").concat(e.clickType);if(r[d]&&t)a(r[d]);else{var f=function(e){if(r[d]&&t)a(r[d]);else{e||c(new Error("empty data")),e=e.body;var n=o(o({lat:s.latitude,lng:s.longitude,locationMp:s},e),{},{isGetLocation:!0,address:e.name,location:e.lng+","+e.lat,globalFlag:e.globalFlag||0});r[d]=Object.assign({},n),wx.setStorage({key:"useCarLocationCache",data:n}),a(n)}};if(n[d]&&t)n[d].then(f).catch(c);else{var g={lat:s.latitude,lng:s.longitude};e.clickType&&(g.clickType=e.clickType),n[d]=i.default.getAddressByLocation(g,{isNeedLoading:!1}).then(f).catch(c),wx.setStorage({key:"usecar.locationCache",data:g})}}}})).catch((function(e){console.error("startLocation error",e),setTimeout((function(){p.default.offLocationChange()}),500),u||(clearTimeout(l),O("poiFail","wxApiErr"),c(e))}))}))},exports.getPages=L,exports.getProductId=function(e){return(e=e||{}).productId||e.tabServiceTypeId||e.tcServiceTypeId},exports.getQueryString=function(e,t){var r=new RegExp("(&|\\?)"+e+"=([^&]*)(&|#|$)","i"),n=t.match(r);if(null!=n)return decodeURIComponent(n[2]).split("#")[0];return null},exports.getUserInfoP=function(){return new Promise((function(e,t){l.default.getUserInfo1((function(t){e(t)}),(function(e){t(e)}))}))},exports.handleFlightObj=function(e,t){return{startCityId:e.arrCityId,startCityName:e.arrCityName,startLatitude:e.arrLatitude,startLongitude:e.arrLongitude,startAddress:e.arrivalAirportCN,startAddressDetail:"",tcServiceTypeId:t,tabServiceTypeId:t,useTime:j(10,e.arrivalTime,"yyyy-MM-dd hh:mm:ss").day,flt:e.flightNo,airportCode:e.arrivalAirport,flightDepDate:e.departureTime,filghtDepDate:e.departureTime,flightArrDate:e.arrivalTime,delayDuration:10,_source:"flight"}},exports.includesFor=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return-1!==e.indexOf(t)},exports.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},exports.isDateNow=function(e){return c.default.parseDate(e).getTime()-Date.now()<=18e5},exports.isEmptyObject=void 0,exports.isIphoneIos=function(){if(-1!==P)return P;try{var e=b;if(e.model&&e.model.match("iPhone"))return P=!0,!0;if(e.system&&e.system.toLowerCase().match("ios"))return P=!0,!0}catch(e){}return P=!1,!1},exports.isIphonex=function(){return u.default.isIPhoneX()},exports.isLngLatInBounds=function(e,t){var r=t.southwest,n=t.northeast;if(r&&n)return!(e.latitude>n.latitude||e.latitude<r.latitude)&&!(e.longitude>n.longitude||e.longitude<r.longitude);return!1},exports.isObject=E,exports.location2Param=function(e){return{CityId:+(e.cityId||e.city_id),CityName:e.cityName||e.city_name,Latitude:+e.lat,Longitude:+e.lng,Address:e.poi_name||e.name||e.address,Source:e.source||e.Source,AddressDetail:e.addressDetail||""}},exports.logTrace=O,exports.mainProcTrace=function(e,t){if("object"===n(t))try{t=JSON.stringify(t)}catch(e){}S(e,t,"ycMainProc")},exports.navBackHome=function(e){var t=getCurrentPages(),r=t.length,n=t.slice(-1)[0],o=r-1;e?o=1:n.options.xcxactionA&&!n.options.fromCar&&--o;if(r<=1)return;wx.navigateBack({delta:o})},exports.navigateTo=function(e,t,r){if(!e)return;var n=/\?.*=.*/.test(e)?"&":"";(0,x.isEmpty)(t)||(e+=Object.keys(t).reduce((function(e,r){return"".concat(e).concat(e?"&":"?").concat(r,"=").concat(t[r])}),n));r?wx.redirectTo({url:e}):wx.navigateTo({url:e})},exports.newObjWithKeys=function(e,t){var r={},n=t;if("string"==typeof t){var o=q;o._init||(o.start=d.kStartQueryKeys,o.end=d.kEndQueryKeys,o.flight=d.kFlightQueryAddKeys,o.all=d.kDefaultQueryKeys,o.train=d.kTrainQueryKeys,o._init=1),n=o[t]||[]}return n.forEach((function(t){(e[t]||void 0!==e[t])&&(r[t]=e[t])})),r},exports.openMiniForEmbedded=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wx336dcaf6a1ecf632",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};wx.openEmbeddedMiniProgram({appId:t,path:e,success:r,fail:n})},exports.openUrl=function(e){var t=e||{},r=t.jumpUrl,n=t.isNewPageCanShare,o=void 0===n?0:n,i=t.appId,a=t.isRedirect,c=void 0!==a&&a,u=t.needwrap,s=void 0===u?0:u,l=t.embedded,d=void 0!==l&&l;if(!r)return;if(/^(https?|ftp|file)(:|%3A)(\/\/|%2F%2F)[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(r)){var p=/^https%3A%2F%2F/.test(r)?r:encodeURIComponent(r||"https://wx.17u.cn/pub/mytrip/mytrip_new?ifhttps=true"),f=1==o,g=(0,v.default)(v.WEBVIEW)+"?";g+=f?"src=".concat(p):"hideShare=1&src=".concat(p),s&&(g+="&needwrap=1"),c?wx.redirectTo({url:g}):wx.navigateTo({url:g})}else if(i)d?wx.openEmbeddedMiniProgram({appId:i,path:r}):wx.navigateToMiniProgram({appId:i,path:r});else{var h=/^\//.test(r)?r:"/".concat(r);c?wx.redirectTo({url:h}):wx.navigateTo({url:h})}},exports.parseLightText=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"light",r={},n=new RegExp("<".concat(t,">([\\s\\S]*?)<\\/").concat(t,">"),"g");return(e=e.replace(n,(function(e,t,n){var o="$idx_"+n;return r[o]=t,"{*##*}"+o+"{*##*}"}))).split("{*##*}").filter((function(e){return e})).map((function(e){return r[e]?{txt:r[e],class:t}:{txt:e,class:""}}))||[]},exports.pay=function(e){return new Promise((function(t,r){var n=(0,v.default)(v.CASHIER,!0,{ProjectId:7,ProjectSerialId:e});wx.redirectTo({url:n,success:t,fail:r})}))},exports.privacyAuthorization=M,exports.promisify=function(e){return function(){for(var t=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return new Promise((function(r){e.call.apply(e,[t].concat(n,[function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r(t)}]))}))}},exports.px2rpx=void 0,exports.querySelector=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:wx;return new Promise((function(r,n){e||n("选择器不能为空"),wx.nextTick((function(){var n=t.createSelectorQuery();n.select(e).boundingClientRect(),n.selectViewport().scrollOffset(),n.exec((function(e){r(e)}))}))}))},exports.reduxSetHelper=function(e,t,r,n){return function(i,a){i=void 0===i?t||{}:i;var c=a.payload;if(a.type===e){if(E(c)){var u=r?i:{};return"function"==typeof n&&n(u,c),o(o({},u),c)}return c}return i}},exports.rpx2px=void 0,exports.sleep=function(e){return new Promise((function(t){setTimeout(t,e)}))},exports.sliceArray=function(e,t){return function(e,t){return Array.from({length:Math.ceil(e.length/t)},(function(r,n){return e.slice(n*t,n*t+t)}))}(e,t)},Object.defineProperty(exports,"throttle",{enumerable:!0,get:function(){return y.throttle}}),exports.toWebview=A,exports.toWebviewOauth=function(e,t,r){var n=!0;/^https:\/\/open.weixin/.test(e)&&(n=!1);return A(e,t,n,r)},exports.traceEv=S,exports.tracePage=function(e){var t,n=(r(t={},v.CHANNEL_TCEL_MAIN,""),r(t,v.CHANNEL_TC_MAIN,"usecar/"),r(t,v.CHANNEL_CCB,"ccb/"),t),o="".concat(n[d.CHANNEL])+(e||L()).replace(/^\/?/,"");s.default.page(o,"2036")},exports.trim=function(e){return console.error("重复定义的方法，待清理"),e.replace(/^\s*/,"").replace(/\s*$/,"")},exports.uniqueFlight=function(e,t){for(var r=[],n={},o=0;o<e.length;o++){var i=t?e[o][t]:e[o];n[JSON.stringify(i)]||(r.push(e[o]),n[JSON.stringify(i)]=1)}return r},exports.urlOauth=function(e){if("devtools"===b.brand)return console.warn("本地开发H5未授权 urlOauth",e),e;return"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3827070276e49e30&redirect_uri=https://wx.17u.cn/flight/getopenid.html?url=".concat(encodeURIComponent(e),"&showwxpaytitle=1&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect")},exports.viewInfo=k,exports.wx_promising=function(e,t){return new Promise((function(r,n){e(o({success:r,fail:n},t))}))};var r=require("../../@babel/runtime/helpers/defineProperty"),n=require("../../@babel/runtime/helpers/typeof"),o=require("../../@babel/runtime/helpers/objectSpread2"),i=t(require("../services/AddressService.js")),a=t(require("../services/CommonService")),c=t(require("../../util/util")),u=t(require("../../util/validate")),s=t(require("../../util/commonEv")),l=t(require("../../utils/userInfo")),d=require("../config/index"),p=t(require("../../utils/locationUtils")),f=t(require("../util/logger")),g=t(require("../../utils/EventBus")),h=t(require("../../util/tcUtil")),v=e(require("../util/getChannelUrl.js")),x=require("../util/tool"),y=require("../../utils/lodash.throttle"),m=l.default;exports.UserInfo=m;var w,b=wx.getSystemInfoSync()||{};exports.SysInfo=b;var T=new g.default;function L(e){var t=getCurrentPages().slice(-1)[0]||{},r=t.route,n=t.options;return r?e?"".concat(r,"?").concat(h.default.JsonToQuery(n)):r:""}exports.eventChannel=T,!wx.tcyc&&(wx.tcyc={}),wx.tcyc.eventChannel=T;var I={},C={};function A(e,t,r,o){return new Promise((function(i,a){(0,x.isObjectLike)(t)?(t.ycchannel||(t.ycchannel="xcx-usecar"),t.ycplatform||(t.ycplatform="wx-usecar")):"string"==typeof t?-1===t.indexOf("ycchannel")&&(t+="&ycchannel=".concat("xcx-usecar","&ycplatform=").concat("wx-usecar","&")):t="&ycchannel=".concat("xcx-usecar","&ycplatform=").concat("wx-usecar","&"),"object"===n(t)&&(t=h.default.JsonToQuery(t)),"string"==typeof t&&(-1===e.indexOf("?")?e+="?"+t:e+=t);var c="accredit=1";"string"==typeof r&&-1!==r.indexOf("=")&&(c=r);var u=r?"needwrap=1&":"",s=(0,v.default)(v.WEBVIEW),l="".concat(s,"?").concat(u).concat(r?c+"&":"","src=").concat(encodeURIComponent(e));o?wx.redirectTo({url:l,success:i,fail:a}):wx.navigateTo({url:l,success:i,fail:a})}))}var P=-1;function S(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"国内用车页",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:L(),o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"国内用车-".concat(d.appName);s.default.ev(n,"2036",e,t,o,r),f.default.bl("ev",o,r).send(e,t)}function O(e,t){S(e,t,"ycLog")}function k(){if(w)return w;var e=b,t=e.safeArea||{},r=750/(e.screenWidth||375),n=e.windowHeight*r,o=e.screenHeight-t.bottom||0;o*=r;var i=e.statusBarHeight||20;return w={winRpxHeight:n,bottomSafeHeight:o,rpxRatio:r,statusBarHeight:i}}exports.rpx2px=function(e){return e/k().rpxRatio};exports.px2rpx=function(e){return e*k().rpxRatio};exports.isEmptyObject=function(e){return!e||0==Object.keys(e).length};function E(e){return"[object Object]"===Object.prototype.toString.call(e)}exports.evtData=function(e){return e&&e.currentTarget&&e.currentTarget.dataset||{}};function j(e,t,r){var n=t||new Date;r=r||"yyyy-MM-dd","string"!=typeof n&&"number"!=typeof n||(n=new Date(t.replace(/\-/g,"/")));var o=6e4*e,i=new Date(n.getTime()+o);return{date:i,day:c.default.format(i,r)}}var q={};function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4;if(e.length<t)return e;var o=e.substr(0,r),i=e.substr(-n,n);return o+"..."+i}var _,D=(0,x.memoizePromiseFn)((function(e){var t=Array.isArray(e)?e[0]:e;return a.default.queryAbTest(t)}));function M(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return new Promise((function(t,r){l.default.getPrivacyAuthorization().then((function(r){r.agree?t(_=!0):e?e&&l.default.showPrivacyAuthorization().then((function(e){e.agree!==_&&wx.tcyc.eventChannel.emit("PrivacyAuthChange",e.agree),_=e.agree,t(_)})):t(_=!1)}))}))}exports.getAbTesting=D;
},{isPage:false,isComponent:false,currentFile:'useCar/common/common.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/condition.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";function e(e,r){for(var t=Object.create(null),o=e.split(","),s=0;s<o.length;s++)t[o[s]]=!0;return r?function(e){return t[e.toLowerCase()]}:function(e){return t[e]}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isTaxi=exports.isStartQuickChoose=exports.isSideStepRecPort=exports.isShowNearCities=exports.isShowCenterMarker=exports.isSetStartForLocation=exports.isSendProduct=exports.isNoShowTimePicker=exports.isMeetProduct=exports.hasRetainTips=exports.hasAddOrderForBookingPrice=void 0;var r=e("11,19,13,15,80"),t=r;exports.isShowCenterMarker=t;var o=r;exports.isSetStartForLocation=o;var s=r;exports.isSideStepRecPort=s;var i=e("12,14");exports.isMeetProduct=i;var a=e("13,15");exports.isSendProduct=a;var p=e("19,11,80,130");exports.isTaxi=p;var x=e("19,12,80,130");exports.isNoShowTimePicker=x;var c=e("14,15,13");exports.isStartQuickChoose=c;var n=e("80");exports.isShowNearCities=n;var S=e("reticket,ticket");exports.hasAddOrderForBookingPrice=S;var d=e("GaoDe");exports.hasRetainTips=d;
},{isPage:false,isComponent:false,currentFile:'useCar/common/condition.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/getPhoneNumberByWx.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t,r=require("../../@babel/runtime/helpers/objectSpread2"),n=require("../../@babel/runtime/helpers/defineProperty"),i=e(require("../../utils/util")),u=require("../config/index"),o=require("../util/getChannelUrl"),s=e(require("../../utils/userInfo")),a=e(require("./request")),c=(n(t={},o.CHANNEL_TCEL_MAIN,"https://wx.17u.cn/appapi/wxextend/getextendinfo"),n(t,o.CHANNEL_TC_MAIN,"".concat(u.kCarApiGateWay,"quickcar/wxLogin/getPhoneNumber")),n(t,o.CHANNEL_CCB,"https://wxxcx.17u.cn/subwayapi/weixin/decryptPhone"),t),l=function(e,t,n){wx.checkSession({success:function(){u.CHANNEL===o.CHANNEL_TC_MAIN?a.default.post(c[u.CHANNEL],e,{isShowErrMsg:0,isNeedLoading:0}).then((function(e){t(e.body.phoneNumber)})).catch((function(e){console.error("wxDecryptPhone fail",e),n()})):u.CHANNEL===o.CHANNEL_CCB&&s.default.getUnionid((function(o,s){i.default.requestData({url:c[u.CHANNEL],data:r(r({},e),{},{openId:s,unionId:o,actKey:getApp().globalData.ownKey||""}),method:"POST",success:function(e){1e3===e.code?t(e.result):n(e.message)}})}))},fail:function(){console.error("session_key 失效"),n()}})};exports.default=l;
},{isPage:false,isComponent:false,currentFile:'useCar/common/getPhoneNumberByWx.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/globalStore.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports=function(){getApp().globalData.useCar||(getApp().globalData.useCar={});var e=getApp().globalData.useCar||{};return{commitTarget:function(t){e.target=t},commitSelectTime:function(t){e.selectTime=t},callbackChooseTarget:function(t){"function"==typeof e.chooseTarget&&(e.chooseTarget(t),wx.navigateBack())},callbackChooseImmediate:function(t,a){"function"==typeof e.chooseImmediate&&(e.chooseImmediate(t),a?a():wx.navigateBack())}}}();
},{isPage:false,isComponent:false,currentFile:'useCar/common/globalStore.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/impact.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.filterRect=function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;if(!i.length)return i;var h="".concat(JSON.stringify(i),";").concat(a);if(r[0]===h)return r[1];var o=[],u=i.map((function(r){var e=r.lat,i=r.lng,h=r.name,o=void 0===h?"":h,u=n(i,e),f=t(u,2),l=f[0],c=f[1];if((a=Math.ceil(a))&&17!==a){var s=a-17,v=s>0;s=2*Math.abs(s),l=v?l*s:l/s,c=v?c*s:c/s}return{x:l,y:c,width:20*o.length+12+30,height:54,data:r}})),f=function(t){for(var r=0;r<o.length;r++){if(e(o[r],t))return!0}return!1},l=u.findIndex((function(t){return t.data.absorb}));o[0]=l>-1?u.splice(l,1)[0]:u.shift();for(var c=0;c<u.length;c++){var s=u[c];f(s)||o.push(s)}return r[0]=h,r[1]=o,o},exports.pointsFilter=function(t,r){return t};var t=require("../../@babel/runtime/helpers/slicedToArray"),r=[];function e(t,r){return!!r&&(t.x<r.x+r.width&&t.x+t.width>r.x&&t.y<r.y+r.height&&t.height+t.y>r.y)}var n=function(t,r){r=+r;var e=20037508.34*(t=+t)/180,n=Math.log(Math.tan((90+r)*Math.PI/360))/(Math.PI/180);return[e,n=20037508.34*n/180]};
},{isPage:false,isComponent:false,currentFile:'useCar/common/impact.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/init.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.getIndexCouponTips=l,exports.getPageName=y,exports.indexInit=function(t){var e=t.activityCallback,o=t.cps;(0,a.getLocationInfo)().then((function(t){t&&(t.latitude||t.lat)?n.store.dispatch({type:n.actions.SET_MY_POSITION,payload:t}):d(),t.cps=o,p(t,e)})).catch((function(t){console.error("indexInit loc catch",t),p({cps:o},e),d()})),u([f])},exports.indexRefresh=function(){u([l])},exports.initAugAndQa=function(t){return new Promise((function(e,a){r.default.postQC("tip",t).then((function(t){n.store.dispatch({type:n.actions.SET_AUGMENT_AND_QA,payload:t.body}),e(t.body)})).catch((function(t){e("增信接口请求失败")}))}))},exports.initCuponData=function(t){var e=(getApp().globalData.locationInfo||{}).Id,a=n.store.getState().locaiotnStartInfoData,i=a.startLongitude,s=a.startLatitude;t.cityId=e||"",t.startLongitude=t.startLongitude||i,t.startLatitude=t.startLatitude||s,t.refId=(0,o.getRefId)(),t.pageKey=19==t.productId||80==t.productId?"xcx_usecar_index_banner":"",r.default.postQC("home/geyMemberCenter",t).then((function(t){n.store.dispatch({type:n.actions.SET_HOME_CUPON,payload:t.body&&t.body.activityList}),n.store.dispatch({type:n.actions.SET_HOME_BANNER,payload:t.body&&t.body.homeBannerInfo?t.body.homeBannerInfo:{}})}))},exports.initSmallHome=function(t){return new Promise((function(e,a){r.default.postQC("brow/smallHome",t).then((function(t){e(t.body)})).catch((function(){e(null)}))}))},exports.refreshActivityInfo=p,exports.refreshTabList=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=wx.tcyc.data.__tabListPromise;if(e)return e;if(e=new Promise((function(t,e){s.default.getTabList({refId:(0,o.getRefId)()||i.kDefaultRefid}).then((function(e){var a=e.body.imgList||[],o=e.body.shareConfig||{},r={};a.forEach((function(t){return r[t.imgKey]=t})),n.store.dispatch(n.actions.setEventImgConfig(r)),n.store.dispatch(n.actions.setShareConfig(o));var s=e.body.tabData,c=s.tabIndex||i.kProductToken.carIndex,d={},u=s.tabList;u.map((function(t){d[t.tabToken]=t.buttonText}));var p=d[c][0].tabToken;s.subTabs=d,wx.setStorage({key:"usecar.tabList",data:s,complete:function(){wx.tcyc.data.__tabListPromise=null,wx.tcyc.data.__tabListLastTime=Date.now(),wx.tcyc.data.__tabListRes={tabList:u,tabIndex:c,currentTab:p},n.store.dispatch(n.actions.setTabList(s)),t({tabList:u,tabIndex:c,currentTab:p})}})})).catch((function(t){console.error("refreshTabList err",t),wx.tcyc.data.__tabListPromise=null,e(t)}))})),t.cacheFirst&&wx.tcyc.data.__tabListRes)return Promise.resolve(wx.tcyc.data.__tabListRes);return wx.tcyc.data.__tabListPromise=e,e},exports.setPositionFail=d,exports.traceEvByPage=function(){for(var t=n.store.getState().tabInfo.tabIndex,a=y(t),o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];r.push(a),e.traceEv.apply(e.traceEv,r)},exports.userOrderCheck=f;var e=require("./common"),a=require("./locationUtil"),o=require("./business.js"),n=require("../store/index"),r=t(require("./request")),i=require("../config/index"),s=t(require("../services/CommonService.js")),c=require("../services/UserService");function d(){n.store.dispatch({type:n.actions.SET_MY_POSITION,payload:{isFail:!0}})}function u(t){if(n.store.getState().common.refid)t.forEach((function(t){return t()}));else var e=n.store.subscribe((function(){(0,o.getRefId)()&&(t.forEach((function(t){return t()})),e&&e())}))}function p(t,a,s){var c,d,u,p=(null==t||null===(c=t.cps)||void 0===c?void 0:c.refid)||(0,o.getRefId)()||i.kDefaultRefid,f=(0,e.getPages)(),l=n.store.getState().tabInfo.tabIndex,y=s||{},b=y.startLongitude,g=y.startLatitude,h={refId:p,lat:t.lat,lng:t.lng,locationCity:t.cityId,useCarCity:"",startCity:"",arriveCity:"",isFirst:!!n.store.getState().common.oncePopup,pageKey:"xcx".concat(f,"/").concat(l),promotionId:null==t||null===(d=t.cps)||void 0===d?void 0:d.promotionId,userSource:null==t||null===(u=t.cps)||void 0===u?void 0:u.userSource,startLongitude:b,startLatitude:g};r.default.postQC("materielTicket/get",h,{isShowErrMsg:!1,isNeedLoading:!1}).then((function(t){200==t.status&&(t=t.body||{});var e,o,r=t,s=r.toastInfo,c=r.ticketBottomInfo;s&&(n.store.dispatch({type:n.actions.SET_POPUP_DATA,payload:s}),n.store.dispatch({type:n.actions.SET_INDEX_POPUP_LEVEL,payload:i.ACTIVITY_POPUP_LEVEL}),n.store.dispatch({type:n.actions.ONCE_POPUP,payload:!1})),n.store.dispatch({type:n.actions.SET_ACTIVITY_INFO,payload:c}),o=t||{},"function"==typeof(e=a)&&e(o)})).catch((function(t){n.store.dispatch({type:n.actions.SET_INDEX_POPUP_LEVEL,payload:0})}))}function f(){var t="internalcarrainbowap.userOrderCheck",e={reqType:0,productId:n.store.getState().productId};r.default.post("".concat(i.kCarApiGateWay,"ajax/getData/")+t,e,{interfaceid:t,isShowErrMsg:!1}).then((function(t){n.store.dispatch({type:n.actions.SET_CARORDER_DATA,payload:t})}))}function l(){(0,c.queryIndexCouponTips)().then((function(t){n.store.dispatch({type:n.actions.SET_COUPON_TIPS_DATA,payload:t})}))}function y(t){var e={airport:"pages/usecar/index/flight",smallTrain:"pages/usecar/index/train",specialCarIndex:"pages/usecar/index/car"}[t],a=n.store.getState().common.refid;return"".concat(e,"?wxrefid=").concat(a)}!wx.tcyc&&(wx.tcyc={}),wx.tcyc.traceEv=e.traceEv,wx.tcyc.data=Object.create(null);
},{isPage:false,isComponent:false,currentFile:'useCar/common/init.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/localStore.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,o,t=require("../../@babel/runtime/helpers/objectSpread2"),a=require("../../@babel/runtime/helpers/typeof"),r=require("../store/index");module.exports=(o={chooseCityCallback:e=function(){},chooseCompanyHomeCallback:e,chooseComeInCityCallback:e},t(t(t({},{city:{},homeCompany:{}}),o),{},{dispatch:function(e,o){var t=r.actions[e],i=a(t);"function"===i?r.store.dispatch(t(o)):"string"===i&&r.store.dispatch({type:e,payload:o})}}));
},{isPage:false,isComponent:false,currentFile:'useCar/common/localStore.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/locationUtil.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.convertAddrToEle=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"start",r=s(t);return Object.keys(r).reduce((function(t,n){return t[r[n]||n]=e[n],t}),{})},exports.getAddrFmtMap=s,exports.getLocationInfo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.privacyAuthorization)(1===e.clickType).then((function(e){if(!e)throw new Error("privacy_auth_fail");return d()})).then((function(t){return(0,o.logTrace)("poiA","^".concat(t.accuracy,"^").concat(t.longitude,"^").concat(t.latitude,"^").concat(e.clickType,"^")),a.default.getAddressByLocation({lat:t.latitude,lng:t.longitude,clickType:e.clickType})})).then((function(t){return e.normalize?m(t.body):t.body})).catch((function(e){e||(e=new Error);var t=e.errMsg||e.stack||e.message||"wxApiErr";throw(0,o.logTrace)("poiFail",t),e}))},exports.getSysLocation=d,exports.normalizeAddr=m,exports.revertAddrFromElem=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"start",r=s(t);return Object.keys(r).reduce((function(t,n){return t[n]=e[r[n]],t}),{})};var t,r=require("../../@babel/runtime/helpers/slicedToArray"),n=require("../../@babel/runtime/helpers/objectSpread2"),i=e(require("../util/logger")),o=require("./common"),a=e(require("../services/AddressService.js")),c=require("../util/tool"),l=e(require("../../util/tcUtil")),u={latitude:"",longitude:"",timestamp:null};function d(){var e=i.default.dl("gps"),r=Date.now();return u.timestamp&&r-u.timestamp<1e4?Promise.resolve(u):t||(t=new Promise((function(i,o){l.default.getLocation({type:"gcj02",success:function(o){t=null,u=n(n({},o),{},{timestamp:r}),i(u),e.send("ok",o,1)},fail:function(r){t=null,o(r),e.err(r,1)}})})))}function s(e){return{cityId:"".concat(e,"CityId"),cityName:"".concat(e,"CityName"),name:"".concat(e,"Address"),lng:"".concat(e,"Longitude"),lat:"".concat(e,"Latitude")}}function m(e){if(!e.lat&&!e.latitude&&e.location){var t=e.location.split(","),i=r(t,2),o=i[0],a=i[1];Object.assign(e,{lng:o,lat:a})}return n(n({},(0,c.omit)(e,["city_id","city_name","lon"])),{},{cityId:+(e.cityId||e.city_id),cityName:e.cityName||e.city_name,name:e.name||e.address,address:e.address||e.addressDetail||e.name,lng:+(e.lng||e.longitude||e.lon),lat:+(e.lat||e.latitude)})}
},{isPage:false,isComponent:false,currentFile:'useCar/common/locationUtil.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/map.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.kWalkingLineStyles=exports.kDriverLineStyles=exports.default=void 0;var t=require("../../@babel/runtime/helpers/objectSpread2"),i=require("../../@babel/runtime/helpers/toConsumableArray"),r=require("../../@babel/runtime/helpers/classCallCheck"),n=require("../../@babel/runtime/helpers/createClass"),o=require("../config/index"),a=e(require("./request")),s=(0,require("./common").viewInfo)().rpxRatio;function l(e){return e/s}var u={color:"#5D9BF8",width:l(6),borderWidth:0,dottedLine:!0};exports.kWalkingLineStyles=u;var c={color:"#06c584",width:14/s,arrowLine:!0,dottedLine:!1};exports.kDriverLineStyles=c;var d=function(){function e(t){r(this,e),this._markers=[],this._polylines=[],this._autoIncrementID=1,this._startPoi={},this._endPoi={}}return n(e,[{key:"markers",get:function(){return this._markers}},{key:"polylines",get:function(){return this._polylines}},{key:"setMarker",value:function(e,t){var i=-1;e.id?(e.id>=this._autoIncrementID&&(this._autoIncrementID=e.id+1),i=this.markers.findIndex((function(t){return t.id==e.id}))):e.id=this._autoIncrementID++;var r=t?e:this.formatPoints(e);return-1!==i?this._markers[i]=r:this._markers.push(r),r}},{key:"setPolylines",value:function(e){this._polylines=[].concat(i(this._polylines),i(e))}},{key:"getDirection",value:function(e){var t=this,i=e.from,r=e.to,n=e.startPoiId,s=e.endPoiId;return new Promise((function(e,l){var u="".concat(o.kCarApiGateWay,"traffic/api/map/get/track/"),c={"畅通":"#06C584","缓行":"#FFC131","拥堵":"#ED5E52","严重拥堵":"#B91B1B"},d=function(e){var t=!e.road;return c[e.status]||(t?"#4683FE":"#06C584")};a.default.post(u,{start_location:i,end_location:r,startPoiId:n,endPoiId:s},{isShowErrMsg:!1,isNeedLoading:!1}).then((function(i){if(t.clearPolylines(),200==i.code){var r=i.data,n=r.cost_time,o=r.distance,a=r.points,s=r.route_list,u=[],c=[];if(s)s.forEach((function(e,t){for(var i=e.polyline.split(";"),r=0;r<i.length;r++)u.push({latitude:i[r].split(",")[1],longitude:i[r].split(",")[0]}),(r>0||t>0)&&c.push(d(e))}));else for(var h=a.split(";"),f=0;f<h.length;f++)u.push({latitude:h[f].split(",")[1],longitude:h[f].split(",")[0]});e({points:u,distance:o,duration:n,colorList:c})}else l(i)})).catch((function(e){l(e)}))}))}},{key:"hasMarker",value:function(e){return this._markers.some((function(t){return e==t}))}},{key:"clearMarker",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.blackList,i=void 0===t?[]:t;i.length?this._markers=this._markers.filter((function(e){return-1!==i.indexOf(e)})):(this._markers=[],this._autoIncrementID=1)}},{key:"clearPolylines",value:function(){this._polylines=[]}},{key:"clear",value:function(){this.clearMarker(),this.clearPolylines()}},{key:"setStartMarker",value:function(e,t,i,r,n){var a={id:1,latitude:t,longitude:e,width:l(90),height:l(112),iconPath:o.kImgPrefix+"icon_start_0917_@3x.png",calloutName:r,name:i,zIndex:1,anchor:{x:.5,y:.86}};n&&Object.assign(a,n),this._startPoi={lng:e,lat:t};var s=this.setMarker(a);return this._startMarker=s,s}},{key:"setEndMarker",value:function(e,t,i,r,n){var a={id:2,latitude:t,longitude:e,width:l(90),height:l(112),iconPath:o.kImgPrefix+"icon_end_0917_@3x.png",calloutName:r,name:i,anchor:{x:.5,y:.86},zIndex:1,isEnd:!0};n&&Object.assign(a,n),this._endPoi={lng:e,lat:t};var s=this.setMarker(a);return this._endMarker=s,s}},{key:"drawDirectionLine",value:function(e){var i=this,r=e.from,n=e.to,o=e.styles,a=void 0===o?c:o,s=e.startPoiId,l=e.endPoiId;return new Promise((function(e,o){i.getDirection({from:r,to:n,startPoiId:s,endPoiId:l}).then((function(r){var n=[t(t({},a),{},{points:r.points})];r.colorList&&r.colorList.length&&(n[0].colorList=r.colorList),i.setPolylines(n),e(t({polylines:n},r))})).catch((function(e){return o(e)}))}))}},{key:"drawWalkingLine",value:function(e){var r=e.from,n=e.to,o=e.styles,a=[t(t({},void 0===o?u:o),{},{points:[r,n]})];this._polylines=[].concat(i(this._polylines),a)}},{key:"formatPoints",value:function(e){var t=e.id,i=e.latitude,r=e.longitude,n=e.name,o=e.iconPath,a=e.calloutName,u=e.customCallout,c=e.width,d=e.height,h=e.rotate,f=e.anchor,p=e.zIndex,k=e.isEnd,m={content:a,color:"#333333",fontSize:22/s,borderRadius:100,bgColor:"#ffffff",padding:20/s,display:"ALWAYS",textAlign:"center",borderWidth:1.4/s,borderColor:"#00000016",anchorX:0,anchorY:l(30)},v={latitude:i,longitude:r,id:t,iconPath:o,width:c||l(58),height:d||l(76),zIndex:p||2,callout:m,label:n?{content:n,fontSize:l(24),color:k?"#FF6509":"#00b670",anchorX:"10",anchorY:"-12",bgColor:"#FFFFFF",padding:5,borderWidth:.5,borderColor:"#e4e4e4",borderRadius:20}:void 0};return v.customCallout=u,h&&(v.rotate=h),f&&(v.anchor=f),!n&&delete v.label,v}}]),e}();exports.default=d;
},{isPage:false,isComponent:false,currentFile:'useCar/common/map.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/map/mapUtil.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"getDistance",{enumerable:!0,get:function(){return t.getDistance}}),exports.getLatLngOffset=function(t,e,n,r){return e+=r*Math.sin(n)/(6371393*Math.cos(t)*2*Math.PI/360),{latitude:t+=r*Math.cos(n)/(12742786*Math.PI/360),longitude:e}},Object.defineProperty(exports,"isLngLatInBounds",{enumerable:!0,get:function(){return t.isLngLatInBounds}}),exports.isPointInPolygon=function(t,e){var n=0,r=e.length;if(r<3)return!1;for(var i=t.latitude,o=t.longitude,u=0;u<r;u++){var a,s,d=+e[u].latitude,l=+e[u].longitude;if(u==r-1?(s=+e[0].latitude,a=+e[0].longitude):(s=+e[u+1].latitude,a=+e[u+1].longitude),i>=d&&i<s||i>=s&&i<d)if(Math.abs(d-s)>0)l-(l-a)*(d-i)/(d-s)<o&&(n+=1)}return n%2!=0};var t=require("../common");
},{isPage:false,isComponent:false,currentFile:'useCar/common/map/mapUtil.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/pickupSpotEvaluator.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireWildcard"),t=require("../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.evalCreateOrder=function(e,t){u.price=s(e),u.useRecommendStatus=function(){var e=u.price.latlng,t=u.adsorb;if(t&&e===t.latlng)return 1;return 0}(),u.orderId=t,n.default.postQC("poiAnalyze/createPoiInfo",u,{isNeedLoading:!1,isShowErrMsg:!1}),u={abTest:u.abTest}},exports.evalHandle=function(e,t){var a=e.source,n="mapLocation"===a,i=t.betterPickupSpots,o=!1===e.absorb,s=t.pickupSpotsNew,l=c(t),d=["distance"],p=t.pickUpAbTest,f=t.cityId;u.abTest=p,n?(u.position=l,u.manual=null):u.manual=r(r({},l),{},{type:a});u.adsorb=!o&&i?c(r(r({},i),{},{cityId:f}),d):null;!o&&s&&(u.pickups=s.map((function(e){return c(e,d)})))},exports.evalMainHome=function(e){try{if(!e)return;if("string"==typeof e)try{e=JSON.parse(decodeURIComponent(e))}catch(e){return}var t=a.default.get(e,"hint",""),n=a.default.get(e,"pickUpAbTest","");if(!n)return;var l=s(r(r({},e),{},{type:"mh"}));u.abTest=n,t?u.adsorb=l:u.manual=l,wx.getStorage({key:"useCarLocationCache",success:function(s){var l=a.default.get(s,"data.data.resData",{}),d=l.reqLat,p=l.reqLng,f=l.cityId,b=l.cityName;u.position=c({lat:d,lng:p,cityId:f}),(0,i.updateLoc)(d,p,f,b);var g=o(e);i.default.bl("plrc","dsy-cross","".concat(p,",").concat(d)).send(t?"1":"0",r(r({},g),{},{cityName:b,ab:n}))}})}catch(e){}},exports.getPickupAB=function(){return u.abTest};var r=require("../../@babel/runtime/helpers/objectSpread2"),a=t(require("../../util/tcUtil")),n=t(require("./request")),i=e(require("../util/logger")),u={};function c(e,t){var r={latlng:"".concat(e.lng,",").concat(e.lat),name:e.name,cityId:e.cityId};return t&&t.forEach((function(t){return r[t]=e[t]})),r}function o(e){return{lat:+e.startLatitude,lng:+e.startLongitude,name:e.startAddress,cityId:+e.startCityId}}function s(e){return c(o(e))}
},{isPage:false,isComponent:false,currentFile:'useCar/common/pickupSpotEvaluator.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/priceManager.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={PriceManager:!0};exports.PriceManager=void 0;var r,t,i,s,u,c=require("../../@babel/runtime/helpers/objectSpread2"),n=require("./priceQuery/PriceQuerier"),a=require("./priceQuery/constants");function o(e){this._productId=0,this.resultList=[],this._querier=e,this.lastQueyId=0}Object.keys(a).forEach((function(r){"default"!==r&&"__esModule"!==r&&(Object.prototype.hasOwnProperty.call(e,r)||r in exports&&exports[r]===a[r]||Object.defineProperty(exports,r,{enumerable:!0,get:function(){return a[r]}}))})),r=require("./priceQuery/constants").QueryStatus,t=require("./priceQuery/queryPriceUtils").syncPrice2Tab,i=require("./common"),s=i.getProductId,u=i.mainProcTrace,o.prototype={queryPrice:function(e){var r=this;return new Promise((function(t,i){if(e){r.lastQueyId++,e.queryId=r.lastQueyId,r.queryId=r.lastQueyId;var n=s(e);!n&&e.customParams&&(n=s(e.customParams)),n&&(r.productId=n||19)}var a=r._querier;a&&a.queryPrice(c(c({},e),{},{params:{fixedPriceAndTaxi:r.fixedPriceAndTaxi||0}})).then((function(e){var s=c({},a.result.reqParams);delete s.pointShowText,delete s.showMode,delete s.unionId,delete s.openId,delete s.sectoken,delete s.userKey,e?(u("询价成功","^询价成功^参数：".concat(JSON.stringify(s),"^").concat(a.result.priceMark,"^")),r.resultList.push(a.result),r.resultList.length>5&&r.resultList.shift()):(u("询价失败","^询价失败^参数：".concat(JSON.stringify(s),"^").concat(a.result.priceMark,"^")),i()),t(e)})).catch(i)}))},get querier(){return this._querier},set querier(e){var r=this._querier;r&&r!==e&&r.abort(),this._querier=e},set productId(e){this._querier.productId=e,this._productId=e},get productId(){return this._productId},abort:function(){this.querier.abort()},retry:function(e){this.querier.retry&&this.querier.retry(e)},refreshPrice:function(){var e=this;return new Promise((function(r){e._isRefreshPrice=!0,e.querier.retry({params:{fixedPriceAndTaxi:e.fixedPriceAndTaxi},keepLastSelect:!0,isRefresh:!0,queryId:e.queryId}).then((function(t){var i=e.querier;t?(u("询价成功","^重新询价成功^请求参数：".concat(JSON.stringify(i.result.reqParams),"^返回数据：").concat(JSON.stringify(i.result.data),"^")),e.resultList.push(i.result),e.resultList.length>5&&e.resultList.shift()):u("询价失败","^重新询价失败^请求参数：".concat(JSON.stringify(i.result.reqParams),"^返回数据：").concat(JSON.stringify(i.result.data),"^")),e._isRefreshPrice=!1,r(t)})).catch((function(t){e._isRefreshPrice=!1,r(!1)}))}))},setFixedPriceAndTaxi:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.fixedPriceAndTaxi=e},getFixedPriceAndTaxi:function(){return this.fixedPriceAndTaxi},getQueryParams:function(){return c({},this.querier.queryParams)},get lastQueryParams(){return c({},this.querier.lastQueryParams)},getPriceList:function(){return this.querier.result.list},getQueryResult:function(){return this.querier.result},get status(){return this._querier?this.querier.status:r.NoQuerier},get exceptionInfo(){return this._querier?this.querier.exception:{}},switchTabSelect:function(e){var r=this.querier.result,i=r.tabList,s=r.selectTable,u=i[e],c=!u.selected,n={};return u.selected=c,u.list.map((function(e){var r=s[e]||0;c?"a"==r?r=1:r++:r="a"==r?0:--r>=0?r:0,s[e]=r,n[e]=r})),u.selected=c,this.refreshSelect(),t(r.list,i),{selectStatus:c}},onTabAllSel:function(e){var r=this.querier.result,i=r.tabList,s=r.selectTable,u=i[e],c=!(1==u.selectedStatus);return u.list.map((function(e){var r=0;c?"a"==r?r=1:r++:r="a"==r?0:--r>=0?r:0,s[e]=r})),u.selected=c,this.refreshSelect(),t(r.list,i),{selectStatus:c}},switchCarSelect:function(e){var r=e.key,i=e.selectTable,s=this.querier.result;i?s.selectTable=i:(i=s.selectTable)[r]=i[r]?0:i[r]||"a",this.refreshSelect(),t(s.list,s.tabList)},refreshSelect:function(){var e=this.querier.result,r=e.selectTable;e.list.forEach((function(e){e.priceList.forEach((function(e){e.selected=r[e.key]}))}))},paramsWithPriceMark:function(e){for(var r=this.resultList.length;r--;r>=0)for(var t=this.resultList[r],i=t.list,s=0;s<i.length;s++){var u=i[s];if(u.priceList.length&&u.priceList[0].priceMark===e)return t.reqParams}return null},setSelPolyCode:function(e){this.querier.result.selPolyCode=e,this.querier.result.carTypePolyToCount.forEach((function(r){var t=e.findIndex((function(e){return e==r.code}))>-1;r.selected=t,r.priceList.forEach((function(e){e.selected=t}))}))}};var l=new o;exports.PriceManager=l,!wx.tcyc&&(wx.tcyc={}),!l.querier&&(l.querier=new n.PriceQuerier({priceManager:l}));
},{isPage:false,isComponent:false,currentFile:'useCar/common/priceManager.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/priceQuery/PriceQuerier.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.PriceQuerier=void 0;var t=require("../../../@babel/runtime/helpers/objectSpread2");require("../../../@babel/runtime/helpers/Arrayincludes"),require("../../../@babel/runtime/helpers/Objectentries");var r=e(require("../../../@babel/runtime/regenerator")),a=require("../../../@babel/runtime/helpers/asyncToGenerator"),s=require("../../../@babel/runtime/helpers/classCallCheck"),i=require("../../../@babel/runtime/helpers/createClass"),n=(e(require("../../../utils/regenerator-runtime")),require("../../config/index")),u=require("../business"),c=require("../../store/index"),l=require("./constants"),o=require("./queryPriceUtils"),p=(require("../priceManager"),require("../trackHelper")),y=require("../../util/tool"),d=e(require("../../services/ProcessService")),h=e(require("../../../util/tcUtil")),f=e(require("../../../util/date")),T=require("../../util/logger"),m=function(){function e(t){var r=t.priceManager;s(this,e),this.priceManager=r,this._status=l.QueryStatus.Ready,this.result={typeNames:[],data:{},list:[],tabList:[],reqParams:{},isRefresh:!1,carTypePolyInfos:[],allPolySel:!1,sfcInfo:null,strategyName:"",selPolyCode:[],carTypePolyToCount:[],polyCarExtra:null}}var m;return i(e,[{key:"queryPrice",value:(m=a(r.default.mark((function e(){var t,a,s,i,o,y,d,f,m,g,b=arguments;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=b.length>0&&void 0!==b[0]?b[0]:{},this.exception="",this.result.queryId=t.queryId,wx.tcyc.eventChannel,a=!0,e.prev=5,this.status=l.QueryStatus.Loading,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(5),console.error(e.t0),e.abrupt("return",!1);case 13:return t.isRetry?s=Object.assign({},this._paramsBackup,t.params):(s=Object.assign({},t.customParams||this.queryParams,t.params)).chargeType=t.chargeType,i=(0,u.getRefId)()||n.kDefaultRefid,s.refId=i,s.showMode="LIST",s.pageKey="usecarxcc/selectCar",e.prev=18,this._paramsBackup=s,e.prev=20,e.next=23,this.requestPrice(s);case 23:o=e.sent;try{(0,p.trackInquiryRisk)(o)}catch(e){console.warn(e)}e.next=30;break;case 27:throw e.prev=27,e.t1=e.catch(20),e.t1;case 30:if(this.status!==l.QueryStatus.Abort){e.next=32;break}return e.abrupt("return",!1);case 32:if(y=Object.entries(this.priceManager.lastQueryParams).toString()===Object.entries(this.result.reqParams).toString(),this.priceManager.lastQueyId==t.queryId||y){e.next=35;break}return e.abrupt("return",!1);case 35:return this.result=this.responseProcess(o,s,t),this.result.queryId=t.queryId,this.responseCheck(o)||(a=!1),this.status=l.QueryStatus.Success,d=o.abTestResult||{},f=[],Object.keys(d).forEach((function(e){var t={id:e,data:{id:e,abid:e,status:d[e]}};f.push(t)})),c.store.dispatch({type:"SET_ABTEST_INFO",payload:f}),e.abrupt("return",a);case 46:return e.prev=46,e.t2=e.catch(18),(0,T.report)("询价异常",e.t2),m=h.default.get,g=m(e.t2,"code"),this.exception=e.t2,this.result={typeNames:[],data:{},list:[],tabList:[],reqParams:{},isRefresh:!1,carTypePolyInfos:[],allPolySel:!1,sfcInfo:null,strategyName:"",selPolyCode:[],carTypePolyToCount:[],polyCarExtra:null},this.status={200:l.QueryStatus.Empty,400:l.QueryStatus.NetError}[g]||l.QueryStatus.Fail,e.abrupt("return",!1);case 55:case"end":return e.stop()}}),e,this,[[5,9],[18,46],[20,27]])}))),function(){return m.apply(this,arguments)})},{key:"queryParams",get:function(){var e=c.store.getState().common.position,t=Object.assign({},(0,u.getParamsFor)(this.productId));return 0===Object.keys(t).length?(this._status=l.QueryStatus.EmptyParams,{}):(t.useTime=(0,f.default)(t.useTime).format(n.kTimeFormat),t.chargeType=1,e.lat&&(t.localLatitude=e.lat,t.localLongitude=e.lng,t.geoList=c.store.getState().common.geoList),["delayDuration"].forEach((function(e){delete t[e]})),t)}},{key:"requestPrice",value:function(e){return new Promise((function(t,r){d.default.getPriceForNew(e).then((function(e){e.body&&t(e.body)})).catch((function(e){var t=h.default.get(e,"statusCode",200),a=h.default.get(e,"response");r({code:t,rsp:a})}))}))}},{key:"responseCheck",value:function(e){var t=e.carTypePriceInfoList||[];return!(!t||0==t.length)||(this.status=l.QueryStatus.Empty,!1)}},{key:"responseProcess",value:function(e,t,r){var a={},s=e.carPriceBlockInfos||[],i=s.map((function(t){var r=t.includedSupplier;1===t.customizedBlockFlag?t.type=0:t.type=999,delete t.includedSupplier;var a=[];return Object.keys(r).map((function(e){r[e].map((function(r){var s=(0,o.carKey)(e,r);a.push(s),e<t.type&&(t.type=e)}))})),0===e.carTypePriceInfoList.filter((function(e){return e.carTypeId==t.type&&e.priceList.length>0&&(e.isTaxiFlag?e.isTaxiFlag:0)==(t.isTaxiFlag?t.isTaxiFlag:0)})).length&&(t.type=0),t.list=a,t.selectedCarCount=0,void 0===t.isTaxiFlag&&(t.isTaxiFlag="出租车"===t.name?1:0),t.unique=t.type+"_"+t.isTaxiFlag,t})),n=e.carTypePriceInfoList||[],u=[];(0,o.addCornerIcon)(n,t);var c="",l={};if(n.forEach((function(r){var s=r.priceList;if(!s)return!1;var i=(0,y.groupBy)(s,(function(e){return e.supplierType||0}));e.abTestResult&&"A"!==e.abTestResult["20220613_InquirySupplierFolding"]&&(s=[4,2,0,3,1].reduce((function(e,t){return e.concat(i[t]||[])}),[]),r.priceList=s),!i[1]||!i[1].length||i[0]&&i[0].length||i[3]&&i[3].length||i[4]&&i[4].length||(r.bShowInnerTitle=!0,r.innerTitle=r.carType,r.innerTips=r.carTips,r.isOnlyTile=!0);var n=(0,y.omit)(r,["priceList"]),p="@@INIT@@";s.forEach((function(e){(e=(0,o.priceProcess)(e,t)).supplierType=e.supplierType||0,e.typeInfo=n,function(e,t){return!(![2,4].includes(e)||![2,4].includes(t))||!(![0,3].includes(e)||![0,3].includes(t))}(e.supplierType,p)||(2==e.supplierType||4==e.supplierType?(e.bShowInnerTitle=!0,e.innerTitle=r.recommendTitle,e.innerTips=r.recommendSubTitle,p=e.supplierType):1!=e.supplierType&&(e.bShowInnerTitle=!0,e.innerTitle=r.carType,e.innerTips=r.carTips,p=e.supplierType)),0===r.carTypeId&&e.carTypeId&&(e.supplierFullName=e.name);var s=(0,o.carKey)(0===r.carTypeId?e.carTypeId:r.carTypeId,e.code);e.key=s,l[s]=e,c=e.priceMark,e.selected&&(a[s]=a[s]||1)})),r.unique=r.carTypeId+"_"+r.isTaxiFlag,u.push(r.carType)})),e.abTestResult&&e.abTestResult["20221014_eff_001"]&&"B"==e.abTestResult["20221014_eff_001"]||(0,o.dealWithSFC)(n,e.pinChePriceInfo),r.keepLastSelect){var p={},d={},h=[];Object.assign(p,this.result.selectTable),Object.keys(p).forEach((function(e){a[e]=p[e],l[e]&&(l[e].selected=!!p[e])})),this.result.tabList.map((function(e){d[e.name]=e.selected,h.push({name:e.name,selectedCarCount:e.selectedCarCount})})),i.map((function(e){var t=0;e.list.map((function(e){return a[e]&&t++})),e.list.length==t?(e.selected=t,e.selectedCarCount=t,e.selectedStatus=1):e.selected&&0==t?(e.selected=0,e.selectedCarCount=0,e.selectedStatus=0):void 0!==d[e.name]&&(e.selected=d[e.name],h.map((function(t){t.name==e.name&&(e.selectedCarCount=t.selectedCarCount)})),0===e.selectedCarCount?e.selectedStatus=0:e.selectedCarCount===e.list.length?e.selectedStatus=1:e.selectedStatus=2)}))}(0,o.syncPrice2Tab)(n,i);var f=this.handlePolyInfo(e.carTypeStrategyInfo,t),T=f.carTypePolyInfos,m=f.allPolySel,g=f.strategyName,b=f.selPolyCode,P=f.carTypePolyToCount,v=f.polyCarExtra;return{data:e,list:n,typeNames:u,reqParams:t,isRefresh:r.isRefresh,priceMark:c,selectTable:a,tabListData:s,tabList:i,resClientTime:(new Date).getTime(),carTypePolyInfos:T,allPolySel:m,sfcInfo:(0,o.handleSFCInfo)(e.pinChePriceInfo),strategyName:g,selPolyCode:b,carTypePolyToCount:P,polyCarExtra:v}}},{key:"handlePolyInfo",value:function(e,t){var r=this.result.selPolyCode,a=e?e.carTypePolyInfos:[],s=e?e.strategyName:"";a.forEach((function(e){e.selected=e.isHasCheck,e.priceList.forEach((function(e){(0,o.priceProcess)(e,t)})),(r&&r.length>0&&r.findIndex((function(t){return t==e.code}))>-1||e.selected)&&(e.selected=!0,e.priceList.forEach((function(e){return e.selected=!0})))}));var i=[],n=[];a.forEach((function(e){var t=(0,y.omit)(e,["priceList"]);i.push(t),e.selected&&n.push(e.code)}));var u=i&&i.every((function(e){return e.selected})),c={sceneId:e?e.sceneId:"",crowdName:e?e.crowdName:""};return{carTypePolyInfos:i,allPolySel:u,strategyName:s,selPolyCode:n,carTypePolyToCount:a,polyCarExtra:c}}},{key:"retry",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.queryPrice(t({isRetry:!0},e))}},{key:"lastQueryParams",get:function(){return this._paramsBackup||{}}},{key:"abort",value:function(){this._status=l.QueryStatus.Abort}},{key:"status",get:function(){return this._status},set:function(e){this._status!=e&&(this._status=e,wx.tcyc.eventChannel.emit(l.ON_QUERY_STATUS_CHG,e))}}]),e}();exports.PriceQuerier=m;
},{isPage:false,isComponent:false,currentFile:'useCar/common/priceQuery/PriceQuerier.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/priceQuery/constants.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.QueryStatus=exports.ON_QUICK_SELECT_PARAMETER=exports.ON_QUERY_STATUS_CHG=exports.ON_QUERYPRICE=void 0;var e=Object.freeze({EmptyParams:-2,NoQuerier:-1,Ready:0,Loading:1,Success:2,Empty:3,NetError:4,Fail:5,Abort:6,Expired:7});exports.QueryStatus=e;exports.ON_QUERY_STATUS_CHG="ON_YC_QUERYPRICE_STATUS_CHANGE";exports.ON_QUERYPRICE="ON_YC_QUERYPRICE";exports.ON_QUICK_SELECT_PARAMETER="ON_QUICK_SELECT_PARAMETER";
},{isPage:false,isComponent:false,currentFile:'useCar/common/priceQuery/constants.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/priceQuery/queryPriceUtils.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.addCornerIcon=function(e,r){var c=t.store.getState().eventImgConfig||{},n=r.startCityId,o=Object.keys(c).filter((function(e){return"key_4_"===e.substr(0,6)&&c[e].imgUrl})).map((function(e){return e.split("_").slice(2)})).map((function(e){return{productId:e[0],carTypeId:e[1],carCode:e.slice(2).join("_"),iconUrl:c["key_4_"+e.join("_")].imgUrl,sortValue:("all"!==e[2]?100:0)+("all"!==e[1]?10:0)+("all"!==e[0]?1:0),userCityId:(0,i.get)(c,"key_4_"+e.join("_")+".userCity","")}})).sort((function(e,r){return r.sortValue-e.sortValue}));e.forEach((function(e){return e.priceList.forEach((function(t){for(var i=0;i<o.length;i++){var c=o[i],a=""===c.userCityId||c.userCityId.indexOf(n+"")>-1;if((e.carTypeId==c.carTypeId||"all"===c.carTypeId)&&(r.tabServiceTypeId==c.productId||"all"===c.productId)&&(t.code==c.carCode||"all"===c.carCode)&&c.iconUrl&&a){t.cornerIcon=c.iconUrl;break}}}))}))},exports.carKey=function(e,r){return"k".concat(e,"-").concat(r)},exports.dealWithSFC=function(e,r){if((0,i.isEmpty)(e)||(0,i.isEmpty)(e[0].priceList)||(0,i.isEmpty)(r))return;if("ShunFengChe"===e[0].priceList[0].code)return;var t=c.kImgUseCar+"usecar/train/img/shunfengche.png?0804";e[0].priceList.unshift({name:r.title||"顺风车",bShowInnerTitle:!0,innerTips:"超值低价·值得等待",shortName:"顺风车",innerTitle:"超值拼车",code:"ShunFengChe",toActLabel:"去预约",icon:r.logoUrl||t,grayIcon:r.logoUrl||t,merchantLogo:t,selected:!1,actualPrice:r.actualPrice,carLabelString:r.subText})},exports.handleException=function(e){var t=n.default.get,i=t(e,"rsp.header.rspCode"),c=t(e,"rsp.body");2e3==i&&(0,r.openUrl)({jumpUrl:c,needwrap:1})},exports.handleSFCInfo=function(e){if((0,i.isEmpty)(e))return null;var r=c.kImgUseCar+"usecar/train/img/shunfengche.png?0804";return{name:e.title||"顺风车",bShowInnerTitle:!0,innerTips:["超值低价","值得等待"],shortName:"顺风车",innerTitle:"超值拼车",code:"ShunFengChe",toActLabel:"去预约",icon:e.logoUrl||r,grayIcon:e.logoUrl||r,merchantLogo:r,selected:!1,actualPrice:e.actualPrice,carLabelString:e.subText}},exports.priceProcess=function(e,r){return e.calcPrice=e.carPrice,e.discountText="已减",e=function(e){if(e.wxCard||e.channelCardList){e.useWxCard=!0,e.wxCardPrice=0;try{e.wxCardPrice=+e.wxCardReduceCost}catch(e){}var r=0,t=e.channelCardList;t&&t.length>0&&(r=t[0].cardReduceCost),e.calcPrice=((100*e.carPrice-100*e.wxCardPrice-100*r)/100).toFixed(2),e.calcPrice<1&&(e.calcPrice=1)}return e}(e)},exports.syncPrice2Tab=function(e,r){for(var t=new Map,c=0;c<e.length;c++)(0,i.isEmpty)(e[c].priceList)||e[c].priceList.forEach((function(e){t.set(e.key,e)}));r.forEach((function(e){var r=[],i=0,c=!1;if(e.list.forEach((function(e){var n=t.get(e);n&&n.selected&&(i+=1,c=!0,2!=n.chargeType&&(r.push(n.actualPriceText),n.specialDiscountCar&&r.push(n.tjcPriceSuffix||n.ceilingPriceText||Math.ceil(1.3*n.actualPriceText))))})),e.selected=c,e.selectedCarCount=i,0===i?e.selectedStatus=0:i===e.list.length?e.selectedStatus=1:e.selectedStatus=2,!c&&e.oldPriceRegion)return e.higher=e.oldPriceRegion.higher,e.lower=e.oldPriceRegion.lower,void(e.oldPriceRegion="");if(e.oldPriceRegion||(e.oldPriceRegion={higher:e.higher,lower:e.lower}),c){var n=Math.ceil(Math.min.apply(Math,r)),o=Math.ceil(Math.max.apply(Math,r));e.lower=n,e.higher=o>n?o:0}}))};var r=require("../../common/common"),t=require("../../store/index"),i=require("../../util/tool"),c=require("../../config/index"),n=e(require("../../../util/tcUtil"));
},{isPage:false,isComponent:false,currentFile:'useCar/common/priceQuery/queryPriceUtils.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/priceQuery/trackQuerier.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.trackInquiryRisk=void 0;var r=require("../../store/index"),i=require("../../config/index.js"),t=require("../business"),n=require("../common"),o=e(require("../../../util/date"));exports.trackInquiryRisk=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.UserInfo.getUnionidPromise().then((function(s){var u=r.store.getState(),a=((u.passengerInfo||{}).passengerPhone,u.productId),d=u.common.riskConf||{},c=19==a?"即时":"预约",l=e.riskFlag,f=[d.level,d.isNew,s.memberid,s.unionid,null,0,(0,o.default)(new Date).format(i.kTimeFormat),(0,t.getRefId)(),c,l?"是":"否"];(0,n.traceEv)("询价风控页面加载","^页面加载^询价风控记录^".concat(f.join("^"),"^"),"群派询价页")}))};
},{isPage:false,isComponent:false,currentFile:'useCar/common/priceQuery/trackQuerier.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/request.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.cacheInfo=void 0,exports.fetchUserInfo=d;var r=e(require("../../@babel/runtime/regenerator")),n=require("../../@babel/runtime/helpers/objectSpread2"),t=require("../../@babel/runtime/helpers/asyncToGenerator"),o=require("../../@babel/runtime/helpers/classCallCheck"),a=require("../../@babel/runtime/helpers/createClass"),i=require("./common"),c=e(require("../../utils/util")),s=e(require("../util/tripApi")),u=e(require("../../utils/userInfo")),l=require("../config/index"),p=getApp(),f=null;exports.cacheInfo=f;function d(){return new Promise((function(e,r){u.default.getUnionid((function(r,n,t,o){e({unionId:r,openId:n,memberId:t,sectoken:o,userKey:n})}),r,{isNeedToken:!0})}))}function h(){return new Promise((function(e){u.default.getPrivacyAuthorization().then((function(r){var n=r.agree;e(n)}))}))}var b=new(function(){function e(){o(this,e)}return a(e,[{key:"post",value:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},b=a.host,v=void 0===b?s.default.wx17uUrl:b,g=a.interfaceid,x=void 0===g?"":g,m=a.isNeedLoading,y=void 0!==m&&m,q=a.isShowErrMsg,k=void 0===q||q,w=a.requestFrom,O=void 0===w?"H5":w,V=a.platform,I=void 0===V?"xcx-usecar":V,S="1";return new Promise(function(){var b=t(r.default.mark((function t(b,g){var m,q,w,V,j,T,N,A;return r.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,f&&f.openId&&f.unionId&&f.sectoken){r.next=5;break}return r.next=4,d();case 4:exports.cacheInfo=f=r.sent;case 5:if(m=1,-1!==e.indexOf("internalcarrainbowap.getABTestExpVersion")){r.next=10;break}return r.next=9,h();case 9:m=r.sent;case 10:m||(S="0"),r.next=15;break;case 13:r.prev=13,r.t0=r.catch(0);case 15:if(q={},!x){r.next=24;break}if("[object String]"===Object.prototype.toString.call(x)){r.next=19;break}return r.abrupt("return",g(new Error("请输入正确的interfaceid")));case 19:w="","[object Object]"===Object.prototype.toString.call(o)&&(Object.assign(o,n({requestFrom:O,platform:I,appVersion:s.default.appVersion||p.appVersion,channelVersion:o.channelVersion||s.default.channelVersion,setsw:S},f)),w=JSON.stringify(o)),Object.assign(q,{reqbody:{interfaceid:x,reqbody:w}}),r.next=25;break;case 24:Object.assign(q,o,n({requestFrom:O,platform:I,appVersion:s.default.appVersion||p.appVersion,channelVersion:o.channelVersion||s.default.channelVersion,setsw:S},f));case 25:V=0,j=function(r,n){return c.default.requestData({method:"POST",url:"".concat(v,"/").concat(e),header:{sectoken:(f||{}).sectoken||""},timeout:8e3,showLoading:y,data:JSON.stringify(q),success:r,fail:n,complete:function(e){y&&wx.hideLoading()}})},T=function r(n){try{var t=(n||{}).response;t||(t=n);var o=t,a=o.body,i=void 0===a?{}:a,c=o.header,s=(c=void 0===c?{}:c).rspCode,p=c.rspDesc;"0000"===s?b(i):"4010"===s?(exports.cacheInfo=f=null,u.default.clearToken(),V||(V=1,d().then((function(e){exports.cacheInfo=f=e;var n=j(r,N);l&&(l.__requestTask=n)})))):(k&&wx.showToast({title:p,icon:"none",duration:2e3}),g(n),console.log("-> 请求接口"+e+"参数：",q),console.log(new Error("".concat(e,", res状态错误: ").concat(s))))}catch(r){g(new Error("".concat(e,", res 解析出错")))}},A=j(T,N=function(r){try{var t=n({},o);t&&t.phone&&(t.phone=0),(0,i.traceEv)("接口请求失败","".concat(e," ").concat(JSON.stringify(t)," ").concat(JSON.stringify(r)," ").concat(JSON.stringify(a)))}catch(e){console.error(e)}g(r)}),l&&(l.__requestTask=A);case 31:case"end":return r.stop()}}),t,null,[[0,13]])})));return function(e,r){return b.apply(this,arguments)}}())}},{key:"postQC",value:function(){for(var e="".concat(l.kCarApiGateWay,"quickcar/"),r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];return n[0]=e+n[0],this.post.apply(this,n)}}]),e}());exports.default=b;
},{isPage:false,isComponent:false,currentFile:'useCar/common/request.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/schedule.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.IntervalJob=function(t,e,n){var r=0;function s(t,i,e){this._interval=t,this._subscribe=i,this._hitCount=t,this._stopCriterion=e}return s.prototype={setKey:function(t){return this._identifier=t,this},invocation:function(t){if("function"!=typeof this._stopCriterion||!this._stopCriterion(r)){var i=this._hitCount;return(i-=t/1e3)<=0&&(r++,this._subscribe(r),i=this._interval),this._hitCount=i,this}this.cancel()},cancel:function(){return i.removeJob(this),this},pause:function(){return this._isPause=!0,this},resume:function(){return this._isPause=!1,this},setStopCriterion:function(t){return this._stopCriterion=t,this},set interval(t){this._interval=t},get recurrenceCount(){return r}},new s(t,e,n)},exports.default=exports.ScheduleManager=void 0;function t(){var t=this;this._JobList=[],setInterval((function(){t._JobList.forEach((function(t){t.invocation(500)}))}),500)}t.prototype={addJob:function(t){t._identifier&&(this._JobList=this._JobList.filter((function(i){return t._identifier!==i._identifier}))),this._JobList.push(t)},removeJob:function(t){var i=this._JobList.indexOf(t);i>=0&&this._JobList.splice(i,1)},clearAll:function(){this._JobList.length=0}};var i=new t;exports.ScheduleManager=i;var e=i;exports.default=e;
},{isPage:false,isComponent:false,currentFile:'useCar/common/schedule.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/common/trackHelper.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.trackEmptyFixedClick=exports.trackEmptyFixed=void 0,exports.trackFolded=function(e,t){var c=t.information.startCityId,i=o.PriceManager.getQueryResult(),d=i.tabList.find((function(e){return e.customizedBlockFlag}));if(!d)return;var s=[],u=[];i.list.forEach((function(e){return e.priceList.forEach((function(e){2!=e.supplierType&&4!=e.supplierType||s.push(e),4==e.supplierType&&u.push(e)}))}));var m=s.map((function(e){return"".concat(e.supplierFullName,"|").concat(e.typeInfo.carType,"|").concat(e.actualPriceText,"|").concat(4===e.supplierType)})),p="^".concat(e,"^").concat(d.name,"^").concat(r.kProductNameMap[o.PriceManager.productId],"^").concat(c,"^").concat(s.length,"^").concat(m.join(";"),"^").concat((0,n.getRefId)(),"^");"推荐位曝光"===e&&(p="".concat(p).concat(u.length,"^"));(0,a.traceEv)(e,p,"群派报价页")},exports.trackWxCreditConfrim=exports.trackWxCreditBtn=exports.trackPaymentRiskResult=exports.trackPaymentOnCreateOrderOk=exports.trackPaymentOnCreateOrderFail=exports.trackPaymentMethodChange=exports.trackInquiryRisk=void 0;var t=require("../store/index"),r=require("../config/index.js"),n=require("../common/business"),a=require("../common/common"),o=require("../common/priceManager"),c=e(require("../../util/date"));exports.trackPaymentMethodChange=function(e,t,o){var i=19==e.queryParams.tcServiceTypeId?"即时":"预约",d=[t,(0,c.default)(new Date).format(r.kTimeFormat),(0,n.getRefId)(),i,o.memberId,o.unionId,null,o.passengerCellphone];(0,a.traceEv)("页面点击","^页面点击^更换支付方式^".concat(d.join("^"),"^"),"群派询价页")};exports.trackPaymentOnCreateOrderOk=function(e,o,i,d){var s=e.data,u=s.riskConf,m=s.payMentInfo,p=e.data.extraChargeInfo||{},l=t.store.getState().common.payMentKeyDict||{},f={wxCredit:"先乘车后付款",promptPay:"预付车费"},y=Object.keys(l).filter((function(e){return Boolean(l[e])})).map((function(e){return f[e]})),I=m&&m.payMentKey&&f[m.payMentKey]?f[m.payMentKey]:"线下支付",k=19==e.queryParams.tcServiceTypeId?"即时":"预约",v=d||{},g=v.minPrice,x=v.maxPrice,C=(o&&o.riskDtos?o.riskDtos:[]).map((function(e){return 1==e.riskType?"设备号":"手机号"})).join(","),P=[i.payMentText,p.addRate,u.level,u.isNew,i.memberId,i.unionId,null,0,(0,c.default)(new Date).format(r.kTimeFormat),(0,n.getRefId)(),k,o.tcOrderId,C?"是":"否",C,"".concat(g,"~").concat(x)];(0,a.traceEv)("页面点击","^页面点击^创单风控记录^".concat(y.join("|"),"^").concat(I,"^").concat(P.join("^"),"^"),"群派询价页")};exports.trackPaymentOnCreateOrderFail=function(e,t,o,i){var d=e.data.riskConf,s=19==e.queryParams.tcServiceTypeId?"即时":"预约",u=i.minPrice,m=i.maxPrice,p={1102:"未完成",1200:"低于550分",1201:"未完结",10007:"未完成",9001:"被风控"}[o]||null,l=[d.level,d.isNew,t.memberId||t.memberid,t.unionId||t.unionid,null,0,(0,c.default)(new Date).format(r.kTimeFormat),(0,n.getRefId)(),s,p,"".concat(u,"~").concat(m)];(0,a.traceEv)("支付分创单失败加载","^页面加载^微信支付分授权失败^".concat(l.join("^"),"^").concat(o,"^"),"群派询价页")};exports.trackPaymentRiskResult=function(e,t){var o=19==e.queryParams.tcServiceTypeId?"即时":"预约",i=[t.result,t.memberId||t.memberid,t.unionId||t.unionid,null,t.passengerCellphone,(0,c.default)(new Date).format(r.kTimeFormat),(0,n.getRefId)(),o];(0,a.traceEv)("页面点击","^风控拦截^".concat(i.join("^"),"^"),"群派询价页")};exports.trackInquiryRisk=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.UserInfo.getUnionidPromise().then((function(o){var i=t.store.getState(),d=((i.passengerInfo||{}).passengerPhone,i.productId),s=i.common.riskConf||{},u=19==d?"即时":"预约",m=e.riskFlag,p=[s.level,s.isNew,o.memberid,o.unionid,null,0,(0,c.default)(new Date).format(r.kTimeFormat),(0,n.getRefId)(),u,m?"是":"否"];(0,a.traceEv)("询价风控页面加载","^页面加载^询价风控记录^".concat(p.join("^"),"^"),"群派询价页")}))};exports.trackWxCreditConfrim=function(e){var r=e.mode;a.UserInfo.getUnionidPromise().then((function(e){var o=t.store.getState(),c=o.productId,i=o.common.riskConf||{},d=19==c?"即时":"预约",s=(o.passengerInfo||{}).passengerPhone,u=["是",i.level,e.memberid,e.unionid,null,s,(0,n.getRefId)(),d],m=r?"支付分切前付支付分引导弹窗加载":"支付分授权失败支付分引导弹窗加载";(0,a.traceEv)(m,"^".concat(m,"^").concat(u.join("^"),"^"),"群派询价页")}))};exports.trackWxCreditBtn=function(e){var r=e.type,o=e.mode;a.UserInfo.getUnionidPromise().then((function(e){var c=t.store.getState(),i=c.productId,d=c.common.riskConf||{},s=(c.passengerInfo||{}).passengerPhone,u=19==i?"即时":"预约",m=(e.allData||{deviceInfo:{}}).deviceInfo.deviceId||null,p=o?1==r?"使用支付分":"确定预付车费":1==r?"再次授权":"直接打车",l=["是",d.level,p,e.memberid,e.unionid,m,s,(0,n.getRefId)(),u],f=o?"支付分切前付支付分引导弹窗点击":"支付分引导弹窗点击";(0,a.traceEv)(f,"^".concat(f,"^").concat(l.join("^"),"^"),"群派询价页")}))};exports.trackEmptyFixed=function(e){var r=19==t.store.getState().productId?"即时":"预约",o=[(0,n.getRefId)(),r,e.startAddress,e.startCityId,e.endAddress,e.endCityId,e.useTime];(0,a.traceEv)("前付无车兜底页面加载","^".concat(o.join("^"),"^"),"群派询价页")};exports.trackEmptyFixedClick=function(e){var r=19==t.store.getState().productId?"即时":"预约",o=[(0,n.getRefId)(),r,e.startAddress,e.startCityId,e.endAddress,e.endCityId,e.useTime];(0,a.traceEv)("前付无车兜底页面点击","^".concat(o.join("^"),"^"),"群派询价页")};
},{isPage:false,isComponent:false,currentFile:'useCar/common/trackHelper.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/component/pickupDateTime/bussines.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.CarDateSelector=void 0,exports.changeHour=c,exports.columnChange=function(e,t,a){var s=a.datesValue,i=a.dates,n=a.selects,r={selects:n};n[e]=t;var u=s[0][t];if(0===e){a.date=u,u._isNow&&(i[1]=[],i[2]=[],r["dates[1]"]=[],r["dates[2]"]=[]);var o=c(a.hour,a);n[1]=o.index,r["selects[1]"]=n[1],Object.assign(r,o.updates)}else if(1===e){var d=i[1][t]||"";if(d){var l=c(d=+d.slice(0,-1),a);n[1]=l.index,r["selects[1]"]=n[1],Object.assign(r,l.updates)}}else i[2][t]&&(n[2]=t,r["selects[2]"]=n[2]);u._isNow||(n[1]<0&&(n[1]=0,r["selects[1]"]=0),n[2]<0&&(n[2]=0,r["selects[2]"]=0));i[2].length&&i[2][n[2]]&&(a.minute=i[2][n[2]].slice(0,-1));return{updates:r}},exports.formatDate=function(e){var t=new Date(e).getFullYear(),a=(new Date).getFullYear(),s=new Date(e).getMonth()+1,i=(new Date).getMonth()+1,n=new Date(e).getDate(),r=(new Date).getDate(),u="".concat(s,"月").concat(n,"日");t===a&&s===i&&(n===r?u="今天":n-r==1?u="明天":n-r==2&&(u="后天"));return u+(0,o.default)(e).format(" H:mm 用车")},exports.formatTimeTenUp=function(e){var t=new Date(e),a=new Date(6e5*Math.ceil(t/6e5));return a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()+" "+a.getHours()+":"+a.getMinutes()},exports.initHours=g,exports.initMinutes=D,exports.initializeDateData=f,exports.timeChange=function(e,t){var a=t.datesValue,s=e,i=a[0][s[0]]||{},u="现在用车",o="",d=t.timeFormat||"M月d日 h:m用车";i._isNow?(o=n.default.format(new Date,r.kTimeFormat),t.date=i=new Date,i._isNow=!0):(i.setMinutes(t.minute),i.setHours(t.hour),u=n.default.format(i,d),o=n.default.format(i,r.kTimeFormat),t.date=i);return t.useTime=o,{useTime:o,serviceTime:u}};var t=require("../../../@babel/runtime/helpers/toConsumableArray"),a=require("../../../@babel/runtime/helpers/defineProperty"),s=require("../../../@babel/runtime/helpers/createClass"),i=require("../../../@babel/runtime/helpers/classCallCheck"),n=e(require("../../../util/util")),r=require("../../config/index"),u=require("../../common/common"),o=e(require("../../../util/date")),d=["日","一","二","三","四","五","六"],l=s((function e(t,a,s,n,r){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"M月d日";i(this,e),this.beginDate=t,this.endDate=a,this.initDate=s,this.adjustTenMin=void 0===r||r,this.hasNow=!!+n,this.timeFormat=u,f.call(this,this.beginDate,this.endDate,this.initDate,this.adjustTenMin,n,u)}));function f(e,s,i,o,l){var f,m=[[],[],[]],M=[0,0,0],v=0,w=i;e&&"string"==typeof e&&(e=n.default.parseDate(e)),s&&"string"==typeof s&&(s=n.default.parseDate(s)),i&&"string"==typeof i&&(i=n.default.parseDate(i)),n.default.isValidDate(i)||(i=new Date),n.default.isValidDate(e)||(e=new Date).setMinutes((new Date).getMinutes()+35),n.default.isValidDate(s)||(s=new Date).setDate(s.getDate()+30),o&&(h(i),h(e),h(s));var p=[[],[],[]],b=this||{};b.datesValue=p,b.beginDate=e,b.endDate=s,b.minute=i.getMinutes();var H=new Date,x=n.default.format(H,"M月d日"),y=n.default.addDay(1,H,"M月d日").day,T=n.default.addDay(2,H,"M月d日").day,q=(a(f={},x,"今天"),a(f,y,"明天"),a(f,T,"后天"),f),F=e.getMinutes()+(e?0:35);if(e.setMinutes(F),o&&F%10&&(F+=10-F%10),l){p[0][0]="now";var N=new Date;N._isNow=!0,p[0][0]=N,m[0][0]="现在用车",v=1}if(i<e)if(l&&"begin"!=w){b.date="now";var _=new Date;_._isNow=!0,b.date=_}else i=e,b.date=e;else b.date=i;b.beginHour=e.getHours(),b.beginMin=F%60,n.default.isValidDate(s)||(s=new Date(e)).setDate(e.getDate()+30);var k=s.getMinutes();o&&k%10&&(k-=k%10),b.endHour=s.getHours(),b.endMin=k;var C=0,V=new Date(n.default.format(e,"yyyy/MM/dd"));V.setHours(0);for(var j=n.default.format(i,"M月d日");V<s;){var O=n.default.format(V,"M月d日");O==j&&V.getFullYear()==i.getFullYear()&&(C=v),O+=q[O]?" "+q[O]:" 周"+d[V.getDay()],p[0][v]=new Date(V),m[0][v++]=(0,u.isIphoneIos)()?" "+O:O,V.setDate(V.getDate()+1)}b.lastDateIndex=v-1,m[1]=g(),b.kHours=t(m[1]),m[2]=D(),b.kMinutes=t(m[2]),b.date&&b.date._isNow?(m[1]=[],m[2]=[]):M[0]=C,b.dates=m,b.selects=M,b.useTime=n.default.format(b.date,r.kTimeFormat),M[1]=c(i.getHours(),b).index;var Y=i.getMinutes()||"00";return M[2]=m[2].indexOf(Y+"分"),b}function g(){for(var e=[],t=0;t<24;t++)e[t]=t+"时";return e}function D(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e%=10;for(var a=[],s=0;s<6;s++)a[s]=s+"0分",t||(a[s]=10*s+e+"分");return a}function c(e,t){e=e||0;var a=t.dates,s=t.selects,i=t.kHours,n=t.kMinutes,r=t.hasNow,u=t.adjustTenMin,o={};return t.date&&t.date._isNow?(a[1]=[],a[2]=[],o["dates[1]"]=[],o["dates[2]"]=[]):s[0]==r?(a[1]=i.slice(t.beginHour),o["dates[1]"]=a[1],e<t.beginHour&&(e=t.beginHour),e===t.beginHour?(a[2]=n.slice(Math[u?"ceil":"floor"](t.beginMin/10)%6),o["dates[2]"]=a[2],s[2]=0):a[2].length!==n.length&&(a[2]=n,o["dates[2]"]=n)):s[0]===t.lastDateIndex?(a[1]=i.slice(0,t.endHour+1),o["dates[1]"]=a[1],e>t.endHour&&(e=t.endHour),e===t.endHour?(a[2]=n.slice(0,Math[u?"ceil":"floor"](t.endMin/10)%6+1),o["dates[2]"]=a[2],s[2]>Math.floor(t.endMin/10)&&(s[2]=a[2].length-1)):a[2].length!==n.length&&(a[2]=n,o["dates[2]"]=n)):24!==a[1].length&&(a[1]=i,o["dates[1]"]=i,a[2].length!==n.length&&(a[2]=n,o["dates[2]"]=n)),t.hour=e,{index:a[1].indexOf(e+"时"),updates:o}}function h(e){var t=e.getMinutes();t=10*Math.ceil(t/10),e.setMinutes(t),e.setSeconds(0,0)}exports.CarDateSelector=l;
},{isPage:false,isComponent:false,currentFile:'useCar/component/pickupDateTime/bussines.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/config/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.kUseCarApi=exports.kTrainQueryKeys=exports.kToken2Id=exports.kTimeFormat=exports.kStartQueryKeys=exports.kPubOrderListUrl=exports.kProductToken=exports.kProductNameType=exports.kProductNameMap=exports.kProductIds=exports.kImgUseCar=exports.kImgPrefix=exports.kFlightQueryAddKeys=exports.kEndQueryKeys=exports.kDefaultRefid=exports.kDefaultQueryKeys=exports.kCarUrlTripH5=exports.kCarUrlH5=exports.kCarApiGateWay=exports.kBaseUrl=exports.kBackonDefaultRefid=exports.emptyTrain=exports.emptyOther=exports.emptyFlight=exports.emptyAllQuery=exports.default=exports.appName=exports.appKey=exports.UNSTART_POPUP_LEVEL=exports.PAY_MENT_LIST=exports.ORDER_POPUP_LEVEL=exports.MapSubKey=exports.IS_DEV=exports.ENV=exports.DEFAULT_TABINFO=exports.CHANNEL=exports.ACTIVITY_POPUP_LEVEL=void 0,exports.playH5Pake=function(e,t){var r={11:{start:17,end:18},19:{start:17,end:18},13:{start:13,end:""},12:{start:"",end:12},15:{start:5,end:""},14:{start:"",end:4}};return r[e]&&r[e][t]||""},exports.version=exports.privacyUrl=void 0;var e=require("../../@babel/runtime/helpers/toConsumableArray"),t=(wx.getAccountInfoSync?wx.getAccountInfoSync():{}).miniProgram,r=void 0===t?{}:t,a=r.envVersion||"release";exports.ENV=a;var o=r.version||"5.2.6";exports.version=o;var s=["local","develop"].indexOf(a)>-1;exports.IS_DEV=s;var p=s?"https://wx.t.17u.cn":"https://wx.17u.cn";exports.kBaseUrl=p;exports.appName="独立小程序";exports.appKey="XZZ2FbZM8YfD";exports.MapSubKey="265BZ-KWKWX-IAR42-TV7AU-OOIU6-JIFN4";exports.kImgUseCar="https://file.40017.cn/groundtrafficstage/usecar/";var i="https://file.40017.cn/groundtrafficstage/usecar/distributioncomponents/img/";exports.kImgPrefix=i;var n="".concat(p,"/cardistribution/main.html#/");exports.kCarUrlH5=n;var x=p+"/tchailing/p/";exports.kCarUrlTripH5=x;exports.kPubOrderListUrl="https://wx.17u.cn/pub/myorder?entry=14&ifhttps=true";var c="https://privacy-policy-w.elong.com/privacyApp/link/latest/versionHtml?appkey=".concat("XZZ2FbZM8YfD");exports.privacyUrl=c;exports.CHANNEL="TC-MAIN";exports.kCarApiGateWay="car-xcx-gateway/";var d=p+"/car-xcx-gateway/";exports.kUseCarApi=d;exports.kDefaultRefid="1732463517";exports.kBackonDefaultRefid="1777228369";var y=Object.freeze({11:"预约打车",12:"接机",13:"送机",14:"接站",15:"送站",19:"即时",80:"顺风车",130:"扬招"});exports.kProductNameMap=y;var m=Object.freeze({CAR_NOW:19,CAR_LATER:11,MEET_AIRPORT:12,SEND_AIRPORT:13,MEET_TRAIN:14,SEND_TRAIN:15,RIDE_SHARING:80});exports.kProductIds=m;var u={};exports.kProductNameType=u,Object.keys(m).forEach((function(e){u[m[e]]=e}));var k=Object.freeze({carIndex:"specialCarIndex",airport:"airport",train:"smallTrain"});exports.kProductToken=k;var T=Object.freeze({specialCarIndex:["CAR_NOW","CAR_LATER","RIDE_SHARING"],airport:["MEET_AIRPORT","SEND_AIRPORT"],smallTrain:["MEET_TRAIN","SEND_TRAIN"]});exports.kToken2Id=T;exports.kTimeFormat="yyyy-MM-DD HH:mm:ss";exports.ACTIVITY_POPUP_LEVEL=100;exports.ORDER_POPUP_LEVEL=90;exports.UNSTART_POPUP_LEVEL=80;var l={imgPrefix:i,urlH5:n,productIds:m,timeFormat:"yyyy-MM-DD HH:mm:ss"};exports.default=l;var I=["startLatitude","startLongitude","startCityName","startCityId","startAddress"];exports.kStartQueryKeys=I;var b=["endLatitude","endLongitude","endCityName","endCityId","endAddress"];exports.kEndQueryKeys=b;var A=Object.freeze({airportCode:"",flightNo:"",flt:"",pek:"",flightDepDate:"",filghtDepDate:"",flightArrDate:"",delayDuration:0});exports.emptyFlight=A;var N=Object.keys(A);exports.kFlightQueryAddKeys=N;var f=Object.freeze({trainArrDate:"",trainDepDate:"",number:"",trainNo:"",trianNum:""});exports.emptyTrain=f;var E=Object.keys(f);exports.kTrainQueryKeys=E;var v=Object.freeze({useTime:"",hint:"",chgUseTime:"",_imgReqId:"",tagImageUrl:"",pickupSpotsNew:""});exports.emptyOther=v;var P=[].concat(e(E),["tcServiceTypeId","tabServiceTypeId","useTime","startType","endType","_imgReqId","tagImageUrl"],I,b,e(N));exports.kDefaultQueryKeys=P;var _={};P.forEach((function(e){return _[e]=""}));var g=Object.freeze(Object.assign({},_,v));exports.emptyAllQuery=g;exports.PAY_MENT_LIST=[{key:"wxCredit",icon:"payment/icon_without_code@2x.png",title:"先乘车后付款",name:"先乘车后付款",recommend:!0,desc:"先乘车·后付款·便捷支付·下车即走"},{key:"promptPay",icon:"payment/icon_prepay@2x.png",name:"预付车费",title:"预付车费",recommend:!1,desc:"行程结束·多退少补·无人接单·及时退款"}];var O={tabIndex:k.carIndex,subTabs:{airport:[{tabName:"接机",tabToken:T[k.airport][0]},{tabName:"送机",tabToken:T[k.airport][1]}],smallTrain:[{tabName:"接站",tabToken:T[k.train][0]},{tabName:"送站",tabToken:T[k.train][1]}],specialCarIndex:[{tabName:"现在",tabToken:T[k.carIndex][0]},{tabName:"预约",tabToken:T[k.carIndex][1]}]},tabList:[{tabName:"接送机",tabToken:k.airport},{tabName:"接送火车",tabToken:k.train},{tabName:"打车",tabToken:k.carIndex}]};exports.DEFAULT_TABINFO=O;
},{isPage:false,isComponent:false,currentFile:'useCar/config/index.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/lib/diff.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(o,i){var f={};return function n(o,i){if(o===i)return;var f=r(o),c=r(i);if(f==t&&c==t)for(var l in i){var u=o[l];void 0===u?o[l]=null:n(u,i[l])}else f==e&&c==e&&o.length>=i.length&&i.forEach((function(e,t){n(o[t],e)}))}(o,i),function o(i,f,c,l){if(i===f)return;var u=r(i),a=r(f);if(u==t)if(a!=t||Object.keys(i).length<Object.keys(f).length)n(l,c,i);else{var s=function(u){var a=i[u],s=f[u],h=r(a),v=r(s);if(h!=e&&h!=t)a!=f[u]&&n(l,(""==c?"":c+".")+u,a);else if(h==e)v!=e||a.length<s.length?n(l,(""==c?"":c+".")+u,a):a.forEach((function(e,t){o(e,s[t],(""==c?"":c+".")+u+"["+t+"]",l)}));else if(h==t)if(v!=t||Object.keys(a).length<Object.keys(s).length)n(l,(""==c?"":c+".")+u,a);else for(var g in a)o(a[g],s[g],(""==c?"":c+".")+u+"."+g,l)};for(var h in i)s(h)}else u==e?a!=e||i.length<f.length?n(l,c,i):i.forEach((function(e,t){o(e,f[t],c+"["+t+"]",l)})):n(l,c,i)}(o,i,"",f),f};var e="[object Array]",t="[object Object]";function n(e,t,n){"[object Function]"!=r(n)&&(void 0===n&&(n=null),e[t]=n)}function r(e){return Object.prototype.toString.call(e)}
},{isPage:false,isComponent:false,currentFile:'useCar/lib/diff.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/lib/nextTick.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.$setData=i,exports.enqueueRender=s,exports.setState=void 0,exports.syncData=r;var t=require("../../@babel/runtime/helpers/toConsumableArray"),e=require("../../@babel/runtime/helpers/typeof"),n=[],a=/[^.,\s\[\]\'\"]+/g;function i(t,e){t&&(r(this.data,t),this._pendingStates=this._pendingStates?this._pendingStates:[],this._pendingStates.push(t)),"function"==typeof e&&(this._pendingCallbacks=this._pendingCallbacks||[]).push(e),s(this)}function r(t,n){Object.keys(n).forEach((function(i){!function(t,n,i){var r=JSON.stringify(n).match(a);if(!r)return t;for(var s=t,o=0,c=r.length;o<c;o++){if(null==s[r[o]]){if(o+1===c){s[r[o]]=i;break}s[r[o]]=/\d+/.test(r[o+1])?[]:{}}else if(o+1===c)s[r[o]]=i;else{var f=/\d+/.test(r[o+1])?"Array":"object";"Array"!==f||Array.isArray(s[r[o]])?"object"===f&&"object"!==e(s[r[o]])&&(s[r[o]]={}):s[r[o]]=[]}s=s[r[o]]}}(t,i,n[i])}))}function s(t){-1===n.indexOf(t)&&1===n.push(t)&&function(t){for(var e,n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];t="function"==typeof t?(e=t).bind.apply(e,[null].concat(a)):t,wx.nextTick?wx.nextTick(t):t()}(o)}function o(){var t,e=n;for(n=[];t=e.pop();)c(t)}function c(e){var n,a=e._pendingStates,i={};a.forEach((function(t){i=Object.assign(i,t)})),e._pendingStates=[];var r=e._pendingCallbacks;r&&r.length&&(n=t(r),r.length=0),e.setData(i,(function(){for(;n&&n.length;)n.shift().call(e)}))}var f=i;exports.setState=f;
},{isPage:false,isComponent:false,currentFile:'useCar/lib/nextTick.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/lib/redux-thunk.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,t=require("../../@babel/runtime/helpers/typeof");e=function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t){function n(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"==typeof o?o(n,r,e):t(o)}}}}t.__esModule=!0;var r=n();r.withExtraArgument=n,t.default=r}])},"object"==("undefined"==typeof exports?"undefined":t(exports))&&"object"==("undefined"==typeof module?"undefined":t(module))?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==("undefined"==typeof exports?"undefined":t(exports))?exports.ReduxThunk=e():(void 0).ReduxThunk=e();
},{isPage:false,isComponent:false,currentFile:'useCar/lib/redux-thunk.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/lib/redux.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.__DO_NOT_USE__ActionTypes=void 0,exports.applyMiddleware=function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},u={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},a=n.map((function(e){return e(u)}));return i=s.apply(void 0,t(a))(o.dispatch),e(e({},o),{},{dispatch:i})}}},exports.bindActionCreators=function(e,t){if("function"==typeof e)return c(e,t);if("object"!=n(e)||null===e)throw Error("bindActionCreators expected an object or a function, instead received ".concat(null===e?"null":n(e),". ")+'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var r={};for(var o in e){var i=e[o];"function"==typeof i&&(r[o]=c(i,t))}return r},exports.combineReducers=function(e){for(var t=Object.keys(e),r={},n=0;t.length>n;n++){var o=t[n];"function"==typeof e[o]&&(r[o]=e[o])}var i,c=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if(void 0===r(void 0,{type:u.INIT}))throw Error('Reducer "'.concat(t,'" returned undefined during initialization. ')+"If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:u.PROBE_UNKNOWN_ACTION()}))throw Error('Reducer "'.concat(t,'" returned undefined when probed with a random type. ')+"Don't try to handle ".concat(u.INIT,' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.")}))}(r)}catch(e){i=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(i)throw i;for(var n=!1,o={},u=0;c.length>u;u++){var s=c[u],f=e[s],d=(0,r[s])(f,t);if(void 0===d){var l=a(s,t);throw Error(l)}o[s]=d,n=n||d!==f}return n?o:e}},exports.compose=s,exports.createStore=function e(t,i,a){if("function"==typeof i&&"function"==typeof a||"function"==typeof a&&"function"==typeof arguments[3])throw Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof i&&void 0===a&&(a=i,i=void 0),void 0!==a){if("function"!=typeof a)throw Error("Expected the enhancer to be a function.");return a(e)(t,i)}if("function"!=typeof t)throw Error("Expected the reducer to be a function.");var c=t,s=i,f=[],d=f,l=!1;function p(){d===f&&(d=f.slice())}function h(){if(l)throw Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function y(e){if("function"!=typeof e)throw Error("Expected the listener to be a function.");if(l)throw Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return p(),d.push(e),function(){if(t){if(l)throw Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,p();var r=d.indexOf(e);d.splice(r,1)}}}function b(e){if(!function(e){if("object"!=n(e)||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw Error("Reducers may not dispatch actions.");try{l=!0,s=c(s,e)}finally{l=!1}for(var t=f=d,r=0;t.length>r;r++)(0,t[r])();return e}return b({type:u.INIT}),r({dispatch:b,subscribe:y,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw Error("Expected the nextReducer to be a function.");c=e,b({type:u.REPLACE})}},o,(function(){var e=y;return r({subscribe:function(t){if("object"!=n(t)||null===t)throw new TypeError("Expected the observer to be an object.");function r(){t.next&&t.next(h())}return r(),{unsubscribe:e(r)}}},o,(function(){return this}))}))};var e=require("../../@babel/runtime/helpers/objectSpread2"),t=require("../../@babel/runtime/helpers/toConsumableArray"),r=require("../../@babel/runtime/helpers/defineProperty"),n=require("../../@babel/runtime/helpers/typeof"),o=function(e){var t,r=("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")()).Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}(),i=function(){return Math.random().toString(36).substring(7).split("").join(".")},u={INIT:"@@redux/INIT".concat(i()),REPLACE:"@@redux/REPLACE".concat(i()),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION".concat(i())}};function a(e,t){var r=t&&t.type;return"Given ".concat(r&&'action "'.concat(r+"",'"')||"an action",', reducer "').concat(e,'" returned undefined. ')+"To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined."}function c(e,t){return function(){return t(e.apply(this,arguments))}}function s(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}exports.__DO_NOT_USE__ActionTypes=u;
},{isPage:false,isComponent:false,currentFile:'useCar/lib/redux.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/lib/reselect.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/typeof");!function(e,r){if("function"==typeof define&&define.amd)define("Reselect",["exports"],r);else if("undefined"!=typeof exports)r(exports);else{var t={exports:{}};r(t.exports),(void 0).Reselect=t.exports}}(0,(function(r){function t(e,r){return e===r}function n(e,r,t){if(null===r||null===t||r.length!==t.length)return!1;for(var n=r.length,o=0;o<n;o++)if(!e(r[o],t[o]))return!1;return!0}function o(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,o=null,u=null;return function(){return n(r,o,arguments)||(u=e.apply(null,arguments)),o=arguments,u}}function u(r){var t=Array.isArray(r[0])?r[0]:r;if(!t.every((function(e){return"function"==typeof e}))){var n=t.map((function(r){return e(r)})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}function c(e){for(var r=arguments.length,t=Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var c=0,i=n.pop(),l=u(n),a=e.apply(void 0,[function(){return c++,i.apply(null,arguments)}].concat(t)),f=e((function(){for(var e=[],r=l.length,t=0;t<r;t++)e.push(l[t].apply(null,arguments));return a.apply(null,e)}));return f.resultFunc=i,f.dependencies=l,f.recomputations=function(){return c},f.resetRecomputations=function(){return c=0},f}}r.__esModule=!0,r.defaultMemoize=o,r.createSelectorCreator=c,r.createStructuredSelector=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;if("object"!==e(r))throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+e(r));var n=Object.keys(r);return t(n.map((function(e){return r[e]})),(function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.reduce((function(e,r,t){return e[n[t]]=r,e}),{})}))};var i=r.createSelector=c(o)}));
},{isPage:false,isComponent:false,currentFile:'useCar/lib/reselect.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/lib/spy.xcx.min.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(){return"x0xxxxxx4xxxyxxxxxx1".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)}))}var o=Object.prototype.toString;function a(t){if("[object Object]"!==o.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function s(t){return"function"==typeof t}var u,c,f,h=[],p=[],l=(u=d,5e3,c=null,(f={cancel:function(){c&&clearTimeout(c),c=null},func:function(){}}).func=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=this;c||(c=setTimeout((function(){c=null,u.apply(r,e)}),5e3))},f),v=l.func;function d(t,e){var n=t.request,r=[].concat(p,h);if(t.data={data:r},h.length=0,p.length=0,r.length)return n(t,e).catch((function(){h.push.apply(h,r)}))}function y(t){if(t){var e,n=t;return t instanceof Error?(e=t.name+":"+t.message,n=t.stack):e=t.errMsg?t.errMsg:function(t,e,n){if("string"==typeof t)return t;try{return JSON.stringify(t)}catch(t){return""}}(t),{msg:e,body:n,raw:t}}}function _(t){return t.gp().route}var g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"$dl";return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];s(this[t])&&this[t].apply(this,n)}}("$op");function k(t){return function(){this.__pp.send(t,"",!0)}}function m(){return(new Date).getTime()}var b=function(){function e(n,r){t(this,e),this._r=n,this._s=m(),this.body={module:r},this._Q=[]}return n(e,[{key:"p",value:function(t){return this._p=t,this}},{key:"c",value:function(t,e,n){return Object.assign(this.body,{action:t,target:e,event:n}),this}},{key:"t",value:function(t){var e=m();return{timestamp:e,elapsed:"number"==typeof t?t:t?e-this._s:t}}},{key:"e",value:function(t,e){return this._Q.push(Object.assign({},t,this.t(e))),this}},{key:"add",value:function(t,e,n){var r=Object.assign({},this.body,{status:t,logs:e},this.t(n));return this._Q.push(r),this}},{key:"send",value:function(t,e,n){arguments.length&&this.add(t,e,n);for(var r=this._Q,i=0;i<r.length;i++)this._r(r[i],this._p);this._Q.splice(0,i)}},{key:"err",value:function(t,e){var n=y(t);n&&this.send(n.msg,n.body,e)}}]),e}();function w(t,e,n){if(t&&t.currentTarget&&t.target){var r=t.currentTarget.dataset,i=t.target.dataset,o=t.mark||{},a=Object.assign({},r,i,o),s=a.vm||"",u=a.vf||"",c=a.vt||"",f=a.vl||"";return{target:c,action:u,module:s,status:a.vs||"",logs:e||f,coord:t.type+"^"+(n?n.x+","+n.y:"")}}}var x=function(t){!function(t){var e={success:function(e){t.size(e.windowWidth,e.windowHeight),t.env(e)}};setTimeout((function(){wx.getSystemInfo(e)}),100),wx.getNetworkType({success:function(e){t.net(e.networkType)}})}(t),function(t){var e=/^page\/usecar\//,n=t.config.isOwnPage,r=function(t){return n?n(t):t&&e.test(t)};!function(t,e){var n=t.dl("visibility");wx.onAppHide((function(){var r=_(t);e(r)&&(n.send("hide",r),t.dumping())})),wx.onAppShow((function(){var r=_(t);e(r)&&n.send("show",r)}))}(t,r),function(t,e){var n=t.dl("err");wx.onUnhandledRejection((function(r){var i=_(t);if(e(i)){var o=y(r.reason);o&&n.send(o.msg,o.body)}})),wx.onError((function(r){if(e(_(t))){var i=(r.split("\nat")||[])[0]||"";i&&n.send(i,r)}}))}(t,r);var i=function(e,n){var r=n?"-":"";t.net(e.networkType+r+n)};wx.onNetworkStatusChange((function(t){i(t,t.isConnected?"":"off")}));var o=wx.onNetworkWeakChange;o&&o((function(t){i(t,t.weakNet?"weak":"")})),function(t){var e="onAppRoute",n=wx[e];if(n&&n((function(n){t.bl(e,n.openType,n.path).send("".concat(getCurrentPages().length),n.query)})),wx.getPerformance){wx.getPerformance().createObserver((function(e){e.getEntries().forEach((function(e){try{var n=e.name,r=e.entryType;t.bl("p-"+r,e.navigationType||n,e.path||e.moduleName||e.packageName).send(e.referrerPath,e,Math.min(Math.max(0,e.duration),2147483647))}catch(t){}}))})).observe({entryTypes:["navigation","render","script","loadPackage"]})}}(t)}(t)},O=function(){function e(n){t(this,e),r(this,"_an",""),r(this,"_tk",""),r(this,"_pt",""),r(this,"_hkd",!1);var o=n.appName,a=n.platform;if(!o||!a)throw new Error("appName or platform necessary");this._an=o,this._pt=a,this._hkd=!1,this._cf=n,this._aq=[],this._pmp=Object.create({}),this._sl=[""],this._tk=i(),x(this)}return n(e,[{key:"config",get:function(){return this._cf}},{key:"net",value:function(t){this._net=t}},{key:"env",value:function(t){this._sys=t.platform,this._sdk=t.SDKVersion,this._system=t.system,this._model=t.model}},{key:"us",value:function(t){if(!t)throw new Error("userInfo necessary");this._ui=j(t);for(var e=this._aq||[],n=0;n<e.length;n++){var r=e[n];this._s(r)}this._aq=null}},{key:"loc",value:function(t){this._loc=j(t)}},{key:"_r",value:function(t,e){var n=this._sl.slice(-2),r={basic:{app:this._an,traceId:this._tk,pspanId:n[0],spanId:n[1],platform:this._pt,version:this._cf.v,sys:this._sys,network:this._net,sdk:this._sdk,system:this._system,model:this._model},action:t,page:e||this.spi};null==this._ui?this._aq&&this._aq.push(r):this._s(r)}},{key:"_s",value:function(t){var e,n;e=this._cf,n=function(t,e,n,r,i){n=n||{};var o=r.refId||"";return Object.assign({},t,e,{user:n,page:r.route||"",refId:+o,location:i})}(t.basic,t.action,this._ui,t.page||{},this._loc),p.push(n),v(e)}},{key:"bl",value:function(t,e,n,r,i){var o=new b(this._r.bind(this),t).p(r);return o.c(e,n,i),o}},{key:"dl",value:function(t,e,n){return this.bl("OS",t,e,n)}},{key:"op",value:function(t,e,n){try{var r,i=w;if("function"!=typeof i)return;r=t.detail;var o=i(t,e,function(t,e,n){if(n&&e&&t){var r=750/t;return n.x*=r,n.y*=r,n}}(this._w,this._h,r));o&&new b(this._r.bind(this)).p(n).e(o).send()}catch(t){console.error(t)}}},{key:"gp",value:function(){var t=this._cf.getPagePath;return s(t)?t():{}}},{key:"hookC",value:function(t,e){var n=this._cf.initHook;t.$spy=this,t.__ph||(t._pi=this.spi),t.$dl=function(e,n){return this.$spy.dl(e,n,t._pi)},t.$bl=function(e,n,r,i){return this.$spy.bl(e,n,r,t._pi,i)},t.$cr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cr";k(e||"cr").call(t)},t.$op=function(e,n){this.$spy.op(e,n,t._pi)},n&&n(t,e||{})}},{key:"hookP",value:function(t,e,n){var r=t._sd=i();this._sl.push(r);var o=this.gp();this._initTkInfo(o),!this._hkd&&this.dl("initp",e,o).send(o.refId),t.__ph=1,this.hookC(t,n),o&&o.route&&(this._pmp[r]=t._pi=o,this.dl("2p",e,o).send(o.route,o)),t.__pp=this.dl("pp",e,o)}},{key:"dumping",value:function(){var t;t=this._cf,(0,l.cancel)(),d(t,!0)}},{key:"enhanceReq",value:function(t,e){return function(t,e,n){if(!e||!n)throw new Error("p2p req error");var r=e;return function(){for(var e=this,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];var s=n.apply(null,o)||"",u=t.dl("req",s);return new Promise((function(t,n){r.apply(e,o).then((function(e){t(e),u.send("s","",!0)})).catch((function(t){n(t);var e=y(t);e&&u.send(e.msg,{err:e.body,arg:o},!0)}))}))}}(this,t,e)}},{key:"getTrackLink",value:function(t){return function(t,e){if(t){var n=function(t){if(a(t))return Object.keys(t).reduce((function(e,n){return e.push(n+"="+t[n]),e}),[]).join("&")}(e),r=t.split("#"),i=r[0],o=r[1]||"",s=function(t){return t.replace(/^([^\?]+)(\?.+)?$/,(function(t,e,r){return e+(r||"")+(r?"&":"?")+n}))};return o?o="#"+s(o):i=s(i),i+o}}(t,{tid:this._tk,pid:this.sp})}},{key:"_initTkInfo",value:function(t){if(!this._hkd){var e=function(t){var e=t.params;if(e.tid&&e.pid)return{tid:e.tid,pid:e.pid}}(t);e&&(this._tk=e.tid,this._sl=[e.pid]),this._hkd=!0}}},{key:"sp",get:function(){return this._sl.slice(-1)[0]}},{key:"spi",get:function(){return this._pmp[this.sp]}},{key:"upsd",value:function(t){if(t&&t!==this.sp){var e=this._sl.pop();e&&delete this._pmp[e]}}},{key:"size",value:function(t,e){this._w=t,this._h=e}},{key:"reTrackId",value:function(){this._tk=i(),this._sl=[""],this._pmp=Object.create({})}}]),e}();function j(t){return s(t)?t():t&&a(t)?t:{}}var P=/^_\$[a-z]/;function T(t){if(s(t))return{before:[t],after:[]};if(t&&a(t)){var e={before:[],after:[]},n=function(t){return t?Array.isArray(t)?t:[t]:[]};return e.before=n(t.before),e.after=n(t.after),e}return{before:[],after:[]}}function I(t,e,n,r){t=Array.prototype.slice.call(t);for(var i=0;i<t.length;i++){var o=t[i];if(o)if(s(o))o.apply(n,r);else{var a=e?o[e]:o;Array.isArray(a)&&I(a,null,n,r)}}}var $=["onReady","onUnload","onHide","onShow"],q=r({},"onShow",(function(){this.$spy.upsd(this._sd)}));var A,E={request:function(t){return new Promise((function(e,n){var r=t.url,i=t.data;wx.request({url:r,data:i,header:t.headers,timeout:t.timeout||3e3,method:"POST",success:function(t){e(t.data)},fail:n})}))},initHook:function(t,e){var n=function(t){t=t||{};var e=Object.create({});function n(t){t.match(P)&&(e[t]=function(t){g.call(this,t)})}for(var r in t)n(r);return e._$cp||n("_$cp"),e}(t),r=t.__ph?function(t,e,n){var r=Object.create(null);return t.forEach((function(t){r[t]=e[t]||k(t)})),r}($,{}):{},i=function(){function t(t,e){return[].concat(t,e)}for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.reduce((function(e,n){return n?Object.keys(n).reduce((function(r,i){var o=T(n[i]);return e.hasOwnProperty(i)?e[i]={before:t(e[i].before,o.before),after:t(e[i].after,o.after)}:e[i]=o,e}),e):e}),{})}(q,e,r,n),o=i.common;delete e.common,function(t,e,n){Object.keys(t).forEach((function(r){var i=e[r],o=s(i);(void 0===i||o)&&(e[r]=function(){var e=n?[n]:[];e.push(t[r]);for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];I(e,"before",this,s.concat(r)),o&&i.apply(this,s),I(e,"after",this,s.concat(r))})}))}(i,t,o)},getPagePath:function(){var t=getCurrentPages(),e=t.slice(-1)[0]||{},n=e.route,r=e.options;return n?{stack:t.length,params:r,route:n,refId:r?r.refid||r.refId:""}:{}}},S="application/json",C={request:E.request,timeout:0,headers:{Accept:S+", text/plain, */*","Content-Type":S},userInfo:E.userInfo,initHook:E.initHook,getPagePath:E.getPagePath};module.exports=function(t,e){if(A)return A;try{return A=new O(Object.assign({},C,t))}catch(t){var n=new Error("[spy]"+(t.message||t));e?e(n):console.error(n)}};
},{isPage:false,isComponent:false,currentFile:'useCar/lib/spy.xcx.min.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/services/ActivityService.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.queryExtraIncomeProduct=function(e){return r.default.postQC("extraIncome/queryExtraIncomeProduct",e,{isShowErrMsg:!1})};var r=e(require("../common/request"));
},{isPage:false,isComponent:false,currentFile:'useCar/services/ActivityService.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/services/AddressService.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../@babel/runtime/helpers/objectSpread2"),r=e(require("../common/request")),i=require("../store/index"),o=require("../util/tool"),n=require("../config/index"),a=require("./BaseService"),c="internalcarrainbowap.";module.exports={getDriverLocation:function(e){return a.post(c+"getDriverLocation",e)},getAddressByLocation:(0,o.memoize)((function(e,t,r){return new Promise((function(i,o){void 0===e.noPickup&&(e.noPickup=1),a.post(c+"getAddressByLocation",e,t,r).then((function(e){var t=e.body;(t.pickupSpotsNew||[]).forEach((function(e){e.cityId=e.cityId||t.cityId,e.cityName=e.cityName||t.cityName})),i(e)})).catch(o)}))})),getDestinationInfo:function(e){return a.post(c+"getDestinationInfo",e)},getrouteandtime:function(e){var r=getCurrentPages(),o=r[r.length-1].route,n=i.store.getState(),s=n&&n.tabInfo&&n.tabInfo.currentTab;return a.post(c+"getrouteandtime",t(t({},e),{},{fromPage:"wx "+s+" "+o}))},savePoiToHistory:function(e){var t="internalcarrainbowap.saveLocationHistory",i={interfaceid:t,isNeedLoading:!1,isShowErrMsg:!1};r.default.post(n.kCarApiGateWay+"ajax/getData/"+t,e,i)},commonAddressReq:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="internalcarrainbowap.commonAddress",i={interfaceid:t,isNeedLoading:!1,isShowErrMsg:!1};return r.default.post(n.kCarApiGateWay+"ajax/getData/"+t,e,i)},getUserRecommendPoi:function(e){var i=t({},e);return r.default.post("".concat(n.kCarApiGateWay).concat("/traffic/api/map/recommend/tips/"),i,{isNeedLoading:!1,isShowErrMsg:!1})}};
},{isPage:false,isComponent:false,currentFile:'useCar/services/AddressService.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/services/BaseService.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),r=require("../../@babel/runtime/helpers/objectSpread2"),t=e(require("../common/request")),i=require("../config/index");module.exports={post:function(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new Promise((function(u,s){t.default.post(i.kCarApiGateWay+"ajax/getData/"+e,n,r({interfaceid:e,isShowErrMsg:!1,isNeedLoading:!1},o),a).then((function(e){u({body:e})})).catch(s)}))}};
},{isPage:false,isComponent:false,currentFile:'useCar/services/BaseService.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/services/CommonService.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../common/request")),n=require("../config/index"),r=e(require("./BaseService")),a="internalcarrainbowap.";module.exports={getMapKeys:function(e){return r.default.post(a+"getMapKeys",e)},getTabList:function(e){var t=wx.getStorageSync("useCarLocationCache");t&&t.cityId&&Object.assign(e,{cityId:t.cityId});var n=r.default.post(a+"getTabList",e);return n.then((function(){n=null})).catch((function(e){n=null})),n},wxxcxSignContract:function(e){return r.default.post(a+"wxxcxSignContract",e)},saveABTestResult:function(e){return r.default.post(a+"saveABTestResult",e)},queryAnnounceInfo:function(e){return t.default.postQC("noticeComponent/queryInfo",e,{isNeedLoading:!1,isShowErrMsg:!1})},querySafeInfo:function(e){return t.default.postQC("noticeComponent/safe",e,{isNeedLoading:!1,isShowErrMsg:!1})},queryAbTest:function(e){var r="internalcarrainbowap.getABTestExpVersion",a={expNo:e},i={interfaceid:r,isNeedLoading:!1,isShowErrMsg:!1};return t.default.post(n.kCarApiGateWay+"ajax/getData/"+r,a,i)},getPersonalized:function(){return t.default.post("".concat(n.kCarApiGateWay,"quickcar/home/getPersonalized"))},switchPersonalized:function(e){return t.default.post("".concat(n.kCarApiGateWay,"quickcar/home/switchPersonalized"),e)}};
},{isPage:false,isComponent:false,currentFile:'useCar/services/CommonService.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/services/OrderService.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.deleteOrder=function(e){return r.default.post("".concat(t.kCarApiGateWay,"orderList/state/del"),e,{isShowErrMsg:0,isNeedLoading:0})},exports.getOrderListInfo=function(e){return r.default.post("".concat(t.kCarApiGateWay,"orderList/query/all"),e,{isShowErrMsg:0,isNeedLoading:0})};var r=e(require("../common/request")),t=require("../config/index");
},{isPage:false,isComponent:false,currentFile:'useCar/services/OrderService.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/services/ProcessService.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),r=e(require("./BaseService")),t=e(require("../common/request")),n="internalcarrainbowap.";module.exports={getPriceForNew:function(e){return e.source=1,r.default.post(n+"getVehiclePriceForNewLogical",e)},createOrderForNew:function(e){return e.memberId="",e.memberid="",r.default.post(n+"createOrderForNewLogical",e,{isUserInfo:0})},userOrderCheck:function(e){return r.default.post(n+"userOrderCheck",e)},prePayNotic:function(e){return r.default.post(n+"prepaynotice",e)},repeatOrderCheck:function(e){return r.default.post(n+"repeatOrderCheck",e)},saveEstimateReqDate:function(e){return r.default.post(n+"saveEstimateReqDate",e)},addPassengers:function(e){return r.default.post(n+"addPassengers",e)},deletePassengers:function(e){return r.default.post(n+"deletePassengers",e)},unSelectNotice:function(e){return t.default.postQC("price/gaode/unSelectNotice",e,{isNeedLoading:!1,isShowErrMsg:!1})},getPaymentRiskForRule:function(){return t.default.postQC("payscore/riskForRule",{},{isShowErrMsg:0,isNeedLoading:0}).then((function(e){return e.body})).catch((function(e){console.error(e)}))},getPaymentForRisk:function(e){return t.default.postQC("extraCharge/getPayTypeCashRate",e,{isShowErrMsg:0,isNeedLoading:0}).then((function(e){return e.body})).catch((function(e){console.error(e)}))},getTrainNotice:function(e){return t.default.postQC("getTrainNotic",e,{isShowErrMsg:0,isNeedLoading:0})}};
},{isPage:false,isComponent:false,currentFile:'useCar/services/ProcessService.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/services/UserService.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.queryIndexCouponTips=function(){var e="internalcarrainbowap.indexCouponTips";return i.default.post(t.kCarApiGateWay+"ajax/getData/"+e,{},{interfaceid:e,isShowErrMsg:!1,isNeedLoading:!1})},exports.queryMaterielTicket=function(e){var t=r({},e);return i.default.postQC("materielTicket/get",t,{isNeedLoading:!1,isShowErrMsg:!1})};var r=require("../../@babel/runtime/helpers/objectSpread2"),i=e(require("../common/request")),t=require("../config/index");
},{isPage:false,isComponent:false,currentFile:'useCar/services/UserService.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/services/commonReqs.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.flightTrainList=function(e){return i.default.postQC("flightTrainList",e,{isNeedLoading:!1,isShowErrMsg:!1})},exports.getPoiInfo=function(e,t,o,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s={cityId:e,name:t};o&&n&&(s.location="".concat(n,",").concat(o));return i.default.post("".concat(r.kCarApiGateWay,"traffic/api/map/poi/info/"),s,{isNeedLoading:!1,isShowErrMsg:!1},a)};var i=e(require("../common/request")),r=require("../config/index");
},{isPage:false,isComponent:false,currentFile:'useCar/services/commonReqs.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/services/tiktokService.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault")(require("../common/request"));module.exports={middlePageArousal:function(r){return e.default.post("car-inter-h5/quickcar/wxtopup/middlePageArousal",r)},getPhoneByUnionId:function(r){return e.default.post("car-inter-h5/quickcar/jinritemai/topup/getPhoneByUnionId",r)}};
},{isPage:false,isComponent:false,currentFile:'useCar/services/tiktokService.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/store/actions/airport.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SHOW_MEET_FLIGTH_QUERY=exports.SET_FLIGHT_SEND_QUICK=exports.SET_FLIGHT_REC_SPOTS=exports.SET_FLIGHT_MEET_QUICK=exports.CHOOSE_Flight_SEND_PARAMS=exports.CHOOSE_Flight_MEET_PARAMS=void 0,exports.chooseFlightMeetParams=function(E){return function(E,S){return(0,_.chooseThunk)(E,S,"meetAirportQueryParamsSelector",null,"SHOW_MEET_FLIGTH_QUERY")}(E,"CHOOSE_Flight_MEET_PARAMS")},exports.chooseFlightSendParams=function(E){return function(E,S){return(0,_.chooseThunk)(E,S,"sendAirportQueryParamsSelector",null,"SHOW_MEET_FLIGTH_QUERY")}(E,"CHOOSE_Flight_SEND_PARAMS")};var _=require("../common");exports.SHOW_MEET_FLIGTH_QUERY="SHOW_MEET_FLIGTH_QUERY";exports.CHOOSE_Flight_MEET_PARAMS="CHOOSE_Flight_MEET_PARAMS";exports.CHOOSE_Flight_SEND_PARAMS="CHOOSE_Flight_SEND_PARAMS";exports.SET_FLIGHT_MEET_QUICK="SET_FLIGHT_MEET_QUICK";exports.SET_FLIGHT_SEND_QUICK="SET_FLIGHT_SEND_QUICK";exports.SET_FLIGHT_REC_SPOTS="SET_FLIGHT_REC_SPOTS";
},{isPage:false,isComponent:false,currentFile:'useCar/store/actions/airport.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/store/actions/car.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var _=require("../../../@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:!0}),exports.SHOW_CAR_PRICE_QUERY=exports.SET_PAYMENT_RISK_CONF=exports.SET_CAR_SUB_QUICK=exports.SET_CAR_PRICE_PARAMS=exports.SET_CAR_INS_QUICK=exports.CHOOSE_RIDE_SHARING_PARAMS=exports.CHOOSE_CAR_SUB_PARAMS=exports.CHOOSE_CAR_PARAMS=exports.CHOOSE_CAR_INS_PARAMS=void 0,exports.choosedParams=function(_){return function(_,A){return(0,S.chooseThunk)(_,A,"carQueryParamsSelector","SET_CAR_PRICE_PARAMS","SHOW_CAR_PRICE_QUERY")}(_,"CHOOSE_CAR_PARAMS")};var S=require("../common");_(require("../selector/queryPriceParams"));exports.SET_CAR_PRICE_PARAMS="SET_CAR_PRICE_PARAMS";exports.SHOW_CAR_PRICE_QUERY="SHOW_CAR_PRICE_QUERY";exports.CHOOSE_CAR_INS_PARAMS="CHOOSE_CAR_INS_PARAMS";exports.CHOOSE_CAR_SUB_PARAMS="CHOOSE_CAR_SUB_PARAMS";exports.CHOOSE_CAR_PARAMS="CHOOSE_CAR_PARAMS";exports.SET_CAR_INS_QUICK="SET_CAR_INS_QUICK";exports.SET_CAR_SUB_QUICK="SET_CAR_SUB_QUICK";exports.SET_PAYMENT_RISK_CONF="SET_PAYMENT_RISK_CONF";exports.CHOOSE_RIDE_SHARING_PARAMS="CHOOSE_RIDE_SHARING_PARAMS";
},{isPage:false,isComponent:false,currentFile:'useCar/store/actions/car.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/store/actions/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var _=require("../../../@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:!0});var E={SET_TABLIST:!0,SET_TABINDEX:!0,SET_SUB_TABINDEX:!0,SET_MY_POSITION:!0,SET_REFID:!0,SHOW_AIRPORT_PRICE_QUERY:!0,HIDE_PRICE_QUERY:!0,CHG_QUERY_PRODUCTID:!0,SET_ACTIVITY_INFO:!0,SET_POPUP_DATA:!0,ONCE_POPUP:!0,SET_SHOW_KUACHENG_DATA:!0,SET_INDEX_POPUP_LEVEL:!0,SET_INDEX_NEARBY_CAR:!0,SET_ABTEST_INFO:!0,SET_CARORDER_DATA:!0,CLOSE_CARORDER_DATA:!0,SET_UNSTARTORDER:!0,SET_UNSTARTORDER_SHOW:!0,SET_COUPON_TIPS_DATA:!0,SET_PRODUCTID:!0,SET_REC_SPOT_LIST:!0,SET_EVENT_IMG_CONFIG:!0,SET_SHARE_CONFIG:!0,SET_PRODUCT_CHG_DLG:!0,SET_PRODUCT_CHG_DLG_SHOW:!0,SET_TRANSLATEJS:!0,SET_TRANSLATEJS_SHOW:!0,SET_PASSENGER_LIST:!0,SET_PASSENGERINFO:!0,SET_USERINFO:!0,SET_MAP_SCALE:!0,SET_SELECT_CAR_TYPE:!0,SET_HOTEL_CROSS_ADS:!0,SET_AUGMENT_AND_QA:!0,SET_HOME_CUPON:!0,SET_LISWITCH:!0,SET_SCENE_QUERY:!0,SET_SCENE_SHOW:!0,SET_TICKET_SHOW:!0,SET_GEO_LIST:!0,SET_MISSION_INFO:!0,SET_HOME_BANNER:!0,SET_BACKON_DRIVER_INFO:!0,setTabList:!0,setScenQuery:!0,setScenShow:!0,setEventImgConfig:!0,setShareConfig:!0,closeQueryPrice:!0,clearAllQueryParams:!0};exports.SHOW_AIRPORT_PRICE_QUERY=exports.SET_USERINFO=exports.SET_UNSTARTORDER_SHOW=exports.SET_UNSTARTORDER=exports.SET_TRANSLATEJS_SHOW=exports.SET_TRANSLATEJS=exports.SET_TICKET_SHOW=exports.SET_TABLIST=exports.SET_TABINDEX=exports.SET_SUB_TABINDEX=exports.SET_SHOW_KUACHENG_DATA=exports.SET_SHARE_CONFIG=exports.SET_SELECT_CAR_TYPE=exports.SET_SCENE_SHOW=exports.SET_SCENE_QUERY=exports.SET_REFID=exports.SET_REC_SPOT_LIST=exports.SET_PRODUCT_CHG_DLG_SHOW=exports.SET_PRODUCT_CHG_DLG=exports.SET_PRODUCTID=exports.SET_POPUP_DATA=exports.SET_PASSENGER_LIST=exports.SET_PASSENGERINFO=exports.SET_MY_POSITION=exports.SET_MISSION_INFO=exports.SET_MAP_SCALE=exports.SET_LISWITCH=exports.SET_INDEX_POPUP_LEVEL=exports.SET_INDEX_NEARBY_CAR=exports.SET_HOTEL_CROSS_ADS=exports.SET_HOME_CUPON=exports.SET_HOME_BANNER=exports.SET_GEO_LIST=exports.SET_EVENT_IMG_CONFIG=exports.SET_COUPON_TIPS_DATA=exports.SET_CARORDER_DATA=exports.SET_BACKON_DRIVER_INFO=exports.SET_AUGMENT_AND_QA=exports.SET_ACTIVITY_INFO=exports.SET_ABTEST_INFO=exports.ONCE_POPUP=exports.HIDE_PRICE_QUERY=exports.CLOSE_CARORDER_DATA=exports.CHG_QUERY_PRODUCTID=void 0,exports.clearAllQueryParams=function(){return function(_,E){_({type:T.CHOOSE_Flight_MEET_PARAMS,payload:""}),_({type:T.CHOOSE_Flight_SEND_PARAMS,payload:""}),_({type:O.CHOOSE_Train_MEET_PARAMS,payload:""}),_({type:O.CHOOSE_Train_SEND_PARAMS,payload:""}),_({type:e.CHOOSE_CAR_PARAMS,payload:""}),_({type:e.CHOOSE_CAR_PARAMS,payload:""})}},exports.closeQueryPrice=function(){return function(_,E){var e=S.kProductIds,O=E().queryPrice.params;switch(_({type:"HIDE_PRICE_QUERY"}),O&&O.tabServiceTypeId){case e.MEET_AIRPORT:_({type:T.SET_MEET_AIRPORT_DEST,payload:{}});break;case e.SEND_AIRPORT:case e.MEET_TRAIN:case e.SEND_TRAIN:case e.CAR_NOW:case e.CAR_LATER:}}},exports.setEventImgConfig=function(_){return{type:"SET_EVENT_IMG_CONFIG",payload:_}},exports.setScenQuery=function(_){return{type:"SET_SCENE_QUERY",payload:_}},exports.setScenShow=function(_){return{type:"SET_SCENE_SHOW",payload:_}},exports.setShareConfig=function(_){return{type:"SET_SHARE_CONFIG",payload:_}},exports.setTabList=function(_){return{type:"SET_TABLIST",payload:_}};var S=require("../../config/index"),T=_(require("./airport"));Object.keys(T).forEach((function(_){"default"!==_&&"__esModule"!==_&&(Object.prototype.hasOwnProperty.call(E,_)||_ in exports&&exports[_]===T[_]||Object.defineProperty(exports,_,{enumerable:!0,get:function(){return T[_]}}))}));var e=_(require("./car"));Object.keys(e).forEach((function(_){"default"!==_&&"__esModule"!==_&&(Object.prototype.hasOwnProperty.call(E,_)||_ in exports&&exports[_]===e[_]||Object.defineProperty(exports,_,{enumerable:!0,get:function(){return e[_]}}))}));var O=_(require("./train"));Object.keys(O).forEach((function(_){"default"!==_&&"__esModule"!==_&&(Object.prototype.hasOwnProperty.call(E,_)||_ in exports&&exports[_]===O[_]||Object.defineProperty(exports,_,{enumerable:!0,get:function(){return O[_]}}))}));exports.SET_TABLIST="SET_TABLIST";exports.SET_TABINDEX="SET_TABINDEX";exports.SET_SUB_TABINDEX="SET_SUB_TABINDEX";exports.SET_MY_POSITION="SET_MY_POSITION";exports.SET_REFID="SET_REFID";exports.SHOW_AIRPORT_PRICE_QUERY="SHOW_AIRPORT_PRICE_QUERY";exports.HIDE_PRICE_QUERY="HIDE_PRICE_QUERY";exports.CHG_QUERY_PRODUCTID="CHG_QUERY_PRODUCTID";exports.SET_ACTIVITY_INFO="SET_ACTIVITY_INFO";exports.SET_POPUP_DATA="SET_POPUP_DATA";exports.ONCE_POPUP="ONCE_POPUP";exports.SET_SHOW_KUACHENG_DATA="SET_SHOW_KUACHENG_DATA";exports.SET_INDEX_POPUP_LEVEL="SET_INDEX_POPUP_LEVEL";exports.SET_INDEX_NEARBY_CAR="SET_INDEX_NEARBY_CAR";exports.SET_ABTEST_INFO="SET_ABTEST_INFO";exports.SET_CARORDER_DATA="SET_CARORDER_DATA";exports.CLOSE_CARORDER_DATA="CLOSE_CARORDER_DATA";exports.SET_UNSTARTORDER="SET_UNSTARTORDER";exports.SET_UNSTARTORDER_SHOW="SET_UNSTARTORDER_SHOW";exports.SET_COUPON_TIPS_DATA="SET_COUPON_TIPS_DATA";exports.SET_PRODUCTID="SET_PRODUCTID";exports.SET_REC_SPOT_LIST="SET_REC_SPOT_LIST";exports.SET_EVENT_IMG_CONFIG="SET_EVENT_IMG_CONFIG";exports.SET_SHARE_CONFIG="SET_SHARE_CONFIG";exports.SET_PRODUCT_CHG_DLG="SET_PRODUCT_CHG_DLG";exports.SET_PRODUCT_CHG_DLG_SHOW="SET_PRODUCT_CHG_DLG_SHOW";exports.SET_TRANSLATEJS="SET_TRANSLATEJS";exports.SET_TRANSLATEJS_SHOW="SET_TRANSLATEJS_SHOW";exports.SET_PASSENGER_LIST="SET_PASSENGER_LIST";exports.SET_PASSENGERINFO="SET_PASSENGERINFO";exports.SET_USERINFO="SET_USERINFO";exports.SET_MAP_SCALE="SET_MAP_SCALE";exports.SET_SELECT_CAR_TYPE="SET_SELECT_CAR_TYPE";exports.SET_HOTEL_CROSS_ADS="SET_HOTEL_CROSS_ADS";exports.SET_AUGMENT_AND_QA="SET_AUGMENT_AND_QA";exports.SET_HOME_CUPON="SET_HOME_CUPON";exports.SET_LISWITCH="SET_LISWITCH";exports.SET_SCENE_QUERY="SET_SCENE_QUERY";exports.SET_SCENE_SHOW="SET_SCENE_SHOW";exports.SET_TICKET_SHOW="SET_TICKET_SHOW";exports.SET_GEO_LIST="SET_GEO_LIST";exports.SET_MISSION_INFO="SET_MISSION_INFO";exports.SET_HOME_BANNER="SET_HOME_BANNER";exports.SET_BACKON_DRIVER_INFO="SET_BACKON_DRIVER_INFO";
},{isPage:false,isComponent:false,currentFile:'useCar/store/actions/index.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/store/actions/train.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SHOW_SEND_TRAIN_QUERY=exports.SHOW_MEET_TRAIN_QUERY=exports.SET_TRAIN_SEND_QUICK=exports.SET_TRAIN_REC_SPOTS=exports.SET_TRAIN_MEET_QUICK=exports.CHOOSE_Train_SEND_PARAMS=exports.CHOOSE_Train_MEET_PARAMS=void 0,exports.chooseTrainMeetParams=function(E){return function(E,T){return(0,_.chooseThunk)(E,T,"meetTrainParamsSelector",0,"SHOW_MEET_TRAIN_QUERY")}(E,"CHOOSE_Train_MEET_PARAMS")},exports.chooseTrainSendParams=function(E){return function(E,T){return(0,_.chooseThunk)(E,T,"sendTrainParamsSelector",0,"SHOW_SEND_TRAIN_QUERY")}(E,"CHOOSE_Train_SEND_PARAMS")};var _=require("../common");exports.SHOW_MEET_TRAIN_QUERY="SHOW_MEET_TRAIN_QUERY";exports.SHOW_SEND_TRAIN_QUERY="SHOW_SEND_TRAIN_QUERY";exports.CHOOSE_Train_MEET_PARAMS="CHOOSE_Train_MEET_PARAMS";exports.CHOOSE_Train_SEND_PARAMS="CHOOSE_Train_SEND_PARAMS";exports.SET_TRAIN_MEET_QUICK="SET_TRAIN_MEET_QUICK";exports.SET_TRAIN_SEND_QUICK="SET_TRAIN_SEND_QUICK";exports.SET_TRAIN_REC_SPOTS="SET_TRAIN_REC_SPOTS";
},{isPage:false,isComponent:false,currentFile:'useCar/store/actions/train.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/store/common.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:!0}),exports.chooseThunk=function(e,t,o,u,a){return function(u,i){u({type:t,payload:e});var n=i(),p=r[o](n);p&&u("function"==typeof a?a:{type:a,payload:p})}};var r=e(require("./selector/queryPriceParams"));
},{isPage:false,isComponent:false,currentFile:'useCar/store/common.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/store/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireWildcard"),t=require("../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.actions=void 0,exports.bindState=function(e,t){if(!e||"object"!==a(t))return;var r=g.getState();Object.keys(t).forEach((function(a){var i;i="function"==typeof t[a]?t[a](r):h(r,t[a],null),_.set(t[a],i),y(a)?e[a]=i:e.$setData?e.$setData(n({},a,i)):e.setData(n({},a,i))}));var i=Object.keys(t);i.forEach((function(r){var n=t[r];if("string"==typeof n){var a=O[n];a||(a=Object.create(null),O[n]=a),a[r]||(a[r]=[]),-1===a[r].indexOf(e)&&a[r].push(e)}}));var c=x.findIndex((function(t){return e===t.cmp}));i.forEach((function(r){var n=t[r];"function"==typeof n&&(-1==c&&(c=x.length,x.push({cmp:e,selectors:{}})),x[c].selectors[r]=n)}))},exports.resetState=function(){O=Object.create(null),x=[]},exports.store=void 0,exports.unbindState=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object.keys(O).forEach((function(r){var n,a=O[r];if(t)return n=a[t]||[],void(a[t]=n.filter((function(t){return t!==e})));Object.keys(a).forEach((function(t){n=a[t],a[t]=n.filter((function(t){return t!==e}))}))}));var r=x.findIndex((function(t){return e===t.cmp}));-1!==r&&(t?delete x[r].selectors[t]:x.splice(r,1))};var r=require("../../@babel/runtime/helpers/createForOfIteratorHelper"),n=require("../../@babel/runtime/helpers/defineProperty"),a=require("../../@babel/runtime/helpers/typeof"),i=require("../../@babel/runtime/helpers/objectSpread2"),c=require("../lib/redux"),o=t(require("../lib/redux-thunk")),u=e(require("./reducers/index")),f=t(require("../lib/diff")),l=t(require("./state/index")),s=e(require("./actions/index")),d=t(require("../../util/tcUtil")),v=s;exports.actions=v;var p=Symbol("stageHasChanged");function h(){return d.default.get.apply(this,arguments)}function b(e){return"[object Array]"===Object.prototype.toString.call(e)}function y(e){return/^__/.test(e)}var j=(0,c.combineReducers)(i({},u)),g=(0,c.createStore)(j,l.default,(0,c.applyMiddleware)(o.default));exports.store=g;var O=Object.create(null),_=new Map,x=[];function k(e,t,r){var n=[],a=e.__willUpdates||{},c=e.__didUpdates||{},o=i({},r);Object.keys(r).forEach((function(e){c[e]=r[e],o[e]!==a[e]?a[e]=o[e]:delete o[e]})),e.__willUpdates=a,e.__didUpdates=c;var u=Object.keys(o).length;if(y(t)&&u&&(e[t]=o[t],n.push(t)),"function"==typeof e.stateWillChange&&u){var f=i({},o);m(f),e.stateWillChange(f)}e[p]=!1,function(e,t,r,n){var a=Object.assign({},e);t.forEach((function(e){return e&&delete a[e]})),r.$setData?r.$setData(a,(function(){n&&n()})):r.setData(a,(function(){n&&n()}))}(o,n,e,(function(){"function"==typeof e.stateDidChanged&&e.__didUpdates&&Object.keys(e.__didUpdates).length&&(wx.nextTick||setTimeout)((function(){if(!e[p]){e[p]=!0;var t=e.__didUpdates;e.__willUpdates=null,e.__didUpdates=null,m(t),e.stateDidChanged(t)}}))}))}function q(e,t){var r={};if("object"===a(e)){if(r=(0,f.default)(e,t),""==Object.keys(r)[0]&&(r=r[""]),!r)return}else e!==t&&(r[""]=e);return r}function m(e){Object.keys(e).forEach((function(t){for(var r=e[t],n=t.length,a=[],i=e,c=[],o=0,u=0;u<n;u++){var f=t[u];if("."===f){var l=a.join("");a.length=0,i[l]||(i[l]={}),i=i[l]}else if("["===f){var s=a.join("");i[s]||(i[s]=[]),i=i[s]}else if("]"===f)o=+c.join(""),c.length=0,u==n-1&&(i[o]=r);else{if(a.push(f),u==n-1)i[a.join("")]=r}}}))}g.subscribe((function(){var e=g.getState();Object.keys(O).forEach((function(t){var n=h(e,t,null),a=O[t],i=Object.keys(a);if(i.length){var c;c=_.get(t),_.set(t,n);var o=q(n,c);if(o){var u=Object.keys(o);if(b(n)&&b(c)&&n.length<c.length){var f,l=r(i);try{for(l.s();!(f=l.n()).done;){var s=f.value,d={};d[s]=n;var v,p=r(a[s]);try{for(p.s();!(v=p.n()).done;){k(v.value,s,d)}}catch(e){p.e(e)}finally{p.f()}}}catch(e){l.e(e)}finally{l.f()}}else if(u.length){var y,j=r(i);try{var g=function(){var e=y.value,t={};u.forEach((function(r){var n=b(o),a=/^\[\d+\]/.test(r),i=r?n?"[".concat(r,"]"):"".concat(a?"":".").concat(r):"";t[e+i]=o[r]}));var n,i=r(a[e]);try{for(i.s();!(n=i.n()).done;){k(n.value,e,t)}}catch(e){i.e(e)}finally{i.f()}};for(j.s();!(y=j.n()).done;)g()}catch(e){j.e(e)}finally{j.f()}}}}})),x.forEach((function(t){var r=t.cmp,n=t.selectors,a=r.data,i={};Object.keys(n).forEach((function(t){var c=(0,n[t])(e),o=h(a,t);if(y(t))r[t]=c,delete i[t];else if(b(c)&&b(o)&&c.length<o.length)i[t]=c;else{var u=q(c,o);if(!u)return;var f=Object.keys(u);f.length&&f.forEach((function(e){var r=b(u),n=/^\[\d+\]/.test(e),a=e?r?"[".concat(e,"]"):"".concat(n?"":".").concat(e):"";i[t+a]=u[e]}))}})),k(r,"",i)}))}));
},{isPage:false,isComponent:false,currentFile:'useCar/store/index.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/store/reducers/airport.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=require("../../../@babel/runtime/helpers/typeof"),t=e(require("../actions/index")),o=require("../../common/common"),d={meetChoosedParams:(0,o.reduxSetHelper)(t.CHOOSE_Flight_MEET_PARAMS,{},!0,(function(e,r){r.flt&&!r.orderId&&delete e.orderId;var t=e.delayDuration;r.flt!=e.flt&&t&&r.flightArrDate&&"rebooking"!=r._source&&(r.delayDuration=t,r.useTime=(0,o.addMin)(t,r.flightArrDate,"yyyy-MM-DD HH:mm:ss").day)})),sendChoosedParams:(0,o.reduxSetHelper)(t.CHOOSE_Flight_SEND_PARAMS,{},!0,(function(e,t){var o=r(t),d=null==t||"object"!==o||t.hasOwnProperty("endAddress")||t.hasOwnProperty("endLatitude")||t.hasOwnProperty("flightNo")||t.hasOwnProperty("flt");"ticket"==e._source&&d&&"ticket"!=t._source&&"rebooking"!=t._source&&(t.useTime=""),d&&!t._source&&(t._source=""),t.endAddress&&!t.orderId&&["flt","flightDepDate","orderId"].map((function(r){return delete e[r]})),t.flt&&!t.orderId&&delete e.orderId})),meetQuickSelection:(0,o.reduxSetHelper)(t.SET_FLIGHT_MEET_QUICK,{},!0),sendQuickSelection:(0,o.reduxSetHelper)(t.SET_FLIGHT_SEND_QUICK,{},!0),spotList:(0,o.reduxSetHelper)(t.SET_FLIGHT_REC_SPOTS,[])};exports.default=d;
},{isPage:false,isComponent:false,currentFile:'useCar/store/reducers/airport.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/store/reducers/common.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var a=require("../../../@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:!0}),exports.common=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SET_TICKET_SHOW:var o=t.payload;return e(e({},a),{},{isTicketShow:o});case r.SET_MY_POSITION:var n=Object.assign({},t.payload);return n.lat&&(n.latitude=parseFloat(n.lat)),n.lng&&(n.longitude=parseFloat(n.lng)),e(e({},a),{},{position:n});case r.SET_REFID:var s=t.payload;return e(e({},a),{},{refid:s,refId:s});case r.SET_ABTEST_INFO:var _=a.abtests,u=t.payload;return!Array.isArray(u)&&(u=[u]),u.forEach((function(a){var e=a.id,r=a.data;return _[e]=r})),e(e({},a),{},{abtests:_});case r.SET_POPUP_DATA:var d=t.payload||{};return e(e({},a),{},{isShowPopup:!!Object.keys(d).length,popupData:d});case r.ONCE_POPUP:return e(e({},a),{},{oncePopup:t.payload});case r.SET_ACTIVITY_INFO:return e(e({},a),{},{activityInfo:t.payload||{}});case r.SET_CARORDER_DATA:return e(e({},a),{},{carOrderInfo:t.payload});case r.CLOSE_CARORDER_DATA:return e(e({},a),{},{carOrderInfo:e(e({},a.carOrderInfo),{},{checkData:null,popWindow:!1})});case r.SET_INDEX_POPUP_LEVEL:return e(e({},a),{},{indexPopupLevel:t.payload});case r.SET_COUPON_TIPS_DATA:return e(e({},a),{},{indexCouponTips:t.payload});case r.SET_PRODUCT_CHG_DLG:return e(e({},a),{},{productChgDlg:t.payload});case r.SET_PRODUCT_CHG_DLG_SHOW:return e(e({},a),{},{productChgDlgShow:t.payload});case r.SET_TRANSLATEJS:return e(e({},a),{},{translateJS:t.payload});case r.SET_TRANSLATEJS_SHOW:return e(e({},a),{},{translateJSShow:t.payload});case r.SET_SHOW_KUACHENG_DATA:return e(e({},a),{},{kuachengshow:t.payload});case r.SET_HOTEL_CROSS_ADS:return e(e({},a),{},{crossStartAddress:t.payload});case r.SET_AUGMENT_AND_QA:return e(e({},a),{},{augmentedAndQuestion:t.payload});case r.SET_HOME_CUPON:return e(e({},a),{},{homeCupon:t.payload&&t.payload.slice(0,2)});case r.SET_PAYMENT_RISK_CONF:return e(e({},a),{},{riskConf:t.payload});case r.SET_GEO_LIST:return e(e({},a),{},{geoList:t.payload});case r.SET_BACKON_DRIVER_INFO:return e(e({},a),{},{backonDriverInfo:t.payload});case r.SET_MISSION_INFO:return e(e({},a),{},{missionInfo:t.payload});case r.SET_HOME_BANNER:return e(e({},a),{},{homeBannerInfo:t.payload});default:return a}};var e=require("../../../@babel/runtime/helpers/objectSpread2"),r=a(require("../actions/index"));
},{isPage:false,isComponent:false,currentFile:'useCar/store/reducers/common.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/store/reducers/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../../@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:!0}),exports.airport=void 0,exports.asyncStyles=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ASYNC_STYLE":return[].concat(t.payload);default:return e||[]}},exports.choosedParamsData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"choosedParamsData":return r({},t.payload);default:return e}},exports.common=void 0,exports.eventImgConfig=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.SET_EVENT_IMG_CONFIG:return r(r({},e),t.payload);default:return e}},exports.getH5Back=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"H5BACK":return r({},t.payload);default:return e}},exports.getStartInfoData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STARTINFODATA":return r({},t.payload);default:return e}},exports.liSwitch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(t.type===a.SET_LISWITCH)return t.payload;return e},exports.locaiotnStartInfoData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"locaiotnStartInfoData":return r({},t.payload);default:return e}},exports.mapScale=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(t.type===a.SET_MAP_SCALE)return"number"==typeof t.payload?t.payload:17;return e},exports.nearbyCarMarkers=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if(t.type===a.SET_INDEX_NEARBY_CAR)return t.payload||[];return e},exports.passengerInfo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.SET_PASSENGERINFO:return r({},t.payload);default:return e}},exports.productId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(t.type===a.SET_PRODUCTID)return t.payload;return e},exports.queryPrice=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.SHOW_CAR_PRICE_QUERY:case a.SHOW_MEET_TRAIN_QUERY:case a.SHOW_SEND_TRAIN_QUERY:case a.SHOW_MEET_FLIGTH_QUERY:case a.SHOW_AIRPORT_PRICE_QUERY:if(t.payload){var n=e.show||0;return{show:++n,params:r({},t.payload)}}return{show:!1};case a.HIDE_PRICE_QUERY:return{show:!1};case a.CHG_QUERY_PRODUCTID:return r(r({},e),{},{params:r(r({},e.params),{},{tcServiceTypeId:t.payload})});default:return e}},exports.recSpotList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if(t.type===a.SET_REC_SPOT_LIST)return t.payload||[];return e},exports.selectCarType=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if(t.type===a.SET_SELECT_CAR_TYPE)return t.payload||[];return e},exports.selection=void 0,exports.setScenQuery=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(t.type===a.SET_SCENE_QUERY)return t.payload;return e},exports.setScenShow=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(t.type===a.SET_SCENE_SHOW)return t.payload;return e},exports.shareConfig=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.SET_SHARE_CONFIG:return r(r({},e),t.payload);default:return e}},exports.specialCar=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return(0,i.default)(e,t)},exports.tabInfo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.SET_TABLIST:return r(r({},e),t.payload);case a.SET_TABINDEX:if(!e.subTabs)return e;var n=e.tabIndex,o=t.payload||{tabIndex:"specialCarIndex"},i=o.tabIndex,u=o.currentTab,s=(e.subTabs[i||n]||[]).map((function(e){return Object.assign({},e)})),d=i&&i!==e.tabIndex&&!u,l="number"==typeof u;return l?t.payload.currentTab=s[u].tabToken:u||!d&&e.currentTab||(t.payload.currentTab=s[0].tabToken),r(r({},e),{},{subtab:s},t.payload);default:return e}},exports.unstartOrder=exports.train=void 0,exports.userInfo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.SET_USERINFO:return r({},t.payload);default:return e}};var r=require("../../../@babel/runtime/helpers/objectSpread2"),a=t(require("../actions/index")),n=e(require("./airport")),o=e(require("./train")),i=e(require("./specialCar")),u=e(require("./selection")),s=require("../../lib/redux"),d=(require("../../common/common"),require("./common")),l=require("./unstart");var p=d.common;exports.common=p;var c=l.unstart;exports.unstartOrder=c;var v=(0,s.combineReducers)(o.default);exports.train=v;var h=(0,s.combineReducers)(n.default);exports.airport=h;var f=(0,s.combineReducers)(u.default);exports.selection=f;
},{isPage:false,isComponent:false,currentFile:'useCar/store/reducers/index.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/store/reducers/selection.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=e(require("../actions/index")),t=require("../../common/common"),i={depList:(0,t.reduxSetHelper)(r.LOCATION_HISTORY),stationList:(0,t.reduxSetHelper)(r.TRAIN_STATION_LIST),terminalList:(0,t.reduxSetHelper)(r.FLIGHT_TERMINAL_LIST)};exports.default=i;
},{isPage:false,isComponent:false,currentFile:'useCar/store/reducers/selection.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/store/reducers/specialCar.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=require("../../common/common"),t=require("../../lib/redux"),u=e(require("../actions/index"));var i=(0,t.combineReducers)({carParams:(0,r.reduxSetHelper)(u.SET_CAR_PRICE_PARAMS),choosedParams:(0,r.reduxSetHelper)(u.CHOOSE_CAR_PARAMS,{},!0,(function(e,r){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.__type;if(t){var u=["Latitude","Longitude"].reduce((function(u,i){var o=t+i;return u&&e[o]==r[o]}),!0),i=t+"PoiId";u||(r[i]=r[i]||"")}delete r.__type}(e,r),function(e,r){return e.startLatitude!=r.oldData||e.startLongitude!=r.oldData}(e,r)&&(e.startSource||(e.startSource=""),e.pickupSpotsNew&&(e.pickupSpotsNew=""))})),insQuickSelection:(0,r.reduxSetHelper)(u.SET_CAR_INS_QUICK,[]),subQuickSelection:(0,r.reduxSetHelper)(u.SET_CAR_SUB_QUICK,[])});exports.default=i;
},{isPage:false,isComponent:false,currentFile:'useCar/store/reducers/specialCar.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/store/reducers/train.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=require("../../../@babel/runtime/helpers/typeof"),t=e(require("../actions/index")),o=require("../../common/common");function s(e,r){return"ticket"==e._source&&"ticket"!=r._source&&"rebooking"!=r._source}var n={meetChoosedParams:(0,o.reduxSetHelper)(t.CHOOSE_Train_MEET_PARAMS,{},!0,(function(e,t){var o=null==t||"object"!==r(t)||t.hasOwnProperty("startAddress")||t.hasOwnProperty("startLatitude");s(e,t)&&o&&(t.useTime=""),o&&!t._source&&(t._source=""),t.startAddress&&!t.orderId&&["trainArrDate","trains","orderId"].map((function(r){return delete e[r]}))})),sendChoosedParams:(0,o.reduxSetHelper)(t.CHOOSE_Train_SEND_PARAMS,{},!0,(function(e,t){var o=null==t||"object"!==r(t)||t.hasOwnProperty("endAddress")||t.hasOwnProperty("endLatitude");s(e,t)&&o&&(t.useTime=""),o&&!t._source&&(t._source=""),t.endAddress&&!t.orderId&&["trainDepDate","trains","orderId"].map((function(r){return delete e[r]}))})),meetQuickSelection:(0,o.reduxSetHelper)(t.SET_TRAIN_MEET_QUICK,{},!0),sendQuickSelection:(0,o.reduxSetHelper)(t.SET_TRAIN_SEND_QUICK,{},!0),spotList:(0,o.reduxSetHelper)(t.SET_TRAIN_REC_SPOTS,[])};exports.default=n;
},{isPage:false,isComponent:false,currentFile:'useCar/store/reducers/train.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/store/reducers/unstart.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../../@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:!0}),exports.unstart=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.SET_UNSTARTORDER:var i=t.payload,n=i.displayContent;return i.singleTypeInfoList&&i.singleTypeInfoList.forEach(s),i.multipleTypeInfoList&&i.multipleTypeInfoList.forEach((function(e){e.travelAssistantInfoList.forEach(s)})),{data:t.payload,show:n};case a.SET_UNSTARTORDER_SHOW:return r(r({},e),{},{show:t.payload});default:return e}};var r=require("../../../@babel/runtime/helpers/objectSpread2"),a=t(require("../actions/index")),i=e(require("../../../util/util"));function s(e){var t=11==e.projectTag?"M月d日":"HH:mm";e.startTimeText=i.default.format(e.startTime,t),e.endTimeText=i.default.format(e.endTime,t),e.formatStartTime=i.default.format(e.startTime,"M月d日 ww"),e.startAddressF=n(e.projectTag,e.startAddress,11==e.projectTag?e.startAddressDetail:e.startTerminal),e.endAddressF=n(e.projectTag,e.endAddress,11==e.projectTag?e.endAddressDetail:e.endTerminal),[12,14].indexOf(e.projectTag)>-1&&(e.ticketTips=e.projectName+i.default.format(e.startTime," 预计M月d日 HH:mm"),e.meetTicketTips=e.projectName+i.default.format(e.endTime," 预计M月d日 HH:mm"))}function n(e,t,r){return 11===e?t+" ("+r:12===e?r?t.length>3?t.slice(0,3)+"..."+r:t:t.length>4?t.slice(0,4)+"...":t:14===e?t.length>4?t.slice(0,4)+"...":t:void 0}
},{isPage:false,isComponent:false,currentFile:'useCar/store/reducers/unstart.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/store/selector/queryPriceParams.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sendTrainStartAddress=exports.sendTrainParamsSelector=exports.sendAirportStartAddress=exports.sendAirportQueryParamsSelector=exports.meetTrainParamsSelector=exports.meetAirportQueryParamsSelector=exports.carStartAddress=exports.carQueryParamsSelector=void 0;var r=require("../../../@babel/runtime/helpers/objectSpread2"),e=require("../../common/common"),t=require("../../lib/reselect"),s=(0,t.createSelector)((function(r){return r.airport.meetChoosedParams}),(function(e){return!!(e.startAddress&&e.endAddress&&e.useTime)&&r({},e)}));exports.meetAirportQueryParamsSelector=s;var o=(0,t.createSelector)((function(r){return r.airport.sStartAddress}),(function(r){return r.common.position}),(function(r,t){return(0,e.isEmptyObject)(r)?t:r}));exports.sendAirportStartAddress=o;var n=(0,t.createSelector)((function(r){return r.airport.sendChoosedParams}),(function(e){return!!(e.startAddress&&e.endAddress&&e.useTime)&&r({},e)}));exports.sendAirportQueryParamsSelector=n;var a=(0,t.createSelector)((function(r){return r.specialCar.start}),(function(r){return r.common.position}),(function(r,e){return r.name?r:e}));exports.carStartAddress=a;var c=(0,t.createSelector)((function(r){var e=r.specialCar;return{19:e.choosedParams,11:e.choosedParams,80:e.choosedParams,130:e.choosedParams}[r.productId]||""}),(function(r){return 19==r.productId||80==r.productId||130==r.productId}),(function(e,t){return!(!e.startAddress||!e.endAddress||!t&&!e.useTime)&&r({},e)}));exports.carQueryParamsSelector=c;var d=(0,t.createSelector)((function(r){return r.train.meetChoosedParams}),(function(e){return!!(e.startAddress&&e.endAddress&&e.useTime)&&r({},e)}));exports.meetTrainParamsSelector=d;var i=(0,t.createSelector)((function(r){return r.train.sendStart}),(function(r){return r.common.position}),(function(r,t){return!((0,e.isEmptyObject)(r)||!r.cityName)&&(r||t)}));exports.sendTrainStartAddress=i;var u=(0,t.createSelector)((function(r){return r.train.sendChoosedParams}),(function(e){return!!(e.startAddress&&e.endAddress&&e.useTime)&&r({},e)}));exports.sendTrainParamsSelector=u;
},{isPage:false,isComponent:false,currentFile:'useCar/store/selector/queryPriceParams.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/store/state/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default={productId:0,tabInfo:{tabIndex:"specialCarIndex",subtab:[],subtabIndex:0,tabList:[]},airport:{terminal:{},flightInfo:{},rollerDate:"",jEndAddress:{},sendTerminal:{},sStartAddress:{}},train:{},common:{position:{},isTicketShow:!0,abtests:{},refId:"",popupData:{},isShowPopup:!1,oncePopup:!0,activityInfo:{},carOrderInfo:{},indexPopupLevel:100,indexCouponTips:{},kuachengshow:{},crossStartAddress:"",augmentedAndQuestion:null,homeCupon:[],payMentInfo:{payCredit:!1,payMentText:"",payMentKey:""},payMentKeyDict:{wxCredit:!0,promptPay:!0},riskConf:{isOpen:!1,riskResult:!1},backonDriverInfo:{},geoList:null,homeBannerInfo:null},unstartOrder:{data:{},show:!1},userInfo:{},selectCarType:[],passengerInfo:{passengerName:"",passengerPhone:""},specialCar:{},mapScale:17,liSwitch:!1,getH5Back:{cityData:{}},choosedParamsData:{},locaiotnStartInfoData:{}};
},{isPage:false,isComponent:false,currentFile:'useCar/store/state/index.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/util/getChannelUrl.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.WEBVIEW=exports.SELECT_CAR=exports.SALE_CENTER=exports.POI=exports.ORDER_LIST=exports.ORDER_DETAIL=exports.INDEX=exports.COMMON_H5=exports.CHANNEL_TC_MAIN=exports.CHANNEL_TCEL_MAIN=exports.CHANNEL_CCB=exports.CASHIER=void 0;var e,r,t,o,a,c,n,C,s,i,N=require("../../@babel/runtime/helpers/defineProperty"),E=require("../config/index");exports.CHANNEL_TCEL_MAIN="TCEL-MAIN";exports.CHANNEL_TC_MAIN="TC-MAIN";exports.CHANNEL_CCB="TC-CCB";exports.SELECT_CAR="select_car";exports.POI="poi";exports.INDEX="index";exports.ORDER_LIST="order_list";exports.SALE_CENTER="sale_center";exports.ORDER_DETAIL="order_detail";exports.COMMON_H5="common_h5";exports.CASHIER="cashier";exports.WEBVIEW="webview";var p=(N(i={},"select_car",{begin:(e={},N(e,"TCEL-MAIN","page/usecar"),N(e,"TC-MAIN","useCar"),N(e,"TC-CCB","useCar"),e),common:"/selectCar/selectCar"}),N(i,"poi",{begin:(r={},N(r,"TCEL-MAIN","page/usecar"),N(r,"TC-MAIN","useCar"),N(r,"TC-CCB","useCar"),r),common:"/address/address"}),N(i,"index",{begin:(t={},N(t,"TCEL-MAIN","page/usecar"),N(t,"TC-MAIN","pages"),N(t,"TC-CCB","pages"),t),common:"/index/index",after:N({},"TC-CCB","?tab=8")}),N(i,"order_list",{begin:(o={},N(o,"TCEL-MAIN","page/home/ordernew/order"),N(o,"TC-MAIN","useCar/orderList/orderList"),N(o,"TC-CCB","pages/mall/orderList/orderList?tab=2"),o)}),N(i,"sale_center",{begin:(a={},N(a,"TCEL-MAIN","".concat(E.kBaseUrl,"/ycoperation/")),N(a,"TC-MAIN","".concat(E.kBaseUrl,"/ycoperation/")),a)}),N(i,"order_detail",{begin:(c={},N(c,"TCEL-MAIN","".concat(E.kBaseUrl,"/internalcarrebornwechat/view")),N(c,"TC-MAIN","".concat(E.kBaseUrl,"/cardistribution")),N(c,"TC-CCB","".concat(E.kBaseUrl,"/cardistribution")),c),common:"/main.html#/orderDetail"}),N(i,"common_h5",{begin:(n={},N(n,"TCEL-MAIN","".concat(E.kBaseUrl,"/internalcarrebornwechat/view")),N(n,"TC-MAIN","".concat(E.kBaseUrl,"/cardistribution")),N(n,"TC-CCB","".concat(E.kBaseUrl,"/cardistribution")),n),common:"/main.html"}),N(i,"cashier",{begin:(C={},N(C,"TCEL-MAIN","page/techcenter/sub/checkout/index/index"),N(C,"TC-MAIN","useCar/checkstand/checkstand"),N(C,"TC-CCB","useCar/checkstand/checkstand"),C)}),N(i,"webview",{begin:(s={},N(s,"TCEL-MAIN","page/home/webview/webview"),N(s,"TC-MAIN","pages/webView/webView"),N(s,"TC-CCB","useCar/webView/webView"),s)}),i),A=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(p[e]){var o=p[e],a="".concat(o.begin&&o.begin[E.CHANNEL]?o.begin[E.CHANNEL]:""),c="".concat(o.common||""),n="".concat(o.after&&o.after[E.CHANNEL]?o.after[E.CHANNEL]:""),C="".concat(a).concat(c).concat(n);if(C){var s=null;return t&&Object.keys(t).length>0&&(s=Object.keys(t).map((function(e){return"".concat(e,"=").concat(t[e])})).join("&")),"".concat(r?"/":"").concat(s?"".concat(C).concat(C.indexOf("?")<0?"?":"&").concat(s):C)}console.warn("该渠道没有此模块")}else console.warn("模块配置不存在")};exports.default=A;
},{isPage:false,isComponent:false,currentFile:'useCar/util/getChannelUrl.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/util/logger.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,exports.report=function(e,t){i.dl("report").send(e,t),console.warn(e,t)},exports.updateLoc=function(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";i.loc((function(){return{latlng:[e||"",t||""],cityId:n||"",city:r||"",district:o||""}}))};var t=e(require("../lib/spy.xcx.min")),n=e(require("../../utils/userInfo")),r=e(require("./tripApi")),o=require("../common/locationUtil"),i=new t.default({appName:"yc-own-xcx",platform:"yc-own-xcx-"+(__wxConfig||{}).envVersion,url:r.default.wx17uUrl+"/car-inter-h5/mintorcollect/logCollect/frontEnd",v:getApp().appVersion,isOwnPage:function(){return!0}});n.default.getUnionid((function(e,t,n){i.us({unionId:e,openId:t,memberId:n})})),setTimeout((function(){(0,o.getLocationInfo)().then((function(e){i.loc((function(){return e?{latlng:[e.lat,e.lng],cityId:e.cityId,city:e.cityName}:null}))})).catch((function(e){}))}));var u=i;exports.default=u;
},{isPage:false,isComponent:false,currentFile:'useCar/util/logger.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/util/risk.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.riskCollect=function(e,r){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.default.postQC("payscore.riskV2",e,{isNeedLoading:!1,isShowErrMsg:!1})}({userLat:r.localLatitude,userLng:r.localLongitude,phone:e,startLocation:r.startAddress,startLat:r.startLatitude,startLng:r.startLongitude,endLocation:r.endAddress,endLat:r.endLatitude,endLng:r.endLongitude,useCarTime:r.useTime})};var t=e(require("../common/request"));
},{isPage:false,isComponent:false,currentFile:'useCar/util/risk.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/util/tool.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.add2=exports.add=void 0,exports.cutFixed=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=new RegExp("^\\d+(?:\\.\\d{0,".concat(e,"})?"));return Number(t.toString().match(r))},exports.isString=exports.isObjectLike=exports.isNil=exports.isEmpty=exports.groupBy=exports.get=exports.equals=exports.deepCopy=exports.debounce=void 0,exports.memoize=function(t){var e=new Map;return function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=JSON.stringify(n);if(e.has(i))return e.get(i);var u=t.apply(this,n);return u.catch&&u.catch((function(t){throw s(e,(function(t){return i===t.key})),t})),e.set(i,u),u}},exports.memoizePromiseFn=function(t){var e=new Map;return function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=JSON.stringify(n);return e.has(i)||e.set(i,t.apply(void 0,n).catch((function(t){return e.delete(i),Promise.reject(t)}))),e.get(i)}},exports.pick=exports.omit=void 0,exports.promisify=function(t){return function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return new Promise((function(r){t.call.apply(t,[e].concat(n,[function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r(e)}]))}))}},exports.set=exports.safeParseJSON=exports.runPromisesInSeries=exports.remove=void 0,exports.setMapLocMark=function(t,e){var r=wx.createMapContext(t,e);r.setLocMarkerIcon&&r.setLocMarkerIcon({iconPath:"/pages/common/img/icon_loc.png"})},exports.updateURLParameter=exports.throttle=exports.sub=void 0,require("../../@babel/runtime/helpers/Arrayincludes");var e=require("../../@babel/runtime/helpers/typeof"),r=t(require("../../util/tcUtil"));exports.deepCopy=function t(r){var n=Array.isArray(r)?[]:{};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&("object"===e(r[o])&&null!==r[o]?n[o]=t(r[o]):n[o]=r[o]);return n};exports.runPromisesInSeries=function(t){return t.reduce((function(t,e){return t.then(e)}),Promise.resolve())};exports.equals=function t(r,n,o){if(r===n)return!0;if(r instanceof Date&&n instanceof Date)return r.getTime()===n.getTime();if(!r||!n||"object"!==e(r)&&"object"!==e(n))return r===n;if(r.prototype!==n.prototype)return!1;var i=Object.keys(r);return i.length===Object.keys(n).length&&i.every((function(e){return o?r[e]===n[e]:t(r[e],n[e])}))};exports.isEmpty=function(t){return null==t||!(Object.keys(t)||t).length};exports.isNil=function(t){return null==t};exports.isObjectLike=function(t){return"object"===e(t)&&null!==t};exports.isString=function(t){return"[object String]"===toString.call(t)};exports.pick=function(t,e){return e.reduce((function(e,r){return r in t&&(e[r]=t[r]),e}),{})};exports.omit=function(t,e){return Object.keys(t).filter((function(t){return!e.includes(t)})).reduce((function(e,r){return e[r]=t[r],e}),{})};var n=r.default.get;exports.get=n;var o=r.default.set;exports.set=o;var i=r.default.debounce;exports.debounce=i;var u=r.default.throttle;exports.throttle=u;var s=function(t,e){return Array.isArray(t)?t.filter(e).reduce((function(e,r){return t.splice(t.indexOf(r),1),e.concat(r)}),[]):[]};exports.remove=s;exports.groupBy=function(t,e){return t.map("function"==typeof e?e:function(t){return t[e]}).reduce((function(e,r,n){return e[r]=(e[r]||[]).concat(t[n]),e}),{})};exports.updateURLParameter=function(t,e,r){var n="",o=t.split("?"),i=o[0],u=o[1],s="";if(u){o=u.split("&");for(var a=0;a<o.length;a++)o[a].split("=")[0]!=e&&(n+=s+o[a],s="&")}return i+"?"+n+(s+""+e+"="+r)};exports.add=function(t,e){var r,n,o;console.warn("add 已弃用， 使用 add2");try{r=t.toString().split(".")[1].length}catch(t){r=0}try{n=e.toString().split(".")[1].length}catch(t){n=0}return o=Math.pow(10,Math.max(r,n)),Number((t*o+e*o).toFixed())/o};exports.add2=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=e.map((function(t){return(t=t||0).toString().split(".")[1]?t.toString().split(".")[1].length:0})),o=Math.pow(10,Math.max.apply(null,n)),i=e.reduce((function(t,e){return t+e*o}),0);return Number(i.toFixed())/o};exports.sub=function(t,e){var r,n,o;try{r=t.toString().split(".")[1].length}catch(t){r=0}try{n=e.toString().split(".")[1].length}catch(t){n=0}return o=Math.pow(10,Math.max(r,n)),Number((t*o-e*o).toFixed())/o};exports.safeParseJSON=function(t,e){try{e=JSON.parse(t)}catch(t){console.warn(t)}return e};
},{isPage:false,isComponent:false,currentFile:'useCar/util/tool.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("useCar/util/tripApi.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={wx17uUrl:require("../config/index").kBaseUrl,tcmobileUrl:"https://tcmobileapi.17usoft.com",channelVersion:"1.0.3",appVersion:"5.4.7"};exports.default=e;
},{isPage:false,isComponent:false,currentFile:'useCar/util/tripApi.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("util/commonEv.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../utils/tracer");module.exports={page:function(a){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"2036";e.newPage({pagename:a,productCode:n})},ev:function(a,n,t,o,r,u){e.newEv({pagename:a,productCode:n,label:t,value:o,category:r,action:u})},newEv:e.newEv,elEv:e.elEV};
},{isPage:false,isComponent:false,currentFile:'util/commonEv.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("util/date.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../@babel/runtime/helpers/classCallCheck"),t=require("../@babel/runtime/helpers/createClass"),n="millisecond",r="second",s="minute",i="hour",a="day",u="week",c="month",h="quarter",o="year",d=function(e,t,n){var r=String(e);return!r||r.length>=t?e:"".concat(Array(t+1-r.length).join(n)).concat(e)},$=function(e,t){var n,r=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(r,"months");return n=t-s<0?(t-s)/(s-e.clone().add(r-1,"months")):(t-s)/(e.clone().add(r+1,"months")-s),Number(-(r+n))||0},l=function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},f=function(e){return{M:c,y:o,w:u,d:a,h:i,m:s,s:r,ms:n,Q:h}[e]||String(e||"").toLowerCase().replace(/s$/,"")},y=function(){function y(t){e(this,y),this.$d=function(e){if(!e)return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&/^[0-9]+.?[0-9]*$/.test(e))e*=1;else if("string"==typeof e&&!/Z$/i.test(e)){var t=e.match(/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/);if(t)return new Date(t[1],t[2]-1,t[3]||1,t[4]||0,t[5]||0,t[6]||0,t[7]||0)}return new Date(e)}(t),this.init()}return t(y,[{key:"init",value:function(){this.$zone=this.$d.getTimezoneOffset()/60,this.$zoneStr=d(String(-1*this.$zone).replace(/^(.)?(\d)/,"$10$200"),5,"+"),this.$y=this.$d.getFullYear(),this.$M=this.$d.getMonth(),this.$D=this.$d.getDate(),this.$W=this.$d.getDay(),this.$H=this.$d.getHours(),this.$m=this.$d.getMinutes(),this.$s=this.$d.getSeconds(),this.$ms=this.$d.getMilliseconds()}},{key:"isValid",value:function(){return!("Invalid Date"===this.$d.toString())}},{key:"isLeapYear",value:function(){return this.$y%4==0&&this.$y%100!=0||this.$y%400==0}},{key:"isSame",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",n=f(t),r=new y(e);return this.startOf(n)<=r&&r<=this.endOf(t)}},{key:"isAfter",value:function(e,t){var n=f(t);return new y(e)<this.startOf(n)}},{key:"isBefore",value:function(e,t){var n=f(t);return this.endOf(n)<new y(e)}},{key:"$g",value:function(e,t,n){return void 0===e?this[t]:this.set(n,e)}},{key:"year",value:function(e){return this.$g(e,"$y",o)}},{key:"month",value:function(e){return this.$g(e,"$M",c)}},{key:"day",value:function(e){return this.$g(e,"$W",a)}},{key:"date",value:function(e){return this.$g(e,"$D","date")}},{key:"hour",value:function(e){return this.$g(e,"$H",i)}},{key:"minute",value:function(e){return this.$g(e,"$m",s)}},{key:"second",value:function(e){return this.$g(e,"$s",r)}},{key:"millisecond",value:function(e){return this.$g(e,"$ms",n)}},{key:"unix",value:function(){return Math.floor(this.valueOf()/1e3)}},{key:"valueOf",value:function(){return this.$d.getTime()}},{key:"startOf",value:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],h=f(e),d=function(e,r){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.$y,i=new y(new Date(s,r,e));return n?i:i.endOf(a)},$=function(e,r){return new y((new Date)[e].apply(t.toDate(),n?[0,0,0,0].slice(r):[23,59,59,999].slice(r)))};switch(h){case o:return n?d(1,0):d(31,11,this.$y);case c:return n?d(1,this.$M):d(0,this.$M+1,this.$y);case u:return n?d(this.$D-this.$W,this.$M):d(this.$D+(6-this.$W),this.$M,this.$y);case a:case"date":return $("setHours",0);case i:return $("setMinutes",1);case s:return $("setSeconds",2);case r:return $("setMilliseconds",3);default:return this.clone()}}},{key:"endOf",value:function(e){return this.startOf(e,!1)}},{key:"mSet",value:function(e,t){switch(f(e)){case"date":this.$d.setDate(t);break;case c:this.$d.setMonth(t);break;case o:this.$d.setFullYear(t)}return this.init(),this}},{key:"set",value:function(e,t){return n=t,Number.isNaN(parseFloat(n))||!Number.isFinite(n)?this:this.clone().mSet(e,t);var n}},{key:"get",value:function(e){return this[f(e)]()}},{key:"add",value:function(e,t){var n,r=t&&1===t.length?t:f(t);if(["M",c].indexOf(r)>-1){var h=this.set("date",1).set(c,this.$M+e);return h=h.set("date",Math.min(this.$D,h.daysInMonth()))}if(["y",o].indexOf(r)>-1)return this.set(o,this.$y+e);switch(r){case"m":case s:n=6e4;break;case"h":case i:n=36e5;break;case"d":case a:n=864e5;break;case"w":case u:n=6048e5;break;default:n=1e3}return new y(this.valueOf()+e*n)}},{key:"subtract",value:function(e,t){return this.add(-1*e,t)}},{key:"format",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"YYYY-MM-DD",n=[["日","一","二","三","四","五","六"],["周日","周一","周二","周三","周四","周五","周六"],["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]],r=[["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]],s=function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},i=function(t){return d(e.$H%12||12,t,"0")};return t.replace(/Y{2,4}|y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|S{3}|Z{1,2}/g,(function(t){switch(t){case"YY":case"yy":return String(e.$y).slice(-2);case"YYYY":case"yyyy":return String(e.$y);case"M":return String(e.$M+1);case"MM":return d(String(e.$M+1),2,"0");case"MMM":return r[e.$M].slice(0,3);case"MMMM":return r[e.$M];case"D":return String(e.$D);case"DD":return d(String(e.$D),2,"0");case"d":return String(e.$W);case"dd":return n[0][e.$W];case"ddd":return n[1][e.$W];case"dddd":return n[2][e.$W];case"H":return String(e.$H);case"HH":return d(String(e.$H),2,"0");case"h":return i(1);case"hh":return i(2);case"a":return s(e.$H,e.$m,!0);case"A":return s(e.$H,e.$m,!1);case"m":return String(e.$m);case"mm":return d(String(e.$m),2,"0");case"s":return String(e.$s);case"ss":return d(String(e.$s),2,"0");case"SSS":return d(String(e.$ms),3,"0");case"Z":return"".concat(e.$zoneStr.slice(0,-2),":00");default:return e.$zoneStr}}))}},{key:"diff",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],d=f(t),v=e instanceof y?e:new y(e),g=this-v,m=$(this,v);switch(d){case o:m/=12;break;case c:break;case h:m/=3;break;case u:m=g/6048e5;break;case a:m=g/864e5;break;case i:m=g/36e5;break;case s:m=g/6e4;break;case r:m=g/1e3;break;default:m=g}return n?m:l(m)}},{key:"daysInMonth",value:function(){return this.endOf(c).$D}},{key:"clone",value:function(){return new y(this)}},{key:"toDate",value:function(){return new Date(this.$d)}},{key:"toArray",value:function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]}},{key:"toJSON",value:function(){return this.toISOString()}},{key:"toISOString",value:function(){return this.toDate().toISOString()}},{key:"toObject",value:function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}}},{key:"toString",value:function(){return this.$d.toUTCString()}},{key:"getTimezoneDate",value:function(){var e=this.toDate(),t=e.getTime(),n=6e4*e.getTimezoneOffset();return new Date(t+n+288e5)}},{key:"alias",value:function(e){var t=(new y).startOf("day");return this.startOf("day").isSame(t)?"今天":this.startOf("day").isSame(t.add(1,"day"))?"明天":this.startOf("day").isSame(t.add(2,"day"))?"后天":this.format(e?"ddd":"dddd")}},{key:"clearTime",value:function(){return this.$d.setHours(0),this.$d.setMinutes(0),this.$d.setSeconds(0),this.$d.setMilliseconds(0),this.$d}}]),y}();exports.default=function(e){return new y(e)};
},{isPage:false,isComponent:false,currentFile:'util/date.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("util/tcUtil.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isString=exports.isObjectLike=void 0;var t=require("../@babel/runtime/helpers/objectSpread2"),n=require("../@babel/runtime/helpers/typeof"),e=function(t,n,e){if(null==t)return e;var r,o=JSON.stringify(n).match(/[^.,\s\[\]\'\"]+/g);if(!o)return e;for(var i=0,a=o.length;i<a;i++){if(null==(r=t[o[i]]))return e;t=r}return r},r=function(t,n){t=t.split("."),n=n.split(".");for(var e=Math.max(t.length,n.length);t.length<e;)t.push("0");for(;n.length<e;)n.push("0");for(var r=0;r<e;r++){var o=parseInt(t[r]),i=parseInt(n[r]);if(o>i)return 1;if(o<i)return-1}return 0},o=function(t){return"object"===n(t)&&null!==t};exports.isObjectLike=o;var i=function(t){return"[object String]"===toString.call(t)};exports.isString=i;var a=null,u=function(){return function(t){if(!t)return!0;if("object"==n(t)&&t.constructor==Array&&0==t.length)return!0;if(function(t){var n=t&&t.constructor,e="function"==typeof n&&n.prototype||Object.prototype;return t===e}(t))return!Object.keys(t).length;for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(a)&&(a=wx.getSystemInfoSync()),a};var c="",l=[],s=function(n){c="",wx.offLocationChange((function(){})),wx.stopLocationUpdate({success:function(t){}}),n&&"wgs84"!==n.type&&(n.type="gcj02"),n.locationApi="onchange",n&&n.latitude&&n.longitude&&(h=t({time:Date.now()},n)),l.splice(0).forEach((function(t,e){n&&n.latitude&&n.longitude?t.success&&t.success(n):t.failCache&&t.failCache>Date.now()-h.time?t.success&&t.success(h):t.fail&&t.fail()}))},f=0,p="",g=!0,h={time:0};function x(t){var n=getCurrentPages()||[];return n[t=(t=void 0===t?-1:t)>=0?t:n.length+t]||null}var y=!1;module.exports={get:e,set:function(t,n,e){if(null==t||null==n)return t;var r=JSON.stringify(n).match(/[^.,\s\[\]\'\"]+/g);if(!r)return t;for(var o=t,i=0,a=r.length;i<a;i++){if(null==o[r[i]]){if(i+1===a){o[r[i]]=e;break}o[r[i]]=/\d+/.test(r[i])?[]:{}}else i+1===a&&(o[r[i]]=e);o=o[r[i]]}return t},compareVersion:r,JsonToQuery:function(t){var n=[],e=JSON.parse(JSON.stringify(t));return Object.keys(e).forEach((function(t){try{o(e[t])&&(e[t]=JSON.stringify(e[t]))}catch(t){}n.push([t,e[t]].join("="))})),n.join("&")},QueryToJson:function(t){var n={};return i(t)?(t.split("&").forEach((function(t){try{var e=t.split("=")[0],r=t.split("=")[1]||"";e&&(n[e]=r)}catch(t){}})),n):t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")},debounce:function(t,n){var e;return function(){for(var r=this,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];e&&clearTimeout(e),e=setTimeout((function(){t.apply(r,i)}),n)}},throttle:function(t,n,e){var r,o,i,a=null,u=0;e||(e={});var c=function(){u=!1===e.leading?0:Date.now(),a=null,i=t.apply(r,o),a||(r=o=null)};return function(){var l=Date.now();u||!1!==e.leading||(u=l);var s=n-(l-u);return r=this,o=arguments,s<=0||s>n?(a&&(clearTimeout(a),a=null),u=l,i=t.apply(r,o),a||(r=o=null)):a||!1===e.trailing||(a=setTimeout(c,s)),i}},guid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=16*Math.random()|0;return("x"===t?n:3&n|8).toString(16)}))},unique:function(t){var e={};return t.filter((function(t,r,o){return!e.hasOwnProperty(n(t)+t)&&(e[n(t)+t]=!0)}))},uniqueObj:function(t,n){for(var e=[],r={},o=0;o<t.length;o++)t[o]&&t[o].hasOwnProperty(n)?r[t[o][n]]||(e.push(t[o]),r[t[o][n]]=!0):e.push(t[o]);return e},getSystemInfoSync:u,getLocation:function(n){var e=n.complete,o=n.success,i=n.fail;if(r(u().SDKVersion,"2.17.0")<0||Date.now()-f>3e4||p)p||(f=Date.now(),p=new Promise((function(e,r){n.success=function(r){!r.type&&(r.type=n.type),h=t({time:Date.now()},r),e(r),p=""},n.fail=function(t){r(t),p=""},wx.getLocation(n)}))),p.then((function(t){o&&o(t),e&&e(t)})).catch((function(t){n.failCache&&n.failCache>Date.now()-h.time?(o&&o(h),e&&e(h)):(i&&i(t),e&&e(t))}));else{if(g){var a=wx.getSystemInfoSync();if(/iOS/.test(a.system)&&a.locationEnabled&&!a.locationAuthorized)return void(n.fail&&n.fail());g=!1}c?l.push(n):wx.startLocationUpdate({success:function(t){l.push(n),wx.onLocationChange(s),wx.onLocationChangeError&&wx.onLocationChangeError(s),c=setTimeout((function(){s({})}),5e3)},fail:function(t){n.fail&&n.fail()}})}},getPage:x,getPageRoute:function(t){var n=x(t);return n&&n.route?n.route:""},getQueryString:function(t,n){var e=new RegExp("(^|\\?|&)"+t+"=([^\\?&#]*)(\\?|&|#|$)","i"),r=(n||"").match(e);return r&&r[2]?decodeURIComponent(r[2]):""},getLocInfo:function(){var t=getApp().globalData.locationInfo;if(!y&&!t)try{t=getApp().globalData.locationInfo=e(wx.getStorageSync("commonLocationCache"),"data",""),y=!0}catch(t){}var n=(t=t||{}).TcLocation||{},r=t.Id||0,o=t.Pid||0,i=t.longitude||"",a=t.latitude||"",u=e(t,"detail.address_component.nation")||"",c=e(t,"detail.address_component.province")||"",l=n.nameShort||t.ShortName||t.Name||"",s=e(t,"detail.address_component.district")||"",f=e(n,"eRegion.euid")||"";return{locationInfo:t,time:t._time,cityId:r,provinceID:o,eCityId:f,lng:i,lat:a,country:u,province:c,city:l,region:s}}};
},{isPage:false,isComponent:false,currentFile:'util/tcUtil.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("util/util.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../@babel/runtime/helpers/interopRequireDefault")(require("../util/date")),r=require("./tcUtil"),e=r.Event,a=r.get,n=r.throttle,o=r.debounce,i={},u=i.toString;function c(t){return null==t?String(t):i[u.call(t)]||"object"}"Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach((function(t,r){i["[object "+t+"]"]=t.toLowerCase()}));Array.isArray;function d(r,e){return e&&(e=e.replace(/d/g,"D").replace(/w/g,"d").replace("d","dd").replace(/h/g,"H")),(0,t.default)(r).format(e)}module.exports={isNotEmptyString:function(t){return"string"==typeof t&&""!==t},format:d,parseDate:function(r){return(0,t.default)(r).$d},addDay:function(r,e,a){var n=(0,t.default)(e).add(r,"d");return{date:n.$d,day:d(n.$d,a)}},nearDay:function(r){return(0,t.default)(r).alias(!0)},Event:e,getJSON:a,isValidDate:function(t){return"string"===c(t)&&(t=new Date(t.replace(/-/g,"/"))),"number"===c(t)&&(t=new Date(t)),"date"===c(t)&&"Invalid Date"!==t.toString()},base64Encode:function(t){var r,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=void 0,n=void 0,o=void 0,i=void 0,u=void 0;for(r=t.length,n=0,a="";n<r;){if(o=255&t.charCodeAt(n++),n==r){a+=e.charAt(o>>2),a+=e.charAt((3&o)<<4),a+="==";break}if(i=t.charCodeAt(n++),n==r){a+=e.charAt(o>>2),a+=e.charAt((3&o)<<4|(240&i)>>4),a+=e.charAt((15&i)<<2),a+="=";break}u=t.charCodeAt(n++),a+=e.charAt(o>>2),a+=e.charAt((3&o)<<4|(240&i)>>4),a+=e.charAt((15&i)<<2|(192&u)>>6),a+=e.charAt(63&u)}return a},throttle:n,debounce:o,addRequestCount:function(){1},reduceRequestCount:function(){1},base64ToString:function(t){for(var r=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,0,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1],e="",a=0,n=0,o=0;o<t.length;o++){var i=r[127&t.charCodeAt(o)],u=t.charCodeAt(o)=="=".charCodeAt(0);-1!=i&&(n=n<<6|i,(a+=6)>=8&&(a-=8,u||(e+=String.fromCharCode(n>>a&255)),n&=(1<<a)-1))}if(a)throw new Error("Corrupted base64 string");return e}};
},{isPage:false,isComponent:false,currentFile:'util/util.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("util/validate.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../@babel/runtime/helpers/typeof"),r=require("../@babel/runtime/helpers/classCallCheck"),n=require("../@babel/runtime/helpers/createClass"),u=e(require("./tcUtil")),a=Object.prototype.toString,i=Object.prototype,l=Object.prototype.hasOwnProperty,o=!1;var c=new(function(){function e(){r(this,e)}return n(e,[{key:"isFunction",value:function(e){return"[object Function]"===a.call(e)}},{key:"isNull",value:function(e){return null===e}},{key:"isObject",value:function(e){return"[object Object]"===a.call(e)}},{key:"isObjectLike",value:function(e){return"object"===t(e)&&null!==e}},{key:"isError",value:function(e){return"[object Error]"===a.call(e)}},{key:"isNumber",value:function(e){return"number"==typeof e&&!isNaN(e)}},{key:"isString",value:function(e){return"[object String]"===a.call(e)}},{key:"isBoolean",value:function(e){return!0===e||!1===e}},{key:"isArrayBuffer",value:function(e){return"[object ArrayBuffer]"===a.call(e)}},{key:"isArray",value:function(e){return"[object Array]"===a.call(e)}},{key:"isUndefined",value:function(e){return void 0===e}},{key:"isincludes",value:function(e,t){return e&&e.length&&e.indexOf(t)>-1}},{key:"isMobile",value:function(e){return/^1[3-9]\d{9}$/.test(e)}},{key:"isEmail",value:function(e){return/^\w+([-+.\']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e)}},{key:"isTravelName",value:function(e){return/^[a-z·\u4e00-\u9fa5]+$/i.test(e)}},{key:"isPassport",value:function(e){return/^[a-zA-Z0-9]{5,17}$/.test(e)}},{key:"isHVPS",value:function(e){return/^(m|M|h|H)(\d{8}|\d{10})$/.test(e)}},{key:"isMTP",value:function(e){return/^(\d{8}|[a-zA-Z][0-9]{9})$/.test(e)}},{key:"isIdCard",value:function(e,t){var r,n,u,a,i,l,o=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1],c=[1,0,10,9,8,7,6,5,4,3,2],s=e;if(r=s.replace(/ /g,""),s=r.replace(/(^\s*)|(\s*$)/g,""),t&&15==s.length)return u=(n=s).substring(6,8),a=n.substring(8,10),i=n.substring(10,12),(l=new Date(u,parseFloat(a)-1,parseFloat(i))).getYear()==parseFloat(u)&&l.getMonth()==parseFloat(a)-1&&l.getDate()==parseFloat(i);if(18==s.length){var f=s.split("");return!(!function(e){var t=e.substring(6,10),r=e.substring(10,12),n=e.substring(12,14),u=new Date(t,parseFloat(r)-1,parseFloat(n)),a=(new Date).getFullYear();return+t<=a&&a-t<=120&&(u.getFullYear()==parseFloat(t)&&u.getMonth()==parseFloat(r)-1&&u.getDate()==parseFloat(n))}(s)||!function(e){var t=0;"x"==e[17].toLowerCase()&&(e[17]=10);for(var r=0;r<17;r++)t+=o[r]*e[r];var n=t%11;return e[17]==c[n]}(f))}return!1}},{key:"isEqualArray",value:function(e,r){var n=this;return e.length===r.length&&(0===e.length?0===r.length:e.every((function(u,a){return u?u instanceof Array?r[a]instanceof Array&&n.isEqualArray(e[a],r[a]):"object"===t(u)?"object"===t(r[a])&&n.isEqualObject(u,r[a]):u===r[a]:!r[a]})))}},{key:"isEqualObject",value:function(e,r){var n=this;if(!e)return!r;var u=Object.keys(e),a=Object.keys(r);return u.length===a.length&&u.every((function(u){return e[u]instanceof Array?r[u]instanceof Array&&n.isEqualArray(e[u],r[u]):"object"===t(e[u])?"object"===t(r[u])&&n.isEqualObject(e[u],r[u]):e[u]===r[u]}))}},{key:"isempty",value:function(e){if(null==e)return!0;if("object"==t(e)&&e.constructor==Array&&0==e.length)return!0;var r=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a.call(e)}(e);if("[object Map]"==r||"[object Set]"==r)return!e.size;if(function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||i)}(e))return!Object.keys(e).length;for(var n in e)if(l.call(e,n))return!1;return!0}},{key:"isIPhoneX",value:function(){try{o=o||wx.getStorageSync("tcel-isIPhoneX-new")}catch(e){}try{if(!o){var e=u.default.getSystemInfoSync().model,t=e.match(/\d+(.\d+)?/g);o=e.indexOf("iPhone")>-1&&(e.indexOf("iPhone X")>-1||t&&t.length>0&&parseInt(t[0])>10)?1:2,wx.setStorage({data:o,key:"tcel-isIPhoneX-new"})}}catch(e){}return 1==o}}]),e}());exports.default=c;
},{isPage:false,isComponent:false,currentFile:'util/validate.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/EventBus.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../@babel/runtime/helpers/classCallCheck"),t=require("../@babel/runtime/helpers/createClass"),n=function(){function n(){e(this,n),this.hub=Object.create(null)}return t(n,[{key:"emit",value:function(e){for(var t=this,n=arguments.length,r=new Array(n>1?n-1:0),u=1;u<n;u++)r[u-1]=arguments[u];var h=this.hub[e]||[];h.forEach((function(n,u){var h=n.handler,i=n.caller,l=n.once;h.apply(i,r),l&&t.hub[e].splice(u,1)}))}},{key:"on",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.hub[e]||(this.hub[e]=[]),this.hub[e].push({handler:t,caller:n,once:r})}},{key:"off",value:function(e,t){var n=(this.hub[e]||[]).findIndex((function(e){return e.handler===t}));n>-1&&this.hub[e].splice(n,1),0===this.hub[e].length&&delete this.hub[e]}},{key:"once",value:function(e,t,n){this.on(e,t,n,!0)}}]),n}();exports.default=n;
},{isPage:false,isComponent:false,currentFile:'utils/EventBus.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/api.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../useCar/config/index");module.exports={getWxUserInfo:"".concat(e.kUseCarApi,"wxLogin")};
},{isPage:false,isComponent:false,currentFile:'utils/api.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/common.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.get=s;var t=require("../@babel/runtime/helpers/defineProperty"),n=e(require("./router")),o=require("../util/tcUtil");function r(e){return"function"==typeof e}function a(e,t){try{wx.setStorageSync(e,t)}catch(e){console.log(e)}}function i(){try{var e=getApp();return e?(e.globalData.systemInfo||(e.globalData.systemInfo=wx.getSystemInfoSync()),e.globalData.systemInfo):wx.getSystemInfoSync()}catch(e){return null}}function l(){try{var e=getApp();return e.globalData.openId||(e.globalData.openId=wx.getStorageSync("tongcheng.openid")||""),e.globalData.openId}catch(e){return console.log("获取本地缓存 openId 错误"),""}}function c(){try{var e=getApp();return e.globalData.unionId||(e.globalData.unionId=wx.getStorageSync("tongcheng.unionid")||""),e.globalData.unionId}catch(e){return console.log("获取本地缓存 unionId 错误"),""}}function s(e,t,n){if(null==e)return n;var o=JSON.stringify(t).match(/[^.,\s\[\]\'\"]+/g);if(!o)return n;for(var r=void 0,a=0,i=o.length;a<i;a++){if(null==(r=e[o[a]]))return n;e=r}return r}module.exports={logError:function(e){console.error(e)},alert:function(e,t,n,o,a,i,l,c){wx.showModal({content:e||"",title:t||"温馨提示",showCancel:n||!1,cancelText:o||"我知道了",confirmText:a||"确定",confirmColor:c||"#5993ff",success:function(e){e.confirm?r(i)&&i(e):r(l)&&l()}})},showToast:function(e,t,n,o){wx.showToast({title:e||"",icon:t||"none",duration:n||2e3,mask:!0,success:o||null})},loading:function(e){wx.showToast({title:e||"加载中...",icon:"loading",mask:!0,duration:2e4})},getStorage:function(e){try{return wx.getStorageSync(e)}catch(e){console.log(e)}},setStorage:a,clearStorage:function(e){if(e)a(e,"");else try{wx.clearStorageSync()}catch(e){console.log(e)}},removeStorage:function(e){try{wx.removeStorageSync(e)}catch(e){console.log(e)}},formatOptions:function(e){var t="";for(var n in e)t+=n+"="+e[n]+"&";return t=t.slice(0,t.length-1)},throttle:function(e,t){null!=t&&null!=t||(t=1500);var n=null;return function(){var o=+new Date;(o-n>t||!n)&&(e(),n=o)}},unsupportCustomNavigation:function(){var e=i(),t=e.version,n=e.platform,r=e.SDKVersion;return-1===(0,o.compareVersion)(t,"7.0.0")||"devtools"===n&&-1===(0,o.compareVersion)(r,"2.4.3")},getSystemInfo:i,isIphone:function(){var e=i(),t=e.model.toUpperCase(),n=e.system.toUpperCase();return t.indexOf("IPHONE")>-1||n.indexOf("IOS")>-1},controlVisible:function(e,n){if(n){var o=e.currentTarget.dataset,r=e.detail,a=void 0===o.visible?r.visible:o.visible,i=void 0===o.target?r.target:o.target,l="visibleControl."+i;"toggle"===a&&n.setData(t({},l,!n.data.visibleControl[i])),"show"===a&&n.setData(t({},l,!0)),"hide"===a&&n.setData(t({},l,!1)),"boolean"==typeof a&&n.setData(t({},l,a))}else console.log("须要传递上下文")},routerTo:function(e){var t=e.currentTarget.dataset,o=t.route,r=t.method,a=void 0===r?"push":r,i=t.query,l=void 0===i?null:i;n.default[a](o,l)},broadRouterTo:function(e){var t=e.currentTarget.dataset,o=t.type,r=void 0===o?"inner":o,a=t.route,i=t.url,l=t.method,c=void 0===l?"push":l,s=t.query,u=void 0===s?null:s,g=t.appid,f=t.appId;if(a=a||i,"inner"===r||"XCX"===r)n.default[c](a,u);else if("h5part"===r)n.default.push("h5part",Object.assign({route:a},u));else if("h5"===r)n.default.push("webView",{src:encodeURIComponent(a)});else if("h5Act"===r){var d=encodeURIComponent(a);n.default.push("webView",{src:d,accredit:1})}else"miniProgram"==r?wx.navigateToMiniProgram?wx.navigateToMiniProgram({appId:g||f,path:a}):wx.showModal({title:"提示",content:"当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"}):"metroPlugin"==r&&wx.navigateTo({url:a})},getOpenId:l,getUnionId:c,getSecToken:function(){try{var e=getApp(),t=e.globalData.sessionKey||wx.getStorageSync("tongcheng.sectoken"),n=e.globalData.sessionTime||wx.getStorageSync("tongcheng.sectokenTime");return t&&Date.now()-n<54e5?e.globalData.sessionKey:""}catch(e){return""}},setSecToken:function(e){try{var t=getApp();t.globalData.sessionKey=e,wx.setStorageSync("tongcheng.sectoken",e);var n=Date.now();t.globalData.sessionTime=n,wx.setStorageSync("tongcheng.sectokenTime",n)}catch(e){console.error("setSecToken",e)}},getUserInfo:function(){try{var e=getApp(),t={unionId:c(),openId:l()},n=null;return t.unionId||(n=JSON.parse(t)),n||e.globalData.actUserInfo||null}catch(e){return console.log("获取本地缓存 unionId 错误"),""}},isXIAN:function(){return"610100"==getApp().globalData.cityObj.cityCode},get:s,setData:function(e,t){for(var n in t||console.log("须要传递上下文"),e)t.data[n]=e[n]},requestHandler:function(e,t){return function(n){return 1e3==n.code?e(n.result):t(n.message)}},navigateToMiniProgram:function(e){wx.navigateToMiniProgram?wx.navigateToMiniProgram(e):wx.showModal({title:"提示",content:"当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"})},getCityCode:function(){var e=getApp();if(!e)return"";var t=e.globalData.cityObj;return t?t.cityCode:""},getCurrentPage:function(){var e=getCurrentPages(),t=e[e.length-1];return t?t.route:""},splitKeys:function(e){var t=new Object;if(e)for(var n=e.split("&"),o=0;o<n.length;o++)t[n[o].slice(0,n[o].indexOf("="))]=n[o].slice(n[o].indexOf("=")+1);return t},isSupportMapIndex:function(){var e=i().SDKVersion;return-1!==(0,o.compareVersion)(e,"2.8.0")}};
},{isPage:false,isComponent:false,currentFile:'utils/common.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/config.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../config");module.exports={appId:98,appVersion:e.version};
},{isPage:false,isComponent:false,currentFile:'utils/config.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/data.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports={appId:"wx0d619ddf7b26e48d",key:"!Y@*&1298jsKJl.>/"};
},{isPage:false,isComponent:false,currentFile:'utils/data.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/eventtracer.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../@babel/runtime/helpers/interopRequireDefault"),e=require("../@babel/runtime/helpers/objectSpread2"),n=t(require("./util.js")),i=t(require("./common.js")),o=require("./request.user.js"),s=t(require("./config.js")),r={pagename:"",orgpagename:"",resourceid:"",platcode:"",productcode:"",category:"",action:"",label:"",value:"",serialid:"",prepayid:"",unionid:"",memberid:""},a={openid:"",userid:"",platcode:"10139",country:"",province:"",city:"",county:"",sessionid:"",pagecount:"",sessioncount:"",appId:s.default.appId||"",appVersion:s.default.appVersion||"",unionid:""},c={appid:s.default.appId||"",appv:s.default.appVersion||"",plc:"10139"};var p=wx.getStorageSync("_tc_wx_session_id")||0;function u(){if(p){if(+new Date-p>18e5){var t=+new Date;p=t,wx.setStorageSync("_tc_wx_session_id",t),g=0,l(),m()}else l()}else{var e=+new Date;p=e,wx.setStorageSync("_tc_wx_session_id",e),l(),m()}}function d(){return p=p||wx.getStorageSync("_tc_wx_session_id")}var g=0;function l(){g?++g:g=1}function f(){return g}var w=0;function m(){var t=w||wx.getStorageSync("_tc_page_uv");t?(w=++t,wx.setStorageSync("_tc_page_uv",w)):(w=1,wx.setStorageSync("_tc_page_uv",1))}function h(){return w=w||wx.getStorageSync("_tc_page_uv")}function y(t){var e=i.default.getOpenId();e&&""!=e?(a.openid=e,t&&t()):(0,o.wxLogin)().then((function(e){a.openid=e.openId,a.unionid=e.unionId,t&&t()}))}function v(t){if(!(this instanceof v))return new v(t);this.init(t)}function _(t){if(!(this instanceof _))return new _(t);this.init(t)}function S(t){var e;e=t.settings.pagename,"[object Object]"==={}.toString.call(e)&&(t.settings.pagename=t.settings.pagename.__route__)}var x=null;function b(t){if(x)t&&t(x);else try{x=wx.getStorageSync("_tc_wx_system_info")||null,t&&t(x)}catch(e){wx.getSystemInfo({success:function(e){x=e,wx.setStorageSync("_tc_wx_system_info",e),t&&t(e)}})}}function T(){if(!(this instanceof T))return new T;this.init()}T.prototype={constructor:T,init:function(){this.startTime=0,this.endTime=0,this.costTime=0},start:function(){this.startTime=+new Date},end:function(){this.endTime=+new Date},cost:function(){return this.end(),this.costTime=this.endTime-this.startTime,this.costTime}};var I=[],D="";function E(){if(I.length>0){var t=I.splice(0,I.length);if("devtools"===c.platform&&(t=t.filter((function(t){return"小程序报错"!==t.lb}))),0===t.length)return;var i;i=e(e({},c),{},{_list:t}),n.default.requestData({url:"https://wx.17u.cn/wireless/monitor/wx/common/compressevent",method:"POST",showLoading:!1,showToast:!1,data:encodeURIComponent(JSON.stringify(i))})}}function q(t){var e;c.brand||(c.brand=t.brand,c.model=t.model,c.pixelRatio=t.pixelRatio,c.screenWidth=t.screenWidth,c.screenHeight=t.screenHeight,c.windowWidth=t.windowWidth,c.windowHeight=t.windowHeight,c.language=t.language,c.version=t.version,c.system=t.system,c.platform=t.platform,c.fontSizeSetting=t.fontSizeSetting,c.SDKVersion=t.SDKVersion),c.plc||(c.plc=a.platcode),c.oid||(c.oid=a.openid||""),c.uid||(c.uid=""),c.unionid||(c.unionid=i.default.getUnionId()),e=getApp().globalData.locationCityInfo,a.city=e.name,c.ctry||(c.ctry=a.country,c.pv=a.province,c.ct=a.city,c.cty=a.county)}_.prototype={constructor:_,init:function(t){this.settings=n.default.extend({},r,t),S(this)},submit:function(){var t=this;(function(t){if(t.settings.debug){if(!a.appId)throw new Error("appId不能为空！");if(!t.settings.pagename)throw new Error("pagename不能为空！");if(!a.platcode)throw new Error("platcode不能为空！");if(!t.settings.productcode)throw new Error("productcod不能为空！");if(!t.settings.category)throw new Error("category不能为空！");if(!t.settings.action)throw new Error("action不能为空！");if(!t.settings.label)throw new Error("label不能为空！");if(!t.settings.value)throw new Error("value不能为空！");return!0}return!!(t.settings.pagename&&a.platcode&&t.settings.productcode&&t.settings.category&&t.settings.action&&t.settings.label&&t.settings.value&&a.appId&&a.appVersion)})(t)&&y((function(){if(!a.openid)throw new Error("openid不能为空！");b((function(i){var o={};if(o.sid=d(),o.pc=f(),o.sc=h(),o.pn=t.settings.pagename,o.pdc=t.settings.productcode,o.ctg=t.settings.category,o.ac=t.settings.action,o.lb=t.settings.label,o.vl=t.settings.value,o.wxappScene=getApp().globalData.defaultSceneId,o.timestamp=(new Date).getTime(),q(i),t.settings.immediately){var s=e(e({},o),c);s.timestamp=(new Date).getTime(),n.default.requestData({url:"https://wx.17u.cn/wireless/monitor/wx/common/event",method:"POST",showLoading:!1,showToast:!1,data:encodeURIComponent(JSON.stringify(s))})}else I.push(o),clearTimeout(D),I.length>5?E():(clearTimeout(D),D=setTimeout((function(){E()}),5e3))}))}))}},v.prototype={constructor:v,init:function(t){this.settings=n.default.extend({},r,t),u(),S(this)},submit:function(){var t=this;(function(t){if(t.settings.debug){if(!a.appId)throw new Error("appId不能为空！");if(!t.settings.pagename)throw new Error("pagename不能为空！");if(!a.platcode)throw new Error("platcode不能为空！");if(!t.settings.productcode)throw new Error("productcode不能为空！");if(!d())throw new Error("sessionId不能为空！");if(!f())throw new Error("pv不能为空！");if(!h())throw new Error("uv不能为空！");return!0}return!!(t.settings.pagename&&a.platcode&&t.settings.productcode&&d()&&f()&&h()&&a.appId&&a.appVersion)})(t)&&y((function(){b((function(i){var o={};o.pn=t.settings.pagename,o.sid=d(),o.pc=f(),o.sc=h(),t.settings.stayTime&&(o.stayTime=t.settings.stayTime),o.pdc=t.settings.productcode,o.opn=t.settings.orgpagename,o.rsid=t.settings.resourceid,o.serialid=t.settings.serialid,o.prepayid=t.settings.prepayid,o.wxappScene=getApp().globalData.defaultSceneId,o.timestamp=(new Date).getTime(),q(i);var s=e(e({},o),c);n.default.requestData({url:"https://wx.17u.cn/wireless/monitor/wx/common/pageview",method:"POST",showLoading:!1,showToast:!1,data:encodeURIComponent(JSON.stringify(s)),complete:function(){delete t.settings.stayTime}})}))}))},pageStay:function(){}},module.exports={page:v,event:_,stay:T,postEV:E};
},{isPage:false,isComponent:false,currentFile:'utils/eventtracer.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/globalWebRefreshManger.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("../@babel/runtime/helpers/Arrayincludes");var e=require("../@babel/runtime/helpers/classCallCheck"),t=require("../@babel/runtime/helpers/createClass"),i=function(){function i(){e(this,i),this.NeedReloadWebviewPages=["orderDetail"],this.canReloadWebview=!1,this.reloadWebview=!1}return t(i,[{key:"matchUrl",value:function(e){return this.canReloadWebview=this.NeedReloadWebviewPages.some((function(t){return e.includes(t)})),this.canReloadWebview}},{key:"setReloadStatus",value:function(e){this.reloadWebview=e}},{key:"canRefreshWebview",value:function(){return this.canReloadWebview&&this.reloadWebview}},{key:"initReloadState",value:function(){this.setReloadStatus(!1),this.canReloadWebview=!1}}],[{key:"getInstance",value:function(){return!1==this.instance instanceof this&&(this.instance=new this),this.instance}}]),i}();exports.default=i,i.instance=void 0;
},{isPage:false,isComponent:false,currentFile:'utils/globalWebRefreshManger.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/locationUtils.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault"),r=require("../@babel/runtime/helpers/objectSpread2"),t=e(require("./tracer")),o=require("./common"),n=require("../util/tcUtil"),c=(0,o.getSystemInfo)().SDKVersion,u=(0,n.compareVersion)(c,"2.8.0")>-1,i={latitude:"",longitude:"",timestame:null},a=0,l=[],f=0;function s(){a&&Promise.all([wx.offLocationChange(),wx.stopLocationUpdate()]).then((function(){a=0})).catch((function(e){console.error(e)}))}module.exports={startLocation:function(){return new Promise((function(e,r){var o=setTimeout((function(){clearTimeout(o),i.latitude?l.forEach((function(e){return e.resolve(i)})):l.forEach((function(e){return e.reject({err:"定位超过30秒未成功"})}))}),3e4);if(u){if(l.push({resolve:e,reject:r}),a&&i.latitude)return clearTimeout(o),l.forEach((function(e){return e.resolve(i)})),void(l=[]);a||(s(),wx.startLocationUpdate().then((function(){return wx.onLocationChange((function(e){clearTimeout(o),i=e,l.forEach((function(e){return e.resolve(i)})),l=[]}))})).catch((function(e){clearTimeout(o),s(),l.forEach((function(r){return r.reject(e)})),l=[],console.error(e)})),a=1)}else!function(e){var r=e.resolve,o=e.reject,n=e.timeoutId;l.push({resolve:r,reject:o});var c=Date.now();c-f>3e4?(f=c,wx.getLocation({type:"gcj02",success:function(e){clearTimeout(n),t.default.newEv({label:"rb_location_success",value:e}),i=e,l.forEach((function(e){return e.resolve(i)})),l=[]},fail:function(e){clearTimeout(n),i.latitude?l.forEach((function(e){return e.resolve(i)})):l.forEach((function(r){return r.reject(e)})),l=[],console.error(new Error(e.errMsg))}})):(l.forEach((function(e){return e.resolve(i)})),l=[])}({resolve:e,reject:r,timeoutId:o})}))},offLocationChange:s,getCurLocation:function(){return r(r({},i),{},{active:a})},isInit:function(){return a}};
},{isPage:false,isComponent:false,currentFile:'utils/locationUtils.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/lodash.throttle.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../@babel/runtime/helpers/typeof"),n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,e=/^0o[0-7]+$/i,o=parseInt,u=Object.prototype.toString,a=Math.max,f=Math.min,c=function(){return Date.now()};function l(t,n,i){var r,e,o,u,l,s,d=0,m=!1,g=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(n){var i=r,o=e;return r=e=void 0,d=n,u=t.apply(o,i)}function h(t){return d=t,l=setTimeout(T,n),m?b(t):u}function x(t){var i=t-s;return void 0===s||i>=n||i<0||g&&t-d>=o}function T(){var t=c();if(x(t))return w(t);l=setTimeout(T,function(t){var i=n-(t-s);return g?f(i,o-(t-d)):i}(t))}function w(t){return l=void 0,y&&r?b(t):(r=e=void 0,u)}function j(){var t=c(),i=x(t);if(r=arguments,e=this,s=t,i){if(void 0===l)return h(s);if(g)return l=setTimeout(T,n),b(s)}return void 0===l&&(l=setTimeout(T,n)),u}return n=p(n)||0,v(i)&&(m=!!i.leading,o=(g="maxWait"in i)?a(p(i.maxWait)||0,n):o,y="trailing"in i?!!i.trailing:y),j.cancel=function(){void 0!==l&&clearTimeout(l),d=0,r=s=e=l=void 0},j.flush=function(){return void 0===l?u:w(c())},j}function v(n){var i=t(n);return!!n&&("object"==i||"function"==i)}function s(n){return"symbol"==t(n)||function(n){return!!n&&"object"==t(n)}(n)&&"[object Symbol]"==u.call(n)}function p(t){if("number"==typeof t)return t;if(s(t))return NaN;if(v(t)){var u="function"==typeof t.valueOf?t.valueOf():t;t=v(u)?u+"":u}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var a=r.test(t);return a||e.test(t)?o(t.slice(2),a?2:8):i.test(t)?NaN:+t}module.exports={throttle:function(t,n,i){var r=!0,e=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return v(i)&&(r="leading"in i?!!i.leading:r,e="trailing"in i?!!i.trailing:e),l(t,n,{leading:r,maxWait:n,trailing:e})},debounce:l};
},{isPage:false,isComponent:false,currentFile:'utils/lodash.throttle.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/md5.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";function r(r,n){var t=(65535&r)+(65535&n);return(r>>16)+(n>>16)+(t>>16)<<16|65535&t}function n(n,t,e,u,o,c){return r((f=r(r(t,n),r(u,c)))<<(a=o)|f>>>32-a,e);var f,a}function t(r,t,e,u,o,c,f){return n(t&e|~t&u,r,t,o,c,f)}function e(r,t,e,u,o,c,f){return n(t&u|e&~u,r,t,o,c,f)}function u(r,t,e,u,o,c,f){return n(t^e^u,r,t,o,c,f)}function o(r,t,e,u,o,c,f){return n(e^(t|~u),r,t,o,c,f)}function c(n){for(var c=1732584193,f=-271733879,a=-1732584194,i=271733878,h=0;h<n.length;h+=16){var l=c,v=f,g=a,d=i;c=t(c,f,a,i,n[h+0],7,-680876936),i=t(i,c,f,a,n[h+1],12,-389564586),a=t(a,i,c,f,n[h+2],17,606105819),f=t(f,a,i,c,n[h+3],22,-1044525330),c=t(c,f,a,i,n[h+4],7,-176418897),i=t(i,c,f,a,n[h+5],12,1200080426),a=t(a,i,c,f,n[h+6],17,-1473231341),f=t(f,a,i,c,n[h+7],22,-45705983),c=t(c,f,a,i,n[h+8],7,1770035416),i=t(i,c,f,a,n[h+9],12,-1958414417),a=t(a,i,c,f,n[h+10],17,-42063),f=t(f,a,i,c,n[h+11],22,-1990404162),c=t(c,f,a,i,n[h+12],7,1804603682),i=t(i,c,f,a,n[h+13],12,-40341101),a=t(a,i,c,f,n[h+14],17,-1502002290),c=e(c,f=t(f,a,i,c,n[h+15],22,1236535329),a,i,n[h+1],5,-165796510),i=e(i,c,f,a,n[h+6],9,-1069501632),a=e(a,i,c,f,n[h+11],14,643717713),f=e(f,a,i,c,n[h+0],20,-373897302),c=e(c,f,a,i,n[h+5],5,-701558691),i=e(i,c,f,a,n[h+10],9,38016083),a=e(a,i,c,f,n[h+15],14,-660478335),f=e(f,a,i,c,n[h+4],20,-405537848),c=e(c,f,a,i,n[h+9],5,568446438),i=e(i,c,f,a,n[h+14],9,-1019803690),a=e(a,i,c,f,n[h+3],14,-187363961),f=e(f,a,i,c,n[h+8],20,1163531501),c=e(c,f,a,i,n[h+13],5,-1444681467),i=e(i,c,f,a,n[h+2],9,-51403784),a=e(a,i,c,f,n[h+7],14,1735328473),c=u(c,f=e(f,a,i,c,n[h+12],20,-1926607734),a,i,n[h+5],4,-378558),i=u(i,c,f,a,n[h+8],11,-2022574463),a=u(a,i,c,f,n[h+11],16,1839030562),f=u(f,a,i,c,n[h+14],23,-35309556),c=u(c,f,a,i,n[h+1],4,-1530992060),i=u(i,c,f,a,n[h+4],11,1272893353),a=u(a,i,c,f,n[h+7],16,-155497632),f=u(f,a,i,c,n[h+10],23,-1094730640),c=u(c,f,a,i,n[h+13],4,681279174),i=u(i,c,f,a,n[h+0],11,-358537222),a=u(a,i,c,f,n[h+3],16,-722521979),f=u(f,a,i,c,n[h+6],23,76029189),c=u(c,f,a,i,n[h+9],4,-640364487),i=u(i,c,f,a,n[h+12],11,-421815835),a=u(a,i,c,f,n[h+15],16,530742520),c=o(c,f=u(f,a,i,c,n[h+2],23,-995338651),a,i,n[h+0],6,-198630844),i=o(i,c,f,a,n[h+7],10,1126891415),a=o(a,i,c,f,n[h+14],15,-1416354905),f=o(f,a,i,c,n[h+5],21,-57434055),c=o(c,f,a,i,n[h+12],6,1700485571),i=o(i,c,f,a,n[h+3],10,-1894986606),a=o(a,i,c,f,n[h+10],15,-1051523),f=o(f,a,i,c,n[h+1],21,-2054922799),c=o(c,f,a,i,n[h+8],6,1873313359),i=o(i,c,f,a,n[h+15],10,-30611744),a=o(a,i,c,f,n[h+6],15,-1560198380),f=o(f,a,i,c,n[h+13],21,1309151649),c=o(c,f,a,i,n[h+4],6,-145523070),i=o(i,c,f,a,n[h+11],10,-1120210379),a=o(a,i,c,f,n[h+2],15,718787259),f=o(f,a,i,c,n[h+9],21,-343485551),c=r(c,l),f=r(f,v),a=r(a,g),i=r(i,d)}return[c,f,a,i]}function f(r){for(var n="",t=0;t<4*r.length;t++)n+="0123456789abcdef".charAt(r[t>>2]>>t%4*8+4&15)+"0123456789abcdef".charAt(r[t>>2]>>t%4*8&15);return n}function a(r){for(var n=1+(r.length+8>>6),t=new Array(16*n),e=0;e<16*n;e++)t[e]=0;for(e=0;e<r.length;e++)t[e>>2]|=(255&r.charCodeAt(e))<<e%4*8;return t[e>>2]|=128<<e%4*8,t[16*n-2]=8*r.length,t}module.exports={hexMD5:function(r){return f(c(a(r)))}};
},{isPage:false,isComponent:false,currentFile:'utils/md5.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/pageTracer.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var n=require("eventtracer.js"),e=0,t=[],o="",p=function(p){if(t.length){var a=t.splice(0,t.length),i=p-e;a.forEach((function(e,t){!e.stayTime&&e.pagename.indexOf(o)>=0&&(e.stayTime=i),n.page(e).submit()}))}};wx.onAppRoute&&wx.onAppRoute((function(n){var t=Date.now();p(t),o=n.path,e=t})),wx.onAppHide&&wx.onAppHide((function(n){var e=Date.now();p(e)})),wx.onAppShow&&wx.onAppShow((function(n){o=n.path,e=Date.now()})),module.exports=function(n){t.push(n)};
},{isPage:false,isComponent:false,currentFile:'utils/pageTracer.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/regenerator-runtime.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../@babel/runtime/helpers/typeof"),r="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(r){return t(r)}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":t(r)};!function(t){var e,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",h="object"===("undefined"==typeof module?"undefined":r(module)),f=t.regeneratorRuntime;if(f)h&&(module.exports=f);else{(f=t.regeneratorRuntime=h?module.exports:{}).wrap=L;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",d={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(P([])));g&&g!==n&&o.call(g,a)&&(v=g);var w=_.prototype=x.prototype=Object.create(v);E.prototype=w.constructor=_,_.constructor=E,_[u]=E.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===E||"GeneratorFunction"===(r.displayName||r.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},f.awrap=function(t){return{__await:t}},j(O.prototype),O.prototype[c]=function(){return this},f.AsyncIterator=O,f.async=function(t,r,e,n){var o=new O(L(t,r,e,n));return f.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},j(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},f.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(G),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;0<=i;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),h=o.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}}}function L(t,r,e,n){var o,i,a,c,u=r&&r.prototype instanceof x?r:x,h=Object.create(u.prototype),f=new N(n||[]);return h._invoke=(o=t,i=e,a=f,c=l,function(t,r){if(c===p)throw new Error("Generator is already running");if(c===y){if("throw"===t)throw r;return F()}for(a.method=t,a.arg=r;;){var e=a.delegate;if(e){var n=S(e,a);if(n){if(n===d)continue;return n}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===l)throw c=y,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=p;var u=b(o,i,a);if("normal"===u.type){if(c=a.done?y:s,u.arg===d)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(c=y,a.method="throw",a.arg=u.arg)}}),h}function b(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function x(){}function E(){}function _(){}function j(t){["next","throw","return"].forEach((function(r){t[r]=function(t){return this._invoke(r,t)}}))}function O(t){var e;this._invoke=function(n,i){function a(){return new Promise((function(e,a){!function e(n,i,a,c){var u=b(t[n],t,i);if("throw"!==u.type){var h=u.arg,f=h.value;return f&&"object"===(void 0===f?"undefined":r(f))&&o.call(f,"__await")?Promise.resolve(f.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):Promise.resolve(f).then((function(t){h.value=t,a(h)}),c)}c(u.arg)}(n,i,e,a)}))}return e=e?e.then(a,a):a()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=b(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:F}}function F(){return{value:e,done:!0}}}(function(){return this}()||Function("return this")());
},{isPage:false,isComponent:false,currentFile:'utils/regenerator-runtime.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/request.user.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault"),n=e(require("./api")),o=e(require("./data")),t=require("./util"),i=require("./common"),a=getApp(),s=null;module.exports={getOpenId:i.getOpenId,getUnionId:i.getUnionId,wxLogin:function(e){return s||(s=new Promise((function(r,u){wx.login({success:function(c){(0,t.requestData)({url:n.default.getWxUserInfo,data:{code:c.code,appId:o.default.appId},method:"post",showLoading:e||!1,success:function(e){var n=(0,i.get)(e,"response.body",{});if("0000"===(0,i.get)(e,"response.header",{}).rspCode){var o=n.openid,t=n.token,c=n.unionid,g=Date.now();a&&(a.globalData.openId=o,a.globalData.unionId=c,a.globalData.sessionKey=t,a.globalData.sessionTime=g),r({openId:o,sessionKey:t,unionId:c});try{wx.setStorageSync("tongcheng.openid",o),wx.setStorageSync("tongcheng.unionid",c),wx.setStorageSync("tongcheng.sectoken",t),wx.setStorageSync("tongcheng.sectokenTime",g)}catch(e){}}else u(e);s=null},fail:function(e){u(e),s=null}})},fail:function(){}})})))},getSecToken:i.getSecToken,setSecToken:i.setSecToken};
},{isPage:false,isComponent:false,currentFile:'utils/request.user.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/router.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/typeof"),r=require("../@babel/runtime/helpers/slicedToArray"),n="/pages/",t={home:n+"home/home",index:n+"index/index",webView:n+"webView/webView",h5part:n+"webView/webView"};function a(e){var n=e.split("?")[1];return n?n.split("&").reduce((function(e,n){var t=n.split("="),a=r(t,2),i=a[0],o=a[1];return e.hasOwnProperty(i)?e[i]=[e[i]].concat(o):e[i]=o,e}),{}):null}function i(r){if("object"===e(r)&&null!==r){var n=[];for(var t in r)void 0!==r[t]&&n.push(t+"="+r[t]);return n.join("&")}return"string"==typeof r?r:""}function o(e,r){if("h5part"===e){var n=getApp().globalData,o=n.channelCode,u=void 0===o?"":o,c=n.cityObj,l=r.route,p={};delete r.route,l.indexOf("?")>-1?(p=a(l),l=l.split("?")[0]+"?"):l+="?";var s=l+i(Object.assign({appId:"wx624dc2cce62f7008",unionId:wx.getStorageSync("tongcheng.unionid")||n.unionId,cityCode:c&&c.cityCode||"",supplier:c&&c.supplier||"",channelCode:u,r:parseInt(1e3*Math.random())},r,p));console.log(s);var d="src="+encodeURIComponent(s);return t[e]+(d?"?"+d:"")}var f=/^(http|\/?(page|realtimeBus))/.test(e)?e:t[e],g=i(r);return f+(g?"?"+g:"")}var u={push:function(e,r){var n=o(e,r);wx.navigateTo({url:n})},replace:function(e,r){var n=o(e,r);wx.redirectTo({url:n})},reLaunch:function(e,r){var n=o(e,r);wx.reLaunch({url:n})},back:function(e,r){var n=getCurrentPages();if(""===e)wx.navigateBack();else if("string"==typeof e){var a=n.findIndex((function(r){return"/"+r.route===t[e]}));if(a>=0)e=n.length-a-1||1,wx.navigateBack({delta:e});else{var i=o(e,r);wx.redirectTo({url:i})}}else wx.navigateBack({delta:e||1})},jumpOutToTCLY:function(e){wx.navigateToMiniProgram({appId:"wx336dcaf6a1ecf632",path:e||"/page/home/index/index"})},queryStringify:i,parseUrl:a,assemblyPath:o,assemblyPagename:function(e,r){return o(e,r).replace(/^\//,"")}};module.exports=u;
},{isPage:false,isComponent:false,currentFile:'utils/router.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/tracer.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("eventtracer.js"),a=e.stay(),i=require("pageTracer.js");var n="",d={page:function(a){var d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2036,t=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,g=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,r=arguments.length>6?arguments[6]:void 0,p=arguments.length>7?arguments[7]:void 0,v=arguments.length>8?arguments[8]:void 0,c=arguments.length>9?arguments[9]:void 0,f=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",u=arguments.length>11&&void 0!==arguments[11]?arguments[11]:"",m=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",s=arguments.length>13&&void 0!==arguments[13]&&arguments[13];if(null==(n=n||getApp()).globalData.wxrefid){if(a.indexOf("wxrefid=")>0){var h=new RegExp("(^|&)wxrefid=([^&]*)(&|$)","i"),b=a.split("?")[1].match(h)[2];b&&"undefined"!=b&&(n.globalData.wxrefid=b)}}else if(a.indexOf("wxrefid=")<0){var x=a.indexOf("?")<0?"?wxrefid=":"&wxrefid=";a=a+x+n.globalData.wxrefid}else{var w=new RegExp("(^|&)wxrefid=([^&]*)(&|$)","i"),y=a.split("?")[1].match(w)[2];y&&"undefined"==y&&(a=a.replace(y,n.globalData.wxrefid))}p=p||n.globalData.innerRefid,n.globalData.innerRefid=p,s?e.page({pagename:a,orgpagename:t||"",productcode:d,resourceid:o||0,serialid:g||"",prepayid:l||"",unionid:r||"",innerRefid:p||"",expandfield:v||"",adaid:c||"",rpagename:f,pagestate:u,pagedetail:m,immediately:s}).submit():(wx.onAppRoute&&i({pagename:a,orgpagename:t||"",productcode:d,resourceid:o||0,serialid:g||"",prepayid:l||"",unionid:r||"",innerRefid:p||"",expandfield:v||"",adaid:c||"",rpagename:f,pagestate:u,pagedetail:m,immediately:s}),wx.onAppRoute||e.page({pagename:a,orgpagename:t||"",productcode:d,resourceid:o||0,serialid:g||"",prepayid:l||"",unionid:r||"",innerRefid:p||"",expandfield:v||"",adaid:c||"",rpagename:f,pagestate:u,pagedetail:m,immediately:s}).submit())},ev:function(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2076,d=arguments.length>2?arguments[2]:void 0,t=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,g=arguments.length>5?arguments[5]:void 0,l=arguments.length>6?arguments[6]:void 0,r=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",p=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",v=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",c=arguments.length>10?arguments[10]:void 0,f=arguments.length>11?arguments[11]:void 0,u=arguments.length>12?arguments[12]:void 0,m=arguments.length>13&&void 0!==arguments[13]&&arguments[13];n=n||getApp(),c=c||n.globalData.innerRefid,n.globalData.innerRefid=c,e.event({pagename:a,productcode:i,category:o||"category",action:g||"click",label:d,value:t||n.globalData.cityObj.cityCode||d,expandfield:l,rpagename:r,pagestate:p,pagedetail:v,innerRefid:c||"",eventid:f,orgpagename:u,immediately:m}).submit()},newEv:function(e){var a,i,n,t,o,g=e.pagename,l=void 0===g?(a=getCurrentPages(),i=a[a.length-1].route,n=getApp().globalData,t=n.cityObj,o=i&&i.options||{},"".concat(i,"?channelCode=").concat(n.channelCode,"&cityCode=").concat(o.cityCode||t.cityCode||"")):g,r=e.productCode,p=e.label,v=e.value,c=e.category,f=e.action,u=e.expandfield,m=e.rpagename,s=e.pagestate,h=e.pagedetail,b=e.innerRefid,x=e.eventid,w=e.orgpagename,y=e.immediately;d.ev(l,r,p,v,c,f,u,m,s,h,b,x,w,y)},newPage:function(e){var a=e.pagename,i=e.productCode,n=e.orgpagename,t=e.resourceid,o=e.serialid,g=e.prepayid,l=e.unionid,r=e.innerRefid,p=e.expandfield,v=e.adaid,c=e.rpagename,f=e.pagestate,u=e.pagedetail,m=e.immediately;d.page(a,i,n,t,o,g,l,r,p,v,c,f,u,m)},showStart:function(){setTimeout((function(){var e=getApp();e.globalData.onShow?e.globalData.onShow=0:a.start()}),100)},hideEnd:function(i,n,d,t,o,g,l,r,p,v){var c=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",f=arguments.length>11&&void 0!==arguments[11]?arguments[11]:"",u=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"";setTimeout((function(){var v=getApp();if(v.globalData.onHide)v.globalData.onHide=0;else{var m=a.cost(),s=getApp();r=r||s.globalData.innerRefid,s.globalData.innerRefid=r,e.page({pagename:i,orgpagename:d||"",productcode:n,resourceid:t||0,serialid:o||"",prepayid:g||"",unionid:l||"",stayTime:m,innerRefid:r||"",expandfield:p||"",adaid:adaid1,rpagename:c,pagestate:f,pagedetail:u}).submit()}}),100)},eventNew:function(a){(n=n||getApp()).globalData.innerRefid=a.innerRefid=a.innerRefid||n.globalData.innerRefid,e.event(a).submit()}};module.exports={newEv:d.newEv,newPage:d.newPage,postEV:e.postEV};
},{isPage:false,isComponent:false,currentFile:'utils/tracer.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/userInfo.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,n=require("../@babel/runtime/helpers/interopRequireDefault"),t=require("../@babel/runtime/helpers/objectSpread2"),o=require("request.user"),i=n(require("../util/date")),a=n(require("../util/tcUtil")),r=n(require("./util")),u=require("./data"),c=!1;function g(){return e||(e=new Promise((function(n){console.debug("发起wxLogin 请求"),(0,o.wxLogin)().then((function(e){e.unionid||(e.unionid=e.unionId),n(e)})).catch((function(t){e=null,n({})}))}))),e}var s="",l="",f=0;function d(){return s||(s=new Promise((function(e,n){var o=((getApp()||{}).globalData||{}).PrivacyInfo;if(!o)try{o=(o=((getApp()||{}).globalData||{}).PrivacyInfo=wx.getStorageSync("PrivacyInfo")||"")||{}}catch(e){o={}}o.date==(new i.default).format()&&(o.agree||Date.now()-f<3e3)?setTimeout((function(){e&&e({agree:!!o.agree,version:o.version}),s=""}),0):g().then((function(n){var o={unionId:n.unionId||n.unionid,openId:n.openId,appId:u.appId,version:"1.0.1"};c&&(o.newUser=1,c=0),r.default.requestData({url:"https://wx.17u.cn/platformpubapi/agentPrivacy/getAgentPrivacy",data:o,method:"post",showLoading:!1,header:{"Content-Type":"application/json",sectoken:getApp().globalData.TCsectoken},success:function(n){f=Date.now(),console.log(n,"----------------------");var o=a.default.get(n,"content.agree",3),r={agree:o,version:a.default.get(n,"content.version",""),date:(new i.default).format()};o<3&&(getApp().globalData.PrivacyInfo=r),o<2&&wx.setStorage({key:"PrivacyInfo",data:r}),n.isSucceed?(0==o?e&&e(t(t({},r),{},{agree:!1})):e&&e(t(t({},r),{},{agree:!0})),l=t(t({},r),{},{agree:0==o})):l?e&&e(t({},l)):e&&e({agree:!0}),s=""},fail:function(n){f=Date.now(),e&&e({agree:!0}),s=""}})})).catch((function(){setTimeout((function(){e&&e({agree:!0}),s=""}),0)}))}))),s}var p="";module.exports={getUnionid:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("function"==typeof e){var i=(0,o.getUnionId)(),a=(0,o.getOpenId)(),r=(t=t||{}).isNeedToken?(0,o.getSecToken)():"";if(!i||t.isNeedToken&&!r)g().then((function(n){e(n.unionId,n.openId,"",n.sessionKey)}));else{var u=getApp();e(i,a,"",u.globalData.sessionKey)}}},getUnionidPromise:g,getSecToken:o.getSecToken,clearToken:function(){e=null,(0,o.setSecToken)("")},getAbTesting:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if("function"==typeof n){var t=e.reduce((function(e,n){return e[n]="A",e}),{});n(t)}},getPrivacyAuthorization:d,showPrivacyAuthorization:function(){return p||(p=new Promise((function(e,n){d().then((function(n){if(console.log(n),n.agree)e&&e(n),p="";else{var t=getCurrentPages(),o=t[t.length-1].selectComponent("#__PrivacyAuthorization");o?(o.data.version=n.version,o.cb=function(n){e&&e(n),p=""},o.showDialog()):(e&&e({agree:!1}),p="")}}))}))),p}};
},{isPage:false,isComponent:false,currentFile:'utils/userInfo.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/util.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/typeof"),t=require("data.js"),n=require("common.js"),r=require("md5.js"),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",n=new Date(e),r=n.getFullYear(),a=n.getMonth()+1,i=n.getDate(),s=n.getHours(),u=n.getMinutes(),c=n.getSeconds();return[r,a,i].map(o).join(t)+" "+[s,u,c].map(o).join(":")},o=function(e){return(e=e.toString())[1]?e:"0"+e};function i(e){return new Date(Date.parse(e.replace(/-/g,"/")))}function s(e){return Object.prototype.toString.call(e)}function u(e){return function(e){return"[object Object]"==s(e)}(e)&&Object.getPrototypeOf(e)==Object.prototype}function c(e){return"[object Array]"==s(e)}function l(e){var t,n=[].slice.call(arguments,1);return"boolean"==typeof e&&(t=e,e=n.shift()),n.forEach((function(n){g(e,n,t)})),e}function g(e,t,n){for(var r in t)n&&(u(t[r])||c(t[r]))?(u(t[r])&&!u(e[r])&&(e[r]={}),c(t[r])&&!c(e[r])&&(e[r]=[]),l(e[r],t[r],n)):void 0!==t[r]&&(e[r]=t[r])}var f=function e(t){var n=Math.random().toString(36).substr(2);return n.length>=t?n.substr(0,t):n+=e(t-n.length)},p=function(e){var t=(e+"").split("."),n=0;return void 0!==t[1]&&t[1].length>0&&(n=t[1].length),n},h=!1,d={requestData:function(a,o){var i=a.data,s="",u=void 0===a.showLoading||a.showLoading,c=void 0===a.showToast||a.showToast;if(u&&!h&&(wx.showLoading({title:a.message||"加载中..."}),h=!0),i&&"object"==e(i)){var l=getApp()||o;l||console.log("缺少全局上下文");var g=l.globalData,f=g.cityObj,p=g.channelCode;i=Object.assign({},{appId:t.appId,cityCode:f.cityCode,supplier:f.supplier||f.supplierQr,channelCode:p},i);var d=[];for(var m in i)i.hasOwnProperty(m)&&d.push(i[m]);d.sort().forEach((function(e,t){s+=0==t?e:"&"+e})),s+="&"+t.key,i.sign=r.hexMD5(s)}return wx.request({url:a.url,data:i,header:a.header||{"Content-Type":"application/json; charset=utf-8"},method:a.method||"GET",success:function(e){u&&h&&(wx.hideLoading(),h=!1),200==e.statusCode?a&&a.success&&a.success(e.data):a&&a.fail?a.fail(e):c&&n.showToast("啊哦~网络生病了~")},fail:function(e){console.log(e),u&&h&&(wx.hideLoading(),h=!1),a&&a.fail?a.fail(e):c&&n.showToast("啊哦~网络生病了~")},complete:function(){a&&a.complete&&a.complete()}})}},m=function(e){var t=e?new Date(e):new Date;return{year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate(),hour:t.getHours(),minute:t.getMinutes(),second:t.getSeconds()}};module.exports={formatHeadlineTimes:function(e){var t=(new Date).getTime()-e;return t>=864e5?a(e,"-"):t>=36e5&&t<864e5?parseInt(t/36e5)+"小时前":t<36e5&&t>=6e4?parseInt(t/6e4)+"分钟前":t<6e4?"刚刚":void 0},extend:l,format:function(e,t){"string"==typeof e&&(e=i(e));var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),/(w+)/.test(t)&&(t=t.replace(RegExp.$1,[["日","一","二","三","四","五","六"],["周日","周一","周二","周三","周四","周五","周六"],["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]][RegExp.$1.length-1][e.getDay()])),n)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return t},parseDate:i,parseDate2:function(e){return i(e.slice(0,4)+"-"+e.slice(4,6)+"-"+e.slice(6))},formatTime:a,deepClone:function t(n){var r=Array.isArray(n)?[]:{};if(n&&"object"===e(n))for(var a in n)n.hasOwnProperty(a)&&(r[a]=n&&"object"===e(n[a])?t(n[a]):n[a]);return r},requestData:d.requestData,UUID:function(){return Date.parse(new Date)*Math.floor(100*Math.random())},isIphoneX:function(){try{var e=n.getSystemInfo();return e.model.indexOf("iPhone X")>-1||e.model.indexOf("iPhone11")>-1||e.model.indexOf("iPhone 11")>-1||e.model.indexOf("iPhone12")>-1||e.model.indexOf("iPhone 12")>-1||e.model.indexOf("iPhone13")>-1||e.model.indexOf("iPhone 13")>-1}catch(e){console.log("获取SystemInfo兼容iPhone X错误",e)}return!1},isIOS:function(){var e=n.getSystemInfo().platform;return/ios/i.test(e)},isLongScreen:function(){try{var e=n.getSystemInfo();return!(e.screenHeight/e.screenWidth<=1.8)}catch(e){return!1}},copyObject:function t(n){var r={};for(var a in n)"object"===e(n[a])&&null!==n[a]?r[a]=t(n[a]):r[a]=n[a];return r},getRandStr32:function(){var e=n.getUnionId();return(e&&""!=e?e.substr(0,12):f(12))+f(10)+(new Date).getTime().toString().substr(-10)},analysisDate:m,getRandom:function(e,t){return e+Math.random()*(t-e)},analysisCountdown:function(e){return{days:Math.floor(e/86400),hours:Math.floor(e%86400/3600),mins:Math.floor(e%3600/60),secs:Math.floor(e%60)}},add:function(e,t){var n,r,a,o;try{n=e.toString().split(".")[1].length}catch(e){n=0}try{r=t.toString().split(".")[1].length}catch(e){r=0}if(o=Math.abs(n-r),a=Math.pow(10,Math.max(n,r)),o>0){var i=Math.pow(10,o);n>r?(e=Number(e.toString().replace(".","")),t=Number(t.toString().replace(".",""))*i):(e=Number(e.toString().replace(".",""))*i,t=Number(t.toString().replace(".","")))}else e=Number(e.toString().replace(".","")),t=Number(t.toString().replace(".",""));return(e+t)/a},multiply:function(e,t){var n=+(e+"").replace(".",""),r=+(t+"").replace(".",""),a=p(e)+p(t);return n*r/Math.pow(10,a)},arraySplit:function(e,t){for(var n=Math.ceil(e.length/t),r=[],a=0;a<n;a++){r[a]=[];for(var o=0;o<t;o++)r[a].push(e[a*t+o])}return r},division:function(e,t){var n=0,r=0;try{n=e.toString().split(".")[1].length}catch(e){}try{r=t.toString().split(".")[1].length}catch(e){}return Number(e.toString().replace(".",""))/Number(t.toString().replace(".",""))*Math.pow(10,r-n)},setHeadlineRead:function(e){try{var t=wx.getStorageSync("headlineRead"),n=[];if(""!=t&&(n=JSON.parse(t)),n.length){var r=n.indexOf(e);r>-1?n.splice(r,1):50==n.length&&n.pop()}n.unshift(e),wx.setStorageSync("headlineRead",JSON.stringify(n))}catch(e){}},getHasRead:function(e){var t="",n=[];return getApp().globalData.hasReadStr?t=getApp().globalData.hasReadStr:(t=wx.getStorageSync("headlineRead")||"[]",getApp().globalData.hasReadStr=t),""!=t&&(n=JSON.parse(t)),n.indexOf(parseInt(e))>-1},exactDivision:function(e,t){return{quotient:parseInt(e/t),residue:e%t}},getCouponTipStateLabel:function(e){return("0"==e?"new-user":"1"==e&&"new-coupon")||"2"==e&&"out-of-day"||"3"==e&&"normal"||""},getNowDay:function(){var e=function(e){return e>=10?String(e):"0"+e},t=m(),n=t.year,r=t.month,a=t.day;return n+e(r)+e(a)},verifyPhone:function(e){return/^1[3-9]\d{9}$/.test(e.replace(/\s/g,""))},verifyId:function(e){var t=!0,n=0;/^\d{17}(\d|x)$/i.test(e)||(t=!1),e=e.replace(/x$/i,"a"),null==={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}[parseInt(e.substr(0,2),10)]&&(t=!1);for(var r=17;r>=0;r--)n+=Math.pow(2,r)%11*parseInt(e.charAt(17-r),11);return n%11!=1&&(t=!1),t},trimAll:function(e){return e.replace(/\s/g,"")},isToday:function(e){var t=new Date(e),n=new Date;return t.setHours(0,0,0,0)===n.setHours(0,0,0,0)},inWeek:function(e){var t=new Date,n=t.getDay(),r=new Date(t.getTime()+24*(7-(n||7))*60*60*1e3);r.setHours(23,59,59,999);var a=new Date(t.getTime()-24*((n||7)-1)*60*60*1e3);return a.setHours(0,0,0,0),e<=r.getTime()&&e>=a.getTime()},getBinaryTag:function(e,t){if(void 0===e)return 0;var n=e.toString(2),r=n.length;return r<32&&(n="".concat(new Array(32-r+1).join(0)).concat(n)),parseInt(n.charAt(32-t))}};
},{isPage:false,isComponent:false,currentFile:'utils/util.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("app.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@babel/runtime/helpers/interopRequireDefault"),a=e(require("./utils/tracer.js")),t=e(require("./utils/EventBus.js"));wx.bus=new t.default,App({onLaunch:function(e){if(e.query&&e.query.refid&&(this.globalData.refid=e.query.refid),e.path.indexOf("pages/index/index")>-1&&(this.globalData.userFlag=!0),e.query&&e.query.cityCode){var a=e.query,t=a.cityCode,n=a.trafficWay,l=void 0===n?"":n;this.globalData.cityObj.cityCode=Number(t),this.setCityObj(t,l)}try{this.locationMessageOpen(e),this.globalData.systemInfo=wx.getSystemInfoSync()||null,this.globalData.SDKVersion=this.globalData.systemInfo&&this.globalData.systemInfo.SDKVersion}catch(e){console.error(e)}},onShow:function(e){if(1092==e.scene&&(this.globalData.sceneId=e.scene),e.scene&&(this.globalData.defaultSceneId=e.scene),e.referrerInfo&&(this.globalData.referrerInfo=e.referrerInfo),1038===e.scene&&e.referrerInfo){var a=e.referrerInfo.appId,t=e.referrerInfo.extraData;if("wxbd687630cd02ce1d"==a&&(this.globalData.indexHolding||this.globalData.weekCardHolding||this.globalData.monthCardHolding||this.globalData.rechargeCardHolding)){if(void 0===t)return void(this.globalData.referrerInfoFlag="unsure");"SUCCESS"==t.return_code?this.globalData.referrerInfoFlag="success":this.globalData.referrerInfoFlag="fail"}"wx308bd2aeb83d3345"==a&&(this.globalData.realAuthData=t)}else this.globalData.referrerInfoFlag=null},onHide:function(){},addListener:function(e){this.callback=e},setChangedData:function(e){this.data=e,null!=this.callback&&this.callback(e)},getNavHeight:function(){var e=this;wx.getSystemInfo({success:function(a){console.log(a),e.globalData.navHeight=a.statusBarHeight+46,console.log(e.globalData.navHeight)},fail:function(e){console.log(e)}})},onError:function(e){try{var t=getCurrentPages();if(t&&t.length){var n=t[t.length-1]&&t[t.length-1].route||"pageNo";a.default.newEv({pagename:n,label:"同程打车小程序报错",value:e,category:"同程打车小程序公共监控上报",action:"同程打车js报错"})}else a.default.newEv({pagename:"noPage",label:"同程打车小程序报错",value:e,category:"同程打车小程序公共监控上报",action:"同程打车js报错"})}catch(e){console.error(e)}},locationMessageOpen:function(e){if(1146===e.scene){var a=e.locationInfo,t=a.latitude,n=a.longitude,l=a.name;t&&n&&l&&(this.globalData.locationMsgScene1146={used:!1,traceFlag:0,location:{latitude:t,longitude:n,name:l}})}},globalData:{menuBtn:{},fromUnionId:"",userInfo:null,userFlag:!1,actUserInfo:null,userAllInfo:null,indexConfig:null,openCityObj:{},openCityList:null,sceneId:0,referrerInfo:{},cityObj:{cityCode:"",cityName:"未知",trafficWay:"code",supplier:""},shareInfo:{},referrerInfoFlag:null,realAuthData:null,refid:"",openId:null,unionId:null,SDKVersion:"",navHeight:0,topicObj:null,topicChange:!1,topicExpireTime:null,channelCode:"defaultChannel",newEqcardCount:0,sceneCode:"",indexHolding:!1,weekCardHolding:!1,monthCardHolding:!1,rechargeCardHolding:!1,cardUserInfo:null,actCode:"",actObj:{},initVfcFlag:!1,cardMsgFlag:!1,cardMsgDia:!1,subActCode:"",actMakeCash:{},eqcardSupportObj:null,checkedBundlingProd:null,driverMotivation:{userType:"bus"},player:null,notAddScore:!1,promoteCode:"",locationCityInfo:{city:"",name:""},locationMsgScene1146:{used:!0,traceFlag:3,location:null}}});
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
Z([3,'onTabBarHeight'])
Z([1,true])
Z([3,'customHeader'])
Z([1,false])
Z([3,'欢迎扫码用车'])
Z([3,'use-car'])
Z([a,[3,'height: '],[[7],[3,'panelHeight']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_0=true;
var x=['./pages/beckonCar/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_0_1()
var fE=_mz(z,'custom-header',['bind:height',0,'home',1,'id',1,'showTip',2,'title',3],[],e,s,gg)
_(r,fE)
var cF=_mz(z,'backon-car',['class',5,'style',1],[],e,s,gg)
_(r,cF)
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/beckonCar/index.wxml'] = [$gwx_XC_0, './pages/beckonCar/index.wxml'];else __wxAppCode__['pages/beckonCar/index.wxml'] = $gwx_XC_0( './pages/beckonCar/index.wxml' );
	;__wxRoute = "pages/beckonCar/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/beckonCar/index.js";define("pages/beckonCar/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),r=require("../../@babel/runtime/helpers/objectSpread2"),t=(e(require("../../utils/router")),require("../../useCar/store/index")),i=require("../../utils/request.user"),n=(e(require("../../utils/regenerator-runtime")),e(require("../../useCar/common/request"))),a=require("../../useCar/common/common"),o=require("../../useCar/config/index");getApp();Page({data:{panelHeight:"calc(100vh - 88rpx)"},onLoad:function(e){var r=this;this.checkOrder().then((function(e){var r=e.body;r&&r.jumpUrl&&(0,a.openUrl)({jumpUrl:r.jumpUrl,needwrap:1,isNewPageCanShare:1})})),this._setRefid(e);var t=decodeURIComponent(e.scene),i="",n="";t?this.getDriverInfoByScene({id:t}).then((function(e){if(e&&e.body&&e.body.data)try{var t=JSON.parse(e.body.data);i=t.driverId,n=t.supplierCode,i&&n&&r.getDriverMessage({driverId:i,supplierCode:n})}catch(e){}})):e.driverId&&e.supplierCode&&this.getDriverMessage({driverId:e.driverId?parseInt(e.driverId):null,supplierCode:e.supplierCode})},getDriverMessage:function(e){this.getDriverInfo(e).then((function(i){i=i.body,t.store.dispatch({type:t.actions.SET_BACKON_DRIVER_INFO,payload:r(r({},i),{},{driverId:parseInt(e.driverId),supplierCode:e.supplierCode})});var n=t.store.getState().common.refid;(0,a.traceEv)("司机信息曝光","^司机信息曝光^".concat(n,"^").concat(i.name,"^").concat(i.plateNumber,"^").concat(i.carColor,"·").concat(i.carBrand,"·").concat(i.carModel,"^"),"扬招首页")}))},onTabBarHeight:function(e){var r=e.detail.val;this.setData({panelHeight:"calc(100vh - ".concat(r,"px)")})},getUnionIdInfo:function(){return new Promise((function(e,r){var t=(0,i.getUnionId)();t&&""!=t?e(t):(0,i.wxLogin)().then((function(r){e(r.unionId)})).catch((function(e){r(e)}))}))},_setRefid:function(e){var r=e.refid||e.carRefId||e.kBackonDefaultRefid||o.kBackonDefaultRefid;r&&t.store.dispatch({type:t.actions.SET_REFID,payload:r})},onShareAppMessage:function(e){var r=t.store.getState()&&t.store.getState().shareConfig||{},i=r.shareImg;return{title:r.shareTitle||"同程打车，就是有折，千元豪礼GO狂欢",imageUrl:i||"https://pic5.40017.cn/i/ori/15AfOBtVbmo.jpg"}},getDriverInfo:function(e){return n.default.post("car-inter-h5/quickcar/wave/getDriverInfo",e)},checkOrder:function(){return n.default.post("car-inter-h5/quickcar/wave/checkOrder")},getDriverInfoByScene:function(e){return n.default.post("car-inter-h5/quickcar/rcode/analyzeWXcode",e)}});
},{isPage:true,isComponent:true,currentFile:'pages/beckonCar/index.js'});require("pages/beckonCar/index.js");$gwx_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'selecter-wrap refactor'])
Z([3,'carIndex'])
Z([3,'selectStartAddress'])
Z([3,'addressInput df'])
Z([[7],[3,'fromCar']])
Z([[9],[[9],[[9],[[9],[[9],[[9],[[9],[[10],[[12],[[6],[[7],[3,'inputer']],[3,'startInputer']],[[5],[[5],[[7],[3,'elements']]],[[7],[3,'productId']]]]],[[8],'productId',[[7],[3,'productId']]]],[[8],'raiseCardImg',[[7],[3,'raiseCardImg']]]],[[8],'placeholder',[[7],[3,'startPlaceholder']]]],[[8],'quickChoose',[[7],[3,'quickChoose2Start']]]],[[8],'detailExports',[[6],[[6],[[7],[3,'detailExports']],[3,'pois']],[3,'length']]]],[[8],'isDrawer',[[7],[3,'isDrawer']]]],[[8],'isIphone',[[7],[3,'isIphone']]]])
Z([3,'input-box-start'])
Z([3,'selectEndAddress'])
Z([3,'addressInput df border-bottom'])
Z([3,'padding-bottom: 0'])
Z([[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[10],[[12],[[6],[[7],[3,'inputer']],[3,'endInputer']],[[5],[[5],[[7],[3,'elements']]],[[7],[3,'productId']]]]],[[8],'productId',[[7],[3,'productId']]]],[[8],'placeholder',[[7],[3,'endPlaceholder']]]],[[8],'quickChoose',[[7],[3,'quickChoose2End']]]],[[8],'isIphone',[[7],[3,'isIphone']]]],[[8],'clickType',[[7],[3,'clickType']]]],[[8],'imgCfg',[[7],[3,'imgCfg']]]],[[8],'showLeftShadow',[[7],[3,'showLeftShadow']]]],[[8],'showRightShadow',[[7],[3,'showRightShadow']]]])
Z([3,'input-box-end'])
Z([[7],[3,'estimate']])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'estimate']],[3,'success']],[[6],[[7],[3,'estimate']],[3,'distance']]],[[6],[[7],[3,'estimate']],[3,'timeTxt']]])
Z([[7],[3,'isJieSong']])
Z(z[14])
Z([[8],'tipList',[[7],[3,'conponList']]])
Z([3,'coupon-tips'])
Z([3,'my-trip-entry'])
Z([[7],[3,'txt']])
Z([3,'input-box'])
Z([3,'input-content'])
Z([[7],[3,'raiseCardImg']])
Z([3,'quickSelect'])
Z([3,'quick-address pnone'])
Z([[6],[[7],[3,'quickChoose']],[3,'list']])
Z([3,'index'])
Z([[6],[[7],[3,'item']],[3,'icon']])
Z(z[6])
Z(z[22])
Z(z[11])
Z(z[22])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_1=true;
var x=['./pages/beckonCar/module/business/infoSelecter/infoSelecter.wxml','../../template/addressSelect.wxml'];d_[x[0]]={}
d_[x[0]]["my-trip-entry"]=function(e,s,r,gg){
var z=gz$gwx_XC_1_1()
var b=x[0]+':my-trip-entry'
r.wxVkey=b
gg.f=$gdc(f_["./pages/beckonCar/module/business/infoSelecter/infoSelecter.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,19,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["input-box"]=function(e,s,r,gg){
var z=gz$gwx_XC_1_1()
var b=x[0]+':input-box'
r.wxVkey=b
gg.f=$gdc(f_["./pages/beckonCar/module/business/infoSelecter/infoSelecter.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',21,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,22,e,s,gg)){xC.wxVkey=1
}
var oD=_mz(z,'view',['catchtap',23,'class',1],[],e,s,gg)
var fE=_v()
_(oD,fE)
var cF=function(oH,hG,cI,gg){
var lK=_v()
_(cI,lK)
if(_oz(z,27,oH,hG,gg)){lK.wxVkey=1
}
lK.wxXCkey=1
return cI
}
fE.wxXCkey=2
_2z(z,25,cF,e,s,gg,fE,'item','index','index')
_(oB,oD)
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["input-box-start"]=function(e,s,r,gg){
var z=gz$gwx_XC_1_1()
var b=x[0]+':input-box-start'
r.wxVkey=b
gg.f=$gdc(f_["./pages/beckonCar/module/business/infoSelecter/infoSelecter.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,29,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["input-box-end"]=function(e,s,r,gg){
var z=gz$gwx_XC_1_1()
var b=x[0]+':input-box-end'
r.wxVkey=b
gg.f=$gdc(f_["./pages/beckonCar/module/business/infoSelecter/infoSelecter.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,31,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_1_1()
var oH=e_[x[0]].i
_ai(oH,x[1],e_,x[0],4,2)
var cI=_n('view')
_rz(z,cI,'class',0,e,s,gg)
var aL=_n('view')
_rz(z,aL,'class',1,e,s,gg)
var eN=_mz(z,'view',['bindtap',2,'class',1,'data-fromCar',2],[],e,s,gg)
var bO=_v()
_(eN,bO)
var oP=_oz(z,6,e,s,gg)
var xQ=_gd(x[0],oP,e_,d_)
if(xQ){
var oR=_1z(z,5,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[0],5,163)
_(aL,eN)
var fS=_mz(z,'view',['catchtap',7,'class',1,'style',2],[],e,s,gg)
var cT=_v()
_(fS,cT)
var hU=_oz(z,11,e,s,gg)
var oV=_gd(x[0],hU,e_,d_)
if(oV){
var cW=_1z(z,10,e,s,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[0],5,519)
_(aL,fS)
var tM=_v()
_(aL,tM)
if(_oz(z,12,e,s,gg)){tM.wxVkey=1
var oX=_v()
_(tM,oX)
if(_oz(z,13,e,s,gg)){oX.wxVkey=1
}
oX.wxXCkey=1
}
tM.wxXCkey=1
_(cI,aL)
var oJ=_v()
_(cI,oJ)
if(_oz(z,14,e,s,gg)){oJ.wxVkey=1
}
var lK=_v()
_(cI,lK)
if(_oz(z,15,e,s,gg)){lK.wxVkey=1
var lY=_v()
_(lK,lY)
var aZ=_oz(z,17,e,s,gg)
var t1=_gd(x[0],aZ,e_,d_)
if(t1){
var e2=_1z(z,16,e,s,gg) || {}
var cur_globalf=gg.f
lY.wxXCkey=3
t1(e2,e2,lY,gg)
gg.f=cur_globalf
}
else _w(aZ,x[0],5,1163)
}
oJ.wxXCkey=1
lK.wxXCkey=1
_(r,cI)
oH.pop()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[x[1]],ic:[]}
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/beckonCar/module/business/infoSelecter/infoSelecter.wxml'] = [$gwx_XC_1, './pages/beckonCar/module/business/infoSelecter/infoSelecter.wxml'];else __wxAppCode__['pages/beckonCar/module/business/infoSelecter/infoSelecter.wxml'] = $gwx_XC_1( './pages/beckonCar/module/business/infoSelecter/infoSelecter.wxml' );
	;__wxRoute = "pages/beckonCar/module/business/infoSelecter/infoSelecter";__wxRouteBegin = true;__wxAppCurrentFile__="pages/beckonCar/module/business/infoSelecter/infoSelecter.js";define("pages/beckonCar/module/business/infoSelecter/infoSelecter.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../../../../@babel/runtime/helpers/objectSpread2");require("../../../../../@babel/runtime/helpers/Arrayincludes");var r=require("../../../../../useCar/lib/reselect"),i=require("../../../../../useCar/store/index"),a=require("../../../../../useCar/common/common"),n=require("../../../../../useCar/config/index"),s=e(require("../../behaviors/commonLogic")),o=e(require("../../behaviors/trackEvent")),c=require("../../../../../useCar/common/business"),d=e(require("./tapOperation")),u=require("../../../../../useCar/lib/nextTick"),l=require("../../../../../useCar/services/commonReqs");Component(function(e,l,h,p,m,f){var b={},I={},g={subtab:"tabInfo.subtab",tabIndex:"tabInfo.tabIndex",currentTab:"tabInfo.currentTab",subtabIndex:"tabInfo.subtabIndex",__productId:"productId",productId:"productId",subtabL:"tabInfo.subtab.length",elements:(0,r.createSelector)((function(e){return v(e.productId,e)}),(function(e){var t=b[b._pid];if(t&&e.startAddress&&e.endAddress&&!I.isPageHide&&!I.data.time&&11==I.__productId){var r=(e.startAddress!==t.startAddress||"poiSelect"===t.startSource)&&(!String(e.startSource).startsWith("map")||["mapPoiInfo","mapFence"].includes(e.startSource))&&"poiSelect"!==e.startSource,s=e.endAddress!==t.endAddress;(r||s)&&I.setData({showPicker:!0})}return(e=Object.assign(h(),h(1),n.emptyFlight,n.emptyTrain,f,e)).startAddress&&1==I.data.initTag&&(I.setData({initTag:2}),setTimeout((function(){i.store.dispatch({type:"locaiotnStartInfoData",payload:(0,a.filterParams)(e)})}),0)),e})),position:"common.position",isQueryPrice:"queryPrice.show",__selectParamsHandle:(0,r.createSelector)((function(e){return e.productId}),(function(e){return(0,c.getReducerFor)(e)})),showTime:(0,r.createSelector)((function(e){return e.productId}),(function(e){return!(0,c.isNoShowTimePicker)(e)})),startPlaceholder:(0,r.createSelector)((function(e){return e.productId}),(function(e){return e.common.position}),(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={};return r[e]||(t.isFail?"定位失败,请输入上车地址":"定位中..")})),raiseCardImg:(0,r.createSelector)((function(e){return e.productId}),(function(e){return v(e.productId,e)}),(function(e,t){return 12==e&&"ticket"!==t._source&&t&&(t.tagImageUrl||"")})),endPlaceholder:(0,r.createSelector)((function(e){return e.productId}),(function(e){return{130:"请选择目的地"}[e]||"您要去哪儿"})),__refid:"common.refid"};function v(e,t){return{130:t.specialCar.choosedParams}[e]}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.startAddress&&(i.store.getState().common.crossStartAddress||this.triggerEvent("elements",e))}function T(e){e.tabServiceTypeId||(e.tabServiceTypeId=19);var r=e.tabServiceTypeId,i=b[b._pid]||{};y.call(this,e,i),_.call(this,e,i,r),b[r]=t({},e),b._pid=r,this.triggerEvent("elements",e)}function y(e,t){var r=e.tabServiceTypeId,i=b._pid!=r;e.startLatitude!==t.startLatitude||i||(e.startAddress,t.startAddress)}function _(e,t,r){11!=r&&19!=r&&80!=r||this.$setData({estimate:!1})}return{behaviors:[s.default,o.default,d.default],properties:{isDrawer:Boolean,pageMode:{type:Number,value:0},fromCar:String},data:{detailExports:{pois:[],station:""},isIphone:(0,a.isIphoneIos)(),clickType:"",conponList:[],time:"",showPicker:!1,showLeftShadow:!1,showRightShadow:!0,trainNoticeInfo:{},showBubble:!1,initTag:1},pageLifetimes:{show:function(){this.isPageHide=!1},hide:function(){this.isPageHide=!0}},created:function(){this.$setData=u.setState,b={}},attached:function(){var e=this;I=this,this._bindStateCheck(),Promise.resolve().then((function(){var t=e.data.productId;S.call(e,e.data.elements,t)})),T.call(this,this.data.elements||{})},detached:function(){(0,i.unbindState)(this),b={}},methods:{getIndexIns:function(){return(0,a.getCurPage)().selectComponent("#car")},setPoistionPost:function(){this.setData({initTag:1})},getPageVm:function(){return wx.yc_carIndexIns},_bindStateCheck:function(){this.bindAlready||((0,i.bindState)(this,g),this.bindAlready=!0)},stateWillChanged:function(e){null!=e.currentTab&&e.currentTab!==this.data.currentTab&&(this._lastTab=this.data.currentTab)},stateDidChanged:function(e){var r=e.productId,i=this.data.elements;if(!i.startLongitude&&e.position&&e.position.lng&&e.position.address){var n=(0,a.location2Param)(e.position),s=(0,c.createTargetParam)(n,this.__productId,"start");this.setParamsTool(s,this.__productId)}if(r&&i.tcServiceTypeId!=r&&this.setParamsTool(Object.assign({},i,t(t({tcServiceTypeId:r,tabServiceTypeId:r},h()),{},{useTime:""})),r),e.currentTab!==this._lastTab||void 0!==e.elements){if("mapLocation"===i.startSource)return void console.log("infoSelector stateDidChanged from mapLocation");if(wx.tcyc.__recV2Lock){var o=i.tabServiceTypeId;return b[o]=t({},i),void(b._pid=o)}T.call(this,i)}}}}}(a.newObjWithKeys,a.getLocation,c.emptyParams,wx.tcyc.eventChannel,l.flightTrainList,n.emptyOther));
},{isPage:false,isComponent:true,currentFile:'pages/beckonCar/module/business/infoSelecter/infoSelecter.js'});require("pages/beckonCar/module/business/infoSelecter/infoSelecter.js");$gwx_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[2,'=='],[[7],[3,'productId']],[1,100]])
Z([[7],[3,'isShowPersonPopup']])
Z([3,'person-popup'])
Z(z[1])
Z([3,'stopTouchMove'])
Z([3,'model-box'])
Z([[7],[3,'menuShowLoading']])
Z([[7],[3,'autoplay']])
Z([3,'swiperBindchange'])
Z([[7],[3,'circular']])
Z([3,'banner'])
Z([[7],[3,'current']])
Z([[7],[3,'disableSwipeBack']])
Z([[7],[3,'duration']])
Z([[7],[3,'easingFunction']])
Z([[7],[3,'indicatorActiveColor']])
Z([[7],[3,'indicatorColor']])
Z([[7],[3,'indicatorDots']])
Z([[7],[3,'interval']])
Z([a,[3,'height:'],[[7],[3,'Height']]])
Z(z[4])
Z([[6],[[7],[3,'activityList']],[3,'length']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_2=true;
var x=['./pages/beckonCar/module/business/menu/menu.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_2_1()
var o4=_v()
_(r,o4)
if(_oz(z,0,e,s,gg)){o4.wxVkey=1
}
var x5=_v()
_(r,x5)
if(_oz(z,1,e,s,gg)){x5.wxVkey=1
var o6=_n('view')
_rz(z,o6,'class',2,e,s,gg)
var f7=_v()
_(o6,f7)
if(_oz(z,3,e,s,gg)){f7.wxVkey=1
}
var c8=_mz(z,'view',['catchtouchmove',4,'class',1],[],e,s,gg)
var h9=_n('view')
var o0=_v()
_(h9,o0)
if(_oz(z,6,e,s,gg)){o0.wxVkey=1
var cAB=_mz(z,'swiper',['autoplay',7,'bindchange',1,'circular',2,'class',3,'current',4,'disableSwipeBack',5,'duration',6,'easingFunction',7,'indicatorActiveColor',8,'indicatorColor',9,'indicatorDots',10,'interval',11,'style',12],[],e,s,gg)
var oBB=_n('swiper-item')
_rz(z,oBB,'catchtouchmove',20,e,s,gg)
var lCB=_v()
_(oBB,lCB)
if(_oz(z,21,e,s,gg)){lCB.wxVkey=1
}
lCB.wxXCkey=1
_(cAB,oBB)
_(o0,cAB)
}
else{o0.wxVkey=2
}
o0.wxXCkey=1
_(c8,h9)
_(o6,c8)
f7.wxXCkey=1
_(x5,o6)
}
o4.wxXCkey=1
x5.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/beckonCar/module/business/menu/menu.wxml'] = [$gwx_XC_2, './pages/beckonCar/module/business/menu/menu.wxml'];else __wxAppCode__['pages/beckonCar/module/business/menu/menu.wxml'] = $gwx_XC_2( './pages/beckonCar/module/business/menu/menu.wxml' );
	;__wxRoute = "pages/beckonCar/module/business/menu/menu";__wxRouteBegin = true;__wxAppCurrentFile__="pages/beckonCar/module/business/menu/menu.js";define("pages/beckonCar/module/business/menu/menu.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../../@babel/runtime/helpers/interopRequireWildcard"),t=require("../../../../../@babel/runtime/helpers/interopRequireDefault"),i=require("../../../../../@babel/runtime/helpers/objectSpread2"),n=t(require("../../behaviors/trackEvent")),r=t(require("../../behaviors/commonLogic")),o=require("../../../../../useCar/lib/nextTick.js"),a=t(require("../../behaviors/menu")),c=require("../../../../../useCar/common/common"),s=require("../../../../../useCar/config/index"),u=require("../../../../../useCar/store/index"),p=e(require("../../../../../useCar/util/getChannelUrl")),d="https://file.40017.cn/groundtrafficstage/usecar/distributioncomponents/img/";Component({behaviors:[n.default,r.default,a.default],properties:{drawerTest:{type:String,value:"drawer"}},data:{personPopupSub:!1,isIphoneX:!1,activityList:[],menuList:[{imgUrl:d+"centermenu-icon-0.png",name:"我的订单",token:"orderList"},{imgUrl:d+"centermenu-icon-1.png",name:"申请发票",token:"invoiced",jumpUrl:"https://wx.17u.cn/post/home/index?url=https://wx.17u.cn/post/@@/tabIndex/12?tab=0"},{imgUrl:d+"centermenu-icon-3.png",name:"联系客服",token:"service"}],serviceList:[{imgUrl:d+"menu_cust.png",title:"在线客服",name:"在线客服",title2:"及时高效，快速解决您的问题",token:"online",appId:"wx336dcaf6a1ecf632",embedded:!0},{imgUrl:d+"menu-iphone.png",title:"电话客服",name:"电话客服",title2:"拨打0512-81669469",token:"phone"}],swiper_height:5,imgUrls:["https://file.40017.cn/groundtrafficstage/usecar/distributioncomponents/img/menu-icon-close.png","https://file.40017.cn/groundtrafficstage/usecar/distributioncomponents/img/menu-icon-close.png"],indicatorDots:!1,indicatorColor:"white",indicatorActiveColor:"#D75B1B",autoplay:!1,circular:!1,easingFunction:"easeInOutCubic",duration:300,disableSwipeBack:!0},attached:function(){var e=this;this.setData({isIphoneX:(0,c.isIphonex)()}),(0,u.bindState)(this,{productId:"productId",common:"common"}),wx.tcyc.eventChannel.on("triglePersonMenu",(function(){e.showPersonPopup()})),this.triggerEvent("regist",{},{}),this.$setData=o.setState.bind(this)},created:function(){},detached:function(){(0,u.unbindState)(this)},methods:{stopTouchMove:function(){return!1},menuLeftClick:function(){this.setData({current:0})},swiperBindchange:function(e){0==e.detail.current?this.setData({style_img:"opacity: 0;"}):this.setData({style_img:"opacity: 1;"})},closePersonPopup:function(){this.setData({isShowPersonPopup:!1,style_mask:"width: 0%;background: rgba(0, 0, 0, 0);"})},tapMenuListItem:function(e){var t=(0,c.evtData)(e).item;if(t){switch(t.token){case"orderList":wx.navigateTo({url:(0,p.default)(p.ORDER_LIST)});break;case"invoiced":t.appId="wx336dcaf6a1ecf632",this.openUrl(t);break;case"coupon":(0,c.toWebview)(t.jumpUrl,{},!0);break;case"feedback":this.openUrl(t)}"service"==t.token?this.setData({current:1}):this.closePersonPopup();var i=u.store.getState().common.refid;this.traceEvByPage("业务类型点击","^".concat("业务类型点击","^").concat(i,"^").concat(t.name,"^"),"扬招个人中心")}},openUrl:function(e){if(e.appId){var t=(0,p.default)(p.WEBVIEW,!1,{wxrefid:1732463517,needwrap:1,timestamp:Date.now(),src:encodeURIComponent(e.jumpUrl)});(0,c.openUrl)({jumpUrl:t,appId:e.appId,embedded:e.embedded})}else(0,c.openUrl)({jumpUrl:e.jumpUrl,needwrap:1})},tapServiceListItem:function(e){var t=(0,c.evtData)(e).item;"online"==t.token?this.toOnlineService():this.callServicePhone();this.traceEvByPage("客服类型点击","^".concat("客服类型点击","^").concat(t.name,"^"),"扬招个人中心")},toOnlineService:function(){this.openUrl(i(i({},this.data.serviceList[0]),{},{jumpUrl:"https://livechat.ly.com/out/chat?ProductId=34&sourcetype=16&pageid=34010"}))},callServicePhone:function(e){wx.makePhoneCall({phoneNumber:"051281669469"})},resetLocation:function(e){var t=[s.kProductIds.CAR_LATER,s.kProductIds.CAR_NOW,s.kProductIds.SEND_AIRPORT,s.kProductIds.SEND_TRAIN,s.kProductIds.BACKON_CAR];e=e||u.store.getState().productId;var i=(0,c.includesFor)(t,e);this._mapCenterForLocation=!i,this.triggerEvent("tapPos")},resetPos:function(){console.log(this.data.productId),this.resetLocation(this.data.productId)},goAbout:function(){(0,c.toWebview)("https://wx.17u.cn/pub/page/about")}}});
},{isPage:false,isComponent:true,currentFile:'pages/beckonCar/module/business/menu/menu.js'});require("pages/beckonCar/module/business/menu/menu.js");$gwx_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'didWrap'])
Z(z[0])
Z([3,'pr oh wrapper'])
Z([3,'imd_regionChange'])
Z(z[3])
Z([a,[3,'map-container pa oh pageMode'],[[7],[3,'pageMode']],[3,' tab'],[[7],[3,'productId']]])
Z([3,'C_Map'])
Z([a,[3,'height: '],[[7],[3,'mapContainerHeight']]])
Z([[2,'&&'],[[2,'||'],[[2,'!'],[[7],[3,'mapPending']]],[[2,'==='],[[7],[3,'mapPending']],[1,3]]],[[6],[[7],[3,'poiNameLines']],[1,0]]])
Z([3,'onRecPoiMarkerClick'])
Z([a,[3,'recPoiMarker df pa fz24 pending'],[[7],[3,'mapPending']],[3,' l'],[[6],[[7],[3,'poiNameLines']],[3,'length']],[3,' m'],[[2,'?:'],[[7],[3,'hint']],[1,'1'],[1,'']]])
Z([[6],[[7],[3,'poiNameLines']],[1,1]])
Z([[7],[3,'hint']])
Z([a,[3,'scrollView '],[[2,'?:'],[[7],[3,'isJieSong']],[1,'jiesong'],[1,'car']]])
Z([[7],[3,'scrollTop']])
Z([1,true])
Z([3,'registeredMenu'])
Z([3,'resetLocation'])
Z([3,'menu'])
Z([3,'Menu'])
Z([a,[3,'business-container pr bg1 '],[[2,'&&'],[[7],[3,'hasDrawerContent']],[[2,'?:'],[[2,'&&'],[[7],[3,'isIphoneX']],[[2,'!'],[[7],[3,'isJieSong']]]],[1,'hasctxIphonex'],[1,'hasctx']]]])
Z([3,'C_Bus'])
Z(z[5][4])
Z([3,'onElements'])
Z([3,'onRecData'])
Z([[7],[3,'fromCar']])
Z([3,'IndexSelecter'])
Z([[7],[3,'productIdReady']])
Z(z[5][4])
Z([[6],[[7],[3,'driverInfo']],[3,'carColor']])
Z([[7],[3,'isIphoneX']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_3=true;
var x=['./pages/beckonCar/module/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_3_1()
var tEB=_mz(z,'view',['bindtap',0,'bindtouchend',1,'class',1],[],e,s,gg)
var eFB=_mz(z,'view',['bindtouchend',3,'bindtouchstart',1,'class',2,'id',3,'style',4],[],e,s,gg)
var bGB=_v()
_(eFB,bGB)
if(_oz(z,8,e,s,gg)){bGB.wxVkey=1
var oHB=_mz(z,'view',['bindtap',9,'class',1],[],e,s,gg)
var xIB=_n('view')
var oJB=_v()
_(xIB,oJB)
if(_oz(z,11,e,s,gg)){oJB.wxVkey=1
}
var fKB=_v()
_(xIB,fKB)
if(_oz(z,12,e,s,gg)){fKB.wxVkey=1
}
oJB.wxXCkey=1
fKB.wxXCkey=1
_(oHB,xIB)
_(bGB,oHB)
}
bGB.wxXCkey=1
_(tEB,eFB)
var cLB=_mz(z,'view',['class',13,'scrollTop',1,'scrollY',2],[],e,s,gg)
var hMB=_mz(z,'menu',['bind:regist',16,'bind:tapPos',1,'class',2,'id',3],[],e,s,gg)
_(cLB,hMB)
var oNB=_mz(z,'view',['class',20,'id',1],[],e,s,gg)
var cOB=_v()
_(oNB,cOB)
if(_oz(z,22,e,s,gg)){cOB.wxVkey=1
var aRB=_mz(z,'info-selecter',['bind:elements',23,'bind:recData',1,'fromCar',2,'id',3,'pidReady',4,'productId',5],[],e,s,gg)
_(cOB,aRB)
}
var oPB=_v()
_(oNB,oPB)
if(_oz(z,29,e,s,gg)){oPB.wxVkey=1
}
var lQB=_v()
_(oNB,lQB)
if(_oz(z,30,e,s,gg)){lQB.wxVkey=1
}
cOB.wxXCkey=1
cOB.wxXCkey=3
oPB.wxXCkey=1
lQB.wxXCkey=1
_(cLB,oNB)
_(tEB,cLB)
_(r,tEB)
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/beckonCar/module/index.wxml'] = [$gwx_XC_3, './pages/beckonCar/module/index.wxml'];else __wxAppCode__['pages/beckonCar/module/index.wxml'] = $gwx_XC_3( './pages/beckonCar/module/index.wxml' );
	;__wxRoute = "pages/beckonCar/module/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/beckonCar/module/index.js";define("pages/beckonCar/module/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../@babel/runtime/helpers/interopRequireDefault"),e=require("../../../@babel/runtime/helpers/toConsumableArray"),i=require("../../../@babel/runtime/helpers/objectSpread2"),a=require("../../../useCar/config/index"),o=t(require("./behaviors/map")),r=t(require("./behaviors/trackEvent")),n=t(require("./business/infoSelecter/tapOperation")),s=t(require("./behaviors/commonLogic")),c=require("../../../useCar/store/index"),d=require("../../../useCar/lib/nextTick"),u=require("../../../useCar/common/init"),h=require("../../../useCar/common/common"),l=require("../../../useCar/common/business"),p=require("../../../useCar/lib/reselect"),m=require("../../../useCar/util/tool");Component({behaviors:[o.default,n.default,s.default,r.default],data:Object.assign({headerHeight:getApp().globalData.totalNavHeightNew,domHeights:"",scrollSwitch:!1,pageSource:"扬招首页",fromCar:"",pageMode:0,recData:{},information:{},mapCenter:{lat:31.34127,lng:102.93984},mapScale:17,scrollTop:0,pageJumping:!1,poiNameLines:[],mapViewH:"calc(100vh - 90rpx - 340rpx)",mapContainerHeight:"calc(100% - 220rpx)",annoShow:!1,MAP_SUBKEY:a.MapSubKey,driverInfo:{},locationAuth:!0}),observers:{"isRecommend,productId,mapCenter,mapScale,spotList":function(t,e,i,a,o){this.renderMapMarkers({isRecommend:t,productId:e,mapCenter:i,mapScale:a,spotList:o})},"driverInfo.location,locationAuth":function(t,e){t&&!e&&this.applyNewLatLnt({source:"init",latLng:{latitude:t.lat,longitude:t.lng}})}},pageLifetimes:{show:function(){var t=this;this.onShow(),setTimeout((function(){t.data.information&&t.data.information.startAddress||t.resetLocation()}),300),this.isHide=!1},hide:function(){this.isHide=!0}},lifetimes:{attached:function(){this.onLoad(this.properties||{})},detached:function(){(0,c.unbindState)(this)}},methods:{fitMapViewPort:function(){var t=this,e=wx.createSelectorQuery().in(this);e.select(".business-area").boundingClientRect((function(e){var i=e.height;t.setData({mapContainerHeight:"calc(100% - ".concat(i-20/(0,h.viewInfo)().rpxRatio,"px)")})})),e.exec()},onLoad:function(t){wx.yc_carIndexIns=this,this.renderMapMarkers=(0,h.debounce)(this.renderMapMarkers,100),this.onElements=(0,h.debounce)(this.onElements,100),this.resetLocation=(0,h.throttle)(this.resetLocation,750),this.fitMapViewPort=(0,h.debounce)(this.fitMapViewPort,300),this._menuIns={},this.$setData=d.setState.bind(this),this.$setData({isIphone:(0,h.isIphoneIos)(),isIphoneX:(0,h.isIphonex)()});var e=c.store.getState().common.position;c.store.dispatch({type:c.actions.SET_MY_POSITION,payload:{lat:e.lat||t.localLatitude,lng:e.lng||t.localLongitude}});var i=this.getInitMapCenter();this.setData({mapCenter:i}),this.syncProductId(130),this.hideLoading(),this._initStoreData(),this.nearbyCarCount=-1,this.traceExposureHandle(this.data.productId)},_initStoreData:function(){(0,c.bindState)(this,{isQueryPrice:"queryPrice.show",position:"common.position",driverInfo:(0,p.createSelector)((function(t){return t.common.backonDriverInfo}),(function(t){return i({},t)})),showCenterMark:(0,p.createSelector)((function(t){return(0,l.getParamsFor)(t.productId).startAddress}),(function(t){return t.productId}),(function(t,e){return(0,l.isShowCenterMarker)(e)&&t||""})),productId:"productId",__productId:"productId",spotList:"recSpotList"})},renderMapMarkers:function(t){var a=t.isRecommend,o=(t.productId,t.mapCenter),r=t.mapScale,n=t.spotList,s=void 0===n?[]:n,c=this.getRecSpotMarkers(e(s),r)||[];o&&(c=c.map((function(t){return t.latitude==o.lat&&t.longitude==o.lng?i(i({},t),{},{label:void 0}):t}))),this._menuIns._mapCenterForLocation=!1;var d=a?[this.data.recMarker]:c;this.setData({spotMarkers:c,mapMarkers:[].concat([],e(d))})},onShow:function(){this.isHide=!1,this.leave=!1,this._onShowMapTask&&this._onShowMapTask()},stateDidChanged:function(t){var e,i,a,o,r=this;if(t.isQueryPrice&&!this.leave){setTimeout((function(){wx.showLoading({mask:!0,title:"页面跳转中"})}),100),setTimeout((function(){wx.hideLoading()}),500),this.leave=!0;e=r.data.information||{},i=e.startAddress,a=e.endAddress,o=(r.data.recData||{}).is_recommend,r.traceEvByPage("跳转询价",["^跳转询价",(0,l.getRefId)(),i,o?"场站":"普通",a].join("^")+"^","扬招首页"),wx.navigateTo({url:"/useCar/queryPrice/queryPrice"})}},onShareAppMessage:function(){var t=c.store.getState()&&c.store.getState().shareConfig||{},e=t.shareImg;return{title:t.shareTitle||"",imageUrl:e||"https://pic5.40017.cn/i/ori/15AfOBtVbmo.jpg"}},showLoading:function(){wx.showLoading(),this._loading=!0},hideLoading:function(){this._loading&&wx.hideLoading()&&(this._loading=0)},resetLocation:function(){var t=this,e=this.selectComponent("#IndexSelecter");e&&e.setPoistionPost();var i=this.__productId;this.resetLocationHandle(i,(function(t){wx.showToast({icon:"none",title:t.message||"定位失败"})}),{clickType:1}).then((function(){t.locationReady=!0})).catch((function(){(0,u.setPositionFail)(),t.$setData({locationAuth:!1})}))},registeredMenu:function(){this._menuIns=this.selectComponent("#Menu")},didWrap:function(){this._operating=!0},renderError:function(t){},onRecData:function(t){if((t=t.detail)&&200===t.code)return this.setData({recData:t}),this.showRecFence(t);this.setMode(0)},onElements:function(t){var e=t.detail;this.$setData({information:e}),c.store.getState().common.crossStartAddress||this.mapHandler(e)},mapHandler:function(t){var e=this,i=this.__productId,a=t.startCityId,o=t.startAddress,r=t.startAddressDetail,n=t.startLatitude,s=t.startLongitude,c=t.startSource,d=o||r,u={cityId:+a,name:d,lat:+n,lng:+s},h=this.logicId===t.startLogicId&&String(c).startsWith("map"),l=d&&a&&!(0,m.equals)(this["preStartInfo".concat(i)],u);!h&&l&&(this.isHide?this._onShowMapTask=function(){e.applyNewAddr(u,{source:c,logicId:t.startLogicId}),e._onShowMapTask=null}:this.applyNewAddr(u,{source:c,logicId:t.startLogicId})),this["preStartInfo".concat(i)]=u},ev:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"扬招首页";this.traceEvByPage(t,e,i)},onRecPoiMarkerClick:function(){this.selectStartAddressForPoi();var t=this.data.isRecommend?"场站":"普通",e=this.data.poiName;this.trackerCommon("点击上车点气泡",[t,e])}}});
},{isPage:false,isComponent:true,currentFile:'pages/beckonCar/module/index.js'});require("pages/beckonCar/module/index.js");$gwx_XC_4=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[7],[3,'bigEventAB']])
Z([3,'onTabBarHeight'])
Z([1,true])
Z([3,'customHeader'])
Z([[7],[3,'showRedDot']])
Z([[7],[3,'showFavoriteTips']])
Z([3,'同程打车'])
Z(z[0])
Z([3,'onLocationReady'])
Z([3,'onRedDotClear'])
Z([[7],[3,'btype']])
Z([3,'use-car'])
Z([[7],[3,'refid']])
Z(z[4])
Z([a,[3,'height: '],[[7],[3,'panelHeight']]])
Z([[7],[3,'stype']])
Z([3,'__PrivacyAuthorization'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_4=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_4=true;
var x=['./pages/index/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_4_1()
var eTB=_mz(z,'custom-header',['bigEventAB',0,'bind:height',1,'home',1,'id',2,'showRedDot',3,'showTip',4,'title',5],[],e,s,gg)
_(r,eTB)
var bUB=_mz(z,'use-car',['bigEventAB',7,'bind:onLocationReady',1,'bind:onRedDotClear',2,'btype',3,'class',4,'refid',5,'showRedDot',6,'style',7,'stype',8],[],e,s,gg)
_(r,bUB)
var oVB=_n('author')
_rz(z,oVB,'id',16,e,s,gg)
_(r,oVB)
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_4();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx_XC_4, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx_XC_4( './pages/index/index.wxml' );
	;__wxRoute = "pages/index/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/index.js";define("pages/index/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireWildcard"),t=require("../../@babel/runtime/helpers/interopRequireDefault"),a=require("../../utils/util.js"),i=t(require("../../utils/router")),o=require("../../useCar/store/index"),n=require("../../utils/request.user"),r=require("../../utils/locationUtils"),s=require("../../util/tcUtil"),c=(t(require("../../utils/regenerator-runtime")),e(require("../../useCar/util/getChannelUrl.js"))),u=require("../../useCar/common/common.js"),l=t(require("../../useCar/common/request")),d=require("../../useCar/config/index"),g=getApp();Page({data:{isIOS:(0,a.isIOS)(),gifUrl:"https://file.40017.cn/uticket/v3/index/index_scan_qrcode4.gif",open:!0,active:8,tabs:[],loading:!0,showPop:!1,buyBtnPos:{},complete:!1,weather:"",qrCodeError:{show:!1,message:""},changeLocationCity:!1,result:{},show:!1,menuButton:{},NavCustomFlag:!0,cityObj:{cityCode:"",cityName:"定位中",trafficWay:"",supplier:""},showExceptionVisible:!1,showFirstTimeGuide:!1,isIphoneX:(0,a.isIphoneX)(),tczzGuideDia:{show:!1},quickEntry:null,navigateTip:{show:!1},broadcast:{show:!1,content:""},openQCode:-1,cityInfo:{logo:"https://file.40017.cn/uticket/xcx/traffic/img/code_icon.png",name:"公交乘车码"},codeInfo:{status:0,url:"",message:""},depositInfo:null,buDengFlag:!1,getUserInfoFlag:!0,refid:"",adminAdVOListConfig:null,adminFunctionVOListConfig:null,debtMoney:0,payStatusTimer:3,payStatusFlag:!1,accountStatus:"",paystatustext:"扣款中...",eqcardOddCount:-1,eqcardOddMessage:"",activityEntrance:null,subActCode:"",guideShow:!1,autoRefresh:null,isNotCityService:!1,extraData:null,customPrice:!1,currentPrice:0,userInfo:null,navConfig:{color:"#4959ff",image:"https://file.40017.cn/uticket/xcx/traffic/img/code_index_bg.png"},currentCityObj:null,isDepositDia:!1,qrNextBus:!1,trainCoupon:null,showFooter:!0,hasQrTab:!1,fromPathDetail:!1,cityListBtnIdx:"",showFavBubble:!1,panelHeight:"calc(100vh - 88px)",showFavoriteTips:!1,btype:"",stype:"",bigEventAB:"Z",showRedDot:!1},onLoad:function(e){this.bigEventGray();var t=g.globalData.defaultSceneId,a=g.globalData.referrerInfo&&g.globalData.referrerInfo.appId;if(1037!=t&&1038!=t||"wx42cb8958c03cb374"!=a){e.toRegister&&(this.toRegister=e.toRegister),e.shareUnionId&&(g.globalData.shareInfo=e);var o={};if(e.btype&&this.setData({btype:e.btype}),e.stype&&this.setData({stype:e.stype}),e.scene){var n=decodeURIComponent(e.scene);g.globalData.sceneCode=n}e.refid&&(o.refid=e.refid,g.globalData.refid=e.refid),e.fromUnionId&&(g.globalData.fromUnionId=e.fromUnionId),e.inviteType&&(this._inviteType=e.inviteType),e.channelCode&&(g.globalData.channelCode=e.channelCode),e.subActCode&&(g.globalData.subActCode=e.subActCode),e.tiktokRequestParam&&(console.log("tiktokRequestParam",e.tiktokRequestParam),g.globalData.tiktokRequestParam=e.tiktokRequestParam),e.cityListBtnIdx&&(o.cityListBtnIdx=e.cityListBtnIdx),o.subActCode=g.globalData.subActCode,this.setData(o),e.cityCode&&(this._couponCityCode=e.cityCode);var r={promotionId:e.promotionId,userSource:e.userSource,refid:e.refid};g.globalData.cpsOnload?g.globalData.cpsOnload(r):g.globalData.cps=r;var s=this;wx.onUserCaptureScreen((function(e){var t=getCurrentPages(),a=(0,c.default)(c.INDEX,!1);t[t.length-1].route===a&&(1==s.data.codeInfo.status&&s.setData({"codeInfo.status":13}))})),this.checkCouponRedDot(),(0,u.tracePage)()}else i.default.reLaunch("/pages/otherPage/errorPage/index")},onReady:function(){},onShow:function(){if(this.setData({active:8}),g.globalData.userAllInfo&&this.setData({userInfo:g.globalData.userAllInfo}),g.globalData.currentPrice){var e=g.globalData.currentPrice;this.setData({currentPrice:0==e?e:Number(e).toFixed(1)})}this._needFresh&&(1==this.data.active&&this.qrCodeTabInit(),this.loadConfig(),this._needFresh=!1),this.checkCouponRedDot()},onHide:function(){(0,r.offLocationChange)()},onUnload:function(){(0,r.offLocationChange)()},onTabBarHeight:function(e){var t=e.detail.val;this.setData({panelHeight:"calc(100vh - ".concat(t,"px)")})},getUnionIdInfo:function(){return new Promise((function(e,t){var a=(0,n.getUnionId)();a&&""!=a?e(a):(0,n.wxLogin)().then((function(t){e(t.unionId)})).catch((function(e){t(e)}))}))},openThreeMiniProgram:function(){var e=(0,c.default)(c.WEBVIEW,!0,{timestamp:1648884996128,src:"https%3A%2F%2Fwx.17u.cn%2Fpost%2F%23%2Fsingle%2F12%2F%25E5%259B%25BD%25E5%2586%2585%25E7%2594%25A8%25E8%25BD%25A6"});wx.openEmbeddedMiniProgram({appId:"wx336dcaf6a1ecf632",path:e})},onShareAppMessage:function(e){var t=o.store.getState()&&o.store.getState().shareConfig||{},a=t.shareImg;return{title:t.shareTitle||"同程打车，就是有折，千元豪礼GO狂欢",imageUrl:a||"https://pic5.40017.cn/i/ori/15AfOBtVbmo.jpg"}},onLocationReady:function(){this.initAddFavorite()},initAddFavorite:function(){if(!this.isInitFav){this.isInitFav=!0;var e=1037==(0,s.get)(getApp(),"globalData.defaultSceneId",0);this.setData({showFavoriteTips:!e})}},bigEventGray:function(){var e=this;(0,u.getAbTesting)("20221202_tcMainGray").then((function(t){console.log(t),t&&(e.setData({bigEventAB:t}),(0,u.traceEv)("大事件首页置灰试验",t,"打车首页"))}))},checkCouponRedDot:function(){var e=this;l.default.post(d.kCarApiGateWay+"quickcar/coupon/couponRedDot").then((function(t){var a=(0,s.get)(t,"body",!1);e.setData({showRedDot:a})}))},onRedDotClear:function(){this.setData({showRedDot:!1})}});
},{isPage:true,isComponent:true,currentFile:'pages/index/index.js'});require("pages/index/index.js");$gwx_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'selecter-wrap refactor'])
Z([[9],[[9],[[9],[[9],[[8],'subtab',[[7],[3,'subtab']]],[[8],'tabIndex',[[7],[3,'tabIndex']]]],[[8],'currentTab',[[7],[3,'currentTab']]]],[[8],'isDrawer',[[7],[3,'isDrawer']]]],[[8],'subtabL',[[7],[3,'subtabL']]]])
Z([3,'productTabSwitchA'])
Z([3,'carIndex'])
Z([[2,'||'],[[7],[3,'showTime']],[[6],[[7],[3,'elements']],[3,'flt']]])
Z([1,true])
Z([3,'handleClose'])
Z([3,'onTime'])
Z([3,'handleOpen'])
Z([3,'onUpdateTime'])
Z([3,'tapTime'])
Z([3,'c-input timepick'])
Z(z[5])
Z([[2,'||'],[[6],[[7],[3,'elements']],[3,'defaultTime']],[[7],[3,'defaultTime']]])
Z([[6],[[7],[3,'elements']],[3,'useTime']])
Z(z[5])
Z(z[5])
Z([[2,'&&'],[[7],[3,'showPicker']],[[2,'!'],[[7],[3,'pageMode']]]])
Z([3,'selectStartAddress'])
Z([3,'addressInput df'])
Z([[7],[3,'fromCar']])
Z([[9],[[9],[[9],[[9],[[9],[[9],[[9],[[10],[[12],[[6],[[7],[3,'inputer']],[3,'startInputer']],[[5],[[5],[[7],[3,'elements']]],[[7],[3,'productId']]]]],[[8],'productId',[[7],[3,'productId']]]],[[8],'raiseCardImg',[[7],[3,'raiseCardImg']]]],[[8],'placeholder',[[7],[3,'startPlaceholder']]]],[[8],'quickChoose',[[7],[3,'quickChoose2Start']]]],[[8],'detailExports',[[6],[[6],[[7],[3,'detailExports']],[3,'pois']],[3,'length']]]],[[8],'isDrawer',[[7],[3,'isDrawer']]]],[[8],'isIphone',[[7],[3,'isIphone']]]])
Z([3,'input-box-start'])
Z([[2,'&&'],[[7],[3,'showMyTripEntry']],[[7],[3,'isDrawer']]])
Z([[8],'txt',[[6],[[7],[3,'myTripTxt']],[3,'start']]])
Z([3,'my-trip-entry'])
Z([3,'selectEndAddress'])
Z([3,'addressInput df border-bottom'])
Z([3,'padding-bottom: 0'])
Z([[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[10],[[12],[[6],[[7],[3,'inputer']],[3,'endInputer']],[[5],[[5],[[7],[3,'elements']]],[[7],[3,'productId']]]]],[[8],'productId',[[7],[3,'productId']]]],[[8],'placeholder',[[7],[3,'endPlaceholder']]]],[[8],'quickChoose',[[7],[3,'quickChoose2End']]]],[[8],'isIphone',[[7],[3,'isIphone']]]],[[8],'clickType',[[7],[3,'clickType']]]],[[8],'imgCfg',[[7],[3,'imgCfg']]]],[[8],'showLeftShadow',[[7],[3,'showLeftShadow']]]],[[8],'showRightShadow',[[7],[3,'showRightShadow']]]])
Z([3,'input-box-end'])
Z([[7],[3,'showMyTripEntry']])
Z([[8],'txt',[[6],[[7],[3,'myTripTxt']],[3,'end']]])
Z(z[25])
Z([[7],[3,'conponList']])
Z([3,'index'])
Z([[2,'=='],[[7],[3,'productId']],[1,80]])
Z([[6],[[6],[[7],[3,'conponList']],[1,0]],[3,'sfcTxt']])
Z([[2,'&&'],[[6],[[6],[[7],[3,'conponList']],[1,0]],[3,'reduce']],[[2,'>'],[[6],[[6],[[7],[3,'conponList']],[1,0]],[3,'reduce']],[1,2]]])
Z([[2,'&&'],[[7],[3,'recommendPoiInfo']],[[2,'!'],[[6],[[7],[3,'elements']],[3,'endLatitude']]]])
Z([[7],[3,'estimate']])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'estimate']],[3,'success']],[[6],[[7],[3,'estimate']],[3,'distance']]],[[6],[[7],[3,'estimate']],[3,'timeTxt']]])
Z([[7],[3,'isJieSong']])
Z(z[42])
Z([[8],'tipList',[[7],[3,'conponList']]])
Z([3,'coupon-tips'])
Z(z[25])
Z([[7],[3,'txt']])
Z([3,'input-box'])
Z([3,'input-content'])
Z([a,[3,'c-input '],[[7],[3,'light']],[3,' flight-header target-location']])
Z([3,'inp'])
Z([[7],[3,'title']])
Z([[7],[3,'raiseCardImg']])
Z([[7],[3,'hint']])
Z([3,'quickSelect'])
Z([3,'quick-address pnone'])
Z([[6],[[7],[3,'quickChoose']],[3,'list']])
Z(z[35])
Z([a,[3,'selection-item  set-point c333 fz22 pauto '],[[2,'?:'],[[2,'==='],[[7],[3,'title']],[[2,'||'],[[2,'||'],[[6],[[7],[3,'item']],[3,'alias']],[[6],[[7],[3,'item']],[3,'name']]],[[6],[[7],[3,'item']],[3,'cName']]]],[1,'quick-active'],[1,'']]])
Z([[6],[[7],[3,'quickChoose']],[3,'chint']])
Z([[2,'?:'],[[6],[[7],[3,'quickChoose']],[3,'parseType']],[[12],[[6],[[7],[3,'parse']],[3,'chooseRec']],[[5],[[5],[[7],[3,'item']]],[[6],[[7],[3,'quickChoose']],[3,'parseType']]]],[[12],[[6],[[7],[3,'parse']],[3,'chooseHistory']],[[5],[[7],[3,'item']]]]])
Z([[6],[[7],[3,'quickChoose']],[3,'meetTrain']])
Z([[7],[3,'item']])
Z([[6],[[7],[3,'quickChoose']],[3,'parseType']])
Z([[6],[[7],[3,'quickChoose']],[3,'type']])
Z([3,'qk'])
Z(z[63])
Z([[6],[[7],[3,'item']],[3,'icon']])
Z([[7],[3,'timeTips']])
Z(z[22])
Z(z[53])
Z(z[54])
Z(z[55])
Z(z[56])
Z(z[57])
Z(z[35])
Z([a,z[59][1],z[59][2]])
Z(z[60])
Z(z[61])
Z(z[62])
Z(z[63])
Z(z[64])
Z(z[65])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'item']],[3,'icon']]],[1,'padding-right: 10rpx']])
Z(z[68])
Z(z[68])
Z(z[69])
Z(z[30])
Z(z[49])
Z([3,'input-wrapper input-wrapper-end'])
Z(z[53])
Z(z[54])
Z([3,'handleScroll'])
Z([3,'quick-selection'])
Z([[2,'!'],[[7],[3,'isIphone']]])
Z([1,100])
Z([3,'1'])
Z([1,false])
Z([[2,'?:'],[[2,'&&'],[[6],[[7],[3,'quickChoose']],[3,'list']],[[6],[[6],[[7],[3,'quickChoose']],[3,'list']],[3,'length']]],[1,''],[1,'max-height:0px;margin: 0 0 0 0;']])
Z(z[96])
Z(z[55])
Z(z[56])
Z([3,'quick-address-content'])
Z(z[57])
Z(z[35])
Z(z[68])
Z(z[69])
Z(z[45])
Z([[6],[[7],[3,'tipList']],[3,'length']])
Z([3,'toSea'])
Z([3,'safeC-wrap'])
Z([3,'jiesong'])
Z([[7],[3,'tipList']])
Z(z[35])
Z([[6],[[7],[3,'item']],[3,'txt']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_5=true;
var x=['./pages/index/module/business/infoSelecter/infoSelecter.wxml','../../template/addressSelect.wxml'];d_[x[0]]={}
d_[x[0]]["my-trip-entry"]=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
var b=x[0]+':my-trip-entry'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/module/business/infoSelecter/infoSelecter.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,47,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["input-box"]=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
var b=x[0]+':input-box'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/module/business/infoSelecter/infoSelecter.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',49,e,s,gg)
var fE=_mz(z,'view',['class',50,'mark:vf',1,'mark:vl',2],[],e,s,gg)
var cF=_v()
_(fE,cF)
if(_oz(z,53,e,s,gg)){cF.wxVkey=1
}
cF.wxXCkey=1
_(oB,fE)
var xC=_v()
_(oB,xC)
if(_oz(z,54,e,s,gg)){xC.wxVkey=1
}
var hG=_mz(z,'view',['catchtap',55,'class',1],[],e,s,gg)
var oH=_v()
_(hG,oH)
var cI=function(lK,oJ,aL,gg){
var eN=_mz(z,'view',['class',59,'data-chint',1,'data-info',2,'data-meettrain',3,'data-oinfo',4,'data-parsetype',5,'data-type',6,'mark:vf',7,'mark:vl',8],[],lK,oJ,gg)
var bO=_v()
_(eN,bO)
if(_oz(z,68,lK,oJ,gg)){bO.wxVkey=1
}
bO.wxXCkey=1
_(aL,eN)
return aL
}
oH.wxXCkey=2
_2z(z,57,cI,e,s,gg,oH,'item','index','index')
_(oB,hG)
var oD=_v()
_(oB,oD)
if(_oz(z,69,e,s,gg)){oD.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["input-box-start"]=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
var b=x[0]+':input-box-start'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/module/business/infoSelecter/infoSelecter.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_n('view')
var xC=_v()
_(oB,xC)
if(_oz(z,71,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,72,e,s,gg)){oD.wxVkey=1
}
var cF=_mz(z,'view',['catchtap',73,'class',1],[],e,s,gg)
var hG=_v()
_(cF,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_mz(z,'view',['class',77,'data-chint',1,'data-info',2,'data-meettrain',3,'data-oinfo',4,'data-parsetype',5,'data-type',6,'style',7],[],oJ,cI,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,85,oJ,cI,gg)){eN.wxVkey=1
}
var bO=_v()
_(tM,bO)
if(_oz(z,86,oJ,cI,gg)){bO.wxVkey=1
}
eN.wxXCkey=1
bO.wxXCkey=1
_(lK,tM)
return lK
}
hG.wxXCkey=2
_2z(z,75,oH,e,s,gg,hG,'item','index','index')
_(oB,cF)
var fE=_v()
_(oB,fE)
if(_oz(z,87,e,s,gg)){fE.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["input-box-end"]=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
var b=x[0]+':input-box-end'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/module/business/infoSelecter/infoSelecter.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',89,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',90,e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,91,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(oD,cF)
if(_oz(z,92,e,s,gg)){cF.wxVkey=1
}
fE.wxXCkey=1
cF.wxXCkey=1
_(oB,oD)
var hG=_mz(z,'scroll-view',['bindscroll',93,'class',1,'enhanced',2,'lowerThreshold',3,'scrollX',4,'showScrollbar',5,'style',6,'upperThreshold',7],[],e,s,gg)
var oH=_mz(z,'view',['catchtap',101,'class',1,'id',2],[],e,s,gg)
var cI=_v()
_(oH,cI)
var oJ=function(aL,lK,tM,gg){
var bO=_v()
_(tM,bO)
if(_oz(z,106,aL,lK,gg)){bO.wxVkey=1
}
bO.wxXCkey=1
return tM
}
cI.wxXCkey=2
_2z(z,104,oJ,e,s,gg,cI,'item','index','index')
_(hG,oH)
_(oB,hG)
var xC=_v()
_(oB,xC)
if(_oz(z,107,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["coupon-tips"]=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
var b=x[0]+':coupon-tips'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/module/business/infoSelecter/infoSelecter.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,109,e,s,gg)){oB.wxVkey=1
var xC=_mz(z,'view',['bindtap',110,'class',1,'data-type',2],[],e,s,gg)
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
if(_oz(z,115,hG,cF,gg)){oJ.wxVkey=1
}
oJ.wxXCkey=1
return oH
}
oD.wxXCkey=2
_2z(z,113,fE,e,s,gg,oD,'item','index','index')
_(oB,xC)
}
else{oB.wxVkey=2
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
var oXB=e_[x[0]].i
_ai(oXB,x[1],e_,x[0],4,2)
var fYB=_n('view')
_rz(z,fYB,'class',0,e,s,gg)
var o2B=_v()
_(fYB,o2B)
var c3B=_oz(z,2,e,s,gg)
var o4B=_gd(x[0],c3B,e_,d_)
if(o4B){
var l5B=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
o2B.wxXCkey=3
o4B(l5B,l5B,o2B,gg)
gg.f=cur_globalf
}
else _w(c3B,x[0],5,52)
var a6B=_n('view')
_rz(z,a6B,'class',3,e,s,gg)
var t7B=_v()
_(a6B,t7B)
if(_oz(z,4,e,s,gg)){t7B.wxVkey=1
var b9B=_mz(z,'pickup-time',['adjustTenMin',5,'bind:close',1,'bind:comfirm',2,'bind:open',3,'bind:update',4,'bindtap',5,'class',6,'customTime',7,'defaultDate',8,'initDate',9,'isHome',10,'manual',11,'show',12],[],e,s,gg)
_(t7B,b9B)
}
var o0B=_mz(z,'view',['bindtap',18,'class',1,'data-fromCar',2],[],e,s,gg)
var oBC=_v()
_(o0B,oBC)
var fCC=_oz(z,22,e,s,gg)
var cDC=_gd(x[0],fCC,e_,d_)
if(cDC){
var hEC=_1z(z,21,e,s,gg) || {}
var cur_globalf=gg.f
oBC.wxXCkey=3
cDC(hEC,hEC,oBC,gg)
gg.f=cur_globalf
}
else _w(fCC,x[0],5,931)
var xAC=_v()
_(o0B,xAC)
if(_oz(z,23,e,s,gg)){xAC.wxVkey=1
var oFC=_v()
_(xAC,oFC)
var cGC=_oz(z,25,e,s,gg)
var oHC=_gd(x[0],cGC,e_,d_)
if(oHC){
var lIC=_1z(z,24,e,s,gg) || {}
var cur_globalf=gg.f
oFC.wxXCkey=3
oHC(lIC,lIC,oFC,gg)
gg.f=cur_globalf
}
else _w(cGC,x[0],5,1180)
}
xAC.wxXCkey=1
_(a6B,o0B)
var aJC=_mz(z,'view',['catchtap',26,'class',1,'style',2],[],e,s,gg)
var bMC=_v()
_(aJC,bMC)
var oNC=_oz(z,30,e,s,gg)
var xOC=_gd(x[0],oNC,e_,d_)
if(xOC){
var oPC=_1z(z,29,e,s,gg) || {}
var cur_globalf=gg.f
bMC.wxXCkey=3
xOC(oPC,oPC,bMC,gg)
gg.f=cur_globalf
}
else _w(oNC,x[0],5,1399)
var tKC=_v()
_(aJC,tKC)
if(_oz(z,31,e,s,gg)){tKC.wxVkey=1
var fQC=_v()
_(tKC,fQC)
var cRC=_oz(z,33,e,s,gg)
var hSC=_gd(x[0],cRC,e_,d_)
if(hSC){
var oTC=_1z(z,32,e,s,gg) || {}
var cur_globalf=gg.f
fQC.wxXCkey=3
hSC(oTC,oTC,fQC,gg)
gg.f=cur_globalf
}
else _w(cRC,x[0],5,1626)
}
var cUC=_v()
_(aJC,cUC)
var oVC=function(aXC,lWC,tYC,gg){
var b1C=_v()
_(tYC,b1C)
if(_oz(z,36,aXC,lWC,gg)){b1C.wxVkey=1
var o2C=_v()
_(b1C,o2C)
if(_oz(z,37,aXC,lWC,gg)){o2C.wxVkey=1
}
o2C.wxXCkey=1
}
else{b1C.wxVkey=2
var x3C=_v()
_(b1C,x3C)
if(_oz(z,38,aXC,lWC,gg)){x3C.wxVkey=1
}
x3C.wxXCkey=1
}
b1C.wxXCkey=1
return tYC
}
cUC.wxXCkey=2
_2z(z,34,oVC,e,s,gg,cUC,'item','index','index')
var eLC=_v()
_(aJC,eLC)
if(_oz(z,39,e,s,gg)){eLC.wxVkey=1
}
tKC.wxXCkey=1
eLC.wxXCkey=1
_(a6B,aJC)
var e8B=_v()
_(a6B,e8B)
if(_oz(z,40,e,s,gg)){e8B.wxVkey=1
var o4C=_v()
_(e8B,o4C)
if(_oz(z,41,e,s,gg)){o4C.wxVkey=1
}
o4C.wxXCkey=1
}
t7B.wxXCkey=1
t7B.wxXCkey=3
e8B.wxXCkey=1
_(fYB,a6B)
var cZB=_v()
_(fYB,cZB)
if(_oz(z,42,e,s,gg)){cZB.wxVkey=1
}
var h1B=_v()
_(fYB,h1B)
if(_oz(z,43,e,s,gg)){h1B.wxVkey=1
var f5C=_v()
_(h1B,f5C)
var c6C=_oz(z,45,e,s,gg)
var h7C=_gd(x[0],c6C,e_,d_)
if(h7C){
var o8C=_1z(z,44,e,s,gg) || {}
var cur_globalf=gg.f
f5C.wxXCkey=3
h7C(o8C,o8C,f5C,gg)
gg.f=cur_globalf
}
else _w(c6C,x[0],5,3188)
}
cZB.wxXCkey=1
h1B.wxXCkey=1
_(r,fYB)
oXB.pop()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[x[1]],ic:[]}
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/module/business/infoSelecter/infoSelecter.wxml'] = [$gwx_XC_5, './pages/index/module/business/infoSelecter/infoSelecter.wxml'];else __wxAppCode__['pages/index/module/business/infoSelecter/infoSelecter.wxml'] = $gwx_XC_5( './pages/index/module/business/infoSelecter/infoSelecter.wxml' );
	;__wxRoute = "pages/index/module/business/infoSelecter/infoSelecter";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/module/business/infoSelecter/infoSelecter.js";define("pages/index/module/business/infoSelecter/infoSelecter.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../../../@babel/runtime/helpers/interopRequireDefault");require("../../../../../@babel/runtime/helpers/Arrayincludes");var e=require("../../../../../@babel/runtime/helpers/objectSpread2"),r=require("../../../../../useCar/lib/reselect"),a=require("../../../../../useCar/store/index"),i=require("../../../../../useCar/common/common"),n=require("../../../../../useCar/config/index"),o=t(require("../../behaviors/commonLogic")),s=t(require("../../behaviors/trackEvent")),c=t(require("../../behaviors/couponTips")),d=require("../../../../../useCar/common/business"),u=t(require("./tapOperation")),h=t(require("./quickChoose")),l=require("../../../../../useCar/lib/nextTick"),m=require("../../../../../useCar/services/commonReqs"),p=(t(require("../../../../../utils/common")),t(require("../../../../../useCar/common/request"))),f=require("../../../../../useCar/common/locationUtil");Component(function(t,m,f,I,b,g){var _={},T={},y={subtab:"tabInfo.subtab",tabIndex:"tabInfo.tabIndex",currentTab:"tabInfo.currentTab",subtabIndex:"tabInfo.subtabIndex",__productId:"productId",productId:"productId",isQueryPrice:"queryPrice.show",subtabL:"tabInfo.subtab.length",bubbleicon:(0,r.createSelector)((function(){return n.kImgPrefix+"bubbleclose.png"})),elements:(0,r.createSelector)((function(t){return v(t.productId,t)}),(function(t){var e=_[_._pid];if(e&&t.startAddress&&t.endAddress&&!T.isPageHide&&!T.data.time&&11==T.__productId){var r=(t.startAddress!==e.startAddress||"poiSelect"===e.startSource)&&(!String(t.startSource).startsWith("map")||["mapPoiInfo","mapFence"].includes(t.startSource))&&"poiSelect"!==t.startSource,o=t.endAddress!==e.endAddress;(r||o)&&T.setData({showPicker:!0})}return(t=Object.assign(f(),f(1),n.emptyFlight,n.emptyTrain,g,t)).startAddress&&1==T.data.initTag&&(T.setData({initTag:2}),setTimeout((function(){a.store.dispatch({type:"locaiotnStartInfoData",payload:(0,i.filterParams)(t)})}),0)),(e&&e.startAddress!=t.startAddress||T.__productId!=_._pid||e&&e.useTime!=t.useTime)&&T.getRecommendPoi&&T.getRecommendPoi(t,T.__productId),t})),position:"common.position",__selectParamsHandle:(0,r.createSelector)((function(t){return t.productId}),(function(t){return(0,d.getReducerFor)(t)})),showTime:(0,r.createSelector)((function(t){return t.productId}),(function(t){return!(0,d.isNoShowTimePicker)(t)})),startPlaceholder:(0,r.createSelector)((function(t){return t.productId}),(function(t){return t.common.position}),(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={11:"从哪儿上车",12:"请选择接机航班",13:"请选择出发地",14:"请选择火车站",15:"请选择出发地"};return r[t]||(e.isFail?"定位失败,请输入上车地址":"定位中..")})),raiseCardImg:(0,r.createSelector)((function(t){return t.productId}),(function(t){return v(t.productId,t)}),(function(t,e){return 12==t&&"ticket"!==e._source&&e&&(e.tagImageUrl||"")})),endPlaceholder:(0,r.createSelector)((function(t){return t.productId}),(function(t){return{12:"请选择目的地",13:"请选择送机机场",14:"请选择目的地",15:"请选择火车站"}[t]||"您要去哪儿"})),isMeetAirport:(0,r.createSelector)((function(t){return t.productId}),(function(t){return t===n.kProductIds.MEET_AIRPORT})),myTripTxt:(0,r.createSelector)((function(t){return t.productId}),(function(t){return{start:{12:"我的航班",14:"我的车次"}[t]||"",end:{13:"我的航班",15:"我的车次"}[t]||""}})),showMyTripEntry:(0,r.createSelector)((function(t){return(t.unstartOrder.data.flightOrderList||[]).length}),(function(t){return(t.unstartOrder.data.trainOrderList||[]).length}),(function(t){return t.productId}),(function(t,e,r){return 12==r||13==r?t>1:(14==r||15==r)&&e>1})),__refid:"common.refid",imgCfg:(0,r.createSelector)((function(t){return t.eventImgConfig||{}}),(function(t){return t.productId}),(function(t,e){var r,a=19==e,i=function(e){return t[e]&&t[e].imgUrl||""};return{start:i(a?"key_3_1":"key_3_17"),end:i(a?"key_3_2":"key_3_18"),time:i(a?"":"key_3_19"),endTip:i(a||11==e?"key_all_Cardestinationchoose":""),textEndTip:(r=a||11==e?"key_all_Cardestinationchoose":"",t[r]&&t[r].imgName||"")}}))};function v(t,e){var r=e.train,a=e.airport,i=e.specialCar;return{11:i.choosedParams,12:a.meetChoosedParams,13:a.sendChoosedParams,14:r.meetChoosedParams,15:r.sendChoosedParams,19:i.choosedParams,80:i.choosedParams,130:i.choosedParams}[t]}function P(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.startAddress&&(a.store.getState().common.crossStartAddress||this.triggerEvent("elements",t))}function C(t){t.tabServiceTypeId||(t.tabServiceTypeId=19);var r=t.tabServiceTypeId,a=_[_._pid]||{};S.call(this,t,a),k.call(this,t,a),w.call(this,t,a,r),t.hasOwnProperty("delayDuration")&&this.$setData({initTime:t.delayDuration/10-1>>0}),_[r]=e({},t),_._pid=r,this.triggerEvent("elements",t)}function S(t,e){t.trainDepDate;var r=t.startCityId,a=t.endCityId,i=t.startAddress,n=(t.flightArrDate,t.startCityName),o=t.orderId,s=t.endCityName,c=(t.endAddress,t.tabServiceTypeId),d=t.forceUpdate;c=c||this.__productId;var u=_._pid!=c||d,h=a&&e.endCityId!=a&&a!=r,l=this._resetQuickChoose.bind(this);(h||u)&&l("quickChoose2Start"),(u||s&&h||i!=(e.startAddress||""))&&this.setEndQuick(c,s||n,a||r,o,t)}function k(t,e){var r=t.tabServiceTypeId,a=_._pid!=r;t.startLatitude!==e.startLatitude||a||(t.startAddress,e.startAddress)}function w(t,e,r){11!=r&&19!=r&&80!=r||this.$setData({estimate:!1})}return{behaviors:[o.default,s.default,u.default,h.default,c.default],properties:{isDrawer:Boolean,pageMode:{type:Number,value:0},fromCar:String},data:{detailExports:{pois:[],station:""},isIphone:(0,i.isIphoneIos)(),clickType:"",conponList:[],time:"",showPicker:!1,showLeftShadow:!1,showRightShadow:!0,trainNoticeInfo:{},showBubble:!1,initTag:1,recommendPoiInfo:null,showUnusedCouponRecommend:!0},pageLifetimes:{show:function(){this.isPageHide=!1,S.call(this,e(e({},this.data.elements),{},{forceUpdate:!0}),{})},hide:function(){this.isPageHide=!0}},created:function(){this.$setData=l.setState,_={}},attached:function(){var t=this;T=this,this._bindStateCheck(),Promise.resolve().then((function(){var e=t.data.productId;P.call(t,t.data.elements,e)})),C.call(this,this.data.elements||{}),(0,a.bindState)(this,{conponList:this._createTipsList()})},detached:function(){(0,a.unbindState)(this),_={}},methods:{getIndexIns:function(){return(0,i.getCurPage)().selectComponent("#car")},setPoistionPost:function(){this.setData({initTag:1})},getPageVm:function(){return wx.yc_carIndexIns},_bindStateCheck:function(){this.bindAlready||((0,a.bindState)(this,y),this.bindAlready=!0)},tapSubTab:function(t){var e=t.currentTarget.dataset.token;this.setData({clickType:e});var r=(0,i.evtData)(t),o=this.__productId;(0,i.traceEv)("小tab切换","^".concat("小tab切换","^").concat(this.id2CnName(o),"^").concat(this.id2CnName(n.kProductIds[r.token]),"^").concat(this.__refid,"^"),this.getEAction(o));var s="顺风车"==this.id2CnName(n.kProductIds[r.token])?"^页面加载^".concat(this.id2CnName(n.kProductIds[r.token]),"^").concat(this.__refid,"^A|20210906_carindexstartend"):"^页面加载^".concat(this.id2CnName(n.kProductIds[r.token]),"^").concat(this.__refid,"^");(0,i.traceEv)("页面加载",s,this.getEAction(o)),this.syncProductIdForToken(r.token),a.store.dispatch({type:a.actions.SET_TABINDEX,payload:{currentTab:r.token}})},clickTest:function(){},onUpdateTime:function(t){var e=t.detail,r=e&&e.useTime,a=e&&e.time;r&&r!=this.data.elements.useTime&&this.setParamsTool({useTime:r,chgUseTime:!!e.userChg},this.__productId),this.setData({time:a})},noJump:function(){},flushPoi:S,handleScroll:function(t){var e=this,r=0;this.createSelectorQuery().select("#scroll-wrapper").boundingClientRect((function(a){r=a.width,t.detail.scrollLeft>50?e.setData({showLeftShadow:!0}):e.setData({showLeftShadow:!1}),t.detail.scrollWidth-t.detail.scrollLeft-r<50?e.setData({showRightShadow:!1}):e.setData({showRightShadow:!0})})).exec()},handleClose:function(){this.setData({showPicker:!1})},handleOpen:function(){this.setData({showPicker:!0})},getRecommendPoi:function(t,e){var r=this;if([11,19,80].includes(e)){var a=t.startAddress,o=t.endAddress,s=t.startLatitude,c=t.startLongitude,d=t.endLatitude,u=t.endLongitude,h=t.startCityName,l=t.endCityName,m=t.useTime;p.default.post("car-inter-h5/traffic/api/map/recommend/tips/",{productId:this.__productId,startName:a,startTime:m,startLon:c,startLat:s,startCityName:h,endName:o,endTime:"",endLon:u,endLat:d,endCityName:l}).then((function(t){if(t&&200==t.code&&t.data&&t.data.name){var e=t.data,a=e.city_id,o=e.city_name,s=e.lat,c=e.lon,d=e.name;r.setData({recommendPoiInfo:{adcode:"",address:d,airportCode:"",cityId:a,cityName:o,globalFlag:0,location:"".concat(c,",").concat(s),name:d}}),(0,i.traceEv)("推荐下车点曝光","^推荐下车点曝光^".concat(n.kProductNameMap[r.data.productId],"^").concat(d,"^").concat(c,"^").concat(s,"^").concat(r.__refid),"打车首页")}else r.setData({recommendPoiInfo:null})}))}},stateWillChanged:function(t){null!=t.currentTab&&t.currentTab!==this.data.currentTab&&(this._lastTab=this.data.currentTab)},stateDidChanged:function(t){var r=t.productId,a=this.data.elements;if(!a.startLongitude&&t.position&&t.position.lng&&t.position.address){var n=(0,i.location2Param)(t.position),o=(0,d.createTargetParam)(n,this.__productId,"start");this.setParamsTool(o,this.__productId)}r&&a.tcServiceTypeId!=r&&this.setParamsTool(Object.assign({},a,e(e({tcServiceTypeId:r,tabServiceTypeId:r},f()),{},{useTime:""})),r),t.currentTab===this._lastTab&&void 0===t.elements||C.call(this,a)}}}}(i.newObjWithKeys,f.getLocationInfo,d.emptyParams,wx.tcyc.eventChannel,m.flightTrainList,n.emptyOther));
},{isPage:false,isComponent:true,currentFile:'pages/index/module/business/infoSelecter/infoSelecter.js'});require("pages/index/module/business/infoSelecter/infoSelecter.js");$gwx_XC_6=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'productId']],[1,19]],[[2,'=='],[[7],[3,'productId']],[1,11]]],[[2,'=='],[[7],[3,'productId']],[1,80]]])
Z([3,'closePersonPopup'])
Z([1,true])
Z([[7],[3,'isShowPersonPopup']])
Z([3,'person-popup'])
Z([3,'content'])
Z([[7],[3,'menuShowLoading']])
Z([[7],[3,'autoplay']])
Z([3,'swiperBindchange'])
Z([[7],[3,'circular']])
Z([3,'banner'])
Z([[7],[3,'current']])
Z([[7],[3,'disableSwipeBack']])
Z([[7],[3,'duration']])
Z([[7],[3,'easingFunction']])
Z([[7],[3,'indicatorActiveColor']])
Z([[7],[3,'indicatorColor']])
Z([[7],[3,'indicatorDots']])
Z([[7],[3,'interval']])
Z([a,[3,'height:'],[[7],[3,'Height']]])
Z([3,'stopTouchMove'])
Z([3,'contact-box contact-paddB'])
Z([[7],[3,'menuList']])
Z([3,'index'])
Z([3,'tapMenuListItem'])
Z([a,[3,'list-item dfsb dfm df '],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'token']],[1,'privacySetting']],[1,'pt31'],[1,'']],[3,' '],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'token']],[1,'volume']],[1,'list-item-volume'],[1,'']]])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z(z[24])
Z([3,'c14 t30 textLeft35 menu-text'])
Z(z[27])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'item']],[3,'token']],[1,'coupon']],[[7],[3,'showRedDot']]])
Z([[6],[[7],[3,'activityList']],[3,'length']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_6=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_6=true;
var x=['./pages/index/module/business/menu/menu.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_6_1()
var o0C=_v()
_(r,o0C)
if(_oz(z,0,e,s,gg)){o0C.wxVkey=1
}
var lAD=_mz(z,'action-sheet',['bindclose',1,'closeOther',1,'showDialog',2],[],e,s,gg)
var aBD=_mz(z,'view',['class',4,'slot',1],[],e,s,gg)
var tCD=_n('view')
var eDD=_v()
_(tCD,eDD)
if(_oz(z,6,e,s,gg)){eDD.wxVkey=1
var bED=_mz(z,'swiper',['autoplay',7,'bindchange',1,'circular',2,'class',3,'current',4,'disableSwipeBack',5,'duration',6,'easingFunction',7,'indicatorActiveColor',8,'indicatorColor',9,'indicatorDots',10,'interval',11,'style',12],[],e,s,gg)
var oFD=_n('swiper-item')
_rz(z,oFD,'catchtouchmove',20,e,s,gg)
var xGD=_n('view')
_rz(z,xGD,'class',21,e,s,gg)
var fID=_v()
_(xGD,fID)
var cJD=function(oLD,hKD,cMD,gg){
var lOD=_mz(z,'view',['catch:tap',24,'class',1,'data-index',2,'data-item',3],[],oLD,hKD,gg)
var aPD=_mz(z,'view',['catch:tap',28,'class',1,'data-item',2],[],oLD,hKD,gg)
var tQD=_v()
_(aPD,tQD)
if(_oz(z,31,oLD,hKD,gg)){tQD.wxVkey=1
}
tQD.wxXCkey=1
_(lOD,aPD)
_(cMD,lOD)
return cMD
}
fID.wxXCkey=2
_2z(z,22,cJD,e,s,gg,fID,'item','index','index')
var oHD=_v()
_(xGD,oHD)
if(_oz(z,32,e,s,gg)){oHD.wxVkey=1
}
oHD.wxXCkey=1
_(oFD,xGD)
_(bED,oFD)
_(eDD,bED)
}
else{eDD.wxVkey=2
}
eDD.wxXCkey=1
_(aBD,tCD)
_(lAD,aBD)
_(r,lAD)
o0C.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_6();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/module/business/menu/menu.wxml'] = [$gwx_XC_6, './pages/index/module/business/menu/menu.wxml'];else __wxAppCode__['pages/index/module/business/menu/menu.wxml'] = $gwx_XC_6( './pages/index/module/business/menu/menu.wxml' );
	;__wxRoute = "pages/index/module/business/menu/menu";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/module/business/menu/menu.js";define("pages/index/module/business/menu/menu.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../../@babel/runtime/helpers/interopRequireWildcard"),t=require("../../../../../@babel/runtime/helpers/interopRequireDefault"),n=require("../../../../../@babel/runtime/helpers/objectSpread2"),i=t(require("../../behaviors/trackEvent")),o=t(require("../../behaviors/commonLogic")),r=require("../../../../../useCar/lib/nextTick.js"),a=t(require("../../behaviors/menu")),c=require("../../../../../useCar/config/index"),s=require("../../../../../useCar/common/common"),u=require("../../../../../useCar/store/index"),p=e(require("../../../../../useCar/util/getChannelUrl")),l=t(require("../../../../../useCar/common/request")),d="https://file.40017.cn/groundtrafficstage/usecar/distributioncomponents/img/";Component({behaviors:[i.default,o.default,a.default],properties:{drawerTest:{type:String,value:"drawer"},showRedDot:{type:Boolean,value:!1}},data:{personPopupSub:!1,isIphoneX:!1,activityList:[],menuList:[{imgUrl:d+"centermenu-icon-0.png",name:"我的订单",token:"orderList"},{imgUrl:d+"centermenu-icon-1.png",name:"申请发票",token:"invoiced",jumpUrl:"https://wx.17u.cn/post/home/index?url=https://wx.17u.cn/post/@@/tabIndex/12?tab=0"},{imgUrl:d+"centermenu-icon-2.png",name:"优惠券",token:"coupon",jumpUrl:"useCar/coupon/coupon"},{imgUrl:d+"centermenu-icon-3.png",name:"联系客服",token:"service"},{imgUrl:d+"centermenu-icon-4.png",name:"意见反馈",token:"feedback",jumpUrl:"https://wx.17u.cn/kefu/#/suggestionNew/0/180010/34/0"},{imgUrl:"".concat(d,"icon_system@3x.png"),name:"系统权限设置",token:"sysSetting"},{imgUrl:"".concat(d,"icon_privacy@3x.png"),jumpUrl:"/useCar/privacySetting/privacySetting",name:"隐私设置",token:"privacySetting"}],serviceList:[{imgUrl:d+"menu_cust.png",title:"在线客服",name:"在线客服",title2:"及时高效，快速解决您的问题",token:"online"},{imgUrl:d+"menu-iphone.png",title:"电话客服",name:"电话客服",title2:"拨打0512-81669469",token:"phone"}],swiper_height:5,imgUrls:["https://file.40017.cn/groundtrafficstage/usecar/distributioncomponents/img/menu-icon-close.png","https://file.40017.cn/groundtrafficstage/usecar/distributioncomponents/img/menu-icon-close.png"],indicatorDots:!1,indicatorColor:"white",indicatorActiveColor:"#D75B1B",autoplay:!1,circular:!1,easingFunction:"easeInOutCubic",duration:300,disableSwipeBack:!0,showRedDot:!1},attached:function(){var e=this;this.setData({isIphoneX:(0,s.isIphonex)()}),(0,u.bindState)(this,{productId:"productId",common:"common"}),wx.tcyc.eventChannel.hub.triglePersonMenu&&delete wx.tcyc.eventChannel.hub.triglePersonMenu,wx.tcyc.eventChannel.on("triglePersonMenu",(function(){e.showPersonPopup()})),this.triggerEvent("regist",{},{}),this.$setData=r.setState.bind(this)},detached:function(){(0,u.unbindState)(this)},methods:{giftBoxClick:function(){var e=this.data,t=e.productId,n=e.common;this.traceEvByPage("活动集合入口点击","^".concat("活动集合入口点击","^").concat(t,"^").concat(n.refId,"^"),"打车首页");var i="".concat(c.kCarUrlH5,"activityPage"),o=u.store.getState().common.activityInfo,r={activityIcon:o.activityIcon,activitys:encodeURIComponent(JSON.stringify(o.activitys))};(0,s.toWebview)(i,r)},goActivitye:function(e){var t=(0,s.evtData)(e),n=t.item,i=t.index;wx.navigateTo({url:n.url});this.traceEvByPage("运营位点击","^".concat("运营位点击","^").concat(n.name,"^").concat(i,"^"),"个人中心弹窗")},stopTouchMove:function(){return!1},menuLeftClick:function(){this.setData({current:0})},swiperBindchange:function(e){0==e.detail.current?this.setData({style_img:"opacity: 0;"}):this.setData({style_img:"opacity: 1;"})},closePersonPopup:function(){this.setData({isShowPersonPopup:!1,style_mask:"width: 0%;background: rgba(0, 0, 0, 0);"})},tapMenuListItem:function(e){var t=this,n=(0,s.evtData)(e).item;if(n){switch(n.token){case"orderList":wx.navigateTo({url:(0,p.default)(p.ORDER_LIST)});break;case"invoiced":this.openUrl(n);break;case"coupon":wx.navigateTo({url:"/useCar/coupon/coupon"}),l.default.post(c.kCarApiGateWay+"quickcar/coupon/CouponRedDotClear").then((function(e){t.triggerEvent("onRedDotClear")}));break;case"feedback":this.openUrl(n);break;case"sysSetting":wx.openSetting();break;case"privacySetting":wx.navigateTo({url:"/useCar/privacySetting/privacySetting"})}"service"==n.token?this.setData({current:1}):this.closePersonPopup();this.traceEvByPage("业务类型点击","^".concat("业务类型点击","^").concat(n.name,"^"),"个人中心弹窗")}},openUrl:function(e){if(e.appId){var t=(0,p.default)(p.WEBVIEW,!1,{wxrefid:1732463517,needwrap:1,timestamp:Date.now(),src:encodeURIComponent(e.jumpUrl)});(0,s.openUrl)({jumpUrl:t,appId:e.appId,embedded:e.embedded})}else(0,s.openUrl)({jumpUrl:e.jumpUrl,needwrap:1})},tapServiceListItem:function(e){var t=(0,s.evtData)(e).item;"online"==t.token?this.toOnlineService():this.callServicePhone();this.traceEvByPage("客服类型点击","^".concat("客服类型点击","^").concat(t.name,"^"),"联系客服弹窗")},toOnlineService:function(){this.openUrl(n(n({},this.data.serviceList[0]),{},{jumpUrl:"https://livechat.ly.com/out/chat?ProductId=34&sourcetype=16&pageid=34010"}))},callServicePhone:function(e){wx.makePhoneCall({phoneNumber:"051281669469"})},resetLocation:function(e){var t=[c.kProductIds.CAR_LATER,c.kProductIds.CAR_NOW,c.kProductIds.SEND_AIRPORT,c.kProductIds.SEND_TRAIN];e=e||u.store.getState().productId;var n=(0,s.includesFor)(t,e);this.traceEvByPage("自动定位点击","^".concat("自动定位点击","^点击^"),"大首页"),this._mapCenterForLocation=!n,this.triggerEvent("tapPos")},resetPos:function(){console.log("$$$ resetPos"),this.resetLocation(this.data.productId)},goAbout:function(){(0,s.toWebview)("".concat(c.kBaseUrl,"/ycpublic/about"))}}});
},{isPage:false,isComponent:true,currentFile:'pages/index/module/business/menu/menu.js'});require("pages/index/module/business/menu/menu.js");$gwx_XC_7=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'didWrap'])
Z(z[0])
Z([a,[3,'pr oh wrapper '],[[2,'?:'],[[7],[3,'isGray']],[1,'big-event-gray'],[1,'']]])
Z([3,'imd_regionChange'])
Z(z[3])
Z([a,[3,'map-container pa oh pageMode'],[[7],[3,'pageMode']],[3,' tab'],[[7],[3,'productId']]])
Z([3,'C_Map'])
Z([a,[3,'height: '],[[7],[3,'mapContainerHeight']]])
Z([[2,'&&'],[[2,'||'],[[2,'!'],[[7],[3,'mapPending']]],[[2,'==='],[[7],[3,'mapPending']],[1,3]]],[[6],[[7],[3,'poiNameLines']],[1,0]]])
Z([3,'onRecPoiMarkerClick'])
Z([a,[3,'recPoiMarker df pa fz24 pending'],[[7],[3,'mapPending']],[3,' l'],[[6],[[7],[3,'poiNameLines']],[3,'length']],[3,' m'],[[2,'?:'],[[7],[3,'hint']],[1,'1'],[1,'']]])
Z([[6],[[7],[3,'poiNameLines']],[1,1]])
Z([[7],[3,'hint']])
Z([a,[3,'scrollView '],[[2,'?:'],[[7],[3,'isJieSong']],[1,'jiesong'],[1,'car']]])
Z([[7],[3,'scrollTop']])
Z([1,true])
Z([[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'productId']],[1,19]],[[2,'=='],[[7],[3,'productId']],[1,11]]],[[2,'=='],[[7],[3,'productId']],[1,80]]])
Z([3,'safe-comp'])
Z([3,'safeComp'])
Z(z[15])
Z([3,'smallHome'])
Z([[7],[3,'productTypeStr']])
Z([[7],[3,'safeStyle']])
Z([3,'onRedDotClear'])
Z([3,'registeredMenu'])
Z([3,'resetLocation'])
Z([3,'menu'])
Z([3,'Menu'])
Z([[7],[3,'showRedDot']])
Z([3,'container drawer'])
Z([[2,'?:'],[[7],[3,'isJieSong']],[1,'height: auto'],[1,'']])
Z([3,'business-area pr'])
Z([3,'W_BOT'])
Z([[2,'?:'],[[7],[3,'isJieSong']],[1,'padding: 0 16rpx'],[1,'']])
Z([3,'indexAnnoShow'])
Z([3,'onAnnounceStatus'])
Z([3,'announcement'])
Z([3,'indexannonce'])
Z([[7],[3,'information']])
Z(z[20])
Z(z[21])
Z([a,[3,'business-container pr bg1 '],[[2,'&&'],[[7],[3,'hasDrawerContent']],[[2,'?:'],[[2,'&&'],[[7],[3,'isIphoneX']],[[2,'!'],[[7],[3,'isJieSong']]]],[1,'hasctxIphonex'],[1,'hasctx']]]])
Z([3,'C_Bus'])
Z(z[5][4])
Z([3,'onElements'])
Z([3,'onRecData'])
Z([[7],[3,'fromCar']])
Z([3,'IndexSelecter'])
Z([[7],[3,'productIdReady']])
Z(z[5][4])
Z([[2,'&&'],[[7],[3,'productId']],[[6],[[7],[3,'homeBannerInfo']],[3,'bgImg']]])
Z([[7],[3,'homeBannerInfo']])
Z([[7],[3,'isJieSong']])
Z(z[18])
Z(z[52])
Z(z[20])
Z(z[21])
Z([3,'margin: 0 auto'])
Z(z[52])
Z(z[52])
Z([3,'pa'])
Z([[7],[3,'pageSource']])
Z([3,'onRecPaneAct'])
Z([[7],[3,'isAlertRec']])
Z(z[5][2])
Z([[7],[3,'recData']])
Z([3,'onTiktokPopupClose'])
Z([3,'tiktok'])
Z([[7],[3,'showTiktokPopup']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_7=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_7=true;
var x=['./pages/index/module/index.wxml','./template/addressSelect.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_7_1()
var bSD=e_[x[0]].i
_ai(bSD,x[1],e_,x[0],2,2)
var oTD=_mz(z,'view',['bindtap',0,'bindtouchend',1,'class',1],[],e,s,gg)
var xUD=_mz(z,'view',['bindtouchend',3,'bindtouchstart',1,'class',2,'id',3,'style',4],[],e,s,gg)
var oVD=_v()
_(xUD,oVD)
if(_oz(z,8,e,s,gg)){oVD.wxVkey=1
var fWD=_mz(z,'view',['bindtap',9,'class',1],[],e,s,gg)
var cXD=_n('view')
var hYD=_v()
_(cXD,hYD)
if(_oz(z,11,e,s,gg)){hYD.wxVkey=1
}
var oZD=_v()
_(cXD,oZD)
if(_oz(z,12,e,s,gg)){oZD.wxVkey=1
}
hYD.wxXCkey=1
oZD.wxXCkey=1
_(fWD,cXD)
_(oVD,fWD)
}
oVD.wxXCkey=1
_(oTD,xUD)
var c1D=_mz(z,'view',['class',13,'scrollTop',1,'scrollY',2],[],e,s,gg)
var o2D=_v()
_(c1D,o2D)
if(_oz(z,16,e,s,gg)){o2D.wxVkey=1
var l3D=_mz(z,'safe-comp',['class',17,'id',1,'isSafeShow',2,'pageType',3,'productType',4,'safeStyle',5],[],e,s,gg)
_(o2D,l3D)
}
var a4D=_mz(z,'menu',['bind:onRedDotClear',23,'bind:regist',1,'bind:tapPos',2,'class',3,'id',4,'showRedDot',5],[],e,s,gg)
_(c1D,a4D)
var t5D=_mz(z,'view',['class',29,'style',1],[],e,s,gg)
var x9D=_mz(z,'view',['class',31,'id',1,'style',2],[],e,s,gg)
var o0D=_mz(z,'announcement',['enable',-1,'isIndex',-1,'bind:display',34,'bind:status',1,'class',2,'id',3,'information',4,'pageType',5,'productType',6],[],e,s,gg)
_(x9D,o0D)
var fAE=_mz(z,'view',['class',41,'id',1],[],e,s,gg)
var cBE=_v()
_(fAE,cBE)
if(_oz(z,43,e,s,gg)){cBE.wxVkey=1
var oDE=_mz(z,'info-selecter',['bind:elements',44,'bind:recData',1,'fromCar',2,'id',3,'pidReady',4,'productId',5],[],e,s,gg)
_(cBE,oDE)
}
var hCE=_v()
_(fAE,hCE)
if(_oz(z,50,e,s,gg)){hCE.wxVkey=1
var cEE=_n('home-banner')
_rz(z,cEE,'homeBannerInfo',51,e,s,gg)
_(hCE,cEE)
}
var oFE=_n('operation-enter')
_(fAE,oFE)
cBE.wxXCkey=1
cBE.wxXCkey=3
hCE.wxXCkey=1
hCE.wxXCkey=3
_(x9D,fAE)
_(t5D,x9D)
var e6D=_v()
_(t5D,e6D)
if(_oz(z,52,e,s,gg)){e6D.wxVkey=1
var lGE=_mz(z,'safe-comp',['id',53,'isJieSong',1,'pageType',2,'productType',3,'style',4],[],e,s,gg)
_(e6D,lGE)
}
var b7D=_v()
_(t5D,b7D)
if(_oz(z,58,e,s,gg)){b7D.wxVkey=1
}
var o8D=_v()
_(t5D,o8D)
if(_oz(z,59,e,s,gg)){o8D.wxVkey=1
}
e6D.wxXCkey=1
e6D.wxXCkey=3
b7D.wxXCkey=1
o8D.wxXCkey=1
_(c1D,t5D)
o2D.wxXCkey=1
o2D.wxXCkey=3
_(oTD,c1D)
var aHE=_mz(z,'activity-popup',['class',60,'pageSource',1],[],e,s,gg)
_(oTD,aHE)
var tIE=_mz(z,'recpoi-selectpane',['bind:action',62,'isAlertRec',1,'isShow',2,'recData',3],[],e,s,gg)
_(oTD,tIE)
var eJE=_mz(z,'tiktok-popup',['bind:close',66,'id',1,'showTiktokPopup',2],[],e,s,gg)
_(oTD,eJE)
_(r,oTD)
bSD.pop()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[x[1]],ic:[]}
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_7();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/module/index.wxml'] = [$gwx_XC_7, './pages/index/module/index.wxml'];else __wxAppCode__['pages/index/module/index.wxml'] = $gwx_XC_7( './pages/index/module/index.wxml' );
	;__wxRoute = "pages/index/module/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/module/index.js";define("pages/index/module/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../@babel/runtime/helpers/interopRequireDefault"),e=t(require("../../../@babel/runtime/regenerator")),a=require("../../../@babel/runtime/helpers/asyncToGenerator"),i=require("../../../@babel/runtime/helpers/objectSpread2"),n=require("../../../@babel/runtime/helpers/toConsumableArray"),o=t(require("./config/baseData")),r=t(require("./behaviors/map")),s=t(require("./behaviors/main")),c=t(require("./behaviors/trackEvent")),d=t(require("./behaviors/menu")),u=t(require("./business/infoSelecter/tapOperation")),h=t(require("../../../useCar/common/cbehaviors")),l=require("../../../useCar/store/index"),p=require("../../../useCar/lib/nextTick"),g=require("../../../useCar/config/index"),f=require("../../../useCar/common/common"),m=require("../../../useCar/common/init"),v=require("../../../useCar/common/business"),y=require("../../../useCar/lib/reselect"),b=require("../../../useCar/common/impact"),C=require("../../../useCar/util/tool");require("../../../useCar/util/logger");var S=require("../../../useCar/services/tiktokService"),I=(t(require("../../../useCar/common/request")),getApp());Component({behaviors:[h.default,r.default,s.default,u.default,c.default,d.default],properties:{refid:{type:String},btype:{type:String},stype:{type:String},bigEventAB:{stype:String,observer:"bigEventABChange"},showRedDot:{type:Boolean,default:!1}},data:Object.assign({isGray:!1,headerHeight:getApp().globalData.totalNavHeightNew,domHeights:"",scrollSwitch:!1,drawerTest:"drawer",hasDrawerContent:!1,pageSource:"打车首页",fromCar:"",isShowTranslate:!1,pageMode:0,recData:{},information:{},mapCenter:{lat:31.34127,lng:102.93984},mapScale:17,scrollTop:0,pageJumping:!1,abFlag:"A",poiNameLines:[],mapViewH:"calc(100vh - 90rpx - 340rpx)",safeStyle:"position: absolute; bottom: 0;left: 10rpx",mapContainerHeight:"calc(100% - 420rpx)",annoShow:!1,MAP_SUBKEY:g.MapSubKey,showTiktokPopup:!1,isFirstPrivacy:!0},o.default.pageData),observers:{"pageMode,announceStatus":function(t,e){this.fitMapViewPort(t,e)},"isRecommend,productId,mapCenter,mapScale,spotList,nearbyCarMarkers":function(t,e,a,i,n,o){this.renderMapMarkers({isRecommend:t,productId:e,mapCenter:a,mapScale:i,spotList:n,nearbyCarMarkers:o})},information:function(t){var e=(0,C.pick)(t,["startLongitude","startLatitude"]);this.refreshBannerInfo(e)},refid:function(t){this.setRefid(t)}},pageLifetimes:{show:function(){var t=this;this.onShow(),setTimeout((function(){t.data.information&&t.data.information.startAddress||t.resetLocation(t.data.isFirstPrivacy)}),300),this.isHide=!1},hide:function(){this.isHide=!0}},attached:function(){var t=this;(0,f.logTrace)("用车组件初始化","^".concat(Date.now(),"^")),setTimeout((function(){return t.onLoad(t.properties||{})}))},methods:{bigEventABChange:function(t){console.warn("bigEventABChange",t),this.setData({isGray:"A"==t})},fitMapViewPort:function(t,e){var a=this;if(0!==e){var i=wx.createSelectorQuery().in(this);i.select(".business-area").boundingClientRect((function(t){var e=t.height;a.setData({mapContainerHeight:"calc(100% - ".concat(e-20/(0,f.viewInfo)().rpxRatio,"px)")})})),i.exec()}},refreshBannerInfo:function(t){var e=t.startLatitude,a=t.startLongitude;(0,m.initCuponData)({productId:this.data.productId,startLatitude:e,startLongitude:a}),(0,m.refreshActivityInfo)(this.data.position,this._activityCallback.bind(this),t)},onLoad:function(t){var e=this;this.data.stype&&(t.stype=this.data.stype),this.data.btype&&(t.btype=this.data.btype),wx.yc_carIndexIns=this,this.renderMapMarkers=(0,f.debounce)(this.renderMapMarkers,100),this.onElements=(0,f.debounce)(this.onElements,100),this.resetLocation=(0,f.throttle)(this.resetLocation,750),this.fitMapViewPort=(0,f.debounce)(this.fitMapViewPort,300),this._menuIns={},this.$setData=p.setState.bind(this),this.$setData({pageSource:(0,v.getPageDesc)(),isIphone:(0,f.isIphoneIos)(),isIphoneX:(0,f.isIphonex)(),fromCar:t.fromCar});var a=l.store.getState().common.position;l.store.dispatch({type:l.actions.SET_MY_POSITION,payload:{lat:a.lat||t.localLatitude,lng:a.lng||t.localLongitude}});var i=this.getInitMapCenter();this.setData({mapCenter:i}),l.store.dispatch({type:l.actions.SET_POPUP_DATA,payload:{}}),l.store.dispatch({type:l.actions.SET_INDEX_POPUP_LEVEL,payload:0}),this.configData=Object.assign({},o.default.configData),this.personalData=Object.assign({},o.default.personalData),this.getMainData(t).then((function(t){e.hideLoading(),I.globalData.tiktokRequestParam?e.initTiktokCouponCharge():e.initActivity();var a=e.data.productId;e.traceExposureHandle(a),(0,m.initCuponData)({productId:a})})).catch((function(t){e.hideLoading()})),this._initStoreData(),this.nearbyCarCount=-1,this._operating=!1,this.traceLocationMsgEnter(),this.canShowFavoriteTips=!I.globalData.tiktokRequestParam},initActivity:function(){var t=this;I.globalData.cps?((0,m.indexInit)({cps:I.globalData.cps,activityCallback:this._activityCallback.bind(this)}),delete I.globalData.cps):I.globalData.cpsOnload=function(e){(0,m.indexInit)({cps:e,activityCallback:t._activityCallback.bind(t)}),delete I.globalData.cpsOnload}},leavePage:function(){l.store.dispatch({type:l.actions.SET_TRANSLATEJS_SHOW,payload:!1}),l.store.dispatch(l.actions.clearAllQueryParams()),(0,l.unbindState)(this),this._nearByCarJob&&(this._nearByCarJob.cancel(),this._nearByCarJob=null),!this._operating&&this.traceEvByPage("页面跳出","^页面跳出^".concat((0,v.getTabDesc)(),"^").concat(this.data.scrollSwitch?"运营位首页":"打车首页","^").concat((0,v.getRefId)(),"^"),"打车首页")},goActivitye:function(t){var e,a=this.data.productId;12==a||13==a?e="接送机":14!=a&&15!=a||(e="接送站");var i=(0,f.evtData)(t),n=i.item,o=i.index;this.traceEvByPage("运营位点击","^运营位点击^".concat(g.kProductNameMap[+a],"^").concat((0,v.getRefId)(),"^").concat(["左","右"][o]),"".concat(e,"首页")),wx.navigateTo({url:n.url})},_activityCallback:function(t){var e=t.ticketBottomInfo;this.setData({hasDrawerContent:!!e&&!!Object.keys(e).length})},setRefid:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.refid||getApp().globalData.refid||g.kDefaultRefid;e&&l.store.dispatch({type:l.actions.SET_REFID,payload:e})},_initStoreData:function(){(0,l.bindState)(this,{isQueryPrice:"queryPrice.show",position:"common.position",popupInfo:"common.popupData",homeCupon:"common.homeCupon",sceneQuery:"common.sceneQuery",topContent:"common.augmentedAndQuestion.topContent",scenShow:"setScenShow",showCenterMark:(0,y.createSelector)((function(t){return(0,v.getParamsFor)(t.productId).startAddress}),(function(t){return t.productId}),(function(t,e){return(0,v.isShowCenterMarker)(e)&&t||""})),productId:"productId",__productId:"productId",productTypeStr:(0,y.createSelector)((function(t){return t.productId}),(function(t){var e="car";return 12===t||13===t?e="flight":14!==t&&15!==t||(e="train"),e})),zengXinImg:(0,y.createSelector)((function(t){return t.eventImgConfig||{}}),(function(t){return(t.ccb_home_credit_img||{}).imgUrl})),switchBg:(0,y.createSelector)((function(t){return t.eventImgConfig||{}}),(function(t){return t.productId}),(function(t,e){return(t[{11:"key_3_11",19:"key_3_11",14:"key_3_12",15:"key_3_12",12:"key_3_13",13:"key_3_13"}[e]]||{}).imgUrl||""})),isJieSong:(0,y.createSelector)((function(t){return t.productId}),(function(t){return 11!=t&&19!=t&&80!=t&&130!=t})),spotList:"recSpotList",__selectParamsHandle:(0,y.createSelector)((function(t){return t.productId}),(function(t){return(0,v.getReducerFor)(t)})),homeBannerInfo:"common.homeBannerInfo"})},renderMapMarkers:function(t){var e=t.isRecommend,a=t.productId,o=t.mapCenter,r=t.mapScale,s=t.spotList,c=void 0===s?[]:s,d=t.nearbyCarMarkers,u=void 0===d?[]:d;-1===this.nearbyCarCount&&u.length&&(this.traceEvByPage("附近车辆加载","^附近车辆加载^".concat((0,v.getRefId)(),"^").concat(u.length,"^"),"打车首页"),this.nearbyCarCount=u.length);var h=n(c);o&&o.isPoi&&h.unshift(i(i({},c[0]),o));var l=this.getRecSpotMarkers(h,r)||[],p=[];o&&(l=l.map((function(t){return t.latitude==o.lat&&t.longitude==o.lng?i(i({},t),{},{label:void 0}):t}))),this._menuIns._mapCenterForLocation=!1,19==a&&r<20&&(p=(0,b.pointsFilter)(u,r));var g=e?[this.data.recMarker]:l;this.setData({spotMarkers:l,mapMarkers:[].concat(n(p),n(g))})},onShow:function(){this.isHide=!1,this._onShowMapTask&&this._onShowMapTask(),(0,m.indexRefresh)();var t=this.selectComponent("#indexannonce");t&&t.reload();var e=this.selectComponent("#safeComp");e&&e.getSafeData({pageType:"smallHome",productType:this.data.productTypeStr})},onHide:function(){this.isHide=!0},stateDidChanged:function(t){var e=this;if(t.isQueryPrice&&!this.data.isJieSong){this.setData({pageExiting:!0});var a=(0,f.getCurPage)();(0,v.toSelectCar)({cutParams:!0,psource:1,isRedirect:a.route.endsWith("/address/address")}),l.store.dispatch({type:l.actions.HIDE_PRICE_QUERY});var i=function(t){var a=g.kProductNameMap[e.data.productId],i=(e.data.information||{}).startAddress,n=(e.data.recData||{}).is_recommend;e.traceEvByPage("跳转询价",["^跳转询价",(0,v.getRefId)(),e.nearbyCarCount,t.length,"A|20210906_carindexstartend",a,i,n?"场站":"普通"].join("^")+"^","打车首页")},n=this.data.nearbyCarMarkers||[];this.getMapRegion().then((function(t){n=n.filter((function(e){return(0,f.isLngLatInBounds)(e,t)})),i(n)})).catch((function(t){i([])}))}},mapupdated:function(t){},onShareAppMessage:function(){var t=l.store.getState()&&l.store.getState().shareConfig||{},e=t.shareImg;return{title:t.shareTitle||"同程打车，就是有折，千元豪礼GO狂欢",imageUrl:e||"https://pic5.40017.cn/i/ori/15AfOBtVbmo.jpg"}},showLoading:function(){wx.showLoading(),this._loading=!0},hideLoading:function(){this._loading&&wx.hideLoading()&&(this._loading=0)},tapTab:function(t){l.store.dispatch(l.actions.setScenShow(""));var e=(0,f.evtData)(t),a="tabList"==e.index?0:e.index,i=this.data.tabList[a],n="^顶部tab切换点击^".concat((0,v.getTabDesc)(),"^").concat(i.tabName,"^").concat((0,v.getRefId)(),"^");this.traceEvByPage("顶部tab切换",n,"打车首页"),i&&i.jumpUrl?(0,f.toWebviewOauth)(i.jumpUrl):(l.store.dispatch({type:l.actions.SET_TABINDEX,payload:{tabIndex:e.tabtoken}}),l.store.dispatch(l.actions.setScenQuery("")),this.syncProductIdForTab(e.tabtoken),this.tracePageHandle(e.tabtoken),(0,m.refreshActivityInfo)(this.data.position,this._activityCallback.bind(this)),this.$setData({scrollTop:0}))},stateWillChange:function(t){},resetLocation:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=this.selectComponent("#IndexSelecter");a&&a.setPoistionPost();var i=this.__productId;this.resetLocationHandle(i,(function(t){wx.showToast({icon:"none",title:t.message||"定位失败"})}),{clickType:e?1:0}).then((function(){t.locationReady=!0,t.canShowFavoriteTips&&t.triggerEvent("onLocationReady",!0),t.setEndLocationSence1146()})).catch((function(e){e&&"privacy_auth_fail"===e.message&&t.setData({isFirstPrivacy:!1}),t.triggerEvent("onLocationReady",!1)}))},traceEvForCmp:function(t){var e=(t.detail||[]).eventArray;this.traceEvByPage.apply(this,e)},drawerSwitcher:function(){},registeredMenu:function(){this._menuIns=this.selectComponent("#Menu")},didWrap:function(){this._operating=!0},renderError:function(t){(0,f.traceEv)("ycIndexMapRenderErr",t&&t.message)},onRecData:function(t){if((t=t.detail)&&200===t.code)return this.setData({recData:t}),this.showRecFence(t);this.setMode(0)},onAnnounceStatus:function(t){var e=t.detail.status;this.setData({announceStatus:e})},onElements:function(t){var e=t.detail;this.$setData({information:e}),l.store.getState().common.crossStartAddress||this.mapHandler(e)},mapHandler:function(t){var e=this,a=t.tabServiceTypeId||this.__productId,i=t.startCityId,n=t.startAddress,o=t.startAddressDetail,r=t.startLatitude,s=t.startLongitude,c=t.startSource,d=n||o,u={cityId:+i,name:d,lat:+r,lng:+s},h=this.logicId===t.startLogicId&&String(c).startsWith("map"),l=d&&i&&!(0,C.equals)(this["preStartInfo".concat(a)],u);!h&&l&&(this.isHide?this._onShowMapTask=function(){e.applyNewAddr(u,{source:c,logicId:t.startLogicId}),e._onShowMapTask=null}:this.applyNewAddr(u,{source:c,logicId:t.startLogicId})),this["preStartInfo".concat(a)]=u},ev:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"打车首页";this.traceEvByPage(t,e,a)},onRecPaneAct:function(t){var e=t.detail,a=e.type,i=e.data;"confirm"===a?this.setMode(2):"select"===a?(this.setStartParamsForAddr(this.recPoi,{source:"mapFence"}),this.setMode(0)):"cancel"===a?this.recCancel(i):"poiChange"===a?this.showRecFence(this.recData,i.index1,i.index2):"close"===a?this.setMode(0):"switchRec"===a?this.showWithoutRecFence():"hideRecAlert"===a&&this.hideWithoutRecAlert()},recCancel:function(t){var e=this.data.productId,a=t.mode;if(1==a||3==a||(12==e||14==e)){var i=this.selectComponent("#IndexSelecter");i&&i.selectStartAddress({currentTarget:{dataset:{fromCar:1}}}),this.ev("点击欢迎页","^".concat(t.recInfo.title,"^返回^"))}else 2==a&&(this.setMode(1),this.ev("关闭区域页","^".concat(this.recPoi.startAddress,"^取消^")))},onRecPoiMarkerClick:function(){this.selectStartAddressForPoi();var t=this.data.isRecommend?"场站":"普通",e=this.data.poiName;this.trackerCommon("点击上车点气泡",[t,e])},indexAnnoShow:function(t){this.setData({annoShow:t.detail})},setEndLocationSence1146:function(){var t=this;return a(e.default.mark((function a(){var i,n,o,r,s,c,d,u;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i=getApp(),!(n=i.globalData.locationMsgScene1146).used){e.next=5;break}return e.abrupt("return");case 5:return i.globalData.locationMsgScene1146.used=!0,o=n.location,r=o.latitude,s=o.longitude,e.next=9,(0,f.geocoder)({longitude:s,latitude:r});case 9:c=e.sent,d={CityName:c.cityName,CityId:c.cityId,Latitude:c.lat,Longitude:c.lng,Address:c.name,AddressDetail:c.address},u=(0,v.createTargetParam)(d,l.store.getState().productId,"end"),l.store.dispatch(t.__selectParamsHandle(u)),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(0);case 17:case"end":return e.stop()}}),a,null,[[0,15]])})))()},traceLocationMsgEnter:function(){var t=getApp(),e=t.globalData.locationMsgScene1146;if(0==e.traceFlag){t.globalData.locationMsgScene1146.traceFlag=1;var a=e.location,i=a.latitude,n=a.longitude,o=a.name;this.ev("位置消息解析-进入","^".concat(n,"^").concat(i,"^").concat(o,"^"))}},initTiktokCouponCharge:function(){var t=this;(0,S.getPhoneByUnionId)().then((function(e){e&&0===e.code&&(e.data?t.selectComponent("#tiktok").doMiddlePageArousal(e.data):t.setData({showTiktokPopup:!0}))})).catch((function(e){t.setData({showTiktokPopup:!0})}))},onTiktokPopupClose:function(t){var e=this,a=t.detail,i=this.selectComponent("#tiktok");i&&!a&&i.doMiddlePageArousal(),this.setData({showTiktokPopup:!1},(function(){e.triggerEvent("onLocationReady",!0),e.initActivity()}))},onRedDotClear:function(){this.triggerEvent("onRedDotClear")}}});
},{isPage:false,isComponent:true,currentFile:'pages/index/module/index.js'});require("pages/index/module/index.js");$gwx_XC_8=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'box'])
Z([3,'box-wrap'])
Z([[7],[3,'showIcon']])
Z([[7],[3,'showBoard']])
Z([[7],[3,'showIconHome']])
Z([[7],[3,'showIcon1']])
Z([[7],[3,'miniAppId']])
Z([[7],[3,'miniAppPage']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_8=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_8=true;
var x=['./pages/transit/transit.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_8_1()
var oLE=_n('view')
_rz(z,oLE,'class',0,e,s,gg)
var hQE=_n('view')
_rz(z,hQE,'class',1,e,s,gg)
var oRE=_v()
_(hQE,oRE)
if(_oz(z,2,e,s,gg)){oRE.wxVkey=1
}
var cSE=_v()
_(hQE,cSE)
if(_oz(z,3,e,s,gg)){cSE.wxVkey=1
}
oRE.wxXCkey=1
cSE.wxXCkey=1
_(oLE,hQE)
var xME=_v()
_(oLE,xME)
if(_oz(z,4,e,s,gg)){xME.wxVkey=1
}
var oNE=_v()
_(oLE,oNE)
if(_oz(z,5,e,s,gg)){oNE.wxVkey=1
}
var fOE=_v()
_(oLE,fOE)
if(_oz(z,6,e,s,gg)){fOE.wxVkey=1
}
var cPE=_v()
_(oLE,cPE)
if(_oz(z,7,e,s,gg)){cPE.wxVkey=1
}
xME.wxXCkey=1
oNE.wxXCkey=1
fOE.wxXCkey=1
cPE.wxXCkey=1
_(r,oLE)
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_8();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/transit/transit.wxml'] = [$gwx_XC_8, './pages/transit/transit.wxml'];else __wxAppCode__['pages/transit/transit.wxml'] = $gwx_XC_8( './pages/transit/transit.wxml' );
	;__wxRoute = "pages/transit/transit";__wxRouteBegin = true;__wxAppCurrentFile__="pages/transit/transit.js";define("pages/transit/transit.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp();Page({data:{requestinfo:[],tiptext:"请输入跳转地址",urlVal:"",homeUrl:"",homeUrlText:"请输入小程序首页跳转链接",items:[{name:"H5链接",checked:!0},{name:"小程序链接",checked:!1}],versionList:[{name:"正式版",checked:!0,value:"release"},{name:"开发版",checked:!1,value:"develop"},{name:"体验版",checked:!1,value:"trial"}],version:"release",urlKind:"H5链接",showIcon:!1,miniAppId:"",miniAppPage:"",showIconHome:!1,showBoard:!1},requestTest:function(){for(var t=0;t<100;t++)t%10==2?this.request(t,1):t%10==6?this.request(t,3):this.request(t,2)},onLoad:function(t){if(t.url){var e=decodeURIComponent(t.url);1==(t.type||1)?wx.navigateTo({url:"/pages/webView/webView?src="+encodeURIComponent(e)}):wx.navigateTo({url:e})}this.onClipboard()},radioChange:function(t){this.data.urlKind=t.detail.value},radioChangeVersion:function(t){this.data.version=t.detail.value},inputListen:function(t){(this.data.urlVal=t.detail.value)?this.setData({showIcon:!0}):this.setData({showIcon:!1})},homevalListen:function(t){""!=(this.data.homeUrl=t.detail.value)?this.setData({showIconHome:!0}):this.setData({showIconHome:!1})},inputAppId:function(t){this.setData({miniAppId:t.detail.value})},inputAppPage:function(t){this.setData({miniAppPage:t.detail.value})},clearAppId:function(t){this.setData({miniAppId:""})},clearAppPage:function(t){this.setData({miniAppPage:""})},clearAppVersion:function(t){this.setData({miniAppVersion:""})},goNav:function(){var t=this.data.urlKind,e=this.data.urlVal;e?("H5链接"===t&&(e.indexOf("http")>=0?(e=e.replace(/^(http:\/\/|https:\/\/|\/\/)((\w|=|\?|\.|\/|&|-)+)/g,"https://$2"),console.log(e),wx.navigateTo({url:"/pages/webView/webView?src="+encodeURIComponent(e)})):wx.showToast({title:"请输入域名",icon:"none"})),"小程序链接"===t&&(/^\/pages\//gi.test(e)?wx.navigateTo({url:e}):wx.showToast({title:"请正确输入链接",icon:"none"}))):wx.showToast({title:"请输入链接",icon:"none"})},goHomeUrl:function(){var e=this.data.homeUrl;e?/^\/pages\//gi.test(e)?(t.globalData.homeOptions=this.getQueryString(e),wx.switchTab({url:e})):wx.showToast({title:"请正确输入链接",icon:"none"}):wx.showToast({title:"请输入链接",icon:"none"})},getQueryString:function(t){var e=new Object;if(-1!==t.indexOf("?"))for(var a=t.substr(t.indexOf("?")+1).split("&"),i=0;i<a.length;i++)e[a[i].split("=")[0]]=decodeURI(a[i].split("=")[1]);return e},goMiniApp:function(){var t=this.data.miniAppId,e=this.data.miniAppPath,a=this.data.version;t?wx.navigateToMiniProgram({appId:t,path:e,envVersion:a}):wx.showToast({title:"appid不能为空",icon:"none"})},clearUrl:function(){this.setData({urlVal:"",showIcon:!1})},clearHomeUrl:function(){this.setData({homeUrl:"",showIconHome:!1})},clearkey:function(){this.setData({clearKeys:"",showIcon1:!1})},inputKey:function(t){(this.data.clearKeys=t.detail.value)?this.setData({showIcon1:!0}):this.setData({showIcon1:!1})},clearstorage:function(){var t=this;this.data.clearKeys?wx.removeStorage({key:this.data.clearKeys,success:function(e){wx.showToast({title:"清除成功",icon:"success"}),t.clearkey()},fail:function(t){wx.showToast({title:"清除失败",icon:"none"})}}):wx.showToast({title:"请输入要删除的key",icon:"none"})},clearall:function(){wx.clearStorage({success:function(){wx.showToast({title:"删除成功",icon:"success"})}})},onClipboard:function(){var t=this;wx.getClipboardData({success:function(e){console.log(e.data),e.data&&t.setData({showBoard:!0,boardTxt:e.data})}})},boardTap:function(){this.setData({urlVal:this.data.boardTxt,showBoard:!1})}});
},{isPage:true,isComponent:true,currentFile:'pages/transit/transit.js'});require("pages/transit/transit.js");$gwx_XC_9=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[7],[3,'canHtml']])
Z([[7],[3,'src']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_9=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_9=true;
var x=['./pages/webView/webView.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_9_1()
var lUE=_v()
_(r,lUE)
if(_oz(z,0,e,s,gg)){lUE.wxVkey=1
var aVE=_v()
_(lUE,aVE)
if(_oz(z,1,e,s,gg)){aVE.wxVkey=1
}
aVE.wxXCkey=1
}
else{lUE.wxVkey=2
}
lUE.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_9();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/webView/webView.wxml'] = [$gwx_XC_9, './pages/webView/webView.wxml'];else __wxAppCode__['pages/webView/webView.wxml'] = $gwx_XC_9( './pages/webView/webView.wxml' );
	;__wxRoute = "pages/webView/webView";__wxRouteBegin = true;__wxAppCurrentFile__="pages/webView/webView.js";define("pages/webView/webView.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireWildcard"),a=require("../../@babel/runtime/helpers/interopRequireDefault");require("../../@babel/runtime/helpers/Arrayincludes");var t=a(require("../../utils/common.js")),n=a(require("../../utils/tracer.js")),r=require("../../utils/common"),c=a(require("../../utils/userInfo")),i=require("../../utils/request.user"),o=a(require("../../utils/globalWebRefreshManger")),s=e(require("../../useCar/util/getChannelUrl.js")),l=a(require("../../useCar/common/localStore")),d=getApp(),u=o.default.getInstance();function h(e){var a=(e=e||{}).unionId||"",t=e.openId||"",n=e.nickName||"",c=(0,r.get)(d,"globalData.cityObj.cityCode",""),i="unionId="+encodeURIComponent(a)+"&openId="+encodeURIComponent(t)+"&nickName="+encodeURIComponent(n);return-1===i.indexOf("ycchannel")&&(i+="&ycchannel=xcx-usecar&"),-1===i.indexOf("ycplatform")&&(i+="&ycplatform=wx-usecar&"),c&&(i=i+"&cityCode="+c),i+"&r="+parseInt(1e3*Math.random())}Page({data:{userInfoFlag:!0,src:"",canHtml:wx.canIUse&&wx.canIUse("web-view")},onLoad:function(e){var a=this;this.url=e.src?decodeURIComponent(e.src):"",1==e.refresh&&this.setData({src:this.url||""}),u.matchUrl(this.url),1==e.hideShare&&wx.hideShareMenu&&wx.hideShareMenu();var r=this.url.endsWith("&")?"":this.url.indexOf("?")>-1?"&":"?";if(e.openwxwrap){var o="xcxOpenId=".concat((0,i.getOpenId)(),"&xcxUnionId=").concat((0,i.getUnionId)());-1===this.url.indexOf("ycchannel")&&(o+="&ycchannel=xcx-usecar"),-1===this.url.indexOf("ycplatform")&&(o+="&ycplatform=wx-usecar"),this.url+=r+o,this.url="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3827070276e49e30&redirect_uri=https://wx.17u.cn/flight/getopenid.html?url=".concat(encodeURIComponent(this.url),"&showwxpaytitle=1&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect"),console.log(this.url),this.setData({src:this.url||""})}else if(1!=e.accredit&&!e.needwrap||-1!=this.url.indexOf("unionId")&&-1!=this.url.indexOf("ycchannel")){var l=t.default.getUserInfo();this.url+=r+h(l),this.setData({src:this.url||""})}else{var p=t.default.getUserInfo();p&&p.openId?(this.url+=r+h(p),this.setData({src:this.url||""})):c.default.getUnionidPromise().then((function(e){a.url+=r+h(e),console.log("webview URL",a.url),a.setData({src:a.url||""})})).catch((function(e){console.error("err",e),wx.showModal({title:"温馨提示",content:"啊哦，网络生病了，请退出后重试~",showCancel:!1})}))}e.channelCode&&(d.globalData.channelCode=e.channelCode);var m=(0,s.default)(s.WEBVIEW,!1,{channelCode:d.globalData.channelCode});n.default.newEv({pagename:m,label:"webview",value:this.url})},getDefaultUrl:function(){this.url.indexOf("?")>-1?this.url+="&unionId="+d.globalData.unionId+"&avatarUrl="+encodeURIComponent("同程打车用户")+"&nickName="+encodeURIComponent("https://file.40017.cn/uticket/xcx/act/freeGetWeekCard/img/logo.png")+"&r="+parseInt(1e3*Math.random()):this.url+="?unionId="+d.globalData.unionId+"&avatarUrl="+encodeURIComponent("同程打车用户")+"&nickName="+encodeURIComponent("https://file.40017.cn/uticket/xcx/act/freeGetWeekCard/img/logo.png")+"&r="+parseInt(1e3*Math.random()),this.setData({src:this.url})},message:function(e){var a=this,t=e.detail.data;t&&t.forEach((function(e){if(e.ycH5Back&&e.ycH5Back.ycH5BackName){var t=d.globalData.useCar,n=e.ycH5Back;t&&t.h5callback&&t.h5callback[n.ycH5BackName]&&(t.h5callback[n.ycH5BackName](n.ycH5BackData),t.h5callback[n.ycH5BackName]&&delete t.h5callback[n.ycH5BackName]),wx.bus.emit(n.ycH5BackName,n.ycH5BackData)}if(e.shareInfo&&e.shareInfo.path&&e.shareInfo.path.length&&(a.shareInfo=e.shareInfo),e.setCommonAddress){var r=e.setCommonAddress,c={};[1,2].includes(Number(r.type))?c={cityId:r.cityId,cityName:r.cityName,lat:r.latitude||r.lat,lng:r.longitude||r.lng,addressName:r.name,address:r.addressDetail||r.address,addressDetail:r.addressDetail||r.address,selectType:r.type,tcServiceTypeId:r.productId,tabServiceTypeId:r.productId,type:r.type}:4==(c=r).type&&(wx.tcyc.__fromCommonAddress=1),l.default.chooseCompanyHomeCallback(c)}}))},onShareAppMessage:function(){var e=this.shareInfo,a=(0,s.default)(s.INDEX,!0,{channelCode:"proShare"});if(e){var t=(0,s.default)(s.WEBVIEW,!0,{src:encodeURIComponent(e.path||this.data.src),accredit:1,openwxwrap:1}),n=e.path?t:a;e.isMiniApp&&"/"===e.path[0]&&(n=e.path);var r=(0,s.default)(s.WEBVIEW);return-1!=n.indexOf(r)&&(n+=(n.indexOf("?")>-1?"&":"?")+"timestamp="+Date.now()),{title:e.title||"",imageUrl:e.imageUrl||"",path:n}}return{path:a}},onShow:function(){if(u.canRefreshWebview()){var e="&ct=".concat((new Date).getTime());this.setData({src:this.url+e||""}),u.setReloadStatus(!1)}},onUnload:function(){u.initReloadState()}});
},{isPage:true,isComponent:true,currentFile:'pages/webView/webView.js'});require("pages/webView/webView.js");$gwx_XC_10=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_10=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_10=true;
var x=['./useCar/component/Enterprise/Enterprise.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_10_1()
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_10();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/Enterprise/Enterprise.wxml'] = [$gwx_XC_10, './useCar/component/Enterprise/Enterprise.wxml'];else __wxAppCode__['useCar/component/Enterprise/Enterprise.wxml'] = $gwx_XC_10( './useCar/component/Enterprise/Enterprise.wxml' );
	;__wxRoute = "useCar/component/Enterprise/Enterprise";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/Enterprise/Enterprise.js";define("useCar/component/Enterprise/Enterprise.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../common/common"),o=require("../../common/business"),r=require("../../config/index"),t=wx.tcyc.traceEv;Component({properties:{},data:{ios:(0,e.isIphoneIos)()},methods:{toEnterprise:function(){var n="".concat(r.kCarUrlH5,"enterprise");(0,e.toWebview)(n),t("企业用车点击","^".concat((0,o.getRefId)(),"^"),"打车首页")}}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/Enterprise/Enterprise.js'});require("useCar/component/Enterprise/Enterprise.js");$gwx_XC_11=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[7],[3,'show']])
Z([3,'a'])
Z([a,[3,'model '],[[2,'?:'],[[7],[3,'showCont']],[1,'show'],[1,'']]])
Z([3,'openUrl'])
Z([3,'content'])
Z([[7],[3,'services']])
Z([3,'item.url'])
Z([[2,'!='],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'services']],[3,'length']],[1,1]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_11=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_11=true;
var x=['./useCar/component/PrivacyAuthorization/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_11_1()
var bYE=_v()
_(r,bYE)
if(_oz(z,0,e,s,gg)){bYE.wxVkey=1
var oZE=_mz(z,'view',['catchtouchmove',1,'class',1],[],e,s,gg)
var x1E=_mz(z,'view',['bindtap',3,'class',1],[],e,s,gg)
var o2E=_v()
_(x1E,o2E)
var f3E=function(h5E,c4E,o6E,gg){
var o8E=_v()
_(o6E,o8E)
if(_oz(z,7,h5E,c4E,gg)){o8E.wxVkey=1
}
o8E.wxXCkey=1
return o6E
}
o2E.wxXCkey=2
_2z(z,5,f3E,e,s,gg,o2E,'item','index','item.url')
_(oZE,x1E)
_(bYE,oZE)
}
bYE.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_11();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/PrivacyAuthorization/index.wxml'] = [$gwx_XC_11, './useCar/component/PrivacyAuthorization/index.wxml'];else __wxAppCode__['useCar/component/PrivacyAuthorization/index.wxml'] = $gwx_XC_11( './useCar/component/PrivacyAuthorization/index.wxml' );
	;__wxRoute = "useCar/component/PrivacyAuthorization/index";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/PrivacyAuthorization/index.js";define("useCar/component/PrivacyAuthorization/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../@babel/runtime/helpers/interopRequireDefault"),e=(t(require("../../../utils/regenerator-runtime")),require("../../../util/commonEv")),a=t(require("../../../util/date")),r=require("../../../utils/data"),n=require("../../config/index"),o=require("../../../utils/userInfo"),i=require("../../../utils/util");Component({properties:{},data:{show:!1,showCont:!1,services:[{txt:"《服务协议》",url:"https://wx.17u.cn/pub/page/rule#page_13"},{txt:"《隐私政策》",url:"".concat(n.privacyUrl,"&type=0")},{txt:"《儿童隐私政策》",url:"".concat(n.privacyUrl,"&type=4")},{txt:"《个人信息与第三方共享清单》",url:"".concat(n.privacyUrl,"&type=2")}]},lifetimes:{attached:function(){},detached:function(){this.data.show&&this.cb&&this.cb({agree:!1})}},pageLifetimes:{show:function(){}},methods:{initMethods:function(){},showDialog:function(){var t=this;this.setData({show:!0}),wx.nextTick((function(){t.setData({showCont:!0})}));var a=getCurrentPages()||[],r=(a[a.length-1]||{}).route||"page/compontent";(0,e.ev)(r,2e3,"隐私政策弹窗","^曝光^","微信同程入口-首页-小程序","公共")},allow:function(){var t={agree:1,version:this.data.version,date:(new a.default).format()};getApp().globalData.PrivacyInfo=t,wx.setStorage({key:"PrivacyInfo",data:t}),this.setData({show:!1,showCont:!1}),this.reportAuthorization(),this.cb&&this.cb({agree:!0,click:!0});var r=getCurrentPages()||[],n=(r[r.length-1]||{}).route||"page/compontent";(0,e.ev)(n,2e3,"隐私政策弹窗","^点击^按钮:同意^","微信同程入口-首页-小程序","公共")},reportAuthorization:function(){o.getUnionid((function(t,e){i.requestData({url:"https://wx.17u.cn/platformpubapi/agentPrivacy/getAgentPrivacy",method:"post",header:{"Content-Type":"application/json",sectoken:getApp().globalData.TCsectoken},data:{unionId:t,openId:e,appId:r.appId,agree:1,version:"1.0.1"}})}))},refuse:function(){this.setData({show:!1,showCont:!1}),this.cb&&this.cb({agree:!1,click:!0});var t=getCurrentPages()||[],a=(t[t.length-1]||{}).route||"page/compontent";(0,e.ev)(a,2e3,"隐私政策弹窗","^点击^按钮:不同意^","微信同程入口-首页-小程序","公共")},openUrl:function(t){var e=t.target.dataset.url;e&&wx.navigateTo({url:"/pages/webView/webView?src=".concat(encodeURIComponent(e))})},a:function(){}}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/PrivacyAuthorization/index.js'});require("useCar/component/PrivacyAuthorization/index.js");$gwx_XC_12=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[7],[3,'showMask']])
Z([[6],[[7],[3,'pop']],[3,'touchend']])
Z([[6],[[7],[3,'pop']],[3,'touchstart']])
Z([a,[3,'action-sheet '],[[2,'&&'],[[7],[3,'showDialog']],[1,'action-sheet-toggle']]])
Z([[7],[3,'actionSheetStyle']])
Z([[7],[3,'defaultClose']])
Z([3,'content'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_12=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_12=true;
var x=['./useCar/component/actionSheet/actionSheet.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_12_1()
var a0E=_v()
_(r,a0E)
if(_oz(z,0,e,s,gg)){a0E.wxVkey=1
}
var tAF=_mz(z,'view',['bind:touchend',1,'bind:touchstart',1,'class',2,'style',3],[],e,s,gg)
var eBF=_v()
_(tAF,eBF)
if(_oz(z,5,e,s,gg)){eBF.wxVkey=1
}
var bCF=_n('slot')
_rz(z,bCF,'name',6,e,s,gg)
_(tAF,bCF)
eBF.wxXCkey=1
_(r,tAF)
var oDF=_n('slot')
_(r,oDF)
a0E.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_12();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/actionSheet/actionSheet.wxml'] = [$gwx_XC_12, './useCar/component/actionSheet/actionSheet.wxml'];else __wxAppCode__['useCar/component/actionSheet/actionSheet.wxml'] = $gwx_XC_12( './useCar/component/actionSheet/actionSheet.wxml' );
	;__wxRoute = "useCar/component/actionSheet/actionSheet";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/actionSheet/actionSheet.js";define("useCar/component/actionSheet/actionSheet.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=[],e=[],o=0;Component({options:{multipleSlots:!0},properties:{showDialog:{type:Boolean,value:!1,observer:"onShowObserver"},showMask:{type:Boolean,value:!0},closeOther:{type:Boolean,value:!1},maskStyle:{type:String,value:""},actionSheetStyle:{type:String,value:""},defaultClose:{type:Boolean,value:!1},closeClass:String},data:{block:!1},attached:function(){this.sign=o++,t.push(this)},detached:function(){t.splice(t.indexOf(this),1)},methods:{onTouchStart:function(t,e){wx.tcyc.__isClickPopup=!0},onTouchEnd:function(t,e){wx.tcyc.__isClickPopup=!1},onShowObserver:function(o){var s=this;this.properties.closeOther&&t.forEach((function(t){t!==s&&t.setData({showDialog:!1})})),o?e.push(this.sign):e.splice(e.indexOf(this.sign),1),t.forEach((function(t){var o=e[e.length-1]==t.sign;t.setData({isCurrent:o})}))},handleClose:function(t){wx.tcyc.__isClickPopup=!1,this.triggerEvent("close",t.currentTarget.dataset)}}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/actionSheet/actionSheet.js'});require("useCar/component/actionSheet/actionSheet.js");$gwx_XC_13=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[7],[3,'isShowPopup']])
Z([3,'true'])
Z([3,'mask-wrapper'])
Z(z[1])
Z([[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'popupInfo']],[3,'type']],[1,1]],[[2,'=='],[[6],[[7],[3,'popupInfo']],[3,'type']],[1,9]]],[[2,'=='],[[6],[[7],[3,'popupInfo']],[3,'type']],[1,3]]])
Z([a,[3,'coupon-ul '],[[2,'?:'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'popupInfo']],[3,'type']],[1,1]],[[2,'=='],[[6],[[7],[3,'popupInfo']],[3,'type']],[1,9]]],[1,'margin-top14'],[1,'margin-top34']]])
Z([a,[3,'--backgroundColor--: '],[[2,'?:'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'popupInfo']],[3,'type']],[1,1]],[[2,'=='],[[6],[[7],[3,'popupInfo']],[3,'type']],[1,9]]],[[6],[[6],[[7],[3,'popupInfo']],[3,'ticketToastinfo']],[3,'backgroundColor']],[[6],[[6],[[7],[3,'popupInfo']],[3,'ticketHaveToastInfo']],[3,'backgroundColor']]]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'popupInfo']],[3,'type']],[1,3]],[[6],[[6],[[7],[3,'popupInfo']],[3,'ticketHaveToastInfo']],[3,'tipTitle']]])
Z([3,'bindscroll'])
Z([[7],[3,'hasLeastThreeTicket']])
Z([3,'max-height: 468rpx;'])
Z([[2,'?:'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'popupInfo']],[3,'type']],[1,1]],[[2,'=='],[[6],[[7],[3,'popupInfo']],[3,'type']],[1,9]]],[[6],[[6],[[7],[3,'popupInfo']],[3,'ticketToastinfo']],[3,'tickets']],[[6],[[6],[[7],[3,'popupInfo']],[3,'ticketHaveToastInfo']],[3,'haveTickets']]])
Z([3,'index'])
Z([3,'row coupon-li'])
Z([3,'column start-cen coupon-desc'])
Z([[6],[[7],[3,'item']],[3,'title']])
Z([[6],[[7],[3,'item']],[3,'subTitle']])
Z([[6],[[7],[3,'item']],[3,'effectTitle']])
Z([[2,'&&'],[[7],[3,'showScroll']],[[7],[3,'hasLeastThreeTicket']]])
Z([[2,'=='],[[6],[[7],[3,'popupInfo']],[3,'type']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_13=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_13=true;
var x=['./useCar/component/activityPopup/activityPopup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_13_1()
var oFF=_v()
_(r,oFF)
if(_oz(z,0,e,s,gg)){oFF.wxVkey=1
var fGF=_mz(z,'scroll-view',['catchtouchmove',1,'class',1,'scrollY',2],[],e,s,gg)
var cHF=_v()
_(fGF,cHF)
if(_oz(z,4,e,s,gg)){cHF.wxVkey=1
var oJF=_mz(z,'view',['class',5,'style',1],[],e,s,gg)
var cKF=_v()
_(oJF,cKF)
if(_oz(z,7,e,s,gg)){cKF.wxVkey=1
}
var lMF=_mz(z,'scroll-view',['bindscroll',8,'scrollY',1,'style',2],[],e,s,gg)
var aNF=_v()
_(lMF,aNF)
var tOF=function(bQF,ePF,oRF,gg){
var oTF=_n('view')
_rz(z,oTF,'class',13,bQF,ePF,gg)
var cVF=_n('view')
_rz(z,cVF,'class',14,bQF,ePF,gg)
var hWF=_v()
_(cVF,hWF)
if(_oz(z,15,bQF,ePF,gg)){hWF.wxVkey=1
}
var oXF=_v()
_(cVF,oXF)
if(_oz(z,16,bQF,ePF,gg)){oXF.wxVkey=1
}
hWF.wxXCkey=1
oXF.wxXCkey=1
_(oTF,cVF)
var fUF=_v()
_(oTF,fUF)
if(_oz(z,17,bQF,ePF,gg)){fUF.wxVkey=1
}
fUF.wxXCkey=1
_(oRF,oTF)
return oRF
}
aNF.wxXCkey=2
_2z(z,11,tOF,e,s,gg,aNF,'item','index','index')
_(oJF,lMF)
var oLF=_v()
_(oJF,oLF)
if(_oz(z,18,e,s,gg)){oLF.wxVkey=1
}
cKF.wxXCkey=1
oLF.wxXCkey=1
_(cHF,oJF)
}
var hIF=_v()
_(fGF,hIF)
if(_oz(z,19,e,s,gg)){hIF.wxVkey=1
}
cHF.wxXCkey=1
hIF.wxXCkey=1
_(oFF,fGF)
}
oFF.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_13();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/activityPopup/activityPopup.wxml'] = [$gwx_XC_13, './useCar/component/activityPopup/activityPopup.wxml'];else __wxAppCode__['useCar/component/activityPopup/activityPopup.wxml'] = $gwx_XC_13( './useCar/component/activityPopup/activityPopup.wxml' );
	;__wxRoute = "useCar/component/activityPopup/activityPopup";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/activityPopup/activityPopup.js";define("useCar/component/activityPopup/activityPopup.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../@babel/runtime/helpers/interopRequireDefault"),o=require("../../lib/nextTick.js"),e=require("../../store/index"),a=(t(require("../../../utils/regenerator-runtime")),t(require("../../common/request"))),i=require("../../common/common"),n=require("../../common/bury/index"),s=null;Component({properties:{pageSource:{type:String}},attached:function(){this.$setData=o.setState.bind(this),(0,e.bindState)(this,{popupInfo:"common.popupData",isShowPopup:"common.isShowPopup",refId:"common.refId",tabToken:"tabInfo.tabIndex",productId:"productId",startPoint:"locaiotnStartInfoData",position:"common.position"}),s=new n.PopupStatistics(this.data.refId,this.data.pageSource)},detached:function(){(0,e.unbindState)(this)},data:{popupInfo:{},hasMoreSlide:!0,isShowPopup:!1,needBury:!0,showScroll:!0,hasLeastThreeTicket:!1},methods:{stateDidChanged:function(t){var o=t["popupInfo.type"],a=t["popupInfo.ticketToastinfo"],n=t["popupInfo.ticketHaveToastInfo"],p=t["popupInfo.activityToastInfo"];if(a&&a.tickets.length){var r=a.name;a.tickets.forEach((function(t){s.getCouponPopupShow({name:r,coupon:t})}))}if(n&&n.haveTickets.length){var c=n.name;n.haveTickets.forEach((function(t){s.useCouponPopupShow({name:c,coupon:t})}))}p&&(p.activitys.length<2&&this.setData({hasMoreSlide:!1}),s.activityPopupShow({name:p.name,pid:this.data.productId,refId:e.store.getState().common.refid,position:e.store.getState().common.position,startPoint:this.data.startPoint,strategyId:p.strategyId})),(a||n)&&(1===o&&(0,i.get)(a,"tickets.length")>3||3===o&&(0,i.get)(n,"haveTickets.length")>3?this.setData({hasLeastThreeTicket:!0}):this.setData({hasLeastThreeTicket:!1}))},changeItem:function(t){var o=t.detail.current,a=this.data.popupInfo.activityToastInfo;this.data.needBury&&s.activityPopupShow({name:a.name,pid:this.data.productId,refId:e.store.getState().common.refid,position:e.store.getState().common.position,startPoint:this.data.startPoint,strategyId:a.strategyId}),o+1>=a.activitys.length&&this.$setData({needBury:!1})},close:function(){this.data.popupInfo.activityToastInfo&&s.activityPopupClose({name:this.data.popupInfo.activityToastInfo.name,pid:this.data.productId,refId:e.store.getState().common.refid}),e.store.dispatch({type:e.actions.SET_POPUP_DATA,payload:{}}),e.store.dispatch({type:e.actions.SET_INDEX_POPUP_LEVEL,payload:0})},jumpUrl:function(t){t&&(0,i.openUrl)({jumpUrl:t})},toastFn:function(t){wx.showToast({title:t,icon:"none",duration:2e3})},couponClick:function(t){var o=this,e=t.currentTarget.dataset.item,i=e.forwardUrl,n=this.data.popupInfo.type;if(1===n){var p=this.data.popupInfo.ticketToastinfo.name;s.getCouponPopupClick({name:p,coupon:e})}else if(3===n){var r=this.data.popupInfo.ticketHaveToastInfo.name;s.useCouponPopupClick({name:r,coupon:e})}this.close(),9===n?a.default.postQC("materielTicket/drawBlackWhaleCoupon").then((function(t){200==t.status?o.toastFn("领取成功"):o.toastFn("领取失败，请刷新稍后再试")})).catch((function(t){})):i&&this.jumpUrl(i)},activityClick:function(t){var o=t.currentTarget.dataset,a=o.url,n=(o.index,(0,i.get)(this.data,"popupInfo.activityToastInfo.name","")),p=(0,i.get)(this.data,"popupInfo.activityToastInfo.strategyId","");s.activityPopupClick({name:n,pid:this.data.productId,refId:e.store.getState().common.refid,position:e.store.getState().common.position,startPoint:this.data.startPoint,strategyId:p}),this.close(),a&&this.jumpUrl(a)},bindscroll:function(t){t.detail.scrollTop>40&&this.data.showScroll&&this.setData({showScroll:!1})}}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/activityPopup/activityPopup.js'});require("useCar/component/activityPopup/activityPopup.js");$gwx_XC_14=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'warp'])
Z([[2,'?:'],[[7],[3,'animation']],[1,350],[1,0]])
Z([3,'slide-up'])
Z([[7],[3,'isLoaded']])
Z([[2,'&&'],[[7],[3,'showBlackFish']],[[2,'==='],[[7],[3,'enable']],[1,true]]])
Z([[2,'&&'],[[7],[3,'enable']],[[2,'||'],[[2,'&&'],[[2,'!'],[[7],[3,'newUserFlagShow']]],[[2,'!'],[[7],[3,'fenceRedInfo']]]],[[7],[3,'showBlackFish']]]])
Z([[2,'=='],[[7],[3,'xjmpAB']],[1,'B']])
Z([[2,'||'],[[6],[[7],[3,'isManualLocationInfo']],[3,'msg']],[[6],[[7],[3,'list']],[3,'length']]])
Z([[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[8],'isManualLocationInfo',[[7],[3,'isManualLocationInfo']]],[[8],'isManualClick',[[7],[3,'isManualClick']]]],[[8],'onGoModifyClick',[[7],[3,'onGoModifyClick']]]],[[8],'onManualCloseClick',[[7],[3,'onManualCloseClick']]]],[[8],'shift',[[7],[3,'shift']]]],[[8],'isLoaded',[[7],[3,'isLoaded']]]],[[8],'top',[[7],[3,'top']]]],[[8],'items',[[7],[3,'items']]]],[[8],'onItemClick',[[7],[3,'onItemClick']]]],[[8],'newUserFlagShow',[[7],[3,'newUserFlagShow']]]])
Z([3,'announcement-notice'])
Z([[2,'&&'],[[2,'&&'],[[2,'||'],[[7],[3,'newUserFlagShow']],[[7],[3,'fenceRedInfo']]],[[7],[3,'enable']]],[[2,'!'],[[7],[3,'showBlackFish']]]])
Z([3,'onNewUserClick'])
Z([3,'click_area'])
Z(z[6])
Z([[2,'!'],[[7],[3,'fenceRedInfo']]])
Z([[2,'&&'],[[2,'||'],[[7],[3,'newUserFlagShow']],[[7],[3,'fenceRedInfo']]],[[2,'||'],[[2,'>'],[[6],[[7],[3,'items']],[3,'length']],[1,0]],[[6],[[7],[3,'isManualLocationInfo']],[3,'msg']]]])
Z([a,[3,'newuser announcement '],[[2,'?:'],[[2,'==='],[[7],[3,'pageType']],[1,'smallHome']],[1,'smallHome'],[1,'']],[3,' '],[[2,'?:'],[[2,'||'],[[2,'!'],[[7],[3,'isLoaded']]],[[2,'==='],[[7],[3,'enable']],[1,false]]],[1,'hide'],[1,'']],[3,' '],[[2,'?:'],[[2,'!'],[[7],[3,'isIphone']]],[1,'android'],[1,'']]])
Z([a,[3,'height:'],[[2,'-'],[[12],[[6],[[7],[3,'tools']],[3,'getHeight']],[[5],[[5],[[5],[[5],[[7],[3,'newUserFlagShow']]],[[7],[3,'items']]],[[7],[3,'isManualLocationInfo']]],[[7],[3,'fenceRedInfo']]]],[1,20]],[3,'rpx;']])
Z([[7],[3,'fenceRedInfo']])
Z([[6],[[7],[3,'fenceRedInfo']],[3,'titleText']])
Z([[2,'||'],[[2,'>'],[[6],[[7],[3,'items']],[3,'length']],[1,0]],[[6],[[7],[3,'isManualLocationInfo']],[3,'msg']]])
Z(z[8])
Z(z[9])
Z(z[9])
Z([[2,'&&'],[[6],[[7],[3,'isManualLocationInfo']],[3,'msg']],[[2,'!'],[[7],[3,'isManualClick']]]])
Z([[7],[3,'items']])
Z([3,'*this'])
Z([3,'onItemClick'])
Z([3,'announcement-item'])
Z([[6],[[7],[3,'item']],[3,'wxhref']])
Z([[6],[[7],[3,'item']],[3,'bgImg']])
Z([[2,'!='],[[7],[3,'xjmpAB']],[1,'B']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_14=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_14=true;
var x=['./useCar/component/announcement/announcement.wxml'];d_[x[0]]={}
d_[x[0]]["announcement-notice"]=function(e,s,r,gg){
var z=gz$gwx_XC_14_1()
var b=x[0]+':announcement-notice'
r.wxVkey=b
gg.f=$gdc(f_["./useCar/component/announcement/announcement.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,24,e,s,gg)){oB.wxVkey=1
}
else{oB.wxVkey=2
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_mz(z,'view',['bindtap',27,'class',1,'data-href',2],[],cF,fE,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,30,cF,fE,gg)){oJ.wxVkey=1
}
else{oJ.wxVkey=2
var lK=_v()
_(oJ,lK)
if(_oz(z,31,cF,fE,gg)){lK.wxVkey=1
}
lK.wxXCkey=1
}
oJ.wxXCkey=1
_(hG,cI)
return hG
}
xC.wxXCkey=2
_2z(z,25,oD,e,s,gg,xC,'item','index','*this')
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_14_1()
var oZF=_mz(z,'transition',['customClass',0,'duration',1,'name',1,'show',2],[],e,s,gg)
var l1F=_v()
_(oZF,l1F)
if(_oz(z,4,e,s,gg)){l1F.wxVkey=1
}
var a2F=_v()
_(oZF,a2F)
if(_oz(z,5,e,s,gg)){a2F.wxVkey=1
var e4F=_v()
_(a2F,e4F)
if(_oz(z,6,e,s,gg)){e4F.wxVkey=1
}
var b5F=_v()
_(a2F,b5F)
if(_oz(z,7,e,s,gg)){b5F.wxVkey=1
var o6F=_v()
_(b5F,o6F)
var x7F=_oz(z,9,e,s,gg)
var o8F=_gd(x[0],x7F,e_,d_)
if(o8F){
var f9F=_1z(z,8,e,s,gg) || {}
var cur_globalf=gg.f
o6F.wxXCkey=3
o8F(f9F,f9F,o6F,gg)
gg.f=cur_globalf
}
else _w(x7F,x[0],14,1138)
}
e4F.wxXCkey=1
b5F.wxXCkey=1
}
var t3F=_v()
_(oZF,t3F)
if(_oz(z,10,e,s,gg)){t3F.wxVkey=1
var oBG=_mz(z,'view',['bindtap',11,'class',1],[],e,s,gg)
var cCG=_v()
_(oBG,cCG)
if(_oz(z,13,e,s,gg)){cCG.wxVkey=1
}
cCG.wxXCkey=1
_(t3F,oBG)
var c0F=_v()
_(t3F,c0F)
if(_oz(z,14,e,s,gg)){c0F.wxVkey=1
}
var hAG=_v()
_(t3F,hAG)
if(_oz(z,15,e,s,gg)){hAG.wxVkey=1
}
var oDG=_mz(z,'view',['class',16,'style',1],[],e,s,gg)
var lEG=_v()
_(oDG,lEG)
if(_oz(z,18,e,s,gg)){lEG.wxVkey=1
var tGG=_v()
_(lEG,tGG)
if(_oz(z,19,e,s,gg)){tGG.wxVkey=1
}
tGG.wxXCkey=1
}
var aFG=_v()
_(oDG,aFG)
if(_oz(z,20,e,s,gg)){aFG.wxVkey=1
var eHG=_v()
_(aFG,eHG)
var bIG=_oz(z,22,e,s,gg)
var oJG=_gd(x[0],bIG,e_,d_)
if(oJG){
var xKG=_1z(z,21,e,s,gg) || {}
var cur_globalf=gg.f
eHG.wxXCkey=3
oJG(xKG,xKG,eHG,gg)
gg.f=cur_globalf
}
else _w(bIG,x[0],16,1890)
}
lEG.wxXCkey=1
aFG.wxXCkey=1
_(t3F,oDG)
c0F.wxXCkey=1
hAG.wxXCkey=1
}
l1F.wxXCkey=1
a2F.wxXCkey=1
t3F.wxXCkey=1
_(r,oZF)
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_14();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/announcement/announcement.wxml'] = [$gwx_XC_14, './useCar/component/announcement/announcement.wxml'];else __wxAppCode__['useCar/component/announcement/announcement.wxml'] = $gwx_XC_14( './useCar/component/announcement/announcement.wxml' );
	;__wxRoute = "useCar/component/announcement/announcement";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/announcement/announcement.js";define("useCar/component/announcement/announcement.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t,e=require("../../../@babel/runtime/helpers/interopRequireDefault"),a=e(require("../../../@babel/runtime/regenerator")),n=require("../../../@babel/runtime/helpers/asyncToGenerator"),i=require("../../../@babel/runtime/helpers/toConsumableArray"),o=require("../../../@babel/runtime/helpers/objectSpread2"),s=(e(require("../../../utils/regenerator-runtime")),require("../../services/CommonService")),r=require("../../util/tool"),c=require("../../common/common"),l=require("../../common/business"),u=e(require("../../../util/tcUtil"));Component({externalClasses:["bgClass"],properties:{animation:Boolean,pageType:{type:String,value:""},productType:{type:String,value:""},information:{type:Object,value:function(){return{}}},tolls:{type:Number,value:0},enable:{type:Boolean,value:!0},straight:{type:Boolean,value:!1},options:{type:Object,value:function(){return{}}},isManualClick:{type:Boolean,default:!1},isIndex:{type:Boolean,default:!1},xjmpAB:{type:String,default:"A"}},data:{isIphone:(0,c.isIphoneIos)(),isLoaded:!1,cur:0,radius:wx.getSystemInfoSync().windowWidth/750,list:[],items:[],top:0,shift:!1,bgColor:"",color:"",subColor:"#8b92a7",queryParams:{},pollTime:3e3,pointNotice:{},isManualLocationInfo:{},inquiryNewBenefitsAd:"",newUserFlagShow:!1,blackFishTips:[],showBlackFish:!1,fenceRedInfo:null},observers:{"pageType,productType,information":function(t,e,a){var n=o({pageType:t,productType:e},(0,r.pick)(a,["startCityId","startAddress","startLongitude","startLatitude","endCityId","endLatitude","endLongitude","endAddress"]));this.setData({queryParams:n}),n&&n.startCityId&&this.refreshMessage(n)},tolls:function(t){t!==this.oldTolls&&(this.setList(!1),this.oldTolls=t)},"isManualClick,isManualLocationInfo":function(t,e){var a=Boolean(!t&&e&&e.msg);a||this.timerCreate&&this.timerCreate();var n=Boolean(this.originList);this.triggerEvent("onAlertLoc",{show:a,isLoadedInfo:n,isManualLocationInfo:e})}},methods:{onGoModifyClick:function(){var t=this.data.queryParams||{},e=t.currentLatitude,a=t.currentLongitude,n=t.startLatitude,i=t.startLongitude;(0,c.traceEv)("精准定位去修改","精准定位去修改^".concat(a,"^").concat(e,"^").concat(i,"^").concat(n,"^"),"群派报价页"),this.triggerEvent("onGoModifyClick",{action:"onGoModifyClick",markerId:"1"})},onManualCloseClick:function(){var t=this.data.queryParams||{},e=t.currentLatitude,a=t.currentLongitude,n=t.startLatitude,i=t.startLongitude;this.triggerEvent("onCloseClick",{}),(0,c.traceEv)("精准定位关闭","精准定位关闭^".concat(a,"^").concat(e,"^").concat(i,"^").concat(n,"^"),"群派报价页"),this.setData({isManualLocationInfo:{}}),this.timerCreate&&this.timerCreate()},setCur:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=e-this.data.cur;1!==a&&(this.setData({shift:!0}),setTimeout((function(){return t.setData({shift:!1})}),466));var n=this.data,i=n.items,o=n.top,s=i[e]||{},r=wx.createSelectorQuery().in(this);r.selectAll(".announcement-item").boundingClientRect((function(a){var n=0;e>=1&&a[e-1]&&(n=o+a[e-1].height),t.setData({top:n,bgColor:s.bgColor||null,color:s.color||null,subColor:s.subColor||null,cur:e}),t.data.isLoaded||(t.initTimer=setTimeout((function(){t.setData({isLoaded:!0}),t.triggerEvent("isloaded",{callBack:"true",isNewUser:t.isNewUser,fenceRedInfo:t.data.fenceRedInfo})}),482))})).exec()},setList:function(t,e){var a=this,n=this.originList||[],o=this.data.pollTime,s=this.data.tolls||0;if(s){var r=n.find((function(t){return"tollsTips"===t.type}));r&&r.msg&&(r.msg=String(r.msg).replace("[tolls]",s))}else n=n.filter((function(t){return"tollsTips"!==t.type}));var c=n.length?[].concat(i(n),[n[0]]):[];this.setData({list:n,items:c}),n.length&&setTimeout((function(){return a.traceAnnounce("公告曝光",null,e)})),!1!==t&&clearInterval(this.timer),this.setCur(0,!0),n.length>1&&(this.timerCreate=function(){clearInterval(a.timer),a.timer=setInterval(a.onLoop.bind(a),o+466),a.timerCreate=null},!this.data.isManualClick&&this.data.isManualLocationInfo&&this.data.isManualLocationInfo.msg||this.timerCreate())},onLoop:function(){var t=this;if(!1!==this.data.enable){var e=this.data,a=e.list,n=e.cur+1;this.setCur(n),n>=a.length&&setTimeout((function(){t.setCur(0,!0)}),466)}},onItemClick:function(t){var e=t.currentTarget.dataset.href;e&&(this.traceAnnounce("公告点击",e),(0,c.openUrl)({jumpUrl:e}))},refreshMessage:(t=n(a.default.mark((function t(e,n){var i,o,s,c,u,d=this;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.lastParam||!(0,r.equals)(e,this.lastParam)||n){t.next=2;break}return t.abrupt("return");case 2:i=this.data&&this.data.options||{},o=i.isManualLocation,s="",c="",e.pageKey="usecarxcc/selectCar",e.refId=(0,l.getRefId)(),u=function(t){s=t.lat,c=t.lng,1==o&&s&&c&&(e.isPickUpPoint=!0,e.currentLatitude=s,e.currentLongitude=c),this.getAnnounceInfo(e)}.bind(this),wx.tcyc.__locationP?wx.tcyc.__locationP.then(u).catch((function(t){d.getAnnounceInfo(e)})):this.getAnnounceInfo(e),this.lastParam=e;case 9:case"end":return t.stop()}}),t,this)}))),function(e,a){return t.apply(this,arguments)}),getAnnounceInfo:function(t){var e=this;this.triggerEvent("status",{status:0}),(0,s.queryAnnounceInfo)(t).then((function(a){if(!e.isDestroy){e.originList=a.body&&a.body.list?a.body.list:[],e.isNewUser=a.body.newUser;var n=a.body&&a.body.pollTime?a.body.pollTime:3e3,i=a.body&&a.body.pointNotice?a.body.pointNotice:{},o=a.body&&a.body.fenceRedInfo?a.body.fenceRedInfo:null;e.setData({pollTime:n,isManualLocationInfo:i,inquiryNewBenefitsAd:a.body.inquiryNewBenefitsAd,fenceRedInfo:o}),e.setList(null,t);var s=1;if(a.body.newUser&&"b"===a.body.newUserStatus?(e.setData({newUserFlagShow:a.body.newUser}),e.newUserFlagShowUrl=a.body.newUserImg,s=2):"c"===a.body.newUserStatus&&e.setData({newUserFlagShow:!1}),a.body.blackWhaleSmallPageRsp){var r=(getApp().globalData.locationInfo||{}).Id;if(e.blackWhale=a.body.blackWhaleSmallPageRsp,a.body.blackWhaleSmallPageRsp&&a.body.blackWhaleSmallPageRsp.display){var u=a.body.blackWhaleSmallPageRsp.noticeInfo;if(u&&u.startsWith("list")){var d=u.slice(5).split(",");e.setData({blackFishTips:d.slice(1),blackFishTitle:d[0],showBlackFish:!0}),s=2}(0,c.traceEv)("黑鲸专享曝光","^黑鲸专享曝光^".concat(e.data.productId,"^").concat(r,"^").concat(e.blackWhale.discountRate,"^").concat(e.blackWhale.discountCapAmount,"^").concat((0,l.getRefId)(),"^"),"群派报价页")}(0,c.traceEv)("黑鲸专享实验","^黑鲸专享实验^".concat(e.data.productId,"^").concat(r,"^").concat(e.blackWhale.discountRate,"^").concat(e.blackWhale.discountCapAmount,"^").concat(e.blackWhale.abTestNo,"+").concat(e.blackWhale.abResult,"^").concat((0,l.getRefId)(),"^"),"群派报价页")}e.triggerEvent("status",{status:s})}})).catch((function(t){console.warn("noticeComponent/queryInfo:",t)}))},reload:function(t){this.refreshMessage(t||this.data.queryParams,!0)},traceAnnounce:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"公告曝光",e=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,n=this.data,i=n.pageType,o=n.productType,s=n.list,r="国内用车页";if("queryOrder"===i)r="群派报价页";else if("smallHome"===i)switch(o){case"car":r="首页打车tab";break;case"flight":r="首页接送机tab";break;case"train":r="首页接送站tab"}else if("orderDetail"===i)switch(o){case"car":r="打车订单详情";break;case"flight":case"train":r="接送订单详情"}var l=a||{},u=l.currentLatitude,d=l.currentLongitude,h=l.startLatitude,f=l.startLongitude,p="公告点击"===t?[s.find((function(t){return t.wxhref===e}))]:s,g=p.map((function(t){return"order"===t.type?"订单":"timesTips"===t.type&&"运营","".concat(t.msg)}));this.data.isManualLocationInfo.msg&&g.unshift("精准定位^".concat(d,"^").concat(u,"^").concat(f,"^").concat(h,"^")),(0,c.traceEv)(t,t+"^".concat(g.join("|"),"^"),r)},onNewUserClick:function(){this.data.fenceRedInfo||((0,c.traceEv)("新客专享点击","^".concat((0,l.getRefId)(),"^"),"群派报价页"),this.newUserFlagShowUrl&&(0,c.toWebview)(this.newUserFlagShowUrl))},onBlackFishClick:function(){var t=(getApp().globalData.locationInfo||{}).Id;(0,c.toWebview)(this.blackWhale.landingPage),(0,c.traceEv)("黑鲸专享点击\t","^黑鲸专享点击^".concat(this.data.productId,"^").concat(t,"^").concat(this.blackWhale.discountRate,"^").concat(this.blackWhale.discountCapAmount,"^").concat((0,l.getRefId)(),"^"),"群派报价页")}},created:function(){this.reload=u.default.debounce(this.reload,500)},detached:function(){this.setData({isLoaded:!1}),this.isDestroy=!0,clearInterval(this.timer),console.warn("announcement detached")}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/announcement/announcement.js'});require("useCar/component/announcement/announcement.js");$gwx_XC_15=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'aug-qa'])
Z([3,'toAugDetail'])
Z([3,'aug-content'])
Z([[9],[[9],[[8],'title',[1,'服务承诺']],[[8],'tip',[1,'查看详情']]],[[8],'arrow',[[7],[3,'arrow']]]])
Z([3,'aug-qa-header'])
Z([3,'toQaDetail'])
Z([3,'qa-content'])
Z([[9],[[9],[[8],'title',[1,'常见问题']],[[8],'tip',[1,'更多问题']]],[[8],'arrow',[[7],[3,'arrow']]]])
Z(z[4])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_15=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_15=true;
var x=['./useCar/component/augmentedAndQa/augmentedAndQa.wxml'];d_[x[0]]={}
d_[x[0]]["aug-qa-header"]=function(e,s,r,gg){
var z=gz$gwx_XC_15_1()
var b=x[0]+':aug-qa-header'
r.wxVkey=b
gg.f=$gdc(f_["./useCar/component/augmentedAndQa/augmentedAndQa.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_15_1()
var fMG=_n('view')
_rz(z,fMG,'class',0,e,s,gg)
var cNG=_mz(z,'view',['catchtap',1,'class',1],[],e,s,gg)
var hOG=_v()
_(cNG,hOG)
var oPG=_oz(z,4,e,s,gg)
var cQG=_gd(x[0],oPG,e_,d_)
if(cQG){
var oRG=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
hOG.wxXCkey=3
cQG(oRG,oRG,hOG,gg)
gg.f=cur_globalf
}
else _w(oPG,x[0],1,85)
_(fMG,cNG)
var lSG=_mz(z,'view',['catchtap',5,'class',1],[],e,s,gg)
var aTG=_v()
_(lSG,aTG)
var tUG=_oz(z,8,e,s,gg)
var eVG=_gd(x[0],tUG,e_,d_)
if(eVG){
var bWG=_1z(z,7,e,s,gg) || {}
var cur_globalf=gg.f
aTG.wxXCkey=3
eVG(bWG,bWG,aTG,gg)
gg.f=cur_globalf
}
else _w(tUG,x[0],1,541)
_(fMG,lSG)
_(r,fMG)
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_15();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/augmentedAndQa/augmentedAndQa.wxml'] = [$gwx_XC_15, './useCar/component/augmentedAndQa/augmentedAndQa.wxml'];else __wxAppCode__['useCar/component/augmentedAndQa/augmentedAndQa.wxml'] = $gwx_XC_15( './useCar/component/augmentedAndQa/augmentedAndQa.wxml' );
	;__wxRoute = "useCar/component/augmentedAndQa/augmentedAndQa";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/augmentedAndQa/augmentedAndQa.js";define("useCar/component/augmentedAndQa/augmentedAndQa.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../@babel/runtime/helpers/interopRequireDefault"),e=require("../../../@babel/runtime/helpers/toConsumableArray"),n=require("../../config/index"),i=require("../../common/common"),o=require("../../store/index"),a=require("../../lib/reselect"),r=t(require("../../index/behaviors/trackEvent"));Component({behaviors:[r.default],attached:function(){(0,o.bindState)(this,{confidenceInfo:(0,a.createSelector)((function(t){return t.common.augmentedAndQuestion&&t.common.augmentedAndQuestion.confidenceInfo}),(function(t){return t||[]})),flightQADetailList:(0,a.createSelector)((function(t){return t.common.augmentedAndQuestion&&t.common.augmentedAndQuestion.flightQADetailList}),(function(t){return t&&t.splice(0,2)})),trainQADetailList:(0,a.createSelector)((function(t){return t.common.augmentedAndQuestion&&t.common.augmentedAndQuestion.trainQADetailList}),(function(t){return t&&t.splice(0,2)})),productId:"productId"})},detached:function(){(0,o.unbindState)(this)},data:{arrow:n.kImgPrefix+"icon_new_right.png"},methods:{toAugDetail:function(){var t,e=this.data.productId,a=o.store.getState().common.refid;12==e||13==e?t="接送机":14!=e&&15!=e||(t="接送站"),this.traceEvByPage("增信点击","^增信点击^".concat(n.kProductNameMap[+e],"^").concat(a,"^"),"".concat(t,"首页"));var r=this.data.confidenceInfo.confidenceImageUrl;(0,i.openUrl)({jumpUrl:r})},toQaDetail:function(){var t,a=o.store.getState(),r=a.productId,c=a.common,u=o.store.getState().common.refid;12==r||13==r?t="接送机":14!=r&&15!=r||(t="接送站"),this.traceEvByPage("常见问题点击","^常见问题点击^".concat(n.kProductNameMap[+r],"^").concat(u,"^"),"".concat(t,"首页"));var d,s=n.kCarUrlH5+"problem";12==r||13==r?d=this.data.flightQADetailList&&encodeURIComponent(JSON.stringify([].concat(e(this.data.flightQADetailList),e(c.augmentedAndQuestion.flightQADetailList)))):14!=r&&15!=r||(d=this.data.trainQADetailList&&encodeURIComponent(JSON.stringify([].concat(e(this.data.trainQADetailList),e(c.augmentedAndQuestion.trainQADetailList))))),(0,i.toWebview)(s,{data:d})}}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/augmentedAndQa/augmentedAndQa.js'});require("useCar/component/augmentedAndQa/augmentedAndQa.js");$gwx_XC_16=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([a,[3,'nav-bar-inner '],[[2,'?:'],[[7],[3,'ios']],[1,'ios'],[1,'android']]])
Z([a,[[7],[3,'navigationbarinnerStyle']],[[7],[3,'displayStyle']]])
Z([3,'showPersonMenu'])
Z([3,'nav-bar-left'])
Z([[7],[3,'navBarLeft']])
Z([[7],[3,'home']])
Z([[7],[3,'showRedDot']])
Z([3,'left'])
Z([3,'nav-bar-center'])
Z([[7],[3,'centerSlotStyle']])
Z([[7],[3,'title']])
Z([3,'center'])
Z([3,'right'])
Z([[7],[3,'showFavBubble']])
Z([[2,'!'],[[7],[3,'ios']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_16=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_16=true;
var x=['./useCar/component/customHeader/customHeader.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_16_1()
var oZG=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var f1G=_mz(z,'view',['bindtap',2,'class',1,'style',2],[],e,s,gg)
var c2G=_v()
_(f1G,c2G)
if(_oz(z,5,e,s,gg)){c2G.wxVkey=1
var h3G=_v()
_(c2G,h3G)
if(_oz(z,6,e,s,gg)){h3G.wxVkey=1
}
h3G.wxXCkey=1
}
else{c2G.wxVkey=2
var o4G=_n('slot')
_rz(z,o4G,'name',7,e,s,gg)
_(c2G,o4G)
}
c2G.wxXCkey=1
_(oZG,f1G)
var c5G=_mz(z,'view',['class',8,'style',1],[],e,s,gg)
var o6G=_v()
_(c5G,o6G)
if(_oz(z,10,e,s,gg)){o6G.wxVkey=1
}
else{o6G.wxVkey=2
var l7G=_n('slot')
_rz(z,l7G,'name',11,e,s,gg)
_(o6G,l7G)
}
o6G.wxXCkey=1
_(oZG,c5G)
var a8G=_n('slot')
_rz(z,a8G,'name',12,e,s,gg)
_(oZG,a8G)
_(r,oZG)
var xYG=_v()
_(r,xYG)
if(_oz(z,13,e,s,gg)){xYG.wxVkey=1
var t9G=_v()
_(xYG,t9G)
if(_oz(z,14,e,s,gg)){t9G.wxVkey=1
}
t9G.wxXCkey=1
}
xYG.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_16();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/customHeader/customHeader.wxml'] = [$gwx_XC_16, './useCar/component/customHeader/customHeader.wxml'];else __wxAppCode__['useCar/component/customHeader/customHeader.wxml'] = $gwx_XC_16( './useCar/component/customHeader/customHeader.wxml' );
	;__wxRoute = "useCar/component/customHeader/customHeader";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/customHeader/customHeader.js";define("useCar/component/customHeader/customHeader.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../common/common"),e=require("../../common/business"),a=require("../../../utils/common");Component({options:{multipleSlots:!0,addGlobalClass:!0},properties:{extClass:{type:String,value:""},background:{type:String,value:"rgba(255, 255, 255, 1)",observer:"_showChange"},backgroundImage:{type:String,value:"linear-gradient(#fff, #fff)",observer:"_showChange"},color:{type:String,value:"rgba(0, 0, 0, 1)"},title:{type:String,value:""},home:{type:Boolean,value:!1},centerSlotStyle:{type:String,value:""},showTip:{type:Boolean,value:!1},bigEventAB:{stype:String,observer:"bigEventABChange"},showRedDot:{type:Boolean,value:!0}},created:function(){this.getSystemInfo()},attached:function(){this.handleHome(),this.setStyle(),this.handleFavBubble()},detached:function(){clearTimeout(this.bubbleTimer)},observers:{showTip:function(){this.handleFavBubble()}},data:{homeOnly:!1,showFavBubble:!1,animationData:{},isGray:"Z"},pageLifetimes:{show:function(){this.getSystemInfo(),this.setStyle()}},methods:{bigEventABChange:function(t){console.warn("bigEventABChangeTop",t),this.setData({isGray:"A"==t})},handleHome:function(){var t=!1;getCurrentPages().length<=1&&(t=!0),this.setData({homeOnly:t})},handleFavBubble:function(){this.initFav||(this.initFav=!0,wx.onAddToFavorites&&wx.onAddToFavorites((function(t){console.warn("onAddToFavorites",t),wx.setStorage({key:"is_show_fav_bubble",data:"1"})})));try{!wx.getStorageSync("is_show_fav_bubble")&&this.data.showTip&&this.setData({showFavBubble:!0})}catch(t){console.error(t)}},setStyle:function(){var t,e=getApp().globalSystemInfo,a=e.rpxRatio,n=e.statusBarHeight,o=e.navBarHeight,i=e.capsulePosition,s=e.navBarExtendHeight,r=e.ios,h=e.windowWidth,g=(i.right,h-i.left),u=["color: ".concat(this.data.color),"background: ".concat(this.data.background),"height:".concat(o+s,"px"),"padding-top:".concat(n,"px"),"padding-right:".concat(g,"px"),"padding-bottom:".concat(s,"px"),"background-image: ".concat(this.data.backgroundImage)].join(";");t=["width:".concat(i.width,"px"),"height:".concat(i.height,"px")].join(";");var l=o+s+20/a;this.setData({navigationbarinnerStyle:u,navBarLeft:t,navBarHeight:o,capsulePosition:i,navBarExtendHeight:s,ios:r,modelTop:l}),this.triggerEvent("height",{val:o+s})},_showChange:function(){this.setStyle()},showPersonMenu:function(){wx.tcyc.eventChannel.emit("triglePersonMenu"),(0,t.traceEv)("首页","^".concat((0,e.getRefId)(),"^").concat((0,a.getUnionId)()),"个人中心按钮-点击&个人中心弹窗-曝光","首页")},getSystemInfo:function(){var t=getApp();if(t.globalSystemInfo&&!t.globalSystemInfo.ios)return t.globalSystemInfo;var e,a=wx.getSystemInfoSync(),n=!!(a.system.toLowerCase().search("ios")+1),o=this.isIphoneWithNotch(a.brand,a.model),i=750/(a.screenWidth||375),s=this.isAndroidWithNotch(a.model);try{if(null===(e=wx.getMenuButtonBoundingClientRect?wx.getMenuButtonBoundingClientRect():null))throw"getMenuButtonBoundingClientRect error";if(!(e.width&&e.top&&e.left&&e.height))throw"getMenuButtonBoundingClientRect error"}catch(t){var r="",h=96;"android"===a.platform?(r=8,h=96):"devtools"===a.platform?r=n?4:7.5:(r=4,h=88),a.statusBarHeight||(a.statusBarHeight=20,o&&(a.statusBarHeight=44),s&&(a.statusBarHeight=48)),e={bottom:a.statusBarHeight+r+32,height:32,left:a.windowWidth-h-10,right:a.windowWidth-10,top:a.statusBarHeight+r,width:h}}var g="";return a.statusBarHeight?(g=function(){var t=e.top-a.statusBarHeight;return a.statusBarHeight+2*t+e.height}(),a.navBarExtendHeight=n?4:0):(a.statusBarHeight=20,o&&(a.statusBarHeight=44),s&&(a.statusBarHeight=48),g=a.statusBarHeight+40,a.navBarExtendHeight=4),a.navBarHeight=g,a.capsulePosition=e,a.ios=n,a.rpxRatio=i,t.globalSystemInfo=a,a},isIphoneWithNotch:function(t,e){return"iPhone"===t&&/unknown|iPhone X/.test(e)},isAndroidWithNotch:function(t){return/MI 8|PAAM00|COR-AL00|M2102K1AC/.test(t)},onCloseFavApp:function(){var t=this;wx.setStorage({key:"is_show_fav_bubble",data:"1"});var e=wx.createAnimation({duration:300,timingFunction:"ease"});e.opacity(0).step(),this.setData({animationData:e.export()}),setTimeout((function(){t.setData({showFavBubble:!1})}),316)}}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/customHeader/customHeader.js'});require("useCar/component/customHeader/customHeader.js");$gwx_XC_17=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'toBannerDetail'])
Z([3,'home-banner flex'])
Z([a,[3,'background-image:url('],[[6],[[7],[3,'homeBannerInfo']],[3,'bgImg']],[3,')']])
Z([[6],[[7],[3,'homeBannerInfo']],[3,'price']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_17=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_17=true;
var x=['./useCar/component/homeBanner/homeBanner.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_17_1()
var bAH=_mz(z,'view',['bind:tap',0,'class',1,'style',1],[],e,s,gg)
var oBH=_v()
_(bAH,oBH)
if(_oz(z,3,e,s,gg)){oBH.wxVkey=1
}
oBH.wxXCkey=1
_(r,bAH)
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_17();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/homeBanner/homeBanner.wxml'] = [$gwx_XC_17, './useCar/component/homeBanner/homeBanner.wxml'];else __wxAppCode__['useCar/component/homeBanner/homeBanner.wxml'] = $gwx_XC_17( './useCar/component/homeBanner/homeBanner.wxml' );
	;__wxRoute = "useCar/component/homeBanner/homeBanner";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/homeBanner/homeBanner.js";define("useCar/component/homeBanner/homeBanner.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../common/common"),o=require("../../common/bury/index"),e=require("../../store/index");Component({properties:{homeBannerInfo:{type:Object,value:{}}},data:{ios:(0,t.isIphoneIos)(),bgImg:"url('https://pic5.40017.cn/i/ori/1fY7oupcNGw.jpg')"},observers:{homeBannerInfo:function(t){var n=t.name,r=e.store.getState().common.position,a=e.store.getState().common.refId,i=e.store.getState().common.productId,s=e.store.getState().locaiotnStartInfoData;(0,o.bannerShowStatistics)({name:n,pid:i,refId:a,position:r,startPoint:s})}},methods:{toBannerDetail:function(){var n=this.data.homeBannerInfo,r=n.jumpUrl,a=n.name,i=e.store.getState().common.position,s=e.store.getState().common.refId,m=e.store.getState().common.productId,c=e.store.getState().locaiotnStartInfoData;(0,o.bannerClickStatistics)({name:a,pid:m,refId:s,position:i,startPoint:c}),(0,t.toWebview)(r)}}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/homeBanner/homeBanner.js'});require("useCar/component/homeBanner/homeBanner.js");$gwx_XC_18=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_18_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_18_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_18=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_18=true;
var x=['./useCar/component/newCustomer/newCustomer.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_18_1()
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_18();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/newCustomer/newCustomer.wxml'] = [$gwx_XC_18, './useCar/component/newCustomer/newCustomer.wxml'];else __wxAppCode__['useCar/component/newCustomer/newCustomer.wxml'] = $gwx_XC_18( './useCar/component/newCustomer/newCustomer.wxml' );
	;__wxRoute = "useCar/component/newCustomer/newCustomer";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/newCustomer/newCustomer.js";define("useCar/component/newCustomer/newCustomer.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../common/common"),t=require("../../store/index"),r=require("../../config/index");Component({properties:{type:{type:String,value:"index"},fee:{type:Number,value:0},linkurl:{type:String,value:""},newUserShow:{type:String,value:""},productId:{type:Number},browId:{type:Number}},data:{toggleShow:!0},methods:{toDetail:function(){wx.tcyc.__isClickPopup=!0,setTimeout((function(){return wx.tcyc.__isClickPopup=!1}),600);var o=this.properties.linkurl,c=t.store.getState().common.refid,i="index"===this.properties.type?"打车首页":"群派报价页";"打车首页"===i?((0,e.traceEv)("眉毛点击","^".concat(this.properties.browId,"^").concat(c,"^"),i),(0,e.traceEv)("新客实验点击","^".concat(this.properties.newUserShow,"^").concat(c,"^").concat(this.properties.fee,"^").concat(r.kProductNameMap[this.properties.productId],"^"),i)):(0,e.traceEv)("新客实验点击","^".concat(c,"^"),i),o&&(0,e.toWebview)(o)},close:function(){var o=t.store.getState().common.refid,c="index"===this.properties.type?"打车首页":"群派报价页";"打车首页"===c?(0,e.traceEv)("新客权益关闭","^".concat(o,"^").concat(r.kProductNameMap[this.properties.productId],"^"),c):(0,e.traceEv)("新客权益关闭","^".concat(o,"^"),c),this.triggerEvent("closeSlogen")}}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/newCustomer/newCustomer.js'});require("useCar/component/newCustomer/newCustomer.js");$gwx_XC_19=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var x=['./useCar/component/normalNumber/normalNumber.wxml'];d_[x[0]]={}
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_19();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/normalNumber/normalNumber.wxml'] = [$gwx_XC_19, './useCar/component/normalNumber/normalNumber.wxml'];else __wxAppCode__['useCar/component/normalNumber/normalNumber.wxml'] = $gwx_XC_19( './useCar/component/normalNumber/normalNumber.wxml' );
	;__wxRoute = "useCar/component/normalNumber/normalNumber";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/normalNumber/normalNumber.js";define("useCar/component/normalNumber/normalNumber.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../util/tool"),t=require("../../common/common");Component({properties:{value:{type:String,value:""},color:{type:String,value:"#000"},isScale:{type:Boolean,value:!1}},data:{DINFont:!0,dpr:t.SysInfo.pixelRatio,isAndroid:!(0,t.isIphoneIos)(),intFontSize:44,floatFontSize:24,itemHeight:3===t.SysInfo.pixelRatio?parseInt((0,t.rpx2px)(45)):parseInt((0,t.rpx2px)(46)),valArr:[]},observers:{value:function(t,i){var r=this;if(!(0,e.equals)(t,i)){var o=[];if(t){var a=!1;o=t.split("").map((function(e){var t={val:e,isNaN:isNaN(e)};if(isNaN(e)){a=!0,a=!0;var i=Math.ceil(14*r.properties.floatFontSize/48);t.width=i%2==0?i:i+1}else t.isInt=!a,t.fontSize=r.properties.isScale&&t.isInt?r.properties.intFontSize:r.properties.floatFontSize;return t}))}this.setData({valArr:o})}}}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/normalNumber/normalNumber.js'});require("useCar/component/normalNumber/normalNumber.js");$gwx_XC_20=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_20=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_20=true;
var x=['./useCar/component/numberScroller/numberScroller.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_20_1()
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_20();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/numberScroller/numberScroller.wxml'] = [$gwx_XC_20, './useCar/component/numberScroller/numberScroller.wxml'];else __wxAppCode__['useCar/component/numberScroller/numberScroller.wxml'] = $gwx_XC_20( './useCar/component/numberScroller/numberScroller.wxml' );
	;__wxRoute = "useCar/component/numberScroller/numberScroller";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/numberScroller/numberScroller.js";define("useCar/component/numberScroller/numberScroller.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{displayNumber:{type:Number,default:0}},data:{middleNumber:0,items:[],top:0,latestDisplayNumber:0,firstItemDom:void 0},attached:function(){var t=this;this.setData({middleNumber:this.data.displayNumber,items:[this.data.displayNumber]}),this.createSelectorQuery().selectAll(".scroller-item").boundingClientRect((function(e){e&&e[0]&&t.setData({firstItemDom:e[0]})})).exec()},methods:{transitionend:function(){var t=this.data.items;this.data.middleNumber===t[0]?this.setListOffset(1,!1,!1,!0):this.middleNumber===t[2]?this.setListOffset(-1,!1,!1,!0):this.setListOffset(1,!1,!0,!0)},setListOffset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=this.data,m=a.top,r=a.displayNumber,l=a.firstItemDom;if(l){var d=0;d=s?l.height:m+l.height*t,i?this.setData({top:d,animation:e,items:[r-1,r,r+1]}):this.setData({top:d,animation:e})}}},observers:{displayNumber:function(t){var e=this;if(t||this.data.latestDisplayNumber)if(0!=this.data.latestDisplayNumber){if(t!==this.data.latestDisplayNumber){var s=t>this.data.latestDisplayNumber?1:-1;this.setData({middleNumber:t,latestDisplayNumber:t}),this.data.items.includes(t)?this.setListOffset(s,!0):this.setListOffset(1,!1,!0,!0)}}else this.setData({middleNumber:t,latestDisplayNumber:t,items:[t]}),this.data.firstItemDom&&0!==this.data.firstItemDom.height?this.setListOffset(1,!1,!0,!0):this.createSelectorQuery().selectAll(".scroller-item").boundingClientRect((function(t){e.setData({firstItemDom:t[0]}),e.setListOffset(1,!1,!1,!0)})).exec()}}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/numberScroller/numberScroller.js'});require("useCar/component/numberScroller/numberScroller.js");$gwx_XC_21=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_21=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_21=true;
var x=['./useCar/component/operationEnter/operationEnter.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_21_1()
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_21();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/operationEnter/operationEnter.wxml'] = [$gwx_XC_21, './useCar/component/operationEnter/operationEnter.wxml'];else __wxAppCode__['useCar/component/operationEnter/operationEnter.wxml'] = $gwx_XC_21( './useCar/component/operationEnter/operationEnter.wxml' );
	;__wxRoute = "useCar/component/operationEnter/operationEnter";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/operationEnter/operationEnter.js";define("useCar/component/operationEnter/operationEnter.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../config/index"),o=require("../../common/common"),n=require("../../common/business"),c=require("../../../utils/common");Component({properties:{},methods:{toYcCenter:function(){(0,o.traceEv)("首页","^".concat((0,n.getRefId)(),"^").concat((0,c.getUnionId)(),"^"),"省钱中心运营位-点击","首页省钱中心运营位");var r="".concat(e.kBaseUrl,"/ycoperation/?platform=xcx-usecar");wx.navigateTo({url:"/pages/webView/webView?openwxwrap=1&src=".concat(encodeURIComponent(r))})}}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/operationEnter/operationEnter.js'});require("useCar/component/operationEnter/operationEnter.js");$gwx_XC_22=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[7],[3,'isOrderPopupShow']])
Z([3,'order-content fz26'])
Z([[6],[[7],[3,'checkData']],[3,'subtitle']])
Z([a,[3,'lineHeight1 sub-title align-center type-'],[[6],[[7],[3,'checkData']],[3,'place']],[3,' '],[[2,'?:'],[[2,'&&'],[[2,'=='],[[7],[3,'type']],[1,2]],[[2,'!'],[[7],[3,'orderId']]]],[1,'fz28'],[1,'']],[3,' '],[[2,'?:'],[[2,'||'],[[2,'||'],[[2,'=='],[[7],[3,'type']],[1,5]],[[2,'=='],[[7],[3,'type']],[1,6]]],[[2,'=='],[[7],[3,'type']],[1,7]]],[1,'fz30'],[1,'']]])
Z([[2,'=='],[[6],[[7],[3,'checkData']],[3,'place']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'checkData']],[3,'place']],[1,2]])
Z([[2,'!'],[[6],[[7],[3,'checkData']],[3,'place']]])
Z([[6],[[7],[3,'checkData']],[3,'startAddress']])
Z([[6],[[7],[3,'checkData']],[3,'useTime']])
Z([3,'toOrder'])
Z([3,'btn-content car-btn1 to-sea fz32 cfff'])
Z([[6],[[7],[3,'checkData']],[3,'totalAmount']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_22_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_22=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_22=true;
var x=['./useCar/component/orderPopup/orderPopup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_22_1()
var oHH=_v()
_(r,oHH)
if(_oz(z,0,e,s,gg)){oHH.wxVkey=1
var cIH=_n('view')
_rz(z,cIH,'class',1,e,s,gg)
var oJH=_v()
_(cIH,oJH)
if(_oz(z,2,e,s,gg)){oJH.wxVkey=1
var tMH=_n('view')
_rz(z,tMH,'class',3,e,s,gg)
var eNH=_v()
_(tMH,eNH)
if(_oz(z,4,e,s,gg)){eNH.wxVkey=1
}
var bOH=_v()
_(tMH,bOH)
if(_oz(z,5,e,s,gg)){bOH.wxVkey=1
}
var oPH=_v()
_(tMH,oPH)
if(_oz(z,6,e,s,gg)){oPH.wxVkey=1
}
eNH.wxXCkey=1
bOH.wxXCkey=1
oPH.wxXCkey=1
_(oJH,tMH)
}
var lKH=_v()
_(cIH,lKH)
if(_oz(z,7,e,s,gg)){lKH.wxVkey=1
}
var aLH=_v()
_(cIH,aLH)
if(_oz(z,8,e,s,gg)){aLH.wxVkey=1
}
var xQH=_mz(z,'view',['bindtap',9,'class',1],[],e,s,gg)
var oRH=_v()
_(xQH,oRH)
if(_oz(z,11,e,s,gg)){oRH.wxVkey=1
}
oRH.wxXCkey=1
_(cIH,xQH)
oJH.wxXCkey=1
lKH.wxXCkey=1
aLH.wxXCkey=1
_(oHH,cIH)
}
oHH.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_22();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/orderPopup/orderPopup.wxml'] = [$gwx_XC_22, './useCar/component/orderPopup/orderPopup.wxml'];else __wxAppCode__['useCar/component/orderPopup/orderPopup.wxml'] = $gwx_XC_22( './useCar/component/orderPopup/orderPopup.wxml' );
	;__wxRoute = "useCar/component/orderPopup/orderPopup";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/orderPopup/orderPopup.js";define("useCar/component/orderPopup/orderPopup.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../lib/nextTick.js");var e=require("../../config/index"),t=require("../../store/index"),r=require("../../lib/reselect"),o=require("../../common/common");Component({properties:{ignoreApiPop:Boolean},attached:function(){var o=this;this.$setData=this.setData,(0,t.bindState)(this,{checkData:(0,r.createSelector)((function(e){return e.common.carOrderInfo.checkData}),(function(e){return e})),isOrderPopupShow:(0,r.createSelector)((function(e){return e.common.carOrderInfo.popWindow}),(function(e){return e.common.indexPopupLevel}),(function(e){return e.common.carOrderInfo.checkData}),(function(t,r,n){return r<=e.ORDER_POPUP_LEVEL&&(t||o.data.ignoreApiPop&&n)||0}))})},detached:function(){(0,t.unbindState)(this)},data:{show:!1},methods:{stateDidChanged:function(r){var o=t.store.getState().common.indexPopupLevel,n=r.isOrderPopupShow;void 0!==n&&o<=e.ORDER_POPUP_LEVEL&&t.store.dispatch({type:t.actions.SET_INDEX_POPUP_LEVEL,payload:n?e.ORDER_POPUP_LEVEL:0})},close:function(){t.store.dispatch({type:t.actions.CLOSE_CARORDER_DATA})},toOrder:function(){var t=this.data.checkData.orderId,r=e.kPubOrderListUrl;t&&(r=e.kCarUrlH5+"orderDetail?orderId="+t),(0,o.toWebviewOauth)(r),this.close()}}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/orderPopup/orderPopup.js'});require("useCar/component/orderPopup/orderPopup.js");$gwx_XC_23=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([a,[3,'page-empty-container '],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'config']],[3,'isFullScreen']],[1,false]],[1,'not-full-screen'],[1,'full-screen']]])
Z([[6],[[7],[3,'resource']],[3,'imgObj']])
Z([[6],[[7],[3,'resource']],[3,'textObj']])
Z([[6],[[7],[3,'resource']],[3,'btnObj']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_23=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_23=true;
var x=['./useCar/component/pageEmpty/pageEmpty.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_23_1()
var cTH=_n('view')
_rz(z,cTH,'class',0,e,s,gg)
var hUH=_v()
_(cTH,hUH)
if(_oz(z,1,e,s,gg)){hUH.wxVkey=1
}
var oVH=_v()
_(cTH,oVH)
if(_oz(z,2,e,s,gg)){oVH.wxVkey=1
}
var cWH=_v()
_(cTH,cWH)
if(_oz(z,3,e,s,gg)){cWH.wxVkey=1
}
var oXH=_n('slot')
_(cTH,oXH)
hUH.wxXCkey=1
oVH.wxXCkey=1
cWH.wxXCkey=1
_(r,cTH)
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_23();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/pageEmpty/pageEmpty.wxml'] = [$gwx_XC_23, './useCar/component/pageEmpty/pageEmpty.wxml'];else __wxAppCode__['useCar/component/pageEmpty/pageEmpty.wxml'] = $gwx_XC_23( './useCar/component/pageEmpty/pageEmpty.wxml' );
	;__wxRoute = "useCar/component/pageEmpty/pageEmpty";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/pageEmpty/pageEmpty.js";define("useCar/component/pageEmpty/pageEmpty.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{resource:{type:Object,value:{imgObj:{imgUrl:"https://file.40017.cn/groundtrafficstage/usecar/distributioncomponents/img/component/bg_load@3x.png"},textObj:{textContent:"<span>服务器出错了，请稍后再试</span>"},btnObj:{btnList:[{btnName:"重新加载",btnClass:"btn-green-color",btnKey:"reload"}]}}},config:{type:Object,value:{}}},attached:function(){},methods:{btnTap:function(t){var e=t.currentTarget.dataset.item;this.triggerEvent("btnTap",e)},btnTextTap:function(t){var e=t.currentTarget.dataset.item;this.triggerEvent("btnTextTap",e)}}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/pageEmpty/pageEmpty.js'});require("useCar/component/pageEmpty/pageEmpty.js");$gwx_XC_24=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_24_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_24_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_24=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_24=true;
var x=['./useCar/component/pageLoading/pageLoading.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_24_1()
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_24();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/pageLoading/pageLoading.wxml'] = [$gwx_XC_24, './useCar/component/pageLoading/pageLoading.wxml'];else __wxAppCode__['useCar/component/pageLoading/pageLoading.wxml'] = $gwx_XC_24( './useCar/component/pageLoading/pageLoading.wxml' );
	;__wxRoute = "useCar/component/pageLoading/pageLoading";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/pageLoading/pageLoading.js";define("useCar/component/pageLoading/pageLoading.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({externalClasses:["loading-wrap-css"],methods:{}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/pageLoading/pageLoading.js'});require("useCar/component/pageLoading/pageLoading.js");$gwx_XC_25=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'pickup-date-Time'])
Z([3,'hidePicker'])
Z([[7],[3,'showDialog']])
Z([3,'showPicker'])
Z([[7],[3,'customTime']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_25=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_25=true;
var x=['./useCar/component/pickupDateTime/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_25_1()
var t1H=_n('view')
_rz(z,t1H,'class',0,e,s,gg)
var e2H=_mz(z,'action-sheet',['bindclose',1,'showDialog',1],[],e,s,gg)
_(t1H,e2H)
var b3H=_n('view')
_rz(z,b3H,'bindtap',3,e,s,gg)
var o4H=_v()
_(b3H,o4H)
if(_oz(z,4,e,s,gg)){o4H.wxVkey=1
var x5H=_n('slot')
_(o4H,x5H)
}
else{o4H.wxVkey=2
}
o4H.wxXCkey=1
_(t1H,b3H)
_(r,t1H)
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_25();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/pickupDateTime/index.wxml'] = [$gwx_XC_25, './useCar/component/pickupDateTime/index.wxml'];else __wxAppCode__['useCar/component/pickupDateTime/index.wxml'] = $gwx_XC_25( './useCar/component/pickupDateTime/index.wxml' );
	;__wxRoute = "useCar/component/pickupDateTime/index";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/pickupDateTime/index.js";define("useCar/component/pickupDateTime/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../@babel/runtime/helpers/toConsumableArray"),e=require("../../store/index"),a=require("./bussines");Component({data:{selects:[0,0,0],dates:[[],[],[]],time:"",showDialog:!1},externalClasses:["my-class"],properties:{begin:String,end:String,initDate:{type:String,observer:function(t){this.carDate=null,this.init()}},defaultDate:{type:String,observer:function(t){this.carDate=null,this.init()}},adjustTenMin:Boolean,placeholder:{type:String,value:"请选择用车时间"},hasImmediate:{type:Boolean,value:!0},timeFormat:String,customTime:Boolean,show:{type:Boolean,observer:function(t){this.properties.manual&&this.setData({showDialog:t})}},manual:Boolean},attached:function(){this.init()},methods:{init:function(i){if(i=i||this.data.initDate,!this.carDate){var s,n=e.store.getState(),r=n.productId,o=n.unstartOrder;if((15==r||14==r)&&Object.keys(o.data).length>0&&o.data.trainOrderList.length>0||13==r&&Object.keys(o.data).length>0&&o.data.flightOrderList.length>0){var h=new Date,c="".concat(h.getFullYear(),"-").concat(h.getMonth()+1,"-").concat(h.getDate()," ").concat(h.getHours(),":").concat(h.getMinutes()+35);s=(0,a.formatTimeTenUp)(c)}var l=this.data.end;13!=r||l||(l=new Date).setDate(l.getDate()+60),this.carDate=new a.CarDateSelector(this.data.begin||s,l,this.data.initDate||this.data.defaultDate,+this.data.hasImmediate)}var d=this.carDate,u=t(d.selects),m=t(d.dates);this.setData({dates:t(m),selects:t(u)}),this.setData({dates:t(m),selects:t(u)});var g=(0,a.formatDate)(d.date);"现在用车"==m[0][u[0]]&&(g="现在用车"),this.setData({time:i?g:""}),this.onTimeUpdate(i?d:{})},bindTimeChange:function(){var e=this.carDate,i=this.data.selects,s=(0,a.timeChange)(i,e),n=t(e.selects),r=t(e.dates);this._bindChangeLock=!0;var o=(0,a.formatDate)(e.date);"现在用车"==r[0][n[0]]&&(o="现在用车"),this.triggerEvent("comfirm",{userChg:1,useTime:s.useTime,serviceTime:o}),this.setData({time:o}),this.hidePicker(),this.onTimeUpdate(e)},bindcolumnchange:function(t){var e=function(t,e){if(t.length!==e.length)return;for(var a=0;a<t.length;a++)if(t[a]!==e[a])return{index:a,value:t[a]}}(t.detail.value,this.data.selects);if(e){var i=e.index,s=e.value,n=this.carDate,r=(0,a.columnChange)(i,s,n);this.setData(r.updates),this.setData(r.updates)}},showPicker:function(){},hidePicker:function(){this.properties.manual?this.triggerEvent("close",{}):this.setData({showDialog:!1})},onTimeUpdate:function(t){this.triggerEvent("update",{useTime:t.useTime,time:this.data.time})}}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/pickupDateTime/index.js'});require("useCar/component/pickupDateTime/index.js");$gwx_XC_26=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[6],[[7],[3,'popInfo']],[3,'closeIcon']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_26_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_26=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_26=true;
var x=['./useCar/component/popconfirm/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_26_1()
var f7H=_v()
_(r,f7H)
if(_oz(z,0,e,s,gg)){f7H.wxVkey=1
}
f7H.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_26();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/popconfirm/index.wxml'] = [$gwx_XC_26, './useCar/component/popconfirm/index.wxml'];else __wxAppCode__['useCar/component/popconfirm/index.wxml'] = $gwx_XC_26( './useCar/component/popconfirm/index.wxml' );
	;__wxRoute = "useCar/component/popconfirm/index";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/popconfirm/index.js";define("useCar/component/popconfirm/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{popInfo:Object,identity:String},methods:{onTouchStart:function(t,i){wx.tcyc.__isClickPopup=!0},onTouchEnd:function(){wx.tcyc.__isClickPopup=!1},close:function(){var t=this.data;wx.tcyc.__isClickPopup=!1,this.triggerEvent("popTriget",{action:"close",info:t.popInfo,identity:t.identity})},confirm:function(t){var i=this.data;this.triggerEvent("popTriget",{action:t.target.dataset.command,info:i.popInfo,identity:i.identity})}}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/popconfirm/index.js'});require("useCar/component/popconfirm/index.js");$gwx_XC_27=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'onCloseRec'])
Z([1,true])
Z([[7],[3,'isShow']])
Z([1,false])
Z([3,'content'])
Z([[9],[[9],[[9],[[9],[[8],'mode',[[7],[3,'mode']]],[[8],'recInfo',[[7],[3,'recInfo']]]],[[8],'recSelects',[[7],[3,'recSelects']]]],[[8],'recColumn1',[[7],[3,'recColumn1']]]],[[8],'recColumn2',[[7],[3,'recColumn2']]]])
Z([3,'RecPoiSelectPane'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_27_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_27=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_27=true;
var x=['./useCar/component/recStartPoi/recStartPoi.wxml','./recStartPoiTpl.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_27_1()
var h9H=e_[x[0]].i
_ai(h9H,x[1],e_,x[0],1,1)
var o0H=_mz(z,'action-sheet',['bindclose',0,'closeOther',1,'showDialog',1,'showMask',2],[],e,s,gg)
var cAI=_n('view')
_rz(z,cAI,'slot',4,e,s,gg)
var oBI=_v()
_(cAI,oBI)
var lCI=_oz(z,6,e,s,gg)
var aDI=_gd(x[0],lCI,e_,d_)
if(aDI){
var tEI=_1z(z,5,e,s,gg) || {}
var cur_globalf=gg.f
oBI.wxXCkey=3
aDI(tEI,tEI,oBI,gg)
gg.f=cur_globalf
}
else _w(lCI,x[0],3,208)
_(o0H,cAI)
_(r,o0H)
h9H.pop()
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[x[1]],ic:[]}
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_27();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/recStartPoi/recStartPoi.wxml'] = [$gwx_XC_27, './useCar/component/recStartPoi/recStartPoi.wxml'];else __wxAppCode__['useCar/component/recStartPoi/recStartPoi.wxml'] = $gwx_XC_27( './useCar/component/recStartPoi/recStartPoi.wxml' );
	;__wxRoute = "useCar/component/recStartPoi/recStartPoi";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/recStartPoi/recStartPoi.js";define("useCar/component/recStartPoi/recStartPoi.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/objectSpread2"),t=require("../../common/common");Component({properties:{isShow:{type:Number,observer:function(e){e&&(this.setMode(e),this.refresh())}},recData:{type:Object,observer:function(e){this._updatedTime=(new Date).getTime(),e&&200==e.code&&this.updateData(e)}},isAlertRec:{type:Boolean,observer:function(e){if(e){var a=wx.yc_carIndexIns||(0,t.getCurPage)();this.trackerCommon("展示不要推荐提示",[a.data.poiInfo.displayname])}}}},data:{mode:0,recSelects:[0,0],recColumn1:[],recColumn2:[],recInfo:{}},methods:{trackerCommon:function(){var e=wx.yc_carIndexIns||(0,t.getCurPage)();if(e&&e.trackerCommon){for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];e.trackerCommon.apply(e,i)}},setAlertPos:function(){var e=this,t=wx.createSelectorQuery().in(this);t.select(".rec-container").boundingClientRect(),t.exec((function(t){var a=t[0].height,i="calc(".concat(a,"px + 21rpx)");e.setData({btm:i})}))},refresh:function(){this._updatedTime&&this.updateData(this.data.recData)},updateData:function(t,a,i,n){if(t){var c;void 0===i&&(i=t.areaIndex||0),void 0===n&&(n=t.poiIndex||0),this.data.isShow&&(this._updatedTime=0),void 0===a&&"number"==typeof t.areaIndex&&(a=1);var r=t.data_list,o=t.data_info,s={},d=a?2:1;if(r.length){var h=r[i]||{},m=h.poi_list;n>=m.length&&(n=m.length-1),s={recSelects:[i,n],recColumn1:r.map((function(e){return e.name})),recColumn2:(m||[]).map((function(e){return e.function_area}))},c=h.poi_list[n]}else o.length&&(1==o.length&&(d=3),s={recAddress:(c=o[0]).address,recSelects:[0,n],recColumn1:[c.address],recColumn2:(o||[]).map((function(e){return e.poi_name}))});this.setData(e({mode:d&&this.data.isShow,recInfo:{cancel_text:t.cancel_text,title:t.title,welcome_text:t.welcome_text}},s))}},recConfirm:function(){3==this.data.mode?(this.setMode(0),this.emit("select",{})):(this.setMode(2),this.emit("confirm",{title:this.data.recInfo.title}))},recSelectPoi:function(){this.emit("select",{})},recCancel:function(){var e=this.data.mode;this.emit("cancel",{mode:e,recInfo:this.data.recInfo})},recCancelAndClose:function(){this.switchRec(1);var e=wx.yc_carIndexIns||(0,t.getCurPage)();this.trackerCommon("点击底部不要推荐",[e.data.poiInfo.displayname])},onCloseRec:function(){this.emit("close",{recInfo:this.data.recInfo});var e=wx.yc_carIndexIns||(0,t.getCurPage)();this.trackerCommon("关闭场站浮层",[e.data.poiInfo.displayname])},emit:function(e,t){this.triggerEvent("action",{type:e,data:t})},setMode:function(e){this.setData({mode:e})},recPoiChange:function(e){var t=e.detail.value,a=t[0],i=t[1];a!=this.data.recSelects[0]&&(i=0),this.updateData(this.data.recData,1,a,i),this.emit("poiChange",{index1:a,index2:i})},onSwitchRec:function(e){var a=e.currentTarget.dataset.val;this.switchRec(a);var i=wx.yc_carIndexIns||(0,t.getCurPage)();this.trackerCommon("点击不要推荐提示",[i.data.poiInfo.displayname,a?"是":"否"])},switchRec:function(e){wx.tcyc.__recClose=e,this.setData({isAlertRec:!1}),e&&this.emit("switchRec",e)}}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/recStartPoi/recStartPoi.js'});require("useCar/component/recStartPoi/recStartPoi.js");$gwx_XC_28=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'isJieSong']]],[[2,'!=='],[[7],[3,'productType']],[1,'sfc']]],[[7],[3,'swiperDataList']]])
Z([3,'safeC cen-start'])
Z([[7],[3,'safeStyle']])
Z([3,'goToCenter'])
Z([3,'safe-img'])
Z([a,[[7],[3,'iconImg']],[3,'?1206']])
Z([[6],[[7],[3,'safeJsData']],[3,'safeMark']])
Z([[2,'&&'],[[7],[3,'isSafeShow']],[[2,'!'],[[7],[3,'orderInfoShow']]]])
Z([[7],[3,'orderInfoShow']])
Z([[2,'&&'],[[7],[3,'isJieSong']],[[7],[3,'orderInfoShow']]])
Z([[6],[[7],[3,'orderInfoShow']],[3,'wxhref']])
Z([[2,'&&'],[[2,'||'],[[7],[3,'isJieSong']],[[2,'=='],[[7],[3,'productType']],[1,'sfc']]],[[7],[3,'safeJsData']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_28_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_28_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_28=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_28=true;
var x=['./useCar/component/safeComp/safeComp.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_28_1()
var bGI=_v()
_(r,bGI)
if(_oz(z,0,e,s,gg)){bGI.wxVkey=1
var oJI=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var hMI=_mz(z,'image',['bindtap',3,'class',1,'src',2],[],e,s,gg)
var oNI=_v()
_(hMI,oNI)
if(_oz(z,6,e,s,gg)){oNI.wxVkey=1
}
oNI.wxXCkey=1
_(oJI,hMI)
var fKI=_v()
_(oJI,fKI)
if(_oz(z,7,e,s,gg)){fKI.wxVkey=1
}
var cLI=_v()
_(oJI,cLI)
if(_oz(z,8,e,s,gg)){cLI.wxVkey=1
}
fKI.wxXCkey=1
cLI.wxXCkey=1
_(bGI,oJI)
}
var oHI=_v()
_(r,oHI)
if(_oz(z,9,e,s,gg)){oHI.wxVkey=1
var cOI=_v()
_(oHI,cOI)
if(_oz(z,10,e,s,gg)){cOI.wxVkey=1
}
cOI.wxXCkey=1
}
var xII=_v()
_(r,xII)
if(_oz(z,11,e,s,gg)){xII.wxVkey=1
}
bGI.wxXCkey=1
oHI.wxXCkey=1
xII.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_28();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/safeComp/safeComp.wxml'] = [$gwx_XC_28, './useCar/component/safeComp/safeComp.wxml'];else __wxAppCode__['useCar/component/safeComp/safeComp.wxml'] = $gwx_XC_28( './useCar/component/safeComp/safeComp.wxml' );
	;__wxRoute = "useCar/component/safeComp/safeComp";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/safeComp/safeComp.js";define("useCar/component/safeComp/safeComp.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireWildcard"),t=require("../../../@babel/runtime/helpers/interopRequireDefault"),a=require("../../services/CommonService"),n=require("../../common/common"),r=require("../../common/business"),i=require("../../config/index"),o=t(require("../../../util/tcUtil")),c=e(require("../../util/getChannelUrl"));Component({properties:{pageType:{type:String,default:""},productType:{type:String,default:""},isSafeShow:{type:Boolean,default:!1},safeStyle:{type:String,default:""},isJieSong:{type:Boolean,default:!1}},data:{duration:400,interval:4e3,circular:!0,easingF:"linear",nextmargin:"10rpx",safeWidth:0,swiperDataList:null,safeJsData:null,iconImg:"",orderInfoShow:null,isIphone:(0,n.isIphoneIos)(),imgPrefix:"https://file.40017.cn/groundtrafficstage/usecar/safecenter/"},observers:{"pageType,productType":function(e,t){var a={pageType:e,productType:t};this.setData({queryParams:a}),this.getSafeData(a,"init")}},methods:{getSafeData:function(e,t){var n=this;e&&(0,a.querySafeInfo)(e).then((function(e){if(200==e.status){n.trackEvent("安全中心曝光");var a=e.body,r=a.safeCenterInfo,i=a.safeMark;a.orderInfoShow;!1;var o=null;r&&r.items.length>0&&(o={safeMark:i,safeCenterInfo:r.items[0]},n.setData({iconImg:r.items[0]&&r.items[0].icon})),n.setData({swiperDataList:r&&r.items||[],safeJsData:o,orderInfoShow:!1},(function(){t&&n.getTextWith(0)}))}})).catch((function(e){console.warn("noticeComponent/safe:",e)}))},toIngOrder:function(e){var t=e.currentTarget.dataset.url||"";if(t){try{var a=(0,r.getRefId)(),n=this.data.orderInfoShow,o="".concat(n.title,"^").concat(n.count>1?null:n.status,"^").concat(n.count>1?null:i.kProductNameMap[+n.productId]||"","^").concat(a,"^");this.trackEvent("进行中订单点击",o)}catch(e){}wx.navigateTo({url:t})}},safeChange:function(e){var t=e.detail.current;this.getTextWith(t)},getTextWith:function(e){var t=this,a=o.default.get(this.data,"swiperDataList[".concat(e,"]"),null);if(a&&a.head){var r=wx.createSelectorQuery().in(this);setTimeout((function(){r.select(".get-width"+e).boundingClientRect((function(e){if(e){var a=(0,n.rpx2px)(20);t.setData({safeWidth:e.width+a})}})).exec()}),0)}},goToCenter:function(){var e=this;this.trackEvent("安全中心点击"),(0,n.privacyAuthorization)(!0).then((function(t){if(t){var a=e.data.productType,n=(0,r.getRefId)(),o=(new Date).getTime(),s="".concat(i.kCarUrlH5,"safeCenter?productType=").concat(a,"&refId=").concat(n,"&t=").concat(o),u=(0,c.default)(c.WEBVIEW,!0,{needwrap:1,openwxwrap:1,hideShare:1,src:encodeURIComponent(s)});wx.navigateTo({url:u})}}))},trackEvent:function(e,t){var a=this.data,i=a.pageType,o=a.productType,c=(0,r.getRefId)()||"",s="打车首页";if("queryOrder"===i)s="群派报价页";else if("smallHome"===i||"sfcIndex"===i)switch(o){case"car":s="打车首页";break;case"sfc":s="顺风车首页";break;case"flight":s="接送机首页";break;case"train":s="接送站首页"}t?(0,n.traceEv)(e,"^".concat(e,"^").concat(t),s):(0,n.traceEv)(e,"^".concat(e,"^").concat(c,"^"),s)}},created:function(){},attached:function(){},detached:function(){}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/safeComp/safeComp.js'});require("useCar/component/safeComp/safeComp.js");$gwx_XC_29=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_29_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_29_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_29=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_29=true;
var x=['./useCar/component/scrollNumber2/scrollNumber2.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_29_1()
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_29();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/scrollNumber2/scrollNumber2.wxml'] = [$gwx_XC_29, './useCar/component/scrollNumber2/scrollNumber2.wxml'];else __wxAppCode__['useCar/component/scrollNumber2/scrollNumber2.wxml'] = $gwx_XC_29( './useCar/component/scrollNumber2/scrollNumber2.wxml' );
	;__wxRoute = "useCar/component/scrollNumber2/scrollNumber2";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/scrollNumber2/scrollNumber2.js";define("useCar/component/scrollNumber2/scrollNumber2.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../@babel/runtime/helpers/toConsumableArray"),e=require("../../util/tool"),i=require("../../common/common");Component({externalClasses:["container-class","item-class","dot-class"],properties:{value:{type:String,value:""},ani:{type:Boolean,value:!1},duration:{type:Number,value:600},delay:{type:Number,value:200},isScale:{type:Boolean,value:!1}},data:{DINFont:!0,isAndroid:!(0,i.isIphoneIos)(),dpr:i.SysInfo.pixelRatio,intFontSize:44,floatFontSize:24,isInit:!1,valArr:[],aniArr:[],numArr:[0,1,2,3,4,5,6,7,8,9],itemHeight:3===i.SysInfo.pixelRatio?parseInt((0,i.rpx2px)(45)):parseInt((0,i.rpx2px)(46)),oldVal:""},observers:{value:function(t){var i=this;if(!(0,e.equals)(t,this.data.oldVal)){var a=[];if(t){var r=!1;a=t.split("").map((function(t){var e={val:t,isNaN:isNaN(t)};if(isNaN(t)){r=!0;var a=Math.ceil(14*i.properties.floatFontSize/48);e.width=a%2==0?a:a+1}else{e.isInt=!r;var n=1;1==t&&(n=48.13/72),7==t&&(n=65.64/72);var s=Math.ceil(30*n*(i.properties.isScale&&e.isInt?i.properties.intFontSize:i.properties.floatFontSize)/48);e.width=s,e.fontSize=i.properties.isScale&&e.isInt?i.properties.intFontSize:i.properties.floatFontSize}return e}))}this.getNumberHeight(a),this.data.oldVal=t}}},methods:{getNumberHeight:function(t){var e=this;if(this.data.itemHeight>0)this.startScrollAni(t);else{var i=this.createSelectorQuery();i.select(".number-item").boundingClientRect(),i.exec((function(i){e.setData({itemHeight:i[0].height},(function(){e.startScrollAni(t)}))}))}},startScrollAni:function(e){var i=this;if(!(this.data.itemHeight<=0)){var a=this.properties.ani,r=[],n=t(e).reverse(),s=n.some((function(t){return t.isNaN}));n.forEach((function(t,e){if(t.isNaN)s=!1,r.push(null);else{var n=s?200:400,o=s?0:100,l=i.data.itemHeight*i.data.numArr[parseInt(t.val)],p=["transform: translateY(".concat(-l,"px)"),"-webkit-transform: translateY(".concat(-l,"px)")];a&&p.push("transition-duration: ".concat(n,"ms;"),"transition-delay: ".concat(o,"ms"));var u=p.join(";");r.push(u)}})),this.setData({isInit:!0,valArr:e,aniArr:r.reverse()})}}}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/scrollNumber2/scrollNumber2.js'});require("useCar/component/scrollNumber2/scrollNumber2.js");$gwx_XC_30=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[7],[3,'showTiktokPopup']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_30=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_30=true;
var x=['./useCar/component/tiktokPopup/tiktokPopup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_30_1()
var aRI=_v()
_(r,aRI)
if(_oz(z,0,e,s,gg)){aRI.wxVkey=1
}
aRI.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_30();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/tiktokPopup/tiktokPopup.wxml'] = [$gwx_XC_30, './useCar/component/tiktokPopup/tiktokPopup.wxml'];else __wxAppCode__['useCar/component/tiktokPopup/tiktokPopup.wxml'] = $gwx_XC_30( './useCar/component/tiktokPopup/tiktokPopup.wxml' );
	;__wxRoute = "useCar/component/tiktokPopup/tiktokPopup";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/tiktokPopup/tiktokPopup.js";define("useCar/component/tiktokPopup/tiktokPopup.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../common/request")),o=require("../../../useCar/services/tiktokService"),t=getApp();Component({properties:{showTiktokPopup:{type:Boolean,default:!0}},methods:{close:function(){this.triggerEvent("close",this.phone)},doMiddlePageArousal:function(e){(0,o.middlePageArousal)({requestParam:t.globalData.tiktokRequestParam,phone:e||""}).then((function(e){0===e.code?console.log("抖音优惠券充值成功"):console.log(e.data||"抖音优惠券充值失败")})).catch((function(e){console.warn(e)}))},getPhoneNumber:function(o){var t=o.detail,n=t.encryptedData,i=t.iv,r=t.code,c=function(){console.log("抖音充值手机号授权失败")},s=function(e){e?(this.doMiddlePageArousal(e),this.phone=e,this.close()):c()}.bind(this);n&&i||r?wx.checkSession({success:function(){var o={encryptData:n,iv:i,code:r};e.default.post("car-xcx-gateway/quickcar/wxLogin/getPhoneNumber",o,{isShowErrMsg:0,isNeedLoading:0}).then((function(e){s(e.body.phoneNumber)})).catch((function(e){console.error("wxDecryptPhone fail",e),c()}))},fail:function(){console.error("session_key 失效"),c()}}):c()}}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/tiktokPopup/tiktokPopup.js'});require("useCar/component/tiktokPopup/tiktokPopup.js");$gwx_XC_31=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[7],[3,'block']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_31_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_31=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_31=true;
var x=['./useCar/component/toast/toast.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_31_1()
var eTI=_v()
_(r,eTI)
if(_oz(z,0,e,s,gg)){eTI.wxVkey=1
}
eTI.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_31();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/toast/toast.wxml'] = [$gwx_XC_31, './useCar/component/toast/toast.wxml'];else __wxAppCode__['useCar/component/toast/toast.wxml'] = $gwx_XC_31( './useCar/component/toast/toast.wxml' );
	;__wxRoute = "useCar/component/toast/toast";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/toast/toast.js";define("useCar/component/toast/toast.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({options:{multipleSlots:!0},data:{block:!1,animationData:{},content:"提示内容"},methods:{showToast:function(t){var a=this;clearTimeout(this.closeTimer),this.setData({block:!0});var i=wx.createAnimation({duration:300,timingFunction:"ease"});this.animation=i,i.opacity(1).step(),this.setData({animationData:i.export(),content:t}),this.closeTimer=setTimeout((function(){i.opacity(0).step(),a.setData({animationData:i.export()}),setTimeout((function(){a.setData({block:!1})}),300)}),2e3)}}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/toast/toast.js'});require("useCar/component/toast/toast.js");$gwx_XC_32=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[7],[3,'inited']])
Z([3,'onTransitionEnd'])
Z([a,[3,'yc-transition ^'],[[7],[3,'customClass']],[3,' '],[[7],[3,'classes']]])
Z([a,[3,'transition-duration: '],[[7],[3,'currentDuration']],[3,'ms; '],[[2,'?:'],[[7],[3,'display']],[1,''],[1,'display: none']],[3,'; '],[[7],[3,'customStyle']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_32_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_32_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_32=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_32=true;
var x=['./useCar/component/transition/transition.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_32_1()
var oVI=_v()
_(r,oVI)
if(_oz(z,0,e,s,gg)){oVI.wxVkey=1
var xWI=_mz(z,'view',['bind:transitionend',1,'class',1,'style',2],[],e,s,gg)
var oXI=_n('slot')
_(xWI,oXI)
_(oVI,xWI)
}
oVI.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_32();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/component/transition/transition.wxml'] = [$gwx_XC_32, './useCar/component/transition/transition.wxml'];else __wxAppCode__['useCar/component/transition/transition.wxml'] = $gwx_XC_32( './useCar/component/transition/transition.wxml' );
	;__wxRoute = "useCar/component/transition/transition";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/component/transition/transition.js";define("useCar/component/transition/transition.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../../@babel/runtime/helpers/typeof"),e=function(t){return setTimeout(t,1e3/30)},a=function(e){return"object"===t(e)&&null!==e},n=function(t){return{enter:"tc-".concat(t,"-enter tc-").concat(t,"-enter-active enter-class enter-active-class"),"enter-to":"tc-".concat(t,"-enter-to tc-").concat(t,"-enter-active enter-to-class enter-active-class"),leave:"tc-".concat(t,"-leave tc-").concat(t,"-leave-active leave-class leave-active-class"),"leave-to":"tc-".concat(t,"-leave-to tc-").concat(t,"-leave-active leave-to-class leave-active-class")}};Component({behaviors:[],properties:{customStyle:String,customClass:String,show:{type:Boolean,value:!0,observer:"observeShow"},duration:{type:null,value:300,observer:"observeDuration"},name:{type:String,value:"fade"}},data:{type:"",inited:!1,display:!1,currentDuration:300},attached:function(){!0===this.data.show&&this.observeShow(!0,!1)},methods:{observeShow:function(t,e){t!==e&&(t?this.enter():this.leave())},$emit:function(){this.triggerEvent.apply(this,arguments)},enter:function(){var t=this,s=this.data,i=s.duration,r=s.name,o=n(r),c=a(i)?i.enter:i;this.status="enter",this.$emit("before-enter"),c?e((function(){"enter"===t.status&&(t.$emit("enter"),t.setData({inited:!0,display:!0,classes:o.enter,currentDuration:c}),e((function(){"enter"===t.status&&(t.transitionEnded=!1,t.setData({classes:o["enter-to"]}))})))})):this.setData({inited:!0,display:!0})},leave:function(){var t=this;if(this.data.display){var s=this.data,i=s.duration,r=s.name,o=n(r),c=a(i)?i.leave:i;this.status="leave",this.$emit("before-leave"),e((function(){"leave"===t.status&&(t.$emit("leave"),t.setData({classes:o.leave,currentDuration:c}),e((function(){"leave"===t.status&&(t.transitionEnded=!1,setTimeout((function(){return t.onTransitionEnd()}),c),t.setData({classes:o["leave-to"]}))})))}))}},onTransitionEnd:function(){if(!this.transitionEnded){this.transitionEnded=!0,this.$emit("after-".concat(this.status));var t=this.data,e=t.show,a=t.display;!e&&a&&this.setData({display:!1})}}}});
},{isPage:false,isComponent:true,currentFile:'useCar/component/transition/transition.js'});require("useCar/component/transition/transition.js");$gwx_XC_33=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_33_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_33=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_33=true;
var x=['./useCar/navigation/navigation.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_33_1()
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_33();	if (__vd_version_info__.delayedGwx) __wxAppCode__['useCar/navigation/navigation.wxml'] = [$gwx_XC_33, './useCar/navigation/navigation.wxml'];else __wxAppCode__['useCar/navigation/navigation.wxml'] = $gwx_XC_33( './useCar/navigation/navigation.wxml' );
	;__wxRoute = "useCar/navigation/navigation";__wxRouteBegin = true;__wxAppCurrentFile__="useCar/navigation/navigation.js";define("useCar/navigation/navigation.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../useCar/common/request"));Page({data:{embed:1,imgUrl:"",path:"",appId:"",envVersion:"",buttonStyle:""},onLoad:function(t){var a=this,n=t.guid,o=t.requestParam,i=t.embed,r=t.appId,d=t.path,p=t.envVersion,s=t.imgUrl,u=t.buttonStyle;n?e.default.post("car-inter-h5/quickcar/smsProcess/getRealUrl",{guid:n,requestParam:o}).then((function(e){a.setData({imgUrl:e.body.imageUrl,appId:e.body.appId,path:e.body.openLink,embed:i,buttonStyle:u})})).catch((function(e){console.error(e)})):this.setData({imgUrl:s,appId:r,path:d,embed:i,envVersion:p,buttonStyle:u})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},jump:function(){this.data.embed?wx.openEmbeddedMiniProgram({appId:this.data.appId,path:this.data.path,envVersion:this.data.envVersion}):wx.navigateToMiniProgram({appId:this.data.appId,path:this.data.path,envVersion:this.data.envVersion})}});
},{isPage:true,isComponent:true,currentFile:'useCar/navigation/navigation.js'});require("useCar/navigation/navigation.js");
