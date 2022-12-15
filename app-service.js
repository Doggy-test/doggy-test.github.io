var __wxAppData=__wxAppData||{};var __wxAppCode__=__wxAppCode__||{};var global=global||{};var __WXML_GLOBAL__=__WXML_GLOBAL__||{entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var Component=Component||function(){};var definePlugin=definePlugin||function(){};var requirePlugin=requirePlugin||function(){};var Behavior=Behavior||function(){};var __vd_version_info__=__vd_version_info__||{};var __GWX_GLOBAL__=__GWX_GLOBAL__||{};if(this&&this.__g===undefined)Object.defineProperty(this,"__g",{configurable:false,enumerable:false,writable:false,value:function(){function D(e,t){if(typeof t!="undefined")e.children.push(t)}function S(e){if(typeof e!="undefined")return{tag:"virtual",wxKey:e,children:[]};return{tag:"virtual",children:[]}}function v(e){$gwxc++;if($gwxc>=16e3){throw"Dom limit exceeded, please check if there's any mistake you've made."}return{tag:"wx-"+e,attr:{},children:[],n:[],raw:{},generics:{}}}function e(e,t){t&&e.properities.push(t)}function t(e,t,r){return typeof e[r]!="undefined"?e[r]:t[r]}function u(e){console.warn("WXMLRT_"+g+":"+e)}function r(e,t){u(t+":-1:-1:-1: Template `"+e+"` is being called recursively, will be stop.")}var s=console.warn;var n=console.log;function o(){function e(){}e.prototype={hn:function(e,t){if(typeof e=="object"){var r=0;var n=false,o=false;for(var a in e){n=n|a==="__value__";o=o|a==="__wxspec__";r++;if(r>2)break}return r==2&&n&&o&&(t||e.__wxspec__!=="m"||this.hn(e.__value__)==="h")?"h":"n"}return"n"},nh:function(e,t){return{__value__:e,__wxspec__:t?t:true}},rv:function(e){return this.hn(e,true)==="n"?e:this.rv(e.__value__)},hm:function(e){if(typeof e=="object"){var t=0;var r=false,n=false;for(var o in e){r=r|o==="__value__";n=n|o==="__wxspec__";t++;if(t>2)break}return t==2&&r&&n&&(e.__wxspec__==="m"||this.hm(e.__value__))}return false}};return new e}var A=o();function T(e){var t=e.split("\n "+" "+" "+" ");for(var r=0;r<t.length;++r){if(0==r)continue;if(")"===t[r][t[r].length-1])t[r]=t[r].replace(/\s\(.*\)$/,"");else t[r]="at anonymous function"}return t.join("\n "+" "+" "+" ")}function a(M){function m(e,t,r,n,o){var a=false;var i=e[0][1];var p,u,l,f,v,c;switch(i){case"?:":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):x(e[3],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"&&":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?x(e[2],t,r,n,o,a):A.rv(p);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"||":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)==="h";f=A.rv(p)?A.rv(p):x(e[2],t,r,n,o,a);f=l&&A.hn(f)==="n"?A.nh(f,"c"):f;return f;break;case"+":case"*":case":case"%":case"|":case"^":case"&":case"===":case"==":case"!=":case"!==":case">=":case"<=":case">":case"<":case"<<":case">>":p=x(e[1],t,r,n,o,a);u=x(e[2],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");switch(i){case"+":f=A.rv(p)+A.rv(u);break;case"*":f=A.rv(p)*A.rv(u);break;case"/":f=A.rv(p)/A.rv(u);break;case"%":f=A.rv(p)%A.rv(u);break;case"|":f=A.rv(p)|A.rv(u);break;case"^":f=A.rv(p)^A.rv(u);break;case"&":f=A.rv(p)&A.rv(u);break;case"===":f=A.rv(p)===A.rv(u);break;case"==":f=A.rv(p)==A.rv(u);break;case"!=":f=A.rv(p)!=A.rv(u);break;case"!==":f=A.rv(p)!==A.rv(u);break;case">=":f=A.rv(p)>=A.rv(u);break;case"<=":f=A.rv(p)<=A.rv(u);break;case">":f=A.rv(p)>A.rv(u);break;case"<":f=A.rv(p)<A.rv(u);break;case"<<":f=A.rv(p)<<A.rv(u);break;case">>":f=A.rv(p)>>A.rv(u);break;default:break}return l?A.nh(f,"c"):f;break;case"-":p=e.length===3?x(e[1],t,r,n,o,a):0;u=e.length===3?x(e[2],t,r,n,o,a):x(e[1],t,r,n,o,a);l=M&&(A.hn(p)==="h"||A.hn(u)==="h");f=l?A.rv(p)-A.rv(u):p-u;return l?A.nh(f,"c"):f;break;case"!":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=!A.rv(p);return l?A.nh(f,"c"):f;case"~":p=x(e[1],t,r,n,o,a);l=M&&A.hn(p)=="h";f=~A.rv(p);return l?A.nh(f,"c"):f;default:s("unrecognized op"+i)}}function x(e,t,r,n,o,a){var i=e[0];var p=false;if(typeof a!=="undefined")o.ap=a;if(typeof i==="object"){var u=i[0];var l,f,v,c,s,y,b,d,h,_,g;switch(u){case 2:return m(e,t,r,n,o);break;case 4:return x(e[1],t,r,n,o,p);break;case 5:switch(e.length){case 2:l=x(e[1],t,r,n,o,p);return M?[l]:[A.rv(l)];return[l];break;case 1:return[];break;default:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);l.push(M?v:A.rv(v));return l;break}break;case 6:l=x(e[1],t,r,n,o);var w=o.ap;h=A.hn(l)==="h";f=h?A.rv(l):l;o.is_affected|=h;if(M){if(f===null||typeof f==="undefined"){return h?A.nh(undefined,"e"):undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return h||_?A.nh(undefined,"e"):undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return h||_?g?y:A.nh(y,"e"):y}else{if(f===null||typeof f==="undefined"){return undefined}v=x(e[2],t,r,n,o,p);_=A.hn(v)==="h";c=_?A.rv(v):v;o.ap=w;o.is_affected|=_;if(c===null||typeof c==="undefined"||c==="__proto__"||c==="prototype"||c==="caller"){return undefined}y=f[c];if(typeof y==="function"&&!w)y=undefined;g=A.hn(y)==="h";o.is_affected|=g;return g?A.rv(y):y}case 7:switch(e[1][0]){case 11:o.is_affected|=A.hn(n)==="h";return n;case 3:b=A.rv(r);d=A.rv(t);v=e[1][1];if(n&&n.f&&n.f.hasOwnProperty(v)){l=n.f;o.ap=true}else{l=b&&b.hasOwnProperty(v)?r:d&&d.hasOwnProperty(v)?t:undefined}if(M){if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;y=h&&!g?A.nh(y,"e"):y;return y}}else{if(l){h=A.hn(l)==="h";f=h?A.rv(l):l;y=f[v];g=A.hn(y)==="h";o.is_affected|=h||g;return A.rv(y)}}return undefined}break;case 8:l={};l[e[1]]=x(e[2],t,r,n,o,p);return l;break;case 9:l=x(e[1],t,r,n,o,p);v=x(e[2],t,r,n,o,p);function O(e,t,r){var n,o;h=A.hn(e)==="h";_=A.hn(t)==="h";f=A.rv(e);c=A.rv(t);for(var a in c){if(r||!f.hasOwnProperty(a)){f[a]=M?_?A.nh(c[a],"e"):c[a]:A.rv(c[a])}}return e}var s=l;var j=true;if(typeof e[1][0]==="object"&&e[1][0][0]===10){l=v;v=s;j=false}if(typeof e[1][0]==="object"&&e[1][0][0]===10){var P={};return O(O(P,l,j),v,j)}else return O(l,v,j);break;case 10:l=x(e[1],t,r,n,o,p);l=M?l:A.rv(l);return l;break;case 12:var P;l=x(e[1],t,r,n,o);if(!o.ap){return M&&A.hn(l)==="h"?A.nh(P,"f"):P}var w=o.ap;v=x(e[2],t,r,n,o,p);o.ap=w;h=A.hn(l)==="h";_=N(v);f=A.rv(l);c=A.rv(v);snap_bb=K(c,"nv_");try{P=typeof f==="function"?K(f.apply(null,snap_bb)):undefined}catch(t){t.message=t.message.replace(/nv_/g,"");t.stack=t.stack.substring(0,t.stack.indexOf("\n",t.stack.lastIndexOf("at nv_")));t.stack=t.stack.replace(/\snv_/g," ");t.stack=T(t.stack);if(n.debugInfo){t.stack+="\n "+" "+" "+" at "+n.debugInfo[0]+":"+n.debugInfo[1]+":"+n.debugInfo[2];console.error(t)}P=undefined}return M&&(_||h)?A.nh(P,"f"):P}}else{if(i===3||i===1)return e[1];else if(i===11){var l="";for(var D=1;D<e.length;D++){var S=A.rv(x(e[D],t,r,n,o,p));l+=typeof S==="undefined"?"":S}return l}}}function e(e,t,r,n,o,a){if(e[0]=="11182016"){n.debugInfo=e[2];return x(e[1],t,r,n,o,a)}else{n.debugInfo=null;return x(e,t,r,n,o,a)}}return e}var f=a(true);var c=a(false);function i(e,t,r,n,o,a,i,p){{var u={is_affected:false};var l=f(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(a)||u.is_affected!=p){console.warn("A. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(a)+", "+p+" is expected")}}{var u={is_affected:false};var l=c(t,r,n,o,u);if(JSON.stringify(l)!=JSON.stringify(i)||u.is_affected!=p){console.warn("B. "+e+" get result "+JSON.stringify(l)+", "+u.is_affected+", but "+JSON.stringify(i)+", "+p+" is expected")}}}function y(e,t,r,n,o,a,i,p,u){var l=A.hn(e)==="n";var f=A.rv(n);var v=f.hasOwnProperty(i);var c=f.hasOwnProperty(p);var s=f[i];var y=f[p];var b=Object.prototype.toString.call(A.rv(e));var d=b[8];if(d==="N"&&b[10]==="l")d="X";var h;if(l){if(d==="A"){var _;for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");_=A.rv(e[g]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;var _;for(var O in e){f[i]=e[O];f[p]=l?O:A.nh(O,"h");_=A.rv(e[O]);var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<e.length;g++){f[i]=e[g];f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<e;g++){f[i]=g;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}else{var j=A.rv(e);var _,P;if(d==="A"){for(var g=0;g<j.length;g++){P=j[g];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?g:A.nh(g,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o)}}else if(d==="O"){var g=0;for(var O in j){P=j[O];P=A.hn(P)==="n"?A.nh(P,"h"):P;_=A.rv(P);f[i]=P;f[p]=l?O:A.nh(O,"h");var w=u&&_?u==="*this"?_:A.rv(_[u]):undefined;h=S(w);D(a,h);t(r,f,h,o);g++}}else if(d==="S"){for(var g=0;g<j.length;g++){P=A.nh(j[g],"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(e[g]+g);D(a,h);t(r,f,h,o)}}else if(d==="N"){for(var g=0;g<j;g++){P=A.nh(g,"h");f[i]=P;f[p]=l?g:A.nh(g,"h");h=S(g);D(a,h);t(r,f,h,o)}}else{}}if(v){f[i]=s}else{delete f[i]}if(c){f[p]=y}else{delete f[p]}}function N(e){if(A.hn(e)=="h")return true;if(typeof e!=="object")return false;for(var t in e){if(e.hasOwnProperty(t)){if(N(e[t]))return true}}return false}function b(e,t,r,n,o){var a=false;var i=K(n,"",2);if(o.ap&&i&&i.constructor===Function){t="$wxs:"+t;e.attr["$gdc"]=K}if(o.is_affected||N(n)){e.n.push(t);e.raw[t]=n}e.attr[t]=i}function d(e,t,r,n,o,a){a.opindex=r;var i={},p;var u=c(z[r],n,o,a,i);b(e,t,r,u,i)}function h(e,t,r,n,o,a,i){i.opindex=n;var p={},u;var l=c(e[n],o,a,i,p);b(t,r,n,l,p)}function p(e,t,r,n){n.opindex=e;var o={};var a=c(z[e],t,r,n,o);return a&&a.constructor===Function?undefined:a}function l(e,t,r,n,o){o.opindex=t;var a={};var i=c(e[t],r,n,o,a);return i&&i.constructor===Function?undefined:i}function _(e,t,r,n,o){var o=o||{};n.opindex=e;return f(z[e],t,r,n,o)}function w(e,t,r,n,o,a){var a=a||{};o.opindex=t;return f(e[t],r,n,o,a)}function O(e,t,r,n,o,a,i,p,u){var l={};var f=_(e,r,n,o);y(f,t,r,n,o,a,i,p,u)}function j(e,t,r,n,o,a,i,p,u,l){var f={};var v=w(e,t,n,o,a);y(v,r,n,o,a,i,p,u,l)}function P(e,t,r,n,o,a){var i=v(e);var p=0;for(var u=0;u<t.length;u+=2){if(p+t[u+1]<0){i.attr[t[u]]=true}else{d(i,t[u],p+t[u+1],n,o,a);if(p===0)p=t[u+1]}}for(var u=0;u<r.length;u+=2){if(p+r[u+1]<0){i.generics[r[u]]=""}else{var l=c(z[p+r[u+1]],n,o,a);if(l!="")l="wx-"+l;i.generics[r[u]]=l;if(p===0)p=r[u+1]}}return i}function M(e,t,r,n,o,a,i){var p=v(t);var u=0;for(var l=0;l<r.length;l+=2){if(u+r[l+1]<0){p.attr[r[l]]=true}else{h(e,p,r[l],u+r[l+1],o,a,i);if(u===0)u=r[l+1]}}for(var l=0;l<n.length;l+=2){if(u+n[l+1]<0){p.generics[n[l]]=""}else{var f=c(e[u+n[l+1]],o,a,i);if(f!="")f="wx-"+f;p.generics[n[l]]=f;if(u===0)u=n[l+1]}}return p}var m=function(){if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){x();C();k();U();I();L();E();R();F()}if(typeof __WXML_GLOBAL__!=="undefined")__WXML_GLOBAL__.wxs_nf_init=true};var x=function(){Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"});Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return"[object Object]"}})};var C=function(){Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"});Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length},set:function(){}});Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return"[function Function]"}})};var k=function(){Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join()}});Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(e){e=undefined==e?",":e;var t="";for(var r=0;r<this.length;++r){if(0!=r)t+=e;if(null==this[r]||undefined==this[r])t+="";else if(typeof this[r]=="function")t+=this[r].nv_toString();else if(typeof this[r]=="object"&&this[r].nv_constructor==="Array")t+=this[r].nv_join();else t+=this[r].toString()}return t}});Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"});Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat});Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop});Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push});Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse});Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift});Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice});Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort});Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice});Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift});Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf});Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf});Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every});Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some});Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach});Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map});Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter});Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce});Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight});Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var U=function(){Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"});Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString});Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf});Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt});Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt});Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat});Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf});Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf});Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare});Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match});Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace});Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search});Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice});Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split});Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring});Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase});Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase});Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase});Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase});Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim});Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length},set:function(e){this.length=e}})};var I=function(){Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"});Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString});Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})};var L=function(){Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE});Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE});Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY});Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY});Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"});Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString});Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString});Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf});Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed});Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential});Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})};var E=function(){Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E});Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10});Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2});Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E});Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E});Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI});Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2});Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2});Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs});Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos});Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin});Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan});Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2});Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil});Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos});Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp});Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor});Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log});Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max});Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min});Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow});Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random});Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round});Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin});Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt});Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})};var R=function(){Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"});Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse});Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC});Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now});Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString});Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString});Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString});Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString});Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString});Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString});Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf});Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime});Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear});Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear});Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth});Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth});Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate});Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate});Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay});Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay});Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours});Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours});Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes});Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes});Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds});Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds});Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds});Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset});Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime});Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds});Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds});Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds});Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds});Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes});Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes});Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours});Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours});Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate});Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate});Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth});Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth});Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear});Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear});Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString});Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString});Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})};var F=function(){Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"});Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec});Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test});Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString});Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline},set:function(){}});Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex},set:function(e){this.lastIndex=e}})};m();var J=function(){var e=Array.prototype.slice.call(arguments);e.unshift(Date);return new(Function.prototype.bind.apply(Date,e))};var B=function(){var e=Array.prototype.slice.call(arguments);e.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp,e))};var Y={};Y.nv_log=function(){var e="WXSRT:";for(var t=0;t<arguments.length;++t)e+=arguments[t]+" ";console.log(e)};var G=parseInt,X=parseFloat,H=isNaN,V=isFinite,$=decodeURI,W=decodeURIComponent,Q=encodeURI,q=encodeURIComponent;function K(e,t,r){e=A.rv(e);if(e===null||e===undefined)return e;if(typeof e==="string"||typeof e==="boolean"||typeof e==="number")return e;if(e.constructor===Object){var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o))if(undefined===t)n[o.substring(3)]=K(e[o],t,r);else n[t+o]=K(e[o],t,r);return n}if(e.constructor===Array){var n=[];for(var a=0;a<e.length;a++)n.push(K(e[a],t,r));return n}if(e.constructor===Date){var n=new Date;n.setTime(e.getTime());return n}if(e.constructor===RegExp){var i="";if(e.global)i+="g";if(e.ignoreCase)i+="i";if(e.multiline)i+="m";return new RegExp(e.source,i)}if(r&&typeof e==="function"){if(r==1)return K(e(),undefined,2);if(r==2)return e}return null}var Z={};Z.nv_stringify=function(e){JSON.stringify(e);return JSON.stringify(K(e))};Z.nv_parse=function(e){if(e===undefined)return undefined;var t=JSON.parse(e);return K(t,"nv_")};function ee(e,t,r,n){e.extraAttr={t_action:t,t_rawid:r};if(typeof n!="undefined")e.extraAttr.t_cid=n}function te(){if(typeof __globalThis.__webview_engine_version__=="undefined")return 0;return __globalThis.__webview_engine_version__}function re(e,t,r,n,o,a){var i=ne(t,r,n);if(i)e.push(i);else{e.push("");u(n+":import:"+o+":"+a+": Path `"+t+"` not found from `"+n+"`.")}}function ne(e,t,r){if(e[0]!="/"){var n=r.split("/");n.pop();var o=e.split("/");for(var a=0;a<o.length;a++){if(o[a]=="..")n.pop();else if(!o[a]||o[a]==".")continue;else n.push(o[a])}e=n.join("/")}if(r[0]=="."&&e[0]=="/")e="."+e;if(t[e])return e;if(t[e+".wxml"])return e+".wxml"}function oe(e,t,r,n){if(!t)return;if(n[e][t])return n[e][t];for(var o=r[e].i.length-1;o>=0;o--){if(r[e].i[o]&&n[r[e].i[o]][t])return n[r[e].i[o]][t]}for(var o=r[e].ti.length-1;o>=0;o--){var a=ne(r[e].ti[o],r,e);if(a&&n[a][t])return n[a][t]}var i=ae(r,e);for(var o=0;o<i.length;o++){if(i[o]&&n[i[o]][t])return n[i[o]][t]}for(var p=r[e].j.length-1;p>=0;p--)if(r[e].j[p]){for(var a=r[r[e].j[p]].ti.length-1;a>=0;a--){var u=ne(r[r[e].j[p]].ti[a],r,e);if(u&&n[u][t]){return n[u][t]}}}}function ae(e,t){if(!t)return[];if($gaic[t]){return $gaic[t]}var r=[],n=[],o=0,a=0,i={},p={};n.push(t);p[t]=true;a++;while(o<a){var u=n[o++];for(var l=0;l<e[u].ic.length;l++){var f=e[u].ic[l];var v=ne(f,e,u);if(v&&!p[v]){p[v]=true;n.push(v);a++}}for(var l=0;u!=t&&l<e[u].ti.length;l++){var c=e[u].ti[l];var s=ne(c,e,u);if(s&&!i[s]){i[s]=true;r.push(s)}}}$gaic[t]=r;return r}var ie={};function pe(e,t,r,n,o,a,i){var p=ne(e,t,r);t[r].j.push(p);if(p){if(ie[p]){u("-1:include:-1:-1: `"+e+"` is being included in a loop, will be stop.");return}ie[p]=true;try{t[p].f(n,o,a,i)}catch(n){}ie[p]=false}else{u(r+":include:-1:-1: Included path `"+e+"` not found from `"+r+"`.")}}function ue(e,t,r,n){u(t+":template:"+r+":"+n+": Template `"+e+"` not found.")}function le(e){var t=false;delete e.properities;delete e.n;if(e.children){do{t=false;var r=[];for(var n=0;n<e.children.length;n++){var o=e.children[n];if(o.tag=="virtual"){t=true;for(var a=0;o.children&&a<o.children.length;a++){r.push(o.children[a])}}else{r.push(o)}}e.children=r}while(t);for(var n=0;n<e.children.length;n++){le(e.children[n])}}return e}function fe(e){if(e.tag=="wx-wx-scope"){e.tag="virtual";e.wxCkey="11";e["wxScopeData"]=e.attr["wx:scope-data"];delete e.n;delete e.raw;delete e.generics;delete e.attr}for(var t=0;e.children&&t<e.children.length;t++){fe(e.children[t])}return e}return{a:D,b:S,c:v,d:e,e:t,f:u,g:r,h:s,i:n,j:o,k:A,l:T,m:a,n:f,o:c,p:i,q:y,r:N,s:b,t:d,u:h,v:p,w:l,x:_,y:w,z:O,A:j,B:P,C:M,D:J,E:B,F:Y,G:G,H:X,I:H,J:V,K:$,L:W,M:Q,N:q,O:K,P:Z,Q:ee,R:te,S:re,T:ne,U:oe,V:ae,W:ie,X:pe,Y:ue,Z:le,aa:fe}}()});Object.freeze(__g);g="";	__wxAppCode__['components/ExplainDetail/ExplainDetail.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/datetime-picker-view/index.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/loginPopup/loginPopup.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/popup/popup.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['pages/agreement/agreement.json'] = {"navigationBarTitleText":"用户协议","usingComponents":{}};
		__wxAppCode__['pages/assess/index.json'] = {"usingComponents":{},"navigationBarTitleText":"评价"};
		__wxAppCode__['pages/cancel/index.json'] = {"usingComponents":{},"navigationBarTitleText":"取消"};
		__wxAppCode__['pages/city/index.json'] = {"usingComponents":{}};
		__wxAppCode__['pages/contactadd/index.json'] = {"usingComponents":{"popup":"/components/popup/popup"},"navigationBarTitleText":"添加乘客"};
		__wxAppCode__['pages/contacts/index.json'] = {"usingComponents":{},"navigationBarTitleText":"常用信息"};
		__wxAppCode__['pages/funaggrement/personCollect/index.json'] = {"usingComponents":{},"navigationBarTitleText":"个人信息收集清单"};
		__wxAppCode__['pages/funaggrement/personCollect/personBasicInfo/index.json'] = {"usingComponents":{}};
		__wxAppCode__['pages/funaggrement/personCollect/personContact/index.json'] = {"usingComponents":{},"navigationBarTitleText":"下单联系电话"};
		__wxAppCode__['pages/funaggrement/thirdShareInfo/index.json'] = {"usingComponents":{},"navigationBarTitleText":"第三方信息共享清单"};
		__wxAppCode__['pages/home/home.json'] = {"navigationBarTitleText":"","usingComponents":{"Popup":"../../components/popup/popup"}};
		__wxAppCode__['pages/invoice/index.json'] = {"usingComponents":{},"navigationBarTitleText":"全部发票"};
		__wxAppCode__['pages/invoice/invoiceadd/index.json'] = {"usingComponents":{}};
		__wxAppCode__['pages/invoice/invoicedetail/index.json'] = {"usingComponents":{}};
		__wxAppCode__['pages/invoice/invoicemark/index.json'] = {"usingComponents":{},"navigationBarTitleText":"发票备注填写"};
		__wxAppCode__['pages/invoice/invoicemore/index.json'] = {"usingComponents":{}};
		__wxAppCode__['pages/login/login.json'] = {"navigationBarTitleText":"海汽e行","usingComponents":{}};
		__wxAppCode__['pages/loginPhone/loginPhone.json'] = {"navigationBarTitleText":"绑定手机","usingComponents":{"popup":"../../components/popup/popup"}};
		__wxAppCode__['pages/mine/index.json'] = {"usingComponents":{"login-popup":"/components/loginPopup/loginPopup","ExplainDetail":"/components/ExplainDetail/ExplainDetail","pop-up":"/components/popup/popup"},"navigationBarBackgroundColor":"#FFFFFF","navigationStyle":"custom"};
		__wxAppCode__['pages/mine/mineContact/index.json'] = {"usingComponents":{"login-popup":"/components/loginPopup/loginPopup","pop-up":"/components/popup/popup"}};
		__wxAppCode__['pages/mine/passengerNotice/index.json'] = {"usingComponents":{},"navigationBarTitleText":"乘客须知"};
		__wxAppCode__['pages/mineset/index.json'] = {"usingComponents":{},"navigationBarTitleText":"设置"};
		__wxAppCode__['pages/orderDetail/index.json'] = {"usingComponents":{"ExplainDetail":"/components/ExplainDetail/ExplainDetail"},"navigationBarTitleText":"订单详情"};
		__wxAppCode__['pages/orderList/orderList.json'] = {"navigationBarTitleText":"海汽e行","enablePullDownRefresh":true,"usingComponents":{"Popup":"../../../components/popup/popup"}};
		__wxAppCode__['pages/orderList1/orderList.json'] = {"navigationBarTitleText":"","usingComponents":{"Popup":"../../components/popup/popup","login-popup":"../../components/loginPopup/loginPopup"}};
		__wxAppCode__['pages/orderWrite/orderWrite.json'] = {"navigationBarTitleText":"订单填写页","usingComponents":{"Popup":"../../components/popup/popup","datetime-picker-view":"../../components/datetime-picker-view/index"}};
		__wxAppCode__['pages/resignAccount/index.json'] = {"usingComponents":{},"navigationBarTitleText":"注销帐号"};
		__wxAppCode__['pages/station/index.json'] = {"usingComponents":{}};
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
var nv_require=function(){var nnm={"m_./pages/contacts/index.wxml:numberModule":np_0,"m_./pages/funaggrement/personCollect/personContact/index.wxml:numberModule":np_1,"m_./pages/invoice/index.wxml:m1":np_2,"m_./pages/invoice/index.wxml:m2":np_3,"m_./pages/invoice/index.wxml:m3":np_4,"m_./pages/invoice/invoicedetail/index.wxml:m2":np_5,"m_./pages/loginPhone/loginPhone.wxml:numberModule":np_6,"m_./pages/mine/index.wxml:numberModule":np_7,"m_./pages/mine/mineContact/index.wxml:numberModule":np_8,"m_./pages/mineset/index.wxml:numberModule":np_9,"m_./pages/orderDetail/index.wxml:lineModule":np_10,"m_./pages/orderList1/orderList.wxml:dateModule":np_11,"m_./pages/orderList1/orderList.wxml:fixedModule":np_12,"m_./pages/orderList1/orderList.wxml:lineModule":np_13,"p_./pages/orderWrite/orderWrite.wxs":np_14,};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./pages/contacts/index.wxml']={};
f_['./pages/contacts/index.wxml']['numberModule'] =nv_require("m_./pages/contacts/index.wxml:numberModule");
function np_0(){var nv_module={nv_exports:{}};nv_numberHide = (function (nv_str,nv_start,nv_size){if (nv_str.nv_length == 0 || nv_str == undefined){return("")};var nv_length = nv_str.nv_length;var nv_replaceStr = '';for(var nv_i = 0;nv_i < nv_size;nv_i++){nv_replaceStr = nv_replaceStr + "*"};if (nv_length >= nv_start + nv_size){return(nv_str.nv_substring(0,nv_start) + nv_replaceStr + nv_str.nv_substring(nv_start + nv_size,nv_length))} else {return(nv_str)}});nv_module.nv_exports.nv_numberHide = nv_numberHide;return nv_module.nv_exports;}

f_['./pages/funaggrement/personCollect/personContact/index.wxml']={};
f_['./pages/funaggrement/personCollect/personContact/index.wxml']['numberModule'] =nv_require("m_./pages/funaggrement/personCollect/personContact/index.wxml:numberModule");
function np_1(){var nv_module={nv_exports:{}};nv_numberHide = (function (nv_str,nv_start,nv_size){if (nv_str.nv_length == 0 || nv_str == undefined){return("")};var nv_length = nv_str.nv_length;var nv_replaceStr = '';for(var nv_i = 0;nv_i < nv_size;nv_i++){nv_replaceStr = nv_replaceStr + "*"};if (nv_length >= nv_start + nv_size){return(nv_str.nv_substring(0,nv_start) + nv_replaceStr + nv_str.nv_substring(nv_start + nv_size,nv_length))} else {return(nv_str)}});nv_module.nv_exports.nv_numberHide = nv_numberHide;return nv_module.nv_exports;}

f_['./pages/invoice/index.wxml']={};
f_['./pages/invoice/index.wxml']['m1'] =nv_require("m_./pages/invoice/index.wxml:m1");
function np_2(){var nv_module={nv_exports:{}};var nv_splitName = (function (nv_list){if (nv_list.nv_length == 0)return('');;var nv_names = '';for(var nv_j = 0;nv_j < nv_list.nv_length;nv_j++){nv_names = nv_names + nv_list[((nt_0=(nv_i),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))].nv_passengerName + ","};if (nv_names.nv_endsWith(",")){nv_names = nv_names.nv_substring(0,nv_names.nv_length - 1)};return(nv_names)});nv_module.nv_exports.nv_splitName = nv_splitName;return nv_module.nv_exports;}
f_['./pages/invoice/index.wxml']['m2'] =nv_require("m_./pages/invoice/index.wxml:m2");
function np_3(){var nv_module={nv_exports:{}};var nv_getNameValue = (function (nv_list,nv_id){var nv_name = '';for(var nv_i = 0;nv_i < nv_list.nv_length;nv_i++){if (nv_list[((nt_0=(nv_i),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))].nv_id == nv_parseInt(nv_id)){nv_name = nv_list[((nt_1=(nv_i),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))].nv_name;break}};return(nv_name)});nv_module.nv_exports.nv_getNameValue = nv_getNameValue;return nv_module.nv_exports;}
f_['./pages/invoice/index.wxml']['m3'] =nv_require("m_./pages/invoice/index.wxml:m3");
function np_4(){var nv_module={nv_exports:{}};var nv_splitAddress = (function (nv_str){var nv_cites = nv_str.nv_split("-");if (nv_cites.nv_length > 0 && nv_cites.nv_length == 1){return(nv_cites[(0)])} else if (nv_cites.nv_length > 0 && nv_cites.nv_length == 2){return(nv_cites[(1)])} else {return('')}});nv_module.nv_exports.nv_splitAddress = nv_splitAddress;return nv_module.nv_exports;}

f_['./pages/invoice/invoicedetail/index.wxml']={};
f_['./pages/invoice/invoicedetail/index.wxml']['m2'] =nv_require("m_./pages/invoice/invoicedetail/index.wxml:m2");
function np_5(){var nv_module={nv_exports:{}};var nv_getNameValue = (function (nv_list,nv_id){var nv_name = '';for(var nv_i = 0;nv_i < nv_list.nv_length;nv_i++){if (nv_list[((nt_0=(nv_i),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))].nv_id == nv_parseInt(nv_id)){nv_name = nv_list[((nt_1=(nv_i),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))].nv_name;break}};return(nv_name)});nv_module.nv_exports.nv_getNameValue = nv_getNameValue;return nv_module.nv_exports;}

f_['./pages/loginPhone/loginPhone.wxml']={};
f_['./pages/loginPhone/loginPhone.wxml']['numberModule'] =nv_require("m_./pages/loginPhone/loginPhone.wxml:numberModule");
function np_6(){var nv_module={nv_exports:{}};nv_numberHide = (function (nv_str,nv_start,nv_size){if (nv_str.nv_length == 0 || nv_str == undefined){return("")};var nv_length = nv_str.nv_length;var nv_replaceStr = '';for(var nv_i = 0;nv_i < nv_size;nv_i++){nv_replaceStr = nv_replaceStr + "*"};if (nv_length >= nv_start + nv_size){return(nv_str.nv_substring(0,nv_start) + nv_replaceStr + nv_str.nv_substring(nv_start + nv_size,nv_length))} else {return(nv_str)}});nv_module.nv_exports.nv_numberHide = nv_numberHide;return nv_module.nv_exports;}

f_['./pages/mine/index.wxml']={};
f_['./pages/mine/index.wxml']['numberModule'] =nv_require("m_./pages/mine/index.wxml:numberModule");
function np_7(){var nv_module={nv_exports:{}};nv_numberHide = (function (nv_str,nv_start,nv_size){if (nv_str.nv_length == 0 || nv_str == undefined){return("")};var nv_length = nv_str.nv_length;var nv_replaceStr = '';for(var nv_i = 0;nv_i < nv_size;nv_i++){nv_replaceStr = nv_replaceStr + "*"};if (nv_length >= nv_start + nv_size){return(nv_str.nv_substring(0,nv_start) + nv_replaceStr + nv_str.nv_substring(nv_start + nv_size,nv_length))} else {return(nv_str)}});nv_module.nv_exports.nv_numberHide = nv_numberHide;return nv_module.nv_exports;}

f_['./pages/mine/mineContact/index.wxml']={};
f_['./pages/mine/mineContact/index.wxml']['numberModule'] =nv_require("m_./pages/mine/mineContact/index.wxml:numberModule");
function np_8(){var nv_module={nv_exports:{}};nv_numberHide = (function (nv_str,nv_start,nv_size){if (nv_str.nv_length == 0 || nv_str == undefined){return("")};var nv_length = nv_str.nv_length;var nv_replaceStr = '';for(var nv_i = 0;nv_i < nv_size;nv_i++){nv_replaceStr = nv_replaceStr + "*"};if (nv_length >= nv_start + nv_size){return(nv_str.nv_substring(0,nv_start) + nv_replaceStr + nv_str.nv_substring(nv_start + nv_size,nv_length))} else {return(nv_str)}});nv_module.nv_exports.nv_numberHide = nv_numberHide;return nv_module.nv_exports;}

f_['./pages/mineset/index.wxml']={};
f_['./pages/mineset/index.wxml']['numberModule'] =nv_require("m_./pages/mineset/index.wxml:numberModule");
function np_9(){var nv_module={nv_exports:{}};nv_numberHide = (function (nv_str,nv_start,nv_size){if (nv_str.nv_length == 0 || nv_str == undefined){return("")};var nv_length = nv_str.nv_length;var nv_replaceStr = '';for(var nv_i = 0;nv_i < nv_size;nv_i++){nv_replaceStr = nv_replaceStr + "*"};if (nv_length >= nv_start + nv_size){return(nv_str.nv_substring(0,nv_start) + nv_replaceStr + nv_str.nv_substring(nv_start + nv_size,nv_length))} else {return(nv_str)}});nv_module.nv_exports.nv_numberHide = nv_numberHide;return nv_module.nv_exports;}

f_['./pages/orderDetail/index.wxml']={};
f_['./pages/orderDetail/index.wxml']['lineModule'] =nv_require("m_./pages/orderDetail/index.wxml:lineModule");
function np_10(){var nv_module={nv_exports:{}};nv_getLine = (function (nv_lineName){if (!!!nv_lineName)return;;return(nv_lineName.nv_replace("-","・"))});nv_module.nv_exports.nv_getLine = nv_getLine;return nv_module.nv_exports;}

f_['./pages/orderList1/orderList.wxml']={};
f_['./pages/orderList1/orderList.wxml']['dateModule'] =nv_require("m_./pages/orderList1/orderList.wxml:dateModule");
function np_11(){var nv_module={nv_exports:{}};nv_getWeekDate = (function (nv_mydateStr){if (!!!nv_mydateStr)return;;var nv_weekArray = ["日","一","二","三","四","五","六"];var nv_week = nv_weekArray[((nt_0=(nv_getDate(nv_mydateStr).nv_getDay()),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))];if (!!nv_week){return(nv_mydateStr.nv_substring(5,7) + '月' + nv_mydateStr.nv_substring(8,10) + "日 周" + nv_week + nv_mydateStr.nv_substring(11,16))} else {return(nv_mydateStr.nv_substring(5,7) + '月' + nv_mydateStr.nv_substring(8,10) + "日 " + nv_mydateStr.nv_substring(11,16))}});nv_module.nv_exports.nv_getWeekDate = nv_getWeekDate;return nv_module.nv_exports;}
f_['./pages/orderList1/orderList.wxml']['fixedModule'] =nv_require("m_./pages/orderList1/orderList.wxml:fixedModule");
function np_12(){var nv_module={nv_exports:{}};nv_getFixed = (function (nv_price){if (!!!nv_price)return('0.00');;return(nv_parseFloat(nv_price).nv_toFixed(2))});nv_module.nv_exports.nv_getFixed = nv_getFixed;return nv_module.nv_exports;}
f_['./pages/orderList1/orderList.wxml']['lineModule'] =nv_require("m_./pages/orderList1/orderList.wxml:lineModule");
function np_13(){var nv_module={nv_exports:{}};nv_getLine = (function (nv_lineName){if (!!!nv_lineName)return;;return(nv_lineName.nv_replace("-",""))});nv_module.nv_exports.nv_getLine = nv_getLine;return nv_module.nv_exports;}

f_['./pages/orderWrite/orderWrite.wxml']={};
f_['./pages/orderWrite/orderWrite.wxml']['tools'] =f_['./pages/orderWrite/orderWrite.wxs'] || nv_require("p_./pages/orderWrite/orderWrite.wxs");
f_['./pages/orderWrite/orderWrite.wxml']['tools']();

f_['./pages/orderWrite/orderWrite.wxs'] = nv_require("p_./pages/orderWrite/orderWrite.wxs");
function np_14(){var nv_module={nv_exports:{}};var nv_includes = (function (nv_array,nv_searchElement){return(nv_array.nv_indexOf(nv_searchElement) !== -1)});var nv_join = (function (nv_array,nv_symbol){return(nv_array.nv_join(nv_symbol))});var nv_joinKey = (function (nv_array,nv_symbol,nv_key){return(nv_array.nv_map((function (nv_item){return(nv_item[((nt_0=(nv_key),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))])})).nv_join(nv_symbol))});var nv_numToPassenger = (function (nv_num){if (nv_num > 0){var nv_arr = [];for(var nv_i = 1;nv_i <= nv_num;nv_i++){nv_arr.nv_push(nv_i)};return(nv_arr)}});nv_module.nv_exports = ({nv_includes:nv_includes,nv_join:nv_join,nv_joinKey:nv_joinKey,nv_numToPassenger:nv_numToPassenger,});return nv_module.nv_exports;}

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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||true)$gwx();;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/Arrayincludes.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(r,e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if(0==n)return!1;for(var i,o,a=0|e,u=Math.max(0<=a?a:n-Math.abs(a),0);u<n;){if((i=t[u])===(o=r)||"number"==typeof i&&"number"==typeof o&&isNaN(i)&&isNaN(o))return!0;u++}return!1}});
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/helpers/Arrayincludes.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("@babel/runtime/helpers/arrayLikeToArray.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
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
},{isPage:false,isComponent:false,currentFile:'@babel/runtime/regenerator.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("pages/agreement/desc.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports={serviceAgreement:{userService:'<p style="text-align: center; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="center"><span style="font-size: 24.0pt; font-family: 微软雅黑, sans-serif;">用户服务协议</span></p>\n<p style="text-align: left; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif;">更新时间：2022年9月7日</span></p>\n<p style="text-align: left; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif;">生效时间：2022年9月7日</span></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-weight: normal;">&nbsp;</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">1</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">．海汽机场快线接驳服务条款的确认</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳小程序的</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">所有权与运作权归海南海汽运输集团股份有限公司（以下简称</span>"</strong><strong><span style="font-family: 微软雅黑, sans-serif;">我们</span>"</strong><strong><span style="font-family: 微软雅黑, sans-serif;">）所有。在接受本协议之前</span>,</strong><strong><span style="font-family: 微软雅黑, sans-serif;">请您仔细阅读本协议的全部内容。如果您不同意本协议的任意内容，请不要进行后续操作。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">如果您未满</span>18</strong><strong><span style="font-family: 微软雅黑, sans-serif;">周岁，请务必在家长或其他监护人的陪同下阅读本服务协议，并在进行注册、登录、购票、支付等任何行为或使用</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">的其他任何服务前，应事先征得您的家长或其他监护人的同意。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-weight: normal;">&nbsp;</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">2</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">．服务内容</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">服务的具体内容由我们根据实际情况提供。我们在</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">上向您提供相关网络服务，与相关网络服务有关的设备（如个人电脑、手机、及其他与接入互联网或移动网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费）均由您自行负担。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-weight: normal;">&nbsp;</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">3</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">．用户权责</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong>3.1 </strong><strong><span style="font-family: 微软雅黑, sans-serif;">您有权按照我们规定的程序和要求使用我们向用户提供的各项网络服务，如果您对该服务有异议，可以与我们联系以便得到及时解决。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong>3.2 </strong><strong><span style="font-family: 微软雅黑, sans-serif;">您在申请使用</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">服务时，必须向</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">提供准确的个人资料，如个人资料有任何变动，必须及时更新。另外，我们不会在未经您授权的情形下向第三方透露其个人信息。除非：</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">（</span>1</strong><strong><span style="font-family: 微软雅黑, sans-serif;">）您要求我们或授权某人透露这些信息。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">（</span>2</strong><strong><span style="font-family: 微软雅黑, sans-serif;">）相应的法律及程序要求我们提供您的个人资料。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong>3.3 </strong><strong><span style="font-family: 微软雅黑, sans-serif;">您同意接受</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">通过短信或其他方式向您发送的预订确认信息、以及其他预订产品或服务相关的信息。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong>3.4 </strong><strong><span style="font-family: 微软雅黑, sans-serif;">您承诺在本服务时的所有行为均遵守国家法律、法规、</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">的平台规则以及各种社会公共利益或公共道德。您同意承诺不会利用本服务从事任何非法或不当交易、或开展任何违反本协议目的或者侵犯其他第三方权益的行为，否则</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">有权立即单方面终止提供本服务，并不承担任何责任；如果因您的行为给</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">造成损失的，您应承担全部赔偿责任。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-weight: normal;">&nbsp;</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">4</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">．服务条款的修改</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong>4.1 </strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">将有权随时修改本协议或其他条款，一旦相关内容发生变动，</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">将会通过公告等方式在本页面或其他页面提前</span>7</strong><strong><span style="font-family: 微软雅黑, sans-serif;">日向您提示修改内容。您可以定期登录本页面及其他相关页面，了解最新的协议内容，如您需要表达相关意见建议，可通过</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">相关客服渠道提出。变更后的协议和规则如对您的权益造成重大影响，</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">将以页面弹窗或其他形式取得您的同意。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong>4.2 </strong><strong><span style="font-family: 微软雅黑, sans-serif;">如果您不同意</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">对本协议相关条款所做的修改时，您应立即停止使用</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">基于修改后的隐私政策提供的相关服务。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-weight: normal;">&nbsp;</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">5</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">．服务内容的修改或中断</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">本服务涉及到互联网及移动通讯等服务，可能会受到各个环节不稳定因素的影响。因此任何因不可抗力、计算机病毒或黑客攻击、系统不稳定、用户所在位置、用户关机、</span>GSM</strong><strong><span style="font-family: 微软雅黑, sans-serif;">网络、互联网络、通信线路等其他</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">无法预测或控制的原因，造成服务中断、取消或终止的风险，由此给您带来的损失</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">不承担赔偿责任。</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">需要定期或不定期地对提供网络服务的平台或相关的设备进行检修或者维护，如因此类情况而造成网络服务（包括收费网络服务）在合理时间内的中断，</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">无需为此承担任何责任。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-weight: normal;">&nbsp;</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">6</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">．中断或终止服务</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">如发生下列任何一种情形，我们有权随时中断或终止向您提供本协议项下的网络服务，而无需对您或任何第三方承担任何责任。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong>a </strong><strong><span style="font-family: 微软雅黑, sans-serif;">您向我们提供的个人资料不真实。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong>b </strong><strong><span style="font-family: 微软雅黑, sans-serif;">您违反本协议的规则或不履行其所承担的义务。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong>c </strong><strong><span style="font-family: 微软雅黑, sans-serif;">除此之外，您可随时根据需要通知我们终止提供服务，服务终止后，您使用服务的权利同时终止。自服务终止之时起，</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">不再对您承担任何责任。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-weight: normal;">&nbsp;</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">7</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">．免责声明</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong>1</strong><strong><span style="font-family: 微软雅黑, sans-serif;">）、因下列原因导致</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">无法正常提供服务，使您无法使用或无法正常使用各项服务时，</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">不承担任何损害赔偿责任，该状况包括但不限于：</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">（</span>1</strong><strong><span style="font-family: 微软雅黑, sans-serif;">）我们系统停机维护或升级期间。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">（</span>2</strong><strong><span style="font-family: 微软雅黑, sans-serif;">）因台风、地震、海啸、洪水、战争、雷电或恐怖袭击等不可抗力之因素，造成我们系统不能正常执行业务的。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">（</span>3</strong><strong><span style="font-family: 微软雅黑, sans-serif;">）您的电脑</span>/</strong><strong><span style="font-family: 微软雅黑, sans-serif;">手机软硬件和通信线路、供电线路出现故障的；</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">（</span>4</strong><strong><span style="font-family: 微软雅黑, sans-serif;">）您操作不当或通过非我们授权或认可的方式使用我们服务的；</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">（</span>5</strong><strong><span style="font-family: 微软雅黑, sans-serif;">）因病毒、木马、恶意程序攻击、网络拥堵、系统不稳定、系统或设备故障、通讯故障、电力故障、银行原因</span> </strong><strong><span style="font-family: 微软雅黑, sans-serif;">、第三方服务瑕疵或政府行为等原因，造成本服务中断或者延迟。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">（</span>6</strong><strong><span style="font-family: 微软雅黑, sans-serif;">）其他不可归因于</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">的原因。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">尽管有前款约定，我们将采取合理行动积极促使服务恢复正常。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong>2</strong><strong><span style="font-family: 微软雅黑, sans-serif;">）、因下列情形导致您损失的，</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">不承担责任：</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">（</span>1</strong><strong><span style="font-family: 微软雅黑, sans-serif;">）法律、政策重大变化，或</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">不可预测或控制的因素导致您损失的。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">（</span>2</strong><strong><span style="font-family: 微软雅黑, sans-serif;">）因您对设备的错误操作和对有关信息的错误理解导致您损失的。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">（</span>3</strong><strong><span style="font-family: 微软雅黑, sans-serif;">）因您不正当或非法使用服务、在网上进行交易、或您传送信息变动而产生的直接、间接、偶然、特殊及后续的损害</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">（</span>4</strong><strong><span style="font-family: 微软雅黑, sans-serif;">）因您的故意或疏忽导致交易密码或其他验证信息泄露或遗失导致您损的。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">（</span>5</strong><strong><span style="font-family: 微软雅黑, sans-serif;">）非因</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">原因造成您交易密码等重要信息泄露或遗失导致您损失的。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">（</span>6</strong><strong><span style="font-family: 微软雅黑, sans-serif;">）非因</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">原因造成的您的损失。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">（</span>7</strong><strong><span style="font-family: 微软雅黑, sans-serif;">）第三方支付机构的原因造成的损失。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">（</span>8</strong><strong><span style="font-family: 微软雅黑, sans-serif;">）法律规定和本协议约定的其他</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">免责事项。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-weight: normal;">&nbsp;</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">8</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">．通告</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">所有发给您的通告都可以通过重要页面的公告、电子邮件、短信以及常规信件形式传送。</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-weight: normal;">&nbsp;</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">9</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">．法律</span></strong></p>\n<p style="margin-right: 0cm; margin-left: 0cm; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-family: 微软雅黑, sans-serif;">海汽机场快线接驳</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">用户服务协议之效力、解释、执行均适用中华人民共和国法律。如发生争议，请通过海汽客服电话：</span>0898-66668855</strong><strong><span style="font-family: 微软雅黑, sans-serif;">或客服邮箱：</span></strong>hq66668855@163.com<strong><span style="font-family: 微软雅黑, sans-serif;">与我们联系。</span></strong></p>',privacy:'<p style="text-align: center; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="center"><strong><span style="font-size: 24.0pt; font-family: 微软雅黑, sans-serif;">隐私政策</span></strong></p>\n<p style="text-align: left; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif;">更新时间：2022年11月14日</span></p>\n<p style="text-align: left; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif;">生效时间：2022年11月24日</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; color: #333333; background: white;">本隐私政策内容适用于</span></strong><strong><span style="font-family: 微软雅黑, sans-serif;">海南海汽运输集团股份有限公司</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; color: #333333; background: white;">（&ldquo;我们&rdquo;）运营的机场快线接驳小程序。</span></strong></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; color: #666666; background: white;">&nbsp;</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-size: 16.0pt; font-family: 黑体;">提示条款</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif;">感谢您对我们的信任，我们深知个人信息对您的重要性，我们将按法律法规要求，采取严格的安全保护措施，保护您的个人隐私信息。在此，我们郑重的提醒您：</span><br /> 1. <span style="font-family: 微软雅黑, sans-serif;">在您使用我们提供的服务时，您应当详细阅读本用户隐私政策，详细了解我们收集、存储、使用、披露和保护您的个人信息的举措，进而帮助您更好地保护您的隐私。</span><br /> 2. <span style="font-family: 微软雅黑, sans-serif;">根据相关法律法规要求，网络产品、服务具有收集用户信息功能的，其提供者应当向用户明示并取得同意。我们特通过本用户隐私政策明确向您告知，并请您知晓我们如何使用用户的必要信息，进而为您提供更好的服务。</span></p>\n<ol style="margin-bottom: 0cm; margin-top: 0px;" start="3">\n<li style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt 0px; font-size: 12pt; font-family: Calibri, sans-serif;"><span style="font-family: 微软雅黑, sans-serif; color: #0d0d0d;">根据《常见类型移动互联网应用程序必要个人信息范围规定》，</span><span style="font-family: 微软雅黑, sans-serif;">本小程序属于&ldquo;交通票务类&rdquo;，基本业务功能为&ldquo;交通相关的票务服务及行程管理（如票务购买、改签、退票、行程管理等）&rdquo;功能，此功能下必要个人信息为：</span></li>\n</ol>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif;">①注册用户移动电话号码；</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif;">②旅客姓名、证件类型和号码、旅客类型。旅客类型通常包括儿童、成人等；</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif;">③旅客出发地、目的地、出发时间、车次号、位置信息；</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif;">④支付时间、支付金额、支付渠道等支付信息。</span><br /> 4. <strong><span style="font-family: 微软雅黑, sans-serif;">在使用我们各项产品或服务前，请您务必仔细阅读并透彻理解本隐私政策，如果您不同意本隐私政策的任何内容，您应当立即停止使用我们平台服务。</span></strong><span style="font-family: 微软雅黑, sans-serif;">如对本政策内容有任何疑问、意见或建议，您可以及时通过第</span>10<span style="font-family: 微软雅黑, sans-serif;">条所列方式与我们取得联系。</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left">5. <span style="font-family: 微软雅黑, sans-serif;">您同意隐私政策仅代表您已了解应用提供的功能，以及功能运行所需的必要个人信息，并不代表您已同意我们可以收集非必要个人信息，非必要个人信息会根据您使用过程中的授权情况单独征求您的同意。</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left">6. <span style="font-family: 微软雅黑, sans-serif;">相应设备权限并不会默认开启，当涉及重要或敏感的设备权限时，我们会在您使用到相应业务功能时，另行弹窗再次征得您的同意后开启；权限开启后，您还可以随时通过设备设置关闭权限；你不同意开启权限，将不会影响其他非相关业务功能的正常使用。针对个人敏感信息，我们会单独征得您的同意后进行处理。</span><br /> </p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif;">本隐私政策将帮助您了解以下内容：</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">1</span><span style="font-family: 微软雅黑, sans-serif; background: white;">、如何收集和使用您的个人信息</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">2</span><span style="font-family: 微软雅黑, sans-serif; background: white;">、如何共享、转让、公开披露您的个人信息</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">3</span><span style="font-family: 微软雅黑, sans-serif; background: white;">、如何保存您的个人信息</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">4</span><span style="font-family: 微软雅黑, sans-serif; background: white;">、Cookie的使用</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">5</span><span style="font-family: 微软雅黑, sans-serif; background: white;">、个人信息安全</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">6</span><span style="font-family: 微软雅黑, sans-serif; background: white;">、个人信息安全事件的处置</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">7</span><span style="font-family: 微软雅黑, sans-serif; background: white;">、未成年人的个人信息保护</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">8</span><span style="font-family: 微软雅黑, sans-serif; background: white;">、您的个人信息权利</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">9</span><span style="font-family: 微软雅黑, sans-serif; background: white;">、本隐私政策的变更</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">10</span><span style="font-family: 微软雅黑, sans-serif; background: white;">、如何联系我们</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; color: #666666;">&nbsp;</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">1</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">、如何收集和使用您的个人信息</span></strong></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; color: #333333; background: white;">您理解并同意：</span></strong></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; color: #333333; background: white;">为给您带来更好的产品和服务体验，我们在持续努力改进我们的技术，随之我们可能会不时推出新的或优化后的功能，可能需要收集、使用新的个人信息或变更个人信息使用目的或方式。对此，我们将通过更新本隐私政策或通过弹窗或页面提示等方式向您说明对应个人信息的收集目的、范围及使用方式，并在征得您明示同意后收集、使用您的个人信息。</span></strong></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">&ldquo;个人信息&rdquo;是指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; color: #333333; background: white;">（一）收集和使用您个人信息的基本功能</span></strong></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">我们的服务包括一些基本功能，这些功能包括实现网上购票所必须的功能，改进我们的服务所必须的功能及保障交易安全所必须的功能。我们需要收集、保存和使用下列与您有关的个人信息才能实现该等基本功能。如果您不提供相关信息，您将无法享受我们提供的服务，请您知晓，必要时，我们可能会将您提供的身份信息向发证机关进行核验，以保障人证合一，账户及个人信息安全，各项基本功能及其所需的个人信息类型如下：</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（1）注册及登录功能</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">如果您注册成为我们的用户，</span><span style="font-family: 微软雅黑, sans-serif;">您需要提供微信小程序登录授权、获取您公开的头像、呢称，并创建用户名</span><span style="font-family: 微软雅黑, sans-serif; background: white;">，便于我们为您提供购票等服务，并提供<strong><span style="color: #333333;">姓名、身份证件号码、以及与身份信息对应的且可通话联络的唯一手机号码、短信息验证码</span></strong></span><span style="font-family: 微软雅黑, sans-serif;">。</span></p>\n<p style="margin: 3.75pt 0cm 0.0001pt; text-align: left; text-indent: 21pt; background: white; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">如果您仅使用浏览网站、查询余票、班次、票价等信息服务，您无需提供上述信息。</span></p>\n<p style="margin: 3.75pt 0cm 0.0001pt; text-align: left; text-indent: 21pt; background: white; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">该功能未涉及调用用户敏感权限。</span></p>\n<p style="margin: 3.75pt 0cm 0.0001pt; text-align: left; text-indent: 21pt; background: white; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">使用第三方SDK：</span></p>\n<p style="margin: 3.75pt 0cm 0.0001pt; text-align: left; text-indent: 21pt; background: white; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">微信SDK，用于用户登录，此SDK直接收集您的微信头像、昵称、IP地址、操作系统版本、设备品牌及型号及应用信息，此类信息属于实现该SDK功能的必须信息。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（2）购订票功能</span></p>\n<p style="margin: 3.75pt 0cm 0.0001pt; text-align: left; text-indent: 21pt; background: white; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">如您选择购订票服务，需提供<strong><span style="color: #333333;">乘客姓名、乘客类型、证件类型、证件号码、手机号码、</span></strong><strong>出发城市、到达城市、乘车日期信息</strong><span style="color: #666666;">。</span>如您为其他人订票，您需要提供该实际订购人的前述个人信息。一旦完成订购行为，即视为该实际订购人亦同意接受本《隐私政策》。因此，<strong><span style="color: #333333;">您在为其他人办理订购产品或服务之前，您需确保您已经取得其授权同意。</span></strong></span></p>\n<p style="margin: 3.75pt 0cm 0.0001pt; text-align: left; text-indent: 21pt; background: white; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">该功能未涉及调用用户敏感权限。</span></p>\n<p style="margin: 3.75pt 0cm 0.0001pt; text-align: left; text-indent: 21pt; background: white; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">使用第三方SDK：</span></p>\n<p style="margin: 3.75pt 0cm 0.0001pt; text-align: left; text-indent: 21pt; background: white; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">高德地图SDK，用于用户登录，此SDK直接收集您的微信头像、昵称、IP地址、操作系统版本、设备品牌及型号及应用信息，此类信息属于实现该SDK功能的必须信息。</span></p>\n<p style="margin: 3.75pt 0cm 0.0001pt; text-align: left; text-indent: 21pt; background: white; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">&nbsp;</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; color: #333333; background: white;">（二）收集和使用您个人信息的扩展功能</span></strong></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">为使您享受的服务更便捷或使您的体验更丰富，我们提供了以下扩展功能，下列功能可能会收集和使用您的个人信息。如果您不提供这些个人信息，您依然可以使用第（一）条所列明的基本功能。这些扩展功能及其所需的个人信息类型如下：</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（1）为方便您使用产品或服务</span></p>\n<ul style="margin-top: 3.75pt; margin-bottom: .0001pt;">\n<li style="margin: 3.75pt 0cm 0.0001pt 14px; text-align: left; background: white; font-size: 12pt; font-family: Calibri, sans-serif; text-indent: 14px;"><strong><span style="font-family: 微软雅黑, sans-serif; background: white;">支付功能</span></strong></li>\n</ul>\n<p style="text-indent: 21pt; margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 12pt; font-family: Calibri, sans-serif;"><span style="font-family: 微软雅黑, sans-serif;">为了您能使用快捷支付服务，您可以选择与我们合作的第三方支付机构（包括微信支付、银联云闪付）所提供的支付服务。支付功能本身并不收集您的个人信息，但我们需要将您的订单号与交易金额信息与这些支付机构共享以实现其确认您的支付指令并完成支付。</span></p>\n<p style="text-indent: 21pt; margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 12pt; font-family: Calibri, sans-serif;"><span style="font-family: 微软雅黑, sans-serif;">使用第三方</span>SDK<span style="font-family: 微软雅黑, sans-serif;">：</span></p>\n<p style="text-indent: 21pt; margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 12pt; font-family: Calibri, sans-serif;"><span style="font-family: 微软雅黑, sans-serif;">微信</span>SDK<span style="font-family: 微软雅黑, sans-serif;">，用于支付功能，此</span>SDK<span style="font-family: 微软雅黑, sans-serif;">直接收集您的设备信息、设备型号、操作系统，此类信息属于该</span>SDK<span style="font-family: 微软雅黑, sans-serif;">功能必须的信息；</span></p>\n<p style="text-indent: 21pt; margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 12pt; font-family: Calibri, sans-serif;"><span style="font-family: 微软雅黑, sans-serif;">银联云闪付</span>SDK<span style="font-family: 微软雅黑, sans-serif;">，用于支付功能，此</span>SDK<span style="font-family: 微软雅黑, sans-serif;">不收集用户个人信息。</span></p>\n<p style="margin: 3.75pt 0cm 0.0001pt; text-align: left; text-indent: 21pt; background: white; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">该功能未涉及调用用户敏感权限。</span></p>\n<ul style="margin-top: 3.75pt; margin-bottom: .0001pt;">\n<li style="margin: 3.75pt 0cm 0.0001pt 14px; text-align: left; background: white; font-size: 12pt; font-family: Calibri, sans-serif; text-indent: 14px;"><strong><span style="font-family: 微软雅黑, sans-serif; background: white;">位置信息</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; background: white;">：</span></strong></li>\n</ul>\n<p style="margin: 3.75pt 0cm 0.0001pt; text-align: left; text-indent: 21pt; background: white; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">&nbsp;</span><span style="font-family: 微软雅黑, sans-serif;">您可以选择开启手机的定位权限，用于提供您的位置信息，以便我们为您提供所在出行路线规划建议，或使您更便捷的选择您的出发地点。如您不提供前述信息，您将无法便捷的获得前述服务，但不影响您使用我们的其他服务。</span></p>\n<p style="margin: 3.75pt 0cm 0.0001pt; text-align: left; text-indent: 21pt; background: white; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">&nbsp;</span></p>\n<ol style="margin-bottom: 0cm; margin-top: 0px;" start="2">\n<li style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt 14px; font-size: 12pt; font-family: Calibri, sans-serif;"><span style="font-family: 微软雅黑, sans-serif; background: white;">为您提供您购买或使用的特定的产品或服务</span></li>\n</ol>\n<p style="margin: 3.75pt 0cm 0.0001pt; text-align: left; text-indent: 21pt; background: white; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">&bull; 如您选择&ldquo;<strong>自驾租车</strong>&rdquo;服务，需提供<strong>租车人驾驶证证件号、驾驶证正本和副本图片</strong>。</span></p>\n<p style="margin: 3.75pt 0cm 0.0001pt; text-align: left; text-indent: 21pt; background: white; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">如您选择&ldquo;<strong>出行保险</strong>&rdquo;服务，需提供<strong>投保人姓名、证件类型、证件号码、手机号码；为他人投保时，需提供被保人的姓名、证件类型、证件号码。</strong></span></p>\n<p style="margin: 3.75pt 0cm 0.0001pt; text-align: left; text-indent: 21pt; background: white; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; background: white;">使用第三方SDK：</span></strong></p>\n<p style="margin: 3.75pt 0cm 0.0001pt; text-align: left; text-indent: 21pt; background: white; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; background: white;">保险公司SDK，用于购买保险服务，此SDK收集投保人姓名、证件号及手机号，</span></strong><span style="font-family: 微软雅黑, sans-serif;">此类信息属于该</span>SDK<span style="font-family: 微软雅黑, sans-serif;">功能必须的信息。</span></p>\n<p style="margin: 3.75pt 0cm 0.0001pt; text-align: left; text-indent: 21pt; background: white; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">为<strong>展示您账户的订单信息</strong>，我们会收集您在使用我们服务过程中产生的订单信息用于向您展示及便于您对订单进行管理。</span></p>\n<p style="margin: 3.75pt 0cm 0.0001pt; text-align: left; text-indent: 21pt; background: white; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">为方便您出行，我们可能会向您发送行程通知短信，主要包括电子客票相关信息及目的地服务等内容。</span></p>\n<p style="margin: 3.75pt 0cm 0.0001pt; text-align: left; text-indent: 21pt; background: white; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">您可通过网站提供的链接入口使用我们及业务合作伙伴提供的产品或服务，当您通过我们产品或服务使用上述服务时，您授权我们根据实际业务及合作需要从我们关联公司处接收、汇总、分析我们确认其来源合法或您授权同意其向我们提供的您的个人信息或交易信息。在您使用第三方提供的服务前，请您确保已充分了解该第三方的个人信息收集使用规则，如遇到问题请咨询该公司客服。</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; color: #333333; background: white;">（三）征得授权同意的例外</span></strong></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">根据中华人民共和国相关法律法规、国家标准，以下情形中收集您的个人信息无需征得您的授权同意：</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">1)</span><span style="font-family: 微软雅黑, sans-serif; background: white;">与我们履行法律法规规定的义务相关的；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">2</span><span style="font-family: 微软雅黑, sans-serif; background: white;">）与中华人民共和国国家安全、国防安全直接相关的；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">3</span><span style="font-family: 微软雅黑, sans-serif; background: white;">）与公共安全、公共卫生、重大公共利益直接相关的；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">4</span><span style="font-family: 微软雅黑, sans-serif; background: white;">）与刑事侦查、起诉、审判和判决执行等直接相关的；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">5</span><span style="font-family: 微软雅黑, sans-serif; background: white;">）出于维护您或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">6</span><span style="font-family: 微软雅黑, sans-serif; background: white;">）所收集的个人信息是您自行向社会公众公开的；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">7</span><span style="font-family: 微软雅黑, sans-serif; background: white;">）根据您要求签订和履行合同所必需的；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">8</span><span style="font-family: 微软雅黑, sans-serif; background: white;">）从合法公开披露的信息中收集的您的个人信息的，如合法的新闻报道、政府信息公开等渠道；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">9</span><span style="font-family: 微软雅黑, sans-serif; background: white;">）维护所提供产品或服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">10</span><span style="font-family: 微软雅黑, sans-serif; background: white;">）作为学术研究机构，出于公共利益开展统计或学术研究所必要，且其对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的。</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; color: #666666;">&nbsp;</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">2</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">、如何共享、转让、公开披露您的个人信息</span></strong></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; color: #333333; background: white;">（1）共享</span></strong></p>\n<p style="text-indent: 21pt; margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 12pt; font-family: Calibri, sans-serif;"><span style="font-family: 微软雅黑, sans-serif;">我们可能会向合作伙伴等第三方共享您的<strong>会员注册信息、订单信息、以及位置信息</strong>，以保障为您提供的服务顺利完成。但我们仅会出于合法、正当、必要、特定、明确的目的共享您的个人信息，并且只会共享提供服务所必要的个人信息。我们的合作伙伴包括以下类型：</span><br /> 1.<strong><span style="font-family: 微软雅黑, sans-serif;">客运单位：</span></strong><span style="font-family: 微软雅黑, sans-serif;">包括但不限于为了满足您客运交通出行的客运单位及有客运服务资质的第三方合作方（以下简称</span>&ldquo;<span style="font-family: 微软雅黑, sans-serif;">合作商</span>&rdquo;<span style="font-family: 微软雅黑, sans-serif;">）。这些合作商可能根据需要与您联系，以完成客运服务。我们向合作商披露的信息仅限于您实现订票出行服务所必要的信息。</span><br /> 2.<strong><span style="font-family: 微软雅黑, sans-serif;">金融机构和第三方支付机构：</span></strong><span style="font-family: 微软雅黑, sans-serif;">当您购买车票、支付其他服务费用时，我们会与金融机构或第三方支付机构共享特定的订单信息，当我们认为用于欺诈检测和预防目的实属必要时，我们将进一步和相关金融机构共享其他必要信息，如</span>IP<span style="font-family: 微软雅黑, sans-serif;">地址。我们共享个人信息的金融机构和第三方支付机构为您绑定的银行卡所属机构或</span>/<span style="font-family: 微软雅黑, sans-serif;">及微信支付。</span> <br /> 3.<strong><span style="font-family: 微软雅黑, sans-serif;">技术服务商：</span></strong><span style="font-family: 微软雅黑, sans-serif;">我们的小程序由第三方技术服务商提供技术支持，以向您提供基础功能服务，包括用户注册、登录、数据处理等。为向您提供便捷的用户注册和登录功能，我们使用了微信开放平台插件，收集的个人信息类型和范围包括昵称、手机号、</span>UID<span style="font-family: 微软雅黑, sans-serif;">等。我们会要求技术服务商均采取不低于本隐私政策同等严格的保护措施。</span><br /> 4.<span style="font-family: 微软雅黑, sans-serif;">对于我们与之共享个人信息的公司、组织，我们会确认其具有合法运营资质，在系统开发、设备部署、数据保存与使用、人员安全等方面遵守国家信息安全要求，与其签署严格的保密协定，要求他们按照本隐私政策以及我们其他相关的保密和安全规范来处理个人信息。我们的合作伙伴无权将共享的个人信息用于任何其他用途，如要改变个人信息的处理目的，将再次征求您的授权同意。</span></p>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 12pt; font-family: Calibri, sans-serif;"><span style="font-family: 微软雅黑, sans-serif;">当您使用海汽</span>e<span style="font-family: 微软雅黑, sans-serif;">行公众号中由第三方提供的功能时，我们可能会接入由第三方提供的软件开发包（</span>SDK<span style="font-family: 微软雅黑, sans-serif;">）以实现相关功能。我们会对授权合作伙伴获取有关信息的应用程序接口（</span>API<span style="font-family: 微软雅黑, sans-serif;">）、软件开发包（</span>SDK<span style="font-family: 微软雅黑, sans-serif;">）进行严格的安全检测，并与授权合作伙伴约定严格的数据保护措施。您可以点击<span style="color: blue; text-decoration: underline;">第三方共享清单</span>查看我们接入的</span>SDK<span style="font-family: 微软雅黑, sans-serif;">详情。</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; background: white;">（2）转让</span></strong></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">除符合&ldquo;共享、转让、公开披露个人信息时事先征得授权同意的例外&rdquo;中的情形外，我们不会将您的个人信息转让给任何公司、组织和个人。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">在涉及收购、兼并、重组、破产或类似的交易或情形时，如涉及到个人信息转让，我们会向您告知有关情况，并要求新的持有您个人信息的公司、组织继续受本隐私政策的约束，如变更个人信息使用目的的，我们将要求该公司、组织重新向您征求授权同意。若破产而无承接方的，在符合法律规定的情况下，我们会对您的个人信息做删除处理。</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; background: white;">（3）公开披露</span></strong></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">我们仅会在以下情形，公开披露您的个人信息：</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">在您明确同意或主动选择情况下，我们可能会公开披露您所指定的个人信息；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">根据中华人民共和国法律、法规的要求、强制性的行政执法或司法要求所必须提供您个人信息的情况下，我们可能会依据所要求公开披露您的个人信息。在符合法律法规的前提下，当我们收到上述披露信息的请求时，我们会要求必须出具与之相应的法律文件，如传票或调查函。</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; background: white;">（4）共享、转让、公开披露个人信息时事先征得授权同意的例外</span></strong></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">根据中华人民共和国相关法律法规、国家标准，以下情形中，共享、转让、公开披露您的个人信息无需事先征得您的授权同意：</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">1</span><span style="font-family: 微软雅黑, sans-serif; background: white;">）与我们履行法律法规规定的义务相关的；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">2</span><span style="font-family: 微软雅黑, sans-serif; background: white;">）与国家安全、国防安全直接相关的；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">3</span><span style="font-family: 微软雅黑, sans-serif; background: white;">）与公共安全、公共卫生、重大公共利益直接相关的；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">4</span><span style="font-family: 微软雅黑, sans-serif; background: white;">）与刑事侦查、起诉、审判和判决执行等直接相关的；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">5</span><span style="font-family: 微软雅黑, sans-serif; background: white;">）出于维护您或其他个人的生命、财产等重大合法权益但又很难得到您本人授权同意的；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">6</span><span style="font-family: 微软雅黑, sans-serif; background: white;">）所涉及的个人信息是您自行向社会公众公开的个人信息；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">7</span><span style="font-family: 微软雅黑, sans-serif; background: white;">）根据您要求签订和履行合同所必需的；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">8</span><span style="font-family: 微软雅黑, sans-serif; background: white;">）从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">9</span><span style="font-family: 微软雅黑, sans-serif; background: white;">）维护我们所提供产品或服务的安全稳定运行所必需的，如发现、处置产品或服务的故障。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">根据中华人民共和国法律规定，共享、转让经去标识化处理的个人信息，且确保数据接收方无法复原并重新识别个人信息主体的，不属于个人信息的对外共享、转让及公开披露行为，对此类数据的保存及处理将无需另行向您通知并征得您的同意。</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; color: #666666;">&nbsp;</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">3</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">、如何保存您的个人信息</span></strong></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">即使您从中国大陆以外地区或国家访问我们网站，请您注意，您的信息将<strong>存储于中国大陆，并且在中国大陆进行处理。</strong></span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">一般而言，我们仅为实现上述目的所必需的最短时间保留您的个人信息。在超出保存期限后，我们会对您的个人信息进行删除或者匿名化处理。如我们停止运营，我们将及时停止继续收集您个人信息的活动，将停止运营的通知以逐一送达或公告的形式通知您，并在终止服务或运营后对所持有的个人信息进行删除或匿名化处理。</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; color: #666666;">&nbsp;</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">4</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">、Cookie的使用</span></strong></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">Cookie</span><span style="font-family: 微软雅黑, sans-serif; background: white;">是网页服务器放在您访问设备上的文本文件，会帮助您在后续访问时调用信息，简化记录您填写个人信息的流程。您有权接受或拒绝Cookie，如果浏览器自动接收Cookie，您可以根据自己的需要修改浏览器的设置以拒绝Cookie。请注意，如果您选择拒绝Cookie，那么您可能无法完全体验我们提供的服务。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; color: #666666; background: white;">&nbsp;</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">5</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">、个人信息安全</span></strong></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（1）我们非常重视信息安全，成立了专门的负责团队。我们努力为您提供信息保护，采取了合适的管理、技术以及物理安全措施，参照国内外信息安全标准及最佳实践建立了与业务发展相适应的信息安全保障体系。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（2）我们从数据的生命周期角度出发，在数据收集、存储、显示、处理、使用、销毁等各个环节建立了安全防护措施，根据信息敏感程度的级别采取不同的控制措施，包括但不限于访问控制、SSL（Secure Socket Layer）加密传输进行加密存储、敏感信息脱敏显示等。我们已采取符合业界标准、合理可行的安全防护措施保护您提供的个人信息安全，使用加密技术提高个人信息的安全性，使用受信赖的保护机制防止个人信息遭到恶意攻击，防止个人信息遭到未经授权访问、公开披露、使用、修改、损坏或丢失。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（3）我们部署了访问控制机制，尽力确保只有授权人员才可访问个人信息。我们对可能接触到您信息的员工也采取了严格管理，可监控他们的操作情况，对于数据访问、内外部传输使用、脱敏、解密等重要操作建立了审批机制，并与上述员工签署保密协议等。与此同时，我们还定期对员工进行信息安全培训，要求员工在日常工作中形成良好操作习惯，提升数据保护意识。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（4）尽管有前述的安全措施，但同时也请您理解在网络上不存在&ldquo;完善的安全措施&rdquo;。我们会按现有的技术提供相应的安全措施来保护您的信息，提供合理的安全保障，我们将尽力做到使您的信息不被泄露、损毁或丢失。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（5）您的账户均有安全保护功能，<strong>请妥善保管您的账号及密码信息，切勿将密码告知他人或其他网站，如果您发现自己的个人信息泄露，特别是您的账号和密码发生泄露，请您立即与我们的客服联系，以便我们采取相应的措施。</strong></span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（6）请您及时保存或备份您的文字、图片等其他信息，您需理解并接受，您接入我们的服务所用的系统和通讯网络，有可能因我们可控范围外的因素而出现问题。</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; color: #666666;">&nbsp;</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">6</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">、个人信息安全事件的处置</span></strong></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">在不幸发生个人信息安全事件后，我们会启动应急预案，阻止安全事件扩大，并将按照中华人民共和国法律法规的要求向您告知安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。事件相关情况我们将以邮件、电话、推送通知等方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，主动上报信息安全事件的处置情况。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">&nbsp;</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">7</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">、未成年人的个人信息保护</span></strong></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">按照中华人民共和国相关法律规定，未满18周岁为未成年人，不满 14 周岁的未成年人为儿童。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">如果没有父母或监护人的同意，<strong>未成年人，尤其是未满14周岁儿童不应创建自己的个人信息主体账户。</strong>如您是未成年人的监护人，我们提示您正确履行监护职责，保护未成年人个人信息安全。若您所监护的未成年人使用我们的服务的，您应予以正确引导和监护。<strong>如您是未成年人，在使用我们的服务前，请在父母或监护人的陪同和帮助下仔细阅读本隐私政策，并在征得其父母或监护人同意的前提下</strong>使用我们的服务或向我们提供信息。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">对于经父母或监护人同意使用我们的产品或服务而收集未成年人，尤其是儿童的个人信息情况，我们只会在法律法规允许、父母或监护人明确同意或者保护未成年人所必要的情况下使用、共享、转让或披露此信息。如果我们发现自己在未事先获得父母或监护人同意的情况下收集了儿童的个人信息，则会设法尽快删除相关数据。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">对于儿童个人信息，我们会进一步采取以下措施：</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（1）对于收集到的儿童个人信息，我们除遵守本隐私政策关于用户个人信息的约定外，还会秉持正当必要、知情同意、目的明确、安全保障、依法利用的原则，严格遵循《儿童个人信息网络保护规定》等法律法规的要求进行存储、使用、披露，且不会超过实现收集、使用目的所必须的期限，到期后我们会对儿童个人信息进行删除或匿名化处理。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（2）当您作为监护人为被监护的儿童选择使用相关服务时，我们可能需要向您收集被监护的儿童个人信息，用于向您履行相关服务之必要。在具体服务中需要向您收集儿童个人信息的，我们会事先取得您的授权同意，并告知您收集的目的和用途。如果您不提供前述信息，您将无法享受我们提供的相关服务。您作为监护人应当正确履行监护职责，保护儿童个人信息安全。若儿童本人需要注册或使用我们的产品与/或服务，您应正确引导并予以监护。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（3）儿童或其监护人有权随时访问和更正儿童个人信息，还可以向我们提出更正和删除的要求。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（4）如果您是不满14周岁的儿童，在您使用我们的服务前，您和您的监护人还应仔细阅读我们专门制定的《未成年人隐私政策》，确保您的监护人同意该规则。如果您的监护人不同意《未成年人隐私政策》，可能导致我们无法向您正常提供服务，您和您的监护人应立即停止注册或使用我们提供的服务。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（5）我们指定了专人负责儿童个人信息保护事宜，如您对儿童个人信息相关事宜有任何意见、建议或投诉、举报，请通过本隐私政策中列明的联系方式联系我们。我们会及时为您提供帮助。</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; color: #666666;">&nbsp;</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">8</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">、您的个人信息权利</span></strong></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">我们非常重视您对个人信息的关注，并尽全力保护您对于您个人信息的权利，法律法规另有规定的除外。为了保障安全，我们可能需要您提供书面请求，或以其他方式证明您的身份，通常情况下，我们将在收到您反馈并验证您的身份后的15个工作日内受理您的请求。对于那些无端重复、需要过多技术手段、给他人合法权益带来风险或者非常不切实际的请求，我们可能会予以拒绝。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（1）您可以随时登录网站，进入个人中心访问、更正、删除您的账户信息，包括个人资料、实名认证、乘客列表等。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（2）如您</span><span style="font-family: 微软雅黑, sans-serif;">希望撤回您的授权信息并注销账户，您可以登录小程序进行账户注销，我们将在收到您的请求后</span>15<span style="font-family: 微软雅黑, sans-serif;">个工作日完成注销请求。注销账户后，您该账户内的相关信息将被清空，我们将停止提供产品或服务，根据适用法律的要求删除您的个人信息，或使其匿名化处理。我们将不会再收集、使用或共享与该账户相关的个人信息，但之前的信息我们仍需按照监管要求的时间进行保存，且在该依法保存的时间内有权机关仍有权依法查询。</span></p>\n<p style="margin: 6pt 0cm; text-align: justify; text-indent: 21pt; background: white; font-size: 12pt; font-family: Calibri, sans-serif;"><span style="font-family: 微软雅黑, sans-serif;">用户注销账户方式：进入小程序后，点击</span>&ldquo;<span style="font-family: 微软雅黑, sans-serif;">用户中心</span>&rdquo;<span style="font-family: 微软雅黑, sans-serif;">进入个人中心页面，点击</span>&rdquo;<span style="font-family: 微软雅黑, sans-serif;">设置</span>&rdquo;<span style="font-family: 微软雅黑, sans-serif;">进入设置页面，点击</span>&ldquo;<span style="font-family: 微软雅黑, sans-serif;">注销账号</span>&rdquo;<span style="font-family: 微软雅黑, sans-serif;">进入注销页面，选择注销原因后，点击</span>&ldquo;<span style="font-family: 微软雅黑, sans-serif;">确认注销</span>&rdquo;<span style="font-family: 微软雅黑, sans-serif;">即可完成注销。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif;">（</span>3<span style="font-family: 微软雅黑, sans-serif;">）您有权获取您的个人信息副本，您可通过拨打客服电话</span>0898-66668855<span style="font-family: 微软雅黑, sans-serif;">，或发送邮件至客服邮箱</span>hq66668855@163.com<span style="font-family: 微软雅黑, sans-serif;">要求获取您的个人信息副本，我们核实身份后，会将您的个人信息副本以文件的形式发送给您。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（4）在以下情形中，按照法律法规、国家标准的要求，我们将无法响应您的请求：</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">1) </span><span style="font-family: 微软雅黑, sans-serif; background: white;">与我们履行法律法规规定的义务相关的；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">2) </span><span style="font-family: 微软雅黑, sans-serif; background: white;">与国家安全、国防安全直接相关的；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">3) </span><span style="font-family: 微软雅黑, sans-serif; background: white;">与公共安全、公共卫生、重大公共利益直接相关的；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">4) </span><span style="font-family: 微软雅黑, sans-serif; background: white;">与刑事侦查、起诉、审判和执行判决等直接相关的；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">5) </span><span style="font-family: 微软雅黑, sans-serif; background: white;">有充分证据表明您存在主观恶意或滥用权利的；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">6) </span><span style="font-family: 微软雅黑, sans-serif; background: white;">出于维护您或其他个人的生命、财产等重大合法权益但又很难得到您本人授权同意的；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">7) </span><span style="font-family: 微软雅黑, sans-serif; background: white;">响应您的请求将导致您或其他个人、组织的合法权益受到严重损害的；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">8) </span><span style="font-family: 微软雅黑, sans-serif; background: white;">涉及商业秘密的。</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; color: #666666;">&nbsp;</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">9</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">、本隐私政策的变更</span></strong></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">本隐私政策的内容可能会不时更新，以适应法律、技术或商业的发展。更新后的隐私政策将网站上公布，重大变更将以网站公告、用户通知等合适的形式告知用户。本隐私政策所指的重大变更包括：</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（1）我们的服务模式发生重大变化，如处理个人信息的目的、处理的个人信息类型、个人信息的使用方式等；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（2）我们在所有权结构、组织架构等方面发生重大变化，如业务调整、破产并购等引起的所有者变更等；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（3）个人信息共享、转让或公开披露的主要对象发生变化；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（4）您参与个人信息处理方面的权利及其行使方式发生重大变化；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（5）我们负责处理个人信息安全的责任部门、联络方式及投诉渠道发生变化时；</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">（6）个人信息安全影响评估报告表明存在高风险时。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">当您使用我们的网站时，您可以随时审查我们的隐私政策，以便您了解其修改。您可以在本隐私通知的顶部的&ldquo;更新时间&rdquo;处查看本隐私政策的最新更新日期。</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; color: #666666;">&nbsp;</span></p>\n<p style="text-align: left; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">10</span></strong><strong><span style="font-family: 微软雅黑, sans-serif; color: #3b99fc; background: white;">、如何联系我们</span></strong></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">您可以通过以下方式与我们联系，一般情况下，我们将在15个工作日内受理并处理您关于个人信息的请求。</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">海汽客服电话：0898-66668855</span></p>\n<p style="text-align: left; text-indent: 21pt; background: white; margin: 0cm 0cm 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;" align="left"><span style="font-family: 微软雅黑, sans-serif; background: white;">海汽客服邮箱：hq66668855@163.com</span></p>\n<p style="text-indent: 21pt; margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 12pt; font-family: Calibri, sans-serif;"><span style="font-family: 微软雅黑, sans-serif; background: white;">如果您对我们的回复不满意，并且认为我们的个人信息处理行为损害了您的合法权益，</span><span style="font-family: 微软雅黑, sans-serif;">您还可以通过以下外部途径寻求解决方案：</span></p>\n<ol style="margin-bottom: 0cm; margin-top: 0px;">\n<li style="margin: 0cm 0cm 0.0001pt 14px; text-align: justify; font-size: 12pt; font-family: Calibri, sans-serif;"><span style="font-family: 微软雅黑, sans-serif;">向人民法院提起民事诉讼；</span></li>\n<li style="margin: 0cm 0cm 0.0001pt 14px; text-align: justify; font-size: 12pt; font-family: Calibri, sans-serif;"><span style="font-family: 微软雅黑, sans-serif;">向中央网信办举报（举报中心网址为：</span><a style="color: blue; text-decoration: underline;" href="https://www.12377.cn">https://www.12377.cn<span style="font-family: 微软雅黑, sans-serif; color: windowtext;">，举报电话为：</span><span style="color: windowtext;">12377</span></a><span style="font-family: 微软雅黑, sans-serif;">）。</span></li>\n</ol>\n<p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 12pt; font-family: Calibri, sans-serif;"><strong><span style="font-size: 24.0pt;">&nbsp;</span></strong></p>'}};
},{isPage:false,isComponent:false,currentFile:'pages/agreement/desc.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/AMap.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=new(require("./amap-wx.js").AMapWX)({key:"ae387896cecb239157a86e20b2ee3bc5"});exports.default=e;
},{isPage:false,isComponent:false,currentFile:'utils/AMap.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/Pinyin.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var n={a:"啊阿锕",ai:"埃挨哎唉哀皑癌蔼矮艾碍爱隘诶捱嗳嗌嫒瑷暧砹锿霭",an:"鞍氨安俺按暗岸胺案谙埯揞犴庵桉铵鹌顸黯",ang:"肮昂盎",ao:"凹敖熬翱袄傲奥懊澳坳拗嗷噢岙廒遨媪骜聱螯鏊鳌鏖",ba:"芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸茇菝萆捭岜灞杷钯粑鲅魃",bai:"白柏百摆佰败拜稗薜掰鞴",ban:"斑班搬扳般颁板版扮拌伴瓣半办绊阪坂豳钣瘢癍舨",bang:"邦帮梆榜膀绑棒磅蚌镑傍谤蒡螃",bao:"苞胞包褒雹保堡饱宝抱报暴豹鲍爆勹葆宀孢煲鸨褓趵龅",bo:"剥薄玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳亳蕃啵饽檗擘礴钹鹁簸跛",bei:"杯碑悲卑北辈背贝钡倍狈备惫焙被孛陂邶埤蓓呗怫悖碚鹎褙鐾",ben:"奔苯本笨畚坌锛",beng:"崩绷甭泵蹦迸唪嘣甏",bi:"逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛匕仳俾芘荜荸吡哔狴庳愎滗濞弼妣婢嬖璧贲畀铋秕裨筚箅篦舭襞跸髀",bian:"鞭边编贬扁便变卞辨辩辫遍匾弁苄忭汴缏煸砭碥稹窆蝙笾鳊",biao:"标彪膘表婊骠飑飙飚灬镖镳瘭裱鳔",bie:"鳖憋别瘪蹩鳘",bin:"彬斌濒滨宾摈傧浜缤玢殡膑镔髌鬓",bing:"兵冰柄丙秉饼炳病并禀邴摒绠枋槟燹",bu:"捕卜哺补埠不布步簿部怖拊卟逋瓿晡钚醭",ca:"擦嚓礤",cai:"猜裁材才财睬踩采彩菜蔡",can:"餐参蚕残惭惨灿骖璨粲黪",cang:"苍舱仓沧藏伧",cao:"操糙槽曹草艹嘈漕螬艚",ce:"厕策侧册测刂帻恻",ceng:"层蹭噌",cha:"插叉茬茶查碴搽察岔差诧猹馇汊姹杈楂槎檫钗锸镲衩",chai:"拆柴豺侪茈瘥虿龇",chan:"搀掺蝉馋谗缠铲产阐颤冁谄谶蒇廛忏潺澶孱羼婵嬗骣觇禅镡裣蟾躔",chang:"昌猖场尝常长偿肠厂敞畅唱倡伥鬯苌菖徜怅惝阊娼嫦昶氅鲳",chao:"超抄钞朝嘲潮巢吵炒怊绉晁耖",che:"车扯撤掣彻澈坼屮砗",chen:"郴臣辰尘晨忱沉陈趁衬称谌抻嗔宸琛榇肜胂碜龀",cheng:"撑城橙成呈乘程惩澄诚承逞骋秤埕嵊徵浈枨柽樘晟塍瞠铖裎蛏酲",chi:"吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽傺墀芪茌搋叱哧啻嗤彳饬沲媸敕胝眙眵鸱瘛褫蚩螭笞篪豉踅踟魑",chong:"充冲虫崇宠茺忡憧铳艟",chou:"抽酬畴踌稠愁筹仇绸瞅丑俦圳帱惆溴妯瘳雠鲋",chu:"臭初出橱厨躇锄雏滁除楚础储矗搐触处亍刍憷绌杵楮樗蜍蹰黜",chuan:"揣川穿椽传船喘串掾舛惴遄巛氚钏镩舡",chuang:"疮窗幢床闯创怆",chui:"吹炊捶锤垂陲棰槌",chun:"春椿醇唇淳纯蠢促莼沌肫朐鹑蝽",chuo:"戳绰蔟辶辍镞踔龊",ci:"疵茨磁雌辞慈瓷词此刺赐次荠呲嵯鹚螅糍趑",cong:"聪葱囱匆从丛偬苁淙骢琮璁枞",cu:"凑粗醋簇猝殂蹙",cuan:"蹿篡窜汆撺昕爨",cui:"摧崔催脆瘁粹淬翠萃悴璀榱隹",cun:"村存寸磋忖皴",cuo:"撮搓措挫错厝脞锉矬痤鹾蹉躜",da:"搭达答瘩打大耷哒嗒怛妲疸褡笪靼鞑",dai:"呆歹傣戴带殆代贷袋待逮怠埭甙呔岱迨逯骀绐玳黛",dan:"耽担丹单郸掸胆旦氮但惮淡诞弹蛋亻儋卩萏啖澹檐殚赕眈瘅聃箪",dang:"当挡党荡档谠凼菪宕砀铛裆",dao:"刀捣蹈倒岛祷导到稻悼道盗叨啁忉洮氘焘忑纛",de:"德得的锝",deng:"蹬灯登等瞪凳邓噔嶝戥磴镫簦",di:"堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔氐籴诋谛邸坻莜荻嘀娣柢棣觌砥碲睇镝羝骶",dian:"颠掂滇碘点典靛垫电佃甸店惦奠淀殿丶阽坫埝巅玷癜癫簟踮",diao:"碉叼雕凋刁掉吊钓调轺铞蜩粜貂",die:"跌爹碟蝶迭谍叠佚垤堞揲喋渫轶牒瓞褶耋蹀鲽鳎",ding:"丁盯叮钉顶鼎锭定订丢仃啶玎腚碇町铤疔耵酊",dong:"东冬董懂动栋侗恫冻洞垌咚岽峒夂氡胨胴硐鸫",dou:"兜抖斗陡豆逗痘蔸钭窦窬蚪篼酡",du:"都督毒犊独读堵睹赌杜镀肚度渡妒芏嘟渎椟橐牍蠹笃髑黩",duan:"端短锻段断缎彖椴煅簖",dui:"堆兑队对怼憝碓",dun:"墩吨蹲敦顿囤钝盾遁炖砘礅盹镦趸",duo:"掇哆多夺垛躲朵跺舵剁惰堕咄哚缍柁铎裰踱",e:"蛾峨鹅俄额讹娥恶厄扼遏鄂饿噩谔垩垭苊莪萼呃愕屙婀轭曷腭硪锇锷鹗颚鳄",en:"恩蒽摁唔嗯",er:"而儿耳尔饵洱二贰迩珥铒鸸鲕",fa:"发罚筏伐乏阀法珐垡砝",fan:"藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛蘩幡犭梵攵燔畈蹯",fang:"坊芳方肪房防妨仿访纺放匚邡彷钫舫鲂",fei:"菲非啡飞肥匪诽吠肺废沸费芾狒悱淝妃绋绯榧腓斐扉祓砩镄痱蜚篚翡霏鲱",fen:"芬酚吩氛分纷坟焚汾粉奋份忿愤粪偾瀵棼愍鲼鼢",feng:"丰封枫蜂峰锋风疯烽逢冯缝讽奉凤俸酆葑沣砜",fu:"佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐匐凫郛芙苻茯莩菔呋幞滏艴孚驸绂桴赙黻黼罘稃馥虍蚨蜉蝠蝮麸趺跗鳆",ga:"噶嘎蛤尬呷尕尜旮钆",gai:"该改概钙盖溉丐陔垓戤赅胲",gan:"干甘杆柑竿肝赶感秆敢赣坩苷尴擀泔淦澉绀橄旰矸疳酐",gang:"冈刚钢缸肛纲岗港戆罡颃筻",gong:"杠工攻功恭龚供躬公宫弓巩汞拱贡共蕻廾咣珙肱蚣蛩觥",gao:"篙皋高膏羔糕搞镐稿告睾诰郜蒿藁缟槔槁杲锆",ge:"哥歌搁戈鸽胳疙割革葛格阁隔铬个各鬲仡哿塥嗝纥搿膈硌铪镉袼颌虼舸骼髂",gei:"给",gen:"根跟亘茛哏艮",geng:"耕更庚羹埂耿梗哽赓鲠",gou:"钩勾沟苟狗垢构购够佝诟岣遘媾缑觏彀鸲笱篝鞲",gu:"辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇嘏诂菰哌崮汩梏轱牯牿胍臌毂瞽罟钴锢瓠鸪鹄痼蛄酤觚鲴骰鹘",gua:"刮瓜剐寡挂褂卦诖呱栝鸹",guai:"乖拐怪哙",guan:"棺关官冠观管馆罐惯灌贯倌莞掼涫盥鹳鳏",guang:"光广逛犷桄胱疒",gui:"瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽匦刿庋宄妫桧炅晷皈簋鲑鳜",gun:"辊滚棍丨衮绲磙鲧",guo:"锅郭国果裹过馘蠃埚掴呙囗帼崞猓椁虢锞聒蜮蜾蝈",ha:"哈",hai:"骸孩海氦亥害骇咴嗨颏醢",han:"酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉邗菡撖阚瀚晗焓颔蚶鼾",hen:"夯痕很狠恨",hang:"杭航沆绗珩桁",hao:"壕嚎豪毫郝好耗号浩薅嗥嚆濠灏昊皓颢蚝",he:"呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺诃劾壑藿嗑嗬阖盍蚵翮",hei:"嘿黑",heng:"哼亨横衡恒訇蘅",hong:"轰哄烘虹鸿洪宏弘红黉讧荭薨闳泓",hou:"喉侯猴吼厚候后堠後逅瘊篌糇鲎骺",hu:"呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户冱唿囫岵猢怙惚浒滹琥槲轷觳烀煳戽扈祜鹕鹱笏醐斛",hua:"花哗华猾滑画划化话劐浍骅桦铧稞",huai:"槐徊怀淮坏还踝",huan:"欢环桓缓换患唤痪豢焕涣宦幻郇奂垸擐圜洹浣漶寰逭缳锾鲩鬟",huang:"荒慌黄磺蝗簧皇凰惶煌晃幌恍谎隍徨湟潢遑璜肓癀蟥篁鳇",hui:"灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘诙茴荟蕙哕喙隳洄彗缋珲晖恚虺蟪麾",hun:"荤昏婚魂浑混诨馄阍溷缗",huo:"豁活伙火获或惑霍货祸攉嚯夥钬锪镬耠蠖",ji:"击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪居丌乩剞佶佴脔墼芨芰萁蒺蕺掎叽咭哜唧岌嵴洎彐屐骥畿玑楫殛戟戢赍觊犄齑矶羁嵇稷瘠瘵虮笈笄暨跻跽霁鲚鲫髻麂",jia:"嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁伽郏拮岬浃迦珈戛胛恝铗镓痂蛱笳袈跏",jian:"歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僭谏谫菅蒹搛囝湔蹇謇缣枧柙楗戋戬牮犍毽腱睑锏鹣裥笕箴翦趼踺鲣鞯",jiang:"僵姜将浆江疆蒋桨奖讲匠酱降茳洚绛缰犟礓耩糨豇",jiao:"蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫佼僬茭挢噍峤徼姣纟敫皎鹪蛟醮跤鲛",jie:"窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届偈讦诘喈嗟獬婕孑桀獒碣锴疖袷颉蚧羯鲒骱髫",jin:"巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽卺荩堇噤馑廑妗缙瑾槿赆觐钅锓衿矜",jing:"劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净刭儆阱菁獍憬泾迳弪婧肼胫腈旌",jiong:"炯窘冂迥扃",jiu:"揪究纠玖韭久灸九酒厩救旧臼舅咎就疚僦啾阄柩桕鹫赳鬏",ju:"鞠拘狙疽驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧倨讵苣苴莒掬遽屦琚枸椐榘榉橘犋飓钜锔窭裾趄醵踽龃雎鞫",juan:"捐鹃娟倦眷卷绢鄄狷涓桊蠲锩镌隽",jue:"撅攫抉掘倔爵觉决诀绝厥劂谲矍蕨噘崛獗孓珏桷橛爝镢蹶觖",jun:"均菌钧军君峻俊竣浚郡骏捃狻皲筠麇",ka:"喀咖卡佧咔胩",ke:"咯坷苛柯棵磕颗科壳咳可渴克刻客课岢恪溘骒缂珂轲氪瞌钶疴窠蝌髁",kai:"开揩楷凯慨剀垲蒈忾恺铠锎",kan:"刊堪勘坎砍看侃凵莰莶戡龛瞰",kang:"康慷糠扛抗亢炕坑伉闶钪",kao:"考拷烤靠尻栲犒铐",ken:"肯啃垦恳垠裉颀",keng:"吭忐铿",kong:"空恐孔控倥崆箜",kou:"抠口扣寇芤蔻叩眍筘",ku:"枯哭窟苦酷库裤刳堀喾绔骷",kua:"夸垮挎跨胯侉",kuai:"块筷侩快蒯郐蒉狯脍",kuan:"宽款髋",kuang:"匡筐狂框矿眶旷况诓诳邝圹夼哐纩贶",kui:"亏盔岿窥葵奎魁傀馈愧溃馗匮夔隗揆喹喟悝愦阕逵暌睽聩蝰篑臾跬",kun:"坤昆捆困悃阃琨锟醌鲲髡",kuo:"括扩廓阔蛞",la:"垃拉喇蜡腊辣啦剌摺邋旯砬瘌",lai:"莱来赖崃徕涞濑赉睐铼癞籁",lan:"蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥啉岚懔漤榄斓罱镧褴",lang:"琅榔狼廊郎朗浪莨蒗啷阆锒稂螂",lao:"捞劳牢老佬姥酪烙涝唠崂栳铑铹痨醪",le:"勒乐肋仂叻嘞泐鳓",lei:"雷镭蕾磊累儡垒擂类泪羸诔荽咧漯嫘缧檑耒酹",ling:"棱冷拎玲菱零龄铃伶羚凌灵陵岭领另令酃塄苓呤囹泠绫柃棂瓴聆蛉翎鲮",leng:"楞愣",li:"厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俪俚郦坜苈莅蓠藜捩呖唳喱猁溧澧逦娌嫠骊缡珞枥栎轹戾砺詈罹锂鹂疠疬蛎蜊蠡笠篥粝醴跞雳鲡鳢黧",lian:"俩联莲连镰廉怜涟帘敛脸链恋炼练挛蔹奁潋濂娈琏楝殓臁膦裢蠊鲢",liang:"粮凉梁粱良两辆量晾亮谅墚椋踉靓魉",liao:"撩聊僚疗燎寥辽潦了撂镣廖料蓼尥嘹獠寮缭钌鹩耢",lie:"列裂烈劣猎冽埒洌趔躐鬣",lin:"琳林磷霖临邻鳞淋凛赁吝蔺嶙廪遴檩辚瞵粼躏麟",liu:"溜琉榴硫馏留刘瘤流柳六抡偻蒌泖浏遛骝绺旒熘锍镏鹨鎏",long:"龙聋咙笼窿隆垄拢陇弄垅茏泷珑栊胧砻癃",lou:"楼娄搂篓漏陋喽嵝镂瘘耧蝼髅",lu:"芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮垆摅撸噜泸渌漉璐栌橹轳辂辘氇胪镥鸬鹭簏舻鲈",lv:"驴吕铝侣旅履屡缕虑氯律率滤绿捋闾榈膂稆褛",luan:"峦孪滦卵乱栾鸾銮",lue:"掠略锊",lun:"轮伦仑沦纶论囵",luo:"萝螺罗逻锣箩骡裸落洛骆络倮荦摞猡泺椤脶镙瘰雒",ma:"妈麻玛码蚂马骂嘛吗唛犸嬷杩麽",mai:"埋买麦卖迈脉劢荬咪霾",man:"瞒馒蛮满蔓曼慢漫谩墁幔缦熳镘颟螨鳗鞔",mang:"芒茫盲忙莽邙漭朦硭蟒",meng:"氓萌蒙檬盟锰猛梦孟勐甍瞢懵礞虻蜢蠓艋艨黾",miao:"猫苗描瞄藐秒渺庙妙喵邈缈缪杪淼眇鹋蜱",mao:"茅锚毛矛铆卯茂冒帽貌贸侔袤勖茆峁瑁昴牦耄旄懋瞀蛑蝥蟊髦",me:"么",mei:"玫枚梅酶霉煤没眉媒镁每美昧寐妹媚坶莓嵋猸浼湄楣镅鹛袂魅",men:"门闷们扪玟焖懑钔",mi:"眯醚靡糜迷谜弥米秘觅泌蜜密幂芈冖谧蘼嘧猕獯汨宓弭脒敉糸縻麋",mian:"棉眠绵冕免勉娩缅面沔湎腼眄",mie:"蔑灭咩蠛篾",min:"民抿皿敏悯闽苠岷闵泯珉",ming:"明螟鸣铭名命冥茗溟暝瞑酩",miu:"谬",mo:"摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谟茉蓦馍嫫镆秣瘼耱蟆貊貘",mou:"谋牟某厶哞婺眸鍪",mu:"拇牡亩姆母墓暮幕募慕木目睦牧穆仫苜呒沐毪钼",na:"拿哪呐钠那娜纳内捺肭镎衲箬",nai:"氖乃奶耐奈鼐艿萘柰",nan:"南男难囊喃囡楠腩蝻赧",nao:"挠脑恼闹孬垴猱瑙硇铙蛲",ne:"淖呢讷",nei:"馁",nen:"嫩能枘恁",ni:"妮霓倪泥尼拟你匿腻逆溺伲坭猊怩滠昵旎祢慝睨铌鲵",nian:"蔫拈年碾撵捻念廿辇黏鲇鲶",niang:"娘酿",niao:"鸟尿茑嬲脲袅",nie:"捏聂孽啮镊镍涅乜陧蘖嗫肀颞臬蹑",nin:"您柠",ning:"狞凝宁拧泞佞蓥咛甯聍",niu:"牛扭钮纽狃忸妞蚴",nong:"脓浓农侬",nu:"奴努怒呶帑弩胬孥驽",nv:"女恧钕衄",nuan:"暖",nuenue:"虐",nue:"疟谑",nuo:"挪懦糯诺傩搦喏锘",ou:"哦欧鸥殴藕呕偶沤怄瓯耦",pa:"啪趴爬帕怕琶葩筢",pai:"拍排牌徘湃派俳蒎",pan:"攀潘盘磐盼畔判叛爿泮袢襻蟠蹒",pang:"乓庞旁耪胖滂逄",pao:"抛咆刨炮袍跑泡匏狍庖脬疱",pei:"呸胚培裴赔陪配佩沛掊辔帔淠旆锫醅霈",pen:"喷盆湓",peng:"砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯堋嘭怦蟛",pi:"砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬丕陴邳郫圮鼙擗噼庀媲纰枇甓睥罴铍痦癖疋蚍貔",pian:"篇偏片骗谝骈犏胼褊翩蹁",piao:"飘漂瓢票剽嘌嫖缥殍瞟螵",pie:"撇瞥丿苤氕",pin:"拼频贫品聘拚姘嫔榀牝颦",ping:"乒坪苹萍平凭瓶评屏俜娉枰鲆",po:"坡泼颇婆破魄迫粕叵鄱溥珀钋钷皤笸",pou:"剖裒踣",pu:"扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑匍噗濮璞氆镤镨蹼",qi:"期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫亟亓圻芑萋葺嘁屺岐汔淇骐绮琪琦杞桤槭欹祺憩碛蛴蜞綦綮趿蹊鳍麒",qia:"掐恰洽葜",qian:"牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉佥阡芊芡荨掮岍悭慊骞搴褰缱椠肷愆钤虔箝",qiang:"枪呛腔羌墙蔷强抢嫱樯戗炝锖锵镪襁蜣羟跫跄",qiao:"橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍劁诮谯荞愀憔缲樵毳硗跷鞒",qie:"切茄且怯窃郄唼惬妾挈锲箧",qin:"钦侵亲秦琴勤芹擒禽寝沁芩蓁蕲揿吣嗪噙溱檎螓衾",qing:"青轻氢倾卿清擎晴氰情顷请庆倩苘圊檠磬蜻罄箐謦鲭黥",qiong:"琼穷邛茕穹筇銎",qiu:"秋丘邱球求囚酋泅俅氽巯艽犰湫逑遒楸赇鸠虬蚯蝤裘糗鳅鼽",qu:"趋区蛆曲躯屈驱渠取娶龋趣去诎劬蕖蘧岖衢阒璩觑氍祛磲癯蛐蠼麴瞿黢",quan:"圈颧权醛泉全痊拳犬券劝诠荃獾悛绻辁畎铨蜷筌鬈",que:"缺炔瘸却鹊榷确雀阙悫",qun:"裙群逡",ran:"然燃冉染苒髯",rang:"瓤壤攘嚷让禳穰",rao:"饶扰绕荛娆桡",ruo:"惹若弱",re:"热偌",ren:"壬仁人忍韧任认刃妊纫仞荏葚饪轫稔衽",reng:"扔仍",ri:"日",rong:"戎茸蓉荣融熔溶容绒冗嵘狨缛榕蝾",rou:"揉柔肉糅蹂鞣",ru:"茹蠕儒孺如辱乳汝入褥蓐薷嚅洳溽濡铷襦颥",ruan:"软阮朊",rui:"蕊瑞锐芮蕤睿蚋",run:"闰润",sa:"撒洒萨卅仨挲飒",sai:"腮鳃塞赛噻",san:"三叁伞散彡馓氵毵糁霰",sang:"桑嗓丧搡磉颡",sao:"搔骚扫嫂埽臊瘙鳋",se:"瑟色涩啬铩铯穑",sen:"森",seng:"僧",sha:"莎砂杀刹沙纱傻啥煞脎歃痧裟霎鲨",shai:"筛晒酾",shan:"珊苫杉山删煽衫闪陕擅赡膳善汕扇缮剡讪鄯埏芟潸姗骟膻钐疝蟮舢跚鳝",shang:"墒伤商赏晌上尚裳垧绱殇熵觞",shao:"梢捎稍烧芍勺韶少哨邵绍劭苕潲蛸笤筲艄",she:"奢赊蛇舌舍赦摄射慑涉社设厍佘猞畲麝",shen:"砷申呻伸身深娠绅神沈审婶甚肾慎渗诜谂吲哂渖椹矧蜃",sheng:"声生甥牲升绳省盛剩胜圣丞渑媵眚笙",shi:"师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试谥埘莳蓍弑唑饣轼耆贳炻礻铈铊螫舐筮豕鲥鲺",shou:"收手首守寿授售受瘦兽扌狩绶艏",shu:"蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕倏塾菽忄沭涑澍姝纾毹腧殳镯秫鹬",shua:"刷耍唰涮",shuai:"摔衰甩帅蟀",shuan:"栓拴闩",shuang:"霜双爽孀",shui:"谁水睡税",shun:"吮瞬顺舜恂",shuo:"说硕朔烁蒴搠嗍濯妁槊铄",si:"斯撕嘶思私司丝死肆寺嗣四伺似饲巳厮俟兕菥咝汜泗澌姒驷缌祀祠锶鸶耜蛳笥",song:"松耸怂颂送宋讼诵凇菘崧嵩忪悚淞竦",sou:"搜艘擞嗽叟嗖嗾馊溲飕瞍锼螋",su:"苏酥俗素速粟僳塑溯宿诉肃夙谡蔌嗉愫簌觫稣",suan:"酸蒜算",sui:"虽隋随绥髓碎岁穗遂隧祟蓑冫谇濉邃燧眭睢",sun:"孙损笋荪狲飧榫跣隼",suo:"梭唆缩琐索锁所唢嗦娑桫睃羧",ta:"塌他它她塔獭挞蹋踏闼溻遢榻沓",tai:"胎苔抬台泰酞太态汰邰薹肽炱钛跆鲐",tan:"坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭郯蕈昙钽锬覃",tang:"汤塘搪堂棠膛唐糖傥饧溏瑭铴镗耥螗螳羰醣",thang:"倘躺淌",theng:"趟烫",tao:"掏涛滔绦萄桃逃淘陶讨套挑鼗啕韬饕",te:"特",teng:"藤腾疼誊滕",ti:"梯剔踢锑提题蹄啼体替嚏惕涕剃屉荑悌逖绨缇鹈裼醍",tian:"天添填田甜恬舔腆掭忝阗殄畋钿蚺",tiao:"条迢眺跳佻祧铫窕龆鲦",tie:"贴铁帖萜餮",ting:"厅听烃汀廷停亭庭挺艇莛葶婷梃蜓霆",tong:"通桐酮瞳同铜彤童桶捅筒统痛佟僮仝茼嗵恸潼砼",tou:"偷投头透亠",tu:"凸秃突图徒途涂屠土吐兔堍荼菟钍酴",tuan:"湍团疃",tui:"推颓腿蜕褪退忒煺",tun:"吞屯臀饨暾豚窀",tuo:"拖托脱鸵陀驮驼椭妥拓唾乇佗坨庹沱柝砣箨舄跎鼍",wa:"挖哇蛙洼娃瓦袜佤娲腽",wai:"歪外",wan:"豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕剜芄苋菀纨绾琬脘畹蜿箢",wang:"汪王亡枉网往旺望忘妄罔尢惘辋魍",wei:"威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫倭偎诿隈葳薇帏帷崴嵬猥猬闱沩洧涠逶娓玮韪軎炜煨熨痿艉鲔",wen:"瘟温蚊文闻纹吻稳紊问刎愠阌汶璺韫殁雯",weng:"嗡翁瓮蓊蕹",wo:"挝蜗涡窝我斡卧握沃莴幄渥杌肟龌",wu:"巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误兀仵阢邬圬芴庑怃忤浯寤迕妩骛牾焐鹉鹜蜈鋈鼯",xi:"昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细僖兮隰郗茜葸蓰奚唏徙饩阋浠淅屣嬉玺樨曦觋欷熹禊禧钸皙穸蜥蟋舾羲粞翕醯鼷",xia:"瞎虾匣霞辖暇峡侠狭下厦夏吓掀葭嗄狎遐瑕硖瘕罅黠",xian:"锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线冼藓岘猃暹娴氙祆鹇痫蚬筅籼酰跹",xiang:"相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象芗葙饷庠骧缃蟓鲞飨",xiao:"萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效哓咻崤潇逍骁绡枭枵筱箫魈",xie:"楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑偕亵勰燮薤撷廨瀣邂绁缬榭榍歙躞",xin:"薪芯锌欣辛新忻心信衅囟馨莘歆铽鑫",xing:"星腥猩惺兴刑型形邢行醒幸杏性姓陉荇荥擤悻硎",xiong:"兄凶胸匈汹雄熊芎",xiu:"休修羞朽嗅锈秀袖绣莠岫馐庥鸺貅髹",xu:"墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续讴诩圩蓿怵洫溆顼栩煦砉盱胥糈醑",xuan:"轩喧宣悬旋玄选癣眩绚儇谖萱揎馔泫洵渲漩璇楦暄炫煊碹铉镟痃",xue:"靴薛学穴雪血噱泶鳕",xun:"勋熏循旬询寻驯巡殉汛训讯逊迅巽埙荀薰峋徇浔曛窨醺鲟",ya:"压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶伢揠吖岈迓娅琊桠氩砑睚痖",yan:"焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验厣靥赝俨偃兖讠谳郾鄢芫菸崦恹闫阏洇湮滟妍嫣琰晏胭腌焱罨筵酽魇餍鼹",yang:"殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾徉怏泱炀烊恙蛘鞅",yao:"邀腰妖瑶摇尧遥窑谣姚咬舀药要耀夭爻吆崾徭瀹幺珧杳曜肴鹞窈繇鳐",ye:"椰噎耶爷野冶也页掖业叶曳腋夜液谒邺揶馀晔烨铘",yi:"一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎刈劓佾诒圪圯埸懿苡薏弈奕挹弋呓咦咿噫峄嶷猗饴怿怡悒漪迤驿缢殪贻旖熠钇镒镱痍瘗癔翊衤蜴舣羿翳酏黟",yin:"茵荫因殷音阴姻吟银淫寅饮尹引隐印胤鄞堙茚喑狺夤氤铟瘾蚓霪龈",ying:"英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映嬴郢茔莺萦撄嘤膺滢潆瀛瑛璎楹鹦瘿颍罂",yo:"哟唷",yong:"拥佣臃痈庸雍踊蛹咏泳涌永恿勇用俑壅墉慵邕镛甬鳙饔",you:"幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼卣攸侑莸呦囿宥柚猷牖铕疣蝣鱿黝鼬",yu:"迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭禺毓伛俣谀谕萸蓣揄喁圄圉嵛狳饫庾阈妪妤纡瑜昱觎腴欤於煜燠聿钰鹆瘐瘀窳蝓竽舁雩龉",yuan:"鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院塬沅媛瑗橼爰眢鸢螈鼋",yue:"曰约越跃钥岳粤月悦阅龠樾刖钺",yun:"耘云郧匀陨允运蕴酝晕韵孕郓芸狁恽纭殒昀氲",za:"匝砸杂拶咂",zai:"栽哉灾宰载再在咱崽甾",zan:"攒暂赞瓒昝簪糌趱錾",zang:"赃脏葬奘戕臧",zao:"遭糟凿藻枣早澡蚤躁噪造皂灶燥唣缫",ze:"责择则泽仄赜啧迮昃笮箦舴",zei:"贼",zen:"怎谮",zeng:"增憎曾赠缯甑罾锃",zha:"扎喳渣札轧铡闸眨栅榨咋乍炸诈揸吒咤哳怍砟痄蚱齄",zhai:"摘斋宅窄债寨砦",zhan:"瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽谵搌旃",zhang:"樟章彰漳张掌涨杖丈帐账仗胀瘴障仉鄣幛嶂獐嫜璋蟑",zhao:"招昭找沼赵照罩兆肇召爪诏棹钊笊",zhe:"遮折哲蛰辙者锗蔗这浙谪陬柘辄磔鹧褚蜇赭",zhen:"珍斟真甄砧臻贞针侦枕疹诊震振镇阵缜桢榛轸赈胗朕祯畛鸩",zheng:"蒸挣睁征狰争怔整拯正政帧症郑证诤峥钲铮筝",zhi:"芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒卮陟郅埴芷摭帙忮彘咫骘栉枳栀桎轵轾攴贽膣祉祗黹雉鸷痣蛭絷酯跖踬踯豸觯",zhong:"中盅忠钟衷终种肿重仲众冢锺螽舂舯踵",zhou:"舟周州洲诌粥轴肘帚咒皱宙昼骤啄着倜诹荮鬻纣胄碡籀舳酎鲷",zhu:"珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻伫侏邾苎茱洙渚潴驺杼槠橥炷铢疰瘃蚰竺箸翥躅麈",zhua:"抓",zhuai:"拽",zhuan:"专砖转撰赚篆抟啭颛",zhuang:"桩庄装妆撞壮状丬",zhui:"椎锥追赘坠缀萑骓缒",zhun:"谆准",zhuo:"捉拙卓桌琢茁酌灼浊倬诼廴蕞擢啜浞涿杓焯禚斫",zi:"兹咨资姿滋淄孜紫仔籽滓子自渍字谘嵫姊孳缁梓辎赀恣眦锱秭耔笫粢觜訾鲻髭",zong:"鬃棕踪宗综总纵腙粽",zou:"邹走奏揍鄹鲰",zu:"租足卒族祖诅阻组俎菹啐徂驵蹴",zuan:"钻纂攥缵",zui:"嘴醉最罪",zun:"尊遵撙樽鳟",zuo:"昨左佐柞做作坐座阝阼胙祚酢",cou:"薮楱辏腠",nang:"攮哝囔馕曩",o:"喔",dia:"嗲",chuai:"嘬膪踹",cen:"岑涔",diu:"铥",nou:"耨",fou:"缶",bia:"髟"};function a(n,a){for(var i in a)if(-1!=a[i].indexOf(n))return i;return!1}module.exports={PinYin:n,convertToPinyin:function(i,u){for(var g=i.length,e="",o=new RegExp("[一-龥]"),h=new RegExp("[a-zA-Z0-9 ]"),s=0;s<g;s++){var c=i.substr(s,1);if(h.test(c))e+=c;else if(o.test(c)){var t=a(c,n);"sp"==u?!1!==t&&(e+=t.substr(0,1)):"py"==u&&!1!==t&&(e+=t)}}return e=e.replace(/ /g,"-")}};
},{isPage:false,isComponent:false,currentFile:'utils/Pinyin.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/amap-wx.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";function e(e){this.key=e.key,this.requestConfig={key:e.key,s:"rsx",platform:"WXJS",appname:e.key,sdkversion:"1.2.0",logversion:"2.0"},this.MeRequestConfig={key:e.key,serviceName:"https://restapi.amap.com/rest/me"}}e.prototype.getWxLocation=function(e,t){wx.getLocation({type:"gcj02",success:function(e){e=e.longitude+","+e.latitude,wx.setStorage({key:"userLocation",data:e}),t(e)},fail:function(s){wx.getStorage({key:"userLocation",success:function(e){e.data&&t(e.data)}}),e.fail({errCode:"0",errMsg:s.errMsg||""})}})},e.prototype.getMEKeywordsSearch=function(e){if(!e.options)return e.fail({errCode:"0",errMsg:"缺少必要参数"});var t=e.options,s=this.MeRequestConfig,a={key:s.key,s:"rsx",platform:"WXJS",appname:e.key,sdkversion:"1.2.0",logversion:"2.0"};t.layerId&&(a.layerId=t.layerId),t.keywords&&(a.keywords=t.keywords),t.city&&(a.city=t.city),t.filter&&(a.filter=t.filter),t.sortrule&&(a.sortrule=t.sortrule),t.pageNum&&(a.pageNum=t.pageNum),t.pageSize&&(a.pageSize=t.pageSize),t.sig&&(a.sig=t.sig),wx.request({url:s.serviceName+"/cpoint/datasearch/local",data:a,method:"GET",header:{"content-type":"application/json"},success:function(t){(t=t.data)&&t.status&&"1"===t.status&&0===t.code?e.success(t.data):e.fail({errCode:"0",errMsg:t})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})},e.prototype.getMEIdSearch=function(e){if(!e.options)return e.fail({errCode:"0",errMsg:"缺少必要参数"});var t=e.options,s=this.MeRequestConfig,a={key:s.key,s:"rsx",platform:"WXJS",appname:e.key,sdkversion:"1.2.0",logversion:"2.0"};t.layerId&&(a.layerId=t.layerId),t.id&&(a.id=t.id),t.sig&&(a.sig=t.sig),wx.request({url:s.serviceName+"/cpoint/datasearch/id",data:a,method:"GET",header:{"content-type":"application/json"},success:function(t){(t=t.data)&&t.status&&"1"===t.status&&0===t.code?e.success(t.data):e.fail({errCode:"0",errMsg:t})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})},e.prototype.getMEPolygonSearch=function(e){if(!e.options)return e.fail({errCode:"0",errMsg:"缺少必要参数"});var t=e.options,s=this.MeRequestConfig,a={key:s.key,s:"rsx",platform:"WXJS",appname:e.key,sdkversion:"1.2.0",logversion:"2.0"};t.layerId&&(a.layerId=t.layerId),t.keywords&&(a.keywords=t.keywords),t.polygon&&(a.polygon=t.polygon),t.filter&&(a.filter=t.filter),t.sortrule&&(a.sortrule=t.sortrule),t.pageNum&&(a.pageNum=t.pageNum),t.pageSize&&(a.pageSize=t.pageSize),t.sig&&(a.sig=t.sig),wx.request({url:s.serviceName+"/cpoint/datasearch/polygon",data:a,method:"GET",header:{"content-type":"application/json"},success:function(t){(t=t.data)&&t.status&&"1"===t.status&&0===t.code?e.success(t.data):e.fail({errCode:"0",errMsg:t})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})},e.prototype.getMEaroundSearch=function(e){if(!e.options)return e.fail({errCode:"0",errMsg:"缺少必要参数"});var t=e.options,s=this.MeRequestConfig,a={key:s.key,s:"rsx",platform:"WXJS",appname:e.key,sdkversion:"1.2.0",logversion:"2.0"};t.layerId&&(a.layerId=t.layerId),t.keywords&&(a.keywords=t.keywords),t.center&&(a.center=t.center),t.radius&&(a.radius=t.radius),t.filter&&(a.filter=t.filter),t.sortrule&&(a.sortrule=t.sortrule),t.pageNum&&(a.pageNum=t.pageNum),t.pageSize&&(a.pageSize=t.pageSize),t.sig&&(a.sig=t.sig),wx.request({url:s.serviceName+"/cpoint/datasearch/around",data:a,method:"GET",header:{"content-type":"application/json"},success:function(t){(t=t.data)&&t.status&&"1"===t.status&&0===t.code?e.success(t.data):e.fail({errCode:"0",errMsg:t})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})},e.prototype.getGeo=function(e){var t=this.requestConfig,s=e.options;t={key:this.key,extensions:"all",s:t.s,platform:t.platform,appname:this.key,sdkversion:t.sdkversion,logversion:t.logversion},s.address&&(t.address=s.address),s.city&&(t.city=s.city),s.batch&&(t.batch=s.batch),s.sig&&(t.sig=s.sig),wx.request({url:"https://restapi.amap.com/v3/geocode/geo",data:t,method:"GET",header:{"content-type":"application/json"},success:function(t){(t=t.data)&&t.status&&"1"===t.status?e.success(t):e.fail({errCode:"0",errMsg:t})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})},e.prototype.getRegeo=function(e){function t(t){var a=s.requestConfig;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:s.key,location:t,extensions:"all",s:a.s,platform:a.platform,appname:s.key,sdkversion:a.sdkversion,logversion:a.logversion},method:"GET",header:{"content-type":"application/json"},success:function(s){if(s.data.status&&"1"==s.data.status){var a=(s=s.data.regeocode).addressComponent,o=[],i=s.roads[0].name+"附近",r=t.split(",")[0],n=t.split(",")[1];if(s.pois&&s.pois[0]){i=s.pois[0].name+"附近";var c=s.pois[0].location;c&&(r=parseFloat(c.split(",")[0]),n=parseFloat(c.split(",")[1]))}a.provice&&o.push(a.provice),a.city&&o.push(a.city),a.district&&o.push(a.district),a.streetNumber&&a.streetNumber.street&&a.streetNumber.number?(o.push(a.streetNumber.street),o.push(a.streetNumber.number)):o.push(s.roads[0].name),o=o.join(""),e.success([{iconPath:e.iconPath,width:e.iconWidth,height:e.iconHeight,name:o,desc:i,longitude:r,latitude:n,id:0,regeocodeData:s}])}else e.fail({errCode:s.data.infocode,errMsg:s.data.info})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})}var s=this;e.location?t(e.location):s.getWxLocation(e,(function(e){t(e)}))},e.prototype.getWeather=function(e){function t(t){var o="base";e.type&&"forecast"==e.type&&(o="all"),wx.request({url:"https://restapi.amap.com/v3/weather/weatherInfo",data:{key:s.key,city:t,extensions:o,s:a.s,platform:a.platform,appname:s.key,sdkversion:a.sdkversion,logversion:a.logversion},method:"GET",header:{"content-type":"application/json"},success:function(t){if(t.data.status&&"1"==t.data.status)if(t.data.lives){if((t=t.data.lives)&&0<t.length){var s={city:{text:"城市",data:(t=t[0]).city},weather:{text:"天气",data:t.weather},temperature:{text:"温度",data:t.temperature},winddirection:{text:"风向",data:t.winddirection+"风"},windpower:{text:"风力",data:t.windpower+"级"},humidity:{text:"湿度",data:t.humidity+"%"}};s.liveData=t,e.success(s)}}else t.data.forecasts&&t.data.forecasts[0]&&e.success({forecast:t.data.forecasts[0]});else e.fail({errCode:t.data.infocode,errMsg:t.data.info})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})}var s=this,a=s.requestConfig;e.city?t(e.city):s.getWxLocation(e,(function(o){!function(o){wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:s.key,location:o,extensions:"all",s:a.s,platform:a.platform,appname:s.key,sdkversion:a.sdkversion,logversion:a.logversion},method:"GET",header:{"content-type":"application/json"},success:function(s){if(s.data.status&&"1"==s.data.status){if((s=s.data.regeocode).addressComponent)var a=s.addressComponent.adcode;else s.aois&&0<s.aois.length&&(a=s.aois[0].adcode);t(a)}else e.fail({errCode:s.data.infocode,errMsg:s.data.info})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})}(o)}))},e.prototype.getPoiAround=function(e){function t(t){t={key:s.key,location:t,s:a.s,platform:a.platform,appname:s.key,sdkversion:a.sdkversion,logversion:a.logversion},e.querytypes&&(t.types=e.querytypes),e.querykeywords&&(t.keywords=e.querykeywords),wx.request({url:"https://restapi.amap.com/v3/place/around",data:t,method:"GET",header:{"content-type":"application/json"},success:function(t){if(t.data.status&&"1"==t.data.status){if((t=t.data)&&t.pois){for(var s=[],a=0;a<t.pois.length;a++){var o=0==a?e.iconPathSelected:e.iconPath;s.push({latitude:parseFloat(t.pois[a].location.split(",")[1]),longitude:parseFloat(t.pois[a].location.split(",")[0]),iconPath:o,width:22,height:32,id:a,name:t.pois[a].name,address:t.pois[a].address})}e.success({markers:s,poisData:t.pois})}}else e.fail({errCode:t.data.infocode,errMsg:t.data.info})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})}var s=this,a=s.requestConfig;e.location?t(e.location):s.getWxLocation(e,(function(e){t(e)}))},e.prototype.getStaticmap=function(e){function t(t){s.push("location="+t),e.zoom&&s.push("zoom="+e.zoom),e.size&&s.push("size="+e.size),e.scale&&s.push("scale="+e.scale),e.markers&&s.push("markers="+e.markers),e.labels&&s.push("labels="+e.labels),e.paths&&s.push("paths="+e.paths),e.traffic&&s.push("traffic="+e.traffic),t="https://restapi.amap.com/v3/staticmap?"+s.join("&"),e.success({url:t})}var s=[];s.push("key="+this.key);var a=this.requestConfig;s.push("s="+a.s),s.push("platform="+a.platform),s.push("appname="+a.appname),s.push("sdkversion="+a.sdkversion),s.push("logversion="+a.logversion),e.location?t(e.location):this.getWxLocation(e,(function(e){t(e)}))},e.prototype.getInputtips=function(e){var t=Object.assign({},this.requestConfig);e.location&&(t.location=e.location),e.keywords&&(t.keywords=e.keywords),e.type&&(t.type=e.type),e.city&&(t.city=e.city),e.citylimit&&(t.citylimit=e.citylimit),wx.request({url:"https://restapi.amap.com/v3/assistant/inputtips",data:t,method:"GET",header:{"content-type":"application/json"},success:function(t){t&&t.data&&t.data.tips&&e.success({tips:t.data.tips})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})},e.prototype.getDrivingRoute=function(e){var t=Object.assign({},this.requestConfig);e.origin&&(t.origin=e.origin),e.destination&&(t.destination=e.destination),e.strategy&&(t.strategy=e.strategy),e.waypoints&&(t.waypoints=e.waypoints),e.avoidpolygons&&(t.avoidpolygons=e.avoidpolygons),e.avoidroad&&(t.avoidroad=e.avoidroad),wx.request({url:"https://restapi.amap.com/v3/direction/driving",data:t,method:"GET",header:{"content-type":"application/json"},success:function(t){t&&t.data&&t.data.route&&e.success({paths:t.data.route.paths,taxi_cost:t.data.route.taxi_cost||""})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})},e.prototype.getWalkingRoute=function(e){var t=Object.assign({},this.requestConfig);e.origin&&(t.origin=e.origin),e.destination&&(t.destination=e.destination),wx.request({url:"https://restapi.amap.com/v3/direction/walking",data:t,method:"GET",header:{"content-type":"application/json"},success:function(t){t&&t.data&&t.data.route&&e.success({paths:t.data.route.paths})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})},e.prototype.getTransitRoute=function(e){var t=Object.assign({},this.requestConfig);e.origin&&(t.origin=e.origin),e.destination&&(t.destination=e.destination),e.strategy&&(t.strategy=e.strategy),e.city&&(t.city=e.city),e.cityd&&(t.cityd=e.cityd),wx.request({url:"https://restapi.amap.com/v3/direction/transit/integrated",data:t,method:"GET",header:{"content-type":"application/json"},success:function(t){t&&t.data&&t.data.route&&(t=t.data.route,e.success({distance:t.distance||"",taxi_cost:t.taxi_cost||"",transits:t.transits}))},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})},e.prototype.getRidingRoute=function(e){var t=Object.assign({},this.requestConfig);e.origin&&(t.origin=e.origin),e.destination&&(t.destination=e.destination),wx.request({url:"https://restapi.amap.com/v3/direction/riding",data:t,method:"GET",header:{"content-type":"application/json"},success:function(t){t&&t.data&&t.data.route&&e.success({paths:t.data.route.paths})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})},module.exports.AMapWX=e;
},{isPage:false,isComponent:false,currentFile:'utils/amap-wx.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/config.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/objectSpread2"),t=1;if(1!==t&&wx.getAccountInfoSync&&"function"==typeof wx.getAccountInfoSync){var a=wx.getAccountInfoSync().miniProgram;a&&"release"===a.envVersion&&(t=1)}var n=1===t?"https://ebk.17u.cn/":2===t?"https://ebk.t.17u.cn/":3===t?"https://ebk.qa.17u.cn/":"http://10.181.26.72:7767/",r={env:t,baseUrl:n,customSaleOrder:"".concat(n,"platformopenapi/customTraffic/order/saleOrder"),carlineSaleOrder:"".concat(n,"platformopenapi/stationTraffic/order/saleOrder"),getSign:"".concat(n,"platformopenapi/weChatPay/getSign"),getRule:"".concat(n,"platformopenapi/rule/getRule"),getResourceConfigInfo:"".concat(n,"platformopenapi/systemConfig/getResourceConfigInfo"),getWechatSign:"".concat(n,"platformopenapi/weChatPay/getSign"),getMemberInfo:"".concat(n,"platformopenapi/member/getMemberInfoByMemberId"),openApi:"".concat(n,"newcxyopenapi")},o=n+"newcxyopenapi",p=n+"platformopenapi/passenger/getPassengerList",c=n+"platformopenapi/passenger/addPassenger",i=n+"platformopenapi/passenger/deletePassenger",s=n+"platformopenapi/customTraffic/resource/getShiftList",f=n+"platformopenapi/stationTraffic/resource/getShiftList";module.exports=e(e({APPID:"wxe3c3aaf70141be9c"},r),{},{baseUrl:n,urlPrefix:o,picBaseUrl:"https://file.40017.cn/groundtraffic/linebus/linebus/cxy-intercity",tenxunMapKey:"FO7BZ-PBL3D-PYE4Z-HZLTZ-5JZGV-MTBQU",getPassengerList:p,addLinkerNew:c,deletePassenger:i,cusList:s,busUrl:f});
},{isPage:false,isComponent:false,currentFile:'utils/config.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/dayjs.min.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../@babel/runtime/helpers/typeof");!function(e,n){"object"==("undefined"==typeof exports?"undefined":t(exports))&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).dayjs=n()}(void 0,(function(){var e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},M=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:M,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+M(r,2,"0")+":"+M(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=m;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(e,n){if(p(e))return e.clone();var r="object"==t(n)?n:{};return r.date=e,r.args=arguments,new _(r)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function t(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=t.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,m=this.$M,M=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,m):l(0,m+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?M-D:M+(6-D),m);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(t,r){var h,d=this;t=Number(t);var l=O.p(r),$=function(e){var n=w(d);return O.w(n.date(n.date()+Math.round(e*t)),d)};if(l===f)return this.set(f,this.$M+t);if(l===c)return this.set(c,this.$y+t);if(l===a)return $(1);if(l===o)return $(7);var y=(h={},h[s]=e,h[u]=n,h[i]=1e3,h)[l]||1,m=this.$d.getTime()+t*y;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(t,r,d){var l,$=O.p(r),y=w(t),m=(y.utcOffset()-this.utcOffset())*e,M=this-y,v=O.m(this,y);return v=(l={},l[c]=v/12,l[f]=v,l[h]=v/3,l[o]=(M-m)/6048e5,l[a]=(M-m)/864e5,l[u]=M/n,l[s]=M/e,l[i]=M/1e3,l)[$]||M,d?v:O.a(v)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},t}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));
},{isPage:false,isComponent:false,currentFile:'utils/dayjs.min.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/fetch.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=0,t=[],n=[],a=[],o=[];module.exports={fetch:function l(u){if(n.length?t=n:a.length?t=a:o.length&&(t=o),e>=10)return 1===u.priority?n.push(u):3===u.priority?o.push(u):a.push(u),n.length?t=n:a.length?t=a:o.length&&(t=o),!1;e++;var i=null,r=wx.request({url:u.url,data:u.data,header:u.header||{"Content-Type":"application/json"},responseType:u.responseType||"text",dataType:u.dataType||"json",method:u.method||"GET",enableHttp2:u.enableHttp2||!1,enableQuic:u.enableQuic||!1,enableCache:u.enableCache||!1,timeout:u.timeout||4e4,success:function(e){u&&u.success&&u.success(e)},fail:function(e){u&&u.fail&&u.fail(e)},complete:function(n){i&&(clearTimeout(i),i=null),u&&u.complete&&u.complete(n),e--;var a=t.shift();a&&l(a)}});return u.timeout&&r&&r.abort&&!getApp().globalData.reqCanTimeout&&(i=setTimeout((function(){r&&r.abort()}),u.timeout)),r}};
},{isPage:false,isComponent:false,currentFile:'utils/fetch.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/manba.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";!function(t,e){var r="function"==typeof define;"undefined"!=typeof module&&module.exports?module.exports=e():r?define(e):this.manba=e()}(0,(function(){var t={l:"YYYY-MM-DD",ll:"YYYY年MM月DD日",k:"YYYY-MM-DD hh:mm",kk:"YYYY年MM月DD日 hh点mm分",kkk:"YYYY年MM月DD日 hh点mm分 q",f:"YYYY-MM-DD hh:mm:ss",ff:"YYYY年MM月DD日 hh点mm分ss秒",fff:"YYYY年MM月DD日 hh点mm分ss秒 星期w",n:"MM-DD",nn:"MM月DD日"},e=0,r=new Date(1970,0,1,0,0,0).getTime(),a=["日","一","二","三","四","五","六"],n=["上午","下午"];function i(t,e){return o.initmanba(this,t,e),this}i.prototype.format=function(e){var r=this.isValid();if(!0!==r)return r;var a=t[e=e||"l"]||e;return o.format(this._date,a)},i.prototype.UTCformat=function(e){var r=this.isValid();if(!0!==r)return r;var a=t[e=e||"l"]||e;return o.UTCformat(this._date,a)},i.prototype.toString=function(){var t=this.isValid();return!0!==t?t:this._date.toString()},i.prototype.toISOString=function(t){var e=this.isValid();if(!0!==e)return e;var r=0,a=(r=void 0!==t?60*t:-(new Date).getTimezoneOffset())>=0?"+":"-";return p(this.time()+60*r*1e3).UTCformat("yyyy-MM-ddThh:mm:ss")+a+o.pad(parseInt(r/60))+":"+o.pad(r%60)},i.prototype.toLocalString=function(){var t=this.isValid();if(!0!==t)return t;var e=-(new Date).getTimezoneOffset(),r=e>=0?"+":"-";return this.format("yyyy-MM-ddThh:mm:ss")+r+o.pad(parseInt(e/60))+":"+o.pad(e%60)},i.prototype.distance=function(t,e,r){var a=this.isValid();if(!0!==a)return a;var n=this;e=e||p.DAY;var i=(t=p(t)).isValid();if(!0!==i)return i;switch(e){case p.MINUTE:return Math.floor((n.time()-t.time())/60/1e3);case p.HOUR:return o.getHours(n._date)-o.getHours(t._date);case p.DAY:return o.getDays(n._date)-o.getDays(t._date);case p.WEEK:return(o.getDays(n.startOf(p.WEEK,r)._date)-o.getDays(t.startOf(p.WEEK,r)._date))/7;case p.MONTH:return o.getMonths(n._date)-o.getMonths(t._date);case p.YEAR:return n._date.getYear()-t._date.getYear()}return 0},i.prototype.getWeekOfYear=function(t){t=(t||0)-0,(isNaN(t)||t>6)&&(t=0);var e=this.startOf(p.YEAR),r=(7-e.day()+t)%7,a=(this.startOf(p.DAY).time()-e.time())/864e5+1;return Math.ceil((a-r)/7)},i.prototype.getWeekOfMonth=function(t){t=(t||0)-0,(isNaN(t)||t>6)&&(t=0);var e=this.day(),r=this.date();return Math.ceil((r-e-1)/7)+(e>=t?1:0)},i.prototype.isLeapYear=function(){var t=this.isValid();return!0!==t?t:o.isLeapYear(this.year())},i.prototype.isThisYear=function(){var t=this.isValid();return!0!==t?t:o.timestamp(this._date)},i.prototype.isBefore=function(){var t=this.isValid();return!0!==t?t:o.timestamp(this._date)},i.prototype.isAfter=function(){var t=this.isValid();return!0!==t?t:o.timestamp(this._date)},i.prototype.month=function(t){var e=this.isValid();if(!0!==e)return e;var r=this;return null==t?r._date.getMonth()+1:(t=parseInt(t),t=r._date.setMonth(t-1),r)},i.prototype.add=function(t,e){var r=this.isValid();if(!0!==r)return r;var a=this;switch(t=parseInt(t),e=e||p.DAY){case p.DAY:a.time(a.time()+864e5*t);break;case p.MONTH:var n=a.date(),i=a.month()+t;a.month(i),a.date()!=n&&(a.add(-1,p.MONTH),a.date(a.endOf(p.MONTH).date()));break;case p.QUARTER:a.month(a.month()+3*t);break;case p.YEAR:a.year(a.year()+t);break;case p.WEEK:a.time(a.time()+6048e5*t);break;case p.HOUR:a.time(a.time()+36e5*t);break;case p.MINUTE:a.time(a.time()+6e4*t);break;case p.SECOND:a.time(a.time()+1e3*t);break;case p.TIME:a.time(a.time()+t)}return a},i.prototype.clone=function(){return new i(this)},i.prototype.endOf=function(t,e){var r=this.isValid();if(!0!==r)return r;var a=new i(this),n=t||p.DAY;return(a=a.startOf(n,e)).add(1,n),a.add(-1,p.SECOND),a},i.prototype.startOf=function(t,e){var r=this.isValid();if(!0!==r)return r;var a=new i(this);switch(t||p.DAY){case p.DAY:a.milliseconds(0),a.seconds(0),a.minutes(0),a.hours(0);break;case p.MONTH:a.date(1),a=a.startOf(p.DAY);break;case p.QUARTER:(a=a.startOf(p.MONTH)).add(-(a.month()-1)%3,p.MONTH);break;case p.WEEK:a=a.startOf(p.DAY);var n=(e=e||p.SUNDAY)==p.SUNDAY?0:1;0==a.day()&&1==n&&(n=-6),a.add(-a.day()+n,p.DAY);break;case p.YEAR:(a=a.startOf(p.DAY)).month(1),a.date(1);break;case p.HOUR:a.time(36e5*Math.floor(a.time()/36e5))}return a},i.prototype.isValid=function(){return!!o.isDate(this._date)||"Invalid Date"},i.prototype.getServerTime=function(){return 0!=e?this.add(e,p.TIME):this};var o={initmanba:function(t,e,r){var a=new Date;null!=e&&(o.isNumber(e)?a.setTime(e):o.isArray(e)?(o.padMonth(e),a=o.initDateWithArray(e)):o.isDate(e)?a=e:o.isString(e)?a=o.parse(e,r):e instanceof i&&(a=new Date(e.time()))),t._date=a},initDateWithArray:function(t){return t.length>1?new Date((new(Function.prototype.bind.apply(Date,[0].concat(t)))).setFullYear(t[0])):new Date},pad:function(t,e){e=e||2;var r="0";return(t=String(Math.abs(t)||0)).length>=e?t:(e-=t.length,(r+=Array(e+1).join(r)).slice(0,e)+String(t))},parse:function(t,e){if(o.isString(e)){var r={Y:0,M:1,D:1,H:0,m:0,S:0};return e.replace(/([^YyMDdHhmsS]*?)(([YyMDdHhmsS])\3*)([^YyMDdHhmsS]*?)/g,(function(e,a,n,i,o,s,u){var c=parseInt(t.substr(s+a.length,n.length),10);return"m"==i.toLowerCase()?r[i]=c:r[i.toUpperCase()]=c,""})),r.M--,a=o.initDateWithArray([r.Y,r.M,r.D,r.H,r.m,r.S])}var a,n=/^(\d{4,})\-(\d{2})\-(\d{2})\s?\:?(\d{2})?\:?(\d{2})?\:?(\d{2})?$/i.exec(t);if(null!==n)return n.shift(),o.padMonth(n),o.popUndefined(n),o.initDateWithArray(n);if("Invalid Date"==(a=new Date(t)))throw new Error("Invalid date parse from "+t);return a},popUndefined:function(t){return t.length>0&&null==t[t.length-1]?(t.pop(),o.popUndefined(t)):t},padMonth:function(t){t.length>1&&t[1]>0&&(t[1]-=1)},isLeapYear:function(t){return t%4==0&&t%100!=0||t%400==0},format:function(t,e){var r=e;return r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=r.replace(/yyyy|YYYY/,this.pad(t.getFullYear(),4))).replace(/yy|YY/,t.getFullYear()%100>8?(t.getFullYear()%100).toString():"0"+t.getFullYear()%100)).replace(/MM/,t.getMonth()>8?(t.getMonth()+1).toString():"0"+(t.getMonth()+1))).replace(/M/g,t.getMonth()+1)).replace(/w|W/g,a[t.getDay()])).replace(/dd|DD/,this.pad(t.getDate()))).replace(/d|D/g,t.getDate())).replace(/hh|HH/,this.pad(t.getHours()))).replace(/h|H/g,t.getHours())).replace(/mm/,this.pad(t.getMinutes()))).replace(/m/g,t.getMinutes())).replace(/ss|SS/,this.pad(t.getSeconds()))).replace(/s|S/g,t.getSeconds())).replace(/q|Q/g,t.getHours()>12?n[1]:n[0])},UTCformat:function(t,e){var r=e;return r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=r.replace(/yyyy|YYYY/,this.pad(t.getUTCFullYear(),4))).replace(/yy|YY/,t.getUTCFullYear()%100>8?(t.getUTCFullYear()%100).toString():"0"+t.getUTCFullYear()%100)).replace(/MM/,t.getUTCMonth()>8?(t.getUTCMonth()+1).toString():"0"+(t.getUTCMonth()+1))).replace(/M/g,t.getUTCMonth()+1)).replace(/w|W/g,a[t.getUTCDay()])).replace(/dd|DD/,this.pad(t.getUTCDate()))).replace(/d|D/g,t.getUTCDate())).replace(/hh|HH/,this.pad(t.getUTCHours()))).replace(/h|H/g,t.getUTCHours())).replace(/mm/,this.pad(t.getUTCMinutes()))).replace(/m/g,t.getUTCMinutes())).replace(/ss|SS/,this.pad(t.getUTCSeconds()))).replace(/s|S/g,t.getUTCSeconds())).replace(/q|Q/g,t.getUTCHours()>12?n[1]:n[0])},timestamp:function(t){return Math.floor(t.getTime()/1e3)},getDays:function(t){return Math.floor((t.getTime()-r)/864e5)},getHours:function(t){return Math.floor((t.getTime()-r)/36e5)},getMonths:function(t){return 12*t.getYear()+t.getMonth()+1},isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},isArray:function(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)},isDate:function(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)},isNumber:function(t){return t instanceof Number||"[object Number]"===Object.prototype.toString.call(t)},isString:function(t){return t instanceof String||"[object String]"===Object.prototype.toString.call(t)},extend:function(t,e){for(var r in e)s(e,r)&&(t[r]=e[r]);return s(e,"toString")&&(t.toString=e.toString),s(e,"valueOf")&&(t.valueOf=e.valueOf),t},makeGetSet:function(t){return function(e){return null!=e?(Date.prototype["set"+t].call(this._date,e),this):Date.prototype["get"+t].call(this._date)}}};function s(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var u=i.prototype,c={year:"FullYear",day:"Day",date:"Date",hours:"Hours",milliseconds:"Milliseconds",seconds:"Seconds",minutes:"Minutes",time:"Time"};for(var d in c)u[d]=o.makeGetSet(c[d]);var p=function r(a,n){return a instanceof i?new i(a):o.isObject(a)?(a.formatString&&o.isObject(a.formatString)&&o.extend(t,a.formatString),void(a.now&&(e=r(a.now).time()-r().time()))):new i(a,n)};return p.config=function(r){r.formatString&&o.isObject(r.formatString)&&o.extend(t,r.formatString),r.now&&(e=p(r.now).time()-p().time())},p.SECOND="SECOND",p.MINUTE="MINUTE",p.HOUR="HOUR",p.DAY="DAY",p.MONTH="MONTH",p.YEAR="YEAR",p.WEEK="WEEK",p.TIME="TIME",p.QUARTER="QUARTER",p.MONDAY=1,p.TUESDAY=2,p.WEDNESDAY=3,p.THURSDAY=4,p.FRIDAY=5,p.SATURDAY=6,p.SUNDAY=7,p}));
},{isPage:false,isComponent:false,currentFile:'utils/manba.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/touch.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e,t,u=require("../@babel/runtime/helpers/classCallCheck"),a=require("../@babel/runtime/helpers/createClass"),c=function(){function c(){u(this,c)}return a(c,[{key:"_touchstart",value:function(u,a){return a.forEach((function(e,t){e.isTouchMove&&(e.isTouchMove=!1)})),e=u.changedTouches[0].clientX,t=u.changedTouches[0].clientY,a}},{key:"_touchmove",value:function(u,a,c){var n=u.currentTarget.dataset.id,r=u.changedTouches[0].clientX,o=u.changedTouches[0].clientY,i=this._angle({X:e,Y:t},{X:r,Y:o});return a.forEach((function(t,u){t.isTouchMove=!1,Math.abs(i)>30||t[c]==n&&(t.isTouchMove=!(r>e))})),a}},{key:"_angle",value:function(e,t){var u=t.X-e.X,a=t.Y-e.Y;return 360*Math.atan(a/u)/(2*Math.PI)}}]),c}();exports.default=c;
},{isPage:false,isComponent:false,currentFile:'utils/touch.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/typeSetting.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports={certTypeSetting:{0:"身份证"},orderStatusSetting:{0:"待支付",1:"出票中",2:"出票成功",3:"已取消",4:"已完成",5:"退票中",6:"已退票"},orderStatusDescSetting:{0:"请在XXX时间内/时间前完成支付，否则将为您自动取消",1:"正在出票中，请等待",2:"请您关注出发时间，祝您一路平安",3:"很遗憾，未能为您服务",4:"已完成",5:"正在努力为您办理退票，请耐心等待",6:"退票成功，退款将于1-7个工作日返回到您的支付账户"},vehicleTypeSetting:{1:"豪华",2:"舒适",3:"经济",4:"商务"},certTypeList:[{id:1,text:"身份证"},{id:2,text:"护照"},{id:3,text:"回乡证"},{id:4,text:"台湾居民来往大陆通行证"},{id:5,text:"港澳台居民居住证"},{id:6,text:"外国人永久居留身份证"},{id:7,text:"其他证件"}]};
},{isPage:false,isComponent:false,currentFile:'utils/typeSetting.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/userInfo.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault"),t=require("../@babel/runtime/helpers/objectSpread2"),a=e(require("./config")),o=require("./fetch"),n=e(require("./util")),r=getApp();function c(){return new Promise((function(e,t){r.globalData&&r.globalData.vcode||(wx.setStorageSync("vcode",""),wx.setStorageSync("appInfo",""));var c=wx.getStorageSync("vcode"),d=wx.getStorageSync("appInfo");if(c&&!n.default.isEmpty(d))return e(d),!1;(0,o.fetch)({url:"".concat(a.default.urlPrefix,"/wchatMin/getAppInfo?appId=").concat(a.default.APPID),method:"POST",complete:function(a){var o=a.data;o&&"200"===o.code&&!n.default.isEmpty(o.data)?(wx.setStorageSync("vcode",o.data.vcode),wx.setStorageSync("appInfo",o.data),r.globalData.vcode=o.data.vcode,r.globalData.appInfo=o.data,e(o.data)):(n.default.alert(o.msg||"未获取到供应商信息"),t(a))}})}))}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new Promise((function(r,d){var i=wx.getStorageSync("openId"),u=wx.getStorageSync("loginInfo"),f=function(e){wx.login({timeout:1e4,success:function(c){(0,o.fetch)({url:"".concat(a.default.urlPrefix,"/wchatMin/getOpenId"),method:"GET",data:{vcode:e,code:c.code},complete:function(a){var o=a.data;if(o&&"200"===o.code&&!n.default.isEmpty(o.data)){var c=t(t({},o.data),{},{vcode:e});wx.setStorageSync("openId",o.data.openId),wx.setStorageSync("loginInfo",c),r(c)}else d(o)}})},fail:function(e){d(e)}})};e?f(e):c().then((function(e){if(i&&!n.default.isEmpty(u)){var a=t(t({},u),{},{vcode:e.vcode,minAppName:e.minAppName});return r(a),!1}f(e.vcode)}))}))}module.exports={getAppInfo:c,getOpenid:d,getWxMobile:function(e,r,c){return new Promise((function(i,u){if(c||e&&r){var f=0;!function l(){d().then((function(d){!n.default.isEmpty(d)&&d.openId?(0,o.fetch)({url:"".concat(a.default.urlPrefix,"/wchatMin/getPhoneNo"),method:"POST",data:{vcode:d.vcode,sessionKey:d.sessionKey,encryptedData:e,iv:r,code:c||"",openId:d.openId},complete:function(e){var a=e.data;a&&a.data&&a.data.phoneNo?(f=0,i(t(t({},d),{},{phone:a.data.phoneNo,memberId:a.data.memberId}))):f>0?(n.default.alert("获取手机号失败，请稍后重试"),u()):(wx.setStorageSync("openId",""),f++,l())}}):(n.default.alert("获取用户信息失败，请稍后重试"),u())}))}()}else u()}))},getMemberId:function(){return wx.getStorageSync("memberId")||""},toLoginPage:function(){wx.navigateTo({url:"/pages/login/login"})}};
},{isPage:false,isComponent:false,currentFile:'utils/userInfo.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/util.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../@babel/runtime/regenerator")),n=require("../@babel/runtime/helpers/objectSpread2"),r=require("../@babel/runtime/helpers/asyncToGenerator"),o=require("../@babel/runtime/helpers/typeof"),a=e(require("./config")),i=require("./fetch");function c(e,t){var n;t=t||"Y-M-D H:F:S";return e instanceof Date?n=e:"string"==typeof e?n=new Date(s(e,0)):"number"==typeof e&&(n=new Date(e)),t.replace(/Y|y|M|m|D|d|H|h|F|f|S|s/g,(function(t){switch(t){case"y":return(n.getFullYear()+"").slice(2);case"Y":return n.getFullYear();case"m":return n.getMonth()+1;case"M":return l(n.getMonth()+1);case"d":return e.getDate();case"D":return l(n.getDate());case"h":return n.getHours();case"H":return l(n.getHours());case"f":return n.getMinutes();case"F":return l(n.getMinutes());case"s":return n.getSeconds();case"S":return l(n.getSeconds())}}))}function u(e,t){"string"==typeof e&&(e=b(e));var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),/(w+)/.test(t)&&(t=t.replace(RegExp.$1,[["日","一","二","三","四","五","六"],["周日","周一","周二","周三","周四","周五","周六"],["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]][RegExp.$1.length-1][e.getDay()])),n)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return t}function s(e,t){return 0==t?e.replace("T"," ").replace(/-/g,"/"):1==t?e.replace(/T/," ").replace(/\//g,"-"):void 0}function l(e){return e<10?"0"+e:e}var f=[].slice,g={},d=g.toString;function p(e){var t=Object.prototype.toString;if(null==e)return!0;if("[object Array]"==t.call(e)||"[object String]"==t.call(e))return 0===e.length;if("[object Object]"==t.call(e))for(var n in e)return!1;return!0}function m(e){return"object"==function(e){return null==e?String(e):g[d.call(e)]||"object"}(e)}function h(e){return m(e)&&Object.getPrototypeOf(e)==Object.prototype}"Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach((function(e,t){g["[object "+e+"]"]=e.toLowerCase()}));var w=Array.isArray||function(e){return e instanceof Array};function v(e){var t={"content-type":"application/json",openid:wx.getStorageSync("openId"),unionId:wx.getStorageSync("unionId"),memberId:wx.getStorageSync("memberId"),Refid:wx.getStorageSync("refid"),filter1:wx.getStorageSync("filter")};if(e)for(var n in e)t[n]=e[n];return t}function S(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:5e3,a=null,i=null;return r=Object.assign({"content-type":"application/json",openid:wx.getStorageSync("openId"),unionId:wx.getStorageSync("unionId"),memberId:wx.getStorageSync("memberId"),Refid:wx.getStorageSync("refid"),filter1:wx.getStorageSync("filter")},r),new Promise((function(c,u){i=wx.request({url:e,data:t,header:r,method:n||"POST",success:function(e){if(200==e.statusCode){var t=e.data;!p(t)&&p(t.header)?c(t):!p(t.header)&&t.header.isSuccess?c(t.body):u(t.header)}else u(e||"请求失败")},fail:function(e){u(e||"请求失败")},complete:function(){clearTimeout(a)}}),o&&o>0&&(a=setTimeout((function(){u("请求超时"),i&&i.abort()}),o))}))}function b(e){return e?new Date(e.replace(/-/g,"/")):new Date}function y(e){return"function"==typeof e}function x(e){var t,n=f.call(arguments,1);return"boolean"==typeof e&&(t=e,e=n.shift()),n.forEach((function(n){D(e,n,t)})),e}function D(e,t,n){for(var r in t)n&&(h(t[r])||w(t[r]))?(h(t[r])&&!h(e[r])&&(e[r]={}),w(t[r])&&!w(e[r])&&(e[r]=[]),x(n,e[r],t[r])):void 0!==t[r]&&(e[r]=t[r])}function M(e){return""!==e&&null!==e&&("number"==typeof e&&!isNaN(e))}var T=null;function I(){var e=wx.getStorageSync("userLabelSaved");return"boolean"==typeof e&&e}function P(){var e=wx.getStorageSync("userLabel");return M(e)?e:0}var O=function(e){return"[object String]"===Object.prototype.toString.call(e)};function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.split("?"),n={};return t.length>1&&(t=t[1].split("&")).forEach((function(e){e=e.split("="),n[e[0]]=e[1]})),n}function k(){return(k=r(t.default.mark((function e(){var r,o,c,u,s,l=arguments;return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=l.length>0&&void 0!==l[0]?l[0]:{},o=getCurrentPages(),c=o[o.length-1]||{},u=c.route,s="",!(r.scene&&decodeURIComponent(r.scene).indexOf("id=")>-1)){e.next=9;break}return e.next=8,new Promise((function(e){(0,i.fetch)({url:a.default.getParamsByScene,method:"POST",data:{scene:decodeURIComponent(r.scene)},complete:function(t){var n=t.data,o=(void 0===n?{}:n).body,a=(void 0===o?{}:o).params,i=void 0===a?"":a,c=i.indexOf(u)>-1;i&&delete r.scene,e(c?i:""),!c&&i&&wx.navigateTo({url:i})}})}));case 8:s=e.sent;case 9:return s&&(r=n(n({},r),j(s))),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{appId:"",path:"",extraData:{},envVersion:"release",shortLink:"",success:function(){},fail:function(){},complete:function(){}},t=y(wx.openEmbeddedMiniProgram);t?wx.openEmbeddedMiniProgram(n({},e)):wx.navigateToMiniProgram(n({},e))}function R(e){return e*Math.PI/180}module.exports={getDistance:function(e,t,n,r){var o=R(e),a=R(n),i=o-a,c=R(t)-R(r),u=2*Math.asin(Math.sqrt(Math.pow(Math.sin(i/2),2)+Math.cos(o)*Math.cos(a)*Math.pow(Math.sin(c/2),2)));return u*=6378.137,u=(u=Math.round(1e4*u)/1e4)<1?(1e3*u).toFixed(1)+"m":u.toFixed(2)+"km"},isString:O,isFn:y,formatNumber:function(e){return(e=(~~e).toString())[1]?e:"0"+e},format:c,format1:u,switchConnectSign:s,getDate:function(e){return e?"string"==typeof e?new Date(e.replace(/-/g,"/")):new Date(e):new Date},addDay:function(e,t,n){var r=t||new Date;n=n||"yyyy-MM-dd","string"!=typeof r&&"number"!=typeof r||(r=new Date(t));var o=864e5*e,a=new Date(r.getTime()+o);return{date:a,day:u(a,n)}},subDay:function(e,t,n){var r=t||new Date;n=n||"yyyy-MM-dd","string"==typeof r?r=new Date(s(t,0)):"number"==typeof r&&(r=new Date(t));var o=864e5*e,a=new Date(r.getTime()-o);return{date:a,day:u(a,n)}},$http:S,wxhttp:function(e,t,n,r){return r=Object.assign({"content-type":"application/json",openid:wx.getStorageSync("openId"),unionId:wx.getStorageSync("unionId"),memberId:wx.getStorageSync("memberId"),Refid:wx.getStorageSync("refid"),filter1:wx.getStorageSync("filter")},r),new Promise((function(o,a){wx.request({url:e,data:JSON.stringify(t),method:n||"POST",header:r,success:function(e){var t=e.data;!p(t.header)&&t.header.isSuccess?o(t):a(t)},fail:function(e){a(e)},complete:function(e){}})}))},$req:function(e,t,n,r,o){var a=null,i=null;return r=Object.assign({"content-type":"application/json",openid:wx.getStorageSync("openId"),unionId:wx.getStorageSync("unionId"),memberId:wx.getStorageSync("memberId"),Refid:wx.getStorageSync("refid"),filter1:wx.getStorageSync("filter")},r),new Promise((function(c,u){i=wx.request({url:e,data:t,header:r,method:n||"POST",success:function(e){c(e.data)},fail:function(e){u(e||"请求失败")},complete:function(){clearTimeout(a)}}),o&&o>0&&(a=setTimeout((function(){u("请求超时"),i&&i.abort()}),o))}))},isEmpty:p,getCurrentPageUrlWithArgs:function(){var e=getCurrentPages(),t=e[e.length-1],n=t.route,r=t.options,o="/".concat(n,"?");for(var a in r){var i=r[a];o+="".concat(a,"=").concat(i,"&")}return o=o.substring(0,o.length-1)},debounce:function(e,t,n){var r;return t=t||0,function(){var n=this,o=arguments;r&&(clearTimeout(r),r=null),r=setTimeout((function(){e.apply(n,o)}),t)}},throttle:function(e,t){var n=null;return t=t||0,function(){var r=this,o=arguments,a=+new Date;(a-n>t||!n)&&(e.apply(r,o),n=a,console.log("执行throttle"))}},parseDate:b,alert:function(e,t,n,r,o,a,i,c){wx.showModal({content:e||"",title:t||"温馨提示",showCancel:n||!1,cancelText:r||"我知道了",confirmText:o||"确定",confirmColor:c||"#3D8FFF",success:function(e){e.confirm?y(a)&&a(e):y(i)&&i()}})},loading:function(e){wx.showToast({title:e||"加载中...",icon:"loading",mask:!0,duration:1e6})},hideLoading:function(){wx.hideToast()},showToast:function(e,t,n,r){wx.showToast({title:e||"加载中...",icon:t||"loading",duration:n||1500,mask:!0,success:r||null})},formatOptions:function(e){var t="";for(var n in e)t+=n+"="+e[n]+"&";return t=t.slice(0,t.length-1)},clearStorage:function(e){Array.isArray(e)&&e.map((function(e){wx.removeStorageSync(e)}))},changeTime:function(e){if(e){new Date(e);var t=(i(36e5,24)+i(6e4,60)+i(1e3,60)).split(""),n="",r="";if(e>864e5&&e<36e7){r=(n=""+24*Math.floor(e/864e5)).split("");var o=+t[0]+ +r[0],a=+t[1]+ +r[1];return a>=10&&(o+=Math.floor(a/10),a=Math.floor(a%10)),o+""+a+":"+t[2]+t[3]+":"+t[4]+t[5]}return e>=36e7?(n=Math.floor(e/864e5)+"天")+""+t[0]+t[1]+":"+t[2]+t[3]+":"+t[4]+t[5]:n+""+t[0]+t[1]+":"+t[2]+t[3]+":"+t[4]+t[5]}function i(t,n){var r=Math.floor(e/t%n);return r<10?"0"+r:""+r}},addTime:function(e,t,n){var r,o=e||new Date;if("string"==typeof o)o=new Date(s(o,0));else if("number"==typeof o)o=new Date(o);else if(!t||t.search(/Y|M|D|H|F|S/g)<0)return;var a=t.split(/Y|M|D|H|F|S/g)[0];switch(t.substr(-1,1)){case"M":r=30*a*24*60*60*1e3;break;case"D":r=24*a*60*60*1e3;break;case"H":r=60*a*60*1e3;break;case"F":r=60*a*1e3;break;case"S":r=1e3*a}return o.setTime(o.getTime()+r),n?c(o,n):o},formatNum:l,setHeader:v,extend:x,saveFormid:function(e,t,n,r,o){if(""==e||"the formId is a mock one"==e)return!1;var i=encodeURIComponent,c="openid=".concat(i(wx.getStorageSync("openId")),"&unionid=").concat(i(wx.getStorageSync("unionId")),"&memberid=").concat(i(wx.getStorageSync("memberId")),"&formid=").concat(i(e),"&category=").concat(i(t)||"category","&action=").concat(i(n)||"click","&label=").concat(i(r),"&value=").concat(i(o||r),"&scene=").concat(getApp().globalData.scene);S(a.default.saveFormid,c,"POST",{"Content-Type":"application/x-www-form-urlencoded"},3e3).then((function(e){})).catch((function(e){}))},getNewOrderApi:function(e,t){if(e)for(var n in t)/order\/|pay\/|wechatWithHold\//.test(t[n])&&(/wxbusapi\//gi.test(t[n])?t[n]=t[n].replace(/wxbusapi\//gi,"busorderapi/"):t[n]=t[n].replace(/wxbusapitest\//gi,"busorderapitest/"),t[n].indexOf("wechatWithHold/")>-1&&(t[n]=t[n].replace(/wechatWithHold\//gi,"pay/")));else for(var r in t)/order\/|pay\//.test(t[r])&&(/busorderapi\//gi.test(t[r])?t[r]=t[r].replace(/busorderapi\//gi,"wxbusapi/"):t[r]=t[r].replace(/busorderapitest\//gi,"wxbusapitest/"),/queryNew\/|channelForApplet\/|channel\//.test(t[r])&&(t[r]=t[r].replace(/pay\//gi,"wechatWithHold/")));return t},tmSaveFormId:function(e){if(""===e||"the formId is a mock one"===e)return!1;var t=v();(0,i.fetch)({url:a.default.collect,method:"POST",header:t,data:{formId:e,channelId:"001"},success:function(){},fail:function(){}})},isRealNum:M,isFunc:function(e){return"function"==typeof e},handleDecimal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if("number"!=typeof e)return 0;if(e%1==0)return e;var n=e.toString(),r=n.indexOf("."),o=n.slice(0,r+t+1);return Number(o)},isIphoneX:function(){try{return wx.getSystemInfoSync().safeArea.top>20}catch(e){console.error("获取SystemInfo兼容iPhone X错误",e)}return!1},timer:function(){return new Promise((function(e,t){T=setTimeout((function(){e(T)}),1e3*(time||0))}))},jumpParams:function(e){var t=[];for(var n in e)t.push(n+"="+e[n]);return"?"+t.join("&")},getParams:function(e,t){var n=new RegExp("(^|\\?|&)".concat(e,"=([^|&]*)([&|$]?)"),"i"),r=t?t.match(n):"";return p(r)?null:decodeURIComponent(r[2])},TMLogCollect:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.className,n=void 0===t?"BusWechat":t,r=e.methodName,o=void 0===r?"":r,c=e.filterTxt,u=void 0===c?"":c,s=e.level,l=void 0===s?3:s,f=e.reqParams,g=void 0===f?"":f,d=e.resParams,p=void 0===d?"":d,m=(new Date).getTime(),h="",w="";if("string"!=typeof g)try{h=JSON.stringify(g)}catch(e){h="{}"}else h=g||"{}";if("string"!=typeof p)try{w=JSON.stringify(p)}catch(e){w="{}"}else w=p||"{}";var v='{"request":'.concat(h,',"response":').concat(w,"}");(0,i.fetch)({url:"".concat(a.default.tmLogApi,"/collect/put"),method:"POST",data:{Header:{MachineNo:"BusWechat",SecretKey:"",TimesTamp:m},Body:{className:n,methodName:o,createTime:m,filterTxt:u||getApp().globalData.tmLogRandomNum,level:l,params:v}},priority:3,complete:function(){}})},giveNewUserGoldRule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;return new Promise((function(t){(0,i.fetch)({url:"".concat(a.default.tmMinaApi,"/goldRule/getNewUserGiveGoldRule"),method:"POST",data:{source:e},complete:function(e){var n=e.data,r=0,o=1;p(n)||"0000"!==n.ErrCode||p(n.Data)||(r=n.Data.goldNum,o=n.Data.popSec),t({goldNum:r,popSec:o})}})}))},findNewAndGrant:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3;return new Promise((function(o){(0,i.fetch)({url:"".concat(a.default.tmMinaApi,"/gold/findNewAndGrant"),method:"POST",data:{openId:e,unionId:t,memberId:"",nickName:n,source:r},complete:function(e){var t=e.data,n=!1,r=0,a=0;p(t)||"0000"!==t.ErrCode||p(t.Data)||(n=!0,r=t.Data.grantGoldAmount,a=t.Data.exchangeRate),o({isNewUser:n,grantGoldAmount:r,exchangeRate:a})}})}))},tmDebounce:function(e,t){var n=null;return function(){var r=this,o=arguments;n&&clearTimeout(n),n=setTimeout((function(){e.apply(r,o)}),t||500)}},getWXLoginCode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;return new Promise((function(t){wx.login({timeout:e,success:function(e){e.code?t(e.code):t("")},fail:function(){t("")}})}))},initSocket:function(e,t){var n=null,r=null,o=getApp();o.globalData.SocketTask=wx.connectSocket({url:a.default.websocket,success:function(){},fail:function(e){console.error("Socket连接失败",e)}}),n=o.globalData.SocketTask,console.log("this.globalData.SocketTask",n),n&&(n.onOpen((function(){var e;console.log("通道已打开",n),t.onOpen&&t.onOpen(),e=n,clearInterval(r),r=setInterval((function(){e.send({data:""})}),2e4)})),n.onClose((function(e){console.error("close",e)})),n.onError((function(e){console.error("error ",e)})),n.onMessage((function(e){t.onMessage&&t.onMessage(e)})))},equals:function e(t,n){if(t===n)return!0;if(t instanceof Date&&n instanceof Date)return t.getTime()===n.getTime();if(!t||!n||"object"!==o(t)&&"object"!==o(n))return t===n;if(t.prototype!==n.prototype)return!1;var r=Object.keys(t);return r.length===Object.keys(n).length&&r.every((function(r){return e(t[r],n[r])}))},initGlobalData:function(e,t){p(e.globalData.bus)&&(e.globalData.bus={}),p(e.globalData.bus.book)&&(e.globalData.bus.book={}),t&&(e.globalData.bus.book={})},isMobile:function(e){return/^(1[3-9])\d{9}$/.test(e)},sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))},isAnonymity:function(e){var t=e.nickName,n=e.avatarUrl;return!!p(t)||"微信用户"===t&&"https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132"===n},getUserLabelSavedStorage:I,setUserLabelSavedStorage:function(){wx.setStorageSync("userLabelSaved",!0)},getUserLabelStorage:P,setUserLabelStorage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,t=I();if(!t){var n=P();n||wx.setStorageSync("userLabel",e)}},newDate:function(e){return O(e)?new Date(e.replace(/-/g,"/")):new Date(e)},analysisScene:function(){return k.apply(this,arguments)},jumpEmbeddedMiniProgram:N,viewInfo:function(){var e=wx.getSystemInfoSync()||{},t=e.safeArea||{},n=750/(e.screenWidth||375),r=e.windowHeight*n,o=e.screenHeight-t.bottom||0;return{winRpxHeight:r,bottomSafeHeight:o*=n,rpxRatio:n,statusBarHeight:e.statusBarHeight||20}},isNotEmptyString:function(e){return"string"==typeof e&&""!==e},jumpMiniProgramOrWebview:function(e,t){t&&(e?"wx84fe73c9806bca0a"!=e?N({appId:e,path:t}):wx.navigateTo({url:t}):wx.navigateTo({url:"/pages/webview/webview?src=".concat(encodeURIComponent(t))}))},formatSeconds:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=/^(-|\+)?\d+$/;if(n.test(e)){var r=Math.floor(e/3600),o=Math.floor(e%3600/60),a=e%60,i="";return r>0&&(i+=r,i+="小时"),o>0&&(o<10&&(i+="0"),i+=o,i+="分钟",t)?i:(a<10&&(i+="0"),i+=a,i+="秒")}return""},isPointInArea:function(e,t,n){for(var r=n,o=[],a=0;a<r.length;a++){var i=r[a],c={};c.lng=parseFloat(i.longitude),c.lat=parseFloat(i.latitude),o.push(c)}return function(e,t,n){for(var r=e.length,o=[],a=[],i=0;i<r;i++)o.push(e[i].lat),a.push(e[i].lng);for(var c=!1,u=0,s=r-1;u<r;s=u++)a[u]>t!=a[s]>t&&n<(o[s]-o[u])*(t-a[u])/(a[s]-a[u])+o[u]&&(c=!c);return c}(o,e,t)}};
},{isPage:false,isComponent:false,currentFile:'utils/util.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("utils/validate.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports={phoneValid:/^1\d{10}$|^[6|9]\d{7}$|^[0][9]\d{8}$|^[6][8|6]\d{5}$/,idCardValid:/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,emailValid:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/};
},{isPage:false,isComponent:false,currentFile:'utils/validate.js'});;__wxRoute = undefined;__wxRouteBegin = undefined;__wxAppCurrentFile__=undefined;define("app.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("@babel/runtime/helpers/interopRequireDefault")(require("./utils/touch"));App({onLaunch:function(){if(wx.canIUse("getUpdateManager")){var e=wx.getUpdateManager();e.onCheckForUpdate((function(t){t.hasUpdate&&(e.onUpdateReady((function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(t){t.confirm&&e.applyUpdate()}})})),e.onUpdateFailed((function(){wx.showModal({title:"已经有新版本了哟~",content:"新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"})})))}))}else wx.showModal({title:"提示",content:"当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"})},globalData:{openId:"",vcode:""},touch:new e.default});
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
oB.wxXCkey=1
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
"use strict";require("../../utils/util");Component({options:{addGlobalClass:!0},properties:{show:{type:Boolean,value:!1,observer:function(e){var o=this;setTimeout((function(){o.setData({showPop:e})}),10)}},showType:{type:Boolean,value:!1},cancelConfig:{type:Object,value:{}}},data:{activeTab:0,markers:[],local:{},showPop:!1,notice:"",showNotice:!1},methods:{btnOk:function(){this.setData({show:!1})}}});
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
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_1=true;
var x=['./components/datetime-picker-view/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_1_1()
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/datetime-picker-view/index.wxml'] = [$gwx_XC_1, './components/datetime-picker-view/index.wxml'];else __wxAppCode__['components/datetime-picker-view/index.wxml'] = $gwx_XC_1( './components/datetime-picker-view/index.wxml' );
	;__wxRoute = "components/datetime-picker-view/index";__wxRouteBegin = true;__wxAppCurrentFile__="components/datetime-picker-view/index.js";define("components/datetime-picker-view/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault"),a=require("../../@babel/runtime/helpers/toConsumableArray"),e=t(require("../../utils/manba")),n=require("../../utils/dayjs.min.js"),i="周日_周一_周二_周三_周四_周五_周六".split("_"),r=a(new Array(24).keys()).map((function(t){return"00".concat(t).substr(-2)})),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return a(new Array(60).keys()).filter((function(a){return a%t==0})).map((function(t){return"00".concat(t).substr(-2)}))},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return 60-t},o=function(t){return isNaN(t)&&!isNaN(Date.parse(t))};Component({hasInitData:!1,properties:{current:{type:String,value:""},start:{type:String,value:""},end:{type:String,value:""},interval:{type:Number,value:15}},data:{dateValue:[0,0,0],oldDateValue:[0,0,0],dateList:[],hourDate:[],minuteDate:[],slideEnd:!0,startDate:(0,e.default)().format("YYYY/MM/DD hh:mm"),endDate:(0,e.default)().add(30,e.default.DAY).format("YYYY/MM/DD hh:mm"),lastDays:30},observers:{"start, end":function(t,a){if(this.hasInitData=!0,o(t)&&o(a)){var n=(0,e.default)(t).format("YYYY/MM/DD hh:mm"),i=(0,e.default)(a).format("YYYY/MM/DD hh:mm"),r=(0,e.default)(i).distance(n),s=r>0?r+1:30;this.setData({startDate:n,endDate:i,lastDays:s}),this.initDateTimeData(n)}else{if(t){var u=(0,e.default)(t).format("YYYY/MM/DD hh:mm");this.setData({startDate:u}),this.initDateTimeData(u)}if(a){var h=(0,e.default)(a).format("YYYY/MM/DD hh:mm"),c=(0,e.default)(h).distance(this.data.startDate),d=c>0?c+1:30;this.setData({endDate:h,lastDays:d}),this.initDateTimeData()}}}},attached:function(){this.hasInitData||this.initDateTimeData()},methods:{initDateTimeData:function(t){var a=this,e=this.data,n=e.current,i=(e.startDate,this.getDateList()),r=this.getHourList(!0),s=this.getMinuteList(!0,!0);this.setData({dateList:i,hourDate:r,minuteDate:s},(function(){a.hasInitData=!1,a.setCurrent(n)}))},setCurrent:function(t){var a=this,i=this.data,r=i.dateList,s=i.hourDate,o=i.minuteDate,h=t;if(h&&r.length&&s.length&&o.length){var c=(0,e.default)(h).format("YYYY/MM/DD"),d=(0,e.default)(h).format("HH"),D=(0,e.default)(h).format("mm");+D>u(this.data.interval)&&(d="00".concat(+d+1).substr(-2),D="00",h="".concat(c," ").concat(d,":").concat(D)),24==+d&&(d="00",h=n("".concat(c," ").concat(d,":").concat(D)).add(1,"day").format("YYYY/MM/DD HH:mm"),c=(0,e.default)(h).format("YYYY/MM/DD"));var f=r.findIndex((function(t){return t.date===c}));f=-1===f?0:f;var l=s.findIndex((function(t){return t===d}));l=-1===l?0:l;var m=o.findIndex((function(t){return+D<=+t}));m=-1===m?0:m,this.setData({dateValue:[f,l,m]},(function(){a.getInitSelectedTime()}))}},pickerViewColumnChage:function(t){var a=this,e=t.detail.value;this.setData({dateValue:e},(function(){a.handleConfirm()})),0!==e[0]&&this.setData({hourDate:r}),0===e[0]&&this.setData({hourDate:this.getHourList()}),e[0]===this.data.lastDays-1&&this.setData({hourDate:this.getHourList(!1,!0)}),0===e[0]&&0===e[1]||this.setData({minuteDate:s(this.data.interval)}),0===e[0]&&0===e[1]&&this.setData({minuteDate:this.getMinuteList()}),e[0]===this.data.lastDays-1&&e[1]===this.data.hourDate.length-1&&this.setData({minuteDate:this.getMinuteList(!1,!1,!0)})},pickerViewColumnSlide:function(t){},handleConfirm:function(){var t=this.data,a=t.dateValue,e=t.dateList,n=t.hourDate,i=t.minuteDate;if(e.length&&n.length&&i.length){var r=e[a[0]].date,s=n[a[1]],u=i[a[2]];r&&s&&u&&this.triggerEvent("confirm","".concat(r," ").concat(s,":").concat(u))}},getInitSelectedTime:function(){var t=this.data,a=t.dateValue,e=t.dateList,n=t.hourDate,i=t.minuteDate;if(e.length&&n.length&&i.length){var r=e[a[0]].date,s=n[a[1]],u=i[a[2]];r&&s&&u&&(console.log("".concat(r," ").concat(s,":").concat(u),"getSelectedTime"),this.triggerEvent("init","".concat(r," ").concat(s,":").concat(u)))}},getDateList:function(){for(var t=this.data,a=t.startDate,r=t.lastDays,s=[],u=0;u<r;u++){var o=(0,e.default)(a).add(u,e.default.DAY).format("YYYY/MM/DD"),h=(0,e.default)(o).format("MM月DD日"),c=(0,e.default)(o).distance(),d={date:o,year:(0,e.default)(o).format("YYYY"),month:(0,e.default)(o).format("MM"),text:0===c?"".concat(h," 今天"):1===c?"".concat(h," 明天"):"".concat(h," ").concat(i[n(o).day()])};s.push(d)}return s},getHourList:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.data,r=i.interval,s=i.endDate,o=i.startDate,h=n(o).hour(),c=n(o).minute(),d=[];if(t)d=a(new Array(24).keys()).filter((function(t){return t>=+h})).map((function(t){return"00".concat(t).substr(-2)})),c>u(r)&&d.shift();else if(e){var D=n(s).hour()+1;d=a(new Array(+D).keys()).map((function(t){return"00".concat(t).substr(-2)}))}else d=a(new Array(24).keys()).map((function(t){return"00".concat(t).substr(-2)}));return d},getMinuteList:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this.data,r=i.interval,o=i.endDate,h=i.startDate,c=n(h).minute(),d=s(r),D=d;if(t&&a&&c<=u(r))D=d.filter((function(t){return+t>=+c})).map((function(t){return t}));else if(e){var f=n(o).minute();D=d.filter((function(t){return+t<=+f})).map((function(t){return t}))}return D}}});
},{isPage:false,isComponent:true,currentFile:'components/datetime-picker-view/index.js'});require("components/datetime-picker-view/index.js");$gwx_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_2=true;
var x=['./components/loginPopup/loginPopup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_2_1()
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/loginPopup/loginPopup.wxml'] = [$gwx_XC_2, './components/loginPopup/loginPopup.wxml'];else __wxAppCode__['components/loginPopup/loginPopup.wxml'] = $gwx_XC_2( './components/loginPopup/loginPopup.wxml' );
	;__wxRoute = "components/loginPopup/loginPopup";__wxRouteBegin = true;__wxAppCurrentFile__="components/loginPopup/loginPopup.js";define("components/loginPopup/loginPopup.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../../utils/config")),o=e(require("../../utils/util")),n=require("../../utils/fetch"),i=require("../../utils/userInfo");Component({properties:{showTop:{type:Boolean,value:!1}},data:{minAppName:""},attached:function(){var e=this;(0,i.getAppInfo)().then((function(t){t.minAppName&&(e.setData({minAppName:t.minAppName}),wx.setNavigationBarTitle({title:t.minAppName}))}))},methods:{goPhoneLogin:function(){wx.navigateTo({url:"/pages/loginPhone/loginPhone"})},getWxPhone:function(e){var t=e.detail,n=t.encryptedData,a=t.iv,r=t.errMsg,l=t.code;console.log(e.detail);var m=this;"getPhoneNumber:ok"===r&&(0,i.getWxMobile)(n,a,l).then((function(e){!o.default.isEmpty(e)&&e.memberId&&(wx.setStorageSync("memberId",e.memberId),m.triggerEvent("loginSuccess",e))}))},wxPhoneLogin:function(e){var i=this;console.log(e),(0,n.fetch)({url:"".concat(t.default.urlPrefix,"/member/register"),method:"POST",data:{openId:e.openId,mobile:e.phone,appCode:e.appCode,sms:!1},complete:function(e){var t=e.data;t&&"200"===t.code&&t.data?(wx.setStorageSync("memberId",t.data.memberId),i.triggerEvent("loginSuccess",t.data)):o.default.alert(t.msg||"登录失败，请稍后再试")}})}}});
},{isPage:false,isComponent:true,currentFile:'components/loginPopup/loginPopup.js'});require("components/loginPopup/loginPopup.js");$gwx_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[7],[3,'show']])
Z([[2,'?:'],[[7],[3,'overlay']],[1,'popup-container'],[1,'popup-bottom-container']])
Z([[2,'==='],[[7],[3,'position']],[1,'center']])
Z([[2,'==='],[[7],[3,'position']],[1,'bottom']])
Z([a,[3,'popup-bottom-box '],[[2,'&&'],[[7],[3,'round']],[1,'round']]])
Z([[7],[3,'showTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_3=true;
var x=['./components/popup/popup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_3_1()
var cF=_v()
_(r,cF)
if(_oz(z,0,e,s,gg)){cF.wxVkey=1
var hG=_n('view')
_rz(z,hG,'class',1,e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,2,e,s,gg)){oH.wxVkey=1
var cI=_n('slot')
_(oH,cI)
}
else if(_oz(z,3,e,s,gg)){oH.wxVkey=2
var oJ=_n('view')
_rz(z,oJ,'class',4,e,s,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,5,e,s,gg)){lK.wxVkey=1
}
var aL=_n('slot')
_(oJ,aL)
lK.wxXCkey=1
_(oH,oJ)
}
oH.wxXCkey=1
_(cF,hG)
}
cF.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/popup/popup.wxml'] = [$gwx_XC_3, './components/popup/popup.wxml'];else __wxAppCode__['components/popup/popup.wxml'] = $gwx_XC_3( './components/popup/popup.wxml' );
	;__wxRoute = "components/popup/popup";__wxRouteBegin = true;__wxAppCurrentFile__="components/popup/popup.js";define("components/popup/popup.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({options:{multipleSlots:!0},properties:{show:{type:Boolean,value:!0},showTitle:{type:Boolean,value:!0},position:{type:String,value:"center"},round:{type:Boolean,value:!0},overlay:{type:Boolean,value:!0},title:{type:String}},data:{},methods:{hidden:function(){this.triggerEvent("hidden")}}});
},{isPage:false,isComponent:true,currentFile:'components/popup/popup.js'});require("components/popup/popup.js");$gwx_XC_4=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_4=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_4=true;
var x=['./pages/agreement/agreement.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_4_1()
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_4();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/agreement/agreement.wxml'] = [$gwx_XC_4, './pages/agreement/agreement.wxml'];else __wxAppCode__['pages/agreement/agreement.wxml'] = $gwx_XC_4( './pages/agreement/agreement.wxml' );
	;__wxRoute = "pages/agreement/agreement";__wxRouteBegin = true;__wxAppCurrentFile__="pages/agreement/agreement.js";define("pages/agreement/agreement.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("./desc.js");Page({data:{content:e.serviceAgreement.userService},onLoad:function(t){var n=this;"privacy"===t.agreementType&&(wx.setNavigationBarTitle({title:"隐私协议"}),this.setData({content:e.serviceAgreement.privacy})),this.getOpenerEventChannel().on("agreementData",(function(e){e&&(wx.setNavigationBarTitle({title:e.name}),n.setData({content:e.content}))}))}});
},{isPage:true,isComponent:true,currentFile:'pages/agreement/agreement.js'});require("pages/agreement/agreement.js");$gwx_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'approw'])
Z([3,'width:100%;'])
Z([[2,'!'],[[2,'!'],[[2,'!'],[[7],[3,'assess']]]]])
Z([[2,'!'],[[2,'!'],[[7],[3,'assess']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_5=true;
var x=['./pages/assess/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
var bO=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,2,e,s,gg)){oP.wxVkey=1
}
var xQ=_v()
_(bO,xQ)
if(_oz(z,3,e,s,gg)){xQ.wxVkey=1
}
oP.wxXCkey=1
xQ.wxXCkey=1
_(r,bO)
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/assess/index.wxml'] = [$gwx_XC_5, './pages/assess/index.wxml'];else __wxAppCode__['pages/assess/index.wxml'] = $gwx_XC_5( './pages/assess/index.wxml' );
	;__wxRoute = "pages/assess/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/assess/index.js";define("pages/assess/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/util")),t=require("../../utils/config");Page({data:{picBaseUrl:t.picBaseUrl,selectIndex:-1,text:""},onLoad:function(e){var t=-1,o="",n=e.orderNo,a=e.assess;a&&(t=(a=JSON.parse(decodeURIComponent(a))).starNum,o=a.commentDetail),this.setData({orderNo:n,assess:a,selectIndex:t,text:o})},selectIndex:function(e){if(!this.data.assess){var t=e.currentTarget.dataset.value;this.setData({selectIndex:parseInt(t)})}},bindKeyInput:function(e){if(!this.data.assess){var t=e.detail.value;this.setData({text:t})}},toBook:function(){wx.reLaunch({url:"/pages/home/home"})},toSubmit:function(){var e=this;wx.showModal({content:"是否确认提交评价",confirmText:"匿名提交",cancelText:"暂不评价",confirmColor:"#009BC5",success:function(t){t.confirm?e.submit():t.cancel&&wx.navigateBack()}})},submit:function(){var o=wx.getStorageSync("vcode"),n=this.data,a=n.selectIndex,i=n.orderNo,s=n.text;if(!(a<=0)){return new Promise((function(n,r){e.default.loading(),console.log(wx.getStorageSync("vcode")),e.default.$http(t.openApi+"/order/".concat(o,"/mobile/user/rate"),{commentDetail:s,openId:wx.getStorageSync("openId"),memberId:wx.getStorageSync("memberId"),orderNo:i,anonymous:1,starNum:a}).then((function(t){e.default.hideLoading(),"200"==t.code?(e.default.hideLoading(),wx.showModal({content:"反馈成功，感谢您的支持",showCancel:!1,confirmText:"确定",confirmColor:"#009BC5",success:function(e){wx.navigateBack()}})):(e.default.hideLoading(),wx.showToast({title:"评价失败",icon:"none"}))})).catch((function(t){r(t),e.default.hideLoading(),console.error("request api.queryLinkerNew error ",t)}))}))}wx.showToast({title:"请给服务打个分吧",icon:"none"})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/assess/index.js'});require("pages/assess/index.js");$gwx_XC_6=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var x=['./pages/cancel/index.wxml'];d_[x[0]]={}
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_6();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/cancel/index.wxml'] = [$gwx_XC_6, './pages/cancel/index.wxml'];else __wxAppCode__['pages/cancel/index.wxml'] = $gwx_XC_6( './pages/cancel/index.wxml' );
	;__wxRoute = "pages/cancel/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/cancel/index.js";define("pages/cancel/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/util")),o=require("../../utils/config");Page({data:{picBaseUrl:o.picBaseUrl,options:[{name:"行程有变，暂不需要用车了",select:!1},{name:"下单信息填错了需要修改",select:!1},{name:"赶时间使用其他交通工具",select:!1},{name:"派单时间太慢了",select:!1},{name:"司机未按时间到达",select:!1}],selectIndex:-1},onLoad:function(e){var o=e.orderNo;this.setData({orderNo:o})},selectChange:function(e){console.log(e);for(var o=e.detail.value||e.currentTarget.dataset.value,t=this.data.options,n=0;n<t.length;n++)t[n].select=!1;this.setData({options:t}),t[parseInt(o)].select=!0,this.setData({options:t,selectIndex:parseInt(o)})},onReady:function(){},toSubmit:function(){var t=this.data,n=t.selectIndex,a=(t.options,t.orderNo);if(!(n<0)){var c=this,r=wx.getStorageSync("vcode");return new Promise((function(t,n){e.default.loading(),console.log(wx.getStorageSync("vcode")),e.default.$http(o.openApi+"/order/".concat(r,"/mobile/cancel/fee"),{vcode:r,memberId:wx.getStorageSync("memberId"),orderNo:a},"GET").then((function(o){"200"==o.code?wx.showModal({content:"正在为您派车，当前取消订单需要支付 "+o.data.cancelFee+" 元手续费",title:"",cancelColor:"#999999",confirmText:"暂不取消",cancelText:"确认取消",confirmColor:"#009BC5",success:function(e){e.confirm?wx.navigateBack():c.submit()}}):e.default.hideLoading(),e.default.hideLoading()})).catch((function(o){n(o),e.default.hideLoading(),console.error("request api.queryLinkerNew error ",o)}))}))}e.default.alert("请选择取消原因")},submit:function(){var t=wx.getStorageSync("vcode"),n=this.data,a=n.selectIndex,c=n.options,r=n.orderNo;if(!(a<0)){return new Promise((function(n,i){e.default.loading(),console.log(wx.getStorageSync("vcode")),e.default.$http(o.openApi+"/order/".concat(t,"/mobile/cancel/user"),{cancelReason:c[a].name,openId:wx.getStorageSync("openId"),vcode:t,memberId:wx.getStorageSync("memberId"),orderNo:r}).then((function(o){e.default.hideLoading(),"200"==o.code?(e.default.hideLoading(),wx.showModal({content:"取消成功",showCancel:!1,confirmText:"确定",confirmColor:"#009BC5",success:function(e){wx.navigateBack()}})):(e.default.hideLoading(),wx.showToast({title:"取消失败",icon:"none"}))})).catch((function(o){i(o),e.default.hideLoading(),console.error("request api.queryLinkerNew error ",o)}))}))}e.default.alert("请选择取消原因")},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/cancel/index.js'});require("pages/cancel/index.js");$gwx_XC_7=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[2,'&&'],[[2,'!'],[[2,'!'],[[7],[3,'locationCity']]]],[[2,'!'],[[2,'!'],[[6],[[7],[3,'locationCity']],[3,'name']]]]])
Z([[2,'<='],[[6],[[7],[3,'filterList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_7=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_7=true;
var x=['./pages/city/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_7_1()
var cT=_v()
_(r,cT)
if(_oz(z,0,e,s,gg)){cT.wxVkey=1
}
var hU=_v()
_(r,hU)
if(_oz(z,1,e,s,gg)){hU.wxVkey=1
}
cT.wxXCkey=1
hU.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_7();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/city/index.wxml'] = [$gwx_XC_7, './pages/city/index.wxml'];else __wxAppCode__['pages/city/index.wxml'] = $gwx_XC_7( './pages/city/index.wxml' );
	;__wxRoute = "pages/city/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/city/index.js";define("pages/city/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/util")),e=(require("../../utils/userInfo"),require("../../utils/config")),i=require("../../utils/Pinyin.js");Page({data:{picBaseUrl:e.picBaseUrl,cityList:[],filterList:[],locationCity:{},selectCity:{}},bindKeyInput:function(t){var e=t.detail.value;this.setData({filterList:[],searchItem:e});var i=[];if(/^[a-zA-Z]+$/.test(e)){e=e?e.toLocaleLowerCase():e;for(var n=0;n<this.data.cityList.length;n++){((a=this.data.cityList[n]).py&&-1!=a.py.indexOf(e)||a.sp&&-1!=a.sp.indexOf(e))&&i.push(a)}}else for(n=0;n<this.data.cityList.length;n++){var a,o=(a=this.data.cityList[n]).name;o&&-1!=o.indexOf(e)&&i.push(a)}this.setData({filterList:this.changeFilterList(i)})},selectCity:function(t){var e=t.currentTarget.dataset.value;this.getOpenerEventChannel().emit("selectCity",e),wx.navigateBack()},onLoad:function(t){var e=t.type,i=t.cityList,n=t.locationCity;i&&(i=JSON.parse(decodeURIComponent(i))),n&&(n=JSON.parse(decodeURIComponent(n))),wx.setNavigationBarTitle({title:"选择"+("start"==e?"上":"下")+"车点城市"}),this.setData({type:e,cityList:i,locationCity:n,filterList:this.changeFilterList(i)})},getArea:function(){var n=this,a=this,o=wx.getStorageSync("vcode");return new Promise((function(s,r){t.default.loading(),console.log(wx.getStorageSync("vcode")),t.default.$http(e.openApi+"/area/".concat(o,"/list"),{}).then((function(e){if("200"==e.code){for(var o=e.data,s=0;s<o.length;s++)o[s].sp=i.convertToPinyin(o[s].name,"sp"),o[s].py=i.convertToPinyin(o[s].name,"py");a.setData({cityList:o,filterList:n.changeFilterList(o)}),t.default.hideLoading()}else t.default.alert(e.msg),t.default.hideLoading();t.default.hideLoading()})).catch((function(e){r(e),t.default.hideLoading(),console.error("request api.queryLinkerNew error ",e)}))}))},changeFilterList:function(t){for(var e=0;e<t.length;e++)t[e].show=!0;return t.length%3==2&&t.push({show:!1}),t},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/city/index.js'});require("pages/city/index.js");$gwx_XC_8=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var x=['./pages/contactadd/index.wxml'];d_[x[0]]={}
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_8();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/contactadd/index.wxml'] = [$gwx_XC_8, './pages/contactadd/index.wxml'];else __wxAppCode__['pages/contactadd/index.wxml'] = $gwx_XC_8( './pages/contactadd/index.wxml' );
	;__wxRoute = "pages/contactadd/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/contactadd/index.js";define("pages/contactadd/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/objectSpread2"),l=require("../../utils/util"),n=require("../../utils/config"),a=require("../../utils/validate"),i=require("../../utils/util");Page({data:{picBaseUrl:n.picBaseUrl,idArray:[{id:1,name:"身份证"},{id:2,name:"护照"},{id:3,name:"回乡证"},{id:4,name:"台湾居民来往大陆通行证"},{id:5,name:"港澳台居民居住证"},{id:6,name:"外国人永久居留身份证"}],idIndex:0},onLoad:function(e){var l=e.person;l&&this.setData(JSON.parse(l))},idTypeSelect:function(){},confirmInput:function(a){var t=a.detail.value,u=wx.getStorageSync("vcode"),d=wx.getStorageSync("memberId"),r=wx.getStorageSync("openId");this.validaInput(t)&&i.$http(n.urlPrefix+"/passenger/".concat(u,"/savePassengerList"),e(e({memberId:d,idType:this.data.idArray[this.data.idIndex].id,openId:r},t),{},{defaulted:t.defaulted?1:0}),"POST").then((function(e){console.log(e),200==parseInt(e.code)?wx.navigateBack():(0,l.alert)(e.msg)}))},validaInput:function(e){if(e.passengerName)if(e.cardId)if(1!=this.data.idArray[this.data.idIndex].id||a.idCardValid.test(e.cardId))if(e.mobilePhone){if(a.phoneValid.test(e.mobilePhone))return!0;(0,l.alert)("请输入正确的手机号",null,!1,null,null,null,null,"#009BC5")}else(0,l.alert)("请输入手机号",null,!1,null,null,null,null,"#009BC5");else(0,l.alert)("请输入合法的身份证号码",null,!1,null,null,null,null,"#009BC5");else(0,l.alert)("请输入证件号",null,!1,null,null,null,null,"#009BC5");else(0,l.alert)("请输入姓名",null,!1,null,null,null,null,"#009BC5")},bindPickerChange:function(e){this.setData({idIndex:e.detail.value})}});
},{isPage:true,isComponent:true,currentFile:'pages/contactadd/index.js'});require("pages/contactadd/index.js");$gwx_XC_9=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var x=['./pages/contacts/index.wxml'];d_[x[0]]={}
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_9();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/contacts/index.wxml'] = [$gwx_XC_9, './pages/contacts/index.wxml'];else __wxAppCode__['pages/contacts/index.wxml'] = $gwx_XC_9( './pages/contacts/index.wxml' );
	;__wxRoute = "pages/contacts/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/contacts/index.js";define("pages/contacts/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../utils/util"),e=require("../../utils/config"),a=getApp();Page({data:{picBaseUrl:e.picBaseUrl,list:[]},onLoad:function(t){var e=wx.getStorageSync("memberId");this.setData({memberId:e})},onShow:function(){this.loadPassengerData()},loadPassengerData:function(){t.loading();var a=this,n=wx.getStorageSync("vcode");t.$http(e.urlPrefix+"/passenger/".concat(n,"/getPassengerList"),{memberId:a.data.memberId},"post").then((function(e){200===parseInt(e.code)?a.setData({list:e.data}):t.alert(e.msg),t.hideLoading()}))},addPerson:function(t){wx.navigateTo({url:"/pages/contactadd/index",success:function(t){t.eventChannel.emit("passdata",{})}})},handleSelect:function(t){var e=t.currentTarget.dataset.id,a=this.data.list;e&&(a.forEach((function(t){e==t.id&&(t.checked=!t.checked)})),this.setData({list:a}))},handleEdit:function(t){var e=t.currentTarget.dataset.person;wx.navigateTo({url:"/pages/contactadd/index?person=".concat(JSON.stringify(e)),success:function(t){t.eventChannel.emit("passdata",{isEdit:!0,passInfo:e})}})},touchstart:function(t){var e=a.touch._touchstart(t,this.data.list);this.setData({list:e})},touchmove:function(t){var e=a.touch._touchmove(t,this.data.list,"id");this.setData({list:e})},delete:function(a){var n=this,s=a.currentTarget.dataset.id,o=wx.getStorageSync("vcode"),c=(wx.getStorageSync("openId"),wx.getStorageSync("memberId"));wx.showModal({cancelColor:"#3D8FFF",title:"删除乘客",content:"确认要删除该联系人吗？",confirmColor:"#3D8FFF",success:function(a){a.confirm?(t.loading(),t.$http(e.urlPrefix+"/passenger/".concat(o,"/removePassenger"),{memberId:c,id:s},"POST").then((function(e){200==parseInt(e.code)?(t.alert("操作成功"),n.loadPassengerData()):t.alert(e.msg)})),t.hideLoading(),console.log("success")):a.cancel&&console.log("cancel")}})},confirmSelect:function(){getCurrentPages()}});
},{isPage:true,isComponent:true,currentFile:'pages/contacts/index.js'});require("pages/contacts/index.js");$gwx_XC_10=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var x=['./pages/funaggrement/personCollect/index.wxml'];d_[x[0]]={}
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_10();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/funaggrement/personCollect/index.wxml'] = [$gwx_XC_10, './pages/funaggrement/personCollect/index.wxml'];else __wxAppCode__['pages/funaggrement/personCollect/index.wxml'] = $gwx_XC_10( './pages/funaggrement/personCollect/index.wxml' );
	;__wxRoute = "pages/funaggrement/personCollect/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/funaggrement/personCollect/index.js";define("pages/funaggrement/personCollect/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var n=require("../../../utils/config");require("../../../utils/util");Page({data:{picBaseUrl:n.picBaseUrl,personInfoList:[{name:"手机号",scene:"授权获取",purpose:"会员登录",content:"用户的登录手机号"}],behaviorList:[{name:"订单信息",scene:"用户预定产品服务时收集",purpose:"方便用户管理订单",content:"无"}],locationList:[{name:"位置",scene:"用户授权定位后使用城市选择等功能",purpose:"提升用户体验",content:"无"}]},onLoad:function(n){},personProtocol:function(){var n=this;wx.navigateTo({url:"./personBasicInfo/index?title=个人基本信息",success:function(e){e.eventChannel.emit("passdata",{personInfoList:n.data.personInfoList})}})},orderPhone:function(){wx.navigateTo({url:"./personContact/index"})},personBehavior:function(){var n=this;wx.navigateTo({url:"./personBasicInfo/index?title=用户行为信息",success:function(e){e.eventChannel.emit("passdata",{personInfoList:n.data.behaviorList})}})},facilityLocation:function(){var n=this;wx.navigateTo({url:"./personBasicInfo/index?title=设备属性及定位信息",success:function(e){e.eventChannel.emit("passdata",{personInfoList:n.data.locationList})}})}});
},{isPage:true,isComponent:true,currentFile:'pages/funaggrement/personCollect/index.js'});require("pages/funaggrement/personCollect/index.js");$gwx_XC_11=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_11=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_11=true;
var x=['./pages/funaggrement/personCollect/personBasicInfo/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_11_1()
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_11();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/funaggrement/personCollect/personBasicInfo/index.wxml'] = [$gwx_XC_11, './pages/funaggrement/personCollect/personBasicInfo/index.wxml'];else __wxAppCode__['pages/funaggrement/personCollect/personBasicInfo/index.wxml'] = $gwx_XC_11( './pages/funaggrement/personCollect/personBasicInfo/index.wxml' );
	;__wxRoute = "pages/funaggrement/personCollect/personBasicInfo/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/funaggrement/personCollect/personBasicInfo/index.js";define("pages/funaggrement/personCollect/personBasicInfo/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Page({data:{},onLoad:function(t){var a=this,e=this.getOpenerEventChannel();e&&e.on("passdata",(function(t){var e=t.personInfoList;a.setData({list:e})}));var n=t.title;n&&wx.setNavigationBarTitle({title:n})}});
},{isPage:true,isComponent:true,currentFile:'pages/funaggrement/personCollect/personBasicInfo/index.js'});require("pages/funaggrement/personCollect/personBasicInfo/index.js");$gwx_XC_12=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var x=['./pages/funaggrement/personCollect/personContact/index.wxml'];d_[x[0]]={}
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_12();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/funaggrement/personCollect/personContact/index.wxml'] = [$gwx_XC_12, './pages/funaggrement/personCollect/personContact/index.wxml'];else __wxAppCode__['pages/funaggrement/personCollect/personContact/index.wxml'] = $gwx_XC_12( './pages/funaggrement/personCollect/personContact/index.wxml' );
	;__wxRoute = "pages/funaggrement/personCollect/personContact/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/funaggrement/personCollect/personContact/index.js";define("pages/funaggrement/personCollect/personContact/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../../utils/config"),t=require("../../../../utils/util");Page({data:{},onShow:function(){this.getUserPhone()},getUserPhone:function(){var r=this,n=wx.getStorageSync("vcode"),o=wx.getStorageSync("openId");t.$http(e.urlPrefix+"/member/".concat(n,"/getMobileByOpenId"),{openId:o},"POST").then((function(e){200==parseInt(e.code)&&r.setData({phone:e.data})}))},orderDetail:function(){wx.switchTab({url:"/pages/orderList1/orderList"})}});
},{isPage:true,isComponent:true,currentFile:'pages/funaggrement/personCollect/personContact/index.js'});require("pages/funaggrement/personCollect/personContact/index.js");$gwx_XC_13=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var x=['./pages/funaggrement/thirdShareInfo/index.wxml'];d_[x[0]]={}
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_13();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/funaggrement/thirdShareInfo/index.wxml'] = [$gwx_XC_13, './pages/funaggrement/thirdShareInfo/index.wxml'];else __wxAppCode__['pages/funaggrement/thirdShareInfo/index.wxml'] = $gwx_XC_13( './pages/funaggrement/thirdShareInfo/index.wxml' );
	;__wxRoute = "pages/funaggrement/thirdShareInfo/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/funaggrement/thirdShareInfo/index.js";define("pages/funaggrement/thirdShareInfo/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/funaggrement/thirdShareInfo/index.js'});require("pages/funaggrement/thirdShareInfo/index.js");$gwx_XC_14=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'card-box'])
Z([[2,'==='],[[7],[3,'tabIndex']],[1,0]])
Z([3,'changeAirportPopupShow'])
Z([3,'location-item icon-circle mb48'])
Z([[7],[3,'showChangeRemind']])
Z(z[2])
Z([3,'bottom'])
Z([[7],[3,'showAirportPopup']])
Z([1,false])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_14_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_14_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_14=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_14=true;
var x=['./pages/home/home.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_14_1()
var b3=_n('view')
_rz(z,b3,'class',0,e,s,gg)
var o4=_v()
_(b3,o4)
if(_oz(z,1,e,s,gg)){o4.wxVkey=1
var x5=_mz(z,'view',['bind:tap',2,'class',1],[],e,s,gg)
var o6=_v()
_(x5,o6)
if(_oz(z,4,e,s,gg)){o6.wxVkey=1
}
o6.wxXCkey=1
_(o4,x5)
}
else{o4.wxVkey=2
}
o4.wxXCkey=1
_(r,b3)
var f7=_mz(z,'Popup',['bind:hidden',5,'position',1,'show',2,'showTitle',3],[],e,s,gg)
_(r,f7)
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_14();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/home/home.wxml'] = [$gwx_XC_14, './pages/home/home.wxml'];else __wxAppCode__['pages/home/home.wxml'] = $gwx_XC_14( './pages/home/home.wxml' );
	;__wxRoute = "pages/home/home";__wxRouteBegin = true;__wxAppCurrentFile__="pages/home/home.js";define("pages/home/home.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault");require("../../@babel/runtime/helpers/Arrayincludes");var e=require("../../@babel/runtime/helpers/objectSpread2"),a=t(require("../../utils/config")),n=t(require("../../utils/util")),i=require("../../utils/fetch"),o=require("../../utils/userInfo"),r=t(require("../../utils/AMap.js")),s=!1;Page({mapCtx:null,startStationList:[],data:{openId:"",vcode:"",memberId:"",minAppName:"",picBaseUrl:a.default.picBaseUrl,tabIndex:0,showChangeRemind:!1,showAirportPopup:!1,airporStartOutService:!0,airporEndOutService:!1,airportStartInfo:{list:[],selectIndex:null,selectItem:null},endStationInfo:{stationId:"",pointList:[],areaList:[],location:null,cityName:"",address:"",name:"",outService:!0},startStationInfo:{stationId:"",pointList:[],areaList:[],location:null,cityName:"",address:"",outService:!0},airportEndInfo:{list:[],selectIndex:null,selectItem:null},selectedStation:null,defaultLocation:{},currentLocation:{},includePoints:[],markers:[],polygons:[],processOrderNum:0,saleStationId:"",saleId:""},onLoad:function(t){var e=this;console.log(t,"options");var a="",n="";t.stationId&&(a=Number(t.stationId)),t.saleId&&(n=t.saleId),this.setData({saleStationId:a,saleId:n}),this.mapCtx=wx.createMapContext("map");var i=!1!==wx.getStorageSync("showHomeChangeRemind");i&&(this.setData({showChangeRemind:i}),setTimeout((function(){e.setData({showChangeRemind:!1}),wx.setStorageSync("showHomeChangeRemind",!1)}),5e3))},onShow:function(){var t=this;if(this.data.vcode){this.initData();var e=(0,o.getMemberId)();this.setData({memberId:e}),e&&this.countProcessOrder()}else(0,o.getAppInfo)().then((function(e){if(e.vcode){var a=(0,o.getMemberId)();t.setData({vcode:e.vcode,memberId:a,minAppName:e.minAppName}),e.minAppName&&wx.setNavigationBarTitle({title:e.minAppName}),t.initData(),a&&t.countProcessOrder()}}))},initData:function(){var t=this,a=this.data,n=a.defaultLocation,i=a.selectedStation;if(n&&n.latitude&&n.longitude||this.getUserLocation(),i){var o=this.data,r=o.tabIndex,s=o.endStationInfo,d=o.startStationInfo,c={location:{latitude:i.latitude,longitude:i.longitude},cityName:i.cityName||"",name:i.name,stationId:i.stationId};0===r?this.setData({endStationInfo:e(e(e({},s),c),{},{outService:!1,selectItem:i})}):(this.setData({startStationInfo:e(e(e({},d),c),{},{selectItem:i})}),this.startStationIsinService(!0)),this.mapCtx.moveToLocation({latitude:i.latitude,longitude:i.longitude,success:function(){t.setData({currentLocation:c.location})}})}},getUserLocation:function(){var t=this;wx.getLocation({type:"gcj02",success:function(e){if(console.log(e),"getLocation:ok"===e.errMsg){var a=e.latitude,n=e.longitude,i={latitude:a,longitude:n};t.setData({currentLocation:i,defaultLocation:i,includePoints:[{latitude:a,longitude:n}]}),t.queryAirportStartStion(),t.queryAirportEndStion()}},fail:function(e){t.setData({"endStationInfo.outService":!0,"startStationInfo.outService":!0}),"getLocation:fail auth deny"===e.errMsg&&wx.showModal({title:"提示",content:"需要授权位置信息",confirmColor:"#009BC5",success:function(t){t.confirm&&wx.openSetting()}})}})},queryAirportStartStion:function(){var t=this,o=this.data.vcode,r={stationProperty:2};n.default.loading(),(0,i.fetch)({url:"".concat(a.default.urlPrefix,"/station/").concat(o,"/list/all"),method:"POST",data:r,complete:function(a){n.default.hideLoading();var i=a.data;if(i&&"200"===i.code&&!n.default.isEmpty(i.data)&&i.data.length){var o=t.data,r=o.airportStartInfo,s=o.currentLocation,d=i.data.filter((function(t){return 1===t.type})).map((function(t){var a=0;return t.latitudeItems&&t.latitudeItems.length&&(a=n.default.getDistance(s.latitude,s.longitude,t.latitudeItems[0].lat,t.latitudeItems[0].lon)),e(e({},t),{},{distance:a})})).sort((function(t,e){return t.distance-e.distance}));if(d.length){var c=0,l=d[0];if(t.data.saleStationId){var u=d.findIndex((function(e){return e.id===t.data.saleStationId}));u>-1&&(c=u,l=d[u])}t.setData({airportStartInfo:e(e({},r),{},{list:d,selectIndex:c,selectItem:l})}),t.queryEndStation()}}else t.setData({"endStationInfo.outService":!0})}})},queryEndStation:function(){var t=this,o=this.data,r=o.airportStartInfo,s=o.vcode,d=o.endStationInfo;if(r.selectItem){var c={startStationIds:[r.selectItem.id],stationProperty:null};(0,i.fetch)({url:"".concat(a.default.urlPrefix,"/station/").concat(s,"/list/all"),method:"POST",data:c,complete:function(a){var i=a.data;i&&"200"===i.code&&!n.default.isEmpty(i.data)&&i.data.length?t.initStationMap(i.data).then((function(a){t.setData({endStationInfo:e(e({},d),a)})})):t.setData({"endStationInfo.outService":!0})}})}},queryAirportEndStion:function(){var t=this,o=this.data.vcode,r="".concat(a.default.urlPrefix,"/station/").concat(o,"/list/allToEnd"),s={stationProperty:2};n.default.loading(),(0,i.fetch)({url:r,method:"POST",data:s,complete:function(a){n.default.hideLoading();var i=a.data;if(i&&"200"===i.code&&!n.default.isEmpty(i.data)&&i.data.length){var o=t.data,r=o.airportEndInfo,s=(o.currentLocation,i.data.filter((function(t){return 1===t.type})));t.setData({airportEndInfo:e(e({},r),{},{list:s})})}else t.setData({"endStationInfo.outService":!0})}})},queryStartStation:function(){var t=this,e=this.data.vcode;(0,i.fetch)({url:"".concat(a.default.urlPrefix,"/station/").concat(e,"/list/all"),method:"POST",data:{stationProperty:null},complete:function(e){var a=e.data,i=[];a&&"200"===a.code&&!n.default.isEmpty(a.data)&&a.data.length&&(i=a.data),t.startStationList=i}})},initStartStation:function(){var t=this,a=this.data.startStationInfo;this.mapCtx.getCenterLocation({success:function(n){t.setData({currentLocation:{latitude:n.latitude,longitude:n.longitude}}),t.getRegeo().then((function(n){t.setData({startStationInfo:e(e(e({},a),n),{},{name:"",stationId:"",outService:!1})})}))}})},startStationIsinService:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.data,o=i.startStationInfo,r=i.airportEndInfo;if(o.location&&r.selectItem){var s=r.selectItem.startStationIds||[],d=[];if(this.startStationList.forEach((function(t){s.includes(t.id)&&d.push(t)})),d.length){var c=o.location;this.initStationMap(d,c).then((function(i){a&&i.outService&&n.default.showToast("您查询的上车位置不在服务范围内，请选择其他上车位置","none"),t.setData({startStationInfo:e(e({},o),i)})}))}else this.setData({"startStationInfo.outService":!0}),a&&n.default.showToast("您查询的上车位置不在服务范围内，请选择其他上车位置","none")}},initStationMap:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=[],r=[],s=!0,d={};if(i||(i=this.data.currentLocation),a.forEach((function(t){1===t.type?o.push(t):2===t.type&&r.push(t)})),o.length&&0===r.length){var c=o.findIndex((function(t){return 0===n.default.getDistance(i.latitude,i.longitude,t.latitude,t.longitude)}));c>-1&&(s=!1,d.stationId=item.id,d.type=item.type,d.cityId=item.cityId,d.stationName=item.name)}var l=[];if(r.length){r.forEach((function(e){var a=e.latitudeItems.map((function(t){return{latitude:t.lat,longitude:t.lon}})),n={stationId:e.id,stationType:e.type,stationCityId:e.cityId,stationName:e.name,points:a,fillColor:"#009BC532",strokeWidth:2,strokeColor:"#ffffff"};l.push(n),t.setData({polygons:l})}));var u=this.currentIsinPolygons(i);(s=!1===u)||(d.stationId=u.stationId,d.type=u.type,d.cityId=u.cityId,d.stationName=u.stationName)}else this.setData({polygons:[]});return new Promise((function(a,n){s?(d.outService=s,a(d)):t.getRegeo().then((function(t){d=e(e(e({},d),t),{},{outService:s}),a(d)}))}))},countProcessOrder:function(){var t=this;if(!s){s=!0;var e=this.data,n=e.memberId,o=e.vcode;if(n&&o){var r=encodeURIComponent(n);(0,i.fetch)({url:"".concat(a.default.urlPrefix,"/order/").concat(o,"/countProcessOrder/openId?memberId=").concat(r),method:"POST",complete:function(e){s=!1;var a=e.data;a&&"200"===a.code&&a.data&&t.setData({processOrderNum:a.data})}})}}},currentIsinPolygons:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this.data.polygons,a=t||this.data.currentLocation,i=e.length;if(0===i)return!1;for(var o=0;o<i;o++){var r=e[o],s=n.default.isPointInArea(a.longitude,a.latitude,r.points);if(s)return!r||{stationId:r.stationId,type:r.stationType,cityId:r.stationCityId,stationName:r.stationName}}return!1},resetMap:function(){var t=this.data.defaultLocation;this.setData({currentLocation:t,polygons:[],includePoints:[{latitude:t.latitude,longitude:t.longitude}]}),this.resetLocation()},getRegeo:function(){var t=this.data.currentLocation;return new Promise((function(e,a){r.default.getRegeo({location:"".concat(t.longitude,",").concat(t.latitude),success:function(t){if(console.log(t,"根据经纬度获取地址信息"),t&&t.length){var a=t[0].regeocodeData,n=a.addressComponent,i=a.pois,o=i.length&&i[0]&&i[0].name||t.desc,r={location:{latitude:t[0].latitude,longitude:t[0].longitude},cityName:n.city,address:o,citycode:n.citycode,adcode:n.adcode};e(r)}}})}))},regionChange:function(t){if("end"===t.type&&"drag"===t.causedBy){var e=t.detail.centerLocation;this.updateStationInfo(e)}},updateStationInfo:function(t){var a,n,i=this,o=this.data,r=o.tabIndex,s=o.airportEndInfo;this.setData({currentLocation:t}),1!==r||s.selectItem?(n=this.currentIsinPolygons(),a=!1===n):a=!1;var d=this.data,c=d.endStationInfo,l=d.startStationInfo;this.getRegeo().then((function(t){!a&&n&&n.stationId&&(t.stationId=n.stationId,t.type=n.type,t.cityId=n.cityId,t.stationName=n.stationName),0===r?i.setData({endStationInfo:e(e(e({},c),t),{},{name:"",outService:a})}):i.setData({startStationInfo:e(e(e({},l),t),{},{name:"",outService:a})})}))},airportSelect:function(t){this.changeAirportPopupShow();var e=t.currentTarget.dataset.index,a=this.data,n=a.airportStartInfo,i=a.airportEndInfo;if(0===this.data.tabIndex){if(e===n.selectIndex)return;this.setData({"airportStartInfo.selectIndex":e,"airportStartInfo.selectItem":n.list[e]}),this.queryEndStation()}else{if(e===i.selectIndex)return;this.setData({"airportEndInfo.selectIndex":e,"airportEndInfo.selectItem":i.list[e]}),this.startStationIsinService()}},tabSelect:function(t){var e=this.data.tabIndex,a=t.currentTarget.dataset.index;(a=Number(a))!==e&&(this.resetMap(),0===a?(this.setData({"airportStartInfo.selectIndex":"","airportStartInfo.selectItem":""}),this.queryAirportStartStion()):(this.setData({"airportEndInfo.selectIndex":"","airportEndInfo.selectItem":""}),this.initStartStation(),this.queryStartStation()),this.setData({tabIndex:a,selectedStation:null}))},changeAirportPopupShow:function(){var t=this.data.showAirportPopup;this.setData({showAirportPopup:!t})},resetLocation:function(){var t=this,e=this.data.defaultLocation;this.mapCtx.moveToLocation({latitude:e.latitude,longitude:e.longitude,success:function(){t.mapCtx.getCenterLocation({success:function(a){t.setData({currentLocation:a,selectedStation:null,endStationInfo:{stationId:"",pointList:[],areaList:[],location:null,cityName:"",address:"",name:"",outService:!0},startStationInfo:{stationId:"",pointList:[],areaList:[],location:null,cityName:"",address:"",name:"",outService:!1}},(function(){t.updateStationInfo(e)}))}})}})},goSearchStationEnd:function(){var t=this.data.airportStartInfo;t.selectItem?wx.navigateTo({url:"/pages/station/index?type=end&startStationIds=[".concat(t.selectItem.id,"]")}):n.default.alert("请先选择上车位置")},goSearchStationStart:function(){wx.navigateTo({url:"/pages/station/index?type=start"})},goOrderList:function(){wx.switchTab({url:"/pages/orderList1/orderList"})},goOrderWrite:function(){var t=this.data.tabIndex;if(0===t){if(this.data.endStationInfo.outService)return}else if(this.data.startStationInfo.outService)return;var e=this.data,a=e.airportStartInfo,n=e.endStationInfo,i=e.startStationInfo,o=e.airportEndInfo;if(a.selectItem&&n.stationId||o.selectItem&&i.stationId){var r,s;if(0===t){var d=a.selectItem,c=n.selectItem;r={stationId:d.id,point:{lat:d.latitudeItems[0].lat.toString(),lon:d.latitudeItems[0].lon.toString()},addressName:d.name,path:d.name,type:d.type,cityId:d.cityId},s=c?{stationId:c.stationId,point:{lat:c.latitude.toString(),lon:c.longitude.toString()},addressName:c.name,path:c.address,type:c.type,cityId:c.cityId}:{stationId:n.stationId,point:{lat:n.location.latitude.toString(),lon:n.location.longitude.toString()},addressName:n.address,type:n.type,cityId:n.cityId}}else{var l=i.selectItem,u=o.selectItem;r=l?{stationId:l.stationId,point:{lat:l.latitude.toString(),lon:l.longitude.toString()},addressName:l.name,path:l.address,type:l.type,cityId:l.cityId}:{stationId:i.stationId,point:{lat:i.location.latitude.toString(),lon:i.location.longitude.toString()},addressName:i.address,type:i.type,cityId:i.cityId},s={stationId:u.id,point:{lat:u.latitudeItems[0].lat.toString(),lon:u.latitudeItems[0].lon.toString()},addressName:u.name,path:u.name,type:u.type,cityId:u.cityId}}var f={startStation:r,endStation:s,stationPair:[{startStationId:r.stationId,endStationId:s.stationId}]};console.log(f,"stationInfo"),wx.setStorageSync("stationInfo",f);var I="/pages/orderWrite/orderWrite?stationProperty=".concat(2);this.data.saleId&&(I="/pages/orderWrite/orderWrite?stationProperty=".concat(2,"&saleId=").concat(this.data.saleId)),wx.navigateTo({url:I})}}});
},{isPage:true,isComponent:true,currentFile:'pages/home/home.js'});require("pages/home/home.js");$gwx_XC_15=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'body'])
Z([[2,'=='],[[7],[3,'tabIndex']],[1,0]])
Z([3,'prop'])
Z([[7],[3,'list']])
Z([3,'index'])
Z([[2,'!'],[[6],[[7],[3,'prop']],[3,'invoiceInfo']]])
Z(z[2])
Z(z[3])
Z(z[4])
Z([[6],[[7],[3,'prop']],[3,'invoiceInfo']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_15_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_15_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_15=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_15=true;
var x=['./pages/invoice/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_15_1()
var h9=_n('view')
_rz(z,h9,'class',0,e,s,gg)
var o0=_v()
_(h9,o0)
if(_oz(z,1,e,s,gg)){o0.wxVkey=1
var cAB=_v()
_(o0,cAB)
var oBB=function(aDB,lCB,tEB,gg){
var bGB=_v()
_(tEB,bGB)
if(_oz(z,5,aDB,lCB,gg)){bGB.wxVkey=1
}
bGB.wxXCkey=1
return tEB
}
cAB.wxXCkey=2
_2z(z,3,oBB,e,s,gg,cAB,'prop','index','index')
}
else{o0.wxVkey=2
var oHB=_v()
_(o0,oHB)
var xIB=function(fKB,oJB,cLB,gg){
var oNB=_v()
_(cLB,oNB)
if(_oz(z,9,fKB,oJB,gg)){oNB.wxVkey=1
}
oNB.wxXCkey=1
return cLB
}
oHB.wxXCkey=2
_2z(z,7,xIB,e,s,gg,oHB,'prop','index','index')
}
o0.wxXCkey=1
_(r,h9)
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_15();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/invoice/index.wxml'] = [$gwx_XC_15, './pages/invoice/index.wxml'];else __wxAppCode__['pages/invoice/index.wxml'] = $gwx_XC_15( './pages/invoice/index.wxml' );
	;__wxRoute = "pages/invoice/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/invoice/index.js";define("pages/invoice/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../utils/config"),a=require("../../utils/util");Page({data:{tabList:[{name:"待开票",orderStatus:1},{name:"开票历史",orderStatus:2}],tabIndex:0,billStatusArrays:[{name:"待开票",id:1},{name:"已开票",id:2},{name:"开票中",id:3},{name:"开票失败",id:4},{name:"已作废",id:7}]},onLoad:function(t){},onShow:function(){this.loadData()},handleSelectTab:function(t){var a=t.currentTarget.dataset.index;a!==this.data.tabIndex&&(this.setData({tabIndex:a}),this.loadData())},loadData:function(){var e=this,n=wx.getStorageSync("vcode"),i=wx.getStorageSync("memberId");a.loading(),a.$http(t.urlPrefix+"/invoice/".concat(n,"/invoicedList"),{memberId:i},"post").then((function(t){200==parseInt(t.code)?e.setData({list:t.data}):a.alert(t.msg)})).catch((function(t){a.alert(t.msg)})).finally((function(){a.hideLoading()}))},applyForNew:function(t){var a=t.currentTarget.dataset.invoice;wx.navigateTo({url:"./invoiceadd/index",success:function(t){t.eventChannel.emit("applyData",a)}})},checkInvoiceDeatil:function(t){var a=t.currentTarget.dataset.invoice;wx.navigateTo({url:"./invoicedetail/index",success:function(t){t.eventChannel.emit("invoiceData",a)}})}});
},{isPage:true,isComponent:true,currentFile:'pages/invoice/index.js'});require("pages/invoice/index.js");$gwx_XC_16=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'formSubmit'])
Z([3,'appcard appleftcolumn card'])
Z([[2,'=='],[[7],[3,'tabIndex']],[1,1]])
Z([[2,'=='],[[7],[3,'topOrgType']],[1,1]])
Z([[2,'=='],[[7],[3,'topOrgType']],[1,2]])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_16=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_16=true;
var x=['./pages/invoice/invoiceadd/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_16_1()
var oPB=_n('form')
_rz(z,oPB,'catchsubmit',0,e,s,gg)
var lQB=_n('view')
_rz(z,lQB,'class',1,e,s,gg)
var aRB=_v()
_(lQB,aRB)
if(_oz(z,2,e,s,gg)){aRB.wxVkey=1
}
var tSB=_v()
_(lQB,tSB)
if(_oz(z,3,e,s,gg)){tSB.wxVkey=1
}
var eTB=_v()
_(lQB,eTB)
if(_oz(z,4,e,s,gg)){eTB.wxVkey=1
}
var bUB=_v()
_(lQB,bUB)
if(_oz(z,5,e,s,gg)){bUB.wxVkey=1
}
aRB.wxXCkey=1
tSB.wxXCkey=1
eTB.wxXCkey=1
bUB.wxXCkey=1
_(oPB,lQB)
_(r,oPB)
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_16();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/invoice/invoiceadd/index.wxml'] = [$gwx_XC_16, './pages/invoice/invoiceadd/index.wxml'];else __wxAppCode__['pages/invoice/invoiceadd/index.wxml'] = $gwx_XC_16( './pages/invoice/invoiceadd/index.wxml' );
	;__wxRoute = "pages/invoice/invoiceadd/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/invoice/invoiceadd/index.js";define("pages/invoice/invoiceadd/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/objectSpread2"),t=require("../../../utils/config"),a=require("../../../utils/validate"),i=require("../../../utils/util");Page({data:{picBaseUrl:t.picBaseUrl,tabList:[{name:"按订单开票",orderStatus:1},{name:"按人开票",orderStatus:2}],tabIndex:0,billingType:1,topOrgType:2},onLoad:function(t){var a=this,i=this.getOpenerEventChannel();i&&i.on("applyData",(function(t){var i=a.splitAddress(t.orderInfo.startLatitudeName),r=a.splitAddress(t.orderInfo.endLatitudeName),n=t.orderInfo;a.setData(e(e({},t),{},{defaultCustomerRemark:n.startTime+" "+i+"-"+r,customerRemark:n.startTime+" "+i+"-"+r}))}))},splitAddress:function(e){var t=e.split("-");return t[1]?t[1]:t[0]?t[0]:""},handleSelectTab:function(e){var t=e.currentTarget.dataset.index;t!==this.data.tabIndex&&this.setData({tabIndex:t})},radioChange:function(e){var t=e.detail.value;this.setData({topOrgType:t})},formSubmit:function(a){var r=a.detail.value;if(r.billingType=this.data.billingType,this.validate(r)){var n=wx.getStorageSync("memberId"),o=wx.getStorageSync("vcode"),s=this.data.orderInfo.orderNo;i.loading(),i.$http(t.urlPrefix+"/invoice/".concat(o,"/applyInvoice"),e(e({orderNo:s,memberId:n,invoiceInfoType:1},r),this.data.moreInfo),"post").then((function(e){200==parseInt(e.code)?i.alert("提交成功"):i.alert(e.msg)})).catch((function(e){i.alert(e.msg)})).finally((function(){i.hideLoading(),wx.navigateBack()}))}},validate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.recipientEmail){if(e.recipientEmail&&!a.emailValid.test(e.recipientEmail))return void i.alert("邮箱格式不正确")}else i.alert("请输入邮箱地址");if(2!=parseInt(e.invoiceType)||e.invoiceTitle)if(1!=parseInt(e.invoiceType)||e.invoiceTitle)if(e.taxNo||2!=parseInt(e.invoiceType))if(e.recipientMobile){if(a.phoneValid.test(e.recipientMobile))return!0;i.alert("请输入正确的手机号")}else i.alert("请输入手机号");else i.alert("请输入税号");else i.alert("请输入个人名称");else i.alert("请输入企业名称")},billingTypeChnage:function(e){var t=e.currentTarget.dataset.type;this.setData({billingType:t})},moreInput:function(){var e=this;wx.navigateTo({url:"../invoicemore/index",events:{passData:function(t){e.setData({moreInfo:t})}},success:function(t){t.eventChannel.emit("acceptData",e.data.moreInfo)}})},remarkInput:function(){var e=this;wx.navigateTo({url:"../invoicemark/index",events:{passRemarkData:function(t){e.setData({customerRemark:t.customerRemark})}},success:function(t){t.eventChannel.emit("acceptRemarkData",{customerRemark:e.data.customerRemark,defaultCustomerRemark:e.data.defaultCustomerRemark})}})}});
},{isPage:true,isComponent:true,currentFile:'pages/invoice/invoiceadd/index.js'});require("pages/invoice/invoiceadd/index.js");$gwx_XC_17=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'appcard card'])
Z([[2,'=='],[[6],[[7],[3,'invoiceInfo']],[3,'invoiceType']],[1,2]])
Z([[7],[3,'moreFlag']])
Z(z[2])
Z(z[2])
Z(z[2])
Z(z[2])
Z(z[2])
Z([[2,'!'],[[7],[3,'moreFlag']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_17=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_17=true;
var x=['./pages/invoice/invoicedetail/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_17_1()
var xWB=_n('view')
_rz(z,xWB,'class',0,e,s,gg)
var oXB=_v()
_(xWB,oXB)
if(_oz(z,1,e,s,gg)){oXB.wxVkey=1
}
var fYB=_v()
_(xWB,fYB)
if(_oz(z,2,e,s,gg)){fYB.wxVkey=1
}
var cZB=_v()
_(xWB,cZB)
if(_oz(z,3,e,s,gg)){cZB.wxVkey=1
}
var h1B=_v()
_(xWB,h1B)
if(_oz(z,4,e,s,gg)){h1B.wxVkey=1
}
var o2B=_v()
_(xWB,o2B)
if(_oz(z,5,e,s,gg)){o2B.wxVkey=1
}
var c3B=_v()
_(xWB,c3B)
if(_oz(z,6,e,s,gg)){c3B.wxVkey=1
}
var o4B=_v()
_(xWB,o4B)
if(_oz(z,7,e,s,gg)){o4B.wxVkey=1
}
var l5B=_v()
_(xWB,l5B)
if(_oz(z,8,e,s,gg)){l5B.wxVkey=1
}
oXB.wxXCkey=1
fYB.wxXCkey=1
cZB.wxXCkey=1
h1B.wxXCkey=1
o2B.wxXCkey=1
c3B.wxXCkey=1
o4B.wxXCkey=1
l5B.wxXCkey=1
_(r,xWB)
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_17();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/invoice/invoicedetail/index.wxml'] = [$gwx_XC_17, './pages/invoice/invoicedetail/index.wxml'];else __wxAppCode__['pages/invoice/invoicedetail/index.wxml'] = $gwx_XC_17( './pages/invoice/invoicedetail/index.wxml' );
	;__wxRoute = "pages/invoice/invoicedetail/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/invoice/invoicedetail/index.js";define("pages/invoice/invoicedetail/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var a=require("../../../@babel/runtime/helpers/objectSpread2"),e=require("../../../utils/config");Page({data:{picBaseUrl:e.picBaseUrl,moreFlag:!1,billStatusArrays:[{name:"待开票",id:1},{name:"已开票",id:2},{name:"开票中",id:3},{name:"开票失败",id:4},{name:"已作废",id:7}]},onLoad:function(e){var n=this.getOpenerEventChannel(),i=this;n&&n.on("invoiceData",(function(e){e&&i.setData(a({},e))}))},loadMore:function(){this.setData({moreFlag:!this.data.moreFlag})},reTryBill:function(){var a=this;wx.navigateTo({url:"../invoiceadd/index",success:function(e){e.eventChannel.emit("applyData",{invoiceInfo:a.data.invoiceInfo,orderInfo:a.data.orderInfo})}})},backPage:function(){wx.navigateBack()}});
},{isPage:true,isComponent:true,currentFile:'pages/invoice/invoicedetail/index.js'});require("pages/invoice/invoicedetail/index.js");$gwx_XC_18=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var x=['./pages/invoice/invoicemark/index.wxml'];d_[x[0]]={}
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_18();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/invoice/invoicemark/index.wxml'] = [$gwx_XC_18, './pages/invoice/invoicemark/index.wxml'];else __wxAppCode__['pages/invoice/invoicemark/index.wxml'] = $gwx_XC_18( './pages/invoice/invoicemark/index.wxml' );
	;__wxRoute = "pages/invoice/invoicemark/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/invoice/invoicemark/index.js";define("pages/invoice/invoicemark/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/objectSpread2");Page({data:{remarkLength:0},onLoad:function(t){var a=this,n=this.getOpenerEventChannel();n&&n.on("acceptRemarkData",(function(t){a.setData(e({},t))}))},formMoreSubmit:function(e){var t=e.detail.value;this.getOpenerEventChannel().emit("passRemarkData",t),wx.navigateBack()},remarkInput:function(e){var t=e.detail.value;this.setData({remarkLength:t.length})},useDefault:function(){this.setData({customerRemark:this.data.defaultCustomerRemark})}});
},{isPage:true,isComponent:true,currentFile:'pages/invoice/invoicemark/index.js'});require("pages/invoice/invoicemark/index.js");$gwx_XC_19=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var x=['./pages/invoice/invoicemore/index.wxml'];d_[x[0]]={}
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_19();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/invoice/invoicemore/index.wxml'] = [$gwx_XC_19, './pages/invoice/invoicemore/index.wxml'];else __wxAppCode__['pages/invoice/invoicemore/index.wxml'] = $gwx_XC_19( './pages/invoice/invoicemore/index.wxml' );
	;__wxRoute = "pages/invoice/invoicemore/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/invoice/invoicemore/index.js";define("pages/invoice/invoicemore/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../@babel/runtime/helpers/objectSpread2");Page({data:{},onLoad:function(t){var a=this;wx.setNavigationBarTitle({title:"申请发票"});var n=this.getOpenerEventChannel();n&&n.on("acceptData",(function(t){a.setData(e({},t))}))},formMoreSubmit:function(e){var t=e.detail.value;this.getOpenerEventChannel().emit("passData",t),wx.navigateBack()}});
},{isPage:true,isComponent:true,currentFile:'pages/invoice/invoicemore/index.js'});require("pages/invoice/invoicemore/index.js");$gwx_XC_20=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var x=['./pages/login/login.wxml'];d_[x[0]]={}
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_20();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/login/login.wxml'] = [$gwx_XC_20, './pages/login/login.wxml'];else __wxAppCode__['pages/login/login.wxml'] = $gwx_XC_20( './pages/login/login.wxml' );
	;__wxRoute = "pages/login/login";__wxRouteBegin = true;__wxAppCurrentFile__="pages/login/login.js";define("pages/login/login.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),i=(e(require("../../utils/config")),e(require("../../utils/util"))),t=(require("../../utils/fetch"),require("../../utils/userInfo"));Page({data:{vcode:"",mobile:"",minAppName:""},onLoad:function(e){var i=this;(0,t.getOpenid)().then((function(e){i.setData({openId:e.openId,vcode:e.vcode,minAppName:e.minAppName}),e.minAppName&&wx.setNavigationBarTitle({title:e.minAppName})}))},goPhoneLogin:function(){wx.navigateTo({url:"/pages/loginPhone/loginPhone"})},getWxPhone:function(e){var n=e.detail,o=n.encryptedData,a=n.iv,r=n.errMsg,u=n.code;console.log(e.detail),"getPhoneNumber:ok"===r&&(0,t.getWxMobile)(o,a,u).then((function(e){!i.default.isEmpty(e)&&e.memberId&&(wx.setStorageSync("memberId",e.memberId),wx.navigateBack())}))}});
},{isPage:true,isComponent:true,currentFile:'pages/login/login.js'});require("pages/login/login.js");$gwx_XC_21=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_21=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_21=true;
var x=['./pages/loginPhone/loginPhone.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_21_1()
var o0B=_v()
_(r,o0B)
if(_oz(z,0,e,s,gg)){o0B.wxVkey=1
var xAC=_n('popup')
_(o0B,xAC)
}
o0B.wxXCkey=1
o0B.wxXCkey=3
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_21();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/loginPhone/loginPhone.wxml'] = [$gwx_XC_21, './pages/loginPhone/loginPhone.wxml'];else __wxAppCode__['pages/loginPhone/loginPhone.wxml'] = $gwx_XC_21( './pages/loginPhone/loginPhone.wxml' );
	;__wxRoute = "pages/loginPhone/loginPhone";__wxRouteBegin = true;__wxAppCurrentFile__="pages/loginPhone/loginPhone.js";define("pages/loginPhone/loginPhone.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../../utils/config")),a=e(require("../../utils/util")),n=require("../../utils/fetch"),o=require("../../utils/validate"),i=require("../../utils/userInfo"),s=60,d=null,u=!1;Page({data:{mobile:"",code:"",isChecked:!1,isDisabled:!0,openId:"",unionId:"",vcode:"",countDownBtn:"获取动态码",countDownDisabled:!1},onLoad:function(e){var t=this;(0,i.getOpenid)().then((function(e){t.setData({openId:e.openId,vcode:e.vcode})}));e.alter?(wx.setNavigationBarTitle({title:"修改手机号"}),this.setData({backgroundColor:"#F0F4F7"}),this.getCurrentLoginPhoneInfo()):this.setData({backgroundColor:"#fff"})},getCurrentLoginPhoneInfo:function(){var e=this,a=wx.getStorageSync("vcode");(0,n.fetch)({url:"".concat(t.default.urlPrefix,"/member/").concat(a,"/getMobileByOpenId"),method:"post",data:{openId:wx.getStorageSync("openId")},success:function(t){var a=t.data;200==parseInt(a.code)&&a.data&&e.setData({currentBingPhone:a.data})}})},bindInputMobile:function(e){this.setData({mobile:e.detail.value}),this.watchSubmitStatus(e.detail.value,this.data.code)},bindInputCode:function(e){this.setData({code:e.detail.value}),this.watchSubmitStatus(this.data.mobile,e.detail.value)},handleRadioClick:function(){this.setData({isChecked:!this.data.isChecked})},getCode:function(){var e=this;if(!this.data.countDownDisabled&&!u){var i=this.data,s=i.mobile,d=i.openId,c=i.vcode;if(!s)return a.default.showToast("请填写手机号","none"),!1;if(!o.phoneValid.test(s))return a.default.showToast("请填写正确的手机号","none"),!1;u=!0,(0,n.fetch)({url:"".concat(t.default.urlPrefix,"/member/").concat(c,"/sendMobileSms"),method:"POST",data:{vcode:c,mobilePhone:s,openId:d},complete:function(t){u=!1;var n=t.data;"200"===n.code?(e.countDownFn(),a.default.alert("验证码已发送")):a.default.alert(n.msg||"系统异常")}})}},countDownFn:function(){var e=this;d=setInterval((function(){0===s?(clearInterval(d),d=null,s=60,e.setData({countDownBtn:"获取动态码",countDownDisabled:!1})):(--s,e.setData({countDownBtn:s+"s",countDownDisabled:!0}))}),1e3)},watchSubmitStatus:function(e,t){o.phoneValid.test(e)&&t?this.setData({isDisabled:!1}):this.setData({isDisabled:!0})},popupConfirm:function(){this.setData({show:!1})},submit:function(){if(!this.data.isDisabled)if(this.data.isChecked){var e=this.data,o=e.mobile,i=e.vcode,s=e.code,d=e.openId;(0,n.fetch)({url:"".concat(t.default.urlPrefix,"/member/").concat(i,"/bindMobile"),method:"POST",data:{mobilePhone:o,smsCode:s,openId:d},complete:function(e){var t=e.data;"200"!==t.code||a.default.isEmpty(t.data)?a.default.alert(t.msg||"登录失败"):(wx.setStorageSync("memberId",t.data),wx.navigateBack({delta:2}))}})}else this.setData({show:!0})},goAgreement:function(){wx.navigateTo({url:"/pages/agreement/agreement"})},goPrivacyAgreement:function(){wx.navigateTo({url:"/pages/agreement/agreement?agreementType=privacy"})}});
},{isPage:true,isComponent:true,currentFile:'pages/loginPhone/loginPhone.js'});require("pages/loginPhone/loginPhone.js");$gwx_XC_22=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'holl-body'])
Z([3,'user-nick-name'])
Z([[2,'!'],[[7],[3,'memberId']]])
Z([[7],[3,'memberInfo']])
Z([[7],[3,'memberId']])
Z([[7],[3,'showLogin']])
Z([3,'wxLoginSuccess'])
Z([1,true])
Z([3,'cancelPop'])
Z([3,'bottom'])
Z([[7],[3,'showPop']])
Z([1,false])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_22_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_22_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_22=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_22=true;
var x=['./pages/mine/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_22_1()
var cDC=_n('view')
_rz(z,cDC,'class',0,e,s,gg)
var oFC=_n('view')
_rz(z,oFC,'class',1,e,s,gg)
var cGC=_v()
_(oFC,cGC)
if(_oz(z,2,e,s,gg)){cGC.wxVkey=1
}
var oHC=_v()
_(oFC,oHC)
if(_oz(z,3,e,s,gg)){oHC.wxVkey=1
}
cGC.wxXCkey=1
oHC.wxXCkey=1
_(cDC,oFC)
var hEC=_v()
_(cDC,hEC)
if(_oz(z,4,e,s,gg)){hEC.wxVkey=1
}
hEC.wxXCkey=1
_(r,cDC)
var fCC=_v()
_(r,fCC)
if(_oz(z,5,e,s,gg)){fCC.wxVkey=1
var lIC=_mz(z,'login-popup',['bind:loginSuccess',6,'showTop',1],[],e,s,gg)
_(fCC,lIC)
}
var aJC=_mz(z,'pop-up',['bind:hidden',8,'position',1,'show',2,'showTitle',3],[],e,s,gg)
_(r,aJC)
fCC.wxXCkey=1
fCC.wxXCkey=3
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_22();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/index.wxml'] = [$gwx_XC_22, './pages/mine/index.wxml'];else __wxAppCode__['pages/mine/index.wxml'] = $gwx_XC_22( './pages/mine/index.wxml' );
	;__wxRoute = "pages/mine/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/mine/index.js";define("pages/mine/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../utils/config"),t=require("../../utils/userInfo"),n=(require("../../utils/fetch"),require("../../utils/config"),require("../../utils/util"));Page({data:{picBaseUrl:e.picBaseUrl,showLogin:!1,explainShow:!1,phone:"0898-6666888",showPop:!1},onLoad:function(e){},onShow:function(){this.checkLogin(),this.getAppAccountInfo()},getAppAccountInfo:function(){var t=this,o=wx.getStorageSync("vcode");n.$http(e.urlPrefix+"/account/".concat(o,"/get"),{},"POST").then((function(e){200==parseInt(e.code)&&e.data&&t.setData({phone:e.data.serviceNumber})}))},checkLogin:function(){var e=wx.getStorageSync("memberId");e?(this.loadData(),this.setData({showLogin:!1,memberId:e})):this.setData({showLogin:!1,memberId:e,memberInfo:null})},loadData:function(){var t=this;n.loading();var o=wx.getStorageSync("vcode"),a=wx.getStorageSync("openId");n.$http(e.urlPrefix+"/member/".concat(o,"/getMobileByOpenId"),{openId:a},"POST").then((function(e){200==parseInt(e.code)&&(e.data?t.setData({memberInfo:e.data}):busUtilswx.showToast({title:e.msg})),n.hideLoading()})).catch((function(e){n.showToast(e.msg),n.hideLoading()}))},mineSet:function(e){wx.navigateTo({url:"../mineset/index"})},checkContactInfo:function(){wx.getStorageSync("memberId")?wx.navigateTo({url:"../contacts/index"}):(n.showToast("未登录，请登录"),this.setData({showLogin:!0}))},checkInvoice:function(){wx.getStorageSync("memberId")?wx.navigateTo({url:"../invoice/index"}):(n.showToast("未登录，请登录"),this.setData({showLogin:!0}))},makePhoneCall:function(){wx.hideTabBar({animation:!1}),this.setData({showPop:!0})},makeCall:function(e){var t=e.currentTarget.dataset.phone;wx.makePhoneCall({phoneNumber:t})},cancelPop:function(){this.setData({showPop:!1}),wx.showTabBar({animation:!1})},personNotice:function(){wx.navigateTo({url:"./passengerNotice/index"})},wxLoginSuccess:function(){var e=this,n=wx.getStorageSync("memberId");n&&(0,t.getOpenid)().then((function(t){t.openId&&(e.setData({showLogin:!1,memberId:n}),e.loadData())}))},getForLogion:function(){this.setData({showLogin:!0})}});
},{isPage:true,isComponent:true,currentFile:'pages/mine/index.js'});require("pages/mine/index.js");$gwx_XC_23=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'user-nick-name'])
Z([[2,'!'],[[7],[3,'memberId']]])
Z([[7],[3,'memberInfo']])
Z([[7],[3,'showLogin']])
Z([3,'wxLoginSuccess'])
Z([3,'cancelPop'])
Z([3,'bottom'])
Z([[7],[3,'showPop']])
Z([1,false])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_23=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_23=true;
var x=['./pages/mine/mineContact/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_23_1()
var bMC=_n('view')
_rz(z,bMC,'class',0,e,s,gg)
var oNC=_v()
_(bMC,oNC)
if(_oz(z,1,e,s,gg)){oNC.wxVkey=1
}
var xOC=_v()
_(bMC,xOC)
if(_oz(z,2,e,s,gg)){xOC.wxVkey=1
}
oNC.wxXCkey=1
xOC.wxXCkey=1
_(r,bMC)
var eLC=_v()
_(r,eLC)
if(_oz(z,3,e,s,gg)){eLC.wxVkey=1
var oPC=_n('login-popup')
_rz(z,oPC,'bind:loginSuccess',4,e,s,gg)
_(eLC,oPC)
}
var fQC=_mz(z,'pop-up',['bind:hidden',5,'position',1,'show',2,'showTitle',3],[],e,s,gg)
_(r,fQC)
eLC.wxXCkey=1
eLC.wxXCkey=3
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_23();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/mineContact/index.wxml'] = [$gwx_XC_23, './pages/mine/mineContact/index.wxml'];else __wxAppCode__['pages/mine/mineContact/index.wxml'] = $gwx_XC_23( './pages/mine/mineContact/index.wxml' );
	;__wxRoute = "pages/mine/mineContact/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/mine/mineContact/index.js";define("pages/mine/mineContact/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../utils/config"),t=require("../../../utils/userInfo"),o=(require("../../../utils/config"),require("../../../utils/util"));Page({data:{picBaseUrl:e.picBaseUrl,showLogin:!1,showPop:!1,phone:"0898-6666888"},aboutUs:function(){},onShow:function(){var e=wx.getStorageSync("memberId");e?(this.loadData(),this.setData({showLogin:!1,memberId:e})):this.setData({showLogin:!1,memberId:e,memberInfo:null})},loadData:function(){var t=this;o.loading();var a=wx.getStorageSync("vcode"),n=wx.getStorageSync("openId");o.$http(e.urlPrefix+"/member/".concat(a,"/getMobileByOpenId"),{openId:n},"POST").then((function(e){200==parseInt(e.code)&&(e.data?t.setData({memberInfo:e.data}):busUtilswx.showToast({title:e.msg})),o.hideLoading()})).catch((function(e){o.showToast(e.msg),o.hideLoading()}))},makeContact:function(){this.setData({showPop:!0})},getForLogion:function(){this.setData({showLogin:!0})},wxLoginSuccess:function(){var e=this,o=wx.getStorageSync("memberId");o&&(0,t.getOpenid)().then((function(t){t.openId&&(e.setData({showLogin:!1,memberId:o}),wx.navigateBack())}))},cancelPop:function(){this.setData({showPop:!1})},makePhneCall:function(e){var t=e.currentTarget.dataset.phone;wx.makePhoneCall({phoneNumber:t})}});
},{isPage:true,isComponent:true,currentFile:'pages/mine/mineContact/index.js'});require("pages/mine/mineContact/index.js");$gwx_XC_24=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var x=['./pages/mine/passengerNotice/index.wxml'];d_[x[0]]={}
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_24();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/passengerNotice/index.wxml'] = [$gwx_XC_24, './pages/mine/passengerNotice/index.wxml'];else __wxAppCode__['pages/mine/passengerNotice/index.wxml'] = $gwx_XC_24( './pages/mine/passengerNotice/index.wxml' );
	;__wxRoute = "pages/mine/passengerNotice/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/mine/passengerNotice/index.js";define("pages/mine/passengerNotice/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../../utils/config"),require("../../../utils/userInfo");var t=require("../../../utils/fetch"),e=require("../../../utils/config");Page({data:{tabList:[{name:"购票须知",orderStatus:1},{name:"取消规则",orderStatus:2}],tabIndex:0},onLoad:function(t){},onShow:function(){this.getCancelConfig()},getCancelConfig:function(){var a=this,n=wx.getStorageSync("vcode");(0,t.fetch)({url:"".concat(e.urlPrefix,"/cancelConfig/").concat(n,"/get"),method:"POST",data:{vcode:n},complete:function(t){var e=t.data;"200"===e.code&&e.data&&a.setData({cancelConfig:e.data})}})},handleSelectTab:function(t){var e=t.currentTarget.dataset.index;e!==this.data.tabIndex&&this.setData({tabIndex:e})}});
},{isPage:true,isComponent:true,currentFile:'pages/mine/passengerNotice/index.js'});require("pages/mine/passengerNotice/index.js");$gwx_XC_25=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[2,'&&'],[[7],[3,'agreements']],[[2,'>'],[[6],[[7],[3,'agreements']],[3,'length']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_25=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_25=true;
var x=['./pages/mineset/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_25_1()
var oTC=_v()
_(r,oTC)
if(_oz(z,0,e,s,gg)){oTC.wxVkey=1
}
oTC.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_25();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mineset/index.wxml'] = [$gwx_XC_25, './pages/mineset/index.wxml'];else __wxAppCode__['pages/mineset/index.wxml'] = $gwx_XC_25( './pages/mineset/index.wxml' );
	;__wxRoute = "pages/mineset/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/mineset/index.js";define("pages/mineset/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/objectSpread2"),t=require("../../utils/util"),a=require("../../utils/config");Page({data:{picBaseUrl:a.picBaseUrl},onLoad:function(e){},onShow:function(){this.loadData();var e=wx.getStorageSync("memberId");this.setData({memberId:e})},loadData:function(){var e=this,n=wx.getStorageSync("vcode");t.loading(),t.$http(a.urlPrefix+"/agreementSetting/".concat(n,"/get"),{},"POST").then((function(a){200==parseInt(a.code)&&(a.data?e.setData({agreements:a.data}):busUtilswx.showToast({title:a.msg})),t.hideLoading()})).catch((function(e){t.showToast(e.msg),t.hideLoading()}))},checkAgreement:function(t){var a=t.currentTarget.dataset.agreement;wx.navigateTo({url:"/pages/agreement/agreement",success:function(t){t.eventChannel.emit("agreementData",e({},a))}})},personalCollectList:function(){wx.navigateTo({url:"/pages/funaggrement/personCollect/index"})},alterPhoneNum:function(){wx.navigateTo({url:"/pages/loginPhone/loginPhone?alter=true"})},logOut:function(){wx.clearStorage(),wx.navigateBack()},BackPrivate:function(){t.alert("如果您撤回隐私协议，则无法体验小程序的全部功能。确定要撤回隐私协议吗？","提示",!0,"取消","",(function(e){wx.clearStorage(),wx.switchTab({url:"/pages/home/home"})}))},clearStrorage:function(){t.alert("清除缓存后，需要重新登录。确定要清除吗","提示",!0,"取消","",(function(e){wx.clearStorage(),wx.switchTab({url:"/pages/home/home"})}))},resignAccount:function(){wx.navigateTo({url:"/pages/resignAccount/index"})},checkVersion:function(){var e=wx.getAccountInfoSync().miniProgram.version,a=wx.getStorageSync("appInfo");e?t.alert(a.minAppName+"小程序 版本："+e,"版本号"):t.alert("当前非正式环境，无法获取")},checkThirdShareList:function(){wx.navigateTo({url:"../funaggrement/thirdShareInfo/index"})}});
},{isPage:true,isComponent:true,currentFile:'pages/mineset/index.js'});require("pages/mineset/index.js");$gwx_XC_26=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'touchEnd'])
Z([3,'touchMove'])
Z([3,'touchStart'])
Z([3,'width:100%;'])
Z([3,'card'])
Z([3,'top approw'])
Z([3,'appcolumn'])
Z([3,'align-items: flex-start;'])
Z([[2,'||'],[[2,'!='],[[6],[[7],[3,'order']],[3,'orderStatus']],[1,5]],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'order']],[3,'orderStatus']],[1,5]],[[2,'=='],[[6],[[7],[3,'order']],[3,'tripStatus']],[1,3]]]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'order']],[3,'orderStatus']],[1,5]],[[2,'!='],[[6],[[7],[3,'order']],[3,'tripStatus']],[1,3]]])
Z(z[9])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'order']],[3,'orderStatus']],[1,1]],[[2,'||'],[[2,'!='],[[6],[[7],[3,'order']],[3,'orderStatus']],[1,5]],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'order']],[3,'orderStatus']],[1,5]],[[2,'=='],[[6],[[7],[3,'order']],[3,'tripStatus']],[1,3]]]]])
Z([[2,'=='],[[6],[[7],[3,'order']],[3,'orderStatus']],[1,1]])
Z([3,'apprightrow'])
Z([3,'align-items: center;'])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[2,'!'],[[7],[3,'cancelConfig']]]],[[2,'!'],[[2,'!'],[[6],[[7],[3,'cancelConfig']],[3,'itemList']]]]],[[2,'>'],[[6],[[6],[[7],[3,'cancelConfig']],[3,'itemList']],[3,'length']],[1,0]]])
Z([[2,'&&'],[[2,'!'],[[2,'!'],[[7],[3,'cancelConfig']]]],[[2,'!'],[[2,'!'],[[6],[[7],[3,'cancelConfig']],[3,'agreement']]]]])
Z([[2,'&&'],[[2,'>'],[[6],[[7],[3,'order']],[3,'orderStatus']],[1,3]],[[2,'!='],[[6],[[7],[3,'order']],[3,'orderStatus']],[1,7]]])
Z([3,'detail'])
Z([[2,'=='],[[6],[[7],[3,'order']],[3,'tripType']],[1,1]])
Z([[2,'!='],[[6],[[7],[3,'order']],[3,'tripType']],[1,1]])
Z([[2,'!'],[[2,'!'],[[6],[[7],[3,'order']],[3,'flightNumber']]]])
Z([[7],[3,'cancelConfig']])
Z([[7],[3,'showTicketExplain']])
Z([[7],[3,'showType']])
Z([[6],[[6],[[7],[3,'statusEnum']],[[6],[[7],[3,'order']],[3,'orderStatus']]],[3,'button']])
Z(z[25])
Z([3,'approw'])
Z(z[3])
Z([[2,'=='],[[6],[[6],[[7],[3,'statusEnum']],[[6],[[7],[3,'order']],[3,'orderStatus']]],[3,'buttonType']],[1,1]])
Z(z[29])
Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'statusEnum']],[[6],[[7],[3,'order']],[3,'orderStatus']]],[3,'buttonType']],[1,2]],[[2,'=='],[[6],[[6],[[7],[3,'statusEnum']],[[6],[[7],[3,'order']],[3,'orderStatus']]],[3,'buttonType']],[1,7]]])
Z([[2,'=='],[[6],[[6],[[7],[3,'statusEnum']],[[6],[[7],[3,'order']],[3,'orderStatus']]],[3,'buttonType']],[1,3]])
Z([[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'statusEnum']],[[6],[[7],[3,'order']],[3,'orderStatus']]],[3,'buttonType']],[1,4]],[[2,'||'],[[2,'&&'],[[2,'!'],[[2,'!'],[[6],[[7],[3,'order']],[3,'commentInfoList']]]],[[2,'<='],[[6],[[6],[[7],[3,'order']],[3,'commentInfoList']],[3,'length']],[1,0]]],[[2,'!'],[[2,'!'],[[2,'!'],[[6],[[7],[3,'order']],[3,'commentInfoList']]]]]]])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'statusEnum']],[[6],[[7],[3,'order']],[3,'orderStatus']]],[3,'buttonType']],[1,4]],[[2,'!'],[[2,'!'],[[6],[[7],[3,'order']],[3,'commentInfoList']]]]],[[2,'>'],[[6],[[6],[[7],[3,'order']],[3,'commentInfoList']],[3,'length']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_26_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_26_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_26=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_26=true;
var x=['./pages/orderDetail/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_26_1()
var lWC=_mz(z,'view',['bindtouchend',0,'bindtouchmove',1,'bindtouchstart',1,'style',2],[],e,s,gg)
var aXC=_n('view')
_rz(z,aXC,'class',4,e,s,gg)
var eZC=_n('view')
_rz(z,eZC,'class',5,e,s,gg)
var b1C=_mz(z,'view',['class',6,'style',1],[],e,s,gg)
var o2C=_v()
_(b1C,o2C)
if(_oz(z,8,e,s,gg)){o2C.wxVkey=1
}
var x3C=_v()
_(b1C,x3C)
if(_oz(z,9,e,s,gg)){x3C.wxVkey=1
}
var o4C=_v()
_(b1C,o4C)
if(_oz(z,10,e,s,gg)){o4C.wxVkey=1
}
var f5C=_v()
_(b1C,f5C)
if(_oz(z,11,e,s,gg)){f5C.wxVkey=1
}
var c6C=_v()
_(b1C,c6C)
if(_oz(z,12,e,s,gg)){c6C.wxVkey=1
}
o2C.wxXCkey=1
x3C.wxXCkey=1
o4C.wxXCkey=1
f5C.wxXCkey=1
c6C.wxXCkey=1
_(eZC,b1C)
var h7C=_mz(z,'view',['class',13,'style',1],[],e,s,gg)
var o8C=_v()
_(h7C,o8C)
if(_oz(z,15,e,s,gg)){o8C.wxVkey=1
}
var c9C=_v()
_(h7C,c9C)
if(_oz(z,16,e,s,gg)){c9C.wxVkey=1
}
o8C.wxXCkey=1
c9C.wxXCkey=1
_(eZC,h7C)
_(aXC,eZC)
var tYC=_v()
_(aXC,tYC)
if(_oz(z,17,e,s,gg)){tYC.wxVkey=1
}
var o0C=_n('view')
_rz(z,o0C,'class',18,e,s,gg)
var lAD=_v()
_(o0C,lAD)
if(_oz(z,19,e,s,gg)){lAD.wxVkey=1
}
var aBD=_v()
_(o0C,aBD)
if(_oz(z,20,e,s,gg)){aBD.wxVkey=1
}
var tCD=_v()
_(o0C,tCD)
if(_oz(z,21,e,s,gg)){tCD.wxVkey=1
}
lAD.wxXCkey=1
aBD.wxXCkey=1
tCD.wxXCkey=1
_(aXC,o0C)
tYC.wxXCkey=1
_(lWC,aXC)
_(r,lWC)
var eDD=_mz(z,'ExplainDetail',['cancelConfig',22,'show',1,'showType',2],[],e,s,gg)
_(r,eDD)
var oVC=_v()
_(r,oVC)
if(_oz(z,25,e,s,gg)){oVC.wxVkey=1
var bED=_v()
_(oVC,bED)
if(_oz(z,26,e,s,gg)){bED.wxVkey=1
var oFD=_mz(z,'view',['class',27,'style',1],[],e,s,gg)
var xGD=_v()
_(oFD,xGD)
if(_oz(z,29,e,s,gg)){xGD.wxVkey=1
}
var oHD=_v()
_(oFD,oHD)
if(_oz(z,30,e,s,gg)){oHD.wxVkey=1
}
var fID=_v()
_(oFD,fID)
if(_oz(z,31,e,s,gg)){fID.wxVkey=1
}
var cJD=_v()
_(oFD,cJD)
if(_oz(z,32,e,s,gg)){cJD.wxVkey=1
}
var hKD=_v()
_(oFD,hKD)
if(_oz(z,33,e,s,gg)){hKD.wxVkey=1
}
var oLD=_v()
_(oFD,oLD)
if(_oz(z,34,e,s,gg)){oLD.wxVkey=1
}
xGD.wxXCkey=1
oHD.wxXCkey=1
fID.wxXCkey=1
cJD.wxXCkey=1
hKD.wxXCkey=1
oLD.wxXCkey=1
_(bED,oFD)
}
bED.wxXCkey=1
}
oVC.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_26();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/orderDetail/index.wxml'] = [$gwx_XC_26, './pages/orderDetail/index.wxml'];else __wxAppCode__['pages/orderDetail/index.wxml'] = $gwx_XC_26( './pages/orderDetail/index.wxml' );
	;__wxRoute = "pages/orderDetail/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/orderDetail/index.js";define("pages/orderDetail/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t,e=require("../../@babel/runtime/helpers/interopRequireDefault"),o=e(require("../../utils/util")),a=e(require("../../utils/AMap.js")),n=e(require("../../utils/manba")),i=require("../../utils/config");Page({data:{picBaseUrl:i.picBaseUrl,markers:[],showTicketExplain:0,polylines:[],startY:0,startX:0,dis:0,coverTransform:0,coverTransition:"",statusEnum:{1:{color:"#FF7615",type:"待支付",name:"订单待支付",title:"请在5分钟内完成支付",button:!0,buttonType:1},2:{color:"#999999",type:"已取消",name:"你主动取消",title:"取消",button:!0,buttonType:2},3:{color:"#999999",type:"已支付",name:"正在为您派车",title:"请您耐心等待~",button:!0,buttonType:3},4:{color:"#999999",type:"已派单",name:"已为您派车",title:"请等待出行~",button:!0,buttonType:3},5:{color:"#999999",type:"出行中",name:"行程中",title:"请系好安全带~",button:!1},6:{color:"#999999",type:"已完成",name:"行程已结束",title:"欢迎下次使用~",button:!0,buttonType:4},7:{color:"#999999",type:"已取消",name:"商家取消",title:"取消",button:!0,buttonType:2},8:{color:"#999999",type:"服务完成",name:"行程已结束",title:"欢迎下次使用~",button:!0,buttonType:4}},order:{},vehicle:{},oldTime:480,time:480,timeStr:"8分0秒",cancelTime:0,showType:!1,cancelConfig:"",showHeight:!1},onLoad:function(t){var e=wx.getSystemInfoSync(),a=t.orderNo;this.setData({orderNo:a,systemInfo:e}),this.getAccount(),this.getPaySetting(),this.getCancelConfig(),o.default.loading()},showCancelExplain:function(){this.setData({showTicketExplain:!0,showType:!1})},getPolyline:function(t){var e=this,o=this.data,n=o.polylines,i=o.drivingSteps;n||(n=e.buildPolyLine(t),this.setData({polylines:n})),i||a.default.getDrivingRoute({origin:"".concat(t.startStationLon,",").concat(t.startStationLat),destination:"".concat(t.endStationLon,",").concat(t.endStationLat),success:function(t){var o=[];if(t.paths&&t.paths[0]&&t.paths[0].steps)for(var a=t.paths[0].steps,n=0;n<a.length;n++)for(var i=a[n].polyline.split(";"),r=0;r<i.length;r++)o.push({longitude:parseFloat(i[r].split(",")[0]),latitude:parseFloat(i[r].split(",")[1])});o.length>0&&e.setData({drivingSteps:a,polylines:[{points:o,color:"#009BC5",zIndex:777,width:5,arrowLine:!0}]})},fail:function(t){console.log(t)}})},showUserExplain:function(){this.setData({showTicketExplain:!0,showType:!0})},showTicketExplain:function(){this.setData({showTicketExplain:!this.data.showTicketExplain})},touchStart:function(t){this.setData({startY:t.changedTouches[0].clientY,startX:t.changedTouches[0].clientX,dis:0,coverTransition:""})},touchEnd:function(t){console.log(t);var e=this.data.startY;t.changedTouches[0].clientY-e<=0?this.setData({showHeight:!1,coverTransform:0}):this.setData({showHeight:!0,coverTransform:0})},touchMove:function(t){var e=this.data,o=e.startY,a=e.systemInfo,n=(e.coverTransform,e.showHeight),i=t.changedTouches[0].clientY-o;!n&&i>a.windowHeight-500?(i=a.windowHeight-500,this.setData({coverTransform:i})):!n&&i>0?this.setData({coverTransform:i}):n&&i<=500-a.windowHeight?(i=500-a.windowHeight,this.setData({coverTransform:i})):n&&i<=0&&this.setData({coverTransform:i}),console.log(i)},toPhone:function(){var t=this.data.order;t.driverMobile&&wx.makePhoneCall({phoneNumber:t.driverMobile})},toKefu:function(){var t=this.data.account;wx.makePhoneCall({phoneNumber:t&&t.serviceNumber?t.serviceNumber:"0898-6666888"})},bookClick:function(){wx.reLaunch({url:"/pages/home/home"})},assessClick:function(){var t,e=this.data.order;(8==e.orderStatus||6==e.orderStatus)&&e.commentInfoList&&e.commentInfoList.length>0?(t=e.commentInfoList[0],wx.navigateTo({url:"/pages/assess/index?orderNo=".concat(e.orderNo,"&assess=").concat(encodeURIComponent(JSON.stringify(t)))})):wx.navigateTo({url:"/pages/assess/index?orderNo=".concat(e.orderNo)})},showTime:function(){var t=this,e=this.data,o=e.time,a=e.timeStr,n=e.cancelTime,i=e.order;setTimeout((function(){console.log("---showTime---"),i&&i.orderStatus&&1!=i.orderStatus||(i&&i.orderStatus&&o-n<=0?t.cancelSubmit():(o=parseInt(o)-1,a=parseInt((o-n)/60)+"分"+parseInt((o-n)%60)+"秒",t.setData({time:o,timeStr:a}),t.showTime()))}),1e3)},getVehicle:function(){var t=this,e=this.data,a=e.order,n=e.markers;if(5==a.orderStatus){var r=wx.getStorageSync("vcode");return new Promise((function(e,c){console.log(wx.getStorageSync("vcode")),o.default.$http(i.openApi+"/order/".concat(r,"/mobile/driverVehicleInfo"),{vcode:r,memberId:wx.getStorageSync("memberId"),openId:wx.getStorageSync("openId"),orderNo:a.orderNo},"GET").then((function(e){"200"==e.code?(e.data.driverLocation&&3==n.length?n[2]=t.buildCarMarker(e.data.driverLocation):e.data.driverLocation&&2==n.length&&n.push(t.buildCarMarker(e.data.driverLocation)),t.setData({vehicle:e.data,markers:n})):o.default.hideLoading(),o.default.hideLoading()})).catch((function(t){c(t),o.default.hideLoading(),console.error("request api.queryLinkerNew error ",t)}))}))}},getPaySetting:function(){var t=this,e=this,a=wx.getStorageSync("vcode");return new Promise((function(n,r){o.default.loading(),console.log(wx.getStorageSync("vcode")),o.default.$http(i.openApi+"/account/".concat(a,"/getAutoCancelTime"),{vcode:a}).then((function(a){if("200"==a.code){var n=a.data;n||(n=5);var i=wx.getStorageSync(t.data.orderNo+"createDate");console.log(i),i?i=new Date(i):(i=new Date,wx.setStorageSync(t.data.orderNo+"createDate",i)),console.log(i);var r=new Date,c=parseInt(r-i)/1e3;e.setData({oldTime:60*parseInt(n),time:60*parseInt(n),timeStr:n+"分0秒",cancelTime:c}),e.showTime()}else o.default.hideLoading();o.default.hideLoading()})).catch((function(t){r(t),o.default.hideLoading(),console.error("request api.queryLinkerNew error ",t)}))}))},getCancelConfig:function(){var t=this,e=wx.getStorageSync("vcode");return new Promise((function(a,n){o.default.loading(),console.log(wx.getStorageSync("vcode")),o.default.$http(i.openApi+"/cancelConfig/".concat(e,"/get"),{vcode:e}).then((function(e){if("200"==e.code){var a=e.data;t.setData({cancelConfig:a})}else o.default.hideLoading();o.default.hideLoading()})).catch((function(t){n(t),o.default.hideLoading(),console.error("request api.queryLinkerNew error ",t)}))}))},getAccount:function(){var t=this,e=wx.getStorageSync("vcode");return new Promise((function(a,n){o.default.loading(),console.log(wx.getStorageSync("vcode")),o.default.$http(i.openApi+"/account/".concat(e,"/get"),{vcode:e}).then((function(e){"200"==e.code?t.setData({account:e.data}):o.default.hideLoading(),o.default.hideLoading()})).catch((function(t){n(t),o.default.hideLoading(),console.error("request api.queryLinkerNew error ",t)}))}))},payClick:function(){var t=this,e=wx.getStorageSync("vcode"),a=this.data.order;return new Promise((function(n,r){o.default.loading(),console.log(wx.getStorageSync("vcode")),o.default.$http(i.openApi+"/weChatPay/getSign",{vcode:e,memberId:wx.getStorageSync("memberId"),openId:wx.getStorageSync("openId"),orderNo:a.orderNo,source:"1",tradeType:"JSAPI"}).then((function(e){"200"==e.code?wx.requestPayment({timeStamp:e.data.timeStamp,nonceStr:e.data.nonceStr,package:e.data.packageStr,signType:e.data.signType,paySign:e.data.paySign,success:function(e){o.default.loading(),t.getOrderDetail(a.orderNo)},fail:function(e){console.log(e),t.goOrderDetail(a.orderNo)}}):o.default.hideLoading(),o.default.hideLoading()})).catch((function(t){r(t),o.default.hideLoading(),console.error("request api.queryLinkerNew error ",t)}))}))},cancelClick1:function(){var t=this;wx.showModal({content:"确定要取消当前订单吗？",title:"",cancelColor:"#999999",confirmText:"再想想",cancelText:"确定",confirmColor:"#009BC5",success:function(e){e.confirm||(o.default.loading(),t.cancelSubmit())}})},cancelSubmit:function(){var t=this.data.order,e=this,a=wx.getStorageSync("vcode");return new Promise((function(n,r){console.log(wx.getStorageSync("vcode")),o.default.$http(i.openApi+"/order/".concat(a,"/mobile/cancel/user"),{cancelReason:"其他",openId:wx.getStorageSync("openId"),vcode:a,memberId:wx.getStorageSync("memberId"),orderNo:t.orderNo}).then((function(a){o.default.hideLoading(),"200"==a.code?(o.default.hideLoading(),wx.showToast({title:"取消订单成功",icon:"none"})):(o.default.hideLoading(),wx.showToast({title:"取消失败",icon:"none"})),e.getOrderDetail(t.orderNo)})).catch((function(t){r(t),o.default.hideLoading(),console.error("request api.queryLinkerNew error ",t)}))}))},cancelClick:function(){var t=this.data.order;wx.navigateTo({url:"/pages/cancel/index?orderNo=".concat(t.orderNo)})},getOrderDetail:function(e){t&&clearTimeout(t);var a=this,r=wx.getStorageSync("vcode");return new Promise((function(c,d){console.log(wx.getStorageSync("vcode")),o.default.$http(i.openApi+"/order/".concat(r,"/detail/").concat(e),{}).then((function(i){if("200"==i.code){var r=a.buildMarker(i.data),c=(0,n.default)(i.data.startTime),d=(0,n.default)(i.data.lastStartTime),s=c.distance(),l=0===s?"今天hh:mm":1===s?"明天hh:mm":2===s?"后天hh:mm":"MM月DD日 hh:mm",u=d.distance(),h=0===u?"今天hh:mm":1===u?"明天hh:mm":2===s?"后天hh:mm":"MM月DD日 hh:mm";console.log(l),i.data.startTimeStr=c.format(l),i.data.lastStartTimeStr=d.format(h),i.data.cancelTimeStr=(0,n.default)(i.data.cancelTime).format("MM月DD日 hh:mm"),a.setData({order:i.data,markers:r}),a.getPolyline(i.data),o.default.hideLoading(),a.includePoints(),t=setTimeout((function(){2!=i.data.orderStatus&&7!=i.data.orderStatus&&6!=i.data.orderStatus&&8!=i.data.orderStatus&&a.getOrderDetail(e)}),4e3),a.getVehicle()}else o.default.hideLoading();o.default.hideLoading()})).catch((function(t){d(t),o.default.hideLoading(),console.error("request api.queryLinkerNew error ",t)}))}))},buildPolyLine:function(t){return[{points:[{longitude:t.startStationLon,latitude:t.startStationLat},{longitude:t.endStationLon,latitude:t.endStationLat}],color:"#009BC5",zIndex:777,width:3,arrowLine:!0}]},buildCarMarker:function(t){return this.includePoints({longitude:t.lat,latitude:t.lon}),{id:2,latitude:t.lat,longitude:t.lon,iconPath:i.picBaseUrl+"/ic_showbus.png",width:30,height:30,anchor:{x:.5,y:.5},title:"车辆",zIndex:100}},buildMarker:function(t){return[{id:0,latitude:t.startStationLat,longitude:t.startStationLon,iconPath:i.picBaseUrl+"/ic_dizhi_qidian.png",width:32,height:32,anchor:{x:.5,y:.5},title:t.startLatitudeName,zIndex:100},{id:1,latitude:t.endStationLat,longitude:t.endStationLon,iconPath:i.picBaseUrl+"/ic_dizhi_zhongdian.png",width:32,height:32,anchor:{x:.5,y:.5},title:t.endLatitudeName,zIndex:100}]},onReady:function(){this.mapCtx=wx.createMapContext("myMap"),this.includePoints()},includePoints:function(t){var e=this.data.order;if(e&&e.startStationLon&&this.mapCtx){var o=[{longitude:e.startStationLon,latitude:e.startStationLat},{longitude:e.endStationLon,latitude:e.endStationLat}];t&&o.push(t),this.mapCtx.includePoints({points:o,padding:[60,20,60,20]})}},onShow:function(){this.getOrderDetail(this.data.orderNo)},onHide:function(){t&&clearTimeout(t)},onUnload:function(){t&&clearTimeout(t)},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/orderDetail/index.js'});require("pages/orderDetail/index.js");$gwx_XC_27=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[7],[3,'memberId']])
Z([3,'handleFilterPopup'])
Z([3,'bottom'])
Z([[7],[3,'showFilter']])
Z([3,'筛选'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_27_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_27_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_27=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_27=true;
var x=['./pages/orderList/orderList.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_27_1()
var oND=_v()
_(r,oND)
if(_oz(z,0,e,s,gg)){oND.wxVkey=1
var lOD=_mz(z,'Popup',['bind:hidden',1,'position',1,'show',2,'title',3],[],e,s,gg)
_(oND,lOD)
}
else{oND.wxVkey=2
}
oND.wxXCkey=1
oND.wxXCkey=3
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_27();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/orderList/orderList.wxml'] = [$gwx_XC_27, './pages/orderList/orderList.wxml'];else __wxAppCode__['pages/orderList/orderList.wxml'] = $gwx_XC_27( './pages/orderList/orderList.wxml' );
	;__wxRoute = "pages/orderList/orderList";__wxRouteBegin = true;__wxAppCurrentFile__="pages/orderList/orderList.js";define("pages/orderList/orderList.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../@babel/runtime/helpers/objectSpread2"),r=e(require("../../utils/config")),a=e(require("../../utils/util")),i=require("../../utils/fetch"),o=require("../../utils/userInfo"),n=require("../../utils/typeSetting"),d=e(require("../../utils/manba")),s=!1,l=null,c={pageIndex:1,pageSize:10},u=[];Page({data:{appvcodeCode:"",memberId:"",openId:"",showLogin:!1,tabList:[{name:"待出行",orderStatus:1},{name:"待付款",orderStatus:2},{name:"全部订单",orderStatus:0}],tabIndex:2,orderList:[],filterList:[],selectFilterIndex:0,selectFilterIndexCopy:0,showFilter:!1,isFinished:!1},onLoad:function(e){var t=this;(0,o.getOpenid)().then((function(e){t.setData({openId:e.openId,vcode:e.vcode})}))},onShow:function(){var e=this;(0,o.getMemberId)((function(t){e.setData({memberId:t})}),(function(){e.setData({memberId:""})}))},loginFn:function(){(0,o.toLoginPage)()},onHide:function(){this.cleanTimmer()},onReachBottom:function(){this.data.isFinished||this.queryOrderList(c.pageIndex)},onPullDownRefresh:function(){this.queryOrderList()},queryOrderList:function(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(!s){s=!0,this.setData({isFinished:!1}),this.cleanTimmer(),a.default.loading(),c.pageIndex=o;var l=this.data,u=l.tabIndex,f=l.appCode,m=l.tabList,h=l.memberId,p=l.businessTypes,I=m[u],g=t({appCode:f,memberId:h,businessTypes:p,orderStatus:I.orderStatus},c);(0,i.fetch)({url:"".concat(r.default.urlPrefix,"/orderInfo/mylist"),method:"POST",data:g,complete:function(r){a.default.hideLoading(),s=!1;var i=r.data;if(i&&"200"===i.code&&i.data&&i.data.records){var l=i.data,u=l.records,f=l.pages,m=e.data.orderList,h=u.map((function(e){var r=e.orderDisplayStatus,a=(e.cancelSecond,e.bookTime),i=e.departureDateTime;return t(t({},e),{},{orderStatusName:n.orderStatusSetting[r],bookTimeFormat:a?(0,d.default)(a).format("MM-DD 周w HH:mm:ss"):"",departureDateFormat:i?(0,d.default)(i).format("MM-DD 周w HH:mm:ss"):"",leftSecondFormat:"0秒"})}));m=1===o?h:m.concat(h),e.setData({orderList:m}),c.pageIndex++,c.pageIndex>f&&e.setData({isFinished:!0}),e.calcLeftTime()}else a.default.alert(i.msg)}})}},handleSelectTab:function(e){var t=e.currentTarget.dataset.index;t!==this.data.tabIndex&&(this.setData({tabIndex:t}),this.queryOrderList())},handleFilterPopup:function(){this.setData({showFilter:!this.data.showFilter,selectFilterIndex:this.data.selectFilterIndexCopy})},selectFilter:function(e){var t=e.currentTarget.dataset.index;t!==this.data.selectFilterIndex&&this.setData({selectFilterIndex:t})},clearFilter:function(){this.setData({selectFilterIndexCopy:0}),0!==this.data.selectFilterIndex&&(this.setData({businessTypes:u,selectFilterIndex:0}),this.queryOrderList()),this.handleFilterPopup()},submitFilter:function(){var e=this.data,t=e.filterList,r=e.selectFilterIndex,a=t[r],i=0===r?u:[a.businessType];this.setData({selectFilterIndexCopy:r,businessTypes:i}),this.queryOrderList(),this.handleFilterPopup()},deleteOrder:function(e){var t=this,r=e.currentTarget.dataset.orderno;wx.showModal({title:"删除订单记录不等于取消预订",content:"删除后订单记录无法还原和查询确定删除吗？",cancelText:"删除订单",confirmText:"点错了",cancelColor:"#3D8FFF",confirmColor:"#3D8FFF",success:function(e){e.confirm?console.log("用户点击确定"):e.cancel&&t.deleteOrderApi(r)}})},deleteOrderApi:function(e){var t=this;a.default.loading();var o=this.data,n=o.openId,d=o.appCode,s=o.memberId;(0,i.fetch)({url:"".concat(r.default.urlPrefix,"/orderInfo/delete"),method:"POST",data:{appCode:d,memberId:s,openId:n,orderNo:e},complete:function(e){a.default.hideLoading();var r=e.data;r&&"200"===r.code?t.queryOrderList():a.default.alert(r&&r.msg||"删除失败，请稍后再试")}})},goHome:function(){wx.switchTab({url:"/pages/home/home"})},goOrderDetail:function(e){var t=e.currentTarget.dataset.item,r=0===t.businessType?"/pages/carline/orderDetail/orderDetail?orderNo=".concat(t.orderNo):"/pages/customline/orderDetail/orderDetail?orderNo=".concat(t.orderNo);wx.navigateTo({url:r})},getTime:function(){return new Promise((function(e,t){(0,i.fetch)({url:"".concat(r.default.urlPrefix,"/orderInfo/gettime"),method:"GET",complete:function(r){var a=r.data;a&&"200"===a.code&&a.data?e(a.data):t(a)}})}))},calcLeftTime:function(){var e=this;this.getTime().then((function(t){var r=t;!function(){var t=e.data.orderList.filter((function(e){var t=e.cancelSecond-((0,d.default)(r).time()-(0,d.default)(e.bookTime).time())/1e3;return 0===e.orderDisplayStatus&&t>=0}));if(t&&t.length){var i=e.data.orderList;i.forEach((function(t,o){if(0===t.orderDisplayStatus){var n=t.cancelSecond-((0,d.default)(r).time()-(0,d.default)(t.bookTime).time())/1e3;if(n>=0){var s=a.default.formatSeconds(n,!0);i[o].leftSecondFormat=s,e.setData({orderList:i})}}}))}}()}))},cancelOrderApi:function(e){var t=this,o=this.data,n=o.appCode,d=o.openId,s=o.memberId;(0,i.fetch)({url:"".concat(r.default.urlPrefix,"/customTraffic/order/cancelOrder"),method:"POST",data:{appCode:n,openId:d,orderNo:e,memberId:s},complete:function(e){var r=e.data;r&&"200"===r.code&&r.data?t.queryOrderList():a.default.alert(e.data.msg)}})},cleanTimmer:function(){l&&clearTimeout(l),l=null}});
},{isPage:true,isComponent:true,currentFile:'pages/orderList/orderList.js'});require("pages/orderList/orderList.js");$gwx_XC_28=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[2,'!'],[[7],[3,'showToLogin']]])
Z([[2,'>'],[[6],[[7],[3,'orderList']],[3,'length']],[1,0]])
Z([[2,'&&'],[[7],[3,'isFinished']],[[2,'<='],[[6],[[7],[3,'orderList']],[3,'length']],[1,0]]])
Z([[7],[3,'showToLogin']])
Z([[7],[3,'showLogin']])
Z([3,'wxLoginSuccess'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_28_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_28_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_28=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_28=true;
var x=['./pages/orderList1/orderList.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_28_1()
var tQD=_v()
_(r,tQD)
if(_oz(z,0,e,s,gg)){tQD.wxVkey=1
var oTD=_n('view')
var xUD=_v()
_(oTD,xUD)
if(_oz(z,1,e,s,gg)){xUD.wxVkey=1
}
var oVD=_v()
_(oTD,oVD)
if(_oz(z,2,e,s,gg)){oVD.wxVkey=1
}
xUD.wxXCkey=1
oVD.wxXCkey=1
_(tQD,oTD)
}
var eRD=_v()
_(r,eRD)
if(_oz(z,3,e,s,gg)){eRD.wxVkey=1
}
var bSD=_v()
_(r,bSD)
if(_oz(z,4,e,s,gg)){bSD.wxVkey=1
var fWD=_n('login-popup')
_rz(z,fWD,'bind:loginSuccess',5,e,s,gg)
_(bSD,fWD)
}
tQD.wxXCkey=1
eRD.wxXCkey=1
bSD.wxXCkey=1
bSD.wxXCkey=3
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_28();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/orderList1/orderList.wxml'] = [$gwx_XC_28, './pages/orderList1/orderList.wxml'];else __wxAppCode__['pages/orderList1/orderList.wxml'] = $gwx_XC_28( './pages/orderList1/orderList.wxml' );
	;__wxRoute = "pages/orderList1/orderList";__wxRouteBegin = true;__wxAppCurrentFile__="pages/orderList1/orderList.js";define("pages/orderList1/orderList.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault"),e=t(require("../../utils/config")),o=t(require("../../utils/util")),n=t(require("../../utils/manba"));Page({data:{picBaseUrl:e.default.picBaseUrl,appCode:"",memberId:"",openId:"",showToLogin:!1,showLogin:!1,isFinished:!1,statusEnum:{1:{color:"#FF7615",type:"待支付",name:"订单待支付",title:"请在5分钟内完成支付",button:!0,buttonType:1},2:{color:"#999999",type:"已取消",name:"你主动取消",title:"10月27日 14:05取消",button:!0,buttonType:2},3:{color:"#999999",type:"已支付",name:"正在为您派车",title:"请您耐心等待~",button:!0,buttonType:3},4:{color:"#999999",type:"已派单",name:"已为您派车",title:"请等待出行~",button:!0,buttonType:3},5:{color:"#999999",type:"出行中",name:"车辆已出发",title:"请在出发地点等待~",button:!1},6:{color:"#999999",type:"已完成",name:"行程已结束",title:"欢迎下次使用~",button:!1},7:{color:"#999999",type:"已取消",name:"你主动取消",title:"10月27日 14:05取消",button:!0,buttonType:2},8:{color:"#999999",type:"服务完成",name:"行程已结束",title:"欢迎下次使用~",button:!0,buttonType:4}},orderList:[]},onLoad:function(t){this.getTitle()},getOrderList:function(){var t=this,i=wx.getStorageSync("vcode");return new Promise((function(r,a){o.default.loading(),console.log(wx.getStorageSync("vcode")),o.default.$http(e.default.openApi+"/order/".concat(i,"/passenger/my/orderList"),{vcode:i,status:"",openId:wx.getStorageSync("openId"),memberId:wx.getStorageSync("memberId")},"GET").then((function(e){if("200"==e.code){for(var i=e.data,r=0;r<i.length;r++)i[r].dataStr=(0,n.default)(i[r].startTime).format("MM月DD日 周Whh:mm");t.setData({orderList:i,isFinished:!0}),o.default.hideLoading()}else o.default.alert(e.msg),o.default.hideLoading();o.default.hideLoading()})).catch((function(t){a(t),o.default.hideLoading(),console.error("request api.queryLinkerNew error ",t)}))}))},wxLoginSuccess:function(){this.checkUser()},selectOrder:function(t){var e=t.currentTarget.dataset.value;e&&wx.navigateTo({url:"/pages/orderDetail/index?orderNo=".concat(e.orderNo)})},onShow:function(){this.checkUser()},checkUser:function(){return wx.getStorageSync("openId")&&wx.getStorageSync("memberId")&&wx.getStorageSync("vcode")?(this.setData({showToLogin:!1,showLogin:!1}),void this.getOrderList()):(this.setData({showToLogin:!0}),!1)},getTitle:function(){return new Promise((function(t,n){o.default.$http("".concat(e.default.urlPrefix,"/wchatMin/getAppInfo?appId=").concat(e.default.APPID),{}).then((function(t){"200"==t.code&&t.data.minAppName&&wx.setNavigationBarTitle({title:t.data.minAppName})})).catch((function(t){n(t)}))}))},toLogin:function(){this.setData({showLogin:!0})},queryOrderList:function(){},goHome:function(){wx.switchTab({url:"/pages/home/home"})}});
},{isPage:true,isComponent:true,currentFile:'pages/orderList1/orderList.js'});require("pages/orderList1/orderList.js");$gwx_XC_29=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([3,'card-box'])
Z([[2,'==='],[[7],[3,'vehicleMode']],[1,1]])
Z([[2,'==='],[[7],[3,'vehicleMode']],[1,2]])
Z([[2,'&&'],[[2,'==='],[[7],[3,'vehicleMode']],[1,3]],[[2,'>'],[[7],[3,'passengerNumSelected']],[1,0]]])
Z([3,'closeFormPopupShow'])
Z([3,'bottom'])
Z([[7],[3,'formPopupShow']])
Z([1,false])
Z([3,'closePassengerPopupShow'])
Z(z[5])
Z([[7],[3,'passengerPopupShow']])
Z(z[7])
Z([[2,'!'],[[7],[3,'notRealName']]])
Z([3,'closeFrequentPopupShow'])
Z(z[5])
Z([[7],[3,'frequentPopupShow']])
Z(z[7])
Z([[7],[3,'timePopupShow']])
Z([3,'closeTimePopupShow'])
Z(z[5])
Z(z[7])
Z([3,'getDateTimeValue'])
Z([3,'getInitDateTimeValue'])
Z([[6],[[7],[3,'startTimeObj']],[3,'date']])
Z([[7],[3,'endTime']])
Z([3,'dateTimePicker'])
Z([1,5])
Z([[7],[3,'startTimeEarliest']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_29_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_29_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_29=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_29=true;
var x=['./pages/orderWrite/orderWrite.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_29_1()
var oZD=_n('view')
_rz(z,oZD,'class',0,e,s,gg)
var c1D=_v()
_(oZD,c1D)
if(_oz(z,1,e,s,gg)){c1D.wxVkey=1
}
var o2D=_v()
_(oZD,o2D)
if(_oz(z,2,e,s,gg)){o2D.wxVkey=1
}
var l3D=_v()
_(oZD,l3D)
if(_oz(z,3,e,s,gg)){l3D.wxVkey=1
}
c1D.wxXCkey=1
o2D.wxXCkey=1
l3D.wxXCkey=1
_(r,oZD)
var a4D=_mz(z,'Popup',['bind:hidden',4,'position',1,'show',2,'showTitle',3],[],e,s,gg)
_(r,a4D)
var t5D=_mz(z,'Popup',['bind:hidden',8,'position',1,'show',2,'showTitle',3],[],e,s,gg)
var e6D=_v()
_(t5D,e6D)
if(_oz(z,12,e,s,gg)){e6D.wxVkey=1
}
e6D.wxXCkey=1
_(r,t5D)
var b7D=_mz(z,'Popup',['bind:hidden',13,'position',1,'show',2,'showTitle',3],[],e,s,gg)
_(r,b7D)
var hYD=_v()
_(r,hYD)
if(_oz(z,17,e,s,gg)){hYD.wxVkey=1
var o8D=_mz(z,'Popup',['bind:hidden',18,'position',1,'showTitle',2],[],e,s,gg)
var x9D=_mz(z,'datetime-picker-view',['bind:confirm',21,'bind:init',1,'current',2,'end',3,'id',4,'interval',5,'start',6],[],e,s,gg)
_(o8D,x9D)
_(hYD,o8D)
}
hYD.wxXCkey=1
hYD.wxXCkey=3
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_29();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/orderWrite/orderWrite.wxml'] = [$gwx_XC_29, './pages/orderWrite/orderWrite.wxml'];else __wxAppCode__['pages/orderWrite/orderWrite.wxml'] = $gwx_XC_29( './pages/orderWrite/orderWrite.wxml' );
	;__wxRoute = "pages/orderWrite/orderWrite";__wxRouteBegin = true;__wxAppCurrentFile__="pages/orderWrite/orderWrite.js";define("pages/orderWrite/orderWrite.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../@babel/runtime/helpers/objectSpread2"),a=e(require("../../@babel/runtime/regenerator")),n=require("../../@babel/runtime/helpers/asyncToGenerator"),i=e(require("../../utils/config")),o=e(require("../../utils/util")),s=require("../../utils/fetch"),r=require("../../utils/userInfo"),d=require("../../utils/typeSetting"),l=e(require("../../utils/manba")),c=e(require("../../utils/AMap.js")),u=require("../../utils/validate");Page({preBook:!1,preRePay:!1,data:{picBaseUrl:i.default.picBaseUrl,memberId:"",vcode:"",openId:"",stationInfo:null,lineInfo:[],remarkList:["有大件行李","有儿童","有孕妇/老人","帮别人代下单"],selectedRemarksCopy:[],passengerNumSelectedCopy:0,mobileCopy:"",planeNoCopy:"",startTimeObjCopy:{date:(0,l.default)().format("YYYY-MM-DD hh:mm"),hm:(0,l.default)().format("hh:mm"),dayhm:(0,l.default)().format("今天 hh:mm")},lastStartTimeObjCopy:{},sltPassengerListCopy:[],sltPassengerIdsCopy:[],mobile:"",planeNo:"",selectedRemarks:[],inputPopup:"remark",serviceTelephone:"",formPopupShow:!1,passengerPopupShow:!1,timePopupShow:!1,frequentPopupShow:!1,includePoints:[],polyline:[],markers:[],distance:0,duration:0,distanceText:"",durationText:"",expectArriveTime:"",notRealName:!0,isAllRealName:!1,isSingleRealName:!1,frequentList:[],sltPassengerList:[],sltPassengerIds:[],frequentUpdated:!1,vehicleTypeList:[],vehicleTypeSelectedIndex:-1,startTimeObj:{date:(0,l.default)().format("YYYY-MM-DD hh:mm"),hm:(0,l.default)().format("hh:mm"),dayhm:(0,l.default)().format("今天 hh:mm"),isUpdate:!1},startTimeEarliest:(0,l.default)().format("YYYY-MM-DD hh:mm"),lastStartTimeObj:{date:"",hm:"",dayhm:"",departureTimeText:""},currentTimeType:1,endTime:"",timeRegion:0,passengerNumMax:1,passengerNumSelected:0,vehicleMode:3,vehicleModeSelected:1,displayOnline:!1,priceList:[],carpoolPrice:0,wholePrice:0,lineId:"",common:"",saleId:""},onLoad:function(e){var t=this;return n(a.default.mark((function i(){return a.default.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:e.saleId&&t.setData({saleId:e.saleId}),t.setData({endTime:(0,l.default)().add(2,l.default.DAY).format("YYYY/MM/DD")+" 23:59:00"}),t.getTemplateIds(),t.initStationData(),(0,r.getAppInfo)().then(function(){var e=n(a.default.mark((function e(n){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setData({vcode:n.vcode}),e.next=3,t.getDisplayOnline();case 3:return e.next=5,t.getLineInfo();case 5:t.getServiceTelephone(),(0,r.getOpenid)(n.vcode).then((function(e){var a=(0,r.getMemberId)();t.setData({openId:e.openId,memberId:a}),t.getMobileByOpenId(),t.getRealNameConfig().then((function(e){a&&0!==e&&t.getPassengerList()}))}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),o.default.showToast(e.msg||"查询供应商信息失败","none")}));case 5:case"end":return i.stop()}}),i)})))()},onShow:function(){var e=this,t=this.data,a=t.openId,n=t.vcode;if(n){!a&&(0,r.getOpenid)(n).then((function(t){e.setData({openId:t.openId}),e.getMobileByOpenId()}));var i=(0,r.getMemberId)();this.setData({memberId:i}),this.getRealNameConfig().then((function(t){i&&0!==t&&e.getPassengerList(!1)}))}},includePointsFn:function(){this.mapCtx=wx.createMapContext("map1"),this.mapCtx&&this.mapCtx.includePoints({points:this.data.includePoints,padding:[60,100,40,80]})},loginFn:function(){(0,r.toLoginPage)()},initStationData:function(){var e=this,a=wx.getStorageSync("stationInfo"),n={arrlat:a.endStation.point.lat,arrlon:a.endStation.point.lon,dptlat:a.startStation.point.lat,dptlon:a.startStation.point.lon},i=[{latitude:Number(n.dptlat),longitude:Number(n.dptlon)},{latitude:Number(n.arrlat),longitude:Number(n.arrlon)}],o=[];i.forEach((function(e,a){var n="https://file.40017.cn/groundtraffic/linebus/linebus/cxy-intercity/map-start.png";1===a&&(n="https://file.40017.cn/groundtraffic/linebus/linebus/cxy-intercity/map-end.png");var i=t(t({id:a,iconPath:n,width:30,height:30},e),{},{customCallout:{anchorY:0,anchorX:20,display:"ALWAYS"},anchor:{x:.5,y:.5}});o.push(i)})),this.setData({stationInfo:a,includePoints:i,markers:o},(function(){e.includePointsFn()})),this.getPolyline(n.dptlat,n.dptlon,n.arrlat,n.arrlon)},getPolyline:function(e,t,a,n){var i=this;c.default.getDrivingRoute({origin:"".concat(t,",").concat(e),destination:"".concat(n,",").concat(a),success:function(e){var t=[];if(e.paths&&e.paths[0]&&e.paths[0].steps)for(var a=e.paths[0].steps,n=0;n<a.length;n++)for(var s=a[n].polyline.split(";"),r=0;r<s.length;r++)t.push({latitude:parseFloat(s[r].split(",")[1]),longitude:parseFloat(s[r].split(",")[0])});if(i.setData({drivingSteps:a,polyline:[{points:t,color:"#009BC5",width:4,arrowLine:!0}]}),e.paths[0]&&e.paths[0]){var d=e.paths[0],c=d.distance,u=d.duration,h=i.data.startTimeObj,p=(c%1e3==0?c/1e3:(c/1e3).toFixed(2))+"公里",m=o.default.formatSeconds(u,!0),f=h&&h.date?(0,l.default)(h.date).add(u,l.default.SECOND).format("hh:mm"):"";i.setData({distance:c,duration:u,distanceText:p,durationText:m,expectArriveTime:f})}},fail:function(e){console.log(e)}})},getLineInfo:function(){var e=this,a=this.data,n=a.vcode,r=a.stationInfo;if(r&&r.startStation&&r.endStation){var c={endCityId:r.endStation.cityId,endPoint:r.endStation.point,startCityId:r.startStation.cityId,startPoint:r.startStation.point,stationList:r.stationPair,vcode:n};o.default.loading(),(0,s.fetch)({url:"".concat(i.default.urlPrefix,"/line/").concat(n,"/get"),method:"POST",data:c,complete:function(a){o.default.hideLoading();var n=a.data;if(n&&"200"===n.code&&!o.default.isEmpty(n.data)&&n.data.length){var i=n.data;if(i.length){var s=e.data,r=s.passengerNumMax,c=s.vehicleTypeSelectedIndex,u=e.data.displayOnline,h=i.filter((function(e){return 2!==e.priceType&&1===e.common})).length>0,p=u&&i.filter((function(e){return 2!==e.priceType})).length>0,m=h&&p?3:h?1:2;2===m&&e.setData({vehicleModeSelected:2});var f=(i=i.sort((function(e,t){return e.advanceBookingTime-t.advanceBookingTime})))[0].tripShareTimeRegion||0,g=i[0].advanceBookingTime||0;if(g>0){var T=(0,l.default)().add(g,l.default.MINUTE).format("YYYY/MM/DD hh:mm"),v={date:T,hm:(0,l.default)(T).format("hh:mm"),dayhm:(0,l.default)(T).format("今天 hh:mm"),isUpdate:!1},S=(0,l.default)(T).add(e.data.duration,l.default.SECOND).format("hh:mm");e.setData({startTimeObj:v,startTimeObjCopy:v,startTimeEarliest:T,expectArriveTime:S}),console.log(T)}var P=[],y=i.filter((function(e){return e.lineVehicleTypeList&&e.lineVehicleTypeList.length}));y.length&&1===(P=y[0].lineVehicleTypeList.map((function(e){var a=d.vehicleTypeSetting[e.vehicleType]+e.vehiclePassengerNumber+"座";return t(t({},e),{},{vehicleTypeName:a})}))).length&&(c=0,r=P[0].vehiclePassengerNumber-1,1===m&&(r-=1)),e.setData({lineInfo:i,vehicleTypeList:P,passengerNumMax:r,vehicleTypeSelectedIndex:c,vehicleMode:m,timeRegion:f,advanceBookingTime:g})}}}})}},getServiceTelephone:function(){var e=this,t=this.data.vcode;(0,s.fetch)({url:"".concat(i.default.urlPrefix,"/account/").concat(t,"/get"),method:"POST",complete:function(t){var a=t.data;"200"!==a.code||o.default.isEmpty(a.data)||e.setData({serviceTelephone:a.data.serviceNumber})}})},getMobileByOpenId:function(){var e=this,t=this.data,a=t.openId,n=t.vcode;(0,s.fetch)({url:"".concat(i.default.urlPrefix,"/member/").concat(n,"/getMobileByOpenId"),method:"post",data:{openId:a},complete:function(t){var a=t.data;"200"!==a.code||o.default.isEmpty(a.data)||e.setData({mobile:a.data})}})},getRealNameConfig:function(){var e=this;this.setData({notRealName:!1,isAllRealName:!1,isSingleRealName:!1});var t=this.data.vcode;return new Promise((function(a,n){(0,s.fetch)({url:"".concat(i.default.urlPrefix,"/account/").concat(t,"/passengerRealIdCard"),method:"POST",complete:function(t){var i=t.data;i&&"200"===i.code?(0===i.data?e.setData({notRealName:!0}):(1===i.data&&e.setData({isSingleRealName:!0}),2===i.data&&e.setData({isAllRealName:!0})),a(i.data)):(o.default.showToast("查询实名制配置信息失败","none"),n())}})}))},getPassengerList:function(){var e=this,a=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=[];this.getPassengerListApi().then((function(i){i&&i.length?(n=i.map((function(e){return t(t({},e),{},{certTypeText:d.certTypeList[e.idType-1].text})})),a&&e.setDefaultPassenger(n)):n=[],e.setData({frequentList:n})}))},getPassengerListApi:function(){var e=this.data,t=e.vcode,a=e.openId,n=e.memberId;return new Promise((function(e,o){(0,s.fetch)({url:"".concat(i.default.urlPrefix,"/passenger/").concat(t,"/getPassengerList"),method:"POST",data:{openId:a,memberId:n},complete:function(t){var a=t.data;a&&"200"===a.code?e(a.data):o()}})}))},setDefaultPassenger:function(e){var t=[];e.length?(t=e.filter((function(e){return e.defaulted}))).length||t.push(e[0]):t=[];var a=t.map((function(e){return e.id})),n=JSON.parse(JSON.stringify(t)),i=JSON.parse(JSON.stringify(a));this.setData({sltPassengerList:t,sltPassengerIds:a,sltPassengerListCopy:n,sltPassengerIdsCopy:i})},getDisplayOnline:function(){var e=this,t=this.data.vcode;(0,s.fetch)({url:"".concat(i.default.urlPrefix,"/account/").concat(t,"/displayOnline"),method:"POST",complete:function(t){var a=t.data,n=!1;"200"===a.code&&a.data&&(n=!0),e.setData({displayOnline:n})}})},getPrice:function(){var e=this,t=this.data,a=t.vcode,n=t.startTimeObj,r=t.stationInfo,d=t.lineInfo,c=t.vehicleModeSelected,u=t.vehicleTypeList,h=t.vehicleTypeSelectedIndex;o.default.loading();var p=(0,l.default)(n.date).format("YYYY-MM-DD hh:mm"),m=1===c?2:1,f={lineIds:d.filter((function(e){return 2!==e.priceType})).map((function(e){return e.id})),endCityId:r.endStation.cityId,endPoint:r.endStation.point,passengerNumber:1,startCityId:r.startStation.cityId,startPoint:r.startStation.point,startTime:p,lastStartTime:p,tripType:m,common:0};if(u&&u.length){var g=u[h];f.vehicleType=g.vehicleType,f.vehiclePassengerNumber=g.vehiclePassengerNumber}(0,s.fetch)({url:"".concat(i.default.urlPrefix,"/price/").concat(a,"/get"),method:"POST",data:f,complete:function(t){o.default.hideLoading();var a=t.data;"200"!==a.code||o.default.isEmpty(a.data)?(o.default.showToast("查询价格信息失败，请换个时间再试试","none"),setTimeout((function(){e.goHome()}),2e3)):(e.setData({priceList:a.data}),e.renderPrice())}})},renderPrice:function(){var e=this,t=this.data,a=t.priceList,n=t.passengerNumSelected,i=t.vehicleModeSelected;if(0===a.length)return o.default.showToast("查询价格信息失败，请换个时间再试试","none"),void setTimeout((function(){e.goHome()}),2e3);var s,r,d=a.filter((function(e){return 0===e.common}))||[],l=d.length>0?d[0]:{},c=l.price||0,u=a.filter((function(e){return 1===e.common&&e.passengerNumber===n}))||[],h=u.length>0?u[0]:{},p=h.price||0;1===i?(s=h.lineId,r=h.common):(s=l.lineId,r=l.common),this.setData({carpoolPrice:p,wholePrice:c,lineId:s,common:r})},callService:function(){var e=this.data.serviceTelephone;e&&wx.makePhoneCall({phoneNumber:e})},selectVehicleType:function(e){var t=e.currentTarget.dataset.index,a=this.data,n=a.vehicleMode,i=a.vehicleTypeList,o=a.vehicleTypeSelectedIndex;a.passengerNumSelected,a.startTimeObj;if(o!==t){var s=i[t].vehiclePassengerNumber-1;1===n&&(s-=1),this.setData({vehicleTypeSelectedIndex:t,passengerNumMax:s,passengerNumSelected:0})}},selectRemark:function(e){var t=e.currentTarget.dataset.item,a=this.data.selectedRemarks,n=a.findIndex((function(e){return e===t}));n>-1?a.splice(n,1):a.push(t),this.setData({selectedRemarks:a})},selectPassengerNum:function(e){var t=e.currentTarget.dataset.index;this.setData({passengerNumSelected:t+1})},selectVehicleMode:function(e){var t=this.data;if(t.passengerNumSelected!==t.passengerNumMax){var a=e.currentTarget.dataset.mode;this.setData({vehicleModeSelected:Number(a)}),this.getPrice()}},formItemSubmit:function(){var e=this.data.inputPopup;if("mobile"===e){var t=this.data.mobile;if(!t)return void o.default.showToast("请填写手机号","none");if(!u.phoneValid.test(t))return o.default.showToast("请填写正确的手机号","none"),!1;this.setData({mobileCopy:t})}"plane"===e&&this.setData({planeNoCopy:this.data.planeNo}),"remark"===e&&this.setData({selectedRemarksCopy:this.data.selectedRemarks}),this.changeFormPopupShow()},passengerSubmit:function(){var e=this.data,t=e.vehicleMode,a=e.passengerNumSelected,n=e.passengerNumMax,i=e.frequentUpdated,s=e.isSingleRealName,r=e.isAllRealName,d=e.startTimeObj,l=e.sltPassengerIds;a<1?o.default.showToast("请选择出行人数","none"):!s&&!r||i?i&&l.length>a?o.default.showToast("乘车人数量超过所选出行人数，请调整","none"):i&&r&&l.length!==a?o.default.showToast("乘车人数量与所选出行人数不一致，请调整","none"):(3===t&&a===n&&this.setData({vehicleModeSelected:2}),this.setData({passengerNumSelectedCopy:this.data.passengerNumSelected}),this.changePassengerPopupShow(),d.isUpdate&&d.date&&this.getPrice()):o.default.showToast("请选择乘车人","none")},timeSubmit:function(){var e=this.data,t=e.currentTimeType,a=e.duration;if(1===t)this.setData({currentTimeType:2});else{var n=this.data,i=n.startTimeObj,o=n.lastStartTimeObj,s=n.passengerNumSelected;i.isUpdate=!0;var r=0===(0,l.default)(o.date).distance(i.date)?i.dayhm+" - "+o.hm:i.dayhm+" - "+o.dayhm;o.departureTimeText=r;var d=(0,l.default)(i.date).add(a,l.default.SECOND).format("hh:mm");this.setData({startTimeObj:i,lastStartTimeObj:o,startTimeObjCopy:i,lastStartTimeObjCopy:o,currentTimeType:1,expectArriveTime:d}),s&&this.getPrice(),this.changeTimePopupShow()}},frequentSubmit:function(){var e=this.data,t=e.sltPassengerList,a=e.sltPassengerIds,n=e.passengerNumSelected,i=e.isAllRealName;e.isSingleRealName&&a.length<1?o.default.showToast("请选择乘车人","none"):a.length>n?o.default.showToast("乘车人数量超过所选出行人数，请调整","none"):i&&a.length!==n?o.default.showToast("乘车人数量与所选出行人数不一致，请调整","none"):(this.setData({sltPassengerListCopy:JSON.parse(JSON.stringify(t)),sltPassengerIdsCopy:a,frequentUpdated:!0}),this.changeFrequentPopupShow())},closeFormPopupShow:function(){var e=this.data.inputPopup;"mobile"===e&&this.setData({mobile:this.data.mobileCopy}),"plane"===e&&this.setData({planeNo:this.data.planeNoCopy}),"remark"===e&&this.setData({selectedRemarks:this.data.selectedRemarksCopy}),this.changeFormPopupShow()},changeFormPopupShow:function(){var e=this.data.formPopupShow;this.setData({formPopupShow:!e})},openPassengerPopupShow:function(){-1!==this.data.vehicleTypeSelectedIndex?this.changePassengerPopupShow():o.default.showToast("请先选择车型","none")},closePassengerPopupShow:function(){this.setData({passengerNumSelected:this.data.passengerNumSelectedCopy});var e=this.data,t=e.passengerNumSelected,a=e.frequentUpdated,n=e.isAllRealName,i=e.sltPassengerIds;a&&i.length>t?o.default.showToast("乘车人数量超过所选出行人数，请调整","none"):a&&n&&i.length!==t?o.default.showToast("乘车人数量与所选出行人数不一致，请调整","none"):this.changePassengerPopupShow()},changePassengerPopupShow:function(){var e=this.data.passengerPopupShow;this.setData({passengerPopupShow:!e})},getInitDateTimeValue:function(e){this.data.startTimeObj.isUpdate||this.getDateTimeValue(e)},openTimePopupShow:function(){this.setData({currentTimeType:1}),this.changeTimePopupShow()},closeTimePopupShow:function(){var e=this.data,t=e.startTimeObjCopy,a=e.lastStartTimeObjCopy;this.setData({startTimeObj:t,lastStartTimeObj:a}),this.changeTimePopupShow()},changeTimePopupShow:function(){var e=this.data.timePopupShow;this.setData({timePopupShow:!e})},openFrequentPopupShow:function(){var e=this.data,t=e.passengerNumSelected,a=e.memberId;t<1?o.default.showToast("请先选择出行人数","none"):a?this.changeFrequentPopupShow():this.loginFn()},closeFrequentPopupShow:function(){var e=this.data,t=e.sltPassengerListCopy,a=e.sltPassengerIdsCopy;this.setData({sltPassengerList:JSON.parse(JSON.stringify(t)),sltPassengerIds:a}),this.changeFrequentPopupShow()},changeFrequentPopupShow:function(){var e=this.data.frequentPopupShow;this.setData({frequentPopupShow:!e})},bindInputMobile:function(e){this.setData({mobile:e.detail.value})},bindInputPlane:function(e){this.setData({planeNo:e.detail.value})},openPopupMobile:function(){this.setData({inputPopup:"mobile"}),this.changeFormPopupShow()},openPopupPlane:function(){this.setData({inputPopup:"plane"}),this.changeFormPopupShow()},openPopupRemark:function(){this.setData({inputPopup:"remark"}),this.changeFormPopupShow()},getDateTimeValue:function(e){if(e.detail){2==this.data.currentTimeType&&this.setData({currentTimeType:1});var t=this.data.timeRegion,a=(0,l.default)(e.detail).add(t,l.default.MINUTE).format("YYYY/MM/DD hh:mm"),n=(0,l.default)(e.detail).distance(),i=0===n?"今天":1===n?"明天":"M月D日",o=(0,l.default)(a).distance(),s=0===o?"今天":1===o?"明天":"M月D日";this.setData({startTimeObj:{date:e.detail,hm:(0,l.default)(e.detail).format("hh:mm"),dayhm:(0,l.default)(e.detail).format("".concat(i," hh:mm"))},lastStartTimeObj:{date:a,hm:(0,l.default)(a).format("hh:mm"),dayhm:(0,l.default)(a).format("".concat(s," hh:mm"))}})}},selectFrequent:function(e){var t=e.currentTarget.dataset.index,a=this.data,n=a.frequentList,i=a.sltPassengerList,o=n[t],s=i.findIndex((function(e){return e.id===o.id}));s>-1?i.splice(s,1):i.push(o);var r=i.map((function(e){return e.id}));this.setData({sltPassengerList:i,sltPassengerIds:r})},goAddFrequent:function(){wx.navigateTo({url:"/pages/contactadd/index"})},goEditFrequent:function(e){var t=e.currentTarget.dataset.item;wx.navigateTo({url:"/pages/contactadd/index?person=".concat(JSON.stringify(t)),success:function(e){e.eventChannel.emit("passdata",{isEdit:!0,passInfo:t})}})},goHome:function(){wx.switchTab({url:"/pages/home/home"})},bookClick:function(){var e=this;console.log("立即约车");var t=this.data,a=t.vehicleTypeSelectedIndex,n=t.startTimeObj,i=t.passengerNumSelected,s=t.notRealName,r=t.mobile,d=t.sltPassengerList;if(a<0)o.default.showToast("请选择车型","none");else if(n.isUpdate&&n.date)if(i<1)o.default.showToast("请选择出行人数","none");else if(s||d.length)if(r){var l=this.data.tmpIds;l&&l.length>0?wx.requestSubscribeMessage({tmplIds:l,complete:function(t){console.log(t),e.toBookClick()}}):e.toBookClick()}else o.default.showToast("请填写联系电话","none");else o.default.showToast("请添加乘车人","none");else o.default.showToast("请选择出发时间","none")},toBookClick:function(){var e=this;console.log("立即约车");var t=this.data,a=t.vehicleTypeSelectedIndex,n=t.startTimeObj,r=t.passengerNumSelected,d=t.notRealName,l=t.isAllRealName,c=t.mobile,u=t.sltPassengerList;if(a<0)o.default.showToast("请选择车型","none");else if(n.isUpdate&&n.date)if(r<1)o.default.showToast("请选择出行人数","none");else{if(!d){if(!u.length)return void o.default.showToast("请添加乘车人","none");if(l&&u.length!==r)return void o.default.showToast("乘车人数量与所选出行人数不一致，请调整","none")}if(c){var h=this.data,p=h.openId,m=h.memberId,f=h.vcode;m?(0,s.fetch)({url:"".concat(i.default.urlPrefix,"/order/").concat(f,"/existNoPay"),method:"POST",data:{openId:p,memberId:m},complete:function(t){var a=t.data;"200"===a.code&&a.data?wx.showModal({title:"提示",content:"您还有订单待支付，请支付后继续使用用车服务",showCancel:!1,success:function(e){e.confirm&&wx.reLaunch({url:"/pages/orderList1/orderList"})}}):"200"!==a.code||a.data?o.default.showModal("预定失败，请稍后重试","none"):e.createOrder()}}):this.loginFn()}else o.default.showToast("请填写联系电话","none")}else o.default.showToast("请选择出发时间","none")},createOrder:function(){var e=this,t=this.data,a=t.notRealName,n=t.mobile,r=t.sltPassengerList;if(n)if(a||r.length){if(!this.preBook){this.preBook=!0,o.default.loading();var d,c,u=this.data,h=u.vehicleModeSelected,p=u.openId,m=u.stationInfo,f=u.startTimeObj,g=u.lastStartTimeObj,T=u.passengerNumSelected,v=u.lineId,S=u.common,P=u.vehicleTypeList,y=u.vehicleTypeSelectedIndex,I=u.selectedRemarks,b=u.planeNo;d=(0,l.default)(f.date).format("YYYY-MM-DD hh:mm:ss"),c=(0,l.default)(g.date).format("YYYY-MM-DD hh:mm:ss"),2===h&&(c=d);var w=T,N=1===h?2:1,D={common:S,lineId:v,endCityId:m.endStation.cityId,endPath:1===m.endStation.type?m.endStation.addressName:m.endStation.path,endPoint:m.endStation.point,passengerNumber:w,startCityId:m.startStation.cityId,startPath:1===m.startStation.type?m.startStation.addressName:m.startStation.path,startPoint:m.startStation.point,startTime:d,lastStartTime:c,tripType:N,endAddress:m.endStation.addressName,startAddress:m.startStation.addressName};if(P&&P.length){var x=P[y];D.vehicleType=x.vehicleType,D.vehiclePassengerNumber=x.vehiclePassengerNumber}var O={openId:p,telephone:n,startTime:d,lastStartTime:c,stationProperty:2,userRemark:I.join("|"),flightNumber:b||"",tripType:N},M=this.data,C=M.vcode,L=M.memberId,R=M.wholePrice,k=M.carpoolPrice,Y={memberId:L,orderInfo:{payAmount:1===h?k:R},searchDTO:D,trip:O,vcode:C,wechatMin:1},q=this.data,j=q.isAllRealName,A=q.isSingleRealName;Y.orderPassengers=j||A?r:[{mobilePhone:n,passengerName:""}],this.data.saleId&&(Y.saleId=this.data.saleId),(0,s.fetch)({url:"".concat(i.default.urlPrefix,"/order/").concat(C,"/book"),method:"POST",data:Y,complete:function(t){o.default.hideLoading(),e.preBook=!1;var a=t.data;"200"===a.code&&a.data?(e.setData({orderNo:a.data}),e.payOrder()):o.default.showToast(t.data.msg||"预定失败，请稍后重试","none")}})}}else o.default.showToast("请添加乘车人","none");else o.default.showToast("请填写联系电话","none")},getTemplateIds:function(){var e=this,t=wx.getStorageSync("vcode");return new Promise((function(a,n){console.log(wx.getStorageSync("vcode")),o.default.$http(i.default.openApi+"/wchatMin/getTemplateIds",{vcode:t},"GET").then((function(t){if("200"==t.code){for(var a=[],n=0;n<t.data.length;n++)a.push(t.data[n].templateId);e.setData({tmpIds:a})}o.default.hideLoading()})).catch((function(e){n(e),console.error("request api.queryLinkerNew error ",e)}))}))},payOrder:function(){var e=this,t=this.data,a=t.openId,n=t.orderNo,r=t.vcode,d=t.memberId;o.default.loading(),(0,s.fetch)({url:"".concat(i.default.urlPrefix,"/weChatPay/getSign"),method:"POST",data:{openId:a,orderNo:n,memberId:d,tradeType:"JSAPI",source:"1",vcode:r},complete:function(t){o.default.hideLoading();var a=t.data;a&&"200"===a.code?wx.requestPayment({timeStamp:a.data.timeStamp,nonceStr:a.data.nonceStr,package:a.data.packageStr,signType:a.data.signType,paySign:a.data.paySign,success:function(t){e.goOrderDetail()},fail:function(t){console.log(t),e.goOrderDetail()}}):(o.default.alert(a.msg||"支付失败"),setTimeout((function(){e.goOrderDetail()}),2e3))}})},goOrderDetail:function(){var e=this.data.orderNo;e&&wx.redirectTo({url:"/pages/orderDetail/index?orderNo=".concat(e)})},goPassengerNotice:function(){wx.navigateTo({url:"/pages/mine/passengerNotice/index"})}});
},{isPage:true,isComponent:true,currentFile:'pages/orderWrite/orderWrite.js'});require("pages/orderWrite/orderWrite.js");$gwx_XC_30=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_30=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_30=true;
var x=['./pages/resignAccount/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_30_1()
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_30();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/resignAccount/index.wxml'] = [$gwx_XC_30, './pages/resignAccount/index.wxml'];else __wxAppCode__['pages/resignAccount/index.wxml'] = $gwx_XC_30( './pages/resignAccount/index.wxml' );
	;__wxRoute = "pages/resignAccount/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/resignAccount/index.js";define("pages/resignAccount/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../utils/config"),t=require("../../utils/util");Page({data:{picBaseUrl:e.picBaseUrl},resignAccount:function(){var r=wx.getStorageSync("vcode"),n=wx.getStorageSync("memberId");t.alert("注销成功后，您的帐号将无法找回，数据和信息无法恢复，是否继续？","提示",!0,"取消",null,(function(a){t.loading(),t.$http(e.urlPrefix+"/member/".concat(r,"/cancellation"),{memberId:n},"POST").then((function(e){200==parseInt(e.code)?(t.alert("注销成功！"),wx.clearStorage()):t.alert(e.msg)})).finally((function(){t.hideLoading()}))}))}});
},{isPage:true,isComponent:true,currentFile:'pages/resignAccount/index.js'});require("pages/resignAccount/index.js");$gwx_XC_31=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[2,'<='],[[6],[[7],[3,'filterList']],[3,'length']],[1,0]])
Z([[7],[3,'filterList']])
Z([3,'selectStation'])
Z([3,'approw'])
Z([[7],[3,'item']])
Z([3,'align-items: flex-start;padding:25rpx 5%;width:90%;background:#fff;'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'source']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_31_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_31_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_31=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_31=true;
var x=['./pages/station/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_31_1()
var cBE=_v()
_(r,cBE)
if(_oz(z,0,e,s,gg)){cBE.wxVkey=1
}
var hCE=_v()
_(r,hCE)
var oDE=function(oFE,cEE,lGE,gg){
var tIE=_mz(z,'view',['bindtap',2,'class',1,'data-value',2,'style',3],[],oFE,cEE,gg)
var eJE=_v()
_(tIE,eJE)
if(_oz(z,6,oFE,cEE,gg)){eJE.wxVkey=1
}
eJE.wxXCkey=1
_(lGE,tIE)
return lGE
}
hCE.wxXCkey=2
_2z(z,1,oDE,e,s,gg,hCE,'item','index','')
cBE.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_31();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/station/index.wxml'] = [$gwx_XC_31, './pages/station/index.wxml'];else __wxAppCode__['pages/station/index.wxml'] = $gwx_XC_31( './pages/station/index.wxml' );
	;__wxRoute = "pages/station/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/station/index.js";define("pages/station/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/util")),e=require("../../utils/config"),n=require("../../utils/Pinyin.js");Page({data:{picBaseUrl:e.picBaseUrl,stationList:[],searchItem:"",selectStation:{},selectCity:{},location:{}},onLoad:function(t){var e=t.type,n=t.location,a=t.startStationIds,o=t.stationProperty;a&&(a=JSON.parse(decodeURIComponent(a)),e="end"),n=n?JSON.parse(decodeURIComponent(n)):{lat:"31.2516580",lon:"120.7407390",name:""},this.setData({type:e||"start",location:n,startStationIds:a,stationProperty:o}),wx.setNavigationBarTitle({title:"选择"+("start"==e?"上":"下")+"车点"}),this.getArea(n),this.getAllStationList()},getArea:function(a){var o=this,i=wx.getStorageSync("vcode");return new Promise((function(r,s){t.default.loading(),console.log(wx.getStorageSync("vcode")),t.default.$http(e.openApi+"/area/".concat(i,"/list"),{}).then((function(e){if("200"==e.code){var i,r,s=e.data;s.length>0&&(i=s[0]);for(var c=0;c<s.length;c++)s[c].sp=n.convertToPinyin(s[c].name,"sp"),s[c].py=n.convertToPinyin(s[c].name,"py"),a&&a.name&&-1!=s[c].name.indexOf(a.name)&&(i=s[c],r=s[c]);o.setData({cityList:s,selectCity:i,locationCity:r}),o.getAllStation(i.code,"")}else t.default.alert(e.msg),t.default.hideLoading()})).catch((function(e){s(e),t.default.hideLoading(),console.error("request api.queryLinkerNew error ",e)}))}))},getAllStationList:function(){var n=this,a=wx.getStorageSync("vcode"),o=this.data.stationProperty;return new Promise((function(i,r){t.default.loading(),console.log(wx.getStorageSync("vcode")),t.default.$http(e.openApi+"/station/".concat(a,"/list/all"),{vcode:a,stationProperty:o||""}).then((function(e){if("200"==e.code){var a=e.data;n.setData({allStationList:a})}else t.default.alert(e.msg);t.default.hideLoading()})).catch((function(e){r(e),t.default.hideLoading(),console.error("request api.getStation error ",e)}))}))},getAllStation:function(n,a){var o=this,i=wx.getStorageSync("vcode"),r=this.data,s=r.location,c=r.type,l=r.startStationIds,u=r.stationProperty;return new Promise((function(r,d){t.default.loading(),console.log(wx.getStorageSync("vcode")),t.default.$http(e.openApi+"/station/".concat(i,"/match"),{adcode:n,searchKeyword:a,startStationIds:"start"==c?[]:l,vcode:i,stationProperty:u||""}).then((function(e){if("200"==e.code){for(var n=e.data,a=0;a<n.length;a++)n[a].distant=t.default.getDistance(s.lat,s.lon,n[a].latitude,n[a].longitude);var i=n.filter((function(t){return 0===t.source}));i.sort((function(t,e){return t.distance-e.distance}));var r=n.filter((function(t){return 2===t.source}));r.sort((function(t,e){return t.distance-e.distance}));var c=n.filter((function(t){return 0!==t.source&&2!==t.source}));c.sort((function(t,e){return t.distance-e.distance}));var l=[];l=(l=(l=l.concat(i)).concat(r)).concat(c),o.setData({filterList:l})}else t.default.alert(e.msg);t.default.hideLoading()})).catch((function(e){d(e),t.default.hideLoading(),console.error("request api.getStation error ",e)}))}))},isPointInPolygon:function(t,e){for(var n=0,a=e.length,o=0;o<a;o++){var i=e[o],r=e[(o+1)%a];if(Number(i.lon)!=Number(r.lon))if(!(Number(t[0])<Math.min(Number(i.lon),Number(r.lon))))if(!(Number(t[0])>=Math.max(Number(i.lon),Number(r.lon))))(Number(t[0])-Number(i.lon))*(Number(r.lat)-Number(i.lat))/(Number(r.lon)-Number(i.lon))+Number(i.lat)>Number(t[1])&&n++}return n%2==1},toCity:function(){var t=this;console.log(this.data.cityList||""),wx.navigateTo({url:"/pages/city/index?cityList=".concat(encodeURIComponent(JSON.stringify(this.data.cityList||"")),"&type=").concat(this.data.type||"start","&locationCity=").concat(encodeURIComponent(JSON.stringify(this.data.locationCity||""))),events:{selectCity:function(e){t.setData({selectCity:e}),t.getAllStation(e.code,"")}}})},selectStation:function(t){var e=t.currentTarget.dataset.value,n=this.data,a=n.allStationList,o=n.type;if(e&&"start"==o){for(var i=[],r=0;r<a.length;r++)this.isPointInPolygon([e.longitude,e.latitude],a[r].latitudeItems)&&i.push(a[r].id),e.stationId==a[r].id&&1==a[r].type&&i.push(a[r].id);e.startStationIds=i}this.setData({selectStation:e}),this.getOpenerEventChannel().emit("selectStation",{station:e,type:o});var s=getCurrentPages();s.length>1&&s[s.length-2].setData({selectedStation:e});wx.navigateBack()},bindKeyInput:function(t){var e=t.detail.value;this.getAllStation(this.data.selectCity.code,e)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/station/index.js'});require("pages/station/index.js");$gwx_XC_32=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
Z([[2,'&&'],[[7],[3,'canHtml']],[[7],[3,'canUInfo']]])
Z([[7],[3,'src']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_32_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_32_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_32=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_32=true;
var x=['./pages/webview/webview.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_32_1()
var oLE=_v()
_(r,oLE)
if(_oz(z,0,e,s,gg)){oLE.wxVkey=1
var xME=_v()
_(oLE,xME)
if(_oz(z,1,e,s,gg)){xME.wxVkey=1
}
xME.wxXCkey=1
}
else{oLE.wxVkey=2
}
oLE.wxXCkey=1
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_32();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/webview/webview.wxml'] = [$gwx_XC_32, './pages/webview/webview.wxml'];else __wxAppCode__['pages/webview/webview.wxml'] = $gwx_XC_32( './pages/webview/webview.wxml' );
	;__wxRoute = "pages/webview/webview";__wxRouteBegin = true;__wxAppCurrentFile__="pages/webview/webview.js";define("pages/webview/webview.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),a=e(require("../../@babel/runtime/regenerator")),n=require("../../@babel/runtime/helpers/asyncToGenerator"),t=e(require("../../utils/config")),r=require("../../utils/userInfo"),i=require("../../utils/util"),o=getApp();Page({data:{src:"",oriSrc:"",canUInfo:wx.canIUse&&wx.canIUse("button.open-type.getUserInfo"),canHtml:wx.canIUse&&wx.canIUse("web-view"),needwrap:0,neednick:0,showBack:!1,noLocalUserInfo:!1,oid:"",uid:"",nick:"",avatar:""},wxrefid:"",src:"",shareInfo:[],opts:{},onLoad:function(e){var t=this;console.log(e),1!=e.needwrap&&(e.needwrap=2),this.opts=e,2==e.needwrap?r.getOpenid().then(function(){var r=n(a.default.mark((function n(r){return a.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log("webview getUnionIdCb success:",r),r.openId&&t.setData({oid:r.openId}),t.processOptions(e);case 3:case"end":return a.stop()}}),n)})));return function(e){return r.apply(this,arguments)}}(),(function(e){console.log("webview getUnionIdCb err:",e),i.alert(e.header.errMsg||"未获取到用户信息")})):this.processOptions(e),o.comWebSetH5Data=this.setH5Data},processOptions:function(e){var a=this;if(e.scene){var n=decodeURIComponent(e.scene);if(1==i.getParams("p",n)){var r="https://wx.".concat(1!=t.default.env?"t.":"","17u.cn/groundtrafficAct/virusrgter/#/");e.src=decodeURIComponent("".concat(r,"?vcode=").concat(i.getParams("v",n),"&codeId=").concat(i.getParams("c",n)))}}var c=e.neednick?this.fnGetUserNick():Promise.resolve("do_not_need_userinfo");Promise.all([Promise.resolve(e),c]).then((function(e){var n=e[0],t=e[1],r=a.data.oid,c=a.data.uid,s="",d="",p=0,l=0,h=encodeURIComponent;if(n.neednick&&(t.nickName?a.setData({nick:t.nickName,avatar:t.avatarUrl||"https://file.40017.cn/touchweixinqq/wxapp/img/bargain/icon_default.png"}):(i.alert("未获取到用户信息"),a.setData({nick:"匿名用户",avatar:"https://file.40017.cn/touchweixinqq/wxapp/img/bargain/icon_default.png"}))),n.src&&(d=s=decodeURIComponent(n.src||"").replace(/(^\s*)|(\s*$)/g,"")),1==n.hideShare&&wx.hideShareMenu&&wx.hideShareMenu(),1==n.showBack&&(l=1),n.needwrap&&1==n.needwrap&&(p=1,s="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3827070276e49e30&redirect_uri=https%3a%2f%2fwx.17u.cn%2fwxinfo%2fWxMember%2fRedirectBind%3furl%3d".concat(h(h(s)),"%26refid%3d").concat(o.globalData.wxrefid,"%26hasCode%3dfalse%26wxAppScene%3d").concat(o.globalData.scene,"%26setMember%3dtrue&response_type=code&scope=snsapi_base&state=123#wechat_redirect")),n.needwrap&&2==n.needwrap){p=2;var u=s.split("#/");if((u=u.filter((function(e){return e.length}))).length){var f,w=u[0].indexOf("?"),g=w>=0;g&&w==u[0].length-1&&(g=!1,u[0]=u[0].substr(0,w)),u[0]=function e(a){return"/"==a[a.length-1]&&(a=a.substr(0,a.length-1)),"/"==a[a.length-1]?e(a):a}(u[0]),f=g?"&":"/?",n.neednick?u[0]="".concat(u[0]).concat(f,"oid=").concat(r,"&uid=").concat(c,"&nick=").concat(h(a.data.nick),"&avatar=").concat(a.data.avatar):u[0]="".concat(u[0]).concat(f,"oid=").concat(r,"&uid=").concat(c)}s=u.join("#/")}a.setData({src:s,oriSrc:d,needwrap:p,neednick:n.neednick||0,showBack:l}),a.wxrefid=n.wxrefid||"",a.src=n.src||""}))},fnGetUserNick:function(){},bdMessage:function(e){console.log("bus webview bindmessage ============>",e);var a=e.detail.data;if(!i.isEmpty(a)){a.forEach((function(e){i.isRealNum(e.indexNavTab)&&(o.globalData.indexNavTab=e.indexNavTab),i.isEmpty(e.WxOpenId)||(o.globalData.WxOpenId=e.WxOpenId,wx.setStorageSync("WxOpenId",e.WxOpenId))}));var n=a.filter((function(e){return e.interact}));n.length&&wx.setStorageSync("bus_webInteractData",n[0]),this.shareInfo=a.filter((function(e){return e.shareInfo&&e.shareInfo.currentPath}))}},bdError:function(e){},setH5Data:function(e){this.miniappData=encodeURIComponent(JSON.stringify({data:e.data,v:Date.now()})),this.backUrl=e.backUrl?decodeURIComponent(e.backUrl):this.baseUrl},onShow:function(){if(this.miniappData){var e="";if(this.backUrl.indexOf("#")>-1){var a=this.backUrl.split("#");e=a[0]+"#"+a[1]+(a[1].indexOf("?")>-1?"&":"?")+"_miniappData=".concat(this.miniappData),this.miniappData=null}else{var n=this.backUrl;e=n+(n.indexOf("?")>-1?"&":"?")+"_miniappData=".concat(this.miniappData),this.miniappData=null}this.setData({src:e})}},onShareAppMessage:function(e){console.log("bus webview onShareAppMessage ============>",e);var a=this.shareInfo.filter((function(a){return e.webViewUrl.replace("https://","").split("?")[0].split("#")[0]==(a.shareInfo||{}).currentPath})),n="",t="/pages/webview/webview?";if(2==this.data.needwrap?(t+="needwrap=".concat(this.data.needwrap,"&"),e.webViewUrl=this.data.oriSrc,n=this.data.oriSrc):n=this.data.src,this.data.neednick&&(t+="neednick=1&"),a.length){a=a[a.length-1].shareInfo;var r="".concat(t,"src=")+encodeURIComponent(a.path||e.webViewUrl||n);return(this.data.showBack||a.showBack)&&(r="/pages/index/index?shareUrl="+encodeURIComponent("".concat(t,"showBack=1&src=")+encodeURIComponent(a.path||e.webViewUrl||n))),console.log("path",r),{path:r,title:a.title||"",imageUrl:a.imageUrl||""}}var i="".concat(t,"src=")+encodeURIComponent(e.webViewUrl||n);return this.data.showBack&&(i="/pages/index/index?shareUrl="+encodeURIComponent("".concat(t,"src=")+encodeURIComponent(e.webViewUrl||n))),console.log("path",i),{path:i}}});
},{isPage:true,isComponent:true,currentFile:'pages/webview/webview.js'});require("pages/webview/webview.js");
