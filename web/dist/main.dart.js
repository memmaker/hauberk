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
if(a[b]!==s){A.Bc(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.a(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.ud(b)
return new s(c,this)}:function(){if(s===null)s=A.ud(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.ud(a).prototype
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
ui(a,b,c,d){return{i:a,p:b,e:c,x:d}},
uf(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.ug==null){A.AS()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.n(A.b9("Return interceptor for "+A.J(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.rv
if(o==null)o=$.rv=A.t4(n)
p=q[o]}if(p!=null)return p
p=A.B1(a)
if(p!=null)return p
if(typeof a=="function")return B.ho
s=Object.getPrototypeOf(a)
if(s==null)return B.cj
if(s===Object.prototype)return B.cj
if(typeof q=="function"){o=$.rv
if(o==null)o=$.rv=A.t4(n)
Object.defineProperty(q,o,{value:B.bh,enumerable:false,writable:true,configurable:true})
return B.bh}return B.bh},
vp(a,b){if(a<0||a>4294967295)throw A.n(A.cJ(a,0,4294967295,"length",null))
return J.yn(new Array(a),b)},
vq(a,b){if(a<0)throw A.n(A.aC("Length must be a non-negative integer: "+a,null))
return A.a(new Array(a),b.h("r<0>"))},
vo(a,b){if(a<0)throw A.n(A.aC("Length must be a non-negative integer: "+a,null))
return A.a(new Array(a),b.h("r<0>"))},
yn(a,b){var s=A.a(a,b.h("r<0>"))
s.$flags=1
return s},
yo(a,b){var s=t.bP
return J.xO(s.a(a),s.a(b))},
vr(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
yq(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.vr(r))break;++b}return b},
yr(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.c(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.vr(q))break}return b},
e2(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.fY.prototype
return J.jU.prototype}if(typeof a=="string")return J.da.prototype
if(a==null)return J.fZ.prototype
if(typeof a=="boolean")return J.fX.prototype
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.db.prototype
if(typeof a=="symbol")return J.h2.prototype
if(typeof a=="bigint")return J.h0.prototype
return a}if(a instanceof A.a0)return a
return J.uf(a)},
iq(a){if(typeof a=="string")return J.da.prototype
if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.db.prototype
if(typeof a=="symbol")return J.h2.prototype
if(typeof a=="bigint")return J.h0.prototype
return a}if(a instanceof A.a0)return a
return J.uf(a)},
mF(a){if(a==null)return a
if(Array.isArray(a))return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.db.prototype
if(typeof a=="symbol")return J.h2.prototype
if(typeof a=="bigint")return J.h0.prototype
return a}if(a instanceof A.a0)return a
return J.uf(a)},
AK(a){if(typeof a=="number")return J.dE.prototype
if(a==null)return a
if(!(a instanceof A.a0))return J.dk.prototype
return a},
AL(a){if(typeof a=="number")return J.dE.prototype
if(typeof a=="string")return J.da.prototype
if(a==null)return a
if(!(a instanceof A.a0))return J.dk.prototype
return a},
AM(a){if(typeof a=="string")return J.da.prototype
if(a==null)return a
if(!(a instanceof A.a0))return J.dk.prototype
return a},
ax(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.e2(a).a0(a,b)},
aY(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.AV(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.iq(a).p(a,b)},
uU(a,b){return J.mF(a).j(a,b)},
xN(a,b){return J.AM(a).ha(a,b)},
uV(a,b,c){return J.AK(a).P(a,b,c)},
xO(a,b){return J.AL(a).ai(a,b)},
tA(a,b){return J.mF(a).aU(a,b)},
cb(a){return J.e2(a).gZ(a)},
ao(a){return J.mF(a).gN(a)},
dx(a){return J.iq(a).gI(a)},
xP(a){return J.e2(a).gaF(a)},
uW(a){return J.mF(a).e4(a)},
ea(a){return J.e2(a).t(a)},
xQ(a,b){return J.mF(a).kQ(a,b)},
jO:function jO(){},
fX:function fX(){},
fZ:function fZ(){},
h1:function h1(){},
dd:function dd(){},
kw:function kw(){},
dk:function dk(){},
db:function db(){},
h0:function h0(){},
h2:function h2(){},
r:function r(a){this.$ti=a},
jT:function jT(){},
oW:function oW(a){this.$ti=a},
aZ:function aZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dE:function dE(){},
fY:function fY(){},
jU:function jU(){},
da:function da(){}},A={tJ:function tJ(){},
vu(a){return new A.dc("Field '"+a+"' has been assigned during initialization.")},
dF(a){return new A.dc("Field '"+a+"' has not been initialized.")},
yu(a){return new A.dc("Local '"+a+"' has not been initialized.")},
vv(a){return new A.dc("Field '"+a+"' has already been initialized.")},
cN(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
qQ(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ww(a,b,c){return a},
uh(a){var s,r
for(s=$.bL.length,r=0;r<s;++r)if(a===$.bL[r])return!0
return!1},
z0(a,b,c,d){A.hn(b,"start")
if(c!=null){A.hn(c,"end")
if(b>c)A.a_(A.cJ(b,0,c,"start",null))}return new A.hD(a,b,c,d.h("hD<0>"))},
pm(a,b,c,d){if(t.gt.b(a))return new A.dA(a,b,c.h("@<0>").ak(d).h("dA<1,2>"))
return new A.dI(a,b,c.h("@<0>").ak(d).h("dI<1,2>"))},
z1(a,b,c){var s="takeCount"
A.xT(b,s,t.S)
A.hn(b,s)
if(t.gt.b(a))return new A.fJ(a,b,c.h("fJ<0>"))
return new A.dP(a,b,c.h("dP<0>"))},
cE(){return new A.dN("No element")},
yl(){return new A.dN("Too many elements")},
yk(){return new A.dN("Too few elements")},
dc:function dc(a){this.a=a},
d6:function d6(a){this.a=a},
qb:function qb(){},
K:function K(){},
aF:function aF(){},
hD:function hD(a,b,c,d){var _=this
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
dI:function dI(a,b,c){this.a=a
this.b=b
this.$ti=c},
dA:function dA(a,b,c){this.a=a
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
dP:function dP(a,b,c){this.a=a
this.b=b
this.$ti=c},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
hE:function hE(a,b,c){this.a=a
this.b=b
this.$ti=c},
hF:function hF(a,b,c){this.a=a
this.b=b
this.$ti=c},
hG:function hG(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.$ti=c},
hL:function hL(a,b){this.a=a
this.$ti=b},
bm:function bm(a,b){this.a=a
this.$ti=b},
aA:function aA(){},
dl:function dl(){},
f6:function f6(){},
cL:function cL(a,b){this.a=a
this.$ti=b},
wP(a){var s=A.wO(a)
if(s!=null)return s
return"minified:"+a},
AV(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
J(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ea(a)
return s},
hk(a){var s,r=$.vC
if(r==null)r=$.vC=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
kA(a){var s,r,q,p
if(a instanceof A.a0)return A.bK(A.cs(a),null)
s=J.e2(a)
if(s===B.hl||s===B.hp||t.cx.b(a)){r=B.bk(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bK(A.cs(a),null)},
vE(a){var s,r,q
if(a==null||typeof a=="number"||A.u8(a))return J.ea(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.d5)return a.t(0)
if(a instanceof A.co)return a.je(!0)
s=$.xL()
for(r=0;r<1;++r){q=s[r].pm(a)
if(q!=null)return q}return"Instance of '"+A.kA(a)+"'"},
vD(){return Date.now()},
yP(){var s,r
if($.pP!==0)return
$.pP=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.pP=1e6
$.tQ=new A.pO(r)},
vB(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
yQ(a){var s,r,q,p=A.a([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
if(!A.fk(q))throw A.n(A.io(q))
if(q<=65535)B.a.j(p,q)
else if(q<=1114111){B.a.j(p,55296+(B.c.eD(q-65536,10)&1023))
B.a.j(p,56320+(q&1023))}else throw A.n(A.io(q))}return A.vB(p)},
vF(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.fk(q))throw A.n(A.io(q))
if(q<0)throw A.n(A.io(q))
if(q>65535)return A.yQ(a)}return A.vB(a)},
b2(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.eD(s,10)|55296)>>>0,s&1023|56320)}}throw A.n(A.cJ(a,0,1114111,null,null))},
eS(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
yO(a){var s=A.eS(a).getFullYear()+0
return s},
yM(a){var s=A.eS(a).getMonth()+1
return s},
yI(a){var s=A.eS(a).getDate()+0
return s},
yJ(a){var s=A.eS(a).getHours()+0
return s},
yL(a){var s=A.eS(a).getMinutes()+0
return s},
yN(a){var s=A.eS(a).getSeconds()+0
return s},
yK(a){var s=A.eS(a).getMilliseconds()+0
return s},
yH(a){var s=a.$thrownJsError
if(s==null)return null
return A.e3(s)},
AQ(a){throw A.n(A.io(a))},
c(a,b){if(a==null)J.dx(a)
throw A.n(A.mE(a,b))},
mE(a,b){var s,r="index"
if(!A.fk(b))return new A.ce(!0,b,r,null)
s=A.w(J.dx(a))
if(b<0||b>=s)return A.or(b,s,a,null,r)
return A.hm(b,r)},
io(a){return new A.ce(!0,a,null,null)},
n(a){return A.aQ(a,new Error())},
aQ(a,b){var s
if(a==null)a=new A.cP()
b.dartException=a
s=A.Bj
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Bj(){return J.ea(this.dartException)},
a_(a,b){throw A.aQ(a,b==null?new Error():b)},
bo(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.a_(A.zJ(a,b,c),s)},
zJ(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.hH("'"+s+"': Cannot "+o+" "+l+k+n)},
p(a){throw A.n(A.b_(a))},
cQ(a){var s,r,q,p,o,n
a=A.wL(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.r4(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
r5(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
vT(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
tK(a,b){var s=b==null,r=s?null:b.method
return new A.jV(a,r,s?null:b.receiver)},
dn(a){if(a==null)return new A.pG(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.e6(a,a.dartException)
return A.Au(a)},
e6(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
Au(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.eD(r,16)&8191)===10)switch(q){case 438:return A.e6(a,A.tK(A.J(s)+" (Error "+q+")",null))
case 445:case 5007:A.J(s)
return A.e6(a,new A.hg())}}if(a instanceof TypeError){p=$.xz()
o=$.xA()
n=$.xB()
m=$.xC()
l=$.xF()
k=$.xG()
j=$.xE()
$.xD()
i=$.xI()
h=$.xH()
g=p.bO(s)
if(g!=null)return A.e6(a,A.tK(A.a3(s),g))
else{g=o.bO(s)
if(g!=null){g.method="call"
return A.e6(a,A.tK(A.a3(s),g))}else if(n.bO(s)!=null||m.bO(s)!=null||l.bO(s)!=null||k.bO(s)!=null||j.bO(s)!=null||m.bO(s)!=null||i.bO(s)!=null||h.bO(s)!=null){A.a3(s)
return A.e6(a,new A.hg())}}return A.e6(a,new A.ld(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.hz()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.e6(a,new A.ce(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.hz()
return a},
e3(a){var s
if(a==null)return new A.ib(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.ib(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
uj(a){if(a==null)return J.cb(a)
if(typeof a=="object")return A.hk(a)
return J.cb(a)},
AC(a){if(typeof a=="number")return B.e.gZ(a)
if(a instanceof A.mv)return A.hk(a)
if(a instanceof A.co)return a.gZ(a)
return A.uj(a)},
wz(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
zW(a,b,c,d,e,f){t.gY.a(a)
switch(A.w(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.n(new A.rl("Unsupported number of arguments for wrapped closure"))},
mD(a,b){var s=a.$identity
if(!!s)return s
s=A.AD(a,b)
a.$identity=s
return s},
AD(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.zW)},
y1(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.kZ().constructor.prototype):Object.create(new A.ee(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.v7(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.xY(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.v7(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
xY(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.n("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.xV)}throw A.n("Error in functionType of tearoff")},
xZ(a,b,c,d){var s=A.v6
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
v7(a,b,c,d){if(c)return A.y0(a,b,d)
return A.xZ(b.length,d,a,b)},
y_(a,b,c,d){var s=A.v6,r=A.xW
switch(b?-1:a){case 0:throw A.n(new A.kQ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
y0(a,b,c){var s,r
if($.v4==null)$.v4=A.v3("interceptor")
if($.v5==null)$.v5=A.v3("receiver")
s=b.length
r=A.y_(s,c,a,b)
return r},
ud(a){return A.y1(a)},
xV(a,b){return A.ih(v.typeUniverse,A.cs(a.a),b)},
v6(a){return a.a},
xW(a){return a.b},
v3(a){var s,r,q,p=new A.ee("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.n(A.aC("Field name "+a+" not found.",null))},
t4(a){return v.getIsolateTag(a)},
B1(a){var s,r,q,p,o,n=A.a3($.wD.$1(a)),m=$.t0[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.t9[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.rR($.wu.$2(a,n))
if(q!=null){m=$.t0[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.t9[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.tf(s)
$.t0[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.t9[n]=s
return s}if(p==="-"){o=A.tf(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.wJ(a,s)
if(p==="*")throw A.n(A.b9(n))
if(v.leafTags[n]===true){o=A.tf(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.wJ(a,s)},
wJ(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ui(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
tf(a){return J.ui(a,!1,null,!!a.$ibG)},
B4(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.tf(s)
else return J.ui(s,c,null,null)},
AS(){if(!0===$.ug)return
$.ug=!0
A.AT()},
AT(){var s,r,q,p,o,n,m,l
$.t0=Object.create(null)
$.t9=Object.create(null)
A.AR()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.wK.$1(o)
if(n!=null){m=A.B4(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
AR(){var s,r,q,p,o,n,m=B.cB()
m=A.fn(B.cC,A.fn(B.cD,A.fn(B.bl,A.fn(B.bl,A.fn(B.cE,A.fn(B.cF,A.fn(B.cG(B.bk),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.wD=new A.t6(p)
$.wu=new A.t7(o)
$.wK=new A.t8(n)},
fn(a,b){return a(b)||b},
zn(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.c(b,s)
if(!J.ax(r,b[s]))return!1}return!0},
AF(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
vs(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.n(A.ve("Illegal RegExp pattern ("+String(o)+")",a))},
B9(a,b,c){var s=a.indexOf(b,c)
return s>=0},
wy(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
wL(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bg(a,b,c){var s
if(typeof b=="string")return A.Bb(a,b,c)
if(b instanceof A.h_){s=b.giT()
s.lastIndex=0
return a.replace(s,A.wy(c))}return A.Ba(a,b,c)},
Ba(a,b,c){var s,r,q,p
for(s=J.xN(b,a),s=s.gN(s),r=0,q="";s.q();){p=s.gH()
q=q+a.substring(r,p.gi8())+c
r=p.ghp()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
Bb(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.wL(b),"g"),A.wy(c))},
ws(a){return a},
wM(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.ha(0,a),s=new A.hN(s.a,s.b,s.c),r=t.lu,q=0,p="";s.q();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.J(A.ws(B.j.aI(a,q,m)))+A.J(c.$1(o))
q=m+n[0].length}s=p+A.J(A.ws(B.j.cN(a,q)))
return s.charCodeAt(0)==0?s:s},
Q:function Q(a,b){this.a=a
this.b=b},
a2:function a2(a){this.a=a},
ek:function ek(){},
bO:function bO(a,b,c){this.a=a
this.b=b
this.$ti=c},
hY:function hY(a,b){this.a=a
this.$ti=b},
hZ:function hZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dD:function dD(a,b){this.a=a
this.$ti=b},
pO:function pO(a){this.a=a},
hu:function hu(){},
r4:function r4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hg:function hg(){},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
ld:function ld(a){this.a=a},
pG:function pG(a){this.a=a},
ib:function ib(a){this.a=a
this.b=null},
d5:function d5(){},
iX:function iX(){},
iY:function iY(){},
l3:function l3(){},
kZ:function kZ(){},
ee:function ee(a,b){this.a=a
this.b=b},
kQ:function kQ(a){this.a=a},
c0:function c0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
oX:function oX(a){this.a=a},
p6:function p6(a,b){var _=this
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
dG:function dG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
h3:function h3(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
t6:function t6(a){this.a=a},
t7:function t7(a){this.a=a},
t8:function t8(a){this.a=a},
co:function co(){},
fd:function fd(){},
fe:function fe(){},
h_:function h_(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
i_:function i_(a){this.b=a},
lp:function lp(a,b,c){this.a=a
this.b=b
this.c=c},
hN:function hN(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
l_:function l_(a,b){this.a=a
this.c=b},
mq:function mq(a,b,c){this.a=a
this.b=b
this.c=c},
mr:function mr(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Bc(a){throw A.aQ(A.vu(a),new Error())},
b(){throw A.aQ(A.dF(""),new Error())},
aq(){throw A.aQ(A.vv(""),new Error())},
e7(){throw A.aQ(A.vu(""),new Error())},
dT(){var s=new A.ri()
return s.b=s},
ri:function ri(){this.b=null},
cX(a,b,c){if(a>>>0!==a||a>=c)throw A.n(A.mE(b,a))},
eJ:function eJ(){},
hc:function hc(){},
kf:function kf(){},
eK:function eK(){},
ha:function ha(){},
hb:function hb(){},
kg:function kg(){},
kh:function kh(){},
ki:function ki(){},
kj:function kj(){},
kk:function kk(){},
kl:function kl(){},
km:function km(){},
hd:function hd(){},
kn:function kn(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){},
i3:function i3(){},
tW(a,b){var s=b.c
return s==null?b.c=A.ie(a,"jx",[b.x]):s},
vP(a){var s=a.w
if(s===6||s===7)return A.vP(a.x)
return s===11||s===12},
yW(a){return a.as},
B6(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
av(a){return A.rK(v.typeUniverse,a,!1)},
e_(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.e_(a1,s,a3,a4)
if(r===s)return a2
return A.w4(a1,r,!0)
case 7:s=a2.x
r=A.e_(a1,s,a3,a4)
if(r===s)return a2
return A.w3(a1,r,!0)
case 8:q=a2.y
p=A.fm(a1,q,a3,a4)
if(p===q)return a2
return A.ie(a1,a2.x,p)
case 9:o=a2.x
n=A.e_(a1,o,a3,a4)
m=a2.y
l=A.fm(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.u4(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.fm(a1,j,a3,a4)
if(i===j)return a2
return A.w5(a1,k,i)
case 11:h=a2.x
g=A.e_(a1,h,a3,a4)
f=a2.y
e=A.Ar(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.w2(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.fm(a1,d,a3,a4)
o=a2.x
n=A.e_(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.u5(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.n(A.bC("Attempted to substitute unexpected RTI kind "+a0))}},
fm(a,b,c,d){var s,r,q,p,o=b.length,n=A.rL(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.e_(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
As(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.rL(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.e_(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Ar(a,b,c,d){var s,r=b.a,q=A.fm(a,r,c,d),p=b.b,o=A.fm(a,p,c,d),n=b.c,m=A.As(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.lS()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
wx(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.AO(s)
return a.$S()}return null},
AU(a,b){var s
if(A.vP(b))if(a instanceof A.d5){s=A.wx(a)
if(s!=null)return s}return A.cs(a)},
cs(a){if(a instanceof A.a0)return A.y(a)
if(Array.isArray(a))return A.M(a)
return A.u7(J.e2(a))},
M(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
y(a){var s=a.$ti
return s!=null?s:A.u7(a)},
u7(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.zT(a,s)},
zT(a,b){var s=a instanceof A.d5?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.zw(v.typeUniverse,s.name)
b.$ccache=r
return r},
AO(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.rK(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
AN(a){return A.e0(A.y(a))},
ub(a){var s
if(a instanceof A.co)return A.AH(a.$r,a.fN())
s=a instanceof A.d5?A.wx(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.xP(a).a
if(Array.isArray(a))return A.M(a)
return A.cs(a)},
e0(a){var s=a.r
return s==null?a.r=new A.mv(a):s},
AH(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.c(q,0)
s=A.ih(v.typeUniverse,A.ub(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.c(q,r)
s=A.w7(v.typeUniverse,s,A.ub(q[r]))}return A.ih(v.typeUniverse,s,a)},
c8(a){return A.e0(A.rK(v.typeUniverse,a,!1))},
zS(a){var s=this
s.b=A.Ap(s)
return s.b(a)},
Ap(a){var s,r,q,p,o
if(a===t.K)return A.A1
if(A.e4(a))return A.A5
s=a.w
if(s===6)return A.zQ
if(s===1)return A.wj
if(s===7)return A.zX
r=A.Ao(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.e4)){a.f="$i"+q
if(q==="C")return A.A_
if(a===t.E)return A.zZ
return A.A4}}else if(s===10){p=A.AF(a.x,a.y)
o=p==null?A.wj:p
return o==null?A.fh(o):o}return A.zO},
Ao(a){if(a.w===8){if(a===t.S)return A.fk
if(a===t.i||a===t.cZ)return A.A0
if(a===t.N)return A.A3
if(a===t.y)return A.u8}return null},
zR(a){var s=this,r=A.zN
if(A.e4(s))r=A.zA
else if(s===t.K)r=A.fh
else if(A.fq(s)){r=A.zP
if(s===t.aV)r=A.wa
else if(s===t.jv)r=A.rR
else if(s===t.fU)r=A.zy
else if(s===t.ae)r=A.wb
else if(s===t.dz)r=A.zz
else if(s===t.mU)r=A.bX}else if(s===t.S)r=A.w
else if(s===t.N)r=A.a3
else if(s===t.y)r=A.dY
else if(s===t.cZ)r=A.dZ
else if(s===t.i)r=A.by
else if(s===t.E)r=A.O
s.a=r
return s.a(a)},
zO(a){var s=this
if(a==null)return A.fq(s)
return A.AW(v.typeUniverse,A.AU(a,s),s)},
zQ(a){if(a==null)return!0
return this.x.b(a)},
A4(a){var s,r=this
if(a==null)return A.fq(r)
s=r.f
if(a instanceof A.a0)return!!a[s]
return!!J.e2(a)[s]},
A_(a){var s,r=this
if(a==null)return A.fq(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.a0)return!!a[s]
return!!J.e2(a)[s]},
zZ(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.a0)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
wi(a){if(typeof a=="object"){if(a instanceof A.a0)return t.E.b(a)
return!0}if(typeof a=="function")return!0
return!1},
zN(a){var s=this
if(a==null){if(A.fq(s))return a}else if(s.b(a))return a
throw A.aQ(A.wc(a,s),new Error())},
zP(a){var s=this
if(a==null||s.b(a))return a
throw A.aQ(A.wc(a,s),new Error())},
wc(a,b){return new A.ic("TypeError: "+A.vW(a,A.bK(b,null)))},
vW(a,b){return A.ji(a)+": type '"+A.bK(A.ub(a),null)+"' is not a subtype of type '"+b+"'"},
bV(a,b){return new A.ic("TypeError: "+A.vW(a,b))},
zX(a){var s=this
return s.x.b(a)||A.tW(v.typeUniverse,s).b(a)},
A1(a){return a!=null},
fh(a){if(a!=null)return a
throw A.aQ(A.bV(a,"Object"),new Error())},
A5(a){return!0},
zA(a){return a},
wj(a){return!1},
u8(a){return!0===a||!1===a},
dY(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aQ(A.bV(a,"bool"),new Error())},
zy(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aQ(A.bV(a,"bool?"),new Error())},
by(a){if(typeof a=="number")return a
throw A.aQ(A.bV(a,"double"),new Error())},
zz(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aQ(A.bV(a,"double?"),new Error())},
fk(a){return typeof a=="number"&&Math.floor(a)===a},
w(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aQ(A.bV(a,"int"),new Error())},
wa(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aQ(A.bV(a,"int?"),new Error())},
A0(a){return typeof a=="number"},
dZ(a){if(typeof a=="number")return a
throw A.aQ(A.bV(a,"num"),new Error())},
wb(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aQ(A.bV(a,"num?"),new Error())},
A3(a){return typeof a=="string"},
a3(a){if(typeof a=="string")return a
throw A.aQ(A.bV(a,"String"),new Error())},
rR(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aQ(A.bV(a,"String?"),new Error())},
O(a){if(A.wi(a))return a
throw A.aQ(A.bV(a,"JSObject"),new Error())},
bX(a){if(a==null)return a
if(A.wi(a))return a
throw A.aQ(A.bV(a,"JSObject?"),new Error())},
wq(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bK(a[q],b)
return s},
Ai(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.wq(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bK(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
wd(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bK(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bK(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bK(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bK(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bK(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bK(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bK(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bK(a.x,b)+">"
if(l===8){p=A.At(a.x)
o=a.y
return o.length>0?p+("<"+A.wq(o,b)+">"):p}if(l===10)return A.Ai(a,b)
if(l===11)return A.wd(a,b,null)
if(l===12)return A.wd(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c(b,n)
return b[n]}return"?"},
At(a){var s=A.wO(a)
if(s!=null)return s
return"minified:"+a},
zx(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
zw(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.rK(a,b,!1)
else if(typeof m=="number"){s=m
r=A.ig(a,5,"#")
q=A.rL(s)
for(p=0;p<s;++p)q[p]=r
o=A.ie(a,b,q)
n[b]=o
return o}else return m},
zv(a,b){return A.w8(a.tR,b)},
zu(a,b){return A.w8(a.eT,b)},
rK(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.w6(a,null,b,!1)
r.set(b,s)
return s},
ih(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.w6(a,b,c,!0)
q.set(c,r)
return r},
w7(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.u4(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
w6(a,b,c,d){return A.zl(A.zf(a,b,c,d))},
dm(a,b){b.a=A.zR
b.b=A.zS
return b},
ig(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.c4(null,null)
s.w=b
s.as=c
r=A.dm(a,s)
a.eC.set(c,r)
return r},
w4(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.zs(a,b,r,c)
a.eC.set(r,s)
return s},
zs(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.e4(b))if(!(b===t.d||b===t.w))if(s!==6)r=s===7&&A.fq(b.x)
if(r)return b
else if(s===1)return t.d}q=new A.c4(null,null)
q.w=6
q.x=b
q.as=c
return A.dm(a,q)},
w3(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.zq(a,b,r,c)
a.eC.set(r,s)
return s},
zq(a,b,c,d){var s,r
if(d){s=b.w
if(A.e4(b)||b===t.K)return b
else if(s===1)return A.ie(a,"jx",[b])
else if(b===t.d||b===t.w)return t.gK}r=new A.c4(null,null)
r.w=7
r.x=b
r.as=c
return A.dm(a,r)},
zt(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.c4(null,null)
s.w=13
s.x=b
s.as=q
r=A.dm(a,s)
a.eC.set(q,r)
return r},
id(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
zp(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
ie(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.id(c)+">"
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
u4(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.id(r)+">")
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
w5(a,b,c){var s,r,q="+"+(b+"("+A.id(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.c4(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.dm(a,s)
a.eC.set(q,r)
return r},
w2(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.id(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.id(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.zp(i)+"}"}r=n+(g+")")
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
u5(a,b,c,d){var s,r=b.as+("<"+A.id(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.zr(a,b,c,r,d)
a.eC.set(r,s)
return s},
zr(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.rL(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.e_(a,b,r,0)
m=A.fm(a,c,r,0)
return A.u5(a,n,m,c!==m)}}l=new A.c4(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.dm(a,l)},
zf(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
zl(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.zh(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.w_(a,r,l,k,!1)
else if(q===46)r=A.w_(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.dX(a.u,a.e,k.pop()))
break
case 94:k.push(A.zt(a.u,k.pop()))
break
case 35:k.push(A.ig(a.u,5,"#"))
break
case 64:k.push(A.ig(a.u,2,"@"))
break
case 126:k.push(A.ig(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.zj(a,k)
break
case 38:A.zi(a,k)
break
case 63:p=a.u
k.push(A.w4(p,A.dX(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.w3(p,A.dX(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.zg(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.w0(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.zm(a.u,a.e,o)
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
return A.dX(a.u,a.e,m)},
zh(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
w_(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.zx(s,o.x)[p]
if(n==null)A.a_('No "'+p+'" in "'+A.yW(o)+'"')
d.push(A.ih(s,o,n))}else d.push(p)
return m},
zj(a,b){var s,r=a.u,q=A.vZ(a,b),p=b.pop()
if(typeof p=="string")b.push(A.ie(r,p,q))
else{s=A.dX(r,a.e,p)
switch(s.w){case 11:b.push(A.u5(r,s,q,a.n))
break
default:b.push(A.u4(r,s,q))
break}}},
zg(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.vZ(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.dX(p,a.e,o)
q=new A.lS()
q.a=s
q.b=n
q.c=m
b.push(A.w2(p,r,q))
return
case-4:b.push(A.w5(p,b.pop(),s))
return
default:throw A.n(A.bC("Unexpected state under `()`: "+A.J(o)))}},
zi(a,b){var s=b.pop()
if(0===s){b.push(A.ig(a.u,1,"0&"))
return}if(1===s){b.push(A.ig(a.u,4,"1&"))
return}throw A.n(A.bC("Unexpected extended operation "+A.J(s)))},
vZ(a,b){var s=b.splice(a.p)
A.w0(a.u,a.e,s)
a.p=b.pop()
return s},
dX(a,b,c){if(typeof c=="string")return A.ie(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.zk(a,b,c)}else return c},
w0(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.dX(a,b,c[s])},
zm(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.dX(a,b,c[s])},
zk(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.n(A.bC("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.n(A.bC("Bad index "+c+" for "+b.t(0)))},
AW(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aU(a,b,null,c,null)
r.set(c,s)}return s},
aU(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.e4(d))return!0
s=b.w
if(s===4)return!0
if(A.e4(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aU(a,c[b.x],c,d,e))return!0
q=d.w
p=t.d
if(b===p||b===t.w){if(q===7)return A.aU(a,b,c,d.x,e)
return d===p||d===t.w||q===6}if(d===t.K){if(s===7)return A.aU(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aU(a,b.x,c,d,e))return!1
return A.aU(a,A.tW(a,b),c,d,e)}if(s===6)return A.aU(a,p,c,d,e)&&A.aU(a,b.x,c,d,e)
if(q===7){if(A.aU(a,b,c,d.x,e))return!0
return A.aU(a,b,c,A.tW(a,d),e)}if(q===6)return A.aU(a,b,c,p,e)||A.aU(a,b,c,d.x,e)
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
if(!A.aU(a,j,c,i,e)||!A.aU(a,i,e,j,c))return!1}return A.wh(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.wh(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.zY(a,b,c,d,e)}if(o&&q===10)return A.A2(a,b,c,d,e)
return!1},
wh(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
zY(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.ih(a,b,r[o])
return A.w9(a,p,null,c,d.y,e)}return A.w9(a,b.y,null,c,d.y,e)},
w9(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aU(a,b[s],d,e[s],f))return!1
return!0},
A2(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aU(a,r[s],c,q[s],e))return!1
return!0},
fq(a){var s=a.w,r=!0
if(!(a===t.d||a===t.w))if(!A.e4(a))if(s!==6)r=s===7&&A.fq(a.x)
return r},
e4(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.iD},
w8(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
rL(a){return a>0?new Array(a):v.typeUniverse.sEA},
c4:function c4(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
lS:function lS(){this.c=this.b=this.a=null},
mv:function mv(a){this.a=a},
lJ:function lJ(){},
ic:function ic(a){this.a=a},
z9(){var s,r,q
if(self.scheduleImmediate!=null)return A.Ax()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.mD(new A.rc(s),1)).observe(r,{childList:true})
return new A.rb(s,r,q)}else if(self.setImmediate!=null)return A.Ay()
return A.Az()},
za(a){self.scheduleImmediate(A.mD(new A.rd(t.O.a(a)),0))},
zb(a){self.setImmediate(A.mD(new A.re(t.O.a(a)),0))},
zc(a){t.O.a(a)
A.zo(0,a)},
zo(a,b){var s=new A.rI()
s.lo(a,b)
return s},
w1(a,b,c){return 0},
tB(a){var s
if(t.fz.b(a)){s=a.geh()
if(s!=null)return s}return B.cK},
vX(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.j_;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.yX()
b.ls(new A.cu(new A.ce(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.iZ(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.ez()
b.em(o.a)
A.fb(b,p)
return}b.a^=2
A.rY(null,null,b.b,t.O.a(new A.ro(o,b)))},
fb(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.rW(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.fb(d.a,c)
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
A.rW(j.a,j.b)
return}g=$.b3
if(g!==h)$.b3=h
else g=null
c=c.c
if((c&15)===8)new A.rs(q,d,n).$0()
else if(o){if((c&1)!==0)new A.rr(q,j).$0()}else if((c&2)!==0)new A.rq(d,q).$0()
if(g!=null)$.b3=g
c=q.c
if(c instanceof A.bT){p=q.a.$ti
p=p.h("jx<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.eB(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.vX(c,f,!0)
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
Aj(a,b){var s=t.ng
if(s.b(a))return s.a(a)
s=t.mq
if(s.b(a))return s.a(a)
throw A.n(A.v1(a,"onError",u.c))},
A8(){var s,r
for(s=$.fl;s!=null;s=$.fl){$.il=null
r=s.b
$.fl=r
if(r==null)$.ik=null
s.a.$0()}},
Aq(){$.u9=!0
try{A.A8()}finally{$.il=null
$.u9=!1
if($.fl!=null)$.uQ().$1(A.wv())}},
wr(a){var s=new A.ls(a),r=$.ik
if(r==null){$.fl=$.ik=s
if(!$.u9)$.uQ().$1(A.wv())}else $.ik=r.b=s},
An(a){var s,r,q,p=$.fl
if(p==null){A.wr(a)
$.il=$.ik
return}s=new A.ls(a)
r=$.il
if(r==null){s.b=p
$.fl=$.il=s}else{q=r.b
s.b=q
$.il=r.b=s
if(q==null)$.ik=s}},
rW(a,b){A.An(new A.rX(a,b))},
wo(a,b,c,d,e){var s,r=$.b3
if(r===c)return d.$0()
$.b3=c
s=r
try{r=d.$0()
return r}finally{$.b3=s}},
wp(a,b,c,d,e,f,g){var s,r=$.b3
if(r===c)return d.$1(e)
$.b3=c
s=r
try{r=d.$1(e)
return r}finally{$.b3=s}},
Ak(a,b,c,d,e,f,g,h,i){var s,r=$.b3
if(r===c)return d.$2(e,f)
$.b3=c
s=r
try{r=d.$2(e,f)
return r}finally{$.b3=s}},
rY(a,b,c,d){t.O.a(d)
if(B.ab!==c){d=c.o4(d)
d=d}A.wr(d)},
rc:function rc(a){this.a=a},
rb:function rb(a,b,c){this.a=a
this.b=b
this.c=c},
rd:function rd(a){this.a=a},
re:function re(a){this.a=a},
rI:function rI(){},
rJ:function rJ(a,b){this.a=a
this.b=b},
ag:function ag(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
R:function R(a,b){this.a=a
this.$ti=b},
cu:function cu(a,b){this.a=a
this.b=b},
hV:function hV(a,b,c,d,e){var _=this
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
rm:function rm(a,b){this.a=a
this.b=b},
rp:function rp(a,b){this.a=a
this.b=b},
ro:function ro(a,b){this.a=a
this.b=b},
rn:function rn(a,b){this.a=a
this.b=b},
rs:function rs(a,b,c){this.a=a
this.b=b
this.c=c},
rt:function rt(a,b){this.a=a
this.b=b},
ru:function ru(a){this.a=a},
rr:function rr(a,b){this.a=a
this.b=b},
rq:function rq(a,b){this.a=a
this.b=b},
ls:function ls(a){this.a=a
this.b=null},
hA:function hA(){},
qN:function qN(a,b){this.a=a
this.b=b},
qO:function qO(a,b){this.a=a
this.b=b},
ii:function ii(){},
mi:function mi(){},
rE:function rE(a,b){this.a=a
this.b=b},
rF:function rF(a,b,c){this.a=a
this.b=b
this.c=c},
rX:function rX(a,b){this.a=a
this.b=b},
yv(a,b){return new A.c0(a.h("@<0>").ak(b).h("c0<1,2>"))},
A(a,b,c){return b.h("@<0>").ak(c).h("tL<1,2>").a(A.wz(a,new A.c0(b.h("@<0>").ak(c).h("c0<1,2>"))))},
D(a,b){return new A.c0(a.h("@<0>").ak(b).h("c0<1,2>"))},
vw(a){return new A.cT(a.h("cT<0>"))},
be(a){return new A.cT(a.h("cT<0>"))},
u2(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
u1(a,b,c){var s=new A.cU(a,b,c.h("cU<0>"))
s.c=a.e
return s},
cH(a,b,c){var s=A.yv(b,c)
s.U(0,a)
return s},
yw(a,b){var s,r,q=A.vw(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q.j(0,b.a(a[r]))
return q},
vx(a,b){var s=A.vw(b)
s.U(0,a)
return s},
tM(a){var s,r
if(A.uh(a))return"{...}"
s=new A.dO("")
try{r={}
B.a.j($.bL,a)
s.a+="{"
r.a=!0
a.ae(0,new A.pk(r,s))
s.a+="}"}finally{if(0>=$.bL.length)return A.c($.bL,-1)
$.bL.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
k2(a){return new A.h5(A.an(A.yx(null),null,!1,a.h("0?")),a.h("h5<0>"))},
yx(a){return 8},
cT:function cT(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
m6:function m6(a){this.a=a
this.c=this.b=null},
cU:function cU(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
X:function X(){},
aB:function aB(){},
pj:function pj(a){this.a=a},
pk:function pk(a,b){this.a=a
this.b=b},
h5:function h5(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
dW:function dW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
f2:function f2(){},
i8:function i8(){},
Ah(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.dn(r)
q=A.ve(String(s),null)
throw A.n(q)}q=A.rS(p)
return q},
rS(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.m1(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.rS(a[s])
return a},
vt(a,b,c){return new A.h4(a,b)},
zI(a){return a.pw()},
zd(a,b){return new A.rw(a,[],A.AE())},
ze(a,b,c){var s,r=new A.dO(""),q=A.zd(r,b)
q.fg(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
m1:function m1(a,b){this.a=a
this.b=b
this.c=null},
m2:function m2(a){this.a=a},
j0:function j0(){},
j2:function j2(){},
h4:function h4(a,b){this.a=a
this.b=b},
jX:function jX(a,b){this.a=a
this.b=b},
jW:function jW(){},
oZ:function oZ(a){this.b=a},
oY:function oY(a){this.a=a},
rx:function rx(){},
ry:function ry(a,b){this.a=a
this.b=b},
rw:function rw(a,b,c){this.c=a
this.a=b
this.b=c},
y7(a,b){a=A.aQ(a,new Error())
if(a==null)a=A.fh(a)
a.stack=b.t(0)
throw a},
an(a,b,c,d){var s,r=c?J.vq(a,d):J.vp(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
yy(a,b,c){var s,r,q=A.a([],c.h("r<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)B.a.j(q,c.a(a[r]))
q.$flags=1
return q},
a6(a,b){var s,r
if(Array.isArray(a))return A.a(a.slice(0),b.h("r<0>"))
s=A.a([],b.h("r<0>"))
for(r=J.ao(a);r.q();)B.a.j(s,r.gH())
return s},
qP(a){var s,r,q
A.hn(0,"start")
if(Array.isArray(a)){s=a
r=s.length
return A.vF(r<r?s.slice(0,r):s)}q=A.a6(a,t.S)
return A.vF(q)},
kK(a){return new A.h_(a,A.vs(a,!1,!0,!1,!1,""))},
tY(a,b,c){var s=J.ao(b)
if(!s.q())return a
if(c.length===0){do a+=A.J(s.gH())
while(s.q())}else{a+=A.J(s.gH())
while(s.q())a=a+c+A.J(s.gH())}return a},
yX(){return A.e3(new Error())},
y3(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
v8(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
j5(a){if(a>=10)return""+a
return"0"+a},
ji(a){if(typeof a=="number"||A.u8(a)||a==null)return J.ea(a)
if(typeof a=="string")return JSON.stringify(a)
return A.vE(a)},
y8(a,b){A.ww(a,"error",t.K)
A.ww(b,"stackTrace",t.gl)
A.y7(a,b)},
bC(a){return new A.iE(a)},
aC(a,b){return new A.ce(!1,null,b,a)},
v1(a,b,c){return new A.ce(!0,a,b,c)},
xT(a,b,c){return a},
vG(a){var s=null
return new A.eV(s,s,!1,s,s,a)},
hm(a,b){return new A.eV(null,null,!0,a,b,"Value not in range")},
cJ(a,b,c,d,e){return new A.eV(b,c,!0,a,d,"Invalid value")},
tS(a,b,c){if(0>a||a>c)throw A.n(A.cJ(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.n(A.cJ(b,a,c,"end",null))
return b}return c},
hn(a,b){if(a<0)throw A.n(A.cJ(a,0,null,b,null))
return a},
or(a,b,c,d,e){return new A.jM(b,!0,a,e,"Index out of range")},
cn(a){return new A.hH(a)},
b9(a){return new A.lc(a)},
cM(a){return new A.dN(a)},
b_(a){return new A.j1(a)},
ve(a,b){return new A.oa(a,b)},
ym(a,b,c){var s,r
if(A.uh(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.a([],t.s)
B.a.j($.bL,a)
try{A.A6(a,s)}finally{if(0>=$.bL.length)return A.c($.bL,-1)
$.bL.pop()}r=A.tY(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
oV(a,b,c){var s,r
if(A.uh(a))return b+"..."+c
s=new A.dO(b)
B.a.j($.bL,a)
try{r=s
r.a=A.tY(r.a,a,", ")}finally{if(0>=$.bL.length)return A.c($.bL,-1)
$.bL.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
A6(a,b){var s,r,q,p,o,n,m,l=a.gN(a),k=0,j=0
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
tO(a,b,c,d){var s
if(B.am===c){s=B.c.gZ(a)
b=J.cb(b)
return A.qQ(A.cN(A.cN($.n_(),s),b))}if(B.am===d){s=B.c.gZ(a)
b=J.cb(b)
c=J.cb(c)
return A.qQ(A.cN(A.cN(A.cN($.n_(),s),b),c))}s=B.c.gZ(a)
b=J.cb(b)
c=J.cb(c)
d=J.cb(d)
d=A.qQ(A.cN(A.cN(A.cN(A.cN($.n_(),s),b),c),d))
return d},
yG(a){var s,r,q=$.n_()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q=A.cN(q,J.cb(a[r]))
return A.qQ(q)},
uk(a){A.th(a)},
em:function em(a,b,c){this.a=a
this.b=b
this.c=c},
rj:function rj(){},
al:function al(){},
iE:function iE(a){this.a=a},
cP:function cP(){},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eV:function eV(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
jM:function jM(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hH:function hH(a){this.a=a},
lc:function lc(a){this.a=a},
dN:function dN(a){this.a=a},
j1:function j1(a){this.a=a},
kr:function kr(){},
hz:function hz(){},
rl:function rl(a){this.a=a},
oa:function oa(a,b){this.a=a
this.b=b},
k:function k(){},
aM:function aM(a,b,c){this.a=a
this.b=b
this.$ti=c},
aP:function aP(){},
a0:function a0(){},
ms:function ms(){},
qA:function qA(){this.b=this.a=0},
dO:function dO(a){this.a=a},
yS(a){var s
if(a==null)s=B.cJ
else{s=new A.mg()
s.ln(a)}return s},
m0:function m0(){},
mg:function mg(){this.b=this.a=0},
jz:function jz(){},
oe:function oe(){},
of:function of(a,b){this.a=a
this.b=b},
od:function od(a,b,c){this.a=a
this.b=b
this.c=c},
oc:function oc(a,b,c){this.a=a
this.b=b
this.c=c},
jl:function jl(){},
lK:function lK(){},
jp:function jp(){},
js:function js(){var _=this
_.a=null
_.d=_.c=_.b=$},
lN:function lN(){},
r6(a){return new A.lk(a)},
k8:function k8(){},
lk:function lk(a){this.a=a},
r7:function r7(a){this.a=a},
iJ:function iJ(a){this.a=a},
lv:function lv(){},
iS:function iS(a){this.a=a},
lB:function lB(){},
j3:function j3(a){this.a=a},
lE:function lE(){},
je:function je(a){this.a=a},
lG:function lG(){},
jm:function jm(a){this.a=a},
lL:function lL(){},
jn:function jn(a){this.a=a},
lM:function lM(){},
jv:function jv(a){this.a=a},
lR:function lR(){},
jC:function jC(a){this.a=a},
lV:function lV(){},
jD:function jD(a){this.a=a},
lW:function lW(){},
jJ:function jJ(a){this.a=a},
lX:function lX(){},
jL:function jL(a){this.a=a},
lY:function lY(){},
k_:function k_(a){this.a=a},
m3:function m3(){},
k1:function k1(a){this.a=a},
m4:function m4(){},
k9:function k9(a){this.a=a},
m7:function m7(){},
kE:function kE(a){this.a=a},
mf:function mf(){},
kR:function kR(a){this.a=a},
mj:function mj(){},
kT:function kT(a){this.a=a},
mn:function mn(){},
kY:function kY(){},
iC:function iC(a,b){this.a=a
this.b=b},
n9:function n9(){},
l6:function l6(a){this.a=a},
mu:function mu(){},
ln:function ln(a){this.a=a},
my:function my(){},
lo:function lo(a){this.a=a},
mz:function mz(){},
iH:function iH(a){this.a=a},
iI:function iI(a,b,c){var _=this
_.y=a
_.Q$=b
_.e=c
_.a=null
_.d=_.c=_.b=$},
lt:function lt(){},
lu:function lu(){},
iZ:function iZ(a){this.a=a},
j_:function j_(a,b){var _=this
_.y=a
_.Q=_.z=0
_.e=b
_.a=null
_.d=_.c=_.b=$},
lD:function lD(){},
kW:function kW(a){this.a=a},
kX:function kX(a,b,c){var _=this
_.y=a
_.Q$=b
_.e=c
_.a=null
_.d=_.c=_.b=$},
mo:function mo(){},
mp:function mp(){},
ll:function ll(a){this.a=a},
mx:function mx(){},
iK:function iK(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.w=d
_.x=e
_.y=0
_.Q=_.z=!0
_.a=null
_.d=_.c=_.b=$},
ne:function ne(a,b){this.a=a
this.b=b},
nf:function nf(a,b,c){this.a=a
this.b=b
this.c=c},
lw:function lw(){},
tC(a,b,c,d){return new A.iO(b,c,d,a)},
iO:function iO(a,b,c,d){var _=this
_.Q=a
_.as=b
_.at=c
_.e=d
_.r=_.f=$
_.a=null
_.d=_.c=_.b=$},
vi(a,b){return new A.ey(a,b)},
fE:function fE(){},
ey:function ey(a,b){var _=this
_.x=a
_.y=b
_.a=null
_.d=_.c=_.b=$},
ew:function ew(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
eQ:function eQ(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
ed:function ed(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
en:function en(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
eX:function eX(a,b){var _=this
_.x=a
_.y=b
_.a=null
_.d=_.c=_.b=$},
lP:function lP(){},
ep:function ep(a,b){this.a=a
this.b=b},
eo:function eo(a,b){var _=this
_.e=a
_.f=b
_.r=$
_.a=null
_.d=_.c=_.b=$},
ny:function ny(a,b){this.a=a
this.b=b},
nz:function nz(){},
nA:function nA(a,b,c){this.a=a
this.b=b
this.c=c},
nB:function nB(){},
nC:function nC(a){this.a=a},
er:function er(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
fK:function fK(){},
eg:function eg(){var _=this
_.a=null
_.d=_.c=_.b=$},
eh:function eh(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
iR:function iR(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
ex:function ex(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
eR:function eR(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
kx:function kx(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
f8:function f8(){var _=this
_.a=null
_.d=_.c=_.b=$},
r8:function r8(a){this.a=a},
eG:function eG(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
ly:function ly(){},
lz:function lz(){},
lA:function lA(){},
lQ:function lQ(){},
ma:function ma(){},
mb:function mb(){},
o6(a,b,c,d){return new A.jr(a,b,c,d==null?1:d)},
jr:function jr(a,b,c,d){var _=this
_.e=a
_.f=b
_.r=$
_.w=null
_.x=c
_.y=d
_.z=0
_.a=null
_.d=_.c=_.b=$},
o7:function o7(a){this.a=a},
ev:function ev(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
eu:function eu(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
lO:function lO(){},
vj(a,b){return new A.ez(a,b)},
ez:function ez(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
jH:function jH(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
jK:function jK(a,b,c,d,e){var _=this
_.at=a
_.e=b
_.f=c
_.r=d
_.w=1
_.x=e
_.a=null
_.d=_.c=_.b=$},
eA:function eA(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
eH:function eH(a,b){var _=this
_.e=a
_.f=b
_.r=0
_.w=$
_.a=null
_.d=_.c=_.b=$},
k7:function k7(a,b,c,d,e){var _=this
_.r=a
_.a=b
_.b=c
_.d=_.c=$
_.e=d
_.f=e},
dJ:function dJ(a,b){this.a=a
this.b=b},
ka:function ka(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
eO:function eO(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
ky:function ky(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
iB:function iB(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
tT(a,b,c,d){var s=new A.kH(a,b,c,A.be(t.u),A.a([],t.gk))
s.ic(b,c,d)
return s},
vI(a){return new A.f_(a)},
kI:function kI(){},
pQ:function pQ(a){this.a=a},
kH:function kH(a,b,c,d,e){var _=this
_.at=a
_.e=b
_.f=c
_.r=d
_.w=1
_.x=e
_.a=null
_.d=_.c=_.b=$},
f_:function f_(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
eZ:function eZ(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
mh:function mh(){},
kU:function kU(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
vS(a){return new A.f5(a)},
f5:function f5(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
m9:function m9(){},
eL:function eL(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
eM:function eM(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
jd:function jd(){},
ju:function ju(){},
y5(a,b){var s=$.tp()
if(!s.a.al(b))return null
return s.kL(a,b)},
fG:function fG(){},
S(a,b,c,d){var s=A.a([],t.J)
if(c!=null)B.a.j(s,c)
if(d!=null)B.a.U(s,d)
return new A.fC(a,b,s)},
jw:function jw(a){this.a=a},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
u(a,b,c){var s,r,q,p,o,n,m,l,k
$.wg=a
if(b==null)b=B.iF
s=t.s
r=t.gQ
q=A.a6(new A.aN(A.a(c.split("\n"),s),t.gL.a(new A.t3()),r),r.h("aF.E"))
A.im(q)
if(b===B.a8||b===B.au){p=A.a(q.slice(0),A.M(q))
for(r=t.gS.h("cL<X.E>"),o=0;o<q.length;++o)B.a.i(p,o,A.rT(A.qP(new A.cL(new A.d6(q[o]),r)),A.AI()))
A.im(p)}if(b===B.iG||b===B.au){p=A.a(q.slice(0),A.M(q))
for(o=0;r=q.length,o<r;++o)B.a.i(p,r-o-1,A.rT(q[o],A.AJ()))
A.im(p)}if(b===B.au||b===B.iH||b===B.q){p=A.a(q.slice(0),A.M(q))
for(r=t.gS.h("cL<X.E>"),o=0;n=q.length,o<n;++o)B.a.i(p,n-o-1,A.rT(A.qP(new A.cL(new A.d6(q[o]),r)),A.wA()))
A.im(p)}if(b===B.q){m=A.a([],s)
l=0
for(;;){if(0>=q.length)return A.c(q,0)
if(!(l<q[0].length))break
for(k=0,r="";k<q.length;++k,r=n){n=q[k]
if(!(l<n.length))return A.c(n,l)
n=r+A.Am(n[l])}B.a.j(m,r.charCodeAt(0)==0?r:r);++l}A.im(m)
p=A.a(m.slice(0),s)
for(s=t.gS.h("cL<X.E>"),o=0;r=m.length,o<r;++o)B.a.i(p,r-o-1,A.rT(A.qP(new A.cL(new A.d6(m[o]),s)),A.wA()))
A.im(p)}},
rT(a,b){var s,r,q
for(s=a.length,r=0,q="";r<s;++r)q+=A.J(b.$1(a[r]))
return q.charCodeAt(0)==0?q:q},
A9(a){return A.wl(A.wm(a))},
wl(a){var s,r,q,p
A.a3(a)
for(s=0;s<3;++s){r=$.Aa[s]
q=B.j.c4(r,a)
if(q!==-1){p=1-q
if(!(p>=0&&p<r.length))return A.c(r,p)
return r[p]}}return a},
wm(a){var s,r,q,p
A.a3(a)
for(s=0;s<3;++s){r=$.Ab[s]
q=B.j.c4(r,a)
if(q!==-1){p=1-q
if(!(p>=0&&p<r.length))return A.c(r,p)
return r[p]}}return a},
Am(a){var s,r,q,p
for(s=0;s<2;++s){r=$.Al[s]
q=B.j.c4(r,a)
if(q!==-1){p=B.c.ad(q+1,4)
if(!(p<r.length))return A.c(r,p)
return r[p]}}return a},
im(a){var s,r,q,p,o,n=B.a.gaC(a).length,m=a.length,l=A.an(n*m,$.wR(),!1,t.oC),k=new A.a8(l,new A.Y(new A.d(0,0),new A.d(n,m)),t.k5)
for(s=0;s<a.length;++s)for(m=s*n,r=0;r<B.a.gaC(a).length;++r){if(!(s<a.length))return A.c(a,s)
q=a[s]
if(!(r<q.length))return A.c(q,r)
p=q[r]
q=$.c7
if(q!=null&&q.al(p)){q=$.c7.p(0,p)
q.toString
o=q}else{q=$.xJ()
if(q.al(p)){q=q.p(0,p)
q.toString
o=q}else{q=$.xK().p(0,p)
q.toString
o=q}}k.l(r,s)
B.a.i(l,m+r,o)}n=$.tp()
m=$.cr
if(m==null)m=$.wg
if(m==null)m=1
l=$.cq.u()
n.ce(n.$ti.c.a(new A.jw(k)),null,null,null,m,m,l)},
dh:function dh(a,b){this.a=a
this.b=b},
t3:function t3(){},
nK:function nK(){},
nO:function nO(){},
nP:function nP(){},
nL:function nL(){},
nM:function nM(){},
nS:function nS(){},
nT:function nT(){},
nN:function nN(){},
nQ:function nQ(){},
nR:function nR(){},
a4(a,b,c){A.i()
$.aT.b=new A.nj(a,c,A.D(t.h,t.S))
$.aT.u().b=b
return $.aT.u()},
I(a,b){A.aV()
return $.ij=A.uX(a,B.j.dO(a," _")?$.dp():$.dq(),b)},
j(a,b,c){return new A.ot(a,b,c,A.D(t.h,t.S))},
uX(a,b,c){var s=t.Q
return new A.cd(a,b,c,A.D(t.h,s),A.D(t.X,s),A.D(t.M,s))},
fp(a,b){return new A.t2(a,b)},
zU(a){return A.w(a)},
aW(){return new A.tk(1,0.1)},
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
r.ce(r.$ti.c.a(s),q.a,p,o,n,null,m)
$.h=null},
aV(){var s,r,q,p,o,n,m=$.ij
if(m==null)return
s=m.ek()
r=m.b
r.toString
q=m.c
p=m.d
o=m.e
n=$.bb
r.ce(r.$ti.c.a(s),s.a,q,p,o,null,n)
$.ij=null},
rf:function rf(){},
nj:function nj(a,b,c){var _=this
_.Q=a
_.as=b
_.ax=_.at=null
_.ay=$
_.ch=!1
_.a=c
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=null},
ot:function ot(a,b,c,d){var _=this
_.Q=a
_.as=b
_.at=c
_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=null
_.db=!1
_.dx=null
_.fr=_.dy=$
_.a=d
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=null},
oz:function oz(a){this.a=a},
ow:function ow(a,b){this.a=a
this.b=b},
oE:function oE(a,b){this.a=a
this.b=b},
oF:function oF(a){this.a=a},
oD:function oD(a,b){this.a=a
this.b=b},
oA:function oA(a,b){this.a=a
this.b=b},
oG:function oG(a){this.a=a},
oB:function oB(a,b){this.a=a
this.b=b},
ou:function ou(a){this.a=a},
ov:function ov(a){this.a=a},
ox:function ox(a,b){this.a=a
this.b=b},
oy:function oy(a,b){this.a=a
this.b=b},
oC:function oC(a){this.a=a},
cd:function cd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=c
_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=null
_.ay=d
_.ch=e
_.CW=f},
n3:function n3(a){this.a=a},
n4:function n4(a){this.a=a},
n2:function n2(a,b,c){this.a=a
this.b=b
this.c=c},
n1:function n1(a){this.a=a},
n6:function n6(a){this.a=a},
n0:function n0(a){this.a=a},
n5:function n5(){},
t2:function t2(a,b){this.a=a
this.b=b},
tk:function tk(a,b){this.a=a
this.b=b},
a7(a,b,c){var s=$.bh().c8(a)
if(s!=null)return new A.m_(s,b,c==null?B.c4:c)
return new A.mt(a,b,c==null?B.c4:c)},
um(a,b){return new A.bx(a,b)},
vY(a){var s=new A.m8(A.de(t.iZ))
s.lm(a)
return s},
fW:function fW(a,b){this.a=a
this.b=b},
rh:function rh(){},
m_:function m_(a,b,c){this.c=a
this.a=b
this.b=c},
mt:function mt(a,b,c){this.c=a
this.a=b
this.b=c},
aH:function aH(a,b){this.a=a
this.b=b},
hO:function hO(a){this.a=a},
m8:function m8(a){this.a=a},
rB:function rB(a){this.a=a},
bx:function bx(a,b){this.a=a
this.b=b},
ip(a,b,c,d){var s=$.uT()
s.ce(s.$ti.c.a(new A.jq(a)),null,1,100,d,b,null)},
jq:function jq(a){this.b=a},
B7(){A.a4(239,null,null).a2("magic/ring")
A.i()
var s=$.h=A.j("Ring[s] of Wisdom",B.D,1000)
s.v(20)
s.x=0.05
s.k0(new A.ti())},
ti:function ti(){},
ir(a,b){var s=A.D(t.iZ,t.i)
b.ae(0,new A.tl(s))
$.hx.i(0,a,new A.dg(A.vY(s),a))},
tl:function tl(a){this.a=a},
Bk(){var s,r,q="hit[s]",p=null,o="bash[es]",n="stab[s]",m="pierce[s]",l=A.a4(225,p,q)
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
l=$.h=A.j("Dirk",B.F,50)
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
r=t.lT.a(new A.tm())
l.db=!0
l.k0(r)
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
l=$.h=A.j("Cutlass[es]",B.A,520)
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
l.kH(9)
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
l.kH(4)
A.i()
l=$.h=A.j("Lance",B.F,550)
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
l.fd(20,8)
A.i()
l=$.h=A.j("Axe",B.k,210)
l.E(12,70)
l.a5(15,14)
l.fd(24,7)
A.i()
l=$.h=A.j("Valaska",B.o,330)
l.v(24)
l.a5(19,19)
l.fd(26,5)
A.i()
l=$.h=A.j("Battleaxe",B.i,550)
l.v(40)
l.y=!0
l.a5(25,30)
l.fd(28,4)
l=A.a4(8976,p,q)
l.a2("equipment/weapon/bow")
l.x=0.3
l.y=!0
l.co(50,5)
A.i()
l=$.h=A.j("Short Bow",B.k,120)
l.E(6,60)
l.ay=A.ba(new A.aG(A.aO("arrow",B.w,B.U).a6(1)),m,5,p,8)
l.cx=12
l.a8(2)
l.a.i(0,s,15)
l.w=10
A.i()
l=$.h=A.j("Longbow",B.v,250)
l.v(13)
l.ay=A.ba(new A.aG(A.aO("arrow",B.w,B.U).a6(1)),m,9,p,12)
l.cx=18
l.a8(3)
l.a.i(0,s,7)
l.w=13
A.i()
l=$.h=A.j("Crossbow",B.o,600)
l.v(28)
l.ay=A.ba(new A.aG(A.aO("bolt",B.w,B.U).a6(1)),m,14,p,16)
l.cx=24
l.a8(4)
l.a.i(0,s,4)
l.w=14},
tm:function tm(){},
ai(a,b,c,d,e,f,g){var s
A.fo()
$.ca().c3("monster/"+b)
s=t.s
$.ah.b=new A.o5(a,B.a.gd1(b.split("/")),e,$.aX(),A.a([],t.x),A.a([],s))
$.ah.u().e=f
$.ah.u().r=c
$.ah.u().b=g
if(d!=null)B.a.U($.ah.u().x,A.a(d.split(" "),s))
return $.ah.u()},
fo(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7="immobile",b8=$.c6
if(b8==null)return
s=t.s
r=A.a([$.ah.u().ch],s)
if(r.length===0)B.a.j(r,"monster")
q=A.vx($.ah.u().x,t.N)
q.U(0,b8.x)
p=b8.r
if(p==null)p=$.ah.u().r
if(q.G(0,b7))p=0
o=b8.fr
n=o.length
if(n===1){if(0>=n)return A.c(o,0)
m=o[0]}else m=n>1?new A.lq(o):null
o=b8.ay
n=b8.fx
if(n==null)n=B.w
o=A.aO(o,n,b8.ch?B.ci:B.U).a6(1)
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
a5=q.mY()
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
b4.ce(b4.$ti.c.a(new A.ar(o,n,g,l,k,f,e+d,c,b,a,a0+a1,new A.hO(j),new A.ad(i.a|h.a),new A.ni(q,a6,a7,a8,a9,b0),b3,a2,b2,a3,a4,m,s,b1)),o.a,g,g,b5,b5,b6)
$.c6=null},
o(a,b,c,d,e,f,g){var s
A.fo()
s=new A.iP(a,b,A.am($.ah.u().ay,c,null),d,A.a([],t.da),A.a([],t.a_),A.a([],t.f8),A.a([],t.aC),f,$.aX(),A.a([],t.x),A.a([],t.s))
s.e=g
s.r=e
return $.c6=s},
nh(a,b,c,d,e){return new A.iP(a,b,d,e,A.a([],t.da),A.a([],t.a_),A.a([],t.f8),A.a([],t.aC),c,$.aX(),A.a([],t.x),A.a([],t.s))},
rg:function rg(){},
o5:function o5(a,b,c,d,e,f){var _=this
_.ay=a
_.ch=b
_.a=c
_.b=null
_.c=d
_.r=_.f=_.e=_.d=null
_.w=e
_.x=f
_.ax=_.at=_.as=_.Q=_.z=_.y=null},
iP:function iP(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
lx:function lx(a){this.a=a},
ab:function ab(a){this.a=a},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
lq:function lq(a){this.a=a},
bp:function bp(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
fB:function fB(a,b){this.b=a
this.a=b},
d7:function d7(a,b){this.b=a
this.a=b},
jE:function jE(a,b,c){this.b=a
this.c=b
this.a=c},
fT:function fT(a,b){this.b=a
this.a=b},
bP:function bP(a,b,c){this.b=a
this.c=b
this.a=c},
b1:function b1(a,b){this.b=a
this.a=b},
bI:function bI(a,b){this.b=a
this.a=b},
ql:function ql(a,b,c){this.a=a
this.b=b
this.c=c},
bu:function bu(a,b){this.b=a
this.a=b},
jk:function jk(){},
jo:function jo(){},
kD:function kD(){},
kS:function kS(){},
fy(a,b,c){var s=$.bf
$.bf=s+1
return new A.d3(a,b,c,s)},
d3:function d3(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
iD:function iD(a){this.a=a},
iL:function iL(a){this.a=a},
v2(a){return 2*A.v(a,1,15,1,4)/A.hC(50)},
iM:function iM(a){this.a=a},
h8:function h8(){},
iG:function iG(a){this.a=a},
iN:function iN(a){this.a=a},
jZ:function jZ(a){this.a=a},
kV:function kV(a){this.a=a},
l0:function l0(a){this.a=a},
lm:function lm(a){this.a=a},
bH:function bH(a,b){this.a=a
this.b=b},
na:function na(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
i4:function i4(a,b){this.a=a
this.b=b},
bd:function bd(){},
rz:function rz(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
xS(a){var s,r=A.a([],t.c4),q=Math.min($.m().hM(1,10),5),p=!1
for(;;){if(!(!p||r.length<q))break
s=$.ut().hT(a)
if(s.w)p=!0
if(!B.a.G(r,s))B.a.j(r,s)}return r},
fz:function fz(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g},
fg(a,b,c,d,e,f,g,h,i,j,k,l){var s=A.a((j==null?"monster":j).split(" "),t.s),r=i==null?1:i,q=h==null?1:h,p=$.ut()
p.ce(p.$ti.c.a(new A.fz(d,e,s,r,q,c,b!==!1)),null,k,f,l,g,null)},
ue(a,b){var s=null
A.fg("dungeon",s,new A.t1(a),"room",0.04,100,s,s,s,s,1,b)},
AA(a,b,c){var s="catacomb"
A.fg(s,null,new A.rZ(),s,0.02,100,b,null,null,a,1,c)},
AB(a,b,c){A.fg("cavern",null,new A.t_(),"glowing-moss",0.1,100,b,null,null,a,1,c)},
B0(a,b,c){A.fg("lake",!1,new A.td(),"water",0.01,b,null,null,0,a,c,null)},
B8(a,b,c){A.fg("river",!1,new A.tj(),"water",0.01,b,null,null,0,a,c,null)},
tb(a,b,c){A.fg(a+" keep",!1,new A.tc(),"room",0.05,b,null,1.5,0,a,c,2)},
e5(a,b,c){var s=null
A.fg(a+" pit",!1,new A.tg(a),"glowing-moss",0.05,b,s,s,s,s,c,0.2)},
t1:function t1(a){this.a=a},
rZ:function rZ(){},
t_:function t_(){},
td:function td(){},
tj:function tj(){},
tc:function tc(){},
tg:function tg(a){this.a=a},
ei:function ei(a,b,c){var _=this
_.d=a
_.e=b
_.f=c
_.c=_.b=_.a=$},
ej:function ej(){this.c=this.b=this.a=$},
nq:function nq(a,b,c){var _=this
_.a=a
_.b=$
_.c=b
_.d=c},
nu:function nu(){},
nt:function nt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nr:function nr(){},
ns:function ns(){},
j8:function j8(a){this.a=a
this.c=this.b=0},
eq:function eq(a){var _=this
_.w=a
_.c=_.b=_.a=$},
yt(a){var s=A.ys($.m().cH(a,a/2|0),B.iI)
return s},
ys(a,b){return new A.eE(new A.p_(b,A.D(t.u,t.d2),A.a([],t.fv)),a)},
eE:function eE(a,b){var _=this
_.r=a
_.w=0
_.x=b
_.c=_.b=_.a=$},
p2:function p2(a){this.a=a},
p0:function p0(a){this.a=a},
p1:function p1(a,b){this.a=a
this.b=b},
eD:function eD(a,b){this.a=a
this.b=b
this.c=0},
qV:function qV(a,b){this.a=a
this.b=b},
p_:function p_(a,b,c){this.a=a
this.b=b
this.c=c},
eF:function eF(){this.c=this.b=this.a=$},
pJ(a,b,c,d){return new A.pI(b,d,a,c)},
hh:function hh(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
pI:function pI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eP:function eP(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.c=_.b=_.a=$},
pR:function pR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0
_.f=e},
hU:function hU(a,b){this.a=a
this.b=b},
bJ(a,b,c,d){var s=c==null?$.m().aB(1,3):c
return new A.rD(a,b,s,d==null?$.m().aB(1,3):d)},
f0:function f0(){this.c=this.b=this.a=$},
q3:function q3(a){this.a=a},
q4:function q4(a){this.a=a},
q1:function q1(a){this.a=a},
q5:function q5(a){this.a=a},
q2:function q2(a){this.a=a},
q0:function q0(a){this.a=a},
rD:function rD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tV(a,b){var s,r
switch(b.a){case 0:return $.m().T(3)===0?A.vK(a):A.vO(a)
case 1:return $.m().T(3)===0?A.vM(a):A.vN(a)
case 2:s=$.m().T(10)
A:{if(0===s){r=A.vM(a)
break A}if(1===s){r=A.vN(a)
break A}if(2===s||3===s){r=A.vK(a)
break A}r=A.vO(a)
break A}return r}},
q8(){var s=$.m()
if(s.T(5)!==0)return B.iB
if(s.T(5)!==0)return B.iC
return B.iD},
vO(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
switch(A.q8().a){case 0:s=$.m()
s=new A.Q(s.aw(3,8),s.aw(3,8))
break
case 1:s=$.m()
s=new A.Q(s.aw(7,10),s.aw(7,10))
break
case 2:s=$.m()
s=new A.Q(s.aw(9,16),s.aw(9,16))
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
k=A.an(s*l,$.mG(),!1,t.gf)
j=new A.a8(k,new A.Y(new A.d(0,0),new A.d(s,l)),t.o)
for(i=0;i<m;)for(++i,l=i*s,h=0;h<n;){++h
g=$.tr()
j.l(h,i)
B.a.i(k,l+h,g)}f=A.a([],t.G)
if(r<=9&&(n&1)===1&&(m&1)===1)B.a.j(f,A.a([new A.d(B.c.A(n,2)+1,B.c.A(m,2)+1)],t.l))
if(q>=5)for(s=B.c.A(r-1,2),l=t.l,e=0;e<s;++e){k=1+e
g=n-e
d=m-e
B.a.j(f,A.a([new A.d(k,k),new A.d(g,k),new A.d(k,d),new A.d(g,d)],l))}A.tU(j)
return j},
vK(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
switch(A.q8().a){case 0:s=B.i6
break
case 1:s=B.i7
break
case 2:s=B.i8
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
f=A.an(s*g,$.mG(),!1,t.gf)
e=new A.a8(f,new A.Y(new A.d(0,0),new A.d(s,g)),t.o)
for(d=0;d<l;)for(++d,g=d*s,c=0;c<m;){++c
b=$.tr()
e.l(c,d)
B.a.i(f,g+c,b)}a=h?0:m-k
a0=h?k:m
a1=i?0:l-j
a2=i?j:l
for(d=a1;d<a2;)for(++d,g=d*s,c=a;c<a0;){++c
b=$.mG()
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
B.a.j(a9,new A.d(s-a8,b0))}}}A.tU(e)
return e},
vM(a){var s,r,q,p
switch(A.q8().a){case 0:s=B.co
break
case 1:s=B.cm
break
case 2:s=B.cn
break
default:s=null}r=s.a
q=s.b
p=$.m().aw(r,q)
return A.vL(p,B.c.A(p-1,2),a)},
vN(a){var s,r,q,p
switch(A.q8().a){case 0:s=B.co
break
case 1:s=B.cm
break
case 2:s=B.cn
break
default:s=null}r=s.a
q=s.b
s=$.m()
p=s.aw(r,q)
return A.vL(p,s.aw(2,B.c.A(p,2)-1),a)},
vL(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=a+2,h=A.an(i*i,$.mG(),!1,t.gf),g=new A.a8(h,new A.Y(new A.d(0,0),new A.d(i,i)),t.o)
for(s=0;s<a;s=r)for(r=s+1,q=r*i,p=0;p<a;++p){if(p+s<b)continue
o=a-p-1
if(o+s<b)continue
if(p+a-s-1<b)continue
if(o+a-s-1<b)continue
o=p+1
n=$.tr()
g.l(o,r)
B.a.i(h,q+o,n)}m=A.a([],t.G)
if(a<=9&&(a&1)===1){i=B.c.A(a,2)+1
B.a.j(m,A.a([new A.d(i,i)],t.l))}if((a&1)===1)for(i=B.c.A(a,2),h=i-1,q=t.l,l=2;l<h;++l){o=i+1
n=o-l
k=o+l
B.a.j(m,A.a([new A.d(o,n),new A.d(k,o),new A.d(o,k),new A.d(n,o)],q))}j=B.c.A(a+1,2)-B.c.A(b+1,2)-3
for(i=a-1,h=a+4,q=t.l,l=0;l<=j;++l){o=B.c.A(i,2)-l
n=B.c.A(h,2)+l
B.a.j(m,A.a([new A.d(o,o),new A.d(n,o),new A.d(o,n),new A.d(n,n)],q))}A.tU(g)
return g},
tU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(s=a.b,r=A.aa(s),q=t.ca,p=t.e0,o=p.h("k.E"),n=a.a,s=s.b.a,m=n.length,l=a.$ti.c;r.q();){k=r.b
j=r.c
a.l(k,j)
i=j*s+k
if(!(i>=0&&i<m))return A.c(n,i)
h=n[i]
if(!(h.a==null&&h.b===B.r))continue
h=new A.q7(new A.d(k,j),a)
g=A.a6(new A.aj(B.at,q.a(h),p),o)
f=B.a.dB(B.c8,h)
h=g.length
if(h===1){h=l.a(new A.dL(null,B.a.gl5(g).gcF()))
a.l(k,j)
B.a.i(n,i,h)}else if(h<=1)if(f){h=l.a($.xa())
a.l(k,j)
B.a.i(n,i,h)}}},
yV(a){return new A.dL(null,a)},
vJ(a){return new A.dL(a,B.r)},
kP:function kP(){},
hs:function hs(a,b){this.a=a
this.b=b},
q7:function q7(a,b){this.a=a
this.b=b},
dL:function dL(a,b){this.a=a
this.b=b},
ht:function ht(a,b){this.a=a
this.b=b},
r3:function r3(a){this.a=a},
zE(a){return A.tD(a,$.mL())},
Af(a){return A.tP(a,$.mO())},
zF(a){return A.tD(a,$.uI())},
Ag(a){return A.tP(a,$.xo())},
zD(a){return A.tD(a,$.uH())},
Ae(a){return A.tP(a,$.xn())},
z3(a){var s=$.xc()
if(s.al(a)){s=s.p(0,a)
s.toString
return s}return A.a([$.xe(),$.xf()],t.J)},
H(a,b,c,d){if(d==null)d=B.u
if(0>=b.length)return A.c(b,0)
return new A.qZ(a,A.a([A.cB(b.charCodeAt(0),c,d)],t.mO))},
r0:function r0(){},
r_:function r_(){},
qZ:function qZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=0},
ch(a,b){var s=$.j6.b7(a,new A.nl(a)).b
s.bH(s.$ti.c.a(b))
if(s.gI(0)>10)s.d8()},
ci(a,b,c,d){var s=$.j6.b7(a,new A.nn(a)).c.b7(b,new A.no())
s.bH(s.$ti.c.a(c))
if(s.gI(0)>20)s.d8()
A.j7(a,b,d)},
j7(a,b,c){$.j6.b7(a,new A.nm(a)).d.i(0,b,c)},
y4(a){var s,r=$.nk
if(r==null)return null
s=$.j6.p(0,a)
if(s==null)return null
return s.t(0)},
u3(a){var s=t.N
return new A.fc(a,A.k2(s),A.D(s,t.jo),A.D(s,t.jv))},
nl:function nl(a){this.a=a},
nn:function nn(a){this.a=a},
no:function no(){},
nm:function nm(a){this.a=a},
fc:function fc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rA:function rA(){},
G:function G(){},
d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},
jt:function jt(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
jB:function jB(){},
iF:function iF(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
vA(a){return new A.ku(a)},
vd(a,b){return new A.jf(a,b)},
jP:function jP(){},
ku:function ku(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
jb:function jb(a,b,c){var _=this
_.z=a
_.e=b
_.f=c
_.a=null
_.d=_.c=_.b=$},
jf:function jf(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
lb:function lb(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
le:function le(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
cx:function cx(){},
nv:function nv(a,b){this.a=a
this.b=b},
nw:function nw(a){this.a=a},
nx:function nx(a,b){this.a=a
this.b=b},
k4:function k4(){},
l7:function l7(a,b,c,d){var _=this
_.z=a
_.Q=b
_.e=c
_.f=d
_.a=null
_.d=_.c=_.b=$},
l9:function l9(a,b,c){var _=this
_.Q=a
_.as=b
_.at=!1
_.e=c
_.r=_.f=$
_.a=null
_.d=_.c=_.b=$},
bw(a){return new A.lj(a)},
tP(a,b){return new A.kp(a,b)},
tD(a,b){return new A.iW(a,b)},
kM(){return new A.kL()},
lj:function lj(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
kp:function kp(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
iW:function iW(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
kL:function kL(){var _=this
_.a=null
_.d=_.c=_.b=$},
bB:function bB(){},
wC(a){return 1/(1+Math.max(0,a)/40)},
ba(a,b,c,d,e){var s=e==null?0:e
return new A.b5(a,b,c,s,d==null?$.aw():d)},
bD(a){var s=t.iO,r=t.kt
return new A.b6(a,A.a([],s),A.a([],r),A.a([],s),A.a([],r),$.aw())},
b5:function b5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jG:function jG(a,b){this.a=a
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
oq:function oq(){},
op:function op(){},
oo:function oo(){},
on:function on(){},
ay:function ay(a,b){this.a=a
this.b=b},
bY:function bY(){},
fS:function fS(){this.b=this.a=0},
fD:function fD(){this.b=this.a=0},
hj:function hj(){this.b=this.a=0},
dz:function dz(){this.b=this.a=0},
fP:function fP(){this.b=this.a=0},
hr:function hr(a){this.c=a
this.b=this.a=0},
hi:function hi(){this.b=this.a=0},
bZ(a,b,c,d,e,f,g){var s=d==null?new A.nI():d
return new A.dB(a,b,e,f,c,s,g==null?new A.nJ():g)},
dB:function dB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nI:function nI(){},
nJ:function nJ(){},
fM:function fM(){this.a=0},
jj:function jj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aI:function aI(a){this.a=a},
tH(a,b,c,d,e){var s=A.k2(t.fD),r=A.a([],t.iA),q=A.a([],t.bI),p=A.a([],t.l),o=new A.fM(),n=new A.au(c,A.be(t.B),new A.b8(t.mh),o,new A.dz(),new A.fD(),new A.dz(),new A.fP(),new A.fS(),new A.hi(),new A.hj(),A.D(t.h,t.mF),new A.d(0,0))
o.a=240
n.bq()
o=c.CW.a
o.toString
n.z=B.c.P(B.e.L(Math.pow(o,1.458)+9),0,n.gbo())
o=c.cx.a
o.toString
n.ch=A.jN(o)
q=new A.jy(a,s,r,q,new A.fM(),p,b,n)
s=e==null?100:e
s=A.yY(s,d==null?80:d,q)
q.x!==$&&A.aq()
q.x=s
s.dA(n)
B.a.U(p,s.f.b.bL(-1))
s=$.m()
B.a.bG(t.A.a(p),s.a)
return q},
jy:function jy(a,b,c,d,e,f,g,h){var _=this
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
ol:function ol(a){this.a=a},
hI:function hI(){},
li:function li(){},
eT:function eT(a){this.a=a},
vy(a,b){var s
A:{if(B.ck===b||B.i2===b){s=!0
break A}if(B.cl===b||B.aG===b||B.w===b){s=!1
break A}s=null}return A.wM(a,$.x_(),t.jt.a(t.po.a(new A.p8(s))),null)},
dH(a,b){var s,r,q,p,o,n,m,l,k={},j=A.a([],t.s)
k.a=""
k.b=-1
s=new A.pa(k,b)
r=new A.p9(k,j)
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
k3:function k3(a){this.a=a},
p8:function p8(a){this.a=a},
pa:function pa(a,b){this.a=a
this.b=b},
p9:function p9(a,b){this.a=a
this.b=b},
bR:function bR(a,b){this.a=a
this.b=b},
h9:function h9(a,b,c){this.a=a
this.b=b
this.c=c},
v(a,b,c,d,e){if(a<=b)return d
if(a>=c)return e
return d+(a-b)/(c-b)*(e-d)},
wE(a,b){var s=new A.t5(),r=s.$1(0)
if(typeof r!=="number")return r.F()
r=s.$1(r+a)
if(typeof r!=="number")return r.F()
r=s.$1(r+b)
if(typeof r!=="number")return r.pu()
return r>>>0},
t5:function t5(){},
de(a){var s=t.N
return new A.eY(A.D(s,a.h("bU<0>")),A.D(s,a.h("bn<0>")),A.D(t.nP,a.h("i7<0>")),a.h("eY<0>"))},
eY:function eY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
pS:function pS(a){this.a=a},
pT:function pT(a){this.a=a},
pX:function pX(a){this.a=a},
pY:function pY(a,b,c){this.a=a
this.b=b
this.c=c},
pV:function pV(a){this.a=a},
pW:function pW(a,b){this.a=a
this.b=b},
pU:function pU(a,b){this.a=a
this.b=b},
bn:function bn(a,b,c,d,e,f,g){var _=this
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
me:function me(a,b){this.a=a
this.b=b},
i7:function i7(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.$ti=d},
yR(a){return new A.aG(a)},
yF(a,b,c){return A.aO(a,c,b)},
aO(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(B.j.i9(a,"a ")){a=B.j.cN(a,2)
s=!1}else if(B.j.i9(a,"an ")){a=B.j.cN(a,3)
s=!0}else{if(0>=a.length)return A.c(a,0)
s=B.j.G("aeiouAEIOU",a[0])}r=$.x1().jR(a)
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
m=A.pD(n,!1,!0)
l=A.pD(n,!1,!1)
q=n.length===0
k=A.pD(a,q,!0)
j=A.pD(a,q,!1)
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
default:p=null}return new A.pC(s,q,o,"# "+l+"<p>"+j,p,"the # "+l+"<p>"+j,b)},
pD(a,b,c){var s,r={}
r.a=!1
s=A.wM(a,$.x2(),t.jt.a(t.po.a(new A.pE(r,c))),null)
if(!c&&!r.a&&b)return s+"s"
return s},
yE(a,b,c,d){return new A.he(a,b,c,d)},
dj:function dj(){},
aG:function aG(a){this.a=a},
pC:function pC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
pF:function pF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pE:function pE(a,b){this.a=a
this.b=b},
hf:function hf(a,b){this.a=a
this.b=b},
he:function he(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dK:function dK(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=e},
P(a,b,c){var s,r,q,p,o,n=B.c.t(Math.abs(a)),m=$.wZ().jR(n)
if(m!=null){s=m.b
if(2>=s.length)return A.c(s,2)
r=s[2]
r.toString
s=s[1]
s.toString
s=A.a([s],t.s)
for(q=B.c.A(r.length,3),p=0;p<q;++p){o=p*3
s.push(B.j.aI(r,o,o+3))}n=B.a.aP(s,",")}if(a<0)n="-"+n
else if(a>0&&b)n="+"+n
return B.j.d5(n,c==null?0:c)},
vz(a,b,c){var s=A.y(a).h("bj<1,2>"),r=b.h("@<0>").ak(c).h("+(1,2)")
return A.pm(new A.bj(a,s),s.ak(r).h("1(k.E)").a(new A.pl(b,c)),s.h("k.E"),r)},
tN(a,b,c){var s=B.e.hR(a,b)
return B.j.d5(s,c==null?0:c)},
pH(a,b){var s=b==null?0:b
s=B.e.hR(a*100,s)
return B.j.d5(s+"%",0)},
pl:function pl(a,b){this.a=a
this.b=b},
lh:function lh(a,b,c){var _=this
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
ec:function ec(){},
aR:function aR(a){this.a=a},
kN:function kN(){},
c5:function c5(a){var _=this
_.a=!0
_.c=_.b=null
_.d=a},
qa:function qa(a,b,c){this.a=a
this.b=b
this.c=c},
q9:function q9(a){this.a=a},
au:function au(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
om:function om(a,b,c){this.a=a
this.b=b
this.c=c},
tI(a,b,c,d,e){return new A.cC(a,b,c,d,e)},
cC:function cC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,a0,a1,a2,a3,a4){var s=new A.hB(),r=new A.fx(),q=new A.hK(),p=new A.fV(),o=new A.d9(a,b,c,d,e,f,g,h,i,j,k,n,a0,l,m,s,r,q,p)
s.b=a3
s.a=s.dj(o)
r.b=a1
r.a=r.dj(o)
q.b=a4
q.a=q.dj(o)
p.b=a2
p.a=p.dj(o)
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
h7:function h7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pb:function pb(){},
pe:function pe(){},
pf:function pf(){},
pc:function pc(){},
pd:function pd(){},
pg:function pg(){},
bS:function bS(){},
aD:function aD(){},
mc:function mc(){},
kF(a,b,c,d){return new A.cI(a,b,d,c)},
cI:function cI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eW:function eW(){},
hl:function hl(a){this.a=a},
ae:function ae(){},
hy:function hy(a,b){this.a=a
this.b=b},
qi:function qi(a){this.a=a},
qh:function qh(){},
qj:function qj(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a){this.a=a},
ml:function ml(){},
hC(a){if(a<=10)return B.e.O(A.v(a,1,10,0,20))
return B.e.O(A.v(a,10,50,20,200))},
vQ(a){if(a<=20)return A.v(a,1,20,0.1,1)
if(a<=30)return A.v(a,20,30,1,1.5)
if(a<=40)return A.v(a,30,40,1.5,1.8)
if(a<=50)return A.v(a,40,50,1.8,2)
return A.v(a,50,60,2,2.1)},
v_(a){if(a<=10)return B.e.O(A.v(a,1,10,-50,0))
if(a<=30)return B.e.O(A.v(a,10,30,0,20))
return B.e.O(A.v(a,30,60,20,60))},
v0(a){if(a<=10)return B.e.O(A.v(a,1,10,-30,0))
if(a<=30)return B.e.O(A.v(a,10,30,0,20))
return B.e.O(A.v(a,30,60,20,50))},
jN(a){if(a<=10)return B.e.O(A.v(a,1,10,0,20))
return B.e.O(A.v(a,10,50,20,200))},
b8:function b8(a){this.a=null
this.$ti=a},
cl:function cl(a,b,c){this.c=a
this.a=b
this.b=c},
cm:function cm(){},
qz:function qz(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(){this.b=0
this.a=null},
fx:function fx(){this.b=0
this.a=null},
hK:function hK(){this.b=0
this.a=null},
fV:function fV(){this.b=0
this.a=null},
Ad(a){A.w(a)
return 1},
Ac(a){A.w(a)
return 0},
cc:function cc(a,b){this.a=a
this.b=b},
eb:function eb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
es:function es(a){this.b=a},
nX:function nX(){},
nW:function nW(){},
nV:function nV(a){this.a=a},
lI:function lI(){},
bE(a,b){var s=A.a([],t.I)
if(b!=null)B.a.U(s,b)
return new A.bQ(a,s,a.c)},
c_:function c_(a,b){this.a=a
this.c=b},
eB:function eB(){},
bQ:function bQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
os:function os(){},
dy:function dy(a,b){this.a=a
this.b=b},
lZ:function lZ(){},
L:function L(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$
_.f=e},
oT:function oT(){},
oO:function oO(){},
oN:function oN(){},
oM:function oM(){},
oU:function oU(){},
oP:function oP(){},
oQ:function oQ(a){this.a=a},
oS:function oS(a){this.a=a},
oR:function oR(){},
bF:function bF(a,b){this.a=a
this.b=b},
r1:function r1(a,b,c){this.a=a
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
kJ:function kJ(a,b,c){this.a=a
this.b=b
this.c=c},
dg:function dg(a,b){this.a=a
this.b=b},
xX(a){var s,r,q,p,o
for(s=$.ef.length,r=t.P,q=0;q<$.ef.length;$.ef.length===s||(0,A.p)($.ef),++q){p=$.ef[q]
o=r.a(a.$1(p.a))
p.b!==$&&A.aq()
p.b=o}B.a.aS($.ef)},
aJ(a){var s=new A.iQ(a)
B.a.j($.ef,s)
return s},
iQ:function iQ(a){this.a=a
this.b=$},
ar:function ar(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
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
f3:function f3(a,b){this.a=a
this.b=b},
ni:function ni(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iU(a,b,c){return new A.iT(a,b,c)},
ac:function ac(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
pv:function pv(a,b){this.a=a
this.b=b},
pw:function pw(a,b,c){this.a=a
this.b=b
this.c=c},
px:function px(a,b){this.a=a
this.b=b},
iT:function iT(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
pt:function pt(a,b,c,d){var _=this
_.d=a
_.e=null
_.a=b
_.b=c
_.c=d},
eI:function eI(){},
pu:function pu(a,b){this.a=a
this.b=b},
cf:function cf(){this.a=$},
cv:function cv(){this.a=$},
nd:function nd(a,b){this.a=a
this.b=b},
nb:function nb(a){this.a=a},
nc:function nc(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(){this.a=$},
n7:function n7(a){this.a=a},
n8:function n8(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(){},
kG:function kG(){},
cg:function cg(a,b){this.a=a
this.b=0
this.$ti=b},
ck(a,b,c,d,e,f){var s=new A.kd(c,d!==!1,e===!0,f,a,b,new A.cg(A.a([],t.c),t.r),A.a([],t.l))
s.fu(a,b,f)
return s},
et:function et(){},
o8:function o8(a,b,c){this.a=a
this.b=b
this.c=c},
o9:function o9(a,b,c){this.a=a
this.b=b
this.c=c},
kd:function kd(a,b,c,d,e,f,g,h){var _=this
_.r=a
_.w=b
_.x=c
_.y=d
_.a=e
_.b=f
_.d=_.c=$
_.e=g
_.f=h},
ob:function ob(a,b){this.a=a
this.b=b},
mk:function mk(a,b){this.a=a
this.b=b},
k0(a){var s
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
p3:function p3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.w=_.r=_.f=!0},
p4:function p4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p5:function p5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eN:function eN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kt:function kt(){},
wt(a){var s=a.a.e
if(s.a0(0,$.bM()))return 8
if((s.a&$.U().a)===0)return 10
return 1},
qk:function qk(a){this.a=a
this.b=null},
mm:function mm(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=_.c=$
_.e=c
_.f=d},
rH:function rH(a,b,c){this.a=a
this.b=b
this.c=c},
yY(a,b,c){var s,r=A.a([],t.p5),q=new A.qv(),p=t.jh,o=a*b
if(o>0)s=A.an(o,q.$1(B.ak),!1,p)
else s=J.vp(0,p)
s=new A.a8(s,new A.Y(new A.d(0,0),new A.d(a,b)),t.lr)
s.le(a,b,q,p)
return new A.qm(c,r,s,A.D(t.u,t.U),new A.a8(A.an(o,null,!1,t.e9),new A.Y(new A.d(0,0),new A.d(a,b)),t.hE))},
qm:function qm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=_.c=$
_.e=0
_.f=c
_.r=d
_.w=e},
qv:function qv(){},
qy:function qy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qx:function qx(a){this.a=a},
qu:function qu(){},
qw:function qw(a){this.a=a},
kc(a){return new A.ad(a)},
z2(a,b,c,d,e,f){return new A.dR(a,f,d==null?0:d,b,c,e)},
ad:function ad(a){this.a=a},
bv:function bv(a){this.a=a},
dR:function dR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dQ:function dQ(a,b){var _=this
_.a=a
_.b=!1
_.f=_.e=_.d=_.c=0
_.r=!1
_.w=b
_.x=0},
iz:function iz(a,b){var _=this
_.b=a
_.c=b
_.d=0
_.a=null},
fA:function fA(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
j4:function j4(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
fH:function fH(a){this.a=a
this.b=20},
T(a,b){var s,r,q,p,o,n,m=A.a([],t.mO)
for(s=new A.d6(a),r=t.gS,s=new A.c2(s,s.gI(0),r.h("c2<X.E>")),r=r.h("X.E");s.q();){q=s.d
if(q==null)q=r.a(q)
for(p=b.length,o=0;o<b.length;b.length===p||(0,A.p)(b),++o){n=b[o]
B.a.j(m,new A.W(q,n,B.x))}}return m},
fL:function fL(a,b){this.a=a
this.b=b
this.c=0},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
jF:function jF(a,b){this.a=a
this.b=b
this.c=0},
jI:function jI(a){this.a=a
this.b=0},
jQ:function jQ(a,b){this.a=a
this.b=b
this.c=2},
k6:function k6(a,b){this.a=a
this.b=b
this.c=-1},
ks:function ks(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
l4:function l4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0
_.f=e},
la:function la(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=8},
ya(a,b){var s,r,q,p,o,n=A.a([],t.hC)
for(s=$.uC(),r=b.Q.c.c,q=0;q<15;++q){p=s[q]
o=r.p(0,p.gcv())
if((o==null?0:o)>0)n.push(p)}n=new A.fO(b,n,A.D(t.M,t.de))
n.lg(a,b)
return n},
fO:function fO(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.e=0
_.a=null},
o3:function o3(){},
o_:function o_(){},
o4:function o4(){},
o0:function o0(){},
o1:function o1(){},
o2:function o2(a,b){this.a=a
this.b=b},
j9:function j9(){},
nD:function nD(a,b){this.a=a
this.b=b},
fw:function fw(a,b){var _=this
_.e=a
_.b=b
_.c=0
_.a=null},
kq:function kq(a){this.b=a
this.c=0
this.a=null},
vg(a0,a1){var s,r,q,p,o,n,m,l,k=a1.y.Q,j=k.e.cT(),i=k.f.cT(),h=k.y,g=t.M,f=t.S,e=A.cH(k.z.a,g,f),d=k.at,c=k.ax,b=t.P,a=A.cH(c.a,b,f)
b=A.cH(c.b,b,f)
s=t.q
r=A.cH(c.c,s,f)
q=A.cH(c.d,t.R,f)
p=A.vx(c.e,s)
s=A.cH(c.f,s,f)
c=k.Q
o=k.as
n=k.ay.b
m=k.ch.b
l=k.CW.b
d=new A.fR(a1,A.vk(k.a,k.b,k.c,k.d,j,i,k.r,k.w,k.x,h,new A.hy(e,A.D(g,f)),d,new A.h7(a,b,r,q,p,s),c,o,m,k.cx.b,n,l),a0,new A.p7(d),new A.oL(a1))
d.r=new A.qc(d)
l=A.a([],t.pl)
n=A.a([],t.lE)
d.w!==$&&A.aq()
d.w=new A.qn(d,l,n,B.iq,B.ak)
$.nk=d
$.j6.aS(0)
return d},
oh(a,b,c,d){var s,r,q,p,o,n,m,l=A.tH(b,0,c,34,60)
if(d)for(s=b.l9(c),r=s.length,q=l.y,p=q.Q,o=p.e,p=p.ax,n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
o.c7(m)
p.d_(m)
q.bq()}for(s=l.e7(),r=s.$ti,s=new A.ag(s.a(),r.h("ag<1>")),r=r.c;s.q();){q=s.b
if(q==null)r.a(q)}return A.vg(a,l)},
fR:function fR(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=_.r=$
_.x=0
_.a=_.as=_.Q=_.z=_.y=null},
oj:function oj(){},
ok:function ok(a,b){this.a=a
this.b=b},
oi:function oi(a,b){this.a=a
this.b=b},
h6:function h6(a,b){var _=this
_.b=a
_.c=b
_.d=0
_.a=null},
vR(a,b,c){var s=new A.l2(a,b,c,A.a([],t.lE))
s.ll(a,b,c)
return s},
zL(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=null,q=null,p=0;p<a.length;a.length===s||(0,A.p)(a),++p){o=a[p]
n=b.$1(o)
if(q==null||n<q){q=n
r=o}}return r},
zK(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=null,q=null,p=0;p<a.length;a.length===s||(0,A.p)(a),++p){o=a[p]
n=b.$1(o)
if(q==null||n>q){q=n
r=o}}return r},
l2:function l2(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=!1
_.r=0
_.a=null},
qW:function qW(a){this.a=a},
qX:function qX(a){this.a=a},
z8(a){var s,r,q,p,o=A.a([],t.eI)
for(s=$.tn(),r=a.b,q=0;q<26;++q){p=s[q]
if(p.gbA().dG(r)==null)o.push(p)}return new A.hJ(a,o)},
hJ:function hJ(a,b){this.b=a
this.c=b
this.a=null},
fU:function fU(a){var _=this
_.c=_.b=0
_.d=30
_.e=a
_.a=null},
f:function f(a,b){this.a=a
this.b=b},
jh:function jh(a,b,c,d){var _=this
_.e=a
_.f=b
_.b=c
_.c=d
_.a=null},
nU:function nU(a){this.a=a},
f9:function f9(a,b){this.a=a
this.b=b},
cD:function cD(){},
yj(a,b){var s=t.q
return B.c.ai(s.a(a).d,s.a(b).d)},
yg(a,b){var s=t.q
return B.c.ai(s.a(a).c,s.a(b).c)},
yi(a,b){var s=t.q
return B.c.ai(s.a(a).as,s.a(b).as)},
yh(a,b){var s=t.q
s.a(a)
s.a(b)
return B.j.ai(a.a.a6(1).a.toLowerCase(),b.a.a6(1).a.toLowerCase())},
jS:function jS(a,b){var _=this
_.e=$
_.b=a
_.c=b
_.a=null},
oJ:function oJ(){},
oK:function oK(a){this.a=a},
oI:function oI(a,b){this.a=a
this.b=b},
yB(a,b){var s=t.P,r=s.a(a).b.a,q=s.a(b).b.a
s=new A.po()
if(s.$1(r)&&!s.$1(q))return 1
if(!s.$1(r)&&s.$1(q))return-1
return B.c.ai(r,q)},
yA(a,b){var s=t.P
return B.c.ai(s.a(a).c,s.a(b).c)},
yC(a,b){var s=t.P
return B.j.ai(s.a(a).a.a.toLowerCase(),s.a(b).a.a.toLowerCase())},
yz(a,b){var s=null,r=A.a([new A.aK("Name",B.a5,0,s),new A.aK("Depth",B.al,5,s),new A.aK("Seen",B.al,5,s),new A.aK("Slain",B.al,5,s)],t.D),q=t.it,p=t.o9
p=A.a([new A.bt("appearance",A.a([A.B5(),A.wH()],q),p),new A.bt("name",A.a([A.wI()],q),p),new A.bt("depth",A.a([A.wH(),A.wI()],q),p)],t.d4)
q=t.hb
p=new A.kb(A.tZ(r,A.a([new A.c3("all",new A.pr(),q),new A.c3("uniques",new A.ps(),q)],t.gp),p,!0,t.P),a,b)
p.mX()
return p},
kb:function kb(a,b,c){var _=this
_.e=a
_.b=b
_.c=c
_.a=null},
po:function po(){},
pr:function pr(){},
ps:function ps(){},
pp:function pp(){},
pq:function pq(){},
pn:function pn(a,b){this.a=a
this.b=b},
l:function l(a){this.a=a},
jc:function jc(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.a=_.r=null},
jg:function jg(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.a=_.r=null},
eC:function eC(){},
vm(a,b,c){var s,r=new A.jR(b,A.vn(b,c?78:34)),q=b.a
if(q.x!=null)r.b=new A.hP(a,b)
if(q.Q+b.gc1()!==0||q.z!=null)r.c=new A.hR(b)
if(q.e!=null)r.d=new A.i6(b)
q=q.w
if(q!=null){s=c?78:34
r.e=new A.ff(A.dH(s,q.a),"Use")}return r},
vn(a,b){var s,r,q,p,o,n,m,l,k,j=A.a([],t.s)
for(s=0;s<4;++s){r=B.aP[s]
for(q=a.gaf(),p=q.length,o=0,n=0;n<q.length;q.length===p||(0,A.p)(q),++n)o+=q[n].dh(r)
if(o<0)B.a.j(j,"It lowers your "+r.c+" by "+-o+".")
else if(o>0)B.a.j(j,"It raises your "+r.c+" by "+o+".")}a.gec().ae(0,new A.oH(j))
q=a.a
m=q.y
if(m!=null){p=m.b
l=p.e
k=l!==$.aw()?" "+l.a:""
B.a.j(j,"It can be thrown for "+p.c+k+" damage up to range "+p.d+".")
p=m.a
if(p!==0)B.a.j(j,"It has a "+p+"% chance of breaking when thrown.")}p=q.ay
if(p>0)B.a.j(j,"It emanates "+p+" light.")
for(q=q.cx,q=new A.c1(q,q.r,q.e,A.y(q).h("c1<1>"));q.q();)B.a.j(j,"It can be destroyed by "+q.d.a.toLowerCase()+".")
return new A.ff(A.dH(b-2,B.a.aP(j," ")),"Description")},
jR:function jR(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=b},
oH:function oH(a){this.a=a},
cV:function cV(){},
hP:function hP(a,b){this.a=a
this.b=b},
hR:function hR(a){this.a=a},
i6:function i6(a){this.a=a},
ff:function ff(a,b){this.a=a
this.b=b},
kv:function kv(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.a=_.r=null},
md:function md(){},
kB:function kB(a,b,c){var _=this
_.ay=a
_.b=b
_.c=c
_.d=null
_.e=-1
_.f=!1
_.a=_.r=null},
kC:function kC(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.a=_.r=null},
hw:function hw(a,b,c){var _=this
_.x=a
_.b=b
_.c=c
_.d=null
_.e=-1
_.f=!1
_.a=_.r=null},
l8:function l8(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.a=_.r=null},
r2:function r2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dS:function dS(){},
cS:function cS(){},
hX:function hX(a){var _=this
_.b=a
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
hW:function hW(){},
lU:function lU(a){var _=this
_.b=a
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
lT:function lT(a,b){var _=this
_.cy=a
_.b=b
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
hQ:function hQ(a){var _=this
_.w=null
_.b=a
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
ia:function ia(a,b){var _=this
_.w=a
_.b=b
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
i9:function i9(a,b){var _=this
_.at=a
_.b=b
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
fa:function fa(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.b=d
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
lf:function lf(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.a=_.r=null},
jA:function jA(a){this.b=a
this.a=null},
og:function og(a){this.a=a},
k5:function k5(a,b){var _=this
_.b=a
_.c=b
_.d=0
_.f=_.e=null
_.r=!1
_.w=0
_.x=!0
_.y=0
_.a=null},
pi:function pi(){},
ph:function ph(a){this.a=a},
yD(a,b){var s,r,q,p,o,n=t.eR,m=A.a([],n),l=$.m()
t.m.a(B.ah)
s=B.ah.length
r=l.T(s)
if(!(r>=0&&r<s))return A.c(B.ah,r)
r=new A.ke(0,0,b,B.ah[r])
r.fZ()
s=$.fs()
q=A.M(s)
p=q.h("aN<1,q>")
s=A.a6(new A.aN(s,q.h("q(1)").a(new A.pz()),p),p.h("aF.E"))
s=new A.f1(0,2,"Race",s)
q=$.e8()
p=A.M(q)
o=p.h("aN<1,q>")
q=A.a6(new A.aN(q,p.h("q(1)").a(new A.pA()),o),o.h("aF.E"))
q=new A.f1(0,12,"Class",q)
p=new A.f1(0,22,"Death",B.bc)
B.a.U(m,A.a([r,s,q,p],n))
s.e=l.T(5)
q.e=l.T(3)
return new A.ko(a,b,r,s,q,p,m)},
ko:function ko(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=0
_.e=c
_.f=d
_.r=e
_.w=f
_.x=g
_.a=null},
pz:function pz(){},
pA:function pA(){},
pB:function pB(a){this.a=a},
el:function el(){},
ke:function ke(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=""
_.e=d
_.f=!1},
py:function py(a){this.a=a},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
oL:function oL(a){this.b=a
this.a=null},
p7:function p7(a){this.b=a
this.a=null},
pK:function pK(){},
qc:function qc(a){this.b=a
this.a=null},
qg:function qg(a){this.a=a},
qe:function qe(a,b,c){this.a=a
this.b=b
this.c=c},
qf:function qf(){},
qd:function qd(a,b,c){this.a=a
this.b=b
this.c=c},
qn:function qn(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=!1
_.f=0
_.r=d
_.w=e
_.a=null},
qt:function qt(a){this.a=a},
qs:function qs(){},
qq:function qq(a){this.a=a},
qr:function qr(a,b){this.a=a
this.b=b},
qo:function qo(a,b){this.a=a
this.b=b},
qp:function qp(a,b){this.a=a
this.b=b},
fF:function fF(a,b){this.c=a
this.d=b
this.a=null},
y9(a,b){var s=new A.fN(a,b,A.a([],t.cz))
s.lf(a,b,{})
return s},
fN:function fN(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.a=null},
nY:function nY(a,b){this.a=a
this.b=b},
nZ:function nZ(){},
lr:function lr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=0},
fQ:function fQ(a){this.c=a
this.a=null},
kz:function kz(){},
pM:function pM(){},
pN:function pN(){},
hv:function hv(a){this.d=a
this.e=1
this.a=null},
qB:function qB(a,b){this.a=a
this.b=b},
qL:function qL(a){this.a=a},
qM:function qM(a){this.a=a},
qI:function qI(a){this.a=a},
qJ:function qJ(a){this.a=a},
qK:function qK(a,b,c){this.a=a
this.b=b
this.c=c},
qC:function qC(a){this.a=a},
qD:function qD(a,b){this.a=a
this.b=b},
qE:function qE(a,b){this.a=a
this.b=b},
qF:function qF(a,b){this.a=a
this.b=b},
qG:function qG(a,b){this.a=a
this.b=b},
qH:function qH(a,b){this.a=a
this.b=b},
va(a,b,c,d,e,f){var s,r=null,q=a.e.a.b.b,p=q.a
q=q.b
a.jP(0,0,p,q,B.u)
s=new A.aS(new A.d(b,c),B.c.A(p-b,2),B.c.A(q-2-c,2),a)
A.bi(s,r,r,f,!1,r,r,r)
d.$1(s.b8(1,1,b-2,c-2))
A.bq(a,e,r)},
bi(a,b,c,d,e,f,g,h){var s,r,q
if(b==null)s=e?B.h:B.l
else s=b
A.cz(a,g,h,f,c,s,"\u2552","\u2550","\u2555","\u2502","\u2514","\u2500","\u2518")
if(d!=null){s=g==null?0:g
r=h==null?0:h
q=e?B.h:B.f
a.k(s+2,r," "+d+" ",q)}},
fI(a,b,c,d,e,f){var s,r,q,p,o,n
if(d==null)d=a.c.a-e
if(c==null)c=B.d
s=A.dH(d,b)
for(r=s.length,q=f,p=0;o=s.length,p<o;s.length===r||(0,A.p)(s),++p,q=n){n=q+1
a.k(e,q,s[p],c)}return o},
ja(a,b,c,d,e){var s=B.j.aH("\u2500",d)
a.k(b,c,s,e==null?B.l:e)},
nF(a,b,c,d,e,f,g){var s,r=c+1
A.bi(a,B.f,e-1,null,!1,d,b,r)
s=b+1
a.k(s,c,"\u250c\u2500\u2510",B.f)
a.k(s,r,"\u2561 \u255e",B.f)
a.k(s,c+2,"\u2514\u2500\u2518",B.f)
if(f!=null)a.am(b+2,r,f)
if(g!=null)a.k(b+4,r," "+g+" ",B.f)},
vb(a,b,c,d,e,f,g){var s,r,q,p,o
if(d<=e)for(s=0;s<b;++s)a.k(f,s+g,"\u258c",B.u)
else{r=B.c.P(B.e.L(b*e/d),1,b)
q=B.e.L((b-r)*c/(d-e+1))
p=q+r
for(s=0;s<b;++s){o=s<q||s>p?B.u:B.l
a.k(f,s+g,"\u258c",o)}}},
bq(a,b,c){var s,r,q,p,o,n,m,l={}
l.a=0
b.ae(0,new A.nG(l))
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
b.ae(0,new A.nH(l,a))},
cz(a,b,c,d,e,f,g,h,i,j,k,l,m){var s,r,q,p,o
if(b==null)b=0
if(c==null)c=0
if(d==null)d=a.gaQ()
if(e==null)e=a.gan()
if(f==null)f=B.l
s=d-2
r=j+B.j.aH(" ",s)+j
for(q=c+1,p=c+e-1;q<p;++q)a.k(b,q,r,f)
o=B.j.aH(h,s)
s=B.j.aH(l,s)
a.k(b,c,g+o+i,f)
a.k(b,p,k+s+m,f)},
y6(a,b,c,d,e,f,g,h){var s,r,q=d*2,p=B.e.O(q*e/f)
if(p===0&&e>0)p=1
if(p===q&&e<f)p=q-1
for(q=p+1,s=0;s<d;++s){if(s<B.c.A(p,2))r=9608
else r=s<B.c.A(q,2)?9612:32
a.am(b+s,c,new A.W(r,g,h))}},
vc(a,b,c,d,e,f,g,h){var s,r,q
if(g==null)g=B.m
if(h==null)h=B.Y
s=B.e.O(d*e/f)
if(s===0&&e>0)s=1
if(s===d&&e<f)s=d-1
for(r=0;r<d;++r){q=r<s?g:h
a.am(b+r,c,new A.W(9604,q,B.x))}},
nG:function nG(a){this.a=a},
nH:function nH(a,b){this.a=a
this.b=b},
tZ(a,b,c,d,e){var s,r=e.h("r<ap<0>>"),q=A.a([],r)
r=A.a([],r)
s=A.a(a.slice(0),A.M(a))
return new A.l1(s,q,r,d,c,b,B.ak,e.h("l1<0>"))},
u0(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=c.kh(e,B.a.aD(b,0,new A.qY(),t.S))
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.p)(b),++r,m=o){q=b[r]
p=q.a
o=m+p.length
if(o>e)p=B.j.aI(p,0,e-m)
n=q.b
if(n==null)n=d
a.k(f+m,g,p,n)}},
l1:function l1(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=_.x=_.w=0
_.$ti=h},
qU:function qU(a,b,c){this.a=a
this.b=b
this.c=c},
qT:function qT(a){this.a=a},
qR:function qR(a){this.a=a},
qS:function qS(a){this.a=a},
iA:function iA(a,b){this.a=a
this.b=b},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=0},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a9:function a9(a,b){this.a=a
this.b=b},
N:function N(a,b){this.a=a
this.b=b},
qY:function qY(){},
bt:function bt(a,b,c){this.a=a
this.b=b
this.$ti=c},
c3:function c3(a,b,c){this.a=a
this.b=b
this.$ti=c},
hM:function hM(a,b){var _=this
_.b=a
_.c=b
_.d=!0
_.a=null},
ra:function ra(a){this.a=a},
r9:function r9(a){this.a=a},
cp:function cp(){},
rG:function rG(a){this.a=a},
mA:function mA(a){this.b=a
this.c=""
this.a=null},
rM:function rM(a){this.a=a},
mB:function mB(a){this.b=a
this.c=""
this.a=null},
rN:function rN(a){this.a=a},
nE:function nE(a,b){this.a=a
this.b=b},
am(a,b,c){var s
if(0>=a.length)return A.c(a,0)
s=c==null?B.x:c
return new A.W(a.charCodeAt(0),b,s)},
cB(a,b,c){var s=b==null?B.aH:b
return new A.W(a,s,c==null?B.x:c)},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a,b){this.a=a
this.$ti=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
aS:function aS(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.f=d},
yU(a,b,c,d,e,f){var s=A.bX(d.getContext("2d"))
if(s==null)s=A.O(s)
s=new A.kO(a,s,e,A.D(t.aZ,t.E),f,b,c)
s.lk(a,b,c,d,e,f)
return s},
kO:function kO(a,b,c,d,e,f,g){var _=this
_.e=a
_.f=b
_.r=c
_.w=d
_.x=e
_.y=!1
_.z=f
_.Q=g},
pZ:function pZ(a){this.a=a},
q_:function q_(a){this.a=a},
di:function di(){},
hq:function hq(){},
f7:function f7(a,b,c,d){var _=this
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
vV(a,b){var s=a.b,r=s+s+1,q=a.a
return new A.lC(a,A.aa(new A.Y(new A.d(q.gm()-s,q.gn()-s),new A.d(r,r))),b)},
u6(a,b,c){var s=c.S(0,a).gaE()
if(b<7){if(!(b>=0))return A.c(B.c6,b)
return s<=B.c6[b]}return s<=b*(b+1)},
iV:function iV(a,b){this.a=a
this.b=b},
lC:function lC(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
lF:function lF(){},
dV(a,b){var s,r=b.S(0,a),q=r.a,p=new A.d(B.c.gi4(q),0),o=r.b,n=new A.d(0,B.c.gi4(o)),m=Math.abs(q),l=Math.abs(o)
if(l>m){s=l
l=m
m=s
s=n
n=p
p=s}return new A.m5(a,0,m,l,p,n)},
m5:function m5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vH(a,b){var s=Math.max(a.gbM(),b.gbM()),r=Math.min(a.ge3(),b.ge3()),q=Math.max(a.gbS(),b.gbS()),p=Math.min(a.geL(),b.geL())
return new A.Y(new A.d(s,q),new A.d(Math.max(0,r-s),Math.max(0,p-q)))},
aa(a){var s=a.a
return new A.cK(a,s.a-1,s.b)},
Y:function Y(a,b){this.a=a
this.b=b},
cK:function cK(a,b,c){this.a=a
this.b=b
this.c=c},
q6:function q6(a){this.a=a},
lg:function lg(){},
d:function d(a,b){this.a=a
this.b=b},
mw:function mw(){},
dU(a,b,c,d,e){var s=A.Av(new A.rk(c),t.E)
s=s==null?null:A.wf(s)
if(s!=null)a.addEventListener(b,s,!1)
return new A.hT(a,b,s,!1,e.h("hT<0>"))},
Av(a,b){var s=$.b3
if(s===B.ab)return a
return s.o5(a,b)},
tG:function tG(a,b){this.a=a
this.$ti=b},
hS:function hS(){},
lH:function lH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hT:function hT(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
rk:function rk(a){this.a=a},
B2(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null,a7="item",a8="Insect Wing",a9="Feather",b0="item/food",b1="hit[s]",b2="Healing Poultice",b3=1000,b4="water",b5="equipment/armor/body",b6="The shield blocks {2}.",b7="equipment/armor/boots",b8="fearless",b9="bite[s]",c0=" ",c1="{1} flits out of the way.",c2="canine",c3="stare[s] at",c4="spark",c5="zaps",c6="gaze[s] into",c7="splashes",c8="hits",c9="scratch[es]",d0="stab[s]",d1="treasure",d2="spear",d3="healing",d4="goblin",d5="arrow",d6="armor",d7="resistance",d8="protective",d9="robe",e0="magic",e1="slash[es]",e2="equipment",e3="crawl[s] on",e4="fearless immobile",e5="cowardly",e6="club",e7="kobold",e8="poke[s]",e9="claw[s]",f0="saurian",f1="salamander",f2="weapon",f3="strangle",f4="natural/bug/worm",f5="bony hand",f6="bony arm",f7="severed skull",f8="decapitated skeleton",f9="armless skeleton",g0="one-armed skeleton",g1="{1}'s arm falls off!",g2="{1}'s hand falls off!",g3="{1}'s head pops off!",g4="Elven _",g5="High Elven _",g6="Dwarven _",g7="animal herp",g8="room",g9="catacomb"
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
s.bD(30,2,5)
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
s=A.j("Electrum Coin",B.A,50)
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
s=A.j("Electrum Bar",B.A,1200)
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
s=A.j("Amethyst Shard",B.cM,30)
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
s=A.j("Sapphire Shard",B.F,34)
$.h=s
s.E(8,28)
A.i()
s=A.j("Uncut Sapphire",B.D,125)
$.h=s
s.E(28,58)
A.i()
s=A.j("Faceted Sapphire",B.B,440)
$.h=s
s.v(58)
A.i()
s=A.j("Emerald Shard",B.y,37)
$.h=s
s.E(9,29)
A.i()
s=A.j("Uncut Emerald",B.p,136)
$.h=s
s.E(29,59)
A.i()
s=A.j("Faceted Emerald",B.z,486)
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
s=$.h=A.j("Stale Biscuit",B.E,0)
s.E(1,10)
s.b=6
s.eX(100)
A.i()
s=$.h=A.j("Loa[f|ves] of Bread",B.k,4)
s.E(3,40)
s.b=6
s.eX(200)
s=A.a4(188,a6,a6)
s.a2(b0)
s.a.i(0,p,15)
s.w=2
A.i()
s=$.h=A.j("Chunk[s] of Meat",B.v,10)
s.E(8,60)
s.b=4
s.eX(400)
A.i()
s=$.h=A.j("Piece[s] of Jerky",B.k,20)
s.v(15)
s.b=12
s.eX(600)
s=A.a4(172,a6,b1)
s.a2("equipment/light")
s.pk(70)
A.i()
s=$.h=A.j("Tallow Candle",B.E,6)
s.E(1,12)
s.b=10
s.e5(2,p,8)
s.d2(2,5)
s.a.i(0,p,40)
s.w=20
A.i()
s=$.h=A.j("Wax Candle",B.t,24)
s.E(6,20)
s.b=10
s.e5(3,p,8)
s.d2(3,7)
s.a.i(0,p,40)
s.w=25
A.i()
s=$.h=A.j("Oil Lamp",B.v,146)
s.E(12,30)
s.b=4
s.e5(10,p,8)
s.d2(4,10)
s.a.i(0,p,50)
s.w=40
A.i()
s=$.h=A.j("Torch[es]",B.k,230)
s.E(17,45)
s.b=4
s.e5(6,p,10)
s.d2(5,14)
s.a.i(0,p,60)
s.w=60
A.i()
s=$.h=A.j("Lantern",B.h,350)
s.v(24)
s.x=0.3
s.e5(5,p,5)
s.d2(6,18)
s=A.a4(231,10,a6)
s.a2("magic/potion/healing")
s.bD(100,1,6)
o=$.c9()
s.a.i(0,o,20)
s.w=null
A.i()
s=$.h=A.j("Soothing Balm",B.a4,10)
s.E(2,30)
s.jU(36)
A.i()
s=$.h=A.j("Mending Salve",B.m,30)
s.E(20,40)
s.jU(64)
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
s.bD(100,1,6)
s.a.i(0,o,20)
s.w=null
A.i()
s=$.h=A.j("Salve[s] of Heat Resistance",B.M,50)
s.v(5)
s.bB(p)
A.i()
s=$.h=A.j("Salve[s] of Cold Resistance",B.F,55)
s.v(6)
s.bB(o)
A.i()
s=$.h=A.j("Salve[s] of Light Resistance",B.A,60)
s.v(7)
n=$.cZ()
s.bB(n)
A.i()
s=$.h=A.j("Salve[s] of Wind Resistance",B.J,65)
s.v(8)
m=$.e9()
s.bB(m)
A.i()
s=$.h=A.j("Salve[s] of Lightning Resistance",B.N,70)
s.v(9)
l=$.dt()
s.bB(l)
A.i()
s=$.h=A.j("Salve[s] of Darkness Resistance",B.f,75)
s.v(10)
k=$.cY()
s.bB(k)
A.i()
s=$.h=A.j("Salve[s] of Earth Resistance",B.k,80)
s.v(13)
s.bB(r)
A.i()
s=$.h=A.j("Salve[s] of Water Resistance",B.B,85)
s.v(16)
j=$.d_()
s.bB(j)
A.i()
s=$.h=A.j("Salve[s] of Acid Resistance",B.E,90)
s.v(19)
s.bB(q)
A.i()
s=$.h=A.j("Salve[s] of Poison Resistance",B.y,95)
s.v(23)
i=$.bz()
s.bB(i)
A.i()
s=$.h=A.j("Salve[s] of Death Resistance",B.V,100)
s.v(30)
h=$.du()
s.bB(h)
s=A.a4(235,10,a6)
s.a2("magic/potion/speed")
s.x=0.3
s.bD(100,1,6)
s.a.i(0,o,20)
s.w=null
A.i()
s=$.h=A.j("Potion[s] of Quickness",B.y,25)
s.E(3,30)
s.hu(1,40)
A.i()
s=$.h=A.j("Potion[s] of Alacrity",B.p,60)
s.E(18,50)
s.hu(2,60)
A.i()
s=$.h=A.j("Potion[s] of Speed",B.z,150)
s.v(34)
s.x=0.25
s.hu(3,100)
s=A.a4(232,10,a6)
s.a2("magic/potion/bottled")
s.x=0.5
s.bD(100,1,8)
s.a.i(0,o,15)
s.w=null
A.i()
s=$.h=A.j("Bottled Wind",B.F,60)
s.v(4)
s.dQ(m,"wind","blasts",10,!0)
A.i()
s=$.h=A.j("Bottled Ice",B.D,100)
s.v(7)
s.dD(o,"cold","freezes",16)
A.i()
s=$.h=A.j("Bottled Fire",B.m,140)
s.v(11)
s.dQ(p,"fire","burns",23,!0)
A.i()
s=$.h=A.j("Bottled Ocean",B.B,160)
s.v(12)
s.jS(j,b4,"drowns",30)
A.i()
s=$.h=A.j("Bottled Poison",B.z,240)
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
s=$.h=A.j("Bottled Acid",B.y,220)
s.v(22)
s.jS(q,"acid","corrodes",72)
A.i()
s=$.h=A.j("Bottled Shadow",B.l,260)
s.v(28)
s.dD(k,"darkness","torments",120)
A.i()
s=$.h=A.j("Bottled Radiance",B.A,280)
s.v(34)
s.dD(n,"light","sears",140)
A.i()
s=$.h=A.j("Bottled Spirit",B.f,300)
s.v(40)
s.dQ(h,"spirit","haunts",160,!0)
s=A.a4(226,20,a6)
s.a2("magic/scroll/teleportation")
s.x=0.3
s.bD(75,1,3)
s.a.i(0,p,20)
s.w=5
A.i()
s=$.h=A.j("Scroll[s] of Sidestepping",B.N,20)
s.v(2)
s.x=0.5
s.fc(8)
A.i()
s=$.h=A.j("Scroll[s] of Phasing",B.V,28)
s.v(6)
s.fc(14)
A.i()
s=$.h=A.j("Scroll[s] of Teleportation",B.an,52)
s.v(15)
s.fc(28)
A.i()
s=$.h=A.j("Scroll[s] of Disappearing",B.B,74)
s.v(26)
s.fc(54)
s=A.a4(228,20,a6)
s.a2("magic/scroll/detection")
s.bD(75,1,3)
s.a.i(0,p,20)
s.w=5
A.i()
s=$.h=A.j("Scroll[s] of Find Nearby Escape",B.A,12)
s.E(1,10)
g=t.oO
s.eQ(A.a([B.as],g),20)
A.i()
s=$.h=A.j("Scroll[s] of Locate Escape",B.E,28)
s.E(8,30)
s.hh(A.a([B.as],g))
A.i()
s=$.h=A.j("Scroll[s] of Find Nearby Items",B.h,16)
s.E(2,16)
s.eQ(A.a([B.aw],g),20)
A.i()
s=$.h=A.j("Scroll[s] of Item Detection",B.M,64)
s.E(12,40)
s.hh(A.a([B.aw],g))
A.i()
s=$.h=A.j("Scroll[s] of Detect Nearby",B.y,36)
s.E(12,36)
s.eQ(A.a([B.as,B.aw],g),20)
A.i()
s=$.h=A.j("Scroll[s] of Detection",B.ar,124)
s.v(30)
s.hh(A.a([B.as,B.aw],g))
A.i()
g=$.h=A.j("Scroll[s] of Sense Nearby Monsters",B.F,50)
g.E(6,19)
g.hE(15)
A.i()
g=$.h=A.j("Scroll[s] of Sense Monsters",B.a_,70)
g.E(20,39)
g.hE(20)
A.i()
g=$.h=A.j("Scroll[s] of Perceive Monsters",B.D,100)
g.E(40,69)
g.ku(30,50)
A.i()
g=$.h=A.j("Scroll[s] of Telepathy",B.B,150)
g.v(70)
g.hE(200)
g=A.a4(224,20,a6)
g.a2("magic/scroll/mapping")
g.x=0.25
g.bD(75,1,3)
g.a.i(0,p,15)
g.w=5
A.i()
g=$.h=A.j("Adventurer's Map",B.z,70)
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
g.k8(200,!0)
A.B7()
A.Bk()
g=A.a4(201,a6,a6)
g.a2("equipment/armor/helm")
g.x=0.5
g.bD(10,3,5)
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
g=$.h=A.j("Robe",B.D,30)
g.E(2,40)
g.x=0.5
g.cy=4
g.CW=null
g.a.i(0,p,15)
g.w=8
A.i()
g=$.h=A.j("Lined Robe",B.z,110)
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
g=$.h=A.j("Cloak",B.B,70)
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
g.bD(20,5,4)
A.i()
g=$.h=A.j("(Pair[s] of )Gloves",B.E,170)
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
g.bD(10,5,8)
A.i()
g=$.h=A.j("Buckler",B.l,170)
g.E(10,40)
g.cy=0
g.CW=2
g.ch=new A.ay(3,"The buckler blocks {2}.")
A.i()
g=$.h=A.j("Leather Shield",B.v,240)
g.E(20,50)
g.cy=0
g.CW=3
g.ch=new A.ay(5,b6)
g.a.i(0,p,15)
g.w=14
A.i()
g=$.h=A.j("Targe",B.E,340)
g.E(30,60)
g.cy=0
g.CW=4
g.ch=new A.ay(8,"The targe blocks {2}.")
g.a.i(0,p,10)
g.w=20
A.i()
g=$.h=A.j("Roundel",B.f,410)
g.E(40,80)
g.cy=0
g.CW=6
g.ch=new A.ay(10,b6)
A.i()
g=$.h=A.j("Steel Shield",B.o,570)
g.E(50,90)
g.cy=0
g.CW=7
g.ch=new A.ay(12,b6)
A.i()
g=$.h=A.j("Kite Shield",B.d,650)
g.v(60)
g.cy=0
g.CW=8
g.ch=new A.ay(15,b6)
A.i()
g=$.h=A.j("Lantern Shield",B.h,1200)
g.v(30)
g.cy=0
g.CW=8
g.ch=new A.ay(11,b6)
g.oQ(5)
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
A.wB()
A.wF()
A.wN()
g=A.ai("a","natural/bug/spider",a6,b8,a6,a6,a6)
g.at=4
g.ax=2
g.Q=$.mP()
g=A.o("little brown spider",3,B.k,2,30,a6,0)
g.f=40
g.ah(b9,5,i)
g=$.xM()
f=A.bg("Seems harmless enough. What's that dripping from its pedipalps?",g,c0)
$.c6.fy=f
s=A.o("gray spider",7,B.f,20,30,a6,0)
s.f=30
s.ah(b9,5,i)
s=A.o("spiderling",9,B.t,14,35,a6,0)
s.f=50
s.aT(2,7)
s.ah(b9,10,i)
s=A.o("giant spider",12,B.B,40,a6,a6,0)
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
s=A.o("brown bat",1,B.k,4,a6,0.5,0)
s.f=50
B.a.j(s.w,new A.ay(20,c1))
s.aT(2,4)
s.D(b9,3)
s=A.o("giant bat",4,B.v,24,a6,a6,0)
s.f=30
s.D(b9,6)
s=A.o("cave bat",6,B.o,30,a6,a6,0)
s.f=40
B.a.j(s.w,new A.ay(20,c1))
s.aT(2,5)
s.D(b9,6)
s=A.ai("c","natural/animal/mammal/canine",25,a6,a6,a6,20)
s.at=5
s.ax=10
s.f=25
s=A.o("mangy cur",2,B.A,11,a6,a6,0)
s.aN(4)
s.D(b9,4)
B.a.j(s.dx,new A.bP(6,a6,10))
s=A.o("wild dog",4,B.o,20,a6,a6,0)
s.aN(4)
s.D(b9,6)
B.a.j(s.dx,new A.bP(8,a6,10))
s=A.o("mongrel",7,B.M,28,a6,a6,0)
s.aT(2,5)
s.D(b9,8)
B.a.j(s.dx,new A.bP(10,a6,10))
s=A.o("wolf",26,B.t,60,a6,a6,0)
s.aT(3,6)
s.D(b9,12)
B.a.j(s.dx,new A.bP(10,a6,10))
s=A.o("varg",30,B.f,80,a6,a6,0)
s.aT(2,6)
s.D(b9,16)
B.a.j(s.dx,new A.bP(10,a6,10))
s=A.o("Skoll",36,B.h,200,a6,a6,0)
s.hU()
s.ab(new A.ab(c2),5,9)
s.D(b9,20)
B.a.j(s.dx,new A.bP(10,a6,10))
s=A.o("Hati",40,B.D,250,a6,a6,0)
s.hU()
s.ab(new A.ab(c2),5,9)
s.D(b9,23)
B.a.j(s.dx,new A.bP(10,a6,10))
s=A.o("Fenrir",44,B.l,300,a6,a6,0)
s.hU()
s.ab(new A.ab(c2),3,5)
s.k9("Skoll")
s.k9("Hati")
s.D(b9,26)
B.a.j(s.dx,new A.bP(10,a6,10))
A.AG()
s=A.ai("e","magical/eye",a6,"immobile",a6,a6,a6)
s.at=16
s.ax=1
B.a.j(s.w,new A.ay(10,"{1} blinks out of the way."))
s.c=new A.ad(s.c.a|d)
s.d=B.ai
s=A.o("lazy eye",5,B.F,20,a6,a6,0)
s.D(c3,8)
s.au(c4,c5,l,12,8,5)
s=A.o("mad eye",9,B.a4,40,a6,a6,0)
s.D(c3,8)
s.bi(m,15,8,6)
s=A.o("floating eye",15,B.A,60,a6,a6,0)
s.D(c3,10)
s.au(c4,c5,l,24,6,4)
B.a.j(s.dx,new A.bu(7,10))
s=A.o("baleful eye",20,B.M,80,a6,a6,0)
s.D(c6,12)
s.bi(p,20,8,4)
s.au("jet",c7,j,20,8,4)
B.a.j(s.dx,new A.bu(9,10))
s=A.o("malevolent eye",30,B.m,120,a6,a6,0)
s.D(c6,20)
s.bi(n,20,10,4)
s.bi(k,20,10,4)
s.c2(p,30,a6,7)
B.a.j(s.dx,new A.bu(9,10))
s=A.o("murderous eye",40,B.Y,180,a6,a6,0)
s.D(c6,30)
s.bi(q,40,8,7)
s.au("stone",c8,r,40,8,7)
s.c2(o,30,a6,7)
B.a.j(s.dx,new A.bu(9,10))
s=A.o("watcher",60,B.o,300,a6,a6,0)
s.D("see[s]",50)
s.bi(n,40,10,7)
s.c2(n,30,a6,7)
s.bi(k,50,10,7)
s.c2(k,40,a6,7)
s=A.ai("f","natural/animal/mammal/feline",40,a6,a6,a6,a6)
s.at=10
s.ax=8
s=A.o("stray cat",1,B.h,11,a6,a6,1)
s.f=30
B.a.j(s.dx,new A.b1(B.ch,4))
s.D(b9,4)
s.D(c9,3)
s=A.ai("g","humanoid/hob/goblin",a6,a6,a6,a6,a6)
s.at=8
s.ax=4
s.f=10
e=s.c
c=$.bM().a
s.c=new A.ad(e.a|c)
e=A.o("goblin peon",4,B.E,30,a6,a6,0)
e.f=20
e.aN(4)
e.D(d0,8)
B.a.j(e.dx,new A.b1(B.a7,8))
e.B(d1,20)
e.B(d2,5)
e.B(d3,10)
e=A.o("goblin archer",6,B.p,36,a6,a6,0)
e.aN(2)
e.ab(new A.ab(d4),0,3)
e.D(d0,4)
s=$.aw()
e.au(d5,c8,s,8,8,3)
e.B(d1,30)
e.B("bow",10)
e.B("dagger",5)
e.B(d3,10)
e=A.o("goblin fighter",6,B.k,58,a6,a6,0)
e.aN(2)
e.ab(new A.ab(d4),1,4)
e.D(d0,12)
e.B(d1,20)
e.B(d2,10)
e.B(d6,10)
e.B(d7,5)
e.B(d3,10)
e=A.o("goblin warrior",8,B.o,68,a6,a6,0)
e.aN(2)
e.ab(new A.ab(d4),1,5)
e.D(d0,16)
e.B(d1,25)
e.B("axe",10)
e.B(d6,10)
e.B(d7,5)
e.B(d3,10)
b=t.s
B.a.U(e.x,A.a(d8.split(c0),b))
e=A.o("goblin mage",9,B.B,50,a6,a6,0)
e.ab(new A.ab(d4),1,4)
e.D("whip[s]",7)
e.bi(p,12,8,12)
e.au(c4,c5,l,16,6,12)
e.B(d1,20)
e.B(d9,10)
e.B(e0,30)
e=A.o("goblin ranger",12,B.z,60,a6,a6,0)
e.ab(new A.ab(d4),0,5)
e.D(d0,10)
e.au(d5,c8,s,12,8,3)
e.B(d1,20)
e.B("bow",15)
e.B(d6,10)
e.B(e0,20)
e=A.o("Erlkonig, the Goblin Prince",14,B.l,120,a6,a6,0)
e.cI(B.aG)
e.ab(new A.ab(d4),4,8)
e.D(b1,10)
e.D(e1,14)
e.bi(k,20,10,20)
e.hm(d1,3)
e.ov(e2,2,4)
e.eR(e0,3,4)
B.a.U(e.x,A.a(d8.split(c0),b))
e=A.ai("i","bug",a6,b8,a6,a6,3)
e.at=5
e.ax=2
e.f=40
e=A.o("giant cockroach[es]",1,B.v,4,a6,0.4,0)
e.aT(2,5)
e.d=B.bf
e.D(e3,2)
B.a.j(e.dx,new A.bI(!1,4))
e.B(a8,30)
f=A.bg("It's not quite as easy to squash one of these when it's as long as\n      your arm.",g,c0)
$.c6.fy=f
e=A.o("giant centipede",3,B.m,14,a6,a6,2)
e.f=20
e.D(e3,4)
e.D(b9,8)
e=A.ai("i","natural/bug/fly",a6,b8,a6,a6,3)
e.at=5
e.ax=2
e.f=40
e=A.o("firefly",8,B.M,6,a6,a6,1)
e.f=70
e.aT(3,8)
e.ah(b9,12,p)
e.B(a8,40)
e=A.ai("j","magical/jelly",a6,b8,0.7,-1,a6)
e.at=3
e.ax=1
e.f=30
e.d=B.aR
e=A.o("green jelly",1,B.y,10,a6,a6,0)
a=e.Q=$.xl()
e.D(e3,3)
e=A.ai("j","jelly",a6,e4,0.6,a6,a6)
e.at=2
e.ax=1
e.d=B.bf
e.aN(4)
e=A.o("green slime",2,B.p,8,a6,a6,0)
e.Q=a
e.D(e3,4)
B.a.j(e.dx,new A.bI(!1,4))
e=A.o("frosty slime",4,B.t,14,a6,a6,0)
e.Q=$.xy()
e.ah(e3,5,o)
B.a.j(e.dx,new A.bI(!1,4))
e=A.o("mud slime",6,B.k,20,a6,a6,0)
e.Q=$.xd()
e.ah(e3,8,r)
B.a.j(e.dx,new A.bI(!1,4))
e=A.o("smoking slime",15,B.m,30,a6,a6,0)
e.as=4
e.Q=$.xp()
e.ah(e3,10,p)
B.a.j(e.dx,new A.bI(!1,4))
e=A.o("sparkling slime",20,B.V,40,a6,a6,0)
e.as=3
e.Q=$.xx()
e.ah(e3,12,l)
B.a.j(e.dx,new A.bI(!1,4))
e=A.o("caustic slime",25,B.ad,50,a6,a6,0)
e.Q=a
e.ah(e3,13,q)
B.a.j(e.dx,new A.bI(!1,4))
e=A.o("virulent slime",35,B.z,60,a6,a6,0)
e.Q=a
e.ah(e3,14,i)
B.a.j(e.dx,new A.bI(!1,4))
e=A.o("ectoplasm",45,B.l,40,a6,a6,0)
e.Q=$.xk()
e.ah(e3,15,h)
B.a.j(e.dx,new A.bI(!1,4))
e=A.ai("k","humanoid/hob/kobold",a6,e5,a6,a6,a6)
e.at=10
e.ax=4
e.f=15
e=A.o("scurrilous imp",1,B.a4,12,a6,a6,0)
e.f=20
e.aN(2)
e.D("club[s]",4)
B.a.j(e.dx,new A.b1(B.a7,5))
e.oJ()
e.B(d1,20)
e.B(e6,10)
e.B("speed",20)
e=A.o("vexing imp",2,B.V,16,a6,a6,0)
e.aN(2)
e.ab(new A.ab(e7),0,1)
e.D(c9,4)
B.a.j(e.dx,new A.b1(B.a7,5))
e.au(c4,c5,l,6,6,5)
e.B(d1,25)
e.B("teleportation",20)
A.ai("k",e7,a6,a6,a6,a6,a6).f=20
e=A.o(e7,3,B.m,20,a6,a6,0)
e.aN(3)
e.ab(new A.ab(c2),0,3)
e.D(e8,4)
B.a.j(e.dx,new A.bu(6,10))
e.B(d1,25)
e.B(e2,10)
e.B(e0,20)
e=A.o("kobold shaman",4,B.B,20,a6,a6,0)
e.aN(2)
e.ab(new A.ab(c2),0,3)
e.D(b1,4)
e.au("jet",c7,j,8,8,10)
e.B(d1,25)
e.B(d9,10)
e.B(e0,20)
e=A.o("kobold trickster",5,B.h,24,a6,a6,0)
e.D(b1,5)
a=e.dx
B.a.j(a,new A.b1(B.a7,5))
e.au(c4,c5,l,8,6,5)
B.a.j(a,new A.bu(6,7))
e.ht(7)
e.B(d1,35)
e.B(e0,20)
e=A.o("kobold priest",6,B.D,30,a6,a6,0)
e.aN(2)
e.ab(new A.ab(e7),1,3)
e.D("club[s]",6)
B.a.j(e.dx,new A.fT(10,15))
e.ht(7)
e.B(d1,20)
e.B(e6,10)
e.B(d9,10)
e.B(e0,30)
e=A.o("imp incanter",7,B.N,33,a6,a6,0)
e.aN(2)
e.ab(new A.ab(e7),1,3)
e.ab(new A.ab(c2),0,3)
e.D(c9,4)
B.a.j(e.dx,new A.b1(B.a7,6))
e.au(c4,c5,l,10,6,5)
e.B(d1,30)
e.B(d9,10)
e.B(e0,35)
B.a.U(e.x,A.a(e5.split(c0),b))
e=A.o("imp warlock",8,B.an,46,a6,a6,0)
e.ab(new A.ab(e7),2,5)
e.ab(new A.ab(c2),0,3)
e.D(d0,5)
e.au("ice","freezes",o,12,8,8)
e.au(c4,c5,l,12,6,8)
e.B(d1,30)
e.B("staff",20)
e.B(d9,10)
e.B(e0,30)
e=A.o("Feng",10,B.M,80,a6,a6,1)
e.f=10
e.cI(B.aG)
e.ab(new A.ab(e7),4,10)
e.ab(new A.ab(c2),1,3)
e.D(d0,5)
a=e.dx
B.a.j(a,new A.b1(B.a7,7))
B.a.j(a,new A.bu(6,5))
B.a.j(a,new A.bu(30,50))
e.c2(l,12,a6,8)
e.eR(d1,3,5)
e.ho(d2,5,20)
e.ho(d6,5,30)
e.eR(e0,2,5)
e=A.ai("l","humanoid/saurian",a6,b8,a6,a6,a6)
e.at=10
e.ax=5
e.f=10
B.a.j(e.w,new A.ay(5,"{2} [are|is] deflected by its scales."))
e=A.o("lizard guard",11,B.h,26,a6,a6,0)
e.D(e9,8)
e.D(b9,10)
e.B(d1,30)
e.B(d6,10)
e.B(d2,10)
e=A.o("lizard protector",15,B.y,30,a6,a6,0)
e.ab(new A.ab(f0),0,2)
e.D(e9,10)
e.D(b9,14)
e.B(d1,30)
e.B(d6,10)
e.B(d2,10)
e=A.o("armored lizard",17,B.o,38,a6,a6,0)
e.ab(new A.ab(f0),0,2)
e.D(e9,10)
e.D(b9,15)
e.B(d1,30)
e.B(d6,20)
e.B(d2,10)
e=A.o("scaled guardian",19,B.l,50,a6,a6,0)
e.ab(new A.ab(f0),0,3)
e.ab(new A.ab(f1),0,2)
e.D(e9,10)
e.D(b9,15)
e.B(d1,40)
e.B(e2,10)
e=A.o(f0,21,B.M,64,a6,a6,0)
e.ab(new A.ab(f0),1,4)
e.ab(new A.ab(f1),0,2)
e.D(e9,12)
e.D(b9,17)
e.B(d1,50)
e.B(e2,10)
e=A.ai("o","humanoid/orcus/orc",a6,a6,a6,a6,a6)
e.at=7
e.ax=6
e.f=10
e.c=new A.ad(e.c.a|c)
B.a.U(e.x,A.a(d8.split(c0),b))
e=A.o("orc",28,B.M,100,a6,a6,0)
e.aT(3,6)
e.D(d0,12)
e.B(d1,20)
e.B(e2,5)
e.B(d2,5)
e=A.o("orc brute",29,B.ad,120,a6,a6,0)
e.ab(new A.ab("orc"),2,5)
e.D("bash[es]",16)
e.B(d1,20)
e.B(e6,10)
e.B(d6,10)
e=A.o("orc soldier",30,B.o,140,a6,a6,0)
e.aT(4,6)
e.ab(new A.ab("orcus"),1,5)
e.D(d0,20)
e.B(d1,25)
e.B("axe",10)
e.B(d6,10)
e=A.o("orc chieftain",31,B.m,180,a6,a6,0)
e.ab(new A.ab("orcus"),2,10)
e.D(d0,10)
e.ou(d1,2,40)
e.B(e2,20)
e.B(a7,20)
e=A.ai("p","humanoid/human",a6,a6,a6,a6,14)
e.at=10
e.ax=5
e.f=10
e.c=new A.ad(e.c.a|c)
e.as=2
e=A.o("Harold the Misfortunate",2,B.N,30,a6,a6,0)
e.cI(B.aG)
e.D(b1,3)
B.a.j(e.dx,new A.b1(B.aE,5))
e.B(d1,80)
e.hn(f2,4,20)
e.hn(d6,4,30)
e.hn(e0,4,40)
e=A.o("hapless adventurer",1,B.A,14,15,a6,0)
e.f=30
e.D(b1,3)
B.a.j(e.dx,new A.b1(B.aE,12))
e.B(d1,15)
e.B(f2,10)
e.B(d6,15)
e.B(e0,20)
B.a.U(e.x,A.a(e5.split(c0),b))
e=A.o("simpering knave",2,B.M,17,a6,a6,0)
e.D(b1,2)
e.D(d0,4)
e.B(d1,20)
e.B("whip",10)
e.B(d6,15)
e.B(e0,20)
B.a.U(e.x,A.a(e5.split(c0),b))
e=A.o("decrepit mage",3,B.V,20,a6,a6,0)
e.f=30
e.D(b1,2)
e.au(c4,c5,l,8,6,10)
e.B(d1,15)
e.B(e0,30)
e.B("dagger",5)
e.B("staff",5)
e.B(d9,10)
e.B("boots",5)
e=A.o("unlucky ranger",5,B.p,30,25,a6,0)
e.f=20
e.D(e1,2)
e.au(d5,c8,s,2,8,4)
B.a.j(e.dx,new A.b1(B.aE,10))
e.B(d1,20)
e.B("potion",20)
e.B("bow",10)
e.B("body",20)
e=A.o("drunken priest",5,B.D,34,a6,a6,0)
e.f=40
e.D(b1,8)
s=e.dx
B.a.j(s,new A.fT(8,15))
B.a.j(s,new A.b1(B.aE,5))
e.B(d1,35)
e.B("scroll",20)
e.B(e6,10)
e.B(d9,10)
B.a.U(e.x,A.a(b8.split(c0),b))
e=A.ai("r","natural/animal/mammal/rodent",30,a6,a6,a6,a6)
e.at=4
e.ax=6
e.f=30
e.d=B.aR
e=A.o("[mouse|mice]",1,B.E,3,a6,0.7,0)
e.aN(6)
e.D(b9,3)
e.D(c9,2)
e=A.o("sewer rat",2,B.f,8,a6,a6,0)
e.f=20
e.aN(4)
e.D(b9,4)
e.D(c9,3)
e=A.o("sickly rat",3,B.p,10,a6,a6,0)
e.ah(b9,8,i)
e.D(c9,4)
e=A.o("plague rat",6,B.y,20,a6,a6,0)
e.aN(4)
e.ah(b9,15,i)
e.D(c9,8)
e=A.o("giant rat",8,B.M,40,a6,a6,0)
e.D(b9,12)
e.D(c9,8)
e=A.o("The Rat King",8,B.Y,120,a6,a6,0)
e.cI(B.aG)
e.D(b9,16)
e.D(c9,10)
e.ab(new A.ab("rodent"),8,16)
e.hm(d1,3)
e.ho(a7,10,50)
e=A.ai("s","natural/bug/slug",5,b8,a6,-3,2)
e.at=3
e.ax=1
e.f=30
A.o("giant slug",3,B.ac,20,a6,a6,0).D(e3,8)
A.o("suppurating slug",6,B.y,50,a6,a6,0).ah(e3,12,i)
A.o("acidic slug",9,B.ac,70,a6,a6,0).ah(e3,16,q)
e=A.ai("v","natural/plant/vine",a6,e4,a6,a6,a6)
e.ax=e.at=10
A.o("choker",16,B.p,40,a6,a6,0).D(f3,12)
e=A.o("nightshade",19,B.N,50,a6,a6,0)
e.kR(10,3)
e.ah("touch[es]",12,i)
e=A.o("creeper",22,B.y,60,a6,a6,0)
B.a.j(e.dx,new A.bI(!0,10))
e.kR(10,3)
e.D(f3,8)
A.o("strangler",26,B.z,80,a6,a6,0).D(f3,14)
s=A.ai("w",f4,15,b8,a6,a6,a6)
s.at=2
s.ax=3
s.f=40
s=A.o("blood worm",1,B.Y,4,a6,0.5,0)
s.aT(3,7)
s.D(e3,5)
s=A.o("fire worm",10,B.M,6,a6,a6,0)
s.aT(2,6)
s.d=B.aR
s.ah(e3,5,p)
A.ai("w",f4,10,b8,a6,a6,a6).f=30
A.o("giant earthworm",3,B.a4,30,a6,a6,-2).D(e3,5)
A.o("giant cave worm",7,B.E,80,a6,a6,-2).ah(e3,12,q)
s=A.ai("x","undead/skeleton",a6,a6,a6,a6,a6)
s.ax=s.at=4
s.f=30
s=A.o(f5,3,B.f,18,a6,3,-1)
s.f=40
s.D(e9,6)
s=A.o(f6,4,B.o,26,a6,4,0)
s.f=40
s.D(e9,8)
s=A.o(f7,7,B.E,33,a6,3,-2)
s.f=40
s.D(b9,10)
s=A.o(f8,10,B.A,44,a6,4,0)
s.ax=s.at=0
s.f=60
s.c=new A.ad(s.c.a|c)
s.D(e9,7)
s.B(d1,30)
s.B(f2,10)
s.B(d6,10)
s=A.o(f9,12,B.ad,50,a6,4,0)
s.D(b9,9)
s.D("kick[s]",7)
s.B(d1,30)
s.B(d6,10)
s=A.o(g0,13,B.y,60,a6,5,0)
s.c=new A.ad(s.c.a|c)
s.D(e9,7)
e=s.dx
B.a.j(e,new A.bp(A.aJ(f9),A.aJ(f6),g1,1))
B.a.j(e,new A.bp(A.aJ(f9),A.aJ(f5),g2,1))
s.B(d1,30)
s.B(f2,5)
s.B(d6,10)
s=A.o("skeleton",15,B.t,70,a6,6,0)
s.c=new A.ad(s.c.a|c)
s.D(e9,7)
s.D(b9,9)
e=s.dx
B.a.j(e,new A.bp(A.aJ(f8),A.aJ(f7),g3,1))
B.a.j(e,new A.bp(A.aJ(g0),A.aJ(f6),g1,1))
B.a.j(e,new A.bp(A.aJ(g0),A.aJ(f5),g2,1))
s.B(d1,40)
s.B(f2,10)
s.B(d6,10)
s=A.o("skeleton warrior",17,B.a4,90,a6,6,0)
s.c=new A.ad(s.c.a|c)
s.D(e1,13)
s.D(d0,10)
e=s.dx
B.a.j(e,new A.bp(A.aJ(f8),A.aJ(f7),g3,1))
B.a.j(e,new A.bp(A.aJ(g0),A.aJ(f6),g1,1))
B.a.j(e,new A.bp(A.aJ(g0),A.aJ(f5),g2,1))
s.B(d1,50)
s.B(f2,20)
s.B(d6,15)
s=A.o("robed skeleton",19,B.N,110,a6,4,0)
s.c=new A.ad(s.c.a|c)
s.D(e1,13)
s.D(d0,10)
s.bi(l,15,10,8)
e=s.dx
B.a.j(e,new A.bp(A.aJ(f8),A.aJ(f7),g3,1))
B.a.j(e,new A.bp(A.aJ(g0),A.aJ(f6),g1,1))
B.a.j(e,new A.bp(A.aJ(g0),A.aJ(f5),g2,1))
s.B(d1,50)
s.B(e0,20)
s.B(d6,10)
s=A.ai("B","natural/animal/bird",a6,a6,a6,a6,a6)
s.at=8
s.ax=6
B.a.j(s.w,new A.ay(10,"{1} flaps out of the way."))
s.c=new A.ad(s.c.a|d)
s.aT(3,6)
s=A.o("crow",4,B.l,10,a6,a6,2)
s.f=30
s.D(b9,5)
s.B(a9,30)
f=A.bg('"What harm can a stupid little crow do?" you think as it and its\n      murderous friends dive towards your eyes, claws extended.',g,c0)
$.c6.fy=f
s=A.o("raven",6,B.f,16,a6,a6,0)
s.f=15
s.D(b9,5)
s.D(e9,4)
s.B(a9,30)
B.a.U(s.x,A.a(d8.split(c0),b))
f=A.bg("Its black eyes gleam with a malevolent intelligence.",g,c0)
$.c6.fy=f
A.AP()
s=A.ai("F","humanoid/hob/fae",a6,e5,a6,2,a6)
s.at=10
s.ax=8
s.f=30
B.a.j(s.w,new A.ay(10,c1))
s.c=new A.ad(s.c.a|d)
s.d=B.ai
s=A.o("forest sprite",2,B.ad,6,a6,a6,0)
s.D(c9,3)
B.a.j(s.dx,new A.b1(B.a7,4))
s.au(c4,c5,l,4,6,12)
s.B(d1,10)
s.B(e0,30)
s.B(a8,30)
s=A.o("house sprite",5,B.F,10,a6,a6,0)
s.D(e8,5)
g=s.dx
B.a.j(g,new A.b1(B.a7,4))
s.au("stone",c8,r,4,8,10)
B.a.j(g,new A.bu(4,8))
s.B(d1,10)
s.B(e0,30)
s.B(a8,30)
s=A.o("mischievous sprite",7,B.a4,24,a6,a6,0)
s.D(e8,6)
g=s.dx
B.a.j(g,new A.b1(B.a7,4))
s.bi(m,8,8,10)
B.a.j(g,new A.bu(5,10))
s.B(d1,10)
s.B(e0,30)
s.B(a8,30)
s=A.o("Tink",8,B.p,40,a6,a6,0)
s.cI(B.cl)
s.f=10
s.D(e8,8)
g=s.dx
B.a.j(g,new A.b1(B.a7,4))
s.au(c4,c5,l,4,6,8)
s.bi(m,7,8,10)
B.a.j(g,new A.bu(5,10))
s.hm(d1,2)
s.eR(e0,3,3)
s=A.ai("H","mythical/beast/hybrid",a6,a6,a6,a6,a6)
s.at=10
s.ax=12
s=A.o("harpy",25,B.N,50,a6,a6,2)
s.c=new A.ad(s.c.a|d)
s.aT(2,5)
s.D(b9,10)
s.D(c9,15)
d=s.dx
B.a.j(d,new A.bP(10,"screeches",10))
B.a.j(d,new A.b1(B.cg,5))
s.B(a9,50)
s=A.o("griffin",35,B.h,200,a6,a6,0)
s.D(b9,20)
s.D(c9,15)
s.B(a9,50)
A.ai("Q","magical",a6,a6,a6,a6,a6)
s=A.o("Nameless Unmaker",100,B.V,b3,a6,a6,2)
s.cI(B.w)
s.ax=s.at=16
s.ah("crushe[s]",250,r)
s.ah("blast[s]",200,l)
s.c2(k,500,a6,10)
B.a.U(s.x,A.a(b8.split(c0),b))
s.c=new A.ad(s.c.a|c)
a0=A.um(20,new A.aH(100,A.a7(a7,s.CW,B.hn)))
B.a.j(s.dy,a0)
A.ai("R","natural/animal/herp",a6,a6,a6,a6,a6)
s=A.o("frog",1,B.y,4,30,a6,0)
s.at=6
s.ax=4
s.f=30
s.c=new A.ad(s.c.a|$.is().a)
s.D("hop[s] on",2)
s=A.ai("R","natural/animal/herp/salamander",30,a6,a6,a6,a6)
s.at=6
s.ax=5
s.f=20
s.d=B.ai
s.as=3
s=A.o("juvenile salamander",7,B.a4,20,a6,a6,0)
s.ah(b9,14,p)
s.c2(p,20,4,16)
s=A.o(f1,13,B.m,30,a6,a6,0)
s.ah(b9,18,p)
s.c2(p,30,5,16)
s=A.o("three-headed salamander",23,B.Y,90,a6,a6,0)
s.ah(b9,24,p)
s.c2(p,20,5,10)
s=A.ai("S","natural/animal/herp/snake",30,a6,a6,a6,a6)
s.at=4
s.ax=7
s.f=30
A.o("water snake",1,B.y,11,a6,a6,0).D(b9,3)
A.o("brown snake",3,B.k,25,a6,a6,0).D(b9,4)
A.o("cave snake",8,B.o,40,a6,a6,0).D(b9,10)
A.fo()
A.xX($.ca().goD())
A.aV()
$.bb="body"
s=A.I(g4,1)
s.v(40)
s.X(2,4,3)
s.J(400,2)
s.bE(-2)
g=t.Q
g.a(A.Z())
s.as=A.Z()
s.R(n)
s=A.I(g5,0.3)
s.v(60)
s.X(4,4,6)
s.J(600,3)
s.bE(-3)
s.as=A.Z()
e=t.S
s.ch.i(0,B.aa,g.a(A.fp(1,e)))
s.R(m)
s.R(n)
A.aV()
$.bb="cloak"
s=A.I(g4,1)
s.E(40,80)
s.X(4,4,6)
s.J(300,2)
s.bE(-1)
s.as=A.Z()
s.R(n)
s=A.I(g5,0.3)
s.v(60)
s.X(5,4,8)
s.J(500,3)
s.bE(-2)
s.as=A.Z()
s.ch.i(0,B.aa,g.a(A.fp(2,e)))
s.R(m)
s.R(n)
A.aV()
$.bb="boots"
s=A.I(g4,1)
s.v(50)
s.X(2,4,5)
s.J(400,2.5)
s.bE(-2)
s.as=A.Z()
A.aV()
$.bb="helm"
s=A.I(g4,1)
s.E(40,80)
s.X(1,4,3)
s.J(400,2)
s.bE(-1)
s.as=A.Z()
s.ch.i(0,B.Z,g.a(A.fp(1,e)))
s.R(n)
s=A.I(g5,0.3)
s.v(60)
s.b5(2,4)
s.J(600,3)
s.bE(-1)
s.as=A.Z()
s.ch.i(0,B.Z,A.Z())
s.R(m)
s.R(n)
A.aV()
$.bb="shield"
s=A.I(g4,1)
s.E(40,80)
s.X(3,4,5)
s.J(300,1.6)
s.bz(0.8)
s.aA(A.aW())
s.R(n)
s=A.I(g5,0.5)
s.v(50)
s.b5(1,4)
s.J(500,2.2)
s.bz(0.6)
d=t.i
s.aA(A.fp(1.5,d))
s.ch.i(0,B.Z,A.Z())
s.R(m)
s.R(n)
A.aV()
$.bb="body"
s=A.I(g6,1)
s.v(30)
s.X(4,3,6)
s.J(400,2)
s.bE(2)
s.as=A.Z()
s.R(r)
s.R(k)
A.aV()
$.bb="helm"
s=A.I(g6,1)
s.v(50)
s.X(3,4,5)
s.J(300,2)
s.bE(1)
s.as=A.Z()
s.R(r)
s.R(k)
A.aV()
$.bb="gloves"
s=A.I(g6,1)
s.v(50)
s.J(300,2)
s.X(2,4,4)
s.bE(1)
s.as=A.Z()
s.ch.i(0,B.aj,g.a(A.fp(1,e)))
s.R(r)
s.R(k)
A.aV()
$.bb="boots"
s=A.I(g6,1)
s.v(50)
s.X(3,4,5)
s.J(300,2)
s.bE(1)
s.as=A.Z()
s.R(r)
s.R(k)
A.aV()
$.bb="shield"
s=A.I(g6,1)
s.v(40)
s.X(4,3,8)
s.J(200,2.2)
s.bz(1.2)
s.dJ(A.Z(),A.aW())
s.R(r)
s.R(k)
A.aV()
$.bb="armor"
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
s.bs(m,A.Z())
m=A.I("_ of Protection from Earth",0.25)
m.v(37)
m.b5(2,5)
m.J(500,1.4)
m.bs(r,A.Z())
r=A.I("_ of Protection from Fire",0.25)
r.v(38)
r.b5(2,5)
r.J(500,1.5)
r.bs(p,A.Z())
r=A.I("_ of Protection from Water",0.25)
r.v(39)
r.b5(2,5)
r.J(500,1.4)
r.bs(j,A.Z())
j=A.I("_ of Protection from Acid",0.2)
j.v(40)
j.b5(2,5)
j.J(500,1.5)
j.bs(q,A.Z())
q=A.I("_ of Protection from Cold",0.25)
q.v(41)
q.b5(2,5)
q.J(500,1.4)
q.bs(o,A.Z())
q=A.I("_ of Protection from Lightning",0.16)
q.v(42)
q.b5(2,5)
q.J(500,1.4)
q.bs(l,A.Z())
q=A.I("_ of Protection from Poison",0.14)
q.v(43)
q.b5(2,5)
q.J(b3,1.6)
q.bs(i,A.Z())
q=A.I("_ of Protection from Dark",0.14)
q.v(44)
q.b5(2,5)
q.J(500,1.5)
q.bs(k,A.Z())
q=A.I("_ of Protection from Light",0.14)
q.v(45)
q.b5(2,5)
q.J(500,1.5)
q.bs(n,A.Z())
q=A.I("_ of Protection from Spirit",0.13)
q.v(46)
q.b5(2,5)
q.J(800,1.6)
q.bs(h,A.Z())
A.aV()
$.bb="weapon"
q=A.I("_ of Harming",1)
q.E(1,30)
q.X(1,3,2)
q.J(100,1.2)
q.bz(1.05)
q.dI(A.Z())
q=A.I("_ of Wounding",1)
q.E(10,50)
q.X(3,3,5)
q.J(140,1.3)
q.bz(1.07)
q.dI(A.Z())
q=A.I("_ of Maiming",1)
q.E(25,75)
q.X(2,3,4)
q.J(180,1.5)
q.bz(1.09)
q.dJ(A.Z(),A.aW())
q=A.I("_ of Slaying",1)
q.v(45)
q.X(4,2,8)
q.J(200,2)
q.bz(1.11)
q.dJ(A.Z(),A.aW())
A.aV()
$.bb="bow"
q=A.I("Ash _",1)
q.E(10,70)
q.X(2,4,4)
q.J(300,1.3)
q.bz(0.8)
q.dI(A.Z())
q=A.I("Yew _",1)
q.v(20)
q.X(5,3,8)
q.J(500,1.4)
q.bz(0.8)
q.dI(A.Z())
A.aV()
$.bb="weapon"
q=A.I("Glimmering _",0.3)
q.E(20,60)
q.X(2,3,3)
q.J(300,1.3)
q.aA(A.aW())
q.by(n)
q=A.I("Shining _",0.25)
q.E(32,90)
q.X(4,3,5)
q.J(400,1.6)
q.aA(A.aW())
q.by(n)
q=A.I("Radiant _",0.2)
q.v(48)
q.X(6,3,8)
q.J(500,2)
q.aA(A.aW())
q.cg(n,2)
n=A.I("Dim _",0.3)
n.E(16,60)
n.X(2,3,3)
n.J(300,1.3)
n.aA(A.aW())
n.by(k)
n=A.I("Dark _",0.25)
n.E(32,80)
n.X(4,3,5)
n.J(400,1.6)
n.aA(A.aW())
n.by(k)
n=A.I("Black _",0.2)
n.v(56)
n.X(6,3,8)
n.J(500,2)
n.aA(A.aW())
n.cg(k,2)
k=A.I("Chilling _",0.3)
k.E(20,65)
k.X(4,3,6)
k.J(300,1.5)
k.aA(A.aW())
k.by(o)
k=A.I("Freezing _",0.25)
k.v(40)
k.X(6,3,9)
k.J(400,1.7)
k.aA(A.aW())
k.cg(o,2)
o=A.I("Burning _",0.3)
o.E(20,60)
o.X(3,3,5)
o.J(300,1.5)
o.aA(A.aW())
o.by(p)
o=A.I("Flaming _",0.25)
o.E(40,90)
o.X(6,3,7)
o.J(360,1.8)
o.aA(A.aW())
o.by(p)
o=A.I("Searing _",0.2)
o.v(60)
o.X(8,3,11)
o.J(500,2.1)
o.aA(A.aW())
o.cg(p,2)
p=A.I("Electric _",0.2)
p.v(50)
p.X(4,3,7)
p.J(300,1.5)
p.aA(A.aW())
p.by(l)
p=A.I("Shocking _",0.2)
p.v(70)
p.X(8,3,11)
p.J(400,2)
p.aA(A.aW())
p.cg(l,2)
l=A.I("Poisonous _",0.2)
l.E(35,90)
l.X(1,4,2)
l.J(500,1.5)
l.aA(A.aW())
l.by(i)
l=A.I("Venomous _",0.2)
l.v(70)
l.X(3,4,5)
l.J(800,1.8)
l.aA(A.aW())
l.cg(i,2)
i=A.I("Ghostly _",0.2)
i.E(45,85)
i.X(4,3,6)
i.J(300,1.6)
i.bz(0.7)
i.aA(A.aW())
i.by(h)
i=A.I("Spiritual _",0.15)
i.v(80)
i.X(7,3,10)
i.J(400,2.1)
i.bz(0.7)
i.aA(A.aW())
i.cg(h,2)
A.xR()
A.aV()
$.bb="helm"
h=A.I("_ of Acumen",1)
h.E(35,55)
h.b5(1,4)
h.J(300,2)
h.ch.i(0,B.Z,A.Z())
h=A.I("_ of Wisdom",1)
h.E(45,75)
h.X(2,4,3)
h.J(500,3)
h.ch.i(0,B.Z,A.Z())
h=A.I("_ of Sagacity",1)
h.v(75)
h.X(4,4,5)
h.J(700,4)
h.ch.i(0,B.Z,A.Z())
h=A.I("_ of Genius",1)
h.v(85)
h.X(6,4,7)
h.J(b3,5)
h.ch.i(0,B.Z,A.Z())
A.aV()
h=t.N
A.ir("The General's General Store",A.A(["Loaf of Bread",2,"Chunk of Meat",0.6,"Tallow Candle",1,"Wax Candle",0.7,"Oil Lamp",0.5,"Torch",0.3,"Lantern",0.1,"Soothing Balm",0.6,"Mending Salve",0.4,b2,0.2,"Club",0.1,"Staff",0.1,"Quarterstaff",0.05,"Whip",0.1,"Dagger",0.1],h,d))
A.ir("Dirk's Death Emporium",A.A(["Hammer",0.5,"Mattock",0.2,"War Hammer",0.1,"Morningstar",0.6,"Mace",0.3,"Chain Whip",0.2,"Flail",0.1,"Falchion",0.7,"Rapier",1,"Shortsword",0.6,"Scimitar",0.4,"Cutlass",0.2,"Spear",1,"Angon",0.4,"Lance",0.2,"Partisan",0.1,"Hatchet",1,"Axe",0.5,"Valaska",0.25,"Battleaxe",0.2,"Short Bow",1,"Longbow",0.3,"Crossbow",0.05],h,d))
A.ir("Skullduggery and Bamboozelry",A.A(["Dirk",1,"Dagger",0.3,"Stiletto",0.1,"Rondel",0.05,"Baselard",0.02],h,d))
A.ir("Garthag's Armoury",A.A(["Cloak",1,"Fur Cloak",1,"Cloth Shirt",1,"Leather Shirt",1,"Jerkin",1,"Leather Armor",1,"Padded Armor",1,"Studded Armor",1,"Mail Hauberk",1,"Scale Mail",1,"Robe",1,"Lined Robe",1,"Sandals",1,"Shoes",1,"Boots",1,"Plated Boots",1,"Greaves",1],h,d))
A.ir("Unguence the Alchemist",A.A(["Soothing Balm",1,"Mending Salve",1,b2,1,"Antidote",1,"Potion of Quickness",1,"Potion of Alacrity",1,"Bottled Wind",1,"Bottled Ice",1,"Bottled Fire",1,"Bottled Ocean",1,"Bottled Earth",1],h,d))
A.ir("The Droll Magery",A.A(["Scroll of Sidestepping",1,"Scroll of Phasing",1,"Scroll of Item Detection",1],h,d))
A.wB()
A.wF()
A.wN()
A.ip(new A.hO(A.a([new A.aH(30,A.a7("Skull",a6,a6)),new A.aH(30,A.a7(d1,a6,a6)),new A.aH(20,A.a7(f2,a6,a6)),new A.aH(20,A.a7(d6,a6,a6)),new A.aH(20,A.a7("food",a6,a6)),new A.aH(15,A.a7(e0,a6,a6))],t.f8)),a6,B.aR,2)
A.ip(A.a7("food",a6,a6),1,a6,10)
A.ip(A.a7("Rock",a6,a6),0.1,B.bf,5)
A.ip(A.a7(d1,a6,a6),a6,a6,20)
A.ip(A.a7("light",a6,a6),0.1,a6,3)
A.ip(A.a7(a7,a6,a6),5,B.iE,2)
A.ue(B.be,6)
A.ue(B.iz,1)
A.ue(B.iA,3)
A.AA("bat bug humanoid natural",2,1)
A.AB("animal bat bug natural",1,0.2)
A.B0(g7,100,1)
A.B8(g7,100,1)
A.e5("bug",40,1)
A.e5("jelly",50,5)
A.e5("bat",40,10)
A.e5("rodent",50,1)
A.e5("snake",60,8)
A.e5("plant",40,15)
A.e5("eye",100,20)
A.e5("dragon",100,60)
A.tb(e7,16,2)
A.tb(d4,23,5)
A.tb(f0,30,10)
A.tb("orc",40,28)
d=$.tp()
d.c3(g8)
d.c3(g9)
d.c3("cave/glowing-moss")
d.c3(b4)
d=$.tt()
i=$.aX()
l=t.oC
d=A.A(["*",A.S(d,i,a6,a6)],h,l)
$.cq.b="glowing-moss"
$.cr=null
$.c7=d
A.u(a6,B.q,"    #\n    *")
A.u(a6,B.q,"    ##\n    #*")
A.u(a6,a6,"    ?.?\n    .*.\n    ?.?")
d=$.mH()
p=A.A(["!",A.S(d,i,a6,a6)],h,l)
$.cq.b=g9
$.cr=null
$.c7=p
A.u(a6,a6,"    ?.?\n    .!.\n    ?.?")
a1=A.A(["\u250c",A.S($.mY(),i,a6,a6),"\u2500",A.S($.mX(),i,a6,a6),"\u2510",A.S($.mZ(),i,a6,a6),"-",A.S($.iw(),i,a6,a6),"\u2502",A.S($.mW(),i,a6,a6),"\u2558",A.S($.mR(),i,a6,a6),"\u2550",A.S($.mQ(),i,a6,a6),"\u255b",A.S($.mS(),i,a6,a6),"\u255e",A.S($.mU(),i,a6,a6),"\u2564",A.S($.mT(),i,a6,a6),"\u2561",A.S($.mV(),i,a6,a6),"i",A.S(d,i,a6,a6)],h,l)
$.cq.b=g8
$.cr=null
$.c7=a1
A.u(a6,B.a8,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.u(a6,B.a8,"    ?...\n    #\u2500\u2510.\n    #i\u2502.\n    #\u2564\u255b.\n    ?...")
A.u(a6,B.a8,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.u(a6,B.a8,"    ?...\n    #\u2500\u2510.\n    #i\u2502.\n    #i\u2502.\n    #\u2564\u255b.\n    ?...")
A.u(a6,B.a8,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #-\u2502.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.u(a6,B.a8,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #i\u2502.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.u(a6,B.a8,"    ?...\n    #\u2500\u2510.\n    #i\u2502.\n    #-\u2502.\n    #i\u2502.\n    #\u2564\u255b.\n    ?...")
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
A.u(a6,B.a8,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502i-\u2502.\n    .\u2502-i\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.u(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502---\u2502.\n    .\u2502---\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.u(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    .\u2502-i-\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.u(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    .\u2502i-i\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.u(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502i-i\u2502.\n    .\u2502-i-\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.u(a6,a6,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502----\u2502.\n    .\u2502----\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.u(a6,B.a8,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502i---\u2502.\n    .\u2502---i\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.u(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-----\u2502.\n    .\u2502-----\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.u(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502--i--\u2502.\n    .\u2502-i-i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.u(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502i---i\u2502.\n    .\u2502--i--\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.u(a6,a6,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502------\u2502.\n    .\u2502------\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
A.u(a6,a6,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-i--i-\u2502.\n    .\u2502-i--i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
d=A.A(["\u03c0",A.S($.mI(),i,a6,a6)],h,l)
$.cq.b=g8
$.cr=2
$.c7=d
A.u(a6,B.au,"    \u03c0.\n    .\u250c")
A.u(a6,B.au,"    \u03c0.\n    \u250c?")
A.u(a6,B.au,"    ..\n    \u03c0\u250c")
A.u(a6,B.a8,"    .\u255e\n    \u03c0.")
A.u(a6,B.q,"    ?\u2550?\n    .\u03c0.")
A.u(a6,a6,"    ?\u2564?\n    .\u03c0.")
A.u(a6,B.q,"    \u03c0\n    #")
A.u(a6,B.q,"    \u03c0\n    .\n    #")
d=A.A(["%",A.S($.mJ(),i,a6,a6)],h,l)
$.cq.b=g8
$.cr=0.7
$.c7=d
A.u(a6,B.q,"    ##?\n    #%.\n    ?.?")
A.u(a6,B.q,"    ?.?\n    .%.\n    ?.?")
A.u(a6,B.q,"    ###?\n    #%%.\n    ?..?")
A.u(a6,B.q,"    ###?\n    #%%.\n    #%.?\n    ?.??")
A.u(a6,B.q,"    ?##?\n    .%%.\n    ?..?")
A.u(a6,B.q,"    ?###?\n    .%%%.\n    ?...?")
i=A.A(["&",A.S($.mK(),i,a6,a6)],h,l)
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
i=$.uN()
l=A.A(["*",A.S(i,a6,$.iy(),a6),"o",A.S(a6,a6,i,a6)],h,l)
$.cq.b=b4
$.cr=null
$.c7=l
A.u(0.6,B.q,"    .*")
A.u(0.6,B.q,"    ..\n    .*")
A.u(a6,B.q,"    o*")
A.u(a6,B.q,"    \u2248*\n    o\u2248")
a2=new A.jz()
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
a3=A.rR(A.O(A.O(l.window).localStorage).getItem("font"))
h=$.fj.length
if(1>=h)return A.c($.fj,1)
$.bW.b=$.fj[1]
for(a4=0;a4<h;++a4){a5=$.fj[a4]
if(a5.a===a3){$.bW.b=a5
break}}s=A.bX(A.O(l.document).querySelector("#game"))
s.toString
s.append($.bW.u().b)
A.O(l.window).addEventListener("resize",A.we(A.B3()))
s=$.bW.u().c
r=A.a([],t.jp)
if($.x.b!==$.x)A.a_(A.vv(""))
$.x.b=new A.f7(new A.jY(A.D(t.fC,t.fb),t.hl),r,s,t.iR)
s=$.x.u().a
s.a.i(0,new A.z(13,!1,!1),s.$ti.c.a(B.a6))
s=$.x.u().a
s.a.i(0,new A.z(27,!1,!1),s.$ti.c.a(B.G))
s=$.x.u().a
s.a.i(0,new A.z(192,!1,!1),s.$ti.c.a(B.G))
s=$.x.u().a
s.a.i(0,new A.z(70,!0,!1),s.$ti.c.a(B.bS))
s=$.x.u().a
s.a.i(0,new A.z(81,!1,!1),s.$ti.c.a(B.bW))
s=$.x.u().a
s.a.i(0,new A.z(67,!1,!1),s.$ti.c.a(B.bU))
s=$.x.u().a
s.a.i(0,new A.z(68,!1,!1),s.$ti.c.a(B.bL))
s=$.x.u().a
s.a.i(0,new A.z(85,!1,!1),s.$ti.c.a(B.c_))
s=$.x.u().a
s.a.i(0,new A.z(71,!1,!1),s.$ti.c.a(B.bV))
s=$.x.u().a
s.a.i(0,new A.z(88,!1,!1),s.$ti.c.a(B.bY))
s=$.x.u().a
s.a.i(0,new A.z(69,!1,!1),s.$ti.c.a(B.bN))
s=$.x.u().a
s.a.i(0,new A.z(84,!1,!1),s.$ti.c.a(B.bZ))
s=$.x.u().a
s.a.i(0,new A.z(65,!1,!1),s.$ti.c.a(B.c0))
s=$.x.u().a
s.a.i(0,new A.z(83,!1,!1),s.$ti.c.a(B.hk))
s=$.x.u().a
s.a.i(0,new A.z(65,!0,!1),s.$ti.c.a(B.bT))
s=$.x.u().a
s.a.i(0,new A.z(83,!0,!1),s.$ti.c.a(B.bM))
s=$.x.u().a
s.a.i(0,new A.z(69,!0,!1),s.$ti.c.a(B.bX))
s=$.x.u().a
s.a.i(0,new A.z(72,!1,!1),s.$ti.c.a(B.b6))
s=$.x.u().a
s.a.i(0,new A.z(73,!1,!1),s.$ti.c.a(B.aA))
s=$.x.u().a
s.a.i(0,new A.z(79,!1,!1),s.$ti.c.a(B.a0))
s=$.x.u().a
s.a.i(0,new A.z(80,!1,!1),s.$ti.c.a(B.az))
s=$.x.u().a
s.a.i(0,new A.z(75,!1,!1),s.$ti.c.a(B.ag))
s=$.x.u().a
s.a.i(0,new A.z(186,!1,!1),s.$ti.c.a(B.af))
s=$.x.u().a
s.a.i(0,new A.z(188,!1,!1),s.$ti.c.a(B.aC))
s=$.x.u().a
s.a.i(0,new A.z(190,!1,!1),s.$ti.c.a(B.a1))
s=$.x.u().a
s.a.i(0,new A.z(191,!1,!1),s.$ti.c.a(B.aB))
s=$.x.u().a
s.a.i(0,new A.z(73,!0,!1),s.$ti.c.a(B.b8))
s=$.x.u().a
s.a.i(0,new A.z(79,!0,!1),s.$ti.c.a(B.ao))
s=$.x.u().a
s.a.i(0,new A.z(80,!0,!1),s.$ti.c.a(B.b7))
s=$.x.u().a
s.a.i(0,new A.z(75,!0,!1),s.$ti.c.a(B.aK))
s=$.x.u().a
s.a.i(0,new A.z(186,!0,!1),s.$ti.c.a(B.aJ))
s=$.x.u().a
s.a.i(0,new A.z(188,!0,!1),s.$ti.c.a(B.ba))
s=$.x.u().a
s.a.i(0,new A.z(190,!0,!1),s.$ti.c.a(B.ap))
s=$.x.u().a
s.a.i(0,new A.z(191,!0,!1),s.$ti.c.a(B.b9))
s=$.x.u().a
s.a.i(0,new A.z(73,!1,!0),s.$ti.c.a(B.bP))
s=$.x.u().a
s.a.i(0,new A.z(79,!1,!0),s.$ti.c.a(B.b3))
s=$.x.u().a
s.a.i(0,new A.z(80,!1,!0),s.$ti.c.a(B.bO))
s=$.x.u().a
s.a.i(0,new A.z(75,!1,!0),s.$ti.c.a(B.b5))
s=$.x.u().a
s.a.i(0,new A.z(186,!1,!0),s.$ti.c.a(B.b2))
s=$.x.u().a
s.a.i(0,new A.z(188,!1,!0),s.$ti.c.a(B.bR))
s=$.x.u().a
s.a.i(0,new A.z(190,!1,!0),s.$ti.c.a(B.b4))
s=$.x.u().a
s.a.i(0,new A.z(191,!1,!0),s.$ti.c.a(B.bQ))
s=$.x.u().a
s.a.i(0,new A.z(76,!1,!1),s.$ti.c.a(B.a6))
s=$.x.u().a
s.a.i(0,new A.z(76,!0,!1),s.$ti.c.a(B.aI))
s=$.x.u().a
s.a.i(0,new A.z(76,!1,!0),s.$ti.c.a(B.b1))
s=$.x.u().a
s.a.i(0,new A.z(38,!1,!1),s.$ti.c.a(B.a0))
s=$.x.u().a
s.a.i(0,new A.z(37,!1,!1),s.$ti.c.a(B.ag))
s=$.x.u().a
s.a.i(0,new A.z(39,!1,!1),s.$ti.c.a(B.af))
s=$.x.u().a
s.a.i(0,new A.z(40,!1,!1),s.$ti.c.a(B.a1))
s=$.x.u().a
s.a.i(0,new A.z(38,!0,!1),s.$ti.c.a(B.ao))
s=$.x.u().a
s.a.i(0,new A.z(37,!0,!1),s.$ti.c.a(B.aK))
s=$.x.u().a
s.a.i(0,new A.z(39,!0,!1),s.$ti.c.a(B.aJ))
s=$.x.u().a
s.a.i(0,new A.z(40,!0,!1),s.$ti.c.a(B.ap))
s=$.x.u().a
s.a.i(0,new A.z(38,!1,!0),s.$ti.c.a(B.b3))
s=$.x.u().a
s.a.i(0,new A.z(37,!1,!0),s.$ti.c.a(B.b5))
s=$.x.u().a
s.a.i(0,new A.z(39,!1,!0),s.$ti.c.a(B.b2))
s=$.x.u().a
s.a.i(0,new A.z(40,!1,!0),s.$ti.c.a(B.b4))
s=$.x.u().a
s.a.i(0,new A.z(103,!1,!1),s.$ti.c.a(B.aA))
s=$.x.u().a
s.a.i(0,new A.z(104,!1,!1),s.$ti.c.a(B.a0))
s=$.x.u().a
s.a.i(0,new A.z(105,!1,!1),s.$ti.c.a(B.az))
s=$.x.u().a
s.a.i(0,new A.z(100,!1,!1),s.$ti.c.a(B.ag))
s=$.x.u().a
s.a.i(0,new A.z(102,!1,!1),s.$ti.c.a(B.af))
s=$.x.u().a
s.a.i(0,new A.z(97,!1,!1),s.$ti.c.a(B.aC))
s=$.x.u().a
s.a.i(0,new A.z(98,!1,!1),s.$ti.c.a(B.a1))
s=$.x.u().a
s.a.i(0,new A.z(99,!1,!1),s.$ti.c.a(B.aB))
s=$.x.u().a
s.a.i(0,new A.z(103,!0,!1),s.$ti.c.a(B.b8))
s=$.x.u().a
s.a.i(0,new A.z(104,!0,!1),s.$ti.c.a(B.ao))
s=$.x.u().a
s.a.i(0,new A.z(105,!0,!1),s.$ti.c.a(B.b7))
s=$.x.u().a
s.a.i(0,new A.z(100,!0,!1),s.$ti.c.a(B.aK))
s=$.x.u().a
s.a.i(0,new A.z(102,!0,!1),s.$ti.c.a(B.aJ))
s=$.x.u().a
s.a.i(0,new A.z(97,!0,!1),s.$ti.c.a(B.ba))
s=$.x.u().a
s.a.i(0,new A.z(98,!0,!1),s.$ti.c.a(B.ap))
s=$.x.u().a
s.a.i(0,new A.z(99,!0,!1),s.$ti.c.a(B.b9))
s=$.x.u().a
s.a.i(0,new A.z(101,!1,!1),s.$ti.c.a(B.a6))
s=$.x.u().a
s.a.i(0,new A.z(1001,!1,!1),s.$ti.c.a(B.a6))
s=$.x.u().a
s.a.i(0,new A.z(101,!0,!1),s.$ti.c.a(B.aI))
s=$.x.u().a
s.a.i(0,new A.z(1001,!0,!1),s.$ti.c.a(B.aI))
s=$.x.u().a
s.a.i(0,new A.z(101,!1,!0),s.$ti.c.a(B.b1))
s=$.x.u().a
s.a.i(0,new A.z(87,!0,!0),s.$ti.c.a(B.c1))
s=$.x.u()
r=new A.qB(a2,A.a([],t.di))
r.mK()
s.a4(new A.k5(a2,r))
$.x.u().soI(!0)
$.x.u().spg(!0)
l=A.bX(A.O(l.document).body)
l.toString
r=t.gX
A.dU(l,"keydown",r.h("~(1)?").a(new A.te()),!1,r.c)},
cW(a,b,c){var s,r,q,p,o,n
if(c==null)c=b
s=A.vh()
r=t.gX
q=r.h("~(1)?")
r=r.c
A.dU(s,"dblclick",q.a(new A.rO()),!1,r)
p=A.wk(s,b,c)
B.a.j($.fj,new A.l5(a,s,p,b,c))
A.dU(s,"click",q.a(new A.rP(p)),!1,r)
o=v.G
n=A.O(A.O(o.document).createElement("button"))
n.innerHTML=a
A.dU(n,"click",q.a(new A.rQ(a)),!1,r)
A.O(A.bX(A.O(o.document).querySelector(".button-bar")).appendChild(n))},
wk(a,b,c){var s,r,q,p,o,n,m,l=v.G,k=B.c.cb(A.w(A.O(l.window).innerWidth)-20,b),j=B.c.cb(A.w(A.O(l.window).innerHeight)-30,c)
k=Math.max(k,80)
j=Math.max(j,40)
s=B.e.L(A.by(A.O(l.window).devicePixelRatio))
r=b*k
q=c*j
a.width=r*s
a.height=q*s
A.O(a.style).width=""+r+"px"
A.O(a.style).height=""+q+"px"
p="font_"+b
if(b!==c)p+="_"+c
s=B.e.L(A.by(A.O(l.window).devicePixelRatio))
o=k*j
n=A.an(o,B.b0,!1,t.v)
o=A.an(o,B.b0,!1,t.n3)
m=A.O(A.O(l.document).createElement("img"))
m.src=p+".png"
return A.yU(new A.nE(new A.a8(n,new A.Y(new A.d(0,0),new A.d(k,j)),t.bG),new A.a8(o,new A.Y(new A.d(0,0),new A.d(k,j)),t.cY)),b,c,a,m,s)},
wn(){var s=A.wk($.bW.u().b,$.bW.u().d,$.bW.u().e)
$.bW.u().c=s
$.x.u().l3(s)},
zM(){var s,r,q,p=null,o=A.bX(A.O(v.G.document).querySelector("#game"))
o.toString
s=["requestFullscreen","mozRequestFullScreen","webkitRequestFullscreen","msRequestFullscreen"]
for(r=0;r<4;++r){q=s[r]
if(q in o){A.yp(o,q,p,p,p,p)
return}}},
ua(){A.w(A.O(v.G.window).requestAnimationFrame(A.we(new A.rU())))},
l5:function l5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
te:function te(){},
rO:function rO(){},
rP:function rP(a){this.a=a},
rQ:function rQ(a){this.a=a},
rU:function rU(){},
rV:function rV(){},
Aw(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
switch(b.a){case B.bq:s=b.d
r=b.b
if(s===$.aw()){s=$.uR().p(0,b.c)
s.toString
B.a.j(a,new A.cA(r,A.am(s,B.E,f),2))}else{s=$.uS().p(0,s)
s.toString
B.a.j(a,new A.fL(r,s))}break
case B.br:s=$.uS().p(0,b.d)
s.toString
B.a.j(a,new A.fL(b.b,s))
break
case B.bG:B.a.j(a,new A.jQ(b.b,b.f.a.b))
break
case B.bw:B.a.j(a,new A.j4(b.e.y,A.am("*",A.e1(b.d),f),B.e.aR(Math.sqrt(b.r/5))))
break
case B.bt:for(s=b.e,q=0;q<10;++q){r=s.y.gm()
p=s.y.gn()
o=$.m()
o=o.a
n=o.a_(628)/100
m=(o.a_(10)+30)/100
l=Math.cos(n)
k=Math.sin(n)
B.a.j(a,new A.ks(r,p,l*m,k*m,o.a_(8)+7,B.m))}break
case B.bv:s=b.e
B.a.j(a,new A.jF(s.y.gm(),s.y.gn()))
break
case B.bs:B.a.j(a,new A.fH(b.b))
break
case B.bB:B.a.j(a,new A.fH(b.e.y))
break
case B.bz:s=$.m().bp(10,20)
r=new A.k6(s,b.b)
r.c=s
B.a.j(a,r)
break
case B.bF:s=b.e
r=b.b
j=B.c.P(s.y.S(0,r).gb3(),4,12)
for(q=0;q<j;++q){p=s.y
i=r.gm()
h=r.gn()
o=$.m()
o=o.a
n=o.a_(628)/100
m=(o.a_(70)+10)/100
B.a.j(a,new A.l4(i,h,Math.cos(n)*m,Math.sin(n)*m,p))}break
case B.b_:B.a.j(a,new A.cA(b.e.y,A.am("*",B.t,f),4))
break
case B.bC:B.a.j(a,new A.cA(b.e.y,A.am("*",B.t,f),4))
break
case B.bx:B.a.j(a,new A.jI(b.b))
break
case B.bp:s=b.e
s.toString
B.a.j(a,new A.fA(s,A.am("!",B.t,f),1))
break
case B.aZ:s=b.e
s.toString
B.a.j(a,new A.fA(s,A.am("!",B.h,f),3))
break
case B.bH:break
case B.by:B.a.j(a,new A.cA(b.b,A.am("*",B.A,f),4))
break
case B.bD:case B.bE:s=$.uR().p(0,b.c)
s.toString
g=b.f
B.a.j(a,new A.cA(b.b,A.am(s,g!=null?g.a.b.b:B.t,f),4))
break
case B.bu:s=b.b
r=b.f
r.toString
B.a.j(a,new A.la(s.gm(),s.gn(),r.a.b))
break
case B.bA:B.a.j(a,new A.cA(b.b,A.am("*",B.E,f),4))
break}},
wO(a){return v.mangledGlobalNames[a]},
th(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
yp(a,b,c,d,e,f){var s=a[b]()
return s},
we(a){var s
if(typeof a=="function")throw A.n(A.aC("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.zB,a)
s[$.to()]=a
return s},
wf(a){var s
if(typeof a=="function")throw A.n(A.aC("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.zC,a)
s[$.to()]=a
return s},
zB(a){return t.gY.a(a).$0()},
zC(a,b,c){t.gY.a(a)
if(A.w(c)>=1)return a.$1(b)
return a.$0()},
uZ(a){var s,r,q
for(s=[$.dp(),$.dq()],r=0;r<2;++r){q=s[r].c8(a)
if(q!=null)return q}throw A.n(A.aC("Unknown affix '"+a+"'.",null))},
xR(){var s,r,q,p,o,n,m,l,k,j,i,h="Master's _",g=[B.ik,B.ii,B.ih,B.i3,B.io,B.ic]
for(s=t.Q,r=t.h,q=t.X,p=t.M,o=0;o<6;++o){n=g[o]
m=n.b
A.aV()
$.bb=n.a
A.aV()
l=B.j.dO("Fine _"," _")?$.dp():$.dq()
n=A.D(p,s)
k=$.ij=new A.cd("Fine _",l,1,A.D(r,s),A.D(q,s),n)
k.c=1
k.d=40
k.p_(1)
k.J(1000,1.8)
s.a(A.Z())
k=$.uB()
j=k.p(0,m)
if(j==null)A.a_(A.aC("Unknown skill '"+m+"'.",null))
n.i(0,j,A.Z())
A.aV()
l=B.j.dO("Deft _"," _")?$.dp():$.dq()
n=A.D(p,s)
i=$.ij=new A.cd("Deft _",l,1,A.D(r,s),A.D(q,s),n)
i.c=20
i.d=60
i.p0(2,3)
i.J(2000,2.4)
j=k.p(0,m)
if(j==null)A.a_(A.aC("Unknown skill '"+m+"'.",null))
n.i(0,j,A.Z())
A.aV()
l=B.j.dO(h," _")?$.dp():$.dq()
n=A.D(p,s)
i=$.ij=new A.cd(h,l,1,A.D(r,s),A.D(q,s),n)
i.c=40
i.d=100
i.X(3,6,4)
i.J(4000,3.4)
j=k.p(0,m)
if(j==null)A.a_(A.aC("Unknown skill '"+m+"'.",null))
n.i(0,j,A.Z())}},
wB(){var s=t.N,r=t.S
A.bc("Uncut Amethyst",A.A(["Amethyst Shard",4],s,r))
A.bc("Faceted Amethyst",A.A(["Uncut Amethyst",4],s,r))
A.bc("Uncut Sapphire",A.A(["Sapphire Shard",4],s,r))
A.bc("Faceted Sapphire",A.A(["Uncut Sapphire",4],s,r))
A.bc("Uncut Emerald",A.A(["Emerald Shard",4],s,r))
A.bc("Faceted Emerald",A.A(["Uncut Emerald",4],s,r))
A.bc("Uncut Ruby",A.A(["Ruby Shard",4],s,r))
A.bc("Faceted Ruby",A.A(["Uncut Ruby",4],s,r))
A.bc("Uncut Diamond",A.A(["Diamond Shard",4],s,r))
A.bc("Faceted Diamond",A.A(["Uncut Diamond",4],s,r))},
wF(){var s="Healing Poultice",r="Potion of Amelioration",q=t.N,p=t.S
A.bc("Mending Salve",A.A(["Soothing Balm",3],q,p))
A.bc(s,A.A(["Mending Salve",3],q,p))
A.bc(r,A.A([s,3],q,p))
A.bc("Potion of Rejuvenation",A.A([r,4],q,p))},
wN(){var s="Scroll of Sidestepping",r="Scroll of Phasing",q="Scroll of Teleportation",p=t.N,o=t.S
A.bc(s,A.A(["Insect Wing",1,"Feather",1],p,o))
A.bc(r,A.A([s,2],p,o))
A.bc(q,A.A([r,2],p,o))
A.bc("Scroll of Disappearing",A.A([q,2],p,o))},
bc(a,b){var s,r,q,p,o,n=A.D(t.q,t.S)
for(s=new A.bj(b,A.y(b).h("bj<1,2>")).gN(0);s.q();){r=s.d
q=r.a
p=r.b
o=$.bh().b.p(0,q)
if(o==null)A.a_(A.aC('Unknown resource "'+q+'".',null))
n.i(0,o.a,p)}B.a.j($.ho,new A.kJ(n,A.a7(a,1,null),a))},
AG(){var s,r,q,p,o,n,m,l,k,j,i,h="mythical/beast/dragon",g=null,f="{2} [are|is] deflected by its scales.",e="treasure",d="equipment",c=A.ai("d",h,g,g,g,g,g)
c.at=12
c.ax=8
B.a.j(c.w,new A.ay(10,f))
c.d=B.ai
c=$.aw()
s=[new A.a2(["forest",c,B.p,B.z]),new A.a2(["brown",$.ds(),B.E,B.k]),new A.a2(["blue",$.d_(),B.F,B.D]),new A.a2(["white",$.c9(),B.o,B.t]),new A.a2(["purple",$.bz(),B.N,B.V]),new A.a2(["green",$.dr(),B.y,B.ac]),new A.a2(["silver",$.dt(),B.J,B.F]),new A.a2(["red",$.b4(),B.a4,B.m]),new A.a2(["gold",$.cZ(),B.A,B.h]),new A.a2(["black",$.cY(),B.f,B.l]),new A.a2(["ethereal",$.du(),B.a_,B.B])]
for(r=0,q=0;q<11;++q){p=s[q].a
o=p[0]
n=p[1]
m=p[2]
p=B.e.O(A.v(r,0,10,38,53))
l=B.e.O(A.v(r,0,10,150,350))
A.fo()
k=$.ah.b
if(k===$.ah)A.a_(A.dF(""))
k=k.ay
if(0>=k.length)return A.c(k,0)
j=A.nh("juvenile "+o+" dragon",p,g,new A.W(k.charCodeAt(0),m,B.x),l)
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
l=$.fv()
k=l.p(0,n)[0]
l=l.p(0,n)[1]
k=A.aO(k,B.w,B.U).a6(1)
B.a.j(j.dx,new A.d7(new A.b5(new A.aG(k),l,p,5,n),11))}++r}p=A.ai("d",h,g,g,g,g,g)
p.at=16
p.ax=10
B.a.j(p.w,new A.ay(20,f))
p.d=B.ai
for(r=0,q=0;q<11;++q){p=s[q].a
o=p[0]
n=p[1]
m=p[3]
p=B.e.O(A.v(r,0,10,48,62))
l=B.e.O(A.v(r,0,10,350,850))
A.fo()
k=$.ah.b
if(k===$.ah)A.a_(A.dF(""))
k=k.ay
if(0>=k.length)return A.c(k,0)
j=A.nh(o+" dragon",p,g,new A.W(k.charCodeAt(0),m,B.x),l)
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
l=$.fv()
k=l.p(0,n)[0]
l=l.p(0,n)[1]
k=A.aO(k,B.w,B.U).a6(1)
B.a.j(j.dx,new A.d7(new A.b5(new A.aG(k),l,p,10,n),8))}++r}},
AP(){var s,r,q,p,o,n,m,l,k,j="mythical/beast/dragon",i=null,h="{2} [are|is] deflected by its scales.",g="treasure",f="equipment",e=$.aw(),d=[new A.a2(["forest",e,B.p,B.z]),new A.a2(["brown",$.ds(),B.E,B.k]),new A.a2(["blue",$.d_(),B.F,B.D]),new A.a2(["white",$.c9(),B.o,B.t]),new A.a2(["purple",$.bz(),B.N,B.V]),new A.a2(["green",$.dr(),B.y,B.ac]),new A.a2(["silver",$.dt(),B.J,B.F]),new A.a2(["red",$.b4(),B.a4,B.m]),new A.a2(["gold",$.cZ(),B.A,B.h]),new A.a2(["black",$.cY(),B.f,B.l]),new A.a2(["ethereal",$.du(),B.a_,B.B])],c=A.ai("D",j,i,i,i,i,i)
c.at=12
c.ax=8
B.a.j(c.w,new A.ay(10,h))
c.d=B.ai
for(s=0,r=0;r<11;++r){c=d[r].a
q=c[0]
p=c[1]
o=c[2]
c=B.e.O(A.v(s,0,10,65,85))
n=B.e.O(A.v(s,0,10,800,1500))
A.fo()
m=$.ah.b
if(m===$.ah)A.a_(A.dF(""))
m=m.ay
if(0>=m.length)return A.c(m,0)
l=A.nh("elder "+q+" dragon",c,i,new A.W(m.charCodeAt(0),o,B.x),n)
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
n=$.fv()
m=n.p(0,p)[0]
n=n.p(0,p)[1]
m=A.aO(m,B.w,B.U).a6(1)
B.a.j(l.dx,new A.d7(new A.b5(new A.aG(m),n,c,5,p),11))}++s}c=A.ai("D",j,i,i,i,i,i)
c.at=16
c.ax=10
B.a.j(c.w,new A.ay(20,h))
c.d=B.ai
for(s=0,r=0;r<11;++r){c=d[r].a
q=c[0]
p=c[1]
o=c[3]
c=B.e.O(A.v(s,0,10,80,99))
n=B.e.O(A.v(s,0,10,1400,2000))
A.fo()
m=$.ah.b
if(m===$.ah)A.a_(A.dF(""))
m=m.ay
if(0>=m.length)return A.c(m,0)
l=A.nh("ancient "+q+" dragon",c,i,new A.W(m.charCodeAt(0),o,B.x),n)
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
n=$.fv()
m=n.p(0,p)[0]
n=n.p(0,p)[1]
m=A.aO(m,B.w,B.U).a6(1)
B.a.j(l.dx,new A.d7(new A.b5(new A.aG(m),n,c,10,p),8))}++s}},
ng(a){var s,r=null
if(a>=64){a=B.c.A(a,8)*8
s=A.cw(B.c.A(a,8),2,r)
s=A.cw(B.c.A(a,4),3,s)
s=A.cw(a,6,A.cw(B.c.A(a,2),5,s))}else if(a>=32){a=B.c.A(a,4)*4
s=A.cw(B.c.A(a,4),2,r)
s=A.cw(a,5,A.cw(B.c.A(a,2),3,s))}else if(a>=16){a=B.c.A(a,2)*2
s=A.cw(a,3,A.cw(B.c.A(a,2),2,r))}else s=A.cw(a,3,r)
return A.xU(s)},
cw(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=t.y,b=new A.Y(new A.d(0,0),new A.d(a4,a4)),a=a4*a4,a0=A.an(a,!1,!1,c),a1=t.b,a2=new A.a8(a0,b,a1),a3=new A.a8(A.an(a,!1,!1,c),new A.Y(new A.d(0,0),new A.d(a4,a4)),a1)
if(a6!=null)for(c=A.aa(b.bL(-1)),b=a6.a,a=a6.b.b.a,a1=b.length;c.q();){s=c.b
r=c.c
q=B.c.A(s,2)
p=B.c.A(r,2)
a6.l(q,p)
q=p*a+q
if(!(q>=0&&q<a1))return A.c(b,q)
o=b[q]?0.3:0.7
q=$.m().aO(1)
a2.l(s,r)
B.a.i(a0,r*a4+s,q>o)}else{n=b.ghe()
m=Math.sqrt(new A.d(b.gbM(),b.gbS()).S(0,b.ghe()).gaE())
for(c=A.aa(b.bL(-1));c.q();){b=c.b
a=c.c
a1=new A.d(b,a).S(0,n)
s=a1.a
a1=a1.b
a1=Math.sqrt(s*s+a1*a1)
s=$.m().aO(1)
a2.l(b,a)
B.a.i(a0,a*a4+b,s>a1/m)}}for(l=0;l<a5;++l,k=a3,a3=a2,a2=k)for(c=a2.b,b=c.bL(-1),a=b.a,a=new A.cK(b,a.a-1,a.b),b=a3.$ti.c,a0=a3.a,a1=a3.b.b.a,s=a2.a,c=c.b.a,r=s.length;a.q();){q=a.b
p=a.c
a2.l(q,p)
j=p*c+q
if(!(j>=0&&j<r))return A.c(s,j)
i=s[j]?1:0
for(j=new A.d(q,p).gbP(),h=j.length,g=0;g<h;++g){f=j[g]
e=f.a
d=f.b
a2.l(e,d)
e=d*c+e
if(!(e>=0&&e<r))return A.c(s,e)
if(s[e])++i}j=b.a(i>=5)
a3.l(q,p)
B.a.i(a0,p*a1+q,j)}return a3},
xU(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.b,g=h.b,f=g.a,e=g.b
for(h=A.aa(h),g=a.a,s=g.length,r=f,q=-1,p=-1;h.q();){o=h.b
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
for(n=A.aa(n);n.q();){m=n.b
k=n.c
j=m+r
i=k+e
a.l(j,i)
j=i*f+j
if(!(j>=0&&j<s))return A.c(g,j)
j=A.dY(g[j])
l.l(m,k)
B.a.i(o,k*h+m,j)}return l},
e1(a){var s=A.A([$.aw(),B.o,$.e9(),B.J,$.ds(),B.k,$.b4(),B.m,$.d_(),B.B,$.dr(),B.y,$.c9(),B.F,$.dt(),B.N,$.bz(),B.p,$.cY(),B.l,$.cZ(),B.A,$.du(),B.V],t.h,t.aZ).p(0,a)
s.toString
return s},
ul(a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null
A.bi(a9,a8,b7+2,b0.gk6().a,b2,c3,b8,c2)
s=b3?"ABCDEFGHIJKLMNOPQRSTUVWXYZ":"abcdefghijklmnopqrstuvwxyz"
r=b8+c3
q=r-1
if(c1)for(p=b0.gN(b0),o=q;p.q();){n=b4.$1(p.gH())
if(n!=null)o=Math.min(o,r-A.P(n,!1,a8).length-3)}for(p=J.ao(b0.gef()),m=b8+1,l=s.length,k=b8-34,j=r+34,i=c3-34,h=c2+b7,g=h+3,f=0,e=0;p.q();){d=p.gH()
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
if(a[a0]==="hand"){d=J.tA(b0.gef(),a0)
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
n=A.P(a,!1,a8)
a2=q-n.length-1
a9.k(a2,b,"$",a1?B.k:B.i)
a=a1?B.h:B.i
a9.k(a2+1,b,n,a)
a3=a2}else a3=q
a4=d.gao().a
a=c+2
a5=a3-a
if(a4.length>a5)a4=B.j.aI(a4,0,a5)
A:{a0=d===b5
if(a0){a6=B.h
break A}if(b2&&b1.$1(d)){a6=B.C
break A}if(b2){a6=B.i
break A}a6=B.d
break A}a9.k(a,b,a4,a6)
if(a0){a7=new A.jR(d,A.vn(d,34))
a7.li(b9,d,!1)
if(b6)if(j>a9.gaQ()){a9.k(q,b,"\u25bc",B.h)
a7.hk(b8+B.c.A(i,2),g,a9)}else{a9.k(q,b,"\u25ba",B.h)
a7.hk(r,b,a9)}else{a9.k(b8,b,"\u25c4",B.h)
a7.hk(k,b,a9)}}++f}},
zG(a){return!1},
zH(a){return a.gbf()},
vh(){return A.O(A.O(v.G.document).createElement("canvas"))}},B={}
var w=[A,J,B]
var $={}
A.tJ.prototype={}
J.jO.prototype={
a0(a,b){return a===b},
gZ(a){return A.hk(a)},
t(a){return"Instance of '"+A.kA(a)+"'"},
gaF(a){return A.e0(A.u7(this))}}
J.fX.prototype={
t(a){return String(a)},
gZ(a){return a?519018:218159},
gaF(a){return A.e0(t.y)},
$iaf:1,
$iB:1}
J.fZ.prototype={
a0(a,b){return null==b},
t(a){return"null"},
gZ(a){return 0},
$iaf:1}
J.h1.prototype={$iaE:1}
J.dd.prototype={
gZ(a){return 0},
t(a){return String(a)}}
J.kw.prototype={}
J.dk.prototype={}
J.db.prototype={
t(a){var s=a[$.wS()]
if(s==null)s=a[$.to()]
if(s==null)return this.lc(a)
return"JavaScript function for "+J.ea(s)},
$idC:1}
J.h0.prototype={
gZ(a){return 0},
t(a){return String(a)}}
J.h2.prototype={
gZ(a){return 0},
t(a){return String(a)}}
J.r.prototype={
j(a,b){A.M(a).c.a(b)
a.$flags&1&&A.bo(a,29)
a.push(b)},
d7(a,b){a.$flags&1&&A.bo(a,"removeAt",1)
if(b<0||b>=a.length)throw A.n(A.hm(b,null))
return a.splice(b,1)[0]},
kC(a){a.$flags&1&&A.bo(a,"removeLast",1)
if(a.length===0)throw A.n(A.mE(a,-1))
return a.pop()},
ac(a,b){var s
a.$flags&1&&A.bo(a,"remove",1)
for(s=0;s<a.length;++s)if(J.ax(a[s],b)){a.splice(s,1)
return!0}return!1},
hJ(a,b){A.M(a).h("B(1)").a(b)
a.$flags&1&&A.bo(a,16)
this.n8(a,b,!0)},
n8(a,b,c){var s,r,q,p,o
A.M(a).h("B(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!b.$1(p))s.push(p)
if(a.length!==r)throw A.n(A.b_(a))}o=s.length
if(o===r)return
this.sI(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
kQ(a,b){var s=A.M(a)
return new A.aj(a,s.h("B(1)").a(b),s.h("aj<1>"))},
U(a,b){var s
A.M(a).h("k<1>").a(b)
a.$flags&1&&A.bo(a,"addAll",2)
if(Array.isArray(b)){this.lp(a,b)
return}for(s=J.ao(b);s.q();)a.push(s.gH())},
lp(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.n(A.b_(a))
for(r=0;r<s;++r)a.push(b[r])},
aS(a){a.$flags&1&&A.bo(a,"clear","clear")
a.length=0},
ae(a,b){var s,r
A.M(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.n(A.b_(a))}},
aP(a,b){var s,r=A.an(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.i(r,s,A.J(a[s]))
return r.join(b)},
aD(a,b,c,d){var s,r,q
d.a(b)
A.M(a).ak(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.n(A.b_(a))}return r},
hr(a,b,c){var s,r,q
A.M(a).h("B(1)").a(b)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.n(A.b_(a))}throw A.n(A.cE())},
eV(a,b){return this.hr(a,b,null)},
aU(a,b){if(!(b>=0&&b<a.length))return A.c(a,b)
return a[b]},
fp(a,b,c){var s=a.length
if(b>s)throw A.n(A.cJ(b,0,s,"start",null))
if(c==null)c=s
else if(c<b||c>s)throw A.n(A.cJ(c,b,s,"end",null))
if(b===c)return A.a([],A.M(a))
return A.a(a.slice(b,c),A.M(a))},
la(a,b){return this.fp(a,b,null)},
gaC(a){if(a.length>0)return a[0]
throw A.n(A.cE())},
gd1(a){var s=a.length
if(s>0)return a[s-1]
throw A.n(A.cE())},
gl5(a){var s=a.length
if(s===1){if(0>=s)return A.c(a,0)
return a[0]}if(s===0)throw A.n(A.cE())
throw A.n(A.yl())},
i1(a,b,c,d,e){var s,r,q,p
A.M(a).h("k<1>").a(d)
a.$flags&2&&A.bo(a,5)
A.tS(b,c,a.length)
s=c-b
if(s===0)return
A.hn(e,"skipCount")
r=d
q=J.iq(r)
if(e+s>q.gI(r))throw A.n(A.yk())
if(e<b)for(p=s-1;p>=0;--p)a[b+p]=q.p(r,e+p)
else for(p=0;p<s;++p)a[b+p]=q.p(r,e+p)},
oC(a,b,c,d){var s
A.M(a).h("1?").a(d)
a.$flags&2&&A.bo(a,"fillRange")
A.tS(b,c,a.length)
for(s=b;s<c;++s)a[s]=d},
dB(a,b){var s,r
A.M(a).h("B(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.n(A.b_(a))}return!1},
oz(a,b){var s,r
A.M(a).h("B(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.n(A.b_(a))}return!0},
df(a,b){var s,r,q,p,o,n=A.M(a)
n.h("e(1,1)?").a(b)
a.$flags&2&&A.bo(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.zV()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.bg()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.mD(b,2))
if(p>0)this.ne(a,p)},
fk(a){return this.df(a,null)},
ne(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bG(a,b){var s,r,q,p
a.$flags&2&&A.bo(a,"shuffle")
s=a.length
while(s>1){r=b.a_(s);--s
q=a.length
if(!(s<q))return A.c(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.c(a,r)
a[s]=a[r]
a[r]=p}},
c4(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.c(a,s)
if(J.ax(a[s],b))return s}return-1},
G(a,b){var s
for(s=0;s<a.length;++s)if(J.ax(a[s],b))return!0
return!1},
gk5(a){return a.length!==0},
t(a){return A.oV(a,"[","]")},
cG(a,b){var s=A.a(a.slice(0),A.M(a))
return s},
e4(a){return this.cG(a,!0)},
gN(a){return new J.aZ(a,a.length,A.M(a).h("aZ<1>"))},
gZ(a){return A.hk(a)},
gI(a){return a.length},
sI(a,b){a.$flags&1&&A.bo(a,"set length","change the length of")
if(b<0)throw A.n(A.cJ(b,0,null,"newLength",null))
if(b>a.length)A.M(a).c.a(null)
a.length=b},
p(a,b){A.w(b)
if(!(b>=0&&b<a.length))throw A.n(A.mE(a,b))
return a[b]},
i(a,b,c){A.M(a).c.a(c)
a.$flags&2&&A.bo(a)
if(!(b>=0&&b<a.length))throw A.n(A.mE(a,b))
a[b]=c},
oK(a,b){var s
A.M(a).h("B(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
$iK:1,
$ik:1,
$iC:1}
J.jT.prototype={
pm(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kA(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.oW.prototype={}
J.aZ.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.p(q)
throw A.n(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ia5:1}
J.dE.prototype={
ai(a,b){var s
A.dZ(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gf0(b)
if(this.gf0(a)===s)return 0
if(this.gf0(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gf0(a){return a===0?1/a<0:a<0},
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
bK(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.n(A.cn(""+a+".floor()"))},
O(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.n(A.cn(""+a+".round()"))},
P(a,b,c){if(B.c.ai(b,c)>0)throw A.n(A.io(b))
if(this.ai(a,b)<0)return b
if(this.ai(a,c)>0)return c
return a},
hR(a,b){var s
if(b>20)throw A.n(A.cJ(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gf0(a))return"-"+s
return s},
t(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gZ(a){var s,r,q,p,o=a|0
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
cb(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.jc(a,b)},
A(a,b){return(a|0)===a?a/b|0:this.jc(a,b)},
jc(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.n(A.cn("Result of truncating division is "+A.J(s)+": "+A.J(a)+" ~/ "+b))},
eD(a,b){var s
if(a>0)s=this.nr(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
nr(a,b){return b>31?0:a>>>b},
gaF(a){return A.e0(t.cZ)},
$ias:1,
$iF:1,
$iak:1}
J.fY.prototype={
gi4(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
gaF(a){return A.e0(t.S)},
$iaf:1,
$ie:1}
J.jU.prototype={
gaF(a){return A.e0(t.i)},
$iaf:1}
J.da.prototype={
ha(a,b){return new A.mq(b,a,0)},
dO(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.cN(a,r-s)},
i9(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
aI(a,b,c){return a.substring(b,A.tS(b,c,a.length))},
cN(a,b){return this.aI(a,b,null)},
kJ(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.c(p,0)
if(p.charCodeAt(0)===133){s=J.yq(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.c(p,r)
q=p.charCodeAt(r)===133?J.yr(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
aH(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.n(B.cH)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
oX(a,b,c){var s=b-a.length
if(s<=0)return a
return this.aH(c,s)+a},
d5(a,b){return this.oX(a,b," ")},
oY(a,b){var s=b-a.length
if(s<=0)return a
return a+this.aH(" ",s)},
c4(a,b){var s=a.indexOf(b,0)
return s},
G(a,b){return A.B9(a,b,0)},
ai(a,b){var s
A.a3(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
t(a){return a},
gZ(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gaF(a){return A.e0(t.N)},
gI(a){return a.length},
$iaf:1,
$ias:1,
$ipL:1,
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
A.qb.prototype={}
A.K.prototype={}
A.aF.prototype={
gN(a){var s=this
return new A.c2(s,s.gI(s),A.y(s).h("c2<aF.E>"))},
gaL(a){return this.gI(this)===0},
aP(a,b){var s,r,q,p=this,o=p.gI(p)
if(b.length!==0){if(o===0)return""
s=A.J(p.aU(0,0))
if(o!==p.gI(p))throw A.n(A.b_(p))
for(r=s,q=1;q<o;++q){r=r+b+A.J(p.aU(0,q))
if(o!==p.gI(p))throw A.n(A.b_(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.J(p.aU(0,q))
if(o!==p.gI(p))throw A.n(A.b_(p))}return r.charCodeAt(0)==0?r:r}},
k7(a,b,c){var s=A.y(this)
return new A.aN(this,s.ak(c).h("1(aF.E)").a(b),s.h("@<aF.E>").ak(c).h("aN<1,2>"))},
cG(a,b){var s=A.a6(this,A.y(this).h("aF.E"))
return s},
e4(a){return this.cG(0,!0)}}
A.hD.prototype={
gm4(){var s=J.dx(this.a),r=this.c
if(r==null||r>s)return s
return r},
gnt(){var s=J.dx(this.a),r=this.b
if(r>s)return s
return r},
gI(a){var s,r=J.dx(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
aU(a,b){var s=this,r=s.gnt()+b
if(b<0||r>=s.gm4())throw A.n(A.or(b,s.gI(0),s,null,"index"))
return J.tA(s.a,r)}}
A.c2.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=J.iq(q),o=p.gI(q)
if(r.b!==o)throw A.n(A.b_(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.aU(q,s);++r.c
return!0},
$ia5:1}
A.dI.prototype={
gN(a){return new A.bl(J.ao(this.a),this.b,A.y(this).h("bl<1,2>"))},
gI(a){return J.dx(this.a)}}
A.dA.prototype={$iK:1}
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
aU(a,b){return this.b.$1(J.tA(this.a,b))}}
A.aj.prototype={
gN(a){return new A.cR(J.ao(this.a),this.b,this.$ti.h("cR<1>"))}}
A.cR.prototype={
q(){var s,r
for(s=this.a,r=this.b;s.q();)if(r.$1(s.gH()))return!0
return!1},
gH(){return this.a.gH()},
$ia5:1}
A.dP.prototype={
gN(a){var s=this.a
return new A.hE(s.gN(s),this.b,A.y(this).h("hE<1>"))}}
A.fJ.prototype={
gI(a){var s=this.a,r=s.gI(s)
s=this.b
if(r>s)return s
return r},
$iK:1}
A.hE.prototype={
q(){if(--this.b>=0)return this.a.q()
this.b=-1
return!1},
gH(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gH()},
$ia5:1}
A.hF.prototype={
gN(a){return new A.hG(J.ao(this.a),this.b,this.$ti.h("hG<1>"))}}
A.hG.prototype={
q(){var s,r=this
if(r.c)return!1
s=r.a
if(!s.q()||!r.b.$1(s.gH())){r.c=!0
return!1}return!0},
gH(){if(this.c){this.$ti.c.a(null)
return null}return this.a.gH()},
$ia5:1}
A.hL.prototype={
gN(a){return new A.bm(J.ao(this.a),this.$ti.h("bm<1>"))}}
A.bm.prototype={
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
i(a,b,c){A.y(this).h("dl.E").a(c)
throw A.n(A.cn("Cannot modify an unmodifiable list"))},
sI(a,b){throw A.n(A.cn("Cannot change the length of an unmodifiable list"))},
j(a,b){A.y(this).h("dl.E").a(b)
throw A.n(A.cn("Cannot add to an unmodifiable list"))}}
A.f6.prototype={}
A.cL.prototype={
gI(a){return J.dx(this.a)},
aU(a,b){var s=this.a,r=J.iq(s)
return r.aU(s,r.gI(s)-1-b)}}
A.Q.prototype={$r:"+(1,2)",$s:1}
A.a2.prototype={$r:"+(1,2,3,4)",$s:2}
A.ek.prototype={
gaL(a){return this.gI(this)===0},
t(a){return A.tM(this)},
geT(){return new A.R(this.oy(),A.y(this).h("R<aM<1,2>>"))},
oy(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$geT(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gb2(),o=o.gN(o),n=A.y(s),m=n.y[1],n=n.h("aM<1,2>")
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
al(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
p(a,b){if(!this.al(b))return null
return this.b[this.a[b]]},
ae(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.giN()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gb2(){return new A.hY(this.giN(),this.$ti.h("hY<1>"))}}
A.hY.prototype={
gI(a){return this.a.length},
gN(a){var s=this.a
return new A.hZ(s,s.length,this.$ti.h("hZ<1>"))}}
A.hZ.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$ia5:1}
A.dD.prototype={
dq(){var s=this,r=s.$map
if(r==null){r=new A.h3(s.$ti.h("h3<1,2>"))
A.wz(s.a,r)
s.$map=r}return r},
al(a){return this.dq().al(a)},
p(a,b){return this.dq().p(0,b)},
ae(a,b){this.$ti.h("~(1,2)").a(b)
this.dq().ae(0,b)},
gb2(){var s=this.dq()
return new A.b0(s,A.y(s).h("b0<1>"))},
gI(a){return this.dq().a}}
A.pO.prototype={
$0(){return B.e.bK(1000*this.a.now())},
$S:1}
A.hu.prototype={}
A.r4.prototype={
bO(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.hg.prototype={
t(a){return"Null check operator used on a null value"}}
A.jV.prototype={
t(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.ld.prototype={
t(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.pG.prototype={
t(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ib.prototype={
t(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$if4:1}
A.d5.prototype={
t(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.wP(r==null?"unknown":r)+"'"},
$idC:1,
gpv(){return this},
$C:"$1",
$R:1,
$D:null}
A.iX.prototype={$C:"$0",$R:0}
A.iY.prototype={$C:"$2",$R:2}
A.l3.prototype={}
A.kZ.prototype={
t(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.wP(s)+"'"}}
A.ee.prototype={
a0(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ee))return!1
return this.$_target===b.$_target&&this.a===b.a},
gZ(a){return(A.uj(this.a)^A.hk(this.$_target))>>>0},
t(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kA(this.a)+"'")}}
A.kQ.prototype={
t(a){return"RuntimeError: "+this.a}}
A.c0.prototype={
gI(a){return this.a},
gaL(a){return this.a===0},
gb2(){return new A.b0(this,A.y(this).h("b0<1>"))},
geT(){return new A.bj(this,A.y(this).h("bj<1,2>"))},
al(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.oL(a)},
oL(a){var s=this.d
if(s==null)return!1
return this.dU(this.iH(s,a),a)>=0},
U(a,b){A.y(this).h("bk<1,2>").a(b).ae(0,new A.oX(this))},
p(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.oM(b)},
oM(a){var s,r,q=this.d
if(q==null)return null
s=this.iH(q,a)
r=this.dU(s,a)
if(r<0)return null
return s[r].b},
i(a,b,c){var s,r,q=this,p=A.y(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.ie(s==null?q.b=q.fU():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.ie(r==null?q.c=q.fU():r,b,c)}else q.oO(b,c)},
oO(a,b){var s,r,q,p,o=this,n=A.y(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.fU()
r=o.f_(a)
q=s[r]
if(q==null)s[r]=[o.fV(a,b)]
else{p=o.dU(q,a)
if(p>=0)q[p].b=b
else q.push(o.fV(a,b))}},
b7(a,b){var s,r,q=this,p=A.y(q)
p.c.a(a)
p.h("2()").a(b)
if(q.al(a)){s=q.p(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.i(0,a,r)
return r},
ac(a,b){var s=this.oN(b)
return s},
oN(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.f_(a)
r=n[s]
q=o.dU(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.nM(p)
if(r.length===0)delete n[s]
return p.b},
aS(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.fS()}},
ae(a,b){var s,r,q=this
A.y(q).h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.n(A.b_(q))
s=s.c}},
ie(a,b,c){var s,r=A.y(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.fV(b,c)
else s.b=c},
fS(){this.r=this.r+1&1073741823},
fV(a,b){var s=this,r=A.y(s),q=new A.p6(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.fS()
return q},
nM(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.fS()},
f_(a){return J.cb(a)&1073741823},
iH(a,b){return a[this.f_(b)]},
dU(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ax(a[r].a,b))return r
return-1},
t(a){return A.tM(this)},
fU(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$itL:1}
A.oX.prototype={
$2(a,b){var s=this.a,r=A.y(s)
s.i(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.y(this.a).h("~(1,2)")}}
A.p6.prototype={}
A.b0.prototype={
gI(a){return this.a.a},
gaL(a){return this.a.a===0},
gN(a){var s=this.a
return new A.c1(s,s.r,s.e,this.$ti.h("c1<1>"))},
G(a,b){return this.a.al(b)}}
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
return new A.dG(s,s.r,s.e,this.$ti.h("dG<1,2>"))}}
A.dG.prototype={
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
A.h3.prototype={
f_(a){return A.AC(a)&1073741823},
dU(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ax(a[r].a,b))return r
return-1}}
A.t6.prototype={
$1(a){return this.a(a)},
$S:33}
A.t7.prototype={
$2(a,b){return this.a(a,b)},
$S:69}
A.t8.prototype={
$1(a){return this.a(A.a3(a))},
$S:66}
A.co.prototype={
t(a){return this.je(!1)},
je(a){var s,r,q,p,o,n=this.m8(),m=this.fN(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.c(m,q)
o=m[q]
l=a?l+A.vE(o):l+A.J(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
m8(){var s,r=this.$s
while($.rC.length<=r)B.a.j($.rC,null)
s=$.rC[r]
if(s==null){s=this.lI()
B.a.i($.rC,r,s)}return s},
lI(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.vo(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.i(j,q,r[s])}}j=A.yy(j,!1,k)
j.$flags=3
return j}}
A.fd.prototype={
fN(){return[this.a,this.b]},
a0(a,b){if(b==null)return!1
return b instanceof A.fd&&this.$s===b.$s&&J.ax(this.a,b.a)&&J.ax(this.b,b.b)},
gZ(a){return A.tO(this.$s,this.a,this.b,B.am)}}
A.fe.prototype={
fN(){return this.a},
a0(a,b){if(b==null)return!1
return b instanceof A.fe&&this.$s===b.$s&&A.zn(this.a,b.a)},
gZ(a){return A.tO(this.$s,A.yG(this.a),B.am,B.am)}}
A.h_.prototype={
t(a){return"RegExp/"+this.a+"/"+this.b.flags},
giT(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.vs(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
jR(a){var s=this.b.exec(a)
if(s==null)return null
return new A.i_(s)},
ha(a,b){return new A.lp(this,b,0)},
m7(a,b){var s,r=this.giT()
if(r==null)r=A.fh(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.i_(s)},
$ipL:1,
$iyT:1}
A.i_.prototype={
gi8(){return this.b.index},
ghp(){var s=this.b
return s.index+s[0].length},
p(a,b){var s
A.w(b)
s=this.b
if(!(b<s.length))return A.c(s,b)
return s[b]},
$icj:1,
$ihp:1}
A.lp.prototype={
gN(a){return new A.hN(this.a,this.b,this.c)}}
A.hN.prototype={
gH(){var s=this.d
return s==null?t.lu.a(s):s},
q(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.m7(l,s)
if(p!=null){m.d=p
o=p.ghp()
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
A.l_.prototype={
ghp(){return this.a+this.c.length},
p(a,b){A.w(b)
if(b!==0)throw A.n(A.hm(b,null))
return this.c},
$icj:1,
gi8(){return this.a}}
A.mq.prototype={
gN(a){return new A.mr(this.a,this.b,this.c)}}
A.mr.prototype={
q(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.l_(s,o)
q.c=r===q.c?r+1:r
return!0},
gH(){var s=this.d
s.toString
return s},
$ia5:1}
A.ri.prototype={
fX(){var s=this.b
if(s===this)throw A.n(new A.dc("Local '' has not been initialized."))
return s},
u(){var s=this.b
if(s===this)throw A.n(A.dF(""))
return s}}
A.eJ.prototype={
gaF(a){return B.iM},
$iaf:1}
A.hc.prototype={}
A.kf.prototype={
gaF(a){return B.iN},
$iaf:1}
A.eK.prototype={
gI(a){return a.length},
$ibG:1}
A.ha.prototype={
p(a,b){A.w(b)
A.cX(b,a,a.length)
return a[b]},
i(a,b,c){A.by(c)
a.$flags&2&&A.bo(a)
A.cX(b,a,a.length)
a[b]=c},
$iK:1,
$ik:1,
$iC:1}
A.hb.prototype={
i(a,b,c){A.w(c)
a.$flags&2&&A.bo(a)
A.cX(b,a,a.length)
a[b]=c},
$iK:1,
$ik:1,
$iC:1}
A.kg.prototype={
gaF(a){return B.iO},
$iaf:1}
A.kh.prototype={
gaF(a){return B.iP},
$iaf:1}
A.ki.prototype={
gaF(a){return B.iQ},
p(a,b){A.w(b)
A.cX(b,a,a.length)
return a[b]},
$iaf:1}
A.kj.prototype={
gaF(a){return B.iR},
p(a,b){A.w(b)
A.cX(b,a,a.length)
return a[b]},
$iaf:1}
A.kk.prototype={
gaF(a){return B.iS},
p(a,b){A.w(b)
A.cX(b,a,a.length)
return a[b]},
$iaf:1}
A.kl.prototype={
gaF(a){return B.iU},
p(a,b){A.w(b)
A.cX(b,a,a.length)
return a[b]},
$iaf:1}
A.km.prototype={
gaF(a){return B.iV},
p(a,b){A.w(b)
A.cX(b,a,a.length)
return a[b]},
$iaf:1}
A.hd.prototype={
gaF(a){return B.iW},
gI(a){return a.length},
p(a,b){A.w(b)
A.cX(b,a,a.length)
return a[b]},
$iaf:1}
A.kn.prototype={
gaF(a){return B.iX},
gI(a){return a.length},
p(a,b){A.w(b)
A.cX(b,a,a.length)
return a[b]},
$iaf:1}
A.i0.prototype={}
A.i1.prototype={}
A.i2.prototype={}
A.i3.prototype={}
A.c4.prototype={
h(a){return A.ih(v.typeUniverse,this,a)},
ak(a){return A.w7(v.typeUniverse,this,a)}}
A.lS.prototype={}
A.mv.prototype={
t(a){return A.bK(this.a,null)}}
A.lJ.prototype={
t(a){return this.a}}
A.ic.prototype={$icP:1}
A.rc.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:44}
A.rb.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:55}
A.rd.prototype={
$0(){this.a.$0()},
$S:39}
A.re.prototype={
$0(){this.a.$0()},
$S:39}
A.rI.prototype={
lo(a,b){if(self.setTimeout!=null)self.setTimeout(A.mD(new A.rJ(this,b),0),a)
else throw A.n(A.cn("`setTimeout()` not found."))}}
A.rJ.prototype={
$0(){this.b.$0()},
$S:0}
A.ag.prototype={
gH(){var s=this.b
return s==null?this.$ti.c.a(s):s},
ng(a,b){var s,r,q
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
o.d=null}q=o.ng(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.w1
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
o.a=A.w1
throw n
return!1}if(0>=p.length)return A.c(p,-1)
o.a=p.pop()
m=1
continue}throw A.n(A.cM("sync*"))}return!1},
aK(a){var s,r,q=this
if(a instanceof A.R){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.j(r,q.a)
q.a=s
return 2}else{q.d=J.ao(a)
return 2}},
$ia5:1}
A.R.prototype={
gN(a){return new A.ag(this.a(),this.$ti.h("ag<1>"))}}
A.cu.prototype={
t(a){return A.J(this.a)},
$ial:1,
geh(){return this.b}}
A.hV.prototype={
oS(a){if((this.c&15)!==6)return!0
return this.b.b.hL(t.iW.a(this.d),a.a,t.y,t.K)},
oH(a){var s,r=this,q=r.e,p=null,o=t.oH,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.pd(q,m,a.b,o,n,t.gl)
else p=l.hL(t.mq.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.do.b(A.dn(s))){if((r.c&1)!==0)throw A.n(A.aC("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.n(A.aC("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.bT.prototype={
pj(a,b,c){var s,r,q=this.$ti
q.ak(c).h("1/(2)").a(a)
s=$.b3
if(s===B.ab){if(!t.ng.b(b)&&!t.mq.b(b))throw A.n(A.v1(b,"onError",u.c))}else{c.h("@<0/>").ak(q.c).h("1(2)").a(a)
b=A.Aj(b,s)}r=new A.bT(s,c.h("bT<0>"))
this.ig(new A.hV(r,3,a,b,q.h("@<1>").ak(c).h("hV<1,2>")))
return r},
no(a){this.a=this.a&1|16
this.c=a},
em(a){this.a=a.a&30|this.a&1
this.c=a.c},
ig(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.j_.a(r.c)
if((s.a&24)===0){s.ig(a)
return}r.em(s)}A.rY(null,null,r.b,t.O.a(new A.rm(r,a)))}},
iZ(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.j_.a(m.c)
if((n.a&24)===0){n.iZ(a)
return}m.em(n)}l.a=m.eB(a)
A.rY(null,null,m.b,t.O.a(new A.rp(l,m)))}},
ez(){var s=t.F.a(this.c)
this.c=null
return this.eB(s)},
eB(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
lH(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.ez()
q.em(a)
A.fb(q,r)},
it(a){var s=this.ez()
this.no(a)
A.fb(this,s)},
ls(a){this.a^=2
A.rY(null,null,this.b,t.O.a(new A.rn(this,a)))},
$ijx:1}
A.rm.prototype={
$0(){A.fb(this.a,this.b)},
$S:0}
A.rp.prototype={
$0(){A.fb(this.b,this.a.a)},
$S:0}
A.ro.prototype={
$0(){A.vX(this.a.a,this.b,!0)},
$S:0}
A.rn.prototype={
$0(){this.a.it(this.b)},
$S:0}
A.rs.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.pc(t.df.a(q.d),t.oH)}catch(p){s=A.dn(p)
r=A.e3(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.tB(q)
n=k.a
n.c=new A.cu(q,o)
q=n}q.b=!0
return}if(j instanceof A.bT&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.bT){m=k.b.a
l=new A.bT(m.b,m.$ti)
j.pj(new A.rt(l,m),new A.ru(l),t.ef)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.rt.prototype={
$1(a){this.a.lH(this.b)},
$S:44}
A.ru.prototype={
$2(a,b){A.fh(a)
t.gl.a(b)
this.a.it(new A.cu(a,b))},
$S:77}
A.rr.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.hL(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.dn(l)
r=A.e3(l)
q=s
p=r
if(p==null)p=A.tB(q)
o=this.a
o.c=new A.cu(q,p)
o.b=!0}},
$S:0}
A.rq.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.oS(s)&&p.a.e!=null){p.c=p.a.oH(s)
p.b=!1}}catch(o){r=A.dn(o)
q=A.e3(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.tB(p)
m=l.b
m.c=new A.cu(p,n)
p=m}p.b=!0}},
$S:0}
A.ls.prototype={}
A.hA.prototype={
gI(a){var s,r,q=this,p={},o=new A.bT($.b3,t.h0)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new A.qN(p,q))
t.c3.a(new A.qO(p,o))
A.dU(q.a,q.b,r,!1,s.c)
return o}}
A.qN.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.h("~(1)")}}
A.qO.prototype={
$0(){var s=this.b,r=s.$ti,q=r.h("1/").a(this.a.a),p=s.ez()
r.c.a(q)
s.a=8
s.c=q
A.fb(s,p)},
$S:0}
A.ii.prototype={$ivU:1}
A.mi.prototype={
pe(a){var s,r,q
t.O.a(a)
try{if(B.ab===$.b3){a.$0()
return}A.wo(null,null,this,a,t.ef)}catch(q){s=A.dn(q)
r=A.e3(q)
A.rW(A.fh(s),t.gl.a(r))}},
pf(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.ab===$.b3){a.$1(b)
return}A.wp(null,null,this,a,b,t.ef,c)}catch(q){s=A.dn(q)
r=A.e3(q)
A.rW(A.fh(s),t.gl.a(r))}},
o4(a){return new A.rE(this,t.O.a(a))},
o5(a,b){return new A.rF(this,b.h("~(0)").a(a),b)},
pc(a,b){b.h("0()").a(a)
if($.b3===B.ab)return a.$0()
return A.wo(null,null,this,a,b)},
hL(a,b,c,d){c.h("@<0>").ak(d).h("1(2)").a(a)
d.a(b)
if($.b3===B.ab)return a.$1(b)
return A.wp(null,null,this,a,b,c,d)},
pd(a,b,c,d,e,f){d.h("@<0>").ak(e).ak(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.b3===B.ab)return a.$2(b,c)
return A.Ak(null,null,this,a,b,c,d,e,f)}}
A.rE.prototype={
$0(){return this.a.pe(this.b)},
$S:0}
A.rF.prototype={
$1(a){var s=this.c
return this.a.pf(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.rX.prototype={
$0(){A.y8(this.a,this.b)},
$S:0}
A.cT.prototype={
mY(){return new A.cT(A.y(this).h("cT<1>"))},
gN(a){var s=this,r=new A.cU(s,s.r,A.y(s).h("cU<1>"))
r.c=s.e
return r},
gI(a){return this.a},
G(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.nF.a(r[b])!=null}else return this.lJ(b)},
lJ(a){var s=this.d
if(s==null)return!1
return this.fL(s[this.fE(a)],a)>=0},
gaC(a){var s=this.e
if(s==null)throw A.n(A.cM("No elements"))
return A.y(this).c.a(s.a)},
j(a,b){var s,r,q=this
A.y(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.iq(s==null?q.b=A.u2():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.iq(r==null?q.c=A.u2():r,b)}else return q.bH(b)},
bH(a){var s,r,q,p=this
A.y(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.u2()
r=p.fE(a)
q=s[r]
if(q==null)s[r]=[p.fD(a)]
else{if(p.fL(q,a)>=0)return!1
q.push(p.fD(a))}return!0},
ac(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.j3(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.j3(s.c,b)
else return s.n7(b)},
n7(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.fE(a)
r=n[s]
q=o.fL(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.is(p)
return!0},
ma(a,b){var s,r,q,p,o,n=this,m=A.y(n)
m.h("B(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.n(A.b_(n))
if(!0===o)n.ac(0,r)}},
iq(a,b){A.y(this).c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.fD(b)
return!0},
j3(a,b){var s
if(a==null)return!1
s=t.nF.a(a[b])
if(s==null)return!1
this.is(s)
delete a[b]
return!0},
ir(){this.r=this.r+1&1073741823},
fD(a){var s,r=this,q=new A.m6(A.y(r).c.a(a))
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
fE(a){return J.cb(a)&1073741823},
fL(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ax(a[r].a,b))return r
return-1}}
A.m6.prototype={}
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
gk5(a){return this.gI(a)!==0},
kQ(a,b){var s=A.cs(a)
return new A.aj(a,s.h("B(X.E)").a(b),s.h("aj<X.E>"))},
cG(a,b){var s,r,q,p,o=this
if(o.gI(a)===0){s=J.vq(0,A.cs(a).h("X.E"))
return s}r=o.p(a,0)
q=A.an(o.gI(a),r,!0,A.cs(a).h("X.E"))
for(p=1;p<o.gI(a);++p)B.a.i(q,p,o.p(a,p))
return q},
e4(a){return this.cG(a,!0)},
j(a,b){var s
A.cs(a).h("X.E").a(b)
s=this.gI(a)
this.sI(a,s+1)
this.i(a,s,b)},
t(a){return A.oV(a,"[","]")},
$iK:1,
$ik:1,
$iC:1}
A.aB.prototype={
ae(a,b){var s,r,q,p=A.y(this)
p.h("~(aB.K,aB.V)").a(b)
for(s=this.gb2(),s=s.gN(s),p=p.h("aB.V");s.q();){r=s.gH()
q=this.p(0,r)
b.$2(r,q==null?p.a(q):q)}},
geT(){return this.gb2().k7(0,new A.pj(this),A.y(this).h("aM<aB.K,aB.V>"))},
al(a){return this.gb2().G(0,a)},
gI(a){var s=this.gb2()
return s.gI(s)},
gaL(a){var s=this.gb2()
return s.gaL(s)},
t(a){return A.tM(this)},
$ibk:1}
A.pj.prototype={
$1(a){var s=this.a,r=A.y(s)
r.h("aB.K").a(a)
s=s.p(0,a)
if(s==null)s=r.h("aB.V").a(s)
return new A.aM(a,s,r.h("aM<aB.K,aB.V>"))},
$S(){return A.y(this.a).h("aM<aB.K,aB.V>(aB.K)")}}
A.pk.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.J(a)
r.a=(r.a+=s)+": "
s=A.J(b)
r.a+=s},
$S:46}
A.h5.prototype={
gN(a){var s=this
return new A.dW(s,s.c,s.d,s.b,s.$ti.h("dW<1>"))},
gaL(a){return this.b===this.c},
gI(a){return(this.c-this.b&this.a.length-1)>>>0},
aU(a,b){var s,r,q=this,p=q.gI(0)
if(0>b||b>=p)A.a_(A.or(b,p,q,null,"index"))
p=q.a
s=p.length
r=(q.b+b&s-1)>>>0
if(!(r>=0&&r<s))return A.c(p,r)
r=p[r]
return r==null?q.$ti.c.a(r):r},
t(a){return A.oV(this,"{","}")},
d8(){var s,r,q=this,p=q.b
if(p===q.c)throw A.n(A.cE());++q.d
s=q.a
if(!(p<s.length))return A.c(s,p)
r=s[p]
if(r==null)r=q.$ti.c.a(r)
B.a.i(s,p,null)
q.b=(q.b+1&q.a.length-1)>>>0
return r},
bH(a){var s,r=this
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
$ieU:1}
A.dW.prototype={
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
A.f2.prototype={
U(a,b){var s
for(s=J.ao(A.y(this).h("k<1>").a(b));s.q();)this.j(0,s.gH())},
t(a){return A.oV(this,"{","}")},
aP(a,b){var s,r,q,p,o=A.u1(this,this.r,A.y(this).c)
if(!o.q())return""
s=o.d
r=J.ea(s==null?o.$ti.c.a(s):s)
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
$itX:1}
A.i8.prototype={}
A.m1.prototype={
p(a,b){var s,r=this.b
if(r==null)return this.c.p(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.lK(b):s}},
gI(a){return this.b==null?this.c.a:this.en().length},
gaL(a){return this.gI(0)===0},
gb2(){if(this.b==null){var s=this.c
return new A.b0(s,A.y(s).h("b0<1>"))}return new A.m2(this)},
al(a){if(this.b==null)return this.c.al(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
ae(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.ae(0,b)
s=o.en()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.rS(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.n(A.b_(o))}},
en(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.a(Object.keys(this.a),t.s)
return s},
lK(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.rS(this.a[a])
return this.b[a]=s}}
A.m2.prototype={
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
G(a,b){return this.a.al(b)}}
A.j0.prototype={}
A.j2.prototype={}
A.h4.prototype={
t(a){var s=A.ji(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.jX.prototype={
t(a){return"Cyclic error in JSON stringify"}}
A.jW.prototype={
op(a){var s=A.Ah(a,this.goq().a)
return s},
jM(a){var s=A.ze(a,this.gox().b,null)
return s},
gox(){return B.hr},
goq(){return B.hq}}
A.oZ.prototype={}
A.oY.prototype={}
A.rx.prototype={
kT(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.j.aI(a,r,q)
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
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.j.aI(a,r,q)
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
break}}else if(p===34||p===92){if(q>r)s.a+=B.j.aI(a,r,q)
r=q+1
o=A.b2(92)
s.a+=o
o=A.b2(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.j.aI(a,r,m)},
fC(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.n(new A.jX(a,null))}B.a.j(s,a)},
fg(a){var s,r,q,p,o=this
if(o.kS(a))return
o.fC(a)
try{s=o.b.$1(a)
if(!o.kS(s)){q=A.vt(a,null,o.giW())
throw A.n(q)}q=o.a
if(0>=q.length)return A.c(q,-1)
q.pop()}catch(p){r=A.dn(p)
q=A.vt(a,r,o.giW())
throw A.n(q)}},
kS(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.e.t(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.kT(a)
s.a+='"'
return!0}else if(t._.b(a)){q.fC(a)
q.ps(a)
s=q.a
if(0>=s.length)return A.c(s,-1)
s.pop()
return!0}else if(t.av.b(a)){q.fC(a)
r=q.pt(a)
s=q.a
if(0>=s.length)return A.c(s,-1)
s.pop()
return r}else return!1},
ps(a){var s,r,q=this.c
q.a+="["
s=J.iq(a)
if(s.gk5(a)){this.fg(s.p(a,0))
for(r=1;r<s.gI(a);++r){q.a+=","
this.fg(s.p(a,r))}}q.a+="]"},
pt(a){var s,r,q,p,o,n,m=this,l={}
if(a.gaL(a)){m.c.a+="{}"
return!0}s=a.gI(a)*2
r=A.an(s,null,!1,t.iD)
q=l.a=0
l.b=!0
a.ae(0,new A.ry(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.kT(A.a3(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.c(r,n)
m.fg(r[n])}p.a+="}"
return!0}}
A.ry.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.i(s,r.a++,a)
B.a.i(s,r.a++,b)},
$S:46}
A.rw.prototype={
giW(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.em.prototype={
a0(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.em)if(this.a===b.a)s=this.b===b.b
return s},
gZ(a){return A.tO(this.a,this.b,B.am,B.am)},
ai(a,b){var s
t.cs.a(b)
s=B.c.ai(this.a,b.a)
if(s!==0)return s
return B.c.ai(this.b,b.b)},
t(a){var s=this,r=A.y3(A.yO(s)),q=A.j5(A.yM(s)),p=A.j5(A.yI(s)),o=A.j5(A.yJ(s)),n=A.j5(A.yL(s)),m=A.j5(A.yN(s)),l=A.v8(A.yK(s)),k=s.b,j=k===0?"":A.v8(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$ias:1}
A.rj.prototype={
t(a){return this.aJ()}}
A.al.prototype={
geh(){return A.yH(this)}}
A.iE.prototype={
t(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.ji(s)
return"Assertion failed"}}
A.cP.prototype={}
A.ce.prototype={
gfK(){return"Invalid argument"+(!this.a?"(s)":"")},
gfJ(){return""},
t(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.J(p),n=s.gfK()+q+o
if(!s.a)return n
return n+s.gfJ()+": "+A.ji(s.ghv())},
ghv(){return this.b}}
A.eV.prototype={
ghv(){return A.wb(this.b)},
gfK(){return"RangeError"},
gfJ(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.J(q):""
else if(q==null)s=": Not greater than or equal to "+A.J(r)
else if(q>r)s=": Not in inclusive range "+A.J(r)+".."+A.J(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.J(r)
return s}}
A.jM.prototype={
ghv(){return A.w(this.b)},
gfK(){return"RangeError"},
gfJ(){if(A.w(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gI(a){return this.f}}
A.hH.prototype={
t(a){return"Unsupported operation: "+this.a}}
A.lc.prototype={
t(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.dN.prototype={
t(a){return"Bad state: "+this.a}}
A.j1.prototype={
t(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ji(s)+"."}}
A.kr.prototype={
t(a){return"Out of Memory"},
geh(){return null},
$ial:1}
A.hz.prototype={
t(a){return"Stack Overflow"},
geh(){return null},
$ial:1}
A.rl.prototype={
t(a){return"Exception: "+this.a}}
A.oa.prototype={
t(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.j.aI(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.k.prototype={
k7(a,b,c){var s=A.y(this)
return A.pm(this,s.ak(c).h("1(k.E)").a(b),s.h("k.E"),c)},
aD(a,b,c,d){var s,r
d.a(b)
A.y(this).ak(d).h("1(1,k.E)").a(c)
for(s=this.gN(this),r=b;s.q();)r=c.$2(r,s.gH())
return r},
dB(a,b){var s
A.y(this).h("B(k.E)").a(b)
for(s=this.gN(this);s.q();)if(b.$1(s.gH()))return!0
return!1},
cG(a,b){var s=A.a6(this,A.y(this).h("k.E"))
return s},
e4(a){return this.cG(0,!0)},
gI(a){var s,r=this.gN(this)
for(s=0;r.q();)++s
return s},
gaL(a){return!this.gN(this).q()},
gaC(a){var s=this.gN(this)
if(!s.q())throw A.n(A.cE())
return s.gH()},
hr(a,b,c){var s,r=A.y(this)
r.h("B(k.E)").a(b)
r.h("k.E()?").a(c)
for(r=this.gN(this);r.q();){s=r.gH()
if(b.$1(s))return s}r=c.$0()
return r},
aU(a,b){var s,r
A.hn(b,"index")
s=this.gN(this)
for(r=b;s.q();){if(r===0)return s.gH();--r}throw A.n(A.or(b,b-r,this,null,"index"))},
t(a){return A.ym(this,"(",")")}}
A.aM.prototype={
t(a){return"MapEntry("+A.J(this.a)+": "+A.J(this.b)+")"}}
A.aP.prototype={
gZ(a){return A.a0.prototype.gZ.call(this,0)},
t(a){return"null"}}
A.a0.prototype={$ia0:1,
a0(a,b){return this===b},
gZ(a){return A.hk(this)},
t(a){return"Instance of '"+A.kA(this)+"'"},
gaF(a){return A.AN(this)},
toString(){return this.t(this)}}
A.ms.prototype={
t(a){return""},
$if4:1}
A.qA.prototype={
gow(){var s,r=this.b
if(r==null)r=$.tQ.$0()
s=r-this.a
if($.uE()===1000)return s
return B.c.A(s,1000)}}
A.dO.prototype={
gI(a){return this.a.length},
t(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iz_:1}
A.m0.prototype={
a_(a){if(a<=0||a>4294967296)throw A.n(A.vG(u.g+a))
return Math.random()*a>>>0},
hz(){return Math.random()},
$itR:1}
A.mg.prototype={
ln(a){var s,r,q,p,o,n,m,l=this,k=4294967296,j=a<0?-1:0
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
l.cd()
l.cd()
l.cd()
l.cd()},
cd(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.A(o-n+(q-p)+(m-r),4294967296)>>>0},
a_(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.n(A.vG(u.g+a))
s=a-1
if((a&s)>>>0===0){p.cd()
return(p.a&s)>>>0}do{p.cd()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
hz(){var s,r=this
r.cd()
s=r.a
r.cd()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$itR:1}
A.jz.prototype={
oe(a,b,c,d){var s,r
t.jJ.a(d)
if(c===0)return new A.r3(b).dE(d)
s=b.f.b.b
r=s.a
s=s.b
return new A.na(a,b,c,new A.a8(A.an(r*s,null,!1,t.aT),new A.Y(new A.d(0,0),new A.d(r,s)),t.gy)).dE(d)},
jF(a,b,c,d){var s,r,q,p,o,n,m,l=null
if(d==null)d=B.a.eV($.fs(),new A.oe())
if(b==null)b=B.a.gaC($.e8())
s=A.D(t.g,t.U)
r=t.M
q=t.S
p=t.P
o=t.q
n=new A.d9(a,d,b,c,A.bE(B.H,l),new A.es(A.an(9,l,!1,t.mN)),A.bE(B.c3,l),A.bE(B.c2,l),s,0,new A.hy(A.D(r,q),A.D(r,q)),60,0,new A.k3(A.a([],t.kU)),new A.h7(A.D(p,q),A.D(p,q),A.D(o,q),A.D(t.R,q),A.be(o),A.D(o,q)),new A.hB(),new A.fx(),new A.hK(),new A.fV())
n.lh(a,d,b,c)
for(r=new A.cF($.hx,$.hx.r,$.hx.e,A.y($.hx).h("cF<2>"));r.q();){q=r.d
m=A.bE(new A.c_(q.b,26),l)
q.aG(m)
s.i(0,q,m)}return n},
oo(a){return this.jF(a,null,!1,null)},
l9(a){var s,r,q,p,o=null,n=t.N,m=t.S,l=A.A(["Mending Salve",3,"Scroll of Sidestepping",2,"Tallow Candle",4,"Loaf of Bread",5],n,m),k=A.a([],t.I)
for(n=A.vz(l,n,m),m=A.y(n),n=new A.bl(J.ao(n.a),n.b,m.h("bl<1,2>")),m=m.y[1];n.q();){s=n.a
if(s==null)s=m.a(s)
r=s.a
q=s.b
p=$.bh().b.p(0,r)
if(p==null)A.a_(A.aC('Unknown resource "'+r+'".',o))
k.push(new A.L(p.a,o,o,o,q))}a.c.e.b0(a.ax,1,new A.of(a,k))
return k},
po(a,b){var s,r=a.f.C(b.gm(),b.gn()),q=r.x
if(q===0){if(!this.nL(a,b,r))this.ja(a,b,r)}else{s=r.w
if(s===$.b4()){--q
r.x=q
if(q<=0){q=r.a
q=$.ts().p(0,q)
if((q==null?0:q)>0){q=$.m()
s=t.p.a(A.z3(r.a))
q=q.T(s.length)
if(!(q>=0&&q<s.length))return A.c(s,q)
r.a=s[q]}a.gav().f=!0}else return new A.iR(b)}else if(s===$.bz()){this.ja(a,b,r)
r=r.x
if(r>0)return new A.kx(b,B.e.O(A.v(r,0,255,3,8)))}}return null},
nL(a,b,c){var s,r={},q=c.a,p=$.ts().p(0,q)
if(p==null)p=0
if(p===0)return!1
r.a=0
q=new A.od(r,a,b)
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
s=$.uG().p(0,r)
if(s==null)s=0
c.x=q.bp(s/2|0,s)
c.w=$.b4()
return a.gav().f=!0},
ja(a,b,c){var s={},r=$.U()
if((c.a.e.a&r.a)===0)return
s.a=s.b=0
r=new A.oc(s,a,b)
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
$iy2:1}
A.oe.prototype={
$1(a){return t.ho.a(a).a==="Human"},
$S:47}
A.of.prototype={
$1(a){var s=a.a
if(s.dx)this.a.ax.e.j(0,s)
B.a.j(this.b,a)},
$S:6}
A.od.prototype={
$3(a,b,c){var s=this.c,r=this.b.f.C(s.gm()+a,s.gn()+b)
if(r.x===0)return
if(r.w===$.b4())this.a.a+=c},
$S:71}
A.oc.prototype={
$2(a,b){var s=this.c,r=this.b.f.C(s.gm()+a,s.gn()+b)
s=$.U()
if((r.a.e.a&s.a)!==0){s=this.a;++s.a
if(r.w===$.bz())s.b=s.b+r.x}},
$S:73}
A.jl.prototype={
gM(){return"Fairy Dust"},
gW(){return"TODO"},
gbA(){return new A.hl($.tq())},
aj(a){var s,r,q=a.y.Q,p=q.CW.a
p.toString
s=B.e.O(A.v(p,0,50,1,20))
q=q.ay.a
q.toString
r=B.e.O(A.v(q,0,50,1,6))
return A.vI(A.ba(new A.aG(A.aO("dust",B.w,B.aF).a6(1)),"affects",s,$.cZ(),r))}}
A.lK.prototype={}
A.jp.prototype={
gM(){return"Flitter"},
gW(){return"TODO"},
gbA(){return new A.hl($.tq())},
aj(a){return new A.js()}}
A.js.prototype={
V(){var s,r,q=this.c
q===$&&A.b()
s=q.y
q=s.e
if(q.a>0)q.b=q.a=0
else{r=s.Q.ay.a
r.toString
q.a=B.e.O(A.v(r,0,50,3,20))
q.b=1
this.oR("{1} unfold your wings and take flight.",this.a)}return B.n}}
A.lN.prototype={}
A.k8.prototype={
hb(a){var s,r,q,p,o,n,m,l=this,k=l.c
k===$&&A.b()
k=k.x
k===$&&A.b()
k=k.w.C(a.a,a.b)
if(k==null)return null
s=t.V
r=s.a(l.a).Q.f.gcJ()
q=A.a6(r,r.$ti.h("k.E"))
p=s.a(l.a).eO(k)
for(s=l.e,o=0,n=0;n<q.length;++n){if(q[n].a.r!==l.gbu())continue
if(!(n<p.length))return A.c(p,n)
m=p[n]
m.cL(s,"mastery")
o+=m.hF(l,l.a,k)
if(k.z<=0)break}return o},
gdW(){return 1}}
A.lk.prototype={
gW(){var s=this.a
if(0>=s.length)return A.c(s,0)
return"You must have "+(B.j.G("aeiou",s[0])?"an":"a")+" "+s+" equipped."},
dG(a){if(a.y.Q.f.gcJ().dB(0,new A.r7(this)))return null
return"No "+this.a+" equipped"}}
A.r7.prototype={
$1(a){return t.W.a(a).a.r===this.a.a},
$S:10}
A.iJ.prototype={
gM(){return"Ball Lightning"},
gW(){return"TODO"},
gaq(){return 8},
ar(a){return 24},
aj(a){throw A.n(A.b9(null))},
gap(){return this.a}}
A.lv.prototype={}
A.iS.prototype={
gM(){return"Chain Lightning"},
gW(){return"TODO"},
gaq(){return 6},
ar(a){return 24},
aj(a){throw A.n(A.b9(null))},
gap(){return this.a}}
A.lB.prototype={}
A.j3.prototype={
gM(){return"Crystallize"},
gW(){return"TODO"},
gaq(){return 6},
ar(a){return 24},
aj(a){throw A.n(A.b9(null))},
gap(){return this.a}}
A.lE.prototype={}
A.je.prototype={
gM(){return"Earthwork"},
gW(){return"TODO"},
gaq(){return 10},
ar(a){return 24},
aj(a){throw A.n(A.b9(null))},
gap(){return this.a}}
A.lG.prototype={}
A.jm.prototype={
gM(){return"Fire Barrier"},
gW(){return"Creates a wall of fire."},
gaq(){return 4},
ar(a){return 45},
f5(a,b){var s,r,q,p=a.y,o=A.ba(new A.aG(A.aO("fire",B.w,B.U).a6(1)),"burn",10+this.eg(p.Q)*3,$.b4(),8)
p=p.y
s=A.bD(o)
r=p.S(0,b)
q=Math.sqrt(r.gaE())
return new A.iK(b,-r.b/q,r.a/q,s,A.be(t.u))},
e8(a,b){return 8},
gap(){return this.a}}
A.lL.prototype={}
A.jn.prototype={
gM(){return"Firelight"},
gW(){return"TODO"},
gaq(){return 1},
ar(a){return 4},
aj(a){throw A.n(A.b9(null))},
gap(){return this.a}}
A.lM.prototype={}
A.jv.prototype={
gM(){return"Freezing Hand"},
gW(){return"TODO"},
gaq(){return 4},
ar(a){return 24},
aj(a){throw A.n(A.b9(null))},
gap(){return this.a}}
A.lR.prototype={}
A.jC.prototype={
gM(){return"Gust"},
gW(){return"TODO"},
gaq(){return 1},
ar(a){return 4},
aj(a){throw A.n(A.b9(null))},
gap(){return this.a}}
A.lV.prototype={}
A.jD.prototype={
gM(){return"Hail Storm"},
gW(){return"TODO"},
gaq(){return 8},
ar(a){return 24},
aj(a){throw A.n(A.b9(null))},
gap(){return this.a}}
A.lW.prototype={}
A.jJ.prototype={
gM(){return"Icicle"},
gW(){return"TODO"},
gaq(){return 1},
ar(a){return 12},
f5(a,b){return A.tC(b,A.bD(A.ba(new A.aG(A.aO("icicle",B.w,B.U).a6(1)),"pierce",8+this.eg(a.y.Q)*4,$.c9(),8)),!1,null)},
e8(a,b){return 8},
gap(){return this.a}}
A.lX.prototype={}
A.jL.prototype={
gM(){return"Immolation"},
gW(){return"TODO"},
gaq(){return 6},
ar(a){return 24},
aj(a){throw A.n(A.b9(null))},
gap(){return this.a}}
A.lY.prototype={}
A.k_.prototype={
gM(){return"Lava Flow"},
gW(){return"TODO"},
gaq(){return 8},
ar(a){return 24},
aj(a){throw A.n(A.b9(null))},
gap(){return this.a}}
A.m3.prototype={}
A.k1.prototype={
gM(){return"Lightning Bolt"},
gW(){return"TODO"},
gaq(){return 4},
ar(a){return 24},
aj(a){throw A.n(A.b9(null))},
gap(){return this.a}}
A.m4.prototype={}
A.k9.prototype={
gM(){return"Melt Stone"},
gW(){return"TODO"},
gaq(){return 3},
ar(a){return 24},
aj(a){throw A.n(A.b9(null))},
gap(){return this.a}}
A.m7.prototype={}
A.kE.prototype={
gM(){return"Quicksand"},
gW(){return"TODO"},
gaq(){return 8},
ar(a){return 24},
aj(a){throw A.n(A.b9(null))},
gap(){return this.a}}
A.mf.prototype={}
A.kR.prototype={
gM(){return"Sandstorm"},
gW(){return"TODO"},
gaq(){return 8},
ar(a){return 24},
aj(a){throw A.n(A.b9(null))},
gap(){return this.a}}
A.mj.prototype={}
A.kT.prototype={
gM(){return"Sparks"},
gW(){return"TODO"},
gaq(){return 1},
ar(a){return 10},
aj(a){throw A.n(A.b9(null))},
gap(){return this.a}}
A.mn.prototype={}
A.kY.prototype={
gbA(){return new A.iC(this.gap(),this.gaq())},
eg(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.gap(),r=s.length,q=a.z,p=q.a,o=0,n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
l=p.p(0,m)
if(l==null)l=0
k=q.b.p(0,m)
j=B.c.P(l+(k==null?0:k),0,15)
if(j>=this.gaq())o+=j}return o}}
A.iC.prototype={
gW(){return"You must be at level "+this.b+" or higher in "+this.ix()+"."},
dG(a){var s,r,q,p,o,n,m,l,k
for(s=this.a,r=s.length,q=this.b,p=a.y.Q.z,o=p.a,n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
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
p=B.a.fp(n,0,r)
if(!(r<n.length))return A.c(n,r)
o=n[r]
r=A.M(p)
r=new A.aN(p,r.h("q(1)").a(new A.n9()),r.h("aN<1,q>")).aP(0,", ")+", or "+o.b
break A}}return r}}
A.n9.prototype={
$1(a){return t.dx.a(a).b},
$S:50}
A.l6.prototype={
gM(){return"Tidal Wave"},
gW(){return"Summons a giant tidal wave."},
gaq(){return 5},
ar(a){return 70},
aj(a){var s=a.y,r=this.eg(s.Q),q=A.ba(new A.aG(A.aO("wave",B.w,B.U).a6(1)),"inundate",50+r*15,$.d_(),15+r)
return A.o6(s.y,A.bD(q),new A.ad($.aX().a|$.bM().a|$.is().a),2)},
gap(){return this.a}}
A.mu.prototype={}
A.ln.prototype={
gM(){return"Wind Ride"},
gW(){return"TODO"},
gaq(){return 3},
ar(a){return 16},
aj(a){throw A.n(A.b9(null))},
gap(){return this.a}}
A.my.prototype={}
A.lo.prototype={
gM(){return"Windstorm"},
gW(){return"Summons a blast of air, spreading out from the sorceror."},
gaq(){return 3},
ar(a){return 36},
aj(a){var s=a.y,r=this.eg(s.Q),q=A.aO("wind",B.w,B.U).a6(1),p=B.c.A(r,3),o=A.ba(new A.aG(q),"blast",10+r*2,$.e9(),6+p)
return A.o6(s.y,A.bD(o),$.ux(),null)},
gap(){return this.a}}
A.mz.prototype={}
A.iH.prototype={
gM(){return"Axe Sweep"},
gW(){return"TODO"},
hB(a,b){return new A.iI(b,$,A.v(a.y.Q.z.bN($.uu()),1,10,1,3))},
gbA(){return this.a}}
A.iI.prototype={
gaV(){return!1},
gbu(){return"axe"},
f4(){return new A.R(this.oV(),t.oc)},
oV(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g
return function $async$f4(a,b,c){if(b===1){p.push(c)
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
return a.b=s.cZ("You can't see where you're swinging."),1
case 8:r=1
break
case 7:j=$.U()
r=(i.a.e.a&j.a)===0?9:10
break
case 9:r=11
return a.b=s.cZ("There isn't enough room to swing your weapon."),1
case 11:r=1
break
case 10:case 4:++m
r=3
break
case 5:o=[o.gb9(),o,o.gba()],m=0
case 12:if(!(m<3)){r=14
break}l=o[m]
s.jt(B.bD,l,s.a.y.F(0,l))
r=15
return a.aK(s.kP(2))
case 15:s.hb(s.a.y.F(0,l))
r=16
return a.aK(s.kP(3))
case 16:case 13:++m
r=12
break
case 14:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
t(a){return A.J(this.a)+" slashes "+this.y.t(0)}}
A.lt.prototype={}
A.lu.prototype={}
A.iZ.prototype={
gM(){return"Club Bash"},
gW(){return"TODO"},
hB(a,b){return new A.j_(b,A.v(a.y.Q.z.bN($.uv()),1,15,1,2))},
gbA(){return this.a}}
A.j_.prototype={
gaV(){return!1},
gbu(){return"club"},
V(){var s,r,q,p,o,n=this,m=n.z
if(m===0){m=n.Q=n.hb(n.a.y.F(0,n.y))
if(m==null)return n.cZ("There's no one there!")
else if(m===0)return B.n}else if(m===1){m=n.c
m===$&&A.b()
s=m.x
s===$&&A.b()
r=n.y
q=n.a.y.F(0,r)
q=s.w.C(q.a,q.b)
if(q==null)return B.n
p=n.a.y.F(0,r).F(0,r)
s=n.Q
s.toString
o=B.c.P(B.c.cb(300*s,q.gbo()),5,100)
s=m.x
s===$&&A.b()
if(s.bj(p,q.gb4())&&s.w.C(p.a,p.b)==null&&$.m().T(100)<o){q.dc(m,p)
q.a.a=0
n.Y("{1} is knocked back!",q)
n.jt(B.by,r,n.a.y.F(0,r))}}return++n.z>10?B.n:B.a3},
t(a){return A.J(this.a)+" bashes "+this.y.t(0)}}
A.lD.prototype={}
A.kW.prototype={
gM(){return"Spear Stab"},
gW(){return"TODO"},
hB(a,b){return new A.kX(b,$,A.v(a.y.Q.z.bN($.uD()),1,15,1,3))},
gbA(){return this.a}}
A.kX.prototype={
gaV(){return!1},
gbu(){return"spear"},
f4(){return new A.R(this.oW(),t.oc)},
oW(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f
return function $async$f4(a,b,c){if(b===1){p.push(c)
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
return a.b=s.cZ("You can't see far enough to aim."),1
case 8:r=1
break
case 7:j=$.U()
r=(i.a.e.a&j.a)===0?9:10
break
case 9:r=11
return a.b=s.cZ("There isn't enough room to use your weapon."),1
case 11:r=1
break
case 10:case 4:++l
r=3
break
case 5:j=t.V,l=1
case 12:if(!(l<=2)){r=14
break}i=s.a
k=i.y.F(0,new A.d(n*l,m*l))
f=j.a(i).Q.f.gcJ().gN(0)
if(!f.q())A.a_(A.cE())
s.o1(B.bE,o,f.gH(),k)
r=15
return a.b=B.a3,1
case 15:s.hb(k)
r=16
return a.b=B.a3,1
case 16:case 13:++l
r=12
break
case 14:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
t(a){return A.J(this.a)+" spears "+this.y.t(0)}}
A.mo.prototype={}
A.mp.prototype={}
A.ll.prototype={
gM(){return"Whip Crack"},
gW(){return"TODO"},
e8(a,b){return 3},
f5(a,b){var s,r,q,p,o,n,m,l,k=a.x
k===$&&A.b()
k=k.w.C(b.gm(),b.gn())
s=a.y
r=s.Q
q=r.f.gcJ()
p=A.a6(q,q.$ti.h("k.E"))
o=s.eO(k)
n=A.dT()
for(k=p.length,m=0;m<k;++m){if(p[m].a.r!=="whip")continue
if(!(m<o.length))return A.c(o,m)
n.b=o[m]
break}l=r.z.bN($.uP())
n.fX().cL(A.v(l,1,15,1,3),"whip mastery")
return A.tC(b,n.fX(),!0,3)},
gbA(){return this.a}}
A.mx.prototype={}
A.iK.prototype={
gaV(){return!1},
V(){var s,r,q=this
while(q.y<6){s={}
s.a=!1
r=new A.ne(s,q)
q.z=r.$2(q.z,1)
q.Q=r.$2(q.Q,-1)
if(s.a)return B.a3
q.y+=0.1}return B.n}}
A.ne.prototype={
$2(a,b){var s,r
if(!a)return!1
s=new A.nf(this.a,this.b,b)
r=!s.$2(0,0)||!1
if(s.$2(-0.1,0))r=!1
if(s.$2(0.1,0))r=!1
if(s.$2(0,-0.1))r=!1
return!(s.$2(0,0.1)?!1:r)},
$S:51}
A.nf.prototype={
$2(a,b){var s,r=this.b,q=r.y,p=r.e.F(0,new A.d(B.e.O(r.f*q+a),B.e.O(r.r*q+b)).aH(0,this.c))
q=r.c
q===$&&A.b()
q=q.x
q===$&&A.b()
q=q.f.C(p.a,p.b)
s=$.U()
if((q.a.e.a&s.a)===0)return!1
if(r.x.j(0,p)){r.jZ(r.w,p,r.y,$.m().bp(30,40))
this.a.a=!0}return!0},
$S:53}
A.lw.prototype={}
A.iO.prototype={
gaz(){var s=this.at
return s==null?this.Q.gaz():s},
kq(a,b){var s=this.Q.gb1()
this.o0(B.bq,b.S(0,a).gkg(),s,b)},
hD(a,b){var s=this
s.Q.dY(s,s.a,b,s.as)
return!0}}
A.fE.prototype={
geZ(){return 1},
V(){var s,r,q=this,p=q.geZ(),o=q.gcX()
if(q.gbe().a<=0){s=q.gbe()
s.a=o
s.b=p
q.d3()
return B.n}if(q.gbe().b>=p){o=B.c.A(B.c.cb(o*p,q.gbe().b),2)
if(o===0)return q.ei()
q.gbe().a+=o
q.d4()
return B.n}r=B.c.cb(q.gbe().a*q.gbe().b,p)
s=q.gbe()
s.a=r+B.c.A(o,2)
s.b=p
q.f6()
return B.n},
f6(){}}
A.ey.prototype={
gbe(){return this.a.f},
geZ(){return this.x},
gcX(){return this.y},
d3(){return this.Y("{1} start[s] moving faster.",this.a)},
d4(){return this.Y("{1} [feel]s the haste lasting longer.",this.a)},
f6(){return this.Y("{1} move[s] even faster.",this.a)}}
A.ew.prototype={
gbe(){return this.a.c},
V(){this.jI($.c9())
return this.lb()},
geZ(){return 1+B.c.A(this.x,40)},
gcX(){var s=this.x
return 3+$.m().cH(s*2,B.c.A(s,2))},
d3(){return this.Y("{1} [are|is] frozen!",this.a)},
d4(){return this.Y("{1} feel[s] the cold linger!",this.a)},
f6(){return this.Y("{1} feel[s] the cold intensify!",this.a)}}
A.eQ.prototype={
gbe(){return this.a.w},
geZ(){return 1+B.c.A(this.x,20)},
gcX(){var s=this.x
return 1+$.m().cH(s,B.c.A(s,2))},
d3(){return this.Y("{1} [are|is] poisoned!",this.a)},
d4(){return this.Y("{1} feel[s] the poison linger!",this.a)},
f6(){return this.Y("{1} feel[s] the poison intensify!",this.a)}}
A.ed.prototype={
gbe(){return this.a.b},
gcX(){var s=this.x
return 3+$.m().cH(s*2,B.c.A(s,2))},
d3(){this.Y("{1 his} vision dims!",this.a)
var s=this.c
s===$&&A.b()
s=s.x
s===$&&A.b()
s.gav().w=!0},
d4(){return this.Y("{1 his} vision dims!",this.a)}}
A.en.prototype={
gbe(){return this.a.d},
gcX(){var s=this.x
return 3+$.m().cH(s*2,B.c.A(s,2))},
d3(){return this.Y("{1} [are|is] dazzled by the light!",this.a)},
d4(){return this.Y("{1} [are|is] dazzled by the light!",this.a)}}
A.eX.prototype={
gbe(){return this.a.fb(this.y)},
gcX(){return this.x},
d3(){var s,r,q=this
q.Y("{1} [are|is] resistant to "+q.y.t(0)+".",q.a)
s=q.a
r=s.w
if(r.a>0){r.b=r.a=0
q.Y("{1} [are|is] no longer poisoned.",s)}},
d4(){return this.Y("{1} feel[s] the resistance extend.",this.a)}}
A.lP.prototype={}
A.ep.prototype={
aJ(){return"DetectType."+this.b}}
A.eo.prototype={
glO(){var s,r=this,q=r.r
if(q===$){s=r.lN()
r.r!==$&&A.e7()
r.r=s
q=s}return q},
gaV(){return!1},
V(){var s,r,q=this.glO()
if(q.length===0)return B.n
for(q=J.ao(B.a.kC(q));q.q();){s=q.gH()
r=this.c
r===$&&A.b()
r=r.x
r===$&&A.b()
r.cY(s.gm(),s.gn(),!0)
this.h9(B.bs,s)}return B.a3},
lN(){var s,r,q,p,o,n,m,l,k=this,j={},i=A.D(t.S,t.A),h=new A.ny(k,i),g=k.e,f=0
if(g.G(0,B.as)){s=k.c
s===$&&A.b()
r=s.x
r===$&&A.b()
r=A.aa(r.f.b)
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
if(m.a.b!==B.bg)continue;++f
h.$1(new A.d(q,p))}}j.a=0
if(g.G(0,B.aw)){g=k.c
g===$&&A.b()
g=g.x
g===$&&A.b()
g.hs(new A.nA(j,k,h))}if(f>0){g=j.a
s=k.a
if(g>0)k.Y("{1} sense[s] hidden secrets in the dark!",s)
else k.Y("{1} sense[s] places to escape!",s)}else if(j.a>0)k.Y("{1} sense[s] the treasures held in the dark!",k.a)
else k.l4("The darkness holds no secrets.")
g=i.$ti.h("b0<1>")
l=A.a6(new A.b0(i,g),g.h("k.E"))
B.a.df(l,new A.nB())
g=A.M(l)
s=g.h("aN<1,C<d>>")
g=A.a6(new A.aN(l,g.h("C<d>(1)").a(new A.nC(i)),s),s.h("aF.E"))
return g}}
A.ny.prototype={
$1(a){var s=this.a,r=s.a.y.S(0,a).gaE()
s=s.f
if(s!=null)s=r>s*s
else s=!1
if(s)return
s=this.b
s.b7(r,new A.nz())
s=s.p(0,r)
s.toString
J.uU(s,a)},
$S:11}
A.nz.prototype={
$0(){return A.a([],t.l)},
$S:42}
A.nA.prototype={
$2(a,b){var s=this.b.c
s===$&&A.b()
s=s.x
s===$&&A.b()
if(s.f.C(b.gm(),b.gn()).r)return;++this.a.a
this.c.$1(b)},
$S:21}
A.nB.prototype={
$2(a,b){A.w(a)
return B.c.ai(A.w(b),a)},
$S:41}
A.nC.prototype={
$1(a){var s=this.a.p(0,A.w(a))
s.toString
return s},
$S:72}
A.er.prototype={
V(){var s=this,r=t.V,q=r.a(s.a),p=q.ay
if(p===400)s.Y("{1} [are|is] already full!",q)
else if(p+s.e>400)s.Y("{1} [are|is] stuffed!",q)
else s.Y("{1} feel[s] satiated.",q)
r=r.a(s.a)
r.ay=B.c.P(r.ay+s.e,0,400)
return B.n}}
A.fK.prototype={
jZ(a,b,c,d){var s,r,q=this
q.nX(B.br,a.gb1(),b)
s=q.c
s===$&&A.b()
s=s.x
s===$&&A.b()
s=s.w.C(b.gm(),b.gn())
if(s!=null&&s!==q.a)a.dY(q,q.a,s,!1)
r=a.gb1().r.$4(b,a,c,d)
if(r!=null)q.h7(r)},
jY(a,b,c){return this.jZ(a,b,c,0)}}
A.eg.prototype={
V(){var s,r
this.jI($.b4())
s=this.a
r=s.c
if(r.a>0){r.b=r.a=0
return this.cq("The fire warms {1} back up.",s)}return B.n}}
A.eh.prototype={
V(){var s,r,q=this,p=q.e,o=$.b4(),n=q.r+q.hg(p,o),m=q.c
m===$&&A.b()
s=m.x
s===$&&A.b()
p=s.f.C(p.gm(),p.gn())
s=p.a
r=$.ts().p(0,s)
if(r==null)r=0
if(n<=0)s=r>0&&q.f>$.m().T(r)
else s=!0
if(s){s=p.a
s=$.uG().p(0,s)
n+=s==null?0:s
s=$.m().bp(B.c.A(n,2),n)
p.x=s
s-=B.c.A(q.f,4)
p.x=s
if(s<=0)p.x=1
p.w=o
p=m.x
p===$&&A.b()
p.gav().f=!0}return B.n}}
A.iR.prototype={
V(){var s,r,q=this,p=q.c
p===$&&A.b()
s=p.x
s===$&&A.b()
r=q.e
s=s.w.C(r.gm(),r.gn())
if(s!=null)A.bD(A.ba(new A.aG(A.aO("fire",B.w,B.aF).a6(1)),"burns",10,$.b4(),null)).dY(q,null,s,!1)
p=p.x
p===$&&A.b()
p=p.f.C(r.gm(),r.gn())
p.x=p.x+q.hg(r,$.b4())
return B.n}}
A.ex.prototype={
V(){this.hg(this.e,$.c9())
return B.n}}
A.eR.prototype={
V(){var s,r=this.c
r===$&&A.b()
r=r.x
r===$&&A.b()
s=this.e
s=r.f.C(s.gm(),s.gn())
if(s.w===$.b4()&&s.x>0)return B.n
r=$.U()
if((s.a.e.a&r.a)!==0){s.w=$.bz()
s.x=B.c.P(s.x+this.f*4,0,255)}return B.n}}
A.kx.prototype={
V(){var s,r=this,q=r.c
q===$&&A.b()
q=q.x
q===$&&A.b()
s=r.e
s=q.w.C(s.gm(),s.gn())
if(s!=null){q=$.bz()
if(s.c5(q)>0)r.Y("{1} [are|is] unaffected by the poison.",s)
else A.bD(A.ba(new A.aG(A.aO("poison",B.w,B.aF).a6(1)),"chokes",r.f,q,null)).dY(r,null,s,!1)}return B.n}}
A.f8.prototype={
gaV(){return!1},
V(){var s,r,q=this,p=q.a,o=(p.gb4().a&$.U().a)!==0?6:3,n=p.gb4(),m=$.bM(),l=q.c
l===$&&A.b()
s=l.x
s===$&&A.b()
m=A.ck(s,p.y,new A.ad(n.a&~m.a),null,null,o).gcD()
n=m.$ti
p=n.h("aj<k.E>")
r=A.a6(new A.aj(m,n.h("B(k.E)").a(new A.r8(q)),p),p.h("k.E"))
if(r.length===0)return B.bj
q.Y("{1} [are|is] thrown by the wind!",q.a)
p=q.a
q.js(B.bH,p,p.y)
p=q.a
p.toString
n=$.m()
t.A.a(r)
n=n.T(r.length)
if(!(n>=0&&n<r.length))return A.c(r,n)
p.dc(l,t.u.a(r[n]))
return B.n}}
A.r8.prototype={
$1(a){var s
t.u.a(a)
s=this.a.c
s===$&&A.b()
s=s.x
s===$&&A.b()
return s.w.C(a.gm(),a.gn())==null},
$S:2}
A.eG.prototype={
V(){var s,r,q=this.c
q===$&&A.b()
s=q.x
s===$&&A.b()
r=this.e
s.f.C(r.gm(),r.gn()).nV(this.f)
q=q.x
q===$&&A.b()
q.gav().f=!0
return B.n}}
A.ly.prototype={}
A.lz.prototype={}
A.lA.prototype={}
A.lQ.prototype={}
A.ma.prototype={}
A.mb.prototype={}
A.jr.prototype={
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
n.r!==$&&A.aq()
n.r=m
m=m.gcD()
s=m.$ti
r=s.h("hF<k.E>")
m=A.a6(new A.hF(m,s.h("B(k.E)").a(new A.o7(n)),r),r.h("k.E"))
n.w=m}s=n.r
s===$&&A.b()
m=s.ci(B.a.gaC(m))
m.toString
for(q=0;r=n.w,q<r.length;++q)if(s.ci(r[q])!==m)break
s=n.w
s.toString
s=B.a.fp(s,0,q)
r=s.length
p=n.f
o=0
for(;o<s.length;s.length===r||(0,A.p)(s),++o)n.jY(p,s[o],m)
m=n.w
m.toString
m=B.a.la(m,q)
n.w=m
if(m.length===0)return B.n
return B.a3}}
A.o7.prototype={
$1(a){var s,r
t.u.a(a)
s=this.a
r=s.r
r===$&&A.b()
r=r.ci(a)
r.toString
return r<=s.f.gaz()},
$S:2}
A.ev.prototype={
V(){var s=this
return s.bd(A.o6(s.a.y,A.bD(s.e),s.f,null))}}
A.eu.prototype={
V(){var s=this
return s.bd(A.o6(s.f,A.bD(s.e),s.r,null))}}
A.lO.prototype={}
A.ez.prototype={
V(){var s=this,r=s.a,q=r.w,p=q.a>0&&s.f
if(p){q.b=q.a=0
s.Y("{1} [are|is] cleansed of poison.",r)}r=s.a
if(r.z!==r.gbo()&&s.e>0){r=s.a
q=s.e
r.z=B.c.P(r.z+q,0,r.gbo())
s.nW(B.bv,s.a,q)
s.Y("{1} feel[s] better.",s.a)
p=!0}if(p)return B.n
else return s.cq("{1} [don't|doesn't] feel any different.",s.a)}}
A.jH.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i=this
i.Y("{1} "+i.f+"!",i.a)
i.ct(B.bx,i.a)
s=i.c
s===$&&A.b()
r=s.x
r===$&&A.b()
r=r.b
q=r.length
p=t.B
o=i.e
n=0
for(;n<r.length;r.length===q||(0,A.p)(r),++n){m=r[n]
l=i.a
if(m!==l&&m instanceof A.ac&&m.y.S(0,p.a(l).y).e9(0,o)){k=s.x
k===$&&A.b()
l=l.y
j=m.y
j=k.geE().pq(l,j)
j=m.ch+j*m.Q.x
m.ch=j
m.ch=B.e.P(j,0,1)}}return B.n}}
A.jK.prototype={
kw(a){this.hH(a,0)},
hH(a,b){var s,r,q=this.c
q===$&&A.b()
s=q.x
s===$&&A.b()
s=s.f.C(a.gm(),a.gn())
r=A.k0(3)
s.f=Math.max(s.f,r)
q=q.x
q===$&&A.b()
q.gav().f=!0},
gaz(){return this.at}}
A.eA.prototype={
gaV(){return!1},
V(){var s,r,q=this,p=q.c
p===$&&A.b()
s=p.x
s===$&&A.b()
r=q.a.y
r=s.f.C(r.gm(),r.gn())
s=A.k0(3)
r.f=Math.max(r.f,s)
p=p.x
p===$&&A.b()
p.gav().f=!0
p=q.a.y
s=new A.jK(q.e,p,p,A.be(t.u),A.a([],t.gk))
s.ic(p,p,1)
return q.bd(s)}}
A.eH.prototype={
gnA(){var s,r=this,q=r.w
if(q===$){s=r.mg()
r.w!==$&&A.e7()
r.w=s
q=s}return q},
gaV(){return!1},
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(s=f.f,r=0;r<2;++r){q=f.r
p=f.gnA()
o=p.length
if(q>=o)return B.n
q=f.r
if(!(q<o))return A.c(p,q)
q=p[q]
p=q.length
n=0
for(;n<q.length;q.length===p||(0,A.p)(q),++n){m=q[n]
o=f.c
o===$&&A.b()
l=o.x
l===$&&A.b()
l.cY(m.gm(),m.gn(),!0)
f.h9(B.bz,m)
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
k.gav().f=!0}for(l=m.gbP(),k=l.length,h=0;h<l.length;l.length===k||(0,A.p)(l),++h){g=l[h]
j=o.x
j===$&&A.b()
j.cY(g.a,g.b,!0)}}++f.r}return B.a3},
mg(){var s,r,q,p,o,n,m=this,l=t.l,k=A.a([A.a([],l)],t.G)
if(0>=k.length)return A.c(k,0)
B.a.j(k[0],m.a.y)
s=m.c
s===$&&A.b()
s=s.x
s===$&&A.b()
r=m.a.y
q=m.e
p=new A.k7(q,s,r,new A.cg(A.a([],t.c),t.r),A.a([],l))
p.fu(s,r,q)
for(s=p.gcD(),r=s.$ti,s=new A.ag(s.a(),r.h("ag<1>")),r=r.c;s.q();){q=s.b
if(q==null)q=r.a(q)
o=p.ci(q)
o.toString
for(n=k.length;n<=o;++n)B.a.j(k,A.a([],l))
if(!(o>=0&&o<k.length))return A.c(k,o)
B.a.j(k[o],q)}for(l=t.A,n=0;n<k.length;++n){s=$.m()
B.a.bG(l.a(k[n]),s.a)}return k}}
A.k7.prototype={
hP(a,b,c,d){var s=$.x0()
if((c.a.e.a&s.a)===0)return null
if(a>=this.r*2)return null
return d?3:2}}
A.dJ.prototype={
aJ(){return"Missive."+this.b}}
A.ka.prototype={
gdW(){return 1},
V(){var s,r=this,q=$.m(),p=B.hS.p(0,r.f)
p.toString
t.m.a(p)
s=p.length
q=q.T(s)
if(!(q>=0&&q<s))return A.c(p,q)
return r.fq(p[q],r.a,r.e)}}
A.eO.prototype={
gaV(){return!1},
V(){var s,r,q,p,o,n,m=this,l=A.be(t.f0),k=m.c
k===$&&A.b()
s=k.x
s===$&&A.b()
s=s.b
r=s.length
q=t.V
p=0
for(;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
if(o===q.a(m.a))continue
if(k.d0(o))l.j(0,o)}s=q.a(m.a).r
s.a=m.e
s.b=m.f
s=k.x
s===$&&A.b()
s=s.b
r=s.length
n=!1
p=0
for(;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
if(o===q.a(m.a))continue
if(k.d0(o)&&!l.G(0,o)){m.ct(B.bB,o)
n=!0}}k=m.a
if(n)return m.cq("{1} perceive[s] monsters beyond your sight!",k)
else return m.cq("{1} do[es]n't perceive anything.",k)}}
A.ky.prototype={
V(){var s=this,r=t.B.a(s.a),q=s.e
r.Q=q
r.z=B.c.P(B.c.P(r.z,0,q.f),0,r.gbo())
r.ax.aS(0)
r.h_()
s.ct(B.bC,s.a)
return B.n}}
A.iB.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.h7(new A.ky(g.e))
g.Y(g.r,g.a)
s=A.a([],t.l)
for(r=g.f,q=r.at,p=0;p<8;++p){o=B.a9[p]
n=g.a.y.F(0,o)
m=g.c
m===$&&A.b()
m=m.x
m===$&&A.b()
if(m.bj(n,q)){m=m.w
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
i=r.fm(s[q],t.B.a(g.a))
h=new A.cv()
i.at=h
h.a=i
q=g.c
q===$&&A.b()
q=q.x
q===$&&A.b()
q.dA(i)
g.ct(B.b_,i)}return B.n}}
A.kI.prototype={
gaV(){return!1},
ic(a,b,c){var s,r,q,p,o,n,m,l=this,k=B.e.aR(6.283185307179586*l.gaz()*c*2)
if(c<1){s=l.f
r=l.e
q=s.S(0,r)
p=!r.a0(0,s)?Math.atan2(q.a,q.b):0
for(s=k-1,r=l.x,o=6.283185307179586*c,n=0;n<k;++n)B.a.j(r,p+(n/s-0.5)*o)}else{m=6.283185307179586/k
for(s=l.x,n=0;n<k;++n)B.a.j(s,n*m)}},
V(){var s,r=this
if(r.w===0){r.kw(r.e);++r.w
return B.a3}s=r.x
B.a.hJ(s,new A.pQ(r))
if(++r.w>r.gaz()||s.length===0)return B.n
return B.a3},
kw(a){}}
A.pQ.prototype={
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
p=n.f.C(q,p)
q=$.U()
if((p.a.e.a&q.a)===0)return!0
if(!s.r.j(0,o))return!1
s.hH(o,Math.sqrt(o.S(0,r).gaE()))
return!1},
$S:74}
A.kH.prototype={
gaz(){return this.at.gaz()},
hH(a,b){this.jY(this.at,a,b)}}
A.f_.prototype={
gaV(){return!1},
V(){var s=this.a.y
return this.bd(A.tT(A.bD(this.e),s,s,1))}}
A.eZ.prototype={
gaV(){return!1},
V(){var s=this.f
return this.bd(A.tT(A.bD(this.e),s,s,1))}}
A.mh.prototype={}
A.kU.prototype={
V(){var s,r=this,q=t.B
if($.m().T(q.a(r.a).as)!==0)return B.n
q=q.a(r.a);++q.as
s=r.f.fm(r.e,q)
q=r.c
q===$&&A.b()
q=q.x
q===$&&A.b()
q.dA(s)
r.ct(B.b_,s)
return B.n}}
A.f5.prototype={
V(){var s,r,q,p,o,n,m,l=this,k=A.a([],t.l),j=l.a.y,i=l.e,h=j.gm()-i,g=j.gn()-i,f=j.gm(),e=j.gn(),d=l.c
d===$&&A.b()
s=d.x
s===$&&A.b()
for(h=A.aa(A.vH(new A.Y(new A.d(h,g),new A.d(f+i-h,e+i-g)),s.f.b));h.q();){g=h.b
f=h.c
r=new A.d(g,f)
e=d.x
e===$&&A.b()
s=l.a
q=s.cm()
if(e.bj(r,s.e.a>0?new A.ad(q.a|$.U().a):q)){s=e.w
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
for(i=g,n=0;n<10;++n,i=g){i=h.a.a_(i)
g=k.length
if(!(i>=0&&i<g))return A.c(k,i)
r=k[i]
i=l.a.y
if(r.S(0,i).bg(0,o.S(0,i)))o=r}i=l.a
m=i.y
i.dc(d,o)
l.js(B.bF,l.a,m)
return l.cq("{1} teleport[s]!",l.a)}}
A.m9.prototype={
V(){var s,r,q,p=this,o=p.c
o===$&&A.b()
s=o.x
s===$&&A.b()
r=p.e
s.f.C(r.gm(),r.gn()).a=p.giV()
p.h9(B.bA,r)
s=$.m()
q=B.e.O(A.v(o.w,1,100,p.giS(),p.giR()))
if(s.T(100)<q)p.Y("The "+p.gfT()+" is empty.",p.a)
else{s=o.x
s===$&&A.b()
s.dZ(r,p.iu(),o.w)
p.Y("{1} open[s] the "+p.gfT()+".",p.a)}return B.n}}
A.eL.prototype={
gfT(){return"barrel"},
giV(){return $.tv()},
giS(){return 40},
giR(){return 10},
iu(){var s=this.c
s===$&&A.b()
return A.a7("food",s.w,null)}}
A.eM.prototype={
gfT(){return"chest"},
giV(){return $.tw()},
giS(){return 20},
giR(){return 2},
iu(){var s=this.c
s===$&&A.b()
return A.vY(A.A([A.a7("treasure",s.w,null),0.5,A.a7("magic",s.w,null),0.2,A.a7("equipment",s.w,null),0.3],t.iZ,t.i))}}
A.jd.prototype={
gM(){return"Dual Wield"},
gW(){return"Attack with a weapon in each hand as effectively as lesser weaklings do with only a single weapon in their puny arms."},
kd(a,b,c){var s=t.aa.a(b).length
if(s===0)return c
return c/s}}
A.ju.prototype={
gM(){return"Foolhardy"},
gW(){return"An aura of good luck makes you 10% harder to hit."},
eP(a){return B.hO}}
A.fG.prototype={}
A.jw.prototype={
oi(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
if(!a1.oU(l[a].a))return!1}return!0},
p5(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
A.fC.prototype={
oU(a){var s=this.b
if(s!=null)s=(a.e.a&s.a)===0
else s=!1
if(s)return!1
s=this.c
if(s.length!==0&&!B.a.G(s,a))return!1
return!0}}
A.dh.prototype={
aJ(){return"Symmetry."+this.b}}
A.t3.prototype={
$1(a){return B.j.kJ(A.a3(a))},
$S:5}
A.nK.prototype={
$1(a){A.w(a)
return new A.f8()},
$S:80}
A.nO.prototype={
$1(a){A.w(a)
return new A.eg()},
$S:87}
A.nP.prototype={
$4(a,b,c,d){t.u.a(a)
t.Z.a(b)
A.dZ(c)
A.w(d)
return new A.eh(a,B.e.L(b.gcS()),d)},
$S:88}
A.nL.prototype={
$1(a){return new A.ew(A.w(a))},
$S:89}
A.nM.prototype={
$4(a,b,c,d){t.u.a(a)
t.Z.a(b)
A.dZ(c)
A.w(d)
return new A.ex(a)},
$S:90}
A.nS.prototype={
$1(a){return new A.eQ(A.w(a))},
$S:91}
A.nT.prototype={
$4(a,b,c,d){t.u.a(a)
t.Z.a(b)
A.dZ(c)
A.w(d)
return new A.eR(a,B.e.L(b.gcS()))},
$S:96}
A.nN.prototype={
$1(a){return new A.ed(A.w(a))},
$S:100}
A.nQ.prototype={
$1(a){return new A.en(A.w(a))},
$S:102}
A.nR.prototype={
$4(a,b,c,d){var s,r
t.u.a(a)
t.Z.a(b)
A.dZ(c)
A.w(d)
s=B.c.P(1+B.e.L(b.gcS())*4,0,255)
r=B.e.P(128+b.gcS()*16,0,255)
return new A.eG(a,B.e.L(A.v(b.gaz()-c,0,b.gaz(),s,r)))},
$S:104}
A.rf.prototype={
cp(a,b,c,d){var s=this
s.d=b
s.c=c
s.e=d
s.z=a},
bD(a,b,c){return this.cp(a,b,null,c)},
pk(a){return this.cp(a,null,null,null)},
e5(a,b,c){return this.cp(null,a,b,c)},
co(a,b){return this.cp(a,null,null,b)},
a8(a){return this.cp(null,a,null,null)},
kH(a){return this.cp(null,null,null,a)},
fd(a,b){return this.cp(null,a,null,b)}}
A.nj.prototype={
a2(a){var s,r,q,p,o=this,n="item/"+a
$.bh().c3(n)
s=A.a(a.split("/"),t.s)
r=B.a.gd1(s)
o.ay!==$&&A.aq()
o.ay=r
if(B.a.G(s,"shield")||B.a.G(s,"light"))o.at="hand"
else if(B.a.G(s,"weapon")){o.at="hand"
r=B.a.c4(s,"weapon")+1
if(!(r>=0&&r<s.length))return A.c(s,r)
o.ax=s[r]}else for(q=0;q<8;++q){p=B.hN[q]
if(B.a.G(s,p)){o.at=p
break}}$.dp().c3(n)
$.dq().c3(n)}}
A.ot.prototype={
E(a,b){var s,r=this
r.dy!==$&&A.aq()
r.dy=a
s=b==null?100:b
r.fr!==$&&A.aq()
r.fr=s},
v(a){return this.E(a,null)},
k0(a){var s
t.kc.a(a)
s=A.uX(this.Q+" intrinsic affix",null,0)
a.$1(s)
this.dx=s.ek()},
a5(a,b){var s=$.aT.u().as
s.toString
this.ay=A.ba(null,s,a,null,null)
this.cx=b},
eX(a){this.ax=new A.bF("Provides "+a+" turns of food.",t.Y.a(new A.oz(a)))},
eQ(a,b){var s,r,q
t.jP.a(a)
s=a.length
if(s===1){if(0>=s)return A.c(a,0)
r=a[0]===B.as?"exits":"items"}else r="exits and items"
q="Detects "+r
if(b!=null)q+=" up to "+A.J(b)+" steps away"
this.ax=new A.bF(q+".",t.Y.a(new A.ow(a,b)))},
hh(a){return this.eQ(a,null)},
ku(a,b){this.ax=new A.bF("Perceives the location of monsters, even those that are otherwise hidden.",t.Y.a(new A.oE(b,a)))},
hE(a){return this.ku(a,5)},
bB(a){this.ax=new A.bF("Grantes resistance to "+a.t(0)+" for 40 turns.",t.Y.a(new A.oF(a)))},
k8(a,b){var s="Imparts knowledge of the dungeon up to "+a+" steps from the hero."
if(b)s+=" Illuminates the dungeon."
this.ax=new A.bF(s,t.Y.a(new A.oD(a,b)))},
hx(a){return this.k8(a,!1)},
hu(a,b){this.ax=new A.bF("Raises speed by "+a+" for "+b+" turns.",t.Y.a(new A.oA(a,b)))},
fc(a){this.ax=new A.bF("Attempts to teleport up to "+a+" steps away.",t.Y.a(new A.oG(a)))},
dS(a,b){this.ax=new A.bF("Instantly heals "+a+" lost health.",t.Y.a(new A.oB(a,b)))},
jU(a){return this.dS(a,!1)},
dD(a,b,c,d){var s=A.ba(new A.aG(A.aO(b,B.w,B.U).a6(1)),c,d,a,3)
this.ax=new A.bF("Unleashes a ball of "+a.t(0)+" that inflicts "+d+" damage out to 3 steps from the hero.",t.Y.a(new A.ou(s)))
this.f=t.bj.a(new A.ov(s))},
dQ(a,b,c,d,e){var s={},r=A.ba(new A.aG(A.aO(b,B.w,B.U).a6(1)),c,d,a,5),q=$.aX()
s.a=q
if(e)s.a=new A.ad(q.a|$.U().a)
this.ax=new A.bF("Unleashes a flow of "+a.t(0)+" that inflicts "+d+" damage out to 5 steps from the hero.",t.Y.a(new A.ox(s,r)))
this.f=t.bj.a(new A.oy(s,r))},
jS(a,b,c,d){return this.dQ(a,b,c,d,!1)},
d2(a,b){this.r=a
if(b!=null)this.ax=new A.bF("Illuminates out to a range of "+A.J(b)+".",t.Y.a(new A.oC(b)))},
oQ(a){return this.d2(a,null)},
ek(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=A.cB($.aT.u().Q,a3.as,null),a5=a3.d
if(a5==null)a5=$.aT.u().d
if(a5!=null){s=A.aO(a3.Q.toLowerCase(),B.w,B.U).a6(1)
r=$.aT.u().as
A:{if(r!=null){q=A.vy(r,B.w)
break A}q="hits"
break A}p=a3.e
if(p==null)p=$.aT.u().e
o=a3.c
if(o==null)o=$.aT.u().c
if(o==null)o=$.aw()
n=A.ba(new A.aG(s),q,a5,o,p)
p=$.aT.u().z
s=p==null?a3.z:p
if(s==null)s=0
q=a3.f
m=new A.r1(s,n,q==null?$.aT.u().f:q)}else m=null
s=a3.db?B.ci:B.U
s=A.aO(a3.Q,B.w,s)
q=a3.dy
q===$&&A.b()
p=$.vl
$.vl=p+1
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
a2=A.D(t.h,t.S)
if(c==null)c=0
if(b==null)b=0
a2.U(0,$.aT.u().a)
a2.U(0,a3.a)
return new A.aL(s,a4,q,p,o,a0===!0,l,k,j,m,i,h,a3.at,e,d,c,a,g,a2,b,f,a1)}}
A.oz.prototype={
$0(){return new A.er(this.a)},
$S:107}
A.ow.prototype={
$0(){var s=this.a
return new A.eo(A.yw(s,A.M(s).c),this.b)},
$S:109}
A.oE.prototype={
$0(){return new A.eO(this.a,this.b)},
$S:110}
A.oF.prototype={
$0(){return new A.eX(40,this.a)},
$S:111}
A.oD.prototype={
$0(){return new A.eH(this.a,this.b)},
$S:112}
A.oA.prototype={
$0(){return A.vi(this.a,this.b)},
$S:115}
A.oG.prototype={
$0(){return A.vS(this.a)},
$S:121}
A.oB.prototype={
$0(){return A.vj(this.a,this.b)},
$S:127}
A.ou.prototype={
$0(){return A.vI(this.a)},
$S:49}
A.ov.prototype={
$1(a){return new A.eZ(this.a,a)},
$S:130}
A.ox.prototype={
$0(){return new A.ev(this.b,this.a.a)},
$S:134}
A.oy.prototype={
$1(a){return new A.eu(this.b,a,this.a.a)},
$S:135}
A.oC.prototype={
$0(){return new A.eA(this.a)},
$S:136}
A.cd.prototype={
E(a,b){this.c=a
this.d=b==null?100:b},
v(a){return this.E(a,null)},
J(a,b){var s=t.Q.a(new A.n3(a)),r=t.oF.a(new A.n4(b))
this.at=s
this.ax=r},
X(a,b,c){var s={}
s.a=c
if(c==null)s.a=a
this.f=new A.n2(s,a,b)},
b5(a,b){return this.X(a,b,null)},
p_(a){return this.X(a,null,null)},
p0(a,b){return this.X(a,null,b)},
bz(a){this.r=new A.n1(a)},
bE(a){this.w=new A.n6(a)},
dJ(a,b){t.hM.a(b)
t.lg.a(a)
if(b!=null)this.y=b
if(a!=null)this.z=a},
aA(a){return this.dJ(null,a)},
dI(a){return this.dJ(a,null)},
cg(a,b){this.Q=a
this.ay.i(0,a,new A.n0(b))},
by(a){return this.cg(a,null)},
bs(a,b){var s
t.lg.a(b)
s=this.ay
if(b!=null)s.i(0,a,b)
else s.i(0,a,new A.n5())},
R(a){return this.bs(a,null)},
ek(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a,a0=b.b
if(a0!=null){s=$.bb
r=A.bg(a,"_","["+A.J(s)+"]")
for(s=r+" (",q=r,p=1;a0.c8(q)!=null;){++p
q=s+p+")"}}else q=a
o=B.j.dO(a," _")
n=B.j.kJ(A.bg(a,"_",""))
s=$.uY
$.uY=s+1
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
if(l==null)l=A.uc()
if(k==null)k=A.mC()
if(j==null)j=A.uc()
if(i==null)i=A.mC()
if(g==null)g=A.mC()
if(h==null)h=$.aw()
if(e==null)e=A.uc()
if(f==null)f=A.mC()
c=new A.eb(q,n,o,s,m,l,k,A.mC(),j,i,g,h,A.D(t.h,d),A.D(t.X,d),f,e,b.CW)
b.ay.ae(0,c.gl_())
b.ch.ae(0,c.gl1())
return c}}
A.n3.prototype={
$1(a){return this.a},
$S:4}
A.n4.prototype={
$1(a){return this.a},
$S:18}
A.n2.prototype={
$0(){var s,r,q,p=$.m().aw(this.b,this.a.a),o=this.c
if(o!=null){s=0
for(;;){r=s+1
if(s<10){q=$.m()
q=q.a.a_(o)===0}else q=!1
if(!q)break;++p
s=r}}return p},
$S:1}
A.n1.prototype={
$1(a){A.w(a)
return this.a},
$S:18}
A.n6.prototype={
$1(a){A.w(a)
return this.a},
$S:4}
A.n0.prototype={
$1(a){var s
A.w(a)
s=this.a
return s==null?1:s},
$S:4}
A.n5.prototype={
$1(a){A.w(a)
return 1},
$S:4}
A.t2.prototype={
$1(a){A.w(a)
return this.a},
$S(){return this.b.h("0(e)")}}
A.tk.prototype={
$1(a){return this.a+A.w(a)*this.b},
$S:18}
A.fW.prototype={
aJ(){return"ItemQuality."+this.b}}
A.rh.prototype={
iO(a,b,c){var s,r,q,p,o=null
if(c.dx&&a!=null)a.e.j(0,c)
s=c.db
if(s!=null)return new A.L(c,o,o,s.fl(),1)
if(c.e==null)return new A.L(c,o,o,o,1)
r=this.j7($.dp(),c,b)
q=this.j7($.dq(),c,b)
if(r!=null&&q!=null&&$.m().T(4)!==0)if($.m().T(2)===0)r=o
else q=o
p=r==null?o:r.fl()
return new A.L(c,p,q==null?o:q.fl(),o,1)},
j7(a,b,c){var s,r
t.b_.a(a)
switch(this.b.a){case 0:s=B.ib
break
case 1:s=B.ip
break
case 2:s=B.i4
break
default:s=null}r=A.v(c,0,100,s.a,s.b)
if($.m().aO(1)>r)return null
return a.pl(c,$.bh().kY(b.a.a6(1).a))}}
A.m_.prototype={
b0(a,b,c){var s
t.f.a(c)
s=this.c
if(s.dx&&a!=null&&a.e.G(0,s))return
c.$1(this.iO(a,b,s))},
$ibr:1}
A.mt.prototype={
b0(a,b,c){t.f.a(c).$1(this.iO(a,b,this.nh(a,b)))},
nh(a,b){var s,r,q,p,o
switch(this.b.a){case 0:s=0
break
case 1:s=3
break
case 2:s=15
break
default:s=null}for(r=this.c,q=this.a,p=s;;){s=$.bh()
s=s.d9(q==null?b:q,null,r)
s.toString
o=s.dx
if(o&&a!=null&&a.e.G(0,s))continue
if(!o&&p>0){--p
continue}return s}},
$ibr:1}
A.aH.prototype={
b0(a,b,c){t.f.a(c)
if($.m().T(100)>=this.a)return
this.b.b0(a,b,c)},
$ibr:1}
A.hO.prototype={
b0(a,b,c){var s,r,q
t.f.a(c)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)s[q].b0(a,b,c)},
$ibr:1}
A.m8.prototype={
lm(a){a.ae(0,new A.rB(this))},
b0(a,b,c){var s
t.f.a(c)
s=this.a.hT(1)
if(s==null)return
s.b0(a,b,c)},
$ibr:1}
A.rB.prototype={
$2(a,b){var s,r=null
t.iZ.a(a)
A.by(b)
s=this.a.a
s.ce(s.$ti.c.a(a),r,r,r,b,b,r)},
$S:52}
A.bx.prototype={
b0(a,b,c){var s,r,q,p,o
t.f.a(c)
s=this.a
r=s>3?4:5
if(s>6)r=3
q=$.m()
p=q.cH(s,B.c.A(s,2))+q.hM(0,r)
for(s=this.b,o=0;o<p;++o)s.b0(a,b,c)},
$ibr:1}
A.jq.prototype={}
A.ti.prototype={
$1(a){a.ch.i(0,B.Z,t.Q.a(A.fp(2,t.S)))
return a},
$S:32}
A.tl.prototype={
$2(a,b){A.a3(a)
A.by(b)
this.a.i(0,A.a7(a,null,null),b)},
$S:54}
A.tm.prototype={
$1(a){a.X(8,3,12)
a.dI(A.Z())
a.ch.i(0,B.aa,t.Q.a(A.fp(2,t.S)))
a.by($.cY())
return a},
$S:32}
A.rg.prototype={
aT(a,b){var s=this
if(b==null){s.y=1
s.z=a}else{s.y=a
s.z=b}},
aN(a){return this.aT(a,null)}}
A.o5.prototype={}
A.iP.prototype={
k9(a){this.ab(new A.lx(A.aJ(a)),null,null)},
ab(a,b,c){if(c!=null){b.toString
a=new A.i5(b,c,a)}else if(b!=null)a=new A.i5(1,b,a)
B.a.j(this.fr,a)},
ah(a,b,c){B.a.j(this.db,A.ba(null,a,b,c,null))},
D(a,b){return this.ah(a,b,null)},
dM(a,b,c,d){var s=new A.aH(d,A.a7(a,this.CW+c,null))
if(b>1)s=A.um(b,s)
B.a.j(this.dy,s)},
B(a,b){return this.dM(a,1,0,b)},
hm(a,b){return this.dM(a,b,0,100)},
eR(a,b,c){return this.dM(a,b,c,100)},
ou(a,b,c){return this.dM(a,b,0,c)},
hn(a,b,c){return this.dM(a,1,b,c)},
jL(a,b,c,d){var s=new A.aH(d,A.a7(a,this.CW+c,B.hm))
if(b>1)s=A.um(b,s)
B.a.j(this.dy,s)},
ov(a,b,c){return this.jL(a,b,c,100)},
ho(a,b,c){return this.jL(a,1,b,c)},
cI(a){B.a.j(this.x,"unique")
this.fx=a
this.ch=!0},
hU(){return this.cI(null)},
kR(a,b){return this.au(null,"whips",$.aw(),a,2,b)},
bi(a,b,c,d){var s=$.fv()
this.au(s.p(0,a)[0],s.p(0,a)[1],a,b,c,d)},
c2(a,b,c,d){var s=$.fv(),r=s.p(0,a)[0]
s=s.p(0,a)[1]
if(c==null)c=10
B.a.j(this.dx,new A.d7(A.ba(new A.aG(A.aO(r,B.w,B.U).a6(1)),s,b,a,c),d))},
ht(a){B.a.j(this.dx,new A.jE(1,10,a))
return null},
oJ(){return this.ht(5)},
au(a,b,c,d,e,f){B.a.j(this.dx,new A.fB(A.ba(a!=null?new A.aG(A.aO(a,B.w,B.U).a6(1)):null,b,d,c,e),f))}}
A.lx.prototype={
cM(a,b){var s
t.or.a(b)
s=this.a.b
s===$&&A.b()
b.$1(s)},
$idM:1}
A.ab.prototype={
cM(a,b){var s,r,q
t.or.a(b)
for(s=this.a,r=0;r<10;++r){q=$.ca().d9(a,!1,s)
if(q==null)continue
if(q.ax.f)continue
b.$1(q)
break}},
$idM:1}
A.i5.prototype={
cM(a,b){var s,r,q,p,o
t.or.a(b)
s=this.b
r=s>3?4:5
if(s>6)r=3
q=$.m()
p=q.aw(this.a,s)+q.hM(0,r)
for(s=this.c,o=0;o<p;++o)s.cM(a,b)},
$idM:1}
A.lq.prototype={
cM(a,b){var s,r,q
t.or.a(b)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)s[q].cM(a,b)},
$idM:1}
A.bp.prototype={
gbl(){var s=this.b.b
s===$&&A.b()
return s.f*0.5},
bF(a,b){return!1},
i2(a,b){var s,r=a.Q,q=$.m()
if(q.aO(2)<=b/r.f)return!0
r=a.z
s=a.Q
if(q.aO(2)<=r/s.f)return!0
return!1},
bQ(a,b){var s,r=this.b.b
r===$&&A.b()
s=this.c.b
s===$&&A.b()
return new A.iB(r,s,this.d)},
t(a){var s,r=this.b.b
r===$&&A.b()
s=this.c.b
s===$&&A.b()
return"Amputate "+r.a.a+" + "+s.a.a}}
A.fB.prototype={
gbl(){var s=this.b
return s.c*s.e.e*(1+s.d/20)},
bF(a,b){var s,r,q,p
if((b.b.a>0||b.d.a>0)&&$.m().aO(1)<b.gde()){s=B.e.L(A.v(b.gde(),0,1,0,90))
if($.m().T(100)<s)return!1}r=a.y.y
q=r.S(0,b.y)
if(q.bg(0,this.b.d)){A.ch(b,"bolt move too far")
return!1}if(q.ea(0,1.5)){A.ch(b,"bolt move too close")
return!1}p=a.x
p===$&&A.b()
if(!p.oj(b,r)){A.ch(b,"bolt move can't target")
return!1}A.ch(b,"bolt move OK")
return!0},
bQ(a,b){return A.tC(a.y.y,A.bD(this.b),!1,null)},
t(a){return"Bolt "+this.b.t(0)+" rate: "+this.a}}
A.d7.prototype={
gaz(){return this.b.d},
gbl(){var s=this.b
return s.c*3*s.e.e*(1+s.d/10)},
bF(a,b){var s,r,q
if((b.b.a>0||b.d.a>0)&&$.m().aO(1)<b.gde()){s=B.e.L(A.v(b.gde(),0,1,0,70))
if($.m().T(100)<s)return!1}r=a.y.y
if(r.S(0,b.y).bg(0,this.b.d)){A.ch(b,"cone move too far")
return!1}q=a.x
q===$&&A.b()
if(!q.eM(b,r)){A.ch(b,"cone move can't target")
return!1}A.ch(b,"cone move OK")
return!0},
bQ(a,b){var s=b.y,r=a.y.y
return A.tT(A.bD(this.b),s,r,0.125)},
t(a){return"Cone "+this.b.t(0)+" rate: "+this.a}}
A.jE.prototype={
gbl(){return this.c*this.b},
bF(a,b){return b.f.a<=0},
bQ(a,b){return A.vi(this.b,this.c)},
t(a){return"Haste "+this.b+" for "+this.c+" turns rate: "+this.a}}
A.fT.prototype={
gbl(){return this.b},
bF(a,b){var s=b.z,r=b.Q.f
return s/r<0.25||r-s>=this.b},
bQ(a,b){return A.vj(this.b,!1)},
t(a){return"Heal "+this.b+" rate: "+this.a}}
A.bP.prototype={
gbl(){return this.b*0.5},
bF(a,b){var s,r,q,p,o,n=a.x
n===$&&A.b()
s=b.y
s=n.f.C(s.gm(),s.gn())
if(!(!s.b&&s.d+s.e>s.c))return!1
for(n=n.b,s=n.length,r=b.y,q=this.b,p=0;p<s;++p){o=n[p]
if(o===b)continue
if(o instanceof A.ac&&o.at instanceof A.cf&&o.y.S(0,r).e9(0,q))return!0}return!1},
bQ(a,b){var s=this.c
if(s==null)s="howls"
return new A.jH(this.b,s)},
t(a){return"Howl "+this.b}}
A.b1.prototype={
gbl(){return 0},
bF(a,b){var s,r=a.y.y
if(r.S(0,b.y).gb3()<=1)return!1
s=a.x
s===$&&A.b()
return s.eM(b,r)},
bQ(a,b){return new A.ka(a.y,this.b)},
t(a){return this.b.t(0)+" rate: "+this.a}}
A.bI.prototype={
gbl(){return 6},
bF(a,b){var s,r,q,p,o,n,m,l,k,j,i=a.x
i===$&&A.b()
s=b.y
s=i.f.C(s.gm(),s.gn())
if(!(!s.b&&s.d+s.e>s.c))return!1
for(s=b.y.gbP(),r=s.length,q=b.e,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
n=b.cm()
if(i.bj(o,q.a>0?new A.ad(n.a|$.U().a):n)){m=i.w
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
bQ(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.T,h=A.a([],i)
if(this.b)for(s=b.e,r=0;r<8;++r){q=B.a9[r]
p=a.x
p===$&&A.b()
o=b.y.F(0,q)
n=b.cm()
if(p.bj(o,s.a>0?new A.ad(n.a|$.U().a):n)){m=p.w
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
p=new A.ql(a,b,q)
if(p.$1(q.gcF()))B.a.U(h,A.a([q,q,q,q,q],i))
if(p.$1(q.gcF().gb9()))B.a.j(h,q)
if(p.$1(q.gcF().gba()))B.a.j(h,q)}if(h.length===0)for(i=b.e,r=0;r<8;++r){q=B.a9[r]
s=a.x
s===$&&A.b()
p=b.y.F(0,q)
n=b.cm()
if(s.bj(p,i.a>0?new A.ad(n.a|$.U().a):n)){o=s.w
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
return new A.kU(i.F(0,h[s]),b.Q)},
t(a){return"Spawn rate: "+this.a}}
A.ql.prototype={
$1(a){var s,r,q=this.a.x
q===$&&A.b()
s=this.b
r=s.y.F(0,this.c)
r=q.w.C(r.a,r.b)
return r!=null&&r instanceof A.ac&&r.Q===s.Q},
$S:13}
A.bu.prototype={
gbl(){return this.b*0.7},
bF(a,b){var s
if(b.at instanceof A.ct)return!0
s=a.y.y.S(0,b.y).gb3()
if(b.ay&&s<=1)return!1
return!0},
bQ(a,b){return A.vS(this.b)},
t(a){return"Teleport "+this.b}}
A.jk.prototype={
gM(){return"Fairy Dust"},
gW(){return"A sprinkle of glimmering magic dazzles all nearby foes."}}
A.jo.prototype={
gM(){return"Flitter"},
gW(){return"Take flight and soar over the ground, at least until you get tired."}}
A.kD.prototype={
gM(){return"Quick Study"},
gW(){return"Gain 20% more experience when killing a monster."},
kb(a,b,c){return c*1.2}}
A.kS.prototype={
gM(){return"Single-minded"},
gW(){return"Reduce the focus lost when performing an ability by 30%."},
kc(a,b,c){if(c===0)return 0
c=B.e.bK(c*0.7)
if(c===0)return 1
return c}}
A.d3.prototype={
bn(a){return"Cast "+this.b+" spells better."},
gM(){return this.b},
gcv(){return this.c},
gW(){return this.d}}
A.iD.prototype={
gM(){return"Archery"},
gW(){return"Kill your foe without risking harm to yourself by unleashing a volley of arrows from far away."},
gcv(){return B.aX},
bn(a){return"Scales strike by "+A.pH(A.v(a,1,15,1,3),null)+"."}}
A.iL.prototype={
gM(){return"Battle Hardening"},
gW(){return"Years of taking hits have turned your skin as hard as cured leather."},
gcv(){return B.ax},
ka(a,b){return b+a.z.bN(this)*4},
bn(a){return"Increases armor by "+a*4+"."}}
A.iM.prototype={
gM(){return"Bloodlust"},
gW(){return"The more furious you are, the more deadly in combat you become."},
gcv(){return B.ax},
hy(a,b,c,d){d.cL(A.v2(a.Q.z.bN(this))*a.CW,"Bloodlust")},
bn(a){return"Increases damage by "+A.pH(A.v2(a),1)+" for each point of fury."}}
A.h8.prototype={
gcv(){return B.aY},
hy(a,b,c,d){if(c==null||c.a.r!==this.gbu())return
d.cL(A.v(a.Q.z.bN(this),1,15,1.1,4),"mastery")},
bn(a){var s,r=A.pH(A.v(a,1,15,1.1,4)-1,null),q=this.gbu()
if(0>=q.length)return A.c(q,0)
s=B.j.G("aeiou",q[0])?"an":"a"
return"Melee attacks inflict +"+r+" damage when using "+s+" "+this.gbu()+"."}}
A.iG.prototype={
gM(){return"Axe Mastery"},
gW(){return"Axes are not just for woodcutting. In the hands of a skilled user, they can cut down a swath of nearby foes as well."},
gbu(){return"axe"},
bn(a){return"TODO"}}
A.iN.prototype={
gM(){return"Bludgeoning"},
gW(){return"Bludgeons may not be the most sophisticated of weapons, but hitting someone really hard with a blunt object can often be an effective argument in your favor."},
gbu(){return"club"},
bn(a){return this.ia(a)+" Bashes the enemy away."}}
A.jZ.prototype={
gM(){return"Knife Fighting"},
gW(){return"Small and easily concealed, knives are deadly in the hand of a skilled practitioner."},
gbu(){return"knife"},
bn(a){return"TODO"}}
A.kV.prototype={
gM(){return"Spear Mastery"},
gW(){return"Your diligent study of spears and polearms lets you attack at a distance when wielding one."},
gbu(){return"spear"},
bn(a){return"TODO"}}
A.l0.prototype={
gM(){return"Swordfighting"},
gW(){return"The most elegant tool for the most refined of martial arts."},
gbu(){return"sword"},
bn(a){return this.ia(a)+" Parrying increases dodge by "+B.e.O(A.v(a,1,15,5,30))+"."},
eP(a){return new A.R(this.ot(a),t.cn)},
ot(a){var s=this
return function(){var r=a
var q=0,p=1,o=[],n,m,l
return function $async$eP(b,c,d){if(c===1){o.push(d)
q=p}for(;;)switch(q){case 0:m=r.Q
l=m.z.bN(s)
m=m.f.gcJ(),n=J.ao(m.a),m=new A.cR(n,m.b,m.$ti.h("cR<1>"))
case 2:if(!m.q()){q=3
break}q=n.gH().a.r==="sword"?4:5
break
case 4:q=6
return b.b=new A.ay(B.e.O(A.v(l,1,15,5,30)),"{1} parr[y|ies] {2}."),1
case 6:case 5:q=2
break
case 3:return 0
case 1:return b.c=o.at(-1),3}}}}}
A.lm.prototype={
gM(){return"Whip Mastery"},
gW(){return"Whips and flails are difficult to use well, but deadly even at a distance when mastered."},
gbu(){return"whip"},
bn(a){return"TODO"}}
A.bH.prototype={
aJ(){return"Region."+this.b}}
A.na.prototype={
dE(a){return new A.R(this.of(t.jJ.a(a)),t.e)},
of(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$dE(a3,a4,a5){if(a4===1){o.push(a5)
q=p}for(;;)A:switch(q){case 0:for(n=s.b.f,m=n.b,l=A.aa(m),k=n.a,j=m.b.a,i=k.length;l.q();){h=l.b
g=l.c
n.l(h,g)
h=g*j+h
if(!(h>=0&&h<i)){A.c(k,h)
q=1
break A}k[h].a=$.fu()}f=A.xS(s.c)
d=f.length-1
for(;;){if(!(d>=0)){e=-1
break}if(f[d].w){e=d
break}--d}l=t.hY
c=A.a(B.hv.slice(0),l)
b=A.a([],l)
for(l=t.pj,d=0;d<f.length;++d)if(d===e||!f[d].w)B.a.j(b,B.cp)
else B.a.j(b,$.m().kF(0,c,l))
d=0
case 3:if(!(d<f.length)){q=5
break}l=f[d]
if(!(d<b.length)){A.c(b,d)
q=1
break}h=b[d]
a0=l.r.$0()
a0.a!==$&&A.aq()
a0.a=s
a0.b!==$&&A.aq()
a0.b=l
a0.c!==$&&A.aq()
a0.c=h
q=6
return a3.aK(a0.aY())
case 6:case 4:++d
q=3
break
case 5:for(m=J.ao(m.kI());m.q();){l=m.gH()
h=l.gm()
l=l.gn()
n.l(h,l)
h=l*j+h
if(!(h>=0&&h<i)){A.c(k,h)
q=1
break A}k[h].a=$.bA()}a1=A.a([],t.l)
q=7
return a3.aK(s.iE(a1))
case 7:q=8
return a3.aK(s.ih(a1))
case 8:q=9
return a3.aK(s.ip(a1))
case 9:q=10
return a3.b="Ready to decorate",1
case 10:a2=new A.nq(s,A.D(t.aT,t.A),A.be(t.P))
q=11
return a3.aK(a2.jH())
case 11:n=a2.b
n===$&&A.b()
r.$1(n)
case 1:return 0
case 2:return a3.c=o.at(-1),3}}}},
dm(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.b.f,f=g.C(b,c)
f.a=d==null?$.d0():d;++this.e
f=this.d
f.aW(b,c,a)
for(s=f.b,r=g.a,q=g.b.b.a,p=r.length,o=f.$ti.c,n=f.a,m=s.b.a,l=0;l<8;++l){k=B.a9[l]
j=k.c+b
i=k.d+c
if(s.G(0,new A.d(j,i))){g.l(j,i)
h=i*q+j
if(!(h>=0&&h<p))return A.c(r,h)
h=r[h].a!==$.dw()}else h=!1
if(h){o.a(a)
f.l(j,i)
B.a.i(n,i*m+j,a)}}},
dk(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b.f,c=d.b
if(!c.G(0,b))return!1
s=this.d
r=b.a
q=b.b
if(s.C(r,q)!=null)return!1
if(d.C(r,q).a===$.dw())return!1
for(r=b.gbP(),q=r.length,p=s.a,o=s.b.b.a,n=p.length,m=d.a,l=c.b.a,k=m.length,j=0;j<q;++j){i=r[j]
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
iE(a){return new A.R(this.m9(t.A.a(a)),t.e)},
m9(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
return function $async$iE(b2,b3,b4){if(b3===1){o.push(b4)
q=p}for(;;)A:switch(q){case 0:b0=t.l
b1=A.a([],b0)
for(n=s.b,m=n.f,l=m.b,k=A.aa(l.bL(-1)),j=m.a,i=l.b,h=i.a,g=j.length,l=l.a,f=l.a,e=f+h,l=l.b,i=i.b,d=l+i,c=0,b=B.ak,a0=99999;k.q();){a1=k.b
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
b=a3}}else if(!(a4!==$.fu()&&a4!==$.dw()))B.a.j(b1,a3)}l=$.m()
B.a.bG(t.A.a(b1),l.a)
l=t.S
k=h*i
f=A.an(k,-2,!1,l)
e=t.z
d=new A.a8(f,new A.Y(new A.d(0,0),new A.d(h,i)),e)
a6=new A.pR(n,b,d,new A.lh(new A.a8(A.an(k,0,!1,l),new A.Y(new A.d(0,0),new A.d(h,i)),e),h,i),B.ca)
a6.cf(b,0)
a6.j1(A.a([b],b0))
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
i=l===$.fu()
if(!i&&l!==$.dw()){q=4
break}if(i)n.a=$.bA()
else if(l===$.dw())n.a=$.dv()
n=a3.gm()
l=a3.gn()
d.l(n,l)
n=l*h+n
if(!(n>=0&&n<k)){A.c(f,n)
q=1
break}n=f[n]
if(typeof n!=="number"){n.cK()
q=1
break}if(!(n>=0)){q=4
break}a6.oB(a3)
if(a6.e!==c){s.iP(r,a3)
a6.pn()}a9=a7+1
q=B.c.ad(a7,20)===0?6:7
break
case 6:q=8
return b2.b=a3.t(0),1
case 8:case 7:a7=a9
case 4:b1.length===b0||(0,A.p)(b1),++a8
q=3
break
case 5:case 1:return 0
case 2:return b2.c=o.at(-1),3}}}},
ih(a){return new A.R(this.lr(t.A.a(a)),t.e)},
lr(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3
return function $async$ih(a4,a5,a6){if(a5===1){o.push(a6)
q=p}for(;;)A:switch(q){case 0:a3=A.a([],t.hw)
for(n=s.b.f,m=n.b,l=A.aa(m.bL(-1)),k=n.a,m=m.b.a,j=k.length;l.q();){i=l.b
h=l.c
g=new A.d(i,h)
n.l(i,h)
i=h*m+i
if(!(i>=0&&i<j)){A.c(k,i)
q=1
break A}f=k[i].a
i=$.d0()
if(!(f===i||f===$.d1()||f===$.ft()))continue
for(e=0;e<4;++e){d=B.at[e]
h=g.F(0,d.gbC())
c=h.a
h=h.b
n.l(c,h)
c=h*m+c
if(!(c>=0&&c<j)){A.c(k,c)
q=1
break A}f=k[c].a
if(!(f===i||f===$.d1()||f===$.ft()))continue
h=g.F(0,d.gb9())
c=h.a
h=h.b
n.l(c,h)
c=h*m+c
if(!(c>=0&&c<j)){A.c(k,c)
q=1
break A}f=k[c].a
h=$.bA()
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
h=g.F(0,d.gbR())
c=h.a
h=h.b
n.l(c,h)
c=h*m+c
if(!(c>=0&&c<j)){A.c(k,c)
q=1
break A}f=k[c].a
if(!(f===i||f===$.d1()||f===$.ft()))continue
B.a.j(a3,new A.i4(g,d))}}n=$.m()
B.a.bG(t.pa.a(a3),n.a)
a0=n.bp(5,40)
n=a3.length,a1=0,e=0
case 3:if(!(e<a3.length)){q=5
break}a2=a3[e]
if(!s.nK(r,a2.a,a2.b)){q=4
break}q=6
return a4.b="Shortcut",1
case 6:++a1
if(a1>=a0){q=5
break}case 4:a3.length===n||(0,A.p)(a3),++e
q=3
break
case 5:case 1:return 0
case 2:return a4.c=o.at(-1),3}}}},
nK(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(h===$.d0()||h===$.d1()||h===$.ft()){p=s.length
o=$.m()
if(!new A.rz(p*2+(o.a.a_(8)+8),q,b,k).fi()){for(q=s.length,g=0;g<s.length;s.length===q||(0,A.p)(s),++g)this.iP(a,s[g])
return!0}return!1}j=k.F(0,c.gbC())
i=j.a
j=j.b
p.l(i,j)
i=j*m+i
if(!(i>=0&&i<l))return A.c(o,i)
h=o[i].a
j=$.bA()
if(!(h===j||h===$.dv()))return!1
i=k.F(0,c.gbR())
f=i.a
i=i.b
p.l(f,i)
f=i*m+f
if(!(f>=0&&f<l))return A.c(o,f)
h=o[f].a
if(!(h===j||h===$.dv()))return!1
j=$.m()
i=s.length
if(j.a.a_(100)<i*10)return!1}},
iP(a,b){var s,r,q
t.A.a(a)
s=this.b.f.C(b.gm(),b.gn())
r=s.a
if(r===$.bA())s.a=$.d1()
else if(r===$.dv())s.a=$.ft()
q=this.d.C(b.gm(),b.gn())
if(q==null)B.a.j(a,b)
else this.io(b,q)},
ip(a){return new A.R(this.lE(t.A.a(a)),t.e)},
lE(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3,a4,a5,a6
return function $async$ip(a7,a8,a9){if(a8===1){o.push(a9)
q=p}for(;;)A:switch(q){case 0:n=s.d,m=n.a,l=n.b.b.a,k=m.length,j=t.dr,i=n.$ti.c,h=t.hA,g=t.l
case 3:f=A.a([],g)
for(e=r.length,d=0;d<r.length;r.length===e||(0,A.p)(r),++d){c=r[d]
b=A.a([],j)
for(a0=c.gbP(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,A.p)(a0),++a2){a3=a0[a2]
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
a0=a1.a.a_(a0)
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
for(s=a.gbP(),r=s.length,q=this.d,p=q.a,o=q.b.b.a,n=p.length,m=q.$ti.c,l=0;l<s.length;s.length===r||(0,A.p)(s),++l){k=s[l]
j=k.a
i=k.b
q.l(j,i)
h=i*o+j
if(!(h>=0&&h<n))return A.c(p,h)
if(p[h]==null){m.a(b)
q.l(j,i)
B.a.i(p,h,b)}}}}
A.i4.prototype={}
A.bd.prototype={
gf7(){return $.uz()},
fn(a){return!1}}
A.rz.prototype={
hG(a){if(a.c>=this.d)return!1
return null},
hI(a){return!0},
fo(a,b){var s=$.bN()
if((b.a.e.a&s.a)!==0)return 1
return null},
hV(){return!1}}
A.fz.prototype={}
A.t1.prototype={
$0(){return new A.eq(this.a)},
$S:56}
A.rZ.prototype={
$0(){return new A.ei(0.3,8,32)},
$S:57}
A.t_.prototype={
$0(){return new A.ej()},
$S:58}
A.td.prototype={
$0(){return new A.eF()},
$S:59}
A.tj.prototype={
$0(){return new A.f0()},
$S:60}
A.tc.prototype={
$0(){return A.yt(5)},
$S:61}
A.tg.prototype={
$0(){var s=A.a([],t.l)
return new A.eP(this.a,12,24,s)},
$S:62}
A.ei.prototype={
aY(){return new A.R(this.o7(),t.e)},
o7(){var s=this
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
break}h=A.ng(B.e.L(Math.pow($.m().aB(l,m),2)))
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
a4=a.a_(a3-a0)
r=s.lB(h,a4+a0,a.a_(a2-a1)+a1)?7:8
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
lB(a,b,c){var s,r,q,p,o,n,m,l,k=this
t.b.a(a)
for(s=a.b,r=A.aa(s),q=a.a,p=s.b.a,o=q.length;r.q();){n=r.b
m=r.c
a.l(n,m)
l=m*p+n
if(!(l>=0&&l<o))return A.c(q,l)
if(q[l]){l=k.a
l===$&&A.b()
if(!l.dk(k,new A.d(n+b,m+c)))return!1}}for(s=A.aa(s);s.q();){r=s.b
n=s.c
a.l(r,n)
m=n*p+r
if(!(m>=0&&m<o))return A.c(q,m)
if(q[m]){m=k.a
m===$&&A.b()
m.dm(k,r+b,n+c,null)}}return!0}}
A.ej.prototype={
aY(){return new A.R(this.o8(),t.e)},
o8(){var s=this
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
for(o=A.aa(l);o.q();){m=o.b
l=o.c
f=new A.d(m,l)
if(!a8.dk(s,f))continue
k=$.m().aO(1)
i=s.c
i===$&&A.b()
i=s.lL(i,f)
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
for(a1=new A.d(b,a).gbP(),a2=a1.length,a3=0,a4=0;a4<a1.length;a1.length===a2||(0,A.p)(a1),++a4){a5=a1[a4]
if(o.G(0,a5)){a6=a5.a
a7=a5.b
h.l(a6,a7)
a6=a7*i+a6
if(!(a6>=0&&a6<c)){A.c(j,a6)
r=1
break A}a6=!J.ax(j[a6],!1)}else a6=!0
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
case 5:for(o=h.b,n=A.aa(o),m=h.a,o=o.b.a,l=m.length;n.q();){k=n.b
j=n.c
h.l(k,j)
i=j*o+k
if(!(i>=0&&i<l)){A.c(m,i)
r=1
break A}if(J.ax(m[i],!1))a8.dm(s,k,j,null)}case 1:return 0
case 2:return a9.c=p.at(-1),3}}}},
lL(a,b){var s,r,q,p=this
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
A.nq.prototype={
jH(){return new A.R(this.or(),t.e)},
or(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
return function $async$jH(a0,a1,a2){if(a1===1){p.push(a2)
r=q}for(;;)A:switch(r){case 0:s.mc()
for(o=s.a,n=o.b,m=n.f,l=m.b,k=A.aa(l),o=o.d,j=o.a,i=o.b.b.a,h=j.length,g=s.c;k.q();){f=k.b
e=k.c
o.l(f,e)
d=e*i+f
if(!(d>=0&&d<h)){A.c(j,d)
r=1
break A}J.uU(g.b7(j[d],new A.nu()),new A.d(f,e))}s.n_()
r=3
return a0.aK(s.iY())
case 3:c=$.m().bp(2,4)
for(o=m.a,l=l.b.a,k=o.length,b=0;b<c;++b){a=n.jQ()
j=a.a
i=a.b
m.l(j,i)
j=i*l+j
if(!(j>=0&&j<k)){A.c(o,j)
r=1
break A}o[j].a=$.uM()}o=n.jQ()
s.b!==$&&A.aq()
s.b=o
r=4
return a0.aK(s.j9())
case 4:r=5
return a0.aK(s.iC())
case 5:case 1:return 0
case 2:return a0.c=p.at(-1),3}}}},
mc(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.a([],t.l)
for(s=this.a.b.f,r=s.b,q=A.aa(r.bL(-1)),p=s.a,r=r.b.a,o=p.length;q.q();){n=q.b
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
g=l.F(0,i.gcF())
f=g.a
g=g.b
s.l(f,g)
f=g*r+f
if(!(f>=0&&f<o))return A.c(p,f)
e=p[f].a
if(e!==h&&e!==$.d1()&&e!==$.mM())continue
h=l.F(0,i.gbC())
g=h.a
h=h.b
s.l(g,h)
g=h*r+g
if(!(g>=0&&g<o))return A.c(p,g)
g=p[g].a
h=$.bA()
if(g!==h)continue
g=l.F(0,i.gbR())
f=g.a
g=g.b
s.l(f,g)
f=g*r+f
if(!(f>=0&&f<o))return A.c(p,f)
if(p[f].a!==h)continue
s.l(n,m)
p[k].a=$.mM()
B.a.j(a,l)
break}}q=$.m()
B.a.bG(t.A.a(a),q.a)
for(q=a.length,j=0;j<a.length;a.length===q||(0,A.p)(a),++j){d=a[j]
n=d.gm()
m=d.gn()
s.l(n,m)
n=m*r+n
if(!(n>=0&&n<o))return A.c(p,n)
n=p[n].a
m=$.mM()
if(n!==m)continue
for(n=d.gdF(),k=n.length,c=0;c<n.length;n.length===k||(0,A.p)(n),++c){b=n[c]
h=b.a
g=b.b
s.l(h,g)
h=g*r+h
if(!(h>=0&&h<o))return A.c(p,h)
if(p[h].a===m){h=$.m()
h=h.a.a_(2)===0?d:b
g=h.gm()
h=h.gn()
s.l(g,h)
g=h*r+g
if(!(g>=0&&g<o))return A.c(p,g)
p[g].a=$.d1()}}}},
n_(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(s=this.c,s=new A.bj(s,A.y(s).h("bj<1,2>")).gN(0),r=this.a;s.q();){q=s.d
p=q.a
o=$.uz()
if(p!=null)o=p.gf7()
n=new A.hh(this,r,p)
for(m=J.ao(q.b),l=r.b.f,k=l.a,j=l.b.b.a,i=k.length;m.q();){h=m.gH()
g=o.oZ(n,h)
f=h.gm()
h=h.gn()
l.l(f,h)
f=h*j+f
if(!(f>=0&&f<i))return A.c(k,f)
k[f].a=g;++n.d}}},
iY(){return new A.R(this.n1(),t.e)},
n1(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
return function $async$iY(a5,a6,a7){if(a6===1){p.push(a7)
r=q}for(;;)switch(r){case 0:o=s.c,o=new A.bj(o,A.y(o).h("bj<1,2>")).gN(0),n=s.a,m=n.c,l=t.A
case 3:if(!o.q()){r=4
break}k=o.d
j=k.a
if(j==null){r=3
break}i=J.uW(k.b)
h=$.m()
B.a.bG(l.a(i),h.a)
g=new A.hh(s,n,j)
f=i.length
e=j.b
e===$&&A.b()
f*=e.c
d=B.e.bK(f)
if(h.aO(1)<f-d)++d
c=B.e.aR(h.aB(d*0.8,d*1.2))
b=0
case 5:a=b+1
if(!(b<c&&g.d<c)){r=6
break}a0=A.y5(m,e.b)
if(a0==null){r=7
break}a1=0
case 8:if(!(a1<i.length)){r=10
break}a2=i[a1]
if(!a0.oi(g,a2)){r=9
break}a0.p5(g,a2)
h=$.m()
a3=i.length
a4=h.a.a_(a3-a1)+a1
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
j9(){return new A.R(this.ns(),t.e)},
ns(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
return function $async$j9(a9,b0,b1){if(b0===1){p.push(b1)
r=q}for(;;)A:switch(r){case 0:a8=A.be(t.g_)
for(o=s.c,o=new A.c1(o,o.r,o.e,A.y(o).h("c1<1>")),n=s.a;o.q();){m=o.d
if(m==null)continue
if(m.fn(new A.hh(s,n,m)))a8.j(0,m)}o=n.b
m=o.f
l=m.b
k=l.b
j=k.a
k=k.b
i=new A.j8(new A.a8(A.an(j*k,0,!1,t.S),new A.Y(new A.d(0,0),new A.d(j,k)),t.z))
k=s.b
k===$&&A.b()
h=A.ck(o,k,$.uw(),!1,null,null)
for(o=A.aa(l.bL(-1)),l=n.d,k=l.a,g=l.b.b.a,f=k.length;o.q();){e=o.b
d=o.c
c=new A.d(e,d)
l.l(e,d)
e=d*g+e
if(!(e>=0&&e<f)){A.c(k,e)
r=1
break A}e=k[e]
if(e==null)continue
if(a8.G(0,e))continue
b=h.ci(c)
if(b==null)continue
if(b<10)continue
d=Math.sqrt(b-10)
e=e.b
e===$&&A.b()
i.i(0,c,B.e.L((4+d)*e.e))}o=i.c
e=$.m()
a=o*0.03*e.aB(1,1.4)
o=m.a,d=o.length,n=n.c,a0=t.m,a1=0
case 3:if(!(a1<a)){r=4
break}c=i.eN()
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
a6=e.a.a_(a5)
if(!(a6>=0&&a6<a4.length)){A.c(a4,a6)
r=1
break}a7=a4[a6]
a6=$.ca().kL(n,a7)
a6.toString
m.l(a2,a3)
a2=a3*j+a2
if(!(a2>=0&&a2<d)){A.c(o,a2)
r=1
break}if((o[a2].a.e.a&a6.at.a)===0){r=3
break}if(!s.fB(a6)){r=3
break}a8=s.h3(i,c,a6)
r=5
return a9.b="Spawned monster",1
case 5:a1+=a8
r=3
break
case 4:case 1:return 0
case 2:return a9.c=p.at(-1),3}}}},
jE(a,b,c){var s
for(;;){s=$.ca().d9(a,b,c)
s.toString
if(this.fB(s))return s}},
fB(a){if(!a.ax.f)return!0
if(this.a.a.ed(a)>0)return!1
if(this.d.G(0,a))return!1
return!0},
h3(a,b,c){var s,r,q,p,o,n,m,l=null,k={},j=!c.ax.f&&$.m().T(10)===0
k.a=0
s=new A.nt(k,this,j,a)
r=c.l7()
if(0>=r.length)return A.c(r,0)
s.$2(r[0],b)
for(q=A.z0(r,1,l,A.M(r).c),p=q.$ti,q=new A.c2(q,q.gI(0),p.h("c2<aF.E>")),o=this.a.b,p=p.h("aF.E");q.q();){n=q.d
if(n==null)n=p.a(n)
m=A.ck(o,b,n.at,l,l,l).gcD().hr(0,new A.nr(),new A.ns())
if(m.a0(0,new A.d(-1,-1)))break
s.$2(n,m)}return k.a},
iC(){return new A.R(this.m2(),t.e)},
m2(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
return function $async$iC(a7,a8,a9){if(a8===1){p.push(a9)
r=q}for(;;)A:switch(r){case 0:a1=s.a
a2=a1.b
a3=a2.f
a4=a3.b
a5=a4.b
a6=a5.a
a5=a5.b
o=new A.j8(new A.a8(A.an(a6*a5,0,!1,t.S),new A.Y(new A.d(0,0),new A.d(a6,a5)),t.z))
a5=s.b
a5===$&&A.b()
n=A.ck(a2,a5,$.bN(),!1,null,null)
for(a4=A.aa(a4.bL(-1)),a5=a3.a,m=a5.length,l=a1.d,k=l.a,j=l.b.b.a,i=k.length;a4.q();){h=a4.b
g=a4.c
f=new A.d(h,g)
l.l(h,g)
e=g*j+h
if(!(e>=0&&e<i)){A.c(k,e)
r=1
break A}e=k[e]
if(e==null)continue
d=n.ci(f)
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
break}f=o.eN()
if(f==null){r=4
break}a=a2.dZ(f,$.uT().hT(a1).b,a1)
for(a3=a.length,a0=0;a0<a.length;a.length===a3||(0,A.p)(a),++a0)b+=Math.max(a[a0].gbf(),1)
o.kz(a2,f,$.bN(),3)
r=5
return a7.b="Spawned item",1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a7.c=p.at(-1),3}}}}}
A.nu.prototype={
$0(){return A.a([],t.l)},
$S:42}
A.nt.prototype={
$2(a,b){var s=this,r=s.b,q=r.a.b
if(q.w.C(b.gm(),b.gn())!=null)return
if(!r.fB(a))return
if(a.ax.f)r.d.j(0,a)
if(s.c)q.dZ(b,a.Q,a.c)
else{q.dA(a.i6(b));++s.a.a
r=s.d
if(r!=null)r.kz(q,b,$.uw(),5)}},
$S:63}
A.nr.prototype={
$1(a){t.u.a(a)
return!0},
$S:2}
A.ns.prototype={
$0(){return new A.d(-1,-1)},
$S:64}
A.j8.prototype={
i(a,b,c){var s=this,r=s.a,q=r.C(b.gm(),b.gn())
s.b=s.b-q+c
r.$ti.c.a(c)
r.aW(b.gm(),b.gn(),c)
if(q===0&&c>0)++s.c
if(q>0&&c===0)--s.c},
eN(){var s,r,q,p,o,n,m,l,k,j=this.b
if(j===0)return null
s=$.m().T(j)
for(j=this.a,r=j.b,q=A.aa(r),p=j.a,r=r.b.a,o=p.length;q.q();){n=q.b
m=q.c
l=new A.d(n,m)
j.l(n,m)
n=m*r+n
if(!(n>=0&&n<o))return A.c(p,n)
k=p[n]
if(s<k)return l
s-=k}throw A.n(A.bC("Unreachable."))},
kz(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
this.i(0,b,0)
s=A.ck(a,b,c,null,null,d)
for(r=s.gcD(),q=r.$ti,r=new A.ag(r.a(),q.h("ag<1>")),p=this.a,o=p.a,n=p.b.b.a,m=o.length,q=q.c;r.q();){l=r.b
if(l==null)l=q.a(l)
k=s.ci(l)
k.toString
j=l.gm()
i=l.gn()
p.l(j,i)
j=i*n+j
if(!(j>=0&&j<m))return A.c(o,j)
this.i(0,l,B.e.L(o[j]*(k/d)))}}}
A.eq.prototype={
gf7(){return $.x7()},
aY(){return new A.R(this.o9(),t.e)},
o9(){var s=this
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
break}l=A.tV(o.c,a0)
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
a=f.a_(b-e)
r=s.m3(l,a+e,f.a_(c-d)+d)?6:7
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
m3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.o.a(a)
if(!h.jB(a,b,c))return!1
for(s=a.b,r=A.aa(s),q=a.a,s=s.b.a,p=q.length;r.q();){o=r.b
n=r.c
m=o+b
l=n+c
a.l(o,n)
o=n*s+o
if(!(o>=0&&o<p))return A.c(q,o)
k=q[o]
o=k.a
if(!(o==null&&k.b===B.r)&&o!==$.bA()&&k.b===B.r){n=h.a
n===$&&A.b()
n.dm(h,m,l,o)}else{n=$.bA()
if(o===n){o=h.a
o===$&&A.b()
o=o.b.f
o.l(m,l)
j=o.a
i=l*o.b.b.a+m
if(!(i>=0&&i<j.length))return A.c(j,i)
if(j[i].a===$.fu()){o.l(m,l)
j[i].a=n}}}}return!0}}
A.eE.prototype={
gf7(){return $.x8()},
aY(){return new A.R(this.oa(),t.e)},
oa(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$aY(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:m=s.c
m===$&&A.b()
o=m===B.cp&&s.x==null?20:1
n=0
case 2:if(!(n<o)){r=4
break}r=5
return a.aK(s.iJ())
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
fn(a){var s,r,q,p,o,n,m,l,k,j=a.a,i=j.c.p(0,a.c)
i.toString
i=J.xQ(i,new A.p2(a))
s=A.a6(i,i.$ti.h("k.E"))
i=$.m().a
B.a.bG(t.A.a(s),i)
for(r=s.length,q=a.b.c,p=t.m,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
if(i.a_(20)!==0)continue
m=this.b
m===$&&A.b()
m=p.a(m.d)
l=m.length
k=i.a_(l)
if(!(k>=0&&k<m.length))return A.c(m,k)
j.h3(null,n,j.jE(q,null,m[k]))}return!0},
iJ(){return new A.R(this.mn(),t.e)},
mn(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g
return function $async$iJ(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:if(!s.nJ()){r=1
break}o=s.r,n=o.c,m=o.b,l=s.x,k=l!=null
case 3:if(!(n.length!==0)){r=4
break}j=o.pi()
i=j.a
h=i.F(0,j.b)
g=s.a
g===$&&A.b()
if(!g.dk(s,h)){r=3
break}r=s.nH(j)?5:7
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
nJ(){var s,r,q,p=this.a
p===$&&A.b()
s=A.tV(p.c,B.be)
for(r=0;r<100;++r){q=this.nu(s)
if(this.jh(s,q.a,q.b))return!0}return!1},
nu(a){var s,r,q,p,o,n,m,l,k
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
return new A.d(s.bp(k,o),s.bp(l,n))},
n6(a){var s=this,r=new A.p0(s),q=s.c
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
nH(a){var s,r,q,p,o,n,m=this.a
m===$&&A.b()
s=A.tV(m.c,B.be)
m=s.b
r=A.y(m)
q=r.h("aj<k.E>")
p=A.a6(new A.aj(m,r.h("B(k.E)").a(new A.p1(s,a.b.gcF())),q),q.h("k.E"))
m=$.m()
B.a.bG(t.A.a(p),m.a)
for(m=p.length,r=a.a,o=0;o<p.length;p.length===m||(0,A.p)(p),++o){n=r.S(0,p[o])
if(this.jh(s,n.a,n.b))return!0}return!1},
jh(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
t.o.a(a0)
if(!a.jB(a0,a1,a2))return!1
s=A.a([],t.fv)
for(r=a0.b,q=A.aa(r),p=a0.a,r=r.b.a,o=p.length,n=a.r,m=n.b,n=n.c;q.q();){l=q.b
k=q.c
j=l+a1
i=k+a2
h=new A.d(j,i)
a0.l(l,k)
l=k*r+l
if(!(l>=0&&l<o))return A.c(p,l)
g=p[l]
l=g.b
if(l!==B.r){if(a.n6(h))B.a.j(s,new A.eD(h,l))}else{l=g.a
if(l!=null)k=l!==$.bA()
else k=!1
if(k){k=a.a
k===$&&A.b()
k.dm(a,j,i,l)}else{k=$.bA()
if(l===k){l=a.a
l===$&&A.b()
l=l.b.f
l.l(j,i)
f=l.a
e=i*l.b.b.a+j
if(!(e>=0&&e<f.length))return A.c(f,e)
if(f[e].a===$.fu()){l.l(j,i)
f[e].a=k}d=m.ac(0,h)
if(d!=null)B.a.ac(n,d)}}}}r=$.m()
B.a.bG(t.eF.a(s),r.a)
for(r=s.length,c=0;c<s.length;s.length===r||(0,A.p)(s),++c){d=s[c]
q=d.a
b=m.ac(0,q)
if(b!=null)B.a.ac(n,b)
m.i(0,q,d)
B.a.j(n,d)}return!0}}
A.p2.prototype={
$1(a){t.u.a(a)
return(this.a.b.b.f.C(a.gm(),a.gn()).a.e.a&$.aX().a)!==0},
$S:2}
A.p0.prototype={
$2(a,b){var s=this.a.a
s===$&&A.b()
s=s.b.f.b.b
return A.v(a+b,0,s.a+s.b,2,-3)},
$S:65}
A.p1.prototype={
$1(a){t.u.a(a)
return this.a.C(a.gm(),a.gn()).b===this.b},
$S:2}
A.eD.prototype={}
A.qV.prototype={
aJ(){return"TakeFrom."+this.b}}
A.p_.prototype={
pi(){var s,r=this
switch(r.a.a){case 0:s=r.c
if(0>=s.length)return A.c(s,-1)
s=s.pop()
break
case 1:s=B.a.d7(r.c,0)
break
case 2:s=$.m().kF(0,r.c,t.d2)
break
default:s=null}r.b.ac(0,s.a);++s.c
return s}}
A.eF.prototype={
aY(){return new A.R(this.ob(),t.e)},
ob(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$aY(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:n=$.m()
m=n.aw(1,2)
o=0
case 2:if(!(o<m)){r=4
break}s.n2(A.ng(n.a.a_(16)+16))
r=5
return a.b="Placing lake",1
case 5:case 3:++o
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
n2(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
k=s.bp(0,o-l)
j=s.bp(0,p.b-m.b)
for(s=A.aa(n),p=a.a,n=p.length,m=q.a,i=m.length,r=r.d,h=r.$ti.c,g=r.a,f=r.b.b.a;s.q();){e=s.b
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
A.hh.prototype={}
A.pI.prototype={
oZ(a,b){var s,r,q,p=this,o=a.b.b.f.C(b.gm(),b.gn()).a
if(o===$.d0()||o===$.d1())return p.fM()
if(o===$.bA()){s=p.b
if(s!=null){r=$.m()
t.p.a(s)
r=r.T(1)
if(!(r>=0&&r<1))return A.c(s,r)
return s[r]}s=$.m()
r=t.p.a($.x6())
s=s.T(3)
if(!(s>=0&&s<3))return A.c(r,s)
return r[s]}if(o===$.mM()){s=p.c
r=s!=null
if(r&&p.d!=null){q=$.m().T(6)
A:{if(0===q){s=p.d
if(s==null)s=t.ns.a(s)
break A}if(1===q){s=p.fM()
break A}break A}return s}else if(r)return s
else{s=p.d
if(s!=null)return s
else return p.fM()}}s=$.x5()
if(s.al(o)){r=$.m()
s=s.p(0,o)
s.toString
t.p.a(s)
r=r.T(1)
if(!(r>=0&&r<1))return A.c(s,r)
return s[r]}return o},
fM(){var s,r=this.a
if(r!=null){s=$.m()
t.p.a(r)
s=s.T(1)
if(!(s>=0&&s<1))return A.c(r,s)
return r[s]}return $.mN()}}
A.eP.prototype={
gf7(){return $.x9()},
aY(){return new A.R(this.oc(),t.e)},
oc(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
return function $async$aY(a2,a3,a4){if(a3===1){p.push(a4)
r=q}for(;;)A:switch(r){case 0:o=s.e,n=s.f,m=0
case 3:if(!(m<20)){r=5
break}l=$.m()
k=A.ng(l.a.a_(n-o)+o)
l=s.a
l===$&&A.b()
j=s.jg(k,l.b.f.b)
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
return a2.aK(s.iX(j))
case 9:r=1
break
case 7:case 4:++m
r=3
break
case 5:case 1:return 0
case 2:return a2.c=p.at(-1),3}}}},
fn(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=a6.b,a5=B.e.aR(a4.c*$.m().aB(1,1.4))
for(s=this.r,r=s.length,q=this.d,p=a6.a,a4=a4.b,o=a4.w,n=o.a,m=o.b.b.a,l=n.length,a4=a4.f,k=a4.a,j=a4.b.b.a,i=k.length,h=0;h<s.length;s.length===r||(0,A.p)(s),++h){g=s[h]
f=g.a
e=g.b
a4.l(f,e)
d=e*j+f
if(!(d>=0&&d<i))return A.c(k,d)
d=k[d].a
c=$.aX().a
if((d.e.a&c)===0)continue
d=g.gbP()
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
p.h3(null,g,p.jE(a5,!1,q))}return!0},
jg(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
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
i=l.a_(j-p-k)+k
k=Math.min(n,s)
j=Math.max(n,s)
h=l.a_(j-q-k)+k
if(this.nI(a,i,h))return new A.Y(new A.d(i,h),new A.d(p,q))}return null},
nI(a,b,c){var s,r,q,p,o,n,m,l,k=this
t.b.a(a)
for(s=a.b,r=A.aa(s),q=a.a,p=s.b.a,o=q.length;r.q();){n=r.b
m=r.c
a.l(n,m)
l=m*p+n
if(!(l>=0&&l<o))return A.c(q,l)
if(q[l]){l=k.a
l===$&&A.b()
if(!l.dk(k,new A.d(n+b,m+c)))return!1}}for(s=A.aa(s);s.q();){r=s.b
n=s.c
a.l(r,n)
m=n*p+r
if(!(m>=0&&m<o))return A.c(q,m)
if(q[m]){m=k.a
m===$&&A.b()
m.dm(k,r+b,n+c,null)}}return!0},
iX(a){return new A.R(this.n0(a),t.e)},
n0(a){var s=this
return function(){var r=a
var q=0,p=1,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
return function $async$iX(a0,a1,a2){if(a1===1){o.push(a2)
q=p}for(;;)switch(q){case 0:n=r.a,m=n.a,l=r.b,k=m+l.a,n=n.b,l=n+l.b,j=0
case 2:if(!(j<8)){q=4
break}i=$.m()
h=A.ng(i.a.a_(4)+6)
i=h.b.b
g=i.a
f=Math.min(m,k)-g
i=i.b
e=Math.min(n,l)-i
d=Math.max(m,k)
c=Math.max(n,l)
b=s.a
b===$&&A.b()
q=s.jg(h,A.vH(new A.Y(new A.d(f,e),new A.d(d+g-f,c+i-e)),b.b.f.b.bL(-1)))!=null?5:6
break
case 5:q=7
return a0.b="antechamber",1
case 7:case 6:case 3:++j
q=2
break
case 4:return 0
case 1:return a0.c=o.at(-1),3}}}}}
A.pR.prototype={
oB(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=A.k2(t.u),a4=a2.d;++a4.b
s=a4.a
r=s.b.b
q=r.a
a4.c=q
a4.d=0
a4.e=r.b
a4.f=0
r=a3.$ti.c
a3.bH(r.a(a5))
a4.j(0,a5)
p=a2.c
a2.f=A.a([new A.hU(a5,p.C(a5.gm(),a5.gn()))],t.lv)
for(o=s.a,n=o.length,m=p.a,l=p.b.b.a,k=m.length;!a3.gaL(0);){j=a3.d8()
i=j.gm()
h=j.gn()
p.l(i,h)
i=h*l+i
if(!(i>=0&&i<k))return A.c(m,i)
g=m[i]
for(i=j.gdF(),h=i.length,f=g+1,e=0;e<i.length;i.length===h||(0,A.p)(i),++e){d=i[e]
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
if(J.ax(o[c],a4.b))continue
if(a2.mp(d))continue
a3.bH(r.a(d))
a4.j(0,d)
B.a.j(a2.f,new A.hU(d,a0))}}a2.cf(a5,-1)
a1=a2.mb(a5)
if(a1.a===0)for(a4=a4.gN(0),s=a4.$ti.c;a4.q();){r=a4.d
a2.cf(r==null?s.a(r):r,-1)}else{for(a4=a4.gN(0),s=a4.$ti.c;a4.q();){r=a4.d
a2.cf(r==null?s.a(r):r,-2)}a2.cf(a5,-1)
a2.j1(a1)}},
pn(){var s,r,q,p
for(s=this.f,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
this.cf(p.a,p.b)}this.f=B.ca},
mp(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this.c,a=b.C(a0.gm(),a0.gn())
for(s=a0.gdF(),r=s.length,q=this.d,p=q.a,o=p.a,n=p.b.b.a,m=o.length,l=this.a.f.b,k=b.a,j=b.b.b.a,i=k.length,h=a-1,g=0;g<s.length;s.length===r||(0,A.p)(s),++g){f=s[g]
if(!l.G(0,f))continue
e=f.a
d=f.b
p.l(e,d)
c=d*n+e
if(!(c>=0&&c<m))return A.c(o,c)
if(!J.ax(o[c],q.b)){b.l(e,d)
e=d*j+e
if(!(e>=0&&e<i))return A.c(k,e)
e=J.ax(k[e],h)}else e=!1
if(e)return!0}return!1},
mb(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.be(t.u)
for(s=this.d,r=s.gN(0),q=this.c,p=q.a,o=q.b.b.a,n=p.length,m=s.a,l=m.a,k=m.b.b.a,j=l.length,i=r.$ti.c;r.q();){h=r.d
if(h==null)h=i.a(h)
if(h.a0(0,a0))continue
for(h=h.gdF(),g=h.length,f=0;f<h.length;h.length===g||(0,A.p)(h),++f){e=h[f]
d=e.a
c=e.b
q.l(d,c)
b=c*o+d
if(!(b>=0&&b<n))return A.c(p,b)
b=p[b]
if(typeof b!=="number")return b.cK()
if(b>=0){m.l(d,c)
d=c*k+d
if(!(d>=0&&d<j))return A.c(l,d)
d=!J.ax(l[d],s.b)}else d=!1
if(d)a.j(0,e)}}return a},
j1(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
t.cX.a(a2)
s=new A.cg(A.a([],t.c),t.r)
for(r=J.ao(a2),q=a1.c,p=q.a,o=q.b,n=o.b.a,m=p.length;r.q();){l=r.gH()
k=l.gm()
j=l.gn()
q.l(k,j)
k=j*n+k
if(!(k>=0&&k<m))return A.c(p,k)
s.aX(0,l,p[k])}for(r=a1.a.f,l=r.a,k=r.b.b.a,j=l.length;;){i=s.f9()
if(i==null)break
h=i.gm()
g=i.gn()
q.l(h,g)
h=g*n+h
if(!(h>=0&&h<m))return A.c(p,h)
f=p[h]
for(h=i.gdF(),g=h.length,e=f+1,d=0;d<h.length;h.length===g||(0,A.p)(h),++d){c=h[d]
if(!o.G(0,c))continue
b=c.a
a=c.b
q.l(b,a)
a0=a*n+b
if(!(a0>=0&&a0<m))return A.c(p,a0)
if(!J.ax(p[a0],-2))continue
r.l(b,a)
b=a*k+b
if(!(b>=0&&b<j))return A.c(l,b)
if((l[b].a.e.a&$.aX().a)!==0){a1.cf(c,e)
s.aX(0,c,e)}else a1.cf(c,-1)}}},
cf(a,b){var s,r=this
if(r.a.f.C(a.gm(),a.gn()).a===$.d0()){s=r.c.C(a.gm(),a.gn())
if(typeof s!=="number")return s.cK()
if(s>=0)--r.e
if(b>=0)++r.e}s=r.c
s.$ti.c.a(b)
s.aW(a.gm(),a.gn(),b)}}
A.hU.prototype={}
A.f0.prototype={
aY(){return new A.R(this.od(),t.e)},
od(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
return function $async$aY(a,a0,a1){if(a0===1){p.push(a1)
r=q}for(;;)switch(r){case 0:b=s.a
b===$&&A.b()
o=b.b.f.b.b
n=o.b+2
m=o.a+2
l=new A.q3(s)
k=new A.q4(s)
j=new A.q1(s)
i=new A.q5(s)
h=new A.q2(s)
g=new A.q0(s)
o=$.m()
f=o.T(6)
A:{if(0===f){e=new A.Q(A.bJ(-2,h.$0(),null,null),A.bJ(m,h.$0(),null,null))
break A}if(1===f){e=new A.Q(A.bJ(g.$0(),-2,null,null),A.bJ(g.$0(),n,null,null))
break A}if(2===f){e=new A.Q(A.bJ(i.$0(),-2,null,null),A.bJ(m,k.$0(),null,null))
break A}if(3===f){e=new A.Q(A.bJ(m,l.$0(),null,null),A.bJ(i.$0(),n,null,null))
break A}if(4===f){e=new A.Q(A.bJ(j.$0(),n,null,null),A.bJ(-2,l.$0(),null,null))
break A}if(5===f){e=new A.Q(A.bJ(-2,k.$0(),null,null),A.bJ(j.$0(),-2,null,null))
break A}e=A.a_(A.cM("Unreachable"))}d=b.b.f.b.b.a
b=b.b.f.b.b.b
c=A.bJ(o.aB(d*0.4,d*0.6),o.aB(b*0.4,b*0.6),null,null)
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
n=A.bJ((a5+a6)/2+q-p,(a8+a9)/2+r-p,B.e.P((b2.c+b3.c)/2+s.aB(-o,o),0,4),(b2.d+b3.d)/2)
a4.eo(b2,n)
a4.eo(n,b3)
return}a6=b2.d
a9=b2.c+a6
m=B.e.bK(a5-a9)
l=B.e.bK(a8-a9)
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
if(a6[a3].a===$.fu()){r.l(a0,e)
a6[a3].a=$.d0()
q.a(a4)
s.l(a0,e)
B.a.i(i,a+a0,a4)}}}}}
A.q3.prototype={
$0(){var s=$.m(),r=this.a.a
r===$&&A.b()
r=r.b.f.b.b.b
return s.aB(r*0.2,r*0.4)},
$S:7}
A.q4.prototype={
$0(){var s=$.m(),r=this.a.a
r===$&&A.b()
r=r.b.f.b.b.b
return s.aB(r*0.6,r*0.8)},
$S:7}
A.q1.prototype={
$0(){var s=$.m(),r=this.a.a
r===$&&A.b()
r=r.b.f.b.b.a
return s.aB(r*0.6,r*0.8)},
$S:7}
A.q5.prototype={
$0(){var s=$.m(),r=this.a.a
r===$&&A.b()
r=r.b.f.b.b.a
return s.aB(r*0.2,r*0.4)},
$S:7}
A.q2.prototype={
$0(){var s=$.m(),r=this.a.a
r===$&&A.b()
r=r.b.f.b.b.b
return s.aB(r*0.2,r*0.8)},
$S:7}
A.q0.prototype={
$0(){var s=$.m(),r=this.a.a
r===$&&A.b()
r=r.b.f.b.b.a
return s.aB(r*0.2,r*0.8)},
$S:7}
A.rD.prototype={
t(a){return A.J(this.a)+","+A.J(this.b)+" ("+A.J(this.d)+")"}}
A.kP.prototype={
jB(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.o.a(a)
for(s=a.b,r=A.aa(s),q=a.a,s=s.b.a,p=q.length;r.q();){o=r.b
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
if(!(n&&k.b===B.r)&&o!==$.bA()&&k.b===B.r){o=this.a
o===$&&A.b()
l=!o.dk(this,new A.d(m,l))
o=l}else o=!1
if(o)return!1}return!0}}
A.hs.prototype={
aJ(){return"RoomShapes."+this.b}}
A.q7.prototype={
$1(a){var s,r=this.a.F(0,t.j.a(a)),q=this.b
if(!q.b.G(0,r))return!1
q=q.C(r.a,r.b)
s=q.a
return!(s==null&&q.b===B.r)&&s!==$.bA()&&q.b===B.r},
$S:13}
A.dL.prototype={}
A.ht.prototype={
aJ(){return"RoomSize."+this.b}}
A.r3.prototype={
dE(a){return new A.R(this.og(t.jJ.a(a)),t.e)},
og(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$dE(a2,a3,a4){if(a3===1){o.push(a4)
q=p}for(;;)A:switch(q){case 0:for(n=s.a.f,m=n.b,l=A.aa(m),k=n.a,j=m.b.a,i=k.length;l.q();){h=l.b
g=l.c
n.l(h,g)
h=g*j+h
if(!(h>=0&&h<i)){A.c(k,h)
q=1
break A}k[h].a=$.mN()}for(l=J.ao(m.kI());l.q();){h=l.gH()
g=h.gm()
h=h.gn()
n.l(g,h)
g=h*j+g
if(!(g>=0&&g<i)){A.c(k,g)
q=1
break A}k[g].a=$.iu()}f=[$.xi(),$.xm(),$.xq(),$.xr(),$.xs(),$.xt(),$.xu(),$.xv()]
for(e=0;e<8;++e){d=B.c.ad(e,4)*13+5
l=B.c.A(e,4)
c=l*14+6
for(h=new A.cK(new A.Y(new A.d(d,c),new A.d(11,8)),d-1,c);h.q();){g=h.b
b=h.c
n.l(g,b)
g=b*j+g
if(!(g>=0&&g<i)){A.c(k,g)
q=1
break A}k[g].a=$.iu()}h=d+11
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
a1=$.uO()
b.a=a1;++l
n.l(l,h)
l=g+l
if(!(l>=0&&l<i)){A.c(k,l)
q=1
break A}k[l].a=a1}for(l=A.aa(m);l.q();){h=l.b
g=l.c
n.l(h,g)
h=g*j+h
if(!(h>=0&&h<i)){A.c(k,h)
q=1
break A}h=k[h]
h.ff(!0)
g=$.U()
if((h.a.e.a&g.a)!==0)h.f=B.c.P(h.f+64,0,192)}r.$1(m.ghe())
case 1:return 0
case 2:return a2.c=o.at(-1),3}}}}}
A.r0.prototype={
$1(a){return new A.eM(a)},
$S:67}
A.r_.prototype={
$1(a){return new A.eL(a)},
$S:68}
A.qZ.prototype={
hc(a,b,c){var s,r,q,p,o
for(s=this.b,r=0;r<s.length;++r){q=s[r]
p=q.b.bh(b,a)
o=q.c.bh(c,a)
B.a.i(s,r,new A.W(q.a,p,o))}return this},
o2(a,b,c,d){var s,r,q,p,o,n,m=this.b,l=B.a.gaC(m)
for(s=l.b,r=l.c,q=l.a,p=1;p<a;++p){o=s.bh(c,A.v(p,0,a,0,b))
n=r.bh(d,A.v(p,0,a,0,b))
B.a.j(m,new A.W(q,o,n))}return this},
eS(a){this.e=a
return this},
c6(a){this.d=a
return this},
cn(a){this.c=t.bj.a(a)
return this},
jJ(){return this.cQ($.bM())},
aM(){return this.cQ($.U())},
a3(){return this.cQ($.ux())},
bw(){return this.cQ($.uy())},
cQ(a){var s,r,q,p=this,o=p.b
if(o.length===1)o=B.a.gaC(o)
s=p.d
r=p.e
q=p.c
return new A.dR(p.a,s,r,o,a,q)}}
A.nl.prototype={
$0(){return A.u3(this.a)},
$S:23}
A.nn.prototype={
$0(){return A.u3(this.a)},
$S:23}
A.no.prototype={
$0(){return A.k2(t.cZ)},
$S:70}
A.nm.prototype={
$0(){return A.u3(this.a)},
$S:23}
A.fc.prototype={
t(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=new A.dO(""),c=e.a,b=c.Q.a.a
d.a=b
c=c.at
if(c instanceof A.ct)s="afraid"
else s=c instanceof A.cv?"awake":"asleep"
d.a=b+(" ("+s+")\n")
c=e.c
b=A.y(c).h("b0<1>")
r=A.a6(new A.b0(c,b),b.h("k.E"))
B.a.fk(r)
q=B.a.aD(r,0,new A.rA(),t.S)
for(b=r.length,p=e.d,o=0;o<r.length;r.length===b||(0,A.p)(r),++o){n=r[o]
m=B.j.oY(n,q)+" "
l=c.p(0,n)
for(k=A.y(l),j=new A.dW(l,l.c,l.d,l.b,k.h("dW<1>")),k=k.c,i=!1;j.q();){h=j.e
g=B.c.P(B.e.aR((h==null?k.a(h):h)*9),0,8)
if(!(g>=0&&g<9))return A.c(" \u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588",g)
m+=" \u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588"[g]
if(g>0)i=!0}if(!l.gaL(0)){j=l.b
h=l.c
if(j===h)A.a_(A.cE())
j=l.a
f=j.length
h=(h-1&f-1)>>>0
if(!(h>=0&&h<f))return A.c(j,h)
h=j[h]
k=B.e.hR(h==null?k.a(h):h,4)
m+=" "+B.j.d5(k,6)}if(p.p(0,n)!=null){m+=" "+A.J(p.p(0,n))
i=!0}if(i)d.a+=(m.charCodeAt(0)==0?m:m)+"\n"}c=d.a=A.tY(d.a,e.b,"\n")
return c.charCodeAt(0)==0?c:c}}
A.rA.prototype={
$2(a,b){return Math.max(A.w(a),A.a3(b).length)},
$S:24}
A.G.prototype={
gaV(){return!0},
o3(a,b,c){var s,r=this
r.a=b
s=b.y
r.b!==$&&A.aq()
r.b=s
r.c!==$&&A.aq()
r.c=a
r.d!==$&&A.aq()
r.d=c!==!1},
h8(a,b){var s,r,q
if(b==null){s=this.a
s.toString}else s=b
r=this.b
r===$&&A.b()
q=this.c
q===$&&A.b()
a.a=s
a.b!==$&&A.aq()
a.b=r
a.c!==$&&A.aq()
a.c=q
a.d!==$&&A.aq()
a.d=!1
if(a.gaV())B.a.j(q.c,a)
else{s=q.b
s.bH(s.$ti.c.a(a))}},
h7(a){return this.h8(a,null)},
bx(a,b,c,d,e,f,g){var s,r,q,p,o=this.c
o===$&&A.b()
s=e==null?$.aw():e
if(g==null)r=b==null?null:b.y
else r=g
if(r==null)r=B.ak
q=d==null?B.r:d
p=c==null?0:c
B.a.j(o.d,new A.jj(a,r,q,s,b,f,p))},
nZ(a,b,c,d){return this.bx(a,b,c,null,d,null,null)},
ct(a,b){var s=null
return this.bx(a,b,s,s,s,s,s)},
o_(a,b,c,d){return this.bx(a,b,null,null,null,c,d)},
nY(a,b,c){var s=null
return this.bx(a,s,s,s,s,b,c)},
nX(a,b,c){var s=null
return this.bx(a,s,s,s,b,s,c)},
o0(a,b,c,d){return this.bx(a,null,null,b,c,null,d)},
o1(a,b,c,d){return this.bx(a,null,null,b,null,c,d)},
jt(a,b,c){var s=null
return this.bx(a,s,s,b,s,s,c)},
h9(a,b){var s=null
return this.bx(a,s,s,s,s,s,b)},
nW(a,b,c){var s=null
return this.bx(a,b,c,s,s,s,s)},
js(a,b,c){var s=null
return this.bx(a,b,s,s,s,s,c)},
gdW(){return 0.2},
hw(a,b,c){var s=this.c
s===$&&A.b()
s.y.Q.at.a1(B.I,a,b,c,null)},
oR(a,b){return this.hw(a,b,null)},
eb(a,b,c,d){var s,r,q=this.c
q===$&&A.b()
s=q.x
s===$&&A.b()
r=this.b
r===$&&A.b()
r=s.f.C(r.gm(),r.gn())
if(!r.b&&r.d+r.e>r.c||this.a instanceof A.au)q.y.Q.at.a1(B.I,a,b,c,d)},
Y(a,b){return this.eb(a,b,null,null)},
bW(a,b,c){return this.eb(a,b,c,null)},
l4(a){return this.eb(a,null,null,null)},
fq(a,b,c){if(a!=null)this.eb(a,b,c,null)
return B.n},
cq(a,b){return this.fq(a,b,null)},
ei(){return this.fq(null,null,null)},
eU(a,b,c){var s,r=this,q=r.c
q===$&&A.b()
q=q.x
q===$&&A.b()
s=r.b
s===$&&A.b()
s=q.f.C(s.gm(),s.gn())
q=!s.b&&s.d+s.e>s.c||r.a instanceof A.au
if(q){q=r.c
q===$&&A.b()
q.y.Q.at.a1(B.W,a,b,c,null)}return B.bj},
cZ(a){return this.eU(a,null,null)},
dP(a,b){return this.eU(a,b,null)},
bd(a){var s,r,q=this.c
q===$&&A.b()
s=this.a
s.toString
r=this.d
r===$&&A.b()
a.o3(q,s,r)
return new A.d2(a,!1,!0)}}
A.d2.prototype={}
A.jt.prototype={
V(){var s=this,r=t.V.a(s.a),q=r.ch,p=s.e
if(q<p)return s.cZ("You aren't focused enough.")
r.ch=q-p
return s.bd(s.f)}}
A.jB.prototype={
gmA(){var s,r,q=this,p=q.Q$
if(p===$){s=q.f4()
r=s.a()
q.Q$!==$&&A.e7()
p=q.Q$=new A.ag(r,s.$ti.h("ag<1>"))}return p},
V(){var s,r=this.gmA()
if(!r.q())return B.n
s=r.b
return s==null?r.$ti.c.a(s):s},
kP(a){var s,r=J.vo(a,t.fw)
for(s=0;s<a;++s)r[s]=B.a3
return r}}
A.iF.prototype={
V(){var s,r,q,p,o=this
for(s=o.e,r=o.a.eO(s),q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){r[p].hF(o,o.a,s)
if(s.z<=0)break}return B.n},
gdW(){return 1},
t(a){return A.J(this.a)+" attacks "+this.e.t(0)}}
A.jP.prototype={
e0(){var s,r=this
switch(r.e){case B.X:s=r.c
s===$&&A.b()
s=s.x
s===$&&A.b()
s.e1(r.f,r.a.y)
break
case B.H:B.a.ac(t.V.a(r.a).Q.e.b,r.f)
break
case B.a2:s=r.f
t.V.a(r.a).Q.f.ac(0,s)
if(s.a.ay>0){s=r.c
s===$&&A.b()
s=s.x
s===$&&A.b()
s.gav().r=!0}break
default:throw A.n(A.cM("Invalid location."))}},
bk(){switch(this.e){case B.X:break
case B.H:t.V.a(this.a).Q.e.bk()
break
case B.a2:t.V.a(this.a)
break
default:throw A.n(A.cM("Invalid location."))}}}
A.ku.prototype={
V(){var s,r=this,q="{1} [don't|doesn't] have room for {the 2}.",p=t.V,o=r.e,n=p.a(r.a).Q.e.c7(o),m=n.a
if(m===0)return r.eU(q,r.a,o)
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
p.Q.ax.d_(o)
p.bq()
return B.n}}
A.jb.prototype={
V(){var s=this,r=s.z,q=s.f
if(r===q.f)s.e0()
else{q=q.dg(r)
s.bk()}r=s.a
if(s.e===B.a2){s.bW("{1} take[s] off and drop[s] {the 2}.",r,q)
t.V.a(s.a).bq()}else s.bW("{1} drop[s] {the 2}.",r,q)
r=s.c
r===$&&A.b()
r=r.x
r===$&&A.b()
r.cR(q,s.a.y)
return B.n}}
A.jf.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.e
if(d===B.a2)return e.bd(new A.lb(d,e.f))
d=t.V
s=e.f
if(!d.a(e.a).Q.f.oh(s))return e.eU("{1} cannot equip {the 2}.",e.a,s)
if(s.f===1){e.e0()
r=s}else{r=s.dg(1)
e.bk()}q=d.a(e.a).Q.f.jN(r)
for(p=q.length,o=0;o<q.length;q.length===p||(0,A.p)(q),++o){n=q[o]
m=n.f
l=d.a(e.a).Q.e.fe(n,!0)
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
if(!g.b&&g.d+g.e>g.c||e.a instanceof A.au)j.y.Q.at.a1(B.I,"{1} unequip[s] {the 2}.",k,new A.L(n.a,n.b,n.c,n.d,m),null)}else{m=e.c
m===$&&A.b()
j=m.x
j===$&&A.b()
j.cR(n,k.y)
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
if(!h.b&&h.d+h.e>h.c||e.a instanceof A.au)m.y.Q.at.a1(B.I,u.f,k,n,null)}}e.bW("{1} equip[s] {the 2}.",e.a,r)
if(s.a.ay>0){p=e.c
p===$&&A.b()
p=p.x
p===$&&A.b()
p.gav().r=!0}d.a(e.a).bq()
return B.n}}
A.lb.prototype={
V(){var s,r,q,p,o=this,n=o.f,m=n.cT()
o.e0()
s=t.V
r=s.a(o.a).Q.e.fe(n,!0)
q=o.a
if(r.b===0)o.bW("{1} unequip[s] {the 2}.",q,m)
else{p=o.c
p===$&&A.b()
p=p.x
p===$&&A.b()
p.cR(n,q.y)
o.bW(u.f,o.a,n)}s.a(o.a).bq()
return B.n}}
A.le.prototype={
V(){var s,r=this,q=r.f,p=q.a.w
if(p==null)return r.dP("{the 1} can't be used.",q);--q.f
p=p.b.$0()
if(q.f===0)r.e0()
else r.bk()
if(r.e===B.X){s=t.V.a(r.a)
r.c===$&&A.b()
s.Q.ax.d_(q)
s.bq()}t.V.a(r.a).Q.ax.pp(q)
return r.bd(p)}}
A.cx.prototype={
fG(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
t.C.a(b)
t.f.a(a1)
s=A.a6(b,A.y(b).h("k.E"))
r=s.length
q="{the 1} "+a.c+"!"
p=0
o=0
for(;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m=n.a
l=m.cx.p(0,a)
if(l==null)l=0
if(a0)l=Math.min(30,B.c.A(l,2))
if(l===0)continue
for(k=0,j=0;i=n.f,j<i;++j){i=$.m()
if(i.a.a_(100)<l)++k}if(k===i){i=d.c
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
if(!f.b&&f.d+f.e>f.c||d.a instanceof A.au)i.y.Q.at.a1(B.I,q,n,c,c)
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
if(!f.b&&f.d+f.e>f.c||d.a instanceof A.au)i.y.Q.at.a1(B.I,q,new A.L(m,n.b,n.c,n.d,k),c,c)}p+=m.cy*k}return p},
hg(a,b){var s=this.c
s===$&&A.b()
s=s.x
s===$&&A.b()
return this.fG(b,s.cl(a),!1,new A.nv(this,a))},
jI(a){var s,r,q=this,p={},o=q.a
if(!(o instanceof A.au))return 0
if(o.c5(a)>0)return 0
o=t.V
s=q.fG(a,o.a(q.a).Q.e,!0,new A.nw(q))
p.a=!1
r=q.fG(a,o.a(q.a).Q.f,!0,new A.nx(p,q))
if(p.a)o.a(q.a).bq()
return s+r}}
A.nv.prototype={
$1(a){var s=this.a.c
s===$&&A.b()
s=s.x
s===$&&A.b()
s.e1(a,this.b)},
$S:6}
A.nw.prototype={
$1(a){B.a.ac(t.V.a(this.a.a).Q.e.b,a)},
$S:6}
A.nx.prototype={
$1(a){t.V.a(this.b.a).Q.f.ac(0,a)
this.a.a=!0},
$S:6}
A.k4.prototype={
gmP(){var s,r=this,q=r.r
if(q===$){s=A.dV(r.a.y,r.e)
s.q()
r.f=r.a.y
r.r!==$&&A.e7()
r.r=s
q=s}return q},
gaV(){return!1},
V(){var s,r,q=this,p=q.gmP(),o=p.a,n=q.c
n===$&&A.b()
s=n.x
s===$&&A.b()
s=s.f.C(o.gm(),o.gn())
r=$.U()
if((s.a.e.a&r.a)===0||o.S(0,q.a.y).bg(0,q.gaz())){p=q.f
p===$&&A.b()
q.kk(p)
return q.ei()}s=q.f
s===$&&A.b()
q.kq(s,o)
n=n.x
n===$&&A.b()
n=n.w.C(o.gm(),o.gn())
if(n!=null&&n!==q.a)if(q.hD(o,n))return B.n
if(o.a0(0,q.e))if(q.ks(o))return B.n
q.f=o
p.q()
return B.a3},
hD(a,b){return!0},
kk(a){},
ks(a){return!1}}
A.l7.prototype={
V(){var s=this,r=s.f
if(r.a.y==null)return s.dP("{the 1} can't be thrown.",r)
if(r.f===1)s.e0()
else{r=r.dg(1)
s.bk()}return s.bd(new A.l9(r,s.z,s.Q))}}
A.l9.prototype={
gaz(){return this.as.gaz()},
kq(a,b){this.nY(B.bG,this.Q,b)},
hD(a,b){var s=this
if(s.as.hF(s,s.a,b)===0){s.at=!0
return!1}s.fI(a)
return!0},
kk(a){this.fI(a)},
ks(a){if(this.at)return!1
this.fI(a)
return!0},
fI(a){var s,r=this,q=r.Q,p=q.a.y,o=p.c
if(o!=null){r.h7(o.$1(a))
return}o=$.m()
s=p.a
if(o.T(100)<s){r.Y("{1} breaks!",q)
return}o=r.c
o===$&&A.b()
o=o.x
o===$&&A.b()
o.cR(q,a)}}
A.lj.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.e
if(b===B.r)return c.bd(A.kM())
s=c.a.y.F(0,b)
b=c.c
b===$&&A.b()
r=b.x
r===$&&A.b()
q=s.a
p=s.b
r=r.w.C(q,p)
if(r!=null&&r!==c.a)return c.bd(new A.iF(r))
r=b.x
r===$&&A.b()
o=r.f.C(q,p).a
r=o.f
if(r!=null){n=o.e
m=$.bM()
if(n.a0(0,m)&&(c.a.gb4().a&m.a)!==0||(n.a&c.a.gb4().a)===0)return c.bd(r.$1(s))}r=b.x
r===$&&A.b()
if(!r.bj(s,c.a.gb4())){if(c.a instanceof A.au){b=b.x
b===$&&A.b()
b.cY(q,p,!0)}return c.dP("{1} hit[s] the "+o.a+".",c.a)}c.a.dc(b,s)
if(c.a instanceof A.au){r=b.x
r===$&&A.b()
r=r.cl(s)
r=A.a6(r,A.y(r).h("k.E"))
q=r.length
p=t.V
n=b.y.Q.at
l=0
for(;l<r.length;r.length===q||(0,A.p)(r),++l){k=r[l]
m=p.a(c.a)
if(!(m.at instanceof A.aR))m.at=null
if(k.a.ch){j=B.e.aR(k.gbf()*0.5)
i=B.e.aR(k.gbf()*1.5)
m=$.m()
h=m.a.a_(i-j)+j
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
if(!e.b&&e.d+e.e>e.c||c.a instanceof A.au)n.a1(B.I,"{1} pick[s] up {2} worth "+h+" gold.",m,k,null)
m=b.x
m===$&&A.b()
m.e1(k,s)
m=c.a
c.o_(B.bu,m,k,m.y)}else{g=b.x
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
if(!e.b&&e.d+e.e>e.c||c.a instanceof A.au)n.a1(B.I,"{1} [are|is] standing on {2}.",m,k,null)}}p.a(c.a).f8(1)}return c.ei()},
t(a){return A.J(this.a)+" walks "+this.e.t(0)}}
A.kp.prototype={
V(){var s,r,q=this,p=q.c
p===$&&A.b()
s=p.x
s===$&&A.b()
r=q.e
s.f.C(r.gm(),r.gn()).a=q.f
p=p.x
p===$&&A.b()
p.hQ()
p=q.a
if(p instanceof A.au)p.f8(1)
return q.cq("{1} open[s] the door.",q.a)}}
A.iW.prototype={
V(){var s,r,q=this,p=q.c
p===$&&A.b()
s=p.x
s===$&&A.b()
r=q.e
s=s.w.C(r.gm(),r.gn())
if(s!=null)return q.dP("{1} [are|is] in the way!",s)
s=p.x
s===$&&A.b()
s.f.C(r.gm(),r.gn()).a=q.f
p=p.x
p===$&&A.b()
p.hQ()
p=q.a
if(p instanceof A.au)p.f8(1)
return q.cq("{1} close[s] the door.",q.a)}}
A.kL.prototype={
V(){var s,r,q,p,o,n=this,m=null
A:{s=n.a
r=s instanceof A.au
q=r?s:m
if(r){r=q.ay
if(r>0){r=B.c.P(r-1,0,400)
q.ay=r
if(r===0){r=n.c
r===$&&A.b()
r.y.Q.at.a1(B.I,"You are getting hungry.",m,m,m)}if(q.w.a<=0)q.z=B.c.P(q.z+1,0,q.gbo())}q.f8(2)
break A}r=!1
if(s instanceof A.bB){r=n.c
r===$&&A.b()
r=r.x
r===$&&A.b()
p=s.y
p=r.f.C(p.gm(),p.gn())
r=!(!p.b&&p.d+p.e>p.c)&&s.w.a<=0
o=s}else o=m
if(r)o.z=B.c.P(o.z+1,0,o.gbo())}return n.ei()},
gdW(){return 0.05}}
A.bB.prototype={
f3(a){return!1},
gb4(){var s=this.cm()
return this.e.a>0?new A.ad(s.a|$.U().a):s},
ghf(){return new A.R(this.os(),t.cn)},
os(){var s=this
return function(){var r=0,q=1,p=[],o
return function $async$ghf(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gjw()
if(s.b.a>0||s.d.a>0)o=B.c.A(o,3)
r=o!==0?2:3
break
case 2:r=4
return a.b=new A.ay(o,"{1} dodge[s] {2}."),1
case 4:case 3:r=5
return a.aK(s.km())
case 5:return 0
case 1:return a.c=p.at(-1),3}}}},
dc(a,b){var s,r,q,p,o=this
if(o.y.a0(0,b))return
s=o.y
if(o.gdN()>0){r=a.x
r===$&&A.b()
r.gav().r=!0}o.hA(a,s,b)
r=a.x
r===$&&A.b()
r=r.w
q=r.C(s.gm(),s.gn())
p=r.$ti.c
p.a(null)
r.aW(s.gm(),s.gn(),null)
p.a(q)
r.aW(b.gm(),b.gn(),q)
o.y=b},
hA(a,b,c){},
eO(a){var s,r,q=this.ki(a)
for(s=q.length,r=0;r<q.length;q.length===s||(0,A.p)(q),++r)this.kf(q[r],B.hi)
return q},
kf(a,b){var s
if(this.b.a>0||this.d.a>0){switch(b.a){case 0:s=0.5
break
case 1:s=0.3
break
case 2:s=0.2
break
default:s=null}a.kZ(s,"blindness")}this.kp(a,b)},
kp(a,b){},
c5(a){var s=this.hC(a),r=this.fb(a)
return r.a>0?s+r.b:s},
fb(a){var s=this.x,r=s.p(0,a)
if(r==null){r=new A.hr(a)
s.i(0,a,r)
s=r}else s=r
return s},
kG(a,b,c,d){var s=this
s.z=B.c.P(s.z-b,0,s.gbo())
s.kr(a,d,b)
if(s.z>0)return!1
a.ct(B.bt,s)
a.bW("{1} kill[s] {2}.",c,s)
if(d!=null)d.ko(a,s)
s.kj(a,c)
return!0},
ph(a,b,c){return this.kG(a,b,c,null)},
kn(a,b,c){},
kr(a,b,c){},
ko(a,b){},
kl(a){},
oF(a){var s,r,q,p,o,n=this
n.a.a-=240
s=A.a([n.c,n.b,n.d,n.e,n.f,n.r,n.w],t.c8)
r=n.x
B.a.U(s,new A.cG(r,A.y(r).h("cG<2>")))
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.a
if(o>0){--o
p.a=o
if(o>0)p.kt(a)
else{p.cB(a)
p.b=0}}}if(n.z>0)n.kl(a)}}
A.b5.prototype={
t(a){var s=B.c.t(this.c),r=this.e
if(r!==$.aw())s=r.t(0)+" "+s
r=this.d
return r>0?s+("@"+r):s}}
A.jG.prototype={
aJ(){return"HitType."+this.b}}
A.d4.prototype={}
A.df.prototype={}
A.b6.prototype={
gaz(){var s=this.a.d
if(s===0)return 0
return Math.max(1,B.e.O(s*this.r))},
gnw(){return B.a.aD(this.b,1,new A.oq(),t.i)},
gnv(){return B.a.aD(this.c,0,new A.op(),t.i)},
giw(){return B.a.aD(this.d,1,new A.oo(),t.i)},
giv(){return B.a.aD(this.e,0,new A.on(),t.i)},
gb1(){var s=this.f
if(s!==$.aw())return s
return this.a.e},
gcS(){return this.a.c*this.giw()+this.giv()},
ju(a,b){if(a===0)return
B.a.j(this.c,new A.d4(a))},
kZ(a,b){if(a===1)return
B.a.j(this.b,new A.df(a))},
nU(a,b){if(a===0)return
B.a.j(this.e,new A.d4(a))},
cL(a,b){if(a===1)return
B.a.j(this.d,new A.df(a))},
dY(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.lx(a,b,a0),c=e.ly(a,a0)
if(d){s=e.a.a
if(s==null)s=b
s.toString
r=s}else r=$.uF()
q=c?a0:$.uF()
if(a0 instanceof A.au)a0.p7(e)
if(a1!==!1){s=$.m()
p=s.aw(1,100)*e.gnw()+e.gnv()
o=a0.ghf()
n=A.a6(o,o.$ti.h("k.E"))
B.a.bG(t.hy.a(n),s.a)
for(s=n.length,m=0;m<s;++m){l=n[m]
p-=l.a
if(p<0){if(d||c){s=a.c
s===$&&A.b()
s.y.Q.at.a1(B.I,l.b,q,r,null)}return 0}}}k=a0.gdC()
j=a0.c5(e.gb1())
s=e.a
i=B.e.L((s.c*e.giw()+e.giv())*(1/(1+j))*100)
h=A.wC(k)
g=B.e.O($.m().cH(i,B.c.A(i,2))*h/100)
if(g===0){if(d||c)a.hw("{1} do[es] no damage to {2}.",r,q)
return 0}if(b!=null)b.kn(a,a0,g)
if(a0.kG(a,g,r,b))return g
if(j<=0){f=e.gb1().f.$1(g)
if(f!=null)a.h8(f,a0)}a.nZ(B.bw,a0,g,e.gb1())
if(d||c)a.hw("{1} "+s.b+" {2}.",r,q)
return g},
hF(a,b,c){return this.dY(a,b,c,null)},
lx(a,b,c){var s,r
if(b instanceof A.au)return!0
if(b!=null){s=a.c
s===$&&A.b()
s=s.x
s===$&&A.b()
r=b.y
r=s.f.C(r.gm(),r.gn())
s=!r.b&&r.d+r.e>r.c}else s=!1
if(s)return!0
if(c instanceof A.au&&this.a.a!=null)return!0
s=a.c
s===$&&A.b()
s=s.x
s===$&&A.b()
r=c.y
r=s.f.C(r.gm(),r.gn())
if(!r.b&&r.d+r.e>r.c&&this.a.a!=null)return!0
return!1},
ly(a,b){var s,r
if(b instanceof A.au)return!0
s=a.c
s===$&&A.b()
s=s.x
s===$&&A.b()
r=b.y
r=s.f.C(r.gm(),r.gn())
if(!r.b&&r.d+r.e>r.c)return!0
return!1}}
A.oq.prototype={
$2(a,b){return A.by(a)*t.jK.a(b).a},
$S:28}
A.op.prototype={
$2(a,b){return A.by(a)+t.fV.a(b).a},
$S:48}
A.oo.prototype={
$2(a,b){return A.by(a)*t.jK.a(b).a},
$S:28}
A.on.prototype={
$2(a,b){return A.by(a)+t.fV.a(b).a},
$S:48}
A.ay.prototype={}
A.bY.prototype={
kt(a){}}
A.fS.prototype={
cB(a){a.Y("{1} slow[s] back down.",a.a)}}
A.fD.prototype={
cB(a){a.Y("{1} warm[s] back up.",a.a)}}
A.hj.prototype={
kt(a){var s=a.a
s.toString
if(!s.ph(a,this.b,new A.aG(A.aO("poison",B.w,B.aF).a6(1))))a.Y("{1} [are|is] hurt by poison!",a.a)},
cB(a){a.Y("{1} [are|is] no longer poisoned.",a.a)}}
A.dz.prototype={
cB(a){var s,r
a.Y("{1} can see clearly again.",a.a)
s=a.a
r=a.c
r===$&&A.b()
if(s===r.y){s=r.x
s===$&&A.b()
s.gav().w=!0}}}
A.fP.prototype={
cB(a){a.Y("{1} flutter[s] down to the ground.",a.a)}}
A.hr.prototype={
cB(a){a.Y("{1} feel[s] susceptible to "+this.c.t(0)+".",a.a)}}
A.hi.prototype={
cB(a){a.Y("{1} no longer perceive[s] monsters.",a.a)}}
A.dB.prototype={
t(a){return this.a}}
A.nI.prototype={
$1(a){A.w(a)
return null},
$S:27}
A.nJ.prototype={
$4(a,b,c,d){t.u.a(a)
t.Z.a(b)
A.dZ(c)
A.w(d)
return null},
$S:75}
A.fM.prototype={}
A.jj.prototype={}
A.aI.prototype={
t(a){return this.a}}
A.jy.prototype={
e7(){return new A.R(this.kX(),t.e)},
kX(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$e7(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=A.dT()
n=s.y
m=s.x
m===$&&A.b()
r=2
return a.aK(s.a.oe(n.Q.ax,m,s.w,new A.ol(o)))
case 2:r=3
return a.b="Calculating visibility",1
case 3:n.dc(s,t.u.a(o.fX()))
m.gav().cE()
return 0
case 1:return a.c=p.at(-1),3}}}},
bt(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
for(s=b.b,r=b.y,q=b.e,p=b.c,o=s.$ti.c,n=b.d,m=!1;;){for(;!s.gaL(0);m=!0){l=s.b
if(l===s.c)A.a_(A.cE())
k=s.a
if(!(l<k.length))return A.c(k,l)
j=k[l]
if(j==null)j=o.a(j)
i=j.V()
for(;h=i.a,h!=null;j=h){s.d8()
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
l.gav().cE()
k=i.c
if(k){s.d8()
if(i.b){f=j.d
f===$&&A.b()}else f=!1
if(f){j.a.oF(j)
l.e=B.c.ad(l.e+1,l.b.length)}}if(!k||j.a===r||n.length!==0){s=A.a(n.slice(0),A.M(n))
B.a.aS(n)
return new A.eT(s)}}if(b.r!=null)b.ji()
while(s.b===s.c){l=b.x
l===$&&A.b()
k=l.b
f=l.e
if(!(f>=0&&f<k.length))return A.c(k,f)
e=k[f]
f=e.a
if(f.a>=240&&e.f3(b))return b.iQ(m)
if(f.a<240){d=e.gjx()+e.f.b-e.c.b
c=f.a
if(!(d>=0&&d<13))return A.c(B.aM,d)
c+=B.aM[d]
f.a=c
c=c>=240
f=c}else f=!0
if(f){if(e.f3(b))return b.iQ(m)
j=e.aj(b)
j.a=e
l=e.y
j.b!==$&&A.aq()
j.b=l
j.c!==$&&A.aq()
j.c=b
j.d!==$&&A.aq()
j.d=!0
s.bH(o.a(j))}else l.e=B.c.ad(l.e+1,k.length)
if(e===r){l=q.a+=60
if(l>=240){q.a=l-240
b.r=0
b.ji()}}}}},
iQ(a){if(a)return this.mQ()
return B.cI},
mQ(){var s=this.d,r=A.a(s.slice(0),A.M(s))
B.a.aS(s)
return new A.eT(r)},
d0(a){var s,r=this.x
r===$&&A.b()
s=a.y
s=r.f.C(s.gm(),s.gn())
if(!s.b&&s.d+s.e>s.c)return!0
r=this.y
s=r.r
if(s.a>0&&r.y.S(0,a.y).ea(0,s.b))return!0
return!1},
ji(){var s,r,q,p=this,o=p.f,n=p.a
for(;;){s=p.r
s.toString
if(!(s<o.length))break
r=o[s]
s=p.x
s===$&&A.b()
q=n.po(s,r)
s=p.r
s.toString
p.r=s+1
if(q!=null){q.b!==$&&A.aq()
q.b=r
q.c!==$&&A.aq()
q.c=p
q.d!==$&&A.aq()
q.d=!1
o=p.b
o.bH(o.$ti.c.a(q))
return}}p.r=null}}
A.ol.prototype={
$1(a){this.a.b=a},
$S:76}
A.hI.prototype={}
A.li.prototype={}
A.eT.prototype={}
A.k3.prototype={
hW(a){this.a1(B.cc,a,null,null,null)},
jG(a,b){this.a1(B.cd,a,b,null,null)},
dK(a){return this.jG(a,null)},
a1(a,b,c,d,e){var s,r
b=this.mi(b,c,d,e)
s=this.a
if(s.length!==0){r=B.a.gd1(s)
if(r.b===b){++r.c
return}}B.a.j(s,new A.h9(a,b,1))
if(s.length>100)B.a.d7(s,0)},
mi(a,b,c,d){var s,r,q,p,o,n,m=[b,c,d]
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
s=A.bg(s,o+" his}",p.d.e)}}if(b!=null)s=A.vy(s,b.gao().d)
if(0>=s.length)return A.c(s,0)
return s[0].toUpperCase()+B.j.cN(s,1)}}
A.p8.prototype={
$1(a){var s,r=a.p(0,1)
r.toString
s=a.p(0,3)
if(s!=null){if(!this.a)r=s
return r}else{if(this.a)r=""
return r}},
$S:26}
A.pa.prototype={
$1(a){var s,r=this.a,q=r.b
if(q===-1)return
s=r.a
if(s.length!==0)s=r.a=s+" "
r.a=s+B.j.aI(this.b,q,a)
r.b=-1},
$S:78}
A.p9.prototype={
$0(){var s=this.a
B.a.j(this.b,s.a)
s.a=""},
$S:0}
A.bR.prototype={
aJ(){return"LogType."+this.b}}
A.h9.prototype={}
A.t5.prototype={
$1(a){a=((B.c.eD(a,16)^a)>>>0)*73244475>>>0
a=((a>>>16^a)>>>0)*73244475>>>0
return(a>>>16^a)>>>0},
$S:4}
A.eY.prototype={
gc_(){var s=this.b,r=A.y(s).h("cG<2>"),q=this.$ti.c
return A.pm(new A.cG(s,r),r.ak(q).h("1(k.E)").a(new A.pS(this)),r.h("k.E"),q)},
ce(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(a)
if(b==null)b=B.c.t(m.b.a)
if(c==null)c=1
if(d==null)d=c
if(e==null)e=1
if(f==null)f=e
s=m.b
if(s.al(b))throw A.n(A.aC('Already have a resource named "'+b+'".',null))
r=A.be(l.h("bU<1>"))
s.i(0,b,new A.bn(a,c,d,e,f,r,l.h("bn<1>")))
if(g!=null&&g!=="")for(l=g.split(" "),s=l.length,q=m.a,p=0;p<s;++p){o=l[p]
n=q.p(0,o)
if(n==null)throw A.n(A.aC('Unknown tag "'+o+'".',null))
r.j(0,n)}},
c3(a){var s,r,q,p,o,n,m,l,k,j,i
for(s=a.split(" "),r=s.length,q=this.a,p=this.$ti.h("bU<1>"),o=0;o<s.length;s.length===r||(0,A.p)(s),++o)for(n=s[o].split("/"),m=n.length,l=null,k=0;k<m;++k,l=i){j=n[k]
i=q.p(0,j)
if(i==null){i=new A.bU(j,l,p)
q.i(0,j,i)}}},
oE(a){var s=this.b.p(0,a)
if(s==null)throw A.n(A.aC('Unknown resource "'+a+'".',null))
return s.a},
c8(a){var s=this.b.p(0,a)
if(s==null)return null
return s.a},
kY(a){var s,r,q=this.b.p(0,a)
if(q==null)throw A.n(A.aC('Unknown resource "'+a+'".',null))
s=q.f
r=A.y(s)
return new A.dA(s,r.h("q(1)").a(new A.pT(this)),r.h("dA<1,q>"))},
d9(a,b,c){var s,r,q,p=this,o={}
o.a=b
s=b==null?o.a=!0:b
if(c==null)return p.h0("",a,new A.pX(p))
r=p.a.p(0,c)
q=r.a
if(!s)q+=" (only)"
return p.h0(q,a,new A.pY(o,p,r))},
hT(a){return this.d9(a,null,null)},
kL(a,b){return this.d9(a,null,b)},
pl(a,b){var s,r,q,p,o,n=this
t.bq.a(b)
s=n.$ti.h("bU<1>")
r=b.$ti
q=r.h("k.E")
p=A.pm(b,r.ak(s).h("1(k.E)").a(new A.pV(n)),q,s)
o=A.a6(b,q)
B.a.fk(o)
return n.h0(B.a.aP(o,"|")+" (match)",a,new A.pW(n,p))},
h0(a,b,c){var s,r,q,p,o,n,m,l,k,j=this.$ti
j.h("F(bn<1>)").a(c)
s=new A.me(a,b)
r=this.c
q=r.p(0,s)
if(q==null){p=A.a([],j.h("r<bn<1>>"))
o=A.a([],t.gk)
for(n=this.b,n=new A.cF(n,n.r,n.e,A.y(n).h("cF<2>")),m=0;n.q();){l=n.d
k=c.$1(l)
if(k===0)continue
m+=Math.max(1e-7,k*(l.oG(b)*l.om(b)))
B.a.j(p,l)
B.a.j(o,m)}q=new A.i7(p,o,m,j.h("i7<1>"))
r.i(0,s,q)}return q.eN()}}
A.pS.prototype={
$1(a){return this.a.$ti.h("bn<1>").a(a).a},
$S(){return this.a.$ti.h("1(bn<1>)")}}
A.pT.prototype={
$1(a){return this.a.$ti.h("bU<1>").a(a).a},
$S(){return this.a.$ti.h("q(bU<1>)")}}
A.pX.prototype={
$1(a){this.a.$ti.h("bn<1>").a(a)
return 1},
$S(){return this.a.$ti.h("F(bn<1>)")}}
A.pY.prototype={
$1(a){var s,r,q,p,o,n,m,l
for(s=this.c,r=this.a,q=this.b.$ti.h("bn<1>").a(a).f,p=A.y(q),o=p.h("cU<1>"),p=p.c,n=1;s!=null;s=s.b){for(m=new A.cU(q,q.r,o),m.c=q.e;m.q();){l=m.d
if((l==null?p.a(l):l).G(0,s))return n}m=r.a
m.toString
if(!m)break
n/=10}return 0},
$S(){return this.b.$ti.h("F(bn<1>)")}}
A.pV.prototype={
$1(a){var s
A.a3(a)
s=this.a.a.p(0,a)
if(s==null)throw A.n(A.aC('Unknown tag "'+a+'".',null))
return s},
$S(){return this.a.$ti.h("bU<1>(q)")}}
A.pW.prototype={
$1(a){var s,r,q,p,o=this.a
for(s=o.$ti.h("bn<1>").a(a).f,s=A.u1(s,s.r,A.y(s).c),r=this.b,q=s.$ti.c;s.q();){p=s.d
if(r.dB(0,new A.pU(o,p==null?q.a(p):p)))return 1}return 0},
$S(){return this.a.$ti.h("F(bn<1>)")}}
A.pU.prototype={
$1(a){return this.a.$ti.h("bU<1>").a(a).G(0,this.b)},
$S(){return this.a.$ti.h("B(bU<1>)")}}
A.bn.prototype={
oG(a){var s=this,r=s.b,q=s.c
if(r===q)return s.d
return A.v(a,r,q,s.d,s.e)},
om(a){var s,r,q=this.b
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
A.me.prototype={
gZ(a){return B.j.gZ(this.a)^B.c.gZ(this.b)},
a0(a,b){if(b==null)return!1
t.nP.a(b)
return this.a===b.a&&this.b===b.b},
t(a){return this.a+" ("+this.b+")"}}
A.i7.prototype={
eN(){var s,r,q,p,o,n,m,l,k=this.b
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
A.pC.prototype={
jz(a,b,c){var s,r,q=this,p=t.fm
p=new A.pF(q,a,p.a(b),p.a(c))
s=q.r
if(a===1)return new A.he(p.$1(q.b),p.$1(q.c),p.$1(q.e),s)
else{r=q.d
return new A.he(p.$1(r),p.$1(r),p.$1(q.f),s)}},
a6(a){return this.jz(a,null,null)},
t(a){return this.b}}
A.pF.prototype={
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
A.pE.prototype={
$1(a){var s,r
this.a.a=!0
s=a.p(0,1)
s.toString
r=a.p(0,3)
if(r!=null){if(!this.b)s=r
return s}else{if(this.b)s=""
return s}},
$S:26}
A.hf.prototype={
aJ(){return"NounCategory."+this.b}}
A.he.prototype={
t(a){return this.a}}
A.dK.prototype={
aJ(){return"Pronoun."+this.b},
t(a){return this.c+"/"+this.d}}
A.pl.prototype={
$1(a){this.a.h("@<0>").ak(this.b).h("aM<1,2>").a(a)
return new A.Q(a.a,a.b)},
$S(){return this.a.h("@<0>").ak(this.b).h("+(1,2)(aM<1,2>)")}}
A.lh.prototype={
gN(a){var s,r,q,p,o,n,m,l,k=this,j=A.a([],t.l)
for(s=k.e,r=k.a,q=r.a,p=r.b.b.a,o=q.length;s<=k.f;++s)for(n=k.c,m=s*p;n<=k.d;++n){r.l(n,s)
l=m+n
if(!(l>=0&&l<o))return A.c(q,l)
if(J.ax(q[l],k.b))B.a.j(j,new A.d(n,s))}return new J.aZ(j,j.length,t.aY)},
j(a,b){var s=this,r=s.a,q=r.$ti.c.a(s.b)
r.aW(b.gm(),b.gn(),q)
s.c=Math.min(s.c,b.gm())
s.d=Math.max(s.d,b.gm())
s.e=Math.min(s.e,b.gn())
s.f=Math.max(s.f,b.gn())}}
A.a1.prototype={
eW(a){var s,r,q,p=this.ar(a)
for(s=a.gcu(),r=s.$ti,s=new A.ag(s.a(),r.h("ag<1>")),r=r.c;s.q();){q=s.b
p=(q==null?r.a(q):q).kc(a,this,p)}return p},
ar(a){return 0},
dw(a,b){var s=this.eW(a)
if(s<=0)return b
return new A.jt(s,b)}}
A.V.prototype={}
A.cO.prototype={}
A.cy.prototype={}
A.ec.prototype={}
A.aR.prototype={
hd(a,b){return!0},
bT(a){a.at=null
return this.a}}
A.kN.prototype={
hd(a,b){var s=b.z,r=b.Q.CW.a
r.toString
if(s===B.e.L(Math.pow(r,1.458)+9))return!1
if(b.ay===0){a.y.Q.at.a1(B.I,"You must eat before you can rest.",null,null,null)
return!1}return!0},
bT(a){return A.kM()}}
A.c5.prototype={
hd(a,b){var s,r,q,p,o,n,m,l=this
if(l.a)return!0
s=l.b
if(s==null){s=l.d
r=A.a([s.gb9(),s,s.gba()],t.T)
if(B.a.G(B.at,l.d)){B.a.j(r,l.d.gbC())
B.a.j(r,l.d.gbR())}q=new A.aj(r,t.ca.a(new A.qa(l,a,b)),t.e0)
if(!q.gN(0).q())return!1
if(q.gI(0)===1){l.c=l.b=!1
l.d=q.gaC(0)}else{s=a.x
s===$&&A.b()
p=l.d.gb9()
p=b.y.F(0,p)
o=s.f
if(o.b.G(0,p)&&(o.C(p.a,p.b).a.e.a&$.bN().a)!==0){p=l.d.gbC()
p=b.y.F(0,p)
o=s.f
p=o.b.G(0,p)&&(o.C(p.a,p.b).a.e.a&$.bN().a)!==0}else p=!1
l.b=p
p=l.d.gba()
p=b.y.F(0,p)
o=s.f
if(o.b.G(0,p)&&(o.C(p.a,p.b).a.e.a&$.bN().a)!==0){p=l.d.gbR()
p=b.y.F(0,p)
s=s.f
s=s.b.G(0,p)&&(s.C(p.a,p.b).a.e.a&$.bN().a)!==0}else s=!1
l.c=s}}else{if(!s){s=l.c
s.toString
s=!s}else s=!1
if(s){s=a.x
s===$&&A.b()
if(!l.ni(s,b))return!1}else{s=a.x
s===$&&A.b()
p=l.d.gb9()
p=b.y.F(0,p)
s=s.f
o=s.b
n=o.G(0,p)&&(s.C(p.a,p.b).a.e.a&$.bN().a)!==0
p=l.d.gba()
p=b.y.F(0,p)
m=o.G(0,p)&&(s.C(p.a,p.b).a.e.a&$.bN().a)!==0
if(!(l.b===n&&l.c===m))return!1}}s=a.x
s===$&&A.b()
return l.np(s,b)},
bT(a){this.a=!1
return A.bw(this.d)},
ni(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=A.a([],t.T),d=A.be(t.j),c=A.be(t.u),b=f.d,a=[b.gbC(),b.gb9(),b,b.gba(),b.gbR()]
for(b=a0.f,s=b.b,r=b.a,q=s.b.a,p=r.length,o=0;o<5;++o){n=a[o]
m=a1.y.F(0,n)
if(s.G(0,m)){l=m.a
k=m.b
b.l(l,k)
l=k*q+l
if(!(l>=0&&l<p))return A.c(r,l)
l=(r[l].a.e.a&$.bN().a)!==0}else l=!1
if(!l)continue
B.a.j(e,n)
j=[n.gb9(),n,n.gba()]
for(i=0;i<3;++i){h=m.F(0,j[i])
if(s.G(0,h)){l=h.a
k=h.b
b.l(l,k)
l=k*q+l
if(!(l>=0&&l<p))return A.c(r,l)
l=(r[l].a.e.a&$.bN().a)!==0}else l=!1
if(!l)continue
d.j(0,n)
c.j(0,h)}}g=d.a
if(0===g&&e.length===1){f.d=B.a.gaC(e)
return!0}if(1===g){f.d=d.gaC(0)
return!0}if(2===g&&c.a===1)if(d.G(0,f.d))return!0
else if(d.G(0,f.d.gb9())&&d.G(0,f.d.gbC())){f.d=f.d.gb9()
return!0}else if(d.G(0,f.d.gba())&&d.G(0,f.d.gbR())){f.d=f.d.gba()
return!0}return!1},
np(a,b){var s,r,q,p,o=this,n=b.y.F(0,o.d)
if(!(a.bj(n,b.gb4())&&a.w.C(n.a,n.b)==null))return!1
s=a.f
r=n.a
q=n.b
if(s.C(r,q).a.e.a0(0,$.bM()))return!1
p=new A.q9(a)
if(p.$1(n))return!1
if(p.$1(n.F(0,o.d.gbC())))return!1
if(p.$1(n.F(0,o.d.gb9())))return!1
if(p.$1(n.F(0,o.d)))return!1
if(p.$1(n.F(0,o.d.gba())))return!1
if(p.$1(n.F(0,o.d.gbR())))return!1
if(s.C(r,q).x>0)return!1
return!0}}
A.qa.prototype={
$1(a){var s,r
t.j.a(a)
s=this.b.x
s===$&&A.b()
r=this.c.y.F(0,a)
s=s.f
return s.b.G(0,r)&&(s.C(r.a,r.b).a.e.a&$.bN().a)!==0},
$S:13}
A.q9.prototype={
$1(a){var s=this.a,r=a.a,q=a.b,p=s.f.C(r,q)
return!p.b&&p.d+p.e>p.c&&s.w.C(r,q)!=null},
$S:2}
A.au.prototype={
gao(){return $.x4()},
gbo(){var s=this.Q.CW.a
s.toString
return B.e.L(Math.pow(s,1.458)+9)},
gdN(){return this.Q.gdN()},
geJ(){return"hero"},
f3(a){var s=this,r=s.at
if(r!=null&&!r.hd(a,s))s.at=null
return s.at==null},
gdC(){return this.Q.gdC()},
gjx(){return 6},
gjw(){var s=this.Q.ch.a
s.toString
return 20+A.v_(s)},
cm(){return $.bN()},
km(){var s,r,q,p,o,n=A.a([],t.x)
for(s=this.Q,r=B.a.gN(s.f.b),q=new A.bm(r,t.k),p=t.W;q.q();){o=p.a(r.gH()).a.z
if(o!=null)n.push(o)}for(s=s.gcu(),r=s.$ti,s=new A.ag(s.a(),r.h("ag<1>")),r=r.c;s.q();){q=s.b
B.a.U(n,(q==null?r.a(q):q).eP(this))}return n},
aj(a){return this.at.bT(this)},
ki(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.a([],t.d3)
for(s=e.Q,r=s.f.gcJ(),q=J.ao(r.a),r=new A.cR(q,r.b,r.$ti.h("cR<1>"));r.q();){p=q.gH()
o=p.a.x
if(o.d<=0)B.a.j(d,new A.Q(p,o))}if(d.length===0)B.a.j(d,new A.Q(null,A.ba(e,"punch[es]",3,null,null)))
n=A.a([],t.o0)
for(r=d.length,q=t.aL,p=t.iO,o=t.kt,m=s.ch,l=e.ax,k=0;k<d.length;d.length===r||(0,A.p)(d),++k){j=d[k]
i=j.a
h=new A.b6(j.b,A.a([],p),A.a([],o),A.a([],p),A.a([],o),$.aw())
B.a.j(n,h)
j=m.a
j.toString
h.ju(A.v0(j),"agility")
for(j=s.gcu(),g=j.$ti,j=new A.ag(j.a(),g.h("ag<1>")),g=g.c;j.q();){f=j.b
if(f==null)f=g.a(f)
f.hy(e,q.a(a),i,h)}if(i!=null){j=l.a
j.toString
h.cL(j,"heft")
i.ke(h)}}return n},
kp(a,b){var s,r,q,p
switch(b.a){case 0:break
case 1:break
case 2:s=this.Q.ay.a
s.toString
a.r*=A.vQ(s)
break}for(s=B.a.gN(this.Q.f.b),r=new A.bm(s,t.k),q=t.W;r.q();){p=q.a(s.gH())
if(p.a.r==null)p.ke(a)}},
hC(a){return this.Q.jO(a)},
ko(a,b){var s,r,q,p,o,n
t.B.a(b)
if(!this.as.G(0,b))return
s=this.Q
r=s.ax.l6(b.Q)
q=b.Q.gbl()*20/(r+19)
for(p=s.gcu(),o=p.$ti,p=new A.ag(p.a(),o.h("ag<1>")),o=o.c;p.q();){n=p.b
q=(n==null?o.a(n):n).kb(s,b,q)}this.hY(B.e.aR(q))},
kj(a,b){a.bW("{1} [were|was] slain by {2}.",this,b)},
kl(a){var s,r,q,p=this
p.cy=a.gdW()
s=p.CW
if(s>0&&p.cx>1){r=B.c.A(p.cx-2,2)
q=p.Q.ay.a
q.toString
p.CW=B.c.P(s-r,0,A.hC(q))}++p.cx},
hA(a,b,c){var s=a.x
s===$&&A.b()
s.gav().w=!0},
hY(a){this.Q.y+=a},
i7(a){this.Q.y-=a},
p7(a){var s,r,q,p=this
if(!(p.at instanceof A.aR))p.at=null
p.cx=0
if(p.z===0)return
s=B.e.aR(a.gcS()/p.z*10)
r=p.CW
q=p.Q.ay.a
q.toString
p.CW=B.c.P(r+s,0,A.hC(q))},
pa(){var s,r,q,p=this,o=null
if(p.w.a>0){p.Q.at.a1(B.W,"You cannot rest while poison courses through your veins!",o,o,o)
return!1}s=p.z
r=p.Q
q=r.CW.a
q.toString
if(s===B.e.L(Math.pow(q,1.458)+9)){r.at.a1(B.I,"You are fully rested.",o,o,o)
return!1}if(p.ay===0){r.at.a1(B.W,"You are too hungry to rest.",o,o,o)
return!1}p.at=new A.kN()
return!0},
fj(a){if(this.as.j(0,a))this.Q.ax.hZ(a.Q)},
f8(a){var s=this.ch,r=this.Q.cx.a
r.toString
this.ch=B.c.P(s+a,0,A.jN(r))},
bq(){var s,r,q,p,o,n,m,l,k=this,j=k.Q,i=j.ay
i.d6(j)
j.ch.d6(j)
s=j.CW
s.d6(j)
r=j.cx
r.d6(j)
j.z.p8(j)
q=j.f.gcJ()
p=A.a6(q,q.$ti.h("k.E"))
for(q=p.length,o=0,n=0;n<p.length;p.length===q||(0,A.p)(p),++n)o+=p[n].geY()
for(j=j.gcu(),q=j.$ti,j=new A.ag(j.a(),q.h("ag<1>")),q=q.c;j.q();){m=j.b
o=(m==null?q.a(m):m).kd(k,p,o)}l=i.jV(B.e.O(o))
k.ax.kN(l,new A.om(k,p,l))
j=k.z
s=s.a
s.toString
k.z=B.c.P(B.c.P(j,0,B.e.L(Math.pow(s,1.458)+9)),0,k.gbo())
s=k.ch
r=r.a
r.toString
k.ch=B.c.P(s,0,A.jN(r))
r=k.CW
i=i.a
i.toString
k.CW=B.c.P(r,0,A.hC(i))}}
A.om.prototype={
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
if(o<1&&a>=1)i.a.Q.at.a1(B.W,"You are too weak to effectively wield "+q+".",h,h,h)
else if(o>=1&&a<1)i.a.Q.at.a1(B.I,"You feel comfortable wielding "+q+".",h,h,h)},
$S:79}
A.cC.prototype={
i5(a){var s=this.c.p(0,a.gcv())
return s==null?0:s}}
A.d9.prototype={
gdN(){var s,r,q,p
for(s=B.a.gN(this.f.b),r=new A.bm(s,t.k),q=t.W,p=0;r.q();)p+=q.a(s.gH()).a.ay
return p},
gdC(){var s,r,q,p,o
for(s=B.a.gN(this.f.b),r=new A.bm(s,t.k),q=t.W,p=0;r.q();){o=q.a(s.gH())
p+=o.a.Q+o.gc1()}for(s=this.gcu(),r=s.$ti,s=new A.ag(s.a(),r.h("ag<1>")),r=r.c;s.q();){q=s.b
p=(q==null?r.a(q):q).ka(this,p)}return p},
ge6(){var s,r,q,p
for(s=B.a.gN(this.f.b),r=new A.bm(s,t.k),q=t.W,p=0;r.q();)p+=q.a(s.gH()).ge6()
return p},
gcu(){return new A.R(this.ol(),t.kX)},
ol(){var s=this
return function(){var r=0,q=1,p=[],o
return function $async$gcu(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:r=2
return a.aK(s.b.d)
case 2:r=3
return a.aK(s.c.d)
case 3:o=s.z.a
r=4
return a.aK(new A.b0(o,A.y(o).h("b0<1>")))
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
lh(a,b,c,d){var s,r,q,p,o,n,m=this,l=null,k=t.X,j=A.de(k)
for(s=m.b.c,r=j.$ti.c,q=0;q<4;++q){p=B.aP[q]
o=s.p(0,p)
o.toString
o-=0.4
j.ce(r.a(p),l,l,l,o,o,l)}k=A.D(k,t.S)
for(q=0;q<4;++q)k.i(0,B.aP[q],0)
for(n=0;n<32;++n){s=j.d9(0,l,l)
s.toString
r=k.p(0,s)
r.toString
k.i(0,s,r+1)}for(s=[m.ay,m.ch,m.CW,m.cx],q=0;q<4;++q){p=s[q]
r=k.p(0,p.gbb())
r.toString
r=8+B.c.A(r+1,2)
p.b=r
p.a=B.c.P(r+p.h4(m)+m.dh(p.gbb()),1,50)}},
jO(a){var s,r,q,p
for(s=B.a.gN(this.f.b),r=new A.bm(s,t.k),q=t.W,p=0;r.q();)p+=q.a(s.gH()).c5(a)
return p},
dh(a){var s,r,q,p,o,n,m
for(s=B.a.gN(this.f.b),r=new A.bm(s,t.k),q=t.W,p=0;r.q();)for(o=q.a(s.gH()).gaf(),n=o.length,m=0;m<o.length;o.length===n||(0,A.p)(o),++m)p+=o[m].dh(a)
return p},
soT(a){this.as=A.w(a)}}
A.h7.prototype={
gjv(){var s=this.b
return new A.cG(s,A.y(s).h("cG<2>")).aD(0,0,new A.pb(),t.S)},
hZ(a){var s,r=this.a
r.b7(a,new A.pe())
s=r.p(0,a)
s.toString
r.i(0,a,s+1)},
l6(a){var s,r=this.b
r.b7(a,new A.pf())
s=r.p(0,a)
s.toString;++s
r.i(0,a,s)
return s},
d_(a){var s,r,q,p,o=this.c,n=a.a
o.b7(n,new A.pc())
s=o.p(0,n)
s.toString
o.i(0,n,s+1)
for(o=a.gaf(),n=o.length,s=this.d,r=0;r<o.length;o.length===n||(0,A.p)(o),++r){q=o[r].a
s.b7(q,new A.pd())
p=s.p(0,q)
p.toString
s.i(0,q,p+1)}},
pp(a){var s,r=this.f,q=a.a
r.b7(q,new A.pg())
s=r.p(0,q)
s.toString
r.i(0,q,s+1)},
i_(a){var s=this.a.p(0,a)
return s==null?0:s},
ed(a){var s=this.b.p(0,a)
return s==null?0:s},
jT(a){var s=this.c.p(0,a)
return s==null?0:s}}
A.pb.prototype={
$2(a,b){return A.w(a)+A.w(b)},
$S:41}
A.pe.prototype={
$0(){return 0},
$S:1}
A.pf.prototype={
$0(){return 0},
$S:1}
A.pc.prototype={
$0(){return 0},
$S:1}
A.pd.prototype={
$0(){return 0},
$S:1}
A.pg.prototype={
$0(){return 0},
$S:1}
A.bS.prototype={}
A.aD.prototype={
hy(a,b,c,d){},
ka(a,b){return b},
eP(a){return B.hH},
kd(a,b,c){t.aa.a(b)
return c},
kb(a,b,c){return c},
kc(a,b,c){return c}}
A.mc.prototype={}
A.cI.prototype={}
A.eW.prototype={}
A.hl.prototype={
dG(a){var s=this.a
if(a.y.Q.b!==s)return"Not a "+s.a
return null},
gW(){return"You must be a "+this.a.a}}
A.ae.prototype={
ai(a,b){return B.c.ai(this.a,t.M.a(b).a)},
$ias:1}
A.hy.prototype={
eK(a){var s=this.a.p(0,a)
return s==null?0:s},
o6(a){var s=this.b.p(0,a)
return s==null?0:s},
bN(a){var s=this.eK(a),r=this.b.p(0,a)
return B.c.P(s+(r==null?0:r),0,15)},
p8(a){var s,r,q,p=this.b,o=A.cH(p,t.M,t.S)
p.aS(0)
for(s=B.a.gN(a.f.b),r=new A.bm(s,t.k),q=t.W;r.q();)q.a(s.gH()).gec().ae(0,new A.qi(this))
p.ae(0,new A.qj(this,o,a))}}
A.qi.prototype={
$2(a,b){var s,r
t.M.a(a)
A.w(b)
s=this.a.b
s.b7(a,new A.qh())
r=s.p(0,a)
r.toString
s.i(0,a,r+b)},
$S:19}
A.qh.prototype={
$0(){return 0},
$S:1}
A.qj.prototype={
$2(a,b){var s
t.M.a(a)
A.w(b)
s=this.b.p(0,a)
if((s==null?0:s)!==b)this.c.at.hW("You are at level "+this.a.bN(a)+" in "+a.gM()+".")},
$S:19}
A.d8.prototype={
gZ(a){return B.j.gZ(this.a)},
a0(a,b){if(b==null)return!1
return b instanceof A.d8&&this.a===b.a}}
A.ml.prototype={}
A.b8.prototype={
kN(a,b){var s=A.y(this)
s.h("b8.T").a(a)
s.h("@(b8.T)").a(b)
s=this.a
if(s===a)return
this.a=a
if(s!=null)b.$1(s)}}
A.cl.prototype={
aJ(){return"Stat."+this.b}}
A.cm.prototype={
h4(a){return 0},
kA(a,b){var s,r=this
if(b!=null)r.b=b
s=r.dj(a)
r.kN(s,new A.qz(r,s,a))},
d6(a){return this.kA(a,null)},
hq(a){var s=a.ay.b,r=a.ch.b,q=a.CW.b,p=a.cx.b,o=a.b.c.p(0,this.gbb())
o.toString
return B.e.L(400*(1/o)*Math.pow(A.v(s+r+q+p,48,160,1,40),2))},
dj(a){return B.c.P(this.b+this.h4(a)+a.dh(this.gbb()),1,50)},
t(a){return this.gbb().c}}
A.qz.prototype={
$1(a){var s=this.b-A.w(a),r=this.a,q=this.c.at
if(s>0)q.hW("You feel "+r.ger()+"! Your "+r.gbb().c+" increased by "+s+".")
else q.a1(B.W,"You feel "+r.gev()+"! Your "+r.gbb().c+" decreased by "+-s+".",null,null,null)},
$S:27}
A.hB.prototype={
gbb(){return B.aj},
ger(){return"mighty"},
gev(){return"weak"},
h4(a){return-a.ge6()},
jV(a){var s,r=this.a
r.toString
s=B.e.P(r-a,-10,50)
if(s<0)return A.v(s,-10,-1,0,0.6)
else return A.v(s,0,50,1,2)}}
A.fx.prototype={
gbb(){return B.aa},
ger(){return"dextrous"},
gev(){return"clumsy"}}
A.hK.prototype={
gbb(){return B.aq},
ger(){return"tough"},
gev(){return"sickly"}}
A.fV.prototype={
gbb(){return B.Z},
ger(){return"smart"},
gev(){return"stupid"}}
A.cc.prototype={
gca(){return this.a.w.$1(this.b)},
gcV(){return this.a.x.$1(this.b)},
gcU(){return this.a.y.$1(this.b)},
c5(a){var s=this.a.as.p(0,a)
if(s==null)return 0
return s.$1(this.b)},
dh(a){var s=this.a.at.p(0,a)
if(s==null)return 0
return s.$1(this.b)},
gec(){var s,r,q,p=t.M,o=A.D(p,t.S)
for(p=A.vz(this.a.ch,p,t.Q),s=A.y(p),p=new A.bl(J.ao(p.a),p.b,s.h("bl<1,2>")),r=this.b,s=s.y[1];p.q();){q=p.a
if(q==null)q=s.a(q)
o.i(0,q.a,q.b.$1(r))}return o},
t(a){return this.a.a+" "+this.b}}
A.eb.prototype={
fl(){var s=this.e
s=s==null?null:s.$0()
return new A.cc(this,s==null?0:s)},
l0(a,b){this.as.i(0,t.h.a(a),t.Q.a(b))},
l2(a,b){this.at.i(0,t.X.a(a),t.Q.a(b))},
t(a){return this.a}}
A.es.prototype={
gk6(){return B.a2},
gcJ(){var s=t.bC
return new A.aj(new A.hL(this.b,s),s.h("B(k.E)").a(new A.nX()),s.h("aj<k.E>"))},
gI(a){return B.a.aD(this.b,0,new A.nW(),t.S)},
cT(){var s,r,q,p,o,n=A.an(9,null,!1,t.mN)
for(s=this.b,r=0;r<9;++r){q=s[r]
if(q!=null){p=q.a
o=q.f
B.a.i(n,r,new A.L(p,q.b,q.c,q.d,o))}}return new A.es(n)},
oh(a){return B.a.dB(B.aD,new A.nV(a))},
bk(){},
jN(a){var s,r,q,p,o,n,m,l,k,j=a.a,i=j.e
if(i==="hand"){i=t.t
s=A.a([],i)
r=A.a([],i)
for(i=this.b,q=0;q<9;++q)if(B.aD[q]==="hand"){B.a.j(s,q)
if(i[q]!=null)B.a.j(r,q)}p=r.length
if(p===0){if(0>=s.length)return A.c(s,0)
B.a.i(i,s[0],a)
return B.bd}if(p===1){if(0>=p)return A.c(r,0)
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
for(j=r.length,m=0;m<r.length;r.length===j||(0,A.p)(r),++m){l=r[m]
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
return B.bd}for(j=this.b,k=-1,q=0;q<9;++q)if(B.aD[q]===i){if(j[q]==null){B.a.i(j,q,a)
return B.bd}k=q}if(!(k>=0&&k<9))return A.c(j,k)
i=j[k]
i.toString
n=A.a([i],t.I)
B.a.i(j,k,a)
return n},
ac(a,b){var s,r
for(s=this.b,r=0;r<9;++r)if(s[r]===b){B.a.i(s,r,null)
break}},
gN(a){return new A.bm(B.a.gN(this.b),t.k)},
gee(){return B.aD},
gef(){return this.b}}
A.nX.prototype={
$1(a){return t.W.a(a).a.r!=null},
$S:10}
A.nW.prototype={
$2(a,b){A.w(a)
return a+(t.mN.a(b)==null?0:1)},
$S:83}
A.nV.prototype={
$1(a){return this.a.a.e===A.a3(a)},
$S:84}
A.lI.prototype={}
A.c_.prototype={}
A.eB.prototype={
gee(){return B.hI},
gef(){return this}}
A.bQ.prototype={
gI(a){return this.b.length},
cT(){var s=this.b,r=A.M(s)
return A.bE(this.a,new A.aN(s,r.h("L(1)").a(new A.os()),r.h("aN<1,L>")))},
ac(a,b){B.a.ac(this.b,b)},
jA(a){var s,r,q,p,o=this.c
if(o===0||this.b.length<o)return!0
s=a.f
for(o=this.b,r=o.length,q=0;q<o.length;o.length===r||(0,A.p)(o),++q){p=o[q]
if(p.jC(a)){s-=p.a.CW-p.f
if(s<=0)return!0}}return!1},
fe(a,b){var s,r,q,p,o,n=a.f
for(s=this.b,r=s.length,q=n,p=0;o=s.length,p<o;s.length===r||(0,A.p)(s),++p){s[p].l8(a)
q=a.f
if(q===0)return new A.dy(n,0)}r=this.c
if(r!==0&&o>=r)return new A.dy(n-q,q)
B.a.j(s,a)
B.a.fk(s)
if(b)this.d=a
return new A.dy(n,0)},
c7(a){return this.fe(a,!1)},
bk(){var s,r=this.b,q=A.a(r.slice(0),A.M(r))
B.a.aS(r)
for(r=q.length,s=0;s<q.length;q.length===r||(0,A.p)(q),++s)this.c7(q[s])},
gN(a){var s=this.b
return new J.aZ(s,s.length,A.M(s).h("aZ<1>"))},
gk6(){return this.a}}
A.os.prototype={
$1(a){return t.W.a(a).cT()},
$S:86}
A.dy.prototype={}
A.lZ.prototype={}
A.L.prototype={
gaf(){var s=A.a([],t.o_),r=this.b
if(r!=null)s.push(r)
r=this.c
if(r!=null)s.push(r)
r=this.d
if(r!=null)s.push(r)
return s},
gb1(){var s,r,q,p=$.aw(),o=this.a.x,n=o!=null?o.e:p
for(o=this.gaf(),s=o.length,r=0;r<s;++r){q=o[r].a.Q
if(q!==p)n=q}return n},
gca(){return B.a.aD(this.gaf(),0,new A.oT(),t.S)},
gcV(){return B.a.aD(this.gaf(),1,new A.oO(),t.i)},
gcU(){return B.a.aD(this.gaf(),0,new A.oN(),t.S)},
gc1(){return B.a.aD(this.gaf(),0,new A.oM(),t.S)},
gao(){var s,r=this,q=r.e
if(q===$){s=r.mu()
r.e!==$&&A.e7()
r.e=s
q=s}return q},
gbf(){var s,r,q,p,o=this,n=o.a.as,m=1+o.gaf().length
for(s=o.gaf(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
n*=p.a.ay.$1(p.b)*m}for(s=o.gaf(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
n+=p.a.ax.$1(p.b)*m}return B.e.aR(n)},
ge6(){return Math.max(0,B.a.aD(this.gaf(),this.a.at,new A.oU(),t.S))},
geY(){return B.e.O(B.a.aD(this.gaf(),this.a.ax,new A.oP(),t.i))},
ke(a){var s,r,q,p,o,n,m
for(s=this.gaf(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.a
n=p.b
m=o.a+" "+n
a.ju(o.w.$1(n),m)
a.cL(o.x.$1(n),m)
a.nU(o.y.$1(n),m)}s=this.gb1()
if(s!==$.aw())a.f=s},
c5(a){return B.a.aD(this.gaf(),0,new A.oQ(a),t.S)},
gec(){var s,r,q,p=A.D(t.M,t.S)
for(s=this.gaf(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)s[q].gec().ae(0,new A.oS(p))
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
cT(){return this.b_(null)},
jC(a){if(this.a!==a.a)return!1
if(this.gaf().length!==0)return!1
if(a.gaf().length!==0)return!1
return!0},
l8(a){var s,r,q=this
if(!q.jC(a))return
s=q.f+a.f
r=q.a.CW
if(s<=r){q.f=s
a.f=0}else{q.f=r
a.f=s-r}},
dg(a){this.f-=a
return this.b_(a)},
mu(){var s,r,q,p,o=t.s,n=A.a([],o),m=A.a([],o)
for(o=this.gaf(),s=o.length,r=0;r<o.length;o.length===s||(0,A.p)(o),++r){q=o[r].a
p=q.b
if(q.c)B.a.j(n,p)
else B.a.j(m,p)}return this.a.a.jz(this.f,n,m)},
$ias:1}
A.oT.prototype={
$2(a,b){return A.w(a)+t.L.a(b).gca()},
$S:14}
A.oO.prototype={
$2(a,b){return A.by(a)*t.L.a(b).gcV()},
$S:29}
A.oN.prototype={
$2(a,b){return A.w(a)+t.L.a(b).gcU()},
$S:14}
A.oM.prototype={
$2(a,b){A.w(a)
t.L.a(b)
return a+b.a.z.$1(b.b)},
$S:14}
A.oU.prototype={
$2(a,b){A.w(a)
t.L.a(b)
return a+b.a.r.$1(b.b)},
$S:14}
A.oP.prototype={
$2(a,b){A.by(a)
t.L.a(b)
return a*b.a.f.$1(b.b)},
$S:29}
A.oQ.prototype={
$2(a,b){return A.w(a)+t.L.a(b).c5(this.a)},
$S:14}
A.oS.prototype={
$2(a,b){var s,r
t.M.a(a)
A.w(b)
s=this.a
s.b7(a,new A.oR())
r=s.p(0,a)
r.toString
s.i(0,a,r+b)},
$S:19}
A.oR.prototype={
$0(){return 0},
$S:1}
A.bF.prototype={}
A.r1.prototype={}
A.aL.prototype={
t(a){return this.a.a6(1).a}}
A.kJ.prototype={
mW(a){var s,r,q,p,o,n,m,l
t.C.a(a)
s=A.cH(this.a,t.q,t.S)
for(r=a.b,q=A.M(r),r=new J.aZ(r,r.length,q.h("aZ<1>")),q=q.c;r.q();){p=r.d
if(p==null)p=q.a(p)
o=p.a
if(!s.al(o))return null
n=s.p(0,o)
n.toString
s.i(0,o,n-p.f)}r=A.y(s).h("b0<1>")
r=A.a6(new A.b0(s,r),r.h("k.E"))
q=r.length
m=0
for(;m<r.length;r.length===q||(0,A.p)(r),++m){l=r[m]
p=s.p(0,l)
p.toString
if(p<=0)s.ac(0,l)}return s}}
A.dg.prototype={
on(){var s=A.bE(new A.c_(this.b,26),null)
this.aG(s)
return s},
aG(a){var s,r,q,p,o,n,m,l,k,j,i=$.m(),h=a.c,g=B.e.L(i.aB(h*0.2,h*0.4))
for(s=a.b,r=i.a;q=s.length,q>g;){q=r.a_(q)
if(!(q>=0&&q<s.length))return A.c(s,q)
p=s[q]
B.a.d7(s,q)
if(a.d===p)a.d=null}o=B.e.L(i.aB(h*0.3,h*0.7))
i=this.a
h=a.gkK()
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
B.a.d7(s,l)
if(a.d===p)a.d=null
l=k}}}}}
A.iQ.prototype={}
A.ar.prototype={
gbl(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.ay
for(s=g.CW,r=s.length,q=0;q<r;++q)f+=s[q].a
s=6+g.z
if(!(s>=0&&s<13))return A.c(B.aM,s)
s=B.aM[s]
for(r=g.d,p=r.length,o=0,q=0;q<p;++q){n=r[q]
o+=n.c*n.e.e}for(r=g.e,m=r.length,l=0,k=0,q=0;q<r.length;r.length===m||(0,A.p)(r),++q){j=r[q]
i=j.a
l+=j.gbl()/i
k+=1/i}r=g.ax
h=r.a?1.1:1
if(r.b)h*=0.9
if(r.c)h*=1.05
if(r.d)h*=0.7
if(r.e)h*=1.1
return B.e.aR(g.f*(1+f/100)*s*(o/p*(1-k)+l)*h*A.v(g.y,0,100,1,0.7)/100)},
fm(a,b){var s=b!=null?b.as+1:1,r=a.gm(),q=a.gn(),p=new A.ac(this,s,new A.cf(),A.D(t.d0,t.cZ),$.m().bp(60,200),new A.fM(),new A.dz(),new A.fD(),new A.dz(),new A.fP(),new A.fS(),new A.hi(),new A.hj(),A.D(t.h,t.mF),new A.d(r,q))
p.lj(this,r,q,s)
return p},
i6(a){return this.fm(a,null)},
l7(){var s,r,q=this,p=A.a([],t.fO),o=$.m().aw(q.cx,q.cy)
for(s=0;s<o;++s)B.a.j(p,q)
r=q.db
if(r!=null)r.cM(B.e.bK(q.c*0.9),t.or.a(B.a.gnT(p)))
return p},
t(a){return this.a.a}}
A.f3.prototype={
aJ(){return"SpawnLocation."+this.b}}
A.ni.prototype={
t(a){var s=this,r=A.a([],t.s)
if(s.a)r.push("berzerk")
if(s.b)r.push("cowardly")
if(s.c)r.push("fearless")
if(s.d)r.push("immobile")
if(s.e)r.push("protective")
if(s.f)r.push("unique")
return B.a.aP(r," ")}}
A.ac.prototype={
geJ(){return this.Q.b},
gao(){return this.Q.a},
gbo(){return this.Q.f},
gdC(){return 0},
gdN(){return this.Q.ch},
gde(){var s=this.Q,r=s.w,q=r+s.x
if(q===0)return 0
return r/q},
lj(a,b,c,d){var s,r,q,p,o=this
o.z=B.c.P(o.Q.f,0,o.gbo())
s=o.at
s.a!==$&&A.aq()
s.a=o
s=o.Q
if(s.ax.b)o.cx*=0.7
for(s=s.e,r=s.length,q=o.ax,p=0;p<s.length;s.length===r||(0,A.p)(s),++p)q.i(0,s[p],0)},
kO(a){var s,r=this.ax,q=r.p(0,a)
q.toString
s=a.a
r.i(0,a,q+$.m().aB(s,s*1.3))},
gjx(){return 6+this.Q.z},
gjw(){return this.Q.ay},
cm(){return this.Q.at},
km(){return this.Q.CW},
aj(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="{1} is afraid!"
for(s=i.Q.e,r=s.length,q=i.ax,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
n=q.p(0,o)
n.toString
q.i(0,o,Math.max(0,n-1))}m=0+i.nm(a)+i.mq(a)
s=i.ch*0.75+m*0.2
i.ch=s
i.ch=B.e.P(s,0,1)
s=i.y
l=5+s.S(0,a.y.y).gb3()
r=a.x
r===$&&A.b()
s=r.f.C(s.gm(),s.gn())
if(!(!s.b&&s.d+s.e>s.c))l=5+l*2
i.ds(-(2+l*i.z/i.Q.f))
i.CW=B.e.P(i.CW,0,i.cx)
k=Math.max(m,i.ch)
A.ci(i,"aware",m,h)
A.ci(i,"alert",i.ch,h)
A.ci(i,"notice",k,h)
A.ci(i,"fear",i.CW/i.cx,h)
j=i.at
s=j instanceof A.cf
if(s&&i.CW>i.cx){i.h_()
return A.iU(g,new A.ct(),B.aZ)}if(s){s=$.m()
r=i.lt(k)
r=s.T(100)<r
s=r}else s=!1
if(s){i.ch=1
i.h_()
return A.iU("{1} wakes up!",new A.cv(),B.bp)}s=j instanceof A.cv
if(s&&i.CW>i.cx)return A.iU(g,new A.ct(),B.aZ)
if(s&&k<0.01){i.ch=0
return A.iU("{1} falls asleep.",new A.cf(),h)}if(j instanceof A.ct&&i.CW<=0)return A.iU("{1} find[s] {1 his} courage.",new A.cv(),h)
return i.at.bT(a)},
lt(a){var s
if(a<0.1)return 0
if(a>0.8)return 100
s=A.v(a,0.1,0.8,0,1)
return B.e.O(A.v(s*s*s,0,1,5,100))},
nm(a){var s,r,q,p,o,n=this,m="see"
if(n.Q.w===0){A.ci(n,m,0,"sightless")
return 0}s=a.y.y
r=a.x
r===$&&A.b()
if(!r.eM(n,s)){A.ci(n,m,0,"out of sight")
return 0}r=r.f.C(s.gm(),s.gn())
q=r.d+r.e
if(q===0){A.ci(n,m,0,"hero in dark")
return 0}p=s.S(0,n.y).gb3()
r=n.Q.w
if(p>=r){A.ci(n,m,0,"too far")
return 0}o=(r-p)/r
A.ci(n,m,q*o,null)
return q/64*o},
mq(a){var s,r,q,p=this
if(p.Q.x===0){A.ci(p,"hear",0,"deaf")
return 0}s=a.x
s===$&&A.b()
r=p.y
s=s.geE()
r=s.jl(s.iK(r))
s=a.y.cy
q=r*s*p.Q.x/10
A.ci(p,"hear",q,"noise "+A.J(s)+", volume "+A.J(q))
return q},
ds(a){var s,r=this
if(r.z<=0)return
s=r.Q.ax
if(s.c)return
if(s.d)return
r.CW=Math.max(0,r.CW+a)},
ki(a){var s=$.m(),r=t.aH.a(this.Q.d)
s=s.T(r.length)
if(!(s>=0&&s<r.length))return A.c(r,s)
return A.a([A.bD(r[s])],t.o0)},
hC(a){return 0},
kn(a,b,c){var s,r,q=a.c
q===$&&A.b()
s=q.y.Q.CW.a
s.toString
r=100*c/B.e.L(Math.pow(s,1.458)+9)
this.ds(-r)
s=q.y.Q.CW.a
s.toString
A.j7(this,"fear","hit for "+c+"/"+B.e.L(Math.pow(s,1.458)+9)+" decrease by "+A.J(r))
this.jj(q,new A.pv(a,c))},
nP(a,b){var s,r=this
if(r.at instanceof A.cf)return
s=50*b/r.Q.f
r.ds(-s)
A.j7(r,"fear","witness "+b+"/"+r.Q.f+" decrease by "+A.J(s))},
kr(a,b,c){var s,r,q,p,o,n,m=this
m.ch=1
s=m.Q
r=100*c/s.f
if(s.ax.a)r*=-3
m.ds(r)
A.j7(m,"fear","hit for "+c+"/"+m.Q.f+" increases by "+A.J(r))
s=a.c
s===$&&A.b()
m.jj(s,new A.pw(m,a,c))
q=m.Q.e
p=A.M(q)
o=p.h("aj<1>")
n=A.a6(new A.aj(q,p.h("B(1)").a(new A.px(m,c)),o),o.h("k.E"))
q=n.length
if(q!==0){p=$.m()
t.kz.a(n)
q=p.T(q)
if(!(q>=0&&q<n.length))return A.c(n,q)
q=n[q]
m.kO(q)
a.h8(q.bQ(s,m),m)}},
nQ(a,b,c){var s,r,q,p=this
if(p.at instanceof A.cf)return
s=p.Q
r=50*c/s.f
q=s.ax
if(q.e&&b.Q===s)r*=-2
else if(q.a)r*=-1
p.ds(r)
A.j7(p,"fear","witness "+c+"/"+p.Q.f+" increase by "+A.J(r))},
kj(a,b){var s,r,q,p,o,n,m,l,k=this,j=a.c
j===$&&A.b()
s=j.x
s===$&&A.b()
r=k.y
q=k.Q
p=s.dZ(r,q.Q,q.c)
for(s=p.length,o=0;o<p.length;p.length===s||(0,A.p)(p),++o){n=p[o]
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
if(!m.b&&m.d+m.e>m.c||a.a instanceof A.au)j.y.Q.at.a1(B.I,"{1} drop[s] {2}.",k,n,null)}j=j.x
j===$&&A.b()
j.kB(k)},
hA(a,b,c){var s,r=a.x
r===$&&A.b()
s=r.f.C(b.gm(),b.gn())
if(!(!s.b&&s.d+s.e>s.c)){s=r.f.C(c.gm(),c.gn())
s=!s.b&&s.d+s.e>s.c}else s=!0
if(s){s=a.y
if(!(s.at instanceof A.aR))s.at=null}s=r.f.C(b.gm(),b.gn())
if(!(!s.b&&s.d+s.e>s.c)){r=r.f.C(c.gm(),c.gn())
r=!r.b&&r.d+r.e>r.c}else r=!1
if(r)a.y.fj(this)},
jj(a,b){var s,r,q,p,o,n,m
t.lL.a(b)
s=a.x
s===$&&A.b()
r=s.b
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
if(o===this)continue
if(!(o instanceof A.ac))continue
n=o.y
m=this.y
n=n.S(0,m)
if(Math.max(Math.abs(n.a),Math.abs(n.b))>20)continue
if(s.eM(o,m))b.$1(o)}},
h_(){var s,r,q,p,o
for(s=this.Q.e,r=s.length,q=this.ax,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
q.i(0,o,$.m().aO(o.a/2))}}}
A.pv.prototype={
$1(a){a.nP(this.a,this.b)},
$S:30}
A.pw.prototype={
$1(a){a.nQ(this.b,this.a,this.c)},
$S:30}
A.px.prototype={
$1(a){return t.d0.a(a).i2(this.a,this.b)},
$S:31}
A.iT.prototype={
V(){var s,r,q,p=this
p.Y(p.e,p.a)
s=p.r
if(s!=null)p.ct(s,p.a)
r=t.B.a(p.a)
q=r.at=p.f
q.a!==$&&A.aq()
q.a=r
r=p.c
r===$&&A.b()
return p.bd(q.bT(r))}}
A.pt.prototype={
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
fo(a,b){var s,r,q,p=this,o=null
if(b.x!==0)return o
s=a.S(0,p.b).gb3()===1
if(p.a.w.C(a.a,a.b)!=null){if(s)return o
return 60}r=b.a.e
q=$.bM()
if(r.a0(0,q))if((p.d.gb4().a&q.a)!==0)return 20
else if(s)return o
else return 80
if((r.a&p.d.gb4().a)!==0)return 10
return o},
hI(a){return a.a},
hV(){var s=this.e
if(s==null)return null
return s.a}}
A.eI.prototype={
fR(a,b){var s,r,q,p,o=this.a
o===$&&A.b()
s=o.Q.y
if(o.b.a>0||o.d.a>0)s+=B.e.L(o.gde()*50)
else if(o.y.F(0,b).a0(0,a.y.y))s=s/4|0
s=Math.min(s,90)
if(!($.m().T(100)<s))return b
if(b===B.r)r=B.a9
else{r=A.a([],t.T)
for(q=0;q<3;++q){B.a.j(r,b.gb9())
B.a.j(r,b.gba())}for(q=0;q<2;++q){B.a.j(r,b.gbC())
B.a.j(r,b.gbR())}B.a.j(r,b.gbC().gb9())
B.a.j(r,b.gbR().gba())}o=A.M(r)
p=o.h("aj<1>")
r=A.a6(new A.aj(r,o.h("B(1)").a(new A.pu(this,a)),p),p.h("k.E"))
o=r.length
if(o===0)return b
p=$.m()
t.du.a(r)
o=p.T(o)
if(!(o>=0&&o<r.length))return A.c(r,o)
return r[o]}}
A.pu.prototype={
$1(a){var s,r,q,p
t.j.a(a)
s=this.a.a
s===$&&A.b()
r=s.y.F(0,a)
q=this.b
p=q.x
p===$&&A.b()
if(!(p.bj(r,s.gb4())&&p.f.C(r.a,r.b).x===0))return!1
s=p.w.C(r.a,r.b)
return s==null||s===q.y},
$S:13}
A.cf.prototype={
bT(a){return A.kM()}}
A.cv.prototype={
bT(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.m6(a)
if(b!==B.r)return A.bw(b)
s=c.a
s===$&&A.b()
r=s.Q.e
q=A.M(r)
p=q.h("aj<1>")
o=A.a6(new A.aj(r,q.h("B(1)").a(new A.nd(c,a)),p),p.h("k.E"))
r=o.length
if(r!==0){q=$.m()
t.kz.a(o)
r=q.T(r)
if(!(r>=0&&r<o.length))return A.c(o,r)
r=o[r]
s.kO(r)
return r.bQ(a,s)}r=s.Q
if(r.ax.d){n=a.y.y.S(0,s.y)
if(n.gb3()!==1)return A.kM()
return A.bw(n.gkg())}s.ay=!0
for(q=r.e,p=q.length,m=0,l=0,k=0;k<p;++k){j=q[k]
if(!(j instanceof A.fB))continue
m+=j.b.c/j.a;++l}if(l!==0){for(q=r.d,p=q.length,i=0,h=0,k=0;k<p;++k){i+=q[k].c;++h}if(h>0)i/=h
m/=l
g=100*m/(m+i)+s.CW+100*(1-s.z/r.f)
if(s.y.S(0,a.y.y).e9(0,1))s.ay=g<60
else s.ay=g<30}f=c.me(a)
e=l>0?c.mf(a):null
if(s.ay)d=f==null?e:f
else d=e==null?f:e
return A.bw(c.fR(a,d==null?B.r:d))},
m6(a){var s,r,q=a.x
q===$&&A.b()
s=this.a
s===$&&A.b()
r=s.y
if(q.f.C(r.gm(),r.gn()).x===0)return B.r
return A.ck(q,s.y,s.gb4(),null,!0,null).hi(new A.nb(a))},
mf(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={}
c.a=9999
s=this.a
s===$&&A.b()
r=s.Q.e
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
if(o.gaz()>0&&o.gaz()<c.a)c.a=o.gaz()}n=new A.nc(c,this,a)
if(n.$1(s.y)){m=s.y.S(0,a.y.y).gb3()
l=B.r}else{l=null
m=0}for(r=a.y,p=0;p<8;++p){k=B.a9[p]
j=s.y.F(0,k)
q=a.x
q===$&&A.b()
i=s.cm()
if(q.bj(j,s.e.a>0?new A.ad(i.a|$.U().a):i)){h=q.w
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
k=A.ck(r,s.y,s.gb4(),null,!0,c.a).hi(n)
if(k!==B.r){A.ch(s,"ranged position "+k.t(0))
return k}A.ch(s,"no good ranged position")
return null},
me(a){var s,r,q=this.md(a)
if(q!=null)return q
s=a.x
s===$&&A.b()
r=this.a
r===$&&A.b()
return new A.pt(r,s,r.y,s.a.y.y).fi()},
md(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a
f===$&&A.b()
s=a.y
r=A.dV(f.y,s.y)
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
if(!n.bj(o,f.e.a>0?new A.ad(i.a|$.U().a):i))return g
n=n.w
m=o.gm()
l=o.gn()
n.l(m,l)
k=n.a
m=l*n.b.b.a+m
if(!(m>=0&&m<k.length))return A.c(k,m)
m=k[m]
if(m!=null&&!(m instanceof A.au))return g;++p
if(p>=f.Q.r)return g
if(o.a0(0,s.y))break}h=q.S(0,f.y)
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
mo(a,b){var s,r,q,p,o,n,m,l
for(s=a.y,r=A.dV(b,s.y);r.q(),!0;){q=r.a
if(q.a0(0,s.y))return!0
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
if(p)return!1}throw A.n(A.bC("Unreachable."))}}
A.nd.prototype={
$1(a){var s
t.d0.a(a)
s=this.a.a
s===$&&A.b()
return s.ax.p(0,a)===0&&a.bF(this.b,s)},
$S:31}
A.nb.prototype={
$1(a){var s=this.a.x
s===$&&A.b()
return s.f.C(a.a,a.b).x===0},
$S:2}
A.nc.prototype={
$1(a){var s,r,q=this,p=q.c,o=a.S(0,p.y.y)
if(o.bg(0,q.a.a))return!1
if(o.gb3()<=2)return!1
s=p.x
s===$&&A.b()
s=s.w.C(a.gm(),a.gn())
if(s!=null){r=q.b.a
r===$&&A.b()
r=s!==r
s=r}else s=!1
if(s)return!1
return q.b.mo(p,a)},
$S:2}
A.ct.prototype={
bT(a){var s,r,q,p,o,n=this,m=a.x
m===$&&A.b()
s=n.a
s===$&&A.b()
r=s.y
if(m.f.C(r.gm(),r.gn()).b)return A.kM()
q=A.ck(m,s.y,s.gb4(),null,!0,s.Q.r).hi(new A.n7(a))
if(q!==B.r){A.ch(s,"fleeing "+q.t(0)+" out of sight")
return A.bw(n.fR(a,q))}m=t.e0
p=new A.aj(B.a9,t.ca.a(new A.n8(n,a,s.y.S(0,a.y.y).gb3())),m)
if(!p.gaL(0)){r=$.m()
m=A.a6(p,m.h("k.E"))
t.du.a(m)
r=r.T(m.length)
if(!(r>=0&&r<m.length))return A.c(m,r)
q=m[r]
A.ch(s,"fleeing "+q.t(0)+" away from hero")
return A.bw(n.fR(a,q))}o=s.at=new A.cv()
o.a=s
return o.bT(a)}}
A.n7.prototype={
$1(a){var s=this.a.x
s===$&&A.b()
return s.f.C(a.a,a.b).b},
$S:2}
A.n8.prototype={
$1(a){var s,r,q,p
t.j.a(a)
s=this.a.a
s===$&&A.b()
r=s.y.F(0,a)
q=this.b
p=q.x
p===$&&A.b()
if(!(p.bj(r,s.gb4())&&p.w.C(r.a,r.b)==null&&p.f.C(r.a,r.b).x===0))return!1
return r.S(0,q.y.y).gb3()>this.c},
$S:13}
A.b7.prototype={
gaz(){return 0},
bF(a,b){return!0},
i2(a,b){return!1}}
A.kG.prototype={
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
if(q==null){q=A.k2(o)
B.a.i(s,c,q)}q.bH(q.$ti.c.a(b))},
f9(){var s,r,q,p=this.a
for(;;){s=this.b
r=p.length
if(s<r){if(!(s>=0))return A.c(p,s)
q=p[s]
q=q==null?null:q.b===q.c
q=q!==!1}else q=!1
if(!q)break
this.b=s+1}if(s>=r)return null
if(!(s>=0))return A.c(p,s)
return p[s].d8()}}
A.et.prototype={
fu(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.a.f
if(c==null){k.d!==$&&A.aq()
k.d=new A.d(1,1)
j=j.b.b
s=j.a-2
r=j.b-2}else{q=k.b
p=Math.max(1,q.gm()-c)
o=Math.max(1,q.gn()-c)
j=j.b.b
n=Math.min(j.a-1,q.gm()+c+1)
m=Math.min(j.b-1,q.gn()+c+1)
k.d!==$&&A.aq()
k.d=new A.d(p,o)
s=n-p
r=m-o}j=t.z
j=j.a(new A.a8(A.an(s*r,-2,!1,t.S),new A.Y(new A.d(0,0),new A.d(s,r)),j))
k.c!==$&&A.aq()
k.c=j
q=k.d
q===$&&A.b()
l=k.b.S(0,q)
k.e.aX(0,l,0)
j.aW(l.a,l.b,0)},
gcD(){return new A.R(this.p6(),t.e6)},
p6(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l
return function $async$gcD(a,b,c){if(b===1){p.push(c)
r=q}for(;;)A:switch(r){case 0:o=s.f,n=0
case 3:while(n>=o.length)if(!s.fW()){r=1
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
jy(a){var s,r=this.iF(t.cm.a(a)),q=r.length
if(q===0)return null
s=$.m()
t.A.a(r)
q=s.T(q)
if(!(q>=0&&q<r.length))return A.c(r,q)
q=r[q]
s=this.d
s===$&&A.b()
return q.F(0,s)},
ci(a){var s,r,q,p,o,n=this.d
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
if(!(J.ax(q[p],-2)&&this.fW()))break}o=n.C(s,r)
if(o===-2||o===-1)return null
return o},
hi(a){var s,r=this.lP(this.iF(t.cm.a(a))),q=r.length
if(q===0)return B.r
s=$.m()
t.du.a(r)
q=s.T(q)
if(!(q>=0&&q<r.length))return A.c(r,q)
return r[q]},
iF(a){var s,r,q,p,o,n,m,l,k,j,i=this
t.cm.a(a)
s=A.a([],t.l)
for(r=i.f,q=null,p=0;;++p){while(p>=r.length)if(!i.fW())return s
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
lP(a){var s,r=A.be(t.j)
B.a.ae(t.A.a(a),new A.o8(this,A.be(t.u),r))
s=A.a6(r,r.$ti.c)
return s},
fW(){var s,r=this.e.f9()
if(r==null)return!1
s=this.c
s===$&&A.b()
s=new A.o9(this,r,s.C(r.gm(),r.gn()))
s.$2(B.L,!1)
s.$2(B.K,!1)
s.$2(B.O,!1)
s.$2(B.R,!1)
s.$2(B.T,!0)
s.$2(B.Q,!0)
s.$2(B.S,!0)
s.$2(B.P,!0)
return!0}}
A.o8.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
t.u.a(a)
s=f.b
if(s.G(0,a))return
s.j(0,a)
for(s=f.a,r=s.b,q=f.c,p=0;p<8;++p){o=B.a9[p]
n=a.F(0,o)
m=s.c
m===$&&A.b()
l=m.b
if(!l.G(0,n))continue
k=s.d
k===$&&A.b()
if(n.a0(0,r.S(0,k)))q.j(0,o.gcF())
else{k=n.a
j=n.b
m.l(k,j)
i=m.a
l=l.b.a
h=j*l+k
g=i.length
if(!(h>=0&&h<g))return A.c(i,h)
h=i[h]
if(typeof h!=="number")return h.cK()
if(h>=0){m.l(k,j)
k=a.gm()
j=a.gn()
m.l(k,j)
k=j*l+k
if(!(k>=0&&k<g))return A.c(i,k)
k=i[k]
if(typeof k!=="number")return A.AQ(k)
k=h<k
m=k}else m=!1
if(m)f.$1(n)}}},
$S:11}
A.o9.prototype={
$2(a,b){var s,r,q,p,o,n,m,l=this.b.F(0,a),k=this.a,j=k.c
j===$&&A.b()
if(!j.b.G(0,l))return
s=l.a
r=l.b
if(!J.ax(j.C(s,r),-2))return
q=k.d
q===$&&A.b()
p=l.F(0,q)
p=k.a.f.C(p.a,p.b)
o=this.c
n=k.hP(o,l.F(0,q),p,b)
q=j.$ti
if(n==null)j.aW(s,r,q.c.a(-1))
else{m=o+n
j.aW(s,r,q.c.a(m))
B.a.j(k.f,l)
k.e.aX(0,l,m)}},
$S:137}
A.kd.prototype={
hP(a,b,c,d){var s,r=this,q=null
if((c.a.e.a&r.r.a)===0)return q
if(r.x&&c.x>0)return q
if(r.w&&r.a.w.C(b.a,b.b)!=null)return q
s=r.y
if(s!=null)s=a>=s
else s=!1
if(s)return q
return 1}}
A.ob.prototype={
d6(a){var s,r=this.a
if(r.a.y.b.a>0){this.mr()
return}for(s=0;s<8;++s)this.n5(a,s)
r.dd(a,!1,0)},
mr(){var s,r
for(s=this.a,r=A.aa(s.f.b);r.q();)s.dd(new A.d(r.b,r.c),!0,0)
s.dd(s.a.y.y,!1,0)},
n5(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
if(!(a6<8))return A.c($.vf,a6)
s=$.vf[a6]
r=s[0]
q=s[1]
a4.b=A.a([],t.mS)
s=a4.a
p=s.f
o=p.b
for(n=p.a,m=o.b.a,l=n.length,k=r.a,j=r.b,i=!1,h=1;;h=e){g=a5.F(0,new A.d(k*h,j*h))
if(!o.G(0,g))break
for(f=h+2,e=h+1,d=!1,c=0;c<=h;++c){if(i||d)s.dd(g,!0,255)
else{b=a5.S(0,g)
a=b.a
b=b.b
a0=Math.sqrt(a*a+b*b)
if(a0>24){d=!0
a1=255}else{a2=a0/24
a1=B.e.L(a2*a2*255)}a3=new A.mk(c/f,(c+1)/e)
s.dd(g,a4.mv(a3),a1)
b=g.a
a=g.b
p.l(b,a)
b=a*m+b
if(!(b>=0&&b<l))return A.c(n,b)
b=n[b]
a=$.U()
if((b.a.e.a&a.a)===0)i=a4.lq(a3)}g=g.F(0,q)
if(!o.G(0,g))break}}},
mv(a){var s,r,q,p,o,n
for(s=this.b,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(n.a<=q&&n.b>=p)return!0}return!1},
lq(a){var s,r,q,p,o,n,m
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
B.a.d7(this.b,p)}else{if(!(p<r))return A.c(s,p)
s=s[p]
s.a=Math.min(s.a,q)}else if(m){q=p-1
if(!(q>=0&&q<r))return A.c(s,q)
q=s[q]
q.b=Math.max(q.b,a.b)}else{A.M(s).c.a(a)
s.$flags&1&&A.bo(s,"insert",2)
if(p>r)A.a_(A.hm(p,null))
s.splice(p,0,a)}s=this.b
r=s.length
if(r===1){if(0>=r)return A.c(s,0)
s=s[0]
s=s.a===0&&s.b===1}else s=!1
return s}}
A.mk.prototype={
t(a){return"("+A.J(this.a)+"-"+A.J(this.b)+")"}}
A.p3.prototype={
cE(){var s=this
if(s.f)s.mI()
if(s.r)s.mH()
if(s.w)s.d.d6(s.a.a.y.y)
if(s.f||s.r||s.w){s.mV()
s.mJ()
s.nN()}s.w=s.r=s.f=!1},
mI(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.e
B.a.aS(a3.a)
for(s=a2.a,r=s.f,q=r.b.b,p=q.b,q=q.a,o=a2.b,n=o.$ti.c,m=o.a,l=o.b.b.a,s=s.r,k=r.a,j=k.length,i=0;i<p;++i)for(h=i*l,g=i*q,f=0;f<q;++f){e=new A.d(f,i)
r.l(f,i)
d=g+f
if(!(d>=0&&d<j))return A.c(k,d)
d=k[d]
c=B.c.P(d.a.c+d.f,0,192)
b=s.p(0,e)
b=(b==null?A.bE(B.X,null):b).b
a=A.M(b)
b=new J.aZ(b,b.length,a.h("aZ<1>"))
a=a.c
a0=0
while(b.q()){a1=b.d
a0=Math.max(a0,(a1==null?a.a(a1):a1).a.ay)}c+=A.k0(a0)/2|0
if(d.w.d&&d.x>0)c+=A.k0(7)
d=h+f
if(c>0){c=Math.min(c,192)
n.a(c)
o.l(f,i)
B.a.i(m,d,c)
a3.aX(0,e,255-c)}else{n.a(0)
o.l(f,i)
B.a.i(m,d,0)}}a2.j0(o,21)},
mH(){var s,r,q,p,o,n,m,l,k,j=this,i=j.c,h=i.$ti.c,g=i.a
B.a.oC(g,0,g.length,h.a(0))
s=j.e
B.a.aS(s.a)
for(r=j.a.b,q=r.length,p=i.b.b.a,o=0;o<r.length;r.length===q||(0,A.p)(r),++o){n=r[o]
m=A.k0(n.gdN())
if(m>0){l=n.y
h.a(m)
k=l.gm()
l=l.gn()
i.l(k,l)
B.a.i(g,l*p+k,m)
s.aX(0,n.y,255-m)}}j.j0(i,42)},
mV(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
for(s=this.a.f,r=s.b.b,q=r.b,r=r.a,p=this.b,o=p.a,n=p.b.b.a,m=o.length,l=this.c,k=l.a,j=l.b.b.a,i=k.length,h=s.a,g=h.length,f=0;f<q;++f)for(e=f*n,d=f*j,c=f*r,b=0;b<r;++b){s.l(b,f)
a=c+b
if(!(a>=0&&a<g))return A.c(h,a)
a=h[a]
a0=$.U()
if((a.a.e.a&a0.a)===0)continue
p.l(b,f)
a0=e+b
if(!(a0>=0&&a0<m))return A.c(o,a0)
a.d=J.uV(o[a0],0,255)
l.l(b,f)
a0=d+b
if(!(a0>=0&&a0<i))return A.c(k,a0)
a.e=J.uV(k[a0],0,255)}},
mJ(){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.a.f,r=s.b.b,q=r.b,r=r.a,p=s.a,o=p.length,n=0;n<q;++n)for(m=n*r,l=0;l<r;++l){k={}
s.l(l,n)
j=m+l
if(!(j>=0&&j<o))return A.c(p,j)
j=p[j]
i=$.U()
if((j.a.e.a&i.a)!==0)continue
k.a=k.b=0
k.c=!1
h=new A.p4(k,this,l,n)
for(g=0;g<4;++g)h.$1(B.at[g])
if(!k.c)for(g=0;g<4;++g)h.$1(B.c8[g])
j.d=k.b
j.e=k.a}},
nN(){var s,r,q,p,o
for(s=this.a,r=s.f.b.b,q=r.b,r=r.a,p=0;p<q;++p)for(o=0;o<r;++o)s.oA(o,p)
r=s.a.y.y
s.cY(r.gm(),r.gn(),!0)},
j0(a,b){var s,r,q,p,o,n,m,l
t.z.a(a)
s=B.e.aR(b*1.5)
for(r=a.a,q=a.b.b.a,p=r.length,o=this.e;;){n=o.f9()
if(n==null)break
m=n.gm()
l=n.gn()
a.l(m,l)
m=l*q+m
if(!(m>=0&&m<p))return A.c(r,m)
m=new A.p5(this,n,r[m],a,b)
m.$2(B.L,b)
m.$2(B.K,b)
m.$2(B.O,b)
m.$2(B.R,b)
m.$2(B.Q,s)
m.$2(B.P,s)
m.$2(B.T,s)
m.$2(B.S,s)}}}
A.p4.prototype={
$1(a){var s,r,q,p=this,o=p.c+a.c,n=p.d+a.d
if(o<0)return
s=p.b.a.f
r=s.b.b
if(o>=r.a)return
if(n<0)return
if(n>=r.b)return
q=s.C(o,n)
if(q.b)return
s=$.U()
if((q.a.e.a&s.a)===0)return
s=p.a
s.c=!0
s.b=Math.max(s.b,q.d)
s.a=Math.max(s.a,q.e)},
$S:11}
A.p5.prototype={
$2(a,b){var s,r,q,p,o=this,n=o.b.F(0,a),m=o.a,l=m.a.f
if(!l.b.G(0,n))return
s=n.a
r=n.b
l=l.C(s,r)
q=$.U()
if((l.a.e.a&q.a)===0)return
p=o.c-b
l=o.d
q=l.C(s,r)
if(typeof q!=="number")return q.cK()
if(q>=p)return
l.aW(s,r,l.$ti.c.a(p))
if(p<=o.e)return
m.e.aX(0,n,255-p)},
$S:92}
A.eN.prototype={
t(a){return this.a.t(0)+" pos:"+this.b.t(0)+" cost:"+this.d},
gI(a){return this.c}}
A.kt.prototype={
fi(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=new A.cg(A.a([],t.nK),t.nA),a0=A.be(t.u),a1=b.b,a2=b.c
a.aX(0,new A.eN(B.r,a1,0,0),b.dT(a1,a2))
for(a1=b.a.f,s=a1.a,r=a1.b,q=r.b.a,p=s.length;;){o=a.f9()
if(o==null)break
n=o.b
if(n.a0(0,a2))return b.hI(o)
if(!a0.j(0,n))continue
m=b.hG(o)
if(m!=null)return m
for(l=o.c+1,k=o.d,j=o.a,i=j===B.r,h=0;h<8;++h){g=B.a9[h]
f=n.F(0,g)
if(a0.G(0,f))continue
if(!r.G(0,f))continue
e=f.a
d=f.b
a1.l(e,d)
e=d*q+e
if(!(e>=0&&e<p))return A.c(s,e)
c=b.fo(f,s[e])
if(c==null)continue
e=i?g:j
d=k+c
a.aX(0,new A.eN(e,f,l,d),d+b.dT(f,a2))}}return b.hV()},
dT(a,b){return b.S(0,a).gb3()}}
A.qk.prototype={
pq(a,b){if(b.S(0,a).gb3()>16)return 0
return this.jl(new A.rH(this.a,a,b).fi())},
iK(a){var s
if(this.a.a.y.y.S(0,a).gb3()>16)return 16
this.n4()
s=this.b.ci(a)
return s==null?16:s},
jl(a){var s=(16-a)/16
return s*s},
n4(){var s,r,q=this,p=q.b
if(p!=null&&q.a.a.y.y.a0(0,p.b))return
p=q.a
s=p.a.y.y
r=new A.mm(p,s,new A.cg(A.a([],t.c),t.r),A.a([],t.l))
r.fu(p,s,null)
q.b=r}}
A.mm.prototype={
hP(a,b,c,d){var s,r,q=null
if(a>=16)return q
s=b.a
if(s<1)return q
r=this.a.f.b.b
if(s>=r.a-1)return q
s=b.b
if(s<1)return q
if(s>=r.b-1)return q
return A.wt(c)}}
A.rH.prototype={
hG(a){if(a.d>16)return 16
return null},
fo(a,b){return A.wt(b)},
hI(a){return a.d},
hV(){return 16}}
A.qm.prototype={
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
l.c!==$&&A.e7()
k=l.c=new A.p3(l,new A.a8(n,new A.Y(new A.d(0,0),new A.d(q,r)),m),new A.a8(p,new A.Y(new A.d(0,0),new A.d(q,r)),m),new A.ob(l,B.hF),new A.cg(s,t.r))}return k},
geE(){var s=this.d
return s===$?this.d=new A.qk(this):s},
eM(a,b){var s,r,q,p,o,n,m,l
for(s=A.dV(a.y,b),r=this.f,q=r.a,p=r.b.b.a,o=q.length;s.q(),!0;){n=s.a
if(n.a0(0,b))return!0
m=n.gm()
l=n.gn()
r.l(m,l)
m=l*p+m
if(!(m>=0&&m<o))return A.c(q,m)
m=q[m]
l=$.U()
if((m.a.e.a&l.a)===0)return!1}throw A.n(A.bC("Unreachable."))},
oj(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=A.dV(a.y,b),r=this.f,q=r.a,p=r.b.b.a,o=q.length,n=this.w,m=n.a,l=n.b.b.a,k=m.length;s.q(),!0;){j=s.a
if(j.a0(0,b))return!0
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
if((i.a.e.a&h.a)===0)return!1}throw A.n(A.bC("Unreachable."))},
bj(a,b){var s,r
if(a.gm()<0)return!1
s=this.f
r=s.b.b
if(a.gm()>=r.a)return!1
if(a.gn()<0)return!1
if(a.gn()>=r.b)return!1
return(s.C(a.gm(),a.gn()).a.e.a&b.a)!==0},
dA(a){var s,r
B.a.j(this.b,a)
s=this.w
r=a.y
s.$ti.c.a(a)
s.aW(r.gm(),r.gn(),a)},
kB(a){var s=this,r=s.b,q=B.a.c4(r,a),p=s.e
if(p>q)s.e=p-1
B.a.d7(r,q)
if(s.e>=r.length)s.e=0
r=s.w
p=a.y
r.$ti.c.a(null)
r.aW(p.gm(),p.gn(),null)},
dZ(a,b,c){var s=A.a([],t.I)
b.b0(this.a.y.Q.ax,c,new A.qy(this,s,A.ck(this,a,$.aX(),!1,null,null),a))
return s},
cR(a,b){this.r.b7(b,new A.qu()).c7(a)
if(a.a.ay>0)this.gav().f=!0},
cl(a){var s=this.r.p(0,a)
return s==null?A.bE(B.X,null):s},
e1(a,b){var s=this.r,r=s.p(0,b)
B.a.ac(r.b,a)
if(a.a.ay>0)this.gav().f=!0
if(!r.gN(0).q())s.ac(0,b)},
hs(a){this.r.ae(0,new A.qw(t.mH.a(a)))},
hQ(){var s=this.gav()
s.w=s.r=s.f=!0
this.geE().b=null},
cY(a,b,c){var s,r=this.f.C(a,b)
if(r.ff(c))if(!r.b&&r.d+r.e>r.c){s=this.w.C(a,b)
if(s!=null&&s instanceof A.ac)this.a.y.fj(s)}},
oA(a,b){return this.cY(a,b,null)},
dd(a,b,c){var s,r=this.f.C(a.gm(),a.gn())
r.b=b
r.c=c
if(!b&&r.d+r.e>c){s=this.w.C(a.gm(),a.gn())
if(s!=null&&s instanceof A.ac)this.a.y.fj(s)}},
jQ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=this.w,r=s.a,q=s.b.b.a,p=r.length,o=this.f,n=o.a,m=o.b,l=m.b,k=l.a,j=n.length,m=m.a,i=m.a,h=i+k,g=Math.min(i,h),h=Math.max(i,h);;){i=$.m()
i=i.a
f=i.a_(h-g)+g
e=m.b
d=e+l.b
c=Math.min(e,d)
d=Math.max(e,d)
i=i.a_(d-c)+c
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
A.qv.prototype={
$1(a){return new A.dQ($.xb(),$.aw())},
$S:93}
A.qy.prototype={
$1(a){var s,r,q,p,o,n=this
B.a.j(n.b,a)
s=n.c
r=n.a
q=s.jy(new A.qx(r))
if(q==null){s=s.gcD()
s=A.z1(s,10,s.$ti.h("k.E"))
p=A.a6(s,A.y(s).h("k.E"))
s=p.length
if(s!==0){o=$.m()
t.jX.a(p)
s=o.T(s)
if(!(s>=0&&s<p.length))return A.c(p,s)
q=p[s]}else q=n.d}q.toString
r.cR(a,q)},
$S:6}
A.qx.prototype={
$1(a){var s
if($.m().T(5)===0)return!0
s=this.a
return s.w.C(a.a,a.b)==null&&!s.r.al(a)},
$S:2}
A.qu.prototype={
$0(){return A.bE(B.X,null)},
$S:94}
A.qw.prototype={
$2(a,b){var s,r,q,p
t.u.a(a)
for(s=t.U.a(b).b,r=A.M(s),s=new J.aZ(s,s.length,r.h("aZ<1>")),q=this.a,r=r.c;s.q();){p=s.d
q.$2(p==null?r.a(p):p,a)}},
$S:95}
A.ad.prototype={
gZ(a){return this.a},
a0(a,b){if(b==null)return!1
if(b instanceof A.ad)return this.a===b.a
return!1},
c9(a,b){return new A.ad(this.a|b.a)},
t(a){var s=A.a([],t.s),r=this.a
if((r&$.bM().a)!==0)s.push("door")
if((r&$.U().a)!==0)s.push("fly")
if((r&$.is().a)!==0)s.push("swim")
if((r&$.aX().a)!==0)s.push("walk")
return B.a.aP(s,"|")}}
A.bv.prototype={
t(a){return this.a}}
A.dR.prototype={}
A.dQ.prototype={
nV(a){this.f=B.c.P(this.f+a,0,192)},
ff(a){var s,r=this
if(a!==!0)s=!r.b&&r.d+r.e>r.c
else s=!0
if(s&&!r.r)return r.r=!0
return!1}}
A.iz.prototype={
a7(a){switch(a){case B.a0:this.il(-1)
break
case B.a1:this.il(1)
break
case B.G:this.a.aa()
break
default:return!1}return!0},
ag(a){var s,r,q,p,o,n=this,m=null
a.ck(0,0,a.gaQ(),a.gan())
s=a.e.a.b.b
r=s.b-1
n.n9(new A.aS(new A.d(40,r),0,0,a))
s=s.a-40
r=new A.aS(new A.d(s,r),40,0,a)
q=n.c
p=n.d
if(!(p>=0&&p<q.length))return A.c(q,p)
o=q[p]
A.bi(r,m,m,o.gM(),!0,m,m,m)
A.fI(r,o.gW(),m,s-1,1,2)
r.k(1,10,"Requirement:",B.f)
s=o.gbA().gW()
q=n.b
A.fI(r,s,o.gbA().dG(q)==null?B.p:B.m,m,1,12)
r.k(1,32,"Focus cost:",B.i)
r.k(13,32,A.P(o.eW(q.y.Q),!1,3),B.d)
s=t.N
A.bq(a,A.A(["\u2195","Select ability","`","Exit"],s,s),m)},
n9(a){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500"
A.bi(a,i,i,"Abilities",!1,i,i,i)
a.k(34,1,"Focus",B.f)
a.k(2,2,h,B.l)
for(s=j.c,r=s.length,q=j.b,p=q.y.Q,o=0,n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
l=o*2+3
a.k(2,l+1,h,B.u)
A:{k=j.d
if(o===k){k=B.im
break A}k=m.gbA().dG(q)
if(k==null){k=B.ie
break A}k=B.ig
break A}a.k(2,l,m.gM(),k.a)
a.k(34,l,A.P(m.eW(p),!1,5),k.b);++o}a.am(1,j.d*2+3,A.cB(9658,B.h,i))},
il(a){var s=this,r=s.d,q=s.c.length
s.d=B.c.ad(r+q+a,q)
s.K()}}
A.fA.prototype={
aG(a){var s,r=a.x
r===$&&A.b()
s=this.a.y
s=r.f.C(s.gm(),s.gn())
if(!(!s.b&&s.d+s.e>s.c))return!1
return++this.d<24*this.c},
br(a,b){var s
t.a.a(b)
s=this.a.y
if((B.c.A(this.d,12)&1)===1)b.$3(s.gm(),s.gn(),this.b)},
$iat:1}
A.j4.prototype={
aG(a){var s=this.c
return++this.d<s*B.e.O(A.v(s,1,10,16,8))},
br(a,b){var s,r=this
t.a.a(b)
s=r.c
if(B.c.ad(r.d,B.e.O(A.v(s,1,10,16,8)))<B.c.A(B.e.O(A.v(s,1,10,16,8)),2)){s=r.a
b.$3(s.gm(),s.gn(),r.b)}},
$iat:1}
A.fH.prototype={
aG(a){return--this.b>=0},
br(a,b){var s,r,q,p
t.a.a(b)
s=B.c.A(this.b,4)
if(!(s>=0&&s<5))return A.c($.v9,s)
r=A.am("*",$.v9[s],null)
q=A.vV(new A.iV(this.a,s),!0)
p=q.b
while(q.q())b.$3(p.b,p.c,r)},
$iat:1}
A.fL.prototype={
aG(a){var s=this
if($.m().T(s.c+2)===0)++s.c
return s.c<s.b.length},
br(a,b){var s,r,q,p,o
t.a.a(b)
s=a.x
s===$&&A.b()
r=this.a
if(s.f.C(r.gm(),r.gm()).b)return
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
$iat:1}
A.cA.prototype={
aG(a){var s,r=a.x
r===$&&A.b()
s=this.a
s=r.f.C(s.gm(),s.gn())
if(!(!s.b&&s.d+s.e>s.c))return!1
return--this.c>=0},
br(a,b){var s=this.a
t.a.a(b).$3(s.gm(),s.gn(),this.b)},
$iat:1}
A.jF.prototype={
aG(a){return this.c++<24},
br(a,b){var s,r,q,p,o=null
t.a.a(b)
s=a.x
s===$&&A.b()
r=this.a
q=this.b
if(s.f.C(r,q).b)return
p=[B.u,B.a_,B.F,B.J][B.c.ad(B.c.A(this.c,4),4)]
b.$3(r-1,q,A.am("-",p,o))
b.$3(r+1,q,A.am("-",p,o))
b.$3(r,q-1,A.am("|",p,o))
b.$3(r,q+1,A.am("|",p,o))},
$iat:1}
A.jI.prototype={
aG(a){return++this.b<24},
br(a,b){var s,r,q,p,o
t.a.a(b)
s=this.a
if((B.c.A(this.b,6)&1)===0){b.$3(s.gm(),s.gn(),$.wU())
b.$3(s.gm()-1,s.gn(),$.wW())
b.$3(s.gm()+1,s.gn(),$.wX())}else{r=s.gm()
q=s.gn()
p=$.wT()
b.$3(r-1,q-1,p)
q=s.gm()
r=s.gn()
o=$.wY()
b.$3(q-1,r+1,o)
b.$3(s.gm()+1,s.gn()-1,o)
b.$3(s.gm()+1,s.gn()+1,p)
p=s.gm()
o=s.gn()
r=$.wV()
b.$3(p-1,o,r)
b.$3(s.gm()+1,s.gn(),r)}},
$iat:1}
A.jQ.prototype={
aG(a){var s,r=a.x
r===$&&A.b()
s=this.a
s=r.f.C(s.gm(),s.gn())
if(!(!s.b&&s.d+s.e>s.c))return!1
return--this.c>=0},
br(a,b){var s=this.a
t.a.a(b).$3(s.gm(),s.gn(),this.b)},
$iat:1}
A.k6.prototype={
aG(a){return--this.c>=0},
br(a,b){var s,r,q,p=this
t.a.a(b)
s=a.x
s===$&&A.b()
r=p.b
q=t.v.a(s.f.C(r.gm(),r.gn()).a.d)
s=p.a
q=A.cB(q.a,q.b.bh(B.h,p.c/s),q.c.bh(B.k,p.c/s))
b.$3(r.gm(),r.gn(),q)},
$iat:1}
A.ks.prototype={
aG(a){var s,r,q=this,p=q.a+q.c
q.a=p
s=q.b+q.d
q.b=s
p=B.e.L(p)
s=B.e.L(s)
r=a.x
r===$&&A.b()
r=r.f
if(!r.b.G(0,new A.d(p,s)))return!1
p=r.C(p,s)
s=$.U()
if((p.a.e.a&s.a)===0)return!1
return q.e-->0},
br(a,b){t.a.a(b).$3(B.e.L(this.a),B.e.L(this.b),A.am("\u2022",this.f,null))},
$iat:1}
A.l4.prototype={
aG(a){var s,r,q,p=this,o=p.e,n=1-o*0.015,m=p.c*=n
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
br(a,b){var s,r,q,p,o=this
t.a.a(b)
s=B.e.L(o.a)
r=B.e.L(o.b)
q=a.x
q===$&&A.b()
if(!q.f.b.G(0,new A.d(s,r)))return
p=o.ml(o.c,o.d)
q=$.m()
t.ev.a($.u_)
q=q.T(4)
if(!(q>=0&&q<4))return A.c($.u_,q)
b.$3(s,r,A.cB(p,$.u_[q],null))},
ml(a,b){var s,r="|\\\\--//||\\\\--//||"
if(new A.d(B.e.L(a*10),B.e.L(b*10)).ea(0,5))return 8226
s=B.e.bK(Math.atan2(a,b)/6.283185307179586*16+8)
if(!(s>=0&&s<17))return A.c(r,s)
return r.charCodeAt(s)},
$iat:1}
A.la.prototype={
aG(a){var s=this.d
if((s&1)===0)if(--this.b<0)return!1;--s
this.d=s
return s>=0},
br(a,b){t.a.a(b).$3(this.a,this.b,this.c)},
$iat:1}
A.fO.prototype={
gh1(){var s,r=this,q=r.e
A:{if(0===q){s=r.b.Q.ay
break A}if(1===q){s=r.b.Q.ch
break A}if(2===q){s=r.b.Q.CW
break A}if(3===q){s=r.b.Q.cx
break A}s=null
break A}return s},
gj8(){var s,r=this.e
if(r<4)return null
s=this.c
r-=4
if(!(r<s.length))return A.c(s,r)
return s[r]},
gik(){var s,r,q,p,o=this,n=o.gh1()
if(n!=null){if(n.b===40)return!1
s=o.b.Q
r=n.hq(s)
return s.y>=r}else{q=o.gj8()
if(q!=null){s=o.b.Q
p=s.z.eK(q)
if(p===s.c.i5(q))return!1
r=B.e.L(1000*Math.pow(1.8,p+1-1))
return s.y>=r}else return!1}},
lg(a,b){var s,r
for(s=$.tn(),r=0;r<26;++r)s[r].gbA()},
a7(a){switch(a){case B.a0:this.im(-1)
return!0
case B.a1:this.im(1)
return!0
case B.G:this.a.aa()
return!0}return!1},
a9(a,b,c){var s,r,q,p,o,n=this
if(c||b)return!1
switch(a){case 71:if(n.gik()){s=n.gh1()
if(s!=null){r=n.b
q=r.Q
r.i7(s.hq(q))
s.kA(q,s.b+1)}else{p=n.gj8()
if(p!=null){r=n.b
q=r.Q.z
o=q.eK(p)+1
r.i7(B.e.L(1000*Math.pow(1.8,o-1)))
q.a.i(0,p,o)}}n.b.bq()
n.K()}return!0}return!1},
ag(a){var s,r,q,p,o,n,m=this,l=null
a.ck(0,0,a.gaQ(),a.gan())
A.bi(a,l,3,l,!1,46,l,l)
a.k(2,1,"Available experience:",B.i)
s=m.b.Q
a.k(25,1,A.P(s.y,!1,9),B.d)
m.lX(new A.aS(new A.d(46,11),0,3,a))
r=a.e.a.b.b
q=r.b
m.lV(new A.aS(new A.d(46,q-14),0,14,a))
p=m.e
o=p<4?6:9
a.am(1,p*2+o,A.cB(9658,B.h,l))
n=new A.aS(new A.d(r.a-46,q),46,0,a)
r=m.e
switch(r){case 0:m.lY(n)
break
case 1:m.lQ(n)
break
case 2:m.lZ(n)
break
case 3:m.lT(n)
break
default:q=m.c
r-=4
if(!(r>=0&&r<q.length))return A.c(q,r)
m.lU(n,q[r])}r=t.N
r=A.D(r,r)
r.i(0,"\u2195","Change selection")
if(m.gik())r.i(0,"G","Gain "+(m.gh1()!=null?"stat":"skill"))
r.i(0,"`","Exit")
A.bq(a,r,"You can spend "+A.P(s.y,!1,l)+" experience")},
lX(a){var s,r,q,p,o,n,m,l,k=null
A.bi(a,k,k,"Stats",!1,k,k,k)
a.k(21,1,"Base Equip Total    Cost",B.f)
s=this.b.Q
r=[s.ay,s.ch,s.CW,s.cx]
for(q=0,p=0;p<4;++p){o=r[p]
n=o.gbb()
m=o.b
l=o.a
l.toString
this.jo(a,q,n.c,m,l-m,o.hq(s),l,40,q===this.e);++q}},
lV(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.bi(a,e,e,"Skills",!1,e,e,e)
a.k(21,1,"Base Equip Total    Cost",B.f)
for(s=f.c,r=s.length,q=f.b.Q,p=q.c.c,q=q.z,o=q.a,q=q.b,n=0,m=0;m<s.length;s.length===r||(0,A.p)(s),++m){l=s[m]
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
f.jo(a,n,j,k,i,B.e.L(1000*Math.pow(1.8,k+1-1)),h,g,n===f.e-4);++n}},
jo(a,b,c,d,e,f,g,h,i){var s,r=b*2+3,q=b===0?B.l:B.u
a.k(2,r-1,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500\u2500\u2500",q)
A:{if(i){q=B.h
break A}q=d>=h||f>this.b.Q.y
if(q){q=B.i
break A}q=B.C
break A}B:{if(i){s=B.h
break B}s=d>=h||f>this.b.Q.y
if(s){s=B.i
break B}s=B.d
break B}a.k(2,r,c,q)
a.k(20,r,A.P(d,!1,5),s)
C:{if(e>0){q=B.p
break C}if(e<0){q=B.m
break C}q=B.u
break C}a.k(26,r,A.P(e,!0,5),q)
a.k(32,r,A.P(g,!1,5),s)
if(d<h)a.k(38,r,A.P(f,!1,7),s)
else a.k(39,r,"At max",s)},
lY(a){this.eq(a,this.b.Q.ay,A.a(["Max Fury","Toss range scale"],t.s),new A.o3())},
lQ(a){this.eq(a,this.b.Q.ch,A.a(["Dodge bonus","Strike bonus"],t.s),new A.o_())},
lZ(a){this.eq(a,this.b.Q.CW,A.a(["Max health"],t.s),new A.o4())},
lT(a){this.eq(a,this.b.Q.cx,A.a(["Max focus"],t.s),new A.o0())},
eq(a,b,c,d){var s,r,q,p,o,n,m=null
t.m.a(c)
t.nB.a(d)
A.bi(a,m,m,b.gbb().c,!1,m,m,m)
s=b.a
s.toString
r=s-b.b
a.k(1,2,"Base value:",B.i)
a.k(15,2,A.P(b.b,!1,3),B.d)
q=this.b.Q
if(b===q.ay){p=-q.ge6()
r=s-b.b-p
a.k(1,3,"Weight offset:",B.i)
a.k(15,3,A.P(p,!1,3),B.d)
o=4}else o=3
a.k(1,o,"Modifiers:",B.i)
a.k(15,o,A.P(r,!1,3),B.d);++o
a.k(1,o,"Current value:",B.i)
a.k(15,o,A.P(s,!1,3),B.d)
for(q=c.length,o=9,n=0;n<c.length;c.length===q||(0,A.p)(c),++n){a.k(1,o,c[n]+":",B.i);++o}a.k(24,7,"Current",B.f)
a.k(24,8,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500",B.l)
for(q=J.ao(d.$1(s)),o=9;q.q();){a.k(24,o,B.j.d5(q.gH(),7),B.d);++o}if(s<40){a.k(32,7,"   Next",B.f)
a.k(32,8,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500",B.l)
for(s=J.ao(d.$1(s+1)),o=9;s.q();){a.k(32,o,B.j.d5(s.gH(),7),B.d);++o}}},
lU(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
A.bi(a,f,f,b.gM(),!1,f,f,f)
s=this.b.Q
r=s.z
q=r.eK(b)
p=r.o6(b)
o=r.bN(b)
n=s.c.i5(b)
a.k(1,2,"Base level:",B.i)
a.k(13,2,A.P(q,!1,2),B.d)
a.k(16,2,"/",B.l)
a.k(18,2,A.P(n,!1,2),B.d)
for(m=0;m<n;++m){s=m<q?B.m:B.Y
a.am(21+m*2,2,new A.W(9608,s,B.x))}a.k(1,3,"Equipment:",B.i)
a.k(17,3,A.P(p,!0,3),B.d)
a.k(1,4,"Full level:",B.i)
a.k(13,4,A.P(o,!1,2),B.d)
a.k(16,4,"/",B.l)
a.k(18,4,A.P(15,!1,2),B.d)
A.fI(a,b.gW(),f,a.c.a-1,1,6)
l=this.d.p(0,b)
if(l!=null){a.k(1,12,"Abilities granted:",B.f)
k=l.geT().e4(0)
B.a.df(k,new A.o1())
for(s=k.length,j=14,i=0;i<k.length;k.length===s||(0,A.p)(k),++i){h=k[i]
a.am(1,j,new A.W(8226,B.l,B.x))
a.k(3,j,"Level "+h.a+": "+h.b.gM(),B.d);++j}}s=new A.o2(a,b)
s.$3("current",o,25)
g=B.c.P(q+1+p,0,n)
if(g<n)s.$3("next",g,35)},
im(a){var s=this,r=4+s.c.length
s.e=B.c.ad(s.e+a+r,r)
s.K()}}
A.o3.prototype={
$1(a){return A.a([B.c.t(A.hC(a)),A.pH(A.vQ(a),null)],t.s)},
$S:16}
A.o_.prototype={
$1(a){return A.a([B.c.t(A.v_(a)),B.c.t(A.v0(a))],t.s)},
$S:16}
A.o4.prototype={
$1(a){return A.a([B.c.t(B.e.L(Math.pow(a,1.458)+9))],t.s)},
$S:16}
A.o0.prototype={
$1(a){return A.a([B.c.t(A.jN(a))],t.s)},
$S:16}
A.o1.prototype={
$2(a,b){var s=t.cB
return B.c.ai(s.a(a).a,s.a(b).a)},
$S:97}
A.o2.prototype={
$3(a,b,c){var s,r=this.a,q=r.c.a
A.ja(r,1,c,q-2,null)
r.k(2,c," At "+a+" level "+b+" ",B.f)
A:{if(b>0){s=new A.Q(this.b.bn(b),null)
break A}s=B.il
break A}A.fI(r,s.a,s.b,q-1,1,c+2)},
$S:98}
A.j9.prototype={
gbm(){return!0},
a7(a){var s=this
switch(a){case B.G:s.bZ(B.r)
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
bt(){var s=(this.c+1)%40
this.c=s
if(B.c.ad(s,5)===0)this.K()},
ag(a){var s=new A.nD(this,a)
s.$3(0,B.L,"|")
s.$3(1,B.Q,"/")
s.$3(2,B.O,"-")
s.$3(3,B.P,"\\")
s.$3(4,B.K,"|")
s.$3(5,B.S,"/")
s.$3(6,B.R,"-")
s.$3(7,B.T,"\\")
s=t.N
A.bq(a,A.A(["\u2195\u2194",this.gjW(),"`","Cancel"],s,s),this.gkv())},
bZ(a){var s=this.kM(a),r=this.a
if(s)r.b6(a)
else r.b6(B.r)}}
A.nD.prototype={
$3(a,b,c){var s,r,q,p,o=this.a,n=o.b,m=n.b,l=m.y.y.F(0,b)
m=m.x
m===$&&A.b()
s=l.a
r=l.b
if(!o.jD(m.f.C(s,r)))return
if(B.c.A(o.c,5)===a)q=A.am(c,B.h,B.v)
else{o=m.w.C(s,r)
if(o!=null)q=t.v.a(o.geJ())
else{p=m.cl(l)
if(!p.gaL(0))q=p.gaC(0).a.b
else{o=m.f.C(s,r)
if(o.r)t.v.a(o.a.d)
else A.cB(32,null,null)
q=t.v.a(m.f.C(s,r).a.d)}}q=A.cB(q.a,B.h,B.v)}o=n.w
o===$&&A.b()
o.cW(this.b,s,r,q)},
$S:99}
A.fw.prototype={
gkv(){return"Which direction?"},
gjW(){return"Choose direction"},
jD(a){return!0},
kM(a){this.e.$1(a)
return!0}}
A.kq.prototype={
gkv(){return"Operate what?"},
gjW(){return"Choose direction"},
jD(a){return a.a.f!=null},
kM(a){var s=this.b.b,r=s.y,q=r.y.F(0,a)
s=s.x
s===$&&A.b()
s=s.f.C(q.a,q.b).a.f
if(s!=null){r.at=new A.aR(t.fD.a(s.$1(q)))
return!0}else{r.Q.at.a1(B.W,"There is nothing to operate there.",null,null,null)
return!1}}}
A.fR.prototype={
hN(a){var s=this
if(s.y!=a)s.K()
s.y=a
s.z=null},
hO(a){var s=this
if(s.y!=null||!J.ax(s.z,a))s.K()
s.y=null
s.z=a},
gbJ(){var s=this.gdH(),r=s==null?null:s.y
return r==null?this.z:r},
gdH(){var s,r,q=this,p=q.y
if(p!=null)if(p.z<=0||!q.b.d0(p))q.y=null
s=q.y
if(s!=null)return s
s=q.z
if(s!=null){r=q.b.x
r===$&&A.b()
return r.w.C(s.gm(),s.gn())}return null},
gjX(){var s=this.b.y,r=s.z,q=s.Q.CW,p=q.a
p.toString
if(r<B.e.L(Math.pow(p,1.458)+9)/4)return B.m
if(s.w.a>0)return B.p
if(s.c.a>0)return B.F
r=s.z
q=q.a
q.toString
if(r<B.e.L(Math.pow(q,1.458)+9)/2)return B.a4
return B.C},
a7(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=h
switch(a){case B.bW:s=i.b
r=s.x
r===$&&A.b()
q=s.y
p=q.y
if(r.f.C(p.gm(),p.gn()).a.b===B.bg){r=i.a
r.toString
r.a4(A.y9(i.c,s))}else{q.Q.at.a1(B.W,"You are not standing on an exit.",h,h,h)
i.K()}break
case B.bS:i.a.a4(new A.fQ(i.b.w===0))
break
case B.c0:s=i.a
s.toString
s.a4(A.z8(i))
break
case B.bM:s=i.a
s.toString
r=A.a([],t.eI)
B.a.U(r,$.tn())
s.a4(new A.iz(i.b,r))
break
case B.bX:s=i.a
s.toString
r=i.b
s.a4(A.ya(r.a,r.y))
break
case B.b6:s=i.a
s.toString
r=B.aQ.gb2()
r=A.a6(r,A.y(r).h("k.E"))
s.a4(new A.fU(r))
break
case B.bT:s=i.a
s.toString
r=i.b
q=r.a
r=r.y.Q
if($.bs.length===0){p=new A.jh(A.tZ(B.cb,B.hJ,B.hK,!1,t.mN),B.cy,q,r)
p.di()
o=A.yz(q,r)
r=new A.jS(q,r)
r.mz()
B.a.U($.bs,A.a([p,o,r],t.f_))}s.a4(B.a.gaC($.bs))
break
case B.bL:i.a.a4(new A.jc(i,B.H))
break
case B.c_:i.a.a4(new A.lf(i,B.H))
break
case B.bZ:i.a.a4(new A.l8(i,B.H))
break
case B.aI:if(!i.b.y.pa())i.K()
break
case B.bU:i.mZ()
break
case B.bV:s=i.b
r=s.x
r===$&&A.b()
s=s.y
n=r.cl(s.y)
r=n.b.length
if(r>1)i.a.a4(new A.kv(i,B.X))
else if(r===1)s.at=new A.aR(A.vA(n.gaC(0)))
else{s.Q.at.a1(B.W,"There is nothing here.",h,h,h)
i.K()}break
case B.bN:i.a.a4(new A.jg(i,B.H))
break
case B.aA:g=A.bw(B.T)
break
case B.a0:g=A.bw(B.L)
break
case B.az:g=A.bw(B.Q)
break
case B.ag:g=A.bw(B.R)
break
case B.a6:g=A.bw(B.r)
break
case B.af:g=A.bw(B.O)
break
case B.aC:g=A.bw(B.S)
break
case B.a1:g=A.bw(B.K)
break
case B.aB:g=A.bw(B.P)
break
case B.b8:i.b.y.at=new A.c5(B.T)
break
case B.ao:i.b.y.at=new A.c5(B.L)
break
case B.b7:i.b.y.at=new A.c5(B.Q)
break
case B.aK:i.b.y.at=new A.c5(B.R)
break
case B.aJ:i.b.y.at=new A.c5(B.O)
break
case B.ba:i.b.y.at=new A.c5(B.S)
break
case B.ap:i.b.y.at=new A.c5(B.K)
break
case B.b9:i.b.y.at=new A.c5(B.P)
break
case B.bP:i.bI(B.T)
break
case B.b3:i.bI(B.L)
break
case B.bO:i.bI(B.Q)
break
case B.b5:i.bI(B.R)
break
case B.b2:i.bI(B.O)
break
case B.bR:i.bI(B.S)
break
case B.b4:i.bI(B.K)
break
case B.bQ:i.bI(B.P)
break
case B.b1:A:{m=i.Q
s=t.bW.b(m)
if(s){r=i.gdH()!=null
l=m}else{l=h
r=!1}if(r){i.iG(l)
break A}l=s?m:h
if(s){i.iU(l)
break A}if(t.ln.b(m)){i.a.a4(new A.fw(i.gmh(),i))
break A}s=t.lz.b(m)
k=s?m:h
if(s){s=i.b
r=s.y
r.at=new A.aR(k.dw(r.Q,k.aj(s)))
break A}i.b.y.Q.at.a1(B.W,"No ability selected.",h,h,h)
i.K()}break
case B.bY:s=i.b.y.Q
j=s.e.d
if(j==null){s.at.a1(B.W,"You aren't holding an unequipped item to swap.",h,h,h)
i.K()}else g=A.vd(B.H,j)
break
case B.c1:s=i.a
s.toString
r=t.bx
q=A.a([],r)
p=new A.hM(q,i.b)
B.a.U(q,A.a([new A.a2(["m",77,"Map Dungeon",p.gmT()]),new A.a2(["i",73,"Illuminate Dungeon",p.gms()]),new A.a2(["d",68,"Drop Item",p.gm0()]),new A.a2(["s",83,"Spawn Monster",p.gnR()]),new A.a2(["x",88,"Gain Experience",p.gmj()]),new A.a2(["k",75,"Kill All Monsters",p.gmF()]),new A.a2(["c",67,"Clear All Floor Items",p.glF()]),new A.a2(["l",76,"Make Stairs",p.gmR()]),new A.a2(["o",79,"Toggle Show All Monsters",p.gnD()]),new A.a2(["a",65,"Toggle Show Monster Alertness",p.gnB()]),new A.a2(["v",86,"Toggle Show Hero Volume",p.gnF()])],r))
s.a4(p)
break}if(g!=null)i.b.y.at=new A.aR(g)
return!0},
dz(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.b,b=c.y
if(!b.f3(c))e.x=10
A:{if(a instanceof A.fN){b=b.Q
b.x.ae(0,new A.oj())
s=e.d
s.bv()
r=e.a
r.toString
r.bU(A.oh(s,c.a,b,!1))
break A}q=a instanceof A.hv
p=d
if(q){s=A.fk(a0)
if(s)p=a0
o=a0}else{o=d
s=!1}if(s){e.d.bv()
s=e.a
s.toString
n=A.tH(c.a,p,b.Q,d,d)
b=n.e7()
s.a4(new A.h6(n,new A.ag(b.a(),b.$ti.h("ag<1>"))))
break A}s=a instanceof A.h6
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
c.bU(A.vg(e.d,k))
break A}j=a instanceof A.fQ
i=d
if(j){if(q)s=o
else{s=a0
o=s
q=!0}i=!0===s
s=i
s=s&&c.w>0}else s=!1
if(s){b=e.a
b.toString
b.bU(A.oh(e.d,c.a,e.c,!1))
break A}if(j)s=i
else s=!1
if(s){e.d.bv()
e.a.aa()
break A}if(a instanceof A.dS){e.d.bv()
break A}if(a instanceof A.eC&&c.w===0){e.d.bv()
break A}s=a instanceof A.hJ
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
if(l){e.a.a4(new A.fw(new A.ok(r,e),e))
break A}h=d
if(s){if(q)s=o
else{s=a0
o=s
q=!0}r=t.lz
s=r.b(s)
if(s)h=r.a(q?o:a0)}else s=!1
if(s){e.Q=h
b.at=new A.aR(h.dw(b.Q,h.aj(c)))
break A}if(a instanceof A.fO)e.d.bv()}},
bt(){var s,r,q,p,o=this
if(o.m5())return
s=o.x
if(s>0){o.x=s-1
return}s=o.b
r=s.bt()
s=s.y
if(s.z<=0){q=o.a
q.toString
p=o.d
s=s.Q
if(s.d)p.ac(0,s)
else p.p9(o.c)
p.bv()
q.bU(new A.jA(s))
return}s=o.w
s===$&&A.b()
if(s.aG(r))o.K()},
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
a.ck(0,0,a.gaQ(),a.gan())
s=r.w
s===$&&A.b()
s.ag(a)
r.e.ag(a)
s=r.r
s===$&&A.b()
s.ag(a)
r.f.ag(a)},
m5(){var s,r,q=this,p=q.b,o=p.x
o===$&&A.b()
p=p.y
s=p.y
r=o.f.C(s.gm(),s.gn()).a.b
if(r==q.as)return!1
q.as=r
switch(r){case B.cw:o=q.a
o.toString
p=p.Q
s=new A.hv(p)
s.e=Math.min(100,p.as+1)
o.a4(s)
break
case B.cx:q.a.a4(new A.hX(q))
break
case B.cv:q.bX(0)
break
case B.cu:q.bX(1)
break
case B.ct:q.bX(2)
break
case B.cs:q.bX(3)
break
case B.cr:q.bX(4)
break
case B.cq:q.bX(5)
break
case B.iJ:q.bX(6)
break
case B.iK:q.bX(7)
break
case B.iL:q.bX(8)
break}return!0},
mZ(){var s,r,q,p,o,n,m,l,k,j,i=this,h=A.a([],t.l)
for(s=i.b,r=s.y,q=r.y.gbP(),p=q.length,o=0;o<q.length;q.length===p||(0,A.p)(q),++o){n=q[o]
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
if(q===0){r.Q.at.a1(B.W,"You are not next to anything to operate.",null,null,null)
i.K()}else if(q===1){n=B.a.gaC(h)
s=s.x
s===$&&A.b()
r.at=new A.aR(t.fD.a(s.f.C(n.gm(),n.gn()).a.f.$1(n)))}else i.a.a4(new A.kq(i))},
iU(a){var s=this,r=s.a
r.toString
r.a4(A.vR(s,a.e8(0,s.b),new A.oi(s,a)))},
iG(a){var s=this,r=s.b,q=r.y,p=J.ax(s.gbJ(),q.y)
if(p){q.Q.at.a1(B.W,"You can't target yourself.",null,null,null)
s.K()
return}s.Q=a
p=s.gbJ()
p.toString
q.at=new A.aR(a.dw(q.Q,a.f5(r,p)))},
bI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null
if(a===B.r)return
A:{s=c.Q
r=t.ln.b(s)
q=r?s:b
if(r){r=c.b
p=r.y
p.at=new A.aR(q.dw(p.Q,q.hB(r,a)))
break A}r=t.bW.b(s)
o=r?s:b
if(r){r=c.b
p=r.y
n=p.y.F(0,a)
m=A.dT()
for(l=A.dV(p.y,n);l.q(),!0;){k=l.a
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
if(h!=null){if(c.y!==h)c.K()
c.y=h
c.z=null
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
if(l===m)A.a_(A.yu(""))
t.n7.a(l)
if(c.y!=null||!J.ax(c.z,l))c.K()
c.y=null
c.z=l
break}if(k.S(0,p.y).cK(0,o.e8(0,r))){if(c.y!=null||!J.ax(c.z,k))c.K()
c.y=null
c.z=k
break}m.b=k}e=c.gbJ()
l=p.Q
if(e!=null)p.at=new A.aR(o.dw(l,o.f5(r,e)))
else{r=r.x
r===$&&A.b()
p=p.y.F(0,a)
l.at.a1(B.W,"There is a "+r.f.C(p.a,p.b).a.a+" in the way.",b,b,b)
c.K()}break A}r=t.lz.b(s)
d=r?s:b
if(r){c.b.y.Q.at.a1(B.W,d.gM()+" does not take a direction.",b,b,b)
c.K()
break A}c.b.y.Q.at.a1(B.W,"No ability selected.",b,b,b)
c.K()}},
bX(a){var s=this.b.y.Q.x,r=A.y(s).h("b0<1>"),q=A.a6(new A.b0(s,r),r.h("k.E"))
if(a>=q.length)return
r=this.a
r.toString
s=s.p(0,q[a])
s.toString
r.a4(new A.ia(s,this))}}
A.oj.prototype={
$2(a,b){t.g.a(a).aG(t.U.a(b))},
$S:101}
A.ok.prototype={
$1(a){var s=this.b
s.Q=this.a.a
s.bI(a)},
$S:34}
A.oi.prototype={
$1(a){return this.a.iG(this.b)},
$S:11}
A.h6.prototype={
gbm(){return!0},
a7(a){if(a===B.G){this.a.b6(!1)
return!0}return!1},
a9(a,b,c){if(c||b)return!1
switch(a){case 78:this.a.b6(!1)
break
case 89:this.a.b6(!0)
break}return!0},
bt(){var s,r=this,q=new A.qA()
$.uE()
s=$.tQ.$0()
q.a=s
q.b=null
for(s=r.c;q.gow()<16;)if(s.q())r.K()
else{r.a.b6(r.b)
return}r.d=(r.d+1)%10},
ag(a){var s,r=a.e.a.b.b
a=new A.aS(new A.d(30,7),B.c.A(r.a-30,2),B.c.A(r.b-7,2),a)
A.cz(a,0,0,30,7,B.h,"\u2554","\u2550","\u2557","\u2551","\u255a","\u2550","\u255d")
a.k(2,2,"Entering dungeon...",B.d)
s=B.c.A(this.d,2)
a.k(2,4,B.j.aI(B.j.aH("/    ",6),s,s+26),B.d)}}
A.l2.prototype={
gbm(){return!0},
ll(a,b,c){var s,r,q,p,o,n=this,m=n.b,l=m.b,k=l.y,j=l.x
j===$&&A.b()
j=j.b
s=j.length
r=n.e
q=n.c
p=0
for(;p<j.length;j.length===s||(0,A.p)(j),++p){o=j[p]
if(!(o instanceof A.ac))continue
if(!l.d0(o))continue
if(o.y.S(0,k.y).bg(0,q))continue
B.a.j(r,o)}if(r.length===0){n.f=!0
m.hO(k.y)}else n.jb(k.y)},
jb(a){var s,r,q,p=this.e,o=p.length
if(o===0)return!1
for(s=null,r=0;r<o;++r){q=p[r]
if(s==null||a.S(0,q.y).ea(0,a.S(0,s.y)))s=q}this.b.hN(s)
return!0},
a7(a){var s,r=this
switch(a){case B.a6:s=r.b
if(s.gbJ()!=null){r.a.aa()
s=s.gbJ()
s.toString
r.d.$1(s)}break
case B.G:r.a.aa()
break
case B.aA:r.cc(B.T)
break
case B.a0:r.cc(B.L)
break
case B.az:r.cc(B.Q)
break
case B.ag:r.cc(B.R)
break
case B.af:r.cc(B.O)
break
case B.aC:r.cc(B.S)
break
case B.a1:r.cc(B.K)
break
case B.aB:r.cc(B.P)
break}return!0},
a9(a,b,c){var s,r,q=this
if(a===9&&q.e.length!==0){s=q.f
q.f=!s
r=q.b
if(s){s=r.gbJ()
q.jb(s==null?r.b.y.y:s)}else r.hO(r.gbJ())
return!0}return!1},
bt(){var s=(this.r+1)%25
this.r=s
if(B.c.ad(s,5)===0)this.K()},
ag(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9="Choose tile",b0=a7.b,b1=b0.b,b2=b1.x
b2===$&&A.b()
s=b1.y
r=b0.w
r===$&&A.b()
q=A.aa(r.r)
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
if(b2.al(d))continue}else if(a7.mw(d))continue
else if(b!=null&&b1.d0(b))continue
if(d.S(0,s.y).bg(0,p))continue
if(c.r){a0=c.a.d
if(a0 instanceof A.W)a1=a0.a
else{g.a(a0)
if(0>=a0.length)return A.c(a0,0)
a1=a0[0].a}}else a1=183
c=r.a.a
b=r.r.a
a=r.w
b3.am(f+c.a-b.a+a.a,e+c.b-b.b+a.b,new A.W(a1,B.h,B.x))}a2=b0.gbJ()
if(a2==null)return
b0=o.C(a2.gm(),a2.gn())
if(b0.r){b1=$.U()
b0=(b0.a.e.a&b1.a)!==0&&!b0.b}else b0=!0
a3=!1
if(b0){a4=B.c.A(a7.r,5)
for(b0=A.dV(s.y,a2);b0.q(),!0;){d=b0.a
if(d.a0(0,a2)){a3=!0
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
b3.am(b1+p.a-g.a+f.a,b2+p.b-g.b+f.b,new A.W(8226,q,B.x))
a4=B.c.ad(a4+5-1,5)}}else a4=0
a5=a3?a4===0?B.h:B.i:B.i
r.cW(b3,a2.gm()-1,a2.gn(),A.am("-",a5,a8))
r.cW(b3,a2.gm()+1,a2.gn(),A.am("-",a5,a8))
r.cW(b3,a2.gm(),a2.gn()-1,A.am("|",a5,a8))
r.cW(b3,a2.gm(),a2.gn()+1,A.am("|",a5,a8))
if(!a3)r.cW(b3,a2.gm(),a2.gn(),A.am("X",a5,a8))
b0=t.N
a6=A.D(b0,b0)
if(a7.e.length===0)a6.i(0,"\u2195\u2194",a9)
else if(a7.f){a6.i(0,"\u2195\u2194",a9)
a6.i(0,"Tab","Target monsters")}else{a6.i(0,"\u2195\u2194","Choose monster")
a6.i(0,"Tab","Target floor")}a6.i(0,"`","Cancel")
A.bq(b3,a6,"Choose a target.")},
cc(a){if(this.f)this.lC(a)
else this.lD(a)},
lC(a){var s=this.b,r=s.gbJ().F(0,a)
if(r.S(0,s.b.y.y).bg(0,this.c))return
s.hO(r)},
lD(a){var s,r,q,p,o,n,m,l,k,j,i,h=t.lE,g=A.a([],h),f=A.a([],h)
h=this.b
s=h.gbJ()
s.toString
r=a.gbC()
for(q=this.e,p=q.length,o=r.c,n=r.d,m=0;m<q.length;q.length===p||(0,A.p)(q),++m){l=q[m]
k=l.y.S(0,s)
if(o*k.b-n*k.a>0)B.a.j(g,l)
else B.a.j(f,l)}q=t.B
j=A.zL(g,new A.qW(s),q)
if(j!=null){h.hN(j)
return}i=A.zK(f,new A.qX(s),q)
if(i!=null)h.hN(i)},
mw(a){var s,r,q,p,o,n,m,l=this.b.b,k=l.x
k===$&&A.b()
for(l=A.dV(l.y.y,a),k=k.f,s=k.a,r=k.b,q=r.b.a,p=s.length;l.q(),!0;){o=l.a
if(o.a0(0,a))return!1
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
if(n)return!0}throw A.n(A.bC("Unreachable."))}}
A.qW.prototype={
$1(a){return t.B.a(a).y.S(0,this.a).gaE()},
$S:35}
A.qX.prototype={
$1(a){return t.B.a(a).y.S(0,this.a).gaE()},
$S:35}
A.hJ.prototype={
gbm(){return!0},
a7(a){if(a===B.G){this.a.aa()
return!0}return!1},
a9(a,b,c){if(c||b)return!1
if(a>=65&&a<=90){this.nO(a-65)
return!0}return!1},
nO(a){var s,r=this.c,q=r.length
if(a>=q)return
s=this.a
s.toString
if(!(a>=0))return A.c(r,a)
s.b6(r[a])},
ag(a){var s,r,q,p,o,n,m,l=null,k="abcdefghijklmnopqrstuvwxyz",j=t.N
A.bq(a,A.A(["A-Z","Select ability","`","Exit"],j,j),l)
j=this.c
s=Math.max(j.length+2,3)
a=new A.aS(new A.d(40,s),a.e.a.b.b.a-40,0,a)
A.bi(a,l,s,"Use which ability?",!0,l,l,l)
a.k(31,0," Focus ",B.h)
a=a.b8(1,1,38,s-2)
if(j.length===0){a.k(0,0,"(You don't have any abilities)",B.i)
return}r=this.b.b.y
for(q=a.c.a-5,p=r.Q,o=0;o<j.length;++o){n=j[o]
m=n.eW(p)
if(r.ch<m){a.k(3,o,n.gM(),B.i)
a.k(q,o,A.P(m,!1,3),B.bn)}else{a.k(0,o," )   ",B.i)
if(!(o<26))return A.c(k,o)
a.k(0,o,k[o],B.h)
a.k(3,o,n.gM(),B.C)
a.k(q,o,A.P(m,!1,3),B.d)}}}}
A.fU.prototype={
gbm(){return!0},
a7(a){var s=this
switch(a){case B.a0:s.eC(-1)
return!0
case B.a1:s.eC(1)
return!0
case B.ao:s.eC(-(s.d-3))
return!0
case B.ap:s.eC(s.d-3)
return!0
case B.G:s.a.aa()
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
i.ck(0,0,i.gaQ(),i.gan())
A.bi(i,l,j,"Help",!0,80,l,l)
for(k=m.e,s=0;j=k.length,s<j;++s){r=s===m.b?B.h:B.C
i.k(2,s*2+2,k[s],r)}q=m.b
if(!(q>=0&&q<j))return A.c(k,q)
p=B.aQ.p(0,k[q])
for(k=p.length,s=0;j=m.d,s<j;++s){o=s+m.c
if(o<k){if(!(o>=0))return A.c(p,o)
n=p[o]
i.k(21,s+2,n.b,n.a)}}A.vb(i,j,m.c,k,j,78,2)
k=t.N
A.bq(a,A.A(["Tab","Next Chapter","\u2195","Scroll","Shift-\u2195","Page Up/Down","`","Exit"],k,k),l)},
eC(a){var s,r=this,q=r.e,p=r.b
if(!(p>=0&&p<q.length))return A.c(q,p)
s=B.aQ.p(0,q[p])
r.c=B.c.P(r.c+a,0,s.length-r.d)
r.K()}}
A.f.prototype={}
A.jh.prototype={
gM(){return"Equipment"},
gcj(){var s=t.N,r=A.cH(this.e.gcj(),s,s)
switch(this.f.a){case 0:s=B.cf
break
case 1:s=A.A(["R","Show resistances"],s,s)
break
case 2:s=A.A(["R","Show stats"],s,s)
break
case 3:s=B.cf
break
default:s=null}r.U(0,s)
return r},
e2(a){var s,r=this
if(a.a>110){r.f=B.cA
r.di()
r.K()}else{s=r.f
if(B.cy===s||B.cA===s){r.f=B.bi
r.di()
r.K()}}},
a9(a,b,c){var s,r=this
if(r.e.a9(a,b,c)){r.K()
return!0}if(!b){s=82===a
if(s&&!c&&r.f===B.bi){r.f=B.cz
r.di()
r.K()
return!0}if(s&&!c&&r.f===B.cz){r.f=B.bi
r.di()
r.K()
return!0}}return r.ft(a,b,c)},
a7(a){if(this.e.a7(a)){this.K()
return!0}return this.fs(a)},
hl(a){var s,r,q,p=this,o=p.e,n=a.c,m=n.a
n=n.b
o.hj(a.b8(0,1,m,n-3))
s=m-32
switch(p.f.a){case 0:break
case 1:p.jq(a,s)
p.jr(a,s,21)
break
case 2:p.jn(a,s)
p.jm(a,s,21)
break
case 3:s=m-65
p.jq(a,s)
r=s+33
p.jn(a,r)
p.jr(a,s,21)
p.jm(a,r,21)
break}a.k(s-7,21,"Totals",B.i)
r=o.c
o=o.y
if(!(o>=0&&o<r.length))return A.c(r,o)
q=r[o].b
o=n-15
if(q!=null)A.vm(p.c,t.W.a(q),!0).jK(a.b8(0,o,m,14))
else A.nF(a,0,o,m,14,null,null)},
di(){var s,r=this,q=A.a([new A.aK("Item",B.a5,0,null)],t.D)
switch(r.f.a){case 0:s=B.cb
break
case 1:s=r.ij()
break
case 2:s=r.fz()
break
case 3:s=A.a6(r.ij(),t.jF)
B.a.U(s,r.fz())
break
default:s=null}B.a.U(q,s)
r.e.ky(new A.nU(r),q)},
ij(){var s=null
return A.a([new A.aK("El",B.a5,2,s),new A.aK("Damage",B.a5,11,s),new A.aK("Hit",B.a5,4,s),new A.aK("Dodge",B.a5,5,s),new A.aK("Armor",B.a5,6,s)],t.D)},
fz(){return new A.R(this.lv(),t.oP)},
lv(){return function(){var s=0,r=1,q=[],p,o,n
return function $async$fz(a,b,c){if(b===1){q.push(c)
s=r}for(;;)switch(s){case 0:p=$.fr(),o=0
case 2:if(!(o<12)){s=4
break}n=p[o]
if(n===$.aw()){s=3
break}s=5
return a.b=new A.aK(n.b,B.a5,2,A.e1(n)),1
case 5:case 3:++o
s=2
break
case 4:return 0
case 1:return a.c=q.at(-1),3}}}},
fA(a){return new A.R(this.lw(a),t.mY)},
lw(a){var s=this
return function(){var r=a
var q=0,p=1,o=[],n,m,l,k
return function $async$fA(b,c,d){if(c===1){o.push(d)
q=p}for(;;)switch(q){case 0:m=r.a
l=m.x
k=t.H
q=l!=null?2:4
break
case 2:q=5
return b.b=new A.a9(A.a([new A.N(r.gb1().b,A.e1(r.gb1()))],k),!0),1
case 5:n=A.a([new A.N(A.P(l.c,!1,2),null)],k)
B.a.U(n,s.iD(r.gcV()))
B.a.U(n,s.cs(r.gcU()))
B.a.U(n,s.cs(r.gca()))
q=6
return b.b=new A.a9(n,!0),1
case 6:q=7
return b.b=new A.a9(s.cs(r.gca()),!0),1
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
case 12:m=A.a([new A.N(A.P(m,!1,2),null)],k)
B.a.U(m,s.cs(r.gc1()))
q=15
return b.b=new A.a9(m,!0),1
case 15:q=13
break
case 14:q=16
return b.b=new A.a9(A.a([new A.N("",null)],k),!0),1
case 16:case 13:return 0
case 1:return b.c=o.at(-1),3}}}},
fw(a){return new A.R(this.lu(a),t.mY)},
lu(a){return function(){var s=a
var r=0,q=1,p=[],o,n,m,l,k
return function $async$fw(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:o=$.fr(),n=t.H,m=0
case 2:if(!(m<12)){r=4
break}l=o[m]
if(l===$.aw()){r=3
break}k=s.c5(l)
r=k>0?6:7
break
case 6:r=8
return b.b=new A.a9(A.a([new A.N(A.P(k,!1,null),B.p)],n),!0),1
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
return b.b=new A.a9(A.a([new A.N(A.P(k,!1,null),B.m)],n),!0),1
case 14:case 13:case 5:case 3:++m
r=2
break
case 4:return 0
case 1:return b.c=p.at(-1),3}}}},
jq(a,b){a.k(b,0,"\u2550\u2550\u2550\u2550\u2550 Attack \u2550\u2550\u2550\u2550\u2550\u2550 \u2550\u2550 Defense \u2550",B.u)
a.k(b+6,0,"Attack",B.l)
a.k(b+23,0,"Defense",B.l)},
jn(a,b){a.k(b,0,"\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Resistances \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550",B.u)
a.k(b+10,0,"Resistances",B.l)},
jr(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=$.aw()
for(s=h.c.f.b,r=3,q=1,p=0,o=0,n=0,m=0,l=0;l<9;++l){k=s[l]
if(k==null)continue
j=k.a
i=j.x
if(i!=null){g=k.gb1()
r=i.c}q*=k.gcV()
p+=k.gcU()
o+=k.gca()
n+=j.Q
m+=k.gc1()}a.k(b,c,g.b,A.e1(g))
s=t.H
j=A.a([new A.N(A.P(r,!1,2),null)],s)
B.a.U(j,h.iD(q))
B.a.U(j,h.cs(p))
B.a.U(j,h.cs(o))
A.u0(a,j,B.a5,B.C,11,b+3,c)
s=A.a([new A.N(A.P(n,!1,2),null)],s)
B.a.U(s,h.cs(m))
A.u0(a,s,B.a5,B.C,6,b+26,c)},
jm(a,b,c){var s,r,q,p,o,n,m
for(s=$.fr(),r=this.c,q=0,p=0;p<12;++p){o=s[p]
if(o===$.aw())continue
n=r.jO(o)
if(n>0)m=B.p
else m=n<0?B.m:B.l
a.k(b+q*3,c,A.P(n,!1,2),m);++q}},
iD(a){var s,r=null,q=A.tN(a,1,r)
if(a>1)return A.a([new A.N(B.j.aH(" ",4-q.length),r),new A.N("x",B.z),new A.N(q,B.p)],t.H)
else{s=t.H
if(a<1)return A.a([new A.N(B.j.aH(" ",4-q.length),r),new A.N("x",B.Y),new A.N(q,B.m)],s)
else return A.a([new A.N("   ",r)],s)}},
cs(a){var s,r=null,q=A.P(Math.abs(a),!1,r)
if(a>0)return A.a([new A.N(B.j.aH(" ",3-q.length),r),new A.N("+",B.z),new A.N(q,B.p)],t.H)
else{s=t.H
if(a<0)return A.a([new A.N(B.j.aH(" ",3-q.length),r),new A.N("+",B.Y),new A.N(q,B.m)],s)
else return A.a([new A.N("   ",r)],s)}}}
A.nU.prototype={
$0(){return new A.R(this.kU(),t.d8)},
kU(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e
return function $async$$0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=t.H,n=t.bZ,m=t.ax,l=s.a,k=l.c.f.b,j=t.cI,i=0
case 2:if(!(i<9)){r=4
break}h=k[i]
r=h!=null?5:7
break
case 5:g=h.a
f=A.a([new A.a9(A.a([new A.N(h.gao().a,null)],o),!0)],n)
switch(l.f.a){case 0:e=B.hL
break
case 1:e=l.fA(h)
break
case 2:e=l.fw(h)
break
case 3:e=A.a6(l.fA(h),j)
B.a.U(e,l.fw(h))
break
default:e=null}B.a.U(f,e)
r=8
return a.b=new A.ap(g.b,h,f,m),1
case 8:r=6
break
case 7:r=9
return a.b=new A.ap(null,null,A.a([new A.a9(A.a([new A.N("("+B.aD[i]+")",null)],o),!1)],n),m),1
case 9:case 6:case 3:++i
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
$S:103}
A.f9.prototype={
aJ(){return"_Columns."+this.b}}
A.cD.prototype={
gcj(){var s=t.N
return A.D(s,s)},
a9(a,b,c){var s,r
if(b)return!1
if(a===9){s=B.a.c4($.bs,this)
s=c?s+($.bs.length-1):s+1
r=$.bs[B.c.ad(s,$.bs.length)]
this.a.bU(r)
return!0}return!1},
a7(a){if(a===B.G){this.a.aa()
return!0}return!1},
ag(a){var s,r,q,p,o,n,m,l,k=this,j=a.e.a.b.b,i=j.a
A.ja(a,0,2,i,B.f)
for(s=$.bs.length,r=2,q=0;q<$.bs.length;$.bs.length===s||(0,A.p)($.bs),++q){p=$.bs[q]
o=p.gM().length
if(p===k){a.k(r,2,"\u2518"+B.j.aH(" ",o)+"\u2514",B.f)
n=B.f
m=B.f}else{n=B.l
m=B.l}a.k(r,0,"\u250c"+B.j.aH("\u2500",o)+"\u2510",n)
a.k(r,1,"\u2502",n)
a.k(r+o+1,1,"\u2502",n)
a.k(r+1,1,p.gM(),m)
r+=o+2}k.hl(new A.aS(new A.d(i,j.b-3),0,3,a))
l=$.bs[B.c.ad(B.a.c4($.bs,k)+1,$.bs.length)]
j=t.N
j=A.cH(k.gcj(),j,j)
j.i(0,"Tab","View "+l.gM())
j.i(0,"`","Exit")
A.bq(a,j,null)}}
A.jS.prototype={
gdv(){var s,r,q,p,o=this,n=null,m=o.e
if(m===$){s=A.a([new A.aK("Name",B.a5,0,n),new A.aK("Depth",B.al,5,n),new A.aK("Price",B.al,7,n),new A.aK("Found",B.al,5,n),new A.aK("Used",B.al,5,n)],t.D)
r=t.m2
q=t.o5
q=A.a([new A.bt("type",A.a([A.AY(),A.wG(),A.ta()],r),q),new A.bt("name",A.a([A.ta()],r),q),new A.bt("depth",A.a([A.wG(),A.ta()],r),q),new A.bt("price",A.a([A.AX(),A.ta()],r),q)],t.mQ)
r=t.i0
p=A.tZ(s,A.a([new A.c3("all",new A.oJ(),r),new A.c3("discovered",new A.oK(o),r)],t.aG),q,!0,t.q)
o.e!==$&&A.e7()
o.e=p
m=p}return m},
gM(){return"Item Lore"},
gcj(){return this.gdv().gcj()},
a9(a,b,c){if(this.gdv().a9(a,b,c)){this.K()
return!0}return this.ft(a,b,c)},
a7(a){if(this.gdv().a7(a)){this.K()
return!0}return this.fs(a)},
hl(a){var s,r,q=this.gdv(),p=a.c,o=p.a
p=p.b
q.hj(a.b8(0,1,o,p-16))
s=q.c
q=q.y
if(!(q>=0&&q<s.length))return A.c(s,q)
r=this.c
q=t.q.a(s[q].b)
if(r.ax.jT(q)>0)A.vm(r,new A.L(q,null,null,null,1),!0).jK(a.b8(0,p-15,o,14))},
mz(){var s=$.bh().gc_(),r=A.a6(s,A.y(s).h("k.E"))
this.gdv().kx(new A.oI(this,r))}}
A.oJ.prototype={
$1(a){t.q.a(a)
return!0},
$S:36}
A.oK.prototype={
$1(a){return this.a.c.ax.jT(t.q.a(a))>0},
$S:36}
A.oI.prototype={
$0(){return new A.R(this.kV(),t.jE)},
kV(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e
return function $async$$0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=t.H,m=t.bZ,l=t.bB,k=s.a.c.ax,j=k.c,k=k.f,i=0
case 2:if(!(i<o.length)){r=4
break}h=o[i]
g=j.p(0,h)
if(g==null)g=0
r=g>0?5:7
break
case 5:f=A.a([new A.a9(A.a([new A.N(h.a.a6(1).a,null)],n),!0),new A.a9(A.a([new A.N(A.P(h.c,!1,5),null)],n),!0),new A.a9(A.a([new A.N(A.P(h.as,!1,7),null)],n),!0)],m)
if(h.dx)f.push(new A.a9(A.a([new A.N("Yes",null)],n),!0))
else f.push(new A.a9(A.a([new A.N(A.P(g,!1,5),null)],n),!0))
if(h.w!=null){e=k.p(0,h)
f.push(new A.a9(A.a([new A.N(A.P(e==null?0:e,!1,5),null)],n),!0))}else f.push(new A.a9(A.a([new A.N("--",null)],n),!1))
r=8
return a.b=new A.ap(h.b,h,f,l),1
case 8:r=6
break
case 7:r=9
return a.b=new A.ap(null,h,A.a([new A.a9(A.a([new A.N("(undiscovered "+(i+1)+")",null)],n),!1)],m),l),1
case 9:case 6:case 3:++i
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
$S:105}
A.kb.prototype={
gM(){return"Monster Lore"},
gcj(){return this.e.gcj()},
a9(a,b,c){if(this.e.a9(a,b,c)){this.K()
return!0}return this.ft(a,b,c)},
a7(a){if(this.e.a7(a)){this.K()
return!0}return this.fs(a)},
hl(a){var s=this.e,r=a.c
s.hj(a.b8(0,1,r.a,r.b-16))
r=s.c
s=s.y
if(!(s>=0&&s<r.length))return A.c(r,s)
this.nq(a,t.P.a(r[s].b))},
nq(a,b){var s,r,q,p,o,n,m=null
a=a.b8(0,a.c.b-15,80,14)
s=a.c
r=s.a
q=this.c.ax.i_(b)===0
p=q?A.am("?",B.i,m):b.b
o=q?m:b.a.a
A.nF(a,0,0,r,s.b,p,o)
if(q){a.k(1,3,"You have not seen this breed yet.",B.i)
return}s=b.fr
n=s!==""?3+A.fI(a,s,m,r-2,1,3)+1:3
A.fI(a,this.lM(b),m,r-2,1,n)},
lM(a){var s,r,q=null,p=A.a([],t.s),o=a.a.d.c,n=this.c.ax,m=a.dy
if(m.length!==0){s=A.M(m)
r=new A.aN(m,s.h("q(1)").a(new A.pp()),s.h("aN<1,q>")).aP(0," ")}else r="monster"
if(a.ax.f)if(n.ed(a)>0)B.a.j(p,"You have slain this unique "+r+".")
else B.a.j(p,"You have seen but not slain this unique "+r+".")
else B.a.j(p,"You have seen "+A.P(n.i_(a),!1,q)+" and slain "+A.P(n.ed(a),!1,q)+" of this "+r+".")
B.a.j(p,o+" is worth "+A.P(a.gbl(),!1,q)+" experience.")
if(n.ed(a)>0)B.a.j(p,o+" has "+A.P(a.f,!1,q)+" health.")
return new A.aN(p,t.gL.a(new A.pq()),t.gQ).aP(0," ")},
mX(){var s=$.ca().gc_(),r=A.a6(s,A.y(s).h("k.E"))
this.e.kx(new A.pn(this,r))}}
A.po.prototype={
$1(a){return a>=65&&a<=90},
$S:106}
A.pr.prototype={
$1(a){t.P.a(a)
return!0},
$S:37}
A.ps.prototype={
$1(a){return t.P.a(a).ax.f},
$S:37}
A.pp.prototype={
$1(a){return A.a3(a)},
$S:5}
A.pq.prototype={
$1(a){A.a3(a)
return B.j.aI(a,0,1).toUpperCase()+B.j.cN(a,1)},
$S:5}
A.pn.prototype={
$0(){return new A.R(this.kW(),t.kF)},
kW(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$$0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=t.H,m=t.bZ,l=t.cv,k=s.a.c.ax,j=k.a,k=k.b,i=0
case 2:if(!(i<o.length)){r=4
break}h=o[i]
g=j.p(0,h)
if(g==null)g=0
r=g>0?5:7
break
case 5:f=A.a([new A.a9(A.a([new A.N(h.a.a,null)],n),!0),new A.a9(A.a([new A.N(A.P(h.c,!1,null),null)],n),!0)],m)
if(h.ax.f){e=A.a([new A.N("Yes",null)],n)
d=k.p(0,h)
B.a.U(f,A.a([new A.a9(e,!0),new A.a9(A.a([new A.N((d==null?0:d)>0?"Yes":"No",null)],n),!0)],m))}else{e=A.a([new A.N(A.P(g,!1,null),null)],n)
d=k.p(0,h)
B.a.U(f,A.a([new A.a9(e,!0),new A.a9(A.a([new A.N(A.P(d==null?0:d,!1,null),null)],n),!0)],m))}r=8
return a.b=new A.ap(h.b,h,f,l),1
case 8:r=6
break
case 7:r=9
return a.b=new A.ap(null,h,A.a([new A.a9(A.a([new A.N("(undiscovered "+(i+1)+")",null)],n),!1)],m),l),1
case 9:case 6:case 3:++i
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
$S:108}
A.l.prototype={
t(a){return"Input("+this.a+")"}}
A.jc.prototype={
gc0(){return B.bb},
gcA(){return!0},
gcz(){return"Drop"},
cC(a){var s
A:{if(B.H===a){s="Drop which item?"
break A}if(B.a2===a){s="Unequip and drop which item?"
break A}s=A.a_(A.bC("Unreachable."))}return s},
e_(a){return"Drop how many?"},
aZ(a){return!0},
bV(a,b,c){this.b.b.y.at=new A.aR(new A.jb(b,c,a))
this.a.aa()}}
A.jg.prototype={
gcA(){return!1},
gcz(){return"Equip"},
cC(a){var s
A:{if(B.H===a){s="Equip which item?"
break A}if(B.a2===a){s="Unequip which item?"
break A}if(B.X===a){s="Pick up and equip which item?"
break A}s=A.a_(A.bC("Unreachable."))}return s},
aZ(a){return a.a.e!=null},
bV(a,b,c){this.b.b.y.at=new A.aR(A.vd(c,a))
this.a.aa()}}
A.eC.prototype={
gbm(){return!0},
gc0(){var s=A.a([B.a2,B.H],t.hm),r=this.b.b,q=r.x
q===$&&A.b()
if(!q.cl(r.y.y).gaL(0))s.push(B.X)
return s},
gi3(){return!1},
gdV(){var s=this.b.b,r=s.y,q=this.c
A:{if(B.H===q){s=r.Q.e
break A}if(B.a2===q){s=r.Q.f
break A}if(B.X===q){s=s.x
s===$&&A.b()
s=s.cl(r.y)
break A}s=A.a_(A.cM("Unexpected location."))}return s},
e_(a){return A.a_(A.b9(null))},
fh(a){return t.W.a(a).gbf()},
hS(a,b,c){var s=this
if(!c.jA(a)){s.b.b.y.Q.at.a1(B.W,"Not enough room for "+a.b_(b).t(0)+".",null,null,null)
s.K()
return}if(b===a.f){c.c7(a)
s.gdV().ac(0,a)}else{c.c7(a.dg(b))
s.gdV().bk()}s.eI(a,b)
s.a.aa()},
eI(a,b){},
a7(a){var s=this,r=s.d
if(r!=null){if(B.a6===a){s.bV(r,s.e,s.c)
return!0}if(B.G===a){s.d=null
s.K()
return!0}if(B.a0===a&&s.e<r.f){++s.e
s.K()
return!0}if(B.a1===a&&s.e>1){--s.e
s.K()
return!0}}else if(a===B.G){s.a.aa()
return!0}return!1},
a9(a,b,c){var s,r,q,p,o=this
if(a===16){o.f=!0
o.K()
return!0}if(b)return!1
s=o.f
if(s&&a===27){o.r=null
o.K()
return!0}if(o.d!=null)return!1
if(a>=65&&a<=90){o.nn(a-65)
return!0}if(a===9&&!s&&o.gc0().length>1){s=c?-1:1
r=B.a.c4(o.gc0(),o.c)
q=o.gc0().length
p=o.gc0()
s=B.c.ad(r+q+s,q)
if(!(s<p.length))return A.c(p,s)
o.c=p[s]
o.K()
return!0}return!1},
f1(a,b,c){if(a===16){this.f=!1
this.K()
return!0}return!1},
ag(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="Unexpected location.",d="Inspect item",c=f.c
A:{if(B.H===c){s=24
break A}if(B.a2===c){s=9
break A}if(B.X===c){s=f.gdV()
s=Math.min(s.gI(s),26)
break A}s=A.a_(A.cM(e))}r=f.b
q=r.f
p=q.a
if(p!=null){o=f.c
B:{n=0
if(B.H===o){q=11
break B}if(B.a2===o){q=n
break B}m=B.X===o
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
A.ul(a,q,f.gmx(),!0,p,f.ghX(),i,!1,s,k,r.b.y.Q,!0,j,n,l)
if(f.d==null)h=f.f?"Inspect which item?":f.cC(f.c)
else h=f.e_(f.c)+" "+f.e
if(f.d==null){s=t.N
if(f.f){s=A.D(s,s)
s.i(0,"A-Z",d)
if(f.r!=null)s.i(0,"`","Hide inspector")
g=s}else{s=A.D(s,s)
s.i(0,"A-Z","Select item")
s.i(0,"Shift",d)
if(f.gc0().length>1)s.i(0,"Tab","Switch view")
g=s}}else{s=t.N
g=A.A(["OK",f.gcz(),"\u2195","Change quantity","`","Cancel"],s,s)}A.bq(a,g,h)},
my(a){var s,r=this
if(r.f&&r.d==null)return!0
s=r.d
if(s!=null)return a===s
return r.aZ(a)},
nn(a){var s,r=this,q=J.uW(r.gdV().gef()),p=q.length
if(a>=p)return
if(!(a>=0))return A.c(q,a)
s=q[a]
if(s==null)return
if(r.f){r.r=s
r.K()}else{if(!r.aZ(s))return
if(s.f>1&&r.gcA()){r.d=s
r.r=null
r.e=s.f
r.K()}else r.bV(s,1,r.c)}}}
A.jR.prototype={
li(a,b,c){var s=this,r=s.a,q=r.a
if(q.x!=null)s.b=new A.hP(a,r)
if(q.Q+r.gc1()!==0||q.z!=null)s.c=new A.hR(r)
if(q.e!=null)s.d=new A.i6(r)
r=q.w
if(r!=null){q=c?78:34
s.e=new A.ff(A.dH(q,r.a),"Use")}},
hk(a,b,c){var s,r,q,p,o,n=this,m=A.a([],t.n9),l=n.b
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
s=4+n.nl(m)
c=c.b8(a,B.c.P(b-1,0,c.gan()-4-s),34,s)
l=c.c
r=n.a
A.nF(c,0,0,l.a,l.b,r.a.b,r.gao().a)
for(l=m.length,q=3,p=0;p<m.length;m.length===l||(0,A.p)(m),++p){o=m[p]
c.k(1,q,o.gdR()+" ",B.f)
o.dn(c,q+1)
q=q+o.gan()+2}},
jK(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.c,h=i.a
i=i.b
s=j.a
A.nF(a,0,0,h,i,s.a.b,s.gao().a)
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
nl(a){var s,r,q,p
t.la.a(a)
for(s=a.length,r=0,q=0;p=a.length,q<p;a.length===s||(0,A.p)(a),++q)r+=a[q].gan()+1
return r+p-1}}
A.oH.prototype={
$2(a,b){t.M.a(a)
A.w(b)
if(b<0)B.a.j(this.a,"It lowers "+a.gM()+" by "+-b+".")
else if(b>0)B.a.j(this.a,"It raises "+a.gM()+" by "+b+".")},
$S:19}
A.cV.prototype={
dL(a,b){a.k(1,b,this.gdR()+" ",B.f)
this.dn(a,b+1)
return b+this.gan()+2},
eH(a,b,c,d){var s,r,q=B.c.t(Math.abs(d))
if(d>0){s=q.length
a.k(b+2-s,c,"+",B.z)
a.k(b+3-s,c,q,B.p)}else{s=q.length
r=b+2-s
s=b+3-s
if(d<0){a.k(r,c,"-",B.Y)
a.k(s,c,q,B.m)}else{a.k(r,c,"+",B.i)
a.k(s,c,q,B.i)}}},
h6(a,b,c,d){a.k(1,b,c+":",B.i)
a.k(12,b,B.c.t(d),B.d)},
jp(a,b,c,d){var s,r
if(d>1){s=B.z
r=B.p}else if(d<1){s=B.Y
r=B.m}else{s=B.i
r=B.i}a.k(b,c,"x",s)
a.k(b+1,c,A.tN(d,1,null),r)}}
A.hP.prototype={
gdR(){return"Attack"},
gan(){var s=this.b,r=s.gca()!==0?3:2
return s.a.x.d>0?r+1:r},
dn(a,b){var s,r,q,p,o=this
a.k(1,b,"Damage:",B.i)
s=o.b
if(s.gb1()!==$.aw())a.k(9,b,s.gb1().b,A.e1(s.gb1()))
r=s.a.x
q=r.c
a.k(12,b,B.c.t(q),B.d)
o.jp(a,16,b,s.gcV())
o.eH(a,20,b,s.gcU())
a.k(25,b,"=",B.l)
a.k(27,b,A.tN(q*s.gcV()+s.gcU(),2,6),B.M);++b
if(s.gca()!==0){a.k(1,b,"Strike:",B.i)
o.eH(a,12,b,s.gca());++b}r=r.d
if(r>0){o.h6(a,b,"Range",r);++b}a.k(1,b,"Heft:",B.i)
r=o.a.ay
q=r.a
q.toString
p=q>=s.geY()?B.d:B.m
a.k(12,b,B.c.t(s.geY()),p)
o.jp(a,16,b,r.jV(s.geY()))}}
A.hR.prototype={
gdR(){return"Defense"},
gan(){var s=this.a,r=s.a,q=r.z!=null?2:1
return r.Q+s.gc1()!==0?q+1:q},
dn(a,b){var s=this,r=s.a,q=r.a,p=q.z
if(p!=null){s.h6(a,b,"Dodge",p.a);++b}q=q.Q
if(q+r.gc1()!==0){a.k(1,b,"Armor:",B.i)
a.k(12,b,B.c.t(q),B.d)
s.eH(a,16,b,r.gc1())
a.k(25,b,"=",B.l)
a.k(27,b,A.P(q+r.gc1(),!1,6),B.p);++b}s.h6(a,b,"Weight",r.ge6())}}
A.i6.prototype={
gdR(){return"Resistances"},
gan(){return 2},
dn(a,b){var s,r,q,p,o,n,m,l
for(s=$.fr(),r=this.a,q=b+1,p=1,o=0;o<12;++o){n=s[o]
if(n===$.aw())continue
m=r.c5(n)
this.eH(a,p-1,b,m)
l=m===0?B.i:A.e1(n)
a.k(p,q,n.b,l)
p+=3}}}
A.ff.prototype={
gan(){return this.a.length},
dn(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){a.k(1,b,s[q],B.d);++b}},
gdR(){return this.b}}
A.kv.prototype={
gc0(){return B.hM},
gcA(){return!0},
gcz(){return"Pick up"},
cC(a){return"Pick up which item?"},
e_(a){return"Pick up how many?"},
aZ(a){return!0},
bV(a,b,c){this.b.b.y.at=new A.aR(A.vA(a))
this.a.aa()}}
A.md.prototype={
gc0(){return B.bb},
gcA(){return!0},
gcz(){return"Put"},
cC(a){return"Put which item?"},
e_(a){return"Put how many?"},
aZ(a){return!0}}
A.kB.prototype={
bV(a,b,c){this.hS(a,b,this.b.b.y.Q.w)},
eI(a,b){this.b.b.y.Q.at.a1(B.I,"You place "+a.b_(b).t(0)+" into the crucible.",null,null,null)
this.ay.$0()}}
A.kC.prototype={
bV(a,b,c){this.hS(a,b,this.b.b.y.Q.r)},
eI(a,b){this.b.b.y.Q.at.a1(B.I,"You put "+a.b_(b).t(0)+" safely into your home.",null,null,null)}}
A.hw.prototype={
gc0(){return B.bb},
gcA(){return!0},
gi3(){return!0},
gcz(){return"Sell"},
cC(a){return"Sell which item?"},
e_(a){return"Sell how many?"},
aZ(a){return a.gbf()!==0},
fh(a){return B.e.bK(t.W.a(a).gbf()*0.75)},
bV(a,b,c){this.hS(a,b,this.x)},
eI(a,b){var s=a.b_(b).gao(),r=B.e.bK(a.gbf()*0.75)*b,q=this.b.b.y.Q
q.at.a1(B.I,"You sell "+s.a+" for "+r+" gold.",null,null,null)
q.Q+=r}}
A.l8.prototype={
gcA(){return!1},
gcz(){return"Toss"},
cC(a){var s
A:{if(B.H===a){s="Throw which item?"
break A}if(B.a2===a){s="Unequip and throw which item?"
break A}if(B.X===a){s="Pick up and throw which item?"
break A}s=A.a_(A.bC("Unreachable."))}return s},
aZ(a){return a.a.y!=null},
bV(a,b,c){var s,r=A.bD(a.a.y.b),q=this.b
q.b.y.kf(r,B.hj)
s=this.a
s.toString
s.bU(A.vR(q,r.gaz(),new A.r2(this,c,a,r)))}}
A.r2.prototype={
$1(a){var s=this
s.a.b.b.y.at=new A.aR(new A.l7(s.d,a,s.b,s.c))},
$S:11}
A.dS.prototype={
gfF(){return null},
gbm(){return!0},
gdl(){return!1},
gh2(){return!1},
lA(a){if(this.c)return!0
return this.aZ(a)},
aZ(a){return!0},
a7(a){this.f=null
if(a===B.G){this.a.aa()
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
o.K()}else{if(!o.gdl()||!o.aZ(q))return!1
if(q.f>1){o.d=!1
s=o.a
s.toString
t.ak.a(o)
p=new A.fa(o,q,o.iL(q),o.b)
p.e=q
s.a4(p)
return!0}if(o.jf(q,1)){o.a.aa()
return!0}}}return!1},
f1(a,b,c){if(a===16){this.c=!1
this.K()
return!0}return!1},
dz(a,b){var s=this
t.eE.a(a)
s.d=!0
s.e=null
if(a instanceof A.fa&&b!=null)if(s.jf(a.x,A.w(b)))s.a.aa()},
ag(a){var s,r,q,p,o,n,m,l,k,j=this
if(j.d)if(j.c){s=t.N
s=A.D(s,s)
s.i(0,"A-Z","Inspect item")
if(j.e!=null)s.i(0,"`","Hide inspector")
A.bq(a,s,"Inspect which item?")}else A.bq(a,j.gcP(),j.gcO())
s=j.gbc()
r=j.b
q=r.w
q===$&&A.b()
q=q.a
p=q.a
q=Math.min(46,q.b.a)
o=j.gbc().b.length
n=j.c
m=j.gh2()
l=j.d?j.e:null
k=j.c||j.gdl()
A.ul(a,s,j.glz(),k,n,j.geu(),l,!0,o,p.a,r.b.y.Q,!0,m,p.b,q)
s=j.f
if(s!=null)a.k(0,32,s,B.m)},
iL(a){return a.f},
fQ(a){return a.f},
bY(a){t.W.a(a)
return null},
jf(a,b){var s=this,r=s.gfF()
if(!r.jA(a)){s.f="Not enough room for "+a.b_(b).t(0)+"."
s.K()
return!1}if(b===a.f){r.c7(a)
B.a.ac(s.gbc().b,a)}else{r.c7(a.dg(b))
s.gbc().bk()}s.cr(a,b)
return!0},
cr(a,b){}}
A.cS.prototype={}
A.hX.prototype={
gbc(){return this.b.b.y.Q.r},
gcO(){return"Welcome home!"},
gcP(){var s=t.N
return A.A(["G","Get item","P","Put item","Shift","Inspect item","Tab","Use crucible","`","Leave"],s,s)},
a9(a,b,c){var s,r,q,p=this
if(p.ej(a,b,c))return!0
if(c||b)return!1
switch(a){case 71:s=new A.lU(p.b)
s.e=p.e
p.d=!1
p.a.a4(s)
return!0
case 80:p.d=!1
p.a.a4(new A.kC(p.b,B.H))
return!0
case 9:r=p.a
r.toString
q=new A.hQ(p.b)
q.ey()
r.bU(q)
return!0}return!1}}
A.hW.prototype={
gcO(){return"Get which item?"},
geG(){return"Get"},
gcP(){var s=t.N
return A.A(["A-Z","Select item","Shift","Inspect item","`","Cancel"],s,s)},
gfF(){return this.b.b.y.Q.e},
gdl(){return!0},
aZ(a){return!0},
cr(a,b){var s=this.b.b.y
s.Q.ax.d_(a)
s.bq()}}
A.lU.prototype={
gbc(){return this.b.b.y.Q.r},
cr(a,b){this.b.b.y.Q.at.a1(B.I,"You take "+a.b_(b).t(0)+" from your home.",null,null,null)
this.ib(a,b)}}
A.lT.prototype={
gbc(){return this.b.b.y.Q.w},
cr(a,b){this.b.b.y.Q.at.a1(B.I,"You remove "+a.b_(b).t(0)+" from the crucible.",null,null,null)
this.ib(a,b)
this.cy.$0()}}
A.hQ.prototype={
gbc(){return this.b.b.y.Q.w},
gcO(){return this.w!=null?"Ready to forge item!":"Place items to complete a recipe."},
gcP(){var s=t.N
s=A.D(s,s)
s.i(0,"G","Get item")
s.i(0,"P","Put item")
s.i(0,"Shift","Inspect item")
if(this.w!=null)s.i(0,"Space","Forge item")
s.i(0,"Tab","Back to home")
s.i(0,"`","Leave")
return s},
ag(a){var s,r,q,p,o
this.ld(a)
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
if(o!=null)a.k(1,1,"Forge a "+o.c,B.C)
else if(!s.gN(0).q())a.k(1,1,"Add ingredients to crucible",B.i)
else a.k(1,1,"Not a complete recipe",B.i)},
a9(a,b,c){var s,r,q,p=this
if(p.ej(a,b,c))return!0
if(c||b)return!1
if(71===a){s=new A.lT(p.gj2(),p.b)
s.e=p.e
p.d=!1
p.a.a4(s)
return!0}if(80===a){p.d=!1
p.a.a4(new A.kB(p.gj2(),p.b,B.H))
return!0}if(32===a&&p.w!=null){r=p.b.b.y.Q
q=r.w
B.a.aS(q.b)
q.d=null
p.w.b.b0(r.ax,1,q.gkK())
p.ey()
p.K()
return!0}if(9===a){p.a.bU(new A.hX(p.b))
return!0}return!1},
cr(a,b){this.ey()},
ey(){var s,r,q,p,o,n
this.w=null
for(s=$.ho.length,r=this.b.b.y.Q.w,q=t.C,p=0;p<$.ho.length;$.ho.length===s||(0,A.p)($.ho),++p){o=$.ho[p]
n=o.mW(q.a(r))
if(n!=null&&n.a===0){this.w=o
return}}}}
A.ia.prototype={
gbc(){return this.w},
gcO(){return"What can I interest you in?"},
gh2(){return!0},
gcP(){var s=t.N
return A.A(["B","Buy item","S","Sell item","Shift","Inspect item","`","Cancel"],s,s)},
a9(a,b,c){var s,r=this
if(r.ej(a,b,c))return!0
if(c||b)return!1
switch(a){case 66:s=new A.i9(r.w,r.b)
s.e=r.e
r.d=!1
r.a.a4(s)
break
case 83:r.d=!1
r.a.a4(new A.hw(r.w,r.b,B.H))
return!0}return!1},
bY(a){return t.W.a(a).gbf()}}
A.i9.prototype={
gcO(){return"Buy which item?"},
geG(){return"Buy"},
gcP(){var s=t.N
return A.A(["A-Z","Select item","Shift","Inspect item","`","Cancel"],s,s)},
gbc(){return this.at},
gfF(){return this.b.b.y.Q.e},
gdl(){return!0},
gh2(){return!0},
aZ(a){return a.gbf()<=this.b.b.y.Q.Q},
iL(a){return 1},
fQ(a){return Math.min(a.f,B.c.cb(this.b.b.y.Q.Q,a.gbf()))},
bY(a){return t.W.a(a).gbf()},
cr(a,b){var s=a.gbf()*b,r=this.b.b.y,q=r.Q
q.at.a1(B.I,"You buy "+a.b_(b).t(0)+" for "+s+" gold.",null,null,null)
q.Q-=s
q.ax.d_(a)
r.bq()}}
A.fa.prototype={
gbc(){return this.w.gbc()},
gcO(){var s,r=this,q=r.x,p=q.b_(r.y).gao().a,o=r.w,n=o.bY(q)
if(n!=null){s=A.P(n*r.y,!1,null)
return o.geG()+" "+p+" for "+s+" gold?"}else return o.geG()+" "+p+"?"},
gcP(){var s=t.N
return A.A(["OK",this.w.geG(),"\u2195","Change quantity","`","Cancel"],s,s)},
gdl(){return!0},
aZ(a){return a===this.x},
a9(a,b,c){if(a===16)return!1
return this.ej(a,b,c)},
f1(a,b,c){return!1},
a7(a){var s=this
A:{if(B.a6===a){s.a.b6(s.y)
break A}if(B.G===a){s.a.aa()
break A}if(B.a0===a&&s.y<s.w.fQ(s.x)){++s.y
break A}if(B.a1===a&&s.y>1){--s.y
break A}if(B.ao===a){s.y=s.w.fQ(s.x)
break A}if(B.ap===a){s.y=1
break A}return!1}s.K()
return!0},
bY(a){return this.w.bY(t.W.a(a))}}
A.lf.prototype={
gcA(){return!1},
gcz(){return"Use"},
cC(a){var s
A:{if(B.H===a||B.a2===a){s="Use which item?"
break A}if(B.X===a){s="Pick up and use which item?"
break A}s=A.a_(A.bC("Unreachable."))}return s},
aZ(a){return a.a.w!=null},
bV(a,b,c){this.b.b.y.at=new A.aR(new A.le(c,a))
this.a.aa()}}
A.jA.prototype={
a7(a){switch(a){case B.G:this.a.aa()
return!0}return!1},
ag(a){var s=this.b.d?"Create a new hero":"Try again",r=t.N
A.va(a,60,40,new A.og(this),A.A(["`",s],r,r),"You have died")}}
A.og.prototype={
$1(a){var s,r,q,p,o=a.c,n=o.b-1
for(s=this.a.b.at.a,r=s.length-1,o=o.a;r>=0;--r){if(!(r<s.length))return A.c(s,r)
q=A.dH(o,s[r].b)
for(p=q.length-1;p>=0;--p){if(!(p<q.length))return A.c(q,p)
a.pr(0,n,q[p]);--n
if(n<0)break}if(n<0)break}},
$S:40}
A.k5.prototype={
a7(a){var s,r,q,p,o,n=this
if(B.a0===a&&n.d>0){--n.d
n.fY()
n.K()
return!0}if(B.a1===a&&n.d<n.c.b.length-1){++n.d
n.fY()
n.K()
return!0}if(B.a6===a){s=n.d
r=n.c
q=r.b
p=q.length
if(s<p){if(!(s>=0))return A.c(q,s)
o=q[s]
n.x=!1
s=n.a
s.toString
s.a4(A.oh(r,n.b,o,!1))}return!0}if(B.b6===a){s=n.a
s.toString
r=B.aQ.gb2()
r=A.a6(r,A.y(r).h("k.E"))
s.a4(new A.fU(r))
return!0}return!1},
fY(){var s=this,r=s.y=B.c.P(s.y,0,Math.max(s.c.b.length-8,0)),q=s.d
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
p.a.a4(new A.fF("Are you sure you want to delete "+s.a+"?","delete"))}return!0
case 78:p.x=!1
s=p.a
s.toString
s.a4(A.yD(p.b,p.c))
return!0}return!1},
dz(a,b){var s,r,q=this
q.x=!0
if(a instanceof A.fF&&J.ax(b,"delete")){s=q.c.b
r=q.d
if(!(r>=0&&r<s.length))return A.c(s,r)
B.a.ac(s,s[r])
r=q.d
if(r>0&&r>=s.length)q.d=r-1
q.fY()
q.K()}},
e2(a){this.f=this.e=null},
bt(){var s,r,q=this
if(!q.x)return
s=q.w
if(s>0){--s
q.w=s
if(s===0){q.e=null
q.K()}return}r=q.f
if(r!=null){if(!r.q()){q.f=null
q.w=300
return}s=r.b
if(J.ax(s==null?r.$ti.c.a(s):s,"Ready to decorate"))q.r=!0
if(q.r){s=q.e.x
s===$&&A.b()
s.hQ()
s=q.e.x
s===$&&A.b()
s.gav().cE()}q.K()}},
ag(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.e
if(d!=null)f.j4(a,d)
else{s=f.b
r=s.oo("Temporary")
q=a.e.a.b.b
p=f.e=A.tH(s,$.m().aw(1,100),r,q.b,q.a)
q=p.e7()
f.f=new A.ag(q.a(),q.$ti.h("ag<1>"))
f.r=!1
f.j4(a,p)}s=a.e.a.b.b
o=new A.aS(new A.d(68,34),B.c.A(s.a-68,2),B.c.A(s.b-34,2),a)
o.ck(0,0,o.gaQ(),o.gan())
A.cz(o,0,0,68,34,e,"\u2554","\u2550","\u2557","\u2551","\u255a","\u2550","\u255d")
for(n=0;n<14;++n)for(s=n+2,m=0;m<B.c7[n].length;++m){q=B.hA[n]
if(!(m<q.length))return A.c(q,m)
l=B.hT.p(0,q[m])
q=B.c7[n]
if(!(m<q.length))return A.c(q,m)
o.k(m+3,s,q[m],l)}o.k(3,18,"Which hero shall you play?",B.d)
A.ja(o,3,20,62,e)
A.ja(o,3,29,62,e)
s=f.c.b
if(s.length===0)o.k(3,21,"(No heroes. Please create a new one.)",B.i)
else{if(f.y>0)o.k(34,20,"\u25b2",B.h)
if(f.y<s.length-8)o.k(34,29,"\u25bc",B.h)
for(k=0;k<8;++k){j=k+f.y
q=s.length
if(j>=q)break
if(!(j>=0))return A.c(s,j)
i=s[j]
if(j===f.d)o.am(2,21+k,new A.W(9658,B.h,B.x))
h=j===f.d?B.h:B.C
q=21+k
o.k(3,q,i.a,h)
g=j===f.d?B.h:B.d
o.k(34,q,i.b.a,g)
o.k(42,q,i.c.a,g)
if(i.d)o.k(55,q,"Permadeath",g)}}if(f.x){s=t.N
A.bq(a,A.A(["OK","Play","\u2195","Change selection","N","Create a new hero","D","Delete hero","H","Help"],s,s),e)}},
j4(a,b){var s,r,q,p=b.x
p===$&&A.b()
for(p=p.f.b.b,s=p.b,p=p.a,r=0;r<s;++r)for(q=0;q<p;++q)this.nd(a,b,new A.d(q,r))},
nd(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
d===$&&A.b()
s=c.a
r=c.b
q=d.f.C(s,r)
p=q.a.d
A:{if(p instanceof A.W){o=p
break A}if(t.af.b(p)){o=p[B.c.ad(A.wE(s,r),p.length)]
break A}o=B.b0
break A}n=o.a
m=o.b
l=o.c
k=d.cl(c)
j=k.gaL(0)
if(!j){i=k.gaC(0).a.b
n=i.a
m=i.b}d=d.w.C(s,r)
h=d==null?null:d.geJ()
if(h instanceof A.W){n=h.a
m=h.b
j=!1}d=new A.pi()
g=d.$2(m,B.bo)
f=d.$2(l,B.cN)
q=new A.ph(q)
if(j)m=q.$2(m,g)
e=q.$2(l,f)
a.e.i0(s,r,A.cB(n,m,e))}}
A.pi.prototype={
$2(a,b){return new A.E(B.c.A(a.a*b.a,255),B.c.A(a.b*b.b,255),B.c.A(a.c*b.c,255))},
$S:15}
A.ph.prototype={
$2(a,b){var s=this.a,r=s.d
if(r<128)a=a.bh(b,A.v(r,0,127,1,0))
else if(r>128)a=a.aX(0,B.t,A.v(r,128,255,0,0.2))
s=s.e
return s>0?a.aX(0,B.bm,A.v(s,0,255,0.05,0.1)):a},
$S:15}
A.ko.prototype={
ag(a){var s,r,q=this,p=t.N
p=A.D(p,p)
p.i(0,"Tab","Next field")
s=q.x
r=q.d
if(!(r>=0&&r<s.length))return A.c(s,r)
p.U(0,s[r].gcw())
if(q.e.f)p.i(0,"Enter","Create hero")
p.i(0,"`","Cancel")
A.va(a,80,40,new A.pB(q),p,"Create New Hero")},
nc(a){var s,r,q,p,o=$.fs(),n=this.f.e
if(!(n>=0&&n<5))return A.c(o,n)
s=o[n]
this.j6(a,s.d)
n=A.a([],t.dF)
for(o=s.c,r=0;r<4;++r){q=B.aP[r]
p=o.p(0,q)
p.toString
n.push(new A.Q(q.c,B.e.L(p*100)))}this.j5(a,200,n)},
na(a){var s,r,q=$.e8(),p=this.r.e
if(!(p>=0&&p<3))return A.c(q,p)
s=q[p]
this.j6(a,s.d)
p=A.a([],t.dF)
for(q=s.c,q=new A.bj(q,A.y(q).h("bj<1,2>")).gN(0);q.q();){r=q.d
p.push(new A.Q(r.a.a,r.b))}this.j5(a,10,p)},
j6(a,b){var s,r,q,p,o,n,m,l,k
t.m1.a(b)
for(s=b.length,r=3,q=0;q<b.length;b.length===s||(0,A.p)(b),++q){p=b[q]
for(o=A.dH(53,p.gM()+": "+p.gW()),n=o.length,m=r,l=0;l<o.length;o.length===n||(0,A.p)(o),++l,m=k){k=m+1
a.k(25,m,o[l],B.d)}a.k(25,r,p.gM()+":",B.i)
r=m+1}},
j5(a,b,c){var s,r,q,p
t.ig.a(c)
for(s=c.length,r=3,q=0;q<c.length;c.length===s||(0,A.p)(c),++q){p=c[q]
a.k(0,r,p.a,B.i)
A.vc(a,13,r,10,p.b,b,null,null);++r}},
nb(a){var s,r,q,p,o,n=this,m=null,l=n.d
A:{if(0===l){s=B.id
break A}if(1===l){s=$.fs()
r=n.f.e
if(!(r>=0&&r<5))return A.c(s,r)
r=s[r]
r=new A.Q(r.a,r.b)
s=r
break A}if(2===l){s=$.e8()
r=n.r.e
if(!(r>=0&&r<3))return A.c(s,r)
r=s[r]
r=new A.Q(r.a,r.b)
s=r
break A}if(3===l){s=n.w.e
if(!(s>=0&&s<2))return A.c(B.bc,s)
s=new A.Q(B.bc[s],B.hP[s])
break A}s=A.a_(A.cM("Unexpected focus."))}A.bi(a,m,m,s.a,!0,m,m,m)
for(s=A.dH(a.c.a-2,s.b),r=s.length,q=2,p=0;p<s.length;s.length===r||(0,A.p)(s),++p,q=o){o=q+1
a.k(1,q,s[p],B.d)}},
a7(a){var s=this,r=s.x,q=s.d
if(!(q>=0&&q<r.length))return A.c(r,q)
if(r[q].a7(a)){s.K()
return!0}switch(a){case B.G:s.a.aa()
return!0}return!1},
a9(a,b,c){var s,r,q,p,o,n=this,m=n.x,l=n.d
if(!(l>=0&&l<m.length))return A.c(m,l)
if(m[l].a9(a,b,c)){n.K()
return!0}if(b)return!1
if(13===a&&n.e.f){m=n.b
l=n.e
s=l.d
l=s.length!==0?s:l.e
s=$.fs()
r=n.f.e
if(!(r>=0&&r<5))return A.c(s,r)
r=s[r]
s=$.e8()
q=n.r.e
if(!(q>=0&&q<3))return A.c(s,q)
p=m.jF(l,s[q],n.w.e===1,r)
r=n.c
B.a.j(r.b,p)
r.bv()
q=n.a
q.toString
q.bU(A.oh(r,m,p,!0))
return!0}if(9===a){o=c?m.length-1:1
n.d=B.c.ad(n.d+o,m.length)
n.K()
return!0}return!1}}
A.pz.prototype={
$1(a){return t.ho.a(a).a},
$S:113}
A.pA.prototype={
$1(a){return t.lJ.a(a).a},
$S:114}
A.pB.prototype={
$1(a){var s,r,q,p,o
for(s=a.c.a,r=0;r<3;++r){q=B.hs[r]
p=B.j.aH("\u2500",s)
a.k(0,q,p,B.u)}p=this.a
p.nc(a.b8(0,2,s,10))
p.na(a.b8(0,12,s,10))
p.nb(a.b8(0,25,s,14))
for(s=p.x,o=0;o<s.length;++o)s[o].kE(a,o===p.d)},
$S:40}
A.el.prototype={
a7(a){return!1},
a9(a,b,c){return!1}}
A.ke.prototype={
gcw(){return B.hV},
a9(a,b,c){var s,r,q=this
if(b)return!1
switch(a){case 8:s=q.d
r=s.length
if(r!==0){s=B.j.aI(s,0,r-1)
q.d=s
if(s.length===0){s=$.m()
t.m.a(B.ah)
r=B.ah.length
s=s.T(r)
if(!(s>=0&&s<r))return A.c(B.ah,s)
q.e=B.ah[s]}}q.fZ()
return!0
case 32:q.fv(" ")
return!0
default:if(a>=65&&a<=90){q.fv(A.b2(!c?32+a:a))
return!0}else if(a>=48&&a<=57){q.fv(A.b2(a))
return!0}}return!1},
fv(a){var s=this.d
if(s.length<20)this.d=s+a
this.fZ()},
fZ(){this.f=B.a.oz(this.c.b,new A.py(this))},
kE(a,b){var s=this,r=s.f?B.h:B.m,q=s.a,p=s.b,o=p+1
a.k(q,o,"Name:",B.f)
if(b)A.cz(a,q+24,p,23,3,r,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
p=s.d
if(p.length!==0){q+=25
a.k(q,o,p,B.C)
if(b)a.da(q+s.d.length,o," ",B.x,r)}else{q+=25
p=s.e
if(b)a.da(q,o,p,B.x,r)
else a.k(q,o,p,B.C)}if(!s.f)a.k(48,3,"Already a hero with that name",B.m)}}
A.py.prototype={
$1(a){var s,r
t.er.a(a)
s=this.a
r=s.d
s=r.length!==0?r:s.e
return a.a!==s},
$S:20}
A.f1.prototype={
gcw(){var s=t.N
return A.A(["\u25c4\u25ba","Select "+this.c.toLowerCase()],s,s)},
a7(a){var s,r,q=this
switch(a){case B.ag:s=q.e
r=q.d.length
q.e=B.c.ad(s+r-1,r)
return!0
case B.af:q.e=B.c.ad(q.e+1,q.d.length)
return!0}return!1},
kE(a,b){var s,r,q,p,o,n=this,m=n.a,l=n.b,k=l+1
a.k(m,k,n.c+":",B.f)
s=m+25
if(b)for(m=n.d,r=0;r<m.length;++r){q=m[r]
if(r===n.e){p=s-1
o=q.length
A.cz(a,p,l,o+2,3,B.h,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
a.k(p,k,"\u25c4",B.h)
a.k(s+o,k,"\u25ba",B.h)}a.k(s,k,q,r===n.e?B.h:B.C)
s+=q.length+2}else{m=n.d
l=n.e
if(!(l>=0&&l<m.length))return A.c(m,l)
a.k(s,k,m[l],B.C)}}}
A.oL.prototype={
gdX(){return 9+this.b.y.Q.e.c+4},
fa(a){var s,r,q=this,p=q.b,o=p.y,n=o.Q
q.fH(a,0,9,n.f)
n=n.e
q.fH(a,11,n.c,n)
if(q.a.b.b>50){p=p.x
p===$&&A.b()
s=p.cl(o.y)
q.fH(a,q.gdX(),5,s)}r=q.a.b.b>50?q.gdX()+7:q.gdX()
p=a.c
A.cz(a,0,r,p.a,p.b-r,null,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")},
fH(a,b,c,d){A.ul(a,d,A.AZ(),!1,!1,A.B_(),null,!1,c,0,this.b.y.Q,!1,!1,b,a.c.a)}}
A.p7.prototype={
fa(a){var s,r,q,p,o,n,m,l,k,j,i
a.ck(0,0,a.gaQ(),a.gan())
s=a.c
r=s.b
s=s.a
A.ja(a,0,r-1,s,null)
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
default:l=null}k=p!==o-1?l.bh(B.x,0.5):l
j=A.dH(s,m)
i=j.length-1
for(;;){if(!(i>=0&&q>=0))break
if(!(i>=0&&i<j.length))return A.c(j,i)
a.k(0,q,j[i],k);--q;--i}--p}}}
A.pK.prototype={
ag(a){var s,r,q=this.a
if(q!=null){s=q.a
r=q.b
this.fa(new A.aS(new A.d(r.a,r.b),s.a,s.b,a))}}}
A.qc.prototype={
fa(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b,f=g.b.y,e=f.Q,d=e.a
A.bi(a,h,h,d,!1,h,h,h)
a.k(1,2,e.b.a+" "+e.c.a,B.d)
i.lW(f,a,4)
s=f.z
r=e.CW.a
r.toString
i.ep(a,7,"Health",s,B.m,B.e.L(Math.pow(r,1.458)+9),B.Y)
r=f.ch
s=e.cx.a
s.toString
i.ep(a,8,"Focus",r,B.D,A.jN(s),B.B)
s=f.CW
r=e.ay.a
r.toString
i.ep(a,9,"Fury",s,B.M,A.hC(r),B.ar)
a.k(1,10,"Food",B.i)
r=a.c
s=r.a
A.vc(a,10,10,s-11,f.ay,400,B.k,B.v)
i.lR(f,a,12)
i.lS(f,a,13)
i.m_(f,a,14)
a.k(1,16,"Exp",B.i)
q=A.P(e.y,!1,h)
a.k(s-q.length-1,16,q,B.J)
a.k(1,17,"Gold",B.i)
p=A.P(e.Q,!1,h)
a.k(s-1-p.length,17,p,B.h)
a.k(1,19,"@",g.gjX())
a.k(3,19,d,B.C)
i.iy(a,20,f)
d=g.w
d===$&&A.b()
o=d.d
B.a.df(o,new A.qg(f))
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
if(j.length>e)j=B.j.aI(j,0,e)
a.am(1,m,k)
a.k(3,m,j,g.gdH()===l?B.h:B.C)
i.iy(a,m+1,l);++n}},
lW(a,b,c){var s,r={}
r.a=1
r=new A.qe(r,b,c)
s=a.Q
r.$1(s.ay)
r.$1(s.ch)
r.$1(s.CW)
r.$1(s.cx)},
m_(a,b,c){var s,r=a.eO(null),q=A.a(r.slice(0),A.M(r))
b.k(1,c,q.length>1?"Weapons":"Weapon",B.i)
r=A.M(q)
s=new A.aN(q,r.h("q(1)").a(new A.qf()),r.h("aN<1,q>")).aP(0,"+")
b.k(b.c.a-s.length-1,c,s,B.M)},
lS(a,b,c){var s,r,q,p
for(s=a.ghf(),r=s.$ti,s=new A.ag(s.a(),r.h("ag<1>")),r=r.c,q=0;s.q();){p=s.b
q+=(p==null?r.a(p):p).a}this.iB(b,c,"Dodge",""+q+"%",B.a_)},
lR(a,b,c){var s,r,q,p,o,n,m
for(s=$.fr(),r=10,q=0;q<12;++q){p=s[q]
o=a.hC(p)
n=a.fb(p)
if((n.a>0?o+n.b:o)>0){m=$.uA().p(0,p)
m.toString
b.k(r,c,m,A.e1(p));++r}}this.iB(b,c,"Armor"," "+B.e.L(100-A.wC(a.Q.gdC())*100)+"%",B.p)},
ep(a,b,c,d,e,f,g){var s,r,q
a.k(1,b,c,B.i)
s=a.c.a-1
if(f!=null){r=B.c.t(f)
s-=r.length
a.k(s,b,r,g)
s-=3
a.k(s,b," / ",g)}q=J.ea(d)
a.k(s-q.length,b,q,e)},
iB(a,b,c,d,e){return this.ep(a,b,c,d,e,null,null)},
iy(a,b,c){var s,r,q,p,o,n,m,l={}
l.a=3
s=new A.qd(l,a,b)
r=c.f
if(r.a>0){q=r.b
A:{if(1===q){r=B.k
break A}if(2===q){r=B.h
break A}r=B.A
break A}s.$2("S",r)}r=c.e.a
if(r>0){B:{if(1===r){r=B.cS
break B}if(2===r){r=B.a_
break B}r=B.J
break B}s.$2("F",r)}if(c.r.a>0)s.$2("V",B.t)
for(r=$.fr(),p=0;p<12;++p){o=r[p]
if(c.fb(o).a>0){n=$.uA().p(0,o)
n.toString
s.$3(n,B.x,A.e1(o))}}r=c instanceof A.ac
if(r&&c.at instanceof A.ct)s.$2("!",B.E)
if(r&&c.at instanceof A.cf)s.$2("z",B.B)
n=c.w
if(n.a>0){m=n.b
C:{if(1===m){n=B.z
break C}if(2===m){n=B.p
break C}n=B.ad
break C}s.$2("P",n)}if(c.c.a>0)s.$2("C",B.D)
if(c.b.a>0)s.$2("B",B.l)
if(c.d.a>0)s.$2("D",B.N)
if($.np&&r)a.k(2,b,A.P(B.e.L(c.ch*100),!1,3),B.t)
A.y6(a,10,b,a.c.a-11,c.z,c.gbo(),B.m,B.Y)}}
A.qg.prototype={
$2(a,b){var s,r=t.B
r.a(a)
r.a(b)
r=a.y
s=this.a.y
return B.c.ai(r.S(0,s).gaE(),b.y.S(0,s).gaE())},
$S:116}
A.qe.prototype={
$1(a){var s,r,q=this.b,p=this.a,o=this.c
q.k(p.a,o,B.j.aI(a.gbb().c,0,3),B.i)
s=p.a
r=a.a
r.toString
q.k(s,o+1,A.P(r,!1,2),B.d)
p.a=p.a+B.c.A(q.c.a-6,3)},
$S:117}
A.qf.prototype={
$1(a){return B.e.t(B.e.L(t.Z.a(a).gcS()*100)/100)},
$S:118}
A.qd.prototype={
$3(a,b,c){var s=this.a,r=s.a
if(r>8)return
this.b.da(r,this.c,a,b,c);++s.a},
$2(a,b){return this.$3(a,b,null)},
$S:119}
A.qn.prototype={
cW(a,b,c,d){var s=this.a.a
this.iA(a,b+s.a,c+s.b,d)},
iA(a,b,c,d){var s=this.r.a,r=this.w
a.am(b-s.a+r.a,c-s.b+r.b,d)},
aG(a){var s,r,q,p,o,n=this;++n.f
s=a instanceof A.eT
if(s){r=a.a
for(q=r.length,p=n.c,o=0;o<r.length;r.length===q||(0,A.p)(r),++o)A.Aw(p,r[o])}q=n.c
p=q.length
B.a.hJ(q,new A.qt(n))
return s||n.e||p!==0||q.length!==0||n.b.b.y.d.a>0},
fa(b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this
b5.n3(b6.c)
s=b5.d
B.a.aS(s)
b5.e=!1
r=b5.b
q=r.b
p=q.y
for(o=A.aa(b5.r),n=p.d,m=t.p0,l=t.dW,k=t.ev;o.q();){j=o.b
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
if(d){c=b5.nz(h,f)
b=c.a
a=c.b
a0=c.c
a1=g.r.p(0,h)
if(a1==null)a1=A.bE(B.X,null)
a2=a1.gaL(0)
if(!a2){a3=a1.gN(0)
if(!a3.q())A.a_(A.cE())
a4=a3.gH().a.b
b=a4.a
a=a4.b}}else{b=null
a=B.x
a0=B.x
a2=!1}if(!f.b&&f.d+f.e>f.c&&f.x!==0){e=f.w
if(e===$.b4()){e=$.m()
l.a(B.aL)
a5=B.aL.length
e=e.a
a6=e.a_(a5)
if(!(a6>=0&&a6<a5))return A.c(B.aL,a6)
b=B.aL[a6]
m.a(B.aO)
a5=B.aO.length
e=e.a_(a5)
if(!(e>=0&&e<a5))return A.c(B.aO,e)
a7=B.aO[e]
a=a7.a
a0=a7.b
b5.e=!0}else if(e===$.bz())a0=a0.bh(B.y,0.1+f.x/255*0.9)}e=g.w
e.l(j,i)
a6=e.a
e=i*e.b.b.a+j
if(!(e>=0&&e<a6.length))return A.c(a6,e)
e=a6[e]
if(e!=null)a8=!f.b&&f.d+f.e>f.c||h.a0(0,p.y)||$.tE||q.d0(e)
else a8=!1
if(a8){a9=e.geJ()
if(a9 instanceof A.W){b=a9.a
a=a9.b}else{a=r.gjX()
b=64}if(r.gdH()===e){a0=a
a=B.u
d=!1}if(e instanceof A.ac)B.a.j(s,e)
a2=!1}a6=n.a
if(a6>0){b0=Math.min(90,a6*8)
a6=$.m()
a6=a6.a
if(a6.a_(100)<b0){b=a6.a_(100)<b0?b:42
k.a(B.aN)
a5=B.aN.length
a6=a6.a_(a5)
if(!(a6>=0&&a6<a5))return A.c(B.aN,a6)
a=B.aN[a6]}a2=!1
d=!1}a6=new A.qs()
b1=a6.$2(a,B.bo)
b2=a6.$2(a0,B.cP)
if(!f.b&&f.d+f.e>f.c)a6=a2||d
else a6=!1
if(a6){f=new A.qq(f)
if(a2)a=f.$2(a,b1)
if(d)a0=f.$2(a0,b2)}else{if(a2)a=b1
if(d)a0=b2}if($.tF){b3=(16-g.geE().iK(h))/16
b3*=b3
if(b3>0)a0=a0.bh(B.p,b3)}if($.np&&e instanceof A.ac)a0=B.cL.bh(B.bn,e.ch)
if(b!=null){g=b5.r.a
f=b5.w
b6.am(j-g.a+f.a,i-g.b+f.b,new A.W(b,a,a0))}}for(s=b5.c,r=s.length,b4=0;b4<s.length;s.length===r||(0,A.p)(s),++b4)s[b4].br(q,new A.qr(b5,b6))},
nz(a,b){var s,r,q,p=b.a.d
if(p instanceof A.W)return p
t.af.a(p)
s=p.length
r=A.wE(a.a,a.b)
q=B.c.ad(B.c.A(this.f,8)+r,s*2-2)
s=p.length
if(q>=s)q=s-(q-s)-1
this.e=!0
if(!(q>=0&&q<s))return A.c(p,q)
return p[q]},
n3(a){var s,r,q,p,o,n,m,l=this,k=l.b.b,j=l.r,i=j.gbM(),h=new A.qo(k,a),g=a.a,f=k.x
f===$&&A.b()
s=f.f.b.b.a
if(g>=s){r=B.e.A(Math.max(0,g-s),2)
i=0}else{j=j.b.a
if(j===0||j!==g)i=h.$0()
else{q=k.y.y.gm()-l.r.gbM()
if(q<8||q>g-8)i=h.$0()}r=0}j=l.r
p=j.gbS()
h=new A.qp(k,a)
s=a.b
o=f.f.b.b.b
if(s>=o){n=B.e.A(Math.max(0,s-o),2)
p=0}else{j=j.b.b
if(j===0||j!==s)p=h.$0()
else{m=k.y.y.gn()-l.r.gbS()
if(m<8||m>s-8)p=h.$0()}n=0}j=f.f.b.b
l.r=new A.Y(new A.d(i,p),new A.d(Math.min(g,j.a),Math.min(s,j.b)))
l.w=new A.d(r,n)}}
A.qt.prototype={
$1(a){return!t.ox.a(a).aG(this.a.b.b)},
$S:120}
A.qs.prototype={
$2(a,b){return new A.E(B.c.A(a.a*b.a,255),B.c.A(a.b*b.b,255),B.c.A(a.c*b.c,255))},
$S:15}
A.qq.prototype={
$2(a,b){var s=this.a,r=s.d-s.c
if(r<64)a=a.bh(b,A.v(r,0,64,0.5,0))
else if(r>128)a=a.aX(0,B.t,A.v(r,128,255,0,0.2))
s=s.e
return s>0?a.aX(0,B.bm,A.v(s,0,255,0.05,0.1)):a},
$S:15}
A.qr.prototype={
$3(a,b,c){this.a.iA(this.b,a,b,c)},
$S:43}
A.qo.prototype={
$0(){var s=this.a,r=s.y.y.gm(),q=this.b.a,p=B.c.A(q,2)
s=s.x
s===$&&A.b()
return B.c.P(r-p,0,s.f.b.b.a-q)},
$S:1}
A.qp.prototype={
$0(){var s=this.a,r=s.y.y.gn(),q=this.b.b,p=B.c.A(q,2)
s=s.x
s===$&&A.b()
return B.c.P(r-p,0,s.f.b.b.b-q)},
$S:1}
A.fF.prototype={
gf2(){return A.a([this.c],t.s)},
gcw(){return B.ce},
a7(a){if(a===B.G){this.a.aa()
return!0}return!1},
a9(a,b,c){if(c||b)return!1
switch(a){case 78:this.a.aa()
break
case 89:this.a.b6(this.d)
break}return!0}}
A.fN.prototype={
gaQ(){return 38},
gan(){return 19},
gcw(){var s=t.N
return A.A(["OK","Return to town"],s,s)},
lf(a,b,c){var s,r,q,p,o,n,m=this.d
c.a=5
s=new A.nY(c,this)
r=m.y.Q
q=this.c
s.$3("Gold",B.h,r.Q-q.Q)
s.$3("Experience",B.p,r.y-q.y);++c.a
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
n=r.ax.gjv()-q.ax.gjv()
m=m.x
m===$&&A.b()
m=m.b
q=A.M(m)
s.$4$total("Monsters",B.m,n,n+new A.aj(m,q.h("B(1)").a(new A.nZ()),q.h("aj<1>")).gI(0))},
gbm(){return!0},
a7(a){var s
if(a!==B.a6)return!1
s=this.d
s.y.Q.soT(Math.max(this.c.as,s.w))
this.a.aa()
return!0},
bt(){var s,r,q
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)if(s[q].bt())this.K()},
hK(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
a.k(1,1,"You survived depth "+this.d.w+"!",B.d)
a.k(1,3,"You gained:",B.f)
a.k(1,13,"You slayed:",B.f)
for(s=this.e,r=s.length,q=a.c.a,p=q-1,q-=4,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
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
A.nY.prototype={
$4$total(a,b,c,d){B.a.j(this.b.e,new A.lr(this.a.a++,a,c,b,d))},
$3(a,b,c){return this.$4$total(a,b,c,null)},
$S:122}
A.nZ.prototype={
$1(a){return!(t.f0.a(a) instanceof A.au)},
$S:123}
A.lr.prototype={
bt(){var s=this,r=s.f,q=s.c
if(r>=q)return!1
if(q>200){r+=$.m().pb(0,q/200)
s.f=r
if(r>q)s.f=q}else s.f=r+1
return!0}}
A.fQ.prototype={
gf2(){if(this.c)return B.ht
return B.hz},
gcw(){return B.ce},
a7(a){if(a===B.G){this.a.b6(!1)
return!0}return!1},
a9(a,b,c){if(c||b)return!1
switch(a){case 78:this.a.b6(!1)
break
case 89:this.a.b6(!0)
break}return!0},
bt(){return!1}}
A.kz.prototype={
gbm(){return!0},
gaQ(){return null},
gan(){return null},
gf2(){return null},
ag(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
A.bq(a,g.gcw(),null)
s=g.gf2()
r=s!=null
if(r){q=B.a.aD(s,0,new A.pM(),t.S)
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
a.ck(0,0,a.gaQ(),a.gan())
if(r){j=B.c.A(o-B.a.aD(s,0,new A.pN(),t.S),2)
for(r=s.length,i=1,h=0;h<s.length;s.length===r||(0,A.p)(s),++h){a.k(j,i,s[h],B.d);++i}}g.hK(a)},
hK(a){}}
A.pM.prototype={
$2(a,b){return Math.max(A.w(a),A.a3(b).length)},
$S:24}
A.pN.prototype={
$2(a,b){return Math.max(A.w(a),A.a3(b).length)},
$S:24}
A.hv.prototype={
gaQ(){return 42},
gan(){return 25},
gf2(){return B.hB},
gcw(){return B.hW},
a7(a){var s=this
switch(a){case B.ag:s.el(s.e-1)
return!0
case B.af:s.el(s.e+1)
return!0
case B.a0:s.el(s.e-10)
return!0
case B.a1:s.el(s.e+10)
return!0
case B.a6:s.a.b6(s.e)
return!0
case B.G:s.a.aa()
return!0}return!1},
hK(a){var s,r,q,p,o,n
for(s=1;s<=100;++s){r=s-1
q=B.c.ad(r,10)
p=B.c.A(r,10)*2
if(s===this.e){r=q*4
o=p+5
a.am(r,o,new A.W(9658,B.h,B.x))
a.am(r+4,o,new A.W(9668,B.h,B.x))
n=B.h}else n=B.C
a.k(q*4+1,p+5,A.P(s,!1,3),n)}},
el(a){if(a<1)return
if(a>100)return
this.e=a
this.K()}}
A.qB.prototype={
ac(a,b){B.a.hJ(this.b,new A.qL(b))
this.bv()},
p9(a){var s=this.b
B.a.i(s,B.a.oK(s,new A.qM(a)),a)
this.bv()},
mK(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=v.G
if(A.a3(A.O(A.O(c5.window).location).search)==="?clear"){c4.bv()
return}a9=A.rR(A.O(A.O(c5.window).localStorage).getItem("heroes"))
if(a9==null)return
c5=t.ea
for(b0=t._,b1=J.ao(b0.a(c5.a(B.aW.op(a9)).p(0,"heroes"))),b2=c4.b,b3=t.dZ,b4=t.g,b5=t.U,b6=t.mN;b1.q();){s=b1.gH()
try{r=c5.a(s)
q=A.a3(J.aY(r,"name"))
p=A.a3(s.p(0,"race"))
o=B.a.eV($.fs(),new A.qI(p))
n=null
if(J.aY(r,"class")==null)n=$.e8()[0]
else{m=A.a3(J.aY(r,"class"))
n=B.a.eV($.e8(),new A.qJ(m))}l=J.ax(J.aY(r,"death"),"permanent")
k=c4.dr(b0.a(J.aY(r,"inventory")))
j=A.bE(B.H,k)
i=new A.es(A.an(9,null,!1,b6))
for(b7=c4.dr(b0.a(J.aY(r,"equipment"))),b8=b7.length,b9=0;b9<b7.length;b7.length===b8||(0,A.p)(b7),++b9){h=b7[b9]
i.jN(h)}g=c4.dr(b0.a(J.aY(r,"home")))
f=A.bE(B.c3,g)
e=c4.dr(b0.a(J.aY(r,"crucible")))
d=A.bE(B.c2,e)
c=A.D(b4,b5)
if(r.al("shops")){b=c5.a(J.aY(r,"shops"))
$.hx.ae(0,new A.qK(c4,b,c))}j.bk()
f.bk()
d.bk()
a=A.w(J.aY(r,"experience"))
a0=c4.mO(b3.a(J.aY(r,"skills")))
a1=c4.mM(J.aY(r,"log"))
a2=c4.mN(c5.a(J.aY(r,"lore")))
a3=A.w(J.aY(r,"gold"))
c0=A.wa(J.aY(r,"maxDepth"))
a4=c0==null?0:c0
a5=c5.a(J.aY(r,"stats"))
b7=n
b8=A.w(J.aY(a5,"strength"))
c1=A.w(J.aY(a5,"agility"))
c2=A.w(J.aY(a5,"vitality"))
a6=A.vk(q,o,b7,l,j,i,f,d,c,a,a0,a1,a2,a3,a4,c1,A.w(J.aY(a5,"intellect")),b8,c2)
B.a.j(b2,a6)}catch(c3){a7=A.dn(c3)
a8=A.e3(c3)
A.th("Could not load hero. Data:")
A.th(B.aW.jM(s))
A.th("Error:\n"+A.J(a7)+"\n"+A.J(a8))}}},
dr(a){var s,r,q,p=A.a([],t.I)
for(s=J.ao(a),r=t.ea;s.q();){q=this.mL(r.a(s.gH()))
if(q!=null)B.a.j(p,q)}return p},
mL(a){var s,r,q
t.ea.a(a)
s=A.a3(a.p(0,"type"))
r=$.bh().c8(s)
if(r==null){A.uk("Couldn't find item type \""+A.J(a.p(0,"type"))+'", discarding item.')
return null}q=a.al("count")?A.w(a.p(0,"count")):1
return new A.L(r,this.fP(a.p(0,"prefix")),this.fP(a.p(0,"suffix")),this.fP(a.p(0,"intrinsic")),q)},
fP(a){var s,r,q,p,o,n,m,l="parameter"
A:{s=null
r=!1
q=null
p=!1
if(t.av.b(a)){o=a.p(0,"id")
if(o==null)n=a.al("id")
else n=!0
if(n){r=typeof o=="string"
if(r){s=a.p(0,l)
if(s==null)n=a.al(l)
else n=!0
if(n)p=A.fk(s)
q=o}}}if(p){m=A.w(r?s:a.p(0,l))
p=new A.cc(A.uZ(A.a3(q)),m)
break A}p=null
break A}return p},
mO(a){var s,r,q,p,o,n
t.dZ.a(a)
s=t.M
r=t.S
q=A.D(s,r)
if(a!=null)for(p=a.gb2(),p=p.gN(p);p.q();){o=p.gH()
n=$.uB().p(0,o)
if(n==null)A.a_(A.aC("Unknown skill '"+o+"'.",null))
q.i(0,n,A.w(a.p(0,o)))}return new A.hy(q,A.D(s,r))},
mM(a){var s,r,q,p=A.a([],t.kU)
if(t._.b(a))for(s=J.ao(a),r=t.ea;s.q();){q=r.a(s.gH())
B.a.j(p,new A.h9(B.a.eV(B.hy,new A.qC(q)),A.a3(q.p(0,"text")),A.w(q.p(0,"count"))))}return new A.k3(p)},
mN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=t.dZ
d.a(a)
s=t.P
r=t.S
q=A.D(s,r)
p=A.D(s,r)
s=t.q
o=A.D(s,r)
n=A.D(t.R,r)
m=A.be(s)
l=A.D(s,r)
k=d.a(a.p(0,"seen"))
if(k!=null)k.ae(0,new A.qD(e,q))
j=d.a(a.p(0,"slain"))
if(j!=null)j.ae(0,new A.qE(e,p))
i=d.a(a.p(0,"foundItems"))
if(i!=null)i.ae(0,new A.qF(e,o))
h=d.a(a.p(0,"foundAffixes"))
if(h!=null)h.ae(0,new A.qG(e,n))
g=d.a(a.p(0,"usedItems"))
if(g!=null)g.ae(0,new A.qH(e,l))
f=t.lH.a(a.p(0,"createdArtifacts"))
if(f!=null)for(d=J.ao(f);d.q();){s=A.a3(d.gH())
s=$.bh().c8(s)
s.toString
m.j(0,s)}return new A.h7(q,p,o,n,m,l)},
bv(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=A.a([],t.ic)
for(s=a3.b,r=s.length,q=t.N,p=t.K,o=t.S,n=t._,m=0;m<s.length;s.length===r||(0,A.p)(s),++m){l=s[m]
k=A.A(["strength",l.ay.b,"agility",l.ch.b,"vitality",l.CW.b,"intellect",l.cx.b],q,o)
j=l.d?"permanent":"dungeon"
i=a3.du(l.e)
h=a3.du(l.f)
g=a3.du(l.r)
f=a3.du(l.w)
e=A.D(q,n)
for(d=l.x,d=new A.dG(d,d.r,d.e,A.y(d).h("dG<1,2>"));d.q();){c=d.d
e.i(0,c.a.b,a3.du(c.b))}d=l.y
c=A.D(q,o)
for(b=l.z.a,a=new A.c1(b,b.r,b.e,A.y(b).h("c1<1>"));a.q();){a0=a.d
a1=a0.gM()
a0=b.p(0,a0)
c.i(0,a1,a0==null?0:a0)}a4.push(A.A(["name",l.a,"race",l.b.a,"stats",k,"class",l.c.a,"death",j,"inventory",i,"equipment",h,"home",g,"crucible",f,"shops",e,"experience",d,"skills",c,"log",a3.nj(l.at),"lore",a3.nk(l.ax),"gold",l.Q,"maxDepth",l.as],q,p))}a2=B.aW.jM(A.A(["heroes",a4],q,t.ew))
A.O(A.O(v.G.window).localStorage).setItem("heroes",a2)
A.uk("Saved.")},
nj(a){var s,r,q,p,o,n,m=[]
for(s=a.a,r=s.length,q=t.N,p=t.oH,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m.push(A.A(["type",n.a.b,"text",n.b,"count",n.c],q,p))}return m},
nk(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=t.oH,g=A.D(i,h),f=A.D(i,h),e=A.D(i,h),d=A.D(i,h),c=A.D(i,h),b=[]
for(s=$.ca().gc_(),r=A.y(s),s=new A.bl(J.ao(s.a),s.b,r.h("bl<1,2>")),q=a.b,p=a.a,r=r.y[1];s.q();){o=s.a
if(o==null)o=r.a(o)
n=p.p(0,o)
if(n==null)n=0
if(n!==0)g.i(0,o.a.a,n)
n=q.p(0,o)
if(n==null)n=0
if(n!==0)f.i(0,o.a.a,n)}for(s=$.bh().gc_(),r=A.y(s),s=new A.bl(J.ao(s.a),s.b,r.h("bl<1,2>")),q=a.f,p=a.c,r=r.y[1];s.q();){o=s.a
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
for(;k<s.length;s.length===r||(0,A.p)(s),++k){j=s[k]
m=q.p(0,j)
if(m==null)m=0
if(m!==0)d.i(0,j.a,m)}for(s=$.bh().gc_(),r=A.y(s),s=new A.bl(J.ao(s.a),s.b,r.h("bl<1,2>")),r=r.y[1],q=a.e;s.q();){p=s.a
if(p==null)p=r.a(p)
if(p.dx&&q.G(0,p))b.push(p.a.a6(1).a)}return A.A(["seen",g,"slain",f,"foundItems",e,"foundAffixes",d,"usedItems",c,"createdArtifacts",b],i,h)},
du(a){var s,r,q,p,o,n,m,l,k,j
t.C.a(a)
s=[]
for(r=a.gN(a),q=t.N,p=t.K,o=t.oH;r.q();){n=r.gH()
m=A.D(q,p)
m.i(0,"type",n.a.a.a6(1).a)
m.i(0,"count",n.f)
l=n.b
if(l!=null)m.i(0,"prefix",A.A(["id",l.a.a,"parameter",l.b],q,o))
k=n.c
if(k!=null)m.i(0,"suffix",A.A(["id",k.a.a,"parameter",k.b],q,o))
j=n.d
if(j!=null)m.i(0,"intrinsic",A.A(["id",j.a.a,"parameter",j.b],q,o))
s.push(m)}return s}}
A.qL.prototype={
$1(a){return t.er.a(a).a===this.a.a},
$S:20}
A.qM.prototype={
$1(a){return t.er.a(a).a===this.a.a},
$S:20}
A.qI.prototype={
$1(a){return t.ho.a(a).a===this.a},
$S:47}
A.qJ.prototype={
$1(a){return t.lJ.a(a).a===this.a},
$S:124}
A.qK.prototype={
$2(a,b){var s,r
A.a3(a)
t.g.a(b)
s=t.lH.a(this.b.p(0,a))
r=this.c
if(s!=null)r.i(0,b,A.bE(new A.c_(b.b,26),t.C.a(this.a.dr(s))))
else{A.uk("No data for "+a+", so regenerating.")
r.i(0,b,b.on())}},
$S:125}
A.qC.prototype={
$1(a){return t.aI.a(a).b===A.a3(this.a.p(0,"type"))},
$S:126}
A.qD.prototype={
$2(a,b){var s
A.a3(a)
s=$.ca().c8(a)
if(s!=null)this.b.i(0,s,A.w(b))},
$S:9}
A.qE.prototype={
$2(a,b){var s
A.a3(a)
s=$.ca().c8(a)
if(s!=null)this.b.i(0,s,A.w(b))},
$S:9}
A.qF.prototype={
$2(a,b){var s
A.a3(a)
s=$.bh().c8(a)
if(s!=null)this.b.i(0,s,A.w(b))},
$S:9}
A.qG.prototype={
$2(a,b){this.b.i(0,A.uZ(A.a3(a)),A.w(b))},
$S:9}
A.qH.prototype={
$2(a,b){var s
A.a3(a)
s=$.bh().c8(a)
if(s!=null)this.b.i(0,s,A.w(b))},
$S:9}
A.nG.prototype={
$2(a,b){var s,r
A.a3(a)
A.a3(b)
s=this.a
r=s.a
if(r>0)r=s.a=r+2
s.a=r+(a.length+b.length+3)},
$S:45}
A.nH.prototype={
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
r.k(s.b+=2,q,b,B.C)
s.b=s.b+b.length
s.c=!1},
$S:45}
A.l1.prototype={
gcj(){var s,r,q=this,p=t.N
p=A.D(p,p)
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
o.dt()
return!0}if(s&&c&&o.e.length!==0){r=o.z
q=o.e.length
o.z=B.c.ad(r+q-1,q)
o.dt()
return!0}p=70===a
if(p&&!c&&o.f.length!==0){o.Q=B.c.ad(o.Q+1,o.f.length)
o.dt()
return!0}if(p&&c&&o.f.length!==0){r=o.Q
q=o.f.length
o.Q=B.c.ad(r+q-1,q)
o.dt()
return!0}return!1},
ky(a,b){this.$ti.h("k<ap<1>>()").a(a)
this.j_(new A.qU(this,t.b8.a(b),a))},
kx(a){return this.ky(a,null)},
hj(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a2.c
if(!a1.a0(0,a0.r))a0.nf(a1)
for(s=a0.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.e
n=p.a
m=p.b.kh(p.f,n.length)
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
a2.k(B.a.gaC(s).e+B.a.gaC(s).f-k.length,0,k,B.l)}a0.iz(a2,1,B.l)
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
break A}if(e===0){c=B.C
break A}c=B.d
break A}b=l.e
A.u0(a2,d.a,l.b,c,l.f,b,i)}a=o&&h===n.length-1?B.l:B.u
a0.iz(a2,i+1,a)}if(r){s=n.length
A.vb(a2,m*2-1,a0.x,s,m,a1.a-1,2)}},
nf(a){var s,r,q,p,o,n,m,l,k,j=this
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
j.fO()},
dt(){this.j_(new A.qT(this))},
eF(a){var s=this
s.y=B.c.P(s.y+a,0,s.c.length-1)
s.fO()},
j_(a){var s,r,q,p,o,n=this
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
break}n.fO()},
fO(){var s,r=this,q=r.c,p=q.length
if(p!==0&&r.w>0){p=r.y=B.c.P(r.y,0,p-1)
p=B.c.P(r.x,p-r.w+1,p)
r.x=p
q=q.length
s=r.w
if(q>s)r.x=B.c.P(p,0,q-s)
else r.x=0}else r.x=r.y=0},
iz(a,b,c){var s,r,q,p,o
for(s=this.a,r=s.length,q=2,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
a.k(q,b,B.j.aH("\u2500",o.f),c)
q+=o.f+1}}}
A.qU.prototype={
$0(){var s,r,q=this,p=q.b
if(p!=null){s=q.a
r=s.a
B.a.aS(r)
B.a.U(r,p)
s.r=B.ak}p=q.a
s=p.b
B.a.aS(s)
B.a.U(s,q.c.$0())
p.dt()},
$S:0}
A.qT.prototype={
$0(){var s,r,q,p=this.a
if(p.e.length!==0)B.a.df(p.b,new A.qR(p))
s=p.c
B.a.aS(s)
r=p.b
if(p.f.length!==0){q=A.M(r)
B.a.U(s,new A.aj(r,q.h("B(1)").a(new A.qS(p)),q.h("aj<1>")))}else B.a.U(s,r)},
$S:0}
A.qR.prototype={
$2(a,b){var s,r,q,p=this.a,o=p.$ti,n=o.h("ap<1>")
n.a(a)
n.a(b)
n=p.e
p=p.z
if(!(p>=0&&p<n.length))return A.c(n,p)
p=o.h("C<e(1,1)>").a(n[p].b)
n=p.length
o=a.b
s=b.b
r=0
for(;r<p.length;p.length===n||(0,A.p)(p),++r){q=p[r].$2(o,s)
if(q!==0)return q}return 0},
$S(){return this.a.$ti.h("e(ap<1>,ap<1>)")}}
A.qS.prototype={
$1(a){var s,r=this.a,q=r.$ti
q.h("ap<1>").a(a)
s=r.f
r=r.Q
if(!(r>=0&&r<s.length))return A.c(s,r)
return q.h("B(1)").a(s[r].b).$1(a.b)},
$S(){return this.a.$ti.h("B(ap<1>)")}}
A.iA.prototype={
aJ(){return"Align."+this.b},
kh(a,b){var s
switch(this.a){case 0:s=0
break
case 1:s=B.c.A(a-b,2)
break
case 2:s=a-b
break
default:s=null}return s}}
A.aK.prototype={}
A.ap.prototype={}
A.a9.prototype={}
A.N.prototype={}
A.qY.prototype={
$2(a,b){return A.w(a)+t.fc.a(b).a.length},
$S:129}
A.bt.prototype={}
A.c3.prototype={}
A.hM.prototype={
gbm(){return!0},
a7(a){if(a===B.G){this.a.aa()
return!0}return!1},
a9(a,b,c){var s,r,q,p,o,n
if(c||b)return!1
for(s=this.b,r=s.length,q=0;q<r;++q){p=s[q].a
o=p[1]
n=p[3]
if(o===a){n.$0()
this.K()
return!0}}return!1},
dz(a,b){t.eE.a(a)
this.d=!0},
ag(a){var s,r,q,p,o,n,m,l,k=this,j=null
for(s=k.b,r=s.length,q=0,p=0;p<r;++p)q=Math.max(q,s[p].a[2].length)
A.bi(a,j,r+2,"Wizard Menu",k.d,40,j,j)
for(r=s.length,o=0,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){n=s[p].a
m=n[0]
l=n[2];++o
a.k(1,o,m,k.d?B.h:B.i)
a.k(2,o,")",k.d?B.l:B.i)
a.k(4,o,l,k.d?B.C:B.i)}if(k.d){s=t.N
A.bq(a,A.A(["`","Exit"],s,s),j)}},
mU(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.c,b=c.x
b===$&&A.b()
for(s=b.f,r=s.b,q=A.aa(r),p=s.a,o=r.b.a,n=p.length;q.q();){m=q.b
l=q.c
s.l(m,l)
k=l*o+m
if(!(k>=0&&k<n))return A.c(p,k)
j=p[k]
i=$.U()
if((j.a.e.a&i.a)!==0){s.l(m,l)
j.ff(!0)
continue}for(j=new A.d(m,l).gbP(),i=j.length,h=0;h<i;++h){g=j[h]
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
p[k].ff(!0)
break}}}for(s=b.b,r=s.length,c=c.y,q=c.Q.ax,c=c.as,h=0;h<s.length;s.length===r||(0,A.p)(s),++h){d=s[h]
if(d instanceof A.ac)if(c.j(0,d))q.hZ(d.Q)}b.hs(new A.ra(this))},
mt(){var s,r,q,p,o,n,m,l,k,j=this.c.x
j===$&&A.b()
for(s=j.f,r=s.b,q=A.aa(r),p=s.a,r=r.b.a,o=p.length;q.q();){n=q.b
m=q.c
s.l(n,m)
l=m*r+n
if(!(l>=0&&l<o))return A.c(p,l)
l=p[l]
k=$.U()
if((l.a.e.a&k.a)!==0){s.l(n,m)
l.f=B.c.P(l.f+255,0,192)}}j=j.gav()
j.f=!0
j.cE()},
m1(){this.d=!1
this.a.a4(new A.mA(this.c))},
nS(){this.d=!1
this.a.a4(new A.mB(this.c))},
mk(){var s=this.c.y,r=s.Q,q=1e4+B.c.A(r.y,4)
s.hY(q)
s.bq()
r.at.dK("Gave the hero "+A.P(q,!1,null)+" experience.")},
mG(){var s,r,q,p,o,n,m=this.c.x
m===$&&A.b()
s=m.b
s=A.a(s.slice(0),A.M(s))
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
if(!(p instanceof A.ac))continue
o=p.y
n=p.Q
m.dZ(o,n.Q,n.c)
m.kB(p)}},
lG(){var s,r,q,p=A.a([],t.b9),o=this.c.x
o===$&&A.b()
o.hs(new A.r9(p))
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.p)(p),++r){q=p[r]
o.e1(q.b,q.a)}},
mS(){var s,r=this.c,q=r.x
q===$&&A.b()
r=r.y
s=r.y
q.f.C(s.gm(),s.gn()).a=$.uM()
r.Q.at.dK("Placed stairs under hero.")},
nE(){var s=!$.tE
$.tE=s
this.c.y.Q.at.dK("Show all monsters = "+s)
this.a.aa()},
nC(){var s=!$.np
$.np=s
this.c.y.Q.at.dK("Show monster alertness = "+s)
this.a.aa()},
nG(){var s=!$.tF
$.tF=s
this.c.y.Q.at.dK("Show hero volume = "+s)
this.a.aa()}}
A.ra.prototype={
$2(a,b){this.a.c.y.Q.ax.d_(a)},
$S:21}
A.r9.prototype={
$2(a,b){B.a.j(this.a,new A.Q(b,a))},
$S:21}
A.cp.prototype={
gbm(){return!0},
a7(a){if(a===B.G){this.a.aa()
return!0}return!1},
a9(a,b,c){var s,r,q,p,o=this
if(b)return!1
switch(a){case 13:for(s=o.gew(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)o.h5(s[q])
o.a.aa()
return!0
case 8:s=o.c
r=s.length
if(r!==0){o.c=B.j.aI(s,0,r-1)
o.K()}return!0
case 32:o.c+=" "
o.K()
return!0
default:if(a>=65&&a<=90){o.c=o.c+A.qP(A.a([a],t.t)).toLowerCase()
o.K()
return!0}else if(a>=48&&a<=57){p=a-48
if(p<o.gew().length){s=o.gew()
if(!(p>=0&&p<s.length))return A.c(s,p)
o.h5(s[p])
o.a.aa()
return!0}}}return!1},
ag(a){var s,r,q,p,o,n,m=this,l=null,k=new A.aS(new A.d(43,38),40,0,a)
A.bi(k,l,l,m.gex(),!0,l,l,l)
k.k(m.gex().length+4,0,m.c,B.h)
k.da(m.gex().length+4+m.c.length,0," ",B.h,B.h)
for(s=m.gew(),r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
if(!B.j.G(m.es(o).toLowerCase(),m.c.toLowerCase()))continue
if(q<10){n=q+1
k.k(1,n,B.c.t(q),B.h)
k.k(2,n,")",B.i)}++q
k.am(3,q,m.iM(o))
k.k(5,q,m.es(o),B.C)
if(q>=36)break}s=t.N
A.bq(a,A.A(["0-9","Select","Enter","Select all","`","Exit"],s,s),l)},
gew(){var s=this.gii(),r=A.y(s),q=r.h("aj<k.E>")
s=A.a6(new A.aj(s,r.h("B(k.E)").a(new A.rG(this)),q),q.h("k.E"))
return s}}
A.rG.prototype={
$1(a){var s=this.a
return B.j.G(s.es(A.y(s).h("cp.T").a(a)).toLowerCase(),s.c.toLowerCase())},
$S(){return A.y(this.a).h("B(cp.T)")}}
A.mA.prototype={
gex(){return"Drop what?"},
gii(){return $.bh().gc_()},
es(a){return t.q.a(a).a.a6(1).a},
iM(a){return t.q.a(a).b},
h5(a){var s
t.q.a(a)
if(a.dx)this.b.y.Q.ax.e.j(0,a)
s=this.b
A.a7(a.a.a6(1).a,null,null).b0(s.y.Q.ax,s.w,new A.rM(this))}}
A.rM.prototype={
$1(a){var s=this.a.b,r=s.x
r===$&&A.b()
s=s.y
r.cR(a,s.y)
s.Q.at.jG("Dropped {1}.",a)},
$S:6}
A.mB.prototype={
gex(){return"Spawn what?"},
gii(){return $.ca().gc_()},
es(a){return t.P.a(a).a.a},
iM(a){return t.P.a(a).b},
h5(a){var s,r,q
t.P.a(a)
s=this.b
r=s.x
r===$&&A.b()
q=A.ck(r,s.y.y,$.aX(),null,null,null).jy(new A.rN(this))
if(q==null)return
r.dA(a.i6(q))}}
A.rN.prototype={
$1(a){return a.S(0,this.a.b.y.y).bg(0,6)},
$S:2}
A.nE.prototype={
i0(a,b,c){var s,r
if(a<0)return
s=this.a
r=s.b.b
if(a>=r.a)return
if(b<0)return
if(b>=r.b)return
r=this.b
if(!s.C(a,b).a0(0,c))r.aW(a,b,c)
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
gZ(a){return B.c.gZ(this.a)^B.c.gZ(this.b)^B.c.gZ(this.c)},
a0(a,b){if(b==null)return!1
return b instanceof A.E&&this.a===b.a&&this.b===b.b&&this.c===b.c},
aX(a,b,c){return new A.E(B.e.L(B.e.P(this.a+b.a*c,0,255)),B.e.L(B.e.P(this.b+b.b*c,0,255)),B.e.L(B.e.P(this.c+b.c*c,0,255)))},
bh(a,b){var s=1-b
return new A.E(B.e.L(this.a*s+a.a*b),B.e.L(this.b*s+a.b*b),B.e.L(this.c*s+a.c*b))}}
A.W.prototype={
gZ(a){return B.c.gZ(this.a)^this.b.gZ(0)^this.c.gZ(0)},
a0(a,b){if(b==null)return!1
if(b instanceof A.W)return this.a===b.a&&this.b.a0(0,b.b)&&this.c.a0(0,b.c)
return!1}}
A.jY.prototype={}
A.z.prototype={
a0(a,b){if(b==null)return!1
return b instanceof A.z&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gZ(a){return(B.c.gZ(this.a)^B.c5.gZ(this.b)^B.c5.gZ(this.c))>>>0},
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
A.kO.prototype={
gaQ(){return this.e.a.b.b.a},
gan(){return this.e.a.b.b.b},
lk(a,b,c,d,e,f){var s=t.gX
A.dU(this.r,"load",s.h("~(1)?").a(new A.pZ(this)),!1,s.c)},
am(a,b,c){this.e.i0(a,b,c)},
kD(){if(!this.y)return
this.e.ag(new A.q_(this))},
mm(a){var s,r,q,p=this.w,o=p.p(0,a)
if(o!=null)return o
s=A.vh()
r=this.r
s.width=A.w(r.width)
s.height=A.w(r.height)
q=A.bX(s.getContext("2d"))
if(q==null)q=A.O(q)
q.drawImage(r,0,0)
q.globalCompositeOperation="source-atop"
q.fillStyle="rgb("+a.a+", "+a.b+", "+a.c+")"
q.fillRect(0,0,A.w(r.width),A.w(r.height))
p.i(0,a,s)
return s}}
A.pZ.prototype={
$1(a){var s=this.a
s.y=!0
s.kD()},
$S:3}
A.q_.prototype={
$3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=c.a,g=B.hU.p(0,h)
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
i=r.mm(c.b)
n.imageSmoothingEnabled=!1
n.drawImage.apply(n,[i,s*q,p*o,q,o,l,k,j,m])},
$S:43}
A.di.prototype={
jP(a,b,c,d,e){var s,r,q,p,o=A.cB(32,B.aH,e==null?B.x:e)
for(s=b+d,r=a+c,q=b;q<s;++q)for(p=a;p<r;++p)this.am(p,q,o)},
ck(a,b,c,d){return this.jP(a,b,c,d,null)},
da(a,b,c,d,e){var s,r,q
if(d==null)d=B.aH
if(e==null)e=B.x
for(s=c.length,r=0;r<s;++r){q=a+r
if(q>=this.gaQ())break
this.am(q,b,new A.W(c.charCodeAt(r),d,e))}},
k(a,b,c,d){return this.da(a,b,c,d,null)},
pr(a,b,c){return this.da(a,b,c,null,null)},
b8(a,b,c,d){return new A.aS(new A.d(c,d),a,b,this)}}
A.hq.prototype={}
A.f7.prototype={
gjd(){var s,r=this,q=r.r
if(q===$){s=A.wf(r.gnx())
r.r!==$&&A.e7()
r.r=s
q=s}return q},
soI(a){var s,r,q,p,o=this
if(o.e!=null)return
s=v.G
r=A.bX(A.O(s.document).body)
r.toString
q=t.gX
p=q.h("~(1)?")
q=q.c
o.e=A.dU(r,"keydown",p.a(o.gmB()),!1,q)
s=A.bX(A.O(s.document).body)
s.toString
o.f=A.dU(s,"keyup",p.a(o.gmD()),!1,q)},
spg(a){var s=this
if(s.w)return
s.w=!0
s.y=null
A.w(A.O(v.G.window).requestAnimationFrame(s.gjd()))},
l3(a){var s,r,q=this,p=q.c.e.a.b.b,o=a.e.a.b.b,n=p.a!==o.a||p.b!==o.b
q.c=a
q.d=!0
if(n)for(p=q.b,o=p.length,s=a.e.a.b.b,r=0;r<p.length;p.length===o||(0,A.p)(p),++r)p[r].e2(s)},
a4(a){var s=this
s.$ti.h("t<1>").a(a)
a.jk(s)
B.a.j(s.b,a)
s.eA()},
b6(a){var s,r,q,p=this.b
if(0>=p.length)return A.c(p,-1)
s=p.pop()
s.a=null
r=p.length
q=r-1
if(!(q>=0))return A.c(p,q)
p[q].dz(s,a)
this.eA()},
aa(){return this.b6(null)},
bU(a){var s,r=this
r.$ti.h("t<1>").a(a)
s=r.b
if(0>=s.length)return A.c(s,-1)
s.pop().a=null
a.jk(r)
B.a.j(s,a)
r.eA()},
cE(){var s,r
for(s=this.b,r=0;r<s.length;++r)s[r].bt()
if(this.d)this.eA()},
mC(a){var s,r,q,p=A.w(a.keyCode)
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
r=this.a.a.p(0,new A.z(p,A.dY(a.shiftKey),A.dY(a.altKey)))
q=B.a.gd1(this.b)
if(r!=null){a.preventDefault()
if(q.a7(r))return}s=A.dY(a.shiftKey)
if(q.a9(p,A.dY(a.altKey),s))a.preventDefault()},
mE(a){var s,r,q=A.w(a.keyCode)
if(q===59)q=186
s=B.a.gd1(this.b)
r=A.dY(a.shiftKey)
if(s.f1(q,A.dY(a.altKey),r))a.preventDefault()},
ny(a){var s,r=this
A.dZ(a)
s=r.y
if(s!=null){if(a-s>16.666666666666668){r.cE()
r.y=a}}else{r.cE()
r.y=a}if(r.w)A.w(A.O(v.G.window).requestAnimationFrame(r.gjd()))},
eA(){var s,r,q=this.c
q.ck(0,0,q.gaQ(),q.gan())
for(s=this.b,r=s.length-1;r>=0;--r){if(!(r<s.length))return A.c(s,r)
if(!s[r].gbm())break}if(r<0)r=0
for(;r<s.length;++r)s[r].ag(q)
this.d=!1
q.kD()}}
A.t.prototype={
gbm(){return!1},
jk(a){A.y(this).h("f7<t.T>").a(a)
this.a=a
this.e2(a.c.e.a.b.b)},
K(){var s=this.a
if(s==null)return
s.d=!0},
a7(a){A.y(this).h("t.T").a(a)
return!1},
a9(a,b,c){return!1},
f1(a,b,c){return!1},
dz(a,b){A.y(this).h("t<t.T>").a(a)},
bt(){},
ag(a){},
e2(a){}}
A.a8.prototype={
le(a,b,c,d){var s,r,q,p,o,n,m,l=this
for(s=l.$ti.c,r=l.a,q=l.b.b.a,p=0*q,o=1;o<a;++o){n=s.a(c.$1(new A.d(o,0)))
l.l(o,0)
B.a.i(r,p+o,n)}for(m=1;m<b;++m)for(p=m*q,o=0;o<a;++o){n=s.a(c.$1(new A.d(o,m)))
l.l(o,m)
B.a.i(r,p+o,n)}},
C(a,b){var s,r
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
l(a,b){if(a<0||a>=this.b.b.a)throw A.n(A.hm(a,"x"))
if(b<0||b>=this.b.b.b)throw A.n(A.hm(b,"y"))}}
A.iV.prototype={
oP(a){var s=this.a,r=this.b
if(!A.u6(s,r,a))return!1
if(r>0&&A.u6(s,r-1,a))return!1
return!0},
gN(a){return A.vV(this,!1)}}
A.lC.prototype={
gH(){var s=this.b
return new A.d(s.b,s.c)},
q(){var s,r,q,p,o,n
for(s=this.b,r=this.a,q=r.a,p=r.b,o=this.c;s.q();){n=new A.d(s.b,s.c)
if(o){if(r.oP(n))return!0}else if(A.u6(q,p,n))return!0}return!1},
$ia5:1}
A.az.prototype={
aJ(){return"Direction."+this.b},
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
gbC(){switch(this.a){case 0:var s=B.r
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
gbR(){switch(this.a){case 0:var s=B.r
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
gcF(){switch(this.a){case 0:var s=B.r
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
A.lF.prototype={}
A.m5.prototype={
gH(){return this.a},
q(){var s,r,q=this,p=q.a.F(0,q.e)
q.a=p
s=q.b=q.b+q.d
r=q.c
if(s*2>=r){q.a=p.F(0,q.f)
q.b=s-r}return!0},
$ia5:1}
A.Y.prototype={
gbM(){var s=this.a.a
return Math.min(s,s+this.b.a)},
gbS(){var s=this.a.b
return Math.min(s,s+this.b.b)},
ge3(){var s=this.a.a
return Math.max(s,s+this.b.a)},
geL(){var s=this.a.b
return Math.max(s,s+this.b.b)},
ghe(){var s=this
return new A.d(B.c.A(s.gbM()+s.ge3(),2),B.c.A(s.gbS()+s.geL(),2))},
t(a){return"("+this.a.t(0)+")-("+this.b.t(0)+")"},
bL(a){var s=this.a,r=this.b,q=a*2
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
kI(){var s,r,q,p,o,n=this,m=n.b,l=m.a,k=l>1
if(k&&m.b>1){s=A.a([],t.l)
for(r=n.gbM(),k=n.a,q=k.a,l=q+l,p=Math.max(q,l),k=k.b,m=k+m.b;r<p;++r){B.a.j(s,new A.d(r,Math.min(k,m)))
B.a.j(s,new A.d(r,Math.max(k,m)-1))}for(o=n.gbS()+1,m=Math.max(k,m);o<m-1;++o){B.a.j(s,new A.d(Math.min(q,l),o))
B.a.j(s,new A.d(p-1,o))}return s}else if(k&&m.b===1)return new A.Y(new A.d(n.gbM(),n.gbS()),new A.d(l,1))
else{m=m.b
if(m>=1&&l===1)return new A.Y(new A.d(n.gbM(),n.gbS()),new A.d(1,m))}return B.hG}}
A.cK.prototype={
gH(){return new A.d(this.b,this.c)},
q(){var s=this,r=s.a
if(++s.b>=r.ge3()){s.b=r.a.a;++s.c}return s.c<r.geL()},
$ia5:1}
A.q6.prototype={
bp(a,b){if(b==null){b=a
a=0}return this.a.a_(b-a)+a},
T(a){return this.bp(a,null)},
aw(a,b){if(b==null){b=a
a=0}return this.a.a_(b+1-a)+a},
k_(a){return this.aw(a,null)},
aB(a,b){var s=this.a
if(b==null)return s.hz()*a
else return s.hz()*(b-a)+a},
aO(a){return this.aB(a,null)},
pb(a,b){var s=B.e.bK(b)
return this.aO(1)<b-s?s+1:s},
kF(a,b,c){var s,r
c.h("C<0>").a(b)
s=this.T(b.length)
if(!(s>=0&&s<b.length))return A.c(b,s)
r=b[s]
B.a.i(b,s,B.a.gd1(b))
B.a.kC(b)
return r},
cH(a,b){var s
if(b<0)throw A.n(A.aC('The argument "range" must be zero or greater.',null))
s=this.k_(b)
if(s<=this.k_(b))return a+s
else return a-b-1+s},
hM(a,b){var s=this.a
for(;;){if(!(s.a_(b)===0))break;++a}return a}}
A.lg.prototype={
gb3(){return Math.max(Math.abs(this.gm()),Math.abs(this.gn()))},
gaE(){var s=this
return s.gm()*s.gm()+s.gn()*s.gn()},
gI(a){return Math.sqrt(this.gaE())},
gkg(){var s,r,q,p=this,o=null,n=p.gm(),m=p.gn()
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
gbP(){var s,r=A.a([],t.l)
for(s=0;s<8;++s)r.push(this.F(0,B.a9[s]))
return r},
gdF(){var s,r=A.a([],t.l)
for(s=0;s<4;++s)r.push(this.F(0,B.at[s]))
return r},
aH(a,b){A.w(b)
return new A.d(this.gm()*b,this.gn()*b)},
F(a,b){var s,r=this
A:{if(t.u.b(b)){s=new A.d(r.gm()+b.gm(),r.gn()+b.gn())
break A}if(A.fk(b)){s=new A.d(r.gm()+b,r.gn()+b)
break A}s=A.a_(A.aC("Operand must be an int or Vec.",null))}return s},
S(a,b){var s,r,q,p
A:{s=this.gm()
r=b.gm()
q=this.gn()
p=b.gn()
break A}return new A.d(s-r,q-p)},
bg(a,b){var s
A:{if(t.u.b(b)){s=this.gaE()>b.gaE()
break A}if(typeof b=="number"){s=this.gaE()>b*b
break A}s=A.a_(A.aC("Operand must be a number or Vec.",null))}return s},
cK(a,b){var s
A:{s=this.gaE()>=b*b
break A}return s},
ea(a,b){var s
A:{if(t.u.b(b)){s=this.gaE()<b.gaE()
break A}if(typeof b=="number"){s=this.gaE()<b*b
break A}s=A.a_(A.aC("Operand must be a number or Vec.",null))}return s},
e9(a,b){var s
A:{s=this.gaE()<=b*b
break A}return s},
t(a){return""+this.gm()+", "+this.gn()}}
A.d.prototype={
a0(a,b){if(b==null)return!1
if(!t.u.b(b))return!1
return this.a===b.gm()&&this.b===b.gn()},
gZ(a){var s,r=this.a,q=r>=0?2*r:-2*r-1
r=this.b
s=r>=0?2*r:-2*r-1
r=q+s
return B.c.A(r*(r+1),2)+s},
gm(){return this.a},
gn(){return this.b}}
A.mw.prototype={}
A.tG.prototype={}
A.hS.prototype={}
A.lH.prototype={}
A.hT.prototype={$iyZ:1}
A.rk.prototype={
$1(a){return this.a.$1(A.O(a))},
$S:3}
A.l5.prototype={}
A.te.prototype={
$1(a){A.ua()},
$S:3}
A.rO.prototype={
$1(a){A.zM()},
$S:3}
A.rP.prototype={
$1(a){var s,r,q,p,o=$.nk
if(o==null)return
s=B.e.L(A.by(a.offsetX))
r=B.e.L(A.by(a.offsetY))
q=this.a
s=B.c.cb(s,q.z)
q=B.c.cb(r,q.Q)
r=o.w
r===$&&A.b()
r=r.r
p=new A.d(s,q).F(0,new A.d(r.gbM(),r.gbS()))
if(!r.G(0,p))return
s=o.b.x
s===$&&A.b()
s=s.w.C(p.a,p.b)
if(s instanceof A.ac){if($.fi.G(0,s))$.fi.ac(0,s)
else $.fi.j(0,s)
A.ua()}},
$S:3}
A.rQ.prototype={
$1(a){var s,r,q,p,o
for(s=this.a,r=v.G,q=0;q<$.fj.length;++q){p=$.fj[q]
if(p.a===s){$.bW.b=p
p=A.bX(A.O(r.document).querySelector("#game"))
p.toString
o=$.bW.b
if(o===$.bW)A.a_(A.dF(""))
p.append(o.b)}else p.b.remove()}A.wn()
A.ua()
A.O(A.O(r.window).localStorage).setItem("font",s)},
$S:3}
A.rU.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g=v.G,f=A.O(A.O(g.document).querySelectorAll(".debug"))
for(s=0;s<A.w(f.length);++s){r=A.bX(A.O(g.document).body)
r.toString
q=A.bX(f.item(s))
q.toString
A.O(r.removeChild(q))}p=$.nk
if(p==null)return
r=A.y($.fi)
$.fi.ma(r.h("B(1)").a(new A.rV()),!0)
for(r=A.u1($.fi,$.fi.r,r.c),q=r.$ti.c;r.q();){o=r.d
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
i=A.y4(o)
if(i==null)continue
h=A.O(A.O(g.document).createElement("pre"))
h.className="debug"
A.O(h.style).display="inline-block"
o=$.bW.b
if(o===$.bW)A.a_(A.dF(""))
n=o.d
m=o.b
l=B.c.L(A.w(m.offsetLeft))
o=o.e
m=B.c.L(A.w(m.offsetTop))
A.O(h.style).left=B.c.t((j.a+1)*n+l+4)
A.O(h.style).top=B.c.t(j.b*o+m+2)
h.textContent=i
A.O(A.bX(A.O(g.document).body).children)}}},
$S:0}
A.rV.prototype={
$1(a){return t.B.a(a).z<=0},
$S:132};(function aliases(){var s=J.dd.prototype
s.lc=s.t
s=A.fE.prototype
s.lb=s.V
s=A.h8.prototype
s.ia=s.bn
s=A.cD.prototype
s.ft=s.a9
s.fs=s.a7
s=A.dS.prototype
s.ej=s.a9
s.ld=s.ag
s=A.hW.prototype
s.ib=s.cr})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._static_1,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_2u,m=hunkHelpers.installInstanceTearOff,l=hunkHelpers._instance_0u
s(J,"zV","yo",133)
r(J.r.prototype,"gnT","j",128)
q(A,"A7","vD",1)
p(A,"Ax","za",22)
p(A,"Ay","zb",22)
p(A,"Az","zc",22)
q(A,"wv","Aq",0)
p(A,"AE","zI",33)
p(A,"wA","A9",5)
p(A,"AI","wl",5)
p(A,"AJ","wm",5)
p(A,"Z","zU",4)
p(A,"Be","zE",8)
p(A,"Bh","Af",8)
p(A,"Bf","zF",8)
p(A,"Bi","Ag",8)
p(A,"Bd","zD",8)
p(A,"Bg","Ae",8)
o(A.eY.prototype,"goD","oE","1(q)")
p(A,"uc","Ad",18)
p(A,"mC","Ac",4)
var k
n(k=A.eb.prototype,"gl_","l0",81)
n(k,"gl1","l2",82)
m(A.bQ.prototype,"gkK",0,1,null,["$2$wasUnequipped","$1"],["fe","c7"],85,0,0)
o(A.fR.prototype,"gmh","bI",34)
s(A,"AY","yj",17)
s(A,"wG","yg",17)
s(A,"AX","yi",17)
s(A,"ta","yh",17)
s(A,"B5","yB",25)
s(A,"wH","yA",25)
s(A,"wI","yC",25)
o(k=A.eC.prototype,"ghX","fh",38)
o(k,"gmx","my",10)
o(A.hw.prototype,"ghX","fh",38)
o(k=A.dS.prototype,"glz","lA",10)
o(k,"geu","bY",12)
l(A.hQ.prototype,"gj2","ey",0)
o(A.ia.prototype,"geu","bY",12)
o(A.i9.prototype,"geu","bY",12)
o(A.fa.prototype,"geu","bY",12)
l(k=A.hM.prototype,"gmT","mU",0)
l(k,"gms","mt",0)
l(k,"gm0","m1",0)
l(k,"gnR","nS",0)
l(k,"gmj","mk",0)
l(k,"gmF","mG",0)
l(k,"glF","lG",0)
l(k,"gmR","mS",0)
l(k,"gnD","nE",0)
l(k,"gnB","nC",0)
l(k,"gnF","nG",0)
o(k=A.f7.prototype,"gmB","mC",3)
o(k,"gmD","mE",3)
o(k,"gnx","ny",131)
q(A,"B3","wn",0)
p(A,"AZ","zG",10)
p(A,"B_","zH",12)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.a0,null)
q(A.a0,[A.tJ,J.jO,A.hu,J.aZ,A.al,A.X,A.qb,A.k,A.c2,A.bl,A.cR,A.hE,A.hG,A.bm,A.aA,A.dl,A.co,A.ek,A.hZ,A.d5,A.r4,A.pG,A.ib,A.aB,A.p6,A.c1,A.cF,A.dG,A.h_,A.i_,A.hN,A.l_,A.mr,A.ri,A.c4,A.lS,A.mv,A.rI,A.ag,A.cu,A.hV,A.bT,A.ls,A.hA,A.ii,A.f2,A.m6,A.cU,A.dW,A.j0,A.j2,A.rx,A.em,A.rj,A.kr,A.hz,A.rl,A.oa,A.aM,A.aP,A.ms,A.qA,A.dO,A.m0,A.mg,A.jz,A.a1,A.G,A.eW,A.fK,A.et,A.mc,A.fG,A.fC,A.rf,A.cd,A.rh,A.aH,A.hO,A.m8,A.bx,A.jq,A.rg,A.lx,A.ab,A.i5,A.lq,A.b7,A.ml,A.na,A.i4,A.bd,A.kt,A.fz,A.nq,A.j8,A.eD,A.p_,A.hh,A.pI,A.pR,A.hU,A.rD,A.dL,A.r3,A.qZ,A.fc,A.d2,A.jB,A.cx,A.dj,A.b5,A.d4,A.df,A.b6,A.ay,A.bY,A.dB,A.fM,A.jj,A.aI,A.jy,A.hI,A.k3,A.h9,A.eY,A.bn,A.bU,A.me,A.i7,A.pC,A.he,A.V,A.cO,A.cy,A.ec,A.cC,A.d9,A.h7,A.aD,A.cI,A.hy,A.d8,A.b8,A.cc,A.eb,A.c_,A.eB,A.dy,A.bF,A.r1,A.aL,A.kJ,A.dg,A.iQ,A.ar,A.ni,A.eI,A.cg,A.ob,A.mk,A.p3,A.eN,A.qk,A.qm,A.ad,A.bv,A.dR,A.dQ,A.t,A.fA,A.j4,A.fH,A.fL,A.cA,A.jF,A.jI,A.jQ,A.k6,A.ks,A.l4,A.la,A.f,A.l,A.jR,A.cV,A.el,A.pK,A.lr,A.qB,A.l1,A.aK,A.ap,A.a9,A.N,A.bt,A.c3,A.nE,A.E,A.W,A.jY,A.z,A.di,A.f7,A.lC,A.m5,A.cK,A.q6,A.lg,A.mw,A.tG,A.hT,A.l5])
q(J.jO,[J.fX,J.fZ,J.h1,J.h0,J.h2,J.dE,J.da])
q(J.h1,[J.dd,J.r,A.eJ,A.hc])
q(J.dd,[J.kw,J.dk,J.db])
r(J.jT,A.hu)
r(J.oW,J.r)
q(J.dE,[J.fY,J.jU])
q(A.al,[A.dc,A.cP,A.jV,A.ld,A.kQ,A.lJ,A.h4,A.iE,A.ce,A.hH,A.lc,A.dN,A.j1])
r(A.f6,A.X)
r(A.d6,A.f6)
q(A.k,[A.K,A.dI,A.aj,A.dP,A.hF,A.hL,A.hY,A.lp,A.mq,A.R,A.lh,A.lI,A.lZ,A.a8,A.iV,A.Y])
q(A.K,[A.aF,A.b0,A.cG,A.bj])
q(A.aF,[A.hD,A.aN,A.cL,A.h5,A.m2])
r(A.dA,A.dI)
r(A.fJ,A.dP)
q(A.co,[A.fd,A.fe])
r(A.Q,A.fd)
r(A.a2,A.fe)
q(A.ek,[A.bO,A.dD])
q(A.d5,[A.iX,A.iY,A.l3,A.t6,A.t8,A.rc,A.rb,A.rt,A.qN,A.rF,A.pj,A.oe,A.of,A.od,A.r7,A.n9,A.ny,A.nC,A.r8,A.o7,A.pQ,A.t3,A.nK,A.nO,A.nP,A.nL,A.nM,A.nS,A.nT,A.nN,A.nQ,A.nR,A.ov,A.oy,A.n3,A.n4,A.n1,A.n6,A.n0,A.n5,A.t2,A.tk,A.ti,A.tm,A.ql,A.nr,A.p2,A.p1,A.q7,A.r0,A.r_,A.nv,A.nw,A.nx,A.nI,A.nJ,A.ol,A.p8,A.pa,A.t5,A.pS,A.pT,A.pX,A.pY,A.pV,A.pW,A.pU,A.pF,A.pE,A.pl,A.qa,A.q9,A.om,A.qz,A.nX,A.nV,A.os,A.pv,A.pw,A.px,A.pu,A.nd,A.nb,A.nc,A.n7,A.n8,A.o8,A.p4,A.qv,A.qy,A.qx,A.o3,A.o_,A.o4,A.o0,A.o2,A.nD,A.ok,A.oi,A.qW,A.qX,A.oJ,A.oK,A.po,A.pr,A.ps,A.pp,A.pq,A.r2,A.og,A.pz,A.pA,A.pB,A.py,A.qe,A.qf,A.qd,A.qt,A.qr,A.nY,A.nZ,A.qL,A.qM,A.qI,A.qJ,A.qC,A.qS,A.rG,A.rM,A.rN,A.pZ,A.q_,A.rk,A.te,A.rO,A.rP,A.rQ,A.rV])
q(A.iX,[A.pO,A.rd,A.re,A.rJ,A.rm,A.rp,A.ro,A.rn,A.rs,A.rr,A.rq,A.qO,A.rE,A.rX,A.nz,A.oz,A.ow,A.oE,A.oF,A.oD,A.oA,A.oG,A.oB,A.ou,A.ox,A.oC,A.n2,A.t1,A.rZ,A.t_,A.td,A.tj,A.tc,A.tg,A.nu,A.ns,A.q3,A.q4,A.q1,A.q5,A.q2,A.q0,A.nl,A.nn,A.no,A.nm,A.p9,A.pe,A.pf,A.pc,A.pd,A.pg,A.qh,A.oR,A.qu,A.nU,A.oI,A.pn,A.qo,A.qp,A.qU,A.qT,A.rU])
r(A.hg,A.cP)
q(A.l3,[A.kZ,A.ee])
q(A.aB,[A.c0,A.m1])
q(A.iY,[A.oX,A.t7,A.ru,A.pk,A.ry,A.oc,A.ne,A.nf,A.nA,A.nB,A.rB,A.tl,A.nt,A.p0,A.rA,A.oq,A.op,A.oo,A.on,A.pb,A.qi,A.qj,A.nW,A.oT,A.oO,A.oN,A.oM,A.oU,A.oP,A.oQ,A.oS,A.o9,A.p5,A.qw,A.o1,A.oj,A.oH,A.pi,A.ph,A.qg,A.qs,A.qq,A.pM,A.pN,A.qK,A.qD,A.qE,A.qF,A.qG,A.qH,A.nG,A.nH,A.qR,A.qY,A.ra,A.r9])
r(A.h3,A.c0)
q(A.hc,[A.kf,A.eK])
q(A.eK,[A.i0,A.i2])
r(A.i1,A.i0)
r(A.ha,A.i1)
r(A.i3,A.i2)
r(A.hb,A.i3)
q(A.ha,[A.kg,A.kh])
q(A.hb,[A.ki,A.kj,A.kk,A.kl,A.km,A.hd,A.kn])
r(A.ic,A.lJ)
r(A.mi,A.ii)
r(A.i8,A.f2)
r(A.cT,A.i8)
r(A.jX,A.h4)
r(A.jW,A.j0)
q(A.j2,[A.oZ,A.oY])
r(A.rw,A.rx)
q(A.ce,[A.eV,A.jM])
q(A.a1,[A.lK,A.lN,A.kY,A.lt,A.lD,A.mo,A.mx])
r(A.jl,A.lK)
r(A.jp,A.lN)
q(A.G,[A.js,A.k8,A.lw,A.k4,A.fE,A.eo,A.er,A.ly,A.lz,A.lA,A.lQ,A.ma,A.mb,A.f8,A.eG,A.lO,A.ev,A.eu,A.ez,A.jH,A.kI,A.eA,A.eH,A.ka,A.eO,A.ky,A.iB,A.f_,A.eZ,A.kU,A.f5,A.m9,A.jt,A.iF,A.jP,A.ku,A.lj,A.kp,A.iW,A.kL,A.iT])
q(A.eW,[A.lk,A.iC,A.hl])
q(A.kY,[A.lv,A.lB,A.lE,A.lG,A.lL,A.lM,A.lR,A.lV,A.lW,A.lX,A.lY,A.m3,A.m4,A.m7,A.mf,A.mj,A.mn,A.mu,A.my,A.mz])
r(A.iJ,A.lv)
r(A.iS,A.lB)
r(A.j3,A.lE)
r(A.je,A.lG)
r(A.jm,A.lL)
r(A.jn,A.lM)
r(A.jv,A.lR)
r(A.jC,A.lV)
r(A.jD,A.lW)
r(A.jJ,A.lX)
r(A.jL,A.lY)
r(A.k_,A.m3)
r(A.k1,A.m4)
r(A.k9,A.m7)
r(A.kE,A.mf)
r(A.kR,A.mj)
r(A.kT,A.mn)
r(A.l6,A.mu)
r(A.ln,A.my)
r(A.lo,A.mz)
r(A.iH,A.lt)
q(A.k8,[A.lu,A.j_,A.mp])
r(A.iI,A.lu)
r(A.iZ,A.lD)
r(A.kW,A.mo)
r(A.kX,A.mp)
r(A.ll,A.mx)
r(A.iK,A.lw)
q(A.k4,[A.iO,A.l9])
q(A.fE,[A.ey,A.lP,A.eQ,A.ed,A.en,A.eX])
r(A.ew,A.lP)
q(A.rj,[A.ep,A.dJ,A.dh,A.fW,A.bH,A.qV,A.hs,A.ht,A.jG,A.bR,A.hf,A.dK,A.cl,A.f3,A.f9,A.iA,A.lF])
r(A.eg,A.ly)
r(A.eh,A.lz)
r(A.iR,A.lA)
r(A.ex,A.lQ)
r(A.eR,A.ma)
r(A.kx,A.mb)
r(A.jr,A.lO)
q(A.kI,[A.jK,A.mh])
q(A.et,[A.k7,A.kd,A.mm])
r(A.kH,A.mh)
q(A.m9,[A.eL,A.eM])
r(A.bS,A.mc)
q(A.bS,[A.jd,A.ju,A.jk,A.jo,A.kD,A.kS])
r(A.jw,A.fG)
q(A.rf,[A.nj,A.ot])
q(A.rh,[A.m_,A.mt])
q(A.rg,[A.o5,A.iP])
q(A.b7,[A.bp,A.kG,A.d7,A.jE,A.fT,A.bP,A.b1,A.bI,A.bu])
r(A.fB,A.kG)
r(A.ae,A.ml)
q(A.ae,[A.d3,A.iD,A.iL,A.iM,A.h8])
q(A.h8,[A.iG,A.iN,A.jZ,A.kV,A.l0,A.lm])
q(A.kt,[A.rz,A.pt,A.rH])
q(A.bd,[A.ei,A.ej,A.kP,A.eF,A.eP,A.f0])
q(A.kP,[A.eq,A.eE])
q(A.jP,[A.jb,A.jf,A.lb,A.le,A.l7])
q(A.dj,[A.bB,A.aG,A.L])
q(A.bY,[A.fS,A.fD,A.hj,A.dz,A.fP,A.hr,A.hi])
q(A.hI,[A.li,A.eT])
q(A.ec,[A.aR,A.kN,A.c5])
q(A.bB,[A.au,A.ac])
r(A.cm,A.b8)
q(A.cm,[A.hB,A.fx,A.hK,A.fV])
r(A.es,A.lI)
r(A.bQ,A.lZ)
q(A.eI,[A.cf,A.cv,A.ct])
q(A.t,[A.iz,A.fO,A.j9,A.fR,A.h6,A.l2,A.hJ,A.fU,A.cD,A.eC,A.dS,A.jA,A.k5,A.ko,A.kz,A.hM,A.cp])
q(A.j9,[A.fw,A.kq])
q(A.cD,[A.jh,A.jS,A.kb])
q(A.eC,[A.jc,A.jg,A.kv,A.md,A.hw,A.l8,A.lf])
q(A.cV,[A.hP,A.hR,A.i6,A.ff])
q(A.md,[A.kB,A.kC])
q(A.dS,[A.cS,A.hX,A.hQ,A.ia,A.fa])
q(A.cS,[A.hW,A.i9])
q(A.hW,[A.lU,A.lT])
q(A.el,[A.ke,A.f1])
q(A.pK,[A.oL,A.p7,A.qc,A.qn])
q(A.kz,[A.fF,A.fN,A.fQ,A.hv])
q(A.cp,[A.mA,A.mB])
q(A.di,[A.aS,A.hq])
r(A.kO,A.hq)
r(A.az,A.lF)
r(A.d,A.mw)
r(A.hS,A.hA)
r(A.lH,A.hS)
s(A.f6,A.dl)
s(A.i0,A.X)
s(A.i1,A.aA)
s(A.i2,A.X)
s(A.i3,A.aA)
s(A.lK,A.V)
s(A.lN,A.V)
s(A.lv,A.V)
s(A.lB,A.V)
s(A.lE,A.V)
s(A.lG,A.V)
s(A.lL,A.cO)
s(A.lM,A.V)
s(A.lR,A.V)
s(A.lV,A.V)
s(A.lW,A.V)
s(A.lX,A.cO)
s(A.lY,A.V)
s(A.m3,A.V)
s(A.m4,A.V)
s(A.m7,A.V)
s(A.mf,A.V)
s(A.mj,A.V)
s(A.mn,A.V)
s(A.mu,A.V)
s(A.my,A.V)
s(A.mz,A.V)
s(A.lt,A.cy)
s(A.lu,A.jB)
s(A.lD,A.cy)
s(A.mo,A.cy)
s(A.mp,A.jB)
s(A.mx,A.cO)
s(A.lw,A.fK)
s(A.lP,A.cx)
s(A.ly,A.cx)
s(A.lz,A.cx)
s(A.lA,A.cx)
s(A.lQ,A.cx)
s(A.ma,A.cx)
s(A.mb,A.cx)
s(A.lO,A.fK)
s(A.mh,A.fK)
s(A.mc,A.aD)
s(A.ml,A.aD)
s(A.lI,A.eB)
s(A.lZ,A.eB)
s(A.lF,A.lg)
s(A.mw,A.lg)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{e:"int",F:"double",ak:"num",q:"String",B:"bool",aP:"Null",C:"List",a0:"Object",bk:"Map",aE:"JSObject"},mangledNames:{},types:["~()","e()","B(d)","~(aE)","e(e)","q(q)","~(L)","F()","G(d)","~(q,@)","B(L)","~(d)","e?(L)","B(az)","e(e,cc)","E(E,E)","C<q>(e)","e(aL,aL)","F(e)","~(ae,e)","B(d9)","~(L,d)","~(~())","fc()","e(e,q)","e(ar,ar)","q(cj)","aP(e)","F(F,df)","F(F,cc)","~(ac)","B(b7)","~(cd)","@(@)","~(az)","e(ac)","B(aL)","B(ar)","e(L)","aP()","~(di)","e(e,e)","C<d>()","~(e,e,W)","aP(@)","~(q,q)","~(a0?,a0?)","B(cI)","F(F,d4)","f_()","q(d3)","B(B,e)","~(br,F)","B(F,F)","~(q,F)","aP(~())","eq()","ei()","ej()","eF()","f0()","eE()","eP()","~(ar,d)","d()","F(e,e)","@(q)","eM(d)","eL(d)","@(@,q)","eU<ak>()","~(e,e,e)","C<d>(e)","~(e,e)","B(F)","aP(d,b6,ak,e)","aP(d)","aP(a0,f4)","~(e)","aP(F)","f8(e)","~(dB,e(e))","~(cl,e(e))","e(e,L?)","B(q)","dy(L{wasUnequipped:B})","L(L)","eg(e)","eh(d,b6,ak,e)","ew(e)","ex(d,b6,ak,e)","eQ(e)","~(d,e)","dQ(d)","bQ()","~(d,bQ)","eR(d,b6,ak,e)","e(aM<e,a1>,aM<e,a1>)","~(q,e,e)","~(e,az,q)","ed(e)","~(dg,bQ)","en(e)","k<ap<L?>>()","eG(d,b6,ak,e)","k<ap<aL>>()","B(e)","er()","k<ap<ar>>()","eo()","eO()","eX()","eH()","q(cI)","q(cC)","ey()","e(ac,ac)","~(cm)","q(b6)","~(q,E[E?])","B(at)","f5()","~(q,E,e{total:e?})","B(bB)","B(cC)","~(q,dg)","B(bR)","ez()","~(a0?)","e(e,N)","eZ(d)","~(ak)","B(ac)","e(@,@)","ev()","eu(d)","eA()","~(az,B)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.Q&&a.b(c.a)&&b.b(c.b),"4;":a=>b=>b instanceof A.a2&&A.B6(a,b.a)}}
A.zv(v.typeUniverse,JSON.parse('{"kw":"dd","dk":"dd","db":"dd","Ca":"eJ","fX":{"B":[],"af":[]},"fZ":{"af":[]},"h1":{"aE":[]},"dd":{"aE":[]},"r":{"C":["1"],"K":["1"],"aE":[],"k":["1"]},"jT":{"hu":[]},"oW":{"r":["1"],"C":["1"],"K":["1"],"aE":[],"k":["1"]},"aZ":{"a5":["1"]},"dE":{"F":[],"ak":[],"as":["ak"]},"fY":{"F":[],"e":[],"ak":[],"as":["ak"],"af":[]},"jU":{"F":[],"ak":[],"as":["ak"],"af":[]},"da":{"q":[],"as":["q"],"pL":[],"af":[]},"dc":{"al":[]},"d6":{"X":["e"],"dl":["e"],"C":["e"],"K":["e"],"k":["e"],"X.E":"e","dl.E":"e"},"K":{"k":["1"]},"aF":{"K":["1"],"k":["1"]},"hD":{"aF":["1"],"K":["1"],"k":["1"],"aF.E":"1","k.E":"1"},"c2":{"a5":["1"]},"dI":{"k":["2"],"k.E":"2"},"dA":{"dI":["1","2"],"K":["2"],"k":["2"],"k.E":"2"},"bl":{"a5":["2"]},"aN":{"aF":["2"],"K":["2"],"k":["2"],"aF.E":"2","k.E":"2"},"aj":{"k":["1"],"k.E":"1"},"cR":{"a5":["1"]},"dP":{"k":["1"],"k.E":"1"},"fJ":{"dP":["1"],"K":["1"],"k":["1"],"k.E":"1"},"hE":{"a5":["1"]},"hF":{"k":["1"],"k.E":"1"},"hG":{"a5":["1"]},"hL":{"k":["1"],"k.E":"1"},"bm":{"a5":["1"]},"f6":{"X":["1"],"dl":["1"],"C":["1"],"K":["1"],"k":["1"]},"cL":{"aF":["1"],"K":["1"],"k":["1"],"aF.E":"1","k.E":"1"},"Q":{"fd":[],"co":[]},"a2":{"fe":[],"co":[]},"ek":{"bk":["1","2"]},"bO":{"ek":["1","2"],"bk":["1","2"]},"hY":{"k":["1"],"k.E":"1"},"hZ":{"a5":["1"]},"dD":{"ek":["1","2"],"bk":["1","2"]},"hg":{"cP":[],"al":[]},"jV":{"al":[]},"ld":{"al":[]},"ib":{"f4":[]},"d5":{"dC":[]},"iX":{"dC":[]},"iY":{"dC":[]},"l3":{"dC":[]},"kZ":{"dC":[]},"ee":{"dC":[]},"kQ":{"al":[]},"c0":{"aB":["1","2"],"tL":["1","2"],"bk":["1","2"],"aB.K":"1","aB.V":"2"},"b0":{"K":["1"],"k":["1"],"k.E":"1"},"c1":{"a5":["1"]},"cG":{"K":["1"],"k":["1"],"k.E":"1"},"cF":{"a5":["1"]},"bj":{"K":["aM<1,2>"],"k":["aM<1,2>"],"k.E":"aM<1,2>"},"dG":{"a5":["aM<1,2>"]},"h3":{"c0":["1","2"],"aB":["1","2"],"tL":["1","2"],"bk":["1","2"],"aB.K":"1","aB.V":"2"},"fd":{"co":[]},"fe":{"co":[]},"h_":{"yT":[],"pL":[]},"i_":{"hp":[],"cj":[]},"lp":{"k":["hp"],"k.E":"hp"},"hN":{"a5":["hp"]},"l_":{"cj":[]},"mq":{"k":["cj"],"k.E":"cj"},"mr":{"a5":["cj"]},"eJ":{"aE":[],"af":[]},"hc":{"aE":[]},"kf":{"aE":[],"af":[]},"eK":{"bG":["1"],"aE":[]},"ha":{"X":["F"],"C":["F"],"bG":["F"],"K":["F"],"aE":[],"k":["F"],"aA":["F"]},"hb":{"X":["e"],"C":["e"],"bG":["e"],"K":["e"],"aE":[],"k":["e"],"aA":["e"]},"kg":{"X":["F"],"C":["F"],"bG":["F"],"K":["F"],"aE":[],"k":["F"],"aA":["F"],"af":[],"X.E":"F","aA.E":"F"},"kh":{"X":["F"],"C":["F"],"bG":["F"],"K":["F"],"aE":[],"k":["F"],"aA":["F"],"af":[],"X.E":"F","aA.E":"F"},"ki":{"X":["e"],"C":["e"],"bG":["e"],"K":["e"],"aE":[],"k":["e"],"aA":["e"],"af":[],"X.E":"e","aA.E":"e"},"kj":{"X":["e"],"C":["e"],"bG":["e"],"K":["e"],"aE":[],"k":["e"],"aA":["e"],"af":[],"X.E":"e","aA.E":"e"},"kk":{"X":["e"],"C":["e"],"bG":["e"],"K":["e"],"aE":[],"k":["e"],"aA":["e"],"af":[],"X.E":"e","aA.E":"e"},"kl":{"X":["e"],"C":["e"],"bG":["e"],"K":["e"],"aE":[],"k":["e"],"aA":["e"],"af":[],"X.E":"e","aA.E":"e"},"km":{"X":["e"],"C":["e"],"bG":["e"],"K":["e"],"aE":[],"k":["e"],"aA":["e"],"af":[],"X.E":"e","aA.E":"e"},"hd":{"X":["e"],"C":["e"],"bG":["e"],"K":["e"],"aE":[],"k":["e"],"aA":["e"],"af":[],"X.E":"e","aA.E":"e"},"kn":{"X":["e"],"C":["e"],"bG":["e"],"K":["e"],"aE":[],"k":["e"],"aA":["e"],"af":[],"X.E":"e","aA.E":"e"},"lJ":{"al":[]},"ic":{"cP":[],"al":[]},"ag":{"a5":["1"]},"R":{"k":["1"],"k.E":"1"},"cu":{"al":[]},"bT":{"jx":["1"]},"ii":{"vU":[]},"mi":{"ii":[],"vU":[]},"eU":{"K":["1"],"k":["1"]},"cT":{"f2":["1"],"tX":["1"],"K":["1"],"k":["1"]},"cU":{"a5":["1"]},"X":{"C":["1"],"K":["1"],"k":["1"]},"aB":{"bk":["1","2"]},"h5":{"eU":["1"],"aF":["1"],"K":["1"],"k":["1"],"aF.E":"1","k.E":"1"},"dW":{"a5":["1"]},"f2":{"tX":["1"],"K":["1"],"k":["1"]},"i8":{"f2":["1"],"tX":["1"],"K":["1"],"k":["1"]},"m1":{"aB":["q","@"],"bk":["q","@"],"aB.K":"q","aB.V":"@"},"m2":{"aF":["q"],"K":["q"],"k":["q"],"aF.E":"q","k.E":"q"},"h4":{"al":[]},"jX":{"al":[]},"jW":{"j0":["a0?","q"]},"em":{"as":["em"]},"F":{"ak":[],"as":["ak"]},"e":{"ak":[],"as":["ak"]},"C":{"K":["1"],"k":["1"]},"ak":{"as":["ak"]},"hp":{"cj":[]},"q":{"as":["q"],"pL":[]},"iE":{"al":[]},"cP":{"al":[]},"ce":{"al":[]},"eV":{"al":[]},"jM":{"al":[]},"hH":{"al":[]},"lc":{"al":[]},"dN":{"al":[]},"j1":{"al":[]},"kr":{"al":[]},"hz":{"al":[]},"ms":{"f4":[]},"dO":{"z_":[]},"m0":{"tR":[]},"mg":{"tR":[]},"jz":{"y2":[]},"jl":{"V":[],"a1":[]},"jp":{"V":[],"a1":[]},"js":{"G":[]},"k8":{"G":[]},"lk":{"eW":[]},"iJ":{"V":[],"a1":[]},"iS":{"V":[],"a1":[]},"j3":{"V":[],"a1":[]},"je":{"V":[],"a1":[]},"jm":{"cO":[],"a1":[]},"jn":{"V":[],"a1":[]},"jv":{"V":[],"a1":[]},"jC":{"V":[],"a1":[]},"jD":{"V":[],"a1":[]},"jJ":{"cO":[],"a1":[]},"jL":{"V":[],"a1":[]},"k_":{"V":[],"a1":[]},"k1":{"V":[],"a1":[]},"k9":{"V":[],"a1":[]},"kE":{"V":[],"a1":[]},"kR":{"V":[],"a1":[]},"kT":{"V":[],"a1":[]},"kY":{"a1":[]},"iC":{"eW":[]},"l6":{"V":[],"a1":[]},"ln":{"V":[],"a1":[]},"lo":{"V":[],"a1":[]},"iH":{"cy":[],"a1":[]},"iI":{"G":[]},"iZ":{"cy":[],"a1":[]},"j_":{"G":[]},"kW":{"cy":[],"a1":[]},"kX":{"G":[]},"ll":{"cO":[],"a1":[]},"iK":{"G":[]},"iO":{"G":[]},"ey":{"G":[]},"ew":{"G":[]},"eQ":{"G":[]},"ed":{"G":[]},"en":{"G":[]},"eX":{"G":[]},"fE":{"G":[]},"eo":{"G":[]},"er":{"G":[]},"eg":{"G":[]},"eh":{"G":[]},"ex":{"G":[]},"eR":{"G":[]},"f8":{"G":[]},"eG":{"G":[]},"iR":{"G":[]},"kx":{"G":[]},"ev":{"G":[]},"eu":{"G":[]},"jr":{"G":[]},"ez":{"G":[]},"jH":{"G":[]},"eA":{"G":[]},"jK":{"G":[]},"eH":{"G":[]},"k7":{"et":[]},"ka":{"G":[]},"eO":{"G":[]},"ky":{"G":[]},"iB":{"G":[]},"f_":{"G":[]},"eZ":{"G":[]},"kI":{"G":[]},"kH":{"G":[]},"kU":{"G":[]},"f5":{"G":[]},"eL":{"G":[]},"eM":{"G":[]},"m9":{"G":[]},"jd":{"bS":[],"aD":[]},"ju":{"bS":[],"aD":[]},"jw":{"fG":[]},"m_":{"br":[]},"mt":{"br":[]},"aH":{"br":[]},"hO":{"br":[]},"m8":{"br":[]},"bx":{"br":[]},"lx":{"dM":[]},"ab":{"dM":[]},"i5":{"dM":[]},"lq":{"dM":[]},"bp":{"b7":[]},"fB":{"b7":[]},"d7":{"b7":[]},"jE":{"b7":[]},"fT":{"b7":[]},"bP":{"b7":[]},"b1":{"b7":[]},"bI":{"b7":[]},"bu":{"b7":[]},"jk":{"bS":[],"aD":[]},"jo":{"bS":[],"aD":[]},"kD":{"bS":[],"aD":[]},"kS":{"bS":[],"aD":[]},"d3":{"ae":[],"aD":[],"as":["ae"]},"iD":{"ae":[],"aD":[],"as":["ae"]},"iL":{"ae":[],"aD":[],"as":["ae"]},"iM":{"ae":[],"aD":[],"as":["ae"]},"h8":{"ae":[],"aD":[],"as":["ae"]},"iG":{"ae":[],"aD":[],"as":["ae"]},"iN":{"ae":[],"aD":[],"as":["ae"]},"jZ":{"ae":[],"aD":[],"as":["ae"]},"kV":{"ae":[],"aD":[],"as":["ae"]},"l0":{"ae":[],"aD":[],"as":["ae"]},"lm":{"ae":[],"aD":[],"as":["ae"]},"ei":{"bd":[]},"ej":{"bd":[]},"eq":{"bd":[]},"eE":{"bd":[]},"eF":{"bd":[]},"eP":{"bd":[]},"f0":{"bd":[]},"kP":{"bd":[]},"jt":{"G":[]},"iF":{"G":[]},"jP":{"G":[]},"ku":{"G":[]},"jb":{"G":[]},"jf":{"G":[]},"lb":{"G":[]},"le":{"G":[]},"k4":{"G":[]},"l7":{"G":[]},"l9":{"G":[]},"lj":{"G":[]},"kp":{"G":[]},"iW":{"G":[]},"kL":{"G":[]},"bB":{"dj":[]},"hr":{"bY":[]},"fS":{"bY":[]},"fD":{"bY":[]},"hj":{"bY":[]},"dz":{"bY":[]},"fP":{"bY":[]},"hi":{"bY":[]},"li":{"hI":[]},"eT":{"hI":[]},"aG":{"dj":[]},"lh":{"k":["d"],"k.E":"d"},"aR":{"ec":[]},"kN":{"ec":[]},"c5":{"ec":[]},"au":{"bB":[],"dj":[]},"bS":{"aD":[]},"hl":{"eW":[]},"ae":{"aD":[],"as":["ae"]},"cm":{"b8":["e"]},"b8":{"b8.T":"1"},"hB":{"cm":[],"b8":["e"],"b8.T":"e"},"fx":{"cm":[],"b8":["e"],"b8.T":"e"},"hK":{"cm":[],"b8":["e"],"b8.T":"e"},"fV":{"cm":[],"b8":["e"],"b8.T":"e"},"es":{"eB":[],"k":["L"],"k.E":"L"},"bQ":{"eB":[],"k":["L"],"k.E":"L"},"L":{"dj":[],"as":["L"]},"ac":{"bB":[],"dj":[]},"iT":{"G":[]},"cf":{"eI":[]},"cv":{"eI":[]},"ct":{"eI":[]},"kG":{"b7":[]},"kd":{"et":[]},"mm":{"et":[]},"iz":{"t":["l"],"t.T":"l"},"fA":{"at":[]},"j4":{"at":[]},"fH":{"at":[]},"fL":{"at":[]},"cA":{"at":[]},"jF":{"at":[]},"jI":{"at":[]},"jQ":{"at":[]},"k6":{"at":[]},"ks":{"at":[]},"l4":{"at":[]},"la":{"at":[]},"fO":{"t":["l"],"t.T":"l"},"j9":{"t":["l"]},"fw":{"t":["l"],"t.T":"l"},"kq":{"t":["l"],"t.T":"l"},"fR":{"t":["l"],"t.T":"l"},"h6":{"t":["l"],"t.T":"l"},"l2":{"t":["l"],"t.T":"l"},"hJ":{"t":["l"],"t.T":"l"},"fU":{"t":["l"],"t.T":"l"},"jh":{"cD":[],"t":["l"],"t.T":"l"},"cD":{"t":["l"]},"jS":{"cD":[],"t":["l"],"t.T":"l"},"kb":{"cD":[],"t":["l"],"t.T":"l"},"jc":{"t":["l"],"t.T":"l"},"jg":{"t":["l"],"t.T":"l"},"eC":{"t":["l"]},"hP":{"cV":[]},"hR":{"cV":[]},"i6":{"cV":[]},"ff":{"cV":[]},"kv":{"t":["l"],"t.T":"l"},"md":{"t":["l"]},"kB":{"t":["l"],"t.T":"l"},"kC":{"t":["l"],"t.T":"l"},"hw":{"t":["l"],"t.T":"l"},"l8":{"t":["l"],"t.T":"l"},"dS":{"t":["l"]},"cS":{"t":["l"]},"hX":{"t":["l"],"t.T":"l"},"hW":{"cS":[],"t":["l"]},"lU":{"cS":[],"t":["l"],"t.T":"l"},"lT":{"cS":[],"t":["l"],"t.T":"l"},"hQ":{"t":["l"],"t.T":"l"},"ia":{"t":["l"],"t.T":"l"},"i9":{"cS":[],"t":["l"],"t.T":"l"},"fa":{"t":["l"],"t.T":"l"},"lf":{"t":["l"],"t.T":"l"},"jA":{"t":["l"],"t.T":"l"},"k5":{"t":["l"],"t.T":"l"},"ko":{"t":["l"],"t.T":"l"},"ke":{"el":[]},"f1":{"el":[]},"fF":{"t":["l"],"t.T":"l"},"fN":{"t":["l"],"t.T":"l"},"fQ":{"t":["l"],"t.T":"l"},"kz":{"t":["l"]},"hv":{"t":["l"],"t.T":"l"},"hM":{"t":["l"],"t.T":"l"},"cp":{"t":["l"]},"mA":{"cp":["aL"],"t":["l"],"t.T":"l","cp.T":"aL"},"mB":{"cp":["ar"],"t":["l"],"t.T":"l","cp.T":"ar"},"aS":{"di":[]},"kO":{"hq":[],"di":[]},"hq":{"di":[]},"a8":{"k":["1"],"k.E":"1"},"iV":{"k":["d"],"k.E":"d"},"lC":{"a5":["d"]},"az":{"d":[]},"m5":{"a5":["d"]},"Y":{"k":["d"],"k.E":"d"},"cK":{"a5":["d"]},"hS":{"hA":["1"]},"lH":{"hS":["1"],"hA":["1"]},"hT":{"yZ":["1"]},"yf":{"C":["e"],"K":["e"],"k":["e"]},"z7":{"C":["e"],"K":["e"],"k":["e"]},"z6":{"C":["e"],"K":["e"],"k":["e"]},"yd":{"C":["e"],"K":["e"],"k":["e"]},"z4":{"C":["e"],"K":["e"],"k":["e"]},"ye":{"C":["e"],"K":["e"],"k":["e"]},"z5":{"C":["e"],"K":["e"],"k":["e"]},"yb":{"C":["F"],"K":["F"],"k":["F"]},"yc":{"C":["F"],"K":["F"],"k":["F"]}}'))
A.zu(v.typeUniverse,JSON.parse('{"K":1,"f6":1,"eK":1,"i8":1,"j2":2,"kt":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",g:"max must be in range 0 < max \u2264 2^32, was ",f:"{1} [don't|doesn't] have room for {the 2} and {2 he} drops to the ground."}
var t=(function rtii(){var s=A.av
return{fD:s("G"),lz:s("V"),fw:s("d2"),Y:s("G()"),bj:s("G(d)"),f0:s("bB"),L:s("cc"),R:s("eb"),dx:s("d3"),g_:s("bd"),k5:s("a8<fC>"),bG:s("a8<W>"),o:s("a8<dL>"),lr:s("a8<dQ>"),b:s("a8<B>"),z:s("a8<e>"),hE:s("a8<bB?>"),gy:s("a8<bd?>"),cY:s("a8<W?>"),eJ:s("a8<B?>"),aY:s("aZ<d>"),n:s("cu"),fV:s("d4"),P:s("ar"),nA:s("cg<eN>"),r:s("cg<d>"),cI:s("a9"),oC:s("fC"),gS:s("d6"),aZ:s("E"),jF:s("aK"),bP:s("as<@>"),p1:s("bO<q,q>"),cs:s("em"),j:s("az"),ln:s("cy"),iZ:s("br"),ox:s("at"),gt:s("K<@>"),h:s("dB"),fz:s("al"),gY:s("dC"),hB:s("jy"),v:s("W"),V:s("au"),lJ:s("cC"),er:s("d9"),Z:s("b6"),fb:s("l"),U:s("bQ"),W:s("L"),q:s("aL"),C:s("k<L>"),bq:s("k<q>"),cX:s("k<d>"),e7:s("k<@>"),eI:s("r<a1>"),iA:s("r<G>"),p5:s("r<bB>"),o_:s("r<cc>"),c4:s("r<fz>"),dr:s("r<bd>"),da:s("r<b5>"),kt:s("r<d4>"),fO:s("r<ar>"),bZ:s("r<a9>"),bk:s("r<E>"),D:s("r<aK>"),c8:s("r<bY>"),eR:s("r<el>"),x:s("r<ay>"),oO:s("r<ep>"),T:s("r<az>"),f8:s("r<br>"),pl:s("r<at>"),bI:s("r<jj>"),mO:s("r<W>"),fJ:s("r<f>"),di:s("r<d9>"),o0:s("r<b6>"),f_:s("r<cD>"),I:s("r<L>"),hm:s("r<c_>"),fv:s("r<eD>"),G:s("r<C<d>>"),ic:s("r<bk<q,a0>>"),kU:s("r<h9>"),lE:s("r<ac>"),a_:s("r<b7>"),hL:s("r<bS>"),dF:s("r<+(q,e)>"),b9:s("r<+(d,L)>"),d3:s("r<+(L?,b5)>"),bx:s("r<+(q,e,q,~())>"),hY:s("r<bH>"),gp:s("r<c3<ar>>"),aG:s("r<c3<aL>>"),d4:s("r<bt<ar>>"),mQ:s("r<bt<aL>>"),iO:s("r<df>"),jp:s("r<t<l>>"),hC:s("r<ae>"),aC:s("r<dM>"),s:s("r<q>"),H:s("r<N>"),J:s("r<dR>"),l:s("r<d>"),cz:s("r<lr>"),lv:s("r<hU>"),hw:s("r<i4>"),n9:s("r<cV>"),mS:s("r<mk>"),gk:s("r<F>"),dG:s("r<@>"),t:s("r<e>"),nK:s("r<eU<eN>?>"),c:s("r<eU<d>?>"),it:s("r<e(ar,ar)>"),m2:s("r<e(aL,aL)>"),w:s("fZ"),E:s("aE"),dY:s("db"),dX:s("bG<@>"),d2:s("eD"),hl:s("jY<l>"),hA:s("C<bd>"),aH:s("C<b5>"),ev:s("C<E>"),hy:s("C<ay>"),jP:s("C<ep>"),du:s("C<az>"),af:s("C<W>"),aa:s("C<L>"),eF:s("C<eD>"),ew:s("C<bk<q,a0>>"),kz:s("C<b7>"),ez:s("C<a0>"),m1:s("C<bS>"),p0:s("C<+(E,E)>"),ig:s("C<+(q,e)>"),m:s("C<q>"),nB:s("C<q>(e)"),p:s("C<dR>"),A:s("C<d>"),pa:s("C<i4>"),la:s("C<cV>"),_:s("C<@>"),jX:s("C<d?>"),dW:s("C<e?>"),aI:s("bR"),cB:s("aM<e,a1>"),ea:s("bk<q,@>"),av:s("bk<@,@>"),de:s("bk<e,a1>"),gQ:s("aN<q,q>"),B:s("ac"),d0:s("b7"),d:s("aP"),K:s("a0"),mh:s("b8<F>"),jo:s("eU<ak>"),ho:s("cI"),lZ:s("Cn"),aK:s("+()"),lu:s("hp"),pj:s("bH"),mF:s("hr"),b_:s("eY<eb>"),gf:s("dL"),hb:s("c3<ar>"),i0:s("c3<aL>"),o9:s("bt<ar>"),o5:s("bt<aL>"),cv:s("ap<ar>"),bB:s("ap<aL>"),ax:s("ap<L?>"),jK:s("df"),eE:s("t<l>"),g:s("dg"),M:s("ae"),gl:s("f4"),X:s("cl"),N:s("q"),po:s("q(cj)"),gL:s("q(q)"),bW:s("cO"),fc:s("N"),jh:s("dQ"),ns:s("dR"),aJ:s("af"),do:s("cP"),cx:s("dk"),iR:s("f7<l>"),u:s("d"),e0:s("aj<az>"),bC:s("hL<L>"),k:s("bm<L>"),gX:s("lH<aE>"),j_:s("bT<@>"),h0:s("bT<e>"),ak:s("cS"),fC:s("z"),nP:s("me"),oc:s("R<d2>"),kX:s("R<aD>"),mY:s("R<a9>"),oP:s("R<aK>"),cn:s("R<ay>"),kF:s("R<ap<ar>>"),jE:s("R<ap<aL>>"),d8:s("R<ap<L?>>"),e:s("R<q>"),e6:s("R<d>"),y:s("B"),ca:s("B(az)"),iW:s("B(a0)"),cm:s("B(d)"),i:s("F"),oF:s("F(e)"),oH:s("@"),df:s("@()"),mq:s("@(a0)"),ng:s("@(a0,f4)"),jJ:s("@(d)"),S:s("e"),Q:s("e(e)"),e9:s("bB?"),aT:s("bd?"),gK:s("jx<aP>?"),n3:s("W?"),mN:s("L?"),mU:s("aE?"),b8:s("C<aK>?"),fm:s("C<q>?"),lH:s("C<@>?"),dZ:s("bk<q,@>?"),aL:s("ac?"),iD:s("a0?"),jv:s("q?"),jt:s("q(cj)?"),n7:s("d?"),F:s("hV<@,@>?"),nF:s("m6?"),fU:s("B?"),dz:s("F?"),hM:s("F(e)?"),aV:s("e?"),lg:s("e(e)?"),ae:s("ak?"),c3:s("~()?"),lT:s("~(cd)?"),cZ:s("ak"),ef:s("~"),O:s("~()"),kc:s("~(cd)"),or:s("~(ar)"),f:s("~(L)"),mH:s("~(L,d)"),lL:s("~(ac)"),lc:s("~(q,@)"),a:s("~(e,e,W)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.hl=J.jO.prototype
B.a=J.r.prototype
B.c5=J.fX.prototype
B.c=J.fY.prototype
B.e=J.dE.prototype
B.j=J.da.prototype
B.ho=J.db.prototype
B.hp=J.h1.prototype
B.cj=J.kw.prototype
B.bh=J.dk.prototype
B.bj=new A.d2(null,!1,!0)
B.a3=new A.d2(null,!0,!1)
B.n=new A.d2(null,!0,!0)
B.a5=new A.iA(0,"left")
B.al=new A.iA(2,"right")
B.bk=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.cB=function() {
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
B.cG=function(getTagFallback) {
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
B.cC=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.cF=function(hooks) {
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
B.cE=function(hooks) {
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
B.cD=function(hooks) {
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
B.bl=function(hooks) { return hooks; }

B.aW=new A.jW()
B.cH=new A.kr()
B.am=new A.qb()
B.cI=new A.li()
B.cJ=new A.m0()
B.ab=new A.mi()
B.cK=new A.ms()
B.x=new A.E(0,0,0)
B.cL=new A.E(0,64,255)
B.z=new A.E(0,64,39)
B.ar=new A.E(110,32,13)
B.d=new A.E(125,119,128)
B.o=new A.E(125,144,179)
B.ad=new A.E(129,217,117)
B.J=new A.E(129,231,235)
B.y=new A.E(131,158,13)
B.k=new A.E(142,82,55)
B.a_=new A.E(15,130,148)
B.N=new A.E(173,88,219)
B.M=new A.E(179,74,4)
B.E=new A.E(189,144,108)
B.C=new A.E(193,181,199)
B.bm=new A.E(200,130,0)
B.cM=new A.E(201,166,255)
B.m=new A.E(204,35,57)
B.t=new A.E(208,195,214)
B.u=new A.E(20,19,31)
B.cN=new A.E(20,20,35)
B.D=new A.E(21,87,194)
B.bn=new A.E(220,0,0)
B.h=new A.E(222,156,33)
B.p=new A.E(22,117,38)
B.a4=new A.E(255,122,105)
B.A=new A.E(255,238,168)
B.aH=new A.E(255,255,255)
B.B=new A.E(26,46,150)
B.av=new A.E(36,10,5)
B.cP=new A.E(40,40,55)
B.l=new A.E(41,45,66)
B.cQ=new A.E(42,36,43)
B.cR=new A.E(51,48,28)
B.an=new A.E(56,16,125)
B.F=new A.E(64,163,229)
B.cS=new A.E(6,49,79)
B.i=new A.E(72,64,74)
B.f=new A.E(72,82,115)
B.v=new A.E(77,29,21)
B.bo=new A.E(80,80,95)
B.Y=new A.E(84,0,39)
B.V=new A.E(86,30,138)
B.ac=new A.E(99,87,7)
B.as=new A.ep(0,"exit")
B.aw=new A.ep(1,"item")
B.r=new A.az(0,0,0,"none")
B.K=new A.az(0,1,5,"s")
B.L=new A.az(0,-1,1,"n")
B.O=new A.az(1,0,3,"e")
B.P=new A.az(1,1,4,"se")
B.Q=new A.az(1,-1,2,"ne")
B.R=new A.az(-1,0,7,"w")
B.S=new A.az(-1,1,6,"sw")
B.T=new A.az(-1,-1,8,"nw")
B.aX=new A.d8("Archery")
B.ax=new A.d8("Body")
B.ae=new A.d8("Matter")
B.aY=new A.d8("Weaponry")
B.bp=new A.aI("awaken")
B.bq=new A.aI("bolt")
B.br=new A.aI("cone")
B.bs=new A.aI("detect")
B.bt=new A.aI("die")
B.aZ=new A.aI("frighten")
B.bu=new A.aI("gold")
B.bv=new A.aI("heal")
B.bw=new A.aI("hit")
B.bx=new A.aI("howl")
B.by=new A.aI("knockBack")
B.bz=new A.aI("map")
B.bA=new A.aI("openBarrel")
B.bB=new A.aI("perceive")
B.bC=new A.aI("polymorph")
B.bD=new A.aI("slash")
B.b_=new A.aI("spawn")
B.bE=new A.aI("stab")
B.bF=new A.aI("teleport")
B.bG=new A.aI("toss")
B.bH=new A.aI("wind")
B.b0=new A.W(32,B.aH,B.x)
B.hi=new A.jG(0,"melee")
B.hj=new A.jG(2,"toss")
B.G=new A.l("cancel")
B.hk=new A.l("castSpell")
B.bL=new A.l("drop")
B.af=new A.l("e")
B.bM=new A.l("editSpells")
B.bN=new A.l("equip")
B.b1=new A.l("fire")
B.b2=new A.l("fireE")
B.b3=new A.l("fireN")
B.bO=new A.l("fireNE")
B.bP=new A.l("fireNW")
B.b4=new A.l("fireS")
B.bQ=new A.l("fireSE")
B.bR=new A.l("fireSW")
B.b5=new A.l("fireW")
B.bS=new A.l("forfeit")
B.b6=new A.l("help")
B.bT=new A.l("heroInfo")
B.a0=new A.l("n")
B.az=new A.l("ne")
B.aA=new A.l("nw")
B.a6=new A.l("ok")
B.bU=new A.l("operate")
B.bV=new A.l("pickUp")
B.bW=new A.l("quit")
B.aI=new A.l("rest")
B.aJ=new A.l("runE")
B.ao=new A.l("runN")
B.b7=new A.l("runNE")
B.b8=new A.l("runNW")
B.ap=new A.l("runS")
B.b9=new A.l("runSE")
B.ba=new A.l("runSW")
B.aK=new A.l("runW")
B.a1=new A.l("s")
B.aB=new A.l("se")
B.bX=new A.l("spendExperience")
B.aC=new A.l("sw")
B.bY=new A.l("swap")
B.bZ=new A.l("toss")
B.c_=new A.l("use")
B.c0=new A.l("useAbility")
B.ag=new A.l("w")
B.c1=new A.l("wizard")
B.X=new A.c_("On Ground",0)
B.c2=new A.c_("Crucible",8)
B.a2=new A.c_("Equipment",0)
B.c3=new A.c_("Home",26)
B.H=new A.c_("Inventory",24)
B.c4=new A.fW(0,"normal")
B.hm=new A.fW(1,"good")
B.hn=new A.fW(2,"great")
B.hq=new A.oY(null)
B.hr=new A.oZ(null)
B.hs=s([2,12,22],t.t)
B.aD=s(["hand","hand","ring","necklace","body","cloak","helm","gloves","boots"],t.s)
B.ht=s(["Return to main menu?"],t.s)
B.aL=s([9650,94],t.t)
B.ir=new A.bH(1,"n")
B.is=new A.bH(2,"ne")
B.it=new A.bH(3,"e")
B.iu=new A.bH(4,"se")
B.iv=new A.bH(5,"s")
B.iw=new A.bH(6,"sw")
B.ix=new A.bH(7,"w")
B.iy=new A.bH(8,"nw")
B.hv=s([B.ir,B.is,B.it,B.iu,B.iv,B.iw,B.ix,B.iy],t.hY)
B.ah=s(["Merek","Carac","Ulric","Tybalt","Borin","Sadon","Terrowin","Rowan","Forthwind","Althalos","Fendrel","Brom","Hadrian","Crewe","Bolbec","Fenwick","Mowbray","Drake","Bryce","Leofrick","Letholdus","Lief","Barda","Rulf","Robin","Gavin","Terrin","Jarin","Cedric","Gavin","Josef","Janshai","Doran","Asher","Quinn","Xalvador","Favian","Destrian","Dain","Millicent","Alys","Ayleth","Anastas","Alianor","Cedany","Ellyn","Helewys","Malkyn","Peronell","Thea","Gloriana","Arabella","Hildegard","Brunhild","Adelaide","Beatrix","Emeline","Mirabelle","Helena","Guinevere","Isolde","Maerwynn","Catrain","Gussalen","Enndolynn","Krea","Dimia","Aleida"],t.s)
B.c6=s([0,2,5,10,18,26,38],t.t)
B.c7=s(["_____ _____                 ____                     ____","\\ . / \\  ./                 \\ .|                     \\  |"," | |   |.|                   | |                      |.|"," |.|___| |  ____  ____ ____  |.| __     ____  ___  __ | |  ___"," |::___::|  \\:::\\ \\::| \\::|  |:|/::\\   /::::\\ \\::|/::\\|:| /::/"," |x|   |x|  __ \\x| |x|  |x|  |x|  \\x\\ |x|__)x| |x| \\x||x|/x/"," |x|   |x| /xx\\|x| |x|  |x|  |x|   |x||x|\\xxx| |x|    |xxxx\\"," |X|   |X||X(__|X| |X\\__|X|  |X|__/XX||X|____  |X|    |X| \\X\\"," |X|   |X| \\XXX/\\X\\ \\XX/|XX\\/XX/\\XXX/  \\XXXX/ /XXX\\  /XXX\\ \\X\\"," |X|   |X|","_|X|   |X|_","\\XX|   |XX/"," \\X|   |X/","  \\|   |/"],t.s)
B.bb=s([B.H,B.a2],t.hm)
B.I=new A.bR(0,"message")
B.W=new A.bR(1,"error")
B.hQ=new A.bR(2,"quest")
B.cc=new A.bR(3,"gain")
B.hR=new A.bR(4,"help")
B.cd=new A.bR(5,"debug")
B.hy=s([B.I,B.W,B.hQ,B.cc,B.hR,B.cd],A.av("r<bR>"))
B.hz=s(["Are you sure you want to forfeit the level?","You will lose all items and experience gained in the dungeon."],t.s)
B.hA=s(["LLLLL LLLLL                 LLLL                     LLLL","ERRRE ERRRE                 ERRE                     ERRE"," ERE   ERE                   ERE                      ERE"," ERELLLERE  LLLL  LLLL LLLL  ERE LL     LLLL  LLL  LL ERE  LLL"," ERREEERRE  ERRRE ERRE ERRE  EREERRL   LRRRRL ERRLLRRLERE LRRE"," EOE   EOE  LL EOE EOE  EOE  EOE  EOL EOELLEOE EOE EOEEOELOE"," EGE   EGE LGGEEGE EGE  EGE  EGE   EGEEGEEGGGE EGE    EGGGGL"," EYE   EYEEYELLEYE EYLLLEYE  EYELLLYYEEYELLLL  EYE    EYE EYL"," EYE   EYE EYYYEEYL EYYEEYYLLYYEEYYYE  EYYYYE LYYYL  LYYYL EYL"," EYE   EYE","EEYE   EYEE","EYYE   EYYE"," EYE   EYE","  EE   EE"],t.s)
B.bc=s(["Stairs","Permanent"],t.s)
B.hB=s(["Stairs descend into darkness.","How far down shall you venture?"],t.s)
B.c8=s([B.Q,B.P,B.S,B.T],t.T)
B.hL=s([],t.bZ)
B.cb=s([],t.D)
B.hH=s([],t.x)
B.bd=s([],t.I)
B.c9=s([],t.hL)
B.hJ=s([],A.av("r<c3<0&>>"))
B.hK=s([],A.av("r<bt<0&>>"))
B.hI=s([],t.s)
B.hG=s([],t.l)
B.ca=s([],t.lv)
B.hF=s([],t.mS)
B.hM=s([B.X],t.hm)
B.at=s([B.L,B.O,B.K,B.R],t.T)
B.hN=s(["hand","ring","necklace","body","cloak","helm","gloves","boots"],t.s)
B.aM=s([15,20,24,30,40,50,60,80,100,120,150,180,240],t.t)
B.aN=s([B.l,B.f,B.o,B.t,B.E,B.k,B.ar,B.v,B.A,B.h,B.M,B.ad,B.ac,B.y,B.p,B.z,B.a4,B.m,B.Y,B.N,B.V,B.an,B.J,B.F,B.D,B.B],t.bk)
B.cT=new A.ay(10,"Your luck protects you!")
B.hO=s([B.cT],t.x)
B.hP=s(["When you die, you lose everything since the last time you went up or down a set of stairs (or left a shop).","When you die, that's it. Your hero is gone forever. This is the most challenging way to play, but often the most rewarding as well."],t.s)
B.ij=new A.Q(B.h,B.ar)
B.ia=new A.Q(B.A,B.M)
B.i5=new A.Q(B.k,B.m)
B.i9=new A.Q(B.m,B.v)
B.aO=s([B.ij,B.ia,B.i5,B.i9],A.av("r<+(E,E)>"))
B.aj=new A.cl("Strength",0,"strength")
B.aa=new A.cl("Agility",1,"agility")
B.aq=new A.cl("Vitality",2,"vitality")
B.Z=new A.cl("Intellect",3,"intellect")
B.aP=s([B.aj,B.aa,B.aq,B.Z],A.av("r<cl>"))
B.a9=s([B.L,B.Q,B.O,B.P,B.K,B.S,B.R,B.T],t.T)
B.i_={"Quick Reference":0,"Getting Started":1}
B.h6=new A.f(B.f,"Quick Reference")
B.bI=new A.f(B.f,"\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550")
B.b=new A.f(B.d,"")
B.f6=new A.f(B.f,"Movement")
B.ay=new A.f(B.f,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500")
B.eB=new A.f(B.d,"There are two sets of direction keys:")
B.d4=new A.f(B.d,"They can be combined with modifier keys like so:")
B.cW=new A.f(B.f,"Other commands")
B.hw=s([B.h6,B.bI,B.b,B.b,B.f6,B.ay,B.eB,B.b,B.d4,B.b,B.b,B.b,B.cW,B.ay],t.fJ)
B.dP=new A.f(B.f,"Getting Started")
B.fg=new A.f(B.d,"TODO: This is all horrendously out of date.")
B.ep=new A.f(B.d,"Welcome! If you are here, you must have an adventurous")
B.eV=new A.f(B.d,"spirit. Not only because you wish to venture into")
B.dF=new A.f(B.d,"dungeons filled with beasts and untolds horrors, but")
B.hd=new A.f(B.d,"because you have the fortitude to try out a game while")
B.eT=new A.f(B.d,"it's still under development. A caution for the unwary:")
B.dC=new A.f(B.d,"The game is not done, or balanced, or complete, or")
B.h0=new A.f(B.d,"bug-free. It may destroy your savefiles or steal your")
B.eH=new A.f(B.d,"boyfriend!")
B.hg=new A.f(B.f,"Input")
B.es=new A.f(B.d,"Hauberk is played using your keyboard, the fixie of")
B.fT=new A.f(B.d,"input devices. A lot of input is directional. Arrow keys")
B.dB=new A.f(B.d,"work for that, but don't support diagonal moves.")
B.dJ=new A.f(B.d,"Instead, you're better off hitting num lock and using")
B.fN=new A.f(B.d,"the numpad on your keyboard if you have one:")
B.bJ=new A.f(B.d,".---.---.---.          .---.---.---.")
B.eJ=new A.f(B.d,"| 7 | 8 | 9 |          | \\ | ^ | / |")
B.bK=new A.f(B.d,"|---+---+---|          |---+---+---|")
B.fL=new A.f(B.d,"| 4 | 5 | 6 | maps to: |<- |   | ->|")
B.eh=new A.f(B.d,"| 1 | 2 | 3 |          | / | v | \\ |")
B.dM=new A.f(B.d,"'---'---'---'          '---'---'---'")
B.f3=new A.f(B.d,"If you don't have a numpad, but do have a US layout")
B.dS=new A.f(B.d,"keyboard, you can also use:")
B.dA=new A.f(B.d,"| I | O | P |          | \\ | ^ | / |")
B.db=new A.f(B.d,"'---+---+---+          '---+---+---+")
B.ez=new A.f(B.d," | K | L | ; | maps to: |<- |   | ->|")
B.ex=new A.f(B.d," '---+---+---+          '---+---+---+")
B.ft=new A.f(B.d,"  | , | . | / |          | / | v | \\ |")
B.fC=new A.f(B.d,"  '---'---'---'          '---'---'---'")
B.fu=new A.f(B.d,'The 5 and L buttons in the middle are "stand". They\'re')
B.eO=new A.f(B.d,'also used like an "OK" button to accept a selection on')
B.d_=new A.f(B.d,"menu screens. Escape is used to go back in menu screens")
B.fD=new A.f(B.d,"and exit dialogs.")
B.ea=new A.f(B.d,"(Note that all keys are shown uppercase here but are")
B.fM=new A.f(B.d,'typed lower case. L means a lowercase "l". An')
B.di=new A.f(B.d,"uppercase one will be Shift-L.)")
B.fk=new A.f(B.d,"At some point, I plan to add support for user-defined")
B.f2=new A.f(B.d,"keybindings, but they aren't there yet.")
B.eG=new A.f(B.f,"A Hero Awakens")
B.d0=new A.f(B.d,"To play, you need an avatar in the game world to live")
B.dq=new A.f(B.d,"(and die!) vicariously through. On the Main Menu Screen,")
B.eU=new A.f(B.d,"type N to create a new hero (or heroine, the game is")
B.fl=new A.f(B.d,"gender-blind). Enter a name, or use the default")
B.eX=new A.f(B.d,"suggested one and hit Enter.")
B.f_=new A.f(B.d,"There isn't much to specify at character creation time")
B.er=new A.f(B.d,"right now, but eventually you'll pick a class, race, pet")
B.dR=new A.f(B.d,"peeves, favorite sandwich, etc. Currently, warrior is")
B.fE=new A.f(B.d,"the only class.")
B.eZ=new A.f(B.d,"Your hero is saved in your browser's local storage. This")
B.hf=new A.f(B.d,"means you can return to the game later and your hero")
B.da=new A.f(B.d,"will still be there. If you switch browsers, though,")
B.fV=new A.f(B.d,"your heroes won't be in the new browser. Heroes are")
B.h7=new A.f(B.d,"saved every time you leave a level, or exit your home.")
B.fn=new A.f(B.d,"The game is not saved while you're in the middle of a")
B.eS=new A.f(B.d,"level! If you close your browser in the middle of")
B.dj=new A.f(B.d,"playing because your boss walked in, your progress in")
B.ee=new A.f(B.d,"the level will be lost. That's what you get for slacking")
B.e2=new A.f(B.d,"off at work.")
B.fX=new A.f(B.d,"Because the game is still in active development, new")
B.hb=new A.f(B.d,"releases may not be savefile compatible with previous")
B.fO=new A.f(B.d,"ones. Your heroes may get deleted if they don't work")
B.dD=new A.f(B.d,"with the latest code. Sorry.")
B.en=new A.f(B.f,"The hero screen")
B.fj=new A.f(B.d,"Once you create or choose a hero, you're taken to the")
B.h2=new A.f(B.d,'hero screen. This is sort of like the "town" in other')
B.ds=new A.f(B.d,"games. It's the safe place where you can tinker with")
B.ei=new A.f(B.d,"your gear and enter the game.")
B.dK=new A.f(B.f,"Your home")
B.fY=new A.f(B.d,"From the hero screen, press H to enter your home. This")
B.fw=new A.f(B.d,"gives you a place where you can stash loot you don't")
B.dI=new A.f(B.d,"want to carry around. You can also move items between")
B.d3=new A.f(B.d,"your inventory (stuff you carry in your backpack) and")
B.d5=new A.f(B.d,"your equipment (weapons and armor you are currently")
B.eE=new A.f(B.d,"wearing or holding).")
B.dz=new A.f(B.f,"The crucible")
B.ec=new A.f(B.d,"The most interesting facet of your home is the crucible.")
B.eF=new A.f(B.d,"This is the place where you can craft\u2014make new items")
B.ev=new A.f(B.d,"from existing ones. You place items into the crucible")
B.dh=new A.f(B.d,"just like you can your home or inventory. However, it")
B.ew=new A.f(B.d,"only allows items that are part of a recipe.")
B.e_=new A.f(B.d,"A recipe is a set of items that can be turned into")
B.cU=new A.f(B.d,"something else. When you place all of the required items")
B.f1=new A.f(B.d,"for a recipe in the crucible, it will tell you. Press")
B.dv=new A.f(B.d,"Space and it will magically transmute them into")
B.hc=new A.f(B.d,"something new.")
B.fI=new A.f(B.d,"The set of recipes is still highly in flux, but try")
B.cZ=new A.f(B.d,"dropping a few healing potions in there.")
B.h4=new A.f(B.f,"The Dungeon Awaits")
B.fx=new A.f(B.d,"Now that your hero is alive and ready, it's time to slay")
B.eo=new A.f(B.d,"some beasts.")
B.eY=new A.f(B.f,"Areas and levels")
B.dV=new A.f(B.d,"Unlike other roguelikes, Hauberk doesn't have a single")
B.h3=new A.f(B.d,"monolithic dungeon. Instead, there are a number of")
B.fH=new A.f(B.d,'areas. Each area has its own "flavor"\u2014it\'s own kinds')
B.fd=new A.f(B.d,"of monsters, difficulty, appearance, etc. An area is in")
B.eC=new A.f(B.d,"turn divided into a series of levels, each more")
B.du=new A.f(B.d,"difficult than the last.")
B.de=new A.f(B.d,"From the hero screen, you can select which area and")
B.eg=new A.f(B.d,"level you want to play. You can only enter an area if")
B.fs=new A.f(B.d,"you've beaten at least one level from the previous area.")
B.dE=new A.f(B.d,"Likewise, you must beat a level to unlock the next one.")
B.ef=new A.f(B.d,"Since you just created a hero, you can only play the")
B.dk=new A.f(B.d,"first level of the Friendly Forest, so just type L to")
B.f4=new A.f(B.d,"enter it. Later, when you unlock stuff, use the")
B.hh=new A.f(B.d,"directional keys to select an area and level. You can")
B.fS=new A.f(B.d,"replay a level as many times as you want.")
B.dT=new A.f(B.f,"Quests, victory, and defeat")
B.eN=new A.f(B.d,"Every level is randomly generated (of course) and")
B.f8=new A.f(B.d,"populated with monsters and treasure. Each level also")
B.fz=new A.f(B.d,"has a quest. This is a goal you must fulfill before")
B.dm=new A.f(B.d,"you're allowed to leave the level. After completing the")
B.eQ=new A.f(B.d,"quest, type Q to leave the level and return to the")
B.dQ=new A.f(B.d,"safety of your home. All experience and items gained in")
B.dd=new A.f(B.d,"the level will be saved henceforth and forever more.")
B.e5=new A.f(B.d,"If you die in the level, you lose everything you gained")
B.ek=new A.f(B.d,"while in that level. It isn't quite permadeath, but it's")
B.dW=new A.f(B.d,"pretty damn annoying to lose that experience and")
B.d7=new A.f(B.d,"whatever hot loot you picked up.")
B.fP=new A.f(B.d,"If you want to give up and leave the level before")
B.dH=new A.f(B.d,"completing the quest, you can forfeit by typing Shift-F.")
B.f5=new A.f(B.d,"Like dying, doing this sacrifices anything you've gained")
B.e0=new A.f(B.d,"since entering the level.")
B.dt=new A.f(B.f,"Navigating the level")
B.e9=new A.f(B.d,"Your avatar in the game is represented by a @. Floor")
B.cX=new A.f(B.d,"tiles are usually ., and impassible barriers and walls")
B.fZ=new A.f(B.d,"look like #, or other hopefully obvious solid looking")
B.eP=new A.f(B.d,"tiles.")
B.h8=new A.f(B.d,"You walk around using the directional keys. Pressing the")
B.e8=new A.f(B.d,"stand key (5 or L) makes you stand still for a turn.")
B.cV=new A.f(B.d,"That's useful to let a monster take a step closer so you")
B.el=new A.f(B.d,"can attack the next turn.")
B.fR=new A.f(B.d,"Hold down Shift and press a direction to run in that")
B.dw=new A.f(B.d,"direction. You will repeatedly walk in that direction")
B.e1=new A.f(B.d,"until disturbed by reaching an obstacle, a fork in the")
B.eM=new A.f(B.d,"path, or seeing a monster. When not in combat, running")
B.ej=new A.f(B.d,"is the most user-friendly way to get from point A to")
B.dx=new A.f(B.d,"point B.")
B.eK=new A.f(B.d,"Closed doors look like +. You can open them (which takes")
B.cY=new A.f(B.d,"a turn) by simply walking into them. An open door looks")
B.d2=new A.f(B.d,"like -. You can close a door by pressing C while")
B.he=new A.f(B.d,"standing next to one.")
B.fJ=new A.f(B.f,"Combat!")
B.e4=new A.f(B.d,"Monsters in the game are represented using letters. You")
B.dX=new A.f(B.d,"attack by trying to walk into the tile where a monster")
B.h_=new A.f(B.d,"is standing. On the right side of the screen you can see")
B.fe=new A.f(B.d,"your health along with some of the nearby monsters. Try")
B.fo=new A.f(B.d,"to get theirs to zero before yours does!")
B.fi=new A.f(B.d,"When you kill a monster, you are granted some experience")
B.fy=new A.f(B.d,"points. Earn enough of those, and your hero will")
B.dG=new A.f(B.d,"increase in experience level. That increases your")
B.fQ=new A.f(B.d,"maximum health and does some other good stuff.")
B.fa=new A.f(B.d,"Meanwhile, monsters will be attacking you. You are")
B.eA=new A.f(B.d,"outnumbered, so try not to let them surround you.")
B.dy=new A.f(B.d,"Attacking from the safety of a narrow corridor helps.")
B.dU=new A.f(B.f,"Resting")
B.fU=new A.f(B.d,"After a skirmish, your hero has likely lost some health.")
B.dn=new A.f(B.d,"That can be regained by imbibing magic potions, but")
B.fm=new A.f(B.d,"those are in short supply. Instead, they'll have to")
B.dO=new A.f(B.d,"rest.")
B.fv=new A.f(B.d,"Resting requires food, which you automatically discover")
B.fh=new A.f(B.d,"as you explore the level. Every turn that you stand")
B.fb=new A.f(B.d,"still consumes a bit of food and regains a point of")
B.fB=new A.f(B.d,"health. Instead of mashing down the stand key, if you")
B.et=new A.f(B.d,"press Shift-Stand, you will repeatedly rest until you")
B.d8=new A.f(B.d,"run out of food, fully regain their health, or are")
B.fc=new A.f(B.d,"disturbed by a nearby monster.")
B.fK=new A.f(B.d,"If you don't have any food, resting accomplishes")
B.eW=new A.f(B.d,"nothing. To get food, you must explore new parts of the")
B.dp=new A.f(B.d,"level. No resting on your laurels or wandering through")
B.eI=new A.f(B.d,"familiar passages!")
B.f0=new A.f(B.f,"Loot!")
B.dZ=new A.f(B.d,"While the ridding the world of an evil beast is its own")
B.d9=new A.f(B.d,"reward, it's not the only reward. Many monsters drop")
B.d1=new A.f(B.d,"treasure, and you'll find some laying on the ground as")
B.e3=new A.f(B.d,"well. Different levels and monsters tend to drop")
B.h5=new A.f(B.d,"different stuff, so explore (and murder) widely.")
B.eD=new A.f(B.d,"Items are represented using punctuation characters.")
B.h9=new A.f(B.d,"Potions are !, scrolls are ?, etc. You can pick up an")
B.fF=new A.f(B.d,"item off the ground by standing on top of it and")
B.dg=new A.f(B.d,'pressing G, for "get".')
B.eR=new A.f(B.d,"If there are multiple items in the same tile, that picks")
B.em=new A.f(B.d,"up the top one. Press G repeatedly to pick them all up.")
B.ha=new A.f(B.d,"Eventually, I'll add a menu to let you pick which one")
B.fq=new A.f(B.d,"you want.")
B.dl=new A.f(B.d,"Many items can be used. Potions can be quaffed, scrolls")
B.dN=new A.f(B.d,"read, wands... uh... waved around? To use an item, press")
B.f7=new A.f(B.d,"U to bring up the item selection screen. In addition to")
B.fA=new A.f(B.d,"your inventory and equipment, you can also use items")
B.fp=new A.f(B.d,"that are laying on the ground under you. You don't have")
B.eb=new A.f(B.d,"to pick them up first. (And not picking them up first")
B.dY=new A.f(B.d,"saves you a turn. Useful in the heat of battle!)")
B.dc=new A.f(B.d,"Pressing Tab on the item screen cycles through these")
B.eq=new A.f(B.d,"three views.")
B.eu=new A.f(B.d,"Type the letter next to an item to use it. If the item")
B.fr=new A.f(B.d,'has an active "use" like a potion, this will perform')
B.ey=new A.f(B.d,'it. "Using" a piece of equipment equips it. Using a')
B.fG=new A.f(B.d,"piece of equipment that you're already wearing unequips")
B.e7=new A.f(B.d,"it. Remember that equipment must be worn to get any")
B.h1=new A.f(B.d,"advantage! Carrying around a sword in your backpack")
B.dr=new A.f(B.d,"doesn't do you much good.")
B.f9=new A.f(B.d,"If you want to discard an item, press D, then select the")
B.df=new A.f(B.d,"item. It will drop onto the ground. It may gaze back at")
B.e6=new A.f(B.d,"you forlornly, wondering why it wasn't good enough and")
B.fW=new A.f(B.d,"why you love the other items in your inventory more.")
B.dL=new A.f(B.d,"A more entertaining and often more useful way to rid")
B.eL=new A.f(B.d,"yourself of an item is to throw it, which is done by")
B.ff=new A.f(B.d,"pressing T. Throwing an item at a monster will often")
B.d6=new A.f(B.d,"harm it, and some items do fun and exciting things like")
B.ed=new A.f(B.d,"explode when lobbed at an unsuspecting beastie.")
B.hx=s([B.dP,B.bI,B.fg,B.b,B.b,B.b,B.ep,B.b,B.eV,B.b,B.dF,B.b,B.hd,B.b,B.eT,B.b,B.dC,B.b,B.h0,B.b,B.eH,B.b,B.b,B.b,B.hg,B.ay,B.es,B.b,B.fT,B.b,B.dB,B.b,B.dJ,B.b,B.fN,B.b,B.b,B.b,B.bJ,B.eJ,B.bK,B.fL,B.bK,B.eh,B.dM,B.b,B.b,B.f3,B.b,B.dS,B.b,B.b,B.b,B.bJ,B.dA,B.db,B.ez,B.ex,B.ft,B.fC,B.b,B.b,B.fu,B.b,B.eO,B.b,B.d_,B.b,B.fD,B.b,B.b,B.b,B.ea,B.b,B.fM,B.b,B.di,B.b,B.b,B.b,B.fk,B.b,B.f2,B.b,B.b,B.b,B.eG,B.ay,B.d0,B.b,B.dq,B.b,B.eU,B.b,B.fl,B.b,B.eX,B.b,B.b,B.b,B.f_,B.b,B.er,B.b,B.dR,B.b,B.fE,B.b,B.b,B.b,B.eZ,B.b,B.hf,B.b,B.da,B.b,B.fV,B.b,B.h7,B.b,B.b,B.b,B.fn,B.b,B.eS,B.b,B.dj,B.b,B.ee,B.b,B.e2,B.b,B.b,B.b,B.fX,B.b,B.hb,B.b,B.fO,B.b,B.dD,B.b,B.b,B.b,B.en,B.b,B.fj,B.b,B.h2,B.b,B.ds,B.b,B.ei,B.b,B.b,B.b,B.dK,B.b,B.fY,B.b,B.fw,B.b,B.dI,B.b,B.d3,B.b,B.d5,B.b,B.eE,B.b,B.b,B.b,B.dz,B.b,B.ec,B.b,B.eF,B.b,B.ev,B.b,B.dh,B.b,B.ew,B.b,B.b,B.b,B.e_,B.b,B.cU,B.b,B.f1,B.b,B.dv,B.b,B.hc,B.b,B.b,B.b,B.fI,B.b,B.cZ,B.b,B.b,B.b,B.h4,B.ay,B.fx,B.b,B.eo,B.b,B.b,B.b,B.eY,B.b,B.dV,B.b,B.h3,B.b,B.fH,B.b,B.fd,B.b,B.eC,B.b,B.du,B.b,B.b,B.b,B.de,B.b,B.eg,B.b,B.fs,B.b,B.dE,B.b,B.b,B.b,B.ef,B.b,B.dk,B.b,B.f4,B.b,B.hh,B.b,B.fS,B.b,B.b,B.b,B.dT,B.b,B.eN,B.b,B.f8,B.b,B.fz,B.b,B.dm,B.b,B.eQ,B.b,B.dQ,B.b,B.dd,B.b,B.b,B.b,B.e5,B.b,B.ek,B.b,B.dW,B.b,B.d7,B.b,B.b,B.b,B.fP,B.b,B.dH,B.b,B.f5,B.b,B.e0,B.b,B.b,B.b,B.dt,B.b,B.e9,B.b,B.cX,B.b,B.fZ,B.b,B.eP,B.b,B.b,B.b,B.h8,B.b,B.e8,B.b,B.cV,B.b,B.el,B.b,B.b,B.b,B.fR,B.b,B.dw,B.b,B.e1,B.b,B.eM,B.b,B.ej,B.b,B.dx,B.b,B.b,B.b,B.eK,B.b,B.cY,B.b,B.d2,B.b,B.he,B.b,B.b,B.b,B.fJ,B.b,B.e4,B.b,B.dX,B.b,B.h_,B.b,B.fe,B.b,B.fo,B.b,B.b,B.b,B.fi,B.b,B.fy,B.b,B.dG,B.b,B.fQ,B.b,B.b,B.b,B.fa,B.b,B.eA,B.b,B.dy,B.b,B.b,B.b,B.dU,B.b,B.fU,B.b,B.dn,B.b,B.fm,B.b,B.dO,B.b,B.b,B.b,B.fv,B.b,B.fh,B.b,B.fb,B.b,B.fB,B.b,B.et,B.b,B.d8,B.b,B.fc,B.b,B.b,B.b,B.fK,B.b,B.eW,B.b,B.dp,B.b,B.eI,B.b,B.b,B.b,B.f0,B.b,B.dZ,B.b,B.d9,B.b,B.d1,B.b,B.e3,B.b,B.h5,B.b,B.b,B.b,B.eD,B.b,B.h9,B.b,B.fF,B.b,B.dg,B.b,B.b,B.b,B.eR,B.b,B.em,B.b,B.ha,B.b,B.fq,B.b,B.b,B.b,B.dl,B.b,B.dN,B.b,B.f7,B.b,B.fA,B.b,B.fp,B.b,B.eb,B.b,B.dY,B.b,B.dc,B.b,B.eq,B.b,B.b,B.b,B.eu,B.b,B.fr,B.b,B.ey,B.b,B.fG,B.b,B.e7,B.b,B.h1,B.b,B.dr,B.b,B.b,B.b,B.f9,B.b,B.df,B.b,B.e6,B.b,B.fW,B.b,B.b,B.b,B.dL,B.b,B.eL,B.b,B.ff,B.b,B.d6,B.b,B.ed,B.b],t.fJ)
B.aQ=new A.bO(B.i_,[B.hw,B.hx],A.av("bO<q,C<f>>"))
B.hX={Y:0,N:1,"`":2}
B.ce=new A.bO(B.hX,["Yes","No","No"],t.p1)
B.aE=new A.dJ(0,"clumsy")
B.a7=new A.dJ(1,"insult")
B.cg=new A.dJ(2,"screech")
B.ch=new A.dJ(3,"hiss")
B.hE=s(["{1} forget[s] what {1 he} was doing.","{1} lurch[es] around.","{1} stumble[s] awkwardly.","{1} trip[s] over {1 his} own feet!"],t.s)
B.hD=s(["{1} insult[s] {2 his} mother!","{1} jeer[s] at {2}!","{1} mock[s] {2} mercilessly!","{1} make[s] faces at {2}!","{1} laugh[s] at {2}!","{1} sneer[s] at {2}!"],t.s)
B.hu=s(["{1} screech[es] at {2}!","{1} taunt[s] {2}!","{1} cackle[s] at {2}!"],t.s)
B.hC=s(["{1} hiss[es] at {2}!","{1} spit[s] at {2}!"],t.s)
B.hS=new A.dD([B.aE,B.hE,B.a7,B.hD,B.cg,B.hu,B.ch,B.hC],A.av("dD<dJ,C<q>>"))
B.hY={L:0,E:1,R:2,O:3,G:4,Y:5}
B.cO=new A.E(232,200,21)
B.hT=new A.bO(B.hY,[B.d,B.i,B.m,B.M,B.h,B.cO],A.av("bO<q,E>"))
B.hU=new A.dD([9786,1,9787,2,9829,3,9830,4,9827,5,9824,6,8226,7,9688,8,9675,9,9689,10,9794,11,9792,12,9834,13,9835,14,9788,15,9658,16,9668,17,8597,18,8252,19,182,20,167,21,9644,22,8616,23,8593,24,8595,25,8594,26,8592,27,8735,28,8596,29,9650,30,9660,31,8962,127,199,128,252,129,233,130,226,131,228,132,224,133,229,134,231,135,234,136,235,137,232,138,239,139,238,140,236,141,196,142,197,143,201,144,230,145,198,146,244,147,246,148,242,149,251,150,249,151,255,152,214,153,220,154,162,155,163,156,165,157,8359,158,402,159,225,160,237,161,243,162,250,163,241,164,209,165,170,166,186,167,191,168,8976,169,172,170,189,171,188,172,161,173,171,174,187,175,9617,176,9618,177,9619,178,9474,179,9508,180,9569,181,9570,182,9558,183,9557,184,9571,185,9553,186,9559,187,9565,188,9564,189,9563,190,9488,191,9492,192,9524,193,9516,194,9500,195,9472,196,9532,197,9566,198,9567,199,9562,200,9556,201,9577,202,9574,203,9568,204,9552,205,9580,206,9575,207,9576,208,9572,209,9573,210,9561,211,9560,212,9554,213,9555,214,9579,215,9578,216,9496,217,9484,218,9608,219,9604,220,9612,221,9616,222,9600,223,945,224,223,225,915,226,960,227,931,228,963,229,181,230,964,231,934,232,920,233,937,234,948,235,8734,236,966,237,949,238,8745,239,8801,240,177,241,8805,242,8804,243,8992,244,8993,245,247,246,8776,247,176,248,8729,249,183,250,8730,251,8319,252,178,253,9632,254],A.av("dD<e,e>"))
B.hZ={}
B.cf=new A.bO(B.hZ,[],t.p1)
B.i0={"A-Z Del":0}
B.hV=new A.bO(B.i0,["Edit name"],t.p1)
B.i1={OK:0,"\u2195\u2194":1,"`":2}
B.hW=new A.bO(B.i1,["Enter dungeon","Change depth","Cancel"],t.p1)
B.U=new A.hf(0,"normal")
B.ci=new A.hf(1,"proper")
B.aF=new A.hf(3,"mass")
B.ck=new A.dK("you","you","your",0,"you")
B.aG=new A.dK("he","him","his",2,"he")
B.i2=new A.dK("they","them","their",4,"they")
B.cl=new A.dK("she","her","her",1,"she")
B.w=new A.dK("it","it","its",3,"it")
B.cm=new A.Q(10,15)
B.cn=new A.Q(16,21)
B.i3=new A.Q("spear","Spear Mastery")
B.i4=new A.Q(1,1)
B.i6=new A.Q(5,8)
B.co=new A.Q(6,9)
B.i7=new A.Q(7,10)
B.i8=new A.Q(9,16)
B.ib=new A.Q(0.002,0.8)
B.ic=new A.Q("whip","Whip Mastery")
B.id=new A.Q("Name","Enter a name for your new hero.")
B.ie=new A.Q(B.C,B.d)
B.ig=new A.Q(B.i,B.i)
B.ih=new A.Q("dagger","Knife Fighting")
B.ii=new A.Q("club","Bludgeoning")
B.ik=new A.Q("axe","Axe Mastery")
B.il=new A.Q("You haven't learned this skill.",B.i)
B.im=new A.Q(B.h,B.C)
B.io=new A.Q("sword","Swordfighting")
B.ip=new A.Q(0.1,1)
B.ak=new A.d(0,0)
B.iq=new A.Y(B.ak,B.ak)
B.cp=new A.bH(0,"everywhere")
B.be=new A.hs(0,"rectangular")
B.iz=new A.hs(1,"octagonal")
B.iA=new A.hs(2,"any")
B.iB=new A.ht(0,"small")
B.iC=new A.ht(1,"medium")
B.iD=new A.ht(2,"large")
B.iE=new A.f3(0,"anywhere")
B.ai=new A.f3(1,"open")
B.aR=new A.f3(2,"wall")
B.bf=new A.f3(3,"corner")
B.iF=new A.dh(0,"none")
B.a8=new A.dh(1,"mirrorHorizontal")
B.iG=new A.dh(2,"mirrorVertical")
B.au=new A.dh(3,"mirrorBoth")
B.q=new A.dh(4,"rotate90")
B.iH=new A.dh(5,"rotate180")
B.iI=new A.qV(1,"oldest")
B.cv=new A.bv("shop 1")
B.cu=new A.bv("shop 2")
B.ct=new A.bv("shop 3")
B.cs=new A.bv("shop 4")
B.cr=new A.bv("shop 5")
B.cq=new A.bv("shop 6")
B.iJ=new A.bv("shop 7")
B.iK=new A.bv("shop 8")
B.iL=new A.bv("shop 9")
B.cw=new A.bv("dungeon")
B.bg=new A.bv("exit")
B.cx=new A.bv("home")
B.iM=A.c8("By")
B.iN=A.c8("Bz")
B.iO=A.c8("yb")
B.iP=A.c8("yc")
B.iQ=A.c8("yd")
B.iR=A.c8("ye")
B.iS=A.c8("yf")
B.iT=A.c8("a0")
B.iU=A.c8("z4")
B.iV=A.c8("z5")
B.iW=A.c8("z6")
B.iX=A.c8("z7")
B.aS=new A.d(0,1)
B.aT=new A.d(0,-1)
B.aU=new A.d(1,0)
B.aV=new A.d(-1,0)
B.cy=new A.f9(0,"uninitialized")
B.bi=new A.f9(1,"stats")
B.cz=new A.f9(2,"resistances")
B.cA=new A.f9(3,"all")})();(function staticFields(){$.rv=null
$.bL=A.a([],A.av("r<a0>"))
$.vC=null
$.pP=0
$.tQ=A.A7()
$.v5=null
$.v4=null
$.wD=null
$.wu=null
$.wK=null
$.t0=null
$.t9=null
$.ug=null
$.rC=A.a([],A.av("r<C<a0>?>"))
$.fl=null
$.ik=null
$.il=null
$.u9=!1
$.b3=B.ab
$.cr=null
$.wg=null
$.cq=A.dT()
$.c7=null
$.Aa=A.a(["\u250c\u2510","\u255b\u2558","\u255e\u2561"],t.s)
$.Ab=A.a(["\u250c\u2558","\u2510\u255b","\u2500\u2550"],t.s)
$.Al=A.a(["\u250c\u2510\u255b\u2558","\u2500\u2502\u2550\u2502"],t.s)
$.aT=A.dT()
$.h=null
$.bb=null
$.ij=null
$.vl=0
$.uY=0
$.ho=A.a([],A.av("r<kJ>"))
$.hx=A.D(t.N,t.g)
$.c6=null
$.ah=A.dT()
$.tE=!1
$.np=!1
$.tF=!1
$.j6=A.D(t.B,A.av("fc"))
$.nk=null
$.bf=0
$.ef=A.a([],A.av("r<iQ>"))
$.vf=function(){var s=t.l
return A.a([A.a([B.aT,B.aU],s),A.a([B.aU,B.aT],s),A.a([B.aU,B.aS],s),A.a([B.aS,B.aU],s),A.a([B.aS,B.aV],s),A.a([B.aV,B.aS],s),A.a([B.aV,B.aT],s),A.a([B.aT,B.aV],s)],t.G)}()
$.v9=A.a([B.t,B.A,B.h,B.ac,B.cR],t.bk)
$.u_=A.a([B.J,B.F,B.N,B.t],t.bk)
$.bs=A.a([],t.f_)
$.fj=A.a([],A.av("r<l5>"))
$.x=A.dT()
$.bW=A.dT()
$.fi=A.be(t.B)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"BD","wS",()=>A.t4("_$dart_dartClosure"))
s($,"BC","to",()=>A.t4("_$dart_dartClosure_dartJSInterop"))
s($,"E_","xL",()=>A.a([new J.jT()],A.av("r<hu>")))
s($,"DH","xz",()=>A.cQ(A.r5({
toString:function(){return"$receiver$"}})))
s($,"DI","xA",()=>A.cQ(A.r5({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"DJ","xB",()=>A.cQ(A.r5(null)))
s($,"DK","xC",()=>A.cQ(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"DN","xF",()=>A.cQ(A.r5(void 0)))
s($,"DO","xG",()=>A.cQ(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"DM","xE",()=>A.cQ(A.vT(null)))
s($,"DL","xD",()=>A.cQ(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"DQ","xI",()=>A.cQ(A.vT(void 0)))
s($,"DP","xH",()=>A.cQ(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"DS","uQ",()=>A.z9())
s($,"DY","n_",()=>A.uj(B.iT))
s($,"Cv","uE",()=>{A.yP()
return $.pP})
s($,"Bl","tn",()=>{var r=A.r6("axe"),q=A.r6("club"),p=A.r6("spear"),o=A.r6("whip"),n=$.un(),m=A.av("r<d3>"),l=A.a([n],m),k=A.a([n],m),j=$.uq(),i=A.a([j],m),h=$.uo(),g=A.a([h],m),f=$.up(),e=A.a([f],m),d=A.a([f],m),c=A.a([j],m),b=$.us()
return A.a([new A.jl(),new A.jp(),new A.iH(r),new A.iZ(q),new A.kW(p),new A.ll(o),new A.iJ(l),new A.iS(k),new A.j3(i),new A.je(g),new A.jm(e),new A.jn(d),new A.jv(c),new A.jC(A.a([b],m)),new A.jD(A.a([j,b],m)),new A.jJ(A.a([j],m)),new A.jL(A.a([f],m)),new A.k_(A.a([h,f],m)),new A.k1(A.a([n],m)),new A.k9(A.a([h],m)),new A.kE(A.a([h],m)),new A.kR(A.a([h,b],m)),new A.kT(A.a([n],m)),new A.l6(A.a([$.ur()],m)),new A.ln(A.a([b],m)),new A.lo(A.a([b],m))],t.eI)})
s($,"BB","e8",()=>{var r=null,q=A.av("d8"),p=t.S,o=t.hL
return A.a([A.tI("Adventurer","No special birthright, training, or inclination is needed to become an adventurer, simply the courage (or foolhardiness) to brave the wilds and live on one's wits. Adventurers are flexible and resourceful. They are masters of nothing, but able to learn a little of everything.",A.A([B.aX,5,B.ax,5,B.aY,5,B.ae,2],q,p),A.a([new A.ju()],o),A.a7("item",r,r)),A.tI("Barbarian","It's not that barbarians are stupid. Many are, in fact, quite intelligent. It's just that they apply most of that intelligence towards deciding which weapon is best suited for splitting a monster's head open.\n\nBarbarians rely on the might of their bodies and the reassuring heft of their weapons. While they aren't above using a little magic here and there, they're most comfortable when those supernatural forces are safely ensconced in a piece of familiar gear.",A.A([B.aX,1,B.ax,10,B.aY,5],q,p),A.a([new A.jd()],o),A.a7("weapon",r,r)),A.tI("Sorceror","While most rightly fear the awesome power and unpredictability of magic, sorcerors see it as a source of personal power and glory. Tapping magic in its raw elemental form, untethered to other objects or beings is the most dangerous form of spellcasting and most sorcerors have the scars to show for it. A small price to pay for those with the courage to tangle with the raw forces of the universe itself.",A.A([B.ax,3,B.ae,10],q,p),A.a([],o),A.a7("item",r,r))],A.av("r<cC>"))})
s($,"BE","tp",()=>A.de(A.av("fG")))
s($,"BA","wR",()=>{var r=null
return A.S(r,r,r,r)})
s($,"DT","xJ",()=>{var r,q,p,o,n,m,l,k=null,j=$.uO(),i=A.S(j,k,k,A.a([$.iu(),$.tu()],t.J)),h=$.aX()
j=A.S(j,h,k,k)
r=A.S($.xw(),h,k,k)
q=$.iy()
p=A.S(q,h,k,k)
o=A.S($.mJ(),h,k,k)
n=A.S($.mK(),h,k,k)
m=A.S($.ix(),k,$.iv(),k)
l=$.it()
return A.A(["I",i,"l",j,"P",r,"\u2248",p,"%",o,"&",n,"*",m,"=",A.S(l,k,q,k),"\u2261",A.S(l,h,k,k),"\u2022",A.S($.uN(),k,q,k)],t.N,t.oC)})
s($,"DZ","xK",()=>{var r=null,q=t.J
return A.A(["?",A.S(r,r,r,r),".",A.S(r,$.aX(),r,r),"#",A.S(r,r,r,A.a([$.iu(),$.tu(),$.uJ(),$.uK(),$.uL()],q)),"\u250c",A.S(r,r,$.mY(),r),"\u2500",A.S(r,r,$.mX(),r),"\u2510",A.S(r,r,$.mZ(),r),"-",A.S(r,r,$.iw(),r),"\u2502",A.S(r,r,$.mW(),r),"\u2558",A.S(r,r,$.mR(),r),"\u2550",A.S(r,r,$.mQ(),r),"\u255b",A.S(r,r,$.mS(),r),"\u255e",A.S(r,r,$.mU(),r),"\u2564",A.S(r,r,$.mT(),r),"\u2561",A.S(r,r,$.mV(),r),"\u03c0",A.S(r,r,$.mI(),r),"\u2248",A.S(r,r,$.iy(),r),"'",A.S(r,r,r,A.a([$.iv(),$.ix()],q))],t.N,t.oC)})
s($,"BH","e9",()=>A.bZ("air","Ai",1.2,new A.nK(),"",!1,null))
s($,"BL","ds",()=>A.bZ("earth","Ea",1.1,null,"",!1,null))
s($,"BM","b4",()=>A.bZ("fire","Fi",1.2,new A.nO(),"burns up",!0,new A.nP()))
s($,"BR","d_",()=>A.bZ("water","Wa",1.3,null,"",!1,null))
s($,"BG","dr",()=>A.bZ("acid","Ac",1.4,null,"",!1,null))
s($,"BJ","c9",()=>A.bZ("cold","Co",1.2,new A.nL(),"shatters",!1,new A.nM()))
s($,"BO","dt",()=>A.bZ("lightning","Ln",1.1,null,"",!1,null))
s($,"BP","bz",()=>A.bZ("poison","Po",2,new A.nS(),"",!1,new A.nT()))
s($,"BK","cY",()=>A.bZ("dark","Dk",1.5,new A.nN(),"",!1,null))
s($,"BN","cZ",()=>A.bZ("light","Li",1.5,new A.nQ(),"",!1,new A.nR()))
s($,"BQ","du",()=>A.bZ("spirit","Sp",3,null,"",!1,null))
s($,"BI","fr",()=>A.a([$.aw(),$.e9(),$.ds(),$.b4(),$.d_(),$.dr(),$.c9(),$.dt(),$.bz(),$.cY(),$.cZ(),$.du()],A.av("r<dB>")))
s($,"Bm","dp",()=>A.de(t.R))
s($,"Bn","dq",()=>A.de(t.R))
s($,"DX","uT",()=>A.de(A.av("jq")))
s($,"BZ","bh",()=>A.de(t.q))
s($,"E0","xM",()=>A.kK("\\n\\s*"))
s($,"DW","fv",()=>{var r=t.s
return A.A([$.e9(),A.a(["wind","buffets"],r),$.ds(),A.a(["soil","buries"],r),$.b4(),A.a(["flame","burns"],r),$.d_(),A.a(["water","blasts"],r),$.dr(),A.a(["acid","melts"],r),$.c9(),A.a(["ice","freezes"],r),$.dt(),A.a(["lightning","shocks"],r),$.bz(),A.a(["poison","chokes"],r),$.cY(),A.a(["darkness","crushes"],r),$.cZ(),A.a(["light","sears"],r),$.du(),A.a(["spirit","haunts"],r)],t.h,t.m)})
s($,"C0","ca",()=>A.de(t.P))
s($,"Cm","tq",()=>A.kF("Fae","What can be said about the fae folk that is known to be true? Dimunitive and easily harmed, they survive by cloaking themselves in fables, tricks, and subterfuge. Quick to anger and quick to forgive, the fae live each moment as if it may be their last, bright-burning flames all too aware of how easily they may be snuffed out.",A.a([new A.jk(),new A.jo()],t.hL),A.A([B.aj,0.6,B.aa,1.6,B.aq,0.7,B.Z,1.1],t.X,t.i)))
s($,"Cl","fs",()=>{var r=t.X,q=t.i,p=t.hL
return A.a([A.kF("Dwarf","It takes a certain kind of person to be willing to spend their life deep under the Earth, toiling away in darkness. Dwarves aren't just willing, but delight in it. Solid, impenetrable and somewhat dim, dwarves have much in common with the mines they love.",B.c9,A.A([B.aj,1.3,B.aa,0.6,B.aq,1.4,B.Z,0.7],r,q)),A.kF("Elf","There are few things elves are not good at, as any elf will be quick to inform you. Clever, quick on their feet, and surprisingly strong for how they look. Which is radiantly beautiful, naturally.",B.c9,A.A([B.aj,1.2,B.aa,1.3,B.aq,1,B.Z,1.2],r,q)),$.tq(),A.kF("Gnome","Gnomes are gentle, quiet folk, difficult to arouse to anger (unless you interrupt one while reading). Most live a life of the mind, seeking knowledge more than adventure. But this insatiable desire for the former, on many occasions, leads them into the jaws of the latter.",A.a([new A.kS()],p),A.A([B.aj,0.7,B.aa,0.8,B.aq,1,B.Z,1.5],r,q)),A.kF("Human","Humans excel at nothing, but nor are they particularly weak in any area. Most other races consider humans sort of like mice: pesky creatures who seem do little but breed, which they do with great devotion.",A.a([new A.kD()],p),A.A([B.aj,1,B.aa,1,B.aq,1,B.Z,1],r,q))],A.av("r<cI>"))})
s($,"Bo","un",()=>A.fy("Arcing",B.ae,"Cast spells of lightning."))
s($,"Bp","uo",()=>A.fy("Earthshaping",B.ae,"Cast spells of earth."))
s($,"Bq","up",()=>A.fy("Fireweaving",B.ae,"Cast spells of fire."))
s($,"Br","uq",()=>A.fy("Icewinding",B.ae,"Cast spells of cold."))
s($,"Bs","ur",()=>A.fy("Watercoursing",B.ae,"Cast spells of water."))
s($,"Bt","us",()=>A.fy("Windchasing",B.ae,"Cast spells of air."))
s($,"Bu","wQ",()=>{var r=$.bf
$.bf=r+1
return new A.iD(r)})
s($,"Bw","uu",()=>{var r=$.bf
$.bf=r+1
return new A.iG(r)})
s($,"Bx","uv",()=>{var r=$.bf
$.bf=r+1
return new A.iN(r)})
s($,"Cu","uD",()=>{var r=$.bf
$.bf=r+1
return new A.kV(r)})
s($,"DR","uP",()=>{var r=$.bf
$.bf=r+1
return new A.lm(r)})
s($,"Ct","uC",()=>{var r=$.wQ(),q=$.bf,p=$.bf=q+1,o=$.bf=p+1,n=$.uu(),m=$.uv(),l=$.bf=o+1,k=$.uD()
$.bf=l+1
return A.a([r,new A.iL(q),new A.iM(p),n,m,new A.jZ(o),k,new A.l0(l),$.uP(),$.un(),$.uo(),$.up(),$.uq(),$.ur(),$.us()],t.hC)})
s($,"Cs","uB",()=>{var r,q,p,o=A.D(t.N,t.M)
for(r=$.uC(),q=0;q<15;++q){p=r[q]
o.i(0,p.gM(),p)}return o})
s($,"Bv","ut",()=>A.de(A.av("fz")))
s($,"Cj","uz",()=>{var r=null
return A.pJ(r,r,r,r)})
s($,"Ch","x7",()=>{var r=t.J,q=A.a([$.mN()],r)
r=A.a([$.iu()],r)
return A.pJ($.mL(),q,$.mO(),r)})
s($,"Ci","x8",()=>{var r=t.J,q=A.a([$.xj()],r)
r=A.a([$.tu()],r)
return A.pJ($.uI(),q,null,r)})
s($,"Ck","x9",()=>A.pJ($.uH(),null,null,null))
s($,"Cf","x5",()=>{var r=t.J
return A.A([$.dv(),A.a([$.iy()],r),$.ft(),A.a([$.it()],r)],t.ns,t.p)})
s($,"Cg","x6",()=>A.a([$.uJ(),$.uK(),$.uL()],t.J))
s($,"Cp","mG",()=>A.yV(B.r))
s($,"Co","tr",()=>A.vJ($.d0()))
s($,"Cq","xa",()=>A.vJ($.bA()))
s($,"DB","fu",()=>A.H("unformed"," ",B.u,null).a3())
s($,"DC","dw",()=>A.H("unformed wet","\u2248",B.l,null).a3())
s($,"D1","d0",()=>A.H("open","\xb7",B.i,null).a3())
s($,"Dg","bA",()=>A.H("solid","\u2593",B.i,null).bw())
s($,"D7","d1",()=>A.H("passage","\xb7",B.cQ,null).a3())
s($,"CO","mM",()=>A.H("doorway","\u25cb",B.v,null).a3())
s($,"Dh","dv",()=>A.H("solid wet","\u2248",B.D,null).bw())
s($,"D8","ft",()=>A.H("wet passage","\u2261",B.v,null).a3())
s($,"CR","iu",()=>A.H("flagstone wall","\u2592",B.d,B.i).bw())
s($,"CX","tu",()=>A.H("granite wall","\u2592",B.f,B.l).bw())
s($,"CT","uJ",()=>A.H("granite","\u2593",B.f,B.l).hc(0,B.l,B.u).bw())
s($,"CU","uK",()=>A.H("granite","\u2593",B.f,B.l).hc(0.2,B.l,B.u).bw())
s($,"CV","uL",()=>A.H("granite","\u2593",B.f,B.l).hc(0.4,B.l,B.u).bw())
s($,"CQ","mN",()=>A.H("flagstone floor","\xb7",B.i,null).a3())
s($,"CW","xj",()=>A.H("granite floor","\xb7",B.f,null).a3())
s($,"D5","mO",()=>A.H("open door","\u25cb",B.k,B.av).cn(A.Be()).a3())
s($,"CK","mL",()=>A.H("closed door","\u25d9",B.k,B.av).cn(A.Bh()).jJ())
s($,"D6","xo",()=>A.H("open square door","\u2642",B.k,B.av).cn(A.Bf()).a3())
s($,"CL","uI",()=>A.H("closed square door","\u2640",B.k,B.av).cn(A.Bi()).jJ())
s($,"D2","xn",()=>A.H("open barred door","\u2642",B.d,B.f).cn(A.Bd()).a3())
s($,"CH","uH",()=>A.H("closed barred door","\u266a",B.d,B.f).cn(A.Bg()).cQ($.U().c9(0,$.bM())))
s($,"CD","xe",()=>A.H("burnt floor","\u03c6",B.l,null).a3())
s($,"CE","xf",()=>A.H("burnt floor","\u03b5",B.l,null).a3())
s($,"Dj","uM",()=>A.H("stairs","\u2261",B.t,B.f).c6(B.bg).a3())
s($,"CB","it",()=>A.H("bridge","\u2261",B.k,B.av).a3())
s($,"CS","tt",()=>A.H("moss","\u2591",B.a_,null).eS(128).a3())
s($,"DF","iy",()=>A.H("water","\u2248",B.D,B.B).o2(10,0.5,B.B,B.u).eS(32).cQ($.U().c9(0,$.is())))
s($,"Dl","uN",()=>A.H("stepping stone","\u2022",B.o,B.B).a3())
s($,"CM","xg",()=>A.H("dirt","\xb7",B.v,null).a3())
s($,"CN","xh",()=>A.H("dirt2","\u03c6",B.v,null).a3())
s($,"CY","iv",()=>A.H("grass","\u2591",B.p,null).a3())
s($,"Dx","ix",()=>A.H("tall grass","\u221a",B.p,null).a3())
s($,"Dy","tx",()=>A.H("tree","\u25b2",B.p,B.z).bw())
s($,"Dz","ty",()=>A.H("tree","\u2660",B.p,B.z).bw())
s($,"DA","tz",()=>A.H("tree","\u2663",B.p,B.z).bw())
s($,"D4","tw",()=>A.H("open chest","\u2320",B.k,null).aM())
s($,"CJ","mK",()=>A.H("closed chest","\u2321",B.k,null).cn(new A.r0()).aM())
s($,"CI","mJ",()=>A.H("closed barrel","\xb0",B.k,null).cn(new A.r_()).aM())
s($,"D3","tv",()=>A.H("open barrel","\u2219",B.k,null).aM())
s($,"Dv","mY",()=>A.H("table","\u250c",B.k,null).aM())
s($,"Du","mX",()=>A.H("table","\u2500",B.k,null).aM())
s($,"Dw","mZ",()=>A.H("table","\u2510",B.k,null).aM())
s($,"Dt","mW",()=>A.H("table","\u2502",B.k,null).aM())
s($,"Dp","iw",()=>A.H("table"," ",B.k,null).aM())
s($,"Dn","mR",()=>A.H("table","\u2558",B.k,null).aM())
s($,"Dm","mQ",()=>A.H("table","\u2550",B.k,null).aM())
s($,"Do","mS",()=>A.H("table","\u255b",B.k,null).aM())
s($,"Dr","mU",()=>A.H("table","\u255e",B.k,null).aM())
s($,"Dq","mT",()=>A.H("table","\u2564",B.k,null).aM())
s($,"Ds","mV",()=>A.H("table","\u2561",B.k,null).aM())
s($,"CF","mH",()=>A.H("candle","\u2265",B.E,null).eS(128).aM())
s($,"DE","uO",()=>A.H("wall torch","\u2264",B.h,B.f).eS(192).bw())
s($,"Dk","xw",()=>A.H("statue","P",B.t,B.f).aM())
s($,"CG","mI",()=>A.H("chair","\u03c0",B.k,null).a3())
s($,"CC","xd",()=>A.H("brown jelly stain","\xb7",B.k,null).a3())
s($,"CZ","xk",()=>A.H("gray jelly stain","\xb7",B.l,null).a3())
s($,"D_","xl",()=>A.H("green jelly stain","\xb7",B.y,null).a3())
s($,"D9","xp",()=>A.H("red jelly stain","\xb7",B.m,null).a3())
s($,"DD","xx",()=>A.H("violet jelly stain","\xb7",B.V,null).a3())
s($,"DG","xy",()=>A.H("white jelly stain","\xb7",B.t,null).a3())
s($,"Di","mP",()=>A.H("spiderweb","\xf7",B.f,null).a3())
s($,"CP","xi",()=>A.H("dungeon entrance","\u2261",B.d,B.l).c6(B.cw).a3())
s($,"D0","xm",()=>A.H("home entrance","\u25cb",B.E,null).c6(B.cx).a3())
s($,"Da","xq",()=>A.H("shop entrance","\u25cb",B.M,null).c6(B.cv).a3())
s($,"Db","xr",()=>A.H("shop entrance","\u25cb",B.h,null).c6(B.cu).a3())
s($,"Dc","xs",()=>A.H("shop entrance","\u25cb",B.y,null).c6(B.ct).a3())
s($,"Dd","xt",()=>A.H("shop entrance","\u25cb",B.p,null).c6(B.cs).a3())
s($,"De","xu",()=>A.H("shop entrance","\u25cb",B.a_,null).c6(B.cr).a3())
s($,"Df","xv",()=>A.H("shop entrance","\u25cb",B.J,null).c6(B.cq).a3())
s($,"CA","ts",()=>A.A([$.mO(),30,$.mL(),30,$.it(),50,$.tt(),10,$.iv(),3,$.ix(),3,$.tx(),40,$.ty(),40,$.tz(),40,$.mY(),20,$.mX(),20,$.mZ(),20,$.mW(),20,$.iw(),20,$.mR(),20,$.mQ(),20,$.mS(),20,$.mU(),20,$.mT(),20,$.mV(),20,$.tw(),40,$.mK(),80,$.tv(),15,$.mJ(),40,$.mH(),1,$.mI(),10,$.mP(),1],t.ns,t.S))
s($,"Cz","uG",()=>A.A([$.mO(),70,$.mL(),70,$.it(),50,$.tt(),20,$.iv(),30,$.ix(),50,$.tx(),100,$.ty(),100,$.tz(),100,$.mY(),60,$.mX(),60,$.mZ(),60,$.mW(),60,$.iw(),60,$.mR(),60,$.mQ(),60,$.mS(),60,$.mU(),60,$.mT(),60,$.mV(),60,$.tw(),70,$.mK(),80,$.tv(),30,$.mJ(),40,$.mH(),60,$.mI(),40,$.mP(),20],t.ns,t.S))
s($,"Cy","xc",()=>{var r=$.it(),q=t.J,p=A.a([$.iy()],q),o=$.iv(),n=$.xg(),m=$.xh()
return A.A([r,p,o,A.a([n,m],q),$.ix(),A.a([n,m],q),$.tx(),A.a([n,m],q),$.ty(),A.a([n,m],q),$.tz(),A.a([n,m],q),$.mH(),A.a([$.iw()],q),$.mP(),A.a([$.mN()],q)],t.ns,t.p)})
s($,"BF","aw",()=>A.bZ("none","No",1,null,"",!1,null))
s($,"C_","x_",()=>A.kK("\\[([^|\\]]+)(\\|([^\\]]+))?\\]"))
s($,"Cw","uF",()=>A.yR($.x3().a6(1)))
s($,"Cd","x3",()=>A.yF("something",B.aF,B.w))
s($,"Cc","x2",()=>A.kK("\\[([^|\\]]+)(\\|([^\\]]+))?\\]"))
s($,"Cb","x1",()=>A.kK("^\\(([^)]+)\\)(.*)"))
s($,"Ce","x4",()=>A.yE("you","you","you",B.ck))
s($,"BY","wZ",()=>A.kK("^(\\d{1,3})((\\d{3})+)$"))
s($,"C7","uy",()=>A.kc(0))
s($,"C2","bM",()=>A.kc(1))
s($,"C5","U",()=>A.kc(2))
s($,"C8","is",()=>A.kc(4))
s($,"C9","aX",()=>A.kc(8))
s($,"C3","x0",()=>$.bM().c9(0,$.U()))
s($,"C4","bN",()=>$.bM().c9(0,$.aX()))
s($,"C6","ux",()=>$.U().c9(0,$.aX()))
s($,"C1","uw",()=>$.bM().c9(0,$.U()).c9(0,$.is()).c9(0,$.aX()))
s($,"Cx","xb",()=>{var r=null
return A.z2("uninitialized",r,$.uy(),r,r,r)})
s($,"DU","uR",()=>A.A([B.L,"|",B.Q,"/",B.O,"-",B.P,"\\",B.K,"|",B.S,"/",B.R,"-",B.T,"\\"],t.j,t.N))
s($,"DV","uS",()=>{var r="\u2022",q="Oo",p=".",o=t.bk,n=A.av("r<C<W>>")
return A.A([$.aw(),A.a([A.T(r,A.a([B.E],o)),A.T(r,A.a([B.E],o)),A.T(r,A.a([B.k],o))],n),$.e9(),A.a([A.T(q,A.a([B.t,B.J],o)),A.T(p,A.a([B.J],o)),A.T(p,A.a([B.F],o))],n),$.ds(),A.a([A.T("*%",A.a([B.E,B.h],o)),A.T("*%",A.a([B.k,B.v],o)),A.T("\u2022*",A.a([B.k],o)),A.T(r,A.a([B.v],o))],n),$.b4(),A.a([A.T("\u25b2^",A.a([B.h,B.A],o)),A.T("*^",A.a([B.M],o)),A.T("^",A.a([B.m],o)),A.T("^",A.a([B.v,B.m],o)),A.T(p,A.a([B.v,B.m],o))],n),$.d_(),A.a([A.T(q,A.a([B.J,B.F],o)),A.T("o\u2022^",A.a([B.F,B.D],o)),A.T("\u2022^",A.a([B.D,B.B],o)),A.T("^~",A.a([B.D,B.B],o)),A.T("~",A.a([B.B],o)),A.T(p,A.a([B.B,B.an],o))],n),$.dr(),A.a([A.T(q,A.a([B.A,B.h],o)),A.T("o\u2022~",A.a([B.y,B.h],o)),A.T(":,",A.a([B.y,B.ac],o)),A.T(p,A.a([B.y],o))],n),$.c9(),A.a([A.T("*",A.a([B.t],o)),A.T("+x",A.a([B.J,B.t],o)),A.T("+x",A.a([B.F,B.o],o)),A.T(p,A.a([B.f,B.B],o))],n),$.dt(),A.a([A.T("*",A.a([B.N],o)),A.T("-|\\/",A.a([B.V,B.t],o)),A.T(p,A.a([B.u,B.u,B.u,B.N],o))],n),$.bz(),A.a([A.T(q,A.a([B.ad,B.y],o)),A.T("o\u2022",A.a([B.p,B.p,B.ac],o)),A.T(r,A.a([B.z,B.ac],o)),A.T(p,A.a([B.z],o))],n),$.cY(),A.a([A.T("*%",A.a([B.u,B.u,B.l],o)),A.T(r,A.a([B.u,B.u,B.o],o)),A.T(p,A.a([B.u],o)),A.T(p,A.a([B.u],o))],n),$.cZ(),A.a([A.T("*",A.a([B.t],o)),A.T("x+",A.a([B.t,B.A],o)),A.T(":;\"'`,",A.a([B.A,B.h],o)),A.T(p,A.a([B.o,B.A],o))],n),$.du(),A.a([A.T("Oo*+",A.a([B.N,B.o],o)),A.T("o+",A.a([B.V,B.p],o)),A.T("\u2022.",A.a([B.an,B.z,B.z],o))],n)],t.h,A.av("C<C<W>>"))})
s($,"BT","wU",()=>A.am("!",B.a_,null))
s($,"BX","wY",()=>A.am("/",B.J,null))
s($,"BS","wT",()=>A.am("\\",B.J,null))
s($,"BU","wV",()=>A.am("-",B.a_,null))
s($,"BW","wX",()=>A.am("<",B.a_,null))
s($,"BV","wW",()=>A.am(">",B.a_,null))
s($,"Cr","uA",()=>A.A([$.e9(),"A",$.ds(),"E",$.b4(),"F",$.d_(),"W",$.dr(),"A",$.c9(),"C",$.dt(),"L",$.bz(),"P",$.cY(),"D",$.cZ(),"L",$.du(),"S"],t.h,t.N))
s($,"E1","m",()=>new A.q6(A.yS(A.vD())))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.eJ,SharedArrayBuffer:A.eJ,ArrayBufferView:A.hc,DataView:A.kf,Float32Array:A.kg,Float64Array:A.kh,Int16Array:A.ki,Int32Array:A.kj,Int8Array:A.kk,Uint16Array:A.kl,Uint32Array:A.km,Uint8ClampedArray:A.hd,CanvasPixelArray:A.hd,Uint8Array:A.kn})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.eK.$nativeSuperclassTag="ArrayBufferView"
A.i0.$nativeSuperclassTag="ArrayBufferView"
A.i1.$nativeSuperclassTag="ArrayBufferView"
A.ha.$nativeSuperclassTag="ArrayBufferView"
A.i2.$nativeSuperclassTag="ArrayBufferView"
A.i3.$nativeSuperclassTag="ArrayBufferView"
A.hb.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.B2
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.dart.js.map
