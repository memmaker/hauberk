(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.BE(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.a(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.uB(b)
return new s(c,this)}:function(){if(s===null)s=A.uB(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.uB(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
uG(a,b,c,d){return{i:a,p:b,e:c,x:d}},
uD(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.uE==null){A.Bj()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.n(A.bc("Return interceptor for "+A.J(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.rR
if(o==null)o=$.rR=A.tq(n)
p=q[o]}if(p!=null)return p
p=A.Bt(a)
if(p!=null)return p
if(typeof a=="function")return B.hy
s=Object.getPrototypeOf(a)
if(s==null)return B.cm
if(s===Object.prototype)return B.cm
if(typeof q=="function"){o=$.rR
if(o==null)o=$.rR=A.tq(n)
Object.defineProperty(q,o,{value:B.bx,enumerable:false,writable:true,configurable:true})
return B.bx}return B.bx},
vN(a,b){if(a<0||a>4294967295)throw A.n(A.cL(a,0,4294967295,"length",null))
return J.yP(new Array(a),b)},
vO(a,b){if(a<0)throw A.n(A.aE("Length must be a non-negative integer: "+a,null))
return A.a(new Array(a),b.h("r<0>"))},
vM(a,b){if(a<0)throw A.n(A.aE("Length must be a non-negative integer: "+a,null))
return A.a(new Array(a),b.h("r<0>"))},
yP(a,b){var s=A.a(a,b.h("r<0>"))
s.$flags=1
return s},
yQ(a,b){var s=t.bP
return J.ye(s.a(a),s.a(b))},
vP(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
yS(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.vP(r))break;++b}return b},
yT(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.c(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.vP(q))break}return b},
eb(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.h5.prototype
return J.k4.prototype}if(typeof a=="string")return J.dd.prototype
if(a==null)return J.h6.prototype
if(typeof a=="boolean")return J.h4.prototype
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.de.prototype
if(typeof a=="symbol")return J.ha.prototype
if(typeof a=="bigint")return J.h8.prototype
return a}if(a instanceof A.a1)return a
return J.uD(a)},
iB(a){if(typeof a=="string")return J.dd.prototype
if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.de.prototype
if(typeof a=="symbol")return J.ha.prototype
if(typeof a=="bigint")return J.h8.prototype
return a}if(a instanceof A.a1)return a
return J.uD(a)},
mM(a){if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.de.prototype
if(typeof a=="symbol")return J.ha.prototype
if(typeof a=="bigint")return J.h8.prototype
return a}if(a instanceof A.a1)return a
return J.uD(a)},
Bb(a){if(typeof a=="number")return J.dL.prototype
if(a==null)return a
if(!(a instanceof A.a1))return J.dn.prototype
return a},
Bc(a){if(typeof a=="number")return J.dL.prototype
if(typeof a=="string")return J.dd.prototype
if(a==null)return a
if(!(a instanceof A.a1))return J.dn.prototype
return a},
Bd(a){if(typeof a=="string")return J.dd.prototype
if(a==null)return a
if(!(a instanceof A.a1))return J.dn.prototype
return a},
aA(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eb(a).Z(a,b)},
aZ(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Bm(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.iB(a).p(a,b)},
vh(a,b){return J.mM(a).j(a,b)},
yd(a,b){return J.Bd(a).hh(a,b)},
vi(a,b,c){return J.Bb(a).P(a,b,c)},
ye(a,b){return J.Bc(a).ai(a,b)},
tX(a,b){return J.mM(a).aW(a,b)},
cd(a){return J.eb(a).ga0(a)},
aq(a){return J.mM(a).gN(a)},
dB(a){return J.iB(a).gI(a)},
yf(a){return J.eb(a).gaG(a)},
iK(a){return J.mM(a).e6(a)},
ej(a){return J.eb(a).t(a)},
yg(a,b){return J.mM(a).l6(a,b)},
jZ:function jZ(){},
h4:function h4(){},
h6:function h6(){},
h9:function h9(){},
dg:function dg(){},
kF:function kF(){},
dn:function dn(){},
de:function de(){},
h8:function h8(){},
ha:function ha(){},
r:function r(a){this.$ti=a},
k3:function k3(){},
pe:function pe(a){this.$ti=a},
b_:function b_(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dL:function dL(){},
h5:function h5(){},
k4:function k4(){},
dd:function dd(){}},A={u6:function u6(){},
vS(a){return new A.df("Field '"+a+"' has been assigned during initialization.")},
dM(a){return new A.df("Field '"+a+"' has not been initialized.")},
yW(a){return new A.df("Local '"+a+"' has not been initialized.")},
vT(a){return new A.df("Field '"+a+"' has already been initialized.")},
cP(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
rb(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
wU(a,b,c){return a},
uF(a){var s,r
for(s=$.bP.length,r=0;r<s;++r)if(a===$.bP[r])return!0
return!1},
zs(a,b,c,d){A.hw(b,"start")
if(c!=null){A.hw(c,"end")
if(b>c)A.a0(A.cL(b,0,c,"start",null))}return new A.hO(a,b,c,d.h("hO<0>"))},
pF(a,b,c,d){if(t.gt.b(a))return new A.dF(a,b,c.h("@<0>").al(d).h("dF<1,2>"))
return new A.dP(a,b,c.h("@<0>").al(d).h("dP<1,2>"))},
zt(a,b,c){var s="takeCount"
A.yj(b,s,t.S)
A.hw(b,s)
if(t.gt.b(a))return new A.fQ(a,b,c.h("fQ<0>"))
return new A.dX(a,b,c.h("dX<0>"))},
cG(){return new A.dV("No element")},
yN(){return new A.dV("Too many elements")},
yM(){return new A.dV("Too few elements")},
df:function df(a){this.a=a},
d8:function d8(a){this.a=a},
qx:function qx(){},
L:function L(){},
aG:function aG(){},
hO:function hO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c4:function c4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dP:function dP(a,b,c){this.a=a
this.b=b
this.$ti=c},
dF:function dF(a,b,c){this.a=a
this.b=b
this.$ti=c},
bn:function bn(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
aP:function aP(a,b,c){this.a=a
this.b=b
this.$ti=c},
ak:function ak(a,b,c){this.a=a
this.b=b
this.$ti=c},
cT:function cT(a,b,c){this.a=a
this.b=b
this.$ti=c},
dX:function dX(a,b,c){this.a=a
this.b=b
this.$ti=c},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
hP:function hP(a,b,c){this.a=a
this.b=b
this.$ti=c},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
hR:function hR(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.$ti=c},
hW:function hW(a,b){this.a=a
this.$ti=b},
bp:function bp(a,b){this.a=a
this.$ti=b},
aC:function aC(){},
dp:function dp(){},
fd:function fd(){},
cN:function cN(a,b){this.a=a
this.$ti=b},
xd(a){var s=A.xc(a)
if(s!=null)return s
return"minified:"+a},
Bm(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
J(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ej(a)
return s},
ht(a){var s,r=$.w_
if(r==null)r=$.w_=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
kJ(a){var s,r,q,p
if(a instanceof A.a1)return A.bO(A.cu(a),null)
s=J.eb(a)
if(s===B.hv||s===B.hz||t.cx.b(a)){r=B.bA(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bO(A.cu(a),null)},
w1(a){var s,r,q
if(a==null||typeof a=="number"||A.uw(a))return J.ej(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.d7)return a.t(0)
if(a instanceof A.cq)return a.js(!0)
s=$.y9()
for(r=0;r<1;++r){q=s[r].pC(a)
if(q!=null)return q}return"Instance of '"+A.kJ(a)+"'"},
w0(){return Date.now()},
zg(){var s,r
if($.q7!==0)return
$.q7=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.q7=1e6
$.ud=new A.q6(r)},
vZ(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
zh(a){var s,r,q,p=A.a([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.o)(a),++r){q=a[r]
if(!A.fr(q))throw A.n(A.iz(q))
if(q<=65535)B.a.j(p,q)
else if(q<=1114111){B.a.j(p,55296+(B.c.eE(q-65536,10)&1023))
B.a.j(p,56320+(q&1023))}else throw A.n(A.iz(q))}return A.vZ(p)},
w2(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.fr(q))throw A.n(A.iz(q))
if(q<0)throw A.n(A.iz(q))
if(q>65535)return A.zh(a)}return A.vZ(a)},
b4(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.eE(s,10)|55296)>>>0,s&1023|56320)}}throw A.n(A.cL(a,0,1114111,null,null))},
eZ(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
zf(a){var s=A.eZ(a).getFullYear()+0
return s},
zd(a){var s=A.eZ(a).getMonth()+1
return s},
z9(a){var s=A.eZ(a).getDate()+0
return s},
za(a){var s=A.eZ(a).getHours()+0
return s},
zc(a){var s=A.eZ(a).getMinutes()+0
return s},
ze(a){var s=A.eZ(a).getSeconds()+0
return s},
zb(a){var s=A.eZ(a).getMilliseconds()+0
return s},
z8(a){var s=a.$thrownJsError
if(s==null)return null
return A.ec(s)},
Bh(a){throw A.n(A.iz(a))},
c(a,b){if(a==null)J.dB(a)
throw A.n(A.mL(a,b))},
mL(a,b){var s,r="index"
if(!A.fr(b))return new A.cg(!0,b,r,null)
s=A.u(J.dB(a))
if(b<0||b>=s)return A.oD(b,s,a,null,r)
return A.hv(b,r)},
iz(a){return new A.cg(!0,a,null,null)},
n(a){return A.aR(a,new Error())},
aR(a,b){var s
if(a==null)a=new A.cR()
b.dartException=a
s=A.BL
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
BL(){return J.ej(this.dartException)},
a0(a,b){throw A.aR(a,b==null?new Error():b)},
br(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.a0(A.Aa(a,b,c),s)},
Aa(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.d.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.hS("'"+s+"': Cannot "+o+" "+l+k+n)},
o(a){throw A.n(A.b0(a))},
cS(a){var s,r,q,p,o,n
a=A.x8(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.rq(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
rr(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
wh(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
u7(a,b){var s=b==null,r=s?null:b.method
return new A.k5(a,r,s?null:b.receiver)},
ds(a){if(a==null)return new A.pZ(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.ef(a,a.dartException)
return A.AW(a)},
ef(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
AW(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.eE(r,16)&8191)===10)switch(q){case 438:return A.ef(a,A.u7(A.J(s)+" (Error "+q+")",null))
case 445:case 5007:A.J(s)
return A.ef(a,new A.hp())}}if(a instanceof TypeError){p=$.xY()
o=$.xZ()
n=$.y_()
m=$.y0()
l=$.y3()
k=$.y4()
j=$.y2()
$.y1()
i=$.y6()
h=$.y5()
g=p.bT(s)
if(g!=null)return A.ef(a,A.u7(A.a2(s),g))
else{g=o.bT(s)
if(g!=null){g.method="call"
return A.ef(a,A.u7(A.a2(s),g))}else if(n.bT(s)!=null||m.bT(s)!=null||l.bT(s)!=null||k.bT(s)!=null||j.bT(s)!=null||m.bT(s)!=null||i.bT(s)!=null||h.bT(s)!=null){A.a2(s)
return A.ef(a,new A.hp())}}return A.ef(a,new A.ll(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.hK()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ef(a,new A.cg(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.hK()
return a},
ec(a){var s
if(a==null)return new A.io(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.io(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
uH(a){if(a==null)return J.cd(a)
if(typeof a=="object")return A.ht(a)
return J.cd(a)},
B3(a){if(typeof a=="number")return B.e.ga0(a)
if(a instanceof A.mC)return A.ht(a)
if(a instanceof A.cq)return a.ga0(a)
return A.uH(a)},
wX(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
An(a,b,c,d,e,f){t.gY.a(a)
switch(A.u(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.n(new A.rH("Unsupported number of arguments for wrapped closure"))},
mK(a,b){var s=a.$identity
if(!!s)return s
s=A.B4(a,b)
a.$identity=s
return s},
B4(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.An)},
ys(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.l7().constructor.prototype):Object.create(new A.em(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.vt(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.yo(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.vt(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
yo(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.n("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.yl)}throw A.n("Error in functionType of tearoff")},
yp(a,b,c,d){var s=A.vs
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
vt(a,b,c,d){if(c)return A.yr(a,b,d)
return A.yp(b.length,d,a,b)},
yq(a,b,c,d){var s=A.vs,r=A.ym
switch(b?-1:a){case 0:throw A.n(new A.kZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
yr(a,b,c){var s,r
if($.vq==null)$.vq=A.vp("interceptor")
if($.vr==null)$.vr=A.vp("receiver")
s=b.length
r=A.yq(s,c,a,b)
return r},
uB(a){return A.ys(a)},
yl(a,b){return A.it(v.typeUniverse,A.cu(a.a),b)},
vs(a){return a.a},
ym(a){return a.b},
vp(a){var s,r,q,p=new A.em("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.n(A.aE("Field name "+a+" not found.",null))},
tq(a){return v.getIsolateTag(a)},
Bt(a){var s,r,q,p,o,n=A.a2($.x0.$1(a)),m=$.tm[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.tv[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.tc($.wS.$2(a,n))
if(q!=null){m=$.tm[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.tv[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.tC(s)
$.tm[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.tv[n]=s
return s}if(p==="-"){o=A.tC(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.x6(a,s)
if(p==="*")throw A.n(A.bc(n))
if(v.leafTags[n]===true){o=A.tC(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.x6(a,s)},
x6(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.uG(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
tC(a){return J.uG(a,!1,null,!!a.$ibK)},
Bw(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.tC(s)
else return J.uG(s,c,null,null)},
Bj(){if(!0===$.uE)return
$.uE=!0
A.Bk()},
Bk(){var s,r,q,p,o,n,m,l
$.tm=Object.create(null)
$.tv=Object.create(null)
A.Bi()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.x7.$1(o)
if(n!=null){m=A.Bw(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Bi(){var s,r,q,p,o,n,m=B.cD()
m=A.fu(B.cE,A.fu(B.cF,A.fu(B.bB,A.fu(B.bB,A.fu(B.cG,A.fu(B.cH,A.fu(B.cI(B.bA),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.x0=new A.ts(p)
$.wS=new A.tt(o)
$.x7=new A.tu(n)},
fu(a,b){return a(b)||b},
zP(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.c(b,s)
if(!J.aA(r,b[s]))return!1}return!0},
B6(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
vQ(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.n(A.vC("Illegal RegExp pattern ("+String(o)+")",a))},
BB(a,b,c){var s=a.indexOf(b,c)
return s>=0},
wW(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
x8(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bj(a,b,c){var s
if(typeof b=="string")return A.BD(a,b,c)
if(b instanceof A.h7){s=b.gj4()
s.lastIndex=0
return a.replace(s,A.wW(c))}return A.BC(a,b,c)},
BC(a,b,c){var s,r,q,p
for(s=J.yd(b,a),s=s.gN(s),r=0,q="";s.q();){p=s.gH()
q=q+a.substring(r,p.gii())+c
r=p.ghv()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
BD(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.x8(b),"g"),A.wW(c))},
wQ(a){return a},
xa(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.hh(0,a),s=new A.hY(s.a,s.b,s.c),r=t.lu,q=0,p="";s.q();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.J(A.wQ(B.i.aJ(a,q,m)))+A.J(c.$1(o))
q=m+n[0].length}s=p+A.J(A.wQ(B.i.cT(a,q)))
return s.charCodeAt(0)==0?s:s},
O:function O(a,b){this.a=a
this.b=b},
W:function W(a){this.a=a},
es:function es(){},
bQ:function bQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
i8:function i8(a,b){this.a=a
this.$ti=b},
i9:function i9(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dK:function dK(a,b){this.a=a
this.$ti=b},
q6:function q6(a){this.a=a},
hE:function hE(){},
rq:function rq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hp:function hp(){},
k5:function k5(a,b,c){this.a=a
this.b=b
this.c=c},
ll:function ll(a){this.a=a},
pZ:function pZ(a){this.a=a},
io:function io(a){this.a=a
this.b=null},
d7:function d7(){},
j8:function j8(){},
j9:function j9(){},
lc:function lc(){},
l7:function l7(){},
em:function em(a,b){this.a=a
this.b=b},
kZ:function kZ(a){this.a=a},
c2:function c2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pf:function pf(a){this.a=a},
pp:function pp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
b2:function b2(a,b){this.a=a
this.$ti=b},
c3:function c3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cI:function cI(a,b){this.a=a
this.$ti=b},
cH:function cH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bl:function bl(a,b){this.a=a
this.$ti=b},
dN:function dN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hb:function hb(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ts:function ts(a){this.a=a},
tt:function tt(a){this.a=a},
tu:function tu(a){this.a=a},
cq:function cq(){},
fk:function fk(){},
fl:function fl(){},
h7:function h7(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ia:function ia(a){this.b=a},
lw:function lw(a,b,c){this.a=a
this.b=b
this.c=c},
hY:function hY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
l8:function l8(a,b){this.a=a
this.c=b},
mx:function mx(a,b,c){this.a=a
this.b=b
this.c=c},
my:function my(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
BE(a){throw A.aR(A.vS(a),new Error())},
b(){throw A.aR(A.dM(""),new Error())},
as(){throw A.aR(A.vT(""),new Error())},
eg(){throw A.aR(A.vS(""),new Error())},
e2(){var s=new A.rE()
return s.b=s},
rE:function rE(){this.b=null},
cZ(a,b,c){if(a>>>0!==a||a>=c)throw A.n(A.mL(b,a))},
eQ:function eQ(){},
hl:function hl(){},
kp:function kp(){},
eR:function eR(){},
hj:function hj(){},
hk:function hk(){},
kq:function kq(){},
kr:function kr(){},
ks:function ks(){},
kt:function kt(){},
ku:function ku(){},
kv:function kv(){},
kw:function kw(){},
hm:function hm(){},
kx:function kx(){},
ib:function ib(){},
ic:function ic(){},
id:function id(){},
ie:function ie(){},
uj(a,b){var s=b.c
return s==null?b.c=A.ir(a,"jI",[b.x]):s},
wc(a){var s=a.w
if(s===6||s===7)return A.wc(a.x)
return s===11||s===12},
zn(a){return a.as},
By(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ap(a){return A.t5(v.typeUniverse,a,!1)},
e8(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.e8(a1,s,a3,a4)
if(r===s)return a2
return A.wt(a1,r,!0)
case 7:s=a2.x
r=A.e8(a1,s,a3,a4)
if(r===s)return a2
return A.ws(a1,r,!0)
case 8:q=a2.y
p=A.ft(a1,q,a3,a4)
if(p===q)return a2
return A.ir(a1,a2.x,p)
case 9:o=a2.x
n=A.e8(a1,o,a3,a4)
m=a2.y
l=A.ft(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.ur(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ft(a1,j,a3,a4)
if(i===j)return a2
return A.wu(a1,k,i)
case 11:h=a2.x
g=A.e8(a1,h,a3,a4)
f=a2.y
e=A.AT(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.wr(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ft(a1,d,a3,a4)
o=a2.x
n=A.e8(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.us(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.n(A.bG("Attempted to substitute unexpected RTI kind "+a0))}},
ft(a,b,c,d){var s,r,q,p,o=b.length,n=A.t6(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.e8(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
AU(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.t6(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.e8(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
AT(a,b,c,d){var s,r=b.a,q=A.ft(a,r,c,d),p=b.b,o=A.ft(a,p,c,d),n=b.c,m=A.AU(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.lZ()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
wV(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Bf(s)
return a.$S()}return null},
Bl(a,b){var s
if(A.wc(b))if(a instanceof A.d7){s=A.wV(a)
if(s!=null)return s}return A.cu(a)},
cu(a){if(a instanceof A.a1)return A.z(a)
if(Array.isArray(a))return A.M(a)
return A.uv(J.eb(a))},
M(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
z(a){var s=a.$ti
return s!=null?s:A.uv(a)},
uv(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Ak(a,s)},
Ak(a,b){var s=a instanceof A.d7?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.zY(v.typeUniverse,s.name)
b.$ccache=r
return r},
Bf(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.t5(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
Be(a){return A.e9(A.z(a))},
uz(a){var s
if(a instanceof A.cq)return A.B8(a.$r,a.fT())
s=a instanceof A.d7?A.wV(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.yf(a).a
if(Array.isArray(a))return A.M(a)
return A.cu(a)},
e9(a){var s=a.r
return s==null?a.r=new A.mC(a):s},
B8(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.c(q,0)
s=A.it(v.typeUniverse,A.uz(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.c(q,r)
s=A.ww(v.typeUniverse,s,A.uz(q[r]))}return A.it(v.typeUniverse,s,a)},
ca(a){return A.e9(A.t5(v.typeUniverse,a,!1))},
Aj(a){var s=this
s.b=A.AR(s)
return s.b(a)},
AR(a){var s,r,q,p,o
if(a===t.K)return A.At
if(A.ed(a))return A.Ax
s=a.w
if(s===6)return A.Ah
if(s===1)return A.wH
if(s===7)return A.Ao
r=A.AQ(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.ed)){a.f="$i"+q
if(q==="D")return A.Ar
if(a===t._)return A.Aq
return A.Aw}}else if(s===10){p=A.B6(a.x,a.y)
o=p==null?A.wH:p
return o==null?A.fo(o):o}return A.Af},
AQ(a){if(a.w===8){if(a===t.S)return A.fr
if(a===t.i||a===t.cZ)return A.As
if(a===t.N)return A.Av
if(a===t.y)return A.uw}return null},
Ai(a){var s=this,r=A.Ae
if(A.ed(s))r=A.A1
else if(s===t.K)r=A.fo
else if(A.fx(s)){r=A.Ag
if(s===t.aV)r=A.wz
else if(s===t.jv)r=A.tc
else if(s===t.fU)r=A.A_
else if(s===t.ae)r=A.wA
else if(s===t.dz)r=A.A0
else if(s===t.mU)r=A.bZ}else if(s===t.S)r=A.u
else if(s===t.N)r=A.a2
else if(s===t.y)r=A.dr
else if(s===t.cZ)r=A.e7
else if(s===t.i)r=A.bA
else if(s===t._)r=A.P
s.a=r
return s.a(a)},
Af(a){var s=this
if(a==null)return A.fx(s)
return A.Bn(v.typeUniverse,A.Bl(a,s),s)},
Ah(a){if(a==null)return!0
return this.x.b(a)},
Aw(a){var s,r=this
if(a==null)return A.fx(r)
s=r.f
if(a instanceof A.a1)return!!a[s]
return!!J.eb(a)[s]},
Ar(a){var s,r=this
if(a==null)return A.fx(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.a1)return!!a[s]
return!!J.eb(a)[s]},
Aq(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.a1)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
wG(a){if(typeof a=="object"){if(a instanceof A.a1)return t._.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Ae(a){var s=this
if(a==null){if(A.fx(s))return a}else if(s.b(a))return a
throw A.aR(A.wB(a,s),new Error())},
Ag(a){var s=this
if(a==null||s.b(a))return a
throw A.aR(A.wB(a,s),new Error())},
wB(a,b){return new A.ip("TypeError: "+A.wk(a,A.bO(b,null)))},
wk(a,b){return A.js(a)+": type '"+A.bO(A.uz(a),null)+"' is not a subtype of type '"+b+"'"},
bX(a,b){return new A.ip("TypeError: "+A.wk(a,b))},
Ao(a){var s=this
return s.x.b(a)||A.uj(v.typeUniverse,s).b(a)},
At(a){return a!=null},
fo(a){if(a!=null)return a
throw A.aR(A.bX(a,"Object"),new Error())},
Ax(a){return!0},
A1(a){return a},
wH(a){return!1},
uw(a){return!0===a||!1===a},
dr(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aR(A.bX(a,"bool"),new Error())},
A_(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aR(A.bX(a,"bool?"),new Error())},
bA(a){if(typeof a=="number")return a
throw A.aR(A.bX(a,"double"),new Error())},
A0(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aR(A.bX(a,"double?"),new Error())},
fr(a){return typeof a=="number"&&Math.floor(a)===a},
u(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aR(A.bX(a,"int"),new Error())},
wz(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aR(A.bX(a,"int?"),new Error())},
As(a){return typeof a=="number"},
e7(a){if(typeof a=="number")return a
throw A.aR(A.bX(a,"num"),new Error())},
wA(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aR(A.bX(a,"num?"),new Error())},
Av(a){return typeof a=="string"},
a2(a){if(typeof a=="string")return a
throw A.aR(A.bX(a,"String"),new Error())},
tc(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aR(A.bX(a,"String?"),new Error())},
P(a){if(A.wG(a))return a
throw A.aR(A.bX(a,"JSObject"),new Error())},
bZ(a){if(a==null)return a
if(A.wG(a))return a
throw A.aR(A.bX(a,"JSObject?"),new Error())},
wO(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bO(a[q],b)
return s},
AK(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.wO(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bO(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
wC(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.a([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.j(a4,"T"+(r+q))
for(p=t.iD,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.c(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bO(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bO(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bO(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bO(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bO(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bO(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bO(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bO(a.x,b)+">"
if(l===8){p=A.AV(a.x)
o=a.y
return o.length>0?p+("<"+A.wO(o,b)+">"):p}if(l===10)return A.AK(a,b)
if(l===11)return A.wC(a,b,null)
if(l===12)return A.wC(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c(b,n)
return b[n]}return"?"},
AV(a){var s=A.xc(a)
if(s!=null)return s
return"minified:"+a},
zZ(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
zY(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.t5(a,b,!1)
else if(typeof m=="number"){s=m
r=A.is(a,5,"#")
q=A.t6(s)
for(p=0;p<s;++p)q[p]=r
o=A.ir(a,b,q)
n[b]=o
return o}else return m},
zX(a,b){return A.wx(a.tR,b)},
zW(a,b){return A.wx(a.eT,b)},
t5(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.wv(a,null,b,!1)
r.set(b,s)
return s},
it(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.wv(a,b,c,!0)
q.set(c,r)
return r},
ww(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.ur(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
wv(a,b,c,d){return A.zN(A.zH(a,b,c,d))},
dq(a,b){b.a=A.Ai
b.b=A.Aj
return b},
is(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.c6(null,null)
s.w=b
s.as=c
r=A.dq(a,s)
a.eC.set(c,r)
return r},
wt(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.zU(a,b,r,c)
a.eC.set(r,s)
return s},
zU(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.ed(b))if(!(b===t.g||b===t.w))if(s!==6)r=s===7&&A.fx(b.x)
if(r)return b
else if(s===1)return t.g}q=new A.c6(null,null)
q.w=6
q.x=b
q.as=c
return A.dq(a,q)},
ws(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.zS(a,b,r,c)
a.eC.set(r,s)
return s},
zS(a,b,c,d){var s,r
if(d){s=b.w
if(A.ed(b)||b===t.K)return b
else if(s===1)return A.ir(a,"jI",[b])
else if(b===t.g||b===t.w)return t.gK}r=new A.c6(null,null)
r.w=7
r.x=b
r.as=c
return A.dq(a,r)},
zV(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.c6(null,null)
s.w=13
s.x=b
s.as=q
r=A.dq(a,s)
a.eC.set(q,r)
return r},
iq(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
zR(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
ir(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iq(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.c6(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.dq(a,r)
a.eC.set(p,q)
return q},
ur(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.iq(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.c6(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.dq(a,o)
a.eC.set(q,n)
return n},
wu(a,b,c){var s,r,q="+"+(b+"("+A.iq(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.c6(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.dq(a,s)
a.eC.set(q,r)
return r},
wr(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iq(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iq(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.zR(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.c6(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.dq(a,p)
a.eC.set(r,o)
return o},
us(a,b,c,d){var s,r=b.as+("<"+A.iq(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.zT(a,b,c,r,d)
a.eC.set(r,s)
return s},
zT(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.t6(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.e8(a,b,r,0)
m=A.ft(a,c,r,0)
return A.us(a,n,m,c!==m)}}l=new A.c6(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.dq(a,l)},
zH(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
zN(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.zJ(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.wo(a,r,l,k,!1)
else if(q===46)r=A.wo(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.e6(a.u,a.e,k.pop()))
break
case 94:k.push(A.zV(a.u,k.pop()))
break
case 35:k.push(A.is(a.u,5,"#"))
break
case 64:k.push(A.is(a.u,2,"@"))
break
case 126:k.push(A.is(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.zL(a,k)
break
case 38:A.zK(a,k)
break
case 63:p=a.u
k.push(A.wt(p,A.e6(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.ws(p,A.e6(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.zI(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.wp(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.zO(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.e6(a.u,a.e,m)},
zJ(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
wo(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.zZ(s,o.x)[p]
if(n==null)A.a0('No "'+p+'" in "'+A.zn(o)+'"')
d.push(A.it(s,o,n))}else d.push(p)
return m},
zL(a,b){var s,r=a.u,q=A.wn(a,b),p=b.pop()
if(typeof p=="string")b.push(A.ir(r,p,q))
else{s=A.e6(r,a.e,p)
switch(s.w){case 11:b.push(A.us(r,s,q,a.n))
break
default:b.push(A.ur(r,s,q))
break}}},
zI(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.wn(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.e6(p,a.e,o)
q=new A.lZ()
q.a=s
q.b=n
q.c=m
b.push(A.wr(p,r,q))
return
case-4:b.push(A.wu(p,b.pop(),s))
return
default:throw A.n(A.bG("Unexpected state under `()`: "+A.J(o)))}},
zK(a,b){var s=b.pop()
if(0===s){b.push(A.is(a.u,1,"0&"))
return}if(1===s){b.push(A.is(a.u,4,"1&"))
return}throw A.n(A.bG("Unexpected extended operation "+A.J(s)))},
wn(a,b){var s=b.splice(a.p)
A.wp(a.u,a.e,s)
a.p=b.pop()
return s},
e6(a,b,c){if(typeof c=="string")return A.ir(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.zM(a,b,c)}else return c},
wp(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.e6(a,b,c[s])},
zO(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.e6(a,b,c[s])},
zM(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.n(A.bG("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.n(A.bG("Bad index "+c+" for "+b.t(0)))},
Bn(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aV(a,b,null,c,null)
r.set(c,s)}return s},
aV(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.ed(d))return!0
s=b.w
if(s===4)return!0
if(A.ed(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aV(a,c[b.x],c,d,e))return!0
q=d.w
p=t.g
if(b===p||b===t.w){if(q===7)return A.aV(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.aV(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aV(a,b.x,c,d,e))return!1
return A.aV(a,A.uj(a,b),c,d,e)}if(s===6)return A.aV(a,p,c,d,e)&&A.aV(a,b.x,c,d,e)
if(q===7){if(A.aV(a,b,c,d.x,e))return!0
return A.aV(a,b,c,A.uj(a,d),e)}if(q===6)return A.aV(a,b,c,p,e)||A.aV(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.gY)return!0
o=s===10
if(o&&d===t.lZ)return!0
if(q===12){if(b===t.dY)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.aV(a,j,c,i,e)||!A.aV(a,i,e,j,c))return!1}return A.wF(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.wF(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Ap(a,b,c,d,e)}if(o&&q===10)return A.Au(a,b,c,d,e)
return!1},
wF(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aV(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.aV(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aV(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aV(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.aV(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
Ap(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.it(a,b,r[o])
return A.wy(a,p,null,c,d.y,e)}return A.wy(a,b.y,null,c,d.y,e)},
wy(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aV(a,b[s],d,e[s],f))return!1
return!0},
Au(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aV(a,r[s],c,q[s],e))return!1
return!0},
fx(a){var s=a.w,r=!0
if(!(a===t.g||a===t.w))if(!A.ed(a))if(s!==6)r=s===7&&A.fx(a.x)
return r},
ed(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.iD},
wx(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
t6(a){return a>0?new Array(a):v.typeUniverse.sEA},
c6:function c6(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
lZ:function lZ(){this.c=this.b=this.a=null},
mC:function mC(a){this.a=a},
lQ:function lQ(){},
ip:function ip(a){this.a=a},
zB(){var s,r,q
if(self.scheduleImmediate!=null)return A.AZ()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.mK(new A.ry(s),1)).observe(r,{childList:true})
return new A.rx(s,r,q)}else if(self.setImmediate!=null)return A.B_()
return A.B0()},
zC(a){self.scheduleImmediate(A.mK(new A.rz(t.O.a(a)),0))},
zD(a){self.setImmediate(A.mK(new A.rA(t.O.a(a)),0))},
zE(a){t.O.a(a)
A.zQ(0,a)},
zQ(a,b){var s=new A.t3()
s.lF(a,b)
return s},
wq(a,b,c){return 0},
tZ(a){var s
if(t.fz.b(a)){s=a.gei()
if(s!=null)return s}return B.cM},
wl(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.j_;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.zo()
b.lJ(new A.cw(new A.cg(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.jb(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.eA()
b.en(o.a)
A.fi(b,p)
return}b.a^=2
A.tj(null,null,b.b,t.O.a(new A.rK(o,b)))},
fi(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.th(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.fi(d.a,c)
q.a=l
k=l.a}p=d.a
j=p.c
q.b=n
q.c=j
if(o){i=c.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=c.b.b
if(n){p=p.b===h
p=!(p||p)}else p=!1
if(p){s.a(j)
A.th(j.a,j.b)
return}g=$.b5
if(g!==h)$.b5=h
else g=null
c=c.c
if((c&15)===8)new A.rO(q,d,n).$0()
else if(o){if((c&1)!==0)new A.rN(q,j).$0()}else if((c&2)!==0)new A.rM(d,q).$0()
if(g!=null)$.b5=g
c=q.c
if(c instanceof A.bV){p=q.a.$ti
p=p.h("jI<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.eC(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.wl(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.eC(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
AL(a,b){var s=t.ng
if(s.b(a))return s.a(a)
s=t.mq
if(s.b(a))return s.a(a)
throw A.n(A.tY(a,"onError",u.c))},
AA(){var s,r
for(s=$.fs;s!=null;s=$.fs){$.ix=null
r=s.b
$.fs=r
if(r==null)$.iw=null
s.a.$0()}},
AS(){$.ux=!0
try{A.AA()}finally{$.ix=null
$.ux=!1
if($.fs!=null)$.vd().$1(A.wT())}},
wP(a){var s=new A.lz(a),r=$.iw
if(r==null){$.fs=$.iw=s
if(!$.ux)$.vd().$1(A.wT())}else $.iw=r.b=s},
AP(a){var s,r,q,p=$.fs
if(p==null){A.wP(a)
$.ix=$.iw
return}s=new A.lz(a)
r=$.ix
if(r==null){s.b=p
$.fs=$.ix=s}else{q=r.b
s.b=q
$.ix=r.b=s
if(q==null)$.iw=s}},
th(a,b){A.AP(new A.ti(a,b))},
wM(a,b,c,d,e){var s,r=$.b5
if(r===c)return d.$0()
$.b5=c
s=r
try{r=d.$0()
return r}finally{$.b5=s}},
wN(a,b,c,d,e,f,g){var s,r=$.b5
if(r===c)return d.$1(e)
$.b5=c
s=r
try{r=d.$1(e)
return r}finally{$.b5=s}},
AM(a,b,c,d,e,f,g,h,i){var s,r=$.b5
if(r===c)return d.$2(e,f)
$.b5=c
s=r
try{r=d.$2(e,f)
return r}finally{$.b5=s}},
tj(a,b,c,d){t.O.a(d)
if(B.ad!==c){d=c.on(d)
d=d}A.wP(d)},
ry:function ry(a){this.a=a},
rx:function rx(a,b,c){this.a=a
this.b=b
this.c=c},
rz:function rz(a){this.a=a},
rA:function rA(a){this.a=a},
t3:function t3(){},
t4:function t4(a,b){this.a=a
this.b=b},
ah:function ah(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
R:function R(a,b){this.a=a
this.$ti=b},
cw:function cw(a,b){this.a=a
this.b=b},
i5:function i5(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bV:function bV(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
rI:function rI(a,b){this.a=a
this.b=b},
rL:function rL(a,b){this.a=a
this.b=b},
rK:function rK(a,b){this.a=a
this.b=b},
rJ:function rJ(a,b){this.a=a
this.b=b},
rO:function rO(a,b,c){this.a=a
this.b=b
this.c=c},
rP:function rP(a,b){this.a=a
this.b=b},
rQ:function rQ(a){this.a=a},
rN:function rN(a,b){this.a=a
this.b=b},
rM:function rM(a,b){this.a=a
this.b=b},
lz:function lz(a){this.a=a
this.b=null},
hL:function hL(){},
r8:function r8(a,b){this.a=a
this.b=b},
r9:function r9(a,b){this.a=a
this.b=b},
iu:function iu(){},
mp:function mp(){},
t_:function t_(a,b){this.a=a
this.b=b},
t0:function t0(a,b,c){this.a=a
this.b=b
this.c=c},
ti:function ti(a,b){this.a=a
this.b=b},
yX(a,b){return new A.c2(a.h("@<0>").al(b).h("c2<1,2>"))},
B(a,b,c){return b.h("@<0>").al(c).h("u8<1,2>").a(A.wX(a,new A.c2(b.h("@<0>").al(c).h("c2<1,2>"))))},
C(a,b){return new A.c2(a.h("@<0>").al(b).h("c2<1,2>"))},
vU(a){return new A.cV(a.h("cV<0>"))},
b9(a){return new A.cV(a.h("cV<0>"))},
up(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
uo(a,b,c){var s=new A.cW(a,b,c.h("cW<0>"))
s.c=a.e
return s},
cJ(a,b,c){var s=A.yX(b,c)
s.U(0,a)
return s},
yY(a,b){var s,r,q=A.vU(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.o)(a),++r)q.j(0,b.a(a[r]))
return q},
vV(a,b){var s=A.vU(b)
s.U(0,a)
return s},
u9(a){var s,r
if(A.uF(a))return"{...}"
s=new A.dW("")
try{r={}
B.a.j($.bP,a)
s.a+="{"
r.a=!0
a.ae(0,new A.pD(r,s))
s.a+="}"}finally{if(0>=$.bP.length)return A.c($.bP,-1)
$.bP.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
he(a){return new A.hd(A.ao(A.yZ(null),null,!1,a.h("0?")),a.h("hd<0>"))},
yZ(a){return 8},
cV:function cV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
md:function md(a){this.a=a
this.c=this.b=null},
cW:function cW(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
Y:function Y(){},
aD:function aD(){},
pC:function pC(a){this.a=a},
pD:function pD(a,b){this.a=a
this.b=b},
hd:function hd(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
e5:function e5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
f9:function f9(){},
ik:function ik(){},
AJ(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ds(r)
q=A.vC(String(s),null)
throw A.n(q)}q=A.td(p)
return q},
td(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.m8(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.td(a[s])
return a},
vR(a,b,c){return new A.hc(a,b)},
A9(a){return a.pM()},
zF(a,b){return new A.rS(a,[],A.B5())},
zG(a,b,c){var s,r=new A.dW(""),q=A.zF(r,b)
q.fl(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
m8:function m8(a,b){this.a=a
this.b=b
this.c=null},
m9:function m9(a){this.a=a},
jc:function jc(){},
je:function je(){},
hc:function hc(a,b){this.a=a
this.b=b},
k7:function k7(a,b){this.a=a
this.b=b},
k6:function k6(){},
ph:function ph(a){this.b=a},
pg:function pg(a){this.a=a},
rT:function rT(){},
rU:function rU(a,b){this.a=a
this.b=b},
rS:function rS(a,b,c){this.c=a
this.a=b
this.b=c},
vA(a){return new A.ju(new WeakMap(),a.h("ju<0>"))},
vB(a){var s=!0
s=typeof a=="string"
if(s)A.yB(a)},
yB(a){throw A.n(A.tY(a,"object","Expandos are not allowed on strings, numbers, bools, records or null"))},
yy(a,b){a=A.aR(a,new Error())
if(a==null)a=A.fo(a)
a.stack=b.t(0)
throw a},
ao(a,b,c,d){var s,r=c?J.vO(a,d):J.vN(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
z_(a,b,c){var s,r,q=A.a([],c.h("r<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.o)(a),++r)B.a.j(q,c.a(a[r]))
q.$flags=1
return q},
a6(a,b){var s,r
if(Array.isArray(a))return A.a(a.slice(0),b.h("r<0>"))
s=A.a([],b.h("r<0>"))
for(r=J.aq(a);r.q();)B.a.j(s,r.gH())
return s},
ra(a){var s,r,q
A.hw(0,"start")
if(Array.isArray(a)){s=a
r=s.length
return A.w2(r<r?s.slice(0,r):s)}q=A.a6(a,t.S)
return A.w2(q)},
kT(a){return new A.h7(a,A.vQ(a,!1,!0,!1,!1,""))},
uk(a,b,c){var s=J.aq(b)
if(!s.q())return a
if(c.length===0){do a+=A.J(s.gH())
while(s.q())}else{a+=A.J(s.gH())
while(s.q())a=a+c+A.J(s.gH())}return a},
zo(){return A.ec(new Error())},
yu(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
vu(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
jh(a){if(a>=10)return""+a
return"0"+a},
js(a){if(typeof a=="number"||A.uw(a)||a==null)return J.ej(a)
if(typeof a=="string")return JSON.stringify(a)
return A.w1(a)},
yz(a,b){A.wU(a,"error",t.K)
A.wU(b,"stackTrace",t.gl)
A.yy(a,b)},
bG(a){return new A.iQ(a)},
aE(a,b){return new A.cg(!1,null,b,a)},
tY(a,b,c){return new A.cg(!0,a,b,c)},
yj(a,b,c){return a},
w3(a){var s=null
return new A.f1(s,s,!1,s,s,a)},
hv(a,b){return new A.f1(null,null,!0,a,b,"Value not in range")},
cL(a,b,c,d,e){return new A.f1(b,c,!0,a,d,"Invalid value")},
uf(a,b,c){if(0>a||a>c)throw A.n(A.cL(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.n(A.cL(b,a,c,"end",null))
return b}return c},
hw(a,b){if(a<0)throw A.n(A.cL(a,0,null,b,null))
return a},
oD(a,b,c,d,e){return new A.jX(b,!0,a,e,"Index out of range")},
cp(a){return new A.hS(a)},
bc(a){return new A.lk(a)},
cO(a){return new A.dV(a)},
b0(a){return new A.jd(a)},
vC(a,b){return new A.ol(a,b)},
yO(a,b,c){var s,r
if(A.uF(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.a([],t.s)
B.a.j($.bP,a)
try{A.Ay(a,s)}finally{if(0>=$.bP.length)return A.c($.bP,-1)
$.bP.pop()}r=A.uk(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
pd(a,b,c){var s,r
if(A.uF(a))return b+"..."+c
s=new A.dW(b)
B.a.j($.bP,a)
try{r=s
r.a=A.uk(r.a,a,", ")}finally{if(0>=$.bP.length)return A.c($.bP,-1)
$.bP.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Ay(a,b){var s,r,q,p,o,n,m,l=a.gN(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.q())return
s=A.J(l.gH())
B.a.j(b,s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return A.c(b,-1)
r=b.pop()
if(0>=b.length)return A.c(b,-1)
q=b.pop()}else{p=l.gH();++j
if(!l.q()){if(j<=4){B.a.j(b,A.J(p))
return}r=A.J(p)
if(0>=b.length)return A.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gH();++j
for(;l.q();p=o,o=n){n=l.gH();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2;--j}B.a.j(b,"...")
return}}q=A.J(p)
r=A.J(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.j(b,m)
B.a.j(b,q)
B.a.j(b,r)},
ub(a,b,c,d){var s
if(B.am===c){s=B.c.ga0(a)
b=J.cd(b)
return A.rb(A.cP(A.cP($.n7(),s),b))}if(B.am===d){s=B.c.ga0(a)
b=J.cd(b)
c=J.cd(c)
return A.rb(A.cP(A.cP(A.cP($.n7(),s),b),c))}s=B.c.ga0(a)
b=J.cd(b)
c=J.cd(c)
d=J.cd(d)
d=A.rb(A.cP(A.cP(A.cP(A.cP($.n7(),s),b),c),d))
return d},
z7(a){var s,r,q=$.n7()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.o)(a),++r)q=A.cP(q,J.cd(a[r]))
return A.rb(q)},
uI(a){A.tE(a)},
eu:function eu(a,b,c){this.a=a
this.b=b
this.c=c},
rF:function rF(){},
am:function am(){},
iQ:function iQ(a){this.a=a},
cR:function cR(){},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f1:function f1(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
jX:function jX(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hS:function hS(a){this.a=a},
lk:function lk(a){this.a=a},
dV:function dV(a){this.a=a},
jd:function jd(a){this.a=a},
kB:function kB(){},
hK:function hK(){},
rH:function rH(a){this.a=a},
ol:function ol(a,b){this.a=a
this.b=b},
k:function k(){},
aO:function aO(a,b,c){this.a=a
this.b=b
this.$ti=c},
aK:function aK(){},
a1:function a1(){},
mz:function mz(){},
qW:function qW(){this.b=this.a=0},
dW:function dW(a){this.a=a},
ju:function ju(a,b){this.a=a
this.$ti=b},
zj(a){var s
if(a==null)s=B.cL
else{s=new A.mn()
s.lE(a)}return s},
m7:function m7(){},
mn:function mn(){this.b=this.a=0},
jK:function jK(){},
op:function op(){},
oq:function oq(a,b){this.a=a
this.b=b},
oo:function oo(a,b,c){this.a=a
this.b=b
this.c=c},
on:function on(a,b,c){this.a=a
this.b=b
this.c=c},
jw:function jw(){},
lR:function lR(){},
jA:function jA(){},
jD:function jD(){var _=this
_.a=null
_.d=_.c=_.b=$},
lU:function lU(){},
rs(a){return new A.lr(a)},
ki:function ki(){},
lr:function lr(a){this.a=a},
rt:function rt(a){this.a=a},
iV:function iV(a){this.a=a},
lC:function lC(){},
j3:function j3(a){this.a=a},
lI:function lI(){},
jf:function jf(a){this.a=a},
lL:function lL(){},
jp:function jp(a){this.a=a},
lN:function lN(){},
jx:function jx(a){this.a=a},
lS:function lS(){},
jy:function jy(a){this.a=a},
lT:function lT(){},
jG:function jG(a){this.a=a},
lY:function lY(){},
jN:function jN(a){this.a=a},
m1:function m1(){},
jO:function jO(a){this.a=a},
m2:function m2(){},
jU:function jU(a){this.a=a},
m3:function m3(){},
jW:function jW(a){this.a=a},
m4:function m4(){},
ka:function ka(a){this.a=a},
ma:function ma(){},
kc:function kc(a){this.a=a},
mb:function mb(){},
kj:function kj(a){this.a=a},
me:function me(){},
kN:function kN(a){this.a=a},
mm:function mm(){},
l_:function l_(a){this.a=a},
mq:function mq(){},
l1:function l1(a){this.a=a},
mu:function mu(){},
l6:function l6(){},
iO:function iO(a,b){this.a=a
this.b=b},
nh:function nh(){},
lf:function lf(a){this.a=a},
mB:function mB(){},
lu:function lu(a){this.a=a},
mF:function mF(){},
lv:function lv(a){this.a=a},
mG:function mG(){},
iT:function iT(a){this.a=a},
iU:function iU(a,b,c){var _=this
_.y=a
_.Q$=b
_.e=c
_.a=null
_.d=_.c=_.b=$},
lA:function lA(){},
lB:function lB(){},
ja:function ja(a){this.a=a},
jb:function jb(a,b){var _=this
_.y=a
_.Q=_.z=0
_.e=b
_.a=null
_.d=_.c=_.b=$},
lK:function lK(){},
l4:function l4(a){this.a=a},
l5:function l5(a,b,c){var _=this
_.y=a
_.Q$=b
_.e=c
_.a=null
_.d=_.c=_.b=$},
mv:function mv(){},
mw:function mw(){},
ls:function ls(a){this.a=a},
mE:function mE(){},
iW:function iW(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.w=d
_.x=e
_.y=0
_.Q=_.z=!0
_.a=null
_.d=_.c=_.b=$},
nm:function nm(a,b){this.a=a
this.b=b},
nn:function nn(a,b,c){this.a=a
this.b=b
this.c=c},
lD:function lD(){},
u_(a,b,c,d){return new A.j_(b,c,d,a)},
j_:function j_(a,b,c,d){var _=this
_.Q=a
_.as=b
_.at=c
_.e=d
_.r=_.f=$
_.a=null
_.d=_.c=_.b=$},
vG(a,b){return new A.eG(a,b)},
fL:function fL(){},
eG:function eG(a,b){var _=this
_.x=a
_.y=b
_.a=null
_.d=_.c=_.b=$},
eE:function eE(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
eX:function eX(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
el:function el(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
ev:function ev(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
f3:function f3(a,b){var _=this
_.x=a
_.y=b
_.a=null
_.d=_.c=_.b=$},
lW:function lW(){},
ex:function ex(a,b){this.a=a
this.b=b},
ew:function ew(a,b){var _=this
_.e=a
_.f=b
_.r=$
_.a=null
_.d=_.c=_.b=$},
nG:function nG(a,b){this.a=a
this.b=b},
nH:function nH(){},
nI:function nI(a,b,c){this.a=a
this.b=b
this.c=c},
nJ:function nJ(){},
nK:function nK(a){this.a=a},
ez:function ez(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
fR:function fR(){},
eo:function eo(){var _=this
_.a=null
_.d=_.c=_.b=$},
ep:function ep(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
j2:function j2(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
eF:function eF(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
eY:function eY(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
kG:function kG(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
ff:function ff(){var _=this
_.a=null
_.d=_.c=_.b=$},
ru:function ru(a){this.a=a},
eN:function eN(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
lF:function lF(){},
lG:function lG(){},
lH:function lH(){},
lX:function lX(){},
mh:function mh(){},
mi:function mi(){},
oh(a,b,c,d){return new A.jC(a,b,c,d==null?1:d)},
jC:function jC(a,b,c,d){var _=this
_.e=a
_.f=b
_.r=$
_.w=null
_.x=c
_.y=d
_.z=0
_.a=null
_.d=_.c=_.b=$},
oi:function oi(a){this.a=a},
eD:function eD(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
eC:function eC(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
lV:function lV(){},
vH(a,b){return new A.eH(a,b)},
eH:function eH(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
jS:function jS(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
jV:function jV(a,b,c,d,e){var _=this
_.at=a
_.e=b
_.f=c
_.r=d
_.w=1
_.x=e
_.a=null
_.d=_.c=_.b=$},
eI:function eI(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
eO:function eO(a,b){var _=this
_.e=a
_.f=b
_.r=0
_.w=$
_.a=null
_.d=_.c=_.b=$},
kh:function kh(a,b,c,d,e){var _=this
_.r=a
_.a=b
_.b=c
_.d=_.c=$
_.e=d
_.f=e},
dQ:function dQ(a,b){this.a=a
this.b=b},
kk:function kk(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
eV:function eV(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
kH:function kH(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
iN:function iN(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
ug(a,b,c,d){var s=new A.kQ(a,b,c,A.b9(t.u),A.a([],t.gk))
s.im(b,c,d)
return s},
w5(a){return new A.f6(a)},
kR:function kR(){},
q8:function q8(a){this.a=a},
kQ:function kQ(a,b,c,d,e){var _=this
_.at=a
_.e=b
_.f=c
_.r=d
_.w=1
_.x=e
_.a=null
_.d=_.c=_.b=$},
f6:function f6(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
f5:function f5(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
mo:function mo(){},
l2:function l2(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
wg(a){return new A.fc(a)},
fc:function fc(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
mg:function mg(){},
eS:function eS(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
eT:function eT(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
jo:function jo(){},
jF:function jF(){},
yw(a,b){var s=$.tM()
if(!s.a.aj(b))return null
return s.l1(a,b)},
fN:function fN(){},
S(a,b,c,d){var s=A.a([],t.J)
if(c!=null)B.a.j(s,c)
if(d!=null)B.a.U(s,d)
return new A.fJ(a,b,s)},
jH:function jH(a){this.a=a},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
v(a,b,c){var s,r,q,p,o,n,m,l,k
$.wE=a
if(b==null)b=B.jd
s=t.s
r=t.gQ
q=A.a6(new A.aP(A.a(c.split("\n"),s),t.gL.a(new A.tp()),r),r.h("aG.E"))
A.iy(q)
if(b===B.aa||b===B.au){p=A.a(q.slice(0),A.M(q))
for(r=t.gS.h("cN<Y.E>"),o=0;o<q.length;++o)B.a.i(p,o,A.te(A.ra(new A.cN(new A.d8(q[o]),r)),A.B9()))
A.iy(p)}if(b===B.je||b===B.au){p=A.a(q.slice(0),A.M(q))
for(o=0;r=q.length,o<r;++o)B.a.i(p,r-o-1,A.te(q[o],A.Ba()))
A.iy(p)}if(b===B.au||b===B.jf||b===B.q){p=A.a(q.slice(0),A.M(q))
for(r=t.gS.h("cN<Y.E>"),o=0;n=q.length,o<n;++o)B.a.i(p,n-o-1,A.te(A.ra(new A.cN(new A.d8(q[o]),r)),A.wY()))
A.iy(p)}if(b===B.q){m=A.a([],s)
l=0
for(;;){if(0>=q.length)return A.c(q,0)
if(!(l<q[0].length))break
for(k=0,r="";k<q.length;++k,r=n){n=q[k]
if(!(l<n.length))return A.c(n,l)
n=r+A.AO(n[l])}B.a.j(m,r.charCodeAt(0)==0?r:r);++l}A.iy(m)
p=A.a(m.slice(0),s)
for(s=t.gS.h("cN<Y.E>"),o=0;r=m.length,o<r;++o)B.a.i(p,r-o-1,A.te(A.ra(new A.cN(new A.d8(m[o]),s)),A.wY()))
A.iy(p)}},
te(a,b){var s,r,q
for(s=a.length,r=0,q="";r<s;++r)q+=A.J(b.$1(a[r]))
return q.charCodeAt(0)==0?q:q},
AB(a){return A.wJ(A.wK(a))},
wJ(a){var s,r,q,p
A.a2(a)
for(s=0;s<3;++s){r=$.AC[s]
q=B.i.c4(r,a)
if(q!==-1){p=1-q
if(!(p>=0&&p<r.length))return A.c(r,p)
return r[p]}}return a},
wK(a){var s,r,q,p
A.a2(a)
for(s=0;s<3;++s){r=$.AD[s]
q=B.i.c4(r,a)
if(q!==-1){p=1-q
if(!(p>=0&&p<r.length))return A.c(r,p)
return r[p]}}return a},
AO(a){var s,r,q,p
for(s=0;s<2;++s){r=$.AN[s]
q=B.i.c4(r,a)
if(q!==-1){p=B.c.ab(q+1,4)
if(!(p<r.length))return A.c(r,p)
return r[p]}}return a},
iy(a){var s,r,q,p,o,n=B.a.gaw(a).length,m=a.length,l=A.ao(n*m,$.xf(),!1,t.oC),k=new A.a8(l,new A.Z(new A.d(0,0),new A.d(n,m)),t.k5)
for(s=0;s<a.length;++s)for(m=s*n,r=0;r<B.a.gaw(a).length;++r){if(!(s<a.length))return A.c(a,s)
q=a[s]
if(!(r<q.length))return A.c(q,r)
p=q[r]
q=$.c9
if(q!=null&&q.aj(p)){q=$.c9.p(0,p)
q.toString
o=q}else{q=$.y7()
if(q.aj(p)){q=q.p(0,p)
q.toString
o=q}else{q=$.y8().p(0,p)
q.toString
o=q}}k.l(r,s)
B.a.i(l,m+r,o)}n=$.tM()
m=$.ct
if(m==null)m=$.wE
if(m==null)m=1
l=$.cs.u()
n.cf(n.$ti.c.a(new A.jH(k)),null,null,null,m,m,l)},
dk:function dk(a,b){this.a=a
this.b=b},
tp:function tp(){},
nS:function nS(){},
nW:function nW(){},
nX:function nX(){},
nT:function nT(){},
nU:function nU(){},
o_:function o_(){},
o0:function o0(){},
nV:function nV(){},
nY:function nY(){},
nZ:function nZ(){},
a4(a,b,c){A.i()
$.aU.b=new A.nr(a,c,A.C(t.h,t.S))
$.aU.u().b=b
return $.aU.u()},
I(a,b){A.aW()
return $.iv=A.vj(a,B.i.dQ(a," _")?$.dt():$.du(),b)},
j(a,b,c){return new A.oL(a,b,c,A.C(t.h,t.S))},
vj(a,b,c){var s=t.Q
return new A.cf(a,b,c,A.C(t.h,s),A.C(t.X,s),A.C(t.M,s))},
fw(a,b){return new A.to(a,b)},
Al(a){return A.u(a)},
aX(){return new A.tH(1,0.1)},
i(){var s,r,q,p,o,n,m,l=$.h
if(l==null)return
s=l.el()
r=$.bk()
q=s.a.a7(1)
p=l.dy
p===$&&A.b()
o=l.fr
o===$&&A.b()
n=l.x
if(n==null)n=$.aU.u().x
if(n==null)n=1
m=$.aU.u().ay
m===$&&A.b()
r.cf(r.$ti.c.a(s),q.a,p,o,n,null,m)
$.h=null},
aW(){var s,r,q,p,o,n,m=$.iv
if(m==null)return
s=m.el()
r=m.b
r.toString
q=m.c
p=m.d
o=m.e
n=$.be
r.cf(r.$ti.c.a(s),s.a,q,p,o,null,n)
$.iv=null},
rB:function rB(){},
nr:function nr(a,b,c){var _=this
_.Q=a
_.as=b
_.ax=_.at=null
_.ay=$
_.ch=!1
_.a=c
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=null},
oL:function oL(a,b,c,d){var _=this
_.Q=a
_.as=b
_.at=c
_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=null
_.db=!1
_.dx=null
_.fr=_.dy=$
_.a=d
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=null},
oR:function oR(a){this.a=a},
oO:function oO(a,b){this.a=a
this.b=b},
oW:function oW(a,b){this.a=a
this.b=b},
oX:function oX(a){this.a=a},
oV:function oV(a,b){this.a=a
this.b=b},
oS:function oS(a,b){this.a=a
this.b=b},
oY:function oY(a){this.a=a},
oT:function oT(a,b){this.a=a
this.b=b},
oM:function oM(a){this.a=a},
oN:function oN(a){this.a=a},
oP:function oP(a,b){this.a=a
this.b=b},
oQ:function oQ(a,b){this.a=a
this.b=b},
oU:function oU(a){this.a=a},
cf:function cf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=c
_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=null
_.ay=d
_.ch=e
_.CW=f},
nb:function nb(a){this.a=a},
nc:function nc(a){this.a=a},
na:function na(a,b,c){this.a=a
this.b=b
this.c=c},
n9:function n9(a){this.a=a},
ne:function ne(a){this.a=a},
n8:function n8(a){this.a=a},
nd:function nd(){},
to:function to(a,b){this.a=a
this.b=b},
tH:function tH(a,b){this.a=a
this.b=b},
a7(a,b,c){var s=$.bk().c9(a)
if(s!=null)return new A.m6(s,b,c==null?B.c7:c)
return new A.mA(a,b,c==null?B.c7:c)},
uK(a,b){return new A.bz(a,b)},
wm(a){var s=new A.mf(A.dh(t.iZ))
s.lD(a)
return s},
h3:function h3(a,b){this.a=a
this.b=b},
rD:function rD(){},
m6:function m6(a,b,c){this.c=a
this.a=b
this.b=c},
mA:function mA(a,b,c){this.c=a
this.a=b
this.b=c},
aI:function aI(a,b){this.a=a
this.b=b},
hZ:function hZ(a){this.a=a},
mf:function mf(a){this.a=a},
rX:function rX(a){this.a=a},
bz:function bz(a,b){this.a=a
this.b=b},
iA(a,b,c,d){var s=$.vg()
s.cf(s.$ti.c.a(new A.jB(a)),null,1,100,d,b,null)},
jB:function jB(a){this.b=a},
Bz(){A.a4(239,null,null).a3("magic/ring")
A.i()
var s=$.h=A.j("Ring[s] of Wisdom",B.F,1000)
s.v(20)
s.x=0.05
s.ki(new A.tF())},
tF:function tF(){},
iC(a,b){var s=A.C(t.iZ,t.i)
b.ae(0,new A.tI(s))
$.hI.i(0,a,new A.dj(A.wm(s),a))},
tI:function tI(a){this.a=a},
BM(){var s,r,q="hit[s]",p=null,o="bash[es]",n="stab[s]",m="pierce[s]",l=A.a4(225,p,q)
l.a3("equipment/weapon/club")
l.x=0.5
l.cs(25,5)
A.i()
l=$.h=A.j("Stick",B.k,0)
l.E(1,20)
l.a6(4,6)
l.aa(3)
s=$.b6()
l.a.i(0,s,10)
l.w=10
A.i()
l=$.h=A.j("Cudgel",B.o,20)
l.E(6,60)
l.a6(9,8)
l.aa(4)
l.a.i(0,s,5)
l.w=10
A.i()
l=$.h=A.j("Club",B.w,40)
l.v(14)
l.a6(12,11)
l.aa(5)
l.a.i(0,s,2)
l.w=10
l=A.a4(237,p,q)
l.a3("equipment/weapon/staff")
l.x=0.5
l.y=!0
l.cs(35,4)
A.i()
l=$.h=A.j("Walking Stick",B.k,10)
l.E(2,40)
l.a6(9,10)
l.aa(3)
l.a.i(0,s,5)
l.w=15
A.i()
l=$.h=A.j("Sta[ff|aves]",B.w,50)
l.v(7)
l.a6(13,14)
l.aa(5)
l.a.i(0,s,2)
l.w=15
A.i()
l=$.h=A.j("Quartersta[ff|aves]",B.o,80)
l.v(24)
l.a6(20,22)
l.aa(8)
l.a.i(0,s,2)
l.w=15
l=A.a4(243,p,o)
l.a3("equipment/weapon/hammer")
l.x=0.5
l.cs(15,5)
A.i()
l=$.h=A.j("Hammer",B.k,120)
l.v(40)
l.a6(28,22)
l.aa(12)
A.i()
l=$.h=A.j("Mattock",B.w,240)
l.v(46)
l.a6(36,29)
l.aa(16)
A.i()
l=$.h=A.j("War Hammer",B.o,400)
l.v(52)
l.a6(44,38)
l.aa(20)
l=A.a4(250,p,o)
l.a3("equipment/weapon/mace")
l.x=0.5
l.cs(15,4)
A.i()
l=$.h=A.j("Morningstar",B.o,130)
l.v(24)
l.a6(25,21)
l.aa(11)
A.i()
l=$.h=A.j("Mace",B.f,310)
l.v(33)
l.a6(36,32)
l.aa(16)
l=A.a4(241,p,"whip[s]")
l.a3("equipment/weapon/whip")
l.x=0.5
l.cs(25,4)
A.i()
l=$.h=A.j("Whip",B.k,40)
l.v(4)
l.a6(9,7)
l.aa(1)
l.a.i(0,s,10)
l.w=5
A.i()
l=$.h=A.j("Chain Whip",B.o,230)
l.v(15)
l.a6(18,17)
l.aa(2)
A.i()
l=$.h=A.j("Flail",B.f,350)
l.v(27)
l.a6(28,24)
l.aa(4)
l=A.a4(209,p,n)
l.a3("equipment/weapon/dagger")
l.x=0.5
l.cs(2,8)
A.i()
l=$.h=A.j("Kni[fe|ves]",B.d,20)
l.E(3,20)
l.a6(6,5)
l.aa(6)
A.i()
l=$.h=A.j("Dagger",B.o,30)
l.E(4,40)
l.a6(8,6)
l.aa(8)
A.i()
l=$.h=A.j("Dirk",B.I,50)
l.E(6,70)
l.a6(9,7)
l.aa(9)
A.i()
l=$.h=A.j("Stiletto[es]",B.f,80)
l.v(10)
l.a6(11,8)
l.aa(11)
A.i()
l=$.h=A.j("Rondel",B.K,130)
l.v(20)
l.a6(13,9)
l.aa(13)
A.i()
l=$.h=A.j("Baselard",B.h,200)
l.v(30)
l.a6(15,11)
l.aa(15)
A.i()
l=$.h=A.j("Mercygiver",B.W,2000)
l.E(20,50)
l.x=0.2
l.a6(12,6)
r=t.lT.a(new A.tJ())
l.db=!0
l.ki(r)
l=A.a4(170,p,"slash[es]")
l.a3("equipment/weapon/sword")
l.x=0.5
l.cs(20,5)
A.i()
l=$.h=A.j("Rapier",B.j,140)
l.v(13)
l.a6(13,13)
l.aa(4)
A.i()
l=$.h=A.j("Shortsword",B.f,230)
l.v(17)
l.a6(15,15)
l.aa(6)
A.i()
l=$.h=A.j("Scimitar",B.o,370)
l.v(18)
l.a6(24,18)
l.aa(9)
A.i()
l=$.h=A.j("Cutlass[es]",B.D,520)
l.v(20)
l.a6(26,22)
l.aa(11)
A.i()
l=$.h=A.j("Falchion",B.K,750)
l.v(34)
l.a6(28,25)
l.aa(15)
l=A.a4(186,p,n)
l.a3("equipment/weapon/spear")
l.x=0.5
l.kY(9)
A.i()
l=$.h=A.j("Pointed Stick",B.w,10)
l.E(2,30)
l.a6(7,9)
l.aa(6)
l.a.i(0,s,7)
l.w=12
A.i()
l=$.h=A.j("Spear",B.k,160)
l.E(13,60)
l.a6(16,13)
l.aa(15)
A.i()
l=$.h=A.j("Angon",B.o,340)
l.v(21)
l.a6(20,19)
l.aa(20)
l=A.a4(186,p,n)
l.a3("equipment/weapon/polearm")
l.x=0.5
l.y=!0
l.kY(4)
A.i()
l=$.h=A.j("Lance",B.I,550)
l.v(28)
l.a6(22,23)
l.aa(20)
A.i()
l=$.h=A.j("Partisan",B.f,850)
l.v(35)
l.a6(26,25)
l.aa(26)
l=A.a4(191,p,"chop[s]")
l.a3("equipment/weapon/axe")
l.x=0.5
A.i()
l=$.h=A.j("Hatchet",B.f,90)
l.E(6,50)
l.a6(12,10)
l.fi(20,8)
A.i()
l=$.h=A.j("Axe",B.k,210)
l.E(12,70)
l.a6(15,14)
l.fi(24,7)
A.i()
l=$.h=A.j("Valaska",B.o,330)
l.v(24)
l.a6(19,19)
l.fi(26,5)
A.i()
l=$.h=A.j("Battleaxe",B.j,550)
l.v(40)
l.y=!0
l.a6(25,30)
l.fi(28,4)
l=A.a4(8976,p,q)
l.a3("equipment/weapon/bow")
l.x=0.3
l.y=!0
l.cs(50,5)
A.i()
l=$.h=A.j("Short Bow",B.k,120)
l.E(6,60)
l.ay=A.bd(new A.aH(A.aQ("arrow",B.y,B.V).a7(1)),m,5,p,8)
l.cx=12
l.aa(2)
l.a.i(0,s,15)
l.w=10
A.i()
l=$.h=A.j("Longbow",B.w,250)
l.v(13)
l.ay=A.bd(new A.aH(A.aQ("arrow",B.y,B.V).a7(1)),m,9,p,12)
l.cx=18
l.aa(3)
l.a.i(0,s,7)
l.w=13
A.i()
l=$.h=A.j("Crossbow",B.o,600)
l.v(28)
l.ay=A.bd(new A.aH(A.aQ("bolt",B.y,B.V).a7(1)),m,14,p,16)
l.cx=24
l.aa(4)
l.a.i(0,s,4)
l.w=14},
tJ:function tJ(){},
aj(a,b,c,d,e,f,g){var s
A.fv()
$.cc().c3("monster/"+b)
s=t.s
$.ai.b=new A.og(a,B.a.gcG(b.split("/")),e,$.aY(),A.a([],t.x),A.a([],s))
$.ai.u().e=f
$.ai.u().r=c
$.ai.u().b=g
if(d!=null)B.a.U($.ai.u().x,A.a(d.split(" "),s))
return $.ai.u()},
fv(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7="immobile",b8=$.c8
if(b8==null)return
s=t.s
r=A.a([$.ai.u().ch],s)
if(r.length===0)B.a.j(r,"monster")
q=A.vV($.ai.u().x,t.N)
q.U(0,b8.x)
p=b8.r
if(p==null)p=$.ai.u().r
if(q.G(0,b7))p=0
o=b8.fr
n=o.length
if(n===1){if(0>=n)return A.c(o,0)
m=o[0]}else m=n>1?new A.lx(o):null
o=b8.ay
n=b8.fx
if(n==null)n=B.y
o=A.aQ(o,n,b8.ch?B.cl:B.V).a7(1)
n=b8.cx
l=b8.db
k=b8.dx
j=b8.dy
if(b8.d==null)$.ai.u()
i=$.ai.u().c
h=b8.c
g=b8.CW
f=b8.cy
e=b8.b
if(e==null)e=0
d=$.ai.u().b
if(d==null)d=10
c=b8.at
if(c==null)c=$.ai.u().at
b=b8.ax
if(b==null)b=$.ai.u().ax
a=b8.f
if(a==null)a=$.ai.u().f
if(a==null)a=0
a0=b8.e
if(a0==null)a0=0
a1=$.ai.u().e
if(a1==null)a1=0
a2=$.ai.u().as
if(a2==null)a2=b8.as
a3=b8.y
if(a3==null)a3=$.ai.u().y
a4=b8.z
if(a4==null)a4=$.ai.u().z
if(b8.Q==null)$.ai.u()
a5=q.nd()
a5.U(0,q)
q=a5.ad(0,"berzerk")
a6=a5.ad(0,"cowardly")
a7=a5.ad(0,"fearless")
a8=a5.ad(0,b7)
a9=a5.ad(0,"protective")
b0=a5.ad(0,"unique")
if(a5.a!==0)A.a0(A.aE('Unknown flags "'+a5.aQ(0,", ")+'"',null))
b1=b8.fy
b2=A.a([],t.x)
s=A.a([],s)
if(c==null)c=8
if(b==null)b=10
b3=p==null?20:p
if(a2==null)a2=0
if(a3==null)a3=1
if(a4==null)a4=1
if(b1==null)b1="Indescribable."
B.a.U(b2,$.ai.u().w)
B.a.U(b2,b8.w)
B.a.j(s,$.ai.u().ch)
b4=$.cc()
b5=b8.a
if(b5==null)b5=$.ai.u().a
b6=B.a.aQ(r," ")
b4.cf(b4.$ti.c.a(new A.at(o,n,g,l,k,f,e+d,c,b,a,a0+a1,new A.hZ(j),new A.ae(i.a|h.a),new A.nq(q,a6,a7,a8,a9,b0),b3,a2,b2,a3,a4,m,s,b1)),o.a,g,g,b5,b5,b6)
$.c8=null},
p(a,b,c,d,e,f,g){var s
A.fv()
s=new A.j0(a,b,A.an($.ai.u().ay,c,null),d,A.a([],t.da),A.a([],t.a_),A.a([],t.f8),A.a([],t.aC),f,$.aY(),A.a([],t.x),A.a([],t.s))
s.e=g
s.r=e
return $.c8=s},
np(a,b,c,d,e){return new A.j0(a,b,d,e,A.a([],t.da),A.a([],t.a_),A.a([],t.f8),A.a([],t.aC),c,$.aY(),A.a([],t.x),A.a([],t.s))},
rC:function rC(){},
og:function og(a,b,c,d,e,f){var _=this
_.ay=a
_.ch=b
_.a=c
_.b=null
_.c=d
_.r=_.f=_.e=_.d=null
_.w=e
_.x=f
_.ax=_.at=_.as=_.Q=_.z=_.y=null},
j0:function j0(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.ay=a
_.ch=!1
_.CW=b
_.cx=c
_.cy=d
_.db=e
_.dx=f
_.dy=g
_.fr=h
_.fy=_.fx=null
_.a=i
_.b=null
_.c=j
_.r=_.f=_.e=_.d=null
_.w=k
_.x=l
_.ax=_.at=_.as=_.Q=_.z=_.y=null},
lE:function lE(a){this.a=a},
ad:function ad(a){this.a=a},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c},
lx:function lx(a){this.a=a},
bs:function bs(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
fI:function fI(a,b){this.b=a
this.a=b},
d9:function d9(a,b){this.b=a
this.a=b},
jP:function jP(a,b,c){this.b=a
this.c=b
this.a=c},
h_:function h_(a,b){this.b=a
this.a=b},
bR:function bR(a,b,c){this.b=a
this.c=b
this.a=c},
b3:function b3(a,b){this.b=a
this.a=b},
bM:function bM(a,b){this.b=a
this.a=b},
qH:function qH(a,b,c){this.a=a
this.b=b
this.c=c},
bx:function bx(a,b){this.b=a
this.a=b},
jv:function jv(){},
jz:function jz(){},
kM:function kM(){},
l0:function l0(){},
fF(a,b,c){var s=$.bi
$.bi=s+1
return new A.d5(a,b,c,s)},
d5:function d5(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
iP:function iP(a){this.a=a},
iX:function iX(a){this.a=a},
vo(a){return 2*A.w(a,1,15,1,4)/A.hN(50)},
iY:function iY(a){this.a=a},
hh:function hh(){},
iS:function iS(a){this.a=a},
iZ:function iZ(a){this.a=a},
k9:function k9(a){this.a=a},
l3:function l3(a){this.a=a},
l9:function l9(a){this.a=a},
lt:function lt(a){this.a=a},
bL:function bL(a,b){this.a=a
this.b=b},
ni:function ni(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ig:function ig(a,b){this.a=a
this.b=b},
bg:function bg(){},
rV:function rV(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
yi(a){var s,r=A.a([],t.c4),q=Math.min($.m().hT(1,10),5),p=!1
for(;;){if(!(!p||r.length<q))break
s=$.uR().i_(a)
if(s.w)p=!0
if(!B.a.G(r,s))B.a.j(r,s)}return r},
fG:function fG(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g},
fn(a,b,c,d,e,f,g,h,i,j,k,l){var s=A.a((j==null?"monster":j).split(" "),t.s),r=i==null?1:i,q=h==null?1:h,p=$.uR()
p.cf(p.$ti.c.a(new A.fG(d,e,s,r,q,c,b!==!1)),null,k,f,l,g,null)},
uC(a,b){var s=null
A.fn("dungeon",s,new A.tn(a),"room",0.04,100,s,s,s,s,1,b)},
B1(a,b,c){var s="catacomb"
A.fn(s,null,new A.tk(),s,0.02,100,b,null,null,a,1,c)},
B2(a,b,c){A.fn("cavern",null,new A.tl(),"glowing-moss",0.1,100,b,null,null,a,1,c)},
Bs(a,b,c){A.fn("lake",!1,new A.tz(),"water",0.01,b,null,null,0,a,c,null)},
BA(a,b,c){A.fn("river",!1,new A.tG(),"water",0.01,b,null,null,0,a,c,null)},
tx(a,b,c){A.fn(a+" keep",!1,new A.ty(),"room",0.05,b,null,1.5,0,a,c,2)},
ee(a,b,c){var s=null
A.fn(a+" pit",!1,new A.tD(a),"glowing-moss",0.05,b,s,s,s,s,c,0.2)},
tn:function tn(a){this.a=a},
tk:function tk(){},
tl:function tl(){},
tz:function tz(){},
tG:function tG(){},
ty:function ty(){},
tD:function tD(a){this.a=a},
eq:function eq(a,b,c){var _=this
_.d=a
_.e=b
_.f=c
_.c=_.b=_.a=$},
er:function er(){this.c=this.b=this.a=$},
ny:function ny(a,b,c){var _=this
_.a=a
_.b=$
_.c=b
_.d=c},
nC:function nC(){},
nB:function nB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nz:function nz(){},
nA:function nA(){},
jk:function jk(a){this.a=a
this.c=this.b=0},
ey:function ey(a){var _=this
_.w=a
_.c=_.b=_.a=$},
yV(a){var s=A.yU($.m().cN(a,a/2|0),B.jg)
return s},
yU(a,b){return new A.eL(new A.pi(b,A.C(t.u,t.d2),A.a([],t.fv)),a)},
eL:function eL(a,b){var _=this
_.r=a
_.w=0
_.x=b
_.c=_.b=_.a=$},
pl:function pl(a){this.a=a},
pj:function pj(a){this.a=a},
pk:function pk(a,b){this.a=a
this.b=b},
eK:function eK(a,b){this.a=a
this.b=b
this.c=0},
rg:function rg(a,b){this.a=a
this.b=b},
pi:function pi(a,b,c){this.a=a
this.b=b
this.c=c},
eM:function eM(){this.c=this.b=this.a=$},
q1(a,b,c,d){return new A.q0(b,d,a,c)},
hq:function hq(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
q0:function q0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eW:function eW(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.c=_.b=_.a=$},
q9:function q9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0
_.f=e},
i4:function i4(a,b){this.a=a
this.b=b},
bN(a,b,c,d){var s=c==null?$.m().aD(1,3):c
return new A.rZ(a,b,s,d==null?$.m().aD(1,3):d)},
f7:function f7(){this.c=this.b=this.a=$},
qm:function qm(a){this.a=a},
qn:function qn(a){this.a=a},
qk:function qk(a){this.a=a},
qo:function qo(a){this.a=a},
ql:function ql(a){this.a=a},
qj:function qj(a){this.a=a},
rZ:function rZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ui(a,b){var s,r
switch(b.a){case 0:return $.m().T(3)===0?A.w7(a):A.wb(a)
case 1:return $.m().T(3)===0?A.w9(a):A.wa(a)
case 2:s=$.m().T(10)
A:{if(0===s){r=A.w9(a)
break A}if(1===s){r=A.wa(a)
break A}if(2===s||3===s){r=A.w7(a)
break A}r=A.wb(a)
break A}return r}},
qr(){var s=$.m()
if(s.T(5)!==0)return B.iN
if(s.T(5)!==0)return B.iO
return B.iP},
wb(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
switch(A.qr().a){case 0:s=$.m()
s=new A.O(s.aA(3,8),s.aA(3,8))
break
case 1:s=$.m()
s=new A.O(s.aA(7,10),s.aA(7,10))
break
case 2:s=$.m()
s=new A.O(s.aA(9,16),s.aA(9,16))
break
default:s=null}r=s.a
q=s.b
if(r>q){p=q
q=r
r=p}o=$.m().T(2)===0
n=o?q:r
m=o?r:q
s=n+2
l=m+2
k=A.ao(s*l,$.mO(),!1,t.gf)
j=new A.a8(k,new A.Z(new A.d(0,0),new A.d(s,l)),t.o)
for(i=0;i<m;)for(++i,l=i*s,h=0;h<n;){++h
g=$.tO()
j.l(h,i)
B.a.i(k,l+h,g)}f=A.a([],t.G)
if(r<=9&&(n&1)===1&&(m&1)===1)B.a.j(f,A.a([new A.d(B.c.A(n,2)+1,B.c.A(m,2)+1)],t.l))
if(q>=5)for(s=B.c.A(r-1,2),l=t.l,e=0;e<s;++e){k=1+e
g=n-e
d=m-e
B.a.j(f,A.a([new A.d(k,k),new A.d(g,k),new A.d(k,d),new A.d(g,d)],l))}A.uh(j)
return j},
w7(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
switch(A.qr().a){case 0:s=B.ii
break
case 1:s=B.ij
break
case 2:s=B.ik
break
default:s=null}r=s.a
q=s.b
s=$.m()
p=s.aA(r,q)
o=s.aA(p,B.e.aT(p*1.5))
n=s.T(2)===0
m=n?o:p
l=n?p:o
k=s.aA(2,m-3)
j=s.aA(2,l-3)
i=s.T(2)===0
h=s.T(2)===0
s=m+2
g=l+2
f=A.ao(s*g,$.mO(),!1,t.gf)
e=new A.a8(f,new A.Z(new A.d(0,0),new A.d(s,g)),t.o)
for(d=0;d<l;)for(++d,g=d*s,c=0;c<m;){++c
b=$.tO()
e.l(c,d)
B.a.i(f,g+c,b)}a=h?0:m-k
a0=h?k:m
a1=i?0:l-j
a2=i?j:l
for(d=a1;d<a2;)for(++d,g=d*s,c=a;c<a0;){++c
b=$.mO()
e.l(c,d)
B.a.i(f,g+c,b)}a3=A.a([],t.G)
s=m-k
g=l-j
for(f=B.c.A(Math.min(s,g)-1,2),b=!i,a4=t.l,a5=!h,a6=k+1,a7=j+1,a8=0;a8<f;++a8){a9=A.a([],a4)
B.a.j(a3,a9)
if(!i||a5){b0=1+a8
B.a.j(a9,new A.d(b0,b0))}if(!i||h)B.a.j(a9,new A.d(m-a8,1+a8))
if(!b||a5)B.a.j(a9,new A.d(1+a8,l-a8))
if(!b||h)B.a.j(a9,new A.d(m-a8,l-a8))
if(i){b0=1+a8
b1=a7+a8
if(h){B.a.j(a9,new A.d(a6+a8,b0))
B.a.j(a9,new A.d(b0,b1))}else{B.a.j(a9,new A.d(s-a8,b0))
B.a.j(a9,new A.d(m-a8,b1))}}else{b0=l-a8
b1=g-a8
if(h){B.a.j(a9,new A.d(a6+a8,b0))
B.a.j(a9,new A.d(1+a8,b1))}else{B.a.j(a9,new A.d(m-a8,b1))
B.a.j(a9,new A.d(s-a8,b0))}}}A.uh(e)
return e},
w9(a){var s,r,q,p
switch(A.qr().a){case 0:s=B.cr
break
case 1:s=B.cp
break
case 2:s=B.cq
break
default:s=null}r=s.a
q=s.b
p=$.m().aA(r,q)
return A.w8(p,B.c.A(p-1,2),a)},
wa(a){var s,r,q,p
switch(A.qr().a){case 0:s=B.cr
break
case 1:s=B.cp
break
case 2:s=B.cq
break
default:s=null}r=s.a
q=s.b
s=$.m()
p=s.aA(r,q)
return A.w8(p,s.aA(2,B.c.A(p,2)-1),a)},
w8(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=a+2,h=A.ao(i*i,$.mO(),!1,t.gf),g=new A.a8(h,new A.Z(new A.d(0,0),new A.d(i,i)),t.o)
for(s=0;s<a;s=r)for(r=s+1,q=r*i,p=0;p<a;++p){if(p+s<b)continue
o=a-p-1
if(o+s<b)continue
if(p+a-s-1<b)continue
if(o+a-s-1<b)continue
o=p+1
n=$.tO()
g.l(o,r)
B.a.i(h,q+o,n)}m=A.a([],t.G)
if(a<=9&&(a&1)===1){i=B.c.A(a,2)+1
B.a.j(m,A.a([new A.d(i,i)],t.l))}if((a&1)===1)for(i=B.c.A(a,2),h=i-1,q=t.l,l=2;l<h;++l){o=i+1
n=o-l
k=o+l
B.a.j(m,A.a([new A.d(o,n),new A.d(k,o),new A.d(o,k),new A.d(n,o)],q))}j=B.c.A(a+1,2)-B.c.A(b+1,2)-3
for(i=a-1,h=a+4,q=t.l,l=0;l<=j;++l){o=B.c.A(i,2)-l
n=B.c.A(h,2)+l
B.a.j(m,A.a([new A.d(o,o),new A.d(n,o),new A.d(o,n),new A.d(n,n)],q))}A.uh(g)
return g},
uh(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(s=a.b,r=A.ab(s),q=t.ca,p=t.e0,o=p.h("k.E"),n=a.a,s=s.b.a,m=n.length,l=a.$ti.c;r.q();){k=r.b
j=r.c
a.l(k,j)
i=j*s+k
if(!(i>=0&&i<m))return A.c(n,i)
h=n[i]
if(!(h.a==null&&h.b===B.r))continue
h=new A.qq(new A.d(k,j),a)
g=A.a6(new A.ak(B.at,q.a(h),p),o)
f=B.a.cZ(B.cb,h)
h=g.length
if(h===1){h=l.a(new A.dT(null,B.a.glm(g).gcL()))
a.l(k,j)
B.a.i(n,i,h)}else if(h<=1)if(f){h=l.a($.xz())
a.l(k,j)
B.a.i(n,i,h)}}},
zm(a){return new A.dT(null,a)},
w6(a){return new A.dT(a,B.r)},
kY:function kY(){},
hB:function hB(a,b){this.a=a
this.b=b},
qq:function qq(a,b){this.a=a
this.b=b},
dT:function dT(a,b){this.a=a
this.b=b},
hC:function hC(a,b){this.a=a
this.b=b},
rp:function rp(a){this.a=a},
A5(a){return A.u0(a,$.mT())},
AH(a){return A.uc(a,$.mW())},
A6(a){return A.u0(a,$.v5())},
AI(a){return A.uc(a,$.xN())},
A4(a){return A.u0(a,$.v4())},
AG(a){return A.uc(a,$.xM())},
zv(a){var s=$.xB()
if(s.aj(a)){s=s.p(0,a)
s.toString
return s}return A.a([$.xD(),$.xE()],t.J)},
H(a,b,c,d){if(d==null)d=B.t
if(0>=b.length)return A.c(b,0)
return new A.rk(a,A.a([A.cD(b.charCodeAt(0),c,d)],t.mO))},
rm:function rm(){},
rl:function rl(){},
rk:function rk(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=0},
cj(a,b){var s=$.ji.b7(a,new A.nt(a)).b
s.bj(s.$ti.c.a(b))
if(s.gI(0)>10)s.cK()},
ck(a,b,c,d){var s=$.ji.b7(a,new A.nv(a)).c.b7(b,new A.nw())
s.bj(s.$ti.c.a(c))
if(s.gI(0)>20)s.cK()
A.jj(a,b,d)},
jj(a,b,c){$.ji.b7(a,new A.nu(a)).d.i(0,b,c)},
yv(a){var s,r=$.ns
if(r==null)return null
s=$.ji.p(0,a)
if(s==null)return null
return s.t(0)},
uq(a){var s=t.N
return new A.fj(a,A.he(s),A.C(s,t.jo),A.C(s,t.jv))},
nt:function nt(a){this.a=a},
nv:function nv(a){this.a=a},
nw:function nw(){},
nu:function nu(a){this.a=a},
fj:function fj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rW:function rW(){},
G:function G(){},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
jE:function jE(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
jM:function jM(){},
iR:function iR(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
vY(a){return new A.kE(a)},
vz(a,b){return new A.jq(a,b)},
k_:function k_(){},
kE:function kE(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
jn:function jn(a,b,c){var _=this
_.z=a
_.e=b
_.f=c
_.a=null
_.d=_.c=_.b=$},
jq:function jq(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
lj:function lj(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
lm:function lm(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
cz:function cz(){},
nD:function nD(a,b){this.a=a
this.b=b},
nE:function nE(a){this.a=a},
nF:function nF(a,b){this.a=a
this.b=b},
ke:function ke(){},
lg:function lg(a,b,c,d){var _=this
_.z=a
_.Q=b
_.e=c
_.f=d
_.a=null
_.d=_.c=_.b=$},
lh:function lh(a,b,c){var _=this
_.Q=a
_.as=b
_.at=!1
_.e=c
_.r=_.f=$
_.a=null
_.d=_.c=_.b=$},
bo(a){return new A.lq(a)},
uc(a,b){return new A.kz(a,b)},
u0(a,b){return new A.j7(a,b)},
kV(){return new A.kU()},
lq:function lq(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
kz:function kz(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
j7:function j7(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
kU:function kU(){var _=this
_.a=null
_.d=_.c=_.b=$},
bF:function bF(){},
x_(a){return 1/(1+Math.max(0,a)/40)},
bd(a,b,c,d,e){var s=e==null?0:e
return new A.b7(a,b,c,s,d==null?$.az():d)},
bH(a){var s=t.iO,r=t.kt
return new A.b8(a,A.a([],s),A.a([],r),A.a([],s),A.a([],r),$.az())},
b7:function b7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jR:function jR(a,b){this.a=a
this.b=b},
d6:function d6(a){this.a=a},
di:function di(a){this.a=a},
b8:function b8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=1},
oC:function oC(){},
oB:function oB(){},
oA:function oA(){},
oz:function oz(){},
aB:function aB(a,b){this.a=a
this.b=b},
c_:function c_(){},
fZ:function fZ(){this.b=this.a=0},
fK:function fK(){this.b=this.a=0},
hs:function hs(){this.b=this.a=0},
dE:function dE(){this.b=this.a=0},
fW:function fW(){this.b=this.a=0},
hA:function hA(a){this.c=a
this.b=this.a=0},
hr:function hr(){this.b=this.a=0},
c0(a,b,c,d,e,f,g){var s=d==null?new A.nQ():d
return new A.dG(a,b,e,f,c,s,g==null?new A.nR():g)},
dG:function dG(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nQ:function nQ(){},
nR:function nR(){},
fT:function fT(){this.a=0},
jt:function jt(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aJ:function aJ(a){this.a=a},
u4(a,b,c,d,e){var s=A.he(t.fD),r=A.a([],t.iA),q=A.a([],t.bI),p=A.a([],t.l),o=new A.fT(),n=new A.ax(c,A.b9(t.B),new A.bb(t.mh),o,new A.dE(),new A.fK(),new A.dE(),new A.fW(),new A.fZ(),new A.hr(),new A.hs(),A.C(t.h,t.mF),new A.d(0,0))
o.a=240
n.bs()
o=c.CW.a
o.toString
n.z=B.c.P(B.e.L(Math.pow(o,1.458)+9),0,n.gbq())
o=c.cx.a
o.toString
n.ch=A.jY(o)
q=new A.jJ(a,s,r,q,new A.fT(),p,b,n)
s=e==null?100:e
s=A.zp(s,d==null?80:d,q)
q.x!==$&&A.as()
q.x=s
s.dD(n)
B.a.U(p,s.f.b.bQ(-1))
s=$.m()
B.a.bL(t.A.a(p),s.a)
return q},
jJ:function jJ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=null
_.w=g
_.x=$
_.y=h},
ox:function ox(a){this.a=a},
hT:function hT(){},
lp:function lp(){},
f_:function f_(a){this.a=a},
vW(a,b){var s
A:{if(B.cn===b||B.id===b){s=!0
break A}if(B.co===b||B.aH===b||B.y===b){s=!1
break A}s=null}return A.xa(a,$.xo(),t.jt.a(t.po.a(new A.pr(s))),null)},
dO(a,b){var s,r,q,p,o,n,m,l,k={},j=A.a([],t.s)
k.a=""
k.b=-1
s=new A.pt(k,b)
r=new A.ps(k,j)
for(q=b.length,p=0;p<q;++p){o=b[p]
if(" "===o){s.$1(p)
continue}if("\n"===o){s.$1(p)
r.$0()
k.b=-1
continue}n=k.b
if(n===-1){k.b=p
n=p}m=p-n+1
n=k.a.length
l=n===0
if(l&&m>a){s.$1(p)
r.$0()
k.b=p}else if(!l&&n+1+m>a)r.$0()}s.$1(q)
if(k.a.length!==0)r.$0()
return j},
kd:function kd(a){this.a=a
this.b=0},
pr:function pr(a){this.a=a},
pt:function pt(a,b){this.a=a
this.b=b},
ps:function ps(a,b){this.a=a
this.b=b},
bT:function bT(a,b){this.a=a
this.b=b},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
w(a,b,c,d,e){if(a<=b)return d
if(a>=c)return e
return d+(a-b)/(c-b)*(e-d)},
x1(a,b){var s=new A.tr(),r=s.$1(0)
if(typeof r!=="number")return r.F()
r=s.$1(r+a)
if(typeof r!=="number")return r.F()
r=s.$1(r+b)
if(typeof r!=="number")return r.pK()
return r>>>0},
tr:function tr(){},
dh(a){var s=t.N
return new A.f4(A.C(s,a.h("bW<0>")),A.C(s,a.h("bq<0>")),A.C(t.nP,a.h("ij<0>")),a.h("f4<0>"))},
f4:function f4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
qa:function qa(a){this.a=a},
qb:function qb(a){this.a=a},
qf:function qf(a){this.a=a},
qg:function qg(a,b,c){this.a=a
this.b=b
this.c=c},
qd:function qd(a){this.a=a},
qe:function qe(a,b){this.a=a
this.b=b},
qc:function qc(a,b){this.a=a
this.b=b},
bq:function bq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.$ti=g},
bW:function bW(a,b,c){this.a=a
this.b=b
this.$ti=c},
ml:function ml(a,b){this.a=a
this.b=b},
ij:function ij(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.$ti=d},
zi(a){return new A.aH(a)},
z6(a,b,c){return A.aQ(a,c,b)},
aQ(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(B.i.ij(a,"a ")){a=B.i.cT(a,2)
s=!1}else if(B.i.ij(a,"an ")){a=B.i.cT(a,3)
s=!0}else{if(0>=a.length)return A.c(a,0)
s=B.i.G("aeiouAEIOU",a[0])}r=$.xq().k8(a)
if(r!=null){q=r.b
p=q.length
if(1>=p)return A.c(q,1)
o=q[1]
o.toString
if(2>=p)return A.c(q,2)
q=q[2]
q.toString
n=o
a=q}else n=""
m=A.pW(n,!1,!0)
l=A.pW(n,!1,!1)
q=n.length===0
k=A.pW(a,q,!0)
j=A.pW(a,q,!1)
q="<p>"+k
p=c.a
switch(p){case 0:o="<a> "+m+"<p>"+k
break
case 1:o=m+"<p>"+k
break
case 2:o="the "+m+"<p>"+k
break
case 3:o=m+"<p>"+k
break
default:o=null}switch(p){case 0:p="the <p>"+k
break
case 1:p=q
break
case 2:p="the <p>"+k
break
case 3:p=q
break
default:p=null}return new A.pV(s,q,o,"# "+l+"<p>"+j,p,"the # "+l+"<p>"+j,b)},
pW(a,b,c){var s,r={}
r.a=!1
s=A.xa(a,$.xr(),t.jt.a(t.po.a(new A.pX(r,c))),null)
if(!c&&!r.a&&b)return s+"s"
return s},
z5(a,b,c,d){return new A.hn(a,b,c,d)},
dm:function dm(){},
aH:function aH(a){this.a=a},
pV:function pV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
pY:function pY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pX:function pX(a,b){this.a=a
this.b=b},
ho:function ho(a,b){this.a=a
this.b=b},
hn:function hn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dS:function dS(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=e},
Q(a,b,c){var s,r,q,p,o,n=B.c.t(Math.abs(a)),m=$.xn().k8(n)
if(m!=null){s=m.b
if(2>=s.length)return A.c(s,2)
r=s[2]
r.toString
s=s[1]
s.toString
s=A.a([s],t.s)
for(q=B.c.A(r.length,3),p=0;p<q;++p){o=p*3
s.push(B.i.aJ(r,o,o+3))}n=B.a.aQ(s,",")}if(a<0)n="-"+n
else if(a>0&&b)n="+"+n
return B.i.dc(n,c==null?0:c)},
vX(a,b,c){var s=A.z(a).h("bl<1,2>"),r=b.h("@<0>").al(c).h("+(1,2)")
return A.pF(new A.bl(a,s),s.al(r).h("1(k.E)").a(new A.pE(b,c)),s.h("k.E"),r)},
ua(a,b,c){var s=B.e.hY(a,b)
return B.i.dc(s,c==null?0:c)},
q_(a,b){var s=b==null?0:b
s=B.e.hY(a*100,s)
return B.i.dc(s+"%",0)},
pE:function pE(a,b){this.a=a
this.b=b},
lo:function lo(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=0
_.e=c
_.f=0},
a3:function a3(){},
V:function V(){},
cQ:function cQ(){},
cA:function cA(){},
dD:function dD(){},
aS:function aS(a){this.a=a},
kW:function kW(){},
c7:function c7(a){var _=this
_.a=!0
_.c=_.b=null
_.d=a},
qt:function qt(a,b,c){this.a=a
this.b=b
this.c=c},
qs:function qs(a){this.a=a},
dI:function dI(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.d=$
_.e=null
_.f=!1
_.r=0
_.w=null},
oe:function oe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
of:function of(a,b){this.a=a
this.b=b},
od:function od(a){this.a=a},
ax:function ax(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.Q=a
_.as=b
_.at=null
_.ax=c
_.ay=200
_.CW=_.ch=0
_.cx=1000
_.cy=0
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=0},
oy:function oy(a,b,c){this.a=a
this.b=b
this.c=c},
u5(a,b,c,d,e){return new A.cE(a,b,c,d,e)},
cE:function cE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,a0,a1,a2,a3,a4){var s=new A.hM(),r=new A.fE(),q=new A.hV(),p=new A.h1(),o=new A.dc(a,b,c,d,e,f,g,h,i,j,k,n,a0,l,m,s,r,q,p)
s.b=a3
s.a=s.dn(o)
r.b=a1
r.a=r.dn(o)
q.b=a4
q.a=q.dn(o)
p.b=a2
p.a=p.dn(o)
return o},
dc:function dc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s},
hg:function hg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pu:function pu(){},
px:function px(){},
py:function py(){},
pv:function pv(){},
pw:function pw(){},
pz:function pz(){},
bU:function bU(){},
aF:function aF(){},
mj:function mj(){},
kO(a,b,c,d){return new A.cK(a,b,d,c)},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f2:function f2(){},
hu:function hu(a){this.a=a},
af:function af(){},
hJ:function hJ(a,b){this.a=a
this.b=b},
qE:function qE(a){this.a=a},
qD:function qD(){},
qF:function qF(a,b,c){this.a=a
this.b=b
this.c=c},
da:function da(a){this.a=a},
ms:function ms(){},
hN(a){if(a<=10)return B.e.O(A.w(a,1,10,0,20))
return B.e.O(A.w(a,10,50,20,200))},
we(a){if(a<=20)return A.w(a,1,20,0.1,1)
if(a<=30)return A.w(a,20,30,1,1.5)
if(a<=40)return A.w(a,30,40,1.5,1.8)
if(a<=50)return A.w(a,40,50,1.8,2)
return A.w(a,50,60,2,2.1)},
vm(a){if(a<=10)return B.e.O(A.w(a,1,10,-50,0))
if(a<=30)return B.e.O(A.w(a,10,30,0,20))
return B.e.O(A.w(a,30,60,20,60))},
vn(a){if(a<=10)return B.e.O(A.w(a,1,10,-30,0))
if(a<=30)return B.e.O(A.w(a,10,30,0,20))
return B.e.O(A.w(a,30,60,20,50))},
jY(a){if(a<=10)return B.e.O(A.w(a,1,10,0,20))
return B.e.O(A.w(a,10,50,20,200))},
bb:function bb(a){this.a=null
this.$ti=a},
cn:function cn(a,b,c){this.c=a
this.a=b
this.b=c},
co:function co(){},
qV:function qV(a,b,c){this.a=a
this.b=b
this.c=c},
hM:function hM(){this.b=0
this.a=null},
fE:function fE(){this.b=0
this.a=null},
hV:function hV(){this.b=0
this.a=null},
h1:function h1(){this.b=0
this.a=null},
AF(a){A.u(a)
return 1},
AE(a){A.u(a)
return 0},
ce:function ce(a,b){this.a=a
this.b=b},
ek:function ek(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q},
eA:function eA(a){this.b=a},
o4:function o4(){},
o3:function o3(){},
o2:function o2(a){this.a=a},
lP:function lP(){},
bI(a,b){var s=A.a([],t.I)
if(b!=null)B.a.U(s,b)
return new A.bS(a,s,a.c)},
c1:function c1(a,b){this.a=a
this.c=b},
eJ:function eJ(){},
bS:function bS(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
oK:function oK(){},
dC:function dC(a,b){this.a=a
this.b=b},
m5:function m5(){},
K:function K(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$
_.f=e},
pb:function pb(){},
p6:function p6(){},
p5:function p5(){},
p4:function p4(){},
pc:function pc(){},
p7:function p7(){},
p8:function p8(a){this.a=a},
pa:function pa(a){this.a=a},
p9:function p9(){},
bJ:function bJ(a,b){this.a=a
this.b=b},
rn:function rn(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2},
kS:function kS(a,b,c){this.a=a
this.b=b
this.c=c},
dj:function dj(a,b){this.a=a
this.b=b},
yn(a){var s,r,q,p,o
for(s=$.en.length,r=t.P,q=0;q<$.en.length;$.en.length===s||(0,A.o)($.en),++q){p=$.en[q]
o=r.a(a.$1(p.a))
p.b!==$&&A.as()
p.b=o}B.a.aU($.en)},
aL(a){var s=new A.j1(a)
B.a.j($.en,s)
return s},
j1:function j1(a){this.a=a
this.b=$},
at:function at(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.at=m
_.ax=n
_.ay=o
_.ch=p
_.CW=q
_.cx=r
_.cy=s
_.db=a0
_.dy=a1
_.fr=a2},
fa:function fa(a,b){this.a=a
this.b=b},
nq:function nq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j5(a,b,c){return new A.j4(a,b,c)},
aa:function aa(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.Q=a
_.as=b
_.at=c
_.ax=d
_.ay=!0
_.CW=_.ch=0
_.cx=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k
_.r=l
_.w=m
_.x=n
_.y=o
_.z=0},
pO:function pO(a,b){this.a=a
this.b=b},
pP:function pP(a,b,c){this.a=a
this.b=b
this.c=c},
pQ:function pQ(a,b){this.a=a
this.b=b},
j4:function j4(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
pM:function pM(a,b,c,d){var _=this
_.d=a
_.e=null
_.a=b
_.b=c
_.c=d},
eP:function eP(){},
pN:function pN(a,b){this.a=a
this.b=b},
ch:function ch(){this.a=$},
cx:function cx(){this.a=$},
nl:function nl(a,b){this.a=a
this.b=b},
nj:function nj(a){this.a=a},
nk:function nk(a,b,c){this.a=a
this.b=b
this.c=c},
cv:function cv(){this.a=$},
nf:function nf(a){this.a=a},
ng:function ng(a,b,c){this.a=a
this.b=b
this.c=c},
ba:function ba(){},
kP:function kP(){},
ci:function ci(a,b){this.a=a
this.b=0
this.$ti=b},
cm(a,b,c,d,e,f){var s=new A.kn(c,d!==!1,e===!0,f,a,b,new A.ci(A.a([],t.c),t.r),A.a([],t.l))
s.fB(a,b,f)
return s},
eB:function eB(){},
oj:function oj(a,b,c){this.a=a
this.b=b
this.c=c},
ok:function ok(a,b,c){this.a=a
this.b=b
this.c=c},
kn:function kn(a,b,c,d,e,f,g,h){var _=this
_.r=a
_.w=b
_.x=c
_.y=d
_.a=e
_.b=f
_.d=_.c=$
_.e=g
_.f=h},
om:function om(a,b){this.a=a
this.b=b},
mr:function mr(a,b){this.a=a
this.b=b},
kb(a){var s
A:{if(1===a){s=40
break A}if(2===a){s=56
break A}if(3===a){s=72
break A}if(4===a){s=96
break A}if(5===a){s=120
break A}if(6===a){s=160
break A}if(7===a){s=200
break A}if(8===a){s=240
break A}if(a<=0){s=0
break A}s=255
break A}return s},
pm:function pm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.w=_.r=_.f=!0},
pn:function pn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
po:function po(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eU:function eU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kD:function kD(){},
wR(a){var s=a.a.e
if(s.Z(0,$.bC()))return 8
if((s.a&$.U().a)===0)return 10
return 1},
qG:function qG(a){this.a=a
this.b=null},
mt:function mt(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=_.c=$
_.e=c
_.f=d},
t2:function t2(a,b,c){this.a=a
this.b=b
this.c=c},
zp(a,b,c){var s,r=A.a([],t.p5),q=new A.qR(),p=t.jh,o=a*b
if(o>0)s=A.ao(o,q.$1(B.ak),!1,p)
else s=J.vN(0,p)
s=new A.a8(s,new A.Z(new A.d(0,0),new A.d(a,b)),t.lr)
s.lv(a,b,q,p)
return new A.qI(c,r,s,A.C(t.u,t.C),new A.a8(A.ao(o,null,!1,t.e9),new A.Z(new A.d(0,0),new A.d(a,b)),t.hE))},
qI:function qI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=_.c=$
_.e=0
_.f=c
_.r=d
_.w=e},
qR:function qR(){},
qU:function qU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qT:function qT(a){this.a=a},
qQ:function qQ(){},
qS:function qS(a){this.a=a},
km(a){return new A.ae(a)},
zu(a,b,c,d,e,f){return new A.dZ(a,f,d==null?0:d,b,c,e)},
ae:function ae(a){this.a=a},
by:function by(a){this.a=a},
dZ:function dZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dY:function dY(a,b){var _=this
_.a=a
_.b=!1
_.f=_.e=_.d=_.c=0
_.r=!1
_.w=b
_.x=0},
iL:function iL(a,b){var _=this
_.b=a
_.c=b
_.d=0
_.a=null},
fH:function fH(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jg:function jg(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
fO:function fO(a){this.a=a
this.b=20},
T(a,b){var s,r,q,p,o,n,m=A.a([],t.mO)
for(s=new A.d8(a),r=t.gS,s=new A.c4(s,s.gI(0),r.h("c4<Y.E>")),r=r.h("Y.E");s.q();){q=s.d
if(q==null)q=r.a(q)
for(p=b.length,o=0;o<b.length;b.length===p||(0,A.o)(b),++o){n=b[o]
B.a.j(m,new A.X(q,n,B.z))}}return m},
fS:function fS(a,b){this.a=a
this.b=b
this.c=0},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
jQ:function jQ(a,b){this.a=a
this.b=b
this.c=0},
jT:function jT(a){this.a=a
this.b=0},
k0:function k0(a,b){this.a=a
this.b=b
this.c=2},
kg:function kg(a,b){this.a=a
this.b=b
this.c=-1},
kC:function kC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ld:function ld(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0
_.f=e},
li:function li(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=8},
yC(a,b){var s,r,q,p,o,n=A.a([],t.hC)
for(s=$.v_(),r=b.Q.c.c,q=0;q<15;++q){p=s[q]
o=r.p(0,p.gcD())
if((o==null?0:o)>0)n.push(p)}n=new A.fV(b,n,A.C(t.M,t.de))
n.lx(a,b)
return n},
fV:function fV(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.e=0
_.a=null},
ob:function ob(){},
o7:function o7(){},
oc:function oc(){},
o8:function o8(){},
o9:function o9(){},
oa:function oa(a,b){this.a=a
this.b=b},
jl:function jl(){},
nL:function nL(a,b){this.a=a
this.b=b},
fD:function fD(a,b){var _=this
_.e=a
_.b=b
_.c=0
_.a=null},
kA:function kA(a){this.b=a
this.c=0
this.a=null},
vE(a0,a1){var s,r,q,p,o,n,m,l,k=a1.y.Q,j=k.e.d0(),i=k.f.d0(),h=k.y,g=t.M,f=t.S,e=A.cJ(k.z.a,g,f),d=k.at,c=k.ax,b=t.P,a=A.cJ(c.a,b,f)
b=A.cJ(c.b,b,f)
s=t.q
r=A.cJ(c.c,s,f)
q=A.cJ(c.d,t.R,f)
p=A.vV(c.e,s)
s=A.cJ(c.f,s,f)
c=k.Q
o=k.as
n=k.ay.b
m=k.ch.b
l=k.CW.b
d=new A.fY(a1,A.vI(k.a,k.b,k.c,k.d,j,i,k.r,k.w,k.x,h,new A.hJ(e,A.C(g,f)),d,new A.hg(a,b,r,q,p,s),c,o,m,k.cx.b,n,l),a0,new A.pq(d),new A.p3(a1))
d.r=new A.qy(d)
l=A.a([],t.pl)
n=A.a([],t.lE)
d.w!==$&&A.as()
d.w=new A.qJ(d,l,n,B.iC,B.ak)
$.ns=d
$.ji.aU(0)
return d},
os(a,b,c,d){var s,r,q,p,o,n,m,l=A.u4(b,0,c,34,60)
if(d)for(s=b.lq(c),r=s.length,q=l.y,p=q.Q,o=p.e,p=p.ax,n=0;n<s.length;s.length===r||(0,A.o)(s),++n){m=s[n]
o.c8(m)
p.d7(m)
q.bs()}for(s=l.e9(),r=s.$ti,s=new A.ah(s.a(),r.h("ah<1>")),r=r.c;s.q();){q=s.b
if(q==null)r.a(q)}if(d)a.bi()
return A.vE(a,l)},
fY:function fY(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=_.r=$
_.y=_.x=0
_.z=!1
_.a=_.ax=_.at=_.as=_.Q=null},
ow:function ow(a,b){this.a=a
this.b=b},
ou:function ou(){},
ov:function ov(a,b){this.a=a
this.b=b},
ot:function ot(a,b){this.a=a
this.b=b},
hf:function hf(a,b){var _=this
_.b=a
_.c=b
_.d=0
_.a=null},
wf(a,b,c){var s=new A.lb(a,b,c,A.a([],t.lE))
s.lC(a,b,c)
return s},
Ac(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=null,q=null,p=0;p<a.length;a.length===s||(0,A.o)(a),++p){o=a[p]
n=b.$1(o)
if(q==null||n<q){q=n
r=o}}return r},
Ab(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=null,q=null,p=0;p<a.length;a.length===s||(0,A.o)(a),++p){o=a[p]
n=b.$1(o)
if(q==null||n>q){q=n
r=o}}return r},
lb:function lb(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=!1
_.r=0
_.a=null},
rh:function rh(a){this.a=a},
ri:function ri(a){this.a=a},
zA(a){var s,r,q,p,o=A.a([],t.eI)
for(s=$.tK(),r=a.b,q=0;q<26;++q){p=s[q]
if(p.gbC().dI(r)==null)o.push(p)}return new A.hU(a,o)},
hU:function hU(a,b){this.b=a
this.c=b
this.a=null},
h0:function h0(a){var _=this
_.c=_.b=0
_.d=30
_.e=a
_.a=null},
f:function f(a,b){this.a=a
this.b=b},
jr:function jr(a,b,c,d){var _=this
_.e=a
_.f=b
_.b=c
_.c=d
_.a=null},
o1:function o1(a){this.a=a},
fg:function fg(a,b){this.a=a
this.b=b},
cF:function cF(){},
yL(a,b){var s=t.q
return B.c.ai(s.a(a).d,s.a(b).d)},
yI(a,b){var s=t.q
return B.c.ai(s.a(a).c,s.a(b).c)},
yK(a,b){var s=t.q
return B.c.ai(s.a(a).as,s.a(b).as)},
yJ(a,b){var s=t.q
s.a(a)
s.a(b)
return B.i.ai(a.a.a7(1).a.toLowerCase(),b.a.a7(1).a.toLowerCase())},
k2:function k2(a,b){var _=this
_.e=$
_.b=a
_.c=b
_.a=null},
p1:function p1(){},
p2:function p2(a){this.a=a},
p0:function p0(a,b){this.a=a
this.b=b},
z2(a,b){var s=t.P,r=s.a(a).b.a,q=s.a(b).b.a
s=new A.pH()
if(s.$1(r)&&!s.$1(q))return 1
if(!s.$1(r)&&s.$1(q))return-1
return B.c.ai(r,q)},
z1(a,b){var s=t.P
return B.c.ai(s.a(a).c,s.a(b).c)},
z3(a,b){var s=t.P
return B.i.ai(s.a(a).a.a.toLowerCase(),s.a(b).a.a.toLowerCase())},
z0(a,b){var s=null,r=A.a([new A.aM("Name",B.a7,0,s),new A.aM("Depth",B.al,5,s),new A.aM("Seen",B.al,5,s),new A.aM("Slain",B.al,5,s)],t.E),q=t.it,p=t.o9
p=A.a([new A.bw("appearance",A.a([A.Bx(),A.x4()],q),p),new A.bw("name",A.a([A.x5()],q),p),new A.bw("depth",A.a([A.x4(),A.x5()],q),p)],t.d4)
q=t.hb
p=new A.kl(A.ul(r,A.a([new A.c5("all",new A.pK(),q),new A.c5("uniques",new A.pL(),q)],t.gp),p,!0,t.P),a,b)
p.nc()
return p},
kl:function kl(a,b,c){var _=this
_.e=a
_.b=b
_.c=c
_.a=null},
pH:function pH(){},
pK:function pK(){},
pL:function pL(){},
pI:function pI(){},
pJ:function pJ(){},
pG:function pG(a,b){this.a=a
this.b=b},
l:function l(a){this.a=a},
db:function db(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
dH:function dH(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
h2:function h2(a,b){var _=this
_.y=null
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
oE:function oE(a){this.a=a},
oF:function oF(a){this.a=a},
oG:function oG(a){this.a=a},
oH:function oH(a){this.a=a},
oI:function oI(a){this.a=a},
oJ:function oJ(a){this.a=a},
b1:function b1(){},
oZ:function oZ(){},
vK(a,b,c){var s,r=new A.k1(b,A.vL(b,c?78:34)),q=b.a
if(q.x!=null)r.b=new A.i_(a,b)
if(q.Q+b.gc1()!==0||q.z!=null)r.c=new A.i1(b)
if(q.e!=null)r.d=new A.ii(b)
q=q.w
if(q!=null){s=c?78:34
r.e=new A.fm(A.dO(s,q.a),"Use")}return r},
vL(a,b){var s,r,q,p,o,n,m,l,k,j=A.a([],t.s)
for(s=0;s<4;++s){r=B.aR[s]
for(q=a.gaf(),p=q.length,o=0,n=0;n<q.length;q.length===p||(0,A.o)(q),++n)o+=q[n].dl(r)
if(o<0)B.a.j(j,"It lowers your "+r.c+" by "+-o+".")
else if(o>0)B.a.j(j,"It raises your "+r.c+" by "+o+".")}a.gee().ae(0,new A.p_(j))
q=a.a
m=q.y
if(m!=null){p=m.b
l=p.e
k=l!==$.az()?" "+l.a:""
B.a.j(j,"It can be thrown for "+p.c+k+" damage up to range "+p.d+".")
p=m.a
if(p!==0)B.a.j(j,"It has a "+p+"% chance of breaking when thrown.")}p=q.ay
if(p>0)B.a.j(j,"It emanates "+p+" light.")
for(q=q.cx,q=new A.c3(q,q.r,q.e,A.z(q).h("c3<1>"));q.q();)B.a.j(j,"It can be destroyed by "+q.d.a.toLowerCase()+".")
return new A.fm(A.dO(b-2,B.a.aQ(j," ")),"Description")},
k1:function k1(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=b},
p_:function p_(a){this.a=a},
cX:function cX(){},
i_:function i_(a,b){this.a=a
this.b=b},
i1:function i1(a){this.a=a},
ii:function ii(a){this.a=a},
fm:function fm(a,b){this.a=a
this.b=b},
dR:function dR(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
mk:function mk(){},
kK:function kK(a,b,c){var _=this
_.CW=a
_.b=b
_.c=c
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
kL:function kL(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
hG:function hG(a,b,c){var _=this
_.y=a
_.b=b
_.c=c
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
e_:function e_(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
ro:function ro(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e0:function e0(){},
cU:function cU(){},
i7:function i7(a){var _=this
_.b=a
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
i6:function i6(){},
m0:function m0(a){var _=this
_.b=a
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
m_:function m_(a,b){var _=this
_.cy=a
_.b=b
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
i0:function i0(a){var _=this
_.w=null
_.b=a
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
im:function im(a,b){var _=this
_.w=a
_.b=b
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
il:function il(a,b){var _=this
_.at=a
_.b=b
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
fh:function fh(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.b=d
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
e1:function e1(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
jL:function jL(a){this.b=a
this.a=null},
or:function or(a){this.a=a},
kf:function kf(a,b){var _=this
_.b=a
_.c=b
_.d=0
_.f=_.e=null
_.r=!1
_.w=0
_.x=!0
_.y=0
_.a=null},
pB:function pB(){},
pA:function pA(a){this.a=a},
z4(a,b){var s,r,q,p,o,n=t.eR,m=A.a([],n),l=$.m()
t.m.a(B.ah)
s=B.ah.length
r=l.T(s)
if(!(r>=0&&r<s))return A.c(B.ah,r)
r=new A.ko(0,0,b,B.ah[r])
r.h4()
s=$.fz()
q=A.M(s)
p=q.h("aP<1,q>")
s=A.a6(new A.aP(s,q.h("q(1)").a(new A.pS()),p),p.h("aG.E"))
s=new A.f8(0,2,"Race",s)
q=$.eh()
p=A.M(q)
o=p.h("aP<1,q>")
q=A.a6(new A.aP(q,p.h("q(1)").a(new A.pT()),o),o.h("aG.E"))
q=new A.f8(0,12,"Class",q)
p=new A.f8(0,22,"Death",B.bs)
B.a.U(m,A.a([r,s,q,p],n))
s.e=l.T(5)
q.e=l.T(3)
return new A.ky(a,b,r,s,q,p,m)},
ky:function ky(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=0
_.e=c
_.f=d
_.r=e
_.w=f
_.x=g
_.a=null},
pS:function pS(){},
pT:function pT(){},
pU:function pU(a){this.a=a},
et:function et(){},
ko:function ko(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=""
_.e=d
_.f=!1},
pR:function pR(a){this.a=a},
f8:function f8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
p3:function p3(a){this.b=a
this.a=null},
pq:function pq(a){this.b=a
this.a=null},
q2:function q2(){},
qy:function qy(a){this.b=a
this.a=null},
qC:function qC(a){this.a=a},
qA:function qA(a,b,c){this.a=a
this.b=b
this.c=c},
qB:function qB(){},
qz:function qz(a,b,c){this.a=a
this.b=b
this.c=c},
qJ:function qJ(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=!1
_.f=0
_.r=d
_.w=e
_.a=null},
qP:function qP(a){this.a=a},
qO:function qO(){},
qM:function qM(a){this.a=a},
qN:function qN(a,b){this.a=a
this.b=b},
qK:function qK(a,b){this.a=a
this.b=b},
qL:function qL(a,b){this.a=a
this.b=b},
fM:function fM(a,b){this.c=a
this.d=b
this.a=null},
yA(a,b){var s=new A.fU(a,b,A.a([],t.cz))
s.lw(a,b,{})
return s},
fU:function fU(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.a=null},
o5:function o5(a,b){this.a=a
this.b=b},
o6:function o6(){},
ly:function ly(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=0},
fX:function fX(a){this.c=a
this.a=null},
kI:function kI(){},
q4:function q4(){},
q5:function q5(){},
hF:function hF(a){this.d=a
this.e=1
this.a=null},
wd(a,b){return new A.hD(a,b,B.a.hA(b,new A.qu()))},
ac:function ac(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hD:function hD(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.e=0
_.a=null},
qu:function qu(){},
qv:function qv(){},
qw:function qw(){},
qX:function qX(a,b){this.a=a
this.b=b},
r6:function r6(a){this.a=a},
r7:function r7(a){this.a=a},
r3:function r3(a){this.a=a},
r4:function r4(a){this.a=a},
r5:function r5(a,b,c){this.a=a
this.b=b
this.c=c},
qY:function qY(a){this.a=a},
qZ:function qZ(a,b){this.a=a
this.b=b},
r_:function r_(a,b){this.a=a
this.b=b},
r0:function r0(a,b){this.a=a
this.b=b},
r1:function r1(a,b){this.a=a
this.b=b},
r2:function r2(a,b){this.a=a
this.b=b},
vw(a,b,c,d,e,f){var s,r=null,q=a.e.a.b.b,p=q.a
q=q.b
a.k6(0,0,p,q,B.t)
s=new A.aT(new A.d(b,c),B.c.A(p-b,2),B.c.A(q-2-c,2),a)
A.bh(s,r,r,f,!1,r,r,r)
d.$1(s.b8(1,1,b-2,c-2))
A.bt(a,e,r)},
bh(a,b,c,d,e,f,g,h){var s,r,q
if(b==null)s=e?B.h:B.l
else s=b
A.cB(a,g,h,f,c,s,"\u2552","\u2550","\u2555","\u2502","\u2514","\u2500","\u2518")
if(d!=null){s=g==null?0:g
r=h==null?0:h
q=e?B.h:B.f
a.k(s+2,r," "+d+" ",q)}},
fP(a,b,c,d,e,f){var s,r,q,p,o,n
if(d==null)d=a.c.a-e
if(c==null)c=B.d
s=A.dO(d,b)
for(r=s.length,q=f,p=0;o=s.length,p<o;s.length===r||(0,A.o)(s),++p,q=n){n=q+1
a.k(e,q,s[p],c)}return o},
jm(a,b,c,d,e){var s=B.i.aI("\u2500",d)
a.k(b,c,s,e==null?B.l:e)},
nN(a,b,c,d,e,f,g){var s,r=c+1
A.bh(a,B.f,e-1,null,!1,d,b,r)
s=b+1
a.k(s,c,"\u250c\u2500\u2510",B.f)
a.k(s,r,"\u2561 \u255e",B.f)
a.k(s,c+2,"\u2514\u2500\u2518",B.f)
if(f!=null)a.an(b+2,r,f)
if(g!=null)a.k(b+4,r," "+g+" ",B.f)},
vx(a,b,c,d,e,f,g){var s,r,q,p,o
if(d<=e)for(s=0;s<b;++s)a.k(f,s+g,"\u258c",B.t)
else{r=B.c.P(B.e.L(b*e/d),1,b)
q=B.e.L((b-r)*c/(d-e+1))
p=q+r
for(s=0;s<b;++s){o=s<q||s>p?B.t:B.l
a.k(f,s+g,"\u258c",o)}}},
bt(a,b,c){var s,r,q,p,o,n,m,l={}
l.a=0
b.ae(0,new A.nO(l))
s=l.a
r=c!=null
if(r)s=Math.max(s,c.length)
q=a.e.a.b.b
p=q.a
o=B.c.A(p-s,2)
l.b=o
q=q.b
n=s+4
m=o-2
if(r){A.cB(a,m,q-4,n,5,B.f,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
a.k(B.c.A(p-c.length,2),q-3,c,B.d)}else A.cB(a,m,q-2,n,3,B.f,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
l.c=!0
l.b=l.b+B.c.A(s-l.a,2)
b.ae(0,new A.nP(l,a))},
cB(a,b,c,d,e,f,g,h,i,j,k,l,m){var s,r,q,p,o
if(b==null)b=0
if(c==null)c=0
if(d==null)d=a.gaR()
if(e==null)e=a.gao()
if(f==null)f=B.l
s=d-2
r=j+B.i.aI(" ",s)+j
for(q=c+1,p=c+e-1;q<p;++q)a.k(b,q,r,f)
o=B.i.aI(h,s)
s=B.i.aI(l,s)
a.k(b,c,g+o+i,f)
a.k(b,p,k+s+m,f)},
yx(a,b,c,d,e,f,g,h){var s,r,q=d*2,p=B.e.O(q*e/f)
if(p===0&&e>0)p=1
if(p===q&&e<f)p=q-1
for(q=p+1,s=0;s<d;++s){if(s<B.c.A(p,2))r=9608
else r=s<B.c.A(q,2)?9612:32
a.an(b+s,c,new A.X(r,g,h))}},
vy(a,b,c,d,e,f,g,h){var s,r,q
if(g==null)g=B.m
if(h==null)h=B.a0
s=B.e.O(d*e/f)
if(s===0&&e>0)s=1
if(s===d&&e<f)s=d-1
for(r=0;r<d;++r){q=r<s?g:h
a.an(b+r,c,new A.X(9604,q,B.z))}},
nO:function nO(a){this.a=a},
nP:function nP(a,b){this.a=a
this.b=b},
ul(a,b,c,d,e){var s,r=e.h("r<ar<0>>"),q=A.a([],r)
r=A.a([],r)
s=A.a(a.slice(0),A.M(a))
return new A.la(s,q,r,d,c,b,B.ak,e.h("la<0>"))},
un(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=c.kv(e,B.a.az(b,0,new A.rj(),t.S))
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.o)(b),++r,m=o){q=b[r]
p=q.a
o=m+p.length
if(o>e)p=B.i.aJ(p,0,e-m)
n=q.b
if(n==null)n=d
a.k(f+m,g,p,n)}},
la:function la(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=_.x=_.w=0
_.$ti=h},
rf:function rf(a,b,c){this.a=a
this.b=b
this.c=c},
re:function re(a){this.a=a},
rc:function rc(a){this.a=a},
rd:function rd(a){this.a=a},
iM:function iM(a,b){this.a=a
this.b=b},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=0},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a9:function a9(a,b){this.a=a
this.b=b},
N:function N(a,b){this.a=a
this.b=b},
rj:function rj(){},
bw:function bw(a,b,c){this.a=a
this.b=b
this.$ti=c},
c5:function c5(a,b,c){this.a=a
this.b=b
this.$ti=c},
hX:function hX(a,b){var _=this
_.b=a
_.c=b
_.d=!0
_.a=null},
rw:function rw(a){this.a=a},
rv:function rv(a){this.a=a},
cr:function cr(){},
t1:function t1(a){this.a=a},
mH:function mH(a){this.b=a
this.c=""
this.a=null},
t7:function t7(a){this.a=a},
mI:function mI(a){this.b=a
this.c=""
this.a=null},
t8:function t8(a){this.a=a},
nM:function nM(a,b){this.a=a
this.b=b},
an(a,b,c){var s
if(0>=a.length)return A.c(a,0)
s=c==null?B.z:c
return new A.X(a.charCodeAt(0),b,s)},
cD(a,b,c){var s=b==null?B.aI:b
return new A.X(a,s,c==null?B.z:c)},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
k8:function k8(a,b){this.a=a
this.$ti=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
aT:function aT(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.f=d},
zl(a,b,c,d,e,f){var s=A.bZ(d.getContext("2d"))
if(s==null)s=A.P(s)
s=new A.kX(a,s,e,A.C(t.aZ,t._),f,b,c)
s.lB(a,b,c,d,e,f)
return s},
kX:function kX(a,b,c,d,e,f,g){var _=this
_.e=a
_.f=b
_.r=c
_.w=d
_.x=e
_.y=!1
_.z=f
_.Q=g},
qh:function qh(a){this.a=a},
qi:function qi(a){this.a=a},
dl:function dl(){},
hz:function hz(){},
fe:function fe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=!0
_.f=_.e=null
_.r=$
_.w=!1
_.y=null
_.$ti=d},
t:function t(){},
a8:function a8(a,b,c){this.a=a
this.b=b
this.$ti=c},
wj(a,b){var s=a.b,r=s+s+1,q=a.a
return new A.lJ(a,A.ab(new A.Z(new A.d(q.gm()-s,q.gn()-s),new A.d(r,r))),b)},
ut(a,b,c){var s=c.S(0,a).gaF()
if(b<7){if(!(b>=0))return A.c(B.c9,b)
return s<=B.c9[b]}return s<=b*(b+1)},
j6:function j6(a,b){this.a=a
this.b=b},
lJ:function lJ(a,b,c){this.a=a
this.b=b
this.c=c},
av:function av(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
lM:function lM(){},
e4(a,b){var s,r=b.S(0,a),q=r.a,p=new A.d(B.c.gic(q),0),o=r.b,n=new A.d(0,B.c.gic(o)),m=Math.abs(q),l=Math.abs(o)
if(l>m){s=l
l=m
m=s
s=n
n=p
p=s}return new A.mc(a,0,m,l,p,n)},
mc:function mc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
w4(a,b){var s=Math.max(a.gbR(),b.gbR()),r=Math.min(a.ge5(),b.ge5()),q=Math.max(a.gbW(),b.gbW()),p=Math.min(a.geM(),b.geM())
return new A.Z(new A.d(s,q),new A.d(Math.max(0,r-s),Math.max(0,p-q)))},
ab(a){var s=a.a
return new A.cM(a,s.a-1,s.b)},
Z:function Z(a,b){this.a=a
this.b=b},
cM:function cM(a,b,c){this.a=a
this.b=b
this.c=c},
qp:function qp(a){this.a=a},
ln:function ln(){},
d:function d(a,b){this.a=a
this.b=b},
mD:function mD(){},
e3(a,b,c,d,e){var s=A.AX(new A.rG(c),t._)
s=s==null?null:A.uu(s)
if(s!=null)a.addEventListener(b,s,!1)
return new A.i3(a,b,s,!1,e.h("i3<0>"))},
AX(a,b){var s=$.b5
if(s===B.ad)return a
return s.oo(a,b)},
u3:function u3(a,b){this.a=a
this.$ti=b},
i2:function i2(){},
lO:function lO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i3:function i3(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
rG:function rG(a){this.a=a},
Bu(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null,a7="item",a8="Insect Wing",a9="Feather",b0="item/food",b1="hit[s]",b2="Healing Poultice",b3=1000,b4="water",b5="equipment/armor/body",b6="The shield blocks {2}.",b7="equipment/armor/boots",b8="fearless",b9="bite[s]",c0=" ",c1="{1} flits out of the way.",c2="canine",c3="stare[s] at",c4="spark",c5="zaps",c6="gaze[s] into",c7="splashes",c8="hits",c9="scratch[es]",d0="stab[s]",d1="treasure",d2="spear",d3="healing",d4="goblin",d5="arrow",d6="armor",d7="resistance",d8="protective",d9="robe",e0="magic",e1="slash[es]",e2="equipment",e3="crawl[s] on",e4="fearless immobile",e5="cowardly",e6="club",e7="kobold",e8="poke[s]",e9="claw[s]",f0="saurian",f1="salamander",f2="weapon",f3="strangle",f4="natural/bug/worm",f5="bony hand",f6="bony arm",f7="severed skull",f8="decapitated skeleton",f9="armless skeleton",g0="one-armed skeleton",g1="{1}'s arm falls off!",g2="{1}'s hand falls off!",g3="{1}'s head pops off!",g4="Elven _",g5="High Elven _",g6="Dwarven _",g7="animal herp",g8="room",g9="catacomb"
$.bk().c3(a7)
s=A.a4(199,10,a6)
s.a3(a7)
r=$.dw()
s.ct(10,3,r,7)
A.i()
s=$.h=A.j("Rock",B.k,0)
s.v(1)
s.x=0.5
s=A.a4(252,4,a6)
s.a3(a7)
s.bF(30,2,5)
A.i()
s=$.h=A.j("Skull",B.o,0)
s.x=0.25
s.v(1)
s=A.a4(162,a6,a6)
s.a3("treasure/coin")
s.ch=!0
A.i()
s=A.j("Copper Coin",B.ar,4)
$.h=s
s.E(1,11)
A.i()
s=A.j("Bronze Coin",B.k,8)
$.h=s
s.E(7,20)
A.i()
s=A.j("Silver Coin",B.K,20)
$.h=s
s.E(11,30)
A.i()
s=A.j("Electrum Coin",B.D,50)
$.h=s
s.E(20,40)
A.i()
s=A.j("Gold Coin",B.h,100)
$.h=s
s.E(30,50)
A.i()
s=A.j("Platinum Coin",B.o,300)
$.h=s
s.E(40,70)
s=A.a4(36,a6,a6)
s.a3("treasure/bar")
s.ch=!0
A.i()
s=A.j("Copper Bar",B.ar,150)
$.h=s
s.E(35,60)
A.i()
s=A.j("Bronze Bar",B.k,500)
$.h=s
s.E(50,70)
A.i()
s=A.j("Silver Bar",B.K,800)
$.h=s
s.E(60,80)
A.i()
s=A.j("Electrum Bar",B.D,1200)
$.h=s
s.E(70,90)
A.i()
s=A.j("Gold Bar",B.h,2000)
$.h=s
s.v(80)
A.i()
s=A.j("Platinum Bar",B.o,3000)
$.h=s
s.v(90)
s=A.a4(162,a6,a6)
s.a3("item/gem")
q=$.dv()
s.a.i(0,q,50)
s.w=null
A.i()
s=A.j("Amethyst Shard",B.cO,30)
$.h=s
s.E(7,27)
A.i()
s=A.j("Uncut Amethyst",B.O,100)
$.h=s
s.E(27,57)
A.i()
s=A.j("Faceted Amethyst",B.W,400)
$.h=s
s.v(57)
A.i()
s=A.j("Sapphire Shard",B.I,34)
$.h=s
s.E(8,28)
A.i()
s=A.j("Uncut Sapphire",B.F,125)
$.h=s
s.E(28,58)
A.i()
s=A.j("Faceted Sapphire",B.E,440)
$.h=s
s.v(58)
A.i()
s=A.j("Emerald Shard",B.A,37)
$.h=s
s.E(9,29)
A.i()
s=A.j("Uncut Emerald",B.p,136)
$.h=s
s.E(29,59)
A.i()
s=A.j("Faceted Emerald",B.B,486)
$.h=s
s.v(59)
A.i()
s=A.j("Ruby Shard",B.a5,41)
$.h=s
s.E(10,30)
A.i()
s=A.j("Uncut Ruby",B.m,142)
$.h=s
s.E(30,60)
A.i()
s=A.j("Faceted Ruby",B.a0,498)
$.h=s
s.v(60)
A.i()
s=A.j("Diamond Shard",B.f,45)
$.h=s
s.E(11,31)
A.i()
s=A.j("Uncut Diamond",B.o,153)
$.h=s
s.E(31,61)
A.i()
s=A.j("Faceted Diamond",B.u,507)
$.h=s
s.v(61)
s=A.a4(233,20,a6)
s.a3("item/pelt")
s.x=0
p=$.b6()
s.a.i(0,p,80)
s.w=1
A.i()
s=A.j(a8,B.an,0)
$.h=s
s.v(1)
A.i()
s=A.j(a9,B.o,0)
$.h=s
s.v(1)
s=A.a4(161,a6,a6)
s.a3(b0)
s.a.i(0,p,20)
s.w=3
A.i()
s=$.h=A.j("Stale Biscuit",B.H,0)
s.E(1,10)
s.b=6
s.eZ(100)
A.i()
s=$.h=A.j("Loa[f|ves] of Bread",B.k,4)
s.E(3,40)
s.b=6
s.eZ(200)
s=A.a4(188,a6,a6)
s.a3(b0)
s.a.i(0,p,15)
s.w=2
A.i()
s=$.h=A.j("Chunk[s] of Meat",B.w,10)
s.E(8,60)
s.b=4
s.eZ(400)
A.i()
s=$.h=A.j("Piece[s] of Jerky",B.k,20)
s.v(15)
s.b=12
s.eZ(600)
s=A.a4(172,a6,b1)
s.a3("equipment/light")
s.pA(70)
A.i()
s=$.h=A.j("Tallow Candle",B.H,6)
s.E(1,12)
s.b=10
s.e7(2,p,8)
s.d8(2,5)
s.a.i(0,p,40)
s.w=20
A.i()
s=$.h=A.j("Wax Candle",B.u,24)
s.E(6,20)
s.b=10
s.e7(3,p,8)
s.d8(3,7)
s.a.i(0,p,40)
s.w=25
A.i()
s=$.h=A.j("Oil Lamp",B.w,146)
s.E(12,30)
s.b=4
s.e7(10,p,8)
s.d8(4,10)
s.a.i(0,p,50)
s.w=40
A.i()
s=$.h=A.j("Torch[es]",B.k,230)
s.E(17,45)
s.b=4
s.e7(6,p,10)
s.d8(5,14)
s.a.i(0,p,60)
s.w=60
A.i()
s=$.h=A.j("Lantern",B.h,350)
s.v(24)
s.x=0.3
s.e7(5,p,5)
s.d8(6,18)
s=A.a4(231,10,a6)
s.a3("magic/potion/healing")
s.bF(100,1,6)
o=$.cb()
s.a.i(0,o,20)
s.w=null
A.i()
s=$.h=A.j("Soothing Balm",B.a5,10)
s.E(2,30)
s.kb(36)
A.i()
s=$.h=A.j("Mending Salve",B.m,30)
s.E(20,40)
s.kb(64)
A.i()
s=$.h=A.j(b2,B.a0,80)
s.v(30)
s.dU(120,!0)
A.i()
s=$.h=A.j("Potion[s] of Amelioration",B.an,220)
s.v(60)
s.dU(200,!0)
A.i()
s=$.h=A.j("Potion[s] of Rejuvenation",B.W,b3)
s.v(80)
s.dU(b3,!0)
A.i()
s=$.h=A.j("Antidote",B.p,20)
s.v(2)
s.dU(0,!0)
s=A.a4(234,10,a6)
s.a3("magic/potion/resistance")
s.x=0.5
s.bF(100,1,6)
s.a.i(0,o,20)
s.w=null
A.i()
s=$.h=A.j("Salve[s] of Heat Resistance",B.N,50)
s.v(5)
s.bD(p)
A.i()
s=$.h=A.j("Salve[s] of Cold Resistance",B.I,55)
s.v(6)
s.bD(o)
A.i()
s=$.h=A.j("Salve[s] of Light Resistance",B.D,60)
s.v(7)
n=$.d0()
s.bD(n)
A.i()
s=$.h=A.j("Salve[s] of Wind Resistance",B.K,65)
s.v(8)
m=$.ei()
s.bD(m)
A.i()
s=$.h=A.j("Salve[s] of Lightning Resistance",B.O,70)
s.v(9)
l=$.dx()
s.bD(l)
A.i()
s=$.h=A.j("Salve[s] of Darkness Resistance",B.f,75)
s.v(10)
k=$.d_()
s.bD(k)
A.i()
s=$.h=A.j("Salve[s] of Earth Resistance",B.k,80)
s.v(13)
s.bD(r)
A.i()
s=$.h=A.j("Salve[s] of Water Resistance",B.E,85)
s.v(16)
j=$.d1()
s.bD(j)
A.i()
s=$.h=A.j("Salve[s] of Acid Resistance",B.H,90)
s.v(19)
s.bD(q)
A.i()
s=$.h=A.j("Salve[s] of Poison Resistance",B.A,95)
s.v(23)
i=$.bB()
s.bD(i)
A.i()
s=$.h=A.j("Salve[s] of Death Resistance",B.W,100)
s.v(30)
h=$.dy()
s.bD(h)
s=A.a4(235,10,a6)
s.a3("magic/potion/speed")
s.x=0.3
s.bF(100,1,6)
s.a.i(0,o,20)
s.w=null
A.i()
s=$.h=A.j("Potion[s] of Quickness",B.A,25)
s.E(3,30)
s.hz(1,40)
A.i()
s=$.h=A.j("Potion[s] of Alacrity",B.p,60)
s.E(18,50)
s.hz(2,60)
A.i()
s=$.h=A.j("Potion[s] of Speed",B.B,150)
s.v(34)
s.x=0.25
s.hz(3,100)
s=A.a4(232,10,a6)
s.a3("magic/potion/bottled")
s.x=0.5
s.bF(100,1,8)
s.a.i(0,o,15)
s.w=null
A.i()
s=$.h=A.j("Bottled Wind",B.I,60)
s.v(4)
s.dS(m,"wind","blasts",10,!0)
A.i()
s=$.h=A.j("Bottled Ice",B.F,100)
s.v(7)
s.dF(o,"cold","freezes",16)
A.i()
s=$.h=A.j("Bottled Fire",B.m,140)
s.v(11)
s.dS(p,"fire","burns",23,!0)
A.i()
s=$.h=A.j("Bottled Ocean",B.E,160)
s.v(12)
s.k9(j,b4,"drowns",30)
A.i()
s=$.h=A.j("Bottled Poison",B.B,240)
s.v(13)
s.dS(i,"poison","infects",10,!0)
A.i()
s=$.h=A.j("Bottled Earth",B.k,180)
s.v(16)
s.dF(r,"dirt","crushes",58)
A.i()
s=$.h=A.j("Bottled Lightning",B.O,200)
s.v(18)
s.dF(l,"lightning","shocks",68)
A.i()
s=$.h=A.j("Bottled Acid",B.A,220)
s.v(22)
s.k9(q,"acid","corrodes",72)
A.i()
s=$.h=A.j("Bottled Shadow",B.l,260)
s.v(28)
s.dF(k,"darkness","torments",120)
A.i()
s=$.h=A.j("Bottled Radiance",B.D,280)
s.v(34)
s.dF(n,"light","sears",140)
A.i()
s=$.h=A.j("Bottled Spirit",B.f,300)
s.v(40)
s.dS(h,"spirit","haunts",160,!0)
s=A.a4(226,20,a6)
s.a3("magic/scroll/teleportation")
s.x=0.3
s.bF(75,1,3)
s.a.i(0,p,20)
s.w=5
A.i()
s=$.h=A.j("Scroll[s] of Sidestepping",B.O,20)
s.v(2)
s.x=0.5
s.fh(8)
A.i()
s=$.h=A.j("Scroll[s] of Phasing",B.W,28)
s.v(6)
s.fh(14)
A.i()
s=$.h=A.j("Scroll[s] of Teleportation",B.an,52)
s.v(15)
s.fh(28)
A.i()
s=$.h=A.j("Scroll[s] of Disappearing",B.E,74)
s.v(26)
s.fh(54)
s=A.a4(228,20,a6)
s.a3("magic/scroll/detection")
s.bF(75,1,3)
s.a.i(0,p,20)
s.w=5
A.i()
s=$.h=A.j("Scroll[s] of Find Nearby Escape",B.D,12)
s.E(1,10)
g=t.oO
s.eS(A.a([B.as],g),20)
A.i()
s=$.h=A.j("Scroll[s] of Locate Escape",B.H,28)
s.E(8,30)
s.hn(A.a([B.as],g))
A.i()
s=$.h=A.j("Scroll[s] of Find Nearby Items",B.h,16)
s.E(2,16)
s.eS(A.a([B.aw],g),20)
A.i()
s=$.h=A.j("Scroll[s] of Item Detection",B.N,64)
s.E(12,40)
s.hn(A.a([B.aw],g))
A.i()
s=$.h=A.j("Scroll[s] of Detect Nearby",B.A,36)
s.E(12,36)
s.eS(A.a([B.as,B.aw],g),20)
A.i()
s=$.h=A.j("Scroll[s] of Detection",B.ar,124)
s.v(30)
s.hn(A.a([B.as,B.aw],g))
A.i()
g=$.h=A.j("Scroll[s] of Sense Nearby Monsters",B.I,50)
g.E(6,19)
g.hK(15)
A.i()
g=$.h=A.j("Scroll[s] of Sense Monsters",B.a3,70)
g.E(20,39)
g.hK(20)
A.i()
g=$.h=A.j("Scroll[s] of Perceive Monsters",B.F,100)
g.E(40,69)
g.kI(30,50)
A.i()
g=$.h=A.j("Scroll[s] of Telepathy",B.E,150)
g.v(70)
g.hK(200)
g=A.a4(224,20,a6)
g.a3("magic/scroll/mapping")
g.x=0.25
g.bF(75,1,3)
g.a.i(0,p,15)
g.w=5
A.i()
g=$.h=A.j("Adventurer's Map",B.B,70)
g.E(10,50)
g.hD(16)
A.i()
g=$.h=A.j("Explorer's Map",B.p,160)
g.E(30,70)
g.hD(32)
A.i()
g=$.h=A.j("Cartographer's Map",B.af,240)
g.E(50,90)
g.hD(64)
A.i()
g=$.h=A.j("Wizard's Map",B.a3,360)
g.v(70)
g.km(200,!0)
A.Bz()
A.BM()
g=A.a4(201,a6,a6)
g.a3("equipment/armor/helm")
g.x=0.5
g.bF(10,3,5)
A.i()
g=$.h=A.j("Leather Cap",B.k,50)
g.E(4,40)
g.CW=g.cy=2
g.a.i(0,p,12)
g.w=2
A.i()
g=$.h=A.j("Chainmail Coif",B.l,160)
g.E(10,60)
g.CW=g.cy=3
A.i()
g=$.h=A.j("Steel Cap",B.f,200)
g.E(25,80)
g.cy=4
g.CW=3
A.i()
g=$.h=A.j("Visored Helm",B.o,350)
g.v(40)
g.cy=5
g.CW=6
A.i()
g=$.h=A.j("Great Helm",B.u,550)
g.v(50)
g.cy=6
g.CW=8
A.a4(244,a6,a6).a3("equipment/armor/body/robe")
A.i()
g=$.h=A.j("Robe",B.F,30)
g.E(2,40)
g.x=0.5
g.cy=4
g.CW=null
g.a.i(0,p,15)
g.w=8
A.i()
g=$.h=A.j("Lined Robe",B.B,110)
g.v(6)
g.x=0.25
g.cy=6
g.CW=null
g.a.i(0,p,12)
g.w=8
g=A.a4(246,a6,a6)
g.a3(b5)
g.x=0.5
A.i()
g=$.h=A.j("Cloth Shirt",B.u,20)
g.E(2,30)
g.cy=3
g.CW=null
g.a.i(0,p,15)
g.w=4
A.i()
g=$.h=A.j("Leather Shirt",B.k,90)
g.E(5,50)
g.cy=6
g.CW=1
g.a.i(0,p,12)
g.w=4
A.i()
g=$.h=A.j("Jerkin",B.o,130)
g.E(8,70)
g.cy=8
g.CW=1
A.i()
g=$.h=A.j("Leather Armor",B.w,240)
g.E(12,90)
g.cy=11
g.CW=2
g.a.i(0,p,10)
g.w=4
A.i()
g=$.h=A.j("Padded Armor",B.l,320)
g.v(16)
g.cy=15
g.CW=3
g.a.i(0,p,8)
g.w=4
A.i()
g=$.h=A.j("Studded Armor",B.f,400)
g.v(20)
g.cy=22
g.CW=4
g.a.i(0,p,6)
g.w=4
g=A.a4(242,a6,a6)
g.a3(b5)
g.x=0.5
A.i()
g=$.h=A.j("Mail Hauberk",B.l,500)
g.v(25)
g.cy=28
g.CW=5
A.i()
g=$.h=A.j("Scale Mail",B.o,700)
g.v(35)
g.cy=36
g.CW=7
g=A.a4(251,a6,a6)
g.a3(b5)
g.x=0.5
A.i()
g=$.h=A.j("Plated Mail",B.l,b3)
g.v(40)
g.cy=40
g.CW=8
A.i()
g=$.h=A.j("Brigandine",B.k,1300)
g.v(50)
g.cy=46
g.CW=10
A.i()
g=$.h=A.j("Breastplate",B.f,2000)
g.v(60)
g.cy=52
g.CW=14
A.i()
g=$.h=A.j("Plate Armor",B.o,3400)
g.v(70)
g.cy=60
g.CW=18
A.a4(198,a6,a6).a3("equipment/armor/cloak")
A.i()
g=$.h=A.j("Cloak",B.E,70)
g.E(10,40)
g.x=0.5
g.cy=2
g.CW=1
g.a.i(0,p,20)
g.w=5
A.i()
g=$.h=A.j("Fur Cloak",B.w,140)
g.E(20,60)
g.x=0.3
g.cy=4
g.CW=2
g.a.i(0,p,16)
g.w=5
A.i()
g=$.h=A.j("Spidersilk Cloak",B.l,460)
g.v(40)
g.x=0.2
g.cy=6
g.CW=null
g.a.i(0,p,25)
g.w=3
g=A.a4(197,a6,a6)
g.a3("equipment/armor/gloves")
g.x=0.5
g.bF(20,5,4)
A.i()
g=$.h=A.j("(Pair[s] of )Gloves",B.H,170)
g.v(8)
g.cy=1
g.CW=null
g.a.i(0,p,7)
g.w=2
A.i()
g=$.h=A.j("(Set[s] of )Bracers",B.w,480)
g.v(17)
g.cy=2
g.CW=1
A.i()
g=$.h=A.j("(Pair[s] of )Gauntlets",B.l,800)
g.v(34)
g.cy=4
g.CW=2
g=A.a4(230,a6,a6)
g.a3("equipment/armor/shield")
g.x=0.5
g.bF(10,5,8)
A.i()
g=$.h=A.j("Buckler",B.l,170)
g.E(10,40)
g.cy=0
g.CW=2
g.ch=new A.aB(3,"The buckler blocks {2}.")
A.i()
g=$.h=A.j("Leather Shield",B.w,240)
g.E(20,50)
g.cy=0
g.CW=3
g.ch=new A.aB(5,b6)
g.a.i(0,p,15)
g.w=14
A.i()
g=$.h=A.j("Targe",B.H,340)
g.E(30,60)
g.cy=0
g.CW=4
g.ch=new A.aB(8,"The targe blocks {2}.")
g.a.i(0,p,10)
g.w=20
A.i()
g=$.h=A.j("Roundel",B.f,410)
g.E(40,80)
g.cy=0
g.CW=6
g.ch=new A.aB(10,b6)
A.i()
g=$.h=A.j("Steel Shield",B.o,570)
g.E(50,90)
g.cy=0
g.CW=7
g.ch=new A.aB(12,b6)
A.i()
g=$.h=A.j("Kite Shield",B.d,650)
g.v(60)
g.cy=0
g.CW=8
g.ch=new A.aB(15,b6)
A.i()
g=$.h=A.j("Lantern Shield",B.h,1200)
g.v(30)
g.cy=0
g.CW=8
g.ch=new A.aB(11,b6)
g.pa(5)
g=A.a4(236,a6,a6)
g.a3(b7)
g.x=0.3
A.i()
g=$.h=A.j("(Pair[s] of )Sandals",B.k,10)
g.E(2,20)
g.cy=1
g.CW=null
g.a.i(0,p,20)
g.w=3
A.i()
g=$.h=A.j("(Pair[s] of )Shoes",B.w,30)
g.E(8,40)
g.cy=2
g.CW=null
g.a.i(0,p,14)
g.w=3
g=A.a4(196,a6,a6)
g.a3(b7)
g.x=0.3
A.i()
g=$.h=A.j("(Pair[s] of )Boots",B.k,70)
g.v(14)
g.cy=6
g.CW=1
A.i()
g=$.h=A.j("(Pair[s] of )Plated Boots",B.f,250)
g.v(22)
g.cy=8
g.CW=2
A.i()
g=$.h=A.j("(Pair[s] of )Greaves",B.o,350)
g.v(47)
g.cy=12
g.CW=3
A.i()
A.wZ()
A.x2()
A.xb()
g=A.aj("a","natural/bug/spider",a6,b8,a6,a6,a6)
g.at=4
g.ax=2
g.Q=$.mX()
g=A.p("little brown spider",3,B.k,2,30,a6,0)
g.f=40
g.ah(b9,5,i)
g=$.yc()
f=A.bj("Seems harmless enough. What's that dripping from its pedipalps?",g,c0)
$.c8.fy=f
s=A.p("gray spider",7,B.f,20,30,a6,0)
s.f=30
s.ah(b9,5,i)
s=A.p("spiderling",9,B.u,14,35,a6,0)
s.f=50
s.aV(2,7)
s.ah(b9,10,i)
s=A.p("giant spider",12,B.E,40,a6,a6,0)
s.f=30
s.ah(b9,7,i)
f=A.bj("Like a large dog, if the dog had eight articulated legs, eight\n  glittering eyes, and wanted nothing more than to kill you.",g,c0)
$.c8.fy=f
s=A.aj("b","natural/animal/mammal/bat",a6,a6,a6,1,a6)
s.at=2
s.ax=8
e=s.c
d=$.U().a
s.c=new A.ae(e.a|d)
s.d=B.ai
s=A.p("brown bat",1,B.k,4,a6,0.5,0)
s.f=50
B.a.j(s.w,new A.aB(20,c1))
s.aV(2,4)
s.D(b9,3)
s=A.p("giant bat",4,B.w,24,a6,a6,0)
s.f=30
s.D(b9,6)
s=A.p("cave bat",6,B.o,30,a6,a6,0)
s.f=40
B.a.j(s.w,new A.aB(20,c1))
s.aV(2,5)
s.D(b9,6)
s=A.aj("c","natural/animal/mammal/canine",25,a6,a6,a6,20)
s.at=5
s.ax=10
s.f=25
s=A.p("mangy cur",2,B.D,11,a6,a6,0)
s.aO(4)
s.D(b9,4)
B.a.j(s.dx,new A.bR(6,a6,10))
s=A.p("wild dog",4,B.o,20,a6,a6,0)
s.aO(4)
s.D(b9,6)
B.a.j(s.dx,new A.bR(8,a6,10))
s=A.p("mongrel",7,B.N,28,a6,a6,0)
s.aV(2,5)
s.D(b9,8)
B.a.j(s.dx,new A.bR(10,a6,10))
s=A.p("wolf",26,B.u,60,a6,a6,0)
s.aV(3,6)
s.D(b9,12)
B.a.j(s.dx,new A.bR(10,a6,10))
s=A.p("varg",30,B.f,80,a6,a6,0)
s.aV(2,6)
s.D(b9,16)
B.a.j(s.dx,new A.bR(10,a6,10))
s=A.p("Skoll",36,B.h,200,a6,a6,0)
s.i0()
s.ac(new A.ad(c2),5,9)
s.D(b9,20)
B.a.j(s.dx,new A.bR(10,a6,10))
s=A.p("Hati",40,B.F,250,a6,a6,0)
s.i0()
s.ac(new A.ad(c2),5,9)
s.D(b9,23)
B.a.j(s.dx,new A.bR(10,a6,10))
s=A.p("Fenrir",44,B.l,300,a6,a6,0)
s.i0()
s.ac(new A.ad(c2),3,5)
s.kn("Skoll")
s.kn("Hati")
s.D(b9,26)
B.a.j(s.dx,new A.bR(10,a6,10))
A.B7()
s=A.aj("e","magical/eye",a6,"immobile",a6,a6,a6)
s.at=16
s.ax=1
B.a.j(s.w,new A.aB(10,"{1} blinks out of the way."))
s.c=new A.ae(s.c.a|d)
s.d=B.ai
s=A.p("lazy eye",5,B.I,20,a6,a6,0)
s.D(c3,8)
s.au(c4,c5,l,12,8,5)
s=A.p("mad eye",9,B.a5,40,a6,a6,0)
s.D(c3,8)
s.bl(m,15,8,6)
s=A.p("floating eye",15,B.D,60,a6,a6,0)
s.D(c3,10)
s.au(c4,c5,l,24,6,4)
B.a.j(s.dx,new A.bx(7,10))
s=A.p("baleful eye",20,B.N,80,a6,a6,0)
s.D(c6,12)
s.bl(p,20,8,4)
s.au("jet",c7,j,20,8,4)
B.a.j(s.dx,new A.bx(9,10))
s=A.p("malevolent eye",30,B.m,120,a6,a6,0)
s.D(c6,20)
s.bl(n,20,10,4)
s.bl(k,20,10,4)
s.c2(p,30,a6,7)
B.a.j(s.dx,new A.bx(9,10))
s=A.p("murderous eye",40,B.a0,180,a6,a6,0)
s.D(c6,30)
s.bl(q,40,8,7)
s.au("stone",c8,r,40,8,7)
s.c2(o,30,a6,7)
B.a.j(s.dx,new A.bx(9,10))
s=A.p("watcher",60,B.o,300,a6,a6,0)
s.D("see[s]",50)
s.bl(n,40,10,7)
s.c2(n,30,a6,7)
s.bl(k,50,10,7)
s.c2(k,40,a6,7)
s=A.aj("f","natural/animal/mammal/feline",40,a6,a6,a6,a6)
s.at=10
s.ax=8
s=A.p("stray cat",1,B.h,11,a6,a6,1)
s.f=30
B.a.j(s.dx,new A.b3(B.ck,4))
s.D(b9,4)
s.D(c9,3)
s=A.aj("g","humanoid/hob/goblin",a6,a6,a6,a6,a6)
s.at=8
s.ax=4
s.f=10
e=s.c
c=$.bC().a
s.c=new A.ae(e.a|c)
e=A.p("goblin peon",4,B.H,30,a6,a6,0)
e.f=20
e.aO(4)
e.D(d0,8)
B.a.j(e.dx,new A.b3(B.a9,8))
e.C(d1,20)
e.C(d2,5)
e.C(d3,10)
e=A.p("goblin archer",6,B.p,36,a6,a6,0)
e.aO(2)
e.ac(new A.ad(d4),0,3)
e.D(d0,4)
s=$.az()
e.au(d5,c8,s,8,8,3)
e.C(d1,30)
e.C("bow",10)
e.C("dagger",5)
e.C(d3,10)
e=A.p("goblin fighter",6,B.k,58,a6,a6,0)
e.aO(2)
e.ac(new A.ad(d4),1,4)
e.D(d0,12)
e.C(d1,20)
e.C(d2,10)
e.C(d6,10)
e.C(d7,5)
e.C(d3,10)
e=A.p("goblin warrior",8,B.o,68,a6,a6,0)
e.aO(2)
e.ac(new A.ad(d4),1,5)
e.D(d0,16)
e.C(d1,25)
e.C("axe",10)
e.C(d6,10)
e.C(d7,5)
e.C(d3,10)
b=t.s
B.a.U(e.x,A.a(d8.split(c0),b))
e=A.p("goblin mage",9,B.E,50,a6,a6,0)
e.ac(new A.ad(d4),1,4)
e.D("whip[s]",7)
e.bl(p,12,8,12)
e.au(c4,c5,l,16,6,12)
e.C(d1,20)
e.C(d9,10)
e.C(e0,30)
e=A.p("goblin ranger",12,B.B,60,a6,a6,0)
e.ac(new A.ad(d4),0,5)
e.D(d0,10)
e.au(d5,c8,s,12,8,3)
e.C(d1,20)
e.C("bow",15)
e.C(d6,10)
e.C(e0,20)
e=A.p("Erlkonig, the Goblin Prince",14,B.l,120,a6,a6,0)
e.cO(B.aH)
e.ac(new A.ad(d4),4,8)
e.D(b1,10)
e.D(e1,14)
e.bl(k,20,10,20)
e.hs(d1,3)
e.oN(e2,2,4)
e.eT(e0,3,4)
B.a.U(e.x,A.a(d8.split(c0),b))
e=A.aj("i","bug",a6,b8,a6,a6,3)
e.at=5
e.ax=2
e.f=40
e=A.p("giant cockroach[es]",1,B.w,4,a6,0.4,0)
e.aV(2,5)
e.d=B.bv
e.D(e3,2)
B.a.j(e.dx,new A.bM(!1,4))
e.C(a8,30)
f=A.bj("It's not quite as easy to squash one of these when it's as long as\n      your arm.",g,c0)
$.c8.fy=f
e=A.p("giant centipede",3,B.m,14,a6,a6,2)
e.f=20
e.D(e3,4)
e.D(b9,8)
e=A.aj("i","natural/bug/fly",a6,b8,a6,a6,3)
e.at=5
e.ax=2
e.f=40
e=A.p("firefly",8,B.N,6,a6,a6,1)
e.f=70
e.aV(3,8)
e.ah(b9,12,p)
e.C(a8,40)
e=A.aj("j","magical/jelly",a6,b8,0.7,-1,a6)
e.at=3
e.ax=1
e.f=30
e.d=B.aT
e=A.p("green jelly",1,B.A,10,a6,a6,0)
a=e.Q=$.xK()
e.D(e3,3)
e=A.aj("j","jelly",a6,e4,0.6,a6,a6)
e.at=2
e.ax=1
e.d=B.bv
e.aO(4)
e=A.p("green slime",2,B.p,8,a6,a6,0)
e.Q=a
e.D(e3,4)
B.a.j(e.dx,new A.bM(!1,4))
e=A.p("frosty slime",4,B.u,14,a6,a6,0)
e.Q=$.xX()
e.ah(e3,5,o)
B.a.j(e.dx,new A.bM(!1,4))
e=A.p("mud slime",6,B.k,20,a6,a6,0)
e.Q=$.xC()
e.ah(e3,8,r)
B.a.j(e.dx,new A.bM(!1,4))
e=A.p("smoking slime",15,B.m,30,a6,a6,0)
e.as=4
e.Q=$.xO()
e.ah(e3,10,p)
B.a.j(e.dx,new A.bM(!1,4))
e=A.p("sparkling slime",20,B.W,40,a6,a6,0)
e.as=3
e.Q=$.xW()
e.ah(e3,12,l)
B.a.j(e.dx,new A.bM(!1,4))
e=A.p("caustic slime",25,B.af,50,a6,a6,0)
e.Q=a
e.ah(e3,13,q)
B.a.j(e.dx,new A.bM(!1,4))
e=A.p("virulent slime",35,B.B,60,a6,a6,0)
e.Q=a
e.ah(e3,14,i)
B.a.j(e.dx,new A.bM(!1,4))
e=A.p("ectoplasm",45,B.l,40,a6,a6,0)
e.Q=$.xJ()
e.ah(e3,15,h)
B.a.j(e.dx,new A.bM(!1,4))
e=A.aj("k","humanoid/hob/kobold",a6,e5,a6,a6,a6)
e.at=10
e.ax=4
e.f=15
e=A.p("scurrilous imp",1,B.a5,12,a6,a6,0)
e.f=20
e.aO(2)
e.D("club[s]",4)
B.a.j(e.dx,new A.b3(B.a9,5))
e.p0()
e.C(d1,20)
e.C(e6,10)
e.C("speed",20)
e=A.p("vexing imp",2,B.W,16,a6,a6,0)
e.aO(2)
e.ac(new A.ad(e7),0,1)
e.D(c9,4)
B.a.j(e.dx,new A.b3(B.a9,5))
e.au(c4,c5,l,6,6,5)
e.C(d1,25)
e.C("teleportation",20)
A.aj("k",e7,a6,a6,a6,a6,a6).f=20
e=A.p(e7,3,B.m,20,a6,a6,0)
e.aO(3)
e.ac(new A.ad(c2),0,3)
e.D(e8,4)
B.a.j(e.dx,new A.bx(6,10))
e.C(d1,25)
e.C(e2,10)
e.C(e0,20)
e=A.p("kobold shaman",4,B.E,20,a6,a6,0)
e.aO(2)
e.ac(new A.ad(c2),0,3)
e.D(b1,4)
e.au("jet",c7,j,8,8,10)
e.C(d1,25)
e.C(d9,10)
e.C(e0,20)
e=A.p("kobold trickster",5,B.h,24,a6,a6,0)
e.D(b1,5)
a=e.dx
B.a.j(a,new A.b3(B.a9,5))
e.au(c4,c5,l,8,6,5)
B.a.j(a,new A.bx(6,7))
e.hy(7)
e.C(d1,35)
e.C(e0,20)
e=A.p("kobold priest",6,B.F,30,a6,a6,0)
e.aO(2)
e.ac(new A.ad(e7),1,3)
e.D("club[s]",6)
B.a.j(e.dx,new A.h_(10,15))
e.hy(7)
e.C(d1,20)
e.C(e6,10)
e.C(d9,10)
e.C(e0,30)
e=A.p("imp incanter",7,B.O,33,a6,a6,0)
e.aO(2)
e.ac(new A.ad(e7),1,3)
e.ac(new A.ad(c2),0,3)
e.D(c9,4)
B.a.j(e.dx,new A.b3(B.a9,6))
e.au(c4,c5,l,10,6,5)
e.C(d1,30)
e.C(d9,10)
e.C(e0,35)
B.a.U(e.x,A.a(e5.split(c0),b))
e=A.p("imp warlock",8,B.an,46,a6,a6,0)
e.ac(new A.ad(e7),2,5)
e.ac(new A.ad(c2),0,3)
e.D(d0,5)
e.au("ice","freezes",o,12,8,8)
e.au(c4,c5,l,12,6,8)
e.C(d1,30)
e.C("staff",20)
e.C(d9,10)
e.C(e0,30)
e=A.p("Feng",10,B.N,80,a6,a6,1)
e.f=10
e.cO(B.aH)
e.ac(new A.ad(e7),4,10)
e.ac(new A.ad(c2),1,3)
e.D(d0,5)
a=e.dx
B.a.j(a,new A.b3(B.a9,7))
B.a.j(a,new A.bx(6,5))
B.a.j(a,new A.bx(30,50))
e.c2(l,12,a6,8)
e.eT(d1,3,5)
e.hu(d2,5,20)
e.hu(d6,5,30)
e.eT(e0,2,5)
e=A.aj("l","humanoid/saurian",a6,b8,a6,a6,a6)
e.at=10
e.ax=5
e.f=10
B.a.j(e.w,new A.aB(5,"{2} [are|is] deflected by its scales."))
e=A.p("lizard guard",11,B.h,26,a6,a6,0)
e.D(e9,8)
e.D(b9,10)
e.C(d1,30)
e.C(d6,10)
e.C(d2,10)
e=A.p("lizard protector",15,B.A,30,a6,a6,0)
e.ac(new A.ad(f0),0,2)
e.D(e9,10)
e.D(b9,14)
e.C(d1,30)
e.C(d6,10)
e.C(d2,10)
e=A.p("armored lizard",17,B.o,38,a6,a6,0)
e.ac(new A.ad(f0),0,2)
e.D(e9,10)
e.D(b9,15)
e.C(d1,30)
e.C(d6,20)
e.C(d2,10)
e=A.p("scaled guardian",19,B.l,50,a6,a6,0)
e.ac(new A.ad(f0),0,3)
e.ac(new A.ad(f1),0,2)
e.D(e9,10)
e.D(b9,15)
e.C(d1,40)
e.C(e2,10)
e=A.p(f0,21,B.N,64,a6,a6,0)
e.ac(new A.ad(f0),1,4)
e.ac(new A.ad(f1),0,2)
e.D(e9,12)
e.D(b9,17)
e.C(d1,50)
e.C(e2,10)
e=A.aj("o","humanoid/orcus/orc",a6,a6,a6,a6,a6)
e.at=7
e.ax=6
e.f=10
e.c=new A.ae(e.c.a|c)
B.a.U(e.x,A.a(d8.split(c0),b))
e=A.p("orc",28,B.N,100,a6,a6,0)
e.aV(3,6)
e.D(d0,12)
e.C(d1,20)
e.C(e2,5)
e.C(d2,5)
e=A.p("orc brute",29,B.af,120,a6,a6,0)
e.ac(new A.ad("orc"),2,5)
e.D("bash[es]",16)
e.C(d1,20)
e.C(e6,10)
e.C(d6,10)
e=A.p("orc soldier",30,B.o,140,a6,a6,0)
e.aV(4,6)
e.ac(new A.ad("orcus"),1,5)
e.D(d0,20)
e.C(d1,25)
e.C("axe",10)
e.C(d6,10)
e=A.p("orc chieftain",31,B.m,180,a6,a6,0)
e.ac(new A.ad("orcus"),2,10)
e.D(d0,10)
e.oM(d1,2,40)
e.C(e2,20)
e.C(a7,20)
e=A.aj("p","humanoid/human",a6,a6,a6,a6,14)
e.at=10
e.ax=5
e.f=10
e.c=new A.ae(e.c.a|c)
e.as=2
e=A.p("Harold the Misfortunate",2,B.O,30,a6,a6,0)
e.cO(B.aH)
e.D(b1,3)
B.a.j(e.dx,new A.b3(B.aF,5))
e.C(d1,80)
e.ht(f2,4,20)
e.ht(d6,4,30)
e.ht(e0,4,40)
e=A.p("hapless adventurer",1,B.D,14,15,a6,0)
e.f=30
e.D(b1,3)
B.a.j(e.dx,new A.b3(B.aF,12))
e.C(d1,15)
e.C(f2,10)
e.C(d6,15)
e.C(e0,20)
B.a.U(e.x,A.a(e5.split(c0),b))
e=A.p("simpering knave",2,B.N,17,a6,a6,0)
e.D(b1,2)
e.D(d0,4)
e.C(d1,20)
e.C("whip",10)
e.C(d6,15)
e.C(e0,20)
B.a.U(e.x,A.a(e5.split(c0),b))
e=A.p("decrepit mage",3,B.W,20,a6,a6,0)
e.f=30
e.D(b1,2)
e.au(c4,c5,l,8,6,10)
e.C(d1,15)
e.C(e0,30)
e.C("dagger",5)
e.C("staff",5)
e.C(d9,10)
e.C("boots",5)
e=A.p("unlucky ranger",5,B.p,30,25,a6,0)
e.f=20
e.D(e1,2)
e.au(d5,c8,s,2,8,4)
B.a.j(e.dx,new A.b3(B.aF,10))
e.C(d1,20)
e.C("potion",20)
e.C("bow",10)
e.C("body",20)
e=A.p("drunken priest",5,B.F,34,a6,a6,0)
e.f=40
e.D(b1,8)
s=e.dx
B.a.j(s,new A.h_(8,15))
B.a.j(s,new A.b3(B.aF,5))
e.C(d1,35)
e.C("scroll",20)
e.C(e6,10)
e.C(d9,10)
B.a.U(e.x,A.a(b8.split(c0),b))
e=A.aj("r","natural/animal/mammal/rodent",30,a6,a6,a6,a6)
e.at=4
e.ax=6
e.f=30
e.d=B.aT
e=A.p("[mouse|mice]",1,B.H,3,a6,0.7,0)
e.aO(6)
e.D(b9,3)
e.D(c9,2)
e=A.p("sewer rat",2,B.f,8,a6,a6,0)
e.f=20
e.aO(4)
e.D(b9,4)
e.D(c9,3)
e=A.p("sickly rat",3,B.p,10,a6,a6,0)
e.ah(b9,8,i)
e.D(c9,4)
e=A.p("plague rat",6,B.A,20,a6,a6,0)
e.aO(4)
e.ah(b9,15,i)
e.D(c9,8)
e=A.p("giant rat",8,B.N,40,a6,a6,0)
e.D(b9,12)
e.D(c9,8)
e=A.p("The Rat King",8,B.a0,120,a6,a6,0)
e.cO(B.aH)
e.D(b9,16)
e.D(c9,10)
e.ac(new A.ad("rodent"),8,16)
e.hs(d1,3)
e.hu(a7,10,50)
e=A.aj("s","natural/bug/slug",5,b8,a6,-3,2)
e.at=3
e.ax=1
e.f=30
A.p("giant slug",3,B.ae,20,a6,a6,0).D(e3,8)
A.p("suppurating slug",6,B.A,50,a6,a6,0).ah(e3,12,i)
A.p("acidic slug",9,B.ae,70,a6,a6,0).ah(e3,16,q)
e=A.aj("v","natural/plant/vine",a6,e4,a6,a6,a6)
e.ax=e.at=10
A.p("choker",16,B.p,40,a6,a6,0).D(f3,12)
e=A.p("nightshade",19,B.O,50,a6,a6,0)
e.l7(10,3)
e.ah("touch[es]",12,i)
e=A.p("creeper",22,B.A,60,a6,a6,0)
B.a.j(e.dx,new A.bM(!0,10))
e.l7(10,3)
e.D(f3,8)
A.p("strangler",26,B.B,80,a6,a6,0).D(f3,14)
s=A.aj("w",f4,15,b8,a6,a6,a6)
s.at=2
s.ax=3
s.f=40
s=A.p("blood worm",1,B.a0,4,a6,0.5,0)
s.aV(3,7)
s.D(e3,5)
s=A.p("fire worm",10,B.N,6,a6,a6,0)
s.aV(2,6)
s.d=B.aT
s.ah(e3,5,p)
A.aj("w",f4,10,b8,a6,a6,a6).f=30
A.p("giant earthworm",3,B.a5,30,a6,a6,-2).D(e3,5)
A.p("giant cave worm",7,B.H,80,a6,a6,-2).ah(e3,12,q)
s=A.aj("x","undead/skeleton",a6,a6,a6,a6,a6)
s.ax=s.at=4
s.f=30
s=A.p(f5,3,B.f,18,a6,3,-1)
s.f=40
s.D(e9,6)
s=A.p(f6,4,B.o,26,a6,4,0)
s.f=40
s.D(e9,8)
s=A.p(f7,7,B.H,33,a6,3,-2)
s.f=40
s.D(b9,10)
s=A.p(f8,10,B.D,44,a6,4,0)
s.ax=s.at=0
s.f=60
s.c=new A.ae(s.c.a|c)
s.D(e9,7)
s.C(d1,30)
s.C(f2,10)
s.C(d6,10)
s=A.p(f9,12,B.af,50,a6,4,0)
s.D(b9,9)
s.D("kick[s]",7)
s.C(d1,30)
s.C(d6,10)
s=A.p(g0,13,B.A,60,a6,5,0)
s.c=new A.ae(s.c.a|c)
s.D(e9,7)
e=s.dx
B.a.j(e,new A.bs(A.aL(f9),A.aL(f6),g1,1))
B.a.j(e,new A.bs(A.aL(f9),A.aL(f5),g2,1))
s.C(d1,30)
s.C(f2,5)
s.C(d6,10)
s=A.p("skeleton",15,B.u,70,a6,6,0)
s.c=new A.ae(s.c.a|c)
s.D(e9,7)
s.D(b9,9)
e=s.dx
B.a.j(e,new A.bs(A.aL(f8),A.aL(f7),g3,1))
B.a.j(e,new A.bs(A.aL(g0),A.aL(f6),g1,1))
B.a.j(e,new A.bs(A.aL(g0),A.aL(f5),g2,1))
s.C(d1,40)
s.C(f2,10)
s.C(d6,10)
s=A.p("skeleton warrior",17,B.a5,90,a6,6,0)
s.c=new A.ae(s.c.a|c)
s.D(e1,13)
s.D(d0,10)
e=s.dx
B.a.j(e,new A.bs(A.aL(f8),A.aL(f7),g3,1))
B.a.j(e,new A.bs(A.aL(g0),A.aL(f6),g1,1))
B.a.j(e,new A.bs(A.aL(g0),A.aL(f5),g2,1))
s.C(d1,50)
s.C(f2,20)
s.C(d6,15)
s=A.p("robed skeleton",19,B.O,110,a6,4,0)
s.c=new A.ae(s.c.a|c)
s.D(e1,13)
s.D(d0,10)
s.bl(l,15,10,8)
e=s.dx
B.a.j(e,new A.bs(A.aL(f8),A.aL(f7),g3,1))
B.a.j(e,new A.bs(A.aL(g0),A.aL(f6),g1,1))
B.a.j(e,new A.bs(A.aL(g0),A.aL(f5),g2,1))
s.C(d1,50)
s.C(e0,20)
s.C(d6,10)
s=A.aj("B","natural/animal/bird",a6,a6,a6,a6,a6)
s.at=8
s.ax=6
B.a.j(s.w,new A.aB(10,"{1} flaps out of the way."))
s.c=new A.ae(s.c.a|d)
s.aV(3,6)
s=A.p("crow",4,B.l,10,a6,a6,2)
s.f=30
s.D(b9,5)
s.C(a9,30)
f=A.bj('"What harm can a stupid little crow do?" you think as it and its\n      murderous friends dive towards your eyes, claws extended.',g,c0)
$.c8.fy=f
s=A.p("raven",6,B.f,16,a6,a6,0)
s.f=15
s.D(b9,5)
s.D(e9,4)
s.C(a9,30)
B.a.U(s.x,A.a(d8.split(c0),b))
f=A.bj("Its black eyes gleam with a malevolent intelligence.",g,c0)
$.c8.fy=f
A.Bg()
s=A.aj("F","humanoid/hob/fae",a6,e5,a6,2,a6)
s.at=10
s.ax=8
s.f=30
B.a.j(s.w,new A.aB(10,c1))
s.c=new A.ae(s.c.a|d)
s.d=B.ai
s=A.p("forest sprite",2,B.af,6,a6,a6,0)
s.D(c9,3)
B.a.j(s.dx,new A.b3(B.a9,4))
s.au(c4,c5,l,4,6,12)
s.C(d1,10)
s.C(e0,30)
s.C(a8,30)
s=A.p("house sprite",5,B.I,10,a6,a6,0)
s.D(e8,5)
g=s.dx
B.a.j(g,new A.b3(B.a9,4))
s.au("stone",c8,r,4,8,10)
B.a.j(g,new A.bx(4,8))
s.C(d1,10)
s.C(e0,30)
s.C(a8,30)
s=A.p("mischievous sprite",7,B.a5,24,a6,a6,0)
s.D(e8,6)
g=s.dx
B.a.j(g,new A.b3(B.a9,4))
s.bl(m,8,8,10)
B.a.j(g,new A.bx(5,10))
s.C(d1,10)
s.C(e0,30)
s.C(a8,30)
s=A.p("Tink",8,B.p,40,a6,a6,0)
s.cO(B.co)
s.f=10
s.D(e8,8)
g=s.dx
B.a.j(g,new A.b3(B.a9,4))
s.au(c4,c5,l,4,6,8)
s.bl(m,7,8,10)
B.a.j(g,new A.bx(5,10))
s.hs(d1,2)
s.eT(e0,3,3)
s=A.aj("H","mythical/beast/hybrid",a6,a6,a6,a6,a6)
s.at=10
s.ax=12
s=A.p("harpy",25,B.O,50,a6,a6,2)
s.c=new A.ae(s.c.a|d)
s.aV(2,5)
s.D(b9,10)
s.D(c9,15)
d=s.dx
B.a.j(d,new A.bR(10,"screeches",10))
B.a.j(d,new A.b3(B.cj,5))
s.C(a9,50)
s=A.p("griffin",35,B.h,200,a6,a6,0)
s.D(b9,20)
s.D(c9,15)
s.C(a9,50)
A.aj("Q","magical",a6,a6,a6,a6,a6)
s=A.p("Nameless Unmaker",100,B.W,b3,a6,a6,2)
s.cO(B.y)
s.ax=s.at=16
s.ah("crushe[s]",250,r)
s.ah("blast[s]",200,l)
s.c2(k,500,a6,10)
B.a.U(s.x,A.a(b8.split(c0),b))
s.c=new A.ae(s.c.a|c)
a0=A.uK(20,new A.aI(100,A.a7(a7,s.CW,B.hx)))
B.a.j(s.dy,a0)
A.aj("R","natural/animal/herp",a6,a6,a6,a6,a6)
s=A.p("frog",1,B.A,4,30,a6,0)
s.at=6
s.ax=4
s.f=30
s.c=new A.ae(s.c.a|$.iD().a)
s.D("hop[s] on",2)
s=A.aj("R","natural/animal/herp/salamander",30,a6,a6,a6,a6)
s.at=6
s.ax=5
s.f=20
s.d=B.ai
s.as=3
s=A.p("juvenile salamander",7,B.a5,20,a6,a6,0)
s.ah(b9,14,p)
s.c2(p,20,4,16)
s=A.p(f1,13,B.m,30,a6,a6,0)
s.ah(b9,18,p)
s.c2(p,30,5,16)
s=A.p("three-headed salamander",23,B.a0,90,a6,a6,0)
s.ah(b9,24,p)
s.c2(p,20,5,10)
s=A.aj("S","natural/animal/herp/snake",30,a6,a6,a6,a6)
s.at=4
s.ax=7
s.f=30
A.p("water snake",1,B.A,11,a6,a6,0).D(b9,3)
A.p("brown snake",3,B.k,25,a6,a6,0).D(b9,4)
A.p("cave snake",8,B.o,40,a6,a6,0).D(b9,10)
A.fv()
A.yn($.cc().goV())
A.aW()
$.be="body"
s=A.I(g4,1)
s.v(40)
s.Y(2,4,3)
s.J(400,2)
s.bG(-2)
g=t.Q
g.a(A.a_())
s.as=A.a_()
s.R(n)
s=A.I(g5,0.3)
s.v(60)
s.Y(4,4,6)
s.J(600,3)
s.bG(-3)
s.as=A.a_()
e=t.S
s.ch.i(0,B.ac,g.a(A.fw(1,e)))
s.R(m)
s.R(n)
A.aW()
$.be="cloak"
s=A.I(g4,1)
s.E(40,80)
s.Y(4,4,6)
s.J(300,2)
s.bG(-1)
s.as=A.a_()
s.R(n)
s=A.I(g5,0.3)
s.v(60)
s.Y(5,4,8)
s.J(500,3)
s.bG(-2)
s.as=A.a_()
s.ch.i(0,B.ac,g.a(A.fw(2,e)))
s.R(m)
s.R(n)
A.aW()
$.be="boots"
s=A.I(g4,1)
s.v(50)
s.Y(2,4,5)
s.J(400,2.5)
s.bG(-2)
s.as=A.a_()
A.aW()
$.be="helm"
s=A.I(g4,1)
s.E(40,80)
s.Y(1,4,3)
s.J(400,2)
s.bG(-1)
s.as=A.a_()
s.ch.i(0,B.a2,g.a(A.fw(1,e)))
s.R(n)
s=A.I(g5,0.3)
s.v(60)
s.b6(2,4)
s.J(600,3)
s.bG(-1)
s.as=A.a_()
s.ch.i(0,B.a2,A.a_())
s.R(m)
s.R(n)
A.aW()
$.be="shield"
s=A.I(g4,1)
s.E(40,80)
s.Y(3,4,5)
s.J(300,1.6)
s.bA(0.8)
s.aC(A.aX())
s.R(n)
s=A.I(g5,0.5)
s.v(50)
s.b6(1,4)
s.J(500,2.2)
s.bA(0.6)
d=t.i
s.aC(A.fw(1.5,d))
s.ch.i(0,B.a2,A.a_())
s.R(m)
s.R(n)
A.aW()
$.be="body"
s=A.I(g6,1)
s.v(30)
s.Y(4,3,6)
s.J(400,2)
s.bG(2)
s.as=A.a_()
s.R(r)
s.R(k)
A.aW()
$.be="helm"
s=A.I(g6,1)
s.v(50)
s.Y(3,4,5)
s.J(300,2)
s.bG(1)
s.as=A.a_()
s.R(r)
s.R(k)
A.aW()
$.be="gloves"
s=A.I(g6,1)
s.v(50)
s.J(300,2)
s.Y(2,4,4)
s.bG(1)
s.as=A.a_()
s.ch.i(0,B.aj,g.a(A.fw(1,e)))
s.R(r)
s.R(k)
A.aW()
$.be="boots"
s=A.I(g6,1)
s.v(50)
s.Y(3,4,5)
s.J(300,2)
s.bG(1)
s.as=A.a_()
s.R(r)
s.R(k)
A.aW()
$.be="shield"
s=A.I(g6,1)
s.v(40)
s.Y(4,3,8)
s.J(200,2.2)
s.bA(1.2)
s.dL(A.a_(),A.aX())
s.R(r)
s.R(k)
A.aW()
$.be="armor"
s=A.I("_ of Resist Air",0.5)
s.E(10,50)
s.J(200,1.2)
s.R(m)
s=A.I("_ of Resist Earth",0.5)
s.E(11,51)
s.J(230,1.2)
s.R(r)
s=A.I("_ of Resist Fire",0.5)
s.E(12,52)
s.J(260,1.3)
s.R(p)
s=A.I("_ of Resist Water",0.5)
s.E(13,53)
s.J(310,1.2)
s.R(j)
s=A.I("_ of Resist Acid",0.3)
s.E(14,54)
s.J(340,1.3)
s.R(q)
s=A.I("_ of Resist Cold",0.5)
s.E(15,55)
s.J(400,1.2)
s.R(o)
s=A.I("_ of Resist Lightning",0.3)
s.E(16,56)
s.J(430,1.2)
s.R(l)
s=A.I("_ of Resist Poison",0.25)
s.E(17,57)
s.J(460,1.5)
s.R(i)
s=A.I("_ of Resist Dark",0.25)
s.E(18,58)
s.J(490,1.3)
s.R(k)
s=A.I("_ of Resist Light",0.25)
s.E(19,59)
s.J(490,1.3)
s.R(n)
s=A.I("_ of Resist Spirit",0.4)
s.E(10,60)
s.J(520,1.4)
s.R(h)
s=A.I("_ of Resist Nature",0.3)
s.v(40)
s.J(3000,4)
s.R(m)
s.R(r)
s.R(p)
s.R(j)
s.R(o)
s.R(l)
s=A.I("_ of Resist Destruction",0.3)
s.v(40)
s.J(1300,2.6)
s.R(q)
s.R(p)
s.R(l)
s.R(i)
s=A.I("_ of Resist Evil",0.3)
s.v(60)
s.J(1500,3)
s.R(q)
s.R(i)
s.R(k)
s.R(h)
s=A.I("_ of Resistance",0.3)
s.v(70)
s.J(5000,6)
s.R(m)
s.R(r)
s.R(p)
s.R(j)
s.R(q)
s.R(o)
s.R(l)
s.R(i)
s.R(k)
s.R(n)
s.R(h)
s=A.I("_ of Protection from Air",0.25)
s.v(36)
s.b6(2,5)
s.J(500,1.4)
s.bu(m,A.a_())
m=A.I("_ of Protection from Earth",0.25)
m.v(37)
m.b6(2,5)
m.J(500,1.4)
m.bu(r,A.a_())
r=A.I("_ of Protection from Fire",0.25)
r.v(38)
r.b6(2,5)
r.J(500,1.5)
r.bu(p,A.a_())
r=A.I("_ of Protection from Water",0.25)
r.v(39)
r.b6(2,5)
r.J(500,1.4)
r.bu(j,A.a_())
j=A.I("_ of Protection from Acid",0.2)
j.v(40)
j.b6(2,5)
j.J(500,1.5)
j.bu(q,A.a_())
q=A.I("_ of Protection from Cold",0.25)
q.v(41)
q.b6(2,5)
q.J(500,1.4)
q.bu(o,A.a_())
q=A.I("_ of Protection from Lightning",0.16)
q.v(42)
q.b6(2,5)
q.J(500,1.4)
q.bu(l,A.a_())
q=A.I("_ of Protection from Poison",0.14)
q.v(43)
q.b6(2,5)
q.J(b3,1.6)
q.bu(i,A.a_())
q=A.I("_ of Protection from Dark",0.14)
q.v(44)
q.b6(2,5)
q.J(500,1.5)
q.bu(k,A.a_())
q=A.I("_ of Protection from Light",0.14)
q.v(45)
q.b6(2,5)
q.J(500,1.5)
q.bu(n,A.a_())
q=A.I("_ of Protection from Spirit",0.13)
q.v(46)
q.b6(2,5)
q.J(800,1.6)
q.bu(h,A.a_())
A.aW()
$.be="weapon"
q=A.I("_ of Harming",1)
q.E(1,30)
q.Y(1,3,2)
q.J(100,1.2)
q.bA(1.05)
q.dK(A.a_())
q=A.I("_ of Wounding",1)
q.E(10,50)
q.Y(3,3,5)
q.J(140,1.3)
q.bA(1.07)
q.dK(A.a_())
q=A.I("_ of Maiming",1)
q.E(25,75)
q.Y(2,3,4)
q.J(180,1.5)
q.bA(1.09)
q.dL(A.a_(),A.aX())
q=A.I("_ of Slaying",1)
q.v(45)
q.Y(4,2,8)
q.J(200,2)
q.bA(1.11)
q.dL(A.a_(),A.aX())
A.aW()
$.be="bow"
q=A.I("Ash _",1)
q.E(10,70)
q.Y(2,4,4)
q.J(300,1.3)
q.bA(0.8)
q.dK(A.a_())
q=A.I("Yew _",1)
q.v(20)
q.Y(5,3,8)
q.J(500,1.4)
q.bA(0.8)
q.dK(A.a_())
A.aW()
$.be="weapon"
q=A.I("Glimmering _",0.3)
q.E(20,60)
q.Y(2,3,3)
q.J(300,1.3)
q.aC(A.aX())
q.bz(n)
q=A.I("Shining _",0.25)
q.E(32,90)
q.Y(4,3,5)
q.J(400,1.6)
q.aC(A.aX())
q.bz(n)
q=A.I("Radiant _",0.2)
q.v(48)
q.Y(6,3,8)
q.J(500,2)
q.aC(A.aX())
q.ci(n,2)
n=A.I("Dim _",0.3)
n.E(16,60)
n.Y(2,3,3)
n.J(300,1.3)
n.aC(A.aX())
n.bz(k)
n=A.I("Dark _",0.25)
n.E(32,80)
n.Y(4,3,5)
n.J(400,1.6)
n.aC(A.aX())
n.bz(k)
n=A.I("Black _",0.2)
n.v(56)
n.Y(6,3,8)
n.J(500,2)
n.aC(A.aX())
n.ci(k,2)
k=A.I("Chilling _",0.3)
k.E(20,65)
k.Y(4,3,6)
k.J(300,1.5)
k.aC(A.aX())
k.bz(o)
k=A.I("Freezing _",0.25)
k.v(40)
k.Y(6,3,9)
k.J(400,1.7)
k.aC(A.aX())
k.ci(o,2)
o=A.I("Burning _",0.3)
o.E(20,60)
o.Y(3,3,5)
o.J(300,1.5)
o.aC(A.aX())
o.bz(p)
o=A.I("Flaming _",0.25)
o.E(40,90)
o.Y(6,3,7)
o.J(360,1.8)
o.aC(A.aX())
o.bz(p)
o=A.I("Searing _",0.2)
o.v(60)
o.Y(8,3,11)
o.J(500,2.1)
o.aC(A.aX())
o.ci(p,2)
p=A.I("Electric _",0.2)
p.v(50)
p.Y(4,3,7)
p.J(300,1.5)
p.aC(A.aX())
p.bz(l)
p=A.I("Shocking _",0.2)
p.v(70)
p.Y(8,3,11)
p.J(400,2)
p.aC(A.aX())
p.ci(l,2)
l=A.I("Poisonous _",0.2)
l.E(35,90)
l.Y(1,4,2)
l.J(500,1.5)
l.aC(A.aX())
l.bz(i)
l=A.I("Venomous _",0.2)
l.v(70)
l.Y(3,4,5)
l.J(800,1.8)
l.aC(A.aX())
l.ci(i,2)
i=A.I("Ghostly _",0.2)
i.E(45,85)
i.Y(4,3,6)
i.J(300,1.6)
i.bA(0.7)
i.aC(A.aX())
i.bz(h)
i=A.I("Spiritual _",0.15)
i.v(80)
i.Y(7,3,10)
i.J(400,2.1)
i.bA(0.7)
i.aC(A.aX())
i.ci(h,2)
A.yh()
A.aW()
$.be="helm"
h=A.I("_ of Acumen",1)
h.E(35,55)
h.b6(1,4)
h.J(300,2)
h.ch.i(0,B.a2,A.a_())
h=A.I("_ of Wisdom",1)
h.E(45,75)
h.Y(2,4,3)
h.J(500,3)
h.ch.i(0,B.a2,A.a_())
h=A.I("_ of Sagacity",1)
h.v(75)
h.Y(4,4,5)
h.J(700,4)
h.ch.i(0,B.a2,A.a_())
h=A.I("_ of Genius",1)
h.v(85)
h.Y(6,4,7)
h.J(b3,5)
h.ch.i(0,B.a2,A.a_())
A.aW()
h=t.N
A.iC("The General's General Store",A.B(["Loaf of Bread",2,"Chunk of Meat",0.6,"Tallow Candle",1,"Wax Candle",0.7,"Oil Lamp",0.5,"Torch",0.3,"Lantern",0.1,"Soothing Balm",0.6,"Mending Salve",0.4,b2,0.2,"Club",0.1,"Staff",0.1,"Quarterstaff",0.05,"Whip",0.1,"Dagger",0.1],h,d))
A.iC("Dirk's Death Emporium",A.B(["Hammer",0.5,"Mattock",0.2,"War Hammer",0.1,"Morningstar",0.6,"Mace",0.3,"Chain Whip",0.2,"Flail",0.1,"Falchion",0.7,"Rapier",1,"Shortsword",0.6,"Scimitar",0.4,"Cutlass",0.2,"Spear",1,"Angon",0.4,"Lance",0.2,"Partisan",0.1,"Hatchet",1,"Axe",0.5,"Valaska",0.25,"Battleaxe",0.2,"Short Bow",1,"Longbow",0.3,"Crossbow",0.05],h,d))
A.iC("Skullduggery and Bamboozelry",A.B(["Dirk",1,"Dagger",0.3,"Stiletto",0.1,"Rondel",0.05,"Baselard",0.02],h,d))
A.iC("Garthag's Armoury",A.B(["Cloak",1,"Fur Cloak",1,"Cloth Shirt",1,"Leather Shirt",1,"Jerkin",1,"Leather Armor",1,"Padded Armor",1,"Studded Armor",1,"Mail Hauberk",1,"Scale Mail",1,"Robe",1,"Lined Robe",1,"Sandals",1,"Shoes",1,"Boots",1,"Plated Boots",1,"Greaves",1],h,d))
A.iC("Unguence the Alchemist",A.B(["Soothing Balm",1,"Mending Salve",1,b2,1,"Antidote",1,"Potion of Quickness",1,"Potion of Alacrity",1,"Bottled Wind",1,"Bottled Ice",1,"Bottled Fire",1,"Bottled Ocean",1,"Bottled Earth",1],h,d))
A.iC("The Droll Magery",A.B(["Scroll of Sidestepping",1,"Scroll of Phasing",1,"Scroll of Item Detection",1],h,d))
A.wZ()
A.x2()
A.xb()
A.iA(new A.hZ(A.a([new A.aI(30,A.a7("Skull",a6,a6)),new A.aI(30,A.a7(d1,a6,a6)),new A.aI(20,A.a7(f2,a6,a6)),new A.aI(20,A.a7(d6,a6,a6)),new A.aI(20,A.a7("food",a6,a6)),new A.aI(15,A.a7(e0,a6,a6))],t.f8)),a6,B.aT,2)
A.iA(A.a7("food",a6,a6),1,a6,10)
A.iA(A.a7("Rock",a6,a6),0.1,B.bv,5)
A.iA(A.a7(d1,a6,a6),a6,a6,20)
A.iA(A.a7("light",a6,a6),0.1,a6,3)
A.iA(A.a7(a7,a6,a6),5,B.jc,2)
A.uC(B.bu,6)
A.uC(B.iL,1)
A.uC(B.iM,3)
A.B1("bat bug humanoid natural",2,1)
A.B2("animal bat bug natural",1,0.2)
A.Bs(g7,100,1)
A.BA(g7,100,1)
A.ee("bug",40,1)
A.ee("jelly",50,5)
A.ee("bat",40,10)
A.ee("rodent",50,1)
A.ee("snake",60,8)
A.ee("plant",40,15)
A.ee("eye",100,20)
A.ee("dragon",100,60)
A.tx(e7,16,2)
A.tx(d4,23,5)
A.tx(f0,30,10)
A.tx("orc",40,28)
d=$.tM()
d.c3(g8)
d.c3(g9)
d.c3("cave/glowing-moss")
d.c3(b4)
d=$.tQ()
i=$.aY()
l=t.oC
d=A.B(["*",A.S(d,i,a6,a6)],h,l)
$.cs.b="glowing-moss"
$.ct=null
$.c9=d
A.v(a6,B.q,"    #\n    *")
A.v(a6,B.q,"    ##\n    #*")
A.v(a6,a6,"    ?.?\n    .*.\n    ?.?")
d=$.mP()
p=A.B(["!",A.S(d,i,a6,a6)],h,l)
$.cs.b=g9
$.ct=null
$.c9=p
A.v(a6,a6,"    ?.?\n    .!.\n    ?.?")
a1=A.B(["\u250c",A.S($.n5(),i,a6,a6),"\u2500",A.S($.n4(),i,a6,a6),"\u2510",A.S($.n6(),i,a6,a6),"-",A.S($.iH(),i,a6,a6),"\u2502",A.S($.n3(),i,a6,a6),"\u2558",A.S($.mZ(),i,a6,a6),"\u2550",A.S($.mY(),i,a6,a6),"\u255b",A.S($.n_(),i,a6,a6),"\u255e",A.S($.n1(),i,a6,a6),"\u2564",A.S($.n0(),i,a6,a6),"\u2561",A.S($.n2(),i,a6,a6),"i",A.S(d,i,a6,a6)],h,l)
$.cs.b=g8
$.ct=null
$.c9=a1
A.v(a6,B.aa,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a6,B.aa,"    ?...\n    #\u2500\u2510.\n    #i\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a6,B.aa,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a6,B.aa,"    ?...\n    #\u2500\u2510.\n    #i\u2502.\n    #i\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a6,B.aa,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #-\u2502.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a6,B.aa,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #i\u2502.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a6,B.aa,"    ?...\n    #\u2500\u2510.\n    #i\u2502.\n    #-\u2502.\n    #i\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a6,a6,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502-\u2502.\n    ?###?")
A.v(a6,a6,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502i\u2502.\n    ?###?")
A.v(a6,a6,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502--\u2502.\n    ?####?")
A.v(a6,a6,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502ii\u2502.\n    ?####?")
A.v(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502---\u2502.\n    ?#####?")
A.v(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    ?#####?")
A.v(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502i-i\u2502.\n    ?#####?")
A.v(a6,a6,"    ?###?\n    .\u2502-\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.v(a6,a6,"    ?###?\n    .\u2502i\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.v(a6,a6,"    ?####?\n    .\u2502--\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.v(a6,a6,"    ?####?\n    .\u2502ii\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.v(a6,a6,"    ?#####?\n    .\u2502---\u2502.\n    .\u255e\u2550\u2550\u2550\u2561.\n    .......")
A.v(a6,a6,"    ?#####?\n    .\u2502-i-\u2502.\n    .\u255e\u2550\u2550\u2550\u2561.\n    .......")
A.v(a6,a6,"    ?#####?\n    .\u2502i-i\u2502.\n    .\u255e\u2550\u2550\u2550\u2561.\n    .......")
$.cs.b=g8
$.ct=null
$.c9=a1
A.v(a6,a6,"    ?.....?\n    #\u2500\u2510.\u250c\u2500#\n    #\u2564\u255b.\u2558\u2564#\n    ?.....?")
A.v(a6,a6,"    ?.......?\n    #\u2500\u2500\u2510.\u250c\u2500\u2500#\n    #\u2550\u2564\u255b.\u2558\u2564\u2550#\n    ?.......?")
A.v(a6,a6,"    ?.........?\n    #\u2500\u2500\u2500\u2510.\u250c\u2500\u2500\u2500#\n    #\u2550\u2550\u2564\u255b.\u2558\u2564\u2550\u2550#\n    ?.........?")
A.v(a6,a6,"    ?##?\n    .\u2502\u2502.\n    .\u255e\u2561.\n    ....\n    .\u250c\u2510.\n    .\u2502\u2502.\n    ?##?")
A.v(a6,a6,"    ?##?\n    .\u2502\u2502.\n    .\u2502\u2502.\n    .\u255e\u2561.\n    ....\n    .\u250c\u2510.\n    .\u2502\u2502.\n    .\u2502\u2502.\n    ?##?")
A.v(a6,a6,"    ?##?\n    .\u2502\u2502.\n    .\u2502\u2502.\n    .\u2502\u2502.\n    .\u255e\u2561.\n    ....\n    .\u250c\u2510.\n    .\u2502\u2502.\n    .\u2502\u2502.\n    .\u2502\u2502.\n    ?##?")
$.cs.b=g8
$.ct=null
$.c9=a1
A.v(a6,a6,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502-\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.v(a6,a6,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502i\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.v(a6,a6,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502--\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.v(a6,a6,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502ii\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.v(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502---\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502i-i\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a6,a6,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502----\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.v(a6,a6,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502i--i\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.v(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-----\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.v(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502--i--\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.v(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-i-i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.v(a6,a6,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502------\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
A.v(a6,a6,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-i--i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
A.v(a6,a6,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502-\u2502.\n    .\u2502-\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.v(a6,a6,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502i\u2502.\n    .\u2502i\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.v(a6,a6,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502--\u2502.\n    .\u2502--\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.v(a6,B.aa,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502i-\u2502.\n    .\u2502-i\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.v(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502---\u2502.\n    .\u2502---\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    .\u2502-i-\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    .\u2502i-i\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502i-i\u2502.\n    .\u2502-i-\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a6,a6,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502----\u2502.\n    .\u2502----\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.v(a6,B.aa,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502i---\u2502.\n    .\u2502---i\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.v(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-----\u2502.\n    .\u2502-----\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.v(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502--i--\u2502.\n    .\u2502-i-i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.v(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502i---i\u2502.\n    .\u2502--i--\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.v(a6,a6,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502------\u2502.\n    .\u2502------\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
A.v(a6,a6,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-i--i-\u2502.\n    .\u2502-i--i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
d=A.B(["\u03c0",A.S($.mQ(),i,a6,a6)],h,l)
$.cs.b=g8
$.ct=2
$.c9=d
A.v(a6,B.au,"    \u03c0.\n    .\u250c")
A.v(a6,B.au,"    \u03c0.\n    \u250c?")
A.v(a6,B.au,"    ..\n    \u03c0\u250c")
A.v(a6,B.aa,"    .\u255e\n    \u03c0.")
A.v(a6,B.q,"    ?\u2550?\n    .\u03c0.")
A.v(a6,a6,"    ?\u2564?\n    .\u03c0.")
A.v(a6,B.q,"    \u03c0\n    #")
A.v(a6,B.q,"    \u03c0\n    .\n    #")
d=A.B(["%",A.S($.mR(),i,a6,a6)],h,l)
$.cs.b=g8
$.ct=0.7
$.c9=d
A.v(a6,B.q,"    ##?\n    #%.\n    ?.?")
A.v(a6,B.q,"    ?.?\n    .%.\n    ?.?")
A.v(a6,B.q,"    ###?\n    #%%.\n    ?..?")
A.v(a6,B.q,"    ###?\n    #%%.\n    #%.?\n    ?.??")
A.v(a6,B.q,"    ?##?\n    .%%.\n    ?..?")
A.v(a6,B.q,"    ?###?\n    .%%%.\n    ?...?")
i=A.B(["&",A.S($.mS(),i,a6,a6)],h,l)
$.cs.b=g8
$.ct=0.5
$.c9=i
A.v(a6,B.q,"    ##?\n    #&.\n    ?.?")
A.v(a6,B.q,"    ?#?\n    .&.\n    ?.?")
$.cs.b=g8
$.ct=1
$.c9=null
A.v(a6,B.q,"    #...#\n    #\u2248\u2261\u2248#\n    #...#")
A.v(a6,B.q,"    #....#\n    #\u2248\u2248\u2261\u2248#\n    #....#")
A.v(a6,B.q,"    #.....#\n    #\u2248\u2248\u2261\u2248\u2248#\n    #.....#")
A.v(a6,B.q,"    #.....#\n    #\u2248\u2261\u2248\u2261\u2248#\n    #.....#")
A.v(a6,B.q,"    #......#\n    #......#\n    #\u2248\u2248\u2261\u2248\u2248\u2248#\n    #......#\n    #......#")
A.v(a6,B.q,"    #......#\n    #......#\n    #\u2248\u2261\u2248\u2248\u2261\u2248#\n    #......#\n    #......#")
A.v(a6,B.q,"    #.......#\n    #\u2248\u2248\u2248\u2261\u2248\u2248\u2248#\n    #.......#\n    #.......#")
A.v(a6,B.q,"    #.......#\n    #.......#\n    #\u2248\u2248\u2261\u2248\u2261\u2248\u2248#\n    #.......#\n    #.......#")
A.v(a6,B.q,"    #.......#\n    #.......#\n    #\u2248\u2261\u2248\u2248\u2248\u2261\u2248#\n    #.......#\n    #.......#")
A.v(a6,B.q,"    #........#\n    #........#\n    #\u2248\u2248\u2248\u2261\u2248\u2248\u2248\u2248#\n    #........#\n    #........#")
A.v(a6,B.q,"    #........#\n    #........#\n    #\u2248\u2248\u2261\u2248\u2248\u2261\u2248\u2248#\n    #........#\n    #........#")
A.v(a6,B.q,"    #.........#\n    #.........#\n    #\u2248\u2248\u2248\u2248\u2261\u2248\u2248\u2248\u2248#\n    #.........#\n    #.........#")
A.v(a6,B.q,"    #.........#\n    #.........#\n    #\u2248\u2248\u2261\u2248\u2248\u2248\u2261\u2248\u2248#\n    #.........#\n    #.........#")
A.v(a6,B.q,"    #.........#\n    #.........#\n    #\u2248\u2248\u2248\u2248\u2261\u2248\u2248\u2248\u2248#\n    #\u2248\u2248\u2248\u2248\u2261\u2248\u2248\u2248\u2248#\n    #.........#\n    #.........#")
A.v(a6,B.q,"    #.........#\n    #.........#\n    #\u2248\u2248\u2261\u2248\u2248\u2248\u2261\u2248\u2248#\n    #\u2248\u2248\u2261\u2248\u2248\u2248\u2261\u2248\u2248#\n    #.........#\n    #.........#")
i=$.va()
l=A.B(["*",A.S(i,a6,$.iJ(),a6),"o",A.S(a6,a6,i,a6)],h,l)
$.cs.b=b4
$.ct=null
$.c9=l
A.v(0.6,B.q,"    .*")
A.v(0.6,B.q,"    ..\n    .*")
A.v(a6,B.q,"    o*")
A.v(a6,B.q,"    \u2248*\n    o\u2248")
a2=new A.jK()
A.cY("6x8",6,8)
A.cY("6x9",6,9)
A.cY("8x8",8,a6)
A.cY("8x10",8,10)
A.cY("9x12",9,12)
A.cY("10x12",10,12)
A.cY("12x16",12,16)
A.cY("12x18",12,18)
A.cY("16x16",16,a6)
A.cY("16x20",16,20)
l=v.G
a3=A.tc(A.P(A.P(l.window).localStorage).getItem("font"))
h=$.fq.length
if(1>=h)return A.c($.fq,1)
$.bY.b=$.fq[1]
for(a4=0;a4<h;++a4){a5=$.fq[a4]
if(a5.a===a3){$.bY.b=a5
break}}s=A.bZ(A.P(l.document).querySelector("#game"))
s.toString
s.append($.bY.u().b)
A.P(l.window).addEventListener("resize",A.wD(A.Bv()))
s=$.bY.u().c
r=A.a([],t.jp)
if($.x.b!==$.x)A.a0(A.vT(""))
$.x.b=new A.fe(new A.k8(A.C(t.fC,t.fb),t.hl),r,s,t.iR)
s=$.x.u().a
s.a.i(0,new A.y(13,!1,!1),s.$ti.c.a(B.a1))
s=$.x.u().a
s.a.i(0,new A.y(27,!1,!1),s.$ti.c.a(B.G))
s=$.x.u().a
s.a.i(0,new A.y(66,!1,!1),s.$ti.c.a(B.be))
A.P(l.document).addEventListener("keydown",A.uu(new A.tA()),!0)
s=$.x.u().a
s.a.i(0,new A.y(192,!1,!1),s.$ti.c.a(B.G))
s=$.x.u().a
s.a.i(0,new A.y(70,!0,!1),s.$ti.c.a(B.bc))
s=$.x.u().a
s.a.i(0,new A.y(81,!1,!1),s.$ti.c.a(B.bh))
s=$.x.u().a
s.a.i(0,new A.y(67,!1,!1),s.$ti.c.a(B.bf))
s=$.x.u().a
s.a.i(0,new A.y(68,!1,!1),s.$ti.c.a(B.b4))
s=$.x.u().a
s.a.i(0,new A.y(85,!1,!1),s.$ti.c.a(B.bp))
s=$.x.u().a
s.a.i(0,new A.y(71,!1,!1),s.$ti.c.a(B.bg))
s=$.x.u().a
s.a.i(0,new A.y(88,!1,!1),s.$ti.c.a(B.bn))
s=$.x.u().a
s.a.i(0,new A.y(69,!1,!1),s.$ti.c.a(B.b6))
s=$.x.u().a
s.a.i(0,new A.y(84,!1,!1),s.$ti.c.a(B.bo))
s=$.x.u().a
s.a.i(0,new A.y(65,!1,!1),s.$ti.c.a(B.bq))
s=$.x.u().a
s.a.i(0,new A.y(83,!1,!1),s.$ti.c.a(B.hu))
s=$.x.u().a
s.a.i(0,new A.y(65,!0,!1),s.$ti.c.a(B.bd))
s=$.x.u().a
s.a.i(0,new A.y(83,!0,!1),s.$ti.c.a(B.b5))
s=$.x.u().a
s.a.i(0,new A.y(69,!0,!1),s.$ti.c.a(B.bm))
s=$.x.u().a
s.a.i(0,new A.y(72,!1,!1),s.$ti.c.a(B.aK))
s=$.x.u().a
s.a.i(0,new A.y(72,!0,!1),s.$ti.c.a(B.b7))
s=$.x.u().a
s.a.i(0,new A.y(73,!1,!1),s.$ti.c.a(B.aA))
s=$.x.u().a
s.a.i(0,new A.y(79,!1,!1),s.$ti.c.a(B.X))
s=$.x.u().a
s.a.i(0,new A.y(80,!1,!1),s.$ti.c.a(B.az))
s=$.x.u().a
s.a.i(0,new A.y(75,!1,!1),s.$ti.c.a(B.a8))
s=$.x.u().a
s.a.i(0,new A.y(186,!1,!1),s.$ti.c.a(B.ab))
s=$.x.u().a
s.a.i(0,new A.y(188,!1,!1),s.$ti.c.a(B.aD))
s=$.x.u().a
s.a.i(0,new A.y(190,!1,!1),s.$ti.c.a(B.Y))
s=$.x.u().a
s.a.i(0,new A.y(191,!1,!1),s.$ti.c.a(B.aC))
s=$.x.u().a
s.a.i(0,new A.y(73,!0,!1),s.$ti.c.a(B.bj))
s=$.x.u().a
s.a.i(0,new A.y(79,!0,!1),s.$ti.c.a(B.ao))
s=$.x.u().a
s.a.i(0,new A.y(80,!0,!1),s.$ti.c.a(B.bi))
s=$.x.u().a
s.a.i(0,new A.y(75,!0,!1),s.$ti.c.a(B.aM))
s=$.x.u().a
s.a.i(0,new A.y(186,!0,!1),s.$ti.c.a(B.aL))
s=$.x.u().a
s.a.i(0,new A.y(188,!0,!1),s.$ti.c.a(B.bl))
s=$.x.u().a
s.a.i(0,new A.y(190,!0,!1),s.$ti.c.a(B.ap))
s=$.x.u().a
s.a.i(0,new A.y(191,!0,!1),s.$ti.c.a(B.bk))
s=$.x.u().a
s.a.i(0,new A.y(73,!1,!0),s.$ti.c.a(B.c1))
s=$.x.u().a
s.a.i(0,new A.y(79,!1,!0),s.$ti.c.a(B.b9))
s=$.x.u().a
s.a.i(0,new A.y(80,!1,!0),s.$ti.c.a(B.c0))
s=$.x.u().a
s.a.i(0,new A.y(75,!1,!0),s.$ti.c.a(B.bb))
s=$.x.u().a
s.a.i(0,new A.y(186,!1,!0),s.$ti.c.a(B.b8))
s=$.x.u().a
s.a.i(0,new A.y(188,!1,!0),s.$ti.c.a(B.c3))
s=$.x.u().a
s.a.i(0,new A.y(190,!1,!0),s.$ti.c.a(B.ba))
s=$.x.u().a
s.a.i(0,new A.y(191,!1,!0),s.$ti.c.a(B.c2))
s=$.x.u().a
s.a.i(0,new A.y(76,!1,!1),s.$ti.c.a(B.a1))
s=$.x.u().a
s.a.i(0,new A.y(76,!0,!1),s.$ti.c.a(B.aB))
s=$.x.u().a
s.a.i(0,new A.y(76,!1,!0),s.$ti.c.a(B.aJ))
s=$.x.u().a
s.a.i(0,new A.y(38,!1,!1),s.$ti.c.a(B.X))
s=$.x.u().a
s.a.i(0,new A.y(37,!1,!1),s.$ti.c.a(B.a8))
s=$.x.u().a
s.a.i(0,new A.y(39,!1,!1),s.$ti.c.a(B.ab))
s=$.x.u().a
s.a.i(0,new A.y(40,!1,!1),s.$ti.c.a(B.Y))
s=$.x.u().a
s.a.i(0,new A.y(38,!0,!1),s.$ti.c.a(B.ao))
s=$.x.u().a
s.a.i(0,new A.y(37,!0,!1),s.$ti.c.a(B.aM))
s=$.x.u().a
s.a.i(0,new A.y(39,!0,!1),s.$ti.c.a(B.aL))
s=$.x.u().a
s.a.i(0,new A.y(40,!0,!1),s.$ti.c.a(B.ap))
s=$.x.u().a
s.a.i(0,new A.y(38,!1,!0),s.$ti.c.a(B.b9))
s=$.x.u().a
s.a.i(0,new A.y(37,!1,!0),s.$ti.c.a(B.bb))
s=$.x.u().a
s.a.i(0,new A.y(39,!1,!0),s.$ti.c.a(B.b8))
s=$.x.u().a
s.a.i(0,new A.y(40,!1,!0),s.$ti.c.a(B.ba))
s=$.x.u().a
s.a.i(0,new A.y(103,!1,!1),s.$ti.c.a(B.aA))
s=$.x.u().a
s.a.i(0,new A.y(104,!1,!1),s.$ti.c.a(B.X))
s=$.x.u().a
s.a.i(0,new A.y(105,!1,!1),s.$ti.c.a(B.az))
s=$.x.u().a
s.a.i(0,new A.y(100,!1,!1),s.$ti.c.a(B.a8))
s=$.x.u().a
s.a.i(0,new A.y(102,!1,!1),s.$ti.c.a(B.ab))
s=$.x.u().a
s.a.i(0,new A.y(97,!1,!1),s.$ti.c.a(B.aD))
s=$.x.u().a
s.a.i(0,new A.y(98,!1,!1),s.$ti.c.a(B.Y))
s=$.x.u().a
s.a.i(0,new A.y(99,!1,!1),s.$ti.c.a(B.aC))
s=$.x.u().a
s.a.i(0,new A.y(103,!0,!1),s.$ti.c.a(B.bj))
s=$.x.u().a
s.a.i(0,new A.y(104,!0,!1),s.$ti.c.a(B.ao))
s=$.x.u().a
s.a.i(0,new A.y(105,!0,!1),s.$ti.c.a(B.bi))
s=$.x.u().a
s.a.i(0,new A.y(100,!0,!1),s.$ti.c.a(B.aM))
s=$.x.u().a
s.a.i(0,new A.y(102,!0,!1),s.$ti.c.a(B.aL))
s=$.x.u().a
s.a.i(0,new A.y(97,!0,!1),s.$ti.c.a(B.bl))
s=$.x.u().a
s.a.i(0,new A.y(98,!0,!1),s.$ti.c.a(B.ap))
s=$.x.u().a
s.a.i(0,new A.y(99,!0,!1),s.$ti.c.a(B.bk))
s=$.x.u().a
s.a.i(0,new A.y(101,!1,!1),s.$ti.c.a(B.a1))
s=$.x.u().a
s.a.i(0,new A.y(1001,!1,!1),s.$ti.c.a(B.a1))
s=$.x.u().a
s.a.i(0,new A.y(101,!0,!1),s.$ti.c.a(B.aB))
s=$.x.u().a
s.a.i(0,new A.y(1001,!0,!1),s.$ti.c.a(B.aB))
s=$.x.u().a
s.a.i(0,new A.y(101,!1,!0),s.$ti.c.a(B.aJ))
s=$.x.u().a
s.a.i(0,new A.y(87,!0,!0),s.$ti.c.a(B.c4))
s=$.x.u()
r=new A.qX(a2,A.a([],t.di))
r.n_()
s.a2(new A.kf(a2,r))
$.x.u().sp_(!0)
$.x.u().spw(!0)
l=A.bZ(A.P(l.document).body)
l.toString
r=t.gX
A.e3(l,"keydown",r.h("~(1)?").a(new A.tB()),!1,r.c)},
cY(a,b,c){var s,r,q,p,o,n
if(c==null)c=b
s=A.vF()
r=t.gX
q=r.h("~(1)?")
r=r.c
A.e3(s,"dblclick",q.a(new A.t9()),!1,r)
p=A.wI(s,b,c)
B.a.j($.fq,new A.le(a,s,p,b,c))
A.e3(s,"click",q.a(new A.ta(p)),!1,r)
o=v.G
n=A.P(A.P(o.document).createElement("button"))
n.innerHTML=a
A.e3(n,"click",q.a(new A.tb(a)),!1,r)
A.P(A.bZ(A.P(o.document).querySelector(".button-bar")).appendChild(n))},
wI(a,b,c){var s,r,q,p,o,n,m,l=v.G,k=B.c.cc(A.u(A.P(l.window).innerWidth)-20,b),j=B.c.cc(A.u(A.P(l.window).innerHeight)-30,c)
k=Math.max(k,80)
j=Math.max(j,40)
s=B.e.L(A.bA(A.P(l.window).devicePixelRatio))
r=b*k
q=c*j
a.width=r*s
a.height=q*s
A.P(a.style).width=""+r+"px"
A.P(a.style).height=""+q+"px"
p="font_"+b
if(b!==c)p+="_"+c
s=B.e.L(A.bA(A.P(l.window).devicePixelRatio))
o=k*j
n=A.ao(o,B.b3,!1,t.v)
o=A.ao(o,B.b3,!1,t.n3)
m=A.P(A.P(l.document).createElement("img"))
m.src=p+".png"
return A.zl(new A.nM(new A.a8(n,new A.Z(new A.d(0,0),new A.d(k,j)),t.bG),new A.a8(o,new A.Z(new A.d(0,0),new A.d(k,j)),t.cY)),b,c,a,m,s)},
wL(){var s=A.wI($.bY.u().b,$.bY.u().d,$.bY.u().e)
$.bY.u().c=s
$.x.u().lk(s)},
Ad(){var s,r,q,p=null,o=A.bZ(A.P(v.G.document).querySelector("#game"))
o.toString
s=["requestFullscreen","mozRequestFullScreen","webkitRequestFullscreen","msRequestFullscreen"]
for(r=0;r<4;++r){q=s[r]
if(q in o){A.yR(o,q,p,p,p,p)
return}}},
uy(){A.u(A.P(v.G.window).requestAnimationFrame(A.wD(new A.tf())))},
le:function le(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tA:function tA(){},
tB:function tB(){},
t9:function t9(){},
ta:function ta(a){this.a=a},
tb:function tb(a){this.a=a},
tf:function tf(){},
tg:function tg(){},
AY(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
switch(b.a){case B.bG:s=b.d
r=b.b
if(s===$.az()){s=$.ve().p(0,b.c)
s.toString
B.a.j(a,new A.cC(r,A.an(s,B.H,f),2))}else{s=$.vf().p(0,s)
s.toString
B.a.j(a,new A.fS(r,s))}break
case B.bH:s=$.vf().p(0,b.d)
s.toString
B.a.j(a,new A.fS(b.b,s))
break
case B.bW:B.a.j(a,new A.k0(b.b,b.f.a.b))
break
case B.bM:B.a.j(a,new A.jg(b.e.y,A.an("*",A.ea(b.d),f),B.e.aT(Math.sqrt(b.r/5))))
break
case B.bJ:for(s=b.e,q=0;q<10;++q){r=s.y.gm()
p=s.y.gn()
o=$.m()
o=o.a
n=o.a1(628)/100
m=(o.a1(10)+30)/100
l=Math.cos(n)
k=Math.sin(n)
B.a.j(a,new A.kC(r,p,l*m,k*m,o.a1(8)+7,B.m))}break
case B.bL:s=b.e
B.a.j(a,new A.jQ(s.y.gm(),s.y.gn()))
break
case B.bI:B.a.j(a,new A.fO(b.b))
break
case B.bR:B.a.j(a,new A.fO(b.e.y))
break
case B.bP:s=$.m().br(10,20)
r=new A.kg(s,b.b)
r.c=s
B.a.j(a,r)
break
case B.bV:s=b.e
r=b.b
j=B.c.P(s.y.S(0,r).gb4(),4,12)
for(q=0;q<j;++q){p=s.y
i=r.gm()
h=r.gn()
o=$.m()
o=o.a
n=o.a1(628)/100
m=(o.a1(70)+10)/100
B.a.j(a,new A.ld(i,h,Math.cos(n)*m,Math.sin(n)*m,p))}break
case B.b2:B.a.j(a,new A.cC(b.e.y,A.an("*",B.u,f),4))
break
case B.bS:B.a.j(a,new A.cC(b.e.y,A.an("*",B.u,f),4))
break
case B.bN:B.a.j(a,new A.jT(b.b))
break
case B.bF:s=b.e
s.toString
B.a.j(a,new A.fH(s,A.an("!",B.u,f),1))
break
case B.b1:s=b.e
s.toString
B.a.j(a,new A.fH(s,A.an("!",B.h,f),3))
break
case B.bX:break
case B.bO:B.a.j(a,new A.cC(b.b,A.an("*",B.D,f),4))
break
case B.bT:case B.bU:s=$.ve().p(0,b.c)
s.toString
g=b.f
B.a.j(a,new A.cC(b.b,A.an(s,g!=null?g.a.b.b:B.u,f),4))
break
case B.bK:s=b.b
r=b.f
r.toString
B.a.j(a,new A.li(s.gm(),s.gn(),r.a.b))
break
case B.bQ:B.a.j(a,new A.cC(b.b,A.an("*",B.H,f),4))
break}},
xc(a){return v.mangledGlobalNames[a]},
tE(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
yR(a,b,c,d,e,f){var s=a[b]()
return s},
wD(a){var s
if(typeof a=="function")throw A.n(A.aE("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.A2,a)
s[$.tL()]=a
return s},
uu(a){var s
if(typeof a=="function")throw A.n(A.aE("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.A3,a)
s[$.tL()]=a
return s},
A2(a){return t.gY.a(a).$0()},
A3(a,b,c){t.gY.a(a)
if(A.u(c)>=1)return a.$1(b)
return a.$0()},
vl(a){var s,r,q
for(s=[$.dt(),$.du()],r=0;r<2;++r){q=s[r].c9(a)
if(q!=null)return q}throw A.n(A.aE("Unknown affix '"+a+"'.",null))},
yh(){var s,r,q,p,o,n,m,l,k,j,i,h="Master's _",g=[B.iw,B.iu,B.it,B.ie,B.iz,B.ip]
for(s=t.Q,r=t.h,q=t.X,p=t.M,o=0;o<6;++o){n=g[o]
m=n.b
A.aW()
$.be=n.a
A.aW()
l=B.i.dQ("Fine _"," _")?$.dt():$.du()
n=A.C(p,s)
k=$.iv=new A.cf("Fine _",l,1,A.C(r,s),A.C(q,s),n)
k.c=1
k.d=40
k.pj(1)
k.J(1000,1.8)
s.a(A.a_())
k=$.uZ()
j=k.p(0,m)
if(j==null)A.a0(A.aE("Unknown skill '"+m+"'.",null))
n.i(0,j,A.a_())
A.aW()
l=B.i.dQ("Deft _"," _")?$.dt():$.du()
n=A.C(p,s)
i=$.iv=new A.cf("Deft _",l,1,A.C(r,s),A.C(q,s),n)
i.c=20
i.d=60
i.pk(2,3)
i.J(2000,2.4)
j=k.p(0,m)
if(j==null)A.a0(A.aE("Unknown skill '"+m+"'.",null))
n.i(0,j,A.a_())
A.aW()
l=B.i.dQ(h," _")?$.dt():$.du()
n=A.C(p,s)
i=$.iv=new A.cf(h,l,1,A.C(r,s),A.C(q,s),n)
i.c=40
i.d=100
i.Y(3,6,4)
i.J(4000,3.4)
j=k.p(0,m)
if(j==null)A.a0(A.aE("Unknown skill '"+m+"'.",null))
n.i(0,j,A.a_())}},
wZ(){var s=t.N,r=t.S
A.bf("Uncut Amethyst",A.B(["Amethyst Shard",4],s,r))
A.bf("Faceted Amethyst",A.B(["Uncut Amethyst",4],s,r))
A.bf("Uncut Sapphire",A.B(["Sapphire Shard",4],s,r))
A.bf("Faceted Sapphire",A.B(["Uncut Sapphire",4],s,r))
A.bf("Uncut Emerald",A.B(["Emerald Shard",4],s,r))
A.bf("Faceted Emerald",A.B(["Uncut Emerald",4],s,r))
A.bf("Uncut Ruby",A.B(["Ruby Shard",4],s,r))
A.bf("Faceted Ruby",A.B(["Uncut Ruby",4],s,r))
A.bf("Uncut Diamond",A.B(["Diamond Shard",4],s,r))
A.bf("Faceted Diamond",A.B(["Uncut Diamond",4],s,r))},
x2(){var s="Healing Poultice",r="Potion of Amelioration",q=t.N,p=t.S
A.bf("Mending Salve",A.B(["Soothing Balm",3],q,p))
A.bf(s,A.B(["Mending Salve",3],q,p))
A.bf(r,A.B([s,3],q,p))
A.bf("Potion of Rejuvenation",A.B([r,4],q,p))},
xb(){var s="Scroll of Sidestepping",r="Scroll of Phasing",q="Scroll of Teleportation",p=t.N,o=t.S
A.bf(s,A.B(["Insect Wing",1,"Feather",1],p,o))
A.bf(r,A.B([s,2],p,o))
A.bf(q,A.B([r,2],p,o))
A.bf("Scroll of Disappearing",A.B([q,2],p,o))},
bf(a,b){var s,r,q,p,o,n=A.C(t.q,t.S)
for(s=new A.bl(b,A.z(b).h("bl<1,2>")).gN(0);s.q();){r=s.d
q=r.a
p=r.b
o=$.bk().b.p(0,q)
if(o==null)A.a0(A.aE('Unknown resource "'+q+'".',null))
n.i(0,o.a,p)}B.a.j($.hx,new A.kS(n,A.a7(a,1,null),a))},
B7(){var s,r,q,p,o,n,m,l,k,j,i,h="mythical/beast/dragon",g=null,f="{2} [are|is] deflected by its scales.",e="treasure",d="equipment",c=A.aj("d",h,g,g,g,g,g)
c.at=12
c.ax=8
B.a.j(c.w,new A.aB(10,f))
c.d=B.ai
c=$.az()
s=[new A.W(["forest",c,B.p,B.B]),new A.W(["brown",$.dw(),B.H,B.k]),new A.W(["blue",$.d1(),B.I,B.F]),new A.W(["white",$.cb(),B.o,B.u]),new A.W(["purple",$.bB(),B.O,B.W]),new A.W(["green",$.dv(),B.A,B.ae]),new A.W(["silver",$.dx(),B.K,B.I]),new A.W(["red",$.b6(),B.a5,B.m]),new A.W(["gold",$.d0(),B.D,B.h]),new A.W(["black",$.d_(),B.f,B.l]),new A.W(["ethereal",$.dy(),B.a3,B.E])]
for(r=0,q=0;q<11;++q){p=s[q].a
o=p[0]
n=p[1]
m=p[2]
p=B.e.O(A.w(r,0,10,38,53))
l=B.e.O(A.w(r,0,10,150,350))
A.fv()
k=$.ai.b
if(k===$.ai)A.a0(A.dM(""))
k=k.ay
if(0>=k.length)return A.c(k,0)
j=A.np("juvenile "+o+" dragon",p,g,new A.X(k.charCodeAt(0),m,B.z),l)
j.e=0
j.r=null
$.c8=j
p=B.e.O(A.w(r,0,10,20,40))
l=j.db
B.a.j(l,new A.b7(g,"bite[s]",p,0,c))
p=B.e.O(A.w(r,0,10,15,25))
B.a.j(l,new A.b7(g,"claw[s]",p,0,c))
p=B.e.O(A.w(r,0,10,2,10))
l=j.CW
i=new A.aI(100,A.a7(e,l,g))
if(p>1)i=new A.bz(p,i)
p=j.dy
B.a.j(p,i)
k=A.a7("magic",l,g)
B.a.j(p,new A.aI(100,k))
l=A.a7(d,l,g)
B.a.j(p,new A.aI(100,l))
if(n!==c){p=B.e.O(A.w(r,0,10,40,100))
l=$.fC()
k=l.p(0,n)[0]
l=l.p(0,n)[1]
k=A.aQ(k,B.y,B.V).a7(1)
B.a.j(j.dx,new A.d9(new A.b7(new A.aH(k),l,p,5,n),11))}++r}p=A.aj("d",h,g,g,g,g,g)
p.at=16
p.ax=10
B.a.j(p.w,new A.aB(20,f))
p.d=B.ai
for(r=0,q=0;q<11;++q){p=s[q].a
o=p[0]
n=p[1]
m=p[3]
p=B.e.O(A.w(r,0,10,48,62))
l=B.e.O(A.w(r,0,10,350,850))
A.fv()
k=$.ai.b
if(k===$.ai)A.a0(A.dM(""))
k=k.ay
if(0>=k.length)return A.c(k,0)
j=A.np(o+" dragon",p,g,new A.X(k.charCodeAt(0),m,B.z),l)
j.e=0
j.r=null
$.c8=j
p=B.e.O(A.w(r,0,10,30,50))
l=j.db
B.a.j(l,new A.b7(g,"bite[s]",p,0,c))
p=B.e.O(A.w(r,0,10,25,35))
B.a.j(l,new A.b7(g,"claw[s]",p,0,c))
p=B.e.O(A.w(r,0,10,5,15))
l=j.CW
i=new A.aI(100,A.a7(e,l,g))
if(p>1)i=new A.bz(p,i)
p=j.dy
B.a.j(p,i)
k=B.e.O(A.w(r,0,10,2,5))
i=new A.aI(100,A.a7("magic",l,g))
if(k>1)i=new A.bz(k,i)
B.a.j(p,i)
k=B.e.O(A.w(r,0,10,2,5))
i=new A.aI(100,A.a7(d,l,g))
if(k>1)i=new A.bz(k,i)
B.a.j(p,i)
if(n!==c){p=B.e.O(A.w(r,0,10,70,150))
l=$.fC()
k=l.p(0,n)[0]
l=l.p(0,n)[1]
k=A.aQ(k,B.y,B.V).a7(1)
B.a.j(j.dx,new A.d9(new A.b7(new A.aH(k),l,p,10,n),8))}++r}},
Bg(){var s,r,q,p,o,n,m,l,k,j="mythical/beast/dragon",i=null,h="{2} [are|is] deflected by its scales.",g="treasure",f="equipment",e=$.az(),d=[new A.W(["forest",e,B.p,B.B]),new A.W(["brown",$.dw(),B.H,B.k]),new A.W(["blue",$.d1(),B.I,B.F]),new A.W(["white",$.cb(),B.o,B.u]),new A.W(["purple",$.bB(),B.O,B.W]),new A.W(["green",$.dv(),B.A,B.ae]),new A.W(["silver",$.dx(),B.K,B.I]),new A.W(["red",$.b6(),B.a5,B.m]),new A.W(["gold",$.d0(),B.D,B.h]),new A.W(["black",$.d_(),B.f,B.l]),new A.W(["ethereal",$.dy(),B.a3,B.E])],c=A.aj("D",j,i,i,i,i,i)
c.at=12
c.ax=8
B.a.j(c.w,new A.aB(10,h))
c.d=B.ai
for(s=0,r=0;r<11;++r){c=d[r].a
q=c[0]
p=c[1]
o=c[2]
c=B.e.O(A.w(s,0,10,65,85))
n=B.e.O(A.w(s,0,10,800,1500))
A.fv()
m=$.ai.b
if(m===$.ai)A.a0(A.dM(""))
m=m.ay
if(0>=m.length)return A.c(m,0)
l=A.np("elder "+q+" dragon",c,i,new A.X(m.charCodeAt(0),o,B.z),n)
l.e=0
l.r=null
$.c8=l
c=B.e.O(A.w(s,0,10,40,80))
n=l.db
B.a.j(n,new A.b7(i,"bite[s]",c,0,e))
c=B.e.O(A.w(s,0,10,35,75))
B.a.j(n,new A.b7(i,"claw[s]",c,0,e))
c=B.e.O(A.w(s,0,10,6,16))
n=l.CW
k=new A.aI(100,A.a7(g,n,i))
if(c>1)k=new A.bz(c,k)
c=l.dy
B.a.j(c,k)
m=B.e.O(A.w(s,0,10,3,6))
k=new A.aI(100,A.a7("magic",n,i))
if(m>1)k=new A.bz(m,k)
B.a.j(c,k)
m=B.e.O(A.w(s,0,10,3,6))
k=new A.aI(100,A.a7(f,n,i))
if(m>1)k=new A.bz(m,k)
B.a.j(c,k)
if(p!==e){c=B.e.O(A.w(s,0,10,40,100))
n=$.fC()
m=n.p(0,p)[0]
n=n.p(0,p)[1]
m=A.aQ(m,B.y,B.V).a7(1)
B.a.j(l.dx,new A.d9(new A.b7(new A.aH(m),n,c,5,p),11))}++s}c=A.aj("D",j,i,i,i,i,i)
c.at=16
c.ax=10
B.a.j(c.w,new A.aB(20,h))
c.d=B.ai
for(s=0,r=0;r<11;++r){c=d[r].a
q=c[0]
p=c[1]
o=c[3]
c=B.e.O(A.w(s,0,10,80,99))
n=B.e.O(A.w(s,0,10,1400,2000))
A.fv()
m=$.ai.b
if(m===$.ai)A.a0(A.dM(""))
m=m.ay
if(0>=m.length)return A.c(m,0)
l=A.np("ancient "+q+" dragon",c,i,new A.X(m.charCodeAt(0),o,B.z),n)
l.e=0
l.r=null
$.c8=l
c=B.e.O(A.w(s,0,10,60,100))
n=l.db
B.a.j(n,new A.b7(i,"bite[s]",c,0,e))
c=B.e.O(A.w(s,0,10,50,80))
B.a.j(n,new A.b7(i,"claw[s]",c,0,e))
c=B.e.O(A.w(s,0,10,7,20))
n=l.CW
k=new A.aI(100,A.a7(g,n,i))
if(c>1)k=new A.bz(c,k)
c=l.dy
B.a.j(c,k)
m=B.e.O(A.w(s,0,10,4,7))
k=new A.aI(100,A.a7("magic",n,i))
if(m>1)k=new A.bz(m,k)
B.a.j(c,k)
m=B.e.O(A.w(s,0,10,4,7))
k=new A.aI(100,A.a7(f,n,i))
if(m>1)k=new A.bz(m,k)
B.a.j(c,k)
if(p!==e){c=B.e.O(A.w(s,0,10,200,400))
n=$.fC()
m=n.p(0,p)[0]
n=n.p(0,p)[1]
m=A.aQ(m,B.y,B.V).a7(1)
B.a.j(l.dx,new A.d9(new A.b7(new A.aH(m),n,c,10,p),8))}++s}},
no(a){var s,r=null
if(a>=64){a=B.c.A(a,8)*8
s=A.cy(B.c.A(a,8),2,r)
s=A.cy(B.c.A(a,4),3,s)
s=A.cy(a,6,A.cy(B.c.A(a,2),5,s))}else if(a>=32){a=B.c.A(a,4)*4
s=A.cy(B.c.A(a,4),2,r)
s=A.cy(a,5,A.cy(B.c.A(a,2),3,s))}else if(a>=16){a=B.c.A(a,2)*2
s=A.cy(a,3,A.cy(B.c.A(a,2),2,r))}else s=A.cy(a,3,r)
return A.yk(s)},
cy(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=t.y,b=new A.Z(new A.d(0,0),new A.d(a4,a4)),a=a4*a4,a0=A.ao(a,!1,!1,c),a1=t.b,a2=new A.a8(a0,b,a1),a3=new A.a8(A.ao(a,!1,!1,c),new A.Z(new A.d(0,0),new A.d(a4,a4)),a1)
if(a6!=null)for(c=A.ab(b.bQ(-1)),b=a6.a,a=a6.b.b.a,a1=b.length;c.q();){s=c.b
r=c.c
q=B.c.A(s,2)
p=B.c.A(r,2)
a6.l(q,p)
q=p*a+q
if(!(q>=0&&q<a1))return A.c(b,q)
o=b[q]?0.3:0.7
q=$.m().aP(1)
a2.l(s,r)
B.a.i(a0,r*a4+s,q>o)}else{n=b.ghk()
m=Math.sqrt(new A.d(b.gbR(),b.gbW()).S(0,b.ghk()).gaF())
for(c=A.ab(b.bQ(-1));c.q();){b=c.b
a=c.c
a1=new A.d(b,a).S(0,n)
s=a1.a
a1=a1.b
a1=Math.sqrt(s*s+a1*a1)
s=$.m().aP(1)
a2.l(b,a)
B.a.i(a0,a*a4+b,s>a1/m)}}for(l=0;l<a5;++l,k=a3,a3=a2,a2=k)for(c=a2.b,b=c.bQ(-1),a=b.a,a=new A.cM(b,a.a-1,a.b),b=a3.$ti.c,a0=a3.a,a1=a3.b.b.a,s=a2.a,c=c.b.a,r=s.length;a.q();){q=a.b
p=a.c
a2.l(q,p)
j=p*c+q
if(!(j>=0&&j<r))return A.c(s,j)
i=s[j]?1:0
for(j=new A.d(q,p).gbB(),h=j.length,g=0;g<h;++g){f=j[g]
e=f.a
d=f.b
a2.l(e,d)
e=d*c+e
if(!(e>=0&&e<r))return A.c(s,e)
if(s[e])++i}j=b.a(i>=5)
a3.l(q,p)
B.a.i(a0,p*a1+q,j)}return a3},
yk(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.b,g=h.b,f=g.a,e=g.b
for(h=A.ab(h),g=a.a,s=g.length,r=f,q=-1,p=-1;h.q();){o=h.b
n=h.c
a.l(o,n)
m=n*f+o
if(!(m>=0&&m<s))return A.c(g,m)
if(g[m]){r=Math.min(r,o)
q=Math.max(q,o)
e=Math.min(e,n)
p=Math.max(p,n)}}h=q-r+1
o=p-e+1
n=new A.Z(new A.d(0,0),new A.d(h,o))
o=A.ao(h*o,!1,!1,t.y)
l=new A.a8(o,n,t.b)
for(n=A.ab(n);n.q();){m=n.b
k=n.c
j=m+r
i=k+e
a.l(j,i)
j=i*f+j
if(!(j>=0&&j<s))return A.c(g,j)
j=A.dr(g[j])
l.l(m,k)
B.a.i(o,k*h+m,j)}return l},
ea(a){var s=A.B([$.az(),B.o,$.ei(),B.K,$.dw(),B.k,$.b6(),B.m,$.d1(),B.E,$.dv(),B.A,$.cb(),B.I,$.dx(),B.O,$.bB(),B.p,$.d_(),B.l,$.d0(),B.D,$.dy(),B.W],t.h,t.aZ).p(0,a)
s.toString
return s},
uJ(b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=null
A.bh(b1,b0,c0+2,b2.gkk().a,b4,c6,c1,c5)
s=b5?"ABCDEFGHIJKLMNOPQRSTUVWXYZ":"abcdefghijklmnopqrstuvwxyz"
r=c1+c6
q=r-1
if(c4)for(p=b2.gN(b2),o=q;p.q();){n=b7.$1(p.gH())
if(n!=null)o=Math.min(o,r-A.Q(n,!1,b0).length-3)}for(p=J.aq(b2.gcv()),m=c1+1,l=s.length,k=c1-34,j=r+34,i=c6-34,h=c5+c0,g=h+3,f=0,e=0;p.q();){d=p.gH()
c=c1+(c3?3:1)
b=c5+f+1
if(f>=c0){r=b2.gI(b2)
p=b4?B.h:B.j
b1.k(c+1,h+1," "+(r-c0)+" more... ",p)
break}if(d==null){d=!1
if(f>0){a=b2.geg()
if(!(f<a.length))return A.c(a,f)
if(a[f]==="hand"){a=b2.geg()
a0=f-1
if(!(a0<a.length))return A.c(a,a0)
if(a[a0]==="hand"){d=J.tX(b2.gcv(),a0)
d=d==null?b0:d.a.f
d=d===!0}}}if(d)b1.k(c,b,"\u2191 (two-handed)",B.j)
else{d=b2.geg()
if(!(f<d.length))return A.c(d,f)
b1.k(c+2,b,"("+d[f]+")",B.t)}++e;++f
continue}a1=!b4||b3.$1(d)
if(c3&&b4&&b3.$1(d)){b1.k(m,b," )",B.l)
if(!(e<l))return A.c(s,e)
b1.k(m,b,s[e],B.h)}++e
if(a1)b1.an(c,b,d.a.b)
if(c4&&b7.$1(d)!=null){a=b7.$1(d)
a.toString
n=A.Q(a,!1,b0)
a2=q-n.length-1
b1.k(a2,b,"$",a1?B.k:B.j)
a=a1?B.h:B.j
b1.k(a2+1,b,n,a)
a3=a2}else a3=q
a4=d.gam().a
a=c+2
a5=a3-a
if(a4.length>a5)a4=B.i.aJ(a4,0,a5)
A:{a0=d===b8
if(a0){a6=B.h
break A}if(b4&&b3.$1(d)){a6=B.C
break A}if(b4){a6=B.j
break A}a6=B.d
break A}a7=d===b6
a8=a7?B.i.f9(a4,a5):a4
b1.cu(a,b,a8,a6,a7?B.t:b0)
if(a0){a9=new A.k1(d,A.vL(d,34))
a9.lz(c2,d,!1)
if(b9)if(j>b1.gaR()){b1.k(q,b,"\u25bc",B.h)
a9.hq(c1+B.c.A(i,2),g,b1)}else{b1.k(q,b,"\u25ba",B.h)
a9.hq(r,b,b1)}else{b1.k(c1,b,"\u25c4",B.h)
a9.hq(k,b,b1)}}++f}},
A7(a){return!1},
A8(a){return a.gbg()},
vF(){return A.P(A.P(v.G.document).createElement("canvas"))}},B={}
var w=[A,J,B]
var $={}
A.u6.prototype={}
J.jZ.prototype={
Z(a,b){return a===b},
ga0(a){return A.ht(a)},
t(a){return"Instance of '"+A.kJ(a)+"'"},
gaG(a){return A.e9(A.uv(this))}}
J.h4.prototype={
t(a){return String(a)},
ga0(a){return a?519018:218159},
gaG(a){return A.e9(t.y)},
$iag:1,
$iA:1}
J.h6.prototype={
Z(a,b){return null==b},
t(a){return"null"},
ga0(a){return 0},
$iag:1}
J.h9.prototype={$iay:1}
J.dg.prototype={
ga0(a){return 0},
t(a){return String(a)}}
J.kF.prototype={}
J.dn.prototype={}
J.de.prototype={
t(a){var s=a[$.xg()]
if(s==null)s=a[$.tL()]
if(s==null)return this.lt(a)
return"JavaScript function for "+J.ej(s)},
$idJ:1}
J.h8.prototype={
ga0(a){return 0},
t(a){return String(a)}}
J.ha.prototype={
ga0(a){return 0},
t(a){return String(a)}}
J.r.prototype={
j(a,b){A.M(a).c.a(b)
a.$flags&1&&A.br(a,29)
a.push(b)},
de(a,b){a.$flags&1&&A.br(a,"removeAt",1)
if(b<0||b>=a.length)throw A.n(A.hv(b,null))
return a.splice(b,1)[0]},
kQ(a){a.$flags&1&&A.br(a,"removeLast",1)
if(a.length===0)throw A.n(A.mL(a,-1))
return a.pop()},
ad(a,b){var s
a.$flags&1&&A.br(a,"remove",1)
for(s=0;s<a.length;++s)if(J.aA(a[s],b)){a.splice(s,1)
return!0}return!1},
hP(a,b){A.M(a).h("A(1)").a(b)
a.$flags&1&&A.br(a,16)
this.no(a,b,!0)},
no(a,b,c){var s,r,q,p,o
A.M(a).h("A(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!b.$1(p))s.push(p)
if(a.length!==r)throw A.n(A.b0(a))}o=s.length
if(o===r)return
this.sI(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
l6(a,b){var s=A.M(a)
return new A.ak(a,s.h("A(1)").a(b),s.h("ak<1>"))},
U(a,b){var s
A.M(a).h("k<1>").a(b)
a.$flags&1&&A.br(a,"addAll",2)
if(Array.isArray(b)){this.lG(a,b)
return}for(s=J.aq(b);s.q();)a.push(s.gH())},
lG(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.n(A.b0(a))
for(r=0;r<s;++r)a.push(b[r])},
aU(a){a.$flags&1&&A.br(a,"clear","clear")
a.length=0},
ae(a,b){var s,r
A.M(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.n(A.b0(a))}},
aQ(a,b){var s,r=A.ao(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.i(r,s,A.J(a[s]))
return r.join(b)},
az(a,b,c,d){var s,r,q
d.a(b)
A.M(a).al(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.n(A.b0(a))}return r},
hx(a,b,c){var s,r,q
A.M(a).h("A(1)").a(b)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.n(A.b0(a))}throw A.n(A.cG())},
eX(a,b){return this.hx(a,b,null)},
aW(a,b){if(!(b>=0&&b<a.length))return A.c(a,b)
return a[b]},
fv(a,b,c){var s=a.length
if(b>s)throw A.n(A.cL(b,0,s,"start",null))
if(c==null)c=s
else if(c<b||c>s)throw A.n(A.cL(c,b,s,"end",null))
if(b===c)return A.a([],A.M(a))
return A.a(a.slice(b,c),A.M(a))},
lr(a,b){return this.fv(a,b,null)},
gaw(a){if(a.length>0)return a[0]
throw A.n(A.cG())},
gcG(a){var s=a.length
if(s>0)return a[s-1]
throw A.n(A.cG())},
glm(a){var s=a.length
if(s===1){if(0>=s)return A.c(a,0)
return a[0]}if(s===0)throw A.n(A.cG())
throw A.n(A.yN())},
i8(a,b,c,d,e){var s,r,q,p
A.M(a).h("k<1>").a(d)
a.$flags&2&&A.br(a,5)
A.uf(b,c,a.length)
s=c-b
if(s===0)return
A.hw(e,"skipCount")
r=d
q=J.iB(r)
if(e+s>q.gI(r))throw A.n(A.yM())
if(e<b)for(p=s-1;p>=0;--p)a[b+p]=q.p(r,e+p)
else for(p=0;p<s;++p)a[b+p]=q.p(r,e+p)},
oU(a,b,c,d){var s
A.M(a).h("1?").a(d)
a.$flags&2&&A.br(a,"fillRange")
A.uf(b,c,a.length)
for(s=b;s<c;++s)a[s]=d},
cZ(a,b){var s,r
A.M(a).h("A(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.n(A.b0(a))}return!1},
oR(a,b){var s,r
A.M(a).h("A(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.n(A.b0(a))}return!0},
dj(a,b){var s,r,q,p,o,n=A.M(a)
n.h("e(1,1)?").a(b)
a.$flags&2&&A.br(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Am()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.bh()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.mK(b,2))
if(p>0)this.nu(a,p)},
fp(a){return this.dj(a,null)},
nu(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bL(a,b){var s,r,q,p
a.$flags&2&&A.br(a,"shuffle")
s=a.length
while(s>1){r=b.a1(s);--s
q=a.length
if(!(s<q))return A.c(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.c(a,r)
a[s]=a[r]
a[r]=p}},
c4(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.c(a,s)
if(J.aA(a[s],b))return s}return-1},
G(a,b){var s
for(s=0;s<a.length;++s)if(J.aA(a[s],b))return!0
return!1},
gkj(a){return a.length!==0},
t(a){return A.pd(a,"[","]")},
cM(a,b){var s=A.a(a.slice(0),A.M(a))
return s},
e6(a){return this.cM(a,!0)},
gN(a){return new J.b_(a,a.length,A.M(a).h("b_<1>"))},
ga0(a){return A.ht(a)},
gI(a){return a.length},
sI(a,b){a.$flags&1&&A.br(a,"set length","change the length of")
if(b<0)throw A.n(A.cL(b,0,null,"newLength",null))
if(b>a.length)A.M(a).c.a(null)
a.length=b},
p(a,b){A.u(b)
if(!(b>=0&&b<a.length))throw A.n(A.mL(a,b))
return a[b]},
i(a,b,c){A.M(a).c.a(c)
a.$flags&2&&A.br(a)
if(!(b>=0&&b<a.length))throw A.n(A.mL(a,b))
a[b]=c},
hA(a,b){var s
A.M(a).h("A(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
$iL:1,
$ik:1,
$iD:1}
J.k3.prototype={
pC(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kJ(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.pe.prototype={}
J.b_.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.o(q)
throw A.n(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ia5:1}
J.dL.prototype={
ai(a,b){var s
A.e7(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gf3(b)
if(this.gf3(a)===s)return 0
if(this.gf3(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gf3(a){return a===0?1/a<0:a<0},
L(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.n(A.cp(""+a+".toInt()"))},
aT(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.n(A.cp(""+a+".ceil()"))},
bP(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.n(A.cp(""+a+".floor()"))},
O(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.n(A.cp(""+a+".round()"))},
P(a,b,c){if(B.c.ai(b,c)>0)throw A.n(A.iz(b))
if(this.ai(a,b)<0)return b
if(this.ai(a,c)>0)return c
return a},
hY(a,b){var s
if(b>20)throw A.n(A.cL(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gf3(a))return"-"+s
return s},
t(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga0(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
ab(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
cc(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.jq(a,b)},
A(a,b){return(a|0)===a?a/b|0:this.jq(a,b)},
jq(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.n(A.cp("Result of truncating division is "+A.J(s)+": "+A.J(a)+" ~/ "+b))},
eE(a,b){var s
if(a>0)s=this.nH(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
nH(a,b){return b>31?0:a>>>b},
gaG(a){return A.e9(t.cZ)},
$iau:1,
$iF:1,
$ial:1}
J.h5.prototype={
gic(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
gaG(a){return A.e9(t.S)},
$iag:1,
$ie:1}
J.k4.prototype={
gaG(a){return A.e9(t.i)},
$iag:1}
J.dd.prototype={
hh(a,b){return new A.mx(b,a,0)},
dQ(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.cT(a,r-s)},
ij(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
aJ(a,b,c){return a.substring(b,A.uf(b,c,a.length))},
cT(a,b){return this.aJ(a,b,null)},
l_(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.c(p,0)
if(p.charCodeAt(0)===133){s=J.yS(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.c(p,r)
q=p.charCodeAt(r)===133?J.yT(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
aI(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.n(B.cJ)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ph(a,b,c){var s=b-a.length
if(s<=0)return a
return this.aI(c,s)+a},
dc(a,b){return this.ph(a,b," ")},
f9(a,b){var s=b-a.length
if(s<=0)return a
return a+this.aI(" ",s)},
c4(a,b){var s=a.indexOf(b,0)
return s},
G(a,b){return A.BB(a,b,0)},
ai(a,b){var s
A.a2(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
t(a){return a},
ga0(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gaG(a){return A.e9(t.N)},
gI(a){return a.length},
$iag:1,
$iau:1,
$iq3:1,
$iq:1}
A.df.prototype={
t(a){return"LateInitializationError: "+this.a}}
A.d8.prototype={
gI(a){return this.a.length},
p(a,b){var s
A.u(b)
s=this.a
if(!(b>=0&&b<s.length))return A.c(s,b)
return s.charCodeAt(b)}}
A.qx.prototype={}
A.L.prototype={}
A.aG.prototype={
gN(a){var s=this
return new A.c4(s,s.gI(s),A.z(s).h("c4<aG.E>"))},
gaE(a){return this.gI(this)===0},
aQ(a,b){var s,r,q,p=this,o=p.gI(p)
if(b.length!==0){if(o===0)return""
s=A.J(p.aW(0,0))
if(o!==p.gI(p))throw A.n(A.b0(p))
for(r=s,q=1;q<o;++q){r=r+b+A.J(p.aW(0,q))
if(o!==p.gI(p))throw A.n(A.b0(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.J(p.aW(0,q))
if(o!==p.gI(p))throw A.n(A.b0(p))}return r.charCodeAt(0)==0?r:r}},
kl(a,b,c){var s=A.z(this)
return new A.aP(this,s.al(c).h("1(aG.E)").a(b),s.h("@<aG.E>").al(c).h("aP<1,2>"))},
cM(a,b){var s=A.a6(this,A.z(this).h("aG.E"))
return s},
e6(a){return this.cM(0,!0)}}
A.hO.prototype={
gml(){var s=J.dB(this.a),r=this.c
if(r==null||r>s)return s
return r},
gnJ(){var s=J.dB(this.a),r=this.b
if(r>s)return s
return r},
gI(a){var s,r=J.dB(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
aW(a,b){var s=this,r=s.gnJ()+b
if(b<0||r>=s.gml())throw A.n(A.oD(b,s.gI(0),s,null,"index"))
return J.tX(s.a,r)}}
A.c4.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=J.iB(q),o=p.gI(q)
if(r.b!==o)throw A.n(A.b0(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.aW(q,s);++r.c
return!0},
$ia5:1}
A.dP.prototype={
gN(a){return new A.bn(J.aq(this.a),this.b,A.z(this).h("bn<1,2>"))},
gI(a){return J.dB(this.a)}}
A.dF.prototype={$iL:1}
A.bn.prototype={
q(){var s=this,r=s.b
if(r.q()){s.a=s.c.$1(r.gH())
return!0}s.a=null
return!1},
gH(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ia5:1}
A.aP.prototype={
gI(a){return J.dB(this.a)},
aW(a,b){return this.b.$1(J.tX(this.a,b))}}
A.ak.prototype={
gN(a){return new A.cT(J.aq(this.a),this.b,this.$ti.h("cT<1>"))}}
A.cT.prototype={
q(){var s,r
for(s=this.a,r=this.b;s.q();)if(r.$1(s.gH()))return!0
return!1},
gH(){return this.a.gH()},
$ia5:1}
A.dX.prototype={
gN(a){var s=this.a
return new A.hP(s.gN(s),this.b,A.z(this).h("hP<1>"))}}
A.fQ.prototype={
gI(a){var s=this.a,r=s.gI(s)
s=this.b
if(r>s)return s
return r},
$iL:1}
A.hP.prototype={
q(){if(--this.b>=0)return this.a.q()
this.b=-1
return!1},
gH(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gH()},
$ia5:1}
A.hQ.prototype={
gN(a){return new A.hR(J.aq(this.a),this.b,this.$ti.h("hR<1>"))}}
A.hR.prototype={
q(){var s,r=this
if(r.c)return!1
s=r.a
if(!s.q()||!r.b.$1(s.gH())){r.c=!0
return!1}return!0},
gH(){if(this.c){this.$ti.c.a(null)
return null}return this.a.gH()},
$ia5:1}
A.hW.prototype={
gN(a){return new A.bp(J.aq(this.a),this.$ti.h("bp<1>"))}}
A.bp.prototype={
q(){var s,r
for(s=this.a,r=this.$ti.c;s.q();)if(r.b(s.gH()))return!0
return!1},
gH(){return this.$ti.c.a(this.a.gH())},
$ia5:1}
A.aC.prototype={
sI(a,b){throw A.n(A.cp("Cannot change the length of a fixed-length list"))},
j(a,b){A.cu(a).h("aC.E").a(b)
throw A.n(A.cp("Cannot add to a fixed-length list"))}}
A.dp.prototype={
i(a,b,c){A.z(this).h("dp.E").a(c)
throw A.n(A.cp("Cannot modify an unmodifiable list"))},
sI(a,b){throw A.n(A.cp("Cannot change the length of an unmodifiable list"))},
j(a,b){A.z(this).h("dp.E").a(b)
throw A.n(A.cp("Cannot add to an unmodifiable list"))}}
A.fd.prototype={}
A.cN.prototype={
gI(a){return J.dB(this.a)},
aW(a,b){var s=this.a,r=J.iB(s)
return r.aW(s,r.gI(s)-1-b)}}
A.O.prototype={$r:"+(1,2)",$s:1}
A.W.prototype={$r:"+(1,2,3,4)",$s:2}
A.es.prototype={
gaE(a){return this.gI(this)===0},
t(a){return A.u9(this)},
geV(){return new A.R(this.oQ(),A.z(this).h("R<aO<1,2>>"))},
oQ(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$geV(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gb3(),o=o.gN(o),n=A.z(s),m=n.y[1],n=n.h("aO<1,2>")
case 2:if(!o.q()){r=3
break}l=o.gH()
k=s.p(0,l)
r=4
return a.b=new A.aO(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
$ibm:1}
A.bQ.prototype={
gI(a){return this.b.length},
giX(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
aj(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
p(a,b){if(!this.aj(b))return null
return this.b[this.a[b]]},
ae(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.giX()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gb3(){return new A.i8(this.giX(),this.$ti.h("i8<1>"))}}
A.i8.prototype={
gI(a){return this.a.length},
gN(a){var s=this.a
return new A.i9(s,s.length,this.$ti.h("i9<1>"))}}
A.i9.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$ia5:1}
A.dK.prototype={
du(){var s=this,r=s.$map
if(r==null){r=new A.hb(s.$ti.h("hb<1,2>"))
A.wX(s.a,r)
s.$map=r}return r},
aj(a){return this.du().aj(a)},
p(a,b){return this.du().p(0,b)},
ae(a,b){this.$ti.h("~(1,2)").a(b)
this.du().ae(0,b)},
gb3(){var s=this.du()
return new A.b2(s,A.z(s).h("b2<1>"))},
gI(a){return this.du().a}}
A.q6.prototype={
$0(){return B.e.bP(1000*this.a.now())},
$S:2}
A.hE.prototype={}
A.rq.prototype={
bT(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.hp.prototype={
t(a){return"Null check operator used on a null value"}}
A.k5.prototype={
t(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.ll.prototype={
t(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.pZ.prototype={
t(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.io.prototype={
t(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ifb:1}
A.d7.prototype={
t(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.xd(r==null?"unknown":r)+"'"},
$idJ:1,
gpL(){return this},
$C:"$1",
$R:1,
$D:null}
A.j8.prototype={$C:"$0",$R:0}
A.j9.prototype={$C:"$2",$R:2}
A.lc.prototype={}
A.l7.prototype={
t(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.xd(s)+"'"}}
A.em.prototype={
Z(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.em))return!1
return this.$_target===b.$_target&&this.a===b.a},
ga0(a){return(A.uH(this.a)^A.ht(this.$_target))>>>0},
t(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kJ(this.a)+"'")}}
A.kZ.prototype={
t(a){return"RuntimeError: "+this.a}}
A.c2.prototype={
gI(a){return this.a},
gaE(a){return this.a===0},
gb3(){return new A.b2(this,A.z(this).h("b2<1>"))},
geV(){return new A.bl(this,A.z(this).h("bl<1,2>"))},
aj(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.p5(a)},
p5(a){var s=this.d
if(s==null)return!1
return this.dW(this.iR(s,a),a)>=0},
U(a,b){A.z(this).h("bm<1,2>").a(b).ae(0,new A.pf(this))},
p(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.p6(b)},
p6(a){var s,r,q=this.d
if(q==null)return null
s=this.iR(q,a)
r=this.dW(s,a)
if(r<0)return null
return s[r].b},
i(a,b,c){var s,r,q=this,p=A.z(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.ip(s==null?q.b=q.h_():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.ip(r==null?q.c=q.h_():r,b,c)}else q.p8(b,c)},
p8(a,b){var s,r,q,p,o=this,n=A.z(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.h_()
r=o.f2(a)
q=s[r]
if(q==null)s[r]=[o.h0(a,b)]
else{p=o.dW(q,a)
if(p>=0)q[p].b=b
else q.push(o.h0(a,b))}},
b7(a,b){var s,r,q=this,p=A.z(q)
p.c.a(a)
p.h("2()").a(b)
if(q.aj(a)){s=q.p(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.i(0,a,r)
return r},
ad(a,b){var s=this.p7(b)
return s},
p7(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.f2(a)
r=n[s]
q=o.dW(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.o3(p)
if(r.length===0)delete n[s]
return p.b},
aU(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.fY()}},
ae(a,b){var s,r,q=this
A.z(q).h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.n(A.b0(q))
s=s.c}},
ip(a,b,c){var s,r=A.z(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.h0(b,c)
else s.b=c},
fY(){this.r=this.r+1&1073741823},
h0(a,b){var s=this,r=A.z(s),q=new A.pp(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.fY()
return q},
o3(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.fY()},
f2(a){return J.cd(a)&1073741823},
iR(a,b){return a[this.f2(b)]},
dW(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aA(a[r].a,b))return r
return-1},
t(a){return A.u9(this)},
h_(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iu8:1}
A.pf.prototype={
$2(a,b){var s=this.a,r=A.z(s)
s.i(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.z(this.a).h("~(1,2)")}}
A.pp.prototype={}
A.b2.prototype={
gI(a){return this.a.a},
gaE(a){return this.a.a===0},
gN(a){var s=this.a
return new A.c3(s,s.r,s.e,this.$ti.h("c3<1>"))},
G(a,b){return this.a.aj(b)}}
A.c3.prototype={
gH(){return this.d},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.n(A.b0(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ia5:1}
A.cI.prototype={
gI(a){return this.a.a},
gN(a){var s=this.a
return new A.cH(s,s.r,s.e,this.$ti.h("cH<1>"))}}
A.cH.prototype={
gH(){return this.d},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.n(A.b0(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$ia5:1}
A.bl.prototype={
gI(a){return this.a.a},
gN(a){var s=this.a
return new A.dN(s,s.r,s.e,this.$ti.h("dN<1,2>"))}}
A.dN.prototype={
gH(){var s=this.d
s.toString
return s},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.n(A.b0(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.aO(s.a,s.b,r.$ti.h("aO<1,2>"))
r.c=s.c
return!0}},
$ia5:1}
A.hb.prototype={
f2(a){return A.B3(a)&1073741823},
dW(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aA(a[r].a,b))return r
return-1}}
A.ts.prototype={
$1(a){return this.a(a)},
$S:40}
A.tt.prototype={
$2(a,b){return this.a(a,b)},
$S:66}
A.tu.prototype={
$1(a){return this.a(A.a2(a))},
$S:80}
A.cq.prototype={
t(a){return this.js(!1)},
js(a){var s,r,q,p,o,n=this.mp(),m=this.fT(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.c(m,q)
o=m[q]
l=a?l+A.w1(o):l+A.J(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
mp(){var s,r=this.$s
while($.rY.length<=r)B.a.j($.rY,null)
s=$.rY[r]
if(s==null){s=this.lZ()
B.a.i($.rY,r,s)}return s},
lZ(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.vM(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.i(j,q,r[s])}}j=A.z_(j,!1,k)
j.$flags=3
return j}}
A.fk.prototype={
fT(){return[this.a,this.b]},
Z(a,b){if(b==null)return!1
return b instanceof A.fk&&this.$s===b.$s&&J.aA(this.a,b.a)&&J.aA(this.b,b.b)},
ga0(a){return A.ub(this.$s,this.a,this.b,B.am)}}
A.fl.prototype={
fT(){return this.a},
Z(a,b){if(b==null)return!1
return b instanceof A.fl&&this.$s===b.$s&&A.zP(this.a,b.a)},
ga0(a){return A.ub(this.$s,A.z7(this.a),B.am,B.am)}}
A.h7.prototype={
t(a){return"RegExp/"+this.a+"/"+this.b.flags},
gj4(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.vQ(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
k8(a){var s=this.b.exec(a)
if(s==null)return null
return new A.ia(s)},
hh(a,b){return new A.lw(this,b,0)},
mo(a,b){var s,r=this.gj4()
if(r==null)r=A.fo(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.ia(s)},
$iq3:1,
$izk:1}
A.ia.prototype={
gii(){return this.b.index},
ghv(){var s=this.b
return s.index+s[0].length},
p(a,b){var s
A.u(b)
s=this.b
if(!(b<s.length))return A.c(s,b)
return s[b]},
$icl:1,
$ihy:1}
A.lw.prototype={
gN(a){return new A.hY(this.a,this.b,this.c)}}
A.hY.prototype={
gH(){var s=this.d
return s==null?t.lu.a(s):s},
q(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.mo(l,s)
if(p!=null){m.d=p
o=p.ghv()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.c(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.c(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$ia5:1}
A.l8.prototype={
ghv(){return this.a+this.c.length},
p(a,b){A.u(b)
if(b!==0)throw A.n(A.hv(b,null))
return this.c},
$icl:1,
gii(){return this.a}}
A.mx.prototype={
gN(a){return new A.my(this.a,this.b,this.c)}}
A.my.prototype={
q(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.l8(s,o)
q.c=r===q.c?r+1:r
return!0},
gH(){var s=this.d
s.toString
return s},
$ia5:1}
A.rE.prototype={
h2(){var s=this.b
if(s===this)throw A.n(new A.df("Local '' has not been initialized."))
return s},
u(){var s=this.b
if(s===this)throw A.n(A.dM(""))
return s}}
A.eQ.prototype={
gaG(a){return B.jk},
$iag:1}
A.hl.prototype={}
A.kp.prototype={
gaG(a){return B.jl},
$iag:1}
A.eR.prototype={
gI(a){return a.length},
$ibK:1}
A.hj.prototype={
p(a,b){A.u(b)
A.cZ(b,a,a.length)
return a[b]},
i(a,b,c){A.bA(c)
a.$flags&2&&A.br(a)
A.cZ(b,a,a.length)
a[b]=c},
$iL:1,
$ik:1,
$iD:1}
A.hk.prototype={
i(a,b,c){A.u(c)
a.$flags&2&&A.br(a)
A.cZ(b,a,a.length)
a[b]=c},
$iL:1,
$ik:1,
$iD:1}
A.kq.prototype={
gaG(a){return B.jm},
$iag:1}
A.kr.prototype={
gaG(a){return B.jn},
$iag:1}
A.ks.prototype={
gaG(a){return B.jo},
p(a,b){A.u(b)
A.cZ(b,a,a.length)
return a[b]},
$iag:1}
A.kt.prototype={
gaG(a){return B.jp},
p(a,b){A.u(b)
A.cZ(b,a,a.length)
return a[b]},
$iag:1}
A.ku.prototype={
gaG(a){return B.jq},
p(a,b){A.u(b)
A.cZ(b,a,a.length)
return a[b]},
$iag:1}
A.kv.prototype={
gaG(a){return B.js},
p(a,b){A.u(b)
A.cZ(b,a,a.length)
return a[b]},
$iag:1}
A.kw.prototype={
gaG(a){return B.jt},
p(a,b){A.u(b)
A.cZ(b,a,a.length)
return a[b]},
$iag:1}
A.hm.prototype={
gaG(a){return B.ju},
gI(a){return a.length},
p(a,b){A.u(b)
A.cZ(b,a,a.length)
return a[b]},
$iag:1}
A.kx.prototype={
gaG(a){return B.jv},
gI(a){return a.length},
p(a,b){A.u(b)
A.cZ(b,a,a.length)
return a[b]},
$iag:1}
A.ib.prototype={}
A.ic.prototype={}
A.id.prototype={}
A.ie.prototype={}
A.c6.prototype={
h(a){return A.it(v.typeUniverse,this,a)},
al(a){return A.ww(v.typeUniverse,this,a)}}
A.lZ.prototype={}
A.mC.prototype={
t(a){return A.bO(this.a,null)}}
A.lQ.prototype={
t(a){return this.a}}
A.ip.prototype={$icR:1}
A.ry.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:44}
A.rx.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:121}
A.rz.prototype={
$0(){this.a.$0()},
$S:27}
A.rA.prototype={
$0(){this.a.$0()},
$S:27}
A.t3.prototype={
lF(a,b){if(self.setTimeout!=null)self.setTimeout(A.mK(new A.t4(this,b),0),a)
else throw A.n(A.cp("`setTimeout()` not found."))}}
A.t4.prototype={
$0(){this.b.$0()},
$S:0}
A.ah.prototype={
gH(){var s=this.b
return s==null?this.$ti.c.a(s):s},
nw(a,b){var s,r,q
a=A.u(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
q(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.q()){o.b=s.gH()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.nw(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.wq
return!1}if(0>=p.length)return A.c(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.wq
throw n
return!1}if(0>=p.length)return A.c(p,-1)
o.a=p.pop()
m=1
continue}throw A.n(A.cO("sync*"))}return!1},
aL(a){var s,r,q=this
if(a instanceof A.R){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.j(r,q.a)
q.a=s
return 2}else{q.d=J.aq(a)
return 2}},
$ia5:1}
A.R.prototype={
gN(a){return new A.ah(this.a(),this.$ti.h("ah<1>"))}}
A.cw.prototype={
t(a){return A.J(this.a)},
$iam:1,
gei(){return this.b}}
A.i5.prototype={
pc(a){if((this.c&15)!==6)return!0
return this.b.b.hR(t.iW.a(this.d),a.a,t.y,t.K)},
oZ(a){var s,r=this,q=r.e,p=null,o=t.oH,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.pt(q,m,a.b,o,n,t.gl)
else p=l.hR(t.mq.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.do.b(A.ds(s))){if((r.c&1)!==0)throw A.n(A.aE("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.n(A.aE("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.bV.prototype={
pz(a,b,c){var s,r,q=this.$ti
q.al(c).h("1/(2)").a(a)
s=$.b5
if(s===B.ad){if(!t.ng.b(b)&&!t.mq.b(b))throw A.n(A.tY(b,"onError",u.c))}else{c.h("@<0/>").al(q.c).h("1(2)").a(a)
b=A.AL(b,s)}r=new A.bV(s,c.h("bV<0>"))
this.iq(new A.i5(r,3,a,b,q.h("@<1>").al(c).h("i5<1,2>")))
return r},
nE(a){this.a=this.a&1|16
this.c=a},
en(a){this.a=a.a&30|this.a&1
this.c=a.c},
iq(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.j_.a(r.c)
if((s.a&24)===0){s.iq(a)
return}r.en(s)}A.tj(null,null,r.b,t.O.a(new A.rI(r,a)))}},
jb(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.j_.a(m.c)
if((n.a&24)===0){n.jb(a)
return}m.en(n)}l.a=m.eC(a)
A.tj(null,null,m.b,t.O.a(new A.rL(l,m)))}},
eA(){var s=t.F.a(this.c)
this.c=null
return this.eC(s)},
eC(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
lY(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.eA()
q.en(a)
A.fi(q,r)},
iD(a){var s=this.eA()
this.nE(a)
A.fi(this,s)},
lJ(a){this.a^=2
A.tj(null,null,this.b,t.O.a(new A.rJ(this,a)))},
$ijI:1}
A.rI.prototype={
$0(){A.fi(this.a,this.b)},
$S:0}
A.rL.prototype={
$0(){A.fi(this.b,this.a.a)},
$S:0}
A.rK.prototype={
$0(){A.wl(this.a.a,this.b,!0)},
$S:0}
A.rJ.prototype={
$0(){this.a.iD(this.b)},
$S:0}
A.rO.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.ps(t.df.a(q.d),t.oH)}catch(p){s=A.ds(p)
r=A.ec(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.tZ(q)
n=k.a
n.c=new A.cw(q,o)
q=n}q.b=!0
return}if(j instanceof A.bV&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.bV){m=k.b.a
l=new A.bV(m.b,m.$ti)
j.pz(new A.rP(l,m),new A.rQ(l),t.ef)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.rP.prototype={
$1(a){this.a.lY(this.b)},
$S:44}
A.rQ.prototype={
$2(a,b){A.fo(a)
t.gl.a(b)
this.a.iD(new A.cw(a,b))},
$S:143}
A.rN.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.hR(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.ds(l)
r=A.ec(l)
q=s
p=r
if(p==null)p=A.tZ(q)
o=this.a
o.c=new A.cw(q,p)
o.b=!0}},
$S:0}
A.rM.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.pc(s)&&p.a.e!=null){p.c=p.a.oZ(s)
p.b=!1}}catch(o){r=A.ds(o)
q=A.ec(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.tZ(p)
m=l.b
m.c=new A.cw(p,n)
p=m}p.b=!0}},
$S:0}
A.lz.prototype={}
A.hL.prototype={
gI(a){var s,r,q=this,p={},o=new A.bV($.b5,t.h0)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new A.r8(p,q))
t.c5.a(new A.r9(p,o))
A.e3(q.a,q.b,r,!1,s.c)
return o}}
A.r8.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.h("~(1)")}}
A.r9.prototype={
$0(){var s=this.b,r=s.$ti,q=r.h("1/").a(this.a.a),p=s.eA()
r.c.a(q)
s.a=8
s.c=q
A.fi(s,p)},
$S:0}
A.iu.prototype={$iwi:1}
A.mp.prototype={
pu(a){var s,r,q
t.O.a(a)
try{if(B.ad===$.b5){a.$0()
return}A.wM(null,null,this,a,t.ef)}catch(q){s=A.ds(q)
r=A.ec(q)
A.th(A.fo(s),t.gl.a(r))}},
pv(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.ad===$.b5){a.$1(b)
return}A.wN(null,null,this,a,b,t.ef,c)}catch(q){s=A.ds(q)
r=A.ec(q)
A.th(A.fo(s),t.gl.a(r))}},
on(a){return new A.t_(this,t.O.a(a))},
oo(a,b){return new A.t0(this,b.h("~(0)").a(a),b)},
ps(a,b){b.h("0()").a(a)
if($.b5===B.ad)return a.$0()
return A.wM(null,null,this,a,b)},
hR(a,b,c,d){c.h("@<0>").al(d).h("1(2)").a(a)
d.a(b)
if($.b5===B.ad)return a.$1(b)
return A.wN(null,null,this,a,b,c,d)},
pt(a,b,c,d,e,f){d.h("@<0>").al(e).al(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.b5===B.ad)return a.$2(b,c)
return A.AM(null,null,this,a,b,c,d,e,f)}}
A.t_.prototype={
$0(){return this.a.pu(this.b)},
$S:0}
A.t0.prototype={
$1(a){var s=this.c
return this.a.pv(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.ti.prototype={
$0(){A.yz(this.a,this.b)},
$S:0}
A.cV.prototype={
nd(){return new A.cV(A.z(this).h("cV<1>"))},
gN(a){var s=this,r=new A.cW(s,s.r,A.z(s).h("cW<1>"))
r.c=s.e
return r},
gI(a){return this.a},
G(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.nF.a(r[b])!=null}else return this.m_(b)},
m_(a){var s=this.d
if(s==null)return!1
return this.fR(s[this.fJ(a)],a)>=0},
gaw(a){var s=this.e
if(s==null)throw A.n(A.cO("No elements"))
return A.z(this).c.a(s.a)},
j(a,b){var s,r,q=this
A.z(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.iA(s==null?q.b=A.up():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.iA(r==null?q.c=A.up():r,b)}else return q.bj(b)},
bj(a){var s,r,q,p=this
A.z(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.up()
r=p.fJ(a)
q=s[r]
if(q==null)s[r]=[p.fI(a)]
else{if(p.fR(q,a)>=0)return!1
q.push(p.fI(a))}return!0},
ad(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.jg(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.jg(s.c,b)
else return s.nn(b)},
nn(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.fJ(a)
r=n[s]
q=o.fR(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.iC(p)
return!0},
mr(a,b){var s,r,q,p,o,n=this,m=A.z(n)
m.h("A(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.n(A.b0(n))
if(!0===o)n.ad(0,r)}},
iA(a,b){A.z(this).c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.fI(b)
return!0},
jg(a,b){var s
if(a==null)return!1
s=t.nF.a(a[b])
if(s==null)return!1
this.iC(s)
delete a[b]
return!0},
iB(){this.r=this.r+1&1073741823},
fI(a){var s,r=this,q=new A.md(A.z(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.iB()
return q},
iC(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.iB()},
fJ(a){return J.cd(a)&1073741823},
fR(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.aA(a[r].a,b))return r
return-1}}
A.md.prototype={}
A.cW.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.n(A.b0(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}},
$ia5:1}
A.Y.prototype={
gN(a){return new A.c4(a,this.gI(a),A.cu(a).h("c4<Y.E>"))},
aW(a,b){return this.p(a,b)},
gkj(a){return this.gI(a)!==0},
l6(a,b){var s=A.cu(a)
return new A.ak(a,s.h("A(Y.E)").a(b),s.h("ak<Y.E>"))},
cM(a,b){var s,r,q,p,o=this
if(o.gI(a)===0){s=J.vO(0,A.cu(a).h("Y.E"))
return s}r=o.p(a,0)
q=A.ao(o.gI(a),r,!0,A.cu(a).h("Y.E"))
for(p=1;p<o.gI(a);++p)B.a.i(q,p,o.p(a,p))
return q},
e6(a){return this.cM(a,!0)},
j(a,b){var s
A.cu(a).h("Y.E").a(b)
s=this.gI(a)
this.sI(a,s+1)
this.i(a,s,b)},
t(a){return A.pd(a,"[","]")},
$iL:1,
$ik:1,
$iD:1}
A.aD.prototype={
ae(a,b){var s,r,q,p=A.z(this)
p.h("~(aD.K,aD.V)").a(b)
for(s=this.gb3(),s=s.gN(s),p=p.h("aD.V");s.q();){r=s.gH()
q=this.p(0,r)
b.$2(r,q==null?p.a(q):q)}},
geV(){return this.gb3().kl(0,new A.pC(this),A.z(this).h("aO<aD.K,aD.V>"))},
aj(a){return this.gb3().G(0,a)},
gI(a){var s=this.gb3()
return s.gI(s)},
gaE(a){var s=this.gb3()
return s.gaE(s)},
t(a){return A.u9(this)},
$ibm:1}
A.pC.prototype={
$1(a){var s=this.a,r=A.z(s)
r.h("aD.K").a(a)
s=s.p(0,a)
if(s==null)s=r.h("aD.V").a(s)
return new A.aO(a,s,r.h("aO<aD.K,aD.V>"))},
$S(){return A.z(this.a).h("aO<aD.K,aD.V>(aD.K)")}}
A.pD.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.J(a)
r.a=(r.a+=s)+": "
s=A.J(b)
r.a+=s},
$S:28}
A.hd.prototype={
gN(a){var s=this
return new A.e5(s,s.c,s.d,s.b,s.$ti.h("e5<1>"))},
gaE(a){return this.b===this.c},
gI(a){return(this.c-this.b&this.a.length-1)>>>0},
aW(a,b){var s,r,q=this,p=q.gI(0)
if(0>b||b>=p)A.a0(A.oD(b,p,q,null,"index"))
p=q.a
s=p.length
r=(q.b+b&s-1)>>>0
if(!(r>=0&&r<s))return A.c(p,r)
r=p[r]
return r==null?q.$ti.c.a(r):r},
t(a){return A.pd(this,"{","}")},
cK(){var s,r,q=this,p=q.b
if(p===q.c)throw A.n(A.cG());++q.d
s=q.a
if(!(p<s.length))return A.c(s,p)
r=s[p]
if(r==null)r=q.$ti.c.a(r)
B.a.i(s,p,null)
q.b=(q.b+1&q.a.length-1)>>>0
return r},
bj(a){var s,r=this
r.$ti.c.a(a)
B.a.i(r.a,r.c,a)
s=(r.c+1&r.a.length-1)>>>0
r.c=s
if(r.b===s)r.iS();++r.d},
iS(){var s=this,r=A.ao(s.a.length*2,null,!1,s.$ti.h("1?")),q=s.a,p=s.b,o=q.length-p
B.a.i8(r,0,o,q,p)
B.a.i8(r,o,o+s.b,s.a,0)
s.b=0
s.c=s.a.length
s.a=r},
$if0:1}
A.e5.prototype={
gH(){var s=this.e
return s==null?this.$ti.c.a(s):s},
q(){var s,r,q=this,p=q.a
if(q.c!==p.d)A.a0(A.b0(p))
s=q.d
if(s===q.b){q.e=null
return!1}p=p.a
r=p.length
if(!(s<r))return A.c(p,s)
q.e=p[s]
q.d=(s+1&r-1)>>>0
return!0},
$ia5:1}
A.f9.prototype={
U(a,b){var s
for(s=J.aq(A.z(this).h("k<1>").a(b));s.q();)this.j(0,s.gH())},
t(a){return A.pd(this,"{","}")},
aQ(a,b){var s,r,q,p,o=A.uo(this,this.r,A.z(this).c)
if(!o.q())return""
s=o.d
r=J.ej(s==null?o.$ti.c.a(s):s)
if(!o.q())return r
s=o.$ti.c
if(b.length===0){q=r
do{p=o.d
q+=A.J(p==null?s.a(p):p)}while(o.q())
s=q}else{q=r
do{p=o.d
q=q+b+A.J(p==null?s.a(p):p)}while(o.q())
s=q}return s.charCodeAt(0)==0?s:s},
$iL:1,
$ik:1,
$ihH:1}
A.ik.prototype={}
A.m8.prototype={
p(a,b){var s,r=this.b
if(r==null)return this.c.p(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.m0(b):s}},
gI(a){return this.b==null?this.c.a:this.eo().length},
gaE(a){return this.gI(0)===0},
gb3(){if(this.b==null){var s=this.c
return new A.b2(s,A.z(s).h("b2<1>"))}return new A.m9(this)},
aj(a){if(this.b==null)return this.c.aj(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
ae(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.ae(0,b)
s=o.eo()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.td(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.n(A.b0(o))}},
eo(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.a(Object.keys(this.a),t.s)
return s},
m0(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.td(this.a[a])
return this.b[a]=s}}
A.m9.prototype={
gI(a){return this.a.gI(0)},
aW(a,b){var s=this.a
if(s.b==null)s=s.gb3().aW(0,b)
else{s=s.eo()
if(!(b>=0&&b<s.length))return A.c(s,b)
s=s[b]}return s},
gN(a){var s=this.a
if(s.b==null){s=s.gb3()
s=s.gN(s)}else{s=s.eo()
s=new J.b_(s,s.length,A.M(s).h("b_<1>"))}return s},
G(a,b){return this.a.aj(b)}}
A.jc.prototype={}
A.je.prototype={}
A.hc.prototype={
t(a){var s=A.js(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.k7.prototype={
t(a){return"Cyclic error in JSON stringify"}}
A.k6.prototype={
oH(a){var s=A.AJ(a,this.goI().a)
return s},
k_(a){var s=A.zG(a,this.goP().b,null)
return s},
goP(){return B.hB},
goI(){return B.hA}}
A.ph.prototype={}
A.pg.prototype={}
A.rT.prototype={
l9(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.i.aJ(a,r,q)
r=q+1
o=A.b4(92)
s.a+=o
o=A.b4(117)
s.a+=o
o=A.b4(100)
s.a+=o
o=p>>>8&15
o=A.b4(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.b4(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.b4(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.i.aJ(a,r,q)
r=q+1
o=A.b4(92)
s.a+=o
switch(p){case 8:o=A.b4(98)
s.a+=o
break
case 9:o=A.b4(116)
s.a+=o
break
case 10:o=A.b4(110)
s.a+=o
break
case 12:o=A.b4(102)
s.a+=o
break
case 13:o=A.b4(114)
s.a+=o
break
default:o=A.b4(117)
s.a+=o
o=A.b4(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.b4(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.b4(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.i.aJ(a,r,q)
r=q+1
o=A.b4(92)
s.a+=o
o=A.b4(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.i.aJ(a,r,m)},
fH(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.n(new A.k7(a,null))}B.a.j(s,a)},
fl(a){var s,r,q,p,o=this
if(o.l8(a))return
o.fH(a)
try{s=o.b.$1(a)
if(!o.l8(s)){q=A.vR(a,null,o.gj7())
throw A.n(q)}q=o.a
if(0>=q.length)return A.c(q,-1)
q.pop()}catch(p){r=A.ds(p)
q=A.vR(a,r,o.gj7())
throw A.n(q)}},
l8(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.e.t(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.l9(a)
s.a+='"'
return!0}else if(t.d.b(a)){q.fH(a)
q.pI(a)
s=q.a
if(0>=s.length)return A.c(s,-1)
s.pop()
return!0}else if(t.av.b(a)){q.fH(a)
r=q.pJ(a)
s=q.a
if(0>=s.length)return A.c(s,-1)
s.pop()
return r}else return!1},
pI(a){var s,r,q=this.c
q.a+="["
s=J.iB(a)
if(s.gkj(a)){this.fl(s.p(a,0))
for(r=1;r<s.gI(a);++r){q.a+=","
this.fl(s.p(a,r))}}q.a+="]"},
pJ(a){var s,r,q,p,o,n,m=this,l={}
if(a.gaE(a)){m.c.a+="{}"
return!0}s=a.gI(a)*2
r=A.ao(s,null,!1,t.iD)
q=l.a=0
l.b=!0
a.ae(0,new A.rU(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.l9(A.a2(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.c(r,n)
m.fl(r[n])}p.a+="}"
return!0}}
A.rU.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.i(s,r.a++,a)
B.a.i(s,r.a++,b)},
$S:28}
A.rS.prototype={
gj7(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.eu.prototype={
Z(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.eu)if(this.a===b.a)s=this.b===b.b
return s},
ga0(a){return A.ub(this.a,this.b,B.am,B.am)},
ai(a,b){var s
t.cs.a(b)
s=B.c.ai(this.a,b.a)
if(s!==0)return s
return B.c.ai(this.b,b.b)},
t(a){var s=this,r=A.yu(A.zf(s)),q=A.jh(A.zd(s)),p=A.jh(A.z9(s)),o=A.jh(A.za(s)),n=A.jh(A.zc(s)),m=A.jh(A.ze(s)),l=A.vu(A.zb(s)),k=s.b,j=k===0?"":A.vu(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iau:1}
A.rF.prototype={
t(a){return this.aK()}}
A.am.prototype={
gei(){return A.z8(this)}}
A.iQ.prototype={
t(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.js(s)
return"Assertion failed"}}
A.cR.prototype={}
A.cg.prototype={
gfQ(){return"Invalid argument"+(!this.a?"(s)":"")},
gfP(){return""},
t(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.J(p),n=s.gfQ()+q+o
if(!s.a)return n
return n+s.gfP()+": "+A.js(s.ghB())},
ghB(){return this.b}}
A.f1.prototype={
ghB(){return A.wA(this.b)},
gfQ(){return"RangeError"},
gfP(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.J(q):""
else if(q==null)s=": Not greater than or equal to "+A.J(r)
else if(q>r)s=": Not in inclusive range "+A.J(r)+".."+A.J(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.J(r)
return s}}
A.jX.prototype={
ghB(){return A.u(this.b)},
gfQ(){return"RangeError"},
gfP(){if(A.u(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gI(a){return this.f}}
A.hS.prototype={
t(a){return"Unsupported operation: "+this.a}}
A.lk.prototype={
t(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.dV.prototype={
t(a){return"Bad state: "+this.a}}
A.jd.prototype={
t(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.js(s)+"."}}
A.kB.prototype={
t(a){return"Out of Memory"},
gei(){return null},
$iam:1}
A.hK.prototype={
t(a){return"Stack Overflow"},
gei(){return null},
$iam:1}
A.rH.prototype={
t(a){return"Exception: "+this.a}}
A.ol.prototype={
t(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.i.aJ(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.k.prototype={
kl(a,b,c){var s=A.z(this)
return A.pF(this,s.al(c).h("1(k.E)").a(b),s.h("k.E"),c)},
az(a,b,c,d){var s,r
d.a(b)
A.z(this).al(d).h("1(1,k.E)").a(c)
for(s=this.gN(this),r=b;s.q();)r=c.$2(r,s.gH())
return r},
cZ(a,b){var s
A.z(this).h("A(k.E)").a(b)
for(s=this.gN(this);s.q();)if(b.$1(s.gH()))return!0
return!1},
cM(a,b){var s=A.a6(this,A.z(this).h("k.E"))
return s},
e6(a){return this.cM(0,!0)},
gI(a){var s,r=this.gN(this)
for(s=0;r.q();)++s
return s},
gaE(a){return!this.gN(this).q()},
gaw(a){var s=this.gN(this)
if(!s.q())throw A.n(A.cG())
return s.gH()},
hx(a,b,c){var s,r=A.z(this)
r.h("A(k.E)").a(b)
r.h("k.E()?").a(c)
for(r=this.gN(this);r.q();){s=r.gH()
if(b.$1(s))return s}r=c.$0()
return r},
aW(a,b){var s,r
A.hw(b,"index")
s=this.gN(this)
for(r=b;s.q();){if(r===0)return s.gH();--r}throw A.n(A.oD(b,b-r,this,null,"index"))},
t(a){return A.yO(this,"(",")")}}
A.aO.prototype={
t(a){return"MapEntry("+A.J(this.a)+": "+A.J(this.b)+")"}}
A.aK.prototype={
ga0(a){return A.a1.prototype.ga0.call(this,0)},
t(a){return"null"}}
A.a1.prototype={$ia1:1,
Z(a,b){return this===b},
ga0(a){return A.ht(this)},
t(a){return"Instance of '"+A.kJ(this)+"'"},
gaG(a){return A.Be(this)},
toString(){return this.t(this)}}
A.mz.prototype={
t(a){return""},
$ifb:1}
A.qW.prototype={
goO(){var s,r=this.b
if(r==null)r=$.ud.$0()
s=r-this.a
if($.v1()===1000)return s
return B.c.A(s,1000)}}
A.dW.prototype={
gI(a){return this.a.length},
t(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$izr:1}
A.ju.prototype={
i(a,b,c){this.$ti.h("1?").a(c)
this.a.set(b,c)},
t(a){return"Expando:null"}}
A.m7.prototype={
a1(a){if(a<=0||a>4294967296)throw A.n(A.w3(u.g+a))
return Math.random()*a>>>0},
hF(){return Math.random()},
$iue:1}
A.mn.prototype={
lE(a){var s,r,q,p,o,n,m,l=this,k=4294967296,j=a<0?-1:0
do{s=a>>>0
a=B.c.A(a-s,k)
r=a>>>0
a=B.c.A(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.c.A(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.c.A(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.c.A(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.c.A(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.c.A(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==j)
if(o===0&&n===0)l.a=23063
l.ce()
l.ce()
l.ce()
l.ce()},
ce(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.A(o-n+(q-p)+(m-r),4294967296)>>>0},
a1(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.n(A.w3(u.g+a))
s=a-1
if((a&s)>>>0===0){p.ce()
return(p.a&s)>>>0}do{p.ce()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
hF(){var s,r=this
r.ce()
s=r.a
r.ce()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iue:1}
A.jK.prototype={
ox(a,b,c,d){var s,r
t.jJ.a(d)
if(c===0)return new A.rp(b).dG(d)
s=b.f.b.b
r=s.a
s=s.b
return new A.ni(a,b,c,new A.a8(A.ao(r*s,null,!1,t.aT),new A.Z(new A.d(0,0),new A.d(r,s)),t.gy)).dG(d)},
jT(a,b,c,d){var s,r,q,p,o,n,m,l=null
if(d==null)d=B.a.eX($.fz(),new A.op())
if(b==null)b=B.a.gaw($.eh())
s=A.C(t.c3,t.C)
r=t.M
q=t.S
p=t.P
o=t.q
n=new A.dc(a,d,b,c,A.bI(B.v,l),new A.eA(A.ao(9,l,!1,t.U)),A.bI(B.c6,l),A.bI(B.c5,l),s,0,new A.hJ(A.C(r,q),A.C(r,q)),60,0,new A.kd(A.a([],t.kU)),new A.hg(A.C(p,q),A.C(p,q),A.C(o,q),A.C(t.R,q),A.b9(o),A.C(o,q)),new A.hM(),new A.fE(),new A.hV(),new A.h1())
n.ly(a,d,b,c)
for(r=new A.cH($.hI,$.hI.r,$.hI.e,A.z($.hI).h("cH<2>"));r.q();){q=r.d
m=A.bI(new A.c1(q.b,26),l)
q.aH(m)
s.i(0,q,m)}return n},
oG(a){return this.jT(a,null,!1,null)},
lq(a){var s,r,q,p,o=null,n=t.N,m=t.S,l=A.B(["Mending Salve",3,"Scroll of Sidestepping",2,"Tallow Candle",4,"Loaf of Bread",5],n,m),k=A.a([],t.I)
for(n=A.vX(l,n,m),m=A.z(n),n=new A.bn(J.aq(n.a),n.b,m.h("bn<1,2>")),m=m.y[1];n.q();){s=n.a
if(s==null)s=m.a(s)
r=s.a
q=s.b
p=$.bk().b.p(0,r)
if(p==null)A.a0(A.aE('Unknown resource "'+r+'".',o))
k.push(new A.K(p.a,o,o,o,q))}a.c.e.b1(a.ax,1,new A.oq(a,k))
return k},
pE(a,b){var s,r=a.f.B(b.gm(),b.gn()),q=r.x
if(q===0){if(!this.o2(a,b,r))this.jn(a,b,r)}else{s=r.w
if(s===$.b6()){--q
r.x=q
if(q<=0){q=r.a
q=$.tP().p(0,q)
if((q==null?0:q)>0){q=$.m()
s=t.p.a(A.zv(r.a))
q=q.T(s.length)
if(!(q>=0&&q<s.length))return A.c(s,q)
r.a=s[q]}a.gav().f=!0}else return new A.j2(b)}else if(s===$.bB()){this.jn(a,b,r)
r=r.x
if(r>0)return new A.kG(b,B.e.O(A.w(r,0,255,3,8)))}}return null},
o2(a,b,c){var s,r={},q=c.a,p=$.tP().p(0,q)
if(p==null)p=0
if(p===0)return!1
r.a=0
q=new A.oo(r,a,b)
q.$3(-1,0,3)
q.$3(1,0,3)
q.$3(0,-1,3)
q.$3(0,1,3)
q.$3(-1,-1,2)
q.$3(-1,1,2)
q.$3(1,-1,2)
q.$3(1,1,2)
r=r.a
q=$.m()
if(r<=q.T(50+p))return!1
r=c.a
s=$.v3().p(0,r)
if(s==null)s=0
c.x=q.br(s/2|0,s)
c.w=$.b6()
return a.gav().f=!0},
jn(a,b,c){var s={},r=$.U()
if((c.a.e.a&r.a)===0)return
s.a=s.b=0
r=new A.on(s,a,b)
r.$2(0,0)
r.$2(-1,0)
r.$2(1,0)
r.$2(0,-1)
r.$2(0,1)
r.$2(-1,-1)
r.$2(1,-1)
r.$2(-1,1)
r.$2(1,1)
c.w=$.bB()
c.x=B.c.P(B.e.L(s.b/s.a)-4,0,255)},
$iyt:1}
A.op.prototype={
$1(a){return t.ho.a(a).a==="Human"},
$S:30}
A.oq.prototype={
$1(a){var s=a.a
if(s.dx)this.a.ax.e.j(0,s)
B.a.j(this.b,a)},
$S:6}
A.oo.prototype={
$3(a,b,c){var s=this.c,r=this.b.f.B(s.gm()+a,s.gn()+b)
if(r.x===0)return
if(r.w===$.b6())this.a.a+=c},
$S:69}
A.on.prototype={
$2(a,b){var s=this.c,r=this.b.f.B(s.gm()+a,s.gn()+b)
s=$.U()
if((r.a.e.a&s.a)!==0){s=this.a;++s.a
if(r.w===$.bB())s.b=s.b+r.x}},
$S:71}
A.jw.prototype={
gM(){return"Fairy Dust"},
gW(){return"TODO"},
gbC(){return new A.hu($.tN())},
ak(a){var s,r,q=a.y.Q,p=q.CW.a
p.toString
s=B.e.O(A.w(p,0,50,1,20))
q=q.ay.a
q.toString
r=B.e.O(A.w(q,0,50,1,6))
return A.w5(A.bd(new A.aH(A.aQ("dust",B.y,B.aG).a7(1)),"affects",s,$.d0(),r))}}
A.lR.prototype={}
A.jA.prototype={
gM(){return"Flitter"},
gW(){return"TODO"},
gbC(){return new A.hu($.tN())},
ak(a){return new A.jD()}}
A.jD.prototype={
V(){var s,r,q=this.c
q===$&&A.b()
s=q.y
q=s.e
if(q.a>0)q.b=q.a=0
else{r=s.Q.ay.a
r.toString
q.a=B.e.O(A.w(r,0,50,3,20))
q.b=1
this.pb("{1} unfold your wings and take flight.",this.a)}return B.n}}
A.lU.prototype={}
A.ki.prototype={
hi(a){var s,r,q,p,o,n,m,l=this,k=l.c
k===$&&A.b()
k=k.x
k===$&&A.b()
k=k.w.B(a.a,a.b)
if(k==null)return null
s=t.V
r=s.a(l.a).Q.f.gcP()
q=A.a6(r,r.$ti.h("k.E"))
p=s.a(l.a).eQ(k)
for(s=l.e,o=0,n=0;n<q.length;++n){if(q[n].a.r!==l.gbw())continue
if(!(n<p.length))return A.c(p,n)
m=p[n]
m.cR(s,"mastery")
o+=m.hL(l,l.a,k)
if(k.z<=0)break}return o},
gdY(){return 1}}
A.lr.prototype={
gW(){var s=this.a
if(0>=s.length)return A.c(s,0)
return"You must have "+(B.i.G("aeiou",s[0])?"an":"a")+" "+s+" equipped."},
dI(a){if(a.y.Q.f.gcP().cZ(0,new A.rt(this)))return null
return"No "+this.a+" equipped"}}
A.rt.prototype={
$1(a){return t.W.a(a).a.r===this.a.a},
$S:9}
A.iV.prototype={
gM(){return"Ball Lightning"},
gW(){return"TODO"},
gaq(){return 8},
ar(a){return 24},
ak(a){throw A.n(A.bc(null))},
gap(){return this.a}}
A.lC.prototype={}
A.j3.prototype={
gM(){return"Chain Lightning"},
gW(){return"TODO"},
gaq(){return 6},
ar(a){return 24},
ak(a){throw A.n(A.bc(null))},
gap(){return this.a}}
A.lI.prototype={}
A.jf.prototype={
gM(){return"Crystallize"},
gW(){return"TODO"},
gaq(){return 6},
ar(a){return 24},
ak(a){throw A.n(A.bc(null))},
gap(){return this.a}}
A.lL.prototype={}
A.jp.prototype={
gM(){return"Earthwork"},
gW(){return"TODO"},
gaq(){return 10},
ar(a){return 24},
ak(a){throw A.n(A.bc(null))},
gap(){return this.a}}
A.lN.prototype={}
A.jx.prototype={
gM(){return"Fire Barrier"},
gW(){return"Creates a wall of fire."},
gaq(){return 4},
ar(a){return 45},
f7(a,b){var s,r,q,p=a.y,o=A.bd(new A.aH(A.aQ("fire",B.y,B.V).a7(1)),"burn",10+this.eh(p.Q)*3,$.b6(),8)
p=p.y
s=A.bH(o)
r=p.S(0,b)
q=Math.sqrt(r.gaF())
return new A.iW(b,-r.b/q,r.a/q,s,A.b9(t.u))},
ea(a,b){return 8},
gap(){return this.a}}
A.lS.prototype={}
A.jy.prototype={
gM(){return"Firelight"},
gW(){return"TODO"},
gaq(){return 1},
ar(a){return 4},
ak(a){throw A.n(A.bc(null))},
gap(){return this.a}}
A.lT.prototype={}
A.jG.prototype={
gM(){return"Freezing Hand"},
gW(){return"TODO"},
gaq(){return 4},
ar(a){return 24},
ak(a){throw A.n(A.bc(null))},
gap(){return this.a}}
A.lY.prototype={}
A.jN.prototype={
gM(){return"Gust"},
gW(){return"TODO"},
gaq(){return 1},
ar(a){return 4},
ak(a){throw A.n(A.bc(null))},
gap(){return this.a}}
A.m1.prototype={}
A.jO.prototype={
gM(){return"Hail Storm"},
gW(){return"TODO"},
gaq(){return 8},
ar(a){return 24},
ak(a){throw A.n(A.bc(null))},
gap(){return this.a}}
A.m2.prototype={}
A.jU.prototype={
gM(){return"Icicle"},
gW(){return"TODO"},
gaq(){return 1},
ar(a){return 12},
f7(a,b){return A.u_(b,A.bH(A.bd(new A.aH(A.aQ("icicle",B.y,B.V).a7(1)),"pierce",8+this.eh(a.y.Q)*4,$.cb(),8)),!1,null)},
ea(a,b){return 8},
gap(){return this.a}}
A.m3.prototype={}
A.jW.prototype={
gM(){return"Immolation"},
gW(){return"TODO"},
gaq(){return 6},
ar(a){return 24},
ak(a){throw A.n(A.bc(null))},
gap(){return this.a}}
A.m4.prototype={}
A.ka.prototype={
gM(){return"Lava Flow"},
gW(){return"TODO"},
gaq(){return 8},
ar(a){return 24},
ak(a){throw A.n(A.bc(null))},
gap(){return this.a}}
A.ma.prototype={}
A.kc.prototype={
gM(){return"Lightning Bolt"},
gW(){return"TODO"},
gaq(){return 4},
ar(a){return 24},
ak(a){throw A.n(A.bc(null))},
gap(){return this.a}}
A.mb.prototype={}
A.kj.prototype={
gM(){return"Melt Stone"},
gW(){return"TODO"},
gaq(){return 3},
ar(a){return 24},
ak(a){throw A.n(A.bc(null))},
gap(){return this.a}}
A.me.prototype={}
A.kN.prototype={
gM(){return"Quicksand"},
gW(){return"TODO"},
gaq(){return 8},
ar(a){return 24},
ak(a){throw A.n(A.bc(null))},
gap(){return this.a}}
A.mm.prototype={}
A.l_.prototype={
gM(){return"Sandstorm"},
gW(){return"TODO"},
gaq(){return 8},
ar(a){return 24},
ak(a){throw A.n(A.bc(null))},
gap(){return this.a}}
A.mq.prototype={}
A.l1.prototype={
gM(){return"Sparks"},
gW(){return"TODO"},
gaq(){return 1},
ar(a){return 10},
ak(a){throw A.n(A.bc(null))},
gap(){return this.a}}
A.mu.prototype={}
A.l6.prototype={
gbC(){return new A.iO(this.gap(),this.gaq())},
eh(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.gap(),r=s.length,q=a.z,p=q.a,o=0,n=0;n<s.length;s.length===r||(0,A.o)(s),++n){m=s[n]
l=p.p(0,m)
if(l==null)l=0
k=q.b.p(0,m)
j=B.c.P(l+(k==null?0:k),0,15)
if(j>=this.gaq())o+=j}return o}}
A.iO.prototype={
gW(){return"You must be at level "+this.b+" or higher in "+this.iH()+"."},
dI(a){var s,r,q,p,o,n,m,l,k
for(s=this.a,r=s.length,q=this.b,p=a.y.Q.z,o=p.a,n=0;n<s.length;s.length===r||(0,A.o)(s),++n){m=s[n]
l=o.p(0,m)
if(l==null)l=0
k=p.b.p(0,m)
if(B.c.P(l+(k==null?0:k),0,15)>=q)return null}return"Not enough "+this.iH()},
iH(){var s,r,q,p,o,n=this.a
A:{s=n.length
r=s<=0?A.a0(A.cO("Should have at least one arcanum.")):null
if(s===1){if(0>=s)return A.c(n,0)
q=n[0]
r=q.b
break A}if(s===2){if(0>=s)return A.c(n,0)
q=n[0]
if(1>=s)return A.c(n,1)
r=q.b+" or "+n[1].b
break A}if(s>=1){r=s-1
p=B.a.fv(n,0,r)
if(!(r<n.length))return A.c(n,r)
o=n[r]
r=A.M(p)
r=new A.aP(p,r.h("q(1)").a(new A.nh()),r.h("aP<1,q>")).aQ(0,", ")+", or "+o.b
break A}}return r}}
A.nh.prototype={
$1(a){return t.dx.a(a).b},
$S:87}
A.lf.prototype={
gM(){return"Tidal Wave"},
gW(){return"Summons a giant tidal wave."},
gaq(){return 5},
ar(a){return 70},
ak(a){var s=a.y,r=this.eh(s.Q),q=A.bd(new A.aH(A.aQ("wave",B.y,B.V).a7(1)),"inundate",50+r*15,$.d1(),15+r)
return A.oh(s.y,A.bH(q),new A.ae($.aY().a|$.bC().a|$.iD().a),2)},
gap(){return this.a}}
A.mB.prototype={}
A.lu.prototype={
gM(){return"Wind Ride"},
gW(){return"TODO"},
gaq(){return 3},
ar(a){return 16},
ak(a){throw A.n(A.bc(null))},
gap(){return this.a}}
A.mF.prototype={}
A.lv.prototype={
gM(){return"Windstorm"},
gW(){return"Summons a blast of air, spreading out from the sorceror."},
gaq(){return 3},
ar(a){return 36},
ak(a){var s=a.y,r=this.eh(s.Q),q=A.aQ("wind",B.y,B.V).a7(1),p=B.c.A(r,3),o=A.bd(new A.aH(q),"blast",10+r*2,$.ei(),6+p)
return A.oh(s.y,A.bH(o),$.uV(),null)},
gap(){return this.a}}
A.mG.prototype={}
A.iT.prototype={
gM(){return"Axe Sweep"},
gW(){return"TODO"},
hH(a,b){return new A.iU(b,$,A.w(a.y.Q.z.bS($.uS()),1,10,1,3))},
gbC(){return this.a}}
A.iU.prototype={
gaX(){return!1},
gbw(){return"axe"},
f6(){return new A.R(this.pf(),t.oc)},
pf(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g
return function $async$f6(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.y,n=[o.gb9(),o,o.gba()],m=0
case 3:if(!(m<3)){r=5
break}l=n[m]
k=s.a.y.F(0,l)
j=s.c
j===$&&A.b()
j=j.x
j===$&&A.b()
j=j.f
i=k.a
h=k.b
j.l(i,h)
g=j.a
i=h*j.b.b.a+i
if(!(i>=0&&i<g.length)){A.c(g,i)
r=1
break}i=g[i]
r=!i.r?6:7
break
case 6:r=8
return a.b=s.d6("You can't see where you're swinging."),1
case 8:r=1
break
case 7:j=$.U()
r=(i.a.e.a&j.a)===0?9:10
break
case 9:r=11
return a.b=s.d6("There isn't enough room to swing your weapon."),1
case 11:r=1
break
case 10:case 4:++m
r=3
break
case 5:o=[o.gb9(),o,o.gba()],m=0
case 12:if(!(m<3)){r=14
break}l=o[m]
s.jH(B.bT,l,s.a.y.F(0,l))
r=15
return a.aL(s.l5(2))
case 15:s.hi(s.a.y.F(0,l))
r=16
return a.aL(s.l5(3))
case 16:case 13:++m
r=12
break
case 14:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
t(a){return A.J(this.a)+" slashes "+this.y.t(0)}}
A.lA.prototype={}
A.lB.prototype={}
A.ja.prototype={
gM(){return"Club Bash"},
gW(){return"TODO"},
hH(a,b){return new A.jb(b,A.w(a.y.Q.z.bS($.uT()),1,15,1,2))},
gbC(){return this.a}}
A.jb.prototype={
gaX(){return!1},
gbw(){return"club"},
V(){var s,r,q,p,o,n=this,m=n.z
if(m===0){m=n.Q=n.hi(n.a.y.F(0,n.y))
if(m==null)return n.d6("There's no one there!")
else if(m===0)return B.n}else if(m===1){m=n.c
m===$&&A.b()
s=m.x
s===$&&A.b()
r=n.y
q=n.a.y.F(0,r)
q=s.w.B(q.a,q.b)
if(q==null)return B.n
p=n.a.y.F(0,r).F(0,r)
s=n.Q
s.toString
o=B.c.P(B.c.cc(300*s,q.gbq()),5,100)
s=m.x
s===$&&A.b()
if(s.bm(p,q.gb5())&&s.w.B(p.a,p.b)==null&&$.m().T(100)<o){q.dg(m,p)
q.a.a=0
n.a_("{1} is knocked back!",q)
n.jH(B.bO,r,n.a.y.F(0,r))}}return++n.z>10?B.n:B.a4},
t(a){return A.J(this.a)+" bashes "+this.y.t(0)}}
A.lK.prototype={}
A.l4.prototype={
gM(){return"Spear Stab"},
gW(){return"TODO"},
hH(a,b){return new A.l5(b,$,A.w(a.y.Q.z.bS($.v0()),1,15,1,3))},
gbC(){return this.a}}
A.l5.prototype={
gaX(){return!1},
gbw(){return"spear"},
f6(){return new A.R(this.pg(),t.oc)},
pg(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f
return function $async$f6(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.y,n=o.c,m=o.d,l=1
case 3:if(!(l<=2)){r=5
break}k=s.a.y.F(0,new A.d(n*l,m*l))
j=s.c
j===$&&A.b()
j=j.x
j===$&&A.b()
j=j.f
i=k.a
h=k.b
j.l(i,h)
g=j.a
i=h*j.b.b.a+i
if(!(i>=0&&i<g.length)){A.c(g,i)
r=1
break}i=g[i]
r=!i.r?6:7
break
case 6:r=8
return a.b=s.d6("You can't see far enough to aim."),1
case 8:r=1
break
case 7:j=$.U()
r=(i.a.e.a&j.a)===0?9:10
break
case 9:r=11
return a.b=s.d6("There isn't enough room to use your weapon."),1
case 11:r=1
break
case 10:case 4:++l
r=3
break
case 5:j=t.V,l=1
case 12:if(!(l<=2)){r=14
break}i=s.a
k=i.y.F(0,new A.d(n*l,m*l))
f=j.a(i).Q.f.gcP().gN(0)
if(!f.q())A.a0(A.cG())
s.oj(B.bU,o,f.gH(),k)
r=15
return a.b=B.a4,1
case 15:s.hi(k)
r=16
return a.b=B.a4,1
case 16:case 13:++l
r=12
break
case 14:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
t(a){return A.J(this.a)+" spears "+this.y.t(0)}}
A.mv.prototype={}
A.mw.prototype={}
A.ls.prototype={
gM(){return"Whip Crack"},
gW(){return"TODO"},
ea(a,b){return 3},
f7(a,b){var s,r,q,p,o,n,m,l,k=a.x
k===$&&A.b()
k=k.w.B(b.gm(),b.gn())
s=a.y
r=s.Q
q=r.f.gcP()
p=A.a6(q,q.$ti.h("k.E"))
o=s.eQ(k)
n=A.e2()
for(k=p.length,m=0;m<k;++m){if(p[m].a.r!=="whip")continue
if(!(m<o.length))return A.c(o,m)
n.b=o[m]
break}l=r.z.bS($.vc())
n.h2().cR(A.w(l,1,15,1,3),"whip mastery")
return A.u_(b,n.h2(),!0,3)},
gbC(){return this.a}}
A.mE.prototype={}
A.iW.prototype={
gaX(){return!1},
V(){var s,r,q=this
while(q.y<6){s={}
s.a=!1
r=new A.nm(s,q)
q.z=r.$2(q.z,1)
q.Q=r.$2(q.Q,-1)
if(s.a)return B.a4
q.y+=0.1}return B.n}}
A.nm.prototype={
$2(a,b){var s,r
if(!a)return!1
s=new A.nn(this.a,this.b,b)
r=!s.$2(0,0)||!1
if(s.$2(-0.1,0))r=!1
if(s.$2(0.1,0))r=!1
if(s.$2(0,-0.1))r=!1
return!(s.$2(0,0.1)?!1:r)},
$S:96}
A.nn.prototype={
$2(a,b){var s,r=this.b,q=r.y,p=r.e.F(0,new A.d(B.e.O(r.f*q+a),B.e.O(r.r*q+b)).aI(0,this.c))
q=r.c
q===$&&A.b()
q=q.x
q===$&&A.b()
q=q.f.B(p.a,p.b)
s=$.U()
if((q.a.e.a&s.a)===0)return!1
if(r.x.j(0,p)){r.kg(r.w,p,r.y,$.m().br(30,40))
this.a.a=!0}return!0},
$S:97}
A.lD.prototype={}
A.j_.prototype={
gaB(){var s=this.at
return s==null?this.Q.gaB():s},
kE(a,b){var s=this.Q.gb2()
this.oi(B.bG,b.S(0,a).gku(),s,b)},
hJ(a,b){var s=this
s.Q.e_(s,s.a,b,s.as)
return!0}}
A.fL.prototype={
gf1(){return 1},
V(){var s,r,q=this,p=q.gf1(),o=q.gd4()
if(q.gbe().a<=0){s=q.gbe()
s.a=o
s.b=p
q.d9()
return B.n}if(q.gbe().b>=p){o=B.c.A(B.c.cc(o*p,q.gbe().b),2)
if(o===0)return q.ej()
q.gbe().a+=o
q.da()
return B.n}r=B.c.cc(q.gbe().a*q.gbe().b,p)
s=q.gbe()
s.a=r+B.c.A(o,2)
s.b=p
q.f8()
return B.n},
f8(){}}
A.eG.prototype={
gbe(){return this.a.f},
gf1(){return this.x},
gd4(){return this.y},
d9(){return this.a_("{1} start[s] moving faster.",this.a)},
da(){return this.a_("{1} [feel]s the haste lasting longer.",this.a)},
f8(){return this.a_("{1} move[s] even faster.",this.a)}}
A.eE.prototype={
gbe(){return this.a.c},
V(){this.jW($.cb())
return this.ls()},
gf1(){return 1+B.c.A(this.x,40)},
gd4(){var s=this.x
return 3+$.m().cN(s*2,B.c.A(s,2))},
d9(){return this.a_("{1} [are|is] frozen!",this.a)},
da(){return this.a_("{1} feel[s] the cold linger!",this.a)},
f8(){return this.a_("{1} feel[s] the cold intensify!",this.a)}}
A.eX.prototype={
gbe(){return this.a.w},
gf1(){return 1+B.c.A(this.x,20)},
gd4(){var s=this.x
return 1+$.m().cN(s,B.c.A(s,2))},
d9(){return this.a_("{1} [are|is] poisoned!",this.a)},
da(){return this.a_("{1} feel[s] the poison linger!",this.a)},
f8(){return this.a_("{1} feel[s] the poison intensify!",this.a)}}
A.el.prototype={
gbe(){return this.a.b},
gd4(){var s=this.x
return 3+$.m().cN(s*2,B.c.A(s,2))},
d9(){this.a_("{1 his} vision dims!",this.a)
var s=this.c
s===$&&A.b()
s=s.x
s===$&&A.b()
s.gav().w=!0},
da(){return this.a_("{1 his} vision dims!",this.a)}}
A.ev.prototype={
gbe(){return this.a.d},
gd4(){var s=this.x
return 3+$.m().cN(s*2,B.c.A(s,2))},
d9(){return this.a_("{1} [are|is] dazzled by the light!",this.a)},
da(){return this.a_("{1} [are|is] dazzled by the light!",this.a)}}
A.f3.prototype={
gbe(){return this.a.fe(this.y)},
gd4(){return this.x},
d9(){var s,r,q=this
q.a_("{1} [are|is] resistant to "+q.y.t(0)+".",q.a)
s=q.a
r=s.w
if(r.a>0){r.b=r.a=0
q.a_("{1} [are|is] no longer poisoned.",s)}},
da(){return this.a_("{1} feel[s] the resistance extend.",this.a)}}
A.lW.prototype={}
A.ex.prototype={
aK(){return"DetectType."+this.b}}
A.ew.prototype={
gm4(){var s,r=this,q=r.r
if(q===$){s=r.m3()
r.r!==$&&A.eg()
r.r=s
q=s}return q},
gaX(){return!1},
V(){var s,r,q=this.gm4()
if(q.length===0)return B.n
for(q=J.aq(B.a.kQ(q));q.q();){s=q.gH()
r=this.c
r===$&&A.b()
r=r.x
r===$&&A.b()
r.d5(s.gm(),s.gn(),!0)
this.hg(B.bI,s)}return B.a4},
m3(){var s,r,q,p,o,n,m,l,k=this,j={},i=A.C(t.S,t.A),h=new A.nG(k,i),g=k.e,f=0
if(g.G(0,B.as)){s=k.c
s===$&&A.b()
r=s.x
r===$&&A.b()
r=A.ab(r.f.b)
while(r.q()){q=r.b
p=r.c
o=s.x
o===$&&A.b()
o=o.f
o.l(q,p)
n=o.a
m=p*o.b.b.a+q
if(!(m>=0&&m<n.length))return A.c(n,m)
m=n[m]
if(m.r)continue
o.l(q,p)
if(m.a.b!==B.aU)continue;++f
h.$1(new A.d(q,p))}}j.a=0
if(g.G(0,B.aw)){g=k.c
g===$&&A.b()
g=g.x
g===$&&A.b()
g.f_(new A.nI(j,k,h))}if(f>0){g=j.a
s=k.a
if(g>0)k.a_("{1} sense[s] hidden secrets in the dark!",s)
else k.a_("{1} sense[s] places to escape!",s)}else if(j.a>0)k.a_("{1} sense[s] the treasures held in the dark!",k.a)
else k.ll("The darkness holds no secrets.")
g=i.$ti.h("b2<1>")
l=A.a6(new A.b2(i,g),g.h("k.E"))
B.a.dj(l,new A.nJ())
g=A.M(l)
s=g.h("aP<1,D<d>>")
g=A.a6(new A.aP(l,g.h("D<d>(1)").a(new A.nK(i)),s),s.h("aG.E"))
return g}}
A.nG.prototype={
$1(a){var s=this.a,r=s.a.y.S(0,a).gaF()
s=s.f
if(s!=null)s=r>s*s
else s=!1
if(s)return
s=this.b
s.b7(r,new A.nH())
s=s.p(0,r)
s.toString
J.vh(s,a)},
$S:10}
A.nH.prototype={
$0(){return A.a([],t.l)},
$S:46}
A.nI.prototype={
$2(a,b){var s=this.b.c
s===$&&A.b()
s=s.x
s===$&&A.b()
if(s.f.B(b.gm(),b.gn()).r)return;++this.a.a
this.c.$1(b)},
$S:16}
A.nJ.prototype={
$2(a,b){A.u(a)
return B.c.ai(A.u(b),a)},
$S:48}
A.nK.prototype={
$1(a){var s=this.a.p(0,A.u(a))
s.toString
return s},
$S:138}
A.ez.prototype={
V(){var s=this,r=t.V,q=r.a(s.a),p=q.ay
if(p===400)s.a_("{1} [are|is] already full!",q)
else if(p+s.e>400)s.a_("{1} [are|is] stuffed!",q)
else s.a_("{1} feel[s] satiated.",q)
r=r.a(s.a)
r.ay=B.c.P(r.ay+s.e,0,400)
return B.n}}
A.fR.prototype={
kg(a,b,c,d){var s,r,q=this
q.oe(B.bH,a.gb2(),b)
s=q.c
s===$&&A.b()
s=s.x
s===$&&A.b()
s=s.w.B(b.gm(),b.gn())
if(s!=null&&s!==q.a)a.e_(q,q.a,s,!1)
r=a.gb2().r.$4(b,a,c,d)
if(r!=null)q.he(r)},
kf(a,b,c){return this.kg(a,b,c,0)}}
A.eo.prototype={
V(){var s,r
this.jW($.b6())
s=this.a
r=s.c
if(r.a>0){r.b=r.a=0
return this.cw("The fire warms {1} back up.",s)}return B.n}}
A.ep.prototype={
V(){var s,r,q=this,p=q.e,o=$.b6(),n=q.r+q.hm(p,o),m=q.c
m===$&&A.b()
s=m.x
s===$&&A.b()
p=s.f.B(p.gm(),p.gn())
s=p.a
r=$.tP().p(0,s)
if(r==null)r=0
if(n<=0)s=r>0&&q.f>$.m().T(r)
else s=!0
if(s){s=p.a
s=$.v3().p(0,s)
n+=s==null?0:s
s=$.m().br(B.c.A(n,2),n)
p.x=s
s-=B.c.A(q.f,4)
p.x=s
if(s<=0)p.x=1
p.w=o
p=m.x
p===$&&A.b()
p.gav().f=!0}return B.n}}
A.j2.prototype={
V(){var s,r,q=this,p=q.c
p===$&&A.b()
s=p.x
s===$&&A.b()
r=q.e
s=s.w.B(r.gm(),r.gn())
if(s!=null)A.bH(A.bd(new A.aH(A.aQ("fire",B.y,B.aG).a7(1)),"burns",10,$.b6(),null)).e_(q,null,s,!1)
p=p.x
p===$&&A.b()
p=p.f.B(r.gm(),r.gn())
p.x=p.x+q.hm(r,$.b6())
return B.n}}
A.eF.prototype={
V(){this.hm(this.e,$.cb())
return B.n}}
A.eY.prototype={
V(){var s,r=this.c
r===$&&A.b()
r=r.x
r===$&&A.b()
s=this.e
s=r.f.B(s.gm(),s.gn())
if(s.w===$.b6()&&s.x>0)return B.n
r=$.U()
if((s.a.e.a&r.a)!==0){s.w=$.bB()
s.x=B.c.P(s.x+this.f*4,0,255)}return B.n}}
A.kG.prototype={
V(){var s,r=this,q=r.c
q===$&&A.b()
q=q.x
q===$&&A.b()
s=r.e
s=q.w.B(s.gm(),s.gn())
if(s!=null){q=$.bB()
if(s.c6(q)>0)r.a_("{1} [are|is] unaffected by the poison.",s)
else A.bH(A.bd(new A.aH(A.aQ("poison",B.y,B.aG).a7(1)),"chokes",r.f,q,null)).e_(r,null,s,!1)}return B.n}}
A.ff.prototype={
gaX(){return!1},
V(){var s,r,q=this,p=q.a,o=(p.gb5().a&$.U().a)!==0?6:3,n=p.gb5(),m=$.bC(),l=q.c
l===$&&A.b()
s=l.x
s===$&&A.b()
m=A.cm(s,p.y,new A.ae(n.a&~m.a),null,null,o).gcI()
n=m.$ti
p=n.h("ak<k.E>")
r=A.a6(new A.ak(m,n.h("A(k.E)").a(new A.ru(q)),p),p.h("k.E"))
if(r.length===0)return B.bz
q.a_("{1} [are|is] thrown by the wind!",q.a)
p=q.a
q.jG(B.bX,p,p.y)
p=q.a
p.toString
n=$.m()
t.A.a(r)
n=n.T(r.length)
if(!(n>=0&&n<r.length))return A.c(r,n)
p.dg(l,t.u.a(r[n]))
return B.n}}
A.ru.prototype={
$1(a){var s
t.u.a(a)
s=this.a.c
s===$&&A.b()
s=s.x
s===$&&A.b()
return s.w.B(a.gm(),a.gn())==null},
$S:1}
A.eN.prototype={
V(){var s,r,q=this.c
q===$&&A.b()
s=q.x
s===$&&A.b()
r=this.e
s.f.B(r.gm(),r.gn()).oc(this.f)
q=q.x
q===$&&A.b()
q.gav().f=!0
return B.n}}
A.lF.prototype={}
A.lG.prototype={}
A.lH.prototype={}
A.lX.prototype={}
A.mh.prototype={}
A.mi.prototype={}
A.jC.prototype={
gaX(){return!1},
V(){var s,r,q,p,o,n=this,m=(n.z+1)%n.y
n.z=m
if(m!==0)return B.a4
m=n.w
if(m==null){m=n.c
m===$&&A.b()
m=m.x
m===$&&A.b()
m=A.cm(m,n.e,n.x,!1,null,null)
n.r!==$&&A.as()
n.r=m
m=m.gcI()
s=m.$ti
r=s.h("hQ<k.E>")
m=A.a6(new A.hQ(m,s.h("A(k.E)").a(new A.oi(n)),r),r.h("k.E"))
n.w=m}s=n.r
s===$&&A.b()
m=s.cj(B.a.gaw(m))
m.toString
for(q=0;r=n.w,q<r.length;++q)if(s.cj(r[q])!==m)break
s=n.w
s.toString
s=B.a.fv(s,0,q)
r=s.length
p=n.f
o=0
for(;o<s.length;s.length===r||(0,A.o)(s),++o)n.kf(p,s[o],m)
m=n.w
m.toString
m=B.a.lr(m,q)
n.w=m
if(m.length===0)return B.n
return B.a4}}
A.oi.prototype={
$1(a){var s,r
t.u.a(a)
s=this.a
r=s.r
r===$&&A.b()
r=r.cj(a)
r.toString
return r<=s.f.gaB()},
$S:1}
A.eD.prototype={
V(){var s=this
return s.bd(A.oh(s.a.y,A.bH(s.e),s.f,null))}}
A.eC.prototype={
V(){var s=this
return s.bd(A.oh(s.f,A.bH(s.e),s.r,null))}}
A.lV.prototype={}
A.eH.prototype={
V(){var s=this,r=s.a,q=r.w,p=q.a>0&&s.f
if(p){q.b=q.a=0
s.a_("{1} [are|is] cleansed of poison.",r)}r=s.a
if(r.z!==r.gbq()&&s.e>0){r=s.a
q=s.e
r.z=B.c.P(r.z+q,0,r.gbq())
s.od(B.bL,s.a,q)
s.a_("{1} feel[s] better.",s.a)
p=!0}if(p)return B.n
else return s.cw("{1} [don't|doesn't] feel any different.",s.a)}}
A.jS.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i=this
i.a_("{1} "+i.f+"!",i.a)
i.cB(B.bN,i.a)
s=i.c
s===$&&A.b()
r=s.x
r===$&&A.b()
r=r.b
q=r.length
p=t.B
o=i.e
n=0
for(;n<r.length;r.length===q||(0,A.o)(r),++n){m=r[n]
l=i.a
if(m!==l&&m instanceof A.aa&&m.y.S(0,p.a(l).y).eb(0,o)){k=s.x
k===$&&A.b()
l=l.y
j=m.y
j=k.geF().pG(l,j)
j=m.ch+j*m.Q.x
m.ch=j
m.ch=B.e.P(j,0,1)}}return B.n}}
A.jV.prototype={
kK(a){this.hN(a,0)},
hN(a,b){var s,r,q=this.c
q===$&&A.b()
s=q.x
s===$&&A.b()
s=s.f.B(a.gm(),a.gn())
r=A.kb(3)
s.f=Math.max(s.f,r)
q=q.x
q===$&&A.b()
q.gav().f=!0},
gaB(){return this.at}}
A.eI.prototype={
gaX(){return!1},
V(){var s,r,q=this,p=q.c
p===$&&A.b()
s=p.x
s===$&&A.b()
r=q.a.y
r=s.f.B(r.gm(),r.gn())
s=A.kb(3)
r.f=Math.max(r.f,s)
p=p.x
p===$&&A.b()
p.gav().f=!0
p=q.a.y
s=new A.jV(q.e,p,p,A.b9(t.u),A.a([],t.gk))
s.im(p,p,1)
return q.bd(s)}}
A.eO.prototype={
gnQ(){var s,r=this,q=r.w
if(q===$){s=r.mx()
r.w!==$&&A.eg()
r.w=s
q=s}return q},
gaX(){return!1},
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(s=f.f,r=0;r<2;++r){q=f.r
p=f.gnQ()
o=p.length
if(q>=o)return B.n
q=f.r
if(!(q<o))return A.c(p,q)
q=p[q]
p=q.length
n=0
for(;n<q.length;q.length===p||(0,A.o)(q),++n){m=q[n]
o=f.c
o===$&&A.b()
l=o.x
l===$&&A.b()
l.d5(m.gm(),m.gn(),!0)
f.hg(B.bP,m)
if(s){l=o.x
l===$&&A.b()
l=l.f
k=m.gm()
j=m.gn()
l.l(k,j)
i=l.a
k=j*l.b.b.a+k
if(!(k>=0&&k<i.length))return A.c(i,k)
k=i[k]
k.f=B.c.P(k.f+255,0,192)
k=o.x
k===$&&A.b()
k.gav().f=!0}for(l=m.gbB(),k=l.length,h=0;h<l.length;l.length===k||(0,A.o)(l),++h){g=l[h]
j=o.x
j===$&&A.b()
j.d5(g.a,g.b,!0)}}++f.r}return B.a4},
mx(){var s,r,q,p,o,n,m=this,l=t.l,k=A.a([A.a([],l)],t.G)
if(0>=k.length)return A.c(k,0)
B.a.j(k[0],m.a.y)
s=m.c
s===$&&A.b()
s=s.x
s===$&&A.b()
r=m.a.y
q=m.e
p=new A.kh(q,s,r,new A.ci(A.a([],t.c),t.r),A.a([],l))
p.fB(s,r,q)
for(s=p.gcI(),r=s.$ti,s=new A.ah(s.a(),r.h("ah<1>")),r=r.c;s.q();){q=s.b
if(q==null)q=r.a(q)
o=p.cj(q)
o.toString
for(n=k.length;n<=o;++n)B.a.j(k,A.a([],l))
if(!(o>=0&&o<k.length))return A.c(k,o)
B.a.j(k[o],q)}for(l=t.A,n=0;n<k.length;++n){s=$.m()
B.a.bL(l.a(k[n]),s.a)}return k}}
A.kh.prototype={
hW(a,b,c,d){var s=$.xp()
if((c.a.e.a&s.a)===0)return null
if(a>=this.r*2)return null
return d?3:2}}
A.dQ.prototype={
aK(){return"Missive."+this.b}}
A.kk.prototype={
gdY(){return 1},
V(){var s,r=this,q=$.m(),p=B.i2.p(0,r.f)
p.toString
t.m.a(p)
s=p.length
q=q.T(s)
if(!(q>=0&&q<s))return A.c(p,q)
return r.fw(p[q],r.a,r.e)}}
A.eV.prototype={
gaX(){return!1},
V(){var s,r,q,p,o,n,m=this,l=A.b9(t.f0),k=m.c
k===$&&A.b()
s=k.x
s===$&&A.b()
s=s.b
r=s.length
q=t.V
p=0
for(;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
if(o===q.a(m.a))continue
if(k.cF(o))l.j(0,o)}s=q.a(m.a).r
s.a=m.e
s.b=m.f
s=k.x
s===$&&A.b()
s=s.b
r=s.length
n=!1
p=0
for(;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
if(o===q.a(m.a))continue
if(k.cF(o)&&!l.G(0,o)){m.cB(B.bR,o)
n=!0}}k=m.a
if(n)return m.cw("{1} perceive[s] monsters beyond your sight!",k)
else return m.cw("{1} do[es]n't perceive anything.",k)}}
A.kH.prototype={
V(){var s=this,r=t.B.a(s.a),q=s.e
r.Q=q
r.z=B.c.P(B.c.P(r.z,0,q.f),0,r.gbq())
r.ax.aU(0)
r.h5()
s.cB(B.bS,s.a)
return B.n}}
A.iN.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.he(new A.kH(g.e))
g.a_(g.r,g.a)
s=A.a([],t.l)
for(r=g.f,q=r.at,p=0;p<8;++p){o=B.a6[p]
n=g.a.y.F(0,o)
m=g.c
m===$&&A.b()
m=m.x
m===$&&A.b()
if(m.bm(n,q)){m=m.w
l=n.a
k=n.b
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.c(j,l)
l=j[l]==null
m=l}else m=!1
if(m)B.a.j(s,n)}q=s.length
if(q!==0){m=$.m()
t.A.a(s)
q=m.T(q)
if(!(q>=0&&q<s.length))return A.c(s,q)
i=r.fs(s[q],t.B.a(g.a))
h=new A.cx()
i.at=h
h.a=i
q=g.c
q===$&&A.b()
q=q.x
q===$&&A.b()
q.dD(i)
g.cB(B.b2,i)}return B.n}}
A.kR.prototype={
gaX(){return!1},
im(a,b,c){var s,r,q,p,o,n,m,l=this,k=B.e.aT(6.283185307179586*l.gaB()*c*2)
if(c<1){s=l.f
r=l.e
q=s.S(0,r)
p=!r.Z(0,s)?Math.atan2(q.a,q.b):0
for(s=k-1,r=l.x,o=6.283185307179586*c,n=0;n<k;++n)B.a.j(r,p+(n/s-0.5)*o)}else{m=6.283185307179586/k
for(s=l.x,n=0;n<k;++n)B.a.j(s,n*m)}},
V(){var s,r=this
if(r.w===0){r.kK(r.e);++r.w
return B.a4}s=r.x
B.a.hP(s,new A.q8(r))
if(++r.w>r.gaB()||s.length===0)return B.n
return B.a4},
kK(a){}}
A.q8.prototype={
$1(a){var s,r,q,p,o,n
A.bA(a)
s=this.a
r=s.e
q=r.gm()+B.e.O(Math.sin(a)*s.w)
p=r.gn()+B.e.O(Math.cos(a)*s.w)
o=new A.d(q,p)
n=s.c
n===$&&A.b()
n=n.x
n===$&&A.b()
p=n.f.B(q,p)
q=$.U()
if((p.a.e.a&q.a)===0)return!0
if(!s.r.j(0,o))return!1
s.hN(o,Math.sqrt(o.S(0,r).gaF()))
return!1},
$S:144}
A.kQ.prototype={
gaB(){return this.at.gaB()},
hN(a,b){this.kf(this.at,a,b)}}
A.f6.prototype={
gaX(){return!1},
V(){var s=this.a.y
return this.bd(A.ug(A.bH(this.e),s,s,1))}}
A.f5.prototype={
gaX(){return!1},
V(){var s=this.f
return this.bd(A.ug(A.bH(this.e),s,s,1))}}
A.mo.prototype={}
A.l2.prototype={
V(){var s,r=this,q=t.B
if($.m().T(q.a(r.a).as)!==0)return B.n
q=q.a(r.a);++q.as
s=r.f.fs(r.e,q)
q=r.c
q===$&&A.b()
q=q.x
q===$&&A.b()
q.dD(s)
r.cB(B.b2,s)
return B.n}}
A.fc.prototype={
V(){var s,r,q,p,o,n,m,l=this,k=A.a([],t.l),j=l.a.y,i=l.e,h=j.gm()-i,g=j.gn()-i,f=j.gm(),e=j.gn(),d=l.c
d===$&&A.b()
s=d.x
s===$&&A.b()
for(h=A.ab(A.w4(new A.Z(new A.d(h,g),new A.d(f+i-h,e+i-g)),s.f.b));h.q();){g=h.b
f=h.c
r=new A.d(g,f)
e=d.x
e===$&&A.b()
s=l.a
q=s.cp()
if(e.bm(r,s.e.a>0?new A.ae(q.a|$.U().a):q)){s=e.w
s.l(g,f)
p=s.a
s=f*s.b.b.a+g
if(!(s>=0&&s<p.length))return A.c(p,s)
s=p[s]==null}else s=!1
if(s){e=e.f
e.l(g,f)
s=e.a
g=f*e.b.b.a+g
if(!(g>=0&&g<s.length))return A.c(s,g)
g=s[g].x===0}else g=!1
if(!g)continue
if(r.S(0,l.a.y).bh(0,i))continue
B.a.j(k,r)}i=k.length
if(i===0)return l.dR("{1} couldn't escape.",l.a)
h=$.m()
t.A.a(k)
i=h.T(i)
g=k.length
if(!(i>=0&&i<g))return A.c(k,i)
o=k[i]
for(i=g,n=0;n<10;++n,i=g){i=h.a.a1(i)
g=k.length
if(!(i>=0&&i<g))return A.c(k,i)
r=k[i]
i=l.a.y
if(r.S(0,i).bh(0,o.S(0,i)))o=r}i=l.a
m=i.y
i.dg(d,o)
l.jG(B.bV,l.a,m)
return l.cw("{1} teleport[s]!",l.a)}}
A.mg.prototype={
V(){var s,r,q,p=this,o=p.c
o===$&&A.b()
s=o.x
s===$&&A.b()
r=p.e
s.f.B(r.gm(),r.gn()).a=p.gj6()
p.hg(B.bQ,r)
s=$.m()
q=B.e.O(A.w(o.w,1,100,p.gj1(),p.gj0()))
if(s.T(100)<q)p.a_("The "+p.gfZ()+" is empty.",p.a)
else{s=o.x
s===$&&A.b()
s.e0(r,p.iE(),o.w)
p.a_("{1} open[s] the "+p.gfZ()+".",p.a)}return B.n}}
A.eS.prototype={
gfZ(){return"barrel"},
gj6(){return $.tS()},
gj1(){return 40},
gj0(){return 10},
iE(){var s=this.c
s===$&&A.b()
return A.a7("food",s.w,null)}}
A.eT.prototype={
gfZ(){return"chest"},
gj6(){return $.tT()},
gj1(){return 20},
gj0(){return 2},
iE(){var s=this.c
s===$&&A.b()
return A.wm(A.B([A.a7("treasure",s.w,null),0.5,A.a7("magic",s.w,null),0.2,A.a7("equipment",s.w,null),0.3],t.iZ,t.i))}}
A.jo.prototype={
gM(){return"Dual Wield"},
gW(){return"Attack with a weapon in each hand as effectively as lesser weaklings do with only a single weapon in their puny arms."},
kr(a,b,c){var s=t.aa.a(b).length
if(s===0)return c
return c/s}}
A.jF.prototype={
gM(){return"Foolhardy"},
gW(){return"An aura of good luck makes you 10% harder to hit."},
eR(a){return B.hZ}}
A.fN.prototype={}
A.jH.prototype={
oB(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=this.a,r=s.b.b,q=r.b,r=r.a,p=s.a,o=p.length,n=a2.b,m=n.b.f,l=m.a,k=m.b,j=k.b.a,i=l.length,n=n.d,h=n.a,g=n.b.b.a,f=h.length,e=a2.c,d=0;d<q;++d)for(c=d*r,b=0;b<r;++b){a=a3.gm()+b
a0=a3.gn()+d
if(!k.G(0,new A.d(a,a0)))return!1
n.l(a,a0)
a1=a0*g+a
if(!(a1>=0&&a1<f))return A.c(h,a1)
if(h[a1]!=e)return!1
s.l(b,d)
a1=c+b
if(!(a1>=0&&a1<o))return A.c(p,a1)
a1=p[a1]
m.l(a,a0)
a=a0*j+a
if(!(a>=0&&a<i))return A.c(l,a)
if(!a1.pe(l[a].a))return!1}return!0},
pl(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
for(s=this.a,r=s.b.b,q=r.b,r=r.a,p=s.a,o=p.length,n=a.b.b.f,m=n.a,l=n.b.b.a,k=m.length,j=0;j<q;++j)for(i=j*r,h=0;h<r;++h){s.l(h,j)
g=i+h
if(!(g>=0&&g<o))return A.c(p,g)
g=p[g]
f=b.gm()+h
e=b.gn()+j
g=g.a
if(g!=null){n.l(f,e)
f=e*l+f
if(!(f>=0&&f<k))return A.c(m,f)
m[f].a=g;++a.d}}}}
A.fJ.prototype={
pe(a){var s=this.b
if(s!=null)s=(a.e.a&s.a)===0
else s=!1
if(s)return!1
s=this.c
if(s.length!==0&&!B.a.G(s,a))return!1
return!0}}
A.dk.prototype={
aK(){return"Symmetry."+this.b}}
A.tp.prototype={
$1(a){return B.i.l_(A.a2(a))},
$S:4}
A.nS.prototype={
$1(a){A.u(a)
return new A.ff()},
$S:67}
A.nW.prototype={
$1(a){A.u(a)
return new A.eo()},
$S:51}
A.nX.prototype={
$4(a,b,c,d){t.u.a(a)
t.Z.a(b)
A.e7(c)
A.u(d)
return new A.ep(a,B.e.L(b.gd_()),d)},
$S:53}
A.nT.prototype={
$1(a){return new A.eE(A.u(a))},
$S:55}
A.nU.prototype={
$4(a,b,c,d){t.u.a(a)
t.Z.a(b)
A.e7(c)
A.u(d)
return new A.eF(a)},
$S:72}
A.o_.prototype={
$1(a){return new A.eX(A.u(a))},
$S:74}
A.o0.prototype={
$4(a,b,c,d){t.u.a(a)
t.Z.a(b)
A.e7(c)
A.u(d)
return new A.eY(a,B.e.L(b.gd_()))},
$S:77}
A.nV.prototype={
$1(a){return new A.el(A.u(a))},
$S:88}
A.nY.prototype={
$1(a){return new A.ev(A.u(a))},
$S:89}
A.nZ.prototype={
$4(a,b,c,d){var s,r
t.u.a(a)
t.Z.a(b)
A.e7(c)
A.u(d)
s=B.c.P(1+B.e.L(b.gd_())*4,0,255)
r=B.e.P(128+b.gd_()*16,0,255)
return new A.eN(a,B.e.L(A.w(b.gaB()-c,0,b.gaB(),s,r)))},
$S:90}
A.rB.prototype={
ct(a,b,c,d){var s=this
s.d=b
s.c=c
s.e=d
s.z=a},
bF(a,b,c){return this.ct(a,b,null,c)},
pA(a){return this.ct(a,null,null,null)},
e7(a,b,c){return this.ct(null,a,b,c)},
cs(a,b){return this.ct(a,null,null,b)},
aa(a){return this.ct(null,a,null,null)},
kY(a){return this.ct(null,null,null,a)},
fi(a,b){return this.ct(null,a,null,b)}}
A.nr.prototype={
a3(a){var s,r,q,p,o=this,n="item/"+a
$.bk().c3(n)
s=A.a(a.split("/"),t.s)
r=B.a.gcG(s)
o.ay!==$&&A.as()
o.ay=r
if(B.a.G(s,"shield")||B.a.G(s,"light"))o.at="hand"
else if(B.a.G(s,"weapon")){o.at="hand"
r=B.a.c4(s,"weapon")+1
if(!(r>=0&&r<s.length))return A.c(s,r)
o.ax=s[r]}else for(q=0;q<8;++q){p=B.hY[q]
if(B.a.G(s,p)){o.at=p
break}}$.dt().c3(n)
$.du().c3(n)}}
A.oL.prototype={
E(a,b){var s,r=this
r.dy!==$&&A.as()
r.dy=a
s=b==null?100:b
r.fr!==$&&A.as()
r.fr=s},
v(a){return this.E(a,null)},
ki(a){var s
t.kc.a(a)
s=A.vj(this.Q+" intrinsic affix",null,0)
a.$1(s)
this.dx=s.el()},
a6(a,b){var s=$.aU.u().as
s.toString
this.ay=A.bd(null,s,a,null,null)
this.cx=b},
eZ(a){this.ax=new A.bJ("Provides "+a+" turns of food.",t.Y.a(new A.oR(a)))},
eS(a,b){var s,r,q
t.jP.a(a)
s=a.length
if(s===1){if(0>=s)return A.c(a,0)
r=a[0]===B.as?"exits":"items"}else r="exits and items"
q="Detects "+r
if(b!=null)q+=" up to "+A.J(b)+" steps away"
this.ax=new A.bJ(q+".",t.Y.a(new A.oO(a,b)))},
hn(a){return this.eS(a,null)},
kI(a,b){this.ax=new A.bJ("Perceives the location of monsters, even those that are otherwise hidden.",t.Y.a(new A.oW(b,a)))},
hK(a){return this.kI(a,5)},
bD(a){this.ax=new A.bJ("Grantes resistance to "+a.t(0)+" for 40 turns.",t.Y.a(new A.oX(a)))},
km(a,b){var s="Imparts knowledge of the dungeon up to "+a+" steps from the hero."
if(b)s+=" Illuminates the dungeon."
this.ax=new A.bJ(s,t.Y.a(new A.oV(a,b)))},
hD(a){return this.km(a,!1)},
hz(a,b){this.ax=new A.bJ("Raises speed by "+a+" for "+b+" turns.",t.Y.a(new A.oS(a,b)))},
fh(a){this.ax=new A.bJ("Attempts to teleport up to "+a+" steps away.",t.Y.a(new A.oY(a)))},
dU(a,b){this.ax=new A.bJ("Instantly heals "+a+" lost health.",t.Y.a(new A.oT(a,b)))},
kb(a){return this.dU(a,!1)},
dF(a,b,c,d){var s=A.bd(new A.aH(A.aQ(b,B.y,B.V).a7(1)),c,d,a,3)
this.ax=new A.bJ("Unleashes a ball of "+a.t(0)+" that inflicts "+d+" damage out to 3 steps from the hero.",t.Y.a(new A.oM(s)))
this.f=t.bj.a(new A.oN(s))},
dS(a,b,c,d,e){var s={},r=A.bd(new A.aH(A.aQ(b,B.y,B.V).a7(1)),c,d,a,5),q=$.aY()
s.a=q
if(e)s.a=new A.ae(q.a|$.U().a)
this.ax=new A.bJ("Unleashes a flow of "+a.t(0)+" that inflicts "+d+" damage out to 5 steps from the hero.",t.Y.a(new A.oP(s,r)))
this.f=t.bj.a(new A.oQ(s,r))},
k9(a,b,c,d){return this.dS(a,b,c,d,!1)},
d8(a,b){this.r=a
if(b!=null)this.ax=new A.bJ("Illuminates out to a range of "+A.J(b)+".",t.Y.a(new A.oU(b)))},
pa(a){return this.d8(a,null)},
el(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=A.cD($.aU.u().Q,a3.as,null),a5=a3.d
if(a5==null)a5=$.aU.u().d
if(a5!=null){s=A.aQ(a3.Q.toLowerCase(),B.y,B.V).a7(1)
r=$.aU.u().as
A:{if(r!=null){q=A.vW(r,B.y)
break A}q="hits"
break A}p=a3.e
if(p==null)p=$.aU.u().e
o=a3.c
if(o==null)o=$.aU.u().c
if(o==null)o=$.az()
n=A.bd(new A.aH(s),q,a5,o,p)
p=$.aU.u().z
s=p==null?a3.z:p
if(s==null)s=0
q=a3.f
m=new A.rn(s,n,q==null?$.aU.u().f:q)}else m=null
s=a3.db?B.cl:B.V
s=A.aQ(a3.Q,B.y,s)
q=a3.dy
q===$&&A.b()
p=$.vJ
$.vJ=p+1
o=$.aU.u().at
l=$.aU.u().ax
k=a3.ax
j=a3.ay
i=a3.ch
h=a3.cy
if(h==null)h=0
g=a3.b
if(g==null)g=$.aU.u().b
if(g==null)g=1
f=a3.dx
e=a3.CW
if(e==null)e=0
d=a3.cx
if(d==null)d=0
c=a3.r
if(c==null)c=$.aU.u().r
b=a3.w
if(b==null)b=$.aU.u().w
a=$.aU.u().ch
a0=$.aU.u().y
if(a0==null)a0=a3.y
a1=a3.db
a2=A.C(t.h,t.S)
if(c==null)c=0
if(b==null)b=0
a2.U(0,$.aU.u().a)
a2.U(0,a3.a)
return new A.aN(s,a4,q,p,o,a0===!0,l,k,j,m,i,h,a3.at,e,d,c,a,g,a2,b,f,a1)}}
A.oR.prototype={
$0(){return new A.ez(this.a)},
$S:100}
A.oO.prototype={
$0(){var s=this.a
return new A.ew(A.yY(s,A.M(s).c),this.b)},
$S:102}
A.oW.prototype={
$0(){return new A.eV(this.a,this.b)},
$S:104}
A.oX.prototype={
$0(){return new A.f3(40,this.a)},
$S:105}
A.oV.prototype={
$0(){return new A.eO(this.a,this.b)},
$S:107}
A.oS.prototype={
$0(){return A.vG(this.a,this.b)},
$S:112}
A.oY.prototype={
$0(){return A.wg(this.a)},
$S:114}
A.oT.prototype={
$0(){return A.vH(this.a,this.b)},
$S:116}
A.oM.prototype={
$0(){return A.w5(this.a)},
$S:117}
A.oN.prototype={
$1(a){return new A.f5(this.a,a)},
$S:118}
A.oP.prototype={
$0(){return new A.eD(this.b,this.a.a)},
$S:127}
A.oQ.prototype={
$1(a){return new A.eC(this.b,a,this.a.a)},
$S:135}
A.oU.prototype={
$0(){return new A.eI(this.a)},
$S:73}
A.cf.prototype={
E(a,b){this.c=a
this.d=b==null?100:b},
v(a){return this.E(a,null)},
J(a,b){var s=t.Q.a(new A.nb(a)),r=t.oF.a(new A.nc(b))
this.at=s
this.ax=r},
Y(a,b,c){var s={}
s.a=c
if(c==null)s.a=a
this.f=new A.na(s,a,b)},
b6(a,b){return this.Y(a,b,null)},
pj(a){return this.Y(a,null,null)},
pk(a,b){return this.Y(a,null,b)},
bA(a){this.r=new A.n9(a)},
bG(a){this.w=new A.ne(a)},
dL(a,b){t.hM.a(b)
t.lg.a(a)
if(b!=null)this.y=b
if(a!=null)this.z=a},
aC(a){return this.dL(null,a)},
dK(a){return this.dL(a,null)},
ci(a,b){this.Q=a
this.ay.i(0,a,new A.n8(b))},
bz(a){return this.ci(a,null)},
bu(a,b){var s
t.lg.a(b)
s=this.ay
if(b!=null)s.i(0,a,b)
else s.i(0,a,new A.nd())},
R(a){return this.bu(a,null)},
el(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a,a0=b.b
if(a0!=null){s=$.be
r=A.bj(a,"_","["+A.J(s)+"]")
for(s=r+" (",q=r,p=1;a0.c9(q)!=null;){++p
q=s+p+")"}}else q=a
o=B.i.dQ(a," _")
n=B.i.l_(A.bj(a,"_",""))
s=$.vk
$.vk=s+1
m=b.f
l=b.r
k=b.w
j=b.y
i=b.z
h=b.Q
g=b.as
f=b.at
e=b.ax
d=t.Q
if(l==null)l=A.uA()
if(k==null)k=A.mJ()
if(j==null)j=A.uA()
if(i==null)i=A.mJ()
if(g==null)g=A.mJ()
if(h==null)h=$.az()
if(e==null)e=A.uA()
if(f==null)f=A.mJ()
c=new A.ek(q,n,o,s,m,l,k,A.mJ(),j,i,g,h,A.C(t.h,d),A.C(t.X,d),f,e,b.CW)
b.ay.ae(0,c.glg())
b.ch.ae(0,c.gli())
return c}}
A.nb.prototype={
$1(a){return this.a},
$S:5}
A.nc.prototype={
$1(a){return this.a},
$S:17}
A.na.prototype={
$0(){var s,r,q,p=$.m().aA(this.b,this.a.a),o=this.c
if(o!=null){s=0
for(;;){r=s+1
if(s<10){q=$.m()
q=q.a.a1(o)===0}else q=!1
if(!q)break;++p
s=r}}return p},
$S:2}
A.n9.prototype={
$1(a){A.u(a)
return this.a},
$S:17}
A.ne.prototype={
$1(a){A.u(a)
return this.a},
$S:5}
A.n8.prototype={
$1(a){var s
A.u(a)
s=this.a
return s==null?1:s},
$S:5}
A.nd.prototype={
$1(a){A.u(a)
return 1},
$S:5}
A.to.prototype={
$1(a){A.u(a)
return this.a},
$S(){return this.b.h("0(e)")}}
A.tH.prototype={
$1(a){return this.a+A.u(a)*this.b},
$S:17}
A.h3.prototype={
aK(){return"ItemQuality."+this.b}}
A.rD.prototype={
iY(a,b,c){var s,r,q,p,o=null
if(c.dx&&a!=null)a.e.j(0,c)
s=c.db
if(s!=null)return new A.K(c,o,o,s.fq(),1)
if(c.e==null)return new A.K(c,o,o,o,1)
r=this.jk($.dt(),c,b)
q=this.jk($.du(),c,b)
if(r!=null&&q!=null&&$.m().T(4)!==0)if($.m().T(2)===0)r=o
else q=o
p=r==null?o:r.fq()
return new A.K(c,p,q==null?o:q.fq(),o,1)},
jk(a,b,c){var s,r
t.b_.a(a)
switch(this.b.a){case 0:s=B.io
break
case 1:s=B.iA
break
case 2:s=B.ig
break
default:s=null}r=A.w(c,0,100,s.a,s.b)
if($.m().aP(1)>r)return null
return a.pB(c,$.bk().le(b.a.a7(1).a))}}
A.m6.prototype={
b1(a,b,c){var s
t.f.a(c)
s=this.c
if(s.dx&&a!=null&&a.e.G(0,s))return
c.$1(this.iY(a,b,s))},
$ibu:1}
A.mA.prototype={
b1(a,b,c){t.f.a(c).$1(this.iY(a,b,this.nx(a,b)))},
nx(a,b){var s,r,q,p,o
switch(this.b.a){case 0:s=0
break
case 1:s=3
break
case 2:s=15
break
default:s=null}for(r=this.c,q=this.a,p=s;;){s=$.bk()
s=s.df(q==null?b:q,null,r)
s.toString
o=s.dx
if(o&&a!=null&&a.e.G(0,s))continue
if(!o&&p>0){--p
continue}return s}},
$ibu:1}
A.aI.prototype={
b1(a,b,c){t.f.a(c)
if($.m().T(100)>=this.a)return
this.b.b1(a,b,c)},
$ibu:1}
A.hZ.prototype={
b1(a,b,c){var s,r,q
t.f.a(c)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q)s[q].b1(a,b,c)},
$ibu:1}
A.mf.prototype={
lD(a){a.ae(0,new A.rX(this))},
b1(a,b,c){var s
t.f.a(c)
s=this.a.i_(1)
if(s==null)return
s.b1(a,b,c)},
$ibu:1}
A.rX.prototype={
$2(a,b){var s,r=null
t.iZ.a(a)
A.bA(b)
s=this.a.a
s.cf(s.$ti.c.a(a),r,r,r,b,b,r)},
$S:52}
A.bz.prototype={
b1(a,b,c){var s,r,q,p,o
t.f.a(c)
s=this.a
r=s>3?4:5
if(s>6)r=3
q=$.m()
p=q.cN(s,B.c.A(s,2))+q.hT(0,r)
for(s=this.b,o=0;o<p;++o)s.b1(a,b,c)},
$ibu:1}
A.jB.prototype={}
A.tF.prototype={
$1(a){a.ch.i(0,B.a2,t.Q.a(A.fw(2,t.S)))
return a},
$S:29}
A.tI.prototype={
$2(a,b){A.a2(a)
A.bA(b)
this.a.i(0,A.a7(a,null,null),b)},
$S:54}
A.tJ.prototype={
$1(a){a.Y(8,3,12)
a.dK(A.a_())
a.ch.i(0,B.ac,t.Q.a(A.fw(2,t.S)))
a.bz($.d_())
return a},
$S:29}
A.rC.prototype={
aV(a,b){var s=this
if(b==null){s.y=1
s.z=a}else{s.y=a
s.z=b}},
aO(a){return this.aV(a,null)}}
A.og.prototype={}
A.j0.prototype={
kn(a){this.ac(new A.lE(A.aL(a)),null,null)},
ac(a,b,c){if(c!=null){b.toString
a=new A.ih(b,c,a)}else if(b!=null)a=new A.ih(1,b,a)
B.a.j(this.fr,a)},
ah(a,b,c){B.a.j(this.db,A.bd(null,a,b,c,null))},
D(a,b){return this.ah(a,b,null)},
dO(a,b,c,d){var s=new A.aI(d,A.a7(a,this.CW+c,null))
if(b>1)s=A.uK(b,s)
B.a.j(this.dy,s)},
C(a,b){return this.dO(a,1,0,b)},
hs(a,b){return this.dO(a,b,0,100)},
eT(a,b,c){return this.dO(a,b,c,100)},
oM(a,b,c){return this.dO(a,b,0,c)},
ht(a,b,c){return this.dO(a,1,b,c)},
jZ(a,b,c,d){var s=new A.aI(d,A.a7(a,this.CW+c,B.hw))
if(b>1)s=A.uK(b,s)
B.a.j(this.dy,s)},
oN(a,b,c){return this.jZ(a,b,c,100)},
hu(a,b,c){return this.jZ(a,1,b,c)},
cO(a){B.a.j(this.x,"unique")
this.fx=a
this.ch=!0},
i0(){return this.cO(null)},
l7(a,b){return this.au(null,"whips",$.az(),a,2,b)},
bl(a,b,c,d){var s=$.fC()
this.au(s.p(0,a)[0],s.p(0,a)[1],a,b,c,d)},
c2(a,b,c,d){var s=$.fC(),r=s.p(0,a)[0]
s=s.p(0,a)[1]
if(c==null)c=10
B.a.j(this.dx,new A.d9(A.bd(new A.aH(A.aQ(r,B.y,B.V).a7(1)),s,b,a,c),d))},
hy(a){B.a.j(this.dx,new A.jP(1,10,a))
return null},
p0(){return this.hy(5)},
au(a,b,c,d,e,f){B.a.j(this.dx,new A.fI(A.bd(a!=null?new A.aH(A.aQ(a,B.y,B.V).a7(1)):null,b,d,c,e),f))}}
A.lE.prototype={
cS(a,b){var s
t.or.a(b)
s=this.a.b
s===$&&A.b()
b.$1(s)},
$idU:1}
A.ad.prototype={
cS(a,b){var s,r,q
t.or.a(b)
for(s=this.a,r=0;r<10;++r){q=$.cc().df(a,!1,s)
if(q==null)continue
if(q.ax.f)continue
b.$1(q)
break}},
$idU:1}
A.ih.prototype={
cS(a,b){var s,r,q,p,o
t.or.a(b)
s=this.b
r=s>3?4:5
if(s>6)r=3
q=$.m()
p=q.aA(this.a,s)+q.hT(0,r)
for(s=this.c,o=0;o<p;++o)s.cS(a,b)},
$idU:1}
A.lx.prototype={
cS(a,b){var s,r,q
t.or.a(b)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q)s[q].cS(a,b)},
$idU:1}
A.bs.prototype={
gbo(){var s=this.b.b
s===$&&A.b()
return s.f*0.5},
bK(a,b){return!1},
ia(a,b){var s,r=a.Q,q=$.m()
if(q.aP(2)<=b/r.f)return!0
r=a.z
s=a.Q
if(q.aP(2)<=r/s.f)return!0
return!1},
bU(a,b){var s,r=this.b.b
r===$&&A.b()
s=this.c.b
s===$&&A.b()
return new A.iN(r,s,this.d)},
t(a){var s,r=this.b.b
r===$&&A.b()
s=this.c.b
s===$&&A.b()
return"Amputate "+r.a.a+" + "+s.a.a}}
A.fI.prototype={
gbo(){var s=this.b
return s.c*s.e.e*(1+s.d/20)},
bK(a,b){var s,r,q,p
if((b.b.a>0||b.d.a>0)&&$.m().aP(1)<b.gdi()){s=B.e.L(A.w(b.gdi(),0,1,0,90))
if($.m().T(100)<s)return!1}r=a.y.y
q=r.S(0,b.y)
if(q.bh(0,this.b.d)){A.cj(b,"bolt move too far")
return!1}if(q.ec(0,1.5)){A.cj(b,"bolt move too close")
return!1}p=a.x
p===$&&A.b()
if(!p.oC(b,r)){A.cj(b,"bolt move can't target")
return!1}A.cj(b,"bolt move OK")
return!0},
bU(a,b){return A.u_(a.y.y,A.bH(this.b),!1,null)},
t(a){return"Bolt "+this.b.t(0)+" rate: "+this.a}}
A.d9.prototype={
gaB(){return this.b.d},
gbo(){var s=this.b
return s.c*3*s.e.e*(1+s.d/10)},
bK(a,b){var s,r,q
if((b.b.a>0||b.d.a>0)&&$.m().aP(1)<b.gdi()){s=B.e.L(A.w(b.gdi(),0,1,0,70))
if($.m().T(100)<s)return!1}r=a.y.y
if(r.S(0,b.y).bh(0,this.b.d)){A.cj(b,"cone move too far")
return!1}q=a.x
q===$&&A.b()
if(!q.eO(b,r)){A.cj(b,"cone move can't target")
return!1}A.cj(b,"cone move OK")
return!0},
bU(a,b){var s=b.y,r=a.y.y
return A.ug(A.bH(this.b),s,r,0.125)},
t(a){return"Cone "+this.b.t(0)+" rate: "+this.a}}
A.jP.prototype={
gbo(){return this.c*this.b},
bK(a,b){return b.f.a<=0},
bU(a,b){return A.vG(this.b,this.c)},
t(a){return"Haste "+this.b+" for "+this.c+" turns rate: "+this.a}}
A.h_.prototype={
gbo(){return this.b},
bK(a,b){var s=b.z,r=b.Q.f
return s/r<0.25||r-s>=this.b},
bU(a,b){return A.vH(this.b,!1)},
t(a){return"Heal "+this.b+" rate: "+this.a}}
A.bR.prototype={
gbo(){return this.b*0.5},
bK(a,b){var s,r,q,p,o,n=a.x
n===$&&A.b()
s=b.y
s=n.f.B(s.gm(),s.gn())
if(!(!s.b&&s.d+s.e>s.c))return!1
for(n=n.b,s=n.length,r=b.y,q=this.b,p=0;p<s;++p){o=n[p]
if(o===b)continue
if(o instanceof A.aa&&o.at instanceof A.ch&&o.y.S(0,r).eb(0,q))return!0}return!1},
bU(a,b){var s=this.c
if(s==null)s="howls"
return new A.jS(this.b,s)},
t(a){return"Howl "+this.b}}
A.b3.prototype={
gbo(){return 0},
bK(a,b){var s,r=a.y.y
if(r.S(0,b.y).gb4()<=1)return!1
s=a.x
s===$&&A.b()
return s.eO(b,r)},
bU(a,b){return new A.kk(a.y,this.b)},
t(a){return this.b.t(0)+" rate: "+this.a}}
A.bM.prototype={
gbo(){return 6},
bK(a,b){var s,r,q,p,o,n,m,l,k,j,i=a.x
i===$&&A.b()
s=b.y
s=i.f.B(s.gm(),s.gn())
if(!(!s.b&&s.d+s.e>s.c))return!1
for(s=b.y.gbB(),r=s.length,q=b.e,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
n=b.cp()
if(i.bm(o,q.a>0?new A.ae(n.a|$.U().a):n)){m=i.w
l=o.a
k=o.b
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.c(j,l)
l=j[l]==null
m=l}else m=!1
if(m){m=i.f
l=o.a
k=o.b
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.c(j,l)
l=j[l].x===0
m=l}else m=!1
if(m)return!0}return!1},
bU(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.T,h=A.a([],i)
if(this.b)for(s=b.e,r=0;r<8;++r){q=B.a6[r]
p=a.x
p===$&&A.b()
o=b.y.F(0,q)
n=b.cp()
if(p.bm(o,s.a>0?new A.ae(n.a|$.U().a):n)){m=p.w
l=o.a
k=o.b
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.c(j,l)
l=j[l]==null
m=l}else m=!1
if(m){p=p.f
m=o.a
o=o.b
p.l(m,o)
l=p.a
m=o*p.b.b.a+m
if(!(m>=0&&m<l.length))return A.c(l,m)
m=l[m].x===0
p=m}else p=!1
if(!p)continue
p=new A.qH(a,b,q)
if(p.$1(q.gcL()))B.a.U(h,A.a([q,q,q,q,q],i))
if(p.$1(q.gcL().gb9()))B.a.j(h,q)
if(p.$1(q.gcL().gba()))B.a.j(h,q)}if(h.length===0)for(i=b.e,r=0;r<8;++r){q=B.a6[r]
s=a.x
s===$&&A.b()
p=b.y.F(0,q)
n=b.cp()
if(s.bm(p,i.a>0?new A.ae(n.a|$.U().a):n)){o=s.w
m=p.a
l=p.b
o.l(m,l)
k=o.a
m=l*o.b.b.a+m
if(!(m>=0&&m<k.length))return A.c(k,m)
m=k[m]==null
o=m}else o=!1
if(o){s=s.f
o=p.a
p=p.b
s.l(o,p)
m=s.a
o=p*s.b.b.a+o
if(!(o>=0&&o<m.length))return A.c(m,o)
o=m[o].x===0
s=o}else s=!1
if(!s)continue
B.a.j(h,q)}i=b.y
s=$.m()
t.ez.a(h)
s=s.T(h.length)
if(!(s>=0&&s<h.length))return A.c(h,s)
return new A.l2(i.F(0,h[s]),b.Q)},
t(a){return"Spawn rate: "+this.a}}
A.qH.prototype={
$1(a){var s,r,q=this.a.x
q===$&&A.b()
s=this.b
r=s.y.F(0,this.c)
r=q.w.B(r.a,r.b)
return r!=null&&r instanceof A.aa&&r.Q===s.Q},
$S:11}
A.bx.prototype={
gbo(){return this.b*0.7},
bK(a,b){var s
if(b.at instanceof A.cv)return!0
s=a.y.y.S(0,b.y).gb4()
if(b.ay&&s<=1)return!1
return!0},
bU(a,b){return A.wg(this.b)},
t(a){return"Teleport "+this.b}}
A.jv.prototype={
gM(){return"Fairy Dust"},
gW(){return"A sprinkle of glimmering magic dazzles all nearby foes."}}
A.jz.prototype={
gM(){return"Flitter"},
gW(){return"Take flight and soar over the ground, at least until you get tired."}}
A.kM.prototype={
gM(){return"Quick Study"},
gW(){return"Gain 20% more experience when killing a monster."},
kp(a,b,c){return c*1.2}}
A.l0.prototype={
gM(){return"Single-minded"},
gW(){return"Reduce the focus lost when performing an ability by 30%."},
kq(a,b,c){if(c===0)return 0
c=B.e.bP(c*0.7)
if(c===0)return 1
return c}}
A.d5.prototype={
bp(a){return"Cast "+this.b+" spells better."},
gM(){return this.b},
gcD(){return this.c},
gW(){return this.d}}
A.iP.prototype={
gM(){return"Archery"},
gW(){return"Kill your foe without risking harm to yourself by unleashing a volley of arrows from far away."},
gcD(){return B.b_},
bp(a){return"Scales strike by "+A.q_(A.w(a,1,15,1,3),null)+"."}}
A.iX.prototype={
gM(){return"Battle Hardening"},
gW(){return"Years of taking hits have turned your skin as hard as cured leather."},
gcD(){return B.ax},
ko(a,b){return b+a.z.bS(this)*4},
bp(a){return"Increases armor by "+a*4+"."}}
A.iY.prototype={
gM(){return"Bloodlust"},
gW(){return"The more furious you are, the more deadly in combat you become."},
gcD(){return B.ax},
hE(a,b,c,d){d.cR(A.vo(a.Q.z.bS(this))*a.CW,"Bloodlust")},
bp(a){return"Increases damage by "+A.q_(A.vo(a),1)+" for each point of fury."}}
A.hh.prototype={
gcD(){return B.b0},
hE(a,b,c,d){if(c==null||c.a.r!==this.gbw())return
d.cR(A.w(a.Q.z.bS(this),1,15,1.1,4),"mastery")},
bp(a){var s,r=A.q_(A.w(a,1,15,1.1,4)-1,null),q=this.gbw()
if(0>=q.length)return A.c(q,0)
s=B.i.G("aeiou",q[0])?"an":"a"
return"Melee attacks inflict +"+r+" damage when using "+s+" "+this.gbw()+"."}}
A.iS.prototype={
gM(){return"Axe Mastery"},
gW(){return"Axes are not just for woodcutting. In the hands of a skilled user, they can cut down a swath of nearby foes as well."},
gbw(){return"axe"},
bp(a){return"TODO"}}
A.iZ.prototype={
gM(){return"Bludgeoning"},
gW(){return"Bludgeons may not be the most sophisticated of weapons, but hitting someone really hard with a blunt object can often be an effective argument in your favor."},
gbw(){return"club"},
bp(a){return this.ik(a)+" Bashes the enemy away."}}
A.k9.prototype={
gM(){return"Knife Fighting"},
gW(){return"Small and easily concealed, knives are deadly in the hand of a skilled practitioner."},
gbw(){return"knife"},
bp(a){return"TODO"}}
A.l3.prototype={
gM(){return"Spear Mastery"},
gW(){return"Your diligent study of spears and polearms lets you attack at a distance when wielding one."},
gbw(){return"spear"},
bp(a){return"TODO"}}
A.l9.prototype={
gM(){return"Swordfighting"},
gW(){return"The most elegant tool for the most refined of martial arts."},
gbw(){return"sword"},
bp(a){return this.ik(a)+" Parrying increases dodge by "+B.e.O(A.w(a,1,15,5,30))+"."},
eR(a){return new A.R(this.oL(a),t.cm)},
oL(a){var s=this
return function(){var r=a
var q=0,p=1,o=[],n,m,l
return function $async$eR(b,c,d){if(c===1){o.push(d)
q=p}for(;;)switch(q){case 0:m=r.Q
l=m.z.bS(s)
m=m.f.gcP(),n=J.aq(m.a),m=new A.cT(n,m.b,m.$ti.h("cT<1>"))
case 2:if(!m.q()){q=3
break}q=n.gH().a.r==="sword"?4:5
break
case 4:q=6
return b.b=new A.aB(B.e.O(A.w(l,1,15,5,30)),"{1} parr[y|ies] {2}."),1
case 6:case 5:q=2
break
case 3:return 0
case 1:return b.c=o.at(-1),3}}}}}
A.lt.prototype={
gM(){return"Whip Mastery"},
gW(){return"Whips and flails are difficult to use well, but deadly even at a distance when mastered."},
gbw(){return"whip"},
bp(a){return"TODO"}}
A.bL.prototype={
aK(){return"Region."+this.b}}
A.ni.prototype={
dG(a){return new A.R(this.oy(t.jJ.a(a)),t.e)},
oy(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$dG(a3,a4,a5){if(a4===1){o.push(a5)
q=p}for(;;)A:switch(q){case 0:for(n=s.b.f,m=n.b,l=A.ab(m),k=n.a,j=m.b.a,i=k.length;l.q();){h=l.b
g=l.c
n.l(h,g)
h=g*j+h
if(!(h>=0&&h<i)){A.c(k,h)
q=1
break A}k[h].a=$.fB()}f=A.yi(s.c)
d=f.length-1
for(;;){if(!(d>=0)){e=-1
break}if(f[d].w){e=d
break}--d}l=t.hY
c=A.a(B.hG.slice(0),l)
b=A.a([],l)
for(l=t.pj,d=0;d<f.length;++d)if(d===e||!f[d].w)B.a.j(b,B.cs)
else B.a.j(b,$.m().kW(0,c,l))
d=0
case 3:if(!(d<f.length)){q=5
break}l=f[d]
if(!(d<b.length)){A.c(b,d)
q=1
break}h=b[d]
a0=l.r.$0()
a0.a!==$&&A.as()
a0.a=s
a0.b!==$&&A.as()
a0.b=l
a0.c!==$&&A.as()
a0.c=h
q=6
return a3.aL(a0.b_())
case 6:case 4:++d
q=3
break
case 5:for(m=J.aq(m.kZ());m.q();){l=m.gH()
h=l.gm()
l=l.gn()
n.l(h,l)
h=l*j+h
if(!(h>=0&&h<i)){A.c(k,h)
q=1
break A}k[h].a=$.bE()}a1=A.a([],t.l)
q=7
return a3.aL(s.iO(a1))
case 7:q=8
return a3.aL(s.ir(a1))
case 8:q=9
return a3.aL(s.iz(a1))
case 9:q=10
return a3.b="Ready to decorate",1
case 10:a2=new A.ny(s,A.C(t.aT,t.A),A.b9(t.P))
q=11
return a3.aL(a2.jV())
case 11:n=a2.b
n===$&&A.b()
r.$1(n)
case 1:return 0
case 2:return a3.c=o.at(-1),3}}}},
ds(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.b.f,f=g.B(b,c)
f.a=d==null?$.d2():d;++this.e
f=this.d
f.aY(b,c,a)
for(s=f.b,r=g.a,q=g.b.b.a,p=r.length,o=f.$ti.c,n=f.a,m=s.b.a,l=0;l<8;++l){k=B.a6[l]
j=k.c+b
i=k.d+c
if(s.G(0,new A.d(j,i))){g.l(j,i)
h=i*q+j
if(!(h>=0&&h<p))return A.c(r,h)
h=r[h].a!==$.dA()}else h=!1
if(h){o.a(a)
f.l(j,i)
B.a.i(n,i*m+j,a)}}},
dq(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b.f,c=d.b
if(!c.G(0,b))return!1
s=this.d
r=b.a
q=b.b
if(s.B(r,q)!=null)return!1
if(d.B(r,q).a===$.dA())return!1
for(r=b.gbB(),q=r.length,p=s.a,o=s.b.b.a,n=p.length,m=d.a,l=c.b.a,k=m.length,j=0;j<q;++j){i=r[j]
if(!c.G(0,i))continue
h=i.a
g=i.b
d.l(h,g)
f=g*l+h
if(!(f>=0&&f<k))return A.c(m,f)
if(m[f].a===$.dA())continue
s.l(h,g)
h=g*o+h
if(!(h>=0&&h<n))return A.c(p,h)
e=p[h]
if(e!=null&&e!==a)return!1}return!0},
iO(a){return new A.R(this.mq(t.A.a(a)),t.e)},
mq(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
return function $async$iO(b2,b3,b4){if(b3===1){o.push(b4)
q=p}for(;;)A:switch(q){case 0:b0=t.l
b1=A.a([],b0)
for(n=s.b,m=n.f,l=m.b,k=A.ab(l.bQ(-1)),j=m.a,i=l.b,h=i.a,g=j.length,l=l.a,f=l.a,e=f+h,l=l.b,i=i.b,d=l+i,c=0,b=B.ak,a0=99999;k.q();){a1=k.b
a2=k.c
a3=new A.d(a1,a2)
m.l(a1,a2)
a1=a2*h+a1
if(!(a1>=0&&a1<g)){A.c(j,a1)
q=1
break A}a4=j[a1].a
if(a4===$.d2()){++c
a1=a3.S(0,new A.d(B.c.A(Math.min(f,e)+Math.max(f,e),2),B.c.A(Math.min(l,d)+Math.max(l,d),2)))
a5=Math.abs(a1.a)+Math.abs(a1.b)
if(a5<a0){a0=a5
b=a3}}else if(!(a4!==$.fB()&&a4!==$.dA()))B.a.j(b1,a3)}l=$.m()
B.a.bL(t.A.a(b1),l.a)
l=t.S
k=h*i
f=A.ao(k,-2,!1,l)
e=t.z
d=new A.a8(f,new A.Z(new A.d(0,0),new A.d(h,i)),e)
a6=new A.q9(n,b,d,new A.lo(new A.a8(A.ao(k,0,!1,l),new A.Z(new A.d(0,0),new A.d(h,i)),e),h,i),B.cd)
a6.cg(b,0)
a6.je(A.a([b],b0))
b0=b1.length,a7=0,a8=0
case 3:if(!(a8<b1.length)){q=5
break}a3=b1[a8]
n=a3.gm()
l=a3.gn()
m.l(n,l)
n=l*h+n
if(!(n>=0&&n<g)){A.c(j,n)
q=1
break}n=j[n]
l=n.a
i=l===$.fB()
if(!i&&l!==$.dA()){q=4
break}if(i)n.a=$.bE()
else if(l===$.dA())n.a=$.dz()
n=a3.gm()
l=a3.gn()
d.l(n,l)
n=l*h+n
if(!(n>=0&&n<k)){A.c(f,n)
q=1
break}n=f[n]
if(typeof n!=="number"){n.cQ()
q=1
break}if(!(n>=0)){q=4
break}a6.oT(a3)
if(a6.e!==c){s.iZ(r,a3)
a6.pD()}a9=a7+1
q=B.c.ab(a7,20)===0?6:7
break
case 6:q=8
return b2.b=a3.t(0),1
case 8:case 7:a7=a9
case 4:b1.length===b0||(0,A.o)(b1),++a8
q=3
break
case 5:case 1:return 0
case 2:return b2.c=o.at(-1),3}}}},
ir(a){return new A.R(this.lI(t.A.a(a)),t.e)},
lI(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3
return function $async$ir(a4,a5,a6){if(a5===1){o.push(a6)
q=p}for(;;)A:switch(q){case 0:a3=A.a([],t.hw)
for(n=s.b.f,m=n.b,l=A.ab(m.bQ(-1)),k=n.a,m=m.b.a,j=k.length;l.q();){i=l.b
h=l.c
g=new A.d(i,h)
n.l(i,h)
i=h*m+i
if(!(i>=0&&i<j)){A.c(k,i)
q=1
break A}f=k[i].a
i=$.d2()
if(!(f===i||f===$.d3()||f===$.fA()))continue
for(e=0;e<4;++e){d=B.at[e]
h=g.F(0,d.gbE())
c=h.a
h=h.b
n.l(c,h)
c=h*m+c
if(!(c>=0&&c<j)){A.c(k,c)
q=1
break A}f=k[c].a
if(!(f===i||f===$.d3()||f===$.fA()))continue
h=g.F(0,d.gb9())
c=h.a
h=h.b
n.l(c,h)
c=h*m+c
if(!(c>=0&&c<j)){A.c(k,c)
q=1
break A}f=k[c].a
h=$.bE()
if(!(f===h||f===$.dz()))continue
c=g.F(0,d)
b=c.a
c=c.b
n.l(b,c)
b=c*m+b
if(!(b>=0&&b<j)){A.c(k,b)
q=1
break A}f=k[b].a
if(!(f===h||f===$.dz()))continue
c=g.F(0,d.gba())
b=c.a
c=c.b
n.l(b,c)
b=c*m+b
if(!(b>=0&&b<j)){A.c(k,b)
q=1
break A}f=k[b].a
if(!(f===h||f===$.dz()))continue
h=g.F(0,d.gbV())
c=h.a
h=h.b
n.l(c,h)
c=h*m+c
if(!(c>=0&&c<j)){A.c(k,c)
q=1
break A}f=k[c].a
if(!(f===i||f===$.d3()||f===$.fA()))continue
B.a.j(a3,new A.ig(g,d))}}n=$.m()
B.a.bL(t.pa.a(a3),n.a)
a0=n.br(5,40)
n=a3.length,a1=0,e=0
case 3:if(!(e<a3.length)){q=5
break}a2=a3[e]
if(!s.o1(r,a2.a,a2.b)){q=4
break}q=6
return a4.b="Shortcut",1
case 6:++a1
if(a1>=a0){q=5
break}case 4:a3.length===n||(0,A.o)(a3),++e
q=3
break
case 5:case 1:return 0
case 2:return a4.c=o.at(-1),3}}}},
o1(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
t.A.a(a)
s=A.a([],t.l)
r=b.F(0,c)
for(q=this.b,p=q.f,o=p.a,n=p.b,m=n.b.a,l=o.length;;r=k){B.a.j(s,r)
k=r.F(0,c)
if(!n.G(0,k))return!1
j=k.a
i=k.b
p.l(j,i)
j=i*m+j
if(!(j>=0&&j<l))return A.c(o,j)
h=o[j].a
if(h===$.d2()||h===$.d3()||h===$.fA()){p=s.length
o=$.m()
if(!new A.rV(p*2+(o.a.a1(8)+8),q,b,k).fn()){for(q=s.length,g=0;g<s.length;s.length===q||(0,A.o)(s),++g)this.iZ(a,s[g])
return!0}return!1}j=k.F(0,c.gbE())
i=j.a
j=j.b
p.l(i,j)
i=j*m+i
if(!(i>=0&&i<l))return A.c(o,i)
h=o[i].a
j=$.bE()
if(!(h===j||h===$.dz()))return!1
i=k.F(0,c.gbV())
f=i.a
i=i.b
p.l(f,i)
f=i*m+f
if(!(f>=0&&f<l))return A.c(o,f)
h=o[f].a
if(!(h===j||h===$.dz()))return!1
j=$.m()
i=s.length
if(j.a.a1(100)<i*10)return!1}},
iZ(a,b){var s,r,q
t.A.a(a)
s=this.b.f.B(b.gm(),b.gn())
r=s.a
if(r===$.bE())s.a=$.d3()
else if(r===$.dz())s.a=$.fA()
q=this.d.B(b.gm(),b.gn())
if(q==null)B.a.j(a,b)
else this.iy(b,q)},
iz(a){return new A.R(this.lV(t.A.a(a)),t.e)},
lV(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3,a4,a5,a6
return function $async$iz(a7,a8,a9){if(a8===1){o.push(a9)
q=p}for(;;)A:switch(q){case 0:n=s.d,m=n.a,l=n.b.b.a,k=m.length,j=t.dr,i=n.$ti.c,h=t.hA,g=t.l
case 3:f=A.a([],g)
for(e=r.length,d=0;d<r.length;r.length===e||(0,A.o)(r),++d){c=r[d]
b=A.a([],j)
for(a0=c.gbB(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,A.o)(a0),++a2){a3=a0[a2]
a4=a3.a
a5=a3.b
n.l(a4,a5)
a4=a5*l+a4
if(!(a4>=0&&a4<k)){A.c(m,a4)
q=1
break A}a6=m[a4]
if(a6!=null)B.a.j(b,a6)}a0=b.length
if(a0!==0){a1=$.m()
h.a(b)
a0=a1.a.a1(a0)
if(!(a0>=0&&a0<b.length)){A.c(b,a0)
q=1
break A}a6=b[a0]
i.a(a6)
a0=c.gm()
a1=c.gn()
n.l(a0,a1)
B.a.i(m,a1*l+a0,a6)
s.iy(c,a6)}else B.a.j(f,c)}if(f.length===0){q=5
break}q=6
return a7.b="Claim",1
case 6:case 4:r=f
q=3
break
case 5:case 1:return 0
case 2:return a7.c=o.at(-1),3}}}},
iy(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.gbB(),r=s.length,q=this.d,p=q.a,o=q.b.b.a,n=p.length,m=q.$ti.c,l=0;l<s.length;s.length===r||(0,A.o)(s),++l){k=s[l]
j=k.a
i=k.b
q.l(j,i)
h=i*o+j
if(!(h>=0&&h<n))return A.c(p,h)
if(p[h]==null){m.a(b)
q.l(j,i)
B.a.i(p,h,b)}}}}
A.ig.prototype={}
A.bg.prototype={
gfa(){return $.uX()},
ft(a){return!1}}
A.rV.prototype={
hM(a){if(a.c>=this.d)return!1
return null},
hO(a){return!0},
fu(a,b){var s=$.bD()
if((b.a.e.a&s.a)!==0)return 1
return null},
i1(){return!1}}
A.fG.prototype={}
A.tn.prototype={
$0(){return new A.ey(this.a)},
$S:56}
A.tk.prototype={
$0(){return new A.eq(0.3,8,32)},
$S:57}
A.tl.prototype={
$0(){return new A.er()},
$S:58}
A.tz.prototype={
$0(){return new A.eM()},
$S:59}
A.tG.prototype={
$0(){return new A.f7()},
$S:60}
A.ty.prototype={
$0(){return A.yV(5)},
$S:61}
A.tD.prototype={
$0(){var s=A.a([],t.l)
return new A.eW(this.a,12,24,s)},
$S:62}
A.eq.prototype={
b_(){return new A.R(this.oq(),t.e)},
oq(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
return function $async$b_(a6,a7,a8){if(a7===1){p.push(a8)
r=q}for(;;)switch(r){case 0:a5=s.a
a5===$&&A.b()
o=a5.b.f.b.b
n=o.b
o=o.a
m=Math.sqrt(Math.min(Math.min(s.f,n),o))
l=Math.min(Math.sqrt(s.e),m)
k=s.d
j=(o-2)*(n-2)
i=0
case 2:if(!(a5.e/j<k&&i<100)){r=3
break}h=A.no(B.e.L(Math.pow($.m().aD(l,m),2)))
f=h.b.b
e=f.a
f=f.b
d=o-e
c=n-f
b=0
case 4:if(!(b<400)){g=!1
r=5
break}a=s.c
a===$&&A.b()
a0=1
a1=1
switch(a.a){case 0:a2=c
a3=d
break
case 1:a2=B.c.A(n,2)-f
a3=d
break
case 2:a0=B.c.A(o,2)
a2=B.c.A(n,2)-f
a3=d
break
case 3:a0=B.c.A(o,2)
a2=c
a3=d
break
case 4:a0=B.c.A(o,2)
a1=B.c.A(n,2)
a2=c
a3=d
break
case 5:a1=B.c.A(n,2)
a2=c
a3=d
break
case 6:a3=B.c.A(o,2)-e
a1=B.c.A(n,2)
a2=c
break
case 7:a3=B.c.A(o,2)-e
a2=c
break
case 8:a3=B.c.A(o,2)-e
a2=B.c.A(n,2)-f
break
default:a2=c
a3=d}if(a0>=a3){r=6
break}if(a1>=a2){r=6
break}a=$.m()
a=a.a
a4=a.a1(a3-a0)
r=s.lS(h,a4+a0,a.a1(a2-a1)+a1)?7:8
break
case 7:r=9
return a6.b="cave",1
case 9:g=!0
r=5
break
case 8:case 6:++b
r=4
break
case 5:if(!g)++i
r=2
break
case 3:return 0
case 1:return a6.c=p.at(-1),3}}}},
lS(a,b,c){var s,r,q,p,o,n,m,l,k=this
t.b.a(a)
for(s=a.b,r=A.ab(s),q=a.a,p=s.b.a,o=q.length;r.q();){n=r.b
m=r.c
a.l(n,m)
l=m*p+n
if(!(l>=0&&l<o))return A.c(q,l)
if(q[l]){l=k.a
l===$&&A.b()
if(!l.dq(k,new A.d(n+b,m+c)))return!1}}for(s=A.ab(s);s.q();){r=s.b
n=s.c
a.l(r,n)
m=n*p+r
if(!(m>=0&&m<o))return A.c(q,m)
if(q[m]){m=k.a
m===$&&A.b()
m.ds(k,r+b,n+c,null)}}return!0}}
A.er.prototype={
b_(){return new A.R(this.or(),t.e)},
or(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
return function $async$b_(a9,b0,b1){if(b0===1){p.push(b1)
r=q}for(;;)A:switch(r){case 0:a8=s.a
a8===$&&A.b()
o=a8.b.f.b.b
n=o.a
o=o.b
m=t.fU
l=new A.Z(new A.d(0,0),new A.d(n,o))
k=n*o
j=A.ao(k,null,!1,m)
i=t.eJ
h=new A.a8(j,l,i)
g=new A.a8(A.ao(k,null,!1,m),new A.Z(new A.d(0,0),new A.d(n,o)),i)
for(o=A.ab(l);o.q();){m=o.b
l=o.c
f=new A.d(m,l)
if(!a8.dq(s,f))continue
k=$.m().aP(1)
i=s.c
i===$&&A.b()
i=s.m1(i,f)
h.l(m,l)
B.a.i(j,l*n+m,k<i)}e=0
case 3:if(!(e<4)){r=5
break}for(o=h.b,n=o.a,n=new A.cM(o,n.a-1,n.b),m=g.$ti.c,l=g.a,k=g.b.b.a,j=h.a,i=o.b.a,c=j.length;n.q();){b=n.b
a=n.c
h.l(b,a)
a0=a*i+b
if(!(a0>=0&&a0<c)){A.c(j,a0)
r=1
break A}if(j[a0]==null)continue
for(a1=new A.d(b,a).gbB(),a2=a1.length,a3=0,a4=0;a4<a1.length;a1.length===a2||(0,A.o)(a1),++a4){a5=a1[a4]
if(o.G(0,a5)){a6=a5.a
a7=a5.b
h.l(a6,a7)
a6=a7*i+a6
if(!(a6>=0&&a6<c)){A.c(j,a6)
r=1
break A}a6=!J.aA(j[a6],!1)}else a6=!0
if(a6)++a3}h.l(b,a)
a0=j[a0]
a0.toString
a1=a*k+b
if(a0){a0=m.a(a3>=3)
g.l(b,a)
B.a.i(l,a1,a0)}else{a0=m.a(a3>=5)
g.l(b,a)
B.a.i(l,a1,a0)}}r=6
return a9.b="Round",1
case 6:case 4:++e,d=g,g=h,h=d
r=3
break
case 5:for(o=h.b,n=A.ab(o),m=h.a,o=o.b.a,l=m.length;n.q();){k=n.b
j=n.c
h.l(k,j)
i=j*o+k
if(!(i>=0&&i<l)){A.c(m,i)
r=1
break A}if(J.aA(m[i],!1))a8.ds(s,k,j,null)}case 1:return 0
case 2:return a9.c=p.at(-1),3}}}},
m1(a,b){var s,r,q,p=this
switch(a.a){case 0:return 0.45
case 1:s=p.a
s===$&&A.b()
return A.w(b.b,0,s.b.f.b.b.b,0.3,0.7)
case 2:s=p.a
s===$&&A.b()
s=s.b.f.b.b
r=s.a
return A.w(Math.max(r-b.a-1,b.b),0,Math.min(r,s.b),0.3,0.7)
case 3:s=p.a
s===$&&A.b()
return A.w(b.a,0,s.b.f.b.b.a,0.3,0.7)
case 4:s=p.a
s===$&&A.b()
s=s.b.f.b.b
r=s.a
s=s.b
return A.w(Math.max(r-b.a-1,s-b.b-1),0,Math.min(r,s),0.3,0.7)
case 5:s=p.a
s===$&&A.b()
return A.w(b.b,0,s.b.f.b.b.b,0.7,0.3)
case 6:s=p.a
s===$&&A.b()
s=s.b.f.b.b
r=s.b
return A.w(Math.max(b.a,r-b.b-1),0,Math.min(s.a,r),0.3,0.7)
case 7:s=p.a
s===$&&A.b()
return A.w(b.a,0,s.b.f.b.b.a,0.7,0.3)
case 8:q=Math.max(b.a,b.b)
s=p.a
s===$&&A.b()
s=s.b.f.b.b
return A.w(q,0,Math.min(s.a,s.b),0.3,0.7)}}}
A.ny.prototype={
jV(){return new A.R(this.oJ(),t.e)},
oJ(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
return function $async$jV(a0,a1,a2){if(a1===1){p.push(a2)
r=q}for(;;)A:switch(r){case 0:s.mt()
for(o=s.a,n=o.b,m=n.f,l=m.b,k=A.ab(l),o=o.d,j=o.a,i=o.b.b.a,h=j.length,g=s.c;k.q();){f=k.b
e=k.c
o.l(f,e)
d=e*i+f
if(!(d>=0&&d<h)){A.c(j,d)
r=1
break A}J.vh(g.b7(j[d],new A.nC()),new A.d(f,e))}s.nf()
r=3
return a0.aL(s.ja())
case 3:c=$.m().br(2,4)
for(o=m.a,l=l.b.a,k=o.length,b=0;b<c;++b){a=n.k7()
j=a.a
i=a.b
m.l(j,i)
j=i*l+j
if(!(j>=0&&j<k)){A.c(o,j)
r=1
break A}o[j].a=$.v9()}o=n.k7()
s.b!==$&&A.as()
s.b=o
r=4
return a0.aL(s.jm())
case 4:r=5
return a0.aL(s.iM())
case 5:case 1:return 0
case 2:return a0.c=p.at(-1),3}}}},
mt(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.a([],t.l)
for(s=this.a.b.f,r=s.b,q=A.ab(r.bQ(-1)),p=s.a,r=r.b.a,o=p.length;q.q();){n=q.b
m=q.c
l=new A.d(n,m)
s.l(n,m)
k=m*r+n
if(!(k>=0&&k<o))return A.c(p,k)
if(p[k].a!==$.d3())continue
for(j=0;j<4;++j){i=B.at[j]
h=l.F(0,i)
g=h.a
h=h.b
s.l(g,h)
g=h*r+g
if(!(g>=0&&g<o))return A.c(p,g)
g=p[g].a
h=$.d2()
if(g!==h)continue
g=l.F(0,i.gcL())
f=g.a
g=g.b
s.l(f,g)
f=g*r+f
if(!(f>=0&&f<o))return A.c(p,f)
e=p[f].a
if(e!==h&&e!==$.d3()&&e!==$.mU())continue
h=l.F(0,i.gbE())
g=h.a
h=h.b
s.l(g,h)
g=h*r+g
if(!(g>=0&&g<o))return A.c(p,g)
g=p[g].a
h=$.bE()
if(g!==h)continue
g=l.F(0,i.gbV())
f=g.a
g=g.b
s.l(f,g)
f=g*r+f
if(!(f>=0&&f<o))return A.c(p,f)
if(p[f].a!==h)continue
s.l(n,m)
p[k].a=$.mU()
B.a.j(a,l)
break}}q=$.m()
B.a.bL(t.A.a(a),q.a)
for(q=a.length,j=0;j<a.length;a.length===q||(0,A.o)(a),++j){d=a[j]
n=d.gm()
m=d.gn()
s.l(n,m)
n=m*r+n
if(!(n>=0&&n<o))return A.c(p,n)
n=p[n].a
m=$.mU()
if(n!==m)continue
for(n=d.gdH(),k=n.length,c=0;c<n.length;n.length===k||(0,A.o)(n),++c){b=n[c]
h=b.a
g=b.b
s.l(h,g)
h=g*r+h
if(!(h>=0&&h<o))return A.c(p,h)
if(p[h].a===m){h=$.m()
h=h.a.a1(2)===0?d:b
g=h.gm()
h=h.gn()
s.l(g,h)
g=h*r+g
if(!(g>=0&&g<o))return A.c(p,g)
p[g].a=$.d3()}}}},
nf(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(s=this.c,s=new A.bl(s,A.z(s).h("bl<1,2>")).gN(0),r=this.a;s.q();){q=s.d
p=q.a
o=$.uX()
if(p!=null)o=p.gfa()
n=new A.hq(this,r,p)
for(m=J.aq(q.b),l=r.b.f,k=l.a,j=l.b.b.a,i=k.length;m.q();){h=m.gH()
g=o.pi(n,h)
f=h.gm()
h=h.gn()
l.l(f,h)
f=h*j+f
if(!(f>=0&&f<i))return A.c(k,f)
k[f].a=g;++n.d}}},
ja(){return new A.R(this.nh(),t.e)},
nh(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
return function $async$ja(a5,a6,a7){if(a6===1){p.push(a7)
r=q}for(;;)switch(r){case 0:o=s.c,o=new A.bl(o,A.z(o).h("bl<1,2>")).gN(0),n=s.a,m=n.c,l=t.A
case 3:if(!o.q()){r=4
break}k=o.d
j=k.a
if(j==null){r=3
break}i=J.iK(k.b)
h=$.m()
B.a.bL(l.a(i),h.a)
g=new A.hq(s,n,j)
f=i.length
e=j.b
e===$&&A.b()
f*=e.c
d=B.e.bP(f)
if(h.aP(1)<f-d)++d
c=B.e.aT(h.aD(d*0.8,d*1.2))
b=0
case 5:a=b+1
if(!(b<c&&g.d<c)){r=6
break}a0=A.yw(m,e.b)
if(a0==null){r=7
break}a1=0
case 8:if(!(a1<i.length)){r=10
break}a2=i[a1]
if(!a0.oB(g,a2)){r=9
break}a0.pl(g,a2)
h=$.m()
a3=i.length
a4=h.a.a1(a3-a1)+a1
h=i.length
if(!(a4>=0&&a4<h)){A.c(i,a4)
r=1
break}f=i[a4]
if(!(a1<h)){A.c(i,a1)
r=1
break}i[a1]=f
i[a4]=a2
r=11
return a5.b="Placed decor",1
case 11:r=10
break
case 9:++a1
r=8
break
case 10:case 7:b=a
r=5
break
case 6:r=3
break
case 4:case 1:return 0
case 2:return a5.c=p.at(-1),3}}}},
jm(){return new A.R(this.nI(),t.e)},
nI(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
return function $async$jm(a9,b0,b1){if(b0===1){p.push(b1)
r=q}for(;;)A:switch(r){case 0:a8=A.b9(t.g_)
for(o=s.c,o=new A.c3(o,o.r,o.e,A.z(o).h("c3<1>")),n=s.a;o.q();){m=o.d
if(m==null)continue
if(m.ft(new A.hq(s,n,m)))a8.j(0,m)}o=n.b
m=o.f
l=m.b
k=l.b
j=k.a
k=k.b
i=new A.jk(new A.a8(A.ao(j*k,0,!1,t.S),new A.Z(new A.d(0,0),new A.d(j,k)),t.z))
k=s.b
k===$&&A.b()
h=A.cm(o,k,$.uU(),!1,null,null)
for(o=A.ab(l.bQ(-1)),l=n.d,k=l.a,g=l.b.b.a,f=k.length;o.q();){e=o.b
d=o.c
c=new A.d(e,d)
l.l(e,d)
e=d*g+e
if(!(e>=0&&e<f)){A.c(k,e)
r=1
break A}e=k[e]
if(e==null)continue
if(a8.G(0,e))continue
b=h.cj(c)
if(b==null)continue
if(b<10)continue
d=Math.sqrt(b-10)
e=e.b
e===$&&A.b()
i.i(0,c,B.e.L((4+d)*e.e))}o=i.c
e=$.m()
a=o*0.03*e.aD(1,1.4)
o=m.a,d=o.length,n=n.c,a0=t.m,a1=0
case 3:if(!(a1<a)){r=4
break}c=i.eP()
if(c==null){r=4
break}a2=c.a
a3=c.b
l.l(a2,a3)
a4=a3*g+a2
if(!(a4>=0&&a4<f)){A.c(k,a4)
r=1
break}a4=k[a4].b
a4===$&&A.b()
a4=a0.a(a4.d)
a5=a4.length
a6=e.a.a1(a5)
if(!(a6>=0&&a6<a4.length)){A.c(a4,a6)
r=1
break}a7=a4[a6]
a6=$.cc().l1(n,a7)
a6.toString
m.l(a2,a3)
a2=a3*j+a2
if(!(a2>=0&&a2<d)){A.c(o,a2)
r=1
break}if((o[a2].a.e.a&a6.at.a)===0){r=3
break}if(!s.fG(a6)){r=3
break}a8=s.ha(i,c,a6)
r=5
return a9.b="Spawned monster",1
case 5:a1+=a8
r=3
break
case 4:case 1:return 0
case 2:return a9.c=p.at(-1),3}}}},
jS(a,b,c){var s
for(;;){s=$.cc().df(a,b,c)
s.toString
if(this.fG(s))return s}},
fG(a){if(!a.ax.f)return!0
if(this.a.a.ef(a)>0)return!1
if(this.d.G(0,a))return!1
return!0},
ha(a,b,c){var s,r,q,p,o,n,m,l=null,k={},j=!c.ax.f&&$.m().T(10)===0
k.a=0
s=new A.nB(k,this,j,a)
r=c.lo()
if(0>=r.length)return A.c(r,0)
s.$2(r[0],b)
for(q=A.zs(r,1,l,A.M(r).c),p=q.$ti,q=new A.c4(q,q.gI(0),p.h("c4<aG.E>")),o=this.a.b,p=p.h("aG.E");q.q();){n=q.d
if(n==null)n=p.a(n)
m=A.cm(o,b,n.at,l,l,l).gcI().hx(0,new A.nz(),new A.nA())
if(m.Z(0,new A.d(-1,-1)))break
s.$2(n,m)}return k.a},
iM(){return new A.R(this.mj(),t.e)},
mj(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
return function $async$iM(a7,a8,a9){if(a8===1){p.push(a9)
r=q}for(;;)A:switch(r){case 0:a1=s.a
a2=a1.b
a3=a2.f
a4=a3.b
a5=a4.b
a6=a5.a
a5=a5.b
o=new A.jk(new A.a8(A.ao(a6*a5,0,!1,t.S),new A.Z(new A.d(0,0),new A.d(a6,a5)),t.z))
a5=s.b
a5===$&&A.b()
n=A.cm(a2,a5,$.bD(),!1,null,null)
for(a4=A.ab(a4.bQ(-1)),a5=a3.a,m=a5.length,l=a1.d,k=l.a,j=l.b.b.a,i=k.length;a4.q();){h=a4.b
g=a4.c
f=new A.d(h,g)
l.l(h,g)
e=g*j+h
if(!(e>=0&&e<i)){A.c(k,e)
r=1
break A}e=k[e]
if(e==null)continue
d=n.cj(f)
if(d==null)continue
a3.l(h,g)
h=g*a6+h
if(!(h>=0&&h<m)){A.c(a5,h)
r=1
break A}if((a5[h].a.e.a&$.aY().a)===0)continue
h=Math.sqrt(d+1)
e=e.b
e===$&&A.b()
o.i(0,f,B.e.L((10+h)*e.f))}a1=a1.c
c=o.c*(0.05+(a1-1)*0.05)
c+=$.m().aP(c*0.2)
b=0
case 3:if(!(b<c)){r=4
break}f=o.eP()
if(f==null){r=4
break}a=a2.e0(f,$.vg().i_(a1).b,a1)
for(a3=a.length,a0=0;a0<a.length;a.length===a3||(0,A.o)(a),++a0)b+=Math.max(a[a0].gbg(),1)
o.kN(a2,f,$.bD(),3)
r=5
return a7.b="Spawned item",1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a7.c=p.at(-1),3}}}}}
A.nC.prototype={
$0(){return A.a([],t.l)},
$S:46}
A.nB.prototype={
$2(a,b){var s=this,r=s.b,q=r.a.b
if(q.w.B(b.gm(),b.gn())!=null)return
if(!r.fG(a))return
if(a.ax.f)r.d.j(0,a)
if(s.c)q.e0(b,a.Q,a.c)
else{q.dD(a.ig(b));++s.a.a
r=s.d
if(r!=null)r.kN(q,b,$.uU(),5)}},
$S:63}
A.nz.prototype={
$1(a){t.u.a(a)
return!0},
$S:1}
A.nA.prototype={
$0(){return new A.d(-1,-1)},
$S:64}
A.jk.prototype={
i(a,b,c){var s=this,r=s.a,q=r.B(b.gm(),b.gn())
s.b=s.b-q+c
r.$ti.c.a(c)
r.aY(b.gm(),b.gn(),c)
if(q===0&&c>0)++s.c
if(q>0&&c===0)--s.c},
eP(){var s,r,q,p,o,n,m,l,k,j=this.b
if(j===0)return null
s=$.m().T(j)
for(j=this.a,r=j.b,q=A.ab(r),p=j.a,r=r.b.a,o=p.length;q.q();){n=q.b
m=q.c
l=new A.d(n,m)
j.l(n,m)
n=m*r+n
if(!(n>=0&&n<o))return A.c(p,n)
k=p[n]
if(s<k)return l
s-=k}throw A.n(A.bG("Unreachable."))},
kN(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
this.i(0,b,0)
s=A.cm(a,b,c,null,null,d)
for(r=s.gcI(),q=r.$ti,r=new A.ah(r.a(),q.h("ah<1>")),p=this.a,o=p.a,n=p.b.b.a,m=o.length,q=q.c;r.q();){l=r.b
if(l==null)l=q.a(l)
k=s.cj(l)
k.toString
j=l.gm()
i=l.gn()
p.l(j,i)
j=i*n+j
if(!(j>=0&&j<m))return A.c(o,j)
this.i(0,l,B.e.L(o[j]*(k/d)))}}}
A.ey.prototype={
gfa(){return $.xw()},
b_(){return new A.R(this.os(),t.e)},
os(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
return function $async$b_(a2,a3,a4){if(a3===1){p.push(a4)
r=q}for(;;)switch(r){case 0:a0=s.w
a1=0
case 2:o=s.a
o===$&&A.b()
n=o.b.f.b.b
m=n.a
n=n.b
if(!(o.e/((m-2)*(n-2))<0.25&&a1<100)){r=3
break}l=A.ui(o.c,a0)
o=l.b.b
j=o.a
o=o.b
i=m-j
h=n-o
g=0
case 4:if(!(g<400)){k=!1
r=5
break}f=s.c
f===$&&A.b()
e=1
d=1
switch(f.a){case 0:c=h
b=i
break
case 1:c=B.c.A(n,2)-o
b=i
break
case 2:e=B.c.A(m,2)
c=B.c.A(n,2)-o
b=i
break
case 3:e=B.c.A(m,2)
c=h
b=i
break
case 4:e=B.c.A(m,2)
d=B.c.A(n,2)
c=h
b=i
break
case 5:d=B.c.A(n,2)
c=h
b=i
break
case 6:b=B.c.A(m,2)-j
d=B.c.A(n,2)
c=h
break
case 7:b=B.c.A(m,2)-j
c=h
break
case 8:b=B.c.A(m,2)-j
c=B.c.A(n,2)-o
break
default:c=h
b=i}f=$.m()
f=f.a
a=f.a1(b-e)
r=s.mk(l,a+e,f.a1(c-d)+d)?6:7
break
case 6:r=8
return a2.b="room",1
case 8:k=!0
r=5
break
case 7:++g
r=4
break
case 5:if(!k)++a1
r=2
break
case 3:return 0
case 1:return a2.c=p.at(-1),3}}}},
mk(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.o.a(a)
if(!h.jP(a,b,c))return!1
for(s=a.b,r=A.ab(s),q=a.a,s=s.b.a,p=q.length;r.q();){o=r.b
n=r.c
m=o+b
l=n+c
a.l(o,n)
o=n*s+o
if(!(o>=0&&o<p))return A.c(q,o)
k=q[o]
o=k.a
if(!(o==null&&k.b===B.r)&&o!==$.bE()&&k.b===B.r){n=h.a
n===$&&A.b()
n.ds(h,m,l,o)}else{n=$.bE()
if(o===n){o=h.a
o===$&&A.b()
o=o.b.f
o.l(m,l)
j=o.a
i=l*o.b.b.a+m
if(!(i>=0&&i<j.length))return A.c(j,i)
if(j[i].a===$.fB()){o.l(m,l)
j[i].a=n}}}}return!0}}
A.eL.prototype={
gfa(){return $.xx()},
b_(){return new A.R(this.ot(),t.e)},
ot(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$b_(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:m=s.c
m===$&&A.b()
o=m===B.cs&&s.x==null?20:1
n=0
case 2:if(!(n<o)){r=4
break}r=5
return a.aL(s.iT())
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
ft(a){var s,r,q,p,o,n,m,l,k,j=a.a,i=j.c.p(0,a.c)
i.toString
i=J.yg(i,new A.pl(a))
s=A.a6(i,i.$ti.h("k.E"))
i=$.m().a
B.a.bL(t.A.a(s),i)
for(r=s.length,q=a.b.c,p=t.m,o=0;o<s.length;s.length===r||(0,A.o)(s),++o){n=s[o]
if(i.a1(20)!==0)continue
m=this.b
m===$&&A.b()
m=p.a(m.d)
l=m.length
k=i.a1(l)
if(!(k>=0&&k<m.length))return A.c(m,k)
j.ha(null,n,j.jS(q,null,m[k]))}return!0},
iT(){return new A.R(this.mF(),t.e)},
mF(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g
return function $async$iT(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:if(!s.o0()){r=1
break}o=s.r,n=o.c,m=o.b,l=s.x,k=l!=null
case 3:if(!(n.length!==0)){r=4
break}j=o.py()
i=j.a
h=i.F(0,j.b)
g=s.a
g===$&&A.b()
if(!g.dq(s,h)){r=3
break}r=s.nZ(j)?5:7
break
case 5:r=8
return a.b="Room",1
case 8:i=++s.w
if(k&&i>=l){r=4
break}r=6
break
case 7:if(j.c<5){m.i(0,i,j)
B.a.j(n,j)}case 6:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
o0(){var s,r,q,p=this.a
p===$&&A.b()
s=A.ui(p.c,B.bu)
for(r=0;r<100;++r){q=this.nK(s)
if(this.jv(s,q.a,q.b))return!0}return!1},
nK(a){var s,r,q,p,o,n,m,l,k
t.o.a(a)
s=this.a
s===$&&A.b()
s=s.b.f.b.b
r=s.a
q=a.b.b
p=q.a
o=r-p-1
s=s.b
q=q.b
n=s-q-1
m=this.c
m===$&&A.b()
m=m.a
l=1
switch(m){case 8:case 1:case 2:n=Math.max(1,B.e.L(s*0.25)-q)
break
case 6:case 5:case 4:l=B.e.L(s*0.75)
break
case 0:case 3:case 7:break}k=1
switch(m){case 8:case 7:case 6:o=Math.max(1,B.e.L(r*0.25)-p)
break
case 2:case 3:case 4:k=B.e.L(r*0.75)
break
case 0:case 1:case 5:break}if(o<k)o=k
if(n<l)n=l
s=$.m()
return new A.d(s.br(k,o),s.br(l,n))},
nm(a){var s=this,r=new A.pj(s),q=s.c
q===$&&A.b()
switch(q.a){case 0:q=1
break
case 1:q=s.a
q===$&&A.b()
q=A.w(a.b,0,q.b.f.b.b.b,2,-3)
break
case 2:q=s.a
q===$&&A.b()
q=r.$2(q.b.f.b.b.a-a.a-1,a.b)
break
case 3:q=s.a
q===$&&A.b()
q=A.w(a.a,0,q.b.f.b.b.a,-3,2)
break
case 4:q=s.a
q===$&&A.b()
q=q.b.f.b.b
q=r.$2(q.a-a.a-1,q.b-a.b-1)
break
case 5:q=s.a
q===$&&A.b()
q=A.w(a.b,0,q.b.f.b.b.b,-3,2)
break
case 6:q=s.a
q===$&&A.b()
q=r.$2(a.a,q.b.f.b.b.b-a.b-1)
break
case 7:q=s.a
q===$&&A.b()
q=A.w(a.a,0,q.b.f.b.b.a,2,-3)
break
case 8:q=r.$2(a.a,a.b)
break
default:q=null}return $.m().aP(1)<q},
nZ(a){var s,r,q,p,o,n,m=this.a
m===$&&A.b()
s=A.ui(m.c,B.bu)
m=s.b
r=A.z(m)
q=r.h("ak<k.E>")
p=A.a6(new A.ak(m,r.h("A(k.E)").a(new A.pk(s,a.b.gcL())),q),q.h("k.E"))
m=$.m()
B.a.bL(t.A.a(p),m.a)
for(m=p.length,r=a.a,o=0;o<p.length;p.length===m||(0,A.o)(p),++o){n=r.S(0,p[o])
if(this.jv(s,n.a,n.b))return!0}return!1},
jv(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
t.o.a(a0)
if(!a.jP(a0,a1,a2))return!1
s=A.a([],t.fv)
for(r=a0.b,q=A.ab(r),p=a0.a,r=r.b.a,o=p.length,n=a.r,m=n.b,n=n.c;q.q();){l=q.b
k=q.c
j=l+a1
i=k+a2
h=new A.d(j,i)
a0.l(l,k)
l=k*r+l
if(!(l>=0&&l<o))return A.c(p,l)
g=p[l]
l=g.b
if(l!==B.r){if(a.nm(h))B.a.j(s,new A.eK(h,l))}else{l=g.a
if(l!=null)k=l!==$.bE()
else k=!1
if(k){k=a.a
k===$&&A.b()
k.ds(a,j,i,l)}else{k=$.bE()
if(l===k){l=a.a
l===$&&A.b()
l=l.b.f
l.l(j,i)
f=l.a
e=i*l.b.b.a+j
if(!(e>=0&&e<f.length))return A.c(f,e)
if(f[e].a===$.fB()){l.l(j,i)
f[e].a=k}d=m.ad(0,h)
if(d!=null)B.a.ad(n,d)}}}}r=$.m()
B.a.bL(t.eF.a(s),r.a)
for(r=s.length,c=0;c<s.length;s.length===r||(0,A.o)(s),++c){d=s[c]
q=d.a
b=m.ad(0,q)
if(b!=null)B.a.ad(n,b)
m.i(0,q,d)
B.a.j(n,d)}return!0}}
A.pl.prototype={
$1(a){t.u.a(a)
return(this.a.b.b.f.B(a.gm(),a.gn()).a.e.a&$.aY().a)!==0},
$S:1}
A.pj.prototype={
$2(a,b){var s=this.a.a
s===$&&A.b()
s=s.b.f.b.b
return A.w(a+b,0,s.a+s.b,2,-3)},
$S:65}
A.pk.prototype={
$1(a){t.u.a(a)
return this.a.B(a.gm(),a.gn()).b===this.b},
$S:1}
A.eK.prototype={}
A.rg.prototype={
aK(){return"TakeFrom."+this.b}}
A.pi.prototype={
py(){var s,r=this
switch(r.a.a){case 0:s=r.c
if(0>=s.length)return A.c(s,-1)
s=s.pop()
break
case 1:s=B.a.de(r.c,0)
break
case 2:s=$.m().kW(0,r.c,t.d2)
break
default:s=null}r.b.ad(0,s.a);++s.c
return s}}
A.eM.prototype={
b_(){return new A.R(this.ou(),t.e)},
ou(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$b_(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:n=$.m()
m=n.aA(1,2)
o=0
case 2:if(!(o<m)){r=4
break}s.ni(A.no(n.a.a1(16)+16))
r=5
return a.b="Placing lake",1
case 5:case 3:++o
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
ni(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t.b.a(a)
s=$.m()
r=this.a
r===$&&A.b()
q=r.b.f
p=q.b.b
o=p.a
n=a.b
m=n.b
l=m.a
k=s.br(0,o-l)
j=s.br(0,p.b-m.b)
for(s=A.ab(n),p=a.a,n=p.length,m=q.a,i=m.length,r=r.d,h=r.$ti.c,g=r.a,f=r.b.b.a;s.q();){e=s.b
d=s.c
a.l(e,d)
c=d*l+e
if(!(c>=0&&c<n))return A.c(p,c)
if(p[c]){e+=k
d+=j
q.l(e,d)
c=d*o+e
if(!(c>=0&&c<i))return A.c(m,c)
m[c].a=$.dA()
h.a(this)
r.l(e,d)
B.a.i(g,d*f+e,this)}}}}
A.hq.prototype={}
A.q0.prototype={
pi(a,b){var s,r,q,p=this,o=a.b.b.f.B(b.gm(),b.gn()).a
if(o===$.d2()||o===$.d3())return p.fS()
if(o===$.bE()){s=p.b
if(s!=null){r=$.m()
t.p.a(s)
r=r.T(1)
if(!(r>=0&&r<1))return A.c(s,r)
return s[r]}s=$.m()
r=t.p.a($.xv())
s=s.T(3)
if(!(s>=0&&s<3))return A.c(r,s)
return r[s]}if(o===$.mU()){s=p.c
r=s!=null
if(r&&p.d!=null){q=$.m().T(6)
A:{if(0===q){s=p.d
if(s==null)s=t.ns.a(s)
break A}if(1===q){s=p.fS()
break A}break A}return s}else if(r)return s
else{s=p.d
if(s!=null)return s
else return p.fS()}}s=$.xu()
if(s.aj(o)){r=$.m()
s=s.p(0,o)
s.toString
t.p.a(s)
r=r.T(1)
if(!(r>=0&&r<1))return A.c(s,r)
return s[r]}return o},
fS(){var s,r=this.a
if(r!=null){s=$.m()
t.p.a(r)
s=s.T(1)
if(!(s>=0&&s<1))return A.c(r,s)
return r[s]}return $.mV()}}
A.eW.prototype={
gfa(){return $.xy()},
b_(){return new A.R(this.ov(),t.e)},
ov(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
return function $async$b_(a2,a3,a4){if(a3===1){p.push(a4)
r=q}for(;;)A:switch(r){case 0:o=s.e,n=s.f,m=0
case 3:if(!(m<20)){r=5
break}l=$.m()
k=A.no(l.a.a1(n-o)+o)
l=s.a
l===$&&A.b()
j=s.ju(k,l.b.f.b)
r=j!=null?6:7
break
case 6:r=8
return a2.b="pit",1
case 8:for(l=k.b,i=l.a,i=new A.cM(l,i.a-1,i.b),h=k.a,l=l.b.a,g=h.length,f=s.r,e=j.a,d=e.a,c=j.b,b=d+c.a,e=e.b,c=e+c.b;i.q();){a=i.b
a0=i.c
k.l(a,a0)
a1=a0*l+a
if(!(a1>=0&&a1<g)){A.c(h,a1)
r=1
break A}if(h[a1])B.a.j(f,new A.d(a,a0).F(0,new A.d(Math.min(d,b),Math.min(e,c))))}r=9
return a2.aL(s.j9(j))
case 9:r=1
break
case 7:case 4:++m
r=3
break
case 5:case 1:return 0
case 2:return a2.c=p.at(-1),3}}}},
ft(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=a6.b,a5=B.e.aT(a4.c*$.m().aD(1,1.4))
for(s=this.r,r=s.length,q=this.d,p=a6.a,a4=a4.b,o=a4.w,n=o.a,m=o.b.b.a,l=n.length,a4=a4.f,k=a4.a,j=a4.b.b.a,i=k.length,h=0;h<s.length;s.length===r||(0,A.o)(s),++h){g=s[h]
f=g.a
e=g.b
a4.l(f,e)
d=e*j+f
if(!(d>=0&&d<i))return A.c(k,d)
d=k[d].a
c=$.aY().a
if((d.e.a&c)===0)continue
d=g.gbB()
a=d.length
a0=0
for(;;){if(!(a0<a)){b=!0
break}a1=d[a0]
a2=a1.a
a3=a1.b
a4.l(a2,a3)
a2=a3*j+a2
if(!(a2>=0&&a2<i))return A.c(k,a2)
if((k[a2].a.e.a&c)===0){b=!1
break}++a0}if(!b)continue
o.l(f,e)
f=e*m+f
if(!(f>=0&&f<l))return A.c(n,f)
if(n[f]!=null)continue
p.ha(null,g,p.jS(a5,!1,q))}return!0},
ju(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.b.a(a)
s=b.b
r=s.a
q=a.b.b
p=q.a
if(r<p)return null
s=s.b
q=q.b
if(s<q)return null
for(o=b.a,n=o.b,s=n+s,o=o.a,r=o+r,m=0;m<200;++m){l=$.m()
k=Math.min(o,r)
j=Math.max(o,r)
l=l.a
i=l.a1(j-p-k)+k
k=Math.min(n,s)
j=Math.max(n,s)
h=l.a1(j-q-k)+k
if(this.o_(a,i,h))return new A.Z(new A.d(i,h),new A.d(p,q))}return null},
o_(a,b,c){var s,r,q,p,o,n,m,l,k=this
t.b.a(a)
for(s=a.b,r=A.ab(s),q=a.a,p=s.b.a,o=q.length;r.q();){n=r.b
m=r.c
a.l(n,m)
l=m*p+n
if(!(l>=0&&l<o))return A.c(q,l)
if(q[l]){l=k.a
l===$&&A.b()
if(!l.dq(k,new A.d(n+b,m+c)))return!1}}for(s=A.ab(s);s.q();){r=s.b
n=s.c
a.l(r,n)
m=n*p+r
if(!(m>=0&&m<o))return A.c(q,m)
if(q[m]){m=k.a
m===$&&A.b()
m.ds(k,r+b,n+c,null)}}return!0},
j9(a){return new A.R(this.ng(a),t.e)},
ng(a){var s=this
return function(){var r=a
var q=0,p=1,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
return function $async$j9(a0,a1,a2){if(a1===1){o.push(a2)
q=p}for(;;)switch(q){case 0:n=r.a,m=n.a,l=r.b,k=m+l.a,n=n.b,l=n+l.b,j=0
case 2:if(!(j<8)){q=4
break}i=$.m()
h=A.no(i.a.a1(4)+6)
i=h.b.b
g=i.a
f=Math.min(m,k)-g
i=i.b
e=Math.min(n,l)-i
d=Math.max(m,k)
c=Math.max(n,l)
b=s.a
b===$&&A.b()
q=s.ju(h,A.w4(new A.Z(new A.d(f,e),new A.d(d+g-f,c+i-e)),b.b.f.b.bQ(-1)))!=null?5:6
break
case 5:q=7
return a0.b="antechamber",1
case 7:case 6:case 3:++j
q=2
break
case 4:return 0
case 1:return a0.c=o.at(-1),3}}}}}
A.q9.prototype={
oT(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=A.he(t.u),a4=a2.d;++a4.b
s=a4.a
r=s.b.b
q=r.a
a4.c=q
a4.d=0
a4.e=r.b
a4.f=0
r=a3.$ti.c
a3.bj(r.a(a5))
a4.j(0,a5)
p=a2.c
a2.f=A.a([new A.i4(a5,p.B(a5.gm(),a5.gn()))],t.lv)
for(o=s.a,n=o.length,m=p.a,l=p.b.b.a,k=m.length;!a3.gaE(0);){j=a3.cK()
i=j.gm()
h=j.gn()
p.l(i,h)
i=h*l+i
if(!(i>=0&&i<k))return A.c(m,i)
g=m[i]
for(i=j.gdH(),h=i.length,f=g+1,e=0;e<i.length;i.length===h||(0,A.o)(i),++e){d=i[e]
c=d.a
b=d.b
p.l(c,b)
a=b*l+c
if(!(a>=0&&a<k))return A.c(m,a)
a0=m[a]
if(a0===-1)continue
p.l(c,b)
if(a0!==f)continue
s.l(c,b)
c=b*q+c
if(!(c>=0&&c<n))return A.c(o,c)
if(J.aA(o[c],a4.b))continue
if(a2.mH(d))continue
a3.bj(r.a(d))
a4.j(0,d)
B.a.j(a2.f,new A.i4(d,a0))}}a2.cg(a5,-1)
a1=a2.ms(a5)
if(a1.a===0)for(a4=a4.gN(0),s=a4.$ti.c;a4.q();){r=a4.d
a2.cg(r==null?s.a(r):r,-1)}else{for(a4=a4.gN(0),s=a4.$ti.c;a4.q();){r=a4.d
a2.cg(r==null?s.a(r):r,-2)}a2.cg(a5,-1)
a2.je(a1)}},
pD(){var s,r,q,p
for(s=this.f,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
this.cg(p.a,p.b)}this.f=B.cd},
mH(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this.c,a=b.B(a0.gm(),a0.gn())
for(s=a0.gdH(),r=s.length,q=this.d,p=q.a,o=p.a,n=p.b.b.a,m=o.length,l=this.a.f.b,k=b.a,j=b.b.b.a,i=k.length,h=a-1,g=0;g<s.length;s.length===r||(0,A.o)(s),++g){f=s[g]
if(!l.G(0,f))continue
e=f.a
d=f.b
p.l(e,d)
c=d*n+e
if(!(c>=0&&c<m))return A.c(o,c)
if(!J.aA(o[c],q.b)){b.l(e,d)
e=d*j+e
if(!(e>=0&&e<i))return A.c(k,e)
e=J.aA(k[e],h)}else e=!1
if(e)return!0}return!1},
ms(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.b9(t.u)
for(s=this.d,r=s.gN(0),q=this.c,p=q.a,o=q.b.b.a,n=p.length,m=s.a,l=m.a,k=m.b.b.a,j=l.length,i=r.$ti.c;r.q();){h=r.d
if(h==null)h=i.a(h)
if(h.Z(0,a0))continue
for(h=h.gdH(),g=h.length,f=0;f<h.length;h.length===g||(0,A.o)(h),++f){e=h[f]
d=e.a
c=e.b
q.l(d,c)
b=c*o+d
if(!(b>=0&&b<n))return A.c(p,b)
b=p[b]
if(typeof b!=="number")return b.cQ()
if(b>=0){m.l(d,c)
d=c*k+d
if(!(d>=0&&d<j))return A.c(l,d)
d=!J.aA(l[d],s.b)}else d=!1
if(d)a.j(0,e)}}return a},
je(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
t.cX.a(a2)
s=new A.ci(A.a([],t.c),t.r)
for(r=J.aq(a2),q=a1.c,p=q.a,o=q.b,n=o.b.a,m=p.length;r.q();){l=r.gH()
k=l.gm()
j=l.gn()
q.l(k,j)
k=j*n+k
if(!(k>=0&&k<m))return A.c(p,k)
s.aZ(0,l,p[k])}for(r=a1.a.f,l=r.a,k=r.b.b.a,j=l.length;;){i=s.fc()
if(i==null)break
h=i.gm()
g=i.gn()
q.l(h,g)
h=g*n+h
if(!(h>=0&&h<m))return A.c(p,h)
f=p[h]
for(h=i.gdH(),g=h.length,e=f+1,d=0;d<h.length;h.length===g||(0,A.o)(h),++d){c=h[d]
if(!o.G(0,c))continue
b=c.a
a=c.b
q.l(b,a)
a0=a*n+b
if(!(a0>=0&&a0<m))return A.c(p,a0)
if(!J.aA(p[a0],-2))continue
r.l(b,a)
b=a*k+b
if(!(b>=0&&b<j))return A.c(l,b)
if((l[b].a.e.a&$.aY().a)!==0){a1.cg(c,e)
s.aZ(0,c,e)}else a1.cg(c,-1)}}},
cg(a,b){var s,r=this
if(r.a.f.B(a.gm(),a.gn()).a===$.d2()){s=r.c.B(a.gm(),a.gn())
if(typeof s!=="number")return s.cQ()
if(s>=0)--r.e
if(b>=0)++r.e}s=r.c
s.$ti.c.a(b)
s.aY(a.gm(),a.gn(),b)}}
A.i4.prototype={}
A.f7.prototype={
b_(){return new A.R(this.ow(),t.e)},
ow(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
return function $async$b_(a,a0,a1){if(a0===1){p.push(a1)
r=q}for(;;)switch(r){case 0:b=s.a
b===$&&A.b()
o=b.b.f.b.b
n=o.b+2
m=o.a+2
l=new A.qm(s)
k=new A.qn(s)
j=new A.qk(s)
i=new A.qo(s)
h=new A.ql(s)
g=new A.qj(s)
o=$.m()
f=o.T(6)
A:{if(0===f){e=new A.O(A.bN(-2,h.$0(),null,null),A.bN(m,h.$0(),null,null))
break A}if(1===f){e=new A.O(A.bN(g.$0(),-2,null,null),A.bN(g.$0(),n,null,null))
break A}if(2===f){e=new A.O(A.bN(i.$0(),-2,null,null),A.bN(m,k.$0(),null,null))
break A}if(3===f){e=new A.O(A.bN(m,l.$0(),null,null),A.bN(i.$0(),n,null,null))
break A}if(4===f){e=new A.O(A.bN(j.$0(),n,null,null),A.bN(-2,l.$0(),null,null))
break A}if(5===f){e=new A.O(A.bN(-2,k.$0(),null,null),A.bN(j.$0(),-2,null,null))
break A}e=A.a0(A.cO("Unreachable"))}d=b.b.f.b.b.a
b=b.b.f.b.b.b
c=A.bN(o.aD(d*0.4,d*0.6),o.aD(b*0.4,b*0.6),null,null)
s.ep(e.a,c)
s.ep(c,e.b)
return 0
case 1:return a.c=p.at(-1),3}}}},
ep(b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=b2.a,a6=b3.a,a7=a5-a6,a8=b2.b,a9=b3.b,b0=a8-a9,b1=Math.sqrt(a7*a7+b0*b0)
if(b1>1){s=$.m()
r=b1/2
q=s.aP(r)
p=b1/4
r=s.aP(r)
o=Math.min(2,p)
n=A.bN((a5+a6)/2+q-p,(a8+a9)/2+r-p,B.e.P((b2.c+b3.c)/2+s.aD(-o,o),0,4),(b2.d+b3.d)/2)
a4.ep(b2,n)
a4.ep(n,b3)
return}a6=b2.d
a9=b2.c+a6
m=B.e.bP(a5-a9)
l=B.e.bP(a8-a9)
k=B.e.aT(a5+a9)
j=B.e.aT(a8+a9)
s=a4.a
s===$&&A.b()
r=s.b.f
q=r.b.b
p=q.a
i=p-2
m=B.c.P(m,1,i)
q=q.b-2
l=B.c.P(l,1,q)
k=B.c.P(k,1,i)
j=B.c.P(j,1,q)
h=a9*a9
g=a6*a6
for(a6=r.a,a9=a6.length,s=s.d,q=s.$ti.c,i=s.a,f=s.b.b.a,e=l;e<=j;++e)for(d=a8-e,c=d*d,b=e*p,a=e*f,a0=m;a0<=k;++a0){a1=a5-a0
a2=a1*a1+c
if(a2<=g){r.l(a0,e)
a3=b+a0
if(!(a3>=0&&a3<a9))return A.c(a6,a3)
a6[a3].a=$.dA()
q.a(a4)
s.l(a0,e)
B.a.i(i,a+a0,a4)}else if(a2<=h){r.l(a0,e)
a3=b+a0
if(!(a3>=0&&a3<a9))return A.c(a6,a3)
if(a6[a3].a===$.fB()){r.l(a0,e)
a6[a3].a=$.d2()
q.a(a4)
s.l(a0,e)
B.a.i(i,a+a0,a4)}}}}}
A.qm.prototype={
$0(){var s=$.m(),r=this.a.a
r===$&&A.b()
r=r.b.f.b.b.b
return s.aD(r*0.2,r*0.4)},
$S:7}
A.qn.prototype={
$0(){var s=$.m(),r=this.a.a
r===$&&A.b()
r=r.b.f.b.b.b
return s.aD(r*0.6,r*0.8)},
$S:7}
A.qk.prototype={
$0(){var s=$.m(),r=this.a.a
r===$&&A.b()
r=r.b.f.b.b.a
return s.aD(r*0.6,r*0.8)},
$S:7}
A.qo.prototype={
$0(){var s=$.m(),r=this.a.a
r===$&&A.b()
r=r.b.f.b.b.a
return s.aD(r*0.2,r*0.4)},
$S:7}
A.ql.prototype={
$0(){var s=$.m(),r=this.a.a
r===$&&A.b()
r=r.b.f.b.b.b
return s.aD(r*0.2,r*0.8)},
$S:7}
A.qj.prototype={
$0(){var s=$.m(),r=this.a.a
r===$&&A.b()
r=r.b.f.b.b.a
return s.aD(r*0.2,r*0.8)},
$S:7}
A.rZ.prototype={
t(a){return A.J(this.a)+","+A.J(this.b)+" ("+A.J(this.d)+")"}}
A.kY.prototype={
jP(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.o.a(a)
for(s=a.b,r=A.ab(s),q=a.a,s=s.b.a,p=q.length;r.q();){o=r.b
n=r.c
m=o+b
l=n+c
a.l(o,n)
o=n*s+o
if(!(o>=0&&o<p))return A.c(q,o)
k=q[o]
o=k.a
n=o==null
if(!(n&&k.b===B.r)){j=this.a
j===$&&A.b()
j=!j.b.f.b.G(0,new A.d(m,l))}else j=!1
if(j)return!1
if(!(n&&k.b===B.r)&&o!==$.bE()&&k.b===B.r){o=this.a
o===$&&A.b()
l=!o.dq(this,new A.d(m,l))
o=l}else o=!1
if(o)return!1}return!0}}
A.hB.prototype={
aK(){return"RoomShapes."+this.b}}
A.qq.prototype={
$1(a){var s,r=this.a.F(0,t.j.a(a)),q=this.b
if(!q.b.G(0,r))return!1
q=q.B(r.a,r.b)
s=q.a
return!(s==null&&q.b===B.r)&&s!==$.bE()&&q.b===B.r},
$S:11}
A.dT.prototype={}
A.hC.prototype={
aK(){return"RoomSize."+this.b}}
A.rp.prototype={
dG(a){return new A.R(this.oz(t.jJ.a(a)),t.e)},
oz(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$dG(a2,a3,a4){if(a3===1){o.push(a4)
q=p}for(;;)A:switch(q){case 0:for(n=s.a.f,m=n.b,l=A.ab(m),k=n.a,j=m.b.a,i=k.length;l.q();){h=l.b
g=l.c
n.l(h,g)
h=g*j+h
if(!(h>=0&&h<i)){A.c(k,h)
q=1
break A}k[h].a=$.mV()}for(l=J.aq(m.kZ());l.q();){h=l.gH()
g=h.gm()
h=h.gn()
n.l(g,h)
g=h*j+g
if(!(g>=0&&g<i)){A.c(k,g)
q=1
break A}k[g].a=$.iF()}f=[$.xH(),$.xL(),$.xP(),$.xQ(),$.xR(),$.xS(),$.xT(),$.xU()]
for(e=0;e<8;++e){d=B.c.ab(e,4)*13+5
l=B.c.A(e,4)
c=l*14+6
for(h=new A.cM(new A.Z(new A.d(d,c),new A.d(11,8)),d-1,c);h.q();){g=h.b
b=h.c
n.l(g,b)
g=b*j+g
if(!(g>=0&&g<i)){A.c(k,g)
q=1
break A}k[g].a=$.iF()}h=d+11
g=c+8
if((l&1)===1){l=Math.min(d,h)
g=Math.min(c,g)
g=new A.d(l,g).F(0,new A.d(Math.max(d,h),g))
a0=new A.d(B.c.A(g.a,2),B.c.A(g.b,2))}else{l=Math.min(d,h)
g=Math.max(c,g)
g=new A.d(l,g).F(0,new A.d(Math.max(d,h),g))
a0=new A.d(B.c.A(g.a,2),B.c.A(g.b,2)+-1)}l=a0.a
h=a0.b
n.l(l,h)
g=h*j
b=g+l
if(!(b>=0&&b<i)){A.c(k,b)
q=1
break A}k[b].a=f[e]
b=l+-1
n.l(b,h)
b=g+b
if(!(b>=0&&b<i)){A.c(k,b)
q=1
break A}b=k[b]
a1=$.vb()
b.a=a1;++l
n.l(l,h)
l=g+l
if(!(l>=0&&l<i)){A.c(k,l)
q=1
break A}k[l].a=a1}for(l=A.ab(m);l.q();){h=l.b
g=l.c
n.l(h,g)
h=g*j+h
if(!(h>=0&&h<i)){A.c(k,h)
q=1
break A}h=k[h]
h.fk(!0)
g=$.U()
if((h.a.e.a&g.a)!==0)h.f=B.c.P(h.f+64,0,192)}r.$1(m.ghk())
case 1:return 0
case 2:return a2.c=o.at(-1),3}}}}}
A.rm.prototype={
$1(a){return new A.eT(a)},
$S:50}
A.rl.prototype={
$1(a){return new A.eS(a)},
$S:68}
A.rk.prototype={
hj(a,b,c){var s,r,q,p,o
for(s=this.b,r=0;r<s.length;++r){q=s[r]
p=q.b.bk(b,a)
o=q.c.bk(c,a)
B.a.i(s,r,new A.X(q.a,p,o))}return this},
ol(a,b,c,d){var s,r,q,p,o,n,m=this.b,l=B.a.gaw(m)
for(s=l.b,r=l.c,q=l.a,p=1;p<a;++p){o=s.bk(c,A.w(p,0,a,0,b))
n=r.bk(d,A.w(p,0,a,0,b))
B.a.j(m,new A.X(q,o,n))}return this},
eU(a){this.e=a
return this},
c7(a){this.d=a
return this},
cq(a){this.c=t.bj.a(a)
return this},
jX(){return this.cW($.bC())},
aM(){return this.cW($.U())},
a4(){return this.cW($.uV())},
bx(){return this.cW($.uW())},
cW(a){var s,r,q,p=this,o=p.b
if(o.length===1)o=B.a.gaw(o)
s=p.d
r=p.e
q=p.c
return new A.dZ(p.a,s,r,o,a,q)}}
A.nt.prototype={
$0(){return A.uq(this.a)},
$S:22}
A.nv.prototype={
$0(){return A.uq(this.a)},
$S:22}
A.nw.prototype={
$0(){return A.he(t.cZ)},
$S:70}
A.nu.prototype={
$0(){return A.uq(this.a)},
$S:22}
A.fj.prototype={
t(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=new A.dW(""),c=e.a,b=c.Q.a.a
d.a=b
c=c.at
if(c instanceof A.cv)s="afraid"
else s=c instanceof A.cx?"awake":"asleep"
d.a=b+(" ("+s+")\n")
c=e.c
b=A.z(c).h("b2<1>")
r=A.a6(new A.b2(c,b),b.h("k.E"))
B.a.fp(r)
q=B.a.az(r,0,new A.rW(),t.S)
for(b=r.length,p=e.d,o=0;o<r.length;r.length===b||(0,A.o)(r),++o){n=r[o]
m=B.i.f9(n,q)+" "
l=c.p(0,n)
for(k=A.z(l),j=new A.e5(l,l.c,l.d,l.b,k.h("e5<1>")),k=k.c,i=!1;j.q();){h=j.e
g=B.c.P(B.e.aT((h==null?k.a(h):h)*9),0,8)
if(!(g>=0&&g<9))return A.c(" \u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588",g)
m+=" \u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588"[g]
if(g>0)i=!0}if(!l.gaE(0)){j=l.b
h=l.c
if(j===h)A.a0(A.cG())
j=l.a
f=j.length
h=(h-1&f-1)>>>0
if(!(h>=0&&h<f))return A.c(j,h)
h=j[h]
k=B.e.hY(h==null?k.a(h):h,4)
m+=" "+B.i.dc(k,6)}if(p.p(0,n)!=null){m+=" "+A.J(p.p(0,n))
i=!0}if(i)d.a+=(m.charCodeAt(0)==0?m:m)+"\n"}c=d.a=A.uk(d.a,e.b,"\n")
return c.charCodeAt(0)==0?c:c}}
A.rW.prototype={
$2(a,b){return Math.max(A.u(a),A.a2(b).length)},
$S:18}
A.G.prototype={
gaX(){return!0},
om(a,b,c){var s,r=this
r.a=b
s=b.y
r.b!==$&&A.as()
r.b=s
r.c!==$&&A.as()
r.c=a
r.d!==$&&A.as()
r.d=c!==!1},
hf(a,b){var s,r,q
if(b==null){s=this.a
s.toString}else s=b
r=this.b
r===$&&A.b()
q=this.c
q===$&&A.b()
a.a=s
a.b!==$&&A.as()
a.b=r
a.c!==$&&A.as()
a.c=q
a.d!==$&&A.as()
a.d=!1
if(a.gaX())B.a.j(q.c,a)
else{s=q.b
s.bj(s.$ti.c.a(a))}},
he(a){return this.hf(a,null)},
by(a,b,c,d,e,f,g){var s,r,q,p,o=this.c
o===$&&A.b()
s=e==null?$.az():e
if(g==null)r=b==null?null:b.y
else r=g
if(r==null)r=B.ak
q=d==null?B.r:d
p=c==null?0:c
B.a.j(o.d,new A.jt(a,r,q,s,b,f,p))},
og(a,b,c,d){return this.by(a,b,c,null,d,null,null)},
cB(a,b){var s=null
return this.by(a,b,s,s,s,s,s)},
of(a,b,c){var s=null
return this.by(a,s,s,s,s,b,c)},
oh(a,b,c,d){return this.by(a,b,null,null,null,c,d)},
oe(a,b,c){var s=null
return this.by(a,s,s,s,b,s,c)},
oi(a,b,c,d){return this.by(a,null,null,b,c,null,d)},
oj(a,b,c,d){return this.by(a,null,null,b,null,c,d)},
jH(a,b,c){var s=null
return this.by(a,s,s,b,s,s,c)},
hg(a,b){var s=null
return this.by(a,s,s,s,s,s,b)},
od(a,b,c){var s=null
return this.by(a,b,c,s,s,s,s)},
jG(a,b,c){var s=null
return this.by(a,b,s,s,s,s,c)},
gdY(){return 0.2},
hC(a,b,c){var s=this.c
s===$&&A.b()
s.y.Q.at.X(B.x,a,b,c,null)},
pb(a,b){return this.hC(a,b,null)},
ed(a,b,c,d){var s,r,q=this.c
q===$&&A.b()
s=q.x
s===$&&A.b()
r=this.b
r===$&&A.b()
r=s.f.B(r.gm(),r.gn())
if(!r.b&&r.d+r.e>r.c||this.a instanceof A.ax)q.y.Q.at.X(B.x,a,b,c,d)},
bX(a,b,c){return this.ed(a,b,c,null)},
a_(a,b){return this.ed(a,b,null,null)},
ll(a){return this.ed(a,null,null,null)},
fw(a,b,c){if(a!=null)this.ed(a,b,c,null)
return B.n},
ej(){return this.fw(null,null,null)},
cw(a,b){return this.fw(a,b,null)},
eW(a,b,c){var s,r=this,q=r.c
q===$&&A.b()
q=q.x
q===$&&A.b()
s=r.b
s===$&&A.b()
s=q.f.B(s.gm(),s.gn())
q=!s.b&&s.d+s.e>s.c||r.a instanceof A.ax
if(q){q=r.c
q===$&&A.b()
q.y.Q.at.X(B.a_,a,b,c,null)}return B.bz},
dR(a,b){return this.eW(a,b,null)},
d6(a){return this.eW(a,null,null)},
bd(a){var s,r,q=this.c
q===$&&A.b()
s=this.a
s.toString
r=this.d
r===$&&A.b()
a.om(q,s,r)
return new A.d4(a,!1,!0)}}
A.d4.prototype={}
A.jE.prototype={
V(){var s=this,r=t.V.a(s.a),q=r.ch,p=s.e
if(q<p)return s.d6("You aren't focused enough.")
r.ch=q-p
return s.bd(s.f)}}
A.jM.prototype={
gmQ(){var s,r,q=this,p=q.Q$
if(p===$){s=q.f6()
r=s.a()
q.Q$!==$&&A.eg()
p=q.Q$=new A.ah(r,s.$ti.h("ah<1>"))}return p},
V(){var s,r=this.gmQ()
if(!r.q())return B.n
s=r.b
return s==null?r.$ti.c.a(s):s},
l5(a){var s,r=J.vM(a,t.fw)
for(s=0;s<a;++s)r[s]=B.a4
return r}}
A.iR.prototype={
V(){var s,r,q,p,o=this
for(s=o.e,r=o.a.eQ(s),q=r.length,p=0;p<r.length;r.length===q||(0,A.o)(r),++p){r[p].hL(o,o.a,s)
if(s.z<=0)break}return B.n},
gdY(){return 1},
t(a){return A.J(this.a)+" attacks "+this.e.t(0)}}
A.k_.prototype={
e2(){var s,r=this
switch(r.e){case B.J:s=r.c
s===$&&A.b()
s=s.x
s===$&&A.b()
s.e3(r.f,r.a.y)
break
case B.v:B.a.ad(t.V.a(r.a).Q.e.b,r.f)
break
case B.Z:s=r.f
t.V.a(r.a).Q.f.ad(0,s)
if(s.a.ay>0){s=r.c
s===$&&A.b()
s=s.x
s===$&&A.b()
s.gav().r=!0}break
default:throw A.n(A.cO("Invalid location."))}},
bn(){switch(this.e){case B.J:break
case B.v:t.V.a(this.a).Q.e.bn()
break
case B.Z:t.V.a(this.a)
break
default:throw A.n(A.cO("Invalid location."))}}}
A.kE.prototype={
V(){var s,r=this,q="{1} [don't|doesn't] have room for {the 2}.",p=t.V,o=r.e,n=p.a(r.a).Q.e.c8(o),m=n.a
if(m===0)return r.eW(q,r.a,o)
r.bX("{1} pick[s] up {the 2}.",r.a,o.b0(m))
m=n.b
s=r.a
if(m===0){m=r.c
m===$&&A.b()
m=m.x
m===$&&A.b()
m.e3(o,s.y)}else r.bX(q,s,o.b0(m))
p=p.a(r.a)
r.c===$&&A.b()
p.Q.ax.d7(o)
p.bs()
return B.n}}
A.jn.prototype={
V(){var s=this,r=s.z,q=s.f
if(r===q.f)s.e2()
else{q=q.dk(r)
s.bn()}r=s.a
if(s.e===B.Z){s.bX("{1} take[s] off and drop[s] {the 2}.",r,q)
t.V.a(s.a).bs()}else s.bX("{1} drop[s] {the 2}.",r,q)
r=s.c
r===$&&A.b()
r=r.x
r===$&&A.b()
r.cY(q,s.a.y)
return B.n}}
A.jq.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.e
if(d===B.Z)return e.bd(new A.lj(d,e.f))
d=t.V
s=e.f
if(!d.a(e.a).Q.f.oA(s))return e.eW("{1} cannot equip {the 2}.",e.a,s)
if(s.f===1){e.e2()
r=s}else{r=s.dk(1)
e.bn()}q=d.a(e.a).Q.f.k0(r)
for(p=q.length,o=0;o<q.length;q.length===p||(0,A.o)(q),++o){n=q[o]
m=n.f
l=d.a(e.a).Q.e.fj(n,!0)
k=e.a
if(l.b===0){j=e.c
j===$&&A.b()
i=j.x
i===$&&A.b()
h=e.b
h===$&&A.b()
i=i.f
g=h.gm()
h=h.gn()
i.l(g,h)
f=i.a
g=h*i.b.b.a+g
if(!(g>=0&&g<f.length))return A.c(f,g)
g=f[g]
if(!g.b&&g.d+g.e>g.c||e.a instanceof A.ax)j.y.Q.at.X(B.x,"{1} unequip[s] {the 2}.",k,new A.K(n.a,n.b,n.c,n.d,m),null)}else{m=e.c
m===$&&A.b()
j=m.x
j===$&&A.b()
j.cY(n,k.y)
k=e.a
j=m.x
j===$&&A.b()
i=e.b
i===$&&A.b()
j=j.f
h=i.gm()
i=i.gn()
j.l(h,i)
g=j.a
h=i*j.b.b.a+h
if(!(h>=0&&h<g.length))return A.c(g,h)
h=g[h]
if(!h.b&&h.d+h.e>h.c||e.a instanceof A.ax)m.y.Q.at.X(B.x,u.f,k,n,null)}}e.bX("{1} equip[s] {the 2}.",e.a,r)
if(s.a.ay>0){p=e.c
p===$&&A.b()
p=p.x
p===$&&A.b()
p.gav().r=!0}d.a(e.a).bs()
return B.n}}
A.lj.prototype={
V(){var s,r,q,p,o=this,n=o.f,m=n.d0()
o.e2()
s=t.V
r=s.a(o.a).Q.e.fj(n,!0)
q=o.a
if(r.b===0)o.bX("{1} unequip[s] {the 2}.",q,m)
else{p=o.c
p===$&&A.b()
p=p.x
p===$&&A.b()
p.cY(n,q.y)
o.bX(u.f,o.a,n)}s.a(o.a).bs()
return B.n}}
A.lm.prototype={
V(){var s,r=this,q=r.f,p=q.a.w
if(p==null)return r.dR("{the 1} can't be used.",q);--q.f
p=p.b.$0()
if(q.f===0)r.e2()
else r.bn()
if(r.e===B.J){s=t.V.a(r.a)
r.c===$&&A.b()
s.Q.ax.d7(q)
s.bs()}t.V.a(r.a).Q.ax.pF(q)
return r.bd(p)}}
A.cz.prototype={
fM(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
t.D.a(b)
t.f.a(a1)
s=A.a6(b,A.z(b).h("k.E"))
r=s.length
q="{the 1} "+a.c+"!"
p=0
o=0
for(;o<s.length;s.length===r||(0,A.o)(s),++o){n=s[o]
m=n.a
l=m.cx.p(0,a)
if(l==null)l=0
if(a0)l=Math.min(30,B.c.A(l,2))
if(l===0)continue
for(k=0,j=0;i=n.f,j<i;++j){i=$.m()
if(i.a.a1(100)<l)++k}if(k===i){i=d.c
i===$&&A.b()
h=i.x
h===$&&A.b()
g=d.b
g===$&&A.b()
h=h.f
f=g.gm()
g=g.gn()
h.l(f,g)
e=h.a
f=g*h.b.b.a+f
if(!(f>=0&&f<e.length))return A.c(e,f)
f=e[f]
if(!f.b&&f.d+f.e>f.c||d.a instanceof A.ax)i.y.Q.at.X(B.x,q,n,c,c)
a1.$1(n)}else if(k>0){n.f=i-k
i=d.c
i===$&&A.b()
h=i.x
h===$&&A.b()
g=d.b
g===$&&A.b()
h=h.f
f=g.gm()
g=g.gn()
h.l(f,g)
e=h.a
f=g*h.b.b.a+f
if(!(f>=0&&f<e.length))return A.c(e,f)
f=e[f]
if(!f.b&&f.d+f.e>f.c||d.a instanceof A.ax)i.y.Q.at.X(B.x,q,new A.K(m,n.b,n.c,n.d,k),c,c)}p+=m.cy*k}return p},
hm(a,b){var s=this.c
s===$&&A.b()
s=s.x
s===$&&A.b()
return this.fM(b,s.c5(a),!1,new A.nD(this,a))},
jW(a){var s,r,q=this,p={},o=q.a
if(!(o instanceof A.ax))return 0
if(o.c6(a)>0)return 0
o=t.V
s=q.fM(a,o.a(q.a).Q.e,!0,new A.nE(q))
p.a=!1
r=q.fM(a,o.a(q.a).Q.f,!0,new A.nF(p,q))
if(p.a)o.a(q.a).bs()
return s+r}}
A.nD.prototype={
$1(a){var s=this.a.c
s===$&&A.b()
s=s.x
s===$&&A.b()
s.e3(a,this.b)},
$S:6}
A.nE.prototype={
$1(a){B.a.ad(t.V.a(this.a.a).Q.e.b,a)},
$S:6}
A.nF.prototype={
$1(a){t.V.a(this.b.a).Q.f.ad(0,a)
this.a.a=!0},
$S:6}
A.ke.prototype={
gn4(){var s,r=this,q=r.r
if(q===$){s=A.e4(r.a.y,r.e)
s.q()
r.f=r.a.y
r.r!==$&&A.eg()
r.r=s
q=s}return q},
gaX(){return!1},
V(){var s,r,q=this,p=q.gn4(),o=p.a,n=q.c
n===$&&A.b()
s=n.x
s===$&&A.b()
s=s.f.B(o.gm(),o.gn())
r=$.U()
if((s.a.e.a&r.a)===0||o.S(0,q.a.y).bh(0,q.gaB())){p=q.f
p===$&&A.b()
q.ky(p)
return q.ej()}s=q.f
s===$&&A.b()
q.kE(s,o)
n=n.x
n===$&&A.b()
n=n.w.B(o.gm(),o.gn())
if(n!=null&&n!==q.a)if(q.hJ(o,n))return B.n
if(o.Z(0,q.e))if(q.kG(o))return B.n
q.f=o
p.q()
return B.a4},
hJ(a,b){return!0},
ky(a){},
kG(a){return!1}}
A.lg.prototype={
V(){var s=this,r=s.f
if(r.a.y==null)return s.dR("{the 1} can't be thrown.",r)
if(r.f===1)s.e2()
else{r=r.dk(1)
s.bn()}return s.bd(new A.lh(r,s.z,s.Q))}}
A.lh.prototype={
gaB(){return this.as.gaB()},
kE(a,b){this.of(B.bW,this.Q,b)},
hJ(a,b){var s=this
if(s.as.hL(s,s.a,b)===0){s.at=!0
return!1}s.fO(a)
return!0},
ky(a){this.fO(a)},
kG(a){if(this.at)return!1
this.fO(a)
return!0},
fO(a){var s,r=this,q=r.Q,p=q.a.y,o=p.c
if(o!=null){r.he(o.$1(a))
return}o=$.m()
s=p.a
if(o.T(100)<s){r.a_("{1} breaks!",q)
return}o=r.c
o===$&&A.b()
o=o.x
o===$&&A.b()
o.cY(q,a)}}
A.lq.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.e
if(b===B.r)return c.bd(A.kV())
s=c.a.y.F(0,b)
b=c.c
b===$&&A.b()
r=b.x
r===$&&A.b()
q=s.a
p=s.b
r=r.w.B(q,p)
if(r!=null&&r!==c.a)return c.bd(new A.iR(r))
r=b.x
r===$&&A.b()
o=r.f.B(q,p).a
r=o.f
if(r!=null){n=o.e
m=$.bC()
if(n.Z(0,m)&&(c.a.gb5().a&m.a)!==0||(n.a&c.a.gb5().a)===0)return c.bd(r.$1(s))}r=b.x
r===$&&A.b()
if(!r.bm(s,c.a.gb5())){if(c.a instanceof A.ax){b=b.x
b===$&&A.b()
b.d5(q,p,!0)}return c.dR("{1} hit[s] the "+o.a+".",c.a)}c.a.dg(b,s)
if(c.a instanceof A.ax){r=b.x
r===$&&A.b()
r=r.c5(s)
r=A.a6(r,A.z(r).h("k.E"))
q=r.length
p=t.V
n=b.y.Q.at
l=0
for(;l<r.length;r.length===q||(0,A.o)(r),++l){k=r[l]
m=p.a(c.a)
if(!(m.at instanceof A.aS))m.at=null
if(k.a.ch){j=B.e.aT(k.gbg()*0.5)
i=B.e.aT(k.gbg()*1.5)
m=$.m()
h=m.a.a1(i-j)+j
m=p.a(c.a)
m.Q.Q+=h
g=b.x
g===$&&A.b()
f=c.b
f===$&&A.b()
g=g.f
e=f.gm()
f=f.gn()
g.l(e,f)
d=g.a
e=f*g.b.b.a+e
if(!(e>=0&&e<d.length))return A.c(d,e)
e=d[e]
if(!e.b&&e.d+e.e>e.c||c.a instanceof A.ax)n.X(B.x,"{1} pick[s] up {2} worth "+h+" gold.",m,k,null)
m=b.x
m===$&&A.b()
m.e3(k,s)
m=c.a
c.oh(B.bK,m,k,m.y)}else{g=b.x
g===$&&A.b()
f=c.b
f===$&&A.b()
g=g.f
e=f.gm()
f=f.gn()
g.l(e,f)
d=g.a
e=f*g.b.b.a+e
if(!(e>=0&&e<d.length))return A.c(d,e)
e=d[e]
if(!e.b&&e.d+e.e>e.c||c.a instanceof A.ax)n.X(B.x,"{1} [are|is] standing on {2}.",m,k,null)}}p.a(c.a).fb(1)}return c.ej()},
t(a){return A.J(this.a)+" walks "+this.e.t(0)}}
A.kz.prototype={
V(){var s,r,q=this,p=q.c
p===$&&A.b()
s=p.x
s===$&&A.b()
r=q.e
s.f.B(r.gm(),r.gn()).a=q.f
p=p.x
p===$&&A.b()
p.hX()
p=q.a
if(p instanceof A.ax)p.fb(1)
return q.cw("{1} open[s] the door.",q.a)}}
A.j7.prototype={
V(){var s,r,q=this,p=q.c
p===$&&A.b()
s=p.x
s===$&&A.b()
r=q.e
s=s.w.B(r.gm(),r.gn())
if(s!=null)return q.dR("{1} [are|is] in the way!",s)
s=p.x
s===$&&A.b()
s.f.B(r.gm(),r.gn()).a=q.f
p=p.x
p===$&&A.b()
p.hX()
p=q.a
if(p instanceof A.ax)p.fb(1)
return q.cw("{1} close[s] the door.",q.a)}}
A.kU.prototype={
V(){var s,r,q,p,o,n=this,m=null
A:{s=n.a
r=s instanceof A.ax
q=r?s:m
if(r){r=q.ay
if(r>0){r=B.c.P(r-1,0,400)
q.ay=r
if(r===0){r=n.c
r===$&&A.b()
r.y.Q.at.X(B.x,"You are getting hungry.",m,m,m)}if(q.w.a<=0)q.z=B.c.P(q.z+1,0,q.gbq())}q.fb(2)
break A}r=!1
if(s instanceof A.bF){r=n.c
r===$&&A.b()
r=r.x
r===$&&A.b()
p=s.y
p=r.f.B(p.gm(),p.gn())
r=!(!p.b&&p.d+p.e>p.c)&&s.w.a<=0
o=s}else o=m
if(r)o.z=B.c.P(o.z+1,0,o.gbq())}return n.ej()},
gdY(){return 0.05}}
A.bF.prototype={
dX(a){return!1},
gb5(){var s=this.cp()
return this.e.a>0?new A.ae(s.a|$.U().a):s},
ghl(){return new A.R(this.oK(),t.cm)},
oK(){var s=this
return function(){var r=0,q=1,p=[],o
return function $async$ghl(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gjK()
if(s.b.a>0||s.d.a>0)o=B.c.A(o,3)
r=o!==0?2:3
break
case 2:r=4
return a.b=new A.aB(o,"{1} dodge[s] {2}."),1
case 4:case 3:r=5
return a.aL(s.kA())
case 5:return 0
case 1:return a.c=p.at(-1),3}}}},
dg(a,b){var s,r,q,p,o=this
if(o.y.Z(0,b))return
s=o.y
if(o.gdP()>0){r=a.x
r===$&&A.b()
r.gav().r=!0}o.hG(a,s,b)
r=a.x
r===$&&A.b()
r=r.w
q=r.B(s.gm(),s.gn())
p=r.$ti.c
p.a(null)
r.aY(s.gm(),s.gn(),null)
p.a(q)
r.aY(b.gm(),b.gn(),q)
o.y=b},
hG(a,b,c){},
eQ(a){var s,r,q=this.kw(a)
for(s=q.length,r=0;r<q.length;q.length===s||(0,A.o)(q),++r)this.kt(q[r],B.hs)
return q},
kt(a,b){var s
if(this.b.a>0||this.d.a>0){switch(b.a){case 0:s=0.5
break
case 1:s=0.3
break
case 2:s=0.2
break
default:s=null}a.lf(s,"blindness")}this.kD(a,b)},
kD(a,b){},
c6(a){var s=this.hI(a),r=this.fe(a)
return r.a>0?s+r.b:s},
fe(a){var s=this.x,r=s.p(0,a)
if(r==null){r=new A.hA(a)
s.i(0,a,r)
s=r}else s=r
return s},
kX(a,b,c,d){var s=this
s.z=B.c.P(s.z-b,0,s.gbq())
s.kF(a,d,b)
if(s.z>0)return!1
a.cB(B.bJ,s)
a.bX("{1} kill[s] {2}.",c,s)
if(d!=null)d.kC(a,s)
s.kx(a,c)
return!0},
px(a,b,c){return this.kX(a,b,c,null)},
kB(a,b,c){},
kF(a,b,c){},
kC(a,b){},
kz(a){},
oX(a){var s,r,q,p,o,n=this
n.a.a-=240
s=A.a([n.c,n.b,n.d,n.e,n.f,n.r,n.w],t.c8)
r=n.x
B.a.U(s,new A.cI(r,A.z(r).h("cI<2>")))
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
o=p.a
if(o>0){--o
p.a=o
if(o>0)p.kH(a)
else{p.cH(a)
p.b=0}}}if(n.z>0)n.kz(a)}}
A.b7.prototype={
t(a){var s=B.c.t(this.c),r=this.e
if(r!==$.az())s=r.t(0)+" "+s
r=this.d
return r>0?s+("@"+r):s}}
A.jR.prototype={
aK(){return"HitType."+this.b}}
A.d6.prototype={}
A.di.prototype={}
A.b8.prototype={
gaB(){var s=this.a.d
if(s===0)return 0
return Math.max(1,B.e.O(s*this.r))},
gnM(){return B.a.az(this.b,1,new A.oC(),t.i)},
gnL(){return B.a.az(this.c,0,new A.oB(),t.i)},
giG(){return B.a.az(this.d,1,new A.oA(),t.i)},
giF(){return B.a.az(this.e,0,new A.oz(),t.i)},
gb2(){var s=this.f
if(s!==$.az())return s
return this.a.e},
gd_(){return this.a.c*this.giG()+this.giF()},
jI(a,b){if(a===0)return
B.a.j(this.c,new A.d6(a))},
lf(a,b){if(a===1)return
B.a.j(this.b,new A.di(a))},
ob(a,b){if(a===0)return
B.a.j(this.e,new A.d6(a))},
cR(a,b){if(a===1)return
B.a.j(this.d,new A.di(a))},
e_(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.lO(a,b,a0),c=e.lP(a,a0)
if(d){s=e.a.a
if(s==null)s=b
s.toString
r=s}else r=$.v2()
q=c?a0:$.v2()
if(a0 instanceof A.ax)a0.pn(e)
if(a1!==!1){s=$.m()
p=s.aA(1,100)*e.gnM()+e.gnL()
o=a0.ghl()
n=A.a6(o,o.$ti.h("k.E"))
B.a.bL(t.hy.a(n),s.a)
for(s=n.length,m=0;m<s;++m){l=n[m]
p-=l.a
if(p<0){if(d||c){s=a.c
s===$&&A.b()
s.y.Q.at.X(B.x,l.b,q,r,null)}return 0}}}k=a0.gdE()
j=a0.c6(e.gb2())
s=e.a
i=B.e.L((s.c*e.giG()+e.giF())*(1/(1+j))*100)
h=A.x_(k)
g=B.e.O($.m().cN(i,B.c.A(i,2))*h/100)
if(g===0){if(d||c)a.hC("{1} do[es] no damage to {2}.",r,q)
return 0}if(b!=null)b.kB(a,a0,g)
if(a0.kX(a,g,r,b))return g
if(j<=0){f=e.gb2().f.$1(g)
if(f!=null)a.hf(f,a0)}a.og(B.bM,a0,g,e.gb2())
if(d||c)a.hC("{1} "+s.b+" {2}.",r,q)
return g},
hL(a,b,c){return this.e_(a,b,c,null)},
lO(a,b,c){var s,r
if(b instanceof A.ax)return!0
if(b!=null){s=a.c
s===$&&A.b()
s=s.x
s===$&&A.b()
r=b.y
r=s.f.B(r.gm(),r.gn())
s=!r.b&&r.d+r.e>r.c}else s=!1
if(s)return!0
if(c instanceof A.ax&&this.a.a!=null)return!0
s=a.c
s===$&&A.b()
s=s.x
s===$&&A.b()
r=c.y
r=s.f.B(r.gm(),r.gn())
if(!r.b&&r.d+r.e>r.c&&this.a.a!=null)return!0
return!1},
lP(a,b){var s,r
if(b instanceof A.ax)return!0
s=a.c
s===$&&A.b()
s=s.x
s===$&&A.b()
r=b.y
r=s.f.B(r.gm(),r.gn())
if(!r.b&&r.d+r.e>r.c)return!0
return!1}}
A.oC.prototype={
$2(a,b){return A.bA(a)*t.jK.a(b).a},
$S:31}
A.oB.prototype={
$2(a,b){return A.bA(a)+t.fV.a(b).a},
$S:26}
A.oA.prototype={
$2(a,b){return A.bA(a)*t.jK.a(b).a},
$S:31}
A.oz.prototype={
$2(a,b){return A.bA(a)+t.fV.a(b).a},
$S:26}
A.aB.prototype={}
A.c_.prototype={
kH(a){}}
A.fZ.prototype={
cH(a){a.a_("{1} slow[s] back down.",a.a)}}
A.fK.prototype={
cH(a){a.a_("{1} warm[s] back up.",a.a)}}
A.hs.prototype={
kH(a){var s=a.a
s.toString
if(!s.px(a,this.b,new A.aH(A.aQ("poison",B.y,B.aG).a7(1))))a.a_("{1} [are|is] hurt by poison!",a.a)},
cH(a){a.a_("{1} [are|is] no longer poisoned.",a.a)}}
A.dE.prototype={
cH(a){var s,r
a.a_("{1} can see clearly again.",a.a)
s=a.a
r=a.c
r===$&&A.b()
if(s===r.y){s=r.x
s===$&&A.b()
s.gav().w=!0}}}
A.fW.prototype={
cH(a){a.a_("{1} flutter[s] down to the ground.",a.a)}}
A.hA.prototype={
cH(a){a.a_("{1} feel[s] susceptible to "+this.c.t(0)+".",a.a)}}
A.hr.prototype={
cH(a){a.a_("{1} no longer perceive[s] monsters.",a.a)}}
A.dG.prototype={
t(a){return this.a}}
A.nQ.prototype={
$1(a){A.u(a)
return null},
$S:32}
A.nR.prototype={
$4(a,b,c,d){t.u.a(a)
t.Z.a(b)
A.e7(c)
A.u(d)
return null},
$S:75}
A.fT.prototype={}
A.jt.prototype={}
A.aJ.prototype={
t(a){return this.a}}
A.jJ.prototype={
e9(){return new A.R(this.ld(),t.e)},
ld(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$e9(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=A.e2()
n=s.y
m=s.x
m===$&&A.b()
r=2
return a.aL(s.a.ox(n.Q.ax,m,s.w,new A.ox(o)))
case 2:r=3
return a.b="Calculating visibility",1
case 3:n.dg(s,t.u.a(o.h2()))
m.gav().cJ()
return 0
case 1:return a.c=p.at(-1),3}}}},
bv(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
for(s=b.b,r=b.y,q=b.e,p=b.c,o=s.$ti.c,n=b.d,m=!1;;){for(;!s.gaE(0);m=!0){l=s.b
if(l===s.c)A.a0(A.cG())
k=s.a
if(!(l<k.length))return A.c(k,l)
j=k[l]
if(j==null)j=o.a(j)
i=j.V()
for(;h=i.a,h!=null;j=h){s.cK()
o.a(h)
l=s.b
k=s.a
l=(l-1&k.length-1)>>>0
s.b=l
B.a.i(k,l,h)
if(s.b===s.c)s.iS();++s.d
i=h.V()}while(l=p.length,l!==0){if(0>=l)return A.c(p,-1)
g=p.pop().V()
while(l=g.a,l!=null)g=l.V()}l=b.x
l===$&&A.b()
l.gav().cJ()
k=i.c
if(k){s.cK()
if(i.b){f=j.d
f===$&&A.b()}else f=!1
if(f){j.a.oX(j)
l.e=B.c.ab(l.e+1,l.b.length)}}if(!k||j.a===r||n.length!==0){s=A.a(n.slice(0),A.M(n))
B.a.aU(n)
return new A.f_(s)}}if(b.r!=null)b.jw()
while(s.b===s.c){l=b.x
l===$&&A.b()
k=l.b
f=l.e
if(!(f>=0&&f<k.length))return A.c(k,f)
e=k[f]
f=e.a
if(f.a>=240&&e.dX(b))return b.j_(m)
if(f.a<240){d=e.gjL()+e.f.b-e.c.b
c=f.a
if(!(d>=0&&d<13))return A.c(B.aO,d)
c+=B.aO[d]
f.a=c
c=c>=240
f=c}else f=!0
if(f){if(e.dX(b))return b.j_(m)
j=e.ak(b)
j.a=e
l=e.y
j.b!==$&&A.as()
j.b=l
j.c!==$&&A.as()
j.c=b
j.d!==$&&A.as()
j.d=!0
s.bj(o.a(j))}else l.e=B.c.ab(l.e+1,k.length)
if(e===r){l=q.a+=60
if(l>=240){q.a=l-240
b.r=0
b.jw()}}}}},
j_(a){if(a)return this.n5()
return B.cK},
n5(){var s=this.d,r=A.a(s.slice(0),A.M(s))
B.a.aU(s)
return new A.f_(r)},
cF(a){var s,r=this.x
r===$&&A.b()
s=a.y
s=r.f.B(s.gm(),s.gn())
if(!s.b&&s.d+s.e>s.c)return!0
r=this.y
s=r.r
if(s.a>0&&r.y.S(0,a.y).ec(0,s.b))return!0
return!1},
jw(){var s,r,q,p=this,o=p.f,n=p.a
for(;;){s=p.r
s.toString
if(!(s<o.length))break
r=o[s]
s=p.x
s===$&&A.b()
q=n.pE(s,r)
s=p.r
s.toString
p.r=s+1
if(q!=null){q.b!==$&&A.as()
q.b=r
q.c!==$&&A.as()
q.c=p
q.d!==$&&A.as()
q.d=!1
o=p.b
o.bj(o.$ti.c.a(q))
return}}p.r=null}}
A.ox.prototype={
$1(a){this.a.b=a},
$S:76}
A.hT.prototype={}
A.lp.prototype={}
A.f_.prototype={}
A.kd.prototype={
i2(a){this.X(B.cf,a,null,null,null)},
jU(a,b){this.X(B.cg,a,b,null,null)},
dM(a){return this.jU(a,null)},
X(a,b,c,d,e){var s,r
b=this.mA(b,c,d,e);++this.b
s=this.a
if(s.length!==0){r=B.a.gcG(s)
if(r.b===b){++r.c
return}}B.a.j(s,new A.hi(a,b,1))
if(s.length>100)B.a.de(s,0)},
mA(a,b,c,d){var s,r,q,p,o,n,m=[b,c,d]
for(s=a,r=1;r<=3;++r){q=m[r-1]
if(q!=null){p=""+r
o="{"+p
n=q.gam()
s=A.bj(s,o+"}",n.b)
n=q.gam()
s=A.bj(s,"{the "+p+"}",n.c)
p=q.gam()
s=A.bj(s,o+" he}",p.d.c)
p=q.gam()
s=A.bj(s,o+" him}",p.d.d)
p=q.gam()
s=A.bj(s,o+" his}",p.d.e)}}if(b!=null)s=A.vW(s,b.gam().d)
if(0>=s.length)return A.c(s,0)
return s[0].toUpperCase()+B.i.cT(s,1)}}
A.pr.prototype={
$1(a){var s,r=a.p(0,1)
r.toString
s=a.p(0,3)
if(s!=null){if(!this.a)r=s
return r}else{if(this.a)r=""
return r}},
$S:33}
A.pt.prototype={
$1(a){var s,r=this.a,q=r.b
if(q===-1)return
s=r.a
if(s.length!==0)s=r.a=s+" "
r.a=s+B.i.aJ(this.b,q,a)
r.b=-1},
$S:78}
A.ps.prototype={
$0(){var s=this.a
B.a.j(this.b,s.a)
s.a=""},
$S:0}
A.bT.prototype={
aK(){return"LogType."+this.b}}
A.hi.prototype={}
A.tr.prototype={
$1(a){a=((B.c.eE(a,16)^a)>>>0)*73244475>>>0
a=((a>>>16^a)>>>0)*73244475>>>0
return(a>>>16^a)>>>0},
$S:5}
A.f4.prototype={
gc0(){var s=this.b,r=A.z(s).h("cI<2>"),q=this.$ti.c
return A.pF(new A.cI(s,r),r.al(q).h("1(k.E)").a(new A.qa(this)),r.h("k.E"),q)},
cf(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(a)
if(b==null)b=B.c.t(m.b.a)
if(c==null)c=1
if(d==null)d=c
if(e==null)e=1
if(f==null)f=e
s=m.b
if(s.aj(b))throw A.n(A.aE('Already have a resource named "'+b+'".',null))
r=A.b9(l.h("bW<1>"))
s.i(0,b,new A.bq(a,c,d,e,f,r,l.h("bq<1>")))
if(g!=null&&g!=="")for(l=g.split(" "),s=l.length,q=m.a,p=0;p<s;++p){o=l[p]
n=q.p(0,o)
if(n==null)throw A.n(A.aE('Unknown tag "'+o+'".',null))
r.j(0,n)}},
c3(a){var s,r,q,p,o,n,m,l,k,j,i
for(s=a.split(" "),r=s.length,q=this.a,p=this.$ti.h("bW<1>"),o=0;o<s.length;s.length===r||(0,A.o)(s),++o)for(n=s[o].split("/"),m=n.length,l=null,k=0;k<m;++k,l=i){j=n[k]
i=q.p(0,j)
if(i==null){i=new A.bW(j,l,p)
q.i(0,j,i)}}},
oW(a){var s=this.b.p(0,a)
if(s==null)throw A.n(A.aE('Unknown resource "'+a+'".',null))
return s.a},
c9(a){var s=this.b.p(0,a)
if(s==null)return null
return s.a},
le(a){var s,r,q=this.b.p(0,a)
if(q==null)throw A.n(A.aE('Unknown resource "'+a+'".',null))
s=q.f
r=A.z(s)
return new A.dF(s,r.h("q(1)").a(new A.qb(this)),r.h("dF<1,q>"))},
df(a,b,c){var s,r,q,p=this,o={}
o.a=b
s=b==null?o.a=!0:b
if(c==null)return p.h7("",a,new A.qf(p))
r=p.a.p(0,c)
q=r.a
if(!s)q+=" (only)"
return p.h7(q,a,new A.qg(o,p,r))},
i_(a){return this.df(a,null,null)},
l1(a,b){return this.df(a,null,b)},
pB(a,b){var s,r,q,p,o,n=this
t.bq.a(b)
s=n.$ti.h("bW<1>")
r=b.$ti
q=r.h("k.E")
p=A.pF(b,r.al(s).h("1(k.E)").a(new A.qd(n)),q,s)
o=A.a6(b,q)
B.a.fp(o)
return n.h7(B.a.aQ(o,"|")+" (match)",a,new A.qe(n,p))},
h7(a,b,c){var s,r,q,p,o,n,m,l,k,j=this.$ti
j.h("F(bq<1>)").a(c)
s=new A.ml(a,b)
r=this.c
q=r.p(0,s)
if(q==null){p=A.a([],j.h("r<bq<1>>"))
o=A.a([],t.gk)
for(n=this.b,n=new A.cH(n,n.r,n.e,A.z(n).h("cH<2>")),m=0;n.q();){l=n.d
k=c.$1(l)
if(k===0)continue
m+=Math.max(1e-7,k*(l.oY(b)*l.oE(b)))
B.a.j(p,l)
B.a.j(o,m)}q=new A.ij(p,o,m,j.h("ij<1>"))
r.i(0,s,q)}return q.eP()}}
A.qa.prototype={
$1(a){return this.a.$ti.h("bq<1>").a(a).a},
$S(){return this.a.$ti.h("1(bq<1>)")}}
A.qb.prototype={
$1(a){return this.a.$ti.h("bW<1>").a(a).a},
$S(){return this.a.$ti.h("q(bW<1>)")}}
A.qf.prototype={
$1(a){this.a.$ti.h("bq<1>").a(a)
return 1},
$S(){return this.a.$ti.h("F(bq<1>)")}}
A.qg.prototype={
$1(a){var s,r,q,p,o,n,m,l
for(s=this.c,r=this.a,q=this.b.$ti.h("bq<1>").a(a).f,p=A.z(q),o=p.h("cW<1>"),p=p.c,n=1;s!=null;s=s.b){for(m=new A.cW(q,q.r,o),m.c=q.e;m.q();){l=m.d
if((l==null?p.a(l):l).G(0,s))return n}m=r.a
m.toString
if(!m)break
n/=10}return 0},
$S(){return this.b.$ti.h("F(bq<1>)")}}
A.qd.prototype={
$1(a){var s
A.a2(a)
s=this.a.a.p(0,a)
if(s==null)throw A.n(A.aE('Unknown tag "'+a+'".',null))
return s},
$S(){return this.a.$ti.h("bW<1>(q)")}}
A.qe.prototype={
$1(a){var s,r,q,p,o=this.a
for(s=o.$ti.h("bq<1>").a(a).f,s=A.uo(s,s.r,A.z(s).c),r=this.b,q=s.$ti.c;s.q();){p=s.d
if(r.cZ(0,new A.qc(o,p==null?q.a(p):p)))return 1}return 0},
$S(){return this.a.$ti.h("F(bq<1>)")}}
A.qc.prototype={
$1(a){return this.a.$ti.h("bW<1>").a(a).G(0,this.b)},
$S(){return this.a.$ti.h("A(bW<1>)")}}
A.bq.prototype={
oY(a){var s=this,r=s.b,q=s.c
if(r===q)return s.d
return A.w(a,r,q,s.d,s.e)},
oE(a){var s,r,q=this.b
if(a<q){s=q-a
r=0.6+a*0.2
return Math.exp(-0.5*s*s/(r*r))}else{q=this.c
if(a>q){s=a-q
r=1+a*0.1
return Math.exp(-0.5*s*s/(r*r))}else return 1}}}
A.bW.prototype={
G(a,b){var s
this.$ti.a(b)
for(s=this;s!=null;s=s.b)if(b===s)return!0
return!1},
t(a){var s=this.b
if(s==null)return this.a
return s.t(0)+"/"+this.a}}
A.ml.prototype={
ga0(a){return B.i.ga0(this.a)^B.c.ga0(this.b)},
Z(a,b){if(b==null)return!1
t.nP.a(b)
return this.a===b.a&&this.b===b.b},
t(a){return this.a+" ("+this.b+")"}}
A.ij.prototype={
eP(){var s,r,q,p,o,n,m,l,k=this.b
if(k.length===0)return null
s=$.m().aP(this.d)
r=k.length
q=r-1
for(p=this.c,o=p.length,n=0;;){m=B.c.A(n+q,2)
if(m>0){l=m-1
if(!(l<o))return A.c(p,l)
l=s<p[l]}else l=!1
if(l)q=m-1
else{if(!(m>=0&&m<o))return A.c(p,m)
if(s<p[m]){if(!(m<r))return A.c(k,m)
return k[m].a}else n=m+1}}}}
A.dm.prototype={
t(a){return this.gam().a}}
A.aH.prototype={
gam(){return this.a}}
A.pV.prototype={
jN(a,b,c){var s,r,q=this,p=t.fm
p=new A.pY(q,a,p.a(b),p.a(c))
s=q.r
if(a===1)return new A.hn(p.$1(q.b),p.$1(q.c),p.$1(q.e),s)
else{r=q.d
return new A.hn(p.$1(r),p.$1(r),p.$1(q.f),s)}},
a7(a){return this.jN(a,null,null)},
t(a){return this.b}}
A.pY.prototype={
$1(a){var s,r,q=this,p=B.c.t(q.b),o=A.bj(a,"#",p)
p=q.c
if(p!=null&&p.length!==0){if(0>=p.length)return A.c(p,0)
s=p[0]
if(0>=s.length)return A.c(s,0)
r=B.i.G("aeiouAEIOU",s[0])?"an":"a"
o=A.bj(o,"<a>",r)
p=B.a.aQ(p," ")
o=A.bj(o,"<p>",p+" ")}else{p=q.a.a?"an":"a"
o=A.bj(o,"<a>",p)
o=A.bj(o,"<p>","")}p=q.d
return p!=null&&p.length!==0?o+" "+B.a.aQ(p," "):o},
$S:4}
A.pX.prototype={
$1(a){var s,r
this.a.a=!0
s=a.p(0,1)
s.toString
r=a.p(0,3)
if(r!=null){if(!this.b)s=r
return s}else{if(this.b)s=""
return s}},
$S:33}
A.ho.prototype={
aK(){return"NounCategory."+this.b}}
A.hn.prototype={
t(a){return this.a}}
A.dS.prototype={
aK(){return"Pronoun."+this.b},
t(a){return this.c+"/"+this.d}}
A.pE.prototype={
$1(a){this.a.h("@<0>").al(this.b).h("aO<1,2>").a(a)
return new A.O(a.a,a.b)},
$S(){return this.a.h("@<0>").al(this.b).h("+(1,2)(aO<1,2>)")}}
A.lo.prototype={
gN(a){var s,r,q,p,o,n,m,l,k=this,j=A.a([],t.l)
for(s=k.e,r=k.a,q=r.a,p=r.b.b.a,o=q.length;s<=k.f;++s)for(n=k.c,m=s*p;n<=k.d;++n){r.l(n,s)
l=m+n
if(!(l>=0&&l<o))return A.c(q,l)
if(J.aA(q[l],k.b))B.a.j(j,new A.d(n,s))}return new J.b_(j,j.length,t.aY)},
j(a,b){var s=this,r=s.a,q=r.$ti.c.a(s.b)
r.aY(b.gm(),b.gn(),q)
s.c=Math.min(s.c,b.gm())
s.d=Math.max(s.d,b.gm())
s.e=Math.min(s.e,b.gn())
s.f=Math.max(s.f,b.gn())}}
A.a3.prototype={
eY(a){var s,r,q,p=this.ar(a)
for(s=a.gcC(),r=s.$ti,s=new A.ah(s.a(),r.h("ah<1>")),r=r.c;s.q();){q=s.b
p=(q==null?r.a(q):q).kq(a,this,p)}return p},
ar(a){return 0},
dC(a,b){var s=this.eY(a)
if(s<=0)return b
return new A.jE(s,b)}}
A.V.prototype={}
A.cQ.prototype={}
A.cA.prototype={}
A.dD.prototype={}
A.aS.prototype={
eN(a,b){return!0},
bH(a){a.at=null
return this.a}}
A.kW.prototype={
eN(a,b){var s=b.z,r=b.Q.CW.a
r.toString
if(s===B.e.L(Math.pow(r,1.458)+9))return!1
if(b.ay===0){a.y.Q.at.X(B.x,"You must eat before you can rest.",null,null,null)
return!1}return!0},
bH(a){return A.kV()}}
A.c7.prototype={
eN(a,b){var s,r,q,p,o,n,m,l=this
if(l.a)return!0
s=l.b
if(s==null){s=l.d
r=A.a([s.gb9(),s,s.gba()],t.T)
if(B.a.G(B.at,l.d)){B.a.j(r,l.d.gbE())
B.a.j(r,l.d.gbV())}q=new A.ak(r,t.ca.a(new A.qt(l,a,b)),t.e0)
if(!q.gN(0).q())return!1
if(q.gI(0)===1){l.c=l.b=!1
l.d=q.gaw(0)}else{s=a.x
s===$&&A.b()
p=l.d.gb9()
p=b.y.F(0,p)
o=s.f
if(o.b.G(0,p)&&(o.B(p.a,p.b).a.e.a&$.bD().a)!==0){p=l.d.gbE()
p=b.y.F(0,p)
o=s.f
p=o.b.G(0,p)&&(o.B(p.a,p.b).a.e.a&$.bD().a)!==0}else p=!1
l.b=p
p=l.d.gba()
p=b.y.F(0,p)
o=s.f
if(o.b.G(0,p)&&(o.B(p.a,p.b).a.e.a&$.bD().a)!==0){p=l.d.gbV()
p=b.y.F(0,p)
s=s.f
s=s.b.G(0,p)&&(s.B(p.a,p.b).a.e.a&$.bD().a)!==0}else s=!1
l.c=s}}else{if(!s){s=l.c
s.toString
s=!s}else s=!1
if(s){s=a.x
s===$&&A.b()
if(!l.ny(s,b))return!1}else{s=a.x
s===$&&A.b()
p=l.d.gb9()
p=b.y.F(0,p)
s=s.f
o=s.b
n=o.G(0,p)&&(s.B(p.a,p.b).a.e.a&$.bD().a)!==0
p=l.d.gba()
p=b.y.F(0,p)
m=o.G(0,p)&&(s.B(p.a,p.b).a.e.a&$.bD().a)!==0
if(!(l.b===n&&l.c===m))return!1}}s=a.x
s===$&&A.b()
return l.nF(s,b)},
bH(a){this.a=!1
return A.bo(this.d)},
ny(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=A.a([],t.T),d=A.b9(t.j),c=A.b9(t.u),b=f.d,a=[b.gbE(),b.gb9(),b,b.gba(),b.gbV()]
for(b=a0.f,s=b.b,r=b.a,q=s.b.a,p=r.length,o=0;o<5;++o){n=a[o]
m=a1.y.F(0,n)
if(s.G(0,m)){l=m.a
k=m.b
b.l(l,k)
l=k*q+l
if(!(l>=0&&l<p))return A.c(r,l)
l=(r[l].a.e.a&$.bD().a)!==0}else l=!1
if(!l)continue
B.a.j(e,n)
j=[n.gb9(),n,n.gba()]
for(i=0;i<3;++i){h=m.F(0,j[i])
if(s.G(0,h)){l=h.a
k=h.b
b.l(l,k)
l=k*q+l
if(!(l>=0&&l<p))return A.c(r,l)
l=(r[l].a.e.a&$.bD().a)!==0}else l=!1
if(!l)continue
d.j(0,n)
c.j(0,h)}}g=d.a
if(0===g&&e.length===1){f.d=B.a.gaw(e)
return!0}if(1===g){f.d=d.gaw(0)
return!0}if(2===g&&c.a===1)if(d.G(0,f.d))return!0
else if(d.G(0,f.d.gb9())&&d.G(0,f.d.gbE())){f.d=f.d.gb9()
return!0}else if(d.G(0,f.d.gba())&&d.G(0,f.d.gbV())){f.d=f.d.gba()
return!0}return!1},
nF(a,b){var s,r,q,p,o=this,n=b.y.F(0,o.d)
if(!(a.bm(n,b.gb5())&&a.w.B(n.a,n.b)==null))return!1
s=a.f
r=n.a
q=n.b
if(s.B(r,q).a.e.Z(0,$.bC()))return!1
p=new A.qs(a)
if(p.$1(n))return!1
if(p.$1(n.F(0,o.d.gbE())))return!1
if(p.$1(n.F(0,o.d.gb9())))return!1
if(p.$1(n.F(0,o.d)))return!1
if(p.$1(n.F(0,o.d.gba())))return!1
if(p.$1(n.F(0,o.d.gbV())))return!1
if(s.B(r,q).x>0)return!1
return!0}}
A.qt.prototype={
$1(a){var s,r
t.j.a(a)
s=this.b.x
s===$&&A.b()
r=this.c.y.F(0,a)
s=s.f
return s.b.G(0,r)&&(s.B(r.a,r.b).a.e.a&$.bD().a)!==0},
$S:11}
A.qs.prototype={
$1(a){var s=this.a,r=a.a,q=a.b,p=s.f.B(r,q)
return!p.b&&p.d+p.e>p.c&&s.w.B(r,q)!=null},
$S:1}
A.dI.prototype={
eN(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b="In view: {1}."
d.d=a
if(d.c!=null)return!0
s=a.x
s===$&&A.b()
r=$.yb()
A.vB(s)
q=r.a.get(s)
if(q==null){q=A.b9(t.u)
r.i(0,s,q)}r=$.ya()
A.vB(s)
p=r.a.get(s)
if(p==null){p=A.b9(t.W)
r.i(0,s,p)}q.j(0,a0.y)
r=d.e
o=r==null
n=!o
if(n){if(a0.y.Z(0,r)&&!d.f)return!1
if(!d.f&&a.y.Q.at.b!==d.r)return!1}d.f=!1
r=A.a([],t.lE)
for(m=s.b,l=m.length,k=0;k<m.length;m.length===l||(0,A.o)(m),++k){j=m[k]
if(j instanceof A.aa&&a.cF(j))r.push(j)}i=d.a
m=i==null
if(m){if(r.length!==0){a.y.Q.at.X(B.x,b,B.a.gaw(r),c,c)
return!1}}else{l=d.w
if(l==null)l=d.w=r.length
if(r.length>l){a.y.Q.at.X(B.x,b,B.a.gcG(r),c,c)
return!1}}if(m){r={}
r.a=null
s.f_(new A.oe(r,s,p,o))
r=r.a
if(r!=null){a.y.Q.at.X(B.x,"You see {1}.",r,c,c)
return!1}}h=m?new A.of(q,s):i
r=!m
if(r&&i.$1(a0.y)){if(!d.b)a.y.Q.at.X(B.x,"You are on the stairs. Press again to take them.",c,c,c)
return!1}g=d.mz(a,a0,h)
if(g==null){if(r)s="You don't know where the stairs are."
else{r=a0.y
r=s.f.B(r.gm(),r.gn())
s=!(!r.b&&r.d+r.e>r.c)?"It is too dark to explore. Light a light source.":"Nothing left to explore. Try searching for secret doors."}a.y.Q.at.X(B.x,s,c,c,c)
return!1}f=g.a
e=g.b
if(d.b&&e===1&&n){a.y.Q.at.X(B.x,"Press again to enter.",c,c,c)
return!1}d.c=f
return!0},
bH(a){var s,r,q=this,p=q.c
p.toString
q.c=null
s=a.y
q.e=s
r=q.d
r===$&&A.b()
q.r=r.y.Q.at.b
r=r.x
r===$&&A.b()
s=s.F(0,p)
q.f=r.f.B(s.a,s.b).a.e.Z(0,$.bC())
return A.bo(p)},
mz(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t.mN.a(c)
s=a.x
s===$&&A.b()
r=t.u
q=A.C(r,t.lF)
p=A.he(r)
for(r=p.$ti.c,o=0;o<8;++o){n=B.a6[o]
m=b.y.F(0,n)
if(this.j8(a,m,c)){q.i(0,m,new A.O(n,1))
p.bj(r.a(m))}}for(s=s.f,l=s.a,k=s.b.b.a,j=l.length;!p.gaE(0);){m=p.cK()
i=q.p(0,m)
n=i.a
h=i.b
if(c.$1(m))return new A.O(n,h)
g=m.gm()
f=m.gn()
s.l(g,f)
g=f*k+g
if(!(g>=0&&g<j))return A.c(l,g)
if(l[g].a.b!=null)continue
for(g=h+1,o=0;o<8;++o){e=m.F(0,B.a6[o])
if(e.Z(0,b.y)||q.aj(e))continue
if(!this.j8(a,e,c))continue
q.i(0,e,new A.O(n,g))
p.bj(r.a(e))}}return null},
j8(a,b,c){var s,r,q,p
t.mN.a(c)
s=a.x
s===$&&A.b()
r=s.f
if(!r.b.G(0,b))return!1
q=b.a
p=b.b
r=r.B(q,p)
if(!r.r||(r.a.e.a&$.bD().a)===0)return!1
if(r.x>0)return!1
if(r.a.b!=null&&!c.$1(b))return!1
if(s.w.B(q,p)!=null&&!r.b&&r.d+r.e>r.c)return!1
return!0}}
A.oe.prototype={
$2(a,b){var s=this,r=s.b.f.B(b.gm(),b.gn())
if(!r.b&&r.d+r.e>r.c&&s.c.j(0,a)&&!s.d){r=s.a
if(r.a==null)r.a=a}},
$S:16}
A.of.prototype={
$1(a){var s,r=!1
if(!this.a.G(0,a)){s=this.b
if(s.f.B(a.gm(),a.gn()).a.b==null)r=!s.c5(a).gaE(0)||B.a.cZ(a.gbB(),new A.od(s))}return r},
$S:1}
A.od.prototype={
$1(a){var s
t.u.a(a)
s=this.a.f
return s.b.G(0,a)&&!s.B(a.gm(),a.gn()).r},
$S:1}
A.ax.prototype={
gam(){return $.xt()},
gbq(){var s=this.Q.CW.a
s.toString
return B.e.L(Math.pow(s,1.458)+9)},
gdP(){return this.Q.gdP()},
geK(){return"hero"},
dX(a){var s=this,r=s.at
if(r!=null&&!r.eN(a,s))s.at=null
return s.at==null},
gdE(){return this.Q.gdE()},
gjL(){return 6},
gjK(){var s=this.Q.ch.a
s.toString
return 20+A.vm(s)},
cp(){return $.bD()},
kA(){var s,r,q,p,o,n=A.a([],t.x)
for(s=this.Q,r=B.a.gN(s.f.b),q=new A.bp(r,t.k),p=t.W;q.q();){o=p.a(r.gH()).a.z
if(o!=null)n.push(o)}for(s=s.gcC(),r=s.$ti,s=new A.ah(s.a(),r.h("ah<1>")),r=r.c;s.q();){q=s.b
B.a.U(n,(q==null?r.a(q):q).eR(this))}return n},
ak(a){return this.at.bH(this)},
kw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.a([],t.d3)
for(s=e.Q,r=s.f.gcP(),q=J.aq(r.a),r=new A.cT(q,r.b,r.$ti.h("cT<1>"));r.q();){p=q.gH()
o=p.a.x
if(o.d<=0)B.a.j(d,new A.O(p,o))}if(d.length===0)B.a.j(d,new A.O(null,A.bd(e,"punch[es]",3,null,null)))
n=A.a([],t.o0)
for(r=d.length,q=t.aL,p=t.iO,o=t.kt,m=s.ch,l=e.ax,k=0;k<d.length;d.length===r||(0,A.o)(d),++k){j=d[k]
i=j.a
h=new A.b8(j.b,A.a([],p),A.a([],o),A.a([],p),A.a([],o),$.az())
B.a.j(n,h)
j=m.a
j.toString
h.jI(A.vn(j),"agility")
for(j=s.gcC(),g=j.$ti,j=new A.ah(j.a(),g.h("ah<1>")),g=g.c;j.q();){f=j.b
if(f==null)f=g.a(f)
f.hE(e,q.a(a),i,h)}if(i!=null){j=l.a
j.toString
h.cR(j,"heft")
i.ks(h)}}return n},
kD(a,b){var s,r,q,p
switch(b.a){case 0:break
case 1:break
case 2:s=this.Q.ay.a
s.toString
a.r*=A.we(s)
break}for(s=B.a.gN(this.Q.f.b),r=new A.bp(s,t.k),q=t.W;r.q();){p=q.a(s.gH())
if(p.a.r==null)p.ks(a)}},
hI(a){return this.Q.k5(a)},
kC(a,b){var s,r,q,p,o,n
t.B.a(b)
if(!this.as.G(0,b))return
s=this.Q
r=s.ax.ln(b.Q)
q=b.Q.gbo()*20/(r+19)
for(p=s.gcC(),o=p.$ti,p=new A.ah(p.a(),o.h("ah<1>")),o=o.c;p.q();){n=p.b
q=(n==null?o.a(n):n).kp(s,b,q)}this.i4(B.e.aT(q))},
kx(a,b){a.bX("{1} [were|was] slain by {2}.",this,b)},
kz(a){var s,r,q,p=this
p.cy=a.gdY()
s=p.CW
if(s>0&&p.cx>1){r=B.c.A(p.cx-2,2)
q=p.Q.ay.a
q.toString
p.CW=B.c.P(s-r,0,A.hN(q))}++p.cx},
hG(a,b,c){var s=a.x
s===$&&A.b()
s.gav().w=!0},
i4(a){this.Q.y+=a},
ih(a){this.Q.y-=a},
pn(a){var s,r,q,p=this
if(!(p.at instanceof A.aS))p.at=null
p.cx=0
if(p.z===0)return
s=B.e.aT(a.gd_()/p.z*10)
r=p.CW
q=p.Q.ay.a
q.toString
p.CW=B.c.P(r+s,0,A.hN(q))},
pq(){var s,r,q,p=this,o=null
if(p.w.a>0){p.Q.at.X(B.a_,"You cannot rest while poison courses through your veins!",o,o,o)
return!1}s=p.z
r=p.Q
q=r.CW.a
q.toString
if(s===B.e.L(Math.pow(q,1.458)+9)){r.at.X(B.x,"You are fully rested.",o,o,o)
return!1}if(p.ay===0){r.at.X(B.a_,"You are too hungry to rest.",o,o,o)
return!1}p.at=new A.kW()
return!0},
fo(a){if(this.as.j(0,a))this.Q.ax.i5(a.Q)},
fb(a){var s=this.ch,r=this.Q.cx.a
r.toString
this.ch=B.c.P(s+a,0,A.jY(r))},
bs(){var s,r,q,p,o,n,m,l,k=this,j=k.Q,i=j.ay
i.dd(j)
j.ch.dd(j)
s=j.CW
s.dd(j)
r=j.cx
r.dd(j)
j.z.po(j)
q=j.f.gcP()
p=A.a6(q,q.$ti.h("k.E"))
for(q=p.length,o=0,n=0;n<p.length;p.length===q||(0,A.o)(p),++n)o+=p[n].gf0()
for(j=j.gcC(),q=j.$ti,j=new A.ah(j.a(),q.h("ah<1>")),q=q.c;j.q();){m=j.b
o=(m==null?q.a(m):m).kr(k,p,o)}l=i.kc(B.e.O(o))
k.ax.l3(l,new A.oy(k,p,l))
j=k.z
s=s.a
s.toString
k.z=B.c.P(B.c.P(j,0,B.e.L(Math.pow(s,1.458)+9)),0,k.gbq())
s=k.ch
r=r.a
r.toString
k.ch=B.c.P(s,0,A.jY(r))
r=k.CW
i=i.a
i.toString
k.CW=B.c.P(r,0,A.hN(i))}}
A.oy.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
A:{s=g.length
r=s===2
q=r
p=h
o=!1
if(q){q=g.length
if(0>=q)return A.c(g,0)
n=g[0]
if(1>=q)return A.c(g,1)
p=g[1]
q=n.gam().a===p.gam().a
m=n
l=!0
k=!0}else{q=o
m=h
n=m
l=!1
k=!1}if(q){q=m.b0(2).gam().a
break A}if(r){if(l)m=n
else{if(0>=g.length)return A.c(g,0)
n=g[0]
m=n}if(k)j=p
else{if(1>=g.length)return A.c(g,1)
p=g[1]
j=p}q=m.gam().b+" and "+j.gam().b
break A}if(s===1){if(l)m=n
else{if(0>=g.length)return A.c(g,0)
n=g[0]
m=n}q=m.gam().b
break A}if(typeof s!=="number")return s.eb()
if(s<=0){q="your fists"
break A}q=A.a0(A.aE(h,h))}o=i.c
if(o<1&&a>=1)i.a.Q.at.X(B.a_,"You are too weak to effectively wield "+q+".",h,h,h)
else if(o>=1&&a<1)i.a.Q.at.X(B.x,"You feel comfortable wielding "+q+".",h,h,h)},
$S:79}
A.cE.prototype={
ie(a){var s=this.c.p(0,a.gcD())
return s==null?0:s}}
A.dc.prototype={
gdP(){var s,r,q,p
for(s=B.a.gN(this.f.b),r=new A.bp(s,t.k),q=t.W,p=0;r.q();)p+=q.a(s.gH()).a.ay
return p},
gdE(){var s,r,q,p,o
for(s=B.a.gN(this.f.b),r=new A.bp(s,t.k),q=t.W,p=0;r.q();){o=q.a(s.gH())
p+=o.a.Q+o.gc1()}for(s=this.gcC(),r=s.$ti,s=new A.ah(s.a(),r.h("ah<1>")),r=r.c;s.q();){q=s.b
p=(q==null?r.a(q):q).ko(this,p)}return p},
ge8(){var s,r,q,p
for(s=B.a.gN(this.f.b),r=new A.bp(s,t.k),q=t.W,p=0;r.q();)p+=q.a(s.gH()).ge8()
return p},
gcC(){return new A.R(this.oD(),t.kX)},
oD(){var s=this
return function(){var r=0,q=1,p=[],o
return function $async$gcC(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:r=2
return a.aL(s.b.d)
case 2:r=3
return a.aL(s.c.d)
case 3:o=s.z.a
r=4
return a.aL(new A.b2(o,A.z(o).h("b2<1>")))
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
ly(a,b,c,d){var s,r,q,p,o,n,m=this,l=null,k=t.X,j=A.dh(k)
for(s=m.b.c,r=j.$ti.c,q=0;q<4;++q){p=B.aR[q]
o=s.p(0,p)
o.toString
o-=0.4
j.cf(r.a(p),l,l,l,o,o,l)}k=A.C(k,t.S)
for(q=0;q<4;++q)k.i(0,B.aR[q],0)
for(n=0;n<32;++n){s=j.df(0,l,l)
s.toString
r=k.p(0,s)
r.toString
k.i(0,s,r+1)}for(s=[m.ay,m.ch,m.CW,m.cx],q=0;q<4;++q){p=s[q]
r=k.p(0,p.gbb())
r.toString
r=8+B.c.A(r+1,2)
p.b=r
p.a=B.c.P(r+p.hb(m)+m.dl(p.gbb()),1,50)}},
k5(a){var s,r,q,p
for(s=B.a.gN(this.f.b),r=new A.bp(s,t.k),q=t.W,p=0;r.q();)p+=q.a(s.gH()).c6(a)
return p},
dl(a){var s,r,q,p,o,n,m
for(s=B.a.gN(this.f.b),r=new A.bp(s,t.k),q=t.W,p=0;r.q();)for(o=q.a(s.gH()).gaf(),n=o.length,m=0;m<o.length;o.length===n||(0,A.o)(o),++m)p+=o[m].dl(a)
return p},
spd(a){this.as=A.u(a)}}
A.hg.prototype={
gjJ(){var s=this.b
return new A.cI(s,A.z(s).h("cI<2>")).az(0,0,new A.pu(),t.S)},
i5(a){var s,r=this.a
r.b7(a,new A.px())
s=r.p(0,a)
s.toString
r.i(0,a,s+1)},
ln(a){var s,r=this.b
r.b7(a,new A.py())
s=r.p(0,a)
s.toString;++s
r.i(0,a,s)
return s},
d7(a){var s,r,q,p,o=this.c,n=a.a
o.b7(n,new A.pv())
s=o.p(0,n)
s.toString
o.i(0,n,s+1)
for(o=a.gaf(),n=o.length,s=this.d,r=0;r<o.length;o.length===n||(0,A.o)(o),++r){q=o[r].a
s.b7(q,new A.pw())
p=s.p(0,q)
p.toString
s.i(0,q,p+1)}},
pF(a){var s,r=this.f,q=a.a
r.b7(q,new A.pz())
s=r.p(0,q)
s.toString
r.i(0,q,s+1)},
i6(a){var s=this.a.p(0,a)
return s==null?0:s},
ef(a){var s=this.b.p(0,a)
return s==null?0:s},
ka(a){var s=this.c.p(0,a)
return s==null?0:s}}
A.pu.prototype={
$2(a,b){return A.u(a)+A.u(b)},
$S:48}
A.px.prototype={
$0(){return 0},
$S:2}
A.py.prototype={
$0(){return 0},
$S:2}
A.pv.prototype={
$0(){return 0},
$S:2}
A.pw.prototype={
$0(){return 0},
$S:2}
A.pz.prototype={
$0(){return 0},
$S:2}
A.bU.prototype={}
A.aF.prototype={
hE(a,b,c,d){},
ko(a,b){return b},
eR(a){return B.hR},
kr(a,b,c){t.aa.a(b)
return c},
kp(a,b,c){return c},
kq(a,b,c){return c}}
A.mj.prototype={}
A.cK.prototype={}
A.f2.prototype={}
A.hu.prototype={
dI(a){var s=this.a
if(a.y.Q.b!==s)return"Not a "+s.a
return null},
gW(){return"You must be a "+this.a.a}}
A.af.prototype={
ai(a,b){return B.c.ai(this.a,t.M.a(b).a)},
$iau:1}
A.hJ.prototype={
eL(a){var s=this.a.p(0,a)
return s==null?0:s},
op(a){var s=this.b.p(0,a)
return s==null?0:s},
bS(a){var s=this.eL(a),r=this.b.p(0,a)
return B.c.P(s+(r==null?0:r),0,15)},
po(a){var s,r,q,p=this.b,o=A.cJ(p,t.M,t.S)
p.aU(0)
for(s=B.a.gN(a.f.b),r=new A.bp(s,t.k),q=t.W;r.q();)q.a(s.gH()).gee().ae(0,new A.qE(this))
p.ae(0,new A.qF(this,o,a))}}
A.qE.prototype={
$2(a,b){var s,r
t.M.a(a)
A.u(b)
s=this.a.b
s.b7(a,new A.qD())
r=s.p(0,a)
r.toString
s.i(0,a,r+b)},
$S:19}
A.qD.prototype={
$0(){return 0},
$S:2}
A.qF.prototype={
$2(a,b){var s
t.M.a(a)
A.u(b)
s=this.b.p(0,a)
if((s==null?0:s)!==b)this.c.at.i2("You are at level "+this.a.bS(a)+" in "+a.gM()+".")},
$S:19}
A.da.prototype={
ga0(a){return B.i.ga0(this.a)},
Z(a,b){if(b==null)return!1
return b instanceof A.da&&this.a===b.a}}
A.ms.prototype={}
A.bb.prototype={
l3(a,b){var s=A.z(this)
s.h("bb.T").a(a)
s.h("@(bb.T)").a(b)
s=this.a
if(s===a)return
this.a=a
if(s!=null)b.$1(s)}}
A.cn.prototype={
aK(){return"Stat."+this.b}}
A.co.prototype={
hb(a){return 0},
kO(a,b){var s,r=this
if(b!=null)r.b=b
s=r.dn(a)
r.l3(s,new A.qV(r,s,a))},
dd(a){return this.kO(a,null)},
hw(a){var s=a.ay.b,r=a.ch.b,q=a.CW.b,p=a.cx.b,o=a.b.c.p(0,this.gbb())
o.toString
return B.e.L(400*(1/o)*Math.pow(A.w(s+r+q+p,48,160,1,40),2))},
dn(a){return B.c.P(this.b+this.hb(a)+a.dl(this.gbb()),1,50)},
t(a){return this.gbb().c}}
A.qV.prototype={
$1(a){var s=this.b-A.u(a),r=this.a,q=this.c.at
if(s>0)q.i2("You feel "+r.ges()+"! Your "+r.gbb().c+" increased by "+s+".")
else q.X(B.a_,"You feel "+r.gew()+"! Your "+r.gbb().c+" decreased by "+-s+".",null,null,null)},
$S:32}
A.hM.prototype={
gbb(){return B.aj},
ges(){return"mighty"},
gew(){return"weak"},
hb(a){return-a.ge8()},
kc(a){var s,r=this.a
r.toString
s=B.e.P(r-a,-10,50)
if(s<0)return A.w(s,-10,-1,0,0.6)
else return A.w(s,0,50,1,2)}}
A.fE.prototype={
gbb(){return B.ac},
ges(){return"dextrous"},
gew(){return"clumsy"}}
A.hV.prototype={
gbb(){return B.aq},
ges(){return"tough"},
gew(){return"sickly"}}
A.h1.prototype={
gbb(){return B.a2},
ges(){return"smart"},
gew(){return"stupid"}}
A.ce.prototype={
gcb(){return this.a.w.$1(this.b)},
gd2(){return this.a.x.$1(this.b)},
gd1(){return this.a.y.$1(this.b)},
c6(a){var s=this.a.as.p(0,a)
if(s==null)return 0
return s.$1(this.b)},
dl(a){var s=this.a.at.p(0,a)
if(s==null)return 0
return s.$1(this.b)},
gee(){var s,r,q,p=t.M,o=A.C(p,t.S)
for(p=A.vX(this.a.ch,p,t.Q),s=A.z(p),p=new A.bn(J.aq(p.a),p.b,s.h("bn<1,2>")),r=this.b,s=s.y[1];p.q();){q=p.a
if(q==null)q=s.a(q)
o.i(0,q.a,q.b.$1(r))}return o},
t(a){return this.a.a+" "+this.b}}
A.ek.prototype={
fq(){var s=this.e
s=s==null?null:s.$0()
return new A.ce(this,s==null?0:s)},
lh(a,b){this.as.i(0,t.h.a(a),t.Q.a(b))},
lj(a,b){this.at.i(0,t.X.a(a),t.Q.a(b))},
t(a){return this.a}}
A.eA.prototype={
gkk(){return B.Z},
gcP(){var s=t.bC
return new A.ak(new A.hW(this.b,s),s.h("A(k.E)").a(new A.o4()),s.h("ak<k.E>"))},
gI(a){return B.a.az(this.b,0,new A.o3(),t.S)},
d0(){var s,r,q,p,o,n=A.ao(9,null,!1,t.U)
for(s=this.b,r=0;r<9;++r){q=s[r]
if(q!=null){p=q.a
o=q.f
B.a.i(n,r,new A.K(p,q.b,q.c,q.d,o))}}return new A.eA(n)},
oA(a){return B.a.cZ(B.aE,new A.o2(a))},
bn(){},
k0(a){var s,r,q,p,o,n,m,l,k,j=a.a,i=j.e
if(i==="hand"){i=t.t
s=A.a([],i)
r=A.a([],i)
for(i=this.b,q=0;q<9;++q)if(B.aE[q]==="hand"){B.a.j(s,q)
if(i[q]!=null)B.a.j(r,q)}p=r.length
if(p===0){if(0>=s.length)return A.c(s,0)
B.a.i(i,s[0],a)
return B.bt}if(p===1){if(0>=p)return A.c(r,0)
o=r[0]
if(!(o<9))return A.c(i,o)
o=i[o].a.f}else o=!1
if(o){if(0>=p)return A.c(r,0)
j=r[0]
if(!(j<9))return A.c(i,j)
j=i[j]
j.toString
if(0>=s.length)return A.c(s,0)
B.a.i(i,s[0],a)
return A.a([j],t.I)}if(j.f){n=A.a([],t.I)
for(j=r.length,m=0;m<r.length;r.length===j||(0,A.o)(r),++m){l=r[m]
if(!(l<9))return A.c(i,l)
p=i[l]
p.toString
B.a.j(n,p)
B.a.i(i,l,null)}if(0>=s.length)return A.c(s,0)
B.a.i(i,s[0],a)
return n}if(p===2){if(0>=p)return A.c(r,0)
j=r[0]
if(!(j<9))return A.c(i,j)
p=i[j]
p.toString
B.a.i(i,j,a)
return A.a([p],t.I)}if(0>=p)return A.c(r,0)
j=r[0]
p=s.length
if(0>=p)return A.c(s,0)
o=s[0]
if(j===o){if(1>=p)return A.c(s,1)
B.a.i(i,s[1],a)}else B.a.i(i,o,a)
return B.bt}for(j=this.b,k=-1,q=0;q<9;++q)if(B.aE[q]===i){if(j[q]==null){B.a.i(j,q,a)
return B.bt}k=q}if(!(k>=0&&k<9))return A.c(j,k)
i=j[k]
i.toString
n=A.a([i],t.I)
B.a.i(j,k,a)
return n},
ad(a,b){var s,r
for(s=this.b,r=0;r<9;++r)if(s[r]===b){B.a.i(s,r,null)
break}},
gN(a){return new A.bp(B.a.gN(this.b),t.k)},
geg(){return B.aE},
gcv(){return this.b}}
A.o4.prototype={
$1(a){return t.W.a(a).a.r!=null},
$S:9}
A.o3.prototype={
$2(a,b){A.u(a)
return a+(t.U.a(b)==null?0:1)},
$S:83}
A.o2.prototype={
$1(a){return this.a.a.e===A.a2(a)},
$S:84}
A.lP.prototype={}
A.c1.prototype={}
A.eJ.prototype={
geg(){return B.hS},
gcv(){return this}}
A.bS.prototype={
gI(a){return this.b.length},
d0(){var s=this.b,r=A.M(s)
return A.bI(this.a,new A.aP(s,r.h("K(1)").a(new A.oK()),r.h("aP<1,K>")))},
ad(a,b){B.a.ad(this.b,b)},
jO(a){var s,r,q,p,o=this.c
if(o===0||this.b.length<o)return!0
s=a.f
for(o=this.b,r=o.length,q=0;q<o.length;o.length===r||(0,A.o)(o),++q){p=o[q]
if(p.jQ(a)){s-=p.a.CW-p.f
if(s<=0)return!0}}return!1},
fj(a,b){var s,r,q,p,o,n=a.f
for(s=this.b,r=s.length,q=n,p=0;o=s.length,p<o;s.length===r||(0,A.o)(s),++p){s[p].lp(a)
q=a.f
if(q===0)return new A.dC(n,0)}r=this.c
if(r!==0&&o>=r)return new A.dC(n-q,q)
B.a.j(s,a)
B.a.fp(s)
if(b)this.d=a
return new A.dC(n,0)},
c8(a){return this.fj(a,!1)},
bn(){var s,r=this.b,q=A.a(r.slice(0),A.M(r))
B.a.aU(r)
for(r=q.length,s=0;s<q.length;q.length===r||(0,A.o)(q),++s)this.c8(q[s])},
gN(a){var s=this.b
return new J.b_(s,s.length,A.M(s).h("b_<1>"))},
gkk(){return this.a}}
A.oK.prototype={
$1(a){return t.W.a(a).d0()},
$S:86}
A.dC.prototype={}
A.m5.prototype={}
A.K.prototype={
gaf(){var s=A.a([],t.o_),r=this.b
if(r!=null)s.push(r)
r=this.c
if(r!=null)s.push(r)
r=this.d
if(r!=null)s.push(r)
return s},
gb2(){var s,r,q,p=$.az(),o=this.a.x,n=o!=null?o.e:p
for(o=this.gaf(),s=o.length,r=0;r<s;++r){q=o[r].a.Q
if(q!==p)n=q}return n},
gcb(){return B.a.az(this.gaf(),0,new A.pb(),t.S)},
gd2(){return B.a.az(this.gaf(),1,new A.p6(),t.i)},
gd1(){return B.a.az(this.gaf(),0,new A.p5(),t.S)},
gc1(){return B.a.az(this.gaf(),0,new A.p4(),t.S)},
gam(){var s,r=this,q=r.e
if(q===$){s=r.mM()
r.e!==$&&A.eg()
r.e=s
q=s}return q},
gbg(){var s,r,q,p,o=this,n=o.a.as,m=1+o.gaf().length
for(s=o.gaf(),r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
n*=p.a.ay.$1(p.b)*m}for(s=o.gaf(),r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
n+=p.a.ax.$1(p.b)*m}return B.e.aT(n)},
ge8(){return Math.max(0,B.a.az(this.gaf(),this.a.at,new A.pc(),t.S))},
gf0(){return B.e.O(B.a.az(this.gaf(),this.a.ax,new A.p7(),t.i))},
ks(a){var s,r,q,p,o,n,m
for(s=this.gaf(),r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
o=p.a
n=p.b
m=o.a+" "+n
a.jI(o.w.$1(n),m)
a.cR(o.x.$1(n),m)
a.ob(o.y.$1(n),m)}s=this.gb2()
if(s!==$.az())a.f=s},
c6(a){return B.a.az(this.gaf(),0,new A.p8(a),t.S)},
gee(){var s,r,q,p=A.C(t.M,t.S)
for(s=this.gaf(),r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q)s[q].gee().ae(0,new A.pa(p))
return p},
ai(a,b){var s,r,q,p,o=this
t.W.a(b)
s=o.a.d
r=b.a.d
if(s!==r)return B.c.ai(s,r)
if(o.gaf().length!==b.gaf().length)return B.c.ai(o.gaf().length,b.gaf().length)
for(q=0;q<o.gaf().length;++q){s=o.gaf()
if(!(q<s.length))return A.c(s,q)
p=s[q]
s=b.gaf()
if(!(q<s.length))return A.c(s,q)
r=p.a.d
s=s[q].a.d
if(r!==s)return B.c.ai(r,s)}s=o.f
r=b.f
if(s!==r)return B.c.ai(r,s)
return 0},
b0(a){var s=this,r=a==null?s.f:a
return new A.K(s.a,s.b,s.c,s.d,r)},
d0(){return this.b0(null)},
jQ(a){if(this.a!==a.a)return!1
if(this.gaf().length!==0)return!1
if(a.gaf().length!==0)return!1
return!0},
lp(a){var s,r,q=this
if(!q.jQ(a))return
s=q.f+a.f
r=q.a.CW
if(s<=r){q.f=s
a.f=0}else{q.f=r
a.f=s-r}},
dk(a){this.f-=a
return this.b0(a)},
mM(){var s,r,q,p,o=t.s,n=A.a([],o),m=A.a([],o)
for(o=this.gaf(),s=o.length,r=0;r<o.length;o.length===s||(0,A.o)(o),++r){q=o[r].a
p=q.b
if(q.c)B.a.j(n,p)
else B.a.j(m,p)}return this.a.a.jN(this.f,n,m)},
$iau:1}
A.pb.prototype={
$2(a,b){return A.u(a)+t.L.a(b).gcb()},
$S:12}
A.p6.prototype={
$2(a,b){return A.bA(a)*t.L.a(b).gd2()},
$S:34}
A.p5.prototype={
$2(a,b){return A.u(a)+t.L.a(b).gd1()},
$S:12}
A.p4.prototype={
$2(a,b){A.u(a)
t.L.a(b)
return a+b.a.z.$1(b.b)},
$S:12}
A.pc.prototype={
$2(a,b){A.u(a)
t.L.a(b)
return a+b.a.r.$1(b.b)},
$S:12}
A.p7.prototype={
$2(a,b){A.bA(a)
t.L.a(b)
return a*b.a.f.$1(b.b)},
$S:34}
A.p8.prototype={
$2(a,b){return A.u(a)+t.L.a(b).c6(this.a)},
$S:12}
A.pa.prototype={
$2(a,b){var s,r
t.M.a(a)
A.u(b)
s=this.a
s.b7(a,new A.p9())
r=s.p(0,a)
r.toString
s.i(0,a,r+b)},
$S:19}
A.p9.prototype={
$0(){return 0},
$S:2}
A.bJ.prototype={}
A.rn.prototype={}
A.aN.prototype={
t(a){return this.a.a7(1).a}}
A.kS.prototype={
nb(a){var s,r,q,p,o,n,m,l
t.D.a(a)
s=A.cJ(this.a,t.q,t.S)
for(r=a.b,q=A.M(r),r=new J.b_(r,r.length,q.h("b_<1>")),q=q.c;r.q();){p=r.d
if(p==null)p=q.a(p)
o=p.a
if(!s.aj(o))return null
n=s.p(0,o)
n.toString
s.i(0,o,n-p.f)}r=A.z(s).h("b2<1>")
r=A.a6(new A.b2(s,r),r.h("k.E"))
q=r.length
m=0
for(;m<r.length;r.length===q||(0,A.o)(r),++m){l=r[m]
p=s.p(0,l)
p.toString
if(p<=0)s.ad(0,l)}return s}}
A.dj.prototype={
oF(){var s=A.bI(new A.c1(this.b,26),null)
this.aH(s)
return s},
aH(a){var s,r,q,p,o,n,m,l,k,j,i=$.m(),h=a.c,g=B.e.L(i.aD(h*0.2,h*0.4))
for(s=a.b,r=i.a;q=s.length,q>g;){q=r.a1(q)
if(!(q>=0&&q<s.length))return A.c(s,q)
p=s[q]
B.a.de(s,q)
if(a.d===p)a.d=null}o=B.e.L(i.aD(h*0.3,h*0.7))
i=this.a
h=a.gl0()
n=0
for(;;){if(s.length<o){m=n+1
r=n<100
n=m}else r=!1
if(!r)break
i.b1(null,1,h)
for(l=1;l<s.length;++l){k=l-1
j=s[k]
p=s[l]
if(j.a===p.a&&j.gaf().length===0&&p.gaf().length===0){if(!(l<s.length))return A.c(s,l)
p=s[l]
B.a.de(s,l)
if(a.d===p)a.d=null
l=k}}}}}
A.j1.prototype={}
A.at.prototype={
gbo(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.ay
for(s=g.CW,r=s.length,q=0;q<r;++q)f+=s[q].a
s=6+g.z
if(!(s>=0&&s<13))return A.c(B.aO,s)
s=B.aO[s]
for(r=g.d,p=r.length,o=0,q=0;q<p;++q){n=r[q]
o+=n.c*n.e.e}for(r=g.e,m=r.length,l=0,k=0,q=0;q<r.length;r.length===m||(0,A.o)(r),++q){j=r[q]
i=j.a
l+=j.gbo()/i
k+=1/i}r=g.ax
h=r.a?1.1:1
if(r.b)h*=0.9
if(r.c)h*=1.05
if(r.d)h*=0.7
if(r.e)h*=1.1
return B.e.aT(g.f*(1+f/100)*s*(o/p*(1-k)+l)*h*A.w(g.y,0,100,1,0.7)/100)},
fs(a,b){var s=b!=null?b.as+1:1,r=a.gm(),q=a.gn(),p=new A.aa(this,s,new A.ch(),A.C(t.d0,t.cZ),$.m().br(60,200),new A.fT(),new A.dE(),new A.fK(),new A.dE(),new A.fW(),new A.fZ(),new A.hr(),new A.hs(),A.C(t.h,t.mF),new A.d(r,q))
p.lA(this,r,q,s)
return p},
ig(a){return this.fs(a,null)},
lo(){var s,r,q=this,p=A.a([],t.fO),o=$.m().aA(q.cx,q.cy)
for(s=0;s<o;++s)B.a.j(p,q)
r=q.db
if(r!=null)r.cS(B.e.bP(q.c*0.9),t.or.a(B.a.goa(p)))
return p},
t(a){return this.a.a}}
A.fa.prototype={
aK(){return"SpawnLocation."+this.b}}
A.nq.prototype={
t(a){var s=this,r=A.a([],t.s)
if(s.a)r.push("berzerk")
if(s.b)r.push("cowardly")
if(s.c)r.push("fearless")
if(s.d)r.push("immobile")
if(s.e)r.push("protective")
if(s.f)r.push("unique")
return B.a.aQ(r," ")}}
A.aa.prototype={
geK(){return this.Q.b},
gam(){return this.Q.a},
gbq(){return this.Q.f},
gdE(){return 0},
gdP(){return this.Q.ch},
gdi(){var s=this.Q,r=s.w,q=r+s.x
if(q===0)return 0
return r/q},
lA(a,b,c,d){var s,r,q,p,o=this
o.z=B.c.P(o.Q.f,0,o.gbq())
s=o.at
s.a!==$&&A.as()
s.a=o
s=o.Q
if(s.ax.b)o.cx*=0.7
for(s=s.e,r=s.length,q=o.ax,p=0;p<s.length;s.length===r||(0,A.o)(s),++p)q.i(0,s[p],0)},
l4(a){var s,r=this.ax,q=r.p(0,a)
q.toString
s=a.a
r.i(0,a,q+$.m().aD(s,s*1.3))},
gjL(){return 6+this.Q.z},
gjK(){return this.Q.ay},
cp(){return this.Q.at},
kA(){return this.Q.CW},
ak(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="{1} is afraid!"
for(s=i.Q.e,r=s.length,q=i.ax,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
n=q.p(0,o)
n.toString
q.i(0,o,Math.max(0,n-1))}m=0+i.nC(a)+i.mI(a)
s=i.ch*0.75+m*0.2
i.ch=s
i.ch=B.e.P(s,0,1)
s=i.y
l=5+s.S(0,a.y.y).gb4()
r=a.x
r===$&&A.b()
s=r.f.B(s.gm(),s.gn())
if(!(!s.b&&s.d+s.e>s.c))l=5+l*2
i.dw(-(2+l*i.z/i.Q.f))
i.CW=B.e.P(i.CW,0,i.cx)
k=Math.max(m,i.ch)
A.ck(i,"aware",m,h)
A.ck(i,"alert",i.ch,h)
A.ck(i,"notice",k,h)
A.ck(i,"fear",i.CW/i.cx,h)
j=i.at
s=j instanceof A.ch
if(s&&i.CW>i.cx){i.h5()
return A.j5(g,new A.cv(),B.b1)}if(s){s=$.m()
r=i.lK(k)
r=s.T(100)<r
s=r}else s=!1
if(s){i.ch=1
i.h5()
return A.j5("{1} wakes up!",new A.cx(),B.bF)}s=j instanceof A.cx
if(s&&i.CW>i.cx)return A.j5(g,new A.cv(),B.b1)
if(s&&k<0.01){i.ch=0
return A.j5("{1} falls asleep.",new A.ch(),h)}if(j instanceof A.cv&&i.CW<=0)return A.j5("{1} find[s] {1 his} courage.",new A.cx(),h)
return i.at.bH(a)},
lK(a){var s
if(a<0.1)return 0
if(a>0.8)return 100
s=A.w(a,0.1,0.8,0,1)
return B.e.O(A.w(s*s*s,0,1,5,100))},
nC(a){var s,r,q,p,o,n=this,m="see"
if(n.Q.w===0){A.ck(n,m,0,"sightless")
return 0}s=a.y.y
r=a.x
r===$&&A.b()
if(!r.eO(n,s)){A.ck(n,m,0,"out of sight")
return 0}r=r.f.B(s.gm(),s.gn())
q=r.d+r.e
if(q===0){A.ck(n,m,0,"hero in dark")
return 0}p=s.S(0,n.y).gb4()
r=n.Q.w
if(p>=r){A.ck(n,m,0,"too far")
return 0}o=(r-p)/r
A.ck(n,m,q*o,null)
return q/64*o},
mI(a){var s,r,q,p=this
if(p.Q.x===0){A.ck(p,"hear",0,"deaf")
return 0}s=a.x
s===$&&A.b()
r=p.y
s=s.geF()
r=s.jz(s.iU(r))
s=a.y.cy
q=r*s*p.Q.x/10
A.ck(p,"hear",q,"noise "+A.J(s)+", volume "+A.J(q))
return q},
dw(a){var s,r=this
if(r.z<=0)return
s=r.Q.ax
if(s.c)return
if(s.d)return
r.CW=Math.max(0,r.CW+a)},
kw(a){var s=$.m(),r=t.aH.a(this.Q.d)
s=s.T(r.length)
if(!(s>=0&&s<r.length))return A.c(r,s)
return A.a([A.bH(r[s])],t.o0)},
hI(a){return 0},
kB(a,b,c){var s,r,q=a.c
q===$&&A.b()
s=q.y.Q.CW.a
s.toString
r=100*c/B.e.L(Math.pow(s,1.458)+9)
this.dw(-r)
s=q.y.Q.CW.a
s.toString
A.jj(this,"fear","hit for "+c+"/"+B.e.L(Math.pow(s,1.458)+9)+" decrease by "+A.J(r))
this.jx(q,new A.pO(a,c))},
o6(a,b){var s,r=this
if(r.at instanceof A.ch)return
s=50*b/r.Q.f
r.dw(-s)
A.jj(r,"fear","witness "+b+"/"+r.Q.f+" decrease by "+A.J(s))},
kF(a,b,c){var s,r,q,p,o,n,m=this
m.ch=1
s=m.Q
r=100*c/s.f
if(s.ax.a)r*=-3
m.dw(r)
A.jj(m,"fear","hit for "+c+"/"+m.Q.f+" increases by "+A.J(r))
s=a.c
s===$&&A.b()
m.jx(s,new A.pP(m,a,c))
q=m.Q.e
p=A.M(q)
o=p.h("ak<1>")
n=A.a6(new A.ak(q,p.h("A(1)").a(new A.pQ(m,c)),o),o.h("k.E"))
q=n.length
if(q!==0){p=$.m()
t.kz.a(n)
q=p.T(q)
if(!(q>=0&&q<n.length))return A.c(n,q)
q=n[q]
m.l4(q)
a.hf(q.bU(s,m),m)}},
o7(a,b,c){var s,r,q,p=this
if(p.at instanceof A.ch)return
s=p.Q
r=50*c/s.f
q=s.ax
if(q.e&&b.Q===s)r*=-2
else if(q.a)r*=-1
p.dw(r)
A.jj(p,"fear","witness "+c+"/"+p.Q.f+" increase by "+A.J(r))},
kx(a,b){var s,r,q,p,o,n,m,l,k=this,j=a.c
j===$&&A.b()
s=j.x
s===$&&A.b()
r=k.y
q=k.Q
p=s.e0(r,q.Q,q.c)
for(s=p.length,o=0;o<p.length;p.length===s||(0,A.o)(p),++o){n=p[o]
r=j.x
r===$&&A.b()
q=a.b
q===$&&A.b()
r=r.f
m=q.gm()
q=q.gn()
r.l(m,q)
l=r.a
m=q*r.b.b.a+m
if(!(m>=0&&m<l.length))return A.c(l,m)
m=l[m]
if(!m.b&&m.d+m.e>m.c||a.a instanceof A.ax)j.y.Q.at.X(B.x,"{1} drop[s] {2}.",k,n,null)}j=j.x
j===$&&A.b()
j.kP(k)},
hG(a,b,c){var s,r=a.x
r===$&&A.b()
s=r.f.B(b.gm(),b.gn())
if(!(!s.b&&s.d+s.e>s.c)){s=r.f.B(c.gm(),c.gn())
s=!s.b&&s.d+s.e>s.c}else s=!0
if(s){s=a.y
if(!(s.at instanceof A.aS))s.at=null}s=r.f.B(b.gm(),b.gn())
if(!(!s.b&&s.d+s.e>s.c)){r=r.f.B(c.gm(),c.gn())
r=!r.b&&r.d+r.e>r.c}else r=!1
if(r)a.y.fo(this)},
jx(a,b){var s,r,q,p,o,n,m
t.lL.a(b)
s=a.x
s===$&&A.b()
r=s.b
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.o)(r),++p){o=r[p]
if(o===this)continue
if(!(o instanceof A.aa))continue
n=o.y
m=this.y
n=n.S(0,m)
if(Math.max(Math.abs(n.a),Math.abs(n.b))>20)continue
if(s.eO(o,m))b.$1(o)}},
h5(){var s,r,q,p,o
for(s=this.Q.e,r=s.length,q=this.ax,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
q.i(0,o,$.m().aP(o.a/2))}}}
A.pO.prototype={
$1(a){a.o6(this.a,this.b)},
$S:35}
A.pP.prototype={
$1(a){a.o7(this.b,this.a,this.c)},
$S:35}
A.pQ.prototype={
$1(a){return t.d0.a(a).ia(this.a,this.b)},
$S:36}
A.j4.prototype={
V(){var s,r,q,p=this
p.a_(p.e,p.a)
s=p.r
if(s!=null)p.cB(s,p.a)
r=t.B.a(p.a)
q=r.at=p.f
q.a!==$&&A.as()
q.a=r
r=p.c
r===$&&A.b()
return p.bd(q.bH(r))}}
A.pM.prototype={
hM(a){var s,r=this,q=r.e
if(q!=null){s=r.c
s=r.dV(a.b,s)<r.dV(q.b,s)}else s=!0
if(s)q=r.e=a
if(a.c>=r.d.Q.r)return q.a
return null},
dV(a,b){var s,r=b.S(0,a),q=Math.abs(r.a)
r=Math.abs(r.b)
s=Math.min(q,r)
return(Math.max(q,r)-s)*10+s*11},
fu(a,b){var s,r,q,p=this,o=null
if(b.x!==0)return o
s=a.S(0,p.b).gb4()===1
if(p.a.w.B(a.a,a.b)!=null){if(s)return o
return 60}r=b.a.e
q=$.bC()
if(r.Z(0,q))if((p.d.gb5().a&q.a)!==0)return 20
else if(s)return o
else return 80
if((r.a&p.d.gb5().a)!==0)return 10
return o},
hO(a){return a.a},
i1(){var s=this.e
if(s==null)return null
return s.a}}
A.eP.prototype={
fX(a,b){var s,r,q,p,o=this.a
o===$&&A.b()
s=o.Q.y
if(o.b.a>0||o.d.a>0)s+=B.e.L(o.gdi()*50)
else if(o.y.F(0,b).Z(0,a.y.y))s=s/4|0
s=Math.min(s,90)
if(!($.m().T(100)<s))return b
if(b===B.r)r=B.a6
else{r=A.a([],t.T)
for(q=0;q<3;++q){B.a.j(r,b.gb9())
B.a.j(r,b.gba())}for(q=0;q<2;++q){B.a.j(r,b.gbE())
B.a.j(r,b.gbV())}B.a.j(r,b.gbE().gb9())
B.a.j(r,b.gbV().gba())}o=A.M(r)
p=o.h("ak<1>")
r=A.a6(new A.ak(r,o.h("A(1)").a(new A.pN(this,a)),p),p.h("k.E"))
o=r.length
if(o===0)return b
p=$.m()
t.du.a(r)
o=p.T(o)
if(!(o>=0&&o<r.length))return A.c(r,o)
return r[o]}}
A.pN.prototype={
$1(a){var s,r,q,p
t.j.a(a)
s=this.a.a
s===$&&A.b()
r=s.y.F(0,a)
q=this.b
p=q.x
p===$&&A.b()
if(!(p.bm(r,s.gb5())&&p.f.B(r.a,r.b).x===0))return!1
s=p.w.B(r.a,r.b)
return s==null||s===q.y},
$S:11}
A.ch.prototype={
bH(a){return A.kV()}}
A.cx.prototype={
bH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.mn(a)
if(b!==B.r)return A.bo(b)
s=c.a
s===$&&A.b()
r=s.Q.e
q=A.M(r)
p=q.h("ak<1>")
o=A.a6(new A.ak(r,q.h("A(1)").a(new A.nl(c,a)),p),p.h("k.E"))
r=o.length
if(r!==0){q=$.m()
t.kz.a(o)
r=q.T(r)
if(!(r>=0&&r<o.length))return A.c(o,r)
r=o[r]
s.l4(r)
return r.bU(a,s)}r=s.Q
if(r.ax.d){n=a.y.y.S(0,s.y)
if(n.gb4()!==1)return A.kV()
return A.bo(n.gku())}s.ay=!0
for(q=r.e,p=q.length,m=0,l=0,k=0;k<p;++k){j=q[k]
if(!(j instanceof A.fI))continue
m+=j.b.c/j.a;++l}if(l!==0){for(q=r.d,p=q.length,i=0,h=0,k=0;k<p;++k){i+=q[k].c;++h}if(h>0)i/=h
m/=l
g=100*m/(m+i)+s.CW+100*(1-s.z/r.f)
if(s.y.S(0,a.y.y).eb(0,1))s.ay=g<60
else s.ay=g<30}f=c.mv(a)
e=l>0?c.mw(a):null
if(s.ay)d=f==null?e:f
else d=e==null?f:e
return A.bo(c.fX(a,d==null?B.r:d))},
mn(a){var s,r,q=a.x
q===$&&A.b()
s=this.a
s===$&&A.b()
r=s.y
if(q.f.B(r.gm(),r.gn()).x===0)return B.r
return A.cm(q,s.y,s.gb5(),null,!0,null).ho(new A.nj(a))},
mw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={}
c.a=9999
s=this.a
s===$&&A.b()
r=s.Q.e
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.o)(r),++p){o=r[p]
if(o.gaB()>0&&o.gaB()<c.a)c.a=o.gaB()}n=new A.nk(c,this,a)
if(n.$1(s.y)){m=s.y.S(0,a.y.y).gb4()
l=B.r}else{l=null
m=0}for(r=a.y,p=0;p<8;++p){k=B.a6[p]
j=s.y.F(0,k)
q=a.x
q===$&&A.b()
i=s.cp()
if(q.bm(j,s.e.a>0?new A.ae(i.a|$.U().a):i)){h=q.w
g=j.a
f=j.b
h.l(g,f)
e=h.a
g=f*h.b.b.a+g
if(!(g>=0&&g<e.length))return A.c(e,g)
g=e[g]==null
h=g}else h=!1
if(h){q=q.f
h=j.a
g=j.b
q.l(h,g)
f=q.a
h=g*q.b.b.a+h
if(!(h>=0&&h<f.length))return A.c(f,h)
h=f[h].x===0
q=h}else q=!1
if(!q)continue
if(!n.$1(j))continue
q=j.S(0,r.y)
d=Math.max(Math.abs(q.a),Math.abs(q.b))
if(d>m){m=d
l=k}}if(l!=null)return l
r=a.x
r===$&&A.b()
k=A.cm(r,s.y,s.gb5(),null,!0,c.a).ho(n)
if(k!==B.r){A.cj(s,"ranged position "+k.t(0))
return k}A.cj(s,"no good ranged position")
return null},
mv(a){var s,r,q=this.mu(a)
if(q!=null)return q
s=a.x
s===$&&A.b()
r=this.a
r===$&&A.b()
return new A.pM(r,s,r.y,s.a.y.y).fn()},
mu(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a
f===$&&A.b()
s=a.y
r=A.e4(f.y,s.y)
q=g
p=1
while(r.q(),!0){o=r.a
if(q==null)q=o
n=a.x
n===$&&A.b()
m=n.f
l=o.gm()
k=o.gn()
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.c(j,l)
if(j[l].x>0)return g
i=f.cp()
if(!n.bm(o,f.e.a>0?new A.ae(i.a|$.U().a):i))return g
n=n.w
m=o.gm()
l=o.gn()
n.l(m,l)
k=n.a
m=l*n.b.b.a+m
if(!(m>=0&&m<k.length))return A.c(k,m)
m=k[m]
if(m!=null&&!(m instanceof A.ax))return g;++p
if(p>=f.Q.r)return g
if(o.Z(0,s.y))break}h=q.S(0,f.y)
f=h.b
if(f===-1){f=h.a
if(f===-1)return B.U
else if(f===0)return B.M
else return B.R}else if(f===0)if(h.a===-1)return B.S
else return B.P
else{f=h.a
if(f===-1)return B.T
else if(f===0)return B.L
else return B.Q}},
mG(a,b){var s,r,q,p,o,n,m,l
for(s=a.y,r=A.e4(b,s.y);r.q(),!0;){q=r.a
if(q.Z(0,s.y))return!0
p=a.x
p===$&&A.b()
o=p.f
n=q.gm()
m=q.gn()
o.l(n,m)
l=o.a
n=m*o.b.b.a+n
if(!(n>=0&&n<l.length))return A.c(l,n)
n=l[n]
l=$.U()
if((n.a.e.a&l.a)===0)return!1
p=p.w
o=q.gm()
n=q.gn()
p.l(o,n)
m=p.a
o=n*p.b.b.a+o
if(!(o>=0&&o<m.length))return A.c(m,o)
o=m[o]
if(o!=null){p=this.a
p===$&&A.b()
p=o!==p}else p=!1
if(p)return!1}throw A.n(A.bG("Unreachable."))}}
A.nl.prototype={
$1(a){var s
t.d0.a(a)
s=this.a.a
s===$&&A.b()
return s.ax.p(0,a)===0&&a.bK(this.b,s)},
$S:36}
A.nj.prototype={
$1(a){var s=this.a.x
s===$&&A.b()
return s.f.B(a.a,a.b).x===0},
$S:1}
A.nk.prototype={
$1(a){var s,r,q=this,p=q.c,o=a.S(0,p.y.y)
if(o.bh(0,q.a.a))return!1
if(o.gb4()<=2)return!1
s=p.x
s===$&&A.b()
s=s.w.B(a.gm(),a.gn())
if(s!=null){r=q.b.a
r===$&&A.b()
r=s!==r
s=r}else s=!1
if(s)return!1
return q.b.mG(p,a)},
$S:1}
A.cv.prototype={
bH(a){var s,r,q,p,o,n=this,m=a.x
m===$&&A.b()
s=n.a
s===$&&A.b()
r=s.y
if(m.f.B(r.gm(),r.gn()).b)return A.kV()
q=A.cm(m,s.y,s.gb5(),null,!0,s.Q.r).ho(new A.nf(a))
if(q!==B.r){A.cj(s,"fleeing "+q.t(0)+" out of sight")
return A.bo(n.fX(a,q))}m=t.e0
p=new A.ak(B.a6,t.ca.a(new A.ng(n,a,s.y.S(0,a.y.y).gb4())),m)
if(!p.gaE(0)){r=$.m()
m=A.a6(p,m.h("k.E"))
t.du.a(m)
r=r.T(m.length)
if(!(r>=0&&r<m.length))return A.c(m,r)
q=m[r]
A.cj(s,"fleeing "+q.t(0)+" away from hero")
return A.bo(n.fX(a,q))}o=s.at=new A.cx()
o.a=s
return o.bH(a)}}
A.nf.prototype={
$1(a){var s=this.a.x
s===$&&A.b()
return s.f.B(a.a,a.b).b},
$S:1}
A.ng.prototype={
$1(a){var s,r,q,p
t.j.a(a)
s=this.a.a
s===$&&A.b()
r=s.y.F(0,a)
q=this.b
p=q.x
p===$&&A.b()
if(!(p.bm(r,s.gb5())&&p.w.B(r.a,r.b)==null&&p.f.B(r.a,r.b).x===0))return!1
return r.S(0,q.y.y).gb4()>this.c},
$S:11}
A.ba.prototype={
gaB(){return 0},
bK(a,b){return!0},
ia(a,b){return!1}}
A.kP.prototype={
gaB(){return this.b.d}}
A.ci.prototype={
aZ(a,b,c){var s,r,q,p=this,o=p.$ti.c
o.a(b)
p.b=Math.min(p.b,c)
s=p.a
r=c+1
if(s.length<=r)B.a.sI(s,r)
if(!(c>=0&&c<s.length))return A.c(s,c)
q=s[c]
if(q==null){q=A.he(o)
B.a.i(s,c,q)}q.bj(q.$ti.c.a(b))},
fc(){var s,r,q,p=this.a
for(;;){s=this.b
r=p.length
if(s<r){if(!(s>=0))return A.c(p,s)
q=p[s]
q=q==null?null:q.b===q.c
q=q!==!1}else q=!1
if(!q)break
this.b=s+1}if(s>=r)return null
if(!(s>=0))return A.c(p,s)
return p[s].cK()}}
A.eB.prototype={
fB(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.a.f
if(c==null){k.d!==$&&A.as()
k.d=new A.d(1,1)
j=j.b.b
s=j.a-2
r=j.b-2}else{q=k.b
p=Math.max(1,q.gm()-c)
o=Math.max(1,q.gn()-c)
j=j.b.b
n=Math.min(j.a-1,q.gm()+c+1)
m=Math.min(j.b-1,q.gn()+c+1)
k.d!==$&&A.as()
k.d=new A.d(p,o)
s=n-p
r=m-o}j=t.z
j=j.a(new A.a8(A.ao(s*r,-2,!1,t.S),new A.Z(new A.d(0,0),new A.d(s,r)),j))
k.c!==$&&A.as()
k.c=j
q=k.d
q===$&&A.b()
l=k.b.S(0,q)
k.e.aZ(0,l,0)
j.aY(l.a,l.b,0)},
gcI(){return new A.R(this.pm(),t.e6)},
pm(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l
return function $async$gcI(a,b,c){if(b===1){p.push(c)
r=q}for(;;)A:switch(r){case 0:o=s.f,n=0
case 3:while(n>=o.length)if(!s.h1()){r=1
break A}m=o[n]
l=s.d
l===$&&A.b()
r=6
return a.b=m.F(0,l),1
case 6:case 4:++n
r=3
break
case 5:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
jM(a){var s,r=this.iP(t.mN.a(a)),q=r.length
if(q===0)return null
s=$.m()
t.A.a(r)
q=s.T(q)
if(!(q>=0&&q<r.length))return A.c(r,q)
q=r[q]
s=this.d
s===$&&A.b()
return q.F(0,s)},
cj(a){var s,r,q,p,o,n=this.d
n===$&&A.b()
a=a.S(0,n)
n=this.c
n===$&&A.b()
if(!n.b.G(0,a))return null
s=a.a
r=a.b
for(;;){n.l(s,r)
q=n.a
p=r*n.b.b.a+s
if(!(p>=0&&p<q.length))return A.c(q,p)
if(!(J.aA(q[p],-2)&&this.h1()))break}o=n.B(s,r)
if(o===-2||o===-1)return null
return o},
ho(a){var s,r=this.m5(this.iP(t.mN.a(a))),q=r.length
if(q===0)return B.r
s=$.m()
t.du.a(r)
q=s.T(q)
if(!(q>=0&&q<r.length))return A.c(r,q)
return r[q]},
iP(a){var s,r,q,p,o,n,m,l,k,j,i=this
t.mN.a(a)
s=A.a([],t.l)
for(r=i.f,q=null,p=0;;++p){while(p>=r.length)if(!i.h1())return s
o=r[p]
n=i.d
n===$&&A.b()
if(!a.$1(o.F(0,n)))continue
n=i.c
n===$&&A.b()
m=o.a
l=o.b
n.l(m,l)
k=n.a
m=l*n.b.b.a+m
if(!(m>=0&&m<k.length))return A.c(k,m)
j=k[m]
if(q==null||j===q)B.a.j(s,o)
else break
q=j}return s},
m5(a){var s,r=A.b9(t.j)
B.a.ae(t.A.a(a),new A.oj(this,A.b9(t.u),r))
s=A.a6(r,r.$ti.c)
return s},
h1(){var s,r=this.e.fc()
if(r==null)return!1
s=this.c
s===$&&A.b()
s=new A.ok(this,r,s.B(r.gm(),r.gn()))
s.$2(B.M,!1)
s.$2(B.L,!1)
s.$2(B.P,!1)
s.$2(B.S,!1)
s.$2(B.U,!0)
s.$2(B.R,!0)
s.$2(B.T,!0)
s.$2(B.Q,!0)
return!0}}
A.oj.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
t.u.a(a)
s=f.b
if(s.G(0,a))return
s.j(0,a)
for(s=f.a,r=s.b,q=f.c,p=0;p<8;++p){o=B.a6[p]
n=a.F(0,o)
m=s.c
m===$&&A.b()
l=m.b
if(!l.G(0,n))continue
k=s.d
k===$&&A.b()
if(n.Z(0,r.S(0,k)))q.j(0,o.gcL())
else{k=n.a
j=n.b
m.l(k,j)
i=m.a
l=l.b.a
h=j*l+k
g=i.length
if(!(h>=0&&h<g))return A.c(i,h)
h=i[h]
if(typeof h!=="number")return h.cQ()
if(h>=0){m.l(k,j)
k=a.gm()
j=a.gn()
m.l(k,j)
k=j*l+k
if(!(k>=0&&k<g))return A.c(i,k)
k=i[k]
if(typeof k!=="number")return A.Bh(k)
k=h<k
m=k}else m=!1
if(m)f.$1(n)}}},
$S:10}
A.ok.prototype={
$2(a,b){var s,r,q,p,o,n,m,l=this.b.F(0,a),k=this.a,j=k.c
j===$&&A.b()
if(!j.b.G(0,l))return
s=l.a
r=l.b
if(!J.aA(j.B(s,r),-2))return
q=k.d
q===$&&A.b()
p=l.F(0,q)
p=k.a.f.B(p.a,p.b)
o=this.c
n=k.hW(o,l.F(0,q),p,b)
q=j.$ti
if(n==null)j.aY(s,r,q.c.a(-1))
else{m=o+n
j.aY(s,r,q.c.a(m))
B.a.j(k.f,l)
k.e.aZ(0,l,m)}},
$S:91}
A.kn.prototype={
hW(a,b,c,d){var s,r=this,q=null
if((c.a.e.a&r.r.a)===0)return q
if(r.x&&c.x>0)return q
if(r.w&&r.a.w.B(b.a,b.b)!=null)return q
s=r.y
if(s!=null)s=a>=s
else s=!1
if(s)return q
return 1}}
A.om.prototype={
dd(a){var s,r=this.a
if(r.a.y.b.a>0){this.mJ()
return}for(s=0;s<8;++s)this.nl(a,s)
r.dh(a,!1,0)},
mJ(){var s,r
for(s=this.a,r=A.ab(s.f.b);r.q();)s.dh(new A.d(r.b,r.c),!0,0)
s.dh(s.a.y.y,!1,0)},
nl(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
if(!(a6<8))return A.c($.vD,a6)
s=$.vD[a6]
r=s[0]
q=s[1]
a4.b=A.a([],t.mS)
s=a4.a
p=s.f
o=p.b
for(n=p.a,m=o.b.a,l=n.length,k=r.a,j=r.b,i=!1,h=1;;h=e){g=a5.F(0,new A.d(k*h,j*h))
if(!o.G(0,g))break
for(f=h+2,e=h+1,d=!1,c=0;c<=h;++c){if(i||d)s.dh(g,!0,255)
else{b=a5.S(0,g)
a=b.a
b=b.b
a0=Math.sqrt(a*a+b*b)
if(a0>24){d=!0
a1=255}else{a2=a0/24
a1=B.e.L(a2*a2*255)}a3=new A.mr(c/f,(c+1)/e)
s.dh(g,a4.mN(a3),a1)
b=g.a
a=g.b
p.l(b,a)
b=a*m+b
if(!(b>=0&&b<l))return A.c(n,b)
b=n[b]
a=$.U()
if((b.a.e.a&a.a)===0)i=a4.lH(a3)}g=g.F(0,q)
if(!o.G(0,g))break}}},
mN(a){var s,r,q,p,o,n
for(s=this.b,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(n.a<=q&&n.b>=p)return!0}return!1},
lH(a){var s,r,q,p,o,n,m
for(s=this.b,r=s.length,q=a.a,p=0;o=p<r,o;++p)if(s[p].a>q)break
if(p>0){n=p-1
if(!(n<r))return A.c(s,n)
m=s[n].b>q}else m=!1
if(o&&s[p].a<a.b)if(m){q=p-1
if(!(q>=0&&q<r))return A.c(s,q)
q=s[q]
o=q.b
if(!(p<r))return A.c(s,p)
q.b=Math.max(o,s[p].b)
B.a.de(this.b,p)}else{if(!(p<r))return A.c(s,p)
s=s[p]
s.a=Math.min(s.a,q)}else if(m){q=p-1
if(!(q>=0&&q<r))return A.c(s,q)
q=s[q]
q.b=Math.max(q.b,a.b)}else{A.M(s).c.a(a)
s.$flags&1&&A.br(s,"insert",2)
if(p>r)A.a0(A.hv(p,null))
s.splice(p,0,a)}s=this.b
r=s.length
if(r===1){if(0>=r)return A.c(s,0)
s=s[0]
s=s.a===0&&s.b===1}else s=!1
return s}}
A.mr.prototype={
t(a){return"("+A.J(this.a)+"-"+A.J(this.b)+")"}}
A.pm.prototype={
cJ(){var s=this
if(s.f)s.mY()
if(s.r)s.mX()
if(s.w)s.d.dd(s.a.a.y.y)
if(s.f||s.r||s.w){s.na()
s.mZ()
s.o4()}s.w=s.r=s.f=!1},
mY(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.e
B.a.aU(a3.a)
for(s=a2.a,r=s.f,q=r.b.b,p=q.b,q=q.a,o=a2.b,n=o.$ti.c,m=o.a,l=o.b.b.a,s=s.r,k=r.a,j=k.length,i=0;i<p;++i)for(h=i*l,g=i*q,f=0;f<q;++f){e=new A.d(f,i)
r.l(f,i)
d=g+f
if(!(d>=0&&d<j))return A.c(k,d)
d=k[d]
c=B.c.P(d.a.c+d.f,0,192)
b=s.p(0,e)
b=(b==null?A.bI(B.J,null):b).b
a=A.M(b)
b=new J.b_(b,b.length,a.h("b_<1>"))
a=a.c
a0=0
while(b.q()){a1=b.d
a0=Math.max(a0,(a1==null?a.a(a1):a1).a.ay)}c+=A.kb(a0)/2|0
if(d.w.d&&d.x>0)c+=A.kb(7)
d=h+f
if(c>0){c=Math.min(c,192)
n.a(c)
o.l(f,i)
B.a.i(m,d,c)
a3.aZ(0,e,255-c)}else{n.a(0)
o.l(f,i)
B.a.i(m,d,0)}}a2.jd(o,21)},
mX(){var s,r,q,p,o,n,m,l,k,j=this,i=j.c,h=i.$ti.c,g=i.a
B.a.oU(g,0,g.length,h.a(0))
s=j.e
B.a.aU(s.a)
for(r=j.a.b,q=r.length,p=i.b.b.a,o=0;o<r.length;r.length===q||(0,A.o)(r),++o){n=r[o]
m=A.kb(n.gdP())
if(m>0){l=n.y
h.a(m)
k=l.gm()
l=l.gn()
i.l(k,l)
B.a.i(g,l*p+k,m)
s.aZ(0,n.y,255-m)}}j.jd(i,42)},
na(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
for(s=this.a.f,r=s.b.b,q=r.b,r=r.a,p=this.b,o=p.a,n=p.b.b.a,m=o.length,l=this.c,k=l.a,j=l.b.b.a,i=k.length,h=s.a,g=h.length,f=0;f<q;++f)for(e=f*n,d=f*j,c=f*r,b=0;b<r;++b){s.l(b,f)
a=c+b
if(!(a>=0&&a<g))return A.c(h,a)
a=h[a]
a0=$.U()
if((a.a.e.a&a0.a)===0)continue
p.l(b,f)
a0=e+b
if(!(a0>=0&&a0<m))return A.c(o,a0)
a.d=J.vi(o[a0],0,255)
l.l(b,f)
a0=d+b
if(!(a0>=0&&a0<i))return A.c(k,a0)
a.e=J.vi(k[a0],0,255)}},
mZ(){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.a.f,r=s.b.b,q=r.b,r=r.a,p=s.a,o=p.length,n=0;n<q;++n)for(m=n*r,l=0;l<r;++l){k={}
s.l(l,n)
j=m+l
if(!(j>=0&&j<o))return A.c(p,j)
j=p[j]
i=$.U()
if((j.a.e.a&i.a)!==0)continue
k.a=k.b=0
k.c=!1
h=new A.pn(k,this,l,n)
for(g=0;g<4;++g)h.$1(B.at[g])
if(!k.c)for(g=0;g<4;++g)h.$1(B.cb[g])
j.d=k.b
j.e=k.a}},
o4(){var s,r,q,p,o
for(s=this.a,r=s.f.b.b,q=r.b,r=r.a,p=0;p<q;++p)for(o=0;o<r;++o)s.oS(o,p)
r=s.a.y.y
s.d5(r.gm(),r.gn(),!0)},
jd(a,b){var s,r,q,p,o,n,m,l
t.z.a(a)
s=B.e.aT(b*1.5)
for(r=a.a,q=a.b.b.a,p=r.length,o=this.e;;){n=o.fc()
if(n==null)break
m=n.gm()
l=n.gn()
a.l(m,l)
m=l*q+m
if(!(m>=0&&m<p))return A.c(r,m)
m=new A.po(this,n,r[m],a,b)
m.$2(B.M,b)
m.$2(B.L,b)
m.$2(B.P,b)
m.$2(B.S,b)
m.$2(B.R,s)
m.$2(B.Q,s)
m.$2(B.U,s)
m.$2(B.T,s)}}}
A.pn.prototype={
$1(a){var s,r,q,p=this,o=p.c+a.c,n=p.d+a.d
if(o<0)return
s=p.b.a.f
r=s.b.b
if(o>=r.a)return
if(n<0)return
if(n>=r.b)return
q=s.B(o,n)
if(q.b)return
s=$.U()
if((q.a.e.a&s.a)===0)return
s=p.a
s.c=!0
s.b=Math.max(s.b,q.d)
s.a=Math.max(s.a,q.e)},
$S:10}
A.po.prototype={
$2(a,b){var s,r,q,p,o=this,n=o.b.F(0,a),m=o.a,l=m.a.f
if(!l.b.G(0,n))return
s=n.a
r=n.b
l=l.B(s,r)
q=$.U()
if((l.a.e.a&q.a)===0)return
p=o.c-b
l=o.d
q=l.B(s,r)
if(typeof q!=="number")return q.cQ()
if(q>=p)return
l.aY(s,r,l.$ti.c.a(p))
if(p<=o.e)return
m.e.aZ(0,n,255-p)},
$S:92}
A.eU.prototype={
t(a){return this.a.t(0)+" pos:"+this.b.t(0)+" cost:"+this.d},
gI(a){return this.c}}
A.kD.prototype={
fn(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=new A.ci(A.a([],t.nK),t.nA),a0=A.b9(t.u),a1=b.b,a2=b.c
a.aZ(0,new A.eU(B.r,a1,0,0),b.dV(a1,a2))
for(a1=b.a.f,s=a1.a,r=a1.b,q=r.b.a,p=s.length;;){o=a.fc()
if(o==null)break
n=o.b
if(n.Z(0,a2))return b.hO(o)
if(!a0.j(0,n))continue
m=b.hM(o)
if(m!=null)return m
for(l=o.c+1,k=o.d,j=o.a,i=j===B.r,h=0;h<8;++h){g=B.a6[h]
f=n.F(0,g)
if(a0.G(0,f))continue
if(!r.G(0,f))continue
e=f.a
d=f.b
a1.l(e,d)
e=d*q+e
if(!(e>=0&&e<p))return A.c(s,e)
c=b.fu(f,s[e])
if(c==null)continue
e=i?g:j
d=k+c
a.aZ(0,new A.eU(e,f,l,d),d+b.dV(f,a2))}}return b.i1()},
dV(a,b){return b.S(0,a).gb4()}}
A.qG.prototype={
pG(a,b){if(b.S(0,a).gb4()>16)return 0
return this.jz(new A.t2(this.a,a,b).fn())},
iU(a){var s
if(this.a.a.y.y.S(0,a).gb4()>16)return 16
this.nk()
s=this.b.cj(a)
return s==null?16:s},
jz(a){var s=(16-a)/16
return s*s},
nk(){var s,r,q=this,p=q.b
if(p!=null&&q.a.a.y.y.Z(0,p.b))return
p=q.a
s=p.a.y.y
r=new A.mt(p,s,new A.ci(A.a([],t.c),t.r),A.a([],t.l))
r.fB(p,s,null)
q.b=r}}
A.mt.prototype={
hW(a,b,c,d){var s,r,q=null
if(a>=16)return q
s=b.a
if(s<1)return q
r=this.a.f.b.b
if(s>=r.a-1)return q
s=b.b
if(s<1)return q
if(s>=r.b-1)return q
return A.wR(c)}}
A.t2.prototype={
hM(a){if(a.d>16)return 16
return null},
fu(a,b){return A.wR(b)},
hO(a){return a.d},
i1(){return 16}}
A.qI.prototype={
gav(){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===$){s=A.a([],t.c)
r=l.f.b.b
q=r.a
r=r.b
p=t.S
o=q*r
n=A.ao(o,0,!1,p)
m=t.z
p=A.ao(o,0,!1,p)
l.c!==$&&A.eg()
k=l.c=new A.pm(l,new A.a8(n,new A.Z(new A.d(0,0),new A.d(q,r)),m),new A.a8(p,new A.Z(new A.d(0,0),new A.d(q,r)),m),new A.om(l,B.hP),new A.ci(s,t.r))}return k},
geF(){var s=this.d
return s===$?this.d=new A.qG(this):s},
eO(a,b){var s,r,q,p,o,n,m,l
for(s=A.e4(a.y,b),r=this.f,q=r.a,p=r.b.b.a,o=q.length;s.q(),!0;){n=s.a
if(n.Z(0,b))return!0
m=n.gm()
l=n.gn()
r.l(m,l)
m=l*p+m
if(!(m>=0&&m<o))return A.c(q,m)
m=q[m]
l=$.U()
if((m.a.e.a&l.a)===0)return!1}throw A.n(A.bG("Unreachable."))},
oC(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=A.e4(a.y,b),r=this.f,q=r.a,p=r.b.b.a,o=q.length,n=this.w,m=n.a,l=n.b.b.a,k=m.length;s.q(),!0;){j=s.a
if(j.Z(0,b))return!0
i=j.gm()
h=j.gn()
n.l(i,h)
i=h*l+i
if(!(i>=0&&i<k))return A.c(m,i)
if(m[i]!=null)return!1
i=j.gm()
h=j.gn()
r.l(i,h)
i=h*p+i
if(!(i>=0&&i<o))return A.c(q,i)
i=q[i]
h=$.U()
if((i.a.e.a&h.a)===0)return!1}throw A.n(A.bG("Unreachable."))},
bm(a,b){var s,r
if(a.gm()<0)return!1
s=this.f
r=s.b.b
if(a.gm()>=r.a)return!1
if(a.gn()<0)return!1
if(a.gn()>=r.b)return!1
return(s.B(a.gm(),a.gn()).a.e.a&b.a)!==0},
dD(a){var s,r
B.a.j(this.b,a)
s=this.w
r=a.y
s.$ti.c.a(a)
s.aY(r.gm(),r.gn(),a)},
kP(a){var s=this,r=s.b,q=B.a.c4(r,a),p=s.e
if(p>q)s.e=p-1
B.a.de(r,q)
if(s.e>=r.length)s.e=0
r=s.w
p=a.y
r.$ti.c.a(null)
r.aY(p.gm(),p.gn(),null)},
e0(a,b,c){var s=A.a([],t.I)
b.b1(this.a.y.Q.ax,c,new A.qU(this,s,A.cm(this,a,$.aY(),!1,null,null),a))
return s},
cY(a,b){this.r.b7(b,new A.qQ()).c8(a)
if(a.a.ay>0)this.gav().f=!0},
c5(a){var s=this.r.p(0,a)
return s==null?A.bI(B.J,null):s},
e3(a,b){var s=this.r,r=s.p(0,b)
B.a.ad(r.b,a)
if(a.a.ay>0)this.gav().f=!0
if(!r.gN(0).q())s.ad(0,b)},
f_(a){this.r.ae(0,new A.qS(t.mH.a(a)))},
hX(){var s=this.gav()
s.w=s.r=s.f=!0
this.geF().b=null},
d5(a,b,c){var s,r=this.f.B(a,b)
if(r.fk(c))if(!r.b&&r.d+r.e>r.c){s=this.w.B(a,b)
if(s!=null&&s instanceof A.aa)this.a.y.fo(s)}},
oS(a,b){return this.d5(a,b,null)},
dh(a,b,c){var s,r=this.f.B(a.gm(),a.gn())
r.b=b
r.c=c
if(!b&&r.d+r.e>c){s=this.w.B(a.gm(),a.gn())
if(s!=null&&s instanceof A.aa)this.a.y.fo(s)}},
k7(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=this.w,r=s.a,q=s.b.b.a,p=r.length,o=this.f,n=o.a,m=o.b,l=m.b,k=l.a,j=n.length,m=m.a,i=m.a,h=i+k,g=Math.min(i,h),h=Math.max(i,h);;){i=$.m()
i=i.a
f=i.a1(h-g)+g
e=m.b
d=e+l.b
c=Math.min(e,d)
d=Math.max(e,d)
i=i.a1(d-c)+c
b=new A.d(f,i)
o.l(f,i)
e=i*k+f
if(!(e>=0&&e<j))return A.c(n,e)
if((n[e].a.e.a&$.aY().a)===0)continue
s.l(f,i)
i=i*q+f
if(!(i>=0&&i<p))return A.c(r,i)
if(r[i]!=null)continue
return b}}}
A.qR.prototype={
$1(a){return new A.dY($.xA(),$.az())},
$S:93}
A.qU.prototype={
$1(a){var s,r,q,p,o,n=this
B.a.j(n.b,a)
s=n.c
r=n.a
q=s.jM(new A.qT(r))
if(q==null){s=s.gcI()
s=A.zt(s,10,s.$ti.h("k.E"))
p=A.a6(s,A.z(s).h("k.E"))
s=p.length
if(s!==0){o=$.m()
t.jX.a(p)
s=o.T(s)
if(!(s>=0&&s<p.length))return A.c(p,s)
q=p[s]}else q=n.d}q.toString
r.cY(a,q)},
$S:6}
A.qT.prototype={
$1(a){var s
if($.m().T(5)===0)return!0
s=this.a
return s.w.B(a.a,a.b)==null&&!s.r.aj(a)},
$S:1}
A.qQ.prototype={
$0(){return A.bI(B.J,null)},
$S:94}
A.qS.prototype={
$2(a,b){var s,r,q,p
t.u.a(a)
for(s=t.C.a(b).b,r=A.M(s),s=new J.b_(s,s.length,r.h("b_<1>")),q=this.a,r=r.c;s.q();){p=s.d
q.$2(p==null?r.a(p):p,a)}},
$S:95}
A.ae.prototype={
ga0(a){return this.a},
Z(a,b){if(b==null)return!1
if(b instanceof A.ae)return this.a===b.a
return!1},
ca(a,b){return new A.ae(this.a|b.a)},
t(a){var s=A.a([],t.s),r=this.a
if((r&$.bC().a)!==0)s.push("door")
if((r&$.U().a)!==0)s.push("fly")
if((r&$.iD().a)!==0)s.push("swim")
if((r&$.aY().a)!==0)s.push("walk")
return B.a.aQ(s,"|")}}
A.by.prototype={
t(a){return this.a}}
A.dZ.prototype={}
A.dY.prototype={
oc(a){this.f=B.c.P(this.f+a,0,192)},
fk(a){var s,r=this
if(a!==!0)s=!r.b&&r.d+r.e>r.c
else s=!0
if(s&&!r.r)return r.r=!0
return!1}}
A.iL.prototype={
a5(a){switch(a){case B.X:this.iw(-1)
break
case B.Y:this.iw(1)
break
case B.G:this.a.a8()
break
default:return!1}return!0},
ag(a){var s,r,q,p,o,n=this,m=null
a.cl(0,0,a.gaR(),a.gao())
s=a.e.a.b.b
r=s.b-1
n.np(new A.aT(new A.d(40,r),0,0,a))
s=s.a-40
r=new A.aT(new A.d(s,r),40,0,a)
q=n.c
p=n.d
if(!(p>=0&&p<q.length))return A.c(q,p)
o=q[p]
A.bh(r,m,m,o.gM(),!0,m,m,m)
A.fP(r,o.gW(),m,s-1,1,2)
r.k(1,10,"Requirement:",B.f)
s=o.gbC().gW()
q=n.b
A.fP(r,s,o.gbC().dI(q)==null?B.p:B.m,m,1,12)
r.k(1,32,"Focus cost:",B.j)
r.k(13,32,A.Q(o.eY(q.y.Q),!1,3),B.d)
s=t.N
A.bt(a,A.B(["\u2195","Select ability","`","Exit"],s,s),m)},
np(a){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500"
A.bh(a,i,i,"Abilities",!1,i,i,i)
a.k(34,1,"Focus",B.f)
a.k(2,2,h,B.l)
for(s=j.c,r=s.length,q=j.b,p=q.y.Q,o=0,n=0;n<s.length;s.length===r||(0,A.o)(s),++n){m=s[n]
l=o*2+3
a.k(2,l+1,h,B.t)
A:{k=j.d
if(o===k){k=B.iy
break A}k=m.gbC().dI(q)
if(k==null){k=B.ir
break A}k=B.is
break A}a.k(2,l,m.gM(),k.a)
a.k(34,l,A.Q(m.eY(p),!1,5),k.b);++o}a.an(1,j.d*2+3,A.cD(9658,B.h,i))},
iw(a){var s=this,r=s.d,q=s.c.length
s.d=B.c.ab(r+q+a,q)
s.K()}}
A.fH.prototype={
aH(a){var s,r=a.x
r===$&&A.b()
s=this.a.y
s=r.f.B(s.gm(),s.gn())
if(!(!s.b&&s.d+s.e>s.c))return!1
return++this.d<24*this.c},
bt(a,b){var s
t.a.a(b)
s=this.a.y
if((B.c.A(this.d,12)&1)===1)b.$3(s.gm(),s.gn(),this.b)},
$iaw:1}
A.jg.prototype={
aH(a){var s=this.c
return++this.d<s*B.e.O(A.w(s,1,10,16,8))},
bt(a,b){var s,r=this
t.a.a(b)
s=r.c
if(B.c.ab(r.d,B.e.O(A.w(s,1,10,16,8)))<B.c.A(B.e.O(A.w(s,1,10,16,8)),2)){s=r.a
b.$3(s.gm(),s.gn(),r.b)}},
$iaw:1}
A.fO.prototype={
aH(a){return--this.b>=0},
bt(a,b){var s,r,q,p
t.a.a(b)
s=B.c.A(this.b,4)
if(!(s>=0&&s<5))return A.c($.vv,s)
r=A.an("*",$.vv[s],null)
q=A.wj(new A.j6(this.a,s),!0)
p=q.b
while(q.q())b.$3(p.b,p.c,r)},
$iaw:1}
A.fS.prototype={
aH(a){var s=this
if($.m().T(s.c+2)===0)++s.c
return s.c<s.b.length},
bt(a,b){var s,r,q,p,o
t.a.a(b)
s=a.x
s===$&&A.b()
r=this.a
if(s.f.B(r.gm(),r.gm()).b)return
s=r.gm()
r=r.gn()
q=$.m()
p=this.b
o=this.c
if(!(o<p.length))return A.c(p,o)
o=t.af.a(p[o])
q=q.T(o.length)
if(!(q>=0&&q<o.length))return A.c(o,q)
b.$3(s,r,o[q])},
$iaw:1}
A.cC.prototype={
aH(a){var s,r=a.x
r===$&&A.b()
s=this.a
s=r.f.B(s.gm(),s.gn())
if(!(!s.b&&s.d+s.e>s.c))return!1
return--this.c>=0},
bt(a,b){var s=this.a
t.a.a(b).$3(s.gm(),s.gn(),this.b)},
$iaw:1}
A.jQ.prototype={
aH(a){return this.c++<24},
bt(a,b){var s,r,q,p,o=null
t.a.a(b)
s=a.x
s===$&&A.b()
r=this.a
q=this.b
if(s.f.B(r,q).b)return
p=[B.t,B.a3,B.I,B.K][B.c.ab(B.c.A(this.c,4),4)]
b.$3(r-1,q,A.an("-",p,o))
b.$3(r+1,q,A.an("-",p,o))
b.$3(r,q-1,A.an("|",p,o))
b.$3(r,q+1,A.an("|",p,o))},
$iaw:1}
A.jT.prototype={
aH(a){return++this.b<24},
bt(a,b){var s,r,q,p,o
t.a.a(b)
s=this.a
if((B.c.A(this.b,6)&1)===0){b.$3(s.gm(),s.gn(),$.xi())
b.$3(s.gm()-1,s.gn(),$.xk())
b.$3(s.gm()+1,s.gn(),$.xl())}else{r=s.gm()
q=s.gn()
p=$.xh()
b.$3(r-1,q-1,p)
q=s.gm()
r=s.gn()
o=$.xm()
b.$3(q-1,r+1,o)
b.$3(s.gm()+1,s.gn()-1,o)
b.$3(s.gm()+1,s.gn()+1,p)
p=s.gm()
o=s.gn()
r=$.xj()
b.$3(p-1,o,r)
b.$3(s.gm()+1,s.gn(),r)}},
$iaw:1}
A.k0.prototype={
aH(a){var s,r=a.x
r===$&&A.b()
s=this.a
s=r.f.B(s.gm(),s.gn())
if(!(!s.b&&s.d+s.e>s.c))return!1
return--this.c>=0},
bt(a,b){var s=this.a
t.a.a(b).$3(s.gm(),s.gn(),this.b)},
$iaw:1}
A.kg.prototype={
aH(a){return--this.c>=0},
bt(a,b){var s,r,q,p=this
t.a.a(b)
s=a.x
s===$&&A.b()
r=p.b
q=t.v.a(s.f.B(r.gm(),r.gn()).a.d)
s=p.a
q=A.cD(q.a,q.b.bk(B.h,p.c/s),q.c.bk(B.k,p.c/s))
b.$3(r.gm(),r.gn(),q)},
$iaw:1}
A.kC.prototype={
aH(a){var s,r,q=this,p=q.a+q.c
q.a=p
s=q.b+q.d
q.b=s
p=B.e.L(p)
s=B.e.L(s)
r=a.x
r===$&&A.b()
r=r.f
if(!r.b.G(0,new A.d(p,s)))return!1
p=r.B(p,s)
s=$.U()
if((p.a.e.a&s.a)===0)return!1
return q.e-->0},
bt(a,b){t.a.a(b).$3(B.e.L(this.a),B.e.L(this.b),A.an("\u2022",this.f,null))},
$iaw:1}
A.ld.prototype={
aH(a){var s,r,q,p=this,o=p.e,n=1-o*0.015,m=p.c*=n
p.d*=n
s=o*0.003
o=p.f
p.c=m+(o.gm()-p.a)*s
m=p.d
r=o.gn()
q=p.b
r=m+(r-q)*s
p.d=r
m=p.a+p.c
p.a=m
r=q+r
p.b=r;++p.e
return new A.d(B.e.L(m),B.e.L(r)).S(0,o).bh(0,1)},
bt(a,b){var s,r,q,p,o=this
t.a.a(b)
s=B.e.L(o.a)
r=B.e.L(o.b)
q=a.x
q===$&&A.b()
if(!q.f.b.G(0,new A.d(s,r)))return
p=o.mD(o.c,o.d)
q=$.m()
t.ev.a($.um)
q=q.T(4)
if(!(q>=0&&q<4))return A.c($.um,q)
b.$3(s,r,A.cD(p,$.um[q],null))},
mD(a,b){var s,r="|\\\\--//||\\\\--//||"
if(new A.d(B.e.L(a*10),B.e.L(b*10)).ec(0,5))return 8226
s=B.e.bP(Math.atan2(a,b)/6.283185307179586*16+8)
if(!(s>=0&&s<17))return A.c(r,s)
return r.charCodeAt(s)},
$iaw:1}
A.li.prototype={
aH(a){var s=this.d
if((s&1)===0)if(--this.b<0)return!1;--s
this.d=s
return s>=0},
bt(a,b){t.a.a(b).$3(this.a,this.b,this.c)},
$iaw:1}
A.fV.prototype={
gh8(){var s,r=this,q=r.e
A:{if(0===q){s=r.b.Q.ay
break A}if(1===q){s=r.b.Q.ch
break A}if(2===q){s=r.b.Q.CW
break A}if(3===q){s=r.b.Q.cx
break A}s=null
break A}return s},
gjl(){var s,r=this.e
if(r<4)return null
s=this.c
r-=4
if(!(r<s.length))return A.c(s,r)
return s[r]},
giv(){var s,r,q,p,o=this,n=o.gh8()
if(n!=null){if(n.b===40)return!1
s=o.b.Q
r=n.hw(s)
return s.y>=r}else{q=o.gjl()
if(q!=null){s=o.b.Q
p=s.z.eL(q)
if(p===s.c.ie(q))return!1
r=B.e.L(1000*Math.pow(1.8,p+1-1))
return s.y>=r}else return!1}},
lx(a,b){var s,r
for(s=$.tK(),r=0;r<26;++r)s[r].gbC()},
a5(a){switch(a){case B.X:this.ix(-1)
return!0
case B.Y:this.ix(1)
return!0
case B.G:this.a.a8()
return!0}return!1},
a9(a,b,c){var s,r,q,p,o,n=this
if(c||b)return!1
switch(a){case 71:if(n.giv()){s=n.gh8()
if(s!=null){r=n.b
q=r.Q
r.ih(s.hw(q))
s.kO(q,s.b+1)}else{p=n.gjl()
if(p!=null){r=n.b
q=r.Q.z
o=q.eL(p)+1
r.ih(B.e.L(1000*Math.pow(1.8,o-1)))
q.a.i(0,p,o)}}n.b.bs()
n.K()}return!0}return!1},
ag(a){var s,r,q,p,o,n,m=this,l=null
a.cl(0,0,a.gaR(),a.gao())
A.bh(a,l,3,l,!1,46,l,l)
a.k(2,1,"Available experience:",B.j)
s=m.b.Q
a.k(25,1,A.Q(s.y,!1,9),B.d)
m.md(new A.aT(new A.d(46,11),0,3,a))
r=a.e.a.b.b
q=r.b
m.mb(new A.aT(new A.d(46,q-14),0,14,a))
p=m.e
o=p<4?6:9
a.an(1,p*2+o,A.cD(9658,B.h,l))
n=new A.aT(new A.d(r.a-46,q),46,0,a)
r=m.e
switch(r){case 0:m.me(n)
break
case 1:m.m6(n)
break
case 2:m.mf(n)
break
case 3:m.m9(n)
break
default:q=m.c
r-=4
if(!(r>=0&&r<q.length))return A.c(q,r)
m.ma(n,q[r])}r=t.N
r=A.C(r,r)
r.i(0,"\u2195","Change selection")
if(m.giv())r.i(0,"G","Gain "+(m.gh8()!=null?"stat":"skill"))
r.i(0,"`","Exit")
A.bt(a,r,"You can spend "+A.Q(s.y,!1,l)+" experience")},
md(a){var s,r,q,p,o,n,m,l,k=null
A.bh(a,k,k,"Stats",!1,k,k,k)
a.k(21,1,"Base Equip Total    Cost",B.f)
s=this.b.Q
r=[s.ay,s.ch,s.CW,s.cx]
for(q=0,p=0;p<4;++p){o=r[p]
n=o.gbb()
m=o.b
l=o.a
l.toString
this.jC(a,q,n.c,m,l-m,o.hw(s),l,40,q===this.e);++q}},
mb(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.bh(a,e,e,"Skills",!1,e,e,e)
a.k(21,1,"Base Equip Total    Cost",B.f)
for(s=f.c,r=s.length,q=f.b.Q,p=q.c.c,q=q.z,o=q.a,q=q.b,n=0,m=0;m<s.length;s.length===r||(0,A.o)(s),++m){l=s[m]
k=o.p(0,l)
if(k==null)k=0
j=l.gM()
i=q.p(0,l)
if(i==null)i=0
h=o.p(0,l)
if(h==null)h=0
g=q.p(0,l)
h=B.c.P(h+(g==null?0:g),0,15)
g=p.p(0,l.gcD())
if(g==null)g=0
f.jC(a,n,j,k,i,B.e.L(1000*Math.pow(1.8,k+1-1)),h,g,n===f.e-4);++n}},
jC(a,b,c,d,e,f,g,h,i){var s,r=b*2+3,q=b===0?B.l:B.t
a.k(2,r-1,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500\u2500\u2500",q)
A:{if(i){q=B.h
break A}q=d>=h||f>this.b.Q.y
if(q){q=B.j
break A}q=B.C
break A}B:{if(i){s=B.h
break B}s=d>=h||f>this.b.Q.y
if(s){s=B.j
break B}s=B.d
break B}a.k(2,r,c,q)
a.k(20,r,A.Q(d,!1,5),s)
C:{if(e>0){q=B.p
break C}if(e<0){q=B.m
break C}q=B.t
break C}a.k(26,r,A.Q(e,!0,5),q)
a.k(32,r,A.Q(g,!1,5),s)
if(d<h)a.k(38,r,A.Q(f,!1,7),s)
else a.k(39,r,"At max",s)},
me(a){this.er(a,this.b.Q.ay,A.a(["Max Fury","Toss range scale"],t.s),new A.ob())},
m6(a){this.er(a,this.b.Q.ch,A.a(["Dodge bonus","Strike bonus"],t.s),new A.o7())},
mf(a){this.er(a,this.b.Q.CW,A.a(["Max health"],t.s),new A.oc())},
m9(a){this.er(a,this.b.Q.cx,A.a(["Max focus"],t.s),new A.o8())},
er(a,b,c,d){var s,r,q,p,o,n,m=null
t.m.a(c)
t.nB.a(d)
A.bh(a,m,m,b.gbb().c,!1,m,m,m)
s=b.a
s.toString
r=s-b.b
a.k(1,2,"Base value:",B.j)
a.k(15,2,A.Q(b.b,!1,3),B.d)
q=this.b.Q
if(b===q.ay){p=-q.ge8()
r=s-b.b-p
a.k(1,3,"Weight offset:",B.j)
a.k(15,3,A.Q(p,!1,3),B.d)
o=4}else o=3
a.k(1,o,"Modifiers:",B.j)
a.k(15,o,A.Q(r,!1,3),B.d);++o
a.k(1,o,"Current value:",B.j)
a.k(15,o,A.Q(s,!1,3),B.d)
for(q=c.length,o=9,n=0;n<c.length;c.length===q||(0,A.o)(c),++n){a.k(1,o,c[n]+":",B.j);++o}a.k(24,7,"Current",B.f)
a.k(24,8,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500",B.l)
for(q=J.aq(d.$1(s)),o=9;q.q();){a.k(24,o,B.i.dc(q.gH(),7),B.d);++o}if(s<40){a.k(32,7,"   Next",B.f)
a.k(32,8,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500",B.l)
for(s=J.aq(d.$1(s+1)),o=9;s.q();){a.k(32,o,B.i.dc(s.gH(),7),B.d);++o}}},
ma(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
A.bh(a,f,f,b.gM(),!1,f,f,f)
s=this.b.Q
r=s.z
q=r.eL(b)
p=r.op(b)
o=r.bS(b)
n=s.c.ie(b)
a.k(1,2,"Base level:",B.j)
a.k(13,2,A.Q(q,!1,2),B.d)
a.k(16,2,"/",B.l)
a.k(18,2,A.Q(n,!1,2),B.d)
for(m=0;m<n;++m){s=m<q?B.m:B.a0
a.an(21+m*2,2,new A.X(9608,s,B.z))}a.k(1,3,"Equipment:",B.j)
a.k(17,3,A.Q(p,!0,3),B.d)
a.k(1,4,"Full level:",B.j)
a.k(13,4,A.Q(o,!1,2),B.d)
a.k(16,4,"/",B.l)
a.k(18,4,A.Q(15,!1,2),B.d)
A.fP(a,b.gW(),f,a.c.a-1,1,6)
l=this.d.p(0,b)
if(l!=null){a.k(1,12,"Abilities granted:",B.f)
k=l.geV().e6(0)
B.a.dj(k,new A.o9())
for(s=k.length,j=14,i=0;i<k.length;k.length===s||(0,A.o)(k),++i){h=k[i]
a.an(1,j,new A.X(8226,B.l,B.z))
a.k(3,j,"Level "+h.a+": "+h.b.gM(),B.d);++j}}s=new A.oa(a,b)
s.$3("current",o,25)
g=B.c.P(q+1+p,0,n)
if(g<n)s.$3("next",g,35)},
ix(a){var s=this,r=4+s.c.length
s.e=B.c.ab(s.e+a+r,r)
s.K()}}
A.ob.prototype={
$1(a){return A.a([B.c.t(A.hN(a)),A.q_(A.we(a),null)],t.s)},
$S:20}
A.o7.prototype={
$1(a){return A.a([B.c.t(A.vm(a)),B.c.t(A.vn(a))],t.s)},
$S:20}
A.oc.prototype={
$1(a){return A.a([B.c.t(B.e.L(Math.pow(a,1.458)+9))],t.s)},
$S:20}
A.o8.prototype={
$1(a){return A.a([B.c.t(A.jY(a))],t.s)},
$S:20}
A.o9.prototype={
$2(a,b){var s=t.cB
return B.c.ai(s.a(a).a,s.a(b).a)},
$S:146}
A.oa.prototype={
$3(a,b,c){var s,r=this.a,q=r.c.a
A.jm(r,1,c,q-2,null)
r.k(2,c," At "+a+" level "+b+" ",B.f)
A:{if(b>0){s=new A.O(this.b.bp(b),null)
break A}s=B.ix
break A}A.fP(r,s.a,s.b,q-1,1,c+2)},
$S:98}
A.jl.prototype={
gbf(){return!0},
a5(a){var s=this
switch(a){case B.G:s.c_(B.r)
break
case B.aA:s.c_(B.U)
break
case B.X:s.c_(B.M)
break
case B.az:s.c_(B.R)
break
case B.a8:s.c_(B.S)
break
case B.ab:s.c_(B.P)
break
case B.aD:s.c_(B.T)
break
case B.Y:s.c_(B.L)
break
case B.aC:s.c_(B.Q)
break}return!0},
bv(){var s=(this.c+1)%40
this.c=s
if(B.c.ab(s,5)===0)this.K()},
ag(a){var s=new A.nL(this,a)
s.$3(0,B.M,"|")
s.$3(1,B.R,"/")
s.$3(2,B.P,"-")
s.$3(3,B.Q,"\\")
s.$3(4,B.L,"|")
s.$3(5,B.T,"/")
s.$3(6,B.S,"-")
s.$3(7,B.U,"\\")
s=t.N
A.bt(a,A.B(["\u2195\u2194",this.gkd(),"`","Cancel"],s,s),this.gkJ())},
c_(a){var s=this.l2(a),r=this.a
if(s)r.aN(a)
else r.aN(B.r)}}
A.nL.prototype={
$3(a,b,c){var s,r,q,p,o=this.a,n=o.b,m=n.b,l=m.y.y.F(0,b)
m=m.x
m===$&&A.b()
s=l.a
r=l.b
if(!o.jR(m.f.B(s,r)))return
if(B.c.A(o.c,5)===a)q=A.an(c,B.h,B.w)
else{o=m.w.B(s,r)
if(o!=null)q=t.v.a(o.geK())
else{p=m.c5(l)
if(!p.gaE(0))q=p.gaw(0).a.b
else{o=m.f.B(s,r)
if(o.r)t.v.a(o.a.d)
else A.cD(32,null,null)
q=t.v.a(m.f.B(s,r).a.d)}}q=A.cD(q.a,B.h,B.w)}o=n.w
o===$&&A.b()
o.d3(this.b,s,r,q)},
$S:99}
A.fD.prototype={
gkJ(){return"Which direction?"},
gkd(){return"Choose direction"},
jR(a){return!0},
l2(a){this.e.$1(a)
return!0}}
A.kA.prototype={
gkJ(){return"Operate what?"},
gkd(){return"Choose direction"},
jR(a){return a.a.f!=null},
l2(a){var s=this.b.b,r=s.y,q=r.y.F(0,a)
s=s.x
s===$&&A.b()
s=s.f.B(q.a,q.b).a.f
if(s!=null){r.at=new A.aS(t.fD.a(s.$1(q)))
return!0}else{r.Q.at.X(B.a_,"There is nothing to operate there.",null,null,null)
return!1}}}
A.fY.prototype={
hU(a){var s=this
if(s.Q!=a)s.K()
s.Q=a
s.as=null},
hV(a){var s=this
if(s.Q!=null||!J.aA(s.as,a))s.K()
s.Q=null
s.as=a},
gbO(){var s=this.gdJ(),r=s==null?null:s.y
return r==null?this.as:r},
gdJ(){var s,r,q=this,p=q.Q
if(p!=null)if(p.z<=0||!q.b.cF(p))q.Q=null
s=q.Q
if(s!=null)return s
s=q.as
if(s!=null){r=q.b.x
r===$&&A.b()
return r.w.B(s.gm(),s.gn())}return null},
gke(){var s=this.b.y,r=s.z,q=s.Q.CW,p=q.a
p.toString
if(r<B.e.L(Math.pow(p,1.458)+9)/4)return B.m
if(s.w.a>0)return B.p
if(s.c.a>0)return B.I
r=s.z
q=q.a
q.toString
if(r<B.e.L(Math.pow(q,1.458)+9)/2)return B.a5
return B.C},
jo(){var s=this.b.y
if(!(s.at instanceof A.dI))return!1
s.at=null
this.K()
return!0},
a9(a,b,c){if(a===16||a===18)return!1
return this.jo()},
a5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
if(f.jo())return!0
if(a===B.a1&&$.mN===13){s=f.a
s.toString
s.a2(A.wd("Commands",B.hX))
return!0}r=e
switch(a){case B.be:f.a.a2(new A.h2(f,B.v))
break
case B.bh:s=f.b
q=s.x
q===$&&A.b()
p=s.y
o=p.y
if(q.f.B(o.gm(),o.gn()).a.b===B.aU){q=f.a
q.toString
q.a2(A.yA(f.c,s))}else{n=s.w===0
m=n?B.bw:B.aU
p.at=new A.dI(t.hD.a(new A.ow(f,m)),n)}break
case B.bc:f.a.a2(new A.fX(f.b.w===0))
break
case B.bq:s=f.a
s.toString
s.a2(A.zA(f))
break
case B.b5:s=f.a
s.toString
q=A.a([],t.eI)
B.a.U(q,$.tK())
s.a2(new A.iL(f.b,q))
break
case B.bm:s=f.a
s.toString
q=f.b
s.a2(A.yC(q.a,q.y))
break
case B.aK:s=f.a
s.toString
q=B.aS.gb3()
q=A.a6(q,A.z(q).h("k.E"))
s.a2(new A.h0(q))
break
case B.bd:s=f.a
s.toString
q=f.b
p=q.a
q=q.y.Q
if($.bv.length===0){o=new A.jr(A.ul(B.ce,B.hT,B.hU,!1,t.U),B.cA,p,q)
o.dm()
l=A.z0(p,q)
q=new A.k2(p,q)
q.mP()
B.a.U($.bv,A.a([o,l,q],t.f_))}s.a2(B.a.gaw($.bv))
break
case B.b4:f.a.a2(new A.db(f,B.v))
break
case B.bp:f.a.a2(new A.e1(f,B.v))
break
case B.bo:f.a.a2(new A.e_(f,B.v))
break
case B.b7:f.b.y.at=new A.dI(e,!1)
break
case B.aB:if(!f.b.y.pq())f.K()
break
case B.bf:f.ne()
break
case B.bg:s=f.b
q=s.x
q===$&&A.b()
s=s.y
k=q.c5(s.y)
q=k.b.length
if(q>1)f.a.a2(new A.dR(f,B.J))
else if(q===1)s.at=new A.aS(A.vY(k.gaw(0)))
else{s.Q.at.X(B.a_,"There is nothing here.",e,e,e)
f.K()}break
case B.b6:f.a.a2(new A.dH(f,B.v))
break
case B.aA:r=A.bo(B.U)
break
case B.X:r=A.bo(B.M)
break
case B.az:r=A.bo(B.R)
break
case B.a8:r=A.bo(B.S)
break
case B.a1:r=A.bo(B.r)
break
case B.ab:r=A.bo(B.P)
break
case B.aD:r=A.bo(B.T)
break
case B.Y:r=A.bo(B.L)
break
case B.aC:r=A.bo(B.Q)
break
case B.bj:f.b.y.at=new A.c7(B.U)
break
case B.ao:f.b.y.at=new A.c7(B.M)
break
case B.bi:f.b.y.at=new A.c7(B.R)
break
case B.aM:f.b.y.at=new A.c7(B.S)
break
case B.aL:f.b.y.at=new A.c7(B.P)
break
case B.bl:f.b.y.at=new A.c7(B.T)
break
case B.ap:f.b.y.at=new A.c7(B.L)
break
case B.bk:f.b.y.at=new A.c7(B.Q)
break
case B.c1:f.bM(B.U)
break
case B.b9:f.bM(B.M)
break
case B.c0:f.bM(B.R)
break
case B.bb:f.bM(B.S)
break
case B.b8:f.bM(B.P)
break
case B.c3:f.bM(B.T)
break
case B.ba:f.bM(B.L)
break
case B.c2:f.bM(B.Q)
break
case B.aJ:A:{j=f.at
s=t.bW.b(j)
if(s){q=f.gdJ()!=null
i=j}else{i=e
q=!1}if(q){f.iQ(i)
break A}i=s?j:e
if(s){f.j5(i)
break A}if(t.ln.b(j)){f.a.a2(new A.fD(f.gmy(),f))
break A}s=t.lz.b(j)
h=s?j:e
if(s){s=f.b
q=s.y
q.at=new A.aS(h.dC(q.Q,h.ak(s)))
break A}f.b.y.Q.at.X(B.a_,"No ability selected.",e,e,e)
f.K()}break
case B.bn:s=f.b.y.Q
g=s.e.d
if(g==null){s.at.X(B.a_,"You aren't holding an unequipped item to swap.",e,e,e)
f.K()}else r=A.vz(B.v,g)
break
case B.c4:s=f.a
s.toString
q=t.bx
p=A.a([],q)
o=new A.hX(p,f.b)
B.a.U(p,A.a([new A.W(["m",77,"Map Dungeon",o.gn8()]),new A.W(["i",73,"Illuminate Dungeon",o.gmK()]),new A.W(["d",68,"Drop Item",o.gmh()]),new A.W(["s",83,"Spawn Monster",o.go8()]),new A.W(["x",88,"Gain Experience",o.gmB()]),new A.W(["k",75,"Kill All Monsters",o.gmV()]),new A.W(["c",67,"Clear All Floor Items",o.glW()]),new A.W(["l",76,"Make Stairs",o.gn6()]),new A.W(["o",79,"Toggle Show All Monsters",o.gnT()]),new A.W(["a",65,"Toggle Show Monster Alertness",o.gnR()]),new A.W(["v",86,"Toggle Show Hero Volume",o.gnV()])],q))
s.a2(o)
break}if(r!=null)f.b.y.at=new A.aS(r)
return!0},
cX(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.b,a=b.y
if(!a.dX(b))d.x=10
A:{s=a0 instanceof A.hD
r=c
if(s){q=a1 instanceof A.l
if(q)r=a1
p=a1}else{p=c
q=!1}if(q){$.mN=0
d.a5(r)
break A}if(a0 instanceof A.fU){a=a.Q
a.x.ae(0,new A.ou())
q=d.d
q.bi()
o=d.a
o.toString
o.bI(A.os(q,b.a,a,!1))
break A}n=c
if(a0 instanceof A.hF){m=!0
if(s)q=p
else{q=a1
s=m
p=q}q=A.fr(q)
if(q){if(s)o=p
else{o=a1
s=m
p=o}A.u(o)
n=o}}else q=!1
if(q){d.d.bi()
q=d.a
q.toString
l=A.u4(b.a,n,a.Q,c,c)
a=l.e9()
q.a2(new A.hf(l,new A.ah(a.a(),a.$ti.h("ah<1>"))))
break A}q=a0 instanceof A.hf
if(q){m=!0
if(s)o=p
else{o=a1
s=m
p=o}k=t.hB
k.a(o)
if(s)o=p
else{o=a1
s=m
p=o}k.a(o)
j=o}else j=c
if(q){b=d.a
b.toString
b.bI(A.vE(d.d,j))
break A}i=a0 instanceof A.fX
h=c
if(i){if(s)q=p
else{q=a1
p=q
s=!0}h=!0===q
q=h
q=q&&b.w>0}else q=!1
if(q){a=d.a
a.toString
a.bI(A.os(d.d,b.a,d.c,!1))
break A}if(i)q=h
else q=!1
if(q){d.d.bi()
d.a.a8()
break A}if(a0 instanceof A.e0){d.d.bi()
break A}if(a0 instanceof A.b1&&b.w===0){d.d.bi()
break A}q=a0 instanceof A.hU
g=c
if(q){m=!0
if(s)o=p
else{o=a1
s=m
p=o}k=t.bW
o=k.b(o)
if(o){if(s)f=p
else{f=a1
s=m
p=f}k.a(f)
g=f}}else o=!1
if(o){d.j5(g)
break A}o={}
o.a=null
if(q){m=!0
if(s)k=p
else{k=a1
s=m
p=k}f=t.ln
k=f.b(k)
if(k){if(s)e=p
else{e=a1
s=m
p=e}o.a=f.a(e)}}else k=!1
if(k){d.a.a2(new A.fD(new A.ov(o,d),d))
break A}g=c
if(q){if(s)q=p
else{q=a1
p=q
s=!0}o=t.lz
q=o.b(q)
if(q)g=o.a(s?p:a1)}else q=!1
if(q){d.at=g
a.at=new A.aS(g.dC(a.Q,g.ak(b)))
break A}if(a0 instanceof A.fV)d.d.bi()}},
bv(){var s,r,q,p,o=this
if(o.mm())return
s=o.x
if(s>0){o.x=s-1
return}if(o.z){s=o.b
s=s.y.dX(s)}else s=!1
if(s){o.z=!1
s=o.w
s===$&&A.b()
if(s.d.length===0){o.a.a2(new A.h2(o,B.v))
return}}s=o.b
r=s.bv()
s=s.y
if(s.z<=0){q=o.a
q.toString
p=o.d
s=s.Q
if(s.d)p.ad(0,s)
else p.pp(o.c)
p.bi()
q.bI(new A.jL(s))
return}q=o.w
q===$&&A.b()
if(q.aH(r))o.K()
q=s.Q.at.b
if(q!==o.y){o.y=q
o.K()}if(s.at instanceof A.dI)o.x=2},
e4(a){var s,r,q,p,o=this,n=a.a,m=n-100,l=B.c.P(21+B.c.A(m,30)*3,21,33)
if(n>=100){s=Math.min(50,24+B.c.A(m,3))
o.f.a=new A.Z(new A.d(n-s,0),new A.d(s,a.b))}else s=0
m=a.b
r=Math.min(10,3+B.c.A(m-30,3))
q=n-l-s
p=o.r
p===$&&A.b()
p.a=new A.Z(new A.d(0,0),new A.d(l,m))
p=o.f
if(s>0)p.a=new A.Z(new A.d(n-s,0),new A.d(s,m))
else p.a=null
o.e.a=new A.Z(new A.d(l,0),new A.d(q,r))
n=o.w
n===$&&A.b()
n.a=new A.Z(new A.d(l,r),new A.d(q,m-r))},
ag(a){var s,r=this
a.cl(0,0,a.gaR(),a.gao())
s=r.w
s===$&&A.b()
s.ag(a)
r.e.ag(a)
s=r.r
s===$&&A.b()
s.ag(a)
r.f.ag(a)},
mm(){var s,r,q=this,p=q.b,o=p.x
o===$&&A.b()
p=p.y
s=p.y
r=o.f.B(s.gm(),s.gn()).a.b
if(r==q.ax)return!1
q.ax=r
switch(r){case B.bw:o=q.a
o.toString
p=p.Q
s=new A.hF(p)
s.e=Math.min(100,p.as+1)
o.a2(s)
break
case B.cz:q.a.a2(new A.i7(q))
break
case B.cy:q.bY(0)
break
case B.cx:q.bY(1)
break
case B.cw:q.bY(2)
break
case B.cv:q.bY(3)
break
case B.cu:q.bY(4)
break
case B.ct:q.bY(5)
break
case B.jh:q.bY(6)
break
case B.ji:q.bY(7)
break
case B.jj:q.bY(8)
break}return!0},
ne(){var s,r,q,p,o,n,m,l,k,j,i=this,h=A.a([],t.l)
for(s=i.b,r=s.y,q=r.y.gbB(),p=q.length,o=0;o<q.length;q.length===p||(0,A.o)(q),++o){n=q[o]
m=s.x
m===$&&A.b()
m=m.f
l=n.a
k=n.b
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.c(j,l)
if(j[l].a.f!=null)B.a.j(h,n)}q=h.length
if(q===0){r.Q.at.X(B.a_,"You are not next to anything to operate.",null,null,null)
i.K()}else if(q===1){n=B.a.gaw(h)
s=s.x
s===$&&A.b()
r.at=new A.aS(t.fD.a(s.f.B(n.gm(),n.gn()).a.f.$1(n)))}else i.a.a2(new A.kA(i))},
j5(a){var s=this,r=s.a
r.toString
r.a2(A.wf(s,a.ea(0,s.b),new A.ot(s,a)))},
iQ(a){var s=this,r=s.b,q=r.y,p=J.aA(s.gbO(),q.y)
if(p){q.Q.at.X(B.a_,"You can't target yourself.",null,null,null)
s.K()
return}s.at=a
p=s.gbO()
p.toString
q.at=new A.aS(a.dC(q.Q,a.f7(r,p)))},
bM(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null
if(a===B.r)return
A:{s=c.at
r=t.ln.b(s)
q=r?s:b
if(r){r=c.b
p=r.y
p.at=new A.aS(q.dC(p.Q,q.hH(r,a)))
break A}r=t.bW.b(s)
o=r?s:b
if(r){r=c.b
p=r.y
n=p.y.F(0,a)
m=A.e2()
for(l=A.e4(p.y,n);l.q(),!0;){k=l.a
j=r.x
j===$&&A.b()
i=j.w
h=k.gm()
g=k.gn()
i.l(h,g)
f=i.a
h=g*i.b.b.a+h
if(!(h>=0&&h<f.length))return A.c(f,h)
h=f[h]
if(h!=null){if(c.Q!==h)c.K()
c.Q=h
c.as=null
break}j=j.f
i=k.gm()
h=k.gn()
j.l(i,h)
g=j.a
i=h*j.b.b.a+i
if(!(i>=0&&i<g.length))return A.c(g,i)
i=g[i]
g=$.U()
if((i.a.e.a&g.a)===0){l=m.b
if(l===m)A.a0(A.yW(""))
t.n7.a(l)
if(c.Q!=null||!J.aA(c.as,l))c.K()
c.Q=null
c.as=l
break}if(k.S(0,p.y).cQ(0,o.ea(0,r))){if(c.Q!=null||!J.aA(c.as,k))c.K()
c.Q=null
c.as=k
break}m.b=k}e=c.gbO()
l=p.Q
if(e!=null)p.at=new A.aS(o.dC(l,o.f7(r,e)))
else{r=r.x
r===$&&A.b()
p=p.y.F(0,a)
l.at.X(B.a_,"There is a "+r.f.B(p.a,p.b).a.a+" in the way.",b,b,b)
c.K()}break A}r=t.lz.b(s)
d=r?s:b
if(r){c.b.y.Q.at.X(B.a_,d.gM()+" does not take a direction.",b,b,b)
c.K()
break A}c.b.y.Q.at.X(B.a_,"No ability selected.",b,b,b)
c.K()}},
bY(a){var s=this.b.y.Q.x,r=A.z(s).h("b2<1>"),q=A.a6(new A.b2(s,r),r.h("k.E"))
if(a>=q.length)return
r=this.a
r.toString
s=s.p(0,q[a])
s.toString
r.a2(new A.im(s,this))}}
A.ow.prototype={
$1(a){var s=this.a.b.x
s===$&&A.b()
return s.f.B(a.gm(),a.gn()).a.b===this.b},
$S:1}
A.ou.prototype={
$2(a,b){t.c3.a(a).aH(t.C.a(b))},
$S:101}
A.ov.prototype={
$1(a){var s=this.b
s.at=this.a.a
s.bM(a)},
$S:37}
A.ot.prototype={
$1(a){return this.a.iQ(this.b)},
$S:10}
A.hf.prototype={
gbf(){return!0},
a5(a){if(a===B.G){this.a.aN(!1)
return!0}return!1},
a9(a,b,c){if(c||b)return!1
switch(a){case 78:this.a.aN(!1)
break
case 89:this.a.aN(!0)
break}return!0},
bv(){var s,r=this,q=new A.qW()
$.v1()
s=$.ud.$0()
q.a=s
q.b=null
for(s=r.c;q.goO()<16;)if(s.q())r.K()
else{r.a.aN(r.b)
return}r.d=(r.d+1)%10},
ag(a){var s,r=a.e.a.b.b
a=new A.aT(new A.d(30,7),B.c.A(r.a-30,2),B.c.A(r.b-7,2),a)
A.cB(a,0,0,30,7,B.h,"\u2554","\u2550","\u2557","\u2551","\u255a","\u2550","\u255d")
a.k(2,2,"Entering dungeon...",B.d)
s=B.c.A(this.d,2)
a.k(2,4,B.i.aJ(B.i.aI("/    ",6),s,s+26),B.d)}}
A.lb.prototype={
gbf(){return!0},
lC(a,b,c){var s,r,q,p,o,n=this,m=n.b,l=m.b,k=l.y,j=l.x
j===$&&A.b()
j=j.b
s=j.length
r=n.e
q=n.c
p=0
for(;p<j.length;j.length===s||(0,A.o)(j),++p){o=j[p]
if(!(o instanceof A.aa))continue
if(!l.cF(o))continue
if(o.y.S(0,k.y).bh(0,q))continue
B.a.j(r,o)}if(r.length===0){n.f=!0
m.hV(k.y)}else n.jp(k.y)},
jp(a){var s,r,q,p=this.e,o=p.length
if(o===0)return!1
for(s=null,r=0;r<o;++r){q=p[r]
if(s==null||a.S(0,q.y).ec(0,a.S(0,s.y)))s=q}this.b.hU(s)
return!0},
a5(a){var s,r=this
switch(a){case B.a1:s=r.b
if(s.gbO()!=null){r.a.a8()
s=s.gbO()
s.toString
r.d.$1(s)}break
case B.G:r.a.a8()
break
case B.aA:r.cd(B.U)
break
case B.X:r.cd(B.M)
break
case B.az:r.cd(B.R)
break
case B.a8:r.cd(B.S)
break
case B.ab:r.cd(B.P)
break
case B.aD:r.cd(B.T)
break
case B.Y:r.cd(B.L)
break
case B.aC:r.cd(B.Q)
break}return!0},
a9(a,b,c){var s,r,q=this
if(a===9&&q.e.length!==0){s=q.f
q.f=!s
r=q.b
if(s){s=r.gbO()
q.jp(s==null?r.b.y.y:s)}else r.hV(r.gbO())
return!0}return!1},
bv(){var s=(this.r+1)%25
this.r=s
if(B.c.ab(s,5)===0)this.K()},
ag(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9="Choose tile",b0=a7.b,b1=b0.b,b2=b1.x
b2===$&&A.b()
s=b1.y
r=b0.w
r===$&&A.b()
q=A.ab(r.r)
p=a7.c
o=b2.f
n=o.a
m=o.b.b.a
l=n.length
k=b2.w
j=k.a
i=k.b.b.a
h=j.length
b2=b2.r
g=t.af
while(q.q()){f=q.b
e=q.c
d=new A.d(f,e)
o.l(f,e)
c=e*m+f
if(!(c>=0&&c<l))return A.c(n,c)
c=n[c]
k.l(f,e)
b=e*i+f
if(!(b>=0&&b<h))return A.c(j,b)
b=j[b]
if(c.r){if(c.b)continue
a=c.a.e.a
if((a&$.aY().a)===0&&(a&$.U().a)===0)continue
if(b!=null)continue
if(b2.aj(d))continue}else if(a7.mO(d))continue
else if(b!=null&&b1.cF(b))continue
if(d.S(0,s.y).bh(0,p))continue
if(c.r){a0=c.a.d
if(a0 instanceof A.X)a1=a0.a
else{g.a(a0)
if(0>=a0.length)return A.c(a0,0)
a1=a0[0].a}}else a1=183
c=r.a.a
b=r.r.a
a=r.w
b3.an(f+c.a-b.a+a.a,e+c.b-b.b+a.b,new A.X(a1,B.h,B.z))}a2=b0.gbO()
if(a2==null)return
b0=o.B(a2.gm(),a2.gn())
if(b0.r){b1=$.U()
b0=(b0.a.e.a&b1.a)!==0&&!b0.b}else b0=!0
a3=!1
if(b0){a4=B.c.A(a7.r,5)
for(b0=A.e4(s.y,a2);b0.q(),!0;){d=b0.a
if(d.Z(0,a2)){a3=!0
break}b1=d.gm()
b2=d.gn()
o.l(b1,b2)
b1=b2*m+b1
if(!(b1>=0&&b1<l))return A.c(n,b1)
b1=n[b1]
if(b1.r){b2=d.gm()
q=d.gn()
k.l(b2,q)
b2=q*i+b2
if(!(b2>=0&&b2<h))return A.c(j,b2)
if(j[b2]!=null)break
b2=$.U()
if((b1.a.e.a&b2.a)===0)break}b1=d.gm()
b2=d.gn()
q=a4===0?B.h:B.j
p=r.a.a
g=r.r.a
f=r.w
b3.an(b1+p.a-g.a+f.a,b2+p.b-g.b+f.b,new A.X(8226,q,B.z))
a4=B.c.ab(a4+5-1,5)}}else a4=0
a5=a3?a4===0?B.h:B.j:B.j
r.d3(b3,a2.gm()-1,a2.gn(),A.an("-",a5,a8))
r.d3(b3,a2.gm()+1,a2.gn(),A.an("-",a5,a8))
r.d3(b3,a2.gm(),a2.gn()-1,A.an("|",a5,a8))
r.d3(b3,a2.gm(),a2.gn()+1,A.an("|",a5,a8))
if(!a3)r.d3(b3,a2.gm(),a2.gn(),A.an("X",a5,a8))
b0=t.N
a6=A.C(b0,b0)
if(a7.e.length===0)a6.i(0,"\u2195\u2194",a9)
else if(a7.f){a6.i(0,"\u2195\u2194",a9)
a6.i(0,"Tab","Target monsters")}else{a6.i(0,"\u2195\u2194","Choose monster")
a6.i(0,"Tab","Target floor")}a6.i(0,"`","Cancel")
A.bt(b3,a6,"Choose a target.")},
cd(a){if(this.f)this.lT(a)
else this.lU(a)},
lT(a){var s=this.b,r=s.gbO().F(0,a)
if(r.S(0,s.b.y.y).bh(0,this.c))return
s.hV(r)},
lU(a){var s,r,q,p,o,n,m,l,k,j,i,h=t.lE,g=A.a([],h),f=A.a([],h)
h=this.b
s=h.gbO()
s.toString
r=a.gbE()
for(q=this.e,p=q.length,o=r.c,n=r.d,m=0;m<q.length;q.length===p||(0,A.o)(q),++m){l=q[m]
k=l.y.S(0,s)
if(o*k.b-n*k.a>0)B.a.j(g,l)
else B.a.j(f,l)}q=t.B
j=A.Ac(g,new A.rh(s),q)
if(j!=null){h.hU(j)
return}i=A.Ab(f,new A.ri(s),q)
if(i!=null)h.hU(i)},
mO(a){var s,r,q,p,o,n,m,l=this.b.b,k=l.x
k===$&&A.b()
for(l=A.e4(l.y.y,a),k=k.f,s=k.a,r=k.b,q=r.b.a,p=s.length;l.q(),!0;){o=l.a
if(o.Z(0,a))return!1
if(!r.G(0,o))return!0
n=o.gm()
m=o.gn()
k.l(n,m)
n=m*q+n
if(!(n>=0&&n<p))return A.c(s,n)
n=s[n]
if(n.r){m=$.U()
m=(n.a.e.a&m.a)===0
n=m}else n=!1
if(n)return!0}throw A.n(A.bG("Unreachable."))}}
A.rh.prototype={
$1(a){return t.B.a(a).y.S(0,this.a).gaF()},
$S:38}
A.ri.prototype={
$1(a){return t.B.a(a).y.S(0,this.a).gaF()},
$S:38}
A.hU.prototype={
gbf(){return!0},
a5(a){if(a===B.G){this.a.a8()
return!0}return!1},
a9(a,b,c){if(c||b)return!1
if(a>=65&&a<=90){this.o5(a-65)
return!0}return!1},
o5(a){var s,r=this.c,q=r.length
if(a>=q)return
s=this.a
s.toString
if(!(a>=0))return A.c(r,a)
s.aN(r[a])},
ag(a){var s,r,q,p,o,n,m,l=null,k="abcdefghijklmnopqrstuvwxyz",j=t.N
A.bt(a,A.B(["A-Z","Select ability","`","Exit"],j,j),l)
j=this.c
s=Math.max(j.length+2,3)
a=new A.aT(new A.d(40,s),a.e.a.b.b.a-40,0,a)
A.bh(a,l,s,"Use which ability?",!0,l,l,l)
a.k(31,0," Focus ",B.h)
a=a.b8(1,1,38,s-2)
if(j.length===0){a.k(0,0,"(You don't have any abilities)",B.j)
return}r=this.b.b.y
for(q=a.c.a-5,p=r.Q,o=0;o<j.length;++o){n=j[o]
m=n.eY(p)
if(r.ch<m){a.k(3,o,n.gM(),B.j)
a.k(q,o,A.Q(m,!1,3),B.bD)}else{a.k(0,o," )   ",B.j)
if(!(o<26))return A.c(k,o)
a.k(0,o,k[o],B.h)
a.k(3,o,n.gM(),B.C)
a.k(q,o,A.Q(m,!1,3),B.d)}}}}
A.h0.prototype={
gbf(){return!0},
a5(a){var s=this
switch(a){case B.X:s.eD(-1)
return!0
case B.Y:s.eD(1)
return!0
case B.ao:s.eD(-(s.d-3))
return!0
case B.ap:s.eD(s.d-3)
return!0
case B.G:s.a.a8()
return!0}return!1},
a9(a,b,c){var s,r,q,p=this
if(b)return!1
switch(a){case 9:s=c?-1:1
r=p.b
q=p.e.length
p.b=B.c.ab(r+s+q,q)
p.c=0
p.K()
return!0
default:return!1}},
ag(a){var s,r,q,p,o,n,m=this,l=null,k=a.e.a.b.b,j=k.b,i=new A.aT(new A.d(80,j),B.c.A(k.a-80,2),0,a)
m.d=j-4
i.cl(0,0,i.gaR(),i.gao())
A.bh(i,l,j,"Help",!0,80,l,l)
for(k=m.e,s=0;j=k.length,s<j;++s){r=s===m.b?B.h:B.C
i.k(2,s*2+2,k[s],r)}q=m.b
if(!(q>=0&&q<j))return A.c(k,q)
p=B.aS.p(0,k[q])
for(k=p.length,s=0;j=m.d,s<j;++s){o=s+m.c
if(o<k){if(!(o>=0))return A.c(p,o)
n=p[o]
i.k(21,s+2,n.b,n.a)}}A.vx(i,j,m.c,k,j,78,2)
k=t.N
A.bt(a,A.B(["Tab","Next Chapter","\u2195","Scroll","Shift-\u2195","Page Up/Down","`","Exit"],k,k),l)},
eD(a){var s,r=this,q=r.e,p=r.b
if(!(p>=0&&p<q.length))return A.c(q,p)
s=B.aS.p(0,q[p])
r.c=B.c.P(r.c+a,0,s.length-r.d)
r.K()}}
A.f.prototype={}
A.jr.prototype={
gM(){return"Equipment"},
gck(){var s=t.N,r=A.cJ(this.e.gck(),s,s)
switch(this.f.a){case 0:s=B.ci
break
case 1:s=A.B(["R","Show resistances"],s,s)
break
case 2:s=A.B(["R","Show stats"],s,s)
break
case 3:s=B.ci
break
default:s=null}r.U(0,s)
return r},
e4(a){var s,r=this
if(a.a>110){r.f=B.cC
r.dm()
r.K()}else{s=r.f
if(B.cA===s||B.cC===s){r.f=B.by
r.dm()
r.K()}}},
a9(a,b,c){var s,r=this
if(r.e.a9(a,b,c)){r.K()
return!0}if(!b){s=82===a
if(s&&!c&&r.f===B.by){r.f=B.cB
r.dm()
r.K()
return!0}if(s&&!c&&r.f===B.cB){r.f=B.by
r.dm()
r.K()
return!0}}return r.fA(a,b,c)},
a5(a){if(this.e.a5(a)){this.K()
return!0}return this.fz(a)},
hr(a){var s,r,q,p=this,o=p.e,n=a.c,m=n.a
n=n.b
o.hp(a.b8(0,1,m,n-3))
s=m-32
switch(p.f.a){case 0:break
case 1:p.jE(a,s)
p.jF(a,s,21)
break
case 2:p.jB(a,s)
p.jA(a,s,21)
break
case 3:s=m-65
p.jE(a,s)
r=s+33
p.jB(a,r)
p.jF(a,s,21)
p.jA(a,r,21)
break}a.k(s-7,21,"Totals",B.j)
r=o.c
o=o.y
if(!(o>=0&&o<r.length))return A.c(r,o)
q=r[o].b
o=n-15
if(q!=null)A.vK(p.c,t.W.a(q),!0).jY(a.b8(0,o,m,14))
else A.nN(a,0,o,m,14,null,null)},
dm(){var s,r=this,q=A.a([new A.aM("Item",B.a7,0,null)],t.E)
switch(r.f.a){case 0:s=B.ce
break
case 1:s=r.iu()
break
case 2:s=r.fE()
break
case 3:s=A.a6(r.iu(),t.jF)
B.a.U(s,r.fE())
break
default:s=null}B.a.U(q,s)
r.e.kM(new A.o1(r),q)},
iu(){var s=null
return A.a([new A.aM("El",B.a7,2,s),new A.aM("Damage",B.a7,11,s),new A.aM("Hit",B.a7,4,s),new A.aM("Dodge",B.a7,5,s),new A.aM("Armor",B.a7,6,s)],t.E)},
fE(){return new A.R(this.lM(),t.oP)},
lM(){return function(){var s=0,r=1,q=[],p,o,n
return function $async$fE(a,b,c){if(b===1){q.push(c)
s=r}for(;;)switch(s){case 0:p=$.fy(),o=0
case 2:if(!(o<12)){s=4
break}n=p[o]
if(n===$.az()){s=3
break}s=5
return a.b=new A.aM(n.b,B.a7,2,A.ea(n)),1
case 5:case 3:++o
s=2
break
case 4:return 0
case 1:return a.c=q.at(-1),3}}}},
fF(a){return new A.R(this.lN(a),t.mY)},
lN(a){var s=this
return function(){var r=a
var q=0,p=1,o=[],n,m,l,k
return function $async$fF(b,c,d){if(c===1){o.push(d)
q=p}for(;;)switch(q){case 0:m=r.a
l=m.x
k=t.H
q=l!=null?2:4
break
case 2:q=5
return b.b=new A.a9(A.a([new A.N(r.gb2().b,A.ea(r.gb2()))],k),!0),1
case 5:n=A.a([new A.N(A.Q(l.c,!1,2),null)],k)
B.a.U(n,s.iN(r.gd2()))
B.a.U(n,s.cA(r.gd1()))
B.a.U(n,s.cA(r.gcb()))
q=6
return b.b=new A.a9(n,!0),1
case 6:q=7
return b.b=new A.a9(s.cA(r.gcb()),!0),1
case 7:q=3
break
case 4:q=8
return b.b=new A.a9(A.a([new A.N("",null)],k),!0),1
case 8:q=9
return b.b=new A.a9(A.a([new A.N("",null)],k),!0),1
case 9:q=10
return b.b=new A.a9(A.a([new A.N("",null)],k),!0),1
case 10:case 3:q=11
return b.b=new A.a9(A.a([new A.N("",null)],k),!0),1
case 11:m=m.Q
q=m!==0?12:14
break
case 12:m=A.a([new A.N(A.Q(m,!1,2),null)],k)
B.a.U(m,s.cA(r.gc1()))
q=15
return b.b=new A.a9(m,!0),1
case 15:q=13
break
case 14:q=16
return b.b=new A.a9(A.a([new A.N("",null)],k),!0),1
case 16:case 13:return 0
case 1:return b.c=o.at(-1),3}}}},
fD(a){return new A.R(this.lL(a),t.mY)},
lL(a){return function(){var s=a
var r=0,q=1,p=[],o,n,m,l,k
return function $async$fD(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:o=$.fy(),n=t.H,m=0
case 2:if(!(m<12)){r=4
break}l=o[m]
if(l===$.az()){r=3
break}k=s.c6(l)
r=k>0?6:7
break
case 6:r=8
return b.b=new A.a9(A.a([new A.N(A.Q(k,!1,null),B.p)],n),!0),1
case 8:r=5
break
case 7:r=0===k?9:10
break
case 9:r=11
return b.b=new A.a9(A.a([new A.N("",null)],n),!0),1
case 11:r=5
break
case 10:r=k<0?12:13
break
case 12:r=14
return b.b=new A.a9(A.a([new A.N(A.Q(k,!1,null),B.m)],n),!0),1
case 14:case 13:case 5:case 3:++m
r=2
break
case 4:return 0
case 1:return b.c=p.at(-1),3}}}},
jE(a,b){a.k(b,0,"\u2550\u2550\u2550\u2550\u2550 Attack \u2550\u2550\u2550\u2550\u2550\u2550 \u2550\u2550 Defense \u2550",B.t)
a.k(b+6,0,"Attack",B.l)
a.k(b+23,0,"Defense",B.l)},
jB(a,b){a.k(b,0,"\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Resistances \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550",B.t)
a.k(b+10,0,"Resistances",B.l)},
jF(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=$.az()
for(s=h.c.f.b,r=3,q=1,p=0,o=0,n=0,m=0,l=0;l<9;++l){k=s[l]
if(k==null)continue
j=k.a
i=j.x
if(i!=null){g=k.gb2()
r=i.c}q*=k.gd2()
p+=k.gd1()
o+=k.gcb()
n+=j.Q
m+=k.gc1()}a.k(b,c,g.b,A.ea(g))
s=t.H
j=A.a([new A.N(A.Q(r,!1,2),null)],s)
B.a.U(j,h.iN(q))
B.a.U(j,h.cA(p))
B.a.U(j,h.cA(o))
A.un(a,j,B.a7,B.C,11,b+3,c)
s=A.a([new A.N(A.Q(n,!1,2),null)],s)
B.a.U(s,h.cA(m))
A.un(a,s,B.a7,B.C,6,b+26,c)},
jA(a,b,c){var s,r,q,p,o,n,m
for(s=$.fy(),r=this.c,q=0,p=0;p<12;++p){o=s[p]
if(o===$.az())continue
n=r.k5(o)
if(n>0)m=B.p
else m=n<0?B.m:B.l
a.k(b+q*3,c,A.Q(n,!1,2),m);++q}},
iN(a){var s,r=null,q=A.ua(a,1,r)
if(a>1)return A.a([new A.N(B.i.aI(" ",4-q.length),r),new A.N("x",B.B),new A.N(q,B.p)],t.H)
else{s=t.H
if(a<1)return A.a([new A.N(B.i.aI(" ",4-q.length),r),new A.N("x",B.a0),new A.N(q,B.m)],s)
else return A.a([new A.N("   ",r)],s)}},
cA(a){var s,r=null,q=A.Q(Math.abs(a),!1,r)
if(a>0)return A.a([new A.N(B.i.aI(" ",3-q.length),r),new A.N("+",B.B),new A.N(q,B.p)],t.H)
else{s=t.H
if(a<0)return A.a([new A.N(B.i.aI(" ",3-q.length),r),new A.N("+",B.a0),new A.N(q,B.m)],s)
else return A.a([new A.N("   ",r)],s)}}}
A.o1.prototype={
$0(){return new A.R(this.la(),t.d8)},
la(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e
return function $async$$0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=t.H,n=t.bZ,m=t.ax,l=s.a,k=l.c.f.b,j=t.cI,i=0
case 2:if(!(i<9)){r=4
break}h=k[i]
r=h!=null?5:7
break
case 5:g=h.a
f=A.a([new A.a9(A.a([new A.N(h.gam().a,null)],o),!0)],n)
switch(l.f.a){case 0:e=B.hV
break
case 1:e=l.fF(h)
break
case 2:e=l.fD(h)
break
case 3:e=A.a6(l.fF(h),j)
B.a.U(e,l.fD(h))
break
default:e=null}B.a.U(f,e)
r=8
return a.b=new A.ar(g.b,h,f,m),1
case 8:r=6
break
case 7:r=9
return a.b=new A.ar(null,null,A.a([new A.a9(A.a([new A.N("("+B.aE[i]+")",null)],o),!1)],n),m),1
case 9:case 6:case 3:++i
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
$S:103}
A.fg.prototype={
aK(){return"_Columns."+this.b}}
A.cF.prototype={
gck(){var s=t.N
return A.C(s,s)},
a9(a,b,c){var s,r
if(b)return!1
if(a===9){s=B.a.c4($.bv,this)
s=c?s+($.bv.length-1):s+1
r=$.bv[B.c.ab(s,$.bv.length)]
this.a.bI(r)
return!0}return!1},
a5(a){if(a===B.G){this.a.a8()
return!0}return!1},
ag(a){var s,r,q,p,o,n,m,l,k=this,j=a.e.a.b.b,i=j.a
A.jm(a,0,2,i,B.f)
for(s=$.bv.length,r=2,q=0;q<$.bv.length;$.bv.length===s||(0,A.o)($.bv),++q){p=$.bv[q]
o=p.gM().length
if(p===k){a.k(r,2,"\u2518"+B.i.aI(" ",o)+"\u2514",B.f)
n=B.f
m=B.f}else{n=B.l
m=B.l}a.k(r,0,"\u250c"+B.i.aI("\u2500",o)+"\u2510",n)
a.k(r,1,"\u2502",n)
a.k(r+o+1,1,"\u2502",n)
a.k(r+1,1,p.gM(),m)
r+=o+2}k.hr(new A.aT(new A.d(i,j.b-3),0,3,a))
l=$.bv[B.c.ab(B.a.c4($.bv,k)+1,$.bv.length)]
j=t.N
j=A.cJ(k.gck(),j,j)
j.i(0,"Tab","View "+l.gM())
j.i(0,"`","Exit")
A.bt(a,j,null)}}
A.k2.prototype={
gdB(){var s,r,q,p,o=this,n=null,m=o.e
if(m===$){s=A.a([new A.aM("Name",B.a7,0,n),new A.aM("Depth",B.al,5,n),new A.aM("Price",B.al,7,n),new A.aM("Found",B.al,5,n),new A.aM("Used",B.al,5,n)],t.E)
r=t.m2
q=t.o5
q=A.a([new A.bw("type",A.a([A.Bp(),A.x3(),A.tw()],r),q),new A.bw("name",A.a([A.tw()],r),q),new A.bw("depth",A.a([A.x3(),A.tw()],r),q),new A.bw("price",A.a([A.Bo(),A.tw()],r),q)],t.mQ)
r=t.i0
p=A.ul(s,A.a([new A.c5("all",new A.p1(),r),new A.c5("discovered",new A.p2(o),r)],t.aG),q,!0,t.q)
o.e!==$&&A.eg()
o.e=p
m=p}return m},
gM(){return"Item Lore"},
gck(){return this.gdB().gck()},
a9(a,b,c){if(this.gdB().a9(a,b,c)){this.K()
return!0}return this.fA(a,b,c)},
a5(a){if(this.gdB().a5(a)){this.K()
return!0}return this.fz(a)},
hr(a){var s,r,q=this.gdB(),p=a.c,o=p.a
p=p.b
q.hp(a.b8(0,1,o,p-16))
s=q.c
q=q.y
if(!(q>=0&&q<s.length))return A.c(s,q)
r=this.c
q=t.q.a(s[q].b)
if(r.ax.ka(q)>0)A.vK(r,new A.K(q,null,null,null,1),!0).jY(a.b8(0,p-15,o,14))},
mP(){var s=$.bk().gc0(),r=A.a6(s,A.z(s).h("k.E"))
this.gdB().kL(new A.p0(this,r))}}
A.p1.prototype={
$1(a){t.q.a(a)
return!0},
$S:39}
A.p2.prototype={
$1(a){return this.a.c.ax.ka(t.q.a(a))>0},
$S:39}
A.p0.prototype={
$0(){return new A.R(this.lb(),t.jE)},
lb(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e
return function $async$$0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=t.H,m=t.bZ,l=t.bB,k=s.a.c.ax,j=k.c,k=k.f,i=0
case 2:if(!(i<o.length)){r=4
break}h=o[i]
g=j.p(0,h)
if(g==null)g=0
r=g>0?5:7
break
case 5:f=A.a([new A.a9(A.a([new A.N(h.a.a7(1).a,null)],n),!0),new A.a9(A.a([new A.N(A.Q(h.c,!1,5),null)],n),!0),new A.a9(A.a([new A.N(A.Q(h.as,!1,7),null)],n),!0)],m)
if(h.dx)f.push(new A.a9(A.a([new A.N("Yes",null)],n),!0))
else f.push(new A.a9(A.a([new A.N(A.Q(g,!1,5),null)],n),!0))
if(h.w!=null){e=k.p(0,h)
f.push(new A.a9(A.a([new A.N(A.Q(e==null?0:e,!1,5),null)],n),!0))}else f.push(new A.a9(A.a([new A.N("--",null)],n),!1))
r=8
return a.b=new A.ar(h.b,h,f,l),1
case 8:r=6
break
case 7:r=9
return a.b=new A.ar(null,h,A.a([new A.a9(A.a([new A.N("(undiscovered "+(i+1)+")",null)],n),!1)],m),l),1
case 9:case 6:case 3:++i
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
$S:145}
A.kl.prototype={
gM(){return"Monster Lore"},
gck(){return this.e.gck()},
a9(a,b,c){if(this.e.a9(a,b,c)){this.K()
return!0}return this.fA(a,b,c)},
a5(a){if(this.e.a5(a)){this.K()
return!0}return this.fz(a)},
hr(a){var s=this.e,r=a.c
s.hp(a.b8(0,1,r.a,r.b-16))
r=s.c
s=s.y
if(!(s>=0&&s<r.length))return A.c(r,s)
this.nG(a,t.P.a(r[s].b))},
nG(a,b){var s,r,q,p,o,n,m=null
a=a.b8(0,a.c.b-15,80,14)
s=a.c
r=s.a
q=this.c.ax.i6(b)===0
p=q?A.an("?",B.j,m):b.b
o=q?m:b.a.a
A.nN(a,0,0,r,s.b,p,o)
if(q){a.k(1,3,"You have not seen this breed yet.",B.j)
return}s=b.fr
n=s!==""?3+A.fP(a,s,m,r-2,1,3)+1:3
A.fP(a,this.m2(b),m,r-2,1,n)},
m2(a){var s,r,q=null,p=A.a([],t.s),o=a.a.d.c,n=this.c.ax,m=a.dy
if(m.length!==0){s=A.M(m)
r=new A.aP(m,s.h("q(1)").a(new A.pI()),s.h("aP<1,q>")).aQ(0," ")}else r="monster"
if(a.ax.f)if(n.ef(a)>0)B.a.j(p,"You have slain this unique "+r+".")
else B.a.j(p,"You have seen but not slain this unique "+r+".")
else B.a.j(p,"You have seen "+A.Q(n.i6(a),!1,q)+" and slain "+A.Q(n.ef(a),!1,q)+" of this "+r+".")
B.a.j(p,o+" is worth "+A.Q(a.gbo(),!1,q)+" experience.")
if(n.ef(a)>0)B.a.j(p,o+" has "+A.Q(a.f,!1,q)+" health.")
return new A.aP(p,t.gL.a(new A.pJ()),t.gQ).aQ(0," ")},
nc(){var s=$.cc().gc0(),r=A.a6(s,A.z(s).h("k.E"))
this.e.kL(new A.pG(this,r))}}
A.pH.prototype={
$1(a){return a>=65&&a<=90},
$S:106}
A.pK.prototype={
$1(a){t.P.a(a)
return!0},
$S:41}
A.pL.prototype={
$1(a){return t.P.a(a).ax.f},
$S:41}
A.pI.prototype={
$1(a){return A.a2(a)},
$S:4}
A.pJ.prototype={
$1(a){A.a2(a)
return B.i.aJ(a,0,1).toUpperCase()+B.i.cT(a,1)},
$S:4}
A.pG.prototype={
$0(){return new A.R(this.lc(),t.kF)},
lc(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$$0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=t.H,m=t.bZ,l=t.cv,k=s.a.c.ax,j=k.a,k=k.b,i=0
case 2:if(!(i<o.length)){r=4
break}h=o[i]
g=j.p(0,h)
if(g==null)g=0
r=g>0?5:7
break
case 5:f=A.a([new A.a9(A.a([new A.N(h.a.a,null)],n),!0),new A.a9(A.a([new A.N(A.Q(h.c,!1,null),null)],n),!0)],m)
if(h.ax.f){e=A.a([new A.N("Yes",null)],n)
d=k.p(0,h)
B.a.U(f,A.a([new A.a9(e,!0),new A.a9(A.a([new A.N((d==null?0:d)>0?"Yes":"No",null)],n),!0)],m))}else{e=A.a([new A.N(A.Q(g,!1,null),null)],n)
d=k.p(0,h)
B.a.U(f,A.a([new A.a9(e,!0),new A.a9(A.a([new A.N(A.Q(d==null?0:d,!1,null),null)],n),!0)],m))}r=8
return a.b=new A.ar(h.b,h,f,l),1
case 8:r=6
break
case 7:r=9
return a.b=new A.ar(null,h,A.a([new A.a9(A.a([new A.N("(undiscovered "+(i+1)+")",null)],n),!1)],m),l),1
case 9:case 6:case 3:++i
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
$S:108}
A.l.prototype={
t(a){return"Input("+this.a+")"}}
A.db.prototype={
gbN(){return B.br},
gco(){return!0},
gcm(){return"Drop"},
cr(a){var s
A:{if(B.v===a){s="Drop which item?"
break A}if(B.Z===a){s="Unequip and drop which item?"
break A}s=A.a0(A.bG("Unreachable."))}return s},
e1(a){return"Drop how many?"},
aS(a){return!0},
bJ(a,b,c){this.b.b.y.at=new A.aS(new A.jn(b,c,a))
this.a.a8()}}
A.dH.prototype={
gco(){return!1},
gcm(){return"Equip"},
cr(a){var s
A:{if(B.v===a){s="Equip which item?"
break A}if(B.Z===a){s="Unequip which item?"
break A}if(B.J===a){s="Pick up and equip which item?"
break A}s=A.a0(A.bG("Unreachable."))}return s},
aS(a){return a.a.e!=null},
bJ(a,b,c){this.b.b.y.at=new A.aS(A.vz(c,a))
this.a.a8()}}
A.h2.prototype={
gco(){return!1},
gcm(){return"Choose"},
gi9(){return"Drop which item?"},
cr(a){var s
A:{if(B.Z===a){s="Equipment"
break A}if(B.J===a){s="On the ground"
break A}s="Inventory"
break A}return s},
aS(a){return!0},
bJ(a,b,c){},
io(a){var s,r=this,q=A.a([],t.aP),p=a.a
if(p.w!=null)q.push(new A.W(["u",85,"Use",new A.oE(r)]))
if(p.e!=null){s=r.c===B.Z?"Unequip":"Equip"
q.push(new A.W(["e",69,s,new A.oF(r)]))}if(p.y!=null)q.push(new A.W(["t",84,"Throw",new A.oG(r)]))
if(r.c!==B.J)q.push(new A.W(["d",68,"Drop",new A.oH(r)]))
if(r.c===B.J)q.push(new A.W(["g",71,"Pick up",new A.oI(r)]))
q.push(B.iB)
return q},
h6(a,b){var s,r,q=this
t.kf.a(a)
if(a==null)return q.ff(b)
s=a.$0()
r=q.c
q.b.z=!0
q.a.bI(s)
s.kT(b,r)},
fg(a){var s=a.a
return this.h6(s.w!=null||s.e!=null?B.a.gaw(this.io(a)).a[3]:null,a)},
kV(a){return this.hS(a)},
hS(a){if(this.c!==B.J)this.h6(new A.oJ(this),a)},
kU(a){var s,r,q,p,o,n,m,l,k,j,i
this.y=a
s=this.a
s.toString
r=a.gam()
q=A.a([],t.oW)
for(p=this.io(a),o=p.length,n=0;n<p.length;p.length===o||(0,A.o)(p),++n){m=p[n].a
l=m[0]
k=m[1]
j=m[2]
i=m[3]
q.push(new A.ac(l,j,i==null?"inspect":i,k,!1))}s.a2(A.wd(r.a,q))},
cX(a,b){var s
t.eE.a(a)
s=this.y
this.y=null
if(s==null||b==null)return
this.h6(t.j5.b(b)?b:null,s)}}
A.oE.prototype={
$0(){return new A.e1(this.a.b,B.v)},
$S:109}
A.oF.prototype={
$0(){return new A.dH(this.a.b,B.v)},
$S:110}
A.oG.prototype={
$0(){return new A.e_(this.a.b,B.v)},
$S:111}
A.oH.prototype={
$0(){return new A.db(this.a.b,B.v)},
$S:42}
A.oI.prototype={
$0(){return new A.dR(this.a.b,B.J)},
$S:113}
A.oJ.prototype={
$0(){return new A.db(this.a.b,B.v)},
$S:42}
A.b1.prototype={
gi9(){return"Inspect which item?"},
gbf(){return!0},
gbN(){var s=A.a([B.Z,B.v],t.hm),r=this.b.b,q=r.x
q===$&&A.b()
if(!q.c5(r.y.y).gaE(0))s.push(B.J)
return s},
gib(){return!1},
gcn(){var s=this.b.b,r=s.y,q=this.c
A:{if(B.v===q){s=r.Q.e
break A}if(B.Z===q){s=r.Q.f
break A}if(B.J===q){s=s.x
s===$&&A.b()
s=s.c5(r.y)
break A}s=A.a0(A.cO("Unexpected location."))}return s},
e1(a){return A.a0(A.bc(null))},
fm(a){return t.W.a(a).gbg()},
hZ(a,b,c){var s=this
if(!c.jO(a)){s.b.b.y.Q.at.X(B.a_,"Not enough room for "+a.b0(b).t(0)+".",null,null,null)
s.K()
return}if(b===a.f){c.c8(a)
s.gcn().ad(0,a)}else{c.c8(a.dk(b))
s.gcn().bn()}s.eJ(a,b)
s.a.a8()},
eJ(a,b){},
a5(a){var s,r,q=this,p=q.d
if(p!=null){if(B.a1===a){q.bJ(p,q.e,q.c)
return!0}if(B.G===a){q.d=null
q.K()
return!0}if(B.X===a&&q.e<p.f){++q.e
q.K()
return!0}if(B.Y===a&&q.e>1){--q.e
q.K()
return!0}}else if(a===B.G){q.a.a8()
return!0}else{s=$.mN
if(!(s>=65&&s<=90)){if(B.X===a){q.j3(-1)
return!0}if(B.Y===a){q.j3(1)
return!0}if((B.a8===a||B.ab===a)&&q.gbN().length>1){q.is(a===B.a8?-1:1)
return!0}if(B.a1===a){r=q.gfK()
if(r!=null)q.kU(r)
return!0}}}return!1},
a9(a,b,c){var s,r,q=this
if(a===16){q.f=!0
q.K()
return!0}if(b)return!1
s=q.f
if(s&&a===27){q.r=null
q.K()
return!0}if(q.d!=null)return!1
if(a>=65&&a<=90){q.nD(a-65,c)
return!0}if(a===9&&!s&&q.gbN().length>1){q.is(c?-1:1)
return!0}r=q.gfK()
if(96===a||110===a){q.a.a8()
return!0}if(107===a&&r!=null){q.fg(r)
return!0}if(109===a&&r!=null){q.hS(r)
return!0}if(106===a&&r!=null){q.ff(r)
return!0}return!1},
f4(a,b,c){if(a===16){this.f=!1
this.K()
return!0}return!1},
ag(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="Unexpected location.",c="Inspect item",b=e.c
A:{if(B.v===b){s=24
break A}if(B.Z===b){s=9
break A}if(B.J===b){s=e.gcn()
s=Math.min(s.gI(s),26)
break A}s=A.a0(A.cO(d))}r=e.b
q=r.f
p=q.a
if(p!=null){o=e.c
B:{n=0
if(B.v===o){q=11
break B}if(B.Z===o){q=n
break B}m=B.J===o
if(m&&p.b.b>50&&s>5){q=Math.max(0,q.gdZ()-s+5)
break B}if(m&&p.b.b>50){q=q.gdZ()
break B}if(m){q=n
break B}q=A.a0(A.cO(d))}l=Math.max(46,p.b.a+2)
k=a.e.a.b.b.a-l
n=q}else{q=r.w
q===$&&A.b()
q=q.a
k=q.ge5()-46
n=q.a.b
l=46}q=e.gcn()
p=e.d==null&&e.f
j=e.gib()
i=e.r
h=e.d==null?e.gfK():null
A.uJ(a,q,e.glQ(),!0,p,h,e.gi3(),i,!1,s,k,r.b.y.Q,!0,j,n,l)
if(e.d==null)g=e.f?e.gi9():e.cr(e.c)
else g=e.e1(e.c)+" "+e.e
if(e.d==null){s=t.N
if(e.f){s=A.C(s,s)
s.i(0,"A-Z",c)
if(e.r!=null)s.i(0,"`","Hide inspector")
f=s}else{s=A.C(s,s)
s.i(0,"A-Z","Select item")
s.i(0,"Shift",c)
if(e.gbN().length>1)s.i(0,"Tab","Switch view")
f=s}}else{s=t.N
f=A.B(["OK",e.gcm(),"\u2195","Change quantity","`","Cancel"],s,s)}A.bt(a,f,g)},
lR(a){var s,r=this
if(r.f&&r.d==null)return!0
s=r.d
if(s!=null)return a===s
return r.aS(a)},
nD(a,b){var s,r=this,q=J.iK(r.gcn().gcv()),p=q.length
if(a>=p)return
if(!(a>=0))return A.c(q,a)
s=q[a]
if(s==null)return
r.w=a
if($.x9)r.ff(s)
else if(r.f||b)r.kV(s)
else r.fg(s)},
fg(a){return this.kT(a,this.c)},
kU(a){return this.fg(a)},
kV(a){return this.ff(a)},
hS(a){},
ff(a){this.r=this.r===a?null:a
this.K()},
kT(a,b){var s=this
s.c=b
if(!s.aS(a))return
if(a.f>1&&s.gco()){s.d=a
s.r=null
s.e=a.f
s.K()}else s.bJ(a,1,s.c)},
gfK(){var s=J.iK(this.gcn().gcv()),r=this.w,q=s.length
if(r<q){if(!(r>=0))return A.c(s,r)
r=s[r]}else r=null
return r},
j3(a){var s,r,q,p,o=this,n=J.iK(o.gcn().gcv())
for(s=n.length,r=o.w,q=1;q<=s;++q){p=B.c.ab(r+a*q,s)
if(n[p]!=null){o.w=p
break}}o.K()},
is(a){var s=this,r=B.a.c4(s.gbN(),s.c),q=s.gbN().length,p=s.gbN(),o=B.c.ab(r+q+a,q)
if(!(o<p.length))return A.c(p,o)
s.c=p[o]
o=B.a.hA(J.iK(s.gcn().gcv()),new A.oZ())
s.w=o
if(o<0)s.w=0
s.K()}}
A.oZ.prototype={
$1(a){return t.U.a(a)!=null},
$S:115}
A.k1.prototype={
lz(a,b,c){var s=this,r=s.a,q=r.a
if(q.x!=null)s.b=new A.i_(a,r)
if(q.Q+r.gc1()!==0||q.z!=null)s.c=new A.i1(r)
if(q.e!=null)s.d=new A.ii(r)
r=q.w
if(r!=null){q=c?78:34
s.e=new A.fm(A.dO(q,r.a),"Use")}},
hq(a,b,c){var s,r,q,p,o,n=this,m=A.a([],t.n9),l=n.b
if(l!=null)m.push(l)
l=n.c
if(l!=null)m.push(l)
l=n.d
if(l!=null)m.push(l)
l=n.e
if(l!=null)m.push(l)
l=n.f
l===$&&A.b()
m.push(l)
s=4+n.nB(m)
c=c.b8(a,B.c.P(b-1,0,c.gao()-4-s),34,s)
l=c.c
r=n.a
A.nN(c,0,0,l.a,l.b,r.a.b,r.gam().a)
for(l=m.length,q=3,p=0;p<m.length;m.length===l||(0,A.o)(m),++p){o=m[p]
c.k(1,q,o.gdT()+" ",B.f)
o.dt(c,q+1)
q=q+o.gao()+2}},
jY(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.c,h=i.a
i=i.b
s=j.a
A.nN(a,0,0,h,i,s.a.b,s.gam().a)
r=j.b
q=r!=null?r.dN(a,3):3
p=j.c
if(p!=null)q=p.dN(a,q)
o=a.b8(40,0,h-40,i)
n=j.d
m=n!=null?n.dN(o,3):3
l=Math.max(q,m)
k=j.e
if(k!=null)l=k.dN(a,l)
i=j.f
i===$&&A.b()
i.dN(a,l)},
nB(a){var s,r,q,p
t.la.a(a)
for(s=a.length,r=0,q=0;p=a.length,q<p;a.length===s||(0,A.o)(a),++q)r+=a[q].gao()+1
return r+p-1}}
A.p_.prototype={
$2(a,b){t.M.a(a)
A.u(b)
if(b<0)B.a.j(this.a,"It lowers "+a.gM()+" by "+-b+".")
else if(b>0)B.a.j(this.a,"It raises "+a.gM()+" by "+b+".")},
$S:19}
A.cX.prototype={
dN(a,b){a.k(1,b,this.gdT()+" ",B.f)
this.dt(a,b+1)
return b+this.gao()+2},
eI(a,b,c,d){var s,r,q=B.c.t(Math.abs(d))
if(d>0){s=q.length
a.k(b+2-s,c,"+",B.B)
a.k(b+3-s,c,q,B.p)}else{s=q.length
r=b+2-s
s=b+3-s
if(d<0){a.k(r,c,"-",B.a0)
a.k(s,c,q,B.m)}else{a.k(r,c,"+",B.j)
a.k(s,c,q,B.j)}}},
hd(a,b,c,d){a.k(1,b,c+":",B.j)
a.k(12,b,B.c.t(d),B.d)},
jD(a,b,c,d){var s,r
if(d>1){s=B.B
r=B.p}else if(d<1){s=B.a0
r=B.m}else{s=B.j
r=B.j}a.k(b,c,"x",s)
a.k(b+1,c,A.ua(d,1,null),r)}}
A.i_.prototype={
gdT(){return"Attack"},
gao(){var s=this.b,r=s.gcb()!==0?3:2
return s.a.x.d>0?r+1:r},
dt(a,b){var s,r,q,p,o=this
a.k(1,b,"Damage:",B.j)
s=o.b
if(s.gb2()!==$.az())a.k(9,b,s.gb2().b,A.ea(s.gb2()))
r=s.a.x
q=r.c
a.k(12,b,B.c.t(q),B.d)
o.jD(a,16,b,s.gd2())
o.eI(a,20,b,s.gd1())
a.k(25,b,"=",B.l)
a.k(27,b,A.ua(q*s.gd2()+s.gd1(),2,6),B.N);++b
if(s.gcb()!==0){a.k(1,b,"Strike:",B.j)
o.eI(a,12,b,s.gcb());++b}r=r.d
if(r>0){o.hd(a,b,"Range",r);++b}a.k(1,b,"Heft:",B.j)
r=o.a.ay
q=r.a
q.toString
p=q>=s.gf0()?B.d:B.m
a.k(12,b,B.c.t(s.gf0()),p)
o.jD(a,16,b,r.kc(s.gf0()))}}
A.i1.prototype={
gdT(){return"Defense"},
gao(){var s=this.a,r=s.a,q=r.z!=null?2:1
return r.Q+s.gc1()!==0?q+1:q},
dt(a,b){var s=this,r=s.a,q=r.a,p=q.z
if(p!=null){s.hd(a,b,"Dodge",p.a);++b}q=q.Q
if(q+r.gc1()!==0){a.k(1,b,"Armor:",B.j)
a.k(12,b,B.c.t(q),B.d)
s.eI(a,16,b,r.gc1())
a.k(25,b,"=",B.l)
a.k(27,b,A.Q(q+r.gc1(),!1,6),B.p);++b}s.hd(a,b,"Weight",r.ge8())}}
A.ii.prototype={
gdT(){return"Resistances"},
gao(){return 2},
dt(a,b){var s,r,q,p,o,n,m,l
for(s=$.fy(),r=this.a,q=b+1,p=1,o=0;o<12;++o){n=s[o]
if(n===$.az())continue
m=r.c6(n)
this.eI(a,p-1,b,m)
l=m===0?B.j:A.ea(n)
a.k(p,q,n.b,l)
p+=3}}}
A.fm.prototype={
gao(){return this.a.length},
dt(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){a.k(1,b,s[q],B.d);++b}},
gdT(){return this.b}}
A.dR.prototype={
gbN(){return B.hW},
gco(){return!0},
gcm(){return"Pick up"},
cr(a){return"Pick up which item?"},
e1(a){return"Pick up how many?"},
aS(a){return!0},
bJ(a,b,c){this.b.b.y.at=new A.aS(A.vY(a))
this.a.a8()}}
A.mk.prototype={
gbN(){return B.br},
gco(){return!0},
gcm(){return"Put"},
cr(a){return"Put which item?"},
e1(a){return"Put how many?"},
aS(a){return!0}}
A.kK.prototype={
bJ(a,b,c){this.hZ(a,b,this.b.b.y.Q.w)},
eJ(a,b){this.b.b.y.Q.at.X(B.x,"You place "+a.b0(b).t(0)+" into the crucible.",null,null,null)
this.CW.$0()}}
A.kL.prototype={
bJ(a,b,c){this.hZ(a,b,this.b.b.y.Q.r)},
eJ(a,b){this.b.b.y.Q.at.X(B.x,"You put "+a.b0(b).t(0)+" safely into your home.",null,null,null)}}
A.hG.prototype={
gbN(){return B.br},
gco(){return!0},
gib(){return!0},
gcm(){return"Sell"},
cr(a){return"Sell which item?"},
e1(a){return"Sell how many?"},
aS(a){return a.gbg()!==0},
fm(a){return B.e.bP(t.W.a(a).gbg()*0.75)},
bJ(a,b,c){this.hZ(a,b,this.y)},
eJ(a,b){var s=a.b0(b).gam(),r=B.e.bP(a.gbg()*0.75)*b,q=this.b.b.y.Q
q.at.X(B.x,"You sell "+s.a+" for "+r+" gold.",null,null,null)
q.Q+=r}}
A.e_.prototype={
gco(){return!1},
gcm(){return"Toss"},
cr(a){var s
A:{if(B.v===a){s="Throw which item?"
break A}if(B.Z===a){s="Unequip and throw which item?"
break A}if(B.J===a){s="Pick up and throw which item?"
break A}s=A.a0(A.bG("Unreachable."))}return s},
aS(a){return a.a.y!=null},
bJ(a,b,c){var s,r=A.bH(a.a.y.b),q=this.b
q.b.y.kt(r,B.ht)
s=this.a
s.toString
s.bI(A.wf(q,r.gaB(),new A.ro(this,c,a,r)))}}
A.ro.prototype={
$1(a){var s=this
s.a.b.b.y.at=new A.aS(new A.lg(s.d,a,s.b,s.c))},
$S:10}
A.e0.prototype={
gfL(){return null},
gbf(){return!0},
gdr(){return!1},
gh9(){return!1},
nY(a){if(this.c)return!0
return this.aS(a)},
aS(a){return!0},
a5(a){this.f=null
if(a===B.G){this.a.a8()
return!0}return!1},
a9(a,b,c){var s,r,q,p,o=this
o.f=null
if(a===16){o.c=!0
o.K()
return!0}if(b)return!1
if(o.c)s=a===27||a===192
else s=!1
if(s){o.e=null
o.K()
return!0}if(a>=65&&a<=90){r=a-65
if(r>=o.gbc().gI(0))return!1
q=o.gbc().aW(0,r)
if(q==null)return!1
if(o.c){o.e=q
o.K()}else{if(!o.gdr()||!o.aS(q))return!1
if(q.f>1){o.d=!1
s=o.a
s.toString
t.ak.a(o)
p=new A.fh(o,q,o.iV(q),o.b)
p.e=q
s.a2(p)
return!0}if(o.jt(q,1)){o.a.a8()
return!0}}}return!1},
f4(a,b,c){if(a===16){this.c=!1
this.K()
return!0}return!1},
cX(a,b){var s=this
t.eE.a(a)
s.d=!0
s.e=null
if(a instanceof A.fh&&b!=null)if(s.jt(a.x,A.u(b)))s.a.a8()},
ag(a){var s,r,q,p,o,n,m,l,k,j=this
if(j.d)if(j.c){s=t.N
s=A.C(s,s)
s.i(0,"A-Z","Inspect item")
if(j.e!=null)s.i(0,"`","Hide inspector")
A.bt(a,s,"Inspect which item?")}else A.bt(a,j.gcV(),j.gcU())
s=j.gbc()
r=j.b
q=r.w
q===$&&A.b()
q=q.a
p=q.a
q=Math.min(46,q.b.a)
o=j.gbc().b.length
n=j.c
m=j.gh9()
l=j.d?j.e:null
k=j.c||j.gdr()
A.uJ(a,s,j.gnX(),k,n,null,j.gev(),l,!0,o,p.a,r.b.y.Q,!0,m,p.b,q)
s=j.f
if(s!=null)a.k(0,32,s,B.m)},
iV(a){return a.f},
fW(a){return a.f},
bZ(a){t.W.a(a)
return null},
jt(a,b){var s=this,r=s.gfL()
if(!r.jO(a)){s.f="Not enough room for "+a.b0(b).t(0)+"."
s.K()
return!1}if(b===a.f){r.c8(a)
B.a.ad(s.gbc().b,a)}else{r.c8(a.dk(b))
s.gbc().bn()}s.cz(a,b)
return!0},
cz(a,b){}}
A.cU.prototype={}
A.i7.prototype={
gbc(){return this.b.b.y.Q.r},
gcU(){return"Welcome home!"},
gcV(){var s=t.N
return A.B(["G","Get item","P","Put item","Shift","Inspect item","Tab","Use crucible","`","Leave"],s,s)},
a9(a,b,c){var s,r,q,p=this
if(p.ek(a,b,c))return!0
if(c||b)return!1
switch(a){case 71:s=new A.m0(p.b)
s.e=p.e
p.d=!1
p.a.a2(s)
return!0
case 80:p.d=!1
p.a.a2(new A.kL(p.b,B.v))
return!0
case 9:r=p.a
r.toString
q=new A.i0(p.b)
q.ez()
r.bI(q)
return!0}return!1}}
A.i6.prototype={
gcU(){return"Get which item?"},
geH(){return"Get"},
gcV(){var s=t.N
return A.B(["A-Z","Select item","Shift","Inspect item","`","Cancel"],s,s)},
gfL(){return this.b.b.y.Q.e},
gdr(){return!0},
aS(a){return!0},
cz(a,b){var s=this.b.b.y
s.Q.ax.d7(a)
s.bs()}}
A.m0.prototype={
gbc(){return this.b.b.y.Q.r},
cz(a,b){this.b.b.y.Q.at.X(B.x,"You take "+a.b0(b).t(0)+" from your home.",null,null,null)
this.il(a,b)}}
A.m_.prototype={
gbc(){return this.b.b.y.Q.w},
cz(a,b){this.b.b.y.Q.at.X(B.x,"You remove "+a.b0(b).t(0)+" from the crucible.",null,null,null)
this.il(a,b)
this.cy.$0()}}
A.i0.prototype={
gbc(){return this.b.b.y.Q.w},
gcU(){return this.w!=null?"Ready to forge item!":"Place items to complete a recipe."},
gcV(){var s=t.N
s=A.C(s,s)
s.i(0,"G","Get item")
s.i(0,"P","Put item")
s.i(0,"Shift","Inspect item")
if(this.w!=null)s.i(0,"Space","Forge item")
s.i(0,"Tab","Back to home")
s.i(0,"`","Leave")
return s},
ag(a){var s,r,q,p,o
this.lu(a)
s=this.b
r=s.w
r===$&&A.b()
r=r.a
q=Math.min(46,r.b.a)
r=r.a
s=s.b.y.Q.w
p=q-8
a=new A.aT(new A.d(p,3),r.a+4,r.b+s.b.length+1,a)
A.cB(a,0,0,p,3,null,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
a.k(0,0,"\u252c",B.l)
a.k(p-1,0,"\u252c",B.l)
o=this.w
if(o!=null)a.k(1,1,"Forge a "+o.c,B.C)
else if(!s.gN(0).q())a.k(1,1,"Add ingredients to crucible",B.j)
else a.k(1,1,"Not a complete recipe",B.j)},
a9(a,b,c){var s,r,q,p=this
if(p.ek(a,b,c))return!0
if(c||b)return!1
if(71===a){s=new A.m_(p.gjf(),p.b)
s.e=p.e
p.d=!1
p.a.a2(s)
return!0}if(80===a){p.d=!1
p.a.a2(new A.kK(p.gjf(),p.b,B.v))
return!0}if(32===a&&p.w!=null){r=p.b.b.y.Q
q=r.w
B.a.aU(q.b)
q.d=null
p.w.b.b1(r.ax,1,q.gl0())
p.ez()
p.K()
return!0}if(9===a){p.a.bI(new A.i7(p.b))
return!0}return!1},
cz(a,b){this.ez()},
ez(){var s,r,q,p,o,n
this.w=null
for(s=$.hx.length,r=this.b.b.y.Q.w,q=t.D,p=0;p<$.hx.length;$.hx.length===s||(0,A.o)($.hx),++p){o=$.hx[p]
n=o.nb(q.a(r))
if(n!=null&&n.a===0){this.w=o
return}}}}
A.im.prototype={
gbc(){return this.w},
gcU(){return"What can I interest you in?"},
gh9(){return!0},
gcV(){var s=t.N
return A.B(["B","Buy item","S","Sell item","Shift","Inspect item","`","Cancel"],s,s)},
a9(a,b,c){var s,r=this
if(r.ek(a,b,c))return!0
if(c||b)return!1
switch(a){case 66:s=new A.il(r.w,r.b)
s.e=r.e
r.d=!1
r.a.a2(s)
break
case 83:r.d=!1
r.a.a2(new A.hG(r.w,r.b,B.v))
return!0}return!1},
bZ(a){return t.W.a(a).gbg()}}
A.il.prototype={
gcU(){return"Buy which item?"},
geH(){return"Buy"},
gcV(){var s=t.N
return A.B(["A-Z","Select item","Shift","Inspect item","`","Cancel"],s,s)},
gbc(){return this.at},
gfL(){return this.b.b.y.Q.e},
gdr(){return!0},
gh9(){return!0},
aS(a){return a.gbg()<=this.b.b.y.Q.Q},
iV(a){return 1},
fW(a){return Math.min(a.f,B.c.cc(this.b.b.y.Q.Q,a.gbg()))},
bZ(a){return t.W.a(a).gbg()},
cz(a,b){var s=a.gbg()*b,r=this.b.b.y,q=r.Q
q.at.X(B.x,"You buy "+a.b0(b).t(0)+" for "+s+" gold.",null,null,null)
q.Q-=s
q.ax.d7(a)
r.bs()}}
A.fh.prototype={
gbc(){return this.w.gbc()},
gcU(){var s,r=this,q=r.x,p=q.b0(r.y).gam().a,o=r.w,n=o.bZ(q)
if(n!=null){s=A.Q(n*r.y,!1,null)
return o.geH()+" "+p+" for "+s+" gold?"}else return o.geH()+" "+p+"?"},
gcV(){var s=t.N
return A.B(["OK",this.w.geH(),"\u2195","Change quantity","`","Cancel"],s,s)},
gdr(){return!0},
aS(a){return a===this.x},
a9(a,b,c){if(a===16)return!1
return this.ek(a,b,c)},
f4(a,b,c){return!1},
a5(a){var s=this
A:{if(B.a1===a){s.a.aN(s.y)
break A}if(B.G===a){s.a.a8()
break A}if(B.X===a&&s.y<s.w.fW(s.x)){++s.y
break A}if(B.Y===a&&s.y>1){--s.y
break A}if(B.ao===a){s.y=s.w.fW(s.x)
break A}if(B.ap===a){s.y=1
break A}return!1}s.K()
return!0},
bZ(a){return this.w.bZ(t.W.a(a))}}
A.e1.prototype={
gco(){return!1},
gcm(){return"Use"},
cr(a){var s
A:{if(B.v===a||B.Z===a){s="Use which item?"
break A}if(B.J===a){s="Pick up and use which item?"
break A}s=A.a0(A.bG("Unreachable."))}return s},
aS(a){return a.a.w!=null},
bJ(a,b,c){this.b.b.y.at=new A.aS(new A.lm(c,a))
this.a.a8()}}
A.jL.prototype={
a5(a){switch(a){case B.G:this.a.a8()
return!0}return!1},
ag(a){var s=this.b.d?"Create a new hero":"Try again",r=t.N
A.vw(a,60,40,new A.or(this),A.B(["`",s],r,r),"You have died")}}
A.or.prototype={
$1(a){var s,r,q,p,o=a.c,n=o.b-1
for(s=this.a.b.at.a,r=s.length-1,o=o.a;r>=0;--r){if(!(r<s.length))return A.c(s,r)
q=A.dO(o,s[r].b)
for(p=q.length-1;p>=0;--p){if(!(p<q.length))return A.c(q,p)
a.pH(0,n,q[p]);--n
if(n<0)break}if(n<0)break}},
$S:45}
A.kf.prototype={
a5(a){var s,r,q,p,o,n=this
if(B.X===a&&n.d>0){--n.d
n.h3()
n.K()
return!0}if(B.Y===a&&n.d<n.c.b.length-1){++n.d
n.h3()
n.K()
return!0}if(B.a1===a){s=n.d
r=n.c
q=r.b
p=q.length
if(s<p){if(!(s>=0))return A.c(q,s)
o=q[s]
n.x=!1
s=n.a
s.toString
s.a2(A.os(r,n.b,o,!1))}return!0}if(B.aK===a){s=n.a
s.toString
r=B.aS.gb3()
r=A.a6(r,A.z(r).h("k.E"))
s.a2(new A.h0(r))
return!0}return!1},
h3(){var s=this,r=s.y=B.c.P(s.y,0,Math.max(s.c.b.length-8,0)),q=s.d
if(q<r)s.y=q
else if(q>=r+8)s.y=q-8+1},
a9(a,b,c){var s,r,q,p=this
if(c||b)return!1
switch(a){case 68:s=p.d
r=p.c.b
q=r.length
if(s<q){if(!(s>=0))return A.c(r,s)
s=r[s]
p.x=!1
p.a.a2(new A.fM("Are you sure you want to delete "+s.a+"?","delete"))}return!0
case 78:p.x=!1
s=p.a
s.toString
s.a2(A.z4(p.b,p.c))
return!0}return!1},
cX(a,b){var s,r,q=this
q.x=!0
if(a instanceof A.fM&&J.aA(b,"delete")){s=q.c.b
r=q.d
if(!(r>=0&&r<s.length))return A.c(s,r)
B.a.ad(s,s[r])
r=q.d
if(r>0&&r>=s.length)q.d=r-1
q.h3()
q.K()}},
e4(a){this.f=this.e=null},
bv(){var s,r,q=this
if(!q.x)return
s=q.w
if(s>0){--s
q.w=s
if(s===0){q.e=null
q.K()}return}r=q.f
if(r!=null){if(!r.q()){q.f=null
q.w=300
return}s=r.b
if(J.aA(s==null?r.$ti.c.a(s):s,"Ready to decorate"))q.r=!0
if(q.r){s=q.e.x
s===$&&A.b()
s.hX()
s=q.e.x
s===$&&A.b()
s.gav().cJ()}q.K()}},
ag(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.e
if(d!=null)f.jh(a,d)
else{s=f.b
r=s.oG("Temporary")
q=a.e.a.b.b
p=f.e=A.u4(s,$.m().aA(1,100),r,q.b,q.a)
q=p.e9()
f.f=new A.ah(q.a(),q.$ti.h("ah<1>"))
f.r=!1
f.jh(a,p)}s=a.e.a.b.b
o=new A.aT(new A.d(68,34),B.c.A(s.a-68,2),B.c.A(s.b-34,2),a)
o.cl(0,0,o.gaR(),o.gao())
A.cB(o,0,0,68,34,e,"\u2554","\u2550","\u2557","\u2551","\u255a","\u2550","\u255d")
for(n=0;n<14;++n)for(s=n+2,m=0;m<B.ca[n].length;++m){q=B.hK[n]
if(!(m<q.length))return A.c(q,m)
l=B.i3.p(0,q[m])
q=B.ca[n]
if(!(m<q.length))return A.c(q,m)
o.k(m+3,s,q[m],l)}o.k(3,18,"Which hero shall you play?",B.d)
A.jm(o,3,20,62,e)
A.jm(o,3,29,62,e)
s=f.c.b
if(s.length===0)o.k(3,21,"(No heroes. Please create a new one.)",B.j)
else{if(f.y>0)o.k(34,20,"\u25b2",B.h)
if(f.y<s.length-8)o.k(34,29,"\u25bc",B.h)
for(k=0;k<8;++k){j=k+f.y
q=s.length
if(j>=q)break
if(!(j>=0))return A.c(s,j)
i=s[j]
if(j===f.d)o.an(2,21+k,new A.X(9658,B.h,B.z))
h=j===f.d?B.h:B.C
q=21+k
o.k(3,q,i.a,h)
g=j===f.d?B.h:B.d
o.k(34,q,i.b.a,g)
o.k(42,q,i.c.a,g)
if(i.d)o.k(55,q,"Permadeath",g)}}if(f.x){s=t.N
A.bt(a,A.B(["OK","Play","\u2195","Change selection","N","Create a new hero","D","Delete hero","H","Help"],s,s),e)}},
jh(a,b){var s,r,q,p=b.x
p===$&&A.b()
for(p=p.f.b.b,s=p.b,p=p.a,r=0;r<s;++r)for(q=0;q<p;++q)this.nt(a,b,new A.d(q,r))},
nt(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
d===$&&A.b()
s=c.a
r=c.b
q=d.f.B(s,r)
p=q.a.d
A:{if(p instanceof A.X){o=p
break A}if(t.af.b(p)){o=p[B.c.ab(A.x1(s,r),p.length)]
break A}o=B.b3
break A}n=o.a
m=o.b
l=o.c
k=d.c5(c)
j=k.gaE(0)
if(!j){i=k.gaw(0).a.b
n=i.a
m=i.b}d=d.w.B(s,r)
h=d==null?null:d.geK()
if(h instanceof A.X){n=h.a
m=h.b
j=!1}d=new A.pB()
g=d.$2(m,B.bE)
f=d.$2(l,B.cP)
q=new A.pA(q)
if(j)m=q.$2(m,g)
e=q.$2(l,f)
a.e.i7(s,r,A.cD(n,m,e))}}
A.pB.prototype={
$2(a,b){return new A.E(B.c.A(a.a*b.a,255),B.c.A(a.b*b.b,255),B.c.A(a.c*b.c,255))},
$S:21}
A.pA.prototype={
$2(a,b){var s=this.a,r=s.d
if(r<128)a=a.bk(b,A.w(r,0,127,1,0))
else if(r>128)a=a.aZ(0,B.u,A.w(r,128,255,0,0.2))
s=s.e
return s>0?a.aZ(0,B.bC,A.w(s,0,255,0.05,0.1)):a},
$S:21}
A.ky.prototype={
ag(a){var s,r,q=this,p=t.N
p=A.C(p,p)
p.i(0,"Tab","Next field")
s=q.x
r=q.d
if(!(r>=0&&r<s.length))return A.c(s,r)
p.U(0,s[r].gcE())
if(q.e.f)p.i(0,"Enter","Create hero")
p.i(0,"`","Cancel")
A.vw(a,80,40,new A.pU(q),p,"Create New Hero")},
ns(a){var s,r,q,p,o=$.fz(),n=this.f.e
if(!(n>=0&&n<5))return A.c(o,n)
s=o[n]
this.jj(a,s.d)
n=A.a([],t.dF)
for(o=s.c,r=0;r<4;++r){q=B.aR[r]
p=o.p(0,q)
p.toString
n.push(new A.O(q.c,B.e.L(p*100)))}this.ji(a,200,n)},
nq(a){var s,r,q=$.eh(),p=this.r.e
if(!(p>=0&&p<3))return A.c(q,p)
s=q[p]
this.jj(a,s.d)
p=A.a([],t.dF)
for(q=s.c,q=new A.bl(q,A.z(q).h("bl<1,2>")).gN(0);q.q();){r=q.d
p.push(new A.O(r.a.a,r.b))}this.ji(a,10,p)},
jj(a,b){var s,r,q,p,o,n,m,l,k
t.m1.a(b)
for(s=b.length,r=3,q=0;q<b.length;b.length===s||(0,A.o)(b),++q){p=b[q]
for(o=A.dO(53,p.gM()+": "+p.gW()),n=o.length,m=r,l=0;l<o.length;o.length===n||(0,A.o)(o),++l,m=k){k=m+1
a.k(25,m,o[l],B.d)}a.k(25,r,p.gM()+":",B.j)
r=m+1}},
ji(a,b,c){var s,r,q,p
t.ig.a(c)
for(s=c.length,r=3,q=0;q<c.length;c.length===s||(0,A.o)(c),++q){p=c[q]
a.k(0,r,p.a,B.j)
A.vy(a,13,r,10,p.b,b,null,null);++r}},
nr(a){var s,r,q,p,o,n=this,m=null,l=n.d
A:{if(0===l){s=B.iq
break A}if(1===l){s=$.fz()
r=n.f.e
if(!(r>=0&&r<5))return A.c(s,r)
r=s[r]
r=new A.O(r.a,r.b)
s=r
break A}if(2===l){s=$.eh()
r=n.r.e
if(!(r>=0&&r<3))return A.c(s,r)
r=s[r]
r=new A.O(r.a,r.b)
s=r
break A}if(3===l){s=n.w.e
if(!(s>=0&&s<2))return A.c(B.bs,s)
s=new A.O(B.bs[s],B.i_[s])
break A}s=A.a0(A.cO("Unexpected focus."))}A.bh(a,m,m,s.a,!0,m,m,m)
for(s=A.dO(a.c.a-2,s.b),r=s.length,q=2,p=0;p<s.length;s.length===r||(0,A.o)(s),++p,q=o){o=q+1
a.k(1,q,s[p],B.d)}},
a5(a){var s=this,r=s.x,q=s.d
if(!(q>=0&&q<r.length))return A.c(r,q)
if(r[q].a5(a)){s.K()
return!0}switch(a){case B.G:s.a.a8()
return!0}return!1},
a9(a,b,c){var s,r,q,p,o,n=this,m=n.x,l=n.d
if(!(l>=0&&l<m.length))return A.c(m,l)
if(m[l].a9(a,b,c)){n.K()
return!0}if(b)return!1
if(13===a&&n.e.f){m=n.b
l=n.e
s=l.d
l=s.length!==0?s:l.e
s=$.fz()
r=n.f.e
if(!(r>=0&&r<5))return A.c(s,r)
r=s[r]
s=$.eh()
q=n.r.e
if(!(q>=0&&q<3))return A.c(s,q)
p=m.jT(l,s[q],n.w.e===1,r)
r=n.c
B.a.j(r.b,p)
r.bi()
q=n.a
q.toString
q.bI(A.os(r,m,p,!0))
return!0}if(9===a){o=c?m.length-1:1
n.d=B.c.ab(n.d+o,m.length)
n.K()
return!0}return!1}}
A.pS.prototype={
$1(a){return t.ho.a(a).a},
$S:119}
A.pT.prototype={
$1(a){return t.lJ.a(a).a},
$S:120}
A.pU.prototype={
$1(a){var s,r,q,p,o
for(s=a.c.a,r=0;r<3;++r){q=B.hC[r]
p=B.i.aI("\u2500",s)
a.k(0,q,p,B.t)}p=this.a
p.ns(a.b8(0,2,s,10))
p.nq(a.b8(0,12,s,10))
p.nr(a.b8(0,25,s,14))
for(s=p.x,o=0;o<s.length;++o)s[o].kS(a,o===p.d)},
$S:45}
A.et.prototype={
a5(a){return!1},
a9(a,b,c){return!1}}
A.ko.prototype={
gcE(){return B.i5},
a9(a,b,c){var s,r,q=this
if(b)return!1
switch(a){case 8:s=q.d
r=s.length
if(r!==0){s=B.i.aJ(s,0,r-1)
q.d=s
if(s.length===0){s=$.m()
t.m.a(B.ah)
r=B.ah.length
s=s.T(r)
if(!(s>=0&&s<r))return A.c(B.ah,s)
q.e=B.ah[s]}}q.h4()
return!0
case 32:q.fC(" ")
return!0
default:if(a>=65&&a<=90){q.fC(A.b4(!c?32+a:a))
return!0}else if(a>=48&&a<=57){q.fC(A.b4(a))
return!0}}return!1},
fC(a){var s=this.d
if(s.length<20)this.d=s+a
this.h4()},
h4(){this.f=B.a.oR(this.c.b,new A.pR(this))},
kS(a,b){var s=this,r=s.f?B.h:B.m,q=s.a,p=s.b,o=p+1
a.k(q,o,"Name:",B.f)
if(b)A.cB(a,q+24,p,23,3,r,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
p=s.d
if(p.length!==0){q+=25
a.k(q,o,p,B.C)
if(b)a.cu(q+s.d.length,o," ",B.z,r)}else{q+=25
p=s.e
if(b)a.cu(q,o,p,B.z,r)
else a.k(q,o,p,B.C)}if(!s.f)a.k(48,3,"Already a hero with that name",B.m)}}
A.pR.prototype={
$1(a){var s,r
t.er.a(a)
s=this.a
r=s.d
s=r.length!==0?r:s.e
return a.a!==s},
$S:24}
A.f8.prototype={
gcE(){var s=t.N
return A.B(["\u25c4\u25ba","Select "+this.c.toLowerCase()],s,s)},
a5(a){var s,r,q=this
switch(a){case B.a8:s=q.e
r=q.d.length
q.e=B.c.ab(s+r-1,r)
return!0
case B.ab:q.e=B.c.ab(q.e+1,q.d.length)
return!0}return!1},
kS(a,b){var s,r,q,p,o,n=this,m=n.a,l=n.b,k=l+1
a.k(m,k,n.c+":",B.f)
s=m+25
if(b)for(m=n.d,r=0;r<m.length;++r){q=m[r]
if(r===n.e){p=s-1
o=q.length
A.cB(a,p,l,o+2,3,B.h,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
a.k(p,k,"\u25c4",B.h)
a.k(s+o,k,"\u25ba",B.h)}a.k(s,k,q,r===n.e?B.h:B.C)
s+=q.length+2}else{m=n.d
l=n.e
if(!(l>=0&&l<m.length))return A.c(m,l)
a.k(s,k,m[l],B.C)}}}
A.p3.prototype={
gdZ(){return 9+this.b.y.Q.e.c+4},
fd(a){var s,r,q=this,p=q.b,o=p.y,n=o.Q
q.fN(a,0,9,n.f)
n=n.e
q.fN(a,11,n.c,n)
if(q.a.b.b>50){p=p.x
p===$&&A.b()
s=p.c5(o.y)
q.fN(a,q.gdZ(),5,s)}r=q.a.b.b>50?q.gdZ()+7:q.gdZ()
p=a.c
A.cB(a,0,r,p.a,p.b-r,null,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")},
fN(a,b,c,d){A.uJ(a,d,A.Bq(),!1,!1,null,A.Br(),null,!1,c,0,this.b.y.Q,!1,!1,b,a.c.a)}}
A.pq.prototype={
fd(a){var s,r,q,p,o,n,m,l,k,j,i
a.cl(0,0,a.gaR(),a.gao())
s=a.c
r=s.b
s=s.a
A.jm(a,0,r-1,s,null)
q=r-2
r=this.b.a
p=r.length-1
for(;;){if(!(p>=0&&q>=0))break
o=r.length
if(!(p>=0&&p<o))return A.c(r,p)
n=r[p]
m=n.b
l=n.c
if(l>1)m=m+" (x"+l+")"
switch(n.a.a){case 0:l=B.d
break
case 1:l=B.m
break
case 2:l=B.W
break
case 3:l=B.h
break
case 4:l=B.p
break
case 5:l=B.a3
break
default:l=null}k=p!==o-1?l.bk(B.z,0.5):l
j=A.dO(s,m)
i=j.length-1
for(;;){if(!(i>=0&&q>=0))break
if(!(i>=0&&i<j.length))return A.c(j,i)
a.k(0,q,j[i],k);--q;--i}--p}}}
A.q2.prototype={
ag(a){var s,r,q=this.a
if(q!=null){s=q.a
r=q.b
this.fd(new A.aT(new A.d(r.a,r.b),s.a,s.b,a))}}}
A.qy.prototype={
fd(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b,f=g.b.y,e=f.Q,d=e.a
A.bh(a,h,h,d,!1,h,h,h)
a.k(1,2,e.b.a+" "+e.c.a,B.d)
i.mc(f,a,4)
s=f.z
r=e.CW.a
r.toString
i.eq(a,7,"Health",s,B.m,B.e.L(Math.pow(r,1.458)+9),B.a0)
r=f.ch
s=e.cx.a
s.toString
i.eq(a,8,"Focus",r,B.F,A.jY(s),B.E)
s=f.CW
r=e.ay.a
r.toString
i.eq(a,9,"Fury",s,B.N,A.hN(r),B.ar)
a.k(1,10,"Food",B.j)
r=a.c
s=r.a
A.vy(a,10,10,s-11,f.ay,400,B.k,B.w)
i.m7(f,a,12)
i.m8(f,a,13)
i.mg(f,a,14)
a.k(1,16,"Exp",B.j)
q=A.Q(e.y,!1,h)
a.k(s-q.length-1,16,q,B.K)
a.k(1,17,"Gold",B.j)
p=A.Q(e.Q,!1,h)
a.k(s-1-p.length,17,p,B.h)
a.k(1,19,"@",g.gke())
a.k(3,19,d,B.C)
i.iI(a,20,f)
d=g.w
d===$&&A.b()
o=d.d
B.a.dj(o,new A.qC(f))
e=s-4
r=r.b-2
n=0
for(;;){if(!(n<10&&n<o.length))break
m=21+n*2
if(m>=r)break
if(!(n<o.length))return A.c(o,n)
l=o[n]
k=l.Q.b
if(g.gdJ()===l)k=new A.X(k.a,k.c,k.b)
j=l.Q.a.a
if(j.length>e)j=B.i.aJ(j,0,e)
a.an(1,m,k)
a.k(3,m,j,g.gdJ()===l?B.h:B.C)
i.iI(a,m+1,l);++n}},
mc(a,b,c){var s,r={}
r.a=1
r=new A.qA(r,b,c)
s=a.Q
r.$1(s.ay)
r.$1(s.ch)
r.$1(s.CW)
r.$1(s.cx)},
mg(a,b,c){var s,r=a.eQ(null),q=A.a(r.slice(0),A.M(r))
b.k(1,c,q.length>1?"Weapons":"Weapon",B.j)
r=A.M(q)
s=new A.aP(q,r.h("q(1)").a(new A.qB()),r.h("aP<1,q>")).aQ(0,"+")
b.k(b.c.a-s.length-1,c,s,B.N)},
m8(a,b,c){var s,r,q,p
for(s=a.ghl(),r=s.$ti,s=new A.ah(s.a(),r.h("ah<1>")),r=r.c,q=0;s.q();){p=s.b
q+=(p==null?r.a(p):p).a}this.iL(b,c,"Dodge",""+q+"%",B.a3)},
m7(a,b,c){var s,r,q,p,o,n,m
for(s=$.fy(),r=10,q=0;q<12;++q){p=s[q]
o=a.hI(p)
n=a.fe(p)
if((n.a>0?o+n.b:o)>0){m=$.uY().p(0,p)
m.toString
b.k(r,c,m,A.ea(p));++r}}this.iL(b,c,"Armor"," "+B.e.L(100-A.x_(a.Q.gdE())*100)+"%",B.p)},
eq(a,b,c,d,e,f,g){var s,r,q
a.k(1,b,c,B.j)
s=a.c.a-1
if(f!=null){r=B.c.t(f)
s-=r.length
a.k(s,b,r,g)
s-=3
a.k(s,b," / ",g)}q=J.ej(d)
a.k(s-q.length,b,q,e)},
iL(a,b,c,d,e){return this.eq(a,b,c,d,e,null,null)},
iI(a,b,c){var s,r,q,p,o,n,m,l={}
l.a=3
s=new A.qz(l,a,b)
r=c.f
if(r.a>0){q=r.b
A:{if(1===q){r=B.k
break A}if(2===q){r=B.h
break A}r=B.D
break A}s.$2("S",r)}r=c.e.a
if(r>0){B:{if(1===r){r=B.cU
break B}if(2===r){r=B.a3
break B}r=B.K
break B}s.$2("F",r)}if(c.r.a>0)s.$2("V",B.u)
for(r=$.fy(),p=0;p<12;++p){o=r[p]
if(c.fe(o).a>0){n=$.uY().p(0,o)
n.toString
s.$3(n,B.z,A.ea(o))}}r=c instanceof A.aa
if(r&&c.at instanceof A.cv)s.$2("!",B.H)
if(r&&c.at instanceof A.ch)s.$2("z",B.E)
n=c.w
if(n.a>0){m=n.b
C:{if(1===m){n=B.B
break C}if(2===m){n=B.p
break C}n=B.af
break C}s.$2("P",n)}if(c.c.a>0)s.$2("C",B.F)
if(c.b.a>0)s.$2("B",B.l)
if(c.d.a>0)s.$2("D",B.O)
if($.nx&&r)a.k(2,b,A.Q(B.e.L(c.ch*100),!1,3),B.u)
A.yx(a,10,b,a.c.a-11,c.z,c.gbq(),B.m,B.a0)}}
A.qC.prototype={
$2(a,b){var s,r=t.B
r.a(a)
r.a(b)
r=a.y
s=this.a.y
return B.c.ai(r.S(0,s).gaF(),b.y.S(0,s).gaF())},
$S:122}
A.qA.prototype={
$1(a){var s,r,q=this.b,p=this.a,o=this.c
q.k(p.a,o,B.i.aJ(a.gbb().c,0,3),B.j)
s=p.a
r=a.a
r.toString
q.k(s,o+1,A.Q(r,!1,2),B.d)
p.a=p.a+B.c.A(q.c.a-6,3)},
$S:123}
A.qB.prototype={
$1(a){return B.e.t(B.e.L(t.Z.a(a).gd_()*100)/100)},
$S:124}
A.qz.prototype={
$3(a,b,c){var s=this.a,r=s.a
if(r>8)return
this.b.cu(r,this.c,a,b,c);++s.a},
$2(a,b){return this.$3(a,b,null)},
$S:125}
A.qJ.prototype={
d3(a,b,c,d){var s=this.a.a
this.iK(a,b+s.a,c+s.b,d)},
iK(a,b,c,d){var s=this.r.a,r=this.w
a.an(b-s.a+r.a,c-s.b+r.b,d)},
aH(a){var s,r,q,p,o,n=this;++n.f
s=a instanceof A.f_
if(s){r=a.a
for(q=r.length,p=n.c,o=0;o<r.length;r.length===q||(0,A.o)(r),++o)A.AY(p,r[o])}q=n.c
p=q.length
B.a.hP(q,new A.qP(n))
return s||n.e||p!==0||q.length!==0||n.b.b.y.d.a>0},
fd(b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this
b5.nj(b6.c)
s=b5.d
B.a.aU(s)
b5.e=!1
r=b5.b
q=r.b
p=q.y
for(o=A.ab(b5.r),n=p.d,m=t.p0,l=t.dW,k=t.ev;o.q();){j=o.b
i=o.c
h=new A.d(j,i)
g=q.x
g===$&&A.b()
f=g.f
f.l(j,i)
e=f.a
f=i*f.b.b.a+j
if(!(f>=0&&f<e.length))return A.c(e,f)
f=e[f]
d=f.r
if(d){c=b5.nP(h,f)
b=c.a
a=c.b
a0=c.c
a1=g.r.p(0,h)
if(a1==null)a1=A.bI(B.J,null)
a2=a1.gaE(0)
if(!a2){a3=a1.gN(0)
if(!a3.q())A.a0(A.cG())
a4=a3.gH().a.b
b=a4.a
a=a4.b}}else{b=null
a=B.z
a0=B.z
a2=!1}if(!f.b&&f.d+f.e>f.c&&f.x!==0){e=f.w
if(e===$.b6()){e=$.m()
l.a(B.aN)
a5=B.aN.length
e=e.a
a6=e.a1(a5)
if(!(a6>=0&&a6<a5))return A.c(B.aN,a6)
b=B.aN[a6]
m.a(B.aQ)
a5=B.aQ.length
e=e.a1(a5)
if(!(e>=0&&e<a5))return A.c(B.aQ,e)
a7=B.aQ[e]
a=a7.a
a0=a7.b
b5.e=!0}else if(e===$.bB())a0=a0.bk(B.A,0.1+f.x/255*0.9)}e=g.w
e.l(j,i)
a6=e.a
e=i*e.b.b.a+j
if(!(e>=0&&e<a6.length))return A.c(a6,e)
e=a6[e]
if(e!=null)a8=!f.b&&f.d+f.e>f.c||h.Z(0,p.y)||$.u1||q.cF(e)
else a8=!1
if(a8){a9=e.geK()
if(a9 instanceof A.X){b=a9.a
a=a9.b}else{a=r.gke()
b=64}if(r.gdJ()===e){a0=a
a=B.t
d=!1}if(e instanceof A.aa)B.a.j(s,e)
a2=!1}a6=n.a
if(a6>0){b0=Math.min(90,a6*8)
a6=$.m()
a6=a6.a
if(a6.a1(100)<b0){b=a6.a1(100)<b0?b:42
k.a(B.aP)
a5=B.aP.length
a6=a6.a1(a5)
if(!(a6>=0&&a6<a5))return A.c(B.aP,a6)
a=B.aP[a6]}a2=!1
d=!1}a6=new A.qO()
b1=a6.$2(a,B.bE)
b2=a6.$2(a0,B.cR)
if(!f.b&&f.d+f.e>f.c)a6=a2||d
else a6=!1
if(a6){f=new A.qM(f)
if(a2)a=f.$2(a,b1)
if(d)a0=f.$2(a0,b2)}else{if(a2)a=b1
if(d)a0=b2}if($.u2){b3=(16-g.geF().iU(h))/16
b3*=b3
if(b3>0)a0=a0.bk(B.p,b3)}if($.nx&&e instanceof A.aa)a0=B.cN.bk(B.bD,e.ch)
if(b!=null){g=b5.r.a
f=b5.w
b6.an(j-g.a+f.a,i-g.b+f.b,new A.X(b,a,a0))}}for(s=b5.c,r=s.length,b4=0;b4<s.length;s.length===r||(0,A.o)(s),++b4)s[b4].bt(q,new A.qN(b5,b6))},
nP(a,b){var s,r,q,p=b.a.d
if(p instanceof A.X)return p
t.af.a(p)
s=p.length
r=A.x1(a.a,a.b)
q=B.c.ab(B.c.A(this.f,8)+r,s*2-2)
s=p.length
if(q>=s)q=s-(q-s)-1
this.e=!0
if(!(q>=0&&q<s))return A.c(p,q)
return p[q]},
nj(a){var s,r,q,p,o,n,m,l=this,k=l.b.b,j=l.r,i=j.gbR(),h=new A.qK(k,a),g=a.a,f=k.x
f===$&&A.b()
s=f.f.b.b.a
if(g>=s){r=B.e.A(Math.max(0,g-s),2)
i=0}else{j=j.b.a
if(j===0||j!==g)i=h.$0()
else{q=k.y.y.gm()-l.r.gbR()
if(q<8||q>g-8)i=h.$0()}r=0}j=l.r
p=j.gbW()
h=new A.qL(k,a)
s=a.b
o=f.f.b.b.b
if(s>=o){n=B.e.A(Math.max(0,s-o),2)
p=0}else{j=j.b.b
if(j===0||j!==s)p=h.$0()
else{m=k.y.y.gn()-l.r.gbW()
if(m<8||m>s-8)p=h.$0()}n=0}j=f.f.b.b
l.r=new A.Z(new A.d(i,p),new A.d(Math.min(g,j.a),Math.min(s,j.b)))
l.w=new A.d(r,n)}}
A.qP.prototype={
$1(a){return!t.ox.a(a).aH(this.a.b.b)},
$S:126}
A.qO.prototype={
$2(a,b){return new A.E(B.c.A(a.a*b.a,255),B.c.A(a.b*b.b,255),B.c.A(a.c*b.c,255))},
$S:21}
A.qM.prototype={
$2(a,b){var s=this.a,r=s.d-s.c
if(r<64)a=a.bk(b,A.w(r,0,64,0.5,0))
else if(r>128)a=a.aZ(0,B.u,A.w(r,128,255,0,0.2))
s=s.e
return s>0?a.aZ(0,B.bC,A.w(s,0,255,0.05,0.1)):a},
$S:21}
A.qN.prototype={
$3(a,b,c){this.a.iK(this.b,a,b,c)},
$S:47}
A.qK.prototype={
$0(){var s=this.a,r=s.y.y.gm(),q=this.b.a,p=B.c.A(q,2)
s=s.x
s===$&&A.b()
return B.c.P(r-p,0,s.f.b.b.a-q)},
$S:2}
A.qL.prototype={
$0(){var s=this.a,r=s.y.y.gn(),q=this.b.b,p=B.c.A(q,2)
s=s.x
s===$&&A.b()
return B.c.P(r-p,0,s.f.b.b.b-q)},
$S:2}
A.fM.prototype={
gf5(){return A.a([this.c],t.s)},
gcE(){return B.ch},
a5(a){if(a===B.G){this.a.a8()
return!0}return!1},
a9(a,b,c){if(c||b)return!1
switch(a){case 78:this.a.a8()
break
case 89:this.a.aN(this.d)
break}return!0}}
A.fU.prototype={
gaR(){return 38},
gao(){return 19},
gcE(){var s=t.N
return A.B(["OK","Return to town"],s,s)},
lw(a,b,c){var s,r,q,p,o,n,m=this.d
c.a=5
s=new A.o5(c,this)
r=m.y.Q
q=this.c
s.$3("Gold",B.h,r.Q-q.Q)
s.$3("Experience",B.p,r.y-q.y);++c.a
p=r.ay.a
p.toString
o=q.ay.a
o.toString
s.$3("Strength",B.F,p-o)
o=r.ch.a
o.toString
p=q.ch.a
p.toString
s.$3("Agility",B.F,o-p)
p=r.CW.a
p.toString
o=q.CW.a
o.toString
s.$3("Vitality",B.F,p-o)
o=r.cx.a
o.toString
p=q.cx.a
p.toString
s.$3("Intellect",B.F,o-p)
c.a+=3
n=r.ax.gjJ()-q.ax.gjJ()
m=m.x
m===$&&A.b()
m=m.b
q=A.M(m)
s.$4$total("Monsters",B.m,n,n+new A.ak(m,q.h("A(1)").a(new A.o6()),q.h("ak<1>")).gI(0))},
gbf(){return!0},
a5(a){var s
if(a!==B.a1)return!1
s=this.d
s.y.Q.spd(Math.max(this.c.as,s.w))
this.a.a8()
return!0},
bv(){var s,r,q
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q)if(s[q].bv())this.K()},
hQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
a.k(1,1,"You survived depth "+this.d.w+"!",B.d)
a.k(1,3,"You gained:",B.f)
a.k(1,13,"You slayed:",B.f)
for(s=this.e,r=s.length,q=a.c.a,p=q-1,q-=4,o=0;o<s.length;s.length===r||(0,A.o)(s),++o){n=s[o]
m=n.a
a.k(5,m,"................................",B.t)
a.k(5,m,n.b+" ",B.j)
l=B.c.t(n.f)
k=n.e
j=l.length
if(k!=null){i=B.c.t(k)
k=i.length
h=p-k
g=n.d
a.k(h,m,i,g)
a.k(h-3,m," / ",g)
a.k(q-k-j,m,l,g)}else{k=n.c===0?B.j:n.d
a.k(p-j,m,l,k)}}}}
A.o5.prototype={
$4$total(a,b,c,d){B.a.j(this.b.e,new A.ly(this.a.a++,a,c,b,d))},
$3(a,b,c){return this.$4$total(a,b,c,null)},
$S:128}
A.o6.prototype={
$1(a){return!(t.f0.a(a) instanceof A.ax)},
$S:129}
A.ly.prototype={
bv(){var s=this,r=s.f,q=s.c
if(r>=q)return!1
if(q>200){r+=$.m().pr(0,q/200)
s.f=r
if(r>q)s.f=q}else s.f=r+1
return!0}}
A.fX.prototype={
gf5(){if(this.c)return B.hD
return B.hJ},
gcE(){return B.ch},
a5(a){if(a===B.G){this.a.aN(!1)
return!0}return!1},
a9(a,b,c){if(c||b)return!1
switch(a){case 78:this.a.aN(!1)
break
case 89:this.a.aN(!0)
break}return!0},
bv(){return!1}}
A.kI.prototype={
gbf(){return!0},
gaR(){return null},
gao(){return null},
gf5(){return null},
ag(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
A.bt(a,g.gcE(),null)
s=g.gf5()
r=s!=null
if(r){q=B.a.az(s,0,new A.q4(),t.S)
p=s.length}else{q=0
p=0}o=g.gaR()
if(o==null)o=q+2
n=g.gao()
if(n==null)n=p+2
m=a.e.a.b.b
l=B.c.A(m.b-n,3)
k=B.c.A(m.a-o,2)
A.cB(a,k-1,l-1,o+2,n+2,B.h,"\u2554","\u2550","\u2557","\u2551","\u255a","\u2550","\u255d")
a=new A.aT(new A.d(o,n),k,l,a)
a.cl(0,0,a.gaR(),a.gao())
if(r){j=B.c.A(o-B.a.az(s,0,new A.q5(),t.S),2)
for(r=s.length,i=1,h=0;h<s.length;s.length===r||(0,A.o)(s),++h){a.k(j,i,s[h],B.d);++i}}g.hQ(a)},
hQ(a){}}
A.q4.prototype={
$2(a,b){return Math.max(A.u(a),A.a2(b).length)},
$S:18}
A.q5.prototype={
$2(a,b){return Math.max(A.u(a),A.a2(b).length)},
$S:18}
A.hF.prototype={
gaR(){return 42},
gao(){return 25},
gf5(){return B.hL},
gcE(){return B.i6},
a5(a){var s=this
switch(a){case B.a8:s.em(s.e-1)
return!0
case B.ab:s.em(s.e+1)
return!0
case B.X:s.em(s.e-10)
return!0
case B.Y:s.em(s.e+10)
return!0
case B.a1:s.a.aN(s.e)
return!0
case B.G:s.a.a8()
return!0}return!1},
hQ(a){var s,r,q,p,o,n
for(s=1;s<=100;++s){r=s-1
q=B.c.ab(r,10)
p=B.c.A(r,10)*2
if(s===this.e){r=q*4
o=p+5
a.an(r,o,new A.X(9658,B.h,B.z))
a.an(r+4,o,new A.X(9668,B.h,B.z))
n=B.h}else n=B.C
a.k(q*4+1,p+5,A.Q(s,!1,3),n)}},
em(a){if(a<1)return
if(a>100)return
this.e=a
this.K()}}
A.ac.prototype={}
A.hD.prototype={
gbf(){return!0},
j2(a){var s=this,r=s.d,q=s.c,p=q.length
do r=B.c.ab(r+a+p,p)
while(q[r].c==null)
s.d=r
s.K()},
a5(a){var s,r,q=this,p=$.mN
if(p>=65&&p<=90)return!1
A:{if(B.X===a){q.j2(-1)
break A}if(B.Y===a){q.j2(1)
break A}if(B.a1===a||B.ab===a){p=q.a
p.toString
s=q.c
r=q.d
if(!(r>=0&&r<s.length))return A.c(s,r)
p.aN(s[r].c)
break A}if(B.G===a||B.a8===a){q.a.a8()
break A}return!1}return!0},
a9(a,b,c){var s,r,q,p,o,n=this
if(b||a===16)return!1
if(96===a||110===a){n.a.a8()
return!0}if(107===a){s=n.a
s.toString
r=n.c
q=n.d
if(!(q>=0&&q<r.length))return A.c(r,q)
s.aN(r[q].c)
return!0}for(s=n.c,r=s.length,p=0;p<r;++p){o=s[p]
q=o.c
if(q!=null&&o.d===a&&o.e===c){n.a.aN(q)
return!0}}return!1},
ag(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.c,d=t.S,c=B.a.az(e,0,new A.qv(),d),b=A.a([],t.s)
for(s=e.length,r=0;r<e.length;e.length===s||(0,A.o)(e),++r){q=e[r]
p=q.b
b.push(q.c==null?p:B.i.f9(q.a,c)+" "+p)}s=f.b
o=B.a.az(b,s.length+2,new A.qw(),d)
d=a.e.a.b.b
p=d.b
n=Math.min(b.length,p-2)
m=f.d
l=f.e
if(m<l){f.e=m
l=m}if(m>=l+n)f.e=m-n+1
k=Math.max(0,B.c.A(d.a-o-2,2))
j=Math.max(0,B.c.A(p-n-2,3))
A.bh(a,null,n+2,s,!0,o+2,k,j)
for(d=k+1,s=j+1,i=0;i<n;++i){h=i+f.e
if(!(h>=0&&h<e.length))return A.c(e,h)
if(e[h].c==null)g=B.f
else g=h===f.d?B.h:B.C
if(!(h<b.length))return A.c(b,h)
p=B.i.f9(b[h],o)
m=h===f.d?B.t:null
a.cu(d,s+i,p,g,m)}}}
A.qu.prototype={
$1(a){return t.m7.a(a).c!=null},
$S:130}
A.qv.prototype={
$2(a,b){return Math.max(A.u(a),t.m7.a(b).a.length)},
$S:131}
A.qw.prototype={
$2(a,b){return Math.max(A.u(a),A.a2(b).length)},
$S:18}
A.qX.prototype={
ad(a,b){B.a.hP(this.b,new A.r6(b))
this.bi()},
pp(a){var s=this.b
B.a.i(s,B.a.hA(s,new A.r7(a)),a)
this.bi()},
n_(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=v.G
if(A.a2(A.P(A.P(c5.window).location).search)==="?clear"){c4.bi()
return}a9=A.tc(A.P(A.P(c5.window).localStorage).getItem("heroes"))
if(a9==null)return
c5=t.ea
for(b0=t.d,b1=J.aq(b0.a(c5.a(B.aZ.oH(a9)).p(0,"heroes"))),b2=c4.b,b3=t.dZ,b4=t.c3,b5=t.C,b6=t.U;b1.q();){s=b1.gH()
try{r=c5.a(s)
q=A.a2(J.aZ(r,"name"))
p=A.a2(s.p(0,"race"))
o=B.a.eX($.fz(),new A.r3(p))
n=null
if(J.aZ(r,"class")==null)n=$.eh()[0]
else{m=A.a2(J.aZ(r,"class"))
n=B.a.eX($.eh(),new A.r4(m))}l=J.aA(J.aZ(r,"death"),"permanent")
k=c4.dv(b0.a(J.aZ(r,"inventory")))
j=A.bI(B.v,k)
i=new A.eA(A.ao(9,null,!1,b6))
for(b7=c4.dv(b0.a(J.aZ(r,"equipment"))),b8=b7.length,b9=0;b9<b7.length;b7.length===b8||(0,A.o)(b7),++b9){h=b7[b9]
i.k0(h)}g=c4.dv(b0.a(J.aZ(r,"home")))
f=A.bI(B.c6,g)
e=c4.dv(b0.a(J.aZ(r,"crucible")))
d=A.bI(B.c5,e)
c=A.C(b4,b5)
if(r.aj("shops")){b=c5.a(J.aZ(r,"shops"))
$.hI.ae(0,new A.r5(c4,b,c))}j.bn()
f.bn()
d.bn()
a=A.u(J.aZ(r,"experience"))
a0=c4.n3(b3.a(J.aZ(r,"skills")))
a1=c4.n1(J.aZ(r,"log"))
a2=c4.n2(c5.a(J.aZ(r,"lore")))
a3=A.u(J.aZ(r,"gold"))
c0=A.wz(J.aZ(r,"maxDepth"))
a4=c0==null?0:c0
a5=c5.a(J.aZ(r,"stats"))
b7=n
b8=A.u(J.aZ(a5,"strength"))
c1=A.u(J.aZ(a5,"agility"))
c2=A.u(J.aZ(a5,"vitality"))
a6=A.vI(q,o,b7,l,j,i,f,d,c,a,a0,a1,a2,a3,a4,c1,A.u(J.aZ(a5,"intellect")),b8,c2)
B.a.j(b2,a6)}catch(c3){a7=A.ds(c3)
a8=A.ec(c3)
A.tE("Could not load hero. Data:")
A.tE(B.aZ.k_(s))
A.tE("Error:\n"+A.J(a7)+"\n"+A.J(a8))}}},
dv(a){var s,r,q,p=A.a([],t.I)
for(s=J.aq(a),r=t.ea;s.q();){q=this.n0(r.a(s.gH()))
if(q!=null)B.a.j(p,q)}return p},
n0(a){var s,r,q
t.ea.a(a)
s=A.a2(a.p(0,"type"))
r=$.bk().c9(s)
if(r==null){A.uI("Couldn't find item type \""+A.J(a.p(0,"type"))+'", discarding item.')
return null}q=a.aj("count")?A.u(a.p(0,"count")):1
return new A.K(r,this.fV(a.p(0,"prefix")),this.fV(a.p(0,"suffix")),this.fV(a.p(0,"intrinsic")),q)},
fV(a){var s,r,q,p,o,n,m,l="parameter"
A:{s=null
r=!1
q=null
p=!1
if(t.av.b(a)){o=a.p(0,"id")
if(o==null)n=a.aj("id")
else n=!0
if(n){r=typeof o=="string"
if(r){s=a.p(0,l)
if(s==null)n=a.aj(l)
else n=!0
if(n)p=A.fr(s)
q=o}}}if(p){m=A.u(r?s:a.p(0,l))
p=new A.ce(A.vl(A.a2(q)),m)
break A}p=null
break A}return p},
n3(a){var s,r,q,p,o,n
t.dZ.a(a)
s=t.M
r=t.S
q=A.C(s,r)
if(a!=null)for(p=a.gb3(),p=p.gN(p);p.q();){o=p.gH()
n=$.uZ().p(0,o)
if(n==null)A.a0(A.aE("Unknown skill '"+o+"'.",null))
q.i(0,n,A.u(a.p(0,o)))}return new A.hJ(q,A.C(s,r))},
n1(a){var s,r,q,p=A.a([],t.kU)
if(t.d.b(a))for(s=J.aq(a),r=t.ea;s.q();){q=r.a(s.gH())
B.a.j(p,new A.hi(B.a.eX(B.hI,new A.qY(q)),A.a2(q.p(0,"text")),A.u(q.p(0,"count"))))}return new A.kd(p)},
n2(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=t.dZ
d.a(a)
s=t.P
r=t.S
q=A.C(s,r)
p=A.C(s,r)
s=t.q
o=A.C(s,r)
n=A.C(t.R,r)
m=A.b9(s)
l=A.C(s,r)
k=d.a(a.p(0,"seen"))
if(k!=null)k.ae(0,new A.qZ(e,q))
j=d.a(a.p(0,"slain"))
if(j!=null)j.ae(0,new A.r_(e,p))
i=d.a(a.p(0,"foundItems"))
if(i!=null)i.ae(0,new A.r0(e,o))
h=d.a(a.p(0,"foundAffixes"))
if(h!=null)h.ae(0,new A.r1(e,n))
g=d.a(a.p(0,"usedItems"))
if(g!=null)g.ae(0,new A.r2(e,l))
f=t.lH.a(a.p(0,"createdArtifacts"))
if(f!=null)for(d=J.aq(f);d.q();){s=A.a2(d.gH())
s=$.bk().c9(s)
s.toString
m.j(0,s)}return new A.hg(q,p,o,n,m,l)},
bi(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=A.a([],t.ic)
for(s=a3.b,r=s.length,q=t.N,p=t.K,o=t.S,n=t.d,m=0;m<s.length;s.length===r||(0,A.o)(s),++m){l=s[m]
k=A.B(["strength",l.ay.b,"agility",l.ch.b,"vitality",l.CW.b,"intellect",l.cx.b],q,o)
j=l.d?"permanent":"dungeon"
i=a3.dA(l.e)
h=a3.dA(l.f)
g=a3.dA(l.r)
f=a3.dA(l.w)
e=A.C(q,n)
for(d=l.x,d=new A.dN(d,d.r,d.e,A.z(d).h("dN<1,2>"));d.q();){c=d.d
e.i(0,c.a.b,a3.dA(c.b))}d=l.y
c=A.C(q,o)
for(b=l.z.a,a=new A.c3(b,b.r,b.e,A.z(b).h("c3<1>"));a.q();){a0=a.d
a1=a0.gM()
a0=b.p(0,a0)
c.i(0,a1,a0==null?0:a0)}a4.push(A.B(["name",l.a,"race",l.b.a,"stats",k,"class",l.c.a,"death",j,"inventory",i,"equipment",h,"home",g,"crucible",f,"shops",e,"experience",d,"skills",c,"log",a3.nz(l.at),"lore",a3.nA(l.ax),"gold",l.Q,"maxDepth",l.as],q,p))}a2=B.aZ.k_(A.B(["heroes",a4],q,t.ew))
A.P(A.P(v.G.window).localStorage).setItem("heroes",a2)
A.uI("Saved.")},
nz(a){var s,r,q,p,o,n,m=[]
for(s=a.a,r=s.length,q=t.N,p=t.oH,o=0;o<s.length;s.length===r||(0,A.o)(s),++o){n=s[o]
m.push(A.B(["type",n.a.b,"text",n.b,"count",n.c],q,p))}return m},
nA(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=t.oH,g=A.C(i,h),f=A.C(i,h),e=A.C(i,h),d=A.C(i,h),c=A.C(i,h),b=[]
for(s=$.cc().gc0(),r=A.z(s),s=new A.bn(J.aq(s.a),s.b,r.h("bn<1,2>")),q=a.b,p=a.a,r=r.y[1];s.q();){o=s.a
if(o==null)o=r.a(o)
n=p.p(0,o)
if(n==null)n=0
if(n!==0)g.i(0,o.a.a,n)
n=q.p(0,o)
if(n==null)n=0
if(n!==0)f.i(0,o.a.a,n)}for(s=$.bk().gc0(),r=A.z(s),s=new A.bn(J.aq(s.a),s.b,r.h("bn<1,2>")),q=a.f,p=a.c,r=r.y[1];s.q();){o=s.a
if(o==null)o=r.a(o)
m=p.p(0,o)
if(m==null)m=0
if(m!==0)e.i(0,o.a.a7(1).a,m)
l=q.p(0,o)
if(l==null)l=0
if(l!==0)c.i(0,o.a.a7(1).a,l)}s=A.a6($.dt().gc0(),t.R)
B.a.U(s,$.du().gc0())
r=s.length
q=a.d
k=0
for(;k<s.length;s.length===r||(0,A.o)(s),++k){j=s[k]
m=q.p(0,j)
if(m==null)m=0
if(m!==0)d.i(0,j.a,m)}for(s=$.bk().gc0(),r=A.z(s),s=new A.bn(J.aq(s.a),s.b,r.h("bn<1,2>")),r=r.y[1],q=a.e;s.q();){p=s.a
if(p==null)p=r.a(p)
if(p.dx&&q.G(0,p))b.push(p.a.a7(1).a)}return A.B(["seen",g,"slain",f,"foundItems",e,"foundAffixes",d,"usedItems",c,"createdArtifacts",b],i,h)},
dA(a){var s,r,q,p,o,n,m,l,k,j
t.D.a(a)
s=[]
for(r=a.gN(a),q=t.N,p=t.K,o=t.oH;r.q();){n=r.gH()
m=A.C(q,p)
m.i(0,"type",n.a.a.a7(1).a)
m.i(0,"count",n.f)
l=n.b
if(l!=null)m.i(0,"prefix",A.B(["id",l.a.a,"parameter",l.b],q,o))
k=n.c
if(k!=null)m.i(0,"suffix",A.B(["id",k.a.a,"parameter",k.b],q,o))
j=n.d
if(j!=null)m.i(0,"intrinsic",A.B(["id",j.a.a,"parameter",j.b],q,o))
s.push(m)}return s}}
A.r6.prototype={
$1(a){return t.er.a(a).a===this.a.a},
$S:24}
A.r7.prototype={
$1(a){return t.er.a(a).a===this.a.a},
$S:24}
A.r3.prototype={
$1(a){return t.ho.a(a).a===this.a},
$S:30}
A.r4.prototype={
$1(a){return t.lJ.a(a).a===this.a},
$S:132}
A.r5.prototype={
$2(a,b){var s,r
A.a2(a)
t.c3.a(b)
s=t.lH.a(this.b.p(0,a))
r=this.c
if(s!=null)r.i(0,b,A.bI(new A.c1(b.b,26),t.D.a(this.a.dv(s))))
else{A.uI("No data for "+a+", so regenerating.")
r.i(0,b,b.oF())}},
$S:133}
A.qY.prototype={
$1(a){return t.aI.a(a).b===A.a2(this.a.p(0,"type"))},
$S:134}
A.qZ.prototype={
$2(a,b){var s
A.a2(a)
s=$.cc().c9(a)
if(s!=null)this.b.i(0,s,A.u(b))},
$S:14}
A.r_.prototype={
$2(a,b){var s
A.a2(a)
s=$.cc().c9(a)
if(s!=null)this.b.i(0,s,A.u(b))},
$S:14}
A.r0.prototype={
$2(a,b){var s
A.a2(a)
s=$.bk().c9(a)
if(s!=null)this.b.i(0,s,A.u(b))},
$S:14}
A.r1.prototype={
$2(a,b){this.b.i(0,A.vl(A.a2(a)),A.u(b))},
$S:14}
A.r2.prototype={
$2(a,b){var s
A.a2(a)
s=$.bk().c9(a)
if(s!=null)this.b.i(0,s,A.u(b))},
$S:14}
A.nO.prototype={
$2(a,b){var s,r
A.a2(a)
A.a2(b)
s=this.a
r=s.a
if(r>0)r=s.a=r+2
s.a=r+(a.length+b.length+3)},
$S:49}
A.nP.prototype={
$2(a,b){var s,r,q,p
A.a2(a)
A.a2(b)
s=this.a
if(!s.c){r=this.b
r.k(s.b,r.e.a.b.b.b-1,", ",B.d)
s.b+=2}r=this.b
q=r.e.a.b.b.b-1
r.k(s.b,q,"[",B.l)
r.k(++s.b,q,a,B.h)
p=s.b+a.length
s.b=p
r.k(p,q,"] ",B.l)
r.k(s.b+=2,q,b,B.C)
s.b=s.b+b.length
s.c=!1},
$S:49}
A.la.prototype={
gck(){var s,r,q=this,p=t.N
p=A.C(p,p)
p.i(0,"\u2195","Select row")
s=q.e
r=s.length
if(r!==0)p.i(0,"S","Sort by "+s[B.c.ab(q.z+1,r)].a)
s=q.f
r=s.length
if(r!==0)p.i(0,"F","Show "+s[B.c.ab(q.Q+1,r)].a)
return p},
a5(a){var s=this
switch(a){case B.X:s.eG(-1)
return!0
case B.Y:s.eG(1)
return!0
case B.ao:s.eG(-(s.w-1))
return!0
case B.ap:s.eG(s.w-1)
return!0}return!1},
a9(a,b,c){var s,r,q,p,o=this
if(b)return!1
s=83===a
if(s&&!c&&o.e.length!==0){o.z=B.c.ab(o.z+1,o.e.length)
o.dz()
return!0}if(s&&c&&o.e.length!==0){r=o.z
q=o.e.length
o.z=B.c.ab(r+q-1,q)
o.dz()
return!0}p=70===a
if(p&&!c&&o.f.length!==0){o.Q=B.c.ab(o.Q+1,o.f.length)
o.dz()
return!0}if(p&&c&&o.f.length!==0){r=o.Q
q=o.f.length
o.Q=B.c.ab(r+q-1,q)
o.dz()
return!0}return!1},
kM(a,b){this.$ti.h("k<ar<1>>()").a(a)
this.jc(new A.rf(this,t.b8.a(b),a))},
kL(a){return this.kM(a,null)},
hp(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a2.c
if(!a1.Z(0,a0.r))a0.nv(a1)
for(s=a0.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
o=p.e
n=p.a
m=p.b.kv(p.f,n.length)
l=p.d
if(l==null)l=B.f
a2.k(o+m,0,n,l)}r=A.a([],t.s)
o=a0.e
n=o.length
if(n!==0){m=a0.z
if(!(m>=0&&m<n))return A.c(o,m)
r.push("ordered by "+o[m].a)}o=a0.f
n=o.length
if(n!==0){m=a0.Q
if(!(m>=0&&m<n))return A.c(o,m)
r.push("show "+o[m].a)}if(r.length!==0){k="("+B.a.aQ(r,", ")+")"
a2.k(B.a.gaw(s).e+B.a.gaw(s).f-k.length,0,k,B.l)}a0.iJ(a2,1,B.l)
for(r=a0.d,o=!r,n=a0.c,j=0;m=a0.w,j<m;++j){i=j*2+2
h=a0.x+j
m=n.length
if(h>=m)continue
if(!(h>=0))return A.c(n,h)
g=n[h]
f=g.a
if(f!=null)a2.an(0,i,f)
if(h===a0.y)a2.k(1,i,"\u25ba",B.h)
for(m=g.c,e=0;e<m.length;++e){d=m[e]
if(!(e<s.length))return A.c(s,e)
l=s[e]
A:{c=a0.y
if(h===c){c=B.h
break A}if(!d.b){c=B.j
break A}if(e===0){c=B.C
break A}c=B.d
break A}b=l.e
A.un(a2,d.a,l.b,c,l.f,b,i)}a=o&&h===n.length-1?B.l:B.t
a0.iJ(a2,i+1,a)}if(r){s=n.length
A.vx(a2,m*2-1,a0.x,s,m,a1.a-1,2)}},
nv(a){var s,r,q,p,o,n,m,l,k,j=this
for(s=j.a,r=s.length,q=null,p=0,o=0;o<r;++o){n=s[o]
m=n.c
if(m===0)q=n
else{n.f=m
p+=m}}p=p+(r-1)+2
if(j.d)p+=2
if(q!=null)q.f=a.a-p
for(l=2,k=0;k<r;++k){if(k>0)++l
m=s[k]
m.e=l
l+=m.f}j.w=B.c.A(a.b-2,2)
j.r=a
j.fU()},
dz(){this.jc(new A.re(this))},
eG(a){var s=this
s.y=B.c.P(s.y+a,0,s.c.length-1)
s.fU()},
jc(a){var s,r,q,p,o,n=this
t.O.a(a)
s=n.y
r=n.c
q=r.length
if(s<q){if(!(s>=0))return A.c(r,s)
p=r[s].b}else p=null
a.$0()
n.y=0
s=r.length
if(0<s)for(o=0;o<s;++o)if(r[o].b==p){n.y=o
break}n.fU()},
fU(){var s,r=this,q=r.c,p=q.length
if(p!==0&&r.w>0){p=r.y=B.c.P(r.y,0,p-1)
p=B.c.P(r.x,p-r.w+1,p)
r.x=p
q=q.length
s=r.w
if(q>s)r.x=B.c.P(p,0,q-s)
else r.x=0}else r.x=r.y=0},
iJ(a,b,c){var s,r,q,p,o
for(s=this.a,r=s.length,q=2,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
a.k(q,b,B.i.aI("\u2500",o.f),c)
q+=o.f+1}}}
A.rf.prototype={
$0(){var s,r,q=this,p=q.b
if(p!=null){s=q.a
r=s.a
B.a.aU(r)
B.a.U(r,p)
s.r=B.ak}p=q.a
s=p.b
B.a.aU(s)
B.a.U(s,q.c.$0())
p.dz()},
$S:0}
A.re.prototype={
$0(){var s,r,q,p=this.a
if(p.e.length!==0)B.a.dj(p.b,new A.rc(p))
s=p.c
B.a.aU(s)
r=p.b
if(p.f.length!==0){q=A.M(r)
B.a.U(s,new A.ak(r,q.h("A(1)").a(new A.rd(p)),q.h("ak<1>")))}else B.a.U(s,r)},
$S:0}
A.rc.prototype={
$2(a,b){var s,r,q,p=this.a,o=p.$ti,n=o.h("ar<1>")
n.a(a)
n.a(b)
n=p.e
p=p.z
if(!(p>=0&&p<n.length))return A.c(n,p)
p=o.h("D<e(1,1)>").a(n[p].b)
n=p.length
o=a.b
s=b.b
r=0
for(;r<p.length;p.length===n||(0,A.o)(p),++r){q=p[r].$2(o,s)
if(q!==0)return q}return 0},
$S(){return this.a.$ti.h("e(ar<1>,ar<1>)")}}
A.rd.prototype={
$1(a){var s,r=this.a,q=r.$ti
q.h("ar<1>").a(a)
s=r.f
r=r.Q
if(!(r>=0&&r<s.length))return A.c(s,r)
return q.h("A(1)").a(s[r].b).$1(a.b)},
$S(){return this.a.$ti.h("A(ar<1>)")}}
A.iM.prototype={
aK(){return"Align."+this.b},
kv(a,b){var s
switch(this.a){case 0:s=0
break
case 1:s=B.c.A(a-b,2)
break
case 2:s=a-b
break
default:s=null}return s}}
A.aM.prototype={}
A.ar.prototype={}
A.a9.prototype={}
A.N.prototype={}
A.rj.prototype={
$2(a,b){return A.u(a)+t.fc.a(b).a.length},
$S:137}
A.bw.prototype={}
A.c5.prototype={}
A.hX.prototype={
gbf(){return!0},
a5(a){if(a===B.G){this.a.a8()
return!0}return!1},
a9(a,b,c){var s,r,q,p,o,n
if(c||b)return!1
for(s=this.b,r=s.length,q=0;q<r;++q){p=s[q].a
o=p[1]
n=p[3]
if(o===a){n.$0()
this.K()
return!0}}return!1},
cX(a,b){t.eE.a(a)
this.d=!0},
ag(a){var s,r,q,p,o,n,m,l,k=this,j=null
for(s=k.b,r=s.length,q=0,p=0;p<r;++p)q=Math.max(q,s[p].a[2].length)
A.bh(a,j,r+2,"Wizard Menu",k.d,40,j,j)
for(r=s.length,o=0,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){n=s[p].a
m=n[0]
l=n[2];++o
a.k(1,o,m,k.d?B.h:B.j)
a.k(2,o,")",k.d?B.l:B.j)
a.k(4,o,l,k.d?B.C:B.j)}if(k.d){s=t.N
A.bt(a,A.B(["`","Exit"],s,s),j)}},
n9(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.c,b=c.x
b===$&&A.b()
for(s=b.f,r=s.b,q=A.ab(r),p=s.a,o=r.b.a,n=p.length;q.q();){m=q.b
l=q.c
s.l(m,l)
k=l*o+m
if(!(k>=0&&k<n))return A.c(p,k)
j=p[k]
i=$.U()
if((j.a.e.a&i.a)!==0){s.l(m,l)
j.fk(!0)
continue}for(j=new A.d(m,l).gbB(),i=j.length,h=0;h<i;++h){g=j[h]
if(r.G(0,g)){f=g.a
e=g.b
s.l(f,e)
f=e*o+f
if(!(f>=0&&f<n))return A.c(p,f)
f=p[f]
e=$.U()
e=(f.a.e.a&e.a)!==0
f=e}else f=!1
if(f){s.l(m,l)
p[k].fk(!0)
break}}}for(s=b.b,r=s.length,c=c.y,q=c.Q.ax,c=c.as,h=0;h<s.length;s.length===r||(0,A.o)(s),++h){d=s[h]
if(d instanceof A.aa)if(c.j(0,d))q.i5(d.Q)}b.f_(new A.rw(this))},
mL(){var s,r,q,p,o,n,m,l,k,j=this.c.x
j===$&&A.b()
for(s=j.f,r=s.b,q=A.ab(r),p=s.a,r=r.b.a,o=p.length;q.q();){n=q.b
m=q.c
s.l(n,m)
l=m*r+n
if(!(l>=0&&l<o))return A.c(p,l)
l=p[l]
k=$.U()
if((l.a.e.a&k.a)!==0){s.l(n,m)
l.f=B.c.P(l.f+255,0,192)}}j=j.gav()
j.f=!0
j.cJ()},
mi(){this.d=!1
this.a.a2(new A.mH(this.c))},
o9(){this.d=!1
this.a.a2(new A.mI(this.c))},
mC(){var s=this.c.y,r=s.Q,q=1e4+B.c.A(r.y,4)
s.i4(q)
s.bs()
r.at.dM("Gave the hero "+A.Q(q,!1,null)+" experience.")},
mW(){var s,r,q,p,o,n,m=this.c.x
m===$&&A.b()
s=m.b
s=A.a(s.slice(0),A.M(s))
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
if(!(p instanceof A.aa))continue
o=p.y
n=p.Q
m.e0(o,n.Q,n.c)
m.kP(p)}},
lX(){var s,r,q,p=A.a([],t.b9),o=this.c.x
o===$&&A.b()
o.f_(new A.rv(p))
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.o)(p),++r){q=p[r]
o.e3(q.b,q.a)}},
n7(){var s,r=this.c,q=r.x
q===$&&A.b()
r=r.y
s=r.y
q.f.B(s.gm(),s.gn()).a=$.v9()
r.Q.at.dM("Placed stairs under hero.")},
nU(){var s=!$.u1
$.u1=s
this.c.y.Q.at.dM("Show all monsters = "+s)
this.a.a8()},
nS(){var s=!$.nx
$.nx=s
this.c.y.Q.at.dM("Show monster alertness = "+s)
this.a.a8()},
nW(){var s=!$.u2
$.u2=s
this.c.y.Q.at.dM("Show hero volume = "+s)
this.a.a8()}}
A.rw.prototype={
$2(a,b){this.a.c.y.Q.ax.d7(a)},
$S:16}
A.rv.prototype={
$2(a,b){B.a.j(this.a,new A.O(b,a))},
$S:16}
A.cr.prototype={
gbf(){return!0},
a5(a){if(a===B.G){this.a.a8()
return!0}return!1},
a9(a,b,c){var s,r,q,p,o=this
if(b)return!1
switch(a){case 13:for(s=o.gex(),r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q)o.hc(s[q])
o.a.a8()
return!0
case 8:s=o.c
r=s.length
if(r!==0){o.c=B.i.aJ(s,0,r-1)
o.K()}return!0
case 32:o.c+=" "
o.K()
return!0
default:if(a>=65&&a<=90){o.c=o.c+A.ra(A.a([a],t.t)).toLowerCase()
o.K()
return!0}else if(a>=48&&a<=57){p=a-48
if(p<o.gex().length){s=o.gex()
if(!(p>=0&&p<s.length))return A.c(s,p)
o.hc(s[p])
o.a.a8()
return!0}}}return!1},
ag(a){var s,r,q,p,o,n,m=this,l=null,k=new A.aT(new A.d(43,38),40,0,a)
A.bh(k,l,l,m.gey(),!0,l,l,l)
k.k(m.gey().length+4,0,m.c,B.h)
k.cu(m.gey().length+4+m.c.length,0," ",B.h,B.h)
for(s=m.gex(),r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
if(!B.i.G(m.eu(o).toLowerCase(),m.c.toLowerCase()))continue
if(q<10){n=q+1
k.k(1,n,B.c.t(q),B.h)
k.k(2,n,")",B.j)}++q
k.an(3,q,m.iW(o))
k.k(5,q,m.eu(o),B.C)
if(q>=36)break}s=t.N
A.bt(a,A.B(["0-9","Select","Enter","Select all","`","Exit"],s,s),l)},
gex(){var s=this.git(),r=A.z(s),q=r.h("ak<k.E>")
s=A.a6(new A.ak(s,r.h("A(k.E)").a(new A.t1(this)),q),q.h("k.E"))
return s}}
A.t1.prototype={
$1(a){var s=this.a
return B.i.G(s.eu(A.z(s).h("cr.T").a(a)).toLowerCase(),s.c.toLowerCase())},
$S(){return A.z(this.a).h("A(cr.T)")}}
A.mH.prototype={
gey(){return"Drop what?"},
git(){return $.bk().gc0()},
eu(a){return t.q.a(a).a.a7(1).a},
iW(a){return t.q.a(a).b},
hc(a){var s
t.q.a(a)
if(a.dx)this.b.y.Q.ax.e.j(0,a)
s=this.b
A.a7(a.a.a7(1).a,null,null).b1(s.y.Q.ax,s.w,new A.t7(this))}}
A.t7.prototype={
$1(a){var s=this.a.b,r=s.x
r===$&&A.b()
s=s.y
r.cY(a,s.y)
s.Q.at.jU("Dropped {1}.",a)},
$S:6}
A.mI.prototype={
gey(){return"Spawn what?"},
git(){return $.cc().gc0()},
eu(a){return t.P.a(a).a.a},
iW(a){return t.P.a(a).b},
hc(a){var s,r,q
t.P.a(a)
s=this.b
r=s.x
r===$&&A.b()
q=A.cm(r,s.y.y,$.aY(),null,null,null).jM(new A.t8(this))
if(q==null)return
r.dD(a.ig(q))}}
A.t8.prototype={
$1(a){return a.S(0,this.a.b.y.y).bh(0,6)},
$S:1}
A.nM.prototype={
i7(a,b,c){var s,r
if(a<0)return
s=this.a
r=s.b.b
if(a>=r.a)return
if(b<0)return
if(b>=r.b)return
r=this.b
if(!s.B(a,b).Z(0,c))r.aY(a,b,c)
else r.aY(a,b,null)},
ag(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t.a.a(a)
for(s=this.a,r=s.b.b,q=r.b,r=r.a,p=s.$ti.c,o=s.a,n=this.b,m=n.$ti.c,l=n.a,k=n.b.b.a,j=l.length,i=0;i<q;++i)for(h=i*r,g=i*k,f=0;f<r;++f){n.l(f,i)
e=g+f
if(!(e>=0&&e<j))return A.c(l,e)
d=l[e]
if(d==null)continue
a.$3(f,i,d)
p.a(d)
s.l(f,i)
B.a.i(o,h+f,d)
m.a(null)
n.l(f,i)
B.a.i(l,e,null)}}}
A.E.prototype={
ga0(a){return B.c.ga0(this.a)^B.c.ga0(this.b)^B.c.ga0(this.c)},
Z(a,b){if(b==null)return!1
return b instanceof A.E&&this.a===b.a&&this.b===b.b&&this.c===b.c},
aZ(a,b,c){return new A.E(B.e.L(B.e.P(this.a+b.a*c,0,255)),B.e.L(B.e.P(this.b+b.b*c,0,255)),B.e.L(B.e.P(this.c+b.c*c,0,255)))},
bk(a,b){var s=1-b
return new A.E(B.e.L(this.a*s+a.a*b),B.e.L(this.b*s+a.b*b),B.e.L(this.c*s+a.c*b))}}
A.X.prototype={
ga0(a){return B.c.ga0(this.a)^this.b.ga0(0)^this.c.ga0(0)},
Z(a,b){if(b==null)return!1
if(b instanceof A.X)return this.a===b.a&&this.b.Z(0,b.b)&&this.c.Z(0,b.c)
return!1}}
A.k8.prototype={}
A.y.prototype={
Z(a,b){if(b==null)return!1
return b instanceof A.y&&this.a===b.a&&this.b===b.b&&this.c===b.c},
ga0(a){return(B.c.ga0(this.a)^B.c8.ga0(this.b)^B.c8.ga0(this.c))>>>0},
t(a){var s="key("+this.a
if(this.b)s+=" shift"
return(this.c?s+" alt":s)+")"}}
A.aT.prototype={
gaR(){return this.c.a},
gao(){return this.c.b},
an(a,b,c){var s,r=this
if(a<0)return
s=r.c
if(a>=s.a)return
if(b<0)return
if(b>=s.b)return
r.f.an(r.d+a,r.e+b,c)},
b8(a,b,c,d){return new A.aT(new A.d(c,d),this.d+a,this.e+b,this.f)}}
A.kX.prototype={
gaR(){return this.e.a.b.b.a},
gao(){return this.e.a.b.b.b},
lB(a,b,c,d,e,f){var s=t.gX
A.e3(this.r,"load",s.h("~(1)?").a(new A.qh(this)),!1,s.c)},
an(a,b,c){this.e.i7(a,b,c)},
kR(){if(!this.y)return
this.e.ag(new A.qi(this))},
mE(a){var s,r,q,p=this.w,o=p.p(0,a)
if(o!=null)return o
s=A.vF()
r=this.r
s.width=A.u(r.width)
s.height=A.u(r.height)
q=A.bZ(s.getContext("2d"))
if(q==null)q=A.P(q)
q.drawImage(r,0,0)
q.globalCompositeOperation="source-atop"
q.fillStyle="rgb("+a.a+", "+a.b+", "+a.c+")"
q.fillRect(0,0,A.u(r.width),A.u(r.height))
p.i(0,a,s)
return s}}
A.qh.prototype={
$1(a){var s=this.a
s.y=!0
s.kR()},
$S:3}
A.qi.prototype={
$3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=c.a,g=B.i4.p(0,h)
h=g==null?h:g
s=B.c.ab(h,32)
r=this.a
q=r.z
p=B.c.A(h,32)
o=r.Q
n=r.f
m=c.c
n.fillStyle="rgb("+m.a+", "+m.b+", "+m.c+")"
m=r.x
l=a*q*m
k=b*o*m
j=q*m
m=o*m
n.fillRect(l,k,j,m)
if(h===0||h===32)return
i=r.mE(c.b)
n.imageSmoothingEnabled=!1
n.drawImage.apply(n,[i,s*q,p*o,q,o,l,k,j,m])},
$S:47}
A.dl.prototype={
k6(a,b,c,d,e){var s,r,q,p,o=A.cD(32,B.aI,e==null?B.z:e)
for(s=b+d,r=a+c,q=b;q<s;++q)for(p=a;p<r;++p)this.an(p,q,o)},
cl(a,b,c,d){return this.k6(a,b,c,d,null)},
cu(a,b,c,d,e){var s,r,q
if(d==null)d=B.aI
if(e==null)e=B.z
for(s=c.length,r=0;r<s;++r){q=a+r
if(q>=this.gaR())break
this.an(q,b,new A.X(c.charCodeAt(r),d,e))}},
k(a,b,c,d){return this.cu(a,b,c,d,null)},
pH(a,b,c){return this.cu(a,b,c,null,null)},
b8(a,b,c,d){return new A.aT(new A.d(c,d),a,b,this)}}
A.hz.prototype={}
A.fe.prototype={
gjr(){var s,r=this,q=r.r
if(q===$){s=A.uu(r.gnN())
r.r!==$&&A.eg()
r.r=s
q=s}return q},
sp_(a){var s,r,q,p,o=this
if(o.e!=null)return
s=v.G
r=A.bZ(A.P(s.document).body)
r.toString
q=t.gX
p=q.h("~(1)?")
q=q.c
o.e=A.e3(r,"keydown",p.a(o.gmR()),!1,q)
s=A.bZ(A.P(s.document).body)
s.toString
o.f=A.e3(s,"keyup",p.a(o.gmT()),!1,q)},
spw(a){var s=this
if(s.w)return
s.w=!0
s.y=null
A.u(A.P(v.G.window).requestAnimationFrame(s.gjr()))},
lk(a){var s,r,q=this,p=q.c.e.a.b.b,o=a.e.a.b.b,n=p.a!==o.a||p.b!==o.b
q.c=a
q.d=!0
if(n)for(p=q.b,o=p.length,s=a.e.a.b.b,r=0;r<p.length;p.length===o||(0,A.o)(p),++r)p[r].e4(s)},
a2(a){var s=this
s.$ti.h("t<1>").a(a)
a.jy(s)
B.a.j(s.b,a)
s.eB()},
aN(a){var s,r,q,p=this.b
if(0>=p.length)return A.c(p,-1)
s=p.pop()
s.a=null
r=p.length
q=r-1
if(!(q>=0))return A.c(p,q)
p[q].cX(s,a)
this.eB()},
a8(){return this.aN(null)},
bI(a){var s,r=this
r.$ti.h("t<1>").a(a)
s=r.b
if(0>=s.length)return A.c(s,-1)
s.pop().a=null
a.jy(r)
B.a.j(s,a)
r.eB()},
cJ(){var s,r
for(s=this.b,r=0;r<s.length;++r)s[r].bv()
if(this.d)this.eB()},
mS(a){var s,r,q,p=A.u(a.keyCode)
if(A.u(a.location)===3){A:{if(48===p){s=96
break A}if(49===p){s=97
break A}if(50===p){s=98
break A}if(51===p){s=99
break A}if(52===p){s=100
break A}if(53===p){s=101
break A}if(54===p){s=102
break A}if(55===p){s=103
break A}if(56===p){s=104
break A}if(57===p){s=105
break A}if(187===p){s=1000
break A}if(13===p){s=1001
break A}s=p
break A}p=s}if(p===59)p=186
r=this.a.a.p(0,new A.y(p,A.dr(a.shiftKey),A.dr(a.altKey)))
q=B.a.gcG(this.b)
if(r!=null){a.preventDefault()
if(q.a5(r))return}s=A.dr(a.shiftKey)
if(q.a9(p,A.dr(a.altKey),s))a.preventDefault()},
mU(a){var s,r,q=A.u(a.keyCode)
if(q===59)q=186
s=B.a.gcG(this.b)
r=A.dr(a.shiftKey)
if(s.f4(q,A.dr(a.altKey),r))a.preventDefault()},
nO(a){var s,r=this
A.e7(a)
s=r.y
if(s!=null){if(a-s>16.666666666666668){r.cJ()
r.y=a}}else{r.cJ()
r.y=a}if(r.w)A.u(A.P(v.G.window).requestAnimationFrame(r.gjr()))},
eB(){var s,r,q=this.c
q.cl(0,0,q.gaR(),q.gao())
for(s=this.b,r=s.length-1;r>=0;--r){if(!(r<s.length))return A.c(s,r)
if(!s[r].gbf())break}if(r<0)r=0
for(;r<s.length;++r)s[r].ag(q)
this.d=!1
q.kR()}}
A.t.prototype={
gbf(){return!1},
jy(a){A.z(this).h("fe<t.T>").a(a)
this.a=a
this.e4(a.c.e.a.b.b)},
K(){var s=this.a
if(s==null)return
s.d=!0},
a5(a){A.z(this).h("t.T").a(a)
return!1},
a9(a,b,c){return!1},
f4(a,b,c){return!1},
cX(a,b){A.z(this).h("t<t.T>").a(a)},
bv(){},
ag(a){},
e4(a){}}
A.a8.prototype={
lv(a,b,c,d){var s,r,q,p,o,n,m,l=this
for(s=l.$ti.c,r=l.a,q=l.b.b.a,p=0*q,o=1;o<a;++o){n=s.a(c.$1(new A.d(o,0)))
l.l(o,0)
B.a.i(r,p+o,n)}for(m=1;m<b;++m)for(p=m*q,o=0;o<a;++o){n=s.a(c.$1(new A.d(o,m)))
l.l(o,m)
B.a.i(r,p+o,n)}},
B(a,b){var s,r
this.l(a,b)
s=this.a
r=b*this.b.b.a+a
if(!(r>=0&&r<s.length))return A.c(s,r)
return s[r]},
aY(a,b,c){var s=this
s.$ti.c.a(c)
s.l(a,b)
B.a.i(s.a,b*s.b.b.a+a,c)},
gN(a){var s=this.a
return new J.b_(s,s.length,A.M(s).h("b_<1>"))},
l(a,b){if(a<0||a>=this.b.b.a)throw A.n(A.hv(a,"x"))
if(b<0||b>=this.b.b.b)throw A.n(A.hv(b,"y"))}}
A.j6.prototype={
p9(a){var s=this.a,r=this.b
if(!A.ut(s,r,a))return!1
if(r>0&&A.ut(s,r-1,a))return!1
return!0},
gN(a){return A.wj(this,!1)}}
A.lJ.prototype={
gH(){var s=this.b
return new A.d(s.b,s.c)},
q(){var s,r,q,p,o,n
for(s=this.b,r=this.a,q=r.a,p=r.b,o=this.c;s.q();){n=new A.d(s.b,s.c)
if(o){if(r.p9(n))return!0}else if(A.ut(q,p,n))return!0}return!1},
$ia5:1}
A.av.prototype={
aK(){return"Direction."+this.b},
gb9(){switch(this.a){case 0:var s=B.r
break
case 1:s=B.U
break
case 2:s=B.M
break
case 3:s=B.R
break
case 4:s=B.P
break
case 5:s=B.Q
break
case 6:s=B.L
break
case 7:s=B.T
break
case 8:s=B.S
break
default:s=null}return s},
gba(){switch(this.a){case 0:var s=B.r
break
case 1:s=B.R
break
case 2:s=B.P
break
case 3:s=B.Q
break
case 4:s=B.L
break
case 5:s=B.T
break
case 6:s=B.S
break
case 7:s=B.U
break
case 8:s=B.M
break
default:s=null}return s},
gbE(){switch(this.a){case 0:var s=B.r
break
case 1:s=B.S
break
case 2:s=B.U
break
case 3:s=B.M
break
case 4:s=B.R
break
case 5:s=B.P
break
case 6:s=B.Q
break
case 7:s=B.L
break
case 8:s=B.T
break
default:s=null}return s},
gbV(){switch(this.a){case 0:var s=B.r
break
case 1:s=B.P
break
case 2:s=B.Q
break
case 3:s=B.L
break
case 4:s=B.T
break
case 5:s=B.S
break
case 6:s=B.U
break
case 7:s=B.M
break
case 8:s=B.R
break
default:s=null}return s},
gcL(){switch(this.a){case 0:var s=B.r
break
case 1:s=B.L
break
case 2:s=B.T
break
case 3:s=B.S
break
case 4:s=B.U
break
case 5:s=B.M
break
case 6:s=B.R
break
case 7:s=B.P
break
case 8:s=B.Q
break
default:s=null}return s},
t(a){var s
switch(this.a){case 0:s="none"
break
case 1:s="n"
break
case 2:s="ne"
break
case 3:s="e"
break
case 4:s="se"
break
case 5:s="s"
break
case 6:s="sw"
break
case 7:s="w"
break
case 8:s="nw"
break
default:s=null}return s},
$id:1,
gm(){return this.c},
gn(){return this.d}}
A.lM.prototype={}
A.mc.prototype={
gH(){return this.a},
q(){var s,r,q=this,p=q.a.F(0,q.e)
q.a=p
s=q.b=q.b+q.d
r=q.c
if(s*2>=r){q.a=p.F(0,q.f)
q.b=s-r}return!0},
$ia5:1}
A.Z.prototype={
gbR(){var s=this.a.a
return Math.min(s,s+this.b.a)},
gbW(){var s=this.a.b
return Math.min(s,s+this.b.b)},
ge5(){var s=this.a.a
return Math.max(s,s+this.b.a)},
geM(){var s=this.a.b
return Math.max(s,s+this.b.b)},
ghk(){var s=this
return new A.d(B.c.A(s.gbR()+s.ge5(),2),B.c.A(s.gbW()+s.geM(),2))},
t(a){return"("+this.a.t(0)+")-("+this.b.t(0)+")"},
bQ(a){var s=this.a,r=this.b,q=a*2
return new A.Z(new A.d(s.a-a,s.b-a),new A.d(r.a+q,r.b+q))},
G(a,b){var s,r=this.a,q=r.a
if(b.gm()<q)return!1
s=this.b
if(b.gm()>=q+s.a)return!1
r=r.b
if(b.gn()<r)return!1
if(b.gn()>=r+s.b)return!1
return!0},
gN(a){var s=this.a
return new A.cM(this,s.a-1,s.b)},
kZ(){var s,r,q,p,o,n=this,m=n.b,l=m.a,k=l>1
if(k&&m.b>1){s=A.a([],t.l)
for(r=n.gbR(),k=n.a,q=k.a,l=q+l,p=Math.max(q,l),k=k.b,m=k+m.b;r<p;++r){B.a.j(s,new A.d(r,Math.min(k,m)))
B.a.j(s,new A.d(r,Math.max(k,m)-1))}for(o=n.gbW()+1,m=Math.max(k,m);o<m-1;++o){B.a.j(s,new A.d(Math.min(q,l),o))
B.a.j(s,new A.d(p-1,o))}return s}else if(k&&m.b===1)return new A.Z(new A.d(n.gbR(),n.gbW()),new A.d(l,1))
else{m=m.b
if(m>=1&&l===1)return new A.Z(new A.d(n.gbR(),n.gbW()),new A.d(1,m))}return B.hQ}}
A.cM.prototype={
gH(){return new A.d(this.b,this.c)},
q(){var s=this,r=s.a
if(++s.b>=r.ge5()){s.b=r.a.a;++s.c}return s.c<r.geM()},
$ia5:1}
A.qp.prototype={
br(a,b){if(b==null){b=a
a=0}return this.a.a1(b-a)+a},
T(a){return this.br(a,null)},
aA(a,b){if(b==null){b=a
a=0}return this.a.a1(b+1-a)+a},
kh(a){return this.aA(a,null)},
aD(a,b){var s=this.a
if(b==null)return s.hF()*a
else return s.hF()*(b-a)+a},
aP(a){return this.aD(a,null)},
pr(a,b){var s=B.e.bP(b)
return this.aP(1)<b-s?s+1:s},
kW(a,b,c){var s,r
c.h("D<0>").a(b)
s=this.T(b.length)
if(!(s>=0&&s<b.length))return A.c(b,s)
r=b[s]
B.a.i(b,s,B.a.gcG(b))
B.a.kQ(b)
return r},
cN(a,b){var s
if(b<0)throw A.n(A.aE('The argument "range" must be zero or greater.',null))
s=this.kh(b)
if(s<=this.kh(b))return a+s
else return a-b-1+s},
hT(a,b){var s=this.a
for(;;){if(!(s.a1(b)===0))break;++a}return a}}
A.ln.prototype={
gb4(){return Math.max(Math.abs(this.gm()),Math.abs(this.gn()))},
gaF(){var s=this
return s.gm()*s.gm()+s.gn()*s.gn()},
gI(a){return Math.sqrt(this.gaF())},
gku(){var s,r,q,p=this,o=null,n=p.gm(),m=p.gn()
A:{s=n<0
r=s
if(r&&p.gn()/p.gm()>=2){r=B.M
break A}if(s&&p.gn()/p.gm()>=0.5){r=B.U
break A}if(s&&p.gn()/p.gm()>=-0.5){r=B.S
break A}if(s&&p.gn()/p.gm()>=-2){r=B.T
break A}if(s){r=B.L
break A}q=n>0
r=q
if(r&&p.gn()/p.gm()>=2){r=B.L
break A}if(q&&p.gn()/p.gm()>=0.5){r=B.Q
break A}if(q&&p.gn()/p.gm()>=-0.5){r=B.P
break A}if(q&&p.gn()/p.gm()>=-2){r=B.R
break A}if(q){r=B.M
break A}if(m<0){r=B.M
break A}if(m>0){r=B.L
break A}r=B.r
break A}return r},
gbB(){var s,r=A.a([],t.l)
for(s=0;s<8;++s)r.push(this.F(0,B.a6[s]))
return r},
gdH(){var s,r=A.a([],t.l)
for(s=0;s<4;++s)r.push(this.F(0,B.at[s]))
return r},
aI(a,b){A.u(b)
return new A.d(this.gm()*b,this.gn()*b)},
F(a,b){var s,r=this
A:{if(t.u.b(b)){s=new A.d(r.gm()+b.gm(),r.gn()+b.gn())
break A}if(A.fr(b)){s=new A.d(r.gm()+b,r.gn()+b)
break A}s=A.a0(A.aE("Operand must be an int or Vec.",null))}return s},
S(a,b){var s,r,q,p
A:{s=this.gm()
r=b.gm()
q=this.gn()
p=b.gn()
break A}return new A.d(s-r,q-p)},
bh(a,b){var s
A:{if(t.u.b(b)){s=this.gaF()>b.gaF()
break A}if(typeof b=="number"){s=this.gaF()>b*b
break A}s=A.a0(A.aE("Operand must be a number or Vec.",null))}return s},
cQ(a,b){var s
A:{s=this.gaF()>=b*b
break A}return s},
ec(a,b){var s
A:{if(t.u.b(b)){s=this.gaF()<b.gaF()
break A}if(typeof b=="number"){s=this.gaF()<b*b
break A}s=A.a0(A.aE("Operand must be a number or Vec.",null))}return s},
eb(a,b){var s
A:{s=this.gaF()<=b*b
break A}return s},
t(a){return""+this.gm()+", "+this.gn()}}
A.d.prototype={
Z(a,b){if(b==null)return!1
if(!t.u.b(b))return!1
return this.a===b.gm()&&this.b===b.gn()},
ga0(a){var s,r=this.a,q=r>=0?2*r:-2*r-1
r=this.b
s=r>=0?2*r:-2*r-1
r=q+s
return B.c.A(r*(r+1),2)+s},
gm(){return this.a},
gn(){return this.b}}
A.mD.prototype={}
A.u3.prototype={}
A.i2.prototype={}
A.lO.prototype={}
A.i3.prototype={$izq:1}
A.rG.prototype={
$1(a){return this.a.$1(A.P(a))},
$S:3}
A.le.prototype={}
A.tA.prototype={
$1(a){A.P(a)
$.mN=A.u(a.location)===3?0:A.u(a.keyCode)
$.x9=A.dr(a.ctrlKey)},
$S:140}
A.tB.prototype={
$1(a){A.uy()},
$S:3}
A.t9.prototype={
$1(a){A.Ad()},
$S:3}
A.ta.prototype={
$1(a){var s,r,q,p,o=$.ns
if(o==null)return
s=B.e.L(A.bA(a.offsetX))
r=B.e.L(A.bA(a.offsetY))
q=this.a
s=B.c.cc(s,q.z)
q=B.c.cc(r,q.Q)
r=o.w
r===$&&A.b()
r=r.r
p=new A.d(s,q).F(0,new A.d(r.gbR(),r.gbW()))
if(!r.G(0,p))return
s=o.b.x
s===$&&A.b()
s=s.w.B(p.a,p.b)
if(s instanceof A.aa){if($.fp.G(0,s))$.fp.ad(0,s)
else $.fp.j(0,s)
A.uy()}},
$S:3}
A.tb.prototype={
$1(a){var s,r,q,p,o
for(s=this.a,r=v.G,q=0;q<$.fq.length;++q){p=$.fq[q]
if(p.a===s){$.bY.b=p
p=A.bZ(A.P(r.document).querySelector("#game"))
p.toString
o=$.bY.b
if(o===$.bY)A.a0(A.dM(""))
p.append(o.b)}else p.b.remove()}A.wL()
A.uy()
A.P(A.P(r.window).localStorage).setItem("font",s)},
$S:3}
A.tf.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g=v.G,f=A.P(A.P(g.document).querySelectorAll(".debug"))
for(s=0;s<A.u(f.length);++s){r=A.bZ(A.P(g.document).body)
r.toString
q=A.bZ(f.item(s))
q.toString
A.P(r.removeChild(q))}p=$.ns
if(p==null)return
r=A.z($.fp)
$.fp.mr(r.h("A(1)").a(new A.tg()),!0)
for(r=A.uo($.fp,$.fp.r,r.c),q=r.$ti.c;r.q();){o=r.d
if(o==null)o=q.a(o)
n=p.w
n===$&&A.b()
n=n.r
m=o.y
if(n.G(0,m)){l=n.a
k=l.a
n=n.b
l=l.b
j=m.S(0,new A.d(Math.min(k,k+n.a),Math.min(l,l+n.b)))
i=A.yv(o)
if(i==null)continue
h=A.P(A.P(g.document).createElement("pre"))
h.className="debug"
A.P(h.style).display="inline-block"
o=$.bY.b
if(o===$.bY)A.a0(A.dM(""))
n=o.d
m=o.b
l=B.c.L(A.u(m.offsetLeft))
o=o.e
m=B.c.L(A.u(m.offsetTop))
A.P(h.style).left=B.c.t((j.a+1)*n+l+4)
A.P(h.style).top=B.c.t(j.b*o+m+2)
h.textContent=i
A.P(A.bZ(A.P(g.document).body).children)}}},
$S:0}
A.tg.prototype={
$1(a){return t.B.a(a).z<=0},
$S:141};(function aliases(){var s=J.dg.prototype
s.lt=s.t
s=A.fL.prototype
s.ls=s.V
s=A.hh.prototype
s.ik=s.bp
s=A.cF.prototype
s.fA=s.a9
s.fz=s.a5
s=A.e0.prototype
s.ek=s.a9
s.lu=s.ag
s=A.i6.prototype
s.il=s.cz})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._static_1,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_2u,m=hunkHelpers.installInstanceTearOff,l=hunkHelpers._instance_0u
s(J,"Am","yQ",142)
r(J.r.prototype,"goa","j",136)
q(A,"Az","w0",2)
p(A,"AZ","zC",25)
p(A,"B_","zD",25)
p(A,"B0","zE",25)
q(A,"wT","AS",0)
p(A,"B5","A9",40)
p(A,"wY","AB",4)
p(A,"B9","wJ",4)
p(A,"Ba","wK",4)
p(A,"a_","Al",5)
p(A,"BG","A5",8)
p(A,"BJ","AH",8)
p(A,"BH","A6",8)
p(A,"BK","AI",8)
p(A,"BF","A4",8)
p(A,"BI","AG",8)
o(A.f4.prototype,"goV","oW","1(q)")
p(A,"uA","AF",17)
p(A,"mJ","AE",5)
var k
n(k=A.ek.prototype,"glg","lh",81)
n(k,"gli","lj",82)
m(A.bS.prototype,"gl0",0,1,null,["$2$wasUnequipped","$1"],["fj","c8"],85,0,0)
o(A.fY.prototype,"gmy","bM",37)
s(A,"Bp","yL",15)
s(A,"x3","yI",15)
s(A,"Bo","yK",15)
s(A,"tw","yJ",15)
s(A,"Bx","z2",23)
s(A,"x4","z1",23)
s(A,"x5","z3",23)
o(k=A.b1.prototype,"gi3","fm",43)
o(k,"glQ","lR",9)
o(A.hG.prototype,"gi3","fm",43)
o(k=A.e0.prototype,"gnX","nY",9)
o(k,"gev","bZ",13)
l(A.i0.prototype,"gjf","ez",0)
o(A.im.prototype,"gev","bZ",13)
o(A.il.prototype,"gev","bZ",13)
o(A.fh.prototype,"gev","bZ",13)
l(k=A.hX.prototype,"gn8","n9",0)
l(k,"gmK","mL",0)
l(k,"gmh","mi",0)
l(k,"go8","o9",0)
l(k,"gmB","mC",0)
l(k,"gmV","mW",0)
l(k,"glW","lX",0)
l(k,"gn6","n7",0)
l(k,"gnT","nU",0)
l(k,"gnR","nS",0)
l(k,"gnV","nW",0)
o(k=A.fe.prototype,"gmR","mS",3)
o(k,"gmT","mU",3)
o(k,"gnN","nO",139)
q(A,"Bv","wL",0)
p(A,"Bq","A7",9)
p(A,"Br","A8",13)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.a1,null)
q(A.a1,[A.u6,J.jZ,A.hE,J.b_,A.am,A.Y,A.qx,A.k,A.c4,A.bn,A.cT,A.hP,A.hR,A.bp,A.aC,A.dp,A.cq,A.es,A.i9,A.d7,A.rq,A.pZ,A.io,A.aD,A.pp,A.c3,A.cH,A.dN,A.h7,A.ia,A.hY,A.l8,A.my,A.rE,A.c6,A.lZ,A.mC,A.t3,A.ah,A.cw,A.i5,A.bV,A.lz,A.hL,A.iu,A.f9,A.md,A.cW,A.e5,A.jc,A.je,A.rT,A.eu,A.rF,A.kB,A.hK,A.rH,A.ol,A.aO,A.aK,A.mz,A.qW,A.dW,A.ju,A.m7,A.mn,A.jK,A.a3,A.G,A.f2,A.fR,A.eB,A.mj,A.fN,A.fJ,A.rB,A.cf,A.rD,A.aI,A.hZ,A.mf,A.bz,A.jB,A.rC,A.lE,A.ad,A.ih,A.lx,A.ba,A.ms,A.ni,A.ig,A.bg,A.kD,A.fG,A.ny,A.jk,A.eK,A.pi,A.hq,A.q0,A.q9,A.i4,A.rZ,A.dT,A.rp,A.rk,A.fj,A.d4,A.jM,A.cz,A.dm,A.b7,A.d6,A.di,A.b8,A.aB,A.c_,A.dG,A.fT,A.jt,A.aJ,A.jJ,A.hT,A.kd,A.hi,A.f4,A.bq,A.bW,A.ml,A.ij,A.pV,A.hn,A.V,A.cQ,A.cA,A.dD,A.cE,A.dc,A.hg,A.aF,A.cK,A.hJ,A.da,A.bb,A.ce,A.ek,A.c1,A.eJ,A.dC,A.bJ,A.rn,A.aN,A.kS,A.dj,A.j1,A.at,A.nq,A.eP,A.ci,A.om,A.mr,A.pm,A.eU,A.qG,A.qI,A.ae,A.by,A.dZ,A.dY,A.t,A.fH,A.jg,A.fO,A.fS,A.cC,A.jQ,A.jT,A.k0,A.kg,A.kC,A.ld,A.li,A.f,A.l,A.k1,A.cX,A.et,A.q2,A.ly,A.ac,A.qX,A.la,A.aM,A.ar,A.a9,A.N,A.bw,A.c5,A.nM,A.E,A.X,A.k8,A.y,A.dl,A.fe,A.lJ,A.mc,A.cM,A.qp,A.ln,A.mD,A.u3,A.i3,A.le])
q(J.jZ,[J.h4,J.h6,J.h9,J.h8,J.ha,J.dL,J.dd])
q(J.h9,[J.dg,J.r,A.eQ,A.hl])
q(J.dg,[J.kF,J.dn,J.de])
r(J.k3,A.hE)
r(J.pe,J.r)
q(J.dL,[J.h5,J.k4])
q(A.am,[A.df,A.cR,A.k5,A.ll,A.kZ,A.lQ,A.hc,A.iQ,A.cg,A.hS,A.lk,A.dV,A.jd])
r(A.fd,A.Y)
r(A.d8,A.fd)
q(A.k,[A.L,A.dP,A.ak,A.dX,A.hQ,A.hW,A.i8,A.lw,A.mx,A.R,A.lo,A.lP,A.m5,A.a8,A.j6,A.Z])
q(A.L,[A.aG,A.b2,A.cI,A.bl])
q(A.aG,[A.hO,A.aP,A.cN,A.hd,A.m9])
r(A.dF,A.dP)
r(A.fQ,A.dX)
q(A.cq,[A.fk,A.fl])
r(A.O,A.fk)
r(A.W,A.fl)
q(A.es,[A.bQ,A.dK])
q(A.d7,[A.j8,A.j9,A.lc,A.ts,A.tu,A.ry,A.rx,A.rP,A.r8,A.t0,A.pC,A.op,A.oq,A.oo,A.rt,A.nh,A.nG,A.nK,A.ru,A.oi,A.q8,A.tp,A.nS,A.nW,A.nX,A.nT,A.nU,A.o_,A.o0,A.nV,A.nY,A.nZ,A.oN,A.oQ,A.nb,A.nc,A.n9,A.ne,A.n8,A.nd,A.to,A.tH,A.tF,A.tJ,A.qH,A.nz,A.pl,A.pk,A.qq,A.rm,A.rl,A.nD,A.nE,A.nF,A.nQ,A.nR,A.ox,A.pr,A.pt,A.tr,A.qa,A.qb,A.qf,A.qg,A.qd,A.qe,A.qc,A.pY,A.pX,A.pE,A.qt,A.qs,A.of,A.od,A.oy,A.qV,A.o4,A.o2,A.oK,A.pO,A.pP,A.pQ,A.pN,A.nl,A.nj,A.nk,A.nf,A.ng,A.oj,A.pn,A.qR,A.qU,A.qT,A.ob,A.o7,A.oc,A.o8,A.oa,A.nL,A.ow,A.ov,A.ot,A.rh,A.ri,A.p1,A.p2,A.pH,A.pK,A.pL,A.pI,A.pJ,A.oZ,A.ro,A.or,A.pS,A.pT,A.pU,A.pR,A.qA,A.qB,A.qz,A.qP,A.qN,A.o5,A.o6,A.qu,A.r6,A.r7,A.r3,A.r4,A.qY,A.rd,A.t1,A.t7,A.t8,A.qh,A.qi,A.rG,A.tA,A.tB,A.t9,A.ta,A.tb,A.tg])
q(A.j8,[A.q6,A.rz,A.rA,A.t4,A.rI,A.rL,A.rK,A.rJ,A.rO,A.rN,A.rM,A.r9,A.t_,A.ti,A.nH,A.oR,A.oO,A.oW,A.oX,A.oV,A.oS,A.oY,A.oT,A.oM,A.oP,A.oU,A.na,A.tn,A.tk,A.tl,A.tz,A.tG,A.ty,A.tD,A.nC,A.nA,A.qm,A.qn,A.qk,A.qo,A.ql,A.qj,A.nt,A.nv,A.nw,A.nu,A.ps,A.px,A.py,A.pv,A.pw,A.pz,A.qD,A.p9,A.qQ,A.o1,A.p0,A.pG,A.oE,A.oF,A.oG,A.oH,A.oI,A.oJ,A.qK,A.qL,A.rf,A.re,A.tf])
r(A.hp,A.cR)
q(A.lc,[A.l7,A.em])
q(A.aD,[A.c2,A.m8])
q(A.j9,[A.pf,A.tt,A.rQ,A.pD,A.rU,A.on,A.nm,A.nn,A.nI,A.nJ,A.rX,A.tI,A.nB,A.pj,A.rW,A.oC,A.oB,A.oA,A.oz,A.oe,A.pu,A.qE,A.qF,A.o3,A.pb,A.p6,A.p5,A.p4,A.pc,A.p7,A.p8,A.pa,A.ok,A.po,A.qS,A.o9,A.ou,A.p_,A.pB,A.pA,A.qC,A.qO,A.qM,A.q4,A.q5,A.qv,A.qw,A.r5,A.qZ,A.r_,A.r0,A.r1,A.r2,A.nO,A.nP,A.rc,A.rj,A.rw,A.rv])
r(A.hb,A.c2)
q(A.hl,[A.kp,A.eR])
q(A.eR,[A.ib,A.id])
r(A.ic,A.ib)
r(A.hj,A.ic)
r(A.ie,A.id)
r(A.hk,A.ie)
q(A.hj,[A.kq,A.kr])
q(A.hk,[A.ks,A.kt,A.ku,A.kv,A.kw,A.hm,A.kx])
r(A.ip,A.lQ)
r(A.mp,A.iu)
r(A.ik,A.f9)
r(A.cV,A.ik)
r(A.k7,A.hc)
r(A.k6,A.jc)
q(A.je,[A.ph,A.pg])
r(A.rS,A.rT)
q(A.cg,[A.f1,A.jX])
q(A.a3,[A.lR,A.lU,A.l6,A.lA,A.lK,A.mv,A.mE])
r(A.jw,A.lR)
r(A.jA,A.lU)
q(A.G,[A.jD,A.ki,A.lD,A.ke,A.fL,A.ew,A.ez,A.lF,A.lG,A.lH,A.lX,A.mh,A.mi,A.ff,A.eN,A.lV,A.eD,A.eC,A.eH,A.jS,A.kR,A.eI,A.eO,A.kk,A.eV,A.kH,A.iN,A.f6,A.f5,A.l2,A.fc,A.mg,A.jE,A.iR,A.k_,A.kE,A.lq,A.kz,A.j7,A.kU,A.j4])
q(A.f2,[A.lr,A.iO,A.hu])
q(A.l6,[A.lC,A.lI,A.lL,A.lN,A.lS,A.lT,A.lY,A.m1,A.m2,A.m3,A.m4,A.ma,A.mb,A.me,A.mm,A.mq,A.mu,A.mB,A.mF,A.mG])
r(A.iV,A.lC)
r(A.j3,A.lI)
r(A.jf,A.lL)
r(A.jp,A.lN)
r(A.jx,A.lS)
r(A.jy,A.lT)
r(A.jG,A.lY)
r(A.jN,A.m1)
r(A.jO,A.m2)
r(A.jU,A.m3)
r(A.jW,A.m4)
r(A.ka,A.ma)
r(A.kc,A.mb)
r(A.kj,A.me)
r(A.kN,A.mm)
r(A.l_,A.mq)
r(A.l1,A.mu)
r(A.lf,A.mB)
r(A.lu,A.mF)
r(A.lv,A.mG)
r(A.iT,A.lA)
q(A.ki,[A.lB,A.jb,A.mw])
r(A.iU,A.lB)
r(A.ja,A.lK)
r(A.l4,A.mv)
r(A.l5,A.mw)
r(A.ls,A.mE)
r(A.iW,A.lD)
q(A.ke,[A.j_,A.lh])
q(A.fL,[A.eG,A.lW,A.eX,A.el,A.ev,A.f3])
r(A.eE,A.lW)
q(A.rF,[A.ex,A.dQ,A.dk,A.h3,A.bL,A.rg,A.hB,A.hC,A.jR,A.bT,A.ho,A.dS,A.cn,A.fa,A.fg,A.iM,A.lM])
r(A.eo,A.lF)
r(A.ep,A.lG)
r(A.j2,A.lH)
r(A.eF,A.lX)
r(A.eY,A.mh)
r(A.kG,A.mi)
r(A.jC,A.lV)
q(A.kR,[A.jV,A.mo])
q(A.eB,[A.kh,A.kn,A.mt])
r(A.kQ,A.mo)
q(A.mg,[A.eS,A.eT])
r(A.bU,A.mj)
q(A.bU,[A.jo,A.jF,A.jv,A.jz,A.kM,A.l0])
r(A.jH,A.fN)
q(A.rB,[A.nr,A.oL])
q(A.rD,[A.m6,A.mA])
q(A.rC,[A.og,A.j0])
q(A.ba,[A.bs,A.kP,A.d9,A.jP,A.h_,A.bR,A.b3,A.bM,A.bx])
r(A.fI,A.kP)
r(A.af,A.ms)
q(A.af,[A.d5,A.iP,A.iX,A.iY,A.hh])
q(A.hh,[A.iS,A.iZ,A.k9,A.l3,A.l9,A.lt])
q(A.kD,[A.rV,A.pM,A.t2])
q(A.bg,[A.eq,A.er,A.kY,A.eM,A.eW,A.f7])
q(A.kY,[A.ey,A.eL])
q(A.k_,[A.jn,A.jq,A.lj,A.lm,A.lg])
q(A.dm,[A.bF,A.aH,A.K])
q(A.c_,[A.fZ,A.fK,A.hs,A.dE,A.fW,A.hA,A.hr])
q(A.hT,[A.lp,A.f_])
q(A.dD,[A.aS,A.kW,A.c7,A.dI])
q(A.bF,[A.ax,A.aa])
r(A.co,A.bb)
q(A.co,[A.hM,A.fE,A.hV,A.h1])
r(A.eA,A.lP)
r(A.bS,A.m5)
q(A.eP,[A.ch,A.cx,A.cv])
q(A.t,[A.iL,A.fV,A.jl,A.fY,A.hf,A.lb,A.hU,A.h0,A.cF,A.b1,A.e0,A.jL,A.kf,A.ky,A.kI,A.hD,A.hX,A.cr])
q(A.jl,[A.fD,A.kA])
q(A.cF,[A.jr,A.k2,A.kl])
q(A.b1,[A.db,A.dH,A.h2,A.dR,A.mk,A.hG,A.e_,A.e1])
q(A.cX,[A.i_,A.i1,A.ii,A.fm])
q(A.mk,[A.kK,A.kL])
q(A.e0,[A.cU,A.i7,A.i0,A.im,A.fh])
q(A.cU,[A.i6,A.il])
q(A.i6,[A.m0,A.m_])
q(A.et,[A.ko,A.f8])
q(A.q2,[A.p3,A.pq,A.qy,A.qJ])
q(A.kI,[A.fM,A.fU,A.fX,A.hF])
q(A.cr,[A.mH,A.mI])
q(A.dl,[A.aT,A.hz])
r(A.kX,A.hz)
r(A.av,A.lM)
r(A.d,A.mD)
r(A.i2,A.hL)
r(A.lO,A.i2)
s(A.fd,A.dp)
s(A.ib,A.Y)
s(A.ic,A.aC)
s(A.id,A.Y)
s(A.ie,A.aC)
s(A.lR,A.V)
s(A.lU,A.V)
s(A.lC,A.V)
s(A.lI,A.V)
s(A.lL,A.V)
s(A.lN,A.V)
s(A.lS,A.cQ)
s(A.lT,A.V)
s(A.lY,A.V)
s(A.m1,A.V)
s(A.m2,A.V)
s(A.m3,A.cQ)
s(A.m4,A.V)
s(A.ma,A.V)
s(A.mb,A.V)
s(A.me,A.V)
s(A.mm,A.V)
s(A.mq,A.V)
s(A.mu,A.V)
s(A.mB,A.V)
s(A.mF,A.V)
s(A.mG,A.V)
s(A.lA,A.cA)
s(A.lB,A.jM)
s(A.lK,A.cA)
s(A.mv,A.cA)
s(A.mw,A.jM)
s(A.mE,A.cQ)
s(A.lD,A.fR)
s(A.lW,A.cz)
s(A.lF,A.cz)
s(A.lG,A.cz)
s(A.lH,A.cz)
s(A.lX,A.cz)
s(A.mh,A.cz)
s(A.mi,A.cz)
s(A.lV,A.fR)
s(A.mo,A.fR)
s(A.mj,A.aF)
s(A.ms,A.aF)
s(A.lP,A.eJ)
s(A.m5,A.eJ)
s(A.lM,A.ln)
s(A.mD,A.ln)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{e:"int",F:"double",al:"num",q:"String",A:"bool",aK:"Null",D:"List",a1:"Object",bm:"Map",ay:"JSObject"},mangledNames:{},types:["~()","A(d)","e()","~(ay)","q(q)","e(e)","~(K)","F()","G(d)","A(K)","~(d)","A(av)","e(e,ce)","e?(K)","~(q,@)","e(aN,aN)","~(K,d)","F(e)","e(e,q)","~(af,e)","D<q>(e)","E(E,E)","fj()","e(at,at)","A(dc)","~(~())","F(F,d6)","aK()","~(a1?,a1?)","~(cf)","A(cK)","F(F,di)","aK(e)","q(cl)","F(F,ce)","~(aa)","A(ba)","~(av)","e(aa)","A(aN)","@(@)","A(at)","db()","e(K)","aK(@)","~(dl)","D<d>()","~(e,e,X)","e(e,e)","~(q,q)","eT(d)","eo(e)","~(bu,F)","ep(d,b8,al,e)","~(q,F)","eE(e)","ey()","eq()","er()","eM()","f7()","eL()","eW()","~(at,d)","d()","F(e,e)","@(@,q)","ff(e)","eS(d)","~(e,e,e)","f0<al>()","~(e,e)","eF(d,b8,al,e)","eI()","eX(e)","aK(d,b8,al,e)","aK(d)","eY(d,b8,al,e)","~(e)","aK(F)","@(q)","~(dG,e(e))","~(cn,e(e))","e(e,K?)","A(q)","dC(K{wasUnequipped:A})","K(K)","q(d5)","el(e)","ev(e)","eN(d,b8,al,e)","~(av,A)","~(d,e)","dY(d)","bS()","~(d,bS)","A(A,e)","A(F,F)","~(q,e,e)","~(e,av,q)","ez()","~(dj,bS)","ew()","k<ar<K?>>()","eV()","f3()","A(e)","eO()","k<ar<at>>()","e1()","dH()","e_()","eG()","dR()","fc()","A(K?)","eH()","f6()","f5(d)","q(cK)","q(cE)","aK(~())","e(aa,aa)","~(co)","q(b8)","~(q,E[E?])","A(aw)","eD()","~(q,E,e{total:e?})","A(bF)","A(ac)","e(e,ac)","A(cE)","~(q,dj)","A(bT)","eC(d)","~(a1?)","e(e,N)","D<d>(e)","~(al)","aK(ay)","A(aa)","e(@,@)","aK(a1,fb)","A(F)","k<ar<aN>>()","e(aO<e,a3>,aO<e,a3>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.O&&a.b(c.a)&&b.b(c.b),"4;":a=>b=>b instanceof A.W&&A.By(a,b.a)}}
A.zX(v.typeUniverse,JSON.parse('{"kF":"dg","dn":"dg","de":"dg","CC":"eQ","h4":{"A":[],"ag":[]},"h6":{"ag":[]},"h9":{"ay":[]},"dg":{"ay":[]},"r":{"D":["1"],"L":["1"],"ay":[],"k":["1"]},"k3":{"hE":[]},"pe":{"r":["1"],"D":["1"],"L":["1"],"ay":[],"k":["1"]},"b_":{"a5":["1"]},"dL":{"F":[],"al":[],"au":["al"]},"h5":{"F":[],"e":[],"al":[],"au":["al"],"ag":[]},"k4":{"F":[],"al":[],"au":["al"],"ag":[]},"dd":{"q":[],"au":["q"],"q3":[],"ag":[]},"df":{"am":[]},"d8":{"Y":["e"],"dp":["e"],"D":["e"],"L":["e"],"k":["e"],"Y.E":"e","dp.E":"e"},"L":{"k":["1"]},"aG":{"L":["1"],"k":["1"]},"hO":{"aG":["1"],"L":["1"],"k":["1"],"aG.E":"1","k.E":"1"},"c4":{"a5":["1"]},"dP":{"k":["2"],"k.E":"2"},"dF":{"dP":["1","2"],"L":["2"],"k":["2"],"k.E":"2"},"bn":{"a5":["2"]},"aP":{"aG":["2"],"L":["2"],"k":["2"],"aG.E":"2","k.E":"2"},"ak":{"k":["1"],"k.E":"1"},"cT":{"a5":["1"]},"dX":{"k":["1"],"k.E":"1"},"fQ":{"dX":["1"],"L":["1"],"k":["1"],"k.E":"1"},"hP":{"a5":["1"]},"hQ":{"k":["1"],"k.E":"1"},"hR":{"a5":["1"]},"hW":{"k":["1"],"k.E":"1"},"bp":{"a5":["1"]},"fd":{"Y":["1"],"dp":["1"],"D":["1"],"L":["1"],"k":["1"]},"cN":{"aG":["1"],"L":["1"],"k":["1"],"aG.E":"1","k.E":"1"},"O":{"fk":[],"cq":[]},"W":{"fl":[],"cq":[]},"es":{"bm":["1","2"]},"bQ":{"es":["1","2"],"bm":["1","2"]},"i8":{"k":["1"],"k.E":"1"},"i9":{"a5":["1"]},"dK":{"es":["1","2"],"bm":["1","2"]},"hp":{"cR":[],"am":[]},"k5":{"am":[]},"ll":{"am":[]},"io":{"fb":[]},"d7":{"dJ":[]},"j8":{"dJ":[]},"j9":{"dJ":[]},"lc":{"dJ":[]},"l7":{"dJ":[]},"em":{"dJ":[]},"kZ":{"am":[]},"c2":{"aD":["1","2"],"u8":["1","2"],"bm":["1","2"],"aD.K":"1","aD.V":"2"},"b2":{"L":["1"],"k":["1"],"k.E":"1"},"c3":{"a5":["1"]},"cI":{"L":["1"],"k":["1"],"k.E":"1"},"cH":{"a5":["1"]},"bl":{"L":["aO<1,2>"],"k":["aO<1,2>"],"k.E":"aO<1,2>"},"dN":{"a5":["aO<1,2>"]},"hb":{"c2":["1","2"],"aD":["1","2"],"u8":["1","2"],"bm":["1","2"],"aD.K":"1","aD.V":"2"},"fk":{"cq":[]},"fl":{"cq":[]},"h7":{"zk":[],"q3":[]},"ia":{"hy":[],"cl":[]},"lw":{"k":["hy"],"k.E":"hy"},"hY":{"a5":["hy"]},"l8":{"cl":[]},"mx":{"k":["cl"],"k.E":"cl"},"my":{"a5":["cl"]},"eQ":{"ay":[],"ag":[]},"hl":{"ay":[]},"kp":{"ay":[],"ag":[]},"eR":{"bK":["1"],"ay":[]},"hj":{"Y":["F"],"D":["F"],"bK":["F"],"L":["F"],"ay":[],"k":["F"],"aC":["F"]},"hk":{"Y":["e"],"D":["e"],"bK":["e"],"L":["e"],"ay":[],"k":["e"],"aC":["e"]},"kq":{"Y":["F"],"D":["F"],"bK":["F"],"L":["F"],"ay":[],"k":["F"],"aC":["F"],"ag":[],"Y.E":"F","aC.E":"F"},"kr":{"Y":["F"],"D":["F"],"bK":["F"],"L":["F"],"ay":[],"k":["F"],"aC":["F"],"ag":[],"Y.E":"F","aC.E":"F"},"ks":{"Y":["e"],"D":["e"],"bK":["e"],"L":["e"],"ay":[],"k":["e"],"aC":["e"],"ag":[],"Y.E":"e","aC.E":"e"},"kt":{"Y":["e"],"D":["e"],"bK":["e"],"L":["e"],"ay":[],"k":["e"],"aC":["e"],"ag":[],"Y.E":"e","aC.E":"e"},"ku":{"Y":["e"],"D":["e"],"bK":["e"],"L":["e"],"ay":[],"k":["e"],"aC":["e"],"ag":[],"Y.E":"e","aC.E":"e"},"kv":{"Y":["e"],"D":["e"],"bK":["e"],"L":["e"],"ay":[],"k":["e"],"aC":["e"],"ag":[],"Y.E":"e","aC.E":"e"},"kw":{"Y":["e"],"D":["e"],"bK":["e"],"L":["e"],"ay":[],"k":["e"],"aC":["e"],"ag":[],"Y.E":"e","aC.E":"e"},"hm":{"Y":["e"],"D":["e"],"bK":["e"],"L":["e"],"ay":[],"k":["e"],"aC":["e"],"ag":[],"Y.E":"e","aC.E":"e"},"kx":{"Y":["e"],"D":["e"],"bK":["e"],"L":["e"],"ay":[],"k":["e"],"aC":["e"],"ag":[],"Y.E":"e","aC.E":"e"},"lQ":{"am":[]},"ip":{"cR":[],"am":[]},"ah":{"a5":["1"]},"R":{"k":["1"],"k.E":"1"},"cw":{"am":[]},"bV":{"jI":["1"]},"iu":{"wi":[]},"mp":{"iu":[],"wi":[]},"f0":{"L":["1"],"k":["1"]},"cV":{"f9":["1"],"hH":["1"],"L":["1"],"k":["1"]},"cW":{"a5":["1"]},"Y":{"D":["1"],"L":["1"],"k":["1"]},"aD":{"bm":["1","2"]},"hd":{"f0":["1"],"aG":["1"],"L":["1"],"k":["1"],"aG.E":"1","k.E":"1"},"e5":{"a5":["1"]},"f9":{"hH":["1"],"L":["1"],"k":["1"]},"ik":{"f9":["1"],"hH":["1"],"L":["1"],"k":["1"]},"m8":{"aD":["q","@"],"bm":["q","@"],"aD.K":"q","aD.V":"@"},"m9":{"aG":["q"],"L":["q"],"k":["q"],"aG.E":"q","k.E":"q"},"hc":{"am":[]},"k7":{"am":[]},"k6":{"jc":["a1?","q"]},"eu":{"au":["eu"]},"F":{"al":[],"au":["al"]},"e":{"al":[],"au":["al"]},"D":{"L":["1"],"k":["1"]},"al":{"au":["al"]},"hy":{"cl":[]},"hH":{"L":["1"],"k":["1"]},"q":{"au":["q"],"q3":[]},"iQ":{"am":[]},"cR":{"am":[]},"cg":{"am":[]},"f1":{"am":[]},"jX":{"am":[]},"hS":{"am":[]},"lk":{"am":[]},"dV":{"am":[]},"jd":{"am":[]},"kB":{"am":[]},"hK":{"am":[]},"mz":{"fb":[]},"dW":{"zr":[]},"m7":{"ue":[]},"mn":{"ue":[]},"jK":{"yt":[]},"jw":{"V":[],"a3":[]},"jA":{"V":[],"a3":[]},"jD":{"G":[]},"ki":{"G":[]},"lr":{"f2":[]},"iV":{"V":[],"a3":[]},"j3":{"V":[],"a3":[]},"jf":{"V":[],"a3":[]},"jp":{"V":[],"a3":[]},"jx":{"cQ":[],"a3":[]},"jy":{"V":[],"a3":[]},"jG":{"V":[],"a3":[]},"jN":{"V":[],"a3":[]},"jO":{"V":[],"a3":[]},"jU":{"cQ":[],"a3":[]},"jW":{"V":[],"a3":[]},"ka":{"V":[],"a3":[]},"kc":{"V":[],"a3":[]},"kj":{"V":[],"a3":[]},"kN":{"V":[],"a3":[]},"l_":{"V":[],"a3":[]},"l1":{"V":[],"a3":[]},"l6":{"a3":[]},"iO":{"f2":[]},"lf":{"V":[],"a3":[]},"lu":{"V":[],"a3":[]},"lv":{"V":[],"a3":[]},"iT":{"cA":[],"a3":[]},"iU":{"G":[]},"ja":{"cA":[],"a3":[]},"jb":{"G":[]},"l4":{"cA":[],"a3":[]},"l5":{"G":[]},"ls":{"cQ":[],"a3":[]},"iW":{"G":[]},"j_":{"G":[]},"eG":{"G":[]},"eE":{"G":[]},"eX":{"G":[]},"el":{"G":[]},"ev":{"G":[]},"f3":{"G":[]},"fL":{"G":[]},"ew":{"G":[]},"ez":{"G":[]},"eo":{"G":[]},"ep":{"G":[]},"eF":{"G":[]},"eY":{"G":[]},"ff":{"G":[]},"eN":{"G":[]},"j2":{"G":[]},"kG":{"G":[]},"eD":{"G":[]},"eC":{"G":[]},"jC":{"G":[]},"eH":{"G":[]},"jS":{"G":[]},"eI":{"G":[]},"jV":{"G":[]},"eO":{"G":[]},"kh":{"eB":[]},"kk":{"G":[]},"eV":{"G":[]},"kH":{"G":[]},"iN":{"G":[]},"f6":{"G":[]},"f5":{"G":[]},"kR":{"G":[]},"kQ":{"G":[]},"l2":{"G":[]},"fc":{"G":[]},"eS":{"G":[]},"eT":{"G":[]},"mg":{"G":[]},"jo":{"bU":[],"aF":[]},"jF":{"bU":[],"aF":[]},"jH":{"fN":[]},"m6":{"bu":[]},"mA":{"bu":[]},"aI":{"bu":[]},"hZ":{"bu":[]},"mf":{"bu":[]},"bz":{"bu":[]},"lE":{"dU":[]},"ad":{"dU":[]},"ih":{"dU":[]},"lx":{"dU":[]},"bs":{"ba":[]},"fI":{"ba":[]},"d9":{"ba":[]},"jP":{"ba":[]},"h_":{"ba":[]},"bR":{"ba":[]},"b3":{"ba":[]},"bM":{"ba":[]},"bx":{"ba":[]},"jv":{"bU":[],"aF":[]},"jz":{"bU":[],"aF":[]},"kM":{"bU":[],"aF":[]},"l0":{"bU":[],"aF":[]},"d5":{"af":[],"aF":[],"au":["af"]},"iP":{"af":[],"aF":[],"au":["af"]},"iX":{"af":[],"aF":[],"au":["af"]},"iY":{"af":[],"aF":[],"au":["af"]},"hh":{"af":[],"aF":[],"au":["af"]},"iS":{"af":[],"aF":[],"au":["af"]},"iZ":{"af":[],"aF":[],"au":["af"]},"k9":{"af":[],"aF":[],"au":["af"]},"l3":{"af":[],"aF":[],"au":["af"]},"l9":{"af":[],"aF":[],"au":["af"]},"lt":{"af":[],"aF":[],"au":["af"]},"eq":{"bg":[]},"er":{"bg":[]},"ey":{"bg":[]},"eL":{"bg":[]},"eM":{"bg":[]},"eW":{"bg":[]},"f7":{"bg":[]},"kY":{"bg":[]},"jE":{"G":[]},"iR":{"G":[]},"k_":{"G":[]},"kE":{"G":[]},"jn":{"G":[]},"jq":{"G":[]},"lj":{"G":[]},"lm":{"G":[]},"ke":{"G":[]},"lg":{"G":[]},"lh":{"G":[]},"lq":{"G":[]},"kz":{"G":[]},"j7":{"G":[]},"kU":{"G":[]},"bF":{"dm":[]},"hA":{"c_":[]},"fZ":{"c_":[]},"fK":{"c_":[]},"hs":{"c_":[]},"dE":{"c_":[]},"fW":{"c_":[]},"hr":{"c_":[]},"lp":{"hT":[]},"f_":{"hT":[]},"aH":{"dm":[]},"lo":{"k":["d"],"k.E":"d"},"aS":{"dD":[]},"kW":{"dD":[]},"c7":{"dD":[]},"dI":{"dD":[]},"ax":{"bF":[],"dm":[]},"bU":{"aF":[]},"hu":{"f2":[]},"af":{"aF":[],"au":["af"]},"co":{"bb":["e"]},"bb":{"bb.T":"1"},"hM":{"co":[],"bb":["e"],"bb.T":"e"},"fE":{"co":[],"bb":["e"],"bb.T":"e"},"hV":{"co":[],"bb":["e"],"bb.T":"e"},"h1":{"co":[],"bb":["e"],"bb.T":"e"},"eA":{"eJ":[],"k":["K"],"k.E":"K"},"bS":{"eJ":[],"k":["K"],"k.E":"K"},"K":{"dm":[],"au":["K"]},"aa":{"bF":[],"dm":[]},"j4":{"G":[]},"ch":{"eP":[]},"cx":{"eP":[]},"cv":{"eP":[]},"kP":{"ba":[]},"kn":{"eB":[]},"mt":{"eB":[]},"iL":{"t":["l"],"t.T":"l"},"fH":{"aw":[]},"jg":{"aw":[]},"fO":{"aw":[]},"fS":{"aw":[]},"cC":{"aw":[]},"jQ":{"aw":[]},"jT":{"aw":[]},"k0":{"aw":[]},"kg":{"aw":[]},"kC":{"aw":[]},"ld":{"aw":[]},"li":{"aw":[]},"fV":{"t":["l"],"t.T":"l"},"jl":{"t":["l"]},"fD":{"t":["l"],"t.T":"l"},"kA":{"t":["l"],"t.T":"l"},"fY":{"t":["l"],"t.T":"l"},"hf":{"t":["l"],"t.T":"l"},"lb":{"t":["l"],"t.T":"l"},"hU":{"t":["l"],"t.T":"l"},"h0":{"t":["l"],"t.T":"l"},"jr":{"cF":[],"t":["l"],"t.T":"l"},"cF":{"t":["l"]},"k2":{"cF":[],"t":["l"],"t.T":"l"},"kl":{"cF":[],"t":["l"],"t.T":"l"},"db":{"b1":[],"t":["l"],"t.T":"l"},"dH":{"b1":[],"t":["l"],"t.T":"l"},"h2":{"b1":[],"t":["l"],"t.T":"l"},"b1":{"t":["l"]},"i_":{"cX":[]},"i1":{"cX":[]},"ii":{"cX":[]},"fm":{"cX":[]},"dR":{"b1":[],"t":["l"],"t.T":"l"},"mk":{"b1":[],"t":["l"]},"kK":{"b1":[],"t":["l"],"t.T":"l"},"kL":{"b1":[],"t":["l"],"t.T":"l"},"hG":{"b1":[],"t":["l"],"t.T":"l"},"e_":{"b1":[],"t":["l"],"t.T":"l"},"e0":{"t":["l"]},"cU":{"t":["l"]},"i7":{"t":["l"],"t.T":"l"},"i6":{"cU":[],"t":["l"]},"m0":{"cU":[],"t":["l"],"t.T":"l"},"m_":{"cU":[],"t":["l"],"t.T":"l"},"i0":{"t":["l"],"t.T":"l"},"im":{"t":["l"],"t.T":"l"},"il":{"cU":[],"t":["l"],"t.T":"l"},"fh":{"t":["l"],"t.T":"l"},"e1":{"b1":[],"t":["l"],"t.T":"l"},"jL":{"t":["l"],"t.T":"l"},"kf":{"t":["l"],"t.T":"l"},"ky":{"t":["l"],"t.T":"l"},"ko":{"et":[]},"f8":{"et":[]},"fM":{"t":["l"],"t.T":"l"},"fU":{"t":["l"],"t.T":"l"},"fX":{"t":["l"],"t.T":"l"},"kI":{"t":["l"]},"hF":{"t":["l"],"t.T":"l"},"hD":{"t":["l"],"t.T":"l"},"hX":{"t":["l"],"t.T":"l"},"cr":{"t":["l"]},"mH":{"cr":["aN"],"t":["l"],"t.T":"l","cr.T":"aN"},"mI":{"cr":["at"],"t":["l"],"t.T":"l","cr.T":"at"},"aT":{"dl":[]},"kX":{"hz":[],"dl":[]},"hz":{"dl":[]},"a8":{"k":["1"],"k.E":"1"},"j6":{"k":["d"],"k.E":"d"},"lJ":{"a5":["d"]},"av":{"d":[]},"mc":{"a5":["d"]},"Z":{"k":["d"],"k.E":"d"},"cM":{"a5":["d"]},"i2":{"hL":["1"]},"lO":{"i2":["1"],"hL":["1"]},"i3":{"zq":["1"]},"yH":{"D":["e"],"L":["e"],"k":["e"]},"zz":{"D":["e"],"L":["e"],"k":["e"]},"zy":{"D":["e"],"L":["e"],"k":["e"]},"yF":{"D":["e"],"L":["e"],"k":["e"]},"zw":{"D":["e"],"L":["e"],"k":["e"]},"yG":{"D":["e"],"L":["e"],"k":["e"]},"zx":{"D":["e"],"L":["e"],"k":["e"]},"yD":{"D":["F"],"L":["F"],"k":["F"]},"yE":{"D":["F"],"L":["F"],"k":["F"]}}'))
A.zW(v.typeUniverse,JSON.parse('{"L":1,"fd":1,"eR":1,"ik":1,"je":2,"kD":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",g:"max must be in range 0 < max \u2264 2^32, was ",f:"{1} [don't|doesn't] have room for {the 2} and {2 he} drops to the ground."}
var t=(function rtii(){var s=A.ap
return{fD:s("G"),lz:s("V"),fw:s("d4"),Y:s("G()"),bj:s("G(d)"),f0:s("bF"),L:s("ce"),R:s("ek"),dx:s("d5"),g_:s("bg"),k5:s("a8<fJ>"),bG:s("a8<X>"),o:s("a8<dT>"),lr:s("a8<dY>"),b:s("a8<A>"),z:s("a8<e>"),hE:s("a8<bF?>"),gy:s("a8<bg?>"),cY:s("a8<X?>"),eJ:s("a8<A?>"),aY:s("b_<d>"),n:s("cw"),fV:s("d6"),P:s("at"),nA:s("ci<eU>"),r:s("ci<d>"),cI:s("a9"),oC:s("fJ"),gS:s("d8"),aZ:s("E"),jF:s("aM"),bP:s("au<@>"),p1:s("bQ<q,q>"),cs:s("eu"),j:s("av"),ln:s("cA"),iZ:s("bu"),ox:s("aw"),gt:s("L<@>"),h:s("dG"),fz:s("am"),gY:s("dJ"),hB:s("jJ"),v:s("X"),V:s("ax"),lJ:s("cE"),er:s("dc"),Z:s("b8"),fb:s("l"),C:s("bS"),W:s("K"),j5:s("b1()"),q:s("aN"),D:s("k<K>"),bq:s("k<q>"),cX:s("k<d>"),e7:s("k<@>"),eI:s("r<a3>"),iA:s("r<G>"),p5:s("r<bF>"),o_:s("r<ce>"),c4:s("r<fG>"),dr:s("r<bg>"),da:s("r<b7>"),kt:s("r<d6>"),fO:s("r<at>"),bZ:s("r<a9>"),bk:s("r<E>"),E:s("r<aM>"),c8:s("r<c_>"),eR:s("r<et>"),x:s("r<aB>"),oO:s("r<ex>"),T:s("r<av>"),f8:s("r<bu>"),pl:s("r<aw>"),bI:s("r<jt>"),mO:s("r<X>"),fJ:s("r<f>"),di:s("r<dc>"),o0:s("r<b8>"),f_:s("r<cF>"),I:s("r<K>"),hm:s("r<c1>"),fv:s("r<eK>"),G:s("r<D<d>>"),ic:s("r<bm<q,a1>>"),kU:s("r<hi>"),lE:s("r<aa>"),a_:s("r<ba>"),hL:s("r<bU>"),dF:s("r<+(q,e)>"),b9:s("r<+(d,K)>"),d3:s("r<+(K?,b7)>"),aP:s("r<+(q,e,q,b1()?)>"),bx:s("r<+(q,e,q,~())>"),hY:s("r<bL>"),gp:s("r<c5<at>>"),aG:s("r<c5<aN>>"),d4:s("r<bw<at>>"),mQ:s("r<bw<aN>>"),oW:s("r<ac>"),iO:s("r<di>"),jp:s("r<t<l>>"),hC:s("r<af>"),aC:s("r<dU>"),s:s("r<q>"),H:s("r<N>"),J:s("r<dZ>"),l:s("r<d>"),cz:s("r<ly>"),lv:s("r<i4>"),hw:s("r<ig>"),n9:s("r<cX>"),mS:s("r<mr>"),gk:s("r<F>"),dG:s("r<@>"),t:s("r<e>"),nK:s("r<f0<eU>?>"),c:s("r<f0<d>?>"),it:s("r<e(at,at)>"),m2:s("r<e(aN,aN)>"),w:s("h6"),_:s("ay"),dY:s("de"),dX:s("bK<@>"),d2:s("eK"),hl:s("k8<l>"),hA:s("D<bg>"),aH:s("D<b7>"),ev:s("D<E>"),hy:s("D<aB>"),jP:s("D<ex>"),du:s("D<av>"),af:s("D<X>"),aa:s("D<K>"),eF:s("D<eK>"),ew:s("D<bm<q,a1>>"),kz:s("D<ba>"),ez:s("D<a1>"),m1:s("D<bU>"),p0:s("D<+(E,E)>"),ig:s("D<+(q,e)>"),m:s("D<q>"),nB:s("D<q>(e)"),p:s("D<dZ>"),A:s("D<d>"),pa:s("D<ig>"),la:s("D<cX>"),d:s("D<@>"),jX:s("D<d?>"),dW:s("D<e?>"),aI:s("bT"),cB:s("aO<e,a3>"),ea:s("bm<q,@>"),av:s("bm<@,@>"),de:s("bm<e,a3>"),gQ:s("aP<q,q>"),B:s("aa"),d0:s("ba"),g:s("aK"),K:s("a1"),mh:s("bb<F>"),jo:s("f0<al>"),ho:s("cK"),lZ:s("CP"),aK:s("+()"),lF:s("+(av,e)"),lu:s("hy"),pj:s("bL"),mF:s("hA"),b_:s("f4<ek>"),gf:s("dT"),hb:s("c5<at>"),i0:s("c5<aN>"),o9:s("bw<at>"),o5:s("bw<aN>"),cv:s("ar<at>"),bB:s("ar<aN>"),ax:s("ar<K?>"),m7:s("ac"),jK:s("di"),eE:s("t<l>"),c3:s("dj"),M:s("af"),gl:s("fb"),X:s("cn"),N:s("q"),po:s("q(cl)"),gL:s("q(q)"),bW:s("cQ"),fc:s("N"),jh:s("dY"),ns:s("dZ"),aJ:s("ag"),do:s("cR"),cx:s("dn"),iR:s("fe<l>"),u:s("d"),e0:s("ak<av>"),bC:s("hW<K>"),k:s("bp<K>"),gX:s("lO<ay>"),j_:s("bV<@>"),h0:s("bV<e>"),ak:s("cU"),fC:s("y"),nP:s("ml"),oc:s("R<d4>"),kX:s("R<aF>"),mY:s("R<a9>"),oP:s("R<aM>"),cm:s("R<aB>"),kF:s("R<ar<at>>"),jE:s("R<ar<aN>>"),d8:s("R<ar<K?>>"),e:s("R<q>"),e6:s("R<d>"),y:s("A"),ca:s("A(av)"),iW:s("A(a1)"),mN:s("A(d)"),i:s("F"),oF:s("F(e)"),oH:s("@"),df:s("@()"),mq:s("@(a1)"),ng:s("@(a1,fb)"),jJ:s("@(d)"),S:s("e"),Q:s("e(e)"),e9:s("bF?"),aT:s("bg?"),gK:s("jI<aK>?"),n3:s("X?"),U:s("K?"),kf:s("b1()?"),mU:s("ay?"),b8:s("D<aM>?"),fm:s("D<q>?"),lH:s("D<@>?"),dZ:s("bm<q,@>?"),aL:s("aa?"),iD:s("a1?"),jv:s("q?"),jt:s("q(cl)?"),n7:s("d?"),F:s("i5<@,@>?"),nF:s("md?"),fU:s("A?"),hD:s("A(d)?"),dz:s("F?"),hM:s("F(e)?"),aV:s("e?"),lg:s("e(e)?"),ae:s("al?"),c5:s("~()?"),lT:s("~(cf)?"),cZ:s("al"),ef:s("~"),O:s("~()"),kc:s("~(cf)"),or:s("~(at)"),f:s("~(K)"),mH:s("~(K,d)"),lL:s("~(aa)"),lc:s("~(q,@)"),a:s("~(e,e,X)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.hv=J.jZ.prototype
B.a=J.r.prototype
B.c8=J.h4.prototype
B.c=J.h5.prototype
B.e=J.dL.prototype
B.i=J.dd.prototype
B.hy=J.de.prototype
B.hz=J.h9.prototype
B.cm=J.kF.prototype
B.bx=J.dn.prototype
B.bz=new A.d4(null,!1,!0)
B.a4=new A.d4(null,!0,!1)
B.n=new A.d4(null,!0,!0)
B.a7=new A.iM(0,"left")
B.al=new A.iM(2,"right")
B.bA=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.cD=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.cI=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.cE=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.cH=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.cG=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.cF=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.bB=function(hooks) { return hooks; }

B.aZ=new A.k6()
B.cJ=new A.kB()
B.am=new A.qx()
B.cK=new A.lp()
B.cL=new A.m7()
B.ad=new A.mp()
B.cM=new A.mz()
B.z=new A.E(0,0,0)
B.cN=new A.E(0,64,255)
B.B=new A.E(0,64,39)
B.ar=new A.E(110,32,13)
B.d=new A.E(125,119,128)
B.o=new A.E(125,144,179)
B.af=new A.E(129,217,117)
B.K=new A.E(129,231,235)
B.A=new A.E(131,158,13)
B.k=new A.E(142,82,55)
B.a3=new A.E(15,130,148)
B.O=new A.E(173,88,219)
B.N=new A.E(179,74,4)
B.H=new A.E(189,144,108)
B.C=new A.E(193,181,199)
B.bC=new A.E(200,130,0)
B.cO=new A.E(201,166,255)
B.m=new A.E(204,35,57)
B.u=new A.E(208,195,214)
B.t=new A.E(20,19,31)
B.cP=new A.E(20,20,35)
B.F=new A.E(21,87,194)
B.bD=new A.E(220,0,0)
B.h=new A.E(222,156,33)
B.p=new A.E(22,117,38)
B.a5=new A.E(255,122,105)
B.D=new A.E(255,238,168)
B.aI=new A.E(255,255,255)
B.E=new A.E(26,46,150)
B.av=new A.E(36,10,5)
B.cR=new A.E(40,40,55)
B.l=new A.E(41,45,66)
B.cS=new A.E(42,36,43)
B.cT=new A.E(51,48,28)
B.an=new A.E(56,16,125)
B.I=new A.E(64,163,229)
B.cU=new A.E(6,49,79)
B.j=new A.E(72,64,74)
B.f=new A.E(72,82,115)
B.w=new A.E(77,29,21)
B.bE=new A.E(80,80,95)
B.a0=new A.E(84,0,39)
B.W=new A.E(86,30,138)
B.ae=new A.E(99,87,7)
B.as=new A.ex(0,"exit")
B.aw=new A.ex(1,"item")
B.r=new A.av(0,0,0,"none")
B.L=new A.av(0,1,5,"s")
B.M=new A.av(0,-1,1,"n")
B.P=new A.av(1,0,3,"e")
B.Q=new A.av(1,1,4,"se")
B.R=new A.av(1,-1,2,"ne")
B.S=new A.av(-1,0,7,"w")
B.T=new A.av(-1,1,6,"sw")
B.U=new A.av(-1,-1,8,"nw")
B.b_=new A.da("Archery")
B.ax=new A.da("Body")
B.ag=new A.da("Matter")
B.b0=new A.da("Weaponry")
B.bF=new A.aJ("awaken")
B.bG=new A.aJ("bolt")
B.bH=new A.aJ("cone")
B.bI=new A.aJ("detect")
B.bJ=new A.aJ("die")
B.b1=new A.aJ("frighten")
B.bK=new A.aJ("gold")
B.bL=new A.aJ("heal")
B.bM=new A.aJ("hit")
B.bN=new A.aJ("howl")
B.bO=new A.aJ("knockBack")
B.bP=new A.aJ("map")
B.bQ=new A.aJ("openBarrel")
B.bR=new A.aJ("perceive")
B.bS=new A.aJ("polymorph")
B.bT=new A.aJ("slash")
B.b2=new A.aJ("spawn")
B.bU=new A.aJ("stab")
B.bV=new A.aJ("teleport")
B.bW=new A.aJ("toss")
B.bX=new A.aJ("wind")
B.b3=new A.X(32,B.aI,B.z)
B.hs=new A.jR(0,"melee")
B.ht=new A.jR(2,"toss")
B.G=new A.l("cancel")
B.hu=new A.l("castSpell")
B.b4=new A.l("drop")
B.ab=new A.l("e")
B.b5=new A.l("editSpells")
B.b6=new A.l("equip")
B.b7=new A.l("explore")
B.aJ=new A.l("fire")
B.b8=new A.l("fireE")
B.b9=new A.l("fireN")
B.c0=new A.l("fireNE")
B.c1=new A.l("fireNW")
B.ba=new A.l("fireS")
B.c2=new A.l("fireSE")
B.c3=new A.l("fireSW")
B.bb=new A.l("fireW")
B.bc=new A.l("forfeit")
B.aK=new A.l("help")
B.bd=new A.l("heroInfo")
B.be=new A.l("inventory")
B.X=new A.l("n")
B.az=new A.l("ne")
B.aA=new A.l("nw")
B.a1=new A.l("ok")
B.bf=new A.l("operate")
B.bg=new A.l("pickUp")
B.bh=new A.l("quit")
B.aB=new A.l("rest")
B.aL=new A.l("runE")
B.ao=new A.l("runN")
B.bi=new A.l("runNE")
B.bj=new A.l("runNW")
B.ap=new A.l("runS")
B.bk=new A.l("runSE")
B.bl=new A.l("runSW")
B.aM=new A.l("runW")
B.Y=new A.l("s")
B.aC=new A.l("se")
B.bm=new A.l("spendExperience")
B.aD=new A.l("sw")
B.bn=new A.l("swap")
B.bo=new A.l("toss")
B.bp=new A.l("use")
B.bq=new A.l("useAbility")
B.a8=new A.l("w")
B.c4=new A.l("wizard")
B.J=new A.c1("On Ground",0)
B.c5=new A.c1("Crucible",8)
B.Z=new A.c1("Equipment",0)
B.c6=new A.c1("Home",26)
B.v=new A.c1("Inventory",24)
B.c7=new A.h3(0,"normal")
B.hw=new A.h3(1,"good")
B.hx=new A.h3(2,"great")
B.hA=new A.pg(null)
B.hB=new A.ph(null)
B.hC=s([2,12,22],t.t)
B.aE=s(["hand","hand","ring","necklace","body","cloak","helm","gloves","boots"],t.s)
B.hD=s(["Return to main menu?"],t.s)
B.aN=s([9650,94],t.t)
B.iD=new A.bL(1,"n")
B.iE=new A.bL(2,"ne")
B.iF=new A.bL(3,"e")
B.iG=new A.bL(4,"se")
B.iH=new A.bL(5,"s")
B.iI=new A.bL(6,"sw")
B.iJ=new A.bL(7,"w")
B.iK=new A.bL(8,"nw")
B.hG=s([B.iD,B.iE,B.iF,B.iG,B.iH,B.iI,B.iJ,B.iK],t.hY)
B.ah=s(["Merek","Carac","Ulric","Tybalt","Borin","Sadon","Terrowin","Rowan","Forthwind","Althalos","Fendrel","Brom","Hadrian","Crewe","Bolbec","Fenwick","Mowbray","Drake","Bryce","Leofrick","Letholdus","Lief","Barda","Rulf","Robin","Gavin","Terrin","Jarin","Cedric","Gavin","Josef","Janshai","Doran","Asher","Quinn","Xalvador","Favian","Destrian","Dain","Millicent","Alys","Ayleth","Anastas","Alianor","Cedany","Ellyn","Helewys","Malkyn","Peronell","Thea","Gloriana","Arabella","Hildegard","Brunhild","Adelaide","Beatrix","Emeline","Mirabelle","Helena","Guinevere","Isolde","Maerwynn","Catrain","Gussalen","Enndolynn","Krea","Dimia","Aleida"],t.s)
B.c9=s([0,2,5,10,18,26,38],t.t)
B.ca=s(["_____ _____                 ____                     ____","\\ . / \\  ./                 \\ .|                     \\  |"," | |   |.|                   | |                      |.|"," |.|___| |  ____  ____ ____  |.| __     ____  ___  __ | |  ___"," |::___::|  \\:::\\ \\::| \\::|  |:|/::\\   /::::\\ \\::|/::\\|:| /::/"," |x|   |x|  __ \\x| |x|  |x|  |x|  \\x\\ |x|__)x| |x| \\x||x|/x/"," |x|   |x| /xx\\|x| |x|  |x|  |x|   |x||x|\\xxx| |x|    |xxxx\\"," |X|   |X||X(__|X| |X\\__|X|  |X|__/XX||X|____  |X|    |X| \\X\\"," |X|   |X| \\XXX/\\X\\ \\XX/|XX\\/XX/\\XXX/  \\XXXX/ /XXX\\  /XXX\\ \\X\\"," |X|   |X|","_|X|   |X|_","\\XX|   |XX/"," \\X|   |X/","  \\|   |/"],t.s)
B.br=s([B.v,B.Z],t.hm)
B.x=new A.bT(0,"message")
B.a_=new A.bT(1,"error")
B.i0=new A.bT(2,"quest")
B.cf=new A.bT(3,"gain")
B.i1=new A.bT(4,"help")
B.cg=new A.bT(5,"debug")
B.hI=s([B.x,B.a_,B.i0,B.cf,B.i1,B.cg],A.ap("r<bT>"))
B.hJ=s(["Are you sure you want to forfeit the level?","You will lose all items and experience gained in the dungeon."],t.s)
B.hK=s(["LLLLL LLLLL                 LLLL                     LLLL","ERRRE ERRRE                 ERRE                     ERRE"," ERE   ERE                   ERE                      ERE"," ERELLLERE  LLLL  LLLL LLLL  ERE LL     LLLL  LLL  LL ERE  LLL"," ERREEERRE  ERRRE ERRE ERRE  EREERRL   LRRRRL ERRLLRRLERE LRRE"," EOE   EOE  LL EOE EOE  EOE  EOE  EOL EOELLEOE EOE EOEEOELOE"," EGE   EGE LGGEEGE EGE  EGE  EGE   EGEEGEEGGGE EGE    EGGGGL"," EYE   EYEEYELLEYE EYLLLEYE  EYELLLYYEEYELLLL  EYE    EYE EYL"," EYE   EYE EYYYEEYL EYYEEYYLLYYEEYYYE  EYYYYE LYYYL  LYYYL EYL"," EYE   EYE","EEYE   EYEE","EYYE   EYYE"," EYE   EYE","  EE   EE"],t.s)
B.bs=s(["Stairs","Permanent"],t.s)
B.hL=s(["Stairs descend into darkness.","How far down shall you venture?"],t.s)
B.cb=s([B.R,B.Q,B.T,B.U],t.T)
B.hV=s([],t.bZ)
B.ce=s([],t.E)
B.hR=s([],t.x)
B.bt=s([],t.I)
B.cc=s([],t.hL)
B.hT=s([],A.ap("r<c5<0&>>"))
B.hU=s([],A.ap("r<bw<0&>>"))
B.hS=s([],t.s)
B.hQ=s([],t.l)
B.cd=s([],t.lv)
B.hP=s([],t.mS)
B.hW=s([B.J],t.hm)
B.at=s([B.M,B.P,B.L,B.S],t.T)
B.iT=new A.ac("","Items",null,0,!1)
B.j0=new A.ac("b","Inventory",B.be,66,!1)
B.j1=new A.ac("u","Use item",B.bp,85,!1)
B.iX=new A.ac("e","Equip / unequip",B.b6,69,!1)
B.iW=new A.ac("d","Drop item",B.b4,68,!1)
B.j9=new A.ac("t","Throw item",B.bo,84,!1)
B.iS=new A.ac("g","Pick up",B.bg,71,!1)
B.ja=new A.ac("x","Swap to last unequipped",B.bn,88,!1)
B.j_=new A.ac("","Actions",null,0,!1)
B.iV=new A.ac("Shift-H","Explore",B.b7,72,!0)
B.j6=new A.ac("q","Stairs: walk to / take exit",B.bh,81,!1)
B.j3=new A.ac("c","Operate door, chest",B.bf,67,!1)
B.j7=new A.ac("l","Rest one turn",B.a1,76,!1)
B.iU=new A.ac("Shift-L","Rest until healed",B.aB,76,!0)
B.jb=new A.ac("a","Use ability",B.bq,65,!1)
B.j4=new A.ac("Alt-L","Fire last ability",B.aJ,0,!1)
B.iR=new A.ac("","Hero",null,0,!1)
B.iY=new A.ac("Shift-A","Hero info",B.bd,65,!0)
B.iZ=new A.ac("Shift-S","Abilities",B.b5,83,!0)
B.j8=new A.ac("Shift-E","Spend experience",B.bm,69,!0)
B.j2=new A.ac("","Game",null,0,!1)
B.j5=new A.ac("h","Help",B.aK,72,!1)
B.iQ=new A.ac("Shift-F","Forfeit level",B.bc,70,!0)
B.hX=s([B.iT,B.j0,B.j1,B.iX,B.iW,B.j9,B.iS,B.ja,B.j_,B.iV,B.j6,B.j3,B.j7,B.iU,B.jb,B.j4,B.iR,B.iY,B.iZ,B.j8,B.j2,B.j5,B.iQ],t.oW)
B.hY=s(["hand","ring","necklace","body","cloak","helm","gloves","boots"],t.s)
B.aO=s([15,20,24,30,40,50,60,80,100,120,150,180,240],t.t)
B.aP=s([B.l,B.f,B.o,B.u,B.H,B.k,B.ar,B.w,B.D,B.h,B.N,B.af,B.ae,B.A,B.p,B.B,B.a5,B.m,B.a0,B.O,B.W,B.an,B.K,B.I,B.F,B.E],t.bk)
B.cV=new A.aB(10,"Your luck protects you!")
B.hZ=s([B.cV],t.x)
B.i_=s(["When you die, you lose everything since the last time you went up or down a set of stairs (or left a shop).","When you die, that's it. Your hero is gone forever. This is the most challenging way to play, but often the most rewarding as well."],t.s)
B.iv=new A.O(B.h,B.ar)
B.im=new A.O(B.D,B.N)
B.ih=new A.O(B.k,B.m)
B.il=new A.O(B.m,B.w)
B.aQ=s([B.iv,B.im,B.ih,B.il],A.ap("r<+(E,E)>"))
B.aj=new A.cn("Strength",0,"strength")
B.ac=new A.cn("Agility",1,"agility")
B.aq=new A.cn("Vitality",2,"vitality")
B.a2=new A.cn("Intellect",3,"intellect")
B.aR=s([B.aj,B.ac,B.aq,B.a2],A.ap("r<cn>"))
B.a6=s([B.M,B.R,B.P,B.Q,B.L,B.T,B.S,B.U],t.T)
B.ia={"Quick Reference":0,"Getting Started":1}
B.hf=new A.f(B.f,"Quick Reference")
B.bY=new A.f(B.f,"\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550")
B.b=new A.f(B.d,"")
B.fd=new A.f(B.f,"Movement")
B.ay=new A.f(B.f,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500")
B.eI=new A.f(B.d,"There are two sets of direction keys:")
B.d6=new A.f(B.d,"They can be combined with modifier keys like so:")
B.cY=new A.f(B.f,"Other commands")
B.hH=s([B.hf,B.bY,B.b,B.b,B.fd,B.ay,B.eI,B.b,B.d6,B.b,B.b,B.b,B.cY,B.ay],t.fJ)
B.dV=new A.f(B.f,"Getting Started")
B.fn=new A.f(B.d,"TODO: This is all horrendously out of date.")
B.ew=new A.f(B.d,"Welcome! If you are here, you must have an adventurous")
B.f1=new A.f(B.d,"spirit. Not only because you wish to venture into")
B.dK=new A.f(B.d,"dungeons filled with beasts and untolds horrors, but")
B.hm=new A.f(B.d,"because you have the fortitude to try out a game while")
B.f_=new A.f(B.d,"it's still under development. A caution for the unwary:")
B.dH=new A.f(B.d,"The game is not done, or balanced, or complete, or")
B.h8=new A.f(B.d,"bug-free. It may destroy your savefiles or steal your")
B.eO=new A.f(B.d,"boyfriend!")
B.hq=new A.f(B.f,"Input")
B.ez=new A.f(B.d,"Hauberk is played using your keyboard, the fixie of")
B.h0=new A.f(B.d,"input devices. A lot of input is directional. Arrow keys")
B.dG=new A.f(B.d,"work for that, but don't support diagonal moves.")
B.dO=new A.f(B.d,"Instead, you're better off hitting num lock and using")
B.fV=new A.f(B.d,"the numpad on your keyboard if you have one:")
B.bZ=new A.f(B.d,".---.---.---.          .---.---.---.")
B.eQ=new A.f(B.d,"| 7 | 8 | 9 |          | \\ | ^ | / |")
B.c_=new A.f(B.d,"|---+---+---|          |---+---+---|")
B.fT=new A.f(B.d,"| 4 | 5 | 6 | maps to: |<- |   | ->|")
B.eo=new A.f(B.d,"| 1 | 2 | 3 |          | / | v | \\ |")
B.dS=new A.f(B.d,"'---'---'---'          '---'---'---'")
B.fa=new A.f(B.d,"If you don't have a numpad, but do have a US layout")
B.dY=new A.f(B.d,"keyboard, you can also use:")
B.dF=new A.f(B.d,"| I | O | P |          | \\ | ^ | / |")
B.de=new A.f(B.d,"'---+---+---+          '---+---+---+")
B.eG=new A.f(B.d," | K | L | ; | maps to: |<- |   | ->|")
B.eE=new A.f(B.d," '---+---+---+          '---+---+---+")
B.fB=new A.f(B.d,"  | , | . | / |          | / | v | \\ |")
B.fK=new A.f(B.d,"  '---'---'---'          '---'---'---'")
B.fC=new A.f(B.d,'The 5 and L buttons in the middle are "stand". They\'re')
B.eV=new A.f(B.d,'also used like an "OK" button to accept a selection on')
B.d1=new A.f(B.d,"menu screens. Escape is used to go back in menu screens")
B.fL=new A.f(B.d,"and exit dialogs.")
B.eh=new A.f(B.d,"(Note that all keys are shown uppercase here but are")
B.fU=new A.f(B.d,'typed lower case. L means a lowercase "l". An')
B.dn=new A.f(B.d,"uppercase one will be Shift-L.)")
B.fr=new A.f(B.d,"At some point, I plan to add support for user-defined")
B.f9=new A.f(B.d,"keybindings, but they aren't there yet.")
B.eN=new A.f(B.f,"A Hero Awakens")
B.d2=new A.f(B.d,"To play, you need an avatar in the game world to live")
B.dv=new A.f(B.d,"(and die!) vicariously through. On the Main Menu Screen,")
B.f0=new A.f(B.d,"type N to create a new hero (or heroine, the game is")
B.fs=new A.f(B.d,"gender-blind). Enter a name, or use the default")
B.f3=new A.f(B.d,"suggested one and hit Enter.")
B.f6=new A.f(B.d,"There isn't much to specify at character creation time")
B.ey=new A.f(B.d,"right now, but eventually you'll pick a class, race, pet")
B.dX=new A.f(B.d,"peeves, favorite sandwich, etc. Currently, warrior is")
B.fM=new A.f(B.d,"the only class.")
B.f5=new A.f(B.d,"Your hero is saved in your browser's local storage. This")
B.ho=new A.f(B.d,"means you can return to the game later and your hero")
B.dd=new A.f(B.d,"will still be there. If you switch browsers, though,")
B.h2=new A.f(B.d,"your heroes won't be in the new browser. Heroes are")
B.hg=new A.f(B.d,"saved every time you leave a level, or exit your home.")
B.fu=new A.f(B.d,"The game is not saved while you're in the middle of a")
B.eZ=new A.f(B.d,"level! If you close your browser in the middle of")
B.dp=new A.f(B.d,"playing because your boss walked in, your progress in")
B.el=new A.f(B.d,"the level will be lost. That's what you get for slacking")
B.e8=new A.f(B.d,"off at work.")
B.h4=new A.f(B.d,"Because the game is still in active development, new")
B.hk=new A.f(B.d,"releases may not be savefile compatible with previous")
B.fW=new A.f(B.d,"ones. Your heroes may get deleted if they don't work")
B.dI=new A.f(B.d,"with the latest code. Sorry.")
B.eu=new A.f(B.f,"The hero screen")
B.fq=new A.f(B.d,"Once you create or choose a hero, you're taken to the")
B.ha=new A.f(B.d,'hero screen. This is sort of like the "town" in other')
B.dx=new A.f(B.d,"games. It's the safe place where you can tinker with")
B.ep=new A.f(B.d,"your gear and enter the game.")
B.dP=new A.f(B.f,"Your home")
B.h5=new A.f(B.d,"From the hero screen, press H to enter your home. This")
B.fE=new A.f(B.d,"gives you a place where you can stash loot you don't")
B.dN=new A.f(B.d,"want to carry around. You can also move items between")
B.d5=new A.f(B.d,"your inventory (stuff you carry in your backpack) and")
B.d7=new A.f(B.d,"your equipment (weapons and armor you are currently")
B.eL=new A.f(B.d,"wearing or holding).")
B.dE=new A.f(B.f,"The crucible")
B.ej=new A.f(B.d,"The most interesting facet of your home is the crucible.")
B.eM=new A.f(B.d,"This is the place where you can craft\u2014make new items")
B.eC=new A.f(B.d,"from existing ones. You place items into the crucible")
B.dl=new A.f(B.d,"just like you can your home or inventory. However, it")
B.eD=new A.f(B.d,"only allows items that are part of a recipe.")
B.e5=new A.f(B.d,"A recipe is a set of items that can be turned into")
B.cW=new A.f(B.d,"something else. When you place all of the required items")
B.f8=new A.f(B.d,"for a recipe in the crucible, it will tell you. Press")
B.dA=new A.f(B.d,"Space and it will magically transmute them into")
B.hl=new A.f(B.d,"something new.")
B.fQ=new A.f(B.d,"The set of recipes is still highly in flux, but try")
B.d0=new A.f(B.d,"dropping a few healing potions in there.")
B.hc=new A.f(B.f,"The Dungeon Awaits")
B.fF=new A.f(B.d,"Now that your hero is alive and ready, it's time to slay")
B.ev=new A.f(B.d,"some beasts.")
B.f4=new A.f(B.f,"Areas and levels")
B.e0=new A.f(B.d,"Unlike other roguelikes, Hauberk doesn't have a single")
B.hb=new A.f(B.d,"monolithic dungeon. Instead, there are a number of")
B.fP=new A.f(B.d,'areas. Each area has its own "flavor"\u2014it\'s own kinds')
B.fk=new A.f(B.d,"of monsters, difficulty, appearance, etc. An area is in")
B.eJ=new A.f(B.d,"turn divided into a series of levels, each more")
B.dz=new A.f(B.d,"difficult than the last.")
B.dh=new A.f(B.d,"From the hero screen, you can select which area and")
B.en=new A.f(B.d,"level you want to play. You can only enter an area if")
B.fz=new A.f(B.d,"you've beaten at least one level from the previous area.")
B.dJ=new A.f(B.d,"Likewise, you must beat a level to unlock the next one.")
B.em=new A.f(B.d,"Since you just created a hero, you can only play the")
B.dq=new A.f(B.d,"first level of the Friendly Forest, so just type L to")
B.fb=new A.f(B.d,"enter it. Later, when you unlock stuff, use the")
B.hr=new A.f(B.d,"directional keys to select an area and level. You can")
B.h_=new A.f(B.d,"replay a level as many times as you want.")
B.dZ=new A.f(B.f,"Quests, victory, and defeat")
B.eU=new A.f(B.d,"Every level is randomly generated (of course) and")
B.ff=new A.f(B.d,"populated with monsters and treasure. Each level also")
B.fH=new A.f(B.d,"has a quest. This is a goal you must fulfill before")
B.ds=new A.f(B.d,"you're allowed to leave the level. After completing the")
B.eX=new A.f(B.d,"quest, type Q to leave the level and return to the")
B.dW=new A.f(B.d,"safety of your home. All experience and items gained in")
B.dg=new A.f(B.d,"the level will be saved henceforth and forever more.")
B.ec=new A.f(B.d,"If you die in the level, you lose everything you gained")
B.er=new A.f(B.d,"while in that level. It isn't quite permadeath, but it's")
B.e1=new A.f(B.d,"pretty damn annoying to lose that experience and")
B.d9=new A.f(B.d,"whatever hot loot you picked up.")
B.fX=new A.f(B.d,"If you want to give up and leave the level before")
B.dM=new A.f(B.d,"completing the quest, you can forfeit by typing Shift-F.")
B.fc=new A.f(B.d,"Like dying, doing this sacrifices anything you've gained")
B.e6=new A.f(B.d,"since entering the level.")
B.dy=new A.f(B.f,"Navigating the level")
B.eg=new A.f(B.d,"Your avatar in the game is represented by a @. Floor")
B.cZ=new A.f(B.d,"tiles are usually ., and impassible barriers and walls")
B.h6=new A.f(B.d,"look like #, or other hopefully obvious solid looking")
B.eW=new A.f(B.d,"tiles.")
B.hh=new A.f(B.d,"You walk around using the directional keys. Pressing the")
B.ef=new A.f(B.d,"stand key (5 or L) makes you stand still for a turn.")
B.cX=new A.f(B.d,"That's useful to let a monster take a step closer so you")
B.es=new A.f(B.d,"can attack the next turn.")
B.fZ=new A.f(B.d,"Hold down Shift and press a direction to run in that")
B.dB=new A.f(B.d,"direction. You will repeatedly walk in that direction")
B.e7=new A.f(B.d,"until disturbed by reaching an obstacle, a fork in the")
B.eT=new A.f(B.d,"path, or seeing a monster. When not in combat, running")
B.eq=new A.f(B.d,"is the most user-friendly way to get from point A to")
B.dC=new A.f(B.d,"point B.")
B.eR=new A.f(B.d,"Closed doors look like +. You can open them (which takes")
B.d_=new A.f(B.d,"a turn) by simply walking into them. An open door looks")
B.d4=new A.f(B.d,"like -. You can close a door by pressing C while")
B.hn=new A.f(B.d,"standing next to one.")
B.fR=new A.f(B.f,"Combat!")
B.eb=new A.f(B.d,"Monsters in the game are represented using letters. You")
B.e2=new A.f(B.d,"attack by trying to walk into the tile where a monster")
B.h7=new A.f(B.d,"is standing. On the right side of the screen you can see")
B.fl=new A.f(B.d,"your health along with some of the nearby monsters. Try")
B.fv=new A.f(B.d,"to get theirs to zero before yours does!")
B.fp=new A.f(B.d,"When you kill a monster, you are granted some experience")
B.fG=new A.f(B.d,"points. Earn enough of those, and your hero will")
B.dL=new A.f(B.d,"increase in experience level. That increases your")
B.fY=new A.f(B.d,"maximum health and does some other good stuff.")
B.fh=new A.f(B.d,"Meanwhile, monsters will be attacking you. You are")
B.eH=new A.f(B.d,"outnumbered, so try not to let them surround you.")
B.dD=new A.f(B.d,"Attacking from the safety of a narrow corridor helps.")
B.da=new A.f(B.f,"Exploring")
B.ea=new A.f(B.d,"Shift-H explores: the hero walks to the nearest unexplored")
B.he=new A.f(B.d,"spot, one step per turn, opening doors on the way. It")
B.fA=new A.f(B.d,"stops when a monster or a new item comes into view, on")
B.dm=new A.f(B.d,"any new message, or when you press a key.")
B.hp=new A.f(B.d,"Q on the stairs leaves the level. Anywhere else, Q walks")
B.dk=new A.f(B.d,"to the nearest known stairs (in town: the dungeon")
B.dQ=new A.f(B.d,"entrance) and stops there; press Q again to take them.")
B.e_=new A.f(B.f,"Resting")
B.h1=new A.f(B.d,"After a skirmish, your hero has likely lost some health.")
B.dt=new A.f(B.d,"That can be regained by imbibing magic potions, but")
B.ft=new A.f(B.d,"those are in short supply. Instead, they'll have to")
B.dU=new A.f(B.d,"rest.")
B.fD=new A.f(B.d,"Resting requires food, which you automatically discover")
B.fo=new A.f(B.d,"as you explore the level. Every turn that you stand")
B.fi=new A.f(B.d,"still consumes a bit of food and regains a point of")
B.fJ=new A.f(B.d,"health. Instead of mashing down the stand key, if you")
B.eA=new A.f(B.d,"press Shift-Stand, you will repeatedly rest until you")
B.db=new A.f(B.d,"run out of food, fully regain their health, or are")
B.fj=new A.f(B.d,"disturbed by a nearby monster.")
B.fS=new A.f(B.d,"If you don't have any food, resting accomplishes")
B.f2=new A.f(B.d,"nothing. To get food, you must explore new parts of the")
B.du=new A.f(B.d,"level. No resting on your laurels or wandering through")
B.eP=new A.f(B.d,"familiar passages!")
B.f7=new A.f(B.f,"Loot!")
B.e4=new A.f(B.d,"While the ridding the world of an evil beast is its own")
B.dc=new A.f(B.d,"reward, it's not the only reward. Many monsters drop")
B.d3=new A.f(B.d,"treasure, and you'll find some laying on the ground as")
B.e9=new A.f(B.d,"well. Different levels and monsters tend to drop")
B.hd=new A.f(B.d,"different stuff, so explore (and murder) widely.")
B.eK=new A.f(B.d,"Items are represented using punctuation characters.")
B.hi=new A.f(B.d,"Potions are !, scrolls are ?, etc. You can pick up an")
B.fN=new A.f(B.d,"item off the ground by standing on top of it and")
B.dj=new A.f(B.d,'pressing G, for "get".')
B.eY=new A.f(B.d,"If there are multiple items in the same tile, that picks")
B.et=new A.f(B.d,"up the top one. Press G repeatedly to pick them all up.")
B.hj=new A.f(B.d,"Eventually, I'll add a menu to let you pick which one")
B.fx=new A.f(B.d,"you want.")
B.dr=new A.f(B.d,"Many items can be used. Potions can be quaffed, scrolls")
B.dT=new A.f(B.d,"read, wands... uh... waved around? To use an item, press")
B.fe=new A.f(B.d,"U to bring up the item selection screen. In addition to")
B.fI=new A.f(B.d,"your inventory and equipment, you can also use items")
B.fw=new A.f(B.d,"that are laying on the ground under you. You don't have")
B.ei=new A.f(B.d,"to pick them up first. (And not picking them up first")
B.e3=new A.f(B.d,"saves you a turn. Useful in the heat of battle!)")
B.df=new A.f(B.d,"Pressing Tab on the item screen cycles through these")
B.ex=new A.f(B.d,"three views.")
B.eB=new A.f(B.d,"Type the letter next to an item to use it. If the item")
B.fy=new A.f(B.d,'has an active "use" like a potion, this will perform')
B.eF=new A.f(B.d,'it. "Using" a piece of equipment equips it. Using a')
B.fO=new A.f(B.d,"piece of equipment that you're already wearing unequips")
B.ee=new A.f(B.d,"it. Remember that equipment must be worn to get any")
B.h9=new A.f(B.d,"advantage! Carrying around a sword in your backpack")
B.dw=new A.f(B.d,"doesn't do you much good.")
B.fg=new A.f(B.d,"If you want to discard an item, press D, then select the")
B.di=new A.f(B.d,"item. It will drop onto the ground. It may gaze back at")
B.ed=new A.f(B.d,"you forlornly, wondering why it wasn't good enough and")
B.h3=new A.f(B.d,"why you love the other items in your inventory more.")
B.dR=new A.f(B.d,"A more entertaining and often more useful way to rid")
B.eS=new A.f(B.d,"yourself of an item is to throw it, which is done by")
B.fm=new A.f(B.d,"pressing T. Throwing an item at a monster will often")
B.d8=new A.f(B.d,"harm it, and some items do fun and exciting things like")
B.ek=new A.f(B.d,"explode when lobbed at an unsuspecting beastie.")
B.hF=s([B.dV,B.bY,B.fn,B.b,B.b,B.b,B.ew,B.b,B.f1,B.b,B.dK,B.b,B.hm,B.b,B.f_,B.b,B.dH,B.b,B.h8,B.b,B.eO,B.b,B.b,B.b,B.hq,B.ay,B.ez,B.b,B.h0,B.b,B.dG,B.b,B.dO,B.b,B.fV,B.b,B.b,B.b,B.bZ,B.eQ,B.c_,B.fT,B.c_,B.eo,B.dS,B.b,B.b,B.fa,B.b,B.dY,B.b,B.b,B.b,B.bZ,B.dF,B.de,B.eG,B.eE,B.fB,B.fK,B.b,B.b,B.fC,B.b,B.eV,B.b,B.d1,B.b,B.fL,B.b,B.b,B.b,B.eh,B.b,B.fU,B.b,B.dn,B.b,B.b,B.b,B.fr,B.b,B.f9,B.b,B.b,B.b,B.eN,B.ay,B.d2,B.b,B.dv,B.b,B.f0,B.b,B.fs,B.b,B.f3,B.b,B.b,B.b,B.f6,B.b,B.ey,B.b,B.dX,B.b,B.fM,B.b,B.b,B.b,B.f5,B.b,B.ho,B.b,B.dd,B.b,B.h2,B.b,B.hg,B.b,B.b,B.b,B.fu,B.b,B.eZ,B.b,B.dp,B.b,B.el,B.b,B.e8,B.b,B.b,B.b,B.h4,B.b,B.hk,B.b,B.fW,B.b,B.dI,B.b,B.b,B.b,B.eu,B.b,B.fq,B.b,B.ha,B.b,B.dx,B.b,B.ep,B.b,B.b,B.b,B.dP,B.b,B.h5,B.b,B.fE,B.b,B.dN,B.b,B.d5,B.b,B.d7,B.b,B.eL,B.b,B.b,B.b,B.dE,B.b,B.ej,B.b,B.eM,B.b,B.eC,B.b,B.dl,B.b,B.eD,B.b,B.b,B.b,B.e5,B.b,B.cW,B.b,B.f8,B.b,B.dA,B.b,B.hl,B.b,B.b,B.b,B.fQ,B.b,B.d0,B.b,B.b,B.b,B.hc,B.ay,B.fF,B.b,B.ev,B.b,B.b,B.b,B.f4,B.b,B.e0,B.b,B.hb,B.b,B.fP,B.b,B.fk,B.b,B.eJ,B.b,B.dz,B.b,B.b,B.b,B.dh,B.b,B.en,B.b,B.fz,B.b,B.dJ,B.b,B.b,B.b,B.em,B.b,B.dq,B.b,B.fb,B.b,B.hr,B.b,B.h_,B.b,B.b,B.b,B.dZ,B.b,B.eU,B.b,B.ff,B.b,B.fH,B.b,B.ds,B.b,B.eX,B.b,B.dW,B.b,B.dg,B.b,B.b,B.b,B.ec,B.b,B.er,B.b,B.e1,B.b,B.d9,B.b,B.b,B.b,B.fX,B.b,B.dM,B.b,B.fc,B.b,B.e6,B.b,B.b,B.b,B.dy,B.b,B.eg,B.b,B.cZ,B.b,B.h6,B.b,B.eW,B.b,B.b,B.b,B.hh,B.b,B.ef,B.b,B.cX,B.b,B.es,B.b,B.b,B.b,B.fZ,B.b,B.dB,B.b,B.e7,B.b,B.eT,B.b,B.eq,B.b,B.dC,B.b,B.b,B.b,B.eR,B.b,B.d_,B.b,B.d4,B.b,B.hn,B.b,B.b,B.b,B.fR,B.b,B.eb,B.b,B.e2,B.b,B.h7,B.b,B.fl,B.b,B.fv,B.b,B.b,B.b,B.fp,B.b,B.fG,B.b,B.dL,B.b,B.fY,B.b,B.b,B.b,B.fh,B.b,B.eH,B.b,B.dD,B.b,B.b,B.b,B.da,B.b,B.ea,B.b,B.he,B.b,B.fA,B.b,B.dm,B.b,B.hp,B.b,B.dk,B.b,B.dQ,B.b,B.b,B.b,B.e_,B.b,B.h1,B.b,B.dt,B.b,B.ft,B.b,B.dU,B.b,B.b,B.b,B.fD,B.b,B.fo,B.b,B.fi,B.b,B.fJ,B.b,B.eA,B.b,B.db,B.b,B.fj,B.b,B.b,B.b,B.fS,B.b,B.f2,B.b,B.du,B.b,B.eP,B.b,B.b,B.b,B.f7,B.b,B.e4,B.b,B.dc,B.b,B.d3,B.b,B.e9,B.b,B.hd,B.b,B.b,B.b,B.eK,B.b,B.hi,B.b,B.fN,B.b,B.dj,B.b,B.b,B.b,B.eY,B.b,B.et,B.b,B.hj,B.b,B.fx,B.b,B.b,B.b,B.dr,B.b,B.dT,B.b,B.fe,B.b,B.fI,B.b,B.fw,B.b,B.ei,B.b,B.e3,B.b,B.df,B.b,B.ex,B.b,B.b,B.b,B.eB,B.b,B.fy,B.b,B.eF,B.b,B.fO,B.b,B.ee,B.b,B.h9,B.b,B.dw,B.b,B.b,B.b,B.fg,B.b,B.di,B.b,B.ed,B.b,B.h3,B.b,B.b,B.b,B.dR,B.b,B.eS,B.b,B.fm,B.b,B.d8,B.b,B.ek,B.b],t.fJ)
B.aS=new A.bQ(B.ia,[B.hH,B.hF],A.ap("bQ<q,D<f>>"))
B.i7={Y:0,N:1,"`":2}
B.ch=new A.bQ(B.i7,["Yes","No","No"],t.p1)
B.aF=new A.dQ(0,"clumsy")
B.a9=new A.dQ(1,"insult")
B.cj=new A.dQ(2,"screech")
B.ck=new A.dQ(3,"hiss")
B.hO=s(["{1} forget[s] what {1 he} was doing.","{1} lurch[es] around.","{1} stumble[s] awkwardly.","{1} trip[s] over {1 his} own feet!"],t.s)
B.hN=s(["{1} insult[s] {2 his} mother!","{1} jeer[s] at {2}!","{1} mock[s] {2} mercilessly!","{1} make[s] faces at {2}!","{1} laugh[s] at {2}!","{1} sneer[s] at {2}!"],t.s)
B.hE=s(["{1} screech[es] at {2}!","{1} taunt[s] {2}!","{1} cackle[s] at {2}!"],t.s)
B.hM=s(["{1} hiss[es] at {2}!","{1} spit[s] at {2}!"],t.s)
B.i2=new A.dK([B.aF,B.hO,B.a9,B.hN,B.cj,B.hE,B.ck,B.hM],A.ap("dK<dQ,D<q>>"))
B.i8={L:0,E:1,R:2,O:3,G:4,Y:5}
B.cQ=new A.E(232,200,21)
B.i3=new A.bQ(B.i8,[B.d,B.j,B.m,B.N,B.h,B.cQ],A.ap("bQ<q,E>"))
B.i4=new A.dK([9786,1,9787,2,9829,3,9830,4,9827,5,9824,6,8226,7,9688,8,9675,9,9689,10,9794,11,9792,12,9834,13,9835,14,9788,15,9658,16,9668,17,8597,18,8252,19,182,20,167,21,9644,22,8616,23,8593,24,8595,25,8594,26,8592,27,8735,28,8596,29,9650,30,9660,31,8962,127,199,128,252,129,233,130,226,131,228,132,224,133,229,134,231,135,234,136,235,137,232,138,239,139,238,140,236,141,196,142,197,143,201,144,230,145,198,146,244,147,246,148,242,149,251,150,249,151,255,152,214,153,220,154,162,155,163,156,165,157,8359,158,402,159,225,160,237,161,243,162,250,163,241,164,209,165,170,166,186,167,191,168,8976,169,172,170,189,171,188,172,161,173,171,174,187,175,9617,176,9618,177,9619,178,9474,179,9508,180,9569,181,9570,182,9558,183,9557,184,9571,185,9553,186,9559,187,9565,188,9564,189,9563,190,9488,191,9492,192,9524,193,9516,194,9500,195,9472,196,9532,197,9566,198,9567,199,9562,200,9556,201,9577,202,9574,203,9568,204,9552,205,9580,206,9575,207,9576,208,9572,209,9573,210,9561,211,9560,212,9554,213,9555,214,9579,215,9578,216,9496,217,9484,218,9608,219,9604,220,9612,221,9616,222,9600,223,945,224,223,225,915,226,960,227,931,228,963,229,181,230,964,231,934,232,920,233,937,234,948,235,8734,236,966,237,949,238,8745,239,8801,240,177,241,8805,242,8804,243,8992,244,8993,245,247,246,8776,247,176,248,8729,249,183,250,8730,251,8319,252,178,253,9632,254],A.ap("dK<e,e>"))
B.i9={}
B.ci=new A.bQ(B.i9,[],t.p1)
B.ib={"A-Z Del":0}
B.i5=new A.bQ(B.ib,["Edit name"],t.p1)
B.ic={OK:0,"\u2195\u2194":1,"`":2}
B.i6=new A.bQ(B.ic,["Enter dungeon","Change depth","Cancel"],t.p1)
B.V=new A.ho(0,"normal")
B.cl=new A.ho(1,"proper")
B.aG=new A.ho(3,"mass")
B.cn=new A.dS("you","you","your",0,"you")
B.aH=new A.dS("he","him","his",2,"he")
B.id=new A.dS("they","them","their",4,"they")
B.co=new A.dS("she","her","her",1,"she")
B.y=new A.dS("it","it","its",3,"it")
B.cp=new A.O(10,15)
B.cq=new A.O(16,21)
B.ie=new A.O("spear","Spear Mastery")
B.ig=new A.O(1,1)
B.ii=new A.O(5,8)
B.cr=new A.O(6,9)
B.ij=new A.O(7,10)
B.ik=new A.O(9,16)
B.io=new A.O(0.002,0.8)
B.ip=new A.O("whip","Whip Mastery")
B.iq=new A.O("Name","Enter a name for your new hero.")
B.ir=new A.O(B.C,B.d)
B.is=new A.O(B.j,B.j)
B.it=new A.O("dagger","Knife Fighting")
B.iu=new A.O("club","Bludgeoning")
B.iw=new A.O("axe","Axe Mastery")
B.ix=new A.O("You haven't learned this skill.",B.j)
B.iy=new A.O(B.h,B.C)
B.iz=new A.O("sword","Swordfighting")
B.iA=new A.O(0.1,1)
B.iB=new A.W(["i",73,"Inspect",null])
B.ak=new A.d(0,0)
B.iC=new A.Z(B.ak,B.ak)
B.cs=new A.bL(0,"everywhere")
B.bu=new A.hB(0,"rectangular")
B.iL=new A.hB(1,"octagonal")
B.iM=new A.hB(2,"any")
B.iN=new A.hC(0,"small")
B.iO=new A.hC(1,"medium")
B.iP=new A.hC(2,"large")
B.jc=new A.fa(0,"anywhere")
B.ai=new A.fa(1,"open")
B.aT=new A.fa(2,"wall")
B.bv=new A.fa(3,"corner")
B.jd=new A.dk(0,"none")
B.aa=new A.dk(1,"mirrorHorizontal")
B.je=new A.dk(2,"mirrorVertical")
B.au=new A.dk(3,"mirrorBoth")
B.q=new A.dk(4,"rotate90")
B.jf=new A.dk(5,"rotate180")
B.jg=new A.rg(1,"oldest")
B.cy=new A.by("shop 1")
B.cx=new A.by("shop 2")
B.cw=new A.by("shop 3")
B.cv=new A.by("shop 4")
B.cu=new A.by("shop 5")
B.ct=new A.by("shop 6")
B.jh=new A.by("shop 7")
B.ji=new A.by("shop 8")
B.jj=new A.by("shop 9")
B.bw=new A.by("dungeon")
B.aU=new A.by("exit")
B.cz=new A.by("home")
B.jk=A.ca("C_")
B.jl=A.ca("C0")
B.jm=A.ca("yD")
B.jn=A.ca("yE")
B.jo=A.ca("yF")
B.jp=A.ca("yG")
B.jq=A.ca("yH")
B.jr=A.ca("a1")
B.js=A.ca("zw")
B.jt=A.ca("zx")
B.ju=A.ca("zy")
B.jv=A.ca("zz")
B.aV=new A.d(0,1)
B.aW=new A.d(0,-1)
B.aX=new A.d(1,0)
B.aY=new A.d(-1,0)
B.cA=new A.fg(0,"uninitialized")
B.by=new A.fg(1,"stats")
B.cB=new A.fg(2,"resistances")
B.cC=new A.fg(3,"all")})();(function staticFields(){$.rR=null
$.bP=A.a([],A.ap("r<a1>"))
$.w_=null
$.q7=0
$.ud=A.Az()
$.vr=null
$.vq=null
$.x0=null
$.wS=null
$.x7=null
$.tm=null
$.tv=null
$.uE=null
$.rY=A.a([],A.ap("r<D<a1>?>"))
$.fs=null
$.iw=null
$.ix=null
$.ux=!1
$.b5=B.ad
$.ct=null
$.wE=null
$.cs=A.e2()
$.c9=null
$.AC=A.a(["\u250c\u2510","\u255b\u2558","\u255e\u2561"],t.s)
$.AD=A.a(["\u250c\u2558","\u2510\u255b","\u2500\u2550"],t.s)
$.AN=A.a(["\u250c\u2510\u255b\u2558","\u2500\u2502\u2550\u2502"],t.s)
$.aU=A.e2()
$.h=null
$.be=null
$.iv=null
$.vJ=0
$.vk=0
$.hx=A.a([],A.ap("r<kS>"))
$.hI=A.C(t.N,t.c3)
$.c8=null
$.ai=A.e2()
$.u1=!1
$.nx=!1
$.u2=!1
$.ji=A.C(t.B,A.ap("fj"))
$.ns=null
$.bi=0
$.en=A.a([],A.ap("r<j1>"))
$.vD=function(){var s=t.l
return A.a([A.a([B.aW,B.aX],s),A.a([B.aX,B.aW],s),A.a([B.aX,B.aV],s),A.a([B.aV,B.aX],s),A.a([B.aV,B.aY],s),A.a([B.aY,B.aV],s),A.a([B.aY,B.aW],s),A.a([B.aW,B.aY],s)],t.G)}()
$.vv=A.a([B.u,B.D,B.h,B.ae,B.cT],t.bk)
$.um=A.a([B.K,B.I,B.O,B.u],t.bk)
$.bv=A.a([],t.f_)
$.mN=0
$.x9=!1
$.fq=A.a([],A.ap("r<le>"))
$.x=A.e2()
$.bY=A.e2()
$.fp=A.b9(t.B)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"C4","xg",()=>A.tq("_$dart_dartClosure"))
s($,"C3","tL",()=>A.tq("_$dart_dartClosure_dartJSInterop"))
s($,"Er","y9",()=>A.a([new J.k3()],A.ap("r<hE>")))
s($,"E8","xY",()=>A.cS(A.rr({
toString:function(){return"$receiver$"}})))
s($,"E9","xZ",()=>A.cS(A.rr({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Ea","y_",()=>A.cS(A.rr(null)))
s($,"Eb","y0",()=>A.cS(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"Ee","y3",()=>A.cS(A.rr(void 0)))
s($,"Ef","y4",()=>A.cS(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"Ed","y2",()=>A.cS(A.wh(null)))
s($,"Ec","y1",()=>A.cS(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"Eh","y6",()=>A.cS(A.wh(void 0)))
s($,"Eg","y5",()=>A.cS(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"Ej","vd",()=>A.zB())
s($,"Ep","n7",()=>A.uH(B.jr))
s($,"CX","v1",()=>{A.zg()
return $.q7})
s($,"BN","tK",()=>{var r=A.rs("axe"),q=A.rs("club"),p=A.rs("spear"),o=A.rs("whip"),n=$.uL(),m=A.ap("r<d5>"),l=A.a([n],m),k=A.a([n],m),j=$.uO(),i=A.a([j],m),h=$.uM(),g=A.a([h],m),f=$.uN(),e=A.a([f],m),d=A.a([f],m),c=A.a([j],m),b=$.uQ()
return A.a([new A.jw(),new A.jA(),new A.iT(r),new A.ja(q),new A.l4(p),new A.ls(o),new A.iV(l),new A.j3(k),new A.jf(i),new A.jp(g),new A.jx(e),new A.jy(d),new A.jG(c),new A.jN(A.a([b],m)),new A.jO(A.a([j,b],m)),new A.jU(A.a([j],m)),new A.jW(A.a([f],m)),new A.ka(A.a([h,f],m)),new A.kc(A.a([n],m)),new A.kj(A.a([h],m)),new A.kN(A.a([h],m)),new A.l_(A.a([h,b],m)),new A.l1(A.a([n],m)),new A.lf(A.a([$.uP()],m)),new A.lu(A.a([b],m)),new A.lv(A.a([b],m))],t.eI)})
s($,"C2","eh",()=>{var r=null,q=A.ap("da"),p=t.S,o=t.hL
return A.a([A.u5("Adventurer","No special birthright, training, or inclination is needed to become an adventurer, simply the courage (or foolhardiness) to brave the wilds and live on one's wits. Adventurers are flexible and resourceful. They are masters of nothing, but able to learn a little of everything.",A.B([B.b_,5,B.ax,5,B.b0,5,B.ag,2],q,p),A.a([new A.jF()],o),A.a7("item",r,r)),A.u5("Barbarian","It's not that barbarians are stupid. Many are, in fact, quite intelligent. It's just that they apply most of that intelligence towards deciding which weapon is best suited for splitting a monster's head open.\n\nBarbarians rely on the might of their bodies and the reassuring heft of their weapons. While they aren't above using a little magic here and there, they're most comfortable when those supernatural forces are safely ensconced in a piece of familiar gear.",A.B([B.b_,1,B.ax,10,B.b0,5],q,p),A.a([new A.jo()],o),A.a7("weapon",r,r)),A.u5("Sorceror","While most rightly fear the awesome power and unpredictability of magic, sorcerors see it as a source of personal power and glory. Tapping magic in its raw elemental form, untethered to other objects or beings is the most dangerous form of spellcasting and most sorcerors have the scars to show for it. A small price to pay for those with the courage to tangle with the raw forces of the universe itself.",A.B([B.ax,3,B.ag,10],q,p),A.a([],o),A.a7("item",r,r))],A.ap("r<cE>"))})
s($,"C5","tM",()=>A.dh(A.ap("fN")))
s($,"C1","xf",()=>{var r=null
return A.S(r,r,r,r)})
s($,"Ek","y7",()=>{var r,q,p,o,n,m,l,k=null,j=$.vb(),i=A.S(j,k,k,A.a([$.iF(),$.tR()],t.J)),h=$.aY()
j=A.S(j,h,k,k)
r=A.S($.xV(),h,k,k)
q=$.iJ()
p=A.S(q,h,k,k)
o=A.S($.mR(),h,k,k)
n=A.S($.mS(),h,k,k)
m=A.S($.iI(),k,$.iG(),k)
l=$.iE()
return A.B(["I",i,"l",j,"P",r,"\u2248",p,"%",o,"&",n,"*",m,"=",A.S(l,k,q,k),"\u2261",A.S(l,h,k,k),"\u2022",A.S($.va(),k,q,k)],t.N,t.oC)})
s($,"Eq","y8",()=>{var r=null,q=t.J
return A.B(["?",A.S(r,r,r,r),".",A.S(r,$.aY(),r,r),"#",A.S(r,r,r,A.a([$.iF(),$.tR(),$.v6(),$.v7(),$.v8()],q)),"\u250c",A.S(r,r,$.n5(),r),"\u2500",A.S(r,r,$.n4(),r),"\u2510",A.S(r,r,$.n6(),r),"-",A.S(r,r,$.iH(),r),"\u2502",A.S(r,r,$.n3(),r),"\u2558",A.S(r,r,$.mZ(),r),"\u2550",A.S(r,r,$.mY(),r),"\u255b",A.S(r,r,$.n_(),r),"\u255e",A.S(r,r,$.n1(),r),"\u2564",A.S(r,r,$.n0(),r),"\u2561",A.S(r,r,$.n2(),r),"\u03c0",A.S(r,r,$.mQ(),r),"\u2248",A.S(r,r,$.iJ(),r),"'",A.S(r,r,r,A.a([$.iG(),$.iI()],q))],t.N,t.oC)})
s($,"C8","ei",()=>A.c0("air","Ai",1.2,new A.nS(),"",!1,null))
s($,"Cc","dw",()=>A.c0("earth","Ea",1.1,null,"",!1,null))
s($,"Cd","b6",()=>A.c0("fire","Fi",1.2,new A.nW(),"burns up",!0,new A.nX()))
s($,"Ci","d1",()=>A.c0("water","Wa",1.3,null,"",!1,null))
s($,"C7","dv",()=>A.c0("acid","Ac",1.4,null,"",!1,null))
s($,"Ca","cb",()=>A.c0("cold","Co",1.2,new A.nT(),"shatters",!1,new A.nU()))
s($,"Cf","dx",()=>A.c0("lightning","Ln",1.1,null,"",!1,null))
s($,"Cg","bB",()=>A.c0("poison","Po",2,new A.o_(),"",!1,new A.o0()))
s($,"Cb","d_",()=>A.c0("dark","Dk",1.5,new A.nV(),"",!1,null))
s($,"Ce","d0",()=>A.c0("light","Li",1.5,new A.nY(),"",!1,new A.nZ()))
s($,"Ch","dy",()=>A.c0("spirit","Sp",3,null,"",!1,null))
s($,"C9","fy",()=>A.a([$.az(),$.ei(),$.dw(),$.b6(),$.d1(),$.dv(),$.cb(),$.dx(),$.bB(),$.d_(),$.d0(),$.dy()],A.ap("r<dG>")))
s($,"BO","dt",()=>A.dh(t.R))
s($,"BP","du",()=>A.dh(t.R))
s($,"Eo","vg",()=>A.dh(A.ap("jB")))
s($,"Cq","bk",()=>A.dh(t.q))
s($,"Eu","yc",()=>A.kT("\\n\\s*"))
s($,"En","fC",()=>{var r=t.s
return A.B([$.ei(),A.a(["wind","buffets"],r),$.dw(),A.a(["soil","buries"],r),$.b6(),A.a(["flame","burns"],r),$.d1(),A.a(["water","blasts"],r),$.dv(),A.a(["acid","melts"],r),$.cb(),A.a(["ice","freezes"],r),$.dx(),A.a(["lightning","shocks"],r),$.bB(),A.a(["poison","chokes"],r),$.d_(),A.a(["darkness","crushes"],r),$.d0(),A.a(["light","sears"],r),$.dy(),A.a(["spirit","haunts"],r)],t.h,t.m)})
s($,"Cs","cc",()=>A.dh(t.P))
s($,"CO","tN",()=>A.kO("Fae","What can be said about the fae folk that is known to be true? Dimunitive and easily harmed, they survive by cloaking themselves in fables, tricks, and subterfuge. Quick to anger and quick to forgive, the fae live each moment as if it may be their last, bright-burning flames all too aware of how easily they may be snuffed out.",A.a([new A.jv(),new A.jz()],t.hL),A.B([B.aj,0.6,B.ac,1.6,B.aq,0.7,B.a2,1.1],t.X,t.i)))
s($,"CN","fz",()=>{var r=t.X,q=t.i,p=t.hL
return A.a([A.kO("Dwarf","It takes a certain kind of person to be willing to spend their life deep under the Earth, toiling away in darkness. Dwarves aren't just willing, but delight in it. Solid, impenetrable and somewhat dim, dwarves have much in common with the mines they love.",B.cc,A.B([B.aj,1.3,B.ac,0.6,B.aq,1.4,B.a2,0.7],r,q)),A.kO("Elf","There are few things elves are not good at, as any elf will be quick to inform you. Clever, quick on their feet, and surprisingly strong for how they look. Which is radiantly beautiful, naturally.",B.cc,A.B([B.aj,1.2,B.ac,1.3,B.aq,1,B.a2,1.2],r,q)),$.tN(),A.kO("Gnome","Gnomes are gentle, quiet folk, difficult to arouse to anger (unless you interrupt one while reading). Most live a life of the mind, seeking knowledge more than adventure. But this insatiable desire for the former, on many occasions, leads them into the jaws of the latter.",A.a([new A.l0()],p),A.B([B.aj,0.7,B.ac,0.8,B.aq,1,B.a2,1.5],r,q)),A.kO("Human","Humans excel at nothing, but nor are they particularly weak in any area. Most other races consider humans sort of like mice: pesky creatures who seem do little but breed, which they do with great devotion.",A.a([new A.kM()],p),A.B([B.aj,1,B.ac,1,B.aq,1,B.a2,1],r,q))],A.ap("r<cK>"))})
s($,"BQ","uL",()=>A.fF("Arcing",B.ag,"Cast spells of lightning."))
s($,"BR","uM",()=>A.fF("Earthshaping",B.ag,"Cast spells of earth."))
s($,"BS","uN",()=>A.fF("Fireweaving",B.ag,"Cast spells of fire."))
s($,"BT","uO",()=>A.fF("Icewinding",B.ag,"Cast spells of cold."))
s($,"BU","uP",()=>A.fF("Watercoursing",B.ag,"Cast spells of water."))
s($,"BV","uQ",()=>A.fF("Windchasing",B.ag,"Cast spells of air."))
s($,"BW","xe",()=>{var r=$.bi
$.bi=r+1
return new A.iP(r)})
s($,"BY","uS",()=>{var r=$.bi
$.bi=r+1
return new A.iS(r)})
s($,"BZ","uT",()=>{var r=$.bi
$.bi=r+1
return new A.iZ(r)})
s($,"CW","v0",()=>{var r=$.bi
$.bi=r+1
return new A.l3(r)})
s($,"Ei","vc",()=>{var r=$.bi
$.bi=r+1
return new A.lt(r)})
s($,"CV","v_",()=>{var r=$.xe(),q=$.bi,p=$.bi=q+1,o=$.bi=p+1,n=$.uS(),m=$.uT(),l=$.bi=o+1,k=$.v0()
$.bi=l+1
return A.a([r,new A.iX(q),new A.iY(p),n,m,new A.k9(o),k,new A.l9(l),$.vc(),$.uL(),$.uM(),$.uN(),$.uO(),$.uP(),$.uQ()],t.hC)})
s($,"CU","uZ",()=>{var r,q,p,o=A.C(t.N,t.M)
for(r=$.v_(),q=0;q<15;++q){p=r[q]
o.i(0,p.gM(),p)}return o})
s($,"BX","uR",()=>A.dh(A.ap("fG")))
s($,"CL","uX",()=>{var r=null
return A.q1(r,r,r,r)})
s($,"CJ","xw",()=>{var r=t.J,q=A.a([$.mV()],r)
r=A.a([$.iF()],r)
return A.q1($.mT(),q,$.mW(),r)})
s($,"CK","xx",()=>{var r=t.J,q=A.a([$.xI()],r)
r=A.a([$.tR()],r)
return A.q1($.v5(),q,null,r)})
s($,"CM","xy",()=>A.q1($.v4(),null,null,null))
s($,"CH","xu",()=>{var r=t.J
return A.B([$.dz(),A.a([$.iJ()],r),$.fA(),A.a([$.iE()],r)],t.ns,t.p)})
s($,"CI","xv",()=>A.a([$.v6(),$.v7(),$.v8()],t.J))
s($,"CR","mO",()=>A.zm(B.r))
s($,"CQ","tO",()=>A.w6($.d2()))
s($,"CS","xz",()=>A.w6($.bE()))
s($,"E2","fB",()=>A.H("unformed"," ",B.t,null).a4())
s($,"E3","dA",()=>A.H("unformed wet","\u2248",B.l,null).a4())
s($,"Dt","d2",()=>A.H("open","\xb7",B.j,null).a4())
s($,"DI","bE",()=>A.H("solid","\u2593",B.j,null).bx())
s($,"Dz","d3",()=>A.H("passage","\xb7",B.cS,null).a4())
s($,"Df","mU",()=>A.H("doorway","\u25cb",B.w,null).a4())
s($,"DJ","dz",()=>A.H("solid wet","\u2248",B.F,null).bx())
s($,"DA","fA",()=>A.H("wet passage","\u2261",B.w,null).a4())
s($,"Di","iF",()=>A.H("flagstone wall","\u2592",B.d,B.j).bx())
s($,"Do","tR",()=>A.H("granite wall","\u2592",B.f,B.l).bx())
s($,"Dk","v6",()=>A.H("granite","\u2593",B.f,B.l).hj(0,B.l,B.t).bx())
s($,"Dl","v7",()=>A.H("granite","\u2593",B.f,B.l).hj(0.2,B.l,B.t).bx())
s($,"Dm","v8",()=>A.H("granite","\u2593",B.f,B.l).hj(0.4,B.l,B.t).bx())
s($,"Dh","mV",()=>A.H("flagstone floor","\xb7",B.j,null).a4())
s($,"Dn","xI",()=>A.H("granite floor","\xb7",B.f,null).a4())
s($,"Dx","mW",()=>A.H("open door","\u25cb",B.k,B.av).cq(A.BG()).a4())
s($,"Db","mT",()=>A.H("closed door","\u25d9",B.k,B.av).cq(A.BJ()).jX())
s($,"Dy","xN",()=>A.H("open square door","\u2642",B.k,B.av).cq(A.BH()).a4())
s($,"Dc","v5",()=>A.H("closed square door","\u2640",B.k,B.av).cq(A.BK()).jX())
s($,"Du","xM",()=>A.H("open barred door","\u2642",B.d,B.f).cq(A.BF()).a4())
s($,"D8","v4",()=>A.H("closed barred door","\u266a",B.d,B.f).cq(A.BI()).cW($.U().ca(0,$.bC())))
s($,"D4","xD",()=>A.H("burnt floor","\u03c6",B.l,null).a4())
s($,"D5","xE",()=>A.H("burnt floor","\u03b5",B.l,null).a4())
s($,"DL","v9",()=>A.H("stairs","\u2261",B.u,B.f).c7(B.aU).a4())
s($,"D2","iE",()=>A.H("bridge","\u2261",B.k,B.av).a4())
s($,"Dj","tQ",()=>A.H("moss","\u2591",B.a3,null).eU(128).a4())
s($,"E6","iJ",()=>A.H("water","\u2248",B.F,B.E).ol(10,0.5,B.E,B.t).eU(32).cW($.U().ca(0,$.iD())))
s($,"DN","va",()=>A.H("stepping stone","\u2022",B.o,B.E).a4())
s($,"Dd","xF",()=>A.H("dirt","\xb7",B.w,null).a4())
s($,"De","xG",()=>A.H("dirt2","\u03c6",B.w,null).a4())
s($,"Dp","iG",()=>A.H("grass","\u2591",B.p,null).a4())
s($,"DZ","iI",()=>A.H("tall grass","\u221a",B.p,null).a4())
s($,"E_","tU",()=>A.H("tree","\u25b2",B.p,B.B).bx())
s($,"E0","tV",()=>A.H("tree","\u2660",B.p,B.B).bx())
s($,"E1","tW",()=>A.H("tree","\u2663",B.p,B.B).bx())
s($,"Dw","tT",()=>A.H("open chest","\u2320",B.k,null).aM())
s($,"Da","mS",()=>A.H("closed chest","\u2321",B.k,null).cq(new A.rm()).aM())
s($,"D9","mR",()=>A.H("closed barrel","\xb0",B.k,null).cq(new A.rl()).aM())
s($,"Dv","tS",()=>A.H("open barrel","\u2219",B.k,null).aM())
s($,"DX","n5",()=>A.H("table","\u250c",B.k,null).aM())
s($,"DW","n4",()=>A.H("table","\u2500",B.k,null).aM())
s($,"DY","n6",()=>A.H("table","\u2510",B.k,null).aM())
s($,"DV","n3",()=>A.H("table","\u2502",B.k,null).aM())
s($,"DR","iH",()=>A.H("table"," ",B.k,null).aM())
s($,"DP","mZ",()=>A.H("table","\u2558",B.k,null).aM())
s($,"DO","mY",()=>A.H("table","\u2550",B.k,null).aM())
s($,"DQ","n_",()=>A.H("table","\u255b",B.k,null).aM())
s($,"DT","n1",()=>A.H("table","\u255e",B.k,null).aM())
s($,"DS","n0",()=>A.H("table","\u2564",B.k,null).aM())
s($,"DU","n2",()=>A.H("table","\u2561",B.k,null).aM())
s($,"D6","mP",()=>A.H("candle","\u2265",B.H,null).eU(128).aM())
s($,"E5","vb",()=>A.H("wall torch","\u2264",B.h,B.f).eU(192).bx())
s($,"DM","xV",()=>A.H("statue","P",B.u,B.f).aM())
s($,"D7","mQ",()=>A.H("chair","\u03c0",B.k,null).a4())
s($,"D3","xC",()=>A.H("brown jelly stain","\xb7",B.k,null).a4())
s($,"Dq","xJ",()=>A.H("gray jelly stain","\xb7",B.l,null).a4())
s($,"Dr","xK",()=>A.H("green jelly stain","\xb7",B.A,null).a4())
s($,"DB","xO",()=>A.H("red jelly stain","\xb7",B.m,null).a4())
s($,"E4","xW",()=>A.H("violet jelly stain","\xb7",B.W,null).a4())
s($,"E7","xX",()=>A.H("white jelly stain","\xb7",B.u,null).a4())
s($,"DK","mX",()=>A.H("spiderweb","\xf7",B.f,null).a4())
s($,"Dg","xH",()=>A.H("dungeon entrance","\u2261",B.d,B.l).c7(B.bw).a4())
s($,"Ds","xL",()=>A.H("home entrance","\u25cb",B.H,null).c7(B.cz).a4())
s($,"DC","xP",()=>A.H("shop entrance","\u25cb",B.N,null).c7(B.cy).a4())
s($,"DD","xQ",()=>A.H("shop entrance","\u25cb",B.h,null).c7(B.cx).a4())
s($,"DE","xR",()=>A.H("shop entrance","\u25cb",B.A,null).c7(B.cw).a4())
s($,"DF","xS",()=>A.H("shop entrance","\u25cb",B.p,null).c7(B.cv).a4())
s($,"DG","xT",()=>A.H("shop entrance","\u25cb",B.a3,null).c7(B.cu).a4())
s($,"DH","xU",()=>A.H("shop entrance","\u25cb",B.K,null).c7(B.ct).a4())
s($,"D1","tP",()=>A.B([$.mW(),30,$.mT(),30,$.iE(),50,$.tQ(),10,$.iG(),3,$.iI(),3,$.tU(),40,$.tV(),40,$.tW(),40,$.n5(),20,$.n4(),20,$.n6(),20,$.n3(),20,$.iH(),20,$.mZ(),20,$.mY(),20,$.n_(),20,$.n1(),20,$.n0(),20,$.n2(),20,$.tT(),40,$.mS(),80,$.tS(),15,$.mR(),40,$.mP(),1,$.mQ(),10,$.mX(),1],t.ns,t.S))
s($,"D0","v3",()=>A.B([$.mW(),70,$.mT(),70,$.iE(),50,$.tQ(),20,$.iG(),30,$.iI(),50,$.tU(),100,$.tV(),100,$.tW(),100,$.n5(),60,$.n4(),60,$.n6(),60,$.n3(),60,$.iH(),60,$.mZ(),60,$.mY(),60,$.n_(),60,$.n1(),60,$.n0(),60,$.n2(),60,$.tT(),70,$.mS(),80,$.tS(),30,$.mR(),40,$.mP(),60,$.mQ(),40,$.mX(),20],t.ns,t.S))
s($,"D_","xB",()=>{var r=$.iE(),q=t.J,p=A.a([$.iJ()],q),o=$.iG(),n=$.xF(),m=$.xG()
return A.B([r,p,o,A.a([n,m],q),$.iI(),A.a([n,m],q),$.tU(),A.a([n,m],q),$.tV(),A.a([n,m],q),$.tW(),A.a([n,m],q),$.mP(),A.a([$.iH()],q),$.mX(),A.a([$.mV()],q)],t.ns,t.p)})
s($,"C6","az",()=>A.c0("none","No",1,null,"",!1,null))
s($,"Cr","xo",()=>A.kT("\\[([^|\\]]+)(\\|([^\\]]+))?\\]"))
s($,"CY","v2",()=>A.zi($.xs().a7(1)))
s($,"CF","xs",()=>A.z6("something",B.aG,B.y))
s($,"CE","xr",()=>A.kT("\\[([^|\\]]+)(\\|([^\\]]+))?\\]"))
s($,"CD","xq",()=>A.kT("^\\(([^)]+)\\)(.*)"))
s($,"CG","xt",()=>A.z5("you","you","you",B.cn))
s($,"Cp","xn",()=>A.kT("^(\\d{1,3})((\\d{3})+)$"))
s($,"Et","yb",()=>A.vA(A.ap("hH<d>")))
s($,"Es","ya",()=>A.vA(A.ap("hH<K>")))
s($,"Cz","uW",()=>A.km(0))
s($,"Cu","bC",()=>A.km(1))
s($,"Cx","U",()=>A.km(2))
s($,"CA","iD",()=>A.km(4))
s($,"CB","aY",()=>A.km(8))
s($,"Cv","xp",()=>$.bC().ca(0,$.U()))
s($,"Cw","bD",()=>$.bC().ca(0,$.aY()))
s($,"Cy","uV",()=>$.U().ca(0,$.aY()))
s($,"Ct","uU",()=>$.bC().ca(0,$.U()).ca(0,$.iD()).ca(0,$.aY()))
s($,"CZ","xA",()=>{var r=null
return A.zu("uninitialized",r,$.uW(),r,r,r)})
s($,"El","ve",()=>A.B([B.M,"|",B.R,"/",B.P,"-",B.Q,"\\",B.L,"|",B.T,"/",B.S,"-",B.U,"\\"],t.j,t.N))
s($,"Em","vf",()=>{var r="\u2022",q="Oo",p=".",o=t.bk,n=A.ap("r<D<X>>")
return A.B([$.az(),A.a([A.T(r,A.a([B.H],o)),A.T(r,A.a([B.H],o)),A.T(r,A.a([B.k],o))],n),$.ei(),A.a([A.T(q,A.a([B.u,B.K],o)),A.T(p,A.a([B.K],o)),A.T(p,A.a([B.I],o))],n),$.dw(),A.a([A.T("*%",A.a([B.H,B.h],o)),A.T("*%",A.a([B.k,B.w],o)),A.T("\u2022*",A.a([B.k],o)),A.T(r,A.a([B.w],o))],n),$.b6(),A.a([A.T("\u25b2^",A.a([B.h,B.D],o)),A.T("*^",A.a([B.N],o)),A.T("^",A.a([B.m],o)),A.T("^",A.a([B.w,B.m],o)),A.T(p,A.a([B.w,B.m],o))],n),$.d1(),A.a([A.T(q,A.a([B.K,B.I],o)),A.T("o\u2022^",A.a([B.I,B.F],o)),A.T("\u2022^",A.a([B.F,B.E],o)),A.T("^~",A.a([B.F,B.E],o)),A.T("~",A.a([B.E],o)),A.T(p,A.a([B.E,B.an],o))],n),$.dv(),A.a([A.T(q,A.a([B.D,B.h],o)),A.T("o\u2022~",A.a([B.A,B.h],o)),A.T(":,",A.a([B.A,B.ae],o)),A.T(p,A.a([B.A],o))],n),$.cb(),A.a([A.T("*",A.a([B.u],o)),A.T("+x",A.a([B.K,B.u],o)),A.T("+x",A.a([B.I,B.o],o)),A.T(p,A.a([B.f,B.E],o))],n),$.dx(),A.a([A.T("*",A.a([B.O],o)),A.T("-|\\/",A.a([B.W,B.u],o)),A.T(p,A.a([B.t,B.t,B.t,B.O],o))],n),$.bB(),A.a([A.T(q,A.a([B.af,B.A],o)),A.T("o\u2022",A.a([B.p,B.p,B.ae],o)),A.T(r,A.a([B.B,B.ae],o)),A.T(p,A.a([B.B],o))],n),$.d_(),A.a([A.T("*%",A.a([B.t,B.t,B.l],o)),A.T(r,A.a([B.t,B.t,B.o],o)),A.T(p,A.a([B.t],o)),A.T(p,A.a([B.t],o))],n),$.d0(),A.a([A.T("*",A.a([B.u],o)),A.T("x+",A.a([B.u,B.D],o)),A.T(":;\"'`,",A.a([B.D,B.h],o)),A.T(p,A.a([B.o,B.D],o))],n),$.dy(),A.a([A.T("Oo*+",A.a([B.O,B.o],o)),A.T("o+",A.a([B.W,B.p],o)),A.T("\u2022.",A.a([B.an,B.B,B.B],o))],n)],t.h,A.ap("D<D<X>>"))})
s($,"Ck","xi",()=>A.an("!",B.a3,null))
s($,"Co","xm",()=>A.an("/",B.K,null))
s($,"Cj","xh",()=>A.an("\\",B.K,null))
s($,"Cl","xj",()=>A.an("-",B.a3,null))
s($,"Cn","xl",()=>A.an("<",B.a3,null))
s($,"Cm","xk",()=>A.an(">",B.a3,null))
s($,"CT","uY",()=>A.B([$.ei(),"A",$.dw(),"E",$.b6(),"F",$.d1(),"W",$.dv(),"A",$.cb(),"C",$.dx(),"L",$.bB(),"P",$.d_(),"D",$.d0(),"L",$.dy(),"S"],t.h,t.N))
s($,"Ev","m",()=>new A.qp(A.zj(A.w0())))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.eQ,SharedArrayBuffer:A.eQ,ArrayBufferView:A.hl,DataView:A.kp,Float32Array:A.kq,Float64Array:A.kr,Int16Array:A.ks,Int32Array:A.kt,Int8Array:A.ku,Uint16Array:A.kv,Uint32Array:A.kw,Uint8ClampedArray:A.hm,CanvasPixelArray:A.hm,Uint8Array:A.kx})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.eR.$nativeSuperclassTag="ArrayBufferView"
A.ib.$nativeSuperclassTag="ArrayBufferView"
A.ic.$nativeSuperclassTag="ArrayBufferView"
A.hj.$nativeSuperclassTag="ArrayBufferView"
A.id.$nativeSuperclassTag="ArrayBufferView"
A.ie.$nativeSuperclassTag="ArrayBufferView"
A.hk.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$1$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.Bu
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.dart.js.map
