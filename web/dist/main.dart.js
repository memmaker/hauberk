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
if(a[b]!==s){A.Bn(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.a(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.uk(b)
return new s(c,this)}:function(){if(s===null)s=A.uk(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.uk(a).prototype
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
up(a,b,c,d){return{i:a,p:b,e:c,x:d}},
um(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.un==null){A.B2()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.n(A.ba("Return interceptor for "+A.J(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.rC
if(o==null)o=$.rC=A.tb(n)
p=q[o]}if(p!=null)return p
p=A.Bc(a)
if(p!=null)return p
if(typeof a=="function")return B.hx
s=Object.getPrototypeOf(a)
if(s==null)return B.cl
if(s===Object.prototype)return B.cl
if(typeof q=="function"){o=$.rC
if(o==null)o=$.rC=A.tb(n)
Object.defineProperty(q,o,{value:B.bi,enumerable:false,writable:true,configurable:true})
return B.bi}return B.bi},
vx(a,b){if(a<0||a>4294967295)throw A.n(A.cJ(a,0,4294967295,"length",null))
return J.yy(new Array(a),b)},
vy(a,b){if(a<0)throw A.n(A.aC("Length must be a non-negative integer: "+a,null))
return A.a(new Array(a),b.h("r<0>"))},
vw(a,b){if(a<0)throw A.n(A.aC("Length must be a non-negative integer: "+a,null))
return A.a(new Array(a),b.h("r<0>"))},
yy(a,b){var s=A.a(a,b.h("r<0>"))
s.$flags=1
return s},
yz(a,b){var s=t.bP
return J.xY(s.a(a),s.a(b))},
vz(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
yB(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.vz(r))break;++b}return b},
yC(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.c(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.vz(q))break}return b},
e4(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.fZ.prototype
return J.jY.prototype}if(typeof a=="string")return J.da.prototype
if(a==null)return J.h_.prototype
if(typeof a=="boolean")return J.fY.prototype
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.db.prototype
if(typeof a=="symbol")return J.h3.prototype
if(typeof a=="bigint")return J.h1.prototype
return a}if(a instanceof A.a0)return a
return J.um(a)},
it(a){if(typeof a=="string")return J.da.prototype
if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.db.prototype
if(typeof a=="symbol")return J.h3.prototype
if(typeof a=="bigint")return J.h1.prototype
return a}if(a instanceof A.a0)return a
return J.um(a)},
mI(a){if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.db.prototype
if(typeof a=="symbol")return J.h3.prototype
if(typeof a=="bigint")return J.h1.prototype
return a}if(a instanceof A.a0)return a
return J.um(a)},
AV(a){if(typeof a=="number")return J.dG.prototype
if(a==null)return a
if(!(a instanceof A.a0))return J.dk.prototype
return a},
AW(a){if(typeof a=="number")return J.dG.prototype
if(typeof a=="string")return J.da.prototype
if(a==null)return a
if(!(a instanceof A.a0))return J.dk.prototype
return a},
AX(a){if(typeof a=="string")return J.da.prototype
if(a==null)return a
if(!(a instanceof A.a0))return J.dk.prototype
return a},
ay(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.e4(a).Z(a,b)},
aY(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.B5(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.it(a).p(a,b)},
v0(a,b){return J.mI(a).j(a,b)},
xX(a,b){return J.AX(a).hc(a,b)},
v1(a,b,c){return J.AV(a).P(a,b,c)},
xY(a,b){return J.AW(a).ai(a,b)},
tH(a,b){return J.mI(a).aU(a,b)},
cb(a){return J.e4(a).ga0(a)},
ap(a){return J.mI(a).gN(a)},
dx(a){return J.it(a).gI(a)},
xZ(a){return J.e4(a).gaG(a)},
v2(a){return J.mI(a).e4(a)},
ec(a){return J.e4(a).t(a)},
y_(a,b){return J.mI(a).kS(a,b)},
jS:function jS(){},
fY:function fY(){},
h_:function h_(){},
h2:function h2(){},
dd:function dd(){},
kz:function kz(){},
dk:function dk(){},
db:function db(){},
h1:function h1(){},
h3:function h3(){},
r:function r(a){this.$ti=a},
jX:function jX(){},
p2:function p2(a){this.$ti=a},
aZ:function aZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dG:function dG(){},
fZ:function fZ(){},
jY:function jY(){},
da:function da(){}},A={tR:function tR(){},
vC(a){return new A.dc("Field '"+a+"' has been assigned during initialization.")},
dH(a){return new A.dc("Field '"+a+"' has not been initialized.")},
yF(a){return new A.dc("Local '"+a+"' has not been initialized.")},
vD(a){return new A.dc("Field '"+a+"' has already been initialized.")},
cN(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
qX(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
wE(a,b,c){return a},
uo(a){var s,r
for(s=$.bN.length,r=0;r<s;++r)if(a===$.bN[r])return!0
return!1},
zb(a,b,c,d){A.hp(b,"start")
if(c!=null){A.hp(c,"end")
if(b>c)A.a_(A.cJ(b,0,c,"start",null))}return new A.hG(a,b,c,d.h("hG<0>"))},
pt(a,b,c,d){if(t.gt.b(a))return new A.dB(a,b,c.h("@<0>").al(d).h("dB<1,2>"))
return new A.dK(a,b,c.h("@<0>").al(d).h("dK<1,2>"))},
zc(a,b,c){var s="takeCount"
A.y2(b,s,t.S)
A.hp(b,s)
if(t.gt.b(a))return new A.fK(a,b,c.h("fK<0>"))
return new A.dR(a,b,c.h("dR<0>"))},
cE(){return new A.dP("No element")},
yw(){return new A.dP("Too many elements")},
yv(){return new A.dP("Too few elements")},
dc:function dc(a){this.a=a},
d6:function d6(a){this.a=a},
qi:function qi(){},
K:function K(){},
aF:function aF(){},
hG:function hG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c2:function c2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dK:function dK(a,b,c){this.a=a
this.b=b
this.$ti=c},
dB:function dB(a,b,c){this.a=a
this.b=b
this.$ti=c},
bl:function bl(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
aN:function aN(a,b,c){this.a=a
this.b=b
this.$ti=c},
aj:function aj(a,b,c){this.a=a
this.b=b
this.$ti=c},
cR:function cR(a,b,c){this.a=a
this.b=b
this.$ti=c},
dR:function dR(a,b,c){this.a=a
this.b=b
this.$ti=c},
fK:function fK(a,b,c){this.a=a
this.b=b
this.$ti=c},
hH:function hH(a,b,c){this.a=a
this.b=b
this.$ti=c},
hI:function hI(a,b,c){this.a=a
this.b=b
this.$ti=c},
hJ:function hJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.$ti=c},
hO:function hO(a,b){this.a=a
this.$ti=b},
bn:function bn(a,b){this.a=a
this.$ti=b},
aA:function aA(){},
dl:function dl(){},
f7:function f7(){},
cL:function cL(a,b){this.a=a
this.$ti=b},
wX(a){var s=A.wW(a)
if(s!=null)return s
return"minified:"+a},
B5(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
J(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ec(a)
return s},
hm(a){var s,r=$.vK
if(r==null)r=$.vK=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
kD(a){var s,r,q,p
if(a instanceof A.a0)return A.bM(A.cs(a),null)
s=J.e4(a)
if(s===B.hu||s===B.hy||t.cx.b(a)){r=B.bl(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bM(A.cs(a),null)},
vM(a){var s,r,q
if(a==null||typeof a=="number"||A.uf(a))return J.ec(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.d5)return a.t(0)
if(a instanceof A.co)return a.jg(!0)
s=$.xT()
for(r=0;r<1;++r){q=s[r].pp(a)
if(q!=null)return q}return"Instance of '"+A.kD(a)+"'"},
vL(){return Date.now()},
z_(){var s,r
if($.pW!==0)return
$.pW=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.pW=1e6
$.tY=new A.pV(r)},
vJ(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
z0(a){var s,r,q,p=A.a([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.o)(a),++r){q=a[r]
if(!A.fl(q))throw A.n(A.ir(q))
if(q<=65535)B.a.j(p,q)
else if(q<=1114111){B.a.j(p,55296+(B.c.eD(q-65536,10)&1023))
B.a.j(p,56320+(q&1023))}else throw A.n(A.ir(q))}return A.vJ(p)},
vN(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.fl(q))throw A.n(A.ir(q))
if(q<0)throw A.n(A.ir(q))
if(q>65535)return A.z0(a)}return A.vJ(a)},
b2(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.eD(s,10)|55296)>>>0,s&1023|56320)}}throw A.n(A.cJ(a,0,1114111,null,null))},
eT(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
yZ(a){var s=A.eT(a).getFullYear()+0
return s},
yX(a){var s=A.eT(a).getMonth()+1
return s},
yT(a){var s=A.eT(a).getDate()+0
return s},
yU(a){var s=A.eT(a).getHours()+0
return s},
yW(a){var s=A.eT(a).getMinutes()+0
return s},
yY(a){var s=A.eT(a).getSeconds()+0
return s},
yV(a){var s=A.eT(a).getMilliseconds()+0
return s},
yS(a){var s=a.$thrownJsError
if(s==null)return null
return A.e5(s)},
B0(a){throw A.n(A.ir(a))},
c(a,b){if(a==null)J.dx(a)
throw A.n(A.mH(a,b))},
mH(a,b){var s,r="index"
if(!A.fl(b))return new A.ce(!0,b,r,null)
s=A.w(J.dx(a))
if(b<0||b>=s)return A.oy(b,s,a,null,r)
return A.ho(b,r)},
ir(a){return new A.ce(!0,a,null,null)},
n(a){return A.aQ(a,new Error())},
aQ(a,b){var s
if(a==null)a=new A.cP()
b.dartException=a
s=A.Bu
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Bu(){return J.ec(this.dartException)},
a_(a,b){throw A.aQ(a,b==null?new Error():b)},
bp(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.a_(A.zU(a,b,c),s)},
zU(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t._.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.hK("'"+s+"': Cannot "+o+" "+l+k+n)},
o(a){throw A.n(A.b_(a))},
cQ(a){var s,r,q,p,o,n
a=A.wT(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.rb(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
rc(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
w0(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
tS(a,b){var s=b==null,r=s?null:b.method
return new A.jZ(a,r,s?null:b.receiver)},
dn(a){if(a==null)return new A.pN(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.e8(a,a.dartException)
return A.AF(a)},
e8(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
AF(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.eD(r,16)&8191)===10)switch(q){case 438:return A.e8(a,A.tS(A.J(s)+" (Error "+q+")",null))
case 445:case 5007:A.J(s)
return A.e8(a,new A.hi())}}if(a instanceof TypeError){p=$.xH()
o=$.xI()
n=$.xJ()
m=$.xK()
l=$.xN()
k=$.xO()
j=$.xM()
$.xL()
i=$.xQ()
h=$.xP()
g=p.bQ(s)
if(g!=null)return A.e8(a,A.tS(A.a3(s),g))
else{g=o.bQ(s)
if(g!=null){g.method="call"
return A.e8(a,A.tS(A.a3(s),g))}else if(n.bQ(s)!=null||m.bQ(s)!=null||l.bQ(s)!=null||k.bQ(s)!=null||j.bQ(s)!=null||m.bQ(s)!=null||i.bQ(s)!=null||h.bQ(s)!=null){A.a3(s)
return A.e8(a,new A.hi())}}return A.e8(a,new A.lg(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.hC()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.e8(a,new A.ce(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.hC()
return a},
e5(a){var s
if(a==null)return new A.ie(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.ie(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
uq(a){if(a==null)return J.cb(a)
if(typeof a=="object")return A.hm(a)
return J.cb(a)},
AN(a){if(typeof a=="number")return B.e.ga0(a)
if(a instanceof A.my)return A.hm(a)
if(a instanceof A.co)return a.ga0(a)
return A.uq(a)},
wH(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
A6(a,b,c,d,e,f){t.gY.a(a)
switch(A.w(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.n(new A.rs("Unsupported number of arguments for wrapped closure"))},
mG(a,b){var s=a.$identity
if(!!s)return s
s=A.AO(a,b)
a.$identity=s
return s},
AO(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.A6)},
yb(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.l1().constructor.prototype):Object.create(new A.ef(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.vd(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.y7(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.vd(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
y7(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.n("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.y4)}throw A.n("Error in functionType of tearoff")},
y8(a,b,c,d){var s=A.vc
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
vd(a,b,c,d){if(c)return A.ya(a,b,d)
return A.y8(b.length,d,a,b)},
y9(a,b,c,d){var s=A.vc,r=A.y5
switch(b?-1:a){case 0:throw A.n(new A.kT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
ya(a,b,c){var s,r
if($.va==null)$.va=A.v9("interceptor")
if($.vb==null)$.vb=A.v9("receiver")
s=b.length
r=A.y9(s,c,a,b)
return r},
uk(a){return A.yb(a)},
y4(a,b){return A.ik(v.typeUniverse,A.cs(a.a),b)},
vc(a){return a.a},
y5(a){return a.b},
v9(a){var s,r,q,p=new A.ef("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.n(A.aC("Field name "+a+" not found.",null))},
tb(a){return v.getIsolateTag(a)},
Bc(a){var s,r,q,p,o,n=A.a3($.wL.$1(a)),m=$.t7[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.tg[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.rY($.wC.$2(a,n))
if(q!=null){m=$.t7[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.tg[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.tm(s)
$.t7[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.tg[n]=s
return s}if(p==="-"){o=A.tm(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.wR(a,s)
if(p==="*")throw A.n(A.ba(n))
if(v.leafTags[n]===true){o=A.tm(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.wR(a,s)},
wR(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.up(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
tm(a){return J.up(a,!1,null,!!a.$ibI)},
Bf(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.tm(s)
else return J.up(s,c,null,null)},
B2(){if(!0===$.un)return
$.un=!0
A.B3()},
B3(){var s,r,q,p,o,n,m,l
$.t7=Object.create(null)
$.tg=Object.create(null)
A.B1()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.wS.$1(o)
if(n!=null){m=A.Bf(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
B1(){var s,r,q,p,o,n,m=B.cC()
m=A.fo(B.cD,A.fo(B.cE,A.fo(B.bm,A.fo(B.bm,A.fo(B.cF,A.fo(B.cG,A.fo(B.cH(B.bl),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.wL=new A.td(p)
$.wC=new A.te(o)
$.wS=new A.tf(n)},
fo(a,b){return a(b)||b},
zy(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.c(b,s)
if(!J.ay(r,b[s]))return!1}return!0},
AQ(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
vA(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.n(A.vm("Illegal RegExp pattern ("+String(o)+")",a))},
Bk(a,b,c){var s=a.indexOf(b,c)
return s>=0},
wG(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
wT(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bg(a,b,c){var s
if(typeof b=="string")return A.Bm(a,b,c)
if(b instanceof A.h0){s=b.giT()
s.lastIndex=0
return a.replace(s,A.wG(c))}return A.Bl(a,b,c)},
Bl(a,b,c){var s,r,q,p
for(s=J.xX(b,a),s=s.gN(s),r=0,q="";s.q();){p=s.gH()
q=q+a.substring(r,p.gi8())+c
r=p.ghq()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
Bm(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.wT(b),"g"),A.wG(c))},
wA(a){return a},
wU(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.hc(0,a),s=new A.hQ(s.a,s.b,s.c),r=t.lu,q=0,p="";s.q();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.J(A.wA(B.j.aJ(a,q,m)))+A.J(c.$1(o))
q=m+n[0].length}s=p+A.J(A.wA(B.j.cQ(a,q)))
return s.charCodeAt(0)==0?s:s},
O:function O(a,b){this.a=a
this.b=b},
a2:function a2(a){this.a=a},
el:function el(){},
bO:function bO(a,b,c){this.a=a
this.b=b
this.$ti=c},
i0:function i0(a,b){this.a=a
this.$ti=b},
i1:function i1(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dF:function dF(a,b){this.a=a
this.$ti=b},
pV:function pV(a){this.a=a},
hw:function hw(){},
rb:function rb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hi:function hi(){},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
lg:function lg(a){this.a=a},
pN:function pN(a){this.a=a},
ie:function ie(a){this.a=a
this.b=null},
d5:function d5(){},
j_:function j_(){},
j0:function j0(){},
l6:function l6(){},
l1:function l1(){},
ef:function ef(a,b){this.a=a
this.b=b},
kT:function kT(a){this.a=a},
c0:function c0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
p3:function p3(a){this.a=a},
pd:function pd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
b0:function b0(a,b){this.a=a
this.$ti=b},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cG:function cG(a,b){this.a=a
this.$ti=b},
cF:function cF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bj:function bj(a,b){this.a=a
this.$ti=b},
dI:function dI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
h4:function h4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
td:function td(a){this.a=a},
te:function te(a){this.a=a},
tf:function tf(a){this.a=a},
co:function co(){},
fe:function fe(){},
ff:function ff(){},
h0:function h0(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
i2:function i2(a){this.b=a},
ls:function ls(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
l2:function l2(a,b){this.a=a
this.c=b},
mt:function mt(a,b,c){this.a=a
this.b=b
this.c=c},
mu:function mu(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Bn(a){throw A.aQ(A.vC(a),new Error())},
b(){throw A.aQ(A.dH(""),new Error())},
ar(){throw A.aQ(A.vD(""),new Error())},
e9(){throw A.aQ(A.vC(""),new Error())},
dV(){var s=new A.rp()
return s.b=s},
rp:function rp(){this.b=null},
cX(a,b,c){if(a>>>0!==a||a>=c)throw A.n(A.mH(b,a))},
eK:function eK(){},
he:function he(){},
ki:function ki(){},
eL:function eL(){},
hc:function hc(){},
hd:function hd(){},
kj:function kj(){},
kk:function kk(){},
kl:function kl(){},
km:function km(){},
kn:function kn(){},
ko:function ko(){},
kp:function kp(){},
hf:function hf(){},
kq:function kq(){},
i3:function i3(){},
i4:function i4(){},
i5:function i5(){},
i6:function i6(){},
u3(a,b){var s=b.c
return s==null?b.c=A.ii(a,"jB",[b.x]):s},
vX(a){var s=a.w
if(s===6||s===7)return A.vX(a.x)
return s===11||s===12},
z6(a){return a.as},
Bh(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ao(a){return A.rR(v.typeUniverse,a,!1)},
e1(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.e1(a1,s,a3,a4)
if(r===s)return a2
return A.wc(a1,r,!0)
case 7:s=a2.x
r=A.e1(a1,s,a3,a4)
if(r===s)return a2
return A.wb(a1,r,!0)
case 8:q=a2.y
p=A.fn(a1,q,a3,a4)
if(p===q)return a2
return A.ii(a1,a2.x,p)
case 9:o=a2.x
n=A.e1(a1,o,a3,a4)
m=a2.y
l=A.fn(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.ub(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.fn(a1,j,a3,a4)
if(i===j)return a2
return A.wd(a1,k,i)
case 11:h=a2.x
g=A.e1(a1,h,a3,a4)
f=a2.y
e=A.AC(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.wa(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.fn(a1,d,a3,a4)
o=a2.x
n=A.e1(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.uc(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.n(A.bE("Attempted to substitute unexpected RTI kind "+a0))}},
fn(a,b,c,d){var s,r,q,p,o=b.length,n=A.rS(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.e1(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
AD(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.rS(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.e1(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
AC(a,b,c,d){var s,r=b.a,q=A.fn(a,r,c,d),p=b.b,o=A.fn(a,p,c,d),n=b.c,m=A.AD(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.lV()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
wF(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.AZ(s)
return a.$S()}return null},
B4(a,b){var s
if(A.vX(b))if(a instanceof A.d5){s=A.wF(a)
if(s!=null)return s}return A.cs(a)},
cs(a){if(a instanceof A.a0)return A.z(a)
if(Array.isArray(a))return A.M(a)
return A.ue(J.e4(a))},
M(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
z(a){var s=a.$ti
return s!=null?s:A.ue(a)},
ue(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.A3(a,s)},
A3(a,b){var s=a instanceof A.d5?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.zH(v.typeUniverse,s.name)
b.$ccache=r
return r},
AZ(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.rR(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
AY(a){return A.e2(A.z(a))},
ui(a){var s
if(a instanceof A.co)return A.AS(a.$r,a.fP())
s=a instanceof A.d5?A.wF(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.xZ(a).a
if(Array.isArray(a))return A.M(a)
return A.cs(a)},
e2(a){var s=a.r
return s==null?a.r=new A.my(a):s},
AS(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.c(q,0)
s=A.ik(v.typeUniverse,A.ui(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.c(q,r)
s=A.wf(v.typeUniverse,s,A.ui(q[r]))}return A.ik(v.typeUniverse,s,a)},
c8(a){return A.e2(A.rR(v.typeUniverse,a,!1))},
A2(a){var s=this
s.b=A.AA(s)
return s.b(a)},
AA(a){var s,r,q,p,o
if(a===t.K)return A.Ac
if(A.e6(a))return A.Ag
s=a.w
if(s===6)return A.A0
if(s===1)return A.wr
if(s===7)return A.A7
r=A.Az(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.e6)){a.f="$i"+q
if(q==="D")return A.Aa
if(a===t.E)return A.A9
return A.Af}}else if(s===10){p=A.AQ(a.x,a.y)
o=p==null?A.wr:p
return o==null?A.fi(o):o}return A.zZ},
Az(a){if(a.w===8){if(a===t.S)return A.fl
if(a===t.i||a===t.cZ)return A.Ab
if(a===t.N)return A.Ae
if(a===t.y)return A.uf}return null},
A1(a){var s=this,r=A.zY
if(A.e6(s))r=A.zL
else if(s===t.K)r=A.fi
else if(A.fr(s)){r=A.A_
if(s===t.aV)r=A.wi
else if(s===t.jv)r=A.rY
else if(s===t.fU)r=A.zJ
else if(s===t.ae)r=A.wj
else if(s===t.dz)r=A.zK
else if(s===t.mU)r=A.bX}else if(s===t.S)r=A.w
else if(s===t.N)r=A.a3
else if(s===t.y)r=A.e_
else if(s===t.cZ)r=A.e0
else if(s===t.i)r=A.by
else if(s===t.E)r=A.P
s.a=r
return s.a(a)},
zZ(a){var s=this
if(a==null)return A.fr(s)
return A.B6(v.typeUniverse,A.B4(a,s),s)},
A0(a){if(a==null)return!0
return this.x.b(a)},
Af(a){var s,r=this
if(a==null)return A.fr(r)
s=r.f
if(a instanceof A.a0)return!!a[s]
return!!J.e4(a)[s]},
Aa(a){var s,r=this
if(a==null)return A.fr(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.a0)return!!a[s]
return!!J.e4(a)[s]},
A9(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.a0)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
wq(a){if(typeof a=="object"){if(a instanceof A.a0)return t.E.b(a)
return!0}if(typeof a=="function")return!0
return!1},
zY(a){var s=this
if(a==null){if(A.fr(s))return a}else if(s.b(a))return a
throw A.aQ(A.wk(a,s),new Error())},
A_(a){var s=this
if(a==null||s.b(a))return a
throw A.aQ(A.wk(a,s),new Error())},
wk(a,b){return new A.ig("TypeError: "+A.w3(a,A.bM(b,null)))},
w3(a,b){return A.jl(a)+": type '"+A.bM(A.ui(a),null)+"' is not a subtype of type '"+b+"'"},
bV(a,b){return new A.ig("TypeError: "+A.w3(a,b))},
A7(a){var s=this
return s.x.b(a)||A.u3(v.typeUniverse,s).b(a)},
Ac(a){return a!=null},
fi(a){if(a!=null)return a
throw A.aQ(A.bV(a,"Object"),new Error())},
Ag(a){return!0},
zL(a){return a},
wr(a){return!1},
uf(a){return!0===a||!1===a},
e_(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aQ(A.bV(a,"bool"),new Error())},
zJ(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aQ(A.bV(a,"bool?"),new Error())},
by(a){if(typeof a=="number")return a
throw A.aQ(A.bV(a,"double"),new Error())},
zK(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aQ(A.bV(a,"double?"),new Error())},
fl(a){return typeof a=="number"&&Math.floor(a)===a},
w(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aQ(A.bV(a,"int"),new Error())},
wi(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aQ(A.bV(a,"int?"),new Error())},
Ab(a){return typeof a=="number"},
e0(a){if(typeof a=="number")return a
throw A.aQ(A.bV(a,"num"),new Error())},
wj(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aQ(A.bV(a,"num?"),new Error())},
Ae(a){return typeof a=="string"},
a3(a){if(typeof a=="string")return a
throw A.aQ(A.bV(a,"String"),new Error())},
rY(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aQ(A.bV(a,"String?"),new Error())},
P(a){if(A.wq(a))return a
throw A.aQ(A.bV(a,"JSObject"),new Error())},
bX(a){if(a==null)return a
if(A.wq(a))return a
throw A.aQ(A.bV(a,"JSObject?"),new Error())},
wy(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bM(a[q],b)
return s},
At(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.wy(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bM(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
wl(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bM(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bM(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bM(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bM(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bM(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bM(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bM(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bM(a.x,b)+">"
if(l===8){p=A.AE(a.x)
o=a.y
return o.length>0?p+("<"+A.wy(o,b)+">"):p}if(l===10)return A.At(a,b)
if(l===11)return A.wl(a,b,null)
if(l===12)return A.wl(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c(b,n)
return b[n]}return"?"},
AE(a){var s=A.wW(a)
if(s!=null)return s
return"minified:"+a},
zI(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
zH(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.rR(a,b,!1)
else if(typeof m=="number"){s=m
r=A.ij(a,5,"#")
q=A.rS(s)
for(p=0;p<s;++p)q[p]=r
o=A.ii(a,b,q)
n[b]=o
return o}else return m},
zG(a,b){return A.wg(a.tR,b)},
zF(a,b){return A.wg(a.eT,b)},
rR(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.we(a,null,b,!1)
r.set(b,s)
return s},
ik(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.we(a,b,c,!0)
q.set(c,r)
return r},
wf(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.ub(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
we(a,b,c,d){return A.zw(A.zq(a,b,c,d))},
dm(a,b){b.a=A.A1
b.b=A.A2
return b},
ij(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.c4(null,null)
s.w=b
s.as=c
r=A.dm(a,s)
a.eC.set(c,r)
return r},
wc(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.zD(a,b,r,c)
a.eC.set(r,s)
return s},
zD(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.e6(b))if(!(b===t.d||b===t.w))if(s!==6)r=s===7&&A.fr(b.x)
if(r)return b
else if(s===1)return t.d}q=new A.c4(null,null)
q.w=6
q.x=b
q.as=c
return A.dm(a,q)},
wb(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.zB(a,b,r,c)
a.eC.set(r,s)
return s},
zB(a,b,c,d){var s,r
if(d){s=b.w
if(A.e6(b)||b===t.K)return b
else if(s===1)return A.ii(a,"jB",[b])
else if(b===t.d||b===t.w)return t.gK}r=new A.c4(null,null)
r.w=7
r.x=b
r.as=c
return A.dm(a,r)},
zE(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.c4(null,null)
s.w=13
s.x=b
s.as=q
r=A.dm(a,s)
a.eC.set(q,r)
return r},
ih(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
zA(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
ii(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.ih(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.c4(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.dm(a,r)
a.eC.set(p,q)
return q},
ub(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.ih(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.c4(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.dm(a,o)
a.eC.set(q,n)
return n},
wd(a,b,c){var s,r,q="+"+(b+"("+A.ih(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.c4(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.dm(a,s)
a.eC.set(q,r)
return r},
wa(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.ih(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.ih(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.zA(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.c4(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.dm(a,p)
a.eC.set(r,o)
return o},
uc(a,b,c,d){var s,r=b.as+("<"+A.ih(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.zC(a,b,c,r,d)
a.eC.set(r,s)
return s},
zC(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.rS(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.e1(a,b,r,0)
m=A.fn(a,c,r,0)
return A.uc(a,n,m,c!==m)}}l=new A.c4(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.dm(a,l)},
zq(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
zw(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.zs(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.w7(a,r,l,k,!1)
else if(q===46)r=A.w7(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.dZ(a.u,a.e,k.pop()))
break
case 94:k.push(A.zE(a.u,k.pop()))
break
case 35:k.push(A.ij(a.u,5,"#"))
break
case 64:k.push(A.ij(a.u,2,"@"))
break
case 126:k.push(A.ij(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.zu(a,k)
break
case 38:A.zt(a,k)
break
case 63:p=a.u
k.push(A.wc(p,A.dZ(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.wb(p,A.dZ(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.zr(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.w8(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.zx(a.u,a.e,o)
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
return A.dZ(a.u,a.e,m)},
zs(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
w7(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.zI(s,o.x)[p]
if(n==null)A.a_('No "'+p+'" in "'+A.z6(o)+'"')
d.push(A.ik(s,o,n))}else d.push(p)
return m},
zu(a,b){var s,r=a.u,q=A.w6(a,b),p=b.pop()
if(typeof p=="string")b.push(A.ii(r,p,q))
else{s=A.dZ(r,a.e,p)
switch(s.w){case 11:b.push(A.uc(r,s,q,a.n))
break
default:b.push(A.ub(r,s,q))
break}}},
zr(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.w6(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.dZ(p,a.e,o)
q=new A.lV()
q.a=s
q.b=n
q.c=m
b.push(A.wa(p,r,q))
return
case-4:b.push(A.wd(p,b.pop(),s))
return
default:throw A.n(A.bE("Unexpected state under `()`: "+A.J(o)))}},
zt(a,b){var s=b.pop()
if(0===s){b.push(A.ij(a.u,1,"0&"))
return}if(1===s){b.push(A.ij(a.u,4,"1&"))
return}throw A.n(A.bE("Unexpected extended operation "+A.J(s)))},
w6(a,b){var s=b.splice(a.p)
A.w8(a.u,a.e,s)
a.p=b.pop()
return s},
dZ(a,b,c){if(typeof c=="string")return A.ii(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.zv(a,b,c)}else return c},
w8(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.dZ(a,b,c[s])},
zx(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.dZ(a,b,c[s])},
zv(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.n(A.bE("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.n(A.bE("Bad index "+c+" for "+b.t(0)))},
B6(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aU(a,b,null,c,null)
r.set(c,s)}return s},
aU(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.e6(d))return!0
s=b.w
if(s===4)return!0
if(A.e6(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aU(a,c[b.x],c,d,e))return!0
q=d.w
p=t.d
if(b===p||b===t.w){if(q===7)return A.aU(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.aU(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aU(a,b.x,c,d,e))return!1
return A.aU(a,A.u3(a,b),c,d,e)}if(s===6)return A.aU(a,p,c,d,e)&&A.aU(a,b.x,c,d,e)
if(q===7){if(A.aU(a,b,c,d.x,e))return!0
return A.aU(a,b,c,A.u3(a,d),e)}if(q===6)return A.aU(a,b,c,p,e)||A.aU(a,b,c,d.x,e)
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
if(!A.aU(a,j,c,i,e)||!A.aU(a,i,e,j,c))return!1}return A.wp(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.wp(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.A8(a,b,c,d,e)}if(o&&q===10)return A.Ad(a,b,c,d,e)
return!1},
wp(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aU(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aU(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aU(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aU(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aU(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
A8(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.ik(a,b,r[o])
return A.wh(a,p,null,c,d.y,e)}return A.wh(a,b.y,null,c,d.y,e)},
wh(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aU(a,b[s],d,e[s],f))return!1
return!0},
Ad(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aU(a,r[s],c,q[s],e))return!1
return!0},
fr(a){var s=a.w,r=!0
if(!(a===t.d||a===t.w))if(!A.e6(a))if(s!==6)r=s===7&&A.fr(a.x)
return r},
e6(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.iD},
wg(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
rS(a){return a>0?new Array(a):v.typeUniverse.sEA},
c4:function c4(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
lV:function lV(){this.c=this.b=this.a=null},
my:function my(a){this.a=a},
lM:function lM(){},
ig:function ig(a){this.a=a},
zk(){var s,r,q
if(self.scheduleImmediate!=null)return A.AI()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.mG(new A.rj(s),1)).observe(r,{childList:true})
return new A.ri(s,r,q)}else if(self.setImmediate!=null)return A.AJ()
return A.AK()},
zl(a){self.scheduleImmediate(A.mG(new A.rk(t.O.a(a)),0))},
zm(a){self.setImmediate(A.mG(new A.rl(t.O.a(a)),0))},
zn(a){t.O.a(a)
A.zz(0,a)},
zz(a,b){var s=new A.rP()
s.lq(a,b)
return s},
w9(a,b,c){return 0},
tJ(a){var s
if(t.fz.b(a)){s=a.geh()
if(s!=null)return s}return B.cL},
w4(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.j_;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.z7()
b.lu(new A.cu(new A.ce(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.j_(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.ez()
b.em(o.a)
A.fc(b,p)
return}b.a^=2
A.t4(null,null,b.b,t.O.a(new A.rv(o,b)))},
fc(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.t2(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.fc(d.a,c)
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
A.t2(j.a,j.b)
return}g=$.b3
if(g!==h)$.b3=h
else g=null
c=c.c
if((c&15)===8)new A.rz(q,d,n).$0()
else if(o){if((c&1)!==0)new A.ry(q,j).$0()}else if((c&2)!==0)new A.rx(d,q).$0()
if(g!=null)$.b3=g
c=q.c
if(c instanceof A.bT){p=q.a.$ti
p=p.h("jB<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.eB(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.w4(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.eB(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
Au(a,b){var s=t.ng
if(s.b(a))return s.a(a)
s=t.mq
if(s.b(a))return s.a(a)
throw A.n(A.tI(a,"onError",u.c))},
Aj(){var s,r
for(s=$.fm;s!=null;s=$.fm){$.ip=null
r=s.b
$.fm=r
if(r==null)$.io=null
s.a.$0()}},
AB(){$.ug=!0
try{A.Aj()}finally{$.ip=null
$.ug=!1
if($.fm!=null)$.uX().$1(A.wD())}},
wz(a){var s=new A.lv(a),r=$.io
if(r==null){$.fm=$.io=s
if(!$.ug)$.uX().$1(A.wD())}else $.io=r.b=s},
Ay(a){var s,r,q,p=$.fm
if(p==null){A.wz(a)
$.ip=$.io
return}s=new A.lv(a)
r=$.ip
if(r==null){s.b=p
$.fm=$.ip=s}else{q=r.b
s.b=q
$.ip=r.b=s
if(q==null)$.io=s}},
t2(a,b){A.Ay(new A.t3(a,b))},
ww(a,b,c,d,e){var s,r=$.b3
if(r===c)return d.$0()
$.b3=c
s=r
try{r=d.$0()
return r}finally{$.b3=s}},
wx(a,b,c,d,e,f,g){var s,r=$.b3
if(r===c)return d.$1(e)
$.b3=c
s=r
try{r=d.$1(e)
return r}finally{$.b3=s}},
Av(a,b,c,d,e,f,g,h,i){var s,r=$.b3
if(r===c)return d.$2(e,f)
$.b3=c
s=r
try{r=d.$2(e,f)
return r}finally{$.b3=s}},
t4(a,b,c,d){t.O.a(d)
if(B.ab!==c){d=c.o7(d)
d=d}A.wz(d)},
rj:function rj(a){this.a=a},
ri:function ri(a,b,c){this.a=a
this.b=b
this.c=c},
rk:function rk(a){this.a=a},
rl:function rl(a){this.a=a},
rP:function rP(){},
rQ:function rQ(a,b){this.a=a
this.b=b},
ag:function ag(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
R:function R(a,b){this.a=a
this.$ti=b},
cu:function cu(a,b){this.a=a
this.b=b},
hY:function hY(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bT:function bT(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
rt:function rt(a,b){this.a=a
this.b=b},
rw:function rw(a,b){this.a=a
this.b=b},
rv:function rv(a,b){this.a=a
this.b=b},
ru:function ru(a,b){this.a=a
this.b=b},
rz:function rz(a,b,c){this.a=a
this.b=b
this.c=c},
rA:function rA(a,b){this.a=a
this.b=b},
rB:function rB(a){this.a=a},
ry:function ry(a,b){this.a=a
this.b=b},
rx:function rx(a,b){this.a=a
this.b=b},
lv:function lv(a){this.a=a
this.b=null},
hD:function hD(){},
qU:function qU(a,b){this.a=a
this.b=b},
qV:function qV(a,b){this.a=a
this.b=b},
il:function il(){},
ml:function ml(){},
rL:function rL(a,b){this.a=a
this.b=b},
rM:function rM(a,b,c){this.a=a
this.b=b
this.c=c},
t3:function t3(a,b){this.a=a
this.b=b},
yG(a,b){return new A.c0(a.h("@<0>").al(b).h("c0<1,2>"))},
A(a,b,c){return b.h("@<0>").al(c).h("tT<1,2>").a(A.wH(a,new A.c0(b.h("@<0>").al(c).h("c0<1,2>"))))},
C(a,b){return new A.c0(a.h("@<0>").al(b).h("c0<1,2>"))},
vE(a){return new A.cT(a.h("cT<0>"))},
b7(a){return new A.cT(a.h("cT<0>"))},
u9(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
u8(a,b,c){var s=new A.cU(a,b,c.h("cU<0>"))
s.c=a.e
return s},
cH(a,b,c){var s=A.yG(b,c)
s.U(0,a)
return s},
yH(a,b){var s,r,q=A.vE(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.o)(a),++r)q.j(0,b.a(a[r]))
return q},
vF(a,b){var s=A.vE(b)
s.U(0,a)
return s},
tU(a){var s,r
if(A.uo(a))return"{...}"
s=new A.dQ("")
try{r={}
B.a.j($.bN,a)
s.a+="{"
r.a=!0
a.ae(0,new A.pr(r,s))
s.a+="}"}finally{if(0>=$.bN.length)return A.c($.bN,-1)
$.bN.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
h7(a){return new A.h6(A.an(A.yI(null),null,!1,a.h("0?")),a.h("h6<0>"))},
yI(a){return 8},
cT:function cT(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
m9:function m9(a){this.a=a
this.c=this.b=null},
cU:function cU(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
X:function X(){},
aB:function aB(){},
pq:function pq(a){this.a=a},
pr:function pr(a,b){this.a=a
this.b=b},
h6:function h6(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
dY:function dY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
f3:function f3(){},
ib:function ib(){},
As(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.dn(r)
q=A.vm(String(s),null)
throw A.n(q)}q=A.rZ(p)
return q},
rZ(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.m4(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.rZ(a[s])
return a},
vB(a,b,c){return new A.h5(a,b)},
zT(a){return a.pz()},
zo(a,b){return new A.rD(a,[],A.AP())},
zp(a,b,c){var s,r=new A.dQ(""),q=A.zo(r,b)
q.fi(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
m4:function m4(a,b){this.a=a
this.b=b
this.c=null},
m5:function m5(a){this.a=a},
j3:function j3(){},
j5:function j5(){},
h5:function h5(a,b){this.a=a
this.b=b},
k0:function k0(a,b){this.a=a
this.b=b},
k_:function k_(){},
p5:function p5(a){this.b=a},
p4:function p4(a){this.a=a},
rE:function rE(){},
rF:function rF(a,b){this.a=a
this.b=b},
rD:function rD(a,b,c){this.c=a
this.a=b
this.b=c},
vk(a){return new A.jn(new WeakMap(),a.h("jn<0>"))},
vl(a){var s=!0
s=typeof a=="string"
if(s)A.yk(a)},
yk(a){throw A.n(A.tI(a,"object","Expandos are not allowed on strings, numbers, bools, records or null"))},
yh(a,b){a=A.aQ(a,new Error())
if(a==null)a=A.fi(a)
a.stack=b.t(0)
throw a},
an(a,b,c,d){var s,r=c?J.vy(a,d):J.vx(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
yJ(a,b,c){var s,r,q=A.a([],c.h("r<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.o)(a),++r)B.a.j(q,c.a(a[r]))
q.$flags=1
return q},
a6(a,b){var s,r
if(Array.isArray(a))return A.a(a.slice(0),b.h("r<0>"))
s=A.a([],b.h("r<0>"))
for(r=J.ap(a);r.q();)B.a.j(s,r.gH())
return s},
qW(a){var s,r,q
A.hp(0,"start")
if(Array.isArray(a)){s=a
r=s.length
return A.vN(r<r?s.slice(0,r):s)}q=A.a6(a,t.S)
return A.vN(q)},
kN(a){return new A.h0(a,A.vA(a,!1,!0,!1,!1,""))},
u4(a,b,c){var s=J.ap(b)
if(!s.q())return a
if(c.length===0){do a+=A.J(s.gH())
while(s.q())}else{a+=A.J(s.gH())
while(s.q())a=a+c+A.J(s.gH())}return a},
z7(){return A.e5(new Error())},
yd(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
ve(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
j8(a){if(a>=10)return""+a
return"0"+a},
jl(a){if(typeof a=="number"||A.uf(a)||a==null)return J.ec(a)
if(typeof a=="string")return JSON.stringify(a)
return A.vM(a)},
yi(a,b){A.wE(a,"error",t.K)
A.wE(b,"stackTrace",t.gl)
A.yh(a,b)},
bE(a){return new A.iH(a)},
aC(a,b){return new A.ce(!1,null,b,a)},
tI(a,b,c){return new A.ce(!0,a,b,c)},
y2(a,b,c){return a},
vO(a){var s=null
return new A.eW(s,s,!1,s,s,a)},
ho(a,b){return new A.eW(null,null,!0,a,b,"Value not in range")},
cJ(a,b,c,d,e){return new A.eW(b,c,!0,a,d,"Invalid value")},
u_(a,b,c){if(0>a||a>c)throw A.n(A.cJ(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.n(A.cJ(b,a,c,"end",null))
return b}return c},
hp(a,b){if(a<0)throw A.n(A.cJ(a,0,null,b,null))
return a},
oy(a,b,c,d,e){return new A.jQ(b,!0,a,e,"Index out of range")},
cn(a){return new A.hK(a)},
ba(a){return new A.lf(a)},
cM(a){return new A.dP(a)},
b_(a){return new A.j4(a)},
vm(a,b){return new A.og(a,b)},
yx(a,b,c){var s,r
if(A.uo(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.a([],t.s)
B.a.j($.bN,a)
try{A.Ah(a,s)}finally{if(0>=$.bN.length)return A.c($.bN,-1)
$.bN.pop()}r=A.u4(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
p1(a,b,c){var s,r
if(A.uo(a))return b+"..."+c
s=new A.dQ(b)
B.a.j($.bN,a)
try{r=s
r.a=A.u4(r.a,a,", ")}finally{if(0>=$.bN.length)return A.c($.bN,-1)
$.bN.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Ah(a,b){var s,r,q,p,o,n,m,l=a.gN(a),k=0,j=0
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
tW(a,b,c,d){var s
if(B.am===c){s=B.c.ga0(a)
b=J.cb(b)
return A.qX(A.cN(A.cN($.n2(),s),b))}if(B.am===d){s=B.c.ga0(a)
b=J.cb(b)
c=J.cb(c)
return A.qX(A.cN(A.cN(A.cN($.n2(),s),b),c))}s=B.c.ga0(a)
b=J.cb(b)
c=J.cb(c)
d=J.cb(d)
d=A.qX(A.cN(A.cN(A.cN(A.cN($.n2(),s),b),c),d))
return d},
yR(a){var s,r,q=$.n2()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.o)(a),++r)q=A.cN(q,J.cb(a[r]))
return A.qX(q)},
ur(a){A.to(a)},
en:function en(a,b,c){this.a=a
this.b=b
this.c=c},
rq:function rq(){},
al:function al(){},
iH:function iH(a){this.a=a},
cP:function cP(){},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eW:function eW(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
jQ:function jQ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hK:function hK(a){this.a=a},
lf:function lf(a){this.a=a},
dP:function dP(a){this.a=a},
j4:function j4(a){this.a=a},
ku:function ku(){},
hC:function hC(){},
rs:function rs(a){this.a=a},
og:function og(a,b){this.a=a
this.b=b},
k:function k(){},
aM:function aM(a,b,c){this.a=a
this.b=b
this.$ti=c},
aP:function aP(){},
a0:function a0(){},
mv:function mv(){},
qH:function qH(){this.b=this.a=0},
dQ:function dQ(a){this.a=a},
jn:function jn(a,b){this.a=a
this.$ti=b},
z2(a){var s
if(a==null)s=B.cK
else{s=new A.mj()
s.lp(a)}return s},
m3:function m3(){},
mj:function mj(){this.b=this.a=0},
jD:function jD(){},
ok:function ok(){},
ol:function ol(a,b){this.a=a
this.b=b},
oj:function oj(a,b,c){this.a=a
this.b=b
this.c=c},
oi:function oi(a,b,c){this.a=a
this.b=b
this.c=c},
jp:function jp(){},
lN:function lN(){},
jt:function jt(){},
jw:function jw(){var _=this
_.a=null
_.d=_.c=_.b=$},
lQ:function lQ(){},
rd(a){return new A.ln(a)},
kb:function kb(){},
ln:function ln(a){this.a=a},
re:function re(a){this.a=a},
iM:function iM(a){this.a=a},
ly:function ly(){},
iV:function iV(a){this.a=a},
lE:function lE(){},
j6:function j6(a){this.a=a},
lH:function lH(){},
jh:function jh(a){this.a=a},
lJ:function lJ(){},
jq:function jq(a){this.a=a},
lO:function lO(){},
jr:function jr(a){this.a=a},
lP:function lP(){},
jz:function jz(a){this.a=a},
lU:function lU(){},
jG:function jG(a){this.a=a},
lY:function lY(){},
jH:function jH(a){this.a=a},
lZ:function lZ(){},
jN:function jN(a){this.a=a},
m_:function m_(){},
jP:function jP(a){this.a=a},
m0:function m0(){},
k3:function k3(a){this.a=a},
m6:function m6(){},
k5:function k5(a){this.a=a},
m7:function m7(){},
kc:function kc(a){this.a=a},
ma:function ma(){},
kH:function kH(a){this.a=a},
mi:function mi(){},
kU:function kU(a){this.a=a},
mm:function mm(){},
kW:function kW(a){this.a=a},
mq:function mq(){},
l0:function l0(){},
iF:function iF(a,b){this.a=a
this.b=b},
nc:function nc(){},
l9:function l9(a){this.a=a},
mx:function mx(){},
lq:function lq(a){this.a=a},
mB:function mB(){},
lr:function lr(a){this.a=a},
mC:function mC(){},
iK:function iK(a){this.a=a},
iL:function iL(a,b,c){var _=this
_.y=a
_.Q$=b
_.e=c
_.a=null
_.d=_.c=_.b=$},
lw:function lw(){},
lx:function lx(){},
j1:function j1(a){this.a=a},
j2:function j2(a,b){var _=this
_.y=a
_.Q=_.z=0
_.e=b
_.a=null
_.d=_.c=_.b=$},
lG:function lG(){},
kZ:function kZ(a){this.a=a},
l_:function l_(a,b,c){var _=this
_.y=a
_.Q$=b
_.e=c
_.a=null
_.d=_.c=_.b=$},
mr:function mr(){},
ms:function ms(){},
lo:function lo(a){this.a=a},
mA:function mA(){},
iN:function iN(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.w=d
_.x=e
_.y=0
_.Q=_.z=!0
_.a=null
_.d=_.c=_.b=$},
nh:function nh(a,b){this.a=a
this.b=b},
ni:function ni(a,b,c){this.a=a
this.b=b
this.c=c},
lz:function lz(){},
tK(a,b,c,d){return new A.iR(b,c,d,a)},
iR:function iR(a,b,c,d){var _=this
_.Q=a
_.as=b
_.at=c
_.e=d
_.r=_.f=$
_.a=null
_.d=_.c=_.b=$},
vq(a,b){return new A.ez(a,b)},
fF:function fF(){},
ez:function ez(a,b){var _=this
_.x=a
_.y=b
_.a=null
_.d=_.c=_.b=$},
ex:function ex(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
eR:function eR(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
ee:function ee(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
eo:function eo(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
eY:function eY(a,b){var _=this
_.x=a
_.y=b
_.a=null
_.d=_.c=_.b=$},
lS:function lS(){},
eq:function eq(a,b){this.a=a
this.b=b},
ep:function ep(a,b){var _=this
_.e=a
_.f=b
_.r=$
_.a=null
_.d=_.c=_.b=$},
nB:function nB(a,b){this.a=a
this.b=b},
nC:function nC(){},
nD:function nD(a,b,c){this.a=a
this.b=b
this.c=c},
nE:function nE(){},
nF:function nF(a){this.a=a},
es:function es(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
fL:function fL(){},
eh:function eh(){var _=this
_.a=null
_.d=_.c=_.b=$},
ei:function ei(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
iU:function iU(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
ey:function ey(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
eS:function eS(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
kA:function kA(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
f9:function f9(){var _=this
_.a=null
_.d=_.c=_.b=$},
rf:function rf(a){this.a=a},
eH:function eH(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
lB:function lB(){},
lC:function lC(){},
lD:function lD(){},
lT:function lT(){},
md:function md(){},
me:function me(){},
oc(a,b,c,d){return new A.jv(a,b,c,d==null?1:d)},
jv:function jv(a,b,c,d){var _=this
_.e=a
_.f=b
_.r=$
_.w=null
_.x=c
_.y=d
_.z=0
_.a=null
_.d=_.c=_.b=$},
od:function od(a){this.a=a},
ew:function ew(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
ev:function ev(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
lR:function lR(){},
vr(a,b){return new A.eA(a,b)},
eA:function eA(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
jL:function jL(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
jO:function jO(a,b,c,d,e){var _=this
_.at=a
_.e=b
_.f=c
_.r=d
_.w=1
_.x=e
_.a=null
_.d=_.c=_.b=$},
eB:function eB(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
eI:function eI(a,b){var _=this
_.e=a
_.f=b
_.r=0
_.w=$
_.a=null
_.d=_.c=_.b=$},
ka:function ka(a,b,c,d,e){var _=this
_.r=a
_.a=b
_.b=c
_.d=_.c=$
_.e=d
_.f=e},
dL:function dL(a,b){this.a=a
this.b=b},
kd:function kd(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
eP:function eP(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
kB:function kB(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
iE:function iE(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
u0(a,b,c,d){var s=new A.kK(a,b,c,A.b7(t.u),A.a([],t.gk))
s.ic(b,c,d)
return s},
vQ(a){return new A.f0(a)},
kL:function kL(){},
pX:function pX(a){this.a=a},
kK:function kK(a,b,c,d,e){var _=this
_.at=a
_.e=b
_.f=c
_.r=d
_.w=1
_.x=e
_.a=null
_.d=_.c=_.b=$},
f0:function f0(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
f_:function f_(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
mk:function mk(){},
kX:function kX(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
w_(a){return new A.f6(a)},
f6:function f6(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
mc:function mc(){},
eM:function eM(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
eN:function eN(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
jg:function jg(){},
jy:function jy(){},
yf(a,b){var s=$.tw()
if(!s.a.aj(b))return null
return s.kN(a,b)},
fH:function fH(){},
S(a,b,c,d){var s=A.a([],t.J)
if(c!=null)B.a.j(s,c)
if(d!=null)B.a.U(s,d)
return new A.fD(a,b,s)},
jA:function jA(a){this.a=a},
fD:function fD(a,b,c){this.a=a
this.b=b
this.c=c},
u(a,b,c){var s,r,q,p,o,n,m,l,k
$.wo=a
if(b==null)b=B.iO
s=t.s
r=t.gQ
q=A.a6(new A.aN(A.a(c.split("\n"),s),t.gL.a(new A.ta()),r),r.h("aF.E"))
A.iq(q)
if(b===B.a9||b===B.au){p=A.a(q.slice(0),A.M(q))
for(r=t.gS.h("cL<X.E>"),o=0;o<q.length;++o)B.a.i(p,o,A.t_(A.qW(new A.cL(new A.d6(q[o]),r)),A.AT()))
A.iq(p)}if(b===B.iP||b===B.au){p=A.a(q.slice(0),A.M(q))
for(o=0;r=q.length,o<r;++o)B.a.i(p,r-o-1,A.t_(q[o],A.AU()))
A.iq(p)}if(b===B.au||b===B.iQ||b===B.q){p=A.a(q.slice(0),A.M(q))
for(r=t.gS.h("cL<X.E>"),o=0;n=q.length,o<n;++o)B.a.i(p,n-o-1,A.t_(A.qW(new A.cL(new A.d6(q[o]),r)),A.wI()))
A.iq(p)}if(b===B.q){m=A.a([],s)
l=0
for(;;){if(0>=q.length)return A.c(q,0)
if(!(l<q[0].length))break
for(k=0,r="";k<q.length;++k,r=n){n=q[k]
if(!(l<n.length))return A.c(n,l)
n=r+A.Ax(n[l])}B.a.j(m,r.charCodeAt(0)==0?r:r);++l}A.iq(m)
p=A.a(m.slice(0),s)
for(s=t.gS.h("cL<X.E>"),o=0;r=m.length,o<r;++o)B.a.i(p,r-o-1,A.t_(A.qW(new A.cL(new A.d6(m[o]),s)),A.wI()))
A.iq(p)}},
t_(a,b){var s,r,q
for(s=a.length,r=0,q="";r<s;++r)q+=A.J(b.$1(a[r]))
return q.charCodeAt(0)==0?q:q},
Ak(a){return A.wt(A.wu(a))},
wt(a){var s,r,q,p
A.a3(a)
for(s=0;s<3;++s){r=$.Al[s]
q=B.j.c4(r,a)
if(q!==-1){p=1-q
if(!(p>=0&&p<r.length))return A.c(r,p)
return r[p]}}return a},
wu(a){var s,r,q,p
A.a3(a)
for(s=0;s<3;++s){r=$.Am[s]
q=B.j.c4(r,a)
if(q!==-1){p=1-q
if(!(p>=0&&p<r.length))return A.c(r,p)
return r[p]}}return a},
Ax(a){var s,r,q,p
for(s=0;s<2;++s){r=$.Aw[s]
q=B.j.c4(r,a)
if(q!==-1){p=B.c.ad(q+1,4)
if(!(p<r.length))return A.c(r,p)
return r[p]}}return a},
iq(a){var s,r,q,p,o,n=B.a.gaB(a).length,m=a.length,l=A.an(n*m,$.wZ(),!1,t.oC),k=new A.a8(l,new A.Y(new A.d(0,0),new A.d(n,m)),t.k5)
for(s=0;s<a.length;++s)for(m=s*n,r=0;r<B.a.gaB(a).length;++r){if(!(s<a.length))return A.c(a,s)
q=a[s]
if(!(r<q.length))return A.c(q,r)
p=q[r]
q=$.c7
if(q!=null&&q.aj(p)){q=$.c7.p(0,p)
q.toString
o=q}else{q=$.xR()
if(q.aj(p)){q=q.p(0,p)
q.toString
o=q}else{q=$.xS().p(0,p)
q.toString
o=q}}k.l(r,s)
B.a.i(l,m+r,o)}n=$.tw()
m=$.cr
if(m==null)m=$.wo
if(m==null)m=1
l=$.cq.u()
n.cf(n.$ti.c.a(new A.jA(k)),null,null,null,m,m,l)},
dh:function dh(a,b){this.a=a
this.b=b},
ta:function ta(){},
nN:function nN(){},
nR:function nR(){},
nS:function nS(){},
nO:function nO(){},
nP:function nP(){},
nV:function nV(){},
nW:function nW(){},
nQ:function nQ(){},
nT:function nT(){},
nU:function nU(){},
a4(a,b,c){A.i()
$.aT.b=new A.nm(a,c,A.C(t.h,t.S))
$.aT.u().b=b
return $.aT.u()},
I(a,b){A.aV()
return $.im=A.v3(a,B.j.dO(a," _")?$.dp():$.dq(),b)},
j(a,b,c){return new A.oA(a,b,c,A.C(t.h,t.S))},
v3(a,b,c){var s=t.Q
return new A.cd(a,b,c,A.C(t.h,s),A.C(t.X,s),A.C(t.M,s))},
fq(a,b){return new A.t9(a,b)},
A4(a){return A.w(a)},
aW(){return new A.tr(1,0.1)},
i(){var s,r,q,p,o,n,m,l=$.h
if(l==null)return
s=l.ek()
r=$.bh()
q=s.a.a6(1)
p=l.dy
p===$&&A.b()
o=l.fr
o===$&&A.b()
n=l.x
if(n==null)n=$.aT.u().x
if(n==null)n=1
m=$.aT.u().ay
m===$&&A.b()
r.cf(r.$ti.c.a(s),q.a,p,o,n,null,m)
$.h=null},
aV(){var s,r,q,p,o,n,m=$.im
if(m==null)return
s=m.ek()
r=m.b
r.toString
q=m.c
p=m.d
o=m.e
n=$.bc
r.cf(r.$ti.c.a(s),s.a,q,p,o,null,n)
$.im=null},
rm:function rm(){},
nm:function nm(a,b,c){var _=this
_.Q=a
_.as=b
_.ax=_.at=null
_.ay=$
_.ch=!1
_.a=c
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=null},
oA:function oA(a,b,c,d){var _=this
_.Q=a
_.as=b
_.at=c
_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=null
_.db=!1
_.dx=null
_.fr=_.dy=$
_.a=d
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=null},
oG:function oG(a){this.a=a},
oD:function oD(a,b){this.a=a
this.b=b},
oL:function oL(a,b){this.a=a
this.b=b},
oM:function oM(a){this.a=a},
oK:function oK(a,b){this.a=a
this.b=b},
oH:function oH(a,b){this.a=a
this.b=b},
oN:function oN(a){this.a=a},
oI:function oI(a,b){this.a=a
this.b=b},
oB:function oB(a){this.a=a},
oC:function oC(a){this.a=a},
oE:function oE(a,b){this.a=a
this.b=b},
oF:function oF(a,b){this.a=a
this.b=b},
oJ:function oJ(a){this.a=a},
cd:function cd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=c
_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=null
_.ay=d
_.ch=e
_.CW=f},
n6:function n6(a){this.a=a},
n7:function n7(a){this.a=a},
n5:function n5(a,b,c){this.a=a
this.b=b
this.c=c},
n4:function n4(a){this.a=a},
n9:function n9(a){this.a=a},
n3:function n3(a){this.a=a},
n8:function n8(){},
t9:function t9(a,b){this.a=a
this.b=b},
tr:function tr(a,b){this.a=a
this.b=b},
a7(a,b,c){var s=$.bh().c9(a)
if(s!=null)return new A.m2(s,b,c==null?B.c6:c)
return new A.mw(a,b,c==null?B.c6:c)},
ut(a,b){return new A.bx(a,b)},
w5(a){var s=new A.mb(A.de(t.iZ))
s.lo(a)
return s},
fX:function fX(a,b){this.a=a
this.b=b},
ro:function ro(){},
m2:function m2(a,b,c){this.c=a
this.a=b
this.b=c},
mw:function mw(a,b,c){this.c=a
this.a=b
this.b=c},
aH:function aH(a,b){this.a=a
this.b=b},
hR:function hR(a){this.a=a},
mb:function mb(a){this.a=a},
rI:function rI(a){this.a=a},
bx:function bx(a,b){this.a=a
this.b=b},
is(a,b,c,d){var s=$.v_()
s.cf(s.$ti.c.a(new A.ju(a)),null,1,100,d,b,null)},
ju:function ju(a){this.b=a},
Bi(){A.a4(239,null,null).a2("magic/ring")
A.i()
var s=$.h=A.j("Ring[s] of Wisdom",B.E,1000)
s.v(20)
s.x=0.05
s.k6(new A.tp())},
tp:function tp(){},
iu(a,b){var s=A.C(t.iZ,t.i)
b.ae(0,new A.ts(s))
$.hA.i(0,a,new A.dg(A.w5(s),a))},
ts:function ts(a){this.a=a},
Bv(){var s,r,q="hit[s]",p=null,o="bash[es]",n="stab[s]",m="pierce[s]",l=A.a4(225,p,q)
l.a2("equipment/weapon/club")
l.x=0.5
l.co(25,5)
A.i()
l=$.h=A.j("Stick",B.k,0)
l.E(1,20)
l.a5(4,6)
l.a8(3)
s=$.b4()
l.a.i(0,s,10)
l.w=10
A.i()
l=$.h=A.j("Cudgel",B.o,20)
l.E(6,60)
l.a5(9,8)
l.a8(4)
l.a.i(0,s,5)
l.w=10
A.i()
l=$.h=A.j("Club",B.v,40)
l.v(14)
l.a5(12,11)
l.a8(5)
l.a.i(0,s,2)
l.w=10
l=A.a4(237,p,q)
l.a2("equipment/weapon/staff")
l.x=0.5
l.y=!0
l.co(35,4)
A.i()
l=$.h=A.j("Walking Stick",B.k,10)
l.E(2,40)
l.a5(9,10)
l.a8(3)
l.a.i(0,s,5)
l.w=15
A.i()
l=$.h=A.j("Sta[ff|aves]",B.v,50)
l.v(7)
l.a5(13,14)
l.a8(5)
l.a.i(0,s,2)
l.w=15
A.i()
l=$.h=A.j("Quartersta[ff|aves]",B.o,80)
l.v(24)
l.a5(20,22)
l.a8(8)
l.a.i(0,s,2)
l.w=15
l=A.a4(243,p,o)
l.a2("equipment/weapon/hammer")
l.x=0.5
l.co(15,5)
A.i()
l=$.h=A.j("Hammer",B.k,120)
l.v(40)
l.a5(28,22)
l.a8(12)
A.i()
l=$.h=A.j("Mattock",B.v,240)
l.v(46)
l.a5(36,29)
l.a8(16)
A.i()
l=$.h=A.j("War Hammer",B.o,400)
l.v(52)
l.a5(44,38)
l.a8(20)
l=A.a4(250,p,o)
l.a2("equipment/weapon/mace")
l.x=0.5
l.co(15,4)
A.i()
l=$.h=A.j("Morningstar",B.o,130)
l.v(24)
l.a5(25,21)
l.a8(11)
A.i()
l=$.h=A.j("Mace",B.f,310)
l.v(33)
l.a5(36,32)
l.a8(16)
l=A.a4(241,p,"whip[s]")
l.a2("equipment/weapon/whip")
l.x=0.5
l.co(25,4)
A.i()
l=$.h=A.j("Whip",B.k,40)
l.v(4)
l.a5(9,7)
l.a8(1)
l.a.i(0,s,10)
l.w=5
A.i()
l=$.h=A.j("Chain Whip",B.o,230)
l.v(15)
l.a5(18,17)
l.a8(2)
A.i()
l=$.h=A.j("Flail",B.f,350)
l.v(27)
l.a5(28,24)
l.a8(4)
l=A.a4(209,p,n)
l.a2("equipment/weapon/dagger")
l.x=0.5
l.co(2,8)
A.i()
l=$.h=A.j("Kni[fe|ves]",B.d,20)
l.E(3,20)
l.a5(6,5)
l.a8(6)
A.i()
l=$.h=A.j("Dagger",B.o,30)
l.E(4,40)
l.a5(8,6)
l.a8(8)
A.i()
l=$.h=A.j("Dirk",B.G,50)
l.E(6,70)
l.a5(9,7)
l.a8(9)
A.i()
l=$.h=A.j("Stiletto[es]",B.f,80)
l.v(10)
l.a5(11,8)
l.a8(11)
A.i()
l=$.h=A.j("Rondel",B.J,130)
l.v(20)
l.a5(13,9)
l.a8(13)
A.i()
l=$.h=A.j("Baselard",B.h,200)
l.v(30)
l.a5(15,11)
l.a8(15)
A.i()
l=$.h=A.j("Mercygiver",B.V,2000)
l.E(20,50)
l.x=0.2
l.a5(12,6)
r=t.lT.a(new A.tt())
l.db=!0
l.k6(r)
l=A.a4(170,p,"slash[es]")
l.a2("equipment/weapon/sword")
l.x=0.5
l.co(20,5)
A.i()
l=$.h=A.j("Rapier",B.i,140)
l.v(13)
l.a5(13,13)
l.a8(4)
A.i()
l=$.h=A.j("Shortsword",B.f,230)
l.v(17)
l.a5(15,15)
l.a8(6)
A.i()
l=$.h=A.j("Scimitar",B.o,370)
l.v(18)
l.a5(24,18)
l.a8(9)
A.i()
l=$.h=A.j("Cutlass[es]",B.B,520)
l.v(20)
l.a5(26,22)
l.a8(11)
A.i()
l=$.h=A.j("Falchion",B.J,750)
l.v(34)
l.a5(28,25)
l.a8(15)
l=A.a4(186,p,n)
l.a2("equipment/weapon/spear")
l.x=0.5
l.kJ(9)
A.i()
l=$.h=A.j("Pointed Stick",B.v,10)
l.E(2,30)
l.a5(7,9)
l.a8(6)
l.a.i(0,s,7)
l.w=12
A.i()
l=$.h=A.j("Spear",B.k,160)
l.E(13,60)
l.a5(16,13)
l.a8(15)
A.i()
l=$.h=A.j("Angon",B.o,340)
l.v(21)
l.a5(20,19)
l.a8(20)
l=A.a4(186,p,n)
l.a2("equipment/weapon/polearm")
l.x=0.5
l.y=!0
l.kJ(4)
A.i()
l=$.h=A.j("Lance",B.G,550)
l.v(28)
l.a5(22,23)
l.a8(20)
A.i()
l=$.h=A.j("Partisan",B.f,850)
l.v(35)
l.a5(26,25)
l.a8(26)
l=A.a4(191,p,"chop[s]")
l.a2("equipment/weapon/axe")
l.x=0.5
A.i()
l=$.h=A.j("Hatchet",B.f,90)
l.E(6,50)
l.a5(12,10)
l.ff(20,8)
A.i()
l=$.h=A.j("Axe",B.k,210)
l.E(12,70)
l.a5(15,14)
l.ff(24,7)
A.i()
l=$.h=A.j("Valaska",B.o,330)
l.v(24)
l.a5(19,19)
l.ff(26,5)
A.i()
l=$.h=A.j("Battleaxe",B.i,550)
l.v(40)
l.y=!0
l.a5(25,30)
l.ff(28,4)
l=A.a4(8976,p,q)
l.a2("equipment/weapon/bow")
l.x=0.3
l.y=!0
l.co(50,5)
A.i()
l=$.h=A.j("Short Bow",B.k,120)
l.E(6,60)
l.ay=A.bb(new A.aG(A.aO("arrow",B.x,B.U).a6(1)),m,5,p,8)
l.cx=12
l.a8(2)
l.a.i(0,s,15)
l.w=10
A.i()
l=$.h=A.j("Longbow",B.v,250)
l.v(13)
l.ay=A.bb(new A.aG(A.aO("arrow",B.x,B.U).a6(1)),m,9,p,12)
l.cx=18
l.a8(3)
l.a.i(0,s,7)
l.w=13
A.i()
l=$.h=A.j("Crossbow",B.o,600)
l.v(28)
l.ay=A.bb(new A.aG(A.aO("bolt",B.x,B.U).a6(1)),m,14,p,16)
l.cx=24
l.a8(4)
l.a.i(0,s,4)
l.w=14},
tt:function tt(){},
ai(a,b,c,d,e,f,g){var s
A.fp()
$.ca().c3("monster/"+b)
s=t.s
$.ah.b=new A.ob(a,B.a.gcB(b.split("/")),e,$.aX(),A.a([],t.x),A.a([],s))
$.ah.u().e=f
$.ah.u().r=c
$.ah.u().b=g
if(d!=null)B.a.U($.ah.u().x,A.a(d.split(" "),s))
return $.ah.u()},
fp(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7="immobile",b8=$.c6
if(b8==null)return
s=t.s
r=A.a([$.ah.u().ch],s)
if(r.length===0)B.a.j(r,"monster")
q=A.vF($.ah.u().x,t.N)
q.U(0,b8.x)
p=b8.r
if(p==null)p=$.ah.u().r
if(q.G(0,b7))p=0
o=b8.fr
n=o.length
if(n===1){if(0>=n)return A.c(o,0)
m=o[0]}else m=n>1?new A.lt(o):null
o=b8.ay
n=b8.fx
if(n==null)n=B.x
o=A.aO(o,n,b8.ch?B.ck:B.U).a6(1)
n=b8.cx
l=b8.db
k=b8.dx
j=b8.dy
if(b8.d==null)$.ah.u()
i=$.ah.u().c
h=b8.c
g=b8.CW
f=b8.cy
e=b8.b
if(e==null)e=0
d=$.ah.u().b
if(d==null)d=10
c=b8.at
if(c==null)c=$.ah.u().at
b=b8.ax
if(b==null)b=$.ah.u().ax
a=b8.f
if(a==null)a=$.ah.u().f
if(a==null)a=0
a0=b8.e
if(a0==null)a0=0
a1=$.ah.u().e
if(a1==null)a1=0
a2=$.ah.u().as
if(a2==null)a2=b8.as
a3=b8.y
if(a3==null)a3=$.ah.u().y
a4=b8.z
if(a4==null)a4=$.ah.u().z
if(b8.Q==null)$.ah.u()
a5=q.n0()
a5.U(0,q)
q=a5.ac(0,"berzerk")
a6=a5.ac(0,"cowardly")
a7=a5.ac(0,"fearless")
a8=a5.ac(0,b7)
a9=a5.ac(0,"protective")
b0=a5.ac(0,"unique")
if(a5.a!==0)A.a_(A.aC('Unknown flags "'+a5.aP(0,", ")+'"',null))
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
B.a.U(b2,$.ah.u().w)
B.a.U(b2,b8.w)
B.a.j(s,$.ah.u().ch)
b4=$.ca()
b5=b8.a
if(b5==null)b5=$.ah.u().a
b6=B.a.aP(r," ")
b4.cf(b4.$ti.c.a(new A.as(o,n,g,l,k,f,e+d,c,b,a,a0+a1,new A.hR(j),new A.ad(i.a|h.a),new A.nl(q,a6,a7,a8,a9,b0),b3,a2,b2,a3,a4,m,s,b1)),o.a,g,g,b5,b5,b6)
$.c6=null},
p(a,b,c,d,e,f,g){var s
A.fp()
s=new A.iS(a,b,A.am($.ah.u().ay,c,null),d,A.a([],t.da),A.a([],t.a_),A.a([],t.f8),A.a([],t.aC),f,$.aX(),A.a([],t.x),A.a([],t.s))
s.e=g
s.r=e
return $.c6=s},
nk(a,b,c,d,e){return new A.iS(a,b,d,e,A.a([],t.da),A.a([],t.a_),A.a([],t.f8),A.a([],t.aC),c,$.aX(),A.a([],t.x),A.a([],t.s))},
rn:function rn(){},
ob:function ob(a,b,c,d,e,f){var _=this
_.ay=a
_.ch=b
_.a=c
_.b=null
_.c=d
_.r=_.f=_.e=_.d=null
_.w=e
_.x=f
_.ax=_.at=_.as=_.Q=_.z=_.y=null},
iS:function iS(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
lA:function lA(a){this.a=a},
ac:function ac(a){this.a=a},
i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},
lt:function lt(a){this.a=a},
bq:function bq(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
fC:function fC(a,b){this.b=a
this.a=b},
d7:function d7(a,b){this.b=a
this.a=b},
jI:function jI(a,b,c){this.b=a
this.c=b
this.a=c},
fU:function fU(a,b){this.b=a
this.a=b},
bP:function bP(a,b,c){this.b=a
this.c=b
this.a=c},
b1:function b1(a,b){this.b=a
this.a=b},
bK:function bK(a,b){this.b=a
this.a=b},
qs:function qs(a,b,c){this.a=a
this.b=b
this.c=c},
bv:function bv(a,b){this.b=a
this.a=b},
jo:function jo(){},
js:function js(){},
kG:function kG(){},
kV:function kV(){},
fz(a,b,c){var s=$.bf
$.bf=s+1
return new A.d3(a,b,c,s)},
d3:function d3(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
iG:function iG(a){this.a=a},
iO:function iO(a){this.a=a},
v8(a){return 2*A.v(a,1,15,1,4)/A.hF(50)},
iP:function iP(a){this.a=a},
ha:function ha(){},
iJ:function iJ(a){this.a=a},
iQ:function iQ(a){this.a=a},
k2:function k2(a){this.a=a},
kY:function kY(a){this.a=a},
l3:function l3(a){this.a=a},
lp:function lp(a){this.a=a},
bJ:function bJ(a,b){this.a=a
this.b=b},
nd:function nd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
i7:function i7(a,b){this.a=a
this.b=b},
be:function be(){},
rG:function rG(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
y1(a){var s,r=A.a([],t.c4),q=Math.min($.m().hM(1,10),5),p=!1
for(;;){if(!(!p||r.length<q))break
s=$.uA().hT(a)
if(s.w)p=!0
if(!B.a.G(r,s))B.a.j(r,s)}return r},
fA:function fA(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g},
fh(a,b,c,d,e,f,g,h,i,j,k,l){var s=A.a((j==null?"monster":j).split(" "),t.s),r=i==null?1:i,q=h==null?1:h,p=$.uA()
p.cf(p.$ti.c.a(new A.fA(d,e,s,r,q,c,b!==!1)),null,k,f,l,g,null)},
ul(a,b){var s=null
A.fh("dungeon",s,new A.t8(a),"room",0.04,100,s,s,s,s,1,b)},
AL(a,b,c){var s="catacomb"
A.fh(s,null,new A.t5(),s,0.02,100,b,null,null,a,1,c)},
AM(a,b,c){A.fh("cavern",null,new A.t6(),"glowing-moss",0.1,100,b,null,null,a,1,c)},
Bb(a,b,c){A.fh("lake",!1,new A.tk(),"water",0.01,b,null,null,0,a,c,null)},
Bj(a,b,c){A.fh("river",!1,new A.tq(),"water",0.01,b,null,null,0,a,c,null)},
ti(a,b,c){A.fh(a+" keep",!1,new A.tj(),"room",0.05,b,null,1.5,0,a,c,2)},
e7(a,b,c){var s=null
A.fh(a+" pit",!1,new A.tn(a),"glowing-moss",0.05,b,s,s,s,s,c,0.2)},
t8:function t8(a){this.a=a},
t5:function t5(){},
t6:function t6(){},
tk:function tk(){},
tq:function tq(){},
tj:function tj(){},
tn:function tn(a){this.a=a},
ej:function ej(a,b,c){var _=this
_.d=a
_.e=b
_.f=c
_.c=_.b=_.a=$},
ek:function ek(){this.c=this.b=this.a=$},
nt:function nt(a,b,c){var _=this
_.a=a
_.b=$
_.c=b
_.d=c},
nx:function nx(){},
nw:function nw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nu:function nu(){},
nv:function nv(){},
jb:function jb(a){this.a=a
this.c=this.b=0},
er:function er(a){var _=this
_.w=a
_.c=_.b=_.a=$},
yE(a){var s=A.yD($.m().cK(a,a/2|0),B.iR)
return s},
yD(a,b){return new A.eF(new A.p6(b,A.C(t.u,t.d2),A.a([],t.fv)),a)},
eF:function eF(a,b){var _=this
_.r=a
_.w=0
_.x=b
_.c=_.b=_.a=$},
p9:function p9(a){this.a=a},
p7:function p7(a){this.a=a},
p8:function p8(a,b){this.a=a
this.b=b},
eE:function eE(a,b){this.a=a
this.b=b
this.c=0},
r1:function r1(a,b){this.a=a
this.b=b},
p6:function p6(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(){this.c=this.b=this.a=$},
pQ(a,b,c,d){return new A.pP(b,d,a,c)},
hj:function hj(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
pP:function pP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eQ:function eQ(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.c=_.b=_.a=$},
pY:function pY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0
_.f=e},
hX:function hX(a,b){this.a=a
this.b=b},
bL(a,b,c,d){var s=c==null?$.m().aC(1,3):c
return new A.rK(a,b,s,d==null?$.m().aC(1,3):d)},
f1:function f1(){this.c=this.b=this.a=$},
qa:function qa(a){this.a=a},
qb:function qb(a){this.a=a},
q8:function q8(a){this.a=a},
qc:function qc(a){this.a=a},
q9:function q9(a){this.a=a},
q7:function q7(a){this.a=a},
rK:function rK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
u2(a,b){var s,r
switch(b.a){case 0:return $.m().T(3)===0?A.vS(a):A.vW(a)
case 1:return $.m().T(3)===0?A.vU(a):A.vV(a)
case 2:s=$.m().T(10)
A:{if(0===s){r=A.vU(a)
break A}if(1===s){r=A.vV(a)
break A}if(2===s||3===s){r=A.vS(a)
break A}r=A.vW(a)
break A}return r}},
qf(){var s=$.m()
if(s.T(5)!==0)return B.iK
if(s.T(5)!==0)return B.iL
return B.iM},
vW(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
switch(A.qf().a){case 0:s=$.m()
s=new A.O(s.aw(3,8),s.aw(3,8))
break
case 1:s=$.m()
s=new A.O(s.aw(7,10),s.aw(7,10))
break
case 2:s=$.m()
s=new A.O(s.aw(9,16),s.aw(9,16))
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
k=A.an(s*l,$.mJ(),!1,t.gf)
j=new A.a8(k,new A.Y(new A.d(0,0),new A.d(s,l)),t.o)
for(i=0;i<m;)for(++i,l=i*s,h=0;h<n;){++h
g=$.ty()
j.l(h,i)
B.a.i(k,l+h,g)}f=A.a([],t.G)
if(r<=9&&(n&1)===1&&(m&1)===1)B.a.j(f,A.a([new A.d(B.c.A(n,2)+1,B.c.A(m,2)+1)],t.l))
if(q>=5)for(s=B.c.A(r-1,2),l=t.l,e=0;e<s;++e){k=1+e
g=n-e
d=m-e
B.a.j(f,A.a([new A.d(k,k),new A.d(g,k),new A.d(k,d),new A.d(g,d)],l))}A.u1(j)
return j},
vS(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
switch(A.qf().a){case 0:s=B.ig
break
case 1:s=B.ih
break
case 2:s=B.ii
break
default:s=null}r=s.a
q=s.b
s=$.m()
p=s.aw(r,q)
o=s.aw(p,B.e.aR(p*1.5))
n=s.T(2)===0
m=n?o:p
l=n?p:o
k=s.aw(2,m-3)
j=s.aw(2,l-3)
i=s.T(2)===0
h=s.T(2)===0
s=m+2
g=l+2
f=A.an(s*g,$.mJ(),!1,t.gf)
e=new A.a8(f,new A.Y(new A.d(0,0),new A.d(s,g)),t.o)
for(d=0;d<l;)for(++d,g=d*s,c=0;c<m;){++c
b=$.ty()
e.l(c,d)
B.a.i(f,g+c,b)}a=h?0:m-k
a0=h?k:m
a1=i?0:l-j
a2=i?j:l
for(d=a1;d<a2;)for(++d,g=d*s,c=a;c<a0;){++c
b=$.mJ()
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
B.a.j(a9,new A.d(s-a8,b0))}}}A.u1(e)
return e},
vU(a){var s,r,q,p
switch(A.qf().a){case 0:s=B.cq
break
case 1:s=B.co
break
case 2:s=B.cp
break
default:s=null}r=s.a
q=s.b
p=$.m().aw(r,q)
return A.vT(p,B.c.A(p-1,2),a)},
vV(a){var s,r,q,p
switch(A.qf().a){case 0:s=B.cq
break
case 1:s=B.co
break
case 2:s=B.cp
break
default:s=null}r=s.a
q=s.b
s=$.m()
p=s.aw(r,q)
return A.vT(p,s.aw(2,B.c.A(p,2)-1),a)},
vT(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=a+2,h=A.an(i*i,$.mJ(),!1,t.gf),g=new A.a8(h,new A.Y(new A.d(0,0),new A.d(i,i)),t.o)
for(s=0;s<a;s=r)for(r=s+1,q=r*i,p=0;p<a;++p){if(p+s<b)continue
o=a-p-1
if(o+s<b)continue
if(p+a-s-1<b)continue
if(o+a-s-1<b)continue
o=p+1
n=$.ty()
g.l(o,r)
B.a.i(h,q+o,n)}m=A.a([],t.G)
if(a<=9&&(a&1)===1){i=B.c.A(a,2)+1
B.a.j(m,A.a([new A.d(i,i)],t.l))}if((a&1)===1)for(i=B.c.A(a,2),h=i-1,q=t.l,l=2;l<h;++l){o=i+1
n=o-l
k=o+l
B.a.j(m,A.a([new A.d(o,n),new A.d(k,o),new A.d(o,k),new A.d(n,o)],q))}j=B.c.A(a+1,2)-B.c.A(b+1,2)-3
for(i=a-1,h=a+4,q=t.l,l=0;l<=j;++l){o=B.c.A(i,2)-l
n=B.c.A(h,2)+l
B.a.j(m,A.a([new A.d(o,o),new A.d(n,o),new A.d(o,n),new A.d(n,n)],q))}A.u1(g)
return g},
u1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(s=a.b,r=A.ab(s),q=t.ca,p=t.e0,o=p.h("k.E"),n=a.a,s=s.b.a,m=n.length,l=a.$ti.c;r.q();){k=r.b
j=r.c
a.l(k,j)
i=j*s+k
if(!(i>=0&&i<m))return A.c(n,i)
h=n[i]
if(!(h.a==null&&h.b===B.r))continue
h=new A.qe(new A.d(k,j),a)
g=A.a6(new A.aj(B.at,q.a(h),p),o)
f=B.a.cV(B.ca,h)
h=g.length
if(h===1){h=l.a(new A.dN(null,B.a.gl7(g).gcI()))
a.l(k,j)
B.a.i(n,i,h)}else if(h<=1)if(f){h=l.a($.xi())
a.l(k,j)
B.a.i(n,i,h)}}},
z5(a){return new A.dN(null,a)},
vR(a){return new A.dN(a,B.r)},
kS:function kS(){},
hu:function hu(a,b){this.a=a
this.b=b},
qe:function qe(a,b){this.a=a
this.b=b},
dN:function dN(a,b){this.a=a
this.b=b},
hv:function hv(a,b){this.a=a
this.b=b},
ra:function ra(a){this.a=a},
zP(a){return A.tL(a,$.mO())},
Aq(a){return A.tX(a,$.mR())},
zQ(a){return A.tL(a,$.uP())},
Ar(a){return A.tX(a,$.xw())},
zO(a){return A.tL(a,$.uO())},
Ap(a){return A.tX(a,$.xv())},
ze(a){var s=$.xk()
if(s.aj(a)){s=s.p(0,a)
s.toString
return s}return A.a([$.xm(),$.xn()],t.J)},
H(a,b,c,d){if(d==null)d=B.u
if(0>=b.length)return A.c(b,0)
return new A.r5(a,A.a([A.cB(b.charCodeAt(0),c,d)],t.mO))},
r7:function r7(){},
r6:function r6(){},
r5:function r5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=0},
ch(a,b){var s=$.j9.b7(a,new A.no(a)).b
s.bh(s.$ti.c.a(b))
if(s.gI(0)>10)s.cH()},
ci(a,b,c,d){var s=$.j9.b7(a,new A.nq(a)).c.b7(b,new A.nr())
s.bh(s.$ti.c.a(c))
if(s.gI(0)>20)s.cH()
A.ja(a,b,d)},
ja(a,b,c){$.j9.b7(a,new A.np(a)).d.i(0,b,c)},
ye(a){var s,r=$.nn
if(r==null)return null
s=$.j9.p(0,a)
if(s==null)return null
return s.t(0)},
ua(a){var s=t.N
return new A.fd(a,A.h7(s),A.C(s,t.jo),A.C(s,t.jv))},
no:function no(a){this.a=a},
nq:function nq(a){this.a=a},
nr:function nr(){},
np:function np(a){this.a=a},
fd:function fd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rH:function rH(){},
G:function G(){},
d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},
jx:function jx(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
jF:function jF(){},
iI:function iI(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
vI(a){return new A.kx(a)},
vj(a,b){return new A.ji(a,b)},
jT:function jT(){},
kx:function kx(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
je:function je(a,b,c){var _=this
_.z=a
_.e=b
_.f=c
_.a=null
_.d=_.c=_.b=$},
ji:function ji(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
le:function le(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
lh:function lh(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
cx:function cx(){},
ny:function ny(a,b){this.a=a
this.b=b},
nz:function nz(a){this.a=a},
nA:function nA(a,b){this.a=a
this.b=b},
k7:function k7(){},
la:function la(a,b,c,d){var _=this
_.z=a
_.Q=b
_.e=c
_.f=d
_.a=null
_.d=_.c=_.b=$},
lc:function lc(a,b,c){var _=this
_.Q=a
_.as=b
_.at=!1
_.e=c
_.r=_.f=$
_.a=null
_.d=_.c=_.b=$},
bm(a){return new A.lm(a)},
tX(a,b){return new A.ks(a,b)},
tL(a,b){return new A.iZ(a,b)},
kP(){return new A.kO()},
lm:function lm(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
ks:function ks(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
iZ:function iZ(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
kO:function kO(){var _=this
_.a=null
_.d=_.c=_.b=$},
bD:function bD(){},
wK(a){return 1/(1+Math.max(0,a)/40)},
bb(a,b,c,d,e){var s=e==null?0:e
return new A.b5(a,b,c,s,d==null?$.ax():d)},
bF(a){var s=t.iO,r=t.kt
return new A.b6(a,A.a([],s),A.a([],r),A.a([],s),A.a([],r),$.ax())},
b5:function b5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jK:function jK(a,b){this.a=a
this.b=b},
d4:function d4(a){this.a=a},
df:function df(a){this.a=a},
b6:function b6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=1},
ox:function ox(){},
ow:function ow(){},
ov:function ov(){},
ou:function ou(){},
az:function az(a,b){this.a=a
this.b=b},
bY:function bY(){},
fT:function fT(){this.b=this.a=0},
fE:function fE(){this.b=this.a=0},
hl:function hl(){this.b=this.a=0},
dA:function dA(){this.b=this.a=0},
fQ:function fQ(){this.b=this.a=0},
ht:function ht(a){this.c=a
this.b=this.a=0},
hk:function hk(){this.b=this.a=0},
bZ(a,b,c,d,e,f,g){var s=d==null?new A.nL():d
return new A.dC(a,b,e,f,c,s,g==null?new A.nM():g)},
dC:function dC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nL:function nL(){},
nM:function nM(){},
fN:function fN(){this.a=0},
jm:function jm(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aI:function aI(a){this.a=a},
tP(a,b,c,d,e){var s=A.h7(t.fD),r=A.a([],t.iA),q=A.a([],t.bI),p=A.a([],t.l),o=new A.fN(),n=new A.aw(c,A.b7(t.B),new A.b9(t.mh),o,new A.dA(),new A.fE(),new A.dA(),new A.fQ(),new A.fT(),new A.hk(),new A.hl(),A.C(t.h,t.mF),new A.d(0,0))
o.a=240
n.br()
o=c.CW.a
o.toString
n.z=B.c.P(B.e.L(Math.pow(o,1.458)+9),0,n.gbp())
o=c.cx.a
o.toString
n.ch=A.jR(o)
q=new A.jC(a,s,r,q,new A.fN(),p,b,n)
s=e==null?100:e
s=A.z8(s,d==null?80:d,q)
q.x!==$&&A.ar()
q.x=s
s.dB(n)
B.a.U(p,s.f.b.bN(-1))
s=$.m()
B.a.bJ(t.A.a(p),s.a)
return q},
jC:function jC(a,b,c,d,e,f,g,h){var _=this
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
os:function os(a){this.a=a},
hL:function hL(){},
ll:function ll(){},
eU:function eU(a){this.a=a},
vG(a,b){var s
A:{if(B.cm===b||B.ib===b){s=!0
break A}if(B.cn===b||B.aG===b||B.x===b){s=!1
break A}s=null}return A.wU(a,$.x7(),t.jt.a(t.po.a(new A.pf(s))),null)},
dJ(a,b){var s,r,q,p,o,n,m,l,k={},j=A.a([],t.s)
k.a=""
k.b=-1
s=new A.ph(k,b)
r=new A.pg(k,j)
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
k6:function k6(a){this.a=a
this.b=0},
pf:function pf(a){this.a=a},
ph:function ph(a,b){this.a=a
this.b=b},
pg:function pg(a,b){this.a=a
this.b=b},
bR:function bR(a,b){this.a=a
this.b=b},
hb:function hb(a,b,c){this.a=a
this.b=b
this.c=c},
v(a,b,c,d,e){if(a<=b)return d
if(a>=c)return e
return d+(a-b)/(c-b)*(e-d)},
wM(a,b){var s=new A.tc(),r=s.$1(0)
if(typeof r!=="number")return r.F()
r=s.$1(r+a)
if(typeof r!=="number")return r.F()
r=s.$1(r+b)
if(typeof r!=="number")return r.px()
return r>>>0},
tc:function tc(){},
de(a){var s=t.N
return new A.eZ(A.C(s,a.h("bU<0>")),A.C(s,a.h("bo<0>")),A.C(t.nP,a.h("ia<0>")),a.h("eZ<0>"))},
eZ:function eZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
pZ:function pZ(a){this.a=a},
q_:function q_(a){this.a=a},
q3:function q3(a){this.a=a},
q4:function q4(a,b,c){this.a=a
this.b=b
this.c=c},
q1:function q1(a){this.a=a},
q2:function q2(a,b){this.a=a
this.b=b},
q0:function q0(a,b){this.a=a
this.b=b},
bo:function bo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.$ti=g},
bU:function bU(a,b,c){this.a=a
this.b=b
this.$ti=c},
mh:function mh(a,b){this.a=a
this.b=b},
ia:function ia(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.$ti=d},
z1(a){return new A.aG(a)},
yQ(a,b,c){return A.aO(a,c,b)},
aO(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(B.j.i9(a,"a ")){a=B.j.cQ(a,2)
s=!1}else if(B.j.i9(a,"an ")){a=B.j.cQ(a,3)
s=!0}else{if(0>=a.length)return A.c(a,0)
s=B.j.G("aeiouAEIOU",a[0])}r=$.x9().jT(a)
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
m=A.pK(n,!1,!0)
l=A.pK(n,!1,!1)
q=n.length===0
k=A.pK(a,q,!0)
j=A.pK(a,q,!1)
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
default:p=null}return new A.pJ(s,q,o,"# "+l+"<p>"+j,p,"the # "+l+"<p>"+j,b)},
pK(a,b,c){var s,r={}
r.a=!1
s=A.wU(a,$.xa(),t.jt.a(t.po.a(new A.pL(r,c))),null)
if(!c&&!r.a&&b)return s+"s"
return s},
yP(a,b,c,d){return new A.hg(a,b,c,d)},
dj:function dj(){},
aG:function aG(a){this.a=a},
pJ:function pJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
pM:function pM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pL:function pL(a,b){this.a=a
this.b=b},
hh:function hh(a,b){this.a=a
this.b=b},
hg:function hg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dM:function dM(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=e},
Q(a,b,c){var s,r,q,p,o,n=B.c.t(Math.abs(a)),m=$.x6().jT(n)
if(m!=null){s=m.b
if(2>=s.length)return A.c(s,2)
r=s[2]
r.toString
s=s[1]
s.toString
s=A.a([s],t.s)
for(q=B.c.A(r.length,3),p=0;p<q;++p){o=p*3
s.push(B.j.aJ(r,o,o+3))}n=B.a.aP(s,",")}if(a<0)n="-"+n
else if(a>0&&b)n="+"+n
return B.j.d7(n,c==null?0:c)},
vH(a,b,c){var s=A.z(a).h("bj<1,2>"),r=b.h("@<0>").al(c).h("+(1,2)")
return A.pt(new A.bj(a,s),s.al(r).h("1(k.E)").a(new A.ps(b,c)),s.h("k.E"),r)},
tV(a,b,c){var s=B.e.hR(a,b)
return B.j.d7(s,c==null?0:c)},
pO(a,b){var s=b==null?0:b
s=B.e.hR(a*100,s)
return B.j.d7(s+"%",0)},
ps:function ps(a,b){this.a=a
this.b=b},
lk:function lk(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=0
_.e=c
_.f=0},
a1:function a1(){},
V:function V(){},
cO:function cO(){},
cy:function cy(){},
dz:function dz(){},
aR:function aR(a){this.a=a},
kQ:function kQ(){},
c5:function c5(a){var _=this
_.a=!0
_.c=_.b=null
_.d=a},
qh:function qh(a,b,c){this.a=a
this.b=b
this.c=c},
qg:function qg(a){this.a=a},
dD:function dD(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.d=$
_.e=null
_.f=!1
_.r=0
_.w=null},
o9:function o9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oa:function oa(a,b){this.a=a
this.b=b},
o8:function o8(a){this.a=a},
aw:function aw(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
ot:function ot(a,b,c){this.a=a
this.b=b
this.c=c},
tQ(a,b,c,d,e){return new A.cC(a,b,c,d,e)},
cC:function cC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,a0,a1,a2,a3,a4){var s=new A.hE(),r=new A.fy(),q=new A.hN(),p=new A.fW(),o=new A.d9(a,b,c,d,e,f,g,h,i,j,k,n,a0,l,m,s,r,q,p)
s.b=a3
s.a=s.dk(o)
r.b=a1
r.a=r.dk(o)
q.b=a4
q.a=q.dk(o)
p.b=a2
p.a=p.dk(o)
return o},
d9:function d9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
h9:function h9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pi:function pi(){},
pl:function pl(){},
pm:function pm(){},
pj:function pj(){},
pk:function pk(){},
pn:function pn(){},
bS:function bS(){},
aD:function aD(){},
mf:function mf(){},
kI(a,b,c,d){return new A.cI(a,b,d,c)},
cI:function cI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eX:function eX(){},
hn:function hn(a){this.a=a},
ae:function ae(){},
hB:function hB(a,b){this.a=a
this.b=b},
qp:function qp(a){this.a=a},
qo:function qo(){},
qq:function qq(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a){this.a=a},
mo:function mo(){},
hF(a){if(a<=10)return B.e.O(A.v(a,1,10,0,20))
return B.e.O(A.v(a,10,50,20,200))},
vY(a){if(a<=20)return A.v(a,1,20,0.1,1)
if(a<=30)return A.v(a,20,30,1,1.5)
if(a<=40)return A.v(a,30,40,1.5,1.8)
if(a<=50)return A.v(a,40,50,1.8,2)
return A.v(a,50,60,2,2.1)},
v6(a){if(a<=10)return B.e.O(A.v(a,1,10,-50,0))
if(a<=30)return B.e.O(A.v(a,10,30,0,20))
return B.e.O(A.v(a,30,60,20,60))},
v7(a){if(a<=10)return B.e.O(A.v(a,1,10,-30,0))
if(a<=30)return B.e.O(A.v(a,10,30,0,20))
return B.e.O(A.v(a,30,60,20,50))},
jR(a){if(a<=10)return B.e.O(A.v(a,1,10,0,20))
return B.e.O(A.v(a,10,50,20,200))},
b9:function b9(a){this.a=null
this.$ti=a},
cl:function cl(a,b,c){this.c=a
this.a=b
this.b=c},
cm:function cm(){},
qG:function qG(a,b,c){this.a=a
this.b=b
this.c=c},
hE:function hE(){this.b=0
this.a=null},
fy:function fy(){this.b=0
this.a=null},
hN:function hN(){this.b=0
this.a=null},
fW:function fW(){this.b=0
this.a=null},
Ao(a){A.w(a)
return 1},
An(a){A.w(a)
return 0},
cc:function cc(a,b){this.a=a
this.b=b},
ed:function ed(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
et:function et(a){this.b=a},
o_:function o_(){},
nZ:function nZ(){},
nY:function nY(a){this.a=a},
lL:function lL(){},
bG(a,b){var s=A.a([],t.I)
if(b!=null)B.a.U(s,b)
return new A.bQ(a,s,a.c)},
c_:function c_(a,b){this.a=a
this.c=b},
eC:function eC(){},
bQ:function bQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
oz:function oz(){},
dy:function dy(a,b){this.a=a
this.b=b},
m1:function m1(){},
L:function L(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$
_.f=e},
p_:function p_(){},
oV:function oV(){},
oU:function oU(){},
oT:function oT(){},
p0:function p0(){},
oW:function oW(){},
oX:function oX(a){this.a=a},
oZ:function oZ(a){this.a=a},
oY:function oY(){},
bH:function bH(a,b){this.a=a
this.b=b},
r8:function r8(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
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
kM:function kM(a,b,c){this.a=a
this.b=b
this.c=c},
dg:function dg(a,b){this.a=a
this.b=b},
y6(a){var s,r,q,p,o
for(s=$.eg.length,r=t.P,q=0;q<$.eg.length;$.eg.length===s||(0,A.o)($.eg),++q){p=$.eg[q]
o=r.a(a.$1(p.a))
p.b!==$&&A.ar()
p.b=o}B.a.aS($.eg)},
aJ(a){var s=new A.iT(a)
B.a.j($.eg,s)
return s},
iT:function iT(a){this.a=a
this.b=$},
as:function as(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
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
f4:function f4(a,b){this.a=a
this.b=b},
nl:function nl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iX(a,b,c){return new A.iW(a,b,c)},
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
pC:function pC(a,b){this.a=a
this.b=b},
pD:function pD(a,b,c){this.a=a
this.b=b
this.c=c},
pE:function pE(a,b){this.a=a
this.b=b},
iW:function iW(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
pA:function pA(a,b,c,d){var _=this
_.d=a
_.e=null
_.a=b
_.b=c
_.c=d},
eJ:function eJ(){},
pB:function pB(a,b){this.a=a
this.b=b},
cf:function cf(){this.a=$},
cv:function cv(){this.a=$},
ng:function ng(a,b){this.a=a
this.b=b},
ne:function ne(a){this.a=a},
nf:function nf(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(){this.a=$},
na:function na(a){this.a=a},
nb:function nb(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(){},
kJ:function kJ(){},
cg:function cg(a,b){this.a=a
this.b=0
this.$ti=b},
ck(a,b,c,d,e,f){var s=new A.kg(c,d!==!1,e===!0,f,a,b,new A.cg(A.a([],t.c),t.r),A.a([],t.l))
s.fw(a,b,f)
return s},
eu:function eu(){},
oe:function oe(a,b,c){this.a=a
this.b=b
this.c=c},
of:function of(a,b,c){this.a=a
this.b=b
this.c=c},
kg:function kg(a,b,c,d,e,f,g,h){var _=this
_.r=a
_.w=b
_.x=c
_.y=d
_.a=e
_.b=f
_.d=_.c=$
_.e=g
_.f=h},
oh:function oh(a,b){this.a=a
this.b=b},
mn:function mn(a,b){this.a=a
this.b=b},
k4(a){var s
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
pa:function pa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.w=_.r=_.f=!0},
pb:function pb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pc:function pc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eO:function eO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kw:function kw(){},
wB(a){var s=a.a.e
if(s.Z(0,$.bA()))return 8
if((s.a&$.U().a)===0)return 10
return 1},
qr:function qr(a){this.a=a
this.b=null},
mp:function mp(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=_.c=$
_.e=c
_.f=d},
rO:function rO(a,b,c){this.a=a
this.b=b
this.c=c},
z8(a,b,c){var s,r=A.a([],t.p5),q=new A.qC(),p=t.jh,o=a*b
if(o>0)s=A.an(o,q.$1(B.ak),!1,p)
else s=J.vx(0,p)
s=new A.a8(s,new A.Y(new A.d(0,0),new A.d(a,b)),t.lr)
s.lg(a,b,q,p)
return new A.qt(c,r,s,A.C(t.u,t.U),new A.a8(A.an(o,null,!1,t.e9),new A.Y(new A.d(0,0),new A.d(a,b)),t.hE))},
qt:function qt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=_.c=$
_.e=0
_.f=c
_.r=d
_.w=e},
qC:function qC(){},
qF:function qF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qE:function qE(a){this.a=a},
qB:function qB(){},
qD:function qD(a){this.a=a},
kf(a){return new A.ad(a)},
zd(a,b,c,d,e,f){return new A.dT(a,f,d==null?0:d,b,c,e)},
ad:function ad(a){this.a=a},
bw:function bw(a){this.a=a},
dT:function dT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dS:function dS(a,b){var _=this
_.a=a
_.b=!1
_.f=_.e=_.d=_.c=0
_.r=!1
_.w=b
_.x=0},
iC:function iC(a,b){var _=this
_.b=a
_.c=b
_.d=0
_.a=null},
fB:function fB(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
j7:function j7(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
fI:function fI(a){this.a=a
this.b=20},
T(a,b){var s,r,q,p,o,n,m=A.a([],t.mO)
for(s=new A.d6(a),r=t.gS,s=new A.c2(s,s.gI(0),r.h("c2<X.E>")),r=r.h("X.E");s.q();){q=s.d
if(q==null)q=r.a(q)
for(p=b.length,o=0;o<b.length;b.length===p||(0,A.o)(b),++o){n=b[o]
B.a.j(m,new A.W(q,n,B.y))}}return m},
fM:function fM(a,b){this.a=a
this.b=b
this.c=0},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
jJ:function jJ(a,b){this.a=a
this.b=b
this.c=0},
jM:function jM(a){this.a=a
this.b=0},
jU:function jU(a,b){this.a=a
this.b=b
this.c=2},
k9:function k9(a,b){this.a=a
this.b=b
this.c=-1},
kv:function kv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
l7:function l7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0
_.f=e},
ld:function ld(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=8},
yl(a,b){var s,r,q,p,o,n=A.a([],t.hC)
for(s=$.uJ(),r=b.Q.c.c,q=0;q<15;++q){p=s[q]
o=r.p(0,p.gcv())
if((o==null?0:o)>0)n.push(p)}n=new A.fP(b,n,A.C(t.M,t.de))
n.li(a,b)
return n},
fP:function fP(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.e=0
_.a=null},
o6:function o6(){},
o2:function o2(){},
o7:function o7(){},
o3:function o3(){},
o4:function o4(){},
o5:function o5(a,b){this.a=a
this.b=b},
jc:function jc(){},
nG:function nG(a,b){this.a=a
this.b=b},
fx:function fx(a,b){var _=this
_.e=a
_.b=b
_.c=0
_.a=null},
kt:function kt(a){this.b=a
this.c=0
this.a=null},
vo(a0,a1){var s,r,q,p,o,n,m,l,k=a1.y.Q,j=k.e.cX(),i=k.f.cX(),h=k.y,g=t.M,f=t.S,e=A.cH(k.z.a,g,f),d=k.at,c=k.ax,b=t.P,a=A.cH(c.a,b,f)
b=A.cH(c.b,b,f)
s=t.q
r=A.cH(c.c,s,f)
q=A.cH(c.d,t.R,f)
p=A.vF(c.e,s)
s=A.cH(c.f,s,f)
c=k.Q
o=k.as
n=k.ay.b
m=k.ch.b
l=k.CW.b
d=new A.fS(a1,A.vs(k.a,k.b,k.c,k.d,j,i,k.r,k.w,k.x,h,new A.hB(e,A.C(g,f)),d,new A.h9(a,b,r,q,p,s),c,o,m,k.cx.b,n,l),a0,new A.pe(d),new A.oS(a1))
d.r=new A.qj(d)
l=A.a([],t.pl)
n=A.a([],t.lE)
d.w!==$&&A.ar()
d.w=new A.qu(d,l,n,B.iz,B.ak)
$.nn=d
$.j9.aS(0)
return d},
on(a,b,c,d){var s,r,q,p,o,n,m,l=A.tP(b,0,c,34,60)
if(d)for(s=b.lb(c),r=s.length,q=l.y,p=q.Q,o=p.e,p=p.ax,n=0;n<s.length;s.length===r||(0,A.o)(s),++n){m=s[n]
o.c8(m)
p.d3(m)
q.br()}for(s=l.e7(),r=s.$ti,s=new A.ag(s.a(),r.h("ag<1>")),r=r.c;s.q();){q=s.b
if(q==null)r.a(q)}return A.vo(a,l)},
fS:function fS(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=_.r=$
_.y=_.x=0
_.a=_.at=_.as=_.Q=_.z=null},
or:function or(a,b){this.a=a
this.b=b},
op:function op(){},
oq:function oq(a,b){this.a=a
this.b=b},
oo:function oo(a,b){this.a=a
this.b=b},
h8:function h8(a,b){var _=this
_.b=a
_.c=b
_.d=0
_.a=null},
vZ(a,b,c){var s=new A.l5(a,b,c,A.a([],t.lE))
s.ln(a,b,c)
return s},
zW(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=null,q=null,p=0;p<a.length;a.length===s||(0,A.o)(a),++p){o=a[p]
n=b.$1(o)
if(q==null||n<q){q=n
r=o}}return r},
zV(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=null,q=null,p=0;p<a.length;a.length===s||(0,A.o)(a),++p){o=a[p]
n=b.$1(o)
if(q==null||n>q){q=n
r=o}}return r},
l5:function l5(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=!1
_.r=0
_.a=null},
r2:function r2(a){this.a=a},
r3:function r3(a){this.a=a},
zj(a){var s,r,q,p,o=A.a([],t.eI)
for(s=$.tu(),r=a.b,q=0;q<26;++q){p=s[q]
if(p.gbC().dG(r)==null)o.push(p)}return new A.hM(a,o)},
hM:function hM(a,b){this.b=a
this.c=b
this.a=null},
fV:function fV(a){var _=this
_.c=_.b=0
_.d=30
_.e=a
_.a=null},
f:function f(a,b){this.a=a
this.b=b},
jk:function jk(a,b,c,d){var _=this
_.e=a
_.f=b
_.b=c
_.c=d
_.a=null},
nX:function nX(a){this.a=a},
fa:function fa(a,b){this.a=a
this.b=b},
cD:function cD(){},
yu(a,b){var s=t.q
return B.c.ai(s.a(a).d,s.a(b).d)},
yr(a,b){var s=t.q
return B.c.ai(s.a(a).c,s.a(b).c)},
yt(a,b){var s=t.q
return B.c.ai(s.a(a).as,s.a(b).as)},
ys(a,b){var s=t.q
s.a(a)
s.a(b)
return B.j.ai(a.a.a6(1).a.toLowerCase(),b.a.a6(1).a.toLowerCase())},
jW:function jW(a,b){var _=this
_.e=$
_.b=a
_.c=b
_.a=null},
oQ:function oQ(){},
oR:function oR(a){this.a=a},
oP:function oP(a,b){this.a=a
this.b=b},
yM(a,b){var s=t.P,r=s.a(a).b.a,q=s.a(b).b.a
s=new A.pv()
if(s.$1(r)&&!s.$1(q))return 1
if(!s.$1(r)&&s.$1(q))return-1
return B.c.ai(r,q)},
yL(a,b){var s=t.P
return B.c.ai(s.a(a).c,s.a(b).c)},
yN(a,b){var s=t.P
return B.j.ai(s.a(a).a.a.toLowerCase(),s.a(b).a.a.toLowerCase())},
yK(a,b){var s=null,r=A.a([new A.aK("Name",B.a6,0,s),new A.aK("Depth",B.al,5,s),new A.aK("Seen",B.al,5,s),new A.aK("Slain",B.al,5,s)],t.D),q=t.it,p=t.o9
p=A.a([new A.bu("appearance",A.a([A.Bg(),A.wP()],q),p),new A.bu("name",A.a([A.wQ()],q),p),new A.bu("depth",A.a([A.wP(),A.wQ()],q),p)],t.d4)
q=t.hb
p=new A.ke(A.u5(r,A.a([new A.c3("all",new A.py(),q),new A.c3("uniques",new A.pz(),q)],t.gp),p,!0,t.P),a,b)
p.n_()
return p},
ke:function ke(a,b,c){var _=this
_.e=a
_.b=b
_.c=c
_.a=null},
pv:function pv(){},
py:function py(){},
pz:function pz(){},
pw:function pw(){},
px:function px(){},
pu:function pu(a,b){this.a=a
this.b=b},
l:function l(a){this.a=a},
jf:function jf(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.a=_.r=null},
jj:function jj(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.a=_.r=null},
eD:function eD(){},
vu(a,b,c){var s,r=new A.jV(b,A.vv(b,c?78:34)),q=b.a
if(q.x!=null)r.b=new A.hS(a,b)
if(q.Q+b.gc1()!==0||q.z!=null)r.c=new A.hU(b)
if(q.e!=null)r.d=new A.i9(b)
q=q.w
if(q!=null){s=c?78:34
r.e=new A.fg(A.dJ(s,q.a),"Use")}return r},
vv(a,b){var s,r,q,p,o,n,m,l,k,j=A.a([],t.s)
for(s=0;s<4;++s){r=B.aP[s]
for(q=a.gaf(),p=q.length,o=0,n=0;n<q.length;q.length===p||(0,A.o)(q),++n)o+=q[n].di(r)
if(o<0)B.a.j(j,"It lowers your "+r.c+" by "+-o+".")
else if(o>0)B.a.j(j,"It raises your "+r.c+" by "+o+".")}a.gec().ae(0,new A.oO(j))
q=a.a
m=q.y
if(m!=null){p=m.b
l=p.e
k=l!==$.ax()?" "+l.a:""
B.a.j(j,"It can be thrown for "+p.c+k+" damage up to range "+p.d+".")
p=m.a
if(p!==0)B.a.j(j,"It has a "+p+"% chance of breaking when thrown.")}p=q.ay
if(p>0)B.a.j(j,"It emanates "+p+" light.")
for(q=q.cx,q=new A.c1(q,q.r,q.e,A.z(q).h("c1<1>"));q.q();)B.a.j(j,"It can be destroyed by "+q.d.a.toLowerCase()+".")
return new A.fg(A.dJ(b-2,B.a.aP(j," ")),"Description")},
jV:function jV(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=b},
oO:function oO(a){this.a=a},
cV:function cV(){},
hS:function hS(a,b){this.a=a
this.b=b},
hU:function hU(a){this.a=a},
i9:function i9(a){this.a=a},
fg:function fg(a,b){this.a=a
this.b=b},
ky:function ky(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.a=_.r=null},
mg:function mg(){},
kE:function kE(a,b,c){var _=this
_.ay=a
_.b=b
_.c=c
_.d=null
_.e=-1
_.f=!1
_.a=_.r=null},
kF:function kF(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.a=_.r=null},
hy:function hy(a,b,c){var _=this
_.x=a
_.b=b
_.c=c
_.d=null
_.e=-1
_.f=!1
_.a=_.r=null},
lb:function lb(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.a=_.r=null},
r9:function r9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dU:function dU(){},
cS:function cS(){},
i_:function i_(a){var _=this
_.b=a
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
hZ:function hZ(){},
lX:function lX(a){var _=this
_.b=a
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
lW:function lW(a,b){var _=this
_.cy=a
_.b=b
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
hT:function hT(a){var _=this
_.w=null
_.b=a
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
id:function id(a,b){var _=this
_.w=a
_.b=b
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
ic:function ic(a,b){var _=this
_.at=a
_.b=b
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
fb:function fb(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.b=d
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
li:function li(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.a=_.r=null},
jE:function jE(a){this.b=a
this.a=null},
om:function om(a){this.a=a},
k8:function k8(a,b){var _=this
_.b=a
_.c=b
_.d=0
_.f=_.e=null
_.r=!1
_.w=0
_.x=!0
_.y=0
_.a=null},
pp:function pp(){},
po:function po(a){this.a=a},
yO(a,b){var s,r,q,p,o,n=t.eR,m=A.a([],n),l=$.m()
t.m.a(B.ah)
s=B.ah.length
r=l.T(s)
if(!(r>=0&&r<s))return A.c(B.ah,r)
r=new A.kh(0,0,b,B.ah[r])
r.h0()
s=$.ft()
q=A.M(s)
p=q.h("aN<1,q>")
s=A.a6(new A.aN(s,q.h("q(1)").a(new A.pG()),p),p.h("aF.E"))
s=new A.f2(0,2,"Race",s)
q=$.ea()
p=A.M(q)
o=p.h("aN<1,q>")
q=A.a6(new A.aN(q,p.h("q(1)").a(new A.pH()),o),o.h("aF.E"))
q=new A.f2(0,12,"Class",q)
p=new A.f2(0,22,"Death",B.bd)
B.a.U(m,A.a([r,s,q,p],n))
s.e=l.T(5)
q.e=l.T(3)
return new A.kr(a,b,r,s,q,p,m)},
kr:function kr(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=0
_.e=c
_.f=d
_.r=e
_.w=f
_.x=g
_.a=null},
pG:function pG(){},
pH:function pH(){},
pI:function pI(a){this.a=a},
em:function em(){},
kh:function kh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=""
_.e=d
_.f=!1},
pF:function pF(a){this.a=a},
f2:function f2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
oS:function oS(a){this.b=a
this.a=null},
pe:function pe(a){this.b=a
this.a=null},
pR:function pR(){},
qj:function qj(a){this.b=a
this.a=null},
qn:function qn(a){this.a=a},
ql:function ql(a,b,c){this.a=a
this.b=b
this.c=c},
qm:function qm(){},
qk:function qk(a,b,c){this.a=a
this.b=b
this.c=c},
qu:function qu(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=!1
_.f=0
_.r=d
_.w=e
_.a=null},
qA:function qA(a){this.a=a},
qz:function qz(){},
qx:function qx(a){this.a=a},
qy:function qy(a,b){this.a=a
this.b=b},
qv:function qv(a,b){this.a=a
this.b=b},
qw:function qw(a,b){this.a=a
this.b=b},
fG:function fG(a,b){this.c=a
this.d=b
this.a=null},
yj(a,b){var s=new A.fO(a,b,A.a([],t.cz))
s.lh(a,b,{})
return s},
fO:function fO(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.a=null},
o0:function o0(a,b){this.a=a
this.b=b},
o1:function o1(){},
lu:function lu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=0},
fR:function fR(a){this.c=a
this.a=null},
kC:function kC(){},
pT:function pT(){},
pU:function pU(){},
hx:function hx(a){this.d=a
this.e=1
this.a=null},
qI:function qI(a,b){this.a=a
this.b=b},
qS:function qS(a){this.a=a},
qT:function qT(a){this.a=a},
qP:function qP(a){this.a=a},
qQ:function qQ(a){this.a=a},
qR:function qR(a,b,c){this.a=a
this.b=b
this.c=c},
qJ:function qJ(a){this.a=a},
qK:function qK(a,b){this.a=a
this.b=b},
qL:function qL(a,b){this.a=a
this.b=b},
qM:function qM(a,b){this.a=a
this.b=b},
qN:function qN(a,b){this.a=a
this.b=b},
qO:function qO(a,b){this.a=a
this.b=b},
vg(a,b,c,d,e,f){var s,r=null,q=a.e.a.b.b,p=q.a
q=q.b
a.jR(0,0,p,q,B.u)
s=new A.aS(new A.d(b,c),B.c.A(p-b,2),B.c.A(q-2-c,2),a)
A.bi(s,r,r,f,!1,r,r,r)
d.$1(s.b8(1,1,b-2,c-2))
A.br(a,e,r)},
bi(a,b,c,d,e,f,g,h){var s,r,q
if(b==null)s=e?B.h:B.l
else s=b
A.cz(a,g,h,f,c,s,"\u2552","\u2550","\u2555","\u2502","\u2514","\u2500","\u2518")
if(d!=null){s=g==null?0:g
r=h==null?0:h
q=e?B.h:B.f
a.k(s+2,r," "+d+" ",q)}},
fJ(a,b,c,d,e,f){var s,r,q,p,o,n
if(d==null)d=a.c.a-e
if(c==null)c=B.d
s=A.dJ(d,b)
for(r=s.length,q=f,p=0;o=s.length,p<o;s.length===r||(0,A.o)(s),++p,q=n){n=q+1
a.k(e,q,s[p],c)}return o},
jd(a,b,c,d,e){var s=B.j.aI("\u2500",d)
a.k(b,c,s,e==null?B.l:e)},
nI(a,b,c,d,e,f,g){var s,r=c+1
A.bi(a,B.f,e-1,null,!1,d,b,r)
s=b+1
a.k(s,c,"\u250c\u2500\u2510",B.f)
a.k(s,r,"\u2561 \u255e",B.f)
a.k(s,c+2,"\u2514\u2500\u2518",B.f)
if(f!=null)a.am(b+2,r,f)
if(g!=null)a.k(b+4,r," "+g+" ",B.f)},
vh(a,b,c,d,e,f,g){var s,r,q,p,o
if(d<=e)for(s=0;s<b;++s)a.k(f,s+g,"\u258c",B.u)
else{r=B.c.P(B.e.L(b*e/d),1,b)
q=B.e.L((b-r)*c/(d-e+1))
p=q+r
for(s=0;s<b;++s){o=s<q||s>p?B.u:B.l
a.k(f,s+g,"\u258c",o)}}},
br(a,b,c){var s,r,q,p,o,n,m,l={}
l.a=0
b.ae(0,new A.nJ(l))
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
if(r){A.cz(a,m,q-4,n,5,B.f,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
a.k(B.c.A(p-c.length,2),q-3,c,B.d)}else A.cz(a,m,q-2,n,3,B.f,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
l.c=!0
l.b=l.b+B.c.A(s-l.a,2)
b.ae(0,new A.nK(l,a))},
cz(a,b,c,d,e,f,g,h,i,j,k,l,m){var s,r,q,p,o
if(b==null)b=0
if(c==null)c=0
if(d==null)d=a.gaQ()
if(e==null)e=a.gan()
if(f==null)f=B.l
s=d-2
r=j+B.j.aI(" ",s)+j
for(q=c+1,p=c+e-1;q<p;++q)a.k(b,q,r,f)
o=B.j.aI(h,s)
s=B.j.aI(l,s)
a.k(b,c,g+o+i,f)
a.k(b,p,k+s+m,f)},
yg(a,b,c,d,e,f,g,h){var s,r,q=d*2,p=B.e.O(q*e/f)
if(p===0&&e>0)p=1
if(p===q&&e<f)p=q-1
for(q=p+1,s=0;s<d;++s){if(s<B.c.A(p,2))r=9608
else r=s<B.c.A(q,2)?9612:32
a.am(b+s,c,new A.W(r,g,h))}},
vi(a,b,c,d,e,f,g,h){var s,r,q
if(g==null)g=B.m
if(h==null)h=B.Y
s=B.e.O(d*e/f)
if(s===0&&e>0)s=1
if(s===d&&e<f)s=d-1
for(r=0;r<d;++r){q=r<s?g:h
a.am(b+r,c,new A.W(9604,q,B.y))}},
nJ:function nJ(a){this.a=a},
nK:function nK(a,b){this.a=a
this.b=b},
u5(a,b,c,d,e){var s,r=e.h("r<aq<0>>"),q=A.a([],r)
r=A.a([],r)
s=A.a(a.slice(0),A.M(a))
return new A.l4(s,q,r,d,c,b,B.ak,e.h("l4<0>"))},
u7(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=c.kj(e,B.a.aE(b,0,new A.r4(),t.S))
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.o)(b),++r,m=o){q=b[r]
p=q.a
o=m+p.length
if(o>e)p=B.j.aJ(p,0,e-m)
n=q.b
if(n==null)n=d
a.k(f+m,g,p,n)}},
l4:function l4(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=_.x=_.w=0
_.$ti=h},
r0:function r0(a,b,c){this.a=a
this.b=b
this.c=c},
r_:function r_(a){this.a=a},
qY:function qY(a){this.a=a},
qZ:function qZ(a){this.a=a},
iD:function iD(a,b){this.a=a
this.b=b},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=0},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a9:function a9(a,b){this.a=a
this.b=b},
N:function N(a,b){this.a=a
this.b=b},
r4:function r4(){},
bu:function bu(a,b,c){this.a=a
this.b=b
this.$ti=c},
c3:function c3(a,b,c){this.a=a
this.b=b
this.$ti=c},
hP:function hP(a,b){var _=this
_.b=a
_.c=b
_.d=!0
_.a=null},
rh:function rh(a){this.a=a},
rg:function rg(a){this.a=a},
cp:function cp(){},
rN:function rN(a){this.a=a},
mD:function mD(a){this.b=a
this.c=""
this.a=null},
rT:function rT(a){this.a=a},
mE:function mE(a){this.b=a
this.c=""
this.a=null},
rU:function rU(a){this.a=a},
nH:function nH(a,b){this.a=a
this.b=b},
am(a,b,c){var s
if(0>=a.length)return A.c(a,0)
s=c==null?B.y:c
return new A.W(a.charCodeAt(0),b,s)},
cB(a,b,c){var s=b==null?B.aH:b
return new A.W(a,s,c==null?B.y:c)},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function k1(a,b){this.a=a
this.$ti=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
aS:function aS(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.f=d},
z4(a,b,c,d,e,f){var s=A.bX(d.getContext("2d"))
if(s==null)s=A.P(s)
s=new A.kR(a,s,e,A.C(t.aZ,t.E),f,b,c)
s.lm(a,b,c,d,e,f)
return s},
kR:function kR(a,b,c,d,e,f,g){var _=this
_.e=a
_.f=b
_.r=c
_.w=d
_.x=e
_.y=!1
_.z=f
_.Q=g},
q5:function q5(a){this.a=a},
q6:function q6(a){this.a=a},
di:function di(){},
hs:function hs(){},
f8:function f8(a,b,c,d){var _=this
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
w2(a,b){var s=a.b,r=s+s+1,q=a.a
return new A.lF(a,A.ab(new A.Y(new A.d(q.gm()-s,q.gn()-s),new A.d(r,r))),b)},
ud(a,b,c){var s=c.S(0,a).gaF()
if(b<7){if(!(b>=0))return A.c(B.c8,b)
return s<=B.c8[b]}return s<=b*(b+1)},
iY:function iY(a,b){this.a=a
this.b=b},
lF:function lF(a,b,c){this.a=a
this.b=b
this.c=c},
au:function au(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
lI:function lI(){},
dX(a,b){var s,r=b.S(0,a),q=r.a,p=new A.d(B.c.gi4(q),0),o=r.b,n=new A.d(0,B.c.gi4(o)),m=Math.abs(q),l=Math.abs(o)
if(l>m){s=l
l=m
m=s
s=n
n=p
p=s}return new A.m8(a,0,m,l,p,n)},
m8:function m8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vP(a,b){var s=Math.max(a.gbO(),b.gbO()),r=Math.min(a.ge3(),b.ge3()),q=Math.max(a.gbT(),b.gbT()),p=Math.min(a.geL(),b.geL())
return new A.Y(new A.d(s,q),new A.d(Math.max(0,r-s),Math.max(0,p-q)))},
ab(a){var s=a.a
return new A.cK(a,s.a-1,s.b)},
Y:function Y(a,b){this.a=a
this.b=b},
cK:function cK(a,b,c){this.a=a
this.b=b
this.c=c},
qd:function qd(a){this.a=a},
lj:function lj(){},
d:function d(a,b){this.a=a
this.b=b},
mz:function mz(){},
dW(a,b,c,d,e){var s=A.AG(new A.rr(c),t.E)
s=s==null?null:A.wn(s)
if(s!=null)a.addEventListener(b,s,!1)
return new A.hW(a,b,s,!1,e.h("hW<0>"))},
AG(a,b){var s=$.b3
if(s===B.ab)return a
return s.o8(a,b)},
tO:function tO(a,b){this.a=a
this.$ti=b},
hV:function hV(){},
lK:function lK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hW:function hW(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
rr:function rr(a){this.a=a},
Bd(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null,a7="item",a8="Insect Wing",a9="Feather",b0="item/food",b1="hit[s]",b2="Healing Poultice",b3=1000,b4="water",b5="equipment/armor/body",b6="The shield blocks {2}.",b7="equipment/armor/boots",b8="fearless",b9="bite[s]",c0=" ",c1="{1} flits out of the way.",c2="canine",c3="stare[s] at",c4="spark",c5="zaps",c6="gaze[s] into",c7="splashes",c8="hits",c9="scratch[es]",d0="stab[s]",d1="treasure",d2="spear",d3="healing",d4="goblin",d5="arrow",d6="armor",d7="resistance",d8="protective",d9="robe",e0="magic",e1="slash[es]",e2="equipment",e3="crawl[s] on",e4="fearless immobile",e5="cowardly",e6="club",e7="kobold",e8="poke[s]",e9="claw[s]",f0="saurian",f1="salamander",f2="weapon",f3="strangle",f4="natural/bug/worm",f5="bony hand",f6="bony arm",f7="severed skull",f8="decapitated skeleton",f9="armless skeleton",g0="one-armed skeleton",g1="{1}'s arm falls off!",g2="{1}'s hand falls off!",g3="{1}'s head pops off!",g4="Elven _",g5="High Elven _",g6="Dwarven _",g7="animal herp",g8="room",g9="catacomb"
$.bh().c3(a7)
s=A.a4(199,10,a6)
s.a2(a7)
r=$.ds()
s.cp(10,3,r,7)
A.i()
s=$.h=A.j("Rock",B.k,0)
s.v(1)
s.x=0.5
s=A.a4(252,4,a6)
s.a2(a7)
s.bF(30,2,5)
A.i()
s=$.h=A.j("Skull",B.o,0)
s.x=0.25
s.v(1)
s=A.a4(162,a6,a6)
s.a2("treasure/coin")
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
s=A.j("Silver Coin",B.J,20)
$.h=s
s.E(11,30)
A.i()
s=A.j("Electrum Coin",B.B,50)
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
s.a2("treasure/bar")
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
s=A.j("Silver Bar",B.J,800)
$.h=s
s.E(60,80)
A.i()
s=A.j("Electrum Bar",B.B,1200)
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
s.a2("item/gem")
q=$.dr()
s.a.i(0,q,50)
s.w=null
A.i()
s=A.j("Amethyst Shard",B.cN,30)
$.h=s
s.E(7,27)
A.i()
s=A.j("Uncut Amethyst",B.N,100)
$.h=s
s.E(27,57)
A.i()
s=A.j("Faceted Amethyst",B.V,400)
$.h=s
s.v(57)
A.i()
s=A.j("Sapphire Shard",B.G,34)
$.h=s
s.E(8,28)
A.i()
s=A.j("Uncut Sapphire",B.E,125)
$.h=s
s.E(28,58)
A.i()
s=A.j("Faceted Sapphire",B.C,440)
$.h=s
s.v(58)
A.i()
s=A.j("Emerald Shard",B.z,37)
$.h=s
s.E(9,29)
A.i()
s=A.j("Uncut Emerald",B.p,136)
$.h=s
s.E(29,59)
A.i()
s=A.j("Faceted Emerald",B.A,486)
$.h=s
s.v(59)
A.i()
s=A.j("Ruby Shard",B.a4,41)
$.h=s
s.E(10,30)
A.i()
s=A.j("Uncut Ruby",B.m,142)
$.h=s
s.E(30,60)
A.i()
s=A.j("Faceted Ruby",B.Y,498)
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
s=A.j("Faceted Diamond",B.t,507)
$.h=s
s.v(61)
s=A.a4(233,20,a6)
s.a2("item/pelt")
s.x=0
p=$.b4()
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
s.a2(b0)
s.a.i(0,p,20)
s.w=3
A.i()
s=$.h=A.j("Stale Biscuit",B.F,0)
s.E(1,10)
s.b=6
s.eY(100)
A.i()
s=$.h=A.j("Loa[f|ves] of Bread",B.k,4)
s.E(3,40)
s.b=6
s.eY(200)
s=A.a4(188,a6,a6)
s.a2(b0)
s.a.i(0,p,15)
s.w=2
A.i()
s=$.h=A.j("Chunk[s] of Meat",B.v,10)
s.E(8,60)
s.b=4
s.eY(400)
A.i()
s=$.h=A.j("Piece[s] of Jerky",B.k,20)
s.v(15)
s.b=12
s.eY(600)
s=A.a4(172,a6,b1)
s.a2("equipment/light")
s.pn(70)
A.i()
s=$.h=A.j("Tallow Candle",B.F,6)
s.E(1,12)
s.b=10
s.e5(2,p,8)
s.d4(2,5)
s.a.i(0,p,40)
s.w=20
A.i()
s=$.h=A.j("Wax Candle",B.t,24)
s.E(6,20)
s.b=10
s.e5(3,p,8)
s.d4(3,7)
s.a.i(0,p,40)
s.w=25
A.i()
s=$.h=A.j("Oil Lamp",B.v,146)
s.E(12,30)
s.b=4
s.e5(10,p,8)
s.d4(4,10)
s.a.i(0,p,50)
s.w=40
A.i()
s=$.h=A.j("Torch[es]",B.k,230)
s.E(17,45)
s.b=4
s.e5(6,p,10)
s.d4(5,14)
s.a.i(0,p,60)
s.w=60
A.i()
s=$.h=A.j("Lantern",B.h,350)
s.v(24)
s.x=0.3
s.e5(5,p,5)
s.d4(6,18)
s=A.a4(231,10,a6)
s.a2("magic/potion/healing")
s.bF(100,1,6)
o=$.c9()
s.a.i(0,o,20)
s.w=null
A.i()
s=$.h=A.j("Soothing Balm",B.a4,10)
s.E(2,30)
s.jW(36)
A.i()
s=$.h=A.j("Mending Salve",B.m,30)
s.E(20,40)
s.jW(64)
A.i()
s=$.h=A.j(b2,B.Y,80)
s.v(30)
s.dS(120,!0)
A.i()
s=$.h=A.j("Potion[s] of Amelioration",B.an,220)
s.v(60)
s.dS(200,!0)
A.i()
s=$.h=A.j("Potion[s] of Rejuvenation",B.V,b3)
s.v(80)
s.dS(b3,!0)
A.i()
s=$.h=A.j("Antidote",B.p,20)
s.v(2)
s.dS(0,!0)
s=A.a4(234,10,a6)
s.a2("magic/potion/resistance")
s.x=0.5
s.bF(100,1,6)
s.a.i(0,o,20)
s.w=null
A.i()
s=$.h=A.j("Salve[s] of Heat Resistance",B.M,50)
s.v(5)
s.bD(p)
A.i()
s=$.h=A.j("Salve[s] of Cold Resistance",B.G,55)
s.v(6)
s.bD(o)
A.i()
s=$.h=A.j("Salve[s] of Light Resistance",B.B,60)
s.v(7)
n=$.cZ()
s.bD(n)
A.i()
s=$.h=A.j("Salve[s] of Wind Resistance",B.J,65)
s.v(8)
m=$.eb()
s.bD(m)
A.i()
s=$.h=A.j("Salve[s] of Lightning Resistance",B.N,70)
s.v(9)
l=$.dt()
s.bD(l)
A.i()
s=$.h=A.j("Salve[s] of Darkness Resistance",B.f,75)
s.v(10)
k=$.cY()
s.bD(k)
A.i()
s=$.h=A.j("Salve[s] of Earth Resistance",B.k,80)
s.v(13)
s.bD(r)
A.i()
s=$.h=A.j("Salve[s] of Water Resistance",B.C,85)
s.v(16)
j=$.d_()
s.bD(j)
A.i()
s=$.h=A.j("Salve[s] of Acid Resistance",B.F,90)
s.v(19)
s.bD(q)
A.i()
s=$.h=A.j("Salve[s] of Poison Resistance",B.z,95)
s.v(23)
i=$.bz()
s.bD(i)
A.i()
s=$.h=A.j("Salve[s] of Death Resistance",B.V,100)
s.v(30)
h=$.du()
s.bD(h)
s=A.a4(235,10,a6)
s.a2("magic/potion/speed")
s.x=0.3
s.bF(100,1,6)
s.a.i(0,o,20)
s.w=null
A.i()
s=$.h=A.j("Potion[s] of Quickness",B.z,25)
s.E(3,30)
s.hu(1,40)
A.i()
s=$.h=A.j("Potion[s] of Alacrity",B.p,60)
s.E(18,50)
s.hu(2,60)
A.i()
s=$.h=A.j("Potion[s] of Speed",B.A,150)
s.v(34)
s.x=0.25
s.hu(3,100)
s=A.a4(232,10,a6)
s.a2("magic/potion/bottled")
s.x=0.5
s.bF(100,1,8)
s.a.i(0,o,15)
s.w=null
A.i()
s=$.h=A.j("Bottled Wind",B.G,60)
s.v(4)
s.dQ(m,"wind","blasts",10,!0)
A.i()
s=$.h=A.j("Bottled Ice",B.E,100)
s.v(7)
s.dD(o,"cold","freezes",16)
A.i()
s=$.h=A.j("Bottled Fire",B.m,140)
s.v(11)
s.dQ(p,"fire","burns",23,!0)
A.i()
s=$.h=A.j("Bottled Ocean",B.C,160)
s.v(12)
s.jU(j,b4,"drowns",30)
A.i()
s=$.h=A.j("Bottled Poison",B.A,240)
s.v(13)
s.dQ(i,"poison","infects",10,!0)
A.i()
s=$.h=A.j("Bottled Earth",B.k,180)
s.v(16)
s.dD(r,"dirt","crushes",58)
A.i()
s=$.h=A.j("Bottled Lightning",B.N,200)
s.v(18)
s.dD(l,"lightning","shocks",68)
A.i()
s=$.h=A.j("Bottled Acid",B.z,220)
s.v(22)
s.jU(q,"acid","corrodes",72)
A.i()
s=$.h=A.j("Bottled Shadow",B.l,260)
s.v(28)
s.dD(k,"darkness","torments",120)
A.i()
s=$.h=A.j("Bottled Radiance",B.B,280)
s.v(34)
s.dD(n,"light","sears",140)
A.i()
s=$.h=A.j("Bottled Spirit",B.f,300)
s.v(40)
s.dQ(h,"spirit","haunts",160,!0)
s=A.a4(226,20,a6)
s.a2("magic/scroll/teleportation")
s.x=0.3
s.bF(75,1,3)
s.a.i(0,p,20)
s.w=5
A.i()
s=$.h=A.j("Scroll[s] of Sidestepping",B.N,20)
s.v(2)
s.x=0.5
s.fe(8)
A.i()
s=$.h=A.j("Scroll[s] of Phasing",B.V,28)
s.v(6)
s.fe(14)
A.i()
s=$.h=A.j("Scroll[s] of Teleportation",B.an,52)
s.v(15)
s.fe(28)
A.i()
s=$.h=A.j("Scroll[s] of Disappearing",B.C,74)
s.v(26)
s.fe(54)
s=A.a4(228,20,a6)
s.a2("magic/scroll/detection")
s.bF(75,1,3)
s.a.i(0,p,20)
s.w=5
A.i()
s=$.h=A.j("Scroll[s] of Find Nearby Escape",B.B,12)
s.E(1,10)
g=t.oO
s.eR(A.a([B.as],g),20)
A.i()
s=$.h=A.j("Scroll[s] of Locate Escape",B.F,28)
s.E(8,30)
s.hi(A.a([B.as],g))
A.i()
s=$.h=A.j("Scroll[s] of Find Nearby Items",B.h,16)
s.E(2,16)
s.eR(A.a([B.aw],g),20)
A.i()
s=$.h=A.j("Scroll[s] of Item Detection",B.M,64)
s.E(12,40)
s.hi(A.a([B.aw],g))
A.i()
s=$.h=A.j("Scroll[s] of Detect Nearby",B.z,36)
s.E(12,36)
s.eR(A.a([B.as,B.aw],g),20)
A.i()
s=$.h=A.j("Scroll[s] of Detection",B.ar,124)
s.v(30)
s.hi(A.a([B.as,B.aw],g))
A.i()
g=$.h=A.j("Scroll[s] of Sense Nearby Monsters",B.G,50)
g.E(6,19)
g.hE(15)
A.i()
g=$.h=A.j("Scroll[s] of Sense Monsters",B.a_,70)
g.E(20,39)
g.hE(20)
A.i()
g=$.h=A.j("Scroll[s] of Perceive Monsters",B.E,100)
g.E(40,69)
g.kw(30,50)
A.i()
g=$.h=A.j("Scroll[s] of Telepathy",B.C,150)
g.v(70)
g.hE(200)
g=A.a4(224,20,a6)
g.a2("magic/scroll/mapping")
g.x=0.25
g.bF(75,1,3)
g.a.i(0,p,15)
g.w=5
A.i()
g=$.h=A.j("Adventurer's Map",B.A,70)
g.E(10,50)
g.hx(16)
A.i()
g=$.h=A.j("Explorer's Map",B.p,160)
g.E(30,70)
g.hx(32)
A.i()
g=$.h=A.j("Cartographer's Map",B.ad,240)
g.E(50,90)
g.hx(64)
A.i()
g=$.h=A.j("Wizard's Map",B.a_,360)
g.v(70)
g.ka(200,!0)
A.Bi()
A.Bv()
g=A.a4(201,a6,a6)
g.a2("equipment/armor/helm")
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
g=$.h=A.j("Great Helm",B.t,550)
g.v(50)
g.cy=6
g.CW=8
A.a4(244,a6,a6).a2("equipment/armor/body/robe")
A.i()
g=$.h=A.j("Robe",B.E,30)
g.E(2,40)
g.x=0.5
g.cy=4
g.CW=null
g.a.i(0,p,15)
g.w=8
A.i()
g=$.h=A.j("Lined Robe",B.A,110)
g.v(6)
g.x=0.25
g.cy=6
g.CW=null
g.a.i(0,p,12)
g.w=8
g=A.a4(246,a6,a6)
g.a2(b5)
g.x=0.5
A.i()
g=$.h=A.j("Cloth Shirt",B.t,20)
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
g=$.h=A.j("Leather Armor",B.v,240)
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
g.a2(b5)
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
g.a2(b5)
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
A.a4(198,a6,a6).a2("equipment/armor/cloak")
A.i()
g=$.h=A.j("Cloak",B.C,70)
g.E(10,40)
g.x=0.5
g.cy=2
g.CW=1
g.a.i(0,p,20)
g.w=5
A.i()
g=$.h=A.j("Fur Cloak",B.v,140)
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
g.a2("equipment/armor/gloves")
g.x=0.5
g.bF(20,5,4)
A.i()
g=$.h=A.j("(Pair[s] of )Gloves",B.F,170)
g.v(8)
g.cy=1
g.CW=null
g.a.i(0,p,7)
g.w=2
A.i()
g=$.h=A.j("(Set[s] of )Bracers",B.v,480)
g.v(17)
g.cy=2
g.CW=1
A.i()
g=$.h=A.j("(Pair[s] of )Gauntlets",B.l,800)
g.v(34)
g.cy=4
g.CW=2
g=A.a4(230,a6,a6)
g.a2("equipment/armor/shield")
g.x=0.5
g.bF(10,5,8)
A.i()
g=$.h=A.j("Buckler",B.l,170)
g.E(10,40)
g.cy=0
g.CW=2
g.ch=new A.az(3,"The buckler blocks {2}.")
A.i()
g=$.h=A.j("Leather Shield",B.v,240)
g.E(20,50)
g.cy=0
g.CW=3
g.ch=new A.az(5,b6)
g.a.i(0,p,15)
g.w=14
A.i()
g=$.h=A.j("Targe",B.F,340)
g.E(30,60)
g.cy=0
g.CW=4
g.ch=new A.az(8,"The targe blocks {2}.")
g.a.i(0,p,10)
g.w=20
A.i()
g=$.h=A.j("Roundel",B.f,410)
g.E(40,80)
g.cy=0
g.CW=6
g.ch=new A.az(10,b6)
A.i()
g=$.h=A.j("Steel Shield",B.o,570)
g.E(50,90)
g.cy=0
g.CW=7
g.ch=new A.az(12,b6)
A.i()
g=$.h=A.j("Kite Shield",B.d,650)
g.v(60)
g.cy=0
g.CW=8
g.ch=new A.az(15,b6)
A.i()
g=$.h=A.j("Lantern Shield",B.h,1200)
g.v(30)
g.cy=0
g.CW=8
g.ch=new A.az(11,b6)
g.oT(5)
g=A.a4(236,a6,a6)
g.a2(b7)
g.x=0.3
A.i()
g=$.h=A.j("(Pair[s] of )Sandals",B.k,10)
g.E(2,20)
g.cy=1
g.CW=null
g.a.i(0,p,20)
g.w=3
A.i()
g=$.h=A.j("(Pair[s] of )Shoes",B.v,30)
g.E(8,40)
g.cy=2
g.CW=null
g.a.i(0,p,14)
g.w=3
g=A.a4(196,a6,a6)
g.a2(b7)
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
A.wJ()
A.wN()
A.wV()
g=A.ai("a","natural/bug/spider",a6,b8,a6,a6,a6)
g.at=4
g.ax=2
g.Q=$.mS()
g=A.p("little brown spider",3,B.k,2,30,a6,0)
g.f=40
g.ah(b9,5,i)
g=$.xW()
f=A.bg("Seems harmless enough. What's that dripping from its pedipalps?",g,c0)
$.c6.fy=f
s=A.p("gray spider",7,B.f,20,30,a6,0)
s.f=30
s.ah(b9,5,i)
s=A.p("spiderling",9,B.t,14,35,a6,0)
s.f=50
s.aT(2,7)
s.ah(b9,10,i)
s=A.p("giant spider",12,B.C,40,a6,a6,0)
s.f=30
s.ah(b9,7,i)
f=A.bg("Like a large dog, if the dog had eight articulated legs, eight\n  glittering eyes, and wanted nothing more than to kill you.",g,c0)
$.c6.fy=f
s=A.ai("b","natural/animal/mammal/bat",a6,a6,a6,1,a6)
s.at=2
s.ax=8
e=s.c
d=$.U().a
s.c=new A.ad(e.a|d)
s.d=B.ai
s=A.p("brown bat",1,B.k,4,a6,0.5,0)
s.f=50
B.a.j(s.w,new A.az(20,c1))
s.aT(2,4)
s.D(b9,3)
s=A.p("giant bat",4,B.v,24,a6,a6,0)
s.f=30
s.D(b9,6)
s=A.p("cave bat",6,B.o,30,a6,a6,0)
s.f=40
B.a.j(s.w,new A.az(20,c1))
s.aT(2,5)
s.D(b9,6)
s=A.ai("c","natural/animal/mammal/canine",25,a6,a6,a6,20)
s.at=5
s.ax=10
s.f=25
s=A.p("mangy cur",2,B.B,11,a6,a6,0)
s.aN(4)
s.D(b9,4)
B.a.j(s.dx,new A.bP(6,a6,10))
s=A.p("wild dog",4,B.o,20,a6,a6,0)
s.aN(4)
s.D(b9,6)
B.a.j(s.dx,new A.bP(8,a6,10))
s=A.p("mongrel",7,B.M,28,a6,a6,0)
s.aT(2,5)
s.D(b9,8)
B.a.j(s.dx,new A.bP(10,a6,10))
s=A.p("wolf",26,B.t,60,a6,a6,0)
s.aT(3,6)
s.D(b9,12)
B.a.j(s.dx,new A.bP(10,a6,10))
s=A.p("varg",30,B.f,80,a6,a6,0)
s.aT(2,6)
s.D(b9,16)
B.a.j(s.dx,new A.bP(10,a6,10))
s=A.p("Skoll",36,B.h,200,a6,a6,0)
s.hU()
s.ab(new A.ac(c2),5,9)
s.D(b9,20)
B.a.j(s.dx,new A.bP(10,a6,10))
s=A.p("Hati",40,B.E,250,a6,a6,0)
s.hU()
s.ab(new A.ac(c2),5,9)
s.D(b9,23)
B.a.j(s.dx,new A.bP(10,a6,10))
s=A.p("Fenrir",44,B.l,300,a6,a6,0)
s.hU()
s.ab(new A.ac(c2),3,5)
s.kb("Skoll")
s.kb("Hati")
s.D(b9,26)
B.a.j(s.dx,new A.bP(10,a6,10))
A.AR()
s=A.ai("e","magical/eye",a6,"immobile",a6,a6,a6)
s.at=16
s.ax=1
B.a.j(s.w,new A.az(10,"{1} blinks out of the way."))
s.c=new A.ad(s.c.a|d)
s.d=B.ai
s=A.p("lazy eye",5,B.G,20,a6,a6,0)
s.D(c3,8)
s.au(c4,c5,l,12,8,5)
s=A.p("mad eye",9,B.a4,40,a6,a6,0)
s.D(c3,8)
s.bj(m,15,8,6)
s=A.p("floating eye",15,B.B,60,a6,a6,0)
s.D(c3,10)
s.au(c4,c5,l,24,6,4)
B.a.j(s.dx,new A.bv(7,10))
s=A.p("baleful eye",20,B.M,80,a6,a6,0)
s.D(c6,12)
s.bj(p,20,8,4)
s.au("jet",c7,j,20,8,4)
B.a.j(s.dx,new A.bv(9,10))
s=A.p("malevolent eye",30,B.m,120,a6,a6,0)
s.D(c6,20)
s.bj(n,20,10,4)
s.bj(k,20,10,4)
s.c2(p,30,a6,7)
B.a.j(s.dx,new A.bv(9,10))
s=A.p("murderous eye",40,B.Y,180,a6,a6,0)
s.D(c6,30)
s.bj(q,40,8,7)
s.au("stone",c8,r,40,8,7)
s.c2(o,30,a6,7)
B.a.j(s.dx,new A.bv(9,10))
s=A.p("watcher",60,B.o,300,a6,a6,0)
s.D("see[s]",50)
s.bj(n,40,10,7)
s.c2(n,30,a6,7)
s.bj(k,50,10,7)
s.c2(k,40,a6,7)
s=A.ai("f","natural/animal/mammal/feline",40,a6,a6,a6,a6)
s.at=10
s.ax=8
s=A.p("stray cat",1,B.h,11,a6,a6,1)
s.f=30
B.a.j(s.dx,new A.b1(B.cj,4))
s.D(b9,4)
s.D(c9,3)
s=A.ai("g","humanoid/hob/goblin",a6,a6,a6,a6,a6)
s.at=8
s.ax=4
s.f=10
e=s.c
c=$.bA().a
s.c=new A.ad(e.a|c)
e=A.p("goblin peon",4,B.F,30,a6,a6,0)
e.f=20
e.aN(4)
e.D(d0,8)
B.a.j(e.dx,new A.b1(B.a8,8))
e.C(d1,20)
e.C(d2,5)
e.C(d3,10)
e=A.p("goblin archer",6,B.p,36,a6,a6,0)
e.aN(2)
e.ab(new A.ac(d4),0,3)
e.D(d0,4)
s=$.ax()
e.au(d5,c8,s,8,8,3)
e.C(d1,30)
e.C("bow",10)
e.C("dagger",5)
e.C(d3,10)
e=A.p("goblin fighter",6,B.k,58,a6,a6,0)
e.aN(2)
e.ab(new A.ac(d4),1,4)
e.D(d0,12)
e.C(d1,20)
e.C(d2,10)
e.C(d6,10)
e.C(d7,5)
e.C(d3,10)
e=A.p("goblin warrior",8,B.o,68,a6,a6,0)
e.aN(2)
e.ab(new A.ac(d4),1,5)
e.D(d0,16)
e.C(d1,25)
e.C("axe",10)
e.C(d6,10)
e.C(d7,5)
e.C(d3,10)
b=t.s
B.a.U(e.x,A.a(d8.split(c0),b))
e=A.p("goblin mage",9,B.C,50,a6,a6,0)
e.ab(new A.ac(d4),1,4)
e.D("whip[s]",7)
e.bj(p,12,8,12)
e.au(c4,c5,l,16,6,12)
e.C(d1,20)
e.C(d9,10)
e.C(e0,30)
e=A.p("goblin ranger",12,B.A,60,a6,a6,0)
e.ab(new A.ac(d4),0,5)
e.D(d0,10)
e.au(d5,c8,s,12,8,3)
e.C(d1,20)
e.C("bow",15)
e.C(d6,10)
e.C(e0,20)
e=A.p("Erlkonig, the Goblin Prince",14,B.l,120,a6,a6,0)
e.cL(B.aG)
e.ab(new A.ac(d4),4,8)
e.D(b1,10)
e.D(e1,14)
e.bj(k,20,10,20)
e.hn(d1,3)
e.oy(e2,2,4)
e.eS(e0,3,4)
B.a.U(e.x,A.a(d8.split(c0),b))
e=A.ai("i","bug",a6,b8,a6,a6,3)
e.at=5
e.ax=2
e.f=40
e=A.p("giant cockroach[es]",1,B.v,4,a6,0.4,0)
e.aT(2,5)
e.d=B.bg
e.D(e3,2)
B.a.j(e.dx,new A.bK(!1,4))
e.C(a8,30)
f=A.bg("It's not quite as easy to squash one of these when it's as long as\n      your arm.",g,c0)
$.c6.fy=f
e=A.p("giant centipede",3,B.m,14,a6,a6,2)
e.f=20
e.D(e3,4)
e.D(b9,8)
e=A.ai("i","natural/bug/fly",a6,b8,a6,a6,3)
e.at=5
e.ax=2
e.f=40
e=A.p("firefly",8,B.M,6,a6,a6,1)
e.f=70
e.aT(3,8)
e.ah(b9,12,p)
e.C(a8,40)
e=A.ai("j","magical/jelly",a6,b8,0.7,-1,a6)
e.at=3
e.ax=1
e.f=30
e.d=B.aR
e=A.p("green jelly",1,B.z,10,a6,a6,0)
a=e.Q=$.xt()
e.D(e3,3)
e=A.ai("j","jelly",a6,e4,0.6,a6,a6)
e.at=2
e.ax=1
e.d=B.bg
e.aN(4)
e=A.p("green slime",2,B.p,8,a6,a6,0)
e.Q=a
e.D(e3,4)
B.a.j(e.dx,new A.bK(!1,4))
e=A.p("frosty slime",4,B.t,14,a6,a6,0)
e.Q=$.xG()
e.ah(e3,5,o)
B.a.j(e.dx,new A.bK(!1,4))
e=A.p("mud slime",6,B.k,20,a6,a6,0)
e.Q=$.xl()
e.ah(e3,8,r)
B.a.j(e.dx,new A.bK(!1,4))
e=A.p("smoking slime",15,B.m,30,a6,a6,0)
e.as=4
e.Q=$.xx()
e.ah(e3,10,p)
B.a.j(e.dx,new A.bK(!1,4))
e=A.p("sparkling slime",20,B.V,40,a6,a6,0)
e.as=3
e.Q=$.xF()
e.ah(e3,12,l)
B.a.j(e.dx,new A.bK(!1,4))
e=A.p("caustic slime",25,B.ad,50,a6,a6,0)
e.Q=a
e.ah(e3,13,q)
B.a.j(e.dx,new A.bK(!1,4))
e=A.p("virulent slime",35,B.A,60,a6,a6,0)
e.Q=a
e.ah(e3,14,i)
B.a.j(e.dx,new A.bK(!1,4))
e=A.p("ectoplasm",45,B.l,40,a6,a6,0)
e.Q=$.xs()
e.ah(e3,15,h)
B.a.j(e.dx,new A.bK(!1,4))
e=A.ai("k","humanoid/hob/kobold",a6,e5,a6,a6,a6)
e.at=10
e.ax=4
e.f=15
e=A.p("scurrilous imp",1,B.a4,12,a6,a6,0)
e.f=20
e.aN(2)
e.D("club[s]",4)
B.a.j(e.dx,new A.b1(B.a8,5))
e.oM()
e.C(d1,20)
e.C(e6,10)
e.C("speed",20)
e=A.p("vexing imp",2,B.V,16,a6,a6,0)
e.aN(2)
e.ab(new A.ac(e7),0,1)
e.D(c9,4)
B.a.j(e.dx,new A.b1(B.a8,5))
e.au(c4,c5,l,6,6,5)
e.C(d1,25)
e.C("teleportation",20)
A.ai("k",e7,a6,a6,a6,a6,a6).f=20
e=A.p(e7,3,B.m,20,a6,a6,0)
e.aN(3)
e.ab(new A.ac(c2),0,3)
e.D(e8,4)
B.a.j(e.dx,new A.bv(6,10))
e.C(d1,25)
e.C(e2,10)
e.C(e0,20)
e=A.p("kobold shaman",4,B.C,20,a6,a6,0)
e.aN(2)
e.ab(new A.ac(c2),0,3)
e.D(b1,4)
e.au("jet",c7,j,8,8,10)
e.C(d1,25)
e.C(d9,10)
e.C(e0,20)
e=A.p("kobold trickster",5,B.h,24,a6,a6,0)
e.D(b1,5)
a=e.dx
B.a.j(a,new A.b1(B.a8,5))
e.au(c4,c5,l,8,6,5)
B.a.j(a,new A.bv(6,7))
e.ht(7)
e.C(d1,35)
e.C(e0,20)
e=A.p("kobold priest",6,B.E,30,a6,a6,0)
e.aN(2)
e.ab(new A.ac(e7),1,3)
e.D("club[s]",6)
B.a.j(e.dx,new A.fU(10,15))
e.ht(7)
e.C(d1,20)
e.C(e6,10)
e.C(d9,10)
e.C(e0,30)
e=A.p("imp incanter",7,B.N,33,a6,a6,0)
e.aN(2)
e.ab(new A.ac(e7),1,3)
e.ab(new A.ac(c2),0,3)
e.D(c9,4)
B.a.j(e.dx,new A.b1(B.a8,6))
e.au(c4,c5,l,10,6,5)
e.C(d1,30)
e.C(d9,10)
e.C(e0,35)
B.a.U(e.x,A.a(e5.split(c0),b))
e=A.p("imp warlock",8,B.an,46,a6,a6,0)
e.ab(new A.ac(e7),2,5)
e.ab(new A.ac(c2),0,3)
e.D(d0,5)
e.au("ice","freezes",o,12,8,8)
e.au(c4,c5,l,12,6,8)
e.C(d1,30)
e.C("staff",20)
e.C(d9,10)
e.C(e0,30)
e=A.p("Feng",10,B.M,80,a6,a6,1)
e.f=10
e.cL(B.aG)
e.ab(new A.ac(e7),4,10)
e.ab(new A.ac(c2),1,3)
e.D(d0,5)
a=e.dx
B.a.j(a,new A.b1(B.a8,7))
B.a.j(a,new A.bv(6,5))
B.a.j(a,new A.bv(30,50))
e.c2(l,12,a6,8)
e.eS(d1,3,5)
e.hp(d2,5,20)
e.hp(d6,5,30)
e.eS(e0,2,5)
e=A.ai("l","humanoid/saurian",a6,b8,a6,a6,a6)
e.at=10
e.ax=5
e.f=10
B.a.j(e.w,new A.az(5,"{2} [are|is] deflected by its scales."))
e=A.p("lizard guard",11,B.h,26,a6,a6,0)
e.D(e9,8)
e.D(b9,10)
e.C(d1,30)
e.C(d6,10)
e.C(d2,10)
e=A.p("lizard protector",15,B.z,30,a6,a6,0)
e.ab(new A.ac(f0),0,2)
e.D(e9,10)
e.D(b9,14)
e.C(d1,30)
e.C(d6,10)
e.C(d2,10)
e=A.p("armored lizard",17,B.o,38,a6,a6,0)
e.ab(new A.ac(f0),0,2)
e.D(e9,10)
e.D(b9,15)
e.C(d1,30)
e.C(d6,20)
e.C(d2,10)
e=A.p("scaled guardian",19,B.l,50,a6,a6,0)
e.ab(new A.ac(f0),0,3)
e.ab(new A.ac(f1),0,2)
e.D(e9,10)
e.D(b9,15)
e.C(d1,40)
e.C(e2,10)
e=A.p(f0,21,B.M,64,a6,a6,0)
e.ab(new A.ac(f0),1,4)
e.ab(new A.ac(f1),0,2)
e.D(e9,12)
e.D(b9,17)
e.C(d1,50)
e.C(e2,10)
e=A.ai("o","humanoid/orcus/orc",a6,a6,a6,a6,a6)
e.at=7
e.ax=6
e.f=10
e.c=new A.ad(e.c.a|c)
B.a.U(e.x,A.a(d8.split(c0),b))
e=A.p("orc",28,B.M,100,a6,a6,0)
e.aT(3,6)
e.D(d0,12)
e.C(d1,20)
e.C(e2,5)
e.C(d2,5)
e=A.p("orc brute",29,B.ad,120,a6,a6,0)
e.ab(new A.ac("orc"),2,5)
e.D("bash[es]",16)
e.C(d1,20)
e.C(e6,10)
e.C(d6,10)
e=A.p("orc soldier",30,B.o,140,a6,a6,0)
e.aT(4,6)
e.ab(new A.ac("orcus"),1,5)
e.D(d0,20)
e.C(d1,25)
e.C("axe",10)
e.C(d6,10)
e=A.p("orc chieftain",31,B.m,180,a6,a6,0)
e.ab(new A.ac("orcus"),2,10)
e.D(d0,10)
e.ox(d1,2,40)
e.C(e2,20)
e.C(a7,20)
e=A.ai("p","humanoid/human",a6,a6,a6,a6,14)
e.at=10
e.ax=5
e.f=10
e.c=new A.ad(e.c.a|c)
e.as=2
e=A.p("Harold the Misfortunate",2,B.N,30,a6,a6,0)
e.cL(B.aG)
e.D(b1,3)
B.a.j(e.dx,new A.b1(B.aE,5))
e.C(d1,80)
e.ho(f2,4,20)
e.ho(d6,4,30)
e.ho(e0,4,40)
e=A.p("hapless adventurer",1,B.B,14,15,a6,0)
e.f=30
e.D(b1,3)
B.a.j(e.dx,new A.b1(B.aE,12))
e.C(d1,15)
e.C(f2,10)
e.C(d6,15)
e.C(e0,20)
B.a.U(e.x,A.a(e5.split(c0),b))
e=A.p("simpering knave",2,B.M,17,a6,a6,0)
e.D(b1,2)
e.D(d0,4)
e.C(d1,20)
e.C("whip",10)
e.C(d6,15)
e.C(e0,20)
B.a.U(e.x,A.a(e5.split(c0),b))
e=A.p("decrepit mage",3,B.V,20,a6,a6,0)
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
B.a.j(e.dx,new A.b1(B.aE,10))
e.C(d1,20)
e.C("potion",20)
e.C("bow",10)
e.C("body",20)
e=A.p("drunken priest",5,B.E,34,a6,a6,0)
e.f=40
e.D(b1,8)
s=e.dx
B.a.j(s,new A.fU(8,15))
B.a.j(s,new A.b1(B.aE,5))
e.C(d1,35)
e.C("scroll",20)
e.C(e6,10)
e.C(d9,10)
B.a.U(e.x,A.a(b8.split(c0),b))
e=A.ai("r","natural/animal/mammal/rodent",30,a6,a6,a6,a6)
e.at=4
e.ax=6
e.f=30
e.d=B.aR
e=A.p("[mouse|mice]",1,B.F,3,a6,0.7,0)
e.aN(6)
e.D(b9,3)
e.D(c9,2)
e=A.p("sewer rat",2,B.f,8,a6,a6,0)
e.f=20
e.aN(4)
e.D(b9,4)
e.D(c9,3)
e=A.p("sickly rat",3,B.p,10,a6,a6,0)
e.ah(b9,8,i)
e.D(c9,4)
e=A.p("plague rat",6,B.z,20,a6,a6,0)
e.aN(4)
e.ah(b9,15,i)
e.D(c9,8)
e=A.p("giant rat",8,B.M,40,a6,a6,0)
e.D(b9,12)
e.D(c9,8)
e=A.p("The Rat King",8,B.Y,120,a6,a6,0)
e.cL(B.aG)
e.D(b9,16)
e.D(c9,10)
e.ab(new A.ac("rodent"),8,16)
e.hn(d1,3)
e.hp(a7,10,50)
e=A.ai("s","natural/bug/slug",5,b8,a6,-3,2)
e.at=3
e.ax=1
e.f=30
A.p("giant slug",3,B.ac,20,a6,a6,0).D(e3,8)
A.p("suppurating slug",6,B.z,50,a6,a6,0).ah(e3,12,i)
A.p("acidic slug",9,B.ac,70,a6,a6,0).ah(e3,16,q)
e=A.ai("v","natural/plant/vine",a6,e4,a6,a6,a6)
e.ax=e.at=10
A.p("choker",16,B.p,40,a6,a6,0).D(f3,12)
e=A.p("nightshade",19,B.N,50,a6,a6,0)
e.kT(10,3)
e.ah("touch[es]",12,i)
e=A.p("creeper",22,B.z,60,a6,a6,0)
B.a.j(e.dx,new A.bK(!0,10))
e.kT(10,3)
e.D(f3,8)
A.p("strangler",26,B.A,80,a6,a6,0).D(f3,14)
s=A.ai("w",f4,15,b8,a6,a6,a6)
s.at=2
s.ax=3
s.f=40
s=A.p("blood worm",1,B.Y,4,a6,0.5,0)
s.aT(3,7)
s.D(e3,5)
s=A.p("fire worm",10,B.M,6,a6,a6,0)
s.aT(2,6)
s.d=B.aR
s.ah(e3,5,p)
A.ai("w",f4,10,b8,a6,a6,a6).f=30
A.p("giant earthworm",3,B.a4,30,a6,a6,-2).D(e3,5)
A.p("giant cave worm",7,B.F,80,a6,a6,-2).ah(e3,12,q)
s=A.ai("x","undead/skeleton",a6,a6,a6,a6,a6)
s.ax=s.at=4
s.f=30
s=A.p(f5,3,B.f,18,a6,3,-1)
s.f=40
s.D(e9,6)
s=A.p(f6,4,B.o,26,a6,4,0)
s.f=40
s.D(e9,8)
s=A.p(f7,7,B.F,33,a6,3,-2)
s.f=40
s.D(b9,10)
s=A.p(f8,10,B.B,44,a6,4,0)
s.ax=s.at=0
s.f=60
s.c=new A.ad(s.c.a|c)
s.D(e9,7)
s.C(d1,30)
s.C(f2,10)
s.C(d6,10)
s=A.p(f9,12,B.ad,50,a6,4,0)
s.D(b9,9)
s.D("kick[s]",7)
s.C(d1,30)
s.C(d6,10)
s=A.p(g0,13,B.z,60,a6,5,0)
s.c=new A.ad(s.c.a|c)
s.D(e9,7)
e=s.dx
B.a.j(e,new A.bq(A.aJ(f9),A.aJ(f6),g1,1))
B.a.j(e,new A.bq(A.aJ(f9),A.aJ(f5),g2,1))
s.C(d1,30)
s.C(f2,5)
s.C(d6,10)
s=A.p("skeleton",15,B.t,70,a6,6,0)
s.c=new A.ad(s.c.a|c)
s.D(e9,7)
s.D(b9,9)
e=s.dx
B.a.j(e,new A.bq(A.aJ(f8),A.aJ(f7),g3,1))
B.a.j(e,new A.bq(A.aJ(g0),A.aJ(f6),g1,1))
B.a.j(e,new A.bq(A.aJ(g0),A.aJ(f5),g2,1))
s.C(d1,40)
s.C(f2,10)
s.C(d6,10)
s=A.p("skeleton warrior",17,B.a4,90,a6,6,0)
s.c=new A.ad(s.c.a|c)
s.D(e1,13)
s.D(d0,10)
e=s.dx
B.a.j(e,new A.bq(A.aJ(f8),A.aJ(f7),g3,1))
B.a.j(e,new A.bq(A.aJ(g0),A.aJ(f6),g1,1))
B.a.j(e,new A.bq(A.aJ(g0),A.aJ(f5),g2,1))
s.C(d1,50)
s.C(f2,20)
s.C(d6,15)
s=A.p("robed skeleton",19,B.N,110,a6,4,0)
s.c=new A.ad(s.c.a|c)
s.D(e1,13)
s.D(d0,10)
s.bj(l,15,10,8)
e=s.dx
B.a.j(e,new A.bq(A.aJ(f8),A.aJ(f7),g3,1))
B.a.j(e,new A.bq(A.aJ(g0),A.aJ(f6),g1,1))
B.a.j(e,new A.bq(A.aJ(g0),A.aJ(f5),g2,1))
s.C(d1,50)
s.C(e0,20)
s.C(d6,10)
s=A.ai("B","natural/animal/bird",a6,a6,a6,a6,a6)
s.at=8
s.ax=6
B.a.j(s.w,new A.az(10,"{1} flaps out of the way."))
s.c=new A.ad(s.c.a|d)
s.aT(3,6)
s=A.p("crow",4,B.l,10,a6,a6,2)
s.f=30
s.D(b9,5)
s.C(a9,30)
f=A.bg('"What harm can a stupid little crow do?" you think as it and its\n      murderous friends dive towards your eyes, claws extended.',g,c0)
$.c6.fy=f
s=A.p("raven",6,B.f,16,a6,a6,0)
s.f=15
s.D(b9,5)
s.D(e9,4)
s.C(a9,30)
B.a.U(s.x,A.a(d8.split(c0),b))
f=A.bg("Its black eyes gleam with a malevolent intelligence.",g,c0)
$.c6.fy=f
A.B_()
s=A.ai("F","humanoid/hob/fae",a6,e5,a6,2,a6)
s.at=10
s.ax=8
s.f=30
B.a.j(s.w,new A.az(10,c1))
s.c=new A.ad(s.c.a|d)
s.d=B.ai
s=A.p("forest sprite",2,B.ad,6,a6,a6,0)
s.D(c9,3)
B.a.j(s.dx,new A.b1(B.a8,4))
s.au(c4,c5,l,4,6,12)
s.C(d1,10)
s.C(e0,30)
s.C(a8,30)
s=A.p("house sprite",5,B.G,10,a6,a6,0)
s.D(e8,5)
g=s.dx
B.a.j(g,new A.b1(B.a8,4))
s.au("stone",c8,r,4,8,10)
B.a.j(g,new A.bv(4,8))
s.C(d1,10)
s.C(e0,30)
s.C(a8,30)
s=A.p("mischievous sprite",7,B.a4,24,a6,a6,0)
s.D(e8,6)
g=s.dx
B.a.j(g,new A.b1(B.a8,4))
s.bj(m,8,8,10)
B.a.j(g,new A.bv(5,10))
s.C(d1,10)
s.C(e0,30)
s.C(a8,30)
s=A.p("Tink",8,B.p,40,a6,a6,0)
s.cL(B.cn)
s.f=10
s.D(e8,8)
g=s.dx
B.a.j(g,new A.b1(B.a8,4))
s.au(c4,c5,l,4,6,8)
s.bj(m,7,8,10)
B.a.j(g,new A.bv(5,10))
s.hn(d1,2)
s.eS(e0,3,3)
s=A.ai("H","mythical/beast/hybrid",a6,a6,a6,a6,a6)
s.at=10
s.ax=12
s=A.p("harpy",25,B.N,50,a6,a6,2)
s.c=new A.ad(s.c.a|d)
s.aT(2,5)
s.D(b9,10)
s.D(c9,15)
d=s.dx
B.a.j(d,new A.bP(10,"screeches",10))
B.a.j(d,new A.b1(B.ci,5))
s.C(a9,50)
s=A.p("griffin",35,B.h,200,a6,a6,0)
s.D(b9,20)
s.D(c9,15)
s.C(a9,50)
A.ai("Q","magical",a6,a6,a6,a6,a6)
s=A.p("Nameless Unmaker",100,B.V,b3,a6,a6,2)
s.cL(B.x)
s.ax=s.at=16
s.ah("crushe[s]",250,r)
s.ah("blast[s]",200,l)
s.c2(k,500,a6,10)
B.a.U(s.x,A.a(b8.split(c0),b))
s.c=new A.ad(s.c.a|c)
a0=A.ut(20,new A.aH(100,A.a7(a7,s.CW,B.hw)))
B.a.j(s.dy,a0)
A.ai("R","natural/animal/herp",a6,a6,a6,a6,a6)
s=A.p("frog",1,B.z,4,30,a6,0)
s.at=6
s.ax=4
s.f=30
s.c=new A.ad(s.c.a|$.iv().a)
s.D("hop[s] on",2)
s=A.ai("R","natural/animal/herp/salamander",30,a6,a6,a6,a6)
s.at=6
s.ax=5
s.f=20
s.d=B.ai
s.as=3
s=A.p("juvenile salamander",7,B.a4,20,a6,a6,0)
s.ah(b9,14,p)
s.c2(p,20,4,16)
s=A.p(f1,13,B.m,30,a6,a6,0)
s.ah(b9,18,p)
s.c2(p,30,5,16)
s=A.p("three-headed salamander",23,B.Y,90,a6,a6,0)
s.ah(b9,24,p)
s.c2(p,20,5,10)
s=A.ai("S","natural/animal/herp/snake",30,a6,a6,a6,a6)
s.at=4
s.ax=7
s.f=30
A.p("water snake",1,B.z,11,a6,a6,0).D(b9,3)
A.p("brown snake",3,B.k,25,a6,a6,0).D(b9,4)
A.p("cave snake",8,B.o,40,a6,a6,0).D(b9,10)
A.fp()
A.y6($.ca().goG())
A.aV()
$.bc="body"
s=A.I(g4,1)
s.v(40)
s.Y(2,4,3)
s.J(400,2)
s.bG(-2)
g=t.Q
g.a(A.Z())
s.as=A.Z()
s.R(n)
s=A.I(g5,0.3)
s.v(60)
s.Y(4,4,6)
s.J(600,3)
s.bG(-3)
s.as=A.Z()
e=t.S
s.ch.i(0,B.aa,g.a(A.fq(1,e)))
s.R(m)
s.R(n)
A.aV()
$.bc="cloak"
s=A.I(g4,1)
s.E(40,80)
s.Y(4,4,6)
s.J(300,2)
s.bG(-1)
s.as=A.Z()
s.R(n)
s=A.I(g5,0.3)
s.v(60)
s.Y(5,4,8)
s.J(500,3)
s.bG(-2)
s.as=A.Z()
s.ch.i(0,B.aa,g.a(A.fq(2,e)))
s.R(m)
s.R(n)
A.aV()
$.bc="boots"
s=A.I(g4,1)
s.v(50)
s.Y(2,4,5)
s.J(400,2.5)
s.bG(-2)
s.as=A.Z()
A.aV()
$.bc="helm"
s=A.I(g4,1)
s.E(40,80)
s.Y(1,4,3)
s.J(400,2)
s.bG(-1)
s.as=A.Z()
s.ch.i(0,B.Z,g.a(A.fq(1,e)))
s.R(n)
s=A.I(g5,0.3)
s.v(60)
s.b5(2,4)
s.J(600,3)
s.bG(-1)
s.as=A.Z()
s.ch.i(0,B.Z,A.Z())
s.R(m)
s.R(n)
A.aV()
$.bc="shield"
s=A.I(g4,1)
s.E(40,80)
s.Y(3,4,5)
s.J(300,1.6)
s.bA(0.8)
s.aA(A.aW())
s.R(n)
s=A.I(g5,0.5)
s.v(50)
s.b5(1,4)
s.J(500,2.2)
s.bA(0.6)
d=t.i
s.aA(A.fq(1.5,d))
s.ch.i(0,B.Z,A.Z())
s.R(m)
s.R(n)
A.aV()
$.bc="body"
s=A.I(g6,1)
s.v(30)
s.Y(4,3,6)
s.J(400,2)
s.bG(2)
s.as=A.Z()
s.R(r)
s.R(k)
A.aV()
$.bc="helm"
s=A.I(g6,1)
s.v(50)
s.Y(3,4,5)
s.J(300,2)
s.bG(1)
s.as=A.Z()
s.R(r)
s.R(k)
A.aV()
$.bc="gloves"
s=A.I(g6,1)
s.v(50)
s.J(300,2)
s.Y(2,4,4)
s.bG(1)
s.as=A.Z()
s.ch.i(0,B.aj,g.a(A.fq(1,e)))
s.R(r)
s.R(k)
A.aV()
$.bc="boots"
s=A.I(g6,1)
s.v(50)
s.Y(3,4,5)
s.J(300,2)
s.bG(1)
s.as=A.Z()
s.R(r)
s.R(k)
A.aV()
$.bc="shield"
s=A.I(g6,1)
s.v(40)
s.Y(4,3,8)
s.J(200,2.2)
s.bA(1.2)
s.dJ(A.Z(),A.aW())
s.R(r)
s.R(k)
A.aV()
$.bc="armor"
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
s.b5(2,5)
s.J(500,1.4)
s.bt(m,A.Z())
m=A.I("_ of Protection from Earth",0.25)
m.v(37)
m.b5(2,5)
m.J(500,1.4)
m.bt(r,A.Z())
r=A.I("_ of Protection from Fire",0.25)
r.v(38)
r.b5(2,5)
r.J(500,1.5)
r.bt(p,A.Z())
r=A.I("_ of Protection from Water",0.25)
r.v(39)
r.b5(2,5)
r.J(500,1.4)
r.bt(j,A.Z())
j=A.I("_ of Protection from Acid",0.2)
j.v(40)
j.b5(2,5)
j.J(500,1.5)
j.bt(q,A.Z())
q=A.I("_ of Protection from Cold",0.25)
q.v(41)
q.b5(2,5)
q.J(500,1.4)
q.bt(o,A.Z())
q=A.I("_ of Protection from Lightning",0.16)
q.v(42)
q.b5(2,5)
q.J(500,1.4)
q.bt(l,A.Z())
q=A.I("_ of Protection from Poison",0.14)
q.v(43)
q.b5(2,5)
q.J(b3,1.6)
q.bt(i,A.Z())
q=A.I("_ of Protection from Dark",0.14)
q.v(44)
q.b5(2,5)
q.J(500,1.5)
q.bt(k,A.Z())
q=A.I("_ of Protection from Light",0.14)
q.v(45)
q.b5(2,5)
q.J(500,1.5)
q.bt(n,A.Z())
q=A.I("_ of Protection from Spirit",0.13)
q.v(46)
q.b5(2,5)
q.J(800,1.6)
q.bt(h,A.Z())
A.aV()
$.bc="weapon"
q=A.I("_ of Harming",1)
q.E(1,30)
q.Y(1,3,2)
q.J(100,1.2)
q.bA(1.05)
q.dI(A.Z())
q=A.I("_ of Wounding",1)
q.E(10,50)
q.Y(3,3,5)
q.J(140,1.3)
q.bA(1.07)
q.dI(A.Z())
q=A.I("_ of Maiming",1)
q.E(25,75)
q.Y(2,3,4)
q.J(180,1.5)
q.bA(1.09)
q.dJ(A.Z(),A.aW())
q=A.I("_ of Slaying",1)
q.v(45)
q.Y(4,2,8)
q.J(200,2)
q.bA(1.11)
q.dJ(A.Z(),A.aW())
A.aV()
$.bc="bow"
q=A.I("Ash _",1)
q.E(10,70)
q.Y(2,4,4)
q.J(300,1.3)
q.bA(0.8)
q.dI(A.Z())
q=A.I("Yew _",1)
q.v(20)
q.Y(5,3,8)
q.J(500,1.4)
q.bA(0.8)
q.dI(A.Z())
A.aV()
$.bc="weapon"
q=A.I("Glimmering _",0.3)
q.E(20,60)
q.Y(2,3,3)
q.J(300,1.3)
q.aA(A.aW())
q.bz(n)
q=A.I("Shining _",0.25)
q.E(32,90)
q.Y(4,3,5)
q.J(400,1.6)
q.aA(A.aW())
q.bz(n)
q=A.I("Radiant _",0.2)
q.v(48)
q.Y(6,3,8)
q.J(500,2)
q.aA(A.aW())
q.ci(n,2)
n=A.I("Dim _",0.3)
n.E(16,60)
n.Y(2,3,3)
n.J(300,1.3)
n.aA(A.aW())
n.bz(k)
n=A.I("Dark _",0.25)
n.E(32,80)
n.Y(4,3,5)
n.J(400,1.6)
n.aA(A.aW())
n.bz(k)
n=A.I("Black _",0.2)
n.v(56)
n.Y(6,3,8)
n.J(500,2)
n.aA(A.aW())
n.ci(k,2)
k=A.I("Chilling _",0.3)
k.E(20,65)
k.Y(4,3,6)
k.J(300,1.5)
k.aA(A.aW())
k.bz(o)
k=A.I("Freezing _",0.25)
k.v(40)
k.Y(6,3,9)
k.J(400,1.7)
k.aA(A.aW())
k.ci(o,2)
o=A.I("Burning _",0.3)
o.E(20,60)
o.Y(3,3,5)
o.J(300,1.5)
o.aA(A.aW())
o.bz(p)
o=A.I("Flaming _",0.25)
o.E(40,90)
o.Y(6,3,7)
o.J(360,1.8)
o.aA(A.aW())
o.bz(p)
o=A.I("Searing _",0.2)
o.v(60)
o.Y(8,3,11)
o.J(500,2.1)
o.aA(A.aW())
o.ci(p,2)
p=A.I("Electric _",0.2)
p.v(50)
p.Y(4,3,7)
p.J(300,1.5)
p.aA(A.aW())
p.bz(l)
p=A.I("Shocking _",0.2)
p.v(70)
p.Y(8,3,11)
p.J(400,2)
p.aA(A.aW())
p.ci(l,2)
l=A.I("Poisonous _",0.2)
l.E(35,90)
l.Y(1,4,2)
l.J(500,1.5)
l.aA(A.aW())
l.bz(i)
l=A.I("Venomous _",0.2)
l.v(70)
l.Y(3,4,5)
l.J(800,1.8)
l.aA(A.aW())
l.ci(i,2)
i=A.I("Ghostly _",0.2)
i.E(45,85)
i.Y(4,3,6)
i.J(300,1.6)
i.bA(0.7)
i.aA(A.aW())
i.bz(h)
i=A.I("Spiritual _",0.15)
i.v(80)
i.Y(7,3,10)
i.J(400,2.1)
i.bA(0.7)
i.aA(A.aW())
i.ci(h,2)
A.y0()
A.aV()
$.bc="helm"
h=A.I("_ of Acumen",1)
h.E(35,55)
h.b5(1,4)
h.J(300,2)
h.ch.i(0,B.Z,A.Z())
h=A.I("_ of Wisdom",1)
h.E(45,75)
h.Y(2,4,3)
h.J(500,3)
h.ch.i(0,B.Z,A.Z())
h=A.I("_ of Sagacity",1)
h.v(75)
h.Y(4,4,5)
h.J(700,4)
h.ch.i(0,B.Z,A.Z())
h=A.I("_ of Genius",1)
h.v(85)
h.Y(6,4,7)
h.J(b3,5)
h.ch.i(0,B.Z,A.Z())
A.aV()
h=t.N
A.iu("The General's General Store",A.A(["Loaf of Bread",2,"Chunk of Meat",0.6,"Tallow Candle",1,"Wax Candle",0.7,"Oil Lamp",0.5,"Torch",0.3,"Lantern",0.1,"Soothing Balm",0.6,"Mending Salve",0.4,b2,0.2,"Club",0.1,"Staff",0.1,"Quarterstaff",0.05,"Whip",0.1,"Dagger",0.1],h,d))
A.iu("Dirk's Death Emporium",A.A(["Hammer",0.5,"Mattock",0.2,"War Hammer",0.1,"Morningstar",0.6,"Mace",0.3,"Chain Whip",0.2,"Flail",0.1,"Falchion",0.7,"Rapier",1,"Shortsword",0.6,"Scimitar",0.4,"Cutlass",0.2,"Spear",1,"Angon",0.4,"Lance",0.2,"Partisan",0.1,"Hatchet",1,"Axe",0.5,"Valaska",0.25,"Battleaxe",0.2,"Short Bow",1,"Longbow",0.3,"Crossbow",0.05],h,d))
A.iu("Skullduggery and Bamboozelry",A.A(["Dirk",1,"Dagger",0.3,"Stiletto",0.1,"Rondel",0.05,"Baselard",0.02],h,d))
A.iu("Garthag's Armoury",A.A(["Cloak",1,"Fur Cloak",1,"Cloth Shirt",1,"Leather Shirt",1,"Jerkin",1,"Leather Armor",1,"Padded Armor",1,"Studded Armor",1,"Mail Hauberk",1,"Scale Mail",1,"Robe",1,"Lined Robe",1,"Sandals",1,"Shoes",1,"Boots",1,"Plated Boots",1,"Greaves",1],h,d))
A.iu("Unguence the Alchemist",A.A(["Soothing Balm",1,"Mending Salve",1,b2,1,"Antidote",1,"Potion of Quickness",1,"Potion of Alacrity",1,"Bottled Wind",1,"Bottled Ice",1,"Bottled Fire",1,"Bottled Ocean",1,"Bottled Earth",1],h,d))
A.iu("The Droll Magery",A.A(["Scroll of Sidestepping",1,"Scroll of Phasing",1,"Scroll of Item Detection",1],h,d))
A.wJ()
A.wN()
A.wV()
A.is(new A.hR(A.a([new A.aH(30,A.a7("Skull",a6,a6)),new A.aH(30,A.a7(d1,a6,a6)),new A.aH(20,A.a7(f2,a6,a6)),new A.aH(20,A.a7(d6,a6,a6)),new A.aH(20,A.a7("food",a6,a6)),new A.aH(15,A.a7(e0,a6,a6))],t.f8)),a6,B.aR,2)
A.is(A.a7("food",a6,a6),1,a6,10)
A.is(A.a7("Rock",a6,a6),0.1,B.bg,5)
A.is(A.a7(d1,a6,a6),a6,a6,20)
A.is(A.a7("light",a6,a6),0.1,a6,3)
A.is(A.a7(a7,a6,a6),5,B.iN,2)
A.ul(B.bf,6)
A.ul(B.iI,1)
A.ul(B.iJ,3)
A.AL("bat bug humanoid natural",2,1)
A.AM("animal bat bug natural",1,0.2)
A.Bb(g7,100,1)
A.Bj(g7,100,1)
A.e7("bug",40,1)
A.e7("jelly",50,5)
A.e7("bat",40,10)
A.e7("rodent",50,1)
A.e7("snake",60,8)
A.e7("plant",40,15)
A.e7("eye",100,20)
A.e7("dragon",100,60)
A.ti(e7,16,2)
A.ti(d4,23,5)
A.ti(f0,30,10)
A.ti("orc",40,28)
d=$.tw()
d.c3(g8)
d.c3(g9)
d.c3("cave/glowing-moss")
d.c3(b4)
d=$.tA()
i=$.aX()
l=t.oC
d=A.A(["*",A.S(d,i,a6,a6)],h,l)
$.cq.b="glowing-moss"
$.cr=null
$.c7=d
A.u(a6,B.q,"    #\n    *")
A.u(a6,B.q,"    ##\n    #*")
A.u(a6,a6,"    ?.?\n    .*.\n    ?.?")
d=$.mK()
p=A.A(["!",A.S(d,i,a6,a6)],h,l)
$.cq.b=g9
$.cr=null
$.c7=p
A.u(a6,a6,"    ?.?\n    .!.\n    ?.?")
a1=A.A(["\u250c",A.S($.n0(),i,a6,a6),"\u2500",A.S($.n_(),i,a6,a6),"\u2510",A.S($.n1(),i,a6,a6),"-",A.S($.iz(),i,a6,a6),"\u2502",A.S($.mZ(),i,a6,a6),"\u2558",A.S($.mU(),i,a6,a6),"\u2550",A.S($.mT(),i,a6,a6),"\u255b",A.S($.mV(),i,a6,a6),"\u255e",A.S($.mX(),i,a6,a6),"\u2564",A.S($.mW(),i,a6,a6),"\u2561",A.S($.mY(),i,a6,a6),"i",A.S(d,i,a6,a6)],h,l)
$.cq.b=g8
$.cr=null
$.c7=a1
A.u(a6,B.a9,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.u(a6,B.a9,"    ?...\n    #\u2500\u2510.\n    #i\u2502.\n    #\u2564\u255b.\n    ?...")
A.u(a6,B.a9,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.u(a6,B.a9,"    ?...\n    #\u2500\u2510.\n    #i\u2502.\n    #i\u2502.\n    #\u2564\u255b.\n    ?...")
A.u(a6,B.a9,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #-\u2502.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.u(a6,B.a9,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #i\u2502.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.u(a6,B.a9,"    ?...\n    #\u2500\u2510.\n    #i\u2502.\n    #-\u2502.\n    #i\u2502.\n    #\u2564\u255b.\n    ?...")
A.u(a6,a6,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502-\u2502.\n    ?###?")
A.u(a6,a6,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502i\u2502.\n    ?###?")
A.u(a6,a6,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502--\u2502.\n    ?####?")
A.u(a6,a6,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502ii\u2502.\n    ?####?")
A.u(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502---\u2502.\n    ?#####?")
A.u(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    ?#####?")
A.u(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502i-i\u2502.\n    ?#####?")
A.u(a6,a6,"    ?###?\n    .\u2502-\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.u(a6,a6,"    ?###?\n    .\u2502i\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.u(a6,a6,"    ?####?\n    .\u2502--\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.u(a6,a6,"    ?####?\n    .\u2502ii\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.u(a6,a6,"    ?#####?\n    .\u2502---\u2502.\n    .\u255e\u2550\u2550\u2550\u2561.\n    .......")
A.u(a6,a6,"    ?#####?\n    .\u2502-i-\u2502.\n    .\u255e\u2550\u2550\u2550\u2561.\n    .......")
A.u(a6,a6,"    ?#####?\n    .\u2502i-i\u2502.\n    .\u255e\u2550\u2550\u2550\u2561.\n    .......")
$.cq.b=g8
$.cr=null
$.c7=a1
A.u(a6,a6,"    ?.....?\n    #\u2500\u2510.\u250c\u2500#\n    #\u2564\u255b.\u2558\u2564#\n    ?.....?")
A.u(a6,a6,"    ?.......?\n    #\u2500\u2500\u2510.\u250c\u2500\u2500#\n    #\u2550\u2564\u255b.\u2558\u2564\u2550#\n    ?.......?")
A.u(a6,a6,"    ?.........?\n    #\u2500\u2500\u2500\u2510.\u250c\u2500\u2500\u2500#\n    #\u2550\u2550\u2564\u255b.\u2558\u2564\u2550\u2550#\n    ?.........?")
A.u(a6,a6,"    ?##?\n    .\u2502\u2502.\n    .\u255e\u2561.\n    ....\n    .\u250c\u2510.\n    .\u2502\u2502.\n    ?##?")
A.u(a6,a6,"    ?##?\n    .\u2502\u2502.\n    .\u2502\u2502.\n    .\u255e\u2561.\n    ....\n    .\u250c\u2510.\n    .\u2502\u2502.\n    .\u2502\u2502.\n    ?##?")
A.u(a6,a6,"    ?##?\n    .\u2502\u2502.\n    .\u2502\u2502.\n    .\u2502\u2502.\n    .\u255e\u2561.\n    ....\n    .\u250c\u2510.\n    .\u2502\u2502.\n    .\u2502\u2502.\n    .\u2502\u2502.\n    ?##?")
$.cq.b=g8
$.cr=null
$.c7=a1
A.u(a6,a6,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502-\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.u(a6,a6,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502i\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.u(a6,a6,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502--\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.u(a6,a6,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502ii\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.u(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502---\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.u(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.u(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502i-i\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.u(a6,a6,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502----\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.u(a6,a6,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502i--i\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.u(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-----\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.u(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502--i--\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.u(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-i-i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.u(a6,a6,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502------\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
A.u(a6,a6,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-i--i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
A.u(a6,a6,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502-\u2502.\n    .\u2502-\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.u(a6,a6,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502i\u2502.\n    .\u2502i\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.u(a6,a6,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502--\u2502.\n    .\u2502--\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.u(a6,B.a9,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502i-\u2502.\n    .\u2502-i\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.u(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502---\u2502.\n    .\u2502---\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.u(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    .\u2502-i-\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.u(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    .\u2502i-i\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.u(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502i-i\u2502.\n    .\u2502-i-\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.u(a6,a6,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502----\u2502.\n    .\u2502----\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.u(a6,B.a9,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502i---\u2502.\n    .\u2502---i\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.u(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-----\u2502.\n    .\u2502-----\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.u(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502--i--\u2502.\n    .\u2502-i-i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.u(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502i---i\u2502.\n    .\u2502--i--\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.u(a6,a6,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502------\u2502.\n    .\u2502------\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
A.u(a6,a6,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-i--i-\u2502.\n    .\u2502-i--i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
d=A.A(["\u03c0",A.S($.mL(),i,a6,a6)],h,l)
$.cq.b=g8
$.cr=2
$.c7=d
A.u(a6,B.au,"    \u03c0.\n    .\u250c")
A.u(a6,B.au,"    \u03c0.\n    \u250c?")
A.u(a6,B.au,"    ..\n    \u03c0\u250c")
A.u(a6,B.a9,"    .\u255e\n    \u03c0.")
A.u(a6,B.q,"    ?\u2550?\n    .\u03c0.")
A.u(a6,a6,"    ?\u2564?\n    .\u03c0.")
A.u(a6,B.q,"    \u03c0\n    #")
A.u(a6,B.q,"    \u03c0\n    .\n    #")
d=A.A(["%",A.S($.mM(),i,a6,a6)],h,l)
$.cq.b=g8
$.cr=0.7
$.c7=d
A.u(a6,B.q,"    ##?\n    #%.\n    ?.?")
A.u(a6,B.q,"    ?.?\n    .%.\n    ?.?")
A.u(a6,B.q,"    ###?\n    #%%.\n    ?..?")
A.u(a6,B.q,"    ###?\n    #%%.\n    #%.?\n    ?.??")
A.u(a6,B.q,"    ?##?\n    .%%.\n    ?..?")
A.u(a6,B.q,"    ?###?\n    .%%%.\n    ?...?")
i=A.A(["&",A.S($.mN(),i,a6,a6)],h,l)
$.cq.b=g8
$.cr=0.5
$.c7=i
A.u(a6,B.q,"    ##?\n    #&.\n    ?.?")
A.u(a6,B.q,"    ?#?\n    .&.\n    ?.?")
$.cq.b=g8
$.cr=1
$.c7=null
A.u(a6,B.q,"    #...#\n    #\u2248\u2261\u2248#\n    #...#")
A.u(a6,B.q,"    #....#\n    #\u2248\u2248\u2261\u2248#\n    #....#")
A.u(a6,B.q,"    #.....#\n    #\u2248\u2248\u2261\u2248\u2248#\n    #.....#")
A.u(a6,B.q,"    #.....#\n    #\u2248\u2261\u2248\u2261\u2248#\n    #.....#")
A.u(a6,B.q,"    #......#\n    #......#\n    #\u2248\u2248\u2261\u2248\u2248\u2248#\n    #......#\n    #......#")
A.u(a6,B.q,"    #......#\n    #......#\n    #\u2248\u2261\u2248\u2248\u2261\u2248#\n    #......#\n    #......#")
A.u(a6,B.q,"    #.......#\n    #\u2248\u2248\u2248\u2261\u2248\u2248\u2248#\n    #.......#\n    #.......#")
A.u(a6,B.q,"    #.......#\n    #.......#\n    #\u2248\u2248\u2261\u2248\u2261\u2248\u2248#\n    #.......#\n    #.......#")
A.u(a6,B.q,"    #.......#\n    #.......#\n    #\u2248\u2261\u2248\u2248\u2248\u2261\u2248#\n    #.......#\n    #.......#")
A.u(a6,B.q,"    #........#\n    #........#\n    #\u2248\u2248\u2248\u2261\u2248\u2248\u2248\u2248#\n    #........#\n    #........#")
A.u(a6,B.q,"    #........#\n    #........#\n    #\u2248\u2248\u2261\u2248\u2248\u2261\u2248\u2248#\n    #........#\n    #........#")
A.u(a6,B.q,"    #.........#\n    #.........#\n    #\u2248\u2248\u2248\u2248\u2261\u2248\u2248\u2248\u2248#\n    #.........#\n    #.........#")
A.u(a6,B.q,"    #.........#\n    #.........#\n    #\u2248\u2248\u2261\u2248\u2248\u2248\u2261\u2248\u2248#\n    #.........#\n    #.........#")
A.u(a6,B.q,"    #.........#\n    #.........#\n    #\u2248\u2248\u2248\u2248\u2261\u2248\u2248\u2248\u2248#\n    #\u2248\u2248\u2248\u2248\u2261\u2248\u2248\u2248\u2248#\n    #.........#\n    #.........#")
A.u(a6,B.q,"    #.........#\n    #.........#\n    #\u2248\u2248\u2261\u2248\u2248\u2248\u2261\u2248\u2248#\n    #\u2248\u2248\u2261\u2248\u2248\u2248\u2261\u2248\u2248#\n    #.........#\n    #.........#")
i=$.uU()
l=A.A(["*",A.S(i,a6,$.iB(),a6),"o",A.S(a6,a6,i,a6)],h,l)
$.cq.b=b4
$.cr=null
$.c7=l
A.u(0.6,B.q,"    .*")
A.u(0.6,B.q,"    ..\n    .*")
A.u(a6,B.q,"    o*")
A.u(a6,B.q,"    \u2248*\n    o\u2248")
a2=new A.jD()
A.cW("6x8",6,8)
A.cW("6x9",6,9)
A.cW("8x8",8,a6)
A.cW("8x10",8,10)
A.cW("9x12",9,12)
A.cW("10x12",10,12)
A.cW("12x16",12,16)
A.cW("12x18",12,18)
A.cW("16x16",16,a6)
A.cW("16x20",16,20)
l=v.G
a3=A.rY(A.P(A.P(l.window).localStorage).getItem("font"))
h=$.fk.length
if(1>=h)return A.c($.fk,1)
$.bW.b=$.fk[1]
for(a4=0;a4<h;++a4){a5=$.fk[a4]
if(a5.a===a3){$.bW.b=a5
break}}s=A.bX(A.P(l.document).querySelector("#game"))
s.toString
s.append($.bW.u().b)
A.P(l.window).addEventListener("resize",A.wm(A.Be()))
s=$.bW.u().c
r=A.a([],t.jp)
if($.x.b!==$.x)A.a_(A.vD(""))
$.x.b=new A.f8(new A.k1(A.C(t.fC,t.fb),t.hl),r,s,t.iR)
s=$.x.u().a
s.a.i(0,new A.y(13,!1,!1),s.$ti.c.a(B.a7))
s=$.x.u().a
s.a.i(0,new A.y(27,!1,!1),s.$ti.c.a(B.H))
s=$.x.u().a
s.a.i(0,new A.y(192,!1,!1),s.$ti.c.a(B.H))
s=$.x.u().a
s.a.i(0,new A.y(70,!0,!1),s.$ti.c.a(B.bU))
s=$.x.u().a
s.a.i(0,new A.y(81,!1,!1),s.$ti.c.a(B.bY))
s=$.x.u().a
s.a.i(0,new A.y(67,!1,!1),s.$ti.c.a(B.bW))
s=$.x.u().a
s.a.i(0,new A.y(68,!1,!1),s.$ti.c.a(B.bM))
s=$.x.u().a
s.a.i(0,new A.y(85,!1,!1),s.$ti.c.a(B.c1))
s=$.x.u().a
s.a.i(0,new A.y(71,!1,!1),s.$ti.c.a(B.bX))
s=$.x.u().a
s.a.i(0,new A.y(88,!1,!1),s.$ti.c.a(B.c_))
s=$.x.u().a
s.a.i(0,new A.y(69,!1,!1),s.$ti.c.a(B.bO))
s=$.x.u().a
s.a.i(0,new A.y(84,!1,!1),s.$ti.c.a(B.c0))
s=$.x.u().a
s.a.i(0,new A.y(65,!1,!1),s.$ti.c.a(B.c2))
s=$.x.u().a
s.a.i(0,new A.y(83,!1,!1),s.$ti.c.a(B.ht))
s=$.x.u().a
s.a.i(0,new A.y(65,!0,!1),s.$ti.c.a(B.bV))
s=$.x.u().a
s.a.i(0,new A.y(83,!0,!1),s.$ti.c.a(B.bN))
s=$.x.u().a
s.a.i(0,new A.y(69,!0,!1),s.$ti.c.a(B.bZ))
s=$.x.u().a
s.a.i(0,new A.y(72,!1,!1),s.$ti.c.a(B.b7))
s=$.x.u().a
s.a.i(0,new A.y(72,!0,!1),s.$ti.c.a(B.bP))
s=$.x.u().a
s.a.i(0,new A.y(73,!1,!1),s.$ti.c.a(B.aA))
s=$.x.u().a
s.a.i(0,new A.y(79,!1,!1),s.$ti.c.a(B.a0))
s=$.x.u().a
s.a.i(0,new A.y(80,!1,!1),s.$ti.c.a(B.az))
s=$.x.u().a
s.a.i(0,new A.y(75,!1,!1),s.$ti.c.a(B.ag))
s=$.x.u().a
s.a.i(0,new A.y(186,!1,!1),s.$ti.c.a(B.af))
s=$.x.u().a
s.a.i(0,new A.y(188,!1,!1),s.$ti.c.a(B.aC))
s=$.x.u().a
s.a.i(0,new A.y(190,!1,!1),s.$ti.c.a(B.a1))
s=$.x.u().a
s.a.i(0,new A.y(191,!1,!1),s.$ti.c.a(B.aB))
s=$.x.u().a
s.a.i(0,new A.y(73,!0,!1),s.$ti.c.a(B.b9))
s=$.x.u().a
s.a.i(0,new A.y(79,!0,!1),s.$ti.c.a(B.ao))
s=$.x.u().a
s.a.i(0,new A.y(80,!0,!1),s.$ti.c.a(B.b8))
s=$.x.u().a
s.a.i(0,new A.y(75,!0,!1),s.$ti.c.a(B.aK))
s=$.x.u().a
s.a.i(0,new A.y(186,!0,!1),s.$ti.c.a(B.aJ))
s=$.x.u().a
s.a.i(0,new A.y(188,!0,!1),s.$ti.c.a(B.bb))
s=$.x.u().a
s.a.i(0,new A.y(190,!0,!1),s.$ti.c.a(B.ap))
s=$.x.u().a
s.a.i(0,new A.y(191,!0,!1),s.$ti.c.a(B.ba))
s=$.x.u().a
s.a.i(0,new A.y(73,!1,!0),s.$ti.c.a(B.bR))
s=$.x.u().a
s.a.i(0,new A.y(79,!1,!0),s.$ti.c.a(B.b4))
s=$.x.u().a
s.a.i(0,new A.y(80,!1,!0),s.$ti.c.a(B.bQ))
s=$.x.u().a
s.a.i(0,new A.y(75,!1,!0),s.$ti.c.a(B.b6))
s=$.x.u().a
s.a.i(0,new A.y(186,!1,!0),s.$ti.c.a(B.b3))
s=$.x.u().a
s.a.i(0,new A.y(188,!1,!0),s.$ti.c.a(B.bT))
s=$.x.u().a
s.a.i(0,new A.y(190,!1,!0),s.$ti.c.a(B.b5))
s=$.x.u().a
s.a.i(0,new A.y(191,!1,!0),s.$ti.c.a(B.bS))
s=$.x.u().a
s.a.i(0,new A.y(76,!1,!1),s.$ti.c.a(B.a7))
s=$.x.u().a
s.a.i(0,new A.y(76,!0,!1),s.$ti.c.a(B.aI))
s=$.x.u().a
s.a.i(0,new A.y(76,!1,!0),s.$ti.c.a(B.b2))
s=$.x.u().a
s.a.i(0,new A.y(38,!1,!1),s.$ti.c.a(B.a0))
s=$.x.u().a
s.a.i(0,new A.y(37,!1,!1),s.$ti.c.a(B.ag))
s=$.x.u().a
s.a.i(0,new A.y(39,!1,!1),s.$ti.c.a(B.af))
s=$.x.u().a
s.a.i(0,new A.y(40,!1,!1),s.$ti.c.a(B.a1))
s=$.x.u().a
s.a.i(0,new A.y(38,!0,!1),s.$ti.c.a(B.ao))
s=$.x.u().a
s.a.i(0,new A.y(37,!0,!1),s.$ti.c.a(B.aK))
s=$.x.u().a
s.a.i(0,new A.y(39,!0,!1),s.$ti.c.a(B.aJ))
s=$.x.u().a
s.a.i(0,new A.y(40,!0,!1),s.$ti.c.a(B.ap))
s=$.x.u().a
s.a.i(0,new A.y(38,!1,!0),s.$ti.c.a(B.b4))
s=$.x.u().a
s.a.i(0,new A.y(37,!1,!0),s.$ti.c.a(B.b6))
s=$.x.u().a
s.a.i(0,new A.y(39,!1,!0),s.$ti.c.a(B.b3))
s=$.x.u().a
s.a.i(0,new A.y(40,!1,!0),s.$ti.c.a(B.b5))
s=$.x.u().a
s.a.i(0,new A.y(103,!1,!1),s.$ti.c.a(B.aA))
s=$.x.u().a
s.a.i(0,new A.y(104,!1,!1),s.$ti.c.a(B.a0))
s=$.x.u().a
s.a.i(0,new A.y(105,!1,!1),s.$ti.c.a(B.az))
s=$.x.u().a
s.a.i(0,new A.y(100,!1,!1),s.$ti.c.a(B.ag))
s=$.x.u().a
s.a.i(0,new A.y(102,!1,!1),s.$ti.c.a(B.af))
s=$.x.u().a
s.a.i(0,new A.y(97,!1,!1),s.$ti.c.a(B.aC))
s=$.x.u().a
s.a.i(0,new A.y(98,!1,!1),s.$ti.c.a(B.a1))
s=$.x.u().a
s.a.i(0,new A.y(99,!1,!1),s.$ti.c.a(B.aB))
s=$.x.u().a
s.a.i(0,new A.y(103,!0,!1),s.$ti.c.a(B.b9))
s=$.x.u().a
s.a.i(0,new A.y(104,!0,!1),s.$ti.c.a(B.ao))
s=$.x.u().a
s.a.i(0,new A.y(105,!0,!1),s.$ti.c.a(B.b8))
s=$.x.u().a
s.a.i(0,new A.y(100,!0,!1),s.$ti.c.a(B.aK))
s=$.x.u().a
s.a.i(0,new A.y(102,!0,!1),s.$ti.c.a(B.aJ))
s=$.x.u().a
s.a.i(0,new A.y(97,!0,!1),s.$ti.c.a(B.bb))
s=$.x.u().a
s.a.i(0,new A.y(98,!0,!1),s.$ti.c.a(B.ap))
s=$.x.u().a
s.a.i(0,new A.y(99,!0,!1),s.$ti.c.a(B.ba))
s=$.x.u().a
s.a.i(0,new A.y(101,!1,!1),s.$ti.c.a(B.a7))
s=$.x.u().a
s.a.i(0,new A.y(1001,!1,!1),s.$ti.c.a(B.a7))
s=$.x.u().a
s.a.i(0,new A.y(101,!0,!1),s.$ti.c.a(B.aI))
s=$.x.u().a
s.a.i(0,new A.y(1001,!0,!1),s.$ti.c.a(B.aI))
s=$.x.u().a
s.a.i(0,new A.y(101,!1,!0),s.$ti.c.a(B.b2))
s=$.x.u().a
s.a.i(0,new A.y(87,!0,!0),s.$ti.c.a(B.c3))
s=$.x.u()
r=new A.qI(a2,A.a([],t.di))
r.mN()
s.a4(new A.k8(a2,r))
$.x.u().soL(!0)
$.x.u().spj(!0)
l=A.bX(A.P(l.document).body)
l.toString
r=t.gX
A.dW(l,"keydown",r.h("~(1)?").a(new A.tl()),!1,r.c)},
cW(a,b,c){var s,r,q,p,o,n
if(c==null)c=b
s=A.vp()
r=t.gX
q=r.h("~(1)?")
r=r.c
A.dW(s,"dblclick",q.a(new A.rV()),!1,r)
p=A.ws(s,b,c)
B.a.j($.fk,new A.l8(a,s,p,b,c))
A.dW(s,"click",q.a(new A.rW(p)),!1,r)
o=v.G
n=A.P(A.P(o.document).createElement("button"))
n.innerHTML=a
A.dW(n,"click",q.a(new A.rX(a)),!1,r)
A.P(A.bX(A.P(o.document).querySelector(".button-bar")).appendChild(n))},
ws(a,b,c){var s,r,q,p,o,n,m,l=v.G,k=B.c.cc(A.w(A.P(l.window).innerWidth)-20,b),j=B.c.cc(A.w(A.P(l.window).innerHeight)-30,c)
k=Math.max(k,80)
j=Math.max(j,40)
s=B.e.L(A.by(A.P(l.window).devicePixelRatio))
r=b*k
q=c*j
a.width=r*s
a.height=q*s
A.P(a.style).width=""+r+"px"
A.P(a.style).height=""+q+"px"
p="font_"+b
if(b!==c)p+="_"+c
s=B.e.L(A.by(A.P(l.window).devicePixelRatio))
o=k*j
n=A.an(o,B.b1,!1,t.v)
o=A.an(o,B.b1,!1,t.n3)
m=A.P(A.P(l.document).createElement("img"))
m.src=p+".png"
return A.z4(new A.nH(new A.a8(n,new A.Y(new A.d(0,0),new A.d(k,j)),t.bG),new A.a8(o,new A.Y(new A.d(0,0),new A.d(k,j)),t.cY)),b,c,a,m,s)},
wv(){var s=A.ws($.bW.u().b,$.bW.u().d,$.bW.u().e)
$.bW.u().c=s
$.x.u().l5(s)},
zX(){var s,r,q,p=null,o=A.bX(A.P(v.G.document).querySelector("#game"))
o.toString
s=["requestFullscreen","mozRequestFullScreen","webkitRequestFullscreen","msRequestFullscreen"]
for(r=0;r<4;++r){q=s[r]
if(q in o){A.yA(o,q,p,p,p,p)
return}}},
uh(){A.w(A.P(v.G.window).requestAnimationFrame(A.wm(new A.t0())))},
l8:function l8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tl:function tl(){},
rV:function rV(){},
rW:function rW(a){this.a=a},
rX:function rX(a){this.a=a},
t0:function t0(){},
t1:function t1(){},
AH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
switch(b.a){case B.br:s=b.d
r=b.b
if(s===$.ax()){s=$.uY().p(0,b.c)
s.toString
B.a.j(a,new A.cA(r,A.am(s,B.F,f),2))}else{s=$.uZ().p(0,s)
s.toString
B.a.j(a,new A.fM(r,s))}break
case B.bs:s=$.uZ().p(0,b.d)
s.toString
B.a.j(a,new A.fM(b.b,s))
break
case B.bH:B.a.j(a,new A.jU(b.b,b.f.a.b))
break
case B.bx:B.a.j(a,new A.j7(b.e.y,A.am("*",A.e3(b.d),f),B.e.aR(Math.sqrt(b.r/5))))
break
case B.bu:for(s=b.e,q=0;q<10;++q){r=s.y.gm()
p=s.y.gn()
o=$.m()
o=o.a
n=o.a1(628)/100
m=(o.a1(10)+30)/100
l=Math.cos(n)
k=Math.sin(n)
B.a.j(a,new A.kv(r,p,l*m,k*m,o.a1(8)+7,B.m))}break
case B.bw:s=b.e
B.a.j(a,new A.jJ(s.y.gm(),s.y.gn()))
break
case B.bt:B.a.j(a,new A.fI(b.b))
break
case B.bC:B.a.j(a,new A.fI(b.e.y))
break
case B.bA:s=$.m().bq(10,20)
r=new A.k9(s,b.b)
r.c=s
B.a.j(a,r)
break
case B.bG:s=b.e
r=b.b
j=B.c.P(s.y.S(0,r).gb3(),4,12)
for(q=0;q<j;++q){p=s.y
i=r.gm()
h=r.gn()
o=$.m()
o=o.a
n=o.a1(628)/100
m=(o.a1(70)+10)/100
B.a.j(a,new A.l7(i,h,Math.cos(n)*m,Math.sin(n)*m,p))}break
case B.b0:B.a.j(a,new A.cA(b.e.y,A.am("*",B.t,f),4))
break
case B.bD:B.a.j(a,new A.cA(b.e.y,A.am("*",B.t,f),4))
break
case B.by:B.a.j(a,new A.jM(b.b))
break
case B.bq:s=b.e
s.toString
B.a.j(a,new A.fB(s,A.am("!",B.t,f),1))
break
case B.b_:s=b.e
s.toString
B.a.j(a,new A.fB(s,A.am("!",B.h,f),3))
break
case B.bI:break
case B.bz:B.a.j(a,new A.cA(b.b,A.am("*",B.B,f),4))
break
case B.bE:case B.bF:s=$.uY().p(0,b.c)
s.toString
g=b.f
B.a.j(a,new A.cA(b.b,A.am(s,g!=null?g.a.b.b:B.t,f),4))
break
case B.bv:s=b.b
r=b.f
r.toString
B.a.j(a,new A.ld(s.gm(),s.gn(),r.a.b))
break
case B.bB:B.a.j(a,new A.cA(b.b,A.am("*",B.F,f),4))
break}},
wW(a){return v.mangledGlobalNames[a]},
to(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
yA(a,b,c,d,e,f){var s=a[b]()
return s},
wm(a){var s
if(typeof a=="function")throw A.n(A.aC("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.zM,a)
s[$.tv()]=a
return s},
wn(a){var s
if(typeof a=="function")throw A.n(A.aC("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.zN,a)
s[$.tv()]=a
return s},
zM(a){return t.gY.a(a).$0()},
zN(a,b,c){t.gY.a(a)
if(A.w(c)>=1)return a.$1(b)
return a.$0()},
v5(a){var s,r,q
for(s=[$.dp(),$.dq()],r=0;r<2;++r){q=s[r].c9(a)
if(q!=null)return q}throw A.n(A.aC("Unknown affix '"+a+"'.",null))},
y0(){var s,r,q,p,o,n,m,l,k,j,i,h="Master's _",g=[B.iu,B.is,B.ir,B.ic,B.ix,B.im]
for(s=t.Q,r=t.h,q=t.X,p=t.M,o=0;o<6;++o){n=g[o]
m=n.b
A.aV()
$.bc=n.a
A.aV()
l=B.j.dO("Fine _"," _")?$.dp():$.dq()
n=A.C(p,s)
k=$.im=new A.cd("Fine _",l,1,A.C(r,s),A.C(q,s),n)
k.c=1
k.d=40
k.p6(1)
k.J(1000,1.8)
s.a(A.Z())
k=$.uI()
j=k.p(0,m)
if(j==null)A.a_(A.aC("Unknown skill '"+m+"'.",null))
n.i(0,j,A.Z())
A.aV()
l=B.j.dO("Deft _"," _")?$.dp():$.dq()
n=A.C(p,s)
i=$.im=new A.cd("Deft _",l,1,A.C(r,s),A.C(q,s),n)
i.c=20
i.d=60
i.p7(2,3)
i.J(2000,2.4)
j=k.p(0,m)
if(j==null)A.a_(A.aC("Unknown skill '"+m+"'.",null))
n.i(0,j,A.Z())
A.aV()
l=B.j.dO(h," _")?$.dp():$.dq()
n=A.C(p,s)
i=$.im=new A.cd(h,l,1,A.C(r,s),A.C(q,s),n)
i.c=40
i.d=100
i.Y(3,6,4)
i.J(4000,3.4)
j=k.p(0,m)
if(j==null)A.a_(A.aC("Unknown skill '"+m+"'.",null))
n.i(0,j,A.Z())}},
wJ(){var s=t.N,r=t.S
A.bd("Uncut Amethyst",A.A(["Amethyst Shard",4],s,r))
A.bd("Faceted Amethyst",A.A(["Uncut Amethyst",4],s,r))
A.bd("Uncut Sapphire",A.A(["Sapphire Shard",4],s,r))
A.bd("Faceted Sapphire",A.A(["Uncut Sapphire",4],s,r))
A.bd("Uncut Emerald",A.A(["Emerald Shard",4],s,r))
A.bd("Faceted Emerald",A.A(["Uncut Emerald",4],s,r))
A.bd("Uncut Ruby",A.A(["Ruby Shard",4],s,r))
A.bd("Faceted Ruby",A.A(["Uncut Ruby",4],s,r))
A.bd("Uncut Diamond",A.A(["Diamond Shard",4],s,r))
A.bd("Faceted Diamond",A.A(["Uncut Diamond",4],s,r))},
wN(){var s="Healing Poultice",r="Potion of Amelioration",q=t.N,p=t.S
A.bd("Mending Salve",A.A(["Soothing Balm",3],q,p))
A.bd(s,A.A(["Mending Salve",3],q,p))
A.bd(r,A.A([s,3],q,p))
A.bd("Potion of Rejuvenation",A.A([r,4],q,p))},
wV(){var s="Scroll of Sidestepping",r="Scroll of Phasing",q="Scroll of Teleportation",p=t.N,o=t.S
A.bd(s,A.A(["Insect Wing",1,"Feather",1],p,o))
A.bd(r,A.A([s,2],p,o))
A.bd(q,A.A([r,2],p,o))
A.bd("Scroll of Disappearing",A.A([q,2],p,o))},
bd(a,b){var s,r,q,p,o,n=A.C(t.q,t.S)
for(s=new A.bj(b,A.z(b).h("bj<1,2>")).gN(0);s.q();){r=s.d
q=r.a
p=r.b
o=$.bh().b.p(0,q)
if(o==null)A.a_(A.aC('Unknown resource "'+q+'".',null))
n.i(0,o.a,p)}B.a.j($.hq,new A.kM(n,A.a7(a,1,null),a))},
AR(){var s,r,q,p,o,n,m,l,k,j,i,h="mythical/beast/dragon",g=null,f="{2} [are|is] deflected by its scales.",e="treasure",d="equipment",c=A.ai("d",h,g,g,g,g,g)
c.at=12
c.ax=8
B.a.j(c.w,new A.az(10,f))
c.d=B.ai
c=$.ax()
s=[new A.a2(["forest",c,B.p,B.A]),new A.a2(["brown",$.ds(),B.F,B.k]),new A.a2(["blue",$.d_(),B.G,B.E]),new A.a2(["white",$.c9(),B.o,B.t]),new A.a2(["purple",$.bz(),B.N,B.V]),new A.a2(["green",$.dr(),B.z,B.ac]),new A.a2(["silver",$.dt(),B.J,B.G]),new A.a2(["red",$.b4(),B.a4,B.m]),new A.a2(["gold",$.cZ(),B.B,B.h]),new A.a2(["black",$.cY(),B.f,B.l]),new A.a2(["ethereal",$.du(),B.a_,B.C])]
for(r=0,q=0;q<11;++q){p=s[q].a
o=p[0]
n=p[1]
m=p[2]
p=B.e.O(A.v(r,0,10,38,53))
l=B.e.O(A.v(r,0,10,150,350))
A.fp()
k=$.ah.b
if(k===$.ah)A.a_(A.dH(""))
k=k.ay
if(0>=k.length)return A.c(k,0)
j=A.nk("juvenile "+o+" dragon",p,g,new A.W(k.charCodeAt(0),m,B.y),l)
j.e=0
j.r=null
$.c6=j
p=B.e.O(A.v(r,0,10,20,40))
l=j.db
B.a.j(l,new A.b5(g,"bite[s]",p,0,c))
p=B.e.O(A.v(r,0,10,15,25))
B.a.j(l,new A.b5(g,"claw[s]",p,0,c))
p=B.e.O(A.v(r,0,10,2,10))
l=j.CW
i=new A.aH(100,A.a7(e,l,g))
if(p>1)i=new A.bx(p,i)
p=j.dy
B.a.j(p,i)
k=A.a7("magic",l,g)
B.a.j(p,new A.aH(100,k))
l=A.a7(d,l,g)
B.a.j(p,new A.aH(100,l))
if(n!==c){p=B.e.O(A.v(r,0,10,40,100))
l=$.fw()
k=l.p(0,n)[0]
l=l.p(0,n)[1]
k=A.aO(k,B.x,B.U).a6(1)
B.a.j(j.dx,new A.d7(new A.b5(new A.aG(k),l,p,5,n),11))}++r}p=A.ai("d",h,g,g,g,g,g)
p.at=16
p.ax=10
B.a.j(p.w,new A.az(20,f))
p.d=B.ai
for(r=0,q=0;q<11;++q){p=s[q].a
o=p[0]
n=p[1]
m=p[3]
p=B.e.O(A.v(r,0,10,48,62))
l=B.e.O(A.v(r,0,10,350,850))
A.fp()
k=$.ah.b
if(k===$.ah)A.a_(A.dH(""))
k=k.ay
if(0>=k.length)return A.c(k,0)
j=A.nk(o+" dragon",p,g,new A.W(k.charCodeAt(0),m,B.y),l)
j.e=0
j.r=null
$.c6=j
p=B.e.O(A.v(r,0,10,30,50))
l=j.db
B.a.j(l,new A.b5(g,"bite[s]",p,0,c))
p=B.e.O(A.v(r,0,10,25,35))
B.a.j(l,new A.b5(g,"claw[s]",p,0,c))
p=B.e.O(A.v(r,0,10,5,15))
l=j.CW
i=new A.aH(100,A.a7(e,l,g))
if(p>1)i=new A.bx(p,i)
p=j.dy
B.a.j(p,i)
k=B.e.O(A.v(r,0,10,2,5))
i=new A.aH(100,A.a7("magic",l,g))
if(k>1)i=new A.bx(k,i)
B.a.j(p,i)
k=B.e.O(A.v(r,0,10,2,5))
i=new A.aH(100,A.a7(d,l,g))
if(k>1)i=new A.bx(k,i)
B.a.j(p,i)
if(n!==c){p=B.e.O(A.v(r,0,10,70,150))
l=$.fw()
k=l.p(0,n)[0]
l=l.p(0,n)[1]
k=A.aO(k,B.x,B.U).a6(1)
B.a.j(j.dx,new A.d7(new A.b5(new A.aG(k),l,p,10,n),8))}++r}},
B_(){var s,r,q,p,o,n,m,l,k,j="mythical/beast/dragon",i=null,h="{2} [are|is] deflected by its scales.",g="treasure",f="equipment",e=$.ax(),d=[new A.a2(["forest",e,B.p,B.A]),new A.a2(["brown",$.ds(),B.F,B.k]),new A.a2(["blue",$.d_(),B.G,B.E]),new A.a2(["white",$.c9(),B.o,B.t]),new A.a2(["purple",$.bz(),B.N,B.V]),new A.a2(["green",$.dr(),B.z,B.ac]),new A.a2(["silver",$.dt(),B.J,B.G]),new A.a2(["red",$.b4(),B.a4,B.m]),new A.a2(["gold",$.cZ(),B.B,B.h]),new A.a2(["black",$.cY(),B.f,B.l]),new A.a2(["ethereal",$.du(),B.a_,B.C])],c=A.ai("D",j,i,i,i,i,i)
c.at=12
c.ax=8
B.a.j(c.w,new A.az(10,h))
c.d=B.ai
for(s=0,r=0;r<11;++r){c=d[r].a
q=c[0]
p=c[1]
o=c[2]
c=B.e.O(A.v(s,0,10,65,85))
n=B.e.O(A.v(s,0,10,800,1500))
A.fp()
m=$.ah.b
if(m===$.ah)A.a_(A.dH(""))
m=m.ay
if(0>=m.length)return A.c(m,0)
l=A.nk("elder "+q+" dragon",c,i,new A.W(m.charCodeAt(0),o,B.y),n)
l.e=0
l.r=null
$.c6=l
c=B.e.O(A.v(s,0,10,40,80))
n=l.db
B.a.j(n,new A.b5(i,"bite[s]",c,0,e))
c=B.e.O(A.v(s,0,10,35,75))
B.a.j(n,new A.b5(i,"claw[s]",c,0,e))
c=B.e.O(A.v(s,0,10,6,16))
n=l.CW
k=new A.aH(100,A.a7(g,n,i))
if(c>1)k=new A.bx(c,k)
c=l.dy
B.a.j(c,k)
m=B.e.O(A.v(s,0,10,3,6))
k=new A.aH(100,A.a7("magic",n,i))
if(m>1)k=new A.bx(m,k)
B.a.j(c,k)
m=B.e.O(A.v(s,0,10,3,6))
k=new A.aH(100,A.a7(f,n,i))
if(m>1)k=new A.bx(m,k)
B.a.j(c,k)
if(p!==e){c=B.e.O(A.v(s,0,10,40,100))
n=$.fw()
m=n.p(0,p)[0]
n=n.p(0,p)[1]
m=A.aO(m,B.x,B.U).a6(1)
B.a.j(l.dx,new A.d7(new A.b5(new A.aG(m),n,c,5,p),11))}++s}c=A.ai("D",j,i,i,i,i,i)
c.at=16
c.ax=10
B.a.j(c.w,new A.az(20,h))
c.d=B.ai
for(s=0,r=0;r<11;++r){c=d[r].a
q=c[0]
p=c[1]
o=c[3]
c=B.e.O(A.v(s,0,10,80,99))
n=B.e.O(A.v(s,0,10,1400,2000))
A.fp()
m=$.ah.b
if(m===$.ah)A.a_(A.dH(""))
m=m.ay
if(0>=m.length)return A.c(m,0)
l=A.nk("ancient "+q+" dragon",c,i,new A.W(m.charCodeAt(0),o,B.y),n)
l.e=0
l.r=null
$.c6=l
c=B.e.O(A.v(s,0,10,60,100))
n=l.db
B.a.j(n,new A.b5(i,"bite[s]",c,0,e))
c=B.e.O(A.v(s,0,10,50,80))
B.a.j(n,new A.b5(i,"claw[s]",c,0,e))
c=B.e.O(A.v(s,0,10,7,20))
n=l.CW
k=new A.aH(100,A.a7(g,n,i))
if(c>1)k=new A.bx(c,k)
c=l.dy
B.a.j(c,k)
m=B.e.O(A.v(s,0,10,4,7))
k=new A.aH(100,A.a7("magic",n,i))
if(m>1)k=new A.bx(m,k)
B.a.j(c,k)
m=B.e.O(A.v(s,0,10,4,7))
k=new A.aH(100,A.a7(f,n,i))
if(m>1)k=new A.bx(m,k)
B.a.j(c,k)
if(p!==e){c=B.e.O(A.v(s,0,10,200,400))
n=$.fw()
m=n.p(0,p)[0]
n=n.p(0,p)[1]
m=A.aO(m,B.x,B.U).a6(1)
B.a.j(l.dx,new A.d7(new A.b5(new A.aG(m),n,c,10,p),8))}++s}},
nj(a){var s,r=null
if(a>=64){a=B.c.A(a,8)*8
s=A.cw(B.c.A(a,8),2,r)
s=A.cw(B.c.A(a,4),3,s)
s=A.cw(a,6,A.cw(B.c.A(a,2),5,s))}else if(a>=32){a=B.c.A(a,4)*4
s=A.cw(B.c.A(a,4),2,r)
s=A.cw(a,5,A.cw(B.c.A(a,2),3,s))}else if(a>=16){a=B.c.A(a,2)*2
s=A.cw(a,3,A.cw(B.c.A(a,2),2,r))}else s=A.cw(a,3,r)
return A.y3(s)},
cw(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=t.y,b=new A.Y(new A.d(0,0),new A.d(a4,a4)),a=a4*a4,a0=A.an(a,!1,!1,c),a1=t.b,a2=new A.a8(a0,b,a1),a3=new A.a8(A.an(a,!1,!1,c),new A.Y(new A.d(0,0),new A.d(a4,a4)),a1)
if(a6!=null)for(c=A.ab(b.bN(-1)),b=a6.a,a=a6.b.b.a,a1=b.length;c.q();){s=c.b
r=c.c
q=B.c.A(s,2)
p=B.c.A(r,2)
a6.l(q,p)
q=p*a+q
if(!(q>=0&&q<a1))return A.c(b,q)
o=b[q]?0.3:0.7
q=$.m().aO(1)
a2.l(s,r)
B.a.i(a0,r*a4+s,q>o)}else{n=b.ghf()
m=Math.sqrt(new A.d(b.gbO(),b.gbT()).S(0,b.ghf()).gaF())
for(c=A.ab(b.bN(-1));c.q();){b=c.b
a=c.c
a1=new A.d(b,a).S(0,n)
s=a1.a
a1=a1.b
a1=Math.sqrt(s*s+a1*a1)
s=$.m().aO(1)
a2.l(b,a)
B.a.i(a0,a*a4+b,s>a1/m)}}for(l=0;l<a5;++l,k=a3,a3=a2,a2=k)for(c=a2.b,b=c.bN(-1),a=b.a,a=new A.cK(b,a.a-1,a.b),b=a3.$ti.c,a0=a3.a,a1=a3.b.b.a,s=a2.a,c=c.b.a,r=s.length;a.q();){q=a.b
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
y3(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.b,g=h.b,f=g.a,e=g.b
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
n=new A.Y(new A.d(0,0),new A.d(h,o))
o=A.an(h*o,!1,!1,t.y)
l=new A.a8(o,n,t.b)
for(n=A.ab(n);n.q();){m=n.b
k=n.c
j=m+r
i=k+e
a.l(j,i)
j=i*f+j
if(!(j>=0&&j<s))return A.c(g,j)
j=A.e_(g[j])
l.l(m,k)
B.a.i(o,k*h+m,j)}return l},
e3(a){var s=A.A([$.ax(),B.o,$.eb(),B.J,$.ds(),B.k,$.b4(),B.m,$.d_(),B.C,$.dr(),B.z,$.c9(),B.G,$.dt(),B.N,$.bz(),B.p,$.cY(),B.l,$.cZ(),B.B,$.du(),B.V],t.h,t.aZ).p(0,a)
s.toString
return s},
us(a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null
A.bi(a9,a8,b7+2,b0.gk8().a,b2,c3,b8,c2)
s=b3?"ABCDEFGHIJKLMNOPQRSTUVWXYZ":"abcdefghijklmnopqrstuvwxyz"
r=b8+c3
q=r-1
if(c1)for(p=b0.gN(b0),o=q;p.q();){n=b4.$1(p.gH())
if(n!=null)o=Math.min(o,r-A.Q(n,!1,a8).length-3)}for(p=J.ap(b0.gef()),m=b8+1,l=s.length,k=b8-34,j=r+34,i=c3-34,h=c2+b7,g=h+3,f=0,e=0;p.q();){d=p.gH()
c=b8+(c0?3:1)
b=c2+f+1
if(f>=b7){r=b0.gI(b0)
p=b2?B.h:B.i
a9.k(c+1,h+1," "+(r-b7)+" more... ",p)
break}if(d==null){d=!1
if(f>0){a=b0.gee()
if(!(f<a.length))return A.c(a,f)
if(a[f]==="hand"){a=b0.gee()
a0=f-1
if(!(a0<a.length))return A.c(a,a0)
if(a[a0]==="hand"){d=J.tH(b0.gef(),a0)
d=d==null?a8:d.a.f
d=d===!0}}}if(d)a9.k(c,b,"\u2191 (two-handed)",B.i)
else{d=b0.gee()
if(!(f<d.length))return A.c(d,f)
a9.k(c+2,b,"("+d[f]+")",B.u)}++e;++f
continue}a1=!b2||b1.$1(d)
if(c0&&b2&&b1.$1(d)){a9.k(m,b," )",B.l)
if(!(e<l))return A.c(s,e)
a9.k(m,b,s[e],B.h)}++e
if(a1)a9.am(c,b,d.a.b)
if(c1&&b4.$1(d)!=null){a=b4.$1(d)
a.toString
n=A.Q(a,!1,a8)
a2=q-n.length-1
a9.k(a2,b,"$",a1?B.k:B.i)
a=a1?B.h:B.i
a9.k(a2+1,b,n,a)
a3=a2}else a3=q
a4=d.gao().a
a=c+2
a5=a3-a
if(a4.length>a5)a4=B.j.aJ(a4,0,a5)
A:{a0=d===b5
if(a0){a6=B.h
break A}if(b2&&b1.$1(d)){a6=B.D
break A}if(b2){a6=B.i
break A}a6=B.d
break A}a9.k(a,b,a4,a6)
if(a0){a7=new A.jV(d,A.vv(d,34))
a7.lk(b9,d,!1)
if(b6)if(j>a9.gaQ()){a9.k(q,b,"\u25bc",B.h)
a7.hl(b8+B.c.A(i,2),g,a9)}else{a9.k(q,b,"\u25ba",B.h)
a7.hl(r,b,a9)}else{a9.k(b8,b,"\u25c4",B.h)
a7.hl(k,b,a9)}}++f}},
zR(a){return!1},
zS(a){return a.gbf()},
vp(){return A.P(A.P(v.G.document).createElement("canvas"))}},B={}
var w=[A,J,B]
var $={}
A.tR.prototype={}
J.jS.prototype={
Z(a,b){return a===b},
ga0(a){return A.hm(a)},
t(a){return"Instance of '"+A.kD(a)+"'"},
gaG(a){return A.e2(A.ue(this))}}
J.fY.prototype={
t(a){return String(a)},
ga0(a){return a?519018:218159},
gaG(a){return A.e2(t.y)},
$iaf:1,
$iB:1}
J.h_.prototype={
Z(a,b){return null==b},
t(a){return"null"},
ga0(a){return 0},
$iaf:1}
J.h2.prototype={$iaE:1}
J.dd.prototype={
ga0(a){return 0},
t(a){return String(a)}}
J.kz.prototype={}
J.dk.prototype={}
J.db.prototype={
t(a){var s=a[$.x_()]
if(s==null)s=a[$.tv()]
if(s==null)return this.le(a)
return"JavaScript function for "+J.ec(s)},
$idE:1}
J.h1.prototype={
ga0(a){return 0},
t(a){return String(a)}}
J.h3.prototype={
ga0(a){return 0},
t(a){return String(a)}}
J.r.prototype={
j(a,b){A.M(a).c.a(b)
a.$flags&1&&A.bp(a,29)
a.push(b)},
d9(a,b){a.$flags&1&&A.bp(a,"removeAt",1)
if(b<0||b>=a.length)throw A.n(A.ho(b,null))
return a.splice(b,1)[0]},
kE(a){a.$flags&1&&A.bp(a,"removeLast",1)
if(a.length===0)throw A.n(A.mH(a,-1))
return a.pop()},
ac(a,b){var s
a.$flags&1&&A.bp(a,"remove",1)
for(s=0;s<a.length;++s)if(J.ay(a[s],b)){a.splice(s,1)
return!0}return!1},
hJ(a,b){A.M(a).h("B(1)").a(b)
a.$flags&1&&A.bp(a,16)
this.nb(a,b,!0)},
nb(a,b,c){var s,r,q,p,o
A.M(a).h("B(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!b.$1(p))s.push(p)
if(a.length!==r)throw A.n(A.b_(a))}o=s.length
if(o===r)return
this.sI(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
kS(a,b){var s=A.M(a)
return new A.aj(a,s.h("B(1)").a(b),s.h("aj<1>"))},
U(a,b){var s
A.M(a).h("k<1>").a(b)
a.$flags&1&&A.bp(a,"addAll",2)
if(Array.isArray(b)){this.lr(a,b)
return}for(s=J.ap(b);s.q();)a.push(s.gH())},
lr(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.n(A.b_(a))
for(r=0;r<s;++r)a.push(b[r])},
aS(a){a.$flags&1&&A.bp(a,"clear","clear")
a.length=0},
ae(a,b){var s,r
A.M(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.n(A.b_(a))}},
aP(a,b){var s,r=A.an(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.i(r,s,A.J(a[s]))
return r.join(b)},
aE(a,b,c,d){var s,r,q
d.a(b)
A.M(a).al(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.n(A.b_(a))}return r},
hs(a,b,c){var s,r,q
A.M(a).h("B(1)").a(b)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.n(A.b_(a))}throw A.n(A.cE())},
eW(a,b){return this.hs(a,b,null)},
aU(a,b){if(!(b>=0&&b<a.length))return A.c(a,b)
return a[b]},
fs(a,b,c){var s=a.length
if(b>s)throw A.n(A.cJ(b,0,s,"start",null))
if(c==null)c=s
else if(c<b||c>s)throw A.n(A.cJ(c,b,s,"end",null))
if(b===c)return A.a([],A.M(a))
return A.a(a.slice(b,c),A.M(a))},
lc(a,b){return this.fs(a,b,null)},
gaB(a){if(a.length>0)return a[0]
throw A.n(A.cE())},
gcB(a){var s=a.length
if(s>0)return a[s-1]
throw A.n(A.cE())},
gl7(a){var s=a.length
if(s===1){if(0>=s)return A.c(a,0)
return a[0]}if(s===0)throw A.n(A.cE())
throw A.n(A.yw())},
i1(a,b,c,d,e){var s,r,q,p
A.M(a).h("k<1>").a(d)
a.$flags&2&&A.bp(a,5)
A.u_(b,c,a.length)
s=c-b
if(s===0)return
A.hp(e,"skipCount")
r=d
q=J.it(r)
if(e+s>q.gI(r))throw A.n(A.yv())
if(e<b)for(p=s-1;p>=0;--p)a[b+p]=q.p(r,e+p)
else for(p=0;p<s;++p)a[b+p]=q.p(r,e+p)},
oF(a,b,c,d){var s
A.M(a).h("1?").a(d)
a.$flags&2&&A.bp(a,"fillRange")
A.u_(b,c,a.length)
for(s=b;s<c;++s)a[s]=d},
cV(a,b){var s,r
A.M(a).h("B(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.n(A.b_(a))}return!1},
oC(a,b){var s,r
A.M(a).h("B(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.n(A.b_(a))}return!0},
dg(a,b){var s,r,q,p,o,n=A.M(a)
n.h("e(1,1)?").a(b)
a.$flags&2&&A.bp(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.A5()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.bg()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.mG(b,2))
if(p>0)this.nh(a,p)},
fm(a){return this.dg(a,null)},
nh(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bJ(a,b){var s,r,q,p
a.$flags&2&&A.bp(a,"shuffle")
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
if(J.ay(a[s],b))return s}return-1},
G(a,b){var s
for(s=0;s<a.length;++s)if(J.ay(a[s],b))return!0
return!1},
gk7(a){return a.length!==0},
t(a){return A.p1(a,"[","]")},
cJ(a,b){var s=A.a(a.slice(0),A.M(a))
return s},
e4(a){return this.cJ(a,!0)},
gN(a){return new J.aZ(a,a.length,A.M(a).h("aZ<1>"))},
ga0(a){return A.hm(a)},
gI(a){return a.length},
sI(a,b){a.$flags&1&&A.bp(a,"set length","change the length of")
if(b<0)throw A.n(A.cJ(b,0,null,"newLength",null))
if(b>a.length)A.M(a).c.a(null)
a.length=b},
p(a,b){A.w(b)
if(!(b>=0&&b<a.length))throw A.n(A.mH(a,b))
return a[b]},
i(a,b,c){A.M(a).c.a(c)
a.$flags&2&&A.bp(a)
if(!(b>=0&&b<a.length))throw A.n(A.mH(a,b))
a[b]=c},
oN(a,b){var s
A.M(a).h("B(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
$iK:1,
$ik:1,
$iD:1}
J.jX.prototype={
pp(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kD(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.p2.prototype={}
J.aZ.prototype={
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
J.dG.prototype={
ai(a,b){var s
A.e0(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gf2(b)
if(this.gf2(a)===s)return 0
if(this.gf2(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gf2(a){return a===0?1/a<0:a<0},
L(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.n(A.cn(""+a+".toInt()"))},
aR(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.n(A.cn(""+a+".ceil()"))},
bM(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.n(A.cn(""+a+".floor()"))},
O(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.n(A.cn(""+a+".round()"))},
P(a,b,c){if(B.c.ai(b,c)>0)throw A.n(A.ir(b))
if(this.ai(a,b)<0)return b
if(this.ai(a,c)>0)return c
return a},
hR(a,b){var s
if(b>20)throw A.n(A.cJ(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gf2(a))return"-"+s
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
ad(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
cc(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.je(a,b)},
A(a,b){return(a|0)===a?a/b|0:this.je(a,b)},
je(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.n(A.cn("Result of truncating division is "+A.J(s)+": "+A.J(a)+" ~/ "+b))},
eD(a,b){var s
if(a>0)s=this.nu(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
nu(a,b){return b>31?0:a>>>b},
gaG(a){return A.e2(t.cZ)},
$iat:1,
$iF:1,
$iak:1}
J.fZ.prototype={
gi4(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
gaG(a){return A.e2(t.S)},
$iaf:1,
$ie:1}
J.jY.prototype={
gaG(a){return A.e2(t.i)},
$iaf:1}
J.da.prototype={
hc(a,b){return new A.mt(b,a,0)},
dO(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.cQ(a,r-s)},
i9(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
aJ(a,b,c){return a.substring(b,A.u_(b,c,a.length))},
cQ(a,b){return this.aJ(a,b,null)},
kL(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.c(p,0)
if(p.charCodeAt(0)===133){s=J.yB(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.c(p,r)
q=p.charCodeAt(r)===133?J.yC(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
aI(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.n(B.cI)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
p_(a,b,c){var s=b-a.length
if(s<=0)return a
return this.aI(c,s)+a},
d7(a,b){return this.p_(a,b," ")},
p0(a,b){var s=b-a.length
if(s<=0)return a
return a+this.aI(" ",s)},
c4(a,b){var s=a.indexOf(b,0)
return s},
G(a,b){return A.Bk(a,b,0)},
ai(a,b){var s
A.a3(b)
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
gaG(a){return A.e2(t.N)},
gI(a){return a.length},
$iaf:1,
$iat:1,
$ipS:1,
$iq:1}
A.dc.prototype={
t(a){return"LateInitializationError: "+this.a}}
A.d6.prototype={
gI(a){return this.a.length},
p(a,b){var s
A.w(b)
s=this.a
if(!(b>=0&&b<s.length))return A.c(s,b)
return s.charCodeAt(b)}}
A.qi.prototype={}
A.K.prototype={}
A.aF.prototype={
gN(a){var s=this
return new A.c2(s,s.gI(s),A.z(s).h("c2<aF.E>"))},
gaD(a){return this.gI(this)===0},
aP(a,b){var s,r,q,p=this,o=p.gI(p)
if(b.length!==0){if(o===0)return""
s=A.J(p.aU(0,0))
if(o!==p.gI(p))throw A.n(A.b_(p))
for(r=s,q=1;q<o;++q){r=r+b+A.J(p.aU(0,q))
if(o!==p.gI(p))throw A.n(A.b_(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.J(p.aU(0,q))
if(o!==p.gI(p))throw A.n(A.b_(p))}return r.charCodeAt(0)==0?r:r}},
k9(a,b,c){var s=A.z(this)
return new A.aN(this,s.al(c).h("1(aF.E)").a(b),s.h("@<aF.E>").al(c).h("aN<1,2>"))},
cJ(a,b){var s=A.a6(this,A.z(this).h("aF.E"))
return s},
e4(a){return this.cJ(0,!0)}}
A.hG.prototype={
gm6(){var s=J.dx(this.a),r=this.c
if(r==null||r>s)return s
return r},
gnw(){var s=J.dx(this.a),r=this.b
if(r>s)return s
return r},
gI(a){var s,r=J.dx(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
aU(a,b){var s=this,r=s.gnw()+b
if(b<0||r>=s.gm6())throw A.n(A.oy(b,s.gI(0),s,null,"index"))
return J.tH(s.a,r)}}
A.c2.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=J.it(q),o=p.gI(q)
if(r.b!==o)throw A.n(A.b_(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.aU(q,s);++r.c
return!0},
$ia5:1}
A.dK.prototype={
gN(a){return new A.bl(J.ap(this.a),this.b,A.z(this).h("bl<1,2>"))},
gI(a){return J.dx(this.a)}}
A.dB.prototype={$iK:1}
A.bl.prototype={
q(){var s=this,r=s.b
if(r.q()){s.a=s.c.$1(r.gH())
return!0}s.a=null
return!1},
gH(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ia5:1}
A.aN.prototype={
gI(a){return J.dx(this.a)},
aU(a,b){return this.b.$1(J.tH(this.a,b))}}
A.aj.prototype={
gN(a){return new A.cR(J.ap(this.a),this.b,this.$ti.h("cR<1>"))}}
A.cR.prototype={
q(){var s,r
for(s=this.a,r=this.b;s.q();)if(r.$1(s.gH()))return!0
return!1},
gH(){return this.a.gH()},
$ia5:1}
A.dR.prototype={
gN(a){var s=this.a
return new A.hH(s.gN(s),this.b,A.z(this).h("hH<1>"))}}
A.fK.prototype={
gI(a){var s=this.a,r=s.gI(s)
s=this.b
if(r>s)return s
return r},
$iK:1}
A.hH.prototype={
q(){if(--this.b>=0)return this.a.q()
this.b=-1
return!1},
gH(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gH()},
$ia5:1}
A.hI.prototype={
gN(a){return new A.hJ(J.ap(this.a),this.b,this.$ti.h("hJ<1>"))}}
A.hJ.prototype={
q(){var s,r=this
if(r.c)return!1
s=r.a
if(!s.q()||!r.b.$1(s.gH())){r.c=!0
return!1}return!0},
gH(){if(this.c){this.$ti.c.a(null)
return null}return this.a.gH()},
$ia5:1}
A.hO.prototype={
gN(a){return new A.bn(J.ap(this.a),this.$ti.h("bn<1>"))}}
A.bn.prototype={
q(){var s,r
for(s=this.a,r=this.$ti.c;s.q();)if(r.b(s.gH()))return!0
return!1},
gH(){return this.$ti.c.a(this.a.gH())},
$ia5:1}
A.aA.prototype={
sI(a,b){throw A.n(A.cn("Cannot change the length of a fixed-length list"))},
j(a,b){A.cs(a).h("aA.E").a(b)
throw A.n(A.cn("Cannot add to a fixed-length list"))}}
A.dl.prototype={
i(a,b,c){A.z(this).h("dl.E").a(c)
throw A.n(A.cn("Cannot modify an unmodifiable list"))},
sI(a,b){throw A.n(A.cn("Cannot change the length of an unmodifiable list"))},
j(a,b){A.z(this).h("dl.E").a(b)
throw A.n(A.cn("Cannot add to an unmodifiable list"))}}
A.f7.prototype={}
A.cL.prototype={
gI(a){return J.dx(this.a)},
aU(a,b){var s=this.a,r=J.it(s)
return r.aU(s,r.gI(s)-1-b)}}
A.O.prototype={$r:"+(1,2)",$s:1}
A.a2.prototype={$r:"+(1,2,3,4)",$s:2}
A.el.prototype={
gaD(a){return this.gI(this)===0},
t(a){return A.tU(this)},
geU(){return new A.R(this.oB(),A.z(this).h("R<aM<1,2>>"))},
oB(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$geU(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gb2(),o=o.gN(o),n=A.z(s),m=n.y[1],n=n.h("aM<1,2>")
case 2:if(!o.q()){r=3
break}l=o.gH()
k=s.p(0,l)
r=4
return a.b=new A.aM(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
$ibk:1}
A.bO.prototype={
gI(a){return this.b.length},
giN(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
aj(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
p(a,b){if(!this.aj(b))return null
return this.b[this.a[b]]},
ae(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.giN()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gb2(){return new A.i0(this.giN(),this.$ti.h("i0<1>"))}}
A.i0.prototype={
gI(a){return this.a.length},
gN(a){var s=this.a
return new A.i1(s,s.length,this.$ti.h("i1<1>"))}}
A.i1.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$ia5:1}
A.dF.prototype={
dr(){var s=this,r=s.$map
if(r==null){r=new A.h4(s.$ti.h("h4<1,2>"))
A.wH(s.a,r)
s.$map=r}return r},
aj(a){return this.dr().aj(a)},
p(a,b){return this.dr().p(0,b)},
ae(a,b){this.$ti.h("~(1,2)").a(b)
this.dr().ae(0,b)},
gb2(){var s=this.dr()
return new A.b0(s,A.z(s).h("b0<1>"))},
gI(a){return this.dr().a}}
A.pV.prototype={
$0(){return B.e.bM(1000*this.a.now())},
$S:2}
A.hw.prototype={}
A.rb.prototype={
bQ(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.hi.prototype={
t(a){return"Null check operator used on a null value"}}
A.jZ.prototype={
t(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.lg.prototype={
t(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.pN.prototype={
t(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ie.prototype={
t(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$if5:1}
A.d5.prototype={
t(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.wX(r==null?"unknown":r)+"'"},
$idE:1,
gpy(){return this},
$C:"$1",
$R:1,
$D:null}
A.j_.prototype={$C:"$0",$R:0}
A.j0.prototype={$C:"$2",$R:2}
A.l6.prototype={}
A.l1.prototype={
t(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.wX(s)+"'"}}
A.ef.prototype={
Z(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ef))return!1
return this.$_target===b.$_target&&this.a===b.a},
ga0(a){return(A.uq(this.a)^A.hm(this.$_target))>>>0},
t(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kD(this.a)+"'")}}
A.kT.prototype={
t(a){return"RuntimeError: "+this.a}}
A.c0.prototype={
gI(a){return this.a},
gaD(a){return this.a===0},
gb2(){return new A.b0(this,A.z(this).h("b0<1>"))},
geU(){return new A.bj(this,A.z(this).h("bj<1,2>"))},
aj(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.oO(a)},
oO(a){var s=this.d
if(s==null)return!1
return this.dU(this.iH(s,a),a)>=0},
U(a,b){A.z(this).h("bk<1,2>").a(b).ae(0,new A.p3(this))},
p(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.oP(b)},
oP(a){var s,r,q=this.d
if(q==null)return null
s=this.iH(q,a)
r=this.dU(s,a)
if(r<0)return null
return s[r].b},
i(a,b,c){var s,r,q=this,p=A.z(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.ie(s==null?q.b=q.fW():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.ie(r==null?q.c=q.fW():r,b,c)}else q.oR(b,c)},
oR(a,b){var s,r,q,p,o=this,n=A.z(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.fW()
r=o.f1(a)
q=s[r]
if(q==null)s[r]=[o.fX(a,b)]
else{p=o.dU(q,a)
if(p>=0)q[p].b=b
else q.push(o.fX(a,b))}},
b7(a,b){var s,r,q=this,p=A.z(q)
p.c.a(a)
p.h("2()").a(b)
if(q.aj(a)){s=q.p(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.i(0,a,r)
return r},
ac(a,b){var s=this.oQ(b)
return s},
oQ(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.f1(a)
r=n[s]
q=o.dU(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.nP(p)
if(r.length===0)delete n[s]
return p.b},
aS(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.fU()}},
ae(a,b){var s,r,q=this
A.z(q).h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.n(A.b_(q))
s=s.c}},
ie(a,b,c){var s,r=A.z(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.fX(b,c)
else s.b=c},
fU(){this.r=this.r+1&1073741823},
fX(a,b){var s=this,r=A.z(s),q=new A.pd(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.fU()
return q},
nP(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.fU()},
f1(a){return J.cb(a)&1073741823},
iH(a,b){return a[this.f1(b)]},
dU(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ay(a[r].a,b))return r
return-1},
t(a){return A.tU(this)},
fW(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$itT:1}
A.p3.prototype={
$2(a,b){var s=this.a,r=A.z(s)
s.i(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.z(this.a).h("~(1,2)")}}
A.pd.prototype={}
A.b0.prototype={
gI(a){return this.a.a},
gaD(a){return this.a.a===0},
gN(a){var s=this.a
return new A.c1(s,s.r,s.e,this.$ti.h("c1<1>"))},
G(a,b){return this.a.aj(b)}}
A.c1.prototype={
gH(){return this.d},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.n(A.b_(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ia5:1}
A.cG.prototype={
gI(a){return this.a.a},
gN(a){var s=this.a
return new A.cF(s,s.r,s.e,this.$ti.h("cF<1>"))}}
A.cF.prototype={
gH(){return this.d},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.n(A.b_(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$ia5:1}
A.bj.prototype={
gI(a){return this.a.a},
gN(a){var s=this.a
return new A.dI(s,s.r,s.e,this.$ti.h("dI<1,2>"))}}
A.dI.prototype={
gH(){var s=this.d
s.toString
return s},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.n(A.b_(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.aM(s.a,s.b,r.$ti.h("aM<1,2>"))
r.c=s.c
return!0}},
$ia5:1}
A.h4.prototype={
f1(a){return A.AN(a)&1073741823},
dU(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ay(a[r].a,b))return r
return-1}}
A.td.prototype={
$1(a){return this.a(a)},
$S:33}
A.te.prototype={
$2(a,b){return this.a(a,b)},
$S:69}
A.tf.prototype={
$1(a){return this.a(A.a3(a))},
$S:66}
A.co.prototype={
t(a){return this.jg(!1)},
jg(a){var s,r,q,p,o,n=this.ma(),m=this.fP(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.c(m,q)
o=m[q]
l=a?l+A.vM(o):l+A.J(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
ma(){var s,r=this.$s
while($.rJ.length<=r)B.a.j($.rJ,null)
s=$.rJ[r]
if(s==null){s=this.lK()
B.a.i($.rJ,r,s)}return s},
lK(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.vw(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.i(j,q,r[s])}}j=A.yJ(j,!1,k)
j.$flags=3
return j}}
A.fe.prototype={
fP(){return[this.a,this.b]},
Z(a,b){if(b==null)return!1
return b instanceof A.fe&&this.$s===b.$s&&J.ay(this.a,b.a)&&J.ay(this.b,b.b)},
ga0(a){return A.tW(this.$s,this.a,this.b,B.am)}}
A.ff.prototype={
fP(){return this.a},
Z(a,b){if(b==null)return!1
return b instanceof A.ff&&this.$s===b.$s&&A.zy(this.a,b.a)},
ga0(a){return A.tW(this.$s,A.yR(this.a),B.am,B.am)}}
A.h0.prototype={
t(a){return"RegExp/"+this.a+"/"+this.b.flags},
giT(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.vA(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
jT(a){var s=this.b.exec(a)
if(s==null)return null
return new A.i2(s)},
hc(a,b){return new A.ls(this,b,0)},
m9(a,b){var s,r=this.giT()
if(r==null)r=A.fi(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.i2(s)},
$ipS:1,
$iz3:1}
A.i2.prototype={
gi8(){return this.b.index},
ghq(){var s=this.b
return s.index+s[0].length},
p(a,b){var s
A.w(b)
s=this.b
if(!(b<s.length))return A.c(s,b)
return s[b]},
$icj:1,
$ihr:1}
A.ls.prototype={
gN(a){return new A.hQ(this.a,this.b,this.c)}}
A.hQ.prototype={
gH(){var s=this.d
return s==null?t.lu.a(s):s},
q(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.m9(l,s)
if(p!=null){m.d=p
o=p.ghq()
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
A.l2.prototype={
ghq(){return this.a+this.c.length},
p(a,b){A.w(b)
if(b!==0)throw A.n(A.ho(b,null))
return this.c},
$icj:1,
gi8(){return this.a}}
A.mt.prototype={
gN(a){return new A.mu(this.a,this.b,this.c)}}
A.mu.prototype={
q(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.l2(s,o)
q.c=r===q.c?r+1:r
return!0},
gH(){var s=this.d
s.toString
return s},
$ia5:1}
A.rp.prototype={
fZ(){var s=this.b
if(s===this)throw A.n(new A.dc("Local '' has not been initialized."))
return s},
u(){var s=this.b
if(s===this)throw A.n(A.dH(""))
return s}}
A.eK.prototype={
gaG(a){return B.iV},
$iaf:1}
A.he.prototype={}
A.ki.prototype={
gaG(a){return B.iW},
$iaf:1}
A.eL.prototype={
gI(a){return a.length},
$ibI:1}
A.hc.prototype={
p(a,b){A.w(b)
A.cX(b,a,a.length)
return a[b]},
i(a,b,c){A.by(c)
a.$flags&2&&A.bp(a)
A.cX(b,a,a.length)
a[b]=c},
$iK:1,
$ik:1,
$iD:1}
A.hd.prototype={
i(a,b,c){A.w(c)
a.$flags&2&&A.bp(a)
A.cX(b,a,a.length)
a[b]=c},
$iK:1,
$ik:1,
$iD:1}
A.kj.prototype={
gaG(a){return B.iX},
$iaf:1}
A.kk.prototype={
gaG(a){return B.iY},
$iaf:1}
A.kl.prototype={
gaG(a){return B.iZ},
p(a,b){A.w(b)
A.cX(b,a,a.length)
return a[b]},
$iaf:1}
A.km.prototype={
gaG(a){return B.j_},
p(a,b){A.w(b)
A.cX(b,a,a.length)
return a[b]},
$iaf:1}
A.kn.prototype={
gaG(a){return B.j0},
p(a,b){A.w(b)
A.cX(b,a,a.length)
return a[b]},
$iaf:1}
A.ko.prototype={
gaG(a){return B.j2},
p(a,b){A.w(b)
A.cX(b,a,a.length)
return a[b]},
$iaf:1}
A.kp.prototype={
gaG(a){return B.j3},
p(a,b){A.w(b)
A.cX(b,a,a.length)
return a[b]},
$iaf:1}
A.hf.prototype={
gaG(a){return B.j4},
gI(a){return a.length},
p(a,b){A.w(b)
A.cX(b,a,a.length)
return a[b]},
$iaf:1}
A.kq.prototype={
gaG(a){return B.j5},
gI(a){return a.length},
p(a,b){A.w(b)
A.cX(b,a,a.length)
return a[b]},
$iaf:1}
A.i3.prototype={}
A.i4.prototype={}
A.i5.prototype={}
A.i6.prototype={}
A.c4.prototype={
h(a){return A.ik(v.typeUniverse,this,a)},
al(a){return A.wf(v.typeUniverse,this,a)}}
A.lV.prototype={}
A.my.prototype={
t(a){return A.bM(this.a,null)}}
A.lM.prototype={
t(a){return this.a}}
A.ig.prototype={$icP:1}
A.rj.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:44}
A.ri.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:55}
A.rk.prototype={
$0(){this.a.$0()},
$S:39}
A.rl.prototype={
$0(){this.a.$0()},
$S:39}
A.rP.prototype={
lq(a,b){if(self.setTimeout!=null)self.setTimeout(A.mG(new A.rQ(this,b),0),a)
else throw A.n(A.cn("`setTimeout()` not found."))}}
A.rQ.prototype={
$0(){this.b.$0()},
$S:0}
A.ag.prototype={
gH(){var s=this.b
return s==null?this.$ti.c.a(s):s},
nj(a,b){var s,r,q
a=A.w(a)
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
o.d=null}q=o.nj(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.w9
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
o.a=A.w9
throw n
return!1}if(0>=p.length)return A.c(p,-1)
o.a=p.pop()
m=1
continue}throw A.n(A.cM("sync*"))}return!1},
aL(a){var s,r,q=this
if(a instanceof A.R){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.j(r,q.a)
q.a=s
return 2}else{q.d=J.ap(a)
return 2}},
$ia5:1}
A.R.prototype={
gN(a){return new A.ag(this.a(),this.$ti.h("ag<1>"))}}
A.cu.prototype={
t(a){return A.J(this.a)},
$ial:1,
geh(){return this.b}}
A.hY.prototype={
oV(a){if((this.c&15)!==6)return!0
return this.b.b.hL(t.iW.a(this.d),a.a,t.y,t.K)},
oK(a){var s,r=this,q=r.e,p=null,o=t.oH,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.pg(q,m,a.b,o,n,t.gl)
else p=l.hL(t.mq.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.do.b(A.dn(s))){if((r.c&1)!==0)throw A.n(A.aC("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.n(A.aC("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.bT.prototype={
pm(a,b,c){var s,r,q=this.$ti
q.al(c).h("1/(2)").a(a)
s=$.b3
if(s===B.ab){if(!t.ng.b(b)&&!t.mq.b(b))throw A.n(A.tI(b,"onError",u.c))}else{c.h("@<0/>").al(q.c).h("1(2)").a(a)
b=A.Au(b,s)}r=new A.bT(s,c.h("bT<0>"))
this.ig(new A.hY(r,3,a,b,q.h("@<1>").al(c).h("hY<1,2>")))
return r},
nr(a){this.a=this.a&1|16
this.c=a},
em(a){this.a=a.a&30|this.a&1
this.c=a.c},
ig(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.j_.a(r.c)
if((s.a&24)===0){s.ig(a)
return}r.em(s)}A.t4(null,null,r.b,t.O.a(new A.rt(r,a)))}},
j_(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.j_.a(m.c)
if((n.a&24)===0){n.j_(a)
return}m.em(n)}l.a=m.eB(a)
A.t4(null,null,m.b,t.O.a(new A.rw(l,m)))}},
ez(){var s=t.F.a(this.c)
this.c=null
return this.eB(s)},
eB(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
lJ(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.ez()
q.em(a)
A.fc(q,r)},
it(a){var s=this.ez()
this.nr(a)
A.fc(this,s)},
lu(a){this.a^=2
A.t4(null,null,this.b,t.O.a(new A.ru(this,a)))},
$ijB:1}
A.rt.prototype={
$0(){A.fc(this.a,this.b)},
$S:0}
A.rw.prototype={
$0(){A.fc(this.b,this.a.a)},
$S:0}
A.rv.prototype={
$0(){A.w4(this.a.a,this.b,!0)},
$S:0}
A.ru.prototype={
$0(){this.a.it(this.b)},
$S:0}
A.rz.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.pf(t.df.a(q.d),t.oH)}catch(p){s=A.dn(p)
r=A.e5(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.tJ(q)
n=k.a
n.c=new A.cu(q,o)
q=n}q.b=!0
return}if(j instanceof A.bT&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.bT){m=k.b.a
l=new A.bT(m.b,m.$ti)
j.pm(new A.rA(l,m),new A.rB(l),t.ef)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.rA.prototype={
$1(a){this.a.lJ(this.b)},
$S:44}
A.rB.prototype={
$2(a,b){A.fi(a)
t.gl.a(b)
this.a.it(new A.cu(a,b))},
$S:77}
A.ry.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.hL(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.dn(l)
r=A.e5(l)
q=s
p=r
if(p==null)p=A.tJ(q)
o=this.a
o.c=new A.cu(q,p)
o.b=!0}},
$S:0}
A.rx.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.oV(s)&&p.a.e!=null){p.c=p.a.oK(s)
p.b=!1}}catch(o){r=A.dn(o)
q=A.e5(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.tJ(p)
m=l.b
m.c=new A.cu(p,n)
p=m}p.b=!0}},
$S:0}
A.lv.prototype={}
A.hD.prototype={
gI(a){var s,r,q=this,p={},o=new A.bT($.b3,t.h0)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new A.qU(p,q))
t.c3.a(new A.qV(p,o))
A.dW(q.a,q.b,r,!1,s.c)
return o}}
A.qU.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.h("~(1)")}}
A.qV.prototype={
$0(){var s=this.b,r=s.$ti,q=r.h("1/").a(this.a.a),p=s.ez()
r.c.a(q)
s.a=8
s.c=q
A.fc(s,p)},
$S:0}
A.il.prototype={$iw1:1}
A.ml.prototype={
ph(a){var s,r,q
t.O.a(a)
try{if(B.ab===$.b3){a.$0()
return}A.ww(null,null,this,a,t.ef)}catch(q){s=A.dn(q)
r=A.e5(q)
A.t2(A.fi(s),t.gl.a(r))}},
pi(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.ab===$.b3){a.$1(b)
return}A.wx(null,null,this,a,b,t.ef,c)}catch(q){s=A.dn(q)
r=A.e5(q)
A.t2(A.fi(s),t.gl.a(r))}},
o7(a){return new A.rL(this,t.O.a(a))},
o8(a,b){return new A.rM(this,b.h("~(0)").a(a),b)},
pf(a,b){b.h("0()").a(a)
if($.b3===B.ab)return a.$0()
return A.ww(null,null,this,a,b)},
hL(a,b,c,d){c.h("@<0>").al(d).h("1(2)").a(a)
d.a(b)
if($.b3===B.ab)return a.$1(b)
return A.wx(null,null,this,a,b,c,d)},
pg(a,b,c,d,e,f){d.h("@<0>").al(e).al(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.b3===B.ab)return a.$2(b,c)
return A.Av(null,null,this,a,b,c,d,e,f)}}
A.rL.prototype={
$0(){return this.a.ph(this.b)},
$S:0}
A.rM.prototype={
$1(a){var s=this.c
return this.a.pi(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.t3.prototype={
$0(){A.yi(this.a,this.b)},
$S:0}
A.cT.prototype={
n0(){return new A.cT(A.z(this).h("cT<1>"))},
gN(a){var s=this,r=new A.cU(s,s.r,A.z(s).h("cU<1>"))
r.c=s.e
return r},
gI(a){return this.a},
G(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.nF.a(r[b])!=null}else return this.lL(b)},
lL(a){var s=this.d
if(s==null)return!1
return this.fN(s[this.fG(a)],a)>=0},
gaB(a){var s=this.e
if(s==null)throw A.n(A.cM("No elements"))
return A.z(this).c.a(s.a)},
j(a,b){var s,r,q=this
A.z(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.iq(s==null?q.b=A.u9():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.iq(r==null?q.c=A.u9():r,b)}else return q.bh(b)},
bh(a){var s,r,q,p=this
A.z(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.u9()
r=p.fG(a)
q=s[r]
if(q==null)s[r]=[p.fF(a)]
else{if(p.fN(q,a)>=0)return!1
q.push(p.fF(a))}return!0},
ac(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.j4(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.j4(s.c,b)
else return s.na(b)},
na(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.fG(a)
r=n[s]
q=o.fN(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.is(p)
return!0},
mc(a,b){var s,r,q,p,o,n=this,m=A.z(n)
m.h("B(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.n(A.b_(n))
if(!0===o)n.ac(0,r)}},
iq(a,b){A.z(this).c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.fF(b)
return!0},
j4(a,b){var s
if(a==null)return!1
s=t.nF.a(a[b])
if(s==null)return!1
this.is(s)
delete a[b]
return!0},
ir(){this.r=this.r+1&1073741823},
fF(a){var s,r=this,q=new A.m9(A.z(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.ir()
return q},
is(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.ir()},
fG(a){return J.cb(a)&1073741823},
fN(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ay(a[r].a,b))return r
return-1}}
A.m9.prototype={}
A.cU.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.n(A.b_(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}},
$ia5:1}
A.X.prototype={
gN(a){return new A.c2(a,this.gI(a),A.cs(a).h("c2<X.E>"))},
aU(a,b){return this.p(a,b)},
gk7(a){return this.gI(a)!==0},
kS(a,b){var s=A.cs(a)
return new A.aj(a,s.h("B(X.E)").a(b),s.h("aj<X.E>"))},
cJ(a,b){var s,r,q,p,o=this
if(o.gI(a)===0){s=J.vy(0,A.cs(a).h("X.E"))
return s}r=o.p(a,0)
q=A.an(o.gI(a),r,!0,A.cs(a).h("X.E"))
for(p=1;p<o.gI(a);++p)B.a.i(q,p,o.p(a,p))
return q},
e4(a){return this.cJ(a,!0)},
j(a,b){var s
A.cs(a).h("X.E").a(b)
s=this.gI(a)
this.sI(a,s+1)
this.i(a,s,b)},
t(a){return A.p1(a,"[","]")},
$iK:1,
$ik:1,
$iD:1}
A.aB.prototype={
ae(a,b){var s,r,q,p=A.z(this)
p.h("~(aB.K,aB.V)").a(b)
for(s=this.gb2(),s=s.gN(s),p=p.h("aB.V");s.q();){r=s.gH()
q=this.p(0,r)
b.$2(r,q==null?p.a(q):q)}},
geU(){return this.gb2().k9(0,new A.pq(this),A.z(this).h("aM<aB.K,aB.V>"))},
aj(a){return this.gb2().G(0,a)},
gI(a){var s=this.gb2()
return s.gI(s)},
gaD(a){var s=this.gb2()
return s.gaD(s)},
t(a){return A.tU(this)},
$ibk:1}
A.pq.prototype={
$1(a){var s=this.a,r=A.z(s)
r.h("aB.K").a(a)
s=s.p(0,a)
if(s==null)s=r.h("aB.V").a(s)
return new A.aM(a,s,r.h("aM<aB.K,aB.V>"))},
$S(){return A.z(this.a).h("aM<aB.K,aB.V>(aB.K)")}}
A.pr.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.J(a)
r.a=(r.a+=s)+": "
s=A.J(b)
r.a+=s},
$S:46}
A.h6.prototype={
gN(a){var s=this
return new A.dY(s,s.c,s.d,s.b,s.$ti.h("dY<1>"))},
gaD(a){return this.b===this.c},
gI(a){return(this.c-this.b&this.a.length-1)>>>0},
aU(a,b){var s,r,q=this,p=q.gI(0)
if(0>b||b>=p)A.a_(A.oy(b,p,q,null,"index"))
p=q.a
s=p.length
r=(q.b+b&s-1)>>>0
if(!(r>=0&&r<s))return A.c(p,r)
r=p[r]
return r==null?q.$ti.c.a(r):r},
t(a){return A.p1(this,"{","}")},
cH(){var s,r,q=this,p=q.b
if(p===q.c)throw A.n(A.cE());++q.d
s=q.a
if(!(p<s.length))return A.c(s,p)
r=s[p]
if(r==null)r=q.$ti.c.a(r)
B.a.i(s,p,null)
q.b=(q.b+1&q.a.length-1)>>>0
return r},
bh(a){var s,r=this
r.$ti.c.a(a)
B.a.i(r.a,r.c,a)
s=(r.c+1&r.a.length-1)>>>0
r.c=s
if(r.b===s)r.iI();++r.d},
iI(){var s=this,r=A.an(s.a.length*2,null,!1,s.$ti.h("1?")),q=s.a,p=s.b,o=q.length-p
B.a.i1(r,0,o,q,p)
B.a.i1(r,o,o+s.b,s.a,0)
s.b=0
s.c=s.a.length
s.a=r},
$ieV:1}
A.dY.prototype={
gH(){var s=this.e
return s==null?this.$ti.c.a(s):s},
q(){var s,r,q=this,p=q.a
if(q.c!==p.d)A.a_(A.b_(p))
s=q.d
if(s===q.b){q.e=null
return!1}p=p.a
r=p.length
if(!(s<r))return A.c(p,s)
q.e=p[s]
q.d=(s+1&r-1)>>>0
return!0},
$ia5:1}
A.f3.prototype={
U(a,b){var s
for(s=J.ap(A.z(this).h("k<1>").a(b));s.q();)this.j(0,s.gH())},
t(a){return A.p1(this,"{","}")},
aP(a,b){var s,r,q,p,o=A.u8(this,this.r,A.z(this).c)
if(!o.q())return""
s=o.d
r=J.ec(s==null?o.$ti.c.a(s):s)
if(!o.q())return r
s=o.$ti.c
if(b.length===0){q=r
do{p=o.d
q+=A.J(p==null?s.a(p):p)}while(o.q())
s=q}else{q=r
do{p=o.d
q=q+b+A.J(p==null?s.a(p):p)}while(o.q())
s=q}return s.charCodeAt(0)==0?s:s},
$iK:1,
$ik:1,
$ihz:1}
A.ib.prototype={}
A.m4.prototype={
p(a,b){var s,r=this.b
if(r==null)return this.c.p(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.lM(b):s}},
gI(a){return this.b==null?this.c.a:this.en().length},
gaD(a){return this.gI(0)===0},
gb2(){if(this.b==null){var s=this.c
return new A.b0(s,A.z(s).h("b0<1>"))}return new A.m5(this)},
aj(a){if(this.b==null)return this.c.aj(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
ae(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.ae(0,b)
s=o.en()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.rZ(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.n(A.b_(o))}},
en(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.a(Object.keys(this.a),t.s)
return s},
lM(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.rZ(this.a[a])
return this.b[a]=s}}
A.m5.prototype={
gI(a){return this.a.gI(0)},
aU(a,b){var s=this.a
if(s.b==null)s=s.gb2().aU(0,b)
else{s=s.en()
if(!(b>=0&&b<s.length))return A.c(s,b)
s=s[b]}return s},
gN(a){var s=this.a
if(s.b==null){s=s.gb2()
s=s.gN(s)}else{s=s.en()
s=new J.aZ(s,s.length,A.M(s).h("aZ<1>"))}return s},
G(a,b){return this.a.aj(b)}}
A.j3.prototype={}
A.j5.prototype={}
A.h5.prototype={
t(a){var s=A.jl(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.k0.prototype={
t(a){return"Cyclic error in JSON stringify"}}
A.k_.prototype={
os(a){var s=A.As(a,this.got().a)
return s},
jO(a){var s=A.zp(a,this.goA().b,null)
return s},
goA(){return B.hA},
got(){return B.hz}}
A.p5.prototype={}
A.p4.prototype={}
A.rE.prototype={
kV(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.j.aJ(a,r,q)
r=q+1
o=A.b2(92)
s.a+=o
o=A.b2(117)
s.a+=o
o=A.b2(100)
s.a+=o
o=p>>>8&15
o=A.b2(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.b2(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.b2(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.j.aJ(a,r,q)
r=q+1
o=A.b2(92)
s.a+=o
switch(p){case 8:o=A.b2(98)
s.a+=o
break
case 9:o=A.b2(116)
s.a+=o
break
case 10:o=A.b2(110)
s.a+=o
break
case 12:o=A.b2(102)
s.a+=o
break
case 13:o=A.b2(114)
s.a+=o
break
default:o=A.b2(117)
s.a+=o
o=A.b2(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.b2(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.b2(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.j.aJ(a,r,q)
r=q+1
o=A.b2(92)
s.a+=o
o=A.b2(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.j.aJ(a,r,m)},
fE(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.n(new A.k0(a,null))}B.a.j(s,a)},
fi(a){var s,r,q,p,o=this
if(o.kU(a))return
o.fE(a)
try{s=o.b.$1(a)
if(!o.kU(s)){q=A.vB(a,null,o.giW())
throw A.n(q)}q=o.a
if(0>=q.length)return A.c(q,-1)
q.pop()}catch(p){r=A.dn(p)
q=A.vB(a,r,o.giW())
throw A.n(q)}},
kU(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.e.t(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.kV(a)
s.a+='"'
return!0}else if(t._.b(a)){q.fE(a)
q.pv(a)
s=q.a
if(0>=s.length)return A.c(s,-1)
s.pop()
return!0}else if(t.av.b(a)){q.fE(a)
r=q.pw(a)
s=q.a
if(0>=s.length)return A.c(s,-1)
s.pop()
return r}else return!1},
pv(a){var s,r,q=this.c
q.a+="["
s=J.it(a)
if(s.gk7(a)){this.fi(s.p(a,0))
for(r=1;r<s.gI(a);++r){q.a+=","
this.fi(s.p(a,r))}}q.a+="]"},
pw(a){var s,r,q,p,o,n,m=this,l={}
if(a.gaD(a)){m.c.a+="{}"
return!0}s=a.gI(a)*2
r=A.an(s,null,!1,t.iD)
q=l.a=0
l.b=!0
a.ae(0,new A.rF(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.kV(A.a3(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.c(r,n)
m.fi(r[n])}p.a+="}"
return!0}}
A.rF.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.i(s,r.a++,a)
B.a.i(s,r.a++,b)},
$S:46}
A.rD.prototype={
giW(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.en.prototype={
Z(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.en)if(this.a===b.a)s=this.b===b.b
return s},
ga0(a){return A.tW(this.a,this.b,B.am,B.am)},
ai(a,b){var s
t.cs.a(b)
s=B.c.ai(this.a,b.a)
if(s!==0)return s
return B.c.ai(this.b,b.b)},
t(a){var s=this,r=A.yd(A.yZ(s)),q=A.j8(A.yX(s)),p=A.j8(A.yT(s)),o=A.j8(A.yU(s)),n=A.j8(A.yW(s)),m=A.j8(A.yY(s)),l=A.ve(A.yV(s)),k=s.b,j=k===0?"":A.ve(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iat:1}
A.rq.prototype={
t(a){return this.aK()}}
A.al.prototype={
geh(){return A.yS(this)}}
A.iH.prototype={
t(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jl(s)
return"Assertion failed"}}
A.cP.prototype={}
A.ce.prototype={
gfM(){return"Invalid argument"+(!this.a?"(s)":"")},
gfL(){return""},
t(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.J(p),n=s.gfM()+q+o
if(!s.a)return n
return n+s.gfL()+": "+A.jl(s.ghv())},
ghv(){return this.b}}
A.eW.prototype={
ghv(){return A.wj(this.b)},
gfM(){return"RangeError"},
gfL(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.J(q):""
else if(q==null)s=": Not greater than or equal to "+A.J(r)
else if(q>r)s=": Not in inclusive range "+A.J(r)+".."+A.J(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.J(r)
return s}}
A.jQ.prototype={
ghv(){return A.w(this.b)},
gfM(){return"RangeError"},
gfL(){if(A.w(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gI(a){return this.f}}
A.hK.prototype={
t(a){return"Unsupported operation: "+this.a}}
A.lf.prototype={
t(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.dP.prototype={
t(a){return"Bad state: "+this.a}}
A.j4.prototype={
t(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jl(s)+"."}}
A.ku.prototype={
t(a){return"Out of Memory"},
geh(){return null},
$ial:1}
A.hC.prototype={
t(a){return"Stack Overflow"},
geh(){return null},
$ial:1}
A.rs.prototype={
t(a){return"Exception: "+this.a}}
A.og.prototype={
t(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.j.aJ(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.k.prototype={
k9(a,b,c){var s=A.z(this)
return A.pt(this,s.al(c).h("1(k.E)").a(b),s.h("k.E"),c)},
aE(a,b,c,d){var s,r
d.a(b)
A.z(this).al(d).h("1(1,k.E)").a(c)
for(s=this.gN(this),r=b;s.q();)r=c.$2(r,s.gH())
return r},
cV(a,b){var s
A.z(this).h("B(k.E)").a(b)
for(s=this.gN(this);s.q();)if(b.$1(s.gH()))return!0
return!1},
cJ(a,b){var s=A.a6(this,A.z(this).h("k.E"))
return s},
e4(a){return this.cJ(0,!0)},
gI(a){var s,r=this.gN(this)
for(s=0;r.q();)++s
return s},
gaD(a){return!this.gN(this).q()},
gaB(a){var s=this.gN(this)
if(!s.q())throw A.n(A.cE())
return s.gH()},
hs(a,b,c){var s,r=A.z(this)
r.h("B(k.E)").a(b)
r.h("k.E()?").a(c)
for(r=this.gN(this);r.q();){s=r.gH()
if(b.$1(s))return s}r=c.$0()
return r},
aU(a,b){var s,r
A.hp(b,"index")
s=this.gN(this)
for(r=b;s.q();){if(r===0)return s.gH();--r}throw A.n(A.oy(b,b-r,this,null,"index"))},
t(a){return A.yx(this,"(",")")}}
A.aM.prototype={
t(a){return"MapEntry("+A.J(this.a)+": "+A.J(this.b)+")"}}
A.aP.prototype={
ga0(a){return A.a0.prototype.ga0.call(this,0)},
t(a){return"null"}}
A.a0.prototype={$ia0:1,
Z(a,b){return this===b},
ga0(a){return A.hm(this)},
t(a){return"Instance of '"+A.kD(this)+"'"},
gaG(a){return A.AY(this)},
toString(){return this.t(this)}}
A.mv.prototype={
t(a){return""},
$if5:1}
A.qH.prototype={
goz(){var s,r=this.b
if(r==null)r=$.tY.$0()
s=r-this.a
if($.uL()===1000)return s
return B.c.A(s,1000)}}
A.dQ.prototype={
gI(a){return this.a.length},
t(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iza:1}
A.jn.prototype={
i(a,b,c){this.$ti.h("1?").a(c)
this.a.set(b,c)},
t(a){return"Expando:null"}}
A.m3.prototype={
a1(a){if(a<=0||a>4294967296)throw A.n(A.vO(u.g+a))
return Math.random()*a>>>0},
hz(){return Math.random()},
$itZ:1}
A.mj.prototype={
lp(a){var s,r,q,p,o,n,m,l=this,k=4294967296,j=a<0?-1:0
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
if(a<=0||a>4294967296)throw A.n(A.vO(u.g+a))
s=a-1
if((a&s)>>>0===0){p.ce()
return(p.a&s)>>>0}do{p.ce()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
hz(){var s,r=this
r.ce()
s=r.a
r.ce()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$itZ:1}
A.jD.prototype={
oh(a,b,c,d){var s,r
t.jJ.a(d)
if(c===0)return new A.ra(b).dE(d)
s=b.f.b.b
r=s.a
s=s.b
return new A.nd(a,b,c,new A.a8(A.an(r*s,null,!1,t.aT),new A.Y(new A.d(0,0),new A.d(r,s)),t.gy)).dE(d)},
jH(a,b,c,d){var s,r,q,p,o,n,m,l=null
if(d==null)d=B.a.eW($.ft(),new A.ok())
if(b==null)b=B.a.gaB($.ea())
s=A.C(t.g,t.U)
r=t.M
q=t.S
p=t.P
o=t.q
n=new A.d9(a,d,b,c,A.bG(B.I,l),new A.et(A.an(9,l,!1,t.cm)),A.bG(B.c5,l),A.bG(B.c4,l),s,0,new A.hB(A.C(r,q),A.C(r,q)),60,0,new A.k6(A.a([],t.kU)),new A.h9(A.C(p,q),A.C(p,q),A.C(o,q),A.C(t.R,q),A.b7(o),A.C(o,q)),new A.hE(),new A.fy(),new A.hN(),new A.fW())
n.lj(a,d,b,c)
for(r=new A.cF($.hA,$.hA.r,$.hA.e,A.z($.hA).h("cF<2>"));r.q();){q=r.d
m=A.bG(new A.c_(q.b,26),l)
q.aH(m)
s.i(0,q,m)}return n},
or(a){return this.jH(a,null,!1,null)},
lb(a){var s,r,q,p,o=null,n=t.N,m=t.S,l=A.A(["Mending Salve",3,"Scroll of Sidestepping",2,"Tallow Candle",4,"Loaf of Bread",5],n,m),k=A.a([],t.I)
for(n=A.vH(l,n,m),m=A.z(n),n=new A.bl(J.ap(n.a),n.b,m.h("bl<1,2>")),m=m.y[1];n.q();){s=n.a
if(s==null)s=m.a(s)
r=s.a
q=s.b
p=$.bh().b.p(0,r)
if(p==null)A.a_(A.aC('Unknown resource "'+r+'".',o))
k.push(new A.L(p.a,o,o,o,q))}a.c.e.b0(a.ax,1,new A.ol(a,k))
return k},
pr(a,b){var s,r=a.f.B(b.gm(),b.gn()),q=r.x
if(q===0){if(!this.nO(a,b,r))this.jb(a,b,r)}else{s=r.w
if(s===$.b4()){--q
r.x=q
if(q<=0){q=r.a
q=$.tz().p(0,q)
if((q==null?0:q)>0){q=$.m()
s=t.p.a(A.ze(r.a))
q=q.T(s.length)
if(!(q>=0&&q<s.length))return A.c(s,q)
r.a=s[q]}a.gav().f=!0}else return new A.iU(b)}else if(s===$.bz()){this.jb(a,b,r)
r=r.x
if(r>0)return new A.kA(b,B.e.O(A.v(r,0,255,3,8)))}}return null},
nO(a,b,c){var s,r={},q=c.a,p=$.tz().p(0,q)
if(p==null)p=0
if(p===0)return!1
r.a=0
q=new A.oj(r,a,b)
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
s=$.uN().p(0,r)
if(s==null)s=0
c.x=q.bq(s/2|0,s)
c.w=$.b4()
return a.gav().f=!0},
jb(a,b,c){var s={},r=$.U()
if((c.a.e.a&r.a)===0)return
s.a=s.b=0
r=new A.oi(s,a,b)
r.$2(0,0)
r.$2(-1,0)
r.$2(1,0)
r.$2(0,-1)
r.$2(0,1)
r.$2(-1,-1)
r.$2(1,-1)
r.$2(-1,1)
r.$2(1,1)
c.w=$.bz()
c.x=B.c.P(B.e.L(s.b/s.a)-4,0,255)},
$iyc:1}
A.ok.prototype={
$1(a){return t.ho.a(a).a==="Human"},
$S:47}
A.ol.prototype={
$1(a){var s=a.a
if(s.dx)this.a.ax.e.j(0,s)
B.a.j(this.b,a)},
$S:6}
A.oj.prototype={
$3(a,b,c){var s=this.c,r=this.b.f.B(s.gm()+a,s.gn()+b)
if(r.x===0)return
if(r.w===$.b4())this.a.a+=c},
$S:71}
A.oi.prototype={
$2(a,b){var s=this.c,r=this.b.f.B(s.gm()+a,s.gn()+b)
s=$.U()
if((r.a.e.a&s.a)!==0){s=this.a;++s.a
if(r.w===$.bz())s.b=s.b+r.x}},
$S:73}
A.jp.prototype={
gM(){return"Fairy Dust"},
gW(){return"TODO"},
gbC(){return new A.hn($.tx())},
ak(a){var s,r,q=a.y.Q,p=q.CW.a
p.toString
s=B.e.O(A.v(p,0,50,1,20))
q=q.ay.a
q.toString
r=B.e.O(A.v(q,0,50,1,6))
return A.vQ(A.bb(new A.aG(A.aO("dust",B.x,B.aF).a6(1)),"affects",s,$.cZ(),r))}}
A.lN.prototype={}
A.jt.prototype={
gM(){return"Flitter"},
gW(){return"TODO"},
gbC(){return new A.hn($.tx())},
ak(a){return new A.jw()}}
A.jw.prototype={
V(){var s,r,q=this.c
q===$&&A.b()
s=q.y
q=s.e
if(q.a>0)q.b=q.a=0
else{r=s.Q.ay.a
r.toString
q.a=B.e.O(A.v(r,0,50,3,20))
q.b=1
this.oU("{1} unfold your wings and take flight.",this.a)}return B.n}}
A.lQ.prototype={}
A.kb.prototype={
hd(a){var s,r,q,p,o,n,m,l=this,k=l.c
k===$&&A.b()
k=k.x
k===$&&A.b()
k=k.w.B(a.a,a.b)
if(k==null)return null
s=t.V
r=s.a(l.a).Q.f.gcM()
q=A.a6(r,r.$ti.h("k.E"))
p=s.a(l.a).eP(k)
for(s=l.e,o=0,n=0;n<q.length;++n){if(q[n].a.r!==l.gbv())continue
if(!(n<p.length))return A.c(p,n)
m=p[n]
m.cO(s,"mastery")
o+=m.hF(l,l.a,k)
if(k.z<=0)break}return o},
gdW(){return 1}}
A.ln.prototype={
gW(){var s=this.a
if(0>=s.length)return A.c(s,0)
return"You must have "+(B.j.G("aeiou",s[0])?"an":"a")+" "+s+" equipped."},
dG(a){if(a.y.Q.f.gcM().cV(0,new A.re(this)))return null
return"No "+this.a+" equipped"}}
A.re.prototype={
$1(a){return t.W.a(a).a.r===this.a.a},
$S:10}
A.iM.prototype={
gM(){return"Ball Lightning"},
gW(){return"TODO"},
gaq(){return 8},
ar(a){return 24},
ak(a){throw A.n(A.ba(null))},
gap(){return this.a}}
A.ly.prototype={}
A.iV.prototype={
gM(){return"Chain Lightning"},
gW(){return"TODO"},
gaq(){return 6},
ar(a){return 24},
ak(a){throw A.n(A.ba(null))},
gap(){return this.a}}
A.lE.prototype={}
A.j6.prototype={
gM(){return"Crystallize"},
gW(){return"TODO"},
gaq(){return 6},
ar(a){return 24},
ak(a){throw A.n(A.ba(null))},
gap(){return this.a}}
A.lH.prototype={}
A.jh.prototype={
gM(){return"Earthwork"},
gW(){return"TODO"},
gaq(){return 10},
ar(a){return 24},
ak(a){throw A.n(A.ba(null))},
gap(){return this.a}}
A.lJ.prototype={}
A.jq.prototype={
gM(){return"Fire Barrier"},
gW(){return"Creates a wall of fire."},
gaq(){return 4},
ar(a){return 45},
f7(a,b){var s,r,q,p=a.y,o=A.bb(new A.aG(A.aO("fire",B.x,B.U).a6(1)),"burn",10+this.eg(p.Q)*3,$.b4(),8)
p=p.y
s=A.bF(o)
r=p.S(0,b)
q=Math.sqrt(r.gaF())
return new A.iN(b,-r.b/q,r.a/q,s,A.b7(t.u))},
e8(a,b){return 8},
gap(){return this.a}}
A.lO.prototype={}
A.jr.prototype={
gM(){return"Firelight"},
gW(){return"TODO"},
gaq(){return 1},
ar(a){return 4},
ak(a){throw A.n(A.ba(null))},
gap(){return this.a}}
A.lP.prototype={}
A.jz.prototype={
gM(){return"Freezing Hand"},
gW(){return"TODO"},
gaq(){return 4},
ar(a){return 24},
ak(a){throw A.n(A.ba(null))},
gap(){return this.a}}
A.lU.prototype={}
A.jG.prototype={
gM(){return"Gust"},
gW(){return"TODO"},
gaq(){return 1},
ar(a){return 4},
ak(a){throw A.n(A.ba(null))},
gap(){return this.a}}
A.lY.prototype={}
A.jH.prototype={
gM(){return"Hail Storm"},
gW(){return"TODO"},
gaq(){return 8},
ar(a){return 24},
ak(a){throw A.n(A.ba(null))},
gap(){return this.a}}
A.lZ.prototype={}
A.jN.prototype={
gM(){return"Icicle"},
gW(){return"TODO"},
gaq(){return 1},
ar(a){return 12},
f7(a,b){return A.tK(b,A.bF(A.bb(new A.aG(A.aO("icicle",B.x,B.U).a6(1)),"pierce",8+this.eg(a.y.Q)*4,$.c9(),8)),!1,null)},
e8(a,b){return 8},
gap(){return this.a}}
A.m_.prototype={}
A.jP.prototype={
gM(){return"Immolation"},
gW(){return"TODO"},
gaq(){return 6},
ar(a){return 24},
ak(a){throw A.n(A.ba(null))},
gap(){return this.a}}
A.m0.prototype={}
A.k3.prototype={
gM(){return"Lava Flow"},
gW(){return"TODO"},
gaq(){return 8},
ar(a){return 24},
ak(a){throw A.n(A.ba(null))},
gap(){return this.a}}
A.m6.prototype={}
A.k5.prototype={
gM(){return"Lightning Bolt"},
gW(){return"TODO"},
gaq(){return 4},
ar(a){return 24},
ak(a){throw A.n(A.ba(null))},
gap(){return this.a}}
A.m7.prototype={}
A.kc.prototype={
gM(){return"Melt Stone"},
gW(){return"TODO"},
gaq(){return 3},
ar(a){return 24},
ak(a){throw A.n(A.ba(null))},
gap(){return this.a}}
A.ma.prototype={}
A.kH.prototype={
gM(){return"Quicksand"},
gW(){return"TODO"},
gaq(){return 8},
ar(a){return 24},
ak(a){throw A.n(A.ba(null))},
gap(){return this.a}}
A.mi.prototype={}
A.kU.prototype={
gM(){return"Sandstorm"},
gW(){return"TODO"},
gaq(){return 8},
ar(a){return 24},
ak(a){throw A.n(A.ba(null))},
gap(){return this.a}}
A.mm.prototype={}
A.kW.prototype={
gM(){return"Sparks"},
gW(){return"TODO"},
gaq(){return 1},
ar(a){return 10},
ak(a){throw A.n(A.ba(null))},
gap(){return this.a}}
A.mq.prototype={}
A.l0.prototype={
gbC(){return new A.iF(this.gap(),this.gaq())},
eg(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.gap(),r=s.length,q=a.z,p=q.a,o=0,n=0;n<s.length;s.length===r||(0,A.o)(s),++n){m=s[n]
l=p.p(0,m)
if(l==null)l=0
k=q.b.p(0,m)
j=B.c.P(l+(k==null?0:k),0,15)
if(j>=this.gaq())o+=j}return o}}
A.iF.prototype={
gW(){return"You must be at level "+this.b+" or higher in "+this.ix()+"."},
dG(a){var s,r,q,p,o,n,m,l,k
for(s=this.a,r=s.length,q=this.b,p=a.y.Q.z,o=p.a,n=0;n<s.length;s.length===r||(0,A.o)(s),++n){m=s[n]
l=o.p(0,m)
if(l==null)l=0
k=p.b.p(0,m)
if(B.c.P(l+(k==null?0:k),0,15)>=q)return null}return"Not enough "+this.ix()},
ix(){var s,r,q,p,o,n=this.a
A:{s=n.length
r=s<=0?A.a_(A.cM("Should have at least one arcanum.")):null
if(s===1){if(0>=s)return A.c(n,0)
q=n[0]
r=q.b
break A}if(s===2){if(0>=s)return A.c(n,0)
q=n[0]
if(1>=s)return A.c(n,1)
r=q.b+" or "+n[1].b
break A}if(s>=1){r=s-1
p=B.a.fs(n,0,r)
if(!(r<n.length))return A.c(n,r)
o=n[r]
r=A.M(p)
r=new A.aN(p,r.h("q(1)").a(new A.nc()),r.h("aN<1,q>")).aP(0,", ")+", or "+o.b
break A}}return r}}
A.nc.prototype={
$1(a){return t.dx.a(a).b},
$S:50}
A.l9.prototype={
gM(){return"Tidal Wave"},
gW(){return"Summons a giant tidal wave."},
gaq(){return 5},
ar(a){return 70},
ak(a){var s=a.y,r=this.eg(s.Q),q=A.bb(new A.aG(A.aO("wave",B.x,B.U).a6(1)),"inundate",50+r*15,$.d_(),15+r)
return A.oc(s.y,A.bF(q),new A.ad($.aX().a|$.bA().a|$.iv().a),2)},
gap(){return this.a}}
A.mx.prototype={}
A.lq.prototype={
gM(){return"Wind Ride"},
gW(){return"TODO"},
gaq(){return 3},
ar(a){return 16},
ak(a){throw A.n(A.ba(null))},
gap(){return this.a}}
A.mB.prototype={}
A.lr.prototype={
gM(){return"Windstorm"},
gW(){return"Summons a blast of air, spreading out from the sorceror."},
gaq(){return 3},
ar(a){return 36},
ak(a){var s=a.y,r=this.eg(s.Q),q=A.aO("wind",B.x,B.U).a6(1),p=B.c.A(r,3),o=A.bb(new A.aG(q),"blast",10+r*2,$.eb(),6+p)
return A.oc(s.y,A.bF(o),$.uE(),null)},
gap(){return this.a}}
A.mC.prototype={}
A.iK.prototype={
gM(){return"Axe Sweep"},
gW(){return"TODO"},
hB(a,b){return new A.iL(b,$,A.v(a.y.Q.z.bP($.uB()),1,10,1,3))},
gbC(){return this.a}}
A.iL.prototype={
gaV(){return!1},
gbv(){return"axe"},
f6(){return new A.R(this.oY(),t.oc)},
oY(){var s=this
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
return a.b=s.d2("You can't see where you're swinging."),1
case 8:r=1
break
case 7:j=$.U()
r=(i.a.e.a&j.a)===0?9:10
break
case 9:r=11
return a.b=s.d2("There isn't enough room to swing your weapon."),1
case 11:r=1
break
case 10:case 4:++m
r=3
break
case 5:o=[o.gb9(),o,o.gba()],m=0
case 12:if(!(m<3)){r=14
break}l=o[m]
s.jv(B.bE,l,s.a.y.F(0,l))
r=15
return a.aL(s.kR(2))
case 15:s.hd(s.a.y.F(0,l))
r=16
return a.aL(s.kR(3))
case 16:case 13:++m
r=12
break
case 14:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
t(a){return A.J(this.a)+" slashes "+this.y.t(0)}}
A.lw.prototype={}
A.lx.prototype={}
A.j1.prototype={
gM(){return"Club Bash"},
gW(){return"TODO"},
hB(a,b){return new A.j2(b,A.v(a.y.Q.z.bP($.uC()),1,15,1,2))},
gbC(){return this.a}}
A.j2.prototype={
gaV(){return!1},
gbv(){return"club"},
V(){var s,r,q,p,o,n=this,m=n.z
if(m===0){m=n.Q=n.hd(n.a.y.F(0,n.y))
if(m==null)return n.d2("There's no one there!")
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
o=B.c.P(B.c.cc(300*s,q.gbp()),5,100)
s=m.x
s===$&&A.b()
if(s.bk(p,q.gb4())&&s.w.B(p.a,p.b)==null&&$.m().T(100)<o){q.dd(m,p)
q.a.a=0
n.a_("{1} is knocked back!",q)
n.jv(B.bz,r,n.a.y.F(0,r))}}return++n.z>10?B.n:B.a3},
t(a){return A.J(this.a)+" bashes "+this.y.t(0)}}
A.lG.prototype={}
A.kZ.prototype={
gM(){return"Spear Stab"},
gW(){return"TODO"},
hB(a,b){return new A.l_(b,$,A.v(a.y.Q.z.bP($.uK()),1,15,1,3))},
gbC(){return this.a}}
A.l_.prototype={
gaV(){return!1},
gbv(){return"spear"},
f6(){return new A.R(this.oZ(),t.oc)},
oZ(){var s=this
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
return a.b=s.d2("You can't see far enough to aim."),1
case 8:r=1
break
case 7:j=$.U()
r=(i.a.e.a&j.a)===0?9:10
break
case 9:r=11
return a.b=s.d2("There isn't enough room to use your weapon."),1
case 11:r=1
break
case 10:case 4:++l
r=3
break
case 5:j=t.V,l=1
case 12:if(!(l<=2)){r=14
break}i=s.a
k=i.y.F(0,new A.d(n*l,m*l))
f=j.a(i).Q.f.gcM().gN(0)
if(!f.q())A.a_(A.cE())
s.o4(B.bF,o,f.gH(),k)
r=15
return a.b=B.a3,1
case 15:s.hd(k)
r=16
return a.b=B.a3,1
case 16:case 13:++l
r=12
break
case 14:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
t(a){return A.J(this.a)+" spears "+this.y.t(0)}}
A.mr.prototype={}
A.ms.prototype={}
A.lo.prototype={
gM(){return"Whip Crack"},
gW(){return"TODO"},
e8(a,b){return 3},
f7(a,b){var s,r,q,p,o,n,m,l,k=a.x
k===$&&A.b()
k=k.w.B(b.gm(),b.gn())
s=a.y
r=s.Q
q=r.f.gcM()
p=A.a6(q,q.$ti.h("k.E"))
o=s.eP(k)
n=A.dV()
for(k=p.length,m=0;m<k;++m){if(p[m].a.r!=="whip")continue
if(!(m<o.length))return A.c(o,m)
n.b=o[m]
break}l=r.z.bP($.uW())
n.fZ().cO(A.v(l,1,15,1,3),"whip mastery")
return A.tK(b,n.fZ(),!0,3)},
gbC(){return this.a}}
A.mA.prototype={}
A.iN.prototype={
gaV(){return!1},
V(){var s,r,q=this
while(q.y<6){s={}
s.a=!1
r=new A.nh(s,q)
q.z=r.$2(q.z,1)
q.Q=r.$2(q.Q,-1)
if(s.a)return B.a3
q.y+=0.1}return B.n}}
A.nh.prototype={
$2(a,b){var s,r
if(!a)return!1
s=new A.ni(this.a,this.b,b)
r=!s.$2(0,0)||!1
if(s.$2(-0.1,0))r=!1
if(s.$2(0.1,0))r=!1
if(s.$2(0,-0.1))r=!1
return!(s.$2(0,0.1)?!1:r)},
$S:51}
A.ni.prototype={
$2(a,b){var s,r=this.b,q=r.y,p=r.e.F(0,new A.d(B.e.O(r.f*q+a),B.e.O(r.r*q+b)).aI(0,this.c))
q=r.c
q===$&&A.b()
q=q.x
q===$&&A.b()
q=q.f.B(p.a,p.b)
s=$.U()
if((q.a.e.a&s.a)===0)return!1
if(r.x.j(0,p)){r.k0(r.w,p,r.y,$.m().bq(30,40))
this.a.a=!0}return!0},
$S:53}
A.lz.prototype={}
A.iR.prototype={
gaz(){var s=this.at
return s==null?this.Q.gaz():s},
ks(a,b){var s=this.Q.gb1()
this.o3(B.br,b.S(0,a).gki(),s,b)},
hD(a,b){var s=this
s.Q.dY(s,s.a,b,s.as)
return!0}}
A.fF.prototype={
gf0(){return 1},
V(){var s,r,q=this,p=q.gf0(),o=q.gd0()
if(q.gbe().a<=0){s=q.gbe()
s.a=o
s.b=p
q.d5()
return B.n}if(q.gbe().b>=p){o=B.c.A(B.c.cc(o*p,q.gbe().b),2)
if(o===0)return q.ei()
q.gbe().a+=o
q.d6()
return B.n}r=B.c.cc(q.gbe().a*q.gbe().b,p)
s=q.gbe()
s.a=r+B.c.A(o,2)
s.b=p
q.f8()
return B.n},
f8(){}}
A.ez.prototype={
gbe(){return this.a.f},
gf0(){return this.x},
gd0(){return this.y},
d5(){return this.a_("{1} start[s] moving faster.",this.a)},
d6(){return this.a_("{1} [feel]s the haste lasting longer.",this.a)},
f8(){return this.a_("{1} move[s] even faster.",this.a)}}
A.ex.prototype={
gbe(){return this.a.c},
V(){this.jK($.c9())
return this.ld()},
gf0(){return 1+B.c.A(this.x,40)},
gd0(){var s=this.x
return 3+$.m().cK(s*2,B.c.A(s,2))},
d5(){return this.a_("{1} [are|is] frozen!",this.a)},
d6(){return this.a_("{1} feel[s] the cold linger!",this.a)},
f8(){return this.a_("{1} feel[s] the cold intensify!",this.a)}}
A.eR.prototype={
gbe(){return this.a.w},
gf0(){return 1+B.c.A(this.x,20)},
gd0(){var s=this.x
return 1+$.m().cK(s,B.c.A(s,2))},
d5(){return this.a_("{1} [are|is] poisoned!",this.a)},
d6(){return this.a_("{1} feel[s] the poison linger!",this.a)},
f8(){return this.a_("{1} feel[s] the poison intensify!",this.a)}}
A.ee.prototype={
gbe(){return this.a.b},
gd0(){var s=this.x
return 3+$.m().cK(s*2,B.c.A(s,2))},
d5(){this.a_("{1 his} vision dims!",this.a)
var s=this.c
s===$&&A.b()
s=s.x
s===$&&A.b()
s.gav().w=!0},
d6(){return this.a_("{1 his} vision dims!",this.a)}}
A.eo.prototype={
gbe(){return this.a.d},
gd0(){var s=this.x
return 3+$.m().cK(s*2,B.c.A(s,2))},
d5(){return this.a_("{1} [are|is] dazzled by the light!",this.a)},
d6(){return this.a_("{1} [are|is] dazzled by the light!",this.a)}}
A.eY.prototype={
gbe(){return this.a.fd(this.y)},
gd0(){return this.x},
d5(){var s,r,q=this
q.a_("{1} [are|is] resistant to "+q.y.t(0)+".",q.a)
s=q.a
r=s.w
if(r.a>0){r.b=r.a=0
q.a_("{1} [are|is] no longer poisoned.",s)}},
d6(){return this.a_("{1} feel[s] the resistance extend.",this.a)}}
A.lS.prototype={}
A.eq.prototype={
aK(){return"DetectType."+this.b}}
A.ep.prototype={
glQ(){var s,r=this,q=r.r
if(q===$){s=r.lP()
r.r!==$&&A.e9()
r.r=s
q=s}return q},
gaV(){return!1},
V(){var s,r,q=this.glQ()
if(q.length===0)return B.n
for(q=J.ap(B.a.kE(q));q.q();){s=q.gH()
r=this.c
r===$&&A.b()
r=r.x
r===$&&A.b()
r.d1(s.gm(),s.gn(),!0)
this.hb(B.bt,s)}return B.a3},
lP(){var s,r,q,p,o,n,m,l,k=this,j={},i=A.C(t.S,t.A),h=new A.nB(k,i),g=k.e,f=0
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
if(m.a.b!==B.aS)continue;++f
h.$1(new A.d(q,p))}}j.a=0
if(g.G(0,B.aw)){g=k.c
g===$&&A.b()
g=g.x
g===$&&A.b()
g.eZ(new A.nD(j,k,h))}if(f>0){g=j.a
s=k.a
if(g>0)k.a_("{1} sense[s] hidden secrets in the dark!",s)
else k.a_("{1} sense[s] places to escape!",s)}else if(j.a>0)k.a_("{1} sense[s] the treasures held in the dark!",k.a)
else k.l6("The darkness holds no secrets.")
g=i.$ti.h("b0<1>")
l=A.a6(new A.b0(i,g),g.h("k.E"))
B.a.dg(l,new A.nE())
g=A.M(l)
s=g.h("aN<1,D<d>>")
g=A.a6(new A.aN(l,g.h("D<d>(1)").a(new A.nF(i)),s),s.h("aF.E"))
return g}}
A.nB.prototype={
$1(a){var s=this.a,r=s.a.y.S(0,a).gaF()
s=s.f
if(s!=null)s=r>s*s
else s=!1
if(s)return
s=this.b
s.b7(r,new A.nC())
s=s.p(0,r)
s.toString
J.v0(s,a)},
$S:11}
A.nC.prototype={
$0(){return A.a([],t.l)},
$S:42}
A.nD.prototype={
$2(a,b){var s=this.b.c
s===$&&A.b()
s=s.x
s===$&&A.b()
if(s.f.B(b.gm(),b.gn()).r)return;++this.a.a
this.c.$1(b)},
$S:15}
A.nE.prototype={
$2(a,b){A.w(a)
return B.c.ai(A.w(b),a)},
$S:41}
A.nF.prototype={
$1(a){var s=this.a.p(0,A.w(a))
s.toString
return s},
$S:72}
A.es.prototype={
V(){var s=this,r=t.V,q=r.a(s.a),p=q.ay
if(p===400)s.a_("{1} [are|is] already full!",q)
else if(p+s.e>400)s.a_("{1} [are|is] stuffed!",q)
else s.a_("{1} feel[s] satiated.",q)
r=r.a(s.a)
r.ay=B.c.P(r.ay+s.e,0,400)
return B.n}}
A.fL.prototype={
k0(a,b,c,d){var s,r,q=this
q.o_(B.bs,a.gb1(),b)
s=q.c
s===$&&A.b()
s=s.x
s===$&&A.b()
s=s.w.B(b.gm(),b.gn())
if(s!=null&&s!==q.a)a.dY(q,q.a,s,!1)
r=a.gb1().r.$4(b,a,c,d)
if(r!=null)q.h9(r)},
k_(a,b,c){return this.k0(a,b,c,0)}}
A.eh.prototype={
V(){var s,r
this.jK($.b4())
s=this.a
r=s.c
if(r.a>0){r.b=r.a=0
return this.cq("The fire warms {1} back up.",s)}return B.n}}
A.ei.prototype={
V(){var s,r,q=this,p=q.e,o=$.b4(),n=q.r+q.hh(p,o),m=q.c
m===$&&A.b()
s=m.x
s===$&&A.b()
p=s.f.B(p.gm(),p.gn())
s=p.a
r=$.tz().p(0,s)
if(r==null)r=0
if(n<=0)s=r>0&&q.f>$.m().T(r)
else s=!0
if(s){s=p.a
s=$.uN().p(0,s)
n+=s==null?0:s
s=$.m().bq(B.c.A(n,2),n)
p.x=s
s-=B.c.A(q.f,4)
p.x=s
if(s<=0)p.x=1
p.w=o
p=m.x
p===$&&A.b()
p.gav().f=!0}return B.n}}
A.iU.prototype={
V(){var s,r,q=this,p=q.c
p===$&&A.b()
s=p.x
s===$&&A.b()
r=q.e
s=s.w.B(r.gm(),r.gn())
if(s!=null)A.bF(A.bb(new A.aG(A.aO("fire",B.x,B.aF).a6(1)),"burns",10,$.b4(),null)).dY(q,null,s,!1)
p=p.x
p===$&&A.b()
p=p.f.B(r.gm(),r.gn())
p.x=p.x+q.hh(r,$.b4())
return B.n}}
A.ey.prototype={
V(){this.hh(this.e,$.c9())
return B.n}}
A.eS.prototype={
V(){var s,r=this.c
r===$&&A.b()
r=r.x
r===$&&A.b()
s=this.e
s=r.f.B(s.gm(),s.gn())
if(s.w===$.b4()&&s.x>0)return B.n
r=$.U()
if((s.a.e.a&r.a)!==0){s.w=$.bz()
s.x=B.c.P(s.x+this.f*4,0,255)}return B.n}}
A.kA.prototype={
V(){var s,r=this,q=r.c
q===$&&A.b()
q=q.x
q===$&&A.b()
s=r.e
s=q.w.B(s.gm(),s.gn())
if(s!=null){q=$.bz()
if(s.c6(q)>0)r.a_("{1} [are|is] unaffected by the poison.",s)
else A.bF(A.bb(new A.aG(A.aO("poison",B.x,B.aF).a6(1)),"chokes",r.f,q,null)).dY(r,null,s,!1)}return B.n}}
A.f9.prototype={
gaV(){return!1},
V(){var s,r,q=this,p=q.a,o=(p.gb4().a&$.U().a)!==0?6:3,n=p.gb4(),m=$.bA(),l=q.c
l===$&&A.b()
s=l.x
s===$&&A.b()
m=A.ck(s,p.y,new A.ad(n.a&~m.a),null,null,o).gcF()
n=m.$ti
p=n.h("aj<k.E>")
r=A.a6(new A.aj(m,n.h("B(k.E)").a(new A.rf(q)),p),p.h("k.E"))
if(r.length===0)return B.bk
q.a_("{1} [are|is] thrown by the wind!",q.a)
p=q.a
q.ju(B.bI,p,p.y)
p=q.a
p.toString
n=$.m()
t.A.a(r)
n=n.T(r.length)
if(!(n>=0&&n<r.length))return A.c(r,n)
p.dd(l,t.u.a(r[n]))
return B.n}}
A.rf.prototype={
$1(a){var s
t.u.a(a)
s=this.a.c
s===$&&A.b()
s=s.x
s===$&&A.b()
return s.w.B(a.gm(),a.gn())==null},
$S:1}
A.eH.prototype={
V(){var s,r,q=this.c
q===$&&A.b()
s=q.x
s===$&&A.b()
r=this.e
s.f.B(r.gm(),r.gn()).nY(this.f)
q=q.x
q===$&&A.b()
q.gav().f=!0
return B.n}}
A.lB.prototype={}
A.lC.prototype={}
A.lD.prototype={}
A.lT.prototype={}
A.md.prototype={}
A.me.prototype={}
A.jv.prototype={
gaV(){return!1},
V(){var s,r,q,p,o,n=this,m=(n.z+1)%n.y
n.z=m
if(m!==0)return B.a3
m=n.w
if(m==null){m=n.c
m===$&&A.b()
m=m.x
m===$&&A.b()
m=A.ck(m,n.e,n.x,!1,null,null)
n.r!==$&&A.ar()
n.r=m
m=m.gcF()
s=m.$ti
r=s.h("hI<k.E>")
m=A.a6(new A.hI(m,s.h("B(k.E)").a(new A.od(n)),r),r.h("k.E"))
n.w=m}s=n.r
s===$&&A.b()
m=s.cj(B.a.gaB(m))
m.toString
for(q=0;r=n.w,q<r.length;++q)if(s.cj(r[q])!==m)break
s=n.w
s.toString
s=B.a.fs(s,0,q)
r=s.length
p=n.f
o=0
for(;o<s.length;s.length===r||(0,A.o)(s),++o)n.k_(p,s[o],m)
m=n.w
m.toString
m=B.a.lc(m,q)
n.w=m
if(m.length===0)return B.n
return B.a3}}
A.od.prototype={
$1(a){var s,r
t.u.a(a)
s=this.a
r=s.r
r===$&&A.b()
r=r.cj(a)
r.toString
return r<=s.f.gaz()},
$S:1}
A.ew.prototype={
V(){var s=this
return s.bd(A.oc(s.a.y,A.bF(s.e),s.f,null))}}
A.ev.prototype={
V(){var s=this
return s.bd(A.oc(s.f,A.bF(s.e),s.r,null))}}
A.lR.prototype={}
A.eA.prototype={
V(){var s=this,r=s.a,q=r.w,p=q.a>0&&s.f
if(p){q.b=q.a=0
s.a_("{1} [are|is] cleansed of poison.",r)}r=s.a
if(r.z!==r.gbp()&&s.e>0){r=s.a
q=s.e
r.z=B.c.P(r.z+q,0,r.gbp())
s.nZ(B.bw,s.a,q)
s.a_("{1} feel[s] better.",s.a)
p=!0}if(p)return B.n
else return s.cq("{1} [don't|doesn't] feel any different.",s.a)}}
A.jL.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i=this
i.a_("{1} "+i.f+"!",i.a)
i.ct(B.by,i.a)
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
if(m!==l&&m instanceof A.aa&&m.y.S(0,p.a(l).y).e9(0,o)){k=s.x
k===$&&A.b()
l=l.y
j=m.y
j=k.geE().pt(l,j)
j=m.ch+j*m.Q.x
m.ch=j
m.ch=B.e.P(j,0,1)}}return B.n}}
A.jO.prototype={
ky(a){this.hH(a,0)},
hH(a,b){var s,r,q=this.c
q===$&&A.b()
s=q.x
s===$&&A.b()
s=s.f.B(a.gm(),a.gn())
r=A.k4(3)
s.f=Math.max(s.f,r)
q=q.x
q===$&&A.b()
q.gav().f=!0},
gaz(){return this.at}}
A.eB.prototype={
gaV(){return!1},
V(){var s,r,q=this,p=q.c
p===$&&A.b()
s=p.x
s===$&&A.b()
r=q.a.y
r=s.f.B(r.gm(),r.gn())
s=A.k4(3)
r.f=Math.max(r.f,s)
p=p.x
p===$&&A.b()
p.gav().f=!0
p=q.a.y
s=new A.jO(q.e,p,p,A.b7(t.u),A.a([],t.gk))
s.ic(p,p,1)
return q.bd(s)}}
A.eI.prototype={
gnD(){var s,r=this,q=r.w
if(q===$){s=r.mi()
r.w!==$&&A.e9()
r.w=s
q=s}return q},
gaV(){return!1},
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(s=f.f,r=0;r<2;++r){q=f.r
p=f.gnD()
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
l.d1(m.gm(),m.gn(),!0)
f.hb(B.bA,m)
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
j.d1(g.a,g.b,!0)}}++f.r}return B.a3},
mi(){var s,r,q,p,o,n,m=this,l=t.l,k=A.a([A.a([],l)],t.G)
if(0>=k.length)return A.c(k,0)
B.a.j(k[0],m.a.y)
s=m.c
s===$&&A.b()
s=s.x
s===$&&A.b()
r=m.a.y
q=m.e
p=new A.ka(q,s,r,new A.cg(A.a([],t.c),t.r),A.a([],l))
p.fw(s,r,q)
for(s=p.gcF(),r=s.$ti,s=new A.ag(s.a(),r.h("ag<1>")),r=r.c;s.q();){q=s.b
if(q==null)q=r.a(q)
o=p.cj(q)
o.toString
for(n=k.length;n<=o;++n)B.a.j(k,A.a([],l))
if(!(o>=0&&o<k.length))return A.c(k,o)
B.a.j(k[o],q)}for(l=t.A,n=0;n<k.length;++n){s=$.m()
B.a.bJ(l.a(k[n]),s.a)}return k}}
A.ka.prototype={
hP(a,b,c,d){var s=$.x8()
if((c.a.e.a&s.a)===0)return null
if(a>=this.r*2)return null
return d?3:2}}
A.dL.prototype={
aK(){return"Missive."+this.b}}
A.kd.prototype={
gdW(){return 1},
V(){var s,r=this,q=$.m(),p=B.i0.p(0,r.f)
p.toString
t.m.a(p)
s=p.length
q=q.T(s)
if(!(q>=0&&q<s))return A.c(p,q)
return r.ft(p[q],r.a,r.e)}}
A.eP.prototype={
gaV(){return!1},
V(){var s,r,q,p,o,n,m=this,l=A.b7(t.f0),k=m.c
k===$&&A.b()
s=k.x
s===$&&A.b()
s=s.b
r=s.length
q=t.V
p=0
for(;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
if(o===q.a(m.a))continue
if(k.cA(o))l.j(0,o)}s=q.a(m.a).r
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
if(k.cA(o)&&!l.G(0,o)){m.ct(B.bC,o)
n=!0}}k=m.a
if(n)return m.cq("{1} perceive[s] monsters beyond your sight!",k)
else return m.cq("{1} do[es]n't perceive anything.",k)}}
A.kB.prototype={
V(){var s=this,r=t.B.a(s.a),q=s.e
r.Q=q
r.z=B.c.P(B.c.P(r.z,0,q.f),0,r.gbp())
r.ax.aS(0)
r.h1()
s.ct(B.bD,s.a)
return B.n}}
A.iE.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.h9(new A.kB(g.e))
g.a_(g.r,g.a)
s=A.a([],t.l)
for(r=g.f,q=r.at,p=0;p<8;++p){o=B.a5[p]
n=g.a.y.F(0,o)
m=g.c
m===$&&A.b()
m=m.x
m===$&&A.b()
if(m.bk(n,q)){m=m.w
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
i=r.fo(s[q],t.B.a(g.a))
h=new A.cv()
i.at=h
h.a=i
q=g.c
q===$&&A.b()
q=q.x
q===$&&A.b()
q.dB(i)
g.ct(B.b0,i)}return B.n}}
A.kL.prototype={
gaV(){return!1},
ic(a,b,c){var s,r,q,p,o,n,m,l=this,k=B.e.aR(6.283185307179586*l.gaz()*c*2)
if(c<1){s=l.f
r=l.e
q=s.S(0,r)
p=!r.Z(0,s)?Math.atan2(q.a,q.b):0
for(s=k-1,r=l.x,o=6.283185307179586*c,n=0;n<k;++n)B.a.j(r,p+(n/s-0.5)*o)}else{m=6.283185307179586/k
for(s=l.x,n=0;n<k;++n)B.a.j(s,n*m)}},
V(){var s,r=this
if(r.w===0){r.ky(r.e);++r.w
return B.a3}s=r.x
B.a.hJ(s,new A.pX(r))
if(++r.w>r.gaz()||s.length===0)return B.n
return B.a3},
ky(a){}}
A.pX.prototype={
$1(a){var s,r,q,p,o,n
A.by(a)
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
s.hH(o,Math.sqrt(o.S(0,r).gaF()))
return!1},
$S:74}
A.kK.prototype={
gaz(){return this.at.gaz()},
hH(a,b){this.k_(this.at,a,b)}}
A.f0.prototype={
gaV(){return!1},
V(){var s=this.a.y
return this.bd(A.u0(A.bF(this.e),s,s,1))}}
A.f_.prototype={
gaV(){return!1},
V(){var s=this.f
return this.bd(A.u0(A.bF(this.e),s,s,1))}}
A.mk.prototype={}
A.kX.prototype={
V(){var s,r=this,q=t.B
if($.m().T(q.a(r.a).as)!==0)return B.n
q=q.a(r.a);++q.as
s=r.f.fo(r.e,q)
q=r.c
q===$&&A.b()
q=q.x
q===$&&A.b()
q.dB(s)
r.ct(B.b0,s)
return B.n}}
A.f6.prototype={
V(){var s,r,q,p,o,n,m,l=this,k=A.a([],t.l),j=l.a.y,i=l.e,h=j.gm()-i,g=j.gn()-i,f=j.gm(),e=j.gn(),d=l.c
d===$&&A.b()
s=d.x
s===$&&A.b()
for(h=A.ab(A.vP(new A.Y(new A.d(h,g),new A.d(f+i-h,e+i-g)),s.f.b));h.q();){g=h.b
f=h.c
r=new A.d(g,f)
e=d.x
e===$&&A.b()
s=l.a
q=s.cm()
if(e.bk(r,s.e.a>0?new A.ad(q.a|$.U().a):q)){s=e.w
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
if(r.S(0,l.a.y).bg(0,i))continue
B.a.j(k,r)}i=k.length
if(i===0)return l.dP("{1} couldn't escape.",l.a)
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
if(r.S(0,i).bg(0,o.S(0,i)))o=r}i=l.a
m=i.y
i.dd(d,o)
l.ju(B.bG,l.a,m)
return l.cq("{1} teleport[s]!",l.a)}}
A.mc.prototype={
V(){var s,r,q,p=this,o=p.c
o===$&&A.b()
s=o.x
s===$&&A.b()
r=p.e
s.f.B(r.gm(),r.gn()).a=p.giV()
p.hb(B.bB,r)
s=$.m()
q=B.e.O(A.v(o.w,1,100,p.giS(),p.giR()))
if(s.T(100)<q)p.a_("The "+p.gfV()+" is empty.",p.a)
else{s=o.x
s===$&&A.b()
s.dZ(r,p.iu(),o.w)
p.a_("{1} open[s] the "+p.gfV()+".",p.a)}return B.n}}
A.eM.prototype={
gfV(){return"barrel"},
giV(){return $.tC()},
giS(){return 40},
giR(){return 10},
iu(){var s=this.c
s===$&&A.b()
return A.a7("food",s.w,null)}}
A.eN.prototype={
gfV(){return"chest"},
giV(){return $.tD()},
giS(){return 20},
giR(){return 2},
iu(){var s=this.c
s===$&&A.b()
return A.w5(A.A([A.a7("treasure",s.w,null),0.5,A.a7("magic",s.w,null),0.2,A.a7("equipment",s.w,null),0.3],t.iZ,t.i))}}
A.jg.prototype={
gM(){return"Dual Wield"},
gW(){return"Attack with a weapon in each hand as effectively as lesser weaklings do with only a single weapon in their puny arms."},
kf(a,b,c){var s=t.aa.a(b).length
if(s===0)return c
return c/s}}
A.jy.prototype={
gM(){return"Foolhardy"},
gW(){return"An aura of good luck makes you 10% harder to hit."},
eQ(a){return B.hX}}
A.fH.prototype={}
A.jA.prototype={
om(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
if(!a1.oX(l[a].a))return!1}return!0},
p8(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
A.fD.prototype={
oX(a){var s=this.b
if(s!=null)s=(a.e.a&s.a)===0
else s=!1
if(s)return!1
s=this.c
if(s.length!==0&&!B.a.G(s,a))return!1
return!0}}
A.dh.prototype={
aK(){return"Symmetry."+this.b}}
A.ta.prototype={
$1(a){return B.j.kL(A.a3(a))},
$S:5}
A.nN.prototype={
$1(a){A.w(a)
return new A.f9()},
$S:80}
A.nR.prototype={
$1(a){A.w(a)
return new A.eh()},
$S:87}
A.nS.prototype={
$4(a,b,c,d){t.u.a(a)
t.Z.a(b)
A.e0(c)
A.w(d)
return new A.ei(a,B.e.L(b.gcW()),d)},
$S:88}
A.nO.prototype={
$1(a){return new A.ex(A.w(a))},
$S:89}
A.nP.prototype={
$4(a,b,c,d){t.u.a(a)
t.Z.a(b)
A.e0(c)
A.w(d)
return new A.ey(a)},
$S:90}
A.nV.prototype={
$1(a){return new A.eR(A.w(a))},
$S:91}
A.nW.prototype={
$4(a,b,c,d){t.u.a(a)
t.Z.a(b)
A.e0(c)
A.w(d)
return new A.eS(a,B.e.L(b.gcW()))},
$S:96}
A.nQ.prototype={
$1(a){return new A.ee(A.w(a))},
$S:100}
A.nT.prototype={
$1(a){return new A.eo(A.w(a))},
$S:102}
A.nU.prototype={
$4(a,b,c,d){var s,r
t.u.a(a)
t.Z.a(b)
A.e0(c)
A.w(d)
s=B.c.P(1+B.e.L(b.gcW())*4,0,255)
r=B.e.P(128+b.gcW()*16,0,255)
return new A.eH(a,B.e.L(A.v(b.gaz()-c,0,b.gaz(),s,r)))},
$S:104}
A.rm.prototype={
cp(a,b,c,d){var s=this
s.d=b
s.c=c
s.e=d
s.z=a},
bF(a,b,c){return this.cp(a,b,null,c)},
pn(a){return this.cp(a,null,null,null)},
e5(a,b,c){return this.cp(null,a,b,c)},
co(a,b){return this.cp(a,null,null,b)},
a8(a){return this.cp(null,a,null,null)},
kJ(a){return this.cp(null,null,null,a)},
ff(a,b){return this.cp(null,a,null,b)}}
A.nm.prototype={
a2(a){var s,r,q,p,o=this,n="item/"+a
$.bh().c3(n)
s=A.a(a.split("/"),t.s)
r=B.a.gcB(s)
o.ay!==$&&A.ar()
o.ay=r
if(B.a.G(s,"shield")||B.a.G(s,"light"))o.at="hand"
else if(B.a.G(s,"weapon")){o.at="hand"
r=B.a.c4(s,"weapon")+1
if(!(r>=0&&r<s.length))return A.c(s,r)
o.ax=s[r]}else for(q=0;q<8;++q){p=B.hW[q]
if(B.a.G(s,p)){o.at=p
break}}$.dp().c3(n)
$.dq().c3(n)}}
A.oA.prototype={
E(a,b){var s,r=this
r.dy!==$&&A.ar()
r.dy=a
s=b==null?100:b
r.fr!==$&&A.ar()
r.fr=s},
v(a){return this.E(a,null)},
k6(a){var s
t.kc.a(a)
s=A.v3(this.Q+" intrinsic affix",null,0)
a.$1(s)
this.dx=s.ek()},
a5(a,b){var s=$.aT.u().as
s.toString
this.ay=A.bb(null,s,a,null,null)
this.cx=b},
eY(a){this.ax=new A.bH("Provides "+a+" turns of food.",t.Y.a(new A.oG(a)))},
eR(a,b){var s,r,q
t.jP.a(a)
s=a.length
if(s===1){if(0>=s)return A.c(a,0)
r=a[0]===B.as?"exits":"items"}else r="exits and items"
q="Detects "+r
if(b!=null)q+=" up to "+A.J(b)+" steps away"
this.ax=new A.bH(q+".",t.Y.a(new A.oD(a,b)))},
hi(a){return this.eR(a,null)},
kw(a,b){this.ax=new A.bH("Perceives the location of monsters, even those that are otherwise hidden.",t.Y.a(new A.oL(b,a)))},
hE(a){return this.kw(a,5)},
bD(a){this.ax=new A.bH("Grantes resistance to "+a.t(0)+" for 40 turns.",t.Y.a(new A.oM(a)))},
ka(a,b){var s="Imparts knowledge of the dungeon up to "+a+" steps from the hero."
if(b)s+=" Illuminates the dungeon."
this.ax=new A.bH(s,t.Y.a(new A.oK(a,b)))},
hx(a){return this.ka(a,!1)},
hu(a,b){this.ax=new A.bH("Raises speed by "+a+" for "+b+" turns.",t.Y.a(new A.oH(a,b)))},
fe(a){this.ax=new A.bH("Attempts to teleport up to "+a+" steps away.",t.Y.a(new A.oN(a)))},
dS(a,b){this.ax=new A.bH("Instantly heals "+a+" lost health.",t.Y.a(new A.oI(a,b)))},
jW(a){return this.dS(a,!1)},
dD(a,b,c,d){var s=A.bb(new A.aG(A.aO(b,B.x,B.U).a6(1)),c,d,a,3)
this.ax=new A.bH("Unleashes a ball of "+a.t(0)+" that inflicts "+d+" damage out to 3 steps from the hero.",t.Y.a(new A.oB(s)))
this.f=t.bj.a(new A.oC(s))},
dQ(a,b,c,d,e){var s={},r=A.bb(new A.aG(A.aO(b,B.x,B.U).a6(1)),c,d,a,5),q=$.aX()
s.a=q
if(e)s.a=new A.ad(q.a|$.U().a)
this.ax=new A.bH("Unleashes a flow of "+a.t(0)+" that inflicts "+d+" damage out to 5 steps from the hero.",t.Y.a(new A.oE(s,r)))
this.f=t.bj.a(new A.oF(s,r))},
jU(a,b,c,d){return this.dQ(a,b,c,d,!1)},
d4(a,b){this.r=a
if(b!=null)this.ax=new A.bH("Illuminates out to a range of "+A.J(b)+".",t.Y.a(new A.oJ(b)))},
oT(a){return this.d4(a,null)},
ek(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=A.cB($.aT.u().Q,a3.as,null),a5=a3.d
if(a5==null)a5=$.aT.u().d
if(a5!=null){s=A.aO(a3.Q.toLowerCase(),B.x,B.U).a6(1)
r=$.aT.u().as
A:{if(r!=null){q=A.vG(r,B.x)
break A}q="hits"
break A}p=a3.e
if(p==null)p=$.aT.u().e
o=a3.c
if(o==null)o=$.aT.u().c
if(o==null)o=$.ax()
n=A.bb(new A.aG(s),q,a5,o,p)
p=$.aT.u().z
s=p==null?a3.z:p
if(s==null)s=0
q=a3.f
m=new A.r8(s,n,q==null?$.aT.u().f:q)}else m=null
s=a3.db?B.ck:B.U
s=A.aO(a3.Q,B.x,s)
q=a3.dy
q===$&&A.b()
p=$.vt
$.vt=p+1
o=$.aT.u().at
l=$.aT.u().ax
k=a3.ax
j=a3.ay
i=a3.ch
h=a3.cy
if(h==null)h=0
g=a3.b
if(g==null)g=$.aT.u().b
if(g==null)g=1
f=a3.dx
e=a3.CW
if(e==null)e=0
d=a3.cx
if(d==null)d=0
c=a3.r
if(c==null)c=$.aT.u().r
b=a3.w
if(b==null)b=$.aT.u().w
a=$.aT.u().ch
a0=$.aT.u().y
if(a0==null)a0=a3.y
a1=a3.db
a2=A.C(t.h,t.S)
if(c==null)c=0
if(b==null)b=0
a2.U(0,$.aT.u().a)
a2.U(0,a3.a)
return new A.aL(s,a4,q,p,o,a0===!0,l,k,j,m,i,h,a3.at,e,d,c,a,g,a2,b,f,a1)}}
A.oG.prototype={
$0(){return new A.es(this.a)},
$S:107}
A.oD.prototype={
$0(){var s=this.a
return new A.ep(A.yH(s,A.M(s).c),this.b)},
$S:109}
A.oL.prototype={
$0(){return new A.eP(this.a,this.b)},
$S:110}
A.oM.prototype={
$0(){return new A.eY(40,this.a)},
$S:111}
A.oK.prototype={
$0(){return new A.eI(this.a,this.b)},
$S:112}
A.oH.prototype={
$0(){return A.vq(this.a,this.b)},
$S:115}
A.oN.prototype={
$0(){return A.w_(this.a)},
$S:121}
A.oI.prototype={
$0(){return A.vr(this.a,this.b)},
$S:127}
A.oB.prototype={
$0(){return A.vQ(this.a)},
$S:49}
A.oC.prototype={
$1(a){return new A.f_(this.a,a)},
$S:130}
A.oE.prototype={
$0(){return new A.ew(this.b,this.a.a)},
$S:134}
A.oF.prototype={
$1(a){return new A.ev(this.b,a,this.a.a)},
$S:135}
A.oJ.prototype={
$0(){return new A.eB(this.a)},
$S:136}
A.cd.prototype={
E(a,b){this.c=a
this.d=b==null?100:b},
v(a){return this.E(a,null)},
J(a,b){var s=t.Q.a(new A.n6(a)),r=t.oF.a(new A.n7(b))
this.at=s
this.ax=r},
Y(a,b,c){var s={}
s.a=c
if(c==null)s.a=a
this.f=new A.n5(s,a,b)},
b5(a,b){return this.Y(a,b,null)},
p6(a){return this.Y(a,null,null)},
p7(a,b){return this.Y(a,null,b)},
bA(a){this.r=new A.n4(a)},
bG(a){this.w=new A.n9(a)},
dJ(a,b){t.hM.a(b)
t.lg.a(a)
if(b!=null)this.y=b
if(a!=null)this.z=a},
aA(a){return this.dJ(null,a)},
dI(a){return this.dJ(a,null)},
ci(a,b){this.Q=a
this.ay.i(0,a,new A.n3(b))},
bz(a){return this.ci(a,null)},
bt(a,b){var s
t.lg.a(b)
s=this.ay
if(b!=null)s.i(0,a,b)
else s.i(0,a,new A.n8())},
R(a){return this.bt(a,null)},
ek(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a,a0=b.b
if(a0!=null){s=$.bc
r=A.bg(a,"_","["+A.J(s)+"]")
for(s=r+" (",q=r,p=1;a0.c9(q)!=null;){++p
q=s+p+")"}}else q=a
o=B.j.dO(a," _")
n=B.j.kL(A.bg(a,"_",""))
s=$.v4
$.v4=s+1
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
if(l==null)l=A.uj()
if(k==null)k=A.mF()
if(j==null)j=A.uj()
if(i==null)i=A.mF()
if(g==null)g=A.mF()
if(h==null)h=$.ax()
if(e==null)e=A.uj()
if(f==null)f=A.mF()
c=new A.ed(q,n,o,s,m,l,k,A.mF(),j,i,g,h,A.C(t.h,d),A.C(t.X,d),f,e,b.CW)
b.ay.ae(0,c.gl1())
b.ch.ae(0,c.gl3())
return c}}
A.n6.prototype={
$1(a){return this.a},
$S:4}
A.n7.prototype={
$1(a){return this.a},
$S:19}
A.n5.prototype={
$0(){var s,r,q,p=$.m().aw(this.b,this.a.a),o=this.c
if(o!=null){s=0
for(;;){r=s+1
if(s<10){q=$.m()
q=q.a.a1(o)===0}else q=!1
if(!q)break;++p
s=r}}return p},
$S:2}
A.n4.prototype={
$1(a){A.w(a)
return this.a},
$S:19}
A.n9.prototype={
$1(a){A.w(a)
return this.a},
$S:4}
A.n3.prototype={
$1(a){var s
A.w(a)
s=this.a
return s==null?1:s},
$S:4}
A.n8.prototype={
$1(a){A.w(a)
return 1},
$S:4}
A.t9.prototype={
$1(a){A.w(a)
return this.a},
$S(){return this.b.h("0(e)")}}
A.tr.prototype={
$1(a){return this.a+A.w(a)*this.b},
$S:19}
A.fX.prototype={
aK(){return"ItemQuality."+this.b}}
A.ro.prototype={
iO(a,b,c){var s,r,q,p,o=null
if(c.dx&&a!=null)a.e.j(0,c)
s=c.db
if(s!=null)return new A.L(c,o,o,s.fn(),1)
if(c.e==null)return new A.L(c,o,o,o,1)
r=this.j8($.dp(),c,b)
q=this.j8($.dq(),c,b)
if(r!=null&&q!=null&&$.m().T(4)!==0)if($.m().T(2)===0)r=o
else q=o
p=r==null?o:r.fn()
return new A.L(c,p,q==null?o:q.fn(),o,1)},
j8(a,b,c){var s,r
t.b_.a(a)
switch(this.b.a){case 0:s=B.il
break
case 1:s=B.iy
break
case 2:s=B.id
break
default:s=null}r=A.v(c,0,100,s.a,s.b)
if($.m().aO(1)>r)return null
return a.po(c,$.bh().l_(b.a.a6(1).a))}}
A.m2.prototype={
b0(a,b,c){var s
t.f.a(c)
s=this.c
if(s.dx&&a!=null&&a.e.G(0,s))return
c.$1(this.iO(a,b,s))},
$ibs:1}
A.mw.prototype={
b0(a,b,c){t.f.a(c).$1(this.iO(a,b,this.nk(a,b)))},
nk(a,b){var s,r,q,p,o
switch(this.b.a){case 0:s=0
break
case 1:s=3
break
case 2:s=15
break
default:s=null}for(r=this.c,q=this.a,p=s;;){s=$.bh()
s=s.da(q==null?b:q,null,r)
s.toString
o=s.dx
if(o&&a!=null&&a.e.G(0,s))continue
if(!o&&p>0){--p
continue}return s}},
$ibs:1}
A.aH.prototype={
b0(a,b,c){t.f.a(c)
if($.m().T(100)>=this.a)return
this.b.b0(a,b,c)},
$ibs:1}
A.hR.prototype={
b0(a,b,c){var s,r,q
t.f.a(c)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q)s[q].b0(a,b,c)},
$ibs:1}
A.mb.prototype={
lo(a){a.ae(0,new A.rI(this))},
b0(a,b,c){var s
t.f.a(c)
s=this.a.hT(1)
if(s==null)return
s.b0(a,b,c)},
$ibs:1}
A.rI.prototype={
$2(a,b){var s,r=null
t.iZ.a(a)
A.by(b)
s=this.a.a
s.cf(s.$ti.c.a(a),r,r,r,b,b,r)},
$S:52}
A.bx.prototype={
b0(a,b,c){var s,r,q,p,o
t.f.a(c)
s=this.a
r=s>3?4:5
if(s>6)r=3
q=$.m()
p=q.cK(s,B.c.A(s,2))+q.hM(0,r)
for(s=this.b,o=0;o<p;++o)s.b0(a,b,c)},
$ibs:1}
A.ju.prototype={}
A.tp.prototype={
$1(a){a.ch.i(0,B.Z,t.Q.a(A.fq(2,t.S)))
return a},
$S:32}
A.ts.prototype={
$2(a,b){A.a3(a)
A.by(b)
this.a.i(0,A.a7(a,null,null),b)},
$S:54}
A.tt.prototype={
$1(a){a.Y(8,3,12)
a.dI(A.Z())
a.ch.i(0,B.aa,t.Q.a(A.fq(2,t.S)))
a.bz($.cY())
return a},
$S:32}
A.rn.prototype={
aT(a,b){var s=this
if(b==null){s.y=1
s.z=a}else{s.y=a
s.z=b}},
aN(a){return this.aT(a,null)}}
A.ob.prototype={}
A.iS.prototype={
kb(a){this.ab(new A.lA(A.aJ(a)),null,null)},
ab(a,b,c){if(c!=null){b.toString
a=new A.i8(b,c,a)}else if(b!=null)a=new A.i8(1,b,a)
B.a.j(this.fr,a)},
ah(a,b,c){B.a.j(this.db,A.bb(null,a,b,c,null))},
D(a,b){return this.ah(a,b,null)},
dM(a,b,c,d){var s=new A.aH(d,A.a7(a,this.CW+c,null))
if(b>1)s=A.ut(b,s)
B.a.j(this.dy,s)},
C(a,b){return this.dM(a,1,0,b)},
hn(a,b){return this.dM(a,b,0,100)},
eS(a,b,c){return this.dM(a,b,c,100)},
ox(a,b,c){return this.dM(a,b,0,c)},
ho(a,b,c){return this.dM(a,1,b,c)},
jN(a,b,c,d){var s=new A.aH(d,A.a7(a,this.CW+c,B.hv))
if(b>1)s=A.ut(b,s)
B.a.j(this.dy,s)},
oy(a,b,c){return this.jN(a,b,c,100)},
hp(a,b,c){return this.jN(a,1,b,c)},
cL(a){B.a.j(this.x,"unique")
this.fx=a
this.ch=!0},
hU(){return this.cL(null)},
kT(a,b){return this.au(null,"whips",$.ax(),a,2,b)},
bj(a,b,c,d){var s=$.fw()
this.au(s.p(0,a)[0],s.p(0,a)[1],a,b,c,d)},
c2(a,b,c,d){var s=$.fw(),r=s.p(0,a)[0]
s=s.p(0,a)[1]
if(c==null)c=10
B.a.j(this.dx,new A.d7(A.bb(new A.aG(A.aO(r,B.x,B.U).a6(1)),s,b,a,c),d))},
ht(a){B.a.j(this.dx,new A.jI(1,10,a))
return null},
oM(){return this.ht(5)},
au(a,b,c,d,e,f){B.a.j(this.dx,new A.fC(A.bb(a!=null?new A.aG(A.aO(a,B.x,B.U).a6(1)):null,b,d,c,e),f))}}
A.lA.prototype={
cP(a,b){var s
t.or.a(b)
s=this.a.b
s===$&&A.b()
b.$1(s)},
$idO:1}
A.ac.prototype={
cP(a,b){var s,r,q
t.or.a(b)
for(s=this.a,r=0;r<10;++r){q=$.ca().da(a,!1,s)
if(q==null)continue
if(q.ax.f)continue
b.$1(q)
break}},
$idO:1}
A.i8.prototype={
cP(a,b){var s,r,q,p,o
t.or.a(b)
s=this.b
r=s>3?4:5
if(s>6)r=3
q=$.m()
p=q.aw(this.a,s)+q.hM(0,r)
for(s=this.c,o=0;o<p;++o)s.cP(a,b)},
$idO:1}
A.lt.prototype={
cP(a,b){var s,r,q
t.or.a(b)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q)s[q].cP(a,b)},
$idO:1}
A.bq.prototype={
gbm(){var s=this.b.b
s===$&&A.b()
return s.f*0.5},
bI(a,b){return!1},
i2(a,b){var s,r=a.Q,q=$.m()
if(q.aO(2)<=b/r.f)return!0
r=a.z
s=a.Q
if(q.aO(2)<=r/s.f)return!0
return!1},
bR(a,b){var s,r=this.b.b
r===$&&A.b()
s=this.c.b
s===$&&A.b()
return new A.iE(r,s,this.d)},
t(a){var s,r=this.b.b
r===$&&A.b()
s=this.c.b
s===$&&A.b()
return"Amputate "+r.a.a+" + "+s.a.a}}
A.fC.prototype={
gbm(){var s=this.b
return s.c*s.e.e*(1+s.d/20)},
bI(a,b){var s,r,q,p
if((b.b.a>0||b.d.a>0)&&$.m().aO(1)<b.gdf()){s=B.e.L(A.v(b.gdf(),0,1,0,90))
if($.m().T(100)<s)return!1}r=a.y.y
q=r.S(0,b.y)
if(q.bg(0,this.b.d)){A.ch(b,"bolt move too far")
return!1}if(q.ea(0,1.5)){A.ch(b,"bolt move too close")
return!1}p=a.x
p===$&&A.b()
if(!p.on(b,r)){A.ch(b,"bolt move can't target")
return!1}A.ch(b,"bolt move OK")
return!0},
bR(a,b){return A.tK(a.y.y,A.bF(this.b),!1,null)},
t(a){return"Bolt "+this.b.t(0)+" rate: "+this.a}}
A.d7.prototype={
gaz(){return this.b.d},
gbm(){var s=this.b
return s.c*3*s.e.e*(1+s.d/10)},
bI(a,b){var s,r,q
if((b.b.a>0||b.d.a>0)&&$.m().aO(1)<b.gdf()){s=B.e.L(A.v(b.gdf(),0,1,0,70))
if($.m().T(100)<s)return!1}r=a.y.y
if(r.S(0,b.y).bg(0,this.b.d)){A.ch(b,"cone move too far")
return!1}q=a.x
q===$&&A.b()
if(!q.eN(b,r)){A.ch(b,"cone move can't target")
return!1}A.ch(b,"cone move OK")
return!0},
bR(a,b){var s=b.y,r=a.y.y
return A.u0(A.bF(this.b),s,r,0.125)},
t(a){return"Cone "+this.b.t(0)+" rate: "+this.a}}
A.jI.prototype={
gbm(){return this.c*this.b},
bI(a,b){return b.f.a<=0},
bR(a,b){return A.vq(this.b,this.c)},
t(a){return"Haste "+this.b+" for "+this.c+" turns rate: "+this.a}}
A.fU.prototype={
gbm(){return this.b},
bI(a,b){var s=b.z,r=b.Q.f
return s/r<0.25||r-s>=this.b},
bR(a,b){return A.vr(this.b,!1)},
t(a){return"Heal "+this.b+" rate: "+this.a}}
A.bP.prototype={
gbm(){return this.b*0.5},
bI(a,b){var s,r,q,p,o,n=a.x
n===$&&A.b()
s=b.y
s=n.f.B(s.gm(),s.gn())
if(!(!s.b&&s.d+s.e>s.c))return!1
for(n=n.b,s=n.length,r=b.y,q=this.b,p=0;p<s;++p){o=n[p]
if(o===b)continue
if(o instanceof A.aa&&o.at instanceof A.cf&&o.y.S(0,r).e9(0,q))return!0}return!1},
bR(a,b){var s=this.c
if(s==null)s="howls"
return new A.jL(this.b,s)},
t(a){return"Howl "+this.b}}
A.b1.prototype={
gbm(){return 0},
bI(a,b){var s,r=a.y.y
if(r.S(0,b.y).gb3()<=1)return!1
s=a.x
s===$&&A.b()
return s.eN(b,r)},
bR(a,b){return new A.kd(a.y,this.b)},
t(a){return this.b.t(0)+" rate: "+this.a}}
A.bK.prototype={
gbm(){return 6},
bI(a,b){var s,r,q,p,o,n,m,l,k,j,i=a.x
i===$&&A.b()
s=b.y
s=i.f.B(s.gm(),s.gn())
if(!(!s.b&&s.d+s.e>s.c))return!1
for(s=b.y.gbB(),r=s.length,q=b.e,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
n=b.cm()
if(i.bk(o,q.a>0?new A.ad(n.a|$.U().a):n)){m=i.w
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
bR(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.T,h=A.a([],i)
if(this.b)for(s=b.e,r=0;r<8;++r){q=B.a5[r]
p=a.x
p===$&&A.b()
o=b.y.F(0,q)
n=b.cm()
if(p.bk(o,s.a>0?new A.ad(n.a|$.U().a):n)){m=p.w
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
p=new A.qs(a,b,q)
if(p.$1(q.gcI()))B.a.U(h,A.a([q,q,q,q,q],i))
if(p.$1(q.gcI().gb9()))B.a.j(h,q)
if(p.$1(q.gcI().gba()))B.a.j(h,q)}if(h.length===0)for(i=b.e,r=0;r<8;++r){q=B.a5[r]
s=a.x
s===$&&A.b()
p=b.y.F(0,q)
n=b.cm()
if(s.bk(p,i.a>0?new A.ad(n.a|$.U().a):n)){o=s.w
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
return new A.kX(i.F(0,h[s]),b.Q)},
t(a){return"Spawn rate: "+this.a}}
A.qs.prototype={
$1(a){var s,r,q=this.a.x
q===$&&A.b()
s=this.b
r=s.y.F(0,this.c)
r=q.w.B(r.a,r.b)
return r!=null&&r instanceof A.aa&&r.Q===s.Q},
$S:13}
A.bv.prototype={
gbm(){return this.b*0.7},
bI(a,b){var s
if(b.at instanceof A.ct)return!0
s=a.y.y.S(0,b.y).gb3()
if(b.ay&&s<=1)return!1
return!0},
bR(a,b){return A.w_(this.b)},
t(a){return"Teleport "+this.b}}
A.jo.prototype={
gM(){return"Fairy Dust"},
gW(){return"A sprinkle of glimmering magic dazzles all nearby foes."}}
A.js.prototype={
gM(){return"Flitter"},
gW(){return"Take flight and soar over the ground, at least until you get tired."}}
A.kG.prototype={
gM(){return"Quick Study"},
gW(){return"Gain 20% more experience when killing a monster."},
kd(a,b,c){return c*1.2}}
A.kV.prototype={
gM(){return"Single-minded"},
gW(){return"Reduce the focus lost when performing an ability by 30%."},
ke(a,b,c){if(c===0)return 0
c=B.e.bM(c*0.7)
if(c===0)return 1
return c}}
A.d3.prototype={
bo(a){return"Cast "+this.b+" spells better."},
gM(){return this.b},
gcv(){return this.c},
gW(){return this.d}}
A.iG.prototype={
gM(){return"Archery"},
gW(){return"Kill your foe without risking harm to yourself by unleashing a volley of arrows from far away."},
gcv(){return B.aY},
bo(a){return"Scales strike by "+A.pO(A.v(a,1,15,1,3),null)+"."}}
A.iO.prototype={
gM(){return"Battle Hardening"},
gW(){return"Years of taking hits have turned your skin as hard as cured leather."},
gcv(){return B.ax},
kc(a,b){return b+a.z.bP(this)*4},
bo(a){return"Increases armor by "+a*4+"."}}
A.iP.prototype={
gM(){return"Bloodlust"},
gW(){return"The more furious you are, the more deadly in combat you become."},
gcv(){return B.ax},
hy(a,b,c,d){d.cO(A.v8(a.Q.z.bP(this))*a.CW,"Bloodlust")},
bo(a){return"Increases damage by "+A.pO(A.v8(a),1)+" for each point of fury."}}
A.ha.prototype={
gcv(){return B.aZ},
hy(a,b,c,d){if(c==null||c.a.r!==this.gbv())return
d.cO(A.v(a.Q.z.bP(this),1,15,1.1,4),"mastery")},
bo(a){var s,r=A.pO(A.v(a,1,15,1.1,4)-1,null),q=this.gbv()
if(0>=q.length)return A.c(q,0)
s=B.j.G("aeiou",q[0])?"an":"a"
return"Melee attacks inflict +"+r+" damage when using "+s+" "+this.gbv()+"."}}
A.iJ.prototype={
gM(){return"Axe Mastery"},
gW(){return"Axes are not just for woodcutting. In the hands of a skilled user, they can cut down a swath of nearby foes as well."},
gbv(){return"axe"},
bo(a){return"TODO"}}
A.iQ.prototype={
gM(){return"Bludgeoning"},
gW(){return"Bludgeons may not be the most sophisticated of weapons, but hitting someone really hard with a blunt object can often be an effective argument in your favor."},
gbv(){return"club"},
bo(a){return this.ia(a)+" Bashes the enemy away."}}
A.k2.prototype={
gM(){return"Knife Fighting"},
gW(){return"Small and easily concealed, knives are deadly in the hand of a skilled practitioner."},
gbv(){return"knife"},
bo(a){return"TODO"}}
A.kY.prototype={
gM(){return"Spear Mastery"},
gW(){return"Your diligent study of spears and polearms lets you attack at a distance when wielding one."},
gbv(){return"spear"},
bo(a){return"TODO"}}
A.l3.prototype={
gM(){return"Swordfighting"},
gW(){return"The most elegant tool for the most refined of martial arts."},
gbv(){return"sword"},
bo(a){return this.ia(a)+" Parrying increases dodge by "+B.e.O(A.v(a,1,15,5,30))+"."},
eQ(a){return new A.R(this.ow(a),t.cn)},
ow(a){var s=this
return function(){var r=a
var q=0,p=1,o=[],n,m,l
return function $async$eQ(b,c,d){if(c===1){o.push(d)
q=p}for(;;)switch(q){case 0:m=r.Q
l=m.z.bP(s)
m=m.f.gcM(),n=J.ap(m.a),m=new A.cR(n,m.b,m.$ti.h("cR<1>"))
case 2:if(!m.q()){q=3
break}q=n.gH().a.r==="sword"?4:5
break
case 4:q=6
return b.b=new A.az(B.e.O(A.v(l,1,15,5,30)),"{1} parr[y|ies] {2}."),1
case 6:case 5:q=2
break
case 3:return 0
case 1:return b.c=o.at(-1),3}}}}}
A.lp.prototype={
gM(){return"Whip Mastery"},
gW(){return"Whips and flails are difficult to use well, but deadly even at a distance when mastered."},
gbv(){return"whip"},
bo(a){return"TODO"}}
A.bJ.prototype={
aK(){return"Region."+this.b}}
A.nd.prototype={
dE(a){return new A.R(this.oi(t.jJ.a(a)),t.e)},
oi(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$dE(a3,a4,a5){if(a4===1){o.push(a5)
q=p}for(;;)A:switch(q){case 0:for(n=s.b.f,m=n.b,l=A.ab(m),k=n.a,j=m.b.a,i=k.length;l.q();){h=l.b
g=l.c
n.l(h,g)
h=g*j+h
if(!(h>=0&&h<i)){A.c(k,h)
q=1
break A}k[h].a=$.fv()}f=A.y1(s.c)
d=f.length-1
for(;;){if(!(d>=0)){e=-1
break}if(f[d].w){e=d
break}--d}l=t.hY
c=A.a(B.hF.slice(0),l)
b=A.a([],l)
for(l=t.pj,d=0;d<f.length;++d)if(d===e||!f[d].w)B.a.j(b,B.cr)
else B.a.j(b,$.m().kH(0,c,l))
d=0
case 3:if(!(d<f.length)){q=5
break}l=f[d]
if(!(d<b.length)){A.c(b,d)
q=1
break}h=b[d]
a0=l.r.$0()
a0.a!==$&&A.ar()
a0.a=s
a0.b!==$&&A.ar()
a0.b=l
a0.c!==$&&A.ar()
a0.c=h
q=6
return a3.aL(a0.aY())
case 6:case 4:++d
q=3
break
case 5:for(m=J.ap(m.kK());m.q();){l=m.gH()
h=l.gm()
l=l.gn()
n.l(h,l)
h=l*j+h
if(!(h>=0&&h<i)){A.c(k,h)
q=1
break A}k[h].a=$.bC()}a1=A.a([],t.l)
q=7
return a3.aL(s.iE(a1))
case 7:q=8
return a3.aL(s.ih(a1))
case 8:q=9
return a3.aL(s.ip(a1))
case 9:q=10
return a3.b="Ready to decorate",1
case 10:a2=new A.nt(s,A.C(t.aT,t.A),A.b7(t.P))
q=11
return a3.aL(a2.jJ())
case 11:n=a2.b
n===$&&A.b()
r.$1(n)
case 1:return 0
case 2:return a3.c=o.at(-1),3}}}},
dn(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.b.f,f=g.B(b,c)
f.a=d==null?$.d0():d;++this.e
f=this.d
f.aW(b,c,a)
for(s=f.b,r=g.a,q=g.b.b.a,p=r.length,o=f.$ti.c,n=f.a,m=s.b.a,l=0;l<8;++l){k=B.a5[l]
j=k.c+b
i=k.d+c
if(s.G(0,new A.d(j,i))){g.l(j,i)
h=i*q+j
if(!(h>=0&&h<p))return A.c(r,h)
h=r[h].a!==$.dw()}else h=!1
if(h){o.a(a)
f.l(j,i)
B.a.i(n,i*m+j,a)}}},
dl(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b.f,c=d.b
if(!c.G(0,b))return!1
s=this.d
r=b.a
q=b.b
if(s.B(r,q)!=null)return!1
if(d.B(r,q).a===$.dw())return!1
for(r=b.gbB(),q=r.length,p=s.a,o=s.b.b.a,n=p.length,m=d.a,l=c.b.a,k=m.length,j=0;j<q;++j){i=r[j]
if(!c.G(0,i))continue
h=i.a
g=i.b
d.l(h,g)
f=g*l+h
if(!(f>=0&&f<k))return A.c(m,f)
if(m[f].a===$.dw())continue
s.l(h,g)
h=g*o+h
if(!(h>=0&&h<n))return A.c(p,h)
e=p[h]
if(e!=null&&e!==a)return!1}return!0},
iE(a){return new A.R(this.mb(t.A.a(a)),t.e)},
mb(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
return function $async$iE(b2,b3,b4){if(b3===1){o.push(b4)
q=p}for(;;)A:switch(q){case 0:b0=t.l
b1=A.a([],b0)
for(n=s.b,m=n.f,l=m.b,k=A.ab(l.bN(-1)),j=m.a,i=l.b,h=i.a,g=j.length,l=l.a,f=l.a,e=f+h,l=l.b,i=i.b,d=l+i,c=0,b=B.ak,a0=99999;k.q();){a1=k.b
a2=k.c
a3=new A.d(a1,a2)
m.l(a1,a2)
a1=a2*h+a1
if(!(a1>=0&&a1<g)){A.c(j,a1)
q=1
break A}a4=j[a1].a
if(a4===$.d0()){++c
a1=a3.S(0,new A.d(B.c.A(Math.min(f,e)+Math.max(f,e),2),B.c.A(Math.min(l,d)+Math.max(l,d),2)))
a5=Math.abs(a1.a)+Math.abs(a1.b)
if(a5<a0){a0=a5
b=a3}}else if(!(a4!==$.fv()&&a4!==$.dw()))B.a.j(b1,a3)}l=$.m()
B.a.bJ(t.A.a(b1),l.a)
l=t.S
k=h*i
f=A.an(k,-2,!1,l)
e=t.z
d=new A.a8(f,new A.Y(new A.d(0,0),new A.d(h,i)),e)
a6=new A.pY(n,b,d,new A.lk(new A.a8(A.an(k,0,!1,l),new A.Y(new A.d(0,0),new A.d(h,i)),e),h,i),B.cc)
a6.cg(b,0)
a6.j2(A.a([b],b0))
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
i=l===$.fv()
if(!i&&l!==$.dw()){q=4
break}if(i)n.a=$.bC()
else if(l===$.dw())n.a=$.dv()
n=a3.gm()
l=a3.gn()
d.l(n,l)
n=l*h+n
if(!(n>=0&&n<k)){A.c(f,n)
q=1
break}n=f[n]
if(typeof n!=="number"){n.cN()
q=1
break}if(!(n>=0)){q=4
break}a6.oE(a3)
if(a6.e!==c){s.iP(r,a3)
a6.pq()}a9=a7+1
q=B.c.ad(a7,20)===0?6:7
break
case 6:q=8
return b2.b=a3.t(0),1
case 8:case 7:a7=a9
case 4:b1.length===b0||(0,A.o)(b1),++a8
q=3
break
case 5:case 1:return 0
case 2:return b2.c=o.at(-1),3}}}},
ih(a){return new A.R(this.lt(t.A.a(a)),t.e)},
lt(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3
return function $async$ih(a4,a5,a6){if(a5===1){o.push(a6)
q=p}for(;;)A:switch(q){case 0:a3=A.a([],t.hw)
for(n=s.b.f,m=n.b,l=A.ab(m.bN(-1)),k=n.a,m=m.b.a,j=k.length;l.q();){i=l.b
h=l.c
g=new A.d(i,h)
n.l(i,h)
i=h*m+i
if(!(i>=0&&i<j)){A.c(k,i)
q=1
break A}f=k[i].a
i=$.d0()
if(!(f===i||f===$.d1()||f===$.fu()))continue
for(e=0;e<4;++e){d=B.at[e]
h=g.F(0,d.gbE())
c=h.a
h=h.b
n.l(c,h)
c=h*m+c
if(!(c>=0&&c<j)){A.c(k,c)
q=1
break A}f=k[c].a
if(!(f===i||f===$.d1()||f===$.fu()))continue
h=g.F(0,d.gb9())
c=h.a
h=h.b
n.l(c,h)
c=h*m+c
if(!(c>=0&&c<j)){A.c(k,c)
q=1
break A}f=k[c].a
h=$.bC()
if(!(f===h||f===$.dv()))continue
c=g.F(0,d)
b=c.a
c=c.b
n.l(b,c)
b=c*m+b
if(!(b>=0&&b<j)){A.c(k,b)
q=1
break A}f=k[b].a
if(!(f===h||f===$.dv()))continue
c=g.F(0,d.gba())
b=c.a
c=c.b
n.l(b,c)
b=c*m+b
if(!(b>=0&&b<j)){A.c(k,b)
q=1
break A}f=k[b].a
if(!(f===h||f===$.dv()))continue
h=g.F(0,d.gbS())
c=h.a
h=h.b
n.l(c,h)
c=h*m+c
if(!(c>=0&&c<j)){A.c(k,c)
q=1
break A}f=k[c].a
if(!(f===i||f===$.d1()||f===$.fu()))continue
B.a.j(a3,new A.i7(g,d))}}n=$.m()
B.a.bJ(t.pa.a(a3),n.a)
a0=n.bq(5,40)
n=a3.length,a1=0,e=0
case 3:if(!(e<a3.length)){q=5
break}a2=a3[e]
if(!s.nN(r,a2.a,a2.b)){q=4
break}q=6
return a4.b="Shortcut",1
case 6:++a1
if(a1>=a0){q=5
break}case 4:a3.length===n||(0,A.o)(a3),++e
q=3
break
case 5:case 1:return 0
case 2:return a4.c=o.at(-1),3}}}},
nN(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(h===$.d0()||h===$.d1()||h===$.fu()){p=s.length
o=$.m()
if(!new A.rG(p*2+(o.a.a1(8)+8),q,b,k).fk()){for(q=s.length,g=0;g<s.length;s.length===q||(0,A.o)(s),++g)this.iP(a,s[g])
return!0}return!1}j=k.F(0,c.gbE())
i=j.a
j=j.b
p.l(i,j)
i=j*m+i
if(!(i>=0&&i<l))return A.c(o,i)
h=o[i].a
j=$.bC()
if(!(h===j||h===$.dv()))return!1
i=k.F(0,c.gbS())
f=i.a
i=i.b
p.l(f,i)
f=i*m+f
if(!(f>=0&&f<l))return A.c(o,f)
h=o[f].a
if(!(h===j||h===$.dv()))return!1
j=$.m()
i=s.length
if(j.a.a1(100)<i*10)return!1}},
iP(a,b){var s,r,q
t.A.a(a)
s=this.b.f.B(b.gm(),b.gn())
r=s.a
if(r===$.bC())s.a=$.d1()
else if(r===$.dv())s.a=$.fu()
q=this.d.B(b.gm(),b.gn())
if(q==null)B.a.j(a,b)
else this.io(b,q)},
ip(a){return new A.R(this.lG(t.A.a(a)),t.e)},
lG(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3,a4,a5,a6
return function $async$ip(a7,a8,a9){if(a8===1){o.push(a9)
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
s.io(c,a6)}else B.a.j(f,c)}if(f.length===0){q=5
break}q=6
return a7.b="Claim",1
case 6:case 4:r=f
q=3
break
case 5:case 1:return 0
case 2:return a7.c=o.at(-1),3}}}},
io(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.gbB(),r=s.length,q=this.d,p=q.a,o=q.b.b.a,n=p.length,m=q.$ti.c,l=0;l<s.length;s.length===r||(0,A.o)(s),++l){k=s[l]
j=k.a
i=k.b
q.l(j,i)
h=i*o+j
if(!(h>=0&&h<n))return A.c(p,h)
if(p[h]==null){m.a(b)
q.l(j,i)
B.a.i(p,h,b)}}}}
A.i7.prototype={}
A.be.prototype={
gf9(){return $.uG()},
fp(a){return!1}}
A.rG.prototype={
hG(a){if(a.c>=this.d)return!1
return null},
hI(a){return!0},
fq(a,b){var s=$.bB()
if((b.a.e.a&s.a)!==0)return 1
return null},
hV(){return!1}}
A.fA.prototype={}
A.t8.prototype={
$0(){return new A.er(this.a)},
$S:56}
A.t5.prototype={
$0(){return new A.ej(0.3,8,32)},
$S:57}
A.t6.prototype={
$0(){return new A.ek()},
$S:58}
A.tk.prototype={
$0(){return new A.eG()},
$S:59}
A.tq.prototype={
$0(){return new A.f1()},
$S:60}
A.tj.prototype={
$0(){return A.yE(5)},
$S:61}
A.tn.prototype={
$0(){var s=A.a([],t.l)
return new A.eQ(this.a,12,24,s)},
$S:62}
A.ej.prototype={
aY(){return new A.R(this.oa(),t.e)},
oa(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
return function $async$aY(a6,a7,a8){if(a7===1){p.push(a8)
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
break}h=A.nj(B.e.L(Math.pow($.m().aC(l,m),2)))
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
r=s.lD(h,a4+a0,a.a1(a2-a1)+a1)?7:8
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
lD(a,b,c){var s,r,q,p,o,n,m,l,k=this
t.b.a(a)
for(s=a.b,r=A.ab(s),q=a.a,p=s.b.a,o=q.length;r.q();){n=r.b
m=r.c
a.l(n,m)
l=m*p+n
if(!(l>=0&&l<o))return A.c(q,l)
if(q[l]){l=k.a
l===$&&A.b()
if(!l.dl(k,new A.d(n+b,m+c)))return!1}}for(s=A.ab(s);s.q();){r=s.b
n=s.c
a.l(r,n)
m=n*p+r
if(!(m>=0&&m<o))return A.c(q,m)
if(q[m]){m=k.a
m===$&&A.b()
m.dn(k,r+b,n+c,null)}}return!0}}
A.ek.prototype={
aY(){return new A.R(this.ob(),t.e)},
ob(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
return function $async$aY(a9,b0,b1){if(b0===1){p.push(b1)
r=q}for(;;)A:switch(r){case 0:a8=s.a
a8===$&&A.b()
o=a8.b.f.b.b
n=o.a
o=o.b
m=t.fU
l=new A.Y(new A.d(0,0),new A.d(n,o))
k=n*o
j=A.an(k,null,!1,m)
i=t.eJ
h=new A.a8(j,l,i)
g=new A.a8(A.an(k,null,!1,m),new A.Y(new A.d(0,0),new A.d(n,o)),i)
for(o=A.ab(l);o.q();){m=o.b
l=o.c
f=new A.d(m,l)
if(!a8.dl(s,f))continue
k=$.m().aO(1)
i=s.c
i===$&&A.b()
i=s.lN(i,f)
h.l(m,l)
B.a.i(j,l*n+m,k<i)}e=0
case 3:if(!(e<4)){r=5
break}for(o=h.b,n=o.a,n=new A.cK(o,n.a-1,n.b),m=g.$ti.c,l=g.a,k=g.b.b.a,j=h.a,i=o.b.a,c=j.length;n.q();){b=n.b
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
break A}a6=!J.ay(j[a6],!1)}else a6=!0
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
break A}if(J.ay(m[i],!1))a8.dn(s,k,j,null)}case 1:return 0
case 2:return a9.c=p.at(-1),3}}}},
lN(a,b){var s,r,q,p=this
switch(a.a){case 0:return 0.45
case 1:s=p.a
s===$&&A.b()
return A.v(b.b,0,s.b.f.b.b.b,0.3,0.7)
case 2:s=p.a
s===$&&A.b()
s=s.b.f.b.b
r=s.a
return A.v(Math.max(r-b.a-1,b.b),0,Math.min(r,s.b),0.3,0.7)
case 3:s=p.a
s===$&&A.b()
return A.v(b.a,0,s.b.f.b.b.a,0.3,0.7)
case 4:s=p.a
s===$&&A.b()
s=s.b.f.b.b
r=s.a
s=s.b
return A.v(Math.max(r-b.a-1,s-b.b-1),0,Math.min(r,s),0.3,0.7)
case 5:s=p.a
s===$&&A.b()
return A.v(b.b,0,s.b.f.b.b.b,0.7,0.3)
case 6:s=p.a
s===$&&A.b()
s=s.b.f.b.b
r=s.b
return A.v(Math.max(b.a,r-b.b-1),0,Math.min(s.a,r),0.3,0.7)
case 7:s=p.a
s===$&&A.b()
return A.v(b.a,0,s.b.f.b.b.a,0.7,0.3)
case 8:q=Math.max(b.a,b.b)
s=p.a
s===$&&A.b()
s=s.b.f.b.b
return A.v(q,0,Math.min(s.a,s.b),0.3,0.7)}}}
A.nt.prototype={
jJ(){return new A.R(this.ou(),t.e)},
ou(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
return function $async$jJ(a0,a1,a2){if(a1===1){p.push(a2)
r=q}for(;;)A:switch(r){case 0:s.me()
for(o=s.a,n=o.b,m=n.f,l=m.b,k=A.ab(l),o=o.d,j=o.a,i=o.b.b.a,h=j.length,g=s.c;k.q();){f=k.b
e=k.c
o.l(f,e)
d=e*i+f
if(!(d>=0&&d<h)){A.c(j,d)
r=1
break A}J.v0(g.b7(j[d],new A.nx()),new A.d(f,e))}s.n2()
r=3
return a0.aL(s.iZ())
case 3:c=$.m().bq(2,4)
for(o=m.a,l=l.b.a,k=o.length,b=0;b<c;++b){a=n.jS()
j=a.a
i=a.b
m.l(j,i)
j=i*l+j
if(!(j>=0&&j<k)){A.c(o,j)
r=1
break A}o[j].a=$.uT()}o=n.jS()
s.b!==$&&A.ar()
s.b=o
r=4
return a0.aL(s.ja())
case 4:r=5
return a0.aL(s.iC())
case 5:case 1:return 0
case 2:return a0.c=p.at(-1),3}}}},
me(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.a([],t.l)
for(s=this.a.b.f,r=s.b,q=A.ab(r.bN(-1)),p=s.a,r=r.b.a,o=p.length;q.q();){n=q.b
m=q.c
l=new A.d(n,m)
s.l(n,m)
k=m*r+n
if(!(k>=0&&k<o))return A.c(p,k)
if(p[k].a!==$.d1())continue
for(j=0;j<4;++j){i=B.at[j]
h=l.F(0,i)
g=h.a
h=h.b
s.l(g,h)
g=h*r+g
if(!(g>=0&&g<o))return A.c(p,g)
g=p[g].a
h=$.d0()
if(g!==h)continue
g=l.F(0,i.gcI())
f=g.a
g=g.b
s.l(f,g)
f=g*r+f
if(!(f>=0&&f<o))return A.c(p,f)
e=p[f].a
if(e!==h&&e!==$.d1()&&e!==$.mP())continue
h=l.F(0,i.gbE())
g=h.a
h=h.b
s.l(g,h)
g=h*r+g
if(!(g>=0&&g<o))return A.c(p,g)
g=p[g].a
h=$.bC()
if(g!==h)continue
g=l.F(0,i.gbS())
f=g.a
g=g.b
s.l(f,g)
f=g*r+f
if(!(f>=0&&f<o))return A.c(p,f)
if(p[f].a!==h)continue
s.l(n,m)
p[k].a=$.mP()
B.a.j(a,l)
break}}q=$.m()
B.a.bJ(t.A.a(a),q.a)
for(q=a.length,j=0;j<a.length;a.length===q||(0,A.o)(a),++j){d=a[j]
n=d.gm()
m=d.gn()
s.l(n,m)
n=m*r+n
if(!(n>=0&&n<o))return A.c(p,n)
n=p[n].a
m=$.mP()
if(n!==m)continue
for(n=d.gdF(),k=n.length,c=0;c<n.length;n.length===k||(0,A.o)(n),++c){b=n[c]
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
p[g].a=$.d1()}}}},
n2(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(s=this.c,s=new A.bj(s,A.z(s).h("bj<1,2>")).gN(0),r=this.a;s.q();){q=s.d
p=q.a
o=$.uG()
if(p!=null)o=p.gf9()
n=new A.hj(this,r,p)
for(m=J.ap(q.b),l=r.b.f,k=l.a,j=l.b.b.a,i=k.length;m.q();){h=m.gH()
g=o.p5(n,h)
f=h.gm()
h=h.gn()
l.l(f,h)
f=h*j+f
if(!(f>=0&&f<i))return A.c(k,f)
k[f].a=g;++n.d}}},
iZ(){return new A.R(this.n4(),t.e)},
n4(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
return function $async$iZ(a5,a6,a7){if(a6===1){p.push(a7)
r=q}for(;;)switch(r){case 0:o=s.c,o=new A.bj(o,A.z(o).h("bj<1,2>")).gN(0),n=s.a,m=n.c,l=t.A
case 3:if(!o.q()){r=4
break}k=o.d
j=k.a
if(j==null){r=3
break}i=J.v2(k.b)
h=$.m()
B.a.bJ(l.a(i),h.a)
g=new A.hj(s,n,j)
f=i.length
e=j.b
e===$&&A.b()
f*=e.c
d=B.e.bM(f)
if(h.aO(1)<f-d)++d
c=B.e.aR(h.aC(d*0.8,d*1.2))
b=0
case 5:a=b+1
if(!(b<c&&g.d<c)){r=6
break}a0=A.yf(m,e.b)
if(a0==null){r=7
break}a1=0
case 8:if(!(a1<i.length)){r=10
break}a2=i[a1]
if(!a0.om(g,a2)){r=9
break}a0.p8(g,a2)
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
ja(){return new A.R(this.nv(),t.e)},
nv(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
return function $async$ja(a9,b0,b1){if(b0===1){p.push(b1)
r=q}for(;;)A:switch(r){case 0:a8=A.b7(t.g_)
for(o=s.c,o=new A.c1(o,o.r,o.e,A.z(o).h("c1<1>")),n=s.a;o.q();){m=o.d
if(m==null)continue
if(m.fp(new A.hj(s,n,m)))a8.j(0,m)}o=n.b
m=o.f
l=m.b
k=l.b
j=k.a
k=k.b
i=new A.jb(new A.a8(A.an(j*k,0,!1,t.S),new A.Y(new A.d(0,0),new A.d(j,k)),t.z))
k=s.b
k===$&&A.b()
h=A.ck(o,k,$.uD(),!1,null,null)
for(o=A.ab(l.bN(-1)),l=n.d,k=l.a,g=l.b.b.a,f=k.length;o.q();){e=o.b
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
a=o*0.03*e.aC(1,1.4)
o=m.a,d=o.length,n=n.c,a0=t.m,a1=0
case 3:if(!(a1<a)){r=4
break}c=i.eO()
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
a6=$.ca().kN(n,a7)
a6.toString
m.l(a2,a3)
a2=a3*j+a2
if(!(a2>=0&&a2<d)){A.c(o,a2)
r=1
break}if((o[a2].a.e.a&a6.at.a)===0){r=3
break}if(!s.fD(a6)){r=3
break}a8=s.h5(i,c,a6)
r=5
return a9.b="Spawned monster",1
case 5:a1+=a8
r=3
break
case 4:case 1:return 0
case 2:return a9.c=p.at(-1),3}}}},
jG(a,b,c){var s
for(;;){s=$.ca().da(a,b,c)
s.toString
if(this.fD(s))return s}},
fD(a){if(!a.ax.f)return!0
if(this.a.a.ed(a)>0)return!1
if(this.d.G(0,a))return!1
return!0},
h5(a,b,c){var s,r,q,p,o,n,m,l=null,k={},j=!c.ax.f&&$.m().T(10)===0
k.a=0
s=new A.nw(k,this,j,a)
r=c.l9()
if(0>=r.length)return A.c(r,0)
s.$2(r[0],b)
for(q=A.zb(r,1,l,A.M(r).c),p=q.$ti,q=new A.c2(q,q.gI(0),p.h("c2<aF.E>")),o=this.a.b,p=p.h("aF.E");q.q();){n=q.d
if(n==null)n=p.a(n)
m=A.ck(o,b,n.at,l,l,l).gcF().hs(0,new A.nu(),new A.nv())
if(m.Z(0,new A.d(-1,-1)))break
s.$2(n,m)}return k.a},
iC(){return new A.R(this.m4(),t.e)},
m4(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
return function $async$iC(a7,a8,a9){if(a8===1){p.push(a9)
r=q}for(;;)A:switch(r){case 0:a1=s.a
a2=a1.b
a3=a2.f
a4=a3.b
a5=a4.b
a6=a5.a
a5=a5.b
o=new A.jb(new A.a8(A.an(a6*a5,0,!1,t.S),new A.Y(new A.d(0,0),new A.d(a6,a5)),t.z))
a5=s.b
a5===$&&A.b()
n=A.ck(a2,a5,$.bB(),!1,null,null)
for(a4=A.ab(a4.bN(-1)),a5=a3.a,m=a5.length,l=a1.d,k=l.a,j=l.b.b.a,i=k.length;a4.q();){h=a4.b
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
break A}if((a5[h].a.e.a&$.aX().a)===0)continue
h=Math.sqrt(d+1)
e=e.b
e===$&&A.b()
o.i(0,f,B.e.L((10+h)*e.f))}a1=a1.c
c=o.c*(0.05+(a1-1)*0.05)
c+=$.m().aO(c*0.2)
b=0
case 3:if(!(b<c)){r=4
break}f=o.eO()
if(f==null){r=4
break}a=a2.dZ(f,$.v_().hT(a1).b,a1)
for(a3=a.length,a0=0;a0<a.length;a.length===a3||(0,A.o)(a),++a0)b+=Math.max(a[a0].gbf(),1)
o.kB(a2,f,$.bB(),3)
r=5
return a7.b="Spawned item",1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a7.c=p.at(-1),3}}}}}
A.nx.prototype={
$0(){return A.a([],t.l)},
$S:42}
A.nw.prototype={
$2(a,b){var s=this,r=s.b,q=r.a.b
if(q.w.B(b.gm(),b.gn())!=null)return
if(!r.fD(a))return
if(a.ax.f)r.d.j(0,a)
if(s.c)q.dZ(b,a.Q,a.c)
else{q.dB(a.i6(b));++s.a.a
r=s.d
if(r!=null)r.kB(q,b,$.uD(),5)}},
$S:63}
A.nu.prototype={
$1(a){t.u.a(a)
return!0},
$S:1}
A.nv.prototype={
$0(){return new A.d(-1,-1)},
$S:64}
A.jb.prototype={
i(a,b,c){var s=this,r=s.a,q=r.B(b.gm(),b.gn())
s.b=s.b-q+c
r.$ti.c.a(c)
r.aW(b.gm(),b.gn(),c)
if(q===0&&c>0)++s.c
if(q>0&&c===0)--s.c},
eO(){var s,r,q,p,o,n,m,l,k,j=this.b
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
s-=k}throw A.n(A.bE("Unreachable."))},
kB(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
this.i(0,b,0)
s=A.ck(a,b,c,null,null,d)
for(r=s.gcF(),q=r.$ti,r=new A.ag(r.a(),q.h("ag<1>")),p=this.a,o=p.a,n=p.b.b.a,m=o.length,q=q.c;r.q();){l=r.b
if(l==null)l=q.a(l)
k=s.cj(l)
k.toString
j=l.gm()
i=l.gn()
p.l(j,i)
j=i*n+j
if(!(j>=0&&j<m))return A.c(o,j)
this.i(0,l,B.e.L(o[j]*(k/d)))}}}
A.er.prototype={
gf9(){return $.xf()},
aY(){return new A.R(this.oc(),t.e)},
oc(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
return function $async$aY(a2,a3,a4){if(a3===1){p.push(a4)
r=q}for(;;)switch(r){case 0:a0=s.w
a1=0
case 2:o=s.a
o===$&&A.b()
n=o.b.f.b.b
m=n.a
n=n.b
if(!(o.e/((m-2)*(n-2))<0.25&&a1<100)){r=3
break}l=A.u2(o.c,a0)
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
r=s.m5(l,a+e,f.a1(c-d)+d)?6:7
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
m5(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.o.a(a)
if(!h.jD(a,b,c))return!1
for(s=a.b,r=A.ab(s),q=a.a,s=s.b.a,p=q.length;r.q();){o=r.b
n=r.c
m=o+b
l=n+c
a.l(o,n)
o=n*s+o
if(!(o>=0&&o<p))return A.c(q,o)
k=q[o]
o=k.a
if(!(o==null&&k.b===B.r)&&o!==$.bC()&&k.b===B.r){n=h.a
n===$&&A.b()
n.dn(h,m,l,o)}else{n=$.bC()
if(o===n){o=h.a
o===$&&A.b()
o=o.b.f
o.l(m,l)
j=o.a
i=l*o.b.b.a+m
if(!(i>=0&&i<j.length))return A.c(j,i)
if(j[i].a===$.fv()){o.l(m,l)
j[i].a=n}}}}return!0}}
A.eF.prototype={
gf9(){return $.xg()},
aY(){return new A.R(this.od(),t.e)},
od(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$aY(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:m=s.c
m===$&&A.b()
o=m===B.cr&&s.x==null?20:1
n=0
case 2:if(!(n<o)){r=4
break}r=5
return a.aL(s.iJ())
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
fp(a){var s,r,q,p,o,n,m,l,k,j=a.a,i=j.c.p(0,a.c)
i.toString
i=J.y_(i,new A.p9(a))
s=A.a6(i,i.$ti.h("k.E"))
i=$.m().a
B.a.bJ(t.A.a(s),i)
for(r=s.length,q=a.b.c,p=t.m,o=0;o<s.length;s.length===r||(0,A.o)(s),++o){n=s[o]
if(i.a1(20)!==0)continue
m=this.b
m===$&&A.b()
m=p.a(m.d)
l=m.length
k=i.a1(l)
if(!(k>=0&&k<m.length))return A.c(m,k)
j.h5(null,n,j.jG(q,null,m[k]))}return!0},
iJ(){return new A.R(this.mq(),t.e)},
mq(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g
return function $async$iJ(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:if(!s.nM()){r=1
break}o=s.r,n=o.c,m=o.b,l=s.x,k=l!=null
case 3:if(!(n.length!==0)){r=4
break}j=o.pl()
i=j.a
h=i.F(0,j.b)
g=s.a
g===$&&A.b()
if(!g.dl(s,h)){r=3
break}r=s.nK(j)?5:7
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
nM(){var s,r,q,p=this.a
p===$&&A.b()
s=A.u2(p.c,B.bf)
for(r=0;r<100;++r){q=this.nx(s)
if(this.jj(s,q.a,q.b))return!0}return!1},
nx(a){var s,r,q,p,o,n,m,l,k
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
return new A.d(s.bq(k,o),s.bq(l,n))},
n9(a){var s=this,r=new A.p7(s),q=s.c
q===$&&A.b()
switch(q.a){case 0:q=1
break
case 1:q=s.a
q===$&&A.b()
q=A.v(a.b,0,q.b.f.b.b.b,2,-3)
break
case 2:q=s.a
q===$&&A.b()
q=r.$2(q.b.f.b.b.a-a.a-1,a.b)
break
case 3:q=s.a
q===$&&A.b()
q=A.v(a.a,0,q.b.f.b.b.a,-3,2)
break
case 4:q=s.a
q===$&&A.b()
q=q.b.f.b.b
q=r.$2(q.a-a.a-1,q.b-a.b-1)
break
case 5:q=s.a
q===$&&A.b()
q=A.v(a.b,0,q.b.f.b.b.b,-3,2)
break
case 6:q=s.a
q===$&&A.b()
q=r.$2(a.a,q.b.f.b.b.b-a.b-1)
break
case 7:q=s.a
q===$&&A.b()
q=A.v(a.a,0,q.b.f.b.b.a,2,-3)
break
case 8:q=r.$2(a.a,a.b)
break
default:q=null}return $.m().aO(1)<q},
nK(a){var s,r,q,p,o,n,m=this.a
m===$&&A.b()
s=A.u2(m.c,B.bf)
m=s.b
r=A.z(m)
q=r.h("aj<k.E>")
p=A.a6(new A.aj(m,r.h("B(k.E)").a(new A.p8(s,a.b.gcI())),q),q.h("k.E"))
m=$.m()
B.a.bJ(t.A.a(p),m.a)
for(m=p.length,r=a.a,o=0;o<p.length;p.length===m||(0,A.o)(p),++o){n=r.S(0,p[o])
if(this.jj(s,n.a,n.b))return!0}return!1},
jj(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
t.o.a(a0)
if(!a.jD(a0,a1,a2))return!1
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
if(l!==B.r){if(a.n9(h))B.a.j(s,new A.eE(h,l))}else{l=g.a
if(l!=null)k=l!==$.bC()
else k=!1
if(k){k=a.a
k===$&&A.b()
k.dn(a,j,i,l)}else{k=$.bC()
if(l===k){l=a.a
l===$&&A.b()
l=l.b.f
l.l(j,i)
f=l.a
e=i*l.b.b.a+j
if(!(e>=0&&e<f.length))return A.c(f,e)
if(f[e].a===$.fv()){l.l(j,i)
f[e].a=k}d=m.ac(0,h)
if(d!=null)B.a.ac(n,d)}}}}r=$.m()
B.a.bJ(t.eF.a(s),r.a)
for(r=s.length,c=0;c<s.length;s.length===r||(0,A.o)(s),++c){d=s[c]
q=d.a
b=m.ac(0,q)
if(b!=null)B.a.ac(n,b)
m.i(0,q,d)
B.a.j(n,d)}return!0}}
A.p9.prototype={
$1(a){t.u.a(a)
return(this.a.b.b.f.B(a.gm(),a.gn()).a.e.a&$.aX().a)!==0},
$S:1}
A.p7.prototype={
$2(a,b){var s=this.a.a
s===$&&A.b()
s=s.b.f.b.b
return A.v(a+b,0,s.a+s.b,2,-3)},
$S:65}
A.p8.prototype={
$1(a){t.u.a(a)
return this.a.B(a.gm(),a.gn()).b===this.b},
$S:1}
A.eE.prototype={}
A.r1.prototype={
aK(){return"TakeFrom."+this.b}}
A.p6.prototype={
pl(){var s,r=this
switch(r.a.a){case 0:s=r.c
if(0>=s.length)return A.c(s,-1)
s=s.pop()
break
case 1:s=B.a.d9(r.c,0)
break
case 2:s=$.m().kH(0,r.c,t.d2)
break
default:s=null}r.b.ac(0,s.a);++s.c
return s}}
A.eG.prototype={
aY(){return new A.R(this.oe(),t.e)},
oe(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$aY(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:n=$.m()
m=n.aw(1,2)
o=0
case 2:if(!(o<m)){r=4
break}s.n5(A.nj(n.a.a1(16)+16))
r=5
return a.b="Placing lake",1
case 5:case 3:++o
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
n5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
k=s.bq(0,o-l)
j=s.bq(0,p.b-m.b)
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
m[c].a=$.dw()
h.a(this)
r.l(e,d)
B.a.i(g,d*f+e,this)}}}}
A.hj.prototype={}
A.pP.prototype={
p5(a,b){var s,r,q,p=this,o=a.b.b.f.B(b.gm(),b.gn()).a
if(o===$.d0()||o===$.d1())return p.fO()
if(o===$.bC()){s=p.b
if(s!=null){r=$.m()
t.p.a(s)
r=r.T(1)
if(!(r>=0&&r<1))return A.c(s,r)
return s[r]}s=$.m()
r=t.p.a($.xe())
s=s.T(3)
if(!(s>=0&&s<3))return A.c(r,s)
return r[s]}if(o===$.mP()){s=p.c
r=s!=null
if(r&&p.d!=null){q=$.m().T(6)
A:{if(0===q){s=p.d
if(s==null)s=t.ns.a(s)
break A}if(1===q){s=p.fO()
break A}break A}return s}else if(r)return s
else{s=p.d
if(s!=null)return s
else return p.fO()}}s=$.xd()
if(s.aj(o)){r=$.m()
s=s.p(0,o)
s.toString
t.p.a(s)
r=r.T(1)
if(!(r>=0&&r<1))return A.c(s,r)
return s[r]}return o},
fO(){var s,r=this.a
if(r!=null){s=$.m()
t.p.a(r)
s=s.T(1)
if(!(s>=0&&s<1))return A.c(r,s)
return r[s]}return $.mQ()}}
A.eQ.prototype={
gf9(){return $.xh()},
aY(){return new A.R(this.of(),t.e)},
of(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
return function $async$aY(a2,a3,a4){if(a3===1){p.push(a4)
r=q}for(;;)A:switch(r){case 0:o=s.e,n=s.f,m=0
case 3:if(!(m<20)){r=5
break}l=$.m()
k=A.nj(l.a.a1(n-o)+o)
l=s.a
l===$&&A.b()
j=s.ji(k,l.b.f.b)
r=j!=null?6:7
break
case 6:r=8
return a2.b="pit",1
case 8:for(l=k.b,i=l.a,i=new A.cK(l,i.a-1,i.b),h=k.a,l=l.b.a,g=h.length,f=s.r,e=j.a,d=e.a,c=j.b,b=d+c.a,e=e.b,c=e+c.b;i.q();){a=i.b
a0=i.c
k.l(a,a0)
a1=a0*l+a
if(!(a1>=0&&a1<g)){A.c(h,a1)
r=1
break A}if(h[a1])B.a.j(f,new A.d(a,a0).F(0,new A.d(Math.min(d,b),Math.min(e,c))))}r=9
return a2.aL(s.iY(j))
case 9:r=1
break
case 7:case 4:++m
r=3
break
case 5:case 1:return 0
case 2:return a2.c=p.at(-1),3}}}},
fp(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=a6.b,a5=B.e.aR(a4.c*$.m().aC(1,1.4))
for(s=this.r,r=s.length,q=this.d,p=a6.a,a4=a4.b,o=a4.w,n=o.a,m=o.b.b.a,l=n.length,a4=a4.f,k=a4.a,j=a4.b.b.a,i=k.length,h=0;h<s.length;s.length===r||(0,A.o)(s),++h){g=s[h]
f=g.a
e=g.b
a4.l(f,e)
d=e*j+f
if(!(d>=0&&d<i))return A.c(k,d)
d=k[d].a
c=$.aX().a
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
p.h5(null,g,p.jG(a5,!1,q))}return!0},
ji(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
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
if(this.nL(a,i,h))return new A.Y(new A.d(i,h),new A.d(p,q))}return null},
nL(a,b,c){var s,r,q,p,o,n,m,l,k=this
t.b.a(a)
for(s=a.b,r=A.ab(s),q=a.a,p=s.b.a,o=q.length;r.q();){n=r.b
m=r.c
a.l(n,m)
l=m*p+n
if(!(l>=0&&l<o))return A.c(q,l)
if(q[l]){l=k.a
l===$&&A.b()
if(!l.dl(k,new A.d(n+b,m+c)))return!1}}for(s=A.ab(s);s.q();){r=s.b
n=s.c
a.l(r,n)
m=n*p+r
if(!(m>=0&&m<o))return A.c(q,m)
if(q[m]){m=k.a
m===$&&A.b()
m.dn(k,r+b,n+c,null)}}return!0},
iY(a){return new A.R(this.n3(a),t.e)},
n3(a){var s=this
return function(){var r=a
var q=0,p=1,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
return function $async$iY(a0,a1,a2){if(a1===1){o.push(a2)
q=p}for(;;)switch(q){case 0:n=r.a,m=n.a,l=r.b,k=m+l.a,n=n.b,l=n+l.b,j=0
case 2:if(!(j<8)){q=4
break}i=$.m()
h=A.nj(i.a.a1(4)+6)
i=h.b.b
g=i.a
f=Math.min(m,k)-g
i=i.b
e=Math.min(n,l)-i
d=Math.max(m,k)
c=Math.max(n,l)
b=s.a
b===$&&A.b()
q=s.ji(h,A.vP(new A.Y(new A.d(f,e),new A.d(d+g-f,c+i-e)),b.b.f.b.bN(-1)))!=null?5:6
break
case 5:q=7
return a0.b="antechamber",1
case 7:case 6:case 3:++j
q=2
break
case 4:return 0
case 1:return a0.c=o.at(-1),3}}}}}
A.pY.prototype={
oE(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=A.h7(t.u),a4=a2.d;++a4.b
s=a4.a
r=s.b.b
q=r.a
a4.c=q
a4.d=0
a4.e=r.b
a4.f=0
r=a3.$ti.c
a3.bh(r.a(a5))
a4.j(0,a5)
p=a2.c
a2.f=A.a([new A.hX(a5,p.B(a5.gm(),a5.gn()))],t.lv)
for(o=s.a,n=o.length,m=p.a,l=p.b.b.a,k=m.length;!a3.gaD(0);){j=a3.cH()
i=j.gm()
h=j.gn()
p.l(i,h)
i=h*l+i
if(!(i>=0&&i<k))return A.c(m,i)
g=m[i]
for(i=j.gdF(),h=i.length,f=g+1,e=0;e<i.length;i.length===h||(0,A.o)(i),++e){d=i[e]
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
if(J.ay(o[c],a4.b))continue
if(a2.ms(d))continue
a3.bh(r.a(d))
a4.j(0,d)
B.a.j(a2.f,new A.hX(d,a0))}}a2.cg(a5,-1)
a1=a2.md(a5)
if(a1.a===0)for(a4=a4.gN(0),s=a4.$ti.c;a4.q();){r=a4.d
a2.cg(r==null?s.a(r):r,-1)}else{for(a4=a4.gN(0),s=a4.$ti.c;a4.q();){r=a4.d
a2.cg(r==null?s.a(r):r,-2)}a2.cg(a5,-1)
a2.j2(a1)}},
pq(){var s,r,q,p
for(s=this.f,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
this.cg(p.a,p.b)}this.f=B.cc},
ms(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this.c,a=b.B(a0.gm(),a0.gn())
for(s=a0.gdF(),r=s.length,q=this.d,p=q.a,o=p.a,n=p.b.b.a,m=o.length,l=this.a.f.b,k=b.a,j=b.b.b.a,i=k.length,h=a-1,g=0;g<s.length;s.length===r||(0,A.o)(s),++g){f=s[g]
if(!l.G(0,f))continue
e=f.a
d=f.b
p.l(e,d)
c=d*n+e
if(!(c>=0&&c<m))return A.c(o,c)
if(!J.ay(o[c],q.b)){b.l(e,d)
e=d*j+e
if(!(e>=0&&e<i))return A.c(k,e)
e=J.ay(k[e],h)}else e=!1
if(e)return!0}return!1},
md(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.b7(t.u)
for(s=this.d,r=s.gN(0),q=this.c,p=q.a,o=q.b.b.a,n=p.length,m=s.a,l=m.a,k=m.b.b.a,j=l.length,i=r.$ti.c;r.q();){h=r.d
if(h==null)h=i.a(h)
if(h.Z(0,a0))continue
for(h=h.gdF(),g=h.length,f=0;f<h.length;h.length===g||(0,A.o)(h),++f){e=h[f]
d=e.a
c=e.b
q.l(d,c)
b=c*o+d
if(!(b>=0&&b<n))return A.c(p,b)
b=p[b]
if(typeof b!=="number")return b.cN()
if(b>=0){m.l(d,c)
d=c*k+d
if(!(d>=0&&d<j))return A.c(l,d)
d=!J.ay(l[d],s.b)}else d=!1
if(d)a.j(0,e)}}return a},
j2(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
t.cX.a(a2)
s=new A.cg(A.a([],t.c),t.r)
for(r=J.ap(a2),q=a1.c,p=q.a,o=q.b,n=o.b.a,m=p.length;r.q();){l=r.gH()
k=l.gm()
j=l.gn()
q.l(k,j)
k=j*n+k
if(!(k>=0&&k<m))return A.c(p,k)
s.aX(0,l,p[k])}for(r=a1.a.f,l=r.a,k=r.b.b.a,j=l.length;;){i=s.fb()
if(i==null)break
h=i.gm()
g=i.gn()
q.l(h,g)
h=g*n+h
if(!(h>=0&&h<m))return A.c(p,h)
f=p[h]
for(h=i.gdF(),g=h.length,e=f+1,d=0;d<h.length;h.length===g||(0,A.o)(h),++d){c=h[d]
if(!o.G(0,c))continue
b=c.a
a=c.b
q.l(b,a)
a0=a*n+b
if(!(a0>=0&&a0<m))return A.c(p,a0)
if(!J.ay(p[a0],-2))continue
r.l(b,a)
b=a*k+b
if(!(b>=0&&b<j))return A.c(l,b)
if((l[b].a.e.a&$.aX().a)!==0){a1.cg(c,e)
s.aX(0,c,e)}else a1.cg(c,-1)}}},
cg(a,b){var s,r=this
if(r.a.f.B(a.gm(),a.gn()).a===$.d0()){s=r.c.B(a.gm(),a.gn())
if(typeof s!=="number")return s.cN()
if(s>=0)--r.e
if(b>=0)++r.e}s=r.c
s.$ti.c.a(b)
s.aW(a.gm(),a.gn(),b)}}
A.hX.prototype={}
A.f1.prototype={
aY(){return new A.R(this.og(),t.e)},
og(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
return function $async$aY(a,a0,a1){if(a0===1){p.push(a1)
r=q}for(;;)switch(r){case 0:b=s.a
b===$&&A.b()
o=b.b.f.b.b
n=o.b+2
m=o.a+2
l=new A.qa(s)
k=new A.qb(s)
j=new A.q8(s)
i=new A.qc(s)
h=new A.q9(s)
g=new A.q7(s)
o=$.m()
f=o.T(6)
A:{if(0===f){e=new A.O(A.bL(-2,h.$0(),null,null),A.bL(m,h.$0(),null,null))
break A}if(1===f){e=new A.O(A.bL(g.$0(),-2,null,null),A.bL(g.$0(),n,null,null))
break A}if(2===f){e=new A.O(A.bL(i.$0(),-2,null,null),A.bL(m,k.$0(),null,null))
break A}if(3===f){e=new A.O(A.bL(m,l.$0(),null,null),A.bL(i.$0(),n,null,null))
break A}if(4===f){e=new A.O(A.bL(j.$0(),n,null,null),A.bL(-2,l.$0(),null,null))
break A}if(5===f){e=new A.O(A.bL(-2,k.$0(),null,null),A.bL(j.$0(),-2,null,null))
break A}e=A.a_(A.cM("Unreachable"))}d=b.b.f.b.b.a
b=b.b.f.b.b.b
c=A.bL(o.aC(d*0.4,d*0.6),o.aC(b*0.4,b*0.6),null,null)
s.eo(e.a,c)
s.eo(c,e.b)
return 0
case 1:return a.c=p.at(-1),3}}}},
eo(b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=b2.a,a6=b3.a,a7=a5-a6,a8=b2.b,a9=b3.b,b0=a8-a9,b1=Math.sqrt(a7*a7+b0*b0)
if(b1>1){s=$.m()
r=b1/2
q=s.aO(r)
p=b1/4
r=s.aO(r)
o=Math.min(2,p)
n=A.bL((a5+a6)/2+q-p,(a8+a9)/2+r-p,B.e.P((b2.c+b3.c)/2+s.aC(-o,o),0,4),(b2.d+b3.d)/2)
a4.eo(b2,n)
a4.eo(n,b3)
return}a6=b2.d
a9=b2.c+a6
m=B.e.bM(a5-a9)
l=B.e.bM(a8-a9)
k=B.e.aR(a5+a9)
j=B.e.aR(a8+a9)
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
a6[a3].a=$.dw()
q.a(a4)
s.l(a0,e)
B.a.i(i,a+a0,a4)}else if(a2<=h){r.l(a0,e)
a3=b+a0
if(!(a3>=0&&a3<a9))return A.c(a6,a3)
if(a6[a3].a===$.fv()){r.l(a0,e)
a6[a3].a=$.d0()
q.a(a4)
s.l(a0,e)
B.a.i(i,a+a0,a4)}}}}}
A.qa.prototype={
$0(){var s=$.m(),r=this.a.a
r===$&&A.b()
r=r.b.f.b.b.b
return s.aC(r*0.2,r*0.4)},
$S:7}
A.qb.prototype={
$0(){var s=$.m(),r=this.a.a
r===$&&A.b()
r=r.b.f.b.b.b
return s.aC(r*0.6,r*0.8)},
$S:7}
A.q8.prototype={
$0(){var s=$.m(),r=this.a.a
r===$&&A.b()
r=r.b.f.b.b.a
return s.aC(r*0.6,r*0.8)},
$S:7}
A.qc.prototype={
$0(){var s=$.m(),r=this.a.a
r===$&&A.b()
r=r.b.f.b.b.a
return s.aC(r*0.2,r*0.4)},
$S:7}
A.q9.prototype={
$0(){var s=$.m(),r=this.a.a
r===$&&A.b()
r=r.b.f.b.b.b
return s.aC(r*0.2,r*0.8)},
$S:7}
A.q7.prototype={
$0(){var s=$.m(),r=this.a.a
r===$&&A.b()
r=r.b.f.b.b.a
return s.aC(r*0.2,r*0.8)},
$S:7}
A.rK.prototype={
t(a){return A.J(this.a)+","+A.J(this.b)+" ("+A.J(this.d)+")"}}
A.kS.prototype={
jD(a,b,c){var s,r,q,p,o,n,m,l,k,j
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
if(!(n&&k.b===B.r)&&o!==$.bC()&&k.b===B.r){o=this.a
o===$&&A.b()
l=!o.dl(this,new A.d(m,l))
o=l}else o=!1
if(o)return!1}return!0}}
A.hu.prototype={
aK(){return"RoomShapes."+this.b}}
A.qe.prototype={
$1(a){var s,r=this.a.F(0,t.j.a(a)),q=this.b
if(!q.b.G(0,r))return!1
q=q.B(r.a,r.b)
s=q.a
return!(s==null&&q.b===B.r)&&s!==$.bC()&&q.b===B.r},
$S:13}
A.dN.prototype={}
A.hv.prototype={
aK(){return"RoomSize."+this.b}}
A.ra.prototype={
dE(a){return new A.R(this.oj(t.jJ.a(a)),t.e)},
oj(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$dE(a2,a3,a4){if(a3===1){o.push(a4)
q=p}for(;;)A:switch(q){case 0:for(n=s.a.f,m=n.b,l=A.ab(m),k=n.a,j=m.b.a,i=k.length;l.q();){h=l.b
g=l.c
n.l(h,g)
h=g*j+h
if(!(h>=0&&h<i)){A.c(k,h)
q=1
break A}k[h].a=$.mQ()}for(l=J.ap(m.kK());l.q();){h=l.gH()
g=h.gm()
h=h.gn()
n.l(g,h)
g=h*j+g
if(!(g>=0&&g<i)){A.c(k,g)
q=1
break A}k[g].a=$.ix()}f=[$.xq(),$.xu(),$.xy(),$.xz(),$.xA(),$.xB(),$.xC(),$.xD()]
for(e=0;e<8;++e){d=B.c.ad(e,4)*13+5
l=B.c.A(e,4)
c=l*14+6
for(h=new A.cK(new A.Y(new A.d(d,c),new A.d(11,8)),d-1,c);h.q();){g=h.b
b=h.c
n.l(g,b)
g=b*j+g
if(!(g>=0&&g<i)){A.c(k,g)
q=1
break A}k[g].a=$.ix()}h=d+11
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
a1=$.uV()
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
h.fh(!0)
g=$.U()
if((h.a.e.a&g.a)!==0)h.f=B.c.P(h.f+64,0,192)}r.$1(m.ghf())
case 1:return 0
case 2:return a2.c=o.at(-1),3}}}}}
A.r7.prototype={
$1(a){return new A.eN(a)},
$S:67}
A.r6.prototype={
$1(a){return new A.eM(a)},
$S:68}
A.r5.prototype={
he(a,b,c){var s,r,q,p,o
for(s=this.b,r=0;r<s.length;++r){q=s[r]
p=q.b.bi(b,a)
o=q.c.bi(c,a)
B.a.i(s,r,new A.W(q.a,p,o))}return this},
o5(a,b,c,d){var s,r,q,p,o,n,m=this.b,l=B.a.gaB(m)
for(s=l.b,r=l.c,q=l.a,p=1;p<a;++p){o=s.bi(c,A.v(p,0,a,0,b))
n=r.bi(d,A.v(p,0,a,0,b))
B.a.j(m,new A.W(q,o,n))}return this},
eT(a){this.e=a
return this},
c7(a){this.d=a
return this},
cn(a){this.c=t.bj.a(a)
return this},
jL(){return this.cT($.bA())},
aM(){return this.cT($.U())},
a3(){return this.cT($.uE())},
bx(){return this.cT($.uF())},
cT(a){var s,r,q,p=this,o=p.b
if(o.length===1)o=B.a.gaB(o)
s=p.d
r=p.e
q=p.c
return new A.dT(p.a,s,r,o,a,q)}}
A.no.prototype={
$0(){return A.ua(this.a)},
$S:23}
A.nq.prototype={
$0(){return A.ua(this.a)},
$S:23}
A.nr.prototype={
$0(){return A.h7(t.cZ)},
$S:70}
A.np.prototype={
$0(){return A.ua(this.a)},
$S:23}
A.fd.prototype={
t(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=new A.dQ(""),c=e.a,b=c.Q.a.a
d.a=b
c=c.at
if(c instanceof A.ct)s="afraid"
else s=c instanceof A.cv?"awake":"asleep"
d.a=b+(" ("+s+")\n")
c=e.c
b=A.z(c).h("b0<1>")
r=A.a6(new A.b0(c,b),b.h("k.E"))
B.a.fm(r)
q=B.a.aE(r,0,new A.rH(),t.S)
for(b=r.length,p=e.d,o=0;o<r.length;r.length===b||(0,A.o)(r),++o){n=r[o]
m=B.j.p0(n,q)+" "
l=c.p(0,n)
for(k=A.z(l),j=new A.dY(l,l.c,l.d,l.b,k.h("dY<1>")),k=k.c,i=!1;j.q();){h=j.e
g=B.c.P(B.e.aR((h==null?k.a(h):h)*9),0,8)
if(!(g>=0&&g<9))return A.c(" \u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588",g)
m+=" \u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588"[g]
if(g>0)i=!0}if(!l.gaD(0)){j=l.b
h=l.c
if(j===h)A.a_(A.cE())
j=l.a
f=j.length
h=(h-1&f-1)>>>0
if(!(h>=0&&h<f))return A.c(j,h)
h=j[h]
k=B.e.hR(h==null?k.a(h):h,4)
m+=" "+B.j.d7(k,6)}if(p.p(0,n)!=null){m+=" "+A.J(p.p(0,n))
i=!0}if(i)d.a+=(m.charCodeAt(0)==0?m:m)+"\n"}c=d.a=A.u4(d.a,e.b,"\n")
return c.charCodeAt(0)==0?c:c}}
A.rH.prototype={
$2(a,b){return Math.max(A.w(a),A.a3(b).length)},
$S:24}
A.G.prototype={
gaV(){return!0},
o6(a,b,c){var s,r=this
r.a=b
s=b.y
r.b!==$&&A.ar()
r.b=s
r.c!==$&&A.ar()
r.c=a
r.d!==$&&A.ar()
r.d=c!==!1},
ha(a,b){var s,r,q
if(b==null){s=this.a
s.toString}else s=b
r=this.b
r===$&&A.b()
q=this.c
q===$&&A.b()
a.a=s
a.b!==$&&A.ar()
a.b=r
a.c!==$&&A.ar()
a.c=q
a.d!==$&&A.ar()
a.d=!1
if(a.gaV())B.a.j(q.c,a)
else{s=q.b
s.bh(s.$ti.c.a(a))}},
h9(a){return this.ha(a,null)},
by(a,b,c,d,e,f,g){var s,r,q,p,o=this.c
o===$&&A.b()
s=e==null?$.ax():e
if(g==null)r=b==null?null:b.y
else r=g
if(r==null)r=B.ak
q=d==null?B.r:d
p=c==null?0:c
B.a.j(o.d,new A.jm(a,r,q,s,b,f,p))},
o1(a,b,c,d){return this.by(a,b,c,null,d,null,null)},
ct(a,b){var s=null
return this.by(a,b,s,s,s,s,s)},
o2(a,b,c,d){return this.by(a,b,null,null,null,c,d)},
o0(a,b,c){var s=null
return this.by(a,s,s,s,s,b,c)},
o_(a,b,c){var s=null
return this.by(a,s,s,s,b,s,c)},
o3(a,b,c,d){return this.by(a,null,null,b,c,null,d)},
o4(a,b,c,d){return this.by(a,null,null,b,null,c,d)},
jv(a,b,c){var s=null
return this.by(a,s,s,b,s,s,c)},
hb(a,b){var s=null
return this.by(a,s,s,s,s,s,b)},
nZ(a,b,c){var s=null
return this.by(a,b,c,s,s,s,s)},
ju(a,b,c){var s=null
return this.by(a,b,s,s,s,s,c)},
gdW(){return 0.2},
hw(a,b,c){var s=this.c
s===$&&A.b()
s.y.Q.at.X(B.w,a,b,c,null)},
oU(a,b){return this.hw(a,b,null)},
eb(a,b,c,d){var s,r,q=this.c
q===$&&A.b()
s=q.x
s===$&&A.b()
r=this.b
r===$&&A.b()
r=s.f.B(r.gm(),r.gn())
if(!r.b&&r.d+r.e>r.c||this.a instanceof A.aw)q.y.Q.at.X(B.w,a,b,c,d)},
a_(a,b){return this.eb(a,b,null,null)},
bW(a,b,c){return this.eb(a,b,c,null)},
l6(a){return this.eb(a,null,null,null)},
ft(a,b,c){if(a!=null)this.eb(a,b,c,null)
return B.n},
cq(a,b){return this.ft(a,b,null)},
ei(){return this.ft(null,null,null)},
eV(a,b,c){var s,r=this,q=r.c
q===$&&A.b()
q=q.x
q===$&&A.b()
s=r.b
s===$&&A.b()
s=q.f.B(s.gm(),s.gn())
q=!s.b&&s.d+s.e>s.c||r.a instanceof A.aw
if(q){q=r.c
q===$&&A.b()
q.y.Q.at.X(B.X,a,b,c,null)}return B.bk},
d2(a){return this.eV(a,null,null)},
dP(a,b){return this.eV(a,b,null)},
bd(a){var s,r,q=this.c
q===$&&A.b()
s=this.a
s.toString
r=this.d
r===$&&A.b()
a.o6(q,s,r)
return new A.d2(a,!1,!0)}}
A.d2.prototype={}
A.jx.prototype={
V(){var s=this,r=t.V.a(s.a),q=r.ch,p=s.e
if(q<p)return s.d2("You aren't focused enough.")
r.ch=q-p
return s.bd(s.f)}}
A.jF.prototype={
gmD(){var s,r,q=this,p=q.Q$
if(p===$){s=q.f6()
r=s.a()
q.Q$!==$&&A.e9()
p=q.Q$=new A.ag(r,s.$ti.h("ag<1>"))}return p},
V(){var s,r=this.gmD()
if(!r.q())return B.n
s=r.b
return s==null?r.$ti.c.a(s):s},
kR(a){var s,r=J.vw(a,t.fw)
for(s=0;s<a;++s)r[s]=B.a3
return r}}
A.iI.prototype={
V(){var s,r,q,p,o=this
for(s=o.e,r=o.a.eP(s),q=r.length,p=0;p<r.length;r.length===q||(0,A.o)(r),++p){r[p].hF(o,o.a,s)
if(s.z<=0)break}return B.n},
gdW(){return 1},
t(a){return A.J(this.a)+" attacks "+this.e.t(0)}}
A.jT.prototype={
e0(){var s,r=this
switch(r.e){case B.W:s=r.c
s===$&&A.b()
s=s.x
s===$&&A.b()
s.e1(r.f,r.a.y)
break
case B.I:B.a.ac(t.V.a(r.a).Q.e.b,r.f)
break
case B.a2:s=r.f
t.V.a(r.a).Q.f.ac(0,s)
if(s.a.ay>0){s=r.c
s===$&&A.b()
s=s.x
s===$&&A.b()
s.gav().r=!0}break
default:throw A.n(A.cM("Invalid location."))}},
bl(){switch(this.e){case B.W:break
case B.I:t.V.a(this.a).Q.e.bl()
break
case B.a2:t.V.a(this.a)
break
default:throw A.n(A.cM("Invalid location."))}}}
A.kx.prototype={
V(){var s,r=this,q="{1} [don't|doesn't] have room for {the 2}.",p=t.V,o=r.e,n=p.a(r.a).Q.e.c8(o),m=n.a
if(m===0)return r.eV(q,r.a,o)
r.bW("{1} pick[s] up {the 2}.",r.a,o.b_(m))
m=n.b
s=r.a
if(m===0){m=r.c
m===$&&A.b()
m=m.x
m===$&&A.b()
m.e1(o,s.y)}else r.bW(q,s,o.b_(m))
p=p.a(r.a)
r.c===$&&A.b()
p.Q.ax.d3(o)
p.br()
return B.n}}
A.je.prototype={
V(){var s=this,r=s.z,q=s.f
if(r===q.f)s.e0()
else{q=q.dh(r)
s.bl()}r=s.a
if(s.e===B.a2){s.bW("{1} take[s] off and drop[s] {the 2}.",r,q)
t.V.a(s.a).br()}else s.bW("{1} drop[s] {the 2}.",r,q)
r=s.c
r===$&&A.b()
r=r.x
r===$&&A.b()
r.cU(q,s.a.y)
return B.n}}
A.ji.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.e
if(d===B.a2)return e.bd(new A.le(d,e.f))
d=t.V
s=e.f
if(!d.a(e.a).Q.f.ol(s))return e.eV("{1} cannot equip {the 2}.",e.a,s)
if(s.f===1){e.e0()
r=s}else{r=s.dh(1)
e.bl()}q=d.a(e.a).Q.f.jP(r)
for(p=q.length,o=0;o<q.length;q.length===p||(0,A.o)(q),++o){n=q[o]
m=n.f
l=d.a(e.a).Q.e.fg(n,!0)
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
if(!g.b&&g.d+g.e>g.c||e.a instanceof A.aw)j.y.Q.at.X(B.w,"{1} unequip[s] {the 2}.",k,new A.L(n.a,n.b,n.c,n.d,m),null)}else{m=e.c
m===$&&A.b()
j=m.x
j===$&&A.b()
j.cU(n,k.y)
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
if(!h.b&&h.d+h.e>h.c||e.a instanceof A.aw)m.y.Q.at.X(B.w,u.f,k,n,null)}}e.bW("{1} equip[s] {the 2}.",e.a,r)
if(s.a.ay>0){p=e.c
p===$&&A.b()
p=p.x
p===$&&A.b()
p.gav().r=!0}d.a(e.a).br()
return B.n}}
A.le.prototype={
V(){var s,r,q,p,o=this,n=o.f,m=n.cX()
o.e0()
s=t.V
r=s.a(o.a).Q.e.fg(n,!0)
q=o.a
if(r.b===0)o.bW("{1} unequip[s] {the 2}.",q,m)
else{p=o.c
p===$&&A.b()
p=p.x
p===$&&A.b()
p.cU(n,q.y)
o.bW(u.f,o.a,n)}s.a(o.a).br()
return B.n}}
A.lh.prototype={
V(){var s,r=this,q=r.f,p=q.a.w
if(p==null)return r.dP("{the 1} can't be used.",q);--q.f
p=p.b.$0()
if(q.f===0)r.e0()
else r.bl()
if(r.e===B.W){s=t.V.a(r.a)
r.c===$&&A.b()
s.Q.ax.d3(q)
s.br()}t.V.a(r.a).Q.ax.ps(q)
return r.bd(p)}}
A.cx.prototype={
fI(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
t.C.a(b)
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
if(!f.b&&f.d+f.e>f.c||d.a instanceof A.aw)i.y.Q.at.X(B.w,q,n,c,c)
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
if(!f.b&&f.d+f.e>f.c||d.a instanceof A.aw)i.y.Q.at.X(B.w,q,new A.L(m,n.b,n.c,n.d,k),c,c)}p+=m.cy*k}return p},
hh(a,b){var s=this.c
s===$&&A.b()
s=s.x
s===$&&A.b()
return this.fI(b,s.c5(a),!1,new A.ny(this,a))},
jK(a){var s,r,q=this,p={},o=q.a
if(!(o instanceof A.aw))return 0
if(o.c6(a)>0)return 0
o=t.V
s=q.fI(a,o.a(q.a).Q.e,!0,new A.nz(q))
p.a=!1
r=q.fI(a,o.a(q.a).Q.f,!0,new A.nA(p,q))
if(p.a)o.a(q.a).br()
return s+r}}
A.ny.prototype={
$1(a){var s=this.a.c
s===$&&A.b()
s=s.x
s===$&&A.b()
s.e1(a,this.b)},
$S:6}
A.nz.prototype={
$1(a){B.a.ac(t.V.a(this.a.a).Q.e.b,a)},
$S:6}
A.nA.prototype={
$1(a){t.V.a(this.b.a).Q.f.ac(0,a)
this.a.a=!0},
$S:6}
A.k7.prototype={
gmS(){var s,r=this,q=r.r
if(q===$){s=A.dX(r.a.y,r.e)
s.q()
r.f=r.a.y
r.r!==$&&A.e9()
r.r=s
q=s}return q},
gaV(){return!1},
V(){var s,r,q=this,p=q.gmS(),o=p.a,n=q.c
n===$&&A.b()
s=n.x
s===$&&A.b()
s=s.f.B(o.gm(),o.gn())
r=$.U()
if((s.a.e.a&r.a)===0||o.S(0,q.a.y).bg(0,q.gaz())){p=q.f
p===$&&A.b()
q.km(p)
return q.ei()}s=q.f
s===$&&A.b()
q.ks(s,o)
n=n.x
n===$&&A.b()
n=n.w.B(o.gm(),o.gn())
if(n!=null&&n!==q.a)if(q.hD(o,n))return B.n
if(o.Z(0,q.e))if(q.ku(o))return B.n
q.f=o
p.q()
return B.a3},
hD(a,b){return!0},
km(a){},
ku(a){return!1}}
A.la.prototype={
V(){var s=this,r=s.f
if(r.a.y==null)return s.dP("{the 1} can't be thrown.",r)
if(r.f===1)s.e0()
else{r=r.dh(1)
s.bl()}return s.bd(new A.lc(r,s.z,s.Q))}}
A.lc.prototype={
gaz(){return this.as.gaz()},
ks(a,b){this.o0(B.bH,this.Q,b)},
hD(a,b){var s=this
if(s.as.hF(s,s.a,b)===0){s.at=!0
return!1}s.fK(a)
return!0},
km(a){this.fK(a)},
ku(a){if(this.at)return!1
this.fK(a)
return!0},
fK(a){var s,r=this,q=r.Q,p=q.a.y,o=p.c
if(o!=null){r.h9(o.$1(a))
return}o=$.m()
s=p.a
if(o.T(100)<s){r.a_("{1} breaks!",q)
return}o=r.c
o===$&&A.b()
o=o.x
o===$&&A.b()
o.cU(q,a)}}
A.lm.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.e
if(b===B.r)return c.bd(A.kP())
s=c.a.y.F(0,b)
b=c.c
b===$&&A.b()
r=b.x
r===$&&A.b()
q=s.a
p=s.b
r=r.w.B(q,p)
if(r!=null&&r!==c.a)return c.bd(new A.iI(r))
r=b.x
r===$&&A.b()
o=r.f.B(q,p).a
r=o.f
if(r!=null){n=o.e
m=$.bA()
if(n.Z(0,m)&&(c.a.gb4().a&m.a)!==0||(n.a&c.a.gb4().a)===0)return c.bd(r.$1(s))}r=b.x
r===$&&A.b()
if(!r.bk(s,c.a.gb4())){if(c.a instanceof A.aw){b=b.x
b===$&&A.b()
b.d1(q,p,!0)}return c.dP("{1} hit[s] the "+o.a+".",c.a)}c.a.dd(b,s)
if(c.a instanceof A.aw){r=b.x
r===$&&A.b()
r=r.c5(s)
r=A.a6(r,A.z(r).h("k.E"))
q=r.length
p=t.V
n=b.y.Q.at
l=0
for(;l<r.length;r.length===q||(0,A.o)(r),++l){k=r[l]
m=p.a(c.a)
if(!(m.at instanceof A.aR))m.at=null
if(k.a.ch){j=B.e.aR(k.gbf()*0.5)
i=B.e.aR(k.gbf()*1.5)
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
if(!e.b&&e.d+e.e>e.c||c.a instanceof A.aw)n.X(B.w,"{1} pick[s] up {2} worth "+h+" gold.",m,k,null)
m=b.x
m===$&&A.b()
m.e1(k,s)
m=c.a
c.o2(B.bv,m,k,m.y)}else{g=b.x
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
if(!e.b&&e.d+e.e>e.c||c.a instanceof A.aw)n.X(B.w,"{1} [are|is] standing on {2}.",m,k,null)}}p.a(c.a).fa(1)}return c.ei()},
t(a){return A.J(this.a)+" walks "+this.e.t(0)}}
A.ks.prototype={
V(){var s,r,q=this,p=q.c
p===$&&A.b()
s=p.x
s===$&&A.b()
r=q.e
s.f.B(r.gm(),r.gn()).a=q.f
p=p.x
p===$&&A.b()
p.hQ()
p=q.a
if(p instanceof A.aw)p.fa(1)
return q.cq("{1} open[s] the door.",q.a)}}
A.iZ.prototype={
V(){var s,r,q=this,p=q.c
p===$&&A.b()
s=p.x
s===$&&A.b()
r=q.e
s=s.w.B(r.gm(),r.gn())
if(s!=null)return q.dP("{1} [are|is] in the way!",s)
s=p.x
s===$&&A.b()
s.f.B(r.gm(),r.gn()).a=q.f
p=p.x
p===$&&A.b()
p.hQ()
p=q.a
if(p instanceof A.aw)p.fa(1)
return q.cq("{1} close[s] the door.",q.a)}}
A.kO.prototype={
V(){var s,r,q,p,o,n=this,m=null
A:{s=n.a
r=s instanceof A.aw
q=r?s:m
if(r){r=q.ay
if(r>0){r=B.c.P(r-1,0,400)
q.ay=r
if(r===0){r=n.c
r===$&&A.b()
r.y.Q.at.X(B.w,"You are getting hungry.",m,m,m)}if(q.w.a<=0)q.z=B.c.P(q.z+1,0,q.gbp())}q.fa(2)
break A}r=!1
if(s instanceof A.bD){r=n.c
r===$&&A.b()
r=r.x
r===$&&A.b()
p=s.y
p=r.f.B(p.gm(),p.gn())
r=!(!p.b&&p.d+p.e>p.c)&&s.w.a<=0
o=s}else o=m
if(r)o.z=B.c.P(o.z+1,0,o.gbp())}return n.ei()},
gdW(){return 0.05}}
A.bD.prototype={
f5(a){return!1},
gb4(){var s=this.cm()
return this.e.a>0?new A.ad(s.a|$.U().a):s},
ghg(){return new A.R(this.ov(),t.cn)},
ov(){var s=this
return function(){var r=0,q=1,p=[],o
return function $async$ghg(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gjy()
if(s.b.a>0||s.d.a>0)o=B.c.A(o,3)
r=o!==0?2:3
break
case 2:r=4
return a.b=new A.az(o,"{1} dodge[s] {2}."),1
case 4:case 3:r=5
return a.aL(s.ko())
case 5:return 0
case 1:return a.c=p.at(-1),3}}}},
dd(a,b){var s,r,q,p,o=this
if(o.y.Z(0,b))return
s=o.y
if(o.gdN()>0){r=a.x
r===$&&A.b()
r.gav().r=!0}o.hA(a,s,b)
r=a.x
r===$&&A.b()
r=r.w
q=r.B(s.gm(),s.gn())
p=r.$ti.c
p.a(null)
r.aW(s.gm(),s.gn(),null)
p.a(q)
r.aW(b.gm(),b.gn(),q)
o.y=b},
hA(a,b,c){},
eP(a){var s,r,q=this.kk(a)
for(s=q.length,r=0;r<q.length;q.length===s||(0,A.o)(q),++r)this.kh(q[r],B.hr)
return q},
kh(a,b){var s
if(this.b.a>0||this.d.a>0){switch(b.a){case 0:s=0.5
break
case 1:s=0.3
break
case 2:s=0.2
break
default:s=null}a.l0(s,"blindness")}this.kr(a,b)},
kr(a,b){},
c6(a){var s=this.hC(a),r=this.fd(a)
return r.a>0?s+r.b:s},
fd(a){var s=this.x,r=s.p(0,a)
if(r==null){r=new A.ht(a)
s.i(0,a,r)
s=r}else s=r
return s},
kI(a,b,c,d){var s=this
s.z=B.c.P(s.z-b,0,s.gbp())
s.kt(a,d,b)
if(s.z>0)return!1
a.ct(B.bu,s)
a.bW("{1} kill[s] {2}.",c,s)
if(d!=null)d.kq(a,s)
s.kl(a,c)
return!0},
pk(a,b,c){return this.kI(a,b,c,null)},
kp(a,b,c){},
kt(a,b,c){},
kq(a,b){},
kn(a){},
oI(a){var s,r,q,p,o,n=this
n.a.a-=240
s=A.a([n.c,n.b,n.d,n.e,n.f,n.r,n.w],t.c8)
r=n.x
B.a.U(s,new A.cG(r,A.z(r).h("cG<2>")))
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
o=p.a
if(o>0){--o
p.a=o
if(o>0)p.kv(a)
else{p.cD(a)
p.b=0}}}if(n.z>0)n.kn(a)}}
A.b5.prototype={
t(a){var s=B.c.t(this.c),r=this.e
if(r!==$.ax())s=r.t(0)+" "+s
r=this.d
return r>0?s+("@"+r):s}}
A.jK.prototype={
aK(){return"HitType."+this.b}}
A.d4.prototype={}
A.df.prototype={}
A.b6.prototype={
gaz(){var s=this.a.d
if(s===0)return 0
return Math.max(1,B.e.O(s*this.r))},
gnz(){return B.a.aE(this.b,1,new A.ox(),t.i)},
gny(){return B.a.aE(this.c,0,new A.ow(),t.i)},
giw(){return B.a.aE(this.d,1,new A.ov(),t.i)},
giv(){return B.a.aE(this.e,0,new A.ou(),t.i)},
gb1(){var s=this.f
if(s!==$.ax())return s
return this.a.e},
gcW(){return this.a.c*this.giw()+this.giv()},
jw(a,b){if(a===0)return
B.a.j(this.c,new A.d4(a))},
l0(a,b){if(a===1)return
B.a.j(this.b,new A.df(a))},
nX(a,b){if(a===0)return
B.a.j(this.e,new A.d4(a))},
cO(a,b){if(a===1)return
B.a.j(this.d,new A.df(a))},
dY(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.lz(a,b,a0),c=e.lA(a,a0)
if(d){s=e.a.a
if(s==null)s=b
s.toString
r=s}else r=$.uM()
q=c?a0:$.uM()
if(a0 instanceof A.aw)a0.pa(e)
if(a1!==!1){s=$.m()
p=s.aw(1,100)*e.gnz()+e.gny()
o=a0.ghg()
n=A.a6(o,o.$ti.h("k.E"))
B.a.bJ(t.hy.a(n),s.a)
for(s=n.length,m=0;m<s;++m){l=n[m]
p-=l.a
if(p<0){if(d||c){s=a.c
s===$&&A.b()
s.y.Q.at.X(B.w,l.b,q,r,null)}return 0}}}k=a0.gdC()
j=a0.c6(e.gb1())
s=e.a
i=B.e.L((s.c*e.giw()+e.giv())*(1/(1+j))*100)
h=A.wK(k)
g=B.e.O($.m().cK(i,B.c.A(i,2))*h/100)
if(g===0){if(d||c)a.hw("{1} do[es] no damage to {2}.",r,q)
return 0}if(b!=null)b.kp(a,a0,g)
if(a0.kI(a,g,r,b))return g
if(j<=0){f=e.gb1().f.$1(g)
if(f!=null)a.ha(f,a0)}a.o1(B.bx,a0,g,e.gb1())
if(d||c)a.hw("{1} "+s.b+" {2}.",r,q)
return g},
hF(a,b,c){return this.dY(a,b,c,null)},
lz(a,b,c){var s,r
if(b instanceof A.aw)return!0
if(b!=null){s=a.c
s===$&&A.b()
s=s.x
s===$&&A.b()
r=b.y
r=s.f.B(r.gm(),r.gn())
s=!r.b&&r.d+r.e>r.c}else s=!1
if(s)return!0
if(c instanceof A.aw&&this.a.a!=null)return!0
s=a.c
s===$&&A.b()
s=s.x
s===$&&A.b()
r=c.y
r=s.f.B(r.gm(),r.gn())
if(!r.b&&r.d+r.e>r.c&&this.a.a!=null)return!0
return!1},
lA(a,b){var s,r
if(b instanceof A.aw)return!0
s=a.c
s===$&&A.b()
s=s.x
s===$&&A.b()
r=b.y
r=s.f.B(r.gm(),r.gn())
if(!r.b&&r.d+r.e>r.c)return!0
return!1}}
A.ox.prototype={
$2(a,b){return A.by(a)*t.jK.a(b).a},
$S:28}
A.ow.prototype={
$2(a,b){return A.by(a)+t.fV.a(b).a},
$S:48}
A.ov.prototype={
$2(a,b){return A.by(a)*t.jK.a(b).a},
$S:28}
A.ou.prototype={
$2(a,b){return A.by(a)+t.fV.a(b).a},
$S:48}
A.az.prototype={}
A.bY.prototype={
kv(a){}}
A.fT.prototype={
cD(a){a.a_("{1} slow[s] back down.",a.a)}}
A.fE.prototype={
cD(a){a.a_("{1} warm[s] back up.",a.a)}}
A.hl.prototype={
kv(a){var s=a.a
s.toString
if(!s.pk(a,this.b,new A.aG(A.aO("poison",B.x,B.aF).a6(1))))a.a_("{1} [are|is] hurt by poison!",a.a)},
cD(a){a.a_("{1} [are|is] no longer poisoned.",a.a)}}
A.dA.prototype={
cD(a){var s,r
a.a_("{1} can see clearly again.",a.a)
s=a.a
r=a.c
r===$&&A.b()
if(s===r.y){s=r.x
s===$&&A.b()
s.gav().w=!0}}}
A.fQ.prototype={
cD(a){a.a_("{1} flutter[s] down to the ground.",a.a)}}
A.ht.prototype={
cD(a){a.a_("{1} feel[s] susceptible to "+this.c.t(0)+".",a.a)}}
A.hk.prototype={
cD(a){a.a_("{1} no longer perceive[s] monsters.",a.a)}}
A.dC.prototype={
t(a){return this.a}}
A.nL.prototype={
$1(a){A.w(a)
return null},
$S:27}
A.nM.prototype={
$4(a,b,c,d){t.u.a(a)
t.Z.a(b)
A.e0(c)
A.w(d)
return null},
$S:75}
A.fN.prototype={}
A.jm.prototype={}
A.aI.prototype={
t(a){return this.a}}
A.jC.prototype={
e7(){return new A.R(this.kZ(),t.e)},
kZ(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$e7(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=A.dV()
n=s.y
m=s.x
m===$&&A.b()
r=2
return a.aL(s.a.oh(n.Q.ax,m,s.w,new A.os(o)))
case 2:r=3
return a.b="Calculating visibility",1
case 3:n.dd(s,t.u.a(o.fZ()))
m.gav().cG()
return 0
case 1:return a.c=p.at(-1),3}}}},
bu(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
for(s=b.b,r=b.y,q=b.e,p=b.c,o=s.$ti.c,n=b.d,m=!1;;){for(;!s.gaD(0);m=!0){l=s.b
if(l===s.c)A.a_(A.cE())
k=s.a
if(!(l<k.length))return A.c(k,l)
j=k[l]
if(j==null)j=o.a(j)
i=j.V()
for(;h=i.a,h!=null;j=h){s.cH()
o.a(h)
l=s.b
k=s.a
l=(l-1&k.length-1)>>>0
s.b=l
B.a.i(k,l,h)
if(s.b===s.c)s.iI();++s.d
i=h.V()}while(l=p.length,l!==0){if(0>=l)return A.c(p,-1)
g=p.pop().V()
while(l=g.a,l!=null)g=l.V()}l=b.x
l===$&&A.b()
l.gav().cG()
k=i.c
if(k){s.cH()
if(i.b){f=j.d
f===$&&A.b()}else f=!1
if(f){j.a.oI(j)
l.e=B.c.ad(l.e+1,l.b.length)}}if(!k||j.a===r||n.length!==0){s=A.a(n.slice(0),A.M(n))
B.a.aS(n)
return new A.eU(s)}}if(b.r!=null)b.jk()
while(s.b===s.c){l=b.x
l===$&&A.b()
k=l.b
f=l.e
if(!(f>=0&&f<k.length))return A.c(k,f)
e=k[f]
f=e.a
if(f.a>=240&&e.f5(b))return b.iQ(m)
if(f.a<240){d=e.gjz()+e.f.b-e.c.b
c=f.a
if(!(d>=0&&d<13))return A.c(B.aM,d)
c+=B.aM[d]
f.a=c
c=c>=240
f=c}else f=!0
if(f){if(e.f5(b))return b.iQ(m)
j=e.ak(b)
j.a=e
l=e.y
j.b!==$&&A.ar()
j.b=l
j.c!==$&&A.ar()
j.c=b
j.d!==$&&A.ar()
j.d=!0
s.bh(o.a(j))}else l.e=B.c.ad(l.e+1,k.length)
if(e===r){l=q.a+=60
if(l>=240){q.a=l-240
b.r=0
b.jk()}}}}},
iQ(a){if(a)return this.mT()
return B.cJ},
mT(){var s=this.d,r=A.a(s.slice(0),A.M(s))
B.a.aS(s)
return new A.eU(r)},
cA(a){var s,r=this.x
r===$&&A.b()
s=a.y
s=r.f.B(s.gm(),s.gn())
if(!s.b&&s.d+s.e>s.c)return!0
r=this.y
s=r.r
if(s.a>0&&r.y.S(0,a.y).ea(0,s.b))return!0
return!1},
jk(){var s,r,q,p=this,o=p.f,n=p.a
for(;;){s=p.r
s.toString
if(!(s<o.length))break
r=o[s]
s=p.x
s===$&&A.b()
q=n.pr(s,r)
s=p.r
s.toString
p.r=s+1
if(q!=null){q.b!==$&&A.ar()
q.b=r
q.c!==$&&A.ar()
q.c=p
q.d!==$&&A.ar()
q.d=!1
o=p.b
o.bh(o.$ti.c.a(q))
return}}p.r=null}}
A.os.prototype={
$1(a){this.a.b=a},
$S:76}
A.hL.prototype={}
A.ll.prototype={}
A.eU.prototype={}
A.k6.prototype={
hW(a){this.X(B.ce,a,null,null,null)},
jI(a,b){this.X(B.cf,a,b,null,null)},
dK(a){return this.jI(a,null)},
X(a,b,c,d,e){var s,r
b=this.ml(b,c,d,e);++this.b
s=this.a
if(s.length!==0){r=B.a.gcB(s)
if(r.b===b){++r.c
return}}B.a.j(s,new A.hb(a,b,1))
if(s.length>100)B.a.d9(s,0)},
ml(a,b,c,d){var s,r,q,p,o,n,m=[b,c,d]
for(s=a,r=1;r<=3;++r){q=m[r-1]
if(q!=null){p=""+r
o="{"+p
n=q.gao()
s=A.bg(s,o+"}",n.b)
n=q.gao()
s=A.bg(s,"{the "+p+"}",n.c)
p=q.gao()
s=A.bg(s,o+" he}",p.d.c)
p=q.gao()
s=A.bg(s,o+" him}",p.d.d)
p=q.gao()
s=A.bg(s,o+" his}",p.d.e)}}if(b!=null)s=A.vG(s,b.gao().d)
if(0>=s.length)return A.c(s,0)
return s[0].toUpperCase()+B.j.cQ(s,1)}}
A.pf.prototype={
$1(a){var s,r=a.p(0,1)
r.toString
s=a.p(0,3)
if(s!=null){if(!this.a)r=s
return r}else{if(this.a)r=""
return r}},
$S:26}
A.ph.prototype={
$1(a){var s,r=this.a,q=r.b
if(q===-1)return
s=r.a
if(s.length!==0)s=r.a=s+" "
r.a=s+B.j.aJ(this.b,q,a)
r.b=-1},
$S:78}
A.pg.prototype={
$0(){var s=this.a
B.a.j(this.b,s.a)
s.a=""},
$S:0}
A.bR.prototype={
aK(){return"LogType."+this.b}}
A.hb.prototype={}
A.tc.prototype={
$1(a){a=((B.c.eD(a,16)^a)>>>0)*73244475>>>0
a=((a>>>16^a)>>>0)*73244475>>>0
return(a>>>16^a)>>>0},
$S:4}
A.eZ.prototype={
gc_(){var s=this.b,r=A.z(s).h("cG<2>"),q=this.$ti.c
return A.pt(new A.cG(s,r),r.al(q).h("1(k.E)").a(new A.pZ(this)),r.h("k.E"),q)},
cf(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(a)
if(b==null)b=B.c.t(m.b.a)
if(c==null)c=1
if(d==null)d=c
if(e==null)e=1
if(f==null)f=e
s=m.b
if(s.aj(b))throw A.n(A.aC('Already have a resource named "'+b+'".',null))
r=A.b7(l.h("bU<1>"))
s.i(0,b,new A.bo(a,c,d,e,f,r,l.h("bo<1>")))
if(g!=null&&g!=="")for(l=g.split(" "),s=l.length,q=m.a,p=0;p<s;++p){o=l[p]
n=q.p(0,o)
if(n==null)throw A.n(A.aC('Unknown tag "'+o+'".',null))
r.j(0,n)}},
c3(a){var s,r,q,p,o,n,m,l,k,j,i
for(s=a.split(" "),r=s.length,q=this.a,p=this.$ti.h("bU<1>"),o=0;o<s.length;s.length===r||(0,A.o)(s),++o)for(n=s[o].split("/"),m=n.length,l=null,k=0;k<m;++k,l=i){j=n[k]
i=q.p(0,j)
if(i==null){i=new A.bU(j,l,p)
q.i(0,j,i)}}},
oH(a){var s=this.b.p(0,a)
if(s==null)throw A.n(A.aC('Unknown resource "'+a+'".',null))
return s.a},
c9(a){var s=this.b.p(0,a)
if(s==null)return null
return s.a},
l_(a){var s,r,q=this.b.p(0,a)
if(q==null)throw A.n(A.aC('Unknown resource "'+a+'".',null))
s=q.f
r=A.z(s)
return new A.dB(s,r.h("q(1)").a(new A.q_(this)),r.h("dB<1,q>"))},
da(a,b,c){var s,r,q,p=this,o={}
o.a=b
s=b==null?o.a=!0:b
if(c==null)return p.h2("",a,new A.q3(p))
r=p.a.p(0,c)
q=r.a
if(!s)q+=" (only)"
return p.h2(q,a,new A.q4(o,p,r))},
hT(a){return this.da(a,null,null)},
kN(a,b){return this.da(a,null,b)},
po(a,b){var s,r,q,p,o,n=this
t.bq.a(b)
s=n.$ti.h("bU<1>")
r=b.$ti
q=r.h("k.E")
p=A.pt(b,r.al(s).h("1(k.E)").a(new A.q1(n)),q,s)
o=A.a6(b,q)
B.a.fm(o)
return n.h2(B.a.aP(o,"|")+" (match)",a,new A.q2(n,p))},
h2(a,b,c){var s,r,q,p,o,n,m,l,k,j=this.$ti
j.h("F(bo<1>)").a(c)
s=new A.mh(a,b)
r=this.c
q=r.p(0,s)
if(q==null){p=A.a([],j.h("r<bo<1>>"))
o=A.a([],t.gk)
for(n=this.b,n=new A.cF(n,n.r,n.e,A.z(n).h("cF<2>")),m=0;n.q();){l=n.d
k=c.$1(l)
if(k===0)continue
m+=Math.max(1e-7,k*(l.oJ(b)*l.op(b)))
B.a.j(p,l)
B.a.j(o,m)}q=new A.ia(p,o,m,j.h("ia<1>"))
r.i(0,s,q)}return q.eO()}}
A.pZ.prototype={
$1(a){return this.a.$ti.h("bo<1>").a(a).a},
$S(){return this.a.$ti.h("1(bo<1>)")}}
A.q_.prototype={
$1(a){return this.a.$ti.h("bU<1>").a(a).a},
$S(){return this.a.$ti.h("q(bU<1>)")}}
A.q3.prototype={
$1(a){this.a.$ti.h("bo<1>").a(a)
return 1},
$S(){return this.a.$ti.h("F(bo<1>)")}}
A.q4.prototype={
$1(a){var s,r,q,p,o,n,m,l
for(s=this.c,r=this.a,q=this.b.$ti.h("bo<1>").a(a).f,p=A.z(q),o=p.h("cU<1>"),p=p.c,n=1;s!=null;s=s.b){for(m=new A.cU(q,q.r,o),m.c=q.e;m.q();){l=m.d
if((l==null?p.a(l):l).G(0,s))return n}m=r.a
m.toString
if(!m)break
n/=10}return 0},
$S(){return this.b.$ti.h("F(bo<1>)")}}
A.q1.prototype={
$1(a){var s
A.a3(a)
s=this.a.a.p(0,a)
if(s==null)throw A.n(A.aC('Unknown tag "'+a+'".',null))
return s},
$S(){return this.a.$ti.h("bU<1>(q)")}}
A.q2.prototype={
$1(a){var s,r,q,p,o=this.a
for(s=o.$ti.h("bo<1>").a(a).f,s=A.u8(s,s.r,A.z(s).c),r=this.b,q=s.$ti.c;s.q();){p=s.d
if(r.cV(0,new A.q0(o,p==null?q.a(p):p)))return 1}return 0},
$S(){return this.a.$ti.h("F(bo<1>)")}}
A.q0.prototype={
$1(a){return this.a.$ti.h("bU<1>").a(a).G(0,this.b)},
$S(){return this.a.$ti.h("B(bU<1>)")}}
A.bo.prototype={
oJ(a){var s=this,r=s.b,q=s.c
if(r===q)return s.d
return A.v(a,r,q,s.d,s.e)},
op(a){var s,r,q=this.b
if(a<q){s=q-a
r=0.6+a*0.2
return Math.exp(-0.5*s*s/(r*r))}else{q=this.c
if(a>q){s=a-q
r=1+a*0.1
return Math.exp(-0.5*s*s/(r*r))}else return 1}}}
A.bU.prototype={
G(a,b){var s
this.$ti.a(b)
for(s=this;s!=null;s=s.b)if(b===s)return!0
return!1},
t(a){var s=this.b
if(s==null)return this.a
return s.t(0)+"/"+this.a}}
A.mh.prototype={
ga0(a){return B.j.ga0(this.a)^B.c.ga0(this.b)},
Z(a,b){if(b==null)return!1
t.nP.a(b)
return this.a===b.a&&this.b===b.b},
t(a){return this.a+" ("+this.b+")"}}
A.ia.prototype={
eO(){var s,r,q,p,o,n,m,l,k=this.b
if(k.length===0)return null
s=$.m().aO(this.d)
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
A.dj.prototype={
t(a){return this.gao().a}}
A.aG.prototype={
gao(){return this.a}}
A.pJ.prototype={
jB(a,b,c){var s,r,q=this,p=t.fm
p=new A.pM(q,a,p.a(b),p.a(c))
s=q.r
if(a===1)return new A.hg(p.$1(q.b),p.$1(q.c),p.$1(q.e),s)
else{r=q.d
return new A.hg(p.$1(r),p.$1(r),p.$1(q.f),s)}},
a6(a){return this.jB(a,null,null)},
t(a){return this.b}}
A.pM.prototype={
$1(a){var s,r,q=this,p=B.c.t(q.b),o=A.bg(a,"#",p)
p=q.c
if(p!=null&&p.length!==0){if(0>=p.length)return A.c(p,0)
s=p[0]
if(0>=s.length)return A.c(s,0)
r=B.j.G("aeiouAEIOU",s[0])?"an":"a"
o=A.bg(o,"<a>",r)
p=B.a.aP(p," ")
o=A.bg(o,"<p>",p+" ")}else{p=q.a.a?"an":"a"
o=A.bg(o,"<a>",p)
o=A.bg(o,"<p>","")}p=q.d
return p!=null&&p.length!==0?o+" "+B.a.aP(p," "):o},
$S:5}
A.pL.prototype={
$1(a){var s,r
this.a.a=!0
s=a.p(0,1)
s.toString
r=a.p(0,3)
if(r!=null){if(!this.b)s=r
return s}else{if(this.b)s=""
return s}},
$S:26}
A.hh.prototype={
aK(){return"NounCategory."+this.b}}
A.hg.prototype={
t(a){return this.a}}
A.dM.prototype={
aK(){return"Pronoun."+this.b},
t(a){return this.c+"/"+this.d}}
A.ps.prototype={
$1(a){this.a.h("@<0>").al(this.b).h("aM<1,2>").a(a)
return new A.O(a.a,a.b)},
$S(){return this.a.h("@<0>").al(this.b).h("+(1,2)(aM<1,2>)")}}
A.lk.prototype={
gN(a){var s,r,q,p,o,n,m,l,k=this,j=A.a([],t.l)
for(s=k.e,r=k.a,q=r.a,p=r.b.b.a,o=q.length;s<=k.f;++s)for(n=k.c,m=s*p;n<=k.d;++n){r.l(n,s)
l=m+n
if(!(l>=0&&l<o))return A.c(q,l)
if(J.ay(q[l],k.b))B.a.j(j,new A.d(n,s))}return new J.aZ(j,j.length,t.aY)},
j(a,b){var s=this,r=s.a,q=r.$ti.c.a(s.b)
r.aW(b.gm(),b.gn(),q)
s.c=Math.min(s.c,b.gm())
s.d=Math.max(s.d,b.gm())
s.e=Math.min(s.e,b.gn())
s.f=Math.max(s.f,b.gn())}}
A.a1.prototype={
eX(a){var s,r,q,p=this.ar(a)
for(s=a.gcu(),r=s.$ti,s=new A.ag(s.a(),r.h("ag<1>")),r=r.c;s.q();){q=s.b
p=(q==null?r.a(q):q).ke(a,this,p)}return p},
ar(a){return 0},
dz(a,b){var s=this.eX(a)
if(s<=0)return b
return new A.jx(s,b)}}
A.V.prototype={}
A.cO.prototype={}
A.cy.prototype={}
A.dz.prototype={}
A.aR.prototype={
eM(a,b){return!0},
bH(a){a.at=null
return this.a}}
A.kQ.prototype={
eM(a,b){var s=b.z,r=b.Q.CW.a
r.toString
if(s===B.e.L(Math.pow(r,1.458)+9))return!1
if(b.ay===0){a.y.Q.at.X(B.w,"You must eat before you can rest.",null,null,null)
return!1}return!0},
bH(a){return A.kP()}}
A.c5.prototype={
eM(a,b){var s,r,q,p,o,n,m,l=this
if(l.a)return!0
s=l.b
if(s==null){s=l.d
r=A.a([s.gb9(),s,s.gba()],t.T)
if(B.a.G(B.at,l.d)){B.a.j(r,l.d.gbE())
B.a.j(r,l.d.gbS())}q=new A.aj(r,t.ca.a(new A.qh(l,a,b)),t.e0)
if(!q.gN(0).q())return!1
if(q.gI(0)===1){l.c=l.b=!1
l.d=q.gaB(0)}else{s=a.x
s===$&&A.b()
p=l.d.gb9()
p=b.y.F(0,p)
o=s.f
if(o.b.G(0,p)&&(o.B(p.a,p.b).a.e.a&$.bB().a)!==0){p=l.d.gbE()
p=b.y.F(0,p)
o=s.f
p=o.b.G(0,p)&&(o.B(p.a,p.b).a.e.a&$.bB().a)!==0}else p=!1
l.b=p
p=l.d.gba()
p=b.y.F(0,p)
o=s.f
if(o.b.G(0,p)&&(o.B(p.a,p.b).a.e.a&$.bB().a)!==0){p=l.d.gbS()
p=b.y.F(0,p)
s=s.f
s=s.b.G(0,p)&&(s.B(p.a,p.b).a.e.a&$.bB().a)!==0}else s=!1
l.c=s}}else{if(!s){s=l.c
s.toString
s=!s}else s=!1
if(s){s=a.x
s===$&&A.b()
if(!l.nl(s,b))return!1}else{s=a.x
s===$&&A.b()
p=l.d.gb9()
p=b.y.F(0,p)
s=s.f
o=s.b
n=o.G(0,p)&&(s.B(p.a,p.b).a.e.a&$.bB().a)!==0
p=l.d.gba()
p=b.y.F(0,p)
m=o.G(0,p)&&(s.B(p.a,p.b).a.e.a&$.bB().a)!==0
if(!(l.b===n&&l.c===m))return!1}}s=a.x
s===$&&A.b()
return l.ns(s,b)},
bH(a){this.a=!1
return A.bm(this.d)},
nl(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=A.a([],t.T),d=A.b7(t.j),c=A.b7(t.u),b=f.d,a=[b.gbE(),b.gb9(),b,b.gba(),b.gbS()]
for(b=a0.f,s=b.b,r=b.a,q=s.b.a,p=r.length,o=0;o<5;++o){n=a[o]
m=a1.y.F(0,n)
if(s.G(0,m)){l=m.a
k=m.b
b.l(l,k)
l=k*q+l
if(!(l>=0&&l<p))return A.c(r,l)
l=(r[l].a.e.a&$.bB().a)!==0}else l=!1
if(!l)continue
B.a.j(e,n)
j=[n.gb9(),n,n.gba()]
for(i=0;i<3;++i){h=m.F(0,j[i])
if(s.G(0,h)){l=h.a
k=h.b
b.l(l,k)
l=k*q+l
if(!(l>=0&&l<p))return A.c(r,l)
l=(r[l].a.e.a&$.bB().a)!==0}else l=!1
if(!l)continue
d.j(0,n)
c.j(0,h)}}g=d.a
if(0===g&&e.length===1){f.d=B.a.gaB(e)
return!0}if(1===g){f.d=d.gaB(0)
return!0}if(2===g&&c.a===1)if(d.G(0,f.d))return!0
else if(d.G(0,f.d.gb9())&&d.G(0,f.d.gbE())){f.d=f.d.gb9()
return!0}else if(d.G(0,f.d.gba())&&d.G(0,f.d.gbS())){f.d=f.d.gba()
return!0}return!1},
ns(a,b){var s,r,q,p,o=this,n=b.y.F(0,o.d)
if(!(a.bk(n,b.gb4())&&a.w.B(n.a,n.b)==null))return!1
s=a.f
r=n.a
q=n.b
if(s.B(r,q).a.e.Z(0,$.bA()))return!1
p=new A.qg(a)
if(p.$1(n))return!1
if(p.$1(n.F(0,o.d.gbE())))return!1
if(p.$1(n.F(0,o.d.gb9())))return!1
if(p.$1(n.F(0,o.d)))return!1
if(p.$1(n.F(0,o.d.gba())))return!1
if(p.$1(n.F(0,o.d.gbS())))return!1
if(s.B(r,q).x>0)return!1
return!0}}
A.qh.prototype={
$1(a){var s,r
t.j.a(a)
s=this.b.x
s===$&&A.b()
r=this.c.y.F(0,a)
s=s.f
return s.b.G(0,r)&&(s.B(r.a,r.b).a.e.a&$.bB().a)!==0},
$S:13}
A.qg.prototype={
$1(a){var s=this.a,r=a.a,q=a.b,p=s.f.B(r,q)
return!p.b&&p.d+p.e>p.c&&s.w.B(r,q)!=null},
$S:1}
A.dD.prototype={
eM(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b="In view: {1}."
d.d=a
if(d.c!=null)return!0
s=a.x
s===$&&A.b()
r=$.xV()
A.vl(s)
q=r.a.get(s)
if(q==null){q=A.b7(t.u)
r.i(0,s,q)}r=$.xU()
A.vl(s)
p=r.a.get(s)
if(p==null){p=A.b7(t.W)
r.i(0,s,p)}q.j(0,a0.y)
r=d.e
o=r==null
n=!o
if(n){if(a0.y.Z(0,r)&&!d.f)return!1
if(!d.f&&a.y.Q.at.b!==d.r)return!1}d.f=!1
r=A.a([],t.lE)
for(m=s.b,l=m.length,k=0;k<m.length;m.length===l||(0,A.o)(m),++k){j=m[k]
if(j instanceof A.aa&&a.cA(j))r.push(j)}i=d.a
m=i==null
if(m){if(r.length!==0){a.y.Q.at.X(B.w,b,B.a.gaB(r),c,c)
return!1}}else{l=d.w
if(l==null)l=d.w=r.length
if(r.length>l){a.y.Q.at.X(B.w,b,B.a.gcB(r),c,c)
return!1}}if(m){r={}
r.a=null
s.eZ(new A.o9(r,s,p,o))
r=r.a
if(r!=null){a.y.Q.at.X(B.w,"You see {1}.",r,c,c)
return!1}}h=m?new A.oa(q,s):i
r=!m
if(r&&i.$1(a0.y)){if(!d.b)a.y.Q.at.X(B.w,"You are on the stairs. Press again to take them.",c,c,c)
return!1}g=d.mk(a,a0,h)
if(g==null){if(r)s="You don't know where the stairs are."
else{r=a0.y
r=s.f.B(r.gm(),r.gn())
s=!(!r.b&&r.d+r.e>r.c)?"It is too dark to explore. Light a light source.":"Nothing left to explore. Try searching for secret doors."}a.y.Q.at.X(B.w,s,c,c,c)
return!1}f=g.a
e=g.b
if(d.b&&e===1&&n){a.y.Q.at.X(B.w,"Press again to enter.",c,c,c)
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
q.f=r.f.B(s.a,s.b).a.e.Z(0,$.bA())
return A.bm(p)},
mk(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t.mN.a(c)
s=a.x
s===$&&A.b()
r=t.u
q=A.C(r,t.lF)
p=A.h7(r)
for(r=p.$ti.c,o=0;o<8;++o){n=B.a5[o]
m=b.y.F(0,n)
if(this.iX(a,m,c)){q.i(0,m,new A.O(n,1))
p.bh(r.a(m))}}for(s=s.f,l=s.a,k=s.b.b.a,j=l.length;!p.gaD(0);){m=p.cH()
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
for(g=h+1,o=0;o<8;++o){e=m.F(0,B.a5[o])
if(e.Z(0,b.y)||q.aj(e))continue
if(!this.iX(a,e,c))continue
q.i(0,e,new A.O(n,g))
p.bh(r.a(e))}}return null},
iX(a,b,c){var s,r,q,p
t.mN.a(c)
s=a.x
s===$&&A.b()
r=s.f
if(!r.b.G(0,b))return!1
q=b.a
p=b.b
r=r.B(q,p)
if(!r.r||(r.a.e.a&$.bB().a)===0)return!1
if(r.x>0)return!1
if(r.a.b!=null&&!c.$1(b))return!1
if(s.w.B(q,p)!=null&&!r.b&&r.d+r.e>r.c)return!1
return!0}}
A.o9.prototype={
$2(a,b){var s=this,r=s.b.f.B(b.gm(),b.gn())
if(!r.b&&r.d+r.e>r.c&&s.c.j(0,a)&&!s.d){r=s.a
if(r.a==null)r.a=a}},
$S:15}
A.oa.prototype={
$1(a){var s,r=!1
if(!this.a.G(0,a)){s=this.b
if(s.f.B(a.gm(),a.gn()).a.b==null)r=!s.c5(a).gaD(0)||B.a.cV(a.gbB(),new A.o8(s))}return r},
$S:1}
A.o8.prototype={
$1(a){var s
t.u.a(a)
s=this.a.f
return s.b.G(0,a)&&!s.B(a.gm(),a.gn()).r},
$S:1}
A.aw.prototype={
gao(){return $.xc()},
gbp(){var s=this.Q.CW.a
s.toString
return B.e.L(Math.pow(s,1.458)+9)},
gdN(){return this.Q.gdN()},
geJ(){return"hero"},
f5(a){var s=this,r=s.at
if(r!=null&&!r.eM(a,s))s.at=null
return s.at==null},
gdC(){return this.Q.gdC()},
gjz(){return 6},
gjy(){var s=this.Q.ch.a
s.toString
return 20+A.v6(s)},
cm(){return $.bB()},
ko(){var s,r,q,p,o,n=A.a([],t.x)
for(s=this.Q,r=B.a.gN(s.f.b),q=new A.bn(r,t.k),p=t.W;q.q();){o=p.a(r.gH()).a.z
if(o!=null)n.push(o)}for(s=s.gcu(),r=s.$ti,s=new A.ag(s.a(),r.h("ag<1>")),r=r.c;s.q();){q=s.b
B.a.U(n,(q==null?r.a(q):q).eQ(this))}return n},
ak(a){return this.at.bH(this)},
kk(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.a([],t.d3)
for(s=e.Q,r=s.f.gcM(),q=J.ap(r.a),r=new A.cR(q,r.b,r.$ti.h("cR<1>"));r.q();){p=q.gH()
o=p.a.x
if(o.d<=0)B.a.j(d,new A.O(p,o))}if(d.length===0)B.a.j(d,new A.O(null,A.bb(e,"punch[es]",3,null,null)))
n=A.a([],t.o0)
for(r=d.length,q=t.aL,p=t.iO,o=t.kt,m=s.ch,l=e.ax,k=0;k<d.length;d.length===r||(0,A.o)(d),++k){j=d[k]
i=j.a
h=new A.b6(j.b,A.a([],p),A.a([],o),A.a([],p),A.a([],o),$.ax())
B.a.j(n,h)
j=m.a
j.toString
h.jw(A.v7(j),"agility")
for(j=s.gcu(),g=j.$ti,j=new A.ag(j.a(),g.h("ag<1>")),g=g.c;j.q();){f=j.b
if(f==null)f=g.a(f)
f.hy(e,q.a(a),i,h)}if(i!=null){j=l.a
j.toString
h.cO(j,"heft")
i.kg(h)}}return n},
kr(a,b){var s,r,q,p
switch(b.a){case 0:break
case 1:break
case 2:s=this.Q.ay.a
s.toString
a.r*=A.vY(s)
break}for(s=B.a.gN(this.Q.f.b),r=new A.bn(s,t.k),q=t.W;r.q();){p=q.a(s.gH())
if(p.a.r==null)p.kg(a)}},
hC(a){return this.Q.jQ(a)},
kq(a,b){var s,r,q,p,o,n
t.B.a(b)
if(!this.as.G(0,b))return
s=this.Q
r=s.ax.l8(b.Q)
q=b.Q.gbm()*20/(r+19)
for(p=s.gcu(),o=p.$ti,p=new A.ag(p.a(),o.h("ag<1>")),o=o.c;p.q();){n=p.b
q=(n==null?o.a(n):n).kd(s,b,q)}this.hY(B.e.aR(q))},
kl(a,b){a.bW("{1} [were|was] slain by {2}.",this,b)},
kn(a){var s,r,q,p=this
p.cy=a.gdW()
s=p.CW
if(s>0&&p.cx>1){r=B.c.A(p.cx-2,2)
q=p.Q.ay.a
q.toString
p.CW=B.c.P(s-r,0,A.hF(q))}++p.cx},
hA(a,b,c){var s=a.x
s===$&&A.b()
s.gav().w=!0},
hY(a){this.Q.y+=a},
i7(a){this.Q.y-=a},
pa(a){var s,r,q,p=this
if(!(p.at instanceof A.aR))p.at=null
p.cx=0
if(p.z===0)return
s=B.e.aR(a.gcW()/p.z*10)
r=p.CW
q=p.Q.ay.a
q.toString
p.CW=B.c.P(r+s,0,A.hF(q))},
pd(){var s,r,q,p=this,o=null
if(p.w.a>0){p.Q.at.X(B.X,"You cannot rest while poison courses through your veins!",o,o,o)
return!1}s=p.z
r=p.Q
q=r.CW.a
q.toString
if(s===B.e.L(Math.pow(q,1.458)+9)){r.at.X(B.w,"You are fully rested.",o,o,o)
return!1}if(p.ay===0){r.at.X(B.X,"You are too hungry to rest.",o,o,o)
return!1}p.at=new A.kQ()
return!0},
fl(a){if(this.as.j(0,a))this.Q.ax.hZ(a.Q)},
fa(a){var s=this.ch,r=this.Q.cx.a
r.toString
this.ch=B.c.P(s+a,0,A.jR(r))},
br(){var s,r,q,p,o,n,m,l,k=this,j=k.Q,i=j.ay
i.d8(j)
j.ch.d8(j)
s=j.CW
s.d8(j)
r=j.cx
r.d8(j)
j.z.pb(j)
q=j.f.gcM()
p=A.a6(q,q.$ti.h("k.E"))
for(q=p.length,o=0,n=0;n<p.length;p.length===q||(0,A.o)(p),++n)o+=p[n].gf_()
for(j=j.gcu(),q=j.$ti,j=new A.ag(j.a(),q.h("ag<1>")),q=q.c;j.q();){m=j.b
o=(m==null?q.a(m):m).kf(k,p,o)}l=i.jX(B.e.O(o))
k.ax.kP(l,new A.ot(k,p,l))
j=k.z
s=s.a
s.toString
k.z=B.c.P(B.c.P(j,0,B.e.L(Math.pow(s,1.458)+9)),0,k.gbp())
s=k.ch
r=r.a
r.toString
k.ch=B.c.P(s,0,A.jR(r))
r=k.CW
i=i.a
i.toString
k.CW=B.c.P(r,0,A.hF(i))}}
A.ot.prototype={
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
q=n.gao().a===p.gao().a
m=n
l=!0
k=!0}else{q=o
m=h
n=m
l=!1
k=!1}if(q){q=m.b_(2).gao().a
break A}if(r){if(l)m=n
else{if(0>=g.length)return A.c(g,0)
n=g[0]
m=n}if(k)j=p
else{if(1>=g.length)return A.c(g,1)
p=g[1]
j=p}q=m.gao().b+" and "+j.gao().b
break A}if(s===1){if(l)m=n
else{if(0>=g.length)return A.c(g,0)
n=g[0]
m=n}q=m.gao().b
break A}if(typeof s!=="number")return s.e9()
if(s<=0){q="your fists"
break A}q=A.a_(A.aC(h,h))}o=i.c
if(o<1&&a>=1)i.a.Q.at.X(B.X,"You are too weak to effectively wield "+q+".",h,h,h)
else if(o>=1&&a<1)i.a.Q.at.X(B.w,"You feel comfortable wielding "+q+".",h,h,h)},
$S:79}
A.cC.prototype={
i5(a){var s=this.c.p(0,a.gcv())
return s==null?0:s}}
A.d9.prototype={
gdN(){var s,r,q,p
for(s=B.a.gN(this.f.b),r=new A.bn(s,t.k),q=t.W,p=0;r.q();)p+=q.a(s.gH()).a.ay
return p},
gdC(){var s,r,q,p,o
for(s=B.a.gN(this.f.b),r=new A.bn(s,t.k),q=t.W,p=0;r.q();){o=q.a(s.gH())
p+=o.a.Q+o.gc1()}for(s=this.gcu(),r=s.$ti,s=new A.ag(s.a(),r.h("ag<1>")),r=r.c;s.q();){q=s.b
p=(q==null?r.a(q):q).kc(this,p)}return p},
ge6(){var s,r,q,p
for(s=B.a.gN(this.f.b),r=new A.bn(s,t.k),q=t.W,p=0;r.q();)p+=q.a(s.gH()).ge6()
return p},
gcu(){return new A.R(this.oo(),t.kX)},
oo(){var s=this
return function(){var r=0,q=1,p=[],o
return function $async$gcu(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:r=2
return a.aL(s.b.d)
case 2:r=3
return a.aL(s.c.d)
case 3:o=s.z.a
r=4
return a.aL(new A.b0(o,A.z(o).h("b0<1>")))
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
lj(a,b,c,d){var s,r,q,p,o,n,m=this,l=null,k=t.X,j=A.de(k)
for(s=m.b.c,r=j.$ti.c,q=0;q<4;++q){p=B.aP[q]
o=s.p(0,p)
o.toString
o-=0.4
j.cf(r.a(p),l,l,l,o,o,l)}k=A.C(k,t.S)
for(q=0;q<4;++q)k.i(0,B.aP[q],0)
for(n=0;n<32;++n){s=j.da(0,l,l)
s.toString
r=k.p(0,s)
r.toString
k.i(0,s,r+1)}for(s=[m.ay,m.ch,m.CW,m.cx],q=0;q<4;++q){p=s[q]
r=k.p(0,p.gbb())
r.toString
r=8+B.c.A(r+1,2)
p.b=r
p.a=B.c.P(r+p.h6(m)+m.di(p.gbb()),1,50)}},
jQ(a){var s,r,q,p
for(s=B.a.gN(this.f.b),r=new A.bn(s,t.k),q=t.W,p=0;r.q();)p+=q.a(s.gH()).c6(a)
return p},
di(a){var s,r,q,p,o,n,m
for(s=B.a.gN(this.f.b),r=new A.bn(s,t.k),q=t.W,p=0;r.q();)for(o=q.a(s.gH()).gaf(),n=o.length,m=0;m<o.length;o.length===n||(0,A.o)(o),++m)p+=o[m].di(a)
return p},
soW(a){this.as=A.w(a)}}
A.h9.prototype={
gjx(){var s=this.b
return new A.cG(s,A.z(s).h("cG<2>")).aE(0,0,new A.pi(),t.S)},
hZ(a){var s,r=this.a
r.b7(a,new A.pl())
s=r.p(0,a)
s.toString
r.i(0,a,s+1)},
l8(a){var s,r=this.b
r.b7(a,new A.pm())
s=r.p(0,a)
s.toString;++s
r.i(0,a,s)
return s},
d3(a){var s,r,q,p,o=this.c,n=a.a
o.b7(n,new A.pj())
s=o.p(0,n)
s.toString
o.i(0,n,s+1)
for(o=a.gaf(),n=o.length,s=this.d,r=0;r<o.length;o.length===n||(0,A.o)(o),++r){q=o[r].a
s.b7(q,new A.pk())
p=s.p(0,q)
p.toString
s.i(0,q,p+1)}},
ps(a){var s,r=this.f,q=a.a
r.b7(q,new A.pn())
s=r.p(0,q)
s.toString
r.i(0,q,s+1)},
i_(a){var s=this.a.p(0,a)
return s==null?0:s},
ed(a){var s=this.b.p(0,a)
return s==null?0:s},
jV(a){var s=this.c.p(0,a)
return s==null?0:s}}
A.pi.prototype={
$2(a,b){return A.w(a)+A.w(b)},
$S:41}
A.pl.prototype={
$0(){return 0},
$S:2}
A.pm.prototype={
$0(){return 0},
$S:2}
A.pj.prototype={
$0(){return 0},
$S:2}
A.pk.prototype={
$0(){return 0},
$S:2}
A.pn.prototype={
$0(){return 0},
$S:2}
A.bS.prototype={}
A.aD.prototype={
hy(a,b,c,d){},
kc(a,b){return b},
eQ(a){return B.hQ},
kf(a,b,c){t.aa.a(b)
return c},
kd(a,b,c){return c},
ke(a,b,c){return c}}
A.mf.prototype={}
A.cI.prototype={}
A.eX.prototype={}
A.hn.prototype={
dG(a){var s=this.a
if(a.y.Q.b!==s)return"Not a "+s.a
return null},
gW(){return"You must be a "+this.a.a}}
A.ae.prototype={
ai(a,b){return B.c.ai(this.a,t.M.a(b).a)},
$iat:1}
A.hB.prototype={
eK(a){var s=this.a.p(0,a)
return s==null?0:s},
o9(a){var s=this.b.p(0,a)
return s==null?0:s},
bP(a){var s=this.eK(a),r=this.b.p(0,a)
return B.c.P(s+(r==null?0:r),0,15)},
pb(a){var s,r,q,p=this.b,o=A.cH(p,t.M,t.S)
p.aS(0)
for(s=B.a.gN(a.f.b),r=new A.bn(s,t.k),q=t.W;r.q();)q.a(s.gH()).gec().ae(0,new A.qp(this))
p.ae(0,new A.qq(this,o,a))}}
A.qp.prototype={
$2(a,b){var s,r
t.M.a(a)
A.w(b)
s=this.a.b
s.b7(a,new A.qo())
r=s.p(0,a)
r.toString
s.i(0,a,r+b)},
$S:20}
A.qo.prototype={
$0(){return 0},
$S:2}
A.qq.prototype={
$2(a,b){var s
t.M.a(a)
A.w(b)
s=this.b.p(0,a)
if((s==null?0:s)!==b)this.c.at.hW("You are at level "+this.a.bP(a)+" in "+a.gM()+".")},
$S:20}
A.d8.prototype={
ga0(a){return B.j.ga0(this.a)},
Z(a,b){if(b==null)return!1
return b instanceof A.d8&&this.a===b.a}}
A.mo.prototype={}
A.b9.prototype={
kP(a,b){var s=A.z(this)
s.h("b9.T").a(a)
s.h("@(b9.T)").a(b)
s=this.a
if(s===a)return
this.a=a
if(s!=null)b.$1(s)}}
A.cl.prototype={
aK(){return"Stat."+this.b}}
A.cm.prototype={
h6(a){return 0},
kC(a,b){var s,r=this
if(b!=null)r.b=b
s=r.dk(a)
r.kP(s,new A.qG(r,s,a))},
d8(a){return this.kC(a,null)},
hr(a){var s=a.ay.b,r=a.ch.b,q=a.CW.b,p=a.cx.b,o=a.b.c.p(0,this.gbb())
o.toString
return B.e.L(400*(1/o)*Math.pow(A.v(s+r+q+p,48,160,1,40),2))},
dk(a){return B.c.P(this.b+this.h6(a)+a.di(this.gbb()),1,50)},
t(a){return this.gbb().c}}
A.qG.prototype={
$1(a){var s=this.b-A.w(a),r=this.a,q=this.c.at
if(s>0)q.hW("You feel "+r.ger()+"! Your "+r.gbb().c+" increased by "+s+".")
else q.X(B.X,"You feel "+r.gev()+"! Your "+r.gbb().c+" decreased by "+-s+".",null,null,null)},
$S:27}
A.hE.prototype={
gbb(){return B.aj},
ger(){return"mighty"},
gev(){return"weak"},
h6(a){return-a.ge6()},
jX(a){var s,r=this.a
r.toString
s=B.e.P(r-a,-10,50)
if(s<0)return A.v(s,-10,-1,0,0.6)
else return A.v(s,0,50,1,2)}}
A.fy.prototype={
gbb(){return B.aa},
ger(){return"dextrous"},
gev(){return"clumsy"}}
A.hN.prototype={
gbb(){return B.aq},
ger(){return"tough"},
gev(){return"sickly"}}
A.fW.prototype={
gbb(){return B.Z},
ger(){return"smart"},
gev(){return"stupid"}}
A.cc.prototype={
gcb(){return this.a.w.$1(this.b)},
gcZ(){return this.a.x.$1(this.b)},
gcY(){return this.a.y.$1(this.b)},
c6(a){var s=this.a.as.p(0,a)
if(s==null)return 0
return s.$1(this.b)},
di(a){var s=this.a.at.p(0,a)
if(s==null)return 0
return s.$1(this.b)},
gec(){var s,r,q,p=t.M,o=A.C(p,t.S)
for(p=A.vH(this.a.ch,p,t.Q),s=A.z(p),p=new A.bl(J.ap(p.a),p.b,s.h("bl<1,2>")),r=this.b,s=s.y[1];p.q();){q=p.a
if(q==null)q=s.a(q)
o.i(0,q.a,q.b.$1(r))}return o},
t(a){return this.a.a+" "+this.b}}
A.ed.prototype={
fn(){var s=this.e
s=s==null?null:s.$0()
return new A.cc(this,s==null?0:s)},
l2(a,b){this.as.i(0,t.h.a(a),t.Q.a(b))},
l4(a,b){this.at.i(0,t.X.a(a),t.Q.a(b))},
t(a){return this.a}}
A.et.prototype={
gk8(){return B.a2},
gcM(){var s=t.bC
return new A.aj(new A.hO(this.b,s),s.h("B(k.E)").a(new A.o_()),s.h("aj<k.E>"))},
gI(a){return B.a.aE(this.b,0,new A.nZ(),t.S)},
cX(){var s,r,q,p,o,n=A.an(9,null,!1,t.cm)
for(s=this.b,r=0;r<9;++r){q=s[r]
if(q!=null){p=q.a
o=q.f
B.a.i(n,r,new A.L(p,q.b,q.c,q.d,o))}}return new A.et(n)},
ol(a){return B.a.cV(B.aD,new A.nY(a))},
bl(){},
jP(a){var s,r,q,p,o,n,m,l,k,j=a.a,i=j.e
if(i==="hand"){i=t.t
s=A.a([],i)
r=A.a([],i)
for(i=this.b,q=0;q<9;++q)if(B.aD[q]==="hand"){B.a.j(s,q)
if(i[q]!=null)B.a.j(r,q)}p=r.length
if(p===0){if(0>=s.length)return A.c(s,0)
B.a.i(i,s[0],a)
return B.be}if(p===1){if(0>=p)return A.c(r,0)
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
return B.be}for(j=this.b,k=-1,q=0;q<9;++q)if(B.aD[q]===i){if(j[q]==null){B.a.i(j,q,a)
return B.be}k=q}if(!(k>=0&&k<9))return A.c(j,k)
i=j[k]
i.toString
n=A.a([i],t.I)
B.a.i(j,k,a)
return n},
ac(a,b){var s,r
for(s=this.b,r=0;r<9;++r)if(s[r]===b){B.a.i(s,r,null)
break}},
gN(a){return new A.bn(B.a.gN(this.b),t.k)},
gee(){return B.aD},
gef(){return this.b}}
A.o_.prototype={
$1(a){return t.W.a(a).a.r!=null},
$S:10}
A.nZ.prototype={
$2(a,b){A.w(a)
return a+(t.cm.a(b)==null?0:1)},
$S:83}
A.nY.prototype={
$1(a){return this.a.a.e===A.a3(a)},
$S:84}
A.lL.prototype={}
A.c_.prototype={}
A.eC.prototype={
gee(){return B.hR},
gef(){return this}}
A.bQ.prototype={
gI(a){return this.b.length},
cX(){var s=this.b,r=A.M(s)
return A.bG(this.a,new A.aN(s,r.h("L(1)").a(new A.oz()),r.h("aN<1,L>")))},
ac(a,b){B.a.ac(this.b,b)},
jC(a){var s,r,q,p,o=this.c
if(o===0||this.b.length<o)return!0
s=a.f
for(o=this.b,r=o.length,q=0;q<o.length;o.length===r||(0,A.o)(o),++q){p=o[q]
if(p.jE(a)){s-=p.a.CW-p.f
if(s<=0)return!0}}return!1},
fg(a,b){var s,r,q,p,o,n=a.f
for(s=this.b,r=s.length,q=n,p=0;o=s.length,p<o;s.length===r||(0,A.o)(s),++p){s[p].la(a)
q=a.f
if(q===0)return new A.dy(n,0)}r=this.c
if(r!==0&&o>=r)return new A.dy(n-q,q)
B.a.j(s,a)
B.a.fm(s)
if(b)this.d=a
return new A.dy(n,0)},
c8(a){return this.fg(a,!1)},
bl(){var s,r=this.b,q=A.a(r.slice(0),A.M(r))
B.a.aS(r)
for(r=q.length,s=0;s<q.length;q.length===r||(0,A.o)(q),++s)this.c8(q[s])},
gN(a){var s=this.b
return new J.aZ(s,s.length,A.M(s).h("aZ<1>"))},
gk8(){return this.a}}
A.oz.prototype={
$1(a){return t.W.a(a).cX()},
$S:86}
A.dy.prototype={}
A.m1.prototype={}
A.L.prototype={
gaf(){var s=A.a([],t.o_),r=this.b
if(r!=null)s.push(r)
r=this.c
if(r!=null)s.push(r)
r=this.d
if(r!=null)s.push(r)
return s},
gb1(){var s,r,q,p=$.ax(),o=this.a.x,n=o!=null?o.e:p
for(o=this.gaf(),s=o.length,r=0;r<s;++r){q=o[r].a.Q
if(q!==p)n=q}return n},
gcb(){return B.a.aE(this.gaf(),0,new A.p_(),t.S)},
gcZ(){return B.a.aE(this.gaf(),1,new A.oV(),t.i)},
gcY(){return B.a.aE(this.gaf(),0,new A.oU(),t.S)},
gc1(){return B.a.aE(this.gaf(),0,new A.oT(),t.S)},
gao(){var s,r=this,q=r.e
if(q===$){s=r.mx()
r.e!==$&&A.e9()
r.e=s
q=s}return q},
gbf(){var s,r,q,p,o=this,n=o.a.as,m=1+o.gaf().length
for(s=o.gaf(),r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
n*=p.a.ay.$1(p.b)*m}for(s=o.gaf(),r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
n+=p.a.ax.$1(p.b)*m}return B.e.aR(n)},
ge6(){return Math.max(0,B.a.aE(this.gaf(),this.a.at,new A.p0(),t.S))},
gf_(){return B.e.O(B.a.aE(this.gaf(),this.a.ax,new A.oW(),t.i))},
kg(a){var s,r,q,p,o,n,m
for(s=this.gaf(),r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
o=p.a
n=p.b
m=o.a+" "+n
a.jw(o.w.$1(n),m)
a.cO(o.x.$1(n),m)
a.nX(o.y.$1(n),m)}s=this.gb1()
if(s!==$.ax())a.f=s},
c6(a){return B.a.aE(this.gaf(),0,new A.oX(a),t.S)},
gec(){var s,r,q,p=A.C(t.M,t.S)
for(s=this.gaf(),r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q)s[q].gec().ae(0,new A.oZ(p))
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
b_(a){var s=this,r=a==null?s.f:a
return new A.L(s.a,s.b,s.c,s.d,r)},
cX(){return this.b_(null)},
jE(a){if(this.a!==a.a)return!1
if(this.gaf().length!==0)return!1
if(a.gaf().length!==0)return!1
return!0},
la(a){var s,r,q=this
if(!q.jE(a))return
s=q.f+a.f
r=q.a.CW
if(s<=r){q.f=s
a.f=0}else{q.f=r
a.f=s-r}},
dh(a){this.f-=a
return this.b_(a)},
mx(){var s,r,q,p,o=t.s,n=A.a([],o),m=A.a([],o)
for(o=this.gaf(),s=o.length,r=0;r<o.length;o.length===s||(0,A.o)(o),++r){q=o[r].a
p=q.b
if(q.c)B.a.j(n,p)
else B.a.j(m,p)}return this.a.a.jB(this.f,n,m)},
$iat:1}
A.p_.prototype={
$2(a,b){return A.w(a)+t.L.a(b).gcb()},
$S:14}
A.oV.prototype={
$2(a,b){return A.by(a)*t.L.a(b).gcZ()},
$S:29}
A.oU.prototype={
$2(a,b){return A.w(a)+t.L.a(b).gcY()},
$S:14}
A.oT.prototype={
$2(a,b){A.w(a)
t.L.a(b)
return a+b.a.z.$1(b.b)},
$S:14}
A.p0.prototype={
$2(a,b){A.w(a)
t.L.a(b)
return a+b.a.r.$1(b.b)},
$S:14}
A.oW.prototype={
$2(a,b){A.by(a)
t.L.a(b)
return a*b.a.f.$1(b.b)},
$S:29}
A.oX.prototype={
$2(a,b){return A.w(a)+t.L.a(b).c6(this.a)},
$S:14}
A.oZ.prototype={
$2(a,b){var s,r
t.M.a(a)
A.w(b)
s=this.a
s.b7(a,new A.oY())
r=s.p(0,a)
r.toString
s.i(0,a,r+b)},
$S:20}
A.oY.prototype={
$0(){return 0},
$S:2}
A.bH.prototype={}
A.r8.prototype={}
A.aL.prototype={
t(a){return this.a.a6(1).a}}
A.kM.prototype={
mZ(a){var s,r,q,p,o,n,m,l
t.C.a(a)
s=A.cH(this.a,t.q,t.S)
for(r=a.b,q=A.M(r),r=new J.aZ(r,r.length,q.h("aZ<1>")),q=q.c;r.q();){p=r.d
if(p==null)p=q.a(p)
o=p.a
if(!s.aj(o))return null
n=s.p(0,o)
n.toString
s.i(0,o,n-p.f)}r=A.z(s).h("b0<1>")
r=A.a6(new A.b0(s,r),r.h("k.E"))
q=r.length
m=0
for(;m<r.length;r.length===q||(0,A.o)(r),++m){l=r[m]
p=s.p(0,l)
p.toString
if(p<=0)s.ac(0,l)}return s}}
A.dg.prototype={
oq(){var s=A.bG(new A.c_(this.b,26),null)
this.aH(s)
return s},
aH(a){var s,r,q,p,o,n,m,l,k,j,i=$.m(),h=a.c,g=B.e.L(i.aC(h*0.2,h*0.4))
for(s=a.b,r=i.a;q=s.length,q>g;){q=r.a1(q)
if(!(q>=0&&q<s.length))return A.c(s,q)
p=s[q]
B.a.d9(s,q)
if(a.d===p)a.d=null}o=B.e.L(i.aC(h*0.3,h*0.7))
i=this.a
h=a.gkM()
n=0
for(;;){if(s.length<o){m=n+1
r=n<100
n=m}else r=!1
if(!r)break
i.b0(null,1,h)
for(l=1;l<s.length;++l){k=l-1
j=s[k]
p=s[l]
if(j.a===p.a&&j.gaf().length===0&&p.gaf().length===0){if(!(l<s.length))return A.c(s,l)
p=s[l]
B.a.d9(s,l)
if(a.d===p)a.d=null
l=k}}}}}
A.iT.prototype={}
A.as.prototype={
gbm(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.ay
for(s=g.CW,r=s.length,q=0;q<r;++q)f+=s[q].a
s=6+g.z
if(!(s>=0&&s<13))return A.c(B.aM,s)
s=B.aM[s]
for(r=g.d,p=r.length,o=0,q=0;q<p;++q){n=r[q]
o+=n.c*n.e.e}for(r=g.e,m=r.length,l=0,k=0,q=0;q<r.length;r.length===m||(0,A.o)(r),++q){j=r[q]
i=j.a
l+=j.gbm()/i
k+=1/i}r=g.ax
h=r.a?1.1:1
if(r.b)h*=0.9
if(r.c)h*=1.05
if(r.d)h*=0.7
if(r.e)h*=1.1
return B.e.aR(g.f*(1+f/100)*s*(o/p*(1-k)+l)*h*A.v(g.y,0,100,1,0.7)/100)},
fo(a,b){var s=b!=null?b.as+1:1,r=a.gm(),q=a.gn(),p=new A.aa(this,s,new A.cf(),A.C(t.d0,t.cZ),$.m().bq(60,200),new A.fN(),new A.dA(),new A.fE(),new A.dA(),new A.fQ(),new A.fT(),new A.hk(),new A.hl(),A.C(t.h,t.mF),new A.d(r,q))
p.ll(this,r,q,s)
return p},
i6(a){return this.fo(a,null)},
l9(){var s,r,q=this,p=A.a([],t.fO),o=$.m().aw(q.cx,q.cy)
for(s=0;s<o;++s)B.a.j(p,q)
r=q.db
if(r!=null)r.cP(B.e.bM(q.c*0.9),t.or.a(B.a.gnW(p)))
return p},
t(a){return this.a.a}}
A.f4.prototype={
aK(){return"SpawnLocation."+this.b}}
A.nl.prototype={
t(a){var s=this,r=A.a([],t.s)
if(s.a)r.push("berzerk")
if(s.b)r.push("cowardly")
if(s.c)r.push("fearless")
if(s.d)r.push("immobile")
if(s.e)r.push("protective")
if(s.f)r.push("unique")
return B.a.aP(r," ")}}
A.aa.prototype={
geJ(){return this.Q.b},
gao(){return this.Q.a},
gbp(){return this.Q.f},
gdC(){return 0},
gdN(){return this.Q.ch},
gdf(){var s=this.Q,r=s.w,q=r+s.x
if(q===0)return 0
return r/q},
ll(a,b,c,d){var s,r,q,p,o=this
o.z=B.c.P(o.Q.f,0,o.gbp())
s=o.at
s.a!==$&&A.ar()
s.a=o
s=o.Q
if(s.ax.b)o.cx*=0.7
for(s=s.e,r=s.length,q=o.ax,p=0;p<s.length;s.length===r||(0,A.o)(s),++p)q.i(0,s[p],0)},
kQ(a){var s,r=this.ax,q=r.p(0,a)
q.toString
s=a.a
r.i(0,a,q+$.m().aC(s,s*1.3))},
gjz(){return 6+this.Q.z},
gjy(){return this.Q.ay},
cm(){return this.Q.at},
ko(){return this.Q.CW},
ak(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="{1} is afraid!"
for(s=i.Q.e,r=s.length,q=i.ax,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
n=q.p(0,o)
n.toString
q.i(0,o,Math.max(0,n-1))}m=0+i.np(a)+i.mt(a)
s=i.ch*0.75+m*0.2
i.ch=s
i.ch=B.e.P(s,0,1)
s=i.y
l=5+s.S(0,a.y.y).gb3()
r=a.x
r===$&&A.b()
s=r.f.B(s.gm(),s.gn())
if(!(!s.b&&s.d+s.e>s.c))l=5+l*2
i.dt(-(2+l*i.z/i.Q.f))
i.CW=B.e.P(i.CW,0,i.cx)
k=Math.max(m,i.ch)
A.ci(i,"aware",m,h)
A.ci(i,"alert",i.ch,h)
A.ci(i,"notice",k,h)
A.ci(i,"fear",i.CW/i.cx,h)
j=i.at
s=j instanceof A.cf
if(s&&i.CW>i.cx){i.h1()
return A.iX(g,new A.ct(),B.b_)}if(s){s=$.m()
r=i.lv(k)
r=s.T(100)<r
s=r}else s=!1
if(s){i.ch=1
i.h1()
return A.iX("{1} wakes up!",new A.cv(),B.bq)}s=j instanceof A.cv
if(s&&i.CW>i.cx)return A.iX(g,new A.ct(),B.b_)
if(s&&k<0.01){i.ch=0
return A.iX("{1} falls asleep.",new A.cf(),h)}if(j instanceof A.ct&&i.CW<=0)return A.iX("{1} find[s] {1 his} courage.",new A.cv(),h)
return i.at.bH(a)},
lv(a){var s
if(a<0.1)return 0
if(a>0.8)return 100
s=A.v(a,0.1,0.8,0,1)
return B.e.O(A.v(s*s*s,0,1,5,100))},
np(a){var s,r,q,p,o,n=this,m="see"
if(n.Q.w===0){A.ci(n,m,0,"sightless")
return 0}s=a.y.y
r=a.x
r===$&&A.b()
if(!r.eN(n,s)){A.ci(n,m,0,"out of sight")
return 0}r=r.f.B(s.gm(),s.gn())
q=r.d+r.e
if(q===0){A.ci(n,m,0,"hero in dark")
return 0}p=s.S(0,n.y).gb3()
r=n.Q.w
if(p>=r){A.ci(n,m,0,"too far")
return 0}o=(r-p)/r
A.ci(n,m,q*o,null)
return q/64*o},
mt(a){var s,r,q,p=this
if(p.Q.x===0){A.ci(p,"hear",0,"deaf")
return 0}s=a.x
s===$&&A.b()
r=p.y
s=s.geE()
r=s.jn(s.iK(r))
s=a.y.cy
q=r*s*p.Q.x/10
A.ci(p,"hear",q,"noise "+A.J(s)+", volume "+A.J(q))
return q},
dt(a){var s,r=this
if(r.z<=0)return
s=r.Q.ax
if(s.c)return
if(s.d)return
r.CW=Math.max(0,r.CW+a)},
kk(a){var s=$.m(),r=t.aH.a(this.Q.d)
s=s.T(r.length)
if(!(s>=0&&s<r.length))return A.c(r,s)
return A.a([A.bF(r[s])],t.o0)},
hC(a){return 0},
kp(a,b,c){var s,r,q=a.c
q===$&&A.b()
s=q.y.Q.CW.a
s.toString
r=100*c/B.e.L(Math.pow(s,1.458)+9)
this.dt(-r)
s=q.y.Q.CW.a
s.toString
A.ja(this,"fear","hit for "+c+"/"+B.e.L(Math.pow(s,1.458)+9)+" decrease by "+A.J(r))
this.jl(q,new A.pC(a,c))},
nS(a,b){var s,r=this
if(r.at instanceof A.cf)return
s=50*b/r.Q.f
r.dt(-s)
A.ja(r,"fear","witness "+b+"/"+r.Q.f+" decrease by "+A.J(s))},
kt(a,b,c){var s,r,q,p,o,n,m=this
m.ch=1
s=m.Q
r=100*c/s.f
if(s.ax.a)r*=-3
m.dt(r)
A.ja(m,"fear","hit for "+c+"/"+m.Q.f+" increases by "+A.J(r))
s=a.c
s===$&&A.b()
m.jl(s,new A.pD(m,a,c))
q=m.Q.e
p=A.M(q)
o=p.h("aj<1>")
n=A.a6(new A.aj(q,p.h("B(1)").a(new A.pE(m,c)),o),o.h("k.E"))
q=n.length
if(q!==0){p=$.m()
t.kz.a(n)
q=p.T(q)
if(!(q>=0&&q<n.length))return A.c(n,q)
q=n[q]
m.kQ(q)
a.ha(q.bR(s,m),m)}},
nT(a,b,c){var s,r,q,p=this
if(p.at instanceof A.cf)return
s=p.Q
r=50*c/s.f
q=s.ax
if(q.e&&b.Q===s)r*=-2
else if(q.a)r*=-1
p.dt(r)
A.ja(p,"fear","witness "+c+"/"+p.Q.f+" increase by "+A.J(r))},
kl(a,b){var s,r,q,p,o,n,m,l,k=this,j=a.c
j===$&&A.b()
s=j.x
s===$&&A.b()
r=k.y
q=k.Q
p=s.dZ(r,q.Q,q.c)
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
if(!m.b&&m.d+m.e>m.c||a.a instanceof A.aw)j.y.Q.at.X(B.w,"{1} drop[s] {2}.",k,n,null)}j=j.x
j===$&&A.b()
j.kD(k)},
hA(a,b,c){var s,r=a.x
r===$&&A.b()
s=r.f.B(b.gm(),b.gn())
if(!(!s.b&&s.d+s.e>s.c)){s=r.f.B(c.gm(),c.gn())
s=!s.b&&s.d+s.e>s.c}else s=!0
if(s){s=a.y
if(!(s.at instanceof A.aR))s.at=null}s=r.f.B(b.gm(),b.gn())
if(!(!s.b&&s.d+s.e>s.c)){r=r.f.B(c.gm(),c.gn())
r=!r.b&&r.d+r.e>r.c}else r=!1
if(r)a.y.fl(this)},
jl(a,b){var s,r,q,p,o,n,m
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
if(s.eN(o,m))b.$1(o)}},
h1(){var s,r,q,p,o
for(s=this.Q.e,r=s.length,q=this.ax,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
q.i(0,o,$.m().aO(o.a/2))}}}
A.pC.prototype={
$1(a){a.nS(this.a,this.b)},
$S:30}
A.pD.prototype={
$1(a){a.nT(this.b,this.a,this.c)},
$S:30}
A.pE.prototype={
$1(a){return t.d0.a(a).i2(this.a,this.b)},
$S:31}
A.iW.prototype={
V(){var s,r,q,p=this
p.a_(p.e,p.a)
s=p.r
if(s!=null)p.ct(s,p.a)
r=t.B.a(p.a)
q=r.at=p.f
q.a!==$&&A.ar()
q.a=r
r=p.c
r===$&&A.b()
return p.bd(q.bH(r))}}
A.pA.prototype={
hG(a){var s,r=this,q=r.e
if(q!=null){s=r.c
s=r.dT(a.b,s)<r.dT(q.b,s)}else s=!0
if(s)q=r.e=a
if(a.c>=r.d.Q.r)return q.a
return null},
dT(a,b){var s,r=b.S(0,a),q=Math.abs(r.a)
r=Math.abs(r.b)
s=Math.min(q,r)
return(Math.max(q,r)-s)*10+s*11},
fq(a,b){var s,r,q,p=this,o=null
if(b.x!==0)return o
s=a.S(0,p.b).gb3()===1
if(p.a.w.B(a.a,a.b)!=null){if(s)return o
return 60}r=b.a.e
q=$.bA()
if(r.Z(0,q))if((p.d.gb4().a&q.a)!==0)return 20
else if(s)return o
else return 80
if((r.a&p.d.gb4().a)!==0)return 10
return o},
hI(a){return a.a},
hV(){var s=this.e
if(s==null)return null
return s.a}}
A.eJ.prototype={
fT(a,b){var s,r,q,p,o=this.a
o===$&&A.b()
s=o.Q.y
if(o.b.a>0||o.d.a>0)s+=B.e.L(o.gdf()*50)
else if(o.y.F(0,b).Z(0,a.y.y))s=s/4|0
s=Math.min(s,90)
if(!($.m().T(100)<s))return b
if(b===B.r)r=B.a5
else{r=A.a([],t.T)
for(q=0;q<3;++q){B.a.j(r,b.gb9())
B.a.j(r,b.gba())}for(q=0;q<2;++q){B.a.j(r,b.gbE())
B.a.j(r,b.gbS())}B.a.j(r,b.gbE().gb9())
B.a.j(r,b.gbS().gba())}o=A.M(r)
p=o.h("aj<1>")
r=A.a6(new A.aj(r,o.h("B(1)").a(new A.pB(this,a)),p),p.h("k.E"))
o=r.length
if(o===0)return b
p=$.m()
t.du.a(r)
o=p.T(o)
if(!(o>=0&&o<r.length))return A.c(r,o)
return r[o]}}
A.pB.prototype={
$1(a){var s,r,q,p
t.j.a(a)
s=this.a.a
s===$&&A.b()
r=s.y.F(0,a)
q=this.b
p=q.x
p===$&&A.b()
if(!(p.bk(r,s.gb4())&&p.f.B(r.a,r.b).x===0))return!1
s=p.w.B(r.a,r.b)
return s==null||s===q.y},
$S:13}
A.cf.prototype={
bH(a){return A.kP()}}
A.cv.prototype={
bH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.m8(a)
if(b!==B.r)return A.bm(b)
s=c.a
s===$&&A.b()
r=s.Q.e
q=A.M(r)
p=q.h("aj<1>")
o=A.a6(new A.aj(r,q.h("B(1)").a(new A.ng(c,a)),p),p.h("k.E"))
r=o.length
if(r!==0){q=$.m()
t.kz.a(o)
r=q.T(r)
if(!(r>=0&&r<o.length))return A.c(o,r)
r=o[r]
s.kQ(r)
return r.bR(a,s)}r=s.Q
if(r.ax.d){n=a.y.y.S(0,s.y)
if(n.gb3()!==1)return A.kP()
return A.bm(n.gki())}s.ay=!0
for(q=r.e,p=q.length,m=0,l=0,k=0;k<p;++k){j=q[k]
if(!(j instanceof A.fC))continue
m+=j.b.c/j.a;++l}if(l!==0){for(q=r.d,p=q.length,i=0,h=0,k=0;k<p;++k){i+=q[k].c;++h}if(h>0)i/=h
m/=l
g=100*m/(m+i)+s.CW+100*(1-s.z/r.f)
if(s.y.S(0,a.y.y).e9(0,1))s.ay=g<60
else s.ay=g<30}f=c.mg(a)
e=l>0?c.mh(a):null
if(s.ay)d=f==null?e:f
else d=e==null?f:e
return A.bm(c.fT(a,d==null?B.r:d))},
m8(a){var s,r,q=a.x
q===$&&A.b()
s=this.a
s===$&&A.b()
r=s.y
if(q.f.B(r.gm(),r.gn()).x===0)return B.r
return A.ck(q,s.y,s.gb4(),null,!0,null).hj(new A.ne(a))},
mh(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={}
c.a=9999
s=this.a
s===$&&A.b()
r=s.Q.e
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.o)(r),++p){o=r[p]
if(o.gaz()>0&&o.gaz()<c.a)c.a=o.gaz()}n=new A.nf(c,this,a)
if(n.$1(s.y)){m=s.y.S(0,a.y.y).gb3()
l=B.r}else{l=null
m=0}for(r=a.y,p=0;p<8;++p){k=B.a5[p]
j=s.y.F(0,k)
q=a.x
q===$&&A.b()
i=s.cm()
if(q.bk(j,s.e.a>0?new A.ad(i.a|$.U().a):i)){h=q.w
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
k=A.ck(r,s.y,s.gb4(),null,!0,c.a).hj(n)
if(k!==B.r){A.ch(s,"ranged position "+k.t(0))
return k}A.ch(s,"no good ranged position")
return null},
mg(a){var s,r,q=this.mf(a)
if(q!=null)return q
s=a.x
s===$&&A.b()
r=this.a
r===$&&A.b()
return new A.pA(r,s,r.y,s.a.y.y).fk()},
mf(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a
f===$&&A.b()
s=a.y
r=A.dX(f.y,s.y)
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
i=f.cm()
if(!n.bk(o,f.e.a>0?new A.ad(i.a|$.U().a):i))return g
n=n.w
m=o.gm()
l=o.gn()
n.l(m,l)
k=n.a
m=l*n.b.b.a+m
if(!(m>=0&&m<k.length))return A.c(k,m)
m=k[m]
if(m!=null&&!(m instanceof A.aw))return g;++p
if(p>=f.Q.r)return g
if(o.Z(0,s.y))break}h=q.S(0,f.y)
f=h.b
if(f===-1){f=h.a
if(f===-1)return B.T
else if(f===0)return B.L
else return B.Q}else if(f===0)if(h.a===-1)return B.R
else return B.O
else{f=h.a
if(f===-1)return B.S
else if(f===0)return B.K
else return B.P}},
mr(a,b){var s,r,q,p,o,n,m,l
for(s=a.y,r=A.dX(b,s.y);r.q(),!0;){q=r.a
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
if(p)return!1}throw A.n(A.bE("Unreachable."))}}
A.ng.prototype={
$1(a){var s
t.d0.a(a)
s=this.a.a
s===$&&A.b()
return s.ax.p(0,a)===0&&a.bI(this.b,s)},
$S:31}
A.ne.prototype={
$1(a){var s=this.a.x
s===$&&A.b()
return s.f.B(a.a,a.b).x===0},
$S:1}
A.nf.prototype={
$1(a){var s,r,q=this,p=q.c,o=a.S(0,p.y.y)
if(o.bg(0,q.a.a))return!1
if(o.gb3()<=2)return!1
s=p.x
s===$&&A.b()
s=s.w.B(a.gm(),a.gn())
if(s!=null){r=q.b.a
r===$&&A.b()
r=s!==r
s=r}else s=!1
if(s)return!1
return q.b.mr(p,a)},
$S:1}
A.ct.prototype={
bH(a){var s,r,q,p,o,n=this,m=a.x
m===$&&A.b()
s=n.a
s===$&&A.b()
r=s.y
if(m.f.B(r.gm(),r.gn()).b)return A.kP()
q=A.ck(m,s.y,s.gb4(),null,!0,s.Q.r).hj(new A.na(a))
if(q!==B.r){A.ch(s,"fleeing "+q.t(0)+" out of sight")
return A.bm(n.fT(a,q))}m=t.e0
p=new A.aj(B.a5,t.ca.a(new A.nb(n,a,s.y.S(0,a.y.y).gb3())),m)
if(!p.gaD(0)){r=$.m()
m=A.a6(p,m.h("k.E"))
t.du.a(m)
r=r.T(m.length)
if(!(r>=0&&r<m.length))return A.c(m,r)
q=m[r]
A.ch(s,"fleeing "+q.t(0)+" away from hero")
return A.bm(n.fT(a,q))}o=s.at=new A.cv()
o.a=s
return o.bH(a)}}
A.na.prototype={
$1(a){var s=this.a.x
s===$&&A.b()
return s.f.B(a.a,a.b).b},
$S:1}
A.nb.prototype={
$1(a){var s,r,q,p
t.j.a(a)
s=this.a.a
s===$&&A.b()
r=s.y.F(0,a)
q=this.b
p=q.x
p===$&&A.b()
if(!(p.bk(r,s.gb4())&&p.w.B(r.a,r.b)==null&&p.f.B(r.a,r.b).x===0))return!1
return r.S(0,q.y.y).gb3()>this.c},
$S:13}
A.b8.prototype={
gaz(){return 0},
bI(a,b){return!0},
i2(a,b){return!1}}
A.kJ.prototype={
gaz(){return this.b.d}}
A.cg.prototype={
aX(a,b,c){var s,r,q,p=this,o=p.$ti.c
o.a(b)
p.b=Math.min(p.b,c)
s=p.a
r=c+1
if(s.length<=r)B.a.sI(s,r)
if(!(c>=0&&c<s.length))return A.c(s,c)
q=s[c]
if(q==null){q=A.h7(o)
B.a.i(s,c,q)}q.bh(q.$ti.c.a(b))},
fb(){var s,r,q,p=this.a
for(;;){s=this.b
r=p.length
if(s<r){if(!(s>=0))return A.c(p,s)
q=p[s]
q=q==null?null:q.b===q.c
q=q!==!1}else q=!1
if(!q)break
this.b=s+1}if(s>=r)return null
if(!(s>=0))return A.c(p,s)
return p[s].cH()}}
A.eu.prototype={
fw(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.a.f
if(c==null){k.d!==$&&A.ar()
k.d=new A.d(1,1)
j=j.b.b
s=j.a-2
r=j.b-2}else{q=k.b
p=Math.max(1,q.gm()-c)
o=Math.max(1,q.gn()-c)
j=j.b.b
n=Math.min(j.a-1,q.gm()+c+1)
m=Math.min(j.b-1,q.gn()+c+1)
k.d!==$&&A.ar()
k.d=new A.d(p,o)
s=n-p
r=m-o}j=t.z
j=j.a(new A.a8(A.an(s*r,-2,!1,t.S),new A.Y(new A.d(0,0),new A.d(s,r)),j))
k.c!==$&&A.ar()
k.c=j
q=k.d
q===$&&A.b()
l=k.b.S(0,q)
k.e.aX(0,l,0)
j.aW(l.a,l.b,0)},
gcF(){return new A.R(this.p9(),t.e6)},
p9(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l
return function $async$gcF(a,b,c){if(b===1){p.push(c)
r=q}for(;;)A:switch(r){case 0:o=s.f,n=0
case 3:while(n>=o.length)if(!s.fY()){r=1
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
jA(a){var s,r=this.iF(t.mN.a(a)),q=r.length
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
if(!(J.ay(q[p],-2)&&this.fY()))break}o=n.B(s,r)
if(o===-2||o===-1)return null
return o},
hj(a){var s,r=this.lR(this.iF(t.mN.a(a))),q=r.length
if(q===0)return B.r
s=$.m()
t.du.a(r)
q=s.T(q)
if(!(q>=0&&q<r.length))return A.c(r,q)
return r[q]},
iF(a){var s,r,q,p,o,n,m,l,k,j,i=this
t.mN.a(a)
s=A.a([],t.l)
for(r=i.f,q=null,p=0;;++p){while(p>=r.length)if(!i.fY())return s
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
lR(a){var s,r=A.b7(t.j)
B.a.ae(t.A.a(a),new A.oe(this,A.b7(t.u),r))
s=A.a6(r,r.$ti.c)
return s},
fY(){var s,r=this.e.fb()
if(r==null)return!1
s=this.c
s===$&&A.b()
s=new A.of(this,r,s.B(r.gm(),r.gn()))
s.$2(B.L,!1)
s.$2(B.K,!1)
s.$2(B.O,!1)
s.$2(B.R,!1)
s.$2(B.T,!0)
s.$2(B.Q,!0)
s.$2(B.S,!0)
s.$2(B.P,!0)
return!0}}
A.oe.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
t.u.a(a)
s=f.b
if(s.G(0,a))return
s.j(0,a)
for(s=f.a,r=s.b,q=f.c,p=0;p<8;++p){o=B.a5[p]
n=a.F(0,o)
m=s.c
m===$&&A.b()
l=m.b
if(!l.G(0,n))continue
k=s.d
k===$&&A.b()
if(n.Z(0,r.S(0,k)))q.j(0,o.gcI())
else{k=n.a
j=n.b
m.l(k,j)
i=m.a
l=l.b.a
h=j*l+k
g=i.length
if(!(h>=0&&h<g))return A.c(i,h)
h=i[h]
if(typeof h!=="number")return h.cN()
if(h>=0){m.l(k,j)
k=a.gm()
j=a.gn()
m.l(k,j)
k=j*l+k
if(!(k>=0&&k<g))return A.c(i,k)
k=i[k]
if(typeof k!=="number")return A.B0(k)
k=h<k
m=k}else m=!1
if(m)f.$1(n)}}},
$S:11}
A.of.prototype={
$2(a,b){var s,r,q,p,o,n,m,l=this.b.F(0,a),k=this.a,j=k.c
j===$&&A.b()
if(!j.b.G(0,l))return
s=l.a
r=l.b
if(!J.ay(j.B(s,r),-2))return
q=k.d
q===$&&A.b()
p=l.F(0,q)
p=k.a.f.B(p.a,p.b)
o=this.c
n=k.hP(o,l.F(0,q),p,b)
q=j.$ti
if(n==null)j.aW(s,r,q.c.a(-1))
else{m=o+n
j.aW(s,r,q.c.a(m))
B.a.j(k.f,l)
k.e.aX(0,l,m)}},
$S:137}
A.kg.prototype={
hP(a,b,c,d){var s,r=this,q=null
if((c.a.e.a&r.r.a)===0)return q
if(r.x&&c.x>0)return q
if(r.w&&r.a.w.B(b.a,b.b)!=null)return q
s=r.y
if(s!=null)s=a>=s
else s=!1
if(s)return q
return 1}}
A.oh.prototype={
d8(a){var s,r=this.a
if(r.a.y.b.a>0){this.mu()
return}for(s=0;s<8;++s)this.n8(a,s)
r.de(a,!1,0)},
mu(){var s,r
for(s=this.a,r=A.ab(s.f.b);r.q();)s.de(new A.d(r.b,r.c),!0,0)
s.de(s.a.y.y,!1,0)},
n8(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
if(!(a6<8))return A.c($.vn,a6)
s=$.vn[a6]
r=s[0]
q=s[1]
a4.b=A.a([],t.mS)
s=a4.a
p=s.f
o=p.b
for(n=p.a,m=o.b.a,l=n.length,k=r.a,j=r.b,i=!1,h=1;;h=e){g=a5.F(0,new A.d(k*h,j*h))
if(!o.G(0,g))break
for(f=h+2,e=h+1,d=!1,c=0;c<=h;++c){if(i||d)s.de(g,!0,255)
else{b=a5.S(0,g)
a=b.a
b=b.b
a0=Math.sqrt(a*a+b*b)
if(a0>24){d=!0
a1=255}else{a2=a0/24
a1=B.e.L(a2*a2*255)}a3=new A.mn(c/f,(c+1)/e)
s.de(g,a4.my(a3),a1)
b=g.a
a=g.b
p.l(b,a)
b=a*m+b
if(!(b>=0&&b<l))return A.c(n,b)
b=n[b]
a=$.U()
if((b.a.e.a&a.a)===0)i=a4.ls(a3)}g=g.F(0,q)
if(!o.G(0,g))break}}},
my(a){var s,r,q,p,o,n
for(s=this.b,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(n.a<=q&&n.b>=p)return!0}return!1},
ls(a){var s,r,q,p,o,n,m
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
B.a.d9(this.b,p)}else{if(!(p<r))return A.c(s,p)
s=s[p]
s.a=Math.min(s.a,q)}else if(m){q=p-1
if(!(q>=0&&q<r))return A.c(s,q)
q=s[q]
q.b=Math.max(q.b,a.b)}else{A.M(s).c.a(a)
s.$flags&1&&A.bp(s,"insert",2)
if(p>r)A.a_(A.ho(p,null))
s.splice(p,0,a)}s=this.b
r=s.length
if(r===1){if(0>=r)return A.c(s,0)
s=s[0]
s=s.a===0&&s.b===1}else s=!1
return s}}
A.mn.prototype={
t(a){return"("+A.J(this.a)+"-"+A.J(this.b)+")"}}
A.pa.prototype={
cG(){var s=this
if(s.f)s.mL()
if(s.r)s.mK()
if(s.w)s.d.d8(s.a.a.y.y)
if(s.f||s.r||s.w){s.mY()
s.mM()
s.nQ()}s.w=s.r=s.f=!1},
mL(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.e
B.a.aS(a3.a)
for(s=a2.a,r=s.f,q=r.b.b,p=q.b,q=q.a,o=a2.b,n=o.$ti.c,m=o.a,l=o.b.b.a,s=s.r,k=r.a,j=k.length,i=0;i<p;++i)for(h=i*l,g=i*q,f=0;f<q;++f){e=new A.d(f,i)
r.l(f,i)
d=g+f
if(!(d>=0&&d<j))return A.c(k,d)
d=k[d]
c=B.c.P(d.a.c+d.f,0,192)
b=s.p(0,e)
b=(b==null?A.bG(B.W,null):b).b
a=A.M(b)
b=new J.aZ(b,b.length,a.h("aZ<1>"))
a=a.c
a0=0
while(b.q()){a1=b.d
a0=Math.max(a0,(a1==null?a.a(a1):a1).a.ay)}c+=A.k4(a0)/2|0
if(d.w.d&&d.x>0)c+=A.k4(7)
d=h+f
if(c>0){c=Math.min(c,192)
n.a(c)
o.l(f,i)
B.a.i(m,d,c)
a3.aX(0,e,255-c)}else{n.a(0)
o.l(f,i)
B.a.i(m,d,0)}}a2.j1(o,21)},
mK(){var s,r,q,p,o,n,m,l,k,j=this,i=j.c,h=i.$ti.c,g=i.a
B.a.oF(g,0,g.length,h.a(0))
s=j.e
B.a.aS(s.a)
for(r=j.a.b,q=r.length,p=i.b.b.a,o=0;o<r.length;r.length===q||(0,A.o)(r),++o){n=r[o]
m=A.k4(n.gdN())
if(m>0){l=n.y
h.a(m)
k=l.gm()
l=l.gn()
i.l(k,l)
B.a.i(g,l*p+k,m)
s.aX(0,n.y,255-m)}}j.j1(i,42)},
mY(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
for(s=this.a.f,r=s.b.b,q=r.b,r=r.a,p=this.b,o=p.a,n=p.b.b.a,m=o.length,l=this.c,k=l.a,j=l.b.b.a,i=k.length,h=s.a,g=h.length,f=0;f<q;++f)for(e=f*n,d=f*j,c=f*r,b=0;b<r;++b){s.l(b,f)
a=c+b
if(!(a>=0&&a<g))return A.c(h,a)
a=h[a]
a0=$.U()
if((a.a.e.a&a0.a)===0)continue
p.l(b,f)
a0=e+b
if(!(a0>=0&&a0<m))return A.c(o,a0)
a.d=J.v1(o[a0],0,255)
l.l(b,f)
a0=d+b
if(!(a0>=0&&a0<i))return A.c(k,a0)
a.e=J.v1(k[a0],0,255)}},
mM(){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.a.f,r=s.b.b,q=r.b,r=r.a,p=s.a,o=p.length,n=0;n<q;++n)for(m=n*r,l=0;l<r;++l){k={}
s.l(l,n)
j=m+l
if(!(j>=0&&j<o))return A.c(p,j)
j=p[j]
i=$.U()
if((j.a.e.a&i.a)!==0)continue
k.a=k.b=0
k.c=!1
h=new A.pb(k,this,l,n)
for(g=0;g<4;++g)h.$1(B.at[g])
if(!k.c)for(g=0;g<4;++g)h.$1(B.ca[g])
j.d=k.b
j.e=k.a}},
nQ(){var s,r,q,p,o
for(s=this.a,r=s.f.b.b,q=r.b,r=r.a,p=0;p<q;++p)for(o=0;o<r;++o)s.oD(o,p)
r=s.a.y.y
s.d1(r.gm(),r.gn(),!0)},
j1(a,b){var s,r,q,p,o,n,m,l
t.z.a(a)
s=B.e.aR(b*1.5)
for(r=a.a,q=a.b.b.a,p=r.length,o=this.e;;){n=o.fb()
if(n==null)break
m=n.gm()
l=n.gn()
a.l(m,l)
m=l*q+m
if(!(m>=0&&m<p))return A.c(r,m)
m=new A.pc(this,n,r[m],a,b)
m.$2(B.L,b)
m.$2(B.K,b)
m.$2(B.O,b)
m.$2(B.R,b)
m.$2(B.Q,s)
m.$2(B.P,s)
m.$2(B.T,s)
m.$2(B.S,s)}}}
A.pb.prototype={
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
$S:11}
A.pc.prototype={
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
if(typeof q!=="number")return q.cN()
if(q>=p)return
l.aW(s,r,l.$ti.c.a(p))
if(p<=o.e)return
m.e.aX(0,n,255-p)},
$S:92}
A.eO.prototype={
t(a){return this.a.t(0)+" pos:"+this.b.t(0)+" cost:"+this.d},
gI(a){return this.c}}
A.kw.prototype={
fk(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=new A.cg(A.a([],t.nK),t.nA),a0=A.b7(t.u),a1=b.b,a2=b.c
a.aX(0,new A.eO(B.r,a1,0,0),b.dT(a1,a2))
for(a1=b.a.f,s=a1.a,r=a1.b,q=r.b.a,p=s.length;;){o=a.fb()
if(o==null)break
n=o.b
if(n.Z(0,a2))return b.hI(o)
if(!a0.j(0,n))continue
m=b.hG(o)
if(m!=null)return m
for(l=o.c+1,k=o.d,j=o.a,i=j===B.r,h=0;h<8;++h){g=B.a5[h]
f=n.F(0,g)
if(a0.G(0,f))continue
if(!r.G(0,f))continue
e=f.a
d=f.b
a1.l(e,d)
e=d*q+e
if(!(e>=0&&e<p))return A.c(s,e)
c=b.fq(f,s[e])
if(c==null)continue
e=i?g:j
d=k+c
a.aX(0,new A.eO(e,f,l,d),d+b.dT(f,a2))}}return b.hV()},
dT(a,b){return b.S(0,a).gb3()}}
A.qr.prototype={
pt(a,b){if(b.S(0,a).gb3()>16)return 0
return this.jn(new A.rO(this.a,a,b).fk())},
iK(a){var s
if(this.a.a.y.y.S(0,a).gb3()>16)return 16
this.n7()
s=this.b.cj(a)
return s==null?16:s},
jn(a){var s=(16-a)/16
return s*s},
n7(){var s,r,q=this,p=q.b
if(p!=null&&q.a.a.y.y.Z(0,p.b))return
p=q.a
s=p.a.y.y
r=new A.mp(p,s,new A.cg(A.a([],t.c),t.r),A.a([],t.l))
r.fw(p,s,null)
q.b=r}}
A.mp.prototype={
hP(a,b,c,d){var s,r,q=null
if(a>=16)return q
s=b.a
if(s<1)return q
r=this.a.f.b.b
if(s>=r.a-1)return q
s=b.b
if(s<1)return q
if(s>=r.b-1)return q
return A.wB(c)}}
A.rO.prototype={
hG(a){if(a.d>16)return 16
return null},
fq(a,b){return A.wB(b)},
hI(a){return a.d},
hV(){return 16}}
A.qt.prototype={
gav(){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===$){s=A.a([],t.c)
r=l.f.b.b
q=r.a
r=r.b
p=t.S
o=q*r
n=A.an(o,0,!1,p)
m=t.z
p=A.an(o,0,!1,p)
l.c!==$&&A.e9()
k=l.c=new A.pa(l,new A.a8(n,new A.Y(new A.d(0,0),new A.d(q,r)),m),new A.a8(p,new A.Y(new A.d(0,0),new A.d(q,r)),m),new A.oh(l,B.hO),new A.cg(s,t.r))}return k},
geE(){var s=this.d
return s===$?this.d=new A.qr(this):s},
eN(a,b){var s,r,q,p,o,n,m,l
for(s=A.dX(a.y,b),r=this.f,q=r.a,p=r.b.b.a,o=q.length;s.q(),!0;){n=s.a
if(n.Z(0,b))return!0
m=n.gm()
l=n.gn()
r.l(m,l)
m=l*p+m
if(!(m>=0&&m<o))return A.c(q,m)
m=q[m]
l=$.U()
if((m.a.e.a&l.a)===0)return!1}throw A.n(A.bE("Unreachable."))},
on(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=A.dX(a.y,b),r=this.f,q=r.a,p=r.b.b.a,o=q.length,n=this.w,m=n.a,l=n.b.b.a,k=m.length;s.q(),!0;){j=s.a
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
if((i.a.e.a&h.a)===0)return!1}throw A.n(A.bE("Unreachable."))},
bk(a,b){var s,r
if(a.gm()<0)return!1
s=this.f
r=s.b.b
if(a.gm()>=r.a)return!1
if(a.gn()<0)return!1
if(a.gn()>=r.b)return!1
return(s.B(a.gm(),a.gn()).a.e.a&b.a)!==0},
dB(a){var s,r
B.a.j(this.b,a)
s=this.w
r=a.y
s.$ti.c.a(a)
s.aW(r.gm(),r.gn(),a)},
kD(a){var s=this,r=s.b,q=B.a.c4(r,a),p=s.e
if(p>q)s.e=p-1
B.a.d9(r,q)
if(s.e>=r.length)s.e=0
r=s.w
p=a.y
r.$ti.c.a(null)
r.aW(p.gm(),p.gn(),null)},
dZ(a,b,c){var s=A.a([],t.I)
b.b0(this.a.y.Q.ax,c,new A.qF(this,s,A.ck(this,a,$.aX(),!1,null,null),a))
return s},
cU(a,b){this.r.b7(b,new A.qB()).c8(a)
if(a.a.ay>0)this.gav().f=!0},
c5(a){var s=this.r.p(0,a)
return s==null?A.bG(B.W,null):s},
e1(a,b){var s=this.r,r=s.p(0,b)
B.a.ac(r.b,a)
if(a.a.ay>0)this.gav().f=!0
if(!r.gN(0).q())s.ac(0,b)},
eZ(a){this.r.ae(0,new A.qD(t.mH.a(a)))},
hQ(){var s=this.gav()
s.w=s.r=s.f=!0
this.geE().b=null},
d1(a,b,c){var s,r=this.f.B(a,b)
if(r.fh(c))if(!r.b&&r.d+r.e>r.c){s=this.w.B(a,b)
if(s!=null&&s instanceof A.aa)this.a.y.fl(s)}},
oD(a,b){return this.d1(a,b,null)},
de(a,b,c){var s,r=this.f.B(a.gm(),a.gn())
r.b=b
r.c=c
if(!b&&r.d+r.e>c){s=this.w.B(a.gm(),a.gn())
if(s!=null&&s instanceof A.aa)this.a.y.fl(s)}},
jS(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
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
if((n[e].a.e.a&$.aX().a)===0)continue
s.l(f,i)
i=i*q+f
if(!(i>=0&&i<p))return A.c(r,i)
if(r[i]!=null)continue
return b}}}
A.qC.prototype={
$1(a){return new A.dS($.xj(),$.ax())},
$S:93}
A.qF.prototype={
$1(a){var s,r,q,p,o,n=this
B.a.j(n.b,a)
s=n.c
r=n.a
q=s.jA(new A.qE(r))
if(q==null){s=s.gcF()
s=A.zc(s,10,s.$ti.h("k.E"))
p=A.a6(s,A.z(s).h("k.E"))
s=p.length
if(s!==0){o=$.m()
t.jX.a(p)
s=o.T(s)
if(!(s>=0&&s<p.length))return A.c(p,s)
q=p[s]}else q=n.d}q.toString
r.cU(a,q)},
$S:6}
A.qE.prototype={
$1(a){var s
if($.m().T(5)===0)return!0
s=this.a
return s.w.B(a.a,a.b)==null&&!s.r.aj(a)},
$S:1}
A.qB.prototype={
$0(){return A.bG(B.W,null)},
$S:94}
A.qD.prototype={
$2(a,b){var s,r,q,p
t.u.a(a)
for(s=t.U.a(b).b,r=A.M(s),s=new J.aZ(s,s.length,r.h("aZ<1>")),q=this.a,r=r.c;s.q();){p=s.d
q.$2(p==null?r.a(p):p,a)}},
$S:95}
A.ad.prototype={
ga0(a){return this.a},
Z(a,b){if(b==null)return!1
if(b instanceof A.ad)return this.a===b.a
return!1},
ca(a,b){return new A.ad(this.a|b.a)},
t(a){var s=A.a([],t.s),r=this.a
if((r&$.bA().a)!==0)s.push("door")
if((r&$.U().a)!==0)s.push("fly")
if((r&$.iv().a)!==0)s.push("swim")
if((r&$.aX().a)!==0)s.push("walk")
return B.a.aP(s,"|")}}
A.bw.prototype={
t(a){return this.a}}
A.dT.prototype={}
A.dS.prototype={
nY(a){this.f=B.c.P(this.f+a,0,192)},
fh(a){var s,r=this
if(a!==!0)s=!r.b&&r.d+r.e>r.c
else s=!0
if(s&&!r.r)return r.r=!0
return!1}}
A.iC.prototype={
a7(a){switch(a){case B.a0:this.il(-1)
break
case B.a1:this.il(1)
break
case B.H:this.a.aa()
break
default:return!1}return!0},
ag(a){var s,r,q,p,o,n=this,m=null
a.cl(0,0,a.gaQ(),a.gan())
s=a.e.a.b.b
r=s.b-1
n.nc(new A.aS(new A.d(40,r),0,0,a))
s=s.a-40
r=new A.aS(new A.d(s,r),40,0,a)
q=n.c
p=n.d
if(!(p>=0&&p<q.length))return A.c(q,p)
o=q[p]
A.bi(r,m,m,o.gM(),!0,m,m,m)
A.fJ(r,o.gW(),m,s-1,1,2)
r.k(1,10,"Requirement:",B.f)
s=o.gbC().gW()
q=n.b
A.fJ(r,s,o.gbC().dG(q)==null?B.p:B.m,m,1,12)
r.k(1,32,"Focus cost:",B.i)
r.k(13,32,A.Q(o.eX(q.y.Q),!1,3),B.d)
s=t.N
A.br(a,A.A(["\u2195","Select ability","`","Exit"],s,s),m)},
nc(a){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500"
A.bi(a,i,i,"Abilities",!1,i,i,i)
a.k(34,1,"Focus",B.f)
a.k(2,2,h,B.l)
for(s=j.c,r=s.length,q=j.b,p=q.y.Q,o=0,n=0;n<s.length;s.length===r||(0,A.o)(s),++n){m=s[n]
l=o*2+3
a.k(2,l+1,h,B.u)
A:{k=j.d
if(o===k){k=B.iw
break A}k=m.gbC().dG(q)
if(k==null){k=B.ip
break A}k=B.iq
break A}a.k(2,l,m.gM(),k.a)
a.k(34,l,A.Q(m.eX(p),!1,5),k.b);++o}a.am(1,j.d*2+3,A.cB(9658,B.h,i))},
il(a){var s=this,r=s.d,q=s.c.length
s.d=B.c.ad(r+q+a,q)
s.K()}}
A.fB.prototype={
aH(a){var s,r=a.x
r===$&&A.b()
s=this.a.y
s=r.f.B(s.gm(),s.gn())
if(!(!s.b&&s.d+s.e>s.c))return!1
return++this.d<24*this.c},
bs(a,b){var s
t.a.a(b)
s=this.a.y
if((B.c.A(this.d,12)&1)===1)b.$3(s.gm(),s.gn(),this.b)},
$iav:1}
A.j7.prototype={
aH(a){var s=this.c
return++this.d<s*B.e.O(A.v(s,1,10,16,8))},
bs(a,b){var s,r=this
t.a.a(b)
s=r.c
if(B.c.ad(r.d,B.e.O(A.v(s,1,10,16,8)))<B.c.A(B.e.O(A.v(s,1,10,16,8)),2)){s=r.a
b.$3(s.gm(),s.gn(),r.b)}},
$iav:1}
A.fI.prototype={
aH(a){return--this.b>=0},
bs(a,b){var s,r,q,p
t.a.a(b)
s=B.c.A(this.b,4)
if(!(s>=0&&s<5))return A.c($.vf,s)
r=A.am("*",$.vf[s],null)
q=A.w2(new A.iY(this.a,s),!0)
p=q.b
while(q.q())b.$3(p.b,p.c,r)},
$iav:1}
A.fM.prototype={
aH(a){var s=this
if($.m().T(s.c+2)===0)++s.c
return s.c<s.b.length},
bs(a,b){var s,r,q,p,o
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
$iav:1}
A.cA.prototype={
aH(a){var s,r=a.x
r===$&&A.b()
s=this.a
s=r.f.B(s.gm(),s.gn())
if(!(!s.b&&s.d+s.e>s.c))return!1
return--this.c>=0},
bs(a,b){var s=this.a
t.a.a(b).$3(s.gm(),s.gn(),this.b)},
$iav:1}
A.jJ.prototype={
aH(a){return this.c++<24},
bs(a,b){var s,r,q,p,o=null
t.a.a(b)
s=a.x
s===$&&A.b()
r=this.a
q=this.b
if(s.f.B(r,q).b)return
p=[B.u,B.a_,B.G,B.J][B.c.ad(B.c.A(this.c,4),4)]
b.$3(r-1,q,A.am("-",p,o))
b.$3(r+1,q,A.am("-",p,o))
b.$3(r,q-1,A.am("|",p,o))
b.$3(r,q+1,A.am("|",p,o))},
$iav:1}
A.jM.prototype={
aH(a){return++this.b<24},
bs(a,b){var s,r,q,p,o
t.a.a(b)
s=this.a
if((B.c.A(this.b,6)&1)===0){b.$3(s.gm(),s.gn(),$.x1())
b.$3(s.gm()-1,s.gn(),$.x3())
b.$3(s.gm()+1,s.gn(),$.x4())}else{r=s.gm()
q=s.gn()
p=$.x0()
b.$3(r-1,q-1,p)
q=s.gm()
r=s.gn()
o=$.x5()
b.$3(q-1,r+1,o)
b.$3(s.gm()+1,s.gn()-1,o)
b.$3(s.gm()+1,s.gn()+1,p)
p=s.gm()
o=s.gn()
r=$.x2()
b.$3(p-1,o,r)
b.$3(s.gm()+1,s.gn(),r)}},
$iav:1}
A.jU.prototype={
aH(a){var s,r=a.x
r===$&&A.b()
s=this.a
s=r.f.B(s.gm(),s.gn())
if(!(!s.b&&s.d+s.e>s.c))return!1
return--this.c>=0},
bs(a,b){var s=this.a
t.a.a(b).$3(s.gm(),s.gn(),this.b)},
$iav:1}
A.k9.prototype={
aH(a){return--this.c>=0},
bs(a,b){var s,r,q,p=this
t.a.a(b)
s=a.x
s===$&&A.b()
r=p.b
q=t.v.a(s.f.B(r.gm(),r.gn()).a.d)
s=p.a
q=A.cB(q.a,q.b.bi(B.h,p.c/s),q.c.bi(B.k,p.c/s))
b.$3(r.gm(),r.gn(),q)},
$iav:1}
A.kv.prototype={
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
bs(a,b){t.a.a(b).$3(B.e.L(this.a),B.e.L(this.b),A.am("\u2022",this.f,null))},
$iav:1}
A.l7.prototype={
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
return new A.d(B.e.L(m),B.e.L(r)).S(0,o).bg(0,1)},
bs(a,b){var s,r,q,p,o=this
t.a.a(b)
s=B.e.L(o.a)
r=B.e.L(o.b)
q=a.x
q===$&&A.b()
if(!q.f.b.G(0,new A.d(s,r)))return
p=o.mo(o.c,o.d)
q=$.m()
t.ev.a($.u6)
q=q.T(4)
if(!(q>=0&&q<4))return A.c($.u6,q)
b.$3(s,r,A.cB(p,$.u6[q],null))},
mo(a,b){var s,r="|\\\\--//||\\\\--//||"
if(new A.d(B.e.L(a*10),B.e.L(b*10)).ea(0,5))return 8226
s=B.e.bM(Math.atan2(a,b)/6.283185307179586*16+8)
if(!(s>=0&&s<17))return A.c(r,s)
return r.charCodeAt(s)},
$iav:1}
A.ld.prototype={
aH(a){var s=this.d
if((s&1)===0)if(--this.b<0)return!1;--s
this.d=s
return s>=0},
bs(a,b){t.a.a(b).$3(this.a,this.b,this.c)},
$iav:1}
A.fP.prototype={
gh3(){var s,r=this,q=r.e
A:{if(0===q){s=r.b.Q.ay
break A}if(1===q){s=r.b.Q.ch
break A}if(2===q){s=r.b.Q.CW
break A}if(3===q){s=r.b.Q.cx
break A}s=null
break A}return s},
gj9(){var s,r=this.e
if(r<4)return null
s=this.c
r-=4
if(!(r<s.length))return A.c(s,r)
return s[r]},
gik(){var s,r,q,p,o=this,n=o.gh3()
if(n!=null){if(n.b===40)return!1
s=o.b.Q
r=n.hr(s)
return s.y>=r}else{q=o.gj9()
if(q!=null){s=o.b.Q
p=s.z.eK(q)
if(p===s.c.i5(q))return!1
r=B.e.L(1000*Math.pow(1.8,p+1-1))
return s.y>=r}else return!1}},
li(a,b){var s,r
for(s=$.tu(),r=0;r<26;++r)s[r].gbC()},
a7(a){switch(a){case B.a0:this.im(-1)
return!0
case B.a1:this.im(1)
return!0
case B.H:this.a.aa()
return!0}return!1},
a9(a,b,c){var s,r,q,p,o,n=this
if(c||b)return!1
switch(a){case 71:if(n.gik()){s=n.gh3()
if(s!=null){r=n.b
q=r.Q
r.i7(s.hr(q))
s.kC(q,s.b+1)}else{p=n.gj9()
if(p!=null){r=n.b
q=r.Q.z
o=q.eK(p)+1
r.i7(B.e.L(1000*Math.pow(1.8,o-1)))
q.a.i(0,p,o)}}n.b.br()
n.K()}return!0}return!1},
ag(a){var s,r,q,p,o,n,m=this,l=null
a.cl(0,0,a.gaQ(),a.gan())
A.bi(a,l,3,l,!1,46,l,l)
a.k(2,1,"Available experience:",B.i)
s=m.b.Q
a.k(25,1,A.Q(s.y,!1,9),B.d)
m.lZ(new A.aS(new A.d(46,11),0,3,a))
r=a.e.a.b.b
q=r.b
m.lX(new A.aS(new A.d(46,q-14),0,14,a))
p=m.e
o=p<4?6:9
a.am(1,p*2+o,A.cB(9658,B.h,l))
n=new A.aS(new A.d(r.a-46,q),46,0,a)
r=m.e
switch(r){case 0:m.m_(n)
break
case 1:m.lS(n)
break
case 2:m.m0(n)
break
case 3:m.lV(n)
break
default:q=m.c
r-=4
if(!(r>=0&&r<q.length))return A.c(q,r)
m.lW(n,q[r])}r=t.N
r=A.C(r,r)
r.i(0,"\u2195","Change selection")
if(m.gik())r.i(0,"G","Gain "+(m.gh3()!=null?"stat":"skill"))
r.i(0,"`","Exit")
A.br(a,r,"You can spend "+A.Q(s.y,!1,l)+" experience")},
lZ(a){var s,r,q,p,o,n,m,l,k=null
A.bi(a,k,k,"Stats",!1,k,k,k)
a.k(21,1,"Base Equip Total    Cost",B.f)
s=this.b.Q
r=[s.ay,s.ch,s.CW,s.cx]
for(q=0,p=0;p<4;++p){o=r[p]
n=o.gbb()
m=o.b
l=o.a
l.toString
this.jq(a,q,n.c,m,l-m,o.hr(s),l,40,q===this.e);++q}},
lX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.bi(a,e,e,"Skills",!1,e,e,e)
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
g=p.p(0,l.gcv())
if(g==null)g=0
f.jq(a,n,j,k,i,B.e.L(1000*Math.pow(1.8,k+1-1)),h,g,n===f.e-4);++n}},
jq(a,b,c,d,e,f,g,h,i){var s,r=b*2+3,q=b===0?B.l:B.u
a.k(2,r-1,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500\u2500\u2500",q)
A:{if(i){q=B.h
break A}q=d>=h||f>this.b.Q.y
if(q){q=B.i
break A}q=B.D
break A}B:{if(i){s=B.h
break B}s=d>=h||f>this.b.Q.y
if(s){s=B.i
break B}s=B.d
break B}a.k(2,r,c,q)
a.k(20,r,A.Q(d,!1,5),s)
C:{if(e>0){q=B.p
break C}if(e<0){q=B.m
break C}q=B.u
break C}a.k(26,r,A.Q(e,!0,5),q)
a.k(32,r,A.Q(g,!1,5),s)
if(d<h)a.k(38,r,A.Q(f,!1,7),s)
else a.k(39,r,"At max",s)},
m_(a){this.eq(a,this.b.Q.ay,A.a(["Max Fury","Toss range scale"],t.s),new A.o6())},
lS(a){this.eq(a,this.b.Q.ch,A.a(["Dodge bonus","Strike bonus"],t.s),new A.o2())},
m0(a){this.eq(a,this.b.Q.CW,A.a(["Max health"],t.s),new A.o7())},
lV(a){this.eq(a,this.b.Q.cx,A.a(["Max focus"],t.s),new A.o3())},
eq(a,b,c,d){var s,r,q,p,o,n,m=null
t.m.a(c)
t.nB.a(d)
A.bi(a,m,m,b.gbb().c,!1,m,m,m)
s=b.a
s.toString
r=s-b.b
a.k(1,2,"Base value:",B.i)
a.k(15,2,A.Q(b.b,!1,3),B.d)
q=this.b.Q
if(b===q.ay){p=-q.ge6()
r=s-b.b-p
a.k(1,3,"Weight offset:",B.i)
a.k(15,3,A.Q(p,!1,3),B.d)
o=4}else o=3
a.k(1,o,"Modifiers:",B.i)
a.k(15,o,A.Q(r,!1,3),B.d);++o
a.k(1,o,"Current value:",B.i)
a.k(15,o,A.Q(s,!1,3),B.d)
for(q=c.length,o=9,n=0;n<c.length;c.length===q||(0,A.o)(c),++n){a.k(1,o,c[n]+":",B.i);++o}a.k(24,7,"Current",B.f)
a.k(24,8,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500",B.l)
for(q=J.ap(d.$1(s)),o=9;q.q();){a.k(24,o,B.j.d7(q.gH(),7),B.d);++o}if(s<40){a.k(32,7,"   Next",B.f)
a.k(32,8,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500",B.l)
for(s=J.ap(d.$1(s+1)),o=9;s.q();){a.k(32,o,B.j.d7(s.gH(),7),B.d);++o}}},
lW(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
A.bi(a,f,f,b.gM(),!1,f,f,f)
s=this.b.Q
r=s.z
q=r.eK(b)
p=r.o9(b)
o=r.bP(b)
n=s.c.i5(b)
a.k(1,2,"Base level:",B.i)
a.k(13,2,A.Q(q,!1,2),B.d)
a.k(16,2,"/",B.l)
a.k(18,2,A.Q(n,!1,2),B.d)
for(m=0;m<n;++m){s=m<q?B.m:B.Y
a.am(21+m*2,2,new A.W(9608,s,B.y))}a.k(1,3,"Equipment:",B.i)
a.k(17,3,A.Q(p,!0,3),B.d)
a.k(1,4,"Full level:",B.i)
a.k(13,4,A.Q(o,!1,2),B.d)
a.k(16,4,"/",B.l)
a.k(18,4,A.Q(15,!1,2),B.d)
A.fJ(a,b.gW(),f,a.c.a-1,1,6)
l=this.d.p(0,b)
if(l!=null){a.k(1,12,"Abilities granted:",B.f)
k=l.geU().e4(0)
B.a.dg(k,new A.o4())
for(s=k.length,j=14,i=0;i<k.length;k.length===s||(0,A.o)(k),++i){h=k[i]
a.am(1,j,new A.W(8226,B.l,B.y))
a.k(3,j,"Level "+h.a+": "+h.b.gM(),B.d);++j}}s=new A.o5(a,b)
s.$3("current",o,25)
g=B.c.P(q+1+p,0,n)
if(g<n)s.$3("next",g,35)},
im(a){var s=this,r=4+s.c.length
s.e=B.c.ad(s.e+a+r,r)
s.K()}}
A.o6.prototype={
$1(a){return A.a([B.c.t(A.hF(a)),A.pO(A.vY(a),null)],t.s)},
$S:17}
A.o2.prototype={
$1(a){return A.a([B.c.t(A.v6(a)),B.c.t(A.v7(a))],t.s)},
$S:17}
A.o7.prototype={
$1(a){return A.a([B.c.t(B.e.L(Math.pow(a,1.458)+9))],t.s)},
$S:17}
A.o3.prototype={
$1(a){return A.a([B.c.t(A.jR(a))],t.s)},
$S:17}
A.o4.prototype={
$2(a,b){var s=t.cB
return B.c.ai(s.a(a).a,s.a(b).a)},
$S:97}
A.o5.prototype={
$3(a,b,c){var s,r=this.a,q=r.c.a
A.jd(r,1,c,q-2,null)
r.k(2,c," At "+a+" level "+b+" ",B.f)
A:{if(b>0){s=new A.O(this.b.bo(b),null)
break A}s=B.iv
break A}A.fJ(r,s.a,s.b,q-1,1,c+2)},
$S:98}
A.jc.prototype={
gbn(){return!0},
a7(a){var s=this
switch(a){case B.H:s.bZ(B.r)
break
case B.aA:s.bZ(B.T)
break
case B.a0:s.bZ(B.L)
break
case B.az:s.bZ(B.Q)
break
case B.ag:s.bZ(B.R)
break
case B.af:s.bZ(B.O)
break
case B.aC:s.bZ(B.S)
break
case B.a1:s.bZ(B.K)
break
case B.aB:s.bZ(B.P)
break}return!0},
bu(){var s=(this.c+1)%40
this.c=s
if(B.c.ad(s,5)===0)this.K()},
ag(a){var s=new A.nG(this,a)
s.$3(0,B.L,"|")
s.$3(1,B.Q,"/")
s.$3(2,B.O,"-")
s.$3(3,B.P,"\\")
s.$3(4,B.K,"|")
s.$3(5,B.S,"/")
s.$3(6,B.R,"-")
s.$3(7,B.T,"\\")
s=t.N
A.br(a,A.A(["\u2195\u2194",this.gjY(),"`","Cancel"],s,s),this.gkx())},
bZ(a){var s=this.kO(a),r=this.a
if(s)r.b6(a)
else r.b6(B.r)}}
A.nG.prototype={
$3(a,b,c){var s,r,q,p,o=this.a,n=o.b,m=n.b,l=m.y.y.F(0,b)
m=m.x
m===$&&A.b()
s=l.a
r=l.b
if(!o.jF(m.f.B(s,r)))return
if(B.c.A(o.c,5)===a)q=A.am(c,B.h,B.v)
else{o=m.w.B(s,r)
if(o!=null)q=t.v.a(o.geJ())
else{p=m.c5(l)
if(!p.gaD(0))q=p.gaB(0).a.b
else{o=m.f.B(s,r)
if(o.r)t.v.a(o.a.d)
else A.cB(32,null,null)
q=t.v.a(m.f.B(s,r).a.d)}}q=A.cB(q.a,B.h,B.v)}o=n.w
o===$&&A.b()
o.d_(this.b,s,r,q)},
$S:99}
A.fx.prototype={
gkx(){return"Which direction?"},
gjY(){return"Choose direction"},
jF(a){return!0},
kO(a){this.e.$1(a)
return!0}}
A.kt.prototype={
gkx(){return"Operate what?"},
gjY(){return"Choose direction"},
jF(a){return a.a.f!=null},
kO(a){var s=this.b.b,r=s.y,q=r.y.F(0,a)
s=s.x
s===$&&A.b()
s=s.f.B(q.a,q.b).a.f
if(s!=null){r.at=new A.aR(t.fD.a(s.$1(q)))
return!0}else{r.Q.at.X(B.X,"There is nothing to operate there.",null,null,null)
return!1}}}
A.fS.prototype={
hN(a){var s=this
if(s.z!=a)s.K()
s.z=a
s.Q=null},
hO(a){var s=this
if(s.z!=null||!J.ay(s.Q,a))s.K()
s.z=null
s.Q=a},
gbL(){var s=this.gdH(),r=s==null?null:s.y
return r==null?this.Q:r},
gdH(){var s,r,q=this,p=q.z
if(p!=null)if(p.z<=0||!q.b.cA(p))q.z=null
s=q.z
if(s!=null)return s
s=q.Q
if(s!=null){r=q.b.x
r===$&&A.b()
return r.w.B(s.gm(),s.gn())}return null},
gjZ(){var s=this.b.y,r=s.z,q=s.Q.CW,p=q.a
p.toString
if(r<B.e.L(Math.pow(p,1.458)+9)/4)return B.m
if(s.w.a>0)return B.p
if(s.c.a>0)return B.G
r=s.z
q=q.a
q.toString
if(r<B.e.L(Math.pow(q,1.458)+9)/2)return B.a4
return B.D},
jc(){var s=this.b.y
if(!(s.at instanceof A.dD))return!1
s.at=null
this.K()
return!0},
a9(a,b,c){if(a===16||a===18)return!1
return this.jc()},
a7(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
if(f.jc())return!0
s=e
switch(a){case B.bY:r=f.b
q=r.x
q===$&&A.b()
p=r.y
o=p.y
if(q.f.B(o.gm(),o.gn()).a.b===B.aS){q=f.a
q.toString
q.a4(A.yj(f.c,r))}else{n=r.w===0
m=n?B.bh:B.aS
p.at=new A.dD(t.hD.a(new A.or(f,m)),n)}break
case B.bU:f.a.a4(new A.fR(f.b.w===0))
break
case B.c2:r=f.a
r.toString
r.a4(A.zj(f))
break
case B.bN:r=f.a
r.toString
q=A.a([],t.eI)
B.a.U(q,$.tu())
r.a4(new A.iC(f.b,q))
break
case B.bZ:r=f.a
r.toString
q=f.b
r.a4(A.yl(q.a,q.y))
break
case B.b7:r=f.a
r.toString
q=B.aQ.gb2()
q=A.a6(q,A.z(q).h("k.E"))
r.a4(new A.fV(q))
break
case B.bV:r=f.a
r.toString
q=f.b
p=q.a
q=q.y.Q
if($.bt.length===0){o=new A.jk(A.u5(B.cd,B.hS,B.hT,!1,t.cm),B.cz,p,q)
o.dj()
l=A.yK(p,q)
q=new A.jW(p,q)
q.mC()
B.a.U($.bt,A.a([o,l,q],t.f_))}r.a4(B.a.gaB($.bt))
break
case B.bM:f.a.a4(new A.jf(f,B.I))
break
case B.c1:f.a.a4(new A.li(f,B.I))
break
case B.c0:f.a.a4(new A.lb(f,B.I))
break
case B.bP:f.b.y.at=new A.dD(e,!1)
break
case B.aI:if(!f.b.y.pd())f.K()
break
case B.bW:f.n1()
break
case B.bX:r=f.b
q=r.x
q===$&&A.b()
r=r.y
k=q.c5(r.y)
q=k.b.length
if(q>1)f.a.a4(new A.ky(f,B.W))
else if(q===1)r.at=new A.aR(A.vI(k.gaB(0)))
else{r.Q.at.X(B.X,"There is nothing here.",e,e,e)
f.K()}break
case B.bO:f.a.a4(new A.jj(f,B.I))
break
case B.aA:s=A.bm(B.T)
break
case B.a0:s=A.bm(B.L)
break
case B.az:s=A.bm(B.Q)
break
case B.ag:s=A.bm(B.R)
break
case B.a7:s=A.bm(B.r)
break
case B.af:s=A.bm(B.O)
break
case B.aC:s=A.bm(B.S)
break
case B.a1:s=A.bm(B.K)
break
case B.aB:s=A.bm(B.P)
break
case B.b9:f.b.y.at=new A.c5(B.T)
break
case B.ao:f.b.y.at=new A.c5(B.L)
break
case B.b8:f.b.y.at=new A.c5(B.Q)
break
case B.aK:f.b.y.at=new A.c5(B.R)
break
case B.aJ:f.b.y.at=new A.c5(B.O)
break
case B.bb:f.b.y.at=new A.c5(B.S)
break
case B.ap:f.b.y.at=new A.c5(B.K)
break
case B.ba:f.b.y.at=new A.c5(B.P)
break
case B.bR:f.bK(B.T)
break
case B.b4:f.bK(B.L)
break
case B.bQ:f.bK(B.Q)
break
case B.b6:f.bK(B.R)
break
case B.b3:f.bK(B.O)
break
case B.bT:f.bK(B.S)
break
case B.b5:f.bK(B.K)
break
case B.bS:f.bK(B.P)
break
case B.b2:A:{j=f.as
r=t.bW.b(j)
if(r){q=f.gdH()!=null
i=j}else{i=e
q=!1}if(q){f.iG(i)
break A}i=r?j:e
if(r){f.iU(i)
break A}if(t.ln.b(j)){f.a.a4(new A.fx(f.gmj(),f))
break A}r=t.lz.b(j)
h=r?j:e
if(r){r=f.b
q=r.y
q.at=new A.aR(h.dz(q.Q,h.ak(r)))
break A}f.b.y.Q.at.X(B.X,"No ability selected.",e,e,e)
f.K()}break
case B.c_:r=f.b.y.Q
g=r.e.d
if(g==null){r.at.X(B.X,"You aren't holding an unequipped item to swap.",e,e,e)
f.K()}else s=A.vj(B.I,g)
break
case B.c3:r=f.a
r.toString
q=t.bx
p=A.a([],q)
o=new A.hP(p,f.b)
B.a.U(p,A.a([new A.a2(["m",77,"Map Dungeon",o.gmW()]),new A.a2(["i",73,"Illuminate Dungeon",o.gmv()]),new A.a2(["d",68,"Drop Item",o.gm2()]),new A.a2(["s",83,"Spawn Monster",o.gnU()]),new A.a2(["x",88,"Gain Experience",o.gmm()]),new A.a2(["k",75,"Kill All Monsters",o.gmI()]),new A.a2(["c",67,"Clear All Floor Items",o.glH()]),new A.a2(["l",76,"Make Stairs",o.gmU()]),new A.a2(["o",79,"Toggle Show All Monsters",o.gnG()]),new A.a2(["a",65,"Toggle Show Monster Alertness",o.gnE()]),new A.a2(["v",86,"Toggle Show Hero Volume",o.gnI()])],q))
r.a4(o)
break}if(s!=null)f.b.y.at=new A.aR(s)
return!0},
dA(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.b,b=c.y
if(!b.f5(c))e.x=10
A:{if(a instanceof A.fO){b=b.Q
b.x.ae(0,new A.op())
s=e.d
s.bw()
r=e.a
r.toString
r.bU(A.on(s,c.a,b,!1))
break A}q=a instanceof A.hx
p=d
if(q){s=A.fl(a0)
if(s)p=a0
o=a0}else{o=d
s=!1}if(s){e.d.bw()
s=e.a
s.toString
n=A.tP(c.a,p,b.Q,d,d)
b=n.e7()
s.a4(new A.h8(n,new A.ag(b.a(),b.$ti.h("ag<1>"))))
break A}s=a instanceof A.h8
if(s){m=!0
if(q)r=o
else{r=a0
q=m
o=r}l=t.hB
l.a(r)
if(q)r=o
else{r=a0
q=m
o=r}l.a(r)
k=r}else k=d
if(s){c=e.a
c.toString
c.bU(A.vo(e.d,k))
break A}j=a instanceof A.fR
i=d
if(j){if(q)s=o
else{s=a0
o=s
q=!0}i=!0===s
s=i
s=s&&c.w>0}else s=!1
if(s){b=e.a
b.toString
b.bU(A.on(e.d,c.a,e.c,!1))
break A}if(j)s=i
else s=!1
if(s){e.d.bw()
e.a.aa()
break A}if(a instanceof A.dU){e.d.bw()
break A}if(a instanceof A.eD&&c.w===0){e.d.bw()
break A}s=a instanceof A.hM
h=d
if(s){m=!0
if(q)r=o
else{r=a0
q=m
o=r}l=t.bW
r=l.b(r)
if(r){if(q)g=o
else{g=a0
q=m
o=g}l.a(g)
h=g}}else r=!1
if(r){e.iU(h)
break A}r={}
r.a=null
if(s){m=!0
if(q)l=o
else{l=a0
q=m
o=l}g=t.ln
l=g.b(l)
if(l){if(q)f=o
else{f=a0
q=m
o=f}r.a=g.a(f)}}else l=!1
if(l){e.a.a4(new A.fx(new A.oq(r,e),e))
break A}h=d
if(s){if(q)s=o
else{s=a0
o=s
q=!0}r=t.lz
s=r.b(s)
if(s)h=r.a(q?o:a0)}else s=!1
if(s){e.as=h
b.at=new A.aR(h.dz(b.Q,h.ak(c)))
break A}if(a instanceof A.fP)e.d.bw()}},
bu(){var s,r,q,p,o=this
if(o.m7())return
s=o.x
if(s>0){o.x=s-1
return}s=o.b
r=s.bu()
s=s.y
if(s.z<=0){q=o.a
q.toString
p=o.d
s=s.Q
if(s.d)p.ac(0,s)
else p.pc(o.c)
p.bw()
q.bU(new A.jE(s))
return}q=o.w
q===$&&A.b()
if(q.aH(r))o.K()
q=s.Q.at.b
if(q!==o.y){o.y=q
o.K()}if(s.at instanceof A.dD)o.x=2},
e2(a){var s,r,q,p,o=this,n=a.a,m=n-100,l=B.c.P(21+B.c.A(m,30)*3,21,33)
if(n>=100){s=Math.min(50,24+B.c.A(m,3))
o.f.a=new A.Y(new A.d(n-s,0),new A.d(s,a.b))}else s=0
m=a.b
r=Math.min(10,3+B.c.A(m-30,3))
q=n-l-s
p=o.r
p===$&&A.b()
p.a=new A.Y(new A.d(0,0),new A.d(l,m))
p=o.f
if(s>0)p.a=new A.Y(new A.d(n-s,0),new A.d(s,m))
else p.a=null
o.e.a=new A.Y(new A.d(l,0),new A.d(q,r))
n=o.w
n===$&&A.b()
n.a=new A.Y(new A.d(l,r),new A.d(q,m-r))},
ag(a){var s,r=this
a.cl(0,0,a.gaQ(),a.gan())
s=r.w
s===$&&A.b()
s.ag(a)
r.e.ag(a)
s=r.r
s===$&&A.b()
s.ag(a)
r.f.ag(a)},
m7(){var s,r,q=this,p=q.b,o=p.x
o===$&&A.b()
p=p.y
s=p.y
r=o.f.B(s.gm(),s.gn()).a.b
if(r==q.at)return!1
q.at=r
switch(r){case B.bh:o=q.a
o.toString
p=p.Q
s=new A.hx(p)
s.e=Math.min(100,p.as+1)
o.a4(s)
break
case B.cy:q.a.a4(new A.i_(q))
break
case B.cx:q.bX(0)
break
case B.cw:q.bX(1)
break
case B.cv:q.bX(2)
break
case B.cu:q.bX(3)
break
case B.ct:q.bX(4)
break
case B.cs:q.bX(5)
break
case B.iS:q.bX(6)
break
case B.iT:q.bX(7)
break
case B.iU:q.bX(8)
break}return!0},
n1(){var s,r,q,p,o,n,m,l,k,j,i=this,h=A.a([],t.l)
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
if(q===0){r.Q.at.X(B.X,"You are not next to anything to operate.",null,null,null)
i.K()}else if(q===1){n=B.a.gaB(h)
s=s.x
s===$&&A.b()
r.at=new A.aR(t.fD.a(s.f.B(n.gm(),n.gn()).a.f.$1(n)))}else i.a.a4(new A.kt(i))},
iU(a){var s=this,r=s.a
r.toString
r.a4(A.vZ(s,a.e8(0,s.b),new A.oo(s,a)))},
iG(a){var s=this,r=s.b,q=r.y,p=J.ay(s.gbL(),q.y)
if(p){q.Q.at.X(B.X,"You can't target yourself.",null,null,null)
s.K()
return}s.as=a
p=s.gbL()
p.toString
q.at=new A.aR(a.dz(q.Q,a.f7(r,p)))},
bK(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null
if(a===B.r)return
A:{s=c.as
r=t.ln.b(s)
q=r?s:b
if(r){r=c.b
p=r.y
p.at=new A.aR(q.dz(p.Q,q.hB(r,a)))
break A}r=t.bW.b(s)
o=r?s:b
if(r){r=c.b
p=r.y
n=p.y.F(0,a)
m=A.dV()
for(l=A.dX(p.y,n);l.q(),!0;){k=l.a
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
if(h!=null){if(c.z!==h)c.K()
c.z=h
c.Q=null
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
if(l===m)A.a_(A.yF(""))
t.n7.a(l)
if(c.z!=null||!J.ay(c.Q,l))c.K()
c.z=null
c.Q=l
break}if(k.S(0,p.y).cN(0,o.e8(0,r))){if(c.z!=null||!J.ay(c.Q,k))c.K()
c.z=null
c.Q=k
break}m.b=k}e=c.gbL()
l=p.Q
if(e!=null)p.at=new A.aR(o.dz(l,o.f7(r,e)))
else{r=r.x
r===$&&A.b()
p=p.y.F(0,a)
l.at.X(B.X,"There is a "+r.f.B(p.a,p.b).a.a+" in the way.",b,b,b)
c.K()}break A}r=t.lz.b(s)
d=r?s:b
if(r){c.b.y.Q.at.X(B.X,d.gM()+" does not take a direction.",b,b,b)
c.K()
break A}c.b.y.Q.at.X(B.X,"No ability selected.",b,b,b)
c.K()}},
bX(a){var s=this.b.y.Q.x,r=A.z(s).h("b0<1>"),q=A.a6(new A.b0(s,r),r.h("k.E"))
if(a>=q.length)return
r=this.a
r.toString
s=s.p(0,q[a])
s.toString
r.a4(new A.id(s,this))}}
A.or.prototype={
$1(a){var s=this.a.b.x
s===$&&A.b()
return s.f.B(a.gm(),a.gn()).a.b===this.b},
$S:1}
A.op.prototype={
$2(a,b){t.g.a(a).aH(t.U.a(b))},
$S:101}
A.oq.prototype={
$1(a){var s=this.b
s.as=this.a.a
s.bK(a)},
$S:34}
A.oo.prototype={
$1(a){return this.a.iG(this.b)},
$S:11}
A.h8.prototype={
gbn(){return!0},
a7(a){if(a===B.H){this.a.b6(!1)
return!0}return!1},
a9(a,b,c){if(c||b)return!1
switch(a){case 78:this.a.b6(!1)
break
case 89:this.a.b6(!0)
break}return!0},
bu(){var s,r=this,q=new A.qH()
$.uL()
s=$.tY.$0()
q.a=s
q.b=null
for(s=r.c;q.goz()<16;)if(s.q())r.K()
else{r.a.b6(r.b)
return}r.d=(r.d+1)%10},
ag(a){var s,r=a.e.a.b.b
a=new A.aS(new A.d(30,7),B.c.A(r.a-30,2),B.c.A(r.b-7,2),a)
A.cz(a,0,0,30,7,B.h,"\u2554","\u2550","\u2557","\u2551","\u255a","\u2550","\u255d")
a.k(2,2,"Entering dungeon...",B.d)
s=B.c.A(this.d,2)
a.k(2,4,B.j.aJ(B.j.aI("/    ",6),s,s+26),B.d)}}
A.l5.prototype={
gbn(){return!0},
ln(a,b,c){var s,r,q,p,o,n=this,m=n.b,l=m.b,k=l.y,j=l.x
j===$&&A.b()
j=j.b
s=j.length
r=n.e
q=n.c
p=0
for(;p<j.length;j.length===s||(0,A.o)(j),++p){o=j[p]
if(!(o instanceof A.aa))continue
if(!l.cA(o))continue
if(o.y.S(0,k.y).bg(0,q))continue
B.a.j(r,o)}if(r.length===0){n.f=!0
m.hO(k.y)}else n.jd(k.y)},
jd(a){var s,r,q,p=this.e,o=p.length
if(o===0)return!1
for(s=null,r=0;r<o;++r){q=p[r]
if(s==null||a.S(0,q.y).ea(0,a.S(0,s.y)))s=q}this.b.hN(s)
return!0},
a7(a){var s,r=this
switch(a){case B.a7:s=r.b
if(s.gbL()!=null){r.a.aa()
s=s.gbL()
s.toString
r.d.$1(s)}break
case B.H:r.a.aa()
break
case B.aA:r.cd(B.T)
break
case B.a0:r.cd(B.L)
break
case B.az:r.cd(B.Q)
break
case B.ag:r.cd(B.R)
break
case B.af:r.cd(B.O)
break
case B.aC:r.cd(B.S)
break
case B.a1:r.cd(B.K)
break
case B.aB:r.cd(B.P)
break}return!0},
a9(a,b,c){var s,r,q=this
if(a===9&&q.e.length!==0){s=q.f
q.f=!s
r=q.b
if(s){s=r.gbL()
q.jd(s==null?r.b.y.y:s)}else r.hO(r.gbL())
return!0}return!1},
bu(){var s=(this.r+1)%25
this.r=s
if(B.c.ad(s,5)===0)this.K()},
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
if((a&$.aX().a)===0&&(a&$.U().a)===0)continue
if(b!=null)continue
if(b2.aj(d))continue}else if(a7.mz(d))continue
else if(b!=null&&b1.cA(b))continue
if(d.S(0,s.y).bg(0,p))continue
if(c.r){a0=c.a.d
if(a0 instanceof A.W)a1=a0.a
else{g.a(a0)
if(0>=a0.length)return A.c(a0,0)
a1=a0[0].a}}else a1=183
c=r.a.a
b=r.r.a
a=r.w
b3.am(f+c.a-b.a+a.a,e+c.b-b.b+a.b,new A.W(a1,B.h,B.y))}a2=b0.gbL()
if(a2==null)return
b0=o.B(a2.gm(),a2.gn())
if(b0.r){b1=$.U()
b0=(b0.a.e.a&b1.a)!==0&&!b0.b}else b0=!0
a3=!1
if(b0){a4=B.c.A(a7.r,5)
for(b0=A.dX(s.y,a2);b0.q(),!0;){d=b0.a
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
q=a4===0?B.h:B.i
p=r.a.a
g=r.r.a
f=r.w
b3.am(b1+p.a-g.a+f.a,b2+p.b-g.b+f.b,new A.W(8226,q,B.y))
a4=B.c.ad(a4+5-1,5)}}else a4=0
a5=a3?a4===0?B.h:B.i:B.i
r.d_(b3,a2.gm()-1,a2.gn(),A.am("-",a5,a8))
r.d_(b3,a2.gm()+1,a2.gn(),A.am("-",a5,a8))
r.d_(b3,a2.gm(),a2.gn()-1,A.am("|",a5,a8))
r.d_(b3,a2.gm(),a2.gn()+1,A.am("|",a5,a8))
if(!a3)r.d_(b3,a2.gm(),a2.gn(),A.am("X",a5,a8))
b0=t.N
a6=A.C(b0,b0)
if(a7.e.length===0)a6.i(0,"\u2195\u2194",a9)
else if(a7.f){a6.i(0,"\u2195\u2194",a9)
a6.i(0,"Tab","Target monsters")}else{a6.i(0,"\u2195\u2194","Choose monster")
a6.i(0,"Tab","Target floor")}a6.i(0,"`","Cancel")
A.br(b3,a6,"Choose a target.")},
cd(a){if(this.f)this.lE(a)
else this.lF(a)},
lE(a){var s=this.b,r=s.gbL().F(0,a)
if(r.S(0,s.b.y.y).bg(0,this.c))return
s.hO(r)},
lF(a){var s,r,q,p,o,n,m,l,k,j,i,h=t.lE,g=A.a([],h),f=A.a([],h)
h=this.b
s=h.gbL()
s.toString
r=a.gbE()
for(q=this.e,p=q.length,o=r.c,n=r.d,m=0;m<q.length;q.length===p||(0,A.o)(q),++m){l=q[m]
k=l.y.S(0,s)
if(o*k.b-n*k.a>0)B.a.j(g,l)
else B.a.j(f,l)}q=t.B
j=A.zW(g,new A.r2(s),q)
if(j!=null){h.hN(j)
return}i=A.zV(f,new A.r3(s),q)
if(i!=null)h.hN(i)},
mz(a){var s,r,q,p,o,n,m,l=this.b.b,k=l.x
k===$&&A.b()
for(l=A.dX(l.y.y,a),k=k.f,s=k.a,r=k.b,q=r.b.a,p=s.length;l.q(),!0;){o=l.a
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
if(n)return!0}throw A.n(A.bE("Unreachable."))}}
A.r2.prototype={
$1(a){return t.B.a(a).y.S(0,this.a).gaF()},
$S:35}
A.r3.prototype={
$1(a){return t.B.a(a).y.S(0,this.a).gaF()},
$S:35}
A.hM.prototype={
gbn(){return!0},
a7(a){if(a===B.H){this.a.aa()
return!0}return!1},
a9(a,b,c){if(c||b)return!1
if(a>=65&&a<=90){this.nR(a-65)
return!0}return!1},
nR(a){var s,r=this.c,q=r.length
if(a>=q)return
s=this.a
s.toString
if(!(a>=0))return A.c(r,a)
s.b6(r[a])},
ag(a){var s,r,q,p,o,n,m,l=null,k="abcdefghijklmnopqrstuvwxyz",j=t.N
A.br(a,A.A(["A-Z","Select ability","`","Exit"],j,j),l)
j=this.c
s=Math.max(j.length+2,3)
a=new A.aS(new A.d(40,s),a.e.a.b.b.a-40,0,a)
A.bi(a,l,s,"Use which ability?",!0,l,l,l)
a.k(31,0," Focus ",B.h)
a=a.b8(1,1,38,s-2)
if(j.length===0){a.k(0,0,"(You don't have any abilities)",B.i)
return}r=this.b.b.y
for(q=a.c.a-5,p=r.Q,o=0;o<j.length;++o){n=j[o]
m=n.eX(p)
if(r.ch<m){a.k(3,o,n.gM(),B.i)
a.k(q,o,A.Q(m,!1,3),B.bo)}else{a.k(0,o," )   ",B.i)
if(!(o<26))return A.c(k,o)
a.k(0,o,k[o],B.h)
a.k(3,o,n.gM(),B.D)
a.k(q,o,A.Q(m,!1,3),B.d)}}}}
A.fV.prototype={
gbn(){return!0},
a7(a){var s=this
switch(a){case B.a0:s.eC(-1)
return!0
case B.a1:s.eC(1)
return!0
case B.ao:s.eC(-(s.d-3))
return!0
case B.ap:s.eC(s.d-3)
return!0
case B.H:s.a.aa()
return!0}return!1},
a9(a,b,c){var s,r,q,p=this
if(b)return!1
switch(a){case 9:s=c?-1:1
r=p.b
q=p.e.length
p.b=B.c.ad(r+s+q,q)
p.c=0
p.K()
return!0
default:return!1}},
ag(a){var s,r,q,p,o,n,m=this,l=null,k=a.e.a.b.b,j=k.b,i=new A.aS(new A.d(80,j),B.c.A(k.a-80,2),0,a)
m.d=j-4
i.cl(0,0,i.gaQ(),i.gan())
A.bi(i,l,j,"Help",!0,80,l,l)
for(k=m.e,s=0;j=k.length,s<j;++s){r=s===m.b?B.h:B.D
i.k(2,s*2+2,k[s],r)}q=m.b
if(!(q>=0&&q<j))return A.c(k,q)
p=B.aQ.p(0,k[q])
for(k=p.length,s=0;j=m.d,s<j;++s){o=s+m.c
if(o<k){if(!(o>=0))return A.c(p,o)
n=p[o]
i.k(21,s+2,n.b,n.a)}}A.vh(i,j,m.c,k,j,78,2)
k=t.N
A.br(a,A.A(["Tab","Next Chapter","\u2195","Scroll","Shift-\u2195","Page Up/Down","`","Exit"],k,k),l)},
eC(a){var s,r=this,q=r.e,p=r.b
if(!(p>=0&&p<q.length))return A.c(q,p)
s=B.aQ.p(0,q[p])
r.c=B.c.P(r.c+a,0,s.length-r.d)
r.K()}}
A.f.prototype={}
A.jk.prototype={
gM(){return"Equipment"},
gck(){var s=t.N,r=A.cH(this.e.gck(),s,s)
switch(this.f.a){case 0:s=B.ch
break
case 1:s=A.A(["R","Show resistances"],s,s)
break
case 2:s=A.A(["R","Show stats"],s,s)
break
case 3:s=B.ch
break
default:s=null}r.U(0,s)
return r},
e2(a){var s,r=this
if(a.a>110){r.f=B.cB
r.dj()
r.K()}else{s=r.f
if(B.cz===s||B.cB===s){r.f=B.bj
r.dj()
r.K()}}},
a9(a,b,c){var s,r=this
if(r.e.a9(a,b,c)){r.K()
return!0}if(!b){s=82===a
if(s&&!c&&r.f===B.bj){r.f=B.cA
r.dj()
r.K()
return!0}if(s&&!c&&r.f===B.cA){r.f=B.bj
r.dj()
r.K()
return!0}}return r.fv(a,b,c)},
a7(a){if(this.e.a7(a)){this.K()
return!0}return this.fu(a)},
hm(a){var s,r,q,p=this,o=p.e,n=a.c,m=n.a
n=n.b
o.hk(a.b8(0,1,m,n-3))
s=m-32
switch(p.f.a){case 0:break
case 1:p.js(a,s)
p.jt(a,s,21)
break
case 2:p.jp(a,s)
p.jo(a,s,21)
break
case 3:s=m-65
p.js(a,s)
r=s+33
p.jp(a,r)
p.jt(a,s,21)
p.jo(a,r,21)
break}a.k(s-7,21,"Totals",B.i)
r=o.c
o=o.y
if(!(o>=0&&o<r.length))return A.c(r,o)
q=r[o].b
o=n-15
if(q!=null)A.vu(p.c,t.W.a(q),!0).jM(a.b8(0,o,m,14))
else A.nI(a,0,o,m,14,null,null)},
dj(){var s,r=this,q=A.a([new A.aK("Item",B.a6,0,null)],t.D)
switch(r.f.a){case 0:s=B.cd
break
case 1:s=r.ij()
break
case 2:s=r.fB()
break
case 3:s=A.a6(r.ij(),t.jF)
B.a.U(s,r.fB())
break
default:s=null}B.a.U(q,s)
r.e.kA(new A.nX(r),q)},
ij(){var s=null
return A.a([new A.aK("El",B.a6,2,s),new A.aK("Damage",B.a6,11,s),new A.aK("Hit",B.a6,4,s),new A.aK("Dodge",B.a6,5,s),new A.aK("Armor",B.a6,6,s)],t.D)},
fB(){return new A.R(this.lx(),t.oP)},
lx(){return function(){var s=0,r=1,q=[],p,o,n
return function $async$fB(a,b,c){if(b===1){q.push(c)
s=r}for(;;)switch(s){case 0:p=$.fs(),o=0
case 2:if(!(o<12)){s=4
break}n=p[o]
if(n===$.ax()){s=3
break}s=5
return a.b=new A.aK(n.b,B.a6,2,A.e3(n)),1
case 5:case 3:++o
s=2
break
case 4:return 0
case 1:return a.c=q.at(-1),3}}}},
fC(a){return new A.R(this.ly(a),t.mY)},
ly(a){var s=this
return function(){var r=a
var q=0,p=1,o=[],n,m,l,k
return function $async$fC(b,c,d){if(c===1){o.push(d)
q=p}for(;;)switch(q){case 0:m=r.a
l=m.x
k=t.H
q=l!=null?2:4
break
case 2:q=5
return b.b=new A.a9(A.a([new A.N(r.gb1().b,A.e3(r.gb1()))],k),!0),1
case 5:n=A.a([new A.N(A.Q(l.c,!1,2),null)],k)
B.a.U(n,s.iD(r.gcZ()))
B.a.U(n,s.cs(r.gcY()))
B.a.U(n,s.cs(r.gcb()))
q=6
return b.b=new A.a9(n,!0),1
case 6:q=7
return b.b=new A.a9(s.cs(r.gcb()),!0),1
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
B.a.U(m,s.cs(r.gc1()))
q=15
return b.b=new A.a9(m,!0),1
case 15:q=13
break
case 14:q=16
return b.b=new A.a9(A.a([new A.N("",null)],k),!0),1
case 16:case 13:return 0
case 1:return b.c=o.at(-1),3}}}},
fA(a){return new A.R(this.lw(a),t.mY)},
lw(a){return function(){var s=a
var r=0,q=1,p=[],o,n,m,l,k
return function $async$fA(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:o=$.fs(),n=t.H,m=0
case 2:if(!(m<12)){r=4
break}l=o[m]
if(l===$.ax()){r=3
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
js(a,b){a.k(b,0,"\u2550\u2550\u2550\u2550\u2550 Attack \u2550\u2550\u2550\u2550\u2550\u2550 \u2550\u2550 Defense \u2550",B.u)
a.k(b+6,0,"Attack",B.l)
a.k(b+23,0,"Defense",B.l)},
jp(a,b){a.k(b,0,"\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Resistances \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550",B.u)
a.k(b+10,0,"Resistances",B.l)},
jt(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=$.ax()
for(s=h.c.f.b,r=3,q=1,p=0,o=0,n=0,m=0,l=0;l<9;++l){k=s[l]
if(k==null)continue
j=k.a
i=j.x
if(i!=null){g=k.gb1()
r=i.c}q*=k.gcZ()
p+=k.gcY()
o+=k.gcb()
n+=j.Q
m+=k.gc1()}a.k(b,c,g.b,A.e3(g))
s=t.H
j=A.a([new A.N(A.Q(r,!1,2),null)],s)
B.a.U(j,h.iD(q))
B.a.U(j,h.cs(p))
B.a.U(j,h.cs(o))
A.u7(a,j,B.a6,B.D,11,b+3,c)
s=A.a([new A.N(A.Q(n,!1,2),null)],s)
B.a.U(s,h.cs(m))
A.u7(a,s,B.a6,B.D,6,b+26,c)},
jo(a,b,c){var s,r,q,p,o,n,m
for(s=$.fs(),r=this.c,q=0,p=0;p<12;++p){o=s[p]
if(o===$.ax())continue
n=r.jQ(o)
if(n>0)m=B.p
else m=n<0?B.m:B.l
a.k(b+q*3,c,A.Q(n,!1,2),m);++q}},
iD(a){var s,r=null,q=A.tV(a,1,r)
if(a>1)return A.a([new A.N(B.j.aI(" ",4-q.length),r),new A.N("x",B.A),new A.N(q,B.p)],t.H)
else{s=t.H
if(a<1)return A.a([new A.N(B.j.aI(" ",4-q.length),r),new A.N("x",B.Y),new A.N(q,B.m)],s)
else return A.a([new A.N("   ",r)],s)}},
cs(a){var s,r=null,q=A.Q(Math.abs(a),!1,r)
if(a>0)return A.a([new A.N(B.j.aI(" ",3-q.length),r),new A.N("+",B.A),new A.N(q,B.p)],t.H)
else{s=t.H
if(a<0)return A.a([new A.N(B.j.aI(" ",3-q.length),r),new A.N("+",B.Y),new A.N(q,B.m)],s)
else return A.a([new A.N("   ",r)],s)}}}
A.nX.prototype={
$0(){return new A.R(this.kW(),t.d8)},
kW(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e
return function $async$$0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=t.H,n=t.bZ,m=t.ax,l=s.a,k=l.c.f.b,j=t.cI,i=0
case 2:if(!(i<9)){r=4
break}h=k[i]
r=h!=null?5:7
break
case 5:g=h.a
f=A.a([new A.a9(A.a([new A.N(h.gao().a,null)],o),!0)],n)
switch(l.f.a){case 0:e=B.hU
break
case 1:e=l.fC(h)
break
case 2:e=l.fA(h)
break
case 3:e=A.a6(l.fC(h),j)
B.a.U(e,l.fA(h))
break
default:e=null}B.a.U(f,e)
r=8
return a.b=new A.aq(g.b,h,f,m),1
case 8:r=6
break
case 7:r=9
return a.b=new A.aq(null,null,A.a([new A.a9(A.a([new A.N("("+B.aD[i]+")",null)],o),!1)],n),m),1
case 9:case 6:case 3:++i
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
$S:103}
A.fa.prototype={
aK(){return"_Columns."+this.b}}
A.cD.prototype={
gck(){var s=t.N
return A.C(s,s)},
a9(a,b,c){var s,r
if(b)return!1
if(a===9){s=B.a.c4($.bt,this)
s=c?s+($.bt.length-1):s+1
r=$.bt[B.c.ad(s,$.bt.length)]
this.a.bU(r)
return!0}return!1},
a7(a){if(a===B.H){this.a.aa()
return!0}return!1},
ag(a){var s,r,q,p,o,n,m,l,k=this,j=a.e.a.b.b,i=j.a
A.jd(a,0,2,i,B.f)
for(s=$.bt.length,r=2,q=0;q<$.bt.length;$.bt.length===s||(0,A.o)($.bt),++q){p=$.bt[q]
o=p.gM().length
if(p===k){a.k(r,2,"\u2518"+B.j.aI(" ",o)+"\u2514",B.f)
n=B.f
m=B.f}else{n=B.l
m=B.l}a.k(r,0,"\u250c"+B.j.aI("\u2500",o)+"\u2510",n)
a.k(r,1,"\u2502",n)
a.k(r+o+1,1,"\u2502",n)
a.k(r+1,1,p.gM(),m)
r+=o+2}k.hm(new A.aS(new A.d(i,j.b-3),0,3,a))
l=$.bt[B.c.ad(B.a.c4($.bt,k)+1,$.bt.length)]
j=t.N
j=A.cH(k.gck(),j,j)
j.i(0,"Tab","View "+l.gM())
j.i(0,"`","Exit")
A.br(a,j,null)}}
A.jW.prototype={
gdw(){var s,r,q,p,o=this,n=null,m=o.e
if(m===$){s=A.a([new A.aK("Name",B.a6,0,n),new A.aK("Depth",B.al,5,n),new A.aK("Price",B.al,7,n),new A.aK("Found",B.al,5,n),new A.aK("Used",B.al,5,n)],t.D)
r=t.m2
q=t.o5
q=A.a([new A.bu("type",A.a([A.B8(),A.wO(),A.th()],r),q),new A.bu("name",A.a([A.th()],r),q),new A.bu("depth",A.a([A.wO(),A.th()],r),q),new A.bu("price",A.a([A.B7(),A.th()],r),q)],t.mQ)
r=t.i0
p=A.u5(s,A.a([new A.c3("all",new A.oQ(),r),new A.c3("discovered",new A.oR(o),r)],t.aG),q,!0,t.q)
o.e!==$&&A.e9()
o.e=p
m=p}return m},
gM(){return"Item Lore"},
gck(){return this.gdw().gck()},
a9(a,b,c){if(this.gdw().a9(a,b,c)){this.K()
return!0}return this.fv(a,b,c)},
a7(a){if(this.gdw().a7(a)){this.K()
return!0}return this.fu(a)},
hm(a){var s,r,q=this.gdw(),p=a.c,o=p.a
p=p.b
q.hk(a.b8(0,1,o,p-16))
s=q.c
q=q.y
if(!(q>=0&&q<s.length))return A.c(s,q)
r=this.c
q=t.q.a(s[q].b)
if(r.ax.jV(q)>0)A.vu(r,new A.L(q,null,null,null,1),!0).jM(a.b8(0,p-15,o,14))},
mC(){var s=$.bh().gc_(),r=A.a6(s,A.z(s).h("k.E"))
this.gdw().kz(new A.oP(this,r))}}
A.oQ.prototype={
$1(a){t.q.a(a)
return!0},
$S:36}
A.oR.prototype={
$1(a){return this.a.c.ax.jV(t.q.a(a))>0},
$S:36}
A.oP.prototype={
$0(){return new A.R(this.kX(),t.jE)},
kX(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e
return function $async$$0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=t.H,m=t.bZ,l=t.bB,k=s.a.c.ax,j=k.c,k=k.f,i=0
case 2:if(!(i<o.length)){r=4
break}h=o[i]
g=j.p(0,h)
if(g==null)g=0
r=g>0?5:7
break
case 5:f=A.a([new A.a9(A.a([new A.N(h.a.a6(1).a,null)],n),!0),new A.a9(A.a([new A.N(A.Q(h.c,!1,5),null)],n),!0),new A.a9(A.a([new A.N(A.Q(h.as,!1,7),null)],n),!0)],m)
if(h.dx)f.push(new A.a9(A.a([new A.N("Yes",null)],n),!0))
else f.push(new A.a9(A.a([new A.N(A.Q(g,!1,5),null)],n),!0))
if(h.w!=null){e=k.p(0,h)
f.push(new A.a9(A.a([new A.N(A.Q(e==null?0:e,!1,5),null)],n),!0))}else f.push(new A.a9(A.a([new A.N("--",null)],n),!1))
r=8
return a.b=new A.aq(h.b,h,f,l),1
case 8:r=6
break
case 7:r=9
return a.b=new A.aq(null,h,A.a([new A.a9(A.a([new A.N("(undiscovered "+(i+1)+")",null)],n),!1)],m),l),1
case 9:case 6:case 3:++i
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
$S:105}
A.ke.prototype={
gM(){return"Monster Lore"},
gck(){return this.e.gck()},
a9(a,b,c){if(this.e.a9(a,b,c)){this.K()
return!0}return this.fv(a,b,c)},
a7(a){if(this.e.a7(a)){this.K()
return!0}return this.fu(a)},
hm(a){var s=this.e,r=a.c
s.hk(a.b8(0,1,r.a,r.b-16))
r=s.c
s=s.y
if(!(s>=0&&s<r.length))return A.c(r,s)
this.nt(a,t.P.a(r[s].b))},
nt(a,b){var s,r,q,p,o,n,m=null
a=a.b8(0,a.c.b-15,80,14)
s=a.c
r=s.a
q=this.c.ax.i_(b)===0
p=q?A.am("?",B.i,m):b.b
o=q?m:b.a.a
A.nI(a,0,0,r,s.b,p,o)
if(q){a.k(1,3,"You have not seen this breed yet.",B.i)
return}s=b.fr
n=s!==""?3+A.fJ(a,s,m,r-2,1,3)+1:3
A.fJ(a,this.lO(b),m,r-2,1,n)},
lO(a){var s,r,q=null,p=A.a([],t.s),o=a.a.d.c,n=this.c.ax,m=a.dy
if(m.length!==0){s=A.M(m)
r=new A.aN(m,s.h("q(1)").a(new A.pw()),s.h("aN<1,q>")).aP(0," ")}else r="monster"
if(a.ax.f)if(n.ed(a)>0)B.a.j(p,"You have slain this unique "+r+".")
else B.a.j(p,"You have seen but not slain this unique "+r+".")
else B.a.j(p,"You have seen "+A.Q(n.i_(a),!1,q)+" and slain "+A.Q(n.ed(a),!1,q)+" of this "+r+".")
B.a.j(p,o+" is worth "+A.Q(a.gbm(),!1,q)+" experience.")
if(n.ed(a)>0)B.a.j(p,o+" has "+A.Q(a.f,!1,q)+" health.")
return new A.aN(p,t.gL.a(new A.px()),t.gQ).aP(0," ")},
n_(){var s=$.ca().gc_(),r=A.a6(s,A.z(s).h("k.E"))
this.e.kz(new A.pu(this,r))}}
A.pv.prototype={
$1(a){return a>=65&&a<=90},
$S:106}
A.py.prototype={
$1(a){t.P.a(a)
return!0},
$S:37}
A.pz.prototype={
$1(a){return t.P.a(a).ax.f},
$S:37}
A.pw.prototype={
$1(a){return A.a3(a)},
$S:5}
A.px.prototype={
$1(a){A.a3(a)
return B.j.aJ(a,0,1).toUpperCase()+B.j.cQ(a,1)},
$S:5}
A.pu.prototype={
$0(){return new A.R(this.kY(),t.kF)},
kY(){var s=this
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
return a.b=new A.aq(h.b,h,f,l),1
case 8:r=6
break
case 7:r=9
return a.b=new A.aq(null,h,A.a([new A.a9(A.a([new A.N("(undiscovered "+(i+1)+")",null)],n),!1)],m),l),1
case 9:case 6:case 3:++i
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
$S:108}
A.l.prototype={
t(a){return"Input("+this.a+")"}}
A.jf.prototype={
gc0(){return B.bc},
gcC(){return!0},
gcz(){return"Drop"},
cE(a){var s
A:{if(B.I===a){s="Drop which item?"
break A}if(B.a2===a){s="Unequip and drop which item?"
break A}s=A.a_(A.bE("Unreachable."))}return s},
e_(a){return"Drop how many?"},
aZ(a){return!0},
bV(a,b,c){this.b.b.y.at=new A.aR(new A.je(b,c,a))
this.a.aa()}}
A.jj.prototype={
gcC(){return!1},
gcz(){return"Equip"},
cE(a){var s
A:{if(B.I===a){s="Equip which item?"
break A}if(B.a2===a){s="Unequip which item?"
break A}if(B.W===a){s="Pick up and equip which item?"
break A}s=A.a_(A.bE("Unreachable."))}return s},
aZ(a){return a.a.e!=null},
bV(a,b,c){this.b.b.y.at=new A.aR(A.vj(c,a))
this.a.aa()}}
A.eD.prototype={
gbn(){return!0},
gc0(){var s=A.a([B.a2,B.I],t.hm),r=this.b.b,q=r.x
q===$&&A.b()
if(!q.c5(r.y.y).gaD(0))s.push(B.W)
return s},
gi3(){return!1},
gdV(){var s=this.b.b,r=s.y,q=this.c
A:{if(B.I===q){s=r.Q.e
break A}if(B.a2===q){s=r.Q.f
break A}if(B.W===q){s=s.x
s===$&&A.b()
s=s.c5(r.y)
break A}s=A.a_(A.cM("Unexpected location."))}return s},
e_(a){return A.a_(A.ba(null))},
fj(a){return t.W.a(a).gbf()},
hS(a,b,c){var s=this
if(!c.jC(a)){s.b.b.y.Q.at.X(B.X,"Not enough room for "+a.b_(b).t(0)+".",null,null,null)
s.K()
return}if(b===a.f){c.c8(a)
s.gdV().ac(0,a)}else{c.c8(a.dh(b))
s.gdV().bl()}s.eI(a,b)
s.a.aa()},
eI(a,b){},
a7(a){var s=this,r=s.d
if(r!=null){if(B.a7===a){s.bV(r,s.e,s.c)
return!0}if(B.H===a){s.d=null
s.K()
return!0}if(B.a0===a&&s.e<r.f){++s.e
s.K()
return!0}if(B.a1===a&&s.e>1){--s.e
s.K()
return!0}}else if(a===B.H){s.a.aa()
return!0}return!1},
a9(a,b,c){var s,r,q,p,o=this
if(a===16){o.f=!0
o.K()
return!0}if(b)return!1
s=o.f
if(s&&a===27){o.r=null
o.K()
return!0}if(o.d!=null)return!1
if(a>=65&&a<=90){o.nq(a-65)
return!0}if(a===9&&!s&&o.gc0().length>1){s=c?-1:1
r=B.a.c4(o.gc0(),o.c)
q=o.gc0().length
p=o.gc0()
s=B.c.ad(r+q+s,q)
if(!(s<p.length))return A.c(p,s)
o.c=p[s]
o.K()
return!0}return!1},
f3(a,b,c){if(a===16){this.f=!1
this.K()
return!0}return!1},
ag(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="Unexpected location.",d="Inspect item",c=f.c
A:{if(B.I===c){s=24
break A}if(B.a2===c){s=9
break A}if(B.W===c){s=f.gdV()
s=Math.min(s.gI(s),26)
break A}s=A.a_(A.cM(e))}r=f.b
q=r.f
p=q.a
if(p!=null){o=f.c
B:{n=0
if(B.I===o){q=11
break B}if(B.a2===o){q=n
break B}m=B.W===o
if(m&&p.b.b>50&&s>5){q=Math.max(0,q.gdX()-s+5)
break B}if(m&&p.b.b>50){q=q.gdX()
break B}if(m){q=n
break B}q=A.a_(A.cM(e))}l=Math.max(46,p.b.a+2)
k=a.e.a.b.b.a-l
n=q}else{q=r.w
q===$&&A.b()
q=q.a
k=q.ge3()-46
n=q.a.b
l=46}q=f.gdV()
p=f.d==null&&f.f
j=f.gi3()
i=f.r
A.us(a,q,f.gmA(),!0,p,f.ghX(),i,!1,s,k,r.b.y.Q,!0,j,n,l)
if(f.d==null)h=f.f?"Inspect which item?":f.cE(f.c)
else h=f.e_(f.c)+" "+f.e
if(f.d==null){s=t.N
if(f.f){s=A.C(s,s)
s.i(0,"A-Z",d)
if(f.r!=null)s.i(0,"`","Hide inspector")
g=s}else{s=A.C(s,s)
s.i(0,"A-Z","Select item")
s.i(0,"Shift",d)
if(f.gc0().length>1)s.i(0,"Tab","Switch view")
g=s}}else{s=t.N
g=A.A(["OK",f.gcz(),"\u2195","Change quantity","`","Cancel"],s,s)}A.br(a,g,h)},
mB(a){var s,r=this
if(r.f&&r.d==null)return!0
s=r.d
if(s!=null)return a===s
return r.aZ(a)},
nq(a){var s,r=this,q=J.v2(r.gdV().gef()),p=q.length
if(a>=p)return
if(!(a>=0))return A.c(q,a)
s=q[a]
if(s==null)return
if(r.f){r.r=s
r.K()}else{if(!r.aZ(s))return
if(s.f>1&&r.gcC()){r.d=s
r.r=null
r.e=s.f
r.K()}else r.bV(s,1,r.c)}}}
A.jV.prototype={
lk(a,b,c){var s=this,r=s.a,q=r.a
if(q.x!=null)s.b=new A.hS(a,r)
if(q.Q+r.gc1()!==0||q.z!=null)s.c=new A.hU(r)
if(q.e!=null)s.d=new A.i9(r)
r=q.w
if(r!=null){q=c?78:34
s.e=new A.fg(A.dJ(q,r.a),"Use")}},
hl(a,b,c){var s,r,q,p,o,n=this,m=A.a([],t.n9),l=n.b
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
s=4+n.no(m)
c=c.b8(a,B.c.P(b-1,0,c.gan()-4-s),34,s)
l=c.c
r=n.a
A.nI(c,0,0,l.a,l.b,r.a.b,r.gao().a)
for(l=m.length,q=3,p=0;p<m.length;m.length===l||(0,A.o)(m),++p){o=m[p]
c.k(1,q,o.gdR()+" ",B.f)
o.dq(c,q+1)
q=q+o.gan()+2}},
jM(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.c,h=i.a
i=i.b
s=j.a
A.nI(a,0,0,h,i,s.a.b,s.gao().a)
r=j.b
q=r!=null?r.dL(a,3):3
p=j.c
if(p!=null)q=p.dL(a,q)
o=a.b8(40,0,h-40,i)
n=j.d
m=n!=null?n.dL(o,3):3
l=Math.max(q,m)
k=j.e
if(k!=null)l=k.dL(a,l)
i=j.f
i===$&&A.b()
i.dL(a,l)},
no(a){var s,r,q,p
t.la.a(a)
for(s=a.length,r=0,q=0;p=a.length,q<p;a.length===s||(0,A.o)(a),++q)r+=a[q].gan()+1
return r+p-1}}
A.oO.prototype={
$2(a,b){t.M.a(a)
A.w(b)
if(b<0)B.a.j(this.a,"It lowers "+a.gM()+" by "+-b+".")
else if(b>0)B.a.j(this.a,"It raises "+a.gM()+" by "+b+".")},
$S:20}
A.cV.prototype={
dL(a,b){a.k(1,b,this.gdR()+" ",B.f)
this.dq(a,b+1)
return b+this.gan()+2},
eH(a,b,c,d){var s,r,q=B.c.t(Math.abs(d))
if(d>0){s=q.length
a.k(b+2-s,c,"+",B.A)
a.k(b+3-s,c,q,B.p)}else{s=q.length
r=b+2-s
s=b+3-s
if(d<0){a.k(r,c,"-",B.Y)
a.k(s,c,q,B.m)}else{a.k(r,c,"+",B.i)
a.k(s,c,q,B.i)}}},
h8(a,b,c,d){a.k(1,b,c+":",B.i)
a.k(12,b,B.c.t(d),B.d)},
jr(a,b,c,d){var s,r
if(d>1){s=B.A
r=B.p}else if(d<1){s=B.Y
r=B.m}else{s=B.i
r=B.i}a.k(b,c,"x",s)
a.k(b+1,c,A.tV(d,1,null),r)}}
A.hS.prototype={
gdR(){return"Attack"},
gan(){var s=this.b,r=s.gcb()!==0?3:2
return s.a.x.d>0?r+1:r},
dq(a,b){var s,r,q,p,o=this
a.k(1,b,"Damage:",B.i)
s=o.b
if(s.gb1()!==$.ax())a.k(9,b,s.gb1().b,A.e3(s.gb1()))
r=s.a.x
q=r.c
a.k(12,b,B.c.t(q),B.d)
o.jr(a,16,b,s.gcZ())
o.eH(a,20,b,s.gcY())
a.k(25,b,"=",B.l)
a.k(27,b,A.tV(q*s.gcZ()+s.gcY(),2,6),B.M);++b
if(s.gcb()!==0){a.k(1,b,"Strike:",B.i)
o.eH(a,12,b,s.gcb());++b}r=r.d
if(r>0){o.h8(a,b,"Range",r);++b}a.k(1,b,"Heft:",B.i)
r=o.a.ay
q=r.a
q.toString
p=q>=s.gf_()?B.d:B.m
a.k(12,b,B.c.t(s.gf_()),p)
o.jr(a,16,b,r.jX(s.gf_()))}}
A.hU.prototype={
gdR(){return"Defense"},
gan(){var s=this.a,r=s.a,q=r.z!=null?2:1
return r.Q+s.gc1()!==0?q+1:q},
dq(a,b){var s=this,r=s.a,q=r.a,p=q.z
if(p!=null){s.h8(a,b,"Dodge",p.a);++b}q=q.Q
if(q+r.gc1()!==0){a.k(1,b,"Armor:",B.i)
a.k(12,b,B.c.t(q),B.d)
s.eH(a,16,b,r.gc1())
a.k(25,b,"=",B.l)
a.k(27,b,A.Q(q+r.gc1(),!1,6),B.p);++b}s.h8(a,b,"Weight",r.ge6())}}
A.i9.prototype={
gdR(){return"Resistances"},
gan(){return 2},
dq(a,b){var s,r,q,p,o,n,m,l
for(s=$.fs(),r=this.a,q=b+1,p=1,o=0;o<12;++o){n=s[o]
if(n===$.ax())continue
m=r.c6(n)
this.eH(a,p-1,b,m)
l=m===0?B.i:A.e3(n)
a.k(p,q,n.b,l)
p+=3}}}
A.fg.prototype={
gan(){return this.a.length},
dq(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){a.k(1,b,s[q],B.d);++b}},
gdR(){return this.b}}
A.ky.prototype={
gc0(){return B.hV},
gcC(){return!0},
gcz(){return"Pick up"},
cE(a){return"Pick up which item?"},
e_(a){return"Pick up how many?"},
aZ(a){return!0},
bV(a,b,c){this.b.b.y.at=new A.aR(A.vI(a))
this.a.aa()}}
A.mg.prototype={
gc0(){return B.bc},
gcC(){return!0},
gcz(){return"Put"},
cE(a){return"Put which item?"},
e_(a){return"Put how many?"},
aZ(a){return!0}}
A.kE.prototype={
bV(a,b,c){this.hS(a,b,this.b.b.y.Q.w)},
eI(a,b){this.b.b.y.Q.at.X(B.w,"You place "+a.b_(b).t(0)+" into the crucible.",null,null,null)
this.ay.$0()}}
A.kF.prototype={
bV(a,b,c){this.hS(a,b,this.b.b.y.Q.r)},
eI(a,b){this.b.b.y.Q.at.X(B.w,"You put "+a.b_(b).t(0)+" safely into your home.",null,null,null)}}
A.hy.prototype={
gc0(){return B.bc},
gcC(){return!0},
gi3(){return!0},
gcz(){return"Sell"},
cE(a){return"Sell which item?"},
e_(a){return"Sell how many?"},
aZ(a){return a.gbf()!==0},
fj(a){return B.e.bM(t.W.a(a).gbf()*0.75)},
bV(a,b,c){this.hS(a,b,this.x)},
eI(a,b){var s=a.b_(b).gao(),r=B.e.bM(a.gbf()*0.75)*b,q=this.b.b.y.Q
q.at.X(B.w,"You sell "+s.a+" for "+r+" gold.",null,null,null)
q.Q+=r}}
A.lb.prototype={
gcC(){return!1},
gcz(){return"Toss"},
cE(a){var s
A:{if(B.I===a){s="Throw which item?"
break A}if(B.a2===a){s="Unequip and throw which item?"
break A}if(B.W===a){s="Pick up and throw which item?"
break A}s=A.a_(A.bE("Unreachable."))}return s},
aZ(a){return a.a.y!=null},
bV(a,b,c){var s,r=A.bF(a.a.y.b),q=this.b
q.b.y.kh(r,B.hs)
s=this.a
s.toString
s.bU(A.vZ(q,r.gaz(),new A.r9(this,c,a,r)))}}
A.r9.prototype={
$1(a){var s=this
s.a.b.b.y.at=new A.aR(new A.la(s.d,a,s.b,s.c))},
$S:11}
A.dU.prototype={
gfH(){return null},
gbn(){return!0},
gdm(){return!1},
gh4(){return!1},
lC(a){if(this.c)return!0
return this.aZ(a)},
aZ(a){return!0},
a7(a){this.f=null
if(a===B.H){this.a.aa()
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
q=o.gbc().aU(0,r)
if(q==null)return!1
if(o.c){o.e=q
o.K()}else{if(!o.gdm()||!o.aZ(q))return!1
if(q.f>1){o.d=!1
s=o.a
s.toString
t.ak.a(o)
p=new A.fb(o,q,o.iL(q),o.b)
p.e=q
s.a4(p)
return!0}if(o.jh(q,1)){o.a.aa()
return!0}}}return!1},
f3(a,b,c){if(a===16){this.c=!1
this.K()
return!0}return!1},
dA(a,b){var s=this
t.eE.a(a)
s.d=!0
s.e=null
if(a instanceof A.fb&&b!=null)if(s.jh(a.x,A.w(b)))s.a.aa()},
ag(a){var s,r,q,p,o,n,m,l,k,j=this
if(j.d)if(j.c){s=t.N
s=A.C(s,s)
s.i(0,"A-Z","Inspect item")
if(j.e!=null)s.i(0,"`","Hide inspector")
A.br(a,s,"Inspect which item?")}else A.br(a,j.gcS(),j.gcR())
s=j.gbc()
r=j.b
q=r.w
q===$&&A.b()
q=q.a
p=q.a
q=Math.min(46,q.b.a)
o=j.gbc().b.length
n=j.c
m=j.gh4()
l=j.d?j.e:null
k=j.c||j.gdm()
A.us(a,s,j.glB(),k,n,j.geu(),l,!0,o,p.a,r.b.y.Q,!0,m,p.b,q)
s=j.f
if(s!=null)a.k(0,32,s,B.m)},
iL(a){return a.f},
fS(a){return a.f},
bY(a){t.W.a(a)
return null},
jh(a,b){var s=this,r=s.gfH()
if(!r.jC(a)){s.f="Not enough room for "+a.b_(b).t(0)+"."
s.K()
return!1}if(b===a.f){r.c8(a)
B.a.ac(s.gbc().b,a)}else{r.c8(a.dh(b))
s.gbc().bl()}s.cr(a,b)
return!0},
cr(a,b){}}
A.cS.prototype={}
A.i_.prototype={
gbc(){return this.b.b.y.Q.r},
gcR(){return"Welcome home!"},
gcS(){var s=t.N
return A.A(["G","Get item","P","Put item","Shift","Inspect item","Tab","Use crucible","`","Leave"],s,s)},
a9(a,b,c){var s,r,q,p=this
if(p.ej(a,b,c))return!0
if(c||b)return!1
switch(a){case 71:s=new A.lX(p.b)
s.e=p.e
p.d=!1
p.a.a4(s)
return!0
case 80:p.d=!1
p.a.a4(new A.kF(p.b,B.I))
return!0
case 9:r=p.a
r.toString
q=new A.hT(p.b)
q.ey()
r.bU(q)
return!0}return!1}}
A.hZ.prototype={
gcR(){return"Get which item?"},
geG(){return"Get"},
gcS(){var s=t.N
return A.A(["A-Z","Select item","Shift","Inspect item","`","Cancel"],s,s)},
gfH(){return this.b.b.y.Q.e},
gdm(){return!0},
aZ(a){return!0},
cr(a,b){var s=this.b.b.y
s.Q.ax.d3(a)
s.br()}}
A.lX.prototype={
gbc(){return this.b.b.y.Q.r},
cr(a,b){this.b.b.y.Q.at.X(B.w,"You take "+a.b_(b).t(0)+" from your home.",null,null,null)
this.ib(a,b)}}
A.lW.prototype={
gbc(){return this.b.b.y.Q.w},
cr(a,b){this.b.b.y.Q.at.X(B.w,"You remove "+a.b_(b).t(0)+" from the crucible.",null,null,null)
this.ib(a,b)
this.cy.$0()}}
A.hT.prototype={
gbc(){return this.b.b.y.Q.w},
gcR(){return this.w!=null?"Ready to forge item!":"Place items to complete a recipe."},
gcS(){var s=t.N
s=A.C(s,s)
s.i(0,"G","Get item")
s.i(0,"P","Put item")
s.i(0,"Shift","Inspect item")
if(this.w!=null)s.i(0,"Space","Forge item")
s.i(0,"Tab","Back to home")
s.i(0,"`","Leave")
return s},
ag(a){var s,r,q,p,o
this.lf(a)
s=this.b
r=s.w
r===$&&A.b()
r=r.a
q=Math.min(46,r.b.a)
r=r.a
s=s.b.y.Q.w
p=q-8
a=new A.aS(new A.d(p,3),r.a+4,r.b+s.b.length+1,a)
A.cz(a,0,0,p,3,null,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
a.k(0,0,"\u252c",B.l)
a.k(p-1,0,"\u252c",B.l)
o=this.w
if(o!=null)a.k(1,1,"Forge a "+o.c,B.D)
else if(!s.gN(0).q())a.k(1,1,"Add ingredients to crucible",B.i)
else a.k(1,1,"Not a complete recipe",B.i)},
a9(a,b,c){var s,r,q,p=this
if(p.ej(a,b,c))return!0
if(c||b)return!1
if(71===a){s=new A.lW(p.gj3(),p.b)
s.e=p.e
p.d=!1
p.a.a4(s)
return!0}if(80===a){p.d=!1
p.a.a4(new A.kE(p.gj3(),p.b,B.I))
return!0}if(32===a&&p.w!=null){r=p.b.b.y.Q
q=r.w
B.a.aS(q.b)
q.d=null
p.w.b.b0(r.ax,1,q.gkM())
p.ey()
p.K()
return!0}if(9===a){p.a.bU(new A.i_(p.b))
return!0}return!1},
cr(a,b){this.ey()},
ey(){var s,r,q,p,o,n
this.w=null
for(s=$.hq.length,r=this.b.b.y.Q.w,q=t.C,p=0;p<$.hq.length;$.hq.length===s||(0,A.o)($.hq),++p){o=$.hq[p]
n=o.mZ(q.a(r))
if(n!=null&&n.a===0){this.w=o
return}}}}
A.id.prototype={
gbc(){return this.w},
gcR(){return"What can I interest you in?"},
gh4(){return!0},
gcS(){var s=t.N
return A.A(["B","Buy item","S","Sell item","Shift","Inspect item","`","Cancel"],s,s)},
a9(a,b,c){var s,r=this
if(r.ej(a,b,c))return!0
if(c||b)return!1
switch(a){case 66:s=new A.ic(r.w,r.b)
s.e=r.e
r.d=!1
r.a.a4(s)
break
case 83:r.d=!1
r.a.a4(new A.hy(r.w,r.b,B.I))
return!0}return!1},
bY(a){return t.W.a(a).gbf()}}
A.ic.prototype={
gcR(){return"Buy which item?"},
geG(){return"Buy"},
gcS(){var s=t.N
return A.A(["A-Z","Select item","Shift","Inspect item","`","Cancel"],s,s)},
gbc(){return this.at},
gfH(){return this.b.b.y.Q.e},
gdm(){return!0},
gh4(){return!0},
aZ(a){return a.gbf()<=this.b.b.y.Q.Q},
iL(a){return 1},
fS(a){return Math.min(a.f,B.c.cc(this.b.b.y.Q.Q,a.gbf()))},
bY(a){return t.W.a(a).gbf()},
cr(a,b){var s=a.gbf()*b,r=this.b.b.y,q=r.Q
q.at.X(B.w,"You buy "+a.b_(b).t(0)+" for "+s+" gold.",null,null,null)
q.Q-=s
q.ax.d3(a)
r.br()}}
A.fb.prototype={
gbc(){return this.w.gbc()},
gcR(){var s,r=this,q=r.x,p=q.b_(r.y).gao().a,o=r.w,n=o.bY(q)
if(n!=null){s=A.Q(n*r.y,!1,null)
return o.geG()+" "+p+" for "+s+" gold?"}else return o.geG()+" "+p+"?"},
gcS(){var s=t.N
return A.A(["OK",this.w.geG(),"\u2195","Change quantity","`","Cancel"],s,s)},
gdm(){return!0},
aZ(a){return a===this.x},
a9(a,b,c){if(a===16)return!1
return this.ej(a,b,c)},
f3(a,b,c){return!1},
a7(a){var s=this
A:{if(B.a7===a){s.a.b6(s.y)
break A}if(B.H===a){s.a.aa()
break A}if(B.a0===a&&s.y<s.w.fS(s.x)){++s.y
break A}if(B.a1===a&&s.y>1){--s.y
break A}if(B.ao===a){s.y=s.w.fS(s.x)
break A}if(B.ap===a){s.y=1
break A}return!1}s.K()
return!0},
bY(a){return this.w.bY(t.W.a(a))}}
A.li.prototype={
gcC(){return!1},
gcz(){return"Use"},
cE(a){var s
A:{if(B.I===a||B.a2===a){s="Use which item?"
break A}if(B.W===a){s="Pick up and use which item?"
break A}s=A.a_(A.bE("Unreachable."))}return s},
aZ(a){return a.a.w!=null},
bV(a,b,c){this.b.b.y.at=new A.aR(new A.lh(c,a))
this.a.aa()}}
A.jE.prototype={
a7(a){switch(a){case B.H:this.a.aa()
return!0}return!1},
ag(a){var s=this.b.d?"Create a new hero":"Try again",r=t.N
A.vg(a,60,40,new A.om(this),A.A(["`",s],r,r),"You have died")}}
A.om.prototype={
$1(a){var s,r,q,p,o=a.c,n=o.b-1
for(s=this.a.b.at.a,r=s.length-1,o=o.a;r>=0;--r){if(!(r<s.length))return A.c(s,r)
q=A.dJ(o,s[r].b)
for(p=q.length-1;p>=0;--p){if(!(p<q.length))return A.c(q,p)
a.pu(0,n,q[p]);--n
if(n<0)break}if(n<0)break}},
$S:40}
A.k8.prototype={
a7(a){var s,r,q,p,o,n=this
if(B.a0===a&&n.d>0){--n.d
n.h_()
n.K()
return!0}if(B.a1===a&&n.d<n.c.b.length-1){++n.d
n.h_()
n.K()
return!0}if(B.a7===a){s=n.d
r=n.c
q=r.b
p=q.length
if(s<p){if(!(s>=0))return A.c(q,s)
o=q[s]
n.x=!1
s=n.a
s.toString
s.a4(A.on(r,n.b,o,!1))}return!0}if(B.b7===a){s=n.a
s.toString
r=B.aQ.gb2()
r=A.a6(r,A.z(r).h("k.E"))
s.a4(new A.fV(r))
return!0}return!1},
h_(){var s=this,r=s.y=B.c.P(s.y,0,Math.max(s.c.b.length-8,0)),q=s.d
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
p.a.a4(new A.fG("Are you sure you want to delete "+s.a+"?","delete"))}return!0
case 78:p.x=!1
s=p.a
s.toString
s.a4(A.yO(p.b,p.c))
return!0}return!1},
dA(a,b){var s,r,q=this
q.x=!0
if(a instanceof A.fG&&J.ay(b,"delete")){s=q.c.b
r=q.d
if(!(r>=0&&r<s.length))return A.c(s,r)
B.a.ac(s,s[r])
r=q.d
if(r>0&&r>=s.length)q.d=r-1
q.h_()
q.K()}},
e2(a){this.f=this.e=null},
bu(){var s,r,q=this
if(!q.x)return
s=q.w
if(s>0){--s
q.w=s
if(s===0){q.e=null
q.K()}return}r=q.f
if(r!=null){if(!r.q()){q.f=null
q.w=300
return}s=r.b
if(J.ay(s==null?r.$ti.c.a(s):s,"Ready to decorate"))q.r=!0
if(q.r){s=q.e.x
s===$&&A.b()
s.hQ()
s=q.e.x
s===$&&A.b()
s.gav().cG()}q.K()}},
ag(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.e
if(d!=null)f.j5(a,d)
else{s=f.b
r=s.or("Temporary")
q=a.e.a.b.b
p=f.e=A.tP(s,$.m().aw(1,100),r,q.b,q.a)
q=p.e7()
f.f=new A.ag(q.a(),q.$ti.h("ag<1>"))
f.r=!1
f.j5(a,p)}s=a.e.a.b.b
o=new A.aS(new A.d(68,34),B.c.A(s.a-68,2),B.c.A(s.b-34,2),a)
o.cl(0,0,o.gaQ(),o.gan())
A.cz(o,0,0,68,34,e,"\u2554","\u2550","\u2557","\u2551","\u255a","\u2550","\u255d")
for(n=0;n<14;++n)for(s=n+2,m=0;m<B.c9[n].length;++m){q=B.hJ[n]
if(!(m<q.length))return A.c(q,m)
l=B.i1.p(0,q[m])
q=B.c9[n]
if(!(m<q.length))return A.c(q,m)
o.k(m+3,s,q[m],l)}o.k(3,18,"Which hero shall you play?",B.d)
A.jd(o,3,20,62,e)
A.jd(o,3,29,62,e)
s=f.c.b
if(s.length===0)o.k(3,21,"(No heroes. Please create a new one.)",B.i)
else{if(f.y>0)o.k(34,20,"\u25b2",B.h)
if(f.y<s.length-8)o.k(34,29,"\u25bc",B.h)
for(k=0;k<8;++k){j=k+f.y
q=s.length
if(j>=q)break
if(!(j>=0))return A.c(s,j)
i=s[j]
if(j===f.d)o.am(2,21+k,new A.W(9658,B.h,B.y))
h=j===f.d?B.h:B.D
q=21+k
o.k(3,q,i.a,h)
g=j===f.d?B.h:B.d
o.k(34,q,i.b.a,g)
o.k(42,q,i.c.a,g)
if(i.d)o.k(55,q,"Permadeath",g)}}if(f.x){s=t.N
A.br(a,A.A(["OK","Play","\u2195","Change selection","N","Create a new hero","D","Delete hero","H","Help"],s,s),e)}},
j5(a,b){var s,r,q,p=b.x
p===$&&A.b()
for(p=p.f.b.b,s=p.b,p=p.a,r=0;r<s;++r)for(q=0;q<p;++q)this.ng(a,b,new A.d(q,r))},
ng(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
d===$&&A.b()
s=c.a
r=c.b
q=d.f.B(s,r)
p=q.a.d
A:{if(p instanceof A.W){o=p
break A}if(t.af.b(p)){o=p[B.c.ad(A.wM(s,r),p.length)]
break A}o=B.b1
break A}n=o.a
m=o.b
l=o.c
k=d.c5(c)
j=k.gaD(0)
if(!j){i=k.gaB(0).a.b
n=i.a
m=i.b}d=d.w.B(s,r)
h=d==null?null:d.geJ()
if(h instanceof A.W){n=h.a
m=h.b
j=!1}d=new A.pp()
g=d.$2(m,B.bp)
f=d.$2(l,B.cO)
q=new A.po(q)
if(j)m=q.$2(m,g)
e=q.$2(l,f)
a.e.i0(s,r,A.cB(n,m,e))}}
A.pp.prototype={
$2(a,b){return new A.E(B.c.A(a.a*b.a,255),B.c.A(a.b*b.b,255),B.c.A(a.c*b.c,255))},
$S:16}
A.po.prototype={
$2(a,b){var s=this.a,r=s.d
if(r<128)a=a.bi(b,A.v(r,0,127,1,0))
else if(r>128)a=a.aX(0,B.t,A.v(r,128,255,0,0.2))
s=s.e
return s>0?a.aX(0,B.bn,A.v(s,0,255,0.05,0.1)):a},
$S:16}
A.kr.prototype={
ag(a){var s,r,q=this,p=t.N
p=A.C(p,p)
p.i(0,"Tab","Next field")
s=q.x
r=q.d
if(!(r>=0&&r<s.length))return A.c(s,r)
p.U(0,s[r].gcw())
if(q.e.f)p.i(0,"Enter","Create hero")
p.i(0,"`","Cancel")
A.vg(a,80,40,new A.pI(q),p,"Create New Hero")},
nf(a){var s,r,q,p,o=$.ft(),n=this.f.e
if(!(n>=0&&n<5))return A.c(o,n)
s=o[n]
this.j7(a,s.d)
n=A.a([],t.dF)
for(o=s.c,r=0;r<4;++r){q=B.aP[r]
p=o.p(0,q)
p.toString
n.push(new A.O(q.c,B.e.L(p*100)))}this.j6(a,200,n)},
nd(a){var s,r,q=$.ea(),p=this.r.e
if(!(p>=0&&p<3))return A.c(q,p)
s=q[p]
this.j7(a,s.d)
p=A.a([],t.dF)
for(q=s.c,q=new A.bj(q,A.z(q).h("bj<1,2>")).gN(0);q.q();){r=q.d
p.push(new A.O(r.a.a,r.b))}this.j6(a,10,p)},
j7(a,b){var s,r,q,p,o,n,m,l,k
t.m1.a(b)
for(s=b.length,r=3,q=0;q<b.length;b.length===s||(0,A.o)(b),++q){p=b[q]
for(o=A.dJ(53,p.gM()+": "+p.gW()),n=o.length,m=r,l=0;l<o.length;o.length===n||(0,A.o)(o),++l,m=k){k=m+1
a.k(25,m,o[l],B.d)}a.k(25,r,p.gM()+":",B.i)
r=m+1}},
j6(a,b,c){var s,r,q,p
t.ig.a(c)
for(s=c.length,r=3,q=0;q<c.length;c.length===s||(0,A.o)(c),++q){p=c[q]
a.k(0,r,p.a,B.i)
A.vi(a,13,r,10,p.b,b,null,null);++r}},
ne(a){var s,r,q,p,o,n=this,m=null,l=n.d
A:{if(0===l){s=B.io
break A}if(1===l){s=$.ft()
r=n.f.e
if(!(r>=0&&r<5))return A.c(s,r)
r=s[r]
r=new A.O(r.a,r.b)
s=r
break A}if(2===l){s=$.ea()
r=n.r.e
if(!(r>=0&&r<3))return A.c(s,r)
r=s[r]
r=new A.O(r.a,r.b)
s=r
break A}if(3===l){s=n.w.e
if(!(s>=0&&s<2))return A.c(B.bd,s)
s=new A.O(B.bd[s],B.hY[s])
break A}s=A.a_(A.cM("Unexpected focus."))}A.bi(a,m,m,s.a,!0,m,m,m)
for(s=A.dJ(a.c.a-2,s.b),r=s.length,q=2,p=0;p<s.length;s.length===r||(0,A.o)(s),++p,q=o){o=q+1
a.k(1,q,s[p],B.d)}},
a7(a){var s=this,r=s.x,q=s.d
if(!(q>=0&&q<r.length))return A.c(r,q)
if(r[q].a7(a)){s.K()
return!0}switch(a){case B.H:s.a.aa()
return!0}return!1},
a9(a,b,c){var s,r,q,p,o,n=this,m=n.x,l=n.d
if(!(l>=0&&l<m.length))return A.c(m,l)
if(m[l].a9(a,b,c)){n.K()
return!0}if(b)return!1
if(13===a&&n.e.f){m=n.b
l=n.e
s=l.d
l=s.length!==0?s:l.e
s=$.ft()
r=n.f.e
if(!(r>=0&&r<5))return A.c(s,r)
r=s[r]
s=$.ea()
q=n.r.e
if(!(q>=0&&q<3))return A.c(s,q)
p=m.jH(l,s[q],n.w.e===1,r)
r=n.c
B.a.j(r.b,p)
r.bw()
q=n.a
q.toString
q.bU(A.on(r,m,p,!0))
return!0}if(9===a){o=c?m.length-1:1
n.d=B.c.ad(n.d+o,m.length)
n.K()
return!0}return!1}}
A.pG.prototype={
$1(a){return t.ho.a(a).a},
$S:113}
A.pH.prototype={
$1(a){return t.lJ.a(a).a},
$S:114}
A.pI.prototype={
$1(a){var s,r,q,p,o
for(s=a.c.a,r=0;r<3;++r){q=B.hB[r]
p=B.j.aI("\u2500",s)
a.k(0,q,p,B.u)}p=this.a
p.nf(a.b8(0,2,s,10))
p.nd(a.b8(0,12,s,10))
p.ne(a.b8(0,25,s,14))
for(s=p.x,o=0;o<s.length;++o)s[o].kG(a,o===p.d)},
$S:40}
A.em.prototype={
a7(a){return!1},
a9(a,b,c){return!1}}
A.kh.prototype={
gcw(){return B.i3},
a9(a,b,c){var s,r,q=this
if(b)return!1
switch(a){case 8:s=q.d
r=s.length
if(r!==0){s=B.j.aJ(s,0,r-1)
q.d=s
if(s.length===0){s=$.m()
t.m.a(B.ah)
r=B.ah.length
s=s.T(r)
if(!(s>=0&&s<r))return A.c(B.ah,s)
q.e=B.ah[s]}}q.h0()
return!0
case 32:q.fz(" ")
return!0
default:if(a>=65&&a<=90){q.fz(A.b2(!c?32+a:a))
return!0}else if(a>=48&&a<=57){q.fz(A.b2(a))
return!0}}return!1},
fz(a){var s=this.d
if(s.length<20)this.d=s+a
this.h0()},
h0(){this.f=B.a.oC(this.c.b,new A.pF(this))},
kG(a,b){var s=this,r=s.f?B.h:B.m,q=s.a,p=s.b,o=p+1
a.k(q,o,"Name:",B.f)
if(b)A.cz(a,q+24,p,23,3,r,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
p=s.d
if(p.length!==0){q+=25
a.k(q,o,p,B.D)
if(b)a.dc(q+s.d.length,o," ",B.y,r)}else{q+=25
p=s.e
if(b)a.dc(q,o,p,B.y,r)
else a.k(q,o,p,B.D)}if(!s.f)a.k(48,3,"Already a hero with that name",B.m)}}
A.pF.prototype={
$1(a){var s,r
t.er.a(a)
s=this.a
r=s.d
s=r.length!==0?r:s.e
return a.a!==s},
$S:21}
A.f2.prototype={
gcw(){var s=t.N
return A.A(["\u25c4\u25ba","Select "+this.c.toLowerCase()],s,s)},
a7(a){var s,r,q=this
switch(a){case B.ag:s=q.e
r=q.d.length
q.e=B.c.ad(s+r-1,r)
return!0
case B.af:q.e=B.c.ad(q.e+1,q.d.length)
return!0}return!1},
kG(a,b){var s,r,q,p,o,n=this,m=n.a,l=n.b,k=l+1
a.k(m,k,n.c+":",B.f)
s=m+25
if(b)for(m=n.d,r=0;r<m.length;++r){q=m[r]
if(r===n.e){p=s-1
o=q.length
A.cz(a,p,l,o+2,3,B.h,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
a.k(p,k,"\u25c4",B.h)
a.k(s+o,k,"\u25ba",B.h)}a.k(s,k,q,r===n.e?B.h:B.D)
s+=q.length+2}else{m=n.d
l=n.e
if(!(l>=0&&l<m.length))return A.c(m,l)
a.k(s,k,m[l],B.D)}}}
A.oS.prototype={
gdX(){return 9+this.b.y.Q.e.c+4},
fc(a){var s,r,q=this,p=q.b,o=p.y,n=o.Q
q.fJ(a,0,9,n.f)
n=n.e
q.fJ(a,11,n.c,n)
if(q.a.b.b>50){p=p.x
p===$&&A.b()
s=p.c5(o.y)
q.fJ(a,q.gdX(),5,s)}r=q.a.b.b>50?q.gdX()+7:q.gdX()
p=a.c
A.cz(a,0,r,p.a,p.b-r,null,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")},
fJ(a,b,c,d){A.us(a,d,A.B9(),!1,!1,A.Ba(),null,!1,c,0,this.b.y.Q,!1,!1,b,a.c.a)}}
A.pe.prototype={
fc(a){var s,r,q,p,o,n,m,l,k,j,i
a.cl(0,0,a.gaQ(),a.gan())
s=a.c
r=s.b
s=s.a
A.jd(a,0,r-1,s,null)
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
case 2:l=B.V
break
case 3:l=B.h
break
case 4:l=B.p
break
case 5:l=B.a_
break
default:l=null}k=p!==o-1?l.bi(B.y,0.5):l
j=A.dJ(s,m)
i=j.length-1
for(;;){if(!(i>=0&&q>=0))break
if(!(i>=0&&i<j.length))return A.c(j,i)
a.k(0,q,j[i],k);--q;--i}--p}}}
A.pR.prototype={
ag(a){var s,r,q=this.a
if(q!=null){s=q.a
r=q.b
this.fc(new A.aS(new A.d(r.a,r.b),s.a,s.b,a))}}}
A.qj.prototype={
fc(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b,f=g.b.y,e=f.Q,d=e.a
A.bi(a,h,h,d,!1,h,h,h)
a.k(1,2,e.b.a+" "+e.c.a,B.d)
i.lY(f,a,4)
s=f.z
r=e.CW.a
r.toString
i.ep(a,7,"Health",s,B.m,B.e.L(Math.pow(r,1.458)+9),B.Y)
r=f.ch
s=e.cx.a
s.toString
i.ep(a,8,"Focus",r,B.E,A.jR(s),B.C)
s=f.CW
r=e.ay.a
r.toString
i.ep(a,9,"Fury",s,B.M,A.hF(r),B.ar)
a.k(1,10,"Food",B.i)
r=a.c
s=r.a
A.vi(a,10,10,s-11,f.ay,400,B.k,B.v)
i.lT(f,a,12)
i.lU(f,a,13)
i.m1(f,a,14)
a.k(1,16,"Exp",B.i)
q=A.Q(e.y,!1,h)
a.k(s-q.length-1,16,q,B.J)
a.k(1,17,"Gold",B.i)
p=A.Q(e.Q,!1,h)
a.k(s-1-p.length,17,p,B.h)
a.k(1,19,"@",g.gjZ())
a.k(3,19,d,B.D)
i.iy(a,20,f)
d=g.w
d===$&&A.b()
o=d.d
B.a.dg(o,new A.qn(f))
e=s-4
r=r.b-2
n=0
for(;;){if(!(n<10&&n<o.length))break
m=21+n*2
if(m>=r)break
if(!(n<o.length))return A.c(o,n)
l=o[n]
k=l.Q.b
if(g.gdH()===l)k=new A.W(k.a,k.c,k.b)
j=l.Q.a.a
if(j.length>e)j=B.j.aJ(j,0,e)
a.am(1,m,k)
a.k(3,m,j,g.gdH()===l?B.h:B.D)
i.iy(a,m+1,l);++n}},
lY(a,b,c){var s,r={}
r.a=1
r=new A.ql(r,b,c)
s=a.Q
r.$1(s.ay)
r.$1(s.ch)
r.$1(s.CW)
r.$1(s.cx)},
m1(a,b,c){var s,r=a.eP(null),q=A.a(r.slice(0),A.M(r))
b.k(1,c,q.length>1?"Weapons":"Weapon",B.i)
r=A.M(q)
s=new A.aN(q,r.h("q(1)").a(new A.qm()),r.h("aN<1,q>")).aP(0,"+")
b.k(b.c.a-s.length-1,c,s,B.M)},
lU(a,b,c){var s,r,q,p
for(s=a.ghg(),r=s.$ti,s=new A.ag(s.a(),r.h("ag<1>")),r=r.c,q=0;s.q();){p=s.b
q+=(p==null?r.a(p):p).a}this.iB(b,c,"Dodge",""+q+"%",B.a_)},
lT(a,b,c){var s,r,q,p,o,n,m
for(s=$.fs(),r=10,q=0;q<12;++q){p=s[q]
o=a.hC(p)
n=a.fd(p)
if((n.a>0?o+n.b:o)>0){m=$.uH().p(0,p)
m.toString
b.k(r,c,m,A.e3(p));++r}}this.iB(b,c,"Armor"," "+B.e.L(100-A.wK(a.Q.gdC())*100)+"%",B.p)},
ep(a,b,c,d,e,f,g){var s,r,q
a.k(1,b,c,B.i)
s=a.c.a-1
if(f!=null){r=B.c.t(f)
s-=r.length
a.k(s,b,r,g)
s-=3
a.k(s,b," / ",g)}q=J.ec(d)
a.k(s-q.length,b,q,e)},
iB(a,b,c,d,e){return this.ep(a,b,c,d,e,null,null)},
iy(a,b,c){var s,r,q,p,o,n,m,l={}
l.a=3
s=new A.qk(l,a,b)
r=c.f
if(r.a>0){q=r.b
A:{if(1===q){r=B.k
break A}if(2===q){r=B.h
break A}r=B.B
break A}s.$2("S",r)}r=c.e.a
if(r>0){B:{if(1===r){r=B.cT
break B}if(2===r){r=B.a_
break B}r=B.J
break B}s.$2("F",r)}if(c.r.a>0)s.$2("V",B.t)
for(r=$.fs(),p=0;p<12;++p){o=r[p]
if(c.fd(o).a>0){n=$.uH().p(0,o)
n.toString
s.$3(n,B.y,A.e3(o))}}r=c instanceof A.aa
if(r&&c.at instanceof A.ct)s.$2("!",B.F)
if(r&&c.at instanceof A.cf)s.$2("z",B.C)
n=c.w
if(n.a>0){m=n.b
C:{if(1===m){n=B.A
break C}if(2===m){n=B.p
break C}n=B.ad
break C}s.$2("P",n)}if(c.c.a>0)s.$2("C",B.E)
if(c.b.a>0)s.$2("B",B.l)
if(c.d.a>0)s.$2("D",B.N)
if($.ns&&r)a.k(2,b,A.Q(B.e.L(c.ch*100),!1,3),B.t)
A.yg(a,10,b,a.c.a-11,c.z,c.gbp(),B.m,B.Y)}}
A.qn.prototype={
$2(a,b){var s,r=t.B
r.a(a)
r.a(b)
r=a.y
s=this.a.y
return B.c.ai(r.S(0,s).gaF(),b.y.S(0,s).gaF())},
$S:116}
A.ql.prototype={
$1(a){var s,r,q=this.b,p=this.a,o=this.c
q.k(p.a,o,B.j.aJ(a.gbb().c,0,3),B.i)
s=p.a
r=a.a
r.toString
q.k(s,o+1,A.Q(r,!1,2),B.d)
p.a=p.a+B.c.A(q.c.a-6,3)},
$S:117}
A.qm.prototype={
$1(a){return B.e.t(B.e.L(t.Z.a(a).gcW()*100)/100)},
$S:118}
A.qk.prototype={
$3(a,b,c){var s=this.a,r=s.a
if(r>8)return
this.b.dc(r,this.c,a,b,c);++s.a},
$2(a,b){return this.$3(a,b,null)},
$S:119}
A.qu.prototype={
d_(a,b,c,d){var s=this.a.a
this.iA(a,b+s.a,c+s.b,d)},
iA(a,b,c,d){var s=this.r.a,r=this.w
a.am(b-s.a+r.a,c-s.b+r.b,d)},
aH(a){var s,r,q,p,o,n=this;++n.f
s=a instanceof A.eU
if(s){r=a.a
for(q=r.length,p=n.c,o=0;o<r.length;r.length===q||(0,A.o)(r),++o)A.AH(p,r[o])}q=n.c
p=q.length
B.a.hJ(q,new A.qA(n))
return s||n.e||p!==0||q.length!==0||n.b.b.y.d.a>0},
fc(b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this
b5.n6(b6.c)
s=b5.d
B.a.aS(s)
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
if(d){c=b5.nC(h,f)
b=c.a
a=c.b
a0=c.c
a1=g.r.p(0,h)
if(a1==null)a1=A.bG(B.W,null)
a2=a1.gaD(0)
if(!a2){a3=a1.gN(0)
if(!a3.q())A.a_(A.cE())
a4=a3.gH().a.b
b=a4.a
a=a4.b}}else{b=null
a=B.y
a0=B.y
a2=!1}if(!f.b&&f.d+f.e>f.c&&f.x!==0){e=f.w
if(e===$.b4()){e=$.m()
l.a(B.aL)
a5=B.aL.length
e=e.a
a6=e.a1(a5)
if(!(a6>=0&&a6<a5))return A.c(B.aL,a6)
b=B.aL[a6]
m.a(B.aO)
a5=B.aO.length
e=e.a1(a5)
if(!(e>=0&&e<a5))return A.c(B.aO,e)
a7=B.aO[e]
a=a7.a
a0=a7.b
b5.e=!0}else if(e===$.bz())a0=a0.bi(B.z,0.1+f.x/255*0.9)}e=g.w
e.l(j,i)
a6=e.a
e=i*e.b.b.a+j
if(!(e>=0&&e<a6.length))return A.c(a6,e)
e=a6[e]
if(e!=null)a8=!f.b&&f.d+f.e>f.c||h.Z(0,p.y)||$.tM||q.cA(e)
else a8=!1
if(a8){a9=e.geJ()
if(a9 instanceof A.W){b=a9.a
a=a9.b}else{a=r.gjZ()
b=64}if(r.gdH()===e){a0=a
a=B.u
d=!1}if(e instanceof A.aa)B.a.j(s,e)
a2=!1}a6=n.a
if(a6>0){b0=Math.min(90,a6*8)
a6=$.m()
a6=a6.a
if(a6.a1(100)<b0){b=a6.a1(100)<b0?b:42
k.a(B.aN)
a5=B.aN.length
a6=a6.a1(a5)
if(!(a6>=0&&a6<a5))return A.c(B.aN,a6)
a=B.aN[a6]}a2=!1
d=!1}a6=new A.qz()
b1=a6.$2(a,B.bp)
b2=a6.$2(a0,B.cQ)
if(!f.b&&f.d+f.e>f.c)a6=a2||d
else a6=!1
if(a6){f=new A.qx(f)
if(a2)a=f.$2(a,b1)
if(d)a0=f.$2(a0,b2)}else{if(a2)a=b1
if(d)a0=b2}if($.tN){b3=(16-g.geE().iK(h))/16
b3*=b3
if(b3>0)a0=a0.bi(B.p,b3)}if($.ns&&e instanceof A.aa)a0=B.cM.bi(B.bo,e.ch)
if(b!=null){g=b5.r.a
f=b5.w
b6.am(j-g.a+f.a,i-g.b+f.b,new A.W(b,a,a0))}}for(s=b5.c,r=s.length,b4=0;b4<s.length;s.length===r||(0,A.o)(s),++b4)s[b4].bs(q,new A.qy(b5,b6))},
nC(a,b){var s,r,q,p=b.a.d
if(p instanceof A.W)return p
t.af.a(p)
s=p.length
r=A.wM(a.a,a.b)
q=B.c.ad(B.c.A(this.f,8)+r,s*2-2)
s=p.length
if(q>=s)q=s-(q-s)-1
this.e=!0
if(!(q>=0&&q<s))return A.c(p,q)
return p[q]},
n6(a){var s,r,q,p,o,n,m,l=this,k=l.b.b,j=l.r,i=j.gbO(),h=new A.qv(k,a),g=a.a,f=k.x
f===$&&A.b()
s=f.f.b.b.a
if(g>=s){r=B.e.A(Math.max(0,g-s),2)
i=0}else{j=j.b.a
if(j===0||j!==g)i=h.$0()
else{q=k.y.y.gm()-l.r.gbO()
if(q<8||q>g-8)i=h.$0()}r=0}j=l.r
p=j.gbT()
h=new A.qw(k,a)
s=a.b
o=f.f.b.b.b
if(s>=o){n=B.e.A(Math.max(0,s-o),2)
p=0}else{j=j.b.b
if(j===0||j!==s)p=h.$0()
else{m=k.y.y.gn()-l.r.gbT()
if(m<8||m>s-8)p=h.$0()}n=0}j=f.f.b.b
l.r=new A.Y(new A.d(i,p),new A.d(Math.min(g,j.a),Math.min(s,j.b)))
l.w=new A.d(r,n)}}
A.qA.prototype={
$1(a){return!t.ox.a(a).aH(this.a.b.b)},
$S:120}
A.qz.prototype={
$2(a,b){return new A.E(B.c.A(a.a*b.a,255),B.c.A(a.b*b.b,255),B.c.A(a.c*b.c,255))},
$S:16}
A.qx.prototype={
$2(a,b){var s=this.a,r=s.d-s.c
if(r<64)a=a.bi(b,A.v(r,0,64,0.5,0))
else if(r>128)a=a.aX(0,B.t,A.v(r,128,255,0,0.2))
s=s.e
return s>0?a.aX(0,B.bn,A.v(s,0,255,0.05,0.1)):a},
$S:16}
A.qy.prototype={
$3(a,b,c){this.a.iA(this.b,a,b,c)},
$S:43}
A.qv.prototype={
$0(){var s=this.a,r=s.y.y.gm(),q=this.b.a,p=B.c.A(q,2)
s=s.x
s===$&&A.b()
return B.c.P(r-p,0,s.f.b.b.a-q)},
$S:2}
A.qw.prototype={
$0(){var s=this.a,r=s.y.y.gn(),q=this.b.b,p=B.c.A(q,2)
s=s.x
s===$&&A.b()
return B.c.P(r-p,0,s.f.b.b.b-q)},
$S:2}
A.fG.prototype={
gf4(){return A.a([this.c],t.s)},
gcw(){return B.cg},
a7(a){if(a===B.H){this.a.aa()
return!0}return!1},
a9(a,b,c){if(c||b)return!1
switch(a){case 78:this.a.aa()
break
case 89:this.a.b6(this.d)
break}return!0}}
A.fO.prototype={
gaQ(){return 38},
gan(){return 19},
gcw(){var s=t.N
return A.A(["OK","Return to town"],s,s)},
lh(a,b,c){var s,r,q,p,o,n,m=this.d
c.a=5
s=new A.o0(c,this)
r=m.y.Q
q=this.c
s.$3("Gold",B.h,r.Q-q.Q)
s.$3("Experience",B.p,r.y-q.y);++c.a
p=r.ay.a
p.toString
o=q.ay.a
o.toString
s.$3("Strength",B.E,p-o)
o=r.ch.a
o.toString
p=q.ch.a
p.toString
s.$3("Agility",B.E,o-p)
p=r.CW.a
p.toString
o=q.CW.a
o.toString
s.$3("Vitality",B.E,p-o)
o=r.cx.a
o.toString
p=q.cx.a
p.toString
s.$3("Intellect",B.E,o-p)
c.a+=3
n=r.ax.gjx()-q.ax.gjx()
m=m.x
m===$&&A.b()
m=m.b
q=A.M(m)
s.$4$total("Monsters",B.m,n,n+new A.aj(m,q.h("B(1)").a(new A.o1()),q.h("aj<1>")).gI(0))},
gbn(){return!0},
a7(a){var s
if(a!==B.a7)return!1
s=this.d
s.y.Q.soW(Math.max(this.c.as,s.w))
this.a.aa()
return!0},
bu(){var s,r,q
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q)if(s[q].bu())this.K()},
hK(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
a.k(1,1,"You survived depth "+this.d.w+"!",B.d)
a.k(1,3,"You gained:",B.f)
a.k(1,13,"You slayed:",B.f)
for(s=this.e,r=s.length,q=a.c.a,p=q-1,q-=4,o=0;o<s.length;s.length===r||(0,A.o)(s),++o){n=s[o]
m=n.a
a.k(5,m,"................................",B.u)
a.k(5,m,n.b+" ",B.i)
l=B.c.t(n.f)
k=n.e
j=l.length
if(k!=null){i=B.c.t(k)
k=i.length
h=p-k
g=n.d
a.k(h,m,i,g)
a.k(h-3,m," / ",g)
a.k(q-k-j,m,l,g)}else{k=n.c===0?B.i:n.d
a.k(p-j,m,l,k)}}}}
A.o0.prototype={
$4$total(a,b,c,d){B.a.j(this.b.e,new A.lu(this.a.a++,a,c,b,d))},
$3(a,b,c){return this.$4$total(a,b,c,null)},
$S:122}
A.o1.prototype={
$1(a){return!(t.f0.a(a) instanceof A.aw)},
$S:123}
A.lu.prototype={
bu(){var s=this,r=s.f,q=s.c
if(r>=q)return!1
if(q>200){r+=$.m().pe(0,q/200)
s.f=r
if(r>q)s.f=q}else s.f=r+1
return!0}}
A.fR.prototype={
gf4(){if(this.c)return B.hC
return B.hI},
gcw(){return B.cg},
a7(a){if(a===B.H){this.a.b6(!1)
return!0}return!1},
a9(a,b,c){if(c||b)return!1
switch(a){case 78:this.a.b6(!1)
break
case 89:this.a.b6(!0)
break}return!0},
bu(){return!1}}
A.kC.prototype={
gbn(){return!0},
gaQ(){return null},
gan(){return null},
gf4(){return null},
ag(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
A.br(a,g.gcw(),null)
s=g.gf4()
r=s!=null
if(r){q=B.a.aE(s,0,new A.pT(),t.S)
p=s.length}else{q=0
p=0}o=g.gaQ()
if(o==null)o=q+2
n=g.gan()
if(n==null)n=p+2
m=a.e.a.b.b
l=B.c.A(m.b-n,3)
k=B.c.A(m.a-o,2)
A.cz(a,k-1,l-1,o+2,n+2,B.h,"\u2554","\u2550","\u2557","\u2551","\u255a","\u2550","\u255d")
a=new A.aS(new A.d(o,n),k,l,a)
a.cl(0,0,a.gaQ(),a.gan())
if(r){j=B.c.A(o-B.a.aE(s,0,new A.pU(),t.S),2)
for(r=s.length,i=1,h=0;h<s.length;s.length===r||(0,A.o)(s),++h){a.k(j,i,s[h],B.d);++i}}g.hK(a)},
hK(a){}}
A.pT.prototype={
$2(a,b){return Math.max(A.w(a),A.a3(b).length)},
$S:24}
A.pU.prototype={
$2(a,b){return Math.max(A.w(a),A.a3(b).length)},
$S:24}
A.hx.prototype={
gaQ(){return 42},
gan(){return 25},
gf4(){return B.hK},
gcw(){return B.i4},
a7(a){var s=this
switch(a){case B.ag:s.el(s.e-1)
return!0
case B.af:s.el(s.e+1)
return!0
case B.a0:s.el(s.e-10)
return!0
case B.a1:s.el(s.e+10)
return!0
case B.a7:s.a.b6(s.e)
return!0
case B.H:s.a.aa()
return!0}return!1},
hK(a){var s,r,q,p,o,n
for(s=1;s<=100;++s){r=s-1
q=B.c.ad(r,10)
p=B.c.A(r,10)*2
if(s===this.e){r=q*4
o=p+5
a.am(r,o,new A.W(9658,B.h,B.y))
a.am(r+4,o,new A.W(9668,B.h,B.y))
n=B.h}else n=B.D
a.k(q*4+1,p+5,A.Q(s,!1,3),n)}},
el(a){if(a<1)return
if(a>100)return
this.e=a
this.K()}}
A.qI.prototype={
ac(a,b){B.a.hJ(this.b,new A.qS(b))
this.bw()},
pc(a){var s=this.b
B.a.i(s,B.a.oN(s,new A.qT(a)),a)
this.bw()},
mN(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=v.G
if(A.a3(A.P(A.P(c5.window).location).search)==="?clear"){c4.bw()
return}a9=A.rY(A.P(A.P(c5.window).localStorage).getItem("heroes"))
if(a9==null)return
c5=t.ea
for(b0=t._,b1=J.ap(b0.a(c5.a(B.aX.os(a9)).p(0,"heroes"))),b2=c4.b,b3=t.dZ,b4=t.g,b5=t.U,b6=t.cm;b1.q();){s=b1.gH()
try{r=c5.a(s)
q=A.a3(J.aY(r,"name"))
p=A.a3(s.p(0,"race"))
o=B.a.eW($.ft(),new A.qP(p))
n=null
if(J.aY(r,"class")==null)n=$.ea()[0]
else{m=A.a3(J.aY(r,"class"))
n=B.a.eW($.ea(),new A.qQ(m))}l=J.ay(J.aY(r,"death"),"permanent")
k=c4.ds(b0.a(J.aY(r,"inventory")))
j=A.bG(B.I,k)
i=new A.et(A.an(9,null,!1,b6))
for(b7=c4.ds(b0.a(J.aY(r,"equipment"))),b8=b7.length,b9=0;b9<b7.length;b7.length===b8||(0,A.o)(b7),++b9){h=b7[b9]
i.jP(h)}g=c4.ds(b0.a(J.aY(r,"home")))
f=A.bG(B.c5,g)
e=c4.ds(b0.a(J.aY(r,"crucible")))
d=A.bG(B.c4,e)
c=A.C(b4,b5)
if(r.aj("shops")){b=c5.a(J.aY(r,"shops"))
$.hA.ae(0,new A.qR(c4,b,c))}j.bl()
f.bl()
d.bl()
a=A.w(J.aY(r,"experience"))
a0=c4.mR(b3.a(J.aY(r,"skills")))
a1=c4.mP(J.aY(r,"log"))
a2=c4.mQ(c5.a(J.aY(r,"lore")))
a3=A.w(J.aY(r,"gold"))
c0=A.wi(J.aY(r,"maxDepth"))
a4=c0==null?0:c0
a5=c5.a(J.aY(r,"stats"))
b7=n
b8=A.w(J.aY(a5,"strength"))
c1=A.w(J.aY(a5,"agility"))
c2=A.w(J.aY(a5,"vitality"))
a6=A.vs(q,o,b7,l,j,i,f,d,c,a,a0,a1,a2,a3,a4,c1,A.w(J.aY(a5,"intellect")),b8,c2)
B.a.j(b2,a6)}catch(c3){a7=A.dn(c3)
a8=A.e5(c3)
A.to("Could not load hero. Data:")
A.to(B.aX.jO(s))
A.to("Error:\n"+A.J(a7)+"\n"+A.J(a8))}}},
ds(a){var s,r,q,p=A.a([],t.I)
for(s=J.ap(a),r=t.ea;s.q();){q=this.mO(r.a(s.gH()))
if(q!=null)B.a.j(p,q)}return p},
mO(a){var s,r,q
t.ea.a(a)
s=A.a3(a.p(0,"type"))
r=$.bh().c9(s)
if(r==null){A.ur("Couldn't find item type \""+A.J(a.p(0,"type"))+'", discarding item.')
return null}q=a.aj("count")?A.w(a.p(0,"count")):1
return new A.L(r,this.fR(a.p(0,"prefix")),this.fR(a.p(0,"suffix")),this.fR(a.p(0,"intrinsic")),q)},
fR(a){var s,r,q,p,o,n,m,l="parameter"
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
if(n)p=A.fl(s)
q=o}}}if(p){m=A.w(r?s:a.p(0,l))
p=new A.cc(A.v5(A.a3(q)),m)
break A}p=null
break A}return p},
mR(a){var s,r,q,p,o,n
t.dZ.a(a)
s=t.M
r=t.S
q=A.C(s,r)
if(a!=null)for(p=a.gb2(),p=p.gN(p);p.q();){o=p.gH()
n=$.uI().p(0,o)
if(n==null)A.a_(A.aC("Unknown skill '"+o+"'.",null))
q.i(0,n,A.w(a.p(0,o)))}return new A.hB(q,A.C(s,r))},
mP(a){var s,r,q,p=A.a([],t.kU)
if(t._.b(a))for(s=J.ap(a),r=t.ea;s.q();){q=r.a(s.gH())
B.a.j(p,new A.hb(B.a.eW(B.hH,new A.qJ(q)),A.a3(q.p(0,"text")),A.w(q.p(0,"count"))))}return new A.k6(p)},
mQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=t.dZ
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
k=d.a(a.p(0,"seen"))
if(k!=null)k.ae(0,new A.qK(e,q))
j=d.a(a.p(0,"slain"))
if(j!=null)j.ae(0,new A.qL(e,p))
i=d.a(a.p(0,"foundItems"))
if(i!=null)i.ae(0,new A.qM(e,o))
h=d.a(a.p(0,"foundAffixes"))
if(h!=null)h.ae(0,new A.qN(e,n))
g=d.a(a.p(0,"usedItems"))
if(g!=null)g.ae(0,new A.qO(e,l))
f=t.lH.a(a.p(0,"createdArtifacts"))
if(f!=null)for(d=J.ap(f);d.q();){s=A.a3(d.gH())
s=$.bh().c9(s)
s.toString
m.j(0,s)}return new A.h9(q,p,o,n,m,l)},
bw(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=A.a([],t.ic)
for(s=a3.b,r=s.length,q=t.N,p=t.K,o=t.S,n=t._,m=0;m<s.length;s.length===r||(0,A.o)(s),++m){l=s[m]
k=A.A(["strength",l.ay.b,"agility",l.ch.b,"vitality",l.CW.b,"intellect",l.cx.b],q,o)
j=l.d?"permanent":"dungeon"
i=a3.dv(l.e)
h=a3.dv(l.f)
g=a3.dv(l.r)
f=a3.dv(l.w)
e=A.C(q,n)
for(d=l.x,d=new A.dI(d,d.r,d.e,A.z(d).h("dI<1,2>"));d.q();){c=d.d
e.i(0,c.a.b,a3.dv(c.b))}d=l.y
c=A.C(q,o)
for(b=l.z.a,a=new A.c1(b,b.r,b.e,A.z(b).h("c1<1>"));a.q();){a0=a.d
a1=a0.gM()
a0=b.p(0,a0)
c.i(0,a1,a0==null?0:a0)}a4.push(A.A(["name",l.a,"race",l.b.a,"stats",k,"class",l.c.a,"death",j,"inventory",i,"equipment",h,"home",g,"crucible",f,"shops",e,"experience",d,"skills",c,"log",a3.nm(l.at),"lore",a3.nn(l.ax),"gold",l.Q,"maxDepth",l.as],q,p))}a2=B.aX.jO(A.A(["heroes",a4],q,t.ew))
A.P(A.P(v.G.window).localStorage).setItem("heroes",a2)
A.ur("Saved.")},
nm(a){var s,r,q,p,o,n,m=[]
for(s=a.a,r=s.length,q=t.N,p=t.oH,o=0;o<s.length;s.length===r||(0,A.o)(s),++o){n=s[o]
m.push(A.A(["type",n.a.b,"text",n.b,"count",n.c],q,p))}return m},
nn(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=t.oH,g=A.C(i,h),f=A.C(i,h),e=A.C(i,h),d=A.C(i,h),c=A.C(i,h),b=[]
for(s=$.ca().gc_(),r=A.z(s),s=new A.bl(J.ap(s.a),s.b,r.h("bl<1,2>")),q=a.b,p=a.a,r=r.y[1];s.q();){o=s.a
if(o==null)o=r.a(o)
n=p.p(0,o)
if(n==null)n=0
if(n!==0)g.i(0,o.a.a,n)
n=q.p(0,o)
if(n==null)n=0
if(n!==0)f.i(0,o.a.a,n)}for(s=$.bh().gc_(),r=A.z(s),s=new A.bl(J.ap(s.a),s.b,r.h("bl<1,2>")),q=a.f,p=a.c,r=r.y[1];s.q();){o=s.a
if(o==null)o=r.a(o)
m=p.p(0,o)
if(m==null)m=0
if(m!==0)e.i(0,o.a.a6(1).a,m)
l=q.p(0,o)
if(l==null)l=0
if(l!==0)c.i(0,o.a.a6(1).a,l)}s=A.a6($.dp().gc_(),t.R)
B.a.U(s,$.dq().gc_())
r=s.length
q=a.d
k=0
for(;k<s.length;s.length===r||(0,A.o)(s),++k){j=s[k]
m=q.p(0,j)
if(m==null)m=0
if(m!==0)d.i(0,j.a,m)}for(s=$.bh().gc_(),r=A.z(s),s=new A.bl(J.ap(s.a),s.b,r.h("bl<1,2>")),r=r.y[1],q=a.e;s.q();){p=s.a
if(p==null)p=r.a(p)
if(p.dx&&q.G(0,p))b.push(p.a.a6(1).a)}return A.A(["seen",g,"slain",f,"foundItems",e,"foundAffixes",d,"usedItems",c,"createdArtifacts",b],i,h)},
dv(a){var s,r,q,p,o,n,m,l,k,j
t.C.a(a)
s=[]
for(r=a.gN(a),q=t.N,p=t.K,o=t.oH;r.q();){n=r.gH()
m=A.C(q,p)
m.i(0,"type",n.a.a.a6(1).a)
m.i(0,"count",n.f)
l=n.b
if(l!=null)m.i(0,"prefix",A.A(["id",l.a.a,"parameter",l.b],q,o))
k=n.c
if(k!=null)m.i(0,"suffix",A.A(["id",k.a.a,"parameter",k.b],q,o))
j=n.d
if(j!=null)m.i(0,"intrinsic",A.A(["id",j.a.a,"parameter",j.b],q,o))
s.push(m)}return s}}
A.qS.prototype={
$1(a){return t.er.a(a).a===this.a.a},
$S:21}
A.qT.prototype={
$1(a){return t.er.a(a).a===this.a.a},
$S:21}
A.qP.prototype={
$1(a){return t.ho.a(a).a===this.a},
$S:47}
A.qQ.prototype={
$1(a){return t.lJ.a(a).a===this.a},
$S:124}
A.qR.prototype={
$2(a,b){var s,r
A.a3(a)
t.g.a(b)
s=t.lH.a(this.b.p(0,a))
r=this.c
if(s!=null)r.i(0,b,A.bG(new A.c_(b.b,26),t.C.a(this.a.ds(s))))
else{A.ur("No data for "+a+", so regenerating.")
r.i(0,b,b.oq())}},
$S:125}
A.qJ.prototype={
$1(a){return t.aI.a(a).b===A.a3(this.a.p(0,"type"))},
$S:126}
A.qK.prototype={
$2(a,b){var s
A.a3(a)
s=$.ca().c9(a)
if(s!=null)this.b.i(0,s,A.w(b))},
$S:9}
A.qL.prototype={
$2(a,b){var s
A.a3(a)
s=$.ca().c9(a)
if(s!=null)this.b.i(0,s,A.w(b))},
$S:9}
A.qM.prototype={
$2(a,b){var s
A.a3(a)
s=$.bh().c9(a)
if(s!=null)this.b.i(0,s,A.w(b))},
$S:9}
A.qN.prototype={
$2(a,b){this.b.i(0,A.v5(A.a3(a)),A.w(b))},
$S:9}
A.qO.prototype={
$2(a,b){var s
A.a3(a)
s=$.bh().c9(a)
if(s!=null)this.b.i(0,s,A.w(b))},
$S:9}
A.nJ.prototype={
$2(a,b){var s,r
A.a3(a)
A.a3(b)
s=this.a
r=s.a
if(r>0)r=s.a=r+2
s.a=r+(a.length+b.length+3)},
$S:45}
A.nK.prototype={
$2(a,b){var s,r,q,p
A.a3(a)
A.a3(b)
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
r.k(s.b+=2,q,b,B.D)
s.b=s.b+b.length
s.c=!1},
$S:45}
A.l4.prototype={
gck(){var s,r,q=this,p=t.N
p=A.C(p,p)
p.i(0,"\u2195","Select row")
s=q.e
r=s.length
if(r!==0)p.i(0,"S","Sort by "+s[B.c.ad(q.z+1,r)].a)
s=q.f
r=s.length
if(r!==0)p.i(0,"F","Show "+s[B.c.ad(q.Q+1,r)].a)
return p},
a7(a){var s=this
switch(a){case B.a0:s.eF(-1)
return!0
case B.a1:s.eF(1)
return!0
case B.ao:s.eF(-(s.w-1))
return!0
case B.ap:s.eF(s.w-1)
return!0}return!1},
a9(a,b,c){var s,r,q,p,o=this
if(b)return!1
s=83===a
if(s&&!c&&o.e.length!==0){o.z=B.c.ad(o.z+1,o.e.length)
o.du()
return!0}if(s&&c&&o.e.length!==0){r=o.z
q=o.e.length
o.z=B.c.ad(r+q-1,q)
o.du()
return!0}p=70===a
if(p&&!c&&o.f.length!==0){o.Q=B.c.ad(o.Q+1,o.f.length)
o.du()
return!0}if(p&&c&&o.f.length!==0){r=o.Q
q=o.f.length
o.Q=B.c.ad(r+q-1,q)
o.du()
return!0}return!1},
kA(a,b){this.$ti.h("k<aq<1>>()").a(a)
this.j0(new A.r0(this,t.b8.a(b),a))},
kz(a){return this.kA(a,null)},
hk(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a2.c
if(!a1.Z(0,a0.r))a0.ni(a1)
for(s=a0.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
o=p.e
n=p.a
m=p.b.kj(p.f,n.length)
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
r.push("show "+o[m].a)}if(r.length!==0){k="("+B.a.aP(r,", ")+")"
a2.k(B.a.gaB(s).e+B.a.gaB(s).f-k.length,0,k,B.l)}a0.iz(a2,1,B.l)
for(r=a0.d,o=!r,n=a0.c,j=0;m=a0.w,j<m;++j){i=j*2+2
h=a0.x+j
m=n.length
if(h>=m)continue
if(!(h>=0))return A.c(n,h)
g=n[h]
f=g.a
if(f!=null)a2.am(0,i,f)
if(h===a0.y)a2.k(1,i,"\u25ba",B.h)
for(m=g.c,e=0;e<m.length;++e){d=m[e]
if(!(e<s.length))return A.c(s,e)
l=s[e]
A:{c=a0.y
if(h===c){c=B.h
break A}if(!d.b){c=B.i
break A}if(e===0){c=B.D
break A}c=B.d
break A}b=l.e
A.u7(a2,d.a,l.b,c,l.f,b,i)}a=o&&h===n.length-1?B.l:B.u
a0.iz(a2,i+1,a)}if(r){s=n.length
A.vh(a2,m*2-1,a0.x,s,m,a1.a-1,2)}},
ni(a){var s,r,q,p,o,n,m,l,k,j=this
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
j.fQ()},
du(){this.j0(new A.r_(this))},
eF(a){var s=this
s.y=B.c.P(s.y+a,0,s.c.length-1)
s.fQ()},
j0(a){var s,r,q,p,o,n=this
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
break}n.fQ()},
fQ(){var s,r=this,q=r.c,p=q.length
if(p!==0&&r.w>0){p=r.y=B.c.P(r.y,0,p-1)
p=B.c.P(r.x,p-r.w+1,p)
r.x=p
q=q.length
s=r.w
if(q>s)r.x=B.c.P(p,0,q-s)
else r.x=0}else r.x=r.y=0},
iz(a,b,c){var s,r,q,p,o
for(s=this.a,r=s.length,q=2,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
a.k(q,b,B.j.aI("\u2500",o.f),c)
q+=o.f+1}}}
A.r0.prototype={
$0(){var s,r,q=this,p=q.b
if(p!=null){s=q.a
r=s.a
B.a.aS(r)
B.a.U(r,p)
s.r=B.ak}p=q.a
s=p.b
B.a.aS(s)
B.a.U(s,q.c.$0())
p.du()},
$S:0}
A.r_.prototype={
$0(){var s,r,q,p=this.a
if(p.e.length!==0)B.a.dg(p.b,new A.qY(p))
s=p.c
B.a.aS(s)
r=p.b
if(p.f.length!==0){q=A.M(r)
B.a.U(s,new A.aj(r,q.h("B(1)").a(new A.qZ(p)),q.h("aj<1>")))}else B.a.U(s,r)},
$S:0}
A.qY.prototype={
$2(a,b){var s,r,q,p=this.a,o=p.$ti,n=o.h("aq<1>")
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
$S(){return this.a.$ti.h("e(aq<1>,aq<1>)")}}
A.qZ.prototype={
$1(a){var s,r=this.a,q=r.$ti
q.h("aq<1>").a(a)
s=r.f
r=r.Q
if(!(r>=0&&r<s.length))return A.c(s,r)
return q.h("B(1)").a(s[r].b).$1(a.b)},
$S(){return this.a.$ti.h("B(aq<1>)")}}
A.iD.prototype={
aK(){return"Align."+this.b},
kj(a,b){var s
switch(this.a){case 0:s=0
break
case 1:s=B.c.A(a-b,2)
break
case 2:s=a-b
break
default:s=null}return s}}
A.aK.prototype={}
A.aq.prototype={}
A.a9.prototype={}
A.N.prototype={}
A.r4.prototype={
$2(a,b){return A.w(a)+t.fc.a(b).a.length},
$S:129}
A.bu.prototype={}
A.c3.prototype={}
A.hP.prototype={
gbn(){return!0},
a7(a){if(a===B.H){this.a.aa()
return!0}return!1},
a9(a,b,c){var s,r,q,p,o,n
if(c||b)return!1
for(s=this.b,r=s.length,q=0;q<r;++q){p=s[q].a
o=p[1]
n=p[3]
if(o===a){n.$0()
this.K()
return!0}}return!1},
dA(a,b){t.eE.a(a)
this.d=!0},
ag(a){var s,r,q,p,o,n,m,l,k=this,j=null
for(s=k.b,r=s.length,q=0,p=0;p<r;++p)q=Math.max(q,s[p].a[2].length)
A.bi(a,j,r+2,"Wizard Menu",k.d,40,j,j)
for(r=s.length,o=0,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){n=s[p].a
m=n[0]
l=n[2];++o
a.k(1,o,m,k.d?B.h:B.i)
a.k(2,o,")",k.d?B.l:B.i)
a.k(4,o,l,k.d?B.D:B.i)}if(k.d){s=t.N
A.br(a,A.A(["`","Exit"],s,s),j)}},
mX(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.c,b=c.x
b===$&&A.b()
for(s=b.f,r=s.b,q=A.ab(r),p=s.a,o=r.b.a,n=p.length;q.q();){m=q.b
l=q.c
s.l(m,l)
k=l*o+m
if(!(k>=0&&k<n))return A.c(p,k)
j=p[k]
i=$.U()
if((j.a.e.a&i.a)!==0){s.l(m,l)
j.fh(!0)
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
p[k].fh(!0)
break}}}for(s=b.b,r=s.length,c=c.y,q=c.Q.ax,c=c.as,h=0;h<s.length;s.length===r||(0,A.o)(s),++h){d=s[h]
if(d instanceof A.aa)if(c.j(0,d))q.hZ(d.Q)}b.eZ(new A.rh(this))},
mw(){var s,r,q,p,o,n,m,l,k,j=this.c.x
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
j.cG()},
m3(){this.d=!1
this.a.a4(new A.mD(this.c))},
nV(){this.d=!1
this.a.a4(new A.mE(this.c))},
mn(){var s=this.c.y,r=s.Q,q=1e4+B.c.A(r.y,4)
s.hY(q)
s.br()
r.at.dK("Gave the hero "+A.Q(q,!1,null)+" experience.")},
mJ(){var s,r,q,p,o,n,m=this.c.x
m===$&&A.b()
s=m.b
s=A.a(s.slice(0),A.M(s))
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
if(!(p instanceof A.aa))continue
o=p.y
n=p.Q
m.dZ(o,n.Q,n.c)
m.kD(p)}},
lI(){var s,r,q,p=A.a([],t.b9),o=this.c.x
o===$&&A.b()
o.eZ(new A.rg(p))
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.o)(p),++r){q=p[r]
o.e1(q.b,q.a)}},
mV(){var s,r=this.c,q=r.x
q===$&&A.b()
r=r.y
s=r.y
q.f.B(s.gm(),s.gn()).a=$.uT()
r.Q.at.dK("Placed stairs under hero.")},
nH(){var s=!$.tM
$.tM=s
this.c.y.Q.at.dK("Show all monsters = "+s)
this.a.aa()},
nF(){var s=!$.ns
$.ns=s
this.c.y.Q.at.dK("Show monster alertness = "+s)
this.a.aa()},
nJ(){var s=!$.tN
$.tN=s
this.c.y.Q.at.dK("Show hero volume = "+s)
this.a.aa()}}
A.rh.prototype={
$2(a,b){this.a.c.y.Q.ax.d3(a)},
$S:15}
A.rg.prototype={
$2(a,b){B.a.j(this.a,new A.O(b,a))},
$S:15}
A.cp.prototype={
gbn(){return!0},
a7(a){if(a===B.H){this.a.aa()
return!0}return!1},
a9(a,b,c){var s,r,q,p,o=this
if(b)return!1
switch(a){case 13:for(s=o.gew(),r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q)o.h7(s[q])
o.a.aa()
return!0
case 8:s=o.c
r=s.length
if(r!==0){o.c=B.j.aJ(s,0,r-1)
o.K()}return!0
case 32:o.c+=" "
o.K()
return!0
default:if(a>=65&&a<=90){o.c=o.c+A.qW(A.a([a],t.t)).toLowerCase()
o.K()
return!0}else if(a>=48&&a<=57){p=a-48
if(p<o.gew().length){s=o.gew()
if(!(p>=0&&p<s.length))return A.c(s,p)
o.h7(s[p])
o.a.aa()
return!0}}}return!1},
ag(a){var s,r,q,p,o,n,m=this,l=null,k=new A.aS(new A.d(43,38),40,0,a)
A.bi(k,l,l,m.gex(),!0,l,l,l)
k.k(m.gex().length+4,0,m.c,B.h)
k.dc(m.gex().length+4+m.c.length,0," ",B.h,B.h)
for(s=m.gew(),r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
if(!B.j.G(m.es(o).toLowerCase(),m.c.toLowerCase()))continue
if(q<10){n=q+1
k.k(1,n,B.c.t(q),B.h)
k.k(2,n,")",B.i)}++q
k.am(3,q,m.iM(o))
k.k(5,q,m.es(o),B.D)
if(q>=36)break}s=t.N
A.br(a,A.A(["0-9","Select","Enter","Select all","`","Exit"],s,s),l)},
gew(){var s=this.gii(),r=A.z(s),q=r.h("aj<k.E>")
s=A.a6(new A.aj(s,r.h("B(k.E)").a(new A.rN(this)),q),q.h("k.E"))
return s}}
A.rN.prototype={
$1(a){var s=this.a
return B.j.G(s.es(A.z(s).h("cp.T").a(a)).toLowerCase(),s.c.toLowerCase())},
$S(){return A.z(this.a).h("B(cp.T)")}}
A.mD.prototype={
gex(){return"Drop what?"},
gii(){return $.bh().gc_()},
es(a){return t.q.a(a).a.a6(1).a},
iM(a){return t.q.a(a).b},
h7(a){var s
t.q.a(a)
if(a.dx)this.b.y.Q.ax.e.j(0,a)
s=this.b
A.a7(a.a.a6(1).a,null,null).b0(s.y.Q.ax,s.w,new A.rT(this))}}
A.rT.prototype={
$1(a){var s=this.a.b,r=s.x
r===$&&A.b()
s=s.y
r.cU(a,s.y)
s.Q.at.jI("Dropped {1}.",a)},
$S:6}
A.mE.prototype={
gex(){return"Spawn what?"},
gii(){return $.ca().gc_()},
es(a){return t.P.a(a).a.a},
iM(a){return t.P.a(a).b},
h7(a){var s,r,q
t.P.a(a)
s=this.b
r=s.x
r===$&&A.b()
q=A.ck(r,s.y.y,$.aX(),null,null,null).jA(new A.rU(this))
if(q==null)return
r.dB(a.i6(q))}}
A.rU.prototype={
$1(a){return a.S(0,this.a.b.y.y).bg(0,6)},
$S:1}
A.nH.prototype={
i0(a,b,c){var s,r
if(a<0)return
s=this.a
r=s.b.b
if(a>=r.a)return
if(b<0)return
if(b>=r.b)return
r=this.b
if(!s.B(a,b).Z(0,c))r.aW(a,b,c)
else r.aW(a,b,null)},
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
aX(a,b,c){return new A.E(B.e.L(B.e.P(this.a+b.a*c,0,255)),B.e.L(B.e.P(this.b+b.b*c,0,255)),B.e.L(B.e.P(this.c+b.c*c,0,255)))},
bi(a,b){var s=1-b
return new A.E(B.e.L(this.a*s+a.a*b),B.e.L(this.b*s+a.b*b),B.e.L(this.c*s+a.c*b))}}
A.W.prototype={
ga0(a){return B.c.ga0(this.a)^this.b.ga0(0)^this.c.ga0(0)},
Z(a,b){if(b==null)return!1
if(b instanceof A.W)return this.a===b.a&&this.b.Z(0,b.b)&&this.c.Z(0,b.c)
return!1}}
A.k1.prototype={}
A.y.prototype={
Z(a,b){if(b==null)return!1
return b instanceof A.y&&this.a===b.a&&this.b===b.b&&this.c===b.c},
ga0(a){return(B.c.ga0(this.a)^B.c7.ga0(this.b)^B.c7.ga0(this.c))>>>0},
t(a){var s="key("+this.a
if(this.b)s+=" shift"
return(this.c?s+" alt":s)+")"}}
A.aS.prototype={
gaQ(){return this.c.a},
gan(){return this.c.b},
am(a,b,c){var s,r=this
if(a<0)return
s=r.c
if(a>=s.a)return
if(b<0)return
if(b>=s.b)return
r.f.am(r.d+a,r.e+b,c)},
b8(a,b,c,d){return new A.aS(new A.d(c,d),this.d+a,this.e+b,this.f)}}
A.kR.prototype={
gaQ(){return this.e.a.b.b.a},
gan(){return this.e.a.b.b.b},
lm(a,b,c,d,e,f){var s=t.gX
A.dW(this.r,"load",s.h("~(1)?").a(new A.q5(this)),!1,s.c)},
am(a,b,c){this.e.i0(a,b,c)},
kF(){if(!this.y)return
this.e.ag(new A.q6(this))},
mp(a){var s,r,q,p=this.w,o=p.p(0,a)
if(o!=null)return o
s=A.vp()
r=this.r
s.width=A.w(r.width)
s.height=A.w(r.height)
q=A.bX(s.getContext("2d"))
if(q==null)q=A.P(q)
q.drawImage(r,0,0)
q.globalCompositeOperation="source-atop"
q.fillStyle="rgb("+a.a+", "+a.b+", "+a.c+")"
q.fillRect(0,0,A.w(r.width),A.w(r.height))
p.i(0,a,s)
return s}}
A.q5.prototype={
$1(a){var s=this.a
s.y=!0
s.kF()},
$S:3}
A.q6.prototype={
$3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=c.a,g=B.i2.p(0,h)
h=g==null?h:g
s=B.c.ad(h,32)
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
i=r.mp(c.b)
n.imageSmoothingEnabled=!1
n.drawImage.apply(n,[i,s*q,p*o,q,o,l,k,j,m])},
$S:43}
A.di.prototype={
jR(a,b,c,d,e){var s,r,q,p,o=A.cB(32,B.aH,e==null?B.y:e)
for(s=b+d,r=a+c,q=b;q<s;++q)for(p=a;p<r;++p)this.am(p,q,o)},
cl(a,b,c,d){return this.jR(a,b,c,d,null)},
dc(a,b,c,d,e){var s,r,q
if(d==null)d=B.aH
if(e==null)e=B.y
for(s=c.length,r=0;r<s;++r){q=a+r
if(q>=this.gaQ())break
this.am(q,b,new A.W(c.charCodeAt(r),d,e))}},
k(a,b,c,d){return this.dc(a,b,c,d,null)},
pu(a,b,c){return this.dc(a,b,c,null,null)},
b8(a,b,c,d){return new A.aS(new A.d(c,d),a,b,this)}}
A.hs.prototype={}
A.f8.prototype={
gjf(){var s,r=this,q=r.r
if(q===$){s=A.wn(r.gnA())
r.r!==$&&A.e9()
r.r=s
q=s}return q},
soL(a){var s,r,q,p,o=this
if(o.e!=null)return
s=v.G
r=A.bX(A.P(s.document).body)
r.toString
q=t.gX
p=q.h("~(1)?")
q=q.c
o.e=A.dW(r,"keydown",p.a(o.gmE()),!1,q)
s=A.bX(A.P(s.document).body)
s.toString
o.f=A.dW(s,"keyup",p.a(o.gmG()),!1,q)},
spj(a){var s=this
if(s.w)return
s.w=!0
s.y=null
A.w(A.P(v.G.window).requestAnimationFrame(s.gjf()))},
l5(a){var s,r,q=this,p=q.c.e.a.b.b,o=a.e.a.b.b,n=p.a!==o.a||p.b!==o.b
q.c=a
q.d=!0
if(n)for(p=q.b,o=p.length,s=a.e.a.b.b,r=0;r<p.length;p.length===o||(0,A.o)(p),++r)p[r].e2(s)},
a4(a){var s=this
s.$ti.h("t<1>").a(a)
a.jm(s)
B.a.j(s.b,a)
s.eA()},
b6(a){var s,r,q,p=this.b
if(0>=p.length)return A.c(p,-1)
s=p.pop()
s.a=null
r=p.length
q=r-1
if(!(q>=0))return A.c(p,q)
p[q].dA(s,a)
this.eA()},
aa(){return this.b6(null)},
bU(a){var s,r=this
r.$ti.h("t<1>").a(a)
s=r.b
if(0>=s.length)return A.c(s,-1)
s.pop().a=null
a.jm(r)
B.a.j(s,a)
r.eA()},
cG(){var s,r
for(s=this.b,r=0;r<s.length;++r)s[r].bu()
if(this.d)this.eA()},
mF(a){var s,r,q,p=A.w(a.keyCode)
if(A.w(a.location)===3){A:{if(48===p){s=96
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
r=this.a.a.p(0,new A.y(p,A.e_(a.shiftKey),A.e_(a.altKey)))
q=B.a.gcB(this.b)
if(r!=null){a.preventDefault()
if(q.a7(r))return}s=A.e_(a.shiftKey)
if(q.a9(p,A.e_(a.altKey),s))a.preventDefault()},
mH(a){var s,r,q=A.w(a.keyCode)
if(q===59)q=186
s=B.a.gcB(this.b)
r=A.e_(a.shiftKey)
if(s.f3(q,A.e_(a.altKey),r))a.preventDefault()},
nB(a){var s,r=this
A.e0(a)
s=r.y
if(s!=null){if(a-s>16.666666666666668){r.cG()
r.y=a}}else{r.cG()
r.y=a}if(r.w)A.w(A.P(v.G.window).requestAnimationFrame(r.gjf()))},
eA(){var s,r,q=this.c
q.cl(0,0,q.gaQ(),q.gan())
for(s=this.b,r=s.length-1;r>=0;--r){if(!(r<s.length))return A.c(s,r)
if(!s[r].gbn())break}if(r<0)r=0
for(;r<s.length;++r)s[r].ag(q)
this.d=!1
q.kF()}}
A.t.prototype={
gbn(){return!1},
jm(a){A.z(this).h("f8<t.T>").a(a)
this.a=a
this.e2(a.c.e.a.b.b)},
K(){var s=this.a
if(s==null)return
s.d=!0},
a7(a){A.z(this).h("t.T").a(a)
return!1},
a9(a,b,c){return!1},
f3(a,b,c){return!1},
dA(a,b){A.z(this).h("t<t.T>").a(a)},
bu(){},
ag(a){},
e2(a){}}
A.a8.prototype={
lg(a,b,c,d){var s,r,q,p,o,n,m,l=this
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
aW(a,b,c){var s=this
s.$ti.c.a(c)
s.l(a,b)
B.a.i(s.a,b*s.b.b.a+a,c)},
gN(a){var s=this.a
return new J.aZ(s,s.length,A.M(s).h("aZ<1>"))},
l(a,b){if(a<0||a>=this.b.b.a)throw A.n(A.ho(a,"x"))
if(b<0||b>=this.b.b.b)throw A.n(A.ho(b,"y"))}}
A.iY.prototype={
oS(a){var s=this.a,r=this.b
if(!A.ud(s,r,a))return!1
if(r>0&&A.ud(s,r-1,a))return!1
return!0},
gN(a){return A.w2(this,!1)}}
A.lF.prototype={
gH(){var s=this.b
return new A.d(s.b,s.c)},
q(){var s,r,q,p,o,n
for(s=this.b,r=this.a,q=r.a,p=r.b,o=this.c;s.q();){n=new A.d(s.b,s.c)
if(o){if(r.oS(n))return!0}else if(A.ud(q,p,n))return!0}return!1},
$ia5:1}
A.au.prototype={
aK(){return"Direction."+this.b},
gb9(){switch(this.a){case 0:var s=B.r
break
case 1:s=B.T
break
case 2:s=B.L
break
case 3:s=B.Q
break
case 4:s=B.O
break
case 5:s=B.P
break
case 6:s=B.K
break
case 7:s=B.S
break
case 8:s=B.R
break
default:s=null}return s},
gba(){switch(this.a){case 0:var s=B.r
break
case 1:s=B.Q
break
case 2:s=B.O
break
case 3:s=B.P
break
case 4:s=B.K
break
case 5:s=B.S
break
case 6:s=B.R
break
case 7:s=B.T
break
case 8:s=B.L
break
default:s=null}return s},
gbE(){switch(this.a){case 0:var s=B.r
break
case 1:s=B.R
break
case 2:s=B.T
break
case 3:s=B.L
break
case 4:s=B.Q
break
case 5:s=B.O
break
case 6:s=B.P
break
case 7:s=B.K
break
case 8:s=B.S
break
default:s=null}return s},
gbS(){switch(this.a){case 0:var s=B.r
break
case 1:s=B.O
break
case 2:s=B.P
break
case 3:s=B.K
break
case 4:s=B.S
break
case 5:s=B.R
break
case 6:s=B.T
break
case 7:s=B.L
break
case 8:s=B.Q
break
default:s=null}return s},
gcI(){switch(this.a){case 0:var s=B.r
break
case 1:s=B.K
break
case 2:s=B.S
break
case 3:s=B.R
break
case 4:s=B.T
break
case 5:s=B.L
break
case 6:s=B.Q
break
case 7:s=B.O
break
case 8:s=B.P
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
A.lI.prototype={}
A.m8.prototype={
gH(){return this.a},
q(){var s,r,q=this,p=q.a.F(0,q.e)
q.a=p
s=q.b=q.b+q.d
r=q.c
if(s*2>=r){q.a=p.F(0,q.f)
q.b=s-r}return!0},
$ia5:1}
A.Y.prototype={
gbO(){var s=this.a.a
return Math.min(s,s+this.b.a)},
gbT(){var s=this.a.b
return Math.min(s,s+this.b.b)},
ge3(){var s=this.a.a
return Math.max(s,s+this.b.a)},
geL(){var s=this.a.b
return Math.max(s,s+this.b.b)},
ghf(){var s=this
return new A.d(B.c.A(s.gbO()+s.ge3(),2),B.c.A(s.gbT()+s.geL(),2))},
t(a){return"("+this.a.t(0)+")-("+this.b.t(0)+")"},
bN(a){var s=this.a,r=this.b,q=a*2
return new A.Y(new A.d(s.a-a,s.b-a),new A.d(r.a+q,r.b+q))},
G(a,b){var s,r=this.a,q=r.a
if(b.gm()<q)return!1
s=this.b
if(b.gm()>=q+s.a)return!1
r=r.b
if(b.gn()<r)return!1
if(b.gn()>=r+s.b)return!1
return!0},
gN(a){var s=this.a
return new A.cK(this,s.a-1,s.b)},
kK(){var s,r,q,p,o,n=this,m=n.b,l=m.a,k=l>1
if(k&&m.b>1){s=A.a([],t.l)
for(r=n.gbO(),k=n.a,q=k.a,l=q+l,p=Math.max(q,l),k=k.b,m=k+m.b;r<p;++r){B.a.j(s,new A.d(r,Math.min(k,m)))
B.a.j(s,new A.d(r,Math.max(k,m)-1))}for(o=n.gbT()+1,m=Math.max(k,m);o<m-1;++o){B.a.j(s,new A.d(Math.min(q,l),o))
B.a.j(s,new A.d(p-1,o))}return s}else if(k&&m.b===1)return new A.Y(new A.d(n.gbO(),n.gbT()),new A.d(l,1))
else{m=m.b
if(m>=1&&l===1)return new A.Y(new A.d(n.gbO(),n.gbT()),new A.d(1,m))}return B.hP}}
A.cK.prototype={
gH(){return new A.d(this.b,this.c)},
q(){var s=this,r=s.a
if(++s.b>=r.ge3()){s.b=r.a.a;++s.c}return s.c<r.geL()},
$ia5:1}
A.qd.prototype={
bq(a,b){if(b==null){b=a
a=0}return this.a.a1(b-a)+a},
T(a){return this.bq(a,null)},
aw(a,b){if(b==null){b=a
a=0}return this.a.a1(b+1-a)+a},
k5(a){return this.aw(a,null)},
aC(a,b){var s=this.a
if(b==null)return s.hz()*a
else return s.hz()*(b-a)+a},
aO(a){return this.aC(a,null)},
pe(a,b){var s=B.e.bM(b)
return this.aO(1)<b-s?s+1:s},
kH(a,b,c){var s,r
c.h("D<0>").a(b)
s=this.T(b.length)
if(!(s>=0&&s<b.length))return A.c(b,s)
r=b[s]
B.a.i(b,s,B.a.gcB(b))
B.a.kE(b)
return r},
cK(a,b){var s
if(b<0)throw A.n(A.aC('The argument "range" must be zero or greater.',null))
s=this.k5(b)
if(s<=this.k5(b))return a+s
else return a-b-1+s},
hM(a,b){var s=this.a
for(;;){if(!(s.a1(b)===0))break;++a}return a}}
A.lj.prototype={
gb3(){return Math.max(Math.abs(this.gm()),Math.abs(this.gn()))},
gaF(){var s=this
return s.gm()*s.gm()+s.gn()*s.gn()},
gI(a){return Math.sqrt(this.gaF())},
gki(){var s,r,q,p=this,o=null,n=p.gm(),m=p.gn()
A:{s=n<0
r=s
if(r&&p.gn()/p.gm()>=2){r=B.L
break A}if(s&&p.gn()/p.gm()>=0.5){r=B.T
break A}if(s&&p.gn()/p.gm()>=-0.5){r=B.R
break A}if(s&&p.gn()/p.gm()>=-2){r=B.S
break A}if(s){r=B.K
break A}q=n>0
r=q
if(r&&p.gn()/p.gm()>=2){r=B.K
break A}if(q&&p.gn()/p.gm()>=0.5){r=B.P
break A}if(q&&p.gn()/p.gm()>=-0.5){r=B.O
break A}if(q&&p.gn()/p.gm()>=-2){r=B.Q
break A}if(q){r=B.L
break A}if(m<0){r=B.L
break A}if(m>0){r=B.K
break A}r=B.r
break A}return r},
gbB(){var s,r=A.a([],t.l)
for(s=0;s<8;++s)r.push(this.F(0,B.a5[s]))
return r},
gdF(){var s,r=A.a([],t.l)
for(s=0;s<4;++s)r.push(this.F(0,B.at[s]))
return r},
aI(a,b){A.w(b)
return new A.d(this.gm()*b,this.gn()*b)},
F(a,b){var s,r=this
A:{if(t.u.b(b)){s=new A.d(r.gm()+b.gm(),r.gn()+b.gn())
break A}if(A.fl(b)){s=new A.d(r.gm()+b,r.gn()+b)
break A}s=A.a_(A.aC("Operand must be an int or Vec.",null))}return s},
S(a,b){var s,r,q,p
A:{s=this.gm()
r=b.gm()
q=this.gn()
p=b.gn()
break A}return new A.d(s-r,q-p)},
bg(a,b){var s
A:{if(t.u.b(b)){s=this.gaF()>b.gaF()
break A}if(typeof b=="number"){s=this.gaF()>b*b
break A}s=A.a_(A.aC("Operand must be a number or Vec.",null))}return s},
cN(a,b){var s
A:{s=this.gaF()>=b*b
break A}return s},
ea(a,b){var s
A:{if(t.u.b(b)){s=this.gaF()<b.gaF()
break A}if(typeof b=="number"){s=this.gaF()<b*b
break A}s=A.a_(A.aC("Operand must be a number or Vec.",null))}return s},
e9(a,b){var s
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
A.mz.prototype={}
A.tO.prototype={}
A.hV.prototype={}
A.lK.prototype={}
A.hW.prototype={$iz9:1}
A.rr.prototype={
$1(a){return this.a.$1(A.P(a))},
$S:3}
A.l8.prototype={}
A.tl.prototype={
$1(a){A.uh()},
$S:3}
A.rV.prototype={
$1(a){A.zX()},
$S:3}
A.rW.prototype={
$1(a){var s,r,q,p,o=$.nn
if(o==null)return
s=B.e.L(A.by(a.offsetX))
r=B.e.L(A.by(a.offsetY))
q=this.a
s=B.c.cc(s,q.z)
q=B.c.cc(r,q.Q)
r=o.w
r===$&&A.b()
r=r.r
p=new A.d(s,q).F(0,new A.d(r.gbO(),r.gbT()))
if(!r.G(0,p))return
s=o.b.x
s===$&&A.b()
s=s.w.B(p.a,p.b)
if(s instanceof A.aa){if($.fj.G(0,s))$.fj.ac(0,s)
else $.fj.j(0,s)
A.uh()}},
$S:3}
A.rX.prototype={
$1(a){var s,r,q,p,o
for(s=this.a,r=v.G,q=0;q<$.fk.length;++q){p=$.fk[q]
if(p.a===s){$.bW.b=p
p=A.bX(A.P(r.document).querySelector("#game"))
p.toString
o=$.bW.b
if(o===$.bW)A.a_(A.dH(""))
p.append(o.b)}else p.b.remove()}A.wv()
A.uh()
A.P(A.P(r.window).localStorage).setItem("font",s)},
$S:3}
A.t0.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g=v.G,f=A.P(A.P(g.document).querySelectorAll(".debug"))
for(s=0;s<A.w(f.length);++s){r=A.bX(A.P(g.document).body)
r.toString
q=A.bX(f.item(s))
q.toString
A.P(r.removeChild(q))}p=$.nn
if(p==null)return
r=A.z($.fj)
$.fj.mc(r.h("B(1)").a(new A.t1()),!0)
for(r=A.u8($.fj,$.fj.r,r.c),q=r.$ti.c;r.q();){o=r.d
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
i=A.ye(o)
if(i==null)continue
h=A.P(A.P(g.document).createElement("pre"))
h.className="debug"
A.P(h.style).display="inline-block"
o=$.bW.b
if(o===$.bW)A.a_(A.dH(""))
n=o.d
m=o.b
l=B.c.L(A.w(m.offsetLeft))
o=o.e
m=B.c.L(A.w(m.offsetTop))
A.P(h.style).left=B.c.t((j.a+1)*n+l+4)
A.P(h.style).top=B.c.t(j.b*o+m+2)
h.textContent=i
A.P(A.bX(A.P(g.document).body).children)}}},
$S:0}
A.t1.prototype={
$1(a){return t.B.a(a).z<=0},
$S:132};(function aliases(){var s=J.dd.prototype
s.le=s.t
s=A.fF.prototype
s.ld=s.V
s=A.ha.prototype
s.ia=s.bo
s=A.cD.prototype
s.fv=s.a9
s.fu=s.a7
s=A.dU.prototype
s.ej=s.a9
s.lf=s.ag
s=A.hZ.prototype
s.ib=s.cr})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._static_1,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_2u,m=hunkHelpers.installInstanceTearOff,l=hunkHelpers._instance_0u
s(J,"A5","yz",133)
r(J.r.prototype,"gnW","j",128)
q(A,"Ai","vL",2)
p(A,"AI","zl",22)
p(A,"AJ","zm",22)
p(A,"AK","zn",22)
q(A,"wD","AB",0)
p(A,"AP","zT",33)
p(A,"wI","Ak",5)
p(A,"AT","wt",5)
p(A,"AU","wu",5)
p(A,"Z","A4",4)
p(A,"Bp","zP",8)
p(A,"Bs","Aq",8)
p(A,"Bq","zQ",8)
p(A,"Bt","Ar",8)
p(A,"Bo","zO",8)
p(A,"Br","Ap",8)
o(A.eZ.prototype,"goG","oH","1(q)")
p(A,"uj","Ao",19)
p(A,"mF","An",4)
var k
n(k=A.ed.prototype,"gl1","l2",81)
n(k,"gl3","l4",82)
m(A.bQ.prototype,"gkM",0,1,null,["$2$wasUnequipped","$1"],["fg","c8"],85,0,0)
o(A.fS.prototype,"gmj","bK",34)
s(A,"B8","yu",18)
s(A,"wO","yr",18)
s(A,"B7","yt",18)
s(A,"th","ys",18)
s(A,"Bg","yM",25)
s(A,"wP","yL",25)
s(A,"wQ","yN",25)
o(k=A.eD.prototype,"ghX","fj",38)
o(k,"gmA","mB",10)
o(A.hy.prototype,"ghX","fj",38)
o(k=A.dU.prototype,"glB","lC",10)
o(k,"geu","bY",12)
l(A.hT.prototype,"gj3","ey",0)
o(A.id.prototype,"geu","bY",12)
o(A.ic.prototype,"geu","bY",12)
o(A.fb.prototype,"geu","bY",12)
l(k=A.hP.prototype,"gmW","mX",0)
l(k,"gmv","mw",0)
l(k,"gm2","m3",0)
l(k,"gnU","nV",0)
l(k,"gmm","mn",0)
l(k,"gmI","mJ",0)
l(k,"glH","lI",0)
l(k,"gmU","mV",0)
l(k,"gnG","nH",0)
l(k,"gnE","nF",0)
l(k,"gnI","nJ",0)
o(k=A.f8.prototype,"gmE","mF",3)
o(k,"gmG","mH",3)
o(k,"gnA","nB",131)
q(A,"Be","wv",0)
p(A,"B9","zR",10)
p(A,"Ba","zS",12)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.a0,null)
q(A.a0,[A.tR,J.jS,A.hw,J.aZ,A.al,A.X,A.qi,A.k,A.c2,A.bl,A.cR,A.hH,A.hJ,A.bn,A.aA,A.dl,A.co,A.el,A.i1,A.d5,A.rb,A.pN,A.ie,A.aB,A.pd,A.c1,A.cF,A.dI,A.h0,A.i2,A.hQ,A.l2,A.mu,A.rp,A.c4,A.lV,A.my,A.rP,A.ag,A.cu,A.hY,A.bT,A.lv,A.hD,A.il,A.f3,A.m9,A.cU,A.dY,A.j3,A.j5,A.rE,A.en,A.rq,A.ku,A.hC,A.rs,A.og,A.aM,A.aP,A.mv,A.qH,A.dQ,A.jn,A.m3,A.mj,A.jD,A.a1,A.G,A.eX,A.fL,A.eu,A.mf,A.fH,A.fD,A.rm,A.cd,A.ro,A.aH,A.hR,A.mb,A.bx,A.ju,A.rn,A.lA,A.ac,A.i8,A.lt,A.b8,A.mo,A.nd,A.i7,A.be,A.kw,A.fA,A.nt,A.jb,A.eE,A.p6,A.hj,A.pP,A.pY,A.hX,A.rK,A.dN,A.ra,A.r5,A.fd,A.d2,A.jF,A.cx,A.dj,A.b5,A.d4,A.df,A.b6,A.az,A.bY,A.dC,A.fN,A.jm,A.aI,A.jC,A.hL,A.k6,A.hb,A.eZ,A.bo,A.bU,A.mh,A.ia,A.pJ,A.hg,A.V,A.cO,A.cy,A.dz,A.cC,A.d9,A.h9,A.aD,A.cI,A.hB,A.d8,A.b9,A.cc,A.ed,A.c_,A.eC,A.dy,A.bH,A.r8,A.aL,A.kM,A.dg,A.iT,A.as,A.nl,A.eJ,A.cg,A.oh,A.mn,A.pa,A.eO,A.qr,A.qt,A.ad,A.bw,A.dT,A.dS,A.t,A.fB,A.j7,A.fI,A.fM,A.cA,A.jJ,A.jM,A.jU,A.k9,A.kv,A.l7,A.ld,A.f,A.l,A.jV,A.cV,A.em,A.pR,A.lu,A.qI,A.l4,A.aK,A.aq,A.a9,A.N,A.bu,A.c3,A.nH,A.E,A.W,A.k1,A.y,A.di,A.f8,A.lF,A.m8,A.cK,A.qd,A.lj,A.mz,A.tO,A.hW,A.l8])
q(J.jS,[J.fY,J.h_,J.h2,J.h1,J.h3,J.dG,J.da])
q(J.h2,[J.dd,J.r,A.eK,A.he])
q(J.dd,[J.kz,J.dk,J.db])
r(J.jX,A.hw)
r(J.p2,J.r)
q(J.dG,[J.fZ,J.jY])
q(A.al,[A.dc,A.cP,A.jZ,A.lg,A.kT,A.lM,A.h5,A.iH,A.ce,A.hK,A.lf,A.dP,A.j4])
r(A.f7,A.X)
r(A.d6,A.f7)
q(A.k,[A.K,A.dK,A.aj,A.dR,A.hI,A.hO,A.i0,A.ls,A.mt,A.R,A.lk,A.lL,A.m1,A.a8,A.iY,A.Y])
q(A.K,[A.aF,A.b0,A.cG,A.bj])
q(A.aF,[A.hG,A.aN,A.cL,A.h6,A.m5])
r(A.dB,A.dK)
r(A.fK,A.dR)
q(A.co,[A.fe,A.ff])
r(A.O,A.fe)
r(A.a2,A.ff)
q(A.el,[A.bO,A.dF])
q(A.d5,[A.j_,A.j0,A.l6,A.td,A.tf,A.rj,A.ri,A.rA,A.qU,A.rM,A.pq,A.ok,A.ol,A.oj,A.re,A.nc,A.nB,A.nF,A.rf,A.od,A.pX,A.ta,A.nN,A.nR,A.nS,A.nO,A.nP,A.nV,A.nW,A.nQ,A.nT,A.nU,A.oC,A.oF,A.n6,A.n7,A.n4,A.n9,A.n3,A.n8,A.t9,A.tr,A.tp,A.tt,A.qs,A.nu,A.p9,A.p8,A.qe,A.r7,A.r6,A.ny,A.nz,A.nA,A.nL,A.nM,A.os,A.pf,A.ph,A.tc,A.pZ,A.q_,A.q3,A.q4,A.q1,A.q2,A.q0,A.pM,A.pL,A.ps,A.qh,A.qg,A.oa,A.o8,A.ot,A.qG,A.o_,A.nY,A.oz,A.pC,A.pD,A.pE,A.pB,A.ng,A.ne,A.nf,A.na,A.nb,A.oe,A.pb,A.qC,A.qF,A.qE,A.o6,A.o2,A.o7,A.o3,A.o5,A.nG,A.or,A.oq,A.oo,A.r2,A.r3,A.oQ,A.oR,A.pv,A.py,A.pz,A.pw,A.px,A.r9,A.om,A.pG,A.pH,A.pI,A.pF,A.ql,A.qm,A.qk,A.qA,A.qy,A.o0,A.o1,A.qS,A.qT,A.qP,A.qQ,A.qJ,A.qZ,A.rN,A.rT,A.rU,A.q5,A.q6,A.rr,A.tl,A.rV,A.rW,A.rX,A.t1])
q(A.j_,[A.pV,A.rk,A.rl,A.rQ,A.rt,A.rw,A.rv,A.ru,A.rz,A.ry,A.rx,A.qV,A.rL,A.t3,A.nC,A.oG,A.oD,A.oL,A.oM,A.oK,A.oH,A.oN,A.oI,A.oB,A.oE,A.oJ,A.n5,A.t8,A.t5,A.t6,A.tk,A.tq,A.tj,A.tn,A.nx,A.nv,A.qa,A.qb,A.q8,A.qc,A.q9,A.q7,A.no,A.nq,A.nr,A.np,A.pg,A.pl,A.pm,A.pj,A.pk,A.pn,A.qo,A.oY,A.qB,A.nX,A.oP,A.pu,A.qv,A.qw,A.r0,A.r_,A.t0])
r(A.hi,A.cP)
q(A.l6,[A.l1,A.ef])
q(A.aB,[A.c0,A.m4])
q(A.j0,[A.p3,A.te,A.rB,A.pr,A.rF,A.oi,A.nh,A.ni,A.nD,A.nE,A.rI,A.ts,A.nw,A.p7,A.rH,A.ox,A.ow,A.ov,A.ou,A.o9,A.pi,A.qp,A.qq,A.nZ,A.p_,A.oV,A.oU,A.oT,A.p0,A.oW,A.oX,A.oZ,A.of,A.pc,A.qD,A.o4,A.op,A.oO,A.pp,A.po,A.qn,A.qz,A.qx,A.pT,A.pU,A.qR,A.qK,A.qL,A.qM,A.qN,A.qO,A.nJ,A.nK,A.qY,A.r4,A.rh,A.rg])
r(A.h4,A.c0)
q(A.he,[A.ki,A.eL])
q(A.eL,[A.i3,A.i5])
r(A.i4,A.i3)
r(A.hc,A.i4)
r(A.i6,A.i5)
r(A.hd,A.i6)
q(A.hc,[A.kj,A.kk])
q(A.hd,[A.kl,A.km,A.kn,A.ko,A.kp,A.hf,A.kq])
r(A.ig,A.lM)
r(A.ml,A.il)
r(A.ib,A.f3)
r(A.cT,A.ib)
r(A.k0,A.h5)
r(A.k_,A.j3)
q(A.j5,[A.p5,A.p4])
r(A.rD,A.rE)
q(A.ce,[A.eW,A.jQ])
q(A.a1,[A.lN,A.lQ,A.l0,A.lw,A.lG,A.mr,A.mA])
r(A.jp,A.lN)
r(A.jt,A.lQ)
q(A.G,[A.jw,A.kb,A.lz,A.k7,A.fF,A.ep,A.es,A.lB,A.lC,A.lD,A.lT,A.md,A.me,A.f9,A.eH,A.lR,A.ew,A.ev,A.eA,A.jL,A.kL,A.eB,A.eI,A.kd,A.eP,A.kB,A.iE,A.f0,A.f_,A.kX,A.f6,A.mc,A.jx,A.iI,A.jT,A.kx,A.lm,A.ks,A.iZ,A.kO,A.iW])
q(A.eX,[A.ln,A.iF,A.hn])
q(A.l0,[A.ly,A.lE,A.lH,A.lJ,A.lO,A.lP,A.lU,A.lY,A.lZ,A.m_,A.m0,A.m6,A.m7,A.ma,A.mi,A.mm,A.mq,A.mx,A.mB,A.mC])
r(A.iM,A.ly)
r(A.iV,A.lE)
r(A.j6,A.lH)
r(A.jh,A.lJ)
r(A.jq,A.lO)
r(A.jr,A.lP)
r(A.jz,A.lU)
r(A.jG,A.lY)
r(A.jH,A.lZ)
r(A.jN,A.m_)
r(A.jP,A.m0)
r(A.k3,A.m6)
r(A.k5,A.m7)
r(A.kc,A.ma)
r(A.kH,A.mi)
r(A.kU,A.mm)
r(A.kW,A.mq)
r(A.l9,A.mx)
r(A.lq,A.mB)
r(A.lr,A.mC)
r(A.iK,A.lw)
q(A.kb,[A.lx,A.j2,A.ms])
r(A.iL,A.lx)
r(A.j1,A.lG)
r(A.kZ,A.mr)
r(A.l_,A.ms)
r(A.lo,A.mA)
r(A.iN,A.lz)
q(A.k7,[A.iR,A.lc])
q(A.fF,[A.ez,A.lS,A.eR,A.ee,A.eo,A.eY])
r(A.ex,A.lS)
q(A.rq,[A.eq,A.dL,A.dh,A.fX,A.bJ,A.r1,A.hu,A.hv,A.jK,A.bR,A.hh,A.dM,A.cl,A.f4,A.fa,A.iD,A.lI])
r(A.eh,A.lB)
r(A.ei,A.lC)
r(A.iU,A.lD)
r(A.ey,A.lT)
r(A.eS,A.md)
r(A.kA,A.me)
r(A.jv,A.lR)
q(A.kL,[A.jO,A.mk])
q(A.eu,[A.ka,A.kg,A.mp])
r(A.kK,A.mk)
q(A.mc,[A.eM,A.eN])
r(A.bS,A.mf)
q(A.bS,[A.jg,A.jy,A.jo,A.js,A.kG,A.kV])
r(A.jA,A.fH)
q(A.rm,[A.nm,A.oA])
q(A.ro,[A.m2,A.mw])
q(A.rn,[A.ob,A.iS])
q(A.b8,[A.bq,A.kJ,A.d7,A.jI,A.fU,A.bP,A.b1,A.bK,A.bv])
r(A.fC,A.kJ)
r(A.ae,A.mo)
q(A.ae,[A.d3,A.iG,A.iO,A.iP,A.ha])
q(A.ha,[A.iJ,A.iQ,A.k2,A.kY,A.l3,A.lp])
q(A.kw,[A.rG,A.pA,A.rO])
q(A.be,[A.ej,A.ek,A.kS,A.eG,A.eQ,A.f1])
q(A.kS,[A.er,A.eF])
q(A.jT,[A.je,A.ji,A.le,A.lh,A.la])
q(A.dj,[A.bD,A.aG,A.L])
q(A.bY,[A.fT,A.fE,A.hl,A.dA,A.fQ,A.ht,A.hk])
q(A.hL,[A.ll,A.eU])
q(A.dz,[A.aR,A.kQ,A.c5,A.dD])
q(A.bD,[A.aw,A.aa])
r(A.cm,A.b9)
q(A.cm,[A.hE,A.fy,A.hN,A.fW])
r(A.et,A.lL)
r(A.bQ,A.m1)
q(A.eJ,[A.cf,A.cv,A.ct])
q(A.t,[A.iC,A.fP,A.jc,A.fS,A.h8,A.l5,A.hM,A.fV,A.cD,A.eD,A.dU,A.jE,A.k8,A.kr,A.kC,A.hP,A.cp])
q(A.jc,[A.fx,A.kt])
q(A.cD,[A.jk,A.jW,A.ke])
q(A.eD,[A.jf,A.jj,A.ky,A.mg,A.hy,A.lb,A.li])
q(A.cV,[A.hS,A.hU,A.i9,A.fg])
q(A.mg,[A.kE,A.kF])
q(A.dU,[A.cS,A.i_,A.hT,A.id,A.fb])
q(A.cS,[A.hZ,A.ic])
q(A.hZ,[A.lX,A.lW])
q(A.em,[A.kh,A.f2])
q(A.pR,[A.oS,A.pe,A.qj,A.qu])
q(A.kC,[A.fG,A.fO,A.fR,A.hx])
q(A.cp,[A.mD,A.mE])
q(A.di,[A.aS,A.hs])
r(A.kR,A.hs)
r(A.au,A.lI)
r(A.d,A.mz)
r(A.hV,A.hD)
r(A.lK,A.hV)
s(A.f7,A.dl)
s(A.i3,A.X)
s(A.i4,A.aA)
s(A.i5,A.X)
s(A.i6,A.aA)
s(A.lN,A.V)
s(A.lQ,A.V)
s(A.ly,A.V)
s(A.lE,A.V)
s(A.lH,A.V)
s(A.lJ,A.V)
s(A.lO,A.cO)
s(A.lP,A.V)
s(A.lU,A.V)
s(A.lY,A.V)
s(A.lZ,A.V)
s(A.m_,A.cO)
s(A.m0,A.V)
s(A.m6,A.V)
s(A.m7,A.V)
s(A.ma,A.V)
s(A.mi,A.V)
s(A.mm,A.V)
s(A.mq,A.V)
s(A.mx,A.V)
s(A.mB,A.V)
s(A.mC,A.V)
s(A.lw,A.cy)
s(A.lx,A.jF)
s(A.lG,A.cy)
s(A.mr,A.cy)
s(A.ms,A.jF)
s(A.mA,A.cO)
s(A.lz,A.fL)
s(A.lS,A.cx)
s(A.lB,A.cx)
s(A.lC,A.cx)
s(A.lD,A.cx)
s(A.lT,A.cx)
s(A.md,A.cx)
s(A.me,A.cx)
s(A.lR,A.fL)
s(A.mk,A.fL)
s(A.mf,A.aD)
s(A.mo,A.aD)
s(A.lL,A.eC)
s(A.m1,A.eC)
s(A.lI,A.lj)
s(A.mz,A.lj)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{e:"int",F:"double",ak:"num",q:"String",B:"bool",aP:"Null",D:"List",a0:"Object",bk:"Map",aE:"JSObject"},mangledNames:{},types:["~()","B(d)","e()","~(aE)","e(e)","q(q)","~(L)","F()","G(d)","~(q,@)","B(L)","~(d)","e?(L)","B(au)","e(e,cc)","~(L,d)","E(E,E)","D<q>(e)","e(aL,aL)","F(e)","~(ae,e)","B(d9)","~(~())","fd()","e(e,q)","e(as,as)","q(cj)","aP(e)","F(F,df)","F(F,cc)","~(aa)","B(b8)","~(cd)","@(@)","~(au)","e(aa)","B(aL)","B(as)","e(L)","aP()","~(di)","e(e,e)","D<d>()","~(e,e,W)","aP(@)","~(q,q)","~(a0?,a0?)","B(cI)","F(F,d4)","f0()","q(d3)","B(B,e)","~(bs,F)","B(F,F)","~(q,F)","aP(~())","er()","ej()","ek()","eG()","f1()","eF()","eQ()","~(as,d)","d()","F(e,e)","@(q)","eN(d)","eM(d)","@(@,q)","eV<ak>()","~(e,e,e)","D<d>(e)","~(e,e)","B(F)","aP(d,b6,ak,e)","aP(d)","aP(a0,f5)","~(e)","aP(F)","f9(e)","~(dC,e(e))","~(cl,e(e))","e(e,L?)","B(q)","dy(L{wasUnequipped:B})","L(L)","eh(e)","ei(d,b6,ak,e)","ex(e)","ey(d,b6,ak,e)","eR(e)","~(d,e)","dS(d)","bQ()","~(d,bQ)","eS(d,b6,ak,e)","e(aM<e,a1>,aM<e,a1>)","~(q,e,e)","~(e,au,q)","ee(e)","~(dg,bQ)","eo(e)","k<aq<L?>>()","eH(d,b6,ak,e)","k<aq<aL>>()","B(e)","es()","k<aq<as>>()","ep()","eP()","eY()","eI()","q(cI)","q(cC)","ez()","e(aa,aa)","~(cm)","q(b6)","~(q,E[E?])","B(av)","f6()","~(q,E,e{total:e?})","B(bD)","B(cC)","~(q,dg)","B(bR)","eA()","~(a0?)","e(e,N)","f_(d)","~(ak)","B(aa)","e(@,@)","ew()","ev(d)","eB()","~(au,B)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.O&&a.b(c.a)&&b.b(c.b),"4;":a=>b=>b instanceof A.a2&&A.Bh(a,b.a)}}
A.zG(v.typeUniverse,JSON.parse('{"kz":"dd","dk":"dd","db":"dd","Cl":"eK","fY":{"B":[],"af":[]},"h_":{"af":[]},"h2":{"aE":[]},"dd":{"aE":[]},"r":{"D":["1"],"K":["1"],"aE":[],"k":["1"]},"jX":{"hw":[]},"p2":{"r":["1"],"D":["1"],"K":["1"],"aE":[],"k":["1"]},"aZ":{"a5":["1"]},"dG":{"F":[],"ak":[],"at":["ak"]},"fZ":{"F":[],"e":[],"ak":[],"at":["ak"],"af":[]},"jY":{"F":[],"ak":[],"at":["ak"],"af":[]},"da":{"q":[],"at":["q"],"pS":[],"af":[]},"dc":{"al":[]},"d6":{"X":["e"],"dl":["e"],"D":["e"],"K":["e"],"k":["e"],"X.E":"e","dl.E":"e"},"K":{"k":["1"]},"aF":{"K":["1"],"k":["1"]},"hG":{"aF":["1"],"K":["1"],"k":["1"],"aF.E":"1","k.E":"1"},"c2":{"a5":["1"]},"dK":{"k":["2"],"k.E":"2"},"dB":{"dK":["1","2"],"K":["2"],"k":["2"],"k.E":"2"},"bl":{"a5":["2"]},"aN":{"aF":["2"],"K":["2"],"k":["2"],"aF.E":"2","k.E":"2"},"aj":{"k":["1"],"k.E":"1"},"cR":{"a5":["1"]},"dR":{"k":["1"],"k.E":"1"},"fK":{"dR":["1"],"K":["1"],"k":["1"],"k.E":"1"},"hH":{"a5":["1"]},"hI":{"k":["1"],"k.E":"1"},"hJ":{"a5":["1"]},"hO":{"k":["1"],"k.E":"1"},"bn":{"a5":["1"]},"f7":{"X":["1"],"dl":["1"],"D":["1"],"K":["1"],"k":["1"]},"cL":{"aF":["1"],"K":["1"],"k":["1"],"aF.E":"1","k.E":"1"},"O":{"fe":[],"co":[]},"a2":{"ff":[],"co":[]},"el":{"bk":["1","2"]},"bO":{"el":["1","2"],"bk":["1","2"]},"i0":{"k":["1"],"k.E":"1"},"i1":{"a5":["1"]},"dF":{"el":["1","2"],"bk":["1","2"]},"hi":{"cP":[],"al":[]},"jZ":{"al":[]},"lg":{"al":[]},"ie":{"f5":[]},"d5":{"dE":[]},"j_":{"dE":[]},"j0":{"dE":[]},"l6":{"dE":[]},"l1":{"dE":[]},"ef":{"dE":[]},"kT":{"al":[]},"c0":{"aB":["1","2"],"tT":["1","2"],"bk":["1","2"],"aB.K":"1","aB.V":"2"},"b0":{"K":["1"],"k":["1"],"k.E":"1"},"c1":{"a5":["1"]},"cG":{"K":["1"],"k":["1"],"k.E":"1"},"cF":{"a5":["1"]},"bj":{"K":["aM<1,2>"],"k":["aM<1,2>"],"k.E":"aM<1,2>"},"dI":{"a5":["aM<1,2>"]},"h4":{"c0":["1","2"],"aB":["1","2"],"tT":["1","2"],"bk":["1","2"],"aB.K":"1","aB.V":"2"},"fe":{"co":[]},"ff":{"co":[]},"h0":{"z3":[],"pS":[]},"i2":{"hr":[],"cj":[]},"ls":{"k":["hr"],"k.E":"hr"},"hQ":{"a5":["hr"]},"l2":{"cj":[]},"mt":{"k":["cj"],"k.E":"cj"},"mu":{"a5":["cj"]},"eK":{"aE":[],"af":[]},"he":{"aE":[]},"ki":{"aE":[],"af":[]},"eL":{"bI":["1"],"aE":[]},"hc":{"X":["F"],"D":["F"],"bI":["F"],"K":["F"],"aE":[],"k":["F"],"aA":["F"]},"hd":{"X":["e"],"D":["e"],"bI":["e"],"K":["e"],"aE":[],"k":["e"],"aA":["e"]},"kj":{"X":["F"],"D":["F"],"bI":["F"],"K":["F"],"aE":[],"k":["F"],"aA":["F"],"af":[],"X.E":"F","aA.E":"F"},"kk":{"X":["F"],"D":["F"],"bI":["F"],"K":["F"],"aE":[],"k":["F"],"aA":["F"],"af":[],"X.E":"F","aA.E":"F"},"kl":{"X":["e"],"D":["e"],"bI":["e"],"K":["e"],"aE":[],"k":["e"],"aA":["e"],"af":[],"X.E":"e","aA.E":"e"},"km":{"X":["e"],"D":["e"],"bI":["e"],"K":["e"],"aE":[],"k":["e"],"aA":["e"],"af":[],"X.E":"e","aA.E":"e"},"kn":{"X":["e"],"D":["e"],"bI":["e"],"K":["e"],"aE":[],"k":["e"],"aA":["e"],"af":[],"X.E":"e","aA.E":"e"},"ko":{"X":["e"],"D":["e"],"bI":["e"],"K":["e"],"aE":[],"k":["e"],"aA":["e"],"af":[],"X.E":"e","aA.E":"e"},"kp":{"X":["e"],"D":["e"],"bI":["e"],"K":["e"],"aE":[],"k":["e"],"aA":["e"],"af":[],"X.E":"e","aA.E":"e"},"hf":{"X":["e"],"D":["e"],"bI":["e"],"K":["e"],"aE":[],"k":["e"],"aA":["e"],"af":[],"X.E":"e","aA.E":"e"},"kq":{"X":["e"],"D":["e"],"bI":["e"],"K":["e"],"aE":[],"k":["e"],"aA":["e"],"af":[],"X.E":"e","aA.E":"e"},"lM":{"al":[]},"ig":{"cP":[],"al":[]},"ag":{"a5":["1"]},"R":{"k":["1"],"k.E":"1"},"cu":{"al":[]},"bT":{"jB":["1"]},"il":{"w1":[]},"ml":{"il":[],"w1":[]},"eV":{"K":["1"],"k":["1"]},"cT":{"f3":["1"],"hz":["1"],"K":["1"],"k":["1"]},"cU":{"a5":["1"]},"X":{"D":["1"],"K":["1"],"k":["1"]},"aB":{"bk":["1","2"]},"h6":{"eV":["1"],"aF":["1"],"K":["1"],"k":["1"],"aF.E":"1","k.E":"1"},"dY":{"a5":["1"]},"f3":{"hz":["1"],"K":["1"],"k":["1"]},"ib":{"f3":["1"],"hz":["1"],"K":["1"],"k":["1"]},"m4":{"aB":["q","@"],"bk":["q","@"],"aB.K":"q","aB.V":"@"},"m5":{"aF":["q"],"K":["q"],"k":["q"],"aF.E":"q","k.E":"q"},"h5":{"al":[]},"k0":{"al":[]},"k_":{"j3":["a0?","q"]},"en":{"at":["en"]},"F":{"ak":[],"at":["ak"]},"e":{"ak":[],"at":["ak"]},"D":{"K":["1"],"k":["1"]},"ak":{"at":["ak"]},"hr":{"cj":[]},"hz":{"K":["1"],"k":["1"]},"q":{"at":["q"],"pS":[]},"iH":{"al":[]},"cP":{"al":[]},"ce":{"al":[]},"eW":{"al":[]},"jQ":{"al":[]},"hK":{"al":[]},"lf":{"al":[]},"dP":{"al":[]},"j4":{"al":[]},"ku":{"al":[]},"hC":{"al":[]},"mv":{"f5":[]},"dQ":{"za":[]},"m3":{"tZ":[]},"mj":{"tZ":[]},"jD":{"yc":[]},"jp":{"V":[],"a1":[]},"jt":{"V":[],"a1":[]},"jw":{"G":[]},"kb":{"G":[]},"ln":{"eX":[]},"iM":{"V":[],"a1":[]},"iV":{"V":[],"a1":[]},"j6":{"V":[],"a1":[]},"jh":{"V":[],"a1":[]},"jq":{"cO":[],"a1":[]},"jr":{"V":[],"a1":[]},"jz":{"V":[],"a1":[]},"jG":{"V":[],"a1":[]},"jH":{"V":[],"a1":[]},"jN":{"cO":[],"a1":[]},"jP":{"V":[],"a1":[]},"k3":{"V":[],"a1":[]},"k5":{"V":[],"a1":[]},"kc":{"V":[],"a1":[]},"kH":{"V":[],"a1":[]},"kU":{"V":[],"a1":[]},"kW":{"V":[],"a1":[]},"l0":{"a1":[]},"iF":{"eX":[]},"l9":{"V":[],"a1":[]},"lq":{"V":[],"a1":[]},"lr":{"V":[],"a1":[]},"iK":{"cy":[],"a1":[]},"iL":{"G":[]},"j1":{"cy":[],"a1":[]},"j2":{"G":[]},"kZ":{"cy":[],"a1":[]},"l_":{"G":[]},"lo":{"cO":[],"a1":[]},"iN":{"G":[]},"iR":{"G":[]},"ez":{"G":[]},"ex":{"G":[]},"eR":{"G":[]},"ee":{"G":[]},"eo":{"G":[]},"eY":{"G":[]},"fF":{"G":[]},"ep":{"G":[]},"es":{"G":[]},"eh":{"G":[]},"ei":{"G":[]},"ey":{"G":[]},"eS":{"G":[]},"f9":{"G":[]},"eH":{"G":[]},"iU":{"G":[]},"kA":{"G":[]},"ew":{"G":[]},"ev":{"G":[]},"jv":{"G":[]},"eA":{"G":[]},"jL":{"G":[]},"eB":{"G":[]},"jO":{"G":[]},"eI":{"G":[]},"ka":{"eu":[]},"kd":{"G":[]},"eP":{"G":[]},"kB":{"G":[]},"iE":{"G":[]},"f0":{"G":[]},"f_":{"G":[]},"kL":{"G":[]},"kK":{"G":[]},"kX":{"G":[]},"f6":{"G":[]},"eM":{"G":[]},"eN":{"G":[]},"mc":{"G":[]},"jg":{"bS":[],"aD":[]},"jy":{"bS":[],"aD":[]},"jA":{"fH":[]},"m2":{"bs":[]},"mw":{"bs":[]},"aH":{"bs":[]},"hR":{"bs":[]},"mb":{"bs":[]},"bx":{"bs":[]},"lA":{"dO":[]},"ac":{"dO":[]},"i8":{"dO":[]},"lt":{"dO":[]},"bq":{"b8":[]},"fC":{"b8":[]},"d7":{"b8":[]},"jI":{"b8":[]},"fU":{"b8":[]},"bP":{"b8":[]},"b1":{"b8":[]},"bK":{"b8":[]},"bv":{"b8":[]},"jo":{"bS":[],"aD":[]},"js":{"bS":[],"aD":[]},"kG":{"bS":[],"aD":[]},"kV":{"bS":[],"aD":[]},"d3":{"ae":[],"aD":[],"at":["ae"]},"iG":{"ae":[],"aD":[],"at":["ae"]},"iO":{"ae":[],"aD":[],"at":["ae"]},"iP":{"ae":[],"aD":[],"at":["ae"]},"ha":{"ae":[],"aD":[],"at":["ae"]},"iJ":{"ae":[],"aD":[],"at":["ae"]},"iQ":{"ae":[],"aD":[],"at":["ae"]},"k2":{"ae":[],"aD":[],"at":["ae"]},"kY":{"ae":[],"aD":[],"at":["ae"]},"l3":{"ae":[],"aD":[],"at":["ae"]},"lp":{"ae":[],"aD":[],"at":["ae"]},"ej":{"be":[]},"ek":{"be":[]},"er":{"be":[]},"eF":{"be":[]},"eG":{"be":[]},"eQ":{"be":[]},"f1":{"be":[]},"kS":{"be":[]},"jx":{"G":[]},"iI":{"G":[]},"jT":{"G":[]},"kx":{"G":[]},"je":{"G":[]},"ji":{"G":[]},"le":{"G":[]},"lh":{"G":[]},"k7":{"G":[]},"la":{"G":[]},"lc":{"G":[]},"lm":{"G":[]},"ks":{"G":[]},"iZ":{"G":[]},"kO":{"G":[]},"bD":{"dj":[]},"ht":{"bY":[]},"fT":{"bY":[]},"fE":{"bY":[]},"hl":{"bY":[]},"dA":{"bY":[]},"fQ":{"bY":[]},"hk":{"bY":[]},"ll":{"hL":[]},"eU":{"hL":[]},"aG":{"dj":[]},"lk":{"k":["d"],"k.E":"d"},"aR":{"dz":[]},"kQ":{"dz":[]},"c5":{"dz":[]},"dD":{"dz":[]},"aw":{"bD":[],"dj":[]},"bS":{"aD":[]},"hn":{"eX":[]},"ae":{"aD":[],"at":["ae"]},"cm":{"b9":["e"]},"b9":{"b9.T":"1"},"hE":{"cm":[],"b9":["e"],"b9.T":"e"},"fy":{"cm":[],"b9":["e"],"b9.T":"e"},"hN":{"cm":[],"b9":["e"],"b9.T":"e"},"fW":{"cm":[],"b9":["e"],"b9.T":"e"},"et":{"eC":[],"k":["L"],"k.E":"L"},"bQ":{"eC":[],"k":["L"],"k.E":"L"},"L":{"dj":[],"at":["L"]},"aa":{"bD":[],"dj":[]},"iW":{"G":[]},"cf":{"eJ":[]},"cv":{"eJ":[]},"ct":{"eJ":[]},"kJ":{"b8":[]},"kg":{"eu":[]},"mp":{"eu":[]},"iC":{"t":["l"],"t.T":"l"},"fB":{"av":[]},"j7":{"av":[]},"fI":{"av":[]},"fM":{"av":[]},"cA":{"av":[]},"jJ":{"av":[]},"jM":{"av":[]},"jU":{"av":[]},"k9":{"av":[]},"kv":{"av":[]},"l7":{"av":[]},"ld":{"av":[]},"fP":{"t":["l"],"t.T":"l"},"jc":{"t":["l"]},"fx":{"t":["l"],"t.T":"l"},"kt":{"t":["l"],"t.T":"l"},"fS":{"t":["l"],"t.T":"l"},"h8":{"t":["l"],"t.T":"l"},"l5":{"t":["l"],"t.T":"l"},"hM":{"t":["l"],"t.T":"l"},"fV":{"t":["l"],"t.T":"l"},"jk":{"cD":[],"t":["l"],"t.T":"l"},"cD":{"t":["l"]},"jW":{"cD":[],"t":["l"],"t.T":"l"},"ke":{"cD":[],"t":["l"],"t.T":"l"},"jf":{"t":["l"],"t.T":"l"},"jj":{"t":["l"],"t.T":"l"},"eD":{"t":["l"]},"hS":{"cV":[]},"hU":{"cV":[]},"i9":{"cV":[]},"fg":{"cV":[]},"ky":{"t":["l"],"t.T":"l"},"mg":{"t":["l"]},"kE":{"t":["l"],"t.T":"l"},"kF":{"t":["l"],"t.T":"l"},"hy":{"t":["l"],"t.T":"l"},"lb":{"t":["l"],"t.T":"l"},"dU":{"t":["l"]},"cS":{"t":["l"]},"i_":{"t":["l"],"t.T":"l"},"hZ":{"cS":[],"t":["l"]},"lX":{"cS":[],"t":["l"],"t.T":"l"},"lW":{"cS":[],"t":["l"],"t.T":"l"},"hT":{"t":["l"],"t.T":"l"},"id":{"t":["l"],"t.T":"l"},"ic":{"cS":[],"t":["l"],"t.T":"l"},"fb":{"t":["l"],"t.T":"l"},"li":{"t":["l"],"t.T":"l"},"jE":{"t":["l"],"t.T":"l"},"k8":{"t":["l"],"t.T":"l"},"kr":{"t":["l"],"t.T":"l"},"kh":{"em":[]},"f2":{"em":[]},"fG":{"t":["l"],"t.T":"l"},"fO":{"t":["l"],"t.T":"l"},"fR":{"t":["l"],"t.T":"l"},"kC":{"t":["l"]},"hx":{"t":["l"],"t.T":"l"},"hP":{"t":["l"],"t.T":"l"},"cp":{"t":["l"]},"mD":{"cp":["aL"],"t":["l"],"t.T":"l","cp.T":"aL"},"mE":{"cp":["as"],"t":["l"],"t.T":"l","cp.T":"as"},"aS":{"di":[]},"kR":{"hs":[],"di":[]},"hs":{"di":[]},"a8":{"k":["1"],"k.E":"1"},"iY":{"k":["d"],"k.E":"d"},"lF":{"a5":["d"]},"au":{"d":[]},"m8":{"a5":["d"]},"Y":{"k":["d"],"k.E":"d"},"cK":{"a5":["d"]},"hV":{"hD":["1"]},"lK":{"hV":["1"],"hD":["1"]},"hW":{"z9":["1"]},"yq":{"D":["e"],"K":["e"],"k":["e"]},"zi":{"D":["e"],"K":["e"],"k":["e"]},"zh":{"D":["e"],"K":["e"],"k":["e"]},"yo":{"D":["e"],"K":["e"],"k":["e"]},"zf":{"D":["e"],"K":["e"],"k":["e"]},"yp":{"D":["e"],"K":["e"],"k":["e"]},"zg":{"D":["e"],"K":["e"],"k":["e"]},"ym":{"D":["F"],"K":["F"],"k":["F"]},"yn":{"D":["F"],"K":["F"],"k":["F"]}}'))
A.zF(v.typeUniverse,JSON.parse('{"K":1,"f7":1,"eL":1,"ib":1,"j5":2,"kw":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",g:"max must be in range 0 < max \u2264 2^32, was ",f:"{1} [don't|doesn't] have room for {the 2} and {2 he} drops to the ground."}
var t=(function rtii(){var s=A.ao
return{fD:s("G"),lz:s("V"),fw:s("d2"),Y:s("G()"),bj:s("G(d)"),f0:s("bD"),L:s("cc"),R:s("ed"),dx:s("d3"),g_:s("be"),k5:s("a8<fD>"),bG:s("a8<W>"),o:s("a8<dN>"),lr:s("a8<dS>"),b:s("a8<B>"),z:s("a8<e>"),hE:s("a8<bD?>"),gy:s("a8<be?>"),cY:s("a8<W?>"),eJ:s("a8<B?>"),aY:s("aZ<d>"),n:s("cu"),fV:s("d4"),P:s("as"),nA:s("cg<eO>"),r:s("cg<d>"),cI:s("a9"),oC:s("fD"),gS:s("d6"),aZ:s("E"),jF:s("aK"),bP:s("at<@>"),p1:s("bO<q,q>"),cs:s("en"),j:s("au"),ln:s("cy"),iZ:s("bs"),ox:s("av"),gt:s("K<@>"),h:s("dC"),fz:s("al"),gY:s("dE"),hB:s("jC"),v:s("W"),V:s("aw"),lJ:s("cC"),er:s("d9"),Z:s("b6"),fb:s("l"),U:s("bQ"),W:s("L"),q:s("aL"),C:s("k<L>"),bq:s("k<q>"),cX:s("k<d>"),e7:s("k<@>"),eI:s("r<a1>"),iA:s("r<G>"),p5:s("r<bD>"),o_:s("r<cc>"),c4:s("r<fA>"),dr:s("r<be>"),da:s("r<b5>"),kt:s("r<d4>"),fO:s("r<as>"),bZ:s("r<a9>"),bk:s("r<E>"),D:s("r<aK>"),c8:s("r<bY>"),eR:s("r<em>"),x:s("r<az>"),oO:s("r<eq>"),T:s("r<au>"),f8:s("r<bs>"),pl:s("r<av>"),bI:s("r<jm>"),mO:s("r<W>"),fJ:s("r<f>"),di:s("r<d9>"),o0:s("r<b6>"),f_:s("r<cD>"),I:s("r<L>"),hm:s("r<c_>"),fv:s("r<eE>"),G:s("r<D<d>>"),ic:s("r<bk<q,a0>>"),kU:s("r<hb>"),lE:s("r<aa>"),a_:s("r<b8>"),hL:s("r<bS>"),dF:s("r<+(q,e)>"),b9:s("r<+(d,L)>"),d3:s("r<+(L?,b5)>"),bx:s("r<+(q,e,q,~())>"),hY:s("r<bJ>"),gp:s("r<c3<as>>"),aG:s("r<c3<aL>>"),d4:s("r<bu<as>>"),mQ:s("r<bu<aL>>"),iO:s("r<df>"),jp:s("r<t<l>>"),hC:s("r<ae>"),aC:s("r<dO>"),s:s("r<q>"),H:s("r<N>"),J:s("r<dT>"),l:s("r<d>"),cz:s("r<lu>"),lv:s("r<hX>"),hw:s("r<i7>"),n9:s("r<cV>"),mS:s("r<mn>"),gk:s("r<F>"),dG:s("r<@>"),t:s("r<e>"),nK:s("r<eV<eO>?>"),c:s("r<eV<d>?>"),it:s("r<e(as,as)>"),m2:s("r<e(aL,aL)>"),w:s("h_"),E:s("aE"),dY:s("db"),dX:s("bI<@>"),d2:s("eE"),hl:s("k1<l>"),hA:s("D<be>"),aH:s("D<b5>"),ev:s("D<E>"),hy:s("D<az>"),jP:s("D<eq>"),du:s("D<au>"),af:s("D<W>"),aa:s("D<L>"),eF:s("D<eE>"),ew:s("D<bk<q,a0>>"),kz:s("D<b8>"),ez:s("D<a0>"),m1:s("D<bS>"),p0:s("D<+(E,E)>"),ig:s("D<+(q,e)>"),m:s("D<q>"),nB:s("D<q>(e)"),p:s("D<dT>"),A:s("D<d>"),pa:s("D<i7>"),la:s("D<cV>"),_:s("D<@>"),jX:s("D<d?>"),dW:s("D<e?>"),aI:s("bR"),cB:s("aM<e,a1>"),ea:s("bk<q,@>"),av:s("bk<@,@>"),de:s("bk<e,a1>"),gQ:s("aN<q,q>"),B:s("aa"),d0:s("b8"),d:s("aP"),K:s("a0"),mh:s("b9<F>"),jo:s("eV<ak>"),ho:s("cI"),lZ:s("Cy"),aK:s("+()"),lF:s("+(au,e)"),lu:s("hr"),pj:s("bJ"),mF:s("ht"),b_:s("eZ<ed>"),gf:s("dN"),hb:s("c3<as>"),i0:s("c3<aL>"),o9:s("bu<as>"),o5:s("bu<aL>"),cv:s("aq<as>"),bB:s("aq<aL>"),ax:s("aq<L?>"),jK:s("df"),eE:s("t<l>"),g:s("dg"),M:s("ae"),gl:s("f5"),X:s("cl"),N:s("q"),po:s("q(cj)"),gL:s("q(q)"),bW:s("cO"),fc:s("N"),jh:s("dS"),ns:s("dT"),aJ:s("af"),do:s("cP"),cx:s("dk"),iR:s("f8<l>"),u:s("d"),e0:s("aj<au>"),bC:s("hO<L>"),k:s("bn<L>"),gX:s("lK<aE>"),j_:s("bT<@>"),h0:s("bT<e>"),ak:s("cS"),fC:s("y"),nP:s("mh"),oc:s("R<d2>"),kX:s("R<aD>"),mY:s("R<a9>"),oP:s("R<aK>"),cn:s("R<az>"),kF:s("R<aq<as>>"),jE:s("R<aq<aL>>"),d8:s("R<aq<L?>>"),e:s("R<q>"),e6:s("R<d>"),y:s("B"),ca:s("B(au)"),iW:s("B(a0)"),mN:s("B(d)"),i:s("F"),oF:s("F(e)"),oH:s("@"),df:s("@()"),mq:s("@(a0)"),ng:s("@(a0,f5)"),jJ:s("@(d)"),S:s("e"),Q:s("e(e)"),e9:s("bD?"),aT:s("be?"),gK:s("jB<aP>?"),n3:s("W?"),cm:s("L?"),mU:s("aE?"),b8:s("D<aK>?"),fm:s("D<q>?"),lH:s("D<@>?"),dZ:s("bk<q,@>?"),aL:s("aa?"),iD:s("a0?"),jv:s("q?"),jt:s("q(cj)?"),n7:s("d?"),F:s("hY<@,@>?"),nF:s("m9?"),fU:s("B?"),hD:s("B(d)?"),dz:s("F?"),hM:s("F(e)?"),aV:s("e?"),lg:s("e(e)?"),ae:s("ak?"),c3:s("~()?"),lT:s("~(cd)?"),cZ:s("ak"),ef:s("~"),O:s("~()"),kc:s("~(cd)"),or:s("~(as)"),f:s("~(L)"),mH:s("~(L,d)"),lL:s("~(aa)"),lc:s("~(q,@)"),a:s("~(e,e,W)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.hu=J.jS.prototype
B.a=J.r.prototype
B.c7=J.fY.prototype
B.c=J.fZ.prototype
B.e=J.dG.prototype
B.j=J.da.prototype
B.hx=J.db.prototype
B.hy=J.h2.prototype
B.cl=J.kz.prototype
B.bi=J.dk.prototype
B.bk=new A.d2(null,!1,!0)
B.a3=new A.d2(null,!0,!1)
B.n=new A.d2(null,!0,!0)
B.a6=new A.iD(0,"left")
B.al=new A.iD(2,"right")
B.bl=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.cC=function() {
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
B.cH=function(getTagFallback) {
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
B.cD=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.cG=function(hooks) {
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
B.cF=function(hooks) {
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
B.cE=function(hooks) {
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
B.bm=function(hooks) { return hooks; }

B.aX=new A.k_()
B.cI=new A.ku()
B.am=new A.qi()
B.cJ=new A.ll()
B.cK=new A.m3()
B.ab=new A.ml()
B.cL=new A.mv()
B.y=new A.E(0,0,0)
B.cM=new A.E(0,64,255)
B.A=new A.E(0,64,39)
B.ar=new A.E(110,32,13)
B.d=new A.E(125,119,128)
B.o=new A.E(125,144,179)
B.ad=new A.E(129,217,117)
B.J=new A.E(129,231,235)
B.z=new A.E(131,158,13)
B.k=new A.E(142,82,55)
B.a_=new A.E(15,130,148)
B.N=new A.E(173,88,219)
B.M=new A.E(179,74,4)
B.F=new A.E(189,144,108)
B.D=new A.E(193,181,199)
B.bn=new A.E(200,130,0)
B.cN=new A.E(201,166,255)
B.m=new A.E(204,35,57)
B.t=new A.E(208,195,214)
B.u=new A.E(20,19,31)
B.cO=new A.E(20,20,35)
B.E=new A.E(21,87,194)
B.bo=new A.E(220,0,0)
B.h=new A.E(222,156,33)
B.p=new A.E(22,117,38)
B.a4=new A.E(255,122,105)
B.B=new A.E(255,238,168)
B.aH=new A.E(255,255,255)
B.C=new A.E(26,46,150)
B.av=new A.E(36,10,5)
B.cQ=new A.E(40,40,55)
B.l=new A.E(41,45,66)
B.cR=new A.E(42,36,43)
B.cS=new A.E(51,48,28)
B.an=new A.E(56,16,125)
B.G=new A.E(64,163,229)
B.cT=new A.E(6,49,79)
B.i=new A.E(72,64,74)
B.f=new A.E(72,82,115)
B.v=new A.E(77,29,21)
B.bp=new A.E(80,80,95)
B.Y=new A.E(84,0,39)
B.V=new A.E(86,30,138)
B.ac=new A.E(99,87,7)
B.as=new A.eq(0,"exit")
B.aw=new A.eq(1,"item")
B.r=new A.au(0,0,0,"none")
B.K=new A.au(0,1,5,"s")
B.L=new A.au(0,-1,1,"n")
B.O=new A.au(1,0,3,"e")
B.P=new A.au(1,1,4,"se")
B.Q=new A.au(1,-1,2,"ne")
B.R=new A.au(-1,0,7,"w")
B.S=new A.au(-1,1,6,"sw")
B.T=new A.au(-1,-1,8,"nw")
B.aY=new A.d8("Archery")
B.ax=new A.d8("Body")
B.ae=new A.d8("Matter")
B.aZ=new A.d8("Weaponry")
B.bq=new A.aI("awaken")
B.br=new A.aI("bolt")
B.bs=new A.aI("cone")
B.bt=new A.aI("detect")
B.bu=new A.aI("die")
B.b_=new A.aI("frighten")
B.bv=new A.aI("gold")
B.bw=new A.aI("heal")
B.bx=new A.aI("hit")
B.by=new A.aI("howl")
B.bz=new A.aI("knockBack")
B.bA=new A.aI("map")
B.bB=new A.aI("openBarrel")
B.bC=new A.aI("perceive")
B.bD=new A.aI("polymorph")
B.bE=new A.aI("slash")
B.b0=new A.aI("spawn")
B.bF=new A.aI("stab")
B.bG=new A.aI("teleport")
B.bH=new A.aI("toss")
B.bI=new A.aI("wind")
B.b1=new A.W(32,B.aH,B.y)
B.hr=new A.jK(0,"melee")
B.hs=new A.jK(2,"toss")
B.H=new A.l("cancel")
B.ht=new A.l("castSpell")
B.bM=new A.l("drop")
B.af=new A.l("e")
B.bN=new A.l("editSpells")
B.bO=new A.l("equip")
B.bP=new A.l("explore")
B.b2=new A.l("fire")
B.b3=new A.l("fireE")
B.b4=new A.l("fireN")
B.bQ=new A.l("fireNE")
B.bR=new A.l("fireNW")
B.b5=new A.l("fireS")
B.bS=new A.l("fireSE")
B.bT=new A.l("fireSW")
B.b6=new A.l("fireW")
B.bU=new A.l("forfeit")
B.b7=new A.l("help")
B.bV=new A.l("heroInfo")
B.a0=new A.l("n")
B.az=new A.l("ne")
B.aA=new A.l("nw")
B.a7=new A.l("ok")
B.bW=new A.l("operate")
B.bX=new A.l("pickUp")
B.bY=new A.l("quit")
B.aI=new A.l("rest")
B.aJ=new A.l("runE")
B.ao=new A.l("runN")
B.b8=new A.l("runNE")
B.b9=new A.l("runNW")
B.ap=new A.l("runS")
B.ba=new A.l("runSE")
B.bb=new A.l("runSW")
B.aK=new A.l("runW")
B.a1=new A.l("s")
B.aB=new A.l("se")
B.bZ=new A.l("spendExperience")
B.aC=new A.l("sw")
B.c_=new A.l("swap")
B.c0=new A.l("toss")
B.c1=new A.l("use")
B.c2=new A.l("useAbility")
B.ag=new A.l("w")
B.c3=new A.l("wizard")
B.W=new A.c_("On Ground",0)
B.c4=new A.c_("Crucible",8)
B.a2=new A.c_("Equipment",0)
B.c5=new A.c_("Home",26)
B.I=new A.c_("Inventory",24)
B.c6=new A.fX(0,"normal")
B.hv=new A.fX(1,"good")
B.hw=new A.fX(2,"great")
B.hz=new A.p4(null)
B.hA=new A.p5(null)
B.hB=s([2,12,22],t.t)
B.aD=s(["hand","hand","ring","necklace","body","cloak","helm","gloves","boots"],t.s)
B.hC=s(["Return to main menu?"],t.s)
B.aL=s([9650,94],t.t)
B.iA=new A.bJ(1,"n")
B.iB=new A.bJ(2,"ne")
B.iC=new A.bJ(3,"e")
B.iD=new A.bJ(4,"se")
B.iE=new A.bJ(5,"s")
B.iF=new A.bJ(6,"sw")
B.iG=new A.bJ(7,"w")
B.iH=new A.bJ(8,"nw")
B.hF=s([B.iA,B.iB,B.iC,B.iD,B.iE,B.iF,B.iG,B.iH],t.hY)
B.ah=s(["Merek","Carac","Ulric","Tybalt","Borin","Sadon","Terrowin","Rowan","Forthwind","Althalos","Fendrel","Brom","Hadrian","Crewe","Bolbec","Fenwick","Mowbray","Drake","Bryce","Leofrick","Letholdus","Lief","Barda","Rulf","Robin","Gavin","Terrin","Jarin","Cedric","Gavin","Josef","Janshai","Doran","Asher","Quinn","Xalvador","Favian","Destrian","Dain","Millicent","Alys","Ayleth","Anastas","Alianor","Cedany","Ellyn","Helewys","Malkyn","Peronell","Thea","Gloriana","Arabella","Hildegard","Brunhild","Adelaide","Beatrix","Emeline","Mirabelle","Helena","Guinevere","Isolde","Maerwynn","Catrain","Gussalen","Enndolynn","Krea","Dimia","Aleida"],t.s)
B.c8=s([0,2,5,10,18,26,38],t.t)
B.c9=s(["_____ _____                 ____                     ____","\\ . / \\  ./                 \\ .|                     \\  |"," | |   |.|                   | |                      |.|"," |.|___| |  ____  ____ ____  |.| __     ____  ___  __ | |  ___"," |::___::|  \\:::\\ \\::| \\::|  |:|/::\\   /::::\\ \\::|/::\\|:| /::/"," |x|   |x|  __ \\x| |x|  |x|  |x|  \\x\\ |x|__)x| |x| \\x||x|/x/"," |x|   |x| /xx\\|x| |x|  |x|  |x|   |x||x|\\xxx| |x|    |xxxx\\"," |X|   |X||X(__|X| |X\\__|X|  |X|__/XX||X|____  |X|    |X| \\X\\"," |X|   |X| \\XXX/\\X\\ \\XX/|XX\\/XX/\\XXX/  \\XXXX/ /XXX\\  /XXX\\ \\X\\"," |X|   |X|","_|X|   |X|_","\\XX|   |XX/"," \\X|   |X/","  \\|   |/"],t.s)
B.bc=s([B.I,B.a2],t.hm)
B.w=new A.bR(0,"message")
B.X=new A.bR(1,"error")
B.hZ=new A.bR(2,"quest")
B.ce=new A.bR(3,"gain")
B.i_=new A.bR(4,"help")
B.cf=new A.bR(5,"debug")
B.hH=s([B.w,B.X,B.hZ,B.ce,B.i_,B.cf],A.ao("r<bR>"))
B.hI=s(["Are you sure you want to forfeit the level?","You will lose all items and experience gained in the dungeon."],t.s)
B.hJ=s(["LLLLL LLLLL                 LLLL                     LLLL","ERRRE ERRRE                 ERRE                     ERRE"," ERE   ERE                   ERE                      ERE"," ERELLLERE  LLLL  LLLL LLLL  ERE LL     LLLL  LLL  LL ERE  LLL"," ERREEERRE  ERRRE ERRE ERRE  EREERRL   LRRRRL ERRLLRRLERE LRRE"," EOE   EOE  LL EOE EOE  EOE  EOE  EOL EOELLEOE EOE EOEEOELOE"," EGE   EGE LGGEEGE EGE  EGE  EGE   EGEEGEEGGGE EGE    EGGGGL"," EYE   EYEEYELLEYE EYLLLEYE  EYELLLYYEEYELLLL  EYE    EYE EYL"," EYE   EYE EYYYEEYL EYYEEYYLLYYEEYYYE  EYYYYE LYYYL  LYYYL EYL"," EYE   EYE","EEYE   EYEE","EYYE   EYYE"," EYE   EYE","  EE   EE"],t.s)
B.bd=s(["Stairs","Permanent"],t.s)
B.hK=s(["Stairs descend into darkness.","How far down shall you venture?"],t.s)
B.ca=s([B.Q,B.P,B.S,B.T],t.T)
B.hU=s([],t.bZ)
B.cd=s([],t.D)
B.hQ=s([],t.x)
B.be=s([],t.I)
B.cb=s([],t.hL)
B.hS=s([],A.ao("r<c3<0&>>"))
B.hT=s([],A.ao("r<bu<0&>>"))
B.hR=s([],t.s)
B.hP=s([],t.l)
B.cc=s([],t.lv)
B.hO=s([],t.mS)
B.hV=s([B.W],t.hm)
B.at=s([B.L,B.O,B.K,B.R],t.T)
B.hW=s(["hand","ring","necklace","body","cloak","helm","gloves","boots"],t.s)
B.aM=s([15,20,24,30,40,50,60,80,100,120,150,180,240],t.t)
B.aN=s([B.l,B.f,B.o,B.t,B.F,B.k,B.ar,B.v,B.B,B.h,B.M,B.ad,B.ac,B.z,B.p,B.A,B.a4,B.m,B.Y,B.N,B.V,B.an,B.J,B.G,B.E,B.C],t.bk)
B.cU=new A.az(10,"Your luck protects you!")
B.hX=s([B.cU],t.x)
B.hY=s(["When you die, you lose everything since the last time you went up or down a set of stairs (or left a shop).","When you die, that's it. Your hero is gone forever. This is the most challenging way to play, but often the most rewarding as well."],t.s)
B.it=new A.O(B.h,B.ar)
B.ik=new A.O(B.B,B.M)
B.ie=new A.O(B.k,B.m)
B.ij=new A.O(B.m,B.v)
B.aO=s([B.it,B.ik,B.ie,B.ij],A.ao("r<+(E,E)>"))
B.aj=new A.cl("Strength",0,"strength")
B.aa=new A.cl("Agility",1,"agility")
B.aq=new A.cl("Vitality",2,"vitality")
B.Z=new A.cl("Intellect",3,"intellect")
B.aP=s([B.aj,B.aa,B.aq,B.Z],A.ao("r<cl>"))
B.a5=s([B.L,B.Q,B.O,B.P,B.K,B.S,B.R,B.T],t.T)
B.i8={"Quick Reference":0,"Getting Started":1}
B.he=new A.f(B.f,"Quick Reference")
B.bJ=new A.f(B.f,"\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550")
B.b=new A.f(B.d,"")
B.fc=new A.f(B.f,"Movement")
B.ay=new A.f(B.f,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500")
B.eH=new A.f(B.d,"There are two sets of direction keys:")
B.d5=new A.f(B.d,"They can be combined with modifier keys like so:")
B.cX=new A.f(B.f,"Other commands")
B.hG=s([B.he,B.bJ,B.b,B.b,B.fc,B.ay,B.eH,B.b,B.d5,B.b,B.b,B.b,B.cX,B.ay],t.fJ)
B.dU=new A.f(B.f,"Getting Started")
B.fm=new A.f(B.d,"TODO: This is all horrendously out of date.")
B.ev=new A.f(B.d,"Welcome! If you are here, you must have an adventurous")
B.f0=new A.f(B.d,"spirit. Not only because you wish to venture into")
B.dJ=new A.f(B.d,"dungeons filled with beasts and untolds horrors, but")
B.hl=new A.f(B.d,"because you have the fortitude to try out a game while")
B.eZ=new A.f(B.d,"it's still under development. A caution for the unwary:")
B.dG=new A.f(B.d,"The game is not done, or balanced, or complete, or")
B.h7=new A.f(B.d,"bug-free. It may destroy your savefiles or steal your")
B.eN=new A.f(B.d,"boyfriend!")
B.hp=new A.f(B.f,"Input")
B.ey=new A.f(B.d,"Hauberk is played using your keyboard, the fixie of")
B.h_=new A.f(B.d,"input devices. A lot of input is directional. Arrow keys")
B.dF=new A.f(B.d,"work for that, but don't support diagonal moves.")
B.dN=new A.f(B.d,"Instead, you're better off hitting num lock and using")
B.fU=new A.f(B.d,"the numpad on your keyboard if you have one:")
B.bK=new A.f(B.d,".---.---.---.          .---.---.---.")
B.eP=new A.f(B.d,"| 7 | 8 | 9 |          | \\ | ^ | / |")
B.bL=new A.f(B.d,"|---+---+---|          |---+---+---|")
B.fS=new A.f(B.d,"| 4 | 5 | 6 | maps to: |<- |   | ->|")
B.en=new A.f(B.d,"| 1 | 2 | 3 |          | / | v | \\ |")
B.dR=new A.f(B.d,"'---'---'---'          '---'---'---'")
B.f9=new A.f(B.d,"If you don't have a numpad, but do have a US layout")
B.dX=new A.f(B.d,"keyboard, you can also use:")
B.dE=new A.f(B.d,"| I | O | P |          | \\ | ^ | / |")
B.dd=new A.f(B.d,"'---+---+---+          '---+---+---+")
B.eF=new A.f(B.d," | K | L | ; | maps to: |<- |   | ->|")
B.eD=new A.f(B.d," '---+---+---+          '---+---+---+")
B.fA=new A.f(B.d,"  | , | . | / |          | / | v | \\ |")
B.fJ=new A.f(B.d,"  '---'---'---'          '---'---'---'")
B.fB=new A.f(B.d,'The 5 and L buttons in the middle are "stand". They\'re')
B.eU=new A.f(B.d,'also used like an "OK" button to accept a selection on')
B.d0=new A.f(B.d,"menu screens. Escape is used to go back in menu screens")
B.fK=new A.f(B.d,"and exit dialogs.")
B.eg=new A.f(B.d,"(Note that all keys are shown uppercase here but are")
B.fT=new A.f(B.d,'typed lower case. L means a lowercase "l". An')
B.dm=new A.f(B.d,"uppercase one will be Shift-L.)")
B.fq=new A.f(B.d,"At some point, I plan to add support for user-defined")
B.f8=new A.f(B.d,"keybindings, but they aren't there yet.")
B.eM=new A.f(B.f,"A Hero Awakens")
B.d1=new A.f(B.d,"To play, you need an avatar in the game world to live")
B.du=new A.f(B.d,"(and die!) vicariously through. On the Main Menu Screen,")
B.f_=new A.f(B.d,"type N to create a new hero (or heroine, the game is")
B.fr=new A.f(B.d,"gender-blind). Enter a name, or use the default")
B.f2=new A.f(B.d,"suggested one and hit Enter.")
B.f5=new A.f(B.d,"There isn't much to specify at character creation time")
B.ex=new A.f(B.d,"right now, but eventually you'll pick a class, race, pet")
B.dW=new A.f(B.d,"peeves, favorite sandwich, etc. Currently, warrior is")
B.fL=new A.f(B.d,"the only class.")
B.f4=new A.f(B.d,"Your hero is saved in your browser's local storage. This")
B.hn=new A.f(B.d,"means you can return to the game later and your hero")
B.dc=new A.f(B.d,"will still be there. If you switch browsers, though,")
B.h1=new A.f(B.d,"your heroes won't be in the new browser. Heroes are")
B.hf=new A.f(B.d,"saved every time you leave a level, or exit your home.")
B.ft=new A.f(B.d,"The game is not saved while you're in the middle of a")
B.eY=new A.f(B.d,"level! If you close your browser in the middle of")
B.dn=new A.f(B.d,"playing because your boss walked in, your progress in")
B.ek=new A.f(B.d,"the level will be lost. That's what you get for slacking")
B.e7=new A.f(B.d,"off at work.")
B.h3=new A.f(B.d,"Because the game is still in active development, new")
B.hj=new A.f(B.d,"releases may not be savefile compatible with previous")
B.fV=new A.f(B.d,"ones. Your heroes may get deleted if they don't work")
B.dH=new A.f(B.d,"with the latest code. Sorry.")
B.et=new A.f(B.f,"The hero screen")
B.fp=new A.f(B.d,"Once you create or choose a hero, you're taken to the")
B.h9=new A.f(B.d,'hero screen. This is sort of like the "town" in other')
B.dw=new A.f(B.d,"games. It's the safe place where you can tinker with")
B.eo=new A.f(B.d,"your gear and enter the game.")
B.dO=new A.f(B.f,"Your home")
B.h4=new A.f(B.d,"From the hero screen, press H to enter your home. This")
B.fD=new A.f(B.d,"gives you a place where you can stash loot you don't")
B.dM=new A.f(B.d,"want to carry around. You can also move items between")
B.d4=new A.f(B.d,"your inventory (stuff you carry in your backpack) and")
B.d6=new A.f(B.d,"your equipment (weapons and armor you are currently")
B.eK=new A.f(B.d,"wearing or holding).")
B.dD=new A.f(B.f,"The crucible")
B.ei=new A.f(B.d,"The most interesting facet of your home is the crucible.")
B.eL=new A.f(B.d,"This is the place where you can craft\u2014make new items")
B.eB=new A.f(B.d,"from existing ones. You place items into the crucible")
B.dk=new A.f(B.d,"just like you can your home or inventory. However, it")
B.eC=new A.f(B.d,"only allows items that are part of a recipe.")
B.e4=new A.f(B.d,"A recipe is a set of items that can be turned into")
B.cV=new A.f(B.d,"something else. When you place all of the required items")
B.f7=new A.f(B.d,"for a recipe in the crucible, it will tell you. Press")
B.dz=new A.f(B.d,"Space and it will magically transmute them into")
B.hk=new A.f(B.d,"something new.")
B.fP=new A.f(B.d,"The set of recipes is still highly in flux, but try")
B.d_=new A.f(B.d,"dropping a few healing potions in there.")
B.hb=new A.f(B.f,"The Dungeon Awaits")
B.fE=new A.f(B.d,"Now that your hero is alive and ready, it's time to slay")
B.eu=new A.f(B.d,"some beasts.")
B.f3=new A.f(B.f,"Areas and levels")
B.e_=new A.f(B.d,"Unlike other roguelikes, Hauberk doesn't have a single")
B.ha=new A.f(B.d,"monolithic dungeon. Instead, there are a number of")
B.fO=new A.f(B.d,'areas. Each area has its own "flavor"\u2014it\'s own kinds')
B.fj=new A.f(B.d,"of monsters, difficulty, appearance, etc. An area is in")
B.eI=new A.f(B.d,"turn divided into a series of levels, each more")
B.dy=new A.f(B.d,"difficult than the last.")
B.dg=new A.f(B.d,"From the hero screen, you can select which area and")
B.em=new A.f(B.d,"level you want to play. You can only enter an area if")
B.fy=new A.f(B.d,"you've beaten at least one level from the previous area.")
B.dI=new A.f(B.d,"Likewise, you must beat a level to unlock the next one.")
B.el=new A.f(B.d,"Since you just created a hero, you can only play the")
B.dp=new A.f(B.d,"first level of the Friendly Forest, so just type L to")
B.fa=new A.f(B.d,"enter it. Later, when you unlock stuff, use the")
B.hq=new A.f(B.d,"directional keys to select an area and level. You can")
B.fZ=new A.f(B.d,"replay a level as many times as you want.")
B.dY=new A.f(B.f,"Quests, victory, and defeat")
B.eT=new A.f(B.d,"Every level is randomly generated (of course) and")
B.fe=new A.f(B.d,"populated with monsters and treasure. Each level also")
B.fG=new A.f(B.d,"has a quest. This is a goal you must fulfill before")
B.dr=new A.f(B.d,"you're allowed to leave the level. After completing the")
B.eW=new A.f(B.d,"quest, type Q to leave the level and return to the")
B.dV=new A.f(B.d,"safety of your home. All experience and items gained in")
B.df=new A.f(B.d,"the level will be saved henceforth and forever more.")
B.eb=new A.f(B.d,"If you die in the level, you lose everything you gained")
B.eq=new A.f(B.d,"while in that level. It isn't quite permadeath, but it's")
B.e0=new A.f(B.d,"pretty damn annoying to lose that experience and")
B.d8=new A.f(B.d,"whatever hot loot you picked up.")
B.fW=new A.f(B.d,"If you want to give up and leave the level before")
B.dL=new A.f(B.d,"completing the quest, you can forfeit by typing Shift-F.")
B.fb=new A.f(B.d,"Like dying, doing this sacrifices anything you've gained")
B.e5=new A.f(B.d,"since entering the level.")
B.dx=new A.f(B.f,"Navigating the level")
B.ef=new A.f(B.d,"Your avatar in the game is represented by a @. Floor")
B.cY=new A.f(B.d,"tiles are usually ., and impassible barriers and walls")
B.h5=new A.f(B.d,"look like #, or other hopefully obvious solid looking")
B.eV=new A.f(B.d,"tiles.")
B.hg=new A.f(B.d,"You walk around using the directional keys. Pressing the")
B.ee=new A.f(B.d,"stand key (5 or L) makes you stand still for a turn.")
B.cW=new A.f(B.d,"That's useful to let a monster take a step closer so you")
B.er=new A.f(B.d,"can attack the next turn.")
B.fY=new A.f(B.d,"Hold down Shift and press a direction to run in that")
B.dA=new A.f(B.d,"direction. You will repeatedly walk in that direction")
B.e6=new A.f(B.d,"until disturbed by reaching an obstacle, a fork in the")
B.eS=new A.f(B.d,"path, or seeing a monster. When not in combat, running")
B.ep=new A.f(B.d,"is the most user-friendly way to get from point A to")
B.dB=new A.f(B.d,"point B.")
B.eQ=new A.f(B.d,"Closed doors look like +. You can open them (which takes")
B.cZ=new A.f(B.d,"a turn) by simply walking into them. An open door looks")
B.d3=new A.f(B.d,"like -. You can close a door by pressing C while")
B.hm=new A.f(B.d,"standing next to one.")
B.fQ=new A.f(B.f,"Combat!")
B.ea=new A.f(B.d,"Monsters in the game are represented using letters. You")
B.e1=new A.f(B.d,"attack by trying to walk into the tile where a monster")
B.h6=new A.f(B.d,"is standing. On the right side of the screen you can see")
B.fk=new A.f(B.d,"your health along with some of the nearby monsters. Try")
B.fu=new A.f(B.d,"to get theirs to zero before yours does!")
B.fo=new A.f(B.d,"When you kill a monster, you are granted some experience")
B.fF=new A.f(B.d,"points. Earn enough of those, and your hero will")
B.dK=new A.f(B.d,"increase in experience level. That increases your")
B.fX=new A.f(B.d,"maximum health and does some other good stuff.")
B.fg=new A.f(B.d,"Meanwhile, monsters will be attacking you. You are")
B.eG=new A.f(B.d,"outnumbered, so try not to let them surround you.")
B.dC=new A.f(B.d,"Attacking from the safety of a narrow corridor helps.")
B.d9=new A.f(B.f,"Exploring")
B.e9=new A.f(B.d,"Shift-H explores: the hero walks to the nearest unexplored")
B.hd=new A.f(B.d,"spot, one step per turn, opening doors on the way. It")
B.fz=new A.f(B.d,"stops when a monster or a new item comes into view, on")
B.dl=new A.f(B.d,"any new message, or when you press a key.")
B.ho=new A.f(B.d,"Q on the stairs leaves the level. Anywhere else, Q walks")
B.dj=new A.f(B.d,"to the nearest known stairs (in town: the dungeon")
B.dP=new A.f(B.d,"entrance) and stops there; press Q again to take them.")
B.dZ=new A.f(B.f,"Resting")
B.h0=new A.f(B.d,"After a skirmish, your hero has likely lost some health.")
B.ds=new A.f(B.d,"That can be regained by imbibing magic potions, but")
B.fs=new A.f(B.d,"those are in short supply. Instead, they'll have to")
B.dT=new A.f(B.d,"rest.")
B.fC=new A.f(B.d,"Resting requires food, which you automatically discover")
B.fn=new A.f(B.d,"as you explore the level. Every turn that you stand")
B.fh=new A.f(B.d,"still consumes a bit of food and regains a point of")
B.fI=new A.f(B.d,"health. Instead of mashing down the stand key, if you")
B.ez=new A.f(B.d,"press Shift-Stand, you will repeatedly rest until you")
B.da=new A.f(B.d,"run out of food, fully regain their health, or are")
B.fi=new A.f(B.d,"disturbed by a nearby monster.")
B.fR=new A.f(B.d,"If you don't have any food, resting accomplishes")
B.f1=new A.f(B.d,"nothing. To get food, you must explore new parts of the")
B.dt=new A.f(B.d,"level. No resting on your laurels or wandering through")
B.eO=new A.f(B.d,"familiar passages!")
B.f6=new A.f(B.f,"Loot!")
B.e3=new A.f(B.d,"While the ridding the world of an evil beast is its own")
B.db=new A.f(B.d,"reward, it's not the only reward. Many monsters drop")
B.d2=new A.f(B.d,"treasure, and you'll find some laying on the ground as")
B.e8=new A.f(B.d,"well. Different levels and monsters tend to drop")
B.hc=new A.f(B.d,"different stuff, so explore (and murder) widely.")
B.eJ=new A.f(B.d,"Items are represented using punctuation characters.")
B.hh=new A.f(B.d,"Potions are !, scrolls are ?, etc. You can pick up an")
B.fM=new A.f(B.d,"item off the ground by standing on top of it and")
B.di=new A.f(B.d,'pressing G, for "get".')
B.eX=new A.f(B.d,"If there are multiple items in the same tile, that picks")
B.es=new A.f(B.d,"up the top one. Press G repeatedly to pick them all up.")
B.hi=new A.f(B.d,"Eventually, I'll add a menu to let you pick which one")
B.fw=new A.f(B.d,"you want.")
B.dq=new A.f(B.d,"Many items can be used. Potions can be quaffed, scrolls")
B.dS=new A.f(B.d,"read, wands... uh... waved around? To use an item, press")
B.fd=new A.f(B.d,"U to bring up the item selection screen. In addition to")
B.fH=new A.f(B.d,"your inventory and equipment, you can also use items")
B.fv=new A.f(B.d,"that are laying on the ground under you. You don't have")
B.eh=new A.f(B.d,"to pick them up first. (And not picking them up first")
B.e2=new A.f(B.d,"saves you a turn. Useful in the heat of battle!)")
B.de=new A.f(B.d,"Pressing Tab on the item screen cycles through these")
B.ew=new A.f(B.d,"three views.")
B.eA=new A.f(B.d,"Type the letter next to an item to use it. If the item")
B.fx=new A.f(B.d,'has an active "use" like a potion, this will perform')
B.eE=new A.f(B.d,'it. "Using" a piece of equipment equips it. Using a')
B.fN=new A.f(B.d,"piece of equipment that you're already wearing unequips")
B.ed=new A.f(B.d,"it. Remember that equipment must be worn to get any")
B.h8=new A.f(B.d,"advantage! Carrying around a sword in your backpack")
B.dv=new A.f(B.d,"doesn't do you much good.")
B.ff=new A.f(B.d,"If you want to discard an item, press D, then select the")
B.dh=new A.f(B.d,"item. It will drop onto the ground. It may gaze back at")
B.ec=new A.f(B.d,"you forlornly, wondering why it wasn't good enough and")
B.h2=new A.f(B.d,"why you love the other items in your inventory more.")
B.dQ=new A.f(B.d,"A more entertaining and often more useful way to rid")
B.eR=new A.f(B.d,"yourself of an item is to throw it, which is done by")
B.fl=new A.f(B.d,"pressing T. Throwing an item at a monster will often")
B.d7=new A.f(B.d,"harm it, and some items do fun and exciting things like")
B.ej=new A.f(B.d,"explode when lobbed at an unsuspecting beastie.")
B.hE=s([B.dU,B.bJ,B.fm,B.b,B.b,B.b,B.ev,B.b,B.f0,B.b,B.dJ,B.b,B.hl,B.b,B.eZ,B.b,B.dG,B.b,B.h7,B.b,B.eN,B.b,B.b,B.b,B.hp,B.ay,B.ey,B.b,B.h_,B.b,B.dF,B.b,B.dN,B.b,B.fU,B.b,B.b,B.b,B.bK,B.eP,B.bL,B.fS,B.bL,B.en,B.dR,B.b,B.b,B.f9,B.b,B.dX,B.b,B.b,B.b,B.bK,B.dE,B.dd,B.eF,B.eD,B.fA,B.fJ,B.b,B.b,B.fB,B.b,B.eU,B.b,B.d0,B.b,B.fK,B.b,B.b,B.b,B.eg,B.b,B.fT,B.b,B.dm,B.b,B.b,B.b,B.fq,B.b,B.f8,B.b,B.b,B.b,B.eM,B.ay,B.d1,B.b,B.du,B.b,B.f_,B.b,B.fr,B.b,B.f2,B.b,B.b,B.b,B.f5,B.b,B.ex,B.b,B.dW,B.b,B.fL,B.b,B.b,B.b,B.f4,B.b,B.hn,B.b,B.dc,B.b,B.h1,B.b,B.hf,B.b,B.b,B.b,B.ft,B.b,B.eY,B.b,B.dn,B.b,B.ek,B.b,B.e7,B.b,B.b,B.b,B.h3,B.b,B.hj,B.b,B.fV,B.b,B.dH,B.b,B.b,B.b,B.et,B.b,B.fp,B.b,B.h9,B.b,B.dw,B.b,B.eo,B.b,B.b,B.b,B.dO,B.b,B.h4,B.b,B.fD,B.b,B.dM,B.b,B.d4,B.b,B.d6,B.b,B.eK,B.b,B.b,B.b,B.dD,B.b,B.ei,B.b,B.eL,B.b,B.eB,B.b,B.dk,B.b,B.eC,B.b,B.b,B.b,B.e4,B.b,B.cV,B.b,B.f7,B.b,B.dz,B.b,B.hk,B.b,B.b,B.b,B.fP,B.b,B.d_,B.b,B.b,B.b,B.hb,B.ay,B.fE,B.b,B.eu,B.b,B.b,B.b,B.f3,B.b,B.e_,B.b,B.ha,B.b,B.fO,B.b,B.fj,B.b,B.eI,B.b,B.dy,B.b,B.b,B.b,B.dg,B.b,B.em,B.b,B.fy,B.b,B.dI,B.b,B.b,B.b,B.el,B.b,B.dp,B.b,B.fa,B.b,B.hq,B.b,B.fZ,B.b,B.b,B.b,B.dY,B.b,B.eT,B.b,B.fe,B.b,B.fG,B.b,B.dr,B.b,B.eW,B.b,B.dV,B.b,B.df,B.b,B.b,B.b,B.eb,B.b,B.eq,B.b,B.e0,B.b,B.d8,B.b,B.b,B.b,B.fW,B.b,B.dL,B.b,B.fb,B.b,B.e5,B.b,B.b,B.b,B.dx,B.b,B.ef,B.b,B.cY,B.b,B.h5,B.b,B.eV,B.b,B.b,B.b,B.hg,B.b,B.ee,B.b,B.cW,B.b,B.er,B.b,B.b,B.b,B.fY,B.b,B.dA,B.b,B.e6,B.b,B.eS,B.b,B.ep,B.b,B.dB,B.b,B.b,B.b,B.eQ,B.b,B.cZ,B.b,B.d3,B.b,B.hm,B.b,B.b,B.b,B.fQ,B.b,B.ea,B.b,B.e1,B.b,B.h6,B.b,B.fk,B.b,B.fu,B.b,B.b,B.b,B.fo,B.b,B.fF,B.b,B.dK,B.b,B.fX,B.b,B.b,B.b,B.fg,B.b,B.eG,B.b,B.dC,B.b,B.b,B.b,B.d9,B.b,B.e9,B.b,B.hd,B.b,B.fz,B.b,B.dl,B.b,B.ho,B.b,B.dj,B.b,B.dP,B.b,B.b,B.b,B.dZ,B.b,B.h0,B.b,B.ds,B.b,B.fs,B.b,B.dT,B.b,B.b,B.b,B.fC,B.b,B.fn,B.b,B.fh,B.b,B.fI,B.b,B.ez,B.b,B.da,B.b,B.fi,B.b,B.b,B.b,B.fR,B.b,B.f1,B.b,B.dt,B.b,B.eO,B.b,B.b,B.b,B.f6,B.b,B.e3,B.b,B.db,B.b,B.d2,B.b,B.e8,B.b,B.hc,B.b,B.b,B.b,B.eJ,B.b,B.hh,B.b,B.fM,B.b,B.di,B.b,B.b,B.b,B.eX,B.b,B.es,B.b,B.hi,B.b,B.fw,B.b,B.b,B.b,B.dq,B.b,B.dS,B.b,B.fd,B.b,B.fH,B.b,B.fv,B.b,B.eh,B.b,B.e2,B.b,B.de,B.b,B.ew,B.b,B.b,B.b,B.eA,B.b,B.fx,B.b,B.eE,B.b,B.fN,B.b,B.ed,B.b,B.h8,B.b,B.dv,B.b,B.b,B.b,B.ff,B.b,B.dh,B.b,B.ec,B.b,B.h2,B.b,B.b,B.b,B.dQ,B.b,B.eR,B.b,B.fl,B.b,B.d7,B.b,B.ej,B.b],t.fJ)
B.aQ=new A.bO(B.i8,[B.hG,B.hE],A.ao("bO<q,D<f>>"))
B.i5={Y:0,N:1,"`":2}
B.cg=new A.bO(B.i5,["Yes","No","No"],t.p1)
B.aE=new A.dL(0,"clumsy")
B.a8=new A.dL(1,"insult")
B.ci=new A.dL(2,"screech")
B.cj=new A.dL(3,"hiss")
B.hN=s(["{1} forget[s] what {1 he} was doing.","{1} lurch[es] around.","{1} stumble[s] awkwardly.","{1} trip[s] over {1 his} own feet!"],t.s)
B.hM=s(["{1} insult[s] {2 his} mother!","{1} jeer[s] at {2}!","{1} mock[s] {2} mercilessly!","{1} make[s] faces at {2}!","{1} laugh[s] at {2}!","{1} sneer[s] at {2}!"],t.s)
B.hD=s(["{1} screech[es] at {2}!","{1} taunt[s] {2}!","{1} cackle[s] at {2}!"],t.s)
B.hL=s(["{1} hiss[es] at {2}!","{1} spit[s] at {2}!"],t.s)
B.i0=new A.dF([B.aE,B.hN,B.a8,B.hM,B.ci,B.hD,B.cj,B.hL],A.ao("dF<dL,D<q>>"))
B.i6={L:0,E:1,R:2,O:3,G:4,Y:5}
B.cP=new A.E(232,200,21)
B.i1=new A.bO(B.i6,[B.d,B.i,B.m,B.M,B.h,B.cP],A.ao("bO<q,E>"))
B.i2=new A.dF([9786,1,9787,2,9829,3,9830,4,9827,5,9824,6,8226,7,9688,8,9675,9,9689,10,9794,11,9792,12,9834,13,9835,14,9788,15,9658,16,9668,17,8597,18,8252,19,182,20,167,21,9644,22,8616,23,8593,24,8595,25,8594,26,8592,27,8735,28,8596,29,9650,30,9660,31,8962,127,199,128,252,129,233,130,226,131,228,132,224,133,229,134,231,135,234,136,235,137,232,138,239,139,238,140,236,141,196,142,197,143,201,144,230,145,198,146,244,147,246,148,242,149,251,150,249,151,255,152,214,153,220,154,162,155,163,156,165,157,8359,158,402,159,225,160,237,161,243,162,250,163,241,164,209,165,170,166,186,167,191,168,8976,169,172,170,189,171,188,172,161,173,171,174,187,175,9617,176,9618,177,9619,178,9474,179,9508,180,9569,181,9570,182,9558,183,9557,184,9571,185,9553,186,9559,187,9565,188,9564,189,9563,190,9488,191,9492,192,9524,193,9516,194,9500,195,9472,196,9532,197,9566,198,9567,199,9562,200,9556,201,9577,202,9574,203,9568,204,9552,205,9580,206,9575,207,9576,208,9572,209,9573,210,9561,211,9560,212,9554,213,9555,214,9579,215,9578,216,9496,217,9484,218,9608,219,9604,220,9612,221,9616,222,9600,223,945,224,223,225,915,226,960,227,931,228,963,229,181,230,964,231,934,232,920,233,937,234,948,235,8734,236,966,237,949,238,8745,239,8801,240,177,241,8805,242,8804,243,8992,244,8993,245,247,246,8776,247,176,248,8729,249,183,250,8730,251,8319,252,178,253,9632,254],A.ao("dF<e,e>"))
B.i7={}
B.ch=new A.bO(B.i7,[],t.p1)
B.i9={"A-Z Del":0}
B.i3=new A.bO(B.i9,["Edit name"],t.p1)
B.ia={OK:0,"\u2195\u2194":1,"`":2}
B.i4=new A.bO(B.ia,["Enter dungeon","Change depth","Cancel"],t.p1)
B.U=new A.hh(0,"normal")
B.ck=new A.hh(1,"proper")
B.aF=new A.hh(3,"mass")
B.cm=new A.dM("you","you","your",0,"you")
B.aG=new A.dM("he","him","his",2,"he")
B.ib=new A.dM("they","them","their",4,"they")
B.cn=new A.dM("she","her","her",1,"she")
B.x=new A.dM("it","it","its",3,"it")
B.co=new A.O(10,15)
B.cp=new A.O(16,21)
B.ic=new A.O("spear","Spear Mastery")
B.id=new A.O(1,1)
B.ig=new A.O(5,8)
B.cq=new A.O(6,9)
B.ih=new A.O(7,10)
B.ii=new A.O(9,16)
B.il=new A.O(0.002,0.8)
B.im=new A.O("whip","Whip Mastery")
B.io=new A.O("Name","Enter a name for your new hero.")
B.ip=new A.O(B.D,B.d)
B.iq=new A.O(B.i,B.i)
B.ir=new A.O("dagger","Knife Fighting")
B.is=new A.O("club","Bludgeoning")
B.iu=new A.O("axe","Axe Mastery")
B.iv=new A.O("You haven't learned this skill.",B.i)
B.iw=new A.O(B.h,B.D)
B.ix=new A.O("sword","Swordfighting")
B.iy=new A.O(0.1,1)
B.ak=new A.d(0,0)
B.iz=new A.Y(B.ak,B.ak)
B.cr=new A.bJ(0,"everywhere")
B.bf=new A.hu(0,"rectangular")
B.iI=new A.hu(1,"octagonal")
B.iJ=new A.hu(2,"any")
B.iK=new A.hv(0,"small")
B.iL=new A.hv(1,"medium")
B.iM=new A.hv(2,"large")
B.iN=new A.f4(0,"anywhere")
B.ai=new A.f4(1,"open")
B.aR=new A.f4(2,"wall")
B.bg=new A.f4(3,"corner")
B.iO=new A.dh(0,"none")
B.a9=new A.dh(1,"mirrorHorizontal")
B.iP=new A.dh(2,"mirrorVertical")
B.au=new A.dh(3,"mirrorBoth")
B.q=new A.dh(4,"rotate90")
B.iQ=new A.dh(5,"rotate180")
B.iR=new A.r1(1,"oldest")
B.cx=new A.bw("shop 1")
B.cw=new A.bw("shop 2")
B.cv=new A.bw("shop 3")
B.cu=new A.bw("shop 4")
B.ct=new A.bw("shop 5")
B.cs=new A.bw("shop 6")
B.iS=new A.bw("shop 7")
B.iT=new A.bw("shop 8")
B.iU=new A.bw("shop 9")
B.bh=new A.bw("dungeon")
B.aS=new A.bw("exit")
B.cy=new A.bw("home")
B.iV=A.c8("BJ")
B.iW=A.c8("BK")
B.iX=A.c8("ym")
B.iY=A.c8("yn")
B.iZ=A.c8("yo")
B.j_=A.c8("yp")
B.j0=A.c8("yq")
B.j1=A.c8("a0")
B.j2=A.c8("zf")
B.j3=A.c8("zg")
B.j4=A.c8("zh")
B.j5=A.c8("zi")
B.aT=new A.d(0,1)
B.aU=new A.d(0,-1)
B.aV=new A.d(1,0)
B.aW=new A.d(-1,0)
B.cz=new A.fa(0,"uninitialized")
B.bj=new A.fa(1,"stats")
B.cA=new A.fa(2,"resistances")
B.cB=new A.fa(3,"all")})();(function staticFields(){$.rC=null
$.bN=A.a([],A.ao("r<a0>"))
$.vK=null
$.pW=0
$.tY=A.Ai()
$.vb=null
$.va=null
$.wL=null
$.wC=null
$.wS=null
$.t7=null
$.tg=null
$.un=null
$.rJ=A.a([],A.ao("r<D<a0>?>"))
$.fm=null
$.io=null
$.ip=null
$.ug=!1
$.b3=B.ab
$.cr=null
$.wo=null
$.cq=A.dV()
$.c7=null
$.Al=A.a(["\u250c\u2510","\u255b\u2558","\u255e\u2561"],t.s)
$.Am=A.a(["\u250c\u2558","\u2510\u255b","\u2500\u2550"],t.s)
$.Aw=A.a(["\u250c\u2510\u255b\u2558","\u2500\u2502\u2550\u2502"],t.s)
$.aT=A.dV()
$.h=null
$.bc=null
$.im=null
$.vt=0
$.v4=0
$.hq=A.a([],A.ao("r<kM>"))
$.hA=A.C(t.N,t.g)
$.c6=null
$.ah=A.dV()
$.tM=!1
$.ns=!1
$.tN=!1
$.j9=A.C(t.B,A.ao("fd"))
$.nn=null
$.bf=0
$.eg=A.a([],A.ao("r<iT>"))
$.vn=function(){var s=t.l
return A.a([A.a([B.aU,B.aV],s),A.a([B.aV,B.aU],s),A.a([B.aV,B.aT],s),A.a([B.aT,B.aV],s),A.a([B.aT,B.aW],s),A.a([B.aW,B.aT],s),A.a([B.aW,B.aU],s),A.a([B.aU,B.aW],s)],t.G)}()
$.vf=A.a([B.t,B.B,B.h,B.ac,B.cS],t.bk)
$.u6=A.a([B.J,B.G,B.N,B.t],t.bk)
$.bt=A.a([],t.f_)
$.fk=A.a([],A.ao("r<l8>"))
$.x=A.dV()
$.bW=A.dV()
$.fj=A.b7(t.B)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"BO","x_",()=>A.tb("_$dart_dartClosure"))
s($,"BN","tv",()=>A.tb("_$dart_dartClosure_dartJSInterop"))
s($,"Ea","xT",()=>A.a([new J.jX()],A.ao("r<hw>")))
s($,"DS","xH",()=>A.cQ(A.rc({
toString:function(){return"$receiver$"}})))
s($,"DT","xI",()=>A.cQ(A.rc({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"DU","xJ",()=>A.cQ(A.rc(null)))
s($,"DV","xK",()=>A.cQ(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"DY","xN",()=>A.cQ(A.rc(void 0)))
s($,"DZ","xO",()=>A.cQ(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"DX","xM",()=>A.cQ(A.w0(null)))
s($,"DW","xL",()=>A.cQ(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"E0","xQ",()=>A.cQ(A.w0(void 0)))
s($,"E_","xP",()=>A.cQ(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"E2","uX",()=>A.zk())
s($,"E8","n2",()=>A.uq(B.j1))
s($,"CG","uL",()=>{A.z_()
return $.pW})
s($,"Bw","tu",()=>{var r=A.rd("axe"),q=A.rd("club"),p=A.rd("spear"),o=A.rd("whip"),n=$.uu(),m=A.ao("r<d3>"),l=A.a([n],m),k=A.a([n],m),j=$.ux(),i=A.a([j],m),h=$.uv(),g=A.a([h],m),f=$.uw(),e=A.a([f],m),d=A.a([f],m),c=A.a([j],m),b=$.uz()
return A.a([new A.jp(),new A.jt(),new A.iK(r),new A.j1(q),new A.kZ(p),new A.lo(o),new A.iM(l),new A.iV(k),new A.j6(i),new A.jh(g),new A.jq(e),new A.jr(d),new A.jz(c),new A.jG(A.a([b],m)),new A.jH(A.a([j,b],m)),new A.jN(A.a([j],m)),new A.jP(A.a([f],m)),new A.k3(A.a([h,f],m)),new A.k5(A.a([n],m)),new A.kc(A.a([h],m)),new A.kH(A.a([h],m)),new A.kU(A.a([h,b],m)),new A.kW(A.a([n],m)),new A.l9(A.a([$.uy()],m)),new A.lq(A.a([b],m)),new A.lr(A.a([b],m))],t.eI)})
s($,"BM","ea",()=>{var r=null,q=A.ao("d8"),p=t.S,o=t.hL
return A.a([A.tQ("Adventurer","No special birthright, training, or inclination is needed to become an adventurer, simply the courage (or foolhardiness) to brave the wilds and live on one's wits. Adventurers are flexible and resourceful. They are masters of nothing, but able to learn a little of everything.",A.A([B.aY,5,B.ax,5,B.aZ,5,B.ae,2],q,p),A.a([new A.jy()],o),A.a7("item",r,r)),A.tQ("Barbarian","It's not that barbarians are stupid. Many are, in fact, quite intelligent. It's just that they apply most of that intelligence towards deciding which weapon is best suited for splitting a monster's head open.\n\nBarbarians rely on the might of their bodies and the reassuring heft of their weapons. While they aren't above using a little magic here and there, they're most comfortable when those supernatural forces are safely ensconced in a piece of familiar gear.",A.A([B.aY,1,B.ax,10,B.aZ,5],q,p),A.a([new A.jg()],o),A.a7("weapon",r,r)),A.tQ("Sorceror","While most rightly fear the awesome power and unpredictability of magic, sorcerors see it as a source of personal power and glory. Tapping magic in its raw elemental form, untethered to other objects or beings is the most dangerous form of spellcasting and most sorcerors have the scars to show for it. A small price to pay for those with the courage to tangle with the raw forces of the universe itself.",A.A([B.ax,3,B.ae,10],q,p),A.a([],o),A.a7("item",r,r))],A.ao("r<cC>"))})
s($,"BP","tw",()=>A.de(A.ao("fH")))
s($,"BL","wZ",()=>{var r=null
return A.S(r,r,r,r)})
s($,"E3","xR",()=>{var r,q,p,o,n,m,l,k=null,j=$.uV(),i=A.S(j,k,k,A.a([$.ix(),$.tB()],t.J)),h=$.aX()
j=A.S(j,h,k,k)
r=A.S($.xE(),h,k,k)
q=$.iB()
p=A.S(q,h,k,k)
o=A.S($.mM(),h,k,k)
n=A.S($.mN(),h,k,k)
m=A.S($.iA(),k,$.iy(),k)
l=$.iw()
return A.A(["I",i,"l",j,"P",r,"\u2248",p,"%",o,"&",n,"*",m,"=",A.S(l,k,q,k),"\u2261",A.S(l,h,k,k),"\u2022",A.S($.uU(),k,q,k)],t.N,t.oC)})
s($,"E9","xS",()=>{var r=null,q=t.J
return A.A(["?",A.S(r,r,r,r),".",A.S(r,$.aX(),r,r),"#",A.S(r,r,r,A.a([$.ix(),$.tB(),$.uQ(),$.uR(),$.uS()],q)),"\u250c",A.S(r,r,$.n0(),r),"\u2500",A.S(r,r,$.n_(),r),"\u2510",A.S(r,r,$.n1(),r),"-",A.S(r,r,$.iz(),r),"\u2502",A.S(r,r,$.mZ(),r),"\u2558",A.S(r,r,$.mU(),r),"\u2550",A.S(r,r,$.mT(),r),"\u255b",A.S(r,r,$.mV(),r),"\u255e",A.S(r,r,$.mX(),r),"\u2564",A.S(r,r,$.mW(),r),"\u2561",A.S(r,r,$.mY(),r),"\u03c0",A.S(r,r,$.mL(),r),"\u2248",A.S(r,r,$.iB(),r),"'",A.S(r,r,r,A.a([$.iy(),$.iA()],q))],t.N,t.oC)})
s($,"BS","eb",()=>A.bZ("air","Ai",1.2,new A.nN(),"",!1,null))
s($,"BW","ds",()=>A.bZ("earth","Ea",1.1,null,"",!1,null))
s($,"BX","b4",()=>A.bZ("fire","Fi",1.2,new A.nR(),"burns up",!0,new A.nS()))
s($,"C1","d_",()=>A.bZ("water","Wa",1.3,null,"",!1,null))
s($,"BR","dr",()=>A.bZ("acid","Ac",1.4,null,"",!1,null))
s($,"BU","c9",()=>A.bZ("cold","Co",1.2,new A.nO(),"shatters",!1,new A.nP()))
s($,"BZ","dt",()=>A.bZ("lightning","Ln",1.1,null,"",!1,null))
s($,"C_","bz",()=>A.bZ("poison","Po",2,new A.nV(),"",!1,new A.nW()))
s($,"BV","cY",()=>A.bZ("dark","Dk",1.5,new A.nQ(),"",!1,null))
s($,"BY","cZ",()=>A.bZ("light","Li",1.5,new A.nT(),"",!1,new A.nU()))
s($,"C0","du",()=>A.bZ("spirit","Sp",3,null,"",!1,null))
s($,"BT","fs",()=>A.a([$.ax(),$.eb(),$.ds(),$.b4(),$.d_(),$.dr(),$.c9(),$.dt(),$.bz(),$.cY(),$.cZ(),$.du()],A.ao("r<dC>")))
s($,"Bx","dp",()=>A.de(t.R))
s($,"By","dq",()=>A.de(t.R))
s($,"E7","v_",()=>A.de(A.ao("ju")))
s($,"C9","bh",()=>A.de(t.q))
s($,"Ed","xW",()=>A.kN("\\n\\s*"))
s($,"E6","fw",()=>{var r=t.s
return A.A([$.eb(),A.a(["wind","buffets"],r),$.ds(),A.a(["soil","buries"],r),$.b4(),A.a(["flame","burns"],r),$.d_(),A.a(["water","blasts"],r),$.dr(),A.a(["acid","melts"],r),$.c9(),A.a(["ice","freezes"],r),$.dt(),A.a(["lightning","shocks"],r),$.bz(),A.a(["poison","chokes"],r),$.cY(),A.a(["darkness","crushes"],r),$.cZ(),A.a(["light","sears"],r),$.du(),A.a(["spirit","haunts"],r)],t.h,t.m)})
s($,"Cb","ca",()=>A.de(t.P))
s($,"Cx","tx",()=>A.kI("Fae","What can be said about the fae folk that is known to be true? Dimunitive and easily harmed, they survive by cloaking themselves in fables, tricks, and subterfuge. Quick to anger and quick to forgive, the fae live each moment as if it may be their last, bright-burning flames all too aware of how easily they may be snuffed out.",A.a([new A.jo(),new A.js()],t.hL),A.A([B.aj,0.6,B.aa,1.6,B.aq,0.7,B.Z,1.1],t.X,t.i)))
s($,"Cw","ft",()=>{var r=t.X,q=t.i,p=t.hL
return A.a([A.kI("Dwarf","It takes a certain kind of person to be willing to spend their life deep under the Earth, toiling away in darkness. Dwarves aren't just willing, but delight in it. Solid, impenetrable and somewhat dim, dwarves have much in common with the mines they love.",B.cb,A.A([B.aj,1.3,B.aa,0.6,B.aq,1.4,B.Z,0.7],r,q)),A.kI("Elf","There are few things elves are not good at, as any elf will be quick to inform you. Clever, quick on their feet, and surprisingly strong for how they look. Which is radiantly beautiful, naturally.",B.cb,A.A([B.aj,1.2,B.aa,1.3,B.aq,1,B.Z,1.2],r,q)),$.tx(),A.kI("Gnome","Gnomes are gentle, quiet folk, difficult to arouse to anger (unless you interrupt one while reading). Most live a life of the mind, seeking knowledge more than adventure. But this insatiable desire for the former, on many occasions, leads them into the jaws of the latter.",A.a([new A.kV()],p),A.A([B.aj,0.7,B.aa,0.8,B.aq,1,B.Z,1.5],r,q)),A.kI("Human","Humans excel at nothing, but nor are they particularly weak in any area. Most other races consider humans sort of like mice: pesky creatures who seem do little but breed, which they do with great devotion.",A.a([new A.kG()],p),A.A([B.aj,1,B.aa,1,B.aq,1,B.Z,1],r,q))],A.ao("r<cI>"))})
s($,"Bz","uu",()=>A.fz("Arcing",B.ae,"Cast spells of lightning."))
s($,"BA","uv",()=>A.fz("Earthshaping",B.ae,"Cast spells of earth."))
s($,"BB","uw",()=>A.fz("Fireweaving",B.ae,"Cast spells of fire."))
s($,"BC","ux",()=>A.fz("Icewinding",B.ae,"Cast spells of cold."))
s($,"BD","uy",()=>A.fz("Watercoursing",B.ae,"Cast spells of water."))
s($,"BE","uz",()=>A.fz("Windchasing",B.ae,"Cast spells of air."))
s($,"BF","wY",()=>{var r=$.bf
$.bf=r+1
return new A.iG(r)})
s($,"BH","uB",()=>{var r=$.bf
$.bf=r+1
return new A.iJ(r)})
s($,"BI","uC",()=>{var r=$.bf
$.bf=r+1
return new A.iQ(r)})
s($,"CF","uK",()=>{var r=$.bf
$.bf=r+1
return new A.kY(r)})
s($,"E1","uW",()=>{var r=$.bf
$.bf=r+1
return new A.lp(r)})
s($,"CE","uJ",()=>{var r=$.wY(),q=$.bf,p=$.bf=q+1,o=$.bf=p+1,n=$.uB(),m=$.uC(),l=$.bf=o+1,k=$.uK()
$.bf=l+1
return A.a([r,new A.iO(q),new A.iP(p),n,m,new A.k2(o),k,new A.l3(l),$.uW(),$.uu(),$.uv(),$.uw(),$.ux(),$.uy(),$.uz()],t.hC)})
s($,"CD","uI",()=>{var r,q,p,o=A.C(t.N,t.M)
for(r=$.uJ(),q=0;q<15;++q){p=r[q]
o.i(0,p.gM(),p)}return o})
s($,"BG","uA",()=>A.de(A.ao("fA")))
s($,"Cu","uG",()=>{var r=null
return A.pQ(r,r,r,r)})
s($,"Cs","xf",()=>{var r=t.J,q=A.a([$.mQ()],r)
r=A.a([$.ix()],r)
return A.pQ($.mO(),q,$.mR(),r)})
s($,"Ct","xg",()=>{var r=t.J,q=A.a([$.xr()],r)
r=A.a([$.tB()],r)
return A.pQ($.uP(),q,null,r)})
s($,"Cv","xh",()=>A.pQ($.uO(),null,null,null))
s($,"Cq","xd",()=>{var r=t.J
return A.A([$.dv(),A.a([$.iB()],r),$.fu(),A.a([$.iw()],r)],t.ns,t.p)})
s($,"Cr","xe",()=>A.a([$.uQ(),$.uR(),$.uS()],t.J))
s($,"CA","mJ",()=>A.z5(B.r))
s($,"Cz","ty",()=>A.vR($.d0()))
s($,"CB","xi",()=>A.vR($.bC()))
s($,"DM","fv",()=>A.H("unformed"," ",B.u,null).a3())
s($,"DN","dw",()=>A.H("unformed wet","\u2248",B.l,null).a3())
s($,"Dc","d0",()=>A.H("open","\xb7",B.i,null).a3())
s($,"Dr","bC",()=>A.H("solid","\u2593",B.i,null).bx())
s($,"Di","d1",()=>A.H("passage","\xb7",B.cR,null).a3())
s($,"CZ","mP",()=>A.H("doorway","\u25cb",B.v,null).a3())
s($,"Ds","dv",()=>A.H("solid wet","\u2248",B.E,null).bx())
s($,"Dj","fu",()=>A.H("wet passage","\u2261",B.v,null).a3())
s($,"D1","ix",()=>A.H("flagstone wall","\u2592",B.d,B.i).bx())
s($,"D7","tB",()=>A.H("granite wall","\u2592",B.f,B.l).bx())
s($,"D3","uQ",()=>A.H("granite","\u2593",B.f,B.l).he(0,B.l,B.u).bx())
s($,"D4","uR",()=>A.H("granite","\u2593",B.f,B.l).he(0.2,B.l,B.u).bx())
s($,"D5","uS",()=>A.H("granite","\u2593",B.f,B.l).he(0.4,B.l,B.u).bx())
s($,"D0","mQ",()=>A.H("flagstone floor","\xb7",B.i,null).a3())
s($,"D6","xr",()=>A.H("granite floor","\xb7",B.f,null).a3())
s($,"Dg","mR",()=>A.H("open door","\u25cb",B.k,B.av).cn(A.Bp()).a3())
s($,"CV","mO",()=>A.H("closed door","\u25d9",B.k,B.av).cn(A.Bs()).jL())
s($,"Dh","xw",()=>A.H("open square door","\u2642",B.k,B.av).cn(A.Bq()).a3())
s($,"CW","uP",()=>A.H("closed square door","\u2640",B.k,B.av).cn(A.Bt()).jL())
s($,"Dd","xv",()=>A.H("open barred door","\u2642",B.d,B.f).cn(A.Bo()).a3())
s($,"CS","uO",()=>A.H("closed barred door","\u266a",B.d,B.f).cn(A.Br()).cT($.U().ca(0,$.bA())))
s($,"CO","xm",()=>A.H("burnt floor","\u03c6",B.l,null).a3())
s($,"CP","xn",()=>A.H("burnt floor","\u03b5",B.l,null).a3())
s($,"Du","uT",()=>A.H("stairs","\u2261",B.t,B.f).c7(B.aS).a3())
s($,"CM","iw",()=>A.H("bridge","\u2261",B.k,B.av).a3())
s($,"D2","tA",()=>A.H("moss","\u2591",B.a_,null).eT(128).a3())
s($,"DQ","iB",()=>A.H("water","\u2248",B.E,B.C).o5(10,0.5,B.C,B.u).eT(32).cT($.U().ca(0,$.iv())))
s($,"Dw","uU",()=>A.H("stepping stone","\u2022",B.o,B.C).a3())
s($,"CX","xo",()=>A.H("dirt","\xb7",B.v,null).a3())
s($,"CY","xp",()=>A.H("dirt2","\u03c6",B.v,null).a3())
s($,"D8","iy",()=>A.H("grass","\u2591",B.p,null).a3())
s($,"DI","iA",()=>A.H("tall grass","\u221a",B.p,null).a3())
s($,"DJ","tE",()=>A.H("tree","\u25b2",B.p,B.A).bx())
s($,"DK","tF",()=>A.H("tree","\u2660",B.p,B.A).bx())
s($,"DL","tG",()=>A.H("tree","\u2663",B.p,B.A).bx())
s($,"Df","tD",()=>A.H("open chest","\u2320",B.k,null).aM())
s($,"CU","mN",()=>A.H("closed chest","\u2321",B.k,null).cn(new A.r7()).aM())
s($,"CT","mM",()=>A.H("closed barrel","\xb0",B.k,null).cn(new A.r6()).aM())
s($,"De","tC",()=>A.H("open barrel","\u2219",B.k,null).aM())
s($,"DG","n0",()=>A.H("table","\u250c",B.k,null).aM())
s($,"DF","n_",()=>A.H("table","\u2500",B.k,null).aM())
s($,"DH","n1",()=>A.H("table","\u2510",B.k,null).aM())
s($,"DE","mZ",()=>A.H("table","\u2502",B.k,null).aM())
s($,"DA","iz",()=>A.H("table"," ",B.k,null).aM())
s($,"Dy","mU",()=>A.H("table","\u2558",B.k,null).aM())
s($,"Dx","mT",()=>A.H("table","\u2550",B.k,null).aM())
s($,"Dz","mV",()=>A.H("table","\u255b",B.k,null).aM())
s($,"DC","mX",()=>A.H("table","\u255e",B.k,null).aM())
s($,"DB","mW",()=>A.H("table","\u2564",B.k,null).aM())
s($,"DD","mY",()=>A.H("table","\u2561",B.k,null).aM())
s($,"CQ","mK",()=>A.H("candle","\u2265",B.F,null).eT(128).aM())
s($,"DP","uV",()=>A.H("wall torch","\u2264",B.h,B.f).eT(192).bx())
s($,"Dv","xE",()=>A.H("statue","P",B.t,B.f).aM())
s($,"CR","mL",()=>A.H("chair","\u03c0",B.k,null).a3())
s($,"CN","xl",()=>A.H("brown jelly stain","\xb7",B.k,null).a3())
s($,"D9","xs",()=>A.H("gray jelly stain","\xb7",B.l,null).a3())
s($,"Da","xt",()=>A.H("green jelly stain","\xb7",B.z,null).a3())
s($,"Dk","xx",()=>A.H("red jelly stain","\xb7",B.m,null).a3())
s($,"DO","xF",()=>A.H("violet jelly stain","\xb7",B.V,null).a3())
s($,"DR","xG",()=>A.H("white jelly stain","\xb7",B.t,null).a3())
s($,"Dt","mS",()=>A.H("spiderweb","\xf7",B.f,null).a3())
s($,"D_","xq",()=>A.H("dungeon entrance","\u2261",B.d,B.l).c7(B.bh).a3())
s($,"Db","xu",()=>A.H("home entrance","\u25cb",B.F,null).c7(B.cy).a3())
s($,"Dl","xy",()=>A.H("shop entrance","\u25cb",B.M,null).c7(B.cx).a3())
s($,"Dm","xz",()=>A.H("shop entrance","\u25cb",B.h,null).c7(B.cw).a3())
s($,"Dn","xA",()=>A.H("shop entrance","\u25cb",B.z,null).c7(B.cv).a3())
s($,"Do","xB",()=>A.H("shop entrance","\u25cb",B.p,null).c7(B.cu).a3())
s($,"Dp","xC",()=>A.H("shop entrance","\u25cb",B.a_,null).c7(B.ct).a3())
s($,"Dq","xD",()=>A.H("shop entrance","\u25cb",B.J,null).c7(B.cs).a3())
s($,"CL","tz",()=>A.A([$.mR(),30,$.mO(),30,$.iw(),50,$.tA(),10,$.iy(),3,$.iA(),3,$.tE(),40,$.tF(),40,$.tG(),40,$.n0(),20,$.n_(),20,$.n1(),20,$.mZ(),20,$.iz(),20,$.mU(),20,$.mT(),20,$.mV(),20,$.mX(),20,$.mW(),20,$.mY(),20,$.tD(),40,$.mN(),80,$.tC(),15,$.mM(),40,$.mK(),1,$.mL(),10,$.mS(),1],t.ns,t.S))
s($,"CK","uN",()=>A.A([$.mR(),70,$.mO(),70,$.iw(),50,$.tA(),20,$.iy(),30,$.iA(),50,$.tE(),100,$.tF(),100,$.tG(),100,$.n0(),60,$.n_(),60,$.n1(),60,$.mZ(),60,$.iz(),60,$.mU(),60,$.mT(),60,$.mV(),60,$.mX(),60,$.mW(),60,$.mY(),60,$.tD(),70,$.mN(),80,$.tC(),30,$.mM(),40,$.mK(),60,$.mL(),40,$.mS(),20],t.ns,t.S))
s($,"CJ","xk",()=>{var r=$.iw(),q=t.J,p=A.a([$.iB()],q),o=$.iy(),n=$.xo(),m=$.xp()
return A.A([r,p,o,A.a([n,m],q),$.iA(),A.a([n,m],q),$.tE(),A.a([n,m],q),$.tF(),A.a([n,m],q),$.tG(),A.a([n,m],q),$.mK(),A.a([$.iz()],q),$.mS(),A.a([$.mQ()],q)],t.ns,t.p)})
s($,"BQ","ax",()=>A.bZ("none","No",1,null,"",!1,null))
s($,"Ca","x7",()=>A.kN("\\[([^|\\]]+)(\\|([^\\]]+))?\\]"))
s($,"CH","uM",()=>A.z1($.xb().a6(1)))
s($,"Co","xb",()=>A.yQ("something",B.aF,B.x))
s($,"Cn","xa",()=>A.kN("\\[([^|\\]]+)(\\|([^\\]]+))?\\]"))
s($,"Cm","x9",()=>A.kN("^\\(([^)]+)\\)(.*)"))
s($,"Cp","xc",()=>A.yP("you","you","you",B.cm))
s($,"C8","x6",()=>A.kN("^(\\d{1,3})((\\d{3})+)$"))
s($,"Ec","xV",()=>A.vk(A.ao("hz<d>")))
s($,"Eb","xU",()=>A.vk(A.ao("hz<L>")))
s($,"Ci","uF",()=>A.kf(0))
s($,"Cd","bA",()=>A.kf(1))
s($,"Cg","U",()=>A.kf(2))
s($,"Cj","iv",()=>A.kf(4))
s($,"Ck","aX",()=>A.kf(8))
s($,"Ce","x8",()=>$.bA().ca(0,$.U()))
s($,"Cf","bB",()=>$.bA().ca(0,$.aX()))
s($,"Ch","uE",()=>$.U().ca(0,$.aX()))
s($,"Cc","uD",()=>$.bA().ca(0,$.U()).ca(0,$.iv()).ca(0,$.aX()))
s($,"CI","xj",()=>{var r=null
return A.zd("uninitialized",r,$.uF(),r,r,r)})
s($,"E4","uY",()=>A.A([B.L,"|",B.Q,"/",B.O,"-",B.P,"\\",B.K,"|",B.S,"/",B.R,"-",B.T,"\\"],t.j,t.N))
s($,"E5","uZ",()=>{var r="\u2022",q="Oo",p=".",o=t.bk,n=A.ao("r<D<W>>")
return A.A([$.ax(),A.a([A.T(r,A.a([B.F],o)),A.T(r,A.a([B.F],o)),A.T(r,A.a([B.k],o))],n),$.eb(),A.a([A.T(q,A.a([B.t,B.J],o)),A.T(p,A.a([B.J],o)),A.T(p,A.a([B.G],o))],n),$.ds(),A.a([A.T("*%",A.a([B.F,B.h],o)),A.T("*%",A.a([B.k,B.v],o)),A.T("\u2022*",A.a([B.k],o)),A.T(r,A.a([B.v],o))],n),$.b4(),A.a([A.T("\u25b2^",A.a([B.h,B.B],o)),A.T("*^",A.a([B.M],o)),A.T("^",A.a([B.m],o)),A.T("^",A.a([B.v,B.m],o)),A.T(p,A.a([B.v,B.m],o))],n),$.d_(),A.a([A.T(q,A.a([B.J,B.G],o)),A.T("o\u2022^",A.a([B.G,B.E],o)),A.T("\u2022^",A.a([B.E,B.C],o)),A.T("^~",A.a([B.E,B.C],o)),A.T("~",A.a([B.C],o)),A.T(p,A.a([B.C,B.an],o))],n),$.dr(),A.a([A.T(q,A.a([B.B,B.h],o)),A.T("o\u2022~",A.a([B.z,B.h],o)),A.T(":,",A.a([B.z,B.ac],o)),A.T(p,A.a([B.z],o))],n),$.c9(),A.a([A.T("*",A.a([B.t],o)),A.T("+x",A.a([B.J,B.t],o)),A.T("+x",A.a([B.G,B.o],o)),A.T(p,A.a([B.f,B.C],o))],n),$.dt(),A.a([A.T("*",A.a([B.N],o)),A.T("-|\\/",A.a([B.V,B.t],o)),A.T(p,A.a([B.u,B.u,B.u,B.N],o))],n),$.bz(),A.a([A.T(q,A.a([B.ad,B.z],o)),A.T("o\u2022",A.a([B.p,B.p,B.ac],o)),A.T(r,A.a([B.A,B.ac],o)),A.T(p,A.a([B.A],o))],n),$.cY(),A.a([A.T("*%",A.a([B.u,B.u,B.l],o)),A.T(r,A.a([B.u,B.u,B.o],o)),A.T(p,A.a([B.u],o)),A.T(p,A.a([B.u],o))],n),$.cZ(),A.a([A.T("*",A.a([B.t],o)),A.T("x+",A.a([B.t,B.B],o)),A.T(":;\"'`,",A.a([B.B,B.h],o)),A.T(p,A.a([B.o,B.B],o))],n),$.du(),A.a([A.T("Oo*+",A.a([B.N,B.o],o)),A.T("o+",A.a([B.V,B.p],o)),A.T("\u2022.",A.a([B.an,B.A,B.A],o))],n)],t.h,A.ao("D<D<W>>"))})
s($,"C3","x1",()=>A.am("!",B.a_,null))
s($,"C7","x5",()=>A.am("/",B.J,null))
s($,"C2","x0",()=>A.am("\\",B.J,null))
s($,"C4","x2",()=>A.am("-",B.a_,null))
s($,"C6","x4",()=>A.am("<",B.a_,null))
s($,"C5","x3",()=>A.am(">",B.a_,null))
s($,"CC","uH",()=>A.A([$.eb(),"A",$.ds(),"E",$.b4(),"F",$.d_(),"W",$.dr(),"A",$.c9(),"C",$.dt(),"L",$.bz(),"P",$.cY(),"D",$.cZ(),"L",$.du(),"S"],t.h,t.N))
s($,"Ee","m",()=>new A.qd(A.z2(A.vL())))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.eK,SharedArrayBuffer:A.eK,ArrayBufferView:A.he,DataView:A.ki,Float32Array:A.kj,Float64Array:A.kk,Int16Array:A.kl,Int32Array:A.km,Int8Array:A.kn,Uint16Array:A.ko,Uint32Array:A.kp,Uint8ClampedArray:A.hf,CanvasPixelArray:A.hf,Uint8Array:A.kq})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.eL.$nativeSuperclassTag="ArrayBufferView"
A.i3.$nativeSuperclassTag="ArrayBufferView"
A.i4.$nativeSuperclassTag="ArrayBufferView"
A.hc.$nativeSuperclassTag="ArrayBufferView"
A.i5.$nativeSuperclassTag="ArrayBufferView"
A.i6.$nativeSuperclassTag="ArrayBufferView"
A.hd.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.Bd
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.dart.js.map
