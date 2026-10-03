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
if(a[b]!==s){A.CR(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.a(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.vD(b)
return new s(c,this)}:function(){if(s===null)s=A.vD(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.vD(a).prototype
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
vJ(a,b,c,d){return{i:a,p:b,e:c,x:d}},
vF(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.vG==null){A.Cs()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.m(A.be("Return interceptor for "+A.J(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.tv
if(o==null)o=$.tv=A.u6(n)
p=q[o]}if(p!=null)return p
p=A.CA(a)
if(p!=null)return p
if(typeof a=="function")return B.hK
s=Object.getPrototypeOf(a)
if(s==null)return B.ct
if(s===Object.prototype)return B.ct
if(typeof q=="function"){o=$.tv
if(o==null)o=$.tv=A.u6(n)
Object.defineProperty(q,o,{value:B.bK,enumerable:false,writable:true,configurable:true})
return B.bK}return B.bK},
x4(a,b){if(a<0||a>4294967295)throw A.m(A.cx(a,0,4294967295,"length",null))
return J.zV(new Array(a),b)},
x5(a,b){if(a<0)throw A.m(A.aF("Length must be a non-negative integer: "+a,null))
return A.a(new Array(a),b.i("t<0>"))},
x3(a,b){if(a<0)throw A.m(A.aF("Length must be a non-negative integer: "+a,null))
return A.a(new Array(a),b.i("t<0>"))},
zV(a,b){var s=A.a(a,b.i("t<0>"))
s.$flags=1
return s},
zW(a,b){var s=t.bP
return J.zo(s.a(a),s.a(b))},
x6(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
zX(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.x6(r))break;++b}return b},
zY(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.x6(q))break}return b},
em(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hn.prototype
return J.kF.prototype}if(typeof a=="string")return J.du.prototype
if(a==null)return J.ho.prototype
if(typeof a=="boolean")return J.hm.prototype
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dv.prototype
if(typeof a=="symbol")return J.hs.prototype
if(typeof a=="bigint")return J.hq.prototype
return a}if(a instanceof A.P)return a
return J.vF(a)},
fJ(a){if(typeof a=="string")return J.du.prototype
if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dv.prototype
if(typeof a=="symbol")return J.hs.prototype
if(typeof a=="bigint")return J.hq.prototype
return a}if(a instanceof A.P)return a
return J.vF(a)},
fK(a){if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dv.prototype
if(typeof a=="symbol")return J.hs.prototype
if(typeof a=="bigint")return J.hq.prototype
return a}if(a instanceof A.P)return a
return J.vF(a)},
Ck(a){if(typeof a=="number")return J.e_.prototype
if(a==null)return a
if(!(a instanceof A.P))return J.dD.prototype
return a},
Cl(a){if(typeof a=="number")return J.e_.prototype
if(typeof a=="string")return J.du.prototype
if(a==null)return a
if(!(a instanceof A.P))return J.dD.prototype
return a},
Cm(a){if(typeof a=="string")return J.du.prototype
if(a==null)return a
if(!(a instanceof A.P))return J.dD.prototype
return a},
a9(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.em(a).Y(a,b)},
b4(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Cv(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.fJ(a).m(a,b)},
wz(a,b){return J.fK(a).j(a,b)},
zn(a,b){return J.Cm(a).hl(a,b)},
wA(a,b,c){return J.Ck(a).M(a,b,c)},
zo(a,b){return J.Cl(a).am(a,b)},
uS(a,b){return J.fK(a).aX(a,b)},
cl(a){return J.em(a).ga2(a)},
aw(a){return J.fK(a).gL(a)},
dP(a){return J.fJ(a).gI(a)},
zp(a){return J.em(a).gaJ(a)},
zq(a,b,c){return J.fK(a).cL(a,b,c)},
jm(a){return J.fK(a).ec(a)},
ew(a){return J.em(a).t(a)},
zr(a,b){return J.fK(a).lg(a,b)},
kz:function kz(){},
hm:function hm(){},
ho:function ho(){},
hr:function hr(){},
dx:function dx(){},
le:function le(){},
dD:function dD(){},
dv:function dv(){},
hq:function hq(){},
hs:function hs(){},
t:function t(a){this.$ti=a},
kE:function kE(){},
pK:function pK(a){this.$ti=a},
aX:function aX(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
e_:function e_(){},
hn:function hn(){},
kF:function kF(){},
du:function du(){}},A={v2:function v2(){},
x9(a){return new A.dw("Field '"+a+"' has been assigned during initialization.")},
e0(a){return new A.dw("Field '"+a+"' has not been initialized.")},
A0(a){return new A.dw("Local '"+a+"' has not been initialized.")},
xa(a){return new A.dw("Field '"+a+"' has already been initialized.")},
d_(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
rL(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
vC(a,b,c){return a},
vH(a){var s,r
for(s=$.bX.length,r=0;r<s;++r)if(a===$.bX[r])return!0
return!1},
Az(a,b,c,d){A.hQ(b,"start")
if(c!=null){A.hQ(c,"end")
if(b>c)A.a_(A.cx(b,0,c,"start",null))}return new A.i8(a,b,c,d.i("i8<0>"))},
qa(a,b,c,d){if(t.gt.b(a))return new A.cN(a,b,c.i("@<0>").af(d).i("cN<1,2>"))
return new A.cV(a,b,c.i("@<0>").af(d).i("cV<1,2>"))},
AA(a,b,c){var s="takeCount"
A.zu(b,s,t.S)
A.hQ(b,s)
if(t.gt.b(a))return new A.h8(a,b,c.i("h8<0>"))
return new A.e9(a,b,c.i("e9<0>"))},
cu(){return new A.e8("No element")},
zT(){return new A.e8("Too many elements")},
zS(){return new A.e8("Too few elements")},
dw:function dw(a){this.a=a},
dp:function dp(a){this.a=a},
r5:function r5(){},
M:function M(){},
aI:function aI(){},
i8:function i8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ca:function ca(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cV:function cV(a,b,c){this.a=a
this.b=b
this.$ti=c},
cN:function cN(a,b,c){this.a=a
this.b=b
this.$ti=c},
bs:function bs(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
au:function au(a,b,c){this.a=a
this.b=b
this.$ti=c},
ap:function ap(a,b,c){this.a=a
this.b=b
this.$ti=c},
d6:function d6(a,b,c){this.a=a
this.b=b
this.$ti=c},
e9:function e9(a,b,c){this.a=a
this.b=b
this.$ti=c},
h8:function h8(a,b,c){this.a=a
this.b=b
this.$ti=c},
i9:function i9(a,b,c){this.a=a
this.b=b
this.$ti=c},
ia:function ia(a,b,c){this.a=a
this.b=b
this.$ti=c},
ib:function ib(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.$ti=c},
ii:function ii(a,b){this.a=a
this.$ti=b},
bu:function bu(a,b){this.a=a
this.$ti=b},
aH:function aH(){},
dE:function dE(){},
fp:function fp(){},
cY:function cY(a,b){this.a=a
this.$ti=b},
yD(a){var s=A.yC(a)
if(s!=null)return s
return"minified:"+a},
Cv(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
J(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ew(a)
return s},
hN(a){var s,r=$.xh
if(r==null)r=$.xh=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
li(a){var s,r,q,p
if(a instanceof A.P)return A.bW(A.ch(a),null)
s=J.em(a)
if(s===B.hH||s===B.hL||t.cx.b(a)){r=B.bN(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bW(A.ch(a),null)},
xj(a){var s,r,q
if(a==null||typeof a=="number"||A.tT(a))return J.ew(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dn)return a.t(0)
if(a instanceof A.c2)return a.jB(!0)
s=$.zi()
for(r=0;r<1;++r){q=s[r].pW(a)
if(q!=null)return q}return"Instance of '"+A.li(a)+"'"},
xi(){return Date.now()},
Al(){var s,r
if($.qF!==0)return
$.qF=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.qF=1e6
$.v8=new A.qE(r)},
xg(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Am(a){var s,r,q,p=A.a([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.o)(a),++r){q=a[r]
if(!A.fC(q))throw A.m(A.iZ(q))
if(q<=65535)B.a.j(p,q)
else if(q<=1114111){B.a.j(p,55296+(B.c.eK(q-65536,10)&1023))
B.a.j(p,56320+(q&1023))}else throw A.m(A.iZ(q))}return A.xg(p)},
xk(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.fC(q))throw A.m(A.iZ(q))
if(q<0)throw A.m(A.iZ(q))
if(q>65535)return A.Am(a)}return A.xg(a)},
aU(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.eK(s,10)|55296)>>>0,s&1023|56320)}}throw A.m(A.cx(a,0,1114111,null,null))},
bR(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
Ak(a){return a.c?A.bR(a).getUTCFullYear()+0:A.bR(a).getFullYear()+0},
Ai(a){return a.c?A.bR(a).getUTCMonth()+1:A.bR(a).getMonth()+1},
Ae(a){return a.c?A.bR(a).getUTCDate()+0:A.bR(a).getDate()+0},
Af(a){return a.c?A.bR(a).getUTCHours()+0:A.bR(a).getHours()+0},
Ah(a){return a.c?A.bR(a).getUTCMinutes()+0:A.bR(a).getMinutes()+0},
Aj(a){return a.c?A.bR(a).getUTCSeconds()+0:A.bR(a).getSeconds()+0},
Ag(a){return a.c?A.bR(a).getUTCMilliseconds()+0:A.bR(a).getMilliseconds()+0},
Ad(a){var s=a.$thrownJsError
if(s==null)return null
return A.en(s)},
An(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aW(a,s)
a.$thrownJsError=s
s.stack=""}},
Cq(a){throw A.m(A.iZ(a))},
b(a,b){if(a==null)J.dP(a)
throw A.m(A.nm(a,b))},
nm(a,b){var s,r="index"
if(!A.fC(b))return new A.co(!0,b,r,null)
s=A.r(J.dP(a))
if(b<0||b>=s)return A.p5(b,s,a,null,r)
return A.hP(b,r)},
iZ(a){return new A.co(!0,a,null,null)},
m(a){return A.aW(a,new Error())},
aW(a,b){var s
if(a==null)a=new A.d4()
b.dartException=a
s=A.CY
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
CY(){return J.ew(this.dartException)},
a_(a,b){throw A.aW(a,b==null?new Error():b)},
bx(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.a_(A.Bf(a,b,c),s)},
Bf(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.gs.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.id("'"+s+"': Cannot "+o+" "+l+k+n)},
o(a){throw A.m(A.aQ(a))},
d5(a){var s,r,q,p,o,n
a=A.yv(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.t_(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
t0(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
xz(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
v3(a,b){var s=b==null,r=s?null:b.method
return new A.kH(a,r,s?null:b.receiver)},
dI(a){if(a==null)return new A.qv(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.eq(a,a.dartException)
return A.C3(a)},
eq(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
C3(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.eK(r,16)&8191)===10)switch(q){case 438:return A.eq(a,A.v3(A.J(s)+" (Error "+q+")",null))
case 445:case 5007:A.J(s)
return A.eq(a,new A.hJ())}}if(a instanceof TypeError){p=$.z6()
o=$.z7()
n=$.z8()
m=$.z9()
l=$.zc()
k=$.zd()
j=$.zb()
$.za()
i=$.zf()
h=$.ze()
g=p.bV(s)
if(g!=null)return A.eq(a,A.v3(A.a3(s),g))
else{g=o.bV(s)
if(g!=null){g.method="call"
return A.eq(a,A.v3(A.a3(s),g))}else if(n.bV(s)!=null||m.bV(s)!=null||l.bV(s)!=null||k.bV(s)!=null||j.bV(s)!=null||m.bV(s)!=null||i.bV(s)!=null||h.bV(s)!=null){A.a3(s)
return A.eq(a,new A.hJ())}}return A.eq(a,new A.lV(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.i4()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.eq(a,new A.co(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.i4()
return a},
en(a){var s
if(a==null)return new A.iO(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.iO(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
nn(a){if(a==null)return J.cl(a)
if(typeof a=="object")return A.hN(a)
return J.cl(a)},
Cb(a){if(typeof a=="number")return B.e.ga2(a)
if(a instanceof A.nc)return A.hN(a)
if(a instanceof A.c2)return a.ga2(a)
return A.nn(a)},
yh(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.h(0,a[s],a[r])}return b},
Bu(a,b,c,d,e,f){t.gY.a(a)
switch(A.r(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.m(new A.tk("Unsupported number of arguments for wrapped closure"))},
fG(a,b){var s=a.$identity
if(!!s)return s
s=A.Cc(a,b)
a.$identity=s
return s},
Cc(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Bu)},
zD(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.lI().constructor.prototype):Object.create(new A.ez(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.wL(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.zz(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.wL(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
zz(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.m("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.zw)}throw A.m("Error in functionType of tearoff")},
zA(a,b,c,d){var s=A.wK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
wL(a,b,c,d){if(c)return A.zC(a,b,d)
return A.zA(b.length,d,a,b)},
zB(a,b,c,d){var s=A.wK,r=A.zx
switch(b?-1:a){case 0:throw A.m(new A.ly("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
zC(a,b,c){var s,r
if($.wI==null)$.wI=A.wH("interceptor")
if($.wJ==null)$.wJ=A.wH("receiver")
s=b.length
r=A.zB(s,c,a,b)
return r},
vD(a){return A.zD(a)},
zw(a,b){return A.iT(v.typeUniverse,A.ch(a.a),b)},
wK(a){return a.a},
zx(a){return a.b},
wH(a){var s,r,q,p=new A.ez("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.m(A.aF("Field name "+a+" not found.",null))},
u6(a){return v.getIsolateTag(a)},
CA(a){var s,r,q,p,o,n=A.a3($.yl.$1(a)),m=$.u2[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ub[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.vs($.yd.$2(a,n))
if(q!=null){m=$.u2[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ub[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.un(s)
$.u2[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.ub[n]=s
return s}if(p==="-"){o=A.un(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.yt(a,s)
if(p==="*")throw A.m(A.be(n))
if(v.leafTags[n]===true){o=A.un(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.yt(a,s)},
yt(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.vJ(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
un(a){return J.vJ(a,!1,null,!!a.$ibQ)},
CD(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.un(s)
else return J.vJ(s,c,null,null)},
Cs(){if(!0===$.vG)return
$.vG=!0
A.Ct()},
Ct(){var s,r,q,p,o,n,m,l
$.u2=Object.create(null)
$.ub=Object.create(null)
A.Cr()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.yu.$1(o)
if(n!=null){m=A.CD(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Cr(){var s,r,q,p,o,n,m=B.cQ()
m=A.fF(B.cR,A.fF(B.cS,A.fF(B.bO,A.fF(B.bO,A.fF(B.cT,A.fF(B.cU,A.fF(B.cV(B.bN),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.yl=new A.u8(p)
$.yd=new A.u9(o)
$.yu=new A.ua(n)},
fF(a,b){return a(b)||b},
AU(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.b(b,s)
if(!J.a9(r,b[s]))return!1}return!0},
Ce(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
x7(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.m(A.wU("Illegal RegExp pattern ("+String(o)+")",a))},
CO(a,b,c){var s=a.indexOf(b,c)
return s>=0},
yg(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
yv(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bn(a,b,c){var s
if(typeof b=="string")return A.CQ(a,b,c)
if(b instanceof A.hp){s=b.gjd()
s.lastIndex=0
return a.replace(s,A.yg(c))}return A.CP(a,b,c)},
CP(a,b,c){var s,r,q,p
for(s=J.zn(b,a),s=s.gL(s),r=0,q="";s.q();){p=s.gH()
q=q+a.substring(r,p.gim())+c
r=p.ghz()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
CQ(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.yv(b),"g"),A.yg(c))},
ya(a){return a},
yA(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.hl(0,a),s=new A.ik(s.a,s.b,s.c),r=t.lu,q=0,p="";s.q();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.J(A.ya(B.i.aM(a,q,m)))+A.J(c.$1(o))
q=m+n[0].length}s=p+A.J(A.ya(B.i.cY(a,q)))
return s.charCodeAt(0)==0?s:s},
O:function O(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
X:function X(a){this.a=a},
eF:function eF(){},
bk:function bk(a,b,c){this.a=a
this.b=b
this.$ti=c},
iA:function iA(a,b){this.a=a
this.$ti=b},
iB:function iB(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dZ:function dZ(a,b){this.a=a
this.$ti=b},
qE:function qE(a){this.a=a},
hZ:function hZ(){},
t_:function t_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hJ:function hJ(){},
kH:function kH(a,b,c){this.a=a
this.b=b
this.c=c},
lV:function lV(a){this.a=a},
qv:function qv(a){this.a=a},
iO:function iO(a){this.a=a
this.b=null},
dn:function dn(){},
jL:function jL(){},
jM:function jM(){},
lM:function lM(){},
lI:function lI(){},
ez:function ez(a,b){this.a=a
this.b=b},
ly:function ly(a){this.a=a},
c8:function c8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pL:function pL(a){this.a=a},
pV:function pV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
b6:function b6(a,b){this.a=a
this.$ti=b},
c9:function c9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cT:function cT(a,b){this.a=a
this.$ti=b},
cS:function cS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
br:function br(a,b){this.a=a
this.$ti=b},
e1:function e1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ht:function ht(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
u8:function u8(a){this.a=a},
u9:function u9(a){this.a=a},
ua:function ua(a){this.a=a},
c2:function c2(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
hp:function hp(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
iC:function iC(a){this.b=a},
m5:function m5(a,b,c){this.a=a
this.b=b
this.c=c},
ik:function ik(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
lJ:function lJ(a,b){this.a=a
this.c=b},
n7:function n7(a,b,c){this.a=a
this.b=b
this.c=c},
n8:function n8(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
CR(a){throw A.aW(A.x9(a),new Error())},
c(){throw A.aW(A.e0(""),new Error())},
ay(){throw A.aW(A.xa(""),new Error())},
er(){throw A.aW(A.x9(""),new Error())},
ed(){var s=new A.th()
return s.b=s},
th:function th(){this.b=null},
dd(a,b,c){if(a>>>0!==a||a>=c)throw A.m(A.nm(b,a))},
f1:function f1(){},
hE:function hE(){},
l_:function l_(){},
f2:function f2(){},
hC:function hC(){},
hD:function hD(){},
l0:function l0(){},
l1:function l1(){},
l2:function l2(){},
l3:function l3(){},
l4:function l4(){},
l5:function l5(){},
l6:function l6(){},
hF:function hF(){},
l7:function l7(){},
iD:function iD(){},
iE:function iE(){},
iF:function iF(){},
iG:function iG(){},
ve(a,b){var s=b.c
return s==null?b.c=A.iR(a,"eS",[b.x]):s},
xu(a){var s=a.w
if(s===6||s===7)return A.xu(a.x)
return s===11||s===12},
At(a){return a.as},
CF(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
av(a){return A.tK(v.typeUniverse,a,!1)},
ej(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.ej(a1,s,a3,a4)
if(r===s)return a2
return A.xL(a1,r,!0)
case 7:s=a2.x
r=A.ej(a1,s,a3,a4)
if(r===s)return a2
return A.xK(a1,r,!0)
case 8:q=a2.y
p=A.fE(a1,q,a3,a4)
if(p===q)return a2
return A.iR(a1,a2.x,p)
case 9:o=a2.x
n=A.ej(a1,o,a3,a4)
m=a2.y
l=A.fE(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.vq(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.fE(a1,j,a3,a4)
if(i===j)return a2
return A.xM(a1,k,i)
case 11:h=a2.x
g=A.ej(a1,h,a3,a4)
f=a2.y
e=A.C0(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.xJ(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.fE(a1,d,a3,a4)
o=a2.x
n=A.ej(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.vr(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.m(A.bN("Attempted to substitute unexpected RTI kind "+a0))}},
fE(a,b,c,d){var s,r,q,p,o=b.length,n=A.tL(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.ej(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
C1(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.tL(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.ej(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
C0(a,b,c,d){var s,r=b.a,q=A.fE(a,r,c,d),p=b.b,o=A.fE(a,p,c,d),n=b.c,m=A.C1(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.mz()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
yf(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Co(s)
return a.$S()}return null},
Cu(a,b){var s
if(A.xu(b))if(a instanceof A.dn){s=A.yf(a)
if(s!=null)return s}return A.ch(a)},
ch(a){if(a instanceof A.P)return A.y(a)
if(Array.isArray(a))return A.N(a)
return A.vw(J.em(a))},
N(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
y(a){var s=a.$ti
return s!=null?s:A.vw(a)},
vw(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Bp(a,s)},
Bp(a,b){var s=a instanceof A.dn?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.B2(v.typeUniverse,s.name)
b.$ccache=r
return r},
Co(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.tK(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
Cn(a){return A.ek(A.y(a))},
vA(a){var s
if(a instanceof A.c2)return A.Cg(a.$r,a.eA())
s=a instanceof A.dn?A.yf(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.zp(a).a
if(Array.isArray(a))return A.N(a)
return A.ch(a)},
ek(a){var s=a.r
return s==null?a.r=new A.nc(a):s},
Cg(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.b(q,0)
s=A.iT(v.typeUniverse,A.vA(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.xO(v.typeUniverse,s,A.vA(q[r]))}return A.iT(v.typeUniverse,s,a)},
ci(a){return A.ek(A.tK(v.typeUniverse,a,!1))},
Bo(a){var s=this
s.b=A.BZ(s)
return s.b(a)},
BZ(a){var s,r,q,p,o
if(a===t.K)return A.BA
if(A.eo(a))return A.BE
s=a.w
if(s===6)return A.Bm
if(s===1)return A.xZ
if(s===7)return A.Bv
r=A.BY(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.eo)){a.f="$i"+q
if(q==="D")return A.By
if(a===t.bp)return A.Bx
return A.BD}}else if(s===10){p=A.Ce(a.x,a.y)
o=p==null?A.xZ:p
return o==null?A.dc(o):o}return A.Bk},
BY(a){if(a.w===8){if(a===t.S)return A.fC
if(a===t.i||a===t.cZ)return A.Bz
if(a===t.N)return A.BC
if(a===t.y)return A.tT}return null},
Bn(a){var s=this,r=A.Bj
if(A.eo(s))r=A.B6
else if(s===t.K)r=A.dc
else if(A.fL(s)){r=A.Bl
if(s===t.aV)r=A.xR
else if(s===t.jv)r=A.vs
else if(s===t.fU)r=A.B4
else if(s===t.ae)r=A.xS
else if(s===t.dz)r=A.B5
else if(s===t.mU)r=A.bV}else if(s===t.S)r=A.r
else if(s===t.N)r=A.a3
else if(s===t.y)r=A.dG
else if(s===t.cZ)r=A.ei
else if(s===t.i)r=A.bw
else if(s===t.bp)r=A.a2
s.a=r
return s.a(a)},
Bk(a){var s=this
if(a==null)return A.fL(s)
return A.Cw(v.typeUniverse,A.Cu(a,s),s)},
Bm(a){if(a==null)return!0
return this.x.b(a)},
BD(a){var s,r=this
if(a==null)return A.fL(r)
s=r.f
if(a instanceof A.P)return!!a[s]
return!!J.em(a)[s]},
By(a){var s,r=this
if(a==null)return A.fL(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.P)return!!a[s]
return!!J.em(a)[s]},
Bx(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.P)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
xY(a){if(typeof a=="object"){if(a instanceof A.P)return t.bp.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Bj(a){var s=this
if(a==null){if(A.fL(s))return a}else if(s.b(a))return a
throw A.aW(A.xU(a,s),new Error())},
Bl(a){var s=this
if(a==null||s.b(a))return a
throw A.aW(A.xU(a,s),new Error())},
xU(a,b){return new A.iP("TypeError: "+A.xC(a,A.bW(b,null)))},
xC(a,b){return A.k3(a)+": type '"+A.bW(A.vA(a),null)+"' is not a subtype of type '"+b+"'"},
c4(a,b){return new A.iP("TypeError: "+A.xC(a,b))},
Bv(a){var s=this
return s.x.b(a)||A.ve(v.typeUniverse,s).b(a)},
BA(a){return a!=null},
dc(a){if(a!=null)return a
throw A.aW(A.c4(a,"Object"),new Error())},
BE(a){return!0},
B6(a){return a},
xZ(a){return!1},
tT(a){return!0===a||!1===a},
dG(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aW(A.c4(a,"bool"),new Error())},
B4(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aW(A.c4(a,"bool?"),new Error())},
bw(a){if(typeof a=="number")return a
throw A.aW(A.c4(a,"double"),new Error())},
B5(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aW(A.c4(a,"double?"),new Error())},
fC(a){return typeof a=="number"&&Math.floor(a)===a},
r(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aW(A.c4(a,"int"),new Error())},
xR(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aW(A.c4(a,"int?"),new Error())},
Bz(a){return typeof a=="number"},
ei(a){if(typeof a=="number")return a
throw A.aW(A.c4(a,"num"),new Error())},
xS(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aW(A.c4(a,"num?"),new Error())},
BC(a){return typeof a=="string"},
a3(a){if(typeof a=="string")return a
throw A.aW(A.c4(a,"String"),new Error())},
vs(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aW(A.c4(a,"String?"),new Error())},
a2(a){if(A.xY(a))return a
throw A.aW(A.c4(a,"JSObject"),new Error())},
bV(a){if(a==null)return a
if(A.xY(a))return a
throw A.aW(A.c4(a,"JSObject?"),new Error())},
y8(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bW(a[q],b)
return s},
BR(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.y8(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bW(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
xV(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.a([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.j(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.b(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bW(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bW(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bW(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bW(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bW(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bW(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bW(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bW(a.x,b)+">"
if(l===8){p=A.C2(a.x)
o=a.y
return o.length>0?p+("<"+A.y8(o,b)+">"):p}if(l===10)return A.BR(a,b)
if(l===11)return A.xV(a,b,null)
if(l===12)return A.xV(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
C2(a){var s=A.yC(a)
if(s!=null)return s
return"minified:"+a},
B3(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
B2(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.tK(a,b,!1)
else if(typeof m=="number"){s=m
r=A.iS(a,5,"#")
q=A.tL(s)
for(p=0;p<s;++p)q[p]=r
o=A.iR(a,b,q)
n[b]=o
return o}else return m},
B1(a,b){return A.xP(a.tR,b)},
B0(a,b){return A.xP(a.eT,b)},
tK(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.xN(a,null,b,!1)
r.set(b,s)
return s},
iT(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.xN(a,b,c,!0)
q.set(c,r)
return r},
xO(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.vq(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
xN(a,b,c,d){return A.AS(A.AM(a,b,c,d))},
dF(a,b){b.a=A.Bn
b.b=A.Bo
return b},
iS(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cc(null,null)
s.w=b
s.as=c
r=A.dF(a,s)
a.eC.set(c,r)
return r},
xL(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.AZ(a,b,r,c)
a.eC.set(r,s)
return s},
AZ(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.eo(b))if(!(b===t.iV||b===t.bE))if(s!==6)r=s===7&&A.fL(b.x)
if(r)return b
else if(s===1)return t.iV}q=new A.cc(null,null)
q.w=6
q.x=b
q.as=c
return A.dF(a,q)},
xK(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.AX(a,b,r,c)
a.eC.set(r,s)
return s},
AX(a,b,c,d){var s,r
if(d){s=b.w
if(A.eo(b)||b===t.K)return b
else if(s===1)return A.iR(a,"eS",[b])
else if(b===t.iV||b===t.bE)return t.gK}r=new A.cc(null,null)
r.w=7
r.x=b
r.as=c
return A.dF(a,r)},
B_(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cc(null,null)
s.w=13
s.x=b
s.as=q
r=A.dF(a,s)
a.eC.set(q,r)
return r},
iQ(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
AW(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
iR(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iQ(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cc(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.dF(a,r)
a.eC.set(p,q)
return q},
vq(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.iQ(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cc(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.dF(a,o)
a.eC.set(q,n)
return n},
xM(a,b,c){var s,r,q="+"+(b+"("+A.iQ(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cc(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.dF(a,s)
a.eC.set(q,r)
return r},
xJ(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iQ(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iQ(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.AW(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cc(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.dF(a,p)
a.eC.set(r,o)
return o},
vr(a,b,c,d){var s,r=b.as+("<"+A.iQ(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.AY(a,b,c,r,d)
a.eC.set(r,s)
return s},
AY(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.tL(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.ej(a,b,r,0)
m=A.fE(a,c,r,0)
return A.vr(a,n,m,c!==m)}}l=new A.cc(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.dF(a,l)},
AM(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
AS(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.AO(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.xG(a,r,l,k,!1)
else if(q===46)r=A.xG(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.eh(a.u,a.e,k.pop()))
break
case 94:k.push(A.B_(a.u,k.pop()))
break
case 35:k.push(A.iS(a.u,5,"#"))
break
case 64:k.push(A.iS(a.u,2,"@"))
break
case 126:k.push(A.iS(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.AQ(a,k)
break
case 38:A.AP(a,k)
break
case 63:p=a.u
k.push(A.xL(p,A.eh(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.xK(p,A.eh(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.AN(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.xH(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.AT(a.u,a.e,o)
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
return A.eh(a.u,a.e,m)},
AO(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
xG(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.B3(s,o.x)[p]
if(n==null)A.a_('No "'+p+'" in "'+A.At(o)+'"')
d.push(A.iT(s,o,n))}else d.push(p)
return m},
AQ(a,b){var s,r=a.u,q=A.xF(a,b),p=b.pop()
if(typeof p=="string")b.push(A.iR(r,p,q))
else{s=A.eh(r,a.e,p)
switch(s.w){case 11:b.push(A.vr(r,s,q,a.n))
break
default:b.push(A.vq(r,s,q))
break}}},
AN(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.xF(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.eh(p,a.e,o)
q=new A.mz()
q.a=s
q.b=n
q.c=m
b.push(A.xJ(p,r,q))
return
case-4:b.push(A.xM(p,b.pop(),s))
return
default:throw A.m(A.bN("Unexpected state under `()`: "+A.J(o)))}},
AP(a,b){var s=b.pop()
if(0===s){b.push(A.iS(a.u,1,"0&"))
return}if(1===s){b.push(A.iS(a.u,4,"1&"))
return}throw A.m(A.bN("Unexpected extended operation "+A.J(s)))},
xF(a,b){var s=b.splice(a.p)
A.xH(a.u,a.e,s)
a.p=b.pop()
return s},
eh(a,b,c){if(typeof c=="string")return A.iR(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.AR(a,b,c)}else return c},
xH(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.eh(a,b,c[s])},
AT(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.eh(a,b,c[s])},
AR(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.m(A.bN("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.m(A.bN("Bad index "+c+" for "+b.t(0)))},
Cw(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.b0(a,b,null,c,null)
r.set(c,s)}return s},
b0(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.eo(d))return!0
s=b.w
if(s===4)return!0
if(A.eo(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.b0(a,c[b.x],c,d,e))return!0
q=d.w
p=t.iV
if(b===p||b===t.bE){if(q===7)return A.b0(a,b,c,d.x,e)
return d===p||d===t.bE||q===6}if(d===t.K){if(s===7)return A.b0(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.b0(a,b.x,c,d,e))return!1
return A.b0(a,A.ve(a,b),c,d,e)}if(s===6)return A.b0(a,p,c,d,e)&&A.b0(a,b.x,c,d,e)
if(q===7){if(A.b0(a,b,c,d.x,e))return!0
return A.b0(a,b,c,A.ve(a,d),e)}if(q===6)return A.b0(a,b,c,p,e)||A.b0(a,b,c,d.x,e)
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
if(!A.b0(a,j,c,i,e)||!A.b0(a,i,e,j,c))return!1}return A.xX(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.xX(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Bw(a,b,c,d,e)}if(o&&q===10)return A.BB(a,b,c,d,e)
return!1},
xX(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.b0(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.b0(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.b0(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.b0(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.b0(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
Bw(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iT(a,b,r[o])
return A.xQ(a,p,null,c,d.y,e)}return A.xQ(a,b.y,null,c,d.y,e)},
xQ(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.b0(a,b[s],d,e[s],f))return!1
return!0},
BB(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.b0(a,r[s],c,q[s],e))return!1
return!0},
fL(a){var s=a.w,r=!0
if(!(a===t.iV||a===t.bE))if(!A.eo(a))if(s!==6)r=s===7&&A.fL(a.x)
return r},
eo(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
xP(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
tL(a){return a>0?new Array(a):v.typeUniverse.sEA},
cc:function cc(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
mz:function mz(){this.c=this.b=this.a=null},
nc:function nc(a){this.a=a},
mq:function mq(){},
iP:function iP(a){this.a=a},
AG(){var s,r,q
if(self.scheduleImmediate!=null)return A.C6()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.fG(new A.tb(s),1)).observe(r,{childList:true})
return new A.ta(s,r,q)}else if(self.setImmediate!=null)return A.C7()
return A.C8()},
AH(a){self.scheduleImmediate(A.fG(new A.tc(t.O.a(a)),0))},
AI(a){self.setImmediate(A.fG(new A.td(t.O.a(a)),0))},
AJ(a){t.O.a(a)
A.AV(0,a)},
AV(a,b){var s=new A.tI()
s.lS(a,b)
return s},
xI(a,b,c){return 0},
uU(a){var s
if(t.fz.b(a)){s=a.gds()
if(s!=null)return s}return B.aK},
Br(a,b){if($.aV===B.a8)return null
return null},
Bs(a,b){if($.aV!==B.a8)A.Br(a,b)
if(t.fz.b(a)){b=a.gds()
if(b==null){A.An(a,B.aK)
b=B.aK}}else b=B.aK
return new A.cq(a,b)},
vk(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.j_;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.Av()
b.iz(new A.cq(new A.co(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.jk(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.dG()
b.eu(o.a)
A.ee(b,p)
return}b.a^=2
A.nk(null,null,b.b,t.O.a(new A.to(o,b)))},
ee(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.tX(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.ee(d.a,c)
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
A.tX(j.a,j.b)
return}g=$.aV
if(g!==h)$.aV=h
else g=null
c=c.c
if((c&15)===8)new A.ts(q,d,n).$0()
else if(o){if((c&1)!==0)new A.tr(q,j).$0()}else if((c&2)!==0)new A.tq(d,q).$0()
if(g!=null)$.aV=g
c=q.c
if(c instanceof A.bH){p=q.a.$ti
p=p.i("eS<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.eI(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.vk(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.eI(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
BS(a,b){var s=t.ng
if(s.b(a))return s.a(a)
s=t.mq
if(s.b(a))return s.a(a)
throw A.m(A.uT(a,"onError",u.c))},
BH(){var s,r
for(s=$.fD;s!=null;s=$.fD){$.iX=null
r=s.b
$.fD=r
if(r==null)$.iW=null
s.a.$0()}},
C_(){$.vx=!0
try{A.BH()}finally{$.iX=null
$.vx=!1
if($.fD!=null)$.wu().$1(A.ye())}},
y9(a){var s=new A.m8(a),r=$.iW
if(r==null){$.fD=$.iW=s
if(!$.vx)$.wu().$1(A.ye())}else $.iW=r.b=s},
BX(a){var s,r,q,p=$.fD
if(p==null){A.y9(a)
$.iX=$.iW
return}s=new A.m8(a)
r=$.iX
if(r==null){s.b=p
$.fD=$.iX=s}else{q=r.b
s.b=q
$.iX=r.b=s
if(q==null)$.iW=s}},
tX(a,b){A.BX(new A.tY(a,b))},
y6(a,b,c,d,e){var s,r=$.aV
if(r===c)return d.$0()
$.aV=c
s=r
try{r=d.$0()
return r}finally{$.aV=s}},
y7(a,b,c,d,e,f,g){var s,r=$.aV
if(r===c)return d.$1(e)
$.aV=c
s=r
try{r=d.$1(e)
return r}finally{$.aV=s}},
BT(a,b,c,d,e,f,g,h,i){var s,r=$.aV
if(r===c)return d.$2(e,f)
$.aV=c
s=r
try{r=d.$2(e,f)
return r}finally{$.aV=s}},
nk(a,b,c,d){t.O.a(d)
if(B.a8!==c){d=c.oF(d)
d=d}A.y9(d)},
tb:function tb(a){this.a=a},
ta:function ta(a,b,c){this.a=a
this.b=b
this.c=c},
tc:function tc(a){this.a=a},
td:function td(a){this.a=a},
tI:function tI(){},
tJ:function tJ(a,b){this.a=a
this.b=b},
ak:function ak(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
S:function S(a,b){this.a=a
this.$ti=b},
cq:function cq(a,b){this.a=a
this.b=b},
mk:function mk(){},
im:function im(a,b){this.a=a
this.$ti=b},
iu:function iu(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bH:function bH(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
tl:function tl(a,b){this.a=a
this.b=b},
tp:function tp(a,b){this.a=a
this.b=b},
to:function to(a,b){this.a=a
this.b=b},
tn:function tn(a,b){this.a=a
this.b=b},
tm:function tm(a,b){this.a=a
this.b=b},
ts:function ts(a,b,c){this.a=a
this.b=b
this.c=c},
tt:function tt(a,b){this.a=a
this.b=b},
tu:function tu(a){this.a=a},
tr:function tr(a,b){this.a=a
this.b=b},
tq:function tq(a,b){this.a=a
this.b=b},
m8:function m8(a){this.a=a
this.b=null},
i5:function i5(){},
rI:function rI(a,b){this.a=a
this.b=b},
rJ:function rJ(a,b){this.a=a
this.b=b},
iU:function iU(){},
n_:function n_(){},
tE:function tE(a,b){this.a=a
this.b=b},
tF:function tF(a,b,c){this.a=a
this.b=b
this.c=c},
tY:function tY(a,b){this.a=a
this.b=b},
xD(a,b){var s=a[b]
return s===a?null:s},
vm(a,b,c){if(c==null)a[b]=a
else a[b]=c},
vl(){var s=Object.create(null)
A.vm(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
A1(a,b){return new A.c8(a.i("@<0>").af(b).i("c8<1,2>"))},
B(a,b,c){return b.i("@<0>").af(c).i("v4<1,2>").a(A.yh(a,new A.c8(b.i("@<0>").af(c).i("c8<1,2>"))))},
C(a,b){return new A.c8(a.i("@<0>").af(b).i("c8<1,2>"))},
xb(a){return new A.d8(a.i("d8<0>"))},
b7(a){return new A.d8(a.i("d8<0>"))},
vo(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
vn(a,b,c){var s=new A.d9(a,b,c.i("d9<0>"))
s.c=a.e
return s},
cU(a,b,c){var s=A.A1(b,c)
s.T(0,a)
return s},
A2(a,b){var s,r,q=A.xb(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.o)(a),++r)q.j(0,b.a(a[r]))
return q},
xc(a,b){var s=A.xb(b)
s.T(0,a)
return s},
v5(a){var s,r
if(A.vH(a))return"{...}"
s=new A.cZ("")
try{r={}
B.a.j($.bX,a)
s.a+="{"
r.a=!0
a.ae(0,new A.q8(r,s))
s.a+="}"}finally{if(0>=$.bX.length)return A.b($.bX,-1)
$.bX.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
hw(a){return new A.hv(A.an(A.A3(null),null,!1,a.i("0?")),a.i("hv<0>"))},
A3(a){return 8},
iw:function iw(){},
fu:function fu(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
ix:function ix(a,b){this.a=a
this.$ti=b},
iy:function iy(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d8:function d8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
mO:function mO(a){this.a=a
this.c=this.b=null},
d9:function d9(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
Z:function Z(){},
ao:function ao(){},
q7:function q7(a){this.a=a},
q8:function q8(a,b){this.a=a
this.b=b},
hv:function hv(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
eg:function eg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
fk:function fk(){},
iL:function iL(){},
BQ(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.dI(r)
q=A.wU(String(s),null)
throw A.m(q)}q=A.tQ(p)
return q},
tQ(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.mJ(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.tQ(a[s])
return a},
x8(a,b,c){return new A.hu(a,b)},
Be(a){return a.q5()},
AK(a,b){return new A.tw(a,[],A.Cd())},
AL(a,b,c){var s,r=new A.cZ(""),q=A.AK(r,b)
q.fq(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
mJ:function mJ(a,b){this.a=a
this.b=b
this.c=null},
mK:function mK(a){this.a=a},
jP:function jP(){},
jR:function jR(){},
hu:function hu(a,b){this.a=a
this.b=b},
kJ:function kJ(a,b){this.a=a
this.b=b},
kI:function kI(){},
pN:function pN(a){this.b=a},
pM:function pM(a){this.a=a},
tx:function tx(){},
ty:function ty(a,b){this.a=a
this.b=b},
tw:function tw(a,b,c){this.c=a
this.a=b
this.b=c},
wS(a){return new A.k5(new WeakMap(),a.i("k5<0>"))},
wT(a){var s=!0
s=typeof a=="string"
if(s)A.zM(a)},
zM(a){throw A.m(A.uT(a,"object","Expandos are not allowed on strings, numbers, bools, records or null"))},
zJ(a,b){a=A.aW(a,new Error())
if(a==null)a=A.dc(a)
a.stack=b.t(0)
throw a},
an(a,b,c,d){var s,r=c?J.x5(a,d):J.x4(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
A4(a,b,c){var s,r,q=A.a([],c.i("t<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.o)(a),++r)B.a.j(q,c.a(a[r]))
q.$flags=1
return q},
a6(a,b){var s,r
if(Array.isArray(a))return A.a(a.slice(0),b.i("t<0>"))
s=A.a([],b.i("t<0>"))
for(r=J.aw(a);r.q();)B.a.j(s,r.gH())
return s},
rK(a){var s,r,q
A.hQ(0,"start")
if(Array.isArray(a)){s=a
r=s.length
return A.xk(r<r?s.slice(0,r):s)}q=A.a6(a,t.S)
return A.xk(q)},
ls(a){return new A.hp(a,A.x7(a,!1,!0,!1,!1,""))},
vg(a,b,c){var s=J.aw(b)
if(!s.q())return a
if(c.length===0){do a+=A.J(s.gH())
while(s.q())}else{a+=A.J(s.gH())
while(s.q())a=a+c+A.J(s.gH())}return a},
Av(){return A.en(new Error())},
zF(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
wM(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
jU(a){if(a>=10)return""+a
return"0"+a},
k3(a){if(typeof a=="number"||A.tT(a)||a==null)return J.ew(a)
if(typeof a=="string")return JSON.stringify(a)
return A.xj(a)},
zK(a,b){A.vC(a,"error",t.K)
A.vC(b,"stackTrace",t.gl)
A.zJ(a,b)},
bN(a){return new A.js(a)},
aF(a,b){return new A.co(!1,null,b,a)},
uT(a,b,c){return new A.co(!0,a,b,c)},
zu(a,b,c){return a},
xl(a){var s=null
return new A.fc(s,s,!1,s,s,a)},
hP(a,b){return new A.fc(null,null,!0,a,b,"Value not in range")},
cx(a,b,c,d,e){return new A.fc(b,c,!0,a,d,"Invalid value")},
va(a,b,c){if(0>a||a>c)throw A.m(A.cx(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.m(A.cx(b,a,c,"end",null))
return b}return c},
hQ(a,b){if(a<0)throw A.m(A.cx(a,0,null,b,null))
return a},
p5(a,b,c,d,e){return new A.kx(b,!0,a,e,"Index out of range")},
cA(a){return new A.id(a)},
be(a){return new A.lU(a)},
ce(a){return new A.e8(a)},
aQ(a){return new A.jQ(a)},
wU(a,b){return new A.oO(a,b)},
zU(a,b,c){var s,r
if(A.vH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.a([],t.s)
B.a.j($.bX,a)
try{A.BF(a,s)}finally{if(0>=$.bX.length)return A.b($.bX,-1)
$.bX.pop()}r=A.vg(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
pJ(a,b,c){var s,r
if(A.vH(a))return b+"..."+c
s=new A.cZ(b)
B.a.j($.bX,a)
try{r=s
r.a=A.vg(r.a,a,", ")}finally{if(0>=$.bX.length)return A.b($.bX,-1)
$.bX.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
BF(a,b){var s,r,q,p,o,n,m,l=a.gL(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.q())return
s=A.J(l.gH())
B.a.j(b,s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gH();++j
if(!l.q()){if(j<=4){B.a.j(b,A.J(p))
return}r=A.J(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gH();++j
for(;l.q();p=o,o=n){n=l.gH();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}B.a.j(b,"...")
return}}q=A.J(p)
r=A.J(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.j(b,m)
B.a.j(b,q)
B.a.j(b,r)},
qx(a,b,c,d){var s
if(B.an===c){s=B.c.ga2(a)
b=J.cl(b)
return A.rL(A.d_(A.d_($.nx(),s),b))}if(B.an===d){s=B.c.ga2(a)
b=J.cl(b)
c=J.cl(c)
return A.rL(A.d_(A.d_(A.d_($.nx(),s),b),c))}s=B.c.ga2(a)
b=J.cl(b)
c=J.cl(c)
d=J.cl(d)
d=A.rL(A.d_(A.d_(A.d_(A.d_($.nx(),s),b),c),d))
return d},
Ac(a){var s,r,q=$.nx()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.o)(a),++r)q=A.d_(q,J.cl(a[r]))
return A.rL(q)},
vK(a){A.up(a)},
dT:function dT(a,b,c){this.a=a
this.b=b
this.c=c},
ti:function ti(){},
ar:function ar(){},
js:function js(a){this.a=a},
d4:function d4(){},
co:function co(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fc:function fc(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
kx:function kx(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
id:function id(a){this.a=a},
lU:function lU(a){this.a=a},
e8:function e8(a){this.a=a},
jQ:function jQ(a){this.a=a},
la:function la(){},
i4:function i4(){},
tk:function tk(a){this.a=a},
oO:function oO(a,b){this.a=a
this.b=b},
k:function k(){},
aS:function aS(a,b,c){this.a=a
this.b=b
this.$ti=c},
aN:function aN(){},
P:function P(){},
n9:function n9(){},
rv:function rv(){this.b=this.a=0},
cZ:function cZ(a){this.a=a},
k5:function k5(a,b){this.a=a
this.$ti=b},
qu:function qu(a){this.a=a},
vu(a){var s
if(typeof a=="function")throw A.m(A.aF("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.B7,a)
s[$.uF()]=a
return s},
tR(a){var s
if(typeof a=="function")throw A.m(A.aF("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.B8,a)
s[$.uF()]=a
return s},
B7(a){return t.gY.a(a).$0()},
B8(a,b,c){t.gY.a(a)
if(A.r(c)>=1)return a.$1(b)
return a.$0()},
y4(a){return a==null||A.tT(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.ha.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.jL.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
vI(a){if(A.y4(a))return a
return new A.ud(new A.fu(t.mp)).$1(a)},
CG(a,b){var s=new A.bH($.aV,b.i("bH<0>")),r=new A.im(s,b.i("im<0>"))
a.then(A.fG(new A.uq(r,b),1),A.fG(new A.ur(r),1))
return s},
y3(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
u0(a){if(A.y3(a))return a
return new A.u1(new A.fu(t.mp)).$1(a)},
ud:function ud(a){this.a=a},
uq:function uq(a,b){this.a=a
this.b=b},
ur:function ur(a){this.a=a},
u1:function u1(a){this.a=a},
Ap(a){var s
if(a==null)s=B.cY
else{s=new A.mY()
s.lR(a)}return s},
mI:function mI(){},
mY:function mY(){this.b=this.a=0},
kk:function kk(){},
oS:function oS(){},
oT:function oT(a,b){this.a=a
this.b=b},
oR:function oR(a,b,c){this.a=a
this.b=b
this.c=c},
oQ:function oQ(a,b,c){this.a=a
this.b=b
this.c=c},
k7:function k7(){},
mr:function mr(){},
kb:function kb(){},
ke:function ke(){var _=this
_.a=null
_.d=_.c=_.b=$},
mu:function mu(){},
t5(a){return new A.m0(a)},
kT:function kT(){},
m0:function m0(a){this.a=a},
t6:function t6(a){this.a=a},
jx:function jx(a){this.a=a},
mb:function mb(){},
jG:function jG(a){this.a=a},
mh:function mh(){},
jS:function jS(a){this.a=a},
ml:function ml(){},
k0:function k0(a){this.a=a},
mn:function mn(){},
k8:function k8(a){this.a=a},
ms:function ms(){},
k9:function k9(a){this.a=a},
mt:function mt(){},
kh:function kh(a){this.a=a},
my:function my(){},
kn:function kn(a){this.a=a},
mC:function mC(){},
ko:function ko(a){this.a=a},
mD:function mD(){},
ku:function ku(a){this.a=a},
mE:function mE(){},
kw:function kw(a){this.a=a},
mF:function mF(){},
kM:function kM(a){this.a=a},
mL:function mL(){},
kO:function kO(a){this.a=a},
mM:function mM(){},
kU:function kU(a){this.a=a},
mP:function mP(){},
lm:function lm(a){this.a=a},
mX:function mX(){},
lA:function lA(a){this.a=a},
n0:function n0(){},
lC:function lC(a){this.a=a},
n4:function n4(){},
lH:function lH(){},
jq:function jq(a,b){this.a=a
this.b=b},
nH:function nH(){},
lP:function lP(a){this.a=a},
nb:function nb(){},
m3:function m3(a){this.a=a},
nf:function nf(){},
m4:function m4(a){this.a=a},
ng:function ng(){},
jv:function jv(a){this.a=a},
jw:function jw(a,b,c){var _=this
_.y=a
_.Q$=b
_.e=c
_.a=null
_.d=_.c=_.b=$},
m9:function m9(){},
ma:function ma(){},
jN:function jN(a){this.a=a},
jO:function jO(a,b){var _=this
_.y=a
_.Q=_.z=0
_.e=b
_.a=null
_.d=_.c=_.b=$},
mj:function mj(){},
lF:function lF(a){this.a=a},
lG:function lG(a,b,c){var _=this
_.y=a
_.Q$=b
_.e=c
_.a=null
_.d=_.c=_.b=$},
n5:function n5(){},
n6:function n6(){},
m1:function m1(a){this.a=a},
ne:function ne(){},
jy:function jy(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.w=d
_.x=e
_.y=0
_.Q=_.z=!0
_.a=null
_.d=_.c=_.b=$},
nM:function nM(a,b){this.a=a
this.b=b},
nN:function nN(a,b,c){this.a=a
this.b=b
this.c=c},
mc:function mc(){},
uV(a,b,c,d){return new A.jC(b,c,d,a)},
jC:function jC(a,b,c,d){var _=this
_.Q=a
_.as=b
_.at=c
_.e=d
_.r=_.f=$
_.a=null
_.d=_.c=_.b=$},
wY(a,b){return new A.eT(a,b)},
h2:function h2(){},
eT:function eT(a,b){var _=this
_.x=a
_.y=b
_.a=null
_.d=_.c=_.b=$},
eQ:function eQ(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
f8:function f8(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
ey:function ey(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
eH:function eH(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
fe:function fe(a,b){var _=this
_.x=a
_.y=b
_.a=null
_.d=_.c=_.b=$},
mw:function mw(){},
eJ:function eJ(a,b){this.a=a
this.b=b},
eI:function eI(a,b){var _=this
_.e=a
_.f=b
_.r=$
_.a=null
_.d=_.c=_.b=$},
o6:function o6(a,b){this.a=a
this.b=b},
o7:function o7(){},
o8:function o8(a,b,c){this.a=a
this.b=b
this.c=c},
o9:function o9(){},
oa:function oa(a){this.a=a},
eL:function eL(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
h9:function h9(){},
eB:function eB(){var _=this
_.a=null
_.d=_.c=_.b=$},
eC:function eC(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
jF:function jF(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
eR:function eR(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
f9:function f9(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
lf:function lf(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
fq:function fq(){var _=this
_.a=null
_.d=_.c=_.b=$},
t7:function t7(a){this.a=a},
eZ:function eZ(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
me:function me(){},
mf:function mf(){},
mg:function mg(){},
mx:function mx(){},
mS:function mS(){},
mT:function mT(){},
oK(a,b,c,d){return new A.kd(a,b,c,d==null?1:d)},
kd:function kd(a,b,c,d){var _=this
_.e=a
_.f=b
_.r=$
_.w=null
_.x=c
_.y=d
_.z=0
_.a=null
_.d=_.c=_.b=$},
oL:function oL(a){this.a=a},
eP:function eP(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
eO:function eO(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
mv:function mv(){},
wZ(a,b){return new A.eU(a,b)},
eU:function eU(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
ks:function ks(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
kv:function kv(a,b,c,d,e){var _=this
_.at=a
_.e=b
_.f=c
_.r=d
_.w=1
_.x=e
_.a=null
_.d=_.c=_.b=$},
eV:function eV(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
f_:function f_(a,b){var _=this
_.e=a
_.f=b
_.r=0
_.w=$
_.a=null
_.d=_.c=_.b=$},
kS:function kS(a,b,c,d,e){var _=this
_.r=a
_.a=b
_.b=c
_.d=_.c=$
_.e=d
_.f=e},
e3:function e3(a,b){this.a=a
this.b=b},
kV:function kV(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
f6:function f6(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
lg:function lg(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
jp:function jp(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
vb(a,b,c,d){var s=new A.lp(a,b,c,A.b7(t.u),A.a([],t.gk))
s.is(b,c,d)
return s},
xn(a){return new A.fh(a)},
lq:function lq(){},
qG:function qG(a){this.a=a},
lp:function lp(a,b,c,d,e){var _=this
_.at=a
_.e=b
_.f=c
_.r=d
_.w=1
_.x=e
_.a=null
_.d=_.c=_.b=$},
fh:function fh(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
fg:function fg(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
mZ:function mZ(){},
lD:function lD(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
xy(a){return new A.fn(a)},
fn:function fn(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
mR:function mR(){},
f3:function f3(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
f4:function f4(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
k_:function k_(){},
kg:function kg(){},
zH(a,b){var s=$.uG()
if(!s.a.ak(b))return null
return s.lb(a,b)},
h4:function h4(){},
T(a,b,c,d){var s=A.a([],t.J)
if(c!=null)B.a.j(s,c)
if(d!=null)B.a.T(s,d)
return new A.h0(a,b,s)},
ki:function ki(a){this.a=a},
h0:function h0(a,b,c){this.a=a
this.b=b
this.c=c},
v(a,b,c){var s,r,q,p,o,n,m,l,k
$.xW=a
if(b==null)b=B.ke
s=t.s
r=t.gQ
q=A.a6(new A.au(A.a(c.split("\n"),s),t.gL.a(new A.u5()),r),r.i("aI.E"))
A.iY(q)
if(b===B.ac||b===B.av){p=A.a(q.slice(0),A.N(q))
for(r=t.gS.i("cY<Z.E>"),o=0;o<q.length;++o)B.a.h(p,o,A.tU(A.rK(new A.cY(new A.dp(q[o]),r)),A.Ci()))
A.iY(p)}if(b===B.kf||b===B.av){p=A.a(q.slice(0),A.N(q))
for(o=0;r=q.length,o<r;++o)B.a.h(p,r-o-1,A.tU(q[o],A.Cj()))
A.iY(p)}if(b===B.av||b===B.kg||b===B.q){p=A.a(q.slice(0),A.N(q))
for(r=t.gS.i("cY<Z.E>"),o=0;n=q.length,o<n;++o)B.a.h(p,n-o-1,A.tU(A.rK(new A.cY(new A.dp(q[o]),r)),A.yi()))
A.iY(p)}if(b===B.q){m=A.a([],s)
l=0
for(;;){if(0>=q.length)return A.b(q,0)
if(!(l<q[0].length))break
for(k=0,r="";k<q.length;++k,r=n){n=q[k]
if(!(l<n.length))return A.b(n,l)
n=r+A.BV(n[l])}B.a.j(m,r.charCodeAt(0)==0?r:r);++l}A.iY(m)
p=A.a(m.slice(0),s)
for(s=t.gS.i("cY<Z.E>"),o=0;r=m.length,o<r;++o)B.a.h(p,r-o-1,A.tU(A.rK(new A.cY(new A.dp(m[o]),s)),A.yi()))
A.iY(p)}},
tU(a,b){var s,r,q
for(s=a.length,r=0,q="";r<s;++r)q+=A.J(b.$1(a[r]))
return q.charCodeAt(0)==0?q:q},
BI(a){return A.y1(A.y2(a))},
y1(a){var s,r,q,p
A.a3(a)
for(s=0;s<3;++s){r=$.BJ[s]
q=B.i.c8(r,a)
if(q!==-1){p=1-q
if(!(p>=0&&p<r.length))return A.b(r,p)
return r[p]}}return a},
y2(a){var s,r,q,p
A.a3(a)
for(s=0;s<3;++s){r=$.BK[s]
q=B.i.c8(r,a)
if(q!==-1){p=1-q
if(!(p>=0&&p<r.length))return A.b(r,p)
return r[p]}}return a},
BV(a){var s,r,q,p
for(s=0;s<2;++s){r=$.BU[s]
q=B.i.c8(r,a)
if(q!==-1){p=B.c.ab(q+1,4)
if(!(p<r.length))return A.b(r,p)
return r[p]}}return a},
iY(a){var s,r,q,p,o,n=B.a.gaB(a).length,m=a.length,l=A.an(n*m,$.yF(),!1,t.oC),k=new A.aa(l,new A.a0(new A.e(0,0),new A.e(n,m)),t.eh)
for(s=0;s<a.length;++s)for(m=s*n,r=0;r<B.a.gaB(a).length;++r){if(!(s<a.length))return A.b(a,s)
q=a[s]
if(!(r<q.length))return A.b(q,r)
p=q[r]
q=$.cg
if(q!=null&&q.ak(p)){q=$.cg.m(0,p)
q.toString
o=q}else{q=$.zg()
if(q.ak(p)){q=q.m(0,p)
q.toString
o=q}else{q=$.zh().m(0,p)
q.toString
o=q}}k.l(r,s)
B.a.h(l,m+r,o)}n=$.uG()
m=$.cE
if(m==null)m=$.xW
if(m==null)m=1
l=$.cD.u()
n.ce(n.$ti.c.a(new A.ki(k)),null,null,null,m,m,l)},
dB:function dB(a,b){this.a=a
this.b=b},
u5:function u5(){},
oi:function oi(){},
om:function om(){},
on:function on(){},
oj:function oj(){},
ok:function ok(){},
oq:function oq(){},
or:function or(){},
ol:function ol(){},
oo:function oo(){},
op:function op(){},
a7(a,b,c){A.i()
$.b_.b=new A.nR(a,c,A.C(t.h,t.S))
$.b_.u().b=b
return $.b_.u()},
I(a,b){A.b1()
return $.iV=A.wB(a,B.i.dW(a," _")?$.dJ():$.dK(),b)},
j(a,b,c){return new A.pg(a,b,c,A.C(t.h,t.S))},
wB(a,b,c){var s=t.Q
return new A.cn(a,b,c,A.C(t.h,s),A.C(t.Z,s),A.C(t.M,s))},
fI(a,b){return new A.u4(a,b)},
Bq(a){return A.r(a)},
b2(){return new A.uB(1,0.1)},
i(){var s,r,q,p,o,n,m,l=$.h
if(l==null)return
s=l.er()
r=$.bo()
q=s.a.a7(1)
p=l.dy
p===$&&A.c()
o=l.fr
o===$&&A.c()
n=l.x
if(n==null)n=$.b_.u().x
if(n==null)n=1
m=$.b_.u().ay
m===$&&A.c()
r.ce(r.$ti.c.a(s),q.a,p,o,n,null,m)
$.h=null},
b1(){var s,r,q,p,o,n,m=$.iV
if(m==null)return
s=m.er()
r=m.b
r.toString
q=m.c
p=m.d
o=m.e
n=$.bh
r.ce(r.$ti.c.a(s),s.a,q,p,o,null,n)
$.iV=null},
te:function te(){},
nR:function nR(a,b,c){var _=this
_.Q=a
_.as=b
_.ax=_.at=null
_.ay=$
_.ch=!1
_.a=c
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=null},
pg:function pg(a,b,c,d){var _=this
_.Q=a
_.as=b
_.at=c
_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=null
_.db=!1
_.dx=null
_.fr=_.dy=$
_.a=d
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=null},
pm:function pm(a){this.a=a},
pj:function pj(a,b){this.a=a
this.b=b},
pr:function pr(a,b){this.a=a
this.b=b},
ps:function ps(a){this.a=a},
pq:function pq(a,b){this.a=a
this.b=b},
pn:function pn(a,b){this.a=a
this.b=b},
pt:function pt(a){this.a=a},
po:function po(a,b){this.a=a
this.b=b},
ph:function ph(a){this.a=a},
pi:function pi(a){this.a=a},
pk:function pk(a,b){this.a=a
this.b=b},
pl:function pl(a,b){this.a=a
this.b=b},
pp:function pp(a){this.a=a},
cn:function cn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=c
_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=null
_.ay=d
_.ch=e
_.CW=f},
nB:function nB(a){this.a=a},
nC:function nC(a){this.a=a},
nA:function nA(a,b,c){this.a=a
this.b=b
this.c=c},
nz:function nz(a){this.a=a},
nE:function nE(a){this.a=a},
ny:function ny(a){this.a=a},
nD:function nD(){},
u4:function u4(a,b){this.a=a
this.b=b},
uB:function uB(a,b){this.a=a
this.b=b},
a8(a,b,c){var s=$.bo().cb(a)
if(s!=null)return new A.mH(s,b,c==null?B.cd:c)
return new A.na(a,b,c==null?B.cd:c)},
vL(a,b){return new A.bI(a,b)},
xE(a){var s=new A.mQ(A.dy(t.iZ))
s.lQ(a)
return s},
hl:function hl(a,b){this.a=a
this.b=b},
tg:function tg(){},
mH:function mH(a,b,c){this.c=a
this.a=b
this.b=c},
na:function na(a,b,c){this.c=a
this.a=b
this.b=c},
aL:function aL(a,b){this.a=a
this.b=b},
il:function il(a){this.a=a},
mQ:function mQ(a){this.a=a},
tB:function tB(a){this.a=a},
bI:function bI(a,b){this.a=a
this.b=b},
j_(a,b,c,d){var s=$.wx()
s.ce(s.$ti.c.a(new A.kc(a)),null,1,100,d,b,null)},
kc:function kc(a){this.b=a},
CH(){A.a7(239,null,null).a6("magic/ring")
A.i()
var s=$.h=A.j("Ring[s] of Wisdom",B.D,1000)
s.v(20)
s.x=0.05
s.ks(new A.ut())},
ut:function ut(){},
j1(a,b){var s=A.C(t.iZ,t.i)
b.ae(0,new A.uC(s))
$.i2.h(0,a,new A.dA(A.xE(s),a))},
uC:function uC(a){this.a=a},
CZ(){var s,r,q="hit[s]",p=null,o="bash[es]",n="stab[s]",m="pierce[s]",l=A.a7(225,p,q)
l.a6("equipment/weapon/club")
l.x=0.5
l.cu(25,5)
A.i()
l=$.h=A.j("Stick",B.k,0)
l.E(1,20)
l.a9(4,6)
l.ad(3)
s=$.b9()
l.a.h(0,s,10)
l.w=10
A.i()
l=$.h=A.j("Cudgel",B.p,20)
l.E(6,60)
l.a9(9,8)
l.ad(4)
l.a.h(0,s,5)
l.w=10
A.i()
l=$.h=A.j("Club",B.w,40)
l.v(14)
l.a9(12,11)
l.ad(5)
l.a.h(0,s,2)
l.w=10
l=A.a7(237,p,q)
l.a6("equipment/weapon/staff")
l.x=0.5
l.y=!0
l.cu(35,4)
A.i()
l=$.h=A.j("Walking Stick",B.k,10)
l.E(2,40)
l.a9(9,10)
l.ad(3)
l.a.h(0,s,5)
l.w=15
A.i()
l=$.h=A.j("Sta[ff|aves]",B.w,50)
l.v(7)
l.a9(13,14)
l.ad(5)
l.a.h(0,s,2)
l.w=15
A.i()
l=$.h=A.j("Quartersta[ff|aves]",B.p,80)
l.v(24)
l.a9(20,22)
l.ad(8)
l.a.h(0,s,2)
l.w=15
l=A.a7(243,p,o)
l.a6("equipment/weapon/hammer")
l.x=0.5
l.cu(15,5)
A.i()
l=$.h=A.j("Hammer",B.k,120)
l.v(40)
l.a9(28,22)
l.ad(12)
A.i()
l=$.h=A.j("Mattock",B.w,240)
l.v(46)
l.a9(36,29)
l.ad(16)
A.i()
l=$.h=A.j("War Hammer",B.p,400)
l.v(52)
l.a9(44,38)
l.ad(20)
l=A.a7(250,p,o)
l.a6("equipment/weapon/mace")
l.x=0.5
l.cu(15,4)
A.i()
l=$.h=A.j("Morningstar",B.p,130)
l.v(24)
l.a9(25,21)
l.ad(11)
A.i()
l=$.h=A.j("Mace",B.f,310)
l.v(33)
l.a9(36,32)
l.ad(16)
l=A.a7(241,p,"whip[s]")
l.a6("equipment/weapon/whip")
l.x=0.5
l.cu(25,4)
A.i()
l=$.h=A.j("Whip",B.k,40)
l.v(4)
l.a9(9,7)
l.ad(1)
l.a.h(0,s,10)
l.w=5
A.i()
l=$.h=A.j("Chain Whip",B.p,230)
l.v(15)
l.a9(18,17)
l.ad(2)
A.i()
l=$.h=A.j("Flail",B.f,350)
l.v(27)
l.a9(28,24)
l.ad(4)
l=A.a7(209,p,n)
l.a6("equipment/weapon/dagger")
l.x=0.5
l.cu(2,8)
A.i()
l=$.h=A.j("Kni[fe|ves]",B.d,20)
l.E(3,20)
l.a9(6,5)
l.ad(6)
A.i()
l=$.h=A.j("Dagger",B.p,30)
l.E(4,40)
l.a9(8,6)
l.ad(8)
A.i()
l=$.h=A.j("Dirk",B.J,50)
l.E(6,70)
l.a9(9,7)
l.ad(9)
A.i()
l=$.h=A.j("Stiletto[es]",B.f,80)
l.v(10)
l.a9(11,8)
l.ad(11)
A.i()
l=$.h=A.j("Rondel",B.K,130)
l.v(20)
l.a9(13,9)
l.ad(13)
A.i()
l=$.h=A.j("Baselard",B.h,200)
l.v(30)
l.a9(15,11)
l.ad(15)
A.i()
l=$.h=A.j("Mercygiver",B.O,2000)
l.E(20,50)
l.x=0.2
l.a9(12,6)
r=t.lT.a(new A.uD())
l.db=!0
l.ks(r)
l=A.a7(170,p,"slash[es]")
l.a6("equipment/weapon/sword")
l.x=0.5
l.cu(20,5)
A.i()
l=$.h=A.j("Rapier",B.j,140)
l.v(13)
l.a9(13,13)
l.ad(4)
A.i()
l=$.h=A.j("Shortsword",B.f,230)
l.v(17)
l.a9(15,15)
l.ad(6)
A.i()
l=$.h=A.j("Scimitar",B.p,370)
l.v(18)
l.a9(24,18)
l.ad(9)
A.i()
l=$.h=A.j("Cutlass[es]",B.E,520)
l.v(20)
l.a9(26,22)
l.ad(11)
A.i()
l=$.h=A.j("Falchion",B.K,750)
l.v(34)
l.a9(28,25)
l.ad(15)
l=A.a7(186,p,n)
l.a6("equipment/weapon/spear")
l.x=0.5
l.l7(9)
A.i()
l=$.h=A.j("Pointed Stick",B.w,10)
l.E(2,30)
l.a9(7,9)
l.ad(6)
l.a.h(0,s,7)
l.w=12
A.i()
l=$.h=A.j("Spear",B.k,160)
l.E(13,60)
l.a9(16,13)
l.ad(15)
A.i()
l=$.h=A.j("Angon",B.p,340)
l.v(21)
l.a9(20,19)
l.ad(20)
l=A.a7(186,p,n)
l.a6("equipment/weapon/polearm")
l.x=0.5
l.y=!0
l.l7(4)
A.i()
l=$.h=A.j("Lance",B.J,550)
l.v(28)
l.a9(22,23)
l.ad(20)
A.i()
l=$.h=A.j("Partisan",B.f,850)
l.v(35)
l.a9(26,25)
l.ad(26)
l=A.a7(191,p,"chop[s]")
l.a6("equipment/weapon/axe")
l.x=0.5
A.i()
l=$.h=A.j("Hatchet",B.f,90)
l.E(6,50)
l.a9(12,10)
l.fn(20,8)
A.i()
l=$.h=A.j("Axe",B.k,210)
l.E(12,70)
l.a9(15,14)
l.fn(24,7)
A.i()
l=$.h=A.j("Valaska",B.p,330)
l.v(24)
l.a9(19,19)
l.fn(26,5)
A.i()
l=$.h=A.j("Battleaxe",B.j,550)
l.v(40)
l.y=!0
l.a9(25,30)
l.fn(28,4)
l=A.a7(8976,p,q)
l.a6("equipment/weapon/bow")
l.x=0.3
l.y=!0
l.cu(50,5)
A.i()
l=$.h=A.j("Short Bow",B.k,120)
l.E(6,60)
l.ay=A.bf(new A.aK(A.aT("arrow",B.y,B.W).a7(1)),m,5,p,8)
l.cx=12
l.ad(2)
l.a.h(0,s,15)
l.w=10
A.i()
l=$.h=A.j("Longbow",B.w,250)
l.v(13)
l.ay=A.bf(new A.aK(A.aT("arrow",B.y,B.W).a7(1)),m,9,p,12)
l.cx=18
l.ad(3)
l.a.h(0,s,7)
l.w=13
A.i()
l=$.h=A.j("Crossbow",B.p,600)
l.v(28)
l.ay=A.bf(new A.aK(A.aT("bolt",B.y,B.W).a7(1)),m,14,p,16)
l.cx=24
l.ad(4)
l.a.h(0,s,4)
l.w=14},
uD:function uD(){},
am(a,b,c,d,e,f,g){var s
A.fH()
$.ck().c6("monster/"+b)
s=t.s
$.al.b=new A.oH(a,B.a.gcp(b.split("/")),e,$.b3(),A.a([],t.x),A.a([],s))
$.al.u().e=f
$.al.u().r=c
$.al.u().b=g
if(d!=null)B.a.T($.al.u().x,A.a(d.split(" "),s))
return $.al.u()},
fH(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7="immobile",b8=$.cf
if(b8==null)return
s=t.s
r=A.a([$.al.u().ch],s)
if(r.length===0)B.a.j(r,"monster")
q=A.xc($.al.u().x,t.N)
q.T(0,b8.x)
p=b8.r
if(p==null)p=$.al.u().r
if(q.G(0,b7))p=0
o=b8.fr
n=o.length
if(n===1){if(0>=n)return A.b(o,0)
m=o[0]}else m=n>1?new A.m6(o):null
o=b8.ay
n=b8.fx
if(n==null)n=B.y
o=A.aT(o,n,b8.ch?B.cs:B.W).a7(1)
n=b8.cx
l=b8.db
k=b8.dx
j=b8.dy
if(b8.d==null)$.al.u()
i=$.al.u().c
h=b8.c
g=b8.CW
f=b8.cy
e=b8.b
if(e==null)e=0
d=$.al.u().b
if(d==null)d=10
c=b8.at
if(c==null)c=$.al.u().at
b=b8.ax
if(b==null)b=$.al.u().ax
a=b8.f
if(a==null)a=$.al.u().f
if(a==null)a=0
a0=b8.e
if(a0==null)a0=0
a1=$.al.u().e
if(a1==null)a1=0
a2=$.al.u().as
if(a2==null)a2=b8.as
a3=b8.y
if(a3==null)a3=$.al.u().y
a4=b8.z
if(a4==null)a4=$.al.u().z
if(b8.Q==null)$.al.u()
a5=q.nv()
a5.T(0,q)
q=a5.ah(0,"berzerk")
a6=a5.ah(0,"cowardly")
a7=a5.ah(0,"fearless")
a8=a5.ah(0,b7)
a9=a5.ah(0,"protective")
b0=a5.ah(0,"unique")
if(a5.a!==0)A.a_(A.aF('Unknown flags "'+a5.aG(0,", ")+'"',null))
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
B.a.T(b2,$.al.u().w)
B.a.T(b2,b8.w)
B.a.j(s,$.al.u().ch)
b4=$.ck()
b5=b8.a
if(b5==null)b5=$.al.u().a
b6=B.a.aG(r," ")
b4.ce(b4.$ti.c.a(new A.aA(o,n,g,l,k,f,e+d,c,b,a,a0+a1,new A.il(j),new A.ah(i.a|h.a),new A.nQ(q,a6,a7,a8,a9,b0),b3,a2,b2,a3,a4,m,s,b1)),o.a,g,g,b5,b5,b6)
$.cf=null},
p(a,b,c,d,e,f,g){var s
A.fH()
s=new A.jD(a,b,A.as($.al.u().ay,c,null),d,A.a([],t.da),A.a([],t.a_),A.a([],t.f8),A.a([],t.aC),f,$.b3(),A.a([],t.x),A.a([],t.s))
s.e=g
s.r=e
return $.cf=s},
nP(a,b,c,d,e){return new A.jD(a,b,d,e,A.a([],t.da),A.a([],t.a_),A.a([],t.f8),A.a([],t.aC),c,$.b3(),A.a([],t.x),A.a([],t.s))},
tf:function tf(){},
oH:function oH(a,b,c,d,e,f){var _=this
_.ay=a
_.ch=b
_.a=c
_.b=null
_.c=d
_.r=_.f=_.e=_.d=null
_.w=e
_.x=f
_.ax=_.at=_.as=_.Q=_.z=_.y=null},
jD:function jD(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
md:function md(a){this.a=a},
ag:function ag(a){this.a=a},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
m6:function m6(a){this.a=a},
bz:function bz(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
h_:function h_(a,b){this.b=a
this.a=b},
dq:function dq(a,b){this.b=a
this.a=b},
kp:function kp(a,b,c){this.b=a
this.c=b
this.a=c},
hh:function hh(a,b){this.b=a
this.a=b},
bY:function bY(a,b,c){this.b=a
this.c=b
this.a=c},
b8:function b8(a,b){this.b=a
this.a=b},
bT:function bT(a,b){this.b=a
this.a=b},
rf:function rf(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(a,b){this.b=a
this.a=b},
k6:function k6(){},
ka:function ka(){},
ll:function ll(){},
lB:function lB(){},
fX(a,b,c){var s=$.bm
$.bm=s+1
return new A.dl(a,b,c,s)},
dl:function dl(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
jr:function jr(a){this.a=a},
jz:function jz(a){this.a=a},
wG(a){return 2*A.w(a,1,15,1,4)/A.i7(50)},
jA:function jA(a){this.a=a},
hA:function hA(){},
ju:function ju(a){this.a=a},
jB:function jB(a){this.a=a},
kL:function kL(a){this.a=a},
lE:function lE(a){this.a=a},
lK:function lK(a){this.a=a},
m2:function m2(a){this.a=a},
bS:function bS(a,b){this.a=a
this.b=b},
nI:function nI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iH:function iH(a,b){this.a=a
this.b=b},
bj:function bj(){},
tz:function tz(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
zt(a){var s,r=A.a([],t.c4),q=Math.min($.n().hY(1,10),5),p=!1
for(;;){if(!(!p||r.length<q))break
s=$.vU().i4(a)
if(s.w)p=!0
if(!B.a.G(r,s))B.a.j(r,s)}return r},
fY:function fY(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g},
fA(a,b,c,d,e,f,g,h,i,j,k,l){var s=A.a((j==null?"monster":j).split(" "),t.s),r=i==null?1:i,q=h==null?1:h,p=$.vU()
p.ce(p.$ti.c.a(new A.fY(d,e,s,r,q,c,b!==!1)),null,k,f,l,g,null)},
vE(a,b){var s=null
A.fA("dungeon",s,new A.u3(a),"room",0.04,100,s,s,s,s,1,b)},
C9(a,b,c){var s="catacomb"
A.fA(s,null,new A.tZ(),s,0.02,100,b,null,null,a,1,c)},
Ca(a,b,c){A.fA("cavern",null,new A.u_(),"glowing-moss",0.1,100,b,null,null,a,1,c)},
Cz(a,b,c){A.fA("lake",!1,new A.ug(),"water",0.01,b,null,null,0,a,c,null)},
CI(a,b,c){A.fA("river",!1,new A.uu(),"water",0.01,b,null,null,0,a,c,null)},
ue(a,b,c){A.fA(a+" keep",!1,new A.uf(),"room",0.05,b,null,1.5,0,a,c,2)},
ep(a,b,c){var s=null
A.fA(a+" pit",!1,new A.uo(a),"glowing-moss",0.05,b,s,s,s,s,c,0.2)},
u3:function u3(a){this.a=a},
tZ:function tZ(){},
u_:function u_(){},
ug:function ug(){},
uu:function uu(){},
uf:function uf(){},
uo:function uo(a){this.a=a},
eD:function eD(a,b,c){var _=this
_.d=a
_.e=b
_.f=c
_.c=_.b=_.a=$},
eE:function eE(){this.c=this.b=this.a=$},
nZ:function nZ(a,b,c){var _=this
_.a=a
_.b=$
_.c=b
_.d=c},
o2:function o2(){},
o1:function o1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o_:function o_(){},
o0:function o0(){},
jX:function jX(a){this.a=a
this.c=this.b=0},
eK:function eK(a){var _=this
_.w=a
_.c=_.b=_.a=$},
A_(a){var s=A.zZ($.n().cS(a,a/2|0),B.kh)
return s},
zZ(a,b){return new A.eX(new A.pO(b,A.C(t.u,t.d2),A.a([],t.fv)),a)},
eX:function eX(a,b){var _=this
_.r=a
_.w=0
_.x=b
_.c=_.b=_.a=$},
pR:function pR(a){this.a=a},
pP:function pP(a){this.a=a},
pQ:function pQ(a,b){this.a=a
this.b=b},
eW:function eW(a,b){this.a=a
this.b=b
this.c=0},
rQ:function rQ(a,b){this.a=a
this.b=b},
pO:function pO(a,b,c){this.a=a
this.b=b
this.c=c},
eY:function eY(){this.c=this.b=this.a=$},
qz(a,b,c,d){return new A.qy(b,d,a,c)},
hK:function hK(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
qy:function qy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f7:function f7(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.c=_.b=_.a=$},
qH:function qH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0
_.f=e},
it:function it(a,b){this.a=a
this.b=b},
bU(a,b,c,d){var s=c==null?$.n().aF(1,3):c
return new A.tD(a,b,s,d==null?$.n().aF(1,3):d)},
fi:function fi(){this.c=this.b=this.a=$},
qU:function qU(a){this.a=a},
qV:function qV(a){this.a=a},
qS:function qS(a){this.a=a},
qW:function qW(a){this.a=a},
qT:function qT(a){this.a=a},
qR:function qR(a){this.a=a},
tD:function tD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vd(a,b){var s,r
switch(b.a){case 0:return $.n().U(3)===0?A.xp(a):A.xt(a)
case 1:return $.n().U(3)===0?A.xr(a):A.xs(a)
case 2:s=$.n().U(10)
A:{if(0===s){r=A.xr(a)
break A}if(1===s){r=A.xs(a)
break A}if(2===s||3===s){r=A.xp(a)
break A}r=A.xt(a)
break A}return r}},
qZ(){var s=$.n()
if(s.U(5)!==0)return B.jO
if(s.U(5)!==0)return B.jP
return B.jQ},
xt(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
switch(A.qZ().a){case 0:s=$.n()
s=new A.O(s.aC(3,8),s.aC(3,8))
break
case 1:s=$.n()
s=new A.O(s.aC(7,10),s.aC(7,10))
break
case 2:s=$.n()
s=new A.O(s.aC(9,16),s.aC(9,16))
break
default:s=null}r=s.a
q=s.b
if(r>q){p=q
q=r
r=p}o=$.n().U(2)===0
n=o?q:r
m=o?r:q
s=n+2
l=m+2
k=A.an(s*l,$.np(),!1,t.gf)
j=new A.aa(k,new A.a0(new A.e(0,0),new A.e(s,l)),t.o)
for(i=0;i<m;)for(++i,l=i*s,h=0;h<n;){++h
g=$.uI()
j.l(h,i)
B.a.h(k,l+h,g)}f=A.a([],t.g)
if(r<=9&&(n&1)===1&&(m&1)===1)B.a.j(f,A.a([new A.e(B.c.A(n,2)+1,B.c.A(m,2)+1)],t.l))
if(q>=5)for(s=B.c.A(r-1,2),l=t.l,e=0;e<s;++e){k=1+e
g=n-e
d=m-e
B.a.j(f,A.a([new A.e(k,k),new A.e(g,k),new A.e(k,d),new A.e(g,d)],l))}A.vc(j)
return j},
xp(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
switch(A.qZ().a){case 0:s=B.iz
break
case 1:s=B.iA
break
case 2:s=B.iB
break
default:s=null}r=s.a
q=s.b
s=$.n()
p=s.aC(r,q)
o=s.aC(p,B.e.aV(p*1.5))
n=s.U(2)===0
m=n?o:p
l=n?p:o
k=s.aC(2,m-3)
j=s.aC(2,l-3)
i=s.U(2)===0
h=s.U(2)===0
s=m+2
g=l+2
f=A.an(s*g,$.np(),!1,t.gf)
e=new A.aa(f,new A.a0(new A.e(0,0),new A.e(s,g)),t.o)
for(d=0;d<l;)for(++d,g=d*s,c=0;c<m;){++c
b=$.uI()
e.l(c,d)
B.a.h(f,g+c,b)}a=h?0:m-k
a0=h?k:m
a1=i?0:l-j
a2=i?j:l
for(d=a1;d<a2;)for(++d,g=d*s,c=a;c<a0;){++c
b=$.np()
e.l(c,d)
B.a.h(f,g+c,b)}a3=A.a([],t.g)
s=m-k
g=l-j
for(f=B.c.A(Math.min(s,g)-1,2),b=!i,a4=t.l,a5=!h,a6=k+1,a7=j+1,a8=0;a8<f;++a8){a9=A.a([],a4)
B.a.j(a3,a9)
if(!i||a5){b0=1+a8
B.a.j(a9,new A.e(b0,b0))}if(!i||h)B.a.j(a9,new A.e(m-a8,1+a8))
if(!b||a5)B.a.j(a9,new A.e(1+a8,l-a8))
if(!b||h)B.a.j(a9,new A.e(m-a8,l-a8))
if(i){b0=1+a8
b1=a7+a8
if(h){B.a.j(a9,new A.e(a6+a8,b0))
B.a.j(a9,new A.e(b0,b1))}else{B.a.j(a9,new A.e(s-a8,b0))
B.a.j(a9,new A.e(m-a8,b1))}}else{b0=l-a8
b1=g-a8
if(h){B.a.j(a9,new A.e(a6+a8,b0))
B.a.j(a9,new A.e(1+a8,b1))}else{B.a.j(a9,new A.e(m-a8,b1))
B.a.j(a9,new A.e(s-a8,b0))}}}A.vc(e)
return e},
xr(a){var s,r,q,p
switch(A.qZ().a){case 0:s=B.cy
break
case 1:s=B.cw
break
case 2:s=B.cx
break
default:s=null}r=s.a
q=s.b
p=$.n().aC(r,q)
return A.xq(p,B.c.A(p-1,2),a)},
xs(a){var s,r,q,p
switch(A.qZ().a){case 0:s=B.cy
break
case 1:s=B.cw
break
case 2:s=B.cx
break
default:s=null}r=s.a
q=s.b
s=$.n()
p=s.aC(r,q)
return A.xq(p,s.aC(2,B.c.A(p,2)-1),a)},
xq(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=a+2,h=A.an(i*i,$.np(),!1,t.gf),g=new A.aa(h,new A.a0(new A.e(0,0),new A.e(i,i)),t.o)
for(s=0;s<a;s=r)for(r=s+1,q=r*i,p=0;p<a;++p){if(p+s<b)continue
o=a-p-1
if(o+s<b)continue
if(p+a-s-1<b)continue
if(o+a-s-1<b)continue
o=p+1
n=$.uI()
g.l(o,r)
B.a.h(h,q+o,n)}m=A.a([],t.g)
if(a<=9&&(a&1)===1){i=B.c.A(a,2)+1
B.a.j(m,A.a([new A.e(i,i)],t.l))}if((a&1)===1)for(i=B.c.A(a,2),h=i-1,q=t.l,l=2;l<h;++l){o=i+1
n=o-l
k=o+l
B.a.j(m,A.a([new A.e(o,n),new A.e(k,o),new A.e(o,k),new A.e(n,o)],q))}j=B.c.A(a+1,2)-B.c.A(b+1,2)-3
for(i=a-1,h=a+4,q=t.l,l=0;l<=j;++l){o=B.c.A(i,2)-l
n=B.c.A(h,2)+l
B.a.j(m,A.a([new A.e(o,o),new A.e(n,o),new A.e(o,n),new A.e(n,n)],q))}A.vc(g)
return g},
vc(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(s=a.b,r=A.ac(s),q=t.ca,p=t.e0,o=p.i("k.E"),n=a.a,s=s.b.a,m=n.length,l=a.$ti.c;r.q();){k=r.b
j=r.c
a.l(k,j)
i=j*s+k
if(!(i>=0&&i<m))return A.b(n,i)
h=n[i]
if(!(h.a==null&&h.b===B.r))continue
h=new A.qY(new A.e(k,j),a)
g=A.a6(new A.ap(B.au,q.a(h),p),o)
f=B.a.cH(B.ch,h)
h=g.length
if(h===1){h=l.a(new A.e6(null,B.a.glx(g).gcQ()))
a.l(k,j)
B.a.h(n,i,h)}else if(h<=1)if(f){h=l.a($.yZ())
a.l(k,j)
B.a.h(n,i,h)}}},
As(a){return new A.e6(null,a)},
xo(a){return new A.e6(a,B.r)},
lx:function lx(){},
hV:function hV(a,b){this.a=a
this.b=b},
qY:function qY(a,b){this.a=a
this.b=b},
e6:function e6(a,b){this.a=a
this.b=b},
hW:function hW(a,b){this.a=a
this.b=b},
rZ:function rZ(a){this.a=a},
Ba(a){return A.uY(a,$.j7())},
BO(a){return A.v7(a,$.ja())},
Bb(a){return A.uY(a,$.uL())},
BP(a){return A.v7(a,$.wi())},
B9(a){return A.uY(a,$.uK())},
BN(a){return A.v7(a,$.wh())},
AD(a,b,c,d,e,f){var s,r,q,p=A.a([],t.J)
for(s=t.mO,r=b.length,q=0;q<e;++q){if(0>=r)return A.b(b,0)
B.a.j(p,f.$2(new A.fo(a,A.a([new A.Y(b.charCodeAt(0),c,B.t)],s)),q))}return p},
AC(a){var s=$.z0()
if(s.ak(a)){s=s.m(0,a)
s.toString
return s}return A.a([$.w8(),$.w9()],t.J)},
G(a,b,c,d){if(d==null)d=B.t
if(0>=b.length)return A.b(b,0)
return new A.fo(a,A.a([A.cP(b.charCodeAt(0),c,d)],t.mO))},
rW:function rW(){},
rV:function rV(){},
rU:function rU(){},
fo:function fo(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=0},
cs(a,b){var s=$.jV.b8(a,new A.nT(a)).b
s.bk(s.$ti.c.a(b))
if(s.gI(0)>10)s.cP()},
ct(a,b,c,d){var s=$.jV.b8(a,new A.nV(a)).c.b8(b,new A.nW())
s.bk(s.$ti.c.a(c))
if(s.gI(0)>20)s.cP()
A.jW(a,b,d)},
jW(a,b,c){$.jV.b8(a,new A.nU(a)).d.h(0,b,c)},
zG(a){var s,r=$.nS
if(r==null)return null
s=$.jV.m(0,a)
if(s==null)return null
return s.t(0)},
vp(a){var s=t.N
return new A.fv(a,A.hw(s),A.C(s,t.jo),A.C(s,t.jv))},
nT:function nT(a){this.a=a},
nV:function nV(a){this.a=a},
nW:function nW(){},
nU:function nU(a){this.a=a},
fv:function fv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tA:function tA(){},
H:function H(){},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
kf:function kf(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
km:function km(){},
jt:function jt(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
xf(a){return new A.ld(a)},
wR(a,b){return new A.k1(a,b)},
kA:function kA(){},
ld:function ld(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
jZ:function jZ(a,b,c){var _=this
_.z=a
_.e=b
_.f=c
_.a=null
_.d=_.c=_.b=$},
k1:function k1(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
lT:function lT(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
lW:function lW(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
cK:function cK(){},
o3:function o3(a,b){this.a=a
this.b=b},
o4:function o4(a){this.a=a},
o5:function o5(a,b){this.a=a
this.b=b},
kQ:function kQ(){},
lQ:function lQ(a,b,c,d){var _=this
_.z=a
_.Q=b
_.e=c
_.f=d
_.a=null
_.d=_.c=_.b=$},
lR:function lR(a,b,c){var _=this
_.Q=a
_.as=b
_.at=!1
_.e=c
_.r=_.f=$
_.a=null
_.d=_.c=_.b=$},
bt(a){return new A.m_(a)},
v7(a,b){return new A.l8(a,b)},
uY(a,b){return new A.jK(a,b)},
lu(){return new A.lt()},
m_:function m_(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
l8:function l8(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
jK:function jK(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
lt:function lt(){var _=this
_.a=null
_.d=_.c=_.b=$},
bp:function bp(){},
yk(a){return 1/(1+Math.max(0,a)/40)},
bf(a,b,c,d,e){var s=e==null?0:e
return new A.ba(a,b,c,s,d==null?$.az():d)},
bO(a){var s=t.iO,r=t.kt
return new A.bb(a,A.a([],s),A.a([],r),A.a([],s),A.a([],r),$.az())},
ba:function ba(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kr:function kr(a,b){this.a=a
this.b=b},
dm:function dm(a){this.a=a},
dz:function dz(a){this.a=a},
bb:function bb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=1},
p4:function p4(){},
p3:function p3(){},
p2:function p2(){},
p1:function p1(){},
aG:function aG(a,b){this.a=a
this.b=b},
c5:function c5(){},
hg:function hg(){this.b=this.a=0},
h1:function h1(){this.b=this.a=0},
hM:function hM(){this.b=this.a=0},
dS:function dS(){this.b=this.a=0},
he:function he(){this.b=this.a=0},
hU:function hU(a){this.c=a
this.b=this.a=0},
hL:function hL(){this.b=this.a=0},
c6(a,b,c,d,e,f,g){var s=d==null?new A.og():d
return new A.dU(a,b,e,f,c,s,g==null?new A.oh():g)},
dU:function dU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
og:function og(){},
oh:function oh(){},
hb:function hb(){this.a=0},
de(a){var s
A.a3(a)
s=$.vN
return s==null?null:s.$1(a)},
k4:function k4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aM:function aM(a){this.a=a},
v0(a,b,c,d,e){var s=A.hw(t.fD),r=A.a([],t.iA),q=A.a([],t.bI),p=A.a([],t.l),o=new A.hb(),n=new A.at(c,A.b7(t.B),new A.bd(t.mh),o,new A.dS(),new A.h1(),new A.dS(),new A.he(),new A.hg(),new A.hL(),new A.hM(),A.C(t.h,t.mF),new A.e(0,0))
o.a=240
n.bt()
o=c.CW.a
o.toString
n.z=B.c.M(B.e.N(Math.pow(o,1.458)+9),0,n.gbr())
o=c.cx.a
o.toString
n.ch=A.ky(o)
q=new A.kj(a,s,r,q,new A.hb(),p,b,n)
s=e==null?100:e
s=A.Aw(s,d==null?80:d,q)
q.x!==$&&A.ay()
q.x=s
s.dK(n)
B.a.T(p,s.f.b.bR(-1))
s=$.n()
B.a.bM(t.A.a(p),s.a)
return q},
kj:function kj(a,b,c,d,e,f,g,h){var _=this
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
p_:function p_(a){this.a=a},
ie:function ie(){},
lZ:function lZ(){},
fa:function fa(a){this.a=a},
xd(a,b){var s
A:{if(B.cu===b||B.iv===b){s=!0
break A}if(B.cv===b||B.aI===b||B.y===b){s=!1
break A}s=null}return A.yA(a,$.yO(),t.jt.a(t.po.a(new A.pX(s))),null)},
e2(a,b){var s,r,q,p,o,n,m,l,k={},j=A.a([],t.s)
k.a=""
k.b=-1
s=new A.pZ(k,b)
r=new A.pY(k,j)
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
kP:function kP(a){this.a=a
this.b=0},
pX:function pX(a){this.a=a},
pZ:function pZ(a,b){this.a=a
this.b=b},
pY:function pY(a,b){this.a=a
this.b=b},
c0:function c0(a,b){this.a=a
this.b=b},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
w(a,b,c,d,e){if(a<=b)return d
if(a>=c)return e
return d+(a-b)/(c-b)*(e-d)},
ym(a,b){var s=new A.u7(),r=s.$1(0)
if(typeof r!=="number")return r.F()
r=s.$1(r+a)
if(typeof r!=="number")return r.F()
r=s.$1(r+b)
if(typeof r!=="number")return r.q3()
return r>>>0},
u7:function u7(){},
dy(a){var s=t.N
return new A.ff(A.C(s,a.i("c3<0>")),A.C(s,a.i("bv<0>")),A.C(t.nP,a.i("iK<0>")),a.i("ff<0>"))},
ff:function ff(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
qI:function qI(a){this.a=a},
qJ:function qJ(a){this.a=a},
qN:function qN(a){this.a=a},
qO:function qO(a,b,c){this.a=a
this.b=b
this.c=c},
qL:function qL(a){this.a=a},
qM:function qM(a,b){this.a=a
this.b=b},
qK:function qK(a,b){this.a=a
this.b=b},
bv:function bv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.$ti=g},
c3:function c3(a,b,c){this.a=a
this.b=b
this.$ti=c},
mW:function mW(a,b){this.a=a
this.b=b},
iK:function iK(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.$ti=d},
Ao(a){return new A.aK(a)},
Ab(a,b,c){return A.aT(a,c,b)},
aT(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(B.i.io(a,"a ")){a=B.i.cY(a,2)
s=!1}else if(B.i.io(a,"an ")){a=B.i.cY(a,3)
s=!0}else{if(0>=a.length)return A.b(a,0)
s=B.i.G("aeiouAEIOU",a[0])}r=$.yQ().ki(a)
if(r!=null){q=r.b
p=q.length
if(1>=p)return A.b(q,1)
o=q[1]
o.toString
if(2>=p)return A.b(q,2)
q=q[2]
q.toString
n=o
a=q}else n=""
m=A.qr(n,!1,!0)
l=A.qr(n,!1,!1)
q=n.length===0
k=A.qr(a,q,!0)
j=A.qr(a,q,!1)
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
default:p=null}return new A.qq(s,q,o,"# "+l+"<p>"+j,p,"the # "+l+"<p>"+j,b)},
qr(a,b,c){var s,r={}
r.a=!1
s=A.yA(a,$.yR(),t.jt.a(t.po.a(new A.qs(r,c))),null)
if(!c&&!r.a&&b)return s+"s"
return s},
Aa(a,b,c,d){return new A.hH(a,b,c,d)},
dC:function dC(){},
aK:function aK(a){this.a=a},
qq:function qq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
qt:function qt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qs:function qs(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
hH:function hH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e5:function e5(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=e},
R(a,b,c){var s,r,q,p,o,n=B.c.t(Math.abs(a)),m=$.yN().ki(n)
if(m!=null){s=m.b
if(2>=s.length)return A.b(s,2)
r=s[2]
r.toString
s=s[1]
s.toString
s=A.a([s],t.s)
for(q=B.c.A(r.length,3),p=0;p<q;++p){o=p*3
s.push(B.i.aM(r,o,o+3))}n=B.a.aG(s,",")}if(a<0)n="-"+n
else if(a>0&&b)n="+"+n
return B.i.dg(n,c==null?0:c)},
xe(a,b,c){var s=A.y(a).i("br<1,2>"),r=b.i("@<0>").af(c).i("+(1,2)")
return A.qa(new A.br(a,s),s.af(r).i("1(k.E)").a(new A.q9(b,c)),s.i("k.E"),r)},
v6(a,b,c){var s=B.e.i2(a,b)
return B.i.dg(s,c==null?0:c)},
qw(a,b){var s=b==null?0:b
s=B.e.i2(a*100,s)
return B.i.dg(s+"%",0)},
q9:function q9(a,b){this.a=a
this.b=b},
lY:function lY(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=0
_.e=c
_.f=0},
a5:function a5(){},
W:function W(){},
d0:function d0(){},
cL:function cL(){},
dR:function dR(){},
aY:function aY(a){this.a=a},
lv:function lv(){},
cd:function cd(a){var _=this
_.a=!0
_.c=_.b=null
_.d=a},
r0:function r0(a,b,c){this.a=a
this.b=b
this.c=c},
r_:function r_(a){this.a=a},
dW:function dW(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.d=$
_.e=null
_.f=!1
_.r=0
_.w=null},
oF:function oF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oG:function oG(a,b){this.a=a
this.b=b},
oE:function oE(a){this.a=a},
at:function at(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
p0:function p0(a,b,c){this.a=a
this.b=b
this.c=c},
v1(a,b,c,d,e){return new A.cQ(a,b,c,d,e)},
cQ:function cQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,a0,a1,a2,a3,a4){var s=new A.i6(),r=new A.fW(),q=new A.ih(),p=new A.hj(),o=new A.dt(a,b,c,d,e,f,g,h,i,j,k,n,a0,l,m,s,r,q,p)
s.b=a3
s.a=s.dv(o)
r.b=a1
r.a=r.dv(o)
q.b=a4
q.a=q.dv(o)
p.b=a2
p.a=p.dv(o)
return o},
dt:function dt(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
hy:function hy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
q_:function q_(){},
q2:function q2(){},
q3:function q3(){},
q0:function q0(){},
q1:function q1(){},
q4:function q4(){},
c1:function c1(){},
aJ:function aJ(){},
mU:function mU(){},
ln(a,b,c,d){return new A.cW(a,b,d,c)},
cW:function cW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fd:function fd(){},
hO:function hO(a){this.a=a},
ai:function ai(){},
i3:function i3(a,b){this.a=a
this.b=b},
rc:function rc(a){this.a=a},
rb:function rb(){},
rd:function rd(a,b,c){this.a=a
this.b=b
this.c=c},
dr:function dr(a){this.a=a},
n2:function n2(){},
i7(a){if(a<=10)return B.e.P(A.w(a,1,10,0,20))
return B.e.P(A.w(a,10,50,20,200))},
xw(a){if(a<=20)return A.w(a,1,20,0.1,1)
if(a<=30)return A.w(a,20,30,1,1.5)
if(a<=40)return A.w(a,30,40,1.5,1.8)
if(a<=50)return A.w(a,40,50,1.8,2)
return A.w(a,50,60,2,2.1)},
wE(a){if(a<=10)return B.e.P(A.w(a,1,10,-50,0))
if(a<=30)return B.e.P(A.w(a,10,30,0,20))
return B.e.P(A.w(a,30,60,20,60))},
wF(a){if(a<=10)return B.e.P(A.w(a,1,10,-30,0))
if(a<=30)return B.e.P(A.w(a,10,30,0,20))
return B.e.P(A.w(a,30,60,20,50))},
ky(a){if(a<=10)return B.e.P(A.w(a,1,10,0,20))
return B.e.P(A.w(a,10,50,20,200))},
bd:function bd(a){this.a=null
this.$ti=a},
cy:function cy(a,b,c){this.c=a
this.a=b
this.b=c},
cz:function cz(){},
ru:function ru(a,b,c){this.a=a
this.b=b
this.c=c},
i6:function i6(){this.b=0
this.a=null},
fW:function fW(){this.b=0
this.a=null},
ih:function ih(){this.b=0
this.a=null},
hj:function hj(){this.b=0
this.a=null},
BM(a){A.r(a)
return 1},
BL(a){A.r(a)
return 0},
cm:function cm(a,b){this.a=a
this.b=b},
ex:function ex(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
eM:function eM(a){this.b=a},
ov:function ov(){},
ou:function ou(){},
ot:function ot(a){this.a=a},
mp:function mp(){},
bq(a,b){var s=A.a([],t.I)
if(b!=null)B.a.T(s,b)
return new A.bZ(a,s,a.c)},
c7:function c7(a,b){this.a=a
this.c=b},
bD:function bD(){},
bZ:function bZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
pf:function pf(){},
dQ:function dQ(a,b){this.a=a
this.b=b},
mG:function mG(){},
L:function L(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$
_.f=e},
pH:function pH(){},
pC:function pC(){},
pB:function pB(){},
pA:function pA(){},
pI:function pI(){},
pD:function pD(){},
pE:function pE(a){this.a=a},
pG:function pG(a){this.a=a},
pF:function pF(){},
bP:function bP(a,b){this.a=a
this.b=b},
rX:function rX(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
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
lr:function lr(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a,b){this.a=a
this.b=b},
zy(a){var s,r,q,p,o
for(s=$.eA.length,r=t.P,q=0;q<$.eA.length;$.eA.length===s||(0,A.o)($.eA),++q){p=$.eA[q]
o=r.a(a.$1(p.a))
p.b!==$&&A.ay()
p.b=o}B.a.aP($.eA)},
aO(a){var s=new A.jE(a)
B.a.j($.eA,s)
return s},
jE:function jE(a){this.a=a
this.b=$},
aA:function aA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
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
fl:function fl(a,b){this.a=a
this.b=b},
nQ:function nQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jI(a,b,c){return new A.jH(a,b,c)},
ad:function ad(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
qj:function qj(a,b){this.a=a
this.b=b},
qk:function qk(a,b,c){this.a=a
this.b=b
this.c=c},
ql:function ql(a,b){this.a=a
this.b=b},
jH:function jH(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
qh:function qh(a,b,c,d){var _=this
_.d=a
_.e=null
_.a=b
_.b=c
_.c=d},
f0:function f0(){},
qi:function qi(a,b){this.a=a
this.b=b},
cp:function cp(){this.a=$},
cI:function cI(){this.a=$},
nL:function nL(a,b){this.a=a
this.b=b},
nJ:function nJ(a){this.a=a},
nK:function nK(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(){this.a=$},
nF:function nF(a){this.a=a},
nG:function nG(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(){},
lo:function lo(){},
cr:function cr(a,b){this.a=a
this.b=0
this.$ti=b},
cw(a,b,c,d,e,f){var s=new A.kY(c,d!==!1,e===!0,f,a,b,new A.cr(A.a([],t.k5),t.r),A.a([],t.l))
s.fH(a,b,f)
return s},
eN:function eN(){},
oM:function oM(a,b,c){this.a=a
this.b=b
this.c=c},
oN:function oN(a,b,c){this.a=a
this.b=b
this.c=c},
kY:function kY(a,b,c,d,e,f,g,h){var _=this
_.r=a
_.w=b
_.x=c
_.y=d
_.a=e
_.b=f
_.d=_.c=$
_.e=g
_.f=h},
oP:function oP(a,b){this.a=a
this.b=b},
n1:function n1(a,b){this.a=a
this.b=b},
kN(a){var s
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
pS:function pS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.w=_.r=_.f=!0},
pT:function pT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pU:function pU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f5:function f5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lc:function lc(){},
yc(a){var s=a.a.e
if(s.Y(0,$.bL()))return 8
if((s.a&$.V().a)===0)return 10
return 1},
re:function re(a){this.a=a
this.b=null},
n3:function n3(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=_.c=$
_.e=c
_.f=d},
tH:function tH(a,b,c){this.a=a
this.b=b
this.c=c},
Aw(a,b,c){var s,r=A.a([],t.p5),q=new A.rq(),p=t.jh,o=a*b
if(o>0)s=A.an(o,q.$1(B.al),!1,p)
else s=J.x4(0,p)
s=new A.aa(s,new A.a0(new A.e(0,0),new A.e(a,b)),t.lr)
s.lI(a,b,q,p)
return new A.rg(c,r,s,A.C(t.u,t.D),new A.aa(A.an(o,null,!1,t.e9),new A.a0(new A.e(0,0),new A.e(a,b)),t.hE))},
rg:function rg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=_.c=$
_.e=0
_.f=c
_.r=d
_.w=e},
rq:function rq(){},
rt:function rt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rs:function rs(a){this.a=a},
rp:function rp(){},
rr:function rr(a){this.a=a},
kX(a){return new A.ah(a)},
AB(a,b,c,d,e,f){return new A.d3(a,f,d==null?0:d,b,c,e)},
ah:function ah(a){this.a=a},
bG:function bG(a){this.a=a},
d3:function d3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d2:function d2(a,b){var _=this
_.a=a
_.b=!1
_.f=_.e=_.d=_.c=0
_.r=!1
_.w=b
_.x=0},
jn:function jn(a,b){var _=this
_.b=a
_.c=b
_.d=0
_.a=null},
fZ:function fZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jT:function jT(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
h5:function h5(a){this.a=a
this.b=20},
U(a,b){var s,r,q,p,o,n,m=A.a([],t.mO)
for(s=new A.dp(a),r=t.gS,s=new A.ca(s,s.gI(0),r.i("ca<Z.E>")),r=r.i("Z.E");s.q();){q=s.d
if(q==null)q=r.a(q)
for(p=b.length,o=0;o<b.length;b.length===p||(0,A.o)(b),++o){n=b[o]
B.a.j(m,new A.Y(q,n,B.z))}}return m},
ha:function ha(a,b){this.a=a
this.b=b
this.c=0},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
kq:function kq(a,b){this.a=a
this.b=b
this.c=0},
kt:function kt(a){this.a=a
this.b=0},
kB:function kB(a,b){this.a=a
this.b=b
this.c=2},
kR:function kR(a,b){this.a=a
this.b=b
this.c=-1},
lb:function lb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lN:function lN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0
_.f=e},
lS:function lS(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=8},
zN(a,b){var s,r,q,p,o,n=A.a([],t.hC)
for(s=$.w2(),r=b.Q.c.c,q=0;q<15;++q){p=s[q]
o=r.m(0,p.gcJ())
if((o==null?0:o)>0)n.push(p)}n=new A.hd(b,n,A.C(t.M,t.de))
n.lK(a,b)
return n},
hd:function hd(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.e=0
_.a=null},
oC:function oC(){},
oy:function oy(){},
oD:function oD(){},
oz:function oz(){},
oA:function oA(){},
oB:function oB(a,b){this.a=a
this.b=b},
h6:function h6(){},
ob:function ob(a,b){this.a=a
this.b=b},
fV:function fV(a,b){var _=this
_.e=a
_.b=b
_.c=0
_.a=null},
l9:function l9(a){this.b=a
this.c=0
this.a=null},
wW(a0,a1){var s,r,q,p,o,n,m,l,k=a1.y.Q,j=k.e.d3(),i=k.f.d3(),h=k.y,g=t.M,f=t.S,e=A.cU(k.z.a,g,f),d=k.at,c=k.ax,b=t.P,a=A.cU(c.a,b,f)
b=A.cU(c.b,b,f)
s=t.q
r=A.cU(c.c,s,f)
q=A.cU(c.d,t.R,f)
p=A.xc(c.e,s)
s=A.cU(c.f,s,f)
c=k.Q
o=k.as
n=k.ay.b
m=k.ch.b
l=k.CW.b
d=new A.dY(a1,A.x_(k.a,k.b,k.c,k.d,j,i,k.r,k.w,k.x,h,new A.i3(e,A.C(g,f)),d,new A.hy(a,b,r,q,p,s),c,o,m,k.cx.b,n,l),a0,new A.pW(d),new A.pz(a1))
d.r=new A.r6(d)
l=A.a([],t.pl)
n=A.a([],t.lE)
d.w!==$&&A.ay()
d.w=new A.rh(d,l,n,B.jD,B.al)
$.nS=d
$.jV.aP(0)
return d},
oV(a,b,c,d){var s,r,q,p,o,n,m,l=A.v0(b,0,c,34,60)
if(d)for(s=b.lB(c),r=s.length,q=l.y,p=q.Q,o=p.e,p=p.ax,n=0;n<s.length;s.length===r||(0,A.o)(s),++n){m=s[n]
o.ca(m)
p.dc(m)
q.bt()}for(s=l.ef(),r=s.$ti,s=new A.ak(s.a(),r.i("ak<1>")),r=r.c;s.q();){q=s.b
if(q==null)r.a(q)}if(d)a.bj()
return A.wW(a,l)},
dY:function dY(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=_.r=$
_.y=_.x=0
_.z=!1
_.a=_.ax=_.at=_.as=_.Q=null},
oZ:function oZ(a,b){this.a=a
this.b=b},
oX:function oX(){},
oY:function oY(a,b){this.a=a
this.b=b},
oW:function oW(a,b){this.a=a
this.b=b},
hx:function hx(a,b){var _=this
_.b=a
_.c=b
_.d=0
_.a=null},
xx(a,b,c){var s=new A.ic(a,b,c,A.a([],t.lE))
s.lP(a,b,c)
return s},
Bh(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=null,q=null,p=0;p<a.length;a.length===s||(0,A.o)(a),++p){o=a[p]
n=b.$1(o)
if(q==null||n<q){q=n
r=o}}return r},
Bg(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=null,q=null,p=0;p<a.length;a.length===s||(0,A.o)(a),++p){o=a[p]
n=b.$1(o)
if(q==null||n>q){q=n
r=o}}return r},
ic:function ic(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=!1
_.r=0
_.a=null},
rR:function rR(a){this.a=a},
rS:function rS(a){this.a=a},
AE(a){var s,r,q,p,o=A.a([],t.eI)
for(s=$.uE(),r=a.b,q=0;q<26;++q){p=s[q]
if(p.gbE().dP(r)==null)o.push(p)}return new A.ig(a,o)},
ig:function ig(a,b){this.b=a
this.c=b
this.a=null},
hi:function hi(a){var _=this
_.c=_.b=0
_.d=30
_.e=a
_.a=null},
f:function f(a,b){this.a=a
this.b=b},
k2:function k2(a,b,c,d){var _=this
_.e=a
_.f=b
_.b=c
_.c=d
_.a=null},
os:function os(a){this.a=a},
fr:function fr(a,b){this.a=a
this.b=b},
cR:function cR(){},
zR(a,b){var s=t.q
return B.c.am(s.a(a).d,s.a(b).d)},
zO(a,b){var s=t.q
return B.c.am(s.a(a).c,s.a(b).c)},
zQ(a,b){var s=t.q
return B.c.am(s.a(a).as,s.a(b).as)},
zP(a,b){var s=t.q
s.a(a)
s.a(b)
return B.i.am(a.a.a7(1).a.toLowerCase(),b.a.a7(1).a.toLowerCase())},
kD:function kD(a,b){var _=this
_.e=$
_.b=a
_.c=b
_.a=null},
px:function px(){},
py:function py(a){this.a=a},
pw:function pw(a,b){this.a=a
this.b=b},
A7(a,b){var s=t.P,r=s.a(a).b.a,q=s.a(b).b.a
s=new A.qc()
if(s.$1(r)&&!s.$1(q))return 1
if(!s.$1(r)&&s.$1(q))return-1
return B.c.am(r,q)},
A6(a,b){var s=t.P
return B.c.am(s.a(a).c,s.a(b).c)},
A8(a,b){var s=t.P
return B.i.am(s.a(a).a.a.toLowerCase(),s.a(b).a.a.toLowerCase())},
A5(a,b){var s=null,r=A.a([new A.aP("Name",B.a7,0,s),new A.aP("Depth",B.am,5,s),new A.aP("Seen",B.am,5,s),new A.aP("Slain",B.am,5,s)],t.G),q=t.it,p=t.o9
p=A.a([new A.bE("appearance",A.a([A.CE(),A.yr()],q),p),new A.bE("name",A.a([A.ys()],q),p),new A.bE("depth",A.a([A.yr(),A.ys()],q),p)],t.d4)
q=t.hb
p=new A.kW(A.vh(r,A.a([new A.cb("all",new A.qf(),q),new A.cb("uniques",new A.qg(),q)],t.gp),p,!0,t.P),a,b)
p.nu()
return p},
kW:function kW(a,b,c){var _=this
_.e=a
_.b=b
_.c=c
_.a=null},
qc:function qc(){},
qf:function qf(){},
qg:function qg(){},
qd:function qd(){},
qe:function qe(){},
qb:function qb(a,b){this.a=a
this.b=b},
l:function l(a){this.a=a},
ds:function ds(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
dV:function dV(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
hk:function hk(a,b){var _=this
_.y=null
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
p9:function p9(a){this.a=a},
pa:function pa(a){this.a=a},
pb:function pb(a){this.a=a},
pc:function pc(a){this.a=a},
pd:function pd(a){this.a=a},
pe:function pe(a){this.a=a},
b5:function b5(){},
pu:function pu(){},
x1(a,b,c){var s,r=new A.kC(b,A.x2(b,c?78:34)),q=b.a
if(q.x!=null)r.b=new A.io(a,b)
if(q.Q+b.gc4()!==0||q.z!=null)r.c=new A.iq(b)
if(q.e!=null)r.d=new A.iJ(b)
q=q.w
if(q!=null){s=c?78:34
r.e=new A.fz(A.e2(s,q.a),"Use")}return r},
x2(a,b){var s,r,q,p,o,n,m,l,k,j=A.a([],t.s)
for(s=0;s<4;++s){r=B.aV[s]
for(q=a.gaj(),p=q.length,o=0,n=0;n<q.length;q.length===p||(0,A.o)(q),++n)o+=q[n].dt(r)
if(o<0)B.a.j(j,"It lowers your "+r.c+" by "+-o+".")
else if(o>0)B.a.j(j,"It raises your "+r.c+" by "+o+".")}a.gek().ae(0,new A.pv(j))
q=a.a
m=q.y
if(m!=null){p=m.b
l=p.e
k=l!==$.az()?" "+l.a:""
B.a.j(j,"It can be thrown for "+p.c+k+" damage up to range "+p.d+".")
p=m.a
if(p!==0)B.a.j(j,"It has a "+p+"% chance of breaking when thrown.")}p=q.ay
if(p>0)B.a.j(j,"It emanates "+p+" light.")
for(q=q.cx,q=new A.c9(q,q.r,q.e,A.y(q).i("c9<1>"));q.q();)B.a.j(j,"It can be destroyed by "+q.d.a.toLowerCase()+".")
return new A.fz(A.e2(b-2,B.a.aG(j," ")),"Description")},
kC:function kC(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=b},
pv:function pv(a){this.a=a},
da:function da(){},
io:function io(a,b){this.a=a
this.b=b},
iq:function iq(a){this.a=a},
iJ:function iJ(a){this.a=a},
fz:function fz(a,b){this.a=a
this.b=b},
e4:function e4(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
mV:function mV(){},
lj:function lj(a,b,c){var _=this
_.CW=a
_.b=b
_.c=c
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
lk:function lk(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
i0:function i0(a,b,c){var _=this
_.y=a
_.b=b
_.c=c
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
ea:function ea(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
rY:function rY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eb:function eb(){},
d7:function d7(){},
iz:function iz(a){var _=this
_.b=a
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
iv:function iv(){},
mB:function mB(a){var _=this
_.b=a
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
mA:function mA(a,b){var _=this
_.cy=a
_.b=b
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
ip:function ip(a){var _=this
_.w=null
_.b=a
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
iN:function iN(a,b){var _=this
_.w=a
_.b=b
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
iM:function iM(a,b){var _=this
_.at=a
_.b=b
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
fs:function fs(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.b=d
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
ec:function ec(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
kl:function kl(a){this.b=a
this.a=null},
oU:function oU(a){this.a=a},
hz:function hz(a,b){var _=this
_.b=a
_.c=b
_.d=0
_.f=_.e=null
_.r=!1
_.w=0
_.x=!0
_.y=0
_.a=null},
q6:function q6(){},
q5:function q5(a){this.a=a},
A9(a,b){var s,r,q,p,o,n=t.eR,m=A.a([],n),l=$.n()
t.m.a(B.ai)
s=B.ai.length
r=l.U(s)
if(!(r>=0&&r<s))return A.b(B.ai,r)
r=new A.kZ(0,0,b,B.ai[r])
r.h8()
s=$.fN()
q=A.N(s)
p=q.i("au<1,q>")
s=A.a6(new A.au(s,q.i("q(1)").a(new A.qn()),p),p.i("aI.E"))
s=new A.fj(0,2,"Race",s)
q=$.es()
p=A.N(q)
o=p.i("au<1,q>")
q=A.a6(new A.au(q,p.i("q(1)").a(new A.qo()),o),o.i("aI.E"))
q=new A.fj(0,12,"Class",q)
p=new A.fj(0,22,"Death",B.bC)
B.a.T(m,A.a([r,s,q,p],n))
s.e=l.U(5)
q.e=l.U(3)
return new A.hG(a,b,r,s,q,p,m)},
hG:function hG(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=0
_.e=c
_.f=d
_.r=e
_.w=f
_.x=g
_.a=null},
qn:function qn(){},
qo:function qo(){},
qp:function qp(a){this.a=a},
eG:function eG(){},
kZ:function kZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=""
_.e=d
_.f=!1},
qm:function qm(a){this.a=a},
fj:function fj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
pz:function pz(a){this.b=a
this.a=null},
pW:function pW(a){this.b=a
this.a=null},
qA:function qA(){},
r6:function r6(a){this.b=a
this.a=null},
ra:function ra(a){this.a=a},
r8:function r8(a,b,c){this.a=a
this.b=b
this.c=c},
r9:function r9(){},
r7:function r7(a,b,c){this.a=a
this.b=b
this.c=c},
BW(a){var s,r,q=a.a
A:{if(B.b7===q&&!(a.e instanceof A.at)){s="kill"
break A}if(B.bd===q){s="throw"
break A}if(B.b9===q){s="gold"
break A}r=B.b5===q
if(r&&a.d===$.az()){s="shoot"
break A}if(r||B.b6===q){s="spell"
break A}if(B.ba===q){s="heal"
break A}if(B.bc===q){s="teleport"
break A}s=null
break A}return s},
rh:function rh(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=!1
_.f=0
_.r=d
_.w=e
_.a=null},
ro:function ro(a){this.a=a},
rn:function rn(){},
rk:function rk(a){this.a=a},
rl:function rl(a,b){this.a=a
this.b=b},
rm:function rm(a,b){this.a=a
this.b=b},
ri:function ri(a,b){this.a=a
this.b=b},
rj:function rj(a,b){this.a=a
this.b=b},
h3:function h3(a,b){this.c=a
this.d=b
this.a=null},
zL(a,b){var s=new A.hc(a,b,A.a([],t.cz))
s.lJ(a,b,{})
return s},
hc:function hc(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.a=null},
ow:function ow(a,b){this.a=a
this.b=b},
ox:function ox(){},
m7:function m7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=0},
hf:function hf(a){this.c=a
this.a=null},
lh:function lh(){},
qC:function qC(){},
qD:function qD(){},
i_:function i_(a){this.d=a
this.e=1
this.a=null},
xv(a,b){return new A.hY(a,b,B.a.hE(b,new A.r2()))},
af:function af(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hY:function hY(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.e=0
_.a=null},
r2:function r2(){},
r3:function r3(){},
r4:function r4(){},
yz(){var s=v.G.rvipTiles
return J.a9(s==null?null:A.u0(s),!0)},
yb(a){var s=$.wy().m(0,a)
return s==null?B.cz:s},
CM(b9,c0,c1,c2,c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=$.zm(),b8=b9.x
b8===$&&A.c()
s=b8.f
r=s.b
q=r.b
p=q.a
o=q.b
q=p*o*3
n=new Int32Array(q)
m=new A.uz(b8)
l=new A.uA(b8)
for(r=A.ac(r),k=b8.r,j=s.a,i=j.length,b8=b8.w,h=b8.a,g=b8.b.b.a,f=h.length;r.q();){e=r.b
d=r.c
s.l(e,d)
c=d*p+e
if(!(c>=0&&c<i))return A.b(j,c)
b=j[c]
a=c*3
b8.l(e,d)
c=d*g+e
if(!(c>=0&&c<f))return A.b(h,c)
c=h[c]
a0=c!=null&&c2.$2(c,b)
if(!b.r&&!a0)continue
a1=b.a
a2=$.wy().m(0,a1)
if(a2==null)a2=B.cz
a3=a2.a
a4=a2.b
a5=a2.c
if(a4!==0){a1=l.$2(e,d-1)?8:0
a6=l.$2(e,d+1)?4:0
a7=l.$2(e-1,d)?2:0
a8=l.$2(e+1,d)?1:0
a9=a4+(a1|a6|a7|a8)}else if(a3!==0){a1=!J.a9(m.$2(e,d-1),a3)?8:0
a6=!J.a9(m.$2(e,d+1),a3)?4:0
a7=!J.a9(m.$2(e-1,d),a3)?2:0
a8=!J.a9(m.$2(e+1,d),a3)?1:0
a9=a3+(a1|a6|a7|a8)}else a9=0
b0=k.m(0,new A.e(e,d))
if(b0==null)b0=A.bq(B.G,null)
if(!b0.gaq(0)){b1=b0.gL(0)
if(!b1.q())A.a_(A.cu())
b2=B.bE.m(0,b1.gH().a.a.a7(1).a)
if(b2==null)b2=a5}else b2=a5
if(!b.r){a9=0
b2=0}b3=(!b.b&&b.d+b.e>b.c?2:0)|1
if(a0){if(c instanceof A.ad){b4=B.co.m(0,c.Q.a.a)
b2=b4==null?b2:b4}else if(c instanceof A.at){b4=B.ii.m(0,c.Q.b.a)
b2=b4==null?b2:b4}if(c===c3)b3|=4}if(!(a<q))return A.b(n,a)
n[a]=a9
c=a+1
if(!(c<q))return A.b(n,c)
n[c]=b2
c=a+2
if(!(c<q))return A.b(n,c)
n[c]=b3}b5={}
b5.w=p
b5.h=o
b8=b9.y
b5.hx=b8.y.gn()
b5.hy=b8.y.gp()
b5.cells=n
b8=A.N($.j0)
s=b8.i("au<1,P?>")
b8=A.a6(new A.au($.j0,b8.i("P?(1)").a(new A.uy()),s),s.i("aI.E"))
b5.text=b8
b5.shown=c0
b6=b7.b
b5.rows=b6
b8=c1.a
s=b7.a
r=c1.b
b5.rect=A.vI(A.a([b8.a/s,b8.b/b6,r.a/s,r.b/b6],t.gk))
r=v.G
r.rvipMap=b5
B.a.aP($.j0)
if("rvipDraw" in r)A.c_(r,"rvipDraw",null,null,t.X)},
uv(){var s=v.G,r=s.rvipMap
if(r!=null)A.a2(r).shown=!1
if("rvipDraw" in s)A.c_(s,"rvipDraw",null,null,t.X)},
uz:function uz(a){this.a=a},
uA:function uA(a){this.a=a},
uy:function uy(){},
vM(){var s=v.G.rvipMulti
return J.a9(s==null?null:A.u0(s),!0)},
xT(a){var s=v.G
if(!("rvipCols" in s))return 30
return B.c.M(A.r(A.c_(s,"rvipCols",a,null,t.i)),10,200)},
vf(a,b){var s=t.S
return new A.hX(a,b,A.an(a*b,B.aM,!1,t.v),A.C(s,s))},
yy(a){var s=v.G
if("rvipPopup" in s)A.c_(s,"rvipPopup",a,null,t.X)},
CJ(){var s,r,q=null,p=v.G
if(!("rvipPane" in p))return
for(s=["status","equip","inv"],r=0;r<3;++r)A.kG(p,"rvipPane",s[r],"",q,q)
s=t.X
A.c_(p,"rvipVisible","",q,s)
A.c_(p,"rvipMessages",[],q,s)
$.vy=null},
CL(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.vM()||!("rvipPane" in v.G))return
s=a2.b
r=s.y
q=a2.w
q===$&&A.c()
p=B.c.M(q.d.length,0,10)
o=A.vf(A.xT("status"),23+p*2)
a3.ea(o)
n=v.G
m=t.X
A.c_(n,"rvipPane","status",o.l5(),m)
l=new A.uw(r)
k=r.Q
j=t.jA
l.$2("equip",A.a([new A.O(k.f,9)],j))
i=s.x
i===$&&A.c()
h=i.bS(r.y)
g=k.e
j=A.a([new A.O(g,g.c)],j)
if(!h.gaq(0))j.push(new A.O(h,h.b.length))
l.$2("inv",j)
f=A.a([],t.s)
for(q=q.d,j=q.length,e=0;e<q.length;q.length===j||(0,A.o)(q),++e){d=q[e]
c=d.Q.b
g=A.aU(c.a)
b=d.Q.a.a
a=c.b
a0=B.co.m(0,b)
B.a.j(f,"M"+g+b+"\t"+("rgb("+a.a+", "+a.b+", "+a.c+")")+"\t"+A.J(a0==null?"":a0))}for(q=A.ac(i.f.b);q.q();){j=q.b
g=q.c
b=i.f
b.l(j,g)
a=b.a
b=g*b.b.b.a+j
if(!(b>=0&&b<a.length))return A.b(a,b)
b=a[b]
if(!(!b.b&&b.d+b.e>b.c))continue
j=i.r.m(0,new A.e(j,g))
j=(j==null?A.bq(B.G,null):j).b
g=A.N(j)
j=new J.aX(j,j.length,g.i("aX<1>"))
g=g.c
while(j.q()){b=j.d
if(b==null)b=g.a(b)
a=b.a
c=a.b
a0=A.aU(c.a)
b=b.gao()
a1=c.b
a=B.bE.m(0,a.a.a7(1).a)
B.a.j(f,"I"+a0+b.a+"\t"+("rgb("+a1.a+", "+a1.b+", "+a1.c+")")+"\t"+A.J(a==null?"":a))}}A.c_(n,"rvipVisible",B.a.aG(f,"\n"),null,m)
A.CK(k.at)},
CK(a){var s,r,q,p,o,n,m,l,k
if(a===$.vy&&a.b===$.y_)return
$.vy=a
$.y_=a.b
s=[]
for(r=a.a,q=r.length,p=t.N,o=0;o<r.length;r.length===q||(0,A.o)(r),++o){n=r[o]
switch(n.a.a){case 0:m=B.d
break
case 1:m=B.m
break
case 2:m=B.O
break
case 3:m=B.h
break
case 4:m=B.n
break
case 5:m=B.a0
break
default:m=null}l=n.b
k=n.c
if(k>1)l=l+" (x"+k+")"
s.push(A.vI(A.B(["t",l,"color","rgb("+m.a+", "+m.b+", "+m.c+")"],p,p)))}A.c_(v.G,"rvipMessages",s,null,t.X)},
hX:function hX(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.f=d},
r1:function r1(a,b,c){this.a=a
this.b=b
this.c=c},
uw:function uw(a){this.a=a},
ux:function ux(){},
rw:function rw(a,b){this.a=a
this.b=b},
rG:function rG(a){this.a=a},
rH:function rH(a){this.a=a},
rD:function rD(a){this.a=a},
rE:function rE(a){this.a=a},
rF:function rF(a,b,c){this.a=a
this.b=b
this.c=c},
rx:function rx(a){this.a=a},
ry:function ry(a,b){this.a=a
this.b=b},
rz:function rz(a,b){this.a=a
this.b=b},
rA:function rA(a,b){this.a=a
this.b=b},
rB:function rB(a,b){this.a=a
this.b=b},
rC:function rC(a,b){this.a=a
this.b=b},
wO(a,b,c,d,e,f){var s,r=null
a.kg(0,0,a.ga0(),a.gX(),B.t)
s=new A.aZ(new A.e(b,c),B.c.A(a.ga0()-b,2),B.c.A(a.gX()-2-c,2),a)
A.bl(s,r,r,f,!1,r,r,r)
d.$1(s.b9(1,1,b-2,c-2))
A.bA(a,e,r)},
bl(a,b,c,d,e,f,g,h){var s,r,q
if(b==null)s=e?B.h:B.l
else s=b
A.cM(a,g,h,f,c,s,"\u2552","\u2550","\u2555","\u2502","\u2514","\u2500","\u2518")
if(d!=null){s=g==null?0:g
r=h==null?0:h
q=e?B.h:B.f
a.k(s+2,r," "+d+" ",q)}},
h7(a,b,c,d,e,f){var s,r,q,p,o,n
if(d==null)d=a.c.a-e
if(c==null)c=B.d
s=A.e2(d,b)
for(r=s.length,q=f,p=0;o=s.length,p<o;s.length===r||(0,A.o)(s),++p,q=n){n=q+1
a.k(e,q,s[p],c)}return o},
jY(a,b,c,d,e){var s=B.i.aL("\u2500",d)
a.k(b,c,s,e==null?B.l:e)},
od(a,b,c,d,e,f,g){var s,r=c+1
A.bl(a,B.f,e-1,null,!1,d,b,r)
s=b+1
a.k(s,c,"\u250c\u2500\u2510",B.f)
a.k(s,r,"\u2561 \u255e",B.f)
a.k(s,c+2,"\u2514\u2500\u2518",B.f)
if(f!=null)a.an(b+2,r,f)
if(g!=null)a.k(b+4,r," "+g+" ",B.f)},
wP(a,b,c,d,e,f,g){var s,r,q,p,o
if(d<=e)for(s=0;s<b;++s)a.k(f,s+g,"\u258c",B.t)
else{r=B.c.M(B.e.N(b*e/d),1,b)
q=B.e.N((b-r)*c/(d-e+1))
p=q+r
for(s=0;s<b;++s){o=s<q||s>p?B.t:B.l
a.k(f,s+g,"\u258c",o)}}},
bA(a,b,c){var s,r,q,p,o,n={}
n.a=0
b.ae(0,new A.oe(n))
s=n.a
r=c!=null
if(r)s=Math.max(s,c.length)
q=B.c.A(a.ga0()-s,2)
n.b=q
p=s+4
o=q-2
if(r){A.cM(a,o,a.gX()-4,p,5,B.f,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
a.k(B.c.A(a.ga0()-c.length,2),a.gX()-3,c,B.d)}else A.cM(a,o,a.gX()-2,p,3,B.f,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
n.c=!0
n.b=n.b+B.c.A(s-n.a,2)
b.ae(0,new A.of(n,a))},
cM(a,b,c,d,e,f,g,h,i,j,k,l,m){var s,r,q,p,o
if(b==null)b=0
if(c==null)c=0
if(d==null)d=a.ga0()
if(e==null)e=a.gX()
if(f==null)f=B.l
s=d-2
r=j+B.i.aL(" ",s)+j
for(q=c+1,p=c+e-1;q<p;++q)a.k(b,q,r,f)
o=B.i.aL(h,s)
s=B.i.aL(l,s)
a.k(b,c,g+o+i,f)
a.k(b,p,k+s+m,f)},
zI(a,b,c,d,e,f,g,h){var s,r,q=d*2,p=B.e.P(q*e/f)
if(p===0&&e>0)p=1
if(p===q&&e<f)p=q-1
for(q=p+1,s=0;s<d;++s){if(s<B.c.A(p,2))r=9608
else r=s<B.c.A(q,2)?9612:32
a.an(b+s,c,new A.Y(r,g,h))}},
wQ(a,b,c,d,e,f,g,h){var s,r,q
if(g==null)g=B.m
if(h==null)h=B.a1
s=B.e.P(d*e/f)
if(s===0&&e>0)s=1
if(s===d&&e<f)s=d-1
for(r=0;r<d;++r){q=r<s?g:h
a.an(b+r,c,new A.Y(9604,q,B.z))}},
oe:function oe(a){this.a=a},
of:function of(a,b){this.a=a
this.b=b},
vh(a,b,c,d,e){var s,r=e.i("t<ax<0>>"),q=A.a([],r)
r=A.a([],r)
s=A.a(a.slice(0),A.N(a))
return new A.lL(s,q,r,d,c,b,B.al,e.i("lL<0>"))},
vj(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=c.kE(e,B.a.av(b,0,new A.rT(),t.S))
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.o)(b),++r,m=o){q=b[r]
p=q.a
o=m+p.length
if(o>e)p=B.i.aM(p,0,e-m)
n=q.b
if(n==null)n=d
a.k(f+m,g,p,n)}},
lL:function lL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=_.x=_.w=0
_.$ti=h},
rP:function rP(a,b,c){this.a=a
this.b=b
this.c=c},
rO:function rO(a){this.a=a},
rM:function rM(a){this.a=a},
rN:function rN(a){this.a=a},
jo:function jo(a,b){this.a=a
this.b=b},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=0},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ab:function ab(a,b){this.a=a
this.b=b},
Q:function Q(a,b){this.a=a
this.b=b},
rT:function rT(){},
bE:function bE(a,b,c){this.a=a
this.b=b
this.$ti=c},
cb:function cb(a,b,c){this.a=a
this.b=b
this.$ti=c},
ij:function ij(a,b){var _=this
_.b=a
_.c=b
_.d=!0
_.a=null},
t9:function t9(a){this.a=a},
t8:function t8(a){this.a=a},
cC:function cC(){},
tG:function tG(a){this.a=a},
nh:function nh(a){this.b=a
this.c=""
this.a=null},
tM:function tM(a){this.a=a},
ni:function ni(a){this.b=a
this.c=""
this.a=null},
tN:function tN(a){this.a=a},
oc:function oc(a,b){this.a=a
this.b=b},
as(a,b,c){var s
if(0>=a.length)return A.b(a,0)
s=c==null?B.z:c
return new A.Y(a.charCodeAt(0),b,s)},
cP(a,b,c){var s=b==null?B.aL:b
return new A.Y(a,s,c==null?B.z:c)},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
kK:function kK(a,b){this.a=a
this.$ti=b},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
aZ:function aZ(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.f=d},
Ar(a,b,c,d,e,f){var s=A.bV(d.getContext("2d"))
if(s==null)s=A.a2(s)
s=new A.lw(a,s,e,A.C(t.aZ,t.bp),f,b,c)
s.lO(a,b,c,d,e,f)
return s},
lw:function lw(a,b,c,d,e,f,g){var _=this
_.e=a
_.f=b
_.r=c
_.w=d
_.x=e
_.y=!1
_.z=f
_.Q=g},
qP:function qP(a){this.a=a},
qQ:function qQ(a){this.a=a},
d1:function d1(){},
hT:function hT(){},
cB:function cB(){},
u:function u(){},
aa:function aa(a,b,c){this.a=a
this.b=b
this.$ti=c},
xB(a,b){var s=a.b,r=s+s+1,q=a.a
return new A.mi(a,A.ac(new A.a0(new A.e(q.gn()-s,q.gp()-s),new A.e(r,r))),b)},
vt(a,b,c){var s=c.S(0,a).gaH()
if(b<7){if(!(b>=0))return A.b(B.cf,b)
return s<=B.cf[b]}return s<=b*(b+1)},
jJ:function jJ(a,b){this.a=a
this.b=b},
mi:function mi(a,b,c){this.a=a
this.b=b
this.c=c},
aC:function aC(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
mm:function mm(){},
ef(a,b){var s,r=b.S(0,a),q=r.a,p=new A.e(B.c.gii(q),0),o=r.b,n=new A.e(0,B.c.gii(o)),m=Math.abs(q),l=Math.abs(o)
if(l>m){s=l
l=m
m=s
s=n
n=p
p=s}return new A.mN(a,0,m,l,p,n)},
mN:function mN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xm(a,b){var s=Math.max(a.gbT(),b.gbT()),r=Math.min(a.geb(),b.geb()),q=Math.max(a.gbY(),b.gbY()),p=Math.min(a.geS(),b.geS())
return new A.a0(new A.e(s,q),new A.e(Math.max(0,r-s),Math.max(0,p-q)))},
ac(a){var s=a.a
return new A.cX(a,s.a-1,s.b)},
a0:function a0(a,b){this.a=a
this.b=b},
cX:function cX(a,b,c){this.a=a
this.b=b
this.c=c},
qX:function qX(a){this.a=a},
AF(a,b){return new A.e(a,b)},
lX:function lX(){},
e:function e(a,b){this.a=a
this.b=b},
nd:function nd(){},
ft(a,b,c,d,e){var s=A.C4(new A.tj(c),t.bp)
s=s==null?null:A.tR(s)
if(s!=null)a.addEventListener(b,s,!1)
return new A.is(a,b,s,!1,e.i("is<0>"))},
C4(a,b){var s=$.aV
if(s===B.a8)return a
return s.oG(a,b)},
v_:function v_(a,b){this.a=a
this.$ti=b},
ir:function ir(){},
mo:function mo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
is:function is(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
tj:function tj(a){this.a=a},
CB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null,a5="item",a6="Insect Wing",a7="Feather",a8="item/food",a9="hit[s]",b0="Healing Poultice",b1=1000,b2="water",b3="equipment/armor/body",b4="The shield blocks {2}.",b5="equipment/armor/boots",b6="fearless",b7="bite[s]",b8=" ",b9="{1} flits out of the way.",c0="canine",c1="stare[s] at",c2="spark",c3="zaps",c4="gaze[s] into",c5="splashes",c6="hits",c7="scratch[es]",c8="stab[s]",c9="treasure",d0="spear",d1="healing",d2="goblin",d3="arrow",d4="armor",d5="resistance",d6="protective",d7="robe",d8="magic",d9="slash[es]",e0="equipment",e1="crawl[s] on",e2="fearless immobile",e3="cowardly",e4="club",e5="kobold",e6="poke[s]",e7="claw[s]",e8="saurian",e9="salamander",f0="weapon",f1="strangle",f2="natural/bug/worm",f3="bony hand",f4="bony arm",f5="severed skull",f6="decapitated skeleton",f7="armless skeleton",f8="one-armed skeleton",f9="{1}'s arm falls off!",g0="{1}'s hand falls off!",g1="{1}'s head pops off!",g2="Elven _",g3="High Elven _",g4="Dwarven _",g5="animal herp",g6="room",g7="catacomb"
$.bo().c6(a5)
s=A.a7(199,10,a4)
s.a6(a5)
r=$.dM()
s.cv(10,3,r,7)
A.i()
s=$.h=A.j("Rock",B.k,0)
s.v(1)
s.x=0.5
s=A.a7(252,4,a4)
s.a6(a5)
s.bH(30,2,5)
A.i()
s=$.h=A.j("Skull",B.p,0)
s.x=0.25
s.v(1)
s=A.a7(162,a4,a4)
s.a6("treasure/coin")
s.ch=!0
A.i()
s=A.j("Copper Coin",B.as,4)
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
s=A.j("Electrum Coin",B.E,50)
$.h=s
s.E(20,40)
A.i()
s=A.j("Gold Coin",B.h,100)
$.h=s
s.E(30,50)
A.i()
s=A.j("Platinum Coin",B.p,300)
$.h=s
s.E(40,70)
s=A.a7(36,a4,a4)
s.a6("treasure/bar")
s.ch=!0
A.i()
s=A.j("Copper Bar",B.as,150)
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
s=A.j("Electrum Bar",B.E,1200)
$.h=s
s.E(70,90)
A.i()
s=A.j("Gold Bar",B.h,2000)
$.h=s
s.v(80)
A.i()
s=A.j("Platinum Bar",B.p,3000)
$.h=s
s.v(90)
s=A.a7(162,a4,a4)
s.a6("item/gem")
q=$.dL()
s.a.h(0,q,50)
s.w=null
A.i()
s=A.j("Amethyst Shard",B.d_,30)
$.h=s
s.E(7,27)
A.i()
s=A.j("Uncut Amethyst",B.P,100)
$.h=s
s.E(27,57)
A.i()
s=A.j("Faceted Amethyst",B.O,400)
$.h=s
s.v(57)
A.i()
s=A.j("Sapphire Shard",B.J,34)
$.h=s
s.E(8,28)
A.i()
s=A.j("Uncut Sapphire",B.D,125)
$.h=s
s.E(28,58)
A.i()
s=A.j("Faceted Sapphire",B.F,440)
$.h=s
s.v(58)
A.i()
s=A.j("Emerald Shard",B.A,37)
$.h=s
s.E(9,29)
A.i()
s=A.j("Uncut Emerald",B.n,136)
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
s=A.j("Faceted Ruby",B.a1,498)
$.h=s
s.v(60)
A.i()
s=A.j("Diamond Shard",B.f,45)
$.h=s
s.E(11,31)
A.i()
s=A.j("Uncut Diamond",B.p,153)
$.h=s
s.E(31,61)
A.i()
s=A.j("Faceted Diamond",B.u,507)
$.h=s
s.v(61)
s=A.a7(233,20,a4)
s.a6("item/pelt")
s.x=0
p=$.b9()
s.a.h(0,p,80)
s.w=1
A.i()
s=A.j(a6,B.ao,0)
$.h=s
s.v(1)
A.i()
s=A.j(a7,B.p,0)
$.h=s
s.v(1)
s=A.a7(161,a4,a4)
s.a6(a8)
s.a.h(0,p,20)
s.w=3
A.i()
s=$.h=A.j("Stale Biscuit",B.I,0)
s.E(1,10)
s.b=6
s.f4(100)
A.i()
s=$.h=A.j("Loa[f|ves] of Bread",B.k,4)
s.E(3,40)
s.b=6
s.f4(200)
s=A.a7(188,a4,a4)
s.a6(a8)
s.a.h(0,p,15)
s.w=2
A.i()
s=$.h=A.j("Chunk[s] of Meat",B.w,10)
s.E(8,60)
s.b=4
s.f4(400)
A.i()
s=$.h=A.j("Piece[s] of Jerky",B.k,20)
s.v(15)
s.b=12
s.f4(600)
s=A.a7(172,a4,a9)
s.a6("equipment/light")
s.pU(70)
A.i()
s=$.h=A.j("Tallow Candle",B.I,6)
s.E(1,12)
s.b=10
s.ed(2,p,8)
s.dd(2,5)
s.a.h(0,p,40)
s.w=20
A.i()
s=$.h=A.j("Wax Candle",B.u,24)
s.E(6,20)
s.b=10
s.ed(3,p,8)
s.dd(3,7)
s.a.h(0,p,40)
s.w=25
A.i()
s=$.h=A.j("Oil Lamp",B.w,146)
s.E(12,30)
s.b=4
s.ed(10,p,8)
s.dd(4,10)
s.a.h(0,p,50)
s.w=40
A.i()
s=$.h=A.j("Torch[es]",B.k,230)
s.E(17,45)
s.b=4
s.ed(6,p,10)
s.dd(5,14)
s.a.h(0,p,60)
s.w=60
A.i()
s=$.h=A.j("Lantern",B.h,350)
s.v(24)
s.x=0.3
s.ed(5,p,5)
s.dd(6,18)
s=A.a7(231,10,a4)
s.a6("magic/potion/healing")
s.bH(100,1,6)
o=$.cj()
s.a.h(0,o,20)
s.w=null
A.i()
s=$.h=A.j("Soothing Balm",B.a5,10)
s.E(2,30)
s.kl(36)
A.i()
s=$.h=A.j("Mending Salve",B.m,30)
s.E(20,40)
s.kl(64)
A.i()
s=$.h=A.j(b0,B.a1,80)
s.v(30)
s.e_(120,!0)
A.i()
s=$.h=A.j("Potion[s] of Amelioration",B.ao,220)
s.v(60)
s.e_(200,!0)
A.i()
s=$.h=A.j("Potion[s] of Rejuvenation",B.O,b1)
s.v(80)
s.e_(b1,!0)
A.i()
s=$.h=A.j("Antidote",B.n,20)
s.v(2)
s.e_(0,!0)
s=A.a7(234,10,a4)
s.a6("magic/potion/resistance")
s.x=0.5
s.bH(100,1,6)
s.a.h(0,o,20)
s.w=null
A.i()
s=$.h=A.j("Salve[s] of Heat Resistance",B.N,50)
s.v(5)
s.bF(p)
A.i()
s=$.h=A.j("Salve[s] of Cold Resistance",B.J,55)
s.v(6)
s.bF(o)
A.i()
s=$.h=A.j("Salve[s] of Light Resistance",B.E,60)
s.v(7)
n=$.dg()
s.bF(n)
A.i()
s=$.h=A.j("Salve[s] of Wind Resistance",B.K,65)
s.v(8)
m=$.et()
s.bF(m)
A.i()
s=$.h=A.j("Salve[s] of Lightning Resistance",B.P,70)
s.v(9)
l=$.dN()
s.bF(l)
A.i()
s=$.h=A.j("Salve[s] of Darkness Resistance",B.f,75)
s.v(10)
k=$.df()
s.bF(k)
A.i()
s=$.h=A.j("Salve[s] of Earth Resistance",B.k,80)
s.v(13)
s.bF(r)
A.i()
s=$.h=A.j("Salve[s] of Water Resistance",B.F,85)
s.v(16)
j=$.dh()
s.bF(j)
A.i()
s=$.h=A.j("Salve[s] of Acid Resistance",B.I,90)
s.v(19)
s.bF(q)
A.i()
s=$.h=A.j("Salve[s] of Poison Resistance",B.A,95)
s.v(23)
i=$.bK()
s.bF(i)
A.i()
s=$.h=A.j("Salve[s] of Death Resistance",B.O,100)
s.v(30)
h=$.dO()
s.bF(h)
s=A.a7(235,10,a4)
s.a6("magic/potion/speed")
s.x=0.3
s.bH(100,1,6)
s.a.h(0,o,20)
s.w=null
A.i()
s=$.h=A.j("Potion[s] of Quickness",B.A,25)
s.E(3,30)
s.hD(1,40)
A.i()
s=$.h=A.j("Potion[s] of Alacrity",B.n,60)
s.E(18,50)
s.hD(2,60)
A.i()
s=$.h=A.j("Potion[s] of Speed",B.B,150)
s.v(34)
s.x=0.25
s.hD(3,100)
s=A.a7(232,10,a4)
s.a6("magic/potion/bottled")
s.x=0.5
s.bH(100,1,8)
s.a.h(0,o,15)
s.w=null
A.i()
s=$.h=A.j("Bottled Wind",B.J,60)
s.v(4)
s.dY(m,"wind","blasts",10,!0)
A.i()
s=$.h=A.j("Bottled Ice",B.D,100)
s.v(7)
s.dM(o,"cold","freezes",16)
A.i()
s=$.h=A.j("Bottled Fire",B.m,140)
s.v(11)
s.dY(p,"fire","burns",23,!0)
A.i()
s=$.h=A.j("Bottled Ocean",B.F,160)
s.v(12)
s.kj(j,b2,"drowns",30)
A.i()
s=$.h=A.j("Bottled Poison",B.B,240)
s.v(13)
s.dY(i,"poison","infects",10,!0)
A.i()
s=$.h=A.j("Bottled Earth",B.k,180)
s.v(16)
s.dM(r,"dirt","crushes",58)
A.i()
s=$.h=A.j("Bottled Lightning",B.P,200)
s.v(18)
s.dM(l,"lightning","shocks",68)
A.i()
s=$.h=A.j("Bottled Acid",B.A,220)
s.v(22)
s.kj(q,"acid","corrodes",72)
A.i()
s=$.h=A.j("Bottled Shadow",B.l,260)
s.v(28)
s.dM(k,"darkness","torments",120)
A.i()
s=$.h=A.j("Bottled Radiance",B.E,280)
s.v(34)
s.dM(n,"light","sears",140)
A.i()
s=$.h=A.j("Bottled Spirit",B.f,300)
s.v(40)
s.dY(h,"spirit","haunts",160,!0)
s=A.a7(226,20,a4)
s.a6("magic/scroll/teleportation")
s.x=0.3
s.bH(75,1,3)
s.a.h(0,p,20)
s.w=5
A.i()
s=$.h=A.j("Scroll[s] of Sidestepping",B.P,20)
s.v(2)
s.x=0.5
s.fm(8)
A.i()
s=$.h=A.j("Scroll[s] of Phasing",B.O,28)
s.v(6)
s.fm(14)
A.i()
s=$.h=A.j("Scroll[s] of Teleportation",B.ao,52)
s.v(15)
s.fm(28)
A.i()
s=$.h=A.j("Scroll[s] of Disappearing",B.F,74)
s.v(26)
s.fm(54)
s=A.a7(228,20,a4)
s.a6("magic/scroll/detection")
s.bH(75,1,3)
s.a.h(0,p,20)
s.w=5
A.i()
s=$.h=A.j("Scroll[s] of Find Nearby Escape",B.E,12)
s.E(1,10)
g=t.oO
s.eY(A.a([B.at],g),20)
A.i()
s=$.h=A.j("Scroll[s] of Locate Escape",B.I,28)
s.E(8,30)
s.hr(A.a([B.at],g))
A.i()
s=$.h=A.j("Scroll[s] of Find Nearby Items",B.h,16)
s.E(2,16)
s.eY(A.a([B.ax],g),20)
A.i()
s=$.h=A.j("Scroll[s] of Item Detection",B.N,64)
s.E(12,40)
s.hr(A.a([B.ax],g))
A.i()
s=$.h=A.j("Scroll[s] of Detect Nearby",B.A,36)
s.E(12,36)
s.eY(A.a([B.at,B.ax],g),20)
A.i()
s=$.h=A.j("Scroll[s] of Detection",B.as,124)
s.v(30)
s.hr(A.a([B.at,B.ax],g))
A.i()
g=$.h=A.j("Scroll[s] of Sense Nearby Monsters",B.J,50)
g.E(6,19)
g.hO(15)
A.i()
g=$.h=A.j("Scroll[s] of Sense Monsters",B.a0,70)
g.E(20,39)
g.hO(20)
A.i()
g=$.h=A.j("Scroll[s] of Perceive Monsters",B.D,100)
g.E(40,69)
g.kR(30,50)
A.i()
g=$.h=A.j("Scroll[s] of Telepathy",B.F,150)
g.v(70)
g.hO(200)
g=A.a7(224,20,a4)
g.a6("magic/scroll/mapping")
g.x=0.25
g.bH(75,1,3)
g.a.h(0,p,15)
g.w=5
A.i()
g=$.h=A.j("Adventurer's Map",B.B,70)
g.E(10,50)
g.hH(16)
A.i()
g=$.h=A.j("Explorer's Map",B.n,160)
g.E(30,70)
g.hH(32)
A.i()
g=$.h=A.j("Cartographer's Map",B.ag,240)
g.E(50,90)
g.hH(64)
A.i()
g=$.h=A.j("Wizard's Map",B.a0,360)
g.v(70)
g.kv(200,!0)
A.CH()
A.CZ()
g=A.a7(201,a4,a4)
g.a6("equipment/armor/helm")
g.x=0.5
g.bH(10,3,5)
A.i()
g=$.h=A.j("Leather Cap",B.k,50)
g.E(4,40)
g.CW=g.cy=2
g.a.h(0,p,12)
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
g=$.h=A.j("Visored Helm",B.p,350)
g.v(40)
g.cy=5
g.CW=6
A.i()
g=$.h=A.j("Great Helm",B.u,550)
g.v(50)
g.cy=6
g.CW=8
A.a7(244,a4,a4).a6("equipment/armor/body/robe")
A.i()
g=$.h=A.j("Robe",B.D,30)
g.E(2,40)
g.x=0.5
g.cy=4
g.CW=null
g.a.h(0,p,15)
g.w=8
A.i()
g=$.h=A.j("Lined Robe",B.B,110)
g.v(6)
g.x=0.25
g.cy=6
g.CW=null
g.a.h(0,p,12)
g.w=8
g=A.a7(246,a4,a4)
g.a6(b3)
g.x=0.5
A.i()
g=$.h=A.j("Cloth Shirt",B.u,20)
g.E(2,30)
g.cy=3
g.CW=null
g.a.h(0,p,15)
g.w=4
A.i()
g=$.h=A.j("Leather Shirt",B.k,90)
g.E(5,50)
g.cy=6
g.CW=1
g.a.h(0,p,12)
g.w=4
A.i()
g=$.h=A.j("Jerkin",B.p,130)
g.E(8,70)
g.cy=8
g.CW=1
A.i()
g=$.h=A.j("Leather Armor",B.w,240)
g.E(12,90)
g.cy=11
g.CW=2
g.a.h(0,p,10)
g.w=4
A.i()
g=$.h=A.j("Padded Armor",B.l,320)
g.v(16)
g.cy=15
g.CW=3
g.a.h(0,p,8)
g.w=4
A.i()
g=$.h=A.j("Studded Armor",B.f,400)
g.v(20)
g.cy=22
g.CW=4
g.a.h(0,p,6)
g.w=4
g=A.a7(242,a4,a4)
g.a6(b3)
g.x=0.5
A.i()
g=$.h=A.j("Mail Hauberk",B.l,500)
g.v(25)
g.cy=28
g.CW=5
A.i()
g=$.h=A.j("Scale Mail",B.p,700)
g.v(35)
g.cy=36
g.CW=7
g=A.a7(251,a4,a4)
g.a6(b3)
g.x=0.5
A.i()
g=$.h=A.j("Plated Mail",B.l,b1)
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
g=$.h=A.j("Plate Armor",B.p,3400)
g.v(70)
g.cy=60
g.CW=18
A.a7(198,a4,a4).a6("equipment/armor/cloak")
A.i()
g=$.h=A.j("Cloak",B.F,70)
g.E(10,40)
g.x=0.5
g.cy=2
g.CW=1
g.a.h(0,p,20)
g.w=5
A.i()
g=$.h=A.j("Fur Cloak",B.w,140)
g.E(20,60)
g.x=0.3
g.cy=4
g.CW=2
g.a.h(0,p,16)
g.w=5
A.i()
g=$.h=A.j("Spidersilk Cloak",B.l,460)
g.v(40)
g.x=0.2
g.cy=6
g.CW=null
g.a.h(0,p,25)
g.w=3
g=A.a7(197,a4,a4)
g.a6("equipment/armor/gloves")
g.x=0.5
g.bH(20,5,4)
A.i()
g=$.h=A.j("(Pair[s] of )Gloves",B.I,170)
g.v(8)
g.cy=1
g.CW=null
g.a.h(0,p,7)
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
g=A.a7(230,a4,a4)
g.a6("equipment/armor/shield")
g.x=0.5
g.bH(10,5,8)
A.i()
g=$.h=A.j("Buckler",B.l,170)
g.E(10,40)
g.cy=0
g.CW=2
g.ch=new A.aG(3,"The buckler blocks {2}.")
A.i()
g=$.h=A.j("Leather Shield",B.w,240)
g.E(20,50)
g.cy=0
g.CW=3
g.ch=new A.aG(5,b4)
g.a.h(0,p,15)
g.w=14
A.i()
g=$.h=A.j("Targe",B.I,340)
g.E(30,60)
g.cy=0
g.CW=4
g.ch=new A.aG(8,"The targe blocks {2}.")
g.a.h(0,p,10)
g.w=20
A.i()
g=$.h=A.j("Roundel",B.f,410)
g.E(40,80)
g.cy=0
g.CW=6
g.ch=new A.aG(10,b4)
A.i()
g=$.h=A.j("Steel Shield",B.p,570)
g.E(50,90)
g.cy=0
g.CW=7
g.ch=new A.aG(12,b4)
A.i()
g=$.h=A.j("Kite Shield",B.d,650)
g.v(60)
g.cy=0
g.CW=8
g.ch=new A.aG(15,b4)
A.i()
g=$.h=A.j("Lantern Shield",B.h,1200)
g.v(30)
g.cy=0
g.CW=8
g.ch=new A.aG(11,b4)
g.pu(5)
g=A.a7(236,a4,a4)
g.a6(b5)
g.x=0.3
A.i()
g=$.h=A.j("(Pair[s] of )Sandals",B.k,10)
g.E(2,20)
g.cy=1
g.CW=null
g.a.h(0,p,20)
g.w=3
A.i()
g=$.h=A.j("(Pair[s] of )Shoes",B.w,30)
g.E(8,40)
g.cy=2
g.CW=null
g.a.h(0,p,14)
g.w=3
g=A.a7(196,a4,a4)
g.a6(b5)
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
g=$.h=A.j("(Pair[s] of )Greaves",B.p,350)
g.v(47)
g.cy=12
g.CW=3
A.i()
A.yj()
A.yn()
A.yB()
g=A.am("a","natural/bug/spider",a4,b6,a4,a4,a4)
g.at=4
g.ax=2
g.Q=$.jb()
g=A.p("little brown spider",3,B.k,2,30,a4,0)
g.f=40
g.al(b7,5,i)
g=$.zl()
f=A.bn("Seems harmless enough. What's that dripping from its pedipalps?",g,b8)
$.cf.fy=f
s=A.p("gray spider",7,B.f,20,30,a4,0)
s.f=30
s.al(b7,5,i)
s=A.p("spiderling",9,B.u,14,35,a4,0)
s.f=50
s.aW(2,7)
s.al(b7,10,i)
s=A.p("giant spider",12,B.F,40,a4,a4,0)
s.f=30
s.al(b7,7,i)
f=A.bn("Like a large dog, if the dog had eight articulated legs, eight\n  glittering eyes, and wanted nothing more than to kill you.",g,b8)
$.cf.fy=f
s=A.am("b","natural/animal/mammal/bat",a4,a4,a4,1,a4)
s.at=2
s.ax=8
e=s.c
d=$.V().a
s.c=new A.ah(e.a|d)
s.d=B.aj
s=A.p("brown bat",1,B.k,4,a4,0.5,0)
s.f=50
B.a.j(s.w,new A.aG(20,b9))
s.aW(2,4)
s.D(b7,3)
s=A.p("giant bat",4,B.w,24,a4,a4,0)
s.f=30
s.D(b7,6)
s=A.p("cave bat",6,B.p,30,a4,a4,0)
s.f=40
B.a.j(s.w,new A.aG(20,b9))
s.aW(2,5)
s.D(b7,6)
s=A.am("c","natural/animal/mammal/canine",25,a4,a4,a4,20)
s.at=5
s.ax=10
s.f=25
s=A.p("mangy cur",2,B.E,11,a4,a4,0)
s.aR(4)
s.D(b7,4)
B.a.j(s.dx,new A.bY(6,a4,10))
s=A.p("wild dog",4,B.p,20,a4,a4,0)
s.aR(4)
s.D(b7,6)
B.a.j(s.dx,new A.bY(8,a4,10))
s=A.p("mongrel",7,B.N,28,a4,a4,0)
s.aW(2,5)
s.D(b7,8)
B.a.j(s.dx,new A.bY(10,a4,10))
s=A.p("wolf",26,B.u,60,a4,a4,0)
s.aW(3,6)
s.D(b7,12)
B.a.j(s.dx,new A.bY(10,a4,10))
s=A.p("varg",30,B.f,80,a4,a4,0)
s.aW(2,6)
s.D(b7,16)
B.a.j(s.dx,new A.bY(10,a4,10))
s=A.p("Skoll",36,B.h,200,a4,a4,0)
s.i5()
s.ag(new A.ag(c0),5,9)
s.D(b7,20)
B.a.j(s.dx,new A.bY(10,a4,10))
s=A.p("Hati",40,B.D,250,a4,a4,0)
s.i5()
s.ag(new A.ag(c0),5,9)
s.D(b7,23)
B.a.j(s.dx,new A.bY(10,a4,10))
s=A.p("Fenrir",44,B.l,300,a4,a4,0)
s.i5()
s.ag(new A.ag(c0),3,5)
s.kw("Skoll")
s.kw("Hati")
s.D(b7,26)
B.a.j(s.dx,new A.bY(10,a4,10))
A.Cf()
s=A.am("e","magical/eye",a4,"immobile",a4,a4,a4)
s.at=16
s.ax=1
B.a.j(s.w,new A.aG(10,"{1} blinks out of the way."))
s.c=new A.ah(s.c.a|d)
s.d=B.aj
s=A.p("lazy eye",5,B.J,20,a4,a4,0)
s.D(c1,8)
s.az(c2,c3,l,12,8,5)
s=A.p("mad eye",9,B.a5,40,a4,a4,0)
s.D(c1,8)
s.bm(m,15,8,6)
s=A.p("floating eye",15,B.E,60,a4,a4,0)
s.D(c1,10)
s.az(c2,c3,l,24,6,4)
B.a.j(s.dx,new A.bF(7,10))
s=A.p("baleful eye",20,B.N,80,a4,a4,0)
s.D(c4,12)
s.bm(p,20,8,4)
s.az("jet",c5,j,20,8,4)
B.a.j(s.dx,new A.bF(9,10))
s=A.p("malevolent eye",30,B.m,120,a4,a4,0)
s.D(c4,20)
s.bm(n,20,10,4)
s.bm(k,20,10,4)
s.c5(p,30,a4,7)
B.a.j(s.dx,new A.bF(9,10))
s=A.p("murderous eye",40,B.a1,180,a4,a4,0)
s.D(c4,30)
s.bm(q,40,8,7)
s.az("stone",c6,r,40,8,7)
s.c5(o,30,a4,7)
B.a.j(s.dx,new A.bF(9,10))
s=A.p("watcher",60,B.p,300,a4,a4,0)
s.D("see[s]",50)
s.bm(n,40,10,7)
s.c5(n,30,a4,7)
s.bm(k,50,10,7)
s.c5(k,40,a4,7)
s=A.am("f","natural/animal/mammal/feline",40,a4,a4,a4,a4)
s.at=10
s.ax=8
s=A.p("stray cat",1,B.h,11,a4,a4,1)
s.f=30
B.a.j(s.dx,new A.b8(B.cr,4))
s.D(b7,4)
s.D(c7,3)
s=A.am("g","humanoid/hob/goblin",a4,a4,a4,a4,a4)
s.at=8
s.ax=4
s.f=10
e=s.c
c=$.bL().a
s.c=new A.ah(e.a|c)
e=A.p("goblin peon",4,B.I,30,a4,a4,0)
e.f=20
e.aR(4)
e.D(c8,8)
B.a.j(e.dx,new A.b8(B.aa,8))
e.C(c9,20)
e.C(d0,5)
e.C(d1,10)
e=A.p("goblin archer",6,B.n,36,a4,a4,0)
e.aR(2)
e.ag(new A.ag(d2),0,3)
e.D(c8,4)
s=$.az()
e.az(d3,c6,s,8,8,3)
e.C(c9,30)
e.C("bow",10)
e.C("dagger",5)
e.C(d1,10)
e=A.p("goblin fighter",6,B.k,58,a4,a4,0)
e.aR(2)
e.ag(new A.ag(d2),1,4)
e.D(c8,12)
e.C(c9,20)
e.C(d0,10)
e.C(d4,10)
e.C(d5,5)
e.C(d1,10)
e=A.p("goblin warrior",8,B.p,68,a4,a4,0)
e.aR(2)
e.ag(new A.ag(d2),1,5)
e.D(c8,16)
e.C(c9,25)
e.C("axe",10)
e.C(d4,10)
e.C(d5,5)
e.C(d1,10)
b=t.s
B.a.T(e.x,A.a(d6.split(b8),b))
e=A.p("goblin mage",9,B.F,50,a4,a4,0)
e.ag(new A.ag(d2),1,4)
e.D("whip[s]",7)
e.bm(p,12,8,12)
e.az(c2,c3,l,16,6,12)
e.C(c9,20)
e.C(d7,10)
e.C(d8,30)
e=A.p("goblin ranger",12,B.B,60,a4,a4,0)
e.ag(new A.ag(d2),0,5)
e.D(c8,10)
e.az(d3,c6,s,12,8,3)
e.C(c9,20)
e.C("bow",15)
e.C(d4,10)
e.C(d8,20)
e=A.p("Erlkonig, the Goblin Prince",14,B.l,120,a4,a4,0)
e.cT(B.aI)
e.ag(new A.ag(d2),4,8)
e.D(a9,10)
e.D(d9,14)
e.bm(k,20,10,20)
e.hw(c9,3)
e.p8(e0,2,4)
e.eZ(d8,3,4)
B.a.T(e.x,A.a(d6.split(b8),b))
e=A.am("i","bug",a4,b6,a4,a4,3)
e.at=5
e.ax=2
e.f=40
e=A.p("giant cockroach[es]",1,B.w,4,a4,0.4,0)
e.aW(2,5)
e.d=B.bI
e.D(e1,2)
B.a.j(e.dx,new A.bT(!1,4))
e.C(a6,30)
f=A.bn("It's not quite as easy to squash one of these when it's as long as\n      your arm.",g,b8)
$.cf.fy=f
e=A.p("giant centipede",3,B.m,14,a4,a4,2)
e.f=20
e.D(e1,4)
e.D(b7,8)
e=A.am("i","natural/bug/fly",a4,b6,a4,a4,3)
e.at=5
e.ax=2
e.f=40
e=A.p("firefly",8,B.N,6,a4,a4,1)
e.f=70
e.aW(3,8)
e.al(b7,12,p)
e.C(a6,40)
e=A.am("j","magical/jelly",a4,b6,0.7,-1,a4)
e.at=3
e.ax=1
e.f=30
e.d=B.aX
e=A.p("green jelly",1,B.A,10,a4,a4,0)
a=e.Q=$.wf()
e.D(e1,3)
e=A.am("j","jelly",a4,e2,0.6,a4,a4)
e.at=2
e.ax=1
e.d=B.bI
e.aR(4)
e=A.p("green slime",2,B.n,8,a4,a4,0)
e.Q=a
e.D(e1,4)
B.a.j(e.dx,new A.bT(!1,4))
e=A.p("frosty slime",4,B.u,14,a4,a4,0)
e.Q=$.ws()
e.al(e1,5,o)
B.a.j(e.dx,new A.bT(!1,4))
e=A.p("mud slime",6,B.k,20,a4,a4,0)
e.Q=$.w7()
e.al(e1,8,r)
B.a.j(e.dx,new A.bT(!1,4))
e=A.p("smoking slime",15,B.m,30,a4,a4,0)
e.as=4
e.Q=$.wj()
e.al(e1,10,p)
B.a.j(e.dx,new A.bT(!1,4))
e=A.p("sparkling slime",20,B.O,40,a4,a4,0)
e.as=3
e.Q=$.wr()
e.al(e1,12,l)
B.a.j(e.dx,new A.bT(!1,4))
e=A.p("caustic slime",25,B.ag,50,a4,a4,0)
e.Q=a
e.al(e1,13,q)
B.a.j(e.dx,new A.bT(!1,4))
e=A.p("virulent slime",35,B.B,60,a4,a4,0)
e.Q=a
e.al(e1,14,i)
B.a.j(e.dx,new A.bT(!1,4))
e=A.p("ectoplasm",45,B.l,40,a4,a4,0)
e.Q=$.we()
e.al(e1,15,h)
B.a.j(e.dx,new A.bT(!1,4))
e=A.am("k","humanoid/hob/kobold",a4,e3,a4,a4,a4)
e.at=10
e.ax=4
e.f=15
e=A.p("scurrilous imp",1,B.a5,12,a4,a4,0)
e.f=20
e.aR(2)
e.D("club[s]",4)
B.a.j(e.dx,new A.b8(B.aa,5))
e.pm()
e.C(c9,20)
e.C(e4,10)
e.C("speed",20)
e=A.p("vexing imp",2,B.O,16,a4,a4,0)
e.aR(2)
e.ag(new A.ag(e5),0,1)
e.D(c7,4)
B.a.j(e.dx,new A.b8(B.aa,5))
e.az(c2,c3,l,6,6,5)
e.C(c9,25)
e.C("teleportation",20)
A.am("k",e5,a4,a4,a4,a4,a4).f=20
e=A.p(e5,3,B.m,20,a4,a4,0)
e.aR(3)
e.ag(new A.ag(c0),0,3)
e.D(e6,4)
B.a.j(e.dx,new A.bF(6,10))
e.C(c9,25)
e.C(e0,10)
e.C(d8,20)
e=A.p("kobold shaman",4,B.F,20,a4,a4,0)
e.aR(2)
e.ag(new A.ag(c0),0,3)
e.D(a9,4)
e.az("jet",c5,j,8,8,10)
e.C(c9,25)
e.C(d7,10)
e.C(d8,20)
e=A.p("kobold trickster",5,B.h,24,a4,a4,0)
e.D(a9,5)
a=e.dx
B.a.j(a,new A.b8(B.aa,5))
e.az(c2,c3,l,8,6,5)
B.a.j(a,new A.bF(6,7))
e.hC(7)
e.C(c9,35)
e.C(d8,20)
e=A.p("kobold priest",6,B.D,30,a4,a4,0)
e.aR(2)
e.ag(new A.ag(e5),1,3)
e.D("club[s]",6)
B.a.j(e.dx,new A.hh(10,15))
e.hC(7)
e.C(c9,20)
e.C(e4,10)
e.C(d7,10)
e.C(d8,30)
e=A.p("imp incanter",7,B.P,33,a4,a4,0)
e.aR(2)
e.ag(new A.ag(e5),1,3)
e.ag(new A.ag(c0),0,3)
e.D(c7,4)
B.a.j(e.dx,new A.b8(B.aa,6))
e.az(c2,c3,l,10,6,5)
e.C(c9,30)
e.C(d7,10)
e.C(d8,35)
B.a.T(e.x,A.a(e3.split(b8),b))
e=A.p("imp warlock",8,B.ao,46,a4,a4,0)
e.ag(new A.ag(e5),2,5)
e.ag(new A.ag(c0),0,3)
e.D(c8,5)
e.az("ice","freezes",o,12,8,8)
e.az(c2,c3,l,12,6,8)
e.C(c9,30)
e.C("staff",20)
e.C(d7,10)
e.C(d8,30)
e=A.p("Feng",10,B.N,80,a4,a4,1)
e.f=10
e.cT(B.aI)
e.ag(new A.ag(e5),4,10)
e.ag(new A.ag(c0),1,3)
e.D(c8,5)
a=e.dx
B.a.j(a,new A.b8(B.aa,7))
B.a.j(a,new A.bF(6,5))
B.a.j(a,new A.bF(30,50))
e.c5(l,12,a4,8)
e.eZ(c9,3,5)
e.hy(d0,5,20)
e.hy(d4,5,30)
e.eZ(d8,2,5)
e=A.am("l","humanoid/saurian",a4,b6,a4,a4,a4)
e.at=10
e.ax=5
e.f=10
B.a.j(e.w,new A.aG(5,"{2} [are|is] deflected by its scales."))
e=A.p("lizard guard",11,B.h,26,a4,a4,0)
e.D(e7,8)
e.D(b7,10)
e.C(c9,30)
e.C(d4,10)
e.C(d0,10)
e=A.p("lizard protector",15,B.A,30,a4,a4,0)
e.ag(new A.ag(e8),0,2)
e.D(e7,10)
e.D(b7,14)
e.C(c9,30)
e.C(d4,10)
e.C(d0,10)
e=A.p("armored lizard",17,B.p,38,a4,a4,0)
e.ag(new A.ag(e8),0,2)
e.D(e7,10)
e.D(b7,15)
e.C(c9,30)
e.C(d4,20)
e.C(d0,10)
e=A.p("scaled guardian",19,B.l,50,a4,a4,0)
e.ag(new A.ag(e8),0,3)
e.ag(new A.ag(e9),0,2)
e.D(e7,10)
e.D(b7,15)
e.C(c9,40)
e.C(e0,10)
e=A.p(e8,21,B.N,64,a4,a4,0)
e.ag(new A.ag(e8),1,4)
e.ag(new A.ag(e9),0,2)
e.D(e7,12)
e.D(b7,17)
e.C(c9,50)
e.C(e0,10)
e=A.am("o","humanoid/orcus/orc",a4,a4,a4,a4,a4)
e.at=7
e.ax=6
e.f=10
e.c=new A.ah(e.c.a|c)
B.a.T(e.x,A.a(d6.split(b8),b))
e=A.p("orc",28,B.N,100,a4,a4,0)
e.aW(3,6)
e.D(c8,12)
e.C(c9,20)
e.C(e0,5)
e.C(d0,5)
e=A.p("orc brute",29,B.ag,120,a4,a4,0)
e.ag(new A.ag("orc"),2,5)
e.D("bash[es]",16)
e.C(c9,20)
e.C(e4,10)
e.C(d4,10)
e=A.p("orc soldier",30,B.p,140,a4,a4,0)
e.aW(4,6)
e.ag(new A.ag("orcus"),1,5)
e.D(c8,20)
e.C(c9,25)
e.C("axe",10)
e.C(d4,10)
e=A.p("orc chieftain",31,B.m,180,a4,a4,0)
e.ag(new A.ag("orcus"),2,10)
e.D(c8,10)
e.p7(c9,2,40)
e.C(e0,20)
e.C(a5,20)
e=A.am("p","humanoid/human",a4,a4,a4,a4,14)
e.at=10
e.ax=5
e.f=10
e.c=new A.ah(e.c.a|c)
e.as=2
e=A.p("Harold the Misfortunate",2,B.P,30,a4,a4,0)
e.cT(B.aI)
e.D(a9,3)
B.a.j(e.dx,new A.b8(B.aG,5))
e.C(c9,80)
e.hx(f0,4,20)
e.hx(d4,4,30)
e.hx(d8,4,40)
e=A.p("hapless adventurer",1,B.E,14,15,a4,0)
e.f=30
e.D(a9,3)
B.a.j(e.dx,new A.b8(B.aG,12))
e.C(c9,15)
e.C(f0,10)
e.C(d4,15)
e.C(d8,20)
B.a.T(e.x,A.a(e3.split(b8),b))
e=A.p("simpering knave",2,B.N,17,a4,a4,0)
e.D(a9,2)
e.D(c8,4)
e.C(c9,20)
e.C("whip",10)
e.C(d4,15)
e.C(d8,20)
B.a.T(e.x,A.a(e3.split(b8),b))
e=A.p("decrepit mage",3,B.O,20,a4,a4,0)
e.f=30
e.D(a9,2)
e.az(c2,c3,l,8,6,10)
e.C(c9,15)
e.C(d8,30)
e.C("dagger",5)
e.C("staff",5)
e.C(d7,10)
e.C("boots",5)
e=A.p("unlucky ranger",5,B.n,30,25,a4,0)
e.f=20
e.D(d9,2)
e.az(d3,c6,s,2,8,4)
B.a.j(e.dx,new A.b8(B.aG,10))
e.C(c9,20)
e.C("potion",20)
e.C("bow",10)
e.C("body",20)
e=A.p("drunken priest",5,B.D,34,a4,a4,0)
e.f=40
e.D(a9,8)
s=e.dx
B.a.j(s,new A.hh(8,15))
B.a.j(s,new A.b8(B.aG,5))
e.C(c9,35)
e.C("scroll",20)
e.C(e4,10)
e.C(d7,10)
B.a.T(e.x,A.a(b6.split(b8),b))
e=A.am("r","natural/animal/mammal/rodent",30,a4,a4,a4,a4)
e.at=4
e.ax=6
e.f=30
e.d=B.aX
e=A.p("[mouse|mice]",1,B.I,3,a4,0.7,0)
e.aR(6)
e.D(b7,3)
e.D(c7,2)
e=A.p("sewer rat",2,B.f,8,a4,a4,0)
e.f=20
e.aR(4)
e.D(b7,4)
e.D(c7,3)
e=A.p("sickly rat",3,B.n,10,a4,a4,0)
e.al(b7,8,i)
e.D(c7,4)
e=A.p("plague rat",6,B.A,20,a4,a4,0)
e.aR(4)
e.al(b7,15,i)
e.D(c7,8)
e=A.p("giant rat",8,B.N,40,a4,a4,0)
e.D(b7,12)
e.D(c7,8)
e=A.p("The Rat King",8,B.a1,120,a4,a4,0)
e.cT(B.aI)
e.D(b7,16)
e.D(c7,10)
e.ag(new A.ag("rodent"),8,16)
e.hw(c9,3)
e.hy(a5,10,50)
e=A.am("s","natural/bug/slug",5,b6,a4,-3,2)
e.at=3
e.ax=1
e.f=30
A.p("giant slug",3,B.af,20,a4,a4,0).D(e1,8)
A.p("suppurating slug",6,B.A,50,a4,a4,0).al(e1,12,i)
A.p("acidic slug",9,B.af,70,a4,a4,0).al(e1,16,q)
e=A.am("v","natural/plant/vine",a4,e2,a4,a4,a4)
e.ax=e.at=10
A.p("choker",16,B.n,40,a4,a4,0).D(f1,12)
e=A.p("nightshade",19,B.P,50,a4,a4,0)
e.lh(10,3)
e.al("touch[es]",12,i)
e=A.p("creeper",22,B.A,60,a4,a4,0)
B.a.j(e.dx,new A.bT(!0,10))
e.lh(10,3)
e.D(f1,8)
A.p("strangler",26,B.B,80,a4,a4,0).D(f1,14)
s=A.am("w",f2,15,b6,a4,a4,a4)
s.at=2
s.ax=3
s.f=40
s=A.p("blood worm",1,B.a1,4,a4,0.5,0)
s.aW(3,7)
s.D(e1,5)
s=A.p("fire worm",10,B.N,6,a4,a4,0)
s.aW(2,6)
s.d=B.aX
s.al(e1,5,p)
A.am("w",f2,10,b6,a4,a4,a4).f=30
A.p("giant earthworm",3,B.a5,30,a4,a4,-2).D(e1,5)
A.p("giant cave worm",7,B.I,80,a4,a4,-2).al(e1,12,q)
s=A.am("x","undead/skeleton",a4,a4,a4,a4,a4)
s.ax=s.at=4
s.f=30
s=A.p(f3,3,B.f,18,a4,3,-1)
s.f=40
s.D(e7,6)
s=A.p(f4,4,B.p,26,a4,4,0)
s.f=40
s.D(e7,8)
s=A.p(f5,7,B.I,33,a4,3,-2)
s.f=40
s.D(b7,10)
s=A.p(f6,10,B.E,44,a4,4,0)
s.ax=s.at=0
s.f=60
s.c=new A.ah(s.c.a|c)
s.D(e7,7)
s.C(c9,30)
s.C(f0,10)
s.C(d4,10)
s=A.p(f7,12,B.ag,50,a4,4,0)
s.D(b7,9)
s.D("kick[s]",7)
s.C(c9,30)
s.C(d4,10)
s=A.p(f8,13,B.A,60,a4,5,0)
s.c=new A.ah(s.c.a|c)
s.D(e7,7)
e=s.dx
B.a.j(e,new A.bz(A.aO(f7),A.aO(f4),f9,1))
B.a.j(e,new A.bz(A.aO(f7),A.aO(f3),g0,1))
s.C(c9,30)
s.C(f0,5)
s.C(d4,10)
s=A.p("skeleton",15,B.u,70,a4,6,0)
s.c=new A.ah(s.c.a|c)
s.D(e7,7)
s.D(b7,9)
e=s.dx
B.a.j(e,new A.bz(A.aO(f6),A.aO(f5),g1,1))
B.a.j(e,new A.bz(A.aO(f8),A.aO(f4),f9,1))
B.a.j(e,new A.bz(A.aO(f8),A.aO(f3),g0,1))
s.C(c9,40)
s.C(f0,10)
s.C(d4,10)
s=A.p("skeleton warrior",17,B.a5,90,a4,6,0)
s.c=new A.ah(s.c.a|c)
s.D(d9,13)
s.D(c8,10)
e=s.dx
B.a.j(e,new A.bz(A.aO(f6),A.aO(f5),g1,1))
B.a.j(e,new A.bz(A.aO(f8),A.aO(f4),f9,1))
B.a.j(e,new A.bz(A.aO(f8),A.aO(f3),g0,1))
s.C(c9,50)
s.C(f0,20)
s.C(d4,15)
s=A.p("robed skeleton",19,B.P,110,a4,4,0)
s.c=new A.ah(s.c.a|c)
s.D(d9,13)
s.D(c8,10)
s.bm(l,15,10,8)
e=s.dx
B.a.j(e,new A.bz(A.aO(f6),A.aO(f5),g1,1))
B.a.j(e,new A.bz(A.aO(f8),A.aO(f4),f9,1))
B.a.j(e,new A.bz(A.aO(f8),A.aO(f3),g0,1))
s.C(c9,50)
s.C(d8,20)
s.C(d4,10)
s=A.am("B","natural/animal/bird",a4,a4,a4,a4,a4)
s.at=8
s.ax=6
B.a.j(s.w,new A.aG(10,"{1} flaps out of the way."))
s.c=new A.ah(s.c.a|d)
s.aW(3,6)
s=A.p("crow",4,B.l,10,a4,a4,2)
s.f=30
s.D(b7,5)
s.C(a7,30)
f=A.bn('"What harm can a stupid little crow do?" you think as it and its\n      murderous friends dive towards your eyes, claws extended.',g,b8)
$.cf.fy=f
s=A.p("raven",6,B.f,16,a4,a4,0)
s.f=15
s.D(b7,5)
s.D(e7,4)
s.C(a7,30)
B.a.T(s.x,A.a(d6.split(b8),b))
f=A.bn("Its black eyes gleam with a malevolent intelligence.",g,b8)
$.cf.fy=f
A.Cp()
s=A.am("F","humanoid/hob/fae",a4,e3,a4,2,a4)
s.at=10
s.ax=8
s.f=30
B.a.j(s.w,new A.aG(10,b9))
s.c=new A.ah(s.c.a|d)
s.d=B.aj
s=A.p("forest sprite",2,B.ag,6,a4,a4,0)
s.D(c7,3)
B.a.j(s.dx,new A.b8(B.aa,4))
s.az(c2,c3,l,4,6,12)
s.C(c9,10)
s.C(d8,30)
s.C(a6,30)
s=A.p("house sprite",5,B.J,10,a4,a4,0)
s.D(e6,5)
g=s.dx
B.a.j(g,new A.b8(B.aa,4))
s.az("stone",c6,r,4,8,10)
B.a.j(g,new A.bF(4,8))
s.C(c9,10)
s.C(d8,30)
s.C(a6,30)
s=A.p("mischievous sprite",7,B.a5,24,a4,a4,0)
s.D(e6,6)
g=s.dx
B.a.j(g,new A.b8(B.aa,4))
s.bm(m,8,8,10)
B.a.j(g,new A.bF(5,10))
s.C(c9,10)
s.C(d8,30)
s.C(a6,30)
s=A.p("Tink",8,B.n,40,a4,a4,0)
s.cT(B.cv)
s.f=10
s.D(e6,8)
g=s.dx
B.a.j(g,new A.b8(B.aa,4))
s.az(c2,c3,l,4,6,8)
s.bm(m,7,8,10)
B.a.j(g,new A.bF(5,10))
s.hw(c9,2)
s.eZ(d8,3,3)
s=A.am("H","mythical/beast/hybrid",a4,a4,a4,a4,a4)
s.at=10
s.ax=12
s=A.p("harpy",25,B.P,50,a4,a4,2)
s.c=new A.ah(s.c.a|d)
s.aW(2,5)
s.D(b7,10)
s.D(c7,15)
d=s.dx
B.a.j(d,new A.bY(10,"screeches",10))
B.a.j(d,new A.b8(B.cq,5))
s.C(a7,50)
s=A.p("griffin",35,B.h,200,a4,a4,0)
s.D(b7,20)
s.D(c7,15)
s.C(a7,50)
A.am("Q","magical",a4,a4,a4,a4,a4)
s=A.p("Nameless Unmaker",100,B.O,b1,a4,a4,2)
s.cT(B.y)
s.ax=s.at=16
s.al("crushe[s]",250,r)
s.al("blast[s]",200,l)
s.c5(k,500,a4,10)
B.a.T(s.x,A.a(b6.split(b8),b))
s.c=new A.ah(s.c.a|c)
a0=A.vL(20,new A.aL(100,A.a8(a5,s.CW,B.hJ)))
B.a.j(s.dy,a0)
A.am("R","natural/animal/herp",a4,a4,a4,a4,a4)
s=A.p("frog",1,B.A,4,30,a4,0)
s.at=6
s.ax=4
s.f=30
s.c=new A.ah(s.c.a|$.j2().a)
s.D("hop[s] on",2)
s=A.am("R","natural/animal/herp/salamander",30,a4,a4,a4,a4)
s.at=6
s.ax=5
s.f=20
s.d=B.aj
s.as=3
s=A.p("juvenile salamander",7,B.a5,20,a4,a4,0)
s.al(b7,14,p)
s.c5(p,20,4,16)
s=A.p(e9,13,B.m,30,a4,a4,0)
s.al(b7,18,p)
s.c5(p,30,5,16)
s=A.p("three-headed salamander",23,B.a1,90,a4,a4,0)
s.al(b7,24,p)
s.c5(p,20,5,10)
s=A.am("S","natural/animal/herp/snake",30,a4,a4,a4,a4)
s.at=4
s.ax=7
s.f=30
A.p("water snake",1,B.A,11,a4,a4,0).D(b7,3)
A.p("brown snake",3,B.k,25,a4,a4,0).D(b7,4)
A.p("cave snake",8,B.p,40,a4,a4,0).D(b7,10)
A.fH()
A.zy($.ck().gpg())
A.b1()
$.bh="body"
s=A.I(g2,1)
s.v(40)
s.a_(2,4,3)
s.K(400,2)
s.bI(-2)
g=t.Q
g.a(A.a1())
s.as=A.a1()
s.R(n)
s=A.I(g3,0.3)
s.v(60)
s.a_(4,4,6)
s.K(600,3)
s.bI(-3)
s.as=A.a1()
e=t.S
s.ch.h(0,B.ae,g.a(A.fI(1,e)))
s.R(m)
s.R(n)
A.b1()
$.bh="cloak"
s=A.I(g2,1)
s.E(40,80)
s.a_(4,4,6)
s.K(300,2)
s.bI(-1)
s.as=A.a1()
s.R(n)
s=A.I(g3,0.3)
s.v(60)
s.a_(5,4,8)
s.K(500,3)
s.bI(-2)
s.as=A.a1()
s.ch.h(0,B.ae,g.a(A.fI(2,e)))
s.R(m)
s.R(n)
A.b1()
$.bh="boots"
s=A.I(g2,1)
s.v(50)
s.a_(2,4,5)
s.K(400,2.5)
s.bI(-2)
s.as=A.a1()
A.b1()
$.bh="helm"
s=A.I(g2,1)
s.E(40,80)
s.a_(1,4,3)
s.K(400,2)
s.bI(-1)
s.as=A.a1()
s.ch.h(0,B.a3,g.a(A.fI(1,e)))
s.R(n)
s=A.I(g3,0.3)
s.v(60)
s.b7(2,4)
s.K(600,3)
s.bI(-1)
s.as=A.a1()
s.ch.h(0,B.a3,A.a1())
s.R(m)
s.R(n)
A.b1()
$.bh="shield"
s=A.I(g2,1)
s.E(40,80)
s.a_(3,4,5)
s.K(300,1.6)
s.bC(0.8)
s.aE(A.b2())
s.R(n)
s=A.I(g3,0.5)
s.v(50)
s.b7(1,4)
s.K(500,2.2)
s.bC(0.6)
d=t.i
s.aE(A.fI(1.5,d))
s.ch.h(0,B.a3,A.a1())
s.R(m)
s.R(n)
A.b1()
$.bh="body"
s=A.I(g4,1)
s.v(30)
s.a_(4,3,6)
s.K(400,2)
s.bI(2)
s.as=A.a1()
s.R(r)
s.R(k)
A.b1()
$.bh="helm"
s=A.I(g4,1)
s.v(50)
s.a_(3,4,5)
s.K(300,2)
s.bI(1)
s.as=A.a1()
s.R(r)
s.R(k)
A.b1()
$.bh="gloves"
s=A.I(g4,1)
s.v(50)
s.K(300,2)
s.a_(2,4,4)
s.bI(1)
s.as=A.a1()
s.ch.h(0,B.ak,g.a(A.fI(1,e)))
s.R(r)
s.R(k)
A.b1()
$.bh="boots"
s=A.I(g4,1)
s.v(50)
s.a_(3,4,5)
s.K(300,2)
s.bI(1)
s.as=A.a1()
s.R(r)
s.R(k)
A.b1()
$.bh="shield"
s=A.I(g4,1)
s.v(40)
s.a_(4,3,8)
s.K(200,2.2)
s.bC(1.2)
s.dR(A.a1(),A.b2())
s.R(r)
s.R(k)
A.b1()
$.bh="armor"
s=A.I("_ of Resist Air",0.5)
s.E(10,50)
s.K(200,1.2)
s.R(m)
s=A.I("_ of Resist Earth",0.5)
s.E(11,51)
s.K(230,1.2)
s.R(r)
s=A.I("_ of Resist Fire",0.5)
s.E(12,52)
s.K(260,1.3)
s.R(p)
s=A.I("_ of Resist Water",0.5)
s.E(13,53)
s.K(310,1.2)
s.R(j)
s=A.I("_ of Resist Acid",0.3)
s.E(14,54)
s.K(340,1.3)
s.R(q)
s=A.I("_ of Resist Cold",0.5)
s.E(15,55)
s.K(400,1.2)
s.R(o)
s=A.I("_ of Resist Lightning",0.3)
s.E(16,56)
s.K(430,1.2)
s.R(l)
s=A.I("_ of Resist Poison",0.25)
s.E(17,57)
s.K(460,1.5)
s.R(i)
s=A.I("_ of Resist Dark",0.25)
s.E(18,58)
s.K(490,1.3)
s.R(k)
s=A.I("_ of Resist Light",0.25)
s.E(19,59)
s.K(490,1.3)
s.R(n)
s=A.I("_ of Resist Spirit",0.4)
s.E(10,60)
s.K(520,1.4)
s.R(h)
s=A.I("_ of Resist Nature",0.3)
s.v(40)
s.K(3000,4)
s.R(m)
s.R(r)
s.R(p)
s.R(j)
s.R(o)
s.R(l)
s=A.I("_ of Resist Destruction",0.3)
s.v(40)
s.K(1300,2.6)
s.R(q)
s.R(p)
s.R(l)
s.R(i)
s=A.I("_ of Resist Evil",0.3)
s.v(60)
s.K(1500,3)
s.R(q)
s.R(i)
s.R(k)
s.R(h)
s=A.I("_ of Resistance",0.3)
s.v(70)
s.K(5000,6)
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
s.b7(2,5)
s.K(500,1.4)
s.bv(m,A.a1())
m=A.I("_ of Protection from Earth",0.25)
m.v(37)
m.b7(2,5)
m.K(500,1.4)
m.bv(r,A.a1())
r=A.I("_ of Protection from Fire",0.25)
r.v(38)
r.b7(2,5)
r.K(500,1.5)
r.bv(p,A.a1())
r=A.I("_ of Protection from Water",0.25)
r.v(39)
r.b7(2,5)
r.K(500,1.4)
r.bv(j,A.a1())
j=A.I("_ of Protection from Acid",0.2)
j.v(40)
j.b7(2,5)
j.K(500,1.5)
j.bv(q,A.a1())
q=A.I("_ of Protection from Cold",0.25)
q.v(41)
q.b7(2,5)
q.K(500,1.4)
q.bv(o,A.a1())
q=A.I("_ of Protection from Lightning",0.16)
q.v(42)
q.b7(2,5)
q.K(500,1.4)
q.bv(l,A.a1())
q=A.I("_ of Protection from Poison",0.14)
q.v(43)
q.b7(2,5)
q.K(b1,1.6)
q.bv(i,A.a1())
q=A.I("_ of Protection from Dark",0.14)
q.v(44)
q.b7(2,5)
q.K(500,1.5)
q.bv(k,A.a1())
q=A.I("_ of Protection from Light",0.14)
q.v(45)
q.b7(2,5)
q.K(500,1.5)
q.bv(n,A.a1())
q=A.I("_ of Protection from Spirit",0.13)
q.v(46)
q.b7(2,5)
q.K(800,1.6)
q.bv(h,A.a1())
A.b1()
$.bh="weapon"
q=A.I("_ of Harming",1)
q.E(1,30)
q.a_(1,3,2)
q.K(100,1.2)
q.bC(1.05)
q.dQ(A.a1())
q=A.I("_ of Wounding",1)
q.E(10,50)
q.a_(3,3,5)
q.K(140,1.3)
q.bC(1.07)
q.dQ(A.a1())
q=A.I("_ of Maiming",1)
q.E(25,75)
q.a_(2,3,4)
q.K(180,1.5)
q.bC(1.09)
q.dR(A.a1(),A.b2())
q=A.I("_ of Slaying",1)
q.v(45)
q.a_(4,2,8)
q.K(200,2)
q.bC(1.11)
q.dR(A.a1(),A.b2())
A.b1()
$.bh="bow"
q=A.I("Ash _",1)
q.E(10,70)
q.a_(2,4,4)
q.K(300,1.3)
q.bC(0.8)
q.dQ(A.a1())
q=A.I("Yew _",1)
q.v(20)
q.a_(5,3,8)
q.K(500,1.4)
q.bC(0.8)
q.dQ(A.a1())
A.b1()
$.bh="weapon"
q=A.I("Glimmering _",0.3)
q.E(20,60)
q.a_(2,3,3)
q.K(300,1.3)
q.aE(A.b2())
q.bB(n)
q=A.I("Shining _",0.25)
q.E(32,90)
q.a_(4,3,5)
q.K(400,1.6)
q.aE(A.b2())
q.bB(n)
q=A.I("Radiant _",0.2)
q.v(48)
q.a_(6,3,8)
q.K(500,2)
q.aE(A.b2())
q.cj(n,2)
n=A.I("Dim _",0.3)
n.E(16,60)
n.a_(2,3,3)
n.K(300,1.3)
n.aE(A.b2())
n.bB(k)
n=A.I("Dark _",0.25)
n.E(32,80)
n.a_(4,3,5)
n.K(400,1.6)
n.aE(A.b2())
n.bB(k)
n=A.I("Black _",0.2)
n.v(56)
n.a_(6,3,8)
n.K(500,2)
n.aE(A.b2())
n.cj(k,2)
k=A.I("Chilling _",0.3)
k.E(20,65)
k.a_(4,3,6)
k.K(300,1.5)
k.aE(A.b2())
k.bB(o)
k=A.I("Freezing _",0.25)
k.v(40)
k.a_(6,3,9)
k.K(400,1.7)
k.aE(A.b2())
k.cj(o,2)
o=A.I("Burning _",0.3)
o.E(20,60)
o.a_(3,3,5)
o.K(300,1.5)
o.aE(A.b2())
o.bB(p)
o=A.I("Flaming _",0.25)
o.E(40,90)
o.a_(6,3,7)
o.K(360,1.8)
o.aE(A.b2())
o.bB(p)
o=A.I("Searing _",0.2)
o.v(60)
o.a_(8,3,11)
o.K(500,2.1)
o.aE(A.b2())
o.cj(p,2)
p=A.I("Electric _",0.2)
p.v(50)
p.a_(4,3,7)
p.K(300,1.5)
p.aE(A.b2())
p.bB(l)
p=A.I("Shocking _",0.2)
p.v(70)
p.a_(8,3,11)
p.K(400,2)
p.aE(A.b2())
p.cj(l,2)
l=A.I("Poisonous _",0.2)
l.E(35,90)
l.a_(1,4,2)
l.K(500,1.5)
l.aE(A.b2())
l.bB(i)
l=A.I("Venomous _",0.2)
l.v(70)
l.a_(3,4,5)
l.K(800,1.8)
l.aE(A.b2())
l.cj(i,2)
i=A.I("Ghostly _",0.2)
i.E(45,85)
i.a_(4,3,6)
i.K(300,1.6)
i.bC(0.7)
i.aE(A.b2())
i.bB(h)
i=A.I("Spiritual _",0.15)
i.v(80)
i.a_(7,3,10)
i.K(400,2.1)
i.bC(0.7)
i.aE(A.b2())
i.cj(h,2)
A.zs()
A.b1()
$.bh="helm"
h=A.I("_ of Acumen",1)
h.E(35,55)
h.b7(1,4)
h.K(300,2)
h.ch.h(0,B.a3,A.a1())
h=A.I("_ of Wisdom",1)
h.E(45,75)
h.a_(2,4,3)
h.K(500,3)
h.ch.h(0,B.a3,A.a1())
h=A.I("_ of Sagacity",1)
h.v(75)
h.a_(4,4,5)
h.K(700,4)
h.ch.h(0,B.a3,A.a1())
h=A.I("_ of Genius",1)
h.v(85)
h.a_(6,4,7)
h.K(b1,5)
h.ch.h(0,B.a3,A.a1())
A.b1()
h=t.N
A.j1("The General's General Store",A.B(["Loaf of Bread",2,"Chunk of Meat",0.6,"Tallow Candle",1,"Wax Candle",0.7,"Oil Lamp",0.5,"Torch",0.3,"Lantern",0.1,"Soothing Balm",0.6,"Mending Salve",0.4,b0,0.2,"Club",0.1,"Staff",0.1,"Quarterstaff",0.05,"Whip",0.1,"Dagger",0.1],h,d))
A.j1("Dirk's Death Emporium",A.B(["Hammer",0.5,"Mattock",0.2,"War Hammer",0.1,"Morningstar",0.6,"Mace",0.3,"Chain Whip",0.2,"Flail",0.1,"Falchion",0.7,"Rapier",1,"Shortsword",0.6,"Scimitar",0.4,"Cutlass",0.2,"Spear",1,"Angon",0.4,"Lance",0.2,"Partisan",0.1,"Hatchet",1,"Axe",0.5,"Valaska",0.25,"Battleaxe",0.2,"Short Bow",1,"Longbow",0.3,"Crossbow",0.05],h,d))
A.j1("Skullduggery and Bamboozelry",A.B(["Dirk",1,"Dagger",0.3,"Stiletto",0.1,"Rondel",0.05,"Baselard",0.02],h,d))
A.j1("Garthag's Armoury",A.B(["Cloak",1,"Fur Cloak",1,"Cloth Shirt",1,"Leather Shirt",1,"Jerkin",1,"Leather Armor",1,"Padded Armor",1,"Studded Armor",1,"Mail Hauberk",1,"Scale Mail",1,"Robe",1,"Lined Robe",1,"Sandals",1,"Shoes",1,"Boots",1,"Plated Boots",1,"Greaves",1],h,d))
A.j1("Unguence the Alchemist",A.B(["Soothing Balm",1,"Mending Salve",1,b0,1,"Antidote",1,"Potion of Quickness",1,"Potion of Alacrity",1,"Bottled Wind",1,"Bottled Ice",1,"Bottled Fire",1,"Bottled Ocean",1,"Bottled Earth",1],h,d))
A.j1("The Droll Magery",A.B(["Scroll of Sidestepping",1,"Scroll of Phasing",1,"Scroll of Item Detection",1],h,d))
A.yj()
A.yn()
A.yB()
A.j_(new A.il(A.a([new A.aL(30,A.a8("Skull",a4,a4)),new A.aL(30,A.a8(c9,a4,a4)),new A.aL(20,A.a8(f0,a4,a4)),new A.aL(20,A.a8(d4,a4,a4)),new A.aL(20,A.a8("food",a4,a4)),new A.aL(15,A.a8(d8,a4,a4))],t.f8)),a4,B.aX,2)
A.j_(A.a8("food",a4,a4),1,a4,10)
A.j_(A.a8("Rock",a4,a4),0.1,B.bI,5)
A.j_(A.a8(c9,a4,a4),a4,a4,20)
A.j_(A.a8("light",a4,a4),0.1,a4,3)
A.j_(A.a8(a5,a4,a4),5,B.kd,2)
A.vE(B.bH,6)
A.vE(B.jM,1)
A.vE(B.jN,3)
A.C9("bat bug humanoid natural",2,1)
A.Ca("animal bat bug natural",1,0.2)
A.Cz(g5,100,1)
A.CI(g5,100,1)
A.ep("bug",40,1)
A.ep("jelly",50,5)
A.ep("bat",40,10)
A.ep("rodent",50,1)
A.ep("snake",60,8)
A.ep("plant",40,15)
A.ep("eye",100,20)
A.ep("dragon",100,60)
A.ue(e5,16,2)
A.ue(d2,23,5)
A.ue(e8,30,10)
A.ue("orc",40,28)
i=$.uG()
i.c6(g6)
i.c6(g7)
i.c6("cave/glowing-moss")
i.c6(b2)
i=$.nq()
l=$.b3()
p=t.oC
i=A.B(["*",A.T(i,l,a4,a4)],h,p)
$.cD.b="glowing-moss"
$.cE=null
$.cg=i
A.v(a4,B.q,"    #\n    *")
A.v(a4,B.q,"    ##\n    #*")
A.v(a4,a4,"    ?.?\n    .*.\n    ?.?")
i=$.j3()
o=A.B(["!",A.T(i,l,a4,a4)],h,p)
$.cD.b=g7
$.cE=null
$.cg=o
A.v(a4,a4,"    ?.?\n    .!.\n    ?.?")
a1=A.B(["\u250c",A.T($.jk(),l,a4,a4),"\u2500",A.T($.jj(),l,a4,a4),"\u2510",A.T($.jl(),l,a4,a4),"-",A.T($.fR(),l,a4,a4),"\u2502",A.T($.ji(),l,a4,a4),"\u2558",A.T($.jd(),l,a4,a4),"\u2550",A.T($.jc(),l,a4,a4),"\u255b",A.T($.je(),l,a4,a4),"\u255e",A.T($.jg(),l,a4,a4),"\u2564",A.T($.jf(),l,a4,a4),"\u2561",A.T($.jh(),l,a4,a4),"i",A.T(i,l,a4,a4)],h,p)
$.cD.b=g6
$.cE=null
$.cg=a1
A.v(a4,B.ac,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a4,B.ac,"    ?...\n    #\u2500\u2510.\n    #i\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a4,B.ac,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a4,B.ac,"    ?...\n    #\u2500\u2510.\n    #i\u2502.\n    #i\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a4,B.ac,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #-\u2502.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a4,B.ac,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #i\u2502.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a4,B.ac,"    ?...\n    #\u2500\u2510.\n    #i\u2502.\n    #-\u2502.\n    #i\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a4,a4,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502-\u2502.\n    ?###?")
A.v(a4,a4,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502i\u2502.\n    ?###?")
A.v(a4,a4,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502--\u2502.\n    ?####?")
A.v(a4,a4,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502ii\u2502.\n    ?####?")
A.v(a4,a4,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502---\u2502.\n    ?#####?")
A.v(a4,a4,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    ?#####?")
A.v(a4,a4,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502i-i\u2502.\n    ?#####?")
A.v(a4,a4,"    ?###?\n    .\u2502-\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.v(a4,a4,"    ?###?\n    .\u2502i\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.v(a4,a4,"    ?####?\n    .\u2502--\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.v(a4,a4,"    ?####?\n    .\u2502ii\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.v(a4,a4,"    ?#####?\n    .\u2502---\u2502.\n    .\u255e\u2550\u2550\u2550\u2561.\n    .......")
A.v(a4,a4,"    ?#####?\n    .\u2502-i-\u2502.\n    .\u255e\u2550\u2550\u2550\u2561.\n    .......")
A.v(a4,a4,"    ?#####?\n    .\u2502i-i\u2502.\n    .\u255e\u2550\u2550\u2550\u2561.\n    .......")
$.cD.b=g6
$.cE=null
$.cg=a1
A.v(a4,a4,"    ?.....?\n    #\u2500\u2510.\u250c\u2500#\n    #\u2564\u255b.\u2558\u2564#\n    ?.....?")
A.v(a4,a4,"    ?.......?\n    #\u2500\u2500\u2510.\u250c\u2500\u2500#\n    #\u2550\u2564\u255b.\u2558\u2564\u2550#\n    ?.......?")
A.v(a4,a4,"    ?.........?\n    #\u2500\u2500\u2500\u2510.\u250c\u2500\u2500\u2500#\n    #\u2550\u2550\u2564\u255b.\u2558\u2564\u2550\u2550#\n    ?.........?")
A.v(a4,a4,"    ?##?\n    .\u2502\u2502.\n    .\u255e\u2561.\n    ....\n    .\u250c\u2510.\n    .\u2502\u2502.\n    ?##?")
A.v(a4,a4,"    ?##?\n    .\u2502\u2502.\n    .\u2502\u2502.\n    .\u255e\u2561.\n    ....\n    .\u250c\u2510.\n    .\u2502\u2502.\n    .\u2502\u2502.\n    ?##?")
A.v(a4,a4,"    ?##?\n    .\u2502\u2502.\n    .\u2502\u2502.\n    .\u2502\u2502.\n    .\u255e\u2561.\n    ....\n    .\u250c\u2510.\n    .\u2502\u2502.\n    .\u2502\u2502.\n    .\u2502\u2502.\n    ?##?")
$.cD.b=g6
$.cE=null
$.cg=a1
A.v(a4,a4,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502-\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.v(a4,a4,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502i\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.v(a4,a4,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502--\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.v(a4,a4,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502ii\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.v(a4,a4,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502---\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a4,a4,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a4,a4,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502i-i\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a4,a4,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502----\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.v(a4,a4,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502i--i\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.v(a4,a4,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-----\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.v(a4,a4,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502--i--\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.v(a4,a4,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-i-i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.v(a4,a4,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502------\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
A.v(a4,a4,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-i--i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
A.v(a4,a4,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502-\u2502.\n    .\u2502-\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.v(a4,a4,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502i\u2502.\n    .\u2502i\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.v(a4,a4,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502--\u2502.\n    .\u2502--\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.v(a4,B.ac,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502i-\u2502.\n    .\u2502-i\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.v(a4,a4,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502---\u2502.\n    .\u2502---\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a4,a4,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    .\u2502-i-\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a4,a4,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    .\u2502i-i\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a4,a4,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502i-i\u2502.\n    .\u2502-i-\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a4,a4,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502----\u2502.\n    .\u2502----\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.v(a4,B.ac,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502i---\u2502.\n    .\u2502---i\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.v(a4,a4,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-----\u2502.\n    .\u2502-----\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.v(a4,a4,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502--i--\u2502.\n    .\u2502-i-i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.v(a4,a4,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502i---i\u2502.\n    .\u2502--i--\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.v(a4,a4,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502------\u2502.\n    .\u2502------\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
A.v(a4,a4,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-i--i-\u2502.\n    .\u2502-i--i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
i=A.B(["\u03c0",A.T($.j4(),l,a4,a4)],h,p)
$.cD.b=g6
$.cE=2
$.cg=i
A.v(a4,B.av,"    \u03c0.\n    .\u250c")
A.v(a4,B.av,"    \u03c0.\n    \u250c?")
A.v(a4,B.av,"    ..\n    \u03c0\u250c")
A.v(a4,B.ac,"    .\u255e\n    \u03c0.")
A.v(a4,B.q,"    ?\u2550?\n    .\u03c0.")
A.v(a4,a4,"    ?\u2564?\n    .\u03c0.")
A.v(a4,B.q,"    \u03c0\n    #")
A.v(a4,B.q,"    \u03c0\n    .\n    #")
i=A.B(["%",A.T($.j5(),l,a4,a4)],h,p)
$.cD.b=g6
$.cE=0.7
$.cg=i
A.v(a4,B.q,"    ##?\n    #%.\n    ?.?")
A.v(a4,B.q,"    ?.?\n    .%.\n    ?.?")
A.v(a4,B.q,"    ###?\n    #%%.\n    ?..?")
A.v(a4,B.q,"    ###?\n    #%%.\n    #%.?\n    ?.??")
A.v(a4,B.q,"    ?##?\n    .%%.\n    ?..?")
A.v(a4,B.q,"    ?###?\n    .%%%.\n    ?...?")
l=A.B(["&",A.T($.j6(),l,a4,a4)],h,p)
$.cD.b=g6
$.cE=0.5
$.cg=l
A.v(a4,B.q,"    ##?\n    #&.\n    ?.?")
A.v(a4,B.q,"    ?#?\n    .&.\n    ?.?")
$.cD.b=g6
$.cE=1
$.cg=null
A.v(a4,B.q,"    #...#\n    #\u2248\u2261\u2248#\n    #...#")
A.v(a4,B.q,"    #....#\n    #\u2248\u2248\u2261\u2248#\n    #....#")
A.v(a4,B.q,"    #.....#\n    #\u2248\u2248\u2261\u2248\u2248#\n    #.....#")
A.v(a4,B.q,"    #.....#\n    #\u2248\u2261\u2248\u2261\u2248#\n    #.....#")
A.v(a4,B.q,"    #......#\n    #......#\n    #\u2248\u2248\u2261\u2248\u2248\u2248#\n    #......#\n    #......#")
A.v(a4,B.q,"    #......#\n    #......#\n    #\u2248\u2261\u2248\u2248\u2261\u2248#\n    #......#\n    #......#")
A.v(a4,B.q,"    #.......#\n    #\u2248\u2248\u2248\u2261\u2248\u2248\u2248#\n    #.......#\n    #.......#")
A.v(a4,B.q,"    #.......#\n    #.......#\n    #\u2248\u2248\u2261\u2248\u2261\u2248\u2248#\n    #.......#\n    #.......#")
A.v(a4,B.q,"    #.......#\n    #.......#\n    #\u2248\u2261\u2248\u2248\u2248\u2261\u2248#\n    #.......#\n    #.......#")
A.v(a4,B.q,"    #........#\n    #........#\n    #\u2248\u2248\u2248\u2261\u2248\u2248\u2248\u2248#\n    #........#\n    #........#")
A.v(a4,B.q,"    #........#\n    #........#\n    #\u2248\u2248\u2261\u2248\u2248\u2261\u2248\u2248#\n    #........#\n    #........#")
A.v(a4,B.q,"    #.........#\n    #.........#\n    #\u2248\u2248\u2248\u2248\u2261\u2248\u2248\u2248\u2248#\n    #.........#\n    #.........#")
A.v(a4,B.q,"    #.........#\n    #.........#\n    #\u2248\u2248\u2261\u2248\u2248\u2248\u2261\u2248\u2248#\n    #.........#\n    #.........#")
A.v(a4,B.q,"    #.........#\n    #.........#\n    #\u2248\u2248\u2248\u2248\u2261\u2248\u2248\u2248\u2248#\n    #\u2248\u2248\u2248\u2248\u2261\u2248\u2248\u2248\u2248#\n    #.........#\n    #.........#")
A.v(a4,B.q,"    #.........#\n    #.........#\n    #\u2248\u2248\u2261\u2248\u2248\u2248\u2261\u2248\u2248#\n    #\u2248\u2248\u2261\u2248\u2248\u2248\u2261\u2248\u2248#\n    #.........#\n    #.........#")
l=$.uQ()
p=A.B(["*",A.T(l,a4,$.fT(),a4),"o",A.T(a4,a4,l,a4)],h,p)
$.cD.b=b2
$.cE=null
$.cg=p
A.v(0.6,B.q,"    .*")
A.v(0.6,B.q,"    ..\n    .*")
A.v(a4,B.q,"    o*")
A.v(a4,B.q,"    \u2248*\n    o\u2248")
a2=new A.kk()
A.db("6x8",6,8)
A.db("6x9",6,9)
A.db("8x8",8,a4)
A.db("8x10",8,10)
A.db("9x12",9,12)
A.db("10x12",10,12)
A.db("12x16",12,16)
A.db("12x18",12,18)
A.db("16x16",16,a4)
A.db("16x20",16,20)
s=v.G
a3="rvipMapFont" in s?A.r(A.c_(s,"rvipMapFont",a4,a4,d)):4
r=B.c.M(a3,0,$.dH.length-1)
if(!(r>=0&&r<$.dH.length))return A.b($.dH,r)
$.bJ.b=$.dH[r]
r=A.bV(A.a2(s.document).querySelector("#map"))
r.toString
r.append($.bJ.u().b)
$.vN=new A.uh()
s.rvipFont=A.tR(new A.ui())
s.rvipResize=A.vu(new A.uj())
r=$.bJ.u().c
q=A.a([],t.jp)
if($.x.b!==$.x)A.a_(A.xa(""))
$.x.b=new A.lz(new A.kK(A.C(t.fC,t.fb),t.hl),q,r)
s.rvipRedraw=A.vu(new A.uk())
r=$.x.u().a
r.a.h(0,new A.A(13,!1,!1),r.$ti.c.a(B.a2))
r=$.x.u().a
r.a.h(0,new A.A(27,!1,!1),r.$ti.c.a(B.H))
r=$.x.u().a
r.a.h(0,new A.A(66,!1,!1),r.$ti.c.a(B.bo))
A.a2(s.document).addEventListener("keydown",A.tR(new A.ul()),!0)
r=$.x.u().a
r.a.h(0,new A.A(192,!1,!1),r.$ti.c.a(B.H))
r=$.x.u().a
r.a.h(0,new A.A(70,!0,!1),r.$ti.c.a(B.bm))
r=$.x.u().a
r.a.h(0,new A.A(81,!1,!1),r.$ti.c.a(B.br))
r=$.x.u().a
r.a.h(0,new A.A(67,!1,!1),r.$ti.c.a(B.bp))
r=$.x.u().a
r.a.h(0,new A.A(68,!1,!1),r.$ti.c.a(B.be))
r=$.x.u().a
r.a.h(0,new A.A(85,!1,!1),r.$ti.c.a(B.bz))
r=$.x.u().a
r.a.h(0,new A.A(71,!1,!1),r.$ti.c.a(B.bq))
r=$.x.u().a
r.a.h(0,new A.A(88,!1,!1),r.$ti.c.a(B.bx))
r=$.x.u().a
r.a.h(0,new A.A(69,!1,!1),r.$ti.c.a(B.bg))
r=$.x.u().a
r.a.h(0,new A.A(84,!1,!1),r.$ti.c.a(B.by))
r=$.x.u().a
r.a.h(0,new A.A(65,!1,!1),r.$ti.c.a(B.bA))
r=$.x.u().a
r.a.h(0,new A.A(83,!1,!1),r.$ti.c.a(B.hG))
r=$.x.u().a
r.a.h(0,new A.A(65,!0,!1),r.$ti.c.a(B.bn))
r=$.x.u().a
r.a.h(0,new A.A(83,!0,!1),r.$ti.c.a(B.bf))
r=$.x.u().a
r.a.h(0,new A.A(69,!0,!1),r.$ti.c.a(B.bw))
r=$.x.u().a
r.a.h(0,new A.A(72,!1,!1),r.$ti.c.a(B.aO))
r=$.x.u().a
r.a.h(0,new A.A(72,!0,!1),r.$ti.c.a(B.bh))
r=$.x.u().a
r.a.h(0,new A.A(73,!1,!1),r.$ti.c.a(B.aB))
r=$.x.u().a
r.a.h(0,new A.A(79,!1,!1),r.$ti.c.a(B.X))
r=$.x.u().a
r.a.h(0,new A.A(80,!1,!1),r.$ti.c.a(B.aA))
r=$.x.u().a
r.a.h(0,new A.A(75,!1,!1),r.$ti.c.a(B.a9))
r=$.x.u().a
r.a.h(0,new A.A(186,!1,!1),r.$ti.c.a(B.ad))
r=$.x.u().a
r.a.h(0,new A.A(188,!1,!1),r.$ti.c.a(B.aE))
r=$.x.u().a
r.a.h(0,new A.A(190,!1,!1),r.$ti.c.a(B.Y))
r=$.x.u().a
r.a.h(0,new A.A(191,!1,!1),r.$ti.c.a(B.aD))
r=$.x.u().a
r.a.h(0,new A.A(73,!0,!1),r.$ti.c.a(B.bt))
r=$.x.u().a
r.a.h(0,new A.A(79,!0,!1),r.$ti.c.a(B.ap))
r=$.x.u().a
r.a.h(0,new A.A(80,!0,!1),r.$ti.c.a(B.bs))
r=$.x.u().a
r.a.h(0,new A.A(75,!0,!1),r.$ti.c.a(B.aQ))
r=$.x.u().a
r.a.h(0,new A.A(186,!0,!1),r.$ti.c.a(B.aP))
r=$.x.u().a
r.a.h(0,new A.A(188,!0,!1),r.$ti.c.a(B.bv))
r=$.x.u().a
r.a.h(0,new A.A(190,!0,!1),r.$ti.c.a(B.aq))
r=$.x.u().a
r.a.h(0,new A.A(191,!0,!1),r.$ti.c.a(B.bu))
r=$.x.u().a
r.a.h(0,new A.A(73,!1,!0),r.$ti.c.a(B.c7))
r=$.x.u().a
r.a.h(0,new A.A(79,!1,!0),r.$ti.c.a(B.bj))
r=$.x.u().a
r.a.h(0,new A.A(80,!1,!0),r.$ti.c.a(B.c6))
r=$.x.u().a
r.a.h(0,new A.A(75,!1,!0),r.$ti.c.a(B.bl))
r=$.x.u().a
r.a.h(0,new A.A(186,!1,!0),r.$ti.c.a(B.bi))
r=$.x.u().a
r.a.h(0,new A.A(188,!1,!0),r.$ti.c.a(B.c9))
r=$.x.u().a
r.a.h(0,new A.A(190,!1,!0),r.$ti.c.a(B.bk))
r=$.x.u().a
r.a.h(0,new A.A(191,!1,!0),r.$ti.c.a(B.c8))
r=$.x.u().a
r.a.h(0,new A.A(76,!1,!1),r.$ti.c.a(B.a2))
r=$.x.u().a
r.a.h(0,new A.A(76,!0,!1),r.$ti.c.a(B.aC))
r=$.x.u().a
r.a.h(0,new A.A(76,!1,!0),r.$ti.c.a(B.aN))
r=$.x.u().a
r.a.h(0,new A.A(38,!1,!1),r.$ti.c.a(B.X))
r=$.x.u().a
r.a.h(0,new A.A(37,!1,!1),r.$ti.c.a(B.a9))
r=$.x.u().a
r.a.h(0,new A.A(39,!1,!1),r.$ti.c.a(B.ad))
r=$.x.u().a
r.a.h(0,new A.A(40,!1,!1),r.$ti.c.a(B.Y))
r=$.x.u().a
r.a.h(0,new A.A(38,!0,!1),r.$ti.c.a(B.ap))
r=$.x.u().a
r.a.h(0,new A.A(37,!0,!1),r.$ti.c.a(B.aQ))
r=$.x.u().a
r.a.h(0,new A.A(39,!0,!1),r.$ti.c.a(B.aP))
r=$.x.u().a
r.a.h(0,new A.A(40,!0,!1),r.$ti.c.a(B.aq))
r=$.x.u().a
r.a.h(0,new A.A(38,!1,!0),r.$ti.c.a(B.bj))
r=$.x.u().a
r.a.h(0,new A.A(37,!1,!0),r.$ti.c.a(B.bl))
r=$.x.u().a
r.a.h(0,new A.A(39,!1,!0),r.$ti.c.a(B.bi))
r=$.x.u().a
r.a.h(0,new A.A(40,!1,!0),r.$ti.c.a(B.bk))
r=$.x.u().a
r.a.h(0,new A.A(103,!1,!1),r.$ti.c.a(B.aB))
r=$.x.u().a
r.a.h(0,new A.A(104,!1,!1),r.$ti.c.a(B.X))
r=$.x.u().a
r.a.h(0,new A.A(105,!1,!1),r.$ti.c.a(B.aA))
r=$.x.u().a
r.a.h(0,new A.A(100,!1,!1),r.$ti.c.a(B.a9))
r=$.x.u().a
r.a.h(0,new A.A(102,!1,!1),r.$ti.c.a(B.ad))
r=$.x.u().a
r.a.h(0,new A.A(97,!1,!1),r.$ti.c.a(B.aE))
r=$.x.u().a
r.a.h(0,new A.A(98,!1,!1),r.$ti.c.a(B.Y))
r=$.x.u().a
r.a.h(0,new A.A(99,!1,!1),r.$ti.c.a(B.aD))
r=$.x.u().a
r.a.h(0,new A.A(103,!0,!1),r.$ti.c.a(B.bt))
r=$.x.u().a
r.a.h(0,new A.A(104,!0,!1),r.$ti.c.a(B.ap))
r=$.x.u().a
r.a.h(0,new A.A(105,!0,!1),r.$ti.c.a(B.bs))
r=$.x.u().a
r.a.h(0,new A.A(100,!0,!1),r.$ti.c.a(B.aQ))
r=$.x.u().a
r.a.h(0,new A.A(102,!0,!1),r.$ti.c.a(B.aP))
r=$.x.u().a
r.a.h(0,new A.A(97,!0,!1),r.$ti.c.a(B.bv))
r=$.x.u().a
r.a.h(0,new A.A(98,!0,!1),r.$ti.c.a(B.aq))
r=$.x.u().a
r.a.h(0,new A.A(99,!0,!1),r.$ti.c.a(B.bu))
r=$.x.u().a
r.a.h(0,new A.A(101,!1,!1),r.$ti.c.a(B.a2))
r=$.x.u().a
r.a.h(0,new A.A(1001,!1,!1),r.$ti.c.a(B.a2))
r=$.x.u().a
r.a.h(0,new A.A(101,!0,!1),r.$ti.c.a(B.aC))
r=$.x.u().a
r.a.h(0,new A.A(1001,!0,!1),r.$ti.c.a(B.aC))
r=$.x.u().a
r.a.h(0,new A.A(101,!1,!0),r.$ti.c.a(B.aN))
r=$.x.u().a
r.a.h(0,new A.A(87,!0,!0),r.$ti.c.a(B.ca))
r=$.x.u()
q=new A.rw(a2,A.a([],t.di))
q.nh()
r.a3(new A.hz(a2,q))
$.x.u().spl(!0)
$.x.u().spQ(!0)
s=A.bV(A.a2(s.document).body)
s.toString
q=t.gX
A.ft(s,"keydown",q.i("~(1)?").a(new A.um()),!1,q.c)},
db(a,b,c){var s,r,q,p
if(c==null)c=b
s=A.wX()
r=t.gX
q=r.i("~(1)?")
r=r.c
A.ft(s,"dblclick",q.a(new A.tO()),!1,r)
p=A.y0(s,b,c)
B.a.j($.dH,new A.lO(s,p,b,c))
A.ft(s,"click",q.a(new A.tP(p)),!1,r)},
y0(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=v.G,h=A.bV(A.a2(i.document).querySelector("#map"))
h.toString
s=$.vv&&A.vM()
r=B.c.c_(A.r(h.clientWidth),b)
q=s?40:80
p=Math.max(r,q)
h=B.c.c_(A.r(h.clientHeight),c)
r=s?16:34
o=Math.max(h,r)
n=B.e.N(A.bw(A.a2(i.window).devicePixelRatio))
m=b*p
l=c*o
a.width=m*n
a.height=l*n
A.a2(a.style).width=""+m+"px"
A.a2(a.style).height=""+l+"px"
k="font_"+b
if(b!==c)k+="_"+c
n=B.e.N(A.bw(A.a2(i.window).devicePixelRatio))
h=p*o
r=A.an(h,B.aM,!1,t.v)
h=A.an(h,B.aM,!1,t.n3)
j=A.a2(A.a2(i.document).createElement("img"))
j.src=k+".png"
return A.Ar(new A.oc(new A.aa(r,new A.a0(new A.e(0,0),new A.e(p,o)),t.bG),new A.aa(h,new A.a0(new A.e(0,0),new A.e(p,o)),t.cY)),b,c,a,j,n)},
vz(){var s=A.y0($.bJ.u().b,$.bJ.u().d,$.bJ.u().e)
$.bJ.u().c=s
$.x.u().lv(s)},
Bi(){var s,r,q,p=null,o=A.bV(A.a2(v.G.document).querySelector("#map"))
o.toString
s=["requestFullscreen","mozRequestFullScreen","webkitRequestFullscreen","msRequestFullscreen"]
for(r=0;r<4;++r){q=s[r]
if(q in o){A.kG(o,q,p,p,p,p)
return}}},
y5(){A.r(A.a2(v.G.window).requestAnimationFrame(A.vu(new A.tV())))},
Au(a){A.dc(a)
return a instanceof A.dY||a instanceof A.hz||a instanceof A.hG||a instanceof A.ic||a instanceof A.h6},
nj(){var s=B.a.cH($.ae,new A.tS())
v.G.rvipInGame=s
if(s===$.vv)return
$.vv=s
if(!s)A.CJ()
A.vz()},
lO:function lO(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
uh:function uh(){},
ui:function ui(){},
uj:function uj(){},
uk:function uk(){},
ul:function ul(){},
um:function um(){},
tO:function tO(){},
tP:function tP(a){this.a=a},
tV:function tV(){},
tW:function tW(){},
lz:function lz(a,b,c){var _=this
_.z=!0
_.a=a
_.b=b
_.c=c
_.d=!0
_.f=_.e=null
_.r=$
_.w=!1
_.y=null},
tS:function tS(){},
C5(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
switch(b.a){case B.b5:s=b.d
r=b.b
if(s===$.az()){s=$.wv().m(0,b.c)
s.toString
B.a.j(a,new A.cO(r,A.as(s,B.I,f),2))}else{s=$.ww().m(0,s)
s.toString
B.a.j(a,new A.ha(r,s))}break
case B.b6:s=$.ww().m(0,b.d)
s.toString
B.a.j(a,new A.ha(b.b,s))
break
case B.bd:B.a.j(a,new A.kB(b.b,b.f.a.b))
break
case B.bU:B.a.j(a,new A.jT(b.e.y,A.as("*",A.el(b.d),f),B.e.aV(Math.sqrt(b.r/5))))
break
case B.b7:for(s=b.e,q=0;q<10;++q){r=s.y.gn()
p=s.y.gp()
o=$.n()
o=o.a
n=o.a5(628)/100
m=(o.a5(10)+30)/100
l=Math.cos(n)
k=Math.sin(n)
B.a.j(a,new A.lb(r,p,l*m,k*m,o.a5(8)+7,B.m))}break
case B.ba:s=b.e
B.a.j(a,new A.kq(s.y.gn(),s.y.gp()))
break
case B.bT:B.a.j(a,new A.h5(b.b))
break
case B.bZ:B.a.j(a,new A.h5(b.e.y))
break
case B.bX:s=$.n().bs(10,20)
r=new A.kR(s,b.b)
r.c=s
B.a.j(a,r)
break
case B.bc:s=b.e
r=b.b
j=B.c.M(s.y.S(0,r).gb5(),4,12)
for(q=0;q<j;++q){p=s.y
i=r.gn()
h=r.gp()
o=$.n()
o=o.a
n=o.a5(628)/100
m=(o.a5(70)+10)/100
B.a.j(a,new A.lN(i,h,Math.cos(n)*m,Math.sin(n)*m,p))}break
case B.bb:B.a.j(a,new A.cO(b.e.y,A.as("*",B.u,f),4))
break
case B.c_:B.a.j(a,new A.cO(b.e.y,A.as("*",B.u,f),4))
break
case B.bV:B.a.j(a,new A.kt(b.b))
break
case B.bS:s=b.e
s.toString
B.a.j(a,new A.fZ(s,A.as("!",B.u,f),1))
break
case B.b8:s=b.e
s.toString
B.a.j(a,new A.fZ(s,A.as("!",B.h,f),3))
break
case B.c2:break
case B.bW:B.a.j(a,new A.cO(b.b,A.as("*",B.E,f),4))
break
case B.c0:case B.c1:s=$.wv().m(0,b.c)
s.toString
g=b.f
B.a.j(a,new A.cO(b.b,A.as(s,g!=null?g.a.b.b:B.u,f),4))
break
case B.b9:s=b.b
r=b.f
r.toString
B.a.j(a,new A.lS(s.gn(),s.gp(),r.a.b))
break
case B.bY:B.a.j(a,new A.cO(b.b,A.as("*",B.I,f),4))
break}},
yC(a){return v.mangledGlobalNames[a]},
up(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
kG(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else{s=a[b](c,d)
return s}},
c_(a,b,c,d,e){return e.a(A.kG(a,b,c,d,null,null))},
wD(a){var s,r,q
for(s=[$.dJ(),$.dK()],r=0;r<2;++r){q=s[r].cb(a)
if(q!=null)return q}throw A.m(A.aF("Unknown affix '"+a+"'.",null))},
zs(){var s,r,q,p,o,n,m,l,k,j,i,h="Master's _",g=[B.iM,B.iK,B.iJ,B.iw,B.iP,B.iF]
for(s=t.Q,r=t.h,q=t.Z,p=t.M,o=0;o<6;++o){n=g[o]
m=n.b
A.b1()
$.bh=n.a
A.b1()
l=B.i.dW("Fine _"," _")?$.dJ():$.dK()
n=A.C(p,s)
k=$.iV=new A.cn("Fine _",l,1,A.C(r,s),A.C(q,s),n)
k.c=1
k.d=40
k.pD(1)
k.K(1000,1.8)
s.a(A.a1())
k=$.w1()
j=k.m(0,m)
if(j==null)A.a_(A.aF("Unknown skill '"+m+"'.",null))
n.h(0,j,A.a1())
A.b1()
l=B.i.dW("Deft _"," _")?$.dJ():$.dK()
n=A.C(p,s)
i=$.iV=new A.cn("Deft _",l,1,A.C(r,s),A.C(q,s),n)
i.c=20
i.d=60
i.pE(2,3)
i.K(2000,2.4)
j=k.m(0,m)
if(j==null)A.a_(A.aF("Unknown skill '"+m+"'.",null))
n.h(0,j,A.a1())
A.b1()
l=B.i.dW(h," _")?$.dJ():$.dK()
n=A.C(p,s)
i=$.iV=new A.cn(h,l,1,A.C(r,s),A.C(q,s),n)
i.c=40
i.d=100
i.a_(3,6,4)
i.K(4000,3.4)
j=k.m(0,m)
if(j==null)A.a_(A.aF("Unknown skill '"+m+"'.",null))
n.h(0,j,A.a1())}},
yj(){var s=t.N,r=t.S
A.bi("Uncut Amethyst",A.B(["Amethyst Shard",4],s,r))
A.bi("Faceted Amethyst",A.B(["Uncut Amethyst",4],s,r))
A.bi("Uncut Sapphire",A.B(["Sapphire Shard",4],s,r))
A.bi("Faceted Sapphire",A.B(["Uncut Sapphire",4],s,r))
A.bi("Uncut Emerald",A.B(["Emerald Shard",4],s,r))
A.bi("Faceted Emerald",A.B(["Uncut Emerald",4],s,r))
A.bi("Uncut Ruby",A.B(["Ruby Shard",4],s,r))
A.bi("Faceted Ruby",A.B(["Uncut Ruby",4],s,r))
A.bi("Uncut Diamond",A.B(["Diamond Shard",4],s,r))
A.bi("Faceted Diamond",A.B(["Uncut Diamond",4],s,r))},
yn(){var s="Healing Poultice",r="Potion of Amelioration",q=t.N,p=t.S
A.bi("Mending Salve",A.B(["Soothing Balm",3],q,p))
A.bi(s,A.B(["Mending Salve",3],q,p))
A.bi(r,A.B([s,3],q,p))
A.bi("Potion of Rejuvenation",A.B([r,4],q,p))},
yB(){var s="Scroll of Sidestepping",r="Scroll of Phasing",q="Scroll of Teleportation",p=t.N,o=t.S
A.bi(s,A.B(["Insect Wing",1,"Feather",1],p,o))
A.bi(r,A.B([s,2],p,o))
A.bi(q,A.B([r,2],p,o))
A.bi("Scroll of Disappearing",A.B([q,2],p,o))},
bi(a,b){var s,r,q,p,o,n=A.C(t.q,t.S)
for(s=new A.br(b,A.y(b).i("br<1,2>")).gL(0);s.q();){r=s.d
q=r.a
p=r.b
o=$.bo().b.m(0,q)
if(o==null)A.a_(A.aF('Unknown resource "'+q+'".',null))
n.h(0,o.a,p)}B.a.j($.hR,new A.lr(n,A.a8(a,1,null),a))},
Cf(){var s,r,q,p,o,n,m,l,k,j,i,h="mythical/beast/dragon",g=null,f="{2} [are|is] deflected by its scales.",e="treasure",d="equipment",c=A.am("d",h,g,g,g,g,g)
c.at=12
c.ax=8
B.a.j(c.w,new A.aG(10,f))
c.d=B.aj
c=$.az()
s=[new A.X(["forest",c,B.n,B.B]),new A.X(["brown",$.dM(),B.I,B.k]),new A.X(["blue",$.dh(),B.J,B.D]),new A.X(["white",$.cj(),B.p,B.u]),new A.X(["purple",$.bK(),B.P,B.O]),new A.X(["green",$.dL(),B.A,B.af]),new A.X(["silver",$.dN(),B.K,B.J]),new A.X(["red",$.b9(),B.a5,B.m]),new A.X(["gold",$.dg(),B.E,B.h]),new A.X(["black",$.df(),B.f,B.l]),new A.X(["ethereal",$.dO(),B.a0,B.F])]
for(r=0,q=0;q<11;++q){p=s[q].a
o=p[0]
n=p[1]
m=p[2]
p=B.e.P(A.w(r,0,10,38,53))
l=B.e.P(A.w(r,0,10,150,350))
A.fH()
k=$.al.b
if(k===$.al)A.a_(A.e0(""))
k=k.ay
if(0>=k.length)return A.b(k,0)
j=A.nP("juvenile "+o+" dragon",p,g,new A.Y(k.charCodeAt(0),m,B.z),l)
j.e=0
j.r=null
$.cf=j
p=B.e.P(A.w(r,0,10,20,40))
l=j.db
B.a.j(l,new A.ba(g,"bite[s]",p,0,c))
p=B.e.P(A.w(r,0,10,15,25))
B.a.j(l,new A.ba(g,"claw[s]",p,0,c))
p=B.e.P(A.w(r,0,10,2,10))
l=j.CW
i=new A.aL(100,A.a8(e,l,g))
if(p>1)i=new A.bI(p,i)
p=j.dy
B.a.j(p,i)
k=A.a8("magic",l,g)
B.a.j(p,new A.aL(100,k))
l=A.a8(d,l,g)
B.a.j(p,new A.aL(100,l))
if(n!==c){p=B.e.P(A.w(r,0,10,40,100))
l=$.fU()
k=l.m(0,n)[0]
l=l.m(0,n)[1]
k=A.aT(k,B.y,B.W).a7(1)
B.a.j(j.dx,new A.dq(new A.ba(new A.aK(k),l,p,5,n),11))}++r}p=A.am("d",h,g,g,g,g,g)
p.at=16
p.ax=10
B.a.j(p.w,new A.aG(20,f))
p.d=B.aj
for(r=0,q=0;q<11;++q){p=s[q].a
o=p[0]
n=p[1]
m=p[3]
p=B.e.P(A.w(r,0,10,48,62))
l=B.e.P(A.w(r,0,10,350,850))
A.fH()
k=$.al.b
if(k===$.al)A.a_(A.e0(""))
k=k.ay
if(0>=k.length)return A.b(k,0)
j=A.nP(o+" dragon",p,g,new A.Y(k.charCodeAt(0),m,B.z),l)
j.e=0
j.r=null
$.cf=j
p=B.e.P(A.w(r,0,10,30,50))
l=j.db
B.a.j(l,new A.ba(g,"bite[s]",p,0,c))
p=B.e.P(A.w(r,0,10,25,35))
B.a.j(l,new A.ba(g,"claw[s]",p,0,c))
p=B.e.P(A.w(r,0,10,5,15))
l=j.CW
i=new A.aL(100,A.a8(e,l,g))
if(p>1)i=new A.bI(p,i)
p=j.dy
B.a.j(p,i)
k=B.e.P(A.w(r,0,10,2,5))
i=new A.aL(100,A.a8("magic",l,g))
if(k>1)i=new A.bI(k,i)
B.a.j(p,i)
k=B.e.P(A.w(r,0,10,2,5))
i=new A.aL(100,A.a8(d,l,g))
if(k>1)i=new A.bI(k,i)
B.a.j(p,i)
if(n!==c){p=B.e.P(A.w(r,0,10,70,150))
l=$.fU()
k=l.m(0,n)[0]
l=l.m(0,n)[1]
k=A.aT(k,B.y,B.W).a7(1)
B.a.j(j.dx,new A.dq(new A.ba(new A.aK(k),l,p,10,n),8))}++r}},
Cp(){var s,r,q,p,o,n,m,l,k,j="mythical/beast/dragon",i=null,h="{2} [are|is] deflected by its scales.",g="treasure",f="equipment",e=$.az(),d=[new A.X(["forest",e,B.n,B.B]),new A.X(["brown",$.dM(),B.I,B.k]),new A.X(["blue",$.dh(),B.J,B.D]),new A.X(["white",$.cj(),B.p,B.u]),new A.X(["purple",$.bK(),B.P,B.O]),new A.X(["green",$.dL(),B.A,B.af]),new A.X(["silver",$.dN(),B.K,B.J]),new A.X(["red",$.b9(),B.a5,B.m]),new A.X(["gold",$.dg(),B.E,B.h]),new A.X(["black",$.df(),B.f,B.l]),new A.X(["ethereal",$.dO(),B.a0,B.F])],c=A.am("D",j,i,i,i,i,i)
c.at=12
c.ax=8
B.a.j(c.w,new A.aG(10,h))
c.d=B.aj
for(s=0,r=0;r<11;++r){c=d[r].a
q=c[0]
p=c[1]
o=c[2]
c=B.e.P(A.w(s,0,10,65,85))
n=B.e.P(A.w(s,0,10,800,1500))
A.fH()
m=$.al.b
if(m===$.al)A.a_(A.e0(""))
m=m.ay
if(0>=m.length)return A.b(m,0)
l=A.nP("elder "+q+" dragon",c,i,new A.Y(m.charCodeAt(0),o,B.z),n)
l.e=0
l.r=null
$.cf=l
c=B.e.P(A.w(s,0,10,40,80))
n=l.db
B.a.j(n,new A.ba(i,"bite[s]",c,0,e))
c=B.e.P(A.w(s,0,10,35,75))
B.a.j(n,new A.ba(i,"claw[s]",c,0,e))
c=B.e.P(A.w(s,0,10,6,16))
n=l.CW
k=new A.aL(100,A.a8(g,n,i))
if(c>1)k=new A.bI(c,k)
c=l.dy
B.a.j(c,k)
m=B.e.P(A.w(s,0,10,3,6))
k=new A.aL(100,A.a8("magic",n,i))
if(m>1)k=new A.bI(m,k)
B.a.j(c,k)
m=B.e.P(A.w(s,0,10,3,6))
k=new A.aL(100,A.a8(f,n,i))
if(m>1)k=new A.bI(m,k)
B.a.j(c,k)
if(p!==e){c=B.e.P(A.w(s,0,10,40,100))
n=$.fU()
m=n.m(0,p)[0]
n=n.m(0,p)[1]
m=A.aT(m,B.y,B.W).a7(1)
B.a.j(l.dx,new A.dq(new A.ba(new A.aK(m),n,c,5,p),11))}++s}c=A.am("D",j,i,i,i,i,i)
c.at=16
c.ax=10
B.a.j(c.w,new A.aG(20,h))
c.d=B.aj
for(s=0,r=0;r<11;++r){c=d[r].a
q=c[0]
p=c[1]
o=c[3]
c=B.e.P(A.w(s,0,10,80,99))
n=B.e.P(A.w(s,0,10,1400,2000))
A.fH()
m=$.al.b
if(m===$.al)A.a_(A.e0(""))
m=m.ay
if(0>=m.length)return A.b(m,0)
l=A.nP("ancient "+q+" dragon",c,i,new A.Y(m.charCodeAt(0),o,B.z),n)
l.e=0
l.r=null
$.cf=l
c=B.e.P(A.w(s,0,10,60,100))
n=l.db
B.a.j(n,new A.ba(i,"bite[s]",c,0,e))
c=B.e.P(A.w(s,0,10,50,80))
B.a.j(n,new A.ba(i,"claw[s]",c,0,e))
c=B.e.P(A.w(s,0,10,7,20))
n=l.CW
k=new A.aL(100,A.a8(g,n,i))
if(c>1)k=new A.bI(c,k)
c=l.dy
B.a.j(c,k)
m=B.e.P(A.w(s,0,10,4,7))
k=new A.aL(100,A.a8("magic",n,i))
if(m>1)k=new A.bI(m,k)
B.a.j(c,k)
m=B.e.P(A.w(s,0,10,4,7))
k=new A.aL(100,A.a8(f,n,i))
if(m>1)k=new A.bI(m,k)
B.a.j(c,k)
if(p!==e){c=B.e.P(A.w(s,0,10,200,400))
n=$.fU()
m=n.m(0,p)[0]
n=n.m(0,p)[1]
m=A.aT(m,B.y,B.W).a7(1)
B.a.j(l.dx,new A.dq(new A.ba(new A.aK(m),n,c,10,p),8))}++s}},
nO(a){var s,r=null
if(a>=64){a=B.c.A(a,8)*8
s=A.cJ(B.c.A(a,8),2,r)
s=A.cJ(B.c.A(a,4),3,s)
s=A.cJ(a,6,A.cJ(B.c.A(a,2),5,s))}else if(a>=32){a=B.c.A(a,4)*4
s=A.cJ(B.c.A(a,4),2,r)
s=A.cJ(a,5,A.cJ(B.c.A(a,2),3,s))}else if(a>=16){a=B.c.A(a,2)*2
s=A.cJ(a,3,A.cJ(B.c.A(a,2),2,r))}else s=A.cJ(a,3,r)
return A.zv(s)},
cJ(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=t.y,b=new A.a0(new A.e(0,0),new A.e(a4,a4)),a=a4*a4,a0=A.an(a,!1,!1,c),a1=t.b,a2=new A.aa(a0,b,a1),a3=new A.aa(A.an(a,!1,!1,c),new A.a0(new A.e(0,0),new A.e(a4,a4)),a1)
if(a6!=null)for(c=A.ac(b.bR(-1)),b=a6.a,a=a6.b.b.a,a1=b.length;c.q();){s=c.b
r=c.c
q=B.c.A(s,2)
p=B.c.A(r,2)
a6.l(q,p)
q=p*a+q
if(!(q>=0&&q<a1))return A.b(b,q)
o=b[q]?0.3:0.7
q=$.n().aS(1)
a2.l(s,r)
B.a.h(a0,r*a4+s,q>o)}else{n=b.gho()
m=Math.sqrt(new A.e(b.gbT(),b.gbY()).S(0,b.gho()).gaH())
for(c=A.ac(b.bR(-1));c.q();){b=c.b
a=c.c
a1=new A.e(b,a).S(0,n)
s=a1.a
a1=a1.b
a1=Math.sqrt(s*s+a1*a1)
s=$.n().aS(1)
a2.l(b,a)
B.a.h(a0,a*a4+b,s>a1/m)}}for(l=0;l<a5;++l,k=a3,a3=a2,a2=k)for(c=a2.b,b=c.bR(-1),a=b.a,a=new A.cX(b,a.a-1,a.b),b=a3.$ti.c,a0=a3.a,a1=a3.b.b.a,s=a2.a,c=c.b.a,r=s.length;a.q();){q=a.b
p=a.c
a2.l(q,p)
j=p*c+q
if(!(j>=0&&j<r))return A.b(s,j)
i=s[j]?1:0
for(j=new A.e(q,p).gbD(),h=j.length,g=0;g<h;++g){f=j[g]
e=f.a
d=f.b
a2.l(e,d)
e=d*c+e
if(!(e>=0&&e<r))return A.b(s,e)
if(s[e])++i}j=b.a(i>=5)
a3.l(q,p)
B.a.h(a0,p*a1+q,j)}return a3},
zv(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.b,g=h.b,f=g.a,e=g.b
for(h=A.ac(h),g=a.a,s=g.length,r=f,q=-1,p=-1;h.q();){o=h.b
n=h.c
a.l(o,n)
m=n*f+o
if(!(m>=0&&m<s))return A.b(g,m)
if(g[m]){r=Math.min(r,o)
q=Math.max(q,o)
e=Math.min(e,n)
p=Math.max(p,n)}}h=q-r+1
o=p-e+1
n=new A.a0(new A.e(0,0),new A.e(h,o))
o=A.an(h*o,!1,!1,t.y)
l=new A.aa(o,n,t.b)
for(n=A.ac(n);n.q();){m=n.b
k=n.c
j=m+r
i=k+e
a.l(j,i)
j=i*f+j
if(!(j>=0&&j<s))return A.b(g,j)
j=A.dG(g[j])
l.l(m,k)
B.a.h(o,k*h+m,j)}return l},
el(a){var s=A.B([$.az(),B.p,$.et(),B.K,$.dM(),B.k,$.b9(),B.m,$.dh(),B.F,$.dL(),B.A,$.cj(),B.J,$.dN(),B.P,$.bK(),B.n,$.df(),B.l,$.dg(),B.E,$.dO(),B.O],t.h,t.aZ).m(0,a)
s.toString
return s},
us(b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
A.bl(b2,b1,c1+2,b3.gku().a,b5,c7,c2,c6)
s=b6?"ABCDEFGHIJKLMNOPQRSTUVWXYZ":"abcdefghijklmnopqrstuvwxyz"
r=c2+c7
q=r-1
if(c5)for(p=b3.gL(b3),o=q;p.q();){n=b8.$1(p.gH())
if(n!=null)o=Math.min(o,r-A.R(n,!1,b1).length-3)}for(p=J.aw(b3.gcz()),m=c2+1,l=s.length,k=b2 instanceof A.hX,j=c2-34,i=r+34,h=c7-34,g=c6+c1,f=g+3,e=0,d=0;p.q();){c=p.gH()
b=c2+(c4?3:1)
a=c6+e+1
if(e>=c1){r=b3.gI(b3)
p=b5?B.h:B.j
b2.k(b+1,g+1," "+(r-c1)+" more... ",p)
break}if(c==null){c=!1
if(e>0){a0=b3.gem()
if(!(e<a0.length))return A.b(a0,e)
if(a0[e]==="hand"){a0=b3.gem()
a1=e-1
if(!(a1<a0.length))return A.b(a0,a1)
if(a0[a1]==="hand"){c=J.uS(b3.gcz(),a1)
c=c==null?b1:c.a.f
c=c===!0}}}if(c)b2.k(b,a,"\u2191 (two-handed)",B.j)
else{c=b3.gem()
if(!(e<c.length))return A.b(c,e)
b2.k(b+2,a,"("+c[e]+")",B.t)}++d;++e
continue}a2=!b5||b4.$1(c)
if(c4&&b5&&b4.$1(c)){b2.k(m,a," )",B.l)
if(!(d<l))return A.b(s,d)
b2.k(m,a,s[d],B.h)}++d
if(a2){a0=c.a
b2.an(b,a,a0.b)
if(k)b2.pn(b,a,B.bE.m(0,a0.a.a7(1).a))}if(c5&&b8.$1(c)!=null){a0=b8.$1(c)
a0.toString
n=A.R(a0,!1,b1)
a3=q-n.length-1
b2.k(a3,a,"$",a2?B.k:B.j)
a0=a2?B.h:B.j
b2.k(a3+1,a,n,a0)
a4=a3}else a4=q
a5=c.gao().a
a0=b+2
a6=a4-a0
if(a5.length>a6)a5=B.i.aM(a5,0,a6)
A:{a1=c===b9
if(a1){a7=B.h
break A}if(b5&&b4.$1(c)){a7=B.C
break A}if(b5){a7=B.j
break A}a7=B.d
break A}a8=c===b7
a9=a8?B.i.ff(a5,a6):a5
b2.cw(a0,a,a9,a7,a8?B.t:b1)
if(a1){b0=new A.kC(c,A.x2(c,34))
b0.lM(c3,c,!1)
if(c0)if(i>b2.ga0()){b2.k(q,a,"\u25bc",B.h)
b0.hu(c2+B.c.A(h,2),f,b2)}else{b2.k(q,a,"\u25ba",B.h)
b0.hu(r,a,b2)}else{b2.k(c2,a,"\u25c4",B.h)
b0.hu(j,a,b2)}}++e}},
Bc(a){return!1},
Bd(a){return a.gbg()},
wX(){return A.a2(A.a2(v.G.document).createElement("canvas"))}},B={}
var w=[A,J,B]
var $={}
A.v2.prototype={}
J.kz.prototype={
Y(a,b){return a===b},
ga2(a){return A.hN(a)},
t(a){return"Instance of '"+A.li(a)+"'"},
gaJ(a){return A.ek(A.vw(this))}}
J.hm.prototype={
t(a){return String(a)},
ga2(a){return a?519018:218159},
gaJ(a){return A.ek(t.y)},
$iaj:1,
$iz:1}
J.ho.prototype={
Y(a,b){return null==b},
t(a){return"null"},
ga2(a){return 0},
$iaj:1}
J.hr.prototype={$iaE:1}
J.dx.prototype={
ga2(a){return 0},
t(a){return String(a)}}
J.le.prototype={}
J.dD.prototype={}
J.dv.prototype={
t(a){var s=a[$.yG()]
if(s==null)s=a[$.uF()]
if(s==null)return this.lE(a)
return"JavaScript function for "+J.ew(s)},
$idX:1}
J.hq.prototype={
ga2(a){return 0},
t(a){return String(a)}}
J.hs.prototype={
ga2(a){return 0},
t(a){return String(a)}}
J.t.prototype={
j(a,b){A.N(a).c.a(b)
a.$flags&1&&A.bx(a,29)
a.push(b)},
cO(a,b){a.$flags&1&&A.bx(a,"removeAt",1)
if(b<0||b>=a.length)throw A.m(A.hP(b,null))
return a.splice(b,1)[0]},
kZ(a){a.$flags&1&&A.bx(a,"removeLast",1)
if(a.length===0)throw A.m(A.nm(a,-1))
return a.pop()},
ah(a,b){var s
a.$flags&1&&A.bx(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a9(a[s],b)){a.splice(s,1)
return!0}return!1},
hT(a,b){A.N(a).i("z(1)").a(b)
a.$flags&1&&A.bx(a,16)
this.nG(a,b,!0)},
nG(a,b,c){var s,r,q,p,o
A.N(a).i("z(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!b.$1(p))s.push(p)
if(a.length!==r)throw A.m(A.aQ(a))}o=s.length
if(o===r)return
this.sI(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
lg(a,b){var s=A.N(a)
return new A.ap(a,s.i("z(1)").a(b),s.i("ap<1>"))},
T(a,b){var s
A.N(a).i("k<1>").a(b)
a.$flags&1&&A.bx(a,"addAll",2)
if(Array.isArray(b)){this.lT(a,b)
return}for(s=J.aw(b);s.q();)a.push(s.gH())},
lT(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.m(A.aQ(a))
for(r=0;r<s;++r)a.push(b[r])},
aP(a){a.$flags&1&&A.bx(a,"clear","clear")
a.length=0},
ae(a,b){var s,r
A.N(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.m(A.aQ(a))}},
cL(a,b,c){var s=A.N(a)
return new A.au(a,s.af(c).i("1(2)").a(b),s.i("@<1>").af(c).i("au<1,2>"))},
aG(a,b){var s,r=A.an(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.h(r,s,A.J(a[s]))
return r.join(b)},
av(a,b,c,d){var s,r,q
d.a(b)
A.N(a).af(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.m(A.aQ(a))}return r},
hB(a,b,c){var s,r,q
A.N(a).i("z(1)").a(b)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.m(A.aQ(a))}throw A.m(A.cu())},
f2(a,b){return this.hB(a,b,null)},
aX(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
fC(a,b,c){var s=a.length
if(b>s)throw A.m(A.cx(b,0,s,"start",null))
if(c==null)c=s
else if(c<b||c>s)throw A.m(A.cx(c,b,s,"end",null))
if(b===c)return A.a([],A.N(a))
return A.a(a.slice(b,c),A.N(a))},
lC(a,b){return this.fC(a,b,null)},
gaB(a){if(a.length>0)return a[0]
throw A.m(A.cu())},
gcp(a){var s=a.length
if(s>0)return a[s-1]
throw A.m(A.cu())},
glx(a){var s=a.length
if(s===1){if(0>=s)return A.b(a,0)
return a[0]}if(s===0)throw A.m(A.cu())
throw A.m(A.zT())},
ic(a,b,c,d,e){var s,r,q,p
A.N(a).i("k<1>").a(d)
a.$flags&2&&A.bx(a,5)
A.va(b,c,a.length)
s=c-b
if(s===0)return
A.hQ(e,"skipCount")
r=d
q=J.fJ(r)
if(e+s>q.gI(r))throw A.m(A.zS())
if(e<b)for(p=s-1;p>=0;--p)a[b+p]=q.m(r,e+p)
else for(p=0;p<s;++p)a[b+p]=q.m(r,e+p)},
pf(a,b,c,d){var s
A.N(a).i("1?").a(d)
a.$flags&2&&A.bx(a,"fillRange")
A.va(b,c,a.length)
for(s=b;s<c;++s)a[s]=d},
cH(a,b){var s,r
A.N(a).i("z(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.m(A.aQ(a))}return!1},
pc(a,b){var s,r
A.N(a).i("z(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.m(A.aQ(a))}return!0},
dq(a,b){var s,r,q,p,o,n=A.N(a)
n.i("d(1,1)?").a(b)
a.$flags&2&&A.bx(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Bt()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.bi()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.fG(b,2))
if(p>0)this.nM(a,p)},
fv(a){return this.dq(a,null)},
nM(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bM(a,b){var s,r,q,p
a.$flags&2&&A.bx(a,"shuffle")
s=a.length
while(s>1){r=b.a5(s);--s
q=a.length
if(!(s<q))return A.b(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.b(a,r)
a[s]=a[r]
a[r]=p}},
c8(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.a9(a[s],b))return s}return-1},
G(a,b){var s
for(s=0;s<a.length;++s)if(J.a9(a[s],b))return!0
return!1},
gkt(a){return a.length!==0},
t(a){return A.pJ(a,"[","]")},
cR(a,b){var s=A.a(a.slice(0),A.N(a))
return s},
ec(a){return this.cR(a,!0)},
gL(a){return new J.aX(a,a.length,A.N(a).i("aX<1>"))},
ga2(a){return A.hN(a)},
gI(a){return a.length},
sI(a,b){a.$flags&1&&A.bx(a,"set length","change the length of")
if(b<0)throw A.m(A.cx(b,0,null,"newLength",null))
if(b>a.length)A.N(a).c.a(null)
a.length=b},
m(a,b){A.r(b)
if(!(b>=0&&b<a.length))throw A.m(A.nm(a,b))
return a[b]},
h(a,b,c){A.N(a).c.a(c)
a.$flags&2&&A.bx(a)
if(!(b>=0&&b<a.length))throw A.m(A.nm(a,b))
a[b]=c},
hE(a,b){var s
A.N(a).i("z(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
pt(a,b){var s,r
A.N(a).i("z(1)").a(b)
s=a.length-1
if(s<0)return-1
for(r=s;r>=0;--r){if(!(r<a.length))return A.b(a,r)
if(b.$1(a[r]))return r}return-1},
$iM:1,
$ik:1,
$iD:1}
J.kE.prototype={
pW(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.li(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.pK.prototype={}
J.aX.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.o(q)
throw A.m(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ia4:1}
J.e_.prototype={
am(a,b){var s
A.ei(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gf9(b)
if(this.gf9(a)===s)return 0
if(this.gf9(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gf9(a){return a===0?1/a<0:a<0},
N(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.m(A.cA(""+a+".toInt()"))},
aV(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.m(A.cA(""+a+".ceil()"))},
bQ(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.m(A.cA(""+a+".floor()"))},
P(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.m(A.cA(""+a+".round()"))},
M(a,b,c){if(B.c.am(b,c)>0)throw A.m(A.iZ(b))
if(this.am(a,b)<0)return b
if(this.am(a,c)>0)return c
return a},
i2(a,b){var s
if(b>20)throw A.m(A.cx(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gf9(a))return"-"+s
return s},
t(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga2(a){var s,r,q,p,o=a|0
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
c_(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.jz(a,b)},
A(a,b){return(a|0)===a?a/b|0:this.jz(a,b)},
jz(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.m(A.cA("Result of truncating division is "+A.J(s)+": "+A.J(a)+" ~/ "+b))},
eK(a,b){var s
if(a>0)s=this.nZ(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
nZ(a,b){return b>31?0:a>>>b},
gaJ(a){return A.ek(t.cZ)},
$iaB:1,
$iE:1,
$iaq:1}
J.hn.prototype={
gii(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
gaJ(a){return A.ek(t.S)},
$iaj:1,
$id:1}
J.kF.prototype={
gaJ(a){return A.ek(t.i)},
$iaj:1}
J.du.prototype={
hl(a,b){return new A.n7(b,a,0)},
dW(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.cY(a,r-s)},
io(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
aM(a,b,c){return a.substring(b,A.va(b,c,a.length))},
cY(a,b){return this.aM(a,b,null)},
l9(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.b(p,0)
if(p.charCodeAt(0)===133){s=J.zX(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.b(p,r)
q=p.charCodeAt(r)===133?J.zY(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
aL(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.m(B.cW)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
pB(a,b,c){var s=b-a.length
if(s<=0)return a
return this.aL(c,s)+a},
dg(a,b){return this.pB(a,b," ")},
ff(a,b){var s=b-a.length
if(s<=0)return a
return a+this.aL(" ",s)},
c8(a,b){var s=a.indexOf(b,0)
return s},
G(a,b){return A.CO(a,b,0)},
am(a,b){var s
A.a3(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
t(a){return a},
ga2(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gaJ(a){return A.ek(t.N)},
gI(a){return a.length},
$iaj:1,
$iaB:1,
$iqB:1,
$iq:1}
A.dw.prototype={
t(a){return"LateInitializationError: "+this.a}}
A.dp.prototype={
gI(a){return this.a.length},
m(a,b){var s
A.r(b)
s=this.a
if(!(b>=0&&b<s.length))return A.b(s,b)
return s.charCodeAt(b)}}
A.r5.prototype={}
A.M.prototype={}
A.aI.prototype={
gL(a){var s=this
return new A.ca(s,s.gI(s),A.y(s).i("ca<aI.E>"))},
gaq(a){return this.gI(this)===0},
aG(a,b){var s,r,q,p=this,o=p.gI(p)
if(b.length!==0){if(o===0)return""
s=A.J(p.aX(0,0))
if(o!==p.gI(p))throw A.m(A.aQ(p))
for(r=s,q=1;q<o;++q){r=r+b+A.J(p.aX(0,q))
if(o!==p.gI(p))throw A.m(A.aQ(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.J(p.aX(0,q))
if(o!==p.gI(p))throw A.m(A.aQ(p))}return r.charCodeAt(0)==0?r:r}},
cL(a,b,c){var s=A.y(this)
return new A.au(this,s.af(c).i("1(aI.E)").a(b),s.i("@<aI.E>").af(c).i("au<1,2>"))},
cR(a,b){var s=A.a6(this,A.y(this).i("aI.E"))
return s},
ec(a){return this.cR(0,!0)}}
A.i8.prototype={
gmC(){var s=J.dP(this.a),r=this.c
if(r==null||r>s)return s
return r},
go0(){var s=J.dP(this.a),r=this.b
if(r>s)return s
return r},
gI(a){var s,r=J.dP(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
aX(a,b){var s=this,r=s.go0()+b
if(b<0||r>=s.gmC())throw A.m(A.p5(b,s.gI(0),s,null,"index"))
return J.uS(s.a,r)}}
A.ca.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=J.fJ(q),o=p.gI(q)
if(r.b!==o)throw A.m(A.aQ(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.aX(q,s);++r.c
return!0},
$ia4:1}
A.cV.prototype={
gL(a){return new A.bs(J.aw(this.a),this.b,A.y(this).i("bs<1,2>"))},
gI(a){return J.dP(this.a)}}
A.cN.prototype={$iM:1}
A.bs.prototype={
q(){var s=this,r=s.b
if(r.q()){s.a=s.c.$1(r.gH())
return!0}s.a=null
return!1},
gH(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ia4:1}
A.au.prototype={
gI(a){return J.dP(this.a)},
aX(a,b){return this.b.$1(J.uS(this.a,b))}}
A.ap.prototype={
gL(a){return new A.d6(J.aw(this.a),this.b,this.$ti.i("d6<1>"))},
cL(a,b,c){var s=this.$ti
return new A.cV(this,s.af(c).i("1(2)").a(b),s.i("@<1>").af(c).i("cV<1,2>"))}}
A.d6.prototype={
q(){var s,r
for(s=this.a,r=this.b;s.q();)if(r.$1(s.gH()))return!0
return!1},
gH(){return this.a.gH()},
$ia4:1}
A.e9.prototype={
gL(a){var s=this.a
return new A.i9(s.gL(s),this.b,A.y(this).i("i9<1>"))}}
A.h8.prototype={
gI(a){var s=this.a,r=s.gI(s)
s=this.b
if(r>s)return s
return r},
$iM:1}
A.i9.prototype={
q(){if(--this.b>=0)return this.a.q()
this.b=-1
return!1},
gH(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gH()},
$ia4:1}
A.ia.prototype={
gL(a){return new A.ib(J.aw(this.a),this.b,this.$ti.i("ib<1>"))}}
A.ib.prototype={
q(){var s,r=this
if(r.c)return!1
s=r.a
if(!s.q()||!r.b.$1(s.gH())){r.c=!0
return!1}return!0},
gH(){if(this.c){this.$ti.c.a(null)
return null}return this.a.gH()},
$ia4:1}
A.ii.prototype={
gL(a){return new A.bu(J.aw(this.a),this.$ti.i("bu<1>"))}}
A.bu.prototype={
q(){var s,r
for(s=this.a,r=this.$ti.c;s.q();)if(r.b(s.gH()))return!0
return!1},
gH(){return this.$ti.c.a(this.a.gH())},
$ia4:1}
A.aH.prototype={
sI(a,b){throw A.m(A.cA("Cannot change the length of a fixed-length list"))},
j(a,b){A.ch(a).i("aH.E").a(b)
throw A.m(A.cA("Cannot add to a fixed-length list"))}}
A.dE.prototype={
h(a,b,c){A.y(this).i("dE.E").a(c)
throw A.m(A.cA("Cannot modify an unmodifiable list"))},
sI(a,b){throw A.m(A.cA("Cannot change the length of an unmodifiable list"))},
j(a,b){A.y(this).i("dE.E").a(b)
throw A.m(A.cA("Cannot add to an unmodifiable list"))}}
A.fp.prototype={}
A.cY.prototype={
gI(a){return J.dP(this.a)},
aX(a,b){var s=this.a,r=J.fJ(s)
return r.aX(s,r.gI(s)-1-b)}}
A.O.prototype={$r:"+(1,2)",$s:1}
A.K.prototype={$r:"+(1,2,3)",$s:2}
A.X.prototype={$r:"+(1,2,3,4)",$s:3}
A.eF.prototype={
gaq(a){return this.gI(this)===0},
t(a){return A.v5(this)},
gf0(){return new A.S(this.pb(),A.y(this).i("S<aS<1,2>>"))},
pb(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gf0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gaT(),o=o.gL(o),n=A.y(s),m=n.y[1],n=n.i("aS<1,2>")
case 2:if(!o.q()){r=3
break}l=o.gH()
k=s.m(0,l)
r=4
return a.b=new A.aS(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
$ibg:1}
A.bk.prototype={
gI(a){return this.b.length},
gj5(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
ak(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
m(a,b){if(!this.ak(b))return null
return this.b[this.a[b]]},
ae(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gj5()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gaT(){return new A.iA(this.gj5(),this.$ti.i("iA<1>"))}}
A.iA.prototype={
gI(a){return this.a.length},
gL(a){var s=this.a
return new A.iB(s,s.length,this.$ti.i("iB<1>"))}}
A.iB.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$ia4:1}
A.dZ.prototype={
dC(){var s=this,r=s.$map
if(r==null){r=new A.ht(s.$ti.i("ht<1,2>"))
A.yh(s.a,r)
s.$map=r}return r},
ak(a){return this.dC().ak(a)},
m(a,b){return this.dC().m(0,b)},
ae(a,b){this.$ti.i("~(1,2)").a(b)
this.dC().ae(0,b)},
gaT(){var s=this.dC()
return new A.b6(s,A.y(s).i("b6<1>"))},
gI(a){return this.dC().a}}
A.qE.prototype={
$0(){return B.e.bQ(1000*this.a.now())},
$S:2}
A.hZ.prototype={}
A.t_.prototype={
bV(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.hJ.prototype={
t(a){return"Null check operator used on a null value"}}
A.kH.prototype={
t(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.lV.prototype={
t(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.qv.prototype={
t(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.iO.prototype={
t(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ifm:1}
A.dn.prototype={
t(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.yD(r==null?"unknown":r)+"'"},
$idX:1,
gq4(){return this},
$C:"$1",
$R:1,
$D:null}
A.jL.prototype={$C:"$0",$R:0}
A.jM.prototype={$C:"$2",$R:2}
A.lM.prototype={}
A.lI.prototype={
t(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.yD(s)+"'"}}
A.ez.prototype={
Y(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ez))return!1
return this.$_target===b.$_target&&this.a===b.a},
ga2(a){return(A.nn(this.a)^A.hN(this.$_target))>>>0},
t(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.li(this.a)+"'")}}
A.ly.prototype={
t(a){return"RuntimeError: "+this.a}}
A.c8.prototype={
gI(a){return this.a},
gaq(a){return this.a===0},
gaT(){return new A.b6(this,A.y(this).i("b6<1>"))},
gf0(){return new A.br(this,A.y(this).i("br<1,2>"))},
ak(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.po(a)},
po(a){var s=this.d
if(s==null)return!1
return this.e1(this.j_(s,a),a)>=0},
T(a,b){A.y(this).i("bg<1,2>").a(b).ae(0,new A.pL(this))},
m(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.pp(b)},
pp(a){var s,r,q=this.d
if(q==null)return null
s=this.j_(q,a)
r=this.e1(s,a)
if(r<0)return null
return s[r].b},
h(a,b,c){var s,r,q=this,p=A.y(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.iu(s==null?q.b=q.h3():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.iu(r==null?q.c=q.h3():r,b,c)}else q.pr(b,c)},
pr(a,b){var s,r,q,p,o=this,n=A.y(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.h3()
r=o.f8(a)
q=s[r]
if(q==null)s[r]=[o.h4(a,b)]
else{p=o.e1(q,a)
if(p>=0)q[p].b=b
else q.push(o.h4(a,b))}},
b8(a,b){var s,r,q=this,p=A.y(q)
p.c.a(a)
p.i("2()").a(b)
if(q.ak(a)){s=q.m(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.h(0,a,r)
return r},
ah(a,b){var s=this.pq(b)
return s},
pq(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.f8(a)
r=n[s]
q=o.e1(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.om(p)
if(r.length===0)delete n[s]
return p.b},
aP(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.h1()}},
ae(a,b){var s,r,q=this
A.y(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.m(A.aQ(q))
s=s.c}},
iu(a,b,c){var s,r=A.y(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.h4(b,c)
else s.b=c},
h1(){this.r=this.r+1&1073741823},
h4(a,b){var s=this,r=A.y(s),q=new A.pV(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.h1()
return q},
om(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.h1()},
f8(a){return J.cl(a)&1073741823},
j_(a,b){return a[this.f8(b)]},
e1(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1},
t(a){return A.v5(this)},
h3(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iv4:1}
A.pL.prototype={
$2(a,b){var s=this.a,r=A.y(s)
s.h(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.y(this.a).i("~(1,2)")}}
A.pV.prototype={}
A.b6.prototype={
gI(a){return this.a.a},
gaq(a){return this.a.a===0},
gL(a){var s=this.a
return new A.c9(s,s.r,s.e,this.$ti.i("c9<1>"))},
G(a,b){return this.a.ak(b)}}
A.c9.prototype={
gH(){return this.d},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.m(A.aQ(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ia4:1}
A.cT.prototype={
gI(a){return this.a.a},
gL(a){var s=this.a
return new A.cS(s,s.r,s.e,this.$ti.i("cS<1>"))}}
A.cS.prototype={
gH(){return this.d},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.m(A.aQ(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$ia4:1}
A.br.prototype={
gI(a){return this.a.a},
gL(a){var s=this.a
return new A.e1(s,s.r,s.e,this.$ti.i("e1<1,2>"))}}
A.e1.prototype={
gH(){var s=this.d
s.toString
return s},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.m(A.aQ(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.aS(s.a,s.b,r.$ti.i("aS<1,2>"))
r.c=s.c
return!0}},
$ia4:1}
A.ht.prototype={
f8(a){return A.Cb(a)&1073741823},
e1(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1}}
A.u8.prototype={
$1(a){return this.a(a)},
$S:36}
A.u9.prototype={
$2(a,b){return this.a(a,b)},
$S:124}
A.ua.prototype={
$1(a){return this.a(A.a3(a))},
$S:156}
A.c2.prototype={
t(a){return this.jB(!1)},
jB(a){var s,r,q,p,o,n=this.mG(),m=this.eA(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.xj(o):l+A.J(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
mG(){var s,r=this.$s
while($.tC.length<=r)B.a.j($.tC,null)
s=$.tC[r]
if(s==null){s=this.me()
B.a.h($.tC,r,s)}return s},
me(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.x3(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.h(j,q,r[s])}}j=A.A4(j,!1,k)
j.$flags=3
return j}}
A.fw.prototype={
eA(){return[this.a,this.b]},
Y(a,b){if(b==null)return!1
return b instanceof A.fw&&this.$s===b.$s&&J.a9(this.a,b.a)&&J.a9(this.b,b.b)},
ga2(a){return A.qx(this.$s,this.a,this.b,B.an)}}
A.fx.prototype={
eA(){return[this.a,this.b,this.c]},
Y(a,b){var s=this
if(b==null)return!1
return b instanceof A.fx&&s.$s===b.$s&&J.a9(s.a,b.a)&&J.a9(s.b,b.b)&&J.a9(s.c,b.c)},
ga2(a){var s=this
return A.qx(s.$s,s.a,s.b,s.c)}}
A.fy.prototype={
eA(){return this.a},
Y(a,b){if(b==null)return!1
return b instanceof A.fy&&this.$s===b.$s&&A.AU(this.a,b.a)},
ga2(a){return A.qx(this.$s,A.Ac(this.a),B.an,B.an)}}
A.hp.prototype={
t(a){return"RegExp/"+this.a+"/"+this.b.flags},
gjd(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.x7(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
ki(a){var s=this.b.exec(a)
if(s==null)return null
return new A.iC(s)},
hl(a,b){return new A.m5(this,b,0)},
mF(a,b){var s,r=this.gjd()
if(r==null)r=A.dc(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.iC(s)},
$iqB:1,
$iAq:1}
A.iC.prototype={
gim(){return this.b.index},
ghz(){var s=this.b
return s.index+s[0].length},
m(a,b){var s
A.r(b)
s=this.b
if(!(b<s.length))return A.b(s,b)
return s[b]},
$icv:1,
$ihS:1}
A.m5.prototype={
gL(a){return new A.ik(this.a,this.b,this.c)}}
A.ik.prototype={
gH(){var s=this.d
return s==null?t.lu.a(s):s},
q(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.mF(l,s)
if(p!=null){m.d=p
o=p.ghz()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.b(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.b(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$ia4:1}
A.lJ.prototype={
ghz(){return this.a+this.c.length},
m(a,b){A.r(b)
if(b!==0)throw A.m(A.hP(b,null))
return this.c},
$icv:1,
gim(){return this.a}}
A.n7.prototype={
gL(a){return new A.n8(this.a,this.b,this.c)}}
A.n8.prototype={
q(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.lJ(s,o)
q.c=r===q.c?r+1:r
return!0},
gH(){var s=this.d
s.toString
return s},
$ia4:1}
A.th.prototype={
h6(){var s=this.b
if(s===this)throw A.m(new A.dw("Local '' has not been initialized."))
return s},
u(){var s=this.b
if(s===this)throw A.m(A.e0(""))
return s}}
A.f1.prototype={
gaJ(a){return B.ki},
$iaj:1,
$iuW:1}
A.hE.prototype={}
A.l_.prototype={
gaJ(a){return B.kj},
$iaj:1,
$iuX:1}
A.f2.prototype={
gI(a){return a.length},
$ibQ:1}
A.hC.prototype={
m(a,b){A.r(b)
A.dd(b,a,a.length)
return a[b]},
h(a,b,c){A.bw(c)
a.$flags&2&&A.bx(a)
A.dd(b,a,a.length)
a[b]=c},
$iM:1,
$ik:1,
$iD:1}
A.hD.prototype={
h(a,b,c){A.r(c)
a.$flags&2&&A.bx(a)
A.dd(b,a,a.length)
a[b]=c},
$iM:1,
$ik:1,
$iD:1}
A.l0.prototype={
gaJ(a){return B.kk},
$iaj:1,
$ioI:1}
A.l1.prototype={
gaJ(a){return B.kl},
$iaj:1,
$ioJ:1}
A.l2.prototype={
gaJ(a){return B.km},
m(a,b){A.r(b)
A.dd(b,a,a.length)
return a[b]},
$iaj:1,
$ip6:1}
A.l3.prototype={
gaJ(a){return B.kn},
m(a,b){A.r(b)
A.dd(b,a,a.length)
return a[b]},
$iaj:1,
$ip7:1}
A.l4.prototype={
gaJ(a){return B.ko},
m(a,b){A.r(b)
A.dd(b,a,a.length)
return a[b]},
$iaj:1,
$ip8:1}
A.l5.prototype={
gaJ(a){return B.kq},
m(a,b){A.r(b)
A.dd(b,a,a.length)
return a[b]},
$iaj:1,
$it1:1}
A.l6.prototype={
gaJ(a){return B.kr},
m(a,b){A.r(b)
A.dd(b,a,a.length)
return a[b]},
$iaj:1,
$it2:1}
A.hF.prototype={
gaJ(a){return B.ks},
gI(a){return a.length},
m(a,b){A.r(b)
A.dd(b,a,a.length)
return a[b]},
$iaj:1,
$it3:1}
A.l7.prototype={
gaJ(a){return B.kt},
gI(a){return a.length},
m(a,b){A.r(b)
A.dd(b,a,a.length)
return a[b]},
$iaj:1,
$it4:1}
A.iD.prototype={}
A.iE.prototype={}
A.iF.prototype={}
A.iG.prototype={}
A.cc.prototype={
i(a){return A.iT(v.typeUniverse,this,a)},
af(a){return A.xO(v.typeUniverse,this,a)}}
A.mz.prototype={}
A.nc.prototype={
t(a){return A.bW(this.a,null)}}
A.mq.prototype={
t(a){return this.a}}
A.iP.prototype={$id4:1}
A.tb.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:37}
A.ta.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:155}
A.tc.prototype={
$0(){this.a.$0()},
$S:22}
A.td.prototype={
$0(){this.a.$0()},
$S:22}
A.tI.prototype={
lS(a,b){if(self.setTimeout!=null)self.setTimeout(A.fG(new A.tJ(this,b),0),a)
else throw A.m(A.cA("`setTimeout()` not found."))}}
A.tJ.prototype={
$0(){this.b.$0()},
$S:0}
A.ak.prototype={
gH(){var s=this.b
return s==null?this.$ti.c.a(s):s},
nO(a,b){var s,r,q
a=A.r(a)
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
o.d=null}q=o.nO(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.xI
return!1}if(0>=p.length)return A.b(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.xI
throw n
return!1}if(0>=p.length)return A.b(p,-1)
o.a=p.pop()
m=1
continue}throw A.m(A.ce("sync*"))}return!1},
aO(a){var s,r,q=this
if(a instanceof A.S){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.j(r,q.a)
q.a=s
return 2}else{q.d=J.aw(a)
return 2}},
$ia4:1}
A.S.prototype={
gL(a){return new A.ak(this.a(),this.$ti.i("ak<1>"))}}
A.cq.prototype={
t(a){return A.J(this.a)},
$iar:1,
gds(){return this.b}}
A.mk.prototype={
k5(a){var s=this.a
if((s.a&30)!==0)throw A.m(A.ce("Future already completed"))
s.iz(A.Bs(a,null))}}
A.im.prototype={}
A.iu.prototype={
pw(a){if((this.c&15)!==6)return!0
return this.b.b.hW(t.iW.a(this.d),a.a,t.y,t.K)},
pk(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.pN(q,m,a.b,o,n,t.gl)
else p=l.hW(t.mq.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.do.b(A.dI(s))){if((r.c&1)!==0)throw A.m(A.aF("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.m(A.aF("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.bH.prototype={
pT(a,b,c){var s,r,q=this.$ti
q.af(c).i("1/(2)").a(a)
s=$.aV
if(s===B.a8){if(!t.ng.b(b)&&!t.mq.b(b))throw A.m(A.uT(b,"onError",u.c))}else{c.i("@<0/>").af(q.c).i("1(2)").a(a)
b=A.BS(b,s)}r=new A.bH(s,c.i("bH<0>"))
this.iv(new A.iu(r,3,a,b,q.i("@<1>").af(c).i("iu<1,2>")))
return r},
nW(a){this.a=this.a&1|16
this.c=a},
eu(a){this.a=a.a&30|this.a&1
this.c=a.c},
iv(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.j_.a(r.c)
if((s.a&24)===0){s.iv(a)
return}r.eu(s)}A.nk(null,null,r.b,t.O.a(new A.tl(r,a)))}},
jk(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.j_.a(m.c)
if((n.a&24)===0){n.jk(a)
return}m.eu(n)}l.a=m.eI(a)
A.nk(null,null,m.b,t.O.a(new A.tp(l,m)))}},
dG(){var s=t.F.a(this.c)
this.c=null
return this.eI(s)},
eI(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
md(a){var s,r=this
r.$ti.c.a(a)
s=r.dG()
r.a=8
r.c=a
A.ee(r,s)},
mc(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.dG()
q.eu(a)
A.ee(q,r)},
iL(a){var s=this.dG()
this.nW(a)
A.ee(this,s)},
lW(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("eS<1>").b(a)){this.m6(a)
return}this.lX(a)},
lX(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.nk(null,null,s.b,t.O.a(new A.tn(s,a)))},
m6(a){A.vk(this.$ti.i("eS<1>").a(a),this,!1)
return},
iz(a){this.a^=2
A.nk(null,null,this.b,t.O.a(new A.tm(this,a)))},
$ieS:1}
A.tl.prototype={
$0(){A.ee(this.a,this.b)},
$S:0}
A.tp.prototype={
$0(){A.ee(this.b,this.a.a)},
$S:0}
A.to.prototype={
$0(){A.vk(this.a.a,this.b,!0)},
$S:0}
A.tn.prototype={
$0(){this.a.md(this.b)},
$S:0}
A.tm.prototype={
$0(){this.a.iL(this.b)},
$S:0}
A.ts.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.pM(t.df.a(q.d),t.z)}catch(p){s=A.dI(p)
r=A.en(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.uU(q)
n=k.a
n.c=new A.cq(q,o)
q=n}q.b=!0
return}if(j instanceof A.bH&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.bH){m=k.b.a
l=new A.bH(m.b,m.$ti)
j.pT(new A.tt(l,m),new A.tu(l),t.ef)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.tt.prototype={
$1(a){this.a.mc(this.b)},
$S:37}
A.tu.prototype={
$2(a,b){A.dc(a)
t.gl.a(b)
this.a.iL(new A.cq(a,b))},
$S:154}
A.tr.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.hW(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.dI(l)
r=A.en(l)
q=s
p=r
if(p==null)p=A.uU(q)
o=this.a
o.c=new A.cq(q,p)
o.b=!0}},
$S:0}
A.tq.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.pw(s)&&p.a.e!=null){p.c=p.a.pk(s)
p.b=!1}}catch(o){r=A.dI(o)
q=A.en(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.uU(p)
m=l.b
m.c=new A.cq(p,n)
p=m}p.b=!0}},
$S:0}
A.m8.prototype={}
A.i5.prototype={
gI(a){var s,r,q=this,p={},o=new A.bH($.aV,t.h0)
p.a=0
s=q.$ti
r=s.i("~(1)?").a(new A.rI(p,q))
t.c5.a(new A.rJ(p,o))
A.ft(q.a,q.b,r,!1,s.c)
return o}}
A.rI.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.rJ.prototype={
$0(){var s=this.b,r=s.$ti,q=r.i("1/").a(this.a.a),p=s.dG()
r.c.a(q)
s.a=8
s.c=q
A.ee(s,p)},
$S:0}
A.iU.prototype={$ixA:1}
A.n_.prototype={
pO(a){var s,r,q
t.O.a(a)
try{if(B.a8===$.aV){a.$0()
return}A.y6(null,null,this,a,t.ef)}catch(q){s=A.dI(q)
r=A.en(q)
A.tX(A.dc(s),t.gl.a(r))}},
pP(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.a8===$.aV){a.$1(b)
return}A.y7(null,null,this,a,b,t.ef,c)}catch(q){s=A.dI(q)
r=A.en(q)
A.tX(A.dc(s),t.gl.a(r))}},
oF(a){return new A.tE(this,t.O.a(a))},
oG(a,b){return new A.tF(this,b.i("~(0)").a(a),b)},
pM(a,b){b.i("0()").a(a)
if($.aV===B.a8)return a.$0()
return A.y6(null,null,this,a,b)},
hW(a,b,c,d){c.i("@<0>").af(d).i("1(2)").a(a)
d.a(b)
if($.aV===B.a8)return a.$1(b)
return A.y7(null,null,this,a,b,c,d)},
pN(a,b,c,d,e,f){d.i("@<0>").af(e).af(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.aV===B.a8)return a.$2(b,c)
return A.BT(null,null,this,a,b,c,d,e,f)}}
A.tE.prototype={
$0(){return this.a.pO(this.b)},
$S:0}
A.tF.prototype={
$1(a){var s=this.c
return this.a.pP(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.tY.prototype={
$0(){A.zK(this.a,this.b)},
$S:0}
A.iw.prototype={
gI(a){return this.a},
gaq(a){return this.a===0},
gaT(){return new A.ix(this,this.$ti.i("ix<1>"))},
ak(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.mg(a)},
mg(a){var s=this.d
if(s==null)return!1
return this.cD(this.iI(s,a),a)>=0},
m(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.xD(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.xD(q,b)
return r}else return this.mU(b)},
mU(a){var s,r,q=this.d
if(q==null)return null
s=this.iI(q,a)
r=this.cD(s,a)
return r<0?null:s[r+1]},
h(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.iH(s==null?m.b=A.vl():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.iH(r==null?m.c=A.vl():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.vl()
p=A.nn(b)&1073741823
o=q[p]
if(o==null){A.vm(q,p,[b,c]);++m.a
m.e=null}else{n=m.cD(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
ae(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.iM()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.m(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.m(A.aQ(m))}},
iM(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.an(i.a,null,!1,t.z)
s=i.b
r=0
if(s!=null){q=Object.getOwnPropertyNames(s)
p=q.length
for(o=0;o<p;++o){h[r]=q[o];++r}}n=i.c
if(n!=null){q=Object.getOwnPropertyNames(n)
p=q.length
for(o=0;o<p;++o){h[r]=+q[o];++r}}m=i.d
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(o=0;o<p;++o){l=m[q[o]]
k=l.length
for(j=0;j<k;j+=2){h[r]=l[j];++r}}}return i.e=h},
iH(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.vm(a,b,c)},
iI(a,b){return a[A.nn(b)&1073741823]}}
A.fu.prototype={
cD(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.ix.prototype={
gI(a){return this.a.a},
gaq(a){return this.a.a===0},
gL(a){var s=this.a
return new A.iy(s,s.iM(),this.$ti.i("iy<1>"))},
G(a,b){return this.a.ak(b)}}
A.iy.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.m(A.aQ(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$ia4:1}
A.d8.prototype={
nv(){return new A.d8(A.y(this).i("d8<1>"))},
gL(a){var s=this,r=new A.d9(s,s.r,A.y(s).i("d9<1>"))
r.c=s.e
return r},
gI(a){return this.a},
G(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.nF.a(r[b])!=null}else return this.mf(b)},
mf(a){var s=this.d
if(s==null)return!1
return this.cD(s[this.fP(a)],a)>=0},
ae(a,b){var s,r,q=this,p=A.y(q)
p.i("~(1)").a(b)
s=q.e
r=q.r
for(p=p.c;s!=null;){b.$1(p.a(s.a))
if(r!==q.r)throw A.m(A.aQ(q))
s=s.b}},
gaB(a){var s=this.e
if(s==null)throw A.m(A.ce("No elements"))
return A.y(this).c.a(s.a)},
j(a,b){var s,r,q=this
A.y(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.iG(s==null?q.b=A.vo():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.iG(r==null?q.c=A.vo():r,b)}else return q.bk(b)},
bk(a){var s,r,q,p=this
A.y(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.vo()
r=p.fP(a)
q=s[r]
if(q==null)s[r]=[p.fO(a)]
else{if(p.cD(q,a)>=0)return!1
q.push(p.fO(a))}return!0},
ah(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.jp(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.jp(s.c,b)
else return s.nF(b)},
nF(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.fP(a)
r=n[s]
q=o.cD(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.iK(p)
return!0},
mI(a,b){var s,r,q,p,o,n=this,m=A.y(n)
m.i("z(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.m(A.aQ(n))
if(!0===o)n.ah(0,r)}},
iG(a,b){A.y(this).c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.fO(b)
return!0},
jp(a,b){var s
if(a==null)return!1
s=t.nF.a(a[b])
if(s==null)return!1
this.iK(s)
delete a[b]
return!0},
iJ(){this.r=this.r+1&1073741823},
fO(a){var s,r=this,q=new A.mO(A.y(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.iJ()
return q},
iK(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.iJ()},
fP(a){return J.cl(a)&1073741823},
cD(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1}}
A.mO.prototype={}
A.d9.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.m(A.aQ(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$ia4:1}
A.Z.prototype={
gL(a){return new A.ca(a,this.gI(a),A.ch(a).i("ca<Z.E>"))},
aX(a,b){return this.m(a,b)},
gkt(a){return this.gI(a)!==0},
lg(a,b){var s=A.ch(a)
return new A.ap(a,s.i("z(Z.E)").a(b),s.i("ap<Z.E>"))},
cL(a,b,c){var s=A.ch(a)
return new A.au(a,s.af(c).i("1(Z.E)").a(b),s.i("@<Z.E>").af(c).i("au<1,2>"))},
cR(a,b){var s,r,q,p,o=this
if(o.gI(a)===0){s=J.x5(0,A.ch(a).i("Z.E"))
return s}r=o.m(a,0)
q=A.an(o.gI(a),r,!0,A.ch(a).i("Z.E"))
for(p=1;p<o.gI(a);++p)B.a.h(q,p,o.m(a,p))
return q},
ec(a){return this.cR(a,!0)},
j(a,b){var s
A.ch(a).i("Z.E").a(b)
s=this.gI(a)
this.sI(a,s+1)
this.h(a,s,b)},
t(a){return A.pJ(a,"[","]")},
$iM:1,
$ik:1,
$iD:1}
A.ao.prototype={
ae(a,b){var s,r,q,p=A.y(this)
p.i("~(ao.K,ao.V)").a(b)
for(s=this.gaT(),s=s.gL(s),p=p.i("ao.V");s.q();){r=s.gH()
q=this.m(0,r)
b.$2(r,q==null?p.a(q):q)}},
gf0(){return this.gaT().cL(0,new A.q7(this),A.y(this).i("aS<ao.K,ao.V>"))},
ak(a){return this.gaT().G(0,a)},
gI(a){var s=this.gaT()
return s.gI(s)},
gaq(a){var s=this.gaT()
return s.gaq(s)},
t(a){return A.v5(this)},
$ibg:1}
A.q7.prototype={
$1(a){var s=this.a,r=A.y(s)
r.i("ao.K").a(a)
s=s.m(0,a)
if(s==null)s=r.i("ao.V").a(s)
return new A.aS(a,s,r.i("aS<ao.K,ao.V>"))},
$S(){return A.y(this.a).i("aS<ao.K,ao.V>(ao.K)")}}
A.q8.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.J(a)
r.a=(r.a+=s)+": "
s=A.J(b)
r.a+=s},
$S:42}
A.hv.prototype={
gL(a){var s=this
return new A.eg(s,s.c,s.d,s.b,s.$ti.i("eg<1>"))},
gaq(a){return this.b===this.c},
gI(a){return(this.c-this.b&this.a.length-1)>>>0},
aX(a,b){var s,r,q=this,p=q.gI(0)
if(0>b||b>=p)A.a_(A.p5(b,p,q,null,"index"))
p=q.a
s=p.length
r=(q.b+b&s-1)>>>0
if(!(r>=0&&r<s))return A.b(p,r)
r=p[r]
return r==null?q.$ti.c.a(r):r},
t(a){return A.pJ(this,"{","}")},
cP(){var s,r,q=this,p=q.b
if(p===q.c)throw A.m(A.cu());++q.d
s=q.a
if(!(p<s.length))return A.b(s,p)
r=s[p]
if(r==null)r=q.$ti.c.a(r)
B.a.h(s,p,null)
q.b=(q.b+1&q.a.length-1)>>>0
return r},
bk(a){var s,r=this
r.$ti.c.a(a)
B.a.h(r.a,r.c,a)
s=(r.c+1&r.a.length-1)>>>0
r.c=s
if(r.b===s)r.j0();++r.d},
j0(){var s=this,r=A.an(s.a.length*2,null,!1,s.$ti.i("1?")),q=s.a,p=s.b,o=q.length-p
B.a.ic(r,0,o,q,p)
B.a.ic(r,o,o+s.b,s.a,0)
s.b=0
s.c=s.a.length
s.a=r},
$ifb:1}
A.eg.prototype={
gH(){var s=this.e
return s==null?this.$ti.c.a(s):s},
q(){var s,r,q=this,p=q.a
if(q.c!==p.d)A.a_(A.aQ(p))
s=q.d
if(s===q.b){q.e=null
return!1}p=p.a
r=p.length
if(!(s<r))return A.b(p,s)
q.e=p[s]
q.d=(s+1&r-1)>>>0
return!0},
$ia4:1}
A.fk.prototype={
T(a,b){var s
for(s=J.aw(A.y(this).i("k<1>").a(b));s.q();)this.j(0,s.gH())},
cL(a,b,c){var s=A.y(this)
return new A.cN(this,s.af(c).i("1(2)").a(b),s.i("@<1>").af(c).i("cN<1,2>"))},
t(a){return A.pJ(this,"{","}")},
aG(a,b){var s,r,q,p,o=A.vn(this,this.r,A.y(this).c)
if(!o.q())return""
s=o.d
r=J.ew(s==null?o.$ti.c.a(s):s)
if(!o.q())return r
s=o.$ti.c
if(b.length===0){q=r
do{p=o.d
q+=A.J(p==null?s.a(p):p)}while(o.q())
s=q}else{q=r
do{p=o.d
q=q+b+A.J(p==null?s.a(p):p)}while(o.q())
s=q}return s.charCodeAt(0)==0?s:s},
$iM:1,
$ik:1,
$ii1:1}
A.iL.prototype={}
A.mJ.prototype={
m(a,b){var s,r=this.b
if(r==null)return this.c.m(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.mh(b):s}},
gI(a){return this.b==null?this.c.a:this.ev().length},
gaq(a){return this.gI(0)===0},
gaT(){if(this.b==null){var s=this.c
return new A.b6(s,A.y(s).i("b6<1>"))}return new A.mK(this)},
ak(a){if(this.b==null)return this.c.ak(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
ae(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.ae(0,b)
s=o.ev()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.tQ(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.m(A.aQ(o))}},
ev(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.a(Object.keys(this.a),t.s)
return s},
mh(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.tQ(this.a[a])
return this.b[a]=s}}
A.mK.prototype={
gI(a){return this.a.gI(0)},
aX(a,b){var s=this.a
if(s.b==null)s=s.gaT().aX(0,b)
else{s=s.ev()
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]}return s},
gL(a){var s=this.a
if(s.b==null){s=s.gaT()
s=s.gL(s)}else{s=s.ev()
s=new J.aX(s,s.length,A.N(s).i("aX<1>"))}return s},
G(a,b){return this.a.ak(b)}}
A.jP.prototype={}
A.jR.prototype={}
A.hu.prototype={
t(a){var s=A.k3(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.kJ.prototype={
t(a){return"Cyclic error in JSON stringify"}}
A.kI.prototype={
oZ(a){var s=A.BQ(a,this.gp_().a)
return s},
kd(a){var s=A.AL(a,this.gpa().b,null)
return s},
gpa(){return B.hN},
gp_(){return B.hM}}
A.pN.prototype={}
A.pM.prototype={}
A.tx.prototype={
lj(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.i.aM(a,r,q)
r=q+1
o=A.aU(92)
s.a+=o
o=A.aU(117)
s.a+=o
o=A.aU(100)
s.a+=o
o=p>>>8&15
o=A.aU(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.aU(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.aU(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.i.aM(a,r,q)
r=q+1
o=A.aU(92)
s.a+=o
switch(p){case 8:o=A.aU(98)
s.a+=o
break
case 9:o=A.aU(116)
s.a+=o
break
case 10:o=A.aU(110)
s.a+=o
break
case 12:o=A.aU(102)
s.a+=o
break
case 13:o=A.aU(114)
s.a+=o
break
default:o=A.aU(117)
s.a+=o
o=A.aU(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.aU(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.aU(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.i.aM(a,r,q)
r=q+1
o=A.aU(92)
s.a+=o
o=A.aU(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.i.aM(a,r,m)},
fN(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.m(new A.kJ(a,null))}B.a.j(s,a)},
fq(a){var s,r,q,p,o=this
if(o.li(a))return
o.fN(a)
try{s=o.b.$1(a)
if(!o.li(s)){q=A.x8(a,null,o.gjg())
throw A.m(q)}q=o.a
if(0>=q.length)return A.b(q,-1)
q.pop()}catch(p){r=A.dI(p)
q=A.x8(a,r,o.gjg())
throw A.m(q)}},
li(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.e.t(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.lj(a)
s.a+='"'
return!0}else if(t.gs.b(a)){q.fN(a)
q.q1(a)
s=q.a
if(0>=s.length)return A.b(s,-1)
s.pop()
return!0}else if(t.av.b(a)){q.fN(a)
r=q.q2(a)
s=q.a
if(0>=s.length)return A.b(s,-1)
s.pop()
return r}else return!1},
q1(a){var s,r,q=this.c
q.a+="["
s=J.fJ(a)
if(s.gkt(a)){this.fq(s.m(a,0))
for(r=1;r<s.gI(a);++r){q.a+=","
this.fq(s.m(a,r))}}q.a+="]"},
q2(a){var s,r,q,p,o,n,m=this,l={}
if(a.gaq(a)){m.c.a+="{}"
return!0}s=a.gI(a)*2
r=A.an(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.ae(0,new A.ty(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.lj(A.a3(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.b(r,n)
m.fq(r[n])}p.a+="}"
return!0}}
A.ty.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.h(s,r.a++,a)
B.a.h(s,r.a++,b)},
$S:42}
A.tw.prototype={
gjg(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.dT.prototype={
Y(a,b){if(b==null)return!1
return b instanceof A.dT&&this.a===b.a&&this.b===b.b&&this.c===b.c},
ga2(a){return A.qx(this.a,this.b,B.an,B.an)},
am(a,b){var s
t.cs.a(b)
s=B.c.am(this.a,b.a)
if(s!==0)return s
return B.c.am(this.b,b.b)},
t(a){var s=this,r=A.zF(A.Ak(s)),q=A.jU(A.Ai(s)),p=A.jU(A.Ae(s)),o=A.jU(A.Af(s)),n=A.jU(A.Ah(s)),m=A.jU(A.Aj(s)),l=A.wM(A.Ag(s)),k=s.b,j=k===0?"":A.wM(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iaB:1}
A.ti.prototype={
t(a){return this.aN()}}
A.ar.prototype={
gds(){return A.Ad(this)}}
A.js.prototype={
t(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.k3(s)
return"Assertion failed"}}
A.d4.prototype={}
A.co.prototype={
gfW(){return"Invalid argument"+(!this.a?"(s)":"")},
gfV(){return""},
t(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.J(p),n=s.gfW()+q+o
if(!s.a)return n
return n+s.gfV()+": "+A.k3(s.ghF())},
ghF(){return this.b}}
A.fc.prototype={
ghF(){return A.xS(this.b)},
gfW(){return"RangeError"},
gfV(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.J(q):""
else if(q==null)s=": Not greater than or equal to "+A.J(r)
else if(q>r)s=": Not in inclusive range "+A.J(r)+".."+A.J(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.J(r)
return s}}
A.kx.prototype={
ghF(){return A.r(this.b)},
gfW(){return"RangeError"},
gfV(){if(A.r(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gI(a){return this.f}}
A.id.prototype={
t(a){return"Unsupported operation: "+this.a}}
A.lU.prototype={
t(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.e8.prototype={
t(a){return"Bad state: "+this.a}}
A.jQ.prototype={
t(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.k3(s)+"."}}
A.la.prototype={
t(a){return"Out of Memory"},
gds(){return null},
$iar:1}
A.i4.prototype={
t(a){return"Stack Overflow"},
gds(){return null},
$iar:1}
A.tk.prototype={
t(a){return"Exception: "+this.a}}
A.oO.prototype={
t(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.i.aM(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.k.prototype={
cL(a,b,c){var s=A.y(this)
return A.qa(this,s.af(c).i("1(k.E)").a(b),s.i("k.E"),c)},
av(a,b,c,d){var s,r
d.a(b)
A.y(this).af(d).i("1(1,k.E)").a(c)
for(s=this.gL(this),r=b;s.q();)r=c.$2(r,s.gH())
return r},
cH(a,b){var s
A.y(this).i("z(k.E)").a(b)
for(s=this.gL(this);s.q();)if(b.$1(s.gH()))return!0
return!1},
cR(a,b){var s=A.a6(this,A.y(this).i("k.E"))
return s},
ec(a){return this.cR(0,!0)},
gI(a){var s,r=this.gL(this)
for(s=0;r.q();)++s
return s},
gaq(a){return!this.gL(this).q()},
gaB(a){var s=this.gL(this)
if(!s.q())throw A.m(A.cu())
return s.gH()},
hB(a,b,c){var s,r=A.y(this)
r.i("z(k.E)").a(b)
r.i("k.E()?").a(c)
for(r=this.gL(this);r.q();){s=r.gH()
if(b.$1(s))return s}r=c.$0()
return r},
aX(a,b){var s,r
A.hQ(b,"index")
s=this.gL(this)
for(r=b;s.q();){if(r===0)return s.gH();--r}throw A.m(A.p5(b,b-r,this,null,"index"))},
t(a){return A.zU(this,"(",")")}}
A.aS.prototype={
t(a){return"MapEntry("+A.J(this.a)+": "+A.J(this.b)+")"}}
A.aN.prototype={
ga2(a){return A.P.prototype.ga2.call(this,0)},
t(a){return"null"}}
A.P.prototype={$iP:1,
Y(a,b){return this===b},
ga2(a){return A.hN(this)},
t(a){return"Instance of '"+A.li(this)+"'"},
gaJ(a){return A.Cn(this)},
toString(){return this.t(this)}}
A.n9.prototype={
t(a){return""},
$ifm:1}
A.rv.prototype={
gp9(){var s,r=this.b
if(r==null)r=$.v8.$0()
s=r-this.a
if($.w4()===1000)return s
return B.c.A(s,1000)}}
A.cZ.prototype={
gI(a){return this.a.length},
t(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iAy:1}
A.k5.prototype={
h(a,b,c){this.$ti.i("1?").a(c)
this.a.set(b,c)},
t(a){return"Expando:null"}}
A.qu.prototype={
t(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.ud.prototype={
$1(a){var s,r,q,p
if(A.y4(a))return a
s=this.a
if(s.ak(a))return s.m(0,a)
if(t.av.b(a)){r={}
s.h(0,a,r)
for(s=a.gaT(),s=s.gL(s);s.q();){q=s.gH()
r[q]=this.$1(a.m(0,q))}return r}else if(t.e7.b(a)){p=[]
s.h(0,a,p)
B.a.T(p,J.zq(a,this,t.z))
return p}else return a},
$S:50}
A.uq.prototype={
$1(a){var s=this.a,r=s.$ti
a=r.i("1/?").a(this.b.i("0/?").a(a))
s=s.a
if((s.a&30)!==0)A.a_(A.ce("Future already completed"))
s.lW(r.i("1/").a(a))
return null},
$S:51}
A.ur.prototype={
$1(a){if(a==null)return this.a.k5(new A.qu(a===undefined))
return this.a.k5(a)},
$S:51}
A.u1.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.y3(a))return a
s=this.a
a.toString
if(s.ak(a))return s.m(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.a_(A.cx(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.vC(!0,"isUtc",t.y)
return new A.dT(r,0,!0)}if(a instanceof RegExp)throw A.m(A.aF("structured clone of RegExp",null))
if(a instanceof Promise)return A.CG(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.C(p,p)
s.h(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.fK(n),p=s.gL(n);p.q();)m.push(A.u0(p.gH()))
for(l=0;l<s.gI(n);++l){k=s.m(n,l)
if(!(l<m.length))return A.b(m,l)
j=m[l]
if(k!=null)o.h(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.h(0,a,o)
h=A.r(a.length)
for(s=J.fJ(i),l=0;l<h;++l)o.push(this.$1(s.m(i,l)))
return o}return a},
$S:50}
A.mI.prototype={
a5(a){if(a<=0||a>4294967296)throw A.m(A.xl(u.g+a))
return Math.random()*a>>>0},
hJ(){return Math.random()},
$iv9:1}
A.mY.prototype={
lR(a){var s,r,q,p,o,n,m,l=this,k=4294967296,j=a<0?-1:0
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
l.cg()
l.cg()
l.cg()
l.cg()},
cg(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.A(o-n+(q-p)+(m-r),4294967296)>>>0},
a5(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.m(A.xl(u.g+a))
s=a-1
if((a&s)>>>0===0){p.cg()
return(p.a&s)>>>0}do{p.cg()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
hJ(){var s,r=this
r.cg()
s=r.a
r.cg()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iv9:1}
A.kk.prototype={
oP(a,b,c,d){var s,r
t.jJ.a(d)
if(c===0)return new A.rZ(b).dN(d)
s=b.f.b.b
r=s.a
s=s.b
return new A.nI(a,b,c,new A.aa(A.an(r*s,null,!1,t.aT),new A.a0(new A.e(0,0),new A.e(r,s)),t.gy)).dN(d)},
k6(a,b,c,d){var s,r,q,p,o,n,m,l=null
if(d==null)d=B.a.f2($.fN(),new A.oS())
if(b==null)b=B.a.gaB($.es())
s=A.C(t.c3,t.D)
r=t.M
q=t.S
p=t.P
o=t.q
n=new A.dt(a,d,b,c,A.bq(B.v,l),new A.eM(A.an(9,l,!1,t.c)),A.bq(B.cc,l),A.bq(B.cb,l),s,0,new A.i3(A.C(r,q),A.C(r,q)),60,0,new A.kP(A.a([],t.kU)),new A.hy(A.C(p,q),A.C(p,q),A.C(o,q),A.C(t.R,q),A.b7(o),A.C(o,q)),new A.i6(),new A.fW(),new A.ih(),new A.hj())
n.lL(a,d,b,c)
for(r=new A.cS($.i2,$.i2.r,$.i2.e,A.y($.i2).i("cS<2>"));r.q();){q=r.d
m=A.bq(new A.c7(q.b,26),l)
q.aK(m)
s.h(0,q,m)}return n},
oY(a){return this.k6(a,null,!1,null)},
lB(a){var s,r,q,p,o=null,n=t.N,m=t.S,l=A.B(["Mending Salve",3,"Scroll of Sidestepping",2,"Tallow Candle",4,"Loaf of Bread",5],n,m),k=A.a([],t.I)
for(n=A.xe(l,n,m),m=A.y(n),n=new A.bs(J.aw(n.a),n.b,m.i("bs<1,2>")),m=m.y[1];n.q();){s=n.a
if(s==null)s=m.a(s)
r=s.a
q=s.b
p=$.bo().b.m(0,r)
if(p==null)A.a_(A.aF('Unknown resource "'+r+'".',o))
k.push(new A.L(p.a,o,o,o,q))}a.c.e.b2(a.ax,1,new A.oT(a,k))
return k},
pY(a,b){var s,r=a.f.B(b.gn(),b.gp()),q=r.x
if(q===0){if(!this.ol(a,b,r))this.jw(a,b,r)}else{s=r.w
if(s===$.b9()){--q
r.x=q
if(q<=0){q=r.a
q=$.uJ().m(0,q)
if((q==null?0:q)>0){q=$.n()
s=t.p.a(A.AC(r.a))
q=q.U(s.length)
if(!(q>=0&&q<s.length))return A.b(s,q)
r.a=s[q]}a.gaA().f=!0}else return new A.jF(b)}else if(s===$.bK()){this.jw(a,b,r)
r=r.x
if(r>0)return new A.lf(b,B.e.P(A.w(r,0,255,3,8)))}}return null},
ol(a,b,c){var s,r={},q=c.a,p=$.uJ().m(0,q)
if(p==null)p=0
if(p===0)return!1
r.a=0
q=new A.oR(r,a,b)
q.$3(-1,0,3)
q.$3(1,0,3)
q.$3(0,-1,3)
q.$3(0,1,3)
q.$3(-1,-1,2)
q.$3(-1,1,2)
q.$3(1,-1,2)
q.$3(1,1,2)
r=r.a
q=$.n()
if(r<=q.U(50+p))return!1
r=c.a
s=$.w6().m(0,r)
if(s==null)s=0
c.x=q.bs(s/2|0,s)
c.w=$.b9()
return a.gaA().f=!0},
jw(a,b,c){var s={},r=$.V()
if((c.a.e.a&r.a)===0)return
s.a=s.b=0
r=new A.oQ(s,a,b)
r.$2(0,0)
r.$2(-1,0)
r.$2(1,0)
r.$2(0,-1)
r.$2(0,1)
r.$2(-1,-1)
r.$2(1,-1)
r.$2(-1,1)
r.$2(1,1)
c.w=$.bK()
c.x=B.c.M(B.e.N(s.b/s.a)-4,0,255)},
$izE:1}
A.oS.prototype={
$1(a){return t.ho.a(a).a==="Human"},
$S:28}
A.oT.prototype={
$1(a){var s=a.a
if(s.dx)this.a.ax.e.j(0,s)
B.a.j(this.b,a)},
$S:7}
A.oR.prototype={
$3(a,b,c){var s=this.c,r=this.b.f.B(s.gn()+a,s.gp()+b)
if(r.x===0)return
if(r.w===$.b9())this.a.a+=c},
$S:152}
A.oQ.prototype={
$2(a,b){var s=this.c,r=this.b.f.B(s.gn()+a,s.gp()+b)
s=$.V()
if((r.a.e.a&s.a)!==0){s=this.a;++s.a
if(r.w===$.bK())s.b=s.b+r.x}},
$S:148}
A.k7.prototype={
gO(){return"Fairy Dust"},
gW(){return"TODO"},
gbE(){return new A.hO($.uH())},
ap(a){var s,r,q=a.y.Q,p=q.CW.a
p.toString
s=B.e.P(A.w(p,0,50,1,20))
q=q.ay.a
q.toString
r=B.e.P(A.w(q,0,50,1,6))
return A.xn(A.bf(new A.aK(A.aT("dust",B.y,B.aH).a7(1)),"affects",s,$.dg(),r))}}
A.mr.prototype={}
A.kb.prototype={
gO(){return"Flitter"},
gW(){return"TODO"},
gbE(){return new A.hO($.uH())},
ap(a){return new A.ke()}}
A.ke.prototype={
V(){var s,r,q=this.c
q===$&&A.c()
s=q.y
q=s.e
if(q.a>0)q.b=q.a=0
else{r=s.Q.ay.a
r.toString
q.a=B.e.P(A.w(r,0,50,3,20))
q.b=1
this.pv("{1} unfold your wings and take flight.",this.a)}return B.o}}
A.mu.prototype={}
A.kT.prototype={
hm(a){var s,r,q,p,o,n,m,l=this,k=l.c
k===$&&A.c()
k=k.x
k===$&&A.c()
k=k.w.B(a.a,a.b)
if(k==null)return null
s=t.V
r=s.a(l.a).Q.f.gcU()
q=A.a6(r,r.$ti.i("k.E"))
p=s.a(l.a).eW(k)
for(s=l.e,o=0,n=0;n<q.length;++n){if(q[n].a.r!==l.gby())continue
if(!(n<p.length))return A.b(p,n)
m=p[n]
m.cW(s,"mastery")
o+=m.hP(l,l.a,k)
if(k.z<=0)break}return o},
ge3(){return 1}}
A.m0.prototype={
gW(){var s=this.a
if(0>=s.length)return A.b(s,0)
return"You must have "+(B.i.G("aeiou",s[0])?"an":"a")+" "+s+" equipped."},
dP(a){if(a.y.Q.f.gcU().cH(0,new A.t6(this)))return null
return"No "+this.a+" equipped"}}
A.t6.prototype={
$1(a){return t.W.a(a).a.r===this.a.a},
$S:11}
A.jx.prototype={
gO(){return"Ball Lightning"},
gW(){return"TODO"},
gau(){return 8},
aw(a){return 24},
ap(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mb.prototype={}
A.jG.prototype={
gO(){return"Chain Lightning"},
gW(){return"TODO"},
gau(){return 6},
aw(a){return 24},
ap(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mh.prototype={}
A.jS.prototype={
gO(){return"Crystallize"},
gW(){return"TODO"},
gau(){return 6},
aw(a){return 24},
ap(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.ml.prototype={}
A.k0.prototype={
gO(){return"Earthwork"},
gW(){return"TODO"},
gau(){return 10},
aw(a){return 24},
ap(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mn.prototype={}
A.k8.prototype={
gO(){return"Fire Barrier"},
gW(){return"Creates a wall of fire."},
gau(){return 4},
aw(a){return 45},
fd(a,b){var s,r,q,p=a.y,o=A.bf(new A.aK(A.aT("fire",B.y,B.W).a7(1)),"burn",10+this.en(p.Q)*3,$.b9(),8)
p=p.y
s=A.bO(o)
r=p.S(0,b)
q=Math.sqrt(r.gaH())
return new A.jy(b,-r.b/q,r.a/q,s,A.b7(t.u))},
eg(a,b){return 8},
gar(){return this.a}}
A.ms.prototype={}
A.k9.prototype={
gO(){return"Firelight"},
gW(){return"TODO"},
gau(){return 1},
aw(a){return 4},
ap(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mt.prototype={}
A.kh.prototype={
gO(){return"Freezing Hand"},
gW(){return"TODO"},
gau(){return 4},
aw(a){return 24},
ap(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.my.prototype={}
A.kn.prototype={
gO(){return"Gust"},
gW(){return"TODO"},
gau(){return 1},
aw(a){return 4},
ap(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mC.prototype={}
A.ko.prototype={
gO(){return"Hail Storm"},
gW(){return"TODO"},
gau(){return 8},
aw(a){return 24},
ap(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mD.prototype={}
A.ku.prototype={
gO(){return"Icicle"},
gW(){return"TODO"},
gau(){return 1},
aw(a){return 12},
fd(a,b){return A.uV(b,A.bO(A.bf(new A.aK(A.aT("icicle",B.y,B.W).a7(1)),"pierce",8+this.en(a.y.Q)*4,$.cj(),8)),!1,null)},
eg(a,b){return 8},
gar(){return this.a}}
A.mE.prototype={}
A.kw.prototype={
gO(){return"Immolation"},
gW(){return"TODO"},
gau(){return 6},
aw(a){return 24},
ap(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mF.prototype={}
A.kM.prototype={
gO(){return"Lava Flow"},
gW(){return"TODO"},
gau(){return 8},
aw(a){return 24},
ap(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mL.prototype={}
A.kO.prototype={
gO(){return"Lightning Bolt"},
gW(){return"TODO"},
gau(){return 4},
aw(a){return 24},
ap(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mM.prototype={}
A.kU.prototype={
gO(){return"Melt Stone"},
gW(){return"TODO"},
gau(){return 3},
aw(a){return 24},
ap(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mP.prototype={}
A.lm.prototype={
gO(){return"Quicksand"},
gW(){return"TODO"},
gau(){return 8},
aw(a){return 24},
ap(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mX.prototype={}
A.lA.prototype={
gO(){return"Sandstorm"},
gW(){return"TODO"},
gau(){return 8},
aw(a){return 24},
ap(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.n0.prototype={}
A.lC.prototype={
gO(){return"Sparks"},
gW(){return"TODO"},
gau(){return 1},
aw(a){return 10},
ap(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.n4.prototype={}
A.lH.prototype={
gbE(){return new A.jq(this.gar(),this.gau())},
en(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.gar(),r=s.length,q=a.z,p=q.a,o=0,n=0;n<s.length;s.length===r||(0,A.o)(s),++n){m=s[n]
l=p.m(0,m)
if(l==null)l=0
k=q.b.m(0,m)
j=B.c.M(l+(k==null?0:k),0,15)
if(j>=this.gau())o+=j}return o}}
A.jq.prototype={
gW(){return"You must be at level "+this.b+" or higher in "+this.iQ()+"."},
dP(a){var s,r,q,p,o,n,m,l,k
for(s=this.a,r=s.length,q=this.b,p=a.y.Q.z,o=p.a,n=0;n<s.length;s.length===r||(0,A.o)(s),++n){m=s[n]
l=o.m(0,m)
if(l==null)l=0
k=p.b.m(0,m)
if(B.c.M(l+(k==null?0:k),0,15)>=q)return null}return"Not enough "+this.iQ()},
iQ(){var s,r,q,p,o,n=this.a
A:{s=n.length
r=s<=0?A.a_(A.ce("Should have at least one arcanum.")):null
if(s===1){if(0>=s)return A.b(n,0)
q=n[0]
r=q.b
break A}if(s===2){if(0>=s)return A.b(n,0)
q=n[0]
if(1>=s)return A.b(n,1)
r=q.b+" or "+n[1].b
break A}if(s>=1){r=s-1
p=B.a.fC(n,0,r)
if(!(r<n.length))return A.b(n,r)
o=n[r]
r=A.N(p)
r=new A.au(p,r.i("q(1)").a(new A.nH()),r.i("au<1,q>")).aG(0,", ")+", or "+o.b
break A}}return r}}
A.nH.prototype={
$1(a){return t.dx.a(a).b},
$S:146}
A.lP.prototype={
gO(){return"Tidal Wave"},
gW(){return"Summons a giant tidal wave."},
gau(){return 5},
aw(a){return 70},
ap(a){var s=a.y,r=this.en(s.Q),q=A.bf(new A.aK(A.aT("wave",B.y,B.W).a7(1)),"inundate",50+r*15,$.dh(),15+r)
return A.oK(s.y,A.bO(q),new A.ah($.b3().a|$.bL().a|$.j2().a),2)},
gar(){return this.a}}
A.nb.prototype={}
A.m3.prototype={
gO(){return"Wind Ride"},
gW(){return"TODO"},
gau(){return 3},
aw(a){return 16},
ap(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.nf.prototype={}
A.m4.prototype={
gO(){return"Windstorm"},
gW(){return"Summons a blast of air, spreading out from the sorceror."},
gau(){return 3},
aw(a){return 36},
ap(a){var s=a.y,r=this.en(s.Q),q=A.aT("wind",B.y,B.W).a7(1),p=B.c.A(r,3),o=A.bf(new A.aK(q),"blast",10+r*2,$.et(),6+p)
return A.oK(s.y,A.bO(o),$.vY(),null)},
gar(){return this.a}}
A.ng.prototype={}
A.jv.prototype={
gO(){return"Axe Sweep"},
gW(){return"TODO"},
hL(a,b){return new A.jw(b,$,A.w(a.y.Q.z.bU($.vV()),1,10,1,3))},
gbE(){return this.a}}
A.jw.prototype={
gaY(){return!1},
gby(){return"axe"},
fc(){return new A.S(this.pz(),t.oc)},
pz(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g
return function $async$fc(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.y,n=[o.gba(),o,o.gbb()],m=0
case 3:if(!(m<3)){r=5
break}l=n[m]
k=s.a.y.F(0,l)
j=s.c
j===$&&A.c()
j=j.x
j===$&&A.c()
j=j.f
i=k.a
h=k.b
j.l(i,h)
g=j.a
i=h*j.b.b.a+i
if(!(i>=0&&i<g.length)){A.b(g,i)
r=1
break}i=g[i]
r=!i.r?6:7
break
case 6:r=8
return a.b=s.da("You can't see where you're swinging."),1
case 8:r=1
break
case 7:j=$.V()
r=(i.a.e.a&j.a)===0?9:10
break
case 9:r=11
return a.b=s.da("There isn't enough room to swing your weapon."),1
case 11:r=1
break
case 10:case 4:++m
r=3
break
case 5:o=[o.gba(),o,o.gbb()],m=0
case 12:if(!(m<3)){r=14
break}l=o[m]
s.jQ(B.c0,l,s.a.y.F(0,l))
r=15
return a.aO(s.lf(2))
case 15:s.hm(s.a.y.F(0,l))
r=16
return a.aO(s.lf(3))
case 16:case 13:++m
r=12
break
case 14:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
t(a){return A.J(this.a)+" slashes "+this.y.t(0)}}
A.m9.prototype={}
A.ma.prototype={}
A.jN.prototype={
gO(){return"Club Bash"},
gW(){return"TODO"},
hL(a,b){return new A.jO(b,A.w(a.y.Q.z.bU($.vW()),1,15,1,2))},
gbE(){return this.a}}
A.jO.prototype={
gaY(){return!1},
gby(){return"club"},
V(){var s,r,q,p,o,n=this,m=n.z
if(m===0){m=n.Q=n.hm(n.a.y.F(0,n.y))
if(m==null)return n.da("There's no one there!")
else if(m===0)return B.o}else if(m===1){m=n.c
m===$&&A.c()
s=m.x
s===$&&A.c()
r=n.y
q=n.a.y.F(0,r)
q=s.w.B(q.a,q.b)
if(q==null)return B.o
p=n.a.y.F(0,r).F(0,r)
s=n.Q
s.toString
o=B.c.M(B.c.c_(300*s,q.gbr()),5,100)
s=m.x
s===$&&A.c()
if(s.bn(p,q.gb6())&&s.w.B(p.a,p.b)==null&&$.n().U(100)<o){q.dl(m,p)
q.a.a=0
n.a1("{1} is knocked back!",q)
n.jQ(B.bW,r,n.a.y.F(0,r))}}return++n.z>10?B.o:B.a4},
t(a){return A.J(this.a)+" bashes "+this.y.t(0)}}
A.mj.prototype={}
A.lF.prototype={
gO(){return"Spear Stab"},
gW(){return"TODO"},
hL(a,b){return new A.lG(b,$,A.w(a.y.Q.z.bU($.w3()),1,15,1,3))},
gbE(){return this.a}}
A.lG.prototype={
gaY(){return!1},
gby(){return"spear"},
fc(){return new A.S(this.pA(),t.oc)},
pA(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f
return function $async$fc(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.y,n=o.c,m=o.d,l=1
case 3:if(!(l<=2)){r=5
break}k=s.a.y.F(0,new A.e(n*l,m*l))
j=s.c
j===$&&A.c()
j=j.x
j===$&&A.c()
j=j.f
i=k.a
h=k.b
j.l(i,h)
g=j.a
i=h*j.b.b.a+i
if(!(i>=0&&i<g.length)){A.b(g,i)
r=1
break}i=g[i]
r=!i.r?6:7
break
case 6:r=8
return a.b=s.da("You can't see far enough to aim."),1
case 8:r=1
break
case 7:j=$.V()
r=(i.a.e.a&j.a)===0?9:10
break
case 9:r=11
return a.b=s.da("There isn't enough room to use your weapon."),1
case 11:r=1
break
case 10:case 4:++l
r=3
break
case 5:j=t.V,l=1
case 12:if(!(l<=2)){r=14
break}i=s.a
k=i.y.F(0,new A.e(n*l,m*l))
f=j.a(i).Q.f.gcU().gL(0)
if(!f.q())A.a_(A.cu())
s.oC(B.c1,o,f.gH(),k)
r=15
return a.b=B.a4,1
case 15:s.hm(k)
r=16
return a.b=B.a4,1
case 16:case 13:++l
r=12
break
case 14:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
t(a){return A.J(this.a)+" spears "+this.y.t(0)}}
A.n5.prototype={}
A.n6.prototype={}
A.m1.prototype={
gO(){return"Whip Crack"},
gW(){return"TODO"},
eg(a,b){return 3},
fd(a,b){var s,r,q,p,o,n,m,l,k=a.x
k===$&&A.c()
k=k.w.B(b.gn(),b.gp())
s=a.y
r=s.Q
q=r.f.gcU()
p=A.a6(q,q.$ti.i("k.E"))
o=s.eW(k)
n=A.ed()
for(k=p.length,m=0;m<k;++m){if(p[m].a.r!=="whip")continue
if(!(m<o.length))return A.b(o,m)
n.b=o[m]
break}l=r.z.bU($.wt())
n.h6().cW(A.w(l,1,15,1,3),"whip mastery")
return A.uV(b,n.h6(),!0,3)},
gbE(){return this.a}}
A.ne.prototype={}
A.jy.prototype={
gaY(){return!1},
V(){var s,r,q=this
while(q.y<6){s={}
s.a=!1
r=new A.nM(s,q)
q.z=r.$2(q.z,1)
q.Q=r.$2(q.Q,-1)
if(s.a)return B.a4
q.y+=0.1}return B.o}}
A.nM.prototype={
$2(a,b){var s,r
if(!a)return!1
s=new A.nN(this.a,this.b,b)
r=!s.$2(0,0)||!1
if(s.$2(-0.1,0))r=!1
if(s.$2(0.1,0))r=!1
if(s.$2(0,-0.1))r=!1
return!(s.$2(0,0.1)?!1:r)},
$S:144}
A.nN.prototype={
$2(a,b){var s,r=this.b,q=r.y,p=r.e.F(0,new A.e(B.e.P(r.f*q+a),B.e.P(r.r*q+b)).aL(0,this.c))
q=r.c
q===$&&A.c()
q=q.x
q===$&&A.c()
q=q.f.B(p.a,p.b)
s=$.V()
if((q.a.e.a&s.a)===0)return!1
if(r.x.j(0,p)){r.kq(r.w,p,r.y,$.n().bs(30,40))
this.a.a=!0}return!0},
$S:143}
A.mc.prototype={}
A.jC.prototype={
gaD(){var s=this.at
return s==null?this.Q.gaD():s},
kN(a,b){var s=this.Q.gb3()
this.oB(B.b5,b.S(0,a).gkD(),s,b)},
hN(a,b){var s=this
s.Q.e5(s,s.a,b,s.as)
return!0}}
A.h2.prototype={
gf7(){return 1},
V(){var s,r,q=this,p=q.gf7(),o=q.gd8()
if(q.gbf().a<=0){s=q.gbf()
s.a=o
s.b=p
q.de()
return B.o}if(q.gbf().b>=p){o=B.c.A(B.c.c_(o*p,q.gbf().b),2)
if(o===0)return q.eo()
q.gbf().a+=o
q.df()
return B.o}r=B.c.c_(q.gbf().a*q.gbf().b,p)
s=q.gbf()
s.a=r+B.c.A(o,2)
s.b=p
q.fe()
return B.o},
fe(){}}
A.eT.prototype={
gbf(){return this.a.f},
gf7(){return this.x},
gd8(){return this.y},
de(){return this.a1("{1} start[s] moving faster.",this.a)},
df(){return this.a1("{1} [feel]s the haste lasting longer.",this.a)},
fe(){return this.a1("{1} move[s] even faster.",this.a)}}
A.eQ.prototype={
gbf(){return this.a.c},
V(){this.k9($.cj())
return this.lD()},
gf7(){return 1+B.c.A(this.x,40)},
gd8(){var s=this.x
return 3+$.n().cS(s*2,B.c.A(s,2))},
de(){return this.a1("{1} [are|is] frozen!",this.a)},
df(){return this.a1("{1} feel[s] the cold linger!",this.a)},
fe(){return this.a1("{1} feel[s] the cold intensify!",this.a)}}
A.f8.prototype={
gbf(){return this.a.w},
gf7(){return 1+B.c.A(this.x,20)},
gd8(){var s=this.x
return 1+$.n().cS(s,B.c.A(s,2))},
de(){return this.a1("{1} [are|is] poisoned!",this.a)},
df(){return this.a1("{1} feel[s] the poison linger!",this.a)},
fe(){return this.a1("{1} feel[s] the poison intensify!",this.a)}}
A.ey.prototype={
gbf(){return this.a.b},
gd8(){var s=this.x
return 3+$.n().cS(s*2,B.c.A(s,2))},
de(){this.a1("{1 his} vision dims!",this.a)
var s=this.c
s===$&&A.c()
s=s.x
s===$&&A.c()
s.gaA().w=!0},
df(){return this.a1("{1 his} vision dims!",this.a)}}
A.eH.prototype={
gbf(){return this.a.d},
gd8(){var s=this.x
return 3+$.n().cS(s*2,B.c.A(s,2))},
de(){return this.a1("{1} [are|is] dazzled by the light!",this.a)},
df(){return this.a1("{1} [are|is] dazzled by the light!",this.a)}}
A.fe.prototype={
gbf(){return this.a.fj(this.y)},
gd8(){return this.x},
de(){var s,r,q=this
q.a1("{1} [are|is] resistant to "+q.y.t(0)+".",q.a)
s=q.a
r=s.w
if(r.a>0){r.b=r.a=0
q.a1("{1} [are|is] no longer poisoned.",s)}},
df(){return this.a1("{1} feel[s] the resistance extend.",this.a)}}
A.mw.prototype={}
A.eJ.prototype={
aN(){return"DetectType."+this.b}}
A.eI.prototype={
gml(){var s,r=this,q=r.r
if(q===$){s=r.mk()
r.r!==$&&A.er()
r.r=s
q=s}return q},
gaY(){return!1},
V(){var s,r,q=this.gml()
if(q.length===0)return B.o
for(q=J.aw(B.a.kZ(q));q.q();){s=q.gH()
r=this.c
r===$&&A.c()
r=r.x
r===$&&A.c()
r.d9(s.gn(),s.gp(),!0)
this.hk(B.bT,s)}return B.a4},
mk(){var s,r,q,p,o,n,m,l,k=this,j={},i=A.C(t.S,t.A),h=new A.o6(k,i),g=k.e,f=0
if(g.G(0,B.at)){s=k.c
s===$&&A.c()
r=s.x
r===$&&A.c()
r=A.ac(r.f.b)
while(r.q()){q=r.b
p=r.c
o=s.x
o===$&&A.c()
o=o.f
o.l(q,p)
n=o.a
m=p*o.b.b.a+q
if(!(m>=0&&m<n.length))return A.b(n,m)
m=n[m]
if(m.r)continue
o.l(q,p)
if(m.a.b!==B.aY)continue;++f
h.$1(new A.e(q,p))}}j.a=0
if(g.G(0,B.ax)){g=k.c
g===$&&A.c()
g=g.x
g===$&&A.c()
g.f5(new A.o8(j,k,h))}if(f>0){g=j.a
s=k.a
if(g>0)k.a1("{1} sense[s] hidden secrets in the dark!",s)
else k.a1("{1} sense[s] places to escape!",s)}else if(j.a>0)k.a1("{1} sense[s] the treasures held in the dark!",k.a)
else k.lw("The darkness holds no secrets.")
g=i.$ti.i("b6<1>")
l=A.a6(new A.b6(i,g),g.i("k.E"))
B.a.dq(l,new A.o9())
g=A.N(l)
s=g.i("au<1,D<e>>")
g=A.a6(new A.au(l,g.i("D<e>(1)").a(new A.oa(i)),s),s.i("aI.E"))
return g}}
A.o6.prototype={
$1(a){var s=this.a,r=s.a.y.S(0,a).gaH()
s=s.f
if(s!=null)s=r>s*s
else s=!1
if(s)return
s=this.b
s.b8(r,new A.o7())
s=s.m(0,r)
s.toString
J.wz(s,a)},
$S:10}
A.o7.prototype={
$0(){return A.a([],t.l)},
$S:38}
A.o8.prototype={
$2(a,b){var s=this.b.c
s===$&&A.c()
s=s.x
s===$&&A.c()
if(s.f.B(b.gn(),b.gp()).r)return;++this.a.a
this.c.$1(b)},
$S:15}
A.o9.prototype={
$2(a,b){A.r(a)
return B.c.am(A.r(b),a)},
$S:24}
A.oa.prototype={
$1(a){var s=this.a.m(0,A.r(a))
s.toString
return s},
$S:130}
A.eL.prototype={
V(){var s=this,r=t.V,q=r.a(s.a),p=q.ay
if(p===400)s.a1("{1} [are|is] already full!",q)
else if(p+s.e>400)s.a1("{1} [are|is] stuffed!",q)
else s.a1("{1} feel[s] satiated.",q)
r=r.a(s.a)
r.ay=B.c.M(r.ay+s.e,0,400)
return B.o}}
A.h9.prototype={
kq(a,b,c,d){var s,r,q=this
q.ox(B.b6,a.gb3(),b)
s=q.c
s===$&&A.c()
s=s.x
s===$&&A.c()
s=s.w.B(b.gn(),b.gp())
if(s!=null&&s!==q.a)a.e5(q,q.a,s,!1)
r=a.gb3().r.$4(b,a,c,d)
if(r!=null)q.hi(r)},
kp(a,b,c){return this.kq(a,b,c,0)}}
A.eB.prototype={
V(){var s,r
this.k9($.b9())
s=this.a
r=s.c
if(r.a>0){r.b=r.a=0
return this.cA("The fire warms {1} back up.",s)}return B.o}}
A.eC.prototype={
V(){var s,r,q=this,p=q.e,o=$.b9(),n=q.r+q.hq(p,o),m=q.c
m===$&&A.c()
s=m.x
s===$&&A.c()
p=s.f.B(p.gn(),p.gp())
s=p.a
r=$.uJ().m(0,s)
if(r==null)r=0
if(n<=0)s=r>0&&q.f>$.n().U(r)
else s=!0
if(s){s=p.a
s=$.w6().m(0,s)
n+=s==null?0:s
s=$.n().bs(B.c.A(n,2),n)
p.x=s
s-=B.c.A(q.f,4)
p.x=s
if(s<=0)p.x=1
p.w=o
p=m.x
p===$&&A.c()
p.gaA().f=!0}return B.o}}
A.jF.prototype={
V(){var s,r,q=this,p=q.c
p===$&&A.c()
s=p.x
s===$&&A.c()
r=q.e
s=s.w.B(r.gn(),r.gp())
if(s!=null)A.bO(A.bf(new A.aK(A.aT("fire",B.y,B.aH).a7(1)),"burns",10,$.b9(),null)).e5(q,null,s,!1)
p=p.x
p===$&&A.c()
p=p.f.B(r.gn(),r.gp())
p.x=p.x+q.hq(r,$.b9())
return B.o}}
A.eR.prototype={
V(){this.hq(this.e,$.cj())
return B.o}}
A.f9.prototype={
V(){var s,r=this.c
r===$&&A.c()
r=r.x
r===$&&A.c()
s=this.e
s=r.f.B(s.gn(),s.gp())
if(s.w===$.b9()&&s.x>0)return B.o
r=$.V()
if((s.a.e.a&r.a)!==0){s.w=$.bK()
s.x=B.c.M(s.x+this.f*4,0,255)}return B.o}}
A.lf.prototype={
V(){var s,r=this,q=r.c
q===$&&A.c()
q=q.x
q===$&&A.c()
s=r.e
s=q.w.B(s.gn(),s.gp())
if(s!=null){q=$.bK()
if(s.c9(q)>0)r.a1("{1} [are|is] unaffected by the poison.",s)
else A.bO(A.bf(new A.aK(A.aT("poison",B.y,B.aH).a7(1)),"chokes",r.f,q,null)).e5(r,null,s,!1)}return B.o}}
A.fq.prototype={
gaY(){return!1},
V(){var s,r,q=this,p=q.a,o=(p.gb6().a&$.V().a)!==0?6:3,n=p.gb6(),m=$.bL(),l=q.c
l===$&&A.c()
s=l.x
s===$&&A.c()
m=A.cw(s,p.y,new A.ah(n.a&~m.a),null,null,o).gcN()
n=m.$ti
p=n.i("ap<k.E>")
r=A.a6(new A.ap(m,n.i("z(k.E)").a(new A.t7(q)),p),p.i("k.E"))
if(r.length===0)return B.bM
q.a1("{1} [are|is] thrown by the wind!",q.a)
p=q.a
q.jP(B.c2,p,p.y)
p=q.a
p.toString
n=$.n()
t.A.a(r)
n=n.U(r.length)
if(!(n>=0&&n<r.length))return A.b(r,n)
p.dl(l,t.u.a(r[n]))
return B.o}}
A.t7.prototype={
$1(a){var s
t.u.a(a)
s=this.a.c
s===$&&A.c()
s=s.x
s===$&&A.c()
return s.w.B(a.gn(),a.gp())==null},
$S:1}
A.eZ.prototype={
V(){var s,r,q=this.c
q===$&&A.c()
s=q.x
s===$&&A.c()
r=this.e
s.f.B(r.gn(),r.gp()).ov(this.f)
q=q.x
q===$&&A.c()
q.gaA().f=!0
return B.o}}
A.me.prototype={}
A.mf.prototype={}
A.mg.prototype={}
A.mx.prototype={}
A.mS.prototype={}
A.mT.prototype={}
A.kd.prototype={
gaY(){return!1},
V(){var s,r,q,p,o,n=this,m=(n.z+1)%n.y
n.z=m
if(m!==0)return B.a4
m=n.w
if(m==null){m=n.c
m===$&&A.c()
m=m.x
m===$&&A.c()
m=A.cw(m,n.e,n.x,!1,null,null)
n.r!==$&&A.ay()
n.r=m
m=m.gcN()
s=m.$ti
r=s.i("ia<k.E>")
m=A.a6(new A.ia(m,s.i("z(k.E)").a(new A.oL(n)),r),r.i("k.E"))
n.w=m}s=n.r
s===$&&A.c()
m=s.ck(B.a.gaB(m))
m.toString
for(q=0;r=n.w,q<r.length;++q)if(s.ck(r[q])!==m)break
s=n.w
s.toString
s=B.a.fC(s,0,q)
r=s.length
p=n.f
o=0
for(;o<s.length;s.length===r||(0,A.o)(s),++o)n.kp(p,s[o],m)
m=n.w
m.toString
m=B.a.lC(m,q)
n.w=m
if(m.length===0)return B.o
return B.a4}}
A.oL.prototype={
$1(a){var s,r
t.u.a(a)
s=this.a
r=s.r
r===$&&A.c()
r=r.ck(a)
r.toString
return r<=s.f.gaD()},
$S:1}
A.eP.prototype={
V(){var s=this
return s.be(A.oK(s.a.y,A.bO(s.e),s.f,null))}}
A.eO.prototype={
V(){var s=this
return s.be(A.oK(s.f,A.bO(s.e),s.r,null))}}
A.mv.prototype={}
A.eU.prototype={
V(){var s=this,r=s.a,q=r.w,p=q.a>0&&s.f
if(p){q.b=q.a=0
s.a1("{1} [are|is] cleansed of poison.",r)}r=s.a
if(r.z!==r.gbr()&&s.e>0){r=s.a
q=s.e
r.z=B.c.M(r.z+q,0,r.gbr())
s.ow(B.ba,s.a,q)
s.a1("{1} feel[s] better.",s.a)
p=!0}if(p)return B.o
else return s.cA("{1} [don't|doesn't] feel any different.",s.a)}}
A.ks.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i=this
i.a1("{1} "+i.f+"!",i.a)
i.cG(B.bV,i.a)
s=i.c
s===$&&A.c()
r=s.x
r===$&&A.c()
r=r.b
q=r.length
p=t.B
o=i.e
n=0
for(;n<r.length;r.length===q||(0,A.o)(r),++n){m=r[n]
l=i.a
if(m!==l&&m instanceof A.ad&&m.y.S(0,p.a(l).y).eh(0,o)){k=s.x
k===$&&A.c()
l=l.y
j=m.y
j=k.geL().q_(l,j)
j=m.ch+j*m.Q.x
m.ch=j
m.ch=B.e.M(j,0,1)}}return B.o}}
A.kv.prototype={
kT(a){this.hR(a,0)},
hR(a,b){var s,r,q=this.c
q===$&&A.c()
s=q.x
s===$&&A.c()
s=s.f.B(a.gn(),a.gp())
r=A.kN(3)
s.f=Math.max(s.f,r)
q=q.x
q===$&&A.c()
q.gaA().f=!0},
gaD(){return this.at}}
A.eV.prototype={
gaY(){return!1},
V(){var s,r,q=this,p=q.c
p===$&&A.c()
s=p.x
s===$&&A.c()
r=q.a.y
r=s.f.B(r.gn(),r.gp())
s=A.kN(3)
r.f=Math.max(r.f,s)
p=p.x
p===$&&A.c()
p.gaA().f=!0
p=q.a.y
s=new A.kv(q.e,p,p,A.b7(t.u),A.a([],t.gk))
s.is(p,p,1)
return q.be(s)}}
A.f_.prototype={
go7(){var s,r=this,q=r.w
if(q===$){s=r.mO()
r.w!==$&&A.er()
r.w=s
q=s}return q},
gaY(){return!1},
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(s=f.f,r=0;r<2;++r){q=f.r
p=f.go7()
o=p.length
if(q>=o)return B.o
q=f.r
if(!(q<o))return A.b(p,q)
q=p[q]
p=q.length
n=0
for(;n<q.length;q.length===p||(0,A.o)(q),++n){m=q[n]
o=f.c
o===$&&A.c()
l=o.x
l===$&&A.c()
l.d9(m.gn(),m.gp(),!0)
f.hk(B.bX,m)
if(s){l=o.x
l===$&&A.c()
l=l.f
k=m.gn()
j=m.gp()
l.l(k,j)
i=l.a
k=j*l.b.b.a+k
if(!(k>=0&&k<i.length))return A.b(i,k)
k=i[k]
k.f=B.c.M(k.f+255,0,192)
k=o.x
k===$&&A.c()
k.gaA().f=!0}for(l=m.gbD(),k=l.length,h=0;h<l.length;l.length===k||(0,A.o)(l),++h){g=l[h]
j=o.x
j===$&&A.c()
j.d9(g.a,g.b,!0)}}++f.r}return B.a4},
mO(){var s,r,q,p,o,n,m=this,l=t.l,k=A.a([A.a([],l)],t.g)
if(0>=k.length)return A.b(k,0)
B.a.j(k[0],m.a.y)
s=m.c
s===$&&A.c()
s=s.x
s===$&&A.c()
r=m.a.y
q=m.e
p=new A.kS(q,s,r,new A.cr(A.a([],t.k5),t.r),A.a([],l))
p.fH(s,r,q)
for(s=p.gcN(),r=s.$ti,s=new A.ak(s.a(),r.i("ak<1>")),r=r.c;s.q();){q=s.b
if(q==null)q=r.a(q)
o=p.ck(q)
o.toString
for(n=k.length;n<=o;++n)B.a.j(k,A.a([],l))
if(!(o>=0&&o<k.length))return A.b(k,o)
B.a.j(k[o],q)}for(l=t.A,n=0;n<k.length;++n){s=$.n()
B.a.bM(l.a(k[n]),s.a)}return k}}
A.kS.prototype={
i0(a,b,c,d){var s=$.yP()
if((c.a.e.a&s.a)===0)return null
if(a>=this.r*2)return null
return d?3:2}}
A.e3.prototype={
aN(){return"Missive."+this.b}}
A.kV.prototype={
ge3(){return 1},
V(){var s,r=this,q=$.n(),p=B.ie.m(0,r.f)
p.toString
t.m.a(p)
s=p.length
q=q.U(s)
if(!(q>=0&&q<s))return A.b(p,q)
return r.fD(p[q],r.a,r.e)}}
A.f6.prototype={
gaY(){return!1},
V(){var s,r,q,p,o,n,m=this,l=A.b7(t.f0),k=m.c
k===$&&A.c()
s=k.x
s===$&&A.c()
s=s.b
r=s.length
q=t.V
p=0
for(;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
if(o===q.a(m.a))continue
if(k.cn(o))l.j(0,o)}s=q.a(m.a).r
s.a=m.e
s.b=m.f
s=k.x
s===$&&A.c()
s=s.b
r=s.length
n=!1
p=0
for(;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
if(o===q.a(m.a))continue
if(k.cn(o)&&!l.G(0,o)){m.cG(B.bZ,o)
n=!0}}k=m.a
if(n)return m.cA("{1} perceive[s] monsters beyond your sight!",k)
else return m.cA("{1} do[es]n't perceive anything.",k)}}
A.lg.prototype={
V(){var s=this,r=t.B.a(s.a),q=s.e
r.Q=q
r.z=B.c.M(B.c.M(r.z,0,q.f),0,r.gbr())
r.ax.aP(0)
r.h9()
s.cG(B.c_,s.a)
return B.o}}
A.jp.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.hi(new A.lg(g.e))
g.a1(g.r,g.a)
s=A.a([],t.l)
for(r=g.f,q=r.at,p=0;p<8;++p){o=B.a6[p]
n=g.a.y.F(0,o)
m=g.c
m===$&&A.c()
m=m.x
m===$&&A.c()
if(m.bn(n,q)){m=m.w
l=n.a
k=n.b
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.b(j,l)
l=j[l]==null
m=l}else m=!1
if(m)B.a.j(s,n)}q=s.length
if(q!==0){m=$.n()
t.A.a(s)
q=m.U(q)
if(!(q>=0&&q<s.length))return A.b(s,q)
i=r.fz(s[q],t.B.a(g.a))
h=new A.cI()
i.at=h
h.a=i
q=g.c
q===$&&A.c()
q=q.x
q===$&&A.c()
q.dK(i)
g.cG(B.bb,i)}return B.o}}
A.lq.prototype={
gaY(){return!1},
is(a,b,c){var s,r,q,p,o,n,m,l=this,k=B.e.aV(6.283185307179586*l.gaD()*c*2)
if(c<1){s=l.f
r=l.e
q=s.S(0,r)
p=!r.Y(0,s)?Math.atan2(q.a,q.b):0
for(s=k-1,r=l.x,o=6.283185307179586*c,n=0;n<k;++n)B.a.j(r,p+(n/s-0.5)*o)}else{m=6.283185307179586/k
for(s=l.x,n=0;n<k;++n)B.a.j(s,n*m)}},
V(){var s,r=this
if(r.w===0){r.kT(r.e);++r.w
return B.a4}s=r.x
B.a.hT(s,new A.qG(r))
if(++r.w>r.gaD()||s.length===0)return B.o
return B.a4},
kT(a){}}
A.qG.prototype={
$1(a){var s,r,q,p,o,n
A.bw(a)
s=this.a
r=s.e
q=r.gn()+B.e.P(Math.sin(a)*s.w)
p=r.gp()+B.e.P(Math.cos(a)*s.w)
o=new A.e(q,p)
n=s.c
n===$&&A.c()
n=n.x
n===$&&A.c()
p=n.f.B(q,p)
q=$.V()
if((p.a.e.a&q.a)===0)return!0
if(!s.r.j(0,o))return!1
s.hR(o,Math.sqrt(o.S(0,r).gaH()))
return!1},
$S:121}
A.lp.prototype={
gaD(){return this.at.gaD()},
hR(a,b){this.kp(this.at,a,b)}}
A.fh.prototype={
gaY(){return!1},
V(){var s=this.a.y
return this.be(A.vb(A.bO(this.e),s,s,1))}}
A.fg.prototype={
gaY(){return!1},
V(){var s=this.f
return this.be(A.vb(A.bO(this.e),s,s,1))}}
A.mZ.prototype={}
A.lD.prototype={
V(){var s,r=this,q=t.B
if($.n().U(q.a(r.a).as)!==0)return B.o
q=q.a(r.a);++q.as
s=r.f.fz(r.e,q)
q=r.c
q===$&&A.c()
q=q.x
q===$&&A.c()
q.dK(s)
r.cG(B.bb,s)
return B.o}}
A.fn.prototype={
V(){var s,r,q,p,o,n,m,l=this,k=A.a([],t.l),j=l.a.y,i=l.e,h=j.gn()-i,g=j.gp()-i,f=j.gn(),e=j.gp(),d=l.c
d===$&&A.c()
s=d.x
s===$&&A.c()
for(h=A.ac(A.xm(new A.a0(new A.e(h,g),new A.e(f+i-h,e+i-g)),s.f.b));h.q();){g=h.b
f=h.c
r=new A.e(g,f)
e=d.x
e===$&&A.c()
s=l.a
q=s.cr()
if(e.bn(r,s.e.a>0?new A.ah(q.a|$.V().a):q)){s=e.w
s.l(g,f)
p=s.a
s=f*s.b.b.a+g
if(!(s>=0&&s<p.length))return A.b(p,s)
s=p[s]==null}else s=!1
if(s){e=e.f
e.l(g,f)
s=e.a
g=f*e.b.b.a+g
if(!(g>=0&&g<s.length))return A.b(s,g)
g=s[g].x===0}else g=!1
if(!g)continue
if(r.S(0,l.a.y).bi(0,i))continue
B.a.j(k,r)}i=k.length
if(i===0)return l.dX("{1} couldn't escape.",l.a)
h=$.n()
t.A.a(k)
i=h.U(i)
g=k.length
if(!(i>=0&&i<g))return A.b(k,i)
o=k[i]
for(i=g,n=0;n<10;++n,i=g){i=h.a.a5(i)
g=k.length
if(!(i>=0&&i<g))return A.b(k,i)
r=k[i]
i=l.a.y
if(r.S(0,i).bi(0,o.S(0,i)))o=r}i=l.a
m=i.y
i.dl(d,o)
l.jP(B.bc,l.a,m)
return l.cA("{1} teleport[s]!",l.a)}}
A.mR.prototype={
V(){var s,r,q,p=this,o=p.c
o===$&&A.c()
s=o.x
s===$&&A.c()
r=p.e
s.f.B(r.gn(),r.gp()).a=p.gjf()
p.hk(B.bY,r)
s=$.n()
q=B.e.P(A.w(o.w,1,100,p.gja(),p.gj9()))
if(s.U(100)<q)p.a1("The "+p.gh2()+" is empty.",p.a)
else{s=o.x
s===$&&A.c()
s.e6(r,p.iN(),o.w)
p.a1("{1} open[s] the "+p.gh2()+".",p.a)}return B.o}}
A.f3.prototype={
gh2(){return"barrel"},
gjf(){return $.ns()},
gja(){return 40},
gj9(){return 10},
iN(){var s=this.c
s===$&&A.c()
return A.a8("food",s.w,null)}}
A.f4.prototype={
gh2(){return"chest"},
gjf(){return $.nt()},
gja(){return 20},
gj9(){return 2},
iN(){var s=this.c
s===$&&A.c()
return A.xE(A.B([A.a8("treasure",s.w,null),0.5,A.a8("magic",s.w,null),0.2,A.a8("equipment",s.w,null),0.3],t.iZ,t.i))}}
A.k_.prototype={
gO(){return"Dual Wield"},
gW(){return"Attack with a weapon in each hand as effectively as lesser weaklings do with only a single weapon in their puny arms."},
kA(a,b,c){var s=t.aa.a(b).length
if(s===0)return c
return c/s}}
A.kg.prototype={
gO(){return"Foolhardy"},
gW(){return"An aura of good luck makes you 10% harder to hit."},
eX(a){return B.ia}}
A.h4.prototype={}
A.ki.prototype={
oT(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=this.a,r=s.b.b,q=r.b,r=r.a,p=s.a,o=p.length,n=a2.b,m=n.b.f,l=m.a,k=m.b,j=k.b.a,i=l.length,n=n.d,h=n.a,g=n.b.b.a,f=h.length,e=a2.c,d=0;d<q;++d)for(c=d*r,b=0;b<r;++b){a=a3.gn()+b
a0=a3.gp()+d
if(!k.G(0,new A.e(a,a0)))return!1
n.l(a,a0)
a1=a0*g+a
if(!(a1>=0&&a1<f))return A.b(h,a1)
if(h[a1]!=e)return!1
s.l(b,d)
a1=c+b
if(!(a1>=0&&a1<o))return A.b(p,a1)
a1=p[a1]
m.l(a,a0)
a=a0*j+a
if(!(a>=0&&a<i))return A.b(l,a)
if(!a1.py(l[a].a))return!1}return!0},
pF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
for(s=this.a,r=s.b.b,q=r.b,r=r.a,p=s.a,o=p.length,n=a.b.b.f,m=n.a,l=n.b.b.a,k=m.length,j=0;j<q;++j)for(i=j*r,h=0;h<r;++h){s.l(h,j)
g=i+h
if(!(g>=0&&g<o))return A.b(p,g)
g=p[g]
f=b.gn()+h
e=b.gp()+j
g=g.a
if(g!=null){n.l(f,e)
f=e*l+f
if(!(f>=0&&f<k))return A.b(m,f)
m[f].a=g;++a.d}}}}
A.h0.prototype={
py(a){var s=this.b
if(s!=null)s=(a.e.a&s.a)===0
else s=!1
if(s)return!1
s=this.c
if(s.length!==0&&!B.a.G(s,a))return!1
return!0}}
A.dB.prototype={
aN(){return"Symmetry."+this.b}}
A.u5.prototype={
$1(a){return B.i.l9(A.a3(a))},
$S:4}
A.oi.prototype={
$1(a){A.r(a)
return new A.fq()},
$S:120}
A.om.prototype={
$1(a){A.r(a)
return new A.eB()},
$S:119}
A.on.prototype={
$4(a,b,c,d){t.u.a(a)
t._.a(b)
A.ei(c)
A.r(d)
return new A.eC(a,B.e.N(b.gd2()),d)},
$S:117}
A.oj.prototype={
$1(a){return new A.eQ(A.r(a))},
$S:115}
A.ok.prototype={
$4(a,b,c,d){t.u.a(a)
t._.a(b)
A.ei(c)
A.r(d)
return new A.eR(a)},
$S:110}
A.oq.prototype={
$1(a){return new A.f8(A.r(a))},
$S:107}
A.or.prototype={
$4(a,b,c,d){t.u.a(a)
t._.a(b)
A.ei(c)
A.r(d)
return new A.f9(a,B.e.N(b.gd2()))},
$S:105}
A.ol.prototype={
$1(a){return new A.ey(A.r(a))},
$S:104}
A.oo.prototype={
$1(a){return new A.eH(A.r(a))},
$S:103}
A.op.prototype={
$4(a,b,c,d){var s,r
t.u.a(a)
t._.a(b)
A.ei(c)
A.r(d)
s=B.c.M(1+B.e.N(b.gd2())*4,0,255)
r=B.e.M(128+b.gd2()*16,0,255)
return new A.eZ(a,B.e.N(A.w(b.gaD()-c,0,b.gaD(),s,r)))},
$S:99}
A.te.prototype={
cv(a,b,c,d){var s=this
s.d=b
s.c=c
s.e=d
s.z=a},
bH(a,b,c){return this.cv(a,b,null,c)},
pU(a){return this.cv(a,null,null,null)},
ed(a,b,c){return this.cv(null,a,b,c)},
cu(a,b){return this.cv(a,null,null,b)},
ad(a){return this.cv(null,a,null,null)},
l7(a){return this.cv(null,null,null,a)},
fn(a,b){return this.cv(null,a,null,b)}}
A.nR.prototype={
a6(a){var s,r,q,p,o=this,n="item/"+a
$.bo().c6(n)
s=A.a(a.split("/"),t.s)
r=B.a.gcp(s)
o.ay!==$&&A.ay()
o.ay=r
if(B.a.G(s,"shield")||B.a.G(s,"light"))o.at="hand"
else if(B.a.G(s,"weapon")){o.at="hand"
r=B.a.c8(s,"weapon")+1
if(!(r>=0&&r<s.length))return A.b(s,r)
o.ax=s[r]}else for(q=0;q<8;++q){p=B.i9[q]
if(B.a.G(s,p)){o.at=p
break}}$.dJ().c6(n)
$.dK().c6(n)}}
A.pg.prototype={
E(a,b){var s,r=this
r.dy!==$&&A.ay()
r.dy=a
s=b==null?100:b
r.fr!==$&&A.ay()
r.fr=s},
v(a){return this.E(a,null)},
ks(a){var s
t.kc.a(a)
s=A.wB(this.Q+" intrinsic affix",null,0)
a.$1(s)
this.dx=s.er()},
a9(a,b){var s=$.b_.u().as
s.toString
this.ay=A.bf(null,s,a,null,null)
this.cx=b},
f4(a){this.ax=new A.bP("Provides "+a+" turns of food.",t.Y.a(new A.pm(a)))},
eY(a,b){var s,r,q
t.jP.a(a)
s=a.length
if(s===1){if(0>=s)return A.b(a,0)
r=a[0]===B.at?"exits":"items"}else r="exits and items"
q="Detects "+r
if(b!=null)q+=" up to "+A.J(b)+" steps away"
this.ax=new A.bP(q+".",t.Y.a(new A.pj(a,b)))},
hr(a){return this.eY(a,null)},
kR(a,b){this.ax=new A.bP("Perceives the location of monsters, even those that are otherwise hidden.",t.Y.a(new A.pr(b,a)))},
hO(a){return this.kR(a,5)},
bF(a){this.ax=new A.bP("Grantes resistance to "+a.t(0)+" for 40 turns.",t.Y.a(new A.ps(a)))},
kv(a,b){var s="Imparts knowledge of the dungeon up to "+a+" steps from the hero."
if(b)s+=" Illuminates the dungeon."
this.ax=new A.bP(s,t.Y.a(new A.pq(a,b)))},
hH(a){return this.kv(a,!1)},
hD(a,b){this.ax=new A.bP("Raises speed by "+a+" for "+b+" turns.",t.Y.a(new A.pn(a,b)))},
fm(a){this.ax=new A.bP("Attempts to teleport up to "+a+" steps away.",t.Y.a(new A.pt(a)))},
e_(a,b){this.ax=new A.bP("Instantly heals "+a+" lost health.",t.Y.a(new A.po(a,b)))},
kl(a){return this.e_(a,!1)},
dM(a,b,c,d){var s=A.bf(new A.aK(A.aT(b,B.y,B.W).a7(1)),c,d,a,3)
this.ax=new A.bP("Unleashes a ball of "+a.t(0)+" that inflicts "+d+" damage out to 3 steps from the hero.",t.Y.a(new A.ph(s)))
this.f=t.bj.a(new A.pi(s))},
dY(a,b,c,d,e){var s={},r=A.bf(new A.aK(A.aT(b,B.y,B.W).a7(1)),c,d,a,5),q=$.b3()
s.a=q
if(e)s.a=new A.ah(q.a|$.V().a)
this.ax=new A.bP("Unleashes a flow of "+a.t(0)+" that inflicts "+d+" damage out to 5 steps from the hero.",t.Y.a(new A.pk(s,r)))
this.f=t.bj.a(new A.pl(s,r))},
kj(a,b,c,d){return this.dY(a,b,c,d,!1)},
dd(a,b){this.r=a
if(b!=null)this.ax=new A.bP("Illuminates out to a range of "+A.J(b)+".",t.Y.a(new A.pp(b)))},
pu(a){return this.dd(a,null)},
er(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=A.cP($.b_.u().Q,a3.as,null),a5=a3.d
if(a5==null)a5=$.b_.u().d
if(a5!=null){s=A.aT(a3.Q.toLowerCase(),B.y,B.W).a7(1)
r=$.b_.u().as
A:{if(r!=null){q=A.xd(r,B.y)
break A}q="hits"
break A}p=a3.e
if(p==null)p=$.b_.u().e
o=a3.c
if(o==null)o=$.b_.u().c
if(o==null)o=$.az()
n=A.bf(new A.aK(s),q,a5,o,p)
p=$.b_.u().z
s=p==null?a3.z:p
if(s==null)s=0
q=a3.f
m=new A.rX(s,n,q==null?$.b_.u().f:q)}else m=null
s=a3.db?B.cs:B.W
s=A.aT(a3.Q,B.y,s)
q=a3.dy
q===$&&A.c()
p=$.x0
$.x0=p+1
o=$.b_.u().at
l=$.b_.u().ax
k=a3.ax
j=a3.ay
i=a3.ch
h=a3.cy
if(h==null)h=0
g=a3.b
if(g==null)g=$.b_.u().b
if(g==null)g=1
f=a3.dx
e=a3.CW
if(e==null)e=0
d=a3.cx
if(d==null)d=0
c=a3.r
if(c==null)c=$.b_.u().r
b=a3.w
if(b==null)b=$.b_.u().w
a=$.b_.u().ch
a0=$.b_.u().y
if(a0==null)a0=a3.y
a1=a3.db
a2=A.C(t.h,t.S)
if(c==null)c=0
if(b==null)b=0
a2.T(0,$.b_.u().a)
a2.T(0,a3.a)
return new A.aR(s,a4,q,p,o,a0===!0,l,k,j,m,i,h,a3.at,e,d,c,a,g,a2,b,f,a1)}}
A.pm.prototype={
$0(){return new A.eL(this.a)},
$S:93}
A.pj.prototype={
$0(){var s=this.a
return new A.eI(A.A2(s,A.N(s).c),this.b)},
$S:92}
A.pr.prototype={
$0(){return new A.f6(this.a,this.b)},
$S:91}
A.ps.prototype={
$0(){return new A.fe(40,this.a)},
$S:90}
A.pq.prototype={
$0(){return new A.f_(this.a,this.b)},
$S:83}
A.pn.prototype={
$0(){return A.wY(this.a,this.b)},
$S:80}
A.pt.prototype={
$0(){return A.xy(this.a)},
$S:77}
A.po.prototype={
$0(){return A.wZ(this.a,this.b)},
$S:76}
A.ph.prototype={
$0(){return A.xn(this.a)},
$S:75}
A.pi.prototype={
$1(a){return new A.fg(this.a,a)},
$S:74}
A.pk.prototype={
$0(){return new A.eP(this.b,this.a.a)},
$S:72}
A.pl.prototype={
$1(a){return new A.eO(this.b,a,this.a.a)},
$S:68}
A.pp.prototype={
$0(){return new A.eV(this.a)},
$S:57}
A.cn.prototype={
E(a,b){this.c=a
this.d=b==null?100:b},
v(a){return this.E(a,null)},
K(a,b){var s=t.Q.a(new A.nB(a)),r=t.oF.a(new A.nC(b))
this.at=s
this.ax=r},
a_(a,b,c){var s={}
s.a=c
if(c==null)s.a=a
this.f=new A.nA(s,a,b)},
b7(a,b){return this.a_(a,b,null)},
pD(a){return this.a_(a,null,null)},
pE(a,b){return this.a_(a,null,b)},
bC(a){this.r=new A.nz(a)},
bI(a){this.w=new A.nE(a)},
dR(a,b){t.i6.a(b)
t.lg.a(a)
if(b!=null)this.y=b
if(a!=null)this.z=a},
aE(a){return this.dR(null,a)},
dQ(a){return this.dR(a,null)},
cj(a,b){this.Q=a
this.ay.h(0,a,new A.ny(b))},
bB(a){return this.cj(a,null)},
bv(a,b){var s
t.lg.a(b)
s=this.ay
if(b!=null)s.h(0,a,b)
else s.h(0,a,new A.nD())},
R(a){return this.bv(a,null)},
er(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a,a0=b.b
if(a0!=null){s=$.bh
r=A.bn(a,"_","["+A.J(s)+"]")
for(s=r+" (",q=r,p=1;a0.cb(q)!=null;){++p
q=s+p+")"}}else q=a
o=B.i.dW(a," _")
n=B.i.l9(A.bn(a,"_",""))
s=$.wC
$.wC=s+1
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
if(l==null)l=A.vB()
if(k==null)k=A.nl()
if(j==null)j=A.vB()
if(i==null)i=A.nl()
if(g==null)g=A.nl()
if(h==null)h=$.az()
if(e==null)e=A.vB()
if(f==null)f=A.nl()
c=new A.ex(q,n,o,s,m,l,k,A.nl(),j,i,g,h,A.C(t.h,d),A.C(t.Z,d),f,e,b.CW)
b.ay.ae(0,c.glr())
b.ch.ae(0,c.glt())
return c}}
A.nB.prototype={
$1(a){return this.a},
$S:3}
A.nC.prototype={
$1(a){return this.a},
$S:18}
A.nA.prototype={
$0(){var s,r,q,p=$.n().aC(this.b,this.a.a),o=this.c
if(o!=null){s=0
for(;;){r=s+1
if(s<10){q=$.n()
q=q.a.a5(o)===0}else q=!1
if(!q)break;++p
s=r}}return p},
$S:2}
A.nz.prototype={
$1(a){A.r(a)
return this.a},
$S:18}
A.nE.prototype={
$1(a){A.r(a)
return this.a},
$S:3}
A.ny.prototype={
$1(a){var s
A.r(a)
s=this.a
return s==null?1:s},
$S:3}
A.nD.prototype={
$1(a){A.r(a)
return 1},
$S:3}
A.u4.prototype={
$1(a){A.r(a)
return this.a},
$S(){return this.b.i("0(d)")}}
A.uB.prototype={
$1(a){return this.a+A.r(a)*this.b},
$S:18}
A.hl.prototype={
aN(){return"ItemQuality."+this.b}}
A.tg.prototype={
j6(a,b,c){var s,r,q,p,o=null
if(c.dx&&a!=null)a.e.j(0,c)
s=c.db
if(s!=null)return new A.L(c,o,o,s.fw(),1)
if(c.e==null)return new A.L(c,o,o,o,1)
r=this.jt($.dJ(),c,b)
q=this.jt($.dK(),c,b)
if(r!=null&&q!=null&&$.n().U(4)!==0)if($.n().U(2)===0)r=o
else q=o
p=r==null?o:r.fw()
return new A.L(c,p,q==null?o:q.fw(),o,1)},
jt(a,b,c){var s,r
t.b_.a(a)
switch(this.b.a){case 0:s=B.iE
break
case 1:s=B.iQ
break
case 2:s=B.ix
break
default:s=null}r=A.w(c,0,100,s.a,s.b)
if($.n().aS(1)>r)return null
return a.pV(c,$.bo().lo(b.a.a7(1).a))}}
A.mH.prototype={
b2(a,b,c){var s
t.f.a(c)
s=this.c
if(s.dx&&a!=null&&a.e.G(0,s))return
c.$1(this.j6(a,b,s))},
$ibB:1}
A.na.prototype={
b2(a,b,c){t.f.a(c).$1(this.j6(a,b,this.nP(a,b)))},
nP(a,b){var s,r,q,p,o
switch(this.b.a){case 0:s=0
break
case 1:s=3
break
case 2:s=15
break
default:s=null}for(r=this.c,q=this.a,p=s;;){s=$.bo()
s=s.dk(q==null?b:q,null,r)
s.toString
o=s.dx
if(o&&a!=null&&a.e.G(0,s))continue
if(!o&&p>0){--p
continue}return s}},
$ibB:1}
A.aL.prototype={
b2(a,b,c){t.f.a(c)
if($.n().U(100)>=this.a)return
this.b.b2(a,b,c)},
$ibB:1}
A.il.prototype={
b2(a,b,c){var s,r,q
t.f.a(c)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q)s[q].b2(a,b,c)},
$ibB:1}
A.mQ.prototype={
lQ(a){a.ae(0,new A.tB(this))},
b2(a,b,c){var s
t.f.a(c)
s=this.a.i4(1)
if(s==null)return
s.b2(a,b,c)},
$ibB:1}
A.tB.prototype={
$2(a,b){var s,r=null
t.iZ.a(a)
A.bw(b)
s=this.a.a
s.ce(s.$ti.c.a(a),r,r,r,b,b,r)},
$S:54}
A.bI.prototype={
b2(a,b,c){var s,r,q,p,o
t.f.a(c)
s=this.a
r=s>3?4:5
if(s>6)r=3
q=$.n()
p=q.cS(s,B.c.A(s,2))+q.hY(0,r)
for(s=this.b,o=0;o<p;++o)s.b2(a,b,c)},
$ibB:1}
A.kc.prototype={}
A.ut.prototype={
$1(a){a.ch.h(0,B.a3,t.Q.a(A.fI(2,t.S)))
return a},
$S:52}
A.uC.prototype={
$2(a,b){A.a3(a)
A.bw(b)
this.a.h(0,A.a8(a,null,null),b)},
$S:56}
A.uD.prototype={
$1(a){a.a_(8,3,12)
a.dQ(A.a1())
a.ch.h(0,B.ae,t.Q.a(A.fI(2,t.S)))
a.bB($.df())
return a},
$S:52}
A.tf.prototype={
aW(a,b){var s=this
if(b==null){s.y=1
s.z=a}else{s.y=a
s.z=b}},
aR(a){return this.aW(a,null)}}
A.oH.prototype={}
A.jD.prototype={
kw(a){this.ag(new A.md(A.aO(a)),null,null)},
ag(a,b,c){if(c!=null){b.toString
a=new A.iI(b,c,a)}else if(b!=null)a=new A.iI(1,b,a)
B.a.j(this.fr,a)},
al(a,b,c){B.a.j(this.db,A.bf(null,a,b,c,null))},
D(a,b){return this.al(a,b,null)},
dU(a,b,c,d){var s=new A.aL(d,A.a8(a,this.CW+c,null))
if(b>1)s=A.vL(b,s)
B.a.j(this.dy,s)},
C(a,b){return this.dU(a,1,0,b)},
hw(a,b){return this.dU(a,b,0,100)},
eZ(a,b,c){return this.dU(a,b,c,100)},
p7(a,b,c){return this.dU(a,b,0,c)},
hx(a,b,c){return this.dU(a,1,b,c)},
kc(a,b,c,d){var s=new A.aL(d,A.a8(a,this.CW+c,B.hI))
if(b>1)s=A.vL(b,s)
B.a.j(this.dy,s)},
p8(a,b,c){return this.kc(a,b,c,100)},
hy(a,b,c){return this.kc(a,1,b,c)},
cT(a){B.a.j(this.x,"unique")
this.fx=a
this.ch=!0},
i5(){return this.cT(null)},
lh(a,b){return this.az(null,"whips",$.az(),a,2,b)},
bm(a,b,c,d){var s=$.fU()
this.az(s.m(0,a)[0],s.m(0,a)[1],a,b,c,d)},
c5(a,b,c,d){var s=$.fU(),r=s.m(0,a)[0]
s=s.m(0,a)[1]
if(c==null)c=10
B.a.j(this.dx,new A.dq(A.bf(new A.aK(A.aT(r,B.y,B.W).a7(1)),s,b,a,c),d))},
hC(a){B.a.j(this.dx,new A.kp(1,10,a))
return null},
pm(){return this.hC(5)},
az(a,b,c,d,e,f){B.a.j(this.dx,new A.h_(A.bf(a!=null?new A.aK(A.aT(a,B.y,B.W).a7(1)):null,b,d,c,e),f))}}
A.md.prototype={
cX(a,b){var s
t.or.a(b)
s=this.a.b
s===$&&A.c()
b.$1(s)},
$ie7:1}
A.ag.prototype={
cX(a,b){var s,r,q
t.or.a(b)
for(s=this.a,r=0;r<10;++r){q=$.ck().dk(a,!1,s)
if(q==null)continue
if(q.ax.f)continue
b.$1(q)
break}},
$ie7:1}
A.iI.prototype={
cX(a,b){var s,r,q,p,o
t.or.a(b)
s=this.b
r=s>3?4:5
if(s>6)r=3
q=$.n()
p=q.aC(this.a,s)+q.hY(0,r)
for(s=this.c,o=0;o<p;++o)s.cX(a,b)},
$ie7:1}
A.m6.prototype={
cX(a,b){var s,r,q
t.or.a(b)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q)s[q].cX(a,b)},
$ie7:1}
A.bz.prototype={
gbp(){var s=this.b.b
s===$&&A.c()
return s.f*0.5},
bL(a,b){return!1},
ig(a,b){var s,r=a.Q,q=$.n()
if(q.aS(2)<=b/r.f)return!0
r=a.z
s=a.Q
if(q.aS(2)<=r/s.f)return!0
return!1},
bW(a,b){var s,r=this.b.b
r===$&&A.c()
s=this.c.b
s===$&&A.c()
return new A.jp(r,s,this.d)},
t(a){var s,r=this.b.b
r===$&&A.c()
s=this.c.b
s===$&&A.c()
return"Amputate "+r.a.a+" + "+s.a.a}}
A.h_.prototype={
gbp(){var s=this.b
return s.c*s.e.e*(1+s.d/20)},
bL(a,b){var s,r,q,p
if((b.b.a>0||b.d.a>0)&&$.n().aS(1)<b.gdn()){s=B.e.N(A.w(b.gdn(),0,1,0,90))
if($.n().U(100)<s)return!1}r=a.y.y
q=r.S(0,b.y)
if(q.bi(0,this.b.d)){A.cs(b,"bolt move too far")
return!1}if(q.ei(0,1.5)){A.cs(b,"bolt move too close")
return!1}p=a.x
p===$&&A.c()
if(!p.oU(b,r)){A.cs(b,"bolt move can't target")
return!1}A.cs(b,"bolt move OK")
return!0},
bW(a,b){return A.uV(a.y.y,A.bO(this.b),!1,null)},
t(a){return"Bolt "+this.b.t(0)+" rate: "+this.a}}
A.dq.prototype={
gaD(){return this.b.d},
gbp(){var s=this.b
return s.c*3*s.e.e*(1+s.d/10)},
bL(a,b){var s,r,q
if((b.b.a>0||b.d.a>0)&&$.n().aS(1)<b.gdn()){s=B.e.N(A.w(b.gdn(),0,1,0,70))
if($.n().U(100)<s)return!1}r=a.y.y
if(r.S(0,b.y).bi(0,this.b.d)){A.cs(b,"cone move too far")
return!1}q=a.x
q===$&&A.c()
if(!q.eU(b,r)){A.cs(b,"cone move can't target")
return!1}A.cs(b,"cone move OK")
return!0},
bW(a,b){var s=b.y,r=a.y.y
return A.vb(A.bO(this.b),s,r,0.125)},
t(a){return"Cone "+this.b.t(0)+" rate: "+this.a}}
A.kp.prototype={
gbp(){return this.c*this.b},
bL(a,b){return b.f.a<=0},
bW(a,b){return A.wY(this.b,this.c)},
t(a){return"Haste "+this.b+" for "+this.c+" turns rate: "+this.a}}
A.hh.prototype={
gbp(){return this.b},
bL(a,b){var s=b.z,r=b.Q.f
return s/r<0.25||r-s>=this.b},
bW(a,b){return A.wZ(this.b,!1)},
t(a){return"Heal "+this.b+" rate: "+this.a}}
A.bY.prototype={
gbp(){return this.b*0.5},
bL(a,b){var s,r,q,p,o,n=a.x
n===$&&A.c()
s=b.y
s=n.f.B(s.gn(),s.gp())
if(!(!s.b&&s.d+s.e>s.c))return!1
for(n=n.b,s=n.length,r=b.y,q=this.b,p=0;p<s;++p){o=n[p]
if(o===b)continue
if(o instanceof A.ad&&o.at instanceof A.cp&&o.y.S(0,r).eh(0,q))return!0}return!1},
bW(a,b){var s=this.c
if(s==null)s="howls"
return new A.ks(this.b,s)},
t(a){return"Howl "+this.b}}
A.b8.prototype={
gbp(){return 0},
bL(a,b){var s,r=a.y.y
if(r.S(0,b.y).gb5()<=1)return!1
s=a.x
s===$&&A.c()
return s.eU(b,r)},
bW(a,b){return new A.kV(a.y,this.b)},
t(a){return this.b.t(0)+" rate: "+this.a}}
A.bT.prototype={
gbp(){return 6},
bL(a,b){var s,r,q,p,o,n,m,l,k,j,i=a.x
i===$&&A.c()
s=b.y
s=i.f.B(s.gn(),s.gp())
if(!(!s.b&&s.d+s.e>s.c))return!1
for(s=b.y.gbD(),r=s.length,q=b.e,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
n=b.cr()
if(i.bn(o,q.a>0?new A.ah(n.a|$.V().a):n)){m=i.w
l=o.a
k=o.b
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.b(j,l)
l=j[l]==null
m=l}else m=!1
if(m){m=i.f
l=o.a
k=o.b
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.b(j,l)
l=j[l].x===0
m=l}else m=!1
if(m)return!0}return!1},
bW(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.T,h=A.a([],i)
if(this.b)for(s=b.e,r=0;r<8;++r){q=B.a6[r]
p=a.x
p===$&&A.c()
o=b.y.F(0,q)
n=b.cr()
if(p.bn(o,s.a>0?new A.ah(n.a|$.V().a):n)){m=p.w
l=o.a
k=o.b
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.b(j,l)
l=j[l]==null
m=l}else m=!1
if(m){p=p.f
m=o.a
o=o.b
p.l(m,o)
l=p.a
m=o*p.b.b.a+m
if(!(m>=0&&m<l.length))return A.b(l,m)
m=l[m].x===0
p=m}else p=!1
if(!p)continue
p=new A.rf(a,b,q)
if(p.$1(q.gcQ()))B.a.T(h,A.a([q,q,q,q,q],i))
if(p.$1(q.gcQ().gba()))B.a.j(h,q)
if(p.$1(q.gcQ().gbb()))B.a.j(h,q)}if(h.length===0)for(i=b.e,r=0;r<8;++r){q=B.a6[r]
s=a.x
s===$&&A.c()
p=b.y.F(0,q)
n=b.cr()
if(s.bn(p,i.a>0?new A.ah(n.a|$.V().a):n)){o=s.w
m=p.a
l=p.b
o.l(m,l)
k=o.a
m=l*o.b.b.a+m
if(!(m>=0&&m<k.length))return A.b(k,m)
m=k[m]==null
o=m}else o=!1
if(o){s=s.f
o=p.a
p=p.b
s.l(o,p)
m=s.a
o=p*s.b.b.a+o
if(!(o>=0&&o<m.length))return A.b(m,o)
o=m[o].x===0
s=o}else s=!1
if(!s)continue
B.a.j(h,q)}i=b.y
s=$.n()
t.ez.a(h)
s=s.U(h.length)
if(!(s>=0&&s<h.length))return A.b(h,s)
return new A.lD(i.F(0,h[s]),b.Q)},
t(a){return"Spawn rate: "+this.a}}
A.rf.prototype={
$1(a){var s,r,q=this.a.x
q===$&&A.c()
s=this.b
r=s.y.F(0,this.c)
r=q.w.B(r.a,r.b)
return r!=null&&r instanceof A.ad&&r.Q===s.Q},
$S:9}
A.bF.prototype={
gbp(){return this.b*0.7},
bL(a,b){var s
if(b.at instanceof A.cH)return!0
s=a.y.y.S(0,b.y).gb5()
if(b.ay&&s<=1)return!1
return!0},
bW(a,b){return A.xy(this.b)},
t(a){return"Teleport "+this.b}}
A.k6.prototype={
gO(){return"Fairy Dust"},
gW(){return"A sprinkle of glimmering magic dazzles all nearby foes."}}
A.ka.prototype={
gO(){return"Flitter"},
gW(){return"Take flight and soar over the ground, at least until you get tired."}}
A.ll.prototype={
gO(){return"Quick Study"},
gW(){return"Gain 20% more experience when killing a monster."},
ky(a,b,c){return c*1.2}}
A.lB.prototype={
gO(){return"Single-minded"},
gW(){return"Reduce the focus lost when performing an ability by 30%."},
kz(a,b,c){if(c===0)return 0
c=B.e.bQ(c*0.7)
if(c===0)return 1
return c}}
A.dl.prototype={
bq(a){return"Cast "+this.b+" spells better."},
gO(){return this.b},
gcJ(){return this.c},
gW(){return this.d}}
A.jr.prototype={
gO(){return"Archery"},
gW(){return"Kill your foe without risking harm to yourself by unleashing a volley of arrows from far away."},
gcJ(){return B.b3},
bq(a){return"Scales strike by "+A.qw(A.w(a,1,15,1,3),null)+"."}}
A.jz.prototype={
gO(){return"Battle Hardening"},
gW(){return"Years of taking hits have turned your skin as hard as cured leather."},
gcJ(){return B.ay},
kx(a,b){return b+a.z.bU(this)*4},
bq(a){return"Increases armor by "+a*4+"."}}
A.jA.prototype={
gO(){return"Bloodlust"},
gW(){return"The more furious you are, the more deadly in combat you become."},
gcJ(){return B.ay},
hI(a,b,c,d){d.cW(A.wG(a.Q.z.bU(this))*a.CW,"Bloodlust")},
bq(a){return"Increases damage by "+A.qw(A.wG(a),1)+" for each point of fury."}}
A.hA.prototype={
gcJ(){return B.b4},
hI(a,b,c,d){if(c==null||c.a.r!==this.gby())return
d.cW(A.w(a.Q.z.bU(this),1,15,1.1,4),"mastery")},
bq(a){var s,r=A.qw(A.w(a,1,15,1.1,4)-1,null),q=this.gby()
if(0>=q.length)return A.b(q,0)
s=B.i.G("aeiou",q[0])?"an":"a"
return"Melee attacks inflict +"+r+" damage when using "+s+" "+this.gby()+"."}}
A.ju.prototype={
gO(){return"Axe Mastery"},
gW(){return"Axes are not just for woodcutting. In the hands of a skilled user, they can cut down a swath of nearby foes as well."},
gby(){return"axe"},
bq(a){return"TODO"}}
A.jB.prototype={
gO(){return"Bludgeoning"},
gW(){return"Bludgeons may not be the most sophisticated of weapons, but hitting someone really hard with a blunt object can often be an effective argument in your favor."},
gby(){return"club"},
bq(a){return this.ip(a)+" Bashes the enemy away."}}
A.kL.prototype={
gO(){return"Knife Fighting"},
gW(){return"Small and easily concealed, knives are deadly in the hand of a skilled practitioner."},
gby(){return"knife"},
bq(a){return"TODO"}}
A.lE.prototype={
gO(){return"Spear Mastery"},
gW(){return"Your diligent study of spears and polearms lets you attack at a distance when wielding one."},
gby(){return"spear"},
bq(a){return"TODO"}}
A.lK.prototype={
gO(){return"Swordfighting"},
gW(){return"The most elegant tool for the most refined of martial arts."},
gby(){return"sword"},
bq(a){return this.ip(a)+" Parrying increases dodge by "+B.e.P(A.w(a,1,15,5,30))+"."},
eX(a){return new A.S(this.p6(a),t.cm)},
p6(a){var s=this
return function(){var r=a
var q=0,p=1,o=[],n,m,l
return function $async$eX(b,c,d){if(c===1){o.push(d)
q=p}for(;;)switch(q){case 0:m=r.Q
l=m.z.bU(s)
m=m.f.gcU(),n=J.aw(m.a),m=new A.d6(n,m.b,m.$ti.i("d6<1>"))
case 2:if(!m.q()){q=3
break}q=n.gH().a.r==="sword"?4:5
break
case 4:q=6
return b.b=new A.aG(B.e.P(A.w(l,1,15,5,30)),"{1} parr[y|ies] {2}."),1
case 6:case 5:q=2
break
case 3:return 0
case 1:return b.c=o.at(-1),3}}}}}
A.m2.prototype={
gO(){return"Whip Mastery"},
gW(){return"Whips and flails are difficult to use well, but deadly even at a distance when mastered."},
gby(){return"whip"},
bq(a){return"TODO"}}
A.bS.prototype={
aN(){return"Region."+this.b}}
A.nI.prototype={
dN(a){return new A.S(this.oQ(t.jJ.a(a)),t.e)},
oQ(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$dN(a3,a4,a5){if(a4===1){o.push(a5)
q=p}for(;;)A:switch(q){case 0:for(n=s.b.f,m=n.b,l=A.ac(m),k=n.a,j=m.b.a,i=k.length;l.q();){h=l.b
g=l.c
n.l(h,g)
h=g*j+h
if(!(h>=0&&h<i)){A.b(k,h)
q=1
break A}k[h].a=$.ev()}f=A.zt(s.c)
d=f.length-1
for(;;){if(!(d>=0)){e=-1
break}if(f[d].w){e=d
break}--d}l=t.hY
c=A.a(B.hS.slice(0),l)
b=A.a([],l)
for(l=t.pj,d=0;d<f.length;++d)if(d===e||!f[d].w)B.a.j(b,B.cC)
else B.a.j(b,$.n().l3(0,c,l))
d=0
case 3:if(!(d<f.length)){q=5
break}l=f[d]
if(!(d<b.length)){A.b(b,d)
q=1
break}h=b[d]
a0=l.r.$0()
a0.a!==$&&A.ay()
a0.a=s
a0.b!==$&&A.ay()
a0.b=l
a0.c!==$&&A.ay()
a0.c=h
q=6
return a3.aO(a0.b0())
case 6:case 4:++d
q=3
break
case 5:for(m=J.aw(m.l8());m.q();){l=m.gH()
h=l.gn()
l=l.gp()
n.l(h,l)
h=l*j+h
if(!(h>=0&&h<i)){A.b(k,h)
q=1
break A}k[h].a=$.by()}a1=A.a([],t.l)
q=7
return a3.aO(s.iX(a1))
case 7:q=8
return a3.aO(s.iw(a1))
case 8:q=9
return a3.aO(s.iF(a1))
case 9:q=10
return a3.b="Ready to decorate",1
case 10:a2=new A.nZ(s,A.C(t.aT,t.A),A.b7(t.P))
q=11
return a3.aO(a2.k8())
case 11:n=a2.b
n===$&&A.c()
r.$1(n)
case 1:return 0
case 2:return a3.c=o.at(-1),3}}}},
dA(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.b.f,f=g.B(b,c)
f.a=d==null?$.cF():d;++this.e
f=this.d
f.aZ(b,c,a)
for(s=f.b,r=g.a,q=g.b.b.a,p=r.length,o=f.$ti.c,n=f.a,m=s.b.a,l=0;l<8;++l){k=B.a6[l]
j=k.c+b
i=k.d+c
if(s.G(0,new A.e(j,i))){g.l(j,i)
h=i*q+j
if(!(h>=0&&h<p))return A.b(r,h)
h=r[h].a!==$.dj()}else h=!1
if(h){o.a(a)
f.l(j,i)
B.a.h(n,i*m+j,a)}}},
dw(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b.f,c=d.b
if(!c.G(0,b))return!1
s=this.d
r=b.a
q=b.b
if(s.B(r,q)!=null)return!1
if(d.B(r,q).a===$.dj())return!1
for(r=b.gbD(),q=r.length,p=s.a,o=s.b.b.a,n=p.length,m=d.a,l=c.b.a,k=m.length,j=0;j<q;++j){i=r[j]
if(!c.G(0,i))continue
h=i.a
g=i.b
d.l(h,g)
f=g*l+h
if(!(f>=0&&f<k))return A.b(m,f)
if(m[f].a===$.dj())continue
s.l(h,g)
h=g*o+h
if(!(h>=0&&h<n))return A.b(p,h)
e=p[h]
if(e!=null&&e!==a)return!1}return!0},
iX(a){return new A.S(this.mH(t.A.a(a)),t.e)},
mH(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
return function $async$iX(b2,b3,b4){if(b3===1){o.push(b4)
q=p}for(;;)A:switch(q){case 0:b0=t.l
b1=A.a([],b0)
for(n=s.b,m=n.f,l=m.b,k=A.ac(l.bR(-1)),j=m.a,i=l.b,h=i.a,g=j.length,l=l.a,f=l.a,e=f+h,l=l.b,i=i.b,d=l+i,c=0,b=B.al,a0=99999;k.q();){a1=k.b
a2=k.c
a3=new A.e(a1,a2)
m.l(a1,a2)
a1=a2*h+a1
if(!(a1>=0&&a1<g)){A.b(j,a1)
q=1
break A}a4=j[a1].a
if(a4===$.cF()){++c
a1=a3.S(0,new A.e(B.c.A(Math.min(f,e)+Math.max(f,e),2),B.c.A(Math.min(l,d)+Math.max(l,d),2)))
a5=Math.abs(a1.a)+Math.abs(a1.b)
if(a5<a0){a0=a5
b=a3}}else if(!(a4!==$.ev()&&a4!==$.dj()))B.a.j(b1,a3)}l=$.n()
B.a.bM(t.A.a(b1),l.a)
l=t.S
k=h*i
f=A.an(k,-2,!1,l)
e=t.C
d=new A.aa(f,new A.a0(new A.e(0,0),new A.e(h,i)),e)
a6=new A.qH(n,b,d,new A.lY(new A.aa(A.an(k,0,!1,l),new A.a0(new A.e(0,0),new A.e(h,i)),e),h,i),B.cj)
a6.ci(b,0)
a6.jn(A.a([b],b0))
b0=b1.length,a7=0,a8=0
case 3:if(!(a8<b1.length)){q=5
break}a3=b1[a8]
n=a3.gn()
l=a3.gp()
m.l(n,l)
n=l*h+n
if(!(n>=0&&n<g)){A.b(j,n)
q=1
break}n=j[n]
l=n.a
i=l===$.ev()
if(!i&&l!==$.dj()){q=4
break}if(i)n.a=$.by()
else if(l===$.dj())n.a=$.di()
n=a3.gn()
l=a3.gp()
d.l(n,l)
n=l*h+n
if(!(n>=0&&n<k)){A.b(f,n)
q=1
break}n=f[n]
if(typeof n!=="number"){n.cV()
q=1
break}if(!(n>=0)){q=4
break}a6.pe(a3)
if(a6.e!==c){s.j7(r,a3)
a6.pX()}a9=a7+1
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
iw(a){return new A.S(this.lV(t.A.a(a)),t.e)},
lV(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3
return function $async$iw(a4,a5,a6){if(a5===1){o.push(a6)
q=p}for(;;)A:switch(q){case 0:a3=A.a([],t.hw)
for(n=s.b.f,m=n.b,l=A.ac(m.bR(-1)),k=n.a,m=m.b.a,j=k.length;l.q();){i=l.b
h=l.c
g=new A.e(i,h)
n.l(i,h)
i=h*m+i
if(!(i>=0&&i<j)){A.b(k,i)
q=1
break A}f=k[i].a
i=$.cF()
if(!(f===i||f===$.cG()||f===$.eu()))continue
for(e=0;e<4;++e){d=B.au[e]
h=g.F(0,d.gbG())
c=h.a
h=h.b
n.l(c,h)
c=h*m+c
if(!(c>=0&&c<j)){A.b(k,c)
q=1
break A}f=k[c].a
if(!(f===i||f===$.cG()||f===$.eu()))continue
h=g.F(0,d.gba())
c=h.a
h=h.b
n.l(c,h)
c=h*m+c
if(!(c>=0&&c<j)){A.b(k,c)
q=1
break A}f=k[c].a
h=$.by()
if(!(f===h||f===$.di()))continue
c=g.F(0,d)
b=c.a
c=c.b
n.l(b,c)
b=c*m+b
if(!(b>=0&&b<j)){A.b(k,b)
q=1
break A}f=k[b].a
if(!(f===h||f===$.di()))continue
c=g.F(0,d.gbb())
b=c.a
c=c.b
n.l(b,c)
b=c*m+b
if(!(b>=0&&b<j)){A.b(k,b)
q=1
break A}f=k[b].a
if(!(f===h||f===$.di()))continue
h=g.F(0,d.gbX())
c=h.a
h=h.b
n.l(c,h)
c=h*m+c
if(!(c>=0&&c<j)){A.b(k,c)
q=1
break A}f=k[c].a
if(!(f===i||f===$.cG()||f===$.eu()))continue
B.a.j(a3,new A.iH(g,d))}}n=$.n()
B.a.bM(t.pa.a(a3),n.a)
a0=n.bs(5,40)
n=a3.length,a1=0,e=0
case 3:if(!(e<a3.length)){q=5
break}a2=a3[e]
if(!s.oj(r,a2.a,a2.b)){q=4
break}q=6
return a4.b="Shortcut",1
case 6:++a1
if(a1>=a0){q=5
break}case 4:a3.length===n||(0,A.o)(a3),++e
q=3
break
case 5:case 1:return 0
case 2:return a4.c=o.at(-1),3}}}},
oj(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(!(j>=0&&j<l))return A.b(o,j)
h=o[j].a
if(h===$.cF()||h===$.cG()||h===$.eu()){p=s.length
o=$.n()
if(!new A.tz(p*2+(o.a.a5(8)+8),q,b,k).ft()){for(q=s.length,g=0;g<s.length;s.length===q||(0,A.o)(s),++g)this.j7(a,s[g])
return!0}return!1}j=k.F(0,c.gbG())
i=j.a
j=j.b
p.l(i,j)
i=j*m+i
if(!(i>=0&&i<l))return A.b(o,i)
h=o[i].a
j=$.by()
if(!(h===j||h===$.di()))return!1
i=k.F(0,c.gbX())
f=i.a
i=i.b
p.l(f,i)
f=i*m+f
if(!(f>=0&&f<l))return A.b(o,f)
h=o[f].a
if(!(h===j||h===$.di()))return!1
j=$.n()
i=s.length
if(j.a.a5(100)<i*10)return!1}},
j7(a,b){var s,r,q
t.A.a(a)
s=this.b.f.B(b.gn(),b.gp())
r=s.a
if(r===$.by())s.a=$.cG()
else if(r===$.di())s.a=$.eu()
q=this.d.B(b.gn(),b.gp())
if(q==null)B.a.j(a,b)
else this.iE(b,q)},
iF(a){return new A.S(this.m9(t.A.a(a)),t.e)},
m9(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3,a4,a5,a6
return function $async$iF(a7,a8,a9){if(a8===1){o.push(a9)
q=p}for(;;)A:switch(q){case 0:n=s.d,m=n.a,l=n.b.b.a,k=m.length,j=t.dr,i=n.$ti.c,h=t.hA,g=t.l
case 3:f=A.a([],g)
for(e=r.length,d=0;d<r.length;r.length===e||(0,A.o)(r),++d){c=r[d]
b=A.a([],j)
for(a0=c.gbD(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,A.o)(a0),++a2){a3=a0[a2]
a4=a3.a
a5=a3.b
n.l(a4,a5)
a4=a5*l+a4
if(!(a4>=0&&a4<k)){A.b(m,a4)
q=1
break A}a6=m[a4]
if(a6!=null)B.a.j(b,a6)}a0=b.length
if(a0!==0){a1=$.n()
h.a(b)
a0=a1.a.a5(a0)
if(!(a0>=0&&a0<b.length)){A.b(b,a0)
q=1
break A}a6=b[a0]
i.a(a6)
a0=c.gn()
a1=c.gp()
n.l(a0,a1)
B.a.h(m,a1*l+a0,a6)
s.iE(c,a6)}else B.a.j(f,c)}if(f.length===0){q=5
break}q=6
return a7.b="Claim",1
case 6:case 4:r=f
q=3
break
case 5:case 1:return 0
case 2:return a7.c=o.at(-1),3}}}},
iE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.gbD(),r=s.length,q=this.d,p=q.a,o=q.b.b.a,n=p.length,m=q.$ti.c,l=0;l<s.length;s.length===r||(0,A.o)(s),++l){k=s[l]
j=k.a
i=k.b
q.l(j,i)
h=i*o+j
if(!(h>=0&&h<n))return A.b(p,h)
if(p[h]==null){m.a(b)
q.l(j,i)
B.a.h(p,h,b)}}}}
A.iH.prototype={}
A.bj.prototype={
gfg(){return $.w_()},
fA(a){return!1}}
A.tz.prototype={
hQ(a){if(a.c>=this.d)return!1
return null},
hS(a){return!0},
fB(a,b){var s=$.bM()
if((b.a.e.a&s.a)!==0)return 1
return null},
i6(){return!1}}
A.fY.prototype={}
A.u3.prototype={
$0(){return new A.eK(this.a)},
$S:58}
A.tZ.prototype={
$0(){return new A.eD(0.3,8,32)},
$S:59}
A.u_.prototype={
$0(){return new A.eE()},
$S:60}
A.ug.prototype={
$0(){return new A.eY()},
$S:61}
A.uu.prototype={
$0(){return new A.fi()},
$S:62}
A.uf.prototype={
$0(){return A.A_(5)},
$S:63}
A.uo.prototype={
$0(){var s=A.a([],t.l)
return new A.f7(this.a,12,24,s)},
$S:64}
A.eD.prototype={
b0(){return new A.S(this.oI(),t.e)},
oI(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
return function $async$b0(a6,a7,a8){if(a7===1){p.push(a8)
r=q}for(;;)switch(r){case 0:a5=s.a
a5===$&&A.c()
o=a5.b.f.b.b
n=o.b
o=o.a
m=Math.sqrt(Math.min(Math.min(s.f,n),o))
l=Math.min(Math.sqrt(s.e),m)
k=s.d
j=(o-2)*(n-2)
i=0
case 2:if(!(a5.e/j<k&&i<100)){r=3
break}h=A.nO(B.e.N(Math.pow($.n().aF(l,m),2)))
f=h.b.b
e=f.a
f=f.b
d=o-e
c=n-f
b=0
case 4:if(!(b<400)){g=!1
r=5
break}a=s.c
a===$&&A.c()
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
break}a=$.n()
a=a.a
a4=a.a5(a3-a0)
r=s.m5(h,a4+a0,a.a5(a2-a1)+a1)?7:8
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
m5(a,b,c){var s,r,q,p,o,n,m,l,k=this
t.b.a(a)
for(s=a.b,r=A.ac(s),q=a.a,p=s.b.a,o=q.length;r.q();){n=r.b
m=r.c
a.l(n,m)
l=m*p+n
if(!(l>=0&&l<o))return A.b(q,l)
if(q[l]){l=k.a
l===$&&A.c()
if(!l.dw(k,new A.e(n+b,m+c)))return!1}}for(s=A.ac(s);s.q();){r=s.b
n=s.c
a.l(r,n)
m=n*p+r
if(!(m>=0&&m<o))return A.b(q,m)
if(q[m]){m=k.a
m===$&&A.c()
m.dA(k,r+b,n+c,null)}}return!0}}
A.eE.prototype={
b0(){return new A.S(this.oJ(),t.e)},
oJ(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
return function $async$b0(a9,b0,b1){if(b0===1){p.push(b1)
r=q}for(;;)A:switch(r){case 0:a8=s.a
a8===$&&A.c()
o=a8.b.f.b.b
n=o.a
o=o.b
m=t.fU
l=new A.a0(new A.e(0,0),new A.e(n,o))
k=n*o
j=A.an(k,null,!1,m)
i=t.eJ
h=new A.aa(j,l,i)
g=new A.aa(A.an(k,null,!1,m),new A.a0(new A.e(0,0),new A.e(n,o)),i)
for(o=A.ac(l);o.q();){m=o.b
l=o.c
f=new A.e(m,l)
if(!a8.dw(s,f))continue
k=$.n().aS(1)
i=s.c
i===$&&A.c()
i=s.mi(i,f)
h.l(m,l)
B.a.h(j,l*n+m,k<i)}e=0
case 3:if(!(e<4)){r=5
break}for(o=h.b,n=o.a,n=new A.cX(o,n.a-1,n.b),m=g.$ti.c,l=g.a,k=g.b.b.a,j=h.a,i=o.b.a,c=j.length;n.q();){b=n.b
a=n.c
h.l(b,a)
a0=a*i+b
if(!(a0>=0&&a0<c)){A.b(j,a0)
r=1
break A}if(j[a0]==null)continue
for(a1=new A.e(b,a).gbD(),a2=a1.length,a3=0,a4=0;a4<a1.length;a1.length===a2||(0,A.o)(a1),++a4){a5=a1[a4]
if(o.G(0,a5)){a6=a5.a
a7=a5.b
h.l(a6,a7)
a6=a7*i+a6
if(!(a6>=0&&a6<c)){A.b(j,a6)
r=1
break A}a6=!J.a9(j[a6],!1)}else a6=!0
if(a6)++a3}h.l(b,a)
a0=j[a0]
a0.toString
a1=a*k+b
if(a0){a0=m.a(a3>=3)
g.l(b,a)
B.a.h(l,a1,a0)}else{a0=m.a(a3>=5)
g.l(b,a)
B.a.h(l,a1,a0)}}r=6
return a9.b="Round",1
case 6:case 4:++e,d=g,g=h,h=d
r=3
break
case 5:for(o=h.b,n=A.ac(o),m=h.a,o=o.b.a,l=m.length;n.q();){k=n.b
j=n.c
h.l(k,j)
i=j*o+k
if(!(i>=0&&i<l)){A.b(m,i)
r=1
break A}if(J.a9(m[i],!1))a8.dA(s,k,j,null)}case 1:return 0
case 2:return a9.c=p.at(-1),3}}}},
mi(a,b){var s,r,q,p=this
switch(a.a){case 0:return 0.45
case 1:s=p.a
s===$&&A.c()
return A.w(b.b,0,s.b.f.b.b.b,0.3,0.7)
case 2:s=p.a
s===$&&A.c()
s=s.b.f.b.b
r=s.a
return A.w(Math.max(r-b.a-1,b.b),0,Math.min(r,s.b),0.3,0.7)
case 3:s=p.a
s===$&&A.c()
return A.w(b.a,0,s.b.f.b.b.a,0.3,0.7)
case 4:s=p.a
s===$&&A.c()
s=s.b.f.b.b
r=s.a
s=s.b
return A.w(Math.max(r-b.a-1,s-b.b-1),0,Math.min(r,s),0.3,0.7)
case 5:s=p.a
s===$&&A.c()
return A.w(b.b,0,s.b.f.b.b.b,0.7,0.3)
case 6:s=p.a
s===$&&A.c()
s=s.b.f.b.b
r=s.b
return A.w(Math.max(b.a,r-b.b-1),0,Math.min(s.a,r),0.3,0.7)
case 7:s=p.a
s===$&&A.c()
return A.w(b.a,0,s.b.f.b.b.a,0.7,0.3)
case 8:q=Math.max(b.a,b.b)
s=p.a
s===$&&A.c()
s=s.b.f.b.b
return A.w(q,0,Math.min(s.a,s.b),0.3,0.7)}}}
A.nZ.prototype={
k8(){return new A.S(this.p0(),t.e)},
p0(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
return function $async$k8(a0,a1,a2){if(a1===1){p.push(a2)
r=q}for(;;)A:switch(r){case 0:s.mK()
for(o=s.a,n=o.b,m=n.f,l=m.b,k=A.ac(l),o=o.d,j=o.a,i=o.b.b.a,h=j.length,g=s.c;k.q();){f=k.b
e=k.c
o.l(f,e)
d=e*i+f
if(!(d>=0&&d<h)){A.b(j,d)
r=1
break A}J.wz(g.b8(j[d],new A.o2()),new A.e(f,e))}s.nx()
r=3
return a0.aO(s.jj())
case 3:c=$.n().bs(2,4)
for(o=m.a,l=l.b.a,k=o.length,b=0;b<c;++b){a=n.kh()
j=a.a
i=a.b
m.l(j,i)
j=i*l+j
if(!(j>=0&&j<k)){A.b(o,j)
r=1
break A}o[j].a=$.uP()}o=n.kh()
s.b!==$&&A.ay()
s.b=o
r=4
return a0.aO(s.jv())
case 4:r=5
return a0.aO(s.iV())
case 5:case 1:return 0
case 2:return a0.c=p.at(-1),3}}}},
mK(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.a([],t.l)
for(s=this.a.b.f,r=s.b,q=A.ac(r.bR(-1)),p=s.a,r=r.b.a,o=p.length;q.q();){n=q.b
m=q.c
l=new A.e(n,m)
s.l(n,m)
k=m*r+n
if(!(k>=0&&k<o))return A.b(p,k)
if(p[k].a!==$.cG())continue
for(j=0;j<4;++j){i=B.au[j]
h=l.F(0,i)
g=h.a
h=h.b
s.l(g,h)
g=h*r+g
if(!(g>=0&&g<o))return A.b(p,g)
g=p[g].a
h=$.cF()
if(g!==h)continue
g=l.F(0,i.gcQ())
f=g.a
g=g.b
s.l(f,g)
f=g*r+f
if(!(f>=0&&f<o))return A.b(p,f)
e=p[f].a
if(e!==h&&e!==$.cG()&&e!==$.j8())continue
h=l.F(0,i.gbG())
g=h.a
h=h.b
s.l(g,h)
g=h*r+g
if(!(g>=0&&g<o))return A.b(p,g)
g=p[g].a
h=$.by()
if(g!==h)continue
g=l.F(0,i.gbX())
f=g.a
g=g.b
s.l(f,g)
f=g*r+f
if(!(f>=0&&f<o))return A.b(p,f)
if(p[f].a!==h)continue
s.l(n,m)
p[k].a=$.j8()
B.a.j(a,l)
break}}q=$.n()
B.a.bM(t.A.a(a),q.a)
for(q=a.length,j=0;j<a.length;a.length===q||(0,A.o)(a),++j){d=a[j]
n=d.gn()
m=d.gp()
s.l(n,m)
n=m*r+n
if(!(n>=0&&n<o))return A.b(p,n)
n=p[n].a
m=$.j8()
if(n!==m)continue
for(n=d.gdO(),k=n.length,c=0;c<n.length;n.length===k||(0,A.o)(n),++c){b=n[c]
h=b.a
g=b.b
s.l(h,g)
h=g*r+h
if(!(h>=0&&h<o))return A.b(p,h)
if(p[h].a===m){h=$.n()
h=h.a.a5(2)===0?d:b
g=h.gn()
h=h.gp()
s.l(g,h)
g=h*r+g
if(!(g>=0&&g<o))return A.b(p,g)
p[g].a=$.cG()}}}},
nx(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(s=this.c,s=new A.br(s,A.y(s).i("br<1,2>")).gL(0),r=this.a;s.q();){q=s.d
p=q.a
o=$.w_()
if(p!=null)o=p.gfg()
n=new A.hK(this,r,p)
for(m=J.aw(q.b),l=r.b.f,k=l.a,j=l.b.b.a,i=k.length;m.q();){h=m.gH()
g=o.pC(n,h)
f=h.gn()
h=h.gp()
l.l(f,h)
f=h*j+f
if(!(f>=0&&f<i))return A.b(k,f)
k[f].a=g;++n.d}}},
jj(){return new A.S(this.nz(),t.e)},
nz(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
return function $async$jj(a5,a6,a7){if(a6===1){p.push(a7)
r=q}for(;;)switch(r){case 0:o=s.c,o=new A.br(o,A.y(o).i("br<1,2>")).gL(0),n=s.a,m=n.c,l=t.A
case 3:if(!o.q()){r=4
break}k=o.d
j=k.a
if(j==null){r=3
break}i=J.jm(k.b)
h=$.n()
B.a.bM(l.a(i),h.a)
g=new A.hK(s,n,j)
f=i.length
e=j.b
e===$&&A.c()
f*=e.c
d=B.e.bQ(f)
if(h.aS(1)<f-d)++d
c=B.e.aV(h.aF(d*0.8,d*1.2))
b=0
case 5:a=b+1
if(!(b<c&&g.d<c)){r=6
break}a0=A.zH(m,e.b)
if(a0==null){r=7
break}a1=0
case 8:if(!(a1<i.length)){r=10
break}a2=i[a1]
if(!a0.oT(g,a2)){r=9
break}a0.pF(g,a2)
h=$.n()
a3=i.length
a4=h.a.a5(a3-a1)+a1
h=i.length
if(!(a4>=0&&a4<h)){A.b(i,a4)
r=1
break}f=i[a4]
if(!(a1<h)){A.b(i,a1)
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
jv(){return new A.S(this.o_(),t.e)},
o_(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
return function $async$jv(a9,b0,b1){if(b0===1){p.push(b1)
r=q}for(;;)A:switch(r){case 0:a8=A.b7(t.g_)
for(o=s.c,o=new A.c9(o,o.r,o.e,A.y(o).i("c9<1>")),n=s.a;o.q();){m=o.d
if(m==null)continue
if(m.fA(new A.hK(s,n,m)))a8.j(0,m)}o=n.b
m=o.f
l=m.b
k=l.b
j=k.a
k=k.b
i=new A.jX(new A.aa(A.an(j*k,0,!1,t.S),new A.a0(new A.e(0,0),new A.e(j,k)),t.C))
k=s.b
k===$&&A.c()
h=A.cw(o,k,$.vX(),!1,null,null)
for(o=A.ac(l.bR(-1)),l=n.d,k=l.a,g=l.b.b.a,f=k.length;o.q();){e=o.b
d=o.c
c=new A.e(e,d)
l.l(e,d)
e=d*g+e
if(!(e>=0&&e<f)){A.b(k,e)
r=1
break A}e=k[e]
if(e==null)continue
if(a8.G(0,e))continue
b=h.ck(c)
if(b==null)continue
if(b<10)continue
d=Math.sqrt(b-10)
e=e.b
e===$&&A.c()
i.h(0,c,B.e.N((4+d)*e.e))}o=i.c
e=$.n()
a=o*0.03*e.aF(1,1.4)
o=m.a,d=o.length,n=n.c,a0=t.m,a1=0
case 3:if(!(a1<a)){r=4
break}c=i.eV()
if(c==null){r=4
break}a2=c.a
a3=c.b
l.l(a2,a3)
a4=a3*g+a2
if(!(a4>=0&&a4<f)){A.b(k,a4)
r=1
break}a4=k[a4].b
a4===$&&A.c()
a4=a0.a(a4.d)
a5=a4.length
a6=e.a.a5(a5)
if(!(a6>=0&&a6<a4.length)){A.b(a4,a6)
r=1
break}a7=a4[a6]
a6=$.ck().lb(n,a7)
a6.toString
m.l(a2,a3)
a2=a3*j+a2
if(!(a2>=0&&a2<d)){A.b(o,a2)
r=1
break}if((o[a2].a.e.a&a6.at.a)===0){r=3
break}if(!s.fM(a6)){r=3
break}a8=s.he(i,c,a6)
r=5
return a9.b="Spawned monster",1
case 5:a1+=a8
r=3
break
case 4:case 1:return 0
case 2:return a9.c=p.at(-1),3}}}},
k0(a,b,c){var s
for(;;){s=$.ck().dk(a,b,c)
s.toString
if(this.fM(s))return s}},
fM(a){if(!a.ax.f)return!0
if(this.a.a.el(a)>0)return!1
if(this.d.G(0,a))return!1
return!0},
he(a,b,c){var s,r,q,p,o,n,m,l=null,k={},j=!c.ax.f&&$.n().U(10)===0
k.a=0
s=new A.o1(k,this,j,a)
r=c.lz()
if(0>=r.length)return A.b(r,0)
s.$2(r[0],b)
for(q=A.Az(r,1,l,A.N(r).c),p=q.$ti,q=new A.ca(q,q.gI(0),p.i("ca<aI.E>")),o=this.a.b,p=p.i("aI.E");q.q();){n=q.d
if(n==null)n=p.a(n)
m=A.cw(o,b,n.at,l,l,l).gcN().hB(0,new A.o_(),new A.o0())
if(m.Y(0,new A.e(-1,-1)))break
s.$2(n,m)}return k.a},
iV(){return new A.S(this.mA(),t.e)},
mA(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
return function $async$iV(a7,a8,a9){if(a8===1){p.push(a9)
r=q}for(;;)A:switch(r){case 0:a1=s.a
a2=a1.b
a3=a2.f
a4=a3.b
a5=a4.b
a6=a5.a
a5=a5.b
o=new A.jX(new A.aa(A.an(a6*a5,0,!1,t.S),new A.a0(new A.e(0,0),new A.e(a6,a5)),t.C))
a5=s.b
a5===$&&A.c()
n=A.cw(a2,a5,$.bM(),!1,null,null)
for(a4=A.ac(a4.bR(-1)),a5=a3.a,m=a5.length,l=a1.d,k=l.a,j=l.b.b.a,i=k.length;a4.q();){h=a4.b
g=a4.c
f=new A.e(h,g)
l.l(h,g)
e=g*j+h
if(!(e>=0&&e<i)){A.b(k,e)
r=1
break A}e=k[e]
if(e==null)continue
d=n.ck(f)
if(d==null)continue
a3.l(h,g)
h=g*a6+h
if(!(h>=0&&h<m)){A.b(a5,h)
r=1
break A}if((a5[h].a.e.a&$.b3().a)===0)continue
h=Math.sqrt(d+1)
e=e.b
e===$&&A.c()
o.h(0,f,B.e.N((10+h)*e.f))}a1=a1.c
c=o.c*(0.05+(a1-1)*0.05)
c+=$.n().aS(c*0.2)
b=0
case 3:if(!(b<c)){r=4
break}f=o.eV()
if(f==null){r=4
break}a=a2.e6(f,$.wx().i4(a1).b,a1)
for(a3=a.length,a0=0;a0<a.length;a.length===a3||(0,A.o)(a),++a0)b+=Math.max(a[a0].gbg(),1)
o.kW(a2,f,$.bM(),3)
r=5
return a7.b="Spawned item",1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a7.c=p.at(-1),3}}}}}
A.o2.prototype={
$0(){return A.a([],t.l)},
$S:38}
A.o1.prototype={
$2(a,b){var s=this,r=s.b,q=r.a.b
if(q.w.B(b.gn(),b.gp())!=null)return
if(!r.fM(a))return
if(a.ax.f)r.d.j(0,a)
if(s.c)q.e6(b,a.Q,a.c)
else{q.dK(a.ik(b));++s.a.a
r=s.d
if(r!=null)r.kW(q,b,$.vX(),5)}},
$S:65}
A.o_.prototype={
$1(a){t.u.a(a)
return!0},
$S:1}
A.o0.prototype={
$0(){return new A.e(-1,-1)},
$S:66}
A.jX.prototype={
h(a,b,c){var s=this,r=s.a,q=r.B(b.gn(),b.gp())
s.b=s.b-q+c
r.$ti.c.a(c)
r.aZ(b.gn(),b.gp(),c)
if(q===0&&c>0)++s.c
if(q>0&&c===0)--s.c},
eV(){var s,r,q,p,o,n,m,l,k,j=this.b
if(j===0)return null
s=$.n().U(j)
for(j=this.a,r=j.b,q=A.ac(r),p=j.a,r=r.b.a,o=p.length;q.q();){n=q.b
m=q.c
l=new A.e(n,m)
j.l(n,m)
n=m*r+n
if(!(n>=0&&n<o))return A.b(p,n)
k=p[n]
if(s<k)return l
s-=k}throw A.m(A.bN("Unreachable."))},
kW(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
this.h(0,b,0)
s=A.cw(a,b,c,null,null,d)
for(r=s.gcN(),q=r.$ti,r=new A.ak(r.a(),q.i("ak<1>")),p=this.a,o=p.a,n=p.b.b.a,m=o.length,q=q.c;r.q();){l=r.b
if(l==null)l=q.a(l)
k=s.ck(l)
k.toString
j=l.gn()
i=l.gp()
p.l(j,i)
j=i*n+j
if(!(j>=0&&j<m))return A.b(o,j)
this.h(0,l,B.e.N(o[j]*(k/d)))}}}
A.eK.prototype={
gfg(){return $.yW()},
b0(){return new A.S(this.oK(),t.e)},
oK(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
return function $async$b0(a2,a3,a4){if(a3===1){p.push(a4)
r=q}for(;;)switch(r){case 0:a0=s.w
a1=0
case 2:o=s.a
o===$&&A.c()
n=o.b.f.b.b
m=n.a
n=n.b
if(!(o.e/((m-2)*(n-2))<0.25&&a1<100)){r=3
break}l=A.vd(o.c,a0)
o=l.b.b
j=o.a
o=o.b
i=m-j
h=n-o
g=0
case 4:if(!(g<400)){k=!1
r=5
break}f=s.c
f===$&&A.c()
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
b=i}f=$.n()
f=f.a
a=f.a5(b-e)
r=s.mB(l,a+e,f.a5(c-d)+d)?6:7
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
mB(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.o.a(a)
if(!h.jY(a,b,c))return!1
for(s=a.b,r=A.ac(s),q=a.a,s=s.b.a,p=q.length;r.q();){o=r.b
n=r.c
m=o+b
l=n+c
a.l(o,n)
o=n*s+o
if(!(o>=0&&o<p))return A.b(q,o)
k=q[o]
o=k.a
if(!(o==null&&k.b===B.r)&&o!==$.by()&&k.b===B.r){n=h.a
n===$&&A.c()
n.dA(h,m,l,o)}else{n=$.by()
if(o===n){o=h.a
o===$&&A.c()
o=o.b.f
o.l(m,l)
j=o.a
i=l*o.b.b.a+m
if(!(i>=0&&i<j.length))return A.b(j,i)
if(j[i].a===$.ev()){o.l(m,l)
j[i].a=n}}}}return!0}}
A.eX.prototype={
gfg(){return $.yX()},
b0(){return new A.S(this.oL(),t.e)},
oL(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$b0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:m=s.c
m===$&&A.c()
o=m===B.cC&&s.x==null?20:1
n=0
case 2:if(!(n<o)){r=4
break}r=5
return a.aO(s.j1())
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
fA(a){var s,r,q,p,o,n,m,l,k,j=a.a,i=j.c.m(0,a.c)
i.toString
i=J.zr(i,new A.pR(a))
s=A.a6(i,i.$ti.i("k.E"))
i=$.n().a
B.a.bM(t.A.a(s),i)
for(r=s.length,q=a.b.c,p=t.m,o=0;o<s.length;s.length===r||(0,A.o)(s),++o){n=s[o]
if(i.a5(20)!==0)continue
m=this.b
m===$&&A.c()
m=p.a(m.d)
l=m.length
k=i.a5(l)
if(!(k>=0&&k<m.length))return A.b(m,k)
j.he(null,n,j.k0(q,null,m[k]))}return!0},
j1(){return new A.S(this.mX(),t.e)},
mX(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g
return function $async$j1(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:if(!s.oi()){r=1
break}o=s.r,n=o.c,m=o.b,l=s.x,k=l!=null
case 3:if(!(n.length!==0)){r=4
break}j=o.pS()
i=j.a
h=i.F(0,j.b)
g=s.a
g===$&&A.c()
if(!g.dw(s,h)){r=3
break}r=s.og(j)?5:7
break
case 5:r=8
return a.b="Room",1
case 8:i=++s.w
if(k&&i>=l){r=4
break}r=6
break
case 7:if(j.c<5){m.h(0,i,j)
B.a.j(n,j)}case 6:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
oi(){var s,r,q,p=this.a
p===$&&A.c()
s=A.vd(p.c,B.bH)
for(r=0;r<100;++r){q=this.o1(s)
if(this.jE(s,q.a,q.b))return!0}return!1},
o1(a){var s,r,q,p,o,n,m,l,k
t.o.a(a)
s=this.a
s===$&&A.c()
s=s.b.f.b.b
r=s.a
q=a.b.b
p=q.a
o=r-p-1
s=s.b
q=q.b
n=s-q-1
m=this.c
m===$&&A.c()
m=m.a
l=1
switch(m){case 8:case 1:case 2:n=Math.max(1,B.e.N(s*0.25)-q)
break
case 6:case 5:case 4:l=B.e.N(s*0.75)
break
case 0:case 3:case 7:break}k=1
switch(m){case 8:case 7:case 6:o=Math.max(1,B.e.N(r*0.25)-p)
break
case 2:case 3:case 4:k=B.e.N(r*0.75)
break
case 0:case 1:case 5:break}if(o<k)o=k
if(n<l)n=l
s=$.n()
return new A.e(s.bs(k,o),s.bs(l,n))},
nE(a){var s=this,r=new A.pP(s),q=s.c
q===$&&A.c()
switch(q.a){case 0:q=1
break
case 1:q=s.a
q===$&&A.c()
q=A.w(a.b,0,q.b.f.b.b.b,2,-3)
break
case 2:q=s.a
q===$&&A.c()
q=r.$2(q.b.f.b.b.a-a.a-1,a.b)
break
case 3:q=s.a
q===$&&A.c()
q=A.w(a.a,0,q.b.f.b.b.a,-3,2)
break
case 4:q=s.a
q===$&&A.c()
q=q.b.f.b.b
q=r.$2(q.a-a.a-1,q.b-a.b-1)
break
case 5:q=s.a
q===$&&A.c()
q=A.w(a.b,0,q.b.f.b.b.b,-3,2)
break
case 6:q=s.a
q===$&&A.c()
q=r.$2(a.a,q.b.f.b.b.b-a.b-1)
break
case 7:q=s.a
q===$&&A.c()
q=A.w(a.a,0,q.b.f.b.b.a,2,-3)
break
case 8:q=r.$2(a.a,a.b)
break
default:q=null}return $.n().aS(1)<q},
og(a){var s,r,q,p,o,n,m=this.a
m===$&&A.c()
s=A.vd(m.c,B.bH)
m=s.b
r=A.y(m)
q=r.i("ap<k.E>")
p=A.a6(new A.ap(m,r.i("z(k.E)").a(new A.pQ(s,a.b.gcQ())),q),q.i("k.E"))
m=$.n()
B.a.bM(t.A.a(p),m.a)
for(m=p.length,r=a.a,o=0;o<p.length;p.length===m||(0,A.o)(p),++o){n=r.S(0,p[o])
if(this.jE(s,n.a,n.b))return!0}return!1},
jE(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
t.o.a(a0)
if(!a.jY(a0,a1,a2))return!1
s=A.a([],t.fv)
for(r=a0.b,q=A.ac(r),p=a0.a,r=r.b.a,o=p.length,n=a.r,m=n.b,n=n.c;q.q();){l=q.b
k=q.c
j=l+a1
i=k+a2
h=new A.e(j,i)
a0.l(l,k)
l=k*r+l
if(!(l>=0&&l<o))return A.b(p,l)
g=p[l]
l=g.b
if(l!==B.r){if(a.nE(h))B.a.j(s,new A.eW(h,l))}else{l=g.a
if(l!=null)k=l!==$.by()
else k=!1
if(k){k=a.a
k===$&&A.c()
k.dA(a,j,i,l)}else{k=$.by()
if(l===k){l=a.a
l===$&&A.c()
l=l.b.f
l.l(j,i)
f=l.a
e=i*l.b.b.a+j
if(!(e>=0&&e<f.length))return A.b(f,e)
if(f[e].a===$.ev()){l.l(j,i)
f[e].a=k}d=m.ah(0,h)
if(d!=null)B.a.ah(n,d)}}}}r=$.n()
B.a.bM(t.eF.a(s),r.a)
for(r=s.length,c=0;c<s.length;s.length===r||(0,A.o)(s),++c){d=s[c]
q=d.a
b=m.ah(0,q)
if(b!=null)B.a.ah(n,b)
m.h(0,q,d)
B.a.j(n,d)}return!0}}
A.pR.prototype={
$1(a){t.u.a(a)
return(this.a.b.b.f.B(a.gn(),a.gp()).a.e.a&$.b3().a)!==0},
$S:1}
A.pP.prototype={
$2(a,b){var s=this.a.a
s===$&&A.c()
s=s.b.f.b.b
return A.w(a+b,0,s.a+s.b,2,-3)},
$S:67}
A.pQ.prototype={
$1(a){t.u.a(a)
return this.a.B(a.gn(),a.gp()).b===this.b},
$S:1}
A.eW.prototype={}
A.rQ.prototype={
aN(){return"TakeFrom."+this.b}}
A.pO.prototype={
pS(){var s,r=this
switch(r.a.a){case 0:s=r.c
if(0>=s.length)return A.b(s,-1)
s=s.pop()
break
case 1:s=B.a.cO(r.c,0)
break
case 2:s=$.n().l3(0,r.c,t.d2)
break
default:s=null}r.b.ah(0,s.a);++s.c
return s}}
A.eY.prototype={
b0(){return new A.S(this.oM(),t.e)},
oM(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$b0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:n=$.n()
m=n.aC(1,2)
o=0
case 2:if(!(o<m)){r=4
break}s.nA(A.nO(n.a.a5(16)+16))
r=5
return a.b="Placing lake",1
case 5:case 3:++o
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
nA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t.b.a(a)
s=$.n()
r=this.a
r===$&&A.c()
q=r.b.f
p=q.b.b
o=p.a
n=a.b
m=n.b
l=m.a
k=s.bs(0,o-l)
j=s.bs(0,p.b-m.b)
for(s=A.ac(n),p=a.a,n=p.length,m=q.a,i=m.length,r=r.d,h=r.$ti.c,g=r.a,f=r.b.b.a;s.q();){e=s.b
d=s.c
a.l(e,d)
c=d*l+e
if(!(c>=0&&c<n))return A.b(p,c)
if(p[c]){e+=k
d+=j
q.l(e,d)
c=d*o+e
if(!(c>=0&&c<i))return A.b(m,c)
m[c].a=$.dj()
h.a(this)
r.l(e,d)
B.a.h(g,d*f+e,this)}}}}
A.hK.prototype={}
A.qy.prototype={
pC(a,b){var s,r,q,p=this,o=a.b.b.f.B(b.gn(),b.gp()).a
if(o===$.cF()||o===$.cG())return p.fX()
if(o===$.by()){s=p.b
if(s!=null){r=$.n()
t.p.a(s)
r=r.U(1)
if(!(r>=0&&r<1))return A.b(s,r)
return s[r]}s=$.n()
r=t.p.a($.yV())
s=s.U(3)
if(!(s>=0&&s<3))return A.b(r,s)
return r[s]}if(o===$.j8()){s=p.c
r=s!=null
if(r&&p.d!=null){q=$.n().U(6)
A:{if(0===q){s=p.d
if(s==null)s=t.U.a(s)
break A}if(1===q){s=p.fX()
break A}break A}return s}else if(r)return s
else{s=p.d
if(s!=null)return s
else return p.fX()}}s=$.yU()
if(s.ak(o)){r=$.n()
s=s.m(0,o)
s.toString
t.p.a(s)
r=r.U(1)
if(!(r>=0&&r<1))return A.b(s,r)
return s[r]}return o},
fX(){var s,r=this.a
if(r!=null){s=$.n()
t.p.a(r)
s=s.U(1)
if(!(s>=0&&s<1))return A.b(r,s)
return r[s]}return $.j9()}}
A.f7.prototype={
gfg(){return $.yY()},
b0(){return new A.S(this.oN(),t.e)},
oN(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
return function $async$b0(a2,a3,a4){if(a3===1){p.push(a4)
r=q}for(;;)A:switch(r){case 0:o=s.e,n=s.f,m=0
case 3:if(!(m<20)){r=5
break}l=$.n()
k=A.nO(l.a.a5(n-o)+o)
l=s.a
l===$&&A.c()
j=s.jD(k,l.b.f.b)
r=j!=null?6:7
break
case 6:r=8
return a2.b="pit",1
case 8:for(l=k.b,i=l.a,i=new A.cX(l,i.a-1,i.b),h=k.a,l=l.b.a,g=h.length,f=s.r,e=j.a,d=e.a,c=j.b,b=d+c.a,e=e.b,c=e+c.b;i.q();){a=i.b
a0=i.c
k.l(a,a0)
a1=a0*l+a
if(!(a1>=0&&a1<g)){A.b(h,a1)
r=1
break A}if(h[a1])B.a.j(f,new A.e(a,a0).F(0,new A.e(Math.min(d,b),Math.min(e,c))))}r=9
return a2.aO(s.ji(j))
case 9:r=1
break
case 7:case 4:++m
r=3
break
case 5:case 1:return 0
case 2:return a2.c=p.at(-1),3}}}},
fA(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=a6.b,a5=B.e.aV(a4.c*$.n().aF(1,1.4))
for(s=this.r,r=s.length,q=this.d,p=a6.a,a4=a4.b,o=a4.w,n=o.a,m=o.b.b.a,l=n.length,a4=a4.f,k=a4.a,j=a4.b.b.a,i=k.length,h=0;h<s.length;s.length===r||(0,A.o)(s),++h){g=s[h]
f=g.a
e=g.b
a4.l(f,e)
d=e*j+f
if(!(d>=0&&d<i))return A.b(k,d)
d=k[d].a
c=$.b3().a
if((d.e.a&c)===0)continue
d=g.gbD()
a=d.length
a0=0
for(;;){if(!(a0<a)){b=!0
break}a1=d[a0]
a2=a1.a
a3=a1.b
a4.l(a2,a3)
a2=a3*j+a2
if(!(a2>=0&&a2<i))return A.b(k,a2)
if((k[a2].a.e.a&c)===0){b=!1
break}++a0}if(!b)continue
o.l(f,e)
f=e*m+f
if(!(f>=0&&f<l))return A.b(n,f)
if(n[f]!=null)continue
p.he(null,g,p.k0(a5,!1,q))}return!0},
jD(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.b.a(a)
s=b.b
r=s.a
q=a.b.b
p=q.a
if(r<p)return null
s=s.b
q=q.b
if(s<q)return null
for(o=b.a,n=o.b,s=n+s,o=o.a,r=o+r,m=0;m<200;++m){l=$.n()
k=Math.min(o,r)
j=Math.max(o,r)
l=l.a
i=l.a5(j-p-k)+k
k=Math.min(n,s)
j=Math.max(n,s)
h=l.a5(j-q-k)+k
if(this.oh(a,i,h))return new A.a0(new A.e(i,h),new A.e(p,q))}return null},
oh(a,b,c){var s,r,q,p,o,n,m,l,k=this
t.b.a(a)
for(s=a.b,r=A.ac(s),q=a.a,p=s.b.a,o=q.length;r.q();){n=r.b
m=r.c
a.l(n,m)
l=m*p+n
if(!(l>=0&&l<o))return A.b(q,l)
if(q[l]){l=k.a
l===$&&A.c()
if(!l.dw(k,new A.e(n+b,m+c)))return!1}}for(s=A.ac(s);s.q();){r=s.b
n=s.c
a.l(r,n)
m=n*p+r
if(!(m>=0&&m<o))return A.b(q,m)
if(q[m]){m=k.a
m===$&&A.c()
m.dA(k,r+b,n+c,null)}}return!0},
ji(a){return new A.S(this.ny(a),t.e)},
ny(a){var s=this
return function(){var r=a
var q=0,p=1,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
return function $async$ji(a0,a1,a2){if(a1===1){o.push(a2)
q=p}for(;;)switch(q){case 0:n=r.a,m=n.a,l=r.b,k=m+l.a,n=n.b,l=n+l.b,j=0
case 2:if(!(j<8)){q=4
break}i=$.n()
h=A.nO(i.a.a5(4)+6)
i=h.b.b
g=i.a
f=Math.min(m,k)-g
i=i.b
e=Math.min(n,l)-i
d=Math.max(m,k)
c=Math.max(n,l)
b=s.a
b===$&&A.c()
q=s.jD(h,A.xm(new A.a0(new A.e(f,e),new A.e(d+g-f,c+i-e)),b.b.f.b.bR(-1)))!=null?5:6
break
case 5:q=7
return a0.b="antechamber",1
case 7:case 6:case 3:++j
q=2
break
case 4:return 0
case 1:return a0.c=o.at(-1),3}}}}}
A.qH.prototype={
pe(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=A.hw(t.u),a4=a2.d;++a4.b
s=a4.a
r=s.b.b
q=r.a
a4.c=q
a4.d=0
a4.e=r.b
a4.f=0
r=a3.$ti.c
a3.bk(r.a(a5))
a4.j(0,a5)
p=a2.c
a2.f=A.a([new A.it(a5,p.B(a5.gn(),a5.gp()))],t.lv)
for(o=s.a,n=o.length,m=p.a,l=p.b.b.a,k=m.length;!a3.gaq(0);){j=a3.cP()
i=j.gn()
h=j.gp()
p.l(i,h)
i=h*l+i
if(!(i>=0&&i<k))return A.b(m,i)
g=m[i]
for(i=j.gdO(),h=i.length,f=g+1,e=0;e<i.length;i.length===h||(0,A.o)(i),++e){d=i[e]
c=d.a
b=d.b
p.l(c,b)
a=b*l+c
if(!(a>=0&&a<k))return A.b(m,a)
a0=m[a]
if(a0===-1)continue
p.l(c,b)
if(a0!==f)continue
s.l(c,b)
c=b*q+c
if(!(c>=0&&c<n))return A.b(o,c)
if(J.a9(o[c],a4.b))continue
if(a2.mZ(d))continue
a3.bk(r.a(d))
a4.j(0,d)
B.a.j(a2.f,new A.it(d,a0))}}a2.ci(a5,-1)
a1=a2.mJ(a5)
if(a1.a===0)for(a4=a4.gL(0),s=a4.$ti.c;a4.q();){r=a4.d
a2.ci(r==null?s.a(r):r,-1)}else{for(a4=a4.gL(0),s=a4.$ti.c;a4.q();){r=a4.d
a2.ci(r==null?s.a(r):r,-2)}a2.ci(a5,-1)
a2.jn(a1)}},
pX(){var s,r,q,p
for(s=this.f,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
this.ci(p.a,p.b)}this.f=B.cj},
mZ(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this.c,a=b.B(a0.gn(),a0.gp())
for(s=a0.gdO(),r=s.length,q=this.d,p=q.a,o=p.a,n=p.b.b.a,m=o.length,l=this.a.f.b,k=b.a,j=b.b.b.a,i=k.length,h=a-1,g=0;g<s.length;s.length===r||(0,A.o)(s),++g){f=s[g]
if(!l.G(0,f))continue
e=f.a
d=f.b
p.l(e,d)
c=d*n+e
if(!(c>=0&&c<m))return A.b(o,c)
if(!J.a9(o[c],q.b)){b.l(e,d)
e=d*j+e
if(!(e>=0&&e<i))return A.b(k,e)
e=J.a9(k[e],h)}else e=!1
if(e)return!0}return!1},
mJ(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.b7(t.u)
for(s=this.d,r=s.gL(0),q=this.c,p=q.a,o=q.b.b.a,n=p.length,m=s.a,l=m.a,k=m.b.b.a,j=l.length,i=r.$ti.c;r.q();){h=r.d
if(h==null)h=i.a(h)
if(h.Y(0,a0))continue
for(h=h.gdO(),g=h.length,f=0;f<h.length;h.length===g||(0,A.o)(h),++f){e=h[f]
d=e.a
c=e.b
q.l(d,c)
b=c*o+d
if(!(b>=0&&b<n))return A.b(p,b)
b=p[b]
if(typeof b!=="number")return b.cV()
if(b>=0){m.l(d,c)
d=c*k+d
if(!(d>=0&&d<j))return A.b(l,d)
d=!J.a9(l[d],s.b)}else d=!1
if(d)a.j(0,e)}}return a},
jn(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
t.cX.a(a2)
s=new A.cr(A.a([],t.k5),t.r)
for(r=J.aw(a2),q=a1.c,p=q.a,o=q.b,n=o.b.a,m=p.length;r.q();){l=r.gH()
k=l.gn()
j=l.gp()
q.l(k,j)
k=j*n+k
if(!(k>=0&&k<m))return A.b(p,k)
s.b_(0,l,p[k])}for(r=a1.a.f,l=r.a,k=r.b.b.a,j=l.length;;){i=s.fi()
if(i==null)break
h=i.gn()
g=i.gp()
q.l(h,g)
h=g*n+h
if(!(h>=0&&h<m))return A.b(p,h)
f=p[h]
for(h=i.gdO(),g=h.length,e=f+1,d=0;d<h.length;h.length===g||(0,A.o)(h),++d){c=h[d]
if(!o.G(0,c))continue
b=c.a
a=c.b
q.l(b,a)
a0=a*n+b
if(!(a0>=0&&a0<m))return A.b(p,a0)
if(!J.a9(p[a0],-2))continue
r.l(b,a)
b=a*k+b
if(!(b>=0&&b<j))return A.b(l,b)
if((l[b].a.e.a&$.b3().a)!==0){a1.ci(c,e)
s.b_(0,c,e)}else a1.ci(c,-1)}}},
ci(a,b){var s,r=this
if(r.a.f.B(a.gn(),a.gp()).a===$.cF()){s=r.c.B(a.gn(),a.gp())
if(typeof s!=="number")return s.cV()
if(s>=0)--r.e
if(b>=0)++r.e}s=r.c
s.$ti.c.a(b)
s.aZ(a.gn(),a.gp(),b)}}
A.it.prototype={}
A.fi.prototype={
b0(){return new A.S(this.oO(),t.e)},
oO(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
return function $async$b0(a,a0,a1){if(a0===1){p.push(a1)
r=q}for(;;)switch(r){case 0:b=s.a
b===$&&A.c()
o=b.b.f.b.b
n=o.b+2
m=o.a+2
l=new A.qU(s)
k=new A.qV(s)
j=new A.qS(s)
i=new A.qW(s)
h=new A.qT(s)
g=new A.qR(s)
o=$.n()
f=o.U(6)
A:{if(0===f){e=new A.O(A.bU(-2,h.$0(),null,null),A.bU(m,h.$0(),null,null))
break A}if(1===f){e=new A.O(A.bU(g.$0(),-2,null,null),A.bU(g.$0(),n,null,null))
break A}if(2===f){e=new A.O(A.bU(i.$0(),-2,null,null),A.bU(m,k.$0(),null,null))
break A}if(3===f){e=new A.O(A.bU(m,l.$0(),null,null),A.bU(i.$0(),n,null,null))
break A}if(4===f){e=new A.O(A.bU(j.$0(),n,null,null),A.bU(-2,l.$0(),null,null))
break A}if(5===f){e=new A.O(A.bU(-2,k.$0(),null,null),A.bU(j.$0(),-2,null,null))
break A}e=A.a_(A.ce("Unreachable"))}d=b.b.f.b.b.a
b=b.b.f.b.b.b
c=A.bU(o.aF(d*0.4,d*0.6),o.aF(b*0.4,b*0.6),null,null)
s.ew(e.a,c)
s.ew(c,e.b)
return 0
case 1:return a.c=p.at(-1),3}}}},
ew(b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=b2.a,a6=b3.a,a7=a5-a6,a8=b2.b,a9=b3.b,b0=a8-a9,b1=Math.sqrt(a7*a7+b0*b0)
if(b1>1){s=$.n()
r=b1/2
q=s.aS(r)
p=b1/4
r=s.aS(r)
o=Math.min(2,p)
n=A.bU((a5+a6)/2+q-p,(a8+a9)/2+r-p,B.e.M((b2.c+b3.c)/2+s.aF(-o,o),0,4),(b2.d+b3.d)/2)
a4.ew(b2,n)
a4.ew(n,b3)
return}a6=b2.d
a9=b2.c+a6
m=B.e.bQ(a5-a9)
l=B.e.bQ(a8-a9)
k=B.e.aV(a5+a9)
j=B.e.aV(a8+a9)
s=a4.a
s===$&&A.c()
r=s.b.f
q=r.b.b
p=q.a
i=p-2
m=B.c.M(m,1,i)
q=q.b-2
l=B.c.M(l,1,q)
k=B.c.M(k,1,i)
j=B.c.M(j,1,q)
h=a9*a9
g=a6*a6
for(a6=r.a,a9=a6.length,s=s.d,q=s.$ti.c,i=s.a,f=s.b.b.a,e=l;e<=j;++e)for(d=a8-e,c=d*d,b=e*p,a=e*f,a0=m;a0<=k;++a0){a1=a5-a0
a2=a1*a1+c
if(a2<=g){r.l(a0,e)
a3=b+a0
if(!(a3>=0&&a3<a9))return A.b(a6,a3)
a6[a3].a=$.dj()
q.a(a4)
s.l(a0,e)
B.a.h(i,a+a0,a4)}else if(a2<=h){r.l(a0,e)
a3=b+a0
if(!(a3>=0&&a3<a9))return A.b(a6,a3)
if(a6[a3].a===$.ev()){r.l(a0,e)
a6[a3].a=$.cF()
q.a(a4)
s.l(a0,e)
B.a.h(i,a+a0,a4)}}}}}
A.qU.prototype={
$0(){var s=$.n(),r=this.a.a
r===$&&A.c()
r=r.b.f.b.b.b
return s.aF(r*0.2,r*0.4)},
$S:8}
A.qV.prototype={
$0(){var s=$.n(),r=this.a.a
r===$&&A.c()
r=r.b.f.b.b.b
return s.aF(r*0.6,r*0.8)},
$S:8}
A.qS.prototype={
$0(){var s=$.n(),r=this.a.a
r===$&&A.c()
r=r.b.f.b.b.a
return s.aF(r*0.6,r*0.8)},
$S:8}
A.qW.prototype={
$0(){var s=$.n(),r=this.a.a
r===$&&A.c()
r=r.b.f.b.b.a
return s.aF(r*0.2,r*0.4)},
$S:8}
A.qT.prototype={
$0(){var s=$.n(),r=this.a.a
r===$&&A.c()
r=r.b.f.b.b.b
return s.aF(r*0.2,r*0.8)},
$S:8}
A.qR.prototype={
$0(){var s=$.n(),r=this.a.a
r===$&&A.c()
r=r.b.f.b.b.a
return s.aF(r*0.2,r*0.8)},
$S:8}
A.tD.prototype={
t(a){return A.J(this.a)+","+A.J(this.b)+" ("+A.J(this.d)+")"}}
A.lx.prototype={
jY(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.o.a(a)
for(s=a.b,r=A.ac(s),q=a.a,s=s.b.a,p=q.length;r.q();){o=r.b
n=r.c
m=o+b
l=n+c
a.l(o,n)
o=n*s+o
if(!(o>=0&&o<p))return A.b(q,o)
k=q[o]
o=k.a
n=o==null
if(!(n&&k.b===B.r)){j=this.a
j===$&&A.c()
j=!j.b.f.b.G(0,new A.e(m,l))}else j=!1
if(j)return!1
if(!(n&&k.b===B.r)&&o!==$.by()&&k.b===B.r){o=this.a
o===$&&A.c()
l=!o.dw(this,new A.e(m,l))
o=l}else o=!1
if(o)return!1}return!0}}
A.hV.prototype={
aN(){return"RoomShapes."+this.b}}
A.qY.prototype={
$1(a){var s,r=this.a.F(0,t.j.a(a)),q=this.b
if(!q.b.G(0,r))return!1
q=q.B(r.a,r.b)
s=q.a
return!(s==null&&q.b===B.r)&&s!==$.by()&&q.b===B.r},
$S:9}
A.e6.prototype={}
A.hW.prototype={
aN(){return"RoomSize."+this.b}}
A.rZ.prototype={
dN(a){return new A.S(this.oR(t.jJ.a(a)),t.e)},
oR(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$dN(a2,a3,a4){if(a3===1){o.push(a4)
q=p}for(;;)A:switch(q){case 0:for(n=s.a.f,m=n.b,l=A.ac(m),k=n.a,j=m.b.a,i=k.length;l.q();){h=l.b
g=l.c
n.l(h,g)
h=g*j+h
if(!(h>=0&&h<i)){A.b(k,h)
q=1
break A}k[h].a=$.j9()}for(l=J.aw(m.l8());l.q();){h=l.gH()
g=h.gn()
h=h.gp()
n.l(g,h)
g=h*j+g
if(!(g>=0&&g<i)){A.b(k,g)
q=1
break A}k[g].a=$.fP()}f=[$.wc(),$.wg(),$.wk(),$.wl(),$.wm(),$.wn(),$.wo(),$.wp()]
for(e=0;e<8;++e){d=B.c.ab(e,4)*13+5
l=B.c.A(e,4)
c=l*14+6
for(h=new A.cX(new A.a0(new A.e(d,c),new A.e(11,8)),d-1,c);h.q();){g=h.b
b=h.c
n.l(g,b)
g=b*j+g
if(!(g>=0&&g<i)){A.b(k,g)
q=1
break A}k[g].a=$.fP()}h=d+11
g=c+8
if((l&1)===1){l=Math.min(d,h)
g=Math.min(c,g)
g=new A.e(l,g).F(0,new A.e(Math.max(d,h),g))
a0=new A.e(B.c.A(g.a,2),B.c.A(g.b,2))}else{l=Math.min(d,h)
g=Math.max(c,g)
g=new A.e(l,g).F(0,new A.e(Math.max(d,h),g))
a0=new A.e(B.c.A(g.a,2),B.c.A(g.b,2)+-1)}l=a0.a
h=a0.b
n.l(l,h)
g=h*j
b=g+l
if(!(b>=0&&b<i)){A.b(k,b)
q=1
break A}k[b].a=f[e]
b=l+-1
n.l(b,h)
b=g+b
if(!(b>=0&&b<i)){A.b(k,b)
q=1
break A}b=k[b]
a1=$.uR()
b.a=a1;++l
n.l(l,h)
l=g+l
if(!(l>=0&&l<i)){A.b(k,l)
q=1
break A}k[l].a=a1}for(l=A.ac(m);l.q();){h=l.b
g=l.c
n.l(h,g)
h=g*j+h
if(!(h>=0&&h<i)){A.b(k,h)
q=1
break A}h=k[h]
h.fp(!0)
g=$.V()
if((h.a.e.a&g.a)!==0)h.f=B.c.M(h.f+64,0,192)}r.$1(m.gho())
case 1:return 0
case 2:return a2.c=o.at(-1),3}}}}}
A.rW.prototype={
$1(a){return new A.f4(a)},
$S:69}
A.rV.prototype={
$1(a){return new A.f3(a)},
$S:70}
A.rU.prototype={
$2(a,b){a.e=192-b*12
return a.cE($.V())},
$S:71}
A.fo.prototype={
hn(a,b,c){var s,r,q,p,o
for(s=this.b,r=0;r<s.length;++r){q=s[r]
p=q.b.bl(b,a)
o=q.c.bl(c,a)
B.a.h(s,r,new A.Y(q.a,p,o))}return this},
oD(a,b,c,d){var s,r,q,p,o,n,m=this.b,l=B.a.gaB(m)
for(s=l.b,r=l.c,q=l.a,p=1;p<a;++p){o=s.bl(c,A.w(p,0,a,0,b))
n=r.bl(d,A.w(p,0,a,0,b))
B.a.j(m,new A.Y(q,o,n))}return this},
f_(a){this.e=a
return this},
bw(a){this.d=a
return this},
cs(a){this.c=t.bj.a(a)
return this},
ka(){return this.cE($.bL())},
aI(){return this.cE($.V())},
a4(){return this.cE($.vY())},
bz(){return this.cE($.vZ())},
cE(a){var s,r,q,p=this,o=p.b
if(o.length===1)o=B.a.gaB(o)
s=p.d
r=p.e
q=p.c
return new A.d3(p.a,s,r,o,a,q)}}
A.nT.prototype={
$0(){return A.vp(this.a)},
$S:27}
A.nV.prototype={
$0(){return A.vp(this.a)},
$S:27}
A.nW.prototype={
$0(){return A.hw(t.cZ)},
$S:73}
A.nU.prototype={
$0(){return A.vp(this.a)},
$S:27}
A.fv.prototype={
t(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=new A.cZ(""),c=e.a,b=c.Q.a.a
d.a=b
c=c.at
if(c instanceof A.cH)s="afraid"
else s=c instanceof A.cI?"awake":"asleep"
d.a=b+(" ("+s+")\n")
c=e.c
b=A.y(c).i("b6<1>")
r=A.a6(new A.b6(c,b),b.i("k.E"))
B.a.fv(r)
q=B.a.av(r,0,new A.tA(),t.S)
for(b=r.length,p=e.d,o=0;o<r.length;r.length===b||(0,A.o)(r),++o){n=r[o]
m=B.i.ff(n,q)+" "
l=c.m(0,n)
for(k=A.y(l),j=new A.eg(l,l.c,l.d,l.b,k.i("eg<1>")),k=k.c,i=!1;j.q();){h=j.e
g=B.c.M(B.e.aV((h==null?k.a(h):h)*9),0,8)
if(!(g>=0&&g<9))return A.b(" \u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588",g)
m+=" \u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588"[g]
if(g>0)i=!0}if(!l.gaq(0)){j=l.b
h=l.c
if(j===h)A.a_(A.cu())
j=l.a
f=j.length
h=(h-1&f-1)>>>0
if(!(h>=0&&h<f))return A.b(j,h)
h=j[h]
k=B.e.i2(h==null?k.a(h):h,4)
m+=" "+B.i.dg(k,6)}if(p.m(0,n)!=null){m+=" "+A.J(p.m(0,n))
i=!0}if(i)d.a+=(m.charCodeAt(0)==0?m:m)+"\n"}c=d.a=A.vg(d.a,e.b,"\n")
return c.charCodeAt(0)==0?c:c}}
A.tA.prototype={
$2(a,b){return Math.max(A.r(a),A.a3(b).length)},
$S:21}
A.H.prototype={
gaY(){return!0},
oE(a,b,c){var s,r=this
r.a=b
s=b.y
r.b!==$&&A.ay()
r.b=s
r.c!==$&&A.ay()
r.c=a
r.d!==$&&A.ay()
r.d=c!==!1},
hj(a,b){var s,r,q
if(b==null){s=this.a
s.toString}else s=b
r=this.b
r===$&&A.c()
q=this.c
q===$&&A.c()
a.a=s
a.b!==$&&A.ay()
a.b=r
a.c!==$&&A.ay()
a.c=q
a.d!==$&&A.ay()
a.d=!1
if(a.gaY())B.a.j(q.c,a)
else{s=q.b
s.bk(s.$ti.c.a(a))}},
hi(a){return this.hj(a,null)},
bA(a,b,c,d,e,f,g){var s,r,q,p,o=this.c
o===$&&A.c()
s=e==null?$.az():e
if(g==null)r=b==null?null:b.y
else r=g
if(r==null)r=B.al
q=d==null?B.r:d
p=c==null?0:c
B.a.j(o.d,new A.k4(a,r,q,s,b,f,p))},
oz(a,b,c,d){return this.bA(a,b,c,null,d,null,null)},
cG(a,b){var s=null
return this.bA(a,b,s,s,s,s,s)},
oy(a,b,c){var s=null
return this.bA(a,s,s,s,s,b,c)},
oA(a,b,c,d){return this.bA(a,b,null,null,null,c,d)},
ox(a,b,c){var s=null
return this.bA(a,s,s,s,b,s,c)},
oB(a,b,c,d){return this.bA(a,null,null,b,c,null,d)},
oC(a,b,c,d){return this.bA(a,null,null,b,null,c,d)},
jQ(a,b,c){var s=null
return this.bA(a,s,s,b,s,s,c)},
hk(a,b){var s=null
return this.bA(a,s,s,s,s,s,b)},
ow(a,b,c){var s=null
return this.bA(a,b,c,s,s,s,s)},
jP(a,b,c){var s=null
return this.bA(a,b,s,s,s,s,c)},
ge3(){return 0.2},
hG(a,b,c){var s=this.c
s===$&&A.c()
s.y.Q.at.Z(B.x,a,b,c,null)},
pv(a,b){return this.hG(a,b,null)},
ej(a,b,c,d){var s,r,q=this.c
q===$&&A.c()
s=q.x
s===$&&A.c()
r=this.b
r===$&&A.c()
r=s.f.B(r.gn(),r.gp())
if(!r.b&&r.d+r.e>r.c||this.a instanceof A.at)q.y.Q.at.Z(B.x,a,b,c,d)},
bZ(a,b,c){return this.ej(a,b,c,null)},
a1(a,b){return this.ej(a,b,null,null)},
lw(a){return this.ej(a,null,null,null)},
fD(a,b,c){if(a!=null)this.ej(a,b,c,null)
return B.o},
eo(){return this.fD(null,null,null)},
cA(a,b){return this.fD(a,b,null)},
f1(a,b,c){var s,r=this,q=r.c
q===$&&A.c()
q=q.x
q===$&&A.c()
s=r.b
s===$&&A.c()
s=q.f.B(s.gn(),s.gp())
q=!s.b&&s.d+s.e>s.c||r.a instanceof A.at
if(q){q=r.c
q===$&&A.c()
q.y.Q.at.Z(B.a_,a,b,c,null)}return B.bM},
dX(a,b){return this.f1(a,b,null)},
da(a){return this.f1(a,null,null)},
be(a){var s,r,q=this.c
q===$&&A.c()
s=this.a
s.toString
r=this.d
r===$&&A.c()
a.oE(q,s,r)
return new A.dk(a,!1,!0)}}
A.dk.prototype={}
A.kf.prototype={
V(){var s=this,r=t.V.a(s.a),q=r.ch,p=s.e
if(q<p)return s.da("You aren't focused enough.")
r.ch=q-p
return s.be(s.f)}}
A.km.prototype={
gn7(){var s,r,q=this,p=q.Q$
if(p===$){s=q.fc()
r=s.a()
q.Q$!==$&&A.er()
p=q.Q$=new A.ak(r,s.$ti.i("ak<1>"))}return p},
V(){var s,r=this.gn7()
if(!r.q())return B.o
s=r.b
return s==null?r.$ti.c.a(s):s},
lf(a){var s,r=J.x3(a,t.fw)
for(s=0;s<a;++s)r[s]=B.a4
return r}}
A.jt.prototype={
V(){var s,r,q,p,o=this
for(s=o.e,r=o.a.eW(s),q=r.length,p=0;p<r.length;r.length===q||(0,A.o)(r),++p){r[p].hP(o,o.a,s)
if(s.z<=0)break}return B.o},
ge3(){return 1},
t(a){return A.J(this.a)+" attacks "+this.e.t(0)}}
A.kA.prototype={
e8(){var s,r=this
switch(r.e){case B.G:s=r.c
s===$&&A.c()
s=s.x
s===$&&A.c()
s.e9(r.f,r.a.y)
break
case B.v:B.a.ah(t.V.a(r.a).Q.e.b,r.f)
break
case B.Z:s=r.f
t.V.a(r.a).Q.f.ah(0,s)
if(s.a.ay>0){s=r.c
s===$&&A.c()
s=s.x
s===$&&A.c()
s.gaA().r=!0}break
default:throw A.m(A.ce("Invalid location."))}},
bo(){switch(this.e){case B.G:break
case B.v:t.V.a(this.a).Q.e.bo()
break
case B.Z:t.V.a(this.a)
break
default:throw A.m(A.ce("Invalid location."))}}}
A.ld.prototype={
V(){var s,r=this,q="{1} [don't|doesn't] have room for {the 2}.",p=t.V,o=r.e,n=p.a(r.a).Q.e.ca(o),m=n.a
if(m===0)return r.f1(q,r.a,o)
r.bZ("{1} pick[s] up {the 2}.",r.a,o.b1(m))
m=n.b
s=r.a
if(m===0){m=r.c
m===$&&A.c()
m=m.x
m===$&&A.c()
m.e9(o,s.y)}else r.bZ(q,s,o.b1(m))
p=p.a(r.a)
r.c===$&&A.c()
p.Q.ax.dc(o)
p.bt()
A.de("pickup")
return B.o}}
A.jZ.prototype={
V(){var s=this,r=s.z,q=s.f
if(r===q.f)s.e8()
else{q=q.dr(r)
s.bo()}r=s.a
if(s.e===B.Z){s.bZ("{1} take[s] off and drop[s] {the 2}.",r,q)
t.V.a(s.a).bt()}else s.bZ("{1} drop[s] {the 2}.",r,q)
r=s.c
r===$&&A.c()
r=r.x
r===$&&A.c()
r.d1(q,s.a.y)
A.de("drop")
return B.o}}
A.k1.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.e
if(d===B.Z)return e.be(new A.lT(d,e.f))
d=t.V
s=e.f
if(!d.a(e.a).Q.f.oS(s))return e.f1("{1} cannot equip {the 2}.",e.a,s)
if(s.f===1){e.e8()
r=s}else{r=s.dr(1)
e.bo()}q=d.a(e.a).Q.f.ke(r)
for(p=q.length,o=0;o<q.length;q.length===p||(0,A.o)(q),++o){n=q[o]
m=n.f
l=d.a(e.a).Q.e.fo(n,!0)
k=e.a
if(l.b===0){j=e.c
j===$&&A.c()
i=j.x
i===$&&A.c()
h=e.b
h===$&&A.c()
i=i.f
g=h.gn()
h=h.gp()
i.l(g,h)
f=i.a
g=h*i.b.b.a+g
if(!(g>=0&&g<f.length))return A.b(f,g)
g=f[g]
if(!g.b&&g.d+g.e>g.c||e.a instanceof A.at)j.y.Q.at.Z(B.x,"{1} unequip[s] {the 2}.",k,new A.L(n.a,n.b,n.c,n.d,m),null)}else{m=e.c
m===$&&A.c()
j=m.x
j===$&&A.c()
j.d1(n,k.y)
k=e.a
j=m.x
j===$&&A.c()
i=e.b
i===$&&A.c()
j=j.f
h=i.gn()
i=i.gp()
j.l(h,i)
g=j.a
h=i*j.b.b.a+h
if(!(h>=0&&h<g.length))return A.b(g,h)
h=g[h]
if(!h.b&&h.d+h.e>h.c||e.a instanceof A.at)m.y.Q.at.Z(B.x,u.f,k,n,null)}}e.bZ("{1} equip[s] {the 2}.",e.a,r)
A.de("equip")
if(s.a.ay>0){p=e.c
p===$&&A.c()
p=p.x
p===$&&A.c()
p.gaA().r=!0}d.a(e.a).bt()
return B.o}}
A.lT.prototype={
V(){var s,r,q,p,o=this,n=o.f,m=n.d3()
o.e8()
s=t.V
r=s.a(o.a).Q.e.fo(n,!0)
q=o.a
if(r.b===0)o.bZ("{1} unequip[s] {the 2}.",q,m)
else{p=o.c
p===$&&A.c()
p=p.x
p===$&&A.c()
p.d1(n,q.y)
o.bZ(u.f,o.a,n)}s.a(o.a).bt()
return B.o}}
A.lW.prototype={
V(){var s,r=this,q=r.f,p=q.a.w
if(p==null)return r.dX("{the 1} can't be used.",q);--q.f
p=p.b.$0()
if(q.f===0)r.e8()
else r.bo()
if(r.e===B.G){s=t.V.a(r.a)
r.c===$&&A.c()
s.Q.ax.dc(q)
s.bt()}t.V.a(r.a).Q.ax.pZ(q)
A.de("use")
return r.be(p)}}
A.cK.prototype={
fS(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
t.E.a(b)
t.f.a(a1)
s=A.a6(b,A.y(b).i("k.E"))
r=s.length
q="{the 1} "+a.c+"!"
p=0
o=0
for(;o<s.length;s.length===r||(0,A.o)(s),++o){n=s[o]
m=n.a
l=m.cx.m(0,a)
if(l==null)l=0
if(a0)l=Math.min(30,B.c.A(l,2))
if(l===0)continue
for(k=0,j=0;i=n.f,j<i;++j){i=$.n()
if(i.a.a5(100)<l)++k}if(k===i){i=d.c
i===$&&A.c()
h=i.x
h===$&&A.c()
g=d.b
g===$&&A.c()
h=h.f
f=g.gn()
g=g.gp()
h.l(f,g)
e=h.a
f=g*h.b.b.a+f
if(!(f>=0&&f<e.length))return A.b(e,f)
f=e[f]
if(!f.b&&f.d+f.e>f.c||d.a instanceof A.at)i.y.Q.at.Z(B.x,q,n,c,c)
a1.$1(n)}else if(k>0){n.f=i-k
i=d.c
i===$&&A.c()
h=i.x
h===$&&A.c()
g=d.b
g===$&&A.c()
h=h.f
f=g.gn()
g=g.gp()
h.l(f,g)
e=h.a
f=g*h.b.b.a+f
if(!(f>=0&&f<e.length))return A.b(e,f)
f=e[f]
if(!f.b&&f.d+f.e>f.c||d.a instanceof A.at)i.y.Q.at.Z(B.x,q,new A.L(m,n.b,n.c,n.d,k),c,c)}p+=m.cy*k}return p},
hq(a,b){var s=this.c
s===$&&A.c()
s=s.x
s===$&&A.c()
return this.fS(b,s.bS(a),!1,new A.o3(this,a))},
k9(a){var s,r,q=this,p={},o=q.a
if(!(o instanceof A.at))return 0
if(o.c9(a)>0)return 0
o=t.V
s=q.fS(a,o.a(q.a).Q.e,!0,new A.o4(q))
p.a=!1
r=q.fS(a,o.a(q.a).Q.f,!0,new A.o5(p,q))
if(p.a)o.a(q.a).bt()
return s+r}}
A.o3.prototype={
$1(a){var s=this.a.c
s===$&&A.c()
s=s.x
s===$&&A.c()
s.e9(a,this.b)},
$S:7}
A.o4.prototype={
$1(a){B.a.ah(t.V.a(this.a.a).Q.e.b,a)},
$S:7}
A.o5.prototype={
$1(a){t.V.a(this.b.a).Q.f.ah(0,a)
this.a.a=!0},
$S:7}
A.kQ.prototype={
gnm(){var s,r=this,q=r.r
if(q===$){s=A.ef(r.a.y,r.e)
s.q()
r.f=r.a.y
r.r!==$&&A.er()
r.r=s
q=s}return q},
gaY(){return!1},
V(){var s,r,q=this,p=q.gnm(),o=p.a,n=q.c
n===$&&A.c()
s=n.x
s===$&&A.c()
s=s.f.B(o.gn(),o.gp())
r=$.V()
if((s.a.e.a&r.a)===0||o.S(0,q.a.y).bi(0,q.gaD())){p=q.f
p===$&&A.c()
q.kH(p)
return q.eo()}s=q.f
s===$&&A.c()
q.kN(s,o)
n=n.x
n===$&&A.c()
n=n.w.B(o.gn(),o.gp())
if(n!=null&&n!==q.a)if(q.hN(o,n))return B.o
if(o.Y(0,q.e))if(q.kP(o))return B.o
q.f=o
p.q()
return B.a4},
hN(a,b){return!0},
kH(a){},
kP(a){return!1}}
A.lQ.prototype={
V(){var s=this,r=s.f
if(r.a.y==null)return s.dX("{the 1} can't be thrown.",r)
if(r.f===1)s.e8()
else{r=r.dr(1)
s.bo()}return s.be(new A.lR(r,s.z,s.Q))}}
A.lR.prototype={
gaD(){return this.as.gaD()},
kN(a,b){this.oy(B.bd,this.Q,b)},
hN(a,b){var s=this
if(s.as.hP(s,s.a,b)===0){s.at=!0
return!1}s.fU(a)
return!0},
kH(a){this.fU(a)},
kP(a){if(this.at)return!1
this.fU(a)
return!0},
fU(a){var s,r=this,q=r.Q,p=q.a.y,o=p.c
if(o!=null){r.hi(o.$1(a))
return}o=$.n()
s=p.a
if(o.U(100)<s){r.a1("{1} breaks!",q)
return}o=r.c
o===$&&A.c()
o=o.x
o===$&&A.c()
o.d1(q,a)}}
A.m_.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.e
if(b===B.r)return c.be(A.lu())
s=c.a.y.F(0,b)
b=c.c
b===$&&A.c()
r=b.x
r===$&&A.c()
q=s.a
p=s.b
r=r.w.B(q,p)
if(r!=null&&r!==c.a)return c.be(new A.jt(r))
r=b.x
r===$&&A.c()
o=r.f.B(q,p).a
r=o.f
if(r!=null){n=o.e
m=$.bL()
if(n.Y(0,m)&&(c.a.gb6().a&m.a)!==0||(n.a&c.a.gb6().a)===0)return c.be(r.$1(s))}r=b.x
r===$&&A.c()
if(!r.bn(s,c.a.gb6())){if(c.a instanceof A.at){b=b.x
b===$&&A.c()
b.d9(q,p,!0)}return c.dX("{1} hit[s] the "+o.a+".",c.a)}c.a.dl(b,s)
if(c.a instanceof A.at){r=b.x
r===$&&A.c()
r=r.bS(s)
r=A.a6(r,A.y(r).i("k.E"))
q=r.length
p=t.V
n=b.y.Q.at
l=0
for(;l<r.length;r.length===q||(0,A.o)(r),++l){k=r[l]
m=p.a(c.a)
if(!(m.at instanceof A.aY))m.at=null
if(k.a.ch){j=B.e.aV(k.gbg()*0.5)
i=B.e.aV(k.gbg()*1.5)
m=$.n()
h=m.a.a5(i-j)+j
m=p.a(c.a)
m.Q.Q+=h
g=b.x
g===$&&A.c()
f=c.b
f===$&&A.c()
g=g.f
e=f.gn()
f=f.gp()
g.l(e,f)
d=g.a
e=f*g.b.b.a+e
if(!(e>=0&&e<d.length))return A.b(d,e)
e=d[e]
if(!e.b&&e.d+e.e>e.c||c.a instanceof A.at)n.Z(B.x,"{1} pick[s] up {2} worth "+h+" gold.",m,k,null)
m=b.x
m===$&&A.c()
m.e9(k,s)
m=c.a
c.oA(B.b9,m,k,m.y)}else{g=b.x
g===$&&A.c()
f=c.b
f===$&&A.c()
g=g.f
e=f.gn()
f=f.gp()
g.l(e,f)
d=g.a
e=f*g.b.b.a+e
if(!(e>=0&&e<d.length))return A.b(d,e)
e=d[e]
if(!e.b&&e.d+e.e>e.c||c.a instanceof A.at)n.Z(B.x,"{1} [are|is] standing on {2}.",m,k,null)}}p.a(c.a).fh(1)}return c.eo()},
t(a){return A.J(this.a)+" walks "+this.e.t(0)}}
A.l8.prototype={
V(){var s,r,q=this,p=q.c
p===$&&A.c()
s=p.x
s===$&&A.c()
r=q.e
s.f.B(r.gn(),r.gp()).a=q.f
p=p.x
p===$&&A.c()
p.i1()
p=q.a
if(p instanceof A.at)p.fh(1)
A.de("door")
return q.cA("{1} open[s] the door.",q.a)}}
A.jK.prototype={
V(){var s,r,q=this,p=q.c
p===$&&A.c()
s=p.x
s===$&&A.c()
r=q.e
s=s.w.B(r.gn(),r.gp())
if(s!=null)return q.dX("{1} [are|is] in the way!",s)
s=p.x
s===$&&A.c()
s.f.B(r.gn(),r.gp()).a=q.f
p=p.x
p===$&&A.c()
p.i1()
p=q.a
if(p instanceof A.at)p.fh(1)
return q.cA("{1} close[s] the door.",q.a)}}
A.lt.prototype={
V(){var s,r,q,p,o,n=this,m=null
A:{s=n.a
r=s instanceof A.at
q=r?s:m
if(r){r=q.ay
if(r>0){r=B.c.M(r-1,0,400)
q.ay=r
if(r===0){r=n.c
r===$&&A.c()
r.y.Q.at.Z(B.x,"You are getting hungry.",m,m,m)}if(q.w.a<=0)q.z=B.c.M(q.z+1,0,q.gbr())}q.fh(2)
break A}r=!1
if(s instanceof A.bp){r=n.c
r===$&&A.c()
r=r.x
r===$&&A.c()
p=s.y
p=r.f.B(p.gn(),p.gp())
r=!(!p.b&&p.d+p.e>p.c)&&s.w.a<=0
o=s}else o=m
if(r)o.z=B.c.M(o.z+1,0,o.gbr())}return n.eo()},
ge3(){return 0.05}}
A.bp.prototype={
e2(a){return!1},
gb6(){var s=this.cr()
return this.e.a>0?new A.ah(s.a|$.V().a):s},
ghp(){return new A.S(this.p5(),t.cm)},
p5(){var s=this
return function(){var r=0,q=1,p=[],o
return function $async$ghp(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gjT()
if(s.b.a>0||s.d.a>0)o=B.c.A(o,3)
r=o!==0?2:3
break
case 2:r=4
return a.b=new A.aG(o,"{1} dodge[s] {2}."),1
case 4:case 3:r=5
return a.aO(s.kJ())
case 5:return 0
case 1:return a.c=p.at(-1),3}}}},
dl(a,b){var s,r,q,p,o=this
if(o.y.Y(0,b))return
s=o.y
if(o.gdV()>0){r=a.x
r===$&&A.c()
r.gaA().r=!0}o.hK(a,s,b)
r=a.x
r===$&&A.c()
r=r.w
q=r.B(s.gn(),s.gp())
p=r.$ti.c
p.a(null)
r.aZ(s.gn(),s.gp(),null)
p.a(q)
r.aZ(b.gn(),b.gp(),q)
o.y=b},
hK(a,b,c){},
eW(a){var s,r,q=this.kF(a)
for(s=q.length,r=0;r<q.length;q.length===s||(0,A.o)(q),++r)this.kC(q[r],B.hE)
return q},
kC(a,b){var s
if(this.b.a>0||this.d.a>0){switch(b.a){case 0:s=0.5
break
case 1:s=0.3
break
case 2:s=0.2
break
default:s=null}a.lp(s,"blindness")}this.kM(a,b)},
kM(a,b){},
c9(a){var s=this.hM(a),r=this.fj(a)
return r.a>0?s+r.b:s},
fj(a){var s=this.x,r=s.m(0,a)
if(r==null){r=new A.hU(a)
s.h(0,a,r)
s=r}else s=r
return s},
l4(a,b,c,d){var s=this
s.z=B.c.M(s.z-b,0,s.gbr())
s.kO(a,d,b)
if(s.z>0)return!1
a.cG(B.b7,s)
a.bZ("{1} kill[s] {2}.",c,s)
if(d!=null)d.kL(a,s)
s.kG(a,c)
return!0},
pR(a,b,c){return this.l4(a,b,c,null)},
kK(a,b,c){},
kO(a,b,c){},
kL(a,b){},
kI(a){},
pi(a){var s,r,q,p,o,n=this
n.a.a-=240
s=A.a([n.c,n.b,n.d,n.e,n.f,n.r,n.w],t.c8)
r=n.x
B.a.T(s,new A.cT(r,A.y(r).i("cT<2>")))
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
o=p.a
if(o>0){--o
p.a=o
if(o>0)p.kQ(a)
else{p.cM(a)
p.b=0}}}if(n.z>0)n.kI(a)}}
A.ba.prototype={
t(a){var s=B.c.t(this.c),r=this.e
if(r!==$.az())s=r.t(0)+" "+s
r=this.d
return r>0?s+("@"+r):s}}
A.kr.prototype={
aN(){return"HitType."+this.b}}
A.dm.prototype={}
A.dz.prototype={}
A.bb.prototype={
gaD(){var s=this.a.d
if(s===0)return 0
return Math.max(1,B.e.P(s*this.r))},
go3(){return B.a.av(this.b,1,new A.p4(),t.i)},
go2(){return B.a.av(this.c,0,new A.p3(),t.i)},
giP(){return B.a.av(this.d,1,new A.p2(),t.i)},
giO(){return B.a.av(this.e,0,new A.p1(),t.i)},
gb3(){var s=this.f
if(s!==$.az())return s
return this.a.e},
gd2(){return this.a.c*this.giP()+this.giO()},
jR(a,b){if(a===0)return
B.a.j(this.c,new A.dm(a))},
lp(a,b){if(a===1)return
B.a.j(this.b,new A.dz(a))},
ou(a,b){if(a===0)return
B.a.j(this.e,new A.dm(a))},
cW(a,b){if(a===1)return
B.a.j(this.d,new A.dz(a))},
e5(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.m1(a,a0,a1),b=d.m2(a,a1)
if(c){s=d.a.a
if(s==null)s=a0
s.toString
r=s}else r=$.w5()
q=b?a1:$.w5()
s=a1 instanceof A.at
if(s)a1.pH(d)
if(a2!==!1){p=$.n()
o=p.aC(1,100)*d.go3()+d.go2()
n=a1.ghp()
m=A.a6(n,n.$ti.i("k.E"))
B.a.bM(t.hy.a(m),p.a)
for(p=m.length,l=0;l<p;++l){k=m[l]
o-=k.a
if(o<0){if(c||b){s=a.c
s===$&&A.c()
s.y.Q.at.Z(B.x,k.b,q,r,null)
s=$.vN
if(s!=null)s.$1("miss")}return 0}}}j=a1.gdL()
i=a1.c9(d.gb3())
p=d.a
h=B.e.N((p.c*d.giP()+d.giO())*(1/(1+i))*100)
g=A.yk(j)
f=B.e.P($.n().cS(h,B.c.A(h,2))*g/100)
if(f===0){if(c||b)a.hG("{1} do[es] no damage to {2}.",r,q)
return 0}if(a0!=null)a0.kK(a,a1,f)
n=!c
if(!n||b)A.de(s?"hurt":"hit")
if(a1.l4(a,f,r,a0))return f
if(i<=0){e=d.gb3().f.$1(f)
if(e!=null)a.hj(e,a1)}a.oz(B.bU,a1,f,d.gb3())
if(!n||b)a.hG("{1} "+p.b+" {2}.",r,q)
return f},
hP(a,b,c){return this.e5(a,b,c,null)},
m1(a,b,c){var s,r
if(b instanceof A.at)return!0
if(b!=null){s=a.c
s===$&&A.c()
s=s.x
s===$&&A.c()
r=b.y
r=s.f.B(r.gn(),r.gp())
s=!r.b&&r.d+r.e>r.c}else s=!1
if(s)return!0
if(c instanceof A.at&&this.a.a!=null)return!0
s=a.c
s===$&&A.c()
s=s.x
s===$&&A.c()
r=c.y
r=s.f.B(r.gn(),r.gp())
if(!r.b&&r.d+r.e>r.c&&this.a.a!=null)return!0
return!1},
m2(a,b){var s,r
if(b instanceof A.at)return!0
s=a.c
s===$&&A.c()
s=s.x
s===$&&A.c()
r=b.y
r=s.f.B(r.gn(),r.gp())
if(!r.b&&r.d+r.e>r.c)return!0
return!1}}
A.p4.prototype={
$2(a,b){return A.bw(a)*t.jK.a(b).a},
$S:47}
A.p3.prototype={
$2(a,b){return A.bw(a)+t.fV.a(b).a},
$S:46}
A.p2.prototype={
$2(a,b){return A.bw(a)*t.jK.a(b).a},
$S:47}
A.p1.prototype={
$2(a,b){return A.bw(a)+t.fV.a(b).a},
$S:46}
A.aG.prototype={}
A.c5.prototype={
kQ(a){}}
A.hg.prototype={
cM(a){a.a1("{1} slow[s] back down.",a.a)}}
A.h1.prototype={
cM(a){a.a1("{1} warm[s] back up.",a.a)}}
A.hM.prototype={
kQ(a){var s=a.a
s.toString
if(!s.pR(a,this.b,new A.aK(A.aT("poison",B.y,B.aH).a7(1))))a.a1("{1} [are|is] hurt by poison!",a.a)},
cM(a){a.a1("{1} [are|is] no longer poisoned.",a.a)}}
A.dS.prototype={
cM(a){var s,r
a.a1("{1} can see clearly again.",a.a)
s=a.a
r=a.c
r===$&&A.c()
if(s===r.y){s=r.x
s===$&&A.c()
s.gaA().w=!0}}}
A.he.prototype={
cM(a){a.a1("{1} flutter[s] down to the ground.",a.a)}}
A.hU.prototype={
cM(a){a.a1("{1} feel[s] susceptible to "+this.c.t(0)+".",a.a)}}
A.hL.prototype={
cM(a){a.a1("{1} no longer perceive[s] monsters.",a.a)}}
A.dU.prototype={
t(a){return this.a}}
A.og.prototype={
$1(a){A.r(a)
return null},
$S:45}
A.oh.prototype={
$4(a,b,c,d){t.u.a(a)
t._.a(b)
A.ei(c)
A.r(d)
return null},
$S:78}
A.hb.prototype={}
A.k4.prototype={}
A.aM.prototype={
t(a){return this.a}}
A.kj.prototype={
ef(){return new A.S(this.ln(),t.e)},
ln(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$ef(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=A.ed()
n=s.y
m=s.x
m===$&&A.c()
r=2
return a.aO(s.a.oP(n.Q.ax,m,s.w,new A.p_(o)))
case 2:r=3
return a.b="Calculating visibility",1
case 3:n.dl(s,t.u.a(o.h6()))
m.gaA().dh()
return 0
case 1:return a.c=p.at(-1),3}}}},
bx(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
for(s=b.b,r=b.y,q=b.e,p=b.c,o=s.$ti.c,n=b.d,m=!1;;){for(;!s.gaq(0);m=!0){l=s.b
if(l===s.c)A.a_(A.cu())
k=s.a
if(!(l<k.length))return A.b(k,l)
j=k[l]
if(j==null)j=o.a(j)
i=j.V()
for(;h=i.a,h!=null;j=h){s.cP()
o.a(h)
l=s.b
k=s.a
l=(l-1&k.length-1)>>>0
s.b=l
B.a.h(k,l,h)
if(s.b===s.c)s.j0();++s.d
i=h.V()}while(l=p.length,l!==0){if(0>=l)return A.b(p,-1)
g=p.pop().V()
while(l=g.a,l!=null)g=l.V()}l=b.x
l===$&&A.c()
l.gaA().dh()
k=i.c
if(k){s.cP()
if(i.b){f=j.d
f===$&&A.c()}else f=!1
if(f){j.a.pi(j)
l.e=B.c.ab(l.e+1,l.b.length)}}if(!k||j.a===r||n.length!==0){s=A.a(n.slice(0),A.N(n))
B.a.aP(n)
return new A.fa(s)}}if(b.r!=null)b.jF()
while(s.b===s.c){l=b.x
l===$&&A.c()
k=l.b
f=l.e
if(!(f>=0&&f<k.length))return A.b(k,f)
e=k[f]
f=e.a
if(f.a>=240&&e.e2(b))return b.j8(m)
if(f.a<240){d=e.gjU()+e.f.b-e.c.b
c=f.a
if(!(d>=0&&d<13))return A.b(B.aS,d)
c+=B.aS[d]
f.a=c
c=c>=240
f=c}else f=!0
if(f){if(e.e2(b))return b.j8(m)
j=e.ap(b)
j.a=e
l=e.y
j.b!==$&&A.ay()
j.b=l
j.c!==$&&A.ay()
j.c=b
j.d!==$&&A.ay()
j.d=!0
s.bk(o.a(j))}else l.e=B.c.ab(l.e+1,k.length)
if(e===r){l=q.a+=60
if(l>=240){q.a=l-240
b.r=0
b.jF()}}}}},
j8(a){if(a)return this.nn()
return B.cX},
nn(){var s=this.d,r=A.a(s.slice(0),A.N(s))
B.a.aP(s)
return new A.fa(r)},
cn(a){var s,r=this.x
r===$&&A.c()
s=a.y
s=r.f.B(s.gn(),s.gp())
if(!s.b&&s.d+s.e>s.c)return!0
r=this.y
s=r.r
if(s.a>0&&r.y.S(0,a.y).ei(0,s.b))return!0
return!1},
jF(){var s,r,q,p=this,o=p.f,n=p.a
for(;;){s=p.r
s.toString
if(!(s<o.length))break
r=o[s]
s=p.x
s===$&&A.c()
q=n.pY(s,r)
s=p.r
s.toString
p.r=s+1
if(q!=null){q.b!==$&&A.ay()
q.b=r
q.c!==$&&A.ay()
q.c=p
q.d!==$&&A.ay()
q.d=!1
o=p.b
o.bk(o.$ti.c.a(q))
return}}p.r=null}}
A.p_.prototype={
$1(a){this.a.b=a},
$S:79}
A.ie.prototype={}
A.lZ.prototype={}
A.fa.prototype={}
A.kP.prototype={
i7(a){this.Z(B.cl,a,null,null,null)},
k7(a,b){this.Z(B.cm,a,b,null,null)},
dS(a){return this.k7(a,null)},
Z(a,b,c,d,e){var s,r
b=this.mR(b,c,d,e);++this.b
s=this.a
if(s.length!==0){r=B.a.gcp(s)
if(r.b===b){++r.c
return}}B.a.j(s,new A.hB(a,b,1))
if(s.length>100)B.a.cO(s,0)},
mR(a,b,c,d){var s,r,q,p,o,n,m=[b,c,d]
for(s=a,r=1;r<=3;++r){q=m[r-1]
if(q!=null){p=""+r
o="{"+p
n=q.gao()
s=A.bn(s,o+"}",n.b)
n=q.gao()
s=A.bn(s,"{the "+p+"}",n.c)
p=q.gao()
s=A.bn(s,o+" he}",p.d.c)
p=q.gao()
s=A.bn(s,o+" him}",p.d.d)
p=q.gao()
s=A.bn(s,o+" his}",p.d.e)}}if(b!=null)s=A.xd(s,b.gao().d)
if(0>=s.length)return A.b(s,0)
return s[0].toUpperCase()+B.i.cY(s,1)}}
A.pX.prototype={
$1(a){var s,r=a.m(0,1)
r.toString
s=a.m(0,3)
if(s!=null){if(!this.a)r=s
return r}else{if(this.a)r=""
return r}},
$S:44}
A.pZ.prototype={
$1(a){var s,r=this.a,q=r.b
if(q===-1)return
s=r.a
if(s.length!==0)s=r.a=s+" "
r.a=s+B.i.aM(this.b,q,a)
r.b=-1},
$S:81}
A.pY.prototype={
$0(){var s=this.a
B.a.j(this.b,s.a)
s.a=""},
$S:0}
A.c0.prototype={
aN(){return"LogType."+this.b}}
A.hB.prototype={}
A.u7.prototype={
$1(a){a=((B.c.eK(a,16)^a)>>>0)*73244475>>>0
a=((a>>>16^a)>>>0)*73244475>>>0
return(a>>>16^a)>>>0},
$S:3}
A.ff.prototype={
gc3(){var s=this.b,r=A.y(s).i("cT<2>"),q=this.$ti.c
return A.qa(new A.cT(s,r),r.af(q).i("1(k.E)").a(new A.qI(this)),r.i("k.E"),q)},
ce(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(a)
if(b==null)b=B.c.t(m.b.a)
if(c==null)c=1
if(d==null)d=c
if(e==null)e=1
if(f==null)f=e
s=m.b
if(s.ak(b))throw A.m(A.aF('Already have a resource named "'+b+'".',null))
r=A.b7(l.i("c3<1>"))
s.h(0,b,new A.bv(a,c,d,e,f,r,l.i("bv<1>")))
if(g!=null&&g!=="")for(l=g.split(" "),s=l.length,q=m.a,p=0;p<s;++p){o=l[p]
n=q.m(0,o)
if(n==null)throw A.m(A.aF('Unknown tag "'+o+'".',null))
r.j(0,n)}},
c6(a){var s,r,q,p,o,n,m,l,k,j,i
for(s=a.split(" "),r=s.length,q=this.a,p=this.$ti.i("c3<1>"),o=0;o<s.length;s.length===r||(0,A.o)(s),++o)for(n=s[o].split("/"),m=n.length,l=null,k=0;k<m;++k,l=i){j=n[k]
i=q.m(0,j)
if(i==null){i=new A.c3(j,l,p)
q.h(0,j,i)}}},
ph(a){var s=this.b.m(0,a)
if(s==null)throw A.m(A.aF('Unknown resource "'+a+'".',null))
return s.a},
cb(a){var s=this.b.m(0,a)
if(s==null)return null
return s.a},
lo(a){var s,r,q=this.b.m(0,a)
if(q==null)throw A.m(A.aF('Unknown resource "'+a+'".',null))
s=q.f
r=A.y(s)
return new A.cN(s,r.i("q(1)").a(new A.qJ(this)),r.i("cN<1,q>"))},
dk(a,b,c){var s,r,q,p=this,o={}
o.a=b
s=b==null?o.a=!0:b
if(c==null)return p.hb("",a,new A.qN(p))
r=p.a.m(0,c)
q=r.a
if(!s)q+=" (only)"
return p.hb(q,a,new A.qO(o,p,r))},
i4(a){return this.dk(a,null,null)},
lb(a,b){return this.dk(a,null,b)},
pV(a,b){var s,r,q,p,o,n=this
t.bq.a(b)
s=n.$ti.i("c3<1>")
r=b.$ti
q=r.i("k.E")
p=A.qa(b,r.af(s).i("1(k.E)").a(new A.qL(n)),q,s)
o=A.a6(b,q)
B.a.fv(o)
return n.hb(B.a.aG(o,"|")+" (match)",a,new A.qM(n,p))},
hb(a,b,c){var s,r,q,p,o,n,m,l,k,j=this.$ti
j.i("E(bv<1>)").a(c)
s=new A.mW(a,b)
r=this.c
q=r.m(0,s)
if(q==null){p=A.a([],j.i("t<bv<1>>"))
o=A.a([],t.gk)
for(n=this.b,n=new A.cS(n,n.r,n.e,A.y(n).i("cS<2>")),m=0;n.q();){l=n.d
k=c.$1(l)
if(k===0)continue
m+=Math.max(1e-7,k*(l.pj(b)*l.oW(b)))
B.a.j(p,l)
B.a.j(o,m)}q=new A.iK(p,o,m,j.i("iK<1>"))
r.h(0,s,q)}return q.eV()}}
A.qI.prototype={
$1(a){return this.a.$ti.i("bv<1>").a(a).a},
$S(){return this.a.$ti.i("1(bv<1>)")}}
A.qJ.prototype={
$1(a){return this.a.$ti.i("c3<1>").a(a).a},
$S(){return this.a.$ti.i("q(c3<1>)")}}
A.qN.prototype={
$1(a){this.a.$ti.i("bv<1>").a(a)
return 1},
$S(){return this.a.$ti.i("E(bv<1>)")}}
A.qO.prototype={
$1(a){var s,r,q,p,o,n,m,l
for(s=this.c,r=this.a,q=this.b.$ti.i("bv<1>").a(a).f,p=A.y(q),o=p.i("d9<1>"),p=p.c,n=1;s!=null;s=s.b){for(m=new A.d9(q,q.r,o),m.c=q.e;m.q();){l=m.d
if((l==null?p.a(l):l).G(0,s))return n}m=r.a
m.toString
if(!m)break
n/=10}return 0},
$S(){return this.b.$ti.i("E(bv<1>)")}}
A.qL.prototype={
$1(a){var s
A.a3(a)
s=this.a.a.m(0,a)
if(s==null)throw A.m(A.aF('Unknown tag "'+a+'".',null))
return s},
$S(){return this.a.$ti.i("c3<1>(q)")}}
A.qM.prototype={
$1(a){var s,r,q,p,o=this.a
for(s=o.$ti.i("bv<1>").a(a).f,s=A.vn(s,s.r,A.y(s).c),r=this.b,q=s.$ti.c;s.q();){p=s.d
if(r.cH(0,new A.qK(o,p==null?q.a(p):p)))return 1}return 0},
$S(){return this.a.$ti.i("E(bv<1>)")}}
A.qK.prototype={
$1(a){return this.a.$ti.i("c3<1>").a(a).G(0,this.b)},
$S(){return this.a.$ti.i("z(c3<1>)")}}
A.bv.prototype={
pj(a){var s=this,r=s.b,q=s.c
if(r===q)return s.d
return A.w(a,r,q,s.d,s.e)},
oW(a){var s,r,q=this.b
if(a<q){s=q-a
r=0.6+a*0.2
return Math.exp(-0.5*s*s/(r*r))}else{q=this.c
if(a>q){s=a-q
r=1+a*0.1
return Math.exp(-0.5*s*s/(r*r))}else return 1}}}
A.c3.prototype={
G(a,b){var s
this.$ti.a(b)
for(s=this;s!=null;s=s.b)if(b===s)return!0
return!1},
t(a){var s=this.b
if(s==null)return this.a
return s.t(0)+"/"+this.a}}
A.mW.prototype={
ga2(a){return B.i.ga2(this.a)^B.c.ga2(this.b)},
Y(a,b){if(b==null)return!1
t.nP.a(b)
return this.a===b.a&&this.b===b.b},
t(a){return this.a+" ("+this.b+")"}}
A.iK.prototype={
eV(){var s,r,q,p,o,n,m,l,k=this.b
if(k.length===0)return null
s=$.n().aS(this.d)
r=k.length
q=r-1
for(p=this.c,o=p.length,n=0;;){m=B.c.A(n+q,2)
if(m>0){l=m-1
if(!(l<o))return A.b(p,l)
l=s<p[l]}else l=!1
if(l)q=m-1
else{if(!(m>=0&&m<o))return A.b(p,m)
if(s<p[m]){if(!(m<r))return A.b(k,m)
return k[m].a}else n=m+1}}}}
A.dC.prototype={
t(a){return this.gao().a}}
A.aK.prototype={
gao(){return this.a}}
A.qq.prototype={
jW(a,b,c){var s,r,q=this,p=t.fm
p=new A.qt(q,a,p.a(b),p.a(c))
s=q.r
if(a===1)return new A.hH(p.$1(q.b),p.$1(q.c),p.$1(q.e),s)
else{r=q.d
return new A.hH(p.$1(r),p.$1(r),p.$1(q.f),s)}},
a7(a){return this.jW(a,null,null)},
t(a){return this.b}}
A.qt.prototype={
$1(a){var s,r,q=this,p=B.c.t(q.b),o=A.bn(a,"#",p)
p=q.c
if(p!=null&&p.length!==0){if(0>=p.length)return A.b(p,0)
s=p[0]
if(0>=s.length)return A.b(s,0)
r=B.i.G("aeiouAEIOU",s[0])?"an":"a"
o=A.bn(o,"<a>",r)
p=B.a.aG(p," ")
o=A.bn(o,"<p>",p+" ")}else{p=q.a.a?"an":"a"
o=A.bn(o,"<a>",p)
o=A.bn(o,"<p>","")}p=q.d
return p!=null&&p.length!==0?o+" "+B.a.aG(p," "):o},
$S:4}
A.qs.prototype={
$1(a){var s,r
this.a.a=!0
s=a.m(0,1)
s.toString
r=a.m(0,3)
if(r!=null){if(!this.b)s=r
return s}else{if(this.b)s=""
return s}},
$S:44}
A.hI.prototype={
aN(){return"NounCategory."+this.b}}
A.hH.prototype={
t(a){return this.a}}
A.e5.prototype={
aN(){return"Pronoun."+this.b},
t(a){return this.c+"/"+this.d}}
A.q9.prototype={
$1(a){this.a.i("@<0>").af(this.b).i("aS<1,2>").a(a)
return new A.O(a.a,a.b)},
$S(){return this.a.i("@<0>").af(this.b).i("+(1,2)(aS<1,2>)")}}
A.lY.prototype={
gL(a){var s,r,q,p,o,n,m,l,k=this,j=A.a([],t.l)
for(s=k.e,r=k.a,q=r.a,p=r.b.b.a,o=q.length;s<=k.f;++s)for(n=k.c,m=s*p;n<=k.d;++n){r.l(n,s)
l=m+n
if(!(l>=0&&l<o))return A.b(q,l)
if(J.a9(q[l],k.b))B.a.j(j,new A.e(n,s))}return new J.aX(j,j.length,t.aY)},
j(a,b){var s=this,r=s.a,q=r.$ti.c.a(s.b)
r.aZ(b.gn(),b.gp(),q)
s.c=Math.min(s.c,b.gn())
s.d=Math.max(s.d,b.gn())
s.e=Math.min(s.e,b.gp())
s.f=Math.max(s.f,b.gp())}}
A.a5.prototype={
f3(a){var s,r,q,p=this.aw(a)
for(s=a.gcI(),r=s.$ti,s=new A.ak(s.a(),r.i("ak<1>")),r=r.c;s.q();){q=s.b
p=(q==null?r.a(q):q).kz(a,this,p)}return p},
aw(a){return 0},
dJ(a,b){var s=this.f3(a)
if(s<=0)return b
return new A.kf(s,b)}}
A.W.prototype={}
A.d0.prototype={}
A.cL.prototype={}
A.dR.prototype={}
A.aY.prototype={
eT(a,b){return!0},
bJ(a){a.at=null
return this.a}}
A.lv.prototype={
eT(a,b){var s=b.z,r=b.Q.CW.a
r.toString
if(s===B.e.N(Math.pow(r,1.458)+9))return!1
if(b.ay===0){a.y.Q.at.Z(B.x,"You must eat before you can rest.",null,null,null)
return!1}return!0},
bJ(a){return A.lu()}}
A.cd.prototype={
eT(a,b){var s,r,q,p,o,n,m,l=this
if(l.a)return!0
s=l.b
if(s==null){s=l.d
r=A.a([s.gba(),s,s.gbb()],t.T)
if(B.a.G(B.au,l.d)){B.a.j(r,l.d.gbG())
B.a.j(r,l.d.gbX())}q=new A.ap(r,t.ca.a(new A.r0(l,a,b)),t.e0)
if(!q.gL(0).q())return!1
if(q.gI(0)===1){l.c=l.b=!1
l.d=q.gaB(0)}else{s=a.x
s===$&&A.c()
p=l.d.gba()
p=b.y.F(0,p)
o=s.f
if(o.b.G(0,p)&&(o.B(p.a,p.b).a.e.a&$.bM().a)!==0){p=l.d.gbG()
p=b.y.F(0,p)
o=s.f
p=o.b.G(0,p)&&(o.B(p.a,p.b).a.e.a&$.bM().a)!==0}else p=!1
l.b=p
p=l.d.gbb()
p=b.y.F(0,p)
o=s.f
if(o.b.G(0,p)&&(o.B(p.a,p.b).a.e.a&$.bM().a)!==0){p=l.d.gbX()
p=b.y.F(0,p)
s=s.f
s=s.b.G(0,p)&&(s.B(p.a,p.b).a.e.a&$.bM().a)!==0}else s=!1
l.c=s}}else{if(!s){s=l.c
s.toString
s=!s}else s=!1
if(s){s=a.x
s===$&&A.c()
if(!l.nQ(s,b))return!1}else{s=a.x
s===$&&A.c()
p=l.d.gba()
p=b.y.F(0,p)
s=s.f
o=s.b
n=o.G(0,p)&&(s.B(p.a,p.b).a.e.a&$.bM().a)!==0
p=l.d.gbb()
p=b.y.F(0,p)
m=o.G(0,p)&&(s.B(p.a,p.b).a.e.a&$.bM().a)!==0
if(!(l.b===n&&l.c===m))return!1}}s=a.x
s===$&&A.c()
return l.nX(s,b)},
bJ(a){this.a=!1
return A.bt(this.d)},
nQ(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=A.a([],t.T),d=A.b7(t.j),c=A.b7(t.u),b=f.d,a=[b.gbG(),b.gba(),b,b.gbb(),b.gbX()]
for(b=a0.f,s=b.b,r=b.a,q=s.b.a,p=r.length,o=0;o<5;++o){n=a[o]
m=a1.y.F(0,n)
if(s.G(0,m)){l=m.a
k=m.b
b.l(l,k)
l=k*q+l
if(!(l>=0&&l<p))return A.b(r,l)
l=(r[l].a.e.a&$.bM().a)!==0}else l=!1
if(!l)continue
B.a.j(e,n)
j=[n.gba(),n,n.gbb()]
for(i=0;i<3;++i){h=m.F(0,j[i])
if(s.G(0,h)){l=h.a
k=h.b
b.l(l,k)
l=k*q+l
if(!(l>=0&&l<p))return A.b(r,l)
l=(r[l].a.e.a&$.bM().a)!==0}else l=!1
if(!l)continue
d.j(0,n)
c.j(0,h)}}g=d.a
if(0===g&&e.length===1){f.d=B.a.gaB(e)
return!0}if(1===g){f.d=d.gaB(0)
return!0}if(2===g&&c.a===1)if(d.G(0,f.d))return!0
else if(d.G(0,f.d.gba())&&d.G(0,f.d.gbG())){f.d=f.d.gba()
return!0}else if(d.G(0,f.d.gbb())&&d.G(0,f.d.gbX())){f.d=f.d.gbb()
return!0}return!1},
nX(a,b){var s,r,q,p,o=this,n=b.y.F(0,o.d)
if(!(a.bn(n,b.gb6())&&a.w.B(n.a,n.b)==null))return!1
s=a.f
r=n.a
q=n.b
if(s.B(r,q).a.e.Y(0,$.bL()))return!1
p=new A.r_(a)
if(p.$1(n))return!1
if(p.$1(n.F(0,o.d.gbG())))return!1
if(p.$1(n.F(0,o.d.gba())))return!1
if(p.$1(n.F(0,o.d)))return!1
if(p.$1(n.F(0,o.d.gbb())))return!1
if(p.$1(n.F(0,o.d.gbX())))return!1
if(s.B(r,q).x>0)return!1
return!0}}
A.r0.prototype={
$1(a){var s,r
t.j.a(a)
s=this.b.x
s===$&&A.c()
r=this.c.y.F(0,a)
s=s.f
return s.b.G(0,r)&&(s.B(r.a,r.b).a.e.a&$.bM().a)!==0},
$S:9}
A.r_.prototype={
$1(a){var s=this.a,r=a.a,q=a.b,p=s.f.B(r,q)
return!p.b&&p.d+p.e>p.c&&s.w.B(r,q)!=null},
$S:1}
A.dW.prototype={
eT(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b="In view: {1}."
d.d=a
if(d.c!=null)return!0
s=a.x
s===$&&A.c()
r=$.zk()
A.wT(s)
q=r.a.get(s)
if(q==null){q=A.b7(t.u)
r.h(0,s,q)}r=$.zj()
A.wT(s)
p=r.a.get(s)
if(p==null){p=A.b7(t.W)
r.h(0,s,p)}q.j(0,a0.y)
r=d.e
o=r==null
n=!o
if(n){if(a0.y.Y(0,r)&&!d.f)return!1
if(!d.f&&a.y.Q.at.b!==d.r)return!1}d.f=!1
r=A.a([],t.lE)
for(m=s.b,l=m.length,k=0;k<m.length;m.length===l||(0,A.o)(m),++k){j=m[k]
if(j instanceof A.ad&&a.cn(j))r.push(j)}i=d.a
m=i==null
if(m){if(r.length!==0){a.y.Q.at.Z(B.x,b,B.a.gaB(r),c,c)
return!1}}else{l=d.w
if(l==null)l=d.w=r.length
if(r.length>l){a.y.Q.at.Z(B.x,b,B.a.gcp(r),c,c)
return!1}}if(m){r={}
r.a=null
s.f5(new A.oF(r,s,p,o))
r=r.a
if(r!=null){a.y.Q.at.Z(B.x,"You see {1}.",r,c,c)
return!1}}h=m?new A.oG(q,s):i
r=!m
if(r&&i.$1(a0.y)){if(!d.b)a.y.Q.at.Z(B.x,"You are on the stairs. Press again to take them.",c,c,c)
return!1}g=d.mQ(a,a0,h)
if(g==null){if(r)s="You don't know where the stairs are."
else{r=a0.y
r=s.f.B(r.gn(),r.gp())
s=!(!r.b&&r.d+r.e>r.c)?"It is too dark to explore. Light a light source.":"Nothing left to explore. Try searching for secret doors."}a.y.Q.at.Z(B.x,s,c,c,c)
return!1}f=g.a
e=g.b
if(d.b&&e===1&&n){a.y.Q.at.Z(B.x,"Press again to enter.",c,c,c)
return!1}d.c=f
return!0},
bJ(a){var s,r,q=this,p=q.c
p.toString
q.c=null
s=a.y
q.e=s
r=q.d
r===$&&A.c()
q.r=r.y.Q.at.b
r=r.x
r===$&&A.c()
s=s.F(0,p)
q.f=r.f.B(s.a,s.b).a.e.Y(0,$.bL())
return A.bt(p)},
mQ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t.mN.a(c)
s=a.x
s===$&&A.c()
r=t.u
q=A.C(r,t.lF)
p=A.hw(r)
for(r=p.$ti.c,o=0;o<8;++o){n=B.a6[o]
m=b.y.F(0,n)
if(this.jh(a,m,c)){q.h(0,m,new A.O(n,1))
p.bk(r.a(m))}}for(s=s.f,l=s.a,k=s.b.b.a,j=l.length;!p.gaq(0);){m=p.cP()
i=q.m(0,m)
n=i.a
h=i.b
if(c.$1(m))return new A.O(n,h)
g=m.gn()
f=m.gp()
s.l(g,f)
g=f*k+g
if(!(g>=0&&g<j))return A.b(l,g)
if(l[g].a.b!=null)continue
for(g=h+1,o=0;o<8;++o){e=m.F(0,B.a6[o])
if(e.Y(0,b.y)||q.ak(e))continue
if(!this.jh(a,e,c))continue
q.h(0,e,new A.O(n,g))
p.bk(r.a(e))}}return null},
jh(a,b,c){var s,r,q,p
t.mN.a(c)
s=a.x
s===$&&A.c()
r=s.f
if(!r.b.G(0,b))return!1
q=b.a
p=b.b
r=r.B(q,p)
if(!r.r||(r.a.e.a&$.bM().a)===0)return!1
if(r.x>0)return!1
if(r.a.b!=null&&!c.$1(b))return!1
if(s.w.B(q,p)!=null&&!r.b&&r.d+r.e>r.c)return!1
return!0}}
A.oF.prototype={
$2(a,b){var s=this,r=s.b.f.B(b.gn(),b.gp())
if(!r.b&&r.d+r.e>r.c&&s.c.j(0,a)&&!s.d){r=s.a
if(r.a==null)r.a=a}},
$S:15}
A.oG.prototype={
$1(a){var s,r=!1
if(!this.a.G(0,a)){s=this.b
if(s.f.B(a.gn(),a.gp()).a.b==null)r=!s.bS(a).gaq(0)||B.a.cH(a.gbD(),new A.oE(s))}return r},
$S:1}
A.oE.prototype={
$1(a){var s
t.u.a(a)
s=this.a.f
return s.b.G(0,a)&&!s.B(a.gn(),a.gp()).r},
$S:1}
A.at.prototype={
gao(){return $.yT()},
gbr(){var s=this.Q.CW.a
s.toString
return B.e.N(Math.pow(s,1.458)+9)},
gdV(){return this.Q.gdV()},
geQ(){return"hero"},
e2(a){var s=this,r=s.at
if(r!=null&&!r.eT(a,s))s.at=null
return s.at==null},
gdL(){return this.Q.gdL()},
gjU(){return 6},
gjT(){var s=this.Q.ch.a
s.toString
return 20+A.wE(s)},
cr(){return $.bM()},
kJ(){var s,r,q,p,o,n=A.a([],t.x)
for(s=this.Q,r=B.a.gL(s.f.b),q=new A.bu(r,t.k),p=t.W;q.q();){o=p.a(r.gH()).a.z
if(o!=null)n.push(o)}for(s=s.gcI(),r=s.$ti,s=new A.ak(s.a(),r.i("ak<1>")),r=r.c;s.q();){q=s.b
B.a.T(n,(q==null?r.a(q):q).eX(this))}return n},
ap(a){return this.at.bJ(this)},
kF(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.a([],t.d3)
for(s=e.Q,r=s.f.gcU(),q=J.aw(r.a),r=new A.d6(q,r.b,r.$ti.i("d6<1>"));r.q();){p=q.gH()
o=p.a.x
if(o.d<=0)B.a.j(d,new A.O(p,o))}if(d.length===0)B.a.j(d,new A.O(null,A.bf(e,"punch[es]",3,null,null)))
n=A.a([],t.o0)
for(r=d.length,q=t.aL,p=t.iO,o=t.kt,m=s.ch,l=e.ax,k=0;k<d.length;d.length===r||(0,A.o)(d),++k){j=d[k]
i=j.a
h=new A.bb(j.b,A.a([],p),A.a([],o),A.a([],p),A.a([],o),$.az())
B.a.j(n,h)
j=m.a
j.toString
h.jR(A.wF(j),"agility")
for(j=s.gcI(),g=j.$ti,j=new A.ak(j.a(),g.i("ak<1>")),g=g.c;j.q();){f=j.b
if(f==null)f=g.a(f)
f.hI(e,q.a(a),i,h)}if(i!=null){j=l.a
j.toString
h.cW(j,"heft")
i.kB(h)}}return n},
kM(a,b){var s,r,q,p
switch(b.a){case 0:break
case 1:break
case 2:s=this.Q.ay.a
s.toString
a.r*=A.xw(s)
break}for(s=B.a.gL(this.Q.f.b),r=new A.bu(s,t.k),q=t.W;r.q();){p=q.a(s.gH())
if(p.a.r==null)p.kB(a)}},
hM(a){return this.Q.kf(a)},
kL(a,b){var s,r,q,p,o,n
t.B.a(b)
if(!this.as.G(0,b))return
s=this.Q
r=s.ax.ly(b.Q)
q=b.Q.gbp()*20/(r+19)
for(p=s.gcI(),o=p.$ti,p=new A.ak(p.a(),o.i("ak<1>")),o=o.c;p.q();){n=p.b
q=(n==null?o.a(n):n).ky(s,b,q)}this.i9(B.e.aV(q))},
kG(a,b){a.bZ("{1} [were|was] slain by {2}.",this,b)},
kI(a){var s,r,q,p=this
p.cy=a.ge3()
s=p.CW
if(s>0&&p.cx>1){r=B.c.A(p.cx-2,2)
q=p.Q.ay.a
q.toString
p.CW=B.c.M(s-r,0,A.i7(q))}++p.cx},
hK(a,b,c){var s=a.x
s===$&&A.c()
s.gaA().w=!0},
i9(a){this.Q.y+=a},
il(a){this.Q.y-=a},
pH(a){var s,r,q,p=this
if(!(p.at instanceof A.aY))p.at=null
p.cx=0
if(p.z===0)return
s=B.e.aV(a.gd2()/p.z*10)
r=p.CW
q=p.Q.ay.a
q.toString
p.CW=B.c.M(r+s,0,A.i7(q))},
pK(){var s,r,q,p=this,o=null
if(p.w.a>0){p.Q.at.Z(B.a_,"You cannot rest while poison courses through your veins!",o,o,o)
return!1}s=p.z
r=p.Q
q=r.CW.a
q.toString
if(s===B.e.N(Math.pow(q,1.458)+9)){r.at.Z(B.x,"You are fully rested.",o,o,o)
return!1}if(p.ay===0){r.at.Z(B.a_,"You are too hungry to rest.",o,o,o)
return!1}p.at=new A.lv()
return!0},
fu(a){if(this.as.j(0,a))this.Q.ax.ia(a.Q)},
fh(a){var s=this.ch,r=this.Q.cx.a
r.toString
this.ch=B.c.M(s+a,0,A.ky(r))},
bt(){var s,r,q,p,o,n,m,l,k=this,j=k.Q,i=j.ay
i.di(j)
j.ch.di(j)
s=j.CW
s.di(j)
r=j.cx
r.di(j)
j.z.pI(j)
q=j.f.gcU()
p=A.a6(q,q.$ti.i("k.E"))
for(q=p.length,o=0,n=0;n<p.length;p.length===q||(0,A.o)(p),++n)o+=p[n].gf6()
for(j=j.gcI(),q=j.$ti,j=new A.ak(j.a(),q.i("ak<1>")),q=q.c;j.q();){m=j.b
o=(m==null?q.a(m):m).kA(k,p,o)}l=i.km(B.e.P(o))
k.ax.ld(l,new A.p0(k,p,l))
j=k.z
s=s.a
s.toString
k.z=B.c.M(B.c.M(j,0,B.e.N(Math.pow(s,1.458)+9)),0,k.gbr())
s=k.ch
r=r.a
r.toString
k.ch=B.c.M(s,0,A.ky(r))
r=k.CW
i=i.a
i.toString
k.CW=B.c.M(r,0,A.i7(i))}}
A.p0.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
A:{s=g.length
r=s===2
q=r
p=h
o=!1
if(q){q=g.length
if(0>=q)return A.b(g,0)
n=g[0]
if(1>=q)return A.b(g,1)
p=g[1]
q=n.gao().a===p.gao().a
m=n
l=!0
k=!0}else{q=o
m=h
n=m
l=!1
k=!1}if(q){q=m.b1(2).gao().a
break A}if(r){if(l)m=n
else{if(0>=g.length)return A.b(g,0)
n=g[0]
m=n}if(k)j=p
else{if(1>=g.length)return A.b(g,1)
p=g[1]
j=p}q=m.gao().b+" and "+j.gao().b
break A}if(s===1){if(l)m=n
else{if(0>=g.length)return A.b(g,0)
n=g[0]
m=n}q=m.gao().b
break A}if(typeof s!=="number")return s.eh()
if(s<=0){q="your fists"
break A}q=A.a_(A.aF(h,h))}o=i.c
if(o<1&&a>=1)i.a.Q.at.Z(B.a_,"You are too weak to effectively wield "+q+".",h,h,h)
else if(o>=1&&a<1)i.a.Q.at.Z(B.x,"You feel comfortable wielding "+q+".",h,h,h)},
$S:82}
A.cQ.prototype={
ij(a){var s=this.c.m(0,a.gcJ())
return s==null?0:s}}
A.dt.prototype={
gdV(){var s,r,q,p
for(s=B.a.gL(this.f.b),r=new A.bu(s,t.k),q=t.W,p=0;r.q();)p+=q.a(s.gH()).a.ay
return p},
gdL(){var s,r,q,p,o
for(s=B.a.gL(this.f.b),r=new A.bu(s,t.k),q=t.W,p=0;r.q();){o=q.a(s.gH())
p+=o.a.Q+o.gc4()}for(s=this.gcI(),r=s.$ti,s=new A.ak(s.a(),r.i("ak<1>")),r=r.c;s.q();){q=s.b
p=(q==null?r.a(q):q).kx(this,p)}return p},
gee(){var s,r,q,p
for(s=B.a.gL(this.f.b),r=new A.bu(s,t.k),q=t.W,p=0;r.q();)p+=q.a(s.gH()).gee()
return p},
gcI(){return new A.S(this.oV(),t.kX)},
oV(){var s=this
return function(){var r=0,q=1,p=[],o
return function $async$gcI(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:r=2
return a.aO(s.b.d)
case 2:r=3
return a.aO(s.c.d)
case 3:o=s.z.a
r=4
return a.aO(new A.b6(o,A.y(o).i("b6<1>")))
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
lL(a,b,c,d){var s,r,q,p,o,n,m=this,l=null,k=t.Z,j=A.dy(k)
for(s=m.b.c,r=j.$ti.c,q=0;q<4;++q){p=B.aV[q]
o=s.m(0,p)
o.toString
o-=0.4
j.ce(r.a(p),l,l,l,o,o,l)}k=A.C(k,t.S)
for(q=0;q<4;++q)k.h(0,B.aV[q],0)
for(n=0;n<32;++n){s=j.dk(0,l,l)
s.toString
r=k.m(0,s)
r.toString
k.h(0,s,r+1)}for(s=[m.ay,m.ch,m.CW,m.cx],q=0;q<4;++q){p=s[q]
r=k.m(0,p.gbc())
r.toString
r=8+B.c.A(r+1,2)
p.b=r
p.a=B.c.M(r+p.hf(m)+m.dt(p.gbc()),1,50)}},
kf(a){var s,r,q,p
for(s=B.a.gL(this.f.b),r=new A.bu(s,t.k),q=t.W,p=0;r.q();)p+=q.a(s.gH()).c9(a)
return p},
dt(a){var s,r,q,p,o,n,m
for(s=B.a.gL(this.f.b),r=new A.bu(s,t.k),q=t.W,p=0;r.q();)for(o=q.a(s.gH()).gaj(),n=o.length,m=0;m<o.length;o.length===n||(0,A.o)(o),++m)p+=o[m].dt(a)
return p},
spx(a){this.as=A.r(a)}}
A.hy.prototype={
gjS(){var s=this.b
return new A.cT(s,A.y(s).i("cT<2>")).av(0,0,new A.q_(),t.S)},
ia(a){var s,r=this.a
r.b8(a,new A.q2())
s=r.m(0,a)
s.toString
r.h(0,a,s+1)},
ly(a){var s,r=this.b
r.b8(a,new A.q3())
s=r.m(0,a)
s.toString;++s
r.h(0,a,s)
return s},
dc(a){var s,r,q,p,o=this.c,n=a.a
o.b8(n,new A.q0())
s=o.m(0,n)
s.toString
o.h(0,n,s+1)
for(o=a.gaj(),n=o.length,s=this.d,r=0;r<o.length;o.length===n||(0,A.o)(o),++r){q=o[r].a
s.b8(q,new A.q1())
p=s.m(0,q)
p.toString
s.h(0,q,p+1)}},
pZ(a){var s,r=this.f,q=a.a
r.b8(q,new A.q4())
s=r.m(0,q)
s.toString
r.h(0,q,s+1)},
ib(a){var s=this.a.m(0,a)
return s==null?0:s},
el(a){var s=this.b.m(0,a)
return s==null?0:s},
kk(a){var s=this.c.m(0,a)
return s==null?0:s}}
A.q_.prototype={
$2(a,b){return A.r(a)+A.r(b)},
$S:24}
A.q2.prototype={
$0(){return 0},
$S:2}
A.q3.prototype={
$0(){return 0},
$S:2}
A.q0.prototype={
$0(){return 0},
$S:2}
A.q1.prototype={
$0(){return 0},
$S:2}
A.q4.prototype={
$0(){return 0},
$S:2}
A.c1.prototype={}
A.aJ.prototype={
hI(a,b,c,d){},
kx(a,b){return b},
eX(a){return B.i3},
kA(a,b,c){t.aa.a(b)
return c},
ky(a,b,c){return c},
kz(a,b,c){return c}}
A.mU.prototype={}
A.cW.prototype={}
A.fd.prototype={}
A.hO.prototype={
dP(a){var s=this.a
if(a.y.Q.b!==s)return"Not a "+s.a
return null},
gW(){return"You must be a "+this.a.a}}
A.ai.prototype={
am(a,b){return B.c.am(this.a,t.M.a(b).a)},
$iaB:1}
A.i3.prototype={
eR(a){var s=this.a.m(0,a)
return s==null?0:s},
oH(a){var s=this.b.m(0,a)
return s==null?0:s},
bU(a){var s=this.eR(a),r=this.b.m(0,a)
return B.c.M(s+(r==null?0:r),0,15)},
pI(a){var s,r,q,p=this.b,o=A.cU(p,t.M,t.S)
p.aP(0)
for(s=B.a.gL(a.f.b),r=new A.bu(s,t.k),q=t.W;r.q();)q.a(s.gH()).gek().ae(0,new A.rc(this))
p.ae(0,new A.rd(this,o,a))}}
A.rc.prototype={
$2(a,b){var s,r
t.M.a(a)
A.r(b)
s=this.a.b
s.b8(a,new A.rb())
r=s.m(0,a)
r.toString
s.h(0,a,r+b)},
$S:20}
A.rb.prototype={
$0(){return 0},
$S:2}
A.rd.prototype={
$2(a,b){var s
t.M.a(a)
A.r(b)
s=this.b.m(0,a)
if((s==null?0:s)!==b)this.c.at.i7("You are at level "+this.a.bU(a)+" in "+a.gO()+".")},
$S:20}
A.dr.prototype={
ga2(a){return B.i.ga2(this.a)},
Y(a,b){if(b==null)return!1
return b instanceof A.dr&&this.a===b.a}}
A.n2.prototype={}
A.bd.prototype={
ld(a,b){var s=A.y(this)
s.i("bd.T").a(a)
s.i("@(bd.T)").a(b)
s=this.a
if(s===a)return
this.a=a
if(s!=null)b.$1(s)}}
A.cy.prototype={
aN(){return"Stat."+this.b}}
A.cz.prototype={
hf(a){return 0},
kX(a,b){var s,r=this
if(b!=null)r.b=b
s=r.dv(a)
r.ld(s,new A.ru(r,s,a))},
di(a){return this.kX(a,null)},
hA(a){var s=a.ay.b,r=a.ch.b,q=a.CW.b,p=a.cx.b,o=a.b.c.m(0,this.gbc())
o.toString
return B.e.N(400*(1/o)*Math.pow(A.w(s+r+q+p,48,160,1,40),2))},
dv(a){return B.c.M(this.b+this.hf(a)+a.dt(this.gbc()),1,50)},
t(a){return this.gbc().c}}
A.ru.prototype={
$1(a){var s=this.b-A.r(a),r=this.a,q=this.c.at
if(s>0)q.i7("You feel "+r.gez()+"! Your "+r.gbc().c+" increased by "+s+".")
else q.Z(B.a_,"You feel "+r.geD()+"! Your "+r.gbc().c+" decreased by "+-s+".",null,null,null)},
$S:45}
A.i6.prototype={
gbc(){return B.ak},
gez(){return"mighty"},
geD(){return"weak"},
hf(a){return-a.gee()},
km(a){var s,r=this.a
r.toString
s=B.e.M(r-a,-10,50)
if(s<0)return A.w(s,-10,-1,0,0.6)
else return A.w(s,0,50,1,2)}}
A.fW.prototype={
gbc(){return B.ae},
gez(){return"dextrous"},
geD(){return"clumsy"}}
A.ih.prototype={
gbc(){return B.ar},
gez(){return"tough"},
geD(){return"sickly"}}
A.hj.prototype={
gbc(){return B.a3},
gez(){return"smart"},
geD(){return"stupid"}}
A.cm.prototype={
gcd(){return this.a.w.$1(this.b)},
gd6(){return this.a.x.$1(this.b)},
gd5(){return this.a.y.$1(this.b)},
c9(a){var s=this.a.as.m(0,a)
if(s==null)return 0
return s.$1(this.b)},
dt(a){var s=this.a.at.m(0,a)
if(s==null)return 0
return s.$1(this.b)},
gek(){var s,r,q,p=t.M,o=A.C(p,t.S)
for(p=A.xe(this.a.ch,p,t.Q),s=A.y(p),p=new A.bs(J.aw(p.a),p.b,s.i("bs<1,2>")),r=this.b,s=s.y[1];p.q();){q=p.a
if(q==null)q=s.a(q)
o.h(0,q.a,q.b.$1(r))}return o},
t(a){return this.a.a+" "+this.b}}
A.ex.prototype={
fw(){var s=this.e
s=s==null?null:s.$0()
return new A.cm(this,s==null?0:s)},
ls(a,b){this.as.h(0,t.h.a(a),t.Q.a(b))},
lu(a,b){this.at.h(0,t.Z.a(a),t.Q.a(b))},
t(a){return this.a}}
A.eM.prototype={
gku(){return B.Z},
gcU(){var s=t.bC
return new A.ap(new A.ii(this.b,s),s.i("z(k.E)").a(new A.ov()),s.i("ap<k.E>"))},
gI(a){return B.a.av(this.b,0,new A.ou(),t.S)},
d3(){var s,r,q,p,o,n=A.an(9,null,!1,t.c)
for(s=this.b,r=0;r<9;++r){q=s[r]
if(q!=null){p=q.a
o=q.f
B.a.h(n,r,new A.L(p,q.b,q.c,q.d,o))}}return new A.eM(n)},
oS(a){return B.a.cH(B.aF,new A.ot(a))},
bo(){},
ke(a){var s,r,q,p,o,n,m,l,k,j=a.a,i=j.e
if(i==="hand"){i=t.t
s=A.a([],i)
r=A.a([],i)
for(i=this.b,q=0;q<9;++q)if(B.aF[q]==="hand"){B.a.j(s,q)
if(i[q]!=null)B.a.j(r,q)}p=r.length
if(p===0){if(0>=s.length)return A.b(s,0)
B.a.h(i,s[0],a)
return B.bD}if(p===1){if(0>=p)return A.b(r,0)
o=r[0]
if(!(o<9))return A.b(i,o)
o=i[o].a.f}else o=!1
if(o){if(0>=p)return A.b(r,0)
j=r[0]
if(!(j<9))return A.b(i,j)
j=i[j]
j.toString
if(0>=s.length)return A.b(s,0)
B.a.h(i,s[0],a)
return A.a([j],t.I)}if(j.f){n=A.a([],t.I)
for(j=r.length,m=0;m<r.length;r.length===j||(0,A.o)(r),++m){l=r[m]
if(!(l<9))return A.b(i,l)
p=i[l]
p.toString
B.a.j(n,p)
B.a.h(i,l,null)}if(0>=s.length)return A.b(s,0)
B.a.h(i,s[0],a)
return n}if(p===2){if(0>=p)return A.b(r,0)
j=r[0]
if(!(j<9))return A.b(i,j)
p=i[j]
p.toString
B.a.h(i,j,a)
return A.a([p],t.I)}if(0>=p)return A.b(r,0)
j=r[0]
p=s.length
if(0>=p)return A.b(s,0)
o=s[0]
if(j===o){if(1>=p)return A.b(s,1)
B.a.h(i,s[1],a)}else B.a.h(i,o,a)
return B.bD}for(j=this.b,k=-1,q=0;q<9;++q)if(B.aF[q]===i){if(j[q]==null){B.a.h(j,q,a)
return B.bD}k=q}if(!(k>=0&&k<9))return A.b(j,k)
i=j[k]
i.toString
n=A.a([i],t.I)
B.a.h(j,k,a)
return n},
ah(a,b){var s,r
for(s=this.b,r=0;r<9;++r)if(s[r]===b){B.a.h(s,r,null)
break}},
gL(a){return new A.bu(B.a.gL(this.b),t.k)},
gem(){return B.aF},
gcz(){return this.b}}
A.ov.prototype={
$1(a){return t.W.a(a).a.r!=null},
$S:11}
A.ou.prototype={
$2(a,b){A.r(a)
return a+(t.c.a(b)==null?0:1)},
$S:86}
A.ot.prototype={
$1(a){return this.a.a.e===A.a3(a)},
$S:87}
A.mp.prototype={}
A.c7.prototype={}
A.bD.prototype={
gem(){return B.i2},
gcz(){return this},
$ik:1}
A.bZ.prototype={
gI(a){return this.b.length},
d3(){var s=this.b,r=A.N(s)
return A.bq(this.a,new A.au(s,r.i("L(1)").a(new A.pf()),r.i("au<1,L>")))},
ah(a,b){B.a.ah(this.b,b)},
jX(a){var s,r,q,p,o=this.c
if(o===0||this.b.length<o)return!0
s=a.f
for(o=this.b,r=o.length,q=0;q<o.length;o.length===r||(0,A.o)(o),++q){p=o[q]
if(p.jZ(a)){s-=p.a.CW-p.f
if(s<=0)return!0}}return!1},
fo(a,b){var s,r,q,p,o,n=a.f
for(s=this.b,r=s.length,q=n,p=0;o=s.length,p<o;s.length===r||(0,A.o)(s),++p){s[p].lA(a)
q=a.f
if(q===0)return new A.dQ(n,0)}r=this.c
if(r!==0&&o>=r)return new A.dQ(n-q,q)
B.a.j(s,a)
B.a.fv(s)
if(b)this.d=a
return new A.dQ(n,0)},
ca(a){return this.fo(a,!1)},
bo(){var s,r=this.b,q=A.a(r.slice(0),A.N(r))
B.a.aP(r)
for(r=q.length,s=0;s<q.length;q.length===r||(0,A.o)(q),++s)this.ca(q[s])},
gL(a){var s=this.b
return new J.aX(s,s.length,A.N(s).i("aX<1>"))},
gku(){return this.a}}
A.pf.prototype={
$1(a){return t.W.a(a).d3()},
$S:89}
A.dQ.prototype={}
A.mG.prototype={}
A.L.prototype={
gaj(){var s=A.a([],t.o_),r=this.b
if(r!=null)s.push(r)
r=this.c
if(r!=null)s.push(r)
r=this.d
if(r!=null)s.push(r)
return s},
gb3(){var s,r,q,p=$.az(),o=this.a.x,n=o!=null?o.e:p
for(o=this.gaj(),s=o.length,r=0;r<s;++r){q=o[r].a.Q
if(q!==p)n=q}return n},
gcd(){return B.a.av(this.gaj(),0,new A.pH(),t.S)},
gd6(){return B.a.av(this.gaj(),1,new A.pC(),t.i)},
gd5(){return B.a.av(this.gaj(),0,new A.pB(),t.S)},
gc4(){return B.a.av(this.gaj(),0,new A.pA(),t.S)},
gao(){var s,r=this,q=r.e
if(q===$){s=r.n3()
r.e!==$&&A.er()
r.e=s
q=s}return q},
gbg(){var s,r,q,p,o=this,n=o.a.as,m=1+o.gaj().length
for(s=o.gaj(),r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
n*=p.a.ay.$1(p.b)*m}for(s=o.gaj(),r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
n+=p.a.ax.$1(p.b)*m}return B.e.aV(n)},
gee(){return Math.max(0,B.a.av(this.gaj(),this.a.at,new A.pI(),t.S))},
gf6(){return B.e.P(B.a.av(this.gaj(),this.a.ax,new A.pD(),t.i))},
kB(a){var s,r,q,p,o,n,m
for(s=this.gaj(),r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
o=p.a
n=p.b
m=o.a+" "+n
a.jR(o.w.$1(n),m)
a.cW(o.x.$1(n),m)
a.ou(o.y.$1(n),m)}s=this.gb3()
if(s!==$.az())a.f=s},
c9(a){return B.a.av(this.gaj(),0,new A.pE(a),t.S)},
gek(){var s,r,q,p=A.C(t.M,t.S)
for(s=this.gaj(),r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q)s[q].gek().ae(0,new A.pG(p))
return p},
am(a,b){var s,r,q,p,o=this
t.W.a(b)
s=o.a.d
r=b.a.d
if(s!==r)return B.c.am(s,r)
if(o.gaj().length!==b.gaj().length)return B.c.am(o.gaj().length,b.gaj().length)
for(q=0;q<o.gaj().length;++q){s=o.gaj()
if(!(q<s.length))return A.b(s,q)
p=s[q]
s=b.gaj()
if(!(q<s.length))return A.b(s,q)
r=p.a.d
s=s[q].a.d
if(r!==s)return B.c.am(r,s)}s=o.f
r=b.f
if(s!==r)return B.c.am(r,s)
return 0},
b1(a){var s=this,r=a==null?s.f:a
return new A.L(s.a,s.b,s.c,s.d,r)},
d3(){return this.b1(null)},
jZ(a){if(this.a!==a.a)return!1
if(this.gaj().length!==0)return!1
if(a.gaj().length!==0)return!1
return!0},
lA(a){var s,r,q=this
if(!q.jZ(a))return
s=q.f+a.f
r=q.a.CW
if(s<=r){q.f=s
a.f=0}else{q.f=r
a.f=s-r}},
dr(a){this.f-=a
return this.b1(a)},
n3(){var s,r,q,p,o=t.s,n=A.a([],o),m=A.a([],o)
for(o=this.gaj(),s=o.length,r=0;r<o.length;o.length===s||(0,A.o)(o),++r){q=o[r].a
p=q.b
if(q.c)B.a.j(n,p)
else B.a.j(m,p)}return this.a.a.jW(this.f,n,m)},
$iaB:1}
A.pH.prototype={
$2(a,b){return A.r(a)+t.L.a(b).gcd()},
$S:14}
A.pC.prototype={
$2(a,b){return A.bw(a)*t.L.a(b).gd6()},
$S:41}
A.pB.prototype={
$2(a,b){return A.r(a)+t.L.a(b).gd5()},
$S:14}
A.pA.prototype={
$2(a,b){A.r(a)
t.L.a(b)
return a+b.a.z.$1(b.b)},
$S:14}
A.pI.prototype={
$2(a,b){A.r(a)
t.L.a(b)
return a+b.a.r.$1(b.b)},
$S:14}
A.pD.prototype={
$2(a,b){A.bw(a)
t.L.a(b)
return a*b.a.f.$1(b.b)},
$S:41}
A.pE.prototype={
$2(a,b){return A.r(a)+t.L.a(b).c9(this.a)},
$S:14}
A.pG.prototype={
$2(a,b){var s,r
t.M.a(a)
A.r(b)
s=this.a
s.b8(a,new A.pF())
r=s.m(0,a)
r.toString
s.h(0,a,r+b)},
$S:20}
A.pF.prototype={
$0(){return 0},
$S:2}
A.bP.prototype={}
A.rX.prototype={}
A.aR.prototype={
t(a){return this.a.a7(1).a}}
A.lr.prototype={
nt(a){var s,r,q,p,o,n,m,l
t.E.a(a)
s=A.cU(this.a,t.q,t.S)
for(r=a.b,q=A.N(r),r=new J.aX(r,r.length,q.i("aX<1>")),q=q.c;r.q();){p=r.d
if(p==null)p=q.a(p)
o=p.a
if(!s.ak(o))return null
n=s.m(0,o)
n.toString
s.h(0,o,n-p.f)}r=A.y(s).i("b6<1>")
r=A.a6(new A.b6(s,r),r.i("k.E"))
q=r.length
m=0
for(;m<r.length;r.length===q||(0,A.o)(r),++m){l=r[m]
p=s.m(0,l)
p.toString
if(p<=0)s.ah(0,l)}return s}}
A.dA.prototype={
oX(){var s=A.bq(new A.c7(this.b,26),null)
this.aK(s)
return s},
aK(a){var s,r,q,p,o,n,m,l,k,j,i=$.n(),h=a.c,g=B.e.N(i.aF(h*0.2,h*0.4))
for(s=a.b,r=i.a;q=s.length,q>g;){q=r.a5(q)
if(!(q>=0&&q<s.length))return A.b(s,q)
p=s[q]
B.a.cO(s,q)
if(a.d===p)a.d=null}o=B.e.N(i.aF(h*0.3,h*0.7))
i=this.a
h=a.gla()
n=0
for(;;){if(s.length<o){m=n+1
r=n<100
n=m}else r=!1
if(!r)break
i.b2(null,1,h)
for(l=1;l<s.length;++l){k=l-1
j=s[k]
p=s[l]
if(j.a===p.a&&j.gaj().length===0&&p.gaj().length===0){if(!(l<s.length))return A.b(s,l)
p=s[l]
B.a.cO(s,l)
if(a.d===p)a.d=null
l=k}}}}}
A.jE.prototype={}
A.aA.prototype={
gbp(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.ay
for(s=g.CW,r=s.length,q=0;q<r;++q)f+=s[q].a
s=6+g.z
if(!(s>=0&&s<13))return A.b(B.aS,s)
s=B.aS[s]
for(r=g.d,p=r.length,o=0,q=0;q<p;++q){n=r[q]
o+=n.c*n.e.e}for(r=g.e,m=r.length,l=0,k=0,q=0;q<r.length;r.length===m||(0,A.o)(r),++q){j=r[q]
i=j.a
l+=j.gbp()/i
k+=1/i}r=g.ax
h=r.a?1.1:1
if(r.b)h*=0.9
if(r.c)h*=1.05
if(r.d)h*=0.7
if(r.e)h*=1.1
return B.e.aV(g.f*(1+f/100)*s*(o/p*(1-k)+l)*h*A.w(g.y,0,100,1,0.7)/100)},
fz(a,b){var s=b!=null?b.as+1:1,r=a.gn(),q=a.gp(),p=new A.ad(this,s,new A.cp(),A.C(t.d0,t.cZ),$.n().bs(60,200),new A.hb(),new A.dS(),new A.h1(),new A.dS(),new A.he(),new A.hg(),new A.hL(),new A.hM(),A.C(t.h,t.mF),new A.e(r,q))
p.lN(this,r,q,s)
return p},
ik(a){return this.fz(a,null)},
lz(){var s,r,q=this,p=A.a([],t.fO),o=$.n().aC(q.cx,q.cy)
for(s=0;s<o;++s)B.a.j(p,q)
r=q.db
if(r!=null)r.cX(B.e.bQ(q.c*0.9),t.or.a(B.a.got(p)))
return p},
t(a){return this.a.a}}
A.fl.prototype={
aN(){return"SpawnLocation."+this.b}}
A.nQ.prototype={
t(a){var s=this,r=A.a([],t.s)
if(s.a)r.push("berzerk")
if(s.b)r.push("cowardly")
if(s.c)r.push("fearless")
if(s.d)r.push("immobile")
if(s.e)r.push("protective")
if(s.f)r.push("unique")
return B.a.aG(r," ")}}
A.ad.prototype={
geQ(){return this.Q.b},
gao(){return this.Q.a},
gbr(){return this.Q.f},
gdL(){return 0},
gdV(){return this.Q.ch},
gdn(){var s=this.Q,r=s.w,q=r+s.x
if(q===0)return 0
return r/q},
lN(a,b,c,d){var s,r,q,p,o=this
o.z=B.c.M(o.Q.f,0,o.gbr())
s=o.at
s.a!==$&&A.ay()
s.a=o
s=o.Q
if(s.ax.b)o.cx*=0.7
for(s=s.e,r=s.length,q=o.ax,p=0;p<s.length;s.length===r||(0,A.o)(s),++p)q.h(0,s[p],0)},
le(a){var s,r=this.ax,q=r.m(0,a)
q.toString
s=a.a
r.h(0,a,q+$.n().aF(s,s*1.3))},
gjU(){return 6+this.Q.z},
gjT(){return this.Q.ay},
cr(){return this.Q.at},
kJ(){return this.Q.CW},
ap(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="{1} is afraid!"
for(s=i.Q.e,r=s.length,q=i.ax,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
n=q.m(0,o)
n.toString
q.h(0,o,Math.max(0,n-1))}m=0+i.nU(a)+i.n_(a)
s=i.ch*0.75+m*0.2
i.ch=s
i.ch=B.e.M(s,0,1)
s=i.y
l=5+s.S(0,a.y.y).gb5()
r=a.x
r===$&&A.c()
s=r.f.B(s.gn(),s.gp())
if(!(!s.b&&s.d+s.e>s.c))l=5+l*2
i.dE(-(2+l*i.z/i.Q.f))
i.CW=B.e.M(i.CW,0,i.cx)
k=Math.max(m,i.ch)
A.ct(i,"aware",m,h)
A.ct(i,"alert",i.ch,h)
A.ct(i,"notice",k,h)
A.ct(i,"fear",i.CW/i.cx,h)
j=i.at
s=j instanceof A.cp
if(s&&i.CW>i.cx){i.h9()
return A.jI(g,new A.cH(),B.b8)}if(s){s=$.n()
r=i.lY(k)
r=s.U(100)<r
s=r}else s=!1
if(s){i.ch=1
i.h9()
return A.jI("{1} wakes up!",new A.cI(),B.bS)}s=j instanceof A.cI
if(s&&i.CW>i.cx)return A.jI(g,new A.cH(),B.b8)
if(s&&k<0.01){i.ch=0
return A.jI("{1} falls asleep.",new A.cp(),h)}if(j instanceof A.cH&&i.CW<=0)return A.jI("{1} find[s] {1 his} courage.",new A.cI(),h)
return i.at.bJ(a)},
lY(a){var s
if(a<0.1)return 0
if(a>0.8)return 100
s=A.w(a,0.1,0.8,0,1)
return B.e.P(A.w(s*s*s,0,1,5,100))},
nU(a){var s,r,q,p,o,n=this,m="see"
if(n.Q.w===0){A.ct(n,m,0,"sightless")
return 0}s=a.y.y
r=a.x
r===$&&A.c()
if(!r.eU(n,s)){A.ct(n,m,0,"out of sight")
return 0}r=r.f.B(s.gn(),s.gp())
q=r.d+r.e
if(q===0){A.ct(n,m,0,"hero in dark")
return 0}p=s.S(0,n.y).gb5()
r=n.Q.w
if(p>=r){A.ct(n,m,0,"too far")
return 0}o=(r-p)/r
A.ct(n,m,q*o,null)
return q/64*o},
n_(a){var s,r,q,p=this
if(p.Q.x===0){A.ct(p,"hear",0,"deaf")
return 0}s=a.x
s===$&&A.c()
r=p.y
s=s.geL()
r=s.jI(s.j2(r))
s=a.y.cy
q=r*s*p.Q.x/10
A.ct(p,"hear",q,"noise "+A.J(s)+", volume "+A.J(q))
return q},
dE(a){var s,r=this
if(r.z<=0)return
s=r.Q.ax
if(s.c)return
if(s.d)return
r.CW=Math.max(0,r.CW+a)},
kF(a){var s=$.n(),r=t.aH.a(this.Q.d)
s=s.U(r.length)
if(!(s>=0&&s<r.length))return A.b(r,s)
return A.a([A.bO(r[s])],t.o0)},
hM(a){return 0},
kK(a,b,c){var s,r,q=a.c
q===$&&A.c()
s=q.y.Q.CW.a
s.toString
r=100*c/B.e.N(Math.pow(s,1.458)+9)
this.dE(-r)
s=q.y.Q.CW.a
s.toString
A.jW(this,"fear","hit for "+c+"/"+B.e.N(Math.pow(s,1.458)+9)+" decrease by "+A.J(r))
this.jG(q,new A.qj(a,c))},
op(a,b){var s,r=this
if(r.at instanceof A.cp)return
s=50*b/r.Q.f
r.dE(-s)
A.jW(r,"fear","witness "+b+"/"+r.Q.f+" decrease by "+A.J(s))},
kO(a,b,c){var s,r,q,p,o,n,m=this
m.ch=1
s=m.Q
r=100*c/s.f
if(s.ax.a)r*=-3
m.dE(r)
A.jW(m,"fear","hit for "+c+"/"+m.Q.f+" increases by "+A.J(r))
s=a.c
s===$&&A.c()
m.jG(s,new A.qk(m,a,c))
q=m.Q.e
p=A.N(q)
o=p.i("ap<1>")
n=A.a6(new A.ap(q,p.i("z(1)").a(new A.ql(m,c)),o),o.i("k.E"))
q=n.length
if(q!==0){p=$.n()
t.kz.a(n)
q=p.U(q)
if(!(q>=0&&q<n.length))return A.b(n,q)
q=n[q]
m.le(q)
a.hj(q.bW(s,m),m)}},
oq(a,b,c){var s,r,q,p=this
if(p.at instanceof A.cp)return
s=p.Q
r=50*c/s.f
q=s.ax
if(q.e&&b.Q===s)r*=-2
else if(q.a)r*=-1
p.dE(r)
A.jW(p,"fear","witness "+c+"/"+p.Q.f+" increase by "+A.J(r))},
kG(a,b){var s,r,q,p,o,n,m,l,k=this,j=a.c
j===$&&A.c()
s=j.x
s===$&&A.c()
r=k.y
q=k.Q
p=s.e6(r,q.Q,q.c)
for(s=p.length,o=0;o<p.length;p.length===s||(0,A.o)(p),++o){n=p[o]
r=j.x
r===$&&A.c()
q=a.b
q===$&&A.c()
r=r.f
m=q.gn()
q=q.gp()
r.l(m,q)
l=r.a
m=q*r.b.b.a+m
if(!(m>=0&&m<l.length))return A.b(l,m)
m=l[m]
if(!m.b&&m.d+m.e>m.c||a.a instanceof A.at)j.y.Q.at.Z(B.x,"{1} drop[s] {2}.",k,n,null)}j=j.x
j===$&&A.c()
j.kY(k)},
hK(a,b,c){var s,r=a.x
r===$&&A.c()
s=r.f.B(b.gn(),b.gp())
if(!(!s.b&&s.d+s.e>s.c)){s=r.f.B(c.gn(),c.gp())
s=!s.b&&s.d+s.e>s.c}else s=!0
if(s){s=a.y
if(!(s.at instanceof A.aY))s.at=null}s=r.f.B(b.gn(),b.gp())
if(!(!s.b&&s.d+s.e>s.c)){r=r.f.B(c.gn(),c.gp())
r=!r.b&&r.d+r.e>r.c}else r=!1
if(r)a.y.fu(this)},
jG(a,b){var s,r,q,p,o,n,m
t.lL.a(b)
s=a.x
s===$&&A.c()
r=s.b
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.o)(r),++p){o=r[p]
if(o===this)continue
if(!(o instanceof A.ad))continue
n=o.y
m=this.y
n=n.S(0,m)
if(Math.max(Math.abs(n.a),Math.abs(n.b))>20)continue
if(s.eU(o,m))b.$1(o)}},
h9(){var s,r,q,p,o
for(s=this.Q.e,r=s.length,q=this.ax,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
q.h(0,o,$.n().aS(o.a/2))}}}
A.qj.prototype={
$1(a){a.op(this.a,this.b)},
$S:40}
A.qk.prototype={
$1(a){a.oq(this.b,this.a,this.c)},
$S:40}
A.ql.prototype={
$1(a){return t.d0.a(a).ig(this.a,this.b)},
$S:39}
A.jH.prototype={
V(){var s,r,q,p=this
p.a1(p.e,p.a)
s=p.r
if(s!=null)p.cG(s,p.a)
r=t.B.a(p.a)
q=r.at=p.f
q.a!==$&&A.ay()
q.a=r
r=p.c
r===$&&A.c()
return p.be(q.bJ(r))}}
A.qh.prototype={
hQ(a){var s,r=this,q=r.e
if(q!=null){s=r.c
s=r.e0(a.b,s)<r.e0(q.b,s)}else s=!0
if(s)q=r.e=a
if(a.c>=r.d.Q.r)return q.a
return null},
e0(a,b){var s,r=b.S(0,a),q=Math.abs(r.a)
r=Math.abs(r.b)
s=Math.min(q,r)
return(Math.max(q,r)-s)*10+s*11},
fB(a,b){var s,r,q,p=this,o=null
if(b.x!==0)return o
s=a.S(0,p.b).gb5()===1
if(p.a.w.B(a.a,a.b)!=null){if(s)return o
return 60}r=b.a.e
q=$.bL()
if(r.Y(0,q))if((p.d.gb6().a&q.a)!==0)return 20
else if(s)return o
else return 80
if((r.a&p.d.gb6().a)!==0)return 10
return o},
hS(a){return a.a},
i6(){var s=this.e
if(s==null)return null
return s.a}}
A.f0.prototype={
h0(a,b){var s,r,q,p,o=this.a
o===$&&A.c()
s=o.Q.y
if(o.b.a>0||o.d.a>0)s+=B.e.N(o.gdn()*50)
else if(o.y.F(0,b).Y(0,a.y.y))s=s/4|0
s=Math.min(s,90)
if(!($.n().U(100)<s))return b
if(b===B.r)r=B.a6
else{r=A.a([],t.T)
for(q=0;q<3;++q){B.a.j(r,b.gba())
B.a.j(r,b.gbb())}for(q=0;q<2;++q){B.a.j(r,b.gbG())
B.a.j(r,b.gbX())}B.a.j(r,b.gbG().gba())
B.a.j(r,b.gbX().gbb())}o=A.N(r)
p=o.i("ap<1>")
r=A.a6(new A.ap(r,o.i("z(1)").a(new A.qi(this,a)),p),p.i("k.E"))
o=r.length
if(o===0)return b
p=$.n()
t.du.a(r)
o=p.U(o)
if(!(o>=0&&o<r.length))return A.b(r,o)
return r[o]}}
A.qi.prototype={
$1(a){var s,r,q,p
t.j.a(a)
s=this.a.a
s===$&&A.c()
r=s.y.F(0,a)
q=this.b
p=q.x
p===$&&A.c()
if(!(p.bn(r,s.gb6())&&p.f.B(r.a,r.b).x===0))return!1
s=p.w.B(r.a,r.b)
return s==null||s===q.y},
$S:9}
A.cp.prototype={
bJ(a){return A.lu()}}
A.cI.prototype={
bJ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.mE(a)
if(b!==B.r)return A.bt(b)
s=c.a
s===$&&A.c()
r=s.Q.e
q=A.N(r)
p=q.i("ap<1>")
o=A.a6(new A.ap(r,q.i("z(1)").a(new A.nL(c,a)),p),p.i("k.E"))
r=o.length
if(r!==0){q=$.n()
t.kz.a(o)
r=q.U(r)
if(!(r>=0&&r<o.length))return A.b(o,r)
r=o[r]
s.le(r)
return r.bW(a,s)}r=s.Q
if(r.ax.d){n=a.y.y.S(0,s.y)
if(n.gb5()!==1)return A.lu()
return A.bt(n.gkD())}s.ay=!0
for(q=r.e,p=q.length,m=0,l=0,k=0;k<p;++k){j=q[k]
if(!(j instanceof A.h_))continue
m+=j.b.c/j.a;++l}if(l!==0){for(q=r.d,p=q.length,i=0,h=0,k=0;k<p;++k){i+=q[k].c;++h}if(h>0)i/=h
m/=l
g=100*m/(m+i)+s.CW+100*(1-s.z/r.f)
if(s.y.S(0,a.y.y).eh(0,1))s.ay=g<60
else s.ay=g<30}f=c.mM(a)
e=l>0?c.mN(a):null
if(s.ay)d=f==null?e:f
else d=e==null?f:e
return A.bt(c.h0(a,d==null?B.r:d))},
mE(a){var s,r,q=a.x
q===$&&A.c()
s=this.a
s===$&&A.c()
r=s.y
if(q.f.B(r.gn(),r.gp()).x===0)return B.r
return A.cw(q,s.y,s.gb6(),null,!0,null).hs(new A.nJ(a))},
mN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={}
c.a=9999
s=this.a
s===$&&A.c()
r=s.Q.e
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.o)(r),++p){o=r[p]
if(o.gaD()>0&&o.gaD()<c.a)c.a=o.gaD()}n=new A.nK(c,this,a)
if(n.$1(s.y)){m=s.y.S(0,a.y.y).gb5()
l=B.r}else{l=null
m=0}for(r=a.y,p=0;p<8;++p){k=B.a6[p]
j=s.y.F(0,k)
q=a.x
q===$&&A.c()
i=s.cr()
if(q.bn(j,s.e.a>0?new A.ah(i.a|$.V().a):i)){h=q.w
g=j.a
f=j.b
h.l(g,f)
e=h.a
g=f*h.b.b.a+g
if(!(g>=0&&g<e.length))return A.b(e,g)
g=e[g]==null
h=g}else h=!1
if(h){q=q.f
h=j.a
g=j.b
q.l(h,g)
f=q.a
h=g*q.b.b.a+h
if(!(h>=0&&h<f.length))return A.b(f,h)
h=f[h].x===0
q=h}else q=!1
if(!q)continue
if(!n.$1(j))continue
q=j.S(0,r.y)
d=Math.max(Math.abs(q.a),Math.abs(q.b))
if(d>m){m=d
l=k}}if(l!=null)return l
r=a.x
r===$&&A.c()
k=A.cw(r,s.y,s.gb6(),null,!0,c.a).hs(n)
if(k!==B.r){A.cs(s,"ranged position "+k.t(0))
return k}A.cs(s,"no good ranged position")
return null},
mM(a){var s,r,q=this.mL(a)
if(q!=null)return q
s=a.x
s===$&&A.c()
r=this.a
r===$&&A.c()
return new A.qh(r,s,r.y,s.a.y.y).ft()},
mL(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a
f===$&&A.c()
s=a.y
r=A.ef(f.y,s.y)
q=g
p=1
while(r.q(),!0){o=r.a
if(q==null)q=o
n=a.x
n===$&&A.c()
m=n.f
l=o.gn()
k=o.gp()
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.b(j,l)
if(j[l].x>0)return g
i=f.cr()
if(!n.bn(o,f.e.a>0?new A.ah(i.a|$.V().a):i))return g
n=n.w
m=o.gn()
l=o.gp()
n.l(m,l)
k=n.a
m=l*n.b.b.a+m
if(!(m>=0&&m<k.length))return A.b(k,m)
m=k[m]
if(m!=null&&!(m instanceof A.at))return g;++p
if(p>=f.Q.r)return g
if(o.Y(0,s.y))break}h=q.S(0,f.y)
f=h.b
if(f===-1){f=h.a
if(f===-1)return B.V
else if(f===0)return B.M
else return B.S}else if(f===0)if(h.a===-1)return B.T
else return B.Q
else{f=h.a
if(f===-1)return B.U
else if(f===0)return B.L
else return B.R}},
mY(a,b){var s,r,q,p,o,n,m,l
for(s=a.y,r=A.ef(b,s.y);r.q(),!0;){q=r.a
if(q.Y(0,s.y))return!0
p=a.x
p===$&&A.c()
o=p.f
n=q.gn()
m=q.gp()
o.l(n,m)
l=o.a
n=m*o.b.b.a+n
if(!(n>=0&&n<l.length))return A.b(l,n)
n=l[n]
l=$.V()
if((n.a.e.a&l.a)===0)return!1
p=p.w
o=q.gn()
n=q.gp()
p.l(o,n)
m=p.a
o=n*p.b.b.a+o
if(!(o>=0&&o<m.length))return A.b(m,o)
o=m[o]
if(o!=null){p=this.a
p===$&&A.c()
p=o!==p}else p=!1
if(p)return!1}throw A.m(A.bN("Unreachable."))}}
A.nL.prototype={
$1(a){var s
t.d0.a(a)
s=this.a.a
s===$&&A.c()
return s.ax.m(0,a)===0&&a.bL(this.b,s)},
$S:39}
A.nJ.prototype={
$1(a){var s=this.a.x
s===$&&A.c()
return s.f.B(a.a,a.b).x===0},
$S:1}
A.nK.prototype={
$1(a){var s,r,q=this,p=q.c,o=a.S(0,p.y.y)
if(o.bi(0,q.a.a))return!1
if(o.gb5()<=2)return!1
s=p.x
s===$&&A.c()
s=s.w.B(a.gn(),a.gp())
if(s!=null){r=q.b.a
r===$&&A.c()
r=s!==r
s=r}else s=!1
if(s)return!1
return q.b.mY(p,a)},
$S:1}
A.cH.prototype={
bJ(a){var s,r,q,p,o,n=this,m=a.x
m===$&&A.c()
s=n.a
s===$&&A.c()
r=s.y
if(m.f.B(r.gn(),r.gp()).b)return A.lu()
q=A.cw(m,s.y,s.gb6(),null,!0,s.Q.r).hs(new A.nF(a))
if(q!==B.r){A.cs(s,"fleeing "+q.t(0)+" out of sight")
return A.bt(n.h0(a,q))}m=t.e0
p=new A.ap(B.a6,t.ca.a(new A.nG(n,a,s.y.S(0,a.y.y).gb5())),m)
if(!p.gaq(0)){r=$.n()
m=A.a6(p,m.i("k.E"))
t.du.a(m)
r=r.U(m.length)
if(!(r>=0&&r<m.length))return A.b(m,r)
q=m[r]
A.cs(s,"fleeing "+q.t(0)+" away from hero")
return A.bt(n.h0(a,q))}o=s.at=new A.cI()
o.a=s
return o.bJ(a)}}
A.nF.prototype={
$1(a){var s=this.a.x
s===$&&A.c()
return s.f.B(a.a,a.b).b},
$S:1}
A.nG.prototype={
$1(a){var s,r,q,p
t.j.a(a)
s=this.a.a
s===$&&A.c()
r=s.y.F(0,a)
q=this.b
p=q.x
p===$&&A.c()
if(!(p.bn(r,s.gb6())&&p.w.B(r.a,r.b)==null&&p.f.B(r.a,r.b).x===0))return!1
return r.S(0,q.y.y).gb5()>this.c},
$S:9}
A.bc.prototype={
gaD(){return 0},
bL(a,b){return!0},
ig(a,b){return!1}}
A.lo.prototype={
gaD(){return this.b.d}}
A.cr.prototype={
b_(a,b,c){var s,r,q,p=this,o=p.$ti.c
o.a(b)
p.b=Math.min(p.b,c)
s=p.a
r=c+1
if(s.length<=r)B.a.sI(s,r)
if(!(c>=0&&c<s.length))return A.b(s,c)
q=s[c]
if(q==null){q=A.hw(o)
B.a.h(s,c,q)}q.bk(q.$ti.c.a(b))},
fi(){var s,r,q,p=this.a
for(;;){s=this.b
r=p.length
if(s<r){if(!(s>=0))return A.b(p,s)
q=p[s]
q=q==null?null:q.b===q.c
q=q!==!1}else q=!1
if(!q)break
this.b=s+1}if(s>=r)return null
if(!(s>=0))return A.b(p,s)
return p[s].cP()}}
A.eN.prototype={
fH(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.a.f
if(c==null){k.d!==$&&A.ay()
k.d=new A.e(1,1)
j=j.b.b
s=j.a-2
r=j.b-2}else{q=k.b
p=Math.max(1,q.gn()-c)
o=Math.max(1,q.gp()-c)
j=j.b.b
n=Math.min(j.a-1,q.gn()+c+1)
m=Math.min(j.b-1,q.gp()+c+1)
k.d!==$&&A.ay()
k.d=new A.e(p,o)
s=n-p
r=m-o}j=t.C
j=j.a(new A.aa(A.an(s*r,-2,!1,t.S),new A.a0(new A.e(0,0),new A.e(s,r)),j))
k.c!==$&&A.ay()
k.c=j
q=k.d
q===$&&A.c()
l=k.b.S(0,q)
k.e.b_(0,l,0)
j.aZ(l.a,l.b,0)},
gcN(){return new A.S(this.pG(),t.e6)},
pG(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l
return function $async$gcN(a,b,c){if(b===1){p.push(c)
r=q}for(;;)A:switch(r){case 0:o=s.f,n=0
case 3:while(n>=o.length)if(!s.h5()){r=1
break A}m=o[n]
l=s.d
l===$&&A.c()
r=6
return a.b=m.F(0,l),1
case 6:case 4:++n
r=3
break
case 5:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
jV(a){var s,r=this.iY(t.mN.a(a)),q=r.length
if(q===0)return null
s=$.n()
t.A.a(r)
q=s.U(q)
if(!(q>=0&&q<r.length))return A.b(r,q)
q=r[q]
s=this.d
s===$&&A.c()
return q.F(0,s)},
ck(a){var s,r,q,p,o,n=this.d
n===$&&A.c()
a=a.S(0,n)
n=this.c
n===$&&A.c()
if(!n.b.G(0,a))return null
s=a.a
r=a.b
for(;;){n.l(s,r)
q=n.a
p=r*n.b.b.a+s
if(!(p>=0&&p<q.length))return A.b(q,p)
if(!(J.a9(q[p],-2)&&this.h5()))break}o=n.B(s,r)
if(o===-2||o===-1)return null
return o},
hs(a){var s,r=this.mm(this.iY(t.mN.a(a))),q=r.length
if(q===0)return B.r
s=$.n()
t.du.a(r)
q=s.U(q)
if(!(q>=0&&q<r.length))return A.b(r,q)
return r[q]},
iY(a){var s,r,q,p,o,n,m,l,k,j,i=this
t.mN.a(a)
s=A.a([],t.l)
for(r=i.f,q=null,p=0;;++p){while(p>=r.length)if(!i.h5())return s
o=r[p]
n=i.d
n===$&&A.c()
if(!a.$1(o.F(0,n)))continue
n=i.c
n===$&&A.c()
m=o.a
l=o.b
n.l(m,l)
k=n.a
m=l*n.b.b.a+m
if(!(m>=0&&m<k.length))return A.b(k,m)
j=k[m]
if(q==null||j===q)B.a.j(s,o)
else break
q=j}return s},
mm(a){var s,r=A.b7(t.j)
B.a.ae(t.A.a(a),new A.oM(this,A.b7(t.u),r))
s=A.a6(r,r.$ti.c)
return s},
h5(){var s,r=this.e.fi()
if(r==null)return!1
s=this.c
s===$&&A.c()
s=new A.oN(this,r,s.B(r.gn(),r.gp()))
s.$2(B.M,!1)
s.$2(B.L,!1)
s.$2(B.Q,!1)
s.$2(B.T,!1)
s.$2(B.V,!0)
s.$2(B.S,!0)
s.$2(B.U,!0)
s.$2(B.R,!0)
return!0}}
A.oM.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
t.u.a(a)
s=f.b
if(s.G(0,a))return
s.j(0,a)
for(s=f.a,r=s.b,q=f.c,p=0;p<8;++p){o=B.a6[p]
n=a.F(0,o)
m=s.c
m===$&&A.c()
l=m.b
if(!l.G(0,n))continue
k=s.d
k===$&&A.c()
if(n.Y(0,r.S(0,k)))q.j(0,o.gcQ())
else{k=n.a
j=n.b
m.l(k,j)
i=m.a
l=l.b.a
h=j*l+k
g=i.length
if(!(h>=0&&h<g))return A.b(i,h)
h=i[h]
if(typeof h!=="number")return h.cV()
if(h>=0){m.l(k,j)
k=a.gn()
j=a.gp()
m.l(k,j)
k=j*l+k
if(!(k>=0&&k<g))return A.b(i,k)
k=i[k]
if(typeof k!=="number")return A.Cq(k)
k=h<k
m=k}else m=!1
if(m)f.$1(n)}}},
$S:10}
A.oN.prototype={
$2(a,b){var s,r,q,p,o,n,m,l=this.b.F(0,a),k=this.a,j=k.c
j===$&&A.c()
if(!j.b.G(0,l))return
s=l.a
r=l.b
if(!J.a9(j.B(s,r),-2))return
q=k.d
q===$&&A.c()
p=l.F(0,q)
p=k.a.f.B(p.a,p.b)
o=this.c
n=k.i0(o,l.F(0,q),p,b)
q=j.$ti
if(n==null)j.aZ(s,r,q.c.a(-1))
else{m=o+n
j.aZ(s,r,q.c.a(m))
B.a.j(k.f,l)
k.e.b_(0,l,m)}},
$S:94}
A.kY.prototype={
i0(a,b,c,d){var s,r=this,q=null
if((c.a.e.a&r.r.a)===0)return q
if(r.x&&c.x>0)return q
if(r.w&&r.a.w.B(b.a,b.b)!=null)return q
s=r.y
if(s!=null)s=a>=s
else s=!1
if(s)return q
return 1}}
A.oP.prototype={
di(a){var s,r=this.a
if(r.a.y.b.a>0){this.n0()
return}for(s=0;s<8;++s)this.nD(a,s)
r.dm(a,!1,0)},
n0(){var s,r
for(s=this.a,r=A.ac(s.f.b);r.q();)s.dm(new A.e(r.b,r.c),!0,0)
s.dm(s.a.y.y,!1,0)},
nD(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
if(!(a6<8))return A.b($.wV,a6)
s=$.wV[a6]
r=s[0]
q=s[1]
a4.b=A.a([],t.mS)
s=a4.a
p=s.f
o=p.b
for(n=p.a,m=o.b.a,l=n.length,k=r.a,j=r.b,i=!1,h=1;;h=e){g=a5.F(0,new A.e(k*h,j*h))
if(!o.G(0,g))break
for(f=h+2,e=h+1,d=!1,c=0;c<=h;++c){if(i||d)s.dm(g,!0,255)
else{b=a5.S(0,g)
a=b.a
b=b.b
a0=Math.sqrt(a*a+b*b)
if(a0>24){d=!0
a1=255}else{a2=a0/24
a1=B.e.N(a2*a2*255)}a3=new A.n1(c/f,(c+1)/e)
s.dm(g,a4.n4(a3),a1)
b=g.a
a=g.b
p.l(b,a)
b=a*m+b
if(!(b>=0&&b<l))return A.b(n,b)
b=n[b]
a=$.V()
if((b.a.e.a&a.a)===0)i=a4.lU(a3)}g=g.F(0,q)
if(!o.G(0,g))break}}},
n4(a){var s,r,q,p,o,n
for(s=this.b,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(n.a<=q&&n.b>=p)return!0}return!1},
lU(a){var s,r,q,p,o,n,m
for(s=this.b,r=s.length,q=a.a,p=0;o=p<r,o;++p)if(s[p].a>q)break
if(p>0){n=p-1
if(!(n<r))return A.b(s,n)
m=s[n].b>q}else m=!1
if(o&&s[p].a<a.b)if(m){q=p-1
if(!(q>=0&&q<r))return A.b(s,q)
q=s[q]
o=q.b
if(!(p<r))return A.b(s,p)
q.b=Math.max(o,s[p].b)
B.a.cO(this.b,p)}else{if(!(p<r))return A.b(s,p)
s=s[p]
s.a=Math.min(s.a,q)}else if(m){q=p-1
if(!(q>=0&&q<r))return A.b(s,q)
q=s[q]
q.b=Math.max(q.b,a.b)}else{A.N(s).c.a(a)
s.$flags&1&&A.bx(s,"insert",2)
if(p>r)A.a_(A.hP(p,null))
s.splice(p,0,a)}s=this.b
r=s.length
if(r===1){if(0>=r)return A.b(s,0)
s=s[0]
s=s.a===0&&s.b===1}else s=!1
return s}}
A.n1.prototype={
t(a){return"("+A.J(this.a)+"-"+A.J(this.b)+")"}}
A.pS.prototype={
dh(){var s=this
if(s.f)s.nf()
if(s.r)s.ne()
if(s.w)s.d.di(s.a.a.y.y)
if(s.f||s.r||s.w){s.ns()
s.ng()
s.on()}s.w=s.r=s.f=!1},
nf(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.e
B.a.aP(a3.a)
for(s=a2.a,r=s.f,q=r.b.b,p=q.b,q=q.a,o=a2.b,n=o.$ti.c,m=o.a,l=o.b.b.a,s=s.r,k=r.a,j=k.length,i=0;i<p;++i)for(h=i*l,g=i*q,f=0;f<q;++f){e=new A.e(f,i)
r.l(f,i)
d=g+f
if(!(d>=0&&d<j))return A.b(k,d)
d=k[d]
c=B.c.M(d.a.c+d.f,0,192)
b=s.m(0,e)
b=(b==null?A.bq(B.G,null):b).b
a=A.N(b)
b=new J.aX(b,b.length,a.i("aX<1>"))
a=a.c
a0=0
while(b.q()){a1=b.d
a0=Math.max(a0,(a1==null?a.a(a1):a1).a.ay)}c+=A.kN(a0)/2|0
if(d.w.d&&d.x>0)c+=A.kN(7)
d=h+f
if(c>0){c=Math.min(c,192)
n.a(c)
o.l(f,i)
B.a.h(m,d,c)
a3.b_(0,e,255-c)}else{n.a(0)
o.l(f,i)
B.a.h(m,d,0)}}a2.jm(o,21)},
ne(){var s,r,q,p,o,n,m,l,k,j=this,i=j.c,h=i.$ti.c,g=i.a
B.a.pf(g,0,g.length,h.a(0))
s=j.e
B.a.aP(s.a)
for(r=j.a.b,q=r.length,p=i.b.b.a,o=0;o<r.length;r.length===q||(0,A.o)(r),++o){n=r[o]
m=A.kN(n.gdV())
if(m>0){l=n.y
h.a(m)
k=l.gn()
l=l.gp()
i.l(k,l)
B.a.h(g,l*p+k,m)
s.b_(0,n.y,255-m)}}j.jm(i,42)},
ns(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
for(s=this.a.f,r=s.b.b,q=r.b,r=r.a,p=this.b,o=p.a,n=p.b.b.a,m=o.length,l=this.c,k=l.a,j=l.b.b.a,i=k.length,h=s.a,g=h.length,f=0;f<q;++f)for(e=f*n,d=f*j,c=f*r,b=0;b<r;++b){s.l(b,f)
a=c+b
if(!(a>=0&&a<g))return A.b(h,a)
a=h[a]
a0=$.V()
if((a.a.e.a&a0.a)===0)continue
p.l(b,f)
a0=e+b
if(!(a0>=0&&a0<m))return A.b(o,a0)
a.d=J.wA(o[a0],0,255)
l.l(b,f)
a0=d+b
if(!(a0>=0&&a0<i))return A.b(k,a0)
a.e=J.wA(k[a0],0,255)}},
ng(){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.a.f,r=s.b.b,q=r.b,r=r.a,p=s.a,o=p.length,n=0;n<q;++n)for(m=n*r,l=0;l<r;++l){k={}
s.l(l,n)
j=m+l
if(!(j>=0&&j<o))return A.b(p,j)
j=p[j]
i=$.V()
if((j.a.e.a&i.a)!==0)continue
k.a=k.b=0
k.c=!1
h=new A.pT(k,this,l,n)
for(g=0;g<4;++g)h.$1(B.au[g])
if(!k.c)for(g=0;g<4;++g)h.$1(B.ch[g])
j.d=k.b
j.e=k.a}},
on(){var s,r,q,p,o
for(s=this.a,r=s.f.b.b,q=r.b,r=r.a,p=0;p<q;++p)for(o=0;o<r;++o)s.pd(o,p)
r=s.a.y.y
s.d9(r.gn(),r.gp(),!0)},
jm(a,b){var s,r,q,p,o,n,m,l
t.C.a(a)
s=B.e.aV(b*1.5)
for(r=a.a,q=a.b.b.a,p=r.length,o=this.e;;){n=o.fi()
if(n==null)break
m=n.gn()
l=n.gp()
a.l(m,l)
m=l*q+m
if(!(m>=0&&m<p))return A.b(r,m)
m=new A.pU(this,n,r[m],a,b)
m.$2(B.M,b)
m.$2(B.L,b)
m.$2(B.Q,b)
m.$2(B.T,b)
m.$2(B.S,s)
m.$2(B.R,s)
m.$2(B.V,s)
m.$2(B.U,s)}}}
A.pT.prototype={
$1(a){var s,r,q,p=this,o=p.c+a.c,n=p.d+a.d
if(o<0)return
s=p.b.a.f
r=s.b.b
if(o>=r.a)return
if(n<0)return
if(n>=r.b)return
q=s.B(o,n)
if(q.b)return
s=$.V()
if((q.a.e.a&s.a)===0)return
s=p.a
s.c=!0
s.b=Math.max(s.b,q.d)
s.a=Math.max(s.a,q.e)},
$S:10}
A.pU.prototype={
$2(a,b){var s,r,q,p,o=this,n=o.b.F(0,a),m=o.a,l=m.a.f
if(!l.b.G(0,n))return
s=n.a
r=n.b
l=l.B(s,r)
q=$.V()
if((l.a.e.a&q.a)===0)return
p=o.c-b
l=o.d
q=l.B(s,r)
if(typeof q!=="number")return q.cV()
if(q>=p)return
l.aZ(s,r,l.$ti.c.a(p))
if(p<=o.e)return
m.e.b_(0,n,255-p)},
$S:95}
A.f5.prototype={
t(a){return this.a.t(0)+" pos:"+this.b.t(0)+" cost:"+this.d},
gI(a){return this.c}}
A.lc.prototype={
ft(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=new A.cr(A.a([],t.nK),t.nA),a0=A.b7(t.u),a1=b.b,a2=b.c
a.b_(0,new A.f5(B.r,a1,0,0),b.e0(a1,a2))
for(a1=b.a.f,s=a1.a,r=a1.b,q=r.b.a,p=s.length;;){o=a.fi()
if(o==null)break
n=o.b
if(n.Y(0,a2))return b.hS(o)
if(!a0.j(0,n))continue
m=b.hQ(o)
if(m!=null)return m
for(l=o.c+1,k=o.d,j=o.a,i=j===B.r,h=0;h<8;++h){g=B.a6[h]
f=n.F(0,g)
if(a0.G(0,f))continue
if(!r.G(0,f))continue
e=f.a
d=f.b
a1.l(e,d)
e=d*q+e
if(!(e>=0&&e<p))return A.b(s,e)
c=b.fB(f,s[e])
if(c==null)continue
e=i?g:j
d=k+c
a.b_(0,new A.f5(e,f,l,d),d+b.e0(f,a2))}}return b.i6()},
e0(a,b){return b.S(0,a).gb5()}}
A.re.prototype={
q_(a,b){if(b.S(0,a).gb5()>16)return 0
return this.jI(new A.tH(this.a,a,b).ft())},
j2(a){var s
if(this.a.a.y.y.S(0,a).gb5()>16)return 16
this.nC()
s=this.b.ck(a)
return s==null?16:s},
jI(a){var s=(16-a)/16
return s*s},
nC(){var s,r,q=this,p=q.b
if(p!=null&&q.a.a.y.y.Y(0,p.b))return
p=q.a
s=p.a.y.y
r=new A.n3(p,s,new A.cr(A.a([],t.k5),t.r),A.a([],t.l))
r.fH(p,s,null)
q.b=r}}
A.n3.prototype={
i0(a,b,c,d){var s,r,q=null
if(a>=16)return q
s=b.a
if(s<1)return q
r=this.a.f.b.b
if(s>=r.a-1)return q
s=b.b
if(s<1)return q
if(s>=r.b-1)return q
return A.yc(c)}}
A.tH.prototype={
hQ(a){if(a.d>16)return 16
return null},
fB(a,b){return A.yc(b)},
hS(a){return a.d},
i6(){return 16}}
A.rg.prototype={
gaA(){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===$){s=A.a([],t.k5)
r=l.f.b.b
q=r.a
r=r.b
p=t.S
o=q*r
n=A.an(o,0,!1,p)
m=t.C
p=A.an(o,0,!1,p)
l.c!==$&&A.er()
k=l.c=new A.pS(l,new A.aa(n,new A.a0(new A.e(0,0),new A.e(q,r)),m),new A.aa(p,new A.a0(new A.e(0,0),new A.e(q,r)),m),new A.oP(l,B.i0),new A.cr(s,t.r))}return k},
geL(){var s=this.d
return s===$?this.d=new A.re(this):s},
eU(a,b){var s,r,q,p,o,n,m,l
for(s=A.ef(a.y,b),r=this.f,q=r.a,p=r.b.b.a,o=q.length;s.q(),!0;){n=s.a
if(n.Y(0,b))return!0
m=n.gn()
l=n.gp()
r.l(m,l)
m=l*p+m
if(!(m>=0&&m<o))return A.b(q,m)
m=q[m]
l=$.V()
if((m.a.e.a&l.a)===0)return!1}throw A.m(A.bN("Unreachable."))},
oU(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=A.ef(a.y,b),r=this.f,q=r.a,p=r.b.b.a,o=q.length,n=this.w,m=n.a,l=n.b.b.a,k=m.length;s.q(),!0;){j=s.a
if(j.Y(0,b))return!0
i=j.gn()
h=j.gp()
n.l(i,h)
i=h*l+i
if(!(i>=0&&i<k))return A.b(m,i)
if(m[i]!=null)return!1
i=j.gn()
h=j.gp()
r.l(i,h)
i=h*p+i
if(!(i>=0&&i<o))return A.b(q,i)
i=q[i]
h=$.V()
if((i.a.e.a&h.a)===0)return!1}throw A.m(A.bN("Unreachable."))},
bn(a,b){var s,r
if(a.gn()<0)return!1
s=this.f
r=s.b.b
if(a.gn()>=r.a)return!1
if(a.gp()<0)return!1
if(a.gp()>=r.b)return!1
return(s.B(a.gn(),a.gp()).a.e.a&b.a)!==0},
dK(a){var s,r
B.a.j(this.b,a)
s=this.w
r=a.y
s.$ti.c.a(a)
s.aZ(r.gn(),r.gp(),a)},
kY(a){var s=this,r=s.b,q=B.a.c8(r,a),p=s.e
if(p>q)s.e=p-1
B.a.cO(r,q)
if(s.e>=r.length)s.e=0
r=s.w
p=a.y
r.$ti.c.a(null)
r.aZ(p.gn(),p.gp(),null)},
e6(a,b,c){var s=A.a([],t.I)
b.b2(this.a.y.Q.ax,c,new A.rt(this,s,A.cw(this,a,$.b3(),!1,null,null),a))
return s},
d1(a,b){this.r.b8(b,new A.rp()).ca(a)
if(a.a.ay>0)this.gaA().f=!0},
bS(a){var s=this.r.m(0,a)
return s==null?A.bq(B.G,null):s},
e9(a,b){var s=this.r,r=s.m(0,b)
B.a.ah(r.b,a)
if(a.a.ay>0)this.gaA().f=!0
if(!r.gL(0).q())s.ah(0,b)},
f5(a){this.r.ae(0,new A.rr(t.mH.a(a)))},
i1(){var s=this.gaA()
s.w=s.r=s.f=!0
this.geL().b=null},
d9(a,b,c){var s,r=this.f.B(a,b)
if(r.fp(c))if(!r.b&&r.d+r.e>r.c){s=this.w.B(a,b)
if(s!=null&&s instanceof A.ad)this.a.y.fu(s)}},
pd(a,b){return this.d9(a,b,null)},
dm(a,b,c){var s,r=this.f.B(a.gn(),a.gp())
r.b=b
r.c=c
if(!b&&r.d+r.e>c){s=this.w.B(a.gn(),a.gp())
if(s!=null&&s instanceof A.ad)this.a.y.fu(s)}},
kh(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=this.w,r=s.a,q=s.b.b.a,p=r.length,o=this.f,n=o.a,m=o.b,l=m.b,k=l.a,j=n.length,m=m.a,i=m.a,h=i+k,g=Math.min(i,h),h=Math.max(i,h);;){i=$.n()
i=i.a
f=i.a5(h-g)+g
e=m.b
d=e+l.b
c=Math.min(e,d)
d=Math.max(e,d)
i=i.a5(d-c)+c
b=new A.e(f,i)
o.l(f,i)
e=i*k+f
if(!(e>=0&&e<j))return A.b(n,e)
if((n[e].a.e.a&$.b3().a)===0)continue
s.l(f,i)
i=i*q+f
if(!(i>=0&&i<p))return A.b(r,i)
if(r[i]!=null)continue
return b}}}
A.rq.prototype={
$1(a){return new A.d2($.z_(),$.az())},
$S:96}
A.rt.prototype={
$1(a){var s,r,q,p,o,n=this
B.a.j(n.b,a)
s=n.c
r=n.a
q=s.jV(new A.rs(r))
if(q==null){s=s.gcN()
s=A.AA(s,10,s.$ti.i("k.E"))
p=A.a6(s,A.y(s).i("k.E"))
s=p.length
if(s!==0){o=$.n()
t.jX.a(p)
s=o.U(s)
if(!(s>=0&&s<p.length))return A.b(p,s)
q=p[s]}else q=n.d}q.toString
r.d1(a,q)},
$S:7}
A.rs.prototype={
$1(a){var s
if($.n().U(5)===0)return!0
s=this.a
return s.w.B(a.a,a.b)==null&&!s.r.ak(a)},
$S:1}
A.rp.prototype={
$0(){return A.bq(B.G,null)},
$S:97}
A.rr.prototype={
$2(a,b){var s,r,q,p
t.u.a(a)
for(s=t.D.a(b).b,r=A.N(s),s=new J.aX(s,s.length,r.i("aX<1>")),q=this.a,r=r.c;s.q();){p=s.d
q.$2(p==null?r.a(p):p,a)}},
$S:98}
A.ah.prototype={
ga2(a){return this.a},
Y(a,b){if(b==null)return!1
if(b instanceof A.ah)return this.a===b.a
return!1},
cc(a,b){return new A.ah(this.a|b.a)},
t(a){var s=A.a([],t.s),r=this.a
if((r&$.bL().a)!==0)s.push("door")
if((r&$.V().a)!==0)s.push("fly")
if((r&$.j2().a)!==0)s.push("swim")
if((r&$.b3().a)!==0)s.push("walk")
return B.a.aG(s,"|")}}
A.bG.prototype={
t(a){return this.a}}
A.d3.prototype={}
A.d2.prototype={
ov(a){this.f=B.c.M(this.f+a,0,192)},
fp(a){var s,r=this
if(a!==!0)s=!r.b&&r.d+r.e>r.c
else s=!0
if(s&&!r.r)return r.r=!0
return!1}}
A.jn.prototype={
a8(a){switch(a){case B.X:this.iC(-1)
break
case B.Y:this.iC(1)
break
case B.H:this.a.aa()
break
default:return!1}return!0},
ai(a){var s,r,q,p,o,n=this,m=null
a.c7(0,0,a.ga0(),a.gX())
n.nH(new A.aZ(new A.e(40,a.gX()-1),0,0,a))
s=a.ga0()-40
r=new A.aZ(new A.e(s,a.gX()-1),40,0,a)
q=n.c
p=n.d
if(!(p>=0&&p<q.length))return A.b(q,p)
o=q[p]
A.bl(r,m,m,o.gO(),!0,m,m,m)
A.h7(r,o.gW(),m,s-1,1,2)
r.k(1,10,"Requirement:",B.f)
s=o.gbE().gW()
q=n.b
A.h7(r,s,o.gbE().dP(q)==null?B.n:B.m,m,1,12)
r.k(1,32,"Focus cost:",B.j)
r.k(13,32,A.R(o.f3(q.y.Q),!1,3),B.d)
s=t.N
A.bA(a,A.B(["\u2195","Select ability","`","Exit"],s,s),m)},
nH(a){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500"
A.bl(a,i,i,"Abilities",!1,i,i,i)
a.k(34,1,"Focus",B.f)
a.k(2,2,h,B.l)
for(s=j.c,r=s.length,q=j.b,p=q.y.Q,o=0,n=0;n<s.length;s.length===r||(0,A.o)(s),++n){m=s[n]
l=o*2+3
a.k(2,l+1,h,B.t)
A:{k=j.d
if(o===k){k=B.iO
break A}k=m.gbE().dP(q)
if(k==null){k=B.iH
break A}k=B.iI
break A}a.k(2,l,m.gO(),k.a)
a.k(34,l,A.R(m.f3(p),!1,5),k.b);++o}a.an(1,j.d*2+3,A.cP(9658,B.h,i))},
iC(a){var s=this,r=s.d,q=s.c.length
s.d=B.c.ab(r+q+a,q)
s.J()}}
A.fZ.prototype={
aK(a){var s,r=a.x
r===$&&A.c()
s=this.a.y
s=r.f.B(s.gn(),s.gp())
if(!(!s.b&&s.d+s.e>s.c))return!1
return++this.d<24*this.c},
bu(a,b){var s
t.a.a(b)
s=this.a.y
if((B.c.A(this.d,12)&1)===1)b.$3(s.gn(),s.gp(),this.b)},
$iaD:1}
A.jT.prototype={
aK(a){var s=this.c
return++this.d<s*B.e.P(A.w(s,1,10,16,8))},
bu(a,b){var s,r=this
t.a.a(b)
s=r.c
if(B.c.ab(r.d,B.e.P(A.w(s,1,10,16,8)))<B.c.A(B.e.P(A.w(s,1,10,16,8)),2)){s=r.a
b.$3(s.gn(),s.gp(),r.b)}},
$iaD:1}
A.h5.prototype={
aK(a){return--this.b>=0},
bu(a,b){var s,r,q,p
t.a.a(b)
s=B.c.A(this.b,4)
if(!(s>=0&&s<5))return A.b($.wN,s)
r=A.as("*",$.wN[s],null)
q=A.xB(new A.jJ(this.a,s),!0)
p=q.b
while(q.q())b.$3(p.b,p.c,r)},
$iaD:1}
A.ha.prototype={
aK(a){var s=this
if($.n().U(s.c+2)===0)++s.c
return s.c<s.b.length},
bu(a,b){var s,r,q,p,o
t.a.a(b)
s=a.x
s===$&&A.c()
r=this.a
if(s.f.B(r.gn(),r.gn()).b)return
s=r.gn()
r=r.gp()
q=$.n()
p=this.b
o=this.c
if(!(o<p.length))return A.b(p,o)
o=t.af.a(p[o])
q=q.U(o.length)
if(!(q>=0&&q<o.length))return A.b(o,q)
b.$3(s,r,o[q])},
$iaD:1}
A.cO.prototype={
aK(a){var s,r=a.x
r===$&&A.c()
s=this.a
s=r.f.B(s.gn(),s.gp())
if(!(!s.b&&s.d+s.e>s.c))return!1
return--this.c>=0},
bu(a,b){var s=this.a
t.a.a(b).$3(s.gn(),s.gp(),this.b)},
$iaD:1}
A.kq.prototype={
aK(a){return this.c++<24},
bu(a,b){var s,r,q,p,o=null
t.a.a(b)
s=a.x
s===$&&A.c()
r=this.a
q=this.b
if(s.f.B(r,q).b)return
p=[B.t,B.a0,B.J,B.K][B.c.ab(B.c.A(this.c,4),4)]
b.$3(r-1,q,A.as("-",p,o))
b.$3(r+1,q,A.as("-",p,o))
b.$3(r,q-1,A.as("|",p,o))
b.$3(r,q+1,A.as("|",p,o))},
$iaD:1}
A.kt.prototype={
aK(a){return++this.b<24},
bu(a,b){var s,r,q,p,o
t.a.a(b)
s=this.a
if((B.c.A(this.b,6)&1)===0){b.$3(s.gn(),s.gp(),$.yI())
b.$3(s.gn()-1,s.gp(),$.yK())
b.$3(s.gn()+1,s.gp(),$.yL())}else{r=s.gn()
q=s.gp()
p=$.yH()
b.$3(r-1,q-1,p)
q=s.gn()
r=s.gp()
o=$.yM()
b.$3(q-1,r+1,o)
b.$3(s.gn()+1,s.gp()-1,o)
b.$3(s.gn()+1,s.gp()+1,p)
p=s.gn()
o=s.gp()
r=$.yJ()
b.$3(p-1,o,r)
b.$3(s.gn()+1,s.gp(),r)}},
$iaD:1}
A.kB.prototype={
aK(a){var s,r=a.x
r===$&&A.c()
s=this.a
s=r.f.B(s.gn(),s.gp())
if(!(!s.b&&s.d+s.e>s.c))return!1
return--this.c>=0},
bu(a,b){var s=this.a
t.a.a(b).$3(s.gn(),s.gp(),this.b)},
$iaD:1}
A.kR.prototype={
aK(a){return--this.c>=0},
bu(a,b){var s,r,q,p=this
t.a.a(b)
s=a.x
s===$&&A.c()
r=p.b
q=t.v.a(s.f.B(r.gn(),r.gp()).a.d)
s=p.a
q=A.cP(q.a,q.b.bl(B.h,p.c/s),q.c.bl(B.k,p.c/s))
b.$3(r.gn(),r.gp(),q)},
$iaD:1}
A.lb.prototype={
aK(a){var s,r,q=this,p=q.a+q.c
q.a=p
s=q.b+q.d
q.b=s
p=B.e.N(p)
s=B.e.N(s)
r=a.x
r===$&&A.c()
r=r.f
if(!r.b.G(0,new A.e(p,s)))return!1
p=r.B(p,s)
s=$.V()
if((p.a.e.a&s.a)===0)return!1
return q.e-->0},
bu(a,b){t.a.a(b).$3(B.e.N(this.a),B.e.N(this.b),A.as("\u2022",this.f,null))},
$iaD:1}
A.lN.prototype={
aK(a){var s,r,q,p=this,o=p.e,n=1-o*0.015,m=p.c*=n
p.d*=n
s=o*0.003
o=p.f
p.c=m+(o.gn()-p.a)*s
m=p.d
r=o.gp()
q=p.b
r=m+(r-q)*s
p.d=r
m=p.a+p.c
p.a=m
r=q+r
p.b=r;++p.e
return new A.e(B.e.N(m),B.e.N(r)).S(0,o).bi(0,1)},
bu(a,b){var s,r,q,p,o=this
t.a.a(b)
s=B.e.N(o.a)
r=B.e.N(o.b)
q=a.x
q===$&&A.c()
if(!q.f.b.G(0,new A.e(s,r)))return
p=o.mV(o.c,o.d)
q=$.n()
t.ev.a($.vi)
q=q.U(4)
if(!(q>=0&&q<4))return A.b($.vi,q)
b.$3(s,r,A.cP(p,$.vi[q],null))},
mV(a,b){var s,r="|\\\\--//||\\\\--//||"
if(new A.e(B.e.N(a*10),B.e.N(b*10)).ei(0,5))return 8226
s=B.e.bQ(Math.atan2(a,b)/6.283185307179586*16+8)
if(!(s>=0&&s<17))return A.b(r,s)
return r.charCodeAt(s)},
$iaD:1}
A.lS.prototype={
aK(a){var s=this.d
if((s&1)===0)if(--this.b<0)return!1;--s
this.d=s
return s>=0},
bu(a,b){t.a.a(b).$3(this.a,this.b,this.c)},
$iaD:1}
A.hd.prototype={
ghc(){var s,r=this,q=r.e
A:{if(0===q){s=r.b.Q.ay
break A}if(1===q){s=r.b.Q.ch
break A}if(2===q){s=r.b.Q.CW
break A}if(3===q){s=r.b.Q.cx
break A}s=null
break A}return s},
gju(){var s,r=this.e
if(r<4)return null
s=this.c
r-=4
if(!(r<s.length))return A.b(s,r)
return s[r]},
giB(){var s,r,q,p,o=this,n=o.ghc()
if(n!=null){if(n.b===40)return!1
s=o.b.Q
r=n.hA(s)
return s.y>=r}else{q=o.gju()
if(q!=null){s=o.b.Q
p=s.z.eR(q)
if(p===s.c.ij(q))return!1
r=B.e.N(1000*Math.pow(1.8,p+1-1))
return s.y>=r}else return!1}},
lK(a,b){var s,r
for(s=$.uE(),r=0;r<26;++r)s[r].gbE()},
a8(a){switch(a){case B.X:this.iD(-1)
return!0
case B.Y:this.iD(1)
return!0
case B.H:this.a.aa()
return!0}return!1},
ac(a,b,c){var s,r,q,p,o,n=this
if(c||b)return!1
switch(a){case 71:if(n.giB()){s=n.ghc()
if(s!=null){r=n.b
q=r.Q
r.il(s.hA(q))
s.kX(q,s.b+1)}else{p=n.gju()
if(p!=null){r=n.b
q=r.Q.z
o=q.eR(p)+1
r.il(B.e.N(1000*Math.pow(1.8,o-1)))
q.a.h(0,p,o)}}n.b.bt()
n.J()}return!0}return!1},
ai(a){var s,r,q,p,o=this,n=null
a.c7(0,0,a.ga0(),a.gX())
A.bl(a,n,3,n,!1,46,n,n)
a.k(2,1,"Available experience:",B.j)
s=o.b.Q
a.k(25,1,A.R(s.y,!1,9),B.d)
o.mu(new A.aZ(new A.e(46,11),0,3,a))
o.ms(new A.aZ(new A.e(46,a.gX()-14),0,14,a))
r=o.e
q=r<4?6:9
a.an(1,r*2+q,A.cP(9658,B.h,n))
p=new A.aZ(new A.e(a.ga0()-46,a.gX()),46,0,a)
r=o.e
switch(r){case 0:o.mv(p)
break
case 1:o.mn(p)
break
case 2:o.mw(p)
break
case 3:o.mq(p)
break
default:q=o.c
r-=4
if(!(r>=0&&r<q.length))return A.b(q,r)
o.mr(p,q[r])}r=t.N
r=A.C(r,r)
r.h(0,"\u2195","Change selection")
if(o.giB())r.h(0,"G","Gain "+(o.ghc()!=null?"stat":"skill"))
r.h(0,"`","Exit")
A.bA(a,r,"You can spend "+A.R(s.y,!1,n)+" experience")},
mu(a){var s,r,q,p,o,n,m,l,k=null
A.bl(a,k,k,"Stats",!1,k,k,k)
a.k(21,1,"Base Equip Total    Cost",B.f)
s=this.b.Q
r=[s.ay,s.ch,s.CW,s.cx]
for(q=0,p=0;p<4;++p){o=r[p]
n=o.gbc()
m=o.b
l=o.a
l.toString
this.jL(a,q,n.c,m,l-m,o.hA(s),l,40,q===this.e);++q}},
ms(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.bl(a,e,e,"Skills",!1,e,e,e)
a.k(21,1,"Base Equip Total    Cost",B.f)
for(s=f.c,r=s.length,q=f.b.Q,p=q.c.c,q=q.z,o=q.a,q=q.b,n=0,m=0;m<s.length;s.length===r||(0,A.o)(s),++m){l=s[m]
k=o.m(0,l)
if(k==null)k=0
j=l.gO()
i=q.m(0,l)
if(i==null)i=0
h=o.m(0,l)
if(h==null)h=0
g=q.m(0,l)
h=B.c.M(h+(g==null?0:g),0,15)
g=p.m(0,l.gcJ())
if(g==null)g=0
f.jL(a,n,j,k,i,B.e.N(1000*Math.pow(1.8,k+1-1)),h,g,n===f.e-4);++n}},
jL(a,b,c,d,e,f,g,h,i){var s,r=b*2+3,q=b===0?B.l:B.t
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
a.k(20,r,A.R(d,!1,5),s)
C:{if(e>0){q=B.n
break C}if(e<0){q=B.m
break C}q=B.t
break C}a.k(26,r,A.R(e,!0,5),q)
a.k(32,r,A.R(g,!1,5),s)
if(d<h)a.k(38,r,A.R(f,!1,7),s)
else a.k(39,r,"At max",s)},
mv(a){this.ey(a,this.b.Q.ay,A.a(["Max Fury","Toss range scale"],t.s),new A.oC())},
mn(a){this.ey(a,this.b.Q.ch,A.a(["Dodge bonus","Strike bonus"],t.s),new A.oy())},
mw(a){this.ey(a,this.b.Q.CW,A.a(["Max health"],t.s),new A.oD())},
mq(a){this.ey(a,this.b.Q.cx,A.a(["Max focus"],t.s),new A.oz())},
ey(a,b,c,d){var s,r,q,p,o,n,m=null
t.m.a(c)
t.nB.a(d)
A.bl(a,m,m,b.gbc().c,!1,m,m,m)
s=b.a
s.toString
r=s-b.b
a.k(1,2,"Base value:",B.j)
a.k(15,2,A.R(b.b,!1,3),B.d)
q=this.b.Q
if(b===q.ay){p=-q.gee()
r=s-b.b-p
a.k(1,3,"Weight offset:",B.j)
a.k(15,3,A.R(p,!1,3),B.d)
o=4}else o=3
a.k(1,o,"Modifiers:",B.j)
a.k(15,o,A.R(r,!1,3),B.d);++o
a.k(1,o,"Current value:",B.j)
a.k(15,o,A.R(s,!1,3),B.d)
for(q=c.length,o=9,n=0;n<c.length;c.length===q||(0,A.o)(c),++n){a.k(1,o,c[n]+":",B.j);++o}a.k(24,7,"Current",B.f)
a.k(24,8,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500",B.l)
for(q=J.aw(d.$1(s)),o=9;q.q();){a.k(24,o,B.i.dg(q.gH(),7),B.d);++o}if(s<40){a.k(32,7,"   Next",B.f)
a.k(32,8,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500",B.l)
for(s=J.aw(d.$1(s+1)),o=9;s.q();){a.k(32,o,B.i.dg(s.gH(),7),B.d);++o}}},
mr(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
A.bl(a,f,f,b.gO(),!1,f,f,f)
s=this.b.Q
r=s.z
q=r.eR(b)
p=r.oH(b)
o=r.bU(b)
n=s.c.ij(b)
a.k(1,2,"Base level:",B.j)
a.k(13,2,A.R(q,!1,2),B.d)
a.k(16,2,"/",B.l)
a.k(18,2,A.R(n,!1,2),B.d)
for(m=0;m<n;++m){s=m<q?B.m:B.a1
a.an(21+m*2,2,new A.Y(9608,s,B.z))}a.k(1,3,"Equipment:",B.j)
a.k(17,3,A.R(p,!0,3),B.d)
a.k(1,4,"Full level:",B.j)
a.k(13,4,A.R(o,!1,2),B.d)
a.k(16,4,"/",B.l)
a.k(18,4,A.R(15,!1,2),B.d)
A.h7(a,b.gW(),f,a.c.a-1,1,6)
l=this.d.m(0,b)
if(l!=null){a.k(1,12,"Abilities granted:",B.f)
k=l.gf0().ec(0)
B.a.dq(k,new A.oA())
for(s=k.length,j=14,i=0;i<k.length;k.length===s||(0,A.o)(k),++i){h=k[i]
a.an(1,j,new A.Y(8226,B.l,B.z))
a.k(3,j,"Level "+h.a+": "+h.b.gO(),B.d);++j}}s=new A.oB(a,b)
s.$3("current",o,25)
g=B.c.M(q+1+p,0,n)
if(g<n)s.$3("next",g,35)},
iD(a){var s=this,r=4+s.c.length
s.e=B.c.ab(s.e+a+r,r)
s.J()}}
A.oC.prototype={
$1(a){return A.a([B.c.t(A.i7(a)),A.qw(A.xw(a),null)],t.s)},
$S:19}
A.oy.prototype={
$1(a){return A.a([B.c.t(A.wE(a)),B.c.t(A.wF(a))],t.s)},
$S:19}
A.oD.prototype={
$1(a){return A.a([B.c.t(B.e.N(Math.pow(a,1.458)+9))],t.s)},
$S:19}
A.oz.prototype={
$1(a){return A.a([B.c.t(A.ky(a))],t.s)},
$S:19}
A.oA.prototype={
$2(a,b){var s=t.cB
return B.c.am(s.a(a).a,s.a(b).a)},
$S:100}
A.oB.prototype={
$3(a,b,c){var s,r=this.a,q=r.c.a
A.jY(r,1,c,q-2,null)
r.k(2,c," At "+a+" level "+b+" ",B.f)
A:{if(b>0){s=new A.O(this.b.bq(b),null)
break A}s=B.iN
break A}A.h7(r,s.a,s.b,q-1,1,c+2)},
$S:101}
A.h6.prototype={
gb4(){return!0},
a8(a){var s=this
switch(a){case B.H:s.c2(B.r)
break
case B.aB:s.c2(B.V)
break
case B.X:s.c2(B.M)
break
case B.aA:s.c2(B.S)
break
case B.a9:s.c2(B.T)
break
case B.ad:s.c2(B.Q)
break
case B.aE:s.c2(B.U)
break
case B.Y:s.c2(B.L)
break
case B.aD:s.c2(B.R)
break}return!0},
bx(){var s=(this.c+1)%40
this.c=s
if(B.c.ab(s,5)===0)this.J()},
ai(a){var s=new A.ob(this,a)
s.$3(0,B.M,"|")
s.$3(1,B.S,"/")
s.$3(2,B.Q,"-")
s.$3(3,B.R,"\\")
s.$3(4,B.L,"|")
s.$3(5,B.U,"/")
s.$3(6,B.T,"-")
s.$3(7,B.V,"\\")
s=t.N
A.bA(a,A.B(["\u2195\u2194",this.gkn(),"`","Cancel"],s,s),this.gkS())},
c2(a){var s=this.lc(a),r=this.a
if(s)r.aQ(a)
else r.aQ(B.r)}}
A.ob.prototype={
$3(a,b,c){var s,r,q,p,o=this.a,n=o.b,m=n.b,l=m.y.y.F(0,b)
m=m.x
m===$&&A.c()
s=l.a
r=l.b
if(!o.k_(m.f.B(s,r)))return
if(B.c.A(o.c,5)===a)q=A.as(c,B.h,B.w)
else{o=m.w.B(s,r)
if(o!=null)q=t.v.a(o.geQ())
else{p=m.bS(l)
if(!p.gaq(0))q=p.gaB(0).a.b
else{o=m.f.B(s,r)
if(o.r)t.v.a(o.a.d)
else A.cP(32,null,null)
q=t.v.a(m.f.B(s,r).a.d)}}q=A.cP(q.a,B.h,B.w)}o=n.w
o===$&&A.c()
o.d7(this.b,s,r,q)},
$S:102}
A.fV.prototype={
gkS(){return"Which direction?"},
gkn(){return"Choose direction"},
k_(a){return!0},
lc(a){this.e.$1(a)
return!0}}
A.l9.prototype={
gkS(){return"Operate what?"},
gkn(){return"Choose direction"},
k_(a){return a.a.f!=null},
lc(a){var s=this.b.b,r=s.y,q=r.y.F(0,a)
s=s.x
s===$&&A.c()
s=s.f.B(q.a,q.b).a.f
if(s!=null){r.at=new A.aY(t.fD.a(s.$1(q)))
return!0}else{r.Q.at.Z(B.a_,"There is nothing to operate there.",null,null,null)
return!1}}}
A.dY.prototype={
hZ(a){var s=this
if(s.Q!=a)s.J()
s.Q=a
s.as=null},
i_(a){var s=this
if(s.Q!=null||!J.a9(s.as,a))s.J()
s.Q=null
s.as=a},
gbP(){var s=this.gd4(),r=s==null?null:s.y
return r==null?this.as:r},
gd4(){var s,r,q=this,p=q.Q
if(p!=null)if(p.z<=0||!q.b.cn(p))q.Q=null
s=q.Q
if(s!=null)return s
s=q.as
if(s!=null){r=q.b.x
r===$&&A.c()
return r.w.B(s.gn(),s.gp())}return null},
gko(){var s=this.b.y,r=s.z,q=s.Q.CW,p=q.a
p.toString
if(r<B.e.N(Math.pow(p,1.458)+9)/4)return B.m
if(s.w.a>0)return B.n
if(s.c.a>0)return B.J
r=s.z
q=q.a
q.toString
if(r<B.e.N(Math.pow(q,1.458)+9)/2)return B.a5
return B.C},
jx(){var s=this.b.y
if(!(s.at instanceof A.dW))return!1
s.at=null
this.J()
return!0},
ac(a,b,c){if(a===16||a===18)return!1
return this.jx()},
a8(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
if(f.jx())return!0
if(a===B.a2&&$.no===13){s=f.a
s.toString
s.a3(A.xv("Commands",B.i8))
return!0}r=e
switch(a){case B.bo:f.a.a3(new A.hk(f,B.v))
break
case B.br:s=f.b
q=s.x
q===$&&A.c()
p=s.y
o=p.y
if(q.f.B(o.gn(),o.gp()).a.b===B.aY){q=f.a
q.toString
q.a3(A.zL(f.c,s))}else{n=s.w===0
m=n?B.bJ:B.aY
p.at=new A.dW(t.hD.a(new A.oZ(f,m)),n)}break
case B.bm:f.a.a3(new A.hf(f.b.w===0))
break
case B.bA:s=f.a
s.toString
s.a3(A.AE(f))
break
case B.bf:s=f.a
s.toString
q=A.a([],t.eI)
B.a.T(q,$.uE())
s.a3(new A.jn(f.b,q))
break
case B.bw:s=f.a
s.toString
q=f.b
s.a3(A.zN(q.a,q.y))
break
case B.aO:s=f.a
s.toString
q=B.aW.gaT()
q=A.a6(q,A.y(q).i("k.E"))
s.a3(new A.hi(q))
break
case B.bn:s=f.a
s.toString
q=f.b
p=q.a
q=q.y.Q
if($.bC.length===0){o=new A.k2(A.vh(B.ck,B.i4,B.i5,!1,t.c),B.cN,p,q)
o.du()
l=A.A5(p,q)
q=new A.kD(p,q)
q.n6()
B.a.T($.bC,A.a([o,l,q],t.f_))}s.a3(B.a.gaB($.bC))
break
case B.be:f.a.a3(new A.ds(f,B.v))
break
case B.bz:f.a.a3(new A.ec(f,B.v))
break
case B.by:f.a.a3(new A.ea(f,B.v))
break
case B.bh:f.b.y.at=new A.dW(e,!1)
break
case B.aC:if(!f.b.y.pK())f.J()
break
case B.bp:f.nw()
break
case B.bq:s=f.b
q=s.x
q===$&&A.c()
s=s.y
k=q.bS(s.y)
q=k.b.length
if(q>1)f.a.a3(new A.e4(f,B.G))
else if(q===1)s.at=new A.aY(A.xf(k.gaB(0)))
else{s.Q.at.Z(B.a_,"There is nothing here.",e,e,e)
f.J()}break
case B.bg:f.a.a3(new A.dV(f,B.v))
break
case B.aB:r=A.bt(B.V)
break
case B.X:r=A.bt(B.M)
break
case B.aA:r=A.bt(B.S)
break
case B.a9:r=A.bt(B.T)
break
case B.a2:r=A.bt(B.r)
break
case B.ad:r=A.bt(B.Q)
break
case B.aE:r=A.bt(B.U)
break
case B.Y:r=A.bt(B.L)
break
case B.aD:r=A.bt(B.R)
break
case B.bt:f.b.y.at=new A.cd(B.V)
break
case B.ap:f.b.y.at=new A.cd(B.M)
break
case B.bs:f.b.y.at=new A.cd(B.S)
break
case B.aQ:f.b.y.at=new A.cd(B.T)
break
case B.aP:f.b.y.at=new A.cd(B.Q)
break
case B.bv:f.b.y.at=new A.cd(B.U)
break
case B.aq:f.b.y.at=new A.cd(B.L)
break
case B.bu:f.b.y.at=new A.cd(B.R)
break
case B.c7:f.bN(B.V)
break
case B.bj:f.bN(B.M)
break
case B.c6:f.bN(B.S)
break
case B.bl:f.bN(B.T)
break
case B.bi:f.bN(B.Q)
break
case B.c9:f.bN(B.U)
break
case B.bk:f.bN(B.L)
break
case B.c8:f.bN(B.R)
break
case B.aN:A:{j=f.at
s=t.bW.b(j)
if(s){q=f.gd4()!=null
i=j}else{i=e
q=!1}if(q){f.iZ(i)
break A}i=s?j:e
if(s){f.je(i)
break A}if(t.ln.b(j)){f.a.a3(new A.fV(f.gmP(),f))
break A}s=t.lz.b(j)
h=s?j:e
if(s){s=f.b
q=s.y
q.at=new A.aY(h.dJ(q.Q,h.ap(s)))
break A}f.b.y.Q.at.Z(B.a_,"No ability selected.",e,e,e)
f.J()}break
case B.bx:s=f.b.y.Q
g=s.e.d
if(g==null){s.at.Z(B.a_,"You aren't holding an unequipped item to swap.",e,e,e)
f.J()}else r=A.wR(B.v,g)
break
case B.ca:s=f.a
s.toString
q=t.bx
p=A.a([],q)
o=new A.ij(p,f.b)
B.a.T(p,A.a([new A.X(["m",77,"Map Dungeon",o.gnq()]),new A.X(["i",73,"Illuminate Dungeon",o.gn1()]),new A.X(["d",68,"Drop Item",o.gmy()]),new A.X(["s",83,"Spawn Monster",o.gor()]),new A.X(["x",88,"Gain Experience",o.gmS()]),new A.X(["k",75,"Kill All Monsters",o.gnc()]),new A.X(["c",67,"Clear All Floor Items",o.gma()]),new A.X(["l",76,"Make Stairs",o.gno()]),new A.X(["o",79,"Toggle Show All Monsters",o.goa()]),new A.X(["a",65,"Toggle Show Monster Alertness",o.go8()]),new A.X(["v",86,"Toggle Show Hero Volume",o.goc()])],q))
s.a3(o)
break}if(r!=null)f.b.y.at=new A.aY(r)
return!0},
d0(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.b,a=b.y
if(!a.e2(b))d.x=10
A:{s=a0 instanceof A.hY
r=c
if(s){q=a1 instanceof A.l
if(q)r=a1
p=a1}else{p=c
q=!1}if(q){$.no=0
d.a8(r)
break A}if(a0 instanceof A.hc){a=a.Q
a.x.ae(0,new A.oX())
q=d.d
q.bj()
A.de("stairs")
o=d.a
o.toString
o.bh(A.oV(q,b.a,a,!1))
break A}n=c
if(a0 instanceof A.i_){m=!0
if(s)q=p
else{q=a1
s=m
p=q}q=A.fC(q)
if(q){if(s)o=p
else{o=a1
s=m
p=o}A.r(o)
n=o}}else q=!1
if(q){d.d.bj()
q=d.a
q.toString
l=A.v0(b.a,n,a.Q,c,c)
a=l.ef()
q.a3(new A.hx(l,new A.ak(a.a(),a.$ti.i("ak<1>"))))
break A}q=a0 instanceof A.hx
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
if(q){A.de("stairs")
b=d.a
b.toString
b.bh(A.wW(d.d,j))
break A}i=a0 instanceof A.hf
h=c
if(i){if(s)q=p
else{q=a1
p=q
s=!0}h=!0===q
q=h
q=q&&b.w>0}else q=!1
if(q){a=d.a
a.toString
a.bh(A.oV(d.d,b.a,d.c,!1))
break A}if(i)q=h
else q=!1
if(q){d.d.bj()
d.a.aa()
break A}if(a0 instanceof A.eb){d.d.bj()
break A}if(a0 instanceof A.b5&&b.w===0){d.d.bj()
break A}q=a0 instanceof A.ig
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
if(o){d.je(g)
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
if(k){d.a.a3(new A.fV(new A.oY(o,d),d))
break A}g=c
if(q){if(s)q=p
else{q=a1
p=q
s=!0}o=t.lz
q=o.b(q)
if(q)g=o.a(s?p:a1)}else q=!1
if(q){d.at=g
a.at=new A.aY(g.dJ(a.Q,g.ap(b)))
break A}if(a0 instanceof A.hd)d.d.bj()}},
bx(){var s,r,q,p,o=this
if(o.mD())return
s=o.x
if(s>0){o.x=s-1
return}if(o.z){s=o.b
s=s.y.e2(s)}else s=!1
if(s){o.z=!1
s=o.w
s===$&&A.c()
if(s.d.length===0){o.a.a3(new A.hk(o,B.v))
return}}s=o.b
r=s.bx()
s=s.y
if(s.z<=0){A.de("death")
q=o.a
q.toString
p=o.d
s=s.Q
if(s.d)p.ah(0,s)
else p.pJ(o.c)
p.bj()
q.bh(new A.kl(s))
return}q=o.w
q===$&&A.c()
if(q.aK(r))o.J()
q=s.Q.at.b
if(q!==o.y){o.y=q
o.J()}if(s.at instanceof A.dW)o.x=2},
dj(a){var s,r,q,p,o,n,m,l=this
$.CN=a
if(A.vM()){s=l.r
s===$&&A.c()
s.a=null
l.e.a=null
l.f.a=null
s=l.w
s===$&&A.c()
s.a=new A.a0(new A.e(0,0),new A.e(a.a,a.b))
return}s=a.a
r=s-100
q=B.c.M(21+B.c.A(r,30)*3,21,33)
if(s>=100){p=Math.min(50,24+B.c.A(r,3))
l.f.a=new A.a0(new A.e(s-p,0),new A.e(p,a.b))}else p=0
r=a.b
o=Math.min(10,3+B.c.A(r-30,3))
n=s-q-p
m=l.r
m===$&&A.c()
m.a=new A.a0(new A.e(0,0),new A.e(q,r))
m=l.f
if(p>0)m.a=new A.a0(new A.e(s-p,0),new A.e(p,r))
else m.a=null
l.e.a=new A.a0(new A.e(q,0),new A.e(n,o))
s=l.w
s===$&&A.c()
s.a=new A.a0(new A.e(q,o),new A.e(n,r-o))},
ai(a){var s,r=this
a.c7(0,0,a.ga0(),a.gX())
s=r.w
s===$&&A.c()
s.ai(a)
r.e.ai(a)
s=r.r
s===$&&A.c()
s.ai(a)
r.f.ai(a)
A.CL(r,s)},
mD(){var s,r,q=this,p=q.b,o=p.x
o===$&&A.c()
p=p.y
s=p.y
r=o.f.B(s.gn(),s.gp()).a.b
if(r==q.ax)return!1
q.ax=r
switch(r){case B.bJ:o=q.a
o.toString
p=p.Q
s=new A.i_(p)
s.e=Math.min(100,p.as+1)
o.a3(s)
break
case B.cM:q.a.a3(new A.iz(q))
break
case B.cI:q.c0(0)
break
case B.cH:q.c0(1)
break
case B.cG:q.c0(2)
break
case B.cF:q.c0(3)
break
case B.cE:q.c0(4)
break
case B.cD:q.c0(5)
break
case B.cL:q.c0(6)
break
case B.cK:q.c0(7)
break
case B.cJ:q.c0(8)
break}return!0},
nw(){var s,r,q,p,o,n,m,l,k,j,i=this,h=A.a([],t.l)
for(s=i.b,r=s.y,q=r.y.gbD(),p=q.length,o=0;o<q.length;q.length===p||(0,A.o)(q),++o){n=q[o]
m=s.x
m===$&&A.c()
m=m.f
l=n.a
k=n.b
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.b(j,l)
if(j[l].a.f!=null)B.a.j(h,n)}q=h.length
if(q===0){r.Q.at.Z(B.a_,"You are not next to anything to operate.",null,null,null)
i.J()}else if(q===1){n=B.a.gaB(h)
s=s.x
s===$&&A.c()
r.at=new A.aY(t.fD.a(s.f.B(n.gn(),n.gp()).a.f.$1(n)))}else i.a.a3(new A.l9(i))},
je(a){var s=this,r=s.a
r.toString
r.a3(A.xx(s,a.eg(0,s.b),new A.oW(s,a)))},
iZ(a){var s=this,r=s.b,q=r.y,p=J.a9(s.gbP(),q.y)
if(p){q.Q.at.Z(B.a_,"You can't target yourself.",null,null,null)
s.J()
return}s.at=a
p=s.gbP()
p.toString
q.at=new A.aY(a.dJ(q.Q,a.fd(r,p)))},
bN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null
if(a===B.r)return
A:{s=c.at
r=t.ln.b(s)
q=r?s:b
if(r){r=c.b
p=r.y
p.at=new A.aY(q.dJ(p.Q,q.hL(r,a)))
break A}r=t.bW.b(s)
o=r?s:b
if(r){r=c.b
p=r.y
n=p.y.F(0,a)
m=A.ed()
for(l=A.ef(p.y,n);l.q(),!0;){k=l.a
j=r.x
j===$&&A.c()
i=j.w
h=k.gn()
g=k.gp()
i.l(h,g)
f=i.a
h=g*i.b.b.a+h
if(!(h>=0&&h<f.length))return A.b(f,h)
h=f[h]
if(h!=null){if(c.Q!==h)c.J()
c.Q=h
c.as=null
break}j=j.f
i=k.gn()
h=k.gp()
j.l(i,h)
g=j.a
i=h*j.b.b.a+i
if(!(i>=0&&i<g.length))return A.b(g,i)
i=g[i]
g=$.V()
if((i.a.e.a&g.a)===0){l=m.b
if(l===m)A.a_(A.A0(""))
t.n7.a(l)
if(c.Q!=null||!J.a9(c.as,l))c.J()
c.Q=null
c.as=l
break}if(k.S(0,p.y).cV(0,o.eg(0,r))){if(c.Q!=null||!J.a9(c.as,k))c.J()
c.Q=null
c.as=k
break}m.b=k}e=c.gbP()
l=p.Q
if(e!=null)p.at=new A.aY(o.dJ(l,o.fd(r,e)))
else{r=r.x
r===$&&A.c()
p=p.y.F(0,a)
l.at.Z(B.a_,"There is a "+r.f.B(p.a,p.b).a.a+" in the way.",b,b,b)
c.J()}break A}r=t.lz.b(s)
d=r?s:b
if(r){c.b.y.Q.at.Z(B.a_,d.gO()+" does not take a direction.",b,b,b)
c.J()
break A}c.b.y.Q.at.Z(B.a_,"No ability selected.",b,b,b)
c.J()}},
c0(a){var s=this.b.y.Q.x,r=A.y(s).i("b6<1>"),q=A.a6(new A.b6(s,r),r.i("k.E"))
if(a>=q.length)return
r=this.a
r.toString
s=s.m(0,q[a])
s.toString
r.a3(new A.iN(s,this))}}
A.oZ.prototype={
$1(a){var s=this.a.b.x
s===$&&A.c()
return s.f.B(a.gn(),a.gp()).a.b===this.b},
$S:1}
A.oX.prototype={
$2(a,b){t.c3.a(a).aK(t.D.a(b))},
$S:157}
A.oY.prototype={
$1(a){var s=this.b
s.at=this.a.a
s.bN(a)},
$S:53}
A.oW.prototype={
$1(a){return this.a.iZ(this.b)},
$S:10}
A.hx.prototype={
gb4(){return!0},
a8(a){if(a===B.H){this.a.aQ(!1)
return!0}return!1},
ac(a,b,c){if(c||b)return!1
switch(a){case 78:this.a.aQ(!1)
break
case 89:this.a.aQ(!0)
break}return!0},
bx(){var s,r,q,p=this,o=null,n=new A.rv()
$.w4()
s=$.v8.$0()
n.a=s
n.b=null
for(s=p.c;n.gp9()<16;)if(s.q())p.J()
else{s=p.a
s.toString
if(0>=$.ae.length)return A.b($.ae,-1)
$.ae.pop()
r=v.G
q=r.rvipMap
if(q!=null)A.a2(q).shown=!1
if("rvipDraw" in r)A.kG(r,"rvipDraw",o,o,o,o)
s.fG(p.b)
s.cF()
A.nj()
return}p.d=(p.d+1)%10},
ai(a){var s
a=new A.aZ(new A.e(30,7),B.c.A(a.ga0()-30,2),B.c.A(a.gX()-7,2),a)
A.cM(a,0,0,30,7,B.h,"\u2554","\u2550","\u2557","\u2551","\u255a","\u2550","\u255d")
a.k(2,2,"Entering dungeon...",B.d)
s=B.c.A(this.d,2)
a.k(2,4,B.i.aM(B.i.aL("/    ",6),s,s+26),B.d)}}
A.ic.prototype={
gb4(){return!0},
lP(a,b,c){var s,r,q,p,o,n=this,m=n.b,l=m.b,k=l.y,j=l.x
j===$&&A.c()
j=j.b
s=j.length
r=n.e
q=n.c
p=0
for(;p<j.length;j.length===s||(0,A.o)(j),++p){o=j[p]
if(!(o instanceof A.ad))continue
if(!l.cn(o))continue
if(o.y.S(0,k.y).bi(0,q))continue
B.a.j(r,o)}if(r.length===0){n.f=!0
m.i_(k.y)}else n.jy(k.y)},
jy(a){var s,r,q,p=this.e,o=p.length
if(o===0)return!1
for(s=null,r=0;r<o;++r){q=p[r]
if(s==null||a.S(0,q.y).ei(0,a.S(0,s.y)))s=q}this.b.hZ(s)
return!0},
a8(a){var s,r=this
switch(a){case B.a2:s=r.b
if(s.gbP()!=null){r.a.aa()
s=s.gbP()
s.toString
r.d.$1(s)}break
case B.H:r.a.aa()
break
case B.aB:r.cf(B.V)
break
case B.X:r.cf(B.M)
break
case B.aA:r.cf(B.S)
break
case B.a9:r.cf(B.T)
break
case B.ad:r.cf(B.Q)
break
case B.aE:r.cf(B.U)
break
case B.Y:r.cf(B.L)
break
case B.aD:r.cf(B.R)
break}return!0},
ac(a,b,c){var s,r,q=this
if(a===9&&q.e.length!==0){s=q.f
q.f=!s
r=q.b
if(s){s=r.gbP()
q.jy(s==null?r.b.y.y:s)}else r.i_(r.gbP())
return!0}return!1},
bx(){var s=(this.r+1)%25
this.r=s
if(B.c.ab(s,5)===0)this.J()},
ai(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9="Choose tile",b0=a7.b,b1=b0.b,b2=b1.x
b2===$&&A.c()
s=b1.y
r=b0.w
r===$&&A.c()
q=A.ac(r.r)
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
d=new A.e(f,e)
o.l(f,e)
c=e*m+f
if(!(c>=0&&c<l))return A.b(n,c)
c=n[c]
k.l(f,e)
b=e*i+f
if(!(b>=0&&b<h))return A.b(j,b)
b=j[b]
if(c.r){if(c.b)continue
a=c.a.e.a
if((a&$.b3().a)===0&&(a&$.V().a)===0)continue
if(b!=null)continue
if(b2.ak(d))continue}else if(a7.n5(d))continue
else if(b!=null&&b1.cn(b))continue
if(d.S(0,s.y).bi(0,p))continue
if(c.r){a0=c.a.d
if(a0 instanceof A.Y)a1=a0.a
else{g.a(a0)
if(0>=a0.length)return A.b(a0,0)
a1=a0[0].a}}else a1=183
c=r.a.a
b=r.r.a
a=r.w
b3.an(f+c.a-b.a+a.a,e+c.b-b.b+a.b,new A.Y(a1,B.h,B.z))}a2=b0.gbP()
if(a2==null)return
b0=o.B(a2.gn(),a2.gp())
if(b0.r){b1=$.V()
b0=(b0.a.e.a&b1.a)!==0&&!b0.b}else b0=!0
a3=!1
if(b0){a4=B.c.A(a7.r,5)
for(b0=A.ef(s.y,a2);b0.q(),!0;){d=b0.a
if(d.Y(0,a2)){a3=!0
break}b1=d.gn()
b2=d.gp()
o.l(b1,b2)
b1=b2*m+b1
if(!(b1>=0&&b1<l))return A.b(n,b1)
b1=n[b1]
if(b1.r){b2=d.gn()
q=d.gp()
k.l(b2,q)
b2=q*i+b2
if(!(b2>=0&&b2<h))return A.b(j,b2)
if(j[b2]!=null)break
b2=$.V()
if((b1.a.e.a&b2.a)===0)break}b1=d.gn()
b2=d.gp()
q=a4===0?B.h:B.j
p=r.a.a
g=r.r.a
f=r.w
b3.an(b1+p.a-g.a+f.a,b2+p.b-g.b+f.b,new A.Y(8226,q,B.z))
a4=B.c.ab(a4+5-1,5)}}else a4=0
a5=a3?a4===0?B.h:B.j:B.j
r.d7(b3,a2.gn()-1,a2.gp(),A.as("-",a5,a8))
r.d7(b3,a2.gn()+1,a2.gp(),A.as("-",a5,a8))
r.d7(b3,a2.gn(),a2.gp()-1,A.as("|",a5,a8))
r.d7(b3,a2.gn(),a2.gp()+1,A.as("|",a5,a8))
if(!a3)r.d7(b3,a2.gn(),a2.gp(),A.as("X",a5,a8))
b0=t.N
a6=A.C(b0,b0)
if(a7.e.length===0)a6.h(0,"\u2195\u2194",a9)
else if(a7.f){a6.h(0,"\u2195\u2194",a9)
a6.h(0,"Tab","Target monsters")}else{a6.h(0,"\u2195\u2194","Choose monster")
a6.h(0,"Tab","Target floor")}a6.h(0,"`","Cancel")
A.bA(b3,a6,"Choose a target.")},
cf(a){if(this.f)this.m7(a)
else this.m8(a)},
m7(a){var s=this.b,r=s.gbP().F(0,a)
if(r.S(0,s.b.y.y).bi(0,this.c))return
s.i_(r)},
m8(a){var s,r,q,p,o,n,m,l,k,j,i,h=t.lE,g=A.a([],h),f=A.a([],h)
h=this.b
s=h.gbP()
s.toString
r=a.gbG()
for(q=this.e,p=q.length,o=r.c,n=r.d,m=0;m<q.length;q.length===p||(0,A.o)(q),++m){l=q[m]
k=l.y.S(0,s)
if(o*k.b-n*k.a>0)B.a.j(g,l)
else B.a.j(f,l)}q=t.B
j=A.Bh(g,new A.rR(s),q)
if(j!=null){h.hZ(j)
return}i=A.Bg(f,new A.rS(s),q)
if(i!=null)h.hZ(i)},
n5(a){var s,r,q,p,o,n,m,l=this.b.b,k=l.x
k===$&&A.c()
for(l=A.ef(l.y.y,a),k=k.f,s=k.a,r=k.b,q=r.b.a,p=s.length;l.q(),!0;){o=l.a
if(o.Y(0,a))return!1
if(!r.G(0,o))return!0
n=o.gn()
m=o.gp()
k.l(n,m)
n=m*q+n
if(!(n>=0&&n<p))return A.b(s,n)
n=s[n]
if(n.r){m=$.V()
m=(n.a.e.a&m.a)===0
n=m}else n=!1
if(n)return!0}throw A.m(A.bN("Unreachable."))}}
A.rR.prototype={
$1(a){return t.B.a(a).y.S(0,this.a).gaH()},
$S:35}
A.rS.prototype={
$1(a){return t.B.a(a).y.S(0,this.a).gaH()},
$S:35}
A.ig.prototype={
gb4(){return!0},
a8(a){if(a===B.H){this.a.aa()
return!0}return!1},
ac(a,b,c){if(c||b)return!1
if(a>=65&&a<=90){this.oo(a-65)
return!0}return!1},
oo(a){var s,r=this.c,q=r.length
if(a>=q)return
s=this.a
s.toString
if(!(a>=0))return A.b(r,a)
s.aQ(r[a])},
ai(a){var s,r,q,p,o,n,m,l=null,k="abcdefghijklmnopqrstuvwxyz",j=t.N
A.bA(a,A.B(["A-Z","Select ability","`","Exit"],j,j),l)
j=this.c
s=Math.max(j.length+2,3)
a=new A.aZ(new A.e(40,s),a.ga0()-40,0,a)
A.bl(a,l,s,"Use which ability?",!0,l,l,l)
a.k(31,0," Focus ",B.h)
a=a.b9(1,1,38,s-2)
if(j.length===0){a.k(0,0,"(You don't have any abilities)",B.j)
return}r=this.b.b.y
for(q=a.c.a-5,p=r.Q,o=0;o<j.length;++o){n=j[o]
m=n.f3(p)
if(r.ch<m){a.k(3,o,n.gO(),B.j)
a.k(q,o,A.R(m,!1,3),B.bQ)}else{a.k(0,o," )   ",B.j)
if(!(o<26))return A.b(k,o)
a.k(0,o,k[o],B.h)
a.k(3,o,n.gO(),B.C)
a.k(q,o,A.R(m,!1,3),B.d)}}}}
A.hi.prototype={
gb4(){return!0},
a8(a){var s=this
switch(a){case B.X:s.eJ(-1)
return!0
case B.Y:s.eJ(1)
return!0
case B.ap:s.eJ(-(s.d-3))
return!0
case B.aq:s.eJ(s.d-3)
return!0
case B.H:s.a.aa()
return!0}return!1},
ac(a,b,c){var s,r,q,p=this
if(b)return!1
switch(a){case 9:s=c?-1:1
r=p.b
q=p.e.length
p.b=B.c.ab(r+s+q,q)
p.c=0
p.J()
return!0
default:return!1}},
ai(a){var s,r,q,p,o,n,m=this,l=null,k=B.c.A(a.ga0()-80,2),j=a.gX(),i=new A.aZ(new A.e(80,j),k,0,a)
m.d=j-4
i.c7(0,0,i.ga0(),i.gX())
A.bl(i,l,j,"Help",!0,80,l,l)
for(k=m.e,s=0;j=k.length,s<j;++s){r=s===m.b?B.h:B.C
i.k(2,s*2+2,k[s],r)}q=m.b
if(!(q>=0&&q<j))return A.b(k,q)
p=B.aW.m(0,k[q])
for(k=p.length,s=0;j=m.d,s<j;++s){o=s+m.c
if(o<k){if(!(o>=0))return A.b(p,o)
n=p[o]
i.k(21,s+2,n.b,n.a)}}A.wP(i,j,m.c,k,j,78,2)
k=t.N
A.bA(a,A.B(["Tab","Next Chapter","\u2195","Scroll","Shift-\u2195","Page Up/Down","`","Exit"],k,k),l)},
eJ(a){var s,r=this,q=r.e,p=r.b
if(!(p>=0&&p<q.length))return A.b(q,p)
s=B.aW.m(0,q[p])
r.c=B.c.M(r.c+a,0,s.length-r.d)
r.J()}}
A.f.prototype={}
A.k2.prototype={
gO(){return"Equipment"},
gcl(){var s=t.N,r=A.cU(this.e.gcl(),s,s)
switch(this.f.a){case 0:s=B.cp
break
case 1:s=A.B(["R","Show resistances"],s,s)
break
case 2:s=A.B(["R","Show stats"],s,s)
break
case 3:s=B.cp
break
default:s=null}r.T(0,s)
return r},
dj(a){var s,r=this
if(a.a>110){r.f=B.cP
r.du()
r.J()}else{s=r.f
if(B.cN===s||B.cP===s){r.f=B.bL
r.du()
r.J()}}},
ac(a,b,c){var s,r=this
if(r.e.ac(a,b,c)){r.J()
return!0}if(!b){s=82===a
if(s&&!c&&r.f===B.bL){r.f=B.cO
r.du()
r.J()
return!0}if(s&&!c&&r.f===B.cO){r.f=B.bL
r.du()
r.J()
return!0}}return r.fF(a,b,c)},
a8(a){if(this.e.a8(a)){this.J()
return!0}return this.fE(a)},
hv(a){var s,r,q,p=this,o=p.e,n=a.c,m=n.a
n=n.b
o.ht(a.b9(0,1,m,n-3))
s=m-32
switch(p.f.a){case 0:break
case 1:p.jN(a,s)
p.jO(a,s,21)
break
case 2:p.jK(a,s)
p.jJ(a,s,21)
break
case 3:s=m-65
p.jN(a,s)
r=s+33
p.jK(a,r)
p.jO(a,s,21)
p.jJ(a,r,21)
break}a.k(s-7,21,"Totals",B.j)
r=o.c
o=o.y
if(!(o>=0&&o<r.length))return A.b(r,o)
q=r[o].b
o=n-15
if(q!=null)A.x1(p.c,t.W.a(q),!0).kb(a.b9(0,o,m,14))
else A.od(a,0,o,m,14,null,null)},
du(){var s,r=this,q=A.a([new A.aP("Item",B.a7,0,null)],t.G)
switch(r.f.a){case 0:s=B.ck
break
case 1:s=r.iA()
break
case 2:s=r.fK()
break
case 3:s=A.a6(r.iA(),t.jF)
B.a.T(s,r.fK())
break
default:s=null}B.a.T(q,s)
r.e.kV(new A.os(r),q)},
iA(){var s=null
return A.a([new A.aP("El",B.a7,2,s),new A.aP("Damage",B.a7,11,s),new A.aP("Hit",B.a7,4,s),new A.aP("Dodge",B.a7,5,s),new A.aP("Armor",B.a7,6,s)],t.G)},
fK(){return new A.S(this.m_(),t.oP)},
m_(){return function(){var s=0,r=1,q=[],p,o,n
return function $async$fK(a,b,c){if(b===1){q.push(c)
s=r}for(;;)switch(s){case 0:p=$.fM(),o=0
case 2:if(!(o<12)){s=4
break}n=p[o]
if(n===$.az()){s=3
break}s=5
return a.b=new A.aP(n.b,B.a7,2,A.el(n)),1
case 5:case 3:++o
s=2
break
case 4:return 0
case 1:return a.c=q.at(-1),3}}}},
fL(a){return new A.S(this.m0(a),t.mY)},
m0(a){var s=this
return function(){var r=a
var q=0,p=1,o=[],n,m,l,k
return function $async$fL(b,c,d){if(c===1){o.push(d)
q=p}for(;;)switch(q){case 0:m=r.a
l=m.x
k=t.H
q=l!=null?2:4
break
case 2:q=5
return b.b=new A.ab(A.a([new A.Q(r.gb3().b,A.el(r.gb3()))],k),!0),1
case 5:n=A.a([new A.Q(A.R(l.c,!1,2),null)],k)
B.a.T(n,s.iW(r.gd6()))
B.a.T(n,s.cC(r.gd5()))
B.a.T(n,s.cC(r.gcd()))
q=6
return b.b=new A.ab(n,!0),1
case 6:q=7
return b.b=new A.ab(s.cC(r.gcd()),!0),1
case 7:q=3
break
case 4:q=8
return b.b=new A.ab(A.a([new A.Q("",null)],k),!0),1
case 8:q=9
return b.b=new A.ab(A.a([new A.Q("",null)],k),!0),1
case 9:q=10
return b.b=new A.ab(A.a([new A.Q("",null)],k),!0),1
case 10:case 3:q=11
return b.b=new A.ab(A.a([new A.Q("",null)],k),!0),1
case 11:m=m.Q
q=m!==0?12:14
break
case 12:m=A.a([new A.Q(A.R(m,!1,2),null)],k)
B.a.T(m,s.cC(r.gc4()))
q=15
return b.b=new A.ab(m,!0),1
case 15:q=13
break
case 14:q=16
return b.b=new A.ab(A.a([new A.Q("",null)],k),!0),1
case 16:case 13:return 0
case 1:return b.c=o.at(-1),3}}}},
fJ(a){return new A.S(this.lZ(a),t.mY)},
lZ(a){return function(){var s=a
var r=0,q=1,p=[],o,n,m,l,k
return function $async$fJ(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:o=$.fM(),n=t.H,m=0
case 2:if(!(m<12)){r=4
break}l=o[m]
if(l===$.az()){r=3
break}k=s.c9(l)
r=k>0?6:7
break
case 6:r=8
return b.b=new A.ab(A.a([new A.Q(A.R(k,!1,null),B.n)],n),!0),1
case 8:r=5
break
case 7:r=0===k?9:10
break
case 9:r=11
return b.b=new A.ab(A.a([new A.Q("",null)],n),!0),1
case 11:r=5
break
case 10:r=k<0?12:13
break
case 12:r=14
return b.b=new A.ab(A.a([new A.Q(A.R(k,!1,null),B.m)],n),!0),1
case 14:case 13:case 5:case 3:++m
r=2
break
case 4:return 0
case 1:return b.c=p.at(-1),3}}}},
jN(a,b){a.k(b,0,"\u2550\u2550\u2550\u2550\u2550 Attack \u2550\u2550\u2550\u2550\u2550\u2550 \u2550\u2550 Defense \u2550",B.t)
a.k(b+6,0,"Attack",B.l)
a.k(b+23,0,"Defense",B.l)},
jK(a,b){a.k(b,0,"\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Resistances \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550",B.t)
a.k(b+10,0,"Resistances",B.l)},
jO(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=$.az()
for(s=h.c.f.b,r=3,q=1,p=0,o=0,n=0,m=0,l=0;l<9;++l){k=s[l]
if(k==null)continue
j=k.a
i=j.x
if(i!=null){g=k.gb3()
r=i.c}q*=k.gd6()
p+=k.gd5()
o+=k.gcd()
n+=j.Q
m+=k.gc4()}a.k(b,c,g.b,A.el(g))
s=t.H
j=A.a([new A.Q(A.R(r,!1,2),null)],s)
B.a.T(j,h.iW(q))
B.a.T(j,h.cC(p))
B.a.T(j,h.cC(o))
A.vj(a,j,B.a7,B.C,11,b+3,c)
s=A.a([new A.Q(A.R(n,!1,2),null)],s)
B.a.T(s,h.cC(m))
A.vj(a,s,B.a7,B.C,6,b+26,c)},
jJ(a,b,c){var s,r,q,p,o,n,m
for(s=$.fM(),r=this.c,q=0,p=0;p<12;++p){o=s[p]
if(o===$.az())continue
n=r.kf(o)
if(n>0)m=B.n
else m=n<0?B.m:B.l
a.k(b+q*3,c,A.R(n,!1,2),m);++q}},
iW(a){var s,r=null,q=A.v6(a,1,r)
if(a>1)return A.a([new A.Q(B.i.aL(" ",4-q.length),r),new A.Q("x",B.B),new A.Q(q,B.n)],t.H)
else{s=t.H
if(a<1)return A.a([new A.Q(B.i.aL(" ",4-q.length),r),new A.Q("x",B.a1),new A.Q(q,B.m)],s)
else return A.a([new A.Q("   ",r)],s)}},
cC(a){var s,r=null,q=A.R(Math.abs(a),!1,r)
if(a>0)return A.a([new A.Q(B.i.aL(" ",3-q.length),r),new A.Q("+",B.B),new A.Q(q,B.n)],t.H)
else{s=t.H
if(a<0)return A.a([new A.Q(B.i.aL(" ",3-q.length),r),new A.Q("+",B.a1),new A.Q(q,B.m)],s)
else return A.a([new A.Q("   ",r)],s)}}}
A.os.prototype={
$0(){return new A.S(this.lk(),t.d8)},
lk(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e
return function $async$$0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=t.H,n=t.bZ,m=t.ax,l=s.a,k=l.c.f.b,j=t.cI,i=0
case 2:if(!(i<9)){r=4
break}h=k[i]
r=h!=null?5:7
break
case 5:g=h.a
f=A.a([new A.ab(A.a([new A.Q(h.gao().a,null)],o),!0)],n)
switch(l.f.a){case 0:e=B.i6
break
case 1:e=l.fL(h)
break
case 2:e=l.fJ(h)
break
case 3:e=A.a6(l.fL(h),j)
B.a.T(e,l.fJ(h))
break
default:e=null}B.a.T(f,e)
r=8
return a.b=new A.ax(g.b,h,f,m),1
case 8:r=6
break
case 7:r=9
return a.b=new A.ax(null,null,A.a([new A.ab(A.a([new A.Q("("+B.aF[i]+")",null)],o),!1)],n),m),1
case 9:case 6:case 3:++i
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
$S:106}
A.fr.prototype={
aN(){return"_Columns."+this.b}}
A.cR.prototype={
gcl(){var s=t.N
return A.C(s,s)},
ac(a,b,c){var s,r
if(b)return!1
if(a===9){s=B.a.c8($.bC,this)
s=c?s+($.bC.length-1):s+1
r=$.bC[B.c.ab(s,$.bC.length)]
this.a.bh(r)
return!0}return!1},
a8(a){if(a===B.H){this.a.aa()
return!0}return!1},
ai(a){var s,r,q,p,o,n,m,l,k=this
A.jY(a,0,2,a.ga0(),B.f)
for(s=$.bC.length,r=2,q=0;q<$.bC.length;$.bC.length===s||(0,A.o)($.bC),++q){p=$.bC[q]
o=p.gO().length
if(p===k){a.k(r,2,"\u2518"+B.i.aL(" ",o)+"\u2514",B.f)
n=B.f
m=B.f}else{n=B.l
m=B.l}a.k(r,0,"\u250c"+B.i.aL("\u2500",o)+"\u2510",n)
a.k(r,1,"\u2502",n)
a.k(r+o+1,1,"\u2502",n)
a.k(r+1,1,p.gO(),m)
r+=o+2}k.hv(new A.aZ(new A.e(a.ga0(),a.gX()-3),0,3,a))
l=$.bC[B.c.ab(B.a.c8($.bC,k)+1,$.bC.length)]
s=t.N
s=A.cU(k.gcl(),s,s)
s.h(0,"Tab","View "+l.gO())
s.h(0,"`","Exit")
A.bA(a,s,null)}}
A.kD.prototype={
gdI(){var s,r,q,p,o=this,n=null,m=o.e
if(m===$){s=A.a([new A.aP("Name",B.a7,0,n),new A.aP("Depth",B.am,5,n),new A.aP("Price",B.am,7,n),new A.aP("Found",B.am,5,n),new A.aP("Used",B.am,5,n)],t.G)
r=t.m2
q=t.o5
q=A.a([new A.bE("type",A.a([A.Cy(),A.yo(),A.uc()],r),q),new A.bE("name",A.a([A.uc()],r),q),new A.bE("depth",A.a([A.yo(),A.uc()],r),q),new A.bE("price",A.a([A.Cx(),A.uc()],r),q)],t.mQ)
r=t.i0
p=A.vh(s,A.a([new A.cb("all",new A.px(),r),new A.cb("discovered",new A.py(o),r)],t.aG),q,!0,t.q)
o.e!==$&&A.er()
o.e=p
m=p}return m},
gO(){return"Item Lore"},
gcl(){return this.gdI().gcl()},
ac(a,b,c){if(this.gdI().ac(a,b,c)){this.J()
return!0}return this.fF(a,b,c)},
a8(a){if(this.gdI().a8(a)){this.J()
return!0}return this.fE(a)},
hv(a){var s,r,q=this.gdI(),p=a.c,o=p.a
p=p.b
q.ht(a.b9(0,1,o,p-16))
s=q.c
q=q.y
if(!(q>=0&&q<s.length))return A.b(s,q)
r=this.c
q=t.q.a(s[q].b)
if(r.ax.kk(q)>0)A.x1(r,new A.L(q,null,null,null,1),!0).kb(a.b9(0,p-15,o,14))},
n6(){var s=$.bo().gc3(),r=A.a6(s,A.y(s).i("k.E"))
this.gdI().kU(new A.pw(this,r))}}
A.px.prototype={
$1(a){t.q.a(a)
return!0},
$S:34}
A.py.prototype={
$1(a){return this.a.c.ax.kk(t.q.a(a))>0},
$S:34}
A.pw.prototype={
$0(){return new A.S(this.ll(),t.jE)},
ll(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e
return function $async$$0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=t.H,m=t.bZ,l=t.bB,k=s.a.c.ax,j=k.c,k=k.f,i=0
case 2:if(!(i<o.length)){r=4
break}h=o[i]
g=j.m(0,h)
if(g==null)g=0
r=g>0?5:7
break
case 5:f=A.a([new A.ab(A.a([new A.Q(h.a.a7(1).a,null)],n),!0),new A.ab(A.a([new A.Q(A.R(h.c,!1,5),null)],n),!0),new A.ab(A.a([new A.Q(A.R(h.as,!1,7),null)],n),!0)],m)
if(h.dx)f.push(new A.ab(A.a([new A.Q("Yes",null)],n),!0))
else f.push(new A.ab(A.a([new A.Q(A.R(g,!1,5),null)],n),!0))
if(h.w!=null){e=k.m(0,h)
f.push(new A.ab(A.a([new A.Q(A.R(e==null?0:e,!1,5),null)],n),!0))}else f.push(new A.ab(A.a([new A.Q("--",null)],n),!1))
r=8
return a.b=new A.ax(h.b,h,f,l),1
case 8:r=6
break
case 7:r=9
return a.b=new A.ax(null,h,A.a([new A.ab(A.a([new A.Q("(undiscovered "+(i+1)+")",null)],n),!1)],m),l),1
case 9:case 6:case 3:++i
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
$S:108}
A.kW.prototype={
gO(){return"Monster Lore"},
gcl(){return this.e.gcl()},
ac(a,b,c){if(this.e.ac(a,b,c)){this.J()
return!0}return this.fF(a,b,c)},
a8(a){if(this.e.a8(a)){this.J()
return!0}return this.fE(a)},
hv(a){var s=this.e,r=a.c
s.ht(a.b9(0,1,r.a,r.b-16))
r=s.c
s=s.y
if(!(s>=0&&s<r.length))return A.b(r,s)
this.nY(a,t.P.a(r[s].b))},
nY(a,b){var s,r,q,p,o,n,m=null
a=a.b9(0,a.c.b-15,80,14)
s=a.c
r=s.a
q=this.c.ax.ib(b)===0
p=q?A.as("?",B.j,m):b.b
o=q?m:b.a.a
A.od(a,0,0,r,s.b,p,o)
if(q){a.k(1,3,"You have not seen this breed yet.",B.j)
return}s=b.fr
n=s!==""?3+A.h7(a,s,m,r-2,1,3)+1:3
A.h7(a,this.mj(b),m,r-2,1,n)},
mj(a){var s,r,q=null,p=A.a([],t.s),o=a.a.d.c,n=this.c.ax,m=a.dy
if(m.length!==0){s=A.N(m)
r=new A.au(m,s.i("q(1)").a(new A.qd()),s.i("au<1,q>")).aG(0," ")}else r="monster"
if(a.ax.f)if(n.el(a)>0)B.a.j(p,"You have slain this unique "+r+".")
else B.a.j(p,"You have seen but not slain this unique "+r+".")
else B.a.j(p,"You have seen "+A.R(n.ib(a),!1,q)+" and slain "+A.R(n.el(a),!1,q)+" of this "+r+".")
B.a.j(p,o+" is worth "+A.R(a.gbp(),!1,q)+" experience.")
if(n.el(a)>0)B.a.j(p,o+" has "+A.R(a.f,!1,q)+" health.")
return new A.au(p,t.gL.a(new A.qe()),t.gQ).aG(0," ")},
nu(){var s=$.ck().gc3(),r=A.a6(s,A.y(s).i("k.E"))
this.e.kU(new A.qb(this,r))}}
A.qc.prototype={
$1(a){return a>=65&&a<=90},
$S:109}
A.qf.prototype={
$1(a){t.P.a(a)
return!0},
$S:33}
A.qg.prototype={
$1(a){return t.P.a(a).ax.f},
$S:33}
A.qd.prototype={
$1(a){return A.a3(a)},
$S:4}
A.qe.prototype={
$1(a){A.a3(a)
return B.i.aM(a,0,1).toUpperCase()+B.i.cY(a,1)},
$S:4}
A.qb.prototype={
$0(){return new A.S(this.lm(),t.kF)},
lm(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$$0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=t.H,m=t.bZ,l=t.cv,k=s.a.c.ax,j=k.a,k=k.b,i=0
case 2:if(!(i<o.length)){r=4
break}h=o[i]
g=j.m(0,h)
if(g==null)g=0
r=g>0?5:7
break
case 5:f=A.a([new A.ab(A.a([new A.Q(h.a.a,null)],n),!0),new A.ab(A.a([new A.Q(A.R(h.c,!1,null),null)],n),!0)],m)
if(h.ax.f){e=A.a([new A.Q("Yes",null)],n)
d=k.m(0,h)
B.a.T(f,A.a([new A.ab(e,!0),new A.ab(A.a([new A.Q((d==null?0:d)>0?"Yes":"No",null)],n),!0)],m))}else{e=A.a([new A.Q(A.R(g,!1,null),null)],n)
d=k.m(0,h)
B.a.T(f,A.a([new A.ab(e,!0),new A.ab(A.a([new A.Q(A.R(d==null?0:d,!1,null),null)],n),!0)],m))}r=8
return a.b=new A.ax(h.b,h,f,l),1
case 8:r=6
break
case 7:r=9
return a.b=new A.ax(null,h,A.a([new A.ab(A.a([new A.Q("(undiscovered "+(i+1)+")",null)],n),!1)],m),l),1
case 9:case 6:case 3:++i
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
$S:111}
A.l.prototype={
t(a){return"Input("+this.a+")"}}
A.ds.prototype={
gbO(){return B.bB},
gcq(){return!0},
gcm(){return"Drop"},
ct(a){var s
A:{if(B.v===a){s="Drop which item?"
break A}if(B.Z===a){s="Unequip and drop which item?"
break A}s=A.a_(A.bN("Unreachable."))}return s},
e7(a){return"Drop how many?"},
aU(a){return!0},
bK(a,b,c){this.b.b.y.at=new A.aY(new A.jZ(b,c,a))
this.a.aa()}}
A.dV.prototype={
gcq(){return!1},
gcm(){return"Equip"},
ct(a){var s
A:{if(B.v===a){s="Equip which item?"
break A}if(B.Z===a){s="Unequip which item?"
break A}if(B.G===a){s="Pick up and equip which item?"
break A}s=A.a_(A.bN("Unreachable."))}return s},
aU(a){return a.a.e!=null},
bK(a,b,c){this.b.b.y.at=new A.aY(A.wR(c,a))
this.a.aa()}}
A.hk.prototype={
gcq(){return!1},
gcm(){return"Choose"},
gie(){return"Drop which item?"},
ct(a){var s
A:{if(B.Z===a){s="Equipment"
break A}if(B.G===a){s="On the ground"
break A}s="Inventory"
break A}return s},
aU(a){return!0},
bK(a,b,c){},
it(a){var s,r=this,q=A.a([],t.aP),p=a.a
if(p.w!=null)q.push(new A.X(["u",85,"Use",new A.p9(r)]))
if(p.e!=null){s=r.c===B.Z?"Unequip":"Equip"
q.push(new A.X(["e",69,s,new A.pa(r)]))}if(p.y!=null)q.push(new A.X(["t",84,"Throw",new A.pb(r)]))
if(r.c!==B.G)q.push(new A.X(["d",68,"Drop",new A.pc(r)]))
if(r.c===B.G)q.push(new A.X(["g",71,"Pick up",new A.pd(r)]))
q.push(B.jC)
return q},
ha(a,b){var s,r,q=this
t.kf.a(a)
if(a==null)return q.fk(b)
s=a.$0()
r=q.c
q.b.z=!0
q.a.bh(s)
s.l0(b,r)},
fl(a){var s=a.a
return this.ha(s.w!=null||s.e!=null?B.a.gaB(this.it(a)).a[3]:null,a)},
l2(a){return this.hX(a)},
hX(a){if(this.c!==B.G)this.ha(new A.pe(this),a)},
l1(a){var s,r,q,p,o,n,m,l,k,j,i
this.y=a
s=this.a
s.toString
r=a.gao()
q=A.a([],t.oW)
for(p=this.it(a),o=p.length,n=0;n<p.length;p.length===o||(0,A.o)(p),++n){m=p[n].a
l=m[0]
k=m[1]
j=m[2]
i=m[3]
q.push(new A.af(l,j,i==null?"inspect":i,k,!1))}s.a3(A.xv(r.a,q))},
d0(a,b){var s
t.d.a(a)
s=this.y
this.y=null
if(s==null||b==null)return
this.ha(t.j5.b(b)?b:null,s)}}
A.p9.prototype={
$0(){return new A.ec(this.a.b,B.v)},
$S:112}
A.pa.prototype={
$0(){return new A.dV(this.a.b,B.v)},
$S:113}
A.pb.prototype={
$0(){return new A.ea(this.a.b,B.v)},
$S:114}
A.pc.prototype={
$0(){return new A.ds(this.a.b,B.v)},
$S:32}
A.pd.prototype={
$0(){return new A.e4(this.a.b,B.G)},
$S:116}
A.pe.prototype={
$0(){return new A.ds(this.a.b,B.v)},
$S:32}
A.b5.prototype={
gie(){return"Inspect which item?"},
gb4(){return!0},
gbO(){var s=A.a([B.Z,B.v],t.hm),r=this.b.b,q=r.x
q===$&&A.c()
if(!q.bS(r.y.y).gaq(0))s.push(B.G)
return s},
gih(){return!1},
gco(){var s=this.b.b,r=s.y,q=this.c
A:{if(B.v===q){s=r.Q.e
break A}if(B.Z===q){s=r.Q.f
break A}if(B.G===q){s=s.x
s===$&&A.c()
s=s.bS(r.y)
break A}s=A.a_(A.ce("Unexpected location."))}return s},
e7(a){return A.a_(A.be(null))},
fs(a){return t.W.a(a).gbg()},
i3(a,b,c){var s=this
if(!c.jX(a)){s.b.b.y.Q.at.Z(B.a_,"Not enough room for "+a.b1(b).t(0)+".",null,null,null)
s.J()
return}if(b===a.f){c.ca(a)
s.gco().ah(0,a)}else{c.ca(a.dr(b))
s.gco().bo()}s.eP(a,b)
s.a.aa()},
eP(a,b){},
a8(a){var s,r,q=this,p=q.d
if(p!=null){if(B.a2===a){q.bK(p,q.e,q.c)
return!0}if(B.H===a){q.d=null
q.J()
return!0}if(B.X===a&&q.e<p.f){++q.e
q.J()
return!0}if(B.Y===a&&q.e>1){--q.e
q.J()
return!0}}else if(a===B.H){q.a.aa()
return!0}else{s=$.no
if(!(s>=65&&s<=90)){if(B.X===a){q.jc(-1)
return!0}if(B.Y===a){q.jc(1)
return!0}if((B.a9===a||B.ad===a)&&q.gbO().length>1){q.ix(a===B.a9?-1:1)
return!0}if(B.a2===a){r=q.gfQ()
if(r!=null)q.l1(r)
return!0}}}return!1},
ac(a,b,c){var s,r,q=this
if(a===16){q.f=!0
q.J()
return!0}if(b)return!1
s=q.f
if(s&&a===27){q.r=null
q.J()
return!0}if(q.d!=null)return!1
if(a>=65&&a<=90){q.nV(a-65,c)
return!0}if(a===9&&!s&&q.gbO().length>1){q.ix(c?-1:1)
return!0}r=q.gfQ()
if(96===a||110===a){q.a.aa()
return!0}if(107===a&&r!=null){q.fl(r)
return!0}if(109===a&&r!=null){q.hX(r)
return!0}if(106===a&&r!=null){q.fk(r)
return!0}return!1},
fa(a,b,c){if(a===16){this.f=!1
this.J()
return!0}return!1},
ai(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="Unexpected location.",c="Inspect item",b=e.c
A:{if(B.v===b){s=24
break A}if(B.Z===b){s=9
break A}if(B.G===b){s=e.gco()
s=Math.min(s.gI(s),26)
break A}s=A.a_(A.ce(d))}r=e.b
q=r.f
p=q.a
if(p!=null){o=e.c
B:{n=0
if(B.v===o){q=11
break B}if(B.Z===o){q=n
break B}m=B.G===o
if(m&&p.b.b>50&&s>5){q=Math.max(0,q.ge4()-s+5)
break B}if(m&&p.b.b>50){q=q.ge4()
break B}if(m){q=n
break B}q=A.a_(A.ce(d))}l=Math.max(46,p.b.a+2)
k=a.ga0()-l
n=q}else{q=r.w
q===$&&A.c()
q=q.a
k=q.geb()-46
n=q.a.b
l=46}q=e.gco()
p=e.d==null&&e.f
j=e.gih()
i=e.r
h=e.d==null?e.gfQ():null
A.us(a,q,e.gm3(),!0,p,h,e.gi8(),i,!1,s,k,r.b.y.Q,!0,j,n,l)
if(e.d==null)g=e.f?e.gie():e.ct(e.c)
else g=e.e7(e.c)+" "+e.e
if(e.d==null){s=t.N
if(e.f){s=A.C(s,s)
s.h(0,"A-Z",c)
if(e.r!=null)s.h(0,"`","Hide inspector")
f=s}else{s=A.C(s,s)
s.h(0,"A-Z","Select item")
s.h(0,"Shift",c)
if(e.gbO().length>1)s.h(0,"Tab","Switch view")
f=s}}else{s=t.N
f=A.B(["OK",e.gcm(),"\u2195","Change quantity","`","Cancel"],s,s)}A.bA(a,f,g)},
m4(a){var s,r=this
if(r.f&&r.d==null)return!0
s=r.d
if(s!=null)return a===s
return r.aU(a)},
nV(a,b){var s,r=this,q=J.jm(r.gco().gcz()),p=q.length
if(a>=p)return
if(!(a>=0))return A.b(q,a)
s=q[a]
if(s==null)return
r.w=a
if($.yw)r.fk(s)
else if(r.f||b)r.l2(s)
else r.fl(s)},
fl(a){return this.l0(a,this.c)},
l1(a){return this.fl(a)},
l2(a){return this.fk(a)},
hX(a){},
fk(a){this.r=this.r===a?null:a
this.J()},
l0(a,b){var s=this
s.c=b
if(!s.aU(a))return
if(a.f>1&&s.gcq()){s.d=a
s.r=null
s.e=a.f
s.J()}else s.bK(a,1,s.c)},
gfQ(){var s=J.jm(this.gco().gcz()),r=this.w,q=s.length
if(r<q){if(!(r>=0))return A.b(s,r)
r=s[r]}else r=null
return r},
jc(a){var s,r,q,p,o=this,n=J.jm(o.gco().gcz())
for(s=n.length,r=o.w,q=1;q<=s;++q){p=B.c.ab(r+a*q,s)
if(n[p]!=null){o.w=p
break}}o.J()},
ix(a){var s=this,r=B.a.c8(s.gbO(),s.c),q=s.gbO().length,p=s.gbO(),o=B.c.ab(r+q+a,q)
if(!(o<p.length))return A.b(p,o)
s.c=p[o]
o=B.a.hE(J.jm(s.gco().gcz()),new A.pu())
s.w=o
if(o<0)s.w=0
s.J()}}
A.pu.prototype={
$1(a){return t.c.a(a)!=null},
$S:118}
A.kC.prototype={
lM(a,b,c){var s=this,r=s.a,q=r.a
if(q.x!=null)s.b=new A.io(a,r)
if(q.Q+r.gc4()!==0||q.z!=null)s.c=new A.iq(r)
if(q.e!=null)s.d=new A.iJ(r)
r=q.w
if(r!=null){q=c?78:34
s.e=new A.fz(A.e2(q,r.a),"Use")}},
hu(a,b,c){var s,r,q,p,o,n=this,m=A.a([],t.n9),l=n.b
if(l!=null)m.push(l)
l=n.c
if(l!=null)m.push(l)
l=n.d
if(l!=null)m.push(l)
l=n.e
if(l!=null)m.push(l)
l=n.f
l===$&&A.c()
m.push(l)
s=4+n.nT(m)
c=c.b9(a,B.c.M(b-1,0,c.gX()-4-s),34,s)
l=c.c
r=n.a
A.od(c,0,0,l.a,l.b,r.a.b,r.gao().a)
for(l=m.length,q=3,p=0;p<m.length;m.length===l||(0,A.o)(m),++p){o=m[p]
c.k(1,q,o.gdZ()+" ",B.f)
o.dB(c,q+1)
q=q+o.gX()+2}},
kb(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.c,h=i.a
i=i.b
s=j.a
A.od(a,0,0,h,i,s.a.b,s.gao().a)
r=j.b
q=r!=null?r.dT(a,3):3
p=j.c
if(p!=null)q=p.dT(a,q)
o=a.b9(40,0,h-40,i)
n=j.d
m=n!=null?n.dT(o,3):3
l=Math.max(q,m)
k=j.e
if(k!=null)l=k.dT(a,l)
i=j.f
i===$&&A.c()
i.dT(a,l)},
nT(a){var s,r,q,p
t.la.a(a)
for(s=a.length,r=0,q=0;p=a.length,q<p;a.length===s||(0,A.o)(a),++q)r+=a[q].gX()+1
return r+p-1}}
A.pv.prototype={
$2(a,b){t.M.a(a)
A.r(b)
if(b<0)B.a.j(this.a,"It lowers "+a.gO()+" by "+-b+".")
else if(b>0)B.a.j(this.a,"It raises "+a.gO()+" by "+b+".")},
$S:20}
A.da.prototype={
dT(a,b){a.k(1,b,this.gdZ()+" ",B.f)
this.dB(a,b+1)
return b+this.gX()+2},
eO(a,b,c,d){var s,r,q=B.c.t(Math.abs(d))
if(d>0){s=q.length
a.k(b+2-s,c,"+",B.B)
a.k(b+3-s,c,q,B.n)}else{s=q.length
r=b+2-s
s=b+3-s
if(d<0){a.k(r,c,"-",B.a1)
a.k(s,c,q,B.m)}else{a.k(r,c,"+",B.j)
a.k(s,c,q,B.j)}}},
hh(a,b,c,d){a.k(1,b,c+":",B.j)
a.k(12,b,B.c.t(d),B.d)},
jM(a,b,c,d){var s,r
if(d>1){s=B.B
r=B.n}else if(d<1){s=B.a1
r=B.m}else{s=B.j
r=B.j}a.k(b,c,"x",s)
a.k(b+1,c,A.v6(d,1,null),r)}}
A.io.prototype={
gdZ(){return"Attack"},
gX(){var s=this.b,r=s.gcd()!==0?3:2
return s.a.x.d>0?r+1:r},
dB(a,b){var s,r,q,p,o=this
a.k(1,b,"Damage:",B.j)
s=o.b
if(s.gb3()!==$.az())a.k(9,b,s.gb3().b,A.el(s.gb3()))
r=s.a.x
q=r.c
a.k(12,b,B.c.t(q),B.d)
o.jM(a,16,b,s.gd6())
o.eO(a,20,b,s.gd5())
a.k(25,b,"=",B.l)
a.k(27,b,A.v6(q*s.gd6()+s.gd5(),2,6),B.N);++b
if(s.gcd()!==0){a.k(1,b,"Strike:",B.j)
o.eO(a,12,b,s.gcd());++b}r=r.d
if(r>0){o.hh(a,b,"Range",r);++b}a.k(1,b,"Heft:",B.j)
r=o.a.ay
q=r.a
q.toString
p=q>=s.gf6()?B.d:B.m
a.k(12,b,B.c.t(s.gf6()),p)
o.jM(a,16,b,r.km(s.gf6()))}}
A.iq.prototype={
gdZ(){return"Defense"},
gX(){var s=this.a,r=s.a,q=r.z!=null?2:1
return r.Q+s.gc4()!==0?q+1:q},
dB(a,b){var s=this,r=s.a,q=r.a,p=q.z
if(p!=null){s.hh(a,b,"Dodge",p.a);++b}q=q.Q
if(q+r.gc4()!==0){a.k(1,b,"Armor:",B.j)
a.k(12,b,B.c.t(q),B.d)
s.eO(a,16,b,r.gc4())
a.k(25,b,"=",B.l)
a.k(27,b,A.R(q+r.gc4(),!1,6),B.n);++b}s.hh(a,b,"Weight",r.gee())}}
A.iJ.prototype={
gdZ(){return"Resistances"},
gX(){return 2},
dB(a,b){var s,r,q,p,o,n,m,l
for(s=$.fM(),r=this.a,q=b+1,p=1,o=0;o<12;++o){n=s[o]
if(n===$.az())continue
m=r.c9(n)
this.eO(a,p-1,b,m)
l=m===0?B.j:A.el(n)
a.k(p,q,n.b,l)
p+=3}}}
A.fz.prototype={
gX(){return this.a.length},
dB(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){a.k(1,b,s[q],B.d);++b}},
gdZ(){return this.b}}
A.e4.prototype={
gbO(){return B.i7},
gcq(){return!0},
gcm(){return"Pick up"},
ct(a){return"Pick up which item?"},
e7(a){return"Pick up how many?"},
aU(a){return!0},
bK(a,b,c){this.b.b.y.at=new A.aY(A.xf(a))
this.a.aa()}}
A.mV.prototype={
gbO(){return B.bB},
gcq(){return!0},
gcm(){return"Put"},
ct(a){return"Put which item?"},
e7(a){return"Put how many?"},
aU(a){return!0}}
A.lj.prototype={
bK(a,b,c){this.i3(a,b,this.b.b.y.Q.w)},
eP(a,b){this.b.b.y.Q.at.Z(B.x,"You place "+a.b1(b).t(0)+" into the crucible.",null,null,null)
this.CW.$0()}}
A.lk.prototype={
bK(a,b,c){this.i3(a,b,this.b.b.y.Q.r)},
eP(a,b){this.b.b.y.Q.at.Z(B.x,"You put "+a.b1(b).t(0)+" safely into your home.",null,null,null)}}
A.i0.prototype={
gbO(){return B.bB},
gcq(){return!0},
gih(){return!0},
gcm(){return"Sell"},
ct(a){return"Sell which item?"},
e7(a){return"Sell how many?"},
aU(a){return a.gbg()!==0},
fs(a){return B.e.bQ(t.W.a(a).gbg()*0.75)},
bK(a,b,c){this.i3(a,b,this.y)},
eP(a,b){var s=a.b1(b).gao(),r=B.e.bQ(a.gbg()*0.75)*b,q=this.b.b.y.Q
q.at.Z(B.x,"You sell "+s.a+" for "+r+" gold.",null,null,null)
q.Q+=r}}
A.ea.prototype={
gcq(){return!1},
gcm(){return"Toss"},
ct(a){var s
A:{if(B.v===a){s="Throw which item?"
break A}if(B.Z===a){s="Unequip and throw which item?"
break A}if(B.G===a){s="Pick up and throw which item?"
break A}s=A.a_(A.bN("Unreachable."))}return s},
aU(a){return a.a.y!=null},
bK(a,b,c){var s,r=A.bO(a.a.y.b),q=this.b
q.b.y.kC(r,B.hF)
s=this.a
s.toString
s.bh(A.xx(q,r.gaD(),new A.rY(this,c,a,r)))}}
A.rY.prototype={
$1(a){var s=this
s.a.b.b.y.at=new A.aY(new A.lQ(s.d,a,s.b,s.c))},
$S:10}
A.eb.prototype={
gfR(){return null},
gb4(){return!0},
gdz(){return!1},
ghd(){return!1},
of(a){if(this.c)return!0
return this.aU(a)},
aU(a){return!0},
a8(a){this.f=null
if(a===B.H){this.a.aa()
return!0}return!1},
ac(a,b,c){var s,r,q,p,o=this
o.f=null
if(a===16){o.c=!0
o.J()
return!0}if(b)return!1
if(o.c)s=a===27||a===192
else s=!1
if(s){o.e=null
o.J()
return!0}if(a>=65&&a<=90){r=a-65
if(r>=o.gbd().gI(0))return!1
q=o.gbd().aX(0,r)
if(q==null)return!1
if(o.c){o.e=q
o.J()}else{if(!o.gdz()||!o.aU(q))return!1
if(q.f>1){o.d=!1
s=o.a
s.toString
t.ak.a(o)
p=new A.fs(o,q,o.j3(q),o.b)
p.e=q
s.a3(p)
return!0}if(o.jC(q,1)){o.a.aa()
return!0}}}return!1},
fa(a,b,c){if(a===16){this.c=!1
this.J()
return!0}return!1},
d0(a,b){var s=this
t.d.a(a)
s.d=!0
s.e=null
if(a instanceof A.fs&&b!=null)if(s.jC(a.x,A.r(b)))s.a.aa()},
ai(a){var s,r,q,p,o,n,m,l,k,j=this
if(j.d)if(j.c){s=t.N
s=A.C(s,s)
s.h(0,"A-Z","Inspect item")
if(j.e!=null)s.h(0,"`","Hide inspector")
A.bA(a,s,"Inspect which item?")}else A.bA(a,j.gd_(),j.gcZ())
s=j.gbd()
r=j.b
q=r.w
q===$&&A.c()
q=q.a
p=q.a
q=Math.min(46,q.b.a)
o=j.gbd().b.length
n=j.c
m=j.ghd()
l=j.d?j.e:null
k=j.c||j.gdz()
A.us(a,s,j.goe(),k,n,null,j.geC(),l,!0,o,p.a,r.b.y.Q,!0,m,p.b,q)
s=j.f
if(s!=null)a.k(0,32,s,B.m)},
j3(a){return a.f},
h_(a){return a.f},
c1(a){t.W.a(a)
return null},
jC(a,b){var s=this,r=s.gfR()
if(!r.jX(a)){s.f="Not enough room for "+a.b1(b).t(0)+"."
s.J()
return!1}if(b===a.f){r.ca(a)
B.a.ah(s.gbd().b,a)}else{r.ca(a.dr(b))
s.gbd().bo()}s.cB(a,b)
return!0},
cB(a,b){}}
A.d7.prototype={}
A.iz.prototype={
gbd(){return this.b.b.y.Q.r},
gcZ(){return"Welcome home!"},
gd_(){var s=t.N
return A.B(["G","Get item","P","Put item","Shift","Inspect item","Tab","Use crucible","`","Leave"],s,s)},
ac(a,b,c){var s,r,q,p=this
if(p.ep(a,b,c))return!0
if(c||b)return!1
switch(a){case 71:s=new A.mB(p.b)
s.e=p.e
p.d=!1
p.a.a3(s)
return!0
case 80:p.d=!1
p.a.a3(new A.lk(p.b,B.v))
return!0
case 9:r=p.a
r.toString
q=new A.ip(p.b)
q.eG()
r.bh(q)
return!0}return!1}}
A.iv.prototype={
gcZ(){return"Get which item?"},
geN(){return"Get"},
gd_(){var s=t.N
return A.B(["A-Z","Select item","Shift","Inspect item","`","Cancel"],s,s)},
gfR(){return this.b.b.y.Q.e},
gdz(){return!0},
aU(a){return!0},
cB(a,b){var s=this.b.b.y
s.Q.ax.dc(a)
s.bt()}}
A.mB.prototype={
gbd(){return this.b.b.y.Q.r},
cB(a,b){this.b.b.y.Q.at.Z(B.x,"You take "+a.b1(b).t(0)+" from your home.",null,null,null)
this.ir(a,b)}}
A.mA.prototype={
gbd(){return this.b.b.y.Q.w},
cB(a,b){this.b.b.y.Q.at.Z(B.x,"You remove "+a.b1(b).t(0)+" from the crucible.",null,null,null)
this.ir(a,b)
this.cy.$0()}}
A.ip.prototype={
gbd(){return this.b.b.y.Q.w},
gcZ(){return this.w!=null?"Ready to forge item!":"Place items to complete a recipe."},
gd_(){var s=t.N
s=A.C(s,s)
s.h(0,"G","Get item")
s.h(0,"P","Put item")
s.h(0,"Shift","Inspect item")
if(this.w!=null)s.h(0,"Space","Forge item")
s.h(0,"Tab","Back to home")
s.h(0,"`","Leave")
return s},
ai(a){var s,r,q,p,o
this.lF(a)
s=this.b
r=s.w
r===$&&A.c()
r=r.a
q=Math.min(46,r.b.a)
r=r.a
s=s.b.y.Q.w
p=q-8
a=new A.aZ(new A.e(p,3),r.a+4,r.b+s.b.length+1,a)
A.cM(a,0,0,p,3,null,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
a.k(0,0,"\u252c",B.l)
a.k(p-1,0,"\u252c",B.l)
o=this.w
if(o!=null)a.k(1,1,"Forge a "+o.c,B.C)
else if(!s.gL(0).q())a.k(1,1,"Add ingredients to crucible",B.j)
else a.k(1,1,"Not a complete recipe",B.j)},
ac(a,b,c){var s,r,q,p=this
if(p.ep(a,b,c))return!0
if(c||b)return!1
if(71===a){s=new A.mA(p.gjo(),p.b)
s.e=p.e
p.d=!1
p.a.a3(s)
return!0}if(80===a){p.d=!1
p.a.a3(new A.lj(p.gjo(),p.b,B.v))
return!0}if(32===a&&p.w!=null){r=p.b.b.y.Q
q=r.w
B.a.aP(q.b)
q.d=null
p.w.b.b2(r.ax,1,q.gla())
p.eG()
p.J()
return!0}if(9===a){p.a.bh(new A.iz(p.b))
return!0}return!1},
cB(a,b){this.eG()},
eG(){var s,r,q,p,o,n
this.w=null
for(s=$.hR.length,r=this.b.b.y.Q.w,q=t.E,p=0;p<$.hR.length;$.hR.length===s||(0,A.o)($.hR),++p){o=$.hR[p]
n=o.nt(q.a(r))
if(n!=null&&n.a===0){this.w=o
return}}}}
A.iN.prototype={
gbd(){return this.w},
gcZ(){return"What can I interest you in?"},
ghd(){return!0},
gd_(){var s=t.N
return A.B(["B","Buy item","S","Sell item","Shift","Inspect item","`","Cancel"],s,s)},
ac(a,b,c){var s,r=this
if(r.ep(a,b,c))return!0
if(c||b)return!1
switch(a){case 66:s=new A.iM(r.w,r.b)
s.e=r.e
r.d=!1
r.a.a3(s)
break
case 83:r.d=!1
r.a.a3(new A.i0(r.w,r.b,B.v))
return!0}return!1},
c1(a){return t.W.a(a).gbg()}}
A.iM.prototype={
gcZ(){return"Buy which item?"},
geN(){return"Buy"},
gd_(){var s=t.N
return A.B(["A-Z","Select item","Shift","Inspect item","`","Cancel"],s,s)},
gbd(){return this.at},
gfR(){return this.b.b.y.Q.e},
gdz(){return!0},
ghd(){return!0},
aU(a){return a.gbg()<=this.b.b.y.Q.Q},
j3(a){return 1},
h_(a){return Math.min(a.f,B.c.c_(this.b.b.y.Q.Q,a.gbg()))},
c1(a){return t.W.a(a).gbg()},
cB(a,b){var s=a.gbg()*b,r=this.b.b.y,q=r.Q
q.at.Z(B.x,"You buy "+a.b1(b).t(0)+" for "+s+" gold.",null,null,null)
q.Q-=s
q.ax.dc(a)
r.bt()}}
A.fs.prototype={
gbd(){return this.w.gbd()},
gcZ(){var s,r=this,q=r.x,p=q.b1(r.y).gao().a,o=r.w,n=o.c1(q)
if(n!=null){s=A.R(n*r.y,!1,null)
return o.geN()+" "+p+" for "+s+" gold?"}else return o.geN()+" "+p+"?"},
gd_(){var s=t.N
return A.B(["OK",this.w.geN(),"\u2195","Change quantity","`","Cancel"],s,s)},
gdz(){return!0},
aU(a){return a===this.x},
ac(a,b,c){if(a===16)return!1
return this.ep(a,b,c)},
fa(a,b,c){return!1},
a8(a){var s=this
A:{if(B.a2===a){s.a.aQ(s.y)
break A}if(B.H===a){s.a.aa()
break A}if(B.X===a&&s.y<s.w.h_(s.x)){++s.y
break A}if(B.Y===a&&s.y>1){--s.y
break A}if(B.ap===a){s.y=s.w.h_(s.x)
break A}if(B.aq===a){s.y=1
break A}return!1}s.J()
return!0},
c1(a){return this.w.c1(t.W.a(a))}}
A.ec.prototype={
gcq(){return!1},
gcm(){return"Use"},
ct(a){var s
A:{if(B.v===a||B.Z===a){s="Use which item?"
break A}if(B.G===a){s="Pick up and use which item?"
break A}s=A.a_(A.bN("Unreachable."))}return s},
aU(a){return a.a.w!=null},
bK(a,b,c){this.b.b.y.at=new A.aY(new A.lW(c,a))
this.a.aa()}}
A.kl.prototype={
a8(a){switch(a){case B.H:this.a.aa()
return!0}return!1},
ai(a){var s=this.b.d?"Create a new hero":"Try again",r=t.N
A.wO(a,60,40,new A.oU(this),A.B(["`",s],r,r),"You have died")}}
A.oU.prototype={
$1(a){var s,r,q,p,o=a.c,n=o.b-1
for(s=this.a.b.at.a,r=s.length-1,o=o.a;r>=0;--r){if(!(r<s.length))return A.b(s,r)
q=A.e2(o,s[r].b)
for(p=q.length-1;p>=0;--p){if(!(p<q.length))return A.b(q,p)
a.q0(0,n,q[p]);--n
if(n<0)break}if(n<0)break}},
$S:29}
A.hz.prototype={
a8(a){var s,r,q,p,o,n=this
if(B.X===a&&n.d>0){--n.d
n.h7()
n.J()
return!0}if(B.Y===a&&n.d<n.c.b.length-1){++n.d
n.h7()
n.J()
return!0}if(B.a2===a){s=n.d
r=n.c
q=r.b
p=q.length
if(s<p){if(!(s>=0))return A.b(q,s)
o=q[s]
n.x=!1
s=n.a
s.toString
s.a3(A.oV(r,n.b,o,!1))}return!0}if(B.aO===a){s=n.a
s.toString
r=B.aW.gaT()
r=A.a6(r,A.y(r).i("k.E"))
s.a3(new A.hi(r))
return!0}return!1},
h7(){var s=this,r=s.y=B.c.M(s.y,0,Math.max(s.c.b.length-8,0)),q=s.d
if(q<r)s.y=q
else if(q>=r+8)s.y=q-8+1},
ac(a,b,c){var s,r,q,p=this
if(c||b)return!1
switch(a){case 68:s=p.d
r=p.c.b
q=r.length
if(s<q){if(!(s>=0))return A.b(r,s)
s=r[s]
p.x=!1
p.a.a3(new A.h3("Are you sure you want to delete "+s.a+"?","delete"))}return!0
case 78:p.x=!1
s=p.a
s.toString
s.a3(A.A9(p.b,p.c))
return!0}return!1},
d0(a,b){var s,r,q=this
q.x=!0
if(a instanceof A.h3&&J.a9(b,"delete")){s=q.c.b
r=q.d
if(!(r>=0&&r<s.length))return A.b(s,r)
B.a.ah(s,s[r])
r=q.d
if(r>0&&r>=s.length)q.d=r-1
q.h7()
q.J()}},
dj(a){this.f=this.e=null},
bx(){var s,r,q=this
if(!q.x)return
s=q.w
if(s>0){--s
q.w=s
if(s===0){q.e=null
q.J()}return}r=q.f
if(r!=null){if(!r.q()){q.f=null
q.w=300
return}s=r.b
if(J.a9(s==null?r.$ti.c.a(s):s,"Ready to decorate"))q.r=!0
if(q.r){s=q.e.x
s===$&&A.c()
s.i1()
s=q.e.x
s===$&&A.c()
s.gaA().dh()}q.J()}},
ai(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.e
if(c!=null)e.jq(a,c)
else{s=e.b
r=s.oY("Temporary")
q=$.n().aC(1,100)
p=a.ga0()
o=e.e=A.v0(s,q,r,a.gX(),p)
p=o.ef()
e.f=new A.ak(p.a(),p.$ti.i("ak<1>"))
e.r=!1
e.jq(a,o)}n=new A.aZ(new A.e(68,34),B.c.A(a.ga0()-68,2),B.c.A(a.gX()-34,2),a)
n.c7(0,0,n.ga0(),n.gX())
A.cM(n,0,0,68,34,d,"\u2554","\u2550","\u2557","\u2551","\u255a","\u2550","\u255d")
for(m=0;m<14;++m)for(s=m+2,l=0;l<B.cg[m].length;++l){q=B.hW[m]
if(!(l<q.length))return A.b(q,l)
k=B.ig.m(0,q[l])
q=B.cg[m]
if(!(l<q.length))return A.b(q,l)
n.k(l+3,s,q[l],k)}n.k(3,18,"Which hero shall you play?",B.d)
A.jY(n,3,20,62,d)
A.jY(n,3,29,62,d)
s=e.c.b
if(s.length===0)n.k(3,21,"(No heroes. Please create a new one.)",B.j)
else{if(e.y>0)n.k(34,20,"\u25b2",B.h)
if(e.y<s.length-8)n.k(34,29,"\u25bc",B.h)
for(j=0;j<8;++j){i=j+e.y
q=s.length
if(i>=q)break
if(!(i>=0))return A.b(s,i)
h=s[i]
if(i===e.d)n.an(2,21+j,new A.Y(9658,B.h,B.z))
g=i===e.d?B.h:B.C
q=21+j
n.k(3,q,h.a,g)
f=i===e.d?B.h:B.d
n.k(34,q,h.b.a,f)
n.k(42,q,h.c.a,f)
if(h.d)n.k(55,q,"Permadeath",f)}}if(e.x){s=t.N
A.bA(a,A.B(["OK","Play","\u2195","Change selection","N","Create a new hero","D","Delete hero","H","Help"],s,s),d)}},
jq(a,b){var s,r,q,p=b.x
p===$&&A.c()
for(p=p.f.b.b,s=p.b,p=p.a,r=0;r<s;++r)for(q=0;q<p;++q)this.nL(a,b,new A.e(q,r))},
nL(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
d===$&&A.c()
s=c.a
r=c.b
q=d.f.B(s,r)
p=q.a.d
A:{if(p instanceof A.Y){o=p
break A}if(t.af.b(p)){o=p[B.c.ab(A.ym(s,r),p.length)]
break A}o=B.aM
break A}n=o.a
m=o.b
l=o.c
k=d.bS(c)
j=k.gaq(0)
if(!j){i=k.gaB(0).a.b
n=i.a
m=i.b}d=d.w.B(s,r)
h=d==null?null:d.geQ()
if(h instanceof A.Y){n=h.a
m=h.b
j=!1}d=new A.q6()
g=d.$2(m,B.bR)
f=d.$2(l,B.d0)
q=new A.q5(q)
if(j)m=q.$2(m,g)
e=q.$2(l,f)
a.an(s,r,A.cP(n,m,e))}}
A.q6.prototype={
$2(a,b){return new A.F(B.c.A(a.a*b.a,255),B.c.A(a.b*b.b,255),B.c.A(a.c*b.c,255))},
$S:16}
A.q5.prototype={
$2(a,b){var s=this.a,r=s.d
if(r<128)a=a.bl(b,A.w(r,0,127,1,0))
else if(r>128)a=a.b_(0,B.u,A.w(r,128,255,0,0.2))
s=s.e
return s>0?a.b_(0,B.bP,A.w(s,0,255,0.05,0.1)):a},
$S:16}
A.hG.prototype={
ai(a){var s,r,q=this,p=t.N
p=A.C(p,p)
p.h(0,"Tab","Next field")
s=q.x
r=q.d
if(!(r>=0&&r<s.length))return A.b(s,r)
p.T(0,s[r].gcK())
if(q.e.f)p.h(0,"Enter","Create hero")
p.h(0,"`","Cancel")
A.wO(a,80,40,new A.qp(q),p,"Create New Hero")},
nK(a){var s,r,q,p,o=$.fN(),n=this.f.e
if(!(n>=0&&n<5))return A.b(o,n)
s=o[n]
this.js(a,s.d)
n=A.a([],t.dF)
for(o=s.c,r=0;r<4;++r){q=B.aV[r]
p=o.m(0,q)
p.toString
n.push(new A.O(q.c,B.e.N(p*100)))}this.jr(a,200,n)},
nI(a){var s,r,q=$.es(),p=this.r.e
if(!(p>=0&&p<3))return A.b(q,p)
s=q[p]
this.js(a,s.d)
p=A.a([],t.dF)
for(q=s.c,q=new A.br(q,A.y(q).i("br<1,2>")).gL(0);q.q();){r=q.d
p.push(new A.O(r.a.a,r.b))}this.jr(a,10,p)},
js(a,b){var s,r,q,p,o,n,m,l,k
t.m1.a(b)
for(s=b.length,r=3,q=0;q<b.length;b.length===s||(0,A.o)(b),++q){p=b[q]
for(o=A.e2(53,p.gO()+": "+p.gW()),n=o.length,m=r,l=0;l<o.length;o.length===n||(0,A.o)(o),++l,m=k){k=m+1
a.k(25,m,o[l],B.d)}a.k(25,r,p.gO()+":",B.j)
r=m+1}},
jr(a,b,c){var s,r,q,p
t.ig.a(c)
for(s=c.length,r=3,q=0;q<c.length;c.length===s||(0,A.o)(c),++q){p=c[q]
a.k(0,r,p.a,B.j)
A.wQ(a,13,r,10,p.b,b,null,null);++r}},
nJ(a){var s,r,q,p,o,n=this,m=null,l=n.d
A:{if(0===l){s=B.iG
break A}if(1===l){s=$.fN()
r=n.f.e
if(!(r>=0&&r<5))return A.b(s,r)
r=s[r]
r=new A.O(r.a,r.b)
s=r
break A}if(2===l){s=$.es()
r=n.r.e
if(!(r>=0&&r<3))return A.b(s,r)
r=s[r]
r=new A.O(r.a,r.b)
s=r
break A}if(3===l){s=n.w.e
if(!(s>=0&&s<2))return A.b(B.bC,s)
s=new A.O(B.bC[s],B.ib[s])
break A}s=A.a_(A.ce("Unexpected focus."))}A.bl(a,m,m,s.a,!0,m,m,m)
for(s=A.e2(a.c.a-2,s.b),r=s.length,q=2,p=0;p<s.length;s.length===r||(0,A.o)(s),++p,q=o){o=q+1
a.k(1,q,s[p],B.d)}},
a8(a){var s=this,r=s.x,q=s.d
if(!(q>=0&&q<r.length))return A.b(r,q)
if(r[q].a8(a)){s.J()
return!0}switch(a){case B.H:s.a.aa()
return!0}return!1},
ac(a,b,c){var s,r,q,p,o,n=this,m=n.x,l=n.d
if(!(l>=0&&l<m.length))return A.b(m,l)
if(m[l].ac(a,b,c)){n.J()
return!0}if(b)return!1
if(13===a&&n.e.f){m=n.b
l=n.e
s=l.d
l=s.length!==0?s:l.e
s=$.fN()
r=n.f.e
if(!(r>=0&&r<5))return A.b(s,r)
r=s[r]
s=$.es()
q=n.r.e
if(!(q>=0&&q<3))return A.b(s,q)
p=m.k6(l,s[q],n.w.e===1,r)
r=n.c
B.a.j(r.b,p)
r.bj()
q=n.a
q.toString
q.bh(A.oV(r,m,p,!0))
return!0}if(9===a){o=c?m.length-1:1
n.d=B.c.ab(n.d+o,m.length)
n.J()
return!0}return!1}}
A.qn.prototype={
$1(a){return t.ho.a(a).a},
$S:122}
A.qo.prototype={
$1(a){return t.lJ.a(a).a},
$S:123}
A.qp.prototype={
$1(a){var s,r,q,p,o
for(s=a.c.a,r=0;r<3;++r){q=B.hO[r]
p=B.i.aL("\u2500",s)
a.k(0,q,p,B.t)}p=this.a
p.nK(a.b9(0,2,s,10))
p.nI(a.b9(0,12,s,10))
p.nJ(a.b9(0,25,s,14))
for(s=p.x,o=0;o<s.length;++o)s[o].l_(a,o===p.d)},
$S:29}
A.eG.prototype={
a8(a){return!1},
ac(a,b,c){return!1}}
A.kZ.prototype={
gcK(){return B.ij},
ac(a,b,c){var s,r,q=this
if(b)return!1
switch(a){case 8:s=q.d
r=s.length
if(r!==0){s=B.i.aM(s,0,r-1)
q.d=s
if(s.length===0){s=$.n()
t.m.a(B.ai)
r=B.ai.length
s=s.U(r)
if(!(s>=0&&s<r))return A.b(B.ai,s)
q.e=B.ai[s]}}q.h8()
return!0
case 32:q.fI(" ")
return!0
default:if(a>=65&&a<=90){q.fI(A.aU(!c?32+a:a))
return!0}else if(a>=48&&a<=57){q.fI(A.aU(a))
return!0}}return!1},
fI(a){var s=this.d
if(s.length<20)this.d=s+a
this.h8()},
h8(){this.f=B.a.pc(this.c.b,new A.qm(this))},
l_(a,b){var s=this,r=s.f?B.h:B.m,q=s.a,p=s.b,o=p+1
a.k(q,o,"Name:",B.f)
if(b)A.cM(a,q+24,p,23,3,r,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
p=s.d
if(p.length!==0){q+=25
a.k(q,o,p,B.C)
if(b)a.cw(q+s.d.length,o," ",B.z,r)}else{q+=25
p=s.e
if(b)a.cw(q,o,p,B.z,r)
else a.k(q,o,p,B.C)}if(!s.f)a.k(48,3,"Already a hero with that name",B.m)}}
A.qm.prototype={
$1(a){var s,r
t.er.a(a)
s=this.a
r=s.d
s=r.length!==0?r:s.e
return a.a!==s},
$S:25}
A.fj.prototype={
gcK(){var s=t.N
return A.B(["\u25c4\u25ba","Select "+this.c.toLowerCase()],s,s)},
a8(a){var s,r,q=this
switch(a){case B.a9:s=q.e
r=q.d.length
q.e=B.c.ab(s+r-1,r)
return!0
case B.ad:q.e=B.c.ab(q.e+1,q.d.length)
return!0}return!1},
l_(a,b){var s,r,q,p,o,n=this,m=n.a,l=n.b,k=l+1
a.k(m,k,n.c+":",B.f)
s=m+25
if(b)for(m=n.d,r=0;r<m.length;++r){q=m[r]
if(r===n.e){p=s-1
o=q.length
A.cM(a,p,l,o+2,3,B.h,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
a.k(p,k,"\u25c4",B.h)
a.k(s+o,k,"\u25ba",B.h)}a.k(s,k,q,r===n.e?B.h:B.C)
s+=q.length+2}else{m=n.d
l=n.e
if(!(l>=0&&l<m.length))return A.b(m,l)
a.k(s,k,m[l],B.C)}}}
A.pz.prototype={
ge4(){return 9+this.b.y.Q.e.c+4},
ea(a){var s,r,q=this,p=q.b,o=p.y,n=o.Q
q.fT(a,0,9,n.f)
n=n.e
q.fT(a,11,n.c,n)
if(q.a.b.b>50){p=p.x
p===$&&A.c()
s=p.bS(o.y)
q.fT(a,q.ge4(),5,s)}r=q.a.b.b>50?q.ge4()+7:q.ge4()
p=a.c
A.cM(a,0,r,p.a,p.b-r,null,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")},
fT(a,b,c,d){A.us(a,d,A.yp(),!1,!1,null,A.yq(),null,!1,c,0,this.b.y.Q,!1,!1,b,a.c.a)}}
A.pW.prototype={
ea(a){var s,r,q,p,o,n,m,l,k,j,i
a.c7(0,0,a.ga0(),a.gX())
s=a.c
r=s.b
s=s.a
A.jY(a,0,r-1,s,null)
q=r-2
r=this.b.a
p=r.length-1
for(;;){if(!(p>=0&&q>=0))break
o=r.length
if(!(p>=0&&p<o))return A.b(r,p)
n=r[p]
m=n.b
l=n.c
if(l>1)m=m+" (x"+l+")"
switch(n.a.a){case 0:l=B.d
break
case 1:l=B.m
break
case 2:l=B.O
break
case 3:l=B.h
break
case 4:l=B.n
break
case 5:l=B.a0
break
default:l=null}k=p!==o-1?l.bl(B.z,0.5):l
j=A.e2(s,m)
i=j.length-1
for(;;){if(!(i>=0&&q>=0))break
if(!(i>=0&&i<j.length))return A.b(j,i)
a.k(0,q,j[i],k);--q;--i}--p}}}
A.qA.prototype={
ai(a){var s,r,q=this.a
if(q!=null){s=q.a
r=q.b
this.ea(new A.aZ(new A.e(r.a,r.b),s.a,s.b,a))}}}
A.r6.prototype={
ea(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b,f=g.b.y,e=f.Q,d=e.a
A.bl(a,h,h,d,!1,h,h,h)
a.k(1,2,e.b.a+" "+e.c.a,B.d)
i.mt(f,a,4)
s=f.z
r=e.CW.a
r.toString
i.ex(a,7,"Health",s,B.m,B.e.N(Math.pow(r,1.458)+9),B.a1)
r=f.ch
s=e.cx.a
s.toString
i.ex(a,8,"Focus",r,B.D,A.ky(s),B.F)
s=f.CW
r=e.ay.a
r.toString
i.ex(a,9,"Fury",s,B.N,A.i7(r),B.as)
a.k(1,10,"Food",B.j)
A.wQ(a,10,10,a.ga0()-11,f.ay,400,B.k,B.w)
i.mo(f,a,12)
i.mp(f,a,13)
i.mx(f,a,14)
a.k(1,16,"Exp",B.j)
q=A.R(e.y,!1,h)
a.k(a.ga0()-q.length-1,16,q,B.K)
a.k(1,17,"Gold",B.j)
p=A.R(e.Q,!1,h)
a.k(a.ga0()-1-p.length,17,p,B.h)
a.k(1,19,"@",g.gko())
a.k(3,19,d,B.C)
i.iR(a,20,f)
d=g.w
d===$&&A.c()
o=d.d
B.a.dq(o,new A.ra(f))
n=0
for(;;){if(!(n<10&&n<o.length))break
m=21+n*2
if(m>=a.gX()-2)break
if(!(n<o.length))return A.b(o,n)
l=o[n]
k=l.Q.b
if(g.gd4()===l)k=new A.Y(k.a,k.c,k.b)
j=l.Q.a.a
if(j.length>a.ga0()-4)j=B.i.aM(j,0,a.ga0()-4)
a.an(1,m,k)
a.k(3,m,j,g.gd4()===l?B.h:B.C)
i.iR(a,m+1,l);++n}},
mt(a,b,c){var s,r={}
r.a=1
r=new A.r8(r,b,c)
s=a.Q
r.$1(s.ay)
r.$1(s.ch)
r.$1(s.CW)
r.$1(s.cx)},
mx(a,b,c){var s,r=a.eW(null),q=A.a(r.slice(0),A.N(r))
b.k(1,c,q.length>1?"Weapons":"Weapon",B.j)
r=A.N(q)
s=new A.au(q,r.i("q(1)").a(new A.r9()),r.i("au<1,q>")).aG(0,"+")
b.k(b.ga0()-s.length-1,c,s,B.N)},
mp(a,b,c){var s,r,q,p
for(s=a.ghp(),r=s.$ti,s=new A.ak(s.a(),r.i("ak<1>")),r=r.c,q=0;s.q();){p=s.b
q+=(p==null?r.a(p):p).a}this.iU(b,c,"Dodge",""+q+"%",B.a0)},
mo(a,b,c){var s,r,q,p,o,n,m
for(s=$.fM(),r=10,q=0;q<12;++q){p=s[q]
o=a.hM(p)
n=a.fj(p)
if((n.a>0?o+n.b:o)>0){m=$.w0().m(0,p)
m.toString
b.k(r,c,m,A.el(p));++r}}this.iU(b,c,"Armor"," "+B.e.N(100-A.yk(a.Q.gdL())*100)+"%",B.n)},
ex(a,b,c,d,e,f,g){var s,r,q
a.k(1,b,c,B.j)
s=a.ga0()-1
if(f!=null){r=B.c.t(f)
s-=r.length
a.k(s,b,r,g)
s-=3
a.k(s,b," / ",g)}q=J.ew(d)
a.k(s-q.length,b,q,e)},
iU(a,b,c,d,e){return this.ex(a,b,c,d,e,null,null)},
iR(a,b,c){var s,r,q,p,o,n,m,l={}
l.a=3
s=new A.r7(l,a,b)
r=c.f
if(r.a>0){q=r.b
A:{if(1===q){r=B.k
break A}if(2===q){r=B.h
break A}r=B.E
break A}s.$2("S",r)}r=c.e.a
if(r>0){B:{if(1===r){r=B.d5
break B}if(2===r){r=B.a0
break B}r=B.K
break B}s.$2("F",r)}if(c.r.a>0)s.$2("V",B.u)
for(r=$.fM(),p=0;p<12;++p){o=r[p]
if(c.fj(o).a>0){n=$.w0().m(0,o)
n.toString
s.$3(n,B.z,A.el(o))}}r=c instanceof A.ad
if(r&&c.at instanceof A.cH)s.$2("!",B.I)
if(r&&c.at instanceof A.cp)s.$2("z",B.F)
n=c.w
if(n.a>0){m=n.b
C:{if(1===m){n=B.B
break C}if(2===m){n=B.n
break C}n=B.ag
break C}s.$2("P",n)}if(c.c.a>0)s.$2("C",B.D)
if(c.b.a>0)s.$2("B",B.l)
if(c.d.a>0)s.$2("D",B.P)
if($.nY&&r)a.k(2,b,A.R(B.e.N(c.ch*100),!1,3),B.u)
A.zI(a,10,b,a.ga0()-11,c.z,c.gbr(),B.m,B.a1)}}
A.ra.prototype={
$2(a,b){var s,r=t.B
r.a(a)
r.a(b)
r=a.y
s=this.a.y
return B.c.am(r.S(0,s).gaH(),b.y.S(0,s).gaH())},
$S:125}
A.r8.prototype={
$1(a){var s,r,q=this.b,p=this.a,o=this.c
q.k(p.a,o,B.i.aM(a.gbc().c,0,3),B.j)
s=p.a
r=a.a
r.toString
q.k(s,o+1,A.R(r,!1,2),B.d)
p.a=p.a+B.c.A(q.ga0()-6,3)},
$S:126}
A.r9.prototype={
$1(a){return B.e.t(B.e.N(t._.a(a).gd2()*100)/100)},
$S:127}
A.r7.prototype={
$3(a,b,c){var s=this.a,r=s.a
if(r>8)return
this.b.cw(r,this.c,a,b,c);++s.a},
$2(a,b){return this.$3(a,b,null)},
$S:128}
A.rh.prototype={
d7(a,b,c,d){var s=this.a.a
this.iT(a,b+s.a,c+s.b,d)},
iT(a,b,c,d){var s=this.r.a,r=this.w
a.an(b-s.a+r.a,c-s.b+r.b,d)},
aK(a){var s,r,q,p,o,n,m,l,k=this;++k.f
s=a instanceof A.fa
if(s){r=a.a
q=A.b7(t.N)
for(p=r.length,o=k.c,n=0;n<r.length;r.length===p||(0,A.o)(r),++n){m=r[n]
A.C5(o,m)
l=A.BW(m)
if(l!=null)q.j(0,l)}q.ae(0,A.Ch())}p=k.c
o=p.length
B.a.hT(p,new A.ro(k))
return s||k.e||o!==0||p.length!==0||k.b.b.y.d.a>0},
ea(b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this
b6.nB(b7.c)
s=b6.d
B.a.aP(s)
b6.e=!1
r=b6.b
q=r.b
p=q.y
for(o=A.ac(b6.r),n=p.d,m=t.w,l=t.p0,k=t.dW,j=t.ev;o.q();){i=o.b
h=o.c
g=new A.e(i,h)
f=q.x
f===$&&A.c()
e=f.f
e.l(i,h)
d=e.a
e=h*e.b.b.a+i
if(!(e>=0&&e<d.length))return A.b(d,e)
e=d[e]
c=e.r
if(c){b=b6.o6(g,e)
a=b.a
a0=b.b
a1=b.c
a2=f.r.m(0,g)
if(a2==null)a2=A.bq(B.G,null)
a3=a2.gaq(0)
if(!a3){a4=a2.gL(0)
if(!a4.q())A.a_(A.cu())
a5=a4.gH().a.b
a=a5.a
a0=a5.b}}else{a=null
a0=B.z
a1=B.z
a3=!1}if(!e.b&&e.d+e.e>e.c&&e.x!==0){d=e.w
if(d===$.b9()){d=$.n()
k.a(B.aR)
a6=B.aR.length
d=d.a
a7=d.a5(a6)
if(!(a7>=0&&a7<a6))return A.b(B.aR,a7)
a=B.aR[a7]
l.a(B.aU)
a6=B.aU.length
d=d.a5(a6)
if(!(d>=0&&d<a6))return A.b(B.aU,d)
a8=B.aU[d]
a0=a8.a
a1=a8.b
b6.e=!0
a.toString
B.a.T($.j0,A.a([i,h,a,"rgb("+a0.a+", "+a0.b+", "+a0.c+")"],m))}else if(d===$.bK())a1=a1.bl(B.A,0.1+e.x/255*0.9)}d=f.w
d.l(i,h)
a7=d.a
d=h*d.b.b.a+i
if(!(d>=0&&d<a7.length))return A.b(a7,d)
d=a7[d]
if(d!=null)a9=!e.b&&e.d+e.e>e.c||g.Y(0,p.y)||$.nX||q.cn(d)
else a9=!1
if(a9){b0=d.geQ()
if(b0 instanceof A.Y){a=b0.a
a0=b0.b}else{a0=r.gko()
a=64}if(r.gd4()===d){a1=a0
a0=B.t
c=!1}if(d instanceof A.ad)B.a.j(s,d)
a3=!1}a7=n.a
if(a7>0){b1=Math.min(90,a7*8)
a7=$.n()
a7=a7.a
if(a7.a5(100)<b1){a=a7.a5(100)<b1?a:42
j.a(B.aT)
a6=B.aT.length
a7=a7.a5(a6)
if(!(a7>=0&&a7<a6))return A.b(B.aT,a7)
a0=B.aT[a7]}a3=!1
c=!1}a7=new A.rn()
b2=a7.$2(a0,B.bR)
b3=a7.$2(a1,B.d2)
if(!e.b&&e.d+e.e>e.c)a7=a3||c
else a7=!1
if(a7){e=new A.rk(e)
if(a3)a0=e.$2(a0,b2)
if(c)a1=e.$2(a1,b3)}else{if(a3)a0=b2
if(c)a1=b3}if($.uZ){b4=(16-f.geL().j2(g))/16
b4*=b4
if(b4>0)a1=a1.bl(B.n,b4)}if($.nY&&d instanceof A.ad)a1=B.cZ.bl(B.bQ,d.ch)
if(a!=null){f=b6.r.a
e=b6.w
b7.an(i-f.a+e.a,h-f.b+e.b,new A.Y(a,a0,a1))}}for(s=b6.c,o=s.length,b5=0;b5<s.length;s.length===o||(0,A.o)(s),++b5)s[b5].bu(q,new A.rl(b6,b7))
if(A.yz()){s=$.yx
o=b6.a
o.toString
A.CM(q,s===r,o,new A.rm(p,q),r.gd4())}else{B.a.aP($.j0)
A.uv()}},
o6(a,b){var s,r,q,p=b.a.d
if(p instanceof A.Y)return p
t.af.a(p)
s=p.length
r=A.ym(a.a,a.b)
q=B.c.ab(B.c.A(this.f,8)+r,s*2-2)
s=p.length
if(q>=s)q=s-(q-s)-1
this.e=!0
if(!(q>=0&&q<s))return A.b(p,q)
return p[q]},
nB(a){var s,r,q,p,o,n,m,l=this,k=l.b.b,j=l.r,i=j.gbT(),h=new A.ri(k,a),g=a.a,f=k.x
f===$&&A.c()
s=f.f.b.b.a
if(g>=s){r=B.e.A(Math.max(0,g-s),2)
i=0}else{j=j.b.a
if(j===0||j!==g)i=h.$0()
else{q=k.y.y.gn()-l.r.gbT()
if(q<8||q>g-8)i=h.$0()}r=0}j=l.r
p=j.gbY()
h=new A.rj(k,a)
s=a.b
o=f.f.b.b.b
if(s>=o){n=B.e.A(Math.max(0,s-o),2)
p=0}else{j=j.b.b
if(j===0||j!==s)p=h.$0()
else{m=k.y.y.gp()-l.r.gbY()
if(m<8||m>s-8)p=h.$0()}n=0}j=f.f.b.b
l.r=new A.a0(new A.e(i,p),new A.e(Math.min(g,j.a),Math.min(s,j.b)))
l.w=new A.e(r,n)}}
A.ro.prototype={
$1(a){return!t.ox.a(a).aK(this.a.b.b)},
$S:129}
A.rn.prototype={
$2(a,b){return new A.F(B.c.A(a.a*b.a,255),B.c.A(a.b*b.b,255),B.c.A(a.c*b.c,255))},
$S:16}
A.rk.prototype={
$2(a,b){var s=this.a,r=s.d-s.c
if(r<64)a=a.bl(b,A.w(r,0,64,0.5,0))
else if(r>128)a=a.b_(0,B.u,A.w(r,128,255,0,0.2))
s=s.e
return s>0?a.b_(0,B.bP,A.w(s,0,255,0.05,0.1)):a},
$S:16}
A.rl.prototype={
$3(a,b,c){var s
this.a.iT(this.b,a,b,c)
s=c.b
B.a.T($.j0,A.a([a,b,c.a,"rgb("+s.a+", "+s.b+", "+s.c+")"],t.w))},
$S:48}
A.rm.prototype={
$2(a,b){return!b.b&&b.d+b.e>b.c||a.y.Y(0,this.a.y)||$.nX||this.b.cn(a)},
$S:131}
A.ri.prototype={
$0(){var s=this.a,r=s.y.y.gn(),q=this.b.a,p=B.c.A(q,2)
s=s.x
s===$&&A.c()
return B.c.M(r-p,0,s.f.b.b.a-q)},
$S:2}
A.rj.prototype={
$0(){var s=this.a,r=s.y.y.gp(),q=this.b.b,p=B.c.A(q,2)
s=s.x
s===$&&A.c()
return B.c.M(r-p,0,s.f.b.b.b-q)},
$S:2}
A.h3.prototype={
gfb(){return A.a([this.c],t.s)},
gcK(){return B.cn},
a8(a){if(a===B.H){this.a.aa()
return!0}return!1},
ac(a,b,c){if(c||b)return!1
switch(a){case 78:this.a.aa()
break
case 89:this.a.aQ(this.d)
break}return!0}}
A.hc.prototype={
ga0(){return 38},
gX(){return 19},
gcK(){var s=t.N
return A.B(["OK","Return to town"],s,s)},
lJ(a,b,c){var s,r,q,p,o,n,m=this.d
c.a=5
s=new A.ow(c,this)
r=m.y.Q
q=this.c
s.$3("Gold",B.h,r.Q-q.Q)
s.$3("Experience",B.n,r.y-q.y);++c.a
p=r.ay.a
p.toString
o=q.ay.a
o.toString
s.$3("Strength",B.D,p-o)
o=r.ch.a
o.toString
p=q.ch.a
p.toString
s.$3("Agility",B.D,o-p)
p=r.CW.a
p.toString
o=q.CW.a
o.toString
s.$3("Vitality",B.D,p-o)
o=r.cx.a
o.toString
p=q.cx.a
p.toString
s.$3("Intellect",B.D,o-p)
c.a+=3
n=r.ax.gjS()-q.ax.gjS()
m=m.x
m===$&&A.c()
m=m.b
q=A.N(m)
s.$4$total("Monsters",B.m,n,n+new A.ap(m,q.i("z(1)").a(new A.ox()),q.i("ap<1>")).gI(0))},
gb4(){return!0},
a8(a){var s
if(a!==B.a2)return!1
s=this.d
s.y.Q.spx(Math.max(this.c.as,s.w))
this.a.aa()
return!0},
bx(){var s,r,q
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q)if(s[q].bx())this.J()},
hV(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
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
A.ow.prototype={
$4$total(a,b,c,d){B.a.j(this.b.e,new A.m7(this.a.a++,a,c,b,d))},
$3(a,b,c){return this.$4$total(a,b,c,null)},
$S:132}
A.ox.prototype={
$1(a){return!(t.f0.a(a) instanceof A.at)},
$S:133}
A.m7.prototype={
bx(){var s=this,r=s.f,q=s.c
if(r>=q)return!1
if(q>200){r+=$.n().pL(0,q/200)
s.f=r
if(r>q)s.f=q}else s.f=r+1
return!0}}
A.hf.prototype={
gfb(){if(this.c)return B.hP
return B.hV},
gcK(){return B.cn},
a8(a){if(a===B.H){this.a.aQ(!1)
return!0}return!1},
ac(a,b,c){if(c||b)return!1
switch(a){case 78:this.a.aQ(!1)
break
case 89:this.a.aQ(!0)
break}return!0},
bx(){return!1}}
A.lh.prototype={
gb4(){return!0},
ga0(){return null},
gX(){return null},
gfb(){return null},
ai(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
A.bA(a,h.gcK(),null)
s=h.gfb()
r=s!=null
if(r){q=B.a.av(s,0,new A.qC(),t.S)
p=s.length}else{q=0
p=0}o=h.ga0()
if(o==null)o=q+2
n=h.gX()
if(n==null)n=p+2
m=B.c.A(a.gX()-n,3)
l=B.c.A(a.ga0()-o,2)
A.cM(a,l-1,m-1,o+2,n+2,B.h,"\u2554","\u2550","\u2557","\u2551","\u255a","\u2550","\u255d")
a=new A.aZ(new A.e(o,n),l,m,a)
a.c7(0,0,a.ga0(),a.gX())
if(r){k=B.c.A(o-B.a.av(s,0,new A.qD(),t.S),2)
for(r=s.length,j=1,i=0;i<s.length;s.length===r||(0,A.o)(s),++i){a.k(k,j,s[i],B.d);++j}}h.hV(a)},
hV(a){}}
A.qC.prototype={
$2(a,b){return Math.max(A.r(a),A.a3(b).length)},
$S:21}
A.qD.prototype={
$2(a,b){return Math.max(A.r(a),A.a3(b).length)},
$S:21}
A.i_.prototype={
ga0(){return 42},
gX(){return 25},
gfb(){return B.hX},
gcK(){return B.ik},
a8(a){var s=this
switch(a){case B.a9:s.es(s.e-1)
return!0
case B.ad:s.es(s.e+1)
return!0
case B.X:s.es(s.e-10)
return!0
case B.Y:s.es(s.e+10)
return!0
case B.a2:s.a.aQ(s.e)
return!0
case B.H:s.a.aa()
return!0}return!1},
hV(a){var s,r,q,p,o,n
for(s=1;s<=100;++s){r=s-1
q=B.c.ab(r,10)
p=B.c.A(r,10)*2
if(s===this.e){r=q*4
o=p+5
a.an(r,o,new A.Y(9658,B.h,B.z))
a.an(r+4,o,new A.Y(9668,B.h,B.z))
n=B.h}else n=B.C
a.k(q*4+1,p+5,A.R(s,!1,3),n)}},
es(a){if(a<1)return
if(a>100)return
this.e=a
this.J()}}
A.af.prototype={}
A.hY.prototype={
gb4(){return!0},
jb(a){var s=this,r=s.d,q=s.c,p=q.length
do r=B.c.ab(r+a+p,p)
while(q[r].c==null)
s.d=r
s.J()},
a8(a){var s,r,q=this,p=$.no
if(p>=65&&p<=90)return!1
A:{if(B.X===a){q.jb(-1)
break A}if(B.Y===a){q.jb(1)
break A}if(B.a2===a||B.ad===a){p=q.a
p.toString
s=q.c
r=q.d
if(!(r>=0&&r<s.length))return A.b(s,r)
p.aQ(s[r].c)
break A}if(B.H===a||B.a9===a){q.a.aa()
break A}return!1}return!0},
ac(a,b,c){var s,r,q,p,o,n,m=this,l=null
if(b||a===16)return!1
if(96===a||110===a){m.a.aa()
return!0}if(107===a){s=m.a
s.toString
r=m.c
q=m.d
if(!(q>=0&&q<r.length))return A.b(r,q)
s.aQ(r[q].c)
return!0}for(s=m.c,r=s.length,p=0;p<r;++p){o=s[p]
q=o.c
if(q!=null&&o.d===a&&o.e===c){s=m.a
s.toString
if(0>=$.ae.length)return A.b($.ae,-1)
$.ae.pop()
r=v.G
n=r.rvipMap
if(n!=null)A.a2(n).shown=!1
if("rvipDraw" in r)A.kG(r,"rvipDraw",l,l,l,l)
s.fG(q)
s.cF()
A.nj()
return!0}}return!1},
ai(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c,e=t.S,d=B.a.av(f,0,new A.r3(),e),c=A.a([],t.s)
for(s=f.length,r=0;r<f.length;f.length===s||(0,A.o)(f),++r){q=f[r]
p=q.b
c.push(q.c==null?p:B.i.ff(q.a,d)+" "+p)}s=g.b
o=B.a.av(c,s.length+2,new A.r4(),e)
n=Math.min(c.length,a.gX()-2)
e=g.d
p=g.e
if(e<p){g.e=e
p=e}if(e>=p+n)g.e=e-n+1
m=Math.max(0,B.c.A(a.ga0()-o-2,2))
l=Math.max(0,B.c.A(a.gX()-n-2,3))
A.bl(a,null,n+2,s,!0,o+2,m,l)
for(e=m+1,s=l+1,k=0;k<n;++k){j=k+g.e
if(!(j>=0&&j<f.length))return A.b(f,j)
if(f[j].c==null)i=B.f
else i=j===g.d?B.h:B.C
if(!(j<c.length))return A.b(c,j)
p=B.i.ff(c[j],o)
h=j===g.d?B.t:null
a.cw(e,s+k,p,i,h)}}}
A.r2.prototype={
$1(a){return t.m7.a(a).c!=null},
$S:134}
A.r3.prototype={
$2(a,b){return Math.max(A.r(a),t.m7.a(b).a.length)},
$S:135}
A.r4.prototype={
$2(a,b){return Math.max(A.r(a),A.a3(b).length)},
$S:21}
A.uz.prototype={
$2(a,b){var s=this.a.f
return s.b.G(0,new A.e(a,b))?A.yb(s.B(a,b).a).a:0},
$S:24}
A.uA.prototype={
$2(a,b){var s=this.a.f
return!s.b.G(0,new A.e(a,b))||A.yb(s.B(a,b).a).b!==0},
$S:136}
A.uy.prototype={
$1(a){return A.vI(A.dc(a))},
$S:137}
A.hX.prototype={
an(a,b,c){var s=this
if(a<0||b<0||a>=s.c||b>=s.d)return
B.a.h(s.e,b*s.c+a,c)},
pn(a,b,c){var s=this
if(c==null||!A.yz())return
if(a<0||b<0||a>=s.c||b>=s.d)return
s.f.h(0,b*s.c+a,c)},
l6(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=A.a([],t.s)
if(a8){s=a6.c
r=a6.d
for(q=a6.e,p=q.length,o=s,n=0;n<p;++n){m=q[n]
if(m.a===32){m=m.c
m=m.a===0&&m.b===0&&m.c===0}else m=!1
if(m)continue
l=B.c.ab(n,s)
o=o<l?o:l
k=B.c.c_(n,s)
r=r<k?r:k}s=o}else{s=0
r=0}for(q=a6.d,p=a6.e,j=a6.c,m=p.length,i=a6.f,h=r;h<q;++h){g={}
f=h*j
e=j
for(;;){d=!1
if(e>0){c=f+e-1
if(!(c>=0&&c<m))return A.b(p,c)
c=p[c]
if(c.a===32){d=c.c
d=d.a===0&&d.b===0&&d.c===0}}if(!d)break;--e}b=new A.cZ("")
g.a=null
a=new A.cZ("")
a0=new A.r1(g,a,b)
for(a1=s;a1<e;++a1){d=f+a1
if(!(d>=0&&d<m))return A.b(p,d)
a2=p[d]
a3=i.m(0,d)
if(a3!=null){a0.$0()
g.a=null
b.a+='<span class="ti" style="background-position:-'+B.c.ab(a3,16)+"em -"+(a3/16|0)+'em"> </span>'
continue}d=a2.b
a4="color:"+("rgb("+d.a+", "+d.b+", "+d.c+")")
d=a2.c
if(!(d.a===0&&d.b===0&&d.c===0))a4+=";background:"+("rgb("+d.a+", "+d.b+", "+d.c+")")
if(a4!==g.a){a0.$0()
g.a=a4}a5=A.aU(a2.a)
A:{if("<"===a5){d="&lt;"
break A}if(">"===a5){d="&gt;"
break A}if("&"===a5){d="&amp;"
break A}d=a5
break A}a.a+=d}a0.$0()
f=b.a
B.a.j(a7,f.charCodeAt(0)==0?f:f)}for(;;){if(!(a7.length!==0&&B.a.gcp(a7).length===0))break
if(0>=a7.length)return A.b(a7,-1)
a7.pop()}if(a8)for(n=a7.length-1;n>=3;--n){q=a7.length
if(!(n<q))return A.b(a7,n)
p=!1
if(a7[n].length===0){m=n-1
if(!(m<q))return A.b(a7,m)
if(a7[m].length===0){p=n-2
if(!(p<q))return A.b(a7,p)
p=a7[p].length===0
q=p}else q=p}else q=p
if(q)B.a.cO(a7,n)}return B.a.aG(a7,"\n")},
l5(){return this.l6(!1)},
ga0(){return this.c},
gX(){return this.d}}
A.r1.prototype={
$0(){var s=this.b
if(s.a.length===0)return
this.c.a+='<span style="'+A.J(this.a.a)+'">'+s.t(0)+"</span>"
s.a=""},
$S:0}
A.uw.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k
t.bM.a(b)
s=B.a.av(b,0,new A.ux(),t.S)
r=A.vf(A.xT(a),s)
for(q=b.length,p=r.c,o=this.a.Q,n=0,m=0;m<b.length;b.length===q||(0,A.o)(b),++m){l=b[m]
k=l.b
A.us(r,l.a,A.yp(),!1,!1,null,A.yq(),null,!1,k,0,o,!1,!1,n,p)
n+=k+2}A.c_(v.G,"rvipPane",a,r.l5(),t.X)},
$S:138}
A.ux.prototype={
$2(a,b){return A.r(a)+t.kL.a(b).b+2},
$S:139}
A.rw.prototype={
ah(a,b){B.a.hT(this.b,new A.rG(b))
this.bj()},
pJ(a){var s=this.b
B.a.h(s,B.a.hE(s,new A.rH(a)),a)
this.bj()},
nh(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=v.G
if(A.a3(A.a2(A.a2(c4.window).location).search)==="?clear"){c3.bj()
return}c4=A.bV(c4.rvipStore)
if(c4==null)c4=null
else{c4=c4.heroes
c4=c4==null?null:A.u0(c4)}A.vs(c4)
if(c4==null)return
a9=t.ea
for(b0=t.gs,c4=J.aw(b0.a(a9.a(B.b2.oZ(c4)).m(0,"heroes"))),b1=c3.b,b2=t.dZ,b3=t.c3,b4=t.D,b5=t.c;c4.q();){s=c4.gH()
try{r=a9.a(s)
q=A.a3(J.b4(r,"name"))
p=A.a3(s.m(0,"race"))
o=B.a.f2($.fN(),new A.rD(p))
n=null
if(J.b4(r,"class")==null)n=$.es()[0]
else{m=A.a3(J.b4(r,"class"))
n=B.a.f2($.es(),new A.rE(m))}l=J.a9(J.b4(r,"death"),"permanent")
k=c3.dD(b0.a(J.b4(r,"inventory")))
j=A.bq(B.v,k)
i=new A.eM(A.an(9,null,!1,b5))
for(b6=c3.dD(b0.a(J.b4(r,"equipment"))),b7=b6.length,b8=0;b8<b6.length;b6.length===b7||(0,A.o)(b6),++b8){h=b6[b8]
i.ke(h)}g=c3.dD(b0.a(J.b4(r,"home")))
f=A.bq(B.cc,g)
e=c3.dD(b0.a(J.b4(r,"crucible")))
d=A.bq(B.cb,e)
c=A.C(b3,b4)
if(r.ak("shops")){b=a9.a(J.b4(r,"shops"))
$.i2.ae(0,new A.rF(c3,b,c))}j.bo()
f.bo()
d.bo()
a=A.r(J.b4(r,"experience"))
a0=c3.nl(b2.a(J.b4(r,"skills")))
a1=c3.nj(J.b4(r,"log"))
a2=c3.nk(a9.a(J.b4(r,"lore")))
a3=A.r(J.b4(r,"gold"))
b9=A.xR(J.b4(r,"maxDepth"))
a4=b9==null?0:b9
a5=a9.a(J.b4(r,"stats"))
b6=n
b7=A.r(J.b4(a5,"strength"))
c0=A.r(J.b4(a5,"agility"))
c1=A.r(J.b4(a5,"vitality"))
a6=A.x_(q,o,b6,l,j,i,f,d,c,a,a0,a1,a2,a3,a4,c0,A.r(J.b4(a5,"intellect")),b7,c1)
B.a.j(b1,a6)}catch(c2){a7=A.dI(c2)
a8=A.en(c2)
A.up("Could not load hero. Data:")
A.up(B.b2.kd(s))
A.up("Error:\n"+A.J(a7)+"\n"+A.J(a8))}}},
dD(a){var s,r,q,p=A.a([],t.I)
for(s=J.aw(a),r=t.ea;s.q();){q=this.ni(r.a(s.gH()))
if(q!=null)B.a.j(p,q)}return p},
ni(a){var s,r,q
t.ea.a(a)
s=A.a3(a.m(0,"type"))
r=$.bo().cb(s)
if(r==null){A.vK("Couldn't find item type \""+A.J(a.m(0,"type"))+'", discarding item.')
return null}q=a.ak("count")?A.r(a.m(0,"count")):1
return new A.L(r,this.fZ(a.m(0,"prefix")),this.fZ(a.m(0,"suffix")),this.fZ(a.m(0,"intrinsic")),q)},
fZ(a){var s,r,q,p,o,n,m,l="parameter"
A:{s=null
r=!1
q=null
p=!1
if(t.av.b(a)){o=a.m(0,"id")
if(o==null)n=a.ak("id")
else n=!0
if(n){r=typeof o=="string"
if(r){s=a.m(0,l)
if(s==null)n=a.ak(l)
else n=!0
if(n)p=A.fC(s)
q=o}}}if(p){m=A.r(r?s:a.m(0,l))
p=new A.cm(A.wD(A.a3(q)),m)
break A}p=null
break A}return p},
nl(a){var s,r,q,p,o,n
t.dZ.a(a)
s=t.M
r=t.S
q=A.C(s,r)
if(a!=null)for(p=a.gaT(),p=p.gL(p);p.q();){o=p.gH()
n=$.w1().m(0,o)
if(n==null)A.a_(A.aF("Unknown skill '"+o+"'.",null))
q.h(0,n,A.r(a.m(0,o)))}return new A.i3(q,A.C(s,r))},
nj(a){var s,r,q,p=A.a([],t.kU)
if(t.gs.b(a))for(s=J.aw(a),r=t.ea;s.q();){q=r.a(s.gH())
B.a.j(p,new A.hB(B.a.f2(B.hU,new A.rx(q)),A.a3(q.m(0,"text")),A.r(q.m(0,"count"))))}return new A.kP(p)},
nk(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=t.dZ
d.a(a)
s=t.P
r=t.S
q=A.C(s,r)
p=A.C(s,r)
s=t.q
o=A.C(s,r)
n=A.C(t.R,r)
m=A.b7(s)
l=A.C(s,r)
k=d.a(a.m(0,"seen"))
if(k!=null)k.ae(0,new A.ry(e,q))
j=d.a(a.m(0,"slain"))
if(j!=null)j.ae(0,new A.rz(e,p))
i=d.a(a.m(0,"foundItems"))
if(i!=null)i.ae(0,new A.rA(e,o))
h=d.a(a.m(0,"foundAffixes"))
if(h!=null)h.ae(0,new A.rB(e,n))
g=d.a(a.m(0,"usedItems"))
if(g!=null)g.ae(0,new A.rC(e,l))
f=t.lH.a(a.m(0,"createdArtifacts"))
if(f!=null)for(d=J.aw(f);d.q();){s=A.a3(d.gH())
s=$.bo().cb(s)
s.toString
m.j(0,s)}return new A.hy(q,p,o,n,m,l)},
bj(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=A.a([],t.ic)
for(s=a2.b,r=s.length,q=t.N,p=t.K,o=t.S,n=t.gs,m=0;m<s.length;s.length===r||(0,A.o)(s),++m){l=s[m]
k=A.B(["strength",l.ay.b,"agility",l.ch.b,"vitality",l.CW.b,"intellect",l.cx.b],q,o)
j=l.d?"permanent":"dungeon"
i=a2.dH(l.e)
h=a2.dH(l.f)
g=a2.dH(l.r)
f=a2.dH(l.w)
e=A.C(q,n)
for(d=l.x,d=new A.e1(d,d.r,d.e,A.y(d).i("e1<1,2>"));d.q();){c=d.d
e.h(0,c.a.b,a2.dH(c.b))}d=l.y
c=A.C(q,o)
for(b=l.z.a,a=new A.c9(b,b.r,b.e,A.y(b).i("c9<1>"));a.q();){a0=a.d
a1=a0.gO()
a0=b.m(0,a0)
c.h(0,a1,a0==null?0:a0)}a3.push(A.B(["name",l.a,"race",l.b.a,"stats",k,"class",l.c.a,"death",j,"inventory",i,"equipment",h,"home",g,"crucible",f,"shops",e,"experience",d,"skills",c,"log",a2.nR(l.at),"lore",a2.nS(l.ax),"gold",l.Q,"maxDepth",l.as],q,p))}A.c_(v.G,"rvipPut","heroes",B.b2.kd(A.B(["heroes",a3],q,t.ew)),t.X)
A.vK("Saved.")},
nR(a){var s,r,q,p,o,n,m=[]
for(s=a.a,r=s.length,q=t.N,p=t.z,o=0;o<s.length;s.length===r||(0,A.o)(s),++o){n=s[o]
m.push(A.B(["type",n.a.b,"text",n.b,"count",n.c],q,p))}return m},
nS(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=t.z,g=A.C(i,h),f=A.C(i,h),e=A.C(i,h),d=A.C(i,h),c=A.C(i,h),b=[]
for(s=$.ck().gc3(),r=A.y(s),s=new A.bs(J.aw(s.a),s.b,r.i("bs<1,2>")),q=a.b,p=a.a,r=r.y[1];s.q();){o=s.a
if(o==null)o=r.a(o)
n=p.m(0,o)
if(n==null)n=0
if(n!==0)g.h(0,o.a.a,n)
n=q.m(0,o)
if(n==null)n=0
if(n!==0)f.h(0,o.a.a,n)}for(s=$.bo().gc3(),r=A.y(s),s=new A.bs(J.aw(s.a),s.b,r.i("bs<1,2>")),q=a.f,p=a.c,r=r.y[1];s.q();){o=s.a
if(o==null)o=r.a(o)
m=p.m(0,o)
if(m==null)m=0
if(m!==0)e.h(0,o.a.a7(1).a,m)
l=q.m(0,o)
if(l==null)l=0
if(l!==0)c.h(0,o.a.a7(1).a,l)}s=A.a6($.dJ().gc3(),t.R)
B.a.T(s,$.dK().gc3())
r=s.length
q=a.d
k=0
for(;k<s.length;s.length===r||(0,A.o)(s),++k){j=s[k]
m=q.m(0,j)
if(m==null)m=0
if(m!==0)d.h(0,j.a,m)}for(s=$.bo().gc3(),r=A.y(s),s=new A.bs(J.aw(s.a),s.b,r.i("bs<1,2>")),r=r.y[1],q=a.e;s.q();){p=s.a
if(p==null)p=r.a(p)
if(p.dx&&q.G(0,p))b.push(p.a.a7(1).a)}return A.B(["seen",g,"slain",f,"foundItems",e,"foundAffixes",d,"usedItems",c,"createdArtifacts",b],i,h)},
dH(a){var s,r,q,p,o,n,m,l,k,j
t.E.a(a)
s=[]
for(r=a.gL(a),q=t.N,p=t.K,o=t.z;r.q();){n=r.gH()
m=A.C(q,p)
m.h(0,"type",n.a.a.a7(1).a)
m.h(0,"count",n.f)
l=n.b
if(l!=null)m.h(0,"prefix",A.B(["id",l.a.a,"parameter",l.b],q,o))
k=n.c
if(k!=null)m.h(0,"suffix",A.B(["id",k.a.a,"parameter",k.b],q,o))
j=n.d
if(j!=null)m.h(0,"intrinsic",A.B(["id",j.a.a,"parameter",j.b],q,o))
s.push(m)}return s}}
A.rG.prototype={
$1(a){return t.er.a(a).a===this.a.a},
$S:25}
A.rH.prototype={
$1(a){return t.er.a(a).a===this.a.a},
$S:25}
A.rD.prototype={
$1(a){return t.ho.a(a).a===this.a},
$S:28}
A.rE.prototype={
$1(a){return t.lJ.a(a).a===this.a},
$S:140}
A.rF.prototype={
$2(a,b){var s,r
A.a3(a)
t.c3.a(b)
s=t.lH.a(this.b.m(0,a))
r=this.c
if(s!=null)r.h(0,b,A.bq(new A.c7(b.b,26),t.E.a(this.a.dD(s))))
else{A.vK("No data for "+a+", so regenerating.")
r.h(0,b,b.oX())}},
$S:141}
A.rx.prototype={
$1(a){return t.aI.a(a).b===A.a3(this.a.m(0,"type"))},
$S:142}
A.ry.prototype={
$2(a,b){var s
A.a3(a)
s=$.ck().cb(a)
if(s!=null)this.b.h(0,s,A.r(b))},
$S:12}
A.rz.prototype={
$2(a,b){var s
A.a3(a)
s=$.ck().cb(a)
if(s!=null)this.b.h(0,s,A.r(b))},
$S:12}
A.rA.prototype={
$2(a,b){var s
A.a3(a)
s=$.bo().cb(a)
if(s!=null)this.b.h(0,s,A.r(b))},
$S:12}
A.rB.prototype={
$2(a,b){this.b.h(0,A.wD(A.a3(a)),A.r(b))},
$S:12}
A.rC.prototype={
$2(a,b){var s
A.a3(a)
s=$.bo().cb(a)
if(s!=null)this.b.h(0,s,A.r(b))},
$S:12}
A.oe.prototype={
$2(a,b){var s,r
A.a3(a)
A.a3(b)
s=this.a
r=s.a
if(r>0)r=s.a=r+2
s.a=r+(a.length+b.length+3)},
$S:30}
A.of.prototype={
$2(a,b){var s,r,q
A.a3(a)
A.a3(b)
s=this.a
if(!s.c){r=this.b
r.k(s.b,r.gX()-1,", ",B.d)
s.b+=2}r=this.b
r.k(s.b,r.gX()-1,"[",B.l)
r.k(++s.b,r.gX()-1,a,B.h)
q=s.b+a.length
s.b=q
r.k(q,r.gX()-1,"] ",B.l)
r.k(s.b+=2,r.gX()-1,b,B.C)
s.b=s.b+b.length
s.c=!1},
$S:30}
A.lL.prototype={
gcl(){var s,r,q=this,p=t.N
p=A.C(p,p)
p.h(0,"\u2195","Select row")
s=q.e
r=s.length
if(r!==0)p.h(0,"S","Sort by "+s[B.c.ab(q.z+1,r)].a)
s=q.f
r=s.length
if(r!==0)p.h(0,"F","Show "+s[B.c.ab(q.Q+1,r)].a)
return p},
a8(a){var s=this
switch(a){case B.X:s.eM(-1)
return!0
case B.Y:s.eM(1)
return!0
case B.ap:s.eM(-(s.w-1))
return!0
case B.aq:s.eM(s.w-1)
return!0}return!1},
ac(a,b,c){var s,r,q,p,o=this
if(b)return!1
s=83===a
if(s&&!c&&o.e.length!==0){o.z=B.c.ab(o.z+1,o.e.length)
o.dF()
return!0}if(s&&c&&o.e.length!==0){r=o.z
q=o.e.length
o.z=B.c.ab(r+q-1,q)
o.dF()
return!0}p=70===a
if(p&&!c&&o.f.length!==0){o.Q=B.c.ab(o.Q+1,o.f.length)
o.dF()
return!0}if(p&&c&&o.f.length!==0){r=o.Q
q=o.f.length
o.Q=B.c.ab(r+q-1,q)
o.dF()
return!0}return!1},
kV(a,b){this.$ti.i("k<ax<1>>()").a(a)
this.jl(new A.rP(this,t.b8.a(b),a))},
kU(a){return this.kV(a,null)},
ht(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a2.c
if(!a1.Y(0,a0.r))a0.nN(a1)
for(s=a0.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
o=p.e
n=p.a
m=p.b.kE(p.f,n.length)
l=p.d
if(l==null)l=B.f
a2.k(o+m,0,n,l)}r=A.a([],t.s)
o=a0.e
n=o.length
if(n!==0){m=a0.z
if(!(m>=0&&m<n))return A.b(o,m)
r.push("ordered by "+o[m].a)}o=a0.f
n=o.length
if(n!==0){m=a0.Q
if(!(m>=0&&m<n))return A.b(o,m)
r.push("show "+o[m].a)}if(r.length!==0){k="("+B.a.aG(r,", ")+")"
a2.k(B.a.gaB(s).e+B.a.gaB(s).f-k.length,0,k,B.l)}a0.iS(a2,1,B.l)
for(r=a0.d,o=!r,n=a0.c,j=0;m=a0.w,j<m;++j){i=j*2+2
h=a0.x+j
m=n.length
if(h>=m)continue
if(!(h>=0))return A.b(n,h)
g=n[h]
f=g.a
if(f!=null)a2.an(0,i,f)
if(h===a0.y)a2.k(1,i,"\u25ba",B.h)
for(m=g.c,e=0;e<m.length;++e){d=m[e]
if(!(e<s.length))return A.b(s,e)
l=s[e]
A:{c=a0.y
if(h===c){c=B.h
break A}if(!d.b){c=B.j
break A}if(e===0){c=B.C
break A}c=B.d
break A}b=l.e
A.vj(a2,d.a,l.b,c,l.f,b,i)}a=o&&h===n.length-1?B.l:B.t
a0.iS(a2,i+1,a)}if(r){s=n.length
A.wP(a2,m*2-1,a0.x,s,m,a1.a-1,2)}},
nN(a){var s,r,q,p,o,n,m,l,k,j=this
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
j.fY()},
dF(){this.jl(new A.rO(this))},
eM(a){var s=this
s.y=B.c.M(s.y+a,0,s.c.length-1)
s.fY()},
jl(a){var s,r,q,p,o,n=this
t.O.a(a)
s=n.y
r=n.c
q=r.length
if(s<q){if(!(s>=0))return A.b(r,s)
p=r[s].b}else p=null
a.$0()
n.y=0
s=r.length
if(0<s)for(o=0;o<s;++o)if(r[o].b==p){n.y=o
break}n.fY()},
fY(){var s,r=this,q=r.c,p=q.length
if(p!==0&&r.w>0){p=r.y=B.c.M(r.y,0,p-1)
p=B.c.M(r.x,p-r.w+1,p)
r.x=p
q=q.length
s=r.w
if(q>s)r.x=B.c.M(p,0,q-s)
else r.x=0}else r.x=r.y=0},
iS(a,b,c){var s,r,q,p,o
for(s=this.a,r=s.length,q=2,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
a.k(q,b,B.i.aL("\u2500",o.f),c)
q+=o.f+1}}}
A.rP.prototype={
$0(){var s,r,q=this,p=q.b
if(p!=null){s=q.a
r=s.a
B.a.aP(r)
B.a.T(r,p)
s.r=B.al}p=q.a
s=p.b
B.a.aP(s)
B.a.T(s,q.c.$0())
p.dF()},
$S:0}
A.rO.prototype={
$0(){var s,r,q,p=this.a
if(p.e.length!==0)B.a.dq(p.b,new A.rM(p))
s=p.c
B.a.aP(s)
r=p.b
if(p.f.length!==0){q=A.N(r)
B.a.T(s,new A.ap(r,q.i("z(1)").a(new A.rN(p)),q.i("ap<1>")))}else B.a.T(s,r)},
$S:0}
A.rM.prototype={
$2(a,b){var s,r,q,p=this.a,o=p.$ti,n=o.i("ax<1>")
n.a(a)
n.a(b)
n=p.e
p=p.z
if(!(p>=0&&p<n.length))return A.b(n,p)
p=o.i("D<d(1,1)>").a(n[p].b)
n=p.length
o=a.b
s=b.b
r=0
for(;r<p.length;p.length===n||(0,A.o)(p),++r){q=p[r].$2(o,s)
if(q!==0)return q}return 0},
$S(){return this.a.$ti.i("d(ax<1>,ax<1>)")}}
A.rN.prototype={
$1(a){var s,r=this.a,q=r.$ti
q.i("ax<1>").a(a)
s=r.f
r=r.Q
if(!(r>=0&&r<s.length))return A.b(s,r)
return q.i("z(1)").a(s[r].b).$1(a.b)},
$S(){return this.a.$ti.i("z(ax<1>)")}}
A.jo.prototype={
aN(){return"Align."+this.b},
kE(a,b){var s
switch(this.a){case 0:s=0
break
case 1:s=B.c.A(a-b,2)
break
case 2:s=a-b
break
default:s=null}return s}}
A.aP.prototype={}
A.ax.prototype={}
A.ab.prototype={}
A.Q.prototype={}
A.rT.prototype={
$2(a,b){return A.r(a)+t.fc.a(b).a.length},
$S:145}
A.bE.prototype={}
A.cb.prototype={}
A.ij.prototype={
gb4(){return!0},
a8(a){if(a===B.H){this.a.aa()
return!0}return!1},
ac(a,b,c){var s,r,q,p,o,n
if(c||b)return!1
for(s=this.b,r=s.length,q=0;q<r;++q){p=s[q].a
o=p[1]
n=p[3]
if(o===a){n.$0()
this.J()
return!0}}return!1},
d0(a,b){t.d.a(a)
this.d=!0},
ai(a){var s,r,q,p,o,n,m,l,k=this,j=null
for(s=k.b,r=s.length,q=0,p=0;p<r;++p)q=Math.max(q,s[p].a[2].length)
A.bl(a,j,r+2,"Wizard Menu",k.d,40,j,j)
for(r=s.length,o=0,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){n=s[p].a
m=n[0]
l=n[2];++o
a.k(1,o,m,k.d?B.h:B.j)
a.k(2,o,")",k.d?B.l:B.j)
a.k(4,o,l,k.d?B.C:B.j)}if(k.d){s=t.N
A.bA(a,A.B(["`","Exit"],s,s),j)}},
nr(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.c,b=c.x
b===$&&A.c()
for(s=b.f,r=s.b,q=A.ac(r),p=s.a,o=r.b.a,n=p.length;q.q();){m=q.b
l=q.c
s.l(m,l)
k=l*o+m
if(!(k>=0&&k<n))return A.b(p,k)
j=p[k]
i=$.V()
if((j.a.e.a&i.a)!==0){s.l(m,l)
j.fp(!0)
continue}for(j=new A.e(m,l).gbD(),i=j.length,h=0;h<i;++h){g=j[h]
if(r.G(0,g)){f=g.a
e=g.b
s.l(f,e)
f=e*o+f
if(!(f>=0&&f<n))return A.b(p,f)
f=p[f]
e=$.V()
e=(f.a.e.a&e.a)!==0
f=e}else f=!1
if(f){s.l(m,l)
p[k].fp(!0)
break}}}for(s=b.b,r=s.length,c=c.y,q=c.Q.ax,c=c.as,h=0;h<s.length;s.length===r||(0,A.o)(s),++h){d=s[h]
if(d instanceof A.ad)if(c.j(0,d))q.ia(d.Q)}b.f5(new A.t9(this))},
n2(){var s,r,q,p,o,n,m,l,k,j=this.c.x
j===$&&A.c()
for(s=j.f,r=s.b,q=A.ac(r),p=s.a,r=r.b.a,o=p.length;q.q();){n=q.b
m=q.c
s.l(n,m)
l=m*r+n
if(!(l>=0&&l<o))return A.b(p,l)
l=p[l]
k=$.V()
if((l.a.e.a&k.a)!==0){s.l(n,m)
l.f=B.c.M(l.f+255,0,192)}}j=j.gaA()
j.f=!0
j.dh()},
mz(){this.d=!1
this.a.a3(new A.nh(this.c))},
os(){this.d=!1
this.a.a3(new A.ni(this.c))},
mT(){var s=this.c.y,r=s.Q,q=1e4+B.c.A(r.y,4)
s.i9(q)
s.bt()
r.at.dS("Gave the hero "+A.R(q,!1,null)+" experience.")},
nd(){var s,r,q,p,o,n,m=this.c.x
m===$&&A.c()
s=m.b
s=A.a(s.slice(0),A.N(s))
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
if(!(p instanceof A.ad))continue
o=p.y
n=p.Q
m.e6(o,n.Q,n.c)
m.kY(p)}},
mb(){var s,r,q,p=A.a([],t.b9),o=this.c.x
o===$&&A.c()
o.f5(new A.t8(p))
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.o)(p),++r){q=p[r]
o.e9(q.b,q.a)}},
np(){var s,r=this.c,q=r.x
q===$&&A.c()
r=r.y
s=r.y
q.f.B(s.gn(),s.gp()).a=$.uP()
r.Q.at.dS("Placed stairs under hero.")},
ob(){var s=!$.nX
$.nX=s
this.c.y.Q.at.dS("Show all monsters = "+s)
this.a.aa()},
o9(){var s=!$.nY
$.nY=s
this.c.y.Q.at.dS("Show monster alertness = "+s)
this.a.aa()},
od(){var s=!$.uZ
$.uZ=s
this.c.y.Q.at.dS("Show hero volume = "+s)
this.a.aa()}}
A.t9.prototype={
$2(a,b){this.a.c.y.Q.ax.dc(a)},
$S:15}
A.t8.prototype={
$2(a,b){B.a.j(this.a,new A.O(b,a))},
$S:15}
A.cC.prototype={
gb4(){return!0},
a8(a){if(a===B.H){this.a.aa()
return!0}return!1},
ac(a,b,c){var s,r,q,p,o=this
if(b)return!1
switch(a){case 13:for(s=o.geE(),r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q)o.hg(s[q])
o.a.aa()
return!0
case 8:s=o.c
r=s.length
if(r!==0){o.c=B.i.aM(s,0,r-1)
o.J()}return!0
case 32:o.c+=" "
o.J()
return!0
default:if(a>=65&&a<=90){o.c=o.c+A.rK(A.a([a],t.t)).toLowerCase()
o.J()
return!0}else if(a>=48&&a<=57){p=a-48
if(p<o.geE().length){s=o.geE()
if(!(p>=0&&p<s.length))return A.b(s,p)
o.hg(s[p])
o.a.aa()
return!0}}}return!1},
ai(a){var s,r,q,p,o,n,m=this,l=null,k=new A.aZ(new A.e(43,38),40,0,a)
A.bl(k,l,l,m.geF(),!0,l,l,l)
k.k(m.geF().length+4,0,m.c,B.h)
k.cw(m.geF().length+4+m.c.length,0," ",B.h,B.h)
for(s=m.geE(),r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
if(!B.i.G(m.eB(o).toLowerCase(),m.c.toLowerCase()))continue
if(q<10){n=q+1
k.k(1,n,B.c.t(q),B.h)
k.k(2,n,")",B.j)}++q
k.an(3,q,m.j4(o))
k.k(5,q,m.eB(o),B.C)
if(q>=36)break}s=t.N
A.bA(a,A.B(["0-9","Select","Enter","Select all","`","Exit"],s,s),l)},
geE(){var s=this.giy(),r=A.y(s),q=r.i("ap<k.E>")
s=A.a6(new A.ap(s,r.i("z(k.E)").a(new A.tG(this)),q),q.i("k.E"))
return s}}
A.tG.prototype={
$1(a){var s=this.a
return B.i.G(s.eB(A.y(s).i("cC.T").a(a)).toLowerCase(),s.c.toLowerCase())},
$S(){return A.y(this.a).i("z(cC.T)")}}
A.nh.prototype={
geF(){return"Drop what?"},
giy(){return $.bo().gc3()},
eB(a){return t.q.a(a).a.a7(1).a},
j4(a){return t.q.a(a).b},
hg(a){var s
t.q.a(a)
if(a.dx)this.b.y.Q.ax.e.j(0,a)
s=this.b
A.a8(a.a.a7(1).a,null,null).b2(s.y.Q.ax,s.w,new A.tM(this))}}
A.tM.prototype={
$1(a){var s=this.a.b,r=s.x
r===$&&A.c()
s=s.y
r.d1(a,s.y)
s.Q.at.k7("Dropped {1}.",a)},
$S:7}
A.ni.prototype={
geF(){return"Spawn what?"},
giy(){return $.ck().gc3()},
eB(a){return t.P.a(a).a.a},
j4(a){return t.P.a(a).b},
hg(a){var s,r,q
t.P.a(a)
s=this.b
r=s.x
r===$&&A.c()
q=A.cw(r,s.y.y,$.b3(),null,null,null).jV(new A.tN(this))
if(q==null)return
r.dK(a.ik(q))}}
A.tN.prototype={
$1(a){return a.S(0,this.a.b.y.y).bi(0,6)},
$S:1}
A.oc.prototype={
lq(a,b,c){var s,r
if(a<0)return
s=this.a
r=s.b.b
if(a>=r.a)return
if(b<0)return
if(b>=r.b)return
r=this.b
if(!s.B(a,b).Y(0,c))r.aZ(a,b,c)
else r.aZ(a,b,null)},
ai(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t.a.a(a)
for(s=this.a,r=s.b.b,q=r.b,r=r.a,p=s.$ti.c,o=s.a,n=this.b,m=n.$ti.c,l=n.a,k=n.b.b.a,j=l.length,i=0;i<q;++i)for(h=i*r,g=i*k,f=0;f<r;++f){n.l(f,i)
e=g+f
if(!(e>=0&&e<j))return A.b(l,e)
d=l[e]
if(d==null)continue
a.$3(f,i,d)
p.a(d)
s.l(f,i)
B.a.h(o,h+f,d)
m.a(null)
n.l(f,i)
B.a.h(l,e,null)}}}
A.F.prototype={
ga2(a){return B.c.ga2(this.a)^B.c.ga2(this.b)^B.c.ga2(this.c)},
Y(a,b){if(b==null)return!1
return b instanceof A.F&&this.a===b.a&&this.b===b.b&&this.c===b.c},
b_(a,b,c){return new A.F(B.e.N(B.e.M(this.a+b.a*c,0,255)),B.e.N(B.e.M(this.b+b.b*c,0,255)),B.e.N(B.e.M(this.c+b.c*c,0,255)))},
bl(a,b){var s=1-b
return new A.F(B.e.N(this.a*s+a.a*b),B.e.N(this.b*s+a.b*b),B.e.N(this.c*s+a.c*b))}}
A.Y.prototype={
ga2(a){return B.c.ga2(this.a)^this.b.ga2(0)^this.c.ga2(0)},
Y(a,b){if(b==null)return!1
if(b instanceof A.Y)return this.a===b.a&&this.b.Y(0,b.b)&&this.c.Y(0,b.c)
return!1}}
A.kK.prototype={}
A.A.prototype={
Y(a,b){if(b==null)return!1
return b instanceof A.A&&this.a===b.a&&this.b===b.b&&this.c===b.c},
ga2(a){return(B.c.ga2(this.a)^B.ce.ga2(this.b)^B.ce.ga2(this.c))>>>0},
t(a){var s="key("+this.a
if(this.b)s+=" shift"
return(this.c?s+" alt":s)+")"}}
A.aZ.prototype={
ga0(){return this.c.a},
gX(){return this.c.b},
an(a,b,c){var s,r=this
if(a<0)return
s=r.c
if(a>=s.a)return
if(b<0)return
if(b>=s.b)return
r.f.an(r.d+a,r.e+b,c)},
b9(a,b,c,d){return new A.aZ(new A.e(c,d),this.d+a,this.e+b,this.f)}}
A.lw.prototype={
ga0(){return this.e.a.b.b.a},
gX(){return this.e.a.b.b.b},
lO(a,b,c,d,e,f){var s=t.gX
A.ft(this.r,"load",s.i("~(1)?").a(new A.qP(this)),!1,s.c)},
an(a,b,c){this.e.lq(a,b,c)},
hU(){if(!this.y)return
this.e.ai(new A.qQ(this))},
mW(a){var s,r,q,p=this.w,o=p.m(0,a)
if(o!=null)return o
s=A.wX()
r=this.r
s.width=A.r(r.width)
s.height=A.r(r.height)
q=A.bV(s.getContext("2d"))
if(q==null)q=A.a2(q)
q.drawImage(r,0,0)
q.globalCompositeOperation="source-atop"
q.fillStyle="rgb("+a.a+", "+a.b+", "+a.c+")"
q.fillRect(0,0,A.r(r.width),A.r(r.height))
p.h(0,a,s)
return s}}
A.qP.prototype={
$1(a){var s=this.a
s.y=!0
s.hU()},
$S:5}
A.qQ.prototype={
$3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=c.a,g=B.ih.m(0,h)
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
i=r.mW(c.b)
n.imageSmoothingEnabled=!1
n.drawImage.apply(n,[i,s*q,p*o,q,o,l,k,j,m])},
$S:48}
A.d1.prototype={
kg(a,b,c,d,e){var s,r,q,p,o=A.cP(32,B.aL,e==null?B.z:e)
for(s=b+d,r=a+c,q=b;q<s;++q)for(p=a;p<r;++p)this.an(p,q,o)},
c7(a,b,c,d){return this.kg(a,b,c,d,null)},
cw(a,b,c,d,e){var s,r,q
if(d==null)d=B.aL
if(e==null)e=B.z
for(s=c.length,r=0;r<s;++r){q=a+r
if(q>=this.ga0())break
this.an(q,b,new A.Y(c.charCodeAt(r),d,e))}},
k(a,b,c,d){return this.cw(a,b,c,d,null)},
q0(a,b,c){return this.cw(a,b,c,null,null)},
b9(a,b,c,d){return new A.aZ(new A.e(c,d),a,b,this)}}
A.hT.prototype={}
A.cB.prototype={
gjA(){var s,r=this,q=r.r
if(q===$){s=A.tR(r.go4())
r.r!==$&&A.er()
r.r=s
q=s}return q},
spl(a){var s,r,q,p,o=this
if(o.e!=null)return
s=v.G
r=A.bV(A.a2(s.document).body)
r.toString
q=t.gX
p=q.i("~(1)?")
q=q.c
o.e=A.ft(r,"keydown",p.a(o.gn8()),!1,q)
s=A.bV(A.a2(s.document).body)
s.toString
o.f=A.ft(s,"keyup",p.a(o.gna()),!1,q)},
spQ(a){var s=this
if(s.w)return
s.w=!0
s.y=null
A.r(A.a2(v.G.window).requestAnimationFrame(s.gjA()))},
lv(a){var s,r,q=this,p=q.c.e.a.b.b,o=a.e.a.b.b,n=p.a!==o.a||p.b!==o.b
q.c=a
q.z=!0
q.eq()
if(n)for(p=q.b,o=p.length,s=a.e.a.b.b,r=0;r<p.length;p.length===o||(0,A.o)(p),++r)p[r].dj(s)},
a3(a){var s=this
A.y(s).i("u<cB.T>").a(a)
a.jH(s)
B.a.j(s.b,a)
s.eH()},
aQ(a){var s,r,q,p=this.b
if(0>=p.length)return A.b(p,-1)
s=p.pop()
s.a=null
r=p.length
q=r-1
if(!(q>=0))return A.b(p,q)
p[q].d0(s,a)
this.eH()},
bh(a){var s,r=this
A.y(r).i("u<cB.T>").a(a)
s=r.b
if(0>=s.length)return A.b(s,-1)
s.pop().a=null
a.jH(r)
B.a.j(s,a)
r.eH()},
J(){this.d=!0},
dh(){var s,r
for(s=this.b,r=0;r<s.length;++r)s[r].bx()
if(this.d)this.eH()},
n9(a){var s,r,q,p=A.r(a.keyCode)
if(A.r(a.location)===3){A:{if(48===p){s=96
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
r=this.a.a.m(0,new A.A(p,A.dG(a.shiftKey),A.dG(a.altKey)))
q=B.a.gcp(this.b)
if(r!=null){a.preventDefault()
if(q.a8(r))return}s=A.dG(a.shiftKey)
if(q.ac(p,A.dG(a.altKey),s))a.preventDefault()},
nb(a){var s,r,q=A.r(a.keyCode)
if(q===59)q=186
s=B.a.gcp(this.b)
r=A.dG(a.shiftKey)
if(s.fa(q,A.dG(a.altKey),r))a.preventDefault()},
o5(a){var s,r=this
A.ei(a)
s=r.y
if(s!=null){if(a-s>16.666666666666668){r.iq()
if(r.z)r.cF()
r.y=a}}else{r.iq()
if(r.z)r.cF()
r.y=a}if(r.w)A.r(A.a2(v.G.window).requestAnimationFrame(r.gjA()))},
eH(){var s,r,q=this.c
q.c7(0,0,q.ga0(),q.gX())
for(s=this.b,r=s.length-1;r>=0;--r){if(!(r<s.length))return A.b(s,r)
if(!s[r].gb4())break}if(r<0)r=0
for(;r<s.length;++r)s[r].ai(q)
this.d=!1
q.hU()}}
A.u.prototype={
gb4(){return!1},
jH(a){A.y(this).i("cB<u.T>").a(a)
this.a=a
this.dj(a.c.e.a.b.b)},
J(){var s=this.a
if(s==null)return
s.z=!0
s.eq()},
a8(a){A.y(this).i("u.T").a(a)
return!1},
ac(a,b,c){return!1},
fa(a,b,c){return!1},
d0(a,b){A.y(this).i("u<u.T>").a(a)},
bx(){},
ai(a){},
dj(a){}}
A.aa.prototype={
lI(a,b,c,d){var s,r,q,p,o,n,m,l=this
for(s=l.$ti.c,r=l.a,q=l.b.b.a,p=0*q,o=1;o<a;++o){n=s.a(c.$1(new A.e(o,0)))
l.l(o,0)
B.a.h(r,p+o,n)}for(m=1;m<b;++m)for(p=m*q,o=0;o<a;++o){n=s.a(c.$1(new A.e(o,m)))
l.l(o,m)
B.a.h(r,p+o,n)}},
B(a,b){var s,r
this.l(a,b)
s=this.a
r=b*this.b.b.a+a
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]},
aZ(a,b,c){var s=this
s.$ti.c.a(c)
s.l(a,b)
B.a.h(s.a,b*s.b.b.a+a,c)},
gL(a){var s=this.a
return new J.aX(s,s.length,A.N(s).i("aX<1>"))},
l(a,b){if(a<0||a>=this.b.b.a)throw A.m(A.hP(a,"x"))
if(b<0||b>=this.b.b.b)throw A.m(A.hP(b,"y"))}}
A.jJ.prototype={
ps(a){var s=this.a,r=this.b
if(!A.vt(s,r,a))return!1
if(r>0&&A.vt(s,r-1,a))return!1
return!0},
gL(a){return A.xB(this,!1)}}
A.mi.prototype={
gH(){var s=this.b
return new A.e(s.b,s.c)},
q(){var s,r,q,p,o,n
for(s=this.b,r=this.a,q=r.a,p=r.b,o=this.c;s.q();){n=new A.e(s.b,s.c)
if(o){if(r.ps(n))return!0}else if(A.vt(q,p,n))return!0}return!1},
$ia4:1}
A.aC.prototype={
aN(){return"Direction."+this.b},
gba(){switch(this.a){case 0:var s=B.r
break
case 1:s=B.V
break
case 2:s=B.M
break
case 3:s=B.S
break
case 4:s=B.Q
break
case 5:s=B.R
break
case 6:s=B.L
break
case 7:s=B.U
break
case 8:s=B.T
break
default:s=null}return s},
gbb(){switch(this.a){case 0:var s=B.r
break
case 1:s=B.S
break
case 2:s=B.Q
break
case 3:s=B.R
break
case 4:s=B.L
break
case 5:s=B.U
break
case 6:s=B.T
break
case 7:s=B.V
break
case 8:s=B.M
break
default:s=null}return s},
gbG(){switch(this.a){case 0:var s=B.r
break
case 1:s=B.T
break
case 2:s=B.V
break
case 3:s=B.M
break
case 4:s=B.S
break
case 5:s=B.Q
break
case 6:s=B.R
break
case 7:s=B.L
break
case 8:s=B.U
break
default:s=null}return s},
gbX(){switch(this.a){case 0:var s=B.r
break
case 1:s=B.Q
break
case 2:s=B.R
break
case 3:s=B.L
break
case 4:s=B.U
break
case 5:s=B.T
break
case 6:s=B.V
break
case 7:s=B.M
break
case 8:s=B.S
break
default:s=null}return s},
gcQ(){switch(this.a){case 0:var s=B.r
break
case 1:s=B.L
break
case 2:s=B.U
break
case 3:s=B.T
break
case 4:s=B.V
break
case 5:s=B.M
break
case 6:s=B.S
break
case 7:s=B.Q
break
case 8:s=B.R
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
$ie:1,
gn(){return this.c},
gp(){return this.d}}
A.mm.prototype={}
A.mN.prototype={
gH(){return this.a},
q(){var s,r,q=this,p=q.a.F(0,q.e)
q.a=p
s=q.b=q.b+q.d
r=q.c
if(s*2>=r){q.a=p.F(0,q.f)
q.b=s-r}return!0},
$ia4:1}
A.a0.prototype={
gbT(){var s=this.a.a
return Math.min(s,s+this.b.a)},
gbY(){var s=this.a.b
return Math.min(s,s+this.b.b)},
geb(){var s=this.a.a
return Math.max(s,s+this.b.a)},
geS(){var s=this.a.b
return Math.max(s,s+this.b.b)},
gho(){var s=this
return new A.e(B.c.A(s.gbT()+s.geb(),2),B.c.A(s.gbY()+s.geS(),2))},
t(a){return"("+this.a.t(0)+")-("+this.b.t(0)+")"},
bR(a){var s=this.a,r=this.b,q=a*2
return new A.a0(new A.e(s.a-a,s.b-a),new A.e(r.a+q,r.b+q))},
G(a,b){var s,r=this.a,q=r.a
if(b.gn()<q)return!1
s=this.b
if(b.gn()>=q+s.a)return!1
r=r.b
if(b.gp()<r)return!1
if(b.gp()>=r+s.b)return!1
return!0},
gL(a){var s=this.a
return new A.cX(this,s.a-1,s.b)},
l8(){var s,r,q,p,o,n=this,m=n.b,l=m.a,k=l>1
if(k&&m.b>1){s=A.a([],t.l)
for(r=n.gbT(),k=n.a,q=k.a,l=q+l,p=Math.max(q,l),k=k.b,m=k+m.b;r<p;++r){B.a.j(s,new A.e(r,Math.min(k,m)))
B.a.j(s,new A.e(r,Math.max(k,m)-1))}for(o=n.gbY()+1,m=Math.max(k,m);o<m-1;++o){B.a.j(s,new A.e(Math.min(q,l),o))
B.a.j(s,new A.e(p-1,o))}return s}else if(k&&m.b===1)return new A.a0(new A.e(n.gbT(),n.gbY()),new A.e(l,1))
else{m=m.b
if(m>=1&&l===1)return new A.a0(new A.e(n.gbT(),n.gbY()),new A.e(1,m))}return B.i1}}
A.cX.prototype={
gH(){return new A.e(this.b,this.c)},
q(){var s=this,r=s.a
if(++s.b>=r.geb()){s.b=r.a.a;++s.c}return s.c<r.geS()},
$ia4:1}
A.qX.prototype={
bs(a,b){if(b==null){b=a
a=0}return this.a.a5(b-a)+a},
U(a){return this.bs(a,null)},
aC(a,b){if(b==null){b=a
a=0}return this.a.a5(b+1-a)+a},
kr(a){return this.aC(a,null)},
aF(a,b){var s=this.a
if(b==null)return s.hJ()*a
else return s.hJ()*(b-a)+a},
aS(a){return this.aF(a,null)},
pL(a,b){var s=B.e.bQ(b)
return this.aS(1)<b-s?s+1:s},
l3(a,b,c){var s,r
c.i("D<0>").a(b)
s=this.U(b.length)
if(!(s>=0&&s<b.length))return A.b(b,s)
r=b[s]
B.a.h(b,s,B.a.gcp(b))
B.a.kZ(b)
return r},
cS(a,b){var s
if(b<0)throw A.m(A.aF('The argument "range" must be zero or greater.',null))
s=this.kr(b)
if(s<=this.kr(b))return a+s
else return a-b-1+s},
hY(a,b){var s=this.a
for(;;){if(!(s.a5(b)===0))break;++a}return a}}
A.lX.prototype={
gb5(){return Math.max(Math.abs(this.gn()),Math.abs(this.gp()))},
gaH(){var s=this
return s.gn()*s.gn()+s.gp()*s.gp()},
gI(a){return Math.sqrt(this.gaH())},
gkD(){var s,r,q,p=this,o=null,n=p.gn(),m=p.gp()
A:{s=n<0
r=s
if(r&&p.gp()/p.gn()>=2){r=B.M
break A}if(s&&p.gp()/p.gn()>=0.5){r=B.V
break A}if(s&&p.gp()/p.gn()>=-0.5){r=B.T
break A}if(s&&p.gp()/p.gn()>=-2){r=B.U
break A}if(s){r=B.L
break A}q=n>0
r=q
if(r&&p.gp()/p.gn()>=2){r=B.L
break A}if(q&&p.gp()/p.gn()>=0.5){r=B.R
break A}if(q&&p.gp()/p.gn()>=-0.5){r=B.Q
break A}if(q&&p.gp()/p.gn()>=-2){r=B.S
break A}if(q){r=B.M
break A}if(m<0){r=B.M
break A}if(m>0){r=B.L
break A}r=B.r
break A}return r},
gbD(){var s,r=A.a([],t.l)
for(s=0;s<8;++s)r.push(this.F(0,B.a6[s]))
return r},
gdO(){var s,r=A.a([],t.l)
for(s=0;s<4;++s)r.push(this.F(0,B.au[s]))
return r},
aL(a,b){A.r(b)
return new A.e(this.gn()*b,this.gp()*b)},
F(a,b){var s,r=this
A:{if(t.u.b(b)){s=new A.e(r.gn()+b.gn(),r.gp()+b.gp())
break A}if(A.fC(b)){s=new A.e(r.gn()+b,r.gp()+b)
break A}s=A.a_(A.aF("Operand must be an int or Vec.",null))}return s},
S(a,b){var s,r,q,p
A:{s=this.gn()
r=b.gn()
q=this.gp()
p=b.gp()
break A}return new A.e(s-r,q-p)},
bi(a,b){var s
A:{if(t.u.b(b)){s=this.gaH()>b.gaH()
break A}if(typeof b=="number"){s=this.gaH()>b*b
break A}s=A.a_(A.aF("Operand must be a number or Vec.",null))}return s},
cV(a,b){var s
A:{s=this.gaH()>=b*b
break A}return s},
ei(a,b){var s
A:{if(t.u.b(b)){s=this.gaH()<b.gaH()
break A}if(typeof b=="number"){s=this.gaH()<b*b
break A}s=A.a_(A.aF("Operand must be a number or Vec.",null))}return s},
eh(a,b){var s
A:{s=this.gaH()<=b*b
break A}return s},
t(a){return""+this.gn()+", "+this.gp()}}
A.e.prototype={
Y(a,b){if(b==null)return!1
if(!t.u.b(b))return!1
return this.a===b.gn()&&this.b===b.gp()},
ga2(a){var s,r=this.a,q=r>=0?2*r:-2*r-1
r=this.b
s=r>=0?2*r:-2*r-1
r=q+s
return B.c.A(r*(r+1),2)+s},
gn(){return this.a},
gp(){return this.b}}
A.nd.prototype={}
A.v_.prototype={}
A.ir.prototype={}
A.mo.prototype={}
A.is.prototype={$iAx:1}
A.tj.prototype={
$1(a){return this.a.$1(A.a2(a))},
$S:5}
A.lO.prototype={}
A.uh.prototype={
$1(a){var s=v.G
if("rvipSound" in s)A.c_(s,"rvipSound",a,null,t.X)},
$S:49}
A.ui.prototype={
$1(a){var s
a=A.r(A.bw(a))
$.bJ.u().b.remove()
s=B.c.M(a,0,$.dH.length-1)
if(!(s>=0&&s<$.dH.length))return A.b($.dH,s)
$.bJ.b=$.dH[s]
s=A.bV(A.a2(v.G.document).querySelector("#map"))
s.toString
s.append($.bJ.u().b)
A.vz()
return null},
$S:149}
A.uj.prototype={
$0(){var s,r,q,p,o
A.vz()
for(s=$.ae.length,r=t.d,q=0;q<$.ae.length;$.ae.length===s||(0,A.o)($.ae),++q){p=r.a($.ae[q])
o=$.bJ.b
if(o===$.bJ)A.a_(A.e0(""))
p.dj(o.c.e.a.b.b)}s=$.x.u()
s.z=!0
s.eq()},
$S:22}
A.uk.prototype={
$0(){var s=$.x.u()
s.z=!0
s.eq()
return null},
$S:0}
A.ul.prototype={
$1(a){A.a2(a)
$.no=A.r(a.location)===3?0:A.r(a.keyCode)
$.yw=A.dG(a.ctrlKey)},
$S:150}
A.um.prototype={
$1(a){A.y5()},
$S:5}
A.tO.prototype={
$1(a){A.Bi()},
$S:5}
A.tP.prototype={
$1(a){var s,r,q,p,o=$.nS
if(o==null)return
s=B.e.N(A.bw(a.offsetX))
r=B.e.N(A.bw(a.offsetY))
q=this.a
s=B.c.c_(s,q.z)
q=B.c.c_(r,q.Q)
r=o.w
r===$&&A.c()
r=r.r
p=new A.e(s,q).F(0,new A.e(r.gbT(),r.gbY()))
if(!r.G(0,p))return
s=o.b.x
s===$&&A.c()
s=s.w.B(p.a,p.b)
if(s instanceof A.ad){if($.fB.G(0,s))$.fB.ah(0,s)
else $.fB.j(0,s)
A.y5()}},
$S:5}
A.tV.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g=v.G,f=A.a2(A.a2(g.document).querySelectorAll(".debug"))
for(s=0;s<A.r(f.length);++s){r=A.bV(A.a2(g.document).body)
r.toString
q=A.bV(f.item(s))
q.toString
A.a2(r.removeChild(q))}p=$.nS
if(p==null)return
r=A.y($.fB)
$.fB.mI(r.i("z(1)").a(new A.tW()),!0)
for(r=A.vn($.fB,$.fB.r,r.c),q=r.$ti.c;r.q();){o=r.d
if(o==null)o=q.a(o)
n=p.w
n===$&&A.c()
n=n.r
m=o.y
if(n.G(0,m)){l=n.a
k=l.a
n=n.b
l=l.b
j=m.S(0,new A.e(Math.min(k,k+n.a),Math.min(l,l+n.b)))
i=A.zG(o)
if(i==null)continue
h=A.a2(A.a2(g.document).createElement("pre"))
h.className="debug"
A.a2(h.style).display="inline-block"
o=$.bJ.b
if(o===$.bJ)A.a_(A.e0(""))
n=o.d
m=o.b
l=B.c.N(A.r(m.offsetLeft))
o=o.e
m=B.c.N(A.r(m.offsetTop))
A.a2(h.style).left=B.c.t((j.a+1)*n+l+4)
A.a2(h.style).top=B.c.t(j.b*o+m+2)
h.textContent=i
A.a2(A.bV(A.a2(g.document).body).children)}}},
$S:0}
A.tW.prototype={
$1(a){return t.B.a(a).z<=0},
$S:151}
A.lz.prototype={
cF(){var s,r,q,p,o,n,m=this.z=!1,l=B.a.pt($.ae,A.CC())
if(l<0)s=null
else{if(!(l<$.ae.length))return A.b($.ae,l)
s=$.ae[l]}$.yx=s
if(l===$.ae.length-1){A.yy("")
return}r=$.bJ.u().c
r.c7(0,0,r.ga0(),r.gX())
s=t.d
q=l
for(;;){if(q>0){if(!(q<$.ae.length))return A.b($.ae,q)
p=s.a($.ae[q]).gb4()}else p=m
if(!p)break;--q}for(o=Math.max(q,0);o<=l;++o){if(!(o>=0&&o<$.ae.length))return A.b($.ae,o)
s.a($.ae[o]).ai(r)}r.hU()
m=r.e.a.b.b
n=A.vf(Math.max(m.a,80),Math.max(m.b,34))
for(o=l+1;m=$.ae.length,o<m;++o){if(!(o>=0))return A.b($.ae,o)
s.a($.ae[o]).ai(n)}A.yy(n.l6(!0))},
a3(a){t.d.a(a)
B.a.j($.ae,a)
A.uv()
this.lH(a)
this.cF()
A.nj()},
aQ(a){if(0>=$.ae.length)return A.b($.ae,-1)
$.ae.pop()
A.uv()
this.fG(a)
this.cF()
A.nj()},
aa(){return this.aQ(null)},
bh(a){t.d.a(a)
if(0>=$.ae.length)return A.b($.ae,-1)
$.ae.pop()
B.a.j($.ae,a)
A.uv()
this.lG(a)
this.cF()
A.nj()}}
A.tS.prototype={
$1(a){return A.dc(a) instanceof A.dY},
$S:43};(function aliases(){var s=J.dx.prototype
s.lE=s.t
s=A.h2.prototype
s.lD=s.V
s=A.hA.prototype
s.ip=s.bq
s=A.cR.prototype
s.fF=s.ac
s.fE=s.a8
s=A.eb.prototype
s.ep=s.ac
s.lF=s.ai
s=A.iv.prototype
s.ir=s.cB
s=A.cB.prototype
s.lH=s.a3
s.fG=s.aQ
s.lG=s.bh
s.eq=s.J
s.iq=s.dh})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._static_1,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_2u,m=hunkHelpers.installInstanceTearOff,l=hunkHelpers._instance_0u
s(J,"Bt","zW",153)
r(J.t.prototype,"got","j",55)
q(A,"BG","xi",2)
p(A,"C6","AH",23)
p(A,"C7","AI",23)
p(A,"C8","AJ",23)
q(A,"ye","C_",0)
p(A,"Cd","Be",36)
p(A,"yi","BI",4)
p(A,"Ci","y1",4)
p(A,"Cj","y2",4)
p(A,"a1","Bq",3)
p(A,"CT","Ba",6)
p(A,"CW","BO",6)
p(A,"CU","Bb",6)
p(A,"CX","BP",6)
p(A,"CS","B9",6)
p(A,"CV","BN",6)
p(A,"Ch","de",49)
o(A.ff.prototype,"gpg","ph","1(q)")
p(A,"vB","BM",18)
p(A,"nl","BL",3)
var k
n(k=A.ex.prototype,"glr","ls",84)
n(k,"glt","lu",85)
m(A.bZ.prototype,"gla",0,1,null,["$2$wasUnequipped","$1"],["fo","ca"],88,0,0)
o(A.dY.prototype,"gmP","bN",53)
s(A,"Cy","zR",17)
s(A,"yo","zO",17)
s(A,"Cx","zQ",17)
s(A,"uc","zP",17)
s(A,"CE","A7",26)
s(A,"yr","A6",26)
s(A,"ys","A8",26)
o(k=A.b5.prototype,"gi8","fs",31)
o(k,"gm3","m4",11)
o(A.i0.prototype,"gi8","fs",31)
o(k=A.eb.prototype,"goe","of",11)
o(k,"geC","c1",13)
l(A.ip.prototype,"gjo","eG",0)
o(A.iN.prototype,"geC","c1",13)
o(A.iM.prototype,"geC","c1",13)
o(A.fs.prototype,"geC","c1",13)
l(k=A.ij.prototype,"gnq","nr",0)
l(k,"gn1","n2",0)
l(k,"gmy","mz",0)
l(k,"gor","os",0)
l(k,"gmS","mT",0)
l(k,"gnc","nd",0)
l(k,"gma","mb",0)
l(k,"gno","np",0)
l(k,"goa","ob",0)
l(k,"go8","o9",0)
l(k,"goc","od",0)
o(k=A.cB.prototype,"gn8","n9",5)
o(k,"gna","nb",5)
o(k,"go4","o5",147)
p(A,"CC","Au",43)
p(A,"yp","Bc",11)
p(A,"yq","Bd",13)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.P,null)
q(A.P,[A.v2,J.kz,A.hZ,J.aX,A.ar,A.Z,A.r5,A.k,A.ca,A.bs,A.d6,A.i9,A.ib,A.bu,A.aH,A.dE,A.c2,A.eF,A.iB,A.dn,A.t_,A.qv,A.iO,A.ao,A.pV,A.c9,A.cS,A.e1,A.hp,A.iC,A.ik,A.lJ,A.n8,A.th,A.cc,A.mz,A.nc,A.tI,A.ak,A.cq,A.mk,A.iu,A.bH,A.m8,A.i5,A.iU,A.iy,A.fk,A.mO,A.d9,A.eg,A.jP,A.jR,A.tx,A.dT,A.ti,A.la,A.i4,A.tk,A.oO,A.aS,A.aN,A.n9,A.rv,A.cZ,A.k5,A.qu,A.mI,A.mY,A.kk,A.a5,A.H,A.fd,A.h9,A.eN,A.mU,A.h4,A.h0,A.te,A.cn,A.tg,A.aL,A.il,A.mQ,A.bI,A.kc,A.tf,A.md,A.ag,A.iI,A.m6,A.bc,A.n2,A.nI,A.iH,A.bj,A.lc,A.fY,A.nZ,A.jX,A.eW,A.pO,A.hK,A.qy,A.qH,A.it,A.tD,A.e6,A.rZ,A.fo,A.fv,A.dk,A.km,A.cK,A.dC,A.ba,A.dm,A.dz,A.bb,A.aG,A.c5,A.dU,A.hb,A.k4,A.aM,A.kj,A.ie,A.kP,A.hB,A.ff,A.bv,A.c3,A.mW,A.iK,A.qq,A.hH,A.W,A.d0,A.cL,A.dR,A.cQ,A.dt,A.hy,A.aJ,A.cW,A.i3,A.dr,A.bd,A.cm,A.ex,A.c7,A.bD,A.dQ,A.bP,A.rX,A.aR,A.lr,A.dA,A.jE,A.aA,A.nQ,A.f0,A.cr,A.oP,A.n1,A.pS,A.f5,A.re,A.rg,A.ah,A.bG,A.d3,A.d2,A.u,A.fZ,A.jT,A.h5,A.ha,A.cO,A.kq,A.kt,A.kB,A.kR,A.lb,A.lN,A.lS,A.f,A.l,A.kC,A.da,A.eG,A.qA,A.m7,A.af,A.d1,A.rw,A.lL,A.aP,A.ax,A.ab,A.Q,A.bE,A.cb,A.oc,A.F,A.Y,A.kK,A.A,A.cB,A.mi,A.mN,A.cX,A.qX,A.lX,A.nd,A.v_,A.is,A.lO])
q(J.kz,[J.hm,J.ho,J.hr,J.hq,J.hs,J.e_,J.du])
q(J.hr,[J.dx,J.t,A.f1,A.hE])
q(J.dx,[J.le,J.dD,J.dv])
r(J.kE,A.hZ)
r(J.pK,J.t)
q(J.e_,[J.hn,J.kF])
q(A.ar,[A.dw,A.d4,A.kH,A.lV,A.ly,A.mq,A.hu,A.js,A.co,A.id,A.lU,A.e8,A.jQ])
r(A.fp,A.Z)
r(A.dp,A.fp)
q(A.k,[A.M,A.cV,A.ap,A.e9,A.ia,A.ii,A.iA,A.m5,A.n7,A.S,A.lY,A.mp,A.mG,A.aa,A.jJ,A.a0])
q(A.M,[A.aI,A.b6,A.cT,A.br,A.ix])
q(A.aI,[A.i8,A.au,A.cY,A.hv,A.mK])
r(A.cN,A.cV)
r(A.h8,A.e9)
q(A.c2,[A.fw,A.fx,A.fy])
r(A.O,A.fw)
r(A.K,A.fx)
r(A.X,A.fy)
q(A.eF,[A.bk,A.dZ])
q(A.dn,[A.jL,A.jM,A.lM,A.u8,A.ua,A.tb,A.ta,A.tt,A.rI,A.tF,A.q7,A.ud,A.uq,A.ur,A.u1,A.oS,A.oT,A.oR,A.t6,A.nH,A.o6,A.oa,A.t7,A.oL,A.qG,A.u5,A.oi,A.om,A.on,A.oj,A.ok,A.oq,A.or,A.ol,A.oo,A.op,A.pi,A.pl,A.nB,A.nC,A.nz,A.nE,A.ny,A.nD,A.u4,A.uB,A.ut,A.uD,A.rf,A.o_,A.pR,A.pQ,A.qY,A.rW,A.rV,A.o3,A.o4,A.o5,A.og,A.oh,A.p_,A.pX,A.pZ,A.u7,A.qI,A.qJ,A.qN,A.qO,A.qL,A.qM,A.qK,A.qt,A.qs,A.q9,A.r0,A.r_,A.oG,A.oE,A.p0,A.ru,A.ov,A.ot,A.pf,A.qj,A.qk,A.ql,A.qi,A.nL,A.nJ,A.nK,A.nF,A.nG,A.oM,A.pT,A.rq,A.rt,A.rs,A.oC,A.oy,A.oD,A.oz,A.oB,A.ob,A.oZ,A.oY,A.oW,A.rR,A.rS,A.px,A.py,A.qc,A.qf,A.qg,A.qd,A.qe,A.pu,A.rY,A.oU,A.qn,A.qo,A.qp,A.qm,A.r8,A.r9,A.r7,A.ro,A.rl,A.ow,A.ox,A.r2,A.uy,A.rG,A.rH,A.rD,A.rE,A.rx,A.rN,A.tG,A.tM,A.tN,A.qP,A.qQ,A.tj,A.uh,A.ui,A.ul,A.um,A.tO,A.tP,A.tW,A.tS])
q(A.jL,[A.qE,A.tc,A.td,A.tJ,A.tl,A.tp,A.to,A.tn,A.tm,A.ts,A.tr,A.tq,A.rJ,A.tE,A.tY,A.o7,A.pm,A.pj,A.pr,A.ps,A.pq,A.pn,A.pt,A.po,A.ph,A.pk,A.pp,A.nA,A.u3,A.tZ,A.u_,A.ug,A.uu,A.uf,A.uo,A.o2,A.o0,A.qU,A.qV,A.qS,A.qW,A.qT,A.qR,A.nT,A.nV,A.nW,A.nU,A.pY,A.q2,A.q3,A.q0,A.q1,A.q4,A.rb,A.pF,A.rp,A.os,A.pw,A.qb,A.p9,A.pa,A.pb,A.pc,A.pd,A.pe,A.ri,A.rj,A.r1,A.rP,A.rO,A.uj,A.uk,A.tV])
r(A.hJ,A.d4)
q(A.lM,[A.lI,A.ez])
q(A.ao,[A.c8,A.iw,A.mJ])
q(A.jM,[A.pL,A.u9,A.tu,A.q8,A.ty,A.oQ,A.nM,A.nN,A.o8,A.o9,A.tB,A.uC,A.o1,A.pP,A.rU,A.tA,A.p4,A.p3,A.p2,A.p1,A.oF,A.q_,A.rc,A.rd,A.ou,A.pH,A.pC,A.pB,A.pA,A.pI,A.pD,A.pE,A.pG,A.oN,A.pU,A.rr,A.oA,A.oX,A.pv,A.q6,A.q5,A.ra,A.rn,A.rk,A.rm,A.qC,A.qD,A.r3,A.r4,A.uz,A.uA,A.uw,A.ux,A.rF,A.ry,A.rz,A.rA,A.rB,A.rC,A.oe,A.of,A.rM,A.rT,A.t9,A.t8])
r(A.ht,A.c8)
q(A.hE,[A.l_,A.f2])
q(A.f2,[A.iD,A.iF])
r(A.iE,A.iD)
r(A.hC,A.iE)
r(A.iG,A.iF)
r(A.hD,A.iG)
q(A.hC,[A.l0,A.l1])
q(A.hD,[A.l2,A.l3,A.l4,A.l5,A.l6,A.hF,A.l7])
r(A.iP,A.mq)
r(A.im,A.mk)
r(A.n_,A.iU)
r(A.fu,A.iw)
r(A.iL,A.fk)
r(A.d8,A.iL)
r(A.kJ,A.hu)
r(A.kI,A.jP)
q(A.jR,[A.pN,A.pM])
r(A.tw,A.tx)
q(A.co,[A.fc,A.kx])
q(A.a5,[A.mr,A.mu,A.lH,A.m9,A.mj,A.n5,A.ne])
r(A.k7,A.mr)
r(A.kb,A.mu)
q(A.H,[A.ke,A.kT,A.mc,A.kQ,A.h2,A.eI,A.eL,A.me,A.mf,A.mg,A.mx,A.mS,A.mT,A.fq,A.eZ,A.mv,A.eP,A.eO,A.eU,A.ks,A.lq,A.eV,A.f_,A.kV,A.f6,A.lg,A.jp,A.fh,A.fg,A.lD,A.fn,A.mR,A.kf,A.jt,A.kA,A.ld,A.m_,A.l8,A.jK,A.lt,A.jH])
q(A.fd,[A.m0,A.jq,A.hO])
q(A.lH,[A.mb,A.mh,A.ml,A.mn,A.ms,A.mt,A.my,A.mC,A.mD,A.mE,A.mF,A.mL,A.mM,A.mP,A.mX,A.n0,A.n4,A.nb,A.nf,A.ng])
r(A.jx,A.mb)
r(A.jG,A.mh)
r(A.jS,A.ml)
r(A.k0,A.mn)
r(A.k8,A.ms)
r(A.k9,A.mt)
r(A.kh,A.my)
r(A.kn,A.mC)
r(A.ko,A.mD)
r(A.ku,A.mE)
r(A.kw,A.mF)
r(A.kM,A.mL)
r(A.kO,A.mM)
r(A.kU,A.mP)
r(A.lm,A.mX)
r(A.lA,A.n0)
r(A.lC,A.n4)
r(A.lP,A.nb)
r(A.m3,A.nf)
r(A.m4,A.ng)
r(A.jv,A.m9)
q(A.kT,[A.ma,A.jO,A.n6])
r(A.jw,A.ma)
r(A.jN,A.mj)
r(A.lF,A.n5)
r(A.lG,A.n6)
r(A.m1,A.ne)
r(A.jy,A.mc)
q(A.kQ,[A.jC,A.lR])
q(A.h2,[A.eT,A.mw,A.f8,A.ey,A.eH,A.fe])
r(A.eQ,A.mw)
q(A.ti,[A.eJ,A.e3,A.dB,A.hl,A.bS,A.rQ,A.hV,A.hW,A.kr,A.c0,A.hI,A.e5,A.cy,A.fl,A.fr,A.jo,A.mm])
r(A.eB,A.me)
r(A.eC,A.mf)
r(A.jF,A.mg)
r(A.eR,A.mx)
r(A.f9,A.mS)
r(A.lf,A.mT)
r(A.kd,A.mv)
q(A.lq,[A.kv,A.mZ])
q(A.eN,[A.kS,A.kY,A.n3])
r(A.lp,A.mZ)
q(A.mR,[A.f3,A.f4])
r(A.c1,A.mU)
q(A.c1,[A.k_,A.kg,A.k6,A.ka,A.ll,A.lB])
r(A.ki,A.h4)
q(A.te,[A.nR,A.pg])
q(A.tg,[A.mH,A.na])
q(A.tf,[A.oH,A.jD])
q(A.bc,[A.bz,A.lo,A.dq,A.kp,A.hh,A.bY,A.b8,A.bT,A.bF])
r(A.h_,A.lo)
r(A.ai,A.n2)
q(A.ai,[A.dl,A.jr,A.jz,A.jA,A.hA])
q(A.hA,[A.ju,A.jB,A.kL,A.lE,A.lK,A.m2])
q(A.lc,[A.tz,A.qh,A.tH])
q(A.bj,[A.eD,A.eE,A.lx,A.eY,A.f7,A.fi])
q(A.lx,[A.eK,A.eX])
q(A.kA,[A.jZ,A.k1,A.lT,A.lW,A.lQ])
q(A.dC,[A.bp,A.aK,A.L])
q(A.c5,[A.hg,A.h1,A.hM,A.dS,A.he,A.hU,A.hL])
q(A.ie,[A.lZ,A.fa])
q(A.dR,[A.aY,A.lv,A.cd,A.dW])
q(A.bp,[A.at,A.ad])
r(A.cz,A.bd)
q(A.cz,[A.i6,A.fW,A.ih,A.hj])
r(A.eM,A.mp)
r(A.bZ,A.mG)
q(A.f0,[A.cp,A.cI,A.cH])
q(A.u,[A.jn,A.hd,A.h6,A.dY,A.hx,A.ic,A.ig,A.hi,A.cR,A.b5,A.eb,A.kl,A.hz,A.hG,A.lh,A.hY,A.ij,A.cC])
q(A.h6,[A.fV,A.l9])
q(A.cR,[A.k2,A.kD,A.kW])
q(A.b5,[A.ds,A.dV,A.hk,A.e4,A.mV,A.i0,A.ea,A.ec])
q(A.da,[A.io,A.iq,A.iJ,A.fz])
q(A.mV,[A.lj,A.lk])
q(A.eb,[A.d7,A.iz,A.ip,A.iN,A.fs])
q(A.d7,[A.iv,A.iM])
q(A.iv,[A.mB,A.mA])
q(A.eG,[A.kZ,A.fj])
q(A.qA,[A.pz,A.pW,A.r6,A.rh])
q(A.lh,[A.h3,A.hc,A.hf,A.i_])
q(A.d1,[A.hX,A.aZ,A.hT])
q(A.cC,[A.nh,A.ni])
r(A.lw,A.hT)
r(A.aC,A.mm)
r(A.e,A.nd)
r(A.ir,A.i5)
r(A.mo,A.ir)
r(A.lz,A.cB)
s(A.fp,A.dE)
s(A.iD,A.Z)
s(A.iE,A.aH)
s(A.iF,A.Z)
s(A.iG,A.aH)
s(A.mr,A.W)
s(A.mu,A.W)
s(A.mb,A.W)
s(A.mh,A.W)
s(A.ml,A.W)
s(A.mn,A.W)
s(A.ms,A.d0)
s(A.mt,A.W)
s(A.my,A.W)
s(A.mC,A.W)
s(A.mD,A.W)
s(A.mE,A.d0)
s(A.mF,A.W)
s(A.mL,A.W)
s(A.mM,A.W)
s(A.mP,A.W)
s(A.mX,A.W)
s(A.n0,A.W)
s(A.n4,A.W)
s(A.nb,A.W)
s(A.nf,A.W)
s(A.ng,A.W)
s(A.m9,A.cL)
s(A.ma,A.km)
s(A.mj,A.cL)
s(A.n5,A.cL)
s(A.n6,A.km)
s(A.ne,A.d0)
s(A.mc,A.h9)
s(A.mw,A.cK)
s(A.me,A.cK)
s(A.mf,A.cK)
s(A.mg,A.cK)
s(A.mx,A.cK)
s(A.mS,A.cK)
s(A.mT,A.cK)
s(A.mv,A.h9)
s(A.mZ,A.h9)
s(A.mU,A.aJ)
s(A.n2,A.aJ)
s(A.mp,A.bD)
s(A.mG,A.bD)
s(A.mm,A.lX)
s(A.nd,A.lX)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{d:"int",E:"double",aq:"num",q:"String",z:"bool",aN:"Null",D:"List",P:"Object",bg:"Map",aE:"JSObject"},mangledNames:{},types:["~()","z(e)","d()","d(d)","q(q)","~(aE)","H(e)","~(L)","E()","z(aC)","~(e)","z(L)","~(q,@)","d?(L)","d(d,cm)","~(L,e)","F(F,F)","d(aR,aR)","E(d)","D<q>(d)","~(ai,d)","d(d,q)","aN()","~(~())","d(d,d)","z(dt)","d(aA,aA)","fv()","z(cW)","~(d1)","~(q,q)","d(L)","ds()","z(aA)","z(aR)","d(ad)","@(@)","aN(@)","D<e>()","z(bc)","~(ad)","E(E,cm)","~(P?,P?)","z(P)","q(cv)","aN(d)","E(E,dm)","E(E,dz)","~(d,d,Y)","~(q)","P?(P?)","~(@)","~(cn)","~(aC)","~(bB,E)","~(P?)","~(q,E)","eV()","eK()","eD()","eE()","eY()","fi()","eX()","f7()","~(aA,e)","e()","E(d,d)","eO(e)","f4(e)","f3(e)","d3(fo,d)","eP()","fb<aq>()","fg(e)","fh()","eU()","fn()","aN(e,bb,aq,d)","aN(e)","eT()","~(d)","aN(E)","f_()","~(dU,d(d))","~(cy,d(d))","d(d,L?)","z(q)","dQ(L{wasUnequipped:z})","L(L)","fe()","f6()","eI()","eL()","~(aC,z)","~(e,d)","d2(e)","bZ()","~(e,bZ)","eZ(e,bb,aq,d)","d(aS<d,a5>,aS<d,a5>)","~(q,d,d)","~(d,aC,q)","eH(d)","ey(d)","f9(e,bb,aq,d)","k<ax<L?>>()","f8(d)","k<ax<aR>>()","z(d)","eR(e,bb,aq,d)","k<ax<aA>>()","ec()","dV()","ea()","eQ(d)","e4()","eC(e,bb,aq,d)","z(L?)","eB(d)","fq(d)","z(E)","q(cW)","q(cQ)","@(@,q)","d(ad,ad)","~(cz)","q(bb)","~(q,F[F?])","z(aD)","D<e>(d)","z(bp,d2)","~(q,F,d{total:d?})","z(bp)","z(af)","d(d,af)","z(d,d)","P?(P)","~(q,D<+(bD,d)>)","d(d,+(bD,d))","z(cQ)","~(q,dA)","z(c0)","z(E,E)","z(z,d)","d(d,Q)","q(dl)","~(aq)","~(d,d)","~(E)","aN(aE)","z(ad)","~(d,d,d)","d(@,@)","aN(P,fm)","aN(~())","@(q)","~(dA,bZ)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.O&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.K&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.X&&A.CF(a,b.a)}}
A.B1(v.typeUniverse,JSON.parse('{"le":"dx","dD":"dx","dv":"dx","DN":"f1","hm":{"z":[],"aj":[]},"ho":{"aj":[]},"hr":{"aE":[]},"dx":{"aE":[]},"t":{"D":["1"],"M":["1"],"aE":[],"k":["1"]},"kE":{"hZ":[]},"pK":{"t":["1"],"D":["1"],"M":["1"],"aE":[],"k":["1"]},"aX":{"a4":["1"]},"e_":{"E":[],"aq":[],"aB":["aq"]},"hn":{"E":[],"d":[],"aq":[],"aB":["aq"],"aj":[]},"kF":{"E":[],"aq":[],"aB":["aq"],"aj":[]},"du":{"q":[],"aB":["q"],"qB":[],"aj":[]},"dw":{"ar":[]},"dp":{"Z":["d"],"dE":["d"],"D":["d"],"M":["d"],"k":["d"],"Z.E":"d","dE.E":"d"},"M":{"k":["1"]},"aI":{"M":["1"],"k":["1"]},"i8":{"aI":["1"],"M":["1"],"k":["1"],"aI.E":"1","k.E":"1"},"ca":{"a4":["1"]},"cV":{"k":["2"],"k.E":"2"},"cN":{"cV":["1","2"],"M":["2"],"k":["2"],"k.E":"2"},"bs":{"a4":["2"]},"au":{"aI":["2"],"M":["2"],"k":["2"],"aI.E":"2","k.E":"2"},"ap":{"k":["1"],"k.E":"1"},"d6":{"a4":["1"]},"e9":{"k":["1"],"k.E":"1"},"h8":{"e9":["1"],"M":["1"],"k":["1"],"k.E":"1"},"i9":{"a4":["1"]},"ia":{"k":["1"],"k.E":"1"},"ib":{"a4":["1"]},"ii":{"k":["1"],"k.E":"1"},"bu":{"a4":["1"]},"fp":{"Z":["1"],"dE":["1"],"D":["1"],"M":["1"],"k":["1"]},"cY":{"aI":["1"],"M":["1"],"k":["1"],"aI.E":"1","k.E":"1"},"O":{"fw":[],"c2":[]},"K":{"fx":[],"c2":[]},"X":{"fy":[],"c2":[]},"eF":{"bg":["1","2"]},"bk":{"eF":["1","2"],"bg":["1","2"]},"iA":{"k":["1"],"k.E":"1"},"iB":{"a4":["1"]},"dZ":{"eF":["1","2"],"bg":["1","2"]},"hJ":{"d4":[],"ar":[]},"kH":{"ar":[]},"lV":{"ar":[]},"iO":{"fm":[]},"dn":{"dX":[]},"jL":{"dX":[]},"jM":{"dX":[]},"lM":{"dX":[]},"lI":{"dX":[]},"ez":{"dX":[]},"ly":{"ar":[]},"c8":{"ao":["1","2"],"v4":["1","2"],"bg":["1","2"],"ao.K":"1","ao.V":"2"},"b6":{"M":["1"],"k":["1"],"k.E":"1"},"c9":{"a4":["1"]},"cT":{"M":["1"],"k":["1"],"k.E":"1"},"cS":{"a4":["1"]},"br":{"M":["aS<1,2>"],"k":["aS<1,2>"],"k.E":"aS<1,2>"},"e1":{"a4":["aS<1,2>"]},"ht":{"c8":["1","2"],"ao":["1","2"],"v4":["1","2"],"bg":["1","2"],"ao.K":"1","ao.V":"2"},"fw":{"c2":[]},"fx":{"c2":[]},"fy":{"c2":[]},"hp":{"Aq":[],"qB":[]},"iC":{"hS":[],"cv":[]},"m5":{"k":["hS"],"k.E":"hS"},"ik":{"a4":["hS"]},"lJ":{"cv":[]},"n7":{"k":["cv"],"k.E":"cv"},"n8":{"a4":["cv"]},"f1":{"aE":[],"uW":[],"aj":[]},"hE":{"aE":[]},"l_":{"uX":[],"aE":[],"aj":[]},"f2":{"bQ":["1"],"aE":[]},"hC":{"Z":["E"],"D":["E"],"bQ":["E"],"M":["E"],"aE":[],"k":["E"],"aH":["E"]},"hD":{"Z":["d"],"D":["d"],"bQ":["d"],"M":["d"],"aE":[],"k":["d"],"aH":["d"]},"l0":{"oI":[],"Z":["E"],"D":["E"],"bQ":["E"],"M":["E"],"aE":[],"k":["E"],"aH":["E"],"aj":[],"Z.E":"E","aH.E":"E"},"l1":{"oJ":[],"Z":["E"],"D":["E"],"bQ":["E"],"M":["E"],"aE":[],"k":["E"],"aH":["E"],"aj":[],"Z.E":"E","aH.E":"E"},"l2":{"p6":[],"Z":["d"],"D":["d"],"bQ":["d"],"M":["d"],"aE":[],"k":["d"],"aH":["d"],"aj":[],"Z.E":"d","aH.E":"d"},"l3":{"p7":[],"Z":["d"],"D":["d"],"bQ":["d"],"M":["d"],"aE":[],"k":["d"],"aH":["d"],"aj":[],"Z.E":"d","aH.E":"d"},"l4":{"p8":[],"Z":["d"],"D":["d"],"bQ":["d"],"M":["d"],"aE":[],"k":["d"],"aH":["d"],"aj":[],"Z.E":"d","aH.E":"d"},"l5":{"t1":[],"Z":["d"],"D":["d"],"bQ":["d"],"M":["d"],"aE":[],"k":["d"],"aH":["d"],"aj":[],"Z.E":"d","aH.E":"d"},"l6":{"t2":[],"Z":["d"],"D":["d"],"bQ":["d"],"M":["d"],"aE":[],"k":["d"],"aH":["d"],"aj":[],"Z.E":"d","aH.E":"d"},"hF":{"t3":[],"Z":["d"],"D":["d"],"bQ":["d"],"M":["d"],"aE":[],"k":["d"],"aH":["d"],"aj":[],"Z.E":"d","aH.E":"d"},"l7":{"t4":[],"Z":["d"],"D":["d"],"bQ":["d"],"M":["d"],"aE":[],"k":["d"],"aH":["d"],"aj":[],"Z.E":"d","aH.E":"d"},"mq":{"ar":[]},"iP":{"d4":[],"ar":[]},"ak":{"a4":["1"]},"S":{"k":["1"],"k.E":"1"},"cq":{"ar":[]},"im":{"mk":["1"]},"bH":{"eS":["1"]},"iU":{"xA":[]},"n_":{"iU":[],"xA":[]},"fb":{"M":["1"],"k":["1"]},"iw":{"ao":["1","2"],"bg":["1","2"]},"fu":{"iw":["1","2"],"ao":["1","2"],"bg":["1","2"],"ao.K":"1","ao.V":"2"},"ix":{"M":["1"],"k":["1"],"k.E":"1"},"iy":{"a4":["1"]},"d8":{"fk":["1"],"i1":["1"],"M":["1"],"k":["1"]},"d9":{"a4":["1"]},"Z":{"D":["1"],"M":["1"],"k":["1"]},"ao":{"bg":["1","2"]},"hv":{"fb":["1"],"aI":["1"],"M":["1"],"k":["1"],"aI.E":"1","k.E":"1"},"eg":{"a4":["1"]},"fk":{"i1":["1"],"M":["1"],"k":["1"]},"iL":{"fk":["1"],"i1":["1"],"M":["1"],"k":["1"]},"mJ":{"ao":["q","@"],"bg":["q","@"],"ao.K":"q","ao.V":"@"},"mK":{"aI":["q"],"M":["q"],"k":["q"],"aI.E":"q","k.E":"q"},"hu":{"ar":[]},"kJ":{"ar":[]},"kI":{"jP":["P?","q"]},"dT":{"aB":["dT"]},"E":{"aq":[],"aB":["aq"]},"d":{"aq":[],"aB":["aq"]},"D":{"M":["1"],"k":["1"]},"aq":{"aB":["aq"]},"hS":{"cv":[]},"i1":{"M":["1"],"k":["1"]},"q":{"aB":["q"],"qB":[]},"js":{"ar":[]},"d4":{"ar":[]},"co":{"ar":[]},"fc":{"ar":[]},"kx":{"ar":[]},"id":{"ar":[]},"lU":{"ar":[]},"e8":{"ar":[]},"jQ":{"ar":[]},"la":{"ar":[]},"i4":{"ar":[]},"n9":{"fm":[]},"cZ":{"Ay":[]},"mI":{"v9":[]},"mY":{"v9":[]},"kk":{"zE":[]},"k7":{"W":[],"a5":[]},"kb":{"W":[],"a5":[]},"ke":{"H":[]},"kT":{"H":[]},"m0":{"fd":[]},"jx":{"W":[],"a5":[]},"jG":{"W":[],"a5":[]},"jS":{"W":[],"a5":[]},"k0":{"W":[],"a5":[]},"k8":{"d0":[],"a5":[]},"k9":{"W":[],"a5":[]},"kh":{"W":[],"a5":[]},"kn":{"W":[],"a5":[]},"ko":{"W":[],"a5":[]},"ku":{"d0":[],"a5":[]},"kw":{"W":[],"a5":[]},"kM":{"W":[],"a5":[]},"kO":{"W":[],"a5":[]},"kU":{"W":[],"a5":[]},"lm":{"W":[],"a5":[]},"lA":{"W":[],"a5":[]},"lC":{"W":[],"a5":[]},"lH":{"a5":[]},"jq":{"fd":[]},"lP":{"W":[],"a5":[]},"m3":{"W":[],"a5":[]},"m4":{"W":[],"a5":[]},"jv":{"cL":[],"a5":[]},"jw":{"H":[]},"jN":{"cL":[],"a5":[]},"jO":{"H":[]},"lF":{"cL":[],"a5":[]},"lG":{"H":[]},"m1":{"d0":[],"a5":[]},"jy":{"H":[]},"jC":{"H":[]},"eT":{"H":[]},"eQ":{"H":[]},"f8":{"H":[]},"ey":{"H":[]},"eH":{"H":[]},"fe":{"H":[]},"h2":{"H":[]},"eI":{"H":[]},"eL":{"H":[]},"eB":{"H":[]},"eC":{"H":[]},"eR":{"H":[]},"f9":{"H":[]},"fq":{"H":[]},"eZ":{"H":[]},"jF":{"H":[]},"lf":{"H":[]},"eP":{"H":[]},"eO":{"H":[]},"kd":{"H":[]},"eU":{"H":[]},"ks":{"H":[]},"eV":{"H":[]},"kv":{"H":[]},"f_":{"H":[]},"kS":{"eN":[]},"kV":{"H":[]},"f6":{"H":[]},"lg":{"H":[]},"jp":{"H":[]},"fh":{"H":[]},"fg":{"H":[]},"lq":{"H":[]},"lp":{"H":[]},"lD":{"H":[]},"fn":{"H":[]},"f3":{"H":[]},"f4":{"H":[]},"mR":{"H":[]},"k_":{"c1":[],"aJ":[]},"kg":{"c1":[],"aJ":[]},"ki":{"h4":[]},"mH":{"bB":[]},"na":{"bB":[]},"aL":{"bB":[]},"il":{"bB":[]},"mQ":{"bB":[]},"bI":{"bB":[]},"md":{"e7":[]},"ag":{"e7":[]},"iI":{"e7":[]},"m6":{"e7":[]},"bz":{"bc":[]},"h_":{"bc":[]},"dq":{"bc":[]},"kp":{"bc":[]},"hh":{"bc":[]},"bY":{"bc":[]},"b8":{"bc":[]},"bT":{"bc":[]},"bF":{"bc":[]},"k6":{"c1":[],"aJ":[]},"ka":{"c1":[],"aJ":[]},"ll":{"c1":[],"aJ":[]},"lB":{"c1":[],"aJ":[]},"dl":{"ai":[],"aJ":[],"aB":["ai"]},"jr":{"ai":[],"aJ":[],"aB":["ai"]},"jz":{"ai":[],"aJ":[],"aB":["ai"]},"jA":{"ai":[],"aJ":[],"aB":["ai"]},"hA":{"ai":[],"aJ":[],"aB":["ai"]},"ju":{"ai":[],"aJ":[],"aB":["ai"]},"jB":{"ai":[],"aJ":[],"aB":["ai"]},"kL":{"ai":[],"aJ":[],"aB":["ai"]},"lE":{"ai":[],"aJ":[],"aB":["ai"]},"lK":{"ai":[],"aJ":[],"aB":["ai"]},"m2":{"ai":[],"aJ":[],"aB":["ai"]},"eD":{"bj":[]},"eE":{"bj":[]},"eK":{"bj":[]},"eX":{"bj":[]},"eY":{"bj":[]},"f7":{"bj":[]},"fi":{"bj":[]},"lx":{"bj":[]},"kf":{"H":[]},"jt":{"H":[]},"kA":{"H":[]},"ld":{"H":[]},"jZ":{"H":[]},"k1":{"H":[]},"lT":{"H":[]},"lW":{"H":[]},"kQ":{"H":[]},"lQ":{"H":[]},"lR":{"H":[]},"m_":{"H":[]},"l8":{"H":[]},"jK":{"H":[]},"lt":{"H":[]},"bp":{"dC":[]},"hU":{"c5":[]},"hg":{"c5":[]},"h1":{"c5":[]},"hM":{"c5":[]},"dS":{"c5":[]},"he":{"c5":[]},"hL":{"c5":[]},"lZ":{"ie":[]},"fa":{"ie":[]},"aK":{"dC":[]},"lY":{"k":["e"],"k.E":"e"},"aY":{"dR":[]},"lv":{"dR":[]},"cd":{"dR":[]},"dW":{"dR":[]},"at":{"bp":[],"dC":[]},"c1":{"aJ":[]},"hO":{"fd":[]},"ai":{"aJ":[],"aB":["ai"]},"cz":{"bd":["d"]},"bd":{"bd.T":"1"},"i6":{"cz":[],"bd":["d"],"bd.T":"d"},"fW":{"cz":[],"bd":["d"],"bd.T":"d"},"ih":{"cz":[],"bd":["d"],"bd.T":"d"},"hj":{"cz":[],"bd":["d"],"bd.T":"d"},"eM":{"bD":[],"k":["L"],"k.E":"L"},"bD":{"k":["L"]},"bZ":{"bD":[],"k":["L"],"k.E":"L"},"L":{"dC":[],"aB":["L"]},"ad":{"bp":[],"dC":[]},"jH":{"H":[]},"cp":{"f0":[]},"cI":{"f0":[]},"cH":{"f0":[]},"lo":{"bc":[]},"kY":{"eN":[]},"n3":{"eN":[]},"jn":{"u":["l"],"u.T":"l"},"fZ":{"aD":[]},"jT":{"aD":[]},"h5":{"aD":[]},"ha":{"aD":[]},"cO":{"aD":[]},"kq":{"aD":[]},"kt":{"aD":[]},"kB":{"aD":[]},"kR":{"aD":[]},"lb":{"aD":[]},"lN":{"aD":[]},"lS":{"aD":[]},"hd":{"u":["l"],"u.T":"l"},"h6":{"u":["l"]},"fV":{"u":["l"],"u.T":"l"},"l9":{"u":["l"],"u.T":"l"},"dY":{"u":["l"],"u.T":"l"},"hx":{"u":["l"],"u.T":"l"},"ic":{"u":["l"],"u.T":"l"},"ig":{"u":["l"],"u.T":"l"},"hi":{"u":["l"],"u.T":"l"},"k2":{"cR":[],"u":["l"],"u.T":"l"},"cR":{"u":["l"]},"kD":{"cR":[],"u":["l"],"u.T":"l"},"kW":{"cR":[],"u":["l"],"u.T":"l"},"ds":{"b5":[],"u":["l"],"u.T":"l"},"dV":{"b5":[],"u":["l"],"u.T":"l"},"hk":{"b5":[],"u":["l"],"u.T":"l"},"b5":{"u":["l"]},"io":{"da":[]},"iq":{"da":[]},"iJ":{"da":[]},"fz":{"da":[]},"e4":{"b5":[],"u":["l"],"u.T":"l"},"mV":{"b5":[],"u":["l"]},"lj":{"b5":[],"u":["l"],"u.T":"l"},"lk":{"b5":[],"u":["l"],"u.T":"l"},"i0":{"b5":[],"u":["l"],"u.T":"l"},"ea":{"b5":[],"u":["l"],"u.T":"l"},"eb":{"u":["l"]},"d7":{"u":["l"]},"iz":{"u":["l"],"u.T":"l"},"iv":{"d7":[],"u":["l"]},"mB":{"d7":[],"u":["l"],"u.T":"l"},"mA":{"d7":[],"u":["l"],"u.T":"l"},"ip":{"u":["l"],"u.T":"l"},"iN":{"u":["l"],"u.T":"l"},"iM":{"d7":[],"u":["l"],"u.T":"l"},"fs":{"u":["l"],"u.T":"l"},"ec":{"b5":[],"u":["l"],"u.T":"l"},"kl":{"u":["l"],"u.T":"l"},"hz":{"u":["l"],"u.T":"l"},"hG":{"u":["l"],"u.T":"l"},"kZ":{"eG":[]},"fj":{"eG":[]},"h3":{"u":["l"],"u.T":"l"},"hc":{"u":["l"],"u.T":"l"},"hf":{"u":["l"],"u.T":"l"},"lh":{"u":["l"]},"i_":{"u":["l"],"u.T":"l"},"hY":{"u":["l"],"u.T":"l"},"hX":{"d1":[]},"ij":{"u":["l"],"u.T":"l"},"cC":{"u":["l"]},"nh":{"cC":["aR"],"u":["l"],"u.T":"l","cC.T":"aR"},"ni":{"cC":["aA"],"u":["l"],"u.T":"l","cC.T":"aA"},"aZ":{"d1":[]},"lw":{"hT":[],"d1":[]},"hT":{"d1":[]},"aa":{"k":["1"],"k.E":"1"},"jJ":{"k":["e"],"k.E":"e"},"mi":{"a4":["e"]},"aC":{"e":[]},"mN":{"a4":["e"]},"a0":{"k":["e"],"k.E":"e"},"cX":{"a4":["e"]},"ir":{"i5":["1"]},"mo":{"ir":["1"],"i5":["1"]},"is":{"Ax":["1"]},"lz":{"cB":["l"],"cB.T":"l"},"p8":{"D":["d"],"M":["d"],"k":["d"]},"t4":{"D":["d"],"M":["d"],"k":["d"]},"t3":{"D":["d"],"M":["d"],"k":["d"]},"p6":{"D":["d"],"M":["d"],"k":["d"]},"t1":{"D":["d"],"M":["d"],"k":["d"]},"p7":{"D":["d"],"M":["d"],"k":["d"]},"t2":{"D":["d"],"M":["d"],"k":["d"]},"oI":{"D":["E"],"M":["E"],"k":["E"]},"oJ":{"D":["E"],"M":["E"],"k":["E"]}}'))
A.B0(v.typeUniverse,JSON.parse('{"M":1,"fp":1,"f2":1,"iL":1,"jR":2,"lc":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",g:"max must be in range 0 < max \u2264 2^32, was ",f:"{1} [don't|doesn't] have room for {the 2} and {2 he} drops to the ground."}
var t=(function rtii(){var s=A.av
return{fD:s("H"),lz:s("W"),fw:s("dk"),Y:s("H()"),bj:s("H(e)"),f0:s("bp"),L:s("cm"),R:s("ex"),dx:s("dl"),g_:s("bj"),eh:s("aa<h0>"),bG:s("aa<Y>"),o:s("aa<e6>"),lr:s("aa<d2>"),b:s("aa<z>"),C:s("aa<d>"),hE:s("aa<bp?>"),gy:s("aa<bj?>"),cY:s("aa<Y?>"),eJ:s("aa<z?>"),aY:s("aX<e>"),n:s("cq"),fV:s("dm"),P:s("aA"),nA:s("cr<f5>"),r:s("cr<e>"),lo:s("uW"),fW:s("uX"),cI:s("ab"),oC:s("h0"),gS:s("dp"),aZ:s("F"),jF:s("aP"),bP:s("aB<@>"),p1:s("bk<q,q>"),cq:s("bk<q,d>"),cs:s("dT"),j:s("aC"),ln:s("cL"),iZ:s("bB"),ox:s("aD"),gt:s("M<@>"),h:s("dU"),fz:s("ar"),pk:s("oI"),kI:s("oJ"),gY:s("dX"),hB:s("kj"),v:s("Y"),V:s("at"),lJ:s("cQ"),er:s("dt"),_:s("bb"),fb:s("l"),m6:s("p6"),jL:s("p7"),jx:s("p8"),D:s("bZ"),W:s("L"),j5:s("b5()"),q:s("aR"),E:s("k<L>"),bq:s("k<q>"),cX:s("k<e>"),e7:s("k<@>"),eI:s("t<a5>"),iA:s("t<H>"),p5:s("t<bp>"),o_:s("t<cm>"),c4:s("t<fY>"),dr:s("t<bj>"),da:s("t<ba>"),kt:s("t<dm>"),fO:s("t<aA>"),bZ:s("t<ab>"),bk:s("t<F>"),G:s("t<aP>"),c8:s("t<c5>"),eR:s("t<eG>"),x:s("t<aG>"),oO:s("t<eJ>"),T:s("t<aC>"),f8:s("t<bB>"),pl:s("t<aD>"),bI:s("t<k4>"),mO:s("t<Y>"),fJ:s("t<f>"),di:s("t<dt>"),o0:s("t<bb>"),f_:s("t<cR>"),I:s("t<L>"),hm:s("t<c7>"),fv:s("t<eW>"),g:s("t<D<e>>"),ic:s("t<bg<q,P>>"),kU:s("t<hB>"),lE:s("t<ad>"),a_:s("t<bc>"),w:s("t<P>"),hL:s("t<c1>"),jA:s("t<+(bD,d)>"),dF:s("t<+(q,d)>"),b9:s("t<+(e,L)>"),d3:s("t<+(L?,ba)>"),aP:s("t<+(q,d,q,b5()?)>"),bx:s("t<+(q,d,q,~())>"),hY:s("t<bS>"),gp:s("t<cb<aA>>"),aG:s("t<cb<aR>>"),d4:s("t<bE<aA>>"),mQ:s("t<bE<aR>>"),oW:s("t<af>"),iO:s("t<dz>"),jp:s("t<u<l>>"),hC:s("t<ai>"),aC:s("t<e7>"),s:s("t<q>"),H:s("t<Q>"),J:s("t<d3>"),l:s("t<e>"),cz:s("t<m7>"),lv:s("t<it>"),hw:s("t<iH>"),n9:s("t<da>"),mS:s("t<n1>"),gk:s("t<E>"),dG:s("t<@>"),t:s("t<d>"),nK:s("t<fb<f5>?>"),k5:s("t<fb<e>?>"),it:s("t<d(aA,aA)>"),m2:s("t<d(aR,aR)>"),bE:s("ho"),bp:s("aE"),dY:s("dv"),dX:s("bQ<@>"),d2:s("eW"),hl:s("kK<l>"),hA:s("D<bj>"),aH:s("D<ba>"),ev:s("D<F>"),hy:s("D<aG>"),jP:s("D<eJ>"),du:s("D<aC>"),af:s("D<Y>"),aa:s("D<L>"),eF:s("D<eW>"),ew:s("D<bg<q,P>>"),kz:s("D<bc>"),ez:s("D<P>"),m1:s("D<c1>"),p0:s("D<+(F,F)>"),bM:s("D<+(bD,d)>"),ig:s("D<+(q,d)>"),m:s("D<q>"),nB:s("D<q>(d)"),p:s("D<d3>"),A:s("D<e>"),pa:s("D<iH>"),la:s("D<da>"),gs:s("D<@>"),jX:s("D<e?>"),dW:s("D<d?>"),aI:s("c0"),cB:s("aS<d,a5>"),ea:s("bg<q,@>"),av:s("bg<@,@>"),de:s("bg<d,a5>"),gQ:s("au<q,q>"),B:s("ad"),d0:s("bc"),iV:s("aN"),K:s("P"),mh:s("bd<E>"),jo:s("fb<aq>"),ho:s("cW"),lZ:s("E_"),aK:s("+()"),lF:s("+(aC,d)"),kL:s("+(bD,d)"),lu:s("hS"),pj:s("bS"),mF:s("hU"),b_:s("ff<ex>"),gf:s("e6"),hb:s("cb<aA>"),i0:s("cb<aR>"),o9:s("bE<aA>"),o5:s("bE<aR>"),cv:s("ax<aA>"),bB:s("ax<aR>"),ax:s("ax<L?>"),m7:s("af"),jK:s("dz"),d:s("u<l>"),c3:s("dA"),M:s("ai"),gl:s("fm"),Z:s("cy"),N:s("q"),po:s("q(cv)"),gL:s("q(q)"),bW:s("d0"),fc:s("Q"),jh:s("d2"),U:s("d3"),aJ:s("aj"),do:s("d4"),hM:s("t1"),mC:s("t2"),nn:s("t3"),ha:s("t4"),cx:s("dD"),u:s("e"),e0:s("ap<aC>"),bC:s("ii<L>"),k:s("bu<L>"),gX:s("mo<aE>"),j_:s("bH<@>"),h0:s("bH<d>"),mp:s("fu<P?,P?>"),ak:s("d7"),fC:s("A"),nP:s("mW"),oc:s("S<dk>"),kX:s("S<aJ>"),mY:s("S<ab>"),oP:s("S<aP>"),cm:s("S<aG>"),kF:s("S<ax<aA>>"),jE:s("S<ax<aR>>"),d8:s("S<ax<L?>>"),e:s("S<q>"),e6:s("S<e>"),y:s("z"),ca:s("z(aC)"),iW:s("z(P)"),mN:s("z(e)"),i:s("E"),oF:s("E(d)"),z:s("@"),df:s("@()"),mq:s("@(P)"),ng:s("@(P,fm)"),jJ:s("@(e)"),S:s("d"),Q:s("d(d)"),e9:s("bp?"),aT:s("bj?"),gK:s("eS<aN>?"),n3:s("Y?"),c:s("L?"),kf:s("b5()?"),mU:s("aE?"),b8:s("D<aP>?"),fm:s("D<q>?"),lH:s("D<@>?"),dZ:s("bg<q,@>?"),aL:s("ad?"),X:s("P?"),jv:s("q?"),jt:s("q(cv)?"),n7:s("e?"),F:s("iu<@,@>?"),nF:s("mO?"),fU:s("z?"),hD:s("z(e)?"),dz:s("E?"),i6:s("E(d)?"),aV:s("d?"),lg:s("d(d)?"),ae:s("aq?"),c5:s("~()?"),lT:s("~(cn)?"),cZ:s("aq"),ef:s("~"),O:s("~()"),kc:s("~(cn)"),or:s("~(aA)"),f:s("~(L)"),mH:s("~(L,e)"),lL:s("~(ad)"),lc:s("~(q,@)"),a:s("~(d,d,Y)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.hH=J.kz.prototype
B.a=J.t.prototype
B.ce=J.hm.prototype
B.c=J.hn.prototype
B.e=J.e_.prototype
B.i=J.du.prototype
B.hK=J.dv.prototype
B.hL=J.hr.prototype
B.ct=J.le.prototype
B.bK=J.dD.prototype
B.bM=new A.dk(null,!1,!0)
B.a4=new A.dk(null,!0,!1)
B.o=new A.dk(null,!0,!0)
B.a7=new A.jo(0,"left")
B.am=new A.jo(2,"right")
B.bN=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.cQ=function() {
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
B.cV=function(getTagFallback) {
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
B.cR=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.cU=function(hooks) {
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
B.cT=function(hooks) {
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
B.cS=function(hooks) {
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
B.bO=function(hooks) { return hooks; }

B.b2=new A.kI()
B.cW=new A.la()
B.an=new A.r5()
B.cX=new A.lZ()
B.cY=new A.mI()
B.a8=new A.n_()
B.aK=new A.n9()
B.z=new A.F(0,0,0)
B.cZ=new A.F(0,64,255)
B.B=new A.F(0,64,39)
B.as=new A.F(110,32,13)
B.d=new A.F(125,119,128)
B.p=new A.F(125,144,179)
B.ag=new A.F(129,217,117)
B.K=new A.F(129,231,235)
B.A=new A.F(131,158,13)
B.k=new A.F(142,82,55)
B.a0=new A.F(15,130,148)
B.P=new A.F(173,88,219)
B.N=new A.F(179,74,4)
B.I=new A.F(189,144,108)
B.C=new A.F(193,181,199)
B.bP=new A.F(200,130,0)
B.d_=new A.F(201,166,255)
B.m=new A.F(204,35,57)
B.u=new A.F(208,195,214)
B.t=new A.F(20,19,31)
B.d0=new A.F(20,20,35)
B.D=new A.F(21,87,194)
B.bQ=new A.F(220,0,0)
B.h=new A.F(222,156,33)
B.n=new A.F(22,117,38)
B.a5=new A.F(255,122,105)
B.E=new A.F(255,238,168)
B.aL=new A.F(255,255,255)
B.F=new A.F(26,46,150)
B.aw=new A.F(36,10,5)
B.d2=new A.F(40,40,55)
B.l=new A.F(41,45,66)
B.d3=new A.F(42,36,43)
B.d4=new A.F(51,48,28)
B.ao=new A.F(56,16,125)
B.J=new A.F(64,163,229)
B.d5=new A.F(6,49,79)
B.j=new A.F(72,64,74)
B.f=new A.F(72,82,115)
B.w=new A.F(77,29,21)
B.bR=new A.F(80,80,95)
B.a1=new A.F(84,0,39)
B.O=new A.F(86,30,138)
B.af=new A.F(99,87,7)
B.at=new A.eJ(0,"exit")
B.ax=new A.eJ(1,"item")
B.r=new A.aC(0,0,0,"none")
B.L=new A.aC(0,1,5,"s")
B.M=new A.aC(0,-1,1,"n")
B.Q=new A.aC(1,0,3,"e")
B.R=new A.aC(1,1,4,"se")
B.S=new A.aC(1,-1,2,"ne")
B.T=new A.aC(-1,0,7,"w")
B.U=new A.aC(-1,1,6,"sw")
B.V=new A.aC(-1,-1,8,"nw")
B.b3=new A.dr("Archery")
B.ay=new A.dr("Body")
B.ah=new A.dr("Matter")
B.b4=new A.dr("Weaponry")
B.bS=new A.aM("awaken")
B.b5=new A.aM("bolt")
B.b6=new A.aM("cone")
B.bT=new A.aM("detect")
B.b7=new A.aM("die")
B.b8=new A.aM("frighten")
B.b9=new A.aM("gold")
B.ba=new A.aM("heal")
B.bU=new A.aM("hit")
B.bV=new A.aM("howl")
B.bW=new A.aM("knockBack")
B.bX=new A.aM("map")
B.bY=new A.aM("openBarrel")
B.bZ=new A.aM("perceive")
B.c_=new A.aM("polymorph")
B.c0=new A.aM("slash")
B.bb=new A.aM("spawn")
B.c1=new A.aM("stab")
B.bc=new A.aM("teleport")
B.bd=new A.aM("toss")
B.c2=new A.aM("wind")
B.aM=new A.Y(32,B.aL,B.z)
B.hE=new A.kr(0,"melee")
B.hF=new A.kr(2,"toss")
B.H=new A.l("cancel")
B.hG=new A.l("castSpell")
B.be=new A.l("drop")
B.ad=new A.l("e")
B.bf=new A.l("editSpells")
B.bg=new A.l("equip")
B.bh=new A.l("explore")
B.aN=new A.l("fire")
B.bi=new A.l("fireE")
B.bj=new A.l("fireN")
B.c6=new A.l("fireNE")
B.c7=new A.l("fireNW")
B.bk=new A.l("fireS")
B.c8=new A.l("fireSE")
B.c9=new A.l("fireSW")
B.bl=new A.l("fireW")
B.bm=new A.l("forfeit")
B.aO=new A.l("help")
B.bn=new A.l("heroInfo")
B.bo=new A.l("inventory")
B.X=new A.l("n")
B.aA=new A.l("ne")
B.aB=new A.l("nw")
B.a2=new A.l("ok")
B.bp=new A.l("operate")
B.bq=new A.l("pickUp")
B.br=new A.l("quit")
B.aC=new A.l("rest")
B.aP=new A.l("runE")
B.ap=new A.l("runN")
B.bs=new A.l("runNE")
B.bt=new A.l("runNW")
B.aq=new A.l("runS")
B.bu=new A.l("runSE")
B.bv=new A.l("runSW")
B.aQ=new A.l("runW")
B.Y=new A.l("s")
B.aD=new A.l("se")
B.bw=new A.l("spendExperience")
B.aE=new A.l("sw")
B.bx=new A.l("swap")
B.by=new A.l("toss")
B.bz=new A.l("use")
B.bA=new A.l("useAbility")
B.a9=new A.l("w")
B.ca=new A.l("wizard")
B.G=new A.c7("On Ground",0)
B.cb=new A.c7("Crucible",8)
B.Z=new A.c7("Equipment",0)
B.cc=new A.c7("Home",26)
B.v=new A.c7("Inventory",24)
B.cd=new A.hl(0,"normal")
B.hI=new A.hl(1,"good")
B.hJ=new A.hl(2,"great")
B.hM=new A.pM(null)
B.hN=new A.pN(null)
B.hO=s([2,12,22],t.t)
B.aF=s(["hand","hand","ring","necklace","body","cloak","helm","gloves","boots"],t.s)
B.hP=s(["Return to main menu?"],t.s)
B.aR=s([9650,94],t.t)
B.jE=new A.bS(1,"n")
B.jF=new A.bS(2,"ne")
B.jG=new A.bS(3,"e")
B.jH=new A.bS(4,"se")
B.jI=new A.bS(5,"s")
B.jJ=new A.bS(6,"sw")
B.jK=new A.bS(7,"w")
B.jL=new A.bS(8,"nw")
B.hS=s([B.jE,B.jF,B.jG,B.jH,B.jI,B.jJ,B.jK,B.jL],t.hY)
B.ai=s(["Merek","Carac","Ulric","Tybalt","Borin","Sadon","Terrowin","Rowan","Forthwind","Althalos","Fendrel","Brom","Hadrian","Crewe","Bolbec","Fenwick","Mowbray","Drake","Bryce","Leofrick","Letholdus","Lief","Barda","Rulf","Robin","Gavin","Terrin","Jarin","Cedric","Gavin","Josef","Janshai","Doran","Asher","Quinn","Xalvador","Favian","Destrian","Dain","Millicent","Alys","Ayleth","Anastas","Alianor","Cedany","Ellyn","Helewys","Malkyn","Peronell","Thea","Gloriana","Arabella","Hildegard","Brunhild","Adelaide","Beatrix","Emeline","Mirabelle","Helena","Guinevere","Isolde","Maerwynn","Catrain","Gussalen","Enndolynn","Krea","Dimia","Aleida"],t.s)
B.cf=s([0,2,5,10,18,26,38],t.t)
B.cg=s(["_____ _____                 ____                     ____","\\ . / \\  ./                 \\ .|                     \\  |"," | |   |.|                   | |                      |.|"," |.|___| |  ____  ____ ____  |.| __     ____  ___  __ | |  ___"," |::___::|  \\:::\\ \\::| \\::|  |:|/::\\   /::::\\ \\::|/::\\|:| /::/"," |x|   |x|  __ \\x| |x|  |x|  |x|  \\x\\ |x|__)x| |x| \\x||x|/x/"," |x|   |x| /xx\\|x| |x|  |x|  |x|   |x||x|\\xxx| |x|    |xxxx\\"," |X|   |X||X(__|X| |X\\__|X|  |X|__/XX||X|____  |X|    |X| \\X\\"," |X|   |X| \\XXX/\\X\\ \\XX/|XX\\/XX/\\XXX/  \\XXXX/ /XXX\\  /XXX\\ \\X\\"," |X|   |X|","_|X|   |X|_","\\XX|   |XX/"," \\X|   |X/","  \\|   |/"],t.s)
B.bB=s([B.v,B.Z],t.hm)
B.x=new A.c0(0,"message")
B.a_=new A.c0(1,"error")
B.ic=new A.c0(2,"quest")
B.cl=new A.c0(3,"gain")
B.id=new A.c0(4,"help")
B.cm=new A.c0(5,"debug")
B.hU=s([B.x,B.a_,B.ic,B.cl,B.id,B.cm],A.av("t<c0>"))
B.hV=s(["Are you sure you want to forfeit the level?","You will lose all items and experience gained in the dungeon."],t.s)
B.hW=s(["LLLLL LLLLL                 LLLL                     LLLL","ERRRE ERRRE                 ERRE                     ERRE"," ERE   ERE                   ERE                      ERE"," ERELLLERE  LLLL  LLLL LLLL  ERE LL     LLLL  LLL  LL ERE  LLL"," ERREEERRE  ERRRE ERRE ERRE  EREERRL   LRRRRL ERRLLRRLERE LRRE"," EOE   EOE  LL EOE EOE  EOE  EOE  EOL EOELLEOE EOE EOEEOELOE"," EGE   EGE LGGEEGE EGE  EGE  EGE   EGEEGEEGGGE EGE    EGGGGL"," EYE   EYEEYELLEYE EYLLLEYE  EYELLLYYEEYELLLL  EYE    EYE EYL"," EYE   EYE EYYYEEYL EYYEEYYLLYYEEYYYE  EYYYYE LYYYL  LYYYL EYL"," EYE   EYE","EEYE   EYEE","EYYE   EYYE"," EYE   EYE","  EE   EE"],t.s)
B.bC=s(["Stairs","Permanent"],t.s)
B.hX=s(["Stairs descend into darkness.","How far down shall you venture?"],t.s)
B.ch=s([B.S,B.R,B.U,B.V],t.T)
B.i6=s([],t.bZ)
B.ck=s([],t.G)
B.i3=s([],t.x)
B.bD=s([],t.I)
B.ci=s([],t.hL)
B.i4=s([],A.av("t<cb<0&>>"))
B.i5=s([],A.av("t<bE<0&>>"))
B.i2=s([],t.s)
B.i1=s([],t.l)
B.cj=s([],t.lv)
B.i0=s([],t.mS)
B.i7=s([B.G],t.hm)
B.au=s([B.M,B.Q,B.L,B.T],t.T)
B.jU=new A.af("","Items",null,0,!1)
B.k1=new A.af("b","Inventory",B.bo,66,!1)
B.k2=new A.af("u","Use item",B.bz,85,!1)
B.jY=new A.af("e","Equip / unequip",B.bg,69,!1)
B.jX=new A.af("d","Drop item",B.be,68,!1)
B.ka=new A.af("t","Throw item",B.by,84,!1)
B.jT=new A.af("g","Pick up",B.bq,71,!1)
B.kb=new A.af("x","Swap to last unequipped",B.bx,88,!1)
B.k0=new A.af("","Actions",null,0,!1)
B.jW=new A.af("Shift-H","Explore",B.bh,72,!0)
B.k7=new A.af("q","Stairs: walk to / take exit",B.br,81,!1)
B.k4=new A.af("c","Operate door, chest",B.bp,67,!1)
B.k8=new A.af("l","Rest one turn",B.a2,76,!1)
B.jV=new A.af("Shift-L","Rest until healed",B.aC,76,!0)
B.kc=new A.af("a","Use ability",B.bA,65,!1)
B.k5=new A.af("Alt-L","Fire last ability",B.aN,0,!1)
B.jS=new A.af("","Hero",null,0,!1)
B.jZ=new A.af("Shift-A","Hero info",B.bn,65,!0)
B.k_=new A.af("Shift-S","Abilities",B.bf,83,!0)
B.k9=new A.af("Shift-E","Spend experience",B.bw,69,!0)
B.k3=new A.af("","Game",null,0,!1)
B.k6=new A.af("h","Help",B.aO,72,!1)
B.jR=new A.af("Shift-F","Forfeit level",B.bm,70,!0)
B.i8=s([B.jU,B.k1,B.k2,B.jY,B.jX,B.ka,B.jT,B.kb,B.k0,B.jW,B.k7,B.k4,B.k8,B.jV,B.kc,B.k5,B.jS,B.jZ,B.k_,B.k9,B.k3,B.k6,B.jR],t.oW)
B.i9=s(["hand","ring","necklace","body","cloak","helm","gloves","boots"],t.s)
B.aS=s([15,20,24,30,40,50,60,80,100,120,150,180,240],t.t)
B.aT=s([B.l,B.f,B.p,B.u,B.I,B.k,B.as,B.w,B.E,B.h,B.N,B.ag,B.af,B.A,B.n,B.B,B.a5,B.m,B.a1,B.P,B.O,B.ao,B.K,B.J,B.D,B.F],t.bk)
B.d6=new A.aG(10,"Your luck protects you!")
B.ia=s([B.d6],t.x)
B.ib=s(["When you die, you lose everything since the last time you went up or down a set of stairs (or left a shop).","When you die, that's it. Your hero is gone forever. This is the most challenging way to play, but often the most rewarding as well."],t.s)
B.iL=new A.O(B.h,B.as)
B.iD=new A.O(B.E,B.N)
B.iy=new A.O(B.k,B.m)
B.iC=new A.O(B.m,B.w)
B.aU=s([B.iL,B.iD,B.iy,B.iC],A.av("t<+(F,F)>"))
B.ak=new A.cy("Strength",0,"strength")
B.ae=new A.cy("Agility",1,"agility")
B.ar=new A.cy("Vitality",2,"vitality")
B.a3=new A.cy("Intellect",3,"intellect")
B.aV=s([B.ak,B.ae,B.ar,B.a3],A.av("t<cy>"))
B.a6=s([B.M,B.S,B.Q,B.R,B.L,B.U,B.T,B.V],t.T)
B.ir={"Quick Reference":0,"Getting Started":1}
B.hr=new A.f(B.f,"Quick Reference")
B.c3=new A.f(B.f,"\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550")
B.b=new A.f(B.d,"")
B.fp=new A.f(B.f,"Movement")
B.az=new A.f(B.f,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500")
B.eU=new A.f(B.d,"There are two sets of direction keys:")
B.di=new A.f(B.d,"They can be combined with modifier keys like so:")
B.d9=new A.f(B.f,"Other commands")
B.hT=s([B.hr,B.c3,B.b,B.b,B.fp,B.az,B.eU,B.b,B.di,B.b,B.b,B.b,B.d9,B.az],t.fJ)
B.e6=new A.f(B.f,"Getting Started")
B.fz=new A.f(B.d,"TODO: This is all horrendously out of date.")
B.eI=new A.f(B.d,"Welcome! If you are here, you must have an adventurous")
B.fd=new A.f(B.d,"spirit. Not only because you wish to venture into")
B.dW=new A.f(B.d,"dungeons filled with beasts and untolds horrors, but")
B.hy=new A.f(B.d,"because you have the fortitude to try out a game while")
B.fb=new A.f(B.d,"it's still under development. A caution for the unwary:")
B.dT=new A.f(B.d,"The game is not done, or balanced, or complete, or")
B.hk=new A.f(B.d,"bug-free. It may destroy your savefiles or steal your")
B.f_=new A.f(B.d,"boyfriend!")
B.hC=new A.f(B.f,"Input")
B.eL=new A.f(B.d,"Hauberk is played using your keyboard, the fixie of")
B.hc=new A.f(B.d,"input devices. A lot of input is directional. Arrow keys")
B.dS=new A.f(B.d,"work for that, but don't support diagonal moves.")
B.e_=new A.f(B.d,"Instead, you're better off hitting num lock and using")
B.h6=new A.f(B.d,"the numpad on your keyboard if you have one:")
B.c4=new A.f(B.d,".---.---.---.          .---.---.---.")
B.f1=new A.f(B.d,"| 7 | 8 | 9 |          | \\ | ^ | / |")
B.c5=new A.f(B.d,"|---+---+---|          |---+---+---|")
B.h4=new A.f(B.d,"| 4 | 5 | 6 | maps to: |<- |   | ->|")
B.eA=new A.f(B.d,"| 1 | 2 | 3 |          | / | v | \\ |")
B.e3=new A.f(B.d,"'---'---'---'          '---'---'---'")
B.fm=new A.f(B.d,"If you don't have a numpad, but do have a US layout")
B.e9=new A.f(B.d,"keyboard, you can also use:")
B.dR=new A.f(B.d,"| I | O | P |          | \\ | ^ | / |")
B.dr=new A.f(B.d,"'---+---+---+          '---+---+---+")
B.eS=new A.f(B.d," | K | L | ; | maps to: |<- |   | ->|")
B.eQ=new A.f(B.d," '---+---+---+          '---+---+---+")
B.fN=new A.f(B.d,"  | , | . | / |          | / | v | \\ |")
B.fW=new A.f(B.d,"  '---'---'---'          '---'---'---'")
B.fO=new A.f(B.d,'The 5 and L buttons in the middle are "stand". They\'re')
B.f6=new A.f(B.d,'also used like an "OK" button to accept a selection on')
B.dd=new A.f(B.d,"menu screens. Escape is used to go back in menu screens")
B.fX=new A.f(B.d,"and exit dialogs.")
B.et=new A.f(B.d,"(Note that all keys are shown uppercase here but are")
B.h5=new A.f(B.d,'typed lower case. L means a lowercase "l". An')
B.dA=new A.f(B.d,"uppercase one will be Shift-L.)")
B.fD=new A.f(B.d,"At some point, I plan to add support for user-defined")
B.fl=new A.f(B.d,"keybindings, but they aren't there yet.")
B.eZ=new A.f(B.f,"A Hero Awakens")
B.de=new A.f(B.d,"To play, you need an avatar in the game world to live")
B.dH=new A.f(B.d,"(and die!) vicariously through. On the Main Menu Screen,")
B.fc=new A.f(B.d,"type N to create a new hero (or heroine, the game is")
B.fE=new A.f(B.d,"gender-blind). Enter a name, or use the default")
B.ff=new A.f(B.d,"suggested one and hit Enter.")
B.fi=new A.f(B.d,"There isn't much to specify at character creation time")
B.eK=new A.f(B.d,"right now, but eventually you'll pick a class, race, pet")
B.e8=new A.f(B.d,"peeves, favorite sandwich, etc. Currently, warrior is")
B.fY=new A.f(B.d,"the only class.")
B.fh=new A.f(B.d,"Your hero is saved in your browser's local storage. This")
B.hA=new A.f(B.d,"means you can return to the game later and your hero")
B.dq=new A.f(B.d,"will still be there. If you switch browsers, though,")
B.he=new A.f(B.d,"your heroes won't be in the new browser. Heroes are")
B.hs=new A.f(B.d,"saved every time you leave a level, or exit your home.")
B.fG=new A.f(B.d,"The game is not saved while you're in the middle of a")
B.fa=new A.f(B.d,"level! If you close your browser in the middle of")
B.dB=new A.f(B.d,"playing because your boss walked in, your progress in")
B.ex=new A.f(B.d,"the level will be lost. That's what you get for slacking")
B.ek=new A.f(B.d,"off at work.")
B.hg=new A.f(B.d,"Because the game is still in active development, new")
B.hw=new A.f(B.d,"releases may not be savefile compatible with previous")
B.h7=new A.f(B.d,"ones. Your heroes may get deleted if they don't work")
B.dU=new A.f(B.d,"with the latest code. Sorry.")
B.eG=new A.f(B.f,"The hero screen")
B.fC=new A.f(B.d,"Once you create or choose a hero, you're taken to the")
B.hm=new A.f(B.d,'hero screen. This is sort of like the "town" in other')
B.dJ=new A.f(B.d,"games. It's the safe place where you can tinker with")
B.eB=new A.f(B.d,"your gear and enter the game.")
B.e0=new A.f(B.f,"Your home")
B.hh=new A.f(B.d,"From the hero screen, press H to enter your home. This")
B.fQ=new A.f(B.d,"gives you a place where you can stash loot you don't")
B.dZ=new A.f(B.d,"want to carry around. You can also move items between")
B.dh=new A.f(B.d,"your inventory (stuff you carry in your backpack) and")
B.dj=new A.f(B.d,"your equipment (weapons and armor you are currently")
B.eX=new A.f(B.d,"wearing or holding).")
B.dQ=new A.f(B.f,"The crucible")
B.ev=new A.f(B.d,"The most interesting facet of your home is the crucible.")
B.eY=new A.f(B.d,"This is the place where you can craft\u2014make new items")
B.eO=new A.f(B.d,"from existing ones. You place items into the crucible")
B.dy=new A.f(B.d,"just like you can your home or inventory. However, it")
B.eP=new A.f(B.d,"only allows items that are part of a recipe.")
B.eh=new A.f(B.d,"A recipe is a set of items that can be turned into")
B.d7=new A.f(B.d,"something else. When you place all of the required items")
B.fk=new A.f(B.d,"for a recipe in the crucible, it will tell you. Press")
B.dM=new A.f(B.d,"Space and it will magically transmute them into")
B.hx=new A.f(B.d,"something new.")
B.h1=new A.f(B.d,"The set of recipes is still highly in flux, but try")
B.dc=new A.f(B.d,"dropping a few healing potions in there.")
B.ho=new A.f(B.f,"The Dungeon Awaits")
B.fR=new A.f(B.d,"Now that your hero is alive and ready, it's time to slay")
B.eH=new A.f(B.d,"some beasts.")
B.fg=new A.f(B.f,"Areas and levels")
B.ec=new A.f(B.d,"Unlike other roguelikes, Hauberk doesn't have a single")
B.hn=new A.f(B.d,"monolithic dungeon. Instead, there are a number of")
B.h0=new A.f(B.d,'areas. Each area has its own "flavor"\u2014it\'s own kinds')
B.fw=new A.f(B.d,"of monsters, difficulty, appearance, etc. An area is in")
B.eV=new A.f(B.d,"turn divided into a series of levels, each more")
B.dL=new A.f(B.d,"difficult than the last.")
B.du=new A.f(B.d,"From the hero screen, you can select which area and")
B.ez=new A.f(B.d,"level you want to play. You can only enter an area if")
B.fL=new A.f(B.d,"you've beaten at least one level from the previous area.")
B.dV=new A.f(B.d,"Likewise, you must beat a level to unlock the next one.")
B.ey=new A.f(B.d,"Since you just created a hero, you can only play the")
B.dC=new A.f(B.d,"first level of the Friendly Forest, so just type L to")
B.fn=new A.f(B.d,"enter it. Later, when you unlock stuff, use the")
B.hD=new A.f(B.d,"directional keys to select an area and level. You can")
B.hb=new A.f(B.d,"replay a level as many times as you want.")
B.ea=new A.f(B.f,"Quests, victory, and defeat")
B.f5=new A.f(B.d,"Every level is randomly generated (of course) and")
B.fr=new A.f(B.d,"populated with monsters and treasure. Each level also")
B.fT=new A.f(B.d,"has a quest. This is a goal you must fulfill before")
B.dE=new A.f(B.d,"you're allowed to leave the level. After completing the")
B.f8=new A.f(B.d,"quest, type Q to leave the level and return to the")
B.e7=new A.f(B.d,"safety of your home. All experience and items gained in")
B.dt=new A.f(B.d,"the level will be saved henceforth and forever more.")
B.eo=new A.f(B.d,"If you die in the level, you lose everything you gained")
B.eD=new A.f(B.d,"while in that level. It isn't quite permadeath, but it's")
B.ed=new A.f(B.d,"pretty damn annoying to lose that experience and")
B.dl=new A.f(B.d,"whatever hot loot you picked up.")
B.h8=new A.f(B.d,"If you want to give up and leave the level before")
B.dY=new A.f(B.d,"completing the quest, you can forfeit by typing Shift-F.")
B.fo=new A.f(B.d,"Like dying, doing this sacrifices anything you've gained")
B.ei=new A.f(B.d,"since entering the level.")
B.dK=new A.f(B.f,"Navigating the level")
B.es=new A.f(B.d,"Your avatar in the game is represented by a @. Floor")
B.da=new A.f(B.d,"tiles are usually ., and impassible barriers and walls")
B.hi=new A.f(B.d,"look like #, or other hopefully obvious solid looking")
B.f7=new A.f(B.d,"tiles.")
B.ht=new A.f(B.d,"You walk around using the directional keys. Pressing the")
B.er=new A.f(B.d,"stand key (5 or L) makes you stand still for a turn.")
B.d8=new A.f(B.d,"That's useful to let a monster take a step closer so you")
B.eE=new A.f(B.d,"can attack the next turn.")
B.ha=new A.f(B.d,"Hold down Shift and press a direction to run in that")
B.dN=new A.f(B.d,"direction. You will repeatedly walk in that direction")
B.ej=new A.f(B.d,"until disturbed by reaching an obstacle, a fork in the")
B.f4=new A.f(B.d,"path, or seeing a monster. When not in combat, running")
B.eC=new A.f(B.d,"is the most user-friendly way to get from point A to")
B.dO=new A.f(B.d,"point B.")
B.f2=new A.f(B.d,"Closed doors look like +. You can open them (which takes")
B.db=new A.f(B.d,"a turn) by simply walking into them. An open door looks")
B.dg=new A.f(B.d,"like -. You can close a door by pressing C while")
B.hz=new A.f(B.d,"standing next to one.")
B.h2=new A.f(B.f,"Combat!")
B.en=new A.f(B.d,"Monsters in the game are represented using letters. You")
B.ee=new A.f(B.d,"attack by trying to walk into the tile where a monster")
B.hj=new A.f(B.d,"is standing. On the right side of the screen you can see")
B.fx=new A.f(B.d,"your health along with some of the nearby monsters. Try")
B.fH=new A.f(B.d,"to get theirs to zero before yours does!")
B.fB=new A.f(B.d,"When you kill a monster, you are granted some experience")
B.fS=new A.f(B.d,"points. Earn enough of those, and your hero will")
B.dX=new A.f(B.d,"increase in experience level. That increases your")
B.h9=new A.f(B.d,"maximum health and does some other good stuff.")
B.ft=new A.f(B.d,"Meanwhile, monsters will be attacking you. You are")
B.eT=new A.f(B.d,"outnumbered, so try not to let them surround you.")
B.dP=new A.f(B.d,"Attacking from the safety of a narrow corridor helps.")
B.dm=new A.f(B.f,"Exploring")
B.em=new A.f(B.d,"Shift-H explores: the hero walks to the nearest unexplored")
B.hq=new A.f(B.d,"spot, one step per turn, opening doors on the way. It")
B.fM=new A.f(B.d,"stops when a monster or a new item comes into view, on")
B.dz=new A.f(B.d,"any new message, or when you press a key.")
B.hB=new A.f(B.d,"Q on the stairs leaves the level. Anywhere else, Q walks")
B.dx=new A.f(B.d,"to the nearest known stairs (in town: the dungeon")
B.e1=new A.f(B.d,"entrance) and stops there; press Q again to take them.")
B.eb=new A.f(B.f,"Resting")
B.hd=new A.f(B.d,"After a skirmish, your hero has likely lost some health.")
B.dF=new A.f(B.d,"That can be regained by imbibing magic potions, but")
B.fF=new A.f(B.d,"those are in short supply. Instead, they'll have to")
B.e5=new A.f(B.d,"rest.")
B.fP=new A.f(B.d,"Resting requires food, which you automatically discover")
B.fA=new A.f(B.d,"as you explore the level. Every turn that you stand")
B.fu=new A.f(B.d,"still consumes a bit of food and regains a point of")
B.fV=new A.f(B.d,"health. Instead of mashing down the stand key, if you")
B.eM=new A.f(B.d,"press Shift-Stand, you will repeatedly rest until you")
B.dn=new A.f(B.d,"run out of food, fully regain their health, or are")
B.fv=new A.f(B.d,"disturbed by a nearby monster.")
B.h3=new A.f(B.d,"If you don't have any food, resting accomplishes")
B.fe=new A.f(B.d,"nothing. To get food, you must explore new parts of the")
B.dG=new A.f(B.d,"level. No resting on your laurels or wandering through")
B.f0=new A.f(B.d,"familiar passages!")
B.fj=new A.f(B.f,"Loot!")
B.eg=new A.f(B.d,"While the ridding the world of an evil beast is its own")
B.dp=new A.f(B.d,"reward, it's not the only reward. Many monsters drop")
B.df=new A.f(B.d,"treasure, and you'll find some laying on the ground as")
B.el=new A.f(B.d,"well. Different levels and monsters tend to drop")
B.hp=new A.f(B.d,"different stuff, so explore (and murder) widely.")
B.eW=new A.f(B.d,"Items are represented using punctuation characters.")
B.hu=new A.f(B.d,"Potions are !, scrolls are ?, etc. You can pick up an")
B.fZ=new A.f(B.d,"item off the ground by standing on top of it and")
B.dw=new A.f(B.d,'pressing G, for "get".')
B.f9=new A.f(B.d,"If there are multiple items in the same tile, that picks")
B.eF=new A.f(B.d,"up the top one. Press G repeatedly to pick them all up.")
B.hv=new A.f(B.d,"Eventually, I'll add a menu to let you pick which one")
B.fJ=new A.f(B.d,"you want.")
B.dD=new A.f(B.d,"Many items can be used. Potions can be quaffed, scrolls")
B.e4=new A.f(B.d,"read, wands... uh... waved around? To use an item, press")
B.fq=new A.f(B.d,"U to bring up the item selection screen. In addition to")
B.fU=new A.f(B.d,"your inventory and equipment, you can also use items")
B.fI=new A.f(B.d,"that are laying on the ground under you. You don't have")
B.eu=new A.f(B.d,"to pick them up first. (And not picking them up first")
B.ef=new A.f(B.d,"saves you a turn. Useful in the heat of battle!)")
B.ds=new A.f(B.d,"Pressing Tab on the item screen cycles through these")
B.eJ=new A.f(B.d,"three views.")
B.eN=new A.f(B.d,"Type the letter next to an item to use it. If the item")
B.fK=new A.f(B.d,'has an active "use" like a potion, this will perform')
B.eR=new A.f(B.d,'it. "Using" a piece of equipment equips it. Using a')
B.h_=new A.f(B.d,"piece of equipment that you're already wearing unequips")
B.eq=new A.f(B.d,"it. Remember that equipment must be worn to get any")
B.hl=new A.f(B.d,"advantage! Carrying around a sword in your backpack")
B.dI=new A.f(B.d,"doesn't do you much good.")
B.fs=new A.f(B.d,"If you want to discard an item, press D, then select the")
B.dv=new A.f(B.d,"item. It will drop onto the ground. It may gaze back at")
B.ep=new A.f(B.d,"you forlornly, wondering why it wasn't good enough and")
B.hf=new A.f(B.d,"why you love the other items in your inventory more.")
B.e2=new A.f(B.d,"A more entertaining and often more useful way to rid")
B.f3=new A.f(B.d,"yourself of an item is to throw it, which is done by")
B.fy=new A.f(B.d,"pressing T. Throwing an item at a monster will often")
B.dk=new A.f(B.d,"harm it, and some items do fun and exciting things like")
B.ew=new A.f(B.d,"explode when lobbed at an unsuspecting beastie.")
B.hR=s([B.e6,B.c3,B.fz,B.b,B.b,B.b,B.eI,B.b,B.fd,B.b,B.dW,B.b,B.hy,B.b,B.fb,B.b,B.dT,B.b,B.hk,B.b,B.f_,B.b,B.b,B.b,B.hC,B.az,B.eL,B.b,B.hc,B.b,B.dS,B.b,B.e_,B.b,B.h6,B.b,B.b,B.b,B.c4,B.f1,B.c5,B.h4,B.c5,B.eA,B.e3,B.b,B.b,B.fm,B.b,B.e9,B.b,B.b,B.b,B.c4,B.dR,B.dr,B.eS,B.eQ,B.fN,B.fW,B.b,B.b,B.fO,B.b,B.f6,B.b,B.dd,B.b,B.fX,B.b,B.b,B.b,B.et,B.b,B.h5,B.b,B.dA,B.b,B.b,B.b,B.fD,B.b,B.fl,B.b,B.b,B.b,B.eZ,B.az,B.de,B.b,B.dH,B.b,B.fc,B.b,B.fE,B.b,B.ff,B.b,B.b,B.b,B.fi,B.b,B.eK,B.b,B.e8,B.b,B.fY,B.b,B.b,B.b,B.fh,B.b,B.hA,B.b,B.dq,B.b,B.he,B.b,B.hs,B.b,B.b,B.b,B.fG,B.b,B.fa,B.b,B.dB,B.b,B.ex,B.b,B.ek,B.b,B.b,B.b,B.hg,B.b,B.hw,B.b,B.h7,B.b,B.dU,B.b,B.b,B.b,B.eG,B.b,B.fC,B.b,B.hm,B.b,B.dJ,B.b,B.eB,B.b,B.b,B.b,B.e0,B.b,B.hh,B.b,B.fQ,B.b,B.dZ,B.b,B.dh,B.b,B.dj,B.b,B.eX,B.b,B.b,B.b,B.dQ,B.b,B.ev,B.b,B.eY,B.b,B.eO,B.b,B.dy,B.b,B.eP,B.b,B.b,B.b,B.eh,B.b,B.d7,B.b,B.fk,B.b,B.dM,B.b,B.hx,B.b,B.b,B.b,B.h1,B.b,B.dc,B.b,B.b,B.b,B.ho,B.az,B.fR,B.b,B.eH,B.b,B.b,B.b,B.fg,B.b,B.ec,B.b,B.hn,B.b,B.h0,B.b,B.fw,B.b,B.eV,B.b,B.dL,B.b,B.b,B.b,B.du,B.b,B.ez,B.b,B.fL,B.b,B.dV,B.b,B.b,B.b,B.ey,B.b,B.dC,B.b,B.fn,B.b,B.hD,B.b,B.hb,B.b,B.b,B.b,B.ea,B.b,B.f5,B.b,B.fr,B.b,B.fT,B.b,B.dE,B.b,B.f8,B.b,B.e7,B.b,B.dt,B.b,B.b,B.b,B.eo,B.b,B.eD,B.b,B.ed,B.b,B.dl,B.b,B.b,B.b,B.h8,B.b,B.dY,B.b,B.fo,B.b,B.ei,B.b,B.b,B.b,B.dK,B.b,B.es,B.b,B.da,B.b,B.hi,B.b,B.f7,B.b,B.b,B.b,B.ht,B.b,B.er,B.b,B.d8,B.b,B.eE,B.b,B.b,B.b,B.ha,B.b,B.dN,B.b,B.ej,B.b,B.f4,B.b,B.eC,B.b,B.dO,B.b,B.b,B.b,B.f2,B.b,B.db,B.b,B.dg,B.b,B.hz,B.b,B.b,B.b,B.h2,B.b,B.en,B.b,B.ee,B.b,B.hj,B.b,B.fx,B.b,B.fH,B.b,B.b,B.b,B.fB,B.b,B.fS,B.b,B.dX,B.b,B.h9,B.b,B.b,B.b,B.ft,B.b,B.eT,B.b,B.dP,B.b,B.b,B.b,B.dm,B.b,B.em,B.b,B.hq,B.b,B.fM,B.b,B.dz,B.b,B.hB,B.b,B.dx,B.b,B.e1,B.b,B.b,B.b,B.eb,B.b,B.hd,B.b,B.dF,B.b,B.fF,B.b,B.e5,B.b,B.b,B.b,B.fP,B.b,B.fA,B.b,B.fu,B.b,B.fV,B.b,B.eM,B.b,B.dn,B.b,B.fv,B.b,B.b,B.b,B.h3,B.b,B.fe,B.b,B.dG,B.b,B.f0,B.b,B.b,B.b,B.fj,B.b,B.eg,B.b,B.dp,B.b,B.df,B.b,B.el,B.b,B.hp,B.b,B.b,B.b,B.eW,B.b,B.hu,B.b,B.fZ,B.b,B.dw,B.b,B.b,B.b,B.f9,B.b,B.eF,B.b,B.hv,B.b,B.fJ,B.b,B.b,B.b,B.dD,B.b,B.e4,B.b,B.fq,B.b,B.fU,B.b,B.fI,B.b,B.eu,B.b,B.ef,B.b,B.ds,B.b,B.eJ,B.b,B.b,B.b,B.eN,B.b,B.fK,B.b,B.eR,B.b,B.h_,B.b,B.eq,B.b,B.hl,B.b,B.dI,B.b,B.b,B.b,B.fs,B.b,B.dv,B.b,B.ep,B.b,B.hf,B.b,B.b,B.b,B.e2,B.b,B.f3,B.b,B.fy,B.b,B.dk,B.b,B.ew,B.b],t.fJ)
B.aW=new A.bk(B.ir,[B.hT,B.hR],A.av("bk<q,D<f>>"))
B.il={Y:0,N:1,"`":2}
B.cn=new A.bk(B.il,["Yes","No","No"],t.p1)
B.aG=new A.e3(0,"clumsy")
B.aa=new A.e3(1,"insult")
B.cq=new A.e3(2,"screech")
B.cr=new A.e3(3,"hiss")
B.i_=s(["{1} forget[s] what {1 he} was doing.","{1} lurch[es] around.","{1} stumble[s] awkwardly.","{1} trip[s] over {1 his} own feet!"],t.s)
B.hZ=s(["{1} insult[s] {2 his} mother!","{1} jeer[s] at {2}!","{1} mock[s] {2} mercilessly!","{1} make[s] faces at {2}!","{1} laugh[s] at {2}!","{1} sneer[s] at {2}!"],t.s)
B.hQ=s(["{1} screech[es] at {2}!","{1} taunt[s] {2}!","{1} cackle[s] at {2}!"],t.s)
B.hY=s(["{1} hiss[es] at {2}!","{1} spit[s] at {2}!"],t.s)
B.ie=new A.dZ([B.aG,B.i_,B.aa,B.hZ,B.cq,B.hQ,B.cr,B.hY],A.av("dZ<e3,D<q>>"))
B.iu={"little brown spider":0,"gray spider":1,spiderling:2,"giant spider":3,"brown bat":4,"giant bat":5,"cave bat":6,"mangy cur":7,"wild dog":8,mongrel:9,wolf:10,varg:11,Skoll:12,Hati:13,Fenrir:14,"juvenile forest dragon":15,"juvenile brown dragon":16,"juvenile blue dragon":17,"juvenile white dragon":18,"juvenile purple dragon":19,"juvenile green dragon":20,"juvenile silver dragon":21,"juvenile red dragon":22,"juvenile gold dragon":23,"juvenile black dragon":24,"juvenile ethereal dragon":25,"forest dragon":26,"brown dragon":27,"blue dragon":28,"white dragon":29,"purple dragon":30,"green dragon":31,"silver dragon":32,"red dragon":33,"gold dragon":34,"black dragon":35,"ethereal dragon":36,"lazy eye":37,"mad eye":38,"floating eye":39,"baleful eye":40,"malevolent eye":41,"murderous eye":42,watcher:43,"stray cat":44,"goblin peon":45,"goblin archer":46,"goblin fighter":47,"goblin warrior":48,"goblin mage":49,"goblin ranger":50,"Erlkonig, the Goblin Prince":51,"giant cockroach":52,"giant centipede":53,firefly:54,"green jelly":55,"green slime":56,"frosty slime":57,"mud slime":58,"smoking slime":59,"sparkling slime":60,"caustic slime":61,"virulent slime":62,ectoplasm:63,"scurrilous imp":64,"vexing imp":65,kobold:66,"kobold shaman":67,"kobold trickster":68,"kobold priest":69,"imp incanter":70,"imp warlock":71,Feng:72,"lizard guard":73,"lizard protector":74,"armored lizard":75,"scaled guardian":76,saurian:77,orc:78,"orc brute":79,"orc soldier":80,"orc chieftain":81,"Harold the Misfortunate":82,"hapless adventurer":83,"simpering knave":84,"decrepit mage":85,"unlucky ranger":86,"drunken priest":87,mouse:88,"sewer rat":89,"sickly rat":90,"plague rat":91,"giant rat":92,"The Rat King":93,"giant slug":94,"suppurating slug":95,"acidic slug":96,choker:97,nightshade:98,creeper:99,strangler:100,"blood worm":101,"fire worm":102,"giant earthworm":103,"giant cave worm":104,"bony hand":105,"bony arm":106,"severed skull":107,"decapitated skeleton":108,"armless skeleton":109,"one-armed skeleton":110,skeleton:111,"skeleton warrior":112,"robed skeleton":113,crow:114,raven:115,"elder forest dragon":116,"elder brown dragon":117,"elder blue dragon":118,"elder white dragon":119,"elder purple dragon":120,"elder green dragon":121,"elder silver dragon":122,"elder red dragon":123,"elder gold dragon":124,"elder black dragon":125,"elder ethereal dragon":126,"ancient forest dragon":127,"ancient brown dragon":128,"ancient blue dragon":129,"ancient white dragon":130,"ancient purple dragon":131,"ancient green dragon":132,"ancient silver dragon":133,"ancient red dragon":134,"ancient gold dragon":135,"ancient black dragon":136,"ancient ethereal dragon":137,"forest sprite":138,"house sprite":139,"mischievous sprite":140,Tink:141,harpy:142,griffin:143,"Nameless Unmaker":144,frog:145,"juvenile salamander":146,salamander:147,"three-headed salamander":148,"water snake":149,"brown snake":150,"cave snake":151}
B.co=new A.bk(B.iu,[161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,198,199,200,200,199,201,202,203,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,187,188,189,190,191,192,193,194,195,196,197,187,188,189,190,191,192,193,194,195,196,197,272,273,274,275,276,277,278,279,280,281,282,283,284,285],t.cq)
B.im={L:0,E:1,R:2,O:3,G:4,Y:5}
B.d1=new A.F(232,200,21)
B.ig=new A.bk(B.im,[B.d,B.j,B.m,B.N,B.h,B.d1],A.av("bk<q,F>"))
B.ih=new A.dZ([9786,1,9787,2,9829,3,9830,4,9827,5,9824,6,8226,7,9688,8,9675,9,9689,10,9794,11,9792,12,9834,13,9835,14,9788,15,9658,16,9668,17,8597,18,8252,19,182,20,167,21,9644,22,8616,23,8593,24,8595,25,8594,26,8592,27,8735,28,8596,29,9650,30,9660,31,8962,127,199,128,252,129,233,130,226,131,228,132,224,133,229,134,231,135,234,136,235,137,232,138,239,139,238,140,236,141,196,142,197,143,201,144,230,145,198,146,244,147,246,148,242,149,251,150,249,151,255,152,214,153,220,154,162,155,163,156,165,157,8359,158,402,159,225,160,237,161,243,162,250,163,241,164,209,165,170,166,186,167,191,168,8976,169,172,170,189,171,188,172,161,173,171,174,187,175,9617,176,9618,177,9619,178,9474,179,9508,180,9569,181,9570,182,9558,183,9557,184,9571,185,9553,186,9559,187,9565,188,9564,189,9563,190,9488,191,9492,192,9524,193,9516,194,9500,195,9472,196,9532,197,9566,198,9567,199,9562,200,9556,201,9577,202,9574,203,9568,204,9552,205,9580,206,9575,207,9576,208,9572,209,9573,210,9561,211,9560,212,9554,213,9555,214,9579,215,9578,216,9496,217,9484,218,9608,219,9604,220,9612,221,9616,222,9600,223,945,224,223,225,915,226,960,227,931,228,963,229,181,230,964,231,934,232,920,233,937,234,948,235,8734,236,966,237,949,238,8745,239,8801,240,177,241,8805,242,8804,243,8992,244,8993,245,247,246,8776,247,176,248,8729,249,183,250,8730,251,8319,252,178,253,9632,254],A.av("dZ<d,d>"))
B.io={}
B.cp=new A.bk(B.io,[],t.p1)
B.iq={Fae:0,Dwarf:1,Elf:2,Gnome:3,Human:4}
B.ii=new A.bk(B.iq,[441,442,443,444,445],t.cq)
B.ip={Rock:0,Skull:1,"Copper Coin":2,"Bronze Coin":3,"Silver Coin":4,"Electrum Coin":5,"Gold Coin":6,"Platinum Coin":7,"Copper Bar":8,"Bronze Bar":9,"Silver Bar":10,"Electrum Bar":11,"Gold Bar":12,"Platinum Bar":13,"Amethyst Shard":14,"Uncut Amethyst":15,"Faceted Amethyst":16,"Sapphire Shard":17,"Uncut Sapphire":18,"Faceted Sapphire":19,"Emerald Shard":20,"Uncut Emerald":21,"Faceted Emerald":22,"Ruby Shard":23,"Uncut Ruby":24,"Faceted Ruby":25,"Diamond Shard":26,"Uncut Diamond":27,"Faceted Diamond":28,"Insect Wing":29,Feather:30,"Stale Biscuit":31,"Loaf of Bread":32,"Chunk of Meat":33,"Piece of Jerky":34,"Tallow Candle":35,"Wax Candle":36,"Oil Lamp":37,Torch:38,Lantern:39,"Soothing Balm":40,"Mending Salve":41,"Healing Poultice":42,"Potion of Amelioration":43,"Potion of Rejuvenation":44,Antidote:45,"Salve of Heat Resistance":46,"Salve of Cold Resistance":47,"Salve of Light Resistance":48,"Salve of Wind Resistance":49,"Salve of Lightning Resistance":50,"Salve of Darkness Resistance":51,"Salve of Earth Resistance":52,"Salve of Water Resistance":53,"Salve of Acid Resistance":54,"Salve of Poison Resistance":55,"Salve of Death Resistance":56,"Potion of Quickness":57,"Potion of Alacrity":58,"Potion of Speed":59,"Bottled Wind":60,"Bottled Ice":61,"Bottled Fire":62,"Bottled Ocean":63,"Bottled Poison":64,"Bottled Earth":65,"Bottled Lightning":66,"Bottled Acid":67,"Bottled Shadow":68,"Bottled Radiance":69,"Bottled Spirit":70,"Scroll of Sidestepping":71,"Scroll of Phasing":72,"Scroll of Teleportation":73,"Scroll of Disappearing":74,"Scroll of Find Nearby Escape":75,"Scroll of Locate Escape":76,"Scroll of Find Nearby Items":77,"Scroll of Item Detection":78,"Scroll of Detect Nearby":79,"Scroll of Detection":80,"Scroll of Sense Nearby Monsters":81,"Scroll of Sense Monsters":82,"Scroll of Perceive Monsters":83,"Scroll of Telepathy":84,"Adventurer's Map":85,"Explorer's Map":86,"Cartographer's Map":87,"Wizard's Map":88,"Ring of Wisdom":89,Stick:90,Cudgel:91,Club:92,"Walking Stick":93,Staff:94,Quarterstaff:95,Hammer:96,Mattock:97,"War Hammer":98,Morningstar:99,Mace:100,Whip:101,"Chain Whip":102,Flail:103,Knife:104,Dagger:105,Dirk:106,Stiletto:107,Rondel:108,Baselard:109,Mercygiver:110,Rapier:111,Shortsword:112,Scimitar:113,Cutlass:114,Falchion:115,"Pointed Stick":116,Spear:117,Angon:118,Lance:119,Partisan:120,Hatchet:121,Axe:122,Valaska:123,Battleaxe:124,"Short Bow":125,Longbow:126,Crossbow:127,"Leather Cap":128,"Chainmail Coif":129,"Steel Cap":130,"Visored Helm":131,"Great Helm":132,Robe:133,"Lined Robe":134,"Cloth Shirt":135,"Leather Shirt":136,Jerkin:137,"Leather Armor":138,"Padded Armor":139,"Studded Armor":140,"Mail Hauberk":141,"Scale Mail":142,"Plated Mail":143,Brigandine:144,Breastplate:145,"Plate Armor":146,Cloak:147,"Fur Cloak":148,"Spidersilk Cloak":149,Gloves:150,Bracers:151,Gauntlets:152,Buckler:153,"Leather Shield":154,Targe:155,Roundel:156,"Steel Shield":157,"Kite Shield":158,"Lantern Shield":159,Sandals:160,Shoes:161,Boots:162,"Plated Boots":163,Greaves:164}
B.bE=new A.bk(B.ip,[286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,300,301,302,302,303,304,304,305,306,306,307,308,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,372,373,373,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,399,400,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440],t.cq)
B.is={"A-Z Del":0}
B.ij=new A.bk(B.is,["Edit name"],t.p1)
B.it={OK:0,"\u2195\u2194":1,"`":2}
B.ik=new A.bk(B.it,["Enter dungeon","Change depth","Cancel"],t.p1)
B.W=new A.hI(0,"normal")
B.cs=new A.hI(1,"proper")
B.aH=new A.hI(3,"mass")
B.cu=new A.e5("you","you","your",0,"you")
B.aI=new A.e5("he","him","his",2,"he")
B.iv=new A.e5("they","them","their",4,"they")
B.cv=new A.e5("she","her","her",1,"she")
B.y=new A.e5("it","it","its",3,"it")
B.cw=new A.O(10,15)
B.cx=new A.O(16,21)
B.iw=new A.O("spear","Spear Mastery")
B.ix=new A.O(1,1)
B.iz=new A.O(5,8)
B.cy=new A.O(6,9)
B.iA=new A.O(7,10)
B.iB=new A.O(9,16)
B.iE=new A.O(0.002,0.8)
B.iF=new A.O("whip","Whip Mastery")
B.iG=new A.O("Name","Enter a name for your new hero.")
B.iH=new A.O(B.C,B.d)
B.iI=new A.O(B.j,B.j)
B.iJ=new A.O("dagger","Knife Fighting")
B.iK=new A.O("club","Bludgeoning")
B.iM=new A.O("axe","Axe Mastery")
B.iN=new A.O("You haven't learned this skill.",B.j)
B.iO=new A.O(B.h,B.C)
B.iP=new A.O("sword","Swordfighting")
B.iQ=new A.O(0.1,1)
B.cz=new A.K(0,0,0)
B.cA=new A.K(0,0,446)
B.cB=new A.K(0,0,447)
B.iR=new A.K(0,0,457)
B.iS=new A.K(0,0,458)
B.bF=new A.K(0,17,0)
B.iT=new A.K(0,33,0)
B.iU=new A.K(0,33,470)
B.iV=new A.K(0,49,0)
B.iW=new A.K(0,65,0)
B.iX=new A.K(113,0,0)
B.iY=new A.K(129,0,0)
B.iZ=new A.K(129,0,459)
B.j_=new A.K(129,0,481)
B.j0=new A.K(129,0,482)
B.j1=new A.K(129,0,483)
B.j2=new A.K(129,0,484)
B.j3=new A.K(129,0,485)
B.j4=new A.K(129,0,486)
B.j5=new A.K(129,0,487)
B.j6=new A.K(129,0,488)
B.bG=new A.K(129,0,489)
B.j7=new A.K(145,0,0)
B.j8=new A.K(145,0,460)
B.j9=new A.K(145,0,461)
B.ja=new A.K(145,0,462)
B.jb=new A.K(145,0,463)
B.aJ=new A.K(1,0,0)
B.jc=new A.K(1,0,448)
B.jd=new A.K(1,0,449)
B.je=new A.K(1,0,450)
B.jf=new A.K(1,0,451)
B.jg=new A.K(1,0,452)
B.jh=new A.K(1,0,453)
B.ji=new A.K(1,0,455)
B.jj=new A.K(1,0,456)
B.jk=new A.K(1,0,464)
B.jl=new A.K(1,0,465)
B.jm=new A.K(1,0,466)
B.jn=new A.K(1,0,467)
B.ab=new A.K(1,0,468)
B.jo=new A.K(1,0,469)
B.jp=new A.K(1,0,471)
B.jq=new A.K(1,0,472)
B.jr=new A.K(1,0,473)
B.js=new A.K(1,0,474)
B.jt=new A.K(1,0,475)
B.ju=new A.K(1,0,476)
B.jv=new A.K(1,0,477)
B.jw=new A.K(1,0,478)
B.jx=new A.K(1,0,479)
B.jy=new A.K(1,0,480)
B.jz=new A.K(81,0,0)
B.jA=new A.K(97,0,0)
B.jB=new A.K(97,0,454)
B.jC=new A.X(["i",73,"Inspect",null])
B.al=new A.e(0,0)
B.jD=new A.a0(B.al,B.al)
B.cC=new A.bS(0,"everywhere")
B.bH=new A.hV(0,"rectangular")
B.jM=new A.hV(1,"octagonal")
B.jN=new A.hV(2,"any")
B.jO=new A.hW(0,"small")
B.jP=new A.hW(1,"medium")
B.jQ=new A.hW(2,"large")
B.kd=new A.fl(0,"anywhere")
B.aj=new A.fl(1,"open")
B.aX=new A.fl(2,"wall")
B.bI=new A.fl(3,"corner")
B.ke=new A.dB(0,"none")
B.ac=new A.dB(1,"mirrorHorizontal")
B.kf=new A.dB(2,"mirrorVertical")
B.av=new A.dB(3,"mirrorBoth")
B.q=new A.dB(4,"rotate90")
B.kg=new A.dB(5,"rotate180")
B.kh=new A.rQ(1,"oldest")
B.cI=new A.bG("shop 1")
B.cH=new A.bG("shop 2")
B.cG=new A.bG("shop 3")
B.cF=new A.bG("shop 4")
B.cE=new A.bG("shop 5")
B.cD=new A.bG("shop 6")
B.cL=new A.bG("shop 7")
B.cK=new A.bG("shop 8")
B.cJ=new A.bG("shop 9")
B.bJ=new A.bG("dungeon")
B.aY=new A.bG("exit")
B.cM=new A.bG("home")
B.ki=A.ci("uW")
B.kj=A.ci("uX")
B.kk=A.ci("oI")
B.kl=A.ci("oJ")
B.km=A.ci("p6")
B.kn=A.ci("p7")
B.ko=A.ci("p8")
B.kp=A.ci("P")
B.kq=A.ci("t1")
B.kr=A.ci("t2")
B.ks=A.ci("t3")
B.kt=A.ci("t4")
B.aZ=new A.e(0,1)
B.b_=new A.e(0,-1)
B.b0=new A.e(1,0)
B.b1=new A.e(-1,0)
B.cN=new A.fr(0,"uninitialized")
B.bL=new A.fr(1,"stats")
B.cO=new A.fr(2,"resistances")
B.cP=new A.fr(3,"all")})();(function staticFields(){$.tv=null
$.bX=A.a([],t.w)
$.xh=null
$.qF=0
$.v8=A.BG()
$.wJ=null
$.wI=null
$.yl=null
$.yd=null
$.yu=null
$.u2=null
$.ub=null
$.vG=null
$.tC=A.a([],A.av("t<D<P>?>"))
$.fD=null
$.iW=null
$.iX=null
$.vx=!1
$.aV=B.a8
$.cE=null
$.xW=null
$.cD=A.ed()
$.cg=null
$.BJ=A.a(["\u250c\u2510","\u255b\u2558","\u255e\u2561"],t.s)
$.BK=A.a(["\u250c\u2558","\u2510\u255b","\u2500\u2550"],t.s)
$.BU=A.a(["\u250c\u2510\u255b\u2558","\u2500\u2502\u2550\u2502"],t.s)
$.b_=A.ed()
$.h=null
$.bh=null
$.iV=null
$.x0=0
$.wC=0
$.hR=A.a([],A.av("t<lr>"))
$.i2=A.C(t.N,t.c3)
$.cf=null
$.al=A.ed()
$.nX=!1
$.nY=!1
$.uZ=!1
$.jV=A.C(t.B,A.av("fv"))
$.nS=null
$.vN=null
$.bm=0
$.eA=A.a([],A.av("t<jE>"))
$.wV=function(){var s=t.l
return A.a([A.a([B.b_,B.b0],s),A.a([B.b0,B.b_],s),A.a([B.b0,B.aZ],s),A.a([B.aZ,B.b0],s),A.a([B.aZ,B.b1],s),A.a([B.b1,B.aZ],s),A.a([B.b1,B.b_],s),A.a([B.b_,B.b1],s)],t.g)}()
$.wN=A.a([B.u,B.E,B.h,B.af,B.d4],t.bk)
$.vi=A.a([B.K,B.J,B.P,B.u],t.bk)
$.bC=A.a([],t.f_)
$.no=0
$.yw=!1
$.ae=A.a([],t.w)
$.yx=null
$.j0=A.a([],t.w)
$.y_=-1
$.vy=null
$.dH=A.a([],A.av("t<lO>"))
$.x=A.ed()
$.bJ=A.ed()
$.fB=A.b7(t.B)
$.vv=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Df","yG",()=>A.u6("_$dart_dartClosure"))
s($,"De","uF",()=>A.u6("_$dart_dartClosure_dartJSInterop"))
s($,"FH","zi",()=>A.a([new J.kE()],A.av("t<hZ>")))
s($,"Fo","z6",()=>A.d5(A.t0({
toString:function(){return"$receiver$"}})))
s($,"Fp","z7",()=>A.d5(A.t0({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Fq","z8",()=>A.d5(A.t0(null)))
s($,"Fr","z9",()=>A.d5(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Fu","zc",()=>A.d5(A.t0(void 0)))
s($,"Fv","zd",()=>A.d5(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Ft","zb",()=>A.d5(A.xz(null)))
s($,"Fs","za",()=>A.d5(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Fx","zf",()=>A.d5(A.xz(void 0)))
s($,"Fw","ze",()=>A.d5(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Fz","wu",()=>A.AG())
s($,"FF","nx",()=>A.nn(B.kp))
s($,"E7","w4",()=>{A.Al()
return $.qF})
s($,"D_","uE",()=>{var q=A.t5("axe"),p=A.t5("club"),o=A.t5("spear"),n=A.t5("whip"),m=$.vO(),l=A.av("t<dl>"),k=A.a([m],l),j=A.a([m],l),i=$.vR(),h=A.a([i],l),g=$.vP(),f=A.a([g],l),e=$.vQ(),d=A.a([e],l),c=A.a([e],l),b=A.a([i],l),a=$.vT()
return A.a([new A.k7(),new A.kb(),new A.jv(q),new A.jN(p),new A.lF(o),new A.m1(n),new A.jx(k),new A.jG(j),new A.jS(h),new A.k0(f),new A.k8(d),new A.k9(c),new A.kh(b),new A.kn(A.a([a],l)),new A.ko(A.a([i,a],l)),new A.ku(A.a([i],l)),new A.kw(A.a([e],l)),new A.kM(A.a([g,e],l)),new A.kO(A.a([m],l)),new A.kU(A.a([g],l)),new A.lm(A.a([g],l)),new A.lA(A.a([g,a],l)),new A.lC(A.a([m],l)),new A.lP(A.a([$.vS()],l)),new A.m3(A.a([a],l)),new A.m4(A.a([a],l))],t.eI)})
s($,"Dd","es",()=>{var q=null,p=A.av("dr"),o=t.S,n=t.hL
return A.a([A.v1("Adventurer","No special birthright, training, or inclination is needed to become an adventurer, simply the courage (or foolhardiness) to brave the wilds and live on one's wits. Adventurers are flexible and resourceful. They are masters of nothing, but able to learn a little of everything.",A.B([B.b3,5,B.ay,5,B.b4,5,B.ah,2],p,o),A.a([new A.kg()],n),A.a8("item",q,q)),A.v1("Barbarian","It's not that barbarians are stupid. Many are, in fact, quite intelligent. It's just that they apply most of that intelligence towards deciding which weapon is best suited for splitting a monster's head open.\n\nBarbarians rely on the might of their bodies and the reassuring heft of their weapons. While they aren't above using a little magic here and there, they're most comfortable when those supernatural forces are safely ensconced in a piece of familiar gear.",A.B([B.b3,1,B.ay,10,B.b4,5],p,o),A.a([new A.k_()],n),A.a8("weapon",q,q)),A.v1("Sorceror","While most rightly fear the awesome power and unpredictability of magic, sorcerors see it as a source of personal power and glory. Tapping magic in its raw elemental form, untethered to other objects or beings is the most dangerous form of spellcasting and most sorcerors have the scars to show for it. A small price to pay for those with the courage to tangle with the raw forces of the universe itself.",A.B([B.ay,3,B.ah,10],p,o),A.a([],n),A.a8("item",q,q))],A.av("t<cQ>"))})
s($,"Dg","uG",()=>A.dy(A.av("h4")))
s($,"Dc","yF",()=>{var q=null
return A.T(q,q,q,q)})
s($,"FA","zg",()=>{var q,p,o,n,m,l,k,j=null,i=$.uR(),h=A.T(i,j,j,A.a([$.fP(),$.nr()],t.J)),g=$.b3()
i=A.T(i,g,j,j)
q=A.T($.wq(),g,j,j)
p=$.fT()
o=A.T(p,g,j,j)
n=A.T($.j5(),g,j,j)
m=A.T($.j6(),g,j,j)
l=A.T($.fS(),j,$.fQ(),j)
k=$.fO()
return A.B(["I",h,"l",i,"P",q,"\u2248",o,"%",n,"&",m,"*",l,"=",A.T(k,j,p,j),"\u2261",A.T(k,g,j,j),"\u2022",A.T($.uQ(),j,p,j)],t.N,t.oC)})
s($,"FG","zh",()=>{var q=null,p=t.J
return A.B(["?",A.T(q,q,q,q),".",A.T(q,$.b3(),q,q),"#",A.T(q,q,q,A.a([$.fP(),$.nr(),$.uM(),$.uN(),$.uO()],p)),"\u250c",A.T(q,q,$.jk(),q),"\u2500",A.T(q,q,$.jj(),q),"\u2510",A.T(q,q,$.jl(),q),"-",A.T(q,q,$.fR(),q),"\u2502",A.T(q,q,$.ji(),q),"\u2558",A.T(q,q,$.jd(),q),"\u2550",A.T(q,q,$.jc(),q),"\u255b",A.T(q,q,$.je(),q),"\u255e",A.T(q,q,$.jg(),q),"\u2564",A.T(q,q,$.jf(),q),"\u2561",A.T(q,q,$.jh(),q),"\u03c0",A.T(q,q,$.j4(),q),"\u2248",A.T(q,q,$.fT(),q),"'",A.T(q,q,q,A.a([$.fQ(),$.fS()],p))],t.N,t.oC)})
s($,"Dj","et",()=>A.c6("air","Ai",1.2,new A.oi(),"",!1,null))
s($,"Dn","dM",()=>A.c6("earth","Ea",1.1,null,"",!1,null))
s($,"Do","b9",()=>A.c6("fire","Fi",1.2,new A.om(),"burns up",!0,new A.on()))
s($,"Dt","dh",()=>A.c6("water","Wa",1.3,null,"",!1,null))
s($,"Di","dL",()=>A.c6("acid","Ac",1.4,null,"",!1,null))
s($,"Dl","cj",()=>A.c6("cold","Co",1.2,new A.oj(),"shatters",!1,new A.ok()))
s($,"Dq","dN",()=>A.c6("lightning","Ln",1.1,null,"",!1,null))
s($,"Dr","bK",()=>A.c6("poison","Po",2,new A.oq(),"",!1,new A.or()))
s($,"Dm","df",()=>A.c6("dark","Dk",1.5,new A.ol(),"",!1,null))
s($,"Dp","dg",()=>A.c6("light","Li",1.5,new A.oo(),"",!1,new A.op()))
s($,"Ds","dO",()=>A.c6("spirit","Sp",3,null,"",!1,null))
s($,"Dk","fM",()=>A.a([$.az(),$.et(),$.dM(),$.b9(),$.dh(),$.dL(),$.cj(),$.dN(),$.bK(),$.df(),$.dg(),$.dO()],A.av("t<dU>")))
s($,"D0","dJ",()=>A.dy(t.R))
s($,"D1","dK",()=>A.dy(t.R))
s($,"FE","wx",()=>A.dy(A.av("kc")))
s($,"DB","bo",()=>A.dy(t.q))
s($,"FK","zl",()=>A.ls("\\n\\s*"))
s($,"FD","fU",()=>{var q=t.s
return A.B([$.et(),A.a(["wind","buffets"],q),$.dM(),A.a(["soil","buries"],q),$.b9(),A.a(["flame","burns"],q),$.dh(),A.a(["water","blasts"],q),$.dL(),A.a(["acid","melts"],q),$.cj(),A.a(["ice","freezes"],q),$.dN(),A.a(["lightning","shocks"],q),$.bK(),A.a(["poison","chokes"],q),$.df(),A.a(["darkness","crushes"],q),$.dg(),A.a(["light","sears"],q),$.dO(),A.a(["spirit","haunts"],q)],t.h,t.m)})
s($,"DD","ck",()=>A.dy(t.P))
s($,"DZ","uH",()=>A.ln("Fae","What can be said about the fae folk that is known to be true? Dimunitive and easily harmed, they survive by cloaking themselves in fables, tricks, and subterfuge. Quick to anger and quick to forgive, the fae live each moment as if it may be their last, bright-burning flames all too aware of how easily they may be snuffed out.",A.a([new A.k6(),new A.ka()],t.hL),A.B([B.ak,0.6,B.ae,1.6,B.ar,0.7,B.a3,1.1],t.Z,t.i)))
s($,"DY","fN",()=>{var q=t.Z,p=t.i,o=t.hL
return A.a([A.ln("Dwarf","It takes a certain kind of person to be willing to spend their life deep under the Earth, toiling away in darkness. Dwarves aren't just willing, but delight in it. Solid, impenetrable and somewhat dim, dwarves have much in common with the mines they love.",B.ci,A.B([B.ak,1.3,B.ae,0.6,B.ar,1.4,B.a3,0.7],q,p)),A.ln("Elf","There are few things elves are not good at, as any elf will be quick to inform you. Clever, quick on their feet, and surprisingly strong for how they look. Which is radiantly beautiful, naturally.",B.ci,A.B([B.ak,1.2,B.ae,1.3,B.ar,1,B.a3,1.2],q,p)),$.uH(),A.ln("Gnome","Gnomes are gentle, quiet folk, difficult to arouse to anger (unless you interrupt one while reading). Most live a life of the mind, seeking knowledge more than adventure. But this insatiable desire for the former, on many occasions, leads them into the jaws of the latter.",A.a([new A.lB()],o),A.B([B.ak,0.7,B.ae,0.8,B.ar,1,B.a3,1.5],q,p)),A.ln("Human","Humans excel at nothing, but nor are they particularly weak in any area. Most other races consider humans sort of like mice: pesky creatures who seem do little but breed, which they do with great devotion.",A.a([new A.ll()],o),A.B([B.ak,1,B.ae,1,B.ar,1,B.a3,1],q,p))],A.av("t<cW>"))})
s($,"D2","vO",()=>A.fX("Arcing",B.ah,"Cast spells of lightning."))
s($,"D3","vP",()=>A.fX("Earthshaping",B.ah,"Cast spells of earth."))
s($,"D4","vQ",()=>A.fX("Fireweaving",B.ah,"Cast spells of fire."))
s($,"D5","vR",()=>A.fX("Icewinding",B.ah,"Cast spells of cold."))
s($,"D6","vS",()=>A.fX("Watercoursing",B.ah,"Cast spells of water."))
s($,"D7","vT",()=>A.fX("Windchasing",B.ah,"Cast spells of air."))
s($,"D8","yE",()=>{var q=$.bm
$.bm=q+1
return new A.jr(q)})
s($,"Da","vV",()=>{var q=$.bm
$.bm=q+1
return new A.ju(q)})
s($,"Db","vW",()=>{var q=$.bm
$.bm=q+1
return new A.jB(q)})
s($,"E6","w3",()=>{var q=$.bm
$.bm=q+1
return new A.lE(q)})
s($,"Fy","wt",()=>{var q=$.bm
$.bm=q+1
return new A.m2(q)})
s($,"E5","w2",()=>{var q=$.yE(),p=$.bm,o=$.bm=p+1,n=$.bm=o+1,m=$.vV(),l=$.vW(),k=$.bm=n+1,j=$.w3()
$.bm=k+1
return A.a([q,new A.jz(p),new A.jA(o),m,l,new A.kL(n),j,new A.lK(k),$.wt(),$.vO(),$.vP(),$.vQ(),$.vR(),$.vS(),$.vT()],t.hC)})
s($,"E4","w1",()=>{var q,p,o,n=A.C(t.N,t.M)
for(q=$.w2(),p=0;p<15;++p){o=q[p]
n.h(0,o.gO(),o)}return n})
s($,"D9","vU",()=>A.dy(A.av("fY")))
s($,"DW","w_",()=>{var q=null
return A.qz(q,q,q,q)})
s($,"DU","yW",()=>{var q=t.J,p=A.a([$.j9()],q)
q=A.a([$.fP()],q)
return A.qz($.j7(),p,$.ja(),q)})
s($,"DV","yX",()=>{var q=t.J,p=A.a([$.wd()],q)
q=A.a([$.nr()],q)
return A.qz($.uL(),p,null,q)})
s($,"DX","yY",()=>A.qz($.uK(),null,null,null))
s($,"DS","yU",()=>{var q=t.J
return A.B([$.di(),A.a([$.fT()],q),$.eu(),A.a([$.fO()],q)],t.U,t.p)})
s($,"DT","yV",()=>A.a([$.uM(),$.uN(),$.uO()],t.J))
s($,"E1","np",()=>A.As(B.r))
s($,"E0","uI",()=>A.xo($.cF()))
s($,"E2","yZ",()=>A.xo($.by()))
s($,"Fi","ev",()=>A.G("unformed"," ",B.t,null).a4())
s($,"Fj","dj",()=>A.G("unformed wet","\u2248",B.l,null).a4())
s($,"EG","cF",()=>A.G("open","\xb7",B.j,null).a4())
s($,"EY","by",()=>A.G("solid","\u2593",B.j,null).bz())
s($,"EM","cG",()=>A.G("passage","\xb7",B.d3,null).a4())
s($,"Er","j8",()=>A.G("doorway","\u25cb",B.w,null).a4())
s($,"EZ","di",()=>A.G("solid wet","\u2248",B.D,null).bz())
s($,"EN","eu",()=>A.G("wet passage","\u2261",B.w,null).a4())
s($,"Eu","fP",()=>A.G("flagstone wall","\u2592",B.d,B.j).bz())
s($,"EA","nr",()=>A.G("granite wall","\u2592",B.f,B.l).bz())
s($,"Ew","uM",()=>A.G("granite","\u2593",B.f,B.l).hn(0,B.l,B.t).bz())
s($,"Ex","uN",()=>A.G("granite","\u2593",B.f,B.l).hn(0.2,B.l,B.t).bz())
s($,"Ey","uO",()=>A.G("granite","\u2593",B.f,B.l).hn(0.4,B.l,B.t).bz())
s($,"Et","j9",()=>A.G("flagstone floor","\xb7",B.j,null).a4())
s($,"Ez","wd",()=>A.G("granite floor","\xb7",B.f,null).a4())
s($,"EK","ja",()=>A.G("open door","\u25cb",B.k,B.aw).cs(A.CT()).a4())
s($,"En","j7",()=>A.G("closed door","\u25d9",B.k,B.aw).cs(A.CW()).ka())
s($,"EL","wi",()=>A.G("open square door","\u2642",B.k,B.aw).cs(A.CU()).a4())
s($,"Eo","uL",()=>A.G("closed square door","\u2640",B.k,B.aw).cs(A.CX()).ka())
s($,"EH","wh",()=>A.G("open barred door","\u2642",B.d,B.f).cs(A.CS()).a4())
s($,"Ek","uK",()=>A.G("closed barred door","\u266a",B.d,B.f).cs(A.CV()).cE($.V().cc(0,$.bL())))
s($,"Eg","w8",()=>A.G("burnt floor","\u03c6",B.l,null).a4())
s($,"Eh","w9",()=>A.G("burnt floor","\u03b5",B.l,null).a4())
s($,"EF","z2",()=>A.G("low wall","%",B.d,null).aI())
s($,"F0","uP",()=>A.G("stairs","\u2261",B.u,B.f).bw(B.aY).a4())
s($,"Ee","fO",()=>A.G("bridge","\u2261",B.k,B.aw).a4())
s($,"Ev","nq",()=>A.G("moss","\u2591",B.a0,null).f_(128).a4())
s($,"Fm","fT",()=>A.G("water","\u2248",B.D,B.F).oD(10,0.5,B.F,B.t).f_(32).cE($.V().cc(0,$.j2())))
s($,"F2","uQ",()=>A.G("stepping stone","\u2022",B.p,B.F).a4())
s($,"Ep","wa",()=>A.G("dirt","\xb7",B.w,null).a4())
s($,"Eq","wb",()=>A.G("dirt2","\u03c6",B.w,null).a4())
s($,"EB","fQ",()=>A.G("grass","\u2591",B.n,null).a4())
s($,"Fe","fS",()=>A.G("tall grass","\u221a",B.n,null).a4())
s($,"Ff","nu",()=>A.G("tree","\u25b2",B.n,B.B).bz())
s($,"Fg","nv",()=>A.G("tree","\u2660",B.n,B.B).bz())
s($,"Fh","nw",()=>A.G("tree","\u2663",B.n,B.B).bz())
s($,"EJ","nt",()=>A.G("open chest","\u2320",B.k,null).aI())
s($,"Em","j6",()=>A.G("closed chest","\u2321",B.k,null).cs(new A.rW()).aI())
s($,"El","j5",()=>A.G("closed barrel","\xb0",B.k,null).cs(new A.rV()).aI())
s($,"EI","ns",()=>A.G("open barrel","\u2219",B.k,null).aI())
s($,"Fc","jk",()=>A.G("table","\u250c",B.k,null).aI())
s($,"Fb","jj",()=>A.G("table","\u2500",B.k,null).aI())
s($,"Fd","jl",()=>A.G("table","\u2510",B.k,null).aI())
s($,"Fa","ji",()=>A.G("table","\u2502",B.k,null).aI())
s($,"F6","fR",()=>A.G("table"," ",B.k,null).aI())
s($,"F4","jd",()=>A.G("table","\u2558",B.k,null).aI())
s($,"F3","jc",()=>A.G("table","\u2550",B.k,null).aI())
s($,"F5","je",()=>A.G("table","\u255b",B.k,null).aI())
s($,"F8","jg",()=>A.G("table","\u255e",B.k,null).aI())
s($,"F7","jf",()=>A.G("table","\u2564",B.k,null).aI())
s($,"F9","jh",()=>A.G("table","\u2561",B.k,null).aI())
s($,"Ei","j3",()=>A.G("candle","\u2265",B.I,null).f_(128).aI())
s($,"Fl","uR",()=>A.G("wall torch","\u2264",B.h,B.f).f_(192).bz())
s($,"Ed","z1",()=>A.AD("brazier","\u2264",B.k,null,5,new A.rU()))
s($,"F1","wq",()=>A.G("statue","P",B.u,B.f).aI())
s($,"Ej","j4",()=>A.G("chair","\u03c0",B.k,null).a4())
s($,"Ef","w7",()=>A.G("brown jelly stain","\xb7",B.k,null).a4())
s($,"EC","we",()=>A.G("gray jelly stain","\xb7",B.l,null).a4())
s($,"ED","wf",()=>A.G("green jelly stain","\xb7",B.A,null).a4())
s($,"EO","wj",()=>A.G("red jelly stain","\xb7",B.m,null).a4())
s($,"Fk","wr",()=>A.G("violet jelly stain","\xb7",B.O,null).a4())
s($,"Fn","ws",()=>A.G("white jelly stain","\xb7",B.u,null).a4())
s($,"F_","jb",()=>A.G("spiderweb","\xf7",B.f,null).a4())
s($,"Es","wc",()=>A.G("dungeon entrance","\u2261",B.d,B.l).bw(B.bJ).a4())
s($,"EE","wg",()=>A.G("home entrance","\u25cb",B.I,null).bw(B.cM).a4())
s($,"EP","wk",()=>A.G("shop entrance","\u25cb",B.N,null).bw(B.cI).a4())
s($,"EQ","wl",()=>A.G("shop entrance","\u25cb",B.h,null).bw(B.cH).a4())
s($,"ER","wm",()=>A.G("shop entrance","\u25cb",B.A,null).bw(B.cG).a4())
s($,"ES","wn",()=>A.G("shop entrance","\u25cb",B.n,null).bw(B.cF).a4())
s($,"ET","wo",()=>A.G("shop entrance","\u25cb",B.a0,null).bw(B.cE).a4())
s($,"EU","wp",()=>A.G("shop entrance","\u25cb",B.K,null).bw(B.cD).a4())
s($,"EV","z3",()=>A.G("shop entrance","\u25cb",B.D,null).bw(B.cL).a4())
s($,"EW","z4",()=>A.G("shop entrance","\u25cb",B.O,null).bw(B.cK).a4())
s($,"EX","z5",()=>A.G("shop entrance","\u25cb",B.m,null).bw(B.cJ).a4())
s($,"Ec","uJ",()=>A.B([$.ja(),30,$.j7(),30,$.fO(),50,$.nq(),10,$.fQ(),3,$.fS(),3,$.nu(),40,$.nv(),40,$.nw(),40,$.jk(),20,$.jj(),20,$.jl(),20,$.ji(),20,$.fR(),20,$.jd(),20,$.jc(),20,$.je(),20,$.jg(),20,$.jf(),20,$.jh(),20,$.nt(),40,$.j6(),80,$.ns(),15,$.j5(),40,$.j3(),1,$.j4(),10,$.jb(),1],t.U,t.S))
s($,"Eb","w6",()=>A.B([$.ja(),70,$.j7(),70,$.fO(),50,$.nq(),20,$.fQ(),30,$.fS(),50,$.nu(),100,$.nv(),100,$.nw(),100,$.jk(),60,$.jj(),60,$.jl(),60,$.ji(),60,$.fR(),60,$.jd(),60,$.jc(),60,$.je(),60,$.jg(),60,$.jf(),60,$.jh(),60,$.nt(),70,$.j6(),80,$.ns(),30,$.j5(),40,$.j3(),60,$.j4(),40,$.jb(),20],t.U,t.S))
s($,"Ea","z0",()=>{var q=$.fO(),p=t.J,o=A.a([$.fT()],p),n=$.fQ(),m=$.wa(),l=$.wb()
return A.B([q,o,n,A.a([m,l],p),$.fS(),A.a([m,l],p),$.nu(),A.a([m,l],p),$.nv(),A.a([m,l],p),$.nw(),A.a([m,l],p),$.j3(),A.a([$.fR()],p),$.jb(),A.a([$.j9()],p)],t.U,t.p)})
s($,"Dh","az",()=>A.c6("none","No",1,null,"",!1,null))
s($,"DC","yO",()=>A.ls("\\[([^|\\]]+)(\\|([^\\]]+))?\\]"))
s($,"E8","w5",()=>A.Ao($.yS().a7(1)))
s($,"DQ","yS",()=>A.Ab("something",B.aH,B.y))
s($,"DP","yR",()=>A.ls("\\[([^|\\]]+)(\\|([^\\]]+))?\\]"))
s($,"DO","yQ",()=>A.ls("^\\(([^)]+)\\)(.*)"))
s($,"DR","yT",()=>A.Aa("you","you","you",B.cu))
s($,"DA","yN",()=>A.ls("^(\\d{1,3})((\\d{3})+)$"))
s($,"FJ","zk",()=>A.wS(A.av("i1<e>")))
s($,"FI","zj",()=>A.wS(A.av("i1<L>")))
s($,"DK","vZ",()=>A.kX(0))
s($,"DF","bL",()=>A.kX(1))
s($,"DI","V",()=>A.kX(2))
s($,"DL","j2",()=>A.kX(4))
s($,"DM","b3",()=>A.kX(8))
s($,"DG","yP",()=>$.bL().cc(0,$.V()))
s($,"DH","bM",()=>$.bL().cc(0,$.b3()))
s($,"DJ","vY",()=>$.V().cc(0,$.b3()))
s($,"DE","vX",()=>$.bL().cc(0,$.V()).cc(0,$.j2()).cc(0,$.b3()))
s($,"E9","z_",()=>{var q=null
return A.AB("uninitialized",q,$.vZ(),q,q,q)})
s($,"FB","wv",()=>A.B([B.M,"|",B.S,"/",B.Q,"-",B.R,"\\",B.L,"|",B.U,"/",B.T,"-",B.V,"\\"],t.j,t.N))
s($,"FC","ww",()=>{var q="\u2022",p="Oo",o=".",n=t.bk,m=A.av("t<D<Y>>")
return A.B([$.az(),A.a([A.U(q,A.a([B.I],n)),A.U(q,A.a([B.I],n)),A.U(q,A.a([B.k],n))],m),$.et(),A.a([A.U(p,A.a([B.u,B.K],n)),A.U(o,A.a([B.K],n)),A.U(o,A.a([B.J],n))],m),$.dM(),A.a([A.U("*%",A.a([B.I,B.h],n)),A.U("*%",A.a([B.k,B.w],n)),A.U("\u2022*",A.a([B.k],n)),A.U(q,A.a([B.w],n))],m),$.b9(),A.a([A.U("\u25b2^",A.a([B.h,B.E],n)),A.U("*^",A.a([B.N],n)),A.U("^",A.a([B.m],n)),A.U("^",A.a([B.w,B.m],n)),A.U(o,A.a([B.w,B.m],n))],m),$.dh(),A.a([A.U(p,A.a([B.K,B.J],n)),A.U("o\u2022^",A.a([B.J,B.D],n)),A.U("\u2022^",A.a([B.D,B.F],n)),A.U("^~",A.a([B.D,B.F],n)),A.U("~",A.a([B.F],n)),A.U(o,A.a([B.F,B.ao],n))],m),$.dL(),A.a([A.U(p,A.a([B.E,B.h],n)),A.U("o\u2022~",A.a([B.A,B.h],n)),A.U(":,",A.a([B.A,B.af],n)),A.U(o,A.a([B.A],n))],m),$.cj(),A.a([A.U("*",A.a([B.u],n)),A.U("+x",A.a([B.K,B.u],n)),A.U("+x",A.a([B.J,B.p],n)),A.U(o,A.a([B.f,B.F],n))],m),$.dN(),A.a([A.U("*",A.a([B.P],n)),A.U("-|\\/",A.a([B.O,B.u],n)),A.U(o,A.a([B.t,B.t,B.t,B.P],n))],m),$.bK(),A.a([A.U(p,A.a([B.ag,B.A],n)),A.U("o\u2022",A.a([B.n,B.n,B.af],n)),A.U(q,A.a([B.B,B.af],n)),A.U(o,A.a([B.B],n))],m),$.df(),A.a([A.U("*%",A.a([B.t,B.t,B.l],n)),A.U(q,A.a([B.t,B.t,B.p],n)),A.U(o,A.a([B.t],n)),A.U(o,A.a([B.t],n))],m),$.dg(),A.a([A.U("*",A.a([B.u],n)),A.U("x+",A.a([B.u,B.E],n)),A.U(":;\"'`,",A.a([B.E,B.h],n)),A.U(o,A.a([B.p,B.E],n))],m),$.dO(),A.a([A.U("Oo*+",A.a([B.P,B.p],n)),A.U("o+",A.a([B.O,B.n],n)),A.U("\u2022.",A.a([B.ao,B.B,B.B],n))],m)],t.h,A.av("D<D<Y>>"))})
s($,"Dv","yI",()=>A.as("!",B.a0,null))
s($,"Dz","yM",()=>A.as("/",B.K,null))
s($,"Du","yH",()=>A.as("\\",B.K,null))
s($,"Dw","yJ",()=>A.as("-",B.a0,null))
s($,"Dy","yL",()=>A.as("<",B.a0,null))
s($,"Dx","yK",()=>A.as(">",B.a0,null))
s($,"E3","w0",()=>A.B([$.et(),"A",$.dM(),"E",$.b9(),"F",$.dh(),"W",$.dL(),"A",$.cj(),"C",$.dN(),"L",$.bK(),"P",$.df(),"D",$.dg(),"L",$.dO(),"S"],t.h,t.N))
r($,"CN","zm",()=>A.AF(1,1))
s($,"FM","wy",()=>{var q,p,o,n=A.C(t.U,A.av("+(d,d,d)"))
n.h(0,$.ev(),B.aJ)
n.h(0,$.dj(),B.cA)
n.h(0,$.cF(),B.aJ)
n.h(0,$.by(),B.bF)
n.h(0,$.cG(),B.aJ)
n.h(0,$.j8(),B.aJ)
n.h(0,$.di(),B.cB)
n.h(0,$.eu(),B.cA)
n.h(0,$.fP(),B.iT)
n.h(0,$.nr(),B.bF)
n.h(0,$.uM(),B.bF)
n.h(0,$.uN(),B.iV)
n.h(0,$.uO(),B.iW)
n.h(0,$.j9(),B.jz)
n.h(0,$.wd(),B.aJ)
n.h(0,$.ja(),B.jc)
n.h(0,$.j7(),B.jd)
n.h(0,$.wi(),B.je)
n.h(0,$.uL(),B.jf)
n.h(0,$.wh(),B.jg)
n.h(0,$.uK(),B.jh)
n.h(0,$.w8(),B.jA)
n.h(0,$.w9(),B.jB)
n.h(0,$.z2(),B.ji)
n.h(0,$.uP(),B.jj)
n.h(0,$.fO(),B.iR)
n.h(0,$.nq(),B.iX)
n.h(0,$.fT(),B.cB)
n.h(0,$.uQ(),B.iS)
n.h(0,$.wa(),B.iY)
n.h(0,$.wb(),B.iZ)
n.h(0,$.fQ(),B.j7)
n.h(0,$.fS(),B.j8)
n.h(0,$.nu(),B.j9)
n.h(0,$.nv(),B.ja)
n.h(0,$.nw(),B.jb)
n.h(0,$.nt(),B.jk)
n.h(0,$.j6(),B.jl)
n.h(0,$.j5(),B.jm)
n.h(0,$.ns(),B.jn)
n.h(0,$.jk(),B.ab)
n.h(0,$.jj(),B.ab)
n.h(0,$.jl(),B.ab)
n.h(0,$.ji(),B.ab)
n.h(0,$.fR(),B.ab)
n.h(0,$.jd(),B.ab)
n.h(0,$.jc(),B.ab)
n.h(0,$.je(),B.ab)
n.h(0,$.jg(),B.ab)
n.h(0,$.jf(),B.ab)
n.h(0,$.jh(),B.ab)
n.h(0,$.j3(),B.jo)
n.h(0,$.uR(),B.iU)
for(q=$.z1(),p=q.length,o=0;o<q.length;q.length===p||(0,A.o)(q),++o)n.h(0,q[o],B.jp)
n.h(0,$.wq(),B.jq)
n.h(0,$.j4(),B.jr)
n.h(0,$.w7(),B.js)
n.h(0,$.we(),B.jt)
n.h(0,$.wf(),B.ju)
n.h(0,$.wj(),B.jv)
n.h(0,$.wr(),B.jw)
n.h(0,$.ws(),B.jx)
n.h(0,$.jb(),B.jy)
n.h(0,$.wc(),B.j_)
n.h(0,$.wg(),B.j0)
n.h(0,$.wk(),B.j1)
n.h(0,$.wl(),B.j2)
n.h(0,$.wm(),B.j3)
n.h(0,$.wn(),B.j4)
n.h(0,$.wo(),B.j5)
n.h(0,$.wp(),B.j6)
n.h(0,$.z3(),B.bG)
n.h(0,$.z4(),B.bG)
n.h(0,$.z5(),B.bG)
return n})
s($,"FL","n",()=>new A.qX(A.Ap(A.xi())))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.f1,SharedArrayBuffer:A.f1,ArrayBufferView:A.hE,DataView:A.l_,Float32Array:A.l0,Float64Array:A.l1,Int16Array:A.l2,Int32Array:A.l3,Int8Array:A.l4,Uint16Array:A.l5,Uint32Array:A.l6,Uint8ClampedArray:A.hF,CanvasPixelArray:A.hF,Uint8Array:A.l7})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.f2.$nativeSuperclassTag="ArrayBufferView"
A.iD.$nativeSuperclassTag="ArrayBufferView"
A.iE.$nativeSuperclassTag="ArrayBufferView"
A.hC.$nativeSuperclassTag="ArrayBufferView"
A.iF.$nativeSuperclassTag="ArrayBufferView"
A.iG.$nativeSuperclassTag="ArrayBufferView"
A.hD.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.CB
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=hauberk-core.js.map
