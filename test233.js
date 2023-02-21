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
Z([3,'crop_image_content'])
Z([3,'_cropViewMove'])
Z([3,'_cropViewTouchstart'])
Z([3,'mainBox'])
Z([a,[3,'top:'],[[2,'+'],[[6],[[7],[3,'crop']],[3,'top']],[[6],[[7],[3,'viewImagesLocation']],[3,'top']]],[3,'rpx;left:'],[[2,'+'],[[6],[[7],[3,'crop']],[3,'left']],[[6],[[7],[3,'viewImagesLocation']],[3,'left']]],[3,'rpx;width: '],[[2,'-'],[[6],[[7],[3,'crop']],[3,'right']],[[6],[[7],[3,'crop']],[3,'left']]],[3,'rpx;height: '],[[2,'-'],[[6],[[7],[3,'crop']],[3,'bottom']],[[6],[[7],[3,'crop']],[3,'top']]],[3,'rpx;']])
Z([[2,'!'],[[7],[3,'isProportion']]])
Z(z[5])
Z(z[5])
Z(z[5])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'active-class'])
Z([3,'onCancel'])
Z([3,'onChange'])
Z([3,'onConfirm'])
Z([[7],[3,'cancelButtonText']])
Z([3,'van-area__picker'])
Z([3,'column-class'])
Z([[12],[[6],[[7],[3,'computed']],[3,'displayColumns']],[[5],[[5],[[7],[3,'columns']]],[[7],[3,'columnsNum']]]])
Z([[7],[3,'confirmButtonText']])
Z([[7],[3,'itemHeight']])
Z([[7],[3,'loading']])
Z([[7],[3,'showToolbar']])
Z([[7],[3,'title']])
Z([3,'toolbar-class'])
Z([3,'name'])
Z([[7],[3,'visibleItemCount']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'appParameter']])
Z([[7],[3,'ariaLabel']])
Z([3,'onChooseAvatar'])
Z([3,'onContact'])
Z([3,'onError'])
Z([3,'onGetPhoneNumber'])
Z([3,'onGetUserInfo'])
Z([3,'onLaunchApp'])
Z([3,'onOpenSetting'])
Z([[2,'?:'],[[2,'||'],[[7],[3,'disabled']],[[7],[3,'loading']]],[1,''],[1,'onClick']])
Z([[7],[3,'businessId']])
Z([a,[3,'custom-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'button']],[[4],[[5],[[5],[[5],[[7],[3,'type']]],[[7],[3,'size']]],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[8],'block',[[7],[3,'block']]],[[8],'round',[[7],[3,'round']]]],[[8],'plain',[[7],[3,'plain']]]],[[8],'square',[[7],[3,'square']]]],[[8],'loading',[[7],[3,'loading']]]],[[8],'disabled',[[7],[3,'disabled']]]],[[8],'hairline',[[7],[3,'hairline']]]],[[8],'unclickable',[[2,'||'],[[7],[3,'disabled']],[[7],[3,'loading']]]]]]]]],[3,' '],[[2,'?:'],[[7],[3,'hairline']],[1,'van-hairline--surround'],[1,'']]])
Z([[7],[3,'dataset']])
Z([[7],[3,'formType']])
Z([3,'van-button--active hover-class'])
Z([[7],[3,'id']])
Z([[7],[3,'lang']])
Z([[2,'?:'],[[2,'||'],[[2,'||'],[[7],[3,'disabled']],[[7],[3,'loading']]],[[2,'&&'],[[7],[3,'canIUseGetUserProfile']],[[2,'==='],[[7],[3,'openType']],[1,'getUserInfo']]]],[1,''],[[7],[3,'openType']]])
Z([[7],[3,'sendMessageImg']])
Z([[7],[3,'sendMessagePath']])
Z([[7],[3,'sendMessageTitle']])
Z([[7],[3,'sessionFrom']])
Z([[7],[3,'showMessageCard']])
Z([[12],[[6],[[7],[3,'computed']],[3,'rootStyle']],[[5],[[9],[[9],[[8],'plain',[[7],[3,'plain']]],[[8],'color',[[7],[3,'color']]]],[[8],'customStyle',[[7],[3,'customStyle']]]]]])
Z([[7],[3,'loading']])
Z([[12],[[6],[[7],[3,'computed']],[3,'loadingColor']],[[5],[[9],[[9],[[8],'type',[[7],[3,'type']]],[[8],'color',[[7],[3,'color']]]],[[8],'plain',[[7],[3,'plain']]]]]])
Z([3,'loading-class'])
Z([[7],[3,'loadingSize']])
Z([[7],[3,'loadingType']])
Z([[7],[3,'loadingText']])
Z([[7],[3,'icon']])
Z([3,'van-button__icon'])
Z([[7],[3,'classPrefix']])
Z([3,'line-height: inherit;'])
Z(z[30])
Z([3,'1.2em'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'active-class'])
Z([3,'onCancel'])
Z([3,'onChange'])
Z([3,'onConfirm'])
Z([[7],[3,'cancelButtonText']])
Z([3,'van-datetime-picker'])
Z([3,'column-class'])
Z([[7],[3,'columns']])
Z([[7],[3,'confirmButtonText']])
Z([[7],[3,'itemHeight']])
Z([[7],[3,'showToolbar']])
Z([[7],[3,'title']])
Z([3,'toolbar-class'])
Z([[7],[3,'visibleItemCount']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClickOverlay'])
Z([[7],[3,'closeOnClickOverlay']])
Z([a,[3,'van-dialog van-dialog--'],[[7],[3,'theme']],[3,' '],[[7],[3,'className']]])
Z([a,[3,'width: '],[[12],[[6],[[7],[3,'utils']],[3,'addUnit']],[[5],[[7],[3,'width']]]],[3,';'],[[7],[3,'customStyle']]])
Z([[7],[3,'overlay']])
Z([[7],[3,'overlayStyle']])
Z([[7],[3,'show']])
Z([[7],[3,'transition']])
Z([[7],[3,'zIndex']])
Z([[2,'||'],[[7],[3,'title']],[[7],[3,'useTitleSlot']]])
Z([[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'dialog__header']],[[8],'isolated',[[2,'!'],[[2,'||'],[[7],[3,'message']],[[7],[3,'useSlot']]]]]]])
Z([[7],[3,'useTitleSlot']])
Z([3,'title'])
Z([[7],[3,'title']])
Z([[7],[3,'useSlot']])
Z([[7],[3,'message']])
Z([[2,'==='],[[7],[3,'theme']],[1,'round-button']])
Z([3,'van-dialog__footer--round-button'])
Z([[7],[3,'showCancelButton']])
Z([3,'onCancel'])
Z([3,'van-dialog__button van-hairline--right'])
Z([3,'van-dialog__cancel'])
Z([a,[3,'color: '],[[7],[3,'cancelButtonColor']]])
Z([[6],[[7],[3,'loading']],[3,'cancel']])
Z([3,'large'])
Z([[7],[3,'showConfirmButton']])
Z([[7],[3,'appParameter']])
Z([3,'onConfirm'])
Z([3,'onContact'])
Z([3,'onError'])
Z([3,'onGetPhoneNumber'])
Z([3,'onGetUserInfo'])
Z([3,'onLaunchApp'])
Z([3,'onOpenSetting'])
Z([[7],[3,'businessId']])
Z([3,'van-dialog__button'])
Z([3,'van-dialog__confirm'])
Z([a,z[22][1],[[7],[3,'confirmButtonColor']]])
Z([[7],[3,'lang']])
Z([[6],[[7],[3,'loading']],[3,'confirm']])
Z([[7],[3,'confirmButtonOpenType']])
Z([[7],[3,'sendMessageImg']])
Z([[7],[3,'sendMessagePath']])
Z([[7],[3,'sendMessageTitle']])
Z([[7],[3,'sessionFrom']])
Z([[7],[3,'showMessageCard']])
Z(z[24])
Z([3,'van-hairline--top van-dialog__footer'])
Z(z[18])
Z(z[19])
Z(z[20])
Z(z[21])
Z([a,z[22][1],z[22][2]])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z(z[28])
Z(z[29])
Z(z[30])
Z(z[31])
Z(z[32])
Z(z[33])
Z(z[34])
Z(z[35])
Z(z[36])
Z([a,z[22][1],z[37][2]])
Z(z[38])
Z(z[39])
Z(z[40])
Z(z[41])
Z(z[42])
Z(z[43])
Z(z[44])
Z(z[45])
Z(z[24])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'appParameter']])
Z([3,'onClick'])
Z([3,'onContact'])
Z([3,'onError'])
Z([3,'onGetPhoneNumber'])
Z([3,'onGetUserInfo'])
Z([3,'onLaunchApp'])
Z([3,'onOpenSetting'])
Z([[7],[3,'businessId']])
Z([[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'goods-action-button']],[[4],[[5],[[5],[[7],[3,'type']]],[[9],[[9],[[8],'first',[[7],[3,'isFirst']]],[[8],'last',[[7],[3,'isLast']]]],[[8],'plain',[[7],[3,'plain']]]]]]]])
Z([[7],[3,'color']])
Z([3,'van-goods-action-button__inner'])
Z([[7],[3,'disabled']])
Z([[7],[3,'id']])
Z([[7],[3,'lang']])
Z([[7],[3,'loading']])
Z([[7],[3,'openType']])
Z([[7],[3,'plain']])
Z([[7],[3,'sendMessageImg']])
Z([[7],[3,'sendMessagePath']])
Z([[7],[3,'sendMessageTitle']])
Z([[7],[3,'sessionFrom']])
Z([[7],[3,'showMessageCard']])
Z([[7],[3,'type']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([[12],[[6],[[7],[3,'computed']],[3,'rootClass']],[[5],[[9],[[8],'classPrefix',[[7],[3,'classPrefix']]],[[8],'name',[[7],[3,'name']]]]]])
Z([[12],[[6],[[7],[3,'computed']],[3,'rootStyle']],[[5],[[9],[[9],[[8],'customStyle',[[7],[3,'customStyle']]],[[8],'color',[[7],[3,'color']]]],[[8],'size',[[7],[3,'size']]]]]])
Z([[2,'||'],[[2,'!=='],[[7],[3,'info']],[1,null]],[[7],[3,'dot']]])
Z([3,'van-icon__info'])
Z([[7],[3,'dot']])
Z([[7],[3,'info']])
Z([[12],[[6],[[7],[3,'computed']],[3,'isImage']],[[5],[[7],[3,'name']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[2,'&&'],[[2,'!=='],[[7],[3,'info']],[1,null]],[[2,'!=='],[[7],[3,'info']],[1,'']]],[[7],[3,'dot']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'custom-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'loading']],[[8],'vertical',[[7],[3,'vertical']]]]]])
Z([[7],[3,'array12']])
Z([3,'index'])
Z([[2,'==='],[[7],[3,'type']],[1,'spinner']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'lockScroll']])
Z([3,'onClick'])
Z([3,'noop'])
Z([3,'van-overlay'])
Z([a,[3,'z-index: '],[[7],[3,'zIndex']],[3,'; '],[[7],[3,'customStyle']]])
Z([[7],[3,'duration']])
Z([[7],[3,'show']])
Z(z[1])
Z(z[3])
Z([a,z[4][1],z[4][2],z[4][3],z[4][4]])
Z(z[5])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-picker custom-class'])
Z([[2,'==='],[[7],[3,'toolbarPosition']],[1,'top']])
Z([[7],[3,'loading']])
Z([3,'#1989fa'])
Z([3,'noop'])
Z([3,'van-picker__columns'])
Z([[12],[[6],[[7],[3,'computed']],[3,'columnsStyle']],[[5],[[9],[[8],'itemHeight',[[7],[3,'itemHeight']]],[[8],'visibleItemCount',[[7],[3,'visibleItemCount']]]]]])
Z([[12],[[6],[[7],[3,'computed']],[3,'columns']],[[5],[[7],[3,'columns']]]])
Z([3,'index'])
Z([3,'active-class'])
Z([3,'onChange'])
Z([3,'van-picker__column'])
Z([3,'column-class'])
Z([[7],[3,'index']])
Z([[2,'||'],[[6],[[7],[3,'item']],[3,'defaultIndex']],[[7],[3,'defaultIndex']]])
Z([[6],[[7],[3,'item']],[3,'values']])
Z([[7],[3,'itemHeight']])
Z([[7],[3,'valueKey']])
Z([[7],[3,'visibleItemCount']])
Z([[2,'==='],[[7],[3,'toolbarPosition']],[1,'bottom']])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showToolbar']])
Z([[7],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'overlay']])
Z([3,'onClickOverlay'])
Z([[7],[3,'overlayStyle']])
Z([[7],[3,'duration']])
Z([[7],[3,'lockScroll']])
Z([[7],[3,'show']])
Z([[7],[3,'zIndex']])
Z([[7],[3,'inited']])
Z([3,'onTransitionEnd'])
Z([a,[3,'custom-class '],[[7],[3,'classes']],[3,' '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'popup']],[[4],[[5],[[5],[[7],[3,'position']]],[[9],[[9],[[8],'round',[[7],[3,'round']]],[[8],'safe',[[7],[3,'safeAreaInsetBottom']]]],[[8],'safeTop',[[7],[3,'safeAreaInsetTop']]]]]]]]])
Z([[12],[[6],[[7],[3,'computed']],[3,'popupStyle']],[[5],[[9],[[9],[[9],[[8],'zIndex',[[7],[3,'zIndex']]],[[8],'currentDuration',[[7],[3,'currentDuration']]]],[[8],'display',[[7],[3,'display']]]],[[8],'customStyle',[[7],[3,'customStyle']]]]]])
Z([[7],[3,'closeable']])
Z([3,'onClickCloseIcon'])
Z([a,[3,'close-icon-class van-popup__close-icon van-popup__close-icon--'],[[7],[3,'closeIconPosition']]])
Z([[7],[3,'closeIcon']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'radio']],[[4],[[5],[[7],[3,'direction']]]]]],[3,' custom-class']])
Z([[2,'==='],[[7],[3,'labelPosition']],[1,'left']])
Z([3,'onClickLabel'])
Z([a,[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'radio__label']],[[4],[[5],[[5],[[7],[3,'labelPosition']]],[[8],'disabled',[[2,'||'],[[7],[3,'disabled']],[[7],[3,'parentDisabled']]]]]]]],[3,' label-class']])
Z([3,'onChange'])
Z([3,'van-radio__icon-wrap'])
Z([a,[3,'font-size: '],[[12],[[6],[[7],[3,'utils']],[3,'addUnit']],[[5],[[7],[3,'iconSize']]]]])
Z([[7],[3,'useIconSlot']])
Z([3,'icon'])
Z([[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'radio__icon']],[[4],[[5],[[5],[[7],[3,'shape']]],[[9],[[8],'disabled',[[2,'||'],[[7],[3,'disabled']],[[7],[3,'parentDisabled']]]],[[8],'checked',[[2,'==='],[[7],[3,'value']],[[7],[3,'name']]]]]]]]])
Z([3,'icon-class'])
Z([[12],[[6],[[7],[3,'computed']],[3,'iconCustomStyle']],[[5],[[8],'iconSize',[[7],[3,'iconSize']]]]])
Z([3,'success'])
Z([[12],[[6],[[7],[3,'computed']],[3,'iconStyle']],[[5],[[9],[[9],[[9],[[9],[[9],[[8],'iconSize',[[7],[3,'iconSize']]],[[8],'checkedColor',[[7],[3,'checkedColor']]]],[[8],'disabled',[[7],[3,'disabled']]]],[[8],'parentDisabled',[[7],[3,'parentDisabled']]]],[[8],'value',[[7],[3,'value']]]],[[8],'name',[[7],[3,'name']]]]]])
Z([[2,'==='],[[7],[3,'labelPosition']],[1,'right']])
Z(z[2])
Z([a,[3,'label-class '],z[3][1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([a,[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'switch']],[[9],[[8],'on',[[2,'==='],[[7],[3,'checked']],[[7],[3,'activeValue']]]],[[8],'disabled',[[7],[3,'disabled']]]]]],[3,' custom-class']])
Z([[12],[[6],[[7],[3,'computed']],[3,'rootStyle']],[[5],[[9],[[9],[[9],[[9],[[8],'size',[[7],[3,'size']]],[[8],'checked',[[7],[3,'checked']]]],[[8],'activeColor',[[7],[3,'activeColor']]]],[[8],'inactiveColor',[[7],[3,'inactiveColor']]]],[[8],'activeValue',[[7],[3,'activeValue']]]]]])
Z([[7],[3,'loading']])
Z([[12],[[6],[[7],[3,'computed']],[3,'loadingColor']],[[5],[[9],[[9],[[9],[[8],'checked',[[7],[3,'checked']]],[[8],'activeColor',[[7],[3,'activeColor']]]],[[8],'inactiveColor',[[7],[3,'inactiveColor']]]],[[8],'activeValue',[[7],[3,'activeValue']]]]]])
Z([3,'van-switch__loading'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[7],[3,'mask']],[[7],[3,'forbidClick']]])
Z([[2,'?:'],[[7],[3,'mask']],[1,''],[1,'background-color: transparent;']])
Z([[7],[3,'show']])
Z([[7],[3,'zIndex']])
Z([3,'van-toast__container'])
Z([a,[3,'z-index: '],z[3]])
Z(z[2])
Z([3,'noop'])
Z([a,[3,'van-toast van-toast--'],[[2,'?:'],[[2,'||'],[[2,'==='],[[7],[3,'type']],[1,'text']],[[2,'==='],[[7],[3,'type']],[1,'html']]],[1,'text'],[1,'icon']],[3,' van-toast--'],[[7],[3,'position']]])
Z([[2,'==='],[[7],[3,'type']],[1,'text']])
Z([[2,'==='],[[7],[3,'type']],[1,'html']])
Z([[2,'==='],[[7],[3,'type']],[1,'loading']])
Z([3,'white'])
Z([3,'van-toast__loading'])
Z([[7],[3,'loadingType']])
Z([3,'van-toast__icon'])
Z([[7],[3,'type']])
Z([[7],[3,'message']])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'inited']])
Z([3,'onTransitionEnd'])
Z([a,[3,'van-transition custom-class '],[[7],[3,'classes']]])
Z([[12],[[6],[[7],[3,'computed']],[3,'rootStyle']],[[5],[[9],[[9],[[8],'currentDuration',[[7],[3,'currentDuration']]],[[8],'display',[[7],[3,'display']]]],[[8],'customStyle',[[7],[3,'customStyle']]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'oninputEventSelf'])
Z([3,'onradioEvent'])
Z([3,'onselectEvent'])
Z([3,'health'])
Z([[7],[3,'arr']])
Z([3,'healthItemList'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'oninputEventSelf'])
Z([3,'onradioEvent'])
Z([3,'onselectEvent'])
Z([3,'health'])
Z([[7],[3,'arr']])
Z([3,'healthItemList'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[2,'||'],[[7],[3,'bankCardInfo']],[[7],[3,'healthInfo']]],[[7],[3,'leftCer']]])
Z([3,'p-supplement'])
Z([[7],[3,'healthInfo']])
Z([3,'oninputEventSelf'])
Z([3,'onradioEvent'])
Z([3,'onselectEvent'])
Z([3,'health'])
Z([[7],[3,'healthItemList']])
Z([3,'healthItemList'])
Z([[7],[3,'leftCer']])
Z([3,'onSingleImg'])
Z(z[3])
Z(z[5])
Z([3,'work'])
Z([[7],[3,'workItemList']])
Z([3,'workItemList'])
Z([[7],[3,'bankCardInfo']])
Z([3,'spaycard'])
Z([3,'supplement'])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'aspectRatio']])
Z([3,'my-cropper'])
Z([[7],[3,'isProportion']])
Z([[7],[3,'quality']])
Z([[7],[3,'src']])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'formlistCopy']])
Z([3,'key'])
Z([a,[3,'comp-zform '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'err']],[1,'err'],[1,'']]])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'type']]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'textarea']])
Z([[2,'!'],[[7],[3,'hidden']]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'upimg']])
Z([[6],[[7],[3,'item']],[3,'value']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'select']])
Z([3,'onClickSelectItem'])
Z([3,'comp-zform-item comp-zform-item_select'])
Z([[6],[[7],[3,'item']],[3,'age']])
Z([[6],[[7],[3,'item']],[3,'disabled']])
Z([[6],[[7],[3,'item']],[3,'disabledtext']])
Z([[6],[[7],[3,'item']],[3,'key']])
Z(z[14])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'disabled']]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'identity']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'identity_other']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'bodyCheckRes']])
Z([[6],[[7],[3,'bdCheck']],[3,'value']])
Z([3,'body_check'])
Z([[6],[[7],[3,'medicalReportDTOList']],[3,'length']])
Z([3,'index'])
Z([3,'report'])
Z([[7],[3,'medicalReportDTOList']])
Z([3,'id'])
Z([[2,'!'],[[7],[3,'disabled']]])
Z(z[27])
Z([[2,'!'],[[6],[[7],[3,'bdCheck']],[3,'value']]])
Z(z[5])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'bodyCheckResSupplement']])
Z(z[20])
Z(z[21])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z(z[27])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'rangeTime']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'birthday']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'upimg_switch']])
Z([a,[3,'comp-zform-item height-auto '],[[2,'?:'],[[2,'!'],[[6],[[7],[3,'item']],[3,'openSwitch']]],[1,'switch-close'],[1,'']]])
Z(z[14])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'hideSwitch']]])
Z([3,'toggleSwitch'])
Z([[6],[[7],[3,'item']],[3,'openSwitch']])
Z([3,'op-switch'])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z(z[14])
Z([[7],[3,'disabled']])
Z([3,'choseImgSingle'])
Z([3,'operate_img_show'])
Z(z[50])
Z(z[51])
Z(z[14])
Z([3,'qualification'])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'value']]])
Z(z[7])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'value']],[[2,'!'],[[7],[3,'disabled']]]])
Z(z[5])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'switch']])
Z(z[47])
Z(z[48])
Z(z[49])
Z(z[50])
Z(z[51])
Z(z[53])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'up_file']])
Z([3,'upload_file'])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z(z[27])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'radio']])
Z([3,'radioChange'])
Z(z[50])
Z(z[51])
Z([3,'horizontal'])
Z(z[53])
Z(z[7])
Z([3,'1'])
Z(z[7])
Z([3,'2'])
Z(z[7])
Z([3,'toggleVanOverlay'])
Z([[7],[3,'gongpaiPreviewShow']])
Z([3,'1000'])
Z([3,'onClose'])
Z([3,''])
Z([3,'bottom'])
Z([[7],[3,'popupShow']])
Z([3,'900'])
Z([3,'active-time-cls'])
Z(z[94])
Z([3,'onConfirmTime'])
Z([3,'onInputTime'])
Z([3,'column-time-cls'])
Z([[7],[3,'formatter']])
Z([3,'48'])
Z([[7],[3,'minDate']])
Z([3,'选择年月日'])
Z([3,'toolbar-time-cls'])
Z([3,'date'])
Z([[7],[3,'pickerTimeDefault']])
Z(z[95])
Z(z[96])
Z([[7],[3,'popupNormalPickerShow']])
Z(z[93])
Z(z[99])
Z([3,'onCloseNPicker'])
Z([3,'onNPickerChange'])
Z([3,'onConfirmNPicker'])
Z(z[103])
Z([[7],[3,'columnsNPicker']])
Z([[7],[3,'pickerTitle']])
Z(z[108])
Z([3,'label'])
Z(z[95])
Z(z[96])
Z([[7],[3,'areaShow']])
Z(z[93])
Z([[2,'=='],[[7],[3,'vl']],[1,'2']])
Z(z[99])
Z([[7],[3,'areaList']])
Z([3,'closeAreaPicker'])
Z([3,'changeArea'])
Z([3,'confirmAreaPicker'])
Z([3,'vaareaListnArea'])
Z(z[103])
Z([[7],[3,'vl']])
Z([3,'选择地区'])
Z(z[108])
Z(z[95])
Z(z[96])
Z([[7],[3,'areaPickerShow']])
Z(z[93])
Z(z[128])
Z(z[99])
Z(z[130])
Z([3,'onCloseAreaPicker'])
Z([3,'bindChangeArea'])
Z([3,'onConfirmAreaPicker'])
Z(z[134])
Z(z[103])
Z(z[136])
Z(z[137])
Z(z[108])
Z([[2,'=='],[[7],[3,'vl']],[1,'3']])
Z(z[99])
Z(z[130])
Z(z[146])
Z(z[147])
Z(z[148])
Z(z[134])
Z(z[103])
Z(z[137])
Z(z[108])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'t_base'])
Z([3,'oninputChangeEvent'])
Z([3,'oninputEventSelf'])
Z([[7],[3,'disabled']])
Z([[7],[3,'menItemList']])
Z([3,'menItemList'])
Z([3,'callbackCardEvent'])
Z([3,'callBackOtherCardEvent'])
Z(z[2])
Z([3,'onselectEvent'])
Z([3,'timeSingleSelect'])
Z(z[3])
Z([[7],[3,'identityItemList']])
Z([3,'identityItemList'])
Z(z[2])
Z(z[9])
Z(z[3])
Z([[7],[3,'linkItemList']])
Z([3,'linkItemList'])
Z(z[2])
Z(z[9])
Z(z[3])
Z([[7],[3,'mergItemList']])
Z([3,'mergItemList'])
Z(z[2])
Z(z[9])
Z([3,'health'])
Z(z[3])
Z([[7],[3,'healthItemList']])
Z([3,'healthItemList'])
Z([3,'comp-import-part'])
Z(z[2])
Z(z[9])
Z([3,'has-relation-switch'])
Z(z[3])
Z([[7],[3,'jlrelationBase']])
Z([3,'jlrelationBase'])
Z([[7],[3,'relationList']])
Z([3,'name'])
Z([3,'comp-import-part-content tab_base_relation'])
Z([[2,'&&'],[[2,'>'],[[6],[[7],[3,'relationList']],[3,'length']],[1,1]],[[2,'!'],[[7],[3,'disabled']]]])
Z(z[2])
Z(z[9])
Z(z[3])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'list']])
Z([3,'relationList'])
Z([[2,'!'],[[7],[3,'disabled']]])
Z([[7],[3,'chooseAreaVisible']])
Z([3,'van-dialog'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,''])
Z([3,'comp-import-part-content'])
Z([3,'onswitchEvent'])
Z([3,'paycard-zform'])
Z([[7],[3,'disabled']])
Z([[7],[3,'familySwitch']])
Z([[6],[[6],[[7],[3,'familySwitch']],[1,0]],[3,'openSwitch']])
Z([[7],[3,'familyItemList']])
Z([3,'name'])
Z([a,[3,'part-family-menber '],[[2,'?:'],[[2,'==='],[[7],[3,'index']],[1,0]],[1,'no-mar'],[1,'']]])
Z([[2,'>'],[[6],[[7],[3,'familyItemList']],[3,'length']],[1,1]])
Z([[2,'!'],[[7],[3,'disabled']]])
Z([3,'oninputevent'])
Z([3,'onselectEvent'])
Z([3,'ontimerangeevent'])
Z([3,'ontimesingleevent'])
Z(z[4])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'list']])
Z([[2,'+'],[1,'familyItemList'],[[7],[3,'index']]])
Z([[2,'&&'],[[6],[[6],[[7],[3,'familySwitch']],[1,0]],[3,'openSwitch']],[[2,'!'],[[7],[3,'disabled']]]])
Z([3,'van-dialog'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'comp-import-part'])
Z([3,'onSingleImg'])
Z([3,'oninputEventSelf'])
Z([3,'onselectEvent'])
Z([3,'onselectZhihangBeforeEvent'])
Z([3,'onswitchEvent'])
Z([3,'paycard-zform'])
Z([[7],[3,'depositBankList']])
Z([[7],[3,'disabled']])
Z([[7],[3,'cardItemList']])
Z([3,'cardItemList'])
Z([[2,'&&'],[[2,'!='],[[7],[3,'type']],[1,'supplement']],[[7],[3,'show']]])
Z(z[2])
Z(z[3])
Z(z[6])
Z(z[8])
Z([[7],[3,'mailAddressItem']])
Z([3,'mailAddressItem'])
Z([[2,'!='],[[7],[3,'type']],[1,'supplement']])
Z([3,'van-dialog'])
Z([3,'van-toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'tperson'])
Z([3,'background: #fff;'])
Z([[7],[3,'eduList']])
Z([3,'name'])
Z([3,'comp-import-part-content'])
Z([[2,'&&'],[[2,'>'],[[6],[[7],[3,'eduList']],[3,'length']],[1,1]],[[2,'!'],[[7],[3,'disabled']]]])
Z([3,'onSingleImg'])
Z([3,'oninputEventSelf'])
Z([3,'onselectEvent'])
Z([3,'onSwitchEvent'])
Z([3,'onSwitchInputEvent'])
Z([3,'ontimerangeChange'])
Z([3,'last-specil'])
Z([[7],[3,'disabled']])
Z(z[2])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'list']])
Z([[7],[3,'graduatesType']])
Z([[7],[3,'hidden']])
Z([[2,'+'],[1,'eduList'],[[7],[3,'index']]])
Z([[2,'!'],[[7],[3,'disabled']]])
Z([[7],[3,'eduBottomShow']])
Z([3,'onSingleImgBtm'])
Z([3,'onSwitchEventBtm'])
Z(z[12])
Z([[7],[3,'eduBottom']])
Z(z[1])
Z([[2,'!=='],[[7],[3,'graduatesType']],[1,'social_recruitment_type']])
Z([3,'onhasWorkSwitchEvent'])
Z(z[13])
Z([[7],[3,'workToggle']])
Z([[7],[3,'workList']])
Z(z[3])
Z(z[4])
Z([[2,'&&'],[[2,'>'],[[6],[[7],[3,'workList']],[3,'length']],[1,1]],[[2,'!'],[[7],[3,'disabled']]]])
Z(z[7])
Z(z[11])
Z(z[12])
Z([3,'workList'])
Z(z[13])
Z(z[15])
Z(z[16])
Z(z[18])
Z([[2,'+'],[1,'workList'],[[7],[3,'index']]])
Z(z[20])
Z([3,'onSingleImgWork'])
Z(z[8])
Z([3,'onWorkSwitchEvent'])
Z([3,'timeSingleSelect'])
Z(z[13])
Z(z[15])
Z([[7],[3,'workBase']])
Z([3,'workBase'])
Z(z[1])
Z([3,'onSwitchLangBaseEvent'])
Z(z[12])
Z(z[13])
Z([[7],[3,'langBase']])
Z([[7],[3,'languageList']])
Z(z[3])
Z(z[4])
Z([[2,'&&'],[[2,'>'],[[6],[[7],[3,'languageList']],[3,'length']],[1,1]],[[2,'!'],[[7],[3,'disabled']]]])
Z(z[8])
Z(z[12])
Z(z[13])
Z(z[15])
Z(z[16])
Z([[2,'+'],[1,'languageList'],[[7],[3,'index']]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'disabled']]],[[6],[[7],[3,'languageList']],[3,'length']]])
Z([3,'other'])
Z(z[13])
Z([[7],[3,'otherItemList']])
Z([3,'van-dialog'])
Z([3,'van-toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-importinfo'])
Z([[2,'&&'],[[7],[3,'warnShow']],[[2,'!'],[[7],[3,'disabled']]]])
Z(z[1])
Z([a,[3,'c-tab-content '],[[2,'?:'],[[2,'||'],[[2,'==='],[[7],[3,'actTab']],[1,2]],[[2,'==='],[[7],[3,'actTab']],[1,3]]],[1,'no-pad-top'],[1,'']]])
Z([3,'refreshTperson'])
Z([3,'jumpNextAction'])
Z([3,'setErrStatus'])
Z([3,'submitAllNextTab1'])
Z([3,'tbasic'])
Z([[7],[3,'disabled']])
Z([[7],[3,'actTab']])
Z(z[5])
Z(z[6])
Z([3,'submitAllNextTab2'])
Z([3,'tperson'])
Z(z[9])
Z([[2,'!=='],[[7],[3,'actTab']],[1,1]])
Z([[6],[[7],[3,'tabs']],[[7],[3,'actTab']]])
Z(z[5])
Z(z[6])
Z([3,'submitAllNextTabOver'])
Z([3,'tpaycard'])
Z(z[9])
Z(z[5])
Z(z[6])
Z([3,'submitAll'])
Z([3,'submitAllAfterAll'])
Z([3,'tfamily'])
Z(z[9])
Z([[2,'!'],[[7],[3,'disabled']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'readDesc'])
Z([a,[3,'btn '],[[2,'?:'],[[7],[3,'isover']],[1,'over'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'readed']],[1,'readed'],[1,'']]])
Z([[2,'!'],[[7],[3,'isover']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'zcontainer'])
Z([3,'jumpImportInfo'])
Z([3,'card card-luru'])
Z([[2,'!'],[[7],[3,'status']]])
Z([[2,'!=='],[[7],[3,'status']],[1,'enterOver']])
Z([[2,'&&'],[[2,'==='],[[7],[3,'status']],[1,'enterOver']],[[7],[3,'isready']]])
Z([3,'jumpQian'])
Z([a,[3,'card card-qian '],[[2,'?:'],[[7],[3,'qstatus']],[1,'qianed'],[1,'']]])
Z([3,'margin-bottom: 40rpx;'])
Z([[2,'!'],[[7],[3,'qstatus']]])
Z([[2,'&&'],[[2,'==='],[[7],[3,'status']],[1,'enterOver']],[[7],[3,'stuffStatus']]])
Z([3,'jumpBuChong'])
Z([a,[3,'card card-qian card-buchong '],[[2,'?:'],[[7],[3,'bstatus']],[1,'qianed'],[1,'']]])
Z(z[8])
Z([[2,'!'],[[7],[3,'bstatus']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"p_./miniprogram_npm/@vant/weapp/area/index.wxs":np_0,"p_./miniprogram_npm/@vant/weapp/button/index.wxs":np_1,"p_./miniprogram_npm/@vant/weapp/icon/index.wxs":np_2,"p_./miniprogram_npm/@vant/weapp/loading/index.wxs":np_3,"p_./miniprogram_npm/@vant/weapp/picker-column/index.wxs":np_4,"p_./miniprogram_npm/@vant/weapp/picker/index.wxs":np_5,"p_./miniprogram_npm/@vant/weapp/popup/index.wxs":np_6,"p_./miniprogram_npm/@vant/weapp/radio/index.wxs":np_7,"p_./miniprogram_npm/@vant/weapp/switch/index.wxs":np_8,"p_./miniprogram_npm/@vant/weapp/transition/index.wxs":np_9,"p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs":np_10,"p_./miniprogram_npm/@vant/weapp/wxs/array.wxs":np_11,"p_./miniprogram_npm/@vant/weapp/wxs/bem.wxs":np_12,"p_./miniprogram_npm/@vant/weapp/wxs/memoize.wxs":np_13,"p_./miniprogram_npm/@vant/weapp/wxs/object.wxs":np_14,"p_./miniprogram_npm/@vant/weapp/wxs/style.wxs":np_15,"p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs":np_16,};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./miniprogram_npm/@vant/weapp/area/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/area/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/area/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/area/index.wxs");
f_['./miniprogram_npm/@vant/weapp/area/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/area/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/area/index.wxs");
function np_0(){var nv_module={nv_exports:{}};function nv_displayColumns(nv_columns,nv_columnsNum){return(nv_columns.nv_slice(0,+nv_columnsNum))};nv_module.nv_exports = ({nv_displayColumns:nv_displayColumns,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/button/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/button/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/button/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/button/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/button/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/button/index.wxs");
f_['./miniprogram_npm/@vant/weapp/button/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/button/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/button/index.wxs");
function np_1(){var nv_module={nv_exports:{}};var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();function nv_rootStyle(nv_data){if (!nv_data.nv_color){return(nv_data.nv_customStyle)};var nv_properties = ({nv_color:nv_data.nv_plain ? nv_data.nv_color:'#fff',nv_background:nv_data.nv_plain ? null:nv_data.nv_color,});if (nv_data.nv_color.nv_indexOf('gradient') !== -1){nv_properties.nv_border = 0} else {nv_properties[("nv_"+'border-color')] = nv_data.nv_color};return(nv_style([nv_properties,nv_data.nv_customStyle]))};function nv_loadingColor(nv_data){if (nv_data.nv_plain){return(nv_data.nv_color ? nv_data.nv_color:'#c9c9c9')};if (nv_data.nv_type === 'default'){return('#c9c9c9')};return('#fff')};nv_module.nv_exports = ({nv_rootStyle:nv_rootStyle,nv_loadingColor:nv_loadingColor,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/dialog/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/dialog/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/dialog/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/goods-action-button/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/goods-action-button/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/goods-action-button/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/goods-action/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/goods-action/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/goods-action/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/icon/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/icon/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/icon/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/icon/index.wxs");
f_['./miniprogram_npm/@vant/weapp/icon/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/icon/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/icon/index.wxs");
function np_2(){var nv_module={nv_exports:{}};var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();function nv_isImage(nv_name){return(nv_name.nv_indexOf('/') !== -1)};function nv_rootClass(nv_data){var nv_classes = ['custom-class'];if (nv_data.nv_classPrefix != null){nv_classes.nv_push(nv_data.nv_classPrefix)};if (nv_isImage(nv_data.nv_name)){nv_classes.nv_push('van-icon--image')} else if (nv_data.nv_classPrefix != null){nv_classes.nv_push(nv_data.nv_classPrefix + '-' + nv_data.nv_name)};return(nv_classes.nv_join(' '))};function nv_rootStyle(nv_data){return(nv_style([({nv_color:nv_data.nv_color,'nv_font-size':nv_addUnit(nv_data.nv_size),}),nv_data.nv_customStyle]))};nv_module.nv_exports = ({nv_isImage:nv_isImage,nv_rootClass:nv_rootClass,nv_rootStyle:nv_rootStyle,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/info/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/info/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/info/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/loading/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/loading/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/loading/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/loading/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/loading/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/loading/index.wxs");
f_['./miniprogram_npm/@vant/weapp/loading/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/loading/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/loading/index.wxs");
function np_3(){var nv_module={nv_exports:{}};var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();function nv_spinnerStyle(nv_data){return(nv_style(({nv_color:nv_data.nv_color,nv_width:nv_addUnit(nv_data.nv_size),nv_height:nv_addUnit(nv_data.nv_size),})))};function nv_textStyle(nv_data){return(nv_style(({'nv_font-size':nv_addUnit(nv_data.nv_textSize),})))};nv_module.nv_exports = ({nv_spinnerStyle:nv_spinnerStyle,nv_textStyle:nv_textStyle,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/picker-column/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/picker-column/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/picker-column/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/picker-column/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/picker-column/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/picker-column/index.wxs");
f_['./miniprogram_npm/@vant/weapp/picker-column/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/picker-column/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/picker-column/index.wxs");
function np_4(){var nv_module={nv_exports:{}};var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();function nv_isObj(nv_x){var nv_type = typeof nv_x;return(nv_x !== null && (nv_type === 'object' || nv_type === 'function'))};function nv_optionText(nv_option,nv_valueKey){return(nv_isObj(nv_option) && nv_option[((nt_0=(nv_valueKey),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))] != null ? nv_option[((nt_1=(nv_valueKey),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))]:nv_option)};function nv_rootStyle(nv_data){return(nv_style(({nv_height:nv_addUnit(nv_data.nv_itemHeight * nv_data.nv_visibleItemCount),})))};function nv_wrapperStyle(nv_data){var nv_offset = nv_addUnit(nv_data.nv_offset + (nv_data.nv_itemHeight * (nv_data.nv_visibleItemCount - 1)) / 2);return(nv_style(({nv_transition:'transform ' + nv_data.nv_duration + 'ms','nv_line-height':nv_addUnit(nv_data.nv_itemHeight),nv_transform:'translate3d(0, ' + nv_offset + ', 0)',})))};nv_module.nv_exports = ({nv_optionText:nv_optionText,nv_rootStyle:nv_rootStyle,nv_wrapperStyle:nv_wrapperStyle,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/picker/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/picker/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/picker/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/picker/index.wxs");
f_['./miniprogram_npm/@vant/weapp/picker/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/picker/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/picker/index.wxs");
function np_5(){var nv_module={nv_exports:{}};var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();var nv_array = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/array.wxs')();function nv_columnsStyle(nv_data){return(nv_style(({nv_height:nv_addUnit(nv_data.nv_itemHeight * nv_data.nv_visibleItemCount),})))};function nv_maskStyle(nv_data){return(nv_style(({'nv_background-size':'100% ' + nv_addUnit((nv_data.nv_itemHeight * (nv_data.nv_visibleItemCount - 1)) / 2),})))};function nv_frameStyle(nv_data){return(nv_style(({nv_height:nv_addUnit(nv_data.nv_itemHeight),})))};function nv_columns(nv_columns){if (!nv_array.nv_isArray(nv_columns)){return([])};if (nv_columns.nv_length && !nv_columns[(0)].nv_values){return([({nv_values:nv_columns,})])};return(nv_columns)};nv_module.nv_exports = ({nv_columnsStyle:nv_columnsStyle,nv_frameStyle:nv_frameStyle,nv_maskStyle:nv_maskStyle,nv_columns:nv_columns,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/popup/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/popup/index.wxs");
f_['./miniprogram_npm/@vant/weapp/popup/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/popup/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/popup/index.wxs");
function np_6(){var nv_module={nv_exports:{}};var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();function nv_popupStyle(nv_data){return(nv_style([({'nv_z-index':nv_data.nv_zIndex,'nv_-webkit-transition-duration':nv_data.nv_currentDuration + 'ms','nv_transition-duration':nv_data.nv_currentDuration + 'ms',}),nv_data.nv_display ? null:'display: none',nv_data.nv_customStyle]))};nv_module.nv_exports = ({nv_popupStyle:nv_popupStyle,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/radio-group/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/radio-group/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/radio-group/index.wxml']['utils']();

f_['./miniprogram_npm/@vant/weapp/radio/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/radio/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/radio/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/radio/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/radio/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/radio/index.wxs");
f_['./miniprogram_npm/@vant/weapp/radio/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/radio/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/radio/index.wxs");
function np_7(){var nv_module={nv_exports:{}};var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();function nv_iconStyle(nv_data){var nv_styles = ({'nv_font-size':nv_addUnit(nv_data.nv_iconSize),});if (nv_data.nv_checkedColor && !(nv_data.nv_disabled || nv_data.nv_parentDisabled) && nv_data.nv_value === nv_data.nv_name){nv_styles[("nv_"+'border-color')] = nv_data.nv_checkedColor;nv_styles[("nv_"+'background-color')] = nv_data.nv_checkedColor};return(nv_style(nv_styles))};function nv_iconCustomStyle(nv_data){return(nv_style(({'nv_line-height':nv_addUnit(nv_data.nv_iconSize),'nv_font-size':'.8em',nv_display:'block',})))};nv_module.nv_exports = ({nv_iconStyle:nv_iconStyle,nv_iconCustomStyle:nv_iconCustomStyle,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/switch/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/switch/index.wxml']['utils'] =f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
f_['./miniprogram_npm/@vant/weapp/switch/index.wxml']['utils']();
f_['./miniprogram_npm/@vant/weapp/switch/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/switch/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/switch/index.wxs");
f_['./miniprogram_npm/@vant/weapp/switch/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/switch/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/switch/index.wxs");
function np_8(){var nv_module={nv_exports:{}};var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();function nv_rootStyle(nv_data){var nv_currentColor = nv_data.nv_checked === nv_data.nv_activeValue ? nv_data.nv_activeColor:nv_data.nv_inactiveColor;return(nv_style(({'nv_font-size':nv_addUnit(nv_data.nv_size),'nv_background-color':nv_currentColor,})))};var nv_BLUE = '#1989fa';var nv_GRAY_DARK = '#969799';function nv_loadingColor(nv_data){return(nv_data.nv_checked === nv_data.nv_activeValue ? nv_data.nv_activeColor || nv_BLUE:nv_data.nv_inactiveColor || nv_GRAY_DARK)};nv_module.nv_exports = ({nv_rootStyle:nv_rootStyle,nv_loadingColor:nv_loadingColor,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/transition/index.wxml']={};
f_['./miniprogram_npm/@vant/weapp/transition/index.wxml']['computed'] =f_['./miniprogram_npm/@vant/weapp/transition/index.wxs'] || nv_require("p_./miniprogram_npm/@vant/weapp/transition/index.wxs");
f_['./miniprogram_npm/@vant/weapp/transition/index.wxml']['computed']();

f_['./miniprogram_npm/@vant/weapp/transition/index.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/transition/index.wxs");
function np_9(){var nv_module={nv_exports:{}};var nv_style = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/style.wxs')();function nv_rootStyle(nv_data){return(nv_style([({'nv_-webkit-transition-duration':nv_data.nv_currentDuration + 'ms','nv_transition-duration':nv_data.nv_currentDuration + 'ms',}),nv_data.nv_display ? null:'display: none',nv_data.nv_customStyle]))};nv_module.nv_exports = ({nv_rootStyle:nv_rootStyle,});return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs");
function np_10(){var nv_module={nv_exports:{}};var nv_REGEXP = nv_getRegExp('^-?\x5cd+(\x5c.\x5cd+)?$');function nv_addUnit(nv_value){if (nv_value == null){return(undefined)};return(nv_REGEXP.nv_test('' + nv_value) ? nv_value + 'px':nv_value)};nv_module.nv_exports = nv_addUnit;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/array.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/array.wxs");
function np_11(){var nv_module={nv_exports:{}};function nv_isArray(nv_array){return(nv_array && nv_array.nv_constructor === 'Array')};nv_module.nv_exports.nv_isArray = nv_isArray;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/bem.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/bem.wxs");
function np_12(){var nv_module={nv_exports:{}};var nv_array = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/array.wxs')();var nv_object = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/object.wxs')();var nv_PREFIX = 'van-';function nv_join(nv_name,nv_mods){nv_name = nv_PREFIX + nv_name;nv_mods = nv_mods.nv_map((function (nv_mod){return(nv_name + '--' + nv_mod)}));nv_mods.nv_unshift(nv_name);return(nv_mods.nv_join(' '))};function nv_traversing(nv_mods,nv_conf){if (!nv_conf){return};if (typeof nv_conf === 'string' || typeof nv_conf === 'number'){nv_mods.nv_push(nv_conf)} else if (nv_array.nv_isArray(nv_conf)){nv_conf.nv_forEach((function (nv_item){nv_traversing(nv_mods,nv_item)}))} else if (typeof nv_conf === 'object'){nv_object.nv_keys(nv_conf).nv_forEach((function (nv_key){nv_conf[((nt_0=(nv_key),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))] && nv_mods.nv_push(nv_key)}))}};function nv_bem(nv_name,nv_conf){var nv_mods = [];nv_traversing(nv_mods,nv_conf);return(nv_join(nv_name,nv_mods))};nv_module.nv_exports = nv_bem;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/memoize.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/memoize.wxs");
function np_13(){var nv_module={nv_exports:{}};function nv_isPrimitive(nv_value){var nv_type = typeof nv_value;return((nv_type === 'boolean' || nv_type === 'number' || nv_type === 'string' || nv_type === 'undefined' || nv_value === null))};function nv_call(nv_fn,nv_args){if (nv_args.nv_length === 2){return(nv_fn(nv_args[(0)],nv_args[(1)]))};if (nv_args.nv_length === 1){return(nv_fn(nv_args[(0)]))};return(nv_fn())};function nv_serializer(nv_args){if (nv_args.nv_length === 1 && nv_isPrimitive(nv_args[(0)])){return(nv_args[(0)])};var nv_obj = ({});for(var nv_i = 0;nv_i < nv_args.nv_length;nv_i++){nv_obj[((nt_5=('key' + nv_i),null==nt_5?undefined:'number'=== typeof nt_5?nt_5:"nv_"+nt_5))] = nv_args[((nt_6=(nv_i),null==nt_6?undefined:'number'=== typeof nt_6?nt_6:"nv_"+nt_6))]};return(nv_JSON.nv_stringify(nv_obj))};function nv_memoize(nv_fn){arguments.nv_length=arguments.length;var nv_cache = ({});return((function (){arguments.nv_length=arguments.length;var nv_key = nv_serializer(arguments);if (nv_cache[((nt_7=(nv_key),null==nt_7?undefined:'number'=== typeof nt_7?nt_7:"nv_"+nt_7))] === undefined){nv_cache[((nt_8=(nv_key),null==nt_8?undefined:'number'=== typeof nt_8?nt_8:"nv_"+nt_8))] = nv_call(nv_fn,arguments)};return(nv_cache[((nt_9=(nv_key),null==nt_9?undefined:'number'=== typeof nt_9?nt_9:"nv_"+nt_9))])}))};nv_module.nv_exports = nv_memoize;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/object.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/object.wxs");
function np_14(){var nv_module={nv_exports:{}};var nv_REGEXP = nv_getRegExp('{|}|\x22','g');function nv_keys(nv_obj){return(nv_JSON.nv_stringify(nv_obj).nv_replace(nv_REGEXP,'').nv_split(',').nv_map((function (nv_item){return(nv_item.nv_split(':')[(0)])})))};nv_module.nv_exports.nv_keys = nv_keys;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/style.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/style.wxs");
function np_15(){var nv_module={nv_exports:{}};var nv_object = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/object.wxs')();var nv_array = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/array.wxs')();function nv_kebabCase(nv_word){var nv_newWord = nv_word.nv_replace(nv_getRegExp("[A-Z]",'g'),(function (nv_i){return('-' + nv_i)})).nv_toLowerCase();return(nv_newWord)};function nv_style(nv_styles){if (nv_array.nv_isArray(nv_styles)){return(nv_styles.nv_filter((function (nv_item){return(nv_item != null && nv_item !== '')})).nv_map((function (nv_item){return(nv_style(nv_item))})).nv_join(';'))};if ('Object' === nv_styles.nv_constructor){return(nv_object.nv_keys(nv_styles).nv_filter((function (nv_key){return(nv_styles[((nt_0=(nv_key),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))] != null && nv_styles[((nt_1=(nv_key),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))] !== '')})).nv_map((function (nv_key){return([nv_kebabCase(nv_key),[nv_styles[((nt_2=(nv_key),null==nt_2?undefined:'number'=== typeof nt_2?nt_2:"nv_"+nt_2))]]].nv_join(':'))})).nv_join(';'))};return(nv_styles)};nv_module.nv_exports = nv_style;return nv_module.nv_exports;}

f_['./miniprogram_npm/@vant/weapp/wxs/utils.wxs'] = nv_require("p_./miniprogram_npm/@vant/weapp/wxs/utils.wxs");
function np_16(){var nv_module={nv_exports:{}};var nv_bem = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/bem.wxs')();var nv_memoize = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/memoize.wxs')();var nv_addUnit = nv_require('p_./miniprogram_npm/@vant/weapp/wxs/add-unit.wxs')();nv_module.nv_exports = ({nv_bem:nv_memoize(nv_bem),nv_memoize:nv_memoize,nv_addUnit:nv_addUnit,});return nv_module.nv_exports;}

var x=['./components/image-cropper/index.wxml','./miniprogram_npm/@vant/weapp/area/index.wxml','./miniprogram_npm/@vant/weapp/button/index.wxml','./miniprogram_npm/@vant/weapp/datetime-picker/index.wxml','./miniprogram_npm/@vant/weapp/dialog/index.wxml','./miniprogram_npm/@vant/weapp/goods-action-button/index.wxml','./miniprogram_npm/@vant/weapp/goods-action/index.wxml','./miniprogram_npm/@vant/weapp/icon/index.wxml','./miniprogram_npm/@vant/weapp/info/index.wxml','./miniprogram_npm/@vant/weapp/loading/index.wxml','./miniprogram_npm/@vant/weapp/overlay/index.wxml','./miniprogram_npm/@vant/weapp/picker-column/index.wxml','./miniprogram_npm/@vant/weapp/picker/index.wxml','./toolbar.wxml','./miniprogram_npm/@vant/weapp/picker/toolbar.wxml','./miniprogram_npm/@vant/weapp/popup/index.wxml','./miniprogram_npm/@vant/weapp/radio-group/index.wxml','./miniprogram_npm/@vant/weapp/radio/index.wxml','./miniprogram_npm/@vant/weapp/switch/index.wxml','./miniprogram_npm/@vant/weapp/toast/index.wxml','./miniprogram_npm/@vant/weapp/transition/index.wxml','./pages/complianceState/complianceState.wxml','./pages/dataSign/dataSign.wxml','./pages/fillPrepare/fillPrepare.wxml','./pages/professionalCredit/professionalCredit.wxml','./pages/signlist/signlist.wxml','./pages/supplement/supplement.wxml','./pages/zcutimg/zcutimg.wxml','./pages/zimportInfo/components/form/form.wxml','./pages/zimportInfo/tabs/tbasic/tbasic.wxml','./pages/zimportInfo/tabs/tfamily/tfamily.wxml','./pages/zimportInfo/tabs/tpaycard/tpaycard.wxml','./pages/zimportInfo/tabs/tperson/tperson.wxml','./pages/zimportInfo/zimportInfo.wxml','./pages/zlogin/zlogin.wxml','./pages/zusedesc/zusedesc.wxml','./pages/zwelcome/zwelcome.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_mz(z,'view',['catchtouchmove',1,'catchtouchstart',1,'class',2,'style',3],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,5,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,6,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(xC,cF)
if(_oz(z,7,e,s,gg)){cF.wxVkey=1
}
var hG=_v()
_(xC,hG)
if(_oz(z,8,e,s,gg)){hG.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
hG.wxXCkey=1
_(oB,xC)
var oH=_n('slot')
_(oB,oH)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oJ=_mz(z,'van-picker',['activeClass',0,'bind:cancel',1,'bind:change',1,'bind:confirm',2,'cancelButtonText',3,'class',4,'columnClass',5,'columns',6,'confirmButtonText',7,'itemHeight',8,'loading',9,'showToolbar',10,'title',11,'toolbarClass',12,'valueKey',13,'visibleItemCount',14],[],e,s,gg)
_(r,oJ)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var aL=_mz(z,'button',['appParameter',0,'ariaLabel',1,'bindchooseavatar',1,'bindcontact',2,'binderror',3,'bindgetphonenumber',4,'bindgetuserinfo',5,'bindlaunchapp',6,'bindopensetting',7,'bindtap',8,'businessId',9,'class',10,'data-detail',11,'formType',12,'hoverClass',13,'id',14,'lang',15,'openType',16,'sendMessageImg',17,'sendMessagePath',18,'sendMessageTitle',19,'sessionFrom',20,'showMessageCard',21,'style',22],[],e,s,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,24,e,s,gg)){tM.wxVkey=1
var bO=_mz(z,'van-loading',['color',25,'customClass',1,'size',2,'type',3],[],e,s,gg)
_(tM,bO)
var eN=_v()
_(tM,eN)
if(_oz(z,29,e,s,gg)){eN.wxVkey=1
}
eN.wxXCkey=1
}
else{tM.wxVkey=2
var oP=_v()
_(tM,oP)
if(_oz(z,30,e,s,gg)){oP.wxVkey=1
var xQ=_mz(z,'van-icon',['class',31,'classPrefix',1,'customStyle',2,'name',3,'size',4],[],e,s,gg)
_(oP,xQ)
}
var oR=_n('slot')
_(tM,oR)
oP.wxXCkey=1
oP.wxXCkey=3
}
tM.wxXCkey=1
tM.wxXCkey=3
tM.wxXCkey=3
_(r,aL)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var cT=_mz(z,'van-picker',['activeClass',0,'bind:cancel',1,'bind:change',1,'bind:confirm',2,'cancelButtonText',3,'class',4,'columnClass',5,'columns',6,'confirmButtonText',7,'itemHeight',8,'showToolbar',9,'title',10,'toolbarClass',11,'visibleItemCount',12],[],e,s,gg)
_(r,cT)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var oV=_mz(z,'van-popup',['bind:close',0,'closeOnClickOverlay',1,'customClass',1,'customStyle',2,'overlay',3,'overlayStyle',4,'show',5,'transition',6,'zIndex',7],[],e,s,gg)
var cW=_v()
_(oV,cW)
if(_oz(z,9,e,s,gg)){cW.wxVkey=1
var aZ=_n('view')
_rz(z,aZ,'class',10,e,s,gg)
var t1=_v()
_(aZ,t1)
if(_oz(z,11,e,s,gg)){t1.wxVkey=1
var e2=_n('slot')
_rz(z,e2,'name',12,e,s,gg)
_(t1,e2)
}
else if(_oz(z,13,e,s,gg)){t1.wxVkey=2
}
t1.wxXCkey=1
_(cW,aZ)
}
var oX=_v()
_(oV,oX)
if(_oz(z,14,e,s,gg)){oX.wxVkey=1
var b3=_n('slot')
_(oX,b3)
}
else if(_oz(z,15,e,s,gg)){oX.wxVkey=2
}
var lY=_v()
_(oV,lY)
if(_oz(z,16,e,s,gg)){lY.wxVkey=1
var o4=_n('van-goods-action')
_rz(z,o4,'customClass',17,e,s,gg)
var x5=_v()
_(o4,x5)
if(_oz(z,18,e,s,gg)){x5.wxVkey=1
var f7=_mz(z,'van-goods-action-button',['bind:click',19,'class',1,'customClass',2,'customStyle',3,'loading',4,'size',5],[],e,s,gg)
_(x5,f7)
}
var o6=_v()
_(o4,o6)
if(_oz(z,25,e,s,gg)){o6.wxVkey=1
var c8=_mz(z,'van-goods-action-button',['appParameter',26,'bind:click',1,'bindcontact',2,'binderror',3,'bindgetphonenumber',4,'bindgetuserinfo',5,'bindlaunchapp',6,'bindopensetting',7,'businessId',8,'class',9,'customClass',10,'customStyle',11,'lang',12,'loading',13,'openType',14,'sendMessageImg',15,'sendMessagePath',16,'sendMessageTitle',17,'sessionFrom',18,'showMessageCard',19,'size',20],[],e,s,gg)
_(o6,c8)
}
x5.wxXCkey=1
x5.wxXCkey=3
o6.wxXCkey=1
o6.wxXCkey=3
_(lY,o4)
}
else{lY.wxVkey=2
var h9=_n('view')
_rz(z,h9,'class',47,e,s,gg)
var o0=_v()
_(h9,o0)
if(_oz(z,48,e,s,gg)){o0.wxVkey=1
var oBB=_mz(z,'van-button',['bind:click',49,'class',1,'customClass',2,'customStyle',3,'loading',4,'size',5],[],e,s,gg)
_(o0,oBB)
}
var cAB=_v()
_(h9,cAB)
if(_oz(z,55,e,s,gg)){cAB.wxVkey=1
var lCB=_mz(z,'van-button',['appParameter',56,'bind:click',1,'bindcontact',2,'binderror',3,'bindgetphonenumber',4,'bindgetuserinfo',5,'bindlaunchapp',6,'bindopensetting',7,'businessId',8,'class',9,'customClass',10,'customStyle',11,'lang',12,'loading',13,'openType',14,'sendMessageImg',15,'sendMessagePath',16,'sendMessageTitle',17,'sessionFrom',18,'showMessageCard',19,'size',20],[],e,s,gg)
_(cAB,lCB)
}
o0.wxXCkey=1
o0.wxXCkey=3
cAB.wxXCkey=1
cAB.wxXCkey=3
_(lY,h9)
}
cW.wxXCkey=1
oX.wxXCkey=1
lY.wxXCkey=1
lY.wxXCkey=3
lY.wxXCkey=3
_(r,oV)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var tEB=_mz(z,'van-button',['appParameter',0,'bind:click',1,'bindcontact',1,'binderror',2,'bindgetphonenumber',3,'bindgetuserinfo',4,'bindlaunchapp',5,'bindopensetting',6,'businessId',7,'class',8,'color',9,'customClass',10,'disabled',11,'id',12,'lang',13,'loading',14,'openType',15,'plain',16,'sendMessageImg',17,'sendMessagePath',18,'sendMessageTitle',19,'sessionFrom',20,'showMessageCard',21,'type',22],[],e,s,gg)
var eFB=_n('slot')
_(tEB,eFB)
_(r,tEB)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oHB=_n('slot')
_(r,oHB)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oJB=_mz(z,'view',['bindtap',0,'class',1,'style',1],[],e,s,gg)
var fKB=_v()
_(oJB,fKB)
if(_oz(z,3,e,s,gg)){fKB.wxVkey=1
var hMB=_mz(z,'van-info',['customClass',4,'dot',1,'info',2],[],e,s,gg)
_(fKB,hMB)
}
var cLB=_v()
_(oJB,cLB)
if(_oz(z,7,e,s,gg)){cLB.wxVkey=1
}
fKB.wxXCkey=1
fKB.wxXCkey=3
cLB.wxXCkey=1
_(r,oJB)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var cOB=_v()
_(r,cOB)
if(_oz(z,0,e,s,gg)){cOB.wxVkey=1
}
cOB.wxXCkey=1
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var lQB=_n('view')
_rz(z,lQB,'class',0,e,s,gg)
var aRB=_v()
_(lQB,aRB)
var tSB=function(bUB,eTB,oVB,gg){
var oXB=_v()
_(oVB,oXB)
if(_oz(z,3,bUB,eTB,gg)){oXB.wxVkey=1
}
oXB.wxXCkey=1
return oVB
}
aRB.wxXCkey=2
_2z(z,1,tSB,e,s,gg,aRB,'item','index','index')
var fYB=_n('slot')
_(lQB,fYB)
_(r,lQB)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var h1B=_v()
_(r,h1B)
if(_oz(z,0,e,s,gg)){h1B.wxVkey=1
var o2B=_mz(z,'van-transition',['bind:tap',1,'catch:touchmove',1,'customClass',2,'customStyle',3,'duration',4,'show',5],[],e,s,gg)
var c3B=_n('slot')
_(o2B,c3B)
_(h1B,o2B)
}
else{h1B.wxVkey=2
var o4B=_mz(z,'van-transition',['bind:tap',7,'customClass',1,'customStyle',2,'duration',3,'show',4],[],e,s,gg)
var l5B=_n('slot')
_(o4B,l5B)
_(h1B,o4B)
}
h1B.wxXCkey=1
h1B.wxXCkey=3
h1B.wxXCkey=3
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var e8B=_n('view')
_rz(z,e8B,'class',0,e,s,gg)
var b9B=_v()
_(e8B,b9B)
if(_oz(z,1,e,s,gg)){b9B.wxVkey=1
var oBC=e_[x[12]].j
_ic(x[13],e_,x[12],e,s,b9B,gg);
oBC.pop()
}
var o0B=_v()
_(e8B,o0B)
if(_oz(z,2,e,s,gg)){o0B.wxVkey=1
var fCC=_n('loading')
_rz(z,fCC,'color',3,e,s,gg)
_(o0B,fCC)
}
var cDC=_mz(z,'view',['catch:touchmove',4,'class',1,'style',2],[],e,s,gg)
var hEC=_v()
_(cDC,hEC)
var oFC=function(oHC,cGC,lIC,gg){
var tKC=_mz(z,'picker-column',['activeClass',9,'bind:change',1,'class',2,'customClass',3,'data-index',4,'defaultIndex',5,'initialOptions',6,'itemHeight',7,'valueKey',8,'visibleItemCount',9],[],oHC,cGC,gg)
_(lIC,tKC)
return lIC
}
hEC.wxXCkey=4
_2z(z,7,oFC,e,s,gg,hEC,'item','index','index')
_(e8B,cDC)
var xAC=_v()
_(e8B,xAC)
if(_oz(z,19,e,s,gg)){xAC.wxVkey=1
var eLC=e_[x[12]].j
_ic(x[13],e_,x[12],e,s,xAC,gg);
eLC.pop()
}
b9B.wxXCkey=1
o0B.wxXCkey=1
o0B.wxXCkey=3
xAC.wxXCkey=1
_(r,e8B)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var oNC=_v()
_(r,oNC)
if(_oz(z,0,e,s,gg)){oNC.wxVkey=1
var xOC=_v()
_(oNC,xOC)
if(_oz(z,1,e,s,gg)){xOC.wxVkey=1
}
xOC.wxXCkey=1
}
oNC.wxXCkey=1
return r
}
e_[x[14]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var fQC=_v()
_(r,fQC)
if(_oz(z,0,e,s,gg)){fQC.wxVkey=1
var hSC=_mz(z,'van-overlay',['bind:click',1,'customStyle',1,'duration',2,'lockScroll',3,'show',4,'zIndex',5],[],e,s,gg)
_(fQC,hSC)
}
var cRC=_v()
_(r,cRC)
if(_oz(z,7,e,s,gg)){cRC.wxVkey=1
var oTC=_mz(z,'view',['bind:transitionend',8,'class',1,'style',2],[],e,s,gg)
var oVC=_n('slot')
_(oTC,oVC)
var cUC=_v()
_(oTC,cUC)
if(_oz(z,11,e,s,gg)){cUC.wxVkey=1
var lWC=_mz(z,'van-icon',['bind:tap',12,'class',1,'name',2],[],e,s,gg)
_(cUC,lWC)
}
cUC.wxXCkey=1
cUC.wxXCkey=3
_(cRC,oTC)
}
fQC.wxXCkey=1
fQC.wxXCkey=3
cRC.wxXCkey=1
cRC.wxXCkey=3
return r
}
e_[x[15]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var tYC=_n('slot')
_(r,tYC)
return r
}
e_[x[16]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var b1C=_n('view')
_rz(z,b1C,'class',0,e,s,gg)
var o2C=_v()
_(b1C,o2C)
if(_oz(z,1,e,s,gg)){o2C.wxVkey=1
var o4C=_mz(z,'view',['bindtap',2,'class',1],[],e,s,gg)
var f5C=_n('slot')
_(o4C,f5C)
_(o2C,o4C)
}
var c6C=_mz(z,'view',['bindtap',4,'class',1,'style',2],[],e,s,gg)
var h7C=_v()
_(c6C,h7C)
if(_oz(z,7,e,s,gg)){h7C.wxVkey=1
var o8C=_n('slot')
_rz(z,o8C,'name',8,e,s,gg)
_(h7C,o8C)
}
else{h7C.wxVkey=2
var c9C=_mz(z,'van-icon',['class',9,'customClass',1,'customStyle',2,'name',3,'style',4],[],e,s,gg)
_(h7C,c9C)
}
h7C.wxXCkey=1
h7C.wxXCkey=3
_(b1C,c6C)
var x3C=_v()
_(b1C,x3C)
if(_oz(z,14,e,s,gg)){x3C.wxVkey=1
var o0C=_mz(z,'view',['bindtap',15,'class',1],[],e,s,gg)
var lAD=_n('slot')
_(o0C,lAD)
_(x3C,o0C)
}
o2C.wxXCkey=1
x3C.wxXCkey=1
_(r,b1C)
return r
}
e_[x[17]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var tCD=_mz(z,'view',['bind:tap',0,'class',1,'style',1],[],e,s,gg)
var eDD=_v()
_(tCD,eDD)
if(_oz(z,3,e,s,gg)){eDD.wxVkey=1
var bED=_mz(z,'van-loading',['color',4,'customClass',1],[],e,s,gg)
_(eDD,bED)
}
eDD.wxXCkey=1
eDD.wxXCkey=3
_(r,tCD)
return r
}
e_[x[18]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var xGD=_v()
_(r,xGD)
if(_oz(z,0,e,s,gg)){xGD.wxVkey=1
var oHD=_mz(z,'van-overlay',['customStyle',1,'show',1,'zIndex',2],[],e,s,gg)
_(xGD,oHD)
}
var fID=_mz(z,'van-transition',['customClass',4,'customStyle',1,'show',2],[],e,s,gg)
var cJD=_mz(z,'view',['catch:touchmove',7,'class',1],[],e,s,gg)
var hKD=_v()
_(cJD,hKD)
if(_oz(z,9,e,s,gg)){hKD.wxVkey=1
}
else if(_oz(z,10,e,s,gg)){hKD.wxVkey=2
}
else{hKD.wxVkey=3
var oLD=_v()
_(hKD,oLD)
if(_oz(z,11,e,s,gg)){oLD.wxVkey=1
var oND=_mz(z,'van-loading',['color',12,'customClass',1,'type',2],[],e,s,gg)
_(oLD,oND)
}
else{oLD.wxVkey=2
var lOD=_mz(z,'van-icon',['class',15,'name',1],[],e,s,gg)
_(oLD,lOD)
}
var cMD=_v()
_(hKD,cMD)
if(_oz(z,17,e,s,gg)){cMD.wxVkey=1
}
oLD.wxXCkey=1
oLD.wxXCkey=3
oLD.wxXCkey=3
cMD.wxXCkey=1
}
var aPD=_n('slot')
_(cJD,aPD)
hKD.wxXCkey=1
hKD.wxXCkey=3
_(fID,cJD)
_(r,fID)
xGD.wxXCkey=1
xGD.wxXCkey=3
return r
}
e_[x[19]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var eRD=_v()
_(r,eRD)
if(_oz(z,0,e,s,gg)){eRD.wxVkey=1
var bSD=_mz(z,'view',['bind:transitionend',1,'class',1,'style',2],[],e,s,gg)
var oTD=_n('slot')
_(bSD,oTD)
_(eRD,bSD)
}
eRD.wxXCkey=1
return r
}
e_[x[20]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var oVD=_mz(z,'zform',['bindinputevent',0,'bindradioevent',1,'bindselectevent',1,'class',2,'formlist',3,'id',4],[],e,s,gg)
_(r,oVD)
return r
}
e_[x[21]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[22]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[23]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var oZD=_mz(z,'zform',['bindinputevent',0,'bindradioevent',1,'bindselectevent',1,'class',2,'formlist',3,'id',4],[],e,s,gg)
_(r,oZD)
return r
}
e_[x[24]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[25]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var l3D=_v()
_(r,l3D)
if(_oz(z,0,e,s,gg)){l3D.wxVkey=1
var a4D=_n('view')
_rz(z,a4D,'class',1,e,s,gg)
var t5D=_v()
_(a4D,t5D)
if(_oz(z,2,e,s,gg)){t5D.wxVkey=1
var o8D=_mz(z,'zform',['bindinputevent',3,'bindradioevent',1,'bindselectevent',2,'class',3,'formlist',4,'id',5],[],e,s,gg)
_(t5D,o8D)
}
var e6D=_v()
_(a4D,e6D)
if(_oz(z,9,e,s,gg)){e6D.wxVkey=1
var x9D=_mz(z,'zform',['bindchosesingleimgevent',10,'bindinputevent',1,'bindselectevent',2,'class',3,'formlist',4,'id',5],[],e,s,gg)
_(e6D,x9D)
}
var b7D=_v()
_(a4D,b7D)
if(_oz(z,16,e,s,gg)){b7D.wxVkey=1
var o0D=_mz(z,'tpaycard',['class',17,'type',1],[],e,s,gg)
_(b7D,o0D)
}
t5D.wxXCkey=1
t5D.wxXCkey=3
e6D.wxXCkey=1
e6D.wxXCkey=3
b7D.wxXCkey=1
b7D.wxXCkey=3
_(l3D,a4D)
}
l3D.wxXCkey=1
l3D.wxXCkey=3
return r
}
e_[x[26]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var cBE=_mz(z,'image-cropper',['aspectRatio',0,'id',1,'isProportion',1,'quality',2,'src',3],[],e,s,gg)
_(r,cBE)
return r
}
e_[x[27]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var oDE=_v()
_(r,oDE)
var cEE=function(lGE,oFE,aHE,gg){
var eJE=_n('view')
_rz(z,eJE,'class',2,lGE,oFE,gg)
var bKE=_v()
_(eJE,bKE)
if(_oz(z,3,lGE,oFE,gg)){bKE.wxVkey=1
}
else if(_oz(z,4,lGE,oFE,gg)){bKE.wxVkey=2
var oLE=_v()
_(bKE,oLE)
if(_oz(z,5,lGE,oFE,gg)){oLE.wxVkey=1
}
oLE.wxXCkey=1
}
else if(_oz(z,6,lGE,oFE,gg)){bKE.wxVkey=3
var xME=_v()
_(bKE,xME)
if(_oz(z,7,lGE,oFE,gg)){xME.wxVkey=1
}
xME.wxXCkey=1
}
else if(_oz(z,8,lGE,oFE,gg)){bKE.wxVkey=4
var oNE=_mz(z,'view',['bindtap',9,'class',1,'data-age',2,'data-disabled',3,'data-disabledtext',4,'data-key',5,'id',6],[],lGE,oFE,gg)
var fOE=_v()
_(oNE,fOE)
if(_oz(z,16,lGE,oFE,gg)){fOE.wxVkey=1
}
fOE.wxXCkey=1
_(bKE,oNE)
}
else if(_oz(z,17,lGE,oFE,gg)){bKE.wxVkey=5
}
else if(_oz(z,18,lGE,oFE,gg)){bKE.wxVkey=6
}
else if(_oz(z,19,lGE,oFE,gg)){bKE.wxVkey=7
var cPE=_v()
_(bKE,cPE)
if(_oz(z,20,lGE,oFE,gg)){cPE.wxVkey=1
var oRE=_n('view')
_rz(z,oRE,'class',21,lGE,oFE,gg)
var cSE=_v()
_(oRE,cSE)
if(_oz(z,22,lGE,oFE,gg)){cSE.wxVkey=1
var lUE=_v()
_(cSE,lUE)
var aVE=function(eXE,tWE,bYE,gg){
var x1E=_v()
_(bYE,x1E)
if(_oz(z,27,eXE,tWE,gg)){x1E.wxVkey=1
}
x1E.wxXCkey=1
return bYE
}
lUE.wxXCkey=2
_2z(z,25,aVE,lGE,oFE,gg,lUE,'report','index','id')
}
var oTE=_v()
_(oRE,oTE)
if(_oz(z,28,lGE,oFE,gg)){oTE.wxVkey=1
}
cSE.wxXCkey=1
oTE.wxXCkey=1
_(cPE,oRE)
}
var hQE=_v()
_(bKE,hQE)
if(_oz(z,29,lGE,oFE,gg)){hQE.wxVkey=1
var o2E=_v()
_(hQE,o2E)
if(_oz(z,30,lGE,oFE,gg)){o2E.wxVkey=1
}
o2E.wxXCkey=1
}
cPE.wxXCkey=1
hQE.wxXCkey=1
}
else if(_oz(z,31,lGE,oFE,gg)){bKE.wxVkey=8
var f3E=_v()
_(bKE,f3E)
if(_oz(z,32,lGE,oFE,gg)){f3E.wxVkey=1
var c4E=_n('view')
_rz(z,c4E,'class',33,lGE,oFE,gg)
var h5E=_v()
_(c4E,h5E)
if(_oz(z,34,lGE,oFE,gg)){h5E.wxVkey=1
var c7E=_v()
_(h5E,c7E)
var o8E=function(a0E,l9E,tAF,gg){
var bCF=_v()
_(tAF,bCF)
if(_oz(z,39,a0E,l9E,gg)){bCF.wxVkey=1
}
bCF.wxXCkey=1
return tAF
}
c7E.wxXCkey=2
_2z(z,37,o8E,lGE,oFE,gg,c7E,'report','index','id')
}
var o6E=_v()
_(c4E,o6E)
if(_oz(z,40,lGE,oFE,gg)){o6E.wxVkey=1
}
h5E.wxXCkey=1
o6E.wxXCkey=1
_(f3E,c4E)
}
f3E.wxXCkey=1
}
else if(_oz(z,41,lGE,oFE,gg)){bKE.wxVkey=9
}
else if(_oz(z,42,lGE,oFE,gg)){bKE.wxVkey=10
}
else if(_oz(z,43,lGE,oFE,gg)){bKE.wxVkey=11
var xEF=_mz(z,'view',['class',44,'id',1],[],lGE,oFE,gg)
var oFF=_v()
_(xEF,oFF)
if(_oz(z,46,lGE,oFE,gg)){oFF.wxVkey=1
var fGF=_mz(z,'van-switch',['bind:change',47,'checked',1,'class',2,'data-index',3,'data-item',4,'data-key',5,'disabled',6],[],lGE,oFE,gg)
_(oFF,fGF)
}
var cHF=_mz(z,'view',['bindtap',54,'class',1,'data-index',2,'data-item',3,'data-key',4,'data-type',5],[],lGE,oFE,gg)
var hIF=_v()
_(cHF,hIF)
if(_oz(z,60,lGE,oFE,gg)){hIF.wxVkey=1
}
var oJF=_v()
_(cHF,oJF)
if(_oz(z,61,lGE,oFE,gg)){oJF.wxVkey=1
}
var cKF=_v()
_(cHF,cKF)
if(_oz(z,62,lGE,oFE,gg)){cKF.wxVkey=1
}
hIF.wxXCkey=1
oJF.wxXCkey=1
cKF.wxXCkey=1
_(xEF,cHF)
oFF.wxXCkey=1
oFF.wxXCkey=3
_(bKE,xEF)
var oDF=_v()
_(bKE,oDF)
if(_oz(z,63,lGE,oFE,gg)){oDF.wxVkey=1
}
oDF.wxXCkey=1
}
else if(_oz(z,64,lGE,oFE,gg)){bKE.wxVkey=12
var oLF=_mz(z,'van-switch',['bind:change',65,'checked',1,'class',2,'data-index',3,'data-item',4,'disabled',5],[],lGE,oFE,gg)
_(bKE,oLF)
}
else if(_oz(z,71,lGE,oFE,gg)){bKE.wxVkey=13
var lMF=_n('view')
_rz(z,lMF,'class',72,lGE,oFE,gg)
var aNF=_v()
_(lMF,aNF)
if(_oz(z,73,lGE,oFE,gg)){aNF.wxVkey=1
var ePF=_v()
_(aNF,ePF)
var bQF=function(xSF,oRF,oTF,gg){
var cVF=_v()
_(oTF,cVF)
if(_oz(z,78,xSF,oRF,gg)){cVF.wxVkey=1
}
cVF.wxXCkey=1
return oTF
}
ePF.wxXCkey=2
_2z(z,76,bQF,lGE,oFE,gg,ePF,'report','index','id')
}
var tOF=_v()
_(lMF,tOF)
if(_oz(z,79,lGE,oFE,gg)){tOF.wxVkey=1
}
aNF.wxXCkey=1
tOF.wxXCkey=1
_(bKE,lMF)
}
else if(_oz(z,80,lGE,oFE,gg)){bKE.wxVkey=14
var hWF=_mz(z,'van-radio-group',['bind:change',81,'data-index',1,'data-item',2,'direction',3,'disabled',4,'value',5],[],lGE,oFE,gg)
var oXF=_mz(z,'van-radio',['useIconSlot',-1,'name',87,'value',1],[],lGE,oFE,gg)
_(hWF,oXF)
var cYF=_mz(z,'van-radio',['useIconSlot',-1,'name',89,'value',1],[],lGE,oFE,gg)
_(hWF,cYF)
_(bKE,hWF)
}
bKE.wxXCkey=1
bKE.wxXCkey=3
bKE.wxXCkey=3
bKE.wxXCkey=3
_(aHE,eJE)
return aHE
}
oDE.wxXCkey=4
_2z(z,0,cEE,e,s,gg,oDE,'item','index','key')
var oZF=_mz(z,'van-overlay',['bind:click',91,'show',1,'zIndex',2],[],e,s,gg)
_(r,oZF)
var l1F=_mz(z,'van-popup',['round',-1,'bind:close',94,'customStyle',1,'position',2,'show',3,'zIndex',4],[],e,s,gg)
var a2F=_mz(z,'van-datetime-picker',['activeClass',99,'bind:cancel',1,'bind:confirm',2,'bind:input',3,'columnClass',4,'formatter',5,'itemHeight',6,'minDate',7,'title',8,'toolbarClass',9,'type',10,'value',11],[],e,s,gg)
_(l1F,a2F)
_(r,l1F)
var t3F=_mz(z,'van-popup',['round',-1,'customStyle',111,'position',1,'show',2,'zIndex',3],[],e,s,gg)
var e4F=_mz(z,'van-picker',['showToolbar',-1,'activeClass',115,'bind:cancel',1,'bind:change',2,'bind:confirm',3,'columnClass',4,'columns',5,'title',6,'toolbarClass',7,'valueKey',8],[],e,s,gg)
_(t3F,e4F)
_(r,t3F)
var b5F=_mz(z,'van-popup',['round',-1,'customStyle',124,'position',1,'show',2,'zIndex',3],[],e,s,gg)
var o6F=_v()
_(b5F,o6F)
if(_oz(z,128,e,s,gg)){o6F.wxVkey=1
var x7F=_mz(z,'van-area',['showToolbar',-1,'activeClass',129,'areaList',1,'bind:cancel',2,'bind:change',3,'bind:confirm',4,'class',5,'columnClass',6,'columnsNum',7,'title',8,'toolbarClass',9],[],e,s,gg)
_(o6F,x7F)
}
o6F.wxXCkey=1
o6F.wxXCkey=3
_(r,b5F)
var o8F=_mz(z,'van-popup',['round',-1,'customStyle',139,'position',1,'show',2,'zIndex',3],[],e,s,gg)
var f9F=_v()
_(o8F,f9F)
if(_oz(z,143,e,s,gg)){f9F.wxVkey=1
var hAG=_mz(z,'van-area',['showToolbar',-1,'activeClass',144,'areaList',1,'bind:cancel',2,'bind:change',3,'bind:confirm',4,'class',5,'columnClass',6,'columnsNum',7,'title',8,'toolbarClass',9],[],e,s,gg)
_(f9F,hAG)
}
var c0F=_v()
_(o8F,c0F)
if(_oz(z,154,e,s,gg)){c0F.wxVkey=1
var oBG=_mz(z,'van-area',['showToolbar',-1,'activeClass',155,'areaList',1,'bind:cancel',2,'bind:change',3,'bind:confirm',4,'class',5,'columnClass',6,'title',7,'toolbarClass',8],[],e,s,gg)
_(c0F,oBG)
}
f9F.wxXCkey=1
f9F.wxXCkey=3
c0F.wxXCkey=1
c0F.wxXCkey=3
_(r,o8F)
return r
}
e_[x[28]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var oDG=_n('view')
_rz(z,oDG,'class',0,e,s,gg)
var aFG=_mz(z,'zform',['bindinputchangeevent',1,'bindinputevent',1,'disabled',2,'formlist',3,'id',4],[],e,s,gg)
_(oDG,aFG)
var tGG=_mz(z,'zform',['bindcallbackcardevent',6,'bindcallbackothercardevent',1,'bindinputevent',2,'bindselectevent',3,'bindtimesingleevent',4,'disabled',5,'formlist',6,'id',7],[],e,s,gg)
_(oDG,tGG)
var eHG=_mz(z,'zform',['bindinputevent',14,'bindselectevent',1,'disabled',2,'formlist',3,'id',4],[],e,s,gg)
_(oDG,eHG)
var bIG=_mz(z,'zform',['bindinputevent',19,'bindselectevent',1,'disabled',2,'formlist',3,'id',4],[],e,s,gg)
_(oDG,bIG)
var oJG=_mz(z,'zform',['bindinputevent',24,'bindselectevent',1,'class',2,'disabled',3,'formlist',4,'id',5],[],e,s,gg)
_(oDG,oJG)
var xKG=_n('view')
_rz(z,xKG,'class',30,e,s,gg)
var fMG=_mz(z,'zform',['bindinputevent',31,'bindselectevent',1,'class',2,'disabled',3,'formlist',4,'id',5],[],e,s,gg)
_(xKG,fMG)
var cNG=_v()
_(xKG,cNG)
var hOG=function(cQG,oPG,oRG,gg){
var aTG=_n('view')
_rz(z,aTG,'class',39,cQG,oPG,gg)
var tUG=_v()
_(aTG,tUG)
if(_oz(z,40,cQG,oPG,gg)){tUG.wxVkey=1
}
var eVG=_mz(z,'zform',['bindinputevent',41,'bindselectevent',1,'disabled',2,'findex',3,'formlist',4,'id',5],[],cQG,oPG,gg)
_(aTG,eVG)
tUG.wxXCkey=1
_(oRG,aTG)
return oRG
}
cNG.wxXCkey=4
_2z(z,37,hOG,e,s,gg,cNG,'item','index','name')
var oLG=_v()
_(xKG,oLG)
if(_oz(z,47,e,s,gg)){oLG.wxVkey=1
}
oLG.wxXCkey=1
_(oDG,xKG)
var lEG=_v()
_(oDG,lEG)
if(_oz(z,48,e,s,gg)){lEG.wxVkey=1
}
lEG.wxXCkey=1
_(r,oDG)
var bWG=_n('van-dialog')
_rz(z,bWG,'id',49,e,s,gg)
_(r,bWG)
return r
}
e_[x[29]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var xYG=_n('view')
_rz(z,xYG,'class',0,e,s,gg)
var f1G=_n('view')
_rz(z,f1G,'class',1,e,s,gg)
var h3G=_mz(z,'zform',['bindswitchevent',2,'class',1,'disabled',2,'formlist',3],[],e,s,gg)
_(f1G,h3G)
var c2G=_v()
_(f1G,c2G)
if(_oz(z,6,e,s,gg)){c2G.wxVkey=1
var o4G=_v()
_(c2G,o4G)
var c5G=function(l7G,o6G,a8G,gg){
var e0G=_n('view')
_rz(z,e0G,'class',9,l7G,o6G,gg)
var bAH=_v()
_(e0G,bAH)
if(_oz(z,10,l7G,o6G,gg)){bAH.wxVkey=1
var oBH=_v()
_(bAH,oBH)
if(_oz(z,11,l7G,o6G,gg)){oBH.wxVkey=1
}
oBH.wxXCkey=1
}
var xCH=_mz(z,'zform',['bindinputevent',12,'bindselectevent',1,'bindtimerangeevent',2,'bindtimesingleevent',3,'disabled',4,'findex',5,'formlist',6,'id',7],[],l7G,o6G,gg)
_(e0G,xCH)
bAH.wxXCkey=1
_(a8G,e0G)
return a8G
}
o4G.wxXCkey=4
_2z(z,7,c5G,e,s,gg,o4G,'item','index','name')
}
c2G.wxXCkey=1
c2G.wxXCkey=3
_(xYG,f1G)
var oZG=_v()
_(xYG,oZG)
if(_oz(z,20,e,s,gg)){oZG.wxVkey=1
}
oZG.wxXCkey=1
_(r,xYG)
var oDH=_n('van-dialog')
_rz(z,oDH,'id',21,e,s,gg)
_(r,oDH)
return r
}
e_[x[30]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var hGH=_n('view')
_rz(z,hGH,'class',0,e,s,gg)
var cIH=_mz(z,'zform',['bindchosesingleimgevent',1,'bindinputevent',1,'bindselectevent',2,'bindselectzhihangBeforeevent',3,'bindswitchevent',4,'class',5,'depositBankList',6,'disabled',7,'formlist',8,'id',9],[],e,s,gg)
_(hGH,cIH)
var oHH=_v()
_(hGH,oHH)
if(_oz(z,11,e,s,gg)){oHH.wxVkey=1
var oJH=_mz(z,'zform',['bindinputevent',12,'bindselectevent',1,'class',2,'disabled',3,'formlist',4,'id',5],[],e,s,gg)
_(oHH,oJH)
}
oHH.wxXCkey=1
oHH.wxXCkey=3
_(r,hGH)
var cFH=_v()
_(r,cFH)
if(_oz(z,18,e,s,gg)){cFH.wxVkey=1
}
var lKH=_n('van-dialog')
_rz(z,lKH,'id',19,e,s,gg)
_(r,lKH)
var aLH=_n('van-toast')
_rz(z,aLH,'id',20,e,s,gg)
_(r,aLH)
cFH.wxXCkey=1
return r
}
e_[x[31]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var eNH=_n('view')
_rz(z,eNH,'class',0,e,s,gg)
var bOH=_n('view')
_rz(z,bOH,'style',1,e,s,gg)
var oRH=_v()
_(bOH,oRH)
var fSH=function(hUH,cTH,oVH,gg){
var oXH=_n('view')
_rz(z,oXH,'class',4,hUH,cTH,gg)
var lYH=_v()
_(oXH,lYH)
if(_oz(z,5,hUH,cTH,gg)){lYH.wxVkey=1
}
var aZH=_mz(z,'zform',['bindchosesingleimgevent',6,'bindinputevent',1,'bindselectevent',2,'bindswitchevent',3,'bindswitchinputevent',4,'bindtimerangeevent',5,'class',6,'disabled',7,'edulist',8,'findex',9,'formlist',10,'graduatestype',11,'hidden',12,'id',13],[],hUH,cTH,gg)
_(oXH,aZH)
lYH.wxXCkey=1
_(oVH,oXH)
return oVH
}
oRH.wxXCkey=4
_2z(z,2,fSH,e,s,gg,oRH,'item','index','name')
var oPH=_v()
_(bOH,oPH)
if(_oz(z,20,e,s,gg)){oPH.wxVkey=1
}
var xQH=_v()
_(bOH,xQH)
if(_oz(z,21,e,s,gg)){xQH.wxVkey=1
var t1H=_mz(z,'zform',['bindchosesingleimgevent',22,'bindswitchevent',1,'class',2,'formlist',3],[],e,s,gg)
_(xQH,t1H)
}
oPH.wxXCkey=1
xQH.wxXCkey=1
xQH.wxXCkey=3
_(eNH,bOH)
var e2H=_n('view')
_rz(z,e2H,'style',26,e,s,gg)
var b3H=_v()
_(e2H,b3H)
if(_oz(z,27,e,s,gg)){b3H.wxVkey=1
var x5H=_mz(z,'zform',['bindswitchevent',28,'disabled',1,'formlist',2],[],e,s,gg)
_(b3H,x5H)
}
var o6H=_v()
_(e2H,o6H)
var f7H=function(h9H,c8H,o0H,gg){
var oBI=_n('view')
_rz(z,oBI,'class',33,h9H,c8H,gg)
var lCI=_v()
_(oBI,lCI)
if(_oz(z,34,h9H,c8H,gg)){lCI.wxVkey=1
}
var aDI=_mz(z,'zform',['bindinputevent',35,'bindtimerangeevent',1,'class',2,'data-tkey',3,'disabled',4,'findex',5,'formlist',6,'hidden',7,'id',8],[],h9H,c8H,gg)
_(oBI,aDI)
lCI.wxXCkey=1
_(o0H,oBI)
return o0H
}
o6H.wxXCkey=4
_2z(z,31,f7H,e,s,gg,o6H,'item','index','name')
var o4H=_v()
_(e2H,o4H)
if(_oz(z,44,e,s,gg)){o4H.wxVkey=1
}
var tEI=_mz(z,'zform',['bindchosesingleimgevent',45,'bindselectevent',1,'bindswitchevent',2,'bindtimesingleevent',3,'disabled',4,'findex',5,'formlist',6,'id',7],[],e,s,gg)
_(e2H,tEI)
b3H.wxXCkey=1
b3H.wxXCkey=3
o4H.wxXCkey=1
_(eNH,e2H)
var eFI=_n('view')
_rz(z,eFI,'style',53,e,s,gg)
var oHI=_mz(z,'zform',['bindswitchevent',54,'class',1,'disabled',2,'formlist',3],[],e,s,gg)
_(eFI,oHI)
var xII=_v()
_(eFI,xII)
var oJI=function(cLI,fKI,hMI,gg){
var cOI=_n('view')
_rz(z,cOI,'class',60,cLI,fKI,gg)
var oPI=_v()
_(cOI,oPI)
if(_oz(z,61,cLI,fKI,gg)){oPI.wxVkey=1
}
var lQI=_mz(z,'zform',['bindselectevent',62,'class',1,'disabled',2,'findex',3,'formlist',4,'id',5],[],cLI,fKI,gg)
_(cOI,lQI)
oPI.wxXCkey=1
_(hMI,cOI)
return hMI
}
xII.wxXCkey=4
_2z(z,58,oJI,e,s,gg,xII,'item','index','name')
var bGI=_v()
_(eFI,bGI)
if(_oz(z,68,e,s,gg)){bGI.wxVkey=1
}
bGI.wxXCkey=1
_(eNH,eFI)
var aRI=_mz(z,'zform',['class',69,'disabled',1,'formlist',2],[],e,s,gg)
_(eNH,aRI)
_(r,eNH)
var tSI=_n('van-dialog')
_rz(z,tSI,'id',72,e,s,gg)
_(r,tSI)
var eTI=_n('van-toast')
_rz(z,eTI,'id',73,e,s,gg)
_(r,eTI)
return r
}
e_[x[32]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
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
var cZI=_n('view')
_rz(z,cZI,'class',3,e,s,gg)
var h1I=_mz(z,'tbasic',['bindlistenglobalevent',4,'bindnextevent',1,'bindseterrevent',2,'bindsubmitAllNextTab1',3,'class',4,'disabled',5],[],e,s,gg)
_(cZI,h1I)
var o2I=_mz(z,'tperson',['actTab',10,'bindnextevent',1,'bindseterrevent',2,'bindsubmitAllNextTab2',3,'class',4,'disabled',5,'hidden',6,'tab',7],[],e,s,gg)
_(cZI,o2I)
var c3I=_mz(z,'tpaycard',['bindnextevent',18,'bindseterrevent',1,'bindsubmitAllNextTabOver',2,'class',3,'disabled',4],[],e,s,gg)
_(cZI,c3I)
var o4I=_mz(z,'tfamily',['bindnextevent',23,'bindseterrevent',1,'bindsubmitAll',2,'bindsubmitAllAfterAll',3,'class',4,'disabled',5],[],e,s,gg)
_(cZI,o4I)
_(oVI,cZI)
var fYI=_v()
_(oVI,fYI)
if(_oz(z,29,e,s,gg)){fYI.wxVkey=1
}
xWI.wxXCkey=1
oXI.wxXCkey=1
fYI.wxXCkey=1
_(r,oVI)
return r
}
e_[x[33]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
return r
}
e_[x[34]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var t7I=_mz(z,'view',['bindtap',0,'class',1],[],e,s,gg)
var e8I=_v()
_(t7I,e8I)
if(_oz(z,2,e,s,gg)){e8I.wxVkey=1
}
e8I.wxXCkey=1
_(r,t7I)
return r
}
e_[x[35]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var o0I=_n('view')
_rz(z,o0I,'class',0,e,s,gg)
var fCJ=_n('view')
var hEJ=_mz(z,'view',['bindtap',1,'class',1],[],e,s,gg)
var oFJ=_v()
_(hEJ,oFJ)
if(_oz(z,3,e,s,gg)){oFJ.wxVkey=1
}
oFJ.wxXCkey=1
_(fCJ,hEJ)
var cDJ=_v()
_(fCJ,cDJ)
if(_oz(z,4,e,s,gg)){cDJ.wxVkey=1
}
cDJ.wxXCkey=1
_(o0I,fCJ)
var xAJ=_v()
_(o0I,xAJ)
if(_oz(z,5,e,s,gg)){xAJ.wxVkey=1
var cGJ=_mz(z,'view',['bindtap',6,'class',1,'style',2],[],e,s,gg)
var oHJ=_v()
_(cGJ,oHJ)
if(_oz(z,9,e,s,gg)){oHJ.wxVkey=1
}
oHJ.wxXCkey=1
_(xAJ,cGJ)
}
var oBJ=_v()
_(o0I,oBJ)
if(_oz(z,10,e,s,gg)){oBJ.wxVkey=1
var lIJ=_mz(z,'view',['bindtap',11,'class',1,'style',2],[],e,s,gg)
var aJJ=_v()
_(lIJ,aJJ)
if(_oz(z,14,e,s,gg)){aJJ.wxVkey=1
}
aJJ.wxXCkey=1
_(oBJ,lIJ)
}
xAJ.wxXCkey=1
oBJ.wxXCkey=1
_(r,o0I)
return r
}
e_[x[36]]={f:m35,j:[],i:[],ti:[],ic:[]}
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
	__wxAppCode__['components/image-cropper/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/image-cropper/index.wxml'] = [$gwx, './components/image-cropper/index.wxml'];else __wxAppCode__['components/image-cropper/index.wxml'] = $gwx( './components/image-cropper/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/area/index.json'] = {"component":true,"usingComponents":{"van-picker":"../picker/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/area/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/area/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/area/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/area/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/button/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-loading":"../loading/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/button/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/button/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/button/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/button/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/datetime-picker/index.json'] = {"component":true,"usingComponents":{"van-picker":"../picker/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/datetime-picker/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/datetime-picker/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/datetime-picker/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/datetime-picker/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/dialog/index.json'] = {"component":true,"usingComponents":{"van-popup":"../popup/index","van-button":"../button/index","van-goods-action":"../goods-action/index","van-goods-action-button":"../goods-action-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/dialog/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/dialog/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/dialog/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/dialog/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/goods-action-button/index.json'] = {"component":true,"usingComponents":{"van-button":"../button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/goods-action-button/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/goods-action-button/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/goods-action-button/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/goods-action-button/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/goods-action/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/goods-action/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/goods-action/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/goods-action/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/goods-action/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/icon/index.json'] = {"component":true,"usingComponents":{"van-info":"../info/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/icon/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/icon/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/icon/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/icon/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/info/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/info/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/info/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/info/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/info/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/loading/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/loading/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/loading/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/loading/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/loading/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/overlay/index.json'] = {"component":true,"usingComponents":{"van-transition":"../transition/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/overlay/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/overlay/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/overlay/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/overlay/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/picker-column/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/picker-column/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/picker-column/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/picker-column/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/picker-column/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/picker/index.json'] = {"component":true,"usingComponents":{"picker-column":"../picker-column/index","loading":"../loading/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/picker/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/picker/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/picker/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/picker/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/popup/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-overlay":"../overlay/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/popup/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/popup/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/popup/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/popup/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/radio-group/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/radio-group/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/radio-group/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/radio-group/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/radio-group/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/radio/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/radio/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/radio/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/radio/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/radio/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/switch/index.json'] = {"component":true,"usingComponents":{"van-loading":"../loading/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/switch/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/switch/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/switch/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/switch/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/toast/index.json'] = {"component":true,"usingComponents":{"van-icon":"../icon/index","van-loading":"../loading/index","van-overlay":"../overlay/index","van-transition":"../transition/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/toast/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/toast/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/toast/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/toast/index.wxml' );
		__wxAppCode__['miniprogram_npm/@vant/weapp/transition/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@vant/weapp/transition/index.wxml'] = [$gwx, './miniprogram_npm/@vant/weapp/transition/index.wxml'];else __wxAppCode__['miniprogram_npm/@vant/weapp/transition/index.wxml'] = $gwx( './miniprogram_npm/@vant/weapp/transition/index.wxml' );
		__wxAppCode__['pages/complianceState/complianceState.json'] = {"component":true,"usingComponents":{"zform":"../zimportInfo/components/form/form","tpaycard":"../zimportInfo/tabs/tpaycard/tpaycard"},"navigationBarTitleText":"合规声明"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/complianceState/complianceState.wxml'] = [$gwx, './pages/complianceState/complianceState.wxml'];else __wxAppCode__['pages/complianceState/complianceState.wxml'] = $gwx( './pages/complianceState/complianceState.wxml' );
		__wxAppCode__['pages/dataSign/dataSign.json'] = {"usingComponents":{},"navigationBarTitleText":"资料签署"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/dataSign/dataSign.wxml'] = [$gwx, './pages/dataSign/dataSign.wxml'];else __wxAppCode__['pages/dataSign/dataSign.wxml'] = $gwx( './pages/dataSign/dataSign.wxml' );
		__wxAppCode__['pages/fillPrepare/fillPrepare.json'] = {"usingComponents":{},"navigationBarTitleText":"信息填写准备"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/fillPrepare/fillPrepare.wxml'] = [$gwx, './pages/fillPrepare/fillPrepare.wxml'];else __wxAppCode__['pages/fillPrepare/fillPrepare.wxml'] = $gwx( './pages/fillPrepare/fillPrepare.wxml' );
		__wxAppCode__['pages/professionalCredit/professionalCredit.json'] = {"component":true,"usingComponents":{"zform":"../zimportInfo/components/form/form","tpaycard":"../zimportInfo/tabs/tpaycard/tpaycard"},"navigationBarTitleText":"职业信用申报"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/professionalCredit/professionalCredit.wxml'] = [$gwx, './pages/professionalCredit/professionalCredit.wxml'];else __wxAppCode__['pages/professionalCredit/professionalCredit.wxml'] = $gwx( './pages/professionalCredit/professionalCredit.wxml' );
		__wxAppCode__['pages/signlist/signlist.json'] = {"usingComponents":{},"navigationBarTitleText":"资料签署"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/signlist/signlist.wxml'] = [$gwx, './pages/signlist/signlist.wxml'];else __wxAppCode__['pages/signlist/signlist.wxml'] = $gwx( './pages/signlist/signlist.wxml' );
		__wxAppCode__['pages/supplement/supplement.json'] = {"component":true,"usingComponents":{"zform":"../zimportInfo/components/form/form","tpaycard":"../zimportInfo/tabs/tpaycard/tpaycard"},"navigationBarTitleText":"材料补充"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/supplement/supplement.wxml'] = [$gwx, './pages/supplement/supplement.wxml'];else __wxAppCode__['pages/supplement/supplement.wxml'] = $gwx( './pages/supplement/supplement.wxml' );
		__wxAppCode__['pages/zcutimg/zcutimg.json'] = {"usingComponents":{"image-cropper":"../../components/image-cropper/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/zcutimg/zcutimg.wxml'] = [$gwx, './pages/zcutimg/zcutimg.wxml'];else __wxAppCode__['pages/zcutimg/zcutimg.wxml'] = $gwx( './pages/zcutimg/zcutimg.wxml' );
		__wxAppCode__['pages/zimportInfo/components/form/form.json'] = {"component":true,"usingComponents":{"image-cropper":"../../../../components/image-cropper/index","van-overlay":"../../../../miniprogram_npm/@vant/weapp/overlay/index","van-datetime-picker":"../../../../miniprogram_npm/@vant/weapp/datetime-picker/index","van-popup":"../../../../miniprogram_npm/@vant/weapp/popup/index","van-switch":"../../../../miniprogram_npm/@vant/weapp/switch/index","van-picker":"../../../../miniprogram_npm/@vant/weapp/picker/index","van-area":"../../../../miniprogram_npm/@vant/weapp/area/index","van-radio":"../../../../miniprogram_npm/@vant/weapp/radio/index","van-radio-group":"../../../../miniprogram_npm/@vant/weapp/radio-group/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/zimportInfo/components/form/form.wxml'] = [$gwx, './pages/zimportInfo/components/form/form.wxml'];else __wxAppCode__['pages/zimportInfo/components/form/form.wxml'] = $gwx( './pages/zimportInfo/components/form/form.wxml' );
		__wxAppCode__['pages/zimportInfo/tabs/tbasic/tbasic.json'] = {"component":true,"usingComponents":{"zform":"../../components/form/form","van-dialog":"../../../../miniprogram_npm/@vant/weapp/dialog/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/zimportInfo/tabs/tbasic/tbasic.wxml'] = [$gwx, './pages/zimportInfo/tabs/tbasic/tbasic.wxml'];else __wxAppCode__['pages/zimportInfo/tabs/tbasic/tbasic.wxml'] = $gwx( './pages/zimportInfo/tabs/tbasic/tbasic.wxml' );
		__wxAppCode__['pages/zimportInfo/tabs/tfamily/tfamily.json'] = {"component":true,"usingComponents":{"zform":"../../components/form/form","van-dialog":"../../../../miniprogram_npm/@vant/weapp/dialog/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/zimportInfo/tabs/tfamily/tfamily.wxml'] = [$gwx, './pages/zimportInfo/tabs/tfamily/tfamily.wxml'];else __wxAppCode__['pages/zimportInfo/tabs/tfamily/tfamily.wxml'] = $gwx( './pages/zimportInfo/tabs/tfamily/tfamily.wxml' );
		__wxAppCode__['pages/zimportInfo/tabs/tpaycard/tpaycard.json'] = {"component":true,"usingComponents":{"zform":"../../components/form/form","van-dialog":"../../../../miniprogram_npm/@vant/weapp/dialog/index","van-toast":"../../../../miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/zimportInfo/tabs/tpaycard/tpaycard.wxml'] = [$gwx, './pages/zimportInfo/tabs/tpaycard/tpaycard.wxml'];else __wxAppCode__['pages/zimportInfo/tabs/tpaycard/tpaycard.wxml'] = $gwx( './pages/zimportInfo/tabs/tpaycard/tpaycard.wxml' );
		__wxAppCode__['pages/zimportInfo/tabs/tperson/tperson.json'] = {"component":true,"usingComponents":{"zform":"../../components/form/form","van-dialog":"../../../../miniprogram_npm/@vant/weapp/dialog/index","van-toast":"../../../../miniprogram_npm/@vant/weapp/toast/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/zimportInfo/tabs/tperson/tperson.wxml'] = [$gwx, './pages/zimportInfo/tabs/tperson/tperson.wxml'];else __wxAppCode__['pages/zimportInfo/tabs/tperson/tperson.wxml'] = $gwx( './pages/zimportInfo/tabs/tperson/tperson.wxml' );
		__wxAppCode__['pages/zimportInfo/zimportInfo.json'] = {"usingComponents":{"tbasic":"./tabs/tbasic/tbasic","tperson":"./tabs/tperson/tperson","tpaycard":"./tabs/tpaycard/tpaycard","tfamily":"./tabs/tfamily/tfamily"},"navigationBarTitleText":"信息录入"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/zimportInfo/zimportInfo.wxml'] = [$gwx, './pages/zimportInfo/zimportInfo.wxml'];else __wxAppCode__['pages/zimportInfo/zimportInfo.wxml'] = $gwx( './pages/zimportInfo/zimportInfo.wxml' );
		__wxAppCode__['pages/zlogin/zlogin.json'] = {"usingComponents":{},"navigationBarTitleText":"极氪入职助手"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/zlogin/zlogin.wxml'] = [$gwx, './pages/zlogin/zlogin.wxml'];else __wxAppCode__['pages/zlogin/zlogin.wxml'] = $gwx( './pages/zlogin/zlogin.wxml' );
		__wxAppCode__['pages/zusedesc/zusedesc.json'] = {"usingComponents":{},"navigationBarTitleText":"声明"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/zusedesc/zusedesc.wxml'] = [$gwx, './pages/zusedesc/zusedesc.wxml'];else __wxAppCode__['pages/zusedesc/zusedesc.wxml'] = $gwx( './pages/zusedesc/zusedesc.wxml' );
		__wxAppCode__['pages/zwelcome/zwelcome.json'] = {"usingComponents":{},"navigationBarTitleText":"极氪入职助手"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/zwelcome/zwelcome.wxml'] = [$gwx, './pages/zwelcome/zwelcome.wxml'];else __wxAppCode__['pages/zwelcome/zwelcome.wxml'] = $gwx( './pages/zwelcome/zwelcome.wxml' );
	
	define("@babel/runtime/helpers/Arrayincludes.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(r,e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if(0==n)return!1;for(var i,o,a=0|e,u=Math.max(0<=a?a:n-Math.abs(a),0);u<n;){if((i=t[u])===(o=r)||"number"==typeof i&&"number"==typeof o&&isNaN(i)&&isNaN(o))return!0;u++}return!1}}); 
 			}); 
		define("@babel/runtime/helpers/arrayLikeToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
module.exports=function(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,l=new Array(r);e<r;e++)l[e]=n[e];return l}; 
 			}); 
		define("@babel/runtime/helpers/arrayWithHoles.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
module.exports=function(r){if(Array.isArray(r))return r}; 
 			}); 
		define("@babel/runtime/helpers/arrayWithoutHoles.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var r=require("./arrayLikeToArray");module.exports=function(a){if(Array.isArray(a))return r(a)}; 
 			}); 
		define("@babel/runtime/helpers/asyncToGenerator.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function n(n,t,o,r,e,i,u){try{var c=n[i](u),v=c.value}catch(n){return void o(n)}c.done?t(v):Promise.resolve(v).then(r,e)}module.exports=function(t){return function(){var o=this,r=arguments;return new Promise((function(e,i){var u=t.apply(o,r);function c(t){n(u,e,i,c,v,"next",t)}function v(t){n(u,e,i,c,v,"throw",t)}c(void 0)}))}}; 
 			}); 
		define("@babel/runtime/helpers/classCallCheck.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
module.exports=function(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}; 
 			}); 
		define("@babel/runtime/helpers/createClass.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}module.exports=function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}; 
 			}); 
		define("@babel/runtime/helpers/defineProperty.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
module.exports=function(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}; 
 			}); 
		define("@babel/runtime/helpers/iterableToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
module.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}; 
 			}); 
		define("@babel/runtime/helpers/iterableToArrayLimit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
module.exports=function(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],n=!0,o=!1,l=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(r){o=!0,l=r}finally{try{n||null==u.return||u.return()}finally{if(o)throw l}}return e}}; 
 			}); 
		define("@babel/runtime/helpers/nonIterableRest.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
module.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}; 
 			}); 
		define("@babel/runtime/helpers/nonIterableSpread.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
module.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}; 
 			}); 
		define("@babel/runtime/helpers/objectSpread2.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var e=require("./defineProperty");function r(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}module.exports=function(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}; 
 			}); 
		define("@babel/runtime/helpers/slicedToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var r=require("./arrayWithHoles"),e=require("./iterableToArrayLimit"),t=require("./unsupportedIterableToArray"),i=require("./nonIterableRest");module.exports=function(u,a){return r(u)||e(u,a)||t(u,a)||i()}; 
 			}); 
		define("@babel/runtime/helpers/toConsumableArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var r=require("./arrayWithoutHoles"),e=require("./iterableToArray"),u=require("./unsupportedIterableToArray"),a=require("./nonIterableSpread");module.exports=function(o){return r(o)||e(o)||u(o)||a()}; 
 			}); 
		define("@babel/runtime/helpers/typeof.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function o(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?module.exports=o=function(o){return typeof o}:module.exports=o=function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},o(t)}module.exports=o; 
 			}); 
		define("@babel/runtime/helpers/unsupportedIterableToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var r=require("./arrayLikeToArray");module.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(t,e):void 0}}; 
 			}); 
		define("@babel/runtime/regenerator.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
!function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof module,h=t.regeneratorRuntime;if(h)u&&(module.exports=h);else{(h=t.regeneratorRuntime=u?module.exports:{}).wrap=w;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={},v={};v[i]=function(){return this};var d=Object.getPrototypeOf,g=d&&d(d(P([])));g&&g!==e&&n.call(g,i)&&(v=g);var m=b.prototype=x.prototype=Object.create(v);E.prototype=m.constructor=b,b.constructor=E,b[c]=E.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===E||"GeneratorFunction"===(r.displayName||r.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},h.awrap=function(t){return{__await:t}},_(j.prototype),j.prototype[a]=function(){return this},h.AsyncIterator=j,h.async=function(t,r,e,n){var o=new j(w(t,r,e,n));return h.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(m),m[c]="Generator",m[i]=function(){return this},m.toString=function(){return"[object Generator]"},h.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},h.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function w(t,r,e,n){var o=r&&r.prototype instanceof x?r:x,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=O(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=L(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function L(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function x(){}function E(){}function b(){}function _(t){["next","throw","return"].forEach((function(r){t[r]=function(t){return this._invoke(r,t)}}))}function j(t){var r;this._invoke=function(e,o){function i(){return new Promise((function(r,i){!function r(e,o,i,a){var c=L(t[e],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?Promise.resolve(h.__await).then((function(t){r("next",t,i,a)}),(function(t){r("throw",t,i,a)})):Promise.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,a)}))}a(c.arg)}(e,o,r,i)}))}return r=r?r.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=L(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")()); 
 			}); 
		define("api/apiBaseInfo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./request/index.js"),t={basicBasic:function(t){return(0,e.requestApi)("/ssc/income/applet/getEmployInfo","GET",t)},isgraduates:function(){return(0,e.requestApi)("/ssc/change/api/front/basic/isgraduates","POST")},listcompany:function(t){return(0,e.requestApi)("/ssc/change/api/front/basic/listcompany","POST")},listcountry:function(t){return(0,e.requestApi)("/ssc/change/api/front/basic/listcountry","POST")},listethnic:function(t){return(0,e.requestApi)("/ssc/change/api/front/basic/listethnic","POST")},liststate:function(t){return(0,e.requestApi)("/ssc/change/api/front/basic/liststate","POST")},savebasic:function(t){return(0,e.requestApi)("/ssc/income/applet/saveBaseInfo","POST",t)},areaBasic:function(t){return(0,e.requestApi)("/ssc/income/base/original/region","POST",t)},nativeAreaBasic:function(t){return(0,e.requestApi)("/ssc/income/base/region","POST",t)},deleteFile:function(t){return(0,e.requestApi)("/ssc/income/file/deleteFile?fileId=".concat(t),"GET")},getBgImage:function(t){return(0,e.requestApi)("/ssc/public/api/front/common/getCompanyIntrod?companyCode=".concat(t),"GET")}};exports.default=t; 
 			}); 
		define("api/apiCommon.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./request/index.js"),t={uploadOCRFile:function(t){return(0,e.requestApi)("/ssc/change/api/front/basic/exec/ocr/idcard","POST",t)},fetchCountry:function(t){return(0,e.requestApi)("/ssc/income/base/country","POST",t)},dictData:function(t){return(0,e.requestApi)("/ssc/public/api/front/dict/union","POST",t)},dictionaryData:function(t){return(0,e.requestApi)("/ssc/income/base/gehr/dic","POST",t)},getUrl:function(t){return(0,e.requestApi)("/ssc/change/api/front/oss/get-url","GET",t)},dataSigned:function(t){return(0,e.requestApi)("/ssc/change/api/front/ssc/signatrue/acquire/pattern","POST",t)},uploadFile:function(t){return(0,e.requestApi)("/ssc/public/oss/file/upload","POST",t,!1,!0)},getDownloadUrl:function(t){return(0,e.requestApi)("/ssc/public/oss/file/getDownloadUrl","GET",t,!1,!0)},getList:function(){return(0,e.requestApi)("/ssc/change/api/front/home/list","POST")},dictEnum:function(t){return(0,e.requestApi)("/ssc/income/base/getSysParameter","POST",t)},pageStatus:function(t){return(0,e.requestApi)("/ssc/income/applet/queryHeadPageStatus","GET",t)},complianceStateSave:function(t){return(0,e.requestApi)("/ssc/income/applet/saveCompliance","POST",t)},professionalCreditSave:function(t){return(0,e.requestApi)("/ssc/income/applet/savefessionalCredi","POST",t)},submitAll:function(t){return(0,e.requestApi)("/ssc/income/applet/submitAllInfo","POST",t)},supplement:function(t){return(0,e.requestApi)("/ssc/income/applet/getStuffInfo","GET",t)},supplementSubmit:function(t){return(0,e.requestApi)("/ssc/income/applet/saveStuffInfo","POST",t)},checkNickname:function(t){return(0,e.requestApi)("/ssc/income/base/isGeelyNameUsed","GET",t)},queryCompliance:function(t){return(0,e.requestApi)("/ssc/income/applet/queryCompliance","GET",t)},queryfessionalCredi:function(t){return(0,e.requestApi)("/ssc/income/applet/queryfessionalCredi","GET",t)}};exports.default=t; 
 			}); 
		define("api/apiEducation.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./request/index.js"),t={lanDelete:function(t){return(0,e.requestApi)("/ssc/change/api/front/edu/delete/lan/".concat(t),"POST")},eduDelete:function(t){return(0,e.requestApi)("/ssc/change/api/front/edu/delete/edu/".concat(t),"POST")},eduGet:function(){return(0,e.requestApi)("/ssc/change/api/front/edu/get","POST")},edulevelList:function(){return(0,e.requestApi)("/ssc/change/api/front/edu/list/edulevel","POST")},schoolList:function(t){return(0,e.requestApi)("/ssc/income/base/school","POST",t)},updateBatch:function(t){return(0,e.requestApi)("/ssc/change/api/front/edu/update/batch","POST",t)},saveCurriculumInfo:function(t){return(0,e.requestApi)("/ssc/income/applet/saveCurriculumInfo","POST",t)},eduValidate:function(){return(0,e.requestApi)("/ssc/change/api/front/edu/validate","POST")}};exports.default=t; 
 			}); 
		define("api/apiFamily.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./request/index.js"),t={familyDelete:function(t){return(0,e.requestApi)("/ssc/change/api/front/family/delete/".concat(t),"POST")},familyGet:function(){return(0,e.requestApi)("/ssc/change/api/front/family/get","POST")},familySaveBatch:function(t){return(0,e.requestApi)("/ssc/change/api/front/family/save/batch","POST",t)},nationalityData:function(t){return(0,e.requestApi)("/ssc/public/api/front/common/list/country","POST",t)},saveFamily:function(t){return(0,e.requestApi)("/ssc/income/applet/saveFamilyInfo","POST",t)}};exports.default=t; 
 			}); 
		define("api/apiLogin.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./request/index.js"),t={wxLogin:function(t){return(0,e.requestApi)("/ssc/income/applet/wxLogin","POST",t,!0)},getToken:function(t){return(0,e.requestApi)("/ssc/income/applet/wechatAuthorization","POST",t)}};exports.default=t; 
 			}); 
		define("api/apiPaycard.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./request/index.js"),n={basicBasic:function(n){return(0,e.requestApi)("/ssc/change/api/front/basic/get","POST",n)},bankCreate:function(){return(0,e.requestApi)("/ssc/change/api/front/bank/create","POST")},foreignstate:function(){return(0,e.requestApi)("/ssc/change/api/front/bank/qet/foreignstate","POST")},bankValidate:function(){return(0,e.requestApi)("/ssc/change/api/front/bank/validate","POST")},bankGet:function(){return(0,e.requestApi)("/ssc/change/api/front/bank/get","POST")},getBankBranch:function(n,t){return(0,e.requestApi)("/ssc/income/base/bankBranch?cityId=".concat(n,"&bankName=").concat(t),"GET")},getBankList:function(n){return(0,e.requestApi)("/ssc/income/base/bankList","GET",n)},uploadBankCard:function(n){return(0,e.requestApi)("ssc/change/api/front/bank/exec/ocr/bankcard","POST",n)},bankUpdate:function(n){return(0,e.requestApi)("/ssc/income/applet/saveBankCardInfo","POST",n)},checkPayCard:function(n){return(0,e.requestApi)("/ssc/change/api/front/bank/validate/".concat(n),"POST")}};exports.default=n; 
 			}); 
		define("api/apiRelation.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./request/index.js"),t={relDetele:function(t){return(0,e.requestApi)("/ssc/change/api/front/rel/delete/".concat(t),"POST")},relGet:function(){return(0,e.requestApi)("/ssc/change/api/front/rel/get","POST")},relList:function(){return(0,e.requestApi)("/ssc/public/api/front/dictionarys/dictionary?parentKey=auspicious_list","POST")},batchRel:function(t){return(0,e.requestApi)("/ssc/change/api/front/rel/save/batch","POST",t)}};exports.default=t; 
 			}); 
		define("api/apiSigned.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./request/index.js"),t={checkSigned:function(t){return(0,e.requestApi)("/ssc/change/api/front/ssc/signatrue/acquire/check","POST",t)},dataSigned:function(t){return(0,e.requestApi)("/ssc/income/applet/signInfo","POST",t)}};exports.default=t; 
 			}); 
		define("api/request/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.requestApi=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return new Promise((function(c,s){var r=getApp();wx.request({timeout:6e4,url:e+t,data:o,method:n,header:{"accept-language":"zh-cn, zh","content-type":i?"application/x-www-form-urlencoded":"application/json","x-access-token":a?"":r.globalData.usertoken},success:function(e){c(e.data)},fail:function(e){wx.hideLoading(),wx.showModal({title:"提示",showCancel:!1,content:"服务器错误！",success:function(e){}}),s(e)}})}))};var e=require("../../env/index").baseUrl;console.log(e); 
 			}); 
		define("env/develop.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={env:"develop",baseUrl:"https://gateway-int-test.zeekrlife.com"}; 
 			}); 
		define("env/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=__wxConfig.envVersion,r=require("./develop.js"),s=require("./trial.js"),i=require("./release.js");module.exports="release"===e?i:"trial"===e?s:r; 
 			}); 
		define("env/release.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={env:"release",baseUrl:"https://gateway-bdpub.zeekrlife.com"}; 
 			}); 
		define("env/trial.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={env:"trial",baseUrl:"https://gateway-int-test.zeekrlife.com"}; 
 			}); 
		define("miniprogram_npm/@vant/weapp/common/color.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GRAY_DARK=exports.GRAY=exports.ORANGE=exports.GREEN=exports.WHITE=exports.BLUE=exports.RED=void 0,exports.RED="#ee0a24",exports.BLUE="#1989fa",exports.WHITE="#fff",exports.GREEN="#07c160",exports.ORANGE="#ff976a",exports.GRAY="#323233",exports.GRAY_DARK="#969799"; 
 			}); 
		define("miniprogram_npm/@vant/weapp/common/component.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.VantComponent=void 0;var e=require("../mixins/basic");exports.VantComponent=function(s){var a,t,o,r={};a=s,t=r,o={data:"data",props:"properties",mixins:"behaviors",methods:"methods",beforeCreate:"created",created:"attached",mounted:"ready",destroyed:"detached",classes:"externalClasses"},Object.keys(o).forEach((function(e){a[e]&&(t[o[e]]=a[e])})),r.externalClasses=r.externalClasses||[],r.externalClasses.push("custom-class"),r.behaviors=r.behaviors||[],r.behaviors.push(e.basic);var i=s.relation;i&&(r.relations=i.relations,r.behaviors.push(i.mixin)),s.field&&r.behaviors.push("wx://form-field"),r.options={multipleSlots:!0,addGlobalClass:!0},Component(r)}; 
 			}); 
		define("miniprogram_npm/@vant/weapp/common/relation.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useChildren=exports.useParent=void 0,exports.useParent=function(e,n){var t,i="../".concat(e,"/index");return{relations:(t={},t[i]={type:"ancestor",linked:function(){n&&n.call(this)},linkChanged:function(){n&&n.call(this)},unlinked:function(){n&&n.call(this)}},t),mixin:Behavior({created:function(){var e=this;Object.defineProperty(this,"parent",{get:function(){return e.getRelationNodes(i)[0]}}),Object.defineProperty(this,"index",{get:function(){var n,t;return null===(t=null===(n=e.parent)||void 0===n?void 0:n.children)||void 0===t?void 0:t.indexOf(e)}})}})}},exports.useChildren=function(e,n){var t,i="../".concat(e,"/index");return{relations:(t={},t[i]={type:"descendant",linked:function(e){n&&n.call(this,e)},linkChanged:function(e){n&&n.call(this,e)},unlinked:function(e){n&&n.call(this,e)}},t),mixin:Behavior({created:function(){var e=this;Object.defineProperty(this,"children",{get:function(){return e.getRelationNodes(i)||[]}})}})}}; 
 			}); 
		define("miniprogram_npm/@vant/weapp/common/utils.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../../../@babel/runtime/helpers/Arrayincludes"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.getCurrentPage=exports.toPromise=exports.groupSetData=exports.getAllRect=exports.getRect=exports.pickExclude=exports.requestAnimationFrame=exports.addUnit=exports.getSystemInfoSync=exports.nextTick=exports.range=exports.isDef=void 0;var e,t=require("./validator"),r=require("./version"),n=require("./validator");function o(){return null==e&&(e=wx.getSystemInfoSync()),e}Object.defineProperty(exports,"isDef",{enumerable:!0,get:function(){return n.isDef}}),exports.range=function(e,t,r){return Math.min(Math.max(e,t),r)},exports.nextTick=function(e){(0,r.canIUseNextTick)()?wx.nextTick(e):setTimeout((function(){e()}),1e3/30)},exports.getSystemInfoSync=o,exports.addUnit=function(e){if((0,t.isDef)(e))return e=String(e),(0,t.isNumber)(e)?"".concat(e,"px"):e},exports.requestAnimationFrame=function(e){return"devtools"===o().platform?setTimeout((function(){e()}),1e3/30):wx.createSelectorQuery().selectViewport().boundingClientRect().exec((function(){e()}))},exports.pickExclude=function(e,r){return(0,t.isPlainObject)(e)?Object.keys(e).reduce((function(t,n){return r.includes(n)||(t[n]=e[n]),t}),{}):{}},exports.getRect=function(e,t){return new Promise((function(r){wx.createSelectorQuery().in(e).select(t).boundingClientRect().exec((function(e){return void 0===e&&(e=[]),r(e[0])}))}))},exports.getAllRect=function(e,t){return new Promise((function(r){wx.createSelectorQuery().in(e).selectAll(t).boundingClientRect().exec((function(e){return void 0===e&&(e=[]),r(e[0])}))}))},exports.groupSetData=function(e,t){(0,r.canIUseGroupSetData)()?e.groupSetData(t):t()},exports.toPromise=function(e){return(0,t.isPromise)(e)?e:Promise.resolve(e)},exports.getCurrentPage=function(){var e=getCurrentPages();return e[e.length-1]}; 
 			}); 
		define("miniprogram_npm/@vant/weapp/common/validator.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../../@babel/runtime/helpers/typeof");function t(e){return"function"==typeof e}function r(t){return null!==t&&"object"===e(t)&&!Array.isArray(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isVideoUrl=exports.isImageUrl=exports.isBoolean=exports.isNumber=exports.isObj=exports.isDef=exports.isPromise=exports.isPlainObject=exports.isFunction=void 0,exports.isFunction=t,exports.isPlainObject=r,exports.isPromise=function(e){return r(e)&&t(e.then)&&t(e.catch)},exports.isDef=function(e){return null!=e},exports.isObj=function(t){var r=e(t);return null!==t&&("object"===r||"function"===r)},exports.isNumber=function(e){return/^\d+(\.\d+)?$/.test(e)},exports.isBoolean=function(e){return"boolean"==typeof e};var o=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,s=/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;exports.isImageUrl=function(e){return o.test(e)},exports.isVideoUrl=function(e){return s.test(e)}; 
 			}); 
		define("miniprogram_npm/@vant/weapp/common/version.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.canIUseGetUserProfile=exports.canIUseCanvas2d=exports.canIUseNextTick=exports.canIUseGroupSetData=exports.canIUseAnimate=exports.canIUseFormFieldButton=exports.canIUseModel=void 0;var e=require("./utils");function t(t){return function(e,t){e=e.split("."),t=t.split(".");for(var r=Math.max(e.length,t.length);e.length<r;)e.push("0");for(;t.length<r;)t.push("0");for(var n=0;n<r;n++){var s=parseInt(e[n],10),o=parseInt(t[n],10);if(s>o)return 1;if(s<o)return-1}return 0}((0,e.getSystemInfoSync)().SDKVersion,t)>=0}exports.canIUseModel=function(){return t("2.9.3")},exports.canIUseFormFieldButton=function(){return t("2.10.3")},exports.canIUseAnimate=function(){return t("2.9.0")},exports.canIUseGroupSetData=function(){return t("2.4.0")},exports.canIUseNextTick=function(){return wx.canIUse("nextTick")},exports.canIUseCanvas2d=function(){return t("2.9.0")},exports.canIUseGetUserProfile=function(){return!!wx.getUserProfile}; 
 			}); 
		define("miniprogram_npm/@vant/weapp/dialog/dialog.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(){return(t=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var e=[],n={show:!1,title:"",width:null,theme:"default",message:"",zIndex:100,overlay:!0,selector:"#van-dialog",className:"",asyncClose:!1,beforeClose:null,transition:"scale",customStyle:"",messageAlign:"",overlayStyle:"",confirmButtonText:"确认",cancelButtonText:"取消",showConfirmButton:!0,showCancelButton:!1,closeOnClickOverlay:!1,confirmButtonOpenType:""},o=t({},n);var r=function(n){return n=t(t({},o),n),new Promise((function(o,r){var c,s=(n.context||(c=getCurrentPages())[c.length-1]).selectComponent(n.selector);delete n.context,delete n.selector,s?(s.setData(t({callback:function(t,e){"confirm"===t?o(e):r(e)}},n)),wx.nextTick((function(){s.setData({show:!0})})),e.push(s)):console.warn("未找到 van-dialog 节点，请确认 selector 及 context 是否正确")}))};r.alert=function(t){return r(t)},r.confirm=function(e){return r(t({showCancelButton:!0},e))},r.close=function(){e.forEach((function(t){t.close()})),e=[]},r.stopLoading=function(){e.forEach((function(t){t.stopLoading()}))},r.currentOptions=o,r.defaultOptions=n,r.setDefaultOptions=function(e){o=t(t({},o),e),r.currentOptions=o},r.resetDefaultOptions=function(){o=t({},n),r.currentOptions=o},r.resetDefaultOptions(),exports.default=r; 
 			}); 
		define("miniprogram_npm/@vant/weapp/mixins/basic.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.basic=void 0,exports.basic=Behavior({methods:{$emit:function(e,t,i){this.triggerEvent(e,t,i)},set:function(e){return this.setData(e),new Promise((function(e){return wx.nextTick(e)}))}}}); 
 			}); 
		define("miniprogram_npm/@vant/weapp/mixins/button.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.button=void 0;var e=require("../common/version");exports.button=Behavior({externalClasses:["hover-class"],properties:{id:String,lang:String,businessId:Number,sessionFrom:String,sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,showMessageCard:Boolean,appParameter:String,ariaLabel:String,openType:String,getUserProfileDesc:String},data:{canIUseGetUserProfile:(0,e.canIUseGetUserProfile)()},methods:{onGetUserInfo:function(e){this.triggerEvent("getuserinfo",e.detail)},onContact:function(e){this.triggerEvent("contact",e.detail)},onGetPhoneNumber:function(e){this.triggerEvent("getphonenumber",e.detail)},onError:function(e){this.triggerEvent("error",e.detail)},onLaunchApp:function(e){this.triggerEvent("launchapp",e.detail)},onOpenSetting:function(e){this.triggerEvent("opensetting",e.detail)},onChooseAvatar:function(e){this.triggerEvent("chooseavatar",e.detail)}}}); 
 			}); 
		define("miniprogram_npm/@vant/weapp/mixins/link.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.link=void 0,exports.link=Behavior({properties:{url:String,linkType:{type:String,value:"navigateTo"}},methods:{jumpLink:function(e){void 0===e&&(e="url");var t=this.data[e];t&&("navigateTo"===this.data.linkType&&getCurrentPages().length>9?wx.redirectTo({url:t}):wx[this.data.linkType]({url:t}))}}}); 
 			}); 
		define("miniprogram_npm/@vant/weapp/mixins/transition.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.transition=void 0;var e=require("../common/utils"),t=require("../common/validator"),a=function(e){return{enter:"van-".concat(e,"-enter van-").concat(e,"-enter-active enter-class enter-active-class"),"enter-to":"van-".concat(e,"-enter-to van-").concat(e,"-enter-active enter-to-class enter-active-class"),leave:"van-".concat(e,"-leave van-").concat(e,"-leave-active leave-class leave-active-class"),"leave-to":"van-".concat(e,"-leave-to van-").concat(e,"-leave-active leave-to-class leave-active-class")}};exports.transition=function(n){return Behavior({properties:{customStyle:String,show:{type:Boolean,value:n,observer:"observeShow"},duration:{type:null,value:300,observer:"observeDuration"},name:{type:String,value:"fade"}},data:{type:"",inited:!1,display:!1},ready:function(){!0===this.data.show&&this.observeShow(!0,!1)},methods:{observeShow:function(e,t){e!==t&&(e?this.enter():this.leave())},enter:function(){var n=this,s=this.data,i=s.duration,r=s.name,o=a(r),c=(0,t.isObj)(i)?i.enter:i;this.status="enter",this.$emit("before-enter"),(0,e.requestAnimationFrame)((function(){"enter"===n.status&&(n.$emit("enter"),n.setData({inited:!0,display:!0,classes:o.enter,currentDuration:c}),(0,e.requestAnimationFrame)((function(){"enter"===n.status&&(n.transitionEnded=!1,n.setData({classes:o["enter-to"]}))})))}))},leave:function(){var n=this;if(this.data.display){var s=this.data,i=s.duration,r=s.name,o=a(r),c=(0,t.isObj)(i)?i.leave:i;this.status="leave",this.$emit("before-leave"),(0,e.requestAnimationFrame)((function(){"leave"===n.status&&(n.$emit("leave"),n.setData({classes:o.leave,currentDuration:c}),(0,e.requestAnimationFrame)((function(){"leave"===n.status&&(n.transitionEnded=!1,setTimeout((function(){return n.onTransitionEnd()}),c),n.setData({classes:o["leave-to"]}))})))}))}},onTransitionEnd:function(){if(!this.transitionEnded){this.transitionEnded=!0,this.$emit("after-".concat(this.status));var e=this.data,t=e.show,a=e.display;!t&&a&&this.setData({display:!1})}}}})}; 
 			}); 
		define("miniprogram_npm/@vant/weapp/picker/shared.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.pickerProps=void 0,exports.pickerProps={title:String,loading:Boolean,showToolbar:Boolean,cancelButtonText:{type:String,value:"取消"},confirmButtonText:{type:String,value:"确认"},visibleItemCount:{type:Number,value:6},itemHeight:{type:Number,value:44}}; 
 			}); 
		define("miniprogram_npm/@vant/weapp/toast/toast.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/validator"),n={type:"text",mask:!1,message:"",show:!0,zIndex:1e3,duration:2e3,position:"middle",forbidClick:!1,loadingType:"circular",selector:"#van-toast"},o=[],r=e({},n);function a(e){return(0,t.isObj)(e)?e:{message:e}}function i(t){var n,i=e(e({},r),a(t)),c=(("function"==typeof i.context?i.context():i.context)||(n=getCurrentPages())[n.length-1]).selectComponent(i.selector);if(c)return delete i.context,delete i.selector,c.clear=function(){c.setData({show:!1}),i.onClose&&i.onClose()},o.push(c),c.setData(i),clearTimeout(c.timer),null!=i.duration&&i.duration>0&&(c.timer=setTimeout((function(){c.clear(),o=o.filter((function(e){return e!==c}))}),i.duration)),c;console.warn("未找到 van-toast 节点，请确认 selector 及 context 是否正确")}var c=function(t){return function(n){return i(e({type:t},a(n)))}};i.loading=c("loading"),i.success=c("success"),i.fail=c("fail"),i.clear=function(){o.forEach((function(e){e.clear()})),o=[]},i.setDefaultOptions=function(e){Object.assign(r,e)},i.resetDefaultOptions=function(){r=e({},n)},exports.default=i; 
 			}); 
		define("pages/zimportInfo/utlis/constant.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleEduLevel=exports.getMaxEduLevel=exports.getEduLevel=exports.eduLevelList=void 0,require("../../../@babel/runtime/helpers/Arrayincludes");var e=[{type:"juniorHighSchool",level:1},{type:"highSchool",level:2},{type:"junior",level:3},{type:"undergraduate",level:4},{type:"masterofUnified",level:5},{type:"doctor",level:6}];exports.eduLevelList=e;exports.getMaxEduLevel=function(n){return n.map((function(e){return(e.list.find((function(e){return"学历"===e.name}))||{}).code||""})).filter((function(e){return e})).reduce((function(n,r){var t=e.find((function(e){return-1!==r.indexOf(e.type)})),u=(null==t?void 0:t.level)||0;return u>n?u:n}),0)};exports.handleEduLevel=function(e,n,r){var t="",u="",i=-1,d=-1,o=-1;return e.map((function(e){var l=e.list.find((function(e){return"eduLevel"===e.key})).code,c=n.findIndex((function(e){return e.dicCode===l}));o=n.findIndex((function(e){return"undergraduatePN"===e.dicCode}));var v=n.findIndex((function(e){return e.dicCode===l&&r.includes(l)}));-1!==c&&c>i&&(i=c,t=l),-1!==v&&v>d&&(d=v,u=l)})),{maxLevel:t,maxIndex:i,originLevel:u,originIndex:d,checkIndex:o}};exports.getEduLevel=function(n){var r=(n.find((function(e){return"学历"===e.name}))||{}).code||"",t=e.find((function(e){return-1!==(null==r?void 0:r.indexOf(e.type))}));return(null==t?void 0:t.level)||0}; 
 			}); 
		define("pages/zimportInfo/utlis/weapp-jwt.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function r(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(exports.weAtob(e).replace(/(.)/g,(function(e){var t=e.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(t)}catch(e){return exports.weAtob(t)}}exports.weBtoa=function(t){for(var r,o,n,a,c="",i=0,d=(t=String(t)).length%3;i<t.length;){if((o=t.charCodeAt(i++))>255||(n=t.charCodeAt(i++))>255||(a=t.charCodeAt(i++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");c+=e.charAt((r=o<<16|n<<8|a)>>18&63)+e.charAt(r>>12&63)+e.charAt(r>>6&63)+e.charAt(63&r)}return d?c.slice(0,d-3)+"===".substring(d):c},exports.weAtob=function(r){if(r=String(r).replace(/[\t\n\f\r ]+/g,""),!t.test(r))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");r+="==".slice(2-(3&r.length));for(var o,n,a,c="",i=0;i<r.length;)o=e.indexOf(r.charAt(i++))<<18|e.indexOf(r.charAt(i++))<<12|(n=e.indexOf(r.charAt(i++)))<<6|(a=e.indexOf(r.charAt(i++))),c+=64===n?String.fromCharCode(o>>16&255):64===a?String.fromCharCode(o>>16&255,o>>8&255):String.fromCharCode(o>>16&255,o>>8&255,255&o);return c},exports.default=function(e,t){if("string"!=typeof e)throw"Invalid token specified";var o=!0===(t=t||{}).header?0:1;try{return JSON.parse(r(e.split(".")[o]))}catch(e){throw"Invalid token specified: "+e.message}}; 
 			}); 
		define("utils/RegPattern.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a={validEName:/^([A-Za-z][A-Za-z\s]*[A-Za-z]){2,20}$/,validPhone:/^1[3-9]\d{9}$/,validCName:/^([\u4e00-\u9fa5]){2,8}$/,validCEName:/^([\u4e00-\u9fa5]|[A-Za-z][A-Za-z\s]*[A-Za-z]|[\u4e00-\u9fa5a-zA-Z]){2,20}$/,validUserName:/[A-Za-z0-9_\-\u4e00-\u9fa5]$/,validNamePwd:/^([0-9]|[a-zA-Z]|[0-9A-Za-z]){6,15}$/,validPassword:/^[@A-Za-z0-9!#$%^&*.~,]{6,20}$/,validVcode:/^([0-9]|[a-zA-Z]|[0-9A-Za-z]){5}$/,validImgcode:/^[0-9A-Za-z]{4,6}$/,validMobile:/^(0|86|17951)?1(3\d|4[5-8]|5[0-35-9]|6[567]|7[01345-8]|8\d|9[01235-9])\d{8}$/,validMoney:/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,validWaybillNo:/^[0-9A-Z]*$/,validTINumber:/^((\d{6}[0-9A-Z]{9})|([0-9A-Za-z]{2}\d{6}[0-9A-Za-z]{10,12}))$/,validURL:/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/,validTEL:/0\d{2,3}-\d{7,8}/,validIsEmoji:/[\ud800-\udbff][\udc00-\udfff]/g,validSms:/^\d{6}$/,validEmail:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,validIDCard:/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,validPassport:/^1[45][0-9]{7}|([P|p|S|s]\d{7})|([S|s|G|g]\d{8})|([Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8})|([H|h|M|m]\d{8，10})$/,validHKMacTaiwan:/(^([A-Z]\d{6,10}(\w1)?)$)|(^\d{8}|^[a-zA-Z0-9]{10}|^\d{18}$)/,validHKMacaoPass:/^([A-Z]\d{6,10}(\w1)?)$/,validTaiwanCompCard:/^([0-9]{8}|[0-9]{10})$/,validDate:/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/,validDomain:/^[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})*$/,validPath:/^(\/|(\/[_\-a-zA-Z0-9]+)+)$/,validUrl:/^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/,validIP:/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/,validPort:/^([1-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/,validZeekrEmail:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/};exports.default=a; 
 			}); 
		define("utils/formData/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t,r=require("../../@babel/runtime/helpers/toConsumableArray"),e=(t=require("./mimeMap"))&&t.__esModule?t:{default:t};function n(t){var r=t.lastIndexOf("/");return t.substr(r+1)}function a(t,n,a,o){var i,u,f="",p=!!o;f+=t+"\r\n",f+='Content-Disposition: form-data; name="'+n+'"',p?(f+='; filename="'+o+'"\r\n',f+="Content-Type: "+function(t){var r=t.lastIndexOf("."),n=e.default[t.substr(r)];return n||"application/octet-stream"}(o)+"\r\n\r\n"):(f+="\r\n\r\n",f+=a);for(var c=[],l=0;l<f.length;l++){var s;(s=c).push.apply(s,r(f.utf8CodeAt(l)))}if(p){var d=new Uint8Array(a);c=c.concat(Array.prototype.slice.call(d))}return(i=c).push.apply(i,r("\r".utf8CodeAt())),(u=c).push.apply(u,r("\n".utf8CodeAt())),c}String.prototype.utf8CodeAt=function(t){var r=[],e=0,n=this.charCodeAt(t);return n<128?r[e++]=n:n<2048?(r[e++]=n>>6|192,r[e++]=63&n|128):55296==(64512&n)&&t+1<this.length&&56320==(64512&this.charCodeAt(t+1))?(n=65536+((1023&n)<<10)+(1023&this.charCodeAt(++t)),r[e++]=n>>18|240,r[e++]=n>>12&63|128,r[e++]=n>>6&63|128,r[e++]=63&n|128):(r[e++]=n>>12|224,r[e++]=n>>6&63|128,r[e++]=63&n|128),r};var o=function(){var t=wx.getFileSystemManager(),e={},o=[];this.append=function(t,r){return e[t]=r,!0},this.appendFile=function(r,e){var a=t.readFileSync(e);return!(Object.prototype.toString.call(a).indexOf("ArrayBuffer")<0)&&(o.push({name:r,buffer:a,fileName:n(e)}),!0)},this.getData=function(){return function(t,e){var n="wxmpFormBoundary"+function(){for(var t="",r=0;r<17;r++){var e=parseInt(62*Math.random());t+=e<=9?e:e<=35?String.fromCharCode(e+55):String.fromCharCode(e+61)}return t}(),o="--"+n,i=o+"--",u=[];if(t&&"[object Object]"==Object.prototype.toString.call(t))for(var f in t)u=u.concat(a(o,f,t[f]));if(e&&"[object Array]"==Object.prototype.toString.call(e))for(var p in e){var c=e[p];u=u.concat(a(o,c.name,c.buffer,c.fileName))}for(var l=[],s=0;s<i.length;s++)l.push.apply(l,r(i.utf8CodeAt(s)));return u=u.concat(l),{contentType:"multipart/form-data; boundary="+n,buffer:new Uint8Array(u).buffer}}(e,o)}};exports.default=o; 
 			}); 
		define("utils/formData/mimeMap.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i,p=require("../../@babel/runtime/helpers/defineProperty"),a=(p(i={.001:"application/x-001",.323:"text/h323",.907:"drawing/907",".acp":"audio/x-mei-aac",".aif":"audio/aiff",".aiff":"audio/aiff",".asa":"text/asa",".asp":"text/asp",".au":"audio/basic",".awf":"application/vnd.adobe.workflow",".bmp":"application/x-bmp",".c4t":"application/x-c4t",".cal":"application/x-cals",".cdf":"application/x-netcdf",".cel":"application/x-cel",".cg4":"application/x-g4",".cit":"application/x-cit",".cml":"text/xml",".cmx":"application/x-cmx",".crl":"application/pkix-crl",".csi":"application/x-csi",".cut":"application/x-cut",".dbm":"application/x-dbm",".dcd":"text/xml",".der":"application/x-x509-ca-cert",".dib":"application/x-dib",".doc":"application/msword",".drw":"application/x-drw",".dwf":"Model/vnd.dwf",".dwg":"application/x-dwg",".dxf":"application/x-dxf",".emf":"application/x-emf",".ent":"text/xml",".eps":"application/x-ps",".etd":"application/x-ebx",".fax":"image/fax",".fif":"application/fractals",".frm":"application/x-frm",".gbr":"application/x-gbr",".gif":"image/gif",".gp4":"application/x-gp4",".hmr":"application/x-hmr",".hpl":"application/x-hpl",".hrf":"application/x-hrf",".htc":"text/x-component",".html":"text/html",".htx":"text/html",".ico":"image/x-icon",".iff":"application/x-iff",".igs":"application/x-igs",".img":"application/x-img",".isp":"application/x-internet-signup",".java":"java/*",".jpe":"image/jpeg",".jpeg":"image/jpeg",".jpg":"application/x-jpg",".jsp":"text/html",".lar":"application/x-laplayer-reg",".lavs":"audio/x-liquid-secure",".lmsff":"audio/x-la-lms",".ltr":"application/x-ltr",".m2v":"video/x-mpeg",".m4e":"video/mpeg4",".man":"application/x-troff-man",".mdb":"application/msaccess",".mfp":"application/x-shockwave-flash",".mhtml":"message/rfc822",".mid":"audio/mid",".mil":"application/x-mil",".mnd":"audio/x-musicnet-download",".mocha":"application/x-javascript",".mp1":"audio/mp1",".mp2v":"video/mpeg",".mp4":"video/mpeg4",".mpd":"application/vnd.ms-project",".mpeg":"video/mpg",".mpga":"audio/rn-mpeg",".mps":"video/x-mpeg",".mpv":"video/mpg",".mpw":"application/vnd.ms-project",".mtx":"text/xml",".net":"image/pnetvue",".nws":"message/rfc822",".out":"application/x-out",".p12":"application/x-pkcs12",".p7c":"application/pkcs7-mime",".p7r":"application/x-pkcs7-certreqresp",".pc5":"application/x-pc5",".pcl":"application/x-pcl",".pdf":"application/pdf",".pdx":"application/vnd.adobe.pdx",".pgl":"application/x-pgl",".pko":"application/vnd.ms-pki.pko",".plg":"text/html",".plt":"application/x-plt",".png":"application/x-png",".ppa":"application/vnd.ms-powerpoint",".pps":"application/vnd.ms-powerpoint",".ppt":"application/x-ppt",".prf":"application/pics-rules",".prt":"application/x-prt",".ps":"application/postscript",".pwz":"application/vnd.ms-powerpoint",".ra":"audio/vnd.rn-realaudio",".ras":"application/x-ras",".rdf":"text/xml",".red":"application/x-red",".rjs":"application/vnd.rn-realsystem-rjs",".rlc":"application/x-rlc",".rm":"application/vnd.rn-realmedia",".rmi":"audio/mid",".rmm":"audio/x-pn-realaudio",".rms":"application/vnd.rn-realmedia-secure",".rmx":"application/vnd.rn-realsystem-rmx",".rp":"image/vnd.rn-realpix",".rsml":"application/vnd.rn-rsml",".rtf":"application/msword",".rv":"video/vnd.rn-realvideo",".sat":"application/x-sat",".sdw":"application/x-sdw",".slb":"application/x-slb",".slk":"drawing/x-slk",".smil":"application/smil",".snd":"audio/basic",".sor":"text/plain",".spl":"application/futuresplash",".ssm":"application/streamingmedia",".stl":"application/vnd.ms-pki.stl",".sty":"application/x-sty",".swf":"application/x-shockwave-flash",".tg4":"application/x-tg4",".tif":"image/tiff",".tiff":"image/tiff",".top":"drawing/x-top",".tsd":"text/xml",".uin":"application/x-icq",".vcf":"text/x-vcard",".vdx":"application/vnd.visio",".vpg":"application/x-vpeg005",".vsd":"application/x-vsd",".vst":"application/vnd.visio",".vsw":"application/vnd.visio",".vtx":"application/vnd.visio",".wav":"audio/wav",".wb1":"application/x-wb1",".wb3":"application/x-wb3",".wiz":"application/msword",".wk4":"application/x-wk4",".wks":"application/x-wks",".wma":"audio/x-ms-wma",".wmf":"application/x-wmf",".wmv":"video/x-ms-wmv",".wmz":"application/x-ms-wmz",".wpd":"application/x-wpd",".wpl":"application/vnd.ms-wpl",".wr1":"application/x-wr1",".wrk":"application/x-wrk",".ws2":"application/x-ws",".wsdl":"text/xml",".xdp":"application/vnd.adobe.xdp",".xfd":"application/vnd.adobe.xfd",".xhtml":"text/html",".xls":"application/x-xls",".xml":"text/xml",".xq":"text/xml",".xquery":"text/xml",".xsl":"text/xml",".xwd":"application/x-xwd",".sis":"application/vnd.symbian.install",".x_t":"application/x-x_t",".apk":"application/vnd.android.package-archive",.301:"application/x-301",.906:"application/x-906",".a11":"application/x-a11",".ai":"application/postscript",".aifc":"audio/aiff",".anv":"application/x-anv",".asf":"video/x-ms-asf",".asx":"video/x-ms-asf",".avi":"video/avi",".biz":"text/xml",".bot":"application/x-bot",".c90":"application/x-c90",".cat":"application/vnd.ms-pki.seccat",".cdr":"application/x-cdr",".cer":"application/x-x509-ca-cert",".cgm":"application/x-cgm",".class":"java/*",".cmp":"application/x-cmp",".cot":"application/x-cot",".crt":"application/x-x509-ca-cert",".css":"text/css",".dbf":"application/x-dbf",".dbx":"application/x-dbx",".dcx":"application/x-dcx",".dgn":"application/x-dgn",".dll":"application/x-msdownload",".dot":"application/msword",".dtd":"text/xml"},".dwf","application/x-dwf"),p(i,".dxb","application/x-dxb"),p(i,".edn","application/vnd.adobe.edn"),p(i,".eml","message/rfc822"),p(i,".epi","application/x-epi"),p(i,".eps","application/postscript"),p(i,".exe","application/x-msdownload"),p(i,".fdf","application/vnd.fdf"),p(i,".fo","text/xml"),p(i,".g4","application/x-g4"),p(i,".tif","image/tiff"),p(i,".gl2","application/x-gl2"),p(i,".hgl","application/x-hgl"),p(i,".hpg","application/x-hpgl"),p(i,".hqx","application/mac-binhex40"),p(i,".hta","application/hta"),p(i,".htm","text/html"),p(i,".htt","text/webviewhtml"),p(i,".icb","application/x-icb"),p(i,".ico","application/x-ico"),p(i,".ig4","application/x-g4"),p(i,".iii","application/x-iphone"),p(i,".ins","application/x-internet-signup"),p(i,".IVF","video/x-ivf"),p(i,".jfif","image/jpeg"),p(i,".jpe","application/x-jpe"),p(i,".jpg","image/jpeg"),p(i,".js","application/x-javascript"),p(i,".la1","audio/x-liquid-file"),p(i,".latex","application/x-latex"),p(i,".lbm","application/x-lbm"),p(i,".ls","application/x-javascript"),p(i,".m1v","video/x-mpeg"),p(i,".m3u","audio/mpegurl"),p(i,".mac","application/x-mac"),p(i,".math","text/xml"),p(i,".mdb","application/x-mdb"),p(i,".mht","message/rfc822"),p(i,".mi","application/x-mi"),p(i,".midi","audio/mid"),p(i,".mml","text/xml"),p(i,".mns","audio/x-musicnet-stream"),p(i,".movie","video/x-sgi-movie"),p(i,".mp2","audio/mp2"),p(i,".mp3","audio/mp3"),p(i,".mpa","video/x-mpg"),p(i,".mpe","video/x-mpeg"),p(i,".mpg","video/mpg"),p(i,".mpp","application/vnd.ms-project"),p(i,".mpt","application/vnd.ms-project"),p(i,".mpv2","video/mpeg"),p(i,".mpx","application/vnd.ms-project"),p(i,".mxp","application/x-mmxp"),p(i,".nrf","application/x-nrf"),p(i,".odc","text/x-ms-odc"),p(i,".p10","application/pkcs10"),p(i,".p7b","application/x-pkcs7-certificates"),p(i,".p7m","application/pkcs7-mime"),p(i,".p7s","application/pkcs7-signature"),p(i,".pci","application/x-pci"),p(i,".pcx","application/x-pcx"),p(i,".pdf","application/pdf"),p(i,".pfx","application/x-pkcs12"),p(i,".pic","application/x-pic"),p(i,".pl","application/x-perl"),p(i,".pls","audio/scpls"),p(i,".png","image/png"),p(i,".pot","application/vnd.ms-powerpoint"),p(i,".ppm","application/x-ppm"),p(i,".ppt","application/vnd.ms-powerpoint"),p(i,".pr","application/x-pr"),p(i,".prn","application/x-prn"),p(i,".ps","application/x-ps"),p(i,".ptn","application/x-ptn"),p(i,".r3t","text/vnd.rn-realtext3d"),p(i,".ram","audio/x-pn-realaudio"),p(i,".rat","application/rat-file"),p(i,".rec","application/vnd.rn-recording"),p(i,".rgb","application/x-rgb"),p(i,".rjt","application/vnd.rn-realsystem-rjt"),p(i,".rle","application/x-rle"),p(i,".rmf","application/vnd.adobe.rmf"),p(i,".rmj","application/vnd.rn-realsystem-rmj"),p(i,".rmp","application/vnd.rn-rn_music_package"),p(i,".rmvb","application/vnd.rn-realmedia-vbr"),p(i,".rnx","application/vnd.rn-realplayer"),p(i,".rpm","audio/x-pn-realaudio-plugin"),p(i,".rt","text/vnd.rn-realtext"),p(i,".rtf","application/x-rtf"),p(i,".sam","application/x-sam"),p(i,".sdp","application/sdp"),p(i,".sit","application/x-stuffit"),p(i,".sld","application/x-sld"),p(i,".smi","application/smil"),p(i,".smk","application/x-smk"),p(i,".sol","text/plain"),p(i,".spc","application/x-pkcs7-certificates"),p(i,".spp","text/xml"),p(i,".sst","application/vnd.ms-pki.certstore"),p(i,".stm","text/html"),p(i,".svg","text/xml"),p(i,".tdf","application/x-tdf"),p(i,".tga","application/x-tga"),p(i,".tif","application/x-tif"),p(i,".tld","text/xml"),p(i,".torrent","application/x-bittorrent"),p(i,".txt","text/plain"),p(i,".uls","text/iuls"),p(i,".vda","application/x-vda"),p(i,".vml","text/xml"),p(i,".vsd","application/vnd.visio"),p(i,".vss","application/vnd.visio"),p(i,".vst","application/x-vst"),p(i,".vsx","application/vnd.visio"),p(i,".vxml","text/xml"),p(i,".wax","audio/x-ms-wax"),p(i,".wb2","application/x-wb2"),p(i,".wbmp","image/vnd.wap.wbmp"),p(i,".wk3","application/x-wk3"),p(i,".wkq","application/x-wkq"),p(i,".wm","video/x-ms-wm"),p(i,".wmd","application/x-ms-wmd"),p(i,".wml","text/vnd.wap.wml"),p(i,".wmx","video/x-ms-wmx"),p(i,".wp6","application/x-wp6"),p(i,".wpg","application/x-wpg"),p(i,".wq1","application/x-wq1"),p(i,".wri","application/x-wri"),p(i,".ws","application/x-ws"),p(i,".wsc","text/scriptlet"),p(i,".wvx","video/x-ms-wvx"),p(i,".xdr","text/xml"),p(i,".xfdf","application/vnd.adobe.xfdf"),p(i,".xls","application/vnd.ms-excel"),p(i,".xlw","application/x-xlw"),p(i,".xpl","audio/scpls"),p(i,".xql","text/xml"),p(i,".xsd","text/xml"),p(i,".xslt","text/xml"),p(i,".x_b","application/x-x_b"),p(i,".sisx","application/vnd.symbian.install"),p(i,".ipa","application/vnd.iphone"),p(i,".xap","application/x-silverlight-app"),p(i,".zip","application/x-zip-compressed"),i);exports.default=a; 
 			}); 
		define("utils/pinyin.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={a:"阿啊呵腌嗄吖锕",e:"额阿俄恶鹅遏鄂厄饿峨扼娥鳄哦蛾噩愕讹锷垩婀鹗萼谔莪腭锇颚呃阏屙苊轭",ai:"爱埃艾碍癌哀挨矮隘蔼唉皑哎霭捱暧嫒嗳瑷嗌锿砹",ei:"诶",xi:"系西席息希习吸喜细析戏洗悉锡溪惜稀袭夕洒晰昔牺腊烯熙媳栖膝隙犀蹊硒兮熄曦禧嬉玺奚汐徙羲铣淅嘻歙熹矽蟋郗唏皙隰樨浠忾蜥檄郄翕阋鳃舾屣葸螅咭粞觋欷僖醯鼷裼穸饩舄禊诶菥蓰",yi:"一以已意议义益亿易医艺食依移衣异伊仪宜射遗疑毅谊亦疫役忆抑尾乙译翼蛇溢椅沂泄逸蚁夷邑怡绎彝裔姨熠贻矣屹颐倚诣胰奕翌疙弈轶蛾驿壹猗臆弋铱旖漪迤佚翊诒怿痍懿饴峄揖眙镒仡黟肄咿翳挹缢呓刈咦嶷羿钇殪荑薏蜴镱噫癔苡悒嗌瘗衤佾埸圯舣酏劓",an:"安案按岸暗鞍氨俺胺铵谙庵黯鹌桉埯犴揞厂广",han:"厂汉韩含旱寒汗涵函喊憾罕焊翰邯撼瀚憨捍酣悍鼾邗颔蚶晗菡旰顸犴焓撖",ang:"昂仰盎肮",ao:"奥澳傲熬凹鳌敖遨鏖袄坳翱嗷拗懊岙螯骜獒鏊艹媪廒聱",wa:"瓦挖娃洼袜蛙凹哇佤娲呙腽",yu:"于与育余预域予遇奥语誉玉鱼雨渔裕愈娱欲吁舆宇羽逾豫郁寓吾狱喻御浴愉禹俞邪榆愚渝尉淤虞屿峪粥驭瑜禺毓钰隅芋熨瘀迂煜昱汩於臾盂聿竽萸妪腴圄谕觎揄龉谀俣馀庾妤瘐鬻欤鹬阈嵛雩鹆圉蜮伛纡窬窳饫蓣狳肀舁蝓燠",niu:"牛纽扭钮拗妞忸狃",o:"哦噢喔",ba:"把八巴拔伯吧坝爸霸罢芭跋扒叭靶疤笆耙鲅粑岜灞钯捌菝魃茇",pa:"怕帕爬扒趴琶啪葩耙杷钯筢",pi:"被批副否皮坏辟啤匹披疲罢僻毗坯脾譬劈媲屁琵邳裨痞癖陂丕枇噼霹吡纰砒铍淠郫埤濞睥芘蚍圮鼙罴蜱疋貔仳庀擗甓陴",bi:"比必币笔毕秘避闭佛辟壁弊彼逼碧鼻臂蔽拂泌璧庇痹毙弼匕鄙陛裨贲敝蓖吡篦纰俾铋毖筚荸薜婢哔跸濞秕荜愎睥妣芘箅髀畀滗狴萆嬖襞舭",bai:"百白败摆伯拜柏佰掰呗擘捭稗",bo:"波博播勃拨薄佛伯玻搏柏泊舶剥渤卜驳簿脖膊簸菠礴箔铂亳钵帛擘饽跛钹趵檗啵鹁擗踣",bei:"北被备倍背杯勃贝辈悲碑臂卑悖惫蓓陂钡狈呗焙碚褙庳鞴孛鹎邶鐾",ban:"办版半班般板颁伴搬斑扮拌扳瓣坂阪绊钣瘢舨癍",pan:"判盘番潘攀盼拚畔胖叛拌蹒磐爿蟠泮袢襻丬",bin:"份宾频滨斌彬濒殡缤鬓槟摈膑玢镔豳髌傧",bang:"帮邦彭旁榜棒膀镑绑傍磅蚌谤梆浜蒡",pang:"旁庞乓磅螃彷滂逄耪",beng:"泵崩蚌蹦迸绷甭嘣甏堋",bao:"报保包宝暴胞薄爆炮饱抱堡剥鲍曝葆瀑豹刨褒雹孢苞煲褓趵鸨龅勹",bu:"不部步布补捕堡埔卜埠簿哺怖钚卟瓿逋晡醭钸",pu:"普暴铺浦朴堡葡谱埔扑仆蒲曝瀑溥莆圃璞濮菩蹼匍噗氆攵镨攴镤",mian:"面棉免绵缅勉眠冕娩腼渑湎沔黾宀眄",po:"破繁坡迫颇朴泊婆泼魄粕鄱珀陂叵笸泺皤钋钷",fan:"反范犯繁饭泛翻凡返番贩烦拚帆樊藩矾梵蕃钒幡畈蘩蹯燔",fu:"府服副负富复福夫妇幅付扶父符附腐赴佛浮覆辅傅伏抚赋辐腹弗肤阜袱缚甫氟斧孚敷俯拂俘咐腑孵芙涪釜脯茯馥宓绂讣呋罘麸蝠匐芾蜉跗凫滏蝮驸绋蚨砩桴赙菔呒趺苻拊阝鲋怫稃郛莩幞祓艴黻黼鳆",ben:"本体奔苯笨夯贲锛畚坌",feng:"风丰封峰奉凤锋冯逢缝蜂枫疯讽烽俸沣酆砜葑唪",bian:"变便边编遍辩鞭辨贬匾扁卞汴辫砭苄蝙鳊弁窆笾煸褊碥忭缏",pian:"便片篇偏骗翩扁骈胼蹁谝犏缏",zhen:"镇真针圳振震珍阵诊填侦臻贞枕桢赈祯帧甄斟缜箴疹砧榛鸩轸稹溱蓁胗椹朕畛浈",biao:"表标彪镖裱飚膘飙镳婊骠飑杓髟鳔灬瘭",piao:"票朴漂飘嫖瓢剽缥殍瞟骠嘌莩螵",huo:"和活或货获火伙惑霍祸豁嚯藿锪蠖钬耠镬夥灬劐攉",bie:"别鳖憋瘪蹩",min:"民敏闽闵皿泯岷悯珉抿黾缗玟愍苠鳘",fen:"分份纷奋粉氛芬愤粪坟汾焚酚吩忿棼玢鼢瀵偾鲼",bing:"并病兵冰屏饼炳秉丙摒柄槟禀枋邴冫",geng:"更耕颈庚耿梗埂羹哽赓绠鲠",fang:"方放房防访纺芳仿坊妨肪邡舫彷枋鲂匚钫",xian:"现先县见线限显险献鲜洗宪纤陷闲贤仙衔掀咸嫌掺羡弦腺痫娴舷馅酰铣冼涎暹籼锨苋蚬跹岘藓燹鹇氙莶霰跣猃彡祆筅",fou:"不否缶",ca:"拆擦嚓礤",cha:"查察差茶插叉刹茬楂岔诧碴嚓喳姹杈汊衩搽槎镲苴檫馇锸猹",cai:"才采财材菜彩裁蔡猜踩睬",can:"参残餐灿惨蚕掺璨惭粲孱骖黪",shen:"信深参身神什审申甚沈伸慎渗肾绅莘呻婶娠砷蜃哂椹葚吲糁渖诜谂矧胂",cen:"参岑涔",san:"三参散伞叁糁馓毵",cang:"藏仓苍沧舱臧伧",zang:"藏脏葬赃臧奘驵",chen:"称陈沈沉晨琛臣尘辰衬趁忱郴宸谌碜嗔抻榇伧谶龀肜",cao:"草操曹槽糙嘈漕螬艚屮",ce:"策测册侧厕栅恻",ze:"责则泽择侧咋啧仄箦赜笮舴昃迮帻",zhai:"债择齐宅寨侧摘窄斋祭翟砦瘵哜",dao:"到道导岛倒刀盗稻蹈悼捣叨祷焘氘纛刂帱忉",ceng:"层曾蹭噌",zha:"查扎炸诈闸渣咋乍榨楂札栅眨咤柞喳喋铡蚱吒怍砟揸痄哳齄",chai:"差拆柴钗豺侪虿瘥",ci:"次此差词辞刺瓷磁兹慈茨赐祠伺雌疵鹚糍呲粢",zi:"资自子字齐咨滋仔姿紫兹孜淄籽梓鲻渍姊吱秭恣甾孳訾滓锱辎趑龇赀眦缁呲笫谘嵫髭茈粢觜耔",cuo:"措错磋挫搓撮蹉锉厝嵯痤矬瘥脞鹾",chan:"产单阐崭缠掺禅颤铲蝉搀潺蟾馋忏婵孱觇廛谄谗澶骣羼躔蒇冁",shan:"山单善陕闪衫擅汕扇掺珊禅删膳缮赡鄯栅煽姗跚鳝嬗潸讪舢苫疝掸膻钐剡蟮芟埏彡骟",zhan:"展战占站崭粘湛沾瞻颤詹斩盏辗绽毡栈蘸旃谵搌",xin:"新心信辛欣薪馨鑫芯锌忻莘昕衅歆囟忄镡",lian:"联连练廉炼脸莲恋链帘怜涟敛琏镰濂楝鲢殓潋裢裣臁奁莶蠊蔹",chang:"场长厂常偿昌唱畅倡尝肠敞倘猖娼淌裳徜昶怅嫦菖鲳阊伥苌氅惝鬯",zhang:"长张章障涨掌帐胀彰丈仗漳樟账杖璋嶂仉瘴蟑獐幛鄣嫜",chao:"超朝潮炒钞抄巢吵剿绰嘲晁焯耖怊",zhao:"着照招找召朝赵兆昭肇罩钊沼嘲爪诏濯啁棹笊",zhou:"调州周洲舟骤轴昼宙粥皱肘咒帚胄绉纣妯啁诌繇碡籀酎荮",che:"车彻撤尺扯澈掣坼砗屮",ju:"车局据具举且居剧巨聚渠距句拒俱柜菊拘炬桔惧矩鞠驹锯踞咀瞿枸掬沮莒橘飓疽钜趄踽遽琚龃椐苣裾榘狙倨榉苴讵雎锔窭鞫犋屦醵",cheng:"成程城承称盛抢乘诚呈净惩撑澄秤橙骋逞瞠丞晟铛埕塍蛏柽铖酲裎枨",rong:"容荣融绒溶蓉熔戎榕茸冗嵘肜狨蝾",sheng:"生声升胜盛乘圣剩牲甸省绳笙甥嵊晟渑眚",deng:"等登邓灯澄凳瞪蹬噔磴嶝镫簦戥",zhi:"制之治质职只志至指织支值知识直致执置止植纸拓智殖秩旨址滞氏枝芝脂帜汁肢挚稚酯掷峙炙栉侄芷窒咫吱趾痔蜘郅桎雉祉郦陟痣蛭帙枳踯徵胝栀贽祗豸鸷摭轵卮轾彘觯絷跖埴夂黹忮骘膣踬",zheng:"政正证争整征郑丁症挣蒸睁铮筝拯峥怔诤狰徵钲",tang:"堂唐糖汤塘躺趟倘棠烫淌膛搪镗傥螳溏帑羰樘醣螗耥铴瑭",chi:"持吃池迟赤驰尺斥齿翅匙痴耻炽侈弛叱啻坻眙嗤墀哧茌豉敕笞饬踟蚩柢媸魑篪褫彳鸱螭瘛眵傺",shi:"是时实事市十使世施式势视识师史示石食始士失适试什泽室似诗饰殖释驶氏硕逝湿蚀狮誓拾尸匙仕柿矢峙侍噬嗜栅拭嘘屎恃轼虱耆舐莳铈谥炻豕鲥饣螫酾筮埘弑礻蓍鲺贳",qi:"企其起期气七器汽奇齐启旗棋妻弃揭枝歧欺骑契迄亟漆戚岂稽岐琦栖缉琪泣乞砌祁崎绮祺祈凄淇杞脐麒圻憩芪伎俟畦耆葺沏萋骐鳍綦讫蕲屺颀亓碛柒啐汔綮萁嘁蛴槭欹芑桤丌蜞",chuai:"揣踹啜搋膪",tuo:"托脱拓拖妥驼陀沱鸵驮唾椭坨佗砣跎庹柁橐乇铊沲酡鼍箨柝",duo:"多度夺朵躲铎隋咄堕舵垛惰哆踱跺掇剁柁缍沲裰哚隳",xue:"学血雪削薛穴靴谑噱鳕踅泶彐",chong:"重种充冲涌崇虫宠忡憧舂茺铳艟",chou:"筹抽绸酬愁丑臭仇畴稠瞅踌惆俦瘳雠帱",qiu:"求球秋丘邱仇酋裘龟囚遒鳅虬蚯泅楸湫犰逑巯艽俅蝤赇鼽糗",xiu:"修秀休宿袖绣臭朽锈羞嗅岫溴庥馐咻髹鸺貅",chu:"出处础初助除储畜触楚厨雏矗橱锄滁躇怵绌搐刍蜍黜杵蹰亍樗憷楮",tuan:"团揣湍疃抟彖",zhui:"追坠缀揣椎锥赘惴隹骓缒",chuan:"传川船穿串喘椽舛钏遄氚巛舡",zhuan:"专转传赚砖撰篆馔啭颛",yuan:"元员院原源远愿园援圆缘袁怨渊苑宛冤媛猿垣沅塬垸鸳辕鸢瑗圜爰芫鼋橼螈眢箢掾",cuan:"窜攒篡蹿撺爨汆镩",chuang:"创床窗闯幢疮怆",zhuang:"装状庄壮撞妆幢桩奘僮戆",chui:"吹垂锤炊椎陲槌捶棰",chun:"春纯醇淳唇椿蠢鹑朐莼肫蝽",zhun:"准屯淳谆肫窀",cu:"促趋趣粗簇醋卒蹴猝蹙蔟殂徂",dun:"吨顿盾敦蹲墩囤沌钝炖盹遁趸砘礅",qu:"区去取曲趋渠趣驱屈躯衢娶祛瞿岖龋觑朐蛐癯蛆苣阒诎劬蕖蘧氍黢蠼璩麴鸲磲",xu:"需许续须序徐休蓄畜虚吁绪叙旭邪恤墟栩絮圩婿戌胥嘘浒煦酗诩朐盱蓿溆洫顼勖糈砉醑",chuo:"辍绰戳淖啜龊踔辶",zu:"组族足祖租阻卒俎诅镞菹",ji:"济机其技基记计系期际及集级几给积极己纪即继击既激绩急奇吉季齐疾迹鸡剂辑籍寄挤圾冀亟寂暨脊跻肌稽忌饥祭缉棘矶汲畸姬藉瘠骥羁妓讥稷蓟悸嫉岌叽伎鲫诘楫荠戟箕霁嵇觊麂畿玑笈犄芨唧屐髻戢佶偈笄跽蒺乩咭赍嵴虮掎齑殛鲚剞洎丌墼蕺彐芰哜",cong:"从丛匆聪葱囱琮淙枞骢苁璁",zong:"总从综宗纵踪棕粽鬃偬枞腙",cou:"凑辏腠楱",cui:"衰催崔脆翠萃粹摧璀瘁悴淬啐隹毳榱",wei:"为位委未维卫围违威伟危味微唯谓伪慰尾魏韦胃畏帷喂巍萎蔚纬潍尉渭惟薇苇炜圩娓诿玮崴桅偎逶倭猥囗葳隗痿猬涠嵬韪煨艉隹帏闱洧沩隈鲔軎",cun:"村存寸忖皴",zuo:"作做座左坐昨佐琢撮祚柞唑嘬酢怍笮阼胙",zuan:"钻纂攥缵躜",da:"大达打答搭沓瘩惮嗒哒耷鞑靼褡笪怛妲",dai:"大代带待贷毒戴袋歹呆隶逮岱傣棣怠殆黛甙埭诒绐玳呔迨",tai:"大台太态泰抬胎汰钛苔薹肽跆邰鲐酞骀炱",ta:"他它她拓塔踏塌榻沓漯獭嗒挞蹋趿遢铊鳎溻闼",dan:"但单石担丹胆旦弹蛋淡诞氮郸耽殚惮儋眈疸澹掸膻啖箪聃萏瘅赕",lu:"路六陆录绿露鲁卢炉鹿禄赂芦庐碌麓颅泸卤潞鹭辘虏璐漉噜戮鲈掳橹轳逯渌蓼撸鸬栌氇胪镥簏舻辂垆",tan:"谈探坦摊弹炭坛滩贪叹谭潭碳毯瘫檀痰袒坍覃忐昙郯澹钽锬",ren:"人任认仁忍韧刃纫饪妊荏稔壬仞轫亻衽",jie:"家结解价界接节她届介阶街借杰洁截姐揭捷劫戒皆竭桔诫楷秸睫藉拮芥诘碣嗟颉蚧孑婕疖桀讦疥偈羯袷哜喈卩鲒骱",yan:"研严验演言眼烟沿延盐炎燕岩宴艳颜殷彦掩淹阎衍铅雁咽厌焰堰砚唁焉晏檐蜒奄俨腌妍谚兖筵焱偃闫嫣鄢湮赝胭琰滟阉魇酽郾恹崦芫剡鼹菸餍埏谳讠厣罨",dang:"当党档荡挡宕砀铛裆凼菪谠",tao:"套讨跳陶涛逃桃萄淘掏滔韬叨洮啕绦饕鼗",tiao:"条调挑跳迢眺苕窕笤佻啁粜髫铫祧龆蜩鲦",te:"特忑忒铽慝",de:"的地得德底锝",dei:"得",di:"的地第提低底抵弟迪递帝敌堤蒂缔滴涤翟娣笛棣荻谛狄邸嘀砥坻诋嫡镝碲骶氐柢籴羝睇觌",ti:"体提题弟替梯踢惕剔蹄棣啼屉剃涕锑倜悌逖嚏荑醍绨鹈缇裼",tui:"推退弟腿褪颓蜕忒煺",you:"有由又优游油友右邮尤忧幼犹诱悠幽佑釉柚铀鱿囿酉攸黝莠猷蝣疣呦蚴莸莜铕宥繇卣牖鼬尢蚰侑",dian:"电点店典奠甸碘淀殿垫颠滇癫巅惦掂癜玷佃踮靛钿簟坫阽",tian:"天田添填甜甸恬腆佃舔钿阗忝殄畋栝掭",zhu:"主术住注助属逐宁著筑驻朱珠祝猪诸柱竹铸株瞩嘱贮煮烛苎褚蛛拄铢洙竺蛀渚伫杼侏澍诛茱箸炷躅翥潴邾槠舳橥丶瘃麈疰",nian:"年念酿辗碾廿捻撵拈蔫鲶埝鲇辇黏",diao:"调掉雕吊钓刁貂凋碉鲷叼铫铞",yao:"要么约药邀摇耀腰遥姚窑瑶咬尧钥谣肴夭侥吆疟妖幺杳舀窕窈曜鹞爻繇徭轺铫鳐崾珧",die:"跌叠蝶迭碟爹谍牒耋佚喋堞瓞鲽垤揲蹀",she:"设社摄涉射折舍蛇拾舌奢慑赦赊佘麝歙畲厍猞揲滠",ye:"业也夜叶射野液冶喝页爷耶邪咽椰烨掖拽曳晔谒腋噎揶靥邺铘揲",xie:"些解协写血叶谢械鞋胁斜携懈契卸谐泄蟹邪歇泻屑挟燮榭蝎撷偕亵楔颉缬邂鲑瀣勰榍薤绁渫廨獬躞",zhe:"这者着著浙折哲蔗遮辙辄柘锗褶蜇蛰鹧谪赭摺乇磔螫",ding:"定订顶丁鼎盯钉锭叮仃铤町酊啶碇腚疔玎耵",diu:"丢铥",ting:"听庭停厅廷挺亭艇婷汀铤烃霆町蜓葶梃莛",dong:"动东董冬洞懂冻栋侗咚峒氡恫胴硐垌鸫岽胨",tong:"同通统童痛铜桶桐筒彤侗佟潼捅酮砼瞳恸峒仝嗵僮垌茼",zhong:"中重种众终钟忠仲衷肿踵冢盅蚣忪锺舯螽夂",dou:"都斗读豆抖兜陡逗窦渎蚪痘蔸钭篼",du:"度都独督读毒渡杜堵赌睹肚镀渎笃竺嘟犊妒牍蠹椟黩芏髑",duan:"断段短端锻缎煅椴簖",dui:"对队追敦兑堆碓镦怼憝",rui:"瑞兑锐睿芮蕊蕤蚋枘",yue:"月说约越乐跃兑阅岳粤悦曰钥栎钺樾瀹龠哕刖",tun:"吞屯囤褪豚臀饨暾氽",hui:"会回挥汇惠辉恢徽绘毁慧灰贿卉悔秽溃荟晖彗讳诲珲堕诙蕙晦睢麾烩茴喙桧蛔洄浍虺恚蟪咴隳缋哕",wu:"务物无五武午吴舞伍污乌误亡恶屋晤悟吾雾芜梧勿巫侮坞毋诬呜钨邬捂鹜兀婺妩於戊鹉浯蜈唔骛仵焐芴鋈庑鼯牾怃圬忤痦迕杌寤阢",ya:"亚压雅牙押鸭呀轧涯崖邪芽哑讶鸦娅衙丫蚜碣垭伢氩桠琊揠吖睚痖疋迓岈砑",he:"和合河何核盖贺喝赫荷盒鹤吓呵苛禾菏壑褐涸阂阖劾诃颌嗬貉曷翮纥盍",wo:"我握窝沃卧挝涡斡渥幄蜗喔倭莴龌肟硪",en:"恩摁蒽",n:"嗯唔",er:"而二尔儿耳迩饵洱贰铒珥佴鸸鲕",fa:"发法罚乏伐阀筏砝垡珐",quan:"全权券泉圈拳劝犬铨痊诠荃醛蜷颧绻犭筌鬈悛辁畎",fei:"费非飞肥废菲肺啡沸匪斐蜚妃诽扉翡霏吠绯腓痱芾淝悱狒榧砩鲱篚镄",pei:"配培坏赔佩陪沛裴胚妃霈淠旆帔呸醅辔锫",ping:"平评凭瓶冯屏萍苹乒坪枰娉俜鲆",fo:"佛",hu:"和护许户核湖互乎呼胡戏忽虎沪糊壶葫狐蝴弧瑚浒鹄琥扈唬滹惚祜囫斛笏芴醐猢怙唿戽槲觳煳鹕冱瓠虍岵鹱烀轷",ga:"夹咖嘎尬噶旮伽尕钆尜",ge:"个合各革格歌哥盖隔割阁戈葛鸽搁胳舸疙铬骼蛤咯圪镉颌仡硌嗝鬲膈纥袼搿塥哿虼",ha:"哈蛤铪",xia:"下夏峡厦辖霞夹虾狭吓侠暇遐瞎匣瑕唬呷黠硖罅狎瘕柙",gai:"改该盖概溉钙丐芥赅垓陔戤",hai:"海还害孩亥咳骸骇氦嗨胲醢",gan:"干感赶敢甘肝杆赣乾柑尴竿秆橄矸淦苷擀酐绀泔坩旰疳澉",gang:"港钢刚岗纲冈杠缸扛肛罡戆筻",jiang:"将强江港奖讲降疆蒋姜浆匠酱僵桨绛缰犟豇礓洚茳糨耩",hang:"行航杭巷夯吭桁沆绗颃",gong:"工公共供功红贡攻宫巩龚恭拱躬弓汞蚣珙觥肱廾",hong:"红宏洪轰虹鸿弘哄烘泓訇蕻闳讧荭黉薨",guang:"广光逛潢犷胱咣桄",qiong:"穷琼穹邛茕筇跫蛩銎",gao:"高告搞稿膏糕镐皋羔锆杲郜睾诰藁篙缟槁槔",hao:"好号毫豪耗浩郝皓昊皋蒿壕灏嚎濠蚝貉颢嗥薅嚆",li:"理力利立里李历例离励礼丽黎璃厉厘粒莉梨隶栗荔沥犁漓哩狸藜罹篱鲤砺吏澧俐骊溧砾莅锂笠蠡蛎痢雳俪傈醴栎郦俚枥喱逦娌鹂戾砬唳坜疠蜊黧猁鬲粝蓠呖跞疬缡鲡鳢嫠詈悝苈篥轹",jia:"家加价假佳架甲嘉贾驾嫁夹稼钾挟拮迦伽颊浃枷戛荚痂颉镓笳珈岬胛袈郏葭袷瘕铗跏蛱恝哿",luo:"落罗络洛逻螺锣骆萝裸漯烙摞骡咯箩珞捋荦硌雒椤镙跞瘰泺脶猡倮蠃",ke:"可科克客刻课颗渴壳柯棵呵坷恪苛咳磕珂稞瞌溘轲窠嗑疴蝌岢铪颏髁蚵缂氪骒钶锞",qia:"卡恰洽掐髂袷咭葜",gei:"给",gen:"根跟亘艮哏茛",hen:"很狠恨痕哏",gou:"构购够句沟狗钩拘勾苟垢枸篝佝媾诟岣彀缑笱鞲觏遘",kou:"口扣寇叩抠佝蔻芤眍筘",gu:"股古顾故固鼓骨估谷贾姑孤雇辜菇沽咕呱锢钴箍汩梏痼崮轱鸪牯蛊诂毂鹘菰罟嘏臌觚瞽蛄酤牿鲴",pai:"牌排派拍迫徘湃俳哌蒎",gua:"括挂瓜刮寡卦呱褂剐胍诖鸹栝呙",tou:"投头透偷愉骰亠",guai:"怪拐乖",kuai:"会快块筷脍蒯侩浍郐蒉狯哙",guan:"关管观馆官贯冠惯灌罐莞纶棺斡矜倌鹳鳏盥掼涫",wan:"万完晚湾玩碗顽挽弯蔓丸莞皖宛婉腕蜿惋烷琬畹豌剜纨绾脘菀芄箢",ne:"呢哪呐讷疒",gui:"规贵归轨桂柜圭鬼硅瑰跪龟匮闺诡癸鳜桧皈鲑刽晷傀眭妫炅庋簋刿宄匦",jun:"军均俊君峻菌竣钧骏龟浚隽郡筠皲麇捃",jiong:"窘炯迥炅冂扃",jue:"决绝角觉掘崛诀獗抉爵嚼倔厥蕨攫珏矍蹶谲镢鳜噱桷噘撅橛孓觖劂爝",gun:"滚棍辊衮磙鲧绲丨",hun:"婚混魂浑昏棍珲荤馄诨溷阍",guo:"国过果郭锅裹帼涡椁囗蝈虢聒埚掴猓崞蜾呙馘",hei:"黑嘿嗨",kan:"看刊勘堪坎砍侃嵌槛瞰阚龛戡凵莰",heng:"衡横恒亨哼珩桁蘅",mo:"万没么模末冒莫摩墨默磨摸漠脉膜魔沫陌抹寞蘑摹蓦馍茉嘿谟秣蟆貉嫫镆殁耱嬷麽瘼貊貘",peng:"鹏朋彭膨蓬碰苹棚捧亨烹篷澎抨硼怦砰嘭蟛堋",hou:"后候厚侯猴喉吼逅篌糇骺後鲎瘊堠",hua:"化华划话花画滑哗豁骅桦猾铧砉",huai:"怀坏淮徊槐踝",huan:"还环换欢患缓唤焕幻痪桓寰涣宦垸洹浣豢奂郇圜獾鲩鬟萑逭漶锾缳擐",xun:"讯训迅寻询循旬巡汛勋逊熏徇浚殉驯鲟薰荀浔洵峋埙巽郇醺恂荨窨蕈曛獯",huang:"黄荒煌皇凰慌晃潢谎惶簧璜恍幌湟蝗磺隍徨遑肓篁鳇蟥癀",nai:"能乃奶耐奈鼐萘氖柰佴艿",luan:"乱卵滦峦鸾栾銮挛孪脔娈",qie:"切且契窃茄砌锲怯伽惬妾趄挈郄箧慊",jian:"建间件见坚检健监减简艰践兼鉴键渐柬剑尖肩舰荐箭浅剪俭碱茧奸歼拣捡煎贱溅槛涧堑笺谏饯锏缄睑謇蹇腱菅翦戬毽笕犍硷鞯牮枧湔鲣囝裥踺搛缣鹣蒹谫僭戋趼楗",nan:"南难男楠喃囡赧腩囝蝻",qian:"前千钱签潜迁欠纤牵浅遣谦乾铅歉黔谴嵌倩钳茜虔堑钎骞阡掮钤扦芊犍荨仟芡悭缱佥愆褰凵肷岍搴箝慊椠",qiang:"强抢疆墙枪腔锵呛羌蔷襁羟跄樯戕嫱戗炝镪锖蜣",xiang:"向项相想乡象响香降像享箱羊祥湘详橡巷翔襄厢镶飨饷缃骧芗庠鲞葙蟓",jiao:"教交较校角觉叫脚缴胶轿郊焦骄浇椒礁佼蕉娇矫搅绞酵剿嚼饺窖跤蛟侥狡姣皎茭峤铰醮鲛湫徼鹪僬噍艽挢敫",zhuo:"着著缴桌卓捉琢灼浊酌拙茁涿镯淖啄濯焯倬擢斫棹诼浞禚",qiao:"桥乔侨巧悄敲俏壳雀瞧翘窍峭锹撬荞跷樵憔鞘橇峤诮谯愀鞒硗劁缲",xiao:"小效销消校晓笑肖削孝萧俏潇硝宵啸嚣霄淆哮筱逍姣箫骁枭哓绡蛸崤枵魈",si:"司四思斯食私死似丝饲寺肆撕泗伺嗣祀厮驷嘶锶俟巳蛳咝耜笥纟糸鸶缌澌姒汜厶兕",kai:"开凯慨岂楷恺揩锴铠忾垲剀锎蒈",jin:"进金今近仅紧尽津斤禁锦劲晋谨筋巾浸襟靳瑾烬缙钅矜觐堇馑荩噤廑妗槿赆衿卺",qin:"亲勤侵秦钦琴禽芹沁寝擒覃噙矜嗪揿溱芩衾廑锓吣檎螓",jing:"经京精境竞景警竟井惊径静劲敬净镜睛晶颈荆兢靖泾憬鲸茎腈菁胫阱旌粳靓痉箐儆迳婧肼刭弪獍",ying:"应营影英景迎映硬盈赢颖婴鹰荧莹樱瑛蝇萦莺颍膺缨瀛楹罂荥萤鹦滢蓥郢茔嘤璎嬴瘿媵撄潆",jiu:"就究九酒久救旧纠舅灸疚揪咎韭玖臼柩赳鸠鹫厩啾阄桕僦鬏",zui:"最罪嘴醉咀蕞觜",juan:"卷捐圈眷娟倦绢隽镌涓鹃鄄蠲狷锩桊",suan:"算酸蒜狻",yun:"员运云允孕蕴韵酝耘晕匀芸陨纭郧筠恽韫郓氲殒愠昀菀狁",qun:"群裙逡麇",ka:"卡喀咖咔咯佧胩",kang:"康抗扛慷炕亢糠伉钪闶",keng:"坑铿吭",kao:"考靠烤拷铐栲尻犒",ken:"肯垦恳啃龈裉",yin:"因引银印音饮阴隐姻殷淫尹荫吟瘾寅茵圻垠鄞湮蚓氤胤龈窨喑铟洇狺夤廴吲霪茚堙",kong:"空控孔恐倥崆箜",ku:"苦库哭酷裤枯窟挎骷堀绔刳喾",kua:"跨夸垮挎胯侉",kui:"亏奎愧魁馈溃匮葵窥盔逵睽馗聩喟夔篑岿喹揆隗傀暌跬蒉愦悝蝰",kuan:"款宽髋",kuang:"况矿框狂旷眶匡筐邝圹哐贶夼诳诓纩",que:"确却缺雀鹊阙瘸榷炔阕悫",kun:"困昆坤捆琨锟鲲醌髡悃阃",kuo:"扩括阔廓蛞",la:"拉落垃腊啦辣蜡喇剌旯砬邋瘌",lai:"来莱赖睐徕籁涞赉濑癞崃疠铼",lan:"兰览蓝篮栏岚烂滥缆揽澜拦懒榄斓婪阑褴罱啉谰镧漤",lin:"林临邻赁琳磷淋麟霖鳞凛拎遴蔺吝粼嶙躏廪檩啉辚膦瞵懔",lang:"浪朗郎廊狼琅榔螂阆锒莨啷蒗稂",liang:"量两粮良辆亮梁凉谅粱晾靓踉莨椋魉墚",lao:"老劳落络牢捞涝烙姥佬崂唠酪潦痨醪铑铹栳耢",mu:"目模木亩幕母牧莫穆姆墓慕牟牡募睦缪沐暮拇姥钼苜仫毪坶",le:"了乐勒肋叻鳓嘞仂泐",lei:"类累雷勒泪蕾垒磊擂镭肋羸耒儡嫘缧酹嘞诔檑",sui:"随岁虽碎尿隧遂髓穗绥隋邃睢祟濉燧谇眭荽",lie:"列烈劣裂猎冽咧趔洌鬣埒捩躐",leng:"冷愣棱楞塄",ling:"领令另零灵龄陵岭凌玲铃菱棱伶羚苓聆翎泠瓴囹绫呤棂蛉酃鲮柃",lia:"俩",liao:"了料疗辽廖聊寥缪僚燎缭撂撩嘹潦镣寮蓼獠钌尥鹩",liu:"流刘六留柳瘤硫溜碌浏榴琉馏遛鎏骝绺镏旒熘鹨锍",lun:"论轮伦仑纶沦抡囵",lv:"率律旅绿虑履吕铝屡氯缕滤侣驴榈闾偻褛捋膂稆",lou:"楼露漏陋娄搂篓喽镂偻瘘髅耧蝼嵝蒌",mao:"贸毛矛冒貌茂茅帽猫髦锚懋袤牦卯铆耄峁瑁蟊茆蝥旄泖昴瞀",long:"龙隆弄垄笼拢聋陇胧珑窿茏咙砻垅泷栊癃",nong:"农浓弄脓侬哝",shuang:"双爽霜孀泷",shu:"术书数属树输束述署朱熟殊蔬舒疏鼠淑叔暑枢墅俞曙抒竖蜀薯梳戍恕孰沭赎庶漱塾倏澍纾姝菽黍腧秫毹殳疋摅",shuai:"率衰帅摔甩蟀",lve:"略掠锊",ma:"么马吗摩麻码妈玛嘛骂抹蚂唛蟆犸杩",me:"么麽",mai:"买卖麦迈脉埋霾荬劢",man:"满慢曼漫埋蔓瞒蛮鳗馒幔谩螨熳缦镘颟墁鞔",mi:"米密秘迷弥蜜谜觅靡泌眯麋猕谧咪糜宓汨醚嘧弭脒冖幂祢縻蘼芈糸敉",men:"们门闷瞒汶扪焖懑鞔钔",mang:"忙盲茫芒氓莽蟒邙硭漭",meng:"蒙盟梦猛孟萌氓朦锰檬勐懵蟒蜢虻黾蠓艨甍艋瞢礞",miao:"苗秒妙描庙瞄缪渺淼藐缈邈鹋杪眇喵",mou:"某谋牟缪眸哞鍪蛑侔厶",miu:"缪谬",mei:"美没每煤梅媒枚妹眉魅霉昧媚玫酶镁湄寐莓袂楣糜嵋镅浼猸鹛",wen:"文问闻稳温纹吻蚊雯紊瘟汶韫刎璺玟阌",mie:"灭蔑篾乜咩蠛",ming:"明名命鸣铭冥茗溟酩瞑螟暝",na:"内南那纳拿哪娜钠呐捺衲镎肭",nei:"内那哪馁",nuo:"难诺挪娜糯懦傩喏搦锘",ruo:"若弱偌箬",nang:"囊馕囔曩攮",nao:"脑闹恼挠瑙淖孬垴铙桡呶硇猱蛲",ni:"你尼呢泥疑拟逆倪妮腻匿霓溺旎昵坭铌鲵伲怩睨猊",nen:"嫩恁",neng:"能",nin:"您恁",niao:"鸟尿溺袅脲茑嬲",nie:"摄聂捏涅镍孽捻蘖啮蹑嗫臬镊颞乜陧",niang:"娘酿",ning:"宁凝拧泞柠咛狞佞聍甯",nu:"努怒奴弩驽帑孥胬",nv:"女钕衄恧",ru:"入如女乳儒辱汝茹褥孺濡蠕嚅缛溽铷洳薷襦颥蓐",nuan:"暖",nve:"虐疟",re:"热若惹喏",ou:"区欧偶殴呕禺藕讴鸥瓯沤耦怄",pao:"跑炮泡抛刨袍咆疱庖狍匏脬",pou:"剖掊裒",pen:"喷盆湓",pie:"瞥撇苤氕丿",pin:"品贫聘频拼拚颦姘嫔榀牝",se:"色塞瑟涩啬穑铯槭",qing:"情青清请亲轻庆倾顷卿晴氢擎氰罄磬蜻箐鲭綮苘黥圊檠謦",zan:"赞暂攒堑昝簪糌瓒錾趱拶",shao:"少绍召烧稍邵哨韶捎勺梢鞘芍苕劭艄筲杓潲",sao:"扫骚嫂梢缫搔瘙臊埽缲鳋",sha:"沙厦杀纱砂啥莎刹杉傻煞鲨霎嗄痧裟挲铩唼歃",xuan:"县选宣券旋悬轩喧玄绚渲璇炫萱癣漩眩暄煊铉楦泫谖痃碹揎镟儇",ran:"然染燃冉苒髯蚺",rang:"让壤攘嚷瓤穰禳",rao:"绕扰饶娆桡荛",reng:"仍扔",ri:"日",rou:"肉柔揉糅鞣蹂",ruan:"软阮朊",run:"润闰",sa:"萨洒撒飒卅仨脎",suo:"所些索缩锁莎梭琐嗦唆唢娑蓑羧挲桫嗍睃",sai:"思赛塞腮噻鳃",shui:"说水税谁睡氵",sang:"桑丧嗓搡颡磉",sen:"森",seng:"僧",shai:"筛晒",shang:"上商尚伤赏汤裳墒晌垧觞殇熵绱",xing:"行省星腥猩惺兴刑型形邢饧醒幸杏性姓陉荇荥擤悻硎",shou:"收手受首售授守寿瘦兽狩绶艏扌",shuo:"说数硕烁朔铄妁槊蒴搠",su:"速素苏诉缩塑肃俗宿粟溯酥夙愫簌稣僳谡涑蔌嗉觫",shua:"刷耍唰",shuan:"栓拴涮闩",shun:"顺瞬舜吮",song:"送松宋讼颂耸诵嵩淞怂悚崧凇忪竦菘",sou:"艘搜擞嗽嗖叟馊薮飕嗾溲锼螋瞍",sun:"损孙笋荪榫隼狲飧",teng:"腾疼藤滕誊",tie:"铁贴帖餮萜",tu:"土突图途徒涂吐屠兔秃凸荼钍菟堍酴",wai:"外歪崴",wang:"王望往网忘亡旺汪枉妄惘罔辋魍",weng:"翁嗡瓮蓊蕹",zhua:"抓挝爪",yang:"样养央阳洋扬杨羊详氧仰秧痒漾疡泱殃恙鸯徉佯怏炀烊鞅蛘",xiong:"雄兄熊胸凶匈汹芎",yo:"哟唷",yong:"用永拥勇涌泳庸俑踊佣咏雍甬镛臃邕蛹恿慵壅痈鳙墉饔喁",za:"杂扎咱砸咋匝咂拶",zai:"在再灾载栽仔宰哉崽甾",zao:"造早遭枣噪灶燥糟凿躁藻皂澡蚤唣",zei:"贼",zen:"怎谮",zeng:"增曾综赠憎锃甑罾缯",zhei:"这",zou:"走邹奏揍诹驺陬楱鄹鲰",zhuai:"转拽",zun:"尊遵鳟樽撙",dia:"嗲",nou:"耨"},a={},i={parseDict:function(){for(var i in n)for(var u=n[i],e=0,g=u.length;e<g;e++)a[u[e]]||(a[u[e]]=i)},getPinyin:function(n){if(!n||/^ +$/g.test(n))return"";for(var i=[],u="",e=0,g=n.length;e<g;e++){var o=n.charAt(e),h=a[o];h?(u&&(i.push(u),u=""),i.push(h)):!o||/^ +$/g.test(o)?u&&(i.push(u),u=""):u+=o}return u&&(i.push(u),u=""),i.join("")}};i.parseDict();var u=i;exports.default=u; 
 			}); 
		define("utils/zfunlist.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.uploadIdentityImg=exports.uploadFileToServe=exports.shareApplication=exports.previewFile=exports.initRenderItemForm=exports.getPreviewUrl=exports.getInfoFromId=exports.filterBiaoqing=exports.emoji=exports.compressImg=void 0;var e,t=(e=require("./formData/index"))&&e.__esModule?e:{default:e},i=require("../pages/zimportInfo/utlis/weapp-jwt");var o=require("../env/index").baseUrl;exports.uploadIdentityImg=function(e){var i=e.wx,a=e.filePath,n=e.UserToken,r=e.nationalId,u=e.personId,s=e.fun,l=new t.default,d="".concat(o,"/ssc/income/base/identityOcr");l.appendFile("file",a),l.append("nationalId",r),l.append("personId",u);var p=l.getData();i.request({url:d,header:{"content-type":p.contentType,"x-access-token":n},method:"post",data:p.buffer,success:function(e){e&&e.data&&e.data.head&&0==e.data.head.code?s(e.data.data):i.showToast({icon:"none",title:e.data.head.message})},fail:function(e){i.hideLoading({success:function(e){}}),i.showToast({title:"图片过大上传失败，稍后重试",icon:"none"})}})};var a=function(e){if(e&&-1!==e.indexOf("url=")){var t=e.split("url=");return(0,i.weAtob)(t[1])}return e};exports.getPreviewUrl=a;exports.getInfoFromId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(e+"").trim();if(18===t.length){var i=/^([0-9]{6})([0-9]{8})([0-9]{2})([0-9]{1})([0-9xX]{1})$/,o=/^([0-9]{4})([0-9]{2})([0-9]{2})$/,a=t.match(i),n={location:void 0,birthday:void 0,sex:void 0,sexDesr:void 0};return n.birthday=a[2].replace(o,"$1-$2-$3"),a[4]%2?(n.sex="M",n.sexDesr="男"):(n.sex="F",n.sexDesr="女"),n}};exports.uploadFileToServe=function(e){var i=e.files,a=e.wx,n=e.UserToken,r=e.fun,u="".concat(o,"/ssc/income/file/uploadFile"),s=new t.default,l=i.tempFilePaths?i.tempFilePaths[0]:i.tempFiles[0].path,d=(l.split("."),l.size);s.appendFile("file",l,"文件名");var p=s.getData();if(d>4194304)a.showToast({icon:"none",title:"文件大小不能超过4MB,格式必须为pdf！"});else{var c={};a.request({url:u,header:{"content-type":p.contentType,"x-access-token":n},method:"post",data:p.buffer,success:function(e){var t=e.data.data;0==e.data.head.code?(c={sortOrder:"",fileUrl:t.url,fileType:(t.fileName||"").split("."),fileName:t.fileName,fileSize:t.fileSize,name:t.fileName,id:t.uid,uid:t.uid,filePath:l},a.hideLoading({}),r(c)):(a.hideLoading({}),a.showToast({title:e.data.head.message,icon:"none"}))},fail:function(e){a.hideLoading({}),a.showToast({title:"上传失败，请重试",icon:"none"})}})}};exports.previewFile=function(e){var t=e.e,i=e.wx,o=t.currentTarget.dataset,n=o.default;if(o.item.fileName&&o.item.fileName.indexOf(".pdf")>-1)i.showLoading({title:"加载中..."}),i.downloadFile({url:a(o.item.fileUrl),success:function(e){var t=e.tempFilePath;i.openDocument({filePath:t,fileType:"pdf",success:function(e){i.showToast({title:"打开成功",icon:"none"}),i.hideLoading()},fail:function(e){i.showToast({title:"打开失败",icon:"none"}),i.hideLoading()}})}});else if(n){var r=a(o.item);i.previewImage({current:r,urls:[r]})}else{var u=a(o.item.fileUrl);i.previewImage({current:u,urls:[u]})}};exports.initRenderItemForm=function(e){var t=e.target,i=e.wx,o=e.dataOrigin;return t.forEach((function(e){if("body_check_report"===e.type);else if("select"===e.type&&e.mj_type){var t=i.getStorageSync("dictObj")[e.mj_type]||[],a={};t.forEach((function(e){a[e.key]=e.description.cn})),e.value=a[o[e.code_key]]}else e.value=o[e.key]})),t};exports.compressImg=function(){};exports.filterBiaoqing=function(e){return e.replace(/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi,"")};exports.emoji=function(e){return/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi.test(e)};exports.shareApplication=function(){return{title:"极氪入职助手",path:"/pages/zlogin/zlogin",imageUrl:"https://ucds-resource.zeekrlife.com/image/zeekr-newp/zlogin-bg.png"}}; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=require("@babel/runtime/helpers/typeof");(e=require("./api/apiLogin.js"))&&e.__esModule;App({globalData:{openId:"",wxCode:"",session_key:"",usertoken:"",tenantId:"",name:"",phone:"",personId:"",imgUrl:"https://zeekrweb-file-prod-oss.oss-cn-hangzhou.aliyuncs.com/ssc-induction-mini-program/",bottomSafeBar:0,screenHeight:0},onLaunch:function(){var e=this;wx.getSystemInfo({success:function(t){var n=t.screenHeight,o=t.safeArea;e.globalData.bottomSafeBar=-o.bottom+n,e.globalData.screenHeight=n}})},setWatcher:function(e){var t=this,n=e.data,o=e.watch;e.watch&&Object.keys(o).forEach((function(a){for(var r=a.split("."),s=n,i=0;i<r.length-1;i++)s=s[r[i]];var c=r[r.length-1],u=o[a].handler||o[a],l=o[a].deep;t.observe(s,c,u,l,e)}))},observe:function(e,n,o,a,r){var s=this,i=e[n];a&&null!=i&&"object"===t(i)&&Object.keys(i).forEach((function(e){s.observe(i,e,o,a,r)}));var c=this;Object.defineProperty(e,n,{configurable:!0,enumerable:!0,set:function(t){o.call(r,t,i),i=t,a&&c.observe(e,n,o,a,r)},get:function(){return i}})}}); 
 			}); 	require("app.js");
 		__wxRoute = 'components/image-cropper/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/image-cropper/index.js';	define("components/image-cropper/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/defineProperty");Component({options:{pureDataPattern:/^_/},properties:{src:{type:String,observer:function(t,a){t&&(this.setData({imagePath:t}),this.data._isInit?this._initImage():this._init())}},aspectRatio:{type:Number,observer:function(t,a){t&&(this.setData({_aspectRatio:t}),this.data._isInit&&this._initImage())}},isProportion:{type:Boolean,observer:function(t,a){this.setData({isProportion:t})}},quality:{type:Number,observer:function(t,a){this.setData({_quality:t})}}},data:{imagePath:null,isProportion:!1,viewImagesLocation:{width:0,height:0,top:0,left:0},crop:{top:0,right:0,bottom:0,left:0},canvas:{width:null,height:null},_isInit:!1,_aspectRatio:1,_systemInfo:null,_originalImageInfo:null,_viewThanOriginal:null,_startX:null,_startY:null,_startCrop:null,_quality:1},lifetimes:{attached:function(){this.data._ctx||this.setData({_ctx:wx.createCanvasContext("image-cropper-canvas-id",this)})},detached:function(){}},pageLifetimes:{show:function(){},hide:function(){},resize:function(){}},methods:{_init:function(){var t=this;wx.getSystemInfo({success:function(a){var i=a;i.rpxPxRatio=750/i.windowWidth,i.windowWidthRpx=i.windowWidth*i.rpxPxRatio,i.windowHeightRpx=i.windowHeight*i.rpxPxRatio-100,t.setData({_systemInfo:i}),t._initImage()}})},_initImage:function(){var t=this,a=t.data._systemInfo;t.setData({crop:{top:0,right:0,bottom:0,left:0}}),wx.showLoading({title:"加载中"}),wx.getImageInfo({src:t.data.imagePath,success:function(i){var o=i;t.setData({_originalImageInfo:o});var e,h=t.data._ctx,s=o.width/o.height;e=o.width>=o.height?{width:o.width>4e3?4e3:o.width,height:o.width>4e3?4e3/s:o.height}:{width:o.height>4e3?4e3*s:o.width,height:o.height>4e3?4e3:o.height},t.setData({canvas:e}),h.drawImage(o.path,0,0,o.width,o.height,0,0,e.width,e.height),h.draw(!1);var r=a.windowWidthRpx-80,n=r/o.width,d=o.height*n;d<a.windowHeightRpx?(t._setProportionCode(r,d),t._cropLocationCenter(r,d),t.setData({viewImagesLocation:{width:r,height:d,top:(a.windowHeightRpx-d)/2,left:40},crop:t.data.crop})):(n=(d=a.windowHeightRpx)/o.height,r=o.width*n,t._setProportionCode(r,d),t._cropLocationCenter(r,d),t.setData({viewImagesLocation:{width:r,height:d,top:0,left:(a.windowWidthRpx-r)/2},crop:t.data.crop})),t.setData({_viewThanOriginal:n,_isInit:!0}),wx.hideLoading()},fail:function(){wx.hideLoading()}})},_setProportionCode:function(a,i){var o,e,h,s,r=this.data._aspectRatio;r>0&&r<1?(e=a>=i?i-50:a-50,this.setData((t(h={},"crop.right",e*r),t(h,"crop.bottom",e),h))):(o=a>=i?i-50:a-50,this.setData((t(s={},"crop.right",o),t(s,"crop.bottom",o/r),s)))},_cropLocationCenter:function(t,a){var i=this.data.crop,o=i.right-i.left,e=i.bottom-i.top;return i.top=i.top+a/2-e/2,i.bottom=i.bottom+a/2-e/2,i.left=i.left+t/2-o/2,i.right=i.right+t/2-o/2,i},_cropViewTouchstart:function(t){var a=this.data._systemInfo;this.setData({_startX:t.touches[0].pageX*a.rpxPxRatio,_startY:t.touches[0].pageY*a.rpxPxRatio,_startCrop:this.data.crop})},_cropViewMove:function(t){var a=this.data._systemInfo,i=t.touches[0].pageX*a.rpxPxRatio,o=t.touches[0].pageY*a.rpxPxRatio,e={top:this.data._startCrop.top-(this.data._startY-o),right:this.data._startCrop.right-(this.data._startX-i),bottom:this.data._startCrop.bottom-(this.data._startY-o),left:this.data._startCrop.left-(this.data._startX-i)};e.top<0&&(e.top=0,e.bottom=this.data._startCrop.bottom-this.data._startCrop.top),e.right>this.data.viewImagesLocation.width&&(e.right=this.data.viewImagesLocation.width,e.left=this.data.viewImagesLocation.width-this.data._startCrop.right+this.data._startCrop.left),e.bottom>this.data.viewImagesLocation.height&&(e.bottom=this.data.viewImagesLocation.height,e.top=this.data.viewImagesLocation.height-this.data._startCrop.bottom+this.data._startCrop.top),e.left<0&&(e.left=0,e.right=this.data._startCrop.right-this.data._startCrop.left),this.setData({crop:e})},_leftUpTouchmove:function(a){var i,o,e=this.data._systemInfo,h=this.data._aspectRatio,s=a.touches[0].pageX*e.rpxPxRatio,r=a.touches[0].pageY*e.rpxPxRatio,n=s-this.data.viewImagesLocation.left;if(this.data.isProportion){if((o=this.data.crop.bottom-(this.data.crop.right-n)/h)<0)return;if(n<0)return;var d,p;h>=1?(d=80*h,p=80):(d=80,p=80/h),this.data.crop.bottom-o<p&&(o=this.data.crop.bottom-p),this.data.crop.right-n<d&&(n=this.data.crop.right-d)}else(o=r-this.data.viewImagesLocation.top)<0&&(o=0),n<0&&(n=0),this.data.crop.bottom-o<80&&(o=this.data.crop.bottom-80),this.data.crop.right-n<80&&(n=this.data.crop.right-80);this.setData((t(i={},"crop.top",o),t(i,"crop.left",n),i))},_upTouchmove:function(a){var i=this.data._systemInfo,o=(this.data._aspectRatio,a.touches[0].pageY*i.rpxPxRatio-this.data.viewImagesLocation.top);o<0||this.data.crop.bottom-o<80||this.setData(t({},"crop.top",o))},_rightUpTouchmove:function(a){var i,o,e=this.data._systemInfo,h=this.data._aspectRatio,s=a.touches[0].pageX*e.rpxPxRatio,r=a.touches[0].pageY*e.rpxPxRatio,n=s-this.data.viewImagesLocation.left;if(this.data.isProportion){if((o=this.data.crop.bottom-(n-this.data.crop.left)/h)<0)return;if(s>(e.windowWidthRpx+this.data.viewImagesLocation.width)/2)return;var d,p;h>=1?(d=80*h,p=80):(d=80,p=80/h),this.data.crop.bottom-o<p&&(o=this.data.crop.bottom-p),n-this.data.crop.left<d&&(n=this.data.crop.left+d)}else(o=r-this.data.viewImagesLocation.top)<0&&(o=0),s>(e.windowWidthRpx+this.data.viewImagesLocation.width)/2&&(n=this.data.viewImagesLocation.width),this.data.crop.bottom-o<80&&(o=this.data.crop.bottom-80),n-this.data.crop.left<80&&(n=this.data.crop.left+80);this.setData((t(i={},"crop.top",o),t(i,"crop.right",n),i))},_rightTouchmove:function(a){var i=this.data._systemInfo,o=(this.data._aspectRatio,a.touches[0].pageX*i.rpxPxRatio),e=o-this.data.viewImagesLocation.left;o>(i.windowWidthRpx+this.data.viewImagesLocation.width)/2||e-this.data.crop.left<80||this.setData(t({},"crop.right",e))},_rightDownTouchmove:function(a){var i,o,e=this.data._systemInfo,h=this.data._aspectRatio,s=a.touches[0].pageX*e.rpxPxRatio,r=a.touches[0].pageY*e.rpxPxRatio,n=s-this.data.viewImagesLocation.left;if(this.data.isProportion){if(o=(n-this.data.crop.left)/h+this.data.crop.top,s>(e.windowWidthRpx+this.data.viewImagesLocation.width)/2)return;if(o>this.data.viewImagesLocation.height)return;var d,p;h>=1?(d=80*h,p=80):(d=80,p=80/h),o-this.data.crop.top<p&&(o=this.data.crop.top+p),n-this.data.crop.left<d&&(n=this.data.crop.left+d)}else o=r-this.data.viewImagesLocation.top,s>(e.windowWidthRpx+this.data.viewImagesLocation.width)/2&&(n=this.data.viewImagesLocation.width),o>this.data.viewImagesLocation.height&&(o=this.data.viewImagesLocation.height),o-this.data.crop.top<80&&(o=this.data.crop.top+80),n-this.data.crop.left<80&&(n=this.data.crop.left+80);this.setData((t(i={},"crop.right",n),t(i,"crop.bottom",o),i))},_downTouchmove:function(a){var i=this.data._systemInfo,o=(this.data._aspectRatio,a.touches[0].pageY*i.rpxPxRatio-this.data.viewImagesLocation.top);o>this.data.viewImagesLocation.height||o-this.data.crop.top<80||this.setData(t({},"crop.bottom",o))},_leftDownTouchmove:function(a){var i,o,e=this.data._systemInfo,h=this.data._aspectRatio,s=a.touches[0].pageX*e.rpxPxRatio,r=a.touches[0].pageY*e.rpxPxRatio,n=s-this.data.viewImagesLocation.left;if(this.data.isProportion){if(o=(this.data.crop.right-n)/h+this.data.crop.top,s<this.data.viewImagesLocation.left)return;if(o>this.data.viewImagesLocation.height)return;var d,p;h>=1?(d=80*h,p=80):(d=80,p=80/h),o-this.data.crop.top<p&&(o=this.data.crop.top+p),this.data.crop.right-n<d&&(n=this.data.crop.right-d)}else o=r-this.data.viewImagesLocation.top,s<this.data.viewImagesLocation.left&&(n=0),o>this.data.viewImagesLocation.height&&(o=this.data.viewImagesLocation.height),o-this.data.crop.top<80&&(o=this.data.crop.top+80),this.data.crop.right-n<80&&(n=this.data.crop.right-80);this.setData((t(i={},"crop.left",n),t(i,"crop.bottom",o),i))},_leftTouchmove:function(a){var i=this.data._systemInfo,o=(this.data._aspectRatio,a.touches[0].pageX*i.rpxPxRatio-this.data.viewImagesLocation.left);o<0||this.data.crop.right-o<80||this.setData(t({},"crop.left",o))},getResults:function(t){var a=JSON.parse(JSON.stringify(this.data.crop));a.top=Math.round(a.top/this.data._viewThanOriginal),a.right=Math.round(a.right/this.data._viewThanOriginal),a.bottom=Math.round(a.bottom/this.data._viewThanOriginal),a.left=Math.round(a.left/this.data._viewThanOriginal),a.width=a.right-a.left,a.height=a.bottom-a.top,delete a.bottom,delete a.right,t({crop:a,originalImageInfo:this.data._originalImageInfo})},_getImagePath:function(t){wx.showLoading({title:"请稍后",mask:!0});var a=this,i=JSON.parse(JSON.stringify(a.data.crop));i.top=Math.round(i.top/a.data._viewThanOriginal),i.right=Math.round(i.right/a.data._viewThanOriginal),i.bottom=Math.round(i.bottom/a.data._viewThanOriginal),i.left=Math.round(i.left/a.data._viewThanOriginal),i.width=i.right-i.left,i.height=i.bottom-i.top;var o=a.data._originalImageInfo.path,e=i.top,h=i.left,s=i.width,r=i.height;wx.getImageInfo({src:o,success:function(i){a.setData({canvas:{width:i.width,height:i.height}}),a.createSelectorQuery().select("#image-cropper-canvas").fields({node:!0,size:!0}).exec((function(i){var n=i[0].node,d=n.getContext("2d"),p=i[0].width,c=i[0].height;n.width=p,n.height=c;var g=n.createImage();g.src=o,g.onload=function(i){d.drawImage(g,0,0,p,c,0,0,p,c);var o=300/p,w=h*o,f=e*o,m=s*o,l=r*o;wx.canvasToTempFilePath({x:w,y:f,width:m,height:l,destWidth:s,destHeight:r,canvas:n,fileType:"jpg",quality:a.data._quality,success:function(a){wx.hideLoading(),t({path:a.tempFilePath})},fail:function(t){wx.hideLoading(),console.log(t)}})},g.onerror=function(t){wx.hideLoading(),console.error("err:",t)}}))},fail:function(t){wx.hideLoading(),console.log(t)}})},getImagePath:function(t){wx.showLoading({title:"请稍后",mask:!0});var a=this,i=JSON.parse(JSON.stringify(a.data.crop));i.right=Math.round(i.right/a.data._viewThanOriginal),i.bottom=Math.round(i.bottom/a.data._viewThanOriginal),i.top=Math.round(i.top/a.data._viewThanOriginal),i.left=Math.round(i.left/a.data._viewThanOriginal),i.width=i.right-i.left,i.height=i.bottom-i.top;var o=this.data.canvas.width/this.data._originalImageInfo.width,e=i.left*o,h=i.top*o,s=i.width*o,r=i.height*o;setTimeout((function(){wx.canvasToTempFilePath({x:e,y:h,width:s,height:r,destWidth:s,destHeight:r,canvasId:"image-cropper-canvas-id",fileType:"jpg",quality:a.data._quality,success:function(a){wx.hideLoading(),t({path:a.tempFilePath})},fail:function(t){console.log(t),wx.hideLoading()}},a)}),100)}}}); 
 			}); 	require("components/image-cropper/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/area/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/area/index.js';	define("miniprogram_npm/@vant/weapp/area/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/component"),n=require("../picker/shared"),i=require("../common/utils");(0,t.VantComponent)({classes:["active-class","toolbar-class","column-class"],props:e(e({},n.pickerProps),{showToolbar:{type:Boolean,value:!0},value:{type:String,observer:function(e){this.code=e,this.setValues()}},areaList:{type:Object,value:{},observer:"setValues"},columnsNum:{type:null,value:3},columnsPlaceholder:{type:Array,observer:function(e){this.setData({typeToColumnsPlaceholder:{province:e[0]||"",city:e[1]||"",county:e[2]||""}})}}}),data:{columns:[{values:[]},{values:[]},{values:[]}],typeToColumnsPlaceholder:{}},mounted:function(){var e=this;(0,i.requestAnimationFrame)((function(){e.setValues()}))},methods:{getPicker:function(){return null==this.picker&&(this.picker=this.selectComponent(".van-area__picker")),this.picker},onCancel:function(e){this.emit("cancel",e.detail)},onConfirm:function(e){var t=e.detail.index,n=e.detail.value;n=this.parseValues(n),this.emit("confirm",{value:n,index:t})},emit:function(e,t){t.values=t.value,delete t.value,this.$emit(e,t)},parseValues:function(t){var n=this.data.columnsPlaceholder;return t.map((function(t,i){return!t||t.code&&t.name!==n[i]?t:e(e({},t),{code:"",name:""})}))},onChange:function(e){var t,n=this,i=e.detail,s=i.index,r=i.picker,c=i.value;this.code=c[s].code,null===(t=this.setValues())||void 0===t||t.then((function(){n.$emit("change",{picker:r,values:n.parseValues(r.getValues()),index:s})}))},getConfig:function(e){var t=this.data.areaList;return t&&t["".concat(e,"_list")]||{}},getList:function(e,t){if("province"!==e&&!t)return[];var n=this.data.typeToColumnsPlaceholder,i=this.getConfig(e),s=Object.keys(i).map((function(e){return{code:e,name:i[e]}}));if(null!=t&&("9"===t[0]&&"city"===e&&(t="9"),s=s.filter((function(e){return 0===e.code.indexOf(t)}))),n[e]&&s.length){var r="province"===e?"":"city"===e?"000000".slice(2,4):"000000".slice(4,6);s.unshift({code:"".concat(t).concat(r),name:n[e]})}return s},getIndex:function(e,t){var n="province"===e?2:"city"===e?4:6,i=this.getList(e,t.slice(0,n-2));"9"===t[0]&&"province"===e&&(n=1),t=t.slice(0,n);for(var s=0;s<i.length;s++)if(i[s].code.slice(0,n)===t)return s;return 0},setValues:function(){var e=this.getPicker();if(e){var t=this.code||this.getDefaultCode(),n=this.getList("province"),i=this.getList("city",t.slice(0,2)),s=[],r=[],c=this.data.columnsNum;return c>=1&&(s.push(e.setColumnValues(0,n,!1)),r.push(this.getIndex("province",t))),c>=2&&(s.push(e.setColumnValues(1,i,!1)),r.push(this.getIndex("city",t)),i.length&&"00"===t.slice(2,4)&&(t=i[0].code)),3===c&&(s.push(e.setColumnValues(2,this.getList("county",t.slice(0,4)),!1)),r.push(this.getIndex("county",t))),Promise.all(s).catch((function(){})).then((function(){return e.setIndexes(r)})).catch((function(){}))}},getDefaultCode:function(){if(this.data.columnsPlaceholder.length)return"000000";var e=Object.keys(this.getConfig("county"));if(e[0])return e[0];var t=Object.keys(this.getConfig("city"));return t[0]?t[0]:""},getValues:function(){var e=this.getPicker();return e?this.parseValues(e.getValues().filter((function(e){return!!e}))):[]},getDetail:function(){var e=this.getValues(),t={code:"",country:"",province:"",city:"",county:""};if(!e.length)return t;var n=e.map((function(e){return e.name}));return t.code=e[e.length-1].code,"9"===t.code[0]?(t.country=n[1]||"",t.province=n[2]||""):(t.province=n[0]||"",t.city=n[1]||"",t.county=n[2]||""),t},reset:function(e){return this.code=e||"",this.setValues()}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/area/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/button/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/button/index.js';	define("miniprogram_npm/@vant/weapp/button/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/component"),o=require("../mixins/button"),n=require("../common/version"),t=[o.button];(0,n.canIUseFormFieldButton)()&&t.push("wx://form-field-button"),(0,e.VantComponent)({mixins:t,classes:["hover-class","loading-class"],data:{baseStyle:""},props:{formType:String,icon:String,classPrefix:{type:String,value:"van-icon"},plain:Boolean,block:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,loadingText:String,customStyle:String,loadingType:{type:String,value:"circular"},type:{type:String,value:"default"},dataset:null,size:{type:String,value:"normal"},loadingSize:{type:String,value:"20px"},color:String},methods:{onClick:function(e){var o=this;this.$emit("click",e);var n=this.data,t=n.canIUseGetUserProfile,i=n.openType,a=n.getUserProfileDesc,l=n.lang;"getUserInfo"===i&&t&&wx.getUserProfile({desc:a||"  ",lang:l||"en",complete:function(e){o.$emit("getuserinfo",e)}})}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/button/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/datetime-picker/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/datetime-picker/index.js';	define("miniprogram_npm/@vant/weapp/datetime-picker/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},t=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,u=t.length;r<u;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("../common/component"),a=require("../common/validator"),r=require("../picker/shared"),u=(new Date).getFullYear();function i(e,t,n){return Math.min(Math.max(e,t),n)}function o(e){return"00".concat(e).slice(-2)}function s(e){for(void 0===e&&(e="1");isNaN(parseInt(e,10));)e=e.slice(1);return parseInt(e,10)}function l(e,t){return 32-new Date(e,t-1,32).getDate()}var c=function(e,t){return t};(0,n.VantComponent)({classes:["active-class","toolbar-class","column-class"],props:e(e({},r.pickerProps),{value:{type:null,observer:"updateValue"},filter:null,type:{type:String,value:"datetime",observer:"updateValue"},showToolbar:{type:Boolean,value:!0},formatter:{type:null,value:c},minDate:{type:Number,value:new Date(u-10,0,1).getTime(),observer:"updateValue"},maxDate:{type:Number,value:new Date(u+10,11,31).getTime(),observer:"updateValue"},minHour:{type:Number,value:0,observer:"updateValue"},maxHour:{type:Number,value:23,observer:"updateValue"},minMinute:{type:Number,value:0,observer:"updateValue"},maxMinute:{type:Number,value:59,observer:"updateValue"}}),data:{innerValue:Date.now(),columns:[]},methods:{updateValue:function(){var e=this,t=this.data,n=this.correctValue(t.value),a=n===t.innerValue;this.updateColumnValue(n).then((function(){a||e.$emit("input",n)}))},getPicker:function(){if(null==this.picker){this.picker=this.selectComponent(".van-datetime-picker");var e=this.picker,n=e.setColumnValues;e.setColumnValues=function(){for(var a=[],r=0;r<arguments.length;r++)a[r]=arguments[r];return n.apply(e,t(t([],a,!0),[!1],!1))}}return this.picker},updateColumns:function(){var e=this.data.formatter,t=void 0===e?c:e,n=this.getOriginColumns().map((function(e){return{values:e.values.map((function(n){return t(e.type,n)}))}}));return this.set({columns:n})},getOriginColumns:function(){var e=this.data.filter;return this.getRanges().map((function(t){var n=t.type,a=t.range,r=function(e,t){for(var n=-1,a=Array(e<0?0:e);++n<e;)a[n]=t(n);return a}(a[1]-a[0]+1,(function(e){var t=a[0]+e;return"year"===n?"".concat(t):o(t)}));return e&&(r=e(n,r)),{type:n,values:r}}))},getRanges:function(){var e=this.data;if("time"===e.type)return[{type:"hour",range:[e.minHour,e.maxHour]},{type:"minute",range:[e.minMinute,e.maxMinute]}];var t=this.getBoundary("max",e.innerValue),n=t.maxYear,a=t.maxDate,r=t.maxMonth,u=t.maxHour,i=t.maxMinute,o=this.getBoundary("min",e.innerValue),s=o.minYear,l=o.minDate,c=[{type:"year",range:[s,n]},{type:"month",range:[o.minMonth,r]},{type:"day",range:[l,a]},{type:"hour",range:[o.minHour,u]},{type:"minute",range:[o.minMinute,i]}];return"date"===e.type&&c.splice(3,2),"year-month"===e.type&&c.splice(2,3),c},correctValue:function(e){var t,n=this.data,r="time"!==n.type;if(r&&(t=e,!(0,a.isDef)(t)||isNaN(new Date(t).getTime())))e=n.minDate;else if(!r&&!e){var u=n.minHour;e="".concat(o(u),":00")}if(!r){var s=e.split(":"),l=s[0],c=s[1];return l=o(i(l,n.minHour,n.maxHour)),c=o(i(c,n.minMinute,n.maxMinute)),"".concat(l,":").concat(c)}return e=Math.max(e,n.minDate),e=Math.min(e,n.maxDate)},getBoundary:function(e,t){var n,a=new Date(t),r=new Date(this.data["".concat(e,"Date")]),u=r.getFullYear(),i=1,o=1,s=0,c=0;return"max"===e&&(i=12,o=l(a.getFullYear(),a.getMonth()+1),s=23,c=59),a.getFullYear()===u&&(i=r.getMonth()+1,a.getMonth()+1===i&&(o=r.getDate(),a.getDate()===o&&(s=r.getHours(),a.getHours()===s&&(c=r.getMinutes())))),(n={})["".concat(e,"Year")]=u,n["".concat(e,"Month")]=i,n["".concat(e,"Date")]=o,n["".concat(e,"Hour")]=s,n["".concat(e,"Minute")]=c,n},onCancel:function(){this.$emit("cancel")},onConfirm:function(){this.$emit("confirm",this.data.innerValue)},onChange:function(){var e,t=this,n=this.data,a=this.getPicker(),r=this.getOriginColumns();if("time"===n.type){var u=a.getIndexes();e="".concat(+r[0].values[u[0]],":").concat(+r[1].values[u[1]])}else{var i=(u=a.getIndexes()).map((function(e,t){return r[t].values[e]})),o=s(i[0]),c=s(i[1]),m=l(o,c),p=s(i[2]);"year-month"===n.type&&(p=1),p=p>m?m:p;var h=0,v=0;"datetime"===n.type&&(h=s(i[3]),v=s(i[4])),e=new Date(o,c-1,p,h,v)}e=this.correctValue(e),this.updateColumnValue(e).then((function(){t.$emit("input",e),t.$emit("change",a)}))},updateColumnValue:function(e){var t=this,n=[],a=this.data.type,r=this.data.formatter||c,u=this.getPicker();if("time"===a){var i=e.split(":");n=[r("hour",i[0]),r("minute",i[1])]}else{var s=new Date(e);n=[r("year","".concat(s.getFullYear())),r("month",o(s.getMonth()+1))],"date"===a&&n.push(r("day",o(s.getDate()))),"datetime"===a&&n.push(r("day",o(s.getDate())),r("hour",o(s.getHours())),r("minute",o(s.getMinutes())))}return this.set({innerValue:e}).then((function(){return t.updateColumns()})).then((function(){return u.setValues(n)}))}},created:function(){var e=this,t=this.correctValue(this.data.value);this.updateColumnValue(t).then((function(){e.$emit("input",t)}))}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/datetime-picker/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/dialog/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/dialog/index.js';	define("miniprogram_npm/@vant/weapp/dialog/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/component"),e=require("../mixins/button"),o=require("../common/color"),n=require("../common/utils");(0,t.VantComponent)({mixins:[e.button],props:{show:{type:Boolean,observer:function(t){!t&&this.stopLoading()}},title:String,message:String,theme:{type:String,value:"default"},useSlot:Boolean,className:String,customStyle:String,asyncClose:Boolean,messageAlign:String,beforeClose:null,overlayStyle:String,useTitleSlot:Boolean,showCancelButton:Boolean,closeOnClickOverlay:Boolean,confirmButtonOpenType:String,width:null,zIndex:{type:Number,value:2e3},confirmButtonText:{type:String,value:"确认"},cancelButtonText:{type:String,value:"取消"},confirmButtonColor:{type:String,value:o.RED},cancelButtonColor:{type:String,value:o.GRAY},showConfirmButton:{type:Boolean,value:!0},overlay:{type:Boolean,value:!0},transition:{type:String,value:"scale"}},data:{loading:{confirm:!1,cancel:!1},callback:function(){}},methods:{onConfirm:function(){this.handleAction("confirm")},onCancel:function(){this.handleAction("cancel")},onClickOverlay:function(){this.close("overlay")},close:function(t){var e=this;this.setData({show:!1}),wx.nextTick((function(){e.$emit("close",t);var o=e.data.callback;o&&o(t,e)}))},stopLoading:function(){this.setData({loading:{confirm:!1,cancel:!1}})},handleAction:function(t){var e,o=this;this.$emit(t,{dialog:this});var i=this.data,a=i.asyncClose,l=i.beforeClose;a||l?(this.setData(((e={})["loading.".concat(t)]=!0,e)),l&&(0,n.toPromise)(l(t)).then((function(e){e?o.close(t):o.stopLoading()}))):this.close(t)}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/dialog/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/goods-action-button/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/goods-action-button/index.js';	define("miniprogram_npm/@vant/weapp/goods-action-button/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/component"),i=require("../common/relation"),t=require("../mixins/button"),n=require("../mixins/link");(0,e.VantComponent)({mixins:[n.link,t.button],relation:(0,i.useParent)("goods-action"),props:{text:String,color:String,loading:Boolean,disabled:Boolean,plain:Boolean,type:{type:String,value:"danger"}},methods:{onClick:function(e){this.$emit("click",e.detail),this.jumpLink()},updateStyle:function(){if(null!=this.parent){var e=this.index,i=this.parent.children,t=void 0===i?[]:i;this.setData({isFirst:0===e,isLast:e===t.length-1})}}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/goods-action-button/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/goods-action/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/goods-action/index.js';	define("miniprogram_npm/@vant/weapp/goods-action/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/component"),o=require("../common/relation");(0,e.VantComponent)({relation:(0,o.useChildren)("goods-action-button",(function(){this.children.forEach((function(e){e.updateStyle()}))})),props:{safeAreaInsetBottom:{type:Boolean,value:!0}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/goods-action/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/icon/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/icon/index.js';	define("miniprogram_npm/@vant/weapp/icon/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),(0,require("../common/component").VantComponent)({props:{dot:Boolean,info:null,size:null,color:String,customStyle:String,classPrefix:{type:String,value:"van-icon"},name:String},methods:{onClick:function(){this.$emit("click")}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/icon/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/info/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/info/index.js';	define("miniprogram_npm/@vant/weapp/info/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),(0,require("../common/component").VantComponent)({props:{dot:Boolean,info:null,customStyle:String}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/info/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/loading/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/loading/index.js';	define("miniprogram_npm/@vant/weapp/loading/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),(0,require("../common/component").VantComponent)({props:{color:String,vertical:Boolean,type:{type:String,value:"circular"},size:String,textSize:String},data:{array12:Array.from({length:12})}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/loading/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/overlay/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/overlay/index.js';	define("miniprogram_npm/@vant/weapp/overlay/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),(0,require("../common/component").VantComponent)({props:{show:Boolean,customStyle:String,duration:{type:null,value:300},zIndex:{type:Number,value:1},lockScroll:{type:Boolean,value:!0}},methods:{onClick:function(){this.$emit("click")},noop:function(){}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/overlay/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/picker-column/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/picker-column/index.js';	define("miniprogram_npm/@vant/weapp/picker-column/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/component"),e=require("../common/utils"),n=require("../common/validator");(0,t.VantComponent)({classes:["active-class"],props:{valueKey:String,className:String,itemHeight:Number,visibleItemCount:Number,initialOptions:{type:Array,value:[]},defaultIndex:{type:Number,value:0,observer:function(t){this.setIndex(t)}}},data:{startY:0,offset:0,duration:0,startOffset:0,options:[],currentIndex:0},created:function(){var t=this,e=this.data,n=e.defaultIndex,i=e.initialOptions;this.set({currentIndex:n,options:i}).then((function(){t.setIndex(n)}))},methods:{getCount:function(){return this.data.options.length},onTouchStart:function(t){this.setData({startY:t.touches[0].clientY,startOffset:this.data.offset,duration:0})},onTouchMove:function(t){var n=this.data,i=t.touches[0].clientY-n.startY;this.setData({offset:(0,e.range)(n.startOffset+i,-this.getCount()*n.itemHeight,n.itemHeight)})},onTouchEnd:function(){var t=this.data;if(t.offset!==t.startOffset){this.setData({duration:200});var n=(0,e.range)(Math.round(-t.offset/t.itemHeight),0,this.getCount()-1);this.setIndex(n,!0)}},onClickItem:function(t){var e=t.currentTarget.dataset.index;this.setIndex(e,!0)},adjustIndex:function(t){for(var n=this.data,i=this.getCount(),s=t=(0,e.range)(t,0,i);s<i;s++)if(!this.isDisabled(n.options[s]))return s;for(s=t-1;s>=0;s--)if(!this.isDisabled(n.options[s]))return s},isDisabled:function(t){return(0,n.isObj)(t)&&t.disabled},getOptionText:function(t){var e=this.data;return(0,n.isObj)(t)&&e.valueKey in t?t[e.valueKey]:t},setIndex:function(t,e){var n=this,i=this.data,s=-(t=this.adjustIndex(t)||0)*i.itemHeight;return t!==i.currentIndex?this.set({offset:s,currentIndex:t}).then((function(){e&&n.$emit("change",t)})):this.set({offset:s})},setValue:function(t){for(var e=this.data.options,n=0;n<e.length;n++)if(this.getOptionText(e[n])===t)return this.setIndex(n);return Promise.resolve()},getValue:function(){var t=this.data;return t.options[t.currentIndex]}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/picker-column/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/picker/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/picker/index.js';	define("miniprogram_npm/@vant/weapp/picker/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../common/component"),n=require("./shared");(0,t.VantComponent)({classes:["active-class","toolbar-class","column-class"],props:e(e({},n.pickerProps),{valueKey:{type:String,value:"text"},toolbarPosition:{type:String,value:"top"},defaultIndex:{type:Number,value:0},columns:{type:Array,value:[],observer:function(e){void 0===e&&(e=[]),this.simple=e.length&&!e[0].values,Array.isArray(this.children)&&this.children.length&&this.setColumns().catch((function(){}))}}}),beforeCreate:function(){var e=this;Object.defineProperty(this,"children",{get:function(){return e.selectAllComponents(".van-picker__column")||[]}})},methods:{noop:function(){},setColumns:function(){var e=this,t=this.data,n=(this.simple?[{values:t.columns}]:t.columns).map((function(t,n){return e.setColumnValues(n,t.values)}));return Promise.all(n)},emit:function(e){var t=e.currentTarget.dataset.type;this.simple?this.$emit(t,{value:this.getColumnValue(0),index:this.getColumnIndex(0)}):this.$emit(t,{value:this.getValues(),index:this.getIndexes()})},onChange:function(e){this.simple?this.$emit("change",{picker:this,value:this.getColumnValue(0),index:this.getColumnIndex(0)}):this.$emit("change",{picker:this,value:this.getValues(),index:e.currentTarget.dataset.index})},getColumn:function(e){return this.children[e]},getColumnValue:function(e){var t=this.getColumn(e);return t&&t.getValue()},setColumnValue:function(e,t){var n=this.getColumn(e);return null==n?Promise.reject(new Error("setColumnValue: 对应列不存在")):n.setValue(t)},getColumnIndex:function(e){return(this.getColumn(e)||{}).data.currentIndex},setColumnIndex:function(e,t){var n=this.getColumn(e);return null==n?Promise.reject(new Error("setColumnIndex: 对应列不存在")):n.setIndex(t)},getColumnValues:function(e){return(this.children[e]||{}).data.options},setColumnValues:function(e,t,n){void 0===n&&(n=!0);var r=this.children[e];return null==r?Promise.reject(new Error("setColumnValues: 对应列不存在")):JSON.stringify(r.data.options)===JSON.stringify(t)?Promise.resolve():r.set({options:t}).then((function(){n&&r.setIndex(0)}))},getValues:function(){return this.children.map((function(e){return e.getValue()}))},setValues:function(e){var t=this,n=e.map((function(e,n){return t.setColumnValue(n,e)}));return Promise.all(n)},getIndexes:function(){return this.children.map((function(e){return e.data.currentIndex}))},setIndexes:function(e){var t=this,n=e.map((function(e,n){return t.setColumnIndex(n,e)}));return Promise.all(n)}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/picker/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/popup/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/popup/index.js';	define("miniprogram_npm/@vant/weapp/popup/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/component"),o=require("../mixins/transition");(0,e.VantComponent)({classes:["enter-class","enter-active-class","enter-to-class","leave-class","leave-active-class","leave-to-class","close-icon-class"],mixins:[(0,o.transition)(!1)],props:{round:Boolean,closeable:Boolean,customStyle:String,overlayStyle:String,transition:{type:String,observer:"observeClass"},zIndex:{type:Number,value:100},overlay:{type:Boolean,value:!0},closeIcon:{type:String,value:"cross"},closeIconPosition:{type:String,value:"top-right"},closeOnClickOverlay:{type:Boolean,value:!0},position:{type:String,value:"center",observer:"observeClass"},safeAreaInsetBottom:{type:Boolean,value:!0},safeAreaInsetTop:{type:Boolean,value:!1},lockScroll:{type:Boolean,value:!0}},created:function(){this.observeClass()},methods:{onClickCloseIcon:function(){this.$emit("close")},onClickOverlay:function(){this.$emit("click-overlay"),this.data.closeOnClickOverlay&&this.$emit("close")},observeClass:function(){var e=this.data,o=e.transition,t=e.position,s=e.duration,n={name:o||t};"none"===o?(n.duration=0,this.originDuration=s):null!=this.originDuration&&(n.duration=this.originDuration),this.setData(n)}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/popup/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/radio-group/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/radio-group/index.js';	define("miniprogram_npm/@vant/weapp/radio-group/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/component"),r=require("../common/relation");(0,e.VantComponent)({field:!0,relation:(0,r.useChildren)("radio"),props:{value:{type:null,observer:"updateChildren"},direction:String,disabled:{type:Boolean,observer:"updateChildren"}},methods:{updateChildren:function(){this.children.forEach((function(e){return e.updateFromParent()}))}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/radio-group/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/radio/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/radio/index.js';	define("miniprogram_npm/@vant/weapp/radio/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/version"),a=require("../common/component"),t=require("../common/relation");(0,a.VantComponent)({field:!0,relation:(0,t.useParent)("radio-group",(function(){this.updateFromParent()})),classes:["icon-class","label-class"],props:{name:null,value:null,disabled:Boolean,useIconSlot:Boolean,checkedColor:String,labelPosition:{type:String,value:"right"},labelDisabled:Boolean,shape:{type:String,value:"round"},iconSize:{type:null,value:20}},data:{direction:"",parentDisabled:!1},methods:{updateFromParent:function(){if(this.parent){var e=this.parent.data,a=e.value,t=e.disabled,n=e.direction;this.setData({value:a,direction:n,parentDisabled:t})}},emitChange:function(a){var t=this.parent||this;t.$emit("input",a),t.$emit("change",a),(0,e.canIUseModel)()&&t.setData({value:a})},onChange:function(){this.data.disabled||this.data.parentDisabled||this.emitChange(this.data.name)},onClickLabel:function(){var e=this.data,a=e.disabled,t=e.parentDisabled,n=e.labelDisabled,i=e.name;a||t||n||this.emitChange(i)}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/radio/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/switch/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/switch/index.js';	define("miniprogram_npm/@vant/weapp/switch/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),(0,require("../common/component").VantComponent)({field:!0,classes:["node-class"],props:{checked:null,loading:Boolean,disabled:Boolean,activeColor:String,inactiveColor:String,size:{type:String,value:"30"},activeValue:{type:null,value:!0},inactiveValue:{type:null,value:!1}},methods:{onClick:function(){var e=this.data,i=e.activeValue,t=e.inactiveValue,a=e.disabled,l=e.loading;if(!a&&!l){var n=this.data.checked===i?t:i;this.$emit("input",n),this.$emit("change",n)}}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/switch/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/toast/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/toast/index.js';	define("miniprogram_npm/@vant/weapp/toast/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),(0,require("../common/component").VantComponent)({props:{show:Boolean,mask:Boolean,message:String,forbidClick:Boolean,zIndex:{type:Number,value:1e3},type:{type:String,value:"text"},loadingType:{type:String,value:"circular"},position:{type:String,value:"middle"}},methods:{noop:function(){}}}); 
 			}); 	require("miniprogram_npm/@vant/weapp/toast/index.js");
 		__wxRoute = 'miniprogram_npm/@vant/weapp/transition/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_npm/@vant/weapp/transition/index.js';	define("miniprogram_npm/@vant/weapp/transition/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../common/component"),s=require("../mixins/transition");(0,e.VantComponent)({classes:["enter-class","enter-active-class","enter-to-class","leave-class","leave-active-class","leave-to-class"],mixins:[(0,s.transition)(!0)]}); 
 			}); 	require("miniprogram_npm/@vant/weapp/transition/index.js");
 		__wxRoute = 'pages/zimportInfo/components/form/form';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/zimportInfo/components/form/form.js';	define("pages/zimportInfo/components/form/form.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../../@babel/runtime/helpers/defineProperty");require("../../../../@babel/runtime/helpers/Arrayincludes");var t=l(require("../../../../@babel/runtime/regenerator")),a=require("../../../../@babel/runtime/helpers/asyncToGenerator"),i=require("../../../../@babel/runtime/helpers/objectSpread2"),r=l(require("../../../../api/apiBaseInfo")),n=l(require("../../../../api/apiPaycard")),s=require("../../../../utils/zfunlist"),o=require("../../utlis/constant");function l(e){return e&&e.__esModule?e:{default:e}}var c=getApp(),u=c.globalData,d=(new Date).getTime();Component({options:{styleIsolation:"shared"},properties:{disabled:{type:Boolean},formlist:{type:Array,observer:function(e,t){this.changeFormlistCopy()}},edulist:{type:Array,observer:function(e,t){var a=(0,o.getMaxEduLevel)(e);this.setData({maxLevel:a||1})}},graduatestype:{type:String,observer:function(e,t){this.changeFormlistCopy()}},findex:{type:Number},depositBankList:{type:Array},filterStr:{type:String},hidden:{type:Boolean}},data:{imgUrl:u.imgUrl,gongpaiImgSrc:"",nickName:"",realName:"",memberid:"",gongpaiPreviewShow:!1,cardfront:"https://ssc-prod-oss.bcebos.cloud.geely.com/v1/ssc-static/card-person-front.png?authorization=bce-auth-v1%2F858ecded145f4909815b57f17af1a948%2F2022-09-27T02%3A07%3A20Z%2F-1%2F%2Fa3e96857d4d36b72ac62ec116c002b29d95d0185751cbb5b71fade7980fc656d",cardback:"https://ssc-prod-oss.bcebos.cloud.geely.com/v1/ssc-static/card-person-back.png?authorization=bce-auth-v1%2F858ecded145f4909815b57f17af1a948%2F2022-09-27T02%3A07%3A19Z%2F-1%2F%2Fc62c6d368734505f32c1eb4cfe5daebde74f705f07c9f98700c445180550f546",textareaInputNumber:0,textareaInputNumberReport:0,bdCheck:{value:!0,chosedLabel:"是",reason:""},popupShow:!1,pickerTimeDefault:d,startTime:"",endTime:"",formatter:function(e,t){return"year"===e?"".concat(t,"年"):"month"===e?"".concat(t,"月"):t},minDate:new Date("1960-01").getTime(),timeSelectType:"",popupNormalPickerShow:!1,columnsNPicker:[],areaPickerShow:!1,areaShow:!1,areaList:[],medicalReportDTOList:[],deletFilesIds:[],formlistCopy:[],maxLevel:1},methods:{inputchange:function(e){var t=e.detail;(0,s.emoji)(t.value)&&wx.showToast({title:"该字符暂不支持输入",icon:"none",duration:2e3}),t.value=(0,s.filterBiaoqing)(t.value),this.triggerEvent("inputevent",i(i(i({},e.target.dataset),t),{},{findex:this.data.findex}))},inputValueChange:function(e){var t=e.detail;this.triggerEvent("inputchangeevent",i(i(i({},e.target.dataset),t),{},{findex:this.data.findex}))},choseImg:function(){if(!this.data.disabled){wx.chooseMedia({count:1,mediaType:["image"],sourceType:["album","camera"],camera:"back",success:function(e){var t=e.tempFiles[0].tempFilePath,a=t.substring(t.lastIndexOf(".")+1);if("png"!=a&&"jpg"!=a&&"jpeg"!=a)return wx.showToast({title:"只能上传.png、.jpg、.jpep 格式",icon:"none",image:"",duration:2e3,mask:!0});wx.navigateTo({url:"/pages/zcutimg/zcutimg?imagePath=".concat(e.tempFiles[0].tempFilePath)})}})}},toggleVanOverlay:function(e){var t=e.target.dataset.item,a=void 0===t?{}:t,i=a.realName,r=a.value;this.setData({nickName:this.data.formlist[5].value,realName:i,memberid:"",gongpaiImgSrc:r,gongpaiPreviewShow:!this.data.gongpaiPreviewShow})},listenTextareaInput:function(e){var t=Number(e.target.max)||50,a=e.detail;(0,s.emoji)(a.value)&&wx.showToast({title:"该字符暂不支持输入",icon:"none",duration:2e3}),a.value=(0,s.filterBiaoqing)(a.value);var r=a.value.length;this.setData({textareaInputNumber:r>=t?t:r}),this.triggerEvent("inputevent",i(i({},e.target.dataset),a))},inputNoBodyreportReason:function(e){var t=e.detail.value,a=(t=(0,s.filterBiaoqing)(t)).length;this.setData({textareaInputNumberReport:a>=20?20:a,"bdCheck.reason":t})},clearDeleteId:function(){this.setData({deletFilesIds:[]})},setInitData:function(e){var t=e.haveMedicalReport,a=void 0===t?1:t,i=e.medicalReportDTOList,r=void 0===i?[]:i,n=e.medicalReportEmptyContent,s={},o=[];1==a?(s={value:!0,chosedLabel:"是",reason:""},o=r):(s={value:!1,chosedLabel:"否",reason:void 0===n?"":n},o=[]),this.setData({bdCheck:s,medicalReportDTOList:o||[]})},setHonorInit:function(e){var t=e.certificateDTOList;this.setData({medicalReportDTOList:t||[]})},toggleBodyCheckUpload:function(){if(!this.data.disabled){this.setData({popupNormalPickerShow:!0,columnsNPicker:[{label:"是",value:"1"},{label:"否",value:"0"}],pickerTitle:"请选择",selectedPickerKey:"hasBodyReport"})}},onClose:function(){this.setData({popupShow:!1})},openPopup:function(e){if(!this.data.disabled)if(e.currentTarget.dataset.disabled)wx.showToast({title:e.currentTarget.dataset.disabledtext||"暂不支持修改",icon:"none"});else{var t=e.currentTarget.dataset,a=void 0===t?{}:t;this.data.timeSelectType=a.type,this.data.timeSelectKey=a.key,this.setData({popupShow:!0})}},openPopupSingle:function(e){var t=e.key;this.data.timeSelectKey=t,this.setData({popupShow:!0})},onInputTime:function(e){},onConfirmTime:function(e){var t=function(e){var t=e.getFullYear(),a=e.getMonth()+1,i=e.getDate();return"".concat(t,"-").concat(a>9?a:"0"+a,"-").concat(i>9?i:"0"+i)};"firstWorkTime"===this.data.timeSelectKey||"birthday"===this.data.timeSelectKey||"nationalExpTime"===this.data.timeSelectKey?this.triggerEvent("timesingleevent",{time:t(new Date(e.detail)),key:this.data.timeSelectKey,findex:this.data.findex}):this.triggerEvent("timerangeevent",{time:t(new Date(e.detail)),timeType:this.data.timeSelectType,findex:this.data.findex,key:this.data.timeSelectKey}),this.onClose()},toggleSwitch:function(e){this.triggerEvent("switchevent",i(i({},e.target.dataset),{},{findex:this.data.findex}))},radioChange:function(e){this.triggerEvent("radioevent",i(i({detail:e.detail},e.target.dataset),{},{findex:this.data.findex}))},choseImgSingle:function(e){if(!this.data.disabled){var t=this;wx.chooseMedia({count:1,mediaType:["image"],sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){t.triggerEvent("chosesingleimgevent",i(i({},e.currentTarget.dataset),{},{findex:t.data.findex,imgValue:a}))},fail:function(e){}})}},deleteImgSingle:function(e){this.triggerEvent("chosesingleimgevent",i(i({},e.target.dataset),{},{findex:this.data.findex,imgValue:""}))},listenSwitchTextareaInput:function(e){var t=Number(e.target.max)||50,a=e.detail;a.value=(0,s.filterBiaoqing)(a.value);var r=a.value.length;this.setData({textareaInputNumber:r>=t?t:r}),this.triggerEvent("switchinputevent",i(i(i({},e.currentTarget.dataset),a),{},{findex:this.data.findex}))},onClickSelectItem:function(e){var r=this;return a(t.default.mark((function a(){var s,o,l,d,p,h,f,m,g,v,y,b,k,x,D,T,w;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("onClickSelectItem",e),!r.data.disabled){t.next=3;break}return t.abrupt("return");case 3:if(!e.currentTarget.dataset.disabled){t.next=6;break}return wx.showToast({title:e.currentTarget.dataset.disabledtext||"暂不支持修改",icon:"none"}),t.abrupt("return");case 6:if(!r.data.disabled){t.next=8;break}return t.abrupt("return");case 8:if(s=e.currentTarget.dataset.key,o={maritalDesr:"marital_status",hukouTypeDesr:"bpm_census_type",emplTypeDesr:"EmplTypeEnum",politicalDesr:"politics_status",uegentRelationShipDesr:"relationshipWith",relationShip:"relationshipWith",healthDesr:"state_of_health",bloodDesr:"blood_type",hasGeelyRelation:"______",relationShipDesr:"relationshipWith",socialrelationsAndOldDesr:"socialrelationsAndOld",recruitDesc:"recruit_type_list",eduLevel:"degree",learnTypeDesc:"learning_type_list",eduType:"education_type_list",languageDesc:"language_status",speakingDesc:"speaking_status",readingDesc:"reading_status",writingDesc:"writing_status",nationalIdType:"enum_national_type",sexDesr:"gender",sex:"gender",nationality:"_",hasBodyReport:"-----",leavingCertificationEmptyType:"-----",nationDesr:"minzu"},l={maritalDesr:"选择婚姻状况",hukouTypeDesr:"选择户籍类型",emplTypeDesr:"选择人员类型",politicalDesr:"选择政治面貌",uegentRelationShipDesr:"选择关系",relationShip:"选择关系",healthDesr:"选择健康状况",bloodDesr:"选择血型",hasGeelyRelation:"选择有无存在吉利关系",relationShipDesr:"选择关系",socialrelationsAndOldDesr:"选择关系",eduLevel:"选择教育程度",recruitDesc:"选择教育方式",learnTypeDesc:"选择教育类型",eduType:"选择学历",languageDesc:"选择语言类型",speakingDesc:"选择口语",readingDesc:"选择阅读",writingDesc:"选择写作",nationalIdType:"请选择证件类型",sex:"请选择性别",sexDesr:"请选择性别",nationality:"请选择",hasBodyReport:"请选择",leavingCertificationEmptyType:"请选择原因",nationDesr:"请选择民族"},d="","eduType"!==s){t.next=25;break}if(p={"统招":"TZ","非统招":"FTZ"},h={"全日制":"QRZ","非全日制":"FQRZ"},f="",m="",r.data.formlist.forEach((function(e){"recruitDesc"===e.key&&(f=e.value),"learnTypeDesc"===e.key&&(m=e.value)})),!f||!m){t.next=23;break}g=[p[f],h[m]].join("_"),d=g,t.next=25;break;case 23:return wx.showToast({title:"请先选择教育方式和教育类型",icon:"none"}),t.abrupt("return");case 25:if(!o[s]){t.next=30;break}return v=[],"nationality"===s?v=u.allArea:"hasGeelyRelation"===s?v=[{label:"有",value:"1"},{label:"无",value:"0"}]:"hasBodyReport"===s?v=[{label:"是",value:"1"},{label:"否",value:"0"}]:"eduType"===s?(y=u.dictObj[o[s]],b=y.filter((function(e){return e.key.startsWith(d)})),v=b.map((function(e){return{label:e.description.cn,value:e.key}}))):v="leavingCertificationEmptyType"===s?[{label:"入职当日提交",value:"provide_income"},{label:"入职一个月内提交",value:"provide_in_month"},{label:"无法提供",value:"no_provide"}]:"politicalDesr"===s?e.currentTarget.dataset.age>=28?u.dictObj[o[s]].filter((function(e){return"团员"!==e.dicContentCn})).map((function(e){return{label:e.dicContentCn,value:e.dicCode}})):u.dictObj[o[s]].map((function(e){return{label:e.dicContentCn,value:e.dicCode}})):null===(k=u.dictObj[o[s]])||void 0===k?void 0:k.map((function(e){return"emplTypeDesr"===s?{label:e.text,value:e.code}:{label:e.dicContentCn,value:e.dicCode}})),r.setData({popupNormalPickerShow:!0,columnsNPicker:v,pickerTitle:l[s],selectedPickerKey:s}),t.abrupt("return");case 30:if("bankAddress"!==s&&"birthplace"!==s||(r.setData({vl:"2"}),r.setData({areaShow:!0}),r.setData({selectedPickerKey:s}),r.initAreaPicker()),"hukouDescr"!==s&&"homeDescr"!==s&&"addressName"!==s){t.next=39;break}return r.setData({vl:"3"}),r.setData({areaPickerShow:!0}),r.setData({selectedPickerKey:s}),r.initArea(),(x=r.selectComponent(".vanArea"))&&x.reset(),t.abrupt("return");case 39:if("firstWorkTime"!==s&&"birthday"!==s&&"nationalExpTime"!==s){t.next=42;break}return r.openPopupSingle({key:s}),t.abrupt("return");case 42:if("bankName"!==s){t.next=52;break}return t.next=45,n.default.getBankList({personId:c.globalData.personId});case 45:return D=t.sent,T=[],D&&!D.hasError&&0==(T=D.data.filter((function(e){return 1==e.hasContractBank}))).length&&(T=D.data),[],w=T.map((function(e){return{label:e.zyhmc,value:e.bnklz}})),r.setData({popupNormalPickerShow:!0,columnsNPicker:w,pickerTitle:"选择办理银行",selectedPickerKey:s}),t.abrupt("return");case 52:if("depositBank"!==s){t.next=55;break}return r.triggerEvent("selectzhihangBeforeevent",i(i({},e.currentTarget.dataset),{},{findex:r.data.findex})),t.abrupt("return");case 55:r.triggerEvent("selectevent",i(i({},e.currentTarget.dataset),{},{findex:r.data.findex}));case 56:case"end":return t.stop()}}),a)})))()},showZhihangPicker:function(){var e=this.data.depositBankList.map((function(e){return{label:e.banka,value:e.bankl}}));this.setData({popupNormalPickerShow:!0,columnsNPicker:e,pickerTitle:"选择办理支行",selectedPickerKey:"depositBank"})},selectPersonCard:function(e){if(!this.data.disabled){var t=e.currentTarget.dataset.card,a=this;wx.showActionSheet({itemList:["拍照","从相册中选择"],success:function(e){var i="idCard".concat(t);0===e.tapIndex?a.chooseWxImageCard("camera",i,1):1===e.tapIndex&&a.chooseWxImageCard("album",i,1)}})}},chooseWxImageCard:function(e,t,a){var i=this,r=this;wx.chooseImage({sizeType:["original","compressed"],sourceType:[e],count:a,success:function(e){try{var a=e.tempFiles;e.tempFilePaths;return void("idCardJust"===t?(wx.showLoading({title:"上传中",mask:!0}),(0,s.uploadFileToServe)({files:e,wx:wx,UserToken:u.usertoken,fun:function(e){r.triggerEvent("callbackothercardevent",{res:e})}})):i.triggerEvent("callbackcardevent",{target:t,fileUrl:a[0].path,size:a[0].size}))}catch(e){}}})},onCloseNPicker:function(){this.setData({popupNormalPickerShow:!1})},onConfirmNPicker:function(e){console.log("onConfirmNPicker",e,this.data);var t=e.detail,a=t.value,r=t.index;if("hasBodyReport"===this.data.selectedPickerKey){var n="0"==a.value;console.log(n),this.setData({bdCheck:i(i({},this.data.bdCheck),{},{value:!n,chosedLabel:n?"否":"是"})})}else{var s=this.data.depositBankList.find((function(e){return e.bankl==a.value}));this.triggerEvent("selectevent",i(i({key:this.data.selectedPickerKey},a),{},{index:r,findex:this.data.findex,el:s}))}this.onCloseNPicker()},initArea:function(){var e=this;return a(t.default.mark((function a(){var i,r,n;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getAreaList("CHN");case 2:return i=t.sent,t.next=5,e.getAreaList(i[0].value);case 5:return r=t.sent,t.next=8,e.getAreaList(r[0].value);case 8:n=t.sent,e.data.county_list=n,e.setData({areaList:{province_list:e.transAreaArray(i),city_list:e.transAreaArray(r),county_list:e.transAreaArray(n)}});case 11:case"end":return t.stop()}}),a)})))()},initAreaPicker:function(){var e=this;return a(t.default.mark((function a(){var i,r,n;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.data.selectedPickerKey,t.next=3,e.getAreaList("CHN");case 3:if(r=t.sent,"bankAddress"===i&&e.setData({areaList:{province_list:e.transAreaArray(r),city_list:e.transAreaArray([])}}),"birthplace"!==i){t.next=12;break}return t.next=8,e.getNativeAreaList(r[0].value,r[0].label);case 8:n=t.sent,e.data.county_list=JSON.parse(JSON.stringify(n)),n=n.map((function(e){return e.value=e.value.slice(0,2)+e.value.slice(4,6),e})),e.setData({areaList:{province_list:e.transAreaArray(r),city_list:e.transAreaArray(n)}});case 12:case"end":return t.stop()}}),a)})))()},getAreaList:function(e){return new Promise((function(t,a){r.default.areaBasic({parentRegion:e}).then((function(e){var a=e.data,i=(void 0===a?[]:a).map((function(e){return{label:e.regionName.cn,value:e.region}}));t(i)}))}))},getNativeAreaList:function(e,t){return new Promise((function(t,a){r.default.nativeAreaBasic({parentRegion:e}).then((function(e){var a=e.data,i=(void 0===a?[]:a).map((function(e){return{label:e.regionName.cn,value:e.region}}));t(i)}))}))},setAreaList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"CHN",a=arguments.length>1?arguments[1]:void 0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return new Promise((function(r,n){e.getAreaList(t).then((function(t){var n=t.map((function(e){return e.label}));1===i?0===a?(e.setData({multiArray:[n,[],[]],multiFamilyArray:[n,[],[]]}),e.data.province=t,e.data.familyProvince=t):(1===a?(e.setData({multiArray:[e.data.multiArray[0],n,[]]}),e.data.city=t):e.setData({multiArray:[e.data.multiArray[0],e.data.multiArray[1],n]}),e.data.area=t):0===a?(e.setData({multiFamilyArray:[n,[],[]]}),e.data.familyProvince=t,e.data.familyProvince=t):(1===a?(e.setData({multiFamilyArray:[e.data.multiFamilyArray[0],n,[]]}),e.data.familyCity=t):e.setData({multiFamilyArray:[e.data.multiFamilyArray[0],e.data.multiFamilyArray[1],n]}),e.data.familyArea=t),r(n)}))}))},transAreaArray:function(e){var t={};return e.forEach((function(e){"500155"==e.value?t[500255]=e.label:"500156"==e.value?t[500256]=e.label:t[e.value]=e.label})),t},bindChangeArea:function(e){var r=this;return a(t.default.mark((function a(){var n,s,o,l,c,u,d,p;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.detail,s=n.index,o=n.values,0!==s){t.next=12;break}return l=o[0].code,t.next=5,r.getAreaList(l);case 5:return c=t.sent,t.next=8,r.getAreaList(c[0].value);case 8:u=t.sent,r.setData({areaList:i(i({},r.data.areaList),{},{city_list:r.transAreaArray(c),county_list:r.transAreaArray(u)})}),t.next=20;break;case 12:if(1!==s){t.next=20;break}return d=o[1].code,t.next=16,r.getAreaList(d);case 16:p=t.sent,console.log(p,"county_list"),r.setData({areaList:i(i({},r.data.areaList),{},{county_list:r.transAreaArray(p)})}),console.log(r.data.areaList,"areaList");case 20:case"end":return t.stop()}}),a)})))()},changeArea:function(e){var r=this;return a(t.default.mark((function a(){var n,s,o,l,c;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.detail.values,s=r.data.selectedPickerKey,o=n[0].code,l=n[0].name,t.next=6,r.getNativeAreaList(o,l);case 6:c=t.sent,"bankAddress"===s&&(["北京市","天津市","上海市","重庆市"].includes(l)&&(c=[]),r.setData({areaList:i(i({},r.data.areaList),{},{city_list:r.transAreaArray(c)})})),"birthplace"===s&&(r.data.county_list=JSON.parse(JSON.stringify(c)),["北京市","天津市","上海市","重庆市"].includes(l)&&(c=c.map((function(e){return e.value=e.value.slice(0,2)+e.value.slice(4,6),e}))),r.setData({areaList:i(i({},r.data.areaList),{},{city_list:r.transAreaArray(c)})}));case 9:case"end":return t.stop()}}),a)})))()},onCloseAreaPicker:function(){this.setData({areaPickerShow:!1})},closeAreaPicker:function(){this.setData({areaShow:!1})},confirmAreaPicker:function(e){var t,a=e.detail,i=a.values,r=a.index;"birthplace"===this.data.selectedPickerKey&&(i[1]&&(i[1].code=null===(t=this.data.county_list.find((function(e){var t;return e.label===(null===(t=i[1])||void 0===t?void 0:t.name)})))||void 0===t?void 0:t.value));this.triggerEvent("selectevent",{key:this.data.selectedPickerKey,values:i,index:r}),this.closeAreaPicker()},onConfirmAreaPicker:function(e){var t=e.detail,a=t.values,i=t.index,r=[];console.log(a,"values"),3==a.length&&a[2]&&a[2].code&&("500255"==a[2].code||"500256"==a[2].code)&&a.map((function(e){var t="500255"==e.code?"500155":"500256"==e.code?"500156":e.code;r.push({code:t,name:e.name})})),this.triggerEvent("selectevent",{key:this.data.selectedPickerKey,values:r.length>0?r:a,index:i}),this.onCloseAreaPicker()},chooseTargetFile:function(e){var t=e.currentTarget.dataset,a=(t.target,t.count),i=t.id,r=this.data.medicalReportDTOList;if(console.log(i,r,"id"),"lastName25"===i&&r.length>=10)wx.showToast({title:"最多上传10个",icon:"none"});else if("body_check_report"===i&&r.length>=20&&"pdf"!==r[0].fileType[1])wx.showToast({title:"最多上传20个",icon:"none"});else{var n=this;wx.showActionSheet({itemList:["拍照","从相册中选择","从文件选择"],itemColor:"#666",success:function(e){0===e.tapIndex?n.choseBodyCheckReport("camera",i,Number(a)):1===e.tapIndex?n.choseBodyCheckReport("album",i,Number(a)):n.choseBodyCheckReport("file",i,Number(a))},fail:function(e){}})}},choseBodyCheckReport:function(e,t,a){var i=this,r=this,n=function(e){var a=i.data.medicalReportDTOList;if(a.length>0&&"body_check_report"===t){var n=e.tempFiles[0].name||e.tempFiles[0].path;if((["jpg","jpeg","png"].includes(a[0].fileType[1])?"img":"pdf")!=(["jpg","jpeg","png"].includes((n||"").substring((n||"").lastIndexOf(".")+1))?"img":"pdf"))return void wx.showToast({title:"上传文件格式不一致，请重新上传",icon:"none"})}wx.showLoading({title:"上传中",mask:!0}),(0,s.uploadFileToServe)({files:e,wx:wx,UserToken:u.usertoken,fun:function(e){var t=r.data.medicalReportDTOList;console.log("this_.data.medicalReportDTOList",r.data,r.data.medicalReportDTOList),t.push(e),r.setData({medicalReportDTOList:t})}})};"file"===e?wx.chooseMessageFile({type:"all",count:a,extension:["pdf","jpg","jpeg","png"],success:n}):wx.chooseImage({sizeType:["original","compressed"],sourceType:[e],count:a,success:n})},previewFile:function(e){(0,s.previewFile)({e:e,wx:wx})},handleDeleteReport:function(t){console.log(t);var a=t.currentTarget.dataset.key;this.data.deletFilesIds.push(a),this.setData(e({},"medicalReportDTOList",this.data.medicalReportDTOList.filter((function(e){return e.id!==a}))))},changeFormlistCopy:function(){if(this.data.formlist.find((function(e){return"学历"===e.name}))){var e=(0,o.getEduLevel)(this.data.formlist),t=JSON.parse(JSON.stringify(this.data.formlist)),a=t.findIndex((function(e){return"学历证明"===e.name})),i=t.findIndex((function(e){return"学位证明"===e.name}));"worker_type"===this.data.graduatestype&&e===this.data.maxLevel&&e>=4&&(t[a].name="学信网学历证明"),(e<4||e===this.data.maxLevel&&"worker_type"===this.data.graduatestype)&&t.splice(i,1),this.setData({formlistCopy:t})}else this.setData({formlistCopy:this.data.formlist})}},ready:function(){}}); 
 			}); 	require("pages/zimportInfo/components/form/form.js");
 		__wxRoute = 'pages/zimportInfo/tabs/tbasic/tbasic';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/zimportInfo/tabs/tbasic/tbasic.js';	define("pages/zimportInfo/tabs/tbasic/tbasic.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=p(require("../../../../@babel/runtime/regenerator")),t=require("../../../../@babel/runtime/helpers/objectSpread2"),a=require("../../../../@babel/runtime/helpers/defineProperty"),i=require("../../../../@babel/runtime/helpers/toConsumableArray"),n=require("../../../../@babel/runtime/helpers/asyncToGenerator"),l=p(require("../../../../utils/pinyin")),r=p(require("../../../../utils/formData/index")),o=p(require("../../../../api/apiCommon")),s=p(require("../../../../api/apiBaseInfo")),d=p(require("../../../../api/apiRelation")),h=p(require("@vant/weapp/dialog/dialog")),m=require("../../../../utils/zfunlist"),u=p(require("../../../../utils/RegPattern")),c=require("../../utlis/weapp-jwt");function p(e){return e&&e.__esModule?e:{default:e}}var f=require("../../../../env/index").baseUrl,y=getApp(),g=y.globalData,D=[{name:"姓名",placeholder:"请输入姓名",key:"emplName"},{name:"关系",placeholder:"请选择吉利关系",type:"select",key:"socialrelationsAndOldDesr"},{name:"工作单位",placeholder:"请输入工作单位",key:"companyName"},{name:"职务",placeholder:"请输入职务",key:"position"}];Component({properties:{disabled:{type:Boolean}},data:{imgUrl:g.imgUrl,personId:g.personId,formData:{isMilitary:"否"},familyInformationList:{},geelyRelation:{},errColect:{},menItemList:[{name:"姓",placeholder:"请输入姓",key:"lastName"},{name:"名",placeholder:"请输入名",key:"firstName"},{name:"姓拼音",placeholder:"请输入名拼音",key:"pySurname"},{name:"名拼音",placeholder:"请输入姓拼音",key:"pyName"},{name:"英文名",subname:"(选填）",placeholder:"请输入英文名",key:"foreignName",noneed:!0},{name:"极酷之名",subname:"(你在极氪的花名）",placeholder:"暂支持2～4位纯中文或3-10个纯英文",key:"nickname"},{name:"工牌照",type:"upimg",key:"photoFile"}],disabledFlag:!1,identityItemList:[{name:"证件类型",type:"select",key:"zhengjian-type",value:"身份证",disabled:!0},{name:"身份证上传",type:"identity",key:"upload-person-card"},{name:"证件号码",placeholder:"请输入身份证号",key:"nationalId",disabled:!0},{name:"出生日期",placeholder:"请选择出生日期",type:"select",key:"birthday",disabled:!0},{name:"证件有效期",placeholder:"请选择证件有效期",type:"select",key:"nationalExpTime",disabled:!0},{name:"性别",placeholder:"请选择性别",type:"select",key:"sexDesr",disabled:!0},{name:"出生国家/地区",placeholder:"请选择出生国家/地区",type:"select",key:"countryDesr"},{name:"民族",placeholder:"请选择民族",type:"select",key:"nationDesr",mj_type:"minzu",code_key:"nation"},{name:"婚姻状况",placeholder:"请选择婚姻状况",type:"select",key:"maritalDesr",mj_type:"marital_status",code_key:"marital"},{name:"籍贯",placeholder:"请输入籍贯省市",key:"birthplace",type:"select"},{name:"户籍类型",placeholder:"请选择户籍类型",type:"select",key:"hukouTypeDesr",mj_type:"bpm_census_type",code_key:"hukouType"},{name:"户籍所在地",placeholder:"请选择户籍所在地",type:"select",key:"hukouDescr"},{name:"户籍详细地址",type:"textarea",placeholder:"家庭户口簿上的户口所在地或员工身份证的住址",limit:50,key:"hukouAdd",value:""},{name:"政治面貌",placeholder:"请选择政治面貌",type:"select",key:"politicalDesr",mj_type:"politics_status",code_key:"political"},{name:"人员类型",placeholder:"请选择人员类型",type:"select",key:"emplTypeDesr",mj_type:"EmplTypeEnum",code_key:"emplType"}],linkItemList:[{name:"手机号",placeholder:"请输入手机号",key:"phone",disabled:!0},{name:"电子邮箱",placeholder:"请输入电子邮箱",key:"email"},{name:"居住地",placeholder:"请选择居住地",type:"select",key:"homeDescr"},{name:"详细地址",type:"textarea",placeholder:"请填写父母的常住地(老家)或自购住房地址，不可为集体户口地址",limit:50,textclass:"minh72",key:"homeAdd",value:""}],mergItemList:[{name:"姓名",placeholder:"请输入姓名",key:"uegentName"},{name:"电话",inputType:"number",placeholder:"请输入电话",key:"uegentPhone"},{name:"关系",placeholder:"请选择",type:"select",key:"uegentRelationShipDesr",mj_type:"emergency_contact_type_list",code_key:"uegentRelationShip"}],healthItemList:[{name:"健康状况",placeholder:"请选择健康状况",type:"select",key:"healthDesr",mj_type:"health_type_list",code_key:"health"},{name:"身高(CM）",subname:"(选填）",inputType:"digit",placeholder:"可填写1位小数",key:"height"},{name:"体重(KG）",subname:"(选填）",inputType:"digit",placeholder:"可填写1位小数",key:"weight"},{name:"血型",subname:"(选填）",placeholder:"请选择血型",type:"select",key:"bloodDesr",mj_type:"blood_type_list",code_key:"blood"},{name:"家族病史",placeholder:"若无，请填写无",type:"textarea",limit:100,key:"familyHistory"},{name:"体检报告组件",type:"bodyCheckRes",key:"body_check_report"}],jlrelationBase:[{name:"有无存在吉利关系",placeholder:"请选择",type:"select",key:"hasGeelyRelation"}],relationList:[{name:"关系1",list:JSON.parse(JSON.stringify(D))}],numberOptions:["一","二","三","四","五","六","七","八","九","十"],chooseAreaVisible:!1,jlrelationAddHide:!0},pageLifetimes:{show:function(){}},lifetimes:{ready:function(){var l=this;return n(e.default.mark((function n(){var r,o,s,d,h,u,c,p,f,y,D,v,k,I,C,L,b,x,w,N,T,E,A,R,_,S,F,P,B,U,j,O,V,H,J,z,M,q,$,G,Z,W,K,Q,X,Y,ee,te,ae,ie;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(wx.showLoading({title:"加载中",mask:!0}),e.prev=1,r=l.getBaseInfo()){e.next=5;break}return e.abrupt("return");case 5:o=wx.getStorageSync("dictObj"),s=r.personInfo,d=r.identityInfo,h=r.contactInfo,u=r.emergencyInfo,c=r.healthInfo,p=s.firstName,f=s.foreignName,y=s.lastName,D=s.nickName,v=s.pyFirstName,k=s.pyLastName,I=s.workPhoto,C=s.workPhotoFile,L=void 0===C?{}:C,b=[{name:"姓",placeholder:"请输入姓",key:"lastName",value:p},{name:"名",placeholder:"请输入名",key:"firstName",value:y},{name:"姓拼音",placeholder:"请输入名拼音",key:"pySurname",value:v},{name:"名拼音",placeholder:"请输入姓拼音",key:"pyName",value:k},{name:"英文名",subname:"(选填）",placeholder:"请输入英文名",key:"foreignName",noneed:!0,value:f},{name:"极酷之名",subname:"(你在极氪的花名）",placeholder:"暂支持2～4位纯中文或3-10个纯英文",key:"nickname",value:D}],x="",I&&L&&L.url?(x=l.getPreviewUrl(L.url),b=[].concat(i(b),[{name:"工牌照",type:"upimg",key:"photoFile",value:x,realName:g.name,uid:L.uid,workPhoto:I}])):b=[].concat(i(b),[{name:"工牌照",type:"upimg",key:"photoFile"}]),w=d.nationalIdType,N=d.nationalId,T=d.photoJustFile,E=d.photoBackFile,A=d.birthPlace,R=d.personType,_=d.sex,S=d.countryBirth,F=d.nation,P=d.marital,B=d.censusType,U=d.censusAddress,j=d.censusAddressDetail,O=d.political,V=w?o.enum_national_type.find((function(e){return e.dicCode==w})).dicContentCn:"",_&&(H=_?o.gender.find((function(e){return e.dicCode==_||e.dicContentEn==_})).dicContentCn:""),1==w&&(J=(0,m.getInfoFromId)(N),H=J.sexDesr,d.sex=J.sex,d.birthday=J.birthday,S||(d.countryBirth="中国",d.countryBirthCode="CHN")),d.birthday&&(z=l.getAge(d.birthday)),M=P?o.marital_status.find((function(e){return e.dicCode==P})).dicContentCn:"",q=R?o.EmplTypeEnum.find((function(e){return e.code==R})).text:"",$="",G="",Z="",T&&T.url&&($=l.getPreviewUrl(T.url),Z=$),E&&E.url&&(G=l.getPreviewUrl(E.url)),W=[a({name:"证件类型",type:"select",key:"zhengjian-type",value:"身份证",disabled:!0},"value",V),{name:"身份证上传",type:"identity",key:"upload-person-card",valuef:$,valueb:G},{name:"证件号码",placeholder:"请输入身份证号",key:"nationalId",disabled:!0,value:N},{name:"出生日期",placeholder:"请选择出生日期",type:"select",key:"birthday",disabled:!0,value:d.birthday},{name:"证件有效期",placeholder:"请选择证件有效期",type:"select",key:"nationalExpTime",disabled:!0,value:d.nationalExpTime},{name:"性别",placeholder:"请选择性别",type:"select",key:"sexDesr",disabled:!0,value:H},{name:"出生国家/地区",placeholder:"请选择出生国家/地区",type:"select",key:"countryDesr",value:d.countryBirth},{name:"民族",placeholder:"请选择民族",type:"select",key:"nationDesr",mj_type:"minzu",code_key:"nation",value:F},{name:"婚姻状况",placeholder:"请选择婚姻状况",type:"select",key:"maritalDesr",mj_type:"marital_status",code_key:"marital",value:M},{name:"籍贯",placeholder:"请输入籍贯省市",key:"birthplace",type:"select",value:A},{name:"户籍类型",placeholder:"请选择户籍类型",type:"select",key:"hukouTypeDesr",mj_type:"bpm_census_type",code_key:"hukouType",value:B},{name:"户籍所在地",placeholder:"请选择户籍所在地",type:"select",key:"hukouDescr",value:U},{name:"户籍详细地址",type:"textarea",placeholder:"家庭户口簿上的户口所在地或员工身份证的住址",limit:50,key:"hukouAdd",value:j},{name:"政治面貌",placeholder:"请选择政治面貌",type:"select",key:"politicalDesr",mj_type:"politics_status",code_key:"political",value:O,age:z},{name:"人员类型",placeholder:"请选择人员类型",type:"select",key:"emplTypeDesr",mj_type:"EmplTypeEnum",code_key:"emplType",value:q,disabled:!(!q||"3"==r.dataSource)}],K=[{name:"手机号",placeholder:"请输入手机号",key:"phone",disabled:!0,value:null==h?void 0:h.phone},{name:"电子邮箱",placeholder:"请输入电子邮箱",key:"email",value:null==h?void 0:h.email},{name:"居住地",placeholder:"请选择居住地",type:"select",key:"homeDescr",value:null==h?void 0:h.homeAddress},{name:"详细地址",type:"textarea",placeholder:"请填写父母的常住地(老家)或自购住房地址，不可为集体户口地址",limit:50,textclass:"minh72",key:"homeAdd",value:null==h?void 0:h.homeAddressDetail}],"CHN"!==d.countryBirthCode&&(W.splice(9,1,{name:"籍贯",placeholder:"请输入籍贯省市",key:"birthplace",value:A}),W.splice(11,2,{name:"户籍地址",type:"textarea",placeholder:"家庭户口簿上的户口所在地或员工身份证的住址",limit:50,key:"hukouAdd",value:j}),K.splice(2,2,{name:"居住地址",type:"textarea",placeholder:"请填写父母的常住地(老家)或自购住房地址，不可为集体户口地址",limit:50,textclass:"minh72",key:"homeAdd",value:null==h?void 0:h.homeAddressDetail})),1!=d.nationalIdType&&(W.splice(1,1,{name:"证件照片",type:"identity_other",key:"nationalIdPhotoJustUrl",value:Z}),W[3].disabled=!1,W[4].disabled=!1,W[5].disabled=!1),Q=u&&u.relationCode?o.relationshipWith.find((function(e){return e.dicCode==u.relationCode})).dicContentCn:"",X=[{name:"姓名",placeholder:"请输入姓名",key:"uegentName",value:null==u?void 0:u.name},{name:"电话",inputType:"number",placeholder:"请输入电话",key:"uegentPhone",value:null==u?void 0:u.phone},{name:"关系",placeholder:"请选择",type:"select",key:"uegentRelationShipDesr",mj_type:"emergency_contact_type_list",code_key:"uegentRelationShip",value:Q}],Y=c&&c.health?o.state_of_health.find((function(e){return e.dicCode==c.health})).dicContentCn:"",ee=c&&c.blood?o.blood_type.find((function(e){return e.dicCode==c.blood})).dicContentCn:"",te=[{name:"健康状况",placeholder:"请选择健康状况",type:"select",key:"healthDesr",mj_type:"health_type_list",code_key:"health",value:Y},{name:"身高(CM）",subname:"(选填）",inputType:"digit",placeholder:"可填写1位小数",key:"height",value:null==c?void 0:c.height},{name:"体重(KG）",subname:"(选填）",inputType:"digit",placeholder:"可填写1位小数",key:"weight",value:null==c?void 0:c.weight},{name:"血型",subname:"(选填）",placeholder:"请选择血型",type:"select",key:"bloodDesr",mj_type:"blood_type_list",code_key:"blood",value:ee},{name:"家族病史",placeholder:"若无，请填写无",type:"textarea",limit:100,key:"familyHistory",value:null==c?void 0:c.familyHistory},{name:"体检报告组件",type:"bodyCheckRes",key:"body_check_report"}],ae=[],c&&c.medicalReportFiles&&c.medicalReportFiles.map((function(e){ae.push(e.uid),e.id=e.uid,e.fileName=e.name,e.fileUrl=e.url,e.fileType=(e.name||"").split(".")})),l.selectComponent(".health").setInitData({haveMedicalReport:null==c?void 0:c.hasMedicalReport,medicalReportEmptyContent:null==c?void 0:c.noMedReportReason,medicalReportDTOList:null!=c&&c.medicalReportFiles?c.medicalReportFiles:[]}),ie=a({isMilitary:"否",lastName:s.firstName,firstName:s.lastName,pyName:k,pySurname:v,foreignName:f,nickname:D,photoFile:{fileUrl:x,fileName:L.name,id:L.uid,uid:L.uid,workPhoto:I},idCardFront:t({fileUrl:$},T),idCardBack:t({fileUrl:G},E),idCardJust:t({fileUrl:Z},T),nationalId:d.nationalId,nationalIdType:d.nationalIdType,sex:d.sex,nationalExpTime:d.nationalExpTime,birthday:d.birthday,country:d.countryBirthCode,countryDesr:d.countryBirth,nation:d.nationCode,nationDesr:d.nation,idCardFrontFileUrl:$,idCardBackFileUrl:G,idCardJustFileUrl:Z,marital:d.marital,maritalDesr:d.maritalCode,birthcode:d.birthPlaceCode,birthplace:d.birthPlace,hukouType:d.censusTypeCode,hukouTypeDesr:d.censusType,hukouCode:d.censusAddressCode,hukouDescr:d.censusAddress,hukouAdd:j,political:d.politicalCode,politicalDesr:O,emplType:R,emplTypeDesr:q,phone:h.phone,email:h.email,homeCode:h.homeAddressCode,homeDescr:h.homeAddress,homeAdd:h.homeAddressDetail,uegentName:null==u?void 0:u.name,uegentPhone:null==u?void 0:u.phone,uegentRelationShip:null==u?void 0:u.relationCode,uegentRelationShipDesr:Q,height:null==c?void 0:c.height,weight:null==c?void 0:c.weight,familyHistory:null==c?void 0:c.familyHistory,medicalReportIds:ae,hasMedicalReport:null==c?void 0:c.hasMedicalReport,health:null==c?void 0:c.health,healthDesr:Y,blood:null==c?void 0:c.blood,bloodDesr:ee},"familyHistory",null==c?void 0:c.familyHistory),l.setData({menItemList:b,identityItemList:W,linkItemList:K,mergItemList:X,healthItemList:te,formData:ie}),l.renderJlrelation(),e.next=45;break;case 41:e.prev=41,e.t0=e.catch(1),console.log(e.t0),wx.hideLoading({});case 45:case"end":return e.stop()}}),n,null,[[1,41]])})))()}},methods:{getPreviewUrl:function(e){if(e&&-1!==e.indexOf("url=")){var t=e.split("url=");return(0,c.weAtob)(t[1])}return e},tabShow:function(){wx.pageScrollTo({scrollTop:0,duration:0})},oninputEventSelf:function(e){var t=e.detail,a=t.key,i=t.value,n={lastName:"lastNameChg",firstName:"firstNameChg",foreignName:"foreignNameChange",pySurname:"formPynameChange",pyName:"formpySurnameChange",nickname:"nickNameChange",nationalId:"nationalIdChange",hukouAdd:"bindWordLimit",email:"emailChange",homeAdd:"homeAddInput",uegentName:"urgentNameChange",uegentPhone:"urgentPhoneChange",height:"heightChange",weight:"weightChange",familyHistory:"bindIsFamilyHistoryChange",emplName:"emplNameInput",companyName:"companyNameInput",position:"positionInput",birthplace:"birthplaceInput",hukouDescr:"hukouDescrInput"};this[n[a]]&&this[n[a]](i,e)},oninputChangeEvent:function(e){var t=this,a=e.detail,i=a.key,n=a.value;"nickname"===i&&n.trim()&&(/^[A-Za-z]$/.test(n)&&!/^[A-Za-z]{3,10}$/.test(n)?(wx.showToast({title:"3-10个英文字符",icon:"none"}),this.setErrCom("menItemList","nickname",0)):/^[\u4E00-\u9FA5]$/.test(n)&&!/^[\u4E00-\u9FA5]{2,4}$/.test(n)?(wx.showToast({title:"2-4个中文字符",icon:"none"}),this.setErrCom("menItemList","nickname",0)):o.default.checkNickname({nickname:n,personId:g.personId}).then((function(e){0==e.head.code?wx.showToast({title:"极酷之名校验通过",icon:"none"}):(t.setErrCom("menItemList","nickname",0),wx.showToast({title:e.head.message,icon:"none"}))})))},timeSingleSelect:function(e){var t=e.detail||{},i=t.time,n=t.key;this.setLlistValue("identityItemList",n,i),this.setData(a({},"formData.".concat(n),i))},birthplaceInput:function(e){this.setData({"formData.birthplace":e}),this.setLlistValue("identityItemList","birthplace",e)},hukouDescrInput:function(e){this.setData({"formData.hukouDescr":e}),this.setLlistValue("identityItemList","hukouDescr",e)},lastNameChg:function(e){var t=this,a="",i="";e.trim()?i=this.transferUpperCase(e):a="请输入姓",this.setData({"menItemList[0].value":e,"menItemList[0].err":!1,"menItemList[2].value":i,"formData.lastName":e,"formData.pySurname":i,"errColect.lastName":a},(function(){t.setData({"menItemList[6].realName":t.data.formData.lastName+t.data.formData.firstName})}))},firstNameChg:function(e){var t=this,a="",i="";e.trim()?i=this.transferUpperCase(e):a="请输入名",this.setData({"menItemList[1].value":e,"menItemList[1].err":!1,"menItemList[3].value":i,"formData.firstName":e,"formData.pyName":i,"errColect.firstName":a},(function(){t.setData({"menItemList[6].realName":t.data.formData.lastName+t.data.formData.firstName})}))},transferUpperCase:function(e){var t=l.default.getPinyin(e);return t.slice(0,1).toUpperCase()+t.slice(1)},formPynameChange:function(e){if(!new RegExp("^[a-zA-Z]+$").test(e))return wx.showToast({title:"请输入拼音",icon:"none"}),void this.setData({"menItemList[2].value":"","menItemList[2].err":!1,"formData.pySurname":""});this.setData({"menItemList[2].value":e,"menItemList[2].err":!1,"formData.pySurname":e})},formpySurnameChange:function(e){if(!new RegExp("^[a-zA-Z]+$").test(e))return wx.showToast({title:"请输入拼音",icon:"none"}),void this.setData({"menItemList[3].value":"","menItemList[3].err":!1,"formData.pyName":""});this.setData({"menItemList[3].value":e,"menItemList[3].err":!1,"formData.pyName":e})},foreignNameChange:function(e){var t="";/^[A-Za-z\s]+$/.test(e)||(t="英文名格式不正确"),this.setData({"menItemList[4].value":e,"menItemList[4].err":!1,"formData.foreignName":e.trim()}),this.setData({"errColect.foreignName":t})},nickNameChange:function(e){var t="";t=e.trim()?/^[A-Za-z]{3,10}|^[\u4E00-\u9FA5]{2,4}$/.test(e)?null:"极酷之名格式不正确":"请输入极酷之名",this.setData({"menItemList[5].value":e,"menItemList[5].err":!1,"errColect.nickname":t,"formData.nickname":e})},checkForm:function(t){var a=this;return n(e.default.mark((function i(){var n,l,r;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.handleFormData()){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,s.default.savebasic(n);case 5:if((l=e.sent)&&0==l.head.code){e.next=10;break}return wx.hideLoading(),l.head.message?wx.showToast({title:l.head.message,icon:"none"}):wx.showToast({title:l.data[0].error,icon:"none"}),e.abrupt("return");case 10:if(wx.hideLoading(),!t||"all"!==t.tag){e.next=14;break}return a.triggerEvent("submitAllNextTab1"),e.abrupt("return");case 14:r=setTimeout((function(){clearTimeout(r),a.triggerEvent("nextevent")}),500);case 15:case"end":return e.stop()}}),i)})))()},handleFormData:function(){if(!this.savebasicCheck())return null;var e=this.selectComponent(".health"),i=e.data.bdCheck,n=e.data.deletFilesIds;if(n.length&&i.value){var l=n.join(",");s.default.deleteFile(l).then((function(){e.clearDeleteId()}))}if(this.data.formData=t(t({},this.data.formData),{},{haveMedicalReport:i.value?1:0,medicalReportEmptyContent:i.reason,medicalReportDTOList:e.data.medicalReportDTOList}),!this.relationCheck())return null;var r,o=this.data.formData,d=[];o.medicalReportDTOList&&o.medicalReportDTOList.length&&o.medicalReportDTOList.map((function(e){return d.push(e.uid)})),r=i.value?{blood:o.blood,familyHistory:o.familyHistory,hasMedicalReport:1,health:o.health,height:o.height,medicalReportIds:d,noMedReportReason:o.noMedReportReason,weight:o.weight}:{blood:o.blood,familyHistory:o.familyHistory,hasMedicalReport:2,health:o.health,height:o.height,medicalReportIds:[],noMedReportReason:o.medicalReportEmptyContent,weight:o.weight};var h=this.data,m=h.jlrelationBase,u=h.relationList,c=[],p=2;"有"===m[0].value&&(p=1,u.forEach((function(e){var t=e.list;c.push({workPlace:t[2].value,name:t[0].value,position:t[3].value,relation:t[1].value,relationCode:t[1].code})}))),console.log(o,"_f");var f=o.hukouCode,y=o.homeCode,D=o.birthcode;return o.birthcode&&o.birthcode.indexOf("-")>-1&&(D=o.birthcode.substring(o.birthcode.lastIndexOf("-")+1)),a({personId:g.personId,personInfo:{firstName:o.lastName,foreignName:o.foreignName,lastName:o.firstName,nickName:o.nickname,pyFirstName:o.pySurname,pyLastName:o.pyName,workPhoto:o.photoFile.uid},identityInfo:{birthPlace:o.birthplace.replace(/-/g,""),birthPlaceCode:D,birthday:o.birthday,censusAddress:o.hukouDescr.replace(/-/g,""),censusAddressCode:f,censusAddressDetail:o.hukouAdd,censusType:o.hukouTypeDesr,censusTypeCode:o.hukouType,countryBirth:o.countryDesr,countryBirthCode:o.country,marital:o.marital,maritalCode:o.maritalDesr,nation:o.nationDesr,nationCode:o.nation,nationalExpTime:o.nationalExpTime,nationalId:o.nationalId,nationalIdPhotoBack:o.idCardBack.uid,nationalIdPhotoJust:1==o.nationalIdType?o.idCardFront.uid:o.idCardJust.uid,nationalIdType:o.nationalIdType,personType:o.emplType,political:o.politicalDesr,politicalCode:o.political,sex:o.sex},contactInfo:{email:o.email,homeAddress:o.homeDescr.replace(/-/g,""),homeAddressCode:y,homeAddressDetail:o.homeAdd,phone:o.phone},draftFlag:2,emergencyInfo:{name:o.uegentName,phone:o.uegentPhone,relation:o.uegentRelationShipDesr,relationCode:o.uegentRelationShip},healthInfo:r,geelyRelInfo:{geelyInfoList:[],hasGeelyRel:2}},"geelyRelInfo",{hasGeelyRel:p,geelyInfoList:c})},relationCheck:function(){var e=this.data,t=e.jlrelationBase,a=e.relationList;a.map((function(e){return e.list=e.list.map((function(e){return e.err=!1,e})),e})),this.setData({relationList:a}),this.triggerEvent("seterrevent",{index:0,tag:!1});var i=!0;if("有"===t[0].value)for(var n="",l=0,r=a.length;l<r;l++){for(var o=a[l].list,s=0,d=o.length;s<d;s++){var h=o[s],m=h.key,u=h.code,c=h.value;if("emplName"!==m||c?"relationShipDesr"!==m||u?"companyName"!==m||c?"position"!==m||c||(i=!1,n="请输入职务"):(i=!1,n="请输入工作单位"):(i=!1,n="请选择吉利关系"):(i=!1,n="请输入姓名"),!i){wx.showToast({icon:"none",title:n||"请修正"}),this.setErrComList(l,s,"relationList");break}}if(!i)break}return i},setErrComList:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"eduList";this.setData(a({},"".concat(i,"[").concat(e,"].list[").concat(t,"].err"),!0)),this.triggerEvent("seterrevent",{index:0})},setBaseHeadImg:function(e){var t=g.gongpaiImgSrc;this.photoFileUrl(t)},photoFileUrl:function(e){var t=this;wx.showLoading({title:"处理中"});var a="".concat(f,"/ssc/income/file/uploadFile"),i=new r.default,n=e;i.appendFile("file",n);var l=i.getData();wx.request({url:a,header:{"content-type":l.contentType,"x-access-token":y.globalData.usertoken},method:"post",data:l.buffer,success:function(e){if(0==e.data.head.code){var a=e.data.data,i=t.getPreviewUrl(a.url);wx.hideLoading({}),t.setData({"menItemList[6].value":i,"formData.photoFile":{sortOrder:"",fileUrl:i,fileName:a.fileName,name:a.name,uid:a.uid}})}else wx.hideLoading({}),wx.showToast({title:e.data.head.message,icon:"none"})},fail:function(e){wx.hideLoading({}),wx.showToast({title:"上传失败，请重试",icon:"none"})}})},callBackOtherCardEvent:function(e){var t=e.detail.res,a=this.getPreviewUrl(t.fileUrl);this.setLlistValue("identityItemList","nationalIdPhotoJustUrl",a),this.setData({"formData.idCardJust":t,"formData.idCardJustFileUrl":a})},callbackCardEvent:function(e){var i=this;wx.showLoading({title:"上传中",mask:!0});var n=e.detail,l=n.target,r=n.fileUrl,o=n.size,s=this.getBaseInfo();if(s){var d=s.identityInfo,h=r.split(".");this.setData(a({},"formData.".concat(l),{fileUrl:r,size:o})),(0,m.uploadIdentityImg)({wx:wx,filePath:r,UserToken:g.usertoken,nationalId:d.nationalId,personId:g.personId,this_:this,fun:function(e){var a=e||{},n=a.face,r=a.fileName,s=a.uid,d=a.url;if(console.log(e,"res"),n){if("2"!==n&&"idCardBack"===l)return void wx.showToast({title:"请上传身份证反面",icon:"none"});if("1"!==n&&"idCardFront"===l)return void wx.showToast({title:"请上传身份证正面",icon:"none"})}var u=i.getPreviewUrl(d),c=t({sortOrder:"",fileDetailOssUrl:"",fileUrl:u,fileName:r,fileType:h[1],fileSize:o,id:s,uid:s},e),p=c,f=c;if("idCardBack"===l)i.selectExpTime2(e.valid),i.setData({"formData.idCardBack":p,"identityItemList[1].valueb":u,"formData.idCardBackFileUrl":u}),wx.showToast({title:"上传成功",icon:"success"});else{var y=(0,m.getInfoFromId)(e.idno),g=i.getBaseInfo();if(!g)return;!(!g.identityInfo.nationalId||"false"===g.identityInfo.nationalId)||(i.setLlistValue("identityItemList","nationalId",e.idno),i.setData({formData:t(t({},i.data.formData),{},{nationalId:e.idno,birthday:y.birthday,sex:y.sex,sexDesr:y.sexDesr})})),i.setData({"formData.idCardFront":f,"identityItemList[1].valuef":u,"formData.idCardFrontFileUrl":u}),wx.hideLoading({})}}})}},selectExpTime2:function(e){new RegExp(".","g");var t,i=e?e.split("-")[1].split(".").join("-"):"";this.setData((a(t={},"formData.nationalExpTime",i),a(t,"identityItemList[4].value",i),t))},onselectEvent:function(e){var t=e.detail,a={countryDesr:"showChoseArea",maritalDesr:"bindmaritalDesrChange",hukouTypeDesr:"bindhukouChange",hukouDescr:"bindhukouDescrConfirm",birthplace:"birthplaceChange",politicalDesr:"bindCensusChange",homeDescr:"bindMultiFamilyChange",uegentRelationShipDesr:"urgentRelationPopup",healthDesr:"bindIsHealthChange",bloodDesr:"bindBloodChange",hasGeelyRelation:"choseGeelyRelation",relationShipDesr:"geelyRelationChange",socialrelationsAndOldDesr:"geelyRelationChange",emplTypeDesr:"emplTypeChange",nationDesr:"nationDesrChange",sexDesr:"sexDesrChange"};this[a[t.key]]&&this[a[t.key]](e)},getAllArea:function(){return o.default.fetchCountry({descr:""})},showChoseArea:function(){var e=this;this.getAllArea().then((function(t){var a=t.data;e.setData({searchAreaInput:void 0,chooseAreaVisible:!0,searchAreaList:a})}))},searchAreaChange:function(e){var t,a=e.detail.value.trim(),i=this.data.searchAreaList;if(!a)return this.setData({searchAreaInput:a}),void this.showChoseArea();t=i.filter((function(e){return e.regionName.cn.indexOf(a)>-1})),this.setData({searchAreaList:t,searchAreaInput:a})},hideChooseArea:function(){this.setData({searchAreaInput:void 0,chooseAreaVisible:!1})},chooseArea:function(e){var a=e.currentTarget.dataset,i=a.value,n=a.label;this.data.formData.country=i,this.data.formData.countryDesr=n;var l=this.data.identityItemList,r=this.data.linkItemList;"CHN"==i?l[9].type||"select"===l[9].type||(l.splice(9,1,{name:"籍贯",placeholder:"请输入籍贯省市",key:"birthplace",type:"select",value:""}),l.splice(11,1,{name:"户籍所在地",placeholder:"请选择户籍所在地",type:"select",key:"hukouDescr",value:""},{name:"户籍详细地址",type:"textarea",placeholder:"家庭户口簿上的户口所在地或员工身份证的住址",limit:50,key:"hukouAdd",value:""}),r.splice(2,1,{name:"居住地",placeholder:"请选择居住地",type:"select",key:"homeDescr",value:""},{name:"详细地址",type:"textarea",placeholder:"请填写父母的常住地(老家)或自购住房地址，不可为集体户口地址",limit:50,textclass:"minh72",key:"homeAdd",value:""}),this.data.formData.birthcode="",this.data.formData.birthplace="",this.data.formData.hukouCode="",this.data.formData.hukouDescr="",this.data.formData.hukouAdd="",this.data.formData.homeCode="",this.data.formData.homeDescr="",this.data.formData.homeAdd=""):l[9].type&&"select"==l[9].type&&(l.splice(9,1,{name:"籍贯",placeholder:"请输入籍贯省市",key:"birthplace",value:""}),l.splice(11,2,{name:"户籍地址",type:"textarea",placeholder:"家庭户口簿上的户口所在地或员工身份证的住址",limit:50,key:"hukouAdd",value:""}),r.splice(2,2,{name:"居住地址",type:"textarea",placeholder:"请填写父母的常住地(老家)或自购住房地址，不可为集体户口地址",limit:50,textclass:"minh72",key:"homeAdd",value:""}),this.data.formData.birthcode="",this.data.formData.birthplace="",this.data.formData.hukouCode="",this.data.formData.hukouDescr="",this.data.formData.hukouAdd="",this.data.formData.homeCode="",this.data.formData.homeDescr="",this.data.formData.homeAdd=""),this.setData({formData:t({},this.data.formData),identityItemList:l,linkItemList:r}),this.setLlistValue("identityItemList","countryDesr",n),this.hideChooseArea()},setLlistValue:function(e,t,i){var n=this;this.data[e]&&this.data[e].length&&this.data[e].forEach((function(l,r){t===l.key&&n.setData(a({},"".concat(e,"[").concat(r,"].value"),i))}))},bindmaritalDesrChange:function(e){var a=e.detail||{},i=a.label,n=a.value,l=a.key,r=this.data.formData;r.marital=n,r.maritalDesr=i,this.setLlistValue("identityItemList",l,i),this.setData({formData:t({},r)})},nationDesrChange:function(e){var a=e.detail||{},i=a.label,n=a.value,l=a.key,r=this.data.formData;r.nation=n,r.nationDesr=i,this.setLlistValue("identityItemList",l,i),this.setData({formData:t({},r)})},birthplaceChange:function(e){var t=(e.detail||{}).values,a=void 0===t?[]:t,i="",n="";console.log("birthplaceChange",a),a.forEach((function(e){i+=e.name+"-",n+=e.code+"-"})),this.setData({"formData.birthplace":i.slice(0,-1),"formData.birthcode":n.slice(0,-1)}),this.setLlistValue("identityItemList","birthplace",i.slice(0,-1))},bindhukouChange:function(e){var a=e.detail||{},i=a.label,n=a.value,l=a.key,r=this.data.formData;r.hukouType=n,r.hukouTypeDesr=i,this.setLlistValue("identityItemList",l,i),this.setData({formData:t({},r)})},emplTypeChange:function(e){var i=e.detail||{},n=i.label,l=i.value,r=i.key,o=this.data.formData;if(o.emplType=l,o.emplTypeDesr=n,"emplTypeDesr"===r){var s=this.data.identityItemList.findIndex((function(e){return"emplTypeDesr"===e.key}));if(s>-1){var d=t(t({},this.data.identityItemList[s]),{},{value:n,disabled:this.data.identityItemList[s].disabled});this.setData(a({},"identityItemList[".concat(s,"]"),d))}}else this.setLlistValue("identityItemList",r,n);this.setData({formData:t({},o)})},sexDesrChange:function(e){var a=e.detail||{},i=a.label,n=a.value,l=a.key,r=this.data.formData;r.sex=n,this.setLlistValue("identityItemList",l,i),this.setData({formData:t({},r)})},bindhukouDescrConfirm:function(e){var t=(e.detail||{}).values,a=(void 0===t?[]:t).filter((function(e){return e&&e.name})),i="",n="";a.forEach((function(e){i+=e.name+"-",n+=e.code+"-"})),this.setData({"formData.hukouDescr":i.slice(0,-1),"formData.hukouCode":n.slice(0,-1)}),this.setLlistValue("identityItemList","hukouDescr",i.slice(0,-1))},bindWordLimit:function(e){this.inputCallback(e,"identityItemList","hukouAdd")},bindCensusChange:function(e){var a=e.detail||{},i=a.label,n=a.value,l=a.key,r=this.data.formData;r.political=n,r.politicalDesr=i,this.setLlistValue("identityItemList",l,i),this.setData({formData:t({},r)})},emailChange:function(e){this.setData({"formData.email":e}),this.setLlistValue("linkItemList","email",e)},bindMultiFamilyChange:function(e){var t=(e.detail||{}).values,a=(void 0===t?[]:t).filter((function(e){return e&&e.name})),i="",n="";a.forEach((function(e){i+=e.name+"-",n+=e.code+"-"})),this.setData({"formData.homeDescr":i.slice(0,-1),"formData.homeCode":n.slice(0,-1)}),this.setLlistValue("linkItemList","homeDescr",i.slice(0,-1))},homeAddInput:function(e){this.inputCallback(e,"linkItemList","homeAdd")},inputCallback:function(e,t,a){var i=this.data.formData;i[a]=e,this.setData({formData:i}),this.setLlistValue(t,a,e)},urgentNameChange:function(e){if(this.setLlistValue("mergItemList","uegentName",e=(0,m.filterBiaoqing)(e)),e.trim())if(/[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/i.test(e)||/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]\s]/i.test(e))this.setData(a({},"errColect.uegentName","姓名不能包含特殊字符或空格"));else{var t;this.setData((a(t={},"formData.uegentName",e),a(t,"errColect.uegentName",""),t)),this.setLlistValue("mergItemList","uegentName",e)}else this.setData(a({},"errColect.uegentName","请输入紧急联系人姓名"))},urgentPhoneChange:function(e){if(e.trim())if(/^1[3456789]\d{9}$/.test(e)){var t;this.setData((a(t={},"formData.uegentPhone",e),a(t,"errColect.uegentPhone",""),t)),this.setLlistValue("mergItemList","uegentPhone",e)}else this.setData(a({},"errColect.uegentPhone","请输入正确的手机格式"));else this.setData(a({},"errColect.uegentPhone","请输入紧急联系人联系电话"))},urgentRelationPopup:function(e){var t=e.detail||{},a=t.label,i=t.value,n=t.key;this.setLlistValue("mergItemList",n,a),this.setData({"formData.uegentRelationShipDesr":a,"formData.uegentRelationShip":i})},bindIsHealthChange:function(e){var t=e.detail||{},a=t.label,i=t.value,n=t.key;this.setLlistValue("healthItemList",n,a),this.setData({"formData.healthDesr":a,"formData.health":i})},heightChange:function(e){var t="";e.trim()&&(t=/^([1-9]\d{2})(\.\d)?$/.test(e)?null:"身高输入格式不正确"),this.setData({"errColect.height":t,"formData.height":e}),this.setLlistValue("healthItemList","height",e)},weightChange:function(e){var t="";e.trim()&&(t=/^([1-9]\d{1,2})(\.\d)?$/.test(e)?null:"体重输入格式不正确"),this.setData({"errColect.weight":t,"formData.weight":e}),this.setLlistValue("healthItemList","weight",e)},bindBloodChange:function(e){var t=e.detail||{},a=t.label,i=t.value,n=t.key;this.setLlistValue("healthItemList",n,a),this.setData({"formData.bloodDesr":a,"formData.blood":i})},bindIsFamilyHistoryChange:function(e){this.inputCallback(e,"healthItemList","familyHistory")},choseGeelyRelation:function(t){var i=this,l=this.data.jlrelationBase[0].value,r=t.detail||{},o=r.label;r.value,r.key;if("有"===o){if("有"===l)return;this.setData({jlrelationAddHide:!1,relationList:[{name:"关系0",list:JSON.parse(JSON.stringify(D))}]}),this.setData(a({},"jlrelationBase[0].value",o))}else{if(this.setData({jlrelationAddHide:!0}),"无"===l)return;h.default.confirm({context:this,message:"确定不存在吉利关系",zIndex:1e3}).then((function(){i.setData(a({},"jlrelationBase[0].value",o)),wx.showLoading({title:"删除关系中",mask:!0}),i.data.relationList.forEach(function(){var t=n(e.default.mark((function t(a){return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.id){e.next=4;break}return e.next=3,d.default.relDetele(a.id);case 3:e.sent;case 4:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),wx.hideLoading({}),i.setData({relationList:[]})}))}},geelyRelationChange:function(e){console.log(e);var t=e.detail||{},a=t.label,i=t.value,n=(t.key,t.findex),l=this.data.relationList;l[n].list[1].value=a,l[n].list[1].code=i,this.setData({relationList:l})},emplNameInput:function(e,t){var a=(t.detail||{}).findex,i=this.data.relationList;i[a].list[0].value=e,this.setData({relationList:i})},companyNameInput:function(e,t){var a=(t.detail||{}).findex,i=this.data.relationList;i[a].list[2].value=e,this.setData({relationList:i})},positionInput:function(e,t){var a=(t.detail||{}).findex,i=this.data.relationList;i[a].list[3].value=e,this.setData({relationList:i})},savebasicCheck:function(){var e=this.getBaseInfo();if(e){var t=this.data,a=t.menItemList,i=t.identityItemList,n=t.linkItemList,l=t.mergItemList,r=t.healthItemList;a.map((function(e){return e.err=!1,e})),i.map((function(e){return e.err=!1,e})),n.map((function(e){return e.err=!1,e})),l.map((function(e){return e.err=!1,e})),r.map((function(e){return e.err=!1,e})),this.setData({menItemList:a,identityItemList:i,linkItemList:n,mergItemList:l,healthItemList:r}),this.triggerEvent("seterrevent",{index:0,tag:!1});var o=!0,s=this.data.formData||{},d=s.lastName,h=s.firstName,m=s.pyName,c=s.pySurname,p=s.foreignName,f=s.nickname,y=s.photoFile,g=s.birthday,D=s.nationalExpTime,v=s.sex,k=s.idCardFrontFileUrl,I=s.idCardBackFileUrl,C=s.idCardJustFileUrl,L=s.marital,b=s.birthplace,x=s.hukouType,w=s.hukouCode,N=s.hukouAdd,T=s.political,E=s.emplType,A=s.email,R=s.homeCode,_=s.homeAdd,S=s.uegentRelationShip,F=s.health,P=s.familyHistory,B=s.uegentName,U=s.uegentPhone,j=s.nation,O=s.nationalIdType,V=s.country,H=this.data.errColect||{},J=H.uegentName,z=H.uegentPhone,M=H.height,q=H.weight,$=this.selectComponent(".health"),G=$.data.bdCheck,Z="";if(!d||!d.trim()||d.length>14)Z=d&&d.length>14?"不得超过最大字符数14":"请输入姓",this.setErrCom("menItemList","lastName",0),o=!1;else if(!h||!h.trim()||h.length>14)Z=d&&d.length>14?"不得超过最大字符数14":"请输入名",this.setErrCom("menItemList","firstName",0),o=!1;else if(m&&m.trim())if(c&&c.trim())if(p&&p.trim()&&!/^[A-Za-z\s]+$/.test(p))Z="英文名格式不正确",this.setErrCom("menItemList","foreignName",0),o=!1;else if(f&&f.trim()&&/^[A-Za-z]{3,10}|^[\u4E00-\u9FA5]{2,4}$/.test(f))if(y&&y.fileUrl)if(1!=O||k&&I)if(1==O||C)if(1==O||g)if(1==O||D)if(1==O||v)if(j)if(L)if(b)if(x)if("CHN"!=V||w)if(N)if(T)if(E)if(A.trim()&&u.default.validZeekrEmail.test(A))if("CHN"!=V||R)if(_)if(!J&&B&&B.trim())if(!z&&U&&(U+"").trim()&&U!=e.contactInfo.phone)if(U&&!/^1[3456789]\d{9}$/.test(U))Z="请输入正确的手机号",this.setErrCom("mergItemList","uegentPhone",0),o=!1;else if(S)if("spouse"===S&&"single"===L)Z="未婚状态不可以选择配偶",this.setErrCom("mergItemList","uegentRelationShipDesr",0),o=!1;else if(F)if(M)Z=M,this.setErrCom("healthItemList","height",0),o=!1;else if(q)Z=q,this.setErrCom("healthItemList","weight",0),o=!1;else if(P)if(G.value){($.data.medicalReportDTOList||[]).length||(Z="请上传体检报告",this.setErrCom("healthItemList","body_check_report",0),o=!1)}else G.value||G.reason.trim()||(Z="请填写无体检报告理由",this.setErrCom("healthItemList","body_check_report",0),o=!1);else Z="请输入家族病史",this.setErrCom("healthItemList","familyHistory",0),o=!1;else Z="请选择健康状况",this.setErrCom("healthItemList","healthDesr",0),o=!1;else Z="请选择与紧急联系人关系",this.setErrCom("mergItemList","uegentRelationShipDesr",0),o=!1;else Z=z||"请输入紧急联系人联系电话",U==e.contactInfo.phone&&(Z="紧急联系人手机号不可与本人一致"),this.setErrCom("mergItemList","uegentPhone",0),o=!1;else Z=J||"请输入紧急联系人姓名",this.setErrCom("mergItemList","uegentName",0),o=!1;else Z="请输入详细地址",this.setErrCom("linkItemList","homeAdd",0),o=!1;else Z="请选择居住地",this.setErrCom("linkItemList","homeDescr",0),o=!1;else Z=A.trim()?"请输入正确格式":"请输入电子邮箱",this.setErrCom("linkItemList","email",0),o=!1;else Z="请选择人员类型",this.setErrCom("identityItemList","emplTypeDesr",0),o=!1;else Z="请选择政治面貌",this.setErrCom("identityItemList","politicalDesr",0),o=!1;else Z="请输入详细户籍地址",this.setErrCom("identityItemList","hukouAdd",0),o=!1;else Z="请选择户籍地址",this.setErrCom("identityItemList","hukouDescr",0),o=!1;else Z="请选择户籍类型",this.setErrCom("identityItemList","hukouTypeDesr",0),o=!1;else Z="请选择籍贯",this.setErrCom("identityItemList","birthplace",0),o=!1;else Z="请选择婚姻状况",this.setErrCom("identityItemList","maritalDesr",0),o=!1;else Z="请选择民族",this.setErrCom("identityItemList","nationDesr",0),o=!1;else Z="请选择性别",this.setErrCom("identityItemList","sexDesr",0),o=!1;else Z="请选择证件有效期",this.setErrCom("identityItemList","nationalExpTime",0),o=!1;else Z="请选择出生日期",this.setErrCom("identityItemList","birthday",0),o=!1;else Z="请上传证件照",this.setErrCom("identityItemList","nationalIdPhotoJustUrl",0),o=!1;else Z=k?"请上传身份证反面":"请上传身份证正面",this.setErrCom("identityItemList","upload-person-card",0),o=!1;else Z="请上传头像",this.setErrCom("menItemList","photoFile",0),o=!1;else Z=f&&f.trim()?"极酷之名要求2-4个中文或3-10个英文":"请输入极酷之名",this.setErrCom("menItemList","nickname",0),o=!1;else Z="请输入名",this.setErrCom("menItemList","pySurname",0),o=!1;else Z="请输入姓",this.setErrCom("menItemList","pyName",0),o=!1;return Z&&wx.showToast({icon:"none",title:Z}),o}},scrollToError:function(e){wx.createSelectorQuery().in(this.selectComponent("#"+e)).select(".comp-zform.err").boundingClientRect().selectViewport().scrollOffset().exec((function(e){wx.pageScrollTo({scrollTop:e[1].scrollTop+e[0].top-100,duration:400})}))},setErrCom:function(e,t,a){var i=this;console.log(e,t,a),this.setErrTarget(e,t),this.triggerEvent("seterrevent",{index:a}),wx.nextTick((function(){i.scrollToError(e,t)}))},setErrTarget:function(e,t){var i=this;this.data[e].forEach((function(n,l){n.key===t&&i.setData(a({},"".concat(e,"[").concat(l,"].err"),!0))}))},onAddRela:function(){var e=this.data.relationList;e=[].concat(i(e),[{name:"关系人".concat(e.length+2),list:JSON.parse(JSON.stringify(D))}]),this.setData(a({relationList:e},"jlrelationBase[0].value","有"))},handleDeleteRelation:function(e){var t=this,a=e.currentTarget.dataset,i=a.item,n=void 0===i?{}:i,l=a.index;n.id?h.default.confirm({context:this,message:"是否删除关系人",zIndex:1e3}).then((function(){wx.showLoading({title:"删除中",mask:!0}),d.default.relDetele(n.id).then((function(e){e&&"success"===e.code?(t.deletRelationNode(l),wx.showToast({icon:"none",title:"删除成功"})):wx.showToast({icon:"none",title:e.message})})).finally((function(){wx.hideLoading({success:function(e){}})}))})).catch((function(){})):this.deletRelationNode(l)},deletRelationNode:function(e){var t=this.data.relationList;t.splice(e,1),console.log(t),t&&t.length||this.setData(a({},"jlrelationBase[0].value","无")),this.setData({relationList:t})},renderJlrelation:function(){var t=this;return n(e.default.mark((function a(){var i,n,l,r;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.getBaseInfo()){e.next=3;break}return e.abrupt("return");case 3:n=wx.getStorageSync("dictObj"),i&&i.geelyRelInfo?(2==i.geelyRelInfo.hasGeelyRel&&t.setData({"jlrelationBase[0].value":"无",relationList:[]},(function(){setTimeout((function(){wx.hideLoading({})}),1e3)})),1==i.geelyRelInfo.hasGeelyRel&&(l=i&&i.geelyRelInfo&&i.geelyRelInfo.geelyInfoList?i.geelyRelInfo.geelyInfoList:[]).length&&(t.setData({jlrelationAddHide:!1}),r=[],l.forEach((function(e,t){var a=JSON.parse(JSON.stringify(D)),i=e.name,l=e.position,o=e.relationCode,s=e.workPlace,d=n.relationshipWith.find((function(e){return e.dicCode==o}));a[0].value=i,a[1].value=null==d?void 0:d.dicContentCn,a[1].code=o,a[2].value=s,a[3].value=l,r.push({name:"关系".concat(t),list:a,id:t})})),t.setData({"jlrelationBase[0].value":"有",relationList:r},(function(){setTimeout((function(){wx.hideLoading({})}),1e3)})))):t.setData({"jlrelationBase[0].value":"有",relationList:[{name:"关系1",list:JSON.parse(JSON.stringify(D))}]},(function(){setTimeout((function(){wx.hideLoading({})}),1e3)}));case 5:case"end":return e.stop()}}),a)})))()},getBaseInfo:function(){var e=wx.getStorageSync("baseInfo");if(e&&e.personId)return e;g&&g.personId?s.default.basicBasic({personId:g.personId}).then((function(t){return 0==t.head.code&&t.data?(wx.setStorageSync("baseInfo",t.data),e=t.data):(e=null,wx.showToast({title:t.head.message,complete:function(){wx.hideLoading()}})),e})):wx.navigateTo({url:"/pages/zlogin/zlogin"})},getAge:function(e){var t=new Date(e).getTime(),a=(new Date).getTime();return Math.ceil((a-t)/31536e6)}}}); 
 			}); 	require("pages/zimportInfo/tabs/tbasic/tbasic.js");
 		__wxRoute = 'pages/zimportInfo/tabs/tfamily/tfamily';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/zimportInfo/tabs/tfamily/tfamily.js';	define("pages/zimportInfo/tabs/tfamily/tfamily.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../@babel/runtime/helpers/objectSpread2"),e=m(require("../../../../@babel/runtime/regenerator")),a=require("../../../../@babel/runtime/helpers/asyncToGenerator"),i=require("../../../../@babel/runtime/helpers/defineProperty"),n=require("../../../../@babel/runtime/helpers/toConsumableArray"),r=m(require("../../../../api/apiCommon")),s=m(require("../../../../api/apiFamily")),l=m(require("../../../../api/apiBaseInfo")),o=m(require("@vant/weapp/dialog/dialog"));function m(t){return t&&t.__esModule?t:{default:t}}var d=[],c=[{name:"姓名",placeholder:"请输入姓名",key:"name"},{name:"关系",type:"select",placeholder:"选择关系",key:"relationShip"},{name:"国籍/地区",type:"select",placeholder:"请选择",key:"nationality",disabled:!1,disabledtext:"国籍/地区暂不支持修改",otherParams:{nationalIdType:"CHN",nationalIdTypeDesr:"中国"},value:"中国"},{name:"证件类型",type:"select",placeholder:"请选择证件类型",key:"nationalIdType",disabled:!1,disabledtext:"证件类型暂不支持修改",otherParams:{nationalIdType:"1",nationalIdTypeDesr:"居民身份证"},value:"居民身份证"},{name:"证件号",placeholder:"请输入证件号",key:"nationalId"},{name:"电话",inputType:"number",placeholder:"请输入电话",key:"phone"},{name:"性别",type:"select",placeholder:"请选择性别",key:"sex",disabled:!0,disabledtext:"性别暂不支持修改"},{name:"生日",type:"birthday",placeholder:"请选择",key:"birthday",disabled:!0,disabledtext:"生日暂不支持修改"}],u=getApp().globalData,f=function(){return r.default.fetchCountry({descr:""})};Component({options:{styleIsolation:"shared"},properties:{disabled:{type:Boolean}},data:{numberOptions:["一","二","三","四","五","六","七","八","九","十"],imgUrl:u.imgUrl,familySwitch:[{name:"是否添加家庭信息",type:"switch",openSwitch:!0,key:"isAddFamily"}],familyItemList:[{name:"",list:JSON.parse(JSON.stringify(c))}],personId:u.personId},lifetimes:{ready:function(){var t=this;Array.isArray(u.allArea)&&u.allArea.length?this.getData():f().then((function(e){e&&e.data&&(d.push.apply(d,n(e.data.map((function(t){return{label:t.regionName.cn,value:t.region}})))),u.allArea=d),t.getData()}))}},created:function(){var t=this;f().then((function(e){e&&e.data&&(d.push.apply(d,n(e.data.map((function(t){return{label:t.regionName.cn,value:t.region}})))),u.allArea=d),t.getData()}))},methods:{tabShow:function(){wx.pageScrollTo({scrollTop:0,duration:0})},onDeleteFamily:function(t){var e=this;o.default.confirm({context:this,message:"是否删除家庭投保信息",zIndex:1e3}).then((function(){var a=(t.currentTarget.dataset||{}).index;if(null!=a){e.data.familyItemList.splice(a,1),e.setData({familyItemList:n(e.data.familyItemList)}),e.data.familyItemList.length||e.setData({"familySwitch[0].openSwitch":!1})}})).catch((function(){}))},ontimerangeevent:function(t){var e=t.detail,a=e.findex,n=e.key,r=e.time,s=this.data.familyItemList[a].list.findIndex((function(t){return t.key==n}));~s&&(this.setData(i({},"familyItemList[".concat(a,"].list[").concat(s,"].value"),r)),this.setData(i({},"familyItemList[".concat(a,"].list[").concat(s,"].err"),!1)))},ontimesingleevent:function(t){var e=t.detail,a=e.key,n=e.time,r=e.findex,s=this.data.familyItemList[r].list.findIndex((function(t){return t.key==a}));~s&&(this.setData(i({},"familyItemList[".concat(r,"].list[").concat(s,"].value"),n)),this.setData(i({},"familyItemList[".concat(r,"].list[").concat(s,"].err"),!1)))},onselectEvent:function(t){var e=t.detail,a=e.findex,i=e.key,r=e.value,s=e.label,l=this.data.familyItemList[a].list.findIndex((function(t){return t.key==i}));if(~l&&(this.data.familyItemList[a].list[l].value=s,this.data.familyItemList[a].list[l].err=!1),this.data.familyItemList[a].otherParams||(this.data.familyItemList[a].otherParams={}),"nationalIdType"===i){var o=this.data.familyItemList[a].list.findIndex((function(t){return"sex"==t.key})),m=this.data.familyItemList[a].list.findIndex((function(t){return"birthday"==t.key})),d=this.data.familyItemList[a].list.findIndex((function(t){return"nationalId"==t.key}));this.data.familyItemList[a].list[m].value="",this.data.familyItemList[a].list[d].value="",this.data.familyItemList[a].list[o].value="",this.data.familyItemList[a].list[o].otherParams={},"1"===r?(this.data.familyItemList[a].list[o].disabled=!0,this.data.familyItemList[a].list[m].disabled=!0):(this.data.familyItemList[a].list[o].disabled=!1,this.data.familyItemList[a].list[m].disabled=!1)}switch(i){case"relationShip":this.data.familyItemList[a].otherParams.relationShip=r,this.data.familyItemList[a].otherParams.relationShipDesr=s;break;case"nationality":this.data.familyItemList[a].otherParams.nationality=r,this.data.familyItemList[a].otherParams.nationalityDesr=s;break;case"nationalIdType":this.data.familyItemList[a].otherParams.nationalIdType=r,this.data.familyItemList[a].otherParams.nationalIdTypeDesr=s;break;case"sex":this.data.familyItemList[a].otherParams.sex=r,this.data.familyItemList[a].otherParams.sexDesr=s}this.setData({familyItemList:n(this.data.familyItemList)})},oninputevent:function(t){var e=t.detail,a=e.findex,n=e.key,r=e.value;r=r.trim();var s=this.data.familyItemList[a].list.findIndex((function(t){return t.key==n})),l=this.data.familyItemList[a].list.find((function(t){return"nationalIdType"==t.key}));if(~s&&this.setData(i({},"familyItemList[".concat(a,"].list[").concat(s,"].value"),r)),!l||"1"===l.otherParams.nationalIdType){var o=r.length,m="";18==o?(m+=r[6]+r[7]+r[8]+r[9],m+="-".concat(r[10]+r[11],"-").concat(r[12]+r[13])):15==o&&(m=((m+=r[6]+r[7])<30?"20":"19")+m,m+="-".concat(r[10]+r[11],"-").concat(r[12]+r[13])),m&&this.ontimerangeevent({detail:{key:"birthday",time:m,findex:a}}),"nationalId"==n&&(m&&this.ontimerangeevent({detail:{key:"sex",label:m,value:"birthday",findex:a}}),18!=o&&15!=o||(15==o?this.onselectEvent({detail:{key:"sex",label:r[14]%2==1?"男":"女",value:r[14]%2==1?"M":"F",findex:a}}):this.onselectEvent({detail:{key:"sex",label:r[16]%2==1?"男":"女",value:r[16]%2==1?"M":"F",findex:a}})))}},getData:function(){var t=this;return a(e.default.mark((function a(){var i,n,r,s,l;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.getBaseInfo()){e.next=3;break}return e.abrupt("return");case 3:n=wx.getStorageSync("dictObj"),r=t.data.personId||u.personId,(s=i.familyInfo)&&2==s.hasFamily&&setTimeout((function(){t.setData({"familySwitch[0].openSwitch":!1,familyItemList:[]})}),0),s&&1==s.hasFamily&&s.familyInfoList.length&&(l=s.familyInfoList.map((function(t,e){var a=JSON.parse(JSON.stringify(c));return a.forEach((function(e){switch(e.key){case"relationShip":e.otherParams={relationShip:t.relationCode,relationShipDesr:t.relation},e.value=t.relation;break;case"nationality":var a=(u.allArea||[]).find((function(e){return e.value==t.nationality}));e.otherParams={nationality:t.nationality,nationalityDesr:null==a?void 0:a.label},e.value=null==a?void 0:a.label;break;case"nationalIdType":var i=(n.enum_national_type||[]).find((function(e){return e.dicCode==t.nationalIdType}));e.otherParams={nationalIdType:t.nationalIdType,nationalIdTypeDesr:i.dicContentCn},e.value=i.dicContentCn;break;case"sex":e.otherParams={sex:t.sex,sexDesr:"Male"==t.sex||"M"==t.sex?"男":"Female"==t.sex||"F"==t.sex?"女":""},e.value="Male"==t.sex||"M"==t.sex?"男":"Female"==t.sex||"F"==t.sex?"女":"";break;default:e.value=t[e.key]}})),{name:"",list:a,personId:r,id:t.id,ori:t}})),setTimeout((function(){t.setData({familyItemList:l})}),0));case 8:case"end":return e.stop()}}),a)})))()},onAddFamily:function(){var t=[].concat(n(this.data.familyItemList),[{name:"",list:JSON.parse(JSON.stringify(c))}]);this.setData({familyItemList:t})},onswitchEvent:function(){var t=this,e=this.data.familySwitch[0],a=e.openSwitch;a?o.default.confirm({context:this,message:"是否放弃家庭投保",zIndex:1e3}).then((function(){t.data.tempList=t.data.familyItemList,e.openSwitch=!a,t.setData({"familySwitch[0]":e,familyItemList:[]}),t.triggerEvent("seterrevent",{index:3,tag:!1})})):(e.openSwitch=!a,this.setData({"familySwitch[0]":e,familyItemList:[{name:"成员0",list:JSON.parse(JSON.stringify(c))}]}))},pageSubmit:function(){this.familySubmit()},familySubmit:function(){var i=this;return a(e.default.mark((function a(){var n,r,l,o,m,d,c,f,y,h,p,I,b,x,v;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=i.data.familyItemList).map((function(t){return t.list=t.list.map((function(t){return t.err=!1,t})),t})),i.setData({familyItemList:n}),i.triggerEvent("seterrevent",{index:3,tag:!1}),!0,r=!1,l=[],o=i.getBaseInfo()){e.next=10;break}return e.abrupt("return");case 10:if(m=o.contactInfo||{},d=m.phone,!i.data.familySwitch[0].openSwitch){e.next=94;break}c=0;case 13:if(!(c<i.data.familyItemList.length)){e.next=94;break}f=0;case 15:if(!(f<i.data.familyItemList[c].list.length)){e.next=91;break}y=i.data.familyItemList[c].list[f],h=y.key,p=i.data.familyItemList[c].list.find((function(t){return"nationalIdType"===t.key})),e.t0=h,e.next="name"===e.t0?22:"relationShip"===e.t0?27:"nationalId"===e.t0?33:"phone"===e.t0?47:"sex"===e.t0?63:"birthday"===e.t0?74:85;break;case 22:if(!(y.value&&y.value.length<2)){e.next=26;break}return i.setErrCom("familyItemList",c,y.key),wx.showToast({icon:"none",title:"名字长度不得小于2"}),e.abrupt("return",!1);case 26:return e.abrupt("break",85);case 27:if("配偶"!==y.value||!r){e.next=31;break}return i.setErrCom("familyItemList",c,y.key),wx.showToast({icon:"none",title:"家庭投保关系配偶只能有一个"}),e.abrupt("return",!1);case 31:return"配偶"===y.value&&(r=!0),e.abrupt("break",85);case 33:if(!y.value){e.next=42;break}if(!~l.indexOf(y.value)){e.next=38;break}return wx.showToast({icon:"none",title:"家庭投保身份证不可重复"}),i.setErrCom("familyItemList",c,y.key),e.abrupt("return",!1);case 38:return l.push(y.value),e.abrupt("break",85);case 42:if(y.value){e.next=47;break}return wx.showToast({icon:"none",title:"请输入投保成员证件号"}),i.setErrCom("familyItemList",c,y.key),e.abrupt("return",!1);case 47:if(y.value){e.next=53;break}return wx.showToast({icon:"none",title:"请输入电话"}),i.setErrCom("familyItemList",c,y.key),e.abrupt("return",!1);case 53:if(y.value!==d){e.next=59;break}return wx.showToast({icon:"none",title:"投保成员电话与本人一致"}),i.setErrCom("familyItemList",c,y.key),e.abrupt("return",!1);case 59:if(/^1[3456789]\d{9}$/.test(y.value)){e.next=63;break}return wx.showToast({icon:"none",title:"请输入正确的手机号码"}),i.setErrCom("familyItemList",c,y.key),e.abrupt("return",!1);case 63:if(y.value){e.next=74;break}if(!p||"1"!=p.otherParams.nationalIdType){e.next=70;break}return wx.showToast({icon:"none",title:"请输入有效证件号"}),i.setErrCom("familyItemList",c,"nationalId"),e.abrupt("return",!1);case 70:return wx.showToast({icon:"none",title:"请选性别"}),i.setErrCom("familyItemList",c,"sex"),e.abrupt("return",!1);case 73:return e.abrupt("break",85);case 74:if(y.value){e.next=85;break}if(!p||"1"!=p.otherParams.nationalIdType){e.next=81;break}return wx.showToast({icon:"none",title:"请输入有效证件号"}),i.setErrCom("familyItemList",c,"nationalId"),e.abrupt("return",!1);case 81:return wx.showToast({icon:"none",title:"请选择出生日期"}),i.setErrCom("familyItemList",c,"birthday"),e.abrupt("return",!1);case 84:return e.abrupt("break",85);case 85:if(y.value){e.next=88;break}return i.setErrCom("familyItemList",c,y.key),e.abrupt("return",!1);case 88:++f,e.next=15;break;case 91:++c,e.next=13;break;case 94:return I=[],b={hasFamily:2,personId:i.data.personId||u.personId,draftFlag:2,familyInfoList:[]},i.data.familySwitch[0].openSwitch&&(b.hasFamily=1,I=i.data.familyItemList.map((function(e){var a=e.list.reduce((function(t,e){return"nationality"===e.key?t[e.key]=e.otherParams.nationalIdType:t[e.key]=e.value,t}),{});if(e.list.forEach((function(t){if(t.otherParams)for(var e in t.otherParams)a[e]=t.otherParams[e]})),e.otherParams)for(var i in e.otherParams)a[i]=e.otherParams[i];return a=t(t({},e.ori),a)})),x=[],I.map((function(t){x.push({birthday:t.birthday,name:t.name,nationalId:t.nationalId,nationalIdType:t.nationalIdType,nationality:t.nationality,phone:t.phone,relation:t.relationShipDesr,relationCode:t.relationShip,sex:t.sex})})),b.familyInfoList=x),e.next=99,s.default.saveFamily(b);case 99:(v=e.sent)&&0==v.head.code?i.triggerEvent("submitAll",b):v.head.message?wx.showToast({title:v.head.message,icon:"none"}):wx.showToast({title:v.data[0].error,icon:"none"});case 101:case"end":return e.stop()}}),a)})))()},setErrCom:function(t,e,a){var i=this;this.setErrTarget(t,e,a),this.triggerEvent("seterrevent",{index:3}),wx.nextTick((function(){i.scrollToError(t,e)}))},scrollToError:function(t,e){wx.createSelectorQuery().in(this.selectComponent("#"+t+e)).select(".comp-zform.err").boundingClientRect().selectViewport().scrollOffset().exec((function(t){console.log(t),wx.pageScrollTo({scrollTop:t[1].scrollTop+t[0].top-100,duration:400})}))},setErrTarget:function(t,e,a){var n=this;this.data[t][e].list.forEach((function(r,s){r.key===a&&n.setData(i({},"".concat(t,"[").concat(e,"].list[").concat(s,"].err"),!0))}))},getBaseInfo:function(){var t=wx.getStorageSync("baseInfo");if(t&&t.personId)return t;u&&u.personId?l.default.basicBasic({personId:u.personId}).then((function(e){return 0==e.head.code&&e.data?(wx.setStorageSync("baseInfo",e.data),t=e.data):(t=null,wx.showToast({title:e.head.message,complete:function(){wx.hideLoading()}})),t})):wx.navigateTo({url:"/pages/zlogin/zlogin"})}}}); 
 			}); 	require("pages/zimportInfo/tabs/tfamily/tfamily.js");
 		__wxRoute = 'pages/zimportInfo/tabs/tpaycard/tpaycard';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/zimportInfo/tabs/tpaycard/tpaycard.js';	define("pages/zimportInfo/tabs/tpaycard/tpaycard.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=m(require("../../../../@babel/runtime/regenerator")),a=require("../../../../@babel/runtime/helpers/asyncToGenerator"),t=require("../../../../@babel/runtime/helpers/objectSpread2"),r=require("../../../../@babel/runtime/helpers/defineProperty"),n=require("../../../../@babel/runtime/helpers/toConsumableArray"),i=m(require("../../../../api/apiPaycard")),s=m(require("../../../../api/apiBaseInfo")),d=m(require("../../../../utils/formData/index")),o=m(require("@vant/weapp/dialog/dialog")),c=m(require("@vant/weapp/toast/toast")),l=require("../../utlis/weapp-jwt");function m(e){return e&&e.__esModule?e:{default:e}}var u=getApp(),h=u.globalData,k=require("../../../../env/index").baseUrl;Component({options:{styleIsolation:"shared"},properties:{disabled:{type:Boolean},hiddleToogle:{type:Boolean,default:!1},type:{type:String,default:""}},data:{bankData:{},depositBankList:[],cardItemList:[{name:"是否有工资卡",type:"switch",openSwitch:!0,key:"hasPayCard"}],cardItemAdd:[{name:"办理银行",type:"select",placeholder:"请选择工资发放银行",key:"bankName"},{name:"办理城市",type:"select",placeholder:"请选择办理城市",key:"bankAddress"},{name:"办理支行",type:"select",placeholder:"请选择办理支行",key:"depositBank"},{name:"开户名",placeholder:"请填写开户人姓名",key:"accountName"},{name:"银行卡照片",type:"upimg_switch",openSwitch:!0,hideSwitch:!0,key:"bankCardPhotoOssUrl"},{name:"银行卡卡号",placeholder:"请输入银行卡卡号",key:"bankCardNo"}],mailAddressItem:[{name:"邮寄地址",placeholder:"请选择邮寄地址",type:"select",key:"addressName"},{name:"详细地址",type:"textarea",placeholder:"请填写您的详细邮寄地址，具体到房间号",limit:50,key:"addressDetail",value:""}],hasBank:!1,bankListInfo:null,show:!1},lifetimes:{ready:function(){this.data.type&&"supplement"==this.data.type?this.setData({cardItemList:[{type:"supplement"}].concat(n(JSON.parse(JSON.stringify(this.data.cardItemAdd))))}):this.getUserBank()}},methods:{getPreviewUrl:function(e){if(e&&-1!==e.indexOf("url=")){var a=e.split("url=");return(0,l.weAtob)(a[1])}return e},oninputEventSelf:function(e){var a=this,t=e.detail||{},n=t.key,i=t.value;console.log(n,i,"key, value"),this.data.cardItemList.forEach((function(e,t){n===e.key&&a.setData(r({},"cardItemList[".concat(t,"].value"),i)),"accountName"===n&&(a.data.bankData.accountName=i),"bankCardNo"===n&&(a.data.bankData.cardNumber=i)})),"addressDetail"===n&&this.setData(r({},"mailAddressItem[1].value",i))},onselectEvent:function(e){var a=this,n=e.detail||{},i=n.label,s=n.value,d=n.key,o=n.values,c=void 0===o?[]:o,l=n.el,m=void 0===l?{}:l;if("addressName"===d&&c.length){var u,h="",k="";c.map((function(e){h+=e.name,k+=e.code+"-"})),this.setData((r(u={},"mailAddressItem[0].value",h),r(u,"mailAddressItem[0].code",k.slice(0,-1)),u))}("bankName"===d||"bankAddress"===d&&c.length)&&this.data.cardItemList.forEach((function(e,n){if("depositBank"===e.key){var i=a.data.cardItemList[n];i=t(t({},i),{},{code:"",value:""}),a.data.bankData.branchBankCode="",a.data.bankData.branchBankName="",a.setData(r({},"cardItemList[".concat(n,"]"),i))}})),this.data.cardItemList.forEach((function(e,n){if(d===e.key){var o,l,u,h,k=a.data.cardItemList[n];if("bankAddress"===d){if(c.length>0)k=t(t({},k),{},{cityName:(null===(o=c[1])||void 0===o?void 0:o.name)||"",provinceName:null===(l=c[0])||void 0===l?void 0:l.name,value:[null===(u=c[0])||void 0===u?void 0:u.name,null===(h=c[1])||void 0===h?void 0:h.name].filter((function(e){return e})).join("-")}),2===c.length&&c[1]?a.data.bankData=t(t({},a.data.bankData),{},{city:c[1].code,cityName:c[1].name,province:c[0].code,provinceName:c[0].name}):a.data.bankData=t(t({},a.data.bankData),{},{city:c[0].code,cityName:c[0].name,province:"",provinceName:""})}else k=t(t({},k),{},{code:s,value:i}),"depositBank"===d&&(a.data.bankData=t(t({},a.data.bankData),{},{branchBank:s,branchBankCode:s,branchBankName:i,city:m.city,cityName:m.cityName.cn,province:m.province,provinceName:m.provinceName.cn})),"bankName"===d&&(a.data.bankData.bankName=i,a.data.bankData.bankCode=s);a.setData(r({},"cardItemList[".concat(n,"]"),k))}}))},onselectZhihangBeforeEvent:function(e){var a=this,t=e.detail||{},r=(t.label,t.value,t.key);t.values;this.data.cardItemList.forEach((function(e,t){if(r===e.key){a.data.cardItemList[t];"depositBank"===r&&a.dealDepositBank()}}))},dealDepositBank:function(){var t=this;return a(e.default.mark((function a(){var r,n,s,d,o,c;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.data.bankData,n=r.province,s=r.city,d=r.bankName,o=r.bankCode,d&&(s||n)){e.next=5;break}t.myToast("请先选择办理银行和办理城市"),e.next=11;break;case 5:return e.next=7,i.default.getBankBranch(s||n,o);case 7:(c=e.sent)&&c.data&&c.data.length?t.setData({depositBankList:c.data}):t.setData({depositBankList:[]}),t.selectComponent(".paycard-zform").showZhihangPicker();case 11:case"end":return e.stop()}}),a)})))()},onswitchEvent:function(){var e=this,a=this.data.cardItemList[0],t=a.openSwitch;t?o.default.confirm({context:this,message:"是否删除工资卡",zIndex:1e3}).then((function(){a.openSwitch=!t,e.data.hasBank?(e.data.bankData.bankName=e.data.bankCardInfo.zyhmc,e.data.bankData.bankCode=e.data.bankCardInfo.bnklz,e.setData({cardItemList:[a,{name:"办理银行",type:"select",placeholder:"请选择工资发放银行",key:"bankName",disabled:!0,value:e.data.bankCardInfo.zyhmc}],show:!0})):e.setData({cardItemList:[a],show:!1}),e.triggerEvent("seterrevent",{index:2,tag:!1})})):(a.openSwitch=!t,this.setData({cardItemList:[a].concat(n(JSON.parse(JSON.stringify(this.data.cardItemAdd)))),show:!1,mailAddressItem:[{name:"邮寄地址",placeholder:"请选择邮寄地址",type:"select",key:"addressName"},{name:"详细地址",type:"textarea",placeholder:"请填写您的详细邮寄地址，具体到房间号",limit:50,key:"addressDetail",value:""}]}))},onSingleImg:function(e){var a=this,r=(e.detail||{}).imgValue;if(!r){var n=this.data.cardItemList[5];return n=t(t({},n),{},{fileList:"",value:""}),this.setData({"cardItemList[5]":n,"cardItemList[6].value":""}),void wx.hideLoading({})}wx.showLoading({title:"上传中"});var i="".concat(k,"/ssc/income/base/bankcardOcr"),s=new d.default,o=r.tempFiles[0].tempFilePath,c=o.split(".");s.appendFile("file",o);var l=s.getData();wx.request({url:i,header:{"content-type":l.contentType,"x-access-token":u.globalData.usertoken},method:"post",data:l.buffer,success:function(e){var r,n;if(0==(null==e||null===(r=e.data)||void 0===r||null===(n=r.head)||void 0===n?void 0:n.code)){var i=e.data.data;a.setData({"cardItemList[6].value":i.cardNumber});var s={fileDetailOssUrl:i.uid,fileName:i.fileName,fileSize:"",fileType:c[1],fileUrl:a.getPreviewUrl(i.url),sortOrder:"",uid:i.uid},d=a.data.cardItemList[5];d=t(t({},d),{},{fileList:s,value:a.getPreviewUrl(i.url)}),a.setData({"cardItemList[5]":d,bankData:t(t({},a.data.bankData),{},{cardFileId:i.uid,cardNumber:i.cardNumber})}),wx.hideLoading({})}else a.myToast(e.data.head.message),wx.hideLoading({})},fail:function(){wx.hideLoading({})}})},getUserBank:function(){var r=this;return a(e.default.mark((function a(){var s,d,o,c,l,m,h,k;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=!1,e.next=3,i.default.getBankList({personId:u.globalData.personId});case 3:if(d=e.sent,(o=(d.data||[]).filter((function(e){return 1==e.hasContractBank}))).length>0&&(s=!0,r.setData({hasBank:s,bankCardInfo:t(t({},o[0]),{},{url:r.getPreviewUrl(o[0].qrUrl.url)})})),c=r.getBaseInfo()){e.next=9;break}return e.abrupt("return");case 9:l=c.bankCardInfo,(m=void 0===l?null:l)?m.hasBankCard?1==m.hasBankCard?(r.setData({bankData:m}),h=r.getPreviewUrl(m.cardFile.url),k=[{name:"是否有工资卡",type:"switch",openSwitch:!0,key:"hasPayCard"},{name:"办理银行",type:"select",placeholder:"请选择工资发放银行",key:"bankName",value:m.bankName},{name:"办理城市",type:"select",placeholder:"请选择办理城市",key:"bankAddress",value:m.provinceName+"-"+m.cityName},{name:"办理支行",type:"select",placeholder:"请选择办理支行",key:"depositBank",value:m.branchBankName},{name:"开户名",placeholder:"请填写开户人姓名",key:"accountName",value:m.accountName},{name:"银行卡照片",type:"upimg_switch",openSwitch:!0,hideSwitch:!0,key:"bankCardPhotoOssUrl",value:h},{name:"银行卡卡号",placeholder:"请输入银行卡卡号",key:"bankCardNo",value:m.cardNumber}],r.setData({cardItemList:k})):r.data.hasBank?(r.data.bankData.bankName=m.bankName?m.bankName:"",r.data.bankData.bankCode=m.bankCode?m.bankCode:"",r.setData({cardItemList:[{name:"是否有工资卡",type:"switch",openSwitch:!1,key:"hasPayCard"},{name:"办理银行",type:"select",placeholder:"请选择工资发放银行",key:"bankName",disabled:!!m.bankName,value:m.bankName}],show:!0,mailAddressItem:[{name:"邮寄地址",placeholder:"请选择邮寄地址",type:"select",key:"addressName",value:m.addressName,code:m.addressCode},{name:"详细地址",type:"textarea",placeholder:"请填写您的详细邮寄地址，具体到房间号",limit:50,key:"addressDetail",value:m.addressDetail}]})):r.setData({cardItemList:[{name:"是否有工资卡",type:"switch",openSwitch:!1,key:"hasPayCard"}],show:!1}):r.setData({cardItemList:[{name:"是否有工资卡",type:"switch",openSwitch:!0,key:"hasPayCard"}].concat(n(JSON.parse(JSON.stringify(r.data.cardItemAdd))))}):setTimeout((function(){r.setData({cardItemList:[{name:"是否有工资卡",type:"switch",openSwitch:!0,key:"hasPayCard"}].concat(n(JSON.parse(JSON.stringify(r.data.cardItemAdd))))})}),0);case 11:case"end":return e.stop()}}),a)})))()},setErrNoList:function(e,a){var t=this;this.setData(r({},"".concat(e,"[").concat(a,"].err"),!0)),this.triggerEvent("seterrevent",{index:2}),wx.nextTick((function(){t.scrollToError(e)}))},scrollToError:function(e){wx.createSelectorQuery().in(this.selectComponent("#"+e)).select(".comp-zform.err").boundingClientRect().selectViewport().scrollOffset().exec((function(e){wx.pageScrollTo({scrollTop:e[1].scrollTop+e[0].top-100,duration:400})}))},handleForm:function(){var e=this.data.cardItemList[0].openSwitch;"supplement"==this.data.type&&(e=!0);var a={draftFlag:2,hasBankCard:2};if(e){var r=this.data.cardItemList,n=this.data.cardItemList;n.map((function(e){return e.err=!1,e})),this.setData({cardItemList:n}),this.triggerEvent("seterrevent",{index:2,tag:!1});for(var i="",s=!0,d=0,o=r.length;d<o;d++){var c=r[d],l=d,m=c.key;if("bankName"===m){if(!c.value){s=!1,i="请选择工资发放银行",this.setErrNoList("cardItemList",l);break}}else{if("bankAddress"===m&&!c.value){s=!1,i="请选择办理地点",this.setErrNoList("cardItemList",l);break}if("depositBank"===m&&!c.value){s=!1,i="请选择办理支行",this.setErrNoList("cardItemList",l);break}if("accountName"===m&&!c.value){s=!1,i="请输入开户名",this.setErrNoList("cardItemList",l);break}if("bankCardPhotoOssUrl"===m&&!c.value){s=!1,i="请上传工资卡图片",this.setErrNoList("cardItemList",l);break}if("bankCardNo"===m&&!c.value){s=!1,i="请输入卡号",this.setErrNoList("cardItemList",l);break}}}if(!s)return this.myToast(i),void this.triggerEvent("seterrevent",{index:2});(a=t(t({},this.data.bankData),{},{hasBankCard:1,draftFlag:2})).branchBank=a.branchBank?a.branchBank:a.branchBankCode?a.branchBankCode:"",a.branchBankCode=a.branchBank?a.branchBank:a.branchBankCode?a.branchBankCode:"",delete a.cardFile}else if(this.data.hasBank){var u=this.data.mailAddressItem;u.map((function(e){return e.err=!1,e})),this.setData({mailAddressItem:u}),this.triggerEvent("seterrevent",{index:2,tag:!1});for(var h="",k=!0,p=this.data.mailAddressItem,b=0,f=p.length;b<f;b++){var v=p[b],y=b,g=v.key;if("addressName"===g){if(!v.value){k=!1,h="请选择邮寄地址",this.setErrNoList("mailAddressItem",y);break}a.addressName=v.value,a.addressCode=v.code}else if("addressDetail"===g){if(!v.value){k=!1,h="请填写详细地址",this.setErrNoList("mailAddressItem",y);break}a.addressDetail=v.value}}if(!k)return this.myToast(h),void this.triggerEvent("seterrevent",{index:2});a.bankName=this.data.bankData.bankName,a.bankCode=this.data.bankData.bankCode}return a},pageSubmit:function(t){var r=this;return a(e.default.mark((function a(){var n,s,d;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.handleForm()){e.next=3;break}return e.abrupt("return");case 3:return wx.showLoading({title:"保存中",mask:!0}),e.next=6,i.default.bankUpdate(n);case 6:if(!(s=e.sent)||0!=s.head.code){e.next=15;break}if(wx.hideLoading({}),!t||"all"!==t.tag){e.next=12;break}return r.triggerEvent("submitAllNextTabOver"),e.abrupt("return");case 12:d=setTimeout((function(){clearTimeout(d),r.triggerEvent("nextevent")}),500),e.next=16;break;case 15:s.head.message?r.myToast(s.head.message):r.myToast(s.data[0].error);case 16:case"end":return e.stop()}}),a)})))()},tabShow:function(){wx.pageScrollTo({scrollTop:0,duration:0})},myToast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";(0,c.default)({context:this,zIndex:1e3,duration:3e3,message:e})},getBaseInfo:function(){var e=wx.getStorageSync("baseInfo");if(e&&e.personId)return e;h&&h.personId?s.default.basicBasic({personId:h.personId}).then((function(a){return 0==a.head.code&&a.data?(wx.setStorageSync("baseInfo",a.data),e=a.data):(e=null,wx.showToast({title:a.head.message,complete:function(){wx.hideLoading()}})),e})):wx.navigateTo({url:"/pages/zlogin/zlogin"})}}}); 
 			}); 	require("pages/zimportInfo/tabs/tpaycard/tpaycard.js");
 		__wxRoute = 'pages/zimportInfo/tabs/tperson/tperson';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/zimportInfo/tabs/tperson/tperson.js';	define("pages/zimportInfo/tabs/tperson/tperson.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../../../@babel/runtime/helpers/Arrayincludes");var e=require("../../../../@babel/runtime/helpers/slicedToArray"),t=require("../../../../@babel/runtime/helpers/toConsumableArray"),a=require("../../../../@babel/runtime/helpers/defineProperty"),i=p(require("../../../../@babel/runtime/regenerator")),n=require("../../../../@babel/runtime/helpers/asyncToGenerator"),o=require("../../../../@babel/runtime/helpers/objectSpread2"),r=p(require("../../../../utils/formData/index")),s=p(require("../../../../api/apiEducation")),l=p(require("../../../../api/apiCommon")),c=p(require("../../../../api/apiBaseInfo")),u=require("../../utlis/weapp-jwt"),d=p(require("@vant/weapp/dialog/dialog")),h=p(require("@vant/weapp/toast/toast")),f=require("../../utlis/constant");function p(e){return e&&e.__esModule?e:{default:e}}var g=[{name:"学校名称",type:"select",placeholder:"请选择学校名称",desc:"若选项中无您的学校名，请选择“其他”后手动输入您的学校名",key:"school"},{name:"专业",placeholder:"请输入专业",key:"major"},{name:"开始-结束时间",type:"rangeTime",key:"time_start_end"},{name:"教育程度",type:"select",placeholder:"请选择教育程度",key:"eduLevel",mj_type:"degree"},{name:"学历证明",type:"upimg_switch",openSwitch:!0,desc:"*若学历证书遗失或未取到毕业证书请上传学信网电子学历备案表（以代替毕业证）",key:"qualificationFiles",content:""},{name:"学位证明",type:"upimg_switch",openSwitch:!0,key:"majorFiles"},{name:"是否双学位",type:"switch",openSwitch:!1,key:"isDoubleDegree"}],m=[{name:"学校名称",type:"select",placeholder:"请选择学校名称",desc:"若选项中无您的学校名，请选择“其他”后手动输入您的学校名",key:"school"},{name:"专业",placeholder:"请输入专业",key:"major"},{name:"开始-结束时间",type:"rangeTime",key:"time_start_end"},{name:"教育程度",type:"select",placeholder:"请选择教育程度",key:"eduLevel",mj_type:"degree"},{name:"学历证明",type:"upimg_switch",openSwitch:!0,desc:"*若学历证书遗失或未取到毕业证书请上传学信网电子学历备案表（以代替毕业证）",key:"qualificationFiles"},{name:"学位证明",type:"upimg_switch",openSwitch:!0,key:"majorFiles"}],y=[{name:"第二学位专业",placeholder:"请输入第二学位专业",key:"majorDouble"},{name:"学位证明",type:"upimg_switch",openSwitch:!0,key:"majorDoubleFiles"}],v=[{name:"开始-结束时间",type:"rangeTime",key:"time_work_start_end"},{name:"公司名称",placeholder:"请输入公司名称",key:"company"},{name:"职务",placeholder:"请输入职务",key:"position"}],D=[{name:"语言类型",type:"select",placeholder:"请选择语言类型",key:"languageDesc",mj_type:"language_status"},{name:"口语",type:"select",placeholder:"请选择",key:"speakingDesc",mj_type:"speaking_status"},{name:"阅读",type:"select",placeholder:"请选择",key:"readingDesc",mj_type:"reading_status"},{name:"写作",type:"select",placeholder:"请选择",key:"writingDesc",mj_type:"writing_status"}],k=[{name:"首次工作时间",type:"select",placeholder:"请选择",key:"firstWorkTime"}],w=[{name:"首次工作时间",type:"select",placeholder:"请选择",key:"firstWorkTime"},{name:"有无离职证明",type:"switch",openSwitch:!0,key:"haveleavingCertification"},{name:"离职证明",type:"upimg_switch",openSwitch:!0,hideSwitch:!0,key:"leavingCertification"}],L={"统招":"TZ","非统招":"FTZ"},S={"全日制":"QRZ","非全日制":"FQRZ"},T=getApp(),b=T.globalData,I=require("../../../../env/index").baseUrl,_=["primarySchool","juniorHighSchool","highSchool","junior","undergraduate","masterofUnified","doctor"];Component({properties:{actTab:{type:Number},disabled:{type:Boolean},hidden:{type:Boolean}},data:{baseInfo:{},imgUrl:b.imgUrl,numberOptions:["一","二","三","四","五","六","七","八","九","十"],eduList:[{name:"学校1",list:JSON.parse(JSON.stringify(g))}],educationDTOList:[],eduBottom:[{name:"学校名称",type:"select",placeholder:"请选择学校名称",desc:"若选项中无您的学校名，请选择“其他”后手动输入您的学校名",key:"1"},{name:"专业",placeholder:"请输入专业",key:"2"},{name:"开始-结束时间",type:"rangeTime",key:"3"},{name:"学历证明",type:"upimg_switch",openSwitch:!0,desc:"*若学历证书遗失或未取到毕业证书请上传学信网电子学历备案表（以代替毕业证）",key:"6"},{name:"学位证明",type:"upimg_switch",openSwitch:!0,key:"7"},{name:"学信网学历证明",type:"upimg_switch",openSwitch:!0,key:"8"},{name:"是否双学位",type:"switch",openSwitch:!1,key:"9"}],eduBottomShow:!1,workToggle:[{name:"是否填写工作信息",type:"switch",openSwitch:!0,key:"has_work_info"}],workList:[{name:"",list:JSON.parse(JSON.stringify(v))}],workBase:[],langBase:[{name:"是否掌握其他语言技能",type:"switch",openSwitch:!0,key:"lang_base"}],languageList:[{name:"语言1",list:JSON.parse(JSON.stringify(D))}],otherItemList:[{name:"荣誉或资格证书",type:"up_file",btnText:"上传证书文件",key:"lastName25"}],chooseSchoolVisible:!1,searchSchoolInput:"",searchSchoolList:[],schoolList:[],graduatesType:"social_recruitment_type",worksFormData:[],workHidden:!1,filterStr:""},observers:{eduList:function(e,t){}},lifetimes:{ready:function(){var e=this.getBaseInfo();if(e){this.data.baseInfo=e,this.resetBaseInfo();var t="social_recruitment_type"===e.identityInfo.personType?w:"student_type"==e.identityInfo.personType?k:[];this.setData({eduList:[{name:"学校1",list:JSON.parse(JSON.stringify("worker_type"===e.identityInfo.personType?m:g))}],graduatesType:e.identityInfo.personType,workBase:t.concat([])}),this.initPage()}}},methods:{resetBaseInfo:function(){var e=this.getBaseInfo();if(e){var t={emplInDTO:{emplType:(e.identityInfo||{}).personType||"social_recruitment_type",id:e.personId,proEmployTime:"2032-09-09"}};this.data.baseInfo=o(o({},e),t)}},getPreviewUrl:function(e){if(e&&-1!==e.indexOf("url=")){var t=e.split("url=");return(0,u.weAtob)(t[1])}return e},refreshData:function(){var e=this;return n(i.default.mark((function t(){var a,n;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(wx.pageScrollTo({scrollTop:0,duration:0}),a=e.getBaseInfo()){t.next=4;break}return t.abrupt("return");case 4:e.data.graduatesType!==a.identityInfo.personType&&(n="social_recruitment_type"==a.identityInfo.personType?w:"student_type"==a.identityInfo.personType?k:[],e.setData({baseInfo:a,eduList:[{name:"学校1",list:JSON.parse(JSON.stringify("worker_type"===a.identityInfo.personType?m:g))}],graduatesType:a.identityInfo.personType,workBase:n.concat([])}),e.initPage());case 5:case"end":return t.stop()}}),t)})))()},onselectEvent:function(e){console.log("onselectEvent",e);var t=e.detail,a={school:"showChoseSchool",recruitDesc:"recruitTypeChange",eduLevel:"eduLevelChange",learnTypeDesc:"learnTypeChange",languageDesc:"languageChange",speakingDesc:"speakingChange",readingDesc:"readingChange",writingDesc:"writingChange",eduType:"eduTypeChange",leavingCertificationEmptyType:"leavingCertificationEmptyTypeChange"};this[a[t.key]]&&this[a[t.key]](e)},eduLevelChange:function(e){var t=e.detail||{},i=t.key,n=t.label,r=t.value,s=t.findex,l=this.setListValue(this.data.eduList[s].list,i,{value:r,label:n});l=l.filter((function(e){return"majorFiles"!==e.key&&"isDoubleDegree"!==e.key&&"majorFiles"!==e.key&&"majorDouble"!==e.key&&"majorDoubleFiles"!==e.key})),["primarySchool","juniorHighSchool","highSchool","juniorPU","juniorFN","juniorUP","junior"].includes(r)||("worker_type"===this.data.graduatesType?l.push({name:"学位证明",type:"upimg_switch",openSwitch:!0,key:"majorFiles"}):l.push({name:"学位证明",type:"upimg_switch",openSwitch:!0,key:"majorFiles"},{name:"是否双学位",type:"switch",openSwitch:!1,key:"isDoubleDegree"})),this.setData(a({},"eduList[".concat(s,"]"),o(o({},this.data.eduList[s]),{},{list:l})))},oninputEventSelf:function(e){var t=e.detail.key,a={major:"majorChange",schoolOther:"schoolOtherChange",majorDouble:"majorDoubleInput",company:"companyInput",position:"positionInput"};console.log("oninputEventSelf",e),this[a[t]]&&this[a[t]](e.detail)},showChoseSchool:function(e){var t=this;return n(i.default.mark((function a(){var n,o,r,l,c,u,d;return i.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=e.detail||{},o=n.findex,t.data.chooseSchoolIndex=o,r={descr:""},wx.showLoading({title:"加载中",mask:!0}),l=[],c=!1,!t.data.schoolList||!t.data.schoolList.length){a.next=10;break}l=t.data.schoolList,a.next=18;break;case 10:return a.next=12,s.default.schoolList(r);case 12:u=a.sent,d=u.data,(l=(void 0===d?[]:d).map((function(e){return{label:e.schoolName,value:e.schoolCode}}))).unshift({label:"其他（若列表中无您的学校，请选择“其他”后输入学校名称）",value:"ZDY_other"}),c=!0;case 18:t.setData({chooseSchoolVisible:!0,searchSchoolList:l,schoolList:l}),setTimeout((function(){wx.hideLoading({})}),c?1300:300);case 20:case"end":return a.stop()}}),a)})))()},searchSchoolChange:function(e){console.log("searchSchoolChange",e);var t,a=e.detail.value.trim(),i=this.data.schoolList;a?(t=i.filter((function(e){return e.label.indexOf(a)>-1})),"其他".indexOf(a)<0&&t.unshift({label:"其他（若列表中无您的学校，请选择“其他”后输入学校名称）",value:"ZDY_other"}),this.setData({searchSchoolList:t,searchSchoolInput:a})):this.setData({searchSchoolList:i,searchSchoolInput:a})},hideChooseSchool:function(){this.setData({searchSchoolInput:void 0,chooseSchoolVisible:!1})},chooseSchool:function(e){console.log("chooseSchool",e);var t=e.currentTarget.dataset,i=t.value,n=t.label,r=this.data.chooseSchoolIndex,s=this.setListValue(this.data.eduList[r].list,"school",{value:i,label:n.indexOf("其他")>=0?"其他":n});if(s=s.filter((function(e){return"其他学校名称"!=e.name})),"ZDY_other"===i){s.splice(1,0,{name:"其他学校名称",placeholder:"请输入学校名称",key:"schoolOther"})}this.setData(a({},"eduList[".concat(r,"]"),o(o({},this.data.eduList[r]),{},{list:s}))),this.hideChooseSchool()},setListValue:function(e,t,a){return e.forEach((function(e){if(e.key===t){var i=a.value,n=void 0===i?"":i,o=a.label;e.value=o,e.code=n}})),e},onAddScholl:function(){var e=[].concat(t(this.data.eduList),[{name:"学校"+(this.data.eduList.length+1),list:JSON.parse(JSON.stringify("worker_type"===this.data.graduatesType?m:g))}]);this.setData({eduList:e})},handleDeleteSchool:function(e){var t=this,a=e.currentTarget.dataset.index,i=this.data.eduList,n=i[a];n.id?d.default.confirm({context:this,message:"是否删除学校",zIndex:1e3}).then((function(){s.default.eduDelete(n.id).then((function(e){i.splice(a,1),t.setData({eduList:i})}))})).catch((function(){})):(i.splice(a,1),this.setData({eduList:i}))},handleDeleteLang:function(e){var t=e.currentTarget.dataset||{},a=t.index,i=t.item;i.id&&s.default.lanDelete(i.id).then((function(e){}));var n=this.data.languageList;n.splice(a,1),this.setData({languageList:n}),n.length||this.setData({"langBase[0].openSwitch":!1})},majorChange:function(e){var t=e.findex,i=e.key,n=e.value,r=this.setListValue(this.data.eduList[t].list,i,{label:n});this.setData(a({},"eduList[".concat(t,"]"),o(o({},this.data.eduList[t]),{},{list:r})))},majorDoubleInput:function(e){this.majorChange(e)},schoolOtherChange:function(e){this.majorChange(e)},ontimerangeChange:function(e){var t=this,i=(e.target.dataset||{}).tkey,n=void 0===i?"eduList":i,r=e.detail||{},s=r.findex,l=r.time,c=r.timeType,u=r.key,d={start:"startDate",end:"endDate"},h=wx.getStorageSync("dictObj"),f=this.data[n][s].list.find((function(e){return"eduLevel"===e.key}));if(f&&f.code){var p=h.degree.findIndex((function(e){return e.dicCode===f.code}));if("eduList"===n&&"time_start_end"===u&&"end"===c&&p>6)if(this.timeBeforeAfter(l,new Date)){if(this.data[n][s].list.findIndex((function(e){return"majorFiles"===e.key}))<0){var g=this.data[n][s].list.findIndex((function(e){return"qualificationFiles"===e.key}));this.data[n][s].list.splice(g+1,0,{name:"学位证明",type:"upimg_switch",openSwitch:!0,key:"majorFiles"})}}else this.data[n][s].list=this.data[n][s].list.filter((function(e){return"majorFiles"!==e.key}))}this.data[n][s].list.forEach((function(e,a){e.key===u&&(t.data[n][s].list[a][d[c]]=l)})),this.setData(a({},"".concat(n,"[").concat(s,"]"),o(o({},this.data[n][s]),{},{list:this.data[n][s].list})))},recruitTypeChange:function(e){var t=e.detail||{},i=t.key,n=t.label,r=t.value,s=t.findex,l=(t.index,this.setListValue(this.data.eduList[s].list,i,{value:r,label:n}));this.data.eduList[s]=o(o({},this.data.eduList[s]),{},{list:l});var c=JSON.parse(JSON.stringify(this.data.eduList));if(this.setData({eduList:c}),"recruitDesc"===i||"learnTypeDesc"===i){this.getFilterEduList(s);var u=this.data.eduList[s].list;u.forEach((function(e){"eduType"===e.key&&(e.value="",e.code="")})),this.setData(a({},"eduList[".concat(s,"].list"),u))}},getFilterEduList:function(e){var t="",a="";if(this.data.eduList[e].list.forEach((function(e){"recruitDesc"===e.key&&(t=e.value),"learnTypeDesc"===e.key&&(a=e.value)})),t&&a){var i=[L[t],S[a]].join("_");this.setData({filterStr:i})}},dictData:function(){var t=this;return n(i.default.mark((function a(){var n,o,r,s,c,u,d,h,f,p,g,m,y;return i.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o={parentKey:(n=["degree","education_type_list","learning_type_list","recruit_type_list","language_type_list","spoken_type_list","read_type_list","writing_type_list"]).join()},a.next=4,l.default.dictionaryData(o);case 4:r=a.sent,(s=r.data)&&s.length&&(c=n.map((function(e){return s[0][e].map((function(e){return{label:e.description.cn,value:e.key,ps:e.description.ps}}))})),u=e(c,7),d=u[0],h=u[1],f=u[2],p=u[3],g=u[4],m=u[5],y=u[6],t.setData({degreeOptions:d,learnTypeOptions:h,recruitTypeOptions:f,languageOptions:p,speakOptions:g,readOptions:m,writeOptions:y}));case 7:case"end":return a.stop()}}),a)})))()},learnTypeChange:function(e){this.recruitTypeChange(e)},eduTypeChange:function(e){this.recruitTypeChange(e)},qualificationFilesChange:function(e){console.log(e)},onSwitchEvent:function(e){var a=e.detail,i=a.findex,n=a.index,o=a.item,r=this.data.eduList,s=r[i].list[n].openSwitch;if(o&&"isDoubleDegree"===o.key)if(s)r[i].list=r[i].list.slice(0,-2);else{var l=[].concat(t(r[i].list),t(y.concat([])));r[i].list=l}r[i].list[n].openSwitch=!s,this.setData({eduList:r})},onSingleImg:function(e,t){var i=this,n="".concat(I,"/ssc/income/file/uploadFile"),o=e.detail||{},s=o.findex,l=o.imgValue,c=(o.key,o.type,o.index);if(!l){var u=this.data.eduList[s].list[c];return u.value="",u.fileList="",void this.setData(a({},"eduList[".concat(s,"].list[").concat(c,"]"),u))}var d=new r.default,h=l.tempFiles[0].tempFilePath;d.appendFile("file",h,"文件名");var f=d.getData();wx.request({url:n,header:{"content-type":f.contentType,"x-access-token":T.globalData.usertoken},method:"post",data:f.buffer,success:function(e){var n=(e.data||{}).hasError;if(200===e.statusCode&&!1===n){var o,r=e.data.data,l=r.uid,u=r.url,d=r.fileName;if(t)return void t(e.data.data);var h=i.getPreviewUrl(u),f={fileDetailOssUrl:h,fileName:d,fileUrl:h,id:l,uid:l,fileType:"png",sortOrder:""};i.data.eduList[s].list[c].fileList=[f],i.setData((a(o={},"eduList[".concat(s,"].list[").concat(c,"].value"),h),a(o,"eduList[".concat(s,"].list[").concat(c,"].uid"),l),o))}}})},onSwitchInputEvent:function(e){var t=e.detail||{},i=t.findex,n=t.index,o=t.value;this.setData(a({},"eduList[".concat(i,"].list[").concat(n,"].content"),o))},leavingCertificationEmptyTypeChange:function(e){var t=e.detail||{},a=t.label,i=t.value,n=this.data.workBase[2];n.value=a,n.code=i,this.setData({"workBase[2]":n})},onSwitchLangBaseEvent:function(e){var t=this,a=this.data.langBase[0].openSwitch,i=[];if(a){if(this.data.tempLanglist=this.data.languageList,!this.data.languageList.length)return void this.setData({"langBase[0].openSwitch":!a,languageList:i});d.default.confirm({context:this,message:"是否确定关闭语言",zIndex:1e3}).then((function(){t.data.languageList.forEach((function(e){e.id&&s.default.lanDelete(e.id)})),t.setData({"langBase[0].openSwitch":!a,languageList:i})})).catch((function(){}))}else i=this.data.tempLanglist,this.setData({"langBase[0].openSwitch":!a,languageList:i&&i.length?i:[{name:"语言1",list:JSON.parse(JSON.stringify(D))}]})},languageChange:function(e){var t=e.detail||{},i=t.key,n=t.label,r=t.value,s=t.findex,l=this.setListValue(this.data.languageList[s].list,i,{value:r,label:n});this.setData(a({},"languageList[".concat(s,"]"),o(o({},this.data.languageList[s]),{},{list:l})))},speakingChange:function(e){this.languageChange(e)},readingChange:function(e){this.languageChange(e)},writingChange:function(e){this.languageChange(e)},companyInput:function(e){var t=e.findex,i=e.key,n=e.value,r=this.setListValue(this.data.workList[t].list,i,{label:n});this.setData(a({},"workList[".concat(t,"]"),o(o({},this.data.workList[t]),{},{list:r})))},positionInput:function(e){this.companyInput(e)},timeSingleSelect:function(e){var t=e.detail||{},a=t.time;t.key;this.setData({"workBase[0].value":a})},onWorkSwitchEvent:function(){var e=this.data.workBase,t=this.data.workBase[1].openSwitch;e[2]=t?{name:"没有离职证明的原因",type:"select",placeholder:"请选择",key:"leavingCertificationEmptyType"}:{name:"离职证明",type:"upimg_switch",openSwitch:!0,hideSwitch:!0,key:"leavingCertification"},e[1].openSwitch=!t,this.setData({workBase:e})},onhasWorkSwitchEvent:function(){var e=this.data.workToggle[0],t=e.openSwitch;e.openSwitch=!t,this.setData({"workToggle[0]":e,workHidden:t})},onSingleImgWork:function(e){var t=this;"".concat(I,"/ssc/public/oss/file/replaceFile");if(!(e.detail||{}).imgValue){var a=this.data.workBase[2];return a.value="",a.fileList=null,void this.setData({"workBase[2]":a})}this.onSingleImg(e,(function(e){var a=e.uid,i=e.url,n=e.fileName,o=t.getPreviewUrl(i),r={fileDetailOssUrl:o,fileName:n,fileUrl:o,id:a,uid:a},s=t.data.workBase[2];s.value=o,s.uid=a,s.fileList=[r],t.setData({"workBase[2]":s})}))},onSwitchEventBtm:function(){},onSingleImgBtm:function(){},onAddWork:function(){var e=[].concat(t(this.data.workList),[{name:"",list:JSON.parse(JSON.stringify(v))}]);this.setData({workList:e})},onAddLang:function(){var e=[].concat(t(this.data.languageList),[{name:"",list:JSON.parse(JSON.stringify(D))}]);this.setData({languageList:e})},pageSubmit:function(e){var t=this;return n(i.default.mark((function a(){var n,o,r;return i.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=t.formatData()){a.next=3;break}return a.abrupt("return");case 3:return wx.showLoading({title:"保存中",mask:!0}),a.next=6,s.default.saveCurriculumInfo(n).catch((function(){wx.hideLoading()}));case 6:if(o=a.sent,wx.hideLoading(),o&&!o.hasError){a.next=11;break}return o.errorMessage?t.myToast(o.errorMessage):t.myToast(o.data[0].error),a.abrupt("return");case 11:if(!e||"all"!==e.tag){a.next=14;break}return t.triggerEvent("submitAllNextTab2"),a.abrupt("return");case 14:r=setTimeout((function(){clearTimeout(r),t.triggerEvent("nextevent")}),500);case 15:case"end":return a.stop()}}),a)})))()},formatData:function(){var e=this;if(!this.pageCheck())return null;var t=this.data,a=t.eduList,i=t.langBase,n=t.languageList,r=[];a.forEach((function(t){var a={},i=!0;t.list.forEach((function(e){var t=e.key;if("school"===t&&(a=o(o({},a),{},{schoolCode:"ZDY_other"===e.code?"ZDY_other":e.code,school:"ZDY_other"===e.code?"其他":e.value})),"schoolOther"===t&&(a.schoolOther="ZDY_other"===a.schoolCode?e.value:""),"eduLevel"===t&&(i=["统招专科","统招本科","统招硕士","统招博士"].includes(e.value),a=o(o({},a),{},{eduLevel:e.code})),"major"===t&&(a=o(o({},a),{},{majorOne:e.value})),"time_start_end"===t){var n=e.startDate,r=e.endDate;a=o(o({},a),{},{startDate:n,endDate:r})}"recruitDesc"===t&&(a=o(o({},a),{},{recruitType:e.code,recruitDesc:e.value}),i="统招"===e.value),"learnTypeDesc"===t&&(a=o(o({},a),{},{learnType:e.code,learnTypeDesc:e.value}),i="全日制"===e.value),"eduType"===t&&(a.eduLevel=e.code,a.eduType=e.value),"qualificationFiles"===t&&(e.openSwitch?(a.qualificationFiles=e.fileList,a.haveQualificationFile=1):(a.qualificationEmptyContent=e.content,a.haveQualificationFile=0)),"majorFiles"===t&&(e.openSwitch?(a.majorFiles=e.fileList,a.haveMajorFile=1):(a.majorEmptyContent=e.content,a.haveMajorFile=0)),"isDoubleDegree"===t&&(a.isDoubleDegree=!!e.openSwitch,a.haveMajorDoubleFile=e.openSwitch?1:0),"majorDouble"===t&&(a.majorDouble=e.value),"majorDoubleFiles"===t&&(e.openSwitch?(a.majorDoubleFiles=e.fileList,a.haveMajorDoubleFile=1):(a.majorDoubleEmptyContent=e.content,a.haveMajorDoubleFile=0))})),"worker_type"===e.data.graduatesType&&(a.haveMajorDoubleFile=0),a.isOriginal=i?"Y":"N",r.push(a)}));var s=[];i[0].openSwitch&&n.forEach((function(t){var a={personId:e.data.baseInfo.personId};t.list.forEach((function(e){var t=e.key;"languageDesc"===t&&(a.language=e.code),"speakingDesc"===t&&(a.speaking=e.code),"readingDesc"===t&&(a.reading=e.code),"writingDesc"===t&&(a.writing=e.code)})),s.push(a)}));var l={educationDTOList:r,languageDTOList:s,personId:this.data.baseInfo.personId,emplType:this.data.baseInfo.identityInfo.personType},u=this.getWorkSubmitData();Object.assign(l,u);var d=l||{},h=d.educationDTOList,f=d.languageDTOList,p=d.personId,g=d.emplType,m=d.firstWorkTime,y=d.haveleavingCertification,v=d.leavingCertification,D=d.workExperDTOList,k=d.leavingCertificationEmptyType,w=this.selectComponent(".other"),L=w.data.deletFilesIds;if(L.length){var S=L.join(",");c.default.deleteFile(S).then((function(){w.clearDeleteId()}))}var T=(w.data||{}).medicalReportDTOList,b=v?[v]:[],I={draftFlag:2,personId:p,personType:g,educationInfoList:[],jobInfo:{firstWorkTime:m,hasLeftCertification:y?1:2,jobInfoList:[],leftCerFileIds:this.getIds(b),leftCerFiles:this.getImage(b),originalDegreeEndTime:"",provideReason:k},lanSkillInfo:{hasLanSkill:f.length?1:2,lanSkillInfoList:[]},honorInfo:{honorFiles:this.getImage(T),honorIds:this.getIds(T)}};return h.forEach((function(t){var a=t.eduLevel,i=t.endDate,n=t.haveMajorDoubleFile,o=t.haveMajorFile,r=t.haveQualificationFile,s=t.isDoubleDegree,l=t.isOriginal,c=t.majorDouble,u=t.majorDoubleFiles,d=t.majorFiles,h=t.majorOne,f=t.qualificationFiles,p=t.school,g=t.schoolCode,m=t.startDate,y=t.majorEmptyContent,v=t.qualificationEmptyContent,D=t.majorDoubleEmptyContent,k=t.schoolOther;I.educationInfoList.push({eduLevel:a,endTime:i,startTime:m,hasSecondDegree:1===n?1:2,hasDegreeCertificate:1===o?1:2,hasEducationProve:1===r?1:2,hasDoubleDegree:s?1:2,originalDegree:"Y"===l,doubleDegree:c,douDegProFileIds:e.getIds(u),douDegProFiles:e.getImage(u),degreeCerFileIds:e.getIds(d),degreeCerFiles:e.getImage(d),profession:h,eduProFileIds:e.getIds(f),eduProFiles:e.getImage(f),school:p,schoolCode:g,noDegCerReason:y,noEduProveReason:v,noSecDegReason:D,schoolName:k})})),D.forEach((function(e){var t=e.company,a=e.endDate,i=e.position,n=e.startDate;I.jobInfo.jobInfoList.push({companyName:t,endTime:a,position:i,startTime:n})})),f.forEach((function(e){var t=e.language,a=e.speaking,i=e.writing,n=e.reading;I.lanSkillInfo.lanSkillInfoList.push({language:t,speak:a,write:i,read:n})})),I},getImage:function(e){if(!(e||[]).length)return[];var t=[];return e.forEach((function(e){var a=e.fileName,i=e.fileUrl,n=e.uid;t.push({name:a,url:i,uid:n})})),t},getIds:function(e){if(!(e||[]).length)return[];var t=[];return e.forEach((function(e){var a=(e||{}).uid;t.push(a)})),t},getRevertImage:function(e){if(!(e||[]).length)return[];var t=[];return e.forEach((function(e){var a=e.name,i=e.url,n=e.uid;t.push({fileType:(a||"").split("."),fileName:a,fileUrl:i,uid:n,id:n})})),t},getWorkSubmitData:function(){var e=this.data,t=e.workList,a=e.workBase,i=e.workToggle,n={workExperDTOList:[]};if(i[0].openSwitch||"social_recruitment_type"===this.data.graduatesType||"student_type"===this.data.graduatesType){a.forEach((function(e){var t=e.key;"firstWorkTime"===t?n[t]=e.value:"haveleavingCertification"===t?n[t]=e.openSwitch:"leavingCertification"===t?n[t]=e.fileList[0]:"leavingCertificationEmptyType"===t&&(n[t]=e.code,n.leavingCertificationEmptyContent="无")})),"student_type"===this.data.baseInfo.identityInfo.personType&&(n.leavingCertificationEmptyContent="无",n.haveleavingCertification=!1);var o=[];t.forEach((function(e){var t=e.list,a={};t.forEach((function(e){var t=e.key;"time_work_start_end"===t?(a.startDate=e.startDate,a.endDate=e.endDate):a[t]=e.value})),a.startDate&&o.push(a)})),n.workExperDTOList=o}return this.data.graduatesType,n},pageCheck:function(){var e=this,t=wx.getStorageSync("dictObj"),a=this.data,i=a.eduList,n=a.langBase,o=a.languageList,r=a.workList,s=a.workBase,l=a.workToggle;i.map((function(e){return e.list=e.list.map((function(e){return e.err=!1,e})),e})),r.map((function(e){return e.list=e.list.map((function(e){return e.err=!1,e})),e})),s.map((function(e){return e.err=!1,e})),o.map((function(e){return e.list=e.list.map((function(e){return e.err=!1,e})),e})),this.setData({eduList:i,workList:r,workBase:s,languageList:o}),this.triggerEvent("seterrevent",{index:1,tag:!1});for(var c=!0,u="",d=(0,f.handleEduLevel)(i,t.degree,_),h=(d.maxLevel,d.maxIndex,d.originLevel,d.originIndex),p=d.checkIndex,g=function(a,n){for(var o=i[a].list,r=0,s=o.length;r<s;r++){var l=o[r].key;if("school"!==l||o[r].code)if("time_start_end"===l)o[r].startDate&&o[r].endDate&&e.timeBeforeAfter(o[r].startDate,o[r].endDate)||(u=o[r].startDate?o[r].endDate?"学习起始时间有误":"请选择学习结束时间":"请选择学习开始时间",c=!1);else if("isDoubleDegree"===l);else if("qualificationFiles"===l||"majorDoubleFiles"===l)(o[r].openSwitch&&!o[r].fileList||!o[r].openSwitch&&!o[r].content)&&(c=!1),o[r].openSwitch&&!o[r].fileList?"qualificationFiles"===l?u="请上传学历证书":"majorDoubleFiles"===l&&(u="请上传第二学位证书"):o[r].openSwitch||o[r].content||("qualificationFiles"===l?u="请输入无学历证书理由":"majorDoubleFiles"===l&&(u="请输入第二学位为空理由"));else if("majorFiles"===l){t.degree.findIndex((function(e){return e.dicCode===o.find((function(e){return"eduLevel"===e.key})).code}))>=p&&((o[r].openSwitch&&!o[r].fileList||!o[r].openSwitch&&!o[r].content)&&(c=!1),o[r].openSwitch&&!o[r].fileList?u="请上传学位证书":o[r].openSwitch||o[r].content||(u="请输入学位为空理由"))}else o[r].value||(c=!1);else c=!1;if(!c){e.myToast(u||{school:"请选择学校",major:"请输入专业",schoolOther:"请输入其他学校名称",recruitDesc:"请选择教育方式",learnTypeDesc:"请选择教育类型",eduType:"请选择学历",majorDouble:"请填写第二学位专业"}[l]||"请修正"),e.setErrEdu(a,r);break}}if(!c)return"break"},m=0,y=i.length;m<y;m++){if("break"===g(m))break}if(!c)return c;if(-1==h)return this.myToast("请添加原始学历学校"),c=!1,this.onAddScholl(),c;if(["social_recruitment_type","student_type"].includes(this.data.graduatesType)||l[0].openSwitch){var v=[];if("social_recruitment_type"===this.data.graduatesType||l[0].openSwitch){for(var D=0,k=r.length;D<k;D++){for(var w=r[D].list,L=0,S=w.length;L<S;L++){var T=w[L].key;if("time_work_start_end"===T)if(w[L].startDate&&w[L].endDate&&this.timeBeforeAfter(w[L].startDate,w[L].endDate)){var b={i:D,j:L,start:w[L].startDate,end:w[L].endDate};v.push(b)}else u=w[L].startDate?w[L].endDate?"工作起始时间有误":"请选择工作结束时间":"请选择工作开始时间",c=!1;else w[L].value||(c=!1);if(!c){this.myToast(u||{company:"请输入公司名称",position:"请输入所在职务"}[T]||"请修正"),this.setErrEdu(D,L,"workList");break}}if(!c)break}v.sort((function(e,t){return new Date(e.start).getTime()-new Date(t.start).getTime()}));for(var I=null,j=0;j<v.length;j++)if(I){if(Math.abs(new Date(v[j].start).getTime()-new Date(I.end).getTime())>7776e6){u="相邻工作时间间隔不能大于90天",c=!1,this.myToast(u||"请修正"),this.setErrEdu(v[j].i,v[j].j,"workList"),this.setErrEdu(I.i,I.j,"workList");break}I=v[j]}else I=v[j]}if(!c)return c;s[0]&&!s[0].value&&(c=!1,u="请选择首次参加工作时间",this.setErrNoList("workBase",0)),"social_recruitment_type"==this.data.baseInfo.identityInfo.personType&&(s[1]&&s[1].openSwitch?s[2]&&!s[2].value&&(c=!1,u="请上传离职证明",this.setErrNoList("workBase",2)):s[1]&&!s[1].openSwitch&&s[2]&&!s[2].value&&(c=!1,u="请选择无离职证明原因",this.setErrNoList("workBase",2)))}if(!c)return this.myToast(u||"请修正"),c;if(n[0].openSwitch)for(var C=0,E=o.length;C<E;C++){for(var x=o[C].list,F=0,O=x.length;F<O;F++){var B=x[F].key;if(x[F].value||(c=!1),!c){this.myToast(u||{languageDesc:"请选择语言类型",speakingDesc:"请选择口语等级",readingDesc:"请选择阅读等级",writingDesc:"请选择写作等级"}[B]||"请修正"),this.setErrEdu(C,F,"languageList");break}}if(!c)break}return c||(u&&this.myToast(u),c)},setErrEdu:function(e,t){var i=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"eduList";this.setData(a({},"".concat(n,"[").concat(e,"].list[").concat(t,"].err"),!0)),this.triggerEvent("seterrevent",{index:1}),wx.nextTick((function(){i.scrollToError(n,e)}))},setErrNoList:function(e,t){var i=this;this.setData(a({},"".concat(e,"[").concat(t,"].err"),!0)),this.triggerEvent("seterrevent",{index:1}),wx.nextTick((function(){i.scrollToError(e,t)}))},scrollToError:function(e,t){wx.createSelectorQuery().in(this.selectComponent("#"+e+t)).select(".comp-zform.err").boundingClientRect().selectViewport().scrollOffset().exec((function(e){var t;wx.pageScrollTo({scrollTop:e[1].scrollTop+((null===(t=e[0])||void 0===t?void 0:t.top)||0)-100,duration:400})}))},timeBeforeAfter:function(e,t){var a=new Date(e),i=new Date(t);return a.getTime()<i.getTime()},handleDeleteWork:function(e){var t=this;d.default.confirm({context:this,message:"是否删除工作经历",zIndex:1e3}).then((function(){var a=e.currentTarget.dataset.index,i=t.data.workList;i.splice(a,1),t.setData({workList:i})})).catch((function(){}))},getItemLabel:function(e,t){var a=wx.getStorageSync("dictObj")[e]||[],i={};return a.forEach((function(e){i[e.dicCode]=e.dicContentCn})),i[t]},initPage:function(){var e=this;return n(i.default.mark((function t(){var a,n,o,r,s,l,c,u,d,h,f,p,k,w,L,S,T,b,I,_,j,C,E,x,F;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.getBaseInfo()){t.next=3;break}return t.abrupt("return");case 3:n=a.educationInfoList,o=void 0===n?[]:n,r=a.jobInfo,s=void 0===r?null:r,l=a.honorInfo,c=void 0===l?{}:l,u=a.lanSkillInfo,d=void 0===u?null:u,h=e.data.workBase,(f=s)&&f.hasLeftCertification&&(p=f.jobInfoList,k=f.firstWorkTime,w=f.leftCerFiles,L=f.hasLeftCertification,S=f.provideReason,T=1===L,b=e.getRevertImage(w),I=e.getPreviewUrl((b[0]||{}).fileUrl),e.data.workBase=h,e.setData({workBase:h}),h.forEach((function(e){var t=e.key;if("firstWorkTime"===t)e.value=k;else if("haveleavingCertification"===t)e.openSwitch=T;else if("leavingCertification"===t)e.fileList=b,e.value=I;else if("leavingCertificationEmptyType"===t){e.code=S;e.value={provide_income:"入职当日提交",provide_in_month:"入职一个月内提交",no_provide:"无法提供"}[S]||""}})),_=[],p&&p.length&&p.forEach((function(e,t){var a=e.startTime,i=e.endTime,n=e.companyName,o=e.position,r={startDate:a,endDate:i,company:n,position:o},s=JSON.parse(JSON.stringify(v));s.forEach((function(e){"time_work_start_end"===e.key?(e.startDate=a,e.endDate=i):e.value=r[e.key]})),_.push({name:"学校".concat(t),list:s})})),e.setData({workBase:h}),_.length?e.setData({workList:_}):e.setData({"workToggle[0].openSwitch":!1,workHidden:"social_recruitment_type"!==e.data.baseInfo.identityInfo.personType})),(o||[]).length&&(j=[],o.forEach((function(t,a){var i=t.startTime,n=t.endTime,o=t.schoolCode,r=t.school,s=t.eduLevel,l=t.profession,c=t.recruitType,u=t.learnType,d=t.hasEducationProve,h=t.eduProFiles,f=t.degreeCerFiles,p=t.douDegProFiles,v=t.hasSecondDegree,D=t.doubleDegree,k=t.noEduProveReason,w=t.hasDegreeCertificate,L=t.noDegCerReason,S=t.noSecDegReason,T=t.hasDoubleDegree,b=t.schoolName,I=t.id,_=void 0===I?a:I,C=e.getRevertImage(h),E=e.getPreviewUrl((C[0]||{}).fileUrl),x=e.getRevertImage(f),F=e.getPreviewUrl((x[0]||{}).fileUrl),O=e.getRevertImage(p),B=e.getPreviewUrl((O[0]||{}).fileUrl),N=1===T,q="worker_type"===e.data.graduatesType?m:g;N&&"worker_type"!==e.data.graduatesType&&(q=q.concat(y));var J=JSON.parse(JSON.stringify(q));if(J.forEach((function(a){var h=a.key;"school"===h?(a.value=r,a.code=o,b&&(a.code="ZDY_other",a.value="其他")):"major"===h?a.value=l:"recruitDesc"===h?(a.code=c,a.value=e.getItemLabel(a.mj_type,c)):"learnTypeDesc"===h?(a.code=u,a.value=e.getItemLabel(a.mj_type,u)):"eduLevel"===h?(a.code=s,a.value=e.getItemLabel(a.mj_type,s)):"qualificationFiles"===h?(a.openSwitch=1===d,a.fileList=C,a.content=k,a.value=E):"majorFiles"===h?(a.openSwitch=1===w,a.fileList=x,a.content=L,a.value=F):"isDoubleDegree"===h?(a.openSwitch=N,a.fileList=O,a.content=S,a.value=B):"majorDoubleFiles"===h?(a.openSwitch=1===v,a.fileList=O,a.content=S,a.value=B):"majorDouble"===h?a.value=D:"time_start_end"===h?(a.startDate=i,a.endDate=n):a.value=t[h]})),"ZDY_other"===o&&b){var P={name:"其他学校名称",placeholder:"请输入学校名称",key:"schoolOther"};P.value=b,J.splice(1,0,P)}["primarySchool","juniorHighSchool","highSchool","juniorPU","juniorFN","juniorUP","junior"].includes(s)&&(J=J.filter((function(e){return"majorFiles"!==e.key&&"isDoubleDegree"!==e.key&&"majorFiles"!==e.key&&"majorDouble"!==e.key&&"majorDoubleFiles"!==e.key}))),j.push({name:"学校".concat(a),list:J,id:_})})),console.log(j,"arrEdu"),j.length&&e.setData({eduList:j})),d&&(C=[],E=d.lanSkillInfoList,(void 0===E?[]:E).forEach((function(t,a){var i=JSON.parse(JSON.stringify(D)),n=t.language,o=t.speak,r=t.read,s=t.write,l=t.id,c=void 0===l?a:l,u={languageDesc:n,speakingDesc:o,readingDesc:r,writingDesc:s};i.forEach((function(t){var a=t.key;t.code=u[a],t.value=e.getItemLabel(t.mj_type,u[a])})),C.push({name:"语言技能".concat(a),list:i,id:c})})),C.length?e.setData({languageList:C}):e.setData({"langBase[0].openSwitch":!1,languageList:[]})),x=(c||{}).honorFiles,F=e.getRevertImage(x),e.selectComponent(".other").setHonorInit({certificateDTOList:F||[]});case 13:case"end":return t.stop()}}),t)})))()},myToast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";(0,h.default)({context:this,zIndex:1e3,duration:3e3,message:e})},getBaseInfo:function(){var e=wx.getStorageSync("baseInfo");if(e&&e.personId)return e;b&&b.personId?c.default.basicBasic({personId:b.personId}).then((function(t){return 0==t.head.code&&t.data?(wx.setStorageSync("baseInfo",t.data),e=t.data):(e=null,wx.showToast({title:t.head.message,complete:function(){wx.hideLoading()}})),e})):wx.navigateTo({url:"/pages/zlogin/zlogin"})}}}); 
 			}); 	require("pages/zimportInfo/tabs/tperson/tperson.js");
 		__wxRoute = 'pages/zlogin/zlogin';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/zlogin/zlogin.js';	define("pages/zlogin/zlogin.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,a=(e=require("../../api/apiLogin.js"))&&e.__esModule?e:{default:e};var o=require("../../env/index").env,n=getApp(),t=getApp(),d=n.globalData,i="release"===o?"5081732290183438354":"5300785449166422021";Page({data:{imgUrl:d.imgUrl,auth:!0,openId:"",wxCode:"",session_key:""},toWxlogin:function(){var e=this;wx.login({success:function(a){null!=a&&a.code?(e.setData({wxCode:null==a?void 0:a.code}),e.toLogin()):wx.showToast({icon:"fail",title:"微信授权失败！"})},fail:function(e){}})},toLogin:function(){var e=this,o={wxCode:this.data.wxCode,tenantId:i};wx.showLoading({mask:!0,title:"登录中"}),a.default.wxLogin(o).then((function(a){var o;a&&0==(null==a||null===(o=a.head)||void 0===o?void 0:o.code)?"true"===a.data.auth?(t.globalData.usertoken=a.data.token,t.globalData.tenantId=a.data.person.tenantId,t.globalData.name=a.data.person.userName,t.globalData.phone=a.data.person.phone,t.globalData.personId=a.data.person.personId,wx.redirectTo({url:"/pages/zwelcome/zwelcome"})):e.setData({auth:!1,openId:a.data.openId,session_key:a.data.session_key}):wx.showToast({icon:"none",title:a.head.message})})).finally((function(){wx.hideLoading()}))},getPhoneNumber:function(e){"getPhoneNumber:ok"===e.detail.errMsg&&this.getToken(e.detail)},getToken:function(e){var o={openId:this.data.openId,wxCode:this.data.wxCode,sessionKey:this.data.session_key,encryptedData:e.encryptedData,iv:e.iv,tenantId:i};a.default.getToken(o).then((function(e){var a;e&&0==(null==e||null===(a=e.head)||void 0===a?void 0:a.code)?(t.globalData.usertoken=e.data.token,t.globalData.tenantId=e.data.person.tenantId,t.globalData.name=e.data.person.userName,t.globalData.phone=e.data.person.phone,t.globalData.personId=e.data.person.personId,wx.redirectTo({url:"/pages/zwelcome/zwelcome"})):wx.showModal({title:"提示",showCancel:!1,content:e.head.message,success:function(e){}})}))},onLoad:function(){this.toWxlogin()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/zlogin/zlogin.js");
 		__wxRoute = 'pages/zwelcome/zwelcome';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/zwelcome/zwelcome.js';	define("pages/zwelcome/zwelcome.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=s(require("../../@babel/runtime/regenerator")),e=require("../../@babel/runtime/helpers/asyncToGenerator"),a=s(require("../../api/apiCommon"));function s(t){return t&&t.__esModule?t:{default:t}}var n=getApp().globalData;getApp(),require("../../env/index").baseUrl;Page({data:{imgUrl:n.imgUrl,name:n.name,personId:n.personId,status:"",qstatus:"",btnIsFixed:!1,isready:!0,bstatus:!1,stuffStatus:!1},onLoad:function(){this.setData({name:n.name,personId:n.personId}),this.loadFontFace(),this.getDictDataFn()},getDictDataFn:function(){return e(t.default.mark((function e(){var s,o,i;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=["enum_national_type","bpm_census_type","politics_status","gender","marital_status","state_of_health","relationshipWith","blood_type","minzu","degree","speaking_status","language_status","reading_status","writing_status","socialrelationsAndOld"],t.next=3,a.default.dictionaryData(s);case 3:if(!(o=t.sent)||0!=o.head.code){t.next=13;break}return t.next=7,a.default.dictEnum({paramKeys:"EmplTypeEnum"});case 7:(i=t.sent)&&0==i.head.code&&(o.data.EmplTypeEnum=i.data.EmplTypeEnum),n.dictObj=o.data,wx.setStorageSync("dictObj",o.data),t.next=14;break;case 13:wx.showToast({icon:"none",title:o.head.message});case 14:case"end":return t.stop()}}),e)})))()},onShow:function(){this.refreshStatus()},onReady:function(){},refreshStatus:function(){var s=this;return e(t.default.mark((function e(){var o,i,u,r,c,d;return t.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n&&n.personId){t.next=3;break}return wx.navigateTo({url:"/pages/zlogin/zlogin"}),t.abrupt("return");case 3:return t.next=5,a.default.pageStatus({personId:n.personId});case 5:0==(o=t.sent).head.code&&o.data?(i=o.data,u=i.handleStatus,r=i.materialStatus,c=i.stuffStatus,d="",u||(d="enterOver",s.setData({status:d,stuffStatus:c}),2==r?s.setData({isready:!1,qstatus:""}):1==r?s.setData({isready:!0,qstatus:"over"}):s.setData({isready:!0,qstatus:""}))):wx.showToast({title:"首页状态获取失败",icon:"none"});case 7:case"end":return t.stop()}}),e)})))()},jumpQian:function(){wx.showLoading({title:"加载中"}),a.default.pageStatus({personId:this.data.personId}).then((function(t){if(console.log(t,"res"),t&&0==t.head.code){var e=t.data,a=e.complianceStatus,s=(e.handleStatus,e.materialStatus,e.professionalStatus);e.personId;if(a||s)return void wx.navigateTo({url:"/pages/complianceState/complianceState"});wx.navigateTo({url:"/pages/signlist/signlist"})}else wx.showToast({icon:"fail",title:t.head.message})})).finally((function(){wx.hideLoading()}))},loadFontFace:function(){wx.loadFontFace({family:"FZLanTingHeiS-UL-GB",source:"url(https://ssc-prod-oss.bcebos.cloud.geely.com/v1/ssc-static/FZLanTingHeiS-UL-GB.TTF?authorization=bce-auth-v1%2F858ecded145f4909815b57f17af1a948%2F2022-09-26T01%3A33%3A36Z%2F-1%2F%2F56d1644a81cdcff649bad1faabfe56152139299a262ea3d8d118a91b7067d15a)",success:function(t){},fail:function(t){console.log("下载字体失败")},complete:function(t){}})},jumpUseDesc:function(){wx.navigateTo({url:"/pages/zusedesc/zusedesc?status="+this.data.status})},jumpUseDescNor:function(){this.jumpUseDesc()},jumpImportInfo:function(){if(!this.data.status&&!wx.getStorageSync("hasReadUse"))return void this.jumpUseDesc();wx.navigateTo({url:"/pages/zimportInfo/zimportInfo?status="+this.data.status})},callHr:function(){wx.makePhoneCall({phoneNumber:"4006280970"})},jumpBuChong:function(){wx.navigateTo({url:"/pages/supplement/supplement"})}}); 
 			}); 	require("pages/zwelcome/zwelcome.js");
 		__wxRoute = 'pages/zusedesc/zusedesc';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/zusedesc/zusedesc.js';	define("pages/zusedesc/zusedesc.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{count:5,isover:!1,timer:null,type:"",status:"",readed:!1},onLoad:function(t){var e=t.status;if(console.log(e,t),e)return wx.setStorageSync("hasReadUse",!0),void this.setData({status:e,isover:!0,readed:!0});wx.getStorageSync("hasReadUse")?this.setData({isover:!0,readed:!0}):this.startTimer()},onShow:function(t){},onReady:function(){},onHide:function(){this.clearTimer()},onUnload:function(){this.clearTimer()},startTimer:function(){var t=this;this.timer=setInterval((function(){if(1===t.data.count)return t.setData({isover:!0}),void t.clearTimer();t.setData({count:t.data.count-1})}),1e3)},clearTimer:function(){clearInterval(this.timer),this.timer=null},readDesc:function(){this.data.isover&&(wx.getStorageSync("hasReadUse")||(wx.setStorageSync("hasReadUse",!0),wx.redirectTo({url:"/pages/zimportInfo/zimportInfo?status="+this.data.status})))}}); 
 			}); 	require("pages/zusedesc/zusedesc.js");
 		__wxRoute = 'pages/zimportInfo/zimportInfo';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/zimportInfo/zimportInfo.js';	define("pages/zimportInfo/zimportInfo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=s(require("../../@babel/runtime/regenerator")),t=require("../../@babel/runtime/helpers/asyncToGenerator"),a=require("../../@babel/runtime/helpers/objectSpread2"),n=require("../../@babel/runtime/helpers/defineProperty"),o=s(require("../../api/apiCommon")),i=s(require("../../api/apiBaseInfo"));function s(e){return e&&e.__esModule?e:{default:e}}var l=getApp().globalData,r=null;Page({data:{imgUrl:l.imgUrl,bottomSafeBar:l.bottomSafeBar,personId:l.personId,tabs:[{name:"基本信息"},{name:"个人履历"},{name:"工资卡信息"},{name:"家庭投保"}],actTab:0,warnShow:!0,disabled:!0},setErrStatus:function(e){var t=e.detail||{},a=t.index,o=t.tag,i=void 0===o||o;this.setData(n({},"tabs[".concat(a,"].err"),i)),null==r&&i&&(r=a,this.setData({actTab:r}))},toggleTab:function(e){var t=e.currentTarget.dataset,a=t.index;t.item;this.setData({actTab:a})},closeWarn:function(){this.setData({warnShow:!1})},jumpNext:function(){if(0===this.data.actTab)this.selectComponent(".tbasic").checkForm();else if(1===this.data.actTab){this.selectComponent(".tperson").pageSubmit()}else if(2===this.data.actTab){this.selectComponent(".tpaycard").pageSubmit()}else if(3===this.data.actTab){r=null,this.selectComponent(".tfamily").pageSubmit()}},jumpNextAction:function(){var e=this;l&&l.personId?i.default.basicBasic({personId:l.personId}).then((function(t){0==t.head.code&&t.data&&(wx.setStorageSync("baseInfo",t.data),wx.nextTick((function(){e.setData({actTab:e.data.actTab+1})})))})):wx.navigateTo({url:"/pages/zlogin/zlogin"})},submitAll:function(e){var t=e.detail,n=void 0===t?null:t;if(wx.showLoading({title:"信息保存中",mask:!0}),n){var i=this.selectComponent(".tbasic").handleFormData();if(i){var s=this.selectComponent(".tperson").formatData();if(s){var l=this.selectComponent(".tpaycard").handleForm();if(l){var r=a(a(a({familyInfo:n},i),s),{},{bankCardInfo:l});o.default.submitAll(r).then((function(e){wx.hideLoading(),e&&0==e.head.code?(wx.showToast({duration:3e3,title:"提交成功",icon:"success",mask:!0}),wx.redirectTo({url:"/pages/zwelcome/zwelcome"})):wx.showToast({duration:3e3,mask:!0,title:e.head.message,icon:"none"})})).finally((function(){setTimeout((function(){wx.hideLoading({})}),2e3)}))}else wx.hideLoading({})}else wx.hideLoading({})}else wx.hideLoading({})}else wx.hideLoading({})},submitAllNextTab1:function(){console.log("开始tab1-个人履历"),wx.showLoading({title:"个人履历保存中",mask:!0}),this.selectComponent(".tperson").pageSubmit({tag:"all"})},submitAllNextTab2:function(){wx.showLoading({title:"工资卡信息保存中",mask:!0}),this.selectComponent(".tpaycard").pageSubmit({tag:"all"})},submitAllNextTabOver:function(){wx.showLoading({title:"家庭投保成员保存中",mask:!0}),this.selectComponent(".tfamily").pageSubmitLast({tag:"all"})},submitAllAfterAll:function(){o.default.submitAll({edit:1}).then((function(e){e&&"success"===e.code?(wx.showToast({icon:"none",title:"提交完成"}),wx.disableAlertBeforeUnload({}),wx.navigateBack()):wx.showToast({icon:"none",title:e.message})}))},watch:{actTab:{handler:function(e){1===e?this.refreshTperson():2===e?this.dealPayCard():0===e?this.dealBase():3===e&&this.dealFamily()}}},onLoad:function(a){var n=this;return t(e.default.mark((function t(){var o,s;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.status,n.setData({disabled:""!==o,personId:l.personId}),getApp().setWatcher(n),e.next=5,i.default.basicBasic({personId:n.data.personId});case 5:s=e.sent,wx.setStorageSync("baseInfo",s.data),o||wx.enableAlertBeforeUnload({message:"确定要离开吗？离开后未保存的内容会丢失"});case 8:case"end":return e.stop()}}),t)})))()},dealBase:function(){this.selectComponent(".tbasic").tabShow()},refreshTperson:function(){this.selectComponent(".tperson").refreshData()},dealPayCard:function(){this.selectComponent(".tpaycard").tabShow()},dealFamily:function(){this.selectComponent(".tfamily").tabShow()},setHeadImg:function(e){this.selectComponent(".tbasic").setBaseHeadImg(e)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/zimportInfo/zimportInfo.js");
 		__wxRoute = 'pages/zcutimg/zcutimg';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/zcutimg/zcutimg.js';	define("pages/zcutimg/zcutimg.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var n,t=getApp();Page({data:{},onLoad:function(t){var o=t.imagePath;n=this.selectComponent("#my-cropper"),this.setData({src:o,aspectRatio:1,isProportion:!0,quality:.6})},btn5:function(){n.getResults((function(n){console.log(n)}))},btn6:function(){n.getImagePath((function(n){console.log(n)}))},onCancel:function(){wx.navigateBack({delta:-1})},onOk:function(){var o=this;n.getImagePath((function(n){t.globalData.gongpaiImgSrc=n.path;var a=getCurrentPages();a[a.length-2].setHeadImg(676),o.onCancel()}))},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/zcutimg/zcutimg.js");
 		__wxRoute = 'pages/fillPrepare/fillPrepare';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/fillPrepare/fillPrepare.js';	define("pages/fillPrepare/fillPrepare.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({btnclick:function(){wx.redirectTo({url:"/pages/home/home"})}}); 
 			}); 	require("pages/fillPrepare/fillPrepare.js");
 		__wxRoute = 'pages/signlist/signlist';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/signlist/signlist.js';	define("pages/signlist/signlist.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";a(require("../../api/apiBaseInfo"));var t=a(require("../../api/apiSigned"));function a(t){return t&&t.__esModule?t:{default:t}}getApp();Page({data:{list:[],hasOnShow:!1},onShow:function(){this.data.hasOnShow||this.getList()},onUnload:function(){wx.redirectTo({url:"/pages/zwelcome/zwelcome"})},getList:function(){var a=this;this.setData({hasOnShow:!0}),wx.showLoading({title:"加载中"}),t.default.dataSigned().then((function(t){console.log(t,"res222"),0==t.head.code?a.setData({list:t.data,hasOnShow:!1}):wx.showToast({icon:"fail",title:t.head.message})})).finally((function(){wx.hideLoading()}))},signedClick:function(t){t.currentTarget.dataset.id&&wx.navigateTo({url:"/pages/dataSign/dataSign?signUrl="+encodeURIComponent(t.currentTarget.dataset.id)})}}); 
 			}); 	require("pages/signlist/signlist.js");
 		__wxRoute = 'pages/dataSign/dataSign';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/dataSign/dataSign.js';	define("pages/dataSign/dataSign.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{signUrl:"",x:0,y:0},onLoad:function(n){this.setData({signUrl:decodeURIComponent(n.signUrl)})},back:function(){wx.navigateBack({})}}); 
 			}); 	require("pages/dataSign/dataSign.js");
 		__wxRoute = 'pages/supplement/supplement';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/supplement/supplement.js';	define("pages/supplement/supplement.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/objectSpread2"),t=require("../../@babel/runtime/helpers/defineProperty"),i=require("../zimportInfo/utlis/weapp-jwt"),a=n(require("../../utils/formData/index")),o=n(require("../../api/apiCommon"));function n(e){return e&&e.__esModule?e:{default:e}}var r=getApp(),s=r.globalData,l=require("../../env/index").baseUrl;Page({data:{bottomSafeBar:s.bottomSafeBar,healthItemList:[{name:"体检报告组件",type:"bodyCheckResSupplement",key:"body_check_report"}],workItemList:[{name:"离职证明",type:"upimg_switch",openSwitch:!0,hideSwitch:!0,key:"leavingCertification"}],bankCardInfo:!1,healthInfo:!1,leftCer:!1},onradioEvent:function(e){var i=e.detail,a=i.detail,o=i.index;i.item;this.setData(t({},"healthItemList[".concat(o,"].value"),a))},submit:function(){var e=this.selectComponent(".health"),t=[],i=[],a={};if(this.data.healthInfo&&e){var n=e.data.medicalReportDTOList;if(!n||!n.length)return this.setErrCom("healthItemList","body_check_report",0),void wx.showToast({title:"请上传体检报告",icon:"none"});this.setData({"healthItemList[0].err":!1}),n.map((function(e){t.push(e.uid)}))}if(this.data.leftCer){if(!this.data.workItemList[0].uid)return this.setErrCom("workItemList","leavingCertification",0),void wx.showToast({title:"请上传离职证明",icon:"none"});this.setData({"workItemList[0].err":!1}),i=[this.data.workItemList[0].uid]}var r=this.selectComponent(".spaycard");if(this.data.bankCardInfo&&r){var l=r.handleForm();l&&l.accountName&&(a=l)}var d={personId:s.personId};this.data.bankCardInfo&&(d.bankCardInfoEntity=a),this.data.healthInfo&&(d.medicalReportIds=t),this.data.leftCer&&(d.leftCerFileIds=i),wx.showLoading({title:"保存中"}),o.default.supplementSubmit(d).then((function(e){0==e.head.code?(wx.hideLoading({}),wx.showToast({title:"保存成功",icon:"success"}),wx.redirectTo({url:"/pages/zwelcome/zwelcome"})):(wx.hideLoading({}),wx.showToast({title:e.head.message,icon:"none"}))}))},getPreviewUrl:function(e){if(e&&-1!==e.indexOf("url=")){var t=e.split("url=");return(0,i.weAtob)(t[1])}return e},onSingleImg:function(i){var o=this,n=(i.detail||{}).imgValue;if(!n){var s=this.data.workItemList[0];return s.value="",s.fileList="",s.uid="",void this.setData(t({},"workItemList[0]",s))}wx.showLoading({title:"上传中"});var d="".concat(l,"/ssc/income/file/uploadFile"),c=new a.default,h=n.tempFiles[0].tempFilePath,u=h.split(".");c.appendFile("file",h);var f=c.getData();wx.request({url:d,header:{"content-type":f.contentType,"x-access-token":r.globalData.usertoken},method:"post",data:f.buffer,success:function(t){var i,a;if(0==(null==t||null===(i=t.data)||void 0===i||null===(a=i.head)||void 0===a?void 0:a.code)){var n=t.data.data,r={fileDetailOssUrl:n.uid,fileName:n.fileName,fileSize:"",fileType:u[1],fileUrl:o.getPreviewUrl(n.url),sortOrder:"",uid:n.uid},s=o.data.workItemList[0];s=e(e({},s),{},{fileList:r,uid:n.uid,value:o.getPreviewUrl(n.url)}),o.setData({"workItemList[0]":s}),wx.hideLoading({})}else o.myToast(),wx.showToast({title:t.data.head.message,icon:"none"}),wx.hideLoading({})},fail:function(){wx.hideLoading({})}})},setErrCom:function(e,t,i){var a=this;console.log(e,t,i),this.setErrTarget(e,t),wx.nextTick((function(){a.scrollToError(e,t)}))},setErrTarget:function(e,i){var a=this;this.data[e].forEach((function(o,n){o.key===i&&a.setData(t({},"".concat(e,"[").concat(n,"].err"),!0))}))},scrollToError:function(e){wx.createSelectorQuery().in(this.selectComponent("#"+e)).select(".comp-zform.err").boundingClientRect().selectViewport().scrollOffset().exec((function(e){wx.pageScrollTo({scrollTop:e[1].scrollTop+e[0].top-100,duration:400})}))},onLoad:function(){var e=this;wx.showLoading({title:"加载中"}),o.default.supplement({personId:s.personId}).then((function(t){if(0==t.head.code){var i=t.data,a=i.healthInfo,o=void 0!==a&&a,n=i.leftCer,r=void 0!==n&&n,s=i.bankCardInfo,l=void 0!==s&&s;e.setData({healthInfo:o,leftCer:r,bankCardInfo:l})}else wx.showToast({title:t.head.message,icon:"none"})})).finally((function(){wx.hideLoading({})}))},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/supplement/supplement.js");
 		__wxRoute = 'pages/complianceState/complianceState';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/complianceState/complianceState.js';	define("pages/complianceState/complianceState.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a,e=require("../../@babel/runtime/helpers/defineProperty"),n=(a=require("../../api/apiCommon"))&&a.__esModule?a:{default:a};var o=getApp().globalData;Page({data:{personId:o.personId,bottomSafeBar:o.bottomSafeBar,arr:[{name:"1、是否有违法犯罪记录：",type:"radio",value:""},{name:"2、是否曾被列入政府部门、司法部门的管控名单：",type:"radio",value:""},{name:"3、是否被列入美园或者国际制裁清单：",type:"radio",value:""},{name:"4、是否拥有其他国家国籍，或永久居住权（绿卡）：",type:"radio",value:""},{name:"5、是否曾受到行政管理部门、行业协会或类似机构做出的行业禁入裁定，且在应聘本公司岗位时 该裁定依然有效：",type:"radio",value:""},{name:"6、是否曾与其他企业或任何第三方签署竞业禁止/限制协议，且在应聘本岗位时仍处在禁止/限制期内：",type:"radio",value:""},{name:"7、是否是本公司及关联公司现有员工或政府要员、商业伙件的直系亲属或主要社会关系。",type:"radio",value:""}]},onradioEvent:function(a){var n=a.detail,o=n.detail,t=n.index;n.item;this.setData(e({},"arr[".concat(t,"].value"),String(o)))},submit:function(){var a={};this.data.arr.filter((function(a){return!a.value})).length>0?wx.showToast({icon:"none",title:"请全部填写完再提交"}):(this.data.arr.map((function(e,n){a["compliance_1_".concat(n+1)]=e.value})),wx.showLoading({title:"提交中"}),n.default.complianceStateSave({complianceMap:a,personId:o.personId}).then((function(a){a&&0==a.head.code?n.default.pageStatus({personId:o.personId}).then((function(a){if(a&&0==a.head.code){var e=a.data,n=e.complianceStatus,o=e.professionalStatus;if(n)return void wx.showToast({title:"合规声明状态错误",icon:"none"});o&&wx.navigateTo({url:"/pages/professionalCredit/professionalCredit"})}else wx.showToast({icon:"fail",title:a.head.message})})):wx.showToast({icon:"none",title:a.head.message})})).finally((function(){setTimeout((function(){wx.hideLoading()}),3e3)})))},onLoad:function(){var a=this;wx.showLoading({title:"加载中",icon:"none"}),n.default.queryCompliance({personId:this.data.personId||o.personId}).then((function(e){if(console.log(e,"res"),0==e.head.code&&e.data&&e.data.compliance_1_1){var n=a.data.arr.concat([]);n.map((function(a,n){a.value=e.data["compliance_1_".concat(n+1)]?e.data["compliance_1_".concat(n+1)]:""})),a.setData({arr:n})}})).finally((function(){wx.hideLoading()}))},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/complianceState/complianceState.js");
 		__wxRoute = 'pages/professionalCredit/professionalCredit';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/professionalCredit/professionalCredit.js';	define("pages/professionalCredit/professionalCredit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a,e=require("../../@babel/runtime/helpers/defineProperty"),t=(a=require("../../api/apiCommon"))&&a.__esModule?a:{default:a};var n=getApp().globalData;Page({data:{personId:n.personId,bottomSafeBar:n.bottomSafeBar,arr:[{name:"1、是否存在履职期间的身份、学历、履历等不真实的情况：",type:"radio",value:""},{name:"2、是否存在违法违规行为，例如犯罪等不良记录、被国家机关列为失信被执行人、被行政处罚或被采取强制措施、存在民事、经济纠纷等情况：",type:"radio",value:""},{name:"3、本人或直系亲属或主要社会关系人员在与公司（含分、子公司）有业务往来或竞 争关系的任何第三方拥有直接或间接利益情形的（包括但不限于在上述第三方公司参股、持股、担任法人或高管等）;",type:"radio",value:""},{name:"4、是否有亲属或主要社会关系人在公司（含分、子公司）任职：",type:"radio",value:""},{name:"5、是否存在职业信用问题的情况，如违反公司各项规章制度、伦理道德、职业道德 或存在生活作风问题等：",type:"radio",value:""},{name:"申报情况",subname:"（如存在以上任何一项类型，请进行具体说明）",type:"textarea",placeholder:"请输入",limit:50,key:"add",value:""}]},onradioEvent:function(a){var t=a.detail,n=t.detail,o=t.index;t.item;this.setData(e({},"arr[".concat(o,"].value"),String(n)))},oninputEventSelf:function(a){var e=a.detail,t=(e.key,e.value);this.data.arr[5].value=t},submit:function(){var a={};this.data.arr.filter((function(a,e){return e<5&&!a.value})).length>0?wx.showToast({icon:"none",title:"请全部填写完再提交"}):this.data.arr.filter((function(a,e){return e<5&&1==a.value})).length>0&&!this.data.arr[5].value?wx.showToast({icon:"none",title:"请填写申报情况"}):(this.data.arr.map((function(e,t){a["essionalCredi_1_".concat(t+1)]=e.value})),wx.showLoading({title:"提交中"}),t.default.professionalCreditSave({crediMap:a,personId:n.personId}).then((function(a){a&&0==a.head.code?t.default.pageStatus({personId:n.personId}).then((function(a){if(a&&0==a.head.code){var e=a.data,t=e.complianceStatus,n=e.professionalStatus;if(t)return void wx.showToast({title:"合规声明状态错误",icon:"none"});if(n)return void wx.showToast({title:"职业信用申报状态错误",icon:"none"});wx.navigateTo({url:"/pages/signlist/signlist"})}else wx.showToast({icon:"fail",title:a.head.message})})):wx.showToast({icon:"none",title:a.head.message})})).finally((function(){setTimeout((function(){wx.hideLoading()}),3e3)})))},onLoad:function(){var a=this;wx.showLoading({title:"加载中",icon:"none"}),t.default.queryfessionalCredi({personId:this.data.personId||n.personId}).then((function(e){if(0==e.head.code&&e.data&&e.data.essionalCredi_1_1){var t=a.data.arr.concat([]);t.map((function(a,t){a.value=e.data["essionalCredi_1_".concat(t+1)]?e.data["essionalCredi_1_".concat(t+1)]:""})),a.setData({arr:t})}})).finally((function(){wx.hideLoading()}))},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/professionalCredit/professionalCredit.js");
 	
