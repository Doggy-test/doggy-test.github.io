	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};	var __vd_version_info__ = __vd_version_info__ || {};
	/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(typeof o==="string"||typeof o==="boolean"||typeof o==="number") return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(Object.prototype.hasOwnProperty.call(o,k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&typeof o==="function"){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

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
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'closed']]])
Z([a,[3,'i-class i-alert '],[[2,'+'],[1,'i-alert-'],[[7],[3,'type']]],[3,' '],[[2,'?:'],[[7],[3,'showIcon']],[1,'i-alert-with-icon'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'desc']],[1,'i-alert-with-desc'],[1,'']]])
Z([[7],[3,'showIcon']])
Z([3,'i-alert-icon'])
Z([[2,'==='],[[7],[3,'type']],[1,'info']])
Z([[2,'?:'],[[7],[3,'desc']],[1,24],[1,16]])
Z([3,'prompt'])
Z([[2,'==='],[[7],[3,'type']],[1,'success']])
Z(z[5])
Z([3,'success'])
Z([[2,'==='],[[7],[3,'type']],[1,'warning']])
Z(z[5])
Z([3,'warning'])
Z([[2,'==='],[[7],[3,'type']],[1,'error']])
Z(z[5])
Z([3,'delete'])
Z([3,'desc'])
Z([[7],[3,'closable']])
Z([3,'handleTap'])
Z([3,'i-alert-close'])
Z([3,'close'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'i-class i-card '],[[2,'?:'],[[7],[3,'full']],[1,'i-card-full'],[1,'']]])
Z([[7],[3,'showHeader']])
Z([3,'i-class i-card-header'])
Z([[7],[3,'thumb']])
Z([[7],[3,'extra']])
Z([3,'content'])
Z([3,'footer'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleTap'])
Z([a,[3,'i-class i-cell '],[[2,'?:'],[[7],[3,'isLastCell']],[1,'i-cell-last'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'isLink']],[1,'i-cell-access'],[1,'']]])
Z([3,'icon'])
Z([3,'i-cell-bd'])
Z([[7],[3,'title']])
Z([[7],[3,'label']])
Z([3,'navigateTo'])
Z([3,'i-cell-ft'])
Z([[7],[3,'value']])
Z([3,'footer'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handlerScroll'])
Z([[7],[3,'scrollTop']])
Z([[12],[[6],[[7],[3,'parse']],[3,'setScrollStyle']],[[5],[[7],[3,'height']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'loading']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'i-class i-tabs-tab '],[[2,'?:'],[[7],[3,'scroll']],[1,'i-tabs-tab-scroll'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'current']],[1,'i-tabs-tab-current'],[1,'']]])
Z([[2,'?:'],[[7],[3,'dot']],[1,0],[[7],[3,'count']]])
Z([[7],[3,'dot']])
Z([[7],[3,'current']])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'scroll']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'check-ticket-result-page'])
Z([3,'page-result-box'])
Z([[2,'==='],[[7],[3,'msgNotice']],[1,'success']])
Z(z[2])
Z([[2,'!=='],[[7],[3,'msgNotice']],[1,'success']])
Z([[2,'&&'],[[7],[3,'orderList']],[[6],[[7],[3,'orderList']],[3,'length']]])
Z([[7],[3,'orderList']])
Z([3,'orderNo'])
Z([3,'head-box'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,1]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'dispatch-order-detail-page'])
Z([3,'info-box'])
Z([[6],[[7],[3,'orderInfo']],[3,'thirdPartyOrderNo']])
Z([[6],[[7],[3,'orderInfo']],[3,'flightNo']])
Z([[6],[[7],[3,'orderInfo']],[3,'orderNo']])
Z([[2,'||'],[[2,'||'],[[2,'==='],[[6],[[7],[3,'orderInfo']],[3,'orderStatus']],[1,9]],[[2,'==='],[[6],[[7],[3,'orderInfo']],[3,'orderStatus']],[1,11]]],[[2,'==='],[[6],[[7],[3,'orderInfo']],[3,'orderStatus']],[1,13]]])
Z([3,'page-btn-box'])
Z([[2,'==='],[[6],[[7],[3,'orderInfo']],[3,'orderStatus']],[1,11]])
Z([[2,'&&'],[[2,'||'],[[2,'==='],[[6],[[7],[3,'orderInfo']],[3,'orderStatus']],[1,9]],[[2,'==='],[[6],[[7],[3,'orderInfo']],[3,'orderStatus']],[1,13]]],[[2,'==='],[[7],[3,'orderAuthority']],[1,1]]])
Z([[6],[[7],[3,'maskObj']],[3,'isShow']])
Z([[2,'==='],[[6],[[7],[3,'maskObj']],[3,'type']],[1,'cancel-reason']])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'dispatch-order-list-page'])
Z([[6],[[7],[3,'filterObj']],[3,'type']])
Z([3,'clickFilterMask'])
Z([3,'mask-box'])
Z([3,'mask'])
Z([[2,'==='],[[6],[[7],[3,'filterObj']],[3,'type']],[1,'status']])
Z([[2,'==='],[[6],[[7],[3,'filterObj']],[3,'type']],[1,'station']])
Z([[2,'==='],[[6],[[7],[3,'filterObj']],[3,'type']],[1,'time']])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'order']],[3,'isLoading']]],[[2,'!'],[[6],[[6],[[7],[3,'order']],[3,'list']],[3,'length']]]])
Z([[6],[[7],[3,'maskObj']],[3,'isShow']])
Z([[2,'==='],[[6],[[7],[3,'maskObj']],[3,'type']],[1,'cancel-reason']])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'driver-order-detail-page'])
Z([[7],[3,'isShowOrderInfo']])
Z([3,'content-box'])
Z([[7],[3,'startStationDistance']])
Z([[6],[[7],[3,'orderInfo']],[3,'flightNo']])
Z([[6],[[7],[3,'maskObj']],[3,'isShow']])
Z([3,'clickMask'])
Z([3,'page-mask-box'])
Z([3,'mask'])
Z([[2,'==='],[[6],[[7],[3,'maskObj']],[3,'type']],[1,'nav']])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'shift-order-list-page'])
Z([3,'sixDateSel'])
Z([3,'toggleCalendar'])
Z([[7],[3,'calChangeDate']])
Z([3,'slideCalendar'])
Z([[7],[3,'sixDayArrs']])
Z([[6],[[7],[3,'filterObj']],[3,'type']])
Z([3,'clickFilterMask'])
Z([3,'mask-box'])
Z([3,'mask'])
Z([[2,'==='],[[6],[[7],[3,'filterObj']],[3,'type']],[1,'dptstation']])
Z([[2,'==='],[[6],[[7],[3,'filterObj']],[3,'type']],[1,'desstation']])
Z([3,'page-content-box'])
Z([1,true])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isLoading']]],[[2,'!'],[[6],[[7],[3,'orderList']],[3,'length']]]])
Z([[7],[3,'orderList']])
Z([3,'index'])
Z([3,'item-txt'])
Z(z[13])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'shiftStation']],[3,'length']],[1,2]])
Z([3,'head-box'])
Z([[2,'||'],[[2,'&&'],[[2,'==='],[[6],[[7],[3,'item']],[3,'vehicleId']],[1,0]],[[2,'!=='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,2]]],[[2,'&&'],[[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,2]],[[2,'==='],[[6],[[6],[[7],[3,'item']],[3,'driverWaterClassList']],[3,'length']],[1,0]]]])
Z([[2,'&&'],[[2,'!=='],[[6],[[7],[3,'item']],[3,'vehicleId']],[1,0]],[[2,'!=='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,2]]])
Z([[2,'&&'],[[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'driverWaterClassList']],[3,'length']],[1,0]],[[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,2]]])
Z([[2,'||'],[[2,'&&'],[[2,'||'],[[2,'==='],[[6],[[7],[3,'item']],[3,'vehicleId']],[1,0]],[[2,'==='],[[6],[[7],[3,'item']],[3,'driverId']],[1,0]]],[[2,'!=='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,2]]],[[2,'&&'],[[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,2]],[[2,'!'],[[6],[[7],[3,'item']],[3,'existDriver']]]]])
Z([[2,'||'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!=='],[[6],[[7],[3,'item']],[3,'vehicleId']],[1,0]],[[2,'!=='],[[6],[[7],[3,'item']],[3,'driverId']],[1,0]]],[[2,'!=='],[[6],[[7],[3,'item']],[3,'driverId']],[[7],[3,'driverId']]]],[[2,'!=='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,2]]],[[2,'&&'],[[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,2]],[[6],[[7],[3,'item']],[3,'existDriver']]]])
Z([[2,'&&'],[[2,'&&'],[[2,'!=='],[[6],[[7],[3,'item']],[3,'vehicleId']],[1,0]],[[2,'==='],[[6],[[7],[3,'item']],[3,'driverId']],[[7],[3,'driverId']]]],[[2,'!=='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,2]]])
Z([[6],[[7],[3,'maskObj']],[3,'isShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index-page'])
Z([[2,'==='],[[7],[3,'useMode']],[1,0]])
Z(z[1])
Z([[2,'==='],[[7],[3,'useMode']],[1,1]])
Z(z[1])
Z([3,'page-other-entry-box'])
Z([[6],[[6],[[7],[3,'driverMode']],[3,'authority']],[3,'checkTicket']])
Z(z[6])
Z([[6],[[6],[[7],[3,'driverMode']],[3,'authority']],[3,'checkOrder']])
Z([3,'jumpShiftOrderListPage'])
Z([3,'item-box order-item'])
Z([[7],[3,'shiftOrderListLength']])
Z([[6],[[6],[[7],[3,'driverMode']],[3,'authority']],[3,'schedule']])
Z([[6],[[6],[[7],[3,'driverMode']],[3,'authority']],[3,'myBill']])
Z(z[3])
Z(z[5])
Z([[7],[3,'isShowA']])
Z([[7],[3,'isShowB']])
Z([[7],[3,'isShowD']])
Z([[7],[3,'isShowC']])
Z([3,'receiveNoticePopInform'])
Z([[6],[[7],[3,'noticePop']],[3,'content']])
Z([[6],[[7],[3,'noticePop']],[3,'isShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'==='],[[7],[3,'useMode']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'==='],[[7],[3,'dataPickerIndex']],[1,3]])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'my-schedule-container'])
Z([3,'sixDateSel'])
Z([3,'toggleCalendar'])
Z([[7],[3,'calChangeDate']])
Z([3,'slideCalendar'])
Z([[7],[3,'sixDayArrs']])
Z([[6],[[7],[3,'filterObj']],[3,'type']])
Z([3,'clickFilterMask'])
Z([3,'mask-box'])
Z([3,'mask'])
Z([[2,'==='],[[6],[[7],[3,'filterObj']],[3,'type']],[1,'dptstation']])
Z([[2,'==='],[[6],[[7],[3,'filterObj']],[3,'type']],[1,'desstation']])
Z([3,'page-content-box'])
Z([[7],[3,'isShowNotice']])
Z([3,'list-box'])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'scheduleObj']],[3,'isLoading']]],[[2,'!'],[[6],[[6],[[7],[3,'scheduleObj']],[3,'list']],[3,'length']]]],[[2,'!'],[[6],[[6],[[7],[3,'scheduleObj']],[3,'expiredList']],[3,'length']]]])
Z([[6],[[7],[3,'scheduleObj']],[3,'list']])
Z([3,'index'])
Z([3,'item-box'])
Z([3,'head-box'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,2]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,1]])
Z([[2,'||'],[[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,2]],[[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,3]]])
Z([3,'content-box'])
Z([3,'stationIndex'])
Z([3,'stationItem'])
Z([[6],[[7],[3,'item']],[3,'stationList']])
Z(z[24])
Z([[2,'!=='],[[7],[3,'stationIndex']],[1,0]])
Z([[2,'&&'],[[2,'==='],[[7],[3,'showScheduleQrcode']],[1,1]],[[2,'==='],[[7],[3,'useMode']],[1,0]]])
Z([[2,'!'],[[6],[[7],[3,'scheduleObj']],[3,'isLoading']]])
Z([[6],[[7],[3,'scheduleObj']],[3,'expiredList']])
Z(z[17])
Z([3,'item-box is-expired'])
Z(z[19])
Z(z[20])
Z(z[21])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[24])
Z(z[28])
Z(z[29])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'receiveNoticePopInform'])
Z([[6],[[7],[3,'noticePop']],[3,'content']])
Z([[6],[[7],[3,'noticePop']],[3,'isShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,false])
Z([3,'content'])
Z([3,'handleLocationClick'])
Z([3,'station'])
Z([3,'#ed3f14'])
Z([3,'coordinates_fill'])
Z(z[4])
Z(z[5])
Z(z[0])
Z([3,'handlePhoneCall'])
Z([[6],[[7],[3,'orderDetail']],[3,'contact']])
Z([3,'30'])
Z([3,'mobilephone_fill'])
Z(z[0])
Z([[7],[3,'ticketTypes']])
Z([[7],[3,'index']])
Z([3,'ticket-item'])
Z(z[1])
Z([3,'passIndex'])
Z([3,'passItem'])
Z([[7],[3,'item']])
Z([[7],[3,'passIndex']])
Z([3,'passenger-list'])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'passItem']],[3,'checkInStatus']],[1,0]],[[2,'==='],[[6],[[7],[3,'orderDetail']],[3,'orderStatus']],[1,9]]])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'passItem']],[3,'checkInStatus']],[1,1]],[[2,'==='],[[6],[[7],[3,'orderDetail']],[3,'orderStatus']],[1,9]]])
Z([3,'action'])
Z([[2,'||'],[[2,'==='],[[6],[[7],[3,'item']],[3,'orderStatus']],[1,11]],[[2,'==='],[[6],[[7],[3,'item']],[3,'orderStatus']],[1,9]]])
Z([[2,'==='],[[6],[[7],[3,'orderDetail']],[3,'orderStatus']],[1,11]])
Z([[2,'==='],[[6],[[7],[3,'orderDetail']],[3,'orderStatus']],[1,9]])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'i-index-demo'])
Z([3,'handleQueryChange'])
Z([3,'wrapped'])
Z([3,'请输入姓名或者手机号码查询'])
Z([[7],[3,'query']])
Z([3,'onChange'])
Z([3,'90%'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'passWordAry']])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'key']])
Z([3,'in'])
Z([3,'it'])
Z([[6],[[7],[3,'item']],[3,'value']])
Z([[7],[3,'in']])
Z([3,'handleLocationClick'])
Z([3,'pass-detail'])
Z([[7],[3,'it']])
Z([3,'#ed3f14'])
Z([3,'coordinates_fill'])
Z(z[19])
Z(z[20])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'calendar-container'])
Z([[7],[3,'tipsMessage']])
Z([3,'jumpNotice'])
Z([3,'tips-message t-ellipsis'])
Z([[2,'=='],[[6],[[7],[3,'trainTips']],[3,'type']],[1,3]])
Z([3,'item'])
Z([[7],[3,'dates']])
Z([[6],[[7],[3,'item']],[3,'headId']])
Z([3,'index1'])
Z([3,'months'])
Z([[6],[[7],[3,'item']],[3,'month']])
Z([a,z[7],[3,'-'],[[7],[3,'index1']]])
Z([3,'idx'])
Z([3,'day'])
Z([[7],[3,'months']])
Z([a,z[7],z[11][2],z[11][3],z[11][2],[[7],[3,'idx']]])
Z([3,'clickHandler'])
Z([3,'days tc'])
Z([[6],[[7],[3,'day']],[3,'date']])
Z([[2,'||'],[[2,'&&'],[[6],[[7],[3,'day']],[3,'disable']],[[2,'!'],[[2,'&&'],[[2,'&&'],[[7],[3,'lastEndDate2']],[[2,'>'],[[6],[[7],[3,'day']],[3,'times']],[[7],[3,'lastEndDate']]]],[[2,'<'],[[6],[[7],[3,'day']],[3,'times']],[[7],[3,'lastEndDate2']]]]]],[[2,'&&'],[[7],[3,'noExtendDataDisable']],[[2,'!'],[[6],[[6],[[7],[3,'dateExtend']],[[6],[[7],[3,'day']],[3,'date']]],[3,'value']]]]])
Z([[6],[[6],[[7],[3,'dateExtend']],[[6],[[7],[3,'day']],[3,'date']]],[3,'value']])
Z([[2,'&&'],[[6],[[7],[3,'dateExtend']],[[6],[[7],[3,'day']],[3,'date']]],[[6],[[6],[[7],[3,'dateExtend']],[[6],[[7],[3,'day']],[3,'date']]],[3,'extra']]])
Z([[6],[[7],[3,'day']],[3,'festival']])
Z([[6],[[7],[3,'day']],[3,'times']])
Z([a,[3,'day-item-box '],[[2,'+'],[[2,'+'],[[6],[[7],[3,'day']],[3,'className']],[[2,'?:'],[[2,'||'],[[2,'=='],[[7],[3,'selectDate']],[[6],[[7],[3,'day']],[3,'date']]],[[2,'&&'],[[7],[3,'goDate']],[[2,'=='],[[7],[3,'goDate']],[[6],[[7],[3,'day']],[3,'date']]]]],[[2,'?:'],[[2,'||'],[[2,'&&'],[[6],[[7],[3,'day']],[3,'disable']],[[2,'!'],[[2,'&&'],[[2,'&&'],[[7],[3,'lastEndDate2']],[[2,'>'],[[6],[[7],[3,'day']],[3,'times']],[[7],[3,'lastEndDate']]]],[[2,'<'],[[6],[[7],[3,'day']],[3,'times']],[[7],[3,'lastEndDate2']]]]]],[[2,'&&'],[[7],[3,'noExtendDataDisable']],[[2,'!'],[[6],[[6],[[7],[3,'dateExtend']],[[6],[[7],[3,'day']],[3,'date']]],[3,'value']]]]],[1,' day-active-disable '],[1,' day-active ']],[1,'']]],[[2,'?:'],[[2,'&&'],[[7],[3,'currentDate_']],[[2,'>='],[[6],[[7],[3,'currentDate_']],[[6],[[7],[3,'day']],[3,'times']]],[1,0]]],[[2,'?:'],[[2,'||'],[[2,'&&'],[[6],[[7],[3,'day']],[3,'disable']],[[2,'!'],[[2,'&&'],[[2,'&&'],[[7],[3,'lastEndDate2']],[[2,'>'],[[6],[[7],[3,'day']],[3,'times']],[[7],[3,'lastEndDate']]]],[[2,'<'],[[6],[[7],[3,'day']],[3,'times']],[[7],[3,'lastEndDate2']]]]]],[[2,'&&'],[[7],[3,'noExtendDataDisable']],[[2,'!'],[[6],[[6],[[7],[3,'dateExtend']],[[6],[[7],[3,'day']],[3,'date']]],[3,'value']]]]],[1,' day-current-disable '],[1,' day-current ']],[1,'']]],[3,' '],[[2,'?:'],[[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'currentDate']],[[2,'>'],[[6],[[7],[3,'day']],[3,'times']],[[6],[[7],[3,'currentDate']],[1,0]]]],[[7],[3,'currentDate']]],[[2,'<'],[[6],[[7],[3,'day']],[3,'times']],[[6],[[7],[3,'currentDate']],[1,1]]]],[[2,'?:'],[[2,'=='],[[7],[3,'soursePath']],[1,'hotel']],[1,'selectMiddle'],[1,'flightselectM']],[1,'']],[3,' '],[[2,'?:'],[[2,'&&'],[[2,'&&'],[[7],[3,'currentDate_']],[[2,'=='],[[6],[[7],[3,'currentDate_']],[[6],[[7],[3,'day']],[3,'times']]],[1,0]]],[[2,'=='],[[7],[3,'soursePath']],[1,'hotel']]],[1,'left-acitve'],[1,'']],[3,' '],[[2,'?:'],[[2,'&&'],[[2,'&&'],[[7],[3,'currentDate_']],[[2,'=='],[[6],[[7],[3,'currentDate_']],[[6],[[7],[3,'day']],[3,'times']]],[1,1]]],[[2,'=='],[[7],[3,'soursePath']],[1,'hotel']]],[1,'right-active'],[1,'']],[3,' '],[[2,'?:'],[[2,'&&'],[[2,'&&'],[[7],[3,'currentDate_']],[[2,'>='],[[6],[[7],[3,'currentDate_']],[[6],[[7],[3,'day']],[3,'times']]],[1,0]]],[[6],[[7],[3,'rangeText']],[[6],[[7],[3,'currentDate_']],[[6],[[7],[3,'day']],[3,'times']]]]],[1,' day-current'],[1,'']]])
Z([[6],[[7],[3,'day']],[3,'topTxt']])
Z([[2,'&&'],[[2,'!'],[[2,'!'],[[7],[3,'day']]]],[[6],[[7],[3,'scheduleDayArr']],[[6],[[7],[3,'day']],[3,'date']]]])
Z([[2,'&&'],[[6],[[7],[3,'trainTips']],[3,'_showDialog']],[[6],[[6],[[7],[3,'trainTips']],[3,'_list']],[3,'length']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'child-box'])
Z([[2,'==='],[[7],[3,'displayPage']],[1,'01']])
Z([[2,'==='],[[7],[3,'displayPage']],[1,'02']])
Z([[2,'==='],[[7],[3,'displayPage']],[1,'03']])
Z([[2,'==='],[[7],[3,'displayPage']],[1,'04']])
Z([[2,'==='],[[7],[3,'displayPage']],[1,'05']])
Z([[2,'==='],[[7],[3,'shiftType']],[1,2]])
Z([[2,'==='],[[7],[3,'displayPage']],[1,'06']])
Z([3,'open-sch left-box'])
Z([[2,'!=='],[[7],[3,'shiftType']],[1,2]])
Z([3,'not-flow'])
Z([3,'selectVehicle'])
Z([3,'radio-box flexbox'])
Z([3,'hassale-num flex1'])
Z([[2,'!=='],[[7],[3,'shiftType']],[1,2]])
Z([[2,'==='],[[7],[3,'shiftType']],[1,2]])
Z([3,'selectDriver'])
Z([3,'radio-box flexbox b-b-1'])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[6])
Z([[2,'==='],[[7],[3,'displayPage']],[1,'07']])
Z([[2,'==='],[[7],[3,'displayPage']],[1,'08']])
Z([[2,'==='],[[7],[3,'displayPage']],[1,'09']])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'child-box'])
Z([[2,'||'],[[2,'==='],[[7],[3,'pageType']],[1,'vehicle']],[[2,'==='],[[7],[3,'pageType']],[1,'shiftList']]])
Z([3,'index'])
Z([3,'vehicle'])
Z([[7],[3,'companyList']])
Z([3,'vehicleOwnerName'])
Z([[2,'!'],[[2,'!'],[[6],[[7],[3,'vehicle']],[3,'vehicleOwnerName']]]])
Z([[2,'>'],[[6],[[7],[3,'vehicleList']],[3,'length']],[1,0]])
Z(z[2])
Z([3,'caritem'])
Z([[7],[3,'vehicleList']])
Z([3,'selectVehicle'])
Z([a,[3,'vehicle-item '],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'vehicleObj']],[3,'vehicleNo']],[[6],[[7],[3,'caritem']],[1,'vehicleName']]],[1,'active'],[1,'']]])
Z([[7],[3,'index']])
Z([[2,'!'],[[2,'!'],[[6],[[7],[3,'caritem']],[3,'vehicleOwnerName']]]])
Z([[2,'==='],[[7],[3,'pageType']],[1,'driver']])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'filterObj']],[3,'type']])
Z([3,'clickFilterMask'])
Z([3,'mask-box'])
Z([3,'mask'])
Z([[2,'==='],[[6],[[7],[3,'filterObj']],[3,'type']],[1,'dpt']])
Z([[2,'==='],[[6],[[7],[3,'filterObj']],[3,'type']],[1,'des']])
Z([[2,'==='],[[6],[[7],[3,'filterObj']],[3,'type']],[1,'startcity']])
Z([[2,'==='],[[6],[[7],[3,'filterObj']],[3,'type']],[1,'endcity']])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content-pc'])
Z([3,'sixDateSel'])
Z([3,'toggleCalendar'])
Z([[7],[3,'calChangeDate']])
Z([3,'slideCalendar'])
Z([[7],[3,'sixDayArrs']])
Z([3,'filterDes'])
Z([3,'filterDpt'])
Z([3,'filterEndCity'])
Z([3,'filterStartCity'])
Z([[7],[3,'isClearFilter']])
Z([[7],[3,'endCityList']])
Z([[7],[3,'endStationList']])
Z([3,'selectdown'])
Z([[7],[3,'startCityList']])
Z([[7],[3,'startStationList']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isLoading']]],[[2,'!'],[[6],[[7],[3,'list']],[3,'length']]]])
Z([3,'scroll'])
Z([3,'scrolltolower'])
Z([3,'scroll-list'])
Z([3,'true'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[21])
Z([3,'plan-item '])
Z([[7],[3,'index']])
Z([3,'flexbox schedule-time'])
Z([[2,'&&'],[[2,'&&'],[[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,1]],[[6],[[7],[3,'item']],[3,'driverName']]],[[6],[[7],[3,'item']],[3,'vehicleNo']]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,2]])
Z([[6],[[7],[3,'item']],[3,'startTimeStep']])
Z([[7],[3,'hasAuthor']])
Z([[7],[3,'noMore']])
Z([[2,'&&'],[[7],[3,'showOperate']],[[7],[3,'hasAuthor']]])
Z([3,'hideOperate'])
Z([3,'preventTouchMove'])
Z([3,'mask'])
Z(z[36])
Z(z[17])
Z([3,'slider-box'])
Z(z[20])
Z([[6],[[7],[3,'shiftAuthorityMap']],[1,1]])
Z([[2,'&&'],[[6],[[7],[3,'shiftAuthorityMap']],[1,6]],[[2,'==='],[[6],[[7],[3,'selectItem']],[3,'shiftType']],[1,1]]])
Z([[6],[[7],[3,'shiftAuthorityMap']],[1,2]])
Z([[6],[[7],[3,'shiftAuthorityMap']],[1,3]])
Z([[6],[[7],[3,'shiftAuthorityMap']],[1,8]])
Z([[6],[[7],[3,'shiftAuthorityMap']],[1,4]])
Z([[6],[[7],[3,'shiftAuthorityMap']],[1,5]])
Z([[6],[[7],[3,'shiftAuthorityMap']],[1,7]])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'checkSuccess']])
Z([3,'success'])
Z([3,'验票信息'])
Z([3,'ticket-info'])
Z([3,'content'])
Z([3,'title'])
Z([[2,'==='],[[6],[[7],[3,'orderInfo']],[3,'shiftType']],[1,1]])
Z([[2,'==='],[[6],[[7],[3,'orderInfo']],[3,'shiftType']],[1,2]])
Z([3,'passenger-info'])
Z([3,'footer'])
Z([[6],[[7],[3,'orderInfo']],[3,'passengerInfoList']])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'passengerName']])
Z([3,'icon'])
Z([3,'addressbook_fill'])
Z([[2,'!'],[[7],[3,'checkSuccess']]])
Z([3,'error'])
Z([[2,'&&'],[[2,'!'],[[2,'!'],[[7],[3,'msg']]]],[[2,'!='],[[7],[3,'msg']],[1,'undefined']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'shift-list-page'])
Z([3,'sixDateSel'])
Z([3,'toggleCalendar'])
Z([[7],[3,'calChangeDate']])
Z([3,'slideCalendar'])
Z([[7],[3,'sixDayArrs']])
Z([[6],[[7],[3,'filterObj']],[3,'type']])
Z([3,'clickFilterMask'])
Z([3,'mask-box'])
Z([3,'mask'])
Z([[2,'==='],[[6],[[7],[3,'filterObj']],[3,'type']],[1,'dptstation']])
Z([[2,'==='],[[6],[[7],[3,'filterObj']],[3,'type']],[1,'desstation']])
Z([[2,'==='],[[6],[[7],[3,'filterObj']],[3,'type']],[1,'scheduleType']])
Z([3,'page-content-box'])
Z([[7],[3,'isShowNotice']])
Z([1,true])
Z([[2,'==='],[[7],[3,'tabType']],[1,1]])
Z([3,'list-box'])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'waitObj']],[3,'isLoading']]],[[2,'!'],[[6],[[6],[[7],[3,'waitObj']],[3,'list']],[3,'length']]]])
Z([[6],[[7],[3,'waitObj']],[3,'list']])
Z([3,'index'])
Z([3,'item-box'])
Z([3,'head-box'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,2]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,1]])
Z([[2,'||'],[[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,2]],[[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,3]]])
Z([3,'content-box'])
Z([3,'stationIndex'])
Z([3,'stationItem'])
Z([[6],[[7],[3,'item']],[3,'stationList']])
Z(z[27])
Z([a,[3,'station-box '],[[2,'?:'],[[2,'==='],[[7],[3,'stationIndex']],[1,0]],[1,'station-box-0'],[1,'']]])
Z([[2,'!=='],[[7],[3,'stationIndex']],[1,0]])
Z(z[24])
Z([3,'passenger-box'])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'carryChildrenNum']],[1,0]])
Z(z[35])
Z([3,'bottom-box'])
Z([[2,'||'],[[2,'&&'],[[6],[[7],[3,'item']],[3,'agreementId']],[[6],[[7],[3,'item']],[3,'agreementNo']]],[[6],[[7],[3,'item']],[3,'electronicWaybillUrl']]])
Z([3,'right-box'])
Z([[2,'&&'],[[2,'==='],[[7],[3,'showScheduleQrcode']],[1,1]],[[2,'==='],[[7],[3,'useMode']],[1,0]]])
Z([[2,'||'],[[2,'&&'],[[6],[[7],[3,'ticketAuthority']],[1,0]],[[2,'==='],[[7],[3,'useMode']],[1,1]]],[[2,'==='],[[7],[3,'useMode']],[1,0]]])
Z([[2,'||'],[[2,'&&'],[[6],[[7],[3,'ticketAuthority']],[1,1]],[[2,'==='],[[7],[3,'useMode']],[1,1]]],[[2,'==='],[[7],[3,'useMode']],[1,0]]])
Z([[2,'==='],[[7],[3,'tabType']],[1,2]])
Z(z[17])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'checkedObj']],[3,'isLoading']]],[[2,'!'],[[6],[[6],[[7],[3,'checkedObj']],[3,'list']],[3,'length']]]])
Z([[6],[[7],[3,'checkedObj']],[3,'list']])
Z(z[20])
Z(z[21])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[23])
Z(z[26])
Z(z[27])
Z(z[28])
Z(z[29])
Z(z[27])
Z([a,z[31][1],z[31][2]])
Z(z[32])
Z(z[24])
Z(z[34])
Z(z[35])
Z(z[35])
Z(z[37])
Z([[2,'||'],[[2,'&&'],[[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,2]],[[7],[3,'showFlow']]],[[7],[3,'showReportStatic']]])
Z(z[38])
Z(z[39])
Z(z[40])
Z(z[42])
Z([[2,'==='],[[7],[3,'tabType']],[1,0]])
Z(z[17])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'allScheduleObj']],[3,'isLoading']]],[[2,'!'],[[6],[[6],[[7],[3,'allScheduleObj']],[3,'list']],[3,'length']]]])
Z([[6],[[7],[3,'allScheduleObj']],[3,'list']])
Z(z[20])
Z(z[21])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z(z[28])
Z(z[29])
Z(z[27])
Z([a,z[31][1],z[31][2]])
Z(z[32])
Z(z[24])
Z(z[34])
Z(z[35])
Z(z[35])
Z(z[37])
Z(z[38])
Z(z[39])
Z(z[40])
Z(z[41])
Z(z[42])
Z([[7],[3,'showOperate']])
Z([3,'hideOperate'])
Z([3,'preventTouchMove'])
Z(z[9])
Z(z[9])
Z([3,'scroll'])
Z([3,'slider-box'])
Z([3,'true'])
Z([[6],[[7],[3,'agreementSlt']],[3,'agreementUrl']])
Z([[2,'&&'],[[6],[[7],[3,'agreementSlt']],[3,'agreementId']],[[6],[[7],[3,'agreementSlt']],[3,'agreementNo']]])
Z([[6],[[7],[3,'agreementSlt']],[3,'electronicWaybillUrl']])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'shift-list-page'])
Z([[6],[[7],[3,'filterObj']],[3,'type']])
Z([3,'clickFilterMask'])
Z([3,'mask-box'])
Z([3,'mask'])
Z([[2,'==='],[[6],[[7],[3,'filterObj']],[3,'type']],[1,'dptstation']])
Z([[2,'==='],[[6],[[7],[3,'filterObj']],[3,'type']],[1,'desstation']])
Z([3,'page-content-box'])
Z([[7],[3,'isShowNotice']])
Z([1,true])
Z([[2,'==='],[[7],[3,'tabType']],[1,1]])
Z([3,'list-box'])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'waitObj']],[3,'isLoading']]],[[2,'!'],[[6],[[6],[[7],[3,'waitObj']],[3,'list']],[3,'length']]]])
Z([[6],[[7],[3,'waitObj']],[3,'list']])
Z([[7],[3,'index']])
Z([3,'item-box'])
Z([3,'head-box'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,2]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,1]])
Z([[2,'||'],[[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,2]],[[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,3]]])
Z([3,'stationIndex'])
Z([3,'stationItem'])
Z([[6],[[7],[3,'item']],[3,'stationList']])
Z([[7],[3,'stationIndex']])
Z([a,[3,'station-box '],[[2,'?:'],[[2,'==='],[[7],[3,'stationIndex']],[1,0]],[1,'station-box-0'],[1,'']]])
Z([[2,'!=='],[[7],[3,'stationIndex']],[1,0]])
Z(z[18])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'agreementId']],[[6],[[7],[3,'item']],[3,'agreementNo']]])
Z([[2,'==='],[[7],[3,'tabType']],[1,2]])
Z(z[11])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'checkedObj']],[3,'isLoading']]],[[2,'!'],[[6],[[6],[[7],[3,'checkedObj']],[3,'list']],[3,'length']]]])
Z([[6],[[7],[3,'checkedObj']],[3,'list']])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z(z[18])
Z(z[17])
Z(z[20])
Z(z[21])
Z(z[22])
Z(z[23])
Z([a,z[24][1],z[24][2]])
Z(z[25])
Z(z[18])
Z(z[27])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'handleWaitQueryChange'])
Z([3,'wrapped'])
Z([3,'请输入手机号码查询'])
Z([[7],[3,'query']])
Z([[7],[3,'waitList']])
Z([[7],[3,'index']])
Z([[2,'==='],[[6],[[7],[3,'waitList']],[3,'length']],[1,0]])
Z([[6],[[7],[3,'maskObj']],[3,'isShow']])
Z([[2,'==='],[[6],[[7],[3,'maskObj']],[3,'type']],[1,'cancel-reason']])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'shift-order-list-page'])
Z([3,'page-filter-box'])
Z([a,[3,'top:'],[[7],[3,'filterTop']],[3,'px']])
Z([[2,'==='],[[7],[3,'tabType']],[1,1]])
Z([[2,'==='],[[7],[3,'tabType']],[1,2]])
Z([[6],[[7],[3,'filterObj']],[3,'type']])
Z([3,'clickFilterMask'])
Z([3,'mask-box'])
Z([3,'mask'])
Z([a,z[2][1],[[7],[3,'contentTop']],z[2][3]])
Z(z[3])
Z([[2,'==='],[[6],[[7],[3,'filterObj']],[3,'type']],[1,'status']])
Z([[2,'==='],[[6],[[7],[3,'filterObj']],[3,'type']],[1,'station']])
Z([[2,'==='],[[6],[[7],[3,'filterObj']],[3,'type']],[1,'time']])
Z(z[4])
Z(z[11])
Z(z[12])
Z([3,'page-content-box'])
Z([a,[3,'padding-top:'],z[9][2],z[2][3]])
Z(z[3])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isLoading']]],[[2,'!'],[[6],[[7],[3,'orderList']],[3,'length']]]])
Z([[7],[3,'orderList']])
Z([[7],[3,'index']])
Z([3,'jumpDriverOrderDetailPage'])
Z([3,'item-box'])
Z([[6],[[7],[3,'item']],[3,'orderNo']])
Z([3,'content-box'])
Z([3,'num'])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'isOtherChecked']]])
Z([3,'clickOtherCheckedBtn'])
Z([3,'other-checked-box'])
Z(z[22])
Z([[6],[[7],[3,'item']],[3,'showOtherCheckedToast']])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'totalCarryChildrenNum']],[1,0]])
Z(z[4])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isLoading']]],[[2,'!'],[[6],[[7],[3,'cardOrderList']],[3,'length']]]])
Z([[7],[3,'hasCheckAllBtn']])
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'handleTabChange'])
Z([3,'#5cadff'])
Z([[7],[3,'current']])
Z([3,'1'])
Z([3,'待发班次'])
Z([3,'2'])
Z([3,'已发班次'])
Z([3,'list'])
Z([[7],[3,'isShowAns']])
Z([[2,'==='],[[7],[3,'current']],[1,'1']])
Z([3,'list-wrap'])
Z([[7],[3,'waitList']])
Z([[7],[3,'index']])
Z([[2,'==='],[[6],[[7],[3,'waitList']],[3,'length']],[1,0]])
Z([[2,'==='],[[7],[3,'current']],[1,'2']])
Z(z[11])
Z([[7],[3,'historyList']])
Z(z[13])
Z([[2,'==='],[[6],[[7],[3,'historyList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ticket-count-page'])
Z([3,'flex-box'])
Z([[7],[3,'showReportStatic']])
Z([[7],[3,'showFlow']])
Z([3,'ticket-count-box'])
Z([[2,'==='],[[7],[3,'activeTab']],[1,1]])
Z([[2,'!'],[[6],[[7],[3,'reportList']],[3,'length']]])
Z([[2,'>'],[[6],[[7],[3,'reportList']],[3,'length']],[1,0]])
Z([[2,'==='],[[7],[3,'activeTab']],[1,2]])
Z([[2,'==='],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'item']],[3,'startTime']])
Z([[6],[[7],[3,'item']],[3,'lineName']])
Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'==='],[[6],[[7],[3,'item']],[3,'orderStatus']],[1,11]],[[2,'==='],[[6],[[7],[3,'item']],[3,'orderStatus']],[1,12]]],[[2,'==='],[[6],[[7],[3,'item']],[3,'orderStatus']],[1,13]]],[[2,'==='],[[6],[[7],[3,'item']],[3,'orderStatus']],[1,14]]])
Z([3,'footer'])
Z(z[3])
Z([[2,'||'],[[2,'||'],[[2,'==='],[[6],[[7],[3,'item']],[3,'orderStatus']],[1,11]],[[2,'==='],[[6],[[7],[3,'item']],[3,'orderStatus']],[1,13]]],[[2,'==='],[[6],[[7],[3,'item']],[3,'orderStatus']],[1,14]]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'orderStatus']],[1,12]])
Z(z[6])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'orderStatus']],[1,11]])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,false])
Z([3,'content'])
Z([3,'card-item item-header'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,1]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'shiftType']],[1,2]])
Z(z[4])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"m_./dist/index-item/index.wxml:parse":np_0,"m_./dist/index/index.wxml:parse":np_1,"p_./pages/planControl/filter.wxs":np_2,"p_./pages/shiftOrderList/shiftOrderList.wxs":np_3,};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./dist/index-item/index.wxml']={};
f_['./dist/index-item/index.wxml']['parse'] =nv_require("m_./dist/index-item/index.wxml:parse");
function np_0(){var nv_module={nv_exports:{}};nv_module.nv_exports = ({});return nv_module.nv_exports;}

f_['./dist/index/index.wxml']={};
f_['./dist/index/index.wxml']['parse'] =nv_require("m_./dist/index/index.wxml:parse");
function np_1(){var nv_module={nv_exports:{}};nv_module.nv_exports = ({nv_setScrollStyle:(function (nv_height){var nv_units = ['%','px','rem','rpx','em','rem'];var nv_hasUnits = false;for(var nv_i = 0;nv_i < nv_units.nv_length;nv_i++){var nv_u = nv_units[((nt_0=(nv_i),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))];if (nv_height.nv_indexOf(nv_u) > -1){nv_hasUnits = true;break}};return('height:' + (nv_hasUnits ? nv_height:nv_height + 'px'))}),});return nv_module.nv_exports;}

f_['./pages/planControl/filter.wxs'] = nv_require("p_./pages/planControl/filter.wxs");
function np_2(){var nv_module={nv_exports:{}};var nv_filterDate = (function (nv_data){if (!!nv_data && nv_data.nv_length === 10){var nv_returnStr = nv_data.nv_substring(5);return(nv_returnStr)} else {return('')}});var nv_filterTime = (function (nv_item){var nv_type = nv_item.nv_type;var nv_startTime = nv_item.nv_startTime || '';var nv_lastStartTime = nv_item.nv_lastStartTime || '';var nv_startTimeStep = nv_item.nv_startTimeStep || '';var nv_lastEndTime = nv_item.nv_lastEndTime || '';var nv_endTime = nv_item.nv_endTime || '';if (nv_item.nv_shiftType === 1){return(nv_startTime)};if (nv_item.nv_shiftType === 2){return(nv_startTime + '-' + nv_lastStartTime)} else if (nv_item.nv_shiftType === 3){return(nv_startTime + '-' + nv_endTime)}});var nv_isFirst = false;var nv_filterIsOverTime2 = (function (nv_item,nv_filterTime){if (nv_isFirst)return;;var nv_localTime = Date.nv_now();var nv_lineStr = (nv_item.nv_startDay) + ' ' + nv_item.nv_startTime;var nv_lineTime = Date.nv_parse(nv_lineStr);if (nv_lineTime >= nv_localTime){nv_isFirst = true;return('ftid')} else if (!nv_lineTime || !nv_localTime){return('')} else {return('')}});var nv_filterIsOverTime = (function (nv_item,nv_filterTime){var nv_localTime = Date.nv_now();if (!!nv_item.nv_endTime || !!nv_item.nv_lastStartTime){var nv_lineStr = (nv_item.nv_startDay) + ' ' + (nv_item.nv_endTime || nv_item.nv_lastStartTime)} else {var nv_lineStr = (nv_item.nv_startDay) + ' ' + nv_item.nv_startTime};var nv_lineTime = Date.nv_parse(nv_lineStr);if (nv_lineTime >= nv_localTime){return('')} else if (!nv_lineTime || !nv_localTime){return('')} else {return('overTime')}});nv_module.nv_exports = ({nv_filterDate:nv_filterDate,nv_filterTime:nv_filterTime,nv_filterIsOverTime:nv_filterIsOverTime,nv_filterIsOverTime2:nv_filterIsOverTime2,});return nv_module.nv_exports;}

f_['./pages/planControl/planControl.wxml']={};
f_['./pages/planControl/planControl.wxml']['filters'] =f_['./pages/planControl/filter.wxs'] || nv_require("p_./pages/planControl/filter.wxs");
f_['./pages/planControl/planControl.wxml']['filters']();

f_['./pages/shiftOrderList/shiftOrderList.wxml']={};
f_['./pages/shiftOrderList/shiftOrderList.wxml']['filter'] =f_['./pages/shiftOrderList/shiftOrderList.wxs'] || nv_require("p_./pages/shiftOrderList/shiftOrderList.wxs");
f_['./pages/shiftOrderList/shiftOrderList.wxml']['filter']();

f_['./pages/shiftOrderList/shiftOrderList.wxs'] = nv_require("p_./pages/shiftOrderList/shiftOrderList.wxs");
function np_3(){var nv_module={nv_exports:{}};var nv_sourceTypeSetting = ({'nv_1':'微信公众号','nv_2':'同程线路车','nv_101':'微信小程序','nv_102':'手持设备','nv_103':'购票机','nv_104':'售检设备',});function nv_getSourceType(nv_val){if (!nv_val){return('分销')};var nv_type = nv_val.nv_toString();return(nv_sourceTypeSetting[((nt_0=(nv_type),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))] || '分销')};nv_module.nv_exports = ({nv_getSourceType:nv_getSourceType,});return nv_module.nv_exports;}

var x=['./components/no-result/no-result.wxml','./components/noticePop/noticePop.wxml','./dist/alert/index.wxml','./dist/badge/index.wxml','./dist/card/index.wxml','./dist/cell-group/index.wxml','./dist/cell/index.wxml','./dist/icon/index.wxml','./dist/index-item/index.wxml','./dist/index/index.wxml','./dist/input/index.wxml','./dist/load-more/index.wxml','./dist/tab/index.wxml','./dist/tabs/index.wxml','./pages/checkTicketResult/checkTicketResult.wxml','./pages/dispatchOrderDetail/dispatchOrderDetail.wxml','./pages/dispatchOrderList/dispatchOrderList.wxml','./pages/driverOrderDetail/driverOrderDetail.wxml','./pages/focusShiftList/focusShiftList.wxml','./pages/index/index.wxml','./pages/map/map.wxml','./pages/my/my.wxml','./pages/myBill/myBill.wxml','./pages/mySchedule/mySchedule.wxml','./pages/noticeList/noticeList.wxml','./pages/orderConfirm/orderConfirm.wxml','./pages/orderDetail/orderDetail.wxml','./pages/passenger/passenger.wxml','./pages/planControl/components/calendar/calendar.wxml','./pages/planControl/components/calendars/calendars.wxml','./pages/planControl/components/openSch/openSch.wxml','./pages/planControl/components/selectPage/selectPage.wxml','./pages/planControl/components/selectdown/selectdown.wxml','./pages/planControl/planControl.wxml','./pages/scan/scan.wxml','./pages/scanResult/scanResult.wxml','./pages/setting/setting.wxml','./pages/shiftJianList/shiftList.wxml','./pages/shiftList/shiftList.wxml','./pages/shiftOrder/shiftOrder.wxml','/templates/orderItem/index.wxml','./pages/shiftOrderList/shiftOrderList.wxml','./pages/shiftSchedule/shiftSchedule.wxml','/templates/shiftSchedule/index.wxml','./pages/showQrcode/showQrcode.wxml','./pages/ticketCountList/ticketCountList.wxml','./templates/orderItem/index.wxml','./templates/shiftSchedule/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_v()
_(r,xC)
if(_oz(z,0,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var fE=_v()
_(r,fE)
if(_oz(z,0,e,s,gg)){fE.wxVkey=1
var cF=_n('view')
_rz(z,cF,'class',1,e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,2,e,s,gg)){hG.wxVkey=1
var cI=_n('view')
_rz(z,cI,'class',3,e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,4,e,s,gg)){oJ.wxVkey=1
var eN=_mz(z,'i-icon',['size',5,'type',1],[],e,s,gg)
_(oJ,eN)
}
var lK=_v()
_(cI,lK)
if(_oz(z,7,e,s,gg)){lK.wxVkey=1
var bO=_mz(z,'i-icon',['size',8,'type',1],[],e,s,gg)
_(lK,bO)
}
var aL=_v()
_(cI,aL)
if(_oz(z,10,e,s,gg)){aL.wxVkey=1
var oP=_mz(z,'i-icon',['size',11,'type',1],[],e,s,gg)
_(aL,oP)
}
var tM=_v()
_(cI,tM)
if(_oz(z,13,e,s,gg)){tM.wxVkey=1
var xQ=_mz(z,'i-icon',['size',14,'type',1],[],e,s,gg)
_(tM,xQ)
}
oJ.wxXCkey=1
oJ.wxXCkey=3
lK.wxXCkey=1
lK.wxXCkey=3
aL.wxXCkey=1
aL.wxXCkey=3
tM.wxXCkey=1
tM.wxXCkey=3
_(hG,cI)
}
var oR=_n('slot')
_(cF,oR)
var fS=_n('slot')
_rz(z,fS,'name',16,e,s,gg)
_(cF,fS)
var oH=_v()
_(cF,oH)
if(_oz(z,17,e,s,gg)){oH.wxVkey=1
var cT=_mz(z,'view',['bindtap',18,'class',1],[],e,s,gg)
var hU=_n('i-icon')
_rz(z,hU,'type',20,e,s,gg)
_(cT,hU)
_(oH,cT)
}
hG.wxXCkey=1
hG.wxXCkey=3
oH.wxXCkey=1
oH.wxXCkey=3
_(fE,cF)
}
fE.wxXCkey=1
fE.wxXCkey=3
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var cW=_n('slot')
_(r,cW)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var lY=_n('view')
_rz(z,lY,'class',0,e,s,gg)
var aZ=_v()
_(lY,aZ)
if(_oz(z,1,e,s,gg)){aZ.wxVkey=1
var t1=_n('view')
_rz(z,t1,'class',2,e,s,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,3,e,s,gg)){e2.wxVkey=1
}
var b3=_v()
_(t1,b3)
if(_oz(z,4,e,s,gg)){b3.wxVkey=1
}
e2.wxXCkey=1
b3.wxXCkey=1
_(aZ,t1)
}
var o4=_n('slot')
_rz(z,o4,'name',5,e,s,gg)
_(lY,o4)
var x5=_n('slot')
_rz(z,x5,'name',6,e,s,gg)
_(lY,x5)
aZ.wxXCkey=1
_(r,lY)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var f7=_n('slot')
_(r,f7)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var h9=_mz(z,'view',['bindtap',0,'class',1],[],e,s,gg)
var o0=_n('slot')
_rz(z,o0,'name',2,e,s,gg)
_(h9,o0)
var cAB=_n('view')
_rz(z,cAB,'class',3,e,s,gg)
var oBB=_v()
_(cAB,oBB)
if(_oz(z,4,e,s,gg)){oBB.wxVkey=1
}
var lCB=_v()
_(cAB,lCB)
if(_oz(z,5,e,s,gg)){lCB.wxVkey=1
}
var aDB=_n('slot')
_(cAB,aDB)
oBB.wxXCkey=1
lCB.wxXCkey=1
_(h9,cAB)
var tEB=_mz(z,'view',['catchtap',6,'class',1],[],e,s,gg)
var eFB=_v()
_(tEB,eFB)
if(_oz(z,8,e,s,gg)){eFB.wxVkey=1
}
else{eFB.wxVkey=2
var bGB=_n('slot')
_rz(z,bGB,'name',9,e,s,gg)
_(eFB,bGB)
}
eFB.wxXCkey=1
_(h9,tEB)
_(r,h9)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oJB=_n('slot')
_(r,oJB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var cLB=_mz(z,'scroll-view',['scrollY',-1,'bindscroll',0,'scrollTop',1,'style',1],[],e,s,gg)
var hMB=_n('slot')
_(cLB,hMB)
_(r,cLB)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var cOB=_v()
_(r,cOB)
if(_oz(z,0,e,s,gg)){cOB.wxVkey=1
}
cOB.wxXCkey=1
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var lQB=_v()
_(r,lQB)
if(_oz(z,0,e,s,gg)){lQB.wxVkey=1
}
lQB.wxXCkey=1
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var tSB=_n('view')
_rz(z,tSB,'class',0,e,s,gg)
var bUB=_mz(z,'i-badge',['count',1,'dot',1],[],e,s,gg)
_(tSB,bUB)
var eTB=_v()
_(tSB,eTB)
if(_oz(z,3,e,s,gg)){eTB.wxVkey=1
}
eTB.wxXCkey=1
_(r,tSB)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var xWB=_v()
_(r,xWB)
if(_oz(z,0,e,s,gg)){xWB.wxVkey=1
var oXB=_n('slot')
_(xWB,oXB)
}
else{xWB.wxVkey=2
var fYB=_n('slot')
_(xWB,fYB)
}
xWB.wxXCkey=1
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var h1B=_n('view')
_rz(z,h1B,'class',0,e,s,gg)
var c3B=_n('view')
_rz(z,c3B,'class',1,e,s,gg)
var o4B=_v()
_(c3B,o4B)
if(_oz(z,2,e,s,gg)){o4B.wxVkey=1
}
var l5B=_v()
_(c3B,l5B)
if(_oz(z,3,e,s,gg)){l5B.wxVkey=1
}
var a6B=_v()
_(c3B,a6B)
if(_oz(z,4,e,s,gg)){a6B.wxVkey=1
}
o4B.wxXCkey=1
l5B.wxXCkey=1
a6B.wxXCkey=1
_(h1B,c3B)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,5,e,s,gg)){o2B.wxVkey=1
var t7B=_v()
_(o2B,t7B)
var e8B=function(o0B,b9B,xAC,gg){
var fCC=_n('view')
_rz(z,fCC,'class',8,o0B,b9B,gg)
var cDC=_v()
_(fCC,cDC)
if(_oz(z,9,o0B,b9B,gg)){cDC.wxVkey=1
}
var hEC=_v()
_(fCC,hEC)
if(_oz(z,10,o0B,b9B,gg)){hEC.wxVkey=1
}
cDC.wxXCkey=1
hEC.wxXCkey=1
_(xAC,fCC)
return xAC
}
t7B.wxXCkey=2
_2z(z,6,e8B,e,s,gg,t7B,'item','index','orderNo')
}
o2B.wxXCkey=1
_(r,h1B)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var cGC=_n('view')
_rz(z,cGC,'class',0,e,s,gg)
var tKC=_n('view')
_rz(z,tKC,'class',1,e,s,gg)
var eLC=_v()
_(tKC,eLC)
if(_oz(z,2,e,s,gg)){eLC.wxVkey=1
}
var bMC=_v()
_(tKC,bMC)
if(_oz(z,3,e,s,gg)){bMC.wxVkey=1
}
eLC.wxXCkey=1
bMC.wxXCkey=1
_(cGC,tKC)
var oHC=_v()
_(cGC,oHC)
if(_oz(z,4,e,s,gg)){oHC.wxVkey=1
}
var lIC=_v()
_(cGC,lIC)
if(_oz(z,5,e,s,gg)){lIC.wxVkey=1
var oNC=_n('view')
_rz(z,oNC,'class',6,e,s,gg)
var xOC=_v()
_(oNC,xOC)
if(_oz(z,7,e,s,gg)){xOC.wxVkey=1
}
var oPC=_v()
_(oNC,oPC)
if(_oz(z,8,e,s,gg)){oPC.wxVkey=1
}
xOC.wxXCkey=1
oPC.wxXCkey=1
_(lIC,oNC)
}
var aJC=_v()
_(cGC,aJC)
if(_oz(z,9,e,s,gg)){aJC.wxVkey=1
var fQC=_v()
_(aJC,fQC)
if(_oz(z,10,e,s,gg)){fQC.wxVkey=1
}
fQC.wxXCkey=1
}
oHC.wxXCkey=1
lIC.wxXCkey=1
aJC.wxXCkey=1
_(r,cGC)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var hSC=_n('view')
_rz(z,hSC,'class',0,e,s,gg)
var oTC=_v()
_(hSC,oTC)
if(_oz(z,1,e,s,gg)){oTC.wxVkey=1
var lWC=_mz(z,'view',['bindtap',2,'class',1,'data-tag',2],[],e,s,gg)
var aXC=_v()
_(lWC,aXC)
if(_oz(z,5,e,s,gg)){aXC.wxVkey=1
}
var tYC=_v()
_(lWC,tYC)
if(_oz(z,6,e,s,gg)){tYC.wxVkey=1
}
var eZC=_v()
_(lWC,eZC)
if(_oz(z,7,e,s,gg)){eZC.wxVkey=1
}
aXC.wxXCkey=1
tYC.wxXCkey=1
eZC.wxXCkey=1
_(oTC,lWC)
}
var cUC=_v()
_(hSC,cUC)
if(_oz(z,8,e,s,gg)){cUC.wxVkey=1
}
var oVC=_v()
_(hSC,oVC)
if(_oz(z,9,e,s,gg)){oVC.wxVkey=1
var b1C=_v()
_(oVC,b1C)
if(_oz(z,10,e,s,gg)){b1C.wxVkey=1
}
b1C.wxXCkey=1
}
oTC.wxXCkey=1
cUC.wxXCkey=1
oVC.wxXCkey=1
_(r,hSC)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var x3C=_n('view')
_rz(z,x3C,'class',0,e,s,gg)
var o4C=_v()
_(x3C,o4C)
if(_oz(z,1,e,s,gg)){o4C.wxVkey=1
var c6C=_n('view')
_rz(z,c6C,'class',2,e,s,gg)
var h7C=_v()
_(c6C,h7C)
if(_oz(z,3,e,s,gg)){h7C.wxVkey=1
}
var o8C=_v()
_(c6C,o8C)
if(_oz(z,4,e,s,gg)){o8C.wxVkey=1
}
h7C.wxXCkey=1
o8C.wxXCkey=1
_(o4C,c6C)
}
var f5C=_v()
_(x3C,f5C)
if(_oz(z,5,e,s,gg)){f5C.wxVkey=1
var c9C=_mz(z,'view',['bindtap',6,'class',1,'data-tag',2],[],e,s,gg)
var o0C=_v()
_(c9C,o0C)
if(_oz(z,9,e,s,gg)){o0C.wxVkey=1
}
o0C.wxXCkey=1
_(f5C,c9C)
}
o4C.wxXCkey=1
f5C.wxXCkey=1
_(r,x3C)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var aBD=_n('view')
_rz(z,aBD,'class',0,e,s,gg)
var bED=_mz(z,'calendars',['bind:sixDateSel',1,'bind:toggleCalendar',1,'calChangeDate',2,'id',3,'sixDayArrs',4],[],e,s,gg)
_(aBD,bED)
var tCD=_v()
_(aBD,tCD)
if(_oz(z,6,e,s,gg)){tCD.wxVkey=1
var oFD=_mz(z,'view',['bindtap',7,'class',1,'data-tag',2],[],e,s,gg)
var xGD=_v()
_(oFD,xGD)
if(_oz(z,10,e,s,gg)){xGD.wxVkey=1
}
var oHD=_v()
_(oFD,oHD)
if(_oz(z,11,e,s,gg)){oHD.wxVkey=1
}
xGD.wxXCkey=1
oHD.wxXCkey=1
_(tCD,oFD)
}
var fID=_mz(z,'scroll-view',['class',12,'scrollY',1],[],e,s,gg)
var cJD=_v()
_(fID,cJD)
if(_oz(z,14,e,s,gg)){cJD.wxVkey=1
}
var hKD=_v()
_(fID,hKD)
var oLD=function(oND,cMD,lOD,gg){
var tQD=_mz(z,'scroll-view',['class',17,'scrollX',1],[],oND,cMD,gg)
var eRD=_v()
_(tQD,eRD)
if(_oz(z,19,oND,cMD,gg)){eRD.wxVkey=1
}
var bSD=_n('view')
_rz(z,bSD,'class',20,oND,cMD,gg)
var fWD=_v()
_(bSD,fWD)
if(_oz(z,21,oND,cMD,gg)){fWD.wxVkey=1
}
var cXD=_v()
_(bSD,cXD)
if(_oz(z,22,oND,cMD,gg)){cXD.wxVkey=1
}
var hYD=_v()
_(bSD,hYD)
if(_oz(z,23,oND,cMD,gg)){hYD.wxVkey=1
}
fWD.wxXCkey=1
cXD.wxXCkey=1
hYD.wxXCkey=1
var oTD=_v()
_(bSD,oTD)
if(_oz(z,24,oND,cMD,gg)){oTD.wxVkey=1
}
var xUD=_v()
_(bSD,xUD)
if(_oz(z,25,oND,cMD,gg)){xUD.wxVkey=1
}
var oVD=_v()
_(bSD,oVD)
if(_oz(z,26,oND,cMD,gg)){oVD.wxVkey=1
}
oTD.wxXCkey=1
xUD.wxXCkey=1
oVD.wxXCkey=1
_(tQD,bSD)
eRD.wxXCkey=1
_(lOD,tQD)
return lOD
}
hKD.wxXCkey=2
_2z(z,15,oLD,e,s,gg,hKD,'item','index','index')
cJD.wxXCkey=1
_(aBD,fID)
var eDD=_v()
_(aBD,eDD)
if(_oz(z,27,e,s,gg)){eDD.wxVkey=1
}
tCD.wxXCkey=1
eDD.wxXCkey=1
_(r,aBD)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var c1D=_n('view')
_rz(z,c1D,'class',0,e,s,gg)
var o2D=_v()
_(c1D,o2D)
if(_oz(z,1,e,s,gg)){o2D.wxVkey=1
}
var l3D=_v()
_(c1D,l3D)
if(_oz(z,2,e,s,gg)){l3D.wxVkey=1
}
var a4D=_v()
_(c1D,a4D)
if(_oz(z,3,e,s,gg)){a4D.wxVkey=1
}
var t5D=_v()
_(c1D,t5D)
if(_oz(z,4,e,s,gg)){t5D.wxVkey=1
var b7D=_n('view')
_rz(z,b7D,'class',5,e,s,gg)
var o8D=_v()
_(b7D,o8D)
if(_oz(z,6,e,s,gg)){o8D.wxVkey=1
}
var x9D=_v()
_(b7D,x9D)
if(_oz(z,7,e,s,gg)){x9D.wxVkey=1
}
var o0D=_v()
_(b7D,o0D)
if(_oz(z,8,e,s,gg)){o0D.wxVkey=1
var hCE=_mz(z,'view',['bindtap',9,'class',1],[],e,s,gg)
var oDE=_v()
_(hCE,oDE)
if(_oz(z,11,e,s,gg)){oDE.wxVkey=1
}
oDE.wxXCkey=1
_(o0D,hCE)
}
var fAE=_v()
_(b7D,fAE)
if(_oz(z,12,e,s,gg)){fAE.wxVkey=1
}
var cBE=_v()
_(b7D,cBE)
if(_oz(z,13,e,s,gg)){cBE.wxVkey=1
}
o8D.wxXCkey=1
x9D.wxXCkey=1
o0D.wxXCkey=1
fAE.wxXCkey=1
cBE.wxXCkey=1
_(t5D,b7D)
}
var e6D=_v()
_(c1D,e6D)
if(_oz(z,14,e,s,gg)){e6D.wxVkey=1
var cEE=_n('view')
_rz(z,cEE,'class',15,e,s,gg)
var oFE=_v()
_(cEE,oFE)
if(_oz(z,16,e,s,gg)){oFE.wxVkey=1
}
var lGE=_v()
_(cEE,lGE)
if(_oz(z,17,e,s,gg)){lGE.wxVkey=1
}
var aHE=_v()
_(cEE,aHE)
if(_oz(z,18,e,s,gg)){aHE.wxVkey=1
}
var tIE=_v()
_(cEE,tIE)
if(_oz(z,19,e,s,gg)){tIE.wxVkey=1
}
oFE.wxXCkey=1
lGE.wxXCkey=1
aHE.wxXCkey=1
tIE.wxXCkey=1
_(e6D,cEE)
}
var eJE=_mz(z,'notice-pop',['bind:inform',20,'content',1,'isShow',2],[],e,s,gg)
_(c1D,eJE)
o2D.wxXCkey=1
l3D.wxXCkey=1
a4D.wxXCkey=1
t5D.wxXCkey=1
e6D.wxXCkey=1
_(r,c1D)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var xME=_v()
_(r,xME)
if(_oz(z,0,e,s,gg)){xME.wxVkey=1
}
xME.wxXCkey=1
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var fOE=_v()
_(r,fOE)
if(_oz(z,0,e,s,gg)){fOE.wxVkey=1
}
fOE.wxXCkey=1
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var hQE=_n('view')
_rz(z,hQE,'class',0,e,s,gg)
var cSE=_mz(z,'calendars',['bind:sixDateSel',1,'bind:toggleCalendar',1,'calChangeDate',2,'id',3,'sixDayArrs',4],[],e,s,gg)
_(hQE,cSE)
var oRE=_v()
_(hQE,oRE)
if(_oz(z,6,e,s,gg)){oRE.wxVkey=1
var oTE=_mz(z,'view',['bindtap',7,'class',1,'data-tag',2],[],e,s,gg)
var lUE=_v()
_(oTE,lUE)
if(_oz(z,10,e,s,gg)){lUE.wxVkey=1
}
var aVE=_v()
_(oTE,aVE)
if(_oz(z,11,e,s,gg)){aVE.wxVkey=1
}
lUE.wxXCkey=1
aVE.wxXCkey=1
_(oRE,oTE)
}
var tWE=_n('view')
_rz(z,tWE,'class',12,e,s,gg)
var eXE=_v()
_(tWE,eXE)
if(_oz(z,13,e,s,gg)){eXE.wxVkey=1
}
var bYE=_n('view')
_rz(z,bYE,'class',14,e,s,gg)
var oZE=_v()
_(bYE,oZE)
if(_oz(z,15,e,s,gg)){oZE.wxVkey=1
}
var o2E=_v()
_(bYE,o2E)
var f3E=function(h5E,c4E,o6E,gg){
var o8E=_n('view')
_rz(z,o8E,'class',18,h5E,c4E,gg)
var l9E=_n('view')
_rz(z,l9E,'class',19,h5E,c4E,gg)
var a0E=_v()
_(l9E,a0E)
if(_oz(z,20,h5E,c4E,gg)){a0E.wxVkey=1
}
var tAF=_v()
_(l9E,tAF)
if(_oz(z,21,h5E,c4E,gg)){tAF.wxVkey=1
}
var eBF=_v()
_(l9E,eBF)
if(_oz(z,22,h5E,c4E,gg)){eBF.wxVkey=1
}
a0E.wxXCkey=1
tAF.wxXCkey=1
eBF.wxXCkey=1
_(o8E,l9E)
var bCF=_n('view')
_rz(z,bCF,'class',23,h5E,c4E,gg)
var xEF=_v()
_(bCF,xEF)
var oFF=function(cHF,fGF,hIF,gg){
var cKF=_v()
_(hIF,cKF)
if(_oz(z,28,cHF,fGF,gg)){cKF.wxVkey=1
}
cKF.wxXCkey=1
return hIF
}
xEF.wxXCkey=2
_2z(z,26,oFF,h5E,c4E,gg,xEF,'stationItem','stationIndex','stationIndex')
var oDF=_v()
_(bCF,oDF)
if(_oz(z,29,h5E,c4E,gg)){oDF.wxVkey=1
}
oDF.wxXCkey=1
_(o8E,bCF)
_(o6E,o8E)
return o6E
}
o2E.wxXCkey=2
_2z(z,16,f3E,e,s,gg,o2E,'item','index','index')
var x1E=_v()
_(bYE,x1E)
if(_oz(z,30,e,s,gg)){x1E.wxVkey=1
}
var oLF=_v()
_(bYE,oLF)
var lMF=function(tOF,aNF,ePF,gg){
var oRF=_n('view')
_rz(z,oRF,'class',33,tOF,aNF,gg)
var xSF=_n('view')
_rz(z,xSF,'class',34,tOF,aNF,gg)
var oTF=_v()
_(xSF,oTF)
if(_oz(z,35,tOF,aNF,gg)){oTF.wxVkey=1
}
var fUF=_v()
_(xSF,fUF)
if(_oz(z,36,tOF,aNF,gg)){fUF.wxVkey=1
}
var cVF=_v()
_(xSF,cVF)
if(_oz(z,37,tOF,aNF,gg)){cVF.wxVkey=1
}
oTF.wxXCkey=1
fUF.wxXCkey=1
cVF.wxXCkey=1
_(oRF,xSF)
var hWF=_n('view')
_rz(z,hWF,'class',38,tOF,aNF,gg)
var cYF=_v()
_(hWF,cYF)
var oZF=function(a2F,l1F,t3F,gg){
var b5F=_v()
_(t3F,b5F)
if(_oz(z,43,a2F,l1F,gg)){b5F.wxVkey=1
}
b5F.wxXCkey=1
return t3F
}
cYF.wxXCkey=2
_2z(z,41,oZF,tOF,aNF,gg,cYF,'stationItem','stationIndex','stationIndex')
var oXF=_v()
_(hWF,oXF)
if(_oz(z,44,tOF,aNF,gg)){oXF.wxVkey=1
}
oXF.wxXCkey=1
_(oRF,hWF)
_(ePF,oRF)
return ePF
}
oLF.wxXCkey=2
_2z(z,31,lMF,e,s,gg,oLF,'item','index','index')
oZE.wxXCkey=1
x1E.wxXCkey=1
_(tWE,bYE)
eXE.wxXCkey=1
_(hQE,tWE)
oRE.wxXCkey=1
_(r,hQE)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var x7F=_mz(z,'notice-pop',['bind:inform',0,'content',1,'isShow',1],[],e,s,gg)
_(r,x7F)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var c0F=_n('i-card')
_rz(z,c0F,'showHeader',0,e,s,gg)
var hAG=_n('view')
_rz(z,hAG,'slot',1,e,s,gg)
var cCG=_mz(z,'view',['bindtap',2,'class',1],[],e,s,gg)
var oDG=_mz(z,'i-icon',['color',4,'type',1],[],e,s,gg)
_(cCG,oDG)
var lEG=_mz(z,'i-icon',['color',6,'type',1],[],e,s,gg)
_(cCG,lEG)
_(hAG,cCG)
var oBG=_v()
_(hAG,oBG)
if(_oz(z,8,e,s,gg)){oBG.wxVkey=1
var aFG=_mz(z,'i-icon',['bindtap',9,'data-phone',1,'size',2,'type',3],[],e,s,gg)
_(oBG,aFG)
}
oBG.wxXCkey=1
oBG.wxXCkey=3
_(c0F,hAG)
_(r,c0F)
var tGG=_n('i-card')
_rz(z,tGG,'showHeader',13,e,s,gg)
var eHG=_v()
_(tGG,eHG)
var bIG=function(xKG,oJG,oLG,gg){
var cNG=_mz(z,'view',['class',16,'slot',1],[],xKG,oJG,gg)
var hOG=_v()
_(cNG,hOG)
var oPG=function(oRG,cQG,lSG,gg){
var tUG=_n('view')
_rz(z,tUG,'class',22,oRG,cQG,gg)
var eVG=_v()
_(tUG,eVG)
if(_oz(z,23,oRG,cQG,gg)){eVG.wxVkey=1
}
var bWG=_v()
_(tUG,bWG)
if(_oz(z,24,oRG,cQG,gg)){bWG.wxVkey=1
}
eVG.wxXCkey=1
bWG.wxXCkey=1
_(lSG,tUG)
return lSG
}
hOG.wxXCkey=2
_2z(z,20,oPG,xKG,oJG,gg,hOG,'passItem','passIndex','{{passIndex}}')
_(oLG,cNG)
return oLG
}
eHG.wxXCkey=2
_2z(z,14,bIG,e,s,gg,eHG,'item','index','{{ index }}')
_(r,tGG)
var oXG=_n('view')
_rz(z,oXG,'class',25,e,s,gg)
var xYG=_v()
_(oXG,xYG)
if(_oz(z,26,e,s,gg)){xYG.wxVkey=1
}
var oZG=_v()
_(oXG,oZG)
if(_oz(z,27,e,s,gg)){oZG.wxVkey=1
}
var f1G=_v()
_(oXG,f1G)
if(_oz(z,28,e,s,gg)){f1G.wxVkey=1
}
xYG.wxXCkey=1
oZG.wxXCkey=1
f1G.wxXCkey=1
_(r,oXG)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var h3G=_n('view')
_rz(z,h3G,'class',0,e,s,gg)
var o4G=_mz(z,'i-input',['bind:change',1,'mode',1,'placeholder',2,'value',3],[],e,s,gg)
_(h3G,o4G)
var c5G=_mz(z,'i-index',['bind:change',5,'height',1],[],e,s,gg)
var o6G=_v()
_(c5G,o6G)
var l7G=function(t9G,a8G,e0G,gg){
var oBH=_n('i-index-item')
_rz(z,oBH,'name',11,t9G,a8G,gg)
var xCH=_v()
_(oBH,xCH)
var oDH=function(cFH,fEH,hGH,gg){
var cIH=_mz(z,'view',['bindtap',16,'class',1,'data-item',2],[],cFH,fEH,gg)
var oJH=_mz(z,'i-icon',['color',19,'type',1],[],cFH,fEH,gg)
_(cIH,oJH)
var lKH=_mz(z,'i-icon',['color',21,'type',1],[],cFH,fEH,gg)
_(cIH,lKH)
_(hGH,cIH)
return hGH
}
xCH.wxXCkey=4
_2z(z,14,oDH,t9G,a8G,gg,xCH,'it','in','{{in}}')
_(e0G,oBH)
return e0G
}
o6G.wxXCkey=4
_2z(z,9,l7G,e,s,gg,o6G,'item','index','{{index}}')
_(h3G,c5G)
_(r,h3G)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var tMH=_n('view')
_rz(z,tMH,'class',0,e,s,gg)
var eNH=_v()
_(tMH,eNH)
if(_oz(z,1,e,s,gg)){eNH.wxVkey=1
var oPH=_mz(z,'view',['bindtap',2,'class',1],[],e,s,gg)
var xQH=_v()
_(oPH,xQH)
if(_oz(z,4,e,s,gg)){xQH.wxVkey=1
}
xQH.wxXCkey=1
_(eNH,oPH)
}
var oRH=_v()
_(tMH,oRH)
var fSH=function(hUH,cTH,oVH,gg){
var oXH=_v()
_(oVH,oXH)
var lYH=function(t1H,aZH,e2H,gg){
var o4H=_v()
_(e2H,o4H)
var x5H=function(f7H,o6H,c8H,gg){
var o0H=_mz(z,'view',['bindtap',16,'class',1,'data-date',2,'data-disable',3,'data-extend',4,'data-extra',5,'data-festival',6,'data-times',7],[],f7H,o6H,gg)
var cAI=_n('view')
_rz(z,cAI,'class',24,f7H,o6H,gg)
var oBI=_v()
_(cAI,oBI)
if(_oz(z,25,f7H,o6H,gg)){oBI.wxVkey=1
}
var lCI=_v()
_(cAI,lCI)
if(_oz(z,26,f7H,o6H,gg)){lCI.wxVkey=1
}
oBI.wxXCkey=1
lCI.wxXCkey=1
_(o0H,cAI)
_(c8H,o0H)
return c8H
}
o4H.wxXCkey=2
_2z(z,14,x5H,t1H,aZH,gg,o4H,'day','idx','{{item.headId}}-{{index1}}-{{idx}}')
return e2H
}
oXH.wxXCkey=2
_2z(z,10,lYH,hUH,cTH,gg,oXH,'months','index1','{{item.headId}}-{{index1}}')
return oVH
}
oRH.wxXCkey=2
_2z(z,6,fSH,e,s,gg,oRH,'item','index','{{item.headId}}')
var bOH=_v()
_(tMH,bOH)
if(_oz(z,27,e,s,gg)){bOH.wxVkey=1
}
eNH.wxXCkey=1
bOH.wxXCkey=1
_(r,tMH)
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var eFI=_n('view')
_rz(z,eFI,'class',0,e,s,gg)
var bGI=_v()
_(eFI,bGI)
if(_oz(z,1,e,s,gg)){bGI.wxVkey=1
}
var oHI=_v()
_(eFI,oHI)
if(_oz(z,2,e,s,gg)){oHI.wxVkey=1
}
var xII=_v()
_(eFI,xII)
if(_oz(z,3,e,s,gg)){xII.wxVkey=1
}
var oJI=_v()
_(eFI,oJI)
if(_oz(z,4,e,s,gg)){oJI.wxVkey=1
}
var fKI=_v()
_(eFI,fKI)
if(_oz(z,5,e,s,gg)){fKI.wxVkey=1
var oPI=_v()
_(fKI,oPI)
if(_oz(z,6,e,s,gg)){oPI.wxVkey=1
}
oPI.wxXCkey=1
}
var cLI=_v()
_(eFI,cLI)
if(_oz(z,7,e,s,gg)){cLI.wxVkey=1
var lQI=_n('view')
_rz(z,lQI,'class',8,e,s,gg)
var aRI=_v()
_(lQI,aRI)
if(_oz(z,9,e,s,gg)){aRI.wxVkey=1
var eTI=_n('view')
_rz(z,eTI,'class',10,e,s,gg)
var bUI=_mz(z,'view',['bindtap',11,'class',1],[],e,s,gg)
var oVI=_n('view')
_rz(z,oVI,'class',13,e,s,gg)
var xWI=_v()
_(oVI,xWI)
if(_oz(z,14,e,s,gg)){xWI.wxVkey=1
}
var oXI=_v()
_(oVI,oXI)
if(_oz(z,15,e,s,gg)){oXI.wxVkey=1
}
xWI.wxXCkey=1
oXI.wxXCkey=1
_(bUI,oVI)
_(eTI,bUI)
var fYI=_mz(z,'view',['bindtap',16,'class',1],[],e,s,gg)
var cZI=_n('view')
_rz(z,cZI,'class',18,e,s,gg)
var h1I=_v()
_(cZI,h1I)
if(_oz(z,19,e,s,gg)){h1I.wxVkey=1
}
var o2I=_v()
_(cZI,o2I)
if(_oz(z,20,e,s,gg)){o2I.wxVkey=1
}
h1I.wxXCkey=1
o2I.wxXCkey=1
_(fYI,cZI)
_(eTI,fYI)
_(aRI,eTI)
}
var tSI=_v()
_(lQI,tSI)
if(_oz(z,21,e,s,gg)){tSI.wxVkey=1
}
aRI.wxXCkey=1
tSI.wxXCkey=1
_(cLI,lQI)
}
var hMI=_v()
_(eFI,hMI)
if(_oz(z,22,e,s,gg)){hMI.wxVkey=1
}
var oNI=_v()
_(eFI,oNI)
if(_oz(z,23,e,s,gg)){oNI.wxVkey=1
}
var cOI=_v()
_(eFI,cOI)
if(_oz(z,24,e,s,gg)){cOI.wxVkey=1
}
bGI.wxXCkey=1
oHI.wxXCkey=1
xII.wxXCkey=1
oJI.wxXCkey=1
fKI.wxXCkey=1
cLI.wxXCkey=1
hMI.wxXCkey=1
oNI.wxXCkey=1
cOI.wxXCkey=1
_(r,eFI)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var o4I=_n('view')
_rz(z,o4I,'class',0,e,s,gg)
var l5I=_v()
_(o4I,l5I)
if(_oz(z,1,e,s,gg)){l5I.wxVkey=1
var e8I=_v()
_(l5I,e8I)
var b9I=function(xAJ,o0I,oBJ,gg){
var cDJ=_v()
_(oBJ,cDJ)
if(_oz(z,6,xAJ,o0I,gg)){cDJ.wxVkey=1
}
cDJ.wxXCkey=1
return oBJ
}
e8I.wxXCkey=2
_2z(z,4,b9I,e,s,gg,e8I,'vehicle','index','vehicleOwnerName')
var t7I=_v()
_(l5I,t7I)
if(_oz(z,7,e,s,gg)){t7I.wxVkey=1
var hEJ=_v()
_(t7I,hEJ)
var oFJ=function(oHJ,cGJ,lIJ,gg){
var tKJ=_mz(z,'view',['bindtap',11,'class',1,'data-id',2],[],oHJ,cGJ,gg)
var eLJ=_v()
_(tKJ,eLJ)
if(_oz(z,14,oHJ,cGJ,gg)){eLJ.wxVkey=1
}
eLJ.wxXCkey=1
_(lIJ,tKJ)
return lIJ
}
hEJ.wxXCkey=2
_2z(z,10,oFJ,e,s,gg,hEJ,'caritem','index','')
}
else{t7I.wxVkey=2
}
t7I.wxXCkey=1
}
var a6I=_v()
_(o4I,a6I)
if(_oz(z,15,e,s,gg)){a6I.wxVkey=1
}
l5I.wxXCkey=1
a6I.wxXCkey=1
_(r,o4I)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var oNJ=_v()
_(r,oNJ)
if(_oz(z,0,e,s,gg)){oNJ.wxVkey=1
var xOJ=_mz(z,'view',['bindtap',1,'class',1,'data-tag',2],[],e,s,gg)
var oPJ=_v()
_(xOJ,oPJ)
if(_oz(z,4,e,s,gg)){oPJ.wxVkey=1
}
var fQJ=_v()
_(xOJ,fQJ)
if(_oz(z,5,e,s,gg)){fQJ.wxVkey=1
}
var cRJ=_v()
_(xOJ,cRJ)
if(_oz(z,6,e,s,gg)){cRJ.wxVkey=1
}
var hSJ=_v()
_(xOJ,hSJ)
if(_oz(z,7,e,s,gg)){hSJ.wxVkey=1
}
oPJ.wxXCkey=1
fQJ.wxXCkey=1
cRJ.wxXCkey=1
hSJ.wxXCkey=1
_(oNJ,xOJ)
}
oNJ.wxXCkey=1
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var cUJ=_n('view')
_rz(z,cUJ,'class',0,e,s,gg)
var aXJ=_mz(z,'calendars',['bind:sixDateSel',1,'bind:toggleCalendar',1,'calChangeDate',2,'id',3,'sixDayArrs',4],[],e,s,gg)
_(cUJ,aXJ)
var tYJ=_mz(z,'selectdown',['bind:filterDes',6,'bind:filterDpt',1,'bind:filterEndCity',2,'bind:filterStartCity',3,'clearFilter',4,'endCityList',5,'endStationList',6,'id',7,'startCityList',8,'startStationList',9],[],e,s,gg)
_(cUJ,tYJ)
var oVJ=_v()
_(cUJ,oVJ)
if(_oz(z,16,e,s,gg)){oVJ.wxVkey=1
}
var eZJ=_mz(z,'scroll-view',['bindscroll',17,'bindscrolltolower',1,'class',2,'scrollY',3],[],e,s,gg)
var o2J=_v()
_(eZJ,o2J)
var x3J=function(f5J,o4J,c6J,gg){
var o8J=_mz(z,'view',['class',25,'data-index',1],[],f5J,o4J,gg)
var o0J=_n('view')
_rz(z,o0J,'class',27,f5J,o4J,gg)
var lAK=_v()
_(o0J,lAK)
if(_oz(z,28,f5J,o4J,gg)){lAK.wxVkey=1
}
var aBK=_v()
_(o0J,aBK)
if(_oz(z,29,f5J,o4J,gg)){aBK.wxVkey=1
}
var tCK=_v()
_(o0J,tCK)
if(_oz(z,30,f5J,o4J,gg)){tCK.wxVkey=1
}
lAK.wxXCkey=1
aBK.wxXCkey=1
tCK.wxXCkey=1
_(o8J,o0J)
var c9J=_v()
_(o8J,c9J)
if(_oz(z,31,f5J,o4J,gg)){c9J.wxVkey=1
}
c9J.wxXCkey=1
_(c6J,o8J)
return c6J
}
o2J.wxXCkey=2
_2z(z,23,x3J,e,s,gg,o2J,'item','index','index')
var b1J=_v()
_(eZJ,b1J)
if(_oz(z,32,e,s,gg)){b1J.wxVkey=1
}
b1J.wxXCkey=1
_(cUJ,eZJ)
var lWJ=_v()
_(cUJ,lWJ)
if(_oz(z,33,e,s,gg)){lWJ.wxVkey=1
var eDK=_mz(z,'view',['bindtap',34,'catchtouchmove',1,'class',2,'data-tag',3],[],e,s,gg)
var bEK=_mz(z,'scroll-view',['bindscroll',38,'class',1,'scrollY',2],[],e,s,gg)
var oFK=_v()
_(bEK,oFK)
if(_oz(z,41,e,s,gg)){oFK.wxVkey=1
}
var xGK=_v()
_(bEK,xGK)
if(_oz(z,42,e,s,gg)){xGK.wxVkey=1
}
var oHK=_v()
_(bEK,oHK)
if(_oz(z,43,e,s,gg)){oHK.wxVkey=1
}
var fIK=_v()
_(bEK,fIK)
if(_oz(z,44,e,s,gg)){fIK.wxVkey=1
}
var cJK=_v()
_(bEK,cJK)
if(_oz(z,45,e,s,gg)){cJK.wxVkey=1
}
var hKK=_v()
_(bEK,hKK)
if(_oz(z,46,e,s,gg)){hKK.wxVkey=1
}
var oLK=_v()
_(bEK,oLK)
if(_oz(z,47,e,s,gg)){oLK.wxVkey=1
}
var cMK=_v()
_(bEK,cMK)
if(_oz(z,48,e,s,gg)){cMK.wxVkey=1
}
oFK.wxXCkey=1
xGK.wxXCkey=1
oHK.wxXCkey=1
fIK.wxXCkey=1
cJK.wxXCkey=1
hKK.wxXCkey=1
oLK.wxXCkey=1
cMK.wxXCkey=1
_(eDK,bEK)
_(lWJ,eDK)
}
oVJ.wxXCkey=1
lWJ.wxXCkey=1
_(r,cUJ)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var lOK=_n('i-alert')
_(r,lOK)
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var tQK=_n('view')
var eRK=_v()
_(tQK,eRK)
if(_oz(z,0,e,s,gg)){eRK.wxVkey=1
var oTK=_n('view')
var xUK=_mz(z,'i-alert',['showIcon',-1,'type',1],[],e,s,gg)
_(oTK,xUK)
var oVK=_n('i-card')
_rz(z,oVK,'title',2,e,s,gg)
var fWK=_mz(z,'view',['class',3,'slot',1],[],e,s,gg)
var cXK=_n('view')
_rz(z,cXK,'class',5,e,s,gg)
var hYK=_v()
_(cXK,hYK)
if(_oz(z,6,e,s,gg)){hYK.wxVkey=1
}
var oZK=_v()
_(cXK,oZK)
if(_oz(z,7,e,s,gg)){oZK.wxVkey=1
}
hYK.wxXCkey=1
oZK.wxXCkey=1
_(fWK,cXK)
_(oVK,fWK)
var c1K=_mz(z,'view',['class',8,'slot',1],[],e,s,gg)
var o2K=_n('i-cell-group')
var l3K=_v()
_(o2K,l3K)
var a4K=function(e6K,t5K,b7K,gg){
var x9K=_n('i-cell')
_rz(z,x9K,'title',12,e6K,t5K,gg)
var o0K=_mz(z,'i-icon',['slot',13,'type',1],[],e6K,t5K,gg)
_(x9K,o0K)
_(b7K,x9K)
return b7K
}
l3K.wxXCkey=4
_2z(z,10,a4K,e,s,gg,l3K,'item','index','{{ index }}')
_(c1K,o2K)
_(oVK,c1K)
_(oTK,oVK)
_(eRK,oTK)
}
var bSK=_v()
_(tQK,bSK)
if(_oz(z,15,e,s,gg)){bSK.wxVkey=1
var fAL=_mz(z,'i-alert',['showIcon',-1,'type',16],[],e,s,gg)
var cBL=_v()
_(fAL,cBL)
if(_oz(z,17,e,s,gg)){cBL.wxVkey=1
}
cBL.wxXCkey=1
_(bSK,fAL)
}
eRK.wxXCkey=1
eRK.wxXCkey=3
bSK.wxXCkey=1
bSK.wxXCkey=3
_(r,tQK)
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var cEL=_n('view')
_rz(z,cEL,'class',0,e,s,gg)
var aHL=_mz(z,'calendars',['bind:sixDateSel',1,'bind:toggleCalendar',1,'calChangeDate',2,'id',3,'sixDayArrs',4],[],e,s,gg)
_(cEL,aHL)
var oFL=_v()
_(cEL,oFL)
if(_oz(z,6,e,s,gg)){oFL.wxVkey=1
var tIL=_mz(z,'view',['bindtap',7,'class',1,'data-tag',2],[],e,s,gg)
var eJL=_v()
_(tIL,eJL)
if(_oz(z,10,e,s,gg)){eJL.wxVkey=1
}
var bKL=_v()
_(tIL,bKL)
if(_oz(z,11,e,s,gg)){bKL.wxVkey=1
}
var oLL=_v()
_(tIL,oLL)
if(_oz(z,12,e,s,gg)){oLL.wxVkey=1
}
eJL.wxXCkey=1
bKL.wxXCkey=1
oLL.wxXCkey=1
_(oFL,tIL)
}
var xML=_n('view')
_rz(z,xML,'class',13,e,s,gg)
var oNL=_v()
_(xML,oNL)
if(_oz(z,14,e,s,gg)){oNL.wxVkey=1
}
var fOL=_n('scroll-view')
_rz(z,fOL,'scrollY',15,e,s,gg)
var cPL=_v()
_(fOL,cPL)
if(_oz(z,16,e,s,gg)){cPL.wxVkey=1
var cSL=_n('view')
_rz(z,cSL,'class',17,e,s,gg)
var oTL=_v()
_(cSL,oTL)
if(_oz(z,18,e,s,gg)){oTL.wxVkey=1
}
var lUL=_v()
_(cSL,lUL)
var aVL=function(eXL,tWL,bYL,gg){
var x1L=_n('view')
_rz(z,x1L,'class',21,eXL,tWL,gg)
var o2L=_n('view')
_rz(z,o2L,'class',22,eXL,tWL,gg)
var f3L=_v()
_(o2L,f3L)
if(_oz(z,23,eXL,tWL,gg)){f3L.wxVkey=1
}
var c4L=_v()
_(o2L,c4L)
if(_oz(z,24,eXL,tWL,gg)){c4L.wxVkey=1
}
var h5L=_v()
_(o2L,h5L)
if(_oz(z,25,eXL,tWL,gg)){h5L.wxVkey=1
}
f3L.wxXCkey=1
c4L.wxXCkey=1
h5L.wxXCkey=1
_(x1L,o2L)
var o6L=_n('view')
_rz(z,o6L,'class',26,eXL,tWL,gg)
var c7L=_v()
_(o6L,c7L)
var o8L=function(a0L,l9L,tAM,gg){
var bCM=_n('view')
_rz(z,bCM,'class',31,a0L,l9L,gg)
var oDM=_v()
_(bCM,oDM)
if(_oz(z,32,a0L,l9L,gg)){oDM.wxVkey=1
}
var xEM=_v()
_(bCM,xEM)
if(_oz(z,33,a0L,l9L,gg)){xEM.wxVkey=1
}
oDM.wxXCkey=1
xEM.wxXCkey=1
_(tAM,bCM)
return tAM
}
c7L.wxXCkey=2
_2z(z,29,o8L,eXL,tWL,gg,c7L,'stationItem','stationIndex','stationIndex')
var oFM=_n('view')
_rz(z,oFM,'class',34,eXL,tWL,gg)
var fGM=_v()
_(oFM,fGM)
if(_oz(z,35,eXL,tWL,gg)){fGM.wxVkey=1
}
var cHM=_v()
_(oFM,cHM)
if(_oz(z,36,eXL,tWL,gg)){cHM.wxVkey=1
}
fGM.wxXCkey=1
cHM.wxXCkey=1
_(o6L,oFM)
_(x1L,o6L)
var hIM=_n('view')
_rz(z,hIM,'class',37,eXL,tWL,gg)
var oJM=_v()
_(hIM,oJM)
if(_oz(z,38,eXL,tWL,gg)){oJM.wxVkey=1
}
var cKM=_n('view')
_rz(z,cKM,'class',39,eXL,tWL,gg)
var oLM=_v()
_(cKM,oLM)
if(_oz(z,40,eXL,tWL,gg)){oLM.wxVkey=1
}
var lMM=_v()
_(cKM,lMM)
if(_oz(z,41,eXL,tWL,gg)){lMM.wxVkey=1
}
var aNM=_v()
_(cKM,aNM)
if(_oz(z,42,eXL,tWL,gg)){aNM.wxVkey=1
}
oLM.wxXCkey=1
lMM.wxXCkey=1
aNM.wxXCkey=1
_(hIM,cKM)
oJM.wxXCkey=1
_(x1L,hIM)
_(bYL,x1L)
return bYL
}
lUL.wxXCkey=2
_2z(z,19,aVL,e,s,gg,lUL,'item','index','index')
oTL.wxXCkey=1
_(cPL,cSL)
}
var hQL=_v()
_(fOL,hQL)
if(_oz(z,43,e,s,gg)){hQL.wxVkey=1
var tOM=_n('view')
_rz(z,tOM,'class',44,e,s,gg)
var ePM=_v()
_(tOM,ePM)
if(_oz(z,45,e,s,gg)){ePM.wxVkey=1
}
var bQM=_v()
_(tOM,bQM)
var oRM=function(oTM,xSM,fUM,gg){
var hWM=_n('view')
_rz(z,hWM,'class',48,oTM,xSM,gg)
var oXM=_n('view')
_rz(z,oXM,'class',49,oTM,xSM,gg)
var cYM=_v()
_(oXM,cYM)
if(_oz(z,50,oTM,xSM,gg)){cYM.wxVkey=1
}
var oZM=_v()
_(oXM,oZM)
if(_oz(z,51,oTM,xSM,gg)){oZM.wxVkey=1
}
var l1M=_v()
_(oXM,l1M)
if(_oz(z,52,oTM,xSM,gg)){l1M.wxVkey=1
}
cYM.wxXCkey=1
oZM.wxXCkey=1
l1M.wxXCkey=1
_(hWM,oXM)
var a2M=_n('view')
_rz(z,a2M,'class',53,oTM,xSM,gg)
var t3M=_v()
_(a2M,t3M)
var e4M=function(o6M,b5M,x7M,gg){
var f9M=_n('view')
_rz(z,f9M,'class',58,o6M,b5M,gg)
var c0M=_v()
_(f9M,c0M)
if(_oz(z,59,o6M,b5M,gg)){c0M.wxVkey=1
}
var hAN=_v()
_(f9M,hAN)
if(_oz(z,60,o6M,b5M,gg)){hAN.wxVkey=1
}
c0M.wxXCkey=1
hAN.wxXCkey=1
_(x7M,f9M)
return x7M
}
t3M.wxXCkey=2
_2z(z,56,e4M,oTM,xSM,gg,t3M,'stationItem','stationIndex','stationIndex')
var oBN=_n('view')
_rz(z,oBN,'class',61,oTM,xSM,gg)
var cCN=_v()
_(oBN,cCN)
if(_oz(z,62,oTM,xSM,gg)){cCN.wxVkey=1
}
var oDN=_v()
_(oBN,oDN)
if(_oz(z,63,oTM,xSM,gg)){oDN.wxVkey=1
}
cCN.wxXCkey=1
oDN.wxXCkey=1
_(a2M,oBN)
_(hWM,a2M)
var lEN=_n('view')
_rz(z,lEN,'class',64,oTM,xSM,gg)
var aFN=_v()
_(lEN,aFN)
if(_oz(z,65,oTM,xSM,gg)){aFN.wxVkey=1
}
var tGN=_v()
_(lEN,tGN)
if(_oz(z,66,oTM,xSM,gg)){tGN.wxVkey=1
}
var eHN=_n('view')
_rz(z,eHN,'class',67,oTM,xSM,gg)
var bIN=_v()
_(eHN,bIN)
if(_oz(z,68,oTM,xSM,gg)){bIN.wxVkey=1
}
var oJN=_v()
_(eHN,oJN)
if(_oz(z,69,oTM,xSM,gg)){oJN.wxVkey=1
}
bIN.wxXCkey=1
oJN.wxXCkey=1
_(lEN,eHN)
aFN.wxXCkey=1
tGN.wxXCkey=1
_(hWM,lEN)
_(fUM,hWM)
return fUM
}
bQM.wxXCkey=2
_2z(z,46,oRM,e,s,gg,bQM,'item','index','index')
ePM.wxXCkey=1
_(hQL,tOM)
}
var oRL=_v()
_(fOL,oRL)
if(_oz(z,70,e,s,gg)){oRL.wxVkey=1
var xKN=_n('view')
_rz(z,xKN,'class',71,e,s,gg)
var oLN=_v()
_(xKN,oLN)
if(_oz(z,72,e,s,gg)){oLN.wxVkey=1
}
var fMN=_v()
_(xKN,fMN)
var cNN=function(oPN,hON,cQN,gg){
var lSN=_n('view')
_rz(z,lSN,'class',75,oPN,hON,gg)
var aTN=_n('view')
_rz(z,aTN,'class',76,oPN,hON,gg)
var tUN=_v()
_(aTN,tUN)
if(_oz(z,77,oPN,hON,gg)){tUN.wxVkey=1
}
var eVN=_v()
_(aTN,eVN)
if(_oz(z,78,oPN,hON,gg)){eVN.wxVkey=1
}
var bWN=_v()
_(aTN,bWN)
if(_oz(z,79,oPN,hON,gg)){bWN.wxVkey=1
}
tUN.wxXCkey=1
eVN.wxXCkey=1
bWN.wxXCkey=1
_(lSN,aTN)
var oXN=_n('view')
_rz(z,oXN,'class',80,oPN,hON,gg)
var xYN=_v()
_(oXN,xYN)
var oZN=function(c2N,f1N,h3N,gg){
var c5N=_n('view')
_rz(z,c5N,'class',85,c2N,f1N,gg)
var o6N=_v()
_(c5N,o6N)
if(_oz(z,86,c2N,f1N,gg)){o6N.wxVkey=1
}
var l7N=_v()
_(c5N,l7N)
if(_oz(z,87,c2N,f1N,gg)){l7N.wxVkey=1
}
o6N.wxXCkey=1
l7N.wxXCkey=1
_(h3N,c5N)
return h3N
}
xYN.wxXCkey=2
_2z(z,83,oZN,oPN,hON,gg,xYN,'stationItem','stationIndex','stationIndex')
var a8N=_n('view')
_rz(z,a8N,'class',88,oPN,hON,gg)
var t9N=_v()
_(a8N,t9N)
if(_oz(z,89,oPN,hON,gg)){t9N.wxVkey=1
}
var e0N=_v()
_(a8N,e0N)
if(_oz(z,90,oPN,hON,gg)){e0N.wxVkey=1
}
t9N.wxXCkey=1
e0N.wxXCkey=1
_(oXN,a8N)
_(lSN,oXN)
var bAO=_n('view')
_rz(z,bAO,'class',91,oPN,hON,gg)
var oBO=_v()
_(bAO,oBO)
if(_oz(z,92,oPN,hON,gg)){oBO.wxVkey=1
}
var xCO=_n('view')
_rz(z,xCO,'class',93,oPN,hON,gg)
var oDO=_v()
_(xCO,oDO)
if(_oz(z,94,oPN,hON,gg)){oDO.wxVkey=1
}
var fEO=_v()
_(xCO,fEO)
if(_oz(z,95,oPN,hON,gg)){fEO.wxVkey=1
}
var cFO=_v()
_(xCO,cFO)
if(_oz(z,96,oPN,hON,gg)){cFO.wxVkey=1
}
oDO.wxXCkey=1
fEO.wxXCkey=1
cFO.wxXCkey=1
_(bAO,xCO)
oBO.wxXCkey=1
_(lSN,bAO)
_(cQN,lSN)
return cQN
}
fMN.wxXCkey=2
_2z(z,73,cNN,e,s,gg,fMN,'item','index','index')
oLN.wxXCkey=1
_(oRL,xKN)
}
cPL.wxXCkey=1
hQL.wxXCkey=1
oRL.wxXCkey=1
_(xML,fOL)
oNL.wxXCkey=1
_(cEL,xML)
var lGL=_v()
_(cEL,lGL)
if(_oz(z,97,e,s,gg)){lGL.wxVkey=1
var hGO=_mz(z,'view',['bindtap',98,'catchtouchmove',1,'class',2,'data-tag',3],[],e,s,gg)
var oHO=_mz(z,'scroll-view',['bindscroll',102,'class',1,'scrollY',2],[],e,s,gg)
var cIO=_v()
_(oHO,cIO)
if(_oz(z,105,e,s,gg)){cIO.wxVkey=1
}
var oJO=_v()
_(oHO,oJO)
if(_oz(z,106,e,s,gg)){oJO.wxVkey=1
}
var lKO=_v()
_(oHO,lKO)
if(_oz(z,107,e,s,gg)){lKO.wxVkey=1
}
cIO.wxXCkey=1
oJO.wxXCkey=1
lKO.wxXCkey=1
_(hGO,oHO)
_(lGL,hGO)
}
oFL.wxXCkey=1
lGL.wxXCkey=1
_(r,cEL)
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var tMO=_n('view')
_rz(z,tMO,'class',0,e,s,gg)
var eNO=_v()
_(tMO,eNO)
if(_oz(z,1,e,s,gg)){eNO.wxVkey=1
var bOO=_mz(z,'view',['bindtap',2,'class',1,'data-tag',2],[],e,s,gg)
var oPO=_v()
_(bOO,oPO)
if(_oz(z,5,e,s,gg)){oPO.wxVkey=1
}
var xQO=_v()
_(bOO,xQO)
if(_oz(z,6,e,s,gg)){xQO.wxVkey=1
}
oPO.wxXCkey=1
xQO.wxXCkey=1
_(eNO,bOO)
}
var oRO=_n('view')
_rz(z,oRO,'class',7,e,s,gg)
var fSO=_v()
_(oRO,fSO)
if(_oz(z,8,e,s,gg)){fSO.wxVkey=1
}
var cTO=_n('scroll-view')
_rz(z,cTO,'scrollY',9,e,s,gg)
var hUO=_v()
_(cTO,hUO)
if(_oz(z,10,e,s,gg)){hUO.wxVkey=1
var cWO=_n('view')
_rz(z,cWO,'class',11,e,s,gg)
var oXO=_v()
_(cWO,oXO)
if(_oz(z,12,e,s,gg)){oXO.wxVkey=1
}
var lYO=_v()
_(cWO,lYO)
var aZO=function(e2O,t1O,b3O,gg){
var x5O=_n('view')
_rz(z,x5O,'class',15,e2O,t1O,gg)
var f7O=_n('view')
_rz(z,f7O,'class',16,e2O,t1O,gg)
var c8O=_v()
_(f7O,c8O)
if(_oz(z,17,e2O,t1O,gg)){c8O.wxVkey=1
}
var h9O=_v()
_(f7O,h9O)
if(_oz(z,18,e2O,t1O,gg)){h9O.wxVkey=1
}
var o0O=_v()
_(f7O,o0O)
if(_oz(z,19,e2O,t1O,gg)){o0O.wxVkey=1
}
c8O.wxXCkey=1
h9O.wxXCkey=1
o0O.wxXCkey=1
_(x5O,f7O)
var cAP=_v()
_(x5O,cAP)
var oBP=function(aDP,lCP,tEP,gg){
var bGP=_n('view')
_rz(z,bGP,'class',24,aDP,lCP,gg)
var oHP=_v()
_(bGP,oHP)
if(_oz(z,25,aDP,lCP,gg)){oHP.wxVkey=1
}
var xIP=_v()
_(bGP,xIP)
if(_oz(z,26,aDP,lCP,gg)){xIP.wxVkey=1
}
oHP.wxXCkey=1
xIP.wxXCkey=1
_(tEP,bGP)
return tEP
}
cAP.wxXCkey=2
_2z(z,22,oBP,e2O,t1O,gg,cAP,'stationItem','stationIndex','{{ stationIndex }}')
var o6O=_v()
_(x5O,o6O)
if(_oz(z,27,e2O,t1O,gg)){o6O.wxVkey=1
}
o6O.wxXCkey=1
_(b3O,x5O)
return b3O
}
lYO.wxXCkey=2
_2z(z,13,aZO,e,s,gg,lYO,'item','index','{{ index }}')
oXO.wxXCkey=1
_(hUO,cWO)
}
var oVO=_v()
_(cTO,oVO)
if(_oz(z,28,e,s,gg)){oVO.wxVkey=1
var oJP=_n('view')
_rz(z,oJP,'class',29,e,s,gg)
var fKP=_v()
_(oJP,fKP)
if(_oz(z,30,e,s,gg)){fKP.wxVkey=1
}
var cLP=_v()
_(oJP,cLP)
var hMP=function(cOP,oNP,oPP,gg){
var aRP=_n('view')
_rz(z,aRP,'class',33,cOP,oNP,gg)
var eTP=_n('view')
_rz(z,eTP,'class',34,cOP,oNP,gg)
var bUP=_v()
_(eTP,bUP)
if(_oz(z,35,cOP,oNP,gg)){bUP.wxVkey=1
}
var oVP=_v()
_(eTP,oVP)
if(_oz(z,36,cOP,oNP,gg)){oVP.wxVkey=1
}
var xWP=_v()
_(eTP,xWP)
if(_oz(z,37,cOP,oNP,gg)){xWP.wxVkey=1
}
bUP.wxXCkey=1
oVP.wxXCkey=1
xWP.wxXCkey=1
_(aRP,eTP)
var oXP=_v()
_(aRP,oXP)
var fYP=function(h1P,cZP,o2P,gg){
var o4P=_n('view')
_rz(z,o4P,'class',42,h1P,cZP,gg)
var l5P=_v()
_(o4P,l5P)
if(_oz(z,43,h1P,cZP,gg)){l5P.wxVkey=1
}
var a6P=_v()
_(o4P,a6P)
if(_oz(z,44,h1P,cZP,gg)){a6P.wxVkey=1
}
l5P.wxXCkey=1
a6P.wxXCkey=1
_(o2P,o4P)
return o2P
}
oXP.wxXCkey=2
_2z(z,40,fYP,cOP,oNP,gg,oXP,'stationItem','stationIndex','{{ stationIndex }}')
var tSP=_v()
_(aRP,tSP)
if(_oz(z,45,cOP,oNP,gg)){tSP.wxVkey=1
}
tSP.wxXCkey=1
_(oPP,aRP)
return oPP
}
cLP.wxXCkey=2
_2z(z,31,hMP,e,s,gg,cLP,'item','index','{{ index }}')
fKP.wxXCkey=1
_(oVO,oJP)
}
hUO.wxXCkey=1
oVO.wxXCkey=1
_(oRO,cTO)
fSO.wxXCkey=1
_(tMO,oRO)
eNO.wxXCkey=1
_(r,tMO)
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var e8P=_n('view')
_rz(z,e8P,'class',0,e,s,gg)
var o0P=_n('view')
var oBQ=_mz(z,'i-input',['bind:change',1,'mode',1,'placeholder',2,'value',3],[],e,s,gg)
_(o0P,oBQ)
var fCQ=_v()
_(o0P,fCQ)
var cDQ=function(oFQ,hEQ,cGQ,gg){
var lIQ=e_[x[39]].j
_ic(x[40],e_,x[39],oFQ,hEQ,cGQ,gg);
lIQ.pop()
return cGQ
}
fCQ.wxXCkey=2
_2z(z,5,cDQ,e,s,gg,fCQ,'item','index','{{ index }}')
var xAQ=_v()
_(o0P,xAQ)
if(_oz(z,7,e,s,gg)){xAQ.wxVkey=1
var aJQ=_n('no-reault')
_(xAQ,aJQ)
}
xAQ.wxXCkey=1
xAQ.wxXCkey=3
_(e8P,o0P)
var b9P=_v()
_(e8P,b9P)
if(_oz(z,8,e,s,gg)){b9P.wxVkey=1
var tKQ=_v()
_(b9P,tKQ)
if(_oz(z,9,e,s,gg)){tKQ.wxVkey=1
}
tKQ.wxXCkey=1
}
b9P.wxXCkey=1
_(r,e8P)
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var bMQ=_n('view')
_rz(z,bMQ,'class',0,e,s,gg)
var xOQ=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var oPQ=_v()
_(xOQ,oPQ)
if(_oz(z,3,e,s,gg)){oPQ.wxVkey=1
}
var fQQ=_v()
_(xOQ,fQQ)
if(_oz(z,4,e,s,gg)){fQQ.wxVkey=1
}
var cRQ=_v()
_(xOQ,cRQ)
if(_oz(z,5,e,s,gg)){cRQ.wxVkey=1
var hSQ=_mz(z,'view',['bindtap',6,'class',1,'data-tag',2,'style',3],[],e,s,gg)
var oTQ=_v()
_(hSQ,oTQ)
if(_oz(z,10,e,s,gg)){oTQ.wxVkey=1
var oVQ=_v()
_(oTQ,oVQ)
if(_oz(z,11,e,s,gg)){oVQ.wxVkey=1
}
var lWQ=_v()
_(oTQ,lWQ)
if(_oz(z,12,e,s,gg)){lWQ.wxVkey=1
}
var aXQ=_v()
_(oTQ,aXQ)
if(_oz(z,13,e,s,gg)){aXQ.wxVkey=1
}
oVQ.wxXCkey=1
lWQ.wxXCkey=1
aXQ.wxXCkey=1
}
var cUQ=_v()
_(hSQ,cUQ)
if(_oz(z,14,e,s,gg)){cUQ.wxVkey=1
var tYQ=_v()
_(cUQ,tYQ)
if(_oz(z,15,e,s,gg)){tYQ.wxVkey=1
}
var eZQ=_v()
_(cUQ,eZQ)
if(_oz(z,16,e,s,gg)){eZQ.wxVkey=1
}
tYQ.wxXCkey=1
eZQ.wxXCkey=1
}
oTQ.wxXCkey=1
cUQ.wxXCkey=1
_(cRQ,hSQ)
}
oPQ.wxXCkey=1
fQQ.wxXCkey=1
cRQ.wxXCkey=1
_(bMQ,xOQ)
var b1Q=_mz(z,'view',['class',17,'style',1],[],e,s,gg)
var o2Q=_v()
_(b1Q,o2Q)
if(_oz(z,19,e,s,gg)){o2Q.wxVkey=1
var o4Q=_v()
_(o2Q,o4Q)
if(_oz(z,20,e,s,gg)){o4Q.wxVkey=1
}
var f5Q=_v()
_(o2Q,f5Q)
var c6Q=function(o8Q,h7Q,c9Q,gg){
var lAR=_mz(z,'view',['bindtap',23,'class',1,'data-orderno',2],[],o8Q,h7Q,gg)
var aBR=_n('view')
_rz(z,aBR,'class',26,o8Q,h7Q,gg)
var eDR=_n('view')
_rz(z,eDR,'class',27,o8Q,h7Q,gg)
var bER=_v()
_(eDR,bER)
if(_oz(z,28,o8Q,h7Q,gg)){bER.wxVkey=1
}
else{bER.wxVkey=2
var oFR=_mz(z,'view',['catchtap',29,'class',1,'data-index',2],[],o8Q,h7Q,gg)
var xGR=_v()
_(oFR,xGR)
if(_oz(z,32,o8Q,h7Q,gg)){xGR.wxVkey=1
}
xGR.wxXCkey=1
_(bER,oFR)
}
bER.wxXCkey=1
_(aBR,eDR)
var tCR=_v()
_(aBR,tCR)
if(_oz(z,33,o8Q,h7Q,gg)){tCR.wxVkey=1
}
tCR.wxXCkey=1
_(lAR,aBR)
_(c9Q,lAR)
return c9Q
}
f5Q.wxXCkey=2
_2z(z,21,c6Q,e,s,gg,f5Q,'item','index','{{ index }}')
o4Q.wxXCkey=1
}
var x3Q=_v()
_(b1Q,x3Q)
if(_oz(z,34,e,s,gg)){x3Q.wxVkey=1
var oHR=_v()
_(x3Q,oHR)
if(_oz(z,35,e,s,gg)){oHR.wxVkey=1
}
oHR.wxXCkey=1
}
o2Q.wxXCkey=1
x3Q.wxXCkey=1
_(bMQ,b1Q)
var oNQ=_v()
_(bMQ,oNQ)
if(_oz(z,36,e,s,gg)){oNQ.wxVkey=1
}
oNQ.wxXCkey=1
_(r,bMQ)
return r
}
e_[x[41]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var cJR=_n('view')
_rz(z,cJR,'class',0,e,s,gg)
var hKR=_mz(z,'i-tabs',['fixed',-1,'bindchange',1,'color',1,'current',2],[],e,s,gg)
var oLR=_mz(z,'i-tab',['key',4,'title',1],[],e,s,gg)
_(hKR,oLR)
var cMR=_mz(z,'i-tab',['key',6,'title',1],[],e,s,gg)
_(hKR,cMR)
_(cJR,hKR)
var oNR=_n('view')
_rz(z,oNR,'class',8,e,s,gg)
var lOR=_v()
_(oNR,lOR)
if(_oz(z,9,e,s,gg)){lOR.wxVkey=1
}
var aPR=_v()
_(oNR,aPR)
if(_oz(z,10,e,s,gg)){aPR.wxVkey=1
var eRR=_n('view')
_rz(z,eRR,'class',11,e,s,gg)
var oTR=_v()
_(eRR,oTR)
var xUR=function(fWR,oVR,cXR,gg){
var oZR=e_[x[42]].j
_ic(x[43],e_,x[42],fWR,oVR,cXR,gg);
oZR.pop()
return cXR
}
oTR.wxXCkey=2
_2z(z,12,xUR,e,s,gg,oTR,'item','index','{{ index }}')
var bSR=_v()
_(eRR,bSR)
if(_oz(z,14,e,s,gg)){bSR.wxVkey=1
var c1R=_n('no-reault')
_(bSR,c1R)
}
bSR.wxXCkey=1
bSR.wxXCkey=3
_(aPR,eRR)
}
var tQR=_v()
_(oNR,tQR)
if(_oz(z,15,e,s,gg)){tQR.wxVkey=1
var o2R=_n('view')
_rz(z,o2R,'class',16,e,s,gg)
var a4R=_v()
_(o2R,a4R)
var t5R=function(b7R,e6R,o8R,gg){
var o0R=e_[x[42]].j
_ic(x[43],e_,x[42],b7R,e6R,o8R,gg);
o0R.pop()
return o8R
}
a4R.wxXCkey=2
_2z(z,17,t5R,e,s,gg,a4R,'item','index','{{ index }}')
var l3R=_v()
_(o2R,l3R)
if(_oz(z,19,e,s,gg)){l3R.wxVkey=1
var fAS=_n('no-reault')
_(l3R,fAS)
}
l3R.wxXCkey=1
l3R.wxXCkey=3
_(tQR,o2R)
}
lOR.wxXCkey=1
aPR.wxXCkey=1
aPR.wxXCkey=3
tQR.wxXCkey=1
tQR.wxXCkey=3
_(cJR,oNR)
_(r,cJR)
return r
}
e_[x[42]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
return r
}
e_[x[44]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var oDS=_n('view')
_rz(z,oDS,'class',0,e,s,gg)
var cES=_n('view')
_rz(z,cES,'class',1,e,s,gg)
var oFS=_v()
_(cES,oFS)
if(_oz(z,2,e,s,gg)){oFS.wxVkey=1
}
var lGS=_v()
_(cES,lGS)
if(_oz(z,3,e,s,gg)){lGS.wxVkey=1
}
oFS.wxXCkey=1
lGS.wxXCkey=1
_(oDS,cES)
var aHS=_n('view')
_rz(z,aHS,'class',4,e,s,gg)
var tIS=_v()
_(aHS,tIS)
if(_oz(z,5,e,s,gg)){tIS.wxVkey=1
var bKS=_n('view')
var oLS=_v()
_(bKS,oLS)
if(_oz(z,6,e,s,gg)){oLS.wxVkey=1
}
var xMS=_v()
_(bKS,xMS)
if(_oz(z,7,e,s,gg)){xMS.wxVkey=1
}
oLS.wxXCkey=1
xMS.wxXCkey=1
_(tIS,bKS)
}
var eJS=_v()
_(aHS,eJS)
if(_oz(z,8,e,s,gg)){eJS.wxVkey=1
var oNS=_v()
_(eJS,oNS)
if(_oz(z,9,e,s,gg)){oNS.wxVkey=1
}
oNS.wxXCkey=1
}
tIS.wxXCkey=1
eJS.wxXCkey=1
_(oDS,aHS)
_(r,oDS)
return r
}
e_[x[45]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
var cPS=_mz(z,'i-card',['extra',0,'title',1],[],e,s,gg)
var hQS=_v()
_(cPS,hQS)
if(_oz(z,2,e,s,gg)){hQS.wxVkey=1
var oRS=_mz(z,'view',['class',3,'slot',1],[],e,s,gg)
var cSS=_v()
_(oRS,cSS)
if(_oz(z,5,e,s,gg)){cSS.wxVkey=1
}
var oTS=_v()
_(oRS,oTS)
if(_oz(z,6,e,s,gg)){oTS.wxVkey=1
}
var lUS=_v()
_(oRS,lUS)
if(_oz(z,7,e,s,gg)){lUS.wxVkey=1
}
var aVS=_v()
_(oRS,aVS)
if(_oz(z,8,e,s,gg)){aVS.wxVkey=1
}
cSS.wxXCkey=1
oTS.wxXCkey=1
lUS.wxXCkey=1
aVS.wxXCkey=1
_(hQS,oRS)
}
hQS.wxXCkey=1
_(r,cPS)
return r
}
e_[x[46]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
var eXS=_n('i-card')
_rz(z,eXS,'showHeader',0,e,s,gg)
var bYS=_n('view')
_rz(z,bYS,'slot',1,e,s,gg)
var oZS=_n('view')
_rz(z,oZS,'class',2,e,s,gg)
var x1S=_v()
_(oZS,x1S)
if(_oz(z,3,e,s,gg)){x1S.wxVkey=1
}
var o2S=_v()
_(oZS,o2S)
if(_oz(z,4,e,s,gg)){o2S.wxVkey=1
}
var f3S=_v()
_(oZS,f3S)
if(_oz(z,5,e,s,gg)){f3S.wxVkey=1
}
var c4S=_v()
_(oZS,c4S)
if(_oz(z,6,e,s,gg)){c4S.wxVkey=1
}
x1S.wxXCkey=1
o2S.wxXCkey=1
f3S.wxXCkey=1
c4S.wxXCkey=1
_(bYS,oZS)
_(eXS,bYS)
_(r,eXS)
return r
}
e_[x[47]]={f:m45,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['app.json'] = {"pages":["pages/index/index","pages/my/my","pages/noticeList/noticeList","pages/shiftList/shiftList","pages/shiftJianList/shiftList","pages/shiftOrderList/shiftOrderList","pages/driverOrderDetail/driverOrderDetail","pages/checkTicketResult/checkTicketResult","pages/dispatchOrderList/dispatchOrderList","pages/dispatchOrderDetail/dispatchOrderDetail","pages/setting/setting","pages/passenger/passenger","pages/shiftSchedule/shiftSchedule","pages/scan/scan","pages/orderConfirm/orderConfirm","pages/scanResult/scanResult","pages/shiftOrder/shiftOrder","pages/orderDetail/orderDetail","pages/map/map","pages/planControl/planControl","pages/planControl/components/calendar/calendar","pages/planControl/components/openSch/openSch","pages/focusShiftList/focusShiftList","pages/planControl/components/selectPage/selectPage","pages/ticketCountList/ticketCountList","pages/mySchedule/mySchedule","pages/showQrcode/showQrcode","pages/myBill/myBill"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"定制客运商户端","navigationBarTextStyle":"black","enablePullDownRefresh":true},"usingComponents":{"i-tabs":"./dist/tabs/index","i-tab":"./dist/tab/index","i-cell-group":"./dist/cell-group/index","i-cell":"./dist/cell/index","i-load-more":"./dist/load-more/index","i-card":"./dist/card/index","i-input":"./dist/input/index","i-icon":"./dist/icon/index","i-alert":"./dist/alert/index","i-index":"./dist/index/index","i-index-item":"./dist/index-item/index","no-reault":"./components/no-result/no-result"},"tabBar":{"selectedColor":"#358df3","list":[{"pagePath":"pages/index/index","iconPath":"/img/tab-index-off-icon.png","selectedIconPath":"/img/tab-index-on-icon.png","text":"工作台"},{"pagePath":"pages/my/my","iconPath":"/img/tab-my-off-icon.png","selectedIconPath":"/img/tab-my-on-icon.png","text":"我的"}]},"sitemapLocation":"sitemap.json","permission":{"scope.userLocation":{"desc":"你的位置信息将用于小程序位置接口的效果展示"}},"requiredPrivateInfos":["getLocation"]};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['app.wxml'] = [$gwx, './app.wxml'];else __wxAppCode__['app.wxml'] = $gwx( './app.wxml' );
		__wxAppCode__['components/no-result/no-result.json'] = {"component":true,"usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"./no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/no-result/no-result.wxml'] = [$gwx, './components/no-result/no-result.wxml'];else __wxAppCode__['components/no-result/no-result.wxml'] = $gwx( './components/no-result/no-result.wxml' );
		__wxAppCode__['components/noticePop/noticePop.json'] = {"component":true,"usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/noticePop/noticePop.wxml'] = [$gwx, './components/noticePop/noticePop.wxml'];else __wxAppCode__['components/noticePop/noticePop.wxml'] = $gwx( './components/noticePop/noticePop.wxml' );
		__wxAppCode__['dist/alert/index.json'] = {"component":true,"usingComponents":{"i-icon":"../icon/index","i-tabs":"../tabs/index","i-tab":"../tab/index","i-cell-group":"../cell-group/index","i-cell":"../cell/index","i-load-more":"../load-more/index","i-card":"../card/index","i-input":"../input/index","i-alert":"./index","i-index":"../index/index","i-index-item":"../index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['dist/alert/index.wxml'] = [$gwx, './dist/alert/index.wxml'];else __wxAppCode__['dist/alert/index.wxml'] = $gwx( './dist/alert/index.wxml' );
		__wxAppCode__['dist/badge/index.json'] = {"component":true,"usingComponents":{"i-tabs":"../tabs/index","i-tab":"../tab/index","i-cell-group":"../cell-group/index","i-cell":"../cell/index","i-load-more":"../load-more/index","i-card":"../card/index","i-input":"../input/index","i-icon":"../icon/index","i-alert":"../alert/index","i-index":"../index/index","i-index-item":"../index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['dist/badge/index.wxml'] = [$gwx, './dist/badge/index.wxml'];else __wxAppCode__['dist/badge/index.wxml'] = $gwx( './dist/badge/index.wxml' );
		__wxAppCode__['dist/card/index.json'] = {"component":true,"usingComponents":{"i-tabs":"../tabs/index","i-tab":"../tab/index","i-cell-group":"../cell-group/index","i-cell":"../cell/index","i-load-more":"../load-more/index","i-card":"./index","i-input":"../input/index","i-icon":"../icon/index","i-alert":"../alert/index","i-index":"../index/index","i-index-item":"../index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['dist/card/index.wxml'] = [$gwx, './dist/card/index.wxml'];else __wxAppCode__['dist/card/index.wxml'] = $gwx( './dist/card/index.wxml' );
		__wxAppCode__['dist/cell-group/index.json'] = {"component":true,"usingComponents":{"i-tabs":"../tabs/index","i-tab":"../tab/index","i-cell-group":"./index","i-cell":"../cell/index","i-load-more":"../load-more/index","i-card":"../card/index","i-input":"../input/index","i-icon":"../icon/index","i-alert":"../alert/index","i-index":"../index/index","i-index-item":"../index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['dist/cell-group/index.wxml'] = [$gwx, './dist/cell-group/index.wxml'];else __wxAppCode__['dist/cell-group/index.wxml'] = $gwx( './dist/cell-group/index.wxml' );
		__wxAppCode__['dist/cell/index.json'] = {"component":true,"usingComponents":{"i-tabs":"../tabs/index","i-tab":"../tab/index","i-cell-group":"../cell-group/index","i-cell":"./index","i-load-more":"../load-more/index","i-card":"../card/index","i-input":"../input/index","i-icon":"../icon/index","i-alert":"../alert/index","i-index":"../index/index","i-index-item":"../index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['dist/cell/index.wxml'] = [$gwx, './dist/cell/index.wxml'];else __wxAppCode__['dist/cell/index.wxml'] = $gwx( './dist/cell/index.wxml' );
		__wxAppCode__['dist/icon/index.json'] = {"component":true,"usingComponents":{"i-tabs":"../tabs/index","i-tab":"../tab/index","i-cell-group":"../cell-group/index","i-cell":"../cell/index","i-load-more":"../load-more/index","i-card":"../card/index","i-input":"../input/index","i-icon":"./index","i-alert":"../alert/index","i-index":"../index/index","i-index-item":"../index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['dist/icon/index.wxml'] = [$gwx, './dist/icon/index.wxml'];else __wxAppCode__['dist/icon/index.wxml'] = $gwx( './dist/icon/index.wxml' );
		__wxAppCode__['dist/index-item/index.json'] = {"component":true,"usingComponents":{"i-tabs":"../tabs/index","i-tab":"../tab/index","i-cell-group":"../cell-group/index","i-cell":"../cell/index","i-load-more":"../load-more/index","i-card":"../card/index","i-input":"../input/index","i-icon":"../icon/index","i-alert":"../alert/index","i-index":"../index/index","i-index-item":"./index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['dist/index-item/index.wxml'] = [$gwx, './dist/index-item/index.wxml'];else __wxAppCode__['dist/index-item/index.wxml'] = $gwx( './dist/index-item/index.wxml' );
		__wxAppCode__['dist/index/index.json'] = {"component":true,"usingComponents":{"i-tabs":"../tabs/index","i-tab":"../tab/index","i-cell-group":"../cell-group/index","i-cell":"../cell/index","i-load-more":"../load-more/index","i-card":"../card/index","i-input":"../input/index","i-icon":"../icon/index","i-alert":"../alert/index","i-index":"./index","i-index-item":"../index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['dist/index/index.wxml'] = [$gwx, './dist/index/index.wxml'];else __wxAppCode__['dist/index/index.wxml'] = $gwx( './dist/index/index.wxml' );
		__wxAppCode__['dist/input/index.json'] = {"component":true,"usingComponents":{"i-tabs":"../tabs/index","i-tab":"../tab/index","i-cell-group":"../cell-group/index","i-cell":"../cell/index","i-load-more":"../load-more/index","i-card":"../card/index","i-input":"./index","i-icon":"../icon/index","i-alert":"../alert/index","i-index":"../index/index","i-index-item":"../index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['dist/input/index.wxml'] = [$gwx, './dist/input/index.wxml'];else __wxAppCode__['dist/input/index.wxml'] = $gwx( './dist/input/index.wxml' );
		__wxAppCode__['dist/load-more/index.json'] = {"component":true,"usingComponents":{"i-tabs":"../tabs/index","i-tab":"../tab/index","i-cell-group":"../cell-group/index","i-cell":"../cell/index","i-load-more":"./index","i-card":"../card/index","i-input":"../input/index","i-icon":"../icon/index","i-alert":"../alert/index","i-index":"../index/index","i-index-item":"../index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['dist/load-more/index.wxml'] = [$gwx, './dist/load-more/index.wxml'];else __wxAppCode__['dist/load-more/index.wxml'] = $gwx( './dist/load-more/index.wxml' );
		__wxAppCode__['dist/tab/index.json'] = {"component":true,"usingComponents":{"i-badge":"../badge/index","i-tabs":"../tabs/index","i-tab":"./index","i-cell-group":"../cell-group/index","i-cell":"../cell/index","i-load-more":"../load-more/index","i-card":"../card/index","i-input":"../input/index","i-icon":"../icon/index","i-alert":"../alert/index","i-index":"../index/index","i-index-item":"../index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['dist/tab/index.wxml'] = [$gwx, './dist/tab/index.wxml'];else __wxAppCode__['dist/tab/index.wxml'] = $gwx( './dist/tab/index.wxml' );
		__wxAppCode__['dist/tabs/index.json'] = {"component":true,"usingComponents":{"i-tabs":"./index","i-tab":"../tab/index","i-cell-group":"../cell-group/index","i-cell":"../cell/index","i-load-more":"../load-more/index","i-card":"../card/index","i-input":"../input/index","i-icon":"../icon/index","i-alert":"../alert/index","i-index":"../index/index","i-index-item":"../index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['dist/tabs/index.wxml'] = [$gwx, './dist/tabs/index.wxml'];else __wxAppCode__['dist/tabs/index.wxml'] = $gwx( './dist/tabs/index.wxml' );
		__wxAppCode__['pages/checkTicketResult/checkTicketResult.json'] = {"navigationBarBackgroundColor":"#494c5b","navigationBarTextStyle":"white","navigationBarTitleText":"检票结果","usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/checkTicketResult/checkTicketResult.wxml'] = [$gwx, './pages/checkTicketResult/checkTicketResult.wxml'];else __wxAppCode__['pages/checkTicketResult/checkTicketResult.wxml'] = $gwx( './pages/checkTicketResult/checkTicketResult.wxml' );
		__wxAppCode__['pages/dispatchOrderDetail/dispatchOrderDetail.json'] = {"navigationBarBackgroundColor":"#494c5b","navigationBarTextStyle":"white","navigationBarTitleText":"订单详情","usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/dispatchOrderDetail/dispatchOrderDetail.wxml'] = [$gwx, './pages/dispatchOrderDetail/dispatchOrderDetail.wxml'];else __wxAppCode__['pages/dispatchOrderDetail/dispatchOrderDetail.wxml'] = $gwx( './pages/dispatchOrderDetail/dispatchOrderDetail.wxml' );
		__wxAppCode__['pages/dispatchOrderList/dispatchOrderList.json'] = {"navigationBarBackgroundColor":"#494c5b","navigationBarTextStyle":"white","navigationBarTitleText":"订单列表","enablePullDownRefresh":true,"onReachBottomDistance":50,"usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/dispatchOrderList/dispatchOrderList.wxml'] = [$gwx, './pages/dispatchOrderList/dispatchOrderList.wxml'];else __wxAppCode__['pages/dispatchOrderList/dispatchOrderList.wxml'] = $gwx( './pages/dispatchOrderList/dispatchOrderList.wxml' );
		__wxAppCode__['pages/driverOrderDetail/driverOrderDetail.json'] = {"navigationBarBackgroundColor":"#494c5b","navigationBarTextStyle":"white","navigationBarTitleText":"订单详情","usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/driverOrderDetail/driverOrderDetail.wxml'] = [$gwx, './pages/driverOrderDetail/driverOrderDetail.wxml'];else __wxAppCode__['pages/driverOrderDetail/driverOrderDetail.wxml'] = $gwx( './pages/driverOrderDetail/driverOrderDetail.wxml' );
		__wxAppCode__['pages/focusShiftList/focusShiftList.json'] = {"navigationBarBackgroundColor":"#494c5b","navigationBarTextStyle":"white","navigationBarTitleText":"班次报班","enablePullDownRefresh":true,"onReachBottomDistance":50,"usingComponents":{"calendars":"../planControl/components/calendars/calendars","i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/focusShiftList/focusShiftList.wxml'] = [$gwx, './pages/focusShiftList/focusShiftList.wxml'];else __wxAppCode__['pages/focusShiftList/focusShiftList.wxml'] = $gwx( './pages/focusShiftList/focusShiftList.wxml' );
		__wxAppCode__['pages/index/index.json'] = {"navigationBarBackgroundColor":"#494c5b","navigationBarTextStyle":"white","navigationBarTitleText":"","usingComponents":{"notice-pop":"../../components/noticePop/noticePop","i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx( './pages/index/index.wxml' );
		__wxAppCode__['pages/map/map.json'] = {"usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"},"enablePullDownRefresh":false};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/map/map.wxml'] = [$gwx, './pages/map/map.wxml'];else __wxAppCode__['pages/map/map.wxml'] = $gwx( './pages/map/map.wxml' );
		__wxAppCode__['pages/my/my.json'] = {"navigationBarBackgroundColor":"#494c5b","navigationBarTextStyle":"white","navigationBarTitleText":"","usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/my/my.wxml'] = [$gwx, './pages/my/my.wxml'];else __wxAppCode__['pages/my/my.wxml'] = $gwx( './pages/my/my.wxml' );
		__wxAppCode__['pages/myBill/myBill.json'] = {"navigationBarTitleText":"我的账单","usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/myBill/myBill.wxml'] = [$gwx, './pages/myBill/myBill.wxml'];else __wxAppCode__['pages/myBill/myBill.wxml'] = $gwx( './pages/myBill/myBill.wxml' );
		__wxAppCode__['pages/mySchedule/mySchedule.json'] = {"navigationBarBackgroundColor":"#494c5b","navigationBarTextStyle":"white","navigationBarTitleText":"我的排班","enablePullDownRefresh":true,"usingComponents":{"calendars":"../planControl/components/calendars/calendars","i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mySchedule/mySchedule.wxml'] = [$gwx, './pages/mySchedule/mySchedule.wxml'];else __wxAppCode__['pages/mySchedule/mySchedule.wxml'] = $gwx( './pages/mySchedule/mySchedule.wxml' );
		__wxAppCode__['pages/noticeList/noticeList.json'] = {"navigationBarBackgroundColor":"#494c5b","navigationBarTextStyle":"white","navigationBarTitleText":"消息列表","usingComponents":{"notice-pop":"../../components/noticePop/noticePop","i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/noticeList/noticeList.wxml'] = [$gwx, './pages/noticeList/noticeList.wxml'];else __wxAppCode__['pages/noticeList/noticeList.wxml'] = $gwx( './pages/noticeList/noticeList.wxml' );
		__wxAppCode__['pages/orderConfirm/orderConfirm.json'] = {"navigationBarBackgroundColor":"#494c5b","navigationBarTextStyle":"white","navigationBarTitleText":"订单确认","usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/orderConfirm/orderConfirm.wxml'] = [$gwx, './pages/orderConfirm/orderConfirm.wxml'];else __wxAppCode__['pages/orderConfirm/orderConfirm.wxml'] = $gwx( './pages/orderConfirm/orderConfirm.wxml' );
		__wxAppCode__['pages/orderDetail/orderDetail.json'] = {"usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"},"enablePullDownRefresh":false};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/orderDetail/orderDetail.wxml'] = [$gwx, './pages/orderDetail/orderDetail.wxml'];else __wxAppCode__['pages/orderDetail/orderDetail.wxml'] = $gwx( './pages/orderDetail/orderDetail.wxml' );
		__wxAppCode__['pages/passenger/passenger.json'] = {"backgroundTextStyle":"dark","usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/passenger/passenger.wxml'] = [$gwx, './pages/passenger/passenger.wxml'];else __wxAppCode__['pages/passenger/passenger.wxml'] = $gwx( './pages/passenger/passenger.wxml' );
		__wxAppCode__['pages/planControl/components/calendar/calendar.json'] = {"navigationBarBackgroundColor":"#494c5b","navigationBarTextStyle":"white","navigationBarTitleText":"选择日期","onReachBottomDistance":100,"usingComponents":{"i-tabs":"../../../../dist/tabs/index","i-tab":"../../../../dist/tab/index","i-cell-group":"../../../../dist/cell-group/index","i-cell":"../../../../dist/cell/index","i-load-more":"../../../../dist/load-more/index","i-card":"../../../../dist/card/index","i-input":"../../../../dist/input/index","i-icon":"../../../../dist/icon/index","i-alert":"../../../../dist/alert/index","i-index":"../../../../dist/index/index","i-index-item":"../../../../dist/index-item/index","no-reault":"../../../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/planControl/components/calendar/calendar.wxml'] = [$gwx, './pages/planControl/components/calendar/calendar.wxml'];else __wxAppCode__['pages/planControl/components/calendar/calendar.wxml'] = $gwx( './pages/planControl/components/calendar/calendar.wxml' );
		__wxAppCode__['pages/planControl/components/calendars/calendars.json'] = {"component":true,"usingComponents":{"i-tabs":"../../../../dist/tabs/index","i-tab":"../../../../dist/tab/index","i-cell-group":"../../../../dist/cell-group/index","i-cell":"../../../../dist/cell/index","i-load-more":"../../../../dist/load-more/index","i-card":"../../../../dist/card/index","i-input":"../../../../dist/input/index","i-icon":"../../../../dist/icon/index","i-alert":"../../../../dist/alert/index","i-index":"../../../../dist/index/index","i-index-item":"../../../../dist/index-item/index","no-reault":"../../../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/planControl/components/calendars/calendars.wxml'] = [$gwx, './pages/planControl/components/calendars/calendars.wxml'];else __wxAppCode__['pages/planControl/components/calendars/calendars.wxml'] = $gwx( './pages/planControl/components/calendars/calendars.wxml' );
		__wxAppCode__['pages/planControl/components/openSch/openSch.json'] = {"navigationBarBackgroundColor":"#494c5b","navigationBarTextStyle":"white","navigationBarTitleText":"开班/停班","enablePullDownRefresh":true,"onReachBottomDistance":50,"usingComponents":{"i-tabs":"../../../../dist/tabs/index","i-tab":"../../../../dist/tab/index","i-cell-group":"../../../../dist/cell-group/index","i-cell":"../../../../dist/cell/index","i-load-more":"../../../../dist/load-more/index","i-card":"../../../../dist/card/index","i-input":"../../../../dist/input/index","i-icon":"../../../../dist/icon/index","i-alert":"../../../../dist/alert/index","i-index":"../../../../dist/index/index","i-index-item":"../../../../dist/index-item/index","no-reault":"../../../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/planControl/components/openSch/openSch.wxml'] = [$gwx, './pages/planControl/components/openSch/openSch.wxml'];else __wxAppCode__['pages/planControl/components/openSch/openSch.wxml'] = $gwx( './pages/planControl/components/openSch/openSch.wxml' );
		__wxAppCode__['pages/planControl/components/selectPage/selectPage.json'] = {"navigationBarBackgroundColor":"#494c5b","navigationBarTextStyle":"white","navigationBarTitleText":"选择车辆司机","enablePullDownRefresh":true,"onReachBottomDistance":50,"usingComponents":{"i-tabs":"../../../../dist/tabs/index","i-tab":"../../../../dist/tab/index","i-cell-group":"../../../../dist/cell-group/index","i-cell":"../../../../dist/cell/index","i-load-more":"../../../../dist/load-more/index","i-card":"../../../../dist/card/index","i-input":"../../../../dist/input/index","i-icon":"../../../../dist/icon/index","i-alert":"../../../../dist/alert/index","i-index":"../../../../dist/index/index","i-index-item":"../../../../dist/index-item/index","no-reault":"../../../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/planControl/components/selectPage/selectPage.wxml'] = [$gwx, './pages/planControl/components/selectPage/selectPage.wxml'];else __wxAppCode__['pages/planControl/components/selectPage/selectPage.wxml'] = $gwx( './pages/planControl/components/selectPage/selectPage.wxml' );
		__wxAppCode__['pages/planControl/components/selectdown/selectdown.json'] = {"component":true,"usingComponents":{"i-tabs":"../../../../dist/tabs/index","i-tab":"../../../../dist/tab/index","i-cell-group":"../../../../dist/cell-group/index","i-cell":"../../../../dist/cell/index","i-load-more":"../../../../dist/load-more/index","i-card":"../../../../dist/card/index","i-input":"../../../../dist/input/index","i-icon":"../../../../dist/icon/index","i-alert":"../../../../dist/alert/index","i-index":"../../../../dist/index/index","i-index-item":"../../../../dist/index-item/index","no-reault":"../../../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/planControl/components/selectdown/selectdown.wxml'] = [$gwx, './pages/planControl/components/selectdown/selectdown.wxml'];else __wxAppCode__['pages/planControl/components/selectdown/selectdown.wxml'] = $gwx( './pages/planControl/components/selectdown/selectdown.wxml' );
		__wxAppCode__['pages/planControl/planControl.json'] = {"navigationBarBackgroundColor":"#494c5b","navigationBarTextStyle":"white","navigationBarTitleText":"计划管理","enablePullDownRefresh":true,"onReachBottomDistance":50,"usingComponents":{"calendars":"./components/calendars/calendars","selectdown":"./components/selectdown/selectdown","i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/planControl/planControl.wxml'] = [$gwx, './pages/planControl/planControl.wxml'];else __wxAppCode__['pages/planControl/planControl.wxml'] = $gwx( './pages/planControl/planControl.wxml' );
		__wxAppCode__['pages/scan/scan.json'] = {"enablePullDownRefresh":false,"usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/scan/scan.wxml'] = [$gwx, './pages/scan/scan.wxml'];else __wxAppCode__['pages/scan/scan.wxml'] = $gwx( './pages/scan/scan.wxml' );
		__wxAppCode__['pages/scanResult/scanResult.json'] = {"usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/scanResult/scanResult.wxml'] = [$gwx, './pages/scanResult/scanResult.wxml'];else __wxAppCode__['pages/scanResult/scanResult.wxml'] = $gwx( './pages/scanResult/scanResult.wxml' );
		__wxAppCode__['pages/setting/setting.json'] = {"navigationBarBackgroundColor":"#494c5b","navigationBarTextStyle":"white","navigationBarTitleText":"设置","usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/setting/setting.wxml'] = [$gwx, './pages/setting/setting.wxml'];else __wxAppCode__['pages/setting/setting.wxml'] = $gwx( './pages/setting/setting.wxml' );
		__wxAppCode__['pages/shiftJianList/shiftList.json'] = {"navigationBarBackgroundColor":"#494c5b","navigationBarTextStyle":"white","navigationBarTitleText":"检票","enablePullDownRefresh":true,"onReachBottomDistance":50,"usingComponents":{"calendars":"../planControl/components/calendars/calendars","i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/shiftJianList/shiftList.wxml'] = [$gwx, './pages/shiftJianList/shiftList.wxml'];else __wxAppCode__['pages/shiftJianList/shiftList.wxml'] = $gwx( './pages/shiftJianList/shiftList.wxml' );
		__wxAppCode__['pages/shiftList/shiftList.json'] = {"navigationBarBackgroundColor":"#494c5b","navigationBarTextStyle":"white","navigationBarTitleText":"排班班次","enablePullDownRefresh":true,"onReachBottomDistance":50,"usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/shiftList/shiftList.wxml'] = [$gwx, './pages/shiftList/shiftList.wxml'];else __wxAppCode__['pages/shiftList/shiftList.wxml'] = $gwx( './pages/shiftList/shiftList.wxml' );
		__wxAppCode__['pages/shiftOrder/shiftOrder.json'] = {"usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"},"backgroundTextStyle":"dark"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/shiftOrder/shiftOrder.wxml'] = [$gwx, './pages/shiftOrder/shiftOrder.wxml'];else __wxAppCode__['pages/shiftOrder/shiftOrder.wxml'] = $gwx( './pages/shiftOrder/shiftOrder.wxml' );
		__wxAppCode__['pages/shiftOrderList/shiftOrderList.json'] = {"navigationBarTitleText":"收单一览","enablePullDownRefresh":true,"navigationStyle":"custom","usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/shiftOrderList/shiftOrderList.wxml'] = [$gwx, './pages/shiftOrderList/shiftOrderList.wxml'];else __wxAppCode__['pages/shiftOrderList/shiftOrderList.wxml'] = $gwx( './pages/shiftOrderList/shiftOrderList.wxml' );
		__wxAppCode__['pages/shiftSchedule/shiftSchedule.json'] = {"backgroundTextStyle":"dark","usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/shiftSchedule/shiftSchedule.wxml'] = [$gwx, './pages/shiftSchedule/shiftSchedule.wxml'];else __wxAppCode__['pages/shiftSchedule/shiftSchedule.wxml'] = $gwx( './pages/shiftSchedule/shiftSchedule.wxml' );
		__wxAppCode__['pages/showQrcode/showQrcode.json'] = {"navigationBarTitleText":"检票","navigationBarBackgroundColor":"#494c5b","navigationBarTextStyle":"white","usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/showQrcode/showQrcode.wxml'] = [$gwx, './pages/showQrcode/showQrcode.wxml'];else __wxAppCode__['pages/showQrcode/showQrcode.wxml'] = $gwx( './pages/showQrcode/showQrcode.wxml' );
		__wxAppCode__['pages/ticketCountList/ticketCountList.json'] = {"navigationBarBackgroundColor":"#494c5b","navigationBarTextStyle":"white","navigationBarTitleText":"统计报表","enablePullDownRefresh":true,"onReachBottomDistance":50,"usingComponents":{"i-tabs":"../../dist/tabs/index","i-tab":"../../dist/tab/index","i-cell-group":"../../dist/cell-group/index","i-cell":"../../dist/cell/index","i-load-more":"../../dist/load-more/index","i-card":"../../dist/card/index","i-input":"../../dist/input/index","i-icon":"../../dist/icon/index","i-alert":"../../dist/alert/index","i-index":"../../dist/index/index","i-index-item":"../../dist/index-item/index","no-reault":"../../components/no-result/no-result"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/ticketCountList/ticketCountList.wxml'] = [$gwx, './pages/ticketCountList/ticketCountList.wxml'];else __wxAppCode__['pages/ticketCountList/ticketCountList.wxml'] = $gwx( './pages/ticketCountList/ticketCountList.wxml' );
		__wxAppCode__['project.config.json'] = {"miniprogramRoot":"","__compileDebugInfo__":{"from":"devtools","useNewCompileModule":true,"devtoolsVersion":"1.06.2208010","compileSetting":{"bundle":true,"urlCheck":false,"coverView":true,"es6":true,"postcss":true,"lazyloadPlaceholderEnable":false,"skylineRenderEnable":false,"preloadBackgroundData":false,"minified":true,"autoAudits":false,"uglifyFileName":false,"uploadWithSourceMap":true,"useIsolateContext":false,"scriptsEnable":false,"enhance":false,"useMultiFrameRuntime":true,"useApiHook":true,"useApiHostProcess":true,"showShadowRootInWxmlPanel":true,"packNpmManually":false,"packNpmRelationList":[],"minifyWXSS":true,"minifyWXML":true,"useStaticServer":false,"useLanDebug":false,"showES6CompileOption":false,"localPlugins":false,"compileHotReLoad":false,"bigPackageSizeSupport":false,"babelSetting":{"ignore":[],"disablePlugins":[],"outputPath":""},"checkInvalidKey":true,"disableUseStrict":false,"useCompilerPlugins":false,"ignoreDevUnusedFiles":true},"ciVersion":"1.8.32"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['project.config.wxml'] = [$gwx, './project.config.wxml'];else __wxAppCode__['project.config.wxml'] = $gwx( './project.config.wxml' );
		__wxAppCode__['sitemap.json'] = {"desc":"关于本文件的更多信息，请参考文档 https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html","rules":[{"action":"allow","page":"*"}]};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sitemap.wxml'] = [$gwx, './sitemap.wxml'];else __wxAppCode__['sitemap.wxml'] = $gwx( './sitemap.wxml' );
	
	define("@babel/runtime/helpers/Arrayincludes.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(r,e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if(0==n)return!1;for(var i,o,a=0|e,u=Math.max(0<=a?a:n-Math.abs(a),0);u<n;){if((i=t[u])===(o=r)||"number"==typeof i&&"number"==typeof o&&isNaN(i)&&isNaN(o))return!0;u++}return!1}}); 
 			}); 
		define("@babel/runtime/helpers/arrayLikeToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=r[e];return n}module.exports=_arrayLikeToArray; 
 			}); 
		define("@babel/runtime/helpers/arrayWithoutHoles.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var arrayLikeToArray=require("./arrayLikeToArray");function _arrayWithoutHoles(r){if(Array.isArray(r))return arrayLikeToArray(r)}module.exports=_arrayWithoutHoles; 
 			}); 
		define("@babel/runtime/helpers/createForOfIteratorHelper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var unsupportedIterableToArray=require("./unsupportedIterableToArray");function _createForOfIteratorHelper(r,e){var t;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(t=unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,i=!1;return{s:function(){t=r[Symbol.iterator]()},n:function(){var r=t.next();return u=r.done,r},e:function(r){i=!0,a=r},f:function(){try{u||null==t.return||t.return()}finally{if(i)throw a}}}}module.exports=_createForOfIteratorHelper; 
 			}); 
		define("@babel/runtime/helpers/defineProperty.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function _defineProperty(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}module.exports=_defineProperty; 
 			}); 
		define("@babel/runtime/helpers/interopRequireDefault.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}module.exports=_interopRequireDefault; 
 			}); 
		define("@babel/runtime/helpers/iterableToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function _iterableToArray(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}module.exports=_iterableToArray; 
 			}); 
		define("@babel/runtime/helpers/nonIterableSpread.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=_nonIterableSpread; 
 			}); 
		define("@babel/runtime/helpers/objectSpread2.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var defineProperty=require("./defineProperty");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}module.exports=_objectSpread2; 
 			}); 
		define("@babel/runtime/helpers/toConsumableArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var arrayWithoutHoles=require("./arrayWithoutHoles"),iterableToArray=require("./iterableToArray"),unsupportedIterableToArray=require("./unsupportedIterableToArray"),nonIterableSpread=require("./nonIterableSpread");function _toConsumableArray(r){return arrayWithoutHoles(r)||iterableToArray(r)||unsupportedIterableToArray(r)||nonIterableSpread()}module.exports=_toConsumableArray; 
 			}); 
		define("@babel/runtime/helpers/typeof.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function _typeof(o){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?module.exports=_typeof=function(o){return typeof o}:module.exports=_typeof=function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}module.exports=_typeof; 
 			}); 
		define("@babel/runtime/helpers/unsupportedIterableToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var arrayLikeToArray=require("./arrayLikeToArray");function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?arrayLikeToArray(r,e):void 0}}module.exports=_unsupportedIterableToArray; 
 			}); 
		define("pages/showQrcode/weapp.qrcode.esm.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../../@babel/runtime/helpers/typeof"),e=Object.prototype.hasOwnProperty,r=Object.prototype.toString,o=Object.defineProperty,n=Object.getOwnPropertyDescriptor,i=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===r.call(t)},a=function(t){if(!t||"[object Object]"!==r.call(t))return!1;var o,n=e.call(t,"constructor"),i=t.constructor&&t.constructor.prototype&&e.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!i)return!1;for(o in t);return void 0===o||e.call(t,o)},u=function(t,e){o&&"__proto__"===e.name?o(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},s=function(t,r){if("__proto__"===r){if(!e.call(t,r))return;if(n)return n(t,r).value}return t[r]};function h(t){this.mode=f.MODE_8BIT_BYTE,this.data=t}function l(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=new Array}h.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},l.prototype={addData:function(t){var e=new h(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=C.getRSBlocks(t,this.errorCorrectLevel),r=new E,o=0,n=0;n<e.length;n++)o+=e[n].dataCount;for(n=0;n<this.dataList.length;n++){var i=this.dataList[n];r.put(i.mode,4),r.put(i.getLength(),d.getLengthInBits(i.mode,t)),i.write(r)}if(r.getLengthInBits()<=8*o)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[r][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=l.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var o=-1;o<=7;o++)e+o<=-1||this.moduleCount<=e+o||(this.modules[t+r][e+o]=0<=r&&r<=6&&(0==o||6==o)||0<=o&&o<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=o&&o<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var o=d.getLostPoint(this);(0==r||t>o)&&(t=o,e=r)}return e},createMovieClip:function(t,e,r){var o=t.createEmptyMovieClip(e,r);this.make();for(var n=0;n<this.modules.length;n++)for(var i=1*n,a=0;a<this.modules[n].length;a++){var u=1*a;this.modules[n][a]&&(o.beginFill(0,100),o.moveTo(u,i),o.lineTo(u+1,i),o.lineTo(u+1,i+1),o.lineTo(u,i+1),o.endFill())}return o},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=d.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var o=t[e],n=t[r];if(null==this.modules[o][n])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[o+i][n+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},setupTypeNumber:function(t){for(var e=d.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var o=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=o}for(r=0;r<18;r++)o=!t&&1==(e>>r&1),this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=o},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,o=d.getBCHTypeInfo(r),n=0;n<15;n++){var i=!t&&1==(o>>n&1);n<6?this.modules[n][8]=i:n<8?this.modules[n+1][8]=i:this.modules[this.moduleCount-15+n][8]=i}for(n=0;n<15;n++)i=!t&&1==(o>>n&1),n<8?this.modules[8][this.moduleCount-n-1]=i:n<9?this.modules[8][15-n-1+1]=i:this.modules[8][15-n-1]=i;this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,o=this.moduleCount-1,n=7,i=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var u=0;u<2;u++)if(null==this.modules[o][a-u]){var s=!1;i<t.length&&(s=1==(t[i]>>>n&1)),d.getMask(e,o,a-u)&&(s=!s),this.modules[o][a-u]=s,-1==--n&&(i++,n=7)}if((o+=r)<0||this.moduleCount<=o){o-=r,r=-r;break}}}},l.PAD0=236,l.PAD1=17,l.createData=function(t,e,r){for(var o=C.getRSBlocks(t,e),n=new E,i=0;i<r.length;i++){var a=r[i];n.put(a.mode,4),n.put(a.getLength(),d.getLengthInBits(a.mode,t)),a.write(n)}var u=0;for(i=0;i<o.length;i++)u+=o[i].dataCount;if(n.getLengthInBits()>8*u)throw new Error("code length overflow. ("+n.getLengthInBits()+">"+8*u+")");for(n.getLengthInBits()+4<=8*u&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(!1);for(;!(n.getLengthInBits()>=8*u||(n.put(l.PAD0,8),n.getLengthInBits()>=8*u));)n.put(l.PAD1,8);return l.createBytes(n,o)},l.createBytes=function(t,e){for(var r=0,o=0,n=0,i=new Array(e.length),a=new Array(e.length),u=0;u<e.length;u++){var s=e[u].dataCount,h=e[u].totalCount-s;o=Math.max(o,s),n=Math.max(n,h),i[u]=new Array(s);for(var l=0;l<i[u].length;l++)i[u][l]=255&t.buffer[l+r];r+=s;var f=d.getErrorCorrectPolynomial(h),g=new p(i[u],f.getLength()-1).mod(f);for(a[u]=new Array(f.getLength()-1),l=0;l<a[u].length;l++){var c=l+g.getLength()-a[u].length;a[u][l]=c>=0?g.get(c):0}}var m=0;for(l=0;l<e.length;l++)m+=e[l].totalCount;var v=new Array(m),C=0;for(l=0;l<o;l++)for(u=0;u<e.length;u++)l<i[u].length&&(v[C++]=i[u][l]);for(l=0;l<n;l++)for(u=0;u<e.length;u++)l<a[u].length&&(v[C++]=a[u][l]);return v};for(var f={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},g={L:1,M:0,Q:3,H:2},c={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},d={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;d.getBCHDigit(e)-d.getBCHDigit(d.G15)>=0;)e^=d.G15<<d.getBCHDigit(e)-d.getBCHDigit(d.G15);return(t<<10|e)^d.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;d.getBCHDigit(e)-d.getBCHDigit(d.G18)>=0;)e^=d.G18<<d.getBCHDigit(e)-d.getBCHDigit(d.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return d.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case c.PATTERN000:return(e+r)%2==0;case c.PATTERN001:return e%2==0;case c.PATTERN010:return r%3==0;case c.PATTERN011:return(e+r)%3==0;case c.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case c.PATTERN101:return e*r%2+e*r%3==0;case c.PATTERN110:return(e*r%2+e*r%3)%2==0;case c.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new p([1],0),r=0;r<t;r++)e=e.multiply(new p([1,m.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case f.MODE_NUMBER:return 10;case f.MODE_ALPHA_NUM:return 9;case f.MODE_8BIT_BYTE:case f.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case f.MODE_NUMBER:return 12;case f.MODE_ALPHA_NUM:return 11;case f.MODE_8BIT_BYTE:return 16;case f.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case f.MODE_NUMBER:return 14;case f.MODE_ALPHA_NUM:return 13;case f.MODE_8BIT_BYTE:return 16;case f.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,o=0;o<e;o++)for(var n=0;n<e;n++){for(var i=0,a=t.isDark(o,n),u=-1;u<=1;u++)if(!(o+u<0||e<=o+u))for(var s=-1;s<=1;s++)n+s<0||e<=n+s||0==u&&0==s||a==t.isDark(o+u,n+s)&&i++;i>5&&(r+=3+i-5)}for(o=0;o<e-1;o++)for(n=0;n<e-1;n++){var h=0;t.isDark(o,n)&&h++,t.isDark(o+1,n)&&h++,t.isDark(o,n+1)&&h++,t.isDark(o+1,n+1)&&h++,0!=h&&4!=h||(r+=3)}for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(o,n)&&!t.isDark(o,n+1)&&t.isDark(o,n+2)&&t.isDark(o,n+3)&&t.isDark(o,n+4)&&!t.isDark(o,n+5)&&t.isDark(o,n+6)&&(r+=40);for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(o,n)&&!t.isDark(o+1,n)&&t.isDark(o+2,n)&&t.isDark(o+3,n)&&t.isDark(o+4,n)&&!t.isDark(o+5,n)&&t.isDark(o+6,n)&&(r+=40);var l=0;for(n=0;n<e;n++)for(o=0;o<e;o++)t.isDark(o,n)&&l++;return r+Math.abs(100*l/e/e-50)/5*10}},m={glog:function(t){if(t<1)throw new Error("glog("+t+")");return m.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return m.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},v=0;v<8;v++)m.EXP_TABLE[v]=1<<v;for(v=8;v<256;v++)m.EXP_TABLE[v]=m.EXP_TABLE[v-4]^m.EXP_TABLE[v-5]^m.EXP_TABLE[v-6]^m.EXP_TABLE[v-8];for(v=0;v<255;v++)m.LOG_TABLE[m.EXP_TABLE[v]]=v;function p(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var o=0;o<t.length-r;o++)this.num[o]=t[o+r]}function C(t,e){this.totalCount=t,this.dataCount=e}function E(){this.buffer=new Array,this.length=0}p.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var o=0;o<t.getLength();o++)e[r+o]^=m.gexp(m.glog(this.get(r))+m.glog(t.get(o)));return new p(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=m.glog(this.get(0))-m.glog(t.get(0)),r=new Array(this.getLength()),o=0;o<this.getLength();o++)r[o]=this.get(o);for(o=0;o<t.getLength();o++)r[o]^=m.gexp(m.glog(t.get(o))+e);return new p(r,0).mod(t)}},C.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],C.getRSBlocks=function(t,e){var r=C.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=r.length/3,n=new Array,i=0;i<o;i++)for(var a=r[3*i+0],u=r[3*i+1],s=r[3*i+2],h=0;h<a;h++)n.push(new C(u,s));return n},C.getRsBlockTable=function(t,e){switch(e){case g.L:return C.RS_BLOCK_TABLE[4*(t-1)+0];case g.M:return C.RS_BLOCK_TABLE[4*(t-1)+1];case g.Q:return C.RS_BLOCK_TABLE[4*(t-1)+2];case g.H:return C.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},E.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var T=function(e){(e=function e(){var r,o,n,h,l,f,g=arguments[0],c=1,d=arguments.length,m=!1;for("boolean"==typeof g&&(m=g,g=arguments[1]||{},c=2),(null==g||"object"!=t(g)&&"function"!=typeof g)&&(g={});c<d;++c)if(null!=(r=arguments[c]))for(o in r)n=s(g,o),g!==(h=s(r,o))&&(m&&h&&(a(h)||(l=i(h)))?(l?(l=!1,f=n&&i(n)?n:[]):f=n&&a(n)?n:{},u(g,{name:o,newValue:e(m,f,h)})):void 0!==h&&u(g,{name:o,newValue:h}));return g}(!0,{width:256,height:256,x:0,y:0,typeNumber:-1,correctLevel:g.H,background:"#ffffff",foreground:"#000000",image:{imageResource:"",dx:0,dy:0,dWidth:100,dHeight:100}},e=e||{})).canvasId||e.ctx?function(){var t,r=new l(e.typeNumber,e.correctLevel);r.addData(function(t){var e,r,o,n;for(e="",o=t.length,r=0;r<o;r++)(n=t.charCodeAt(r))>=1&&n<=127?e+=t.charAt(r):n>2047?(e+=String.fromCharCode(224|n>>12&15),e+=String.fromCharCode(128|n>>6&63),e+=String.fromCharCode(128|n>>0&63)):(e+=String.fromCharCode(192|n>>6&31),e+=String.fromCharCode(128|n>>0&63));return e}(e.text)),r.make(),t=e.ctx?e.ctx:e._this?wx.createCanvasContext&&wx.createCanvasContext(e.canvasId,e._this):wx.createCanvasContext&&wx.createCanvasContext(e.canvasId);for(var o=e.width/r.getModuleCount(),n=e.height/r.getModuleCount(),i=0;i<r.getModuleCount();i++)for(var a=0;a<r.getModuleCount();a++){var u=r.isDark(i,a)?e.foreground:e.background;t.setFillStyle(u);var s=Math.ceil((a+1)*o)-Math.floor(a*o),h=Math.ceil((i+1)*o)-Math.floor(i*o);t.fillRect(Math.round(a*o)+e.x,Math.round(i*n)+e.y,s,h)}e.image.imageResource&&t.drawImage(e.image.imageResource,e.image.dx,e.image.dy,e.image.dWidth,e.image.dHeight),t.draw(!1,(function(t){e.callback&&e.callback(t)}))}():console.warn("please set canvasId or ctx!")};exports.default=T; 
 			}); 
		define("utils/api.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("./util"),i={statistics:"".concat(t.urlPrefix,"/order/mobile/homepage/statistics"),getShiftOrderStationList:"".concat(t.urlPrefix,"/order/mobile/getShiftOrderStationList/")},e={statistics:"".concat(t.urlPrefix,"/steward/homepage/statistics"),getShiftOrderStationList:"".concat(t.urlPrefix,"/order/mobile/getShiftScheduleOrderStationList/")};module.exports={api:[i,e]}; 
 			}); 
		define("utils/calc.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function r(r){for(var n="";r--;)n+="0";return n}function n(r){var n,t=(n=r<1e-6?function(r){var n=String(r).split(/[eE]/);if(1==n.length)return n[0];var t="",e=r<0?"-":"",u=n[0].replace(".",""),a=Number(n[1])+1;if(a<0){for(t=e+"0.";a++;)t+="0";return t+u.replace(/^\-/,"")}for(a-=u.length;a--;)t+="0";return u+t}(r):r+"").lastIndexOf(".");return t<0?[n,0]:[n.replace(".",""),n.length-t-1]}function t(r,n,t,e){switch(t){case"+":return(r+n)/e;case"-":return(r-n)/e;case"*":return r*n/(e*e);case"/":return r/n}}function e(e,u,a){var o=n(e),c=n(u),i=Math.max(o[1],c[1]);if(0===i)return t(Number(e),Number(u),a,1);var f=Math.pow(10,i);return o[1]!==c[1]&&(o[1]>c[1]?c[0]+=r(o[1]-c[1]):o[0]+=r(c[1]-o[1])),t(Number(o[0]),Number(c[0]),a,f)}module.exports={add:function(r,n){return e(r,n,"+")},sub:function(r,n){return e(r,n,"-")},mul:function(r,n){return e(r,n,"*")},div:function(r,n){return e(r,n,"/")},round:function(r,n){return Math.round(r*Math.pow(10,n))/Math.pow(10,n)}}; 
 			}); 
		define("utils/calendar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("../@babel/runtime/helpers/interopRequireDefault")(require("./util.js")),e=getApp();module.exports={show:function(n){var l=n.basePageUrl||"",r=n.isShowPri||!1,t=a.default.extend(!0,{},n,{callback:"calendarCallback"});e.globalData.calendarCallback=function(a){return n.callback&&n.callback(a)},t.isFlightCross=!!n.isFlightCross,n.rangeFn&&(t.rangeFn="calendarRangeFn",e.globalData.calendarRangeFn=function(a){return n.rangeFn(a)}),n.rangeUnPass&&(t.rangeUnPass="calendarrangeUnPass",e.globalData.calendarrangeUnPass=function(a){return n.rangeUnPass(a)}),n.goBack&&(t.goBack="calendargoBack",e.globalData.calendargoBack=function(a){n.goBack(a)}),n.ishotelInterLocaltime&&n.hotelInterLocal&&(t.ishotelInterLocaltime=!0,t.hotelInterLocal=n.hotelInterLocal),e.globalData.calendarParam=t;var o=r?"":"?isNotShowPri=true";l?wx.navigateTo({url:"/pages/planControl/components/calendar/calendar"+o}):wx.navigateTo({url:"/pages/planControl/components/calendar/calendar"})}}; 
 			}); 
		define("utils/env.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=1;if(1!==t&&wx.getAccountInfoSync&&"function"==typeof wx.getAccountInfoSync){var n=wx.getAccountInfoSync().miniProgram;n&&"release"===n.envVersion&&(t=1)}var e=1===t?"https://ebk.17u.cn":2===t?"https://ebk.t.17u.cn":3===t?"https://ebk.qa.17u.cn":"http://10.181.26.65:3258";module.exports={baseUrl:e}; 
 			}); 
		define("utils/fetch.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(u){return new Promise((function(n,o){t.loginStatus.then((function(r){wx.request({url:e.urlPrefix+u.url,data:u.data,method:u.method,header:{cookie:"unionId="+t.globalData.unionId},success:function(e){n(e)},fail:function(e){o(e)}})}))}))};var e=require("./util.js"),t=getApp(); 
 			}); 
		define("utils/orderAction.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.cancelChangeOrder=function(e,r){wx.showModal({title:"提示",content:"确认取消改签此订单吗？",cancelText:"取消",confirmText:"确认",confirmColor:"#ed3f14",success:function(n){n.confirm&&function(e,r){(0,t.default)({method:"post",url:"/supplier/order/"+a.globalData.vcode+"/rebook/failed",data:{orderNo:e.orderNo,tag:o.default.tagParams[e.tag]}}).then((function(e){wx.showToast({title:e.data.msg,icon:"none",duration:2e3}),1*e.data.code==200&&r(e.data)}))}(e,r)}})},exports.cancelOrder=function(e,r){wx.showModal({title:"提示",content:"确认取消此订单吗？",cancelText:"取消",confirmText:"确认",confirmColor:"#ed3f14",success:function(n){n.confirm&&function(e,r){(0,t.default)({method:"delete",url:"/order/mobile/"+a.globalData.vcode,data:{orderNo:e.orderNo,tag:o.default.tagParams[e.tag]}}).then((function(e){wx.showToast({title:e.data.msg,icon:"none",duration:2e3}),1*e.data.code==200&&r(e.data)}))}(e,r)}})};var t=e(require("./fetch")),o=e(require("./util.js")),a=getApp(); 
 			}); 
		define("utils/pinyin/pinyinUtil.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=require("../../@babel/runtime/helpers/typeof"),t=e(require("./pinyin_dict_notone")),n={},o={parseDict:function(){for(var e in n.notone={},n.py2hz=t.default,t.default)for(var r=t.default[e],o=0,i=r.length;o<i;o++)n.notone[r[o]]=e},getPinyin:function(e,r,t,a){if(!e||/^ +$/g.test(e))return"";r=void 0===r?" ":r,t=void 0===t||t,a=void 0!==a&&a;var u=[];if(n.withtone)for(var f=0,l=e.length;f<l;f++){var p=n.withtone[e[f]];p&&(a||(p=p.replace(/ .*$/g,"")),t||(p=this.removeTone(p))),u.push(p||e[f])}else if(n.notone)for(t&&console.warn("pinyin_dict_notone 字典文件不支持声调！"),a&&console.warn("pinyin_dict_notone 字典文件不支持多音字！"),f=0,l=e.length;f<l;f++){var v=e.charAt(f);u.push(n.notone[v]||v)}return a?window.pinyin_dict_polyphone?function(e,r,t,n){var i=window.pinyin_dict_polyphone,a=i[e];if(a){a=a.split(" ");for(var u=0;u<a.length;u++)r[u]=a[u]||r[u],n||(r[u]=o.removeTone(r[u]));return r.join(t)}for(u=0;u<e.length;u++){a="";for(var f=0;f<7&&u+f<e.length&&/^[\u2E80-\u9FFF]+$/.test(e[u+f]);f++){a+=e[u+f];var l=i[a];if(l){l=l.split(" ");for(var p=0;p<=f;p++)l[p]&&(r[u+p]=n?l[p]:o.removeTone(l[p]));break}}}for(u=0;u<r.length;u++)r[u]=r[u].replace(/ .*$/g,"");return r.join(t)}(e,u,r,t):i(u," ",r):u.join(r)},getFirstLetter:function(e,r){if(r=void 0!==r&&r,!e||/^ +$/g.test(e))return"";if(n.firstletter){for(var t=[],o=0;o<e.length;o++){var u=e.charCodeAt(o),f=e.charAt(o);u>=19968&&u<=40869&&(f=n.firstletter.all.charAt(u-19968),r&&(f=n.firstletter.polyphone[u]||f)),t.push(f)}return r?i(t,"",""):t.join("")}var l=this.getPinyin(e," ",!1,r);for(l=l instanceof Array?l:[l],t=[],o=0;o<l.length;o++)t.push(l[o].replace(/(^| )(\w)\w*/g,(function(e,r,t){return t.toUpperCase()})));return r?a(t):t[0]},getHanzi:function(e){if(!n.py2hz)throw new Error("抱歉，未找到合适的拼音字典文件！");return n.py2hz[e]||""},removeTone:function(e){var r={"ā":"a1","á":"a2","ǎ":"a3","à":"a4","ō":"o1","ó":"o2","ǒ":"o3","ò":"o4","ē":"e1","é":"e2","ě":"e3","è":"e4","ī":"i1","í":"i2","ǐ":"i3","ì":"i4","ū":"u1","ú":"u2","ǔ":"u3","ù":"u4","ü":"v0","ǖ":"v1","ǘ":"v2","ǚ":"v3","ǜ":"v4","ń":"n2","ň":"n3","":"m2"};return e.replace(/[āáǎàōóǒòēéěèīíǐìūúǔùüǖǘǚǜńň]/g,(function(e){return r[e][0]}))}};function i(e,r,t){r=r||"";for(var n=[""],o=[],i=0;i<e.length;i++){o=[];for(var u=e[i].split(r),f=0;f<u.length;f++)for(var l=0;l<n.length;l++)o.push(n[l]+(n[l]?t:"")+u[f]);n=o}return a(n)}function a(e){for(var t=[],n={},o=0;o<e.length;o++){var i=r(e[o])+e[o];n[i]||(t.push(e[o]),n[i]=!0)}return t}o.parseDict(),o.dict=n;var u=o;exports.default=u; 
 			}); 
		define("utils/pinyin/pinyin_dict_notone.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default={a:"阿啊呵腌嗄吖锕",e:"额阿俄恶鹅遏鄂厄饿峨扼娥鳄哦蛾噩愕讹锷垩婀鹗萼谔莪腭锇颚呃阏屙苊轭",ai:"爱埃艾碍癌哀挨矮隘蔼唉皑哎霭捱暧嫒嗳瑷嗌锿砹",ei:"诶",xi:"系西席息希习吸喜细析戏洗悉锡溪惜稀袭夕洒晰昔牺腊烯熙媳栖膝隙犀蹊硒兮熄曦禧嬉玺奚汐徙羲铣淅嘻歙熹矽蟋郗唏皙隰樨浠忾蜥檄郄翕阋鳃舾屣葸螅咭粞觋欷僖醯鼷裼穸饩舄禊诶菥蓰",yi:"一以已意议义益亿易医艺食依移衣异伊仪宜射遗疑毅谊亦疫役忆抑尾乙译翼蛇溢椅沂泄逸蚁夷邑怡绎彝裔姨熠贻矣屹颐倚诣胰奕翌疙弈轶蛾驿壹猗臆弋铱旖漪迤佚翊诒怿痍懿饴峄揖眙镒仡黟肄咿翳挹缢呓刈咦嶷羿钇殪荑薏蜴镱噫癔苡悒嗌瘗衤佾埸圯舣酏劓",an:"安案按岸暗鞍氨俺胺铵谙庵黯鹌桉埯犴揞厂广",han:"厂汉韩含旱寒汗涵函喊憾罕焊翰邯撼瀚憨捍酣悍鼾邗颔蚶晗菡旰顸犴焓撖",ang:"昂仰盎肮",ao:"奥澳傲熬凹鳌敖遨鏖袄坳翱嗷拗懊岙螯骜獒鏊艹媪廒聱",wa:"瓦挖娃洼袜蛙凹哇佤娲呙腽",yu:"于与育余预域予遇奥语誉玉鱼雨渔裕愈娱欲吁舆宇羽逾豫郁寓吾狱喻御浴愉禹俞邪榆愚渝尉淤虞屿峪粥驭瑜禺毓钰隅芋熨瘀迂煜昱汩於臾盂聿竽萸妪腴圄谕觎揄龉谀俣馀庾妤瘐鬻欤鹬阈嵛雩鹆圉蜮伛纡窬窳饫蓣狳肀舁蝓燠",niu:"牛纽扭钮拗妞忸狃",o:"哦噢喔",ba:"把八巴拔伯吧坝爸霸罢芭跋扒叭靶疤笆耙鲅粑岜灞钯捌菝魃茇",pa:"怕帕爬扒趴琶啪葩耙杷钯筢",pi:"被批副否皮坏辟啤匹披疲罢僻毗坯脾譬劈媲屁琵邳裨痞癖陂丕枇噼霹吡纰砒铍淠郫埤濞睥芘蚍圮鼙罴蜱疋貔仳庀擗甓陴",bi:"比必币笔毕秘避闭佛辟壁弊彼逼碧鼻臂蔽拂泌璧庇痹毙弼匕鄙陛裨贲敝蓖吡篦纰俾铋毖筚荸薜婢哔跸濞秕荜愎睥妣芘箅髀畀滗狴萆嬖襞舭",bai:"百白败摆伯拜柏佰掰呗擘捭稗",bo:"波博播勃拨薄佛伯玻搏柏泊舶剥渤卜驳簿脖膊簸菠礴箔铂亳钵帛擘饽跛钹趵檗啵鹁擗踣",bei:"北被备倍背杯勃贝辈悲碑臂卑悖惫蓓陂钡狈呗焙碚褙庳鞴孛鹎邶鐾",ban:"办版半班般板颁伴搬斑扮拌扳瓣坂阪绊钣瘢舨癍",pan:"判盘番潘攀盼拚畔胖叛拌蹒磐爿蟠泮袢襻丬",bin:"份宾频滨斌彬濒殡缤鬓槟摈膑玢镔豳髌傧",bang:"帮邦彭旁榜棒膀镑绑傍磅蚌谤梆浜蒡",pang:"旁庞乓磅螃彷滂逄耪",beng:"泵崩蚌蹦迸绷甭嘣甏堋",bao:"报保包宝暴胞薄爆炮饱抱堡剥鲍曝葆瀑豹刨褒雹孢苞煲褓趵鸨龅勹",bu:"不部步布补捕堡埔卜埠簿哺怖钚卟瓿逋晡醭钸",pu:"普暴铺浦朴堡葡谱埔扑仆蒲曝瀑溥莆圃璞濮菩蹼匍噗氆攵镨攴镤",mian:"面棉免绵缅勉眠冕娩腼渑湎沔黾宀眄",po:"破繁坡迫颇朴泊婆泼魄粕鄱珀陂叵笸泺皤钋钷",fan:"反范犯繁饭泛翻凡返番贩烦拚帆樊藩矾梵蕃钒幡畈蘩蹯燔",fu:"府服副负富复福夫妇幅付扶父符附腐赴佛浮覆辅傅伏抚赋辐腹弗肤阜袱缚甫氟斧孚敷俯拂俘咐腑孵芙涪釜脯茯馥宓绂讣呋罘麸蝠匐芾蜉跗凫滏蝮驸绋蚨砩桴赙菔呒趺苻拊阝鲋怫稃郛莩幞祓艴黻黼鳆",ben:"本体奔苯笨夯贲锛畚坌",feng:"风丰封峰奉凤锋冯逢缝蜂枫疯讽烽俸沣酆砜葑唪",bian:"变便边编遍辩鞭辨贬匾扁卞汴辫砭苄蝙鳊弁窆笾煸褊碥忭缏",pian:"便片篇偏骗翩扁骈胼蹁谝犏缏",zhen:"镇真针圳振震珍阵诊填侦臻贞枕桢赈祯帧甄斟缜箴疹砧榛鸩轸稹溱蓁胗椹朕畛浈",biao:"表标彪镖裱飚膘飙镳婊骠飑杓髟鳔灬瘭",piao:"票朴漂飘嫖瓢剽缥殍瞟骠嘌莩螵",huo:"和活或货获火伙惑霍祸豁嚯藿锪蠖钬耠镬夥灬劐攉",bie:"别鳖憋瘪蹩",min:"民敏闽闵皿泯岷悯珉抿黾缗玟愍苠鳘",fen:"分份纷奋粉氛芬愤粪坟汾焚酚吩忿棼玢鼢瀵偾鲼",bing:"并病兵冰屏饼炳秉丙摒柄槟禀枋邴冫",geng:"更耕颈庚耿梗埂羹哽赓绠鲠",fang:"方放房防访纺芳仿坊妨肪邡舫彷枋鲂匚钫",xian:"现先县见线限显险献鲜洗宪纤陷闲贤仙衔掀咸嫌掺羡弦腺痫娴舷馅酰铣冼涎暹籼锨苋蚬跹岘藓燹鹇氙莶霰跣猃彡祆筅",fou:"不否缶",ca:"拆擦嚓礤",cha:"查察差茶插叉刹茬楂岔诧碴嚓喳姹杈汊衩搽槎镲苴檫馇锸猹",cai:"才采财材菜彩裁蔡猜踩睬",can:"参残餐灿惨蚕掺璨惭粲孱骖黪",shen:"信深参身神什审申甚沈伸慎渗肾绅莘呻婶娠砷蜃哂椹葚吲糁渖诜谂矧胂",cen:"参岑涔",san:"三参散伞叁糁馓毵",cang:"藏仓苍沧舱臧伧",zang:"藏脏葬赃臧奘驵",chen:"称陈沈沉晨琛臣尘辰衬趁忱郴宸谌碜嗔抻榇伧谶龀肜",cao:"草操曹槽糙嘈漕螬艚屮",ce:"策测册侧厕栅恻",ze:"责则泽择侧咋啧仄箦赜笮舴昃迮帻",zhai:"债择齐宅寨侧摘窄斋祭翟砦瘵哜",dao:"到道导岛倒刀盗稻蹈悼捣叨祷焘氘纛刂帱忉",ceng:"层曾蹭噌",zha:"查扎炸诈闸渣咋乍榨楂札栅眨咤柞喳喋铡蚱吒怍砟揸痄哳齄",chai:"差拆柴钗豺侪虿瘥",ci:"次此差词辞刺瓷磁兹慈茨赐祠伺雌疵鹚糍呲粢",zi:"资自子字齐咨滋仔姿紫兹孜淄籽梓鲻渍姊吱秭恣甾孳訾滓锱辎趑龇赀眦缁呲笫谘嵫髭茈粢觜耔",cuo:"措错磋挫搓撮蹉锉厝嵯痤矬瘥脞鹾",chan:"产单阐崭缠掺禅颤铲蝉搀潺蟾馋忏婵孱觇廛谄谗澶骣羼躔蒇冁",shan:"山单善陕闪衫擅汕扇掺珊禅删膳缮赡鄯栅煽姗跚鳝嬗潸讪舢苫疝掸膻钐剡蟮芟埏彡骟",zhan:"展战占站崭粘湛沾瞻颤詹斩盏辗绽毡栈蘸旃谵搌",xin:"新心信辛欣薪馨鑫芯锌忻莘昕衅歆囟忄镡",lian:"联连练廉炼脸莲恋链帘怜涟敛琏镰濂楝鲢殓潋裢裣臁奁莶蠊蔹",chang:"场长厂常偿昌唱畅倡尝肠敞倘猖娼淌裳徜昶怅嫦菖鲳阊伥苌氅惝鬯",zhang:"长张章障涨掌帐胀彰丈仗漳樟账杖璋嶂仉瘴蟑獐幛鄣嫜",chao:"超朝潮炒钞抄巢吵剿绰嘲晁焯耖怊",zhao:"着照招找召朝赵兆昭肇罩钊沼嘲爪诏濯啁棹笊",zhou:"调州周洲舟骤轴昼宙粥皱肘咒帚胄绉纣妯啁诌繇碡籀酎荮",che:"车彻撤尺扯澈掣坼砗屮",ju:"车局据具举且居剧巨聚渠距句拒俱柜菊拘炬桔惧矩鞠驹锯踞咀瞿枸掬沮莒橘飓疽钜趄踽遽琚龃椐苣裾榘狙倨榉苴讵雎锔窭鞫犋屦醵",cheng:"成程城承称盛抢乘诚呈净惩撑澄秤橙骋逞瞠丞晟铛埕塍蛏柽铖酲裎枨",rong:"容荣融绒溶蓉熔戎榕茸冗嵘肜狨蝾",sheng:"生声升胜盛乘圣剩牲甸省绳笙甥嵊晟渑眚",deng:"等登邓灯澄凳瞪蹬噔磴嶝镫簦戥",zhi:"制之治质职只志至指织支值知识直致执置止植纸拓智殖秩旨址滞氏枝芝脂帜汁肢挚稚酯掷峙炙栉侄芷窒咫吱趾痔蜘郅桎雉祉郦陟痣蛭帙枳踯徵胝栀贽祗豸鸷摭轵卮轾彘觯絷跖埴夂黹忮骘膣踬",zheng:"政正证争整征郑丁症挣蒸睁铮筝拯峥怔诤狰徵钲",tang:"堂唐糖汤塘躺趟倘棠烫淌膛搪镗傥螳溏帑羰樘醣螗耥铴瑭",chi:"持吃池迟赤驰尺斥齿翅匙痴耻炽侈弛叱啻坻眙嗤墀哧茌豉敕笞饬踟蚩柢媸魑篪褫彳鸱螭瘛眵傺",shi:"是时实事市十使世施式势视识师史示石食始士失适试什泽室似诗饰殖释驶氏硕逝湿蚀狮誓拾尸匙仕柿矢峙侍噬嗜栅拭嘘屎恃轼虱耆舐莳铈谥炻豕鲥饣螫酾筮埘弑礻蓍鲺贳",qi:"企其起期气七器汽奇齐启旗棋妻弃揭枝歧欺骑契迄亟漆戚岂稽岐琦栖缉琪泣乞砌祁崎绮祺祈凄淇杞脐麒圻憩芪伎俟畦耆葺沏萋骐鳍綦讫蕲屺颀亓碛柒啐汔綮萁嘁蛴槭欹芑桤丌蜞",chuai:"揣踹啜搋膪",tuo:"托脱拓拖妥驼陀沱鸵驮唾椭坨佗砣跎庹柁橐乇铊沲酡鼍箨柝",duo:"多度夺朵躲铎隋咄堕舵垛惰哆踱跺掇剁柁缍沲裰哚隳",xue:"学血雪削薛穴靴谑噱鳕踅泶彐",chong:"重种充冲涌崇虫宠忡憧舂茺铳艟",chou:"筹抽绸酬愁丑臭仇畴稠瞅踌惆俦瘳雠帱",qiu:"求球秋丘邱仇酋裘龟囚遒鳅虬蚯泅楸湫犰逑巯艽俅蝤赇鼽糗",xiu:"修秀休宿袖绣臭朽锈羞嗅岫溴庥馐咻髹鸺貅",chu:"出处础初助除储畜触楚厨雏矗橱锄滁躇怵绌搐刍蜍黜杵蹰亍樗憷楮",tuan:"团揣湍疃抟彖",zhui:"追坠缀揣椎锥赘惴隹骓缒",chuan:"传川船穿串喘椽舛钏遄氚巛舡",zhuan:"专转传赚砖撰篆馔啭颛",yuan:"元员院原源远愿园援圆缘袁怨渊苑宛冤媛猿垣沅塬垸鸳辕鸢瑗圜爰芫鼋橼螈眢箢掾",cuan:"窜攒篡蹿撺爨汆镩",chuang:"创床窗闯幢疮怆",zhuang:"装状庄壮撞妆幢桩奘僮戆",chui:"吹垂锤炊椎陲槌捶棰",chun:"春纯醇淳唇椿蠢鹑朐莼肫蝽",zhun:"准屯淳谆肫窀",cu:"促趋趣粗簇醋卒蹴猝蹙蔟殂徂",dun:"吨顿盾敦蹲墩囤沌钝炖盹遁趸砘礅",qu:"区去取曲趋渠趣驱屈躯衢娶祛瞿岖龋觑朐蛐癯蛆苣阒诎劬蕖蘧氍黢蠼璩麴鸲磲",xu:"需许续须序徐休蓄畜虚吁绪叙旭邪恤墟栩絮圩婿戌胥嘘浒煦酗诩朐盱蓿溆洫顼勖糈砉醑",chuo:"辍绰戳淖啜龊踔辶",zu:"组族足祖租阻卒俎诅镞菹",ji:"济机其技基记计系期际及集级几给积极己纪即继击既激绩急奇吉季齐疾迹鸡剂辑籍寄挤圾冀亟寂暨脊跻肌稽忌饥祭缉棘矶汲畸姬藉瘠骥羁妓讥稷蓟悸嫉岌叽伎鲫诘楫荠戟箕霁嵇觊麂畿玑笈犄芨唧屐髻戢佶偈笄跽蒺乩咭赍嵴虮掎齑殛鲚剞洎丌墼蕺彐芰哜",cong:"从丛匆聪葱囱琮淙枞骢苁璁",zong:"总从综宗纵踪棕粽鬃偬枞腙",cou:"凑辏腠楱",cui:"衰催崔脆翠萃粹摧璀瘁悴淬啐隹毳榱",wei:"为位委未维卫围违威伟危味微唯谓伪慰尾魏韦胃畏帷喂巍萎蔚纬潍尉渭惟薇苇炜圩娓诿玮崴桅偎逶倭猥囗葳隗痿猬涠嵬韪煨艉隹帏闱洧沩隈鲔軎",cun:"村存寸忖皴",zuo:"作做座左坐昨佐琢撮祚柞唑嘬酢怍笮阼胙",zuan:"钻纂攥缵躜",da:"大达打答搭沓瘩惮嗒哒耷鞑靼褡笪怛妲",dai:"大代带待贷毒戴袋歹呆隶逮岱傣棣怠殆黛甙埭诒绐玳呔迨",tai:"大台太态泰抬胎汰钛苔薹肽跆邰鲐酞骀炱",ta:"他它她拓塔踏塌榻沓漯獭嗒挞蹋趿遢铊鳎溻闼",dan:"但单石担丹胆旦弹蛋淡诞氮郸耽殚惮儋眈疸澹掸膻啖箪聃萏瘅赕",lu:"路六陆录绿露鲁卢炉鹿禄赂芦庐碌麓颅泸卤潞鹭辘虏璐漉噜戮鲈掳橹轳逯渌蓼撸鸬栌氇胪镥簏舻辂垆",tan:"谈探坦摊弹炭坛滩贪叹谭潭碳毯瘫檀痰袒坍覃忐昙郯澹钽锬",ren:"人任认仁忍韧刃纫饪妊荏稔壬仞轫亻衽",jie:"家结解价界接节她届介阶街借杰洁截姐揭捷劫戒皆竭桔诫楷秸睫藉拮芥诘碣嗟颉蚧孑婕疖桀讦疥偈羯袷哜喈卩鲒骱",yan:"研严验演言眼烟沿延盐炎燕岩宴艳颜殷彦掩淹阎衍铅雁咽厌焰堰砚唁焉晏檐蜒奄俨腌妍谚兖筵焱偃闫嫣鄢湮赝胭琰滟阉魇酽郾恹崦芫剡鼹菸餍埏谳讠厣罨",dang:"当党档荡挡宕砀铛裆凼菪谠",tao:"套讨跳陶涛逃桃萄淘掏滔韬叨洮啕绦饕鼗",tiao:"条调挑跳迢眺苕窕笤佻啁粜髫铫祧龆蜩鲦",te:"特忑忒铽慝",de:"的地得德底锝",dei:"得",di:"的地第提低底抵弟迪递帝敌堤蒂缔滴涤翟娣笛棣荻谛狄邸嘀砥坻诋嫡镝碲骶氐柢籴羝睇觌",ti:"体提题弟替梯踢惕剔蹄棣啼屉剃涕锑倜悌逖嚏荑醍绨鹈缇裼",tui:"推退弟腿褪颓蜕忒煺",you:"有由又优游油友右邮尤忧幼犹诱悠幽佑釉柚铀鱿囿酉攸黝莠猷蝣疣呦蚴莸莜铕宥繇卣牖鼬尢蚰侑",dian:"电点店典奠甸碘淀殿垫颠滇癫巅惦掂癜玷佃踮靛钿簟坫阽",tian:"天田添填甜甸恬腆佃舔钿阗忝殄畋栝掭",zhu:"主术住注助属逐宁著筑驻朱珠祝猪诸柱竹铸株瞩嘱贮煮烛苎褚蛛拄铢洙竺蛀渚伫杼侏澍诛茱箸炷躅翥潴邾槠舳橥丶瘃麈疰",nian:"年念酿辗碾廿捻撵拈蔫鲶埝鲇辇黏",diao:"调掉雕吊钓刁貂凋碉鲷叼铫铞",yao:"要么约药邀摇耀腰遥姚窑瑶咬尧钥谣肴夭侥吆疟妖幺杳舀窕窈曜鹞爻繇徭轺铫鳐崾珧",die:"跌叠蝶迭碟爹谍牒耋佚喋堞瓞鲽垤揲蹀",she:"设社摄涉射折舍蛇拾舌奢慑赦赊佘麝歙畲厍猞揲滠",ye:"业也夜叶射野液冶喝页爷耶邪咽椰烨掖拽曳晔谒腋噎揶靥邺铘揲",xie:"些解协写血叶谢械鞋胁斜携懈契卸谐泄蟹邪歇泻屑挟燮榭蝎撷偕亵楔颉缬邂鲑瀣勰榍薤绁渫廨獬躞",zhe:"这者着著浙折哲蔗遮辙辄柘锗褶蜇蛰鹧谪赭摺乇磔螫",ding:"定订顶丁鼎盯钉锭叮仃铤町酊啶碇腚疔玎耵",diu:"丢铥",ting:"听庭停厅廷挺亭艇婷汀铤烃霆町蜓葶梃莛",dong:"动东董冬洞懂冻栋侗咚峒氡恫胴硐垌鸫岽胨",tong:"同通统童痛铜桶桐筒彤侗佟潼捅酮砼瞳恸峒仝嗵僮垌茼",zhong:"中重种众终钟忠仲衷肿踵冢盅蚣忪锺舯螽夂",dou:"都斗读豆抖兜陡逗窦渎蚪痘蔸钭篼",du:"度都独督读毒渡杜堵赌睹肚镀渎笃竺嘟犊妒牍蠹椟黩芏髑",duan:"断段短端锻缎煅椴簖",dui:"对队追敦兑堆碓镦怼憝",rui:"瑞兑锐睿芮蕊蕤蚋枘",yue:"月说约越乐跃兑阅岳粤悦曰钥栎钺樾瀹龠哕刖",tun:"吞屯囤褪豚臀饨暾氽",hui:"会回挥汇惠辉恢徽绘毁慧灰贿卉悔秽溃荟晖彗讳诲珲堕诙蕙晦睢麾烩茴喙桧蛔洄浍虺恚蟪咴隳缋哕",wu:"务物无五武午吴舞伍污乌误亡恶屋晤悟吾雾芜梧勿巫侮坞毋诬呜钨邬捂鹜兀婺妩於戊鹉浯蜈唔骛仵焐芴鋈庑鼯牾怃圬忤痦迕杌寤阢",ya:"亚压雅牙押鸭呀轧涯崖邪芽哑讶鸦娅衙丫蚜碣垭伢氩桠琊揠吖睚痖疋迓岈砑",he:"和合河何核盖贺喝赫荷盒鹤吓呵苛禾菏壑褐涸阂阖劾诃颌嗬貉曷翮纥盍",wo:"我握窝沃卧挝涡斡渥幄蜗喔倭莴龌肟硪",en:"恩摁蒽",n:"嗯唔",er:"而二尔儿耳迩饵洱贰铒珥佴鸸鲕",fa:"发法罚乏伐阀筏砝垡珐",quan:"全权券泉圈拳劝犬铨痊诠荃醛蜷颧绻犭筌鬈悛辁畎",fei:"费非飞肥废菲肺啡沸匪斐蜚妃诽扉翡霏吠绯腓痱芾淝悱狒榧砩鲱篚镄",pei:"配培坏赔佩陪沛裴胚妃霈淠旆帔呸醅辔锫",ping:"平评凭瓶冯屏萍苹乒坪枰娉俜鲆",fo:"佛",hu:"和护许户核湖互乎呼胡戏忽虎沪糊壶葫狐蝴弧瑚浒鹄琥扈唬滹惚祜囫斛笏芴醐猢怙唿戽槲觳煳鹕冱瓠虍岵鹱烀轷",ga:"夹咖嘎尬噶旮伽尕钆尜",ge:"个合各革格歌哥盖隔割阁戈葛鸽搁胳舸疙铬骼蛤咯圪镉颌仡硌嗝鬲膈纥袼搿塥哿虼",ha:"哈蛤铪",xia:"下夏峡厦辖霞夹虾狭吓侠暇遐瞎匣瑕唬呷黠硖罅狎瘕柙",gai:"改该盖概溉钙丐芥赅垓陔戤",hai:"海还害孩亥咳骸骇氦嗨胲醢",gan:"干感赶敢甘肝杆赣乾柑尴竿秆橄矸淦苷擀酐绀泔坩旰疳澉",gang:"港钢刚岗纲冈杠缸扛肛罡戆筻",jiang:"将强江港奖讲降疆蒋姜浆匠酱僵桨绛缰犟豇礓洚茳糨耩",hang:"行航杭巷夯吭桁沆绗颃",gong:"工公共供功红贡攻宫巩龚恭拱躬弓汞蚣珙觥肱廾",hong:"红宏洪轰虹鸿弘哄烘泓訇蕻闳讧荭黉薨",guang:"广光逛潢犷胱咣桄",qiong:"穷琼穹邛茕筇跫蛩銎",gao:"高告搞稿膏糕镐皋羔锆杲郜睾诰藁篙缟槁槔",hao:"好号毫豪耗浩郝皓昊皋蒿壕灏嚎濠蚝貉颢嗥薅嚆",li:"理力利立里李历例离励礼丽黎璃厉厘粒莉梨隶栗荔沥犁漓哩狸藜罹篱鲤砺吏澧俐骊溧砾莅锂笠蠡蛎痢雳俪傈醴栎郦俚枥喱逦娌鹂戾砬唳坜疠蜊黧猁鬲粝蓠呖跞疬缡鲡鳢嫠詈悝苈篥轹",jia:"家加价假佳架甲嘉贾驾嫁夹稼钾挟拮迦伽颊浃枷戛荚痂颉镓笳珈岬胛袈郏葭袷瘕铗跏蛱恝哿",luo:"落罗络洛逻螺锣骆萝裸漯烙摞骡咯箩珞捋荦硌雒椤镙跞瘰泺脶猡倮蠃",ke:"可科克客刻课颗渴壳柯棵呵坷恪苛咳磕珂稞瞌溘轲窠嗑疴蝌岢铪颏髁蚵缂氪骒钶锞",qia:"卡恰洽掐髂袷咭葜",gei:"给",gen:"根跟亘艮哏茛",hen:"很狠恨痕哏",gou:"构购够句沟狗钩拘勾苟垢枸篝佝媾诟岣彀缑笱鞲觏遘",kou:"口扣寇叩抠佝蔻芤眍筘",gu:"股古顾故固鼓骨估谷贾姑孤雇辜菇沽咕呱锢钴箍汩梏痼崮轱鸪牯蛊诂毂鹘菰罟嘏臌觚瞽蛄酤牿鲴",pai:"牌排派拍迫徘湃俳哌蒎",gua:"括挂瓜刮寡卦呱褂剐胍诖鸹栝呙",tou:"投头透偷愉骰亠",guai:"怪拐乖",kuai:"会快块筷脍蒯侩浍郐蒉狯哙",guan:"关管观馆官贯冠惯灌罐莞纶棺斡矜倌鹳鳏盥掼涫",wan:"万完晚湾玩碗顽挽弯蔓丸莞皖宛婉腕蜿惋烷琬畹豌剜纨绾脘菀芄箢",ne:"呢哪呐讷疒",gui:"规贵归轨桂柜圭鬼硅瑰跪龟匮闺诡癸鳜桧皈鲑刽晷傀眭妫炅庋簋刿宄匦",jun:"军均俊君峻菌竣钧骏龟浚隽郡筠皲麇捃",jiong:"窘炯迥炅冂扃",jue:"决绝角觉掘崛诀獗抉爵嚼倔厥蕨攫珏矍蹶谲镢鳜噱桷噘撅橛孓觖劂爝",gun:"滚棍辊衮磙鲧绲丨",hun:"婚混魂浑昏棍珲荤馄诨溷阍",guo:"国过果郭锅裹帼涡椁囗蝈虢聒埚掴猓崞蜾呙馘",hei:"黑嘿嗨",kan:"看刊勘堪坎砍侃嵌槛瞰阚龛戡凵莰",heng:"衡横恒亨哼珩桁蘅",mo:"万没么模末冒莫摩墨默磨摸漠脉膜魔沫陌抹寞蘑摹蓦馍茉嘿谟秣蟆貉嫫镆殁耱嬷麽瘼貊貘",peng:"鹏朋彭膨蓬碰苹棚捧亨烹篷澎抨硼怦砰嘭蟛堋",hou:"后候厚侯猴喉吼逅篌糇骺後鲎瘊堠",hua:"化华划话花画滑哗豁骅桦猾铧砉",huai:"怀坏淮徊槐踝",huan:"还环换欢患缓唤焕幻痪桓寰涣宦垸洹浣豢奂郇圜獾鲩鬟萑逭漶锾缳擐",xun:"讯训迅孙寻询循旬巡汛勋逊熏徇浚殉驯鲟薰荀浔洵峋埙巽郇醺恂荨窨蕈曛獯",huang:"黄荒煌皇凰慌晃潢谎惶簧璜恍幌湟蝗磺隍徨遑肓篁鳇蟥癀",nai:"能乃奶耐奈鼐萘氖柰佴艿",luan:"乱卵滦峦鸾栾銮挛孪脔娈",qie:"切且契窃茄砌锲怯伽惬妾趄挈郄箧慊",jian:"建间件见坚检健监减简艰践兼鉴键渐柬剑尖肩舰荐箭浅剪俭碱茧奸歼拣捡煎贱溅槛涧堑笺谏饯锏缄睑謇蹇腱菅翦戬毽笕犍硷鞯牮枧湔鲣囝裥踺搛缣鹣蒹谫僭戋趼楗",nan:"南难男楠喃囡赧腩囝蝻",qian:"前千钱签潜迁欠纤牵浅遣谦乾铅歉黔谴嵌倩钳茜虔堑钎骞阡掮钤扦芊犍荨仟芡悭缱佥愆褰凵肷岍搴箝慊椠",qiang:"强抢疆墙枪腔锵呛羌蔷襁羟跄樯戕嫱戗炝镪锖蜣",xiang:"向项相想乡象响香降像享箱羊祥湘详橡巷翔襄厢镶飨饷缃骧芗庠鲞葙蟓",jiao:"教交较校角觉叫脚缴胶轿郊焦骄浇椒礁佼蕉娇矫搅绞酵剿嚼饺窖跤蛟侥狡姣皎茭峤铰醮鲛湫徼鹪僬噍艽挢敫",zhuo:"着著缴桌卓捉琢灼浊酌拙茁涿镯淖啄濯焯倬擢斫棹诼浞禚",qiao:"桥乔侨巧悄敲俏壳雀瞧翘窍峭锹撬荞跷樵憔鞘橇峤诮谯愀鞒硗劁缲",xiao:"小效销消校晓笑肖削孝萧俏潇硝宵啸嚣霄淆哮筱逍姣箫骁枭哓绡蛸崤枵魈",si:"司四思斯食私死似丝饲寺肆撕泗伺嗣祀厮驷嘶锶俟巳蛳咝耜笥纟糸鸶缌澌姒汜厶兕",kai:"开凯慨岂楷恺揩锴铠忾垲剀锎蒈",jin:"进金今近仅紧尽津斤禁锦劲晋谨筋巾浸襟靳瑾烬缙钅矜觐堇馑荩噤廑妗槿赆衿卺",qin:"亲勤侵秦钦琴禽芹沁寝擒覃噙矜嗪揿溱芩衾廑锓吣檎螓",jing:"经京精境竞景警竟井惊径静劲敬净镜睛晶颈荆兢靖泾憬鲸茎腈菁胫阱旌粳靓痉箐儆迳婧肼刭弪獍",ying:"应营影英景迎映硬盈赢颖婴鹰荧莹樱瑛蝇萦莺颍膺缨瀛楹罂荥萤鹦滢蓥郢茔嘤璎嬴瘿媵撄潆",jiu:"就究九酒久救旧纠舅灸疚揪咎韭玖臼柩赳鸠鹫厩啾阄桕僦鬏",zui:"最罪嘴醉咀蕞觜",juan:"卷捐圈眷娟倦绢隽镌涓鹃鄄蠲狷锩桊",suan:"算酸蒜狻",yun:"员运云允孕蕴韵酝耘晕匀芸陨纭郧筠恽韫郓氲殒愠昀菀狁",qun:"群裙逡麇",ka:"卡喀咖咔咯佧胩",kang:"康抗扛慷炕亢糠伉钪闶",keng:"坑铿吭",kao:"考靠烤拷铐栲尻犒",ken:"肯垦恳啃龈裉",yin:"因引银印音饮阴隐姻殷淫尹荫吟瘾寅茵圻垠鄞湮蚓氤胤龈窨喑铟洇狺夤廴吲霪茚堙",kong:"空控孔恐倥崆箜",ku:"苦库哭酷裤枯窟挎骷堀绔刳喾",kua:"跨夸垮挎胯侉",kui:"亏奎愧魁馈溃匮葵窥盔逵睽馗聩喟夔篑岿喹揆隗傀暌跬蒉愦悝蝰",kuan:"款宽髋",kuang:"况矿框狂旷眶匡筐邝圹哐贶夼诳诓纩",que:"确却缺雀鹊阙瘸榷炔阕悫",kun:"困昆坤捆琨锟鲲醌髡悃阃",kuo:"扩括阔廓蛞",la:"拉落垃腊啦辣蜡喇剌旯砬邋瘌",lai:"来莱赖睐徕籁涞赉濑癞崃疠铼",lan:"兰览蓝篮栏岚烂滥缆揽澜拦懒榄斓婪阑褴罱啉谰镧漤",lin:"林临邻赁琳磷淋麟霖鳞凛拎遴蔺吝粼嶙躏廪檩啉辚膦瞵懔",lang:"浪朗郎廊狼琅榔螂阆锒莨啷蒗稂",liang:"量两粮良辆亮梁凉谅粱晾靓踉莨椋魉墚",lao:"老劳落络牢捞涝烙姥佬崂唠酪潦痨醪铑铹栳耢",mu:"目模木亩幕母牧莫穆姆墓慕牟牡募睦缪沐暮拇姥钼苜仫毪坶",le:"了乐勒肋叻鳓嘞仂泐",lei:"类累雷勒泪蕾垒磊擂镭肋羸耒儡嫘缧酹嘞诔檑",sui:"随岁虽碎尿隧遂髓穗绥隋邃睢祟濉燧谇眭荽",lie:"列烈劣裂猎冽咧趔洌鬣埒捩躐",leng:"冷愣棱楞塄",ling:"领令另零灵龄陵岭凌玲铃菱棱伶羚苓聆翎泠瓴囹绫呤棂蛉酃鲮柃",lia:"俩",liao:"了料疗辽廖聊寥缪僚燎缭撂撩嘹潦镣寮蓼獠钌尥鹩",liu:"流刘六留柳瘤硫溜碌浏榴琉馏遛鎏骝绺镏旒熘鹨锍",lun:"论轮伦仑纶沦抡囵",lv:"率律旅绿虑履吕铝屡氯缕滤侣驴榈闾偻褛捋膂稆",lou:"楼露漏陋娄搂篓喽镂偻瘘髅耧蝼嵝蒌",mao:"贸毛矛冒貌茂茅帽猫髦锚懋袤牦卯铆耄峁瑁蟊茆蝥旄泖昴瞀",long:"龙隆弄垄笼拢聋陇胧珑窿茏咙砻垅泷栊癃",nong:"农浓弄脓侬哝",shuang:"双爽霜孀泷",shu:"术书数属树输束述署朱熟殊蔬舒疏鼠淑叔暑枢墅俞曙抒竖蜀薯梳戍恕孰沭赎庶漱塾倏澍纾姝菽黍腧秫毹殳疋摅",shuai:"率衰帅摔甩蟀",lve:"略掠锊",ma:"么马吗摩麻码妈玛嘛骂抹蚂唛蟆犸杩",me:"么麽",mai:"买卖麦迈脉埋霾荬劢",man:"满慢曼漫埋蔓瞒蛮鳗馒幔谩螨熳缦镘颟墁鞔",mi:"米密秘迷弥蜜谜觅靡泌眯麋猕谧咪糜宓汨醚嘧弭脒冖幂祢縻蘼芈糸敉",men:"们门闷瞒汶扪焖懑鞔钔",mang:"忙盲茫芒氓莽蟒邙硭漭",meng:"蒙盟梦猛孟萌氓朦锰檬勐懵蟒蜢虻黾蠓艨甍艋瞢礞",miao:"苗秒妙描庙瞄缪渺淼藐缈邈鹋杪眇喵",mou:"某谋牟缪眸哞鍪蛑侔厶",miu:"缪谬",mei:"美没每煤梅媒枚妹眉魅霉昧媚玫酶镁湄寐莓袂楣糜嵋镅浼猸鹛",wen:"文问闻稳温纹吻蚊雯紊瘟汶韫刎璺玟阌",mie:"灭蔑篾乜咩蠛",ming:"明名命鸣铭冥茗溟酩瞑螟暝",na:"内南那纳拿哪娜钠呐捺衲镎肭",nei:"内那哪馁",nuo:"难诺挪娜糯懦傩喏搦锘",ruo:"若弱偌箬",nang:"囊馕囔曩攮",nao:"脑闹恼挠瑙淖孬垴铙桡呶硇猱蛲",ni:"你尼呢泥疑拟逆倪妮腻匿霓溺旎昵坭铌鲵伲怩睨猊",nen:"嫩恁",neng:"能",nin:"您恁",niao:"鸟尿溺袅脲茑嬲",nie:"摄聂捏涅镍孽捻蘖啮蹑嗫臬镊颞乜陧",niang:"娘酿",ning:"宁凝拧泞柠咛狞佞聍甯",nu:"努怒奴弩驽帑孥胬",nv:"女钕衄恧",ru:"入如女乳儒辱汝茹褥孺濡蠕嚅缛溽铷洳薷襦颥蓐",nuan:"暖",nve:"虐疟",re:"热若惹喏",ou:"区欧偶殴呕禺藕讴鸥瓯沤耦怄",pao:"跑炮泡抛刨袍咆疱庖狍匏脬",pou:"剖掊裒",pen:"喷盆湓",pie:"瞥撇苤氕丿",pin:"品贫聘频拼拚颦姘嫔榀牝",se:"色塞瑟涩啬穑铯槭",qing:"情青清请亲轻庆倾顷卿晴氢擎氰罄磬蜻箐鲭綮苘黥圊檠謦",zan:"赞暂攒堑昝簪糌瓒錾趱拶",shao:"少绍召烧稍邵哨韶捎勺梢鞘芍苕劭艄筲杓潲",sao:"扫骚嫂梢缫搔瘙臊埽缲鳋",sha:"沙厦杀纱砂啥莎刹杉傻煞鲨霎嗄痧裟挲铩唼歃",xuan:"县选宣券旋悬轩喧玄绚渲璇炫萱癣漩眩暄煊铉楦泫谖痃碹揎镟儇",ran:"然染燃冉苒髯蚺",rang:"让壤攘嚷瓤穰禳",rao:"绕扰饶娆桡荛",reng:"仍扔",ri:"日",rou:"肉柔揉糅鞣蹂",ruan:"软阮朊",run:"润闰",sa:"萨洒撒飒卅仨脎",suo:"所些索缩锁莎梭琐嗦唆唢娑蓑羧挲桫嗍睃",sai:"思赛塞腮噻鳃",shui:"说水税谁睡氵",sang:"桑丧嗓搡颡磉",sen:"森",seng:"僧",shai:"筛晒",shang:"上商尚伤赏汤裳墒晌垧觞殇熵绱",xing:"行省星腥猩惺兴刑型形邢饧醒幸杏性姓陉荇荥擤悻硎",shou:"收手受首售授守寿瘦兽狩绶艏扌",shuo:"说数硕烁朔铄妁槊蒴搠",su:"速素苏诉缩塑肃俗宿粟溯酥夙愫簌稣僳谡涑蔌嗉觫",shua:"刷耍唰",shuan:"栓拴涮闩",shun:"顺瞬舜吮",song:"送松宋讼颂耸诵嵩淞怂悚崧凇忪竦菘",sou:"艘搜擞嗽嗖叟馊薮飕嗾溲锼螋瞍",sun:"损孙笋荪榫隼狲飧",teng:"腾疼藤滕誊",tie:"铁贴帖餮萜",tu:"土突图途徒涂吐屠兔秃凸荼钍菟堍酴",wai:"外歪崴",wang:"王望往网忘亡旺汪枉妄惘罔辋魍",weng:"翁嗡瓮蓊蕹",zhua:"抓挝爪",yang:"样养央阳洋扬杨羊详氧仰秧痒漾疡泱殃恙鸯徉佯怏炀烊鞅蛘",xiong:"雄兄熊胸凶匈汹芎",yo:"哟唷",yong:"用永拥勇涌泳庸俑踊佣咏雍甬镛臃邕蛹恿慵壅痈鳙墉饔喁",za:"杂扎咱砸咋匝咂拶",zai:"在再灾载栽仔宰哉崽甾",zao:"造早遭枣噪灶燥糟凿躁藻皂澡蚤唣",zei:"贼",zen:"怎谮",zeng:"增曾综赠憎锃甑罾缯",zhei:"这",zou:"走邹奏揍诹驺陬楱鄹鲰",zhuai:"转拽",zun:"尊遵鳟樽撙",dia:"嗲",nou:"耨"}; 
 			}); 
		define("utils/scan.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(e){wx.scanCode({onlyFromCamera:!0,success:function(r){"scanCode:ok"===r.errMsg&&function(e,r){(0,o.default)({url:"/order/qrcode/checkIn/"+e,method:"get"}).then((function(o){o.data&&"200"===o.data.code?(wx.showToast({title:o.data.msg,icon:"success",duration:2e3}),a("success"),n(r,e)):o.data&&"400"===o.data.code&&o.data.msg?t(r,o.data.msg):t(r)}),(function(e){t(r)}))}(r.result,e)},fail:function(o){"scanCode:fail cancel"===o.errMsg||t(e)}})};var o=e(require("./fetch.js"));function t(e,o){wx.showToast({title:"验票失败",icon:"none",duration:2e3}),a("error"),n(e,"",o)}function n(e,o,t){var n="navigateTo";e&&(n="redirectTo"),wx[n]({url:"/pages/scanResult/scanResult?orderNo=".concat(o,"&msg=").concat(t)})}function a(e){var o=wx.createInnerAudioContext();o.src="https://trans.17u.cn/saas/static/sound/"+e+".mp3",o.onPlay((function(){console.log("开始播放")})),o.onError((function(e){console.log(e.errMsg),console.log(e.errCode)})),o.play()} 
 			}); 
		define("utils/ticketAction.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleCheckClick=function(e,r){return(0,t.default)({url:"/order/mobile/checkIn/"+r+"/"+e,method:"post",data:{passengerid:e}}).then((function(e){if(wx.showToast({title:e.data.msg,icon:"none",duration:2e3}),e.data&&"200"===e.data.code)return e}))},exports.handleUnCheckClick=function(e,r){return(0,t.default)({url:"/order/mobile/cancelCheckIn/"+r+"/"+e,method:"post"}).then((function(e){if(wx.showToast({title:e.data.msg,icon:"none",duration:2e3}),e.data&&"200"===e.data.code)return e}))};var t=e(require("./fetch"));e(require("./util.js")),getApp(); 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("./env.js"),t=e.baseUrl+"/cxyopenapi",n=e.baseUrl+"/buspassopenapi",r=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(e){return(e=e.toString())[1]?e:"0"+e};var i=function(e){return new Date(e.replace(/-/g,"/"))};var a=[].slice,u={},s=u.toString;function c(e){return null==e?String(e):u[s.call(e)]||"object"}function l(e){return function(e){return"object"==c(e)}(e)&&Object.getPrototypeOf(e)==Object.prototype}"Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach((function(e,t){u["[object "+e+"]"]=e.toLowerCase()}));var f=Array.isArray||function(e){return e instanceof Array};function g(e){var t,n=a.call(arguments,1);return"boolean"==typeof e&&(t=e,e=n.shift()),n.forEach((function(n){p(e,n,t)})),e}function p(e,t,n){for(var r in t)n&&(l(t[r])||f(t[r]))?(l(t[r])&&!l(e[r])&&(e[r]={}),f(t[r])&&!f(e[r])&&(e[r]=[]),g(n,e[r],t[r])):void 0!==t[r]&&(e[r]=t[r])}module.exports={isString:r,isFun:function(e){return"function"==typeof e},isEmpty:function(e){if(null==e)return!0;if(Array.isArray(e)||r(e))return 0===e.length;for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},formatTime:function(e){var t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate(),i=e.getHours(),a=e.getMinutes(),u=e.getSeconds();return[t,n,r].map(o).join("/")+" "+[i,a,u].map(o).join(":")},urlPrefix:t,trafficCardApi:n,throttle:function(e,t){var n=null;return function(){var r=this,o=arguments;clearTimeout(n),n=setTimeout((function(){e.apply(r,o)}),t)}},tagParams:{1:"city",2:"scenery",3:"home",4:"ride"},orderStatus:{1:"待支付",2:"已取消",6:"已完成",9:"出票成功",10:"出票失败",11:"出票中"},payStatus:{1:"已支付",2:"未支付",3:"申请退款",4:"已退款"},newDate:i,formatDate:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o={"M+":(t="string"==typeof t&&t.indexOf("-")>=0?i(t):t).getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()},a=[["日","一","二","三","四","五","六"],["周日","周一","周二","周三","周四","周五","周六"],["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]],u=new Date,s=new Date(u.getFullYear(),u.getMonth(),u.getDate()),c=new Date(t.getFullYear(),t.getMonth(),t.getDate()),l=(c-s)/864e5;switch(l){case 0:e="今天";break;case 1:e="明天";break;case 2:e="后天";break;default:e=""}for(var f in/(y+)/.test(n)&&(n=n.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),/(w+)/.test(n)&&(n=e&&!r?n.replace(RegExp.$1,e):n.replace(RegExp.$1,a[RegExp.$1.length-1][t.getDay()])),o)new RegExp("("+f+")").test(n)&&(n=n.replace(RegExp.$1,1===RegExp.$1.length?o[f]:("00"+o[f]).substr((""+o[f]).length)));return n},productType:{4:"门到门",5:"点到点",7:"门到点",8:"点到门"},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载中...";wx.showToast({title:e,icon:"loading",mask:!0,duration:1e4})},hideLoading:function(){wx.hideToast()},showToast:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500;wx.showToast({title:e,icon:t,duration:n})},playAudio:function(e){wx.setInnerAudioOption({mixWithOther:!0,obeyMuteSwitch:!1});var t=wx.createInnerAudioContext();t.obeyMuteSwitch=!1,t.autoplay=!0,t.src="订单已退票"===e?"https://file.40017.cn/groundtraffic/linebus/audio/01.mp3":"订单已检票"===e?"https://file.40017.cn/groundtraffic/linebus/audio/02.mp3":"未到检票时间"===e?"https://file.40017.cn/groundtraffic/linebus/audio/03.mp3":"未有检票权限"===e?"https://file.40017.cn/groundtraffic/linebus/audio/04.mp3":"非当前班次"===e?"https://file.40017.cn/groundtraffic/linebus/audio/05.mp3":"码不正确"===e?"https://file.40017.cn/groundtraffic/linebus/audio/09.mp3":"网络不给力"===e?"https://file.40017.cn/groundtraffic/linebus/audio/08.mp3":"https://trans.17u.cn/saas/static/sound/"+e+".mp3",t.onPlay((function(){console.log("开始播放")})),t.onError((function(e){console.log(e.errMsg),console.log(e.errCode)})),t.play()},addTime:function(e,t,n){var r,o=e||new Date;if("string"==typeof o)o=i(o);else if("number"==typeof o)o=new Date(o);else if(!t||t.search(/Y|M|D|H|F|S/g)<0)return;var a=t.split(/Y|M|D|H|F|S/g)[0];switch(t.substr(-1,1)){case"M":r=30*a*24*60*60*1e3;break;case"D":r=24*a*60*60*1e3;break;case"H":r=60*a*60*1e3;break;case"F":r=60*a*1e3;break;case"S":r=1e3*a}return o.setTime(o.getTime()+r),n?format(o,n):o},extend:g,parseDate:function(e){return new Date(Date.parse(e.replace(/-/g,"/")))},isNotEmptyString:function(e){return"string"==typeof e&&""!==e},formatNum:function(e){return e<10||!e[1]?"0"+e:e},ticketReg:/^YC[a-zA-Z0-9]{18}$/}; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("./utils/util.js"),a=require("./utils/calc");App({onLaunch:function(t){if(this.calcNavInfo(),wx.canIUse("getUpdateManager")){var a=wx.getUpdateManager();a.onCheckForUpdate((function(t){t.hasUpdate&&(a.onUpdateReady((function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(t){t.confirm&&a.applyUpdate()}})})),a.onUpdateFailed((function(){wx.showModal({title:"已经有新版本了哟~",content:"新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"})})))}))}else wx.showModal({title:"提示",content:"当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"})},onShow:function(){this.globalData.unionId&&this.globalData.vcode||(wx.showLoading({title:"正在授权"}),this.loginStatus=this.login()),wx.setInnerAudioOption({mixWithOther:!0,obeyMuteSwitch:!1})},globalData:{userInfo:null,id:"",useMode:"",openId:"",unionId:"",vcode:"",userName:"",msgPushSwitch:!1,statusBarHeight:0,navHeight:0},calcNavInfo:function(){var t=this,n=wx.getMenuButtonBoundingClientRect(),e=0,o=0,i=0;try{var s=wx.getSystemInfoSync();e=s.statusBarHeight,o=(0,a.sub)(n.top,e),i=(0,a.add)(n.height,(0,a.mul)(o,2)),this.globalData.navHeight=i,this.globalData.statusBarHeight=e}catch(s){wx.getSystemInfo({success:function(s){e=s.statusBarHeight,o=(0,a.sub)(n.top,e),i=(0,a.add)(n.height,(0,a.mul)(o,2)),t.globalData.navHeight=i,t.globalData.statusBarHeight=e}})}},login:function(){var a=this;return new Promise((function(n,e){wx.login({success:function(e){wx.request({url:t.urlPrefix+"/wechatapi/getxcxunionid?code="+e.code,success:function(t){if(t.data&&"200"===t.data.code){var e=t.data.data;a.globalData.unionId=e.unionId,a.getUserInfo(e.unionId,n)}else wx.hideLoading(),wx.showToast({title:"获取用户信息失败",icon:"none"})},fail:function(t){wx.hideLoading(),wx.showToast({title:"授权失败:"+t,icon:"none"})}})}})}))},getUserInfo:function(a,n){var e=this;wx.request({url:"".concat(t.urlPrefix,"/steward/findStewardInfoByUnionId"),method:"GET",header:{"content-type":"application/json"},data:{unionId:a},success:function(a){wx.hideLoading();var o=a.data;"200"!==o.code||(0,t.isEmpty)(o.data)?wx.showToast({title:"获取用户绑定信息失败",icon:"none"}):(e.globalData.vcode=o.data.vcode,e.globalData.userName=o.data.name,e.globalData.id=o.data.id,e.globalData.useMode=o.data.useMode,e.globalData.msgPushSwitch=o.data.msgPushSwitch,n&&n(o.data))},fail:function(){wx.showToast({title:"获取用户绑定信息失败",icon:"none"})}})},getVcodeByUnionid:function(a,n){var e=this;wx.request({url:t.urlPrefix+"/steward/findVcodeByUnionId",data:{unionId:a},method:"GET",header:{"content-type":"application/json"},success:function(t){wx.hideLoading(),"200"===t.data.code?(e.globalData.vcode=t.data.data,n&&n(t.data)):wx.showToast({title:"获取用户绑定信息失败",icon:"none"})}})}}); 
 			}); 	require("app.js");
 		__wxRoute = 'components/no-result/no-result';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/no-result/no-result.js';	define("components/no-result/no-result.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{},data:{},methods:{}}); 
 			}); 	require("components/no-result/no-result.js");
 		__wxRoute = 'components/noticePop/noticePop';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/noticePop/noticePop.js';	define("components/noticePop/noticePop.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{isShow:{type:Boolean,value:!1},title:{type:String,value:"消息"},content:{type:String,value:""}},methods:{clickClose:function(){this.triggerEvent("inform",{type:"close"})}}}); 
 			}); 	require("components/noticePop/noticePop.js");
 		__wxRoute = 'dist/alert/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'dist/alert/index.js';	define("dist/alert/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({externalClasses:["i-class"],options:{multipleSlots:!0},properties:{type:{type:String,value:"info"},closable:{type:Boolean,value:!1},showIcon:{type:Boolean,default:!1},desc:{type:Boolean,default:!1}},data:{closed:!1},methods:{handleTap:function(){this.setData({closed:!this.data.closed}),this.triggerEvent("close")}}}); 
 			}); 	require("dist/alert/index.js");
 		__wxRoute = 'dist/badge/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'dist/badge/index.js';	define("dist/badge/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({externalClasses:["i-class","i-class-alone"],properties:{count:{type:Number,value:0,observer:"finalCount"},overflowCount:{type:Number,value:99},dot:{type:Boolean,value:!1}},data:{finalCount:0},methods:{finalCount:function(){this.setData({finalCount:parseInt(this.data.count)>=parseInt(this.data.overflowCount)?"".concat(this.data.overflowCount,"+"):this.data.count})}}}); 
 			}); 	require("dist/badge/index.js");
 		__wxRoute = 'dist/card/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'dist/card/index.js';	define("dist/card/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({externalClasses:["i-class"],options:{multipleSlots:!0},properties:{full:{type:Boolean,value:!1},thumb:{type:String,value:""},title:{type:String,value:""},extra:{type:String,value:""},showHeader:{type:Boolean,value:!0}}}); 
 			}); 	require("dist/card/index.js");
 		__wxRoute = 'dist/cell-group/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'dist/cell-group/index.js';	define("dist/cell-group/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({externalClasses:["i-class"],relations:{"../cell/index":{type:"child",linked:function(){this._updateIsLastCell()},linkChanged:function(){this._updateIsLastCell()},unlinked:function(){this._updateIsLastCell()}}},methods:{_updateIsLastCell:function(){var e=this.getRelationNodes("../cell/index"),t=e.length;if(t>0){var l=t-1;e.forEach((function(e,t){e.updateIsLastCell(t===l)}))}}}}); 
 			}); 	require("dist/cell-group/index.js");
 		__wxRoute = 'dist/cell/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'dist/cell/index.js';	define("dist/cell/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/typeof"),e=function(t,e){console.warn(t),console.log("接受到的值为：",e)};Component({externalClasses:["i-class"],options:{multipleSlots:!0},relations:{"../cell-group/index":{type:"parent"}},properties:{title:{type:String},label:{type:String},value:{type:String},onlyTapFooter:{type:Boolean},isLink:{type:null,value:""},linkType:{type:String,value:"navigateTo"},url:{type:String,value:""}},data:{isLastCell:!0},methods:{navigateTo:function(){var a=this.data.url,i=t(this.data.isLink);this.triggerEvent("click",{}),this.data.isLink&&a&&"true"!==a&&"false"!==a&&("boolean"===i||"string"===i?-1!==["navigateTo","redirectTo","switchTab","reLaunch"].indexOf(this.data.linkType)?wx[this.data.linkType].call(wx,{url:a}):e("linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch",this.data.linkType):e("isLink 属性值必须是一个字符串或布尔值",this.data.isLink))},handleTap:function(){this.data.onlyTapFooter||this.navigateTo()},updateIsLastCell:function(t){this.setData({isLastCell:t})}}}); 
 			}); 	require("dist/cell/index.js");
 		__wxRoute = 'dist/icon/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'dist/icon/index.js';	define("dist/icon/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({externalClasses:["i-class"],properties:{type:{type:String,value:""},custom:{type:String,value:""},size:{type:Number,value:14},color:{type:String,value:""}}}); 
 			}); 	require("dist/icon/index.js");
 		__wxRoute = 'dist/index-item/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'dist/index-item/index.js';	define("dist/index-item/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({externalClasses:["i-class"],properties:{name:{type:String,value:""}},relations:{"../index/index":{type:"parent"}},data:{top:0,height:0,currentName:""},methods:{updateDataChange:function(){var e=this;wx.createSelectorQuery().in(this).select(".i-index-item").boundingClientRect((function(t){e.setData({top:t.top,height:t.height,currentName:e.data.name})})).exec()}}}); 
 			}); 	require("dist/index-item/index.js");
 		__wxRoute = 'dist/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'dist/index/index.js';	define("dist/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({externalClasses:["i-class"],properties:{height:{type:String,value:"300"},itemHeight:{type:Number,value:18}},relations:{"../index-item/index":{type:"child",linked:function(){this._updateDataChange()},linkChanged:function(){this._updateDataChange()},unlinked:function(){this._updateDataChange()}}},data:{scrollTop:0,fixedData:[],current:0,timer:null,startTop:0,itemLength:0,currentName:"",isTouches:!1},methods:{loop:function(){},_updateDataChange:function(){var t=this,e=this.getRelationNodes("../index-item/index"),a=e.length,i=this.data.fixedData;a>0&&(this.data.timer&&(clearTimeout(this.data.timer),this.setData({timer:null})),this.data.timer=setTimeout((function(){var a=[];e.forEach((function(t){t.data.name&&-1===i.indexOf(t.data.name)&&(a.push(t.data.name),t.updateDataChange())})),t.setData({fixedData:a,itemLength:e.length}),t.setTouchStartVal()}),0),this.setData({timer:this.data.timer}))},handlerScroll:function(t){var e=this,a=t.detail.scrollTop;this.getRelationNodes("../index-item/index").forEach((function(t,i){var n=t.data,r=n.top+n.height;a<r&&a>=n.top&&e.setData({current:i,currentName:n.currentName})}))},getCurrentItem:function(t){var e=this.getRelationNodes("../index-item/index"),a={};return(a=e[t].data).total=e.length,a},triggerCallback:function(t){this.triggerEvent("change",t)},handlerFixedTap:function(t){var e=t.currentTarget.dataset.index,a=this.getCurrentItem(e);this.setData({scrollTop:a.top,currentName:a.currentName,isTouches:!0}),this.triggerCallback({index:e,current:a.currentName})},handlerTouchMove:function(t){var e=this.data,a=(t.touches[0]||{}).pageY-e.startTop,i=Math.ceil(a/e.itemHeight);i=(i=i>=e.itemLength?e.itemLength-1:i)>0?i-1:i;var n=this.getCurrentItem(i);n.name!==this.data.currentName&&wx.vibrateShort(),this.setData({scrollTop:n.top-70,currentName:n.name,isTouches:!0}),this.triggerCallback({index:i,current:n.name})},handlerTouchEnd:function(){this.setData({isTouches:!1})},setTouchStartVal:function(){var t=this;wx.createSelectorQuery().in(this).select(".i-index-fixed").boundingClientRect((function(e){t.setData({startTop:e.top})})).exec()}}}); 
 			}); 	require("dist/index/index.js");
 		__wxRoute = 'dist/input/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'dist/input/index.js';	define("dist/input/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({behaviors:["wx://form-field"],externalClasses:["i-class"],properties:{title:{type:String},type:{type:String,value:"text"},disabled:{type:Boolean,value:!1},placeholder:{type:String,value:""},autofocus:{type:Boolean,value:!1},mode:{type:String,value:"normal"},right:{type:Boolean,value:!1},error:{type:Boolean,value:!1},maxlength:{type:Number,value:-1}},methods:{handleInputChange:function(e){var t=e.detail,a=(void 0===t?{}:t).value,l=void 0===a?"":a;this.setData({value:l}),this.triggerEvent("change",e)},handleInputFocus:function(e){this.triggerEvent("focus",e)},handleInputBlur:function(e){this.triggerEvent("blur",e)}}}); 
 			}); 	require("dist/input/index.js");
 		__wxRoute = 'dist/load-more/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'dist/load-more/index.js';	define("dist/load-more/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({externalClasses:["i-class"],properties:{loading:{type:Boolean,value:!0},tip:{type:String,value:""}}}); 
 			}); 	require("dist/load-more/index.js");
 		__wxRoute = 'dist/tab/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'dist/tab/index.js';	define("dist/tab/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({externalClasses:["i-class"],relations:{"../tabs/index":{type:"parent"}},properties:{key:{type:String,value:""},title:{type:String,value:""},dot:{type:Boolean,value:!1},count:{type:Number,value:0}},data:{current:!1,currentColor:"",scroll:!1},methods:{changeCurrent:function(t){this.setData({current:t})},changeCurrentColor:function(t){this.setData({currentColor:t})},changeScroll:function(t){this.setData({scroll:t})},handleClickItem:function(){this.getRelationNodes("../tabs/index")[0].emitEvent(this.data.key)}}}); 
 			}); 	require("dist/tab/index.js");
 		__wxRoute = 'dist/tabs/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'dist/tabs/index.js';	define("dist/tabs/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({externalClasses:["i-class"],relations:{"../tab/index":{type:"child",linked:function(){this.changeCurrent()},linkChanged:function(){this.changeCurrent()},unlinked:function(){this.changeCurrent()}}},properties:{current:{type:String,value:"",observer:"changeCurrent"},color:{type:String,value:""},scroll:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1}},methods:{changeCurrent:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.data.current,t=this.getRelationNodes("../tab/index"),r=t.length;r>0&&t.forEach((function(t){t.changeScroll(e.data.scroll),t.changeCurrent(t.data.key===n),t.changeCurrentColor(e.data.color)}))},emitEvent:function(e){this.triggerEvent("change",{key:e})}}}); 
 			}); 	require("dist/tabs/index.js");
 		__wxRoute = 'pages/planControl/components/calendars/calendars';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/planControl/components/calendars/calendars.js';	define("pages/planControl/components/calendars/calendars.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();Component({properties:{calChangeDate:{type:Boolean,value:!0},showRunning:{type:Boolean,value:!1},sixDayArrs:{type:Array},showbg:{type:Boolean,value:!0}},data:{daysList:[],scrollLeft:0,defaultWidth:60,select:0,startdate:"",enddate:"",querydate:""},methods:{togCalendar:function(t){this.triggerEvent("toggleCalendar")},changeDate:function(t){if(this.data.calChangeDate){this.setData({calChangeDate:!1});var e=t.currentTarget.dataset,a=e.index,s=0,i=e.date;this.data.querydate=new Date(i.split("-").join("/")).getTime(),s=a>2?(a-2)*this.data.defaultWidth:0,this.setData({select:a,scrollLeft:s}),this.initDayList();var r={detail:e};this.triggerEvent("sixDateSel",r)}},initDayList:function(){var t=this.data.querydate,e=new Date(this.format(new Date(Number(this.data.startdate)),"yyyy/MM/dd")).getTime(),a=new Date(this.data.enddate.split("-").join("/")).getTime(),s=t-e,i=a-t,r=864e5,n=[],l=0,d=0;if(s<=6048e5){for(var h=0;h<1296e6;h-=-r){var o=e- -h;h==s&&(l=h/r,this.data.select=l);var y=this.format(Number(o),"yyyy-MM-dd ww"),g={week:o==e?"今天":y.split(" ")[1],date:y.split(" ")[0],showDay:y.split(" ")[0].substring(5)};n.push(g)}d=l>2?(l-2)*this.data.defaultWidth:0}else if(i<=6048e5){for(h=0;h<1296e6;h-=-r){o=a- -h-1296e6- -r;h==i&&(l=(1296e6-h-r)/r,this.data.select=l);g={week:(y=this.format(Number(o),"yyyy-MM-dd ww")).split(" ")[1],date:y.split(" ")[0],showDay:y.split(" ")[0].substring(5)};n.push(g)}d=l>2?(l-2)*this.data.defaultWidth:0}else{l=7,this.data.select=l,d=(l-2)*this.data.defaultWidth;for(h=0;h<6048e5;h-=-r){o=t-6048e5- -h,g={week:(y=this.format(Number(o),"yyyy-MM-dd ww")).split(" ")[1],date:y.split(" ")[0],showDay:y.split(" ")[0].substring(5)};n.push(g)}var p=this.format(Number(t),"yyyy-MM-dd ww");n.push({week:p.split(" ")[1],date:p.split(" ")[0],showDay:p.split(" ")[0].substring(5)});for(h=r;h<=6048e5;h-=-r){o=t- -h,g={week:(y=this.format(o,"yyyy-MM-dd ww")).split(" ")[1],date:y.split(" ")[0],showDay:y.split(" ")[0].substring(5)};n.push(g)}}this.setData({daysList:n,select:l,scrollLeft:d})},init:function(){console.log("init calendar"),this.initDayList()},format:function(t,e){var a={"M+":(t="string"==typeof t?this.parseDate(t):new Date(t)).getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var s in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),/(w+)/.test(e)&&(e=e.replace(RegExp.$1,[["日","一","二","三","四","五","六"],["周日","周一","周二","周三","周四","周五","周六"],["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]][RegExp.$1.length-1][t.getDay()])),a)new RegExp("("+s+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?a[s]:("00"+a[s]).substr((""+a[s]).length)));return e},getDateOnly:function(t){return t=this.format(t,"yyyy/MM/dd"),new Date(Date.parse(t))},parseDate:function(t){return new Date(Date.parse(t.replace(/-/g,"/")))}},ready:function(){}}); 
 			}); 	require("pages/planControl/components/calendars/calendars.js");
 		__wxRoute = 'pages/planControl/components/selectdown/selectdown';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/planControl/components/selectdown/selectdown.js';	define("pages/planControl/components/selectdown/selectdown.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../@babel/runtime/helpers/objectSpread2");Component({properties:{endCityList:{type:Array,value:[]},startCityList:{type:Array,value:[]},endStationList:{type:Array,value:[]},startStationList:{type:Array,value:[]},clearFilter:{type:Boolean,value:!1}},data:{filterObj:{type:"",dptIndex:0,desIndex:0,startCityIndex:0,endCityIndex:0}},methods:{clickFilter:function(t){this.data.clearFilter&&this.setData({"filterObj.dptIndex":0});var e=t.currentTarget.dataset.tag;this.data.filterObj.type===e?this.setData({"filterObj.type":""}):this.setData({"filterObj.type":e})},clickFilterMask:function(t){"mask"===t.target.dataset.tag&&this.setData({"filterObj.type":""})},selectStatus:function(t){var e=t.currentTarget.dataset.index;console.log(t.currentTarget.dataset),e!==this.data.filterObj.dptIndex&&(this.setData({"filterObj.dptIndex":e}),this.triggerEvent("filterDpt",{stationId:e})),this.setData({"filterObj.type":""})},selectStation:function(t){var e=t.currentTarget.dataset.index;e!==this.data.filterObj.desIndex&&(this.setData({"filterObj.desIndex":e}),this.triggerEvent("filterDes",{stationId:e})),this.setData({"filterObj.type":""})},selectStartCity:function(e){var a=e.currentTarget.dataset.index,i=this.data.startCityList;a!==this.data.filterObj.startCityIndex&&(this.setData({"filterObj.startCityIndex":i[a].cityId}),this.triggerEvent("filterStartCity",{cityItem:t(t({},i[a]),{},{index:a})})),this.setData({"filterObj.type":""})},selectEndCity:function(e){var a=e.currentTarget.dataset.index,i=this.data.endCityList;a!==this.data.filterObj.endCityIndex&&(this.setData({"filterObj.endCityIndex":i[a].cityId}),this.triggerEvent("filterEndCity",{cityItem:t(t({},i[a]),{},{index:a})})),this.setData({"filterObj.type":""})}}}); 
 			}); 	require("pages/planControl/components/selectdown/selectdown.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/index.js';	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var t=require("../../utils/util.js"),e=require("../../utils/api.js"),a=getApp();Page({data:{name:"",upDate:"",btDate:"",vcode:"",stewardId:"",useMode:0,headInfo:{},noticeDot:!1,noticePop:{isShow:!1,content:""},statisticsIsLoading:!1,driverMode:{totalCount:0,totalCheckedCount:0,totalPendingCount:0,selfCheckedCount:0,authority:{checkTicket:!1,checkOrder:!1,schedule:!1}},dispatchMode:{totalOrderCount:0,totalTicketCount:0},shiftOrderListLength:0,isShowA:!1,isShowB:!1,isShowC:!1,isShowD:!1},onLoad:function(){},onShow:function(){var t=this;this.data.vcode?(this.getStatistics(),0===this.data.useMode&&(this.getLatestUnreadNotice(),this.getShiftOrderList())):a.loginStatus.then((function(e){var c=e.id,o=e.useMode,i=e.vcode,s=e.name,n=e.operationAuthority,r=e.miniOperationAuthority,d=!!(n&&n.indexOf("1")>=0),u=!!(n&&n.indexOf("2")>=0),h=!!(n&&n.indexOf("3")>=0),l=!!(n&&n.indexOf("4")>=0);if(t.setData({isShowA:d,isShowB:u,isShowC:h,isShowD:l,vcode:i,stewardId:c,useMode:o,name:s,headInfo:{cookie:"unionId=".concat(a.globalData.unionId)}}),t.getStatistics(),0===t.data.useMode){t.getLatestUnreadNotice(),t.getShiftOrderList();var g=r?r.split(","):[],f=!1,p=!1,k=!1,m=!1;g.length&&(f=g.includes("1"),p=g.includes("2"),k=g.includes("3"),m=g.includes("4")),t.setData({"driverMode.authority":{checkTicket:f,checkOrder:p,schedule:k,myBill:m}})}})),this.getCurrentTimestamp()},getCurrentTimestamp:function(){var e=this;wx.request({url:"".concat(t.urlPrefix,"/home/getCurrentTimestamp"),method:"GET",header:this.data.headInfo,data:{},success:function(a){var c=a.data;if("200"!==c.code||(0,t.isEmpty)(c.data)){var o=new Date,i=(0,t.formatDate)(o,"MM月dd日"),s=(0,t.formatDate)(o,"www",!0);e.setData({upDate:i,btDate:s})}else{var n=new Date(c.data),r=(0,t.formatDate)(n,"MM月dd日"),d=(0,t.formatDate)(n,"www",!0);e.setData({upDate:r,btDate:d})}},fail:function(){var a=new Date,c=(0,t.formatDate)(a,"MM月dd日"),o=(0,t.formatDate)(a,"www",!0);e.setData({upDate:c,btDate:o})}})},getStatistics:function(){var a=this,c=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.data.statisticsIsLoading)return!1;this.setData({statisticsIsLoading:!0});var o=0,i=0,s=0,n=0,r=0,d=0;wx.request({url:e.api[this.data.useMode].statistics,method:"POST",header:this.data.headInfo,data:{},success:function(e){var c=e.data;if("200"===c.code&&!(0,t.isEmpty)(c.data)){var u=a.data.useMode;0===u?(o=c.data.totalCount,i=c.data.totalCheckedCount,s=c.data.totalPendingCount,n=c.data.selfCheckedCount):1===u&&(r=c.data.totalOrderCount,d=c.data.totalTicketCount)}},complete:function(){c&&wx.showToast({title:"刷新完成",icon:"none"}),a.setData({statisticsIsLoading:!1,"driverMode.totalCount":o,"driverMode.totalCheckedCount":i,"driverMode.totalPendingCount":s,"driverMode.selfCheckedCount":n,"dispatchMode.totalOrderCount":r,"dispatchMode.totalTicketCount":d})}})},refreshStatistics:function(){this.getStatistics(!0)},getLatestUnreadNotice:function(){var e=this;wx.request({url:"".concat(t.urlPrefix,"/driver/notice/getLatestUnreadNotice"),method:"POST",header:this.data.headInfo,data:{vcode:this.data.vcode,stewardId:this.data.stewardId},success:function(a){var c=a.data;if("200"!==c.code||(0,t.isEmpty)(c.data))e.setData({noticeDot:!1,"noticePop.isShow":!1,"noticePop.content":""});else{var o=c.data,i=o.driverNoticeId,s=o.content;e.setData({noticeDot:!0,"noticePop.isShow":!0,"noticePop.content":s}),e.syncNoticePop(i)}},fail:function(){e.setData({noticeDot:!1,"noticePop.isShow":!1,"noticePop.content":""})}})},syncNoticePop:function(e){wx.request({url:"".concat(t.urlPrefix,"/driver/notice/syncPopUp"),method:"POST",header:this.data.headInfo,data:{vcode:this.data.vcode,driverNoticeId:e,stewardId:this.data.stewardId},success:function(){}})},getShiftOrderList:function(){var e=this,a=0;wx.request({url:"".concat(t.urlPrefix,"/order/mobile/shiftOrderList/").concat(this.data.vcode),method:"GET",header:this.data.headInfo,data:{pageSize:999,page:1,shiftScheduleNos:"",orderStatus:1,sortKey:"start_time",sortOrder:"asc",query:"",startStationId:"",orderType:1},success:function(e){var c=e.data;"200"!==c.code||(0,t.isEmpty)(c.data)||(a=c.data.list.length)},complete:function(){e.setData({shiftOrderListLength:a})}})},jumpNoticeListPage:function(){wx.navigateTo({url:"/pages/noticeList/noticeList"})},jumpJHGL:function(){wx.navigateTo({url:"/pages/planControl/planControl"})},receiveNoticePopInform:function(t){"close"===t.detail.type&&this.setData({"noticePop.isShow":!1,"noticePop.content":""})},jumpShiftListPage:function(){wx.navigateTo({url:"/pages/shiftList/shiftList"})},jumpJianShiftListPage:function(){wx.navigateTo({url:"/pages/shiftJianList/shiftList"})},jumpFocusShiftListPage:function(){wx.navigateTo({url:"/pages/shiftList/shiftList?focuspage=1"})},jumpShiftOrderListPage:function(){wx.navigateTo({url:"/pages/shiftOrderList/shiftOrderList"})},jumpDispatchOrderListPage:function(){wx.navigateTo({url:"/pages/dispatchOrderList/dispatchOrderList"})},scanCheckTicket:function(){var e=this;wx.scanCode({onlyFromCamera:!0,success:function(t){"scanCode:ok"===t.errMsg&&e.prepareCheck(t.result)},fail:function(e){"scanCode:fail cancel"!==e.errMsg&&((0,t.playAudio)("error"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?msg=fail"}))}})},goSchedule:function(){wx.navigateTo({url:"/pages/mySchedule/mySchedule"})},goMyBill:function(){wx.navigateTo({url:"/pages/myBill/myBill"})},prepareCheck:function(e){var a=this;e&&(t.ticketReg.test(e)?wx.request({url:"".concat(t.urlPrefix,"/order/order/checkin/prepare/").concat(e),method:"POST",header:this.data.headInfo,success:function(t){var c=t.data;"200"===c.code?a.checkTicket(e):"201"===c.code&&wx.showModal({title:"提示",content:c.msg,confirmText:"确定",confirmColor:"#508cee",success:function(t){t.confirm&&a.checkTicket(e)}})},fail:function(){(0,t.playAudio)("网络不给力"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(e,"&msg=网络不给力")})}}):this.vehicleCardCheck(e))},vehicleCardCheck:function(e){wx.showLoading();var c=0===this.data.useMode?1:2;wx.request({url:"".concat(t.trafficCardApi,"/orderinfoapi/checkOrder"),method:"POST",header:this.data.headInfo,data:{cardNo:e,checkType:c,unionId:a.globalData.unionId},success:function(a){var c=a.data;"200"===c.code?c.data?(wx.setStorageSync("cardCheckedOrderList",JSON.stringify(c.data)),(0,t.playAudio)("success"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(e,"&msg=success&type=card")})):((0,t.playAudio)("暂无订单"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?msg=暂无订单"})):"422"===c.code?((0,t.playAudio)("码不正确"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?msg=码不正确"})):((0,t.playAudio)("error"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?msg=".concat(c.msg,"&code=").concat(c.code)}))},fail:function(){(0,t.playAudio)("网络不给力"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?msg=网络不给力"})},complete:function(){wx.hideLoading()}})},checkTicket:function(e){var a="";a=1===this.data.useMode?"".concat(t.urlPrefix,"/order/acquirer/qrcode/checkIn/").concat(e):"".concat(t.urlPrefix,"/order/qrcode/checkIn/").concat(e),wx.request({url:a,method:"GET",header:this.data.headInfo,success:function(a){var c=a.data;"200"===c.code?((0,t.playAudio)("success"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(e,"&msg=success")})):"400"===c.code?"订单已退票"===c.msg?((0,t.playAudio)("订单已退票"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(e,"&msg=").concat(c.msg,"&code=").concat(c.code)})):"订单已检票"===c.msg?((0,t.playAudio)("订单已检票"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(e,"&msg=").concat(c.msg,"&code=").concat(c.code)})):"未到检票时间"===c.msg?((0,t.playAudio)("未到检票时间"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(e,"&msg=").concat(c.msg,"&code=").concat(c.code)})):"未有检票权限"===c.msg?((0,t.playAudio)("未有检票权限"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(e,"&msg=").concat(c.msg,"&code=").concat(c.code)})):"非当前班次"===c.msg&&((0,t.playAudio)("非当前班次"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(e,"&msg=").concat(c.msg,"&code=").concat(c.code)})):((0,t.playAudio)("error"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(e,"&msg=").concat(c.msg,"&code=").concat(c.code)}))},fail:function(){(0,t.playAudio)("网络不给力"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(e,"&msg=网络不给力")})}})}}); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/my/my';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/my/my.js';	define("pages/my/my.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../utils/util.js"),a=getApp();Page({data:{useMode:0,userName:"",userInfo:{avatarUrl:"https://file.40017.cn/groundtraffic/linecity/business/my-default-head-icon.png",nickName:""}},onLoad:function(){},onShow:function(){var t=this,n=wx.getStorageSync("wxuserinfo");if(!(0,e.isEmpty)(n)){var s=n.userInfo;this.setData({"userInfo.avatarUrl":s.avatarUrl,"userInfo.nickName":s.nickName})}a.loginStatus.then((function(e){var n=e.useMode;t.setData({useMode:n,userName:a.globalData.userName})}))},getUserInfo:function(a){var t=a.detail;if(!(0,e.isEmpty)(t.userInfo)){wx.setStorageSync("wxuserinfo",t);var n=t.userInfo;this.setData({"userInfo.avatarUrl":n.avatarUrl,"userInfo.nickName":n.nickName})}},getUserProfile:function(){var a=this;wx.getUserProfile({desc:"展示个人信息",success:function(t){var n=t.userInfo;(0,e.isEmpty)(n)||(wx.setStorageSync("wxuserinfo",t),a.setData({"userInfo.avatarUrl":n.avatarUrl,"userInfo.nickName":n.nickName}))},fail:function(e){console.log(e),wx.showToast({title:"获取失败",icon:"error",duration:1e3})}})},jumpSettingPage:function(){wx.navigateTo({url:"/pages/setting/setting"})},jumpFocusPage:function(){wx.navigateTo({url:"/pages/focusShiftList/focusShiftList"})}}); 
 			}); 	require("pages/my/my.js");
 		__wxRoute = 'pages/noticeList/noticeList';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/noticeList/noticeList.js';	define("pages/noticeList/noticeList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/objectSpread2"),e=require("../../utils/util.js"),i=getApp();Page({data:{vcode:"",stewardId:"",headInfo:{},noticeList:[],noticePop:{isShow:!1,content:""}},onLoad:function(){var t=this;i.loginStatus.then((function(e){var o=e.id,a=e.vcode;t.setData({vcode:a,stewardId:o,headInfo:{cookie:"unionId=".concat(i.globalData.unionId)}}),t.getNoticeList()}))},onShow:function(){},getNoticeList:function(){var i=this,o=[];wx.request({url:"".concat(e.urlPrefix,"/driver/notice/getNoticeList"),method:"POST",header:this.data.headInfo,data:{vcode:this.data.vcode,stewardId:this.data.stewardId},success:function(i){var a=i.data;"200"!==a.code||(0,e.isEmpty)(a.data)||(o=a.data.map((function(i){return t(t({},i),{},{formatCreateTime:(0,e.formatDate)(i.createTime,"MM-dd hh:mm")})})))},complete:function(){i.setData({noticeList:[].concat(o)})}})},clickNotice:function(t){if(!(0,e.isEmpty)(t)&&!(0,e.isEmpty)(t.currentTarget)){var i=t.currentTarget.dataset.index,o=this.data.noticeList[i];this.setData({"noticePop.isShow":!0,"noticePop.content":o.content}),0===o.noticeStatus&&1===o.noticeConfigStatus&&this.syncNoticePop(o.driverNoticeId)}},syncNoticePop:function(t){var i=this;wx.request({url:"".concat(e.urlPrefix,"/driver/notice/syncPopUp"),method:"POST",header:this.data.headInfo,data:{vcode:this.data.vcode,driverNoticeId:t,stewardId:this.data.stewardId},success:function(t){"200"===t.data.code&&i.getNoticeList()}})},receiveNoticePopInform:function(t){"close"===t.detail.type&&this.setData({"noticePop.isShow":!1})}}); 
 			}); 	require("pages/noticeList/noticeList.js");
 		__wxRoute = 'pages/shiftList/shiftList';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/shiftList/shiftList.js';	define("pages/shiftList/shiftList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/objectSpread2"),e=require("../../@babel/runtime/helpers/defineProperty"),a=require("../../utils/util.js"),c=getApp(),i={1:"waitObj",2:"checkedObj"};Page({data:{vcode:"",headInfo:{},tabType:1,isShowNotice:!1,waitObj:{isLoading:!1,page:1,list:[]},checkedObj:{isLoading:!1,page:1,list:[]},isPullDown:!1,filterObj:{type:"",dptstationIndex:0,arrstationIndex:0},dptStationList:[{id:"",name:"出发站点"}],arrStationList:[{id:"",name:"到达站点"}],isFocusPage:!1},onLoad:function(t){var e=this;"1"===t.focuspage&&(this.data.isFocusPage=!0,wx.setNavigationBarTitle({title:"关注班次"})),c.loginStatus.then((function(t){var a=t.vcode,i="1"!==wx.getStorageSync("shift-page-show-refresh-notice");e.setData({vcode:a,headInfo:{cookie:"unionId=".concat(c.globalData.unionId)},isShowNotice:i}),e.queryShiftList(),e.getStationList()}))},onShow:function(){},onPullDownRefresh:function(){this.setData({isPullDown:!0}),this.queryShiftList()},onReachBottom:function(){var t=i[this.data.tabType],e=this.data[t].page;this.queryShiftList(e+1)},switchTab:function(t){var e=t.currentTarget.dataset.type;if(e!==this.data.tabType){this.setData({tabType:e});this.data.tabType;this.queryShiftList()}},getStationList:function(){var t=this,e=[],c=[],i="".concat(a.urlPrefix,"/order/mobile/shiftList/startStations/").concat(this.data.vcode),o="".concat(a.urlPrefix,"/order/mobile/shiftList/endStations/").concat(this.data.vcode);this.data.isFocusPage&&(i="".concat(a.urlPrefix,"/order/mobile/focusShiftStartStations/").concat(this.data.vcode),o="".concat(a.urlPrefix,"/order/mobile/focusShiftEndStations/").concat(this.data.vcode)),wx.request({url:i,method:"GET",header:this.data.headInfo,data:{},success:function(t){var c=t.data;"200"!==c.code||(0,a.isEmpty)(c.data)||c.data.forEach((function(t){(0,a.isEmpty)(t)||e.push({id:t.stationId,name:t.stationName})}))},complete:function(){t.setData({dptStationList:[{id:"",name:"全部站点"}].concat(e)})}}),wx.request({url:o,method:"GET",header:this.data.headInfo,data:{},success:function(t){var e=t.data;"200"!==e.code||(0,a.isEmpty)(e.data)||e.data.forEach((function(t){(0,a.isEmpty)(t)||c.push({id:t.stationId,name:t.stationName})}))},complete:function(){t.setData({arrStationList:[{id:"",name:"全部站点"}].concat(c)})}})},queryShiftList:function(){var c=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;(0,a.loading)();var s=i[this.data.tabType];this.setData(e({},"".concat(s,".isLoading"),!0));var n=[],r="".concat(a.urlPrefix,"/order/mobile/shiftScheduleList/").concat(this.data.vcode);this.data.isFocusPage&&(r="".concat(a.urlPrefix,"/order/mobile/focusShiftScheduleList/").concat(this.data.vcode)),wx.request({url:r,method:"GET",header:this.data.headInfo,data:{pageSize:20,page:o,tabType:this.data.tabType,startStationId:this.data.dptStationList[this.data.filterObj.dptstationIndex].id,endStationId:this.data.arrStationList[this.data.filterObj.arrstationIndex].id},success:function(e){var c=e.data;"200"!==c.code||(0,a.isEmpty)(c.data)||(0,a.isEmpty)(c.data.list)||(n=c.data.list.map((function(e){return t(t({},e),{},{formatStartDay:(0,a.formatDate)(e.startDay,"MM-dd")})})))},complete:function(){1===o?c.setData(e({},"".concat(s,".list"),[].concat(n))):c.setData(e({},"".concat(s,".list"),c.data[s].list.concat(n))),(0,a.isEmpty)(n)?(0,a.showToast)("没有更多了！"):c.setData(e({},"".concat(s,".page"),o)),c.setData(e({},"".concat(s,".isLoading"),!1)),c.data.isPullDown&&(wx.stopPullDownRefresh(),c.setData({isPullDown:!1})),(0,a.hideLoading)()}})},hideNotice:function(){wx.setStorageSync("shift-page-show-refresh-notice","1"),this.setData({isShowNotice:!1})},lookFile:function(t){(0,a.loading)();var e=t.currentTarget.dataset,c=e.agreementid,i=e.agreementno;wx.downloadFile({url:"".concat(a.urlPrefix,"/govt/sync/exportAgreement?vcode=").concat(this.data.vcode,"&agreementId=").concat(c,"&agreementNo=").concat(i,"&fileName=出行合同"),success:function(t){var e=t.tempFilePath;wx.openDocument({filePath:e,fileType:"pdf",success:function(){(0,a.hideLoading)()},fail:function(){(0,a.hideLoading)(),(0,a.showToast)("查看出行合同失败")}})},fail:function(){(0,a.hideLoading)(),(0,a.showToast)("查看出行合同失败")}})},jumpShiftOrderListPage:function(t){var e=t.target.dataset.shiftscheduleno;wx.navigateTo({url:"/pages/shiftOrderList/shiftOrderList?shiftScheduleNo=".concat(e,"&orderType=0&isList=1")})},scanCheckTicket:function(t){var e=this,c=t.target.dataset.shiftscheduleno;wx.scanCode({onlyFromCamera:!0,success:function(t){"scanCode:ok"===t.errMsg&&e.prepareCheck(t.result,c)},fail:function(t){"scanCode:fail cancel"!==t.errMsg&&((0,a.playAudio)("error"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?msg=fail&originPage=".concat(Number(e.data.isFocusPage))}))}})},prepareCheck:function(t,e){var c=this;if(!/^[a-zA-Z0-9]+$/.test(t))return(0,a.playAudio)("码不正确"),void wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(t,"&msg=码不正确&originPage=").concat(Number(this.data.isFocusPage))});wx.request({url:"".concat(a.urlPrefix,"/order/order/checkin/prepare/").concat(t),method:"POST",header:this.data.headInfo,success:function(a){var i=a.data;"200"===i.code?c.checkTicket(t,e):"201"===i.code&&wx.showModal({title:"提示",content:i.msg,confirmText:"确定",confirmColor:"#508cee",success:function(a){a.confirm&&c.checkTicket(t,e)}})},fail:function(){(0,a.playAudio)("网络不给力"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(t,"&msg=网络不给力&originPage=").concat(Number(c.data.isFocusPage))})}})},checkTicket:function(t,e){var c=this;wx.request({url:"".concat(a.urlPrefix,"/order/driver/qrcode/checkIn/").concat(t,"/").concat(this.data.isFocusPage,"?shiftScheduleNo=").concat(e),method:"GET",header:this.data.headInfo,success:function(i){var o=i.data;"200"===o.code?((0,a.playAudio)("success"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(t,"&msg=success&shiftscheduleno=").concat(e,"&originPage=").concat(Number(c.data.isFocusPage))})):"400"===o.code?"订单已退票"===o.msg?((0,a.playAudio)("订单已退票"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(t,"&msg=").concat(o.msg,"&code=").concat(o.code,"&shiftscheduleno=").concat(e,"&originPage=").concat(Number(c.data.isFocusPage))})):"订单已检票"===o.msg?((0,a.playAudio)("订单已检票"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(t,"&msg=").concat(o.msg,"&code=").concat(o.code,"&shiftscheduleno=").concat(e,"&originPage=").concat(Number(c.data.isFocusPage))})):"未到检票时间"===o.msg?((0,a.playAudio)("未到检票时间"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(t,"&msg=").concat(o.msg,"&code=").concat(o.code,"&shiftscheduleno=").concat(e,"&originPage=").concat(Number(c.data.isFocusPage))})):"未有检票权限"===o.msg?((0,a.playAudio)("未有检票权限"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(t,"&msg=").concat(o.msg,"&code=").concat(o.code,"&shiftscheduleno=").concat(e,"&originPage=").concat(Number(c.data.isFocusPage))})):"非当前班次"===o.msg&&((0,a.playAudio)("非当前班次"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(t,"&msg=").concat(o.msg,"&code=").concat(o.code,"&shiftscheduleno=").concat(e,"&originPage=").concat(Number(c.data.isFocusPage))})):((0,a.playAudio)("error"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(t,"&msg=").concat(o.msg,"&code=").concat(o.code,"&shiftscheduleno=").concat(e,"&originPage=").concat(Number(c.data.isFocusPage))}))},fail:function(){(0,a.playAudio)("网络不给力"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(t,"&msg=网络不给力&originPage=").concat(Number(c.data.isFocusPage))})}})},clickFilter:function(t){var e=t.currentTarget.dataset.tag;this.data.filterObj.type===e?this.setData({"filterObj.type":""}):this.setData({"filterObj.type":e})},selectStation:function(t){var e=t.currentTarget.dataset.index;e!==this.data.filterObj.dptstationIndex&&(this.setData({"filterObj.dptstationIndex":e}),this.queryShiftList()),this.setData({"filterObj.type":""})},selectarrStation:function(t){var e=t.currentTarget.dataset.index;e!==this.data.filterObj.stationIndex&&(this.setData({"filterObj.arrstationIndex":e}),this.queryShiftList()),this.setData({"filterObj.type":""})},clickFilterMask:function(t){"mask"===t.target.dataset.tag&&this.setData({"filterObj.type":""})}}); 
 			}); 	require("pages/shiftList/shiftList.js");
 		__wxRoute = 'pages/shiftJianList/shiftList';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/shiftJianList/shiftList.js';	define("pages/shiftJianList/shiftList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault"),e=require("../../@babel/runtime/helpers/objectSpread2"),a=require("../../@babel/runtime/helpers/createForOfIteratorHelper"),i=require("../../@babel/runtime/helpers/defineProperty"),c=require("../../utils/util.js"),o=t(require("../../utils/calendar.js")),s=getApp(),n={1:"waitObj",2:"checkedObj",0:"allScheduleObj"};Page({data:{vcode:"",headInfo:{},tabType:1,isShowNotice:!1,needVehicle:!1,waitObj:{isLoading:!1,page:1,list:[]},checkedObj:{isLoading:!1,page:1,list:[]},allScheduleObj:{isLoading:!1,page:1,list:[]},isPullDown:!1,filterObj:{type:"",dptstationIndex:0,arrstationIndex:0,scheduleTypeIndex:0},dptStationList:[{id:"",name:"出发站点"}],scheduleTypeList:[{id:1,name:"待检班次"},{id:2,name:"排班班次"}],arrStationList:[{id:"",name:"到达站点"}],isFocusPage:!1,sixDayArrs:[],calChangeDate:!0,slideCalendar:null,queryDate:(0,c.formatDate)(new Date,"yyyy-MM-dd"),startDate:(0,c.formatDate)((0,c.addTime)(new Date,"-7D"),"yyyy-MM-dd"),filterTime:(new Date).getTime(),ticketAuthority:[!1,!1],useMode:0,showReportStatic:!1,showFlow:!1,showScheduleQrcode:0,showOperate:!1,agreementSlt:{}},listData:{normalSaleDays:60,endDate:new Date,startStationId:0,endStationId:0,ssid:"",scrollTop:0},onLoad:function(t){var e=this;(t.tabType||0===parseInt(t.tabType))&&this.setData({tabType:parseInt(t.tabType)}),s.loginStatus.then((function(t){var a=t.vcode,i=t.ticketAuthority,c=t.useMode,o=[];i&&i.indexOf("1")>=0&&(o[0]=!0),i&&i.indexOf("2")>=0&&(o[1]=!0);var n="1"!==wx.getStorageSync("shift-page-show-refresh-notice");e.setData({vcode:a,useMode:c,ticketAuthority:o,headInfo:{cookie:"unionId=".concat(s.globalData.unionId)},isShowNotice:n}),e.setStorage("scheduleTypeId"),e.initCalendar(),e.checkNeedVehicle(),e.queryShiftList(),e.getStationList(),e.getQrcodeSetting()}))},onShow:function(){try{wx.getStorageSync("hasSetVehicle")&&(this.refreshList(),wx.removeStorageSync("hasSetVehicle"))}catch(t){}},clearStorage:function(){this.setData({"filterObj.dptstationIndex":0,"filterObj.arrstationIndex":0,"filterObj.scheduleTypeIndex":0})},setStorage:function(t){var e=Number(wx.getStorageSync(t));if(e){var a="";"startStationId"===t?(a=this.data.dptStationList.findIndex((function(t){return Number(t.id)===e})))>-1&&this.setData({"filterObj.dptstationIndex":a}):"endStationId"===t?(a=this.data.arrStationList.findIndex((function(t){return Number(t.id)===e})))>-1&&this.setData({"filterObj.arrstationIndex":a}):(a=this.data.scheduleTypeList.findIndex((function(t){return Number(t.id)===e})))>-1&&this.setData({"filterObj.scheduleTypeIndex":a})}},getQrcodeSetting:function(){var t=this;wx.request({url:"".concat(c.urlPrefix,"/account/getAccountInfo?vcode=").concat(this.data.vcode),method:"GET",header:this.data.headInfo,success:function(e){var a=e.data;"200"!==a.code||(0,c.isEmpty)(a.data)||t.setData({showScheduleQrcode:Number(a.data.showScheduleQrcode)})}})},refreshList:function(){var t=n[this.data.tabType];this.setData(i({},"".concat(t,".isLoading"),!0));var e=wx.getStorageSync("vehicleObj"),o={};try{if(!(0,c.isEmpty)(e)){o=JSON.parse(e);var s,d=a(this.data[t].list);try{for(d.s();!(s=d.n()).done;){var r=s.value;Number(r.shiftScheduleId)===Number(o.shiftScheduleId)&&(r.vehicleId=Number(o.vehicleId),r.vehicleNo=o.vehicleName)}}catch(t){d.e(t)}finally{d.f()}this.setData(i({},"".concat(t,".list"),this.data[t].list)),this.setData(i({},"".concat(t,".isLoading"),!1)),wx.removeStorageSync("vehicleObj")}}catch(e){this.setData(i({},"".concat(t,".isLoading"),!1))}},onPullDownRefresh:function(){this.setData({isPullDown:!0}),this.queryShiftList()},onReachBottom:function(){var t=n[this.data.tabType],e=this.data[t].page;this.queryShiftList(e+1)},switchTab:function(t){this.setData({showOperate:!1});var e=t.currentTarget.dataset.type;if(e!==this.data.tabType){this.setData({tabType:e}),this.clearStorage();this.data.tabType;this.queryShiftList()}},getStationList:function(){var t=this,e=[],a=[],i="".concat(c.urlPrefix,"/order/mobile/shiftList/startStations/").concat(this.data.vcode),o="".concat(c.urlPrefix,"/order/mobile/shiftList/endStations/").concat(this.data.vcode);wx.request({url:i,method:"GET",header:this.data.headInfo,data:{},success:function(t){var a=t.data;"200"!==a.code||(0,c.isEmpty)(a.data)||a.data.forEach((function(t){(0,c.isEmpty)(t)||e.push({id:t.stationId,name:t.stationName})}))},complete:function(){t.setData({dptStationList:[{id:"",name:"出发站点"}].concat(e)}),t.setStorage("startStationId")}}),wx.request({url:o,method:"GET",header:this.data.headInfo,data:{},success:function(t){var e=t.data;"200"!==e.code||(0,c.isEmpty)(e.data)||e.data.forEach((function(t){(0,c.isEmpty)(t)||a.push({id:t.stationId,name:t.stationName})}))},complete:function(){t.setData({arrStationList:[{id:"",name:"到达站点"}].concat(a)}),t.setStorage("endStationId")}})},checkNeedVehicle:function(){var t=this;(0,c.loading)();var e="".concat(c.urlPrefix,"/account/findByVcode?vcode=").concat(this.data.vcode),a=!1,i="",o="";wx.request({url:e,method:"GET",header:this.data.headInfo,data:{},success:function(t){var e=t.data;"200"!==e.code||(0,c.isEmpty)(e.data)||(a=e.data.waterClassSwitch,i=e.data.checkListSetting&&e.data.checkListSetting.indexOf("1")>-1,o=e.data.checkListSetting&&e.data.checkListSetting.indexOf("2")>-1)},complete:function(){t.setData({needVehicle:a,showReportStatic:i,showFlow:o}),(0,c.hideLoading)()}})},queryShiftList:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;(0,c.loading)();var o=n[this.data.tabType];this.setData(i({},"".concat(o,".isLoading"),!0));var s=[],d="";d=0===this.data.useMode?"".concat(c.urlPrefix,"/order/mobile/getMergerShiftScheduleList/").concat(this.data.vcode):"".concat(c.urlPrefix,"/order/mobile/getStewardInfoShiftScheduleList/").concat(this.data.vcode),wx.request({url:d,method:"GET",header:this.data.headInfo,data:{pageSize:20,page:a,startDay:this.data.queryDate,tabType:this.data.tabType,startStationId:this.data.dptStationList[this.data.filterObj.dptstationIndex].id,endStationId:this.data.arrStationList[this.data.filterObj.arrstationIndex].id,scheduleType:this.data.scheduleTypeList[this.data.filterObj.scheduleTypeIndex].id},success:function(t){var a=t.data;"200"!==a.code||(0,c.isEmpty)(a.data)||(0,c.isEmpty)(a.data.list)||(s=a.data.list.map((function(t){return e(e({},t),{},{formatStartDay:(0,c.formatDate)(t.startDay,"MM-dd")})})))},complete:function(){1===a?t.setData(i({},"".concat(o,".list"),[].concat(s))):t.setData(i({},"".concat(o,".list"),t.data[o].list.concat(s))),(0,c.isEmpty)(s)?(0,c.showToast)("没有更多了！"):t.setData(i({},"".concat(o,".page"),a)),t.setData(i({},"".concat(o,".isLoading"),!1)),t.data.isPullDown&&(wx.stopPullDownRefresh(),t.setData({isPullDown:!1})),(0,c.hideLoading)()}})},preventScroll:function(){},showQrcode:function(t){var e=this;0===this.data.useMode?this.getServerTime().then((function(a){var i=t.target.dataset.qrcodeid.startDate,o=(0,c.formatDate)(a,"yyyy/MM/dd");if((i=(0,c.formatDate)(i,"yyyy/MM/dd"))!==o){var s=e;wx.showModal({title:"提示",content:"班次日期非今天，是否继续报班？",success:function(e){e.confirm&&s.toShowQrcode(t.target.dataset.qrcodeid)}})}else e.toShowQrcode(t.target.dataset.qrcodeid)})).catch((function(){e.toShowQrcode(t.target.dataset.qrcodeid)})):this.toShowQrcode(t.target.dataset.qrcodeid)},toShowQrcode:function(t){var e=t.shiftScheduleId,a=t.vehicleId,i=s.globalData.id;i&&a?wx.navigateTo({url:"/pages/showQrcode/showQrcode?&driverId=".concat(i,"&shiftScheduleId=").concat(e,"&vehicleId=").concat(a,"&vcode=").concat(this.data.vcode)}):(0,c.showToast)("请选择车辆后报班")},getServerTime:function(){var t=this;return new Promise((function(e,a){wx.request({url:"".concat(c.urlPrefix,"/order/getTime"),method:"GET",header:t.data.headInfo,success:function(t){var i=t.data;"200"!==i.code||(0,c.isEmpty)(i.msg)?a():e(i.msg)},fail:function(){a()}})}))},hideNotice:function(){wx.setStorageSync("shift-page-show-refresh-notice","1"),this.setData({isShowNotice:!1})},countTicket:function(t){var e=t.target.dataset,a=e.shiftscheduleid,i=e.shifttype;wx.navigateTo({url:"/pages/ticketCountList/ticketCountList?shiftScheduleId=".concat(a,"&showFlow=").concat(this.data.showFlow&&2===Number(i)?1:0,"&showReportStatic=").concat(this.data.showReportStatic?1:0)})},preventTouchMove:function(){},hideOperate:function(t){"mask"===t.target.dataset.tag&&this.setData({showOperate:!1})},openContractPopup:function(t){var e=t.currentTarget.dataset.item,a=e.agreementId,i=e.agreementNo,c=e.agreementUrl,o=e.electronicWaybillUrl;this.setData({showOperate:!0,agreementSlt:{agreementId:a,agreementNo:i,agreementUrl:c,electronicWaybillUrl:o}})},lookRecord:function(){var t=this.data.agreementSlt.agreementUrl;this.setClipboard(t)},lookWayBill:function(){var t=this.data.agreementSlt.electronicWaybillUrl;this.setClipboard(t)},setClipboard:function(t){t&&wx.setClipboardData({data:t,success:function(){wx.showToast({title:"链接已复制，请到浏览器中打开",icon:"none",duration:2e3})}})},lookFile:function(t){(0,c.loading)();var e=this.data.agreementSlt,a=e.agreementId,i=e.agreementNo;wx.downloadFile({url:"".concat(c.urlPrefix,"/govt/sync/exportAgreement?vcode=").concat(this.data.vcode,"&agreementId=").concat(a,"&agreementNo=").concat(i,"&fileName=出行合同"),success:function(t){var e=t.tempFilePath;wx.openDocument({filePath:e,fileType:"pdf",success:function(){(0,c.hideLoading)()},fail:function(){(0,c.hideLoading)(),(0,c.showToast)("查看出行合同失败")}})},fail:function(){(0,c.hideLoading)(),(0,c.showToast)("查看出行合同失败")}})},jumpShiftOrderListPage:function(t){var e=t.target.dataset,a=e.shiftscheduleno,i=e.vehicleid,o=e.shifttype,s=e.shiftscheduleid,n=e.sid,d=!0;if(1===this.data.tabType&&2===o&&this.data.needVehicle&&(i||((0,c.showToast)("请选择车辆后检票"),d=!1)),d){var r="/pages/shiftOrderList/shiftOrderList?needVehicle=".concat(this.data.needVehicle,"&shiftScheduleId=").concat(s,"&shiftScheduleNo=").concat(a,"&vehicleId=").concat(i||0,"&orderType=0&isList=1");n&&(r+="&startStationId=".concat(n)),wx.navigateTo({url:r})}},scanCheckTicket:function(t){var e=this,a=t.target.dataset,i=a.shiftscheduleno,o=a.vehicleid;2!==a.shifttype||!this.data.needVehicle||o?wx.scanCode({onlyFromCamera:!0,success:function(t){"scanCode:ok"===t.errMsg&&e.prepareCheck(t.result,i,o||0)},fail:function(t){"scanCode:fail cancel"!==t.errMsg&&((0,c.playAudio)("error"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?msg=fail&originPage=".concat(Number(e.data.isFocusPage),"&vehicleId=").concat(o||0)}))}}):(0,c.showToast)("请选择车辆后检票")},CheckAllTicket:function(t){var e=this,a=t.target.dataset,i=a.vehicleid;2!==a.shifttype||!this.data.needVehicle||i?wx.showModal({title:"",content:"确定对该班次所有订单全部检票？",confirmText:"确定",cancelText:"点错了",confirmColor:"#508cee",success:function(a){if(a.confirm){var i=t.target.dataset,o=i.shiftscheduleid,n=i.vehicleid,d="".concat(c.urlPrefix,"/order/mobile/checkAllOrderBySteward/").concat(e.data.vcode);0===e.data.useMode&&(d="".concat(c.urlPrefix,"/order/mobile/checkAllOrderByDriver/").concat(e.data.vcode)),wx.request({url:d,method:"get",header:e.data.headInfo,data:{shiftScheduleId:o,unionId:s.globalData.unionId,vehicleId:n||0},success:function(t){var a=t.data;"200"===a.code?((0,c.showToast)("检票成功"),setTimeout((function(){e.queryShiftList(1)}),600)):(0,c.showToast)(a.errMsg||"检票失败，请重试")},fail:function(){(0,c.showToast)("检票失败，请重试")}})}}}):(0,c.showToast)("请选择车辆后检票")},prepareCheck:function(t,e,a){var i=this;c.ticketReg.test(t)?wx.request({url:"".concat(c.urlPrefix,"/order/order/checkin/prepare/").concat(t),method:"POST",header:this.data.headInfo,success:function(c){var o=c.data;"200"===o.code?i.checkTicket(t,e,a):"201"===o.code&&wx.showModal({title:"提示",content:o.msg,confirmText:"确定",confirmColor:"#508cee",success:function(c){c.confirm&&i.checkTicket(t,e,a)}})},fail:function(){(0,c.playAudio)("网络不给力"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(t,"&msg=网络不给力&originPage=").concat(Number(i.data.isFocusPage),"&vehicleId=").concat(a||0)})}}):this.vehicleCardCheck(t,e,a)},vehicleCardCheck:function(t,e,a){var i=this;wx.showLoading();var o=0===this.data.useMode?1:2;wx.request({url:"".concat(c.trafficCardApi,"/orderinfoapi/checkOrder"),method:"POST",header:this.data.headInfo,data:{cardNo:t,checkType:o,shiftScheduleNo:e,unionId:s.globalData.unionId,vehicleId:a},success:function(o){var s=o.data;"200"===s.code?s.data?(wx.setStorageSync("cardCheckedOrderList",JSON.stringify(s.data)),(0,c.playAudio)("success"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(t,"&msg=success&shiftscheduleno=").concat(e,"&originPage=").concat(Number(i.data.isFocusPage),"&vehicleId=").concat(a||0,"&type=card&fromPage=shift")})):((0,c.playAudio)("暂无订单"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?msg=暂无订单&shiftscheduleno=".concat(e,"&originPage=").concat(Number(i.data.isFocusPage),"&vehicleId=").concat(a||0,"&fromPage=shift")})):"422"===s.code?((0,c.playAudio)("码不正确"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?msg=码不正确&fromPage=shift"})):((0,c.playAudio)("error"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?msg=".concat(s.msg,"&code=").concat(s.code,"&shiftscheduleno=").concat(e,"&originPage=").concat(Number(i.data.isFocusPage),"&vehicleId=").concat(a||0,"&fromPage=shift")}))},fail:function(){(0,c.playAudio)("网络不给力"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?msg=网络不给力&originPage=".concat(Number(i.data.isFocusPage),"&originPage=").concat(Number(i.data.isFocusPage),"&vehicleId=").concat(a||0,"&fromPage=shift")})},complete:function(){wx.hideLoading()}})},checkTicket:function(t,e){var a=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o="".concat(c.urlPrefix,"/order/driver/qrcode/checkIn/").concat(t,"/").concat(this.data.isFocusPage,"?shiftScheduleNo=").concat(e,"&vehicleId=").concat(i);1===this.data.useMode&&(o="".concat(c.urlPrefix,"/order/acquirer/qrcode/checkIn/").concat(t,"?shiftScheduleNo=").concat(e,"&vehicleId=").concat(i)),wx.request({url:o,method:"GET",header:this.data.headInfo,success:function(o){var s=o.data;"200"===s.code?((0,c.playAudio)("success"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(t,"&msg=success&shiftscheduleno=").concat(e,"&originPage=").concat(Number(a.data.isFocusPage),"&vehicleId=").concat(i||0)})):"400"===s.code?"订单已退票"===s.msg?((0,c.playAudio)("订单已退票"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(t,"&msg=").concat(s.msg,"&code=").concat(s.code,"&shiftscheduleno=").concat(e,"&originPage=").concat(Number(a.data.isFocusPage),"&vehicleId=").concat(i||0)})):"订单已检票"===s.msg?((0,c.playAudio)("订单已检票"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(t,"&msg=").concat(s.msg,"&code=").concat(s.code,"&shiftscheduleno=").concat(e,"&originPage=").concat(Number(a.data.isFocusPage),"&vehicleId=").concat(i||0)})):"未到检票时间"===s.msg?((0,c.playAudio)("未到检票时间"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(t,"&msg=").concat(s.msg,"&code=").concat(s.code,"&shiftscheduleno=").concat(e,"&originPage=").concat(Number(a.data.isFocusPage),"&vehicleId=").concat(i||0)})):"未有检票权限"===s.msg?((0,c.playAudio)("未有检票权限"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(t,"&msg=").concat(s.msg,"&code=").concat(s.code,"&shiftscheduleno=").concat(e,"&originPage=").concat(Number(a.data.isFocusPage),"&vehicleId=").concat(i||0)})):"非当前班次"===s.msg&&((0,c.playAudio)("非当前班次"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(t,"&msg=").concat(s.msg,"&code=").concat(s.code,"&shiftscheduleno=").concat(e,"&originPage=").concat(Number(a.data.isFocusPage),"&vehicleId=").concat(i||0)})):((0,c.playAudio)("error"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(t,"&msg=").concat(s.msg,"&code=").concat(s.code,"&shiftscheduleno=").concat(e,"&originPage=").concat(Number(a.data.isFocusPage),"&vehicleId=").concat(i||0)}))},fail:function(){(0,c.playAudio)("网络不给力"),wx.navigateTo({url:"/pages/checkTicketResult/checkTicketResult?orderNo=".concat(t,"&msg=网络不给力&originPage=").concat(Number(a.data.isFocusPage),"&vehicleId=").concat(i||0)})}})},clickFilter:function(t){var e=t.currentTarget.dataset.tag;this.data.filterObj.type===e?this.setData({"filterObj.type":""}):this.setData({"filterObj.type":e})},selectStation:function(t){var e=t.currentTarget.dataset.index;e!==this.data.filterObj.dptstationIndex&&(this.setData({"filterObj.dptstationIndex":e}),wx.setStorageSync("startStationId",this.data.dptStationList[this.data.filterObj.dptstationIndex].id.toString()),this.queryShiftList()),this.setData({"filterObj.type":""})},selectarrStation:function(t){var e=t.currentTarget.dataset.index;e!==this.data.filterObj.stationIndex&&(this.setData({"filterObj.arrstationIndex":e}),wx.setStorageSync("endStationId",this.data.arrStationList[this.data.filterObj.arrstationIndex].id.toString()),this.queryShiftList()),this.setData({"filterObj.type":""})},selectScheduleType:function(t){var e=t.currentTarget.dataset.index;e!==this.data.filterObj.scheduleTypeIndex&&(this.setData({"filterObj.scheduleTypeIndex":e}),wx.setStorageSync("scheduleTypeId",this.data.scheduleTypeList[this.data.filterObj.scheduleTypeIndex].id.toString()),this.queryShiftList()),this.setData({"filterObj.type":""})},clickFilterMask:function(t){"mask"===t.target.dataset.tag&&this.setData({"filterObj.type":""})},initCalendar:function(){console.log("init calendar");var t=new Date,e=t.getFullYear(),a=t.getMonth()+2;this.listData.endDate=(0,c.formatDate)(new Date(e,a,0)),this.slideCalendar=this.selectComponent("#slideCalendar");var i=this.slideCalendar.data,o=this.data;i.querydate=new Date(o.queryDate.replace(/-/g,"/")),i.startdate=o.startDate,i.enddate=this.listData.endDate,this.slideCalendar.init()},sixDateSel:function(t){this.setData({showOperate:!1});var e=this,a=(e.listData,(0,c.formatDate)(new Date(e.data.queryDate),"yyyy-MM-dd")),i=t.detail.detail.date;if(a==i)return this.setData({calChangeDate:!0}),!1;setTimeout((function(){e.setData({calChangeDate:!0})}),600),i!=a&&(i=(0,c.parseDate)(i),e.resetState(i),e.queryShiftList(1))},resetState:function(t){var e=(0,c.formatDate)(new Date(t),"yyyy-MM-dd");this.listData.startStationId=0,this.listData.endStationId=0,this.setData({"filterObj.dptstationIndex":0,"filterObj.arrstationIndex":0,"filterObj.scheduleTypeIndex":0,waitObj:{isLoading:!1,page:1,list:[]},checkedObj:{isLoading:!1,page:1,list:[]},allScheduleObj:{isLoading:!1,page:1,list:[]},page:1,queryDate:e})},dateAdd:function(t,e){return(0,c.addTime)(e,"".concat(parseInt(t,10),"D"))},toggleCalendar:function(t){var e=this,a=e.listData,i=(0,c.formatDate)((0,c.addTime)(new Date,"0D"),"yyyy-MM-"),s=(a.endDate.split("-"),(0,c.formatDate)(e.dateAdd(a.normalSaleDays-1,new Date),"yyyy-MM-dd"));o.default.show({startDate:i+"01",normalEndTime:s,endDate:a.endDate,selectDate:(0,c.formatDate)(new Date(e.data.queryDate),"yyyy-MM-dd"),basePageUrl:"../../../../",tipsMessage:"",scheduleDayArr:this.data.scheduleDayArr,soursePath:"bus",callback:function(t){var a=(0,c.formatDate)(new Date(e.data.queryDate),"yyyy-MM-dd"),i=t.date;i!=a&&(i=(0,c.parseDate)(i),e.resetState(i),e.queryShiftList(1),e.initCalendar())}})},selectCar:function(t){var e=t.currentTarget.dataset.shiftscheduleid;wx.navigateTo({url:"/pages/planControl/components/selectPage/selectPage?t=shiftList&vcode="+this.data.vcode+"&id="+e})}}); 
 			}); 	require("pages/shiftJianList/shiftList.js");
 		__wxRoute = 'pages/shiftOrderList/shiftOrderList';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/shiftOrderList/shiftOrderList.js';	define("pages/shiftOrderList/shiftOrderList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var t=require("../../@babel/runtime/helpers/objectSpread2"),e=require("../../@babel/runtime/helpers/defineProperty"),a=require("../../utils/util.js"),i=require("../../utils/api.js"),r=getApp(),s=null;Page({data:{page:1,useMode:0,vcode:"",headInfo:{},orderType:1,shiftScheduleNo:"",vehicleId:"",queryText:"",filterObj:{type:"",statusIndex:1,stationIndex:0,timeIndex:0},statusList:[{id:0,name:"全部状态"},{id:1,name:"待处理"},{id:2,name:"已完成"},{id:3,name:"已取消"}],cardStatusList:[{id:0,name:"全部状态"},{id:1,name:"待检票"},{id:2,name:"已检票"}],stationList:[{id:"",name:"全部站点"}],timeList:[{id:0,sortKey:"start_time",sortOrder:"asc",name:"出发时间最早"},{id:1,sortKey:"start_time",sortOrder:"desc",name:"出发时间最晚"},{id:2,sortKey:"create_time",sortOrder:"asc",name:"下单时间最早"},{id:3,sortKey:"create_time",sortOrder:"desc",name:"下单时间最晚"}],orderList:[],isLoading:!1,orderStatusToColor:{"待处理":"status-red","待检票":"status-red","已完成":"status-black","已检票":"status-black","已取消":"status-grey"},advanceCheckinMin:30,isList:!1,shiftScheduleId:"",hasCheckAllBtn:!1,naviTop:0,filterTop:0,contentTop:0,tabType:1,cardOrderList:[]},hasNextPage:!0,onLoad:function(t){var a,i=this,s=wx.getMenuButtonBoundingClientRect();(this.setData({naviTop:s.top,filterTop:100+s.top,contentTop:140+s.top}),"1"===t.isList)&&(this.setData((e(a={},"filterObj.statusIndex",0),e(a,"isList",!0),a)),wx.setNavigationBarTitle({title:"订单列表"}));r.loginStatus.then((function(e){var a=e.vcode,s=e.useMode;i.setData({vcode:a,useMode:s,headInfo:{cookie:"unionId=".concat(r.globalData.unionId)},orderType:"0"===t.orderType?0:1,shiftScheduleNo:t.shiftScheduleNo||"",shiftScheduleId:t.shiftScheduleId||"",vehicleId:t.vehicleId||0});var d=t.startStationId||"";i.getAccountInfo(),i.getShiftOrderList(1,d),i.getStationList()}))},onShow:function(){},onSearchInput:function(t){var e=this;this.setData({queryText:t.detail.value}),s&&clearTimeout(s),s=setTimeout((function(){1===e.data.tabType&&e.getShiftOrderList(),2===e.data.tabType&&e.getCardShiftOrderList()}),500)},switchTab:function(t){var e=t.currentTarget.dataset.type;if(e!==this.data.tabType){this.hasNextPage=!0;var a=this.data.isList?0:1;this.setData({tabType:e,filterObj:{type:"",statusIndex:a,stationIndex:0,timeIndex:0},queryText:"",page:1}),1===e?this.getShiftOrderList():(this.setData({hasCheckAllBtn:!1}),this.getCardShiftOrderList())}},getAccountInfo:function(){var t=this;wx.request({url:"".concat(a.urlPrefix,"/account/getAccountInfo?vcode=").concat(this.data.vcode),method:"GET",header:this.data.headInfo,success:function(e){var i=e.data;"200"!==i.code||(0,a.isEmpty)(i.data)||t.setData({advanceCheckinMin:Number(i.data.advanceCheckinMin)})}})},callPassenger:function(t){var e=t.currentTarget.dataset.tel;wx.makePhoneCall({phoneNumber:e})},getShiftOrderList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";1===e&&this.setData({orderList:[]}),this.setData({isLoading:!0}),wx.showLoading({title:"加载中"});var s=[],d=this.data.timeList[this.data.filterObj.timeIndex],o="".concat(a.urlPrefix,"/order/mobile/shiftOrderList/").concat(this.data.vcode);1===this.data.useMode&&(o="".concat(a.urlPrefix,"/order/mobile/shiftScheduleOrderList/").concat(this.data.vcode));var n=i||this.data.stationList[this.data.filterObj.stationIndex].id;wx.request({url:o,method:"GET",header:this.data.headInfo,data:{pageSize:20,page:e,shiftScheduleNos:this.data.shiftScheduleNo,orderStatus:this.data.filterObj.statusIndex,sortKey:d.sortKey,sortOrder:d.sortOrder,query:this.data.queryText,startStationId:n,orderType:this.data.orderType},success:function(e){var i=e.data;"200"!==i.code||(0,a.isEmpty)(i.data)||(0,a.isEmpty)(i.data.list)||(t.hasNextPage=i.data.hasNextPage,s=i.data.list.map((function(e){var i=!1;if(6===e.orderStatus&&!(0,a.isEmpty)(e.orderPassengers)){var s=e.orderPassengers[0],d=s.checkInSource,o=s.stewardId;1===r.globalData.useMode?2===d&&o===r.globalData.id||(i=!0):0===r.globalData.useMode&&(3===d&&o===r.globalData.id||(i=!0))}var n=e.startTime;return n&&(n=t.checkIsToday(n)?(0,a.formatDate)(n,"ww hh:mm"):(0,a.formatDate)(n,"MM-dd ww hh:mm")),{orderNo:e.orderNo,orderStatusName:e.orderStatusName,formatStartTime:n,startAddress:e.startAddress,endAddress:e.endAddress,passengerNameJoin:e.passengerNameJoin,passengerNameAndSeatNoJoin:e.passengerNameAndSeatNoJoin,passengerLength:e.orderPassengers.length,orderStatus:e.orderStatus,startTime:e.startTime,totalCarryChildrenNum:e.totalCarryChildrenNum,telephone:e.telephone,telephoneText:e.telephone.replace(/(.{3}).*(.{4})/,"$1******$2"),isOtherChecked:i,showOtherCheckedToast:!1,source:e.source}})))},complete:function(){(0,a.isEmpty)(s)||t.setData({page:e}),t.setData({isLoading:!1,orderList:t.data.orderList.concat(s)}),t.checkHasAllBtn(),wx.hideNavigationBarLoading(),wx.stopPullDownRefresh(),wx.hideLoading()}})},getCardShiftOrderList:function(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";1===i&&this.setData({cardOrderList:[]}),this.setData({isLoading:!0}),wx.showLoading({title:"加载中"});var s=r||this.data.stationList[this.data.filterObj.stationIndex].id,d=[];wx.request({url:"".concat(a.trafficCardApi,"/orderinfoapi/mobile/scheduleOrderList/").concat(this.data.vcode),method:"GET",header:this.data.headInfo,data:{page:i,pageSize:20,shiftScheduleNo:this.data.shiftScheduleNo,orderStatus:this.data.filterObj.statusIndex,query:this.data.queryText,startStationId:s},success:function(i){var r=i.data;"200"!==r.code||(0,a.isEmpty)(r.data)||(0,a.isEmpty)(r.data.list)||(d=r.data.list.map((function(i){var r=i.startingTime;r&&(r=e.checkIsToday(r)?(0,a.formatDate)(r,"ww hh:mm"):(0,a.formatDate)(r,"MM-dd ww hh:mm"));var s=i.memberMobile?i.memberMobile.replace(/(.{3}).*(.{4})/,"$1******$2"):"",d=9===i.orderStatus?"待检票":"已检票";return t(t({},i),{},{formatStartTime:r,telephoneText:s,orderStatusName:d})})),e.hasNextPage=r.data.hasNextPage)},complete:function(){(0,a.isEmpty)(d)||e.setData({page:i}),e.setData({isLoading:!1,cardOrderList:e.data.cardOrderList.concat(d)}),wx.hideNavigationBarLoading(),wx.stopPullDownRefresh(),wx.hideLoading()}})},checkHasAllBtn:function(){var t=this.data.orderList.some((function(t){return[9,13].includes(t.orderStatus)}));this.setData({hasCheckAllBtn:t})},onReachBottom:function(){if(this.hasNextPage){var t=this.data.page;1===this.data.tabType?this.getShiftOrderList(t+1):this.getCardShiftOrderList(t+1)}},checkIsToday:function(t){if(t)return(0,a.formatDate)(new Date,"yyyy/MM/dd")===(t=(0,a.formatDate)(t,"yyyy/MM/dd"))},getStationList:function(){var t=this,e=[];wx.request({url:"".concat(i.api[this.data.useMode].getShiftOrderStationList).concat(this.data.vcode),method:"GET",header:this.data.headInfo,data:{shiftScheduleNos:this.data.shiftScheduleNo,orderType:this.data.orderType},success:function(t){var i=t.data;"200"!==i.code||(0,a.isEmpty)(i.data)||i.data.forEach((function(t){(0,a.isEmpty)(t)||e.push({id:t.id,name:t.name})}))},complete:function(){t.setData({stationList:[{id:"",name:"全部站点"}].concat(e)})}})},clickFilter:function(t){var e=t.currentTarget.dataset.tag;this.data.filterObj.type===e?this.setData({"filterObj.type":""}):this.setData({"filterObj.type":e})},selectStatus:function(t){var e=t.currentTarget.dataset.index;e!==this.data.filterObj.statusIndex&&(this.setData({"filterObj.statusIndex":e}),1===this.data.tabType?this.getShiftOrderList():this.getCardShiftOrderList()),this.setData({"filterObj.type":""})},selectStation:function(t){var e=t.currentTarget.dataset.index;e!==this.data.filterObj.stationIndex&&(this.setData({"filterObj.stationIndex":e}),1===this.data.tabType?this.getShiftOrderList():this.getCardShiftOrderList()),this.setData({"filterObj.type":""})},selectTime:function(t){var e=t.currentTarget.dataset.index;e!==this.data.filterObj.timeIndex&&(this.setData({"filterObj.timeIndex":e}),this.getShiftOrderList()),this.setData({"filterObj.type":""})},clickFilterMask:function(t){"mask"===t.target.dataset.tag&&this.setData({"filterObj.type":""})},jumpDriverOrderDetailPage:function(t){var e=t.currentTarget.dataset.orderno;e&&wx.navigateTo({url:"/pages/driverOrderDetail/driverOrderDetail?orderNo=".concat(e,"&useMode=").concat(this.data.useMode)})},verifyCheckTicketTime:function(t){var e=this.data.advanceCheckinMin;return new Date((0,a.newDate)(t)).getTime()-(new Date).getTime()<=(e=60*e*1e3)},prepareCheck:function(t){var e=this;/^[a-zA-Z0-9]+$/.test(t)?wx.request({url:"".concat(a.urlPrefix,"/order/order/checkin/prepare/").concat(t),method:"POST",header:this.data.headInfo,success:function(a){var i=a.data;"200"===i.code?e.confirmCheckTicket(t,e.data.vehicleId):"201"===i.code&&wx.showModal({title:"提示",content:i.msg,confirmText:"确定",confirmColor:"#508cee",success:function(a){a.confirm&&e.confirmCheckTicket(t,e.data.vehicleId)}})},fail:function(){(0,a.showToast)("验票异常，请稍后重试")}}):(0,a.showToast)("验票异常，请稍后重试")},CheckAllTicket:function(){var t=this;wx.showModal({title:"",content:"确定对所有订单全部检票吗？",confirmText:"确定",cancelText:"点错了",confirmColor:"#508cee",success:function(e){if(e.confirm){var i="".concat(a.urlPrefix,"/order/mobile/checkAllOrderBySteward/").concat(t.data.vcode);0===t.data.useMode&&(i="".concat(a.urlPrefix,"/order/mobile/checkAllOrderByDriver/").concat(t.data.vcode)),wx.request({url:i,method:"get",header:t.data.headInfo,data:{shiftScheduleId:t.data.shiftScheduleId,unionId:r.globalData.unionId,vehicleId:t.data.vehicleId||0},success:function(e){var i=e.data;"200"===i.code?((0,a.showToast)("检票成功"),setTimeout((function(){t.getShiftOrderList(1)}),600)):(0,a.showToast)(i.errMsg||"检票失败，请重试")},fail:function(){(0,a.showToast)("检票失败，请重试")}})}}})},clickOtherCheckedBtn:function(t){var e=t.currentTarget.dataset.index,a=this.data.orderList;a[e].showOtherCheckedToast=!0,this.setData({orderList:a})},closeOtherCheckedToast:function(t){var e=t.currentTarget.dataset.index,a=this.data.orderList;a[e].showOtherCheckedToast=!1,this.setData({orderList:a})},clickCheckTicketBtn:function(t){var e=t.currentTarget.dataset,a=e.starttime,i=e.orderno,r=e.orderstatus;9!==r&&13!==r||(this.verifyCheckTicketTime(a)?this.prepareCheck(i):wx.showModal({title:"提示",content:"还未到检票时间，请在乘客用车时间前".concat(this.data.advanceCheckinMin,"分钟内检票！"),showCancel:!1}))},confirmCheckTicket:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r="".concat(a.urlPrefix,"/order/mobile/checkInAll/").concat(t);1===this.data.useMode&&(r="".concat(a.urlPrefix,"/order/mobile/orderCheckInAllForSteward/").concat(t)),wx.request({url:r,method:"GET",header:this.data.headInfo,data:{shiftScheduleNo:this.data.shiftScheduleNo,vehicleId:i||0},success:function(t){var i=t.data;"200"===i.code?((0,a.showToast)(i.msg),setTimeout((function(){e.getShiftOrderList()}),600)):(0,a.showToast)(i.msg)},fail:function(){(0,a.showToast)("验票异常，请稍后重试")}})},onPullDownRefresh:function(){wx.showNavigationBarLoading(),1===this.data.tabType?this.getShiftOrderList():this.getCardShiftOrderList()},back:function(){wx.navigateBack()}}); 
 			}); 	require("pages/shiftOrderList/shiftOrderList.js");
 		__wxRoute = 'pages/driverOrderDetail/driverOrderDetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/driverOrderDetail/driverOrderDetail.js';	define("pages/driverOrderDetail/driverOrderDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/objectSpread2"),a=require("../../utils/util.js"),e=getApp();Page({data:{useMode:0,vcode:"",headInfo:{},orderNo:"",orderInfo:{},mapScale:16,mapMarker:[],driverLocation:{latitude:0,longitude:0},isShowOrderInfo:!0,locationIsLoading:!1,maskObj:{isShow:!1,type:""},startStationDistance:"",advanceCheckinMin:30},onLoad:function(t){var a=this;e.loginStatus.then((function(o){var i=o.vcode;a.setData({vcode:i,headInfo:{cookie:"unionId=".concat(e.globalData.unionId)},orderNo:t.orderNo||"",useMode:t.useMode||0}),a.data.orderNo&&(a.getAccountInfo(),a.getOrderDetail())})),this.getDriverLocation()},onShow:function(){},onReady:function(){this.mapCtx=wx.createMapContext("myMap")},getDriverLocation:function(){var t=this;if(this.data.locationIsLoading)return!1;this.setData({locationIsLoading:!0}),wx.getLocation({type:"gcj02",success:function(e){"getLocation:ok"===e.errMsg?(t.setData({"driverLocation.latitude":e.latitude,"driverLocation.longitude":e.longitude}),t.calcStartStationDistance(),setTimeout((function(){t.setFitView()}),1e3)):(0,a.showToast)("未获取到当前位置"),t.setData({locationIsLoading:!1})},fail:function(){t.setData({locationIsLoading:!1}),(0,a.showToast)("未获取到当前位置")}})},clickMapAdd:function(){var t=this;this.mapCtx.getScale({success:function(e){"getMapScale:ok"===e.errMsg?19===e.scale?(0,a.showToast)("地图已放到最大状态"):t.setData({mapScale:e.scale+1}):(0,a.showToast)("放大地图失败")},fail:function(){(0,a.showToast)("放大地图失败")}})},clickMapSub:function(){var t=this;this.mapCtx.getScale({success:function(e){"getMapScale:ok"===e.errMsg?4===e.scale?(0,a.showToast)("地图已缩到最小状态"):t.setData({mapScale:e.scale-1}):(0,a.showToast)("放大地图失败")},fail:function(){(0,a.showToast)("放大地图失败")}})},clickMapLocation:function(){this.getDriverLocation()},getOrderDetail:function(){var e=this;(0,a.loading)();var o={};wx.request({url:"".concat(a.urlPrefix,"/order/mobile/detail?orderNo=").concat(this.data.orderNo),method:"POST",header:this.data.headInfo,success:function(e){var i=e.data;"200"!==i.code||(0,a.isEmpty)(i.data)||(o=t(t({},i.data),{},{passengerLength:i.data.passengerInfoList.length,formatStartTime:(0,a.formatDate)(i.data.startingTime,"MM-dd ww hh:mm")}))},complete:function(){(0,a.hideLoading)(),e.setData({orderInfo:o}),e.setStationMarker(),e.calcStartStationDistance(),setTimeout((function(){e.setFitView()}),1e3)}})},getAccountInfo:function(){var t=this;wx.request({url:"".concat(a.urlPrefix,"/account/getAccountInfo?vcode=").concat(this.data.vcode),method:"GET",header:this.data.headInfo,success:function(e){var o=e.data;"200"!==o.code||(0,a.isEmpty)(o.data)||t.setData({advanceCheckinMin:Number(o.data.advanceCheckinMin)})}})},setStationMarker:function(){if(!(0,a.isEmpty)(this.data.orderInfo)){var t=[],e=this.data.orderInfo,o=e.startingAdd,i=e.startingLat,n=e.startingLon,c=e.endingAdd,r=e.endingLat,s=e.endingLon,d={id:1,latitude:i,longitude:n,iconPath:"https://file.40017.cn/groundtraffic/linecity/business/map-blue-arrow-icon.png",width:.5,height:.5,callout:{content:"".concat(o,"(上)"),color:"#ffffff",fontSize:14,borderRadius:10,bgColor:"#508cee",padding:5,display:"ALWAYS"}};t.push(d);var u={id:2,latitude:r,longitude:s,iconPath:"https://file.40017.cn/groundtraffic/linecity/business/map-white-arrow-icon.png",width:.5,height:.5,callout:{content:"".concat(c,"(上)"),color:"#333333",fontSize:14,borderRadius:10,bgColor:"#ffffff",padding:5,display:"ALWAYS"}};t.push(u),this.setData({mapMarker:[].concat(t)})}},setFitView:function(){var t=this.data,e=t.driverLocation,o=t.mapMarker,i=[];e.latitude&&i.push({latitude:e.latitude,longitude:e.longitude}),o.forEach((function(t){i.push({latitude:t.latitude,longitude:t.longitude})})),(0,a.isEmpty)(i)||this.mapCtx.includePoints({padding:[10],points:i})},calcStartStationDistance:function(){var t=this,e=this.data,o=e.orderInfo,i=e.driverLocation;if(!(o.startingLat&&o.startingLon&&i.latitude&&i.longitude))return!1;wx.request({url:"".concat(a.urlPrefix,"/order/mobile/calStartStationDistance"),method:"GET",data:{curLat:i.latitude,curLon:i.longitude,startingLat:o.startingLat,startingLon:o.startingLon},success:function(a){var e=a.data;"200"===e.code&&t.setData({startStationDistance:e.data})}})},switchOrderInfoShowStatus:function(){this.setData({isShowOrderInfo:!this.data.isShowOrderInfo})},callPassengerPhone:function(t){var a=t.target.dataset.tel;a&&wx.makePhoneCall({phoneNumber:a})},verifyCheckTicketTime:function(){var t=this.data.advanceCheckinMin;return new Date((0,a.newDate)(this.data.orderInfo.startingTime)).getTime()-(new Date).getTime()<=(t=60*t*1e3)},clickCheckTicketBtn:function(){var t=this;this.verifyCheckTicketTime()?wx.showModal({title:"提示",content:"确定乘客".concat(this.data.orderInfo.passengerNameJoin,"已到达可以检票？检票后不可取消哦！"),confirmText:"检票",confirmColor:"#508cee",success:function(a){a.confirm&&t.confirmCheckTicket()}}):wx.showModal({title:"提示",content:"还未到检票时间，请在乘客用车时间前".concat(this.data.advanceCheckinMin,"分钟内检票！"),showCancel:!1})},confirmCheckTicket:function(){var t=this,e="".concat(a.urlPrefix,"/order/mobile/checkInAll/").concat(this.data.orderNo);1===Number(this.data.useMode)&&(e="".concat(a.urlPrefix,"/order/mobile/orderCheckInAllForSteward/").concat(this.data.orderNo)),wx.request({url:e,method:"GET",header:this.data.headInfo,success:function(e){var o=e.data;"200"===o.code?((0,a.showToast)(o.msg),t.getOrderDetail()):(0,a.showToast)(o.msg)},fail:function(){(0,a.showToast)("验票异常，请稍后重试")}})},handleMask:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.setData({"maskObj.isShow":t,"maskObj.type":a})},clickMask:function(t){"mask"===t.target.dataset.tag&&this.handleMask()},clickNavBtn:function(){this.handleMask(!0,"nav")},confirmNav:function(t){var e=t.currentTarget.dataset.tag,o=0,i=0,n="";if("start"===e){var c=this.data.orderInfo,r=c.startingAdd;o=c.startingLat,i=c.startingLon,n=r}else if("end"===e){var s=this.data.orderInfo,d=s.endingAdd;o=s.endingLat,i=s.endingLon,n=d}o&&i&&wx.openLocation({latitude:o,longitude:i,name:n,fail:function(){(0,a.showToast)("导航失败")}})}}); 
 			}); 	require("pages/driverOrderDetail/driverOrderDetail.js");
 		__wxRoute = 'pages/checkTicketResult/checkTicketResult';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/checkTicketResult/checkTicketResult.js';	define("pages/checkTicketResult/checkTicketResult.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/objectSpread2"),t=require("../../utils/util.js"),a=getApp();Page({data:{mode:0,headInfo:{},orderNo:"",msgNotice:"",code:"",isInFive:!1,shiftscheduleno:"",originPage:-1,vehicleId:0,orderList:[],fromPage:""},onLoad:function(e){var t=this,o=!1;"订单已退票"!==e.msg&&"订单已检票"!==e.msg&&"未到检票时间"!==e.msg&&"未有检票权限"!==e.msg&&"非当前班次"!==e.msg&&"码不正确"!==e.msg&&"网络不给力"!==e.msg&&"非当前班次"!==e.msg&&"暂无订单"!==e.msg||(o=!0),a.loginStatus.then((function(i){var r=i.useMode;t.setData({headInfo:{cookie:"unionId=".concat(a.globalData.unionId)},msgNotice:e.msg||"",orderNo:e.orderNo||"",code:e.code||"",shiftscheduleno:e.shiftscheduleno||"",isInFive:o,mode:r,originPage:void 0===e.originPage?2:Number(e.originPage),vehicleId:e.vehicleId||0,fromPage:e.fromPage||""}),e.orderNo&&("card"===e.type?t.getVehicleCardOrder():t.getOrderDetail())}))},onShow:function(){},getOrderDetail:function(){var a=this,o={};wx.request({url:"".concat(t.urlPrefix,"/order/mobile/detail?orderNo=").concat(this.data.orderNo),method:"POST",header:this.data.headInfo,success:function(e){var a=e.data;if("200"===a.code&&!(0,t.isEmpty)(a.data)){var i=a.data,r=i.shiftType,c=i.startingAdd,d=i.endingAdd,s=i.startingTime,n=i.arriveTimeExpect,h=i.lineHour,u=i.passengerInfoList;o={shiftType:r,startingAdd:c,endingAdd:d,formatStartTime:(0,t.formatDate)(s,"MM-dd hh:mm"),arriveTimeExpect:n,lineHour:h,passengerInfoList:u}}},complete:function(){a.setData({orderList:[e({},o)]})}})},getVehicleCardOrder:function(){var a=wx.getStorageSync("cardCheckedOrderList")||"";if(a){var o=(a=JSON.parse(a))&&a.map((function(a){return e(e({},a),{},{formatStartTime:(0,t.formatDate)(a.startingTime,"MM-dd hh:mm")})}));this.setData({orderList:o||[]})}},scanCheckTicket:function(){var e=this;wx.scanCode({onlyFromCamera:!0,success:function(t){"scanCode:ok"===t.errMsg&&(t.result!==e.data.orderNo&&e.setData({orderNo:t.result,orderList:[]}),e.prepareCheck())},fail:function(a){"scanCode:fail cancel"!==a.errMsg&&((0,t.playAudio)("error"),e.setData({msgNotice:"fail"}))}})},prepareCheck:function(){var e=this,a=this.data.orderNo;a&&(this.setData({orderList:[],msgNotice:""}),t.ticketReg.test(this.data.orderNo)?wx.request({url:"".concat(t.urlPrefix,"/order/order/checkin/prepare/").concat(a),method:"POST",header:this.data.headInfo,success:function(t){var o=t.data;"200"===o.code?e.checkTicket(a):"201"===o.code&&wx.showModal({title:"提示",content:o.msg,confirmText:"确定",confirmColor:"#508cee",success:function(t){t.confirm&&e.checkTicket(a)}})},fail:function(){(0,t.playAudio)("网络不给力"),e.setData({msgNotice:"网络不给力"})}}):this.vehicleCardCheck(this.data.orderNo))},vehicleCardCheck:function(e){var o=this,i=this.data,r=i.mode,c=i.shiftscheduleno,d=i.vehicleId,s=i.fromPage,n={cardNo:e,checkType:0===r?1:2,unionId:a.globalData.unionId};"shift"===s&&(n.shiftScheduleNo=c,n.vehicleId=d),wx.request({url:"".concat(t.trafficCardApi,"/orderinfoapi/checkOrder"),method:"POST",header:this.data.headInfo,data:n,success:function(e){var a=e.data;"200"===a.code?a.data?(wx.setStorageSync("cardCheckedOrderList",JSON.stringify(a.data)),o.getVehicleCardOrder(),(0,t.playAudio)("success"),o.setData({msgNotice:"success"})):((0,t.playAudio)("暂无订单"),o.setData({msgNotice:"暂无订单",isInFive:!0})):"422"===a.code?((0,t.playAudio)("码不正确"),o.setData({msgNotice:"码不正确",orderList:[],isInFive:!0})):((0,t.playAudio)("error"),o.setData({msgNotice:a.msg}))},fail:function(){(0,t.playAudio)("网络不给力"),o.setData({msgNotice:"网络不给力"})}})},checkTicket:function(e){var a=this,o="".concat(t.urlPrefix,"/order/qrcode/checkIn/").concat(this.data.orderNo);this.data.shiftscheduleno&&0===this.data.mode?o="".concat(t.urlPrefix,"/order/driver/qrcode/checkIn/").concat(this.data.orderNo,"/").concat(Boolean(this.data.originPage),"?shiftScheduleNo=").concat(this.data.shiftscheduleno,"&vehicleId=").concat(this.data.vehicleId):0===this.data.mode?o="".concat(t.urlPrefix,"/order/qrcode/checkIn/").concat(this.data.orderNo,"?vehicleId=").concat(this.data.vehicleId):1===this.data.mode&&(o="".concat(t.urlPrefix,"/order/acquirer/qrcode/checkIn/").concat(this.data.orderNo,"?vehicleId=").concat(this.data.vehicleId)),wx.request({url:o,method:"GET",header:this.data.headInfo,success:function(e){var o=e.data;"200"===o.code?((0,t.playAudio)("success"),a.setData({msgNotice:"success"}),a.getOrderDetail()):"400"===o.code?("订单已退票"===o.msg?(0,t.playAudio)("订单已退票"):"订单已检票"===o.msg?(0,t.playAudio)("订单已检票"):"未到检票时间"===o.msg?(0,t.playAudio)("未到检票时间"):"未有检票权限"===o.msg?(0,t.playAudio)("未有检票权限"):"非当前班次"===o.msg&&(0,t.playAudio)("非当前班次"),a.setData({msgNotice:o.msg,isInFive:!0}),a.getOrderDetail()):((0,t.playAudio)("error"),a.setData({msgNotice:o.msg}))},fail:function(){(0,t.playAudio)("网络不给力"),a.setData({msgNotice:"网络不给力"})}})}}); 
 			}); 	require("pages/checkTicketResult/checkTicketResult.js");
 		__wxRoute = 'pages/dispatchOrderList/dispatchOrderList';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/dispatchOrderList/dispatchOrderList.js';	define("pages/dispatchOrderList/dispatchOrderList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../utils/util.js"),e=require("../../utils/api.js"),a=getApp(),r=null;Page({data:{useMode:0,vcode:"",headInfo:{},queryText:"",startStationId:"",shiftScheduleId:"",filterObj:{type:"",statusIndex:0,stationIndex:0,timeIndex:0},statusList:[{id:0,name:"全部状态"},{id:1,name:"待接单"},{id:2,name:"已接单"},{id:3,name:"已拒单"},{id:4,name:"已完成"},{id:5,name:"乘客取消"}],orderStatusToColor:{"待接单":"status-red","已接单":"status-black","已拒单":"status-black","已完成":"status-black","乘客取消":"status-grey"},stationList:[{id:"",name:"全部站点"}],timeList:[{id:0,sortKey:"start_time",sortOrder:"asc",name:"出发时间最早"},{id:1,sortKey:"start_time",sortOrder:"desc",name:"出发时间最晚"},{id:2,sortKey:"create_time",sortOrder:"asc",name:"下单时间最早"},{id:3,sortKey:"create_time",sortOrder:"desc",name:"下单时间最晚"}],order:{isLoading:!1,page:1,list:[]},isPullDown:!1,maskObj:{isShow:!1,type:""},cancelReason:{item:{},value:0,name:"用户主动取消",list:["用户主动取消","无车辆安排","订单过时间","实际未出票","其他"]}},onLoad:function(t){var e=t.shiftScheduleId;e&&this.setData({shiftScheduleId:e})},onShow:function(){var t=this;this.data.vcode?(this.getSupplierOrderList(),this.getStationList()):a.loginStatus.then((function(e){var r=e.vcode,i=e.useMode;t.setData({vcode:r,useMode:i,headInfo:{cookie:"unionId=".concat(a.globalData.unionId)}}),t.getSupplierOrderList(),t.getStationList()}))},onPullDownRefresh:function(){this.setData({isPullDown:!0}),this.getSupplierOrderList()},onReachBottom:function(){var t=this.data.order.page;this.getSupplierOrderList(t+1)},onSearchInput:function(t){var e=this;this.setData({queryText:t.detail.value}),r&&clearTimeout(r),r=setTimeout((function(){e.getSupplierOrderList()}),500)},callPassenger:function(t){var e=t.currentTarget.dataset.tel;wx.makePhoneCall({phoneNumber:e})},getSupplierOrderList:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.setData({"order.isLoading":!0});var r=[],i=this.data.timeList[this.data.filterObj.timeIndex];wx.request({url:"".concat(t.urlPrefix,"/order/mobile/supplierOrderList/").concat(this.data.vcode),method:"GET",header:this.data.headInfo,data:{pageSize:20,page:a,orderStatus:this.data.filterObj.statusIndex,startStationId:this.data.stationList[this.data.filterObj.stationIndex].id,sortKey:i.sortKey,sortOrder:i.sortOrder,query:this.data.queryText,shiftScheduleId:this.data.shiftScheduleId?this.data.shiftScheduleId:""},success:function(e){var a=e.data;"200"!==a.code||(0,t.isEmpty)(a.data)||(r=a.data.list.map((function(e){return{orderNo:e.orderNo,orderStatus:e.orderStatus,tag:e.tag,amount:e.amount,orderStatusName:e.orderStatusName,formatStartTime:(0,t.formatDate)(e.startTime,"MM-dd ww hh:mm"),startAddress:e.startAddress,endAddress:e.endAddress,passengerNameJoin:e.passengerNameJoin,passengerLength:e.orderPassengers.length,vehicleNo:e.vehicleNo,driverId:e.driverId,telephone:e.telephone,telephoneText:e.telephone.replace(/(.{3}).*(.{4})/,"$1******$2")}})))},complete:function(){e.setData({"order.isLoading":!1}),1===a?e.setData({"order.list":[].concat(r)}):e.setData({"order.list":e.data.order.list.concat(r)}),(0,t.isEmpty)(r)||e.setData({"order.page":a}),e.data.isPullDown&&(wx.stopPullDownRefresh(),e.setData({isPullDown:!1}))}})},getStationList:function(){var a=this,r=[];wx.request({url:"".concat(e.api[this.data.useMode].getShiftOrderStationList).concat(this.data.vcode),method:"GET",header:this.data.headInfo,data:{shiftScheduleNos:"",orderType:2},success:function(e){var a=e.data;"200"!==a.code||(0,t.isEmpty)(a.data)||(r=a.data.map((function(t){return{id:t.id,name:t.name}})))},complete:function(){a.setData({stationList:[{id:"",name:"全部站点"}].concat(r)});var t=r.findIndex((function(t){return t.id===Number(a.data.startStationId)}));console.log(t),Number(t)>=0&&a.setData({"filterObj.stationIndex":t})}})},clickFilter:function(t){var e=t.currentTarget.dataset.tag;this.data.filterObj.type===e?this.setData({"filterObj.type":""}):this.setData({"filterObj.type":e})},selectStatus:function(t){var e=t.currentTarget.dataset.index;e!==this.data.filterObj.statusIndex&&(this.setData({"filterObj.statusIndex":e}),this.getSupplierOrderList()),this.setData({"filterObj.type":""})},selectStation:function(t){var e=t.currentTarget.dataset.index;e!==this.data.filterObj.stationIndex&&(this.setData({"filterObj.stationIndex":e}),this.getSupplierOrderList()),this.setData({"filterObj.type":"",startStationId:""})},selectTime:function(t){var e=t.currentTarget.dataset.index;e!==this.data.filterObj.timeIndex&&(this.setData({"filterObj.timeIndex":e}),this.getSupplierOrderList()),this.setData({"filterObj.type":""})},clickFilterMask:function(t){"mask"===t.target.dataset.tag&&this.setData({"filterObj.type":""})},jumpDispatchOrderDetailPage:function(t){var e=t.currentTarget.dataset;e.orderno&&wx.navigateTo({url:"/pages/dispatchOrderDetail/dispatchOrderDetail?orderNo=".concat(e.orderno)})},clickRefuseOrder:function(e){var a=e.target.dataset;(0,t.isEmpty)(a.item)||(this.setData({"cancelReason.item":Object.assign({},a.item)}),this.handleMask(!0,"cancel-reason"))},clickAcceptOrder:function(e){var a=e.target.dataset;if(!(0,t.isEmpty)(a.item)){var r=a.item,i=r.orderNo,s=r.orderStatus,n=r.tag,o=r.vehicleNo,d=r.driverId;wx.navigateTo({url:"/pages/orderConfirm/orderConfirm?orderNo=".concat(i,"&orderStatus=").concat(s,"&tag=").concat(n,"&vehicleNo=").concat(o,"&driverId=").concat(d)})}},clickConfirmChangeOrder:function(e){var a=e.target.dataset;if(!(0,t.isEmpty)(a.item)){var r=a.item,i=r.orderNo,s=r.orderStatus,n=r.tag,o=r.vehicleNo,d=r.driverId;wx.navigateTo({url:"/pages/orderConfirm/orderConfirm?orderNo=".concat(i,"&orderStatus=").concat(s,"&tag=").concat(n,"&vehicleNo=").concat(o,"&driverId=").concat(d)})}},clickCancelChangeOrder:function(e){var a=e.target.dataset;(0,t.isEmpty)(a.item)||(this.setData({"cancelReason.item":Object.assign({},a.item)}),this.handleMask(!0,"cancel-reason"))},handleMask:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.setData({"maskObj.isShow":t,"maskObj.type":e})},resetCancelReason:function(){this.setData({"cancelReason.item":{},"cancelReason.value":0,"cancelReason.name":this.data.cancelReason.list[0]})},cancelReasonClickCancel:function(){this.handleMask(),this.resetCancelReason()},cancelReasonClickConfirm:function(){this.handleMask();var t=this.data.cancelReason,e=t.item,a=t.name;12===e.orderStatus?this.cancelChangeOrder(e,a):this.cancelOrder(e,a)},handleCancelReasonChange:function(t){var e=t.detail.value;this.setData({"cancelReason.name":this.data.cancelReason.list[e[0]]})},cancelOrder:function(e,a){var r=this;(0,t.loading)(),wx.request({url:"".concat(t.urlPrefix,"/order/mobile/").concat(this.data.vcode),method:"DELETE",header:this.data.headInfo,data:{orderNo:e.orderNo,tag:t.tagParams[e.tag],remarks:a},success:function(e){(0,t.hideLoading)();var a=e.data;(0,t.showToast)(a.msg),r.resetCancelReason(),"200"===a.code&&r.getSupplierOrderList()},fail:function(){(0,t.hideLoading)(),(0,t.showToast)("网络异常，拒单失败")}})},cancelChangeOrder:function(e,a){var r=this;(0,t.loading)(),wx.request({url:"".concat(t.urlPrefix,"/supplier/order/").concat(this.data.vcode,"/rebook/failed"),method:"POST",header:this.data.headInfo,data:{orderNo:e.orderNo,tag:t.tagParams[e.tag]},success:function(e){(0,t.hideLoading)();var a=e.data;(0,t.showToast)(a.msg),r.resetCancelReason(),"200"===a.code&&r.getSupplierOrderList()},fail:function(){(0,t.hideLoading)(),(0,t.showToast)("网络异常，拒绝改签失败")}})}}); 
 			}); 	require("pages/dispatchOrderList/dispatchOrderList.js");
 		__wxRoute = 'pages/dispatchOrderDetail/dispatchOrderDetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/dispatchOrderDetail/dispatchOrderDetail.js';	define("pages/dispatchOrderDetail/dispatchOrderDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("../../@babel/runtime/helpers/objectSpread2"),e=require("../../utils/util.js"),t=getApp();Page({data:{vcode:"",headInfo:{},orderNo:"",orderInfo:{},passengerInfo:{},maskObj:{isShow:!1,type:""},cancelReason:{value:0,name:"用户主动取消",list:["用户主动取消","无车辆安排","订单过时间","实际未出票","其他"]},orderAuthority:0},onLoad:function(a){this.getFindStewardByUnionId(),this.setData({orderNo:a.orderNo||""})},onShow:function(){var a=this;t.loginStatus.then((function(e){var n=e.vcode;a.setData({vcode:n,headInfo:{cookie:"unionId=".concat(t.globalData.unionId)}}),a.data.orderNo&&a.getOrderDetail()}))},getFindStewardByUnionId:function(){var a=this;wx.request({url:"".concat(e.urlPrefix,"/steward/findStewardByUnionId?unionId=").concat(t.globalData.unionId),method:"GET",header:this.data.headInfo,success:function(t){var n=t.data;if("200"===n.code&&!(0,e.isEmpty)(n.data)){var o=Number(n.data.orderAuthority);a.setData({orderAuthority:o})}},complete:function(){}})},getOrderDetail:function(){var t=this;(0,e.loading)();var n={};wx.request({url:"".concat(e.urlPrefix,"/order/mobile/detail?orderNo=").concat(this.data.orderNo),method:"POST",header:this.data.headInfo,success:function(t){var o=t.data;"200"!==o.code||(0,e.isEmpty)(o.data)||(n=a(a({},o.data),{},{formatStartTime:(0,e.formatDate)(o.data.startingTime,"MM-dd ww hh:mm")}))},complete:function(){t.setData({orderInfo:n}),t.handlePassengerList(),(0,e.hideLoading)()}})},handlePassengerList:function(){var a=this.data.orderInfo.passengerInfoList,t={};a.forEach((function(a){var n=a.ticketTypeInfoEntity,o={certificateNumber:a.certificateNumber,passengerName:a.passengerName,ticketName:n.name};(0,e.isEmpty)(t[n.id])?t[n.id]=[o]:t[n.id].push(o)})),this.setData({passengerInfo:Object.assign(t)})},callPassengerPhone:function(a){var e=a.target.dataset;e.tel&&wx.makePhoneCall({phoneNumber:e.tel})},clickRefuseOrder:function(){this.handleMask(!0,"cancel-reason")},clickAcceptOrder:function(){var a=this.data.orderInfo,e=a.orderNo,t=a.orderStatus,n=a.tag,o=a.vehicleNo,r=a.driverId;wx.navigateTo({url:"/pages/orderConfirm/orderConfirm?orderNo=".concat(e,"&orderStatus=").concat(t,"&tag=").concat(n,"&vehicleNo=").concat(o,"&driverId=").concat(r)})},handleMask:function(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.setData({"maskObj.isShow":a,"maskObj.type":e})},resetCancelReason:function(){this.setData({"cancelReason.value":0,"cancelReason.name":this.data.cancelReason.list[0]})},cancelReasonClickCancel:function(){this.handleMask(),this.resetCancelReason()},cancelReasonClickConfirm:function(){this.handleMask();var a=this.data.cancelReason.name;this.cancelOrder(this.data.orderInfo,a)},handleCancelReasonChange:function(a){var e=a.detail.value;this.setData({"cancelReason.name":this.data.cancelReason.list[e[0]]})},cancelOrder:function(a,t){var n=this;(0,e.loading)(),wx.request({url:"".concat(e.urlPrefix,"/order/mobile/").concat(this.data.vcode),method:"DELETE",header:this.data.headInfo,data:{orderNo:a.orderNo,tag:e.tagParams[a.tag],remarks:t},success:function(a){(0,e.hideLoading)();var t=a.data;(0,e.showToast)(t.msg),n.resetCancelReason(),"200"===t.code&&n.getOrderDetail()},fail:function(){(0,e.hideLoading)(),(0,e.showToast)("网络异常，拒单失败")}})},clickReassignOrder:function(){var a=this.data.orderInfo,e=a.orderNo,t=a.orderStatus,n=a.tag,o=a.vehicleNo,r=a.driverId;wx.navigateTo({url:"/pages/orderConfirm/orderConfirm?orderNo=".concat(e,"&orderStatus=").concat(t,"&tag=").concat(n,"&vehicleNo=").concat(o,"&driverId=").concat(r,"&type=2")})},copyOrderInfo:function(){var a=this.data.orderInfo,t="";a.passengerInfoList.forEach((function(a){t?t+=",".concat(a.passengerName,":").concat(a.certificateNumber):t="".concat(a.passengerName,":").concat(a.certificateNumber)})),wx.setClipboardData({data:"订单号:".concat(a.orderNo,",第三方单号:").concat(a.thirdPartyOrderNo,",联系人手机:").concat(a.contact,",上车点:").concat(a.startingAdd,",下车点:").concat(a.endingAdd,",用车时间:").concat(a.startingTime,",乘客人数:").concat(a.passengerInfoList.length,",乘客信息:").concat(t),success:function(){(0,e.showToast)("复制成功")}})}}); 
 			}); 	require("pages/dispatchOrderDetail/dispatchOrderDetail.js");
 		__wxRoute = 'pages/setting/setting';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/setting/setting.js';	define("pages/setting/setting.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../utils/util.js"),t=getApp();Page({data:{headInfo:{},orderNotice:{isLoading:!1,isSelected:!1},storageSize:0,useMode:0},onLoad:function(){var e=this;t.loginStatus.then((function(i){var o=i.useMode;e.setData({useMode:o,"orderNotice.isSelected":t.globalData.msgPushSwitch,headInfo:{cookie:"unionId=".concat(t.globalData.unionId)}})})),this.setStorageSize()},onShow:function(){},setStorageSize:function(){var t=wx.getStorageInfoSync(),i="0KB";(0,e.isEmpty)(t)||!t.currentSize||(0,e.isEmpty)(t.keys)||(i=this.handleStorageSize(t.currentSize)),this.setData({storageSize:i})},handleStorageSize:function(t){return t<1024?"".concat(t,"KB"):t<1048576?"".concat((0,e.div)(t,1024).toFixed(1),"M"):"".concat((0,e.div)(t,1048576).toFixed(1),"G")},clearStorage:function(){wx.clearStorageSync(),(0,e.showToast)("清除成功"),this.setStorageSize()},syncOrderPushSwitch:function(){var i=this;this.setData({"orderNotice.isLoading":!0}),wx.request({url:"".concat(e.urlPrefix,"/order/mobile/syncOrderPushSwitch"),method:"GET",header:this.data.headInfo,data:{useMode:this.data.useMode,switchValue:!this.data.orderNotice.isSelected},success:function(o){(0,e.hideLoading)(),i.setData({"orderNotice.isLoading":!1}),"200"===o.data.code?(i.setData({"orderNotice.isSelected":!i.data.orderNotice.isSelected}),t.globalData.msgPushSwitch=i.data.orderNotice.isSelected):(0,e.showToast)("更新订单通知失败")},fail:function(){(0,e.hideLoading)(),i.setData({"orderNotice.isLoading":!1}),(0,e.showToast)("更新订单通知失败")}})},switchOrderNotice:function(){if(this.data.orderNotice.isLoading)return!1;(0,e.loading)(),this.syncOrderPushSwitch()}}); 
 			}); 	require("pages/setting/setting.js");
 		__wxRoute = 'pages/passenger/passenger';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/passenger/passenger.js';	define("pages/passenger/passenger.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../../utils/util.js")),a=e(require("../../utils/fetch.js")),s=e(require("../../utils/pinyin/pinyinUtil.js")),n=require("../../utils/ticketAction.js"),i=getApp(),r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];Page({data:{cities:[],openId:i.globalData.openId,vcode:i.globalData.vcode,shiftScheduleNo:"",query:"",passengerList:[],passWordAry:[],passWordObj:{}},onLoad:function(e){this.setData({shiftScheduleNo:e.shiftScheduleNo}),this.getPassengerList(),this._getPassengerList=t.default.throttle(this.getPassengerList,1e3)},onChange:function(e){},formatPassebger:function(e){var t={};e.forEach((function(e){var a=s.default.getFirstLetter(e.passengerName);a&&(a=(a=a.substring(0,1)).toUpperCase(),e._word=a,t[a]?t[a].push(e):t[a]=[e])}));var a=Object.keys(t).map((function(e){return{key:e,value:t[e]}}));a=a.sort((function(e,t){return r.indexOf(e.key)-r.indexOf(t.key)})),this.setData({passWordObj:t,passWordAry:a})},getPassengerList:function(){var e=this;return(0,a.default)({url:"/order/mobile/shiftPassengerList/"+i.globalData.vcode,data:{query:this.data.query,shiftScheduleNo:this.data.shiftScheduleNo}}).then((function(t){"200"===t.data.code?(e.formatPassebger(t.data.data.passengerList),e.setData({passengerList:t.data.data.passengerList})):e.setData({passengerList:[]})}))},handleTicketCheck:function(e){var t=e.currentTarget.dataset.item;wx.showModal({title:"提示",content:"确定乘客 ".concat(t.passengerName," 已到达可以检票？检票后不可取消哦！"),success:function(e){var a=this;e.confirm&&(1===t.checkInStatus?n.handleUnCheckClick:n.handleCheckClick)(t.passengerId,t.orderNo).then((function(e){e&&a.getPassengerList()}))}})},handleQueryChange:function(e){this.setData({query:e.detail.detail.value}),this._getPassengerList()},handleLocationClick:function(e){var t=e.currentTarget.dataset.item,a=t.startingLat,s=t.startingLon,n=t.endingLat,i=t.endingLon,r=t.road,o=t.endingAdd;wx.navigateTo({url:"/pages/map/map?startingLat=".concat(a,"&startingLon=").concat(s,"&startingAdd=").concat(r,"\n        &endingLat=").concat(n,"&endingLon=").concat(i,"&endingAdd=").concat(o)})},onPullDownRefresh:function(){this.getPassengerList(),wx.stopPullDownRefresh()},callPassengerPhone:function(e){var t=e.target.dataset.tel;t&&wx.makePhoneCall({phoneNumber:t})}}); 
 			}); 	require("pages/passenger/passenger.js");
 		__wxRoute = 'pages/shiftSchedule/shiftSchedule';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/shiftSchedule/shiftSchedule.js';	define("pages/shiftSchedule/shiftSchedule.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault"),a=require("../../@babel/runtime/helpers/objectSpread2"),i=t(require("../../utils/util.js")),e=t(require("../../utils/fetch.js")),s=getApp();Page({data:{userInfo:{},hasUserInfo:!1,current:"1",openId:s.globalData.openId,vcode:s.globalData.vcode,queryWait:"",queryHistory:"",waitList:[],historyList:[],cancelVisible:!1,payStatus:i.default.payStatus,waitObj:{isPullDown:!1,isReachBottom:!1,page:1},historyObj:{isPullDown:!1,isReachBottom:!1,page:1},isShowAns:!0},onLoad:function(t){this.getInitData()},onShow:function(){},getInitData:function(){this.getWaitShiftSchedule(),this.getHistoryShiftScheduler()},getWaitShiftSchedule:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=a.page,o=void 0===i?1:i,h=a.pageSize,r=void 0===h?20:h,d=this.data.waitObj.isPullDown,n=this.data.waitObj.isReachBottom;return(0,e.default)({url:"/order/mobile/shiftScheduleList/"+s.globalData.vcode,data:{pageSize:r,page:o,tabType:1}}).then((function(a){a.data&&"200"===a.data.code&&a.data.data?(d&&(d=!1),1===o?t.setData({waitList:t.formatDate(a.data.data.list),"waitObj.isPullDown":d}):(n&&(n=!1),t.setData({waitList:t.data.waitList.concat(t.formatDate(a.data.data.list)),"waitObj.isPullDown":d,"waitObj.isReachBottom":n}))):(d&&t.setData({waitList:[],"waitObj.isPullDown":!1}),n?t.setData({"waitObj.isReachBottom":!1,"waitObj.page":--t.data.waitObj.page}):t.setData({waitList:[],"waitObj.page":1}))}))},getHistoryShiftScheduler:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=a.page,o=void 0===i?1:i,h=a.pageSize,r=void 0===h?20:h,d=this.data.historyObj.isPullDown,n=this.data.historyObj.isReachBottom;return(0,e.default)({url:"/order/mobile/shiftScheduleList/"+s.globalData.vcode,data:{pageSize:r,page:o,tabType:2}}).then((function(a){a.data&&"200"===a.data.code&&a.data.data?(d&&(d=!1),1===o?t.setData({historyList:t.formatDate(a.data.data.list),"historyObj.isPullDown":d}):(n&&(n=!1),t.setData({historyList:t.data.historyList.concat(t.formatDate(a.data.data.list)),"historyObj.isPullDown":d,"historyObj.isReachBottom":n}))):(d&&t.setData({historyList:[],"historyObj.isPullDown":!1}),n?t.setData({"historyObj.isReachBottom":!1,"historyObj.page":--t.data.historyObj.page}):t.setData({historyList:[],"historyObj.page":1}))}))},formatDate:function(t){return t?t.map((function(t){return a(a({},t),{},{_startDate:i.default.formatDate(t.startDate,"MM-dd hh:mm"),_startDay:i.default.formatDate(t.startDay,"MM-dd")})})):[]},handleTabChange:function(t){var a=t.detail;this.setData({current:a.key}),"1"===this.data.current?this.data.waitObj.isPullDown||(this.setData({"waitObj.page":1,"waitObj.isPullDown":!0}),this.getWaitShiftSchedule({page:this.data.waitObj.page})):"2"===this.data.current&&(this.data.historyObj.isPullDown||(this.setData({"historyObj.page":1,"historyObj.isPullDown":!0}),this.getHistoryShiftScheduler({page:this.data.historyObj.page})))},handleOkClick:function(t){var a=t.target.dataset.item,i=a.orderNo,e=a.vehicleNo,s=a.driverId,o=a.stewardId,h=a.tag;wx.navigateTo({url:"/pages/orderConfirm/orderComfirm?orderNo=".concat(i,"&vehicleNo=").concat(e,"&driverId=").concat(s,"&stewardId=").concat(o,"&tag=").concat(h)})},onPullDownRefresh:function(){"1"===this.data.current?this.data.waitObj.isPullDown||this.data.waitObj.isReachBottom||(this.setData({"waitObj.page":1,"waitObj.isPullDown":!0}),this.getWaitShiftSchedule({page:this.data.waitObj.page})):"2"===this.data.current&&(this.data.historyObj.isPullDown||this.data.historyObj.isReachBottom||(this.setData({"historyObj.page":1,"historyObj.isPullDown":!0}),this.getHistoryShiftScheduler({page:this.data.historyObj.page}))),wx.stopPullDownRefresh()},handlePassengerClick:function(t){var a=t.target.dataset.item.shiftScheduleNo;wx.navigateTo({url:"/pages/passenger/passenger?shiftScheduleNo=".concat(a)})},handleOrderClick:function(t){var a=t.target.dataset.item.shiftScheduleNo;wx.navigateTo({url:"/pages/shiftOrder/shiftOrder?shiftScheduleNo=".concat(a)})},onReachBottom:function(){if("1"===this.data.current){if(this.data.waitObj.isReachBottom)return!1;this.setData({"waitObj.page":++this.data.waitObj.page,"waitObj.isReachBottom":!0}),this.getWaitShiftSchedule({page:this.data.waitObj.page})}else if("2"===this.data.current){if(this.data.historyObj.isReachBottom)return!1;this.setData({"historyObj.page":++this.data.historyObj.page,"historyObj.isReachBottom":!0}),this.getHistoryShiftScheduler({page:this.data.historyObj.page})}},closeAns:function(){this.setData({isShowAns:!1})}}); 
 			}); 	require("pages/shiftSchedule/shiftSchedule.js");
 		__wxRoute = 'pages/scan/scan';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/scan/scan.js';	define("pages/scan/scan.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=(e(require("../../utils/util.js")),e(require("../../utils/fetch.js")),e(require("../../utils/scan.js")));Page({data:{},onLoad:function(e){},onTabItemTap:function(e){setTimeout((function(){(0,t.default)()}),100)}}); 
 			}); 	require("pages/scan/scan.js");
 		__wxRoute = 'pages/orderConfirm/orderConfirm';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/orderConfirm/orderConfirm.js';	define("pages/orderConfirm/orderConfirm.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../utils/util.js"),i=getApp();Page({data:{vcode:"",headInfo:{},orderNo:"",orderStatus:null,tag:null,vehicleNo:"",driverId:null,type:1,vehicle:{list:[],index:-1},driver:{list:[],index:-1},isConfrimLoading:!1},onLoad:function(e){var t=this;this.setData({orderNo:e.orderNo||"",orderStatus:e.orderStatus?Number(e.orderStatus):null,tag:e.tag?Number(e.tag):null,vehicleNo:e.vehicleNo||"",driverId:e.driverId?Number(e.driverId):null,type:e.type||1}),i.loginStatus.then((function(e){var a=e.vcode;t.setData({vcode:a,headInfo:{cookie:"unionId=".concat(i.globalData.unionId)}}),t.getVehicleList(),t.getDriverList()}))},onShow:function(){},getVehicleList:function(){var i=this,t=[],a=-1;wx.request({url:"".concat(e.urlPrefix,"/order/mobile/vehicle/").concat(this.data.vcode),method:"GET",header:this.data.headInfo,success:function(r){var d=r.data;"200"!==d.code||(0,e.isEmpty)(d.data)||(t=d.data,d.data.some((function(e,t){e.vehicleNo===i.data.vehicleNo&&(a=t)})))},complete:function(){i.setData({"vehicle.list":t,"vehicle.index":a})}})},getDriverList:function(){var i=this,t=[],a=-1;wx.request({url:"".concat(e.urlPrefix,"/order/mobile/driver/").concat(this.data.vcode),method:"GET",header:this.data.headInfo,success:function(r){var d=r.data;"200"!==d.code||(0,e.isEmpty)(d.data)||(t=d.data,d.data.some((function(e,t){e.id===i.data.driverId&&(a=t)})))},complete:function(){i.setData({"driver.list":t,"driver.index":a})}})},vehiclePickerChange:function(e){var i=e.detail;this.setData({"vehicle.index":i.value})},driverPickerChange:function(e){var i=e.detail;this.setData({"driver.index":i.value})},clickConfirm:function(){1===this.data.type?"12"===this.data.orderStatus?this.handleConfirmChangeOrder():this.handleConfirmOrder():this.handleReassignOrder()},handleConfirmOrder:function(){var i=this;this.setData({isConfrimLoading:!0});var t=this.data,a=t.vehicle,r=t.driver,d="",o="",n="",s="",c="";if(a.index>-1&&(d=a.list[a.index].vehicleNo,o=a.list[a.index].id),r.index>-1){var h=r.list[r.index];n=h.id,s=h.mobile,c=h.name}wx.request({url:"".concat(e.urlPrefix,"/order/mobile/").concat(this.data.vcode),method:"POST",header:this.data.headInfo,data:{orderNo:this.data.orderNo,tag:e.tagParams[this.data.tag],vehicleNos:d,driverIds:String(n),vehicleIds:String(o),driverMobiles:s,driverNames:c},success:function(t){var a=t.data;(0,e.showToast)(a.msg),"200"===a.code?setTimeout((function(){i.setData({isConfrimLoading:!1}),wx.navigateBack({delta:1})}),2e3):i.setData({isConfrimLoading:!1})},fail:function(){i.setData({isConfrimLoading:!1}),(0,e.showToast)("请求异常，请稍后重试")}})},handleConfirmChangeOrder:function(){var i=this;this.setData({isConfrimLoading:!0});var t="",a="",r="",d="";if(vehicle.index>-1&&(t=vehicle.list[vehicle.index].vehicleNo),driver.index>-1){var o=driver.list[driver.index];a=o.id,r=o.mobile,d=o.name}wx.request({url:"".concat(e.urlPrefix,"/supplier/order/").concat(this.data.vcode,"/rebook/success"),method:"POST",header:this.data.headInfo,data:{orderNo:this.data.orderNo,tag:e.tagParams[this.data.tag],vehicleNos:t,driverIds:String(a),driverMobiles:r,driverNames:d},success:function(t){var a=t.data;(0,e.showToast)(a.msg),"200"===a.code?setTimeout((function(){i.setData({isConfrimLoading:!1}),wx.navigateBack({delta:1})}),2e3):i.setData({isConfrimLoading:!1})},fail:function(){i.setData({isConfrimLoading:!1}),(0,e.showToast)("请求异常，请稍后重试")}})},handleReassignOrder:function(){var i=this;this.setData({isConfrimLoading:!0});var t=this.data,a=t.vehicle,r=t.driver,d="",o="";a.index>-1&&(d=a.list[a.index].id),r.index>-1&&(o=r.list[r.index].id),wx.request({url:"".concat(e.urlPrefix,"/order/mobile/reassign"),method:"POST",header:this.data.headInfo,data:{vcode:this.data.vcode,orderNo:this.data.orderNo,driverId:o,vehicleId:d},success:function(t){var a=t.data;(0,e.showToast)(a.msg),"200"===a.code?setTimeout((function(){i.setData({isConfrimLoading:!1}),wx.navigateBack({delta:1})}),2e3):i.setData({isConfrimLoading:!1})},fail:function(){i.setData({isConfrimLoading:!1}),(0,e.showToast)("请求异常，请稍后重试")}})}}); 
 			}); 	require("pages/orderConfirm/orderConfirm.js");
 		__wxRoute = 'pages/scanResult/scanResult';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/scanResult/scanResult.js';	define("pages/scanResult/scanResult.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=(e(require("../../utils/util.js")),e(require("../../utils/fetch.js"))),r=e(require("../../utils/scan.js"));Page({data:{orderNo:"",checkSuccess:!1,msg:"",orderInfo:{}},onLoad:function(e){var t=e.orderNo,r=e.msg;r&&this.setData({msg:r}),t&&(this.setData({orderNo:t,checkSuccess:!0}),this.getOrderDetail(t))},getOrderDetail:function(e){var r=this;return(0,t.default)({url:"/order/mobile/detail?orderNo="+e,method:"post",data:{orderNo:e}}).then((function(e){if("200"===e.data.code){var t=e.data.data;r.setData({orderInfo:t}),console.log(t)}else wx.showToast({title:"获取订单信息失败",icon:"none"})}))},handleScanClick:function(){(0,r.default)(!0)}}); 
 			}); 	require("pages/scanResult/scanResult.js");
 		__wxRoute = 'pages/shiftOrder/shiftOrder';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/shiftOrder/shiftOrder.js';	define("pages/shiftOrder/shiftOrder.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../../utils/util.js")),a=e(require("../../utils/fetch.js")),n=require("../../utils/orderAction.js"),i=getApp();Page({data:{userInfo:{},hasUserInfo:!1,current:"1",openId:i.globalData.openId,vcode:i.globalData.vcode,queryWait:"",waitList:[],cancelVisible:!1,payStatus:t.default.payStatus,productType:t.default.productType,cancelReason:{item:{},value:0,name:"用户主动取消",list:["用户主动取消","无车辆安排","订单过时间","实际未出票","其他"]}},onLoad:function(e){this.setData({shiftScheduleNo:e.shiftScheduleNo}),this._getWaitOrder=t.default.throttle(this.getWaitOrder,1e3)},getInitData:function(){this.getWaitOrder()},onShow:function(){this.getInitData()},getWaitOrder:function(){var e=this;return(0,a.default)({url:"/order/mobile/shiftOrderList/"+i.globalData.vcode,data:{pageSize:999,page:1,tabType:2,useTimeSort:0,createTimeSort:1,orderStatus:"0",shiftScheduleNo:this.data.shiftScheduleNo,query:this.data.queryWait}}).then((function(t){"200"===t.data.code?e.setData({waitList:t.data.data.list}):wx.showToast({title:"获取待处理订单失败",icon:"none"})}))},handleWaitQueryChange:function(e){this.setData({queryWait:e.detail.detail.value}),this._getWaitOrder()},handleCancelClick:function(e){var t=e.target.dataset,a=t.item;t.type;this.setData({"cancelReason.item":Object.assign({},a)}),this.openCancelReasonPop()},handleOkClick:function(e){var t=e.currentTarget.dataset.item,a=t.orderNo,n=t.vehicleNo,i=t.driverId,o=t.stewardId,s=t.tag;wx.navigateTo({url:"/pages/orderConfirm/orderComfirm?orderNo=".concat(a,"&vehicleNo=").concat(n,"&driverId=").concat(i,"&stewardId=").concat(o,"&tag=").concat(s)})},handleCancelChangeClick:function(e){var t=this,a=e.target.dataset,i=a.item;a.type;(0,n.cancelChangeOrder)(i,(function(){t.setData({waitList:[],waitPage:1}),t.getWaitOrder()}))},onPullDownRefresh:function(){this.getInitData(),wx.stopPullDownRefresh()},handleItemClick:function(e){var t=e.currentTarget.dataset.item.orderNo;wx.navigateTo({url:"/pages/orderDetail/orderDetail?orderNo=".concat(t)})},closeMask:function(){this.setData({"maskObj.isShow":!1,"maskObj.type":""})},resetCancelReason:function(){this.setData({"cancelReason.item":{},"cancelReason.value":0,"cancelReason.name":this.data.cancelReason.list[0]})},openCancelReasonPop:function(){this.setData({"maskObj.isShow":!0,"maskObj.type":"cancel-reason"})},cancelReasonClickCancel:function(){this.closeMask(),this.resetCancelReason()},cancelReasonClickConfirm:function(){var e=this;this.closeMask();var n=this.data.cancelReason,o=n.item,s=n.name;(0,a.default)({method:"delete",url:"/order/mobile/"+i.globalData.vcode,data:{orderNo:o.orderNo,tag:t.default.tagParams[o.tag],remarks:s}}).then((function(t){wx.showToast({title:t.data.msg,icon:"none",duration:2e3}),e.resetCancelReason(),e.getInitData()}))},handleCancelReasonChange:function(e){var t=e.detail.value;this.setData({"cancelReason.name":this.data.cancelReason.list[t[0]]})}}); 
 			}); 	require("pages/shiftOrder/shiftOrder.js");
 		__wxRoute = 'pages/orderDetail/orderDetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/orderDetail/orderDetail.js';	define("pages/orderDetail/orderDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault"),e=t(require("../../utils/util.js")),a=t(require("../../utils/fetch.js")),n=(t(require("../../utils/scan.js")),require("../../utils/orderAction.js")),r=require("../../utils/ticketAction.js"),i=getApp();Page({data:{openId:i.globalData.openId,vcode:i.globalData.vcode,orderNo:"",orderDetail:{},ticketTypes:{},util:e.default},onLoad:function(t){this.setData({orderNo:t.orderNo})},onShow:function(){this.getOrderDetail()},getPassengerList:function(t){var e=t.passengerInfoList,a={};e.forEach((function(t){var e=t.ticketTypeInfoEntity.name;a[e]?a[e].push(t):a[e]=[t]})),this.setData({ticketTypes:a})},getOrderDetail:function(){var t=this;return(0,a.default)({url:"/order/mobile/detail?orderNo="+this.data.orderNo,method:"POST"}).then((function(a){if("200"===a.data.code){var n=a.data.data;n._startDate=e.default.formatDate(n.startingTime,"yyyy-MM-dd www"),n._startTime=e.default.formatDate(n.startingTime,"hh:mm"),t.getPassengerList(n),t.setData({orderDetail:a.data.data})}else wx.showToast({title:"获取订单失败",icon:"none"})}))},handlePhoneCall:function(t){var e=t.currentTarget.dataset.phone;wx.makePhoneCall({phoneNumber:e})},preAllCheckClick:function(){var t=this;wx.showModal({title:"提示",content:"确定订单乘客全部验票",success:function(e){e.confirm&&t.handleaAllCheckClick()}})},handleaAllCheckClick:function(){var t=this;return(0,a.default)({url:"/order/mobile/checkInAll/"+this.data.orderNo,method:"get"}).then((function(e){e.data&&"200"===e.data.code&&(wx.showToast({title:e.data.msg,icon:"none",duration:2e3}),t.getOrderDetail())}))},handleCheckClick:function(t){var e=this,a=t.target.dataset.passengerid;(0,r.handleCheckClick)(a,this.data.orderNo).then((function(t){t&&e.getOrderDetail()}))},handleUnCheckClick:function(t){var e=this,a=t.target.dataset.passengerid;(0,r.handleUnCheckClick)(a,this.data.orderNo).then((function(t){t&&e.getOrderDetail()}))},handleOkClick:function(t){var e=t.target.dataset.item,a=e.orderNo,n=e.vehicleNo,r=e.driverId,i=e.stewardId,o=e.tag;wx.navigateTo({url:"/pages/orderConfirm/orderComfirm?orderNo=".concat(a,"&vehicleNo=").concat(n,"&driverId=").concat(r,"&stewardId=").concat(i,"&tag=").concat(o)})},handleCancelClick:function(t){var e=this,a=t.target.dataset.item;(0,n.cancelOrder)(a,(function(){e.getOrderDetail()}))},handleLocationClick:function(){var t=this.data.orderDetail,e=t.startingAdd,a=t.startingLat,n=t.startingLon,r=t.endingAdd,i=t.endingLat,o=t.endingLon;wx.navigateTo({url:"/pages/map/map?startingAdd=".concat(e,"&startingLat=").concat(a,"&startingLon=").concat(n,"&endingAdd=").concat(r,"&endingLat=").concat(i,"&endingLon=").concat(o)})},callPassengerPhone:function(t){var e=t.target.dataset.tel;e&&wx.makePhoneCall({phoneNumber:e})}}); 
 			}); 	require("pages/orderDetail/orderDetail.js");
 		__wxRoute = 'pages/map/map';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/map/map.js';	define("pages/map/map.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/objectSpread2");Page({data:{markers:[{iconPath:"/img/bus-active.png",id:0,latitude:23.099994,longitude:113.32452,width:20,height:20,callout:{content:"",fontSize:16,borderRadius:5,borderWidth:1,borderColor:"#2d8cf0",bgColor:"#fff",padding:10}}],start:{latitude:"",longitude:"",address:""},end:{latitude:"",longitude:"",address:""},flag:"start"},onLoad:function(t){this.setData({start:{latitude:1*t.startingLat,longitude:1*t.startingLon,address:t.startingAdd},end:{latitude:1*t.endingLat,longitude:1*t.endingLon,address:t.endingAdd}}),this.changeMarker()},markertap:function(t){},handleCallouttap:function(t){var a=this.data[this.data.flag];wx.openLocation({latitude:a.latitude,longitude:a.longitude,name:a.address,scale:28})},handleStationClick:function(t){var a=t.currentTarget.dataset.type;a!==this.data.flag&&(this.setData({flag:a}),this.changeMarker())},changeMarker:function(){var a=this.data,e=a.markers,d=a.flag,i=e[0];(i=t(t({},i),this.data[d])).callout.content=this.data[d].address,e[0]=i,this.setData({markers:e})}}); 
 			}); 	require("pages/map/map.js");
 		__wxRoute = 'pages/planControl/planControl';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/planControl/planControl.js';	define("pages/planControl/planControl.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault"),a=t(require("../../utils/util.js")),e=t(require("../../utils/calendar.js")),i=getApp();Page({data:{vcode:"",headInfo:{},sixDayArrs:[],calChangeDate:!0,slideCalendar:null,queryDate:a.default.formatDate(new Date,"yyyy-MM-dd"),startDate:(new Date).getTime(),filterTime:(new Date).getTime(),showOperate:!1,page:1,pages:1,list:[],isLoading:!1,isPullDown:!1,noMore:!1,endCityList:[],startCityList:[],endStationList:[],startStationList:[],scheduleDayArr:{},selectItem:{},isClearFilter:!1,scrollTops:0,toViewId:"",ftid:"",firstInitList:!1,shiftAuthorityMap:{},hasAuthor:!1,tabType:1,showCustomScroll:!0},listData:{normalSaleDays:60,endDate:new Date,startStationId:0,endStationId:0,ssid:"",scrollTop:0,startCityId:0,endCityId:0},onLoad:function(t){var e=this;this.getFindStewardByUnionId(),this.listData.endDate=a.default.formatDate(a.default.addTime(this.listData.endDate,"3M"),"yyyy-MM-dd"),this.init(),this.data.vcode?(this.getdispatchScheduleList(1),this.getStationList(),this.getScheduleDay(),this.getStartCityList(),this.getEndCityList()):i.loginStatus.then((function(t){var a=t.vcode;e.setData({vcode:a,headInfo:{cookie:"unionId=".concat(i.globalData.unionId)}}),e.getdispatchScheduleList(1),e.getStationList(),e.getScheduleDay(),e.getStartCityList(),e.getEndCityList()}))},onReady:function(){},onShow:function(){wx.getStorageSync("refresh")&&(this.setData({list:[],isClearFilter:!0}),this.getdispatchScheduleList(1),wx.removeStorageSync("refresh"),this.setData({showOperate:!1}))},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){this.listData.startStationId=0,this.listData.endStationId=0,this.listData.startCityId=0,this.listData.endCityId=0,this.setData({page:1,list:[],isPullDown:!0,isClearFilter:!0,noMore:!1}),this.getdispatchScheduleList(),this.getStationList()},getFindStewardByUnionId:function(){var t=this;wx.request({url:"".concat(a.default.urlPrefix,"/steward/findStewardByUnionId?unionId=").concat(i.globalData.unionId),method:"GET",header:this.data.headInfo,success:function(e){var i=e.data;if(console.log(i),"200"===i.code&&!a.default.isEmpty(i.data)){var s=i.data.shiftAuthority?i.data.shiftAuthority.split(","):[],d={},n=s.length>0;s.forEach((function(t){d[t]=!0})),t.setData({shiftAuthorityMap:d,hasAuthor:n})}},complete:function(){}})},scrolltoupper:function(){this.listData.startStationId=0,this.listData.endStationId=0,this.listData.startCityId=0,this.listData.endCityId=0,this.setData({page:1,list:[],isPullDown:!0,isClearFilter:!0,noMore:!1}),this.getdispatchScheduleList()},scrolltolower:function(){if(!this.data.isLoading){var t=this.data,a=t.page,e=t.pages;console.log(a),(a+=1)>e?this.setData({noMore:!0}):(this.setData({page:a}),this.getdispatchScheduleList(a))}},onReachBottom:function(){if(!this.data.isLoading){var t=this.data,a=t.page;(a+=1)>t.pages?this.setData({noMore:!0}):(this.setData({page:a}),this.getdispatchScheduleList(a))}},onShareAppMessage:function(){},init:function(t){this.initCalendar()},showOperate:function(t){var a=t.target.dataset,e=a.ssid,i=a.index;this.listData.ssid=e,this.setData({showOperate:!0,selectItem:this.data.list[i]})},hideOperate:function(t){"mask"===t.target.dataset.tag&&this.setData({showOperate:!1})},openEditDriverVehicle:function(t){if(this.data.shiftAuthorityMap[5]){var a=t.target.dataset,e=a.ssid,i=a.index;this.listData.ssid=e,this.setData({selectItem:this.data.list[i]}),this.openSch(t)}},toOrderList:function(t){var a=t.currentTarget.dataset.ssid;wx.navigateTo({url:"/pages/dispatchOrderList/dispatchOrderList?shiftScheduleId="+a})},initCalendar:function(){console.log("init calendar"),this.slideCalendar=this.selectComponent("#slideCalendar");var t=this.slideCalendar.data,a=this.data;t.querydate=new Date(a.queryDate.replace(/-/g,"/")),t.startdate=a.startDate,t.enddate=this.listData.endDate,this.slideCalendar.init()},sixDateSel:function(t){var e=this,i=(e.listData,a.default.formatDate(new Date(e.data.queryDate),"yyyy-MM-dd")),s=t.detail.detail.date;if(i==s)return this.setData({calChangeDate:!0}),!1;setTimeout((function(){e.setData({calChangeDate:!0})}),600),s!=i&&(s=a.default.parseDate(s),e.resetState(s),e.getdispatchScheduleList(1),this.getStationList())},resetState:function(t){var e=a.default.formatDate(new Date(t),"yyyy-MM-dd");this.listData.startStationId=0,this.listData.endStationId=0,this.listData.startCityId=0,this.listData.endCityId=0,this.setData({list:[],queryDate:e,isClearFilter:!0})},dateAdd:function(t,e){return a.default.addTime(e,"".concat(parseInt(t,10),"D"))},toggleCalendar:function(t){var i=this,s=i.listData,d=a.default.formatDate(new Date,"yyyy-MM-dd"),n=(s.endDate.split("-"),a.default.formatDate(i.dateAdd(s.normalSaleDays-1,new Date),"yyyy-MM-dd"));e.default.show({startDate:d,normalEndTime:n,endDate:s.endDate,selectDate:a.default.formatDate(new Date(i.data.queryDate),"yyyy-MM-dd"),basePageUrl:"../../../../",tipsMessage:"",scheduleDayArr:this.data.scheduleDayArr,soursePath:"bus",callback:function(t){var e=a.default.formatDate(new Date(i.data.queryDate),"yyyy-MM-dd"),s=t.date;s!=e&&(s=a.default.parseDate(s),i.resetState(s),i.getdispatchScheduleList(1),i.initCalendar())}})},filterDpt:function(t){var a=t.detail.stationId;this.listData.startStationId!==a&&(this.listData.startStationId=a,this.setData({list:[],isClearFilter:!1}),this.getdispatchScheduleList(1))},filterDes:function(t){var a=t.detail.stationId;this.listData.endStationId!==a&&(this.listData.endStationId=a,this.setData({list:[],isClearFilter:!1}),this.getdispatchScheduleList(1))},filterStartCity:function(t){var e=t.detail.cityItem;if(!a.default.isEmpty(e)){var i=e.cityId;this.listData.startCityId!==i&&(this.listData.startCityId=i,this.setData({list:[],isClearFilter:!1}),this.getdispatchScheduleList(1))}},filterEndCity:function(t){var e=t.detail.cityItem;if(!a.default.isEmpty(e)){var i=e.cityId;this.listData.endCityId!==i&&(this.listData.endCityId=i,this.setData({list:[],isClearFilter:!1}),this.getdispatchScheduleList(1))}},changePrice:function(){a.default.showToast("分段计价暂不支持修改")},openSch:function(t){var a=t.currentTarget.dataset.id,e="displayPage=".concat(a);if("01"===a&&(e+="&ssid=".concat(this.listData.ssid)),"02"===a&&(e+="&ssid=".concat(this.listData.ssid)),"03"===a){var i=this.data.selectItem.isMutiPrice;e+="&ssid=".concat(this.listData.ssid,"&isMutiPrice=").concat(i)}"04"!==a&&"05"!==a||(1===Number(this.data.selectItem.shiftType)&&(e="displayPage=04&ssid=".concat(this.listData.ssid)),2!==Number(this.data.selectItem.shiftType)&&3!==Number(this.data.selectItem.shiftType)||(e="displayPage=05&ssid=".concat(this.listData.ssid))),"06"===a&&(e="displayPage=06&ssid=".concat(this.listData.ssid)),"07"===a&&(e="displayPage=07&ssid=".concat(this.listData.ssid,"&shiftId=").concat(this.data.selectItem.shiftId)),"08"===a&&(e="displayPage=08&ssid=".concat(this.listData.ssid,"&shiftId=").concat(this.data.selectItem.shiftId)),"09"===a&&(e="displayPage=09&ssid=".concat(this.listData.ssid,"&shiftId=").concat(this.data.selectItem.shiftId)),wx.navigateTo({url:"/pages/planControl/components/openSch/openSch?"+e})},getdispatchScheduleList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=this.data.tabType;1===e&&this.setData({list:[],page:1,pages:1,noMore:!1}),this.setData({isLoading:!0});var d={page:e,pageSize:20,startDay:this.data.queryDate,unionId:i.globalData.unionId,startDayTimeType:1===s?2:1};if(0===Number(this.listData.startStationId)?d.startStationId="":d.startStationId=this.listData.startStationId,0===Number(this.listData.endStationId)?d.endStationId="":d.endStationId=this.listData.endStationId,0===Number(this.listData.startCityId))d.startCityName="";else{var n=this.listData.startCityId,o=this.data.startCityList,l=o.findIndex((function(t){return t.cityId===n}));l>-1&&(d.startCityName=o[l].cityName)}if(0===Number(this.listData.endCityId))d.endCityName="";else{var r=this.listData.endCityId,h=this.data.endCityList,c=h.findIndex((function(t){return t.cityId===r}));c>-1&&(d.endCityName=h[c].cityName)}a.default.loading(),wx.request({url:"".concat(a.default.urlPrefix,"/steward/dispatchScheduleList"),method:"GET",header:this.data.headInfo,data:d,success:function(e){var i=e.data;"200"!==i.code||a.default.isEmpty(i.data)||t.setData({list:t.data.list.concat(i.data.list),pages:i.data.pages})},complete:function(){if(a.default.hideLoading(),t.setData({isLoading:!1,calChangeDate:!0}),t.data.isPullDown&&(wx.stopPullDownRefresh(),t.setData({isPullDown:!1,calChangeDate:!0})),!t.data.firstInitList&&1===e){for(var i=Date.now(),s=0,d=t.data.list.length;s<d;s++){var n=(t.data.list[s].startDay+" "+t.data.list[s].startTime).replace(/\-/g,"/");if(Date.parse(n)>=i)break}var o=t;setTimeout((function(){wx.nextTick((function(){o.setInview()}))}),60)}1!==e&&t.setData({firstInitList:!0})}})},scroll:function(t){var a=this,e=t.detail.scrollTop;0!==this.listData.scrollTop?(e-this.listData.scrollTop<0&&wx.nextTick((function(){a.setData({firstInitList:!0})})),this.listData.scrollTop=e):this.listData.scrollTop=e},setInview:function(){this.setData({toViewId:"ftid"})},getStationList:function(){var t=this;wx.request({url:"".concat(a.default.urlPrefix,"/steward/schedule/stationList"),method:"GET",header:this.data.headInfo,data:{startDay:this.data.queryDate,unionId:i.globalData.unionId},success:function(e){var i=e.data;if("200"===i.code&&!a.default.isEmpty(i.data)){var s=i.data,d={stationId:0,stationName:"全部站点"};a.default.isEmpty(s.endStationList)||s.endStationList.unshift(d),a.default.isEmpty(s.startStationList)||s.startStationList.unshift(d),t.setData({endStationList:s.endStationList,startStationList:s.startStationList})}},complete:function(){}})},getScheduleDay:function(){var t=this;wx.request({url:"".concat(a.default.urlPrefix,"/steward/scheduleDay"),method:"GET",header:this.data.headInfo,data:{unionId:i.globalData.unionId},success:function(e){var i=e.data,s={},d=new Date,n="".concat(d.getFullYear(),"-").concat(d.getMonth()+1,"-01"),o=new Date(n.replace(/-/g,"/")).getTime(),l=new Date(t.listData.endDate.replace(/-/g,"/")).getTime();"200"!==i.code||a.default.isEmpty(i.data)||(i.data.forEach((function(t){var a=new Date(t.replace(/-/g,"/")).getTime();a<l&&a>=o&&(s[t]=!0)})),t.setData({scheduleDayArr:s}))},complete:function(){}})},getStartCityList:function(){var t=this,e=this.data.vcode;wx.request({url:"".concat(a.default.urlPrefix,"/steward/startCities"),method:"GET",header:this.data.headInfo,data:{vcode:e},success:function(e){var i=e.data;if("200"===i.code&&!a.default.isEmpty(i.data)){var s=i.data;a.default.isEmpty(s)||s.unshift({cityId:0,cityName:"全部城市"}),t.setData({startCityList:s})}},complete:function(){}})},getEndCityList:function(){var t=this,e=this.data.vcode;wx.request({url:"".concat(a.default.urlPrefix,"/steward/endCities"),method:"GET",header:this.data.headInfo,data:{vcode:e},success:function(e){var i=e.data;if("200"===i.code&&!a.default.isEmpty(i.data)){var s=i.data;a.default.isEmpty(s)||s.unshift({cityId:0,cityName:"全部城市"}),t.setData({endCityList:s})}},complete:function(){}})},switchTab:function(t){var a=t.currentTarget.dataset.type;this.setData({showOperate:!1}),a!==this.data.tabType&&(this.setData({tabType:a}),this.getdispatchScheduleList(1))},preventTouchMove:function(){},handlescroll:function(){this.setData({showCustomScroll:!1})}}); 
 			}); 	require("pages/planControl/planControl.js");
 		__wxRoute = 'pages/planControl/components/calendar/calendar';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/planControl/components/calendar/calendar.js';	define("pages/planControl/components/calendar/calendar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../@babel/runtime/helpers/interopRequireDefault"),e=require("../../../../@babel/runtime/helpers/typeof"),a=t(require("../../../../utils/util.js")),i=getApp(),s={},r="";Page({festivals:{"2019-02-04":"除夕","2019-02-05":"春节","2019-02-19":"元宵","2019-04-05":"清明","2019-06-07":"端午","2019-08-07":"七夕","2019-09-13":"中秋","2019-10-07":"重阳","2020-01-24":"除夕","2020-01-25":"春节","2020-02-08":"元宵","2020-04-05":"清明","2020-06-25":"端午","2020-08-25":"七夕","2020-10-01":"中秋","2020-10-25":"重阳","2022-01-31":"除夕","2022-02-01":"春节","2022-02-15":"元宵","2022-04-04":"清明","2022-06-03":"端午","2022-08-04":"七夕","2022-09-10":"中秋","2022-10-04":"重阳"},holidays:["2018-12-30","2018-12-31","2019-01-01","2019-02-04","2019-02-05","2019-02-06","2019-02-07","2019-02-08","2019-02-09","2019-02-10","2019-04-05","2019-04-06","2019-04-07","2019-05-01","2019-05-02","2019-05-03","2019-05-04","2019-06-07","2019-06-08","2019-06-09","2019-09-13","2019-09-14","2019-09-15","2019-10-01","2019-10-02","2019-10-03","2019-10-04","2019-10-05","2019-10-06","2019-10-07","2022-01-02","2022-01-03","2022-02-02","2022-02-03","2022-02-04","2022-02-05","2022-02-06","2022-04-03","2022-04-04","2022-04-30","2022-05-02","2022-05-03","2022-05-04","2022-06-04","2022-06-05","2022-09-11","2022-09-12","2022-10-02","2022-10-03","2022-10-04","2022-10-05","2022-10-06","2022-10-07"],workdays:["2018-12-29","2019-02-02","2019-02-03","2019-04-28","2019-05-05","2019-09-29","2019-10-12","2022-01-29","2022-01-30","2022-04-02","2022-04-24","2022-05-07","2022-10-08","2022-10-09"],data:{totalNavHeight:0,dates:[],dateGrow:3,ajaxGrow:3,dateExtend:!1,tipsMessage:!1,toastHidden:!0,toastHidden1:!0,headerTop:0,trainTips:{},scheduleDayArr:[]},callback:!1,validRangeSecondTime:function(t,e){console.log(t,e);var a=!0;if(!e)return a;t=this.ParseString(t).getTime();var i=e[0]||!1,s=e[1]||!1;return i?((t<i.getTime()||s&&t>s.getTime())&&(a=!1),a):a},updateRangeSecondTxt:function(){var t=this.rangeSecondTime;if(t){var e=t[0]||!1,a=t[1]||!1;"string"==typeof e&&(t[0]=e=this.ParseString(e),e=this.formateTimeYMD(e)),"string"==typeof a&&(t[1]=a=this.ParseString(a),a=this.formateTimeYMD(a)),this.updateData({lastEndDate2:t[1].getTime()}),t[1]?this.rangeSecondText="请选择"+e+"到"+a+"之间的日期":this.rangeSecondText="请选择"+e+"之后的日期"}},tipTimer:!1,showTips:function(t){this.tipTimer&&clearTimeout(this.tipTimer),this.updateData({toastHidden:!1,toastText:t});var e=this;this.tipTimer=setTimeout((function(){e.updateData({toastHidden:!0})}),1500)},showLoading:function(t){wx.showToast({title:"数据加载中...",icon:"loading",duration:t||2e3})},clickHandler:function(t){var a=t.currentTarget.dataset;if(a.extra)try{a.extra=JSON.parse(a.extra)}catch(t){}if(a&&("{}"==JSON.stringify(a)||!0===a.disable||"true"===a.disable))return!1;if("object"===e(this._currentDate)&&this.wxData.range){0===this._currentDate.length&&this.updateData({currentDate:!1});var s={},r=[],n={};if(1===this._currentDate.length){if(this.rangeSecondTime&&!this.validRangeSecondTime(a.date,this.rangeSecondTime)){var o=this.rangeSecondText;return i.globalData.calendarParam.rangeUnPass&&(o=i.globalData[i.globalData.calendarParam.rangeUnPass](a.date)||o),void this.showTips(o)}this.ParseString(this._currentDate[0].date).getTime()>this.ParseString(a.date).getTime()?this._currentDate[0]=a:this.ParseString(this._currentDate[0].date).getTime()!=this.ParseString(a.date).getTime()||this.wxData.rangeSame?this._currentDate.push(a):(this._currentDate.length=0,s.selectDate="")}else 0===this._currentDate.length&&(s.toastText1=this.wxData.rangeTips[0],this._currentDate.push(a),i.globalData.calendarParam.rangeFn&&(this.rangeSecondTime=i.globalData[i.globalData.calendarParam.rangeFn](a),this.updateRangeSecondTxt()));1===this._currentDate.length&&(s.selectDate=a.date,s.toastText1=this.wxData.rangeTips[1]);for(var h=0;h<this._currentDate.length;h++)n[this._currentDate[h].times]=h,r.push(this._currentDate[h].times);if(s.currentDate_=n,2==r.length&&(s.currentDate=r),this.updateFlightHotelCrossDate(s.selectDate),2===this._currentDate.length){if(this.callback)return;var l=i.globalData[i.globalData.calendarParam.callback](this._currentDate);if(!1===l||"string"==typeof l)return void(this._currentDate=[this._currentDate[0]]);setTimeout((function(){i.globalData.calendarParam.goBack?i.globalData[i.globalData.calendarParam.goBack]():wx.navigateBack({delta:1})}),500),this.callback=!0}this.updateData(s)}else this.updateData({selectDate:a.date,currentDate:!1}),i.globalData[i.globalData.calendarParam.callback](a),i.globalData.calendarParam.goBack?i.globalData[i.globalData.calendarParam.goBack]():wx.navigateBack({delta:1})},updateFlightHotelCrossDate:function(t){if(i.globalData.calendarParam.isFlightCross){var e=this.data.dates,a=new Date(Date.now()+(wx.getStorageSync("serverTimeDiff")||0));for(var s in e){var r=e[s];for(var n in r.month){var o=r.month[n];for(var h in o){var l=o[h];if(l){var d=new Date(o[h].date.replace(/-/g,"/")),D=new Date((t||"2018-01-01").replace(/-/g,"/")),c=d.getTime()-new Date(D).setDate(D.getDate()+31),u=d.getTime()-new Date(a).setDate(a.getDate()+90),g=d.getTime()-new Date(i.globalData.calendarParam.startDate.replace(/-/g,"/")).getTime();l.disable=!(!t&&u<=0)&&(!t&&u>0||!(c<0&&u<=0)),g<0&&(l.disable=!0)}}}}this.setData({dates:e})}},onLoad:function(){s={};var t=i.globalData.calendarParam;t||(t={}),this.wxData=this.data;var e=a.default.extend({},t,{});e.today=e.today||this.initializationDate(new Date),e.startDate=e.startDate||this.processUseDate(new Date(this.initializationDate(new Date).setDate(1)))[0];var r=e.nowSelect||e.selectDate||(e.currentDate||[])[0]||"";if(this.buildRecentDay(e.today),!e.endDate){var n=this.ParseString(e.startDate);n.setMonth(n.getMonth()+this.data.dateGrow),e.endDate=this.processUseDate(n)[0]}if(e.requestObj&&(this.requestObj=e.requestObj),this.formateDate(e),e.range&&e.rangeTips&&e.rangeTips.length&&(e.toastHidden1=!1,e.toastText1=e.rangeTips[0]),e.rangeTipsOne&&(e.toastHidden1=!1,e.toastText1=e.rangeTipsOne),this.updateNormalExtendData(e.dateData),e.dateData=null,this._startDate=this.ParseString(e.startDate),this._endDate=this.ParseString(e.endDate),e.hotelIsNight&&(this.yesterday=1*a.default.addDay(0,this._startDate).date),e.startDate=this.processUseDate(this.setDateToOne(this._startDate))[0],e.lastEndDate=this._endDate.getTime(),e.endDate=this.processUseDate(this.setDateToEnd(this._endDate))[0],r){var o=this.ParseString(r);if(o){var h=o.getMonth()-this._startDate.getMonth();h+=13*(o.getFullYear()-this._startDate.getFullYear()),e.dateGrow=h>this.wxData.dateGrow?h:this.wxData.dateGrow}}this.updateData(e),this.buildCalendar(),r&&r.split&&(this.setData({scrollid:"id"+r.split("-")[0]+r.split("-")[1]}),this.getSelectElement())},onReachBottom:function(){this.bottomEventHandle()},getSelectElement:function(){if(this.data.scrollid&&wx.createSelectorQuery){var t=this;wx.createSelectorQuery().select("#"+this.data.scrollid).boundingClientRect((function(e){if(e&&e.top){var a=e.top-68-t.data.totalNavHeight;t.data.tipsMessage||(a=e.top-33-t.data.totalNavHeight),wx.pageScrollTo&&wx.pageScrollTo({scrollTop:a,duration:300})}})).exec()}},updateData:function(t){this.wxData=this.wxData||t,this.wxData=a.default.extend(this.wxData,t),this.setData(t)},buildRecentDay:function(t){t=this.ParseString(this.parseTimes(t));var e=new Date(t);e.setDate(e.getDate()+1);var a=new Date(t);a.setDate(a.getDate()+2),this.today=t,this.tomorrow=e,this.afterDay=a},buildCalendar:function(){this.requestObj?this.buildDateList=this.buildAjaxDateMonth:this.buildDateList=this.buildDate,this.buildDateList()},extend:function(t,e){for(var i in t=a.default.extend({},t),e)"[object Object]"===Object.prototype.toString.call(e[i])&&t[i]&&"[object Object]"===Object.prototype.toString.call(t[i])?t[i]=this.extend(t[i],e[i]):t[i]=e[i];return t},buildAjaxDateMonth:function(){this.buildDate(),this.buildDateByAjax()},pipes:[],isLoadData:!1,buildDateByAjax:function(t){var e=this.requestObj,i=this,s=i.lastAjaxBuildDate||i.processUseDate(i._startDate)[0]||"",r=this.ParseString(s);s=s.split("-");if(i.showLoading(1e5),i.isLoadData)this.pipes.push(1);else{i.isLoadData=!0;var n={};n[e.grow||"grow"]=i.data.ajaxGrow,n[e.year||"year"]=s[0],n[e.month||"month"]=s[1],a.default.requestData({url:e.url,data:a.default.extend({},e.data,n),timeout:8e3,success:function(e){i.setDateExtend(e.data),r.setMonth(r.getMonth()+i.data.ajaxGrow),i.lastAjaxBuildDate=i.processUseDate(r)[0],"function"==typeof t&&t()},complete:function(){wx.hideToast(),i.isLoadData=!1,i.lastAjaxBuildDate&&i.ParseString(i.lastAjaxBuildDate).getTime()<i.ParseString(i.data.lastBuildDate).getTime()&&i.buildDateByAjax()}})}},updateNormalExtendData:function(t){if(t)try{for(var a in t){var i=t[a];"object"!==e(i)?t[a]={value:t[a]}:i.extra&&"[object Object]"===Object.prototype.toString.call(i.extra)&&(i.extra=JSON.stringify(i.extra)),t[a].value&&(s[a]={},s[a].price=t[a].value.replace("￥",""))}var r=this.wxData.dateExtend||{};r=this.extend(t,r),this.isEmptyObject(r)&&(r=!1),this.updateData({dateExtend:r})}catch(t){}},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},setDateExtend:function(t){var e=this.requestObj.success;t=e&&e(t)||t,this.updateNormalExtendData(t)},buildDate:function(){var t=[].concat(this.wxData.dates),e=this.wxData.lastBuildDate&&this.ParseString(this.wxData.lastBuildDate),a=this.createDateArr(e||!1);t=this.extendArrWithOutSame(t,a),e||(e=this.ParseString(this.wxData.startDate)),e.setMonth(e.getMonth()+this.wxData.dateGrow);var i={dates:t,lastBuildDate:this.processUseDate(e)[0]};this.updateData(i)},extendArrWithOutSame:function(t,e){t=[].concat(t),e=[].concat(e);for(var a=[],i=0;i<e.length;i++)a.push(e[i].headDate);for(i=0;i<t.length;i++){var s=a.indexOf(t[i].headDate);-1!==s&&(t[i]=e[s],e[s]=null)}for(i=0;i<e.length;i++)e[i]&&t.push(e[i]);return t},bottomEventHandle:function(t){var e=this.ParseString(this.wxData.lastBuildDate),a=this.ParseString(this.wxData.endDate);(!e||e.getTime()<a.getTime())&&this.buildDateList()},createDateArr:function(t){t&&(t=new Date(t)),t=t||this.ParseString(this.wxData.startDate);var e=[],a=new Date(t),i=this._endDate;for(a.setMonth(a.getMonth()+this.wxData.dateGrow),a.getTime()<i.getTime()&&(i=a),r=(r=this.data.today).setDate(r.getDate()+30);t<=i;)e.push(this.createMonthArr(t)),t.setMonth(t.getMonth()+1);return e},createMonthArr:function(t){for(var e=[],a=new Date(t),i=a.getDay(),n=[],o=this.data.cycle||[0,1,2,3,4,5,6];i>0;)n.push(""),i--;if("flight"==this.data.soursePath||"iflight"==this.data.soursePath)this.processUseDate(new Date(this.data.currentDate[0]))[0],this.processUseDate(new Date(this.data.currentDate[1]))[0];for(;a.getMonth()===t.getMonth();){var h={},l=a.getDay();0!==n.length&&n.length%7==0&&(e.push(n),n=[]);var d=a.getTime();(d<this._startDate.getTime()||d>this._endDate.getTime()||o.indexOf(l)<0)&&(h.disable=!0),h.txt=this.getRecentDay(a)||a.getDate();var D=this.getFestival(a),c=this.processUseDate(a);h.date=c[0],h.className="",h.topClass="",h.times=d,6!=a.getDay()&&0!=a.getDay()||(h.isWeekday=!0),-1!==this.workdays.indexOf(c[0])&&(h.topTxt="上班",h.isWeekday=!1),-1!==this.holidays.indexOf(c[0])&&(h.topTxt="放假",h.topClass+=" weekday-color",h.isWeekday=!0),D&&(h.isWeekday=!0,h.festival=D,h.topTxt=D,h.topClass+=" weekday-color"),s[h.date]&&(h.bottomTxt=0==s[h.date].price?"":"¥"+s[h.date].price,h.monthlowestprice=s[h.date].monthlowestprice),this.data.soursePath&&"train"==this.data.soursePath&&r<=d&&d<=this._endDate.getTime()&&(h.bottomTxt="可预约"),this.data.soursePath&&"bus"==this.data.soursePath&&this.ParseString(this.data.normalEndTime).getTime()<d&&d<=this._endDate.getTime()&&(this.ParseString("2019-1-21").getTime()<=d&&d<=this.ParseString("2019-2-19").getTime()?h.bottomTxt="春运":h.bottomTxt="可预约"),"今天"===h.txt&&(h.className+=h.disable?" day-today-disable ":" day-today "),this.data.soursePath&&"ship"==this.data.soursePath&&d>=this._startDate.getTime()&&d<=this._endDate.getTime()&&(o.indexOf(l)<0?h.bottomTxt="无班次":s[h.date]||this.data.isBack?h.shipmonthlowestprice=1:(h.bottomTxt="无班次",h.shipmonthlowestprice=2)),this.wxData.dateExtend&&(h.extendTxt=this.wxData.dateExtend[c[0]]||!1,this.wxData.noExtendDataDisable&&!h.extendTxt&&(h.disable=!0)),this.yesterday&&d==this.yesterday&&(h.disable=!1,h.txt="深夜");try{var u=getApp().globalData.calendarParam;this.yesterday&&d==this.yesterday&&1==u.fromHotel&&u.hotelIsNight&&(h.disable=!1,h.txt="今天凌晨"),this.today&&d==new Date(this.today).getTime()&&1==u.fromHotel&&u.hotelIsNight&&(h.disable=!1,h.txt="今天中午")}catch(t){console.log(t)}h.disable&&(h.topClass=" day-top-disable"),n.push(h),a.setDate(a.getDate()+1)}if(n.length){for(var g=n.length;g<7;g++)n.push("");e.push(n),n=null}return{month:e,headDate:t.getFullYear()+"年"+(t.getMonth()+1)+"月",headId:"id"+t.getFullYear()+(t.getMonth()+1>9?t.getMonth()+1:"0"+(t.getMonth()+1)),monthNum:t.getMonth()+1}},processUseDate:function(t){if(t){var e=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();return[e+"-"+(a>9?"":"0")+a+"-"+(i>9?"":"0")+i,e+"-"+(a>9?"":"0")+a]}},formateDate:function(t){if(this.convertProp(t,["startDate","endDate"]),t.currentDate){this._currentDate=[],t.currentDate_={};for(var e=0;e<t.currentDate.length;e++)t.currentDate[e]&&"string"==typeof t.currentDate[e]?t.currentDate[e]=this.ParseString(t.currentDate[e]).getTime():t.currentDate[e]instanceof Date&&(t.currentDate[e]=this.initializationDate(t.currentDate[e]).getTime()),t.currentDate_[t.currentDate[e]]=e;t.currentDate=t.currentDate.length>1&&t.currentDate}t.selectDate?"string"==typeof t.selectDate?t.selectDate=this.processUseDate(this.ParseString(t.selectDate))[0]:t.selectDate instanceof Date?t.selectDate=this.processUseDate(t.selectDate)[0]:t.selectDate=!1:t.selectDate=!1},convertProp:function(t,e){for(var a,i=0,s=e.length;i<s;i++)t[a=e[i]]=this.parseTimes(t[a])},parseTimes:function(t){return a.default.isNotEmptyString(t)&&(t=this.ParseString(t)),t=t instanceof Date?this.processUseDate(t)[0]:void 0},ParseString:function(t){if(t){var e=/(\d{4})-(\d{1,2})-(\d{1,2})(?:\s+(\d{1,2}):(\d{1,2}):(\d{1,2}))?/i,a=e.exec(t),i=0,s=null;return i=a&&a.length&&t?a.length>5&&a[6]?Date.parse(t.replace(e,"$2/$3/$1 $4:$5:$6")):Date.parse(t.replace(e,"$2/$3/$1")):Date.parse(t),isNaN(i)||(s=new Date(i)),s}},initializationDate:function(t){return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t},setDateToOne:function(t){return(t=new Date(t)).setDate(1),t},setDateToEnd:function(t){return(t=new Date(t)).setDate(1),t.setMonth(t.getMonth()+1),new Date(t.getTime()-864e5)},getHolidays:function(t){return-1!==this.holidays.indexOf(t)},getWorkdays:function(t){return-1!==this.workdays.indexOf(t)},getRecentDay:function(t){if(t.getTime()===this.today.getTime())return"今天"},formateTimeYMD:function(t){return t.getFullYear()+"年"+(t.getMonth()+1)+"月"+t.getDate()+"日"},getFestival:function(t){t.getFullYear();var e=t.getMonth()+1,a=t.getDate(),i=this.processUseDate(t)[0],s=this.festivals[i];return s||(s=1===e&&1===a?"元旦":2===e&&14===a?"情人节":5===e&&1===a?"五一":6===e&&1===a?"儿童节":10===e&&1===a?"国庆":12===e&&25===a&&"圣诞")},jumpNotice:function(){var t=this.data,e=t.soursePath,a=t.trainTips||{},i=a.action,s=void 0===i?"":i,r=a.label,n=void 0===r?"":r,o=a.link,h=void 0===o?"":o;"train"==e&&h&&(wx.navigateTo({url:"/page/home/webview/webview?src="+encodeURIComponent(h)}),s=s.split(","),n=n.split(","),s[1]&&n[1])}}); 
 			}); 	require("pages/planControl/components/calendar/calendar.js");
 		__wxRoute = 'pages/planControl/components/openSch/openSch';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/planControl/components/openSch/openSch.js';	define("pages/planControl/components/openSch/openSch.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../@babel/runtime/helpers/interopRequireDefault"),e=require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),a=require("../../../../@babel/runtime/helpers/objectSpread2"),i=t(require("../../../../utils/util.js")),s=getApp();Page({data:{vcode:"",headInfo:{},displayPage:"01",shiftId:"",ssid:"",self:!1,share:!1,ticketNum:0,SeatNum:0,ticketPrice:0,ticketPriceMinus:0,startTime:"",lastStartTime:"",lastEndTime:"",startTimeStep:"",jiabanTime:"",endTime:"",time:"12:01",carNameObj:{},driverNameObj:{},arraydriver:[],arrayVehicle:[],selectItem:{},shiftType:1,hasJiaban:!1,downAdrreList:[],upAdrreList:[],isChangeDots:!1,flowList:[],flowId:0,isMutiPrice:!1,schedulePartnerList:[]},onLoad:function(t){var e=this,a=getCurrentPages();if(a.length>=2&&"pages/planControl/planControl"==a[a.length-2].route&&!i.default.isEmpty(a[a.length-2].data))var d=a[a.length-2].data,r=d.selectItem,n=d.vcode;console.log(r);var c={cookie:"unionId=".concat(s.globalData.unionId)},o=t.displayPage,h=t.ssid,u=t.shiftId,l=void 0===u?"":u,f=t.isMutiPrice,m=void 0!==f&&f;if(this.setData({shiftId:l,displayPage:o||"01",ssid:h,headInfo:c,self:1===r.status,share:1===r.distributeStatus,selectItem:r,ticketNum:r.remain,ticketPrice:r.price?r.price:0,ticketPriceMinus:r.channelPriceRate?r.channelPriceRate:0,startTime:r.startTime?r.startTime:"",jiabanTime:r.startTime?r.startTime:"",startTimeStep:r.startTimeStep?r.startTimeStep:"",lastStartTime:r.lastStartTime?r.lastStartTime:"",endTime:r.endTime?r.endTime:"",sss:2===r.shiftType||3===r.shiftType?r.startTime:"",eee:2===r.shiftType?r.lastStartTime:3===r.shiftType?r.endTime:"",driverId:r.driverId?r.driverId:"",vehicleId:r.vehicleId?r.vehicleId:"",driverName:r.driverName?r.driverName:"",vehicleNo:r.vehicleNo?r.vehicleNo:"",shiftType:r.shiftType,vcode:n,isMutiPrice:1==m,schedulePartnerList:r.schedulePartnerList?r.schedulePartnerList:[]}),"03"===o&&this.data.isMutiPrice&&this.getSchedulePartnerList(),"06"===o&&(this.getDriver(),this.getVehicle(),2===this.data.shiftType&&r.driverWaterClassList&&r.driverWaterClassList.length>0)){var v=r.driverWaterClassList.map((function(t){var a={driverId:t.driverId,driverName:t.driverName,vehicleId:t.vehicleId,vehicleNo:t.vehicleNo,id:e.data.flowId};return e.data.flowId++,a}));this.setData({flowList:v}),console.log(this.data.flowList)}"09"===o&&this.getStations();var w="";switch(o){case"01":w="开班/停班";break;case"02":w="改余票";break;case"03":w="改票价";break;case"04":w="改时间";break;case"06":w="改司机车辆";break;case"07":w="加班";break;case"08":w="留座";break;case"09":w="上下车点管理"}wx.setNavigationBarTitle({title:w})},onReady:function(){},onShow:function(){if("06"===this.data.displayPage||"07"===this.data.displayPage){var t={},s=wx.getStorageSync("vehicleObj"),d={},r=wx.getStorageSync("driverNameObj"),n=wx.getStorageSync("flowVehicleDriverObj");try{if(i.default.isEmpty(s)||(t=JSON.parse(s),this.setData({carNameObj:a(a({},t),{},{vehicleNo:t.vehicleName,id:t.vehicleId})}),wx.removeStorageSync("vehicleObj")),i.default.isEmpty(r)||(d=JSON.parse(r),this.setData({driverNameObj:a({},d)}),console.log(this.driverNameObj),wx.removeStorageSync("driverNameObj")),!i.default.isEmpty(n)){var c=JSON.parse(n);if(this.data.flowList.length>0){var o,h=e(this.data.flowList);try{for(h.s();!(o=h.n()).done;){var u=o.value;if(u.vehicleNo===c.vehicleNo&&u.vehicleId===c.vehicleId&&u.driverId===c.driverId&&u.driverName===c.driverName)return i.default.showToast("重复添加"),void wx.removeStorageSync("flowVehicleDriverObj")}}catch(t){h.e(t)}finally{h.f()}}var l=this.data.flowList;c.editId||0===c.editId?(l[c.editId]=c,l[c.editId].id=c.editId,delete l[c.editId].editId):(c.id=this.data.flowId,this.data.flowId++,l.push(c)),this.setData({flowList:l}),wx.removeStorageSync("flowVehicleDriverObj")}}catch(t){}}},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},getSchedulePartnerList:function(){var t=this.data.schedulePartnerList;if(!i.default.isEmpty(t)){var e=t.map((function(t){return a(a({},t),{},{stationStr:t.startShiftStation.road+" → "+t.endShiftStation.road})}));this.setData({schedulePartnerList:e})}},deleteFlowItem:function(t){var e=t.currentTarget.dataset.id,a=this.data.flowList;a.splice(a.findIndex((function(t){return t.id===Number(e)})),1),this.setData({flowList:a})},switchSelf:function(t){var e=this.data.self;console.log(e);var a=t.detail.value;console.log(a),this.setData({self:e}),i.default.throttle(this.setStatus(a,"A"),600)},switchShare:function(t){var e=t.detail.value;i.default.throttle(this.setStatus(e,"B"),600)},setStatus:function(t,e){var a=this,s={shiftScheduleId:this.data.ssid};"A"===e&&(s.status=t?1:2),"B"===e&&(s.distributorStatus=t?1:2),wx.request({url:"".concat(i.default.urlPrefix,"/steward/schedule/status"),method:"PUT",header:this.data.headInfo,data:s,success:function(t){var i=t.data;"200"===i.code?(wx.showToast({title:i.msg||"更新成功",icon:"success",duration:2e3}),"A"===e&&a.setData({self:!a.data.self}),"B"===e&&a.setData({share:!a.data.share})):(wx.showToast({title:i.msg||"更新失败",icon:"error",duration:2e3}),"A"===e&&a.setData({self:!a.data.self}),"B"===e&&a.setData({share:!a.data.share}))},complete:function(){a.emitFun()}})},setRemain:function(){var t=this,e={remain:this.data.ticketNum,shiftScheduleId:this.data.ssid};wx.request({url:"".concat(i.default.urlPrefix,"/steward/schedule/remain"),method:"PUT",header:this.data.headInfo,data:e,success:function(t){var e=t.data;console.log(e),"200"===e.code?wx.showToast({title:e.msg||"修改余票成功",icon:"success",duration:2e3}):wx.showToast({title:e.msg||"修改余票失败",icon:"success",duration:2e3})},complete:function(){t.emitFun()}})},setPrice:function(){var t=this,e=null;if(this.data.isMutiPrice){for(var a=this.data.schedulePartnerList,s=0;s<a.length;s++){if(0==a[s].price)return void wx.showModal({title:"",content:"请填写价格",showCancel:!1,success:function(t){}})}e={shiftScheduleId:this.data.ssid,isMutiPrice:1,schedulePartnerList:a,channelPriceRate:this.data.ticketPriceMinus}}else{if(0===this.data.ticketPrice)return void wx.showModal({title:"",content:"请填写价格",showCancel:!1,success:function(t){}});e={channelPriceRate:this.data.ticketPriceMinus,price:this.data.ticketPrice,shiftScheduleId:this.data.ssid}}wx.request({url:"".concat(i.default.urlPrefix,"/steward/schedule/price"),method:"PUT",header:this.data.headInfo,data:e,success:function(t){var e=t.data;e.code,wx.showToast({title:e.msg||"修改价格成功",icon:"success",duration:2e3})},complete:function(){t.emitFun()}})},setStartTime:function(){var t=this,e={shiftScheduleId:this.data.ssid};if("04"===this.data.displayPage){if(!this.data.startTime)return void wx.showModal({title:"",content:"请选择时间",showCancel:!1,success:function(t){}});e.startTime=this.data.startTime}if("05"===this.data.displayPage&&2===this.data.shiftType){if(!this.data.startTimeStep||!this.data.sss||!this.data.eee)return void wx.showModal({title:"",content:"请选择时间",showCancel:!1,success:function(t){}});e.startTimeStep=this.data.startTimeStep,e.startTime=this.data.sss,e.lastStartTime=this.data.eee}if("05"===this.data.displayPage&&3===this.data.shiftType){if(!this.data.sss||!this.data.eee)return void wx.showModal({title:"",content:"请选择时间",showCancel:!1,success:function(t){}});e.startTime=this.data.sss,e.endTime=this.data.eee}wx.request({url:"".concat(i.default.urlPrefix,"/steward/schedule/time"),method:"PUT",header:this.data.headInfo,data:e,success:function(t){var e=t.data;e.code,wx.showToast({title:e.msg||"修改班次时间成功",icon:"success",duration:2e3})},complete:function(){t.emitFun()}})},validList:function(){return 0!==this.data.flowDriverNameObj.length&&0!==this.data.flowVehicleObj.length||(wx.showModal({title:"",content:"请选择司机车辆",showCancel:!1,success:function(t){}}),!1)},setDispatch:function(){var t=this;if(2===this.data.shiftType){if(this.data.flowList.length>15)return void i.default.showToast("最多只支持同时选中15名司机！");wx.request({url:"".concat(i.default.urlPrefix,"/order/mobile/updateWaterShiftDriverList/").concat(this.data.vcode,"/").concat(this.data.ssid),method:"POST",header:this.data.headInfo,data:{waterFlowList:this.data.flowList},success:function(t){var e=t.data;"200"===e.code?wx.showToast({title:e.msg||"修改成功",icon:"success",duration:2e3}):wx.showModal({title:"",content:e.msg||"修改失败",showCancel:!1,success:function(t){}})},complete:function(){t.emitFun()}})}else{if(!this.data.driverNameObj.id||!this.data.carNameObj.id)return void wx.showModal({title:"",content:"请选择司机车辆",showCancel:!1,success:function(t){}});var e={driverId:this.data.driverNameObj.id||"",vehicleId:this.data.carNameObj.id||"",shiftScheduleId:this.data.ssid};wx.request({url:"".concat(i.default.urlPrefix,"/steward/schedule/dispatch"),method:"PUT",header:this.data.headInfo,data:e,success:function(t){var e=t.data;"200"===e.code?wx.showToast({title:e.msg||"修改班次时间成功",icon:"success",duration:2e3}):wx.showModal({title:"",content:e.msg||"修改成功",showCancel:!1,success:function(t){}})},complete:function(){t.emitFun()}})}},setJiaban:function(){var t=this;if(this.data.hasJiaban)return!1;if(this.data.hasJiaban=!0,setTimeout((function(){t.data.hasJiaban=!1}),1e3),!this.data.driverNameObj.id||!this.data.carNameObj.id)return this.data.hasJiaban=!1,void wx.showModal({title:"",content:"请选择司机车辆",showCancel:!1,success:function(t){}});if(!this.data.jiabanTime)return this.data.hasJiaban=!1,void wx.showModal({title:"",content:"请选择加班时间",showCancel:!1,success:function(t){}});var e={shiftId:this.data.shiftId,startTime:this.data.jiabanTime,driverId:this.data.driverNameObj.id||"",vehicleId:this.data.carNameObj.id||"",shiftScheduleId:this.data.ssid};wx.request({url:"".concat(i.default.urlPrefix,"/shift-schedule/addExtraBus"),method:"POST",header:this.data.headInfo,data:e,success:function(t){var e=t.data;"200"===e.code?wx.showModal({title:"",content:e.msg,showCancel:!1,success:function(t){}}):wx.showToast({title:e.msg||"修改加班车失败",icon:"success",duration:2e3})},complete:function(){t.emitFun(),setTimeout((function(){t.data.hasJiaban=!1}),600)}})},setSeatNum:function(){var t=this,e=this.data,a=e.SeatNum,d=e.vcode;if(0===a)return!1;var r={shiftIds:this.data.shiftId,shiftScheduleIds:this.data.ssid,userName:s.globalData.userName,reserveSeat:a,vcode:d};wx.request({url:"".concat(i.default.urlPrefix,"/shift-schedule/update"),method:"POST",header:this.data.headInfo,data:r,success:function(t){var e=t.data;"200"===e.code?wx.showModal({title:"",content:e.msg,showCancel:!1,success:function(t){}}):wx.showToast({title:e.msg||"修改留座数失败",icon:"error",duration:2e3})},complete:function(){t.emitFun()}})},radioChangeUp:function(t){var e=t.target.dataset.id,a=t.detail.value,i=this.data.upAdrreList;i.forEach((function(t){t.createUser=s.globalData.userName,t.disabled=!1,t.id===e&&(t.ifTrue="0"!==a)}));var d=-1;1===i.filter((function(t,e){if(!t.ifTrue)return d=e,t})).length&&(i[d].disabled=!0),this.setData({upAdrreList:i,isChangeDots:!0})},radioChangeDn:function(t){var e=t.target.dataset.id,a=t.detail.value,i=this.data.downAdrreList;i.forEach((function(t){t.createUser=s.globalData.userName,t.disabled=!1,t.id===e&&(t.ifTrue="0"!==a)}));var d=-1;1===i.filter((function(t,e){if(!t.ifTrue)return d=e,t})).length&&(i[d].disabled=!0),this.setData({downAdrreList:i,isChangeDots:!0})},setPot:function(){var t=this;if(this.data.isChangeDots){var e=this.data,a=e.upAdrreList,s=e.downAdrreList,d=JSON.parse(JSON.stringify(a)),r=JSON.parse(JSON.stringify(s));d.forEach((function(t){t.ifTrue=!t.ifTrue})),r.forEach((function(t){t.ifTrue=!t.ifTrue})),wx.request({url:"".concat(i.default.urlPrefix,"/api/updownaddress/submit/").concat(this.data.vcode),method:"POST",header:this.data.headInfo,data:{shiftScheduleId:this.data.ssid,upAddressList:d,downAddressList:r},success:function(t){var e=t.data;"200"===e.code?wx.showToast({title:e.msg,icon:"success",duration:2e3}):wx.showToast({title:e.msg||"修改上下车点失败",icon:"error",duration:2e3})},complete:function(){t.emitFun(),setTimeout((function(){t.setData({isChangeDots:!1})}),600)}})}else this.emitFun()},getDriver:function(){var t=this;wx.request({url:"".concat(i.default.urlPrefix,"/order/mobile/driver/").concat(this.data.vcode),method:"GET",header:this.data.headInfo,data:{},success:function(e){var a=e.data,s={};"200"!==a.code||i.default.isEmpty(a.data)||(a.data.forEach((function(e){e.name===t.data.driverName&&(s=e)})),console.log(s),t.setData({arraydriver:a.data,driverNameObj:s}))},complete:function(){}})},getVehicle:function(){var t=this;wx.request({url:"".concat(i.default.urlPrefix,"/order/mobile/vehicle/").concat(this.data.vcode),method:"GET",header:this.data.headInfo,data:{},success:function(e){var a=e.data,s={};"200"!==a.code||i.default.isEmpty(a.data)||(a.data.forEach((function(e){e.vehicleNo===t.data.vehicleNo&&(s=e)})),console.log(s),t.setData({arrayVehicle:a.data,carNameObj:s}))},complete:function(){}})},getStations:function(){var t=this;wx.request({url:"".concat(i.default.urlPrefix,"/api/updownaddress/findStationByShiftShudleId?vcode=").concat(this.data.vcode,"&id=").concat(this.data.ssid),method:"GET",header:this.data.headInfo,data:{},success:function(e){var a=e.data;if(console.log(a),"200"===a.code&&!i.default.isEmpty(a.data)){var d=i.default.isEmpty(a.data.upAdrreList)?[]:a.data.upAdrreList,r=i.default.isEmpty(a.data.downAdrreList)?[]:a.data.downAdrreList;d.forEach((function(t){t.createUser=s.globalData.userName})),r.forEach((function(t){t.createUser=s.globalData.userName})),1===r.length&&(r[0].disabled=!0),1===d.length&&(d[0].disabled=!0),t.setData({downAdrreList:r,upAdrreList:d})}},complete:function(){}})},bindKeyPrice:function(t){this.setData({ticketPrice:t.detail.value})},bindKeyPartPrice:function(t){var e=t.currentTarget.dataset.index,a=this.data.schedulePartnerList;a[e].price=t.detail.value,this.setData({schedulePartnerList:a})},bindstartTimeStep:function(t){this.setData({startTimeStep:t.detail.value})},emitFun:function(){wx.setStorageSync("refresh","01")},bindKeyInput:function(t){var e=t.detail.value;this.setData({ticketNum:e})},minNum:function(){var t=this.data.ticketNum;t>0?t-=1:t=0,this.setData({ticketNum:t})},plusNum:function(){var t=this.data.ticketNum;t+=1,this.setData({ticketNum:t})},minSeat:function(){var t=this.data.SeatNum;t>0?--t:t=0,this.setData({SeatNum:t})},plusSeat:function(){var t=this.data.SeatNum;this.setData({SeatNum:++t})},minNumPrice:function(){var t=Number(this.data.ticketPriceMinus);t-=1,this.setData({ticketPriceMinus:t})},plusNumPrice:function(){var t=Number(this.data.ticketPriceMinus);t+=1,this.setData({ticketPriceMinus:t})},bindTimeChange:function(t){this.setData({startTime:t.detail.value})},bindTimeChangeB:function(t){this.setData({sss:t.detail.value})},bindTimeChangeD:function(t){this.setData({jiabanTime:t.detail.value})},bindTimeChangeC:function(t){this.setData({eee:t.detail.value})},bindDriver:function(t){this.setData({driverNameObj:this.data.arraydriver[Number(t.detail.value)]})},bindVehicle:function(t){this.setData({carNameObj:this.data.arrayVehicle[Number(t.detail.value)]})},selectVehicle:function(t){wx.navigateTo({url:"/pages/planControl/components/selectPage/selectPage?t=vehicle&vcode="+this.data.vcode+"&id="+this.data.carNameObj.vehicleNo+"".concat(2===this.data.shiftType?"&isMutiplie=1":"")})},selectDriver:function(t){wx.navigateTo({url:"/pages/planControl/components/selectPage/selectPage?t=driver&vcode="+this.data.vcode+"&id="+this.data.driverNameObj.name+"".concat(2===this.data.shiftType?"&isMutiplie=1":"")})},addItem:function(t){wx.navigateTo({url:"/pages/planControl/components/selectPage/selectPage?t=vehicle&vcode="+this.data.vcode+"&id="+this.data.driverNameObj.name+"".concat(2===this.data.shiftType?"&isMutiplie=1":"")})},editFlowItem:function(t){var e=t.currentTarget.dataset.id,a=this.data.flowList[e];wx.navigateTo({url:"/pages/planControl/components/selectPage/selectPage?t=vehicle&vcode="+this.data.vcode+"&editId="+a.id+"&editVehicleName=".concat(a.vehicleNo,"&editDriverName=").concat(a.driverName)+"".concat(2===this.data.shiftType?"&isMutiplie=1":"")})}}); 
 			}); 	require("pages/planControl/components/openSch/openSch.js");
 		__wxRoute = 'pages/focusShiftList/focusShiftList';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/focusShiftList/focusShiftList.js';	define("pages/focusShiftList/focusShiftList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault"),e=require("../../@babel/runtime/helpers/createForOfIteratorHelper"),a=require("../../utils/util.js"),i=t(require("../../utils/calendar.js")),s=(require("../../utils/api.js"),getApp()),n=null;Page({data:{useMode:0,vcode:"",headInfo:{},orderType:1,shiftScheduleNo:"",queryText:"",filterObj:{type:"",dptstationIndex:0,arrstationIndex:0},dptStationList:[{id:"",name:"出发站点"}],arrStationList:[{id:"",name:"到达站点"}],orderList:[],isLoading:!1,orderStatusToColor:{"待处理":"status-red","已完成":"status-black","已取消":"status-grey"},advanceCheckinMin:30,checkList:[],page:1,sixDayArrs:[],slideCalendar:null,queryDate:(0,a.formatDate)(new Date,"yyyy-MM-dd"),startDate:(0,a.formatDate)((0,a.addTime)(new Date,"-7D"),"yyyy-MM-dd"),calChangeDate:!0,maskObj:{isShow:!1,driverList:[]}},listData:{normalSaleDays:60,endDate:new Date,startStationId:0,endStationId:0,ssid:"",scrollTop:0,driverId:0},onLoad:function(t){var e=this;s.loginStatus.then((function(a){var i=a.vcode,n=(a.useMode,a.id);e.setData({vcode:i,driverId:n,headInfo:{cookie:"unionId=".concat(s.globalData.unionId)},orderType:"0"===t.orderType?0:1,shiftScheduleNo:t.shiftScheduleNo||""}),e.initCalendar(),e.getAccountInfo(),e.getShiftOrderList(),e.getStationList()}))},onShow:function(){try{wx.getStorageSync("hasSetVehicle")&&(this.getShiftOrderList(),wx.removeStorageSync("hasSetVehicle"))}catch(t){}},jumpDriverSelect:function(t){var e=this,a=t.currentTarget.dataset,i=a.shiftscheduleid,s=a.btntype,n=a.type;console.log(n),"change"===s?2===n?wx.navigateTo({url:"/pages/planControl/components/selectPage/selectPage?t=shiftList&vcode="+this.data.vcode+"&id="+i+"&fromPage=baoban"+"".concat(2==n?"&shiftType=2":"")}):wx.showModal({title:"提示",content:"确认要更改当前报班司机为自己吗？",confirmText:"确定",cancelText:"点错了",confirmColor:"#508cee",success:function(t){t.confirm&&wx.navigateTo({url:"/pages/planControl/components/selectPage/selectPage?t=shiftList&vcode="+e.data.vcode+"&id="+i+"&fromPage=baoban"+"".concat(2==n?"&shiftType=2":"")})}}):wx.navigateTo({url:"/pages/planControl/components/selectPage/selectPage?t=shiftList&vcode="+this.data.vcode+"&id="+i+"&fromPage=baoban"+"".concat(2==n?"&shiftType=2":"")})},resetState:function(t){var e=(0,a.formatDate)(new Date(t),"yyyy-MM-dd");this.listData.startStationId=0,this.listData.endStationId=0,this.setData({"filterObj.dptstationIndex":0,"filterObj.arrstationIndex":0,waitObj:{isLoading:!1,page:1,list:[]},checkedObj:{isLoading:!1,page:1,list:[]},page:1,queryDate:e})},initCalendar:function(){console.log("init calendar"),this.listData.endDate=(0,a.formatDate)((0,a.addTime)(this.listData.endDate,"7D"),"yyyy-MM-dd"),this.slideCalendar=this.selectComponent("#slideCalendar");var t=this.slideCalendar.data,e=this.data;t.querydate=new Date(e.queryDate.replace(/-/g,"/")),t.startdate=e.startDate,t.enddate=this.listData.endDate,this.slideCalendar.init()},dateAdd:function(t,e){return(0,a.addTime)(e,"".concat(parseInt(t,10),"D"))},toggleCalendar:function(t){var e=this,s=e.listData,n=(0,a.formatDate)((0,a.addTime)(new Date,"-7D"),"yyyy-MM-dd"),r=(s.endDate.split("-"),(0,a.formatDate)(e.dateAdd(s.normalSaleDays-1,new Date),"yyyy-MM-dd"));i.default.show({startDate:n,normalEndTime:r,endDate:s.endDate,selectDate:(0,a.formatDate)(new Date(e.data.queryDate),"yyyy-MM-dd"),basePageUrl:"../../../../",tipsMessage:"",scheduleDayArr:this.data.scheduleDayArr,soursePath:"bus",callback:function(t){var i=(0,a.formatDate)(new Date(e.data.queryDate),"yyyy-MM-dd"),s=t.date;s!=i&&(s=(0,a.parseDate)(s),e.resetState(s),e.getShiftOrderList(),e.initCalendar())}})},showDetail:function(t){var e=t.currentTarget.dataset.list;console.log(e),this.setData({"maskObj.isShow":!0,"maskObj.driverList":e})},preventScroll:function(){},closeMsk:function(){this.setData({"maskObj.isShow":!1,"maskObj.driverList":[]})},sixDateSel:function(t){var e=this,i=(e.listData,(0,a.formatDate)(new Date(e.data.queryDate),"yyyy-MM-dd")),s=t.detail.detail.date;if(i==s)return this.setData({calChangeDate:!0}),!1;setTimeout((function(){e.setData({calChangeDate:!0})}),600),s!=i&&(s=(0,a.parseDate)(s),e.resetState(s),e.getShiftOrderList())},onSearchInput:function(t){var e=this;this.setData({queryText:t.detail.value}),n&&clearTimeout(n),n=setTimeout((function(){e.getShiftOrderList()}),500)},getAccountInfo:function(){var t=this;wx.request({url:"".concat(a.urlPrefix,"/account/getAccountInfo?vcode=").concat(this.data.vcode),method:"GET",header:this.data.headInfo,success:function(e){var i=e.data;"200"!==i.code||(0,a.isEmpty)(i.data)||t.setData({advanceCheckinMin:Number(i.data.advanceCheckinMin)})}})},getShiftOrderList:function(t){var i=this,n=this.data.page;if(!this.data.isLoading){this.setData({isLoading:!0}),wx.showLoading({title:"加载中"});var r=[];"nextPage"===t?n++:(n=1,this.setData({orderList:[]})),wx.request({url:"".concat(a.urlPrefix,"/order/mobile/getAllShiftScheduleList/").concat(this.data.vcode),method:"GET",header:this.data.headInfo,data:{pageSize:20,page:n,startDay:this.data.queryDate,unionId:s.globalData.unionId,startStationId:this.data.dptStationList[this.data.filterObj.dptstationIndex].id,endStationId:this.data.arrStationList[this.data.filterObj.arrstationIndex].id,stationName:this.data.queryText},success:function(t){var i=t.data;"200"!==i.code||(0,a.isEmpty)(i.data)||(0,a.isEmpty)(i.data.data)||(0,a.isEmpty)(i.data.data.list)||(r=i.data.data.list.map((function(t){var a=t.shiftType,i=t.startTime,n=t.lastStartTime,r=t.startTimeStep,d="";if(1===a)d=i;else if(2===a){if(d=i+"-"+n+" "+r+"分/班",t.driverWaterClassList.length>0){var o,c=e(t.driverWaterClassList);try{for(c.s();!(o=c.n()).done;){var l=o.value;l.driverId===s.globalData.id&&(console.log(l.driverId),t.existDriver=!0)}}catch(t){c.e(t)}finally{c.f()}}else t.existDriver=!1;console.log(t.existDriver)}else 3===a&&(d=i+"-"+n);return t.displayTime=d,t})),console.log(r))},complete:function(){(0,a.isEmpty)(r)?(0,a.showToast)("没有更多了！"):i.setData({page:n}),i.setData({isLoading:!1,orderList:i.data.orderList.concat(r)}),wx.hideNavigationBarLoading(),wx.stopPullDownRefresh(),wx.hideLoading()}})}},getStationList:function(){var t=this,e=[],i=[];wx.request({url:"".concat(a.urlPrefix,"/order/mobile/shiftList/startStations/").concat(this.data.vcode),method:"GET",header:this.data.headInfo,data:{},success:function(t){var i=t.data;"200"!==i.code||(0,a.isEmpty)(i.data)||i.data.forEach((function(t){(0,a.isEmpty)(t)||e.push({id:t.stationId,name:t.stationName})}))},complete:function(){t.setData({dptStationList:[{id:"",name:"出发站点"}].concat(e)})}}),wx.request({url:"".concat(a.urlPrefix,"/order/mobile/shiftList/endStations/").concat(this.data.vcode),method:"GET",header:this.data.headInfo,data:{},success:function(t){var e=t.data;"200"!==e.code||(0,a.isEmpty)(e.data)||e.data.forEach((function(t){(0,a.isEmpty)(t)||i.push({id:t.stationId,name:t.stationName})}))},complete:function(){t.setData({arrStationList:[{id:"",name:"到达站点"}].concat(i)})}})},clickFilter:function(t){var e=t.currentTarget.dataset.tag;this.data.filterObj.type===e?this.setData({"filterObj.type":""}):this.setData({"filterObj.type":e})},selectStation:function(t){var e=t.currentTarget.dataset.index;e!==this.data.filterObj.dptstationIndex&&(this.setData({"filterObj.dptstationIndex":e}),this.getShiftOrderList()),this.setData({"filterObj.type":""})},selectarrStation:function(t){var e=t.currentTarget.dataset.index;e!==this.data.filterObj.stationIndex&&(this.setData({"filterObj.arrstationIndex":e}),this.getShiftOrderList()),this.setData({"filterObj.type":""})},clickFilterMask:function(t){"mask"===t.target.dataset.tag&&this.setData({"filterObj.type":""})},verifyCheckTicketTime:function(t){var e=this.data.advanceCheckinMin;return new Date((0,a.newDate)(t)).getTime()-(new Date).getTime()<=(e=60*e*1e3)},onReachBottom:function(){this.getShiftOrderList("nextPage")},onPullDownRefresh:function(){wx.showNavigationBarLoading(),this.getShiftOrderList()}}); 
 			}); 	require("pages/focusShiftList/focusShiftList.js");
 		__wxRoute = 'pages/planControl/components/selectPage/selectPage';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/planControl/components/selectPage/selectPage.js';	define("pages/planControl/components/selectPage/selectPage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../../../@babel/runtime/helpers/toConsumableArray"),i=require("../../../../@babel/runtime/helpers/defineProperty"),a=e(require("../../../../utils/util.js")),s=getApp();Page({data:{pageType:"vehicle",vcode:"",inputSearchValue:"",companyList:[],companyId:-1,vehicleList:[],vehicleObj:{},headInfo:{},driverInfoList:[],carObj:{},carName:"",shiftScheduleId:"",placeholder:"输入车牌号或车属单位查询",fromPage:"",shiftType:"",isMutiplie:"",selectedList:[],selectFlowVehicleItem:{},selectFlowDriverItem:{},editId:""},onLoad:function(e){var t,a,r,c=e.t,d=e.vcode,n=e.id,l=e.fromPage,h=e.shiftType,o=e.isMutiplie,u=e.editId,f=e.editVehicleName,v=e.editDriverName;(console.log(e),this.setData({pageType:c,shiftType:Number(h),isMutiplie:Number(o),fromPage:l,headInfo:{cookie:"unionId=".concat(s.globalData.unionId)},vcode:d}),"vehicle"===c&&(this.getAllVehicle(),this.getVehicleOwnersList(),this.setData(i({},"vehicleObj.vehicleNo",n))),"shiftList"===c)&&(this.getAllVehicle(),this.getVehicleOwnersList(),this.setData((i(t={},"vehicleObj.vehicleNo",""),i(t,"shiftScheduleId",n),t)));"driver"===c&&(this.getDriverInfo(),this.setData((i(a={},"carObj.name",n),i(a,"placeholder","输入姓名查询"),a)));u&&this.setData((i(r={editId:u},"vehicleObj.vehicleNo",f),i(r,"carObj.name",v),r))},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},bindInput:function(e){var t=e.detail.value;a.default.throttle(this.searchInput(t),600)},searchInput:function(e){"vehicle"===this.data.pageType&&this.getVehicleOwnersList("name",e),"driver"===this.data.pageType&&this.getDriverInfo(e),"shiftList"===this.data.pageType&&this.getVehicleOwnersList("name",e)},clearInput:function(){this.setData({inputSearchValue:""}),"vehicle"===this.data.pageType&&this.getVehicleOwnersList(),"driver"===this.data.pageType&&this.getDriverInfo()},getAllVehicle:function(){var e=this;wx.request({url:"".concat(a.default.urlPrefix,"/vehicleOwner/getAllVehicleOwners?vcode=").concat(this.data.vcode),method:"GET",header:this.data.headInfo,data:{},success:function(t){var i=t.data;"200"!==i.code||a.default.isEmpty(i.data)||e.setData({companyList:i.data})},complete:function(){}})},getVehicleOwnersList:function(e,i){var s=this;a.default.loading();var r="".concat(a.default.urlPrefix,"/vehicleOwner/getVehicleOwnersList?vcode=").concat(this.data.vcode);"name"===e&&(r=r+"&name="+i),"vehicleOwnerId"===e&&(r=r+"&vehicleOwnerId="+i),wx.request({url:r,method:"GET",header:this.data.headInfo,data:{},success:function(e){var i=e.data;if("200"!==i.code||a.default.isEmpty(i.data))s.setData({vehicleList:[]});else{var r=i.data;console.log(r);var c=r.findIndex((function(e){return e.vehicleName===s.data.vehicleObj.vehicleNo})),d=r.splice(c,1);r.unshift.apply(r,t(d)),s.setData({vehicleList:r})}},complete:function(){a.default.hideLoading()}})},getDriverInfo:function(e){var i=this,s="".concat(a.default.urlPrefix,"/driverInfo/findByVcodeAndName?vcode=").concat(this.data.vcode);e&&(s=s+"&name="+e),wx.request({url:s,method:"GET",header:this.data.headInfo,data:{},success:function(e){var s=e.data;if("200"!==s.code||a.default.isEmpty(s.data))i.setData({driverInfoList:[]});else{var r=s.data,c=r.findIndex((function(e){return e.name===i.data.carObj.name})),d=r.splice(c,1);r.unshift.apply(r,t(d)),i.setData({driverInfoList:s.data})}},complete:function(){a.default.hideLoading()}})},setVehicle:function(){wx.setStorageSync("hasSetVehicle","1"),wx.navigateBack({delta:1})},selectCompany:function(e){var t=e.currentTarget.dataset.id;if(-1===Number(t))return this.getVehicleOwnersList(),void this.setData({companyId:Number(t)});var i=this.data.companyList[t];this.getVehicleOwnersList("vehicleOwnerId",i.vehicleOwnerId),this.setData({companyId:i.vehicleOwnerId})},selectVehicle:function(e){var t=e.currentTarget.dataset.id?e.currentTarget.dataset.id:0,i=this.data.vehicleList[t];if(console.log(i),"baoban"===this.data.fromPage)2===this.data.shiftType?wx.request({url:"".concat(a.default.urlPrefix,"/order/mobile/waterShiftDriver/").concat(this.data.shiftScheduleId,"/").concat(this.data.vcode),method:"POST",header:this.data.headInfo,data:{vehicleNo:i.vehicleName,id:i.vehicleId},success:function(e){"200"===e.data.code&&(wx.setStorageSync("hasSetVehicle","1"),a.default.showToast("更新成功"),wx.navigateBack({delta:1}))}}):wx.request({url:"".concat(a.default.urlPrefix,"/order/mobile/shiftList/updateDriver/").concat(this.data.vcode),method:"POST",header:this.data.headInfo,data:{shiftScheduleId:this.data.shiftScheduleId,vehicleId:i.vehicleId,driverId:i.driverId},success:function(e){"200"===e.data.code&&(wx.setStorageSync("hasSetVehicle","1"),a.default.showToast("更新成功"),wx.navigateBack({delta:1}))}});else if(1===this.data.isMutiplie){var s=this.data.vehicleList;this.selectFlowVehicleItem=s[t],this.getDriverInfo(),this.setData({pageType:"driver",placeholder:"输入姓名查询"})}else{if(i.shiftScheduleId=this.data.shiftScheduleId,this.setData({vehicleObj:i}),wx.setStorageSync("vehicleObj",JSON.stringify(i)),"shiftList"===this.data.pageType)return void this.setVehicle();wx.navigateBack({delta:1})}},selectDriver:function(e){if(1===this.data.isMutiplie){var t=e.currentTarget.dataset.id?e.currentTarget.dataset.id:0,i=this.data.driverInfoList;this.selectFlowDriverItem=i[t],console.log(this.selectFlowDriverItem),console.log(this.selectFlowVehicleItem);var a={editId:"",vehicleNo:this.selectFlowVehicleItem.vehicleName,vehicleId:this.selectFlowVehicleItem.vehicleId,driverId:this.selectFlowDriverItem.id,driverName:this.selectFlowDriverItem.name};this.data.editId&&(a.editId=Number(this.data.editId)),wx.setStorageSync("flowVehicleDriverObj",JSON.stringify(a)),wx.navigateBack({delta:1})}else{var s=e.currentTarget.dataset.id?e.currentTarget.dataset.id:0,r=this.data.driverInfoList[s];this.setData({carObj:r}),wx.setStorageSync("driverNameObj",JSON.stringify(r)),wx.navigateBack({delta:1})}},confirmBtn:function(){if("driver"===this.data.pageType){var e=this.data.driverInfoList.filter((function(e){return e.isActive}));if(e.length>15)return void a.default.showToast("最多只支持同时选中15名司机！");console.log(e),wx.setStorageSync("flowDriverNameObj",JSON.stringify(e)),wx.navigateBack({delta:1})}else{var t=this.data.vehicleList.filter((function(e){return e.isActive}));if(console.log(t),t.length>15)return void a.default.showToast("最多只支持同时选中15辆车！");wx.setStorageSync("flowVehicleObj",JSON.stringify(t)),this.getDriverInfo(),this.setData({pageType:"driver",placeholder:"输入姓名查询"})}}}); 
 			}); 	require("pages/planControl/components/selectPage/selectPage.js");
 		__wxRoute = 'pages/ticketCountList/ticketCountList';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/ticketCountList/ticketCountList.js';	define("pages/ticketCountList/ticketCountList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../utils/util.js"),a=getApp();Page({data:{headInfo:{},isPullDown:!1,list:[],shiftScheduleId:"",vcode:"",activeTab:1,showFlow:!1,showReportStatic:!1,reportList:[],totalNumber:0,totalPrice:0},onLoad:function(t){var e=this;a.loginStatus.then((function(a){e.setData({vcode:a.vcode,shiftScheduleId:t.shiftScheduleId,showFlow:1===Number(t.showFlow),showReportStatic:1===Number(t.showReportStatic)}),0===Number(e.data.showReportStatic)&&e.setData({activeTab:2}),e.data.showFlow&&e.queryCountList(),e.data.showReportStatic&&e.queryReport()}))},onReady:function(){},onShow:function(){},onHide:function(){},switchTab:function(t){var a=t.currentTarget.dataset.type;this.setData({activeTab:Number(a)})},queryReport:function(){var a=this;(0,t.loading)();var e=[],o=0,i=0,s="".concat(t.urlPrefix,"/order/mobile/getOrderNuberAndPayPriceTicket");wx.request({url:s,method:"GET",header:this.data.headInfo,data:{shiftScheduleId:this.data.shiftScheduleId,vcode:this.data.vcode},success:function(a){var s=a.data;"200"!==s.code||(0,t.isEmpty)(s.data)?e=[]:(e=s.data.list||[],o=s.data.totalNumber,i=s.data.totalPayTickePrice)},complete:function(){a.setData({reportList:e,totalNumber:o,totalPrice:i}),a.data.isPullDown&&(wx.hideNavigationBarLoading(),wx.stopPullDownRefresh(),a.setData({isPullDown:!1})),(0,t.hideLoading)()}})},queryCountList:function(){var a=this;(0,t.loading)();var e=[],o="".concat(t.urlPrefix,"/order/mobile/getOrderCheck");wx.request({url:o,method:"GET",header:this.data.headInfo,data:{shiftScheduleId:this.data.shiftScheduleId,vcode:this.data.vcode},success:function(a){var o=a.data;console.log(o),e="200"!==o.code||(0,t.isEmpty)(o.data)?[]:o.data},complete:function(){a.setData({list:e}),a.data.isPullDown&&(wx.hideNavigationBarLoading(),wx.stopPullDownRefresh(),a.setData({isPullDown:!1})),(0,t.hideLoading)()}})},onUnload:function(){},onPullDownRefresh:function(){wx.showNavigationBarLoading(),this.setData({isPullDown:!0}),1===this.data.activeTab&&this.queryReport(),2===this.data.activeTab&&this.queryCountList()},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/ticketCountList/ticketCountList.js");
 		__wxRoute = 'pages/mySchedule/mySchedule';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mySchedule/mySchedule.js';	define("pages/mySchedule/mySchedule.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault"),e=require("../../@babel/runtime/helpers/createForOfIteratorHelper"),a=require("../../@babel/runtime/helpers/objectSpread2"),i=require("../../utils/util.js"),r=t(require("../../utils/calendar.js")),s=getApp();Page({data:{sixDayArrs:[],calChangeDate:!0,slideCalendar:null,queryDate:(0,i.formatDate)(new Date,"yyyy-MM-dd"),startDate:(0,i.formatDate)((0,i.addTime)(new Date,"-7D"),"yyyy-MM-dd"),filterTime:(new Date).getTime(),dptStationList:[{id:"",name:"出发站点"}],arrStationList:[{id:"",name:"到达站点"}],filterObj:{type:"",dptstationIndex:0,arrstationIndex:0},scheduleObj:{isLoading:!1,list:[],expiredList:[]},showScheduleQrcode:0,isPullDown:!1},listData:{normalSaleDays:60,endDate:new Date,startStationId:0,endStationId:0,ssid:"",scrollTop:0},onLoad:function(){var t=this;s.loginStatus.then((function(e){var a=e.vcode,i=e.ticketAuthority,r=e.useMode,n=[];i&&i.indexOf("1")>=0&&(n[0]=!0),i&&i.indexOf("2")>=0&&(n[1]=!0);var d="1"!==wx.getStorageSync("schedule-page-show-refresh-notice");t.setData({vcode:a,useMode:r,ticketAuthority:n,headInfo:{cookie:"unionId=".concat(s.globalData.unionId)},isShowNotice:d}),t.initCalendar(),t.getStationList(),t.getQrcodeSetting()}))},onShow:function(){try{wx.getStorageSync("hasSetVehicle")&&(this.refreshList(),wx.removeStorageSync("hasSetVehicle"))}catch(t){}},onPullDownRefresh:function(){this.setData({isPullDown:!0}),this.queryShiftList()},initCalendar:function(){console.log("init calendar");var t=new Date,e=t.getFullYear(),a=t.getMonth()+2;this.listData.endDate=(0,i.formatDate)(new Date(e,a,0)),this.slideCalendar=this.selectComponent("#slideCalendar");var r=this.slideCalendar.data,s=this.data;r.querydate=new Date(s.queryDate.replace(/-/g,"/")),r.startdate=s.startDate,r.enddate=this.listData.endDate,this.slideCalendar.init()},sixDateSel:function(t){var e=this,a=(e.listData,(0,i.formatDate)(new Date(e.data.queryDate),"yyyy-MM-dd")),r=t.detail.detail.date;if(a==r)return this.setData({calChangeDate:!0}),!1;setTimeout((function(){e.setData({calChangeDate:!0})}),600),r!=a&&(r=(0,i.parseDate)(r),e.resetState(r),e.queryShiftList(1))},resetState:function(t){var e=(0,i.formatDate)(new Date(t),"yyyy-MM-dd");this.setData({scheduleObj:{isLoading:!1,list:[]},queryDate:e})},toggleCalendar:function(t){var e=this,a=e.listData,s=(0,i.formatDate)((0,i.addTime)(new Date,"0D"),"yyyy-MM-"),n=(a.endDate.split("-"),(0,i.formatDate)(e.dateAdd(a.normalSaleDays-1,new Date),"yyyy-MM-dd"));r.default.show({startDate:s+"01",normalEndTime:n,endDate:a.endDate,selectDate:(0,i.formatDate)(new Date(e.data.queryDate),"yyyy-MM-dd"),basePageUrl:"../../../../",tipsMessage:"",scheduleDayArr:this.data.scheduleDayArr,soursePath:"bus",callback:function(t){var a=(0,i.formatDate)(new Date(e.data.queryDate),"yyyy-MM-dd"),r=t.date;r!=a&&(r=(0,i.parseDate)(r),e.resetState(r),e.queryShiftList(1),e.initCalendar())}})},dateAdd:function(t,e){return(0,i.addTime)(e,"".concat(parseInt(t,10),"D"))},hideNotice:function(){wx.setStorageSync("schedule-page-show-refresh-notice","1"),this.setData({isShowNotice:!1})},getStationStorage:function(){var t=wx.getStorageSync("myScheduleStation");if(t){var e=JSON.parse(t),a=e.startStationId,i=e.endStationId;if(void 0!==a){var r;(r=this.data.dptStationList.findIndex((function(t){return Number(t.id)===Number(a)})))>-1&&this.setData({"filterObj.dptstationIndex":r})}if(void 0!==i){var s;(s=this.data.arrStationList.findIndex((function(t){return Number(t.id)===Number(i)})))>-1&&this.setData({"filterObj.arrstationIndex":s})}}},queryShiftList:function(){var t=this;(0,i.loading)(),this.setData({"scheduleObj.isLoading":!0});var e=[],r=[],s="".concat(i.urlPrefix,"/order/mobile/driverScheduleList/").concat(this.data.vcode),n=this.data.dptStationList[this.data.filterObj.dptstationIndex].id,d=this.data.arrStationList[this.data.filterObj.arrstationIndex].id;wx.request({url:s,method:"GET",header:this.data.headInfo,data:{startDay:this.data.queryDate,tabType:0,startStationId:n,endStationId:d,scheduleType:1},success:function(s){(0,i.hideLoading)();var n=s.data;if("200"===n.code&&!(0,i.isEmpty)(n.data)){var d=n.data.map((function(t){return a(a({},t),{},{formatStartDay:(0,i.formatDate)(t.startDay,"MM-dd")})}));e=d.filter((function(t){return 0===t.expired})),r=d.filter((function(t){return 1===t.expired})),t.setData({"scheduleObj.list":[].concat(e),"scheduleObj.expiredList":[].concat(r),"scheduleObj.isLoading":!1})}}})},getStationList:function(){var t=this;Promise.all([this.getStartStations(),this.getEndStations()]).then((function(){t.getStationStorage(),t.queryShiftList()}))},getStartStations:function(){var t=this,e=[],a="".concat(i.urlPrefix,"/order/mobile/shiftList/startStations/").concat(this.data.vcode);return new Promise((function(r,s){wx.request({url:a,method:"GET",header:t.data.headInfo,data:{},success:function(t){var a=t.data;"200"!==a.code||(0,i.isEmpty)(a.data)||a.data.forEach((function(t){(0,i.isEmpty)(t)||e.push({id:t.stationId,name:t.stationName})}))},complete:function(){t.setData({dptStationList:[{id:"",name:"出发站点"}].concat(e)}),r()}})}))},getEndStations:function(){var t=this,e=[],a="".concat(i.urlPrefix,"/order/mobile/shiftList/endStations/").concat(this.data.vcode);return new Promise((function(r,s){wx.request({url:a,method:"GET",header:t.data.headInfo,data:{},success:function(t){var a=t.data;"200"!==a.code||(0,i.isEmpty)(a.data)||a.data.forEach((function(t){(0,i.isEmpty)(t)||e.push({id:t.stationId,name:t.stationName})}))},complete:function(){t.setData({arrStationList:[{id:"",name:"到达站点"}].concat(e)}),r()}})}))},clickFilter:function(t){var e=t.currentTarget.dataset.tag;this.data.filterObj.type===e?this.setData({"filterObj.type":""}):this.setData({"filterObj.type":e})},clickFilterMask:function(t){"mask"===t.target.dataset.tag&&this.setData({"filterObj.type":""})},selectStation:function(t){var e=t.currentTarget.dataset.index;e!==this.data.filterObj.dptstationIndex&&(this.setData({"filterObj.dptstationIndex":e}),this.setStorageStation(),this.queryShiftList()),this.setData({"filterObj.type":""})},selectarrStation:function(t){var e=t.currentTarget.dataset.index;e!==this.data.filterObj.stationIndex&&(this.setData({"filterObj.arrstationIndex":e}),this.setStorageStation(),this.queryShiftList()),this.setData({"filterObj.type":""})},setStorageStation:function(){var t={startStationId:this.data.dptStationList[this.data.filterObj.dptstationIndex].id.toString(),endStationId:this.data.arrStationList[this.data.filterObj.arrstationIndex].id.toString()};wx.setStorageSync("myScheduleStation",JSON.stringify(t))},getQrcodeSetting:function(){var t=this;wx.request({url:"".concat(i.urlPrefix,"/account/getAccountInfo?vcode=").concat(this.data.vcode),method:"GET",header:this.data.headInfo,success:function(e){var a=e.data;"200"!==a.code||(0,i.isEmpty)(a.data)||t.setData({showScheduleQrcode:Number(a.data.showScheduleQrcode)})}})},showQrcode:function(t){var e=this;0===this.data.useMode?this.getServerTime().then((function(a){var r=t.target.dataset.qrcodeid.startDate,s=(0,i.formatDate)(a,"yyyy/MM/dd");if((r=(0,i.formatDate)(r,"yyyy/MM/dd"))!==s){var n=e;wx.showModal({title:"提示",content:"班次日期非今天，是否继续报班？",success:function(e){e.confirm&&n.toShowQrcode(t.target.dataset.qrcodeid)}})}else e.toShowQrcode(t.target.dataset.qrcodeid)})).catch((function(){e.toShowQrcode(t.target.dataset.qrcodeid)})):this.toShowQrcode(t.target.dataset.qrcodeid)},toShowQrcode:function(t){var e=t.shiftScheduleId,a=t.vehicleId,r=s.globalData.id;r&&a?wx.navigateTo({url:"/pages/showQrcode/showQrcode?&driverId=".concat(r,"&shiftScheduleId=").concat(e,"&vehicleId=").concat(a,"&vcode=").concat(this.data.vcode)}):(0,i.showToast)("请选择车辆后报班")},getServerTime:function(){var t=this;return new Promise((function(e,a){wx.request({url:"".concat(i.urlPrefix,"/order/getTime"),method:"GET",header:t.data.headInfo,success:function(t){var r=t.data;"200"!==r.code||(0,i.isEmpty)(r.msg)?a():e(r.msg)},fail:function(){a()}})}))},refreshList:function(){this.setData({"scheduleObj.isLoading":!0});var t=wx.getStorageSync("vehicleObj"),a={};try{if(!(0,i.isEmpty)(t)){a=JSON.parse(t);var r,s=e(this.data.scheduleObj.list);try{for(s.s();!(r=s.n()).done;){var n=r.value;Number(n.shiftScheduleId)===Number(a.shiftScheduleId)&&(n.vehicleId=Number(a.vehicleId),n.vehicleNo=a.vehicleName)}}catch(t){s.e(t)}finally{s.f()}this.setData({"scheduleObj.list":this.data.scheduleObj.list}),this.setData({"scheduleObj.isLoading":!1}),wx.removeStorageSync("vehicleObj")}}catch(t){this.setData({"scheduleObj.isLoading":!1})}},selectCar:function(t){var e=t.currentTarget.dataset.shiftscheduleid;wx.navigateTo({url:"/pages/planControl/components/selectPage/selectPage?t=shiftList&vcode="+this.data.vcode+"&id="+e})}}); 
 			}); 	require("pages/mySchedule/mySchedule.js");
 		__wxRoute = 'pages/showQrcode/showQrcode';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/showQrcode/showQrcode.js';	define("pages/showQrcode/showQrcode.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=require("../../utils/util.js"),a=e(require("./weapp.qrcode.esm.js"));Page({data:{},onLoad:function(e){if(!(0,t.isEmpty)(e)){var c=e.driverId,i=e.shiftScheduleId,r=e.vehicleId,n=e.vcode;(0,a.default)({width:230,height:230,canvasId:"myQrcode",text:"shiftschedule:".concat(n,",").concat(i,",").concat(c,",").concat(r)})}},goBack:function(){wx.navigateBack({delta:1})},preventTap:function(){}}); 
 			}); 	require("pages/showQrcode/showQrcode.js");
 		__wxRoute = 'pages/myBill/myBill';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/myBill/myBill.js';	define("pages/myBill/myBill.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../utils/util"),a=getApp();Page({data:{headInfo:{},datePicker:[{label:"今天",days:1},{label:"近7天",days:7},{label:"近30天",days:30},{label:"自定义",days:7}],dataPickerIndex:0,sumDays:1,startDate:"",endDate:"",accountPriceList:[],sumData:{},loading:!1},onLoad:function(){var e=(0,t.formatDate)(new Date,"yyyy-MM-dd");this.setData({endDate:e,headInfo:{cookie:"unionId=".concat(a.globalData.unionId)}}),this.queryList()},queryList:function(){var a=this;if(!this.data.loading){this.setData({loading:!0}),(0,t.loading)();var e=this.data,i=e.dataPickerIndex,s=e.startDate,d=e.endDate,n=null;n=0===i?[d,d]:[s,d],console.log(n,"查询列表"),wx.request({url:"".concat(t.urlPrefix,"/driverInfo/findAccountPrice"),method:"GET",header:this.data.headInfo,data:{startDay:n[0],endDay:n[1]},success:function(e){var i=e.data;i&&"200"===i.code&&!(0,t.isEmpty)(i.data)&&(console.log(i.data),a.setData({accountPriceList:i.data.data||[],sumData:i.data}))},complete:function(){a.setData({loading:!1}),(0,t.hideLoading)()}})}},datePickerSelect:function(a){var e=a.currentTarget.dataset.index,i=this.data.datePicker[e].days,s=this.data.startDate;e>0&&(s=(0,t.formatDate)(new Date((new Date).getTime()-24*i*60*60*1e3),"yyyy-MM-dd")),this.setData({dataPickerIndex:e,sumDays:i,startDate:s}),this.queryList()},startDateChange:function(t){var a=t.detail.value;this.setData({startDate:a}),this.limitCustomDate()},endDateChange:function(t){var a=t.detail.value;this.setData({endDate:a}),this.limitCustomDate()},limitCustomDate:function(){var a=this.data,e=a.startDate,i=a.endDate;90-((0,t.newDate)(i).getTime()-(0,t.newDate)(e).getTime())/864e5<0?(0,t.showToast)("查询范围3个月内"):this.queryList()}}); 
 			}); 	require("pages/myBill/myBill.js");
 	e.context;if(null===(e=t.emitter))return t._defaultValue;var n=Ce(_e.index++);return void 0===n.context&&(n.context=!0,n.component=_e.current,e.on((function(e){n.component&&(n.component._disable=!1,n.component.setState({}))}))),e.value}var Ye,Je=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};i(this,e),this.value=t,this.handlers=[]}return c(e,[{key:"on",value:function(e){this.handlers.push(e)}},{key:"off",value:function(e){this.handlers=this.handlers.filter((function(t){return t!==e}))}},{key:"set",value:function(e){var t=this;ve(e,this.value)||(this.value=e,this.handlers.forEach((function(e){return e(t.value)})))}}]),e}(),Xe=0;function Ze(e){var t={emitter:null,_id:"__context_"+Xe+++"__",_defaultValue:e};return{Provider:function(n){var o=t.emitter;o?o.set(n):t.emitter=new Je(e)},context:t}}function et(e,t){return e.prototype.shouldComponentUpdate=function(e){return ge(t)?!t(this.props,e):!function(e,t){if("object"!==r(e)&&"object"!==r(t))return e===t;if(null===e&&null===t)return 1;if(null!==e&&null!==t){if(ve(e,t))return 1;var n=e?Object.keys(e):[],o=t?Object.keys(t):[];if(n.length===o.length){for(var i=0;i<n.length;i++){var a=n[i];if(!t.hasOwnProperty(a)||!ve(e[a],t[a]))return}return 1}}}(this.props,e)},e}"alipay"===n.env.TARO_ENV?(my.dittoEventCenter||(my.dittoEventCenter=new w),t.eventCenter=Ye=my.dittoEventCenter):t.eventCenter=Ye=new w,n={Component:d,Events:w,eventCenter:Ye,getEnv:ae,ENV_TYPE:re,render:se,internal_safe_get:Z,internal_safe_set:ee,internal_inline_style:oe,internal_get_original:ue,internal_force_update:Pe,noPromiseApis:S,onAndSyncApis:O,otherApis:k,initPxTransform:ye,createRef:le,commitAttachRef:fe,detachAllRef:pe,Link:x,interceptors:C,RefsArray:j,handleLoopRef:de,Current:_e,useEffect:Ve,useLayoutEffect:He,useReducer:Ue,useState:je,useDidShow:ke,useDidHide:Ae,usePullDownRefresh:Ee,useReachBottom:Te,usePageScroll:Re,useResize:$e,useShareAppMessage:Ie,useTabItemTap:De,useRouter:Me,useScope:Le,useRef:ze,useCallback:Ke,useMemo:qe,useImperativeHandle:Qe,invokeEffects:Fe,useContext:Ge,createContext:Ze,memo:et,getIsUsingDiff:Se,setIsUsingDiff:Oe},t.default=n,t.Component=d,t.Events=w,t.eventCenter=Ye,t.getEnv=ae,t.ENV_TYPE=re,t.render=se,t.internal_safe_get=Z,t.internal_safe_set=ee,t.internal_inline_style=oe,t.internal_get_original=ue,t.internal_force_update=Pe,t.noPromiseApis=S,t.onAndSyncApis=O,t.otherApis=k,t.initPxTransform=ye,t.createRef=le,t.commitAttachRef=fe,t.detachAllRef=pe,t.Link=x,t.interceptors=C,t.RefsArray=j,t.handleLoopRef=de,t.Current=_e,t.useEffect=Ve,t.useLayoutEffect=He,t.useReducer=Ue,t.useState=je,t.useDidShow=ke,t.useDidHide=Ae,t.usePullDownRefresh=Ee,t.useReachBottom=Te,t.usePageScroll=Re,t.useResize=$e,t.useShareAppMessage=Ie,t.useTabItemTap=De,t.useRouter=Me,t.useScope=Le,t.useRef=ze,t.useCallback=Ke,t.useMemo=qe,t.useImperativeHandle=Qe,t.invokeEffects=Fe,t.useContext=Ge,t.createContext=Ze,t.memo=et,t.getIsUsingDiff=Se,t.setIsUsingDiff=Oe}).call(this,n(17),n(18))},20:function(e,t,n){"use strict";e.exports=n(21).default,e.exports.default=e.exports},21:function(e,t,n){"use strict";(function(e){var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r=n(19),i=function(e){return e&&"object"===(void 0===e?"undefined":o(e))&&"default"in e?e.default:e}(r),a=null;function c(){return a}function u(e){a=e}function s(e){return(s="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return void 0===e?"undefined":o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":o(e)})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==(void 0===t?"undefined":o(t))&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){if(e=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t))return(t=Object.getOwnPropertyDescriptor(e,t)).get?t.get.call(n):t.value})(e,t,n||e)}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(e){return null!=e&&"object"===s(e)&&!Array.isArray(e)}function b(e,t){var n=Object.assign({},e);if(m(e)&&m(t))for(var o in t)m(e[o])&&m(t[o])?n[o]=b(e[o],t[o]):n[o]=t[o];return n}function _(e,t){var n=a,o=n.dispatch,r=function(e,t){return"function"==typeof e?e(t):m(e)?Object.keys(e).reduce((function(n,o){var r=e[o];return"function"==typeof r&&(n[o]=function(){return t(r.apply(void 0,arguments))}),n}),{}):{}}(t,o);function i(){var t=this,o=!1,i=e(n.getState(),this.props),a=Object.assign({},this.props);Object.keys(i).forEach((function(e){var n=i[e];m(n)&&m(r[e])&&(n=b(n,r[e])),t.props[e]!==n&&(t.props[e]=n,o=!0)})),o&&(this.prevProps=a,this._unsafeCallUpdate=!0,this.setState({},(function(){delete t._unsafeCallUpdate})))}return r.dispatch=o,function(t){var o=e(n.getState(),t.defaultProps||{});t.properties&&o&&Object.keys(o).forEach((function(e){delete t.properties[e]}));var c=null;return function(){function o(t,i){var a;return l(this,o),a=y(this,d(o).call(this,Object.assign.apply(Object,Array.prototype.slice.call(arguments).concat([b(e(n.getState(),t),r)])),i)),Object.keys(r).forEach((function(e){a["__event_".concat(e)]=r[e]})),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(o,t),p(o,[{key:"_constructor",value:function(){var t;this.$scope&&(t=a,Object.assign(this.props,b(e(t.getState(),this.props),r)),c=t.subscribe(i.bind(this))),v(d(o.prototype),"_constructor",this)&&v(d(o.prototype),"_constructor",this).call(this,this.props)}},{key:"componentWillUnmount",value:function(){v(d(o.prototype),"componentWillUnmount",this)&&v(d(o.prototype),"componentWillUnmount",this).call(this),c&&c(),c=null}}]),o}()}}e=e||{},Object.getPrototypeOf(e),e=function e(){l(this,e)};var w=i.createContext(null);function S(){return r.useContext(w)}function O(){return S().store}function P(){return O().dispatch}var C=function(e){e()},j={notify:function(){}},x=function(){function e(t,n){l(this,e),this.store=t,this.parentSub=n,this.unsubscribe=null,this.listeners=j,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}return p(e,[{key:"addNestedSub",value:function(e){return this.trySubscribe(),this.listeners.subscribe(e)}},{key:"notifyNestedSubs",value:function(){this.listeners.notify()}},{key:"handleChangeWrapper",value:function(){this.onStateChange&&this.onStateChange()}},{key:"isSubscribed",value:function(){return Boolean(this.unsubscribe)}},{key:"trySubscribe",value:function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var e=C,t=[],n=[];return{clear:function(){t=n=null},notify:function(){var o=t=n;e((function(){for(var e=0;e<o.length;e++)o[e]()}))},get:function(){return n},subscribe:function(e){var o=!0;return(n=n===t?t.slice():n).push(e),function(){o&&null!==t&&(o=!1,(n=n===t?t.slice():n).splice(n.indexOf(e),1))}}}}())}},{key:"tryUnsubscribe",value:function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=j)}}]),e}();function k(e,t){return e===t}function A(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:k;!function(e,t,n,o,r,i,a,c){var u,s,l;if(!e)throw void 0===t?l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."):(u=[n,o,r,i,a,c],s=0,(l=new Error(t.replace(/%s/g,(function(){return u[s++]})))).name="Invariant Violation"),l.framesToPop=1,l}(e,"You must pass a selector to useSelectors");var n,o=S(),i=o.store,a=o.subscription,c=g(r.useReducer((function(e){return e+1}),0),2)[1],u=r.useMemo((function(){return new x(i,a)}),[i,a]),s=r.useRef(),l=r.useRef(),f=r.useRef();try{n=e!==l.current||s.current?e(i.getState()):f.current}catch(e){throw o="An error occured while selecting the store state: ".concat(e.message,"."),s.current&&(o+="\nThe error may be correlated with this previous error:\n".concat(s.current.stack,"\n\nOriginal stack trace:")),new Error(o)}return r.useEffect((function(){l.current=e,f.current=n,s.current=void 0})),r.useEffect((function(){function e(){try{var e=l.current(i.getState());if(t(e,f.current))return;f.current=e}catch(e){s.current=e}c({})}return u.onStateChange=e,u.trySubscribe(),e(),function(){return u.tryUnsubscribe()}}),[i,u]),n}t.default={connect:_,Provider:e,getStore:c,setStore:u,useDispatch:P,useSelector:A,useStore:O,ReduxContext:w},t.connect=_,t.Provider=e,t.getStore=c,t.setStore=u,t.useDispatch=P,t.useSelector=A,t.useStore=O,t.ReduxContext=w}).call(this,n(17))},22:function(e,t,n){"use strict";var o=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){e[o=void 0===o?n:o]=t[n]},r=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},i=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.connectWrap=t.diorConnect=t.connect=t.PageComponent=t.createActions=t.createRedux=t.generalActions=t.getRootReducer=t.initState=t.configStore=t.combineReducers=t.store=t.setStore=void 0;var a=n(23);Object.defineProperty(t,"store",{enumerable:!0,get:function(){return a.store}}),Object.defineProperty(t,"combineReducers",{enumerable:!0,get:function(){return a.combineReducers}}),Object.defineProperty(t,"configStore",{enumerable:!0,get:function(){return a.configStore}}),Object.defineProperty(t,"initState",{enumerable:!0,get:function(){return a.initState}}),Object.defineProperty(t,"getRootReducer",{enumerable:!0,get:function(){return a.getRootReducer}}),Object.defineProperty(t,"generalActions",{enumerable:!0,get:function(){return a.generalActions}}),Object.defineProperty(t,"createRedux",{enumerable:!0,get:function(){return a.createRedux}}),Object.defineProperty(t,"createActions",{enumerable:!0,get:function(){return a.createActions}}),i=i(n(28)),t.connectWrap=i.default;var c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t}(n(29));t.diorConnect=c.default,Object.defineProperty(t,"PageComponent",{enumerable:!0,get:function(){return c.PageComponent}});var u=n(20);Object.defineProperty(t,"setStore",{enumerable:!0,get:function(){return u.setStore}}),n=c.default,t.connect=n,t.default={setStore:u.setStore,store:a.store,combineReducers:a.combineReducers,configStore:a.configStore,initState:a.initState,getRootReducer:a.getRootReducer,generalActions:a.generalActions,createRedux:a.createRedux,createActions:a.createActions,PageComponent:c.PageComponent,connect:n,diorConnect:c.default,connectWrap:i.default}},23:function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){return(r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=function(e,t,n,o){return new(n=n||Promise)((function(r,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function c(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){e.done?r(e.value):function(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(a,c)}u((o=o.apply(e,t||[])).next())}))},a=function(e,t){var n,o,r,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},a={next:c(0),throw:c(1),return:c(2)};return"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,(a=r?[2&a[0],r.value]:a)[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=0<(r=i.trys).length&&r[r.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},c=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,c=i.length;a<c;a++,r++)o[r]=i[a];return o};Object.defineProperty(t,"__esModule",{value:!0}),t.configStore=t.getRootReducer=t.store=t.generalActions=t.combineReducers=t.createActions=t.createRedux=t.reducers=t.initState=void 0;var u=n(24);function s(e,t,n,u){var s=this;return(n="object"!==(void 0===n?"undefined":o(n))?{}:n).__changeAsyncComplete__=function(e){return{__asyncComplete__:e}},n.setData=function(e){return e},n.asyncDataHydra=function(){return{}},n.asyncData=u,n.__hadGeneralActions=!0,u||console.warn("未定义asyncData函数"),Object.keys(n).forEach((function(u){var l=e+"|"+u.toUpperCase(),f=n[u];n[u]=function(){for(var n=[],p=0;p<arguments.length;p++)n[p]=arguments[p];return i(s,void 0,void 0,(function(){var i;return a(this,(function(a){switch(a.label){case 0:return[4,f.apply(void 0,c([t],n))];case 1:return(i=a.sent())||(console.warn("action方法未返回更新后的state对象，将使用原initialState返回"),i=t),i.type&&(delete i.type,console.warn("返回state中避免使用type字段")),i=i||{},[2,function(t){var n;"function"==typeof i?i((function(e){e.type?"function"==typeof e.type&&(e.type=e.type.toString()):e.type=l,"asyncData"===u&&(e.__asyncComplete__=!0),t(e)})):"object"===(void 0===i?"undefined":o(i))&&"string"==typeof i.REDUCERS&&i.PAYLOAD?(n={type:e+"|"+i.REDUCERS.toUpperCase()},n=r(r({},i.PAYLOAD),n),"asyncData"===u&&(n.__asyncComplete__=!0),t(n)):(i.type?"function"==typeof i.type&&(i.type=i.type.toString()):i.type=l,"asyncData"===u&&(i.__asyncComplete__=!0),t(i))}]}}))}))},n[u].toString=function(){return l}})),n}function l(e,t){return r(r({},e),t)}n=function(e){return e&&e.__esModule?e:{default:e}}(n(27)),t.initState={},t.reducers={},t.createRedux=function(e,n){t.initState[e]||(t.initState[e]=n.initialState),t.reducers[e]&&console.error("reducer命名冲突：请注意！dior代码有重复命名reducer: "+e),t.reducers[e]=function(e,t){return void 0===e&&(e=n.initialState),n.reducers[t.type]?(t=n.reducers[t.type](e,t),r(r({},e),t)):e}},t.createActions=s,t.combineReducers=function(e){return function(n,o){void 0===n&&(n={}),e&&Object.keys(e).forEach((function(e){t.reducers[e]&&console.error("reducer命名冲突：请注意！原始redux代码有重复命名reducer: "+e)}));for(var i=r(r({},e),t.reducers),a=Object.keys(i),c=!1,u={},s=0;s<a.length;s++){var l=a[s],f=i[l],p=n[l],d=f(p,o);if(void 0===d)throw f=function(e,t){return"Given "+((t=t&&t.type)&&'action "'+String(t)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}(l,o),new Error(f);u[l]=d,c=c||d!==p}return c?u:n}},t.generalActions=function(e){var n=e.name,o=e.initialState,r=e.asyncData,i=e.actions,a=void 0===i?{}:i,c=void 0===(e=e.reducers)?{}:e;if(a.__hadGeneralActions)return a;!function(e,t){var n=[];if(t.forEach((function(t){e[t]&&n.push(t)})),n.length)throw new Error("actions 中不可使用保留关键key: "+n.join(","))}(a,["asyncData","asyncDataHydra","setData","__changeAsyncComplete__"]),r=s(n,o,a,r);var u={};return Object.keys(a).forEach((function(e){u[a[e].toString()]=function(t,n){var r=(c[e]||l)(t,n);return Object.keys(r).forEach((function(e){e in o&&(o[e]=r[e])})),r}})),t.createRedux(n,{initialState:o,reducers:u}),r};var f="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.compose,p=[n.default];t.store={};var d=null;t.getRootReducer=function(){return d},t.configStore=function(e){return d=t.combineReducers(e),e="object"===("undefined"==typeof window?"undefined":o(window))&&window&&window.__PRELOADED_STATE__||{},u.createStore(d,Object.assign(t.initState,e),f(u.applyMiddleware.apply(void 0,p)))}},28:function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e,t,n,o){return new(n=n||Promise)((function(r,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function c(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){e.done?r(e.value):function(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(a,c)}u((o=o.apply(e,t||[])).next())}))},i=function(e,t){var n,o,r,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},a={next:c(0),throw:c(1),return:c(2)};return"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,(a=r?[2&a[0],r.value]:a)[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=0<(r=i.trys).length&&r[r.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(20),c=n(23);t.default=function(e,t){var n=this,u="object"===("undefined"==typeof window?"undefined":o(window))&&window&&window.__PRELOADED_STATE__||{};return a.connect((function(e){var n={};return Object.keys(t).forEach((function(t){n[t]=e[t]||c.initState[t]})),n}),(function(o){var a={};return Object.keys(t).forEach((function(c){function s(t){d.hasOwnProperty(t)&&(p[t]=function(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];return r(n,void 0,void 0,(function(){var n,r;return i(this,(function(i){switch(i.label){case 0:return"asyncData"===(n=t)&&function(){var t=!1;return u&&u[e]&&(t=!0,delete u[e]),t}()&&(n="asyncDataHydra"),r=o,[4,d[n].apply(d,a)];case 1:return r.apply(void 0,[i.sent()]),[2]}}))}))})}var l,f="$"+c,p={},d=t[c];for(l in d)s(l);a[f]=p})),a}))}},29:function(e,t,n){"use strict";var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=function(e,t,n,o){return new(n=n||Promise)((function(r,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function c(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){e.done?r(e.value):function(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(a,c)}u((o=o.apply(e,t||[])).next())}))},c=function(e,t){var n,o,r,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},a={next:c(0),throw:c(1),return:c(2)};return"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,(a=r?[2&a[0],r.value]:a)[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=0<(r=i.trys).length&&r[r.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},u=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PageComponent=void 0;var s,l=u(n(15)),f=u(n(30)),p=u(n(28)),d=n(23);function h(e,t){var n=s.apply(this,arguments)||this;return n.$addLifeHook("componentWillMount",(function(){console.log("%c PageComponent componentWillMount","color:#ccc")})),n.$addLifeHook("componentDidMount",(function(){return a(n,void 0,void 0,(function(){var e,t;return c(this,(function(n){switch(n.label){case 0:return/Unknown/.test(l.default.getEnv())?[3,6]:(e=this.props["$"+this.constructor._diorName])&&"function"==typeof e.asyncData?l.default.getEnv()!==l.default.ENV_TYPE.WEB?[3,3]:"object"!==("undefined"==typeof window?"undefined":r(window))?[3,2]:(t={host:window.location.host,pathname:window.location.pathname,query:f.default.parse(window.location.search.substr(1)),userAgent:window.navigator.userAgent},[4,e.asyncData(t)]):[3,5];case 1:n.sent(),n.label=2;case 2:return[3,5];case 3:return t={host:"",pathname:this.$router.path,query:this.$router.params,userAgent:""},[4,e.asyncData(t)];case 4:n.sent(),n.label=5;case 5:console.log("%c PageComponent componentDidMount","color:#ccc"),n.label=6;case 6:return[2]}}))}))})),n.$addLifeHook("componentDidShow",(function(){console.log("%c PageComponent componentDidShow","color:#ccc")})),n.$addLifeHook("componentWillUnmount",(function(){console.log("%c PageComponent componentWillUnmount","color:#ccc")})),n.$addLifeHook("componentDidHide",(function(){console.log("%c PageComponent componentDidHide","color:#ccc")})),n}i(h,s=l.default.Component),h.prototype.componentWillMount=function(){},h.prototype.componentDidMount=function(){},h.prototype.componentDidShow=function(){},h.prototype.componentWillUnmount=function(){},h.prototype.componentDidHide=function(){},h.prototype.getH5FrameComponent=function(e){return e||function(){return""}},i=h,t.PageComponent=i,t.default=function(e,t){return e.initialState=e.initialState||e.initalState,t&&(t=null,console.warn("Connect 方法的第二个deps参数已被删除，若要共享数据请使用app.globalData存储")),function(n){e||console.warn("未找到dior配置");var o={};n._diorName=e.name;var i="object"===("undefined"==typeof window?"undefined":r(window))&&window&&window.__PRELOADED_STATE__||{},a=i[e.name];return Object.keys(i).some((function(t){return t===e.name}))&&a&&(e.initialState=a),a=d.generalActions(e),o[e.name]=a,t&&t.forEach((function(e){var t=d.generalActions(e);o[e.name]=t})),p.default(e.name,o)(n)}}},696:function(e,t,n){"use strict";n.r(t);var o,r=n(697);for(o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o)},697:function(e,t,n){"use strict";n.r(t);var o,r=n(698),i=n.n(r);for(o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=i.a},698:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e};function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i,a=n(15),c=s(a),u=s(n(67));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t=l(this,(e=f.__proto__||Object.getPrototypeOf(f)).call.apply(e,[this].concat(o)))).$usedState=["anonymousState__temp","viewClsName","className","hasMarginBottom","viewEvtid","viewEvent","viewAction","action","wrapTagStyle","clickEvtid","clickEvent","clickAction","children"],t.config={styleIsolation:"apply-shared"},t.clickHandler=function(){var e=(r=t.props).clickEvtid,n=r.clickEvent,o=r.clickAction,r=r.action;e&&n&&u.default&&u.default.sendUlog&&u.default.sendUlog({evt:e,event:n,action:Object.assign({},o,r)})},t.customComponents=[],l(t,e)}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(f,a.Component),o(f,[{key:"_constructor",value:function(e){(function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);return void 0!==r?"value"in r?r.value:void 0!==(r=r.get)?r.call(o):void 0:null!==(t=Object.getPrototypeOf(t))?e(t,n,o):void 0})(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"_constructor",this).call(this,e),this.viewClsName="",this.state={hasMarginBottom:!1},this.viewClsName=this.getViewClsName(),this.hasExpo=!1,this.$$refs=new c.default.RefsArray}},{key:"getViewClsName",value:function(){for(var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:8,t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n=t.length,o="",r=0;r<e;r++)o+=t.charAt(Math.floor(Math.random()*n));return o}},{key:"initViewUlog",value:function(e){var t=this;console.log("--initViewUlog---",e);var n=this.$scope&&this.$scope.createIntersectionObserver(),o={},r=(c=this.props).viewEvtid,i=c.viewEvent,a=c.viewAction,c=c.action;r&&i?o={evt:r,event:this.props.viewEvent,action:Object.assign({},void 0===a?{}:a,void 0===c?{}:c)}:console.log("请传入对应evt或event！",this),e="#ulog-"+e,n&&n.relativeToViewport().observe(e,(function(e){0<e.intersectionRatio&&!t.hasExpo&&(t.hasExpo=!0,u.default&&u.default.sendUlog&&u.default.sendUlog(o),e.intersectionRect.height<=1&&t.setState({hasMarginBottom:!0}),n.disconnect())}))}},{key:"componentDidMount",value:function(){console.log("---componentDidMount------调用曝光");var e=(t=this.props).viewEvtid,t=t.viewEvent;e&&t&&this.initViewUlog(this.viewClsName)}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{},this.$prefix;var e=this.viewClsName,t=(this.__state.hasMarginBottom,n=this.__props).className,n=(n.viewEvtid,n.viewEvent,n.wrapTagStyle);return n=(0,a.internal_inline_style)(Object.assign({minHeight:"1px"},n)),Object.assign(this.__state,{anonymousState__temp:n,viewClsName:e,className:t}),this.__state}}]),o=i=f,i.$$events=["clickHandler"],i.$$componentPath="node_modules/@ke/ditto-ui/dist/weapp/components/KeUlogView/index",o.defaultProps={className:"",wrapTagStyle:{},viewEvtid:"",viewEvent:"",viewAction:{},clickEvtid:"",clickEvent:"",clickAction:{},action:{}},t.default=o,Component(n(15).default.createComponent(o))},90:function(e,t,n){"use strict";e.exports=n(91),e.exports.default=e.exports},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.KeCurrentEnv=t.KeDuid=t.KeListenPageVisiable=t.KeSetPageTitle=t.custom=t.KeToast=t.KeLogin=t.KeIM=t.setTrackConfig=t.send=t.resetGlobalData=t.KeUlog=t.avatarClick=t.automaticPageView=t.call400=t.getAgentInfo=void 0;var o=n(92);Object.defineProperty(t,"getAgentInfo",{enumerable:!0,get:function(){return o.getAgentInfo}}),Object.defineProperty(t,"call400",{enumerable:!0,get:function(){return o.call400}}),Object.defineProperty(t,"automaticPageView",{enumerable:!0,get:function(){return o.automaticPageView}}),Object.defineProperty(t,"avatarClick",{enumerable:!0,get:function(){return o.avatarClick}});var r=n(99);Object.defineProperty(t,"resetGlobalData",{enumerable:!0,get:function(){return r.resetGlobalData}}),Object.defineProperty(t,"send",{enumerable:!0,get:function(){return r.send}}),Object.defineProperty(t,"setTrackConfig",{enumerable:!0,get:function(){return r.setTrackConfig}});var i=n(100);Object.defineProperty(t,"KeIM",{enumerable:!0,get:function(){return h(i).default}});var a=n(107);Object.defineProperty(t,"KeLogin",{enumerable:!0,get:function(){return h(a).default}});var c=n(111);Object.defineProperty(t,"custom",{enumerable:!0,get:function(){return c.custom}});var u=n(112);Object.defineProperty(t,"KeSetPageTitle",{enumerable:!0,get:function(){return u.KeSetPageTitle}});var s=n(113);Object.defineProperty(t,"KeListenPageVisiable",{enumerable:!0,get:function(){return s.KeListenPageVisiable}});var l=n(97);Object.defineProperty(t,"KeDuid",{enumerable:!0,get:function(){return h(l).default}});var f=n(98);Object.defineProperty(t,"KeCurrentEnv",{enumerable:!0,get:function(){return h(f).default}});var p=d(n(99));function d(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function h(e){return e&&e.__esModule?e:{default:e}}n=d(n(111)),t.KeUlog=p,t.KeToast=n},92:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.avatarClick=t.automaticPageView=t.call400=t.getAgentInfo=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,o=arguments[t];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=u(n(15)),i=(u(n(67)),function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(93))),a=u(n(94)),c=u(n(97));function u(e){return e&&e.__esModule?e:{default:e}}function s(){var e=void 0;return"WEAPP"===r.default.getEnv()&&(e="beike_wechat_xcx"),"SWAN"===r.default.getEnv()&&(e="beike_bd_xcx"),"WEAPP"===r.default.getEnv()&&(e="beike_wechat_xcx"),"HWAPP"===r.default.getEnv()&&(e="beike_wechat_xcx"),p&&p.globalData&&p.globalData.isQB?"beike_qb_xcx":e}function l(e){return new Promise((function(t,n){var i="https://adx.ke.com/sdk/phone400";-1<d.indexOf("test")?i="http://test-adx.ke.com/sdk/phone400":-1<d.indexOf("preview")&&(i="http://preview-adx.ke.com/sdk/phone400"),r.default.request({url:i,method:"POST",data:o({mediumId:e.mediumId,adId:e.adId,hdicCityId:e.hdicCityId},e.queryInfo),header:{"content-type":"application/json",UCID:h().ucid,OPENID:h().openId}}).then((function(e){e&&e.data&&1===e.data.code?t(e&&e.data):n()})).catch((function(e){n(e)}))}))}function f(e){(e=e.phone400||e.mobile||"")&&r.default.makePhoneCall({phoneNumber:e.replace(/-/g,",")}).then((function(){})).catch((function(){}))}u(n(98));var p=r.default.getApp(),d='"production"',h=function(){var e;return{openId:(e=i.read("wx_data"))&&e.open_id||"",ucid:(e=i.read("lj_user_info"))&&e.ucid||""}};n=void 0,t.call400=n=function(e){var t=e.SJLogConfig,n=e.mediumId,o=e.adId,r=e.cityId,i=e.agentInfo;t&&t.digV&&a.default.phoneClick(t),l({mediumId:n,adId:o,hdicCityId:r||11e4,queryInfo:{hdicCityId:r||11e4,ucId:i.agentUcid,digV:i.ePlan||""}}).then((function(e){f(e=e&&e.data&&e.data[0]||{}),a.default.phoneClick({globalData:p&&p.globalData||{},digV:i.ePlan})})).catch((function(e){}))},t.getAgentInfo=function(e){return new Promise((function(t,n){var o=function(e){var t=e&&e.mediumId,n=e&&e.adId,o=e&&e.queryInfo||{},r=e&&e.hdicCityId,i=(n=n.join(","),"");if(t&&n&&(i="mediumId="+t+"&adIds="+n+"&hdicCityId="+r,o))for(var a in o)a&&(i="orderId"===a?i+"&paramMap[brand_order_id]="+o[a]:"roomId"===a?i+"&paramMap[roomId]="+o[a]:i+"&"+a+"="+o[a]);return i+"&paramMap[guestCodeSource]="+(p&&p.globalData&&p.globalData.source||e.source||"")}(e),i=-1<d.indexOf("prod")?"https://adx.ke.com/perbid/recommends?":"http://preview-adx.ke.com/perbid/recommends?";e.isProdAdx?i="https://adx.ke.com/perbid/recommends?":e.isPreviewAdx&&(i="http://preview-adx.ke.com/perbid/recommends?"),o&&r.default.request({url:i+o,header:{UCID:h().ucid,OPENID:h().openId,"CLIENT-SOURCE":s(),Duid:c.default}}).then((function(e){e&&e.data&&1===e.data.code?t(e&&e.data):n()})).catch((function(){n()}))}))},t.call400=n,t.automaticPageView=function(e){a.default.automaticPageView({clsNameArr:e,global:r.default,Env:"weapp"})},t.avatarClick=function(e){a.default.avatarClick(e)}},920:function(e,t,n){"use strict";n.r(t);var o,r=n(921);for(o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o)},921:function(e,t,n){"use strict";n.r(t);var o,r=n(922),i=n.n(r);for(o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=i.a},922:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,o=arguments[t];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&c.return&&c.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e};function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var c,u=n(15),s=p(u),l=p(n(630)),f=n(923);function p(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t=d(this,(e=h.__proto__||Object.getPrototypeOf(h)).call.apply(e,[this].concat(o)))).$usedState=["anonymousState__temp","$compid__210","wrapCls","style","className","tabOption","tabPosition","children"],t.config={styleIsolation:"apply-shared"},t.customComponents=["KeTabs"],d(t,e)}n(924),function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(h,u.Component),i(h,[{key:"_constructor",value:function(e){(function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);return void 0!==r?"value"in r?r.value:void 0!==(r=r.get)?r.call(o):void 0:null!==(t=Object.getPrototypeOf(t))?e(t,n,o):void 0})(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"_constructor",this).call(this,e),this.state={},this.$$refs=new s.default.RefsArray}},{key:"_createData",value:function(){this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{};var e=this.$prefix,t=(0,u.genCompid)(e+"$compid__210"),n=(s=r(t,2))[0],i=s[1],a=this.__props,c=a.style,s=(e=a.className,t=a.tabOption,void 0===(s=a.tabPosition)?"top":s);return a.children,e=(0,l.default)(f.prefix+"-KeTabsLayout",f.prefix+"-KeTabsLayout-"+s,e),t=o({tabDirection:"top"===s||"bottom"===s?"horizontal":"vertical"},t),c=(0,u.internal_inline_style)(c),u.propsManager.set(o({},t),i,n),Object.assign(this.__state,{anonymousState__temp:c,$compid__210:i,wrapCls:e}),this.__state}}]),i=c=h,c.$$events=[],c.$$componentPath="node_modules/@ke/ditto-ui/dist/weapp/components/KeTabsLayout/index",t.default=i,Component(n(15).default.createComponent(i))},923:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.prefix="ditto-ui"},924:function(e,t,n){},925:function(e,t,n){"use strict";n.r(t);var o,r=n(926);for(o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o)},926:function(e,t,n){"use strict";n.r(t);var o,r=n(927),i=n.n(r);for(o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=i.a},927:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,o=arguments[t];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e};function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a,c=n(15),u=f(c),s=f(n(630)),l=n(923);function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t=d(this,(e=h.__proto__||Object.getPrototypeOf(h)).call.apply(e,[this].concat(r)))).$usedState=["loopArray105","classes","id","scrollLeft","scrollTop","$anonymousCallee__14","lock","activeValue","data","type","className","textUnlimit","tabDirection"],t.config={styleIsolation:"apply-shared"},t.computeData=function(e,t){return e.map((function(e){return o({},e,{label:!t&&4<e.label.length?e.label.slice(0,3)+"...":e.label})}))},t.anonymousFunc0Map={},t.customComponents=[],d(t,e)}n(928),function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(h,c.Component),r(h,[{key:"_constructor",value:function(e){(function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);return void 0!==r?"value"in r?r.value:void 0!==(r=r.get)?r.call(o):void 0:null!==(t=Object.getPrototypeOf(t))?e(t,n,o):void 0})(h.prototype.__proto__||Object.getPrototypeOf(h.prototype),"_constructor",this).call(this,e),this.state={lock:!1,scrollLeft:0,id:l.prefix+"-tabs-wrap-"+Math.random().toString().replace(".",""),activeValue:this.props.activeValue,scrollTop:0},this.$$refs=new u.default.RefsArray}},{key:"componentWillReceiveProps",value:function(e){void 0!==(e=(e||{}).activeValue)&&e!==this.props.activeValue&&this.setState({activeValue:e})}},{key:"onTabClick",value:function(e,t){var n=this,o=e.target.offsetLeft,r=e.target.offsetTop,i=this.props.onTabClick,a=this.state,c=a.id;if(!a.lock){this.setState({lock:!0});var u=this;try{var s=this.$scope.createSelectorQuery();s.select("#"+c).boundingClientRect(),s.exec((function(e){var a=n.$scope.createSelectorQuery(),s=e[0].width,f=e[0].height;a.selectAll("#"+c+" ."+l.prefix+"-tabs-cell-active").boundingClientRect(),a.exec((function(e){var a=e[0][0].width,c=e[0][0].height,l=0;e=0,u.setState({lock:!1,activeValue:t.value,scrollLeft:l=s/2<o?o-s/2+a/2:l,scrollTop:e=f/2<r?r-f/2+c/2:e}),"function"==typeof i&&n.props.onTabClick(t)}))}))}catch(e){console.log("e: ",e),this.setState({lock:!1,activeValue:t.value}),"function"==typeof i&&this.props.onTabClick(t)}}}},{key:"_createData",value:function(){var e=this;this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{},this.$prefix;var t=void 0===(i=(f=this.__props).data)?[]:i,n=void 0===(r=f.type)?"normal":r,o=void 0===(u=f.className)?"":u,r=void 0!==(i=f.textUnlimit)&&i,i=void 0===(u=f.tabDirection)?"horizontal":u,a=(f=this.__state).activeValue,u=(f.id,f.scrollLeft,f.scrollTop,Number("normal"===n&&4<t.length)),f=(o=(0,s.default)(l.prefix+"-tabs-wrap",(p(f={},l.prefix+"-tabs-wrap-"+n,n),p(f,l.prefix+"-tabs-wrap-"+n+"-"+u,u),p(f,l.prefix+"-tabs-wrap-"+i,i),p(f,o,o),f)),this.computeData(t,r));return r=this.computeData(t,r).map((function(n,o){n={$original:(0,c.internal_get_original)(n)};var r=l.prefix+"-tabs-cell "+(n.$original.value===a?l.prefix+"-tabs-cell-active":""),i=l.prefix+"-tabs-cell-inner "+(n.$original.noVisited?l.prefix+"-tabs-no-visited":""),u=l.prefix+"-tabs_"+o,s="gfzzz"+o;return e.anonymousFunc0Map[s]=function(r){n.$original.value!==a&&e.onTabClick(r,t[o])},{cellClassName:r,innerClassName:i,$loopState__temp2:u,_$indexKey:s,$original:n.$original}})),Object.assign(this.__state,{loopArray105:r,classes:o,$anonymousCallee__14:f}),this.__state}},{key:"anonymousFunc0",value:function(e){for(var t,n=arguments.length,o=Array(1<n?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return this.anonymousFunc0Map[e]&&(t=this.anonymousFunc0Map)[e].apply(t,o)}}]),r=a=h,a.$$events=["anonymousFunc0"],a.$$componentPath="node_modules/@ke/ditto-ui/dist/weapp/components/KeTabs/index",t.default=r,Component(n(15).default.createComponent(r))},928:function(e,t,n){},93:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nav=t.save=t.read=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(15)),r={};t.read=function(e){try{return o.default.getStorageSync(e)||r[e]||""}catch(t){return r[e]||!1}},t.save=function(e,t){try{return o.default.setStorageSync(e,t),delete r[e],!0}catch(n){return r[e]=t,!0}},t.nav=function(e,t){var n=o.default.getApp();e=function(e){return"SWAN"===o.default.getEnv()?e.replace("rent/pages","rent/dist/pages"):e}(e),n.globalData.global||(n.globalData.global={nav:!1}),n.globalData.global.nav||(t||(n.globalData.global.nav=!0,t=function(){}),/^http/.test(e)?function(e,t,n){var r,i=o.default.getApp();/^http/.test(e)&&(r=[],(n=n||{}).shareInfo&&r.push("shareParam="+encodeURIComponent(JSON.stringify(n.shareInfo))),e=t?(n=e.includes("?")?"&":"?","/pages/webView/webView?url="+encodeURIComponent(e+n+"wx_token="+t)):"/pages/webView/webView?url="+encodeURIComponent(e),r.length&&(e+="&"+r.join("&"))),o.default.navigateTo({url:e,complete:function(){i.globalData.global.nav=!1}})}(e):o.default.navigateTo({url:e,success:t,complete:function(){n.globalData.global.nav=!1}}))}},943:function(e,t,n){"use strict";n.r(t);var o,r=n(944);for(o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o)},944:function(e,t,n){"use strict";n.r(t);var o,r=n(945),i=n.n(r);for(o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=i.a},945:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e};function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i,a=n(15),c=function(e){return e&&e.__esModule?e:{default:e}}(a),u=n(923);function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t=s(this,(e=l.__proto__||Object.getPrototypeOf(l)).call.apply(e,[this].concat(o)))).$usedState=["loopArray106","prefix","icon","type","actionlist","title","text","successText","failText","fail","success","__fn_onClick"],t.config={styleIsolation:"apply-shared"},t.anonymousFunc0Map={},t.customComponents=[],s(t,e)}n(946),function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,a.Component),o(l,[{key:"_constructor",value:function(e){(function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);return void 0!==r?"value"in r?r.value:void 0!==(r=r.get)?r.call(o):void 0:null!==(t=Object.getPrototypeOf(t))?e(t,n,o):void 0})(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"_constructor",this).call(this,e),this.$$refs=new c.default.RefsArray}},{key:"_createData",value:function(){var e=this;this.__state=arguments[0]||this.state||{},this.__props=arguments[1]||this.props||{},this.$prefix;var t=(s=this.__props).icon,n=s.type,o=s.title,r=s.text,i=(s.fail,s.success,s.actionlist),c=void 0===(l=s.failText)?"":l,s=void 0===(l=s.successText)?"":l,l="actionList"===n&&i?i.map((function(t,o){t={$original:(0,a.internal_get_original)(t)};var r="actionList"===n&&i?t.$original.text+o:null,c="gizzz"+o;return e.anonymousFunc0Map[c]=function(){return t.$original.click(t.$original,o)},{$loopState__temp2:r,_$indexKey:c,$original:t.$original}})):[];return Object.assign(this.__state,{loopArray106:l,prefix:u.prefix,icon:t,type:n,actionlist:i,title:o,text:r,successText:s,failText:c}),this.__state}},{key:"funPrivateggzzz",value:function(){return this.props.fail.apply(void 0,Array.prototype.slice.call(arguments,1))}},{key:"funPrivateghzzz",value:function(){return this.props.success.apply(void 0,Array.prototype.slice.call(arguments,1))}},{key:"anonymousFunc0",value:function(e){for(var t,n=arguments.length,o=Array(1<n?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return this.anonymousFunc0Map[e]&&(t=this.anonymousFunc0Map)[e].apply(t,o)}}]),o=i=l,i.$$events=["funPrivateggzzz","funPrivateghzzz","anonymousFunc0"],i.$$componentPath="node_modules/@ke/ditto-ui/dist/weapp/components/KeModel/index",t.default=o,Component(n(15).default.createComponent(o))},946:function(e,t,n){},97:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=""},98:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={env:'"production"',DittoEnv:"weapp",isApp:!1}},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.setTrackConfig=function(e){e&&e.digConfig&&e.digConfig.target&&(e.server_url=e.digConfig.target),c.serverConfig=Object.assign({},a,e),r.default.initUlog(c,!0)},t.resetGlobalData=u,t.register=function(e){u(e)},t.send=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};e?("object"===(void 0===e?"undefined":o(e))&&(t=e.event,n=e.action,e=e.evt),r.default&&r.default.sendUlog&&r.default.sendUlog({evt:e,event:t,action:n})):console.error("未传入evtid")},t=i(n(15));var r=i(n(67));function i(e){return e&&e.__esModule?e:{default:e}}var a={global_action:{openid:"",xcxsource:"",xcxtype:"",xcxscene:0},$screen_width:0,$screen_height:0,$os:"",$network_type:"",$os_version:"",$model:"",cid:"",uicode:"",pid:"",f:"",key:"",server_url:"https://dig.lianjia.com/bigc.gif"},c={default:!0,serverConfig:a,ulogConfig:{server_url:a.server_url,register:{global_action:{}}},autoFixFn:function(e){return e},globalContext:t.default};function u(e){r.default&&r.default.register&&r.default.register(e)}}}]); 
 			}); 
		define("envModule.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[4],{38:function(p,o,s){"use strict";p.exports="production"}}]); 
 			}); 
		define("runtime.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
!function(e){function r(r){for(var n,l,f=r[0],a=r[1],p=r[2],c=0,s=[];c<f.length;c++)l=f[c],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&s.push(o[l][0]),o[l]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(i&&i(r);s.length;)s.shift()();return u.push.apply(u,p||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,f=1;f<t.length;f++){var a=t[f];0!==o[a]&&(n=!1)}n&&(u.splice(r--,1),e=l(l.s=t[0]))}return e}var n={},o={1:0},u=[];function l(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=n,l.d=function(e,r,t){l.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,r){if(1&r&&(e=l(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)l.d(t,n,function(r){return e[r]}.bind(null,n));return t},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p="/";var f=(a=wx.webpackJsonp=wx.webpackJsonp||[]).push.bind(a);a.push=r;for(var a=a.slice(),p=0;p<a.length;p++)r(a[p]);var i=f;t()}([]); 
 			}); 
		define("vendors.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[2],[,,,,,,,,,,,function(e,t,n){"use strict";e.exports=n(12)},function(e,t,n){"use strict";var r=function(){return this}()||{Function:Function,Boolean:Boolean,Object:Object,Number:Number,Array:Array,Date:Date,String:String,Symbol:Symbol,Error:Error,TypeError:TypeError,Map:Map,Set:Set,WeakMap:WeakMap,WeakSet:WeakSet,ArrayBuffer:ArrayBuffer,Math:Math,Promise:Promise,RegExp:RegExp,DataView:DataView,isFinite:isFinite,parseInt:parseInt,parseFloat:parseFloat,Float32Array:Float32Array,Float64Array:Float64Array,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Uint8ClampedArray:Uint8ClampedArray,setTimeout:setTimeout,clearTimeout:clearTimeout,setInterval:setInterval,clearInterval:clearInterval},o=r.regeneratorRuntime&&0<=Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime"),i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(13),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},function(e,t,n){"use strict";(function(e){var t,n,r,o,i,a,c,s,u,f,l,d,p,h,m,g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function v(e,t,s,u){return t=t&&t.prototype instanceof b?t:b,t=Object.create(t.prototype),u=new k(u||[]),t._invoke=function(e,t,s){var u=r;return function(f,l){if(u===i)throw new Error("Generator is already running");if(u===a){if("throw"===f)throw l;return j()}for(s.method=f,s.arg=l;;){var d=s.delegate;if(d){var p=function e(t,r){var o;if((o=t.iterator[r.method])===n){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=n,e(t,r),"throw"===r.method))return c;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}return"throw"===(o=y(o,t.iterator,r.arg)).type?(r.method="throw",r.arg=o.arg,r.delegate=null,c):(o=o.arg)?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=n),r.delegate=null,c):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,c)}(d,s);if(p){if(p===c)continue;return p}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(u===r)throw u=a,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);if(u=i,"normal"===(p=y(e,t,s)).type){if(u=s.done?a:o,p.arg!==c)return{value:p.arg,done:s.done}}else"throw"===p.type&&(u=a,s.method="throw",s.arg=p.arg)}}}(e,s,u),t}function y(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function b(){}function _(){}function w(){}function S(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function O(e){var t;this._invoke=function(n,r){function o(){return new Promise((function(t,o){!function t(n,r,o,i){if("throw"!==(n=y(e[n],e,r)).type){var a=n.arg;return(r=a.value)&&"object"===(void 0===r?"undefined":g(r))&&f.call(r,"__await")?Promise.resolve(r.__await).then((function(e){t("next",e,o,i)}),(function(e){t("throw",e,o,i)})):Promise.resolve(r).then((function(e){a.value=e,o(a)}),i)}i(n.arg)}(n,r,t,o)}))}return t=t?t.then(o,o):o()}}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function I(e){if(e){if(t=e[d])return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var t,r=-1;return(t=function t(){for(;++r<e.length;)if(f.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t}).next=t}}return{next:j}}function j(){return{value:n,done:!0}}t=function(){return this}()||{Function:Function,Boolean:Boolean,Object:Object,Number:Number,Array:Array,Date:Date,String:String,Symbol:Symbol,Error:Error,TypeError:TypeError,Map:Map,Set:Set,WeakMap:WeakMap,WeakSet:WeakSet,ArrayBuffer:ArrayBuffer,Math:Math,Promise:Promise,RegExp:RegExp,DataView:DataView,isFinite:isFinite,parseInt:parseInt,parseFloat:parseFloat,Float32Array:Float32Array,Float64Array:Float64Array,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Uint8ClampedArray:Uint8ClampedArray,setTimeout:setTimeout,clearTimeout:clearTimeout,setInterval:setInterval,clearInterval:clearInterval},u=Object.prototype,f=u.hasOwnProperty,l="function"==typeof Symbol?Symbol:{},d=l.iterator||"@@iterator",p=l.asyncIterator||"@@asyncIterator",h=l.toStringTag||"@@toStringTag",l="object"===g(e),(m=t.regeneratorRuntime)?l&&(e.exports=m):((m=t.regeneratorRuntime=l?e.exports:{}).wrap=v,r="suspendedStart",o="suspendedYield",i="executing",a="completed",c={},(t={})[d]=function(){return this},(l=(l=Object.getPrototypeOf)&&l(l(I([]))))&&l!==u&&f.call(l,d)&&(t=l),s=w.prototype=b.prototype=Object.create(t),(_.prototype=s.constructor=w).constructor=_,w[h]=_.displayName="GeneratorFunction",m.isGeneratorFunction=function(e){return!!(e="function"==typeof e&&e.constructor)&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},m.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,h in e||(e[h]="GeneratorFunction")),e.prototype=Object.create(s),e},m.awrap=function(e){return{__await:e}},S(O.prototype),O.prototype[p]=function(){return this},m.AsyncIterator=O,m.async=function(e,t,n,r){var o=new O(v(e,t,n,r));return m.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},S(s),s[h]="Generator",s[d]=function(){return this},s.toString=function(){return"[object Generator]"},m.keys=function(e){var t,n=[];for(t in e)n.push(t);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},m.values=I,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&f.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return a.type="throw",a.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var o=this.tryEntries.length-1;
