(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const zr=()=>{};var cs={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(n,e){if(!n)throw Oe(e)},Oe=function(n){return new Error("Firebase Database ("+oi.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Gr=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Tn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),s.push(t[u],t[d],t[h],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ai(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Gr(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const d=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new qr;const h=r<<2|a>>4;if(s.push(h),c!==64){const f=a<<4&240|c>>2;if(s.push(f),d!==64){const m=c<<6&192|d;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class qr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const li=function(n){const e=ai(n);return Tn.encodeByteArray(e,!0)},Ct=function(n){return li(n).replace(/\./g,"")},un=function(n){try{return Tn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(n){return ci(void 0,n)}function ci(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Kr(t)||(n[t]=ci(n[t],e[t]));return n}function Kr(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=()=>Yr().__FIREBASE_DEFAULTS__,Xr=()=>{if(typeof process>"u"||typeof cs>"u")return;const n=cs.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Jr=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&un(n[1]);return e&&JSON.parse(e)},di=()=>{try{return zr()||Qr()||Xr()||Jr()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Zr=n=>{var e,t;return(t=(e=di())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},eo=n=>{const e=Zr(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ui=()=>{var n;return(n=di())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ct(JSON.stringify(t)),Ct(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(no())}function so(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function io(){return oi.NODE_ADMIN===!0}function ro(){try{return typeof indexedDB=="object"}catch{return!1}}function oo(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="FirebaseError";class dt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ao,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fi.prototype.create)}}class fi{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?lo(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new dt(i,a,s)}}function lo(n,e){return n.replace(co,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const co=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(n){return JSON.parse(n)}function D(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Ze(un(r[0])||""),t=Ze(un(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},uo=function(n){const e=pi(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ho=function(n){const e=pi(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ke(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ds(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wt(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function bt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(us(r)&&us(o)){if(!bt(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function us(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)s[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function xn(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,p(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ut=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(n){return n&&n._delegate?n._delegate:n}class et{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Wt;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yo(e))try{this.getOrInitializeService({instanceIdentifier:_e})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=_e){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_e){return this.instances.has(e)}getOptions(e=_e){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:go(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=_e){return this.component?this.component.multipleInstances?e:_e:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function go(n){return n===_e?void 0:n}function yo(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var I;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(I||(I={}));const Eo={debug:I.DEBUG,verbose:I.VERBOSE,info:I.INFO,warn:I.WARN,error:I.ERROR,silent:I.SILENT},Co=I.INFO,wo={[I.DEBUG]:"log",[I.VERBOSE]:"log",[I.INFO]:"info",[I.WARN]:"warn",[I.ERROR]:"error"},bo=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=wo[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mi{constructor(e){this.name=e,this._logLevel=Co,this._logHandler=bo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in I))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Eo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,I.DEBUG,...e),this._logHandler(this,I.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,I.VERBOSE,...e),this._logHandler(this,I.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,I.INFO,...e),this._logHandler(this,I.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,I.WARN,...e),this._logHandler(this,I.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,I.ERROR,...e),this._logHandler(this,I.ERROR,...e)}}const Io=(n,e)=>e.some(t=>n instanceof t);let hs,fs;function No(){return hs||(hs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function So(){return fs||(fs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _i=new WeakMap,hn=new WeakMap,gi=new WeakMap,Xt=new WeakMap,Rn=new WeakMap;function To(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(le(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&_i.set(t,n)}).catch(()=>{}),Rn.set(e,n),e}function xo(n){if(hn.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});hn.set(n,e)}let fn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return hn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gi.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return le(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ro(n){fn=n(fn)}function ko(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Jt(this),e,...t);return gi.set(s,e.sort?e.sort():[e]),le(s)}:So().includes(n)?function(...e){return n.apply(Jt(this),e),le(_i.get(this))}:function(...e){return le(n.apply(Jt(this),e))}}function Ao(n){return typeof n=="function"?ko(n):(n instanceof IDBTransaction&&xo(n),Io(n,No())?new Proxy(n,fn):n)}function le(n){if(n instanceof IDBRequest)return To(n);if(Xt.has(n))return Xt.get(n);const e=Ao(n);return e!==n&&(Xt.set(n,e),Rn.set(e,n)),e}const Jt=n=>Rn.get(n);function Do(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=le(o);return s&&o.addEventListener("upgradeneeded",l=>{s(le(o.result),l.oldVersion,l.newVersion,le(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Po=["get","getKey","getAll","getAllKeys","count"],Oo=["put","add","delete","clear"],Zt=new Map;function ps(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Zt.get(e))return Zt.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Oo.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Po.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Zt.set(e,r),r}Ro(n=>({...n,get:(e,t,s)=>ps(e,t)||n.get(e,t,s),has:(e,t)=>!!ps(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Lo(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Lo(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pn="@firebase/app",ms="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=new mi("@firebase/app"),Fo="@firebase/app-compat",Bo="@firebase/analytics-compat",Wo="@firebase/analytics",Uo="@firebase/app-check-compat",Ho="@firebase/app-check",Vo="@firebase/auth",$o="@firebase/auth-compat",zo="@firebase/database",Go="@firebase/data-connect",qo="@firebase/database-compat",jo="@firebase/functions",Ko="@firebase/functions-compat",Yo="@firebase/installations",Qo="@firebase/installations-compat",Xo="@firebase/messaging",Jo="@firebase/messaging-compat",Zo="@firebase/performance",ea="@firebase/performance-compat",ta="@firebase/remote-config",na="@firebase/remote-config-compat",sa="@firebase/storage",ia="@firebase/storage-compat",ra="@firebase/firestore",oa="@firebase/vertexai",aa="@firebase/firestore-compat",la="firebase",ca="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="[DEFAULT]",da={[pn]:"fire-core",[Fo]:"fire-core-compat",[Wo]:"fire-analytics",[Bo]:"fire-analytics-compat",[Ho]:"fire-app-check",[Uo]:"fire-app-check-compat",[Vo]:"fire-auth",[$o]:"fire-auth-compat",[zo]:"fire-rtdb",[Go]:"fire-data-connect",[qo]:"fire-rtdb-compat",[jo]:"fire-fn",[Ko]:"fire-fn-compat",[Yo]:"fire-iid",[Qo]:"fire-iid-compat",[Xo]:"fire-fcm",[Jo]:"fire-fcm-compat",[Zo]:"fire-perf",[ea]:"fire-perf-compat",[ta]:"fire-rc",[na]:"fire-rc-compat",[sa]:"fire-gcs",[ia]:"fire-gcs-compat",[ra]:"fire-fst",[aa]:"fire-fst-compat",[oa]:"fire-vertex","fire-js":"fire-js",[la]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new Map,ua=new Map,_n=new Map;function _s(n,e){try{n.container.addComponent(e)}catch(t){ne.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Nt(n){const e=n.name;if(_n.has(e))return ne.debug(`There were multiple attempts to register component ${e}.`),!1;_n.set(e,n);for(const t of It.values())_s(t,n);for(const t of ua.values())_s(t,n);return!0}function ha(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function fa(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ce=new fi("app","Firebase",pa);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ce.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=ca;function yi(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:mn,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ce.create("bad-app-name",{appName:String(i)});if(t||(t=ui()),!t)throw ce.create("no-options");const r=It.get(i);if(r){if(bt(t,r.options)&&bt(s,r.config))return r;throw ce.create("duplicate-app",{appName:i})}const o=new vo(i);for(const l of _n.values())o.addComponent(l);const a=new ma(t,s,o);return It.set(i,a),a}function ga(n=mn){const e=It.get(n);if(!e&&n===mn&&ui())return yi();if(!e)throw ce.create("no-app",{appName:n});return e}function Te(n,e,t){var s;let i=(s=da[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ne.warn(a.join(" "));return}Nt(new et(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="firebase-heartbeat-database",va=1,tt="firebase-heartbeat-store";let en=null;function vi(){return en||(en=Do(ya,va,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(tt)}catch(t){console.warn(t)}}}}).catch(n=>{throw ce.create("idb-open",{originalErrorMessage:n.message})})),en}async function Ea(n){try{const t=(await vi()).transaction(tt),s=await t.objectStore(tt).get(Ei(n));return await t.done,s}catch(e){if(e instanceof dt)ne.warn(e.message);else{const t=ce.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ne.warn(t.message)}}}async function gs(n,e){try{const s=(await vi()).transaction(tt,"readwrite");await s.objectStore(tt).put(e,Ei(n)),await s.done}catch(t){if(t instanceof dt)ne.warn(t.message);else{const s=ce.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ne.warn(s.message)}}}function Ei(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=1024,wa=30;class ba{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Na(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ys();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>wa){const o=Sa(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ne.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ys(),{heartbeatsToSend:s,unsentEntries:i}=Ia(this._heartbeatsCache.heartbeats),r=Ct(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return ne.warn(t),""}}}function ys(){return new Date().toISOString().substring(0,10)}function Ia(n,e=Ca){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),vs(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),vs(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Na{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ro()?oo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ea(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return gs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return gs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vs(n){return Ct(JSON.stringify({version:2,heartbeats:n})).length}function Sa(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(n){Nt(new et("platform-logger",e=>new Mo(e),"PRIVATE")),Nt(new et("heartbeat",e=>new ba(e),"PRIVATE")),Te(pn,ms,n),Te(pn,ms,"esm2017"),Te("fire-js","")}Ta("");var Es={};const Cs="@firebase/database",ws="1.0.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci="";function xa(n){Ci=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),D(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ze(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return re(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ra(e)}}catch{}return new ka},ye=wi("localStorage"),Aa=wi("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=new mi("@firebase/database"),Da=function(){let n=1;return function(){return n++}}(),bi=function(n){const e=mo(n),t=new po;t.update(e);const s=t.digest();return Tn.encodeByteArray(s)},ut=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ut.apply(null,s):typeof s=="object"?e+=D(s):e+=s,e+=" "}return e};let je=null,bs=!0;const Pa=function(n,e){p(!0,"Can't turn on custom loggers persistently."),xe.logLevel=I.VERBOSE,je=xe.log.bind(xe)},U=function(...n){if(bs===!0&&(bs=!1,je===null&&Aa.get("logging_enabled")===!0&&Pa()),je){const e=ut.apply(null,n);je(e)}},ht=function(n){return function(...e){U(n,...e)}},gn=function(...n){const e="FIREBASE INTERNAL ERROR: "+ut(...n);xe.error(e)},se=function(...n){const e=`FIREBASE FATAL ERROR: ${ut(...n)}`;throw xe.error(e),new Error(e)},$=function(...n){const e="FIREBASE WARNING: "+ut(...n);xe.warn(e)},Oa=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&$("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ii=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Ma=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ae="[MIN_NAME]",Ee="[MAX_NAME]",Le=function(n,e){if(n===e)return 0;if(n===Ae||e===Ee)return-1;if(e===Ae||n===Ee)return 1;{const t=Is(n),s=Is(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},La=function(n,e){return n===e?0:n<e?-1:1},Ve=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+D(e))},kn=function(n){if(typeof n!="object"||n===null)return D(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=D(e[s]),t+=":",t+=kn(n[e[s]]);return t+="}",t},Ni=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function z(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Si=function(n){p(!Ii(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Fa=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ba=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Wa(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Ua=new RegExp("^-?(0*)\\d{1,10}$"),Ha=-2147483648,Va=2147483647,Is=function(n){if(Ua.test(n)){const e=Number(n);if(e>=Ha&&e<=Va)return e}return null},Fe=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw $("Exception was thrown by user callback.",t),e},Math.floor(0))}},$a=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ke=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,fa(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){$(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(U("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$(e)}}class vt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}vt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An="5",Ti="v",xi="s",Ri="r",ki="f",Ai=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Di="ls",Pi="p",yn="ac",Oi="websocket",Mi="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ye.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ye.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function qa(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Fi(n,e,t){p(typeof e=="string","typeof type must == string"),p(typeof t=="object","typeof params must == object");let s;if(e===Oi)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Mi)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qa(n)&&(t.ns=n.namespace);const i=[];return z(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(){this.counters_={}}incrementCounter(e,t=1){re(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return jr(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn={},nn={};function Dn(n){const e=n.toString();return tn[e]||(tn[e]=new ja),tn[e]}function Ka(n,e){const t=n.toString();return nn[t]||(nn[t]=e()),nn[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Fe(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="start",Qa="close",Xa="pLPCommand",Ja="pRTLPCB",Bi="id",Wi="pw",Ui="ser",Za="cb",el="seg",tl="ts",nl="d",sl="dframe",Hi=1870,Vi=30,il=Hi-Vi,rl=25e3,ol=3e4;class Se{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ht(e),this.stats_=Dn(t),this.urlFn=l=>(this.appCheckToken&&(l[yn]=this.appCheckToken),Fi(t,Mi,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ya(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ol)),Ma(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pn((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ns)this.id=a,this.password=l;else if(o===Qa)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ns]="t",s[Ui]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Za]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ti]=An,this.transportSessionId&&(s[xi]=this.transportSessionId),this.lastSessionId&&(s[Di]=this.lastSessionId),this.applicationId&&(s[Pi]=this.applicationId),this.appCheckToken&&(s[yn]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ai.test(location.hostname)&&(s[Ri]=ki);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Se.forceAllow_=!0}static forceDisallow(){Se.forceDisallow_=!0}static isAvailable(){return Se.forceAllow_?!0:!Se.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Fa()&&!Ba()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=D(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=li(t),i=Ni(s,il);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[sl]="t",s[Bi]=e,s[Wi]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=D(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Pn{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Da(),window[Xa+this.uniqueCallbackIdentifier]=e,window[Ja+this.uniqueCallbackIdentifier]=t,this.myIFrame=Pn.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){U("frame writing exception"),a.stack&&U(a.stack),U(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||U("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Bi]=this.myID,e[Wi]=this.myPW,e[Ui]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Vi+s.length<=Hi;){const o=this.pendingSegs.shift();s=s+"&"+el+i+"="+o.seg+"&"+tl+i+"="+o.ts+"&"+nl+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(rl)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{U("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=16384,ll=45e3;let St=null;typeof MozWebSocket<"u"?St=MozWebSocket:typeof WebSocket<"u"&&(St=WebSocket);class q{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ht(this.connId),this.stats_=Dn(t),this.connURL=q.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Ti]=An,typeof location<"u"&&location.hostname&&Ai.test(location.hostname)&&(o[Ri]=ki),t&&(o[xi]=t),s&&(o[Di]=s),i&&(o[yn]=i),r&&(o[Pi]=r),Fi(e,Oi,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ye.set("previous_websocket_failure",!0);try{let s;io(),this.mySock=new St(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){q.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&St!==null&&!q.forceDisallow_}static previouslyFailed(){return ye.isInMemoryStorage||ye.get("previous_websocket_failure")===!0}markConnectionHealthy(){ye.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Ze(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=D(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ni(t,al);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ll))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}q.responsesRequiredToBeHealthy=2;q.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{static get ALL_TRANSPORTS(){return[Se,q]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=q&&q.isAvailable();let s=t&&!q.previouslyFailed();if(e.webSocketOnly&&(t||$("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[q];else{const i=this.transports_=[];for(const r of nt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);nt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}nt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=6e4,dl=5e3,ul=10*1024,hl=100*1024,sn="t",Ss="d",fl="s",Ts="r",pl="e",xs="o",Rs="a",ks="n",As="p",ml="h";class _l{constructor(e,t,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ht("c:"+this.id+":"),this.transportManager_=new nt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ke(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>hl?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ul?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sn in e){const t=e[sn];t===Rs?this.upgradeIfSecondaryHealthy_():t===Ts?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===xs&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ve("t",e),s=Ve("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:As,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Rs,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ks,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ve("t",e),s=Ve("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ve(sn,e);if(Ss in e){const s=e[Ss];if(t===ml){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===ks){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===fl?this.onConnectionShutdown_(s):t===Ts?this.onReset_(s):t===pl?gn("Server Error: "+s):t===xs?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):gn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),An!==s&&$("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Ke(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(cl))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ke(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(dl))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:As,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ye.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends zi{static getInstance(){return new Tt}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hi()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=32,Ps=768;class b{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function C(){return new b("")}function E(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function he(n){return n.pieces_.length-n.pieceNum_}function N(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new b(n.pieces_,e)}function Gi(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function gl(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function qi(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ji(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new b(e,0)}function P(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof b)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new b(t,0)}function v(n){return n.pieceNum_>=n.pieces_.length}function H(n,e){const t=E(n),s=E(e);if(t===null)return e;if(t===s)return H(N(n),N(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Ki(n,e){if(he(n)!==he(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function j(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(he(n)>he(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class yl{constructor(e,t){this.errorPrefix_=t,this.parts_=qi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ut(this.parts_[s]);Yi(this)}}function vl(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ut(e),Yi(n)}function El(n){const e=n.parts_.pop();n.byteLength_-=Ut(e),n.parts_.length>0&&(n.byteLength_-=1)}function Yi(n){if(n.byteLength_>Ps)throw new Error(n.errorPrefix_+"has a key path longer than "+Ps+" bytes ("+n.byteLength_+").");if(n.parts_.length>Ds)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ds+") or object contains a cycle "+ge(n))}function ge(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends zi{static getInstance(){return new On}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=1e3,Cl=60*5*1e3,Os=30*1e3,wl=1.3,bl=3e4,Il="server_kill",Ms=3;class ee extends $i{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ee.nextPersistentConnectionId_++,this.log_=ht("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$e,this.maxReconnectDelay_=Cl,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");On.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Tt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(D(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Wt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ee.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&re(e,"w")){const s=ke(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();$(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ho(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Os)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=uo(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+D(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):gn("Unrecognized action received from server: "+D(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$e,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=$e,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>bl&&(this.reconnectDelay_=$e),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wl)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ee.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){p(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?U("getToken() completed but was canceled"):(U("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new _l(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{$(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Il)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&$(d),l())}}}interrupt(e){U("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){U("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ds(this.interruptReasons_)&&(this.reconnectDelay_=$e,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>kn(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new b(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){U("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ms&&(this.reconnectDelay_=Os,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){U("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ms&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ci.replace(/\./g,"-")]=1,hi()?e["framework.cordova"]=1:so()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Tt.getInstance().currentlyOnline();return ds(this.interruptReasons_)&&e}}ee.nextPersistentConnectionId_=0;ee.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new y(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new y(Ae,e),i=new y(Ae,t);return this.compare(s,i)!==0}minPost(){return y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gt;class Qi extends Ht{static get __EMPTY_NODE(){return gt}static set __EMPTY_NODE(e){gt=e}compare(e,t){return Le(e.name,t.name)}isDefinedOn(e){throw Oe("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return y.MIN}maxPost(){return new y(Ee,gt)}makePost(e,t){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new y(e,gt)}toString(){return".key"}}const Re=new Qi;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class L{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??L.RED,this.left=i??V.EMPTY_NODE,this.right=r??V.EMPTY_NODE}copy(e,t,s,i,r){return new L(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return V.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return V.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,L.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,L.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}L.RED=!0;L.BLACK=!1;class Nl{copy(e,t,s,i,r){return this}insert(e,t,s){return new L(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class V{constructor(e,t=V.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new V(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,L.BLACK,null,null))}remove(e){return new V(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,L.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new yt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new yt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new yt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new yt(this.root_,null,this.comparator_,!0,e)}}V.EMPTY_NODE=new Nl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(n,e){return Le(n.name,e.name)}function Mn(n,e){return Le(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vn;function Tl(n){vn=n}const Xi=function(n){return typeof n=="number"?"number:"+Si(n):"string:"+n},Ji=function(n){if(n.isLeafNode()){const e=n.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&re(e,".sv"),"Priority must be a string or number.")}else p(n===vn||n.isEmpty(),"priority of unexpected type.");p(n===vn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls;class M{static set __childrenNodeConstructor(e){Ls=e}static get __childrenNodeConstructor(){return Ls}constructor(e,t=M.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ji(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new M(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:M.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return v(e)?this:E(e)===".priority"?this.priorityNode_:M.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:M.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=E(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(p(s!==".priority"||he(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,M.__childrenNodeConstructor.EMPTY_NODE.updateChild(N(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xi(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Si(this.value_):e+=this.value_,this.lazyHash_=bi(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===M.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof M.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=M.VALUE_TYPE_ORDER.indexOf(t),r=M.VALUE_TYPE_ORDER.indexOf(s);return p(i>=0,"Unknown leaf type: "+t),p(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}M.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi,er;function xl(n){Zi=n}function Rl(n){er=n}class kl extends Ht{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Le(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return y.MIN}maxPost(){return new y(Ee,new M("[PRIORITY-POST]",er))}makePost(e,t){const s=Zi(e);return new y(t,new M("[PRIORITY-POST]",s))}toString(){return".priority"}}const R=new kl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=Math.log(2);class Dl{constructor(e){const t=r=>parseInt(Math.log(r)/Al,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const xt=function(n,e,t,s){n.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=n[l],h=t?t(d):d,new L(h,d.node,L.BLACK,null,null);{const f=parseInt(u/2,10)+l,m=i(l,f),g=i(f+1,c);return d=n[f],h=t?t(d):d,new L(h,d.node,L.BLACK,m,g)}},r=function(l){let c=null,u=null,d=n.length;const h=function(m,g){const w=d-m,k=d;d-=m;const A=i(w+1,k),G=n[w],He=t?t(G):G;f(new L(He,G.node,g,null,A))},f=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const g=l.nextBitIsOne(),w=Math.pow(2,l.count-(m+1));g?h(w,L.BLACK):(h(w,L.BLACK),h(w,L.RED))}return u},o=new Dl(n.length),a=r(o);return new V(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rn;const Ie={};class Z{static get Default(){return p(Ie&&R,"ChildrenNode.ts has not been loaded"),rn=rn||new Z({".priority":Ie},{".priority":R}),rn}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ke(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof V?t:null}hasIndex(e){return re(this.indexSet_,e.toString())}addIndex(e,t){p(e!==Re,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(y.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=xt(s,e.getCompare()):a=Ie;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Z(u,c)}addToIndexes(e,t){const s=wt(this.indexes_,(i,r)=>{const o=ke(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),i===Ie)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),xt(a,o.getCompare())}else return Ie;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new y(e.name,a))),l.insert(e,e.node)}});return new Z(s,this.indexSet_)}removeFromIndexes(e,t){const s=wt(this.indexes_,i=>{if(i===Ie)return i;{const r=t.get(e.name);return r?i.remove(new y(e.name,r)):i}});return new Z(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ze;class _{static get EMPTY_NODE(){return ze||(ze=new _(new V(Mn),null,Z.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ji(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ze}updatePriority(e){return this.children_.isEmpty()?this:new _(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ze:t}}getChild(e){const t=E(e);return t===null?this:this.getImmediateChild(t).getChild(N(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(p(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new y(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ze:this.priorityNode_;return new _(i,o,r)}}updateChild(e,t){const s=E(e);if(s===null)return t;{p(E(e)!==".priority"||he(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(N(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(R,(o,a)=>{t[o]=a.val(e),s++,r&&_.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xi(this.getPriority().val())+":"),this.forEachChild(R,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":bi(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new y(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new y(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new y(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,y.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,y.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ft?-1:0}withIndex(e){if(e===Re||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new _(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Re||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(R),i=t.getIterator(R);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Re?null:this.indexMap_.get(e.toString())}}_.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Pl extends _{constructor(){super(new V(Mn),_.EMPTY_NODE,Z.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return _.EMPTY_NODE}isEmpty(){return!1}}const ft=new Pl;Object.defineProperties(y,{MIN:{value:new y(Ae,_.EMPTY_NODE)},MAX:{value:new y(Ee,ft)}});Qi.__EMPTY_NODE=_.EMPTY_NODE;M.__childrenNodeConstructor=_;Tl(ft);Rl(ft);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=!0;function F(n,e=null){if(n===null)return _.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new M(t,F(e))}if(!(n instanceof Array)&&Ol){const t=[];let s=!1;if(z(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=F(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new y(o,l)))}}),t.length===0)return _.EMPTY_NODE;const r=xt(t,Sl,o=>o.name,Mn);if(s){const o=xt(t,R.getCompare());return new _(r,F(e),new Z({".priority":o},{".priority":R}))}else return new _(r,F(e),Z.Default)}else{let t=_.EMPTY_NODE;return z(n,(s,i)=>{if(re(n,s)&&s.substring(0,1)!=="."){const r=F(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(F(e))}}xl(F);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml extends Ht{constructor(e){super(),this.indexPath_=e,p(!v(e)&&E(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Le(e.name,t.name):r}makePost(e,t){const s=F(e),i=_.EMPTY_NODE.updateChild(this.indexPath_,s);return new y(t,i)}maxPost(){const e=_.EMPTY_NODE.updateChild(this.indexPath_,ft);return new y(Ee,e)}toString(){return qi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends Ht{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Le(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return y.MIN}maxPost(){return y.MAX}makePost(e,t){const s=F(e);return new y(t,s)}toString(){return".value"}}const Fl=new Ll;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(n){return{type:"value",snapshotNode:n}}function De(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function st(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function it(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Bl(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(st(t,a)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(De(t,s)):o.trackChildChange(it(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(R,(i,r)=>{t.hasChild(i)||s.trackChildChange(st(i,r))}),t.isLeafNode()||t.forEachChild(R,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(it(i,r,o))}else s.trackChildChange(De(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?_.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.indexedFilter_=new Ln(e.getIndex()),this.index_=e.getIndex(),this.startPost_=rt.getStartPost_(e),this.endPost_=rt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new y(t,s))||(s=_.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=_.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(_.EMPTY_NODE);const r=this;return t.forEachChild(R,(o,a)=>{r.matches(new y(o,a))||(i=i.updateImmediateChild(o,_.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new rt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new y(t,s))||(s=_.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=_.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=_.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(_.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,_.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;p(a.numChildren()===this.limit_,"");const l=new y(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(it(t,s,d)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(st(t,d));const g=a.updateImmediateChild(t,_.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(De(h.name,h.node)),g.updateImmediateChild(h.name,h.node)):g}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(st(c.name,c.node)),r.trackChildChange(De(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,_.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=R}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ae}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ee}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===R}copy(){const e=new Fn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ul(n){return n.loadsAllData()?new Ln(n.getIndex()):n.hasLimit()?new Wl(n):new rt(n)}function Fs(n){const e={};if(n.isDefault())return e;let t;if(n.index_===R?t="$priority":n.index_===Fl?t="$value":n.index_===Re?t="$key":(p(n.index_ instanceof Ml,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=D(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=D(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+D(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=D(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+D(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Bs(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==R&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends $i{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ht("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Rt.getListenId_(e,s),a={};this.listens_[o]=a;const l=Fs(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),ke(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,t){const s=Rt.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Fs(e._queryParams),s=e._path.toString(),i=new Wt;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fo(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ze(a.responseText)}catch{$("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&$("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.rootNode_=_.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return{value:null,children:new Map}}function nr(n,e,t){if(v(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=E(e);n.children.has(s)||n.children.set(s,kt());const i=n.children.get(s);e=N(e),nr(i,e,t)}}function En(n,e,t){n.value!==null?t(e,n.value):Vl(n,(s,i)=>{const r=new b(e.toString()+"/"+s);En(i,r,t)})}function Vl(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&z(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=10*1e3,zl=30*1e3,Gl=5*60*1e3;class ql{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new $l(e);const s=Ws+(zl-Ws)*Math.random();Ke(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;z(e,(i,r)=>{r>0&&re(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Ke(this.reportStats_.bind(this),Math.floor(Math.random()*2*Gl))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(K||(K={}));function sr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Bn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wn(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=K.ACK_USER_WRITE,this.source=sr()}operationForChild(e){if(v(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new b(e));return new At(C(),t,this.revert)}}else return p(E(this.path)===e,"operationForChild called for unrelated child."),new At(N(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t){this.source=e,this.path=t,this.type=K.LISTEN_COMPLETE}operationForChild(e){return v(this.path)?new ot(this.source,C()):new ot(this.source,N(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=K.OVERWRITE}operationForChild(e){return v(this.path)?new Ce(this.source,C(),this.snap.getImmediateChild(e)):new Ce(this.source,N(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=K.MERGE}operationForChild(e){if(v(this.path)){const t=this.children.subtree(new b(e));return t.isEmpty()?null:t.value?new Ce(this.source,C(),t.value):new at(this.source,C(),t)}else return p(E(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new at(this.source,N(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(v(e))return this.isFullyInitialized()&&!this.filtered_;const t=E(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Kl(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Bl(o.childName,o.snapshotNode))}),Ge(n,i,"child_removed",e,s,t),Ge(n,i,"child_added",e,s,t),Ge(n,i,"child_moved",r,s,t),Ge(n,i,"child_changed",e,s,t),Ge(n,i,"value",e,s,t),i}function Ge(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>Ql(n,a,l)),o.forEach(a=>{const l=Yl(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Yl(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Ql(n,e,t){if(e.childName==null||t.childName==null)throw Oe("Should only compare child_ events.");const s=new y(e.childName,e.snapshotNode),i=new y(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n,e){return{eventCache:n,serverCache:e}}function Ye(n,e,t,s){return Vt(new fe(e,t,s),n.serverCache)}function ir(n,e,t,s){return Vt(n.eventCache,new fe(e,t,s))}function Dt(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function we(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let on;const Xl=()=>(on||(on=new V(La)),on);class S{static fromObject(e){let t=new S(null);return z(e,(s,i)=>{t=t.set(new b(s),i)}),t}constructor(e,t=Xl()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:C(),value:this.value};if(v(e))return null;{const s=E(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(N(e),t);return r!=null?{path:P(new b(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(v(e))return this;{const t=E(e),s=this.children.get(t);return s!==null?s.subtree(N(e)):new S(null)}}set(e,t){if(v(e))return new S(t,this.children);{const s=E(e),r=(this.children.get(s)||new S(null)).set(N(e),t),o=this.children.insert(s,r);return new S(this.value,o)}}remove(e){if(v(e))return this.children.isEmpty()?new S(null):new S(null,this.children);{const t=E(e),s=this.children.get(t);if(s){const i=s.remove(N(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new S(null):new S(this.value,r)}else return this}}get(e){if(v(e))return this.value;{const t=E(e),s=this.children.get(t);return s?s.get(N(e)):null}}setTree(e,t){if(v(e))return t;{const s=E(e),r=(this.children.get(s)||new S(null)).setTree(N(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new S(this.value,o)}}fold(e){return this.fold_(C(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(P(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,C(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(v(e))return null;{const r=E(e),o=this.children.get(r);return o?o.findOnPath_(N(e),P(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,C(),t)}foreachOnPath_(e,t,s){if(v(e))return this;{this.value&&s(t,this.value);const i=E(e),r=this.children.get(i);return r?r.foreachOnPath_(N(e),P(t,i),s):new S(null)}}foreach(e){this.foreach_(C(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(P(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.writeTree_=e}static empty(){return new Y(new S(null))}}function Qe(n,e,t){if(v(e))return new Y(new S(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=H(i,e);return r=r.updateChild(o,t),new Y(n.writeTree_.set(i,r))}else{const i=new S(t),r=n.writeTree_.setTree(e,i);return new Y(r)}}}function Us(n,e,t){let s=n;return z(t,(i,r)=>{s=Qe(s,P(e,i),r)}),s}function Hs(n,e){if(v(e))return Y.empty();{const t=n.writeTree_.setTree(e,new S(null));return new Y(t)}}function Cn(n,e){return be(n,e)!=null}function be(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(H(t.path,e)):null}function Vs(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(R,(s,i)=>{e.push(new y(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new y(s,i.value))}),e}function de(n,e){if(v(e))return n;{const t=be(n,e);return t!=null?new Y(new S(t)):new Y(n.writeTree_.subtree(e))}}function wn(n){return n.writeTree_.isEmpty()}function Pe(n,e){return rr(C(),n.writeTree_,e)}function rr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=rr(P(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(P(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(n,e){return cr(e,n)}function Jl(n,e,t,s,i){p(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Qe(n.visibleWrites,e,t)),n.lastWriteId=s}function Zl(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function ec(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);p(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&tc(a,s.path)?i=!1:j(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return nc(n),!0;if(s.snap)n.visibleWrites=Hs(n.visibleWrites,s.path);else{const a=s.children;z(a,l=>{n.visibleWrites=Hs(n.visibleWrites,P(s.path,l))})}return!0}else return!1}function tc(n,e){if(n.snap)return j(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&j(P(n.path,t),e))return!0;return!1}function nc(n){n.visibleWrites=or(n.allWrites,sc,C()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function sc(n){return n.visible}function or(n,e,t){let s=Y.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)j(t,o)?(a=H(t,o),s=Qe(s,a,r.snap)):j(o,t)&&(a=H(o,t),s=Qe(s,C(),r.snap.getChild(a)));else if(r.children){if(j(t,o))a=H(t,o),s=Us(s,a,r.children);else if(j(o,t))if(a=H(o,t),v(a))s=Us(s,C(),r.children);else{const l=ke(r.children,E(a));if(l){const c=l.getChild(N(a));s=Qe(s,C(),c)}}}else throw Oe("WriteRecord should have .snap or .children")}}return s}function ar(n,e,t,s,i){if(!s&&!i){const r=be(n.visibleWrites,e);if(r!=null)return r;{const o=de(n.visibleWrites,e);if(wn(o))return t;if(t==null&&!Cn(o,C()))return null;{const a=t||_.EMPTY_NODE;return Pe(o,a)}}}else{const r=de(n.visibleWrites,e);if(!i&&wn(r))return t;if(!i&&t==null&&!Cn(r,C()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(j(c.path,e)||j(e,c.path))},a=or(n.allWrites,o,e),l=t||_.EMPTY_NODE;return Pe(a,l)}}}function ic(n,e,t){let s=_.EMPTY_NODE;const i=be(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(R,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=de(n.visibleWrites,e);return t.forEachChild(R,(o,a)=>{const l=Pe(de(r,new b(o)),a);s=s.updateImmediateChild(o,l)}),Vs(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=de(n.visibleWrites,e);return Vs(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function rc(n,e,t,s,i){p(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=P(e,t);if(Cn(n.visibleWrites,r))return null;{const o=de(n.visibleWrites,r);return wn(o)?i.getChild(t):Pe(o,i.getChild(t))}}function oc(n,e,t,s){const i=P(e,t),r=be(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=de(n.visibleWrites,i);return Pe(o,s.getNode().getImmediateChild(t))}else return null}function ac(n,e){return be(n.visibleWrites,e)}function lc(n,e,t,s,i,r,o){let a;const l=de(n.visibleWrites,e),c=be(l,C());if(c!=null)a=c;else if(t!=null)a=Pe(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=h.getNext();for(;f&&u.length<i;)d(f,s)!==0&&u.push(f),f=h.getNext();return u}else return[]}function cc(){return{visibleWrites:Y.empty(),allWrites:[],lastWriteId:-1}}function Pt(n,e,t,s){return ar(n.writeTree,n.treePath,e,t,s)}function Un(n,e){return ic(n.writeTree,n.treePath,e)}function $s(n,e,t,s){return rc(n.writeTree,n.treePath,e,t,s)}function Ot(n,e){return ac(n.writeTree,P(n.treePath,e))}function dc(n,e,t,s,i,r){return lc(n.writeTree,n.treePath,e,t,s,i,r)}function Hn(n,e,t){return oc(n.writeTree,n.treePath,e,t)}function lr(n,e){return cr(P(n.treePath,e),n.writeTree)}function cr(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;p(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),p(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,it(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,st(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,De(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,it(s,e.snapshotNode,i.oldSnap));else throw Oe("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const dr=new hc;class Vn{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new fe(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hn(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:we(this.viewCache_),r=dc(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(n){return{filter:n}}function pc(n,e){p(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function mc(n,e,t,s,i){const r=new uc;let o,a;if(t.type===K.OVERWRITE){const c=t;c.source.fromUser?o=bn(n,e,c.path,c.snap,s,i,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!v(c.path),o=Mt(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===K.MERGE){const c=t;c.source.fromUser?o=gc(n,e,c.path,c.children,s,i,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=In(n,e,c.path,c.children,s,i,a,r))}else if(t.type===K.ACK_USER_WRITE){const c=t;c.revert?o=Ec(n,e,c.path,s,i,r):o=yc(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===K.LISTEN_COMPLETE)o=vc(n,e,t.path,s,r);else throw Oe("Unknown operation type: "+t.type);const l=r.getChanges();return _c(e,o,l),{viewCache:o,changes:l}}function _c(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Dt(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(tr(Dt(e)))}}function ur(n,e,t,s,i,r){const o=e.eventCache;if(Ot(s,t)!=null)return e;{let a,l;if(v(t))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=we(e),u=c instanceof _?c:_.EMPTY_NODE,d=Un(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Pt(s,we(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=E(t);if(c===".priority"){p(he(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=$s(s,t,u,l);d!=null?a=n.filter.updatePriority(u,d):a=o.getNode()}else{const u=N(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=$s(s,t,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Hn(s,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return Ye(e,a,o.isFullyInitialized()||v(t),n.filter.filtersNodes())}}function Mt(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(v(t))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=E(t);if(!l.isCompleteForPath(t)&&he(t)>1)return e;const m=N(t),w=l.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?c=u.updatePriority(l.getNode(),w):c=u.updateChild(l.getNode(),f,w,m,dr,null)}const d=ir(e,c,l.isFullyInitialized()||v(t),u.filtersNodes()),h=new Vn(i,d,r);return ur(n,d,t,i,h,a)}function bn(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const u=new Vn(i,e,r);if(v(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ye(e,c,!0,n.filter.filtersNodes());else{const d=E(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=Ye(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=N(t),f=a.getNode().getImmediateChild(d);let m;if(v(h))m=s;else{const g=u.getCompleteChild(d);g!=null?Gi(h)===".priority"&&g.getChild(ji(h)).isEmpty()?m=g:m=g.updateChild(h,s):m=_.EMPTY_NODE}if(f.equals(m))l=e;else{const g=n.filter.updateChild(a.getNode(),d,m,h,u,o);l=Ye(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function zs(n,e){return n.eventCache.isCompleteForChild(e)}function gc(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=P(t,l);zs(e,E(u))&&(a=bn(n,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=P(t,l);zs(e,E(u))||(a=bn(n,a,u,c,i,r,o))}),a}function Gs(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function In(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;v(t)?c=s:c=new S(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),m=Gs(n,f,h);l=Mt(n,l,new b(d),m,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const m=e.serverCache.getNode().getImmediateChild(d),g=Gs(n,m,h);l=Mt(n,l,new b(d),g,i,r,o,a)}}),l}function yc(n,e,t,s,i,r,o){if(Ot(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(v(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Mt(n,e,t,l.getNode().getChild(t),i,r,a,o);if(v(t)){let c=new S(null);return l.getNode().forEachChild(Re,(u,d)=>{c=c.set(new b(u),d)}),In(n,e,t,c,i,r,a,o)}else return e}else{let c=new S(null);return s.foreach((u,d)=>{const h=P(t,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),In(n,e,t,c,i,r,a,o)}}function vc(n,e,t,s,i){const r=e.serverCache,o=ir(e,r.getNode(),r.isFullyInitialized()||v(t),r.isFiltered());return ur(n,o,t,s,dr,i)}function Ec(n,e,t,s,i,r){let o;if(Ot(s,t)!=null)return e;{const a=new Vn(s,e,i),l=e.eventCache.getNode();let c;if(v(t)||E(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Pt(s,we(e));else{const d=e.serverCache.getNode();p(d instanceof _,"serverChildren would be complete if leaf node"),u=Un(s,d)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=E(t);let d=Hn(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=n.filter.updateChild(l,u,d,N(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,_.EMPTY_NODE,N(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Pt(s,we(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ot(s,C())!=null,Ye(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ln(s.getIndex()),r=Ul(s);this.processor_=fc(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(_.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(_.EMPTY_NODE,a.getNode(),null),u=new fe(l,o.isFullyInitialized(),i.filtersNodes()),d=new fe(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Vt(d,u),this.eventGenerator_=new jl(this.query_)}get query(){return this.query_}}function wc(n){return n.viewCache_.serverCache.getNode()}function bc(n){return Dt(n.viewCache_)}function Ic(n,e){const t=we(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!v(e)&&!t.getImmediateChild(E(e)).isEmpty())?t.getChild(e):null}function qs(n){return n.eventRegistrations_.length===0}function Nc(n,e){n.eventRegistrations_.push(e)}function js(n,e,t){const s=[];if(t){p(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Ks(n,e,t,s){e.type===K.MERGE&&e.source.queryId!==null&&(p(we(n.viewCache_),"We should always have a full cache before handling merges"),p(Dt(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=mc(n.processor_,i,e,t,s);return pc(n.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,hr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Sc(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(R,(r,o)=>{s.push(De(r,o))}),t.isFullyInitialized()&&s.push(tr(t.getNode())),hr(n,s,t.getNode(),e)}function hr(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Kl(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lt;class fr{constructor(){this.views=new Map}}function Tc(n){p(!Lt,"__referenceConstructor has already been defined"),Lt=n}function xc(){return p(Lt,"Reference.ts has not been loaded"),Lt}function Rc(n){return n.views.size===0}function $n(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return p(r!=null,"SyncTree gave us an op for an invalid query."),Ks(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Ks(o,e,t,s));return r}}function pr(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Pt(t,i?s:null),l=!1;a?l=!0:s instanceof _?(a=Un(t,s),l=!1):(a=_.EMPTY_NODE,l=!1);const c=Vt(new fe(a,l,!1),new fe(s,i,!1));return new Cc(e,c)}return o}function kc(n,e,t,s,i,r){const o=pr(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Nc(o,t),Sc(o,t)}function Ac(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=pe(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(js(c,t,s)),qs(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(js(l,t,s)),qs(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!pe(n)&&r.push(new(xc())(e._repo,e._path)),{removed:r,events:o}}function mr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ue(n,e){let t=null;for(const s of n.views.values())t=t||Ic(s,e);return t}function _r(n,e){if(e._queryParams.loadsAllData())return zt(n);{const s=e._queryIdentifier;return n.views.get(s)}}function gr(n,e){return _r(n,e)!=null}function pe(n){return zt(n)!=null}function zt(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ft;function Dc(n){p(!Ft,"__referenceConstructor has already been defined"),Ft=n}function Pc(){return p(Ft,"Reference.ts has not been loaded"),Ft}let Oc=1;class Ys{constructor(e){this.listenProvider_=e,this.syncPointTree_=new S(null),this.pendingWriteTree_=cc(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function yr(n,e,t,s,i){return Jl(n.pendingWriteTree_,e,t,s,i),i?mt(n,new Ce(sr(),e,t)):[]}function ve(n,e,t=!1){const s=Zl(n.pendingWriteTree_,e);if(ec(n.pendingWriteTree_,e)){let r=new S(null);return s.snap!=null?r=r.set(C(),!0):z(s.children,o=>{r=r.set(new b(o),!0)}),mt(n,new At(s.path,r,t))}else return[]}function pt(n,e,t){return mt(n,new Ce(Bn(),e,t))}function Mc(n,e,t){const s=S.fromObject(t);return mt(n,new at(Bn(),e,s))}function Lc(n,e){return mt(n,new ot(Bn(),e))}function Fc(n,e,t){const s=Gn(n,t);if(s){const i=qn(s),r=i.path,o=i.queryId,a=H(r,e),l=new ot(Wn(o),a);return jn(n,r,l)}else return[]}function vr(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||gr(o,e))){const l=Ac(o,e,t,s);Rc(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(h,f)=>pe(f));if(u&&!d){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=Hc(h);for(let m=0;m<f.length;++m){const g=f[m],w=g.query,k=br(n,g);n.listenProvider_.startListening(Xe(w),lt(n,w),k.hashFn,k.onComplete)}}}!d&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(Xe(e),null):c.forEach(h=>{const f=n.queryToTagMap.get(Gt(h));n.listenProvider_.stopListening(Xe(h),f)}))}Vc(n,c)}return a}function Er(n,e,t,s){const i=Gn(n,s);if(i!=null){const r=qn(i),o=r.path,a=r.queryId,l=H(o,e),c=new Ce(Wn(a),l,t);return jn(n,o,c)}else return[]}function Bc(n,e,t,s){const i=Gn(n,s);if(i){const r=qn(i),o=r.path,a=r.queryId,l=H(o,e),c=S.fromObject(t),u=new at(Wn(a),l,c);return jn(n,o,u)}else return[]}function Wc(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(h,f)=>{const m=H(h,i);r=r||ue(f,m),o=o||pe(f)});let a=n.syncPointTree_.get(i);a?(o=o||pe(a),r=r||ue(a,C())):(a=new fr,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=_.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,m)=>{const g=ue(m,C());g&&(r=r.updateImmediateChild(f,g))}));const c=gr(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Gt(e);p(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=$c();n.queryToTagMap.set(h,f),n.tagToQueryMap.set(f,h)}const u=$t(n.pendingWriteTree_,i);let d=kc(a,e,t,u,r,l);if(!c&&!o&&!s){const h=_r(a,e);d=d.concat(zc(n,e,h))}return d}function zn(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=H(o,e),c=ue(a,l);if(c)return c});return ar(i,e,r,t,!0)}function Uc(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const d=H(c,t);s=s||ue(u,d)});let i=n.syncPointTree_.get(t);i?s=s||ue(i,C()):(i=new fr,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new fe(s,!0,!1):null,a=$t(n.pendingWriteTree_,e._path),l=pr(i,e,a,r?o.getNode():_.EMPTY_NODE,r);return bc(l)}function mt(n,e){return Cr(e,n.syncPointTree_,null,$t(n.pendingWriteTree_,C()))}function Cr(n,e,t,s){if(v(n.path))return wr(n,e,t,s);{const i=e.get(C());t==null&&i!=null&&(t=ue(i,C()));let r=[];const o=E(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=lr(s,o);r=r.concat(Cr(a,l,c,u))}return i&&(r=r.concat($n(i,n,s,t))),r}}function wr(n,e,t,s){const i=e.get(C());t==null&&i!=null&&(t=ue(i,C()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=lr(s,o),u=n.operationForChild(o);u&&(r=r.concat(wr(u,a,l,c)))}),i&&(r=r.concat($n(i,n,s,t))),r}function br(n,e){const t=e.query,s=lt(n,t);return{hashFn:()=>(wc(e)||_.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Fc(n,t._path,s):Lc(n,t._path);{const r=Wa(i,t);return vr(n,t,null,r)}}}}function lt(n,e){const t=Gt(e);return n.queryToTagMap.get(t)}function Gt(n){return n._path.toString()+"$"+n._queryIdentifier}function Gn(n,e){return n.tagToQueryMap.get(e)}function qn(n){const e=n.indexOf("$");return p(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new b(n.substr(0,e))}}function jn(n,e,t){const s=n.syncPointTree_.get(e);p(s,"Missing sync point for query tag that we're tracking");const i=$t(n.pendingWriteTree_,e);return $n(s,t,i,null)}function Hc(n){return n.fold((e,t,s)=>{if(t&&pe(t))return[zt(t)];{let i=[];return t&&(i=mr(t)),z(s,(r,o)=>{i=i.concat(o)}),i}})}function Xe(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Pc())(n._repo,n._path):n}function Vc(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Gt(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function $c(){return Oc++}function zc(n,e,t){const s=e._path,i=lt(n,e),r=br(n,t),o=n.listenProvider_.startListening(Xe(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)p(!pe(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!v(c)&&u&&pe(u))return[zt(u).query];{let h=[];return u&&(h=h.concat(mr(u).map(f=>f.query))),z(d,(f,m)=>{h=h.concat(m)}),h}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Xe(u),lt(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Kn(t)}node(){return this.node_}}class Yn{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=P(this.path_,e);return new Yn(this.syncTree_,t)}node(){return zn(this.syncTree_,this.path_)}}const Gc=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Qs=function(n,e,t){if(!n||typeof n!="object")return n;if(p(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return qc(n[".sv"],e,t);if(typeof n[".sv"]=="object")return jc(n[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},qc=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:p(!1,"Unexpected server value: "+n)}},jc=function(n,e,t){n.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&p(!1,"Unexpected increment value: "+s);const i=e.node();if(p(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Kc=function(n,e,t,s){return Qn(e,new Yn(t,n),s)},Ir=function(n,e,t){return Qn(n,new Kn(e),t)};function Qn(n,e,t){const s=n.getPriority().val(),i=Qs(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Qs(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new M(a,F(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new M(i))),o.forEachChild(R,(a,l)=>{const c=Qn(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Jn(n,e){let t=e instanceof b?e:new b(e),s=n,i=E(t);for(;i!==null;){const r=ke(s.node.children,i)||{children:{},childCount:0};s=new Xn(i,s,r),t=N(t),i=E(t)}return s}function Be(n){return n.node.value}function Nr(n,e){n.node.value=e,Nn(n)}function Sr(n){return n.node.childCount>0}function Yc(n){return Be(n)===void 0&&!Sr(n)}function qt(n,e){z(n.node.children,(t,s)=>{e(new Xn(t,n,s))})}function Tr(n,e,t,s){t&&e(n),qt(n,i=>{Tr(i,e,!0)})}function Qc(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function _t(n){return new b(n.parent===null?n.name:_t(n.parent)+"/"+n.name)}function Nn(n){n.parent!==null&&Xc(n.parent,n.name,n)}function Xc(n,e,t){const s=Yc(t),i=re(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Nn(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Nn(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=/[\[\].#$\/\u0000-\u001F\u007F]/,Zc=/[\[\].#$\u0000-\u001F\u007F]/,an=10*1024*1024,xr=function(n){return typeof n=="string"&&n.length!==0&&!Jc.test(n)},Rr=function(n){return typeof n=="string"&&n.length!==0&&!Zc.test(n)},ed=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Rr(n)},td=function(n,e,t,s){Zn(xn(n,"value"),e,t)},Zn=function(n,e,t){const s=t instanceof b?new yl(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ge(s));if(typeof e=="function")throw new Error(n+"contains a function "+ge(s)+" with contents = "+e.toString());if(Ii(e))throw new Error(n+"contains "+e.toString()+" "+ge(s));if(typeof e=="string"&&e.length>an/3&&Ut(e)>an)throw new Error(n+"contains a string greater than "+an+" utf8 bytes "+ge(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(z(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!xr(o)))throw new Error(n+" contains an invalid key ("+o+") "+ge(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vl(s,o),Zn(n,a,s),El(s)}),i&&r)throw new Error(n+' contains ".value" child '+ge(s)+" in addition to actual children.")}},kr=function(n,e,t,s){if(!Rr(t))throw new Error(xn(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},nd=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),kr(n,e,t)},sd=function(n,e){if(E(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},id=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!xr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ed(t))throw new Error(xn(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ar(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Ki(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function X(n,e,t){Ar(n,t),od(n,s=>j(s,e)||j(e,s))}function od(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(ad(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function ad(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();je&&U("event: "+t.toString()),Fe(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="repo_interrupt",cd=25;class dd{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=kt(),this.transactionQueueTree_=new Xn,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ud(n,e,t){if(n.stats_=Dn(n.repoInfo_),n.forceRestClient_||$a())n.server_=new Rt(n.repoInfo_,(s,i,r,o)=>{Xs(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Js(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{D(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new ee(n.repoInfo_,e,(s,i,r,o)=>{Xs(n,s,i,r,o)},s=>{Js(n,s)},s=>{fd(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Ka(n.repoInfo_,()=>new ql(n.stats_,n.server_)),n.infoData_=new Hl,n.infoSyncTree_=new Ys({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=pt(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ts(n,"connected",!1),n.serverSyncTree_=new Ys({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);X(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function hd(n){const t=n.infoData_.getNode(new b(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function es(n){return Gc({timestamp:hd(n)})}function Xs(n,e,t,s,i){n.dataUpdateCount++;const r=new b(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=wt(t,c=>F(c));o=Bc(n.serverSyncTree_,r,l,i)}else{const l=F(t);o=Er(n.serverSyncTree_,r,l,i)}else if(s){const l=wt(t,c=>F(c));o=Mc(n.serverSyncTree_,r,l)}else{const l=F(t);o=pt(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Kt(n,r)),X(n.eventQueue_,a,o)}function Js(n,e){ts(n,"connected",e),e===!1&&_d(n)}function fd(n,e){z(e,(t,s)=>{ts(n,t,s)})}function ts(n,e,t){const s=new b("/.info/"+e),i=F(t);n.infoData_.updateSnapshot(s,i);const r=pt(n.infoSyncTree_,s,i);X(n.eventQueue_,s,r)}function Dr(n){return n.nextWriteId_++}function pd(n,e,t){const s=Uc(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=F(i).withIndex(e._queryParams.getIndex());Wc(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=pt(n.serverSyncTree_,e._path,r);else{const a=lt(n.serverSyncTree_,e);o=Er(n.serverSyncTree_,e._path,r,a)}return X(n.eventQueue_,e._path,o),vr(n.serverSyncTree_,e,t,null,!0),r},i=>(jt(n,"get for query "+D(e)+" failed: "+i),Promise.reject(new Error(i))))}function md(n,e,t,s,i){jt(n,"set",{path:e.toString(),value:t,priority:s});const r=es(n),o=F(t,s),a=zn(n.serverSyncTree_,e),l=Ir(o,a,r),c=Dr(n),u=yr(n.serverSyncTree_,e,l,c,!0);Ar(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(h,f)=>{const m=h==="ok";m||$("set at "+e+" failed: "+h);const g=ve(n.serverSyncTree_,c,!m);X(n.eventQueue_,e,g),yd(n,i,h,f)});const d=Fr(n,e);Kt(n,d),X(n.eventQueue_,d,[])}function _d(n){jt(n,"onDisconnectEvents");const e=es(n),t=kt();En(n.onDisconnect_,C(),(i,r)=>{const o=Kc(i,r,n.serverSyncTree_,e);nr(t,i,o)});let s=[];En(t,C(),(i,r)=>{s=s.concat(pt(n.serverSyncTree_,i,r));const o=Fr(n,i);Kt(n,o)}),n.onDisconnect_=kt(),X(n.eventQueue_,C(),s)}function gd(n){n.persistentConnection_&&n.persistentConnection_.interrupt(ld)}function jt(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),U(t,...e)}function yd(n,e,t,s){e&&Fe(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Pr(n,e,t){return zn(n.serverSyncTree_,e,t)||_.EMPTY_NODE}function ns(n,e=n.transactionQueueTree_){if(e||Yt(n,e),Be(e)){const t=Mr(n,e);p(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&vd(n,_t(e),t)}else Sr(e)&&qt(e,t=>{ns(n,t)})}function vd(n,e,t){const s=t.map(c=>c.currentWriteId),i=Pr(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];p(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=H(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{jt(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<t.length;h++)t[h].status=2,u=u.concat(ve(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&d.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();Yt(n,Jn(n.transactionQueueTree_,e)),ns(n,n.transactionQueueTree_),X(n.eventQueue_,e,u);for(let h=0;h<d.length;h++)Fe(d[h])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{$("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}Kt(n,e)}},o)}function Kt(n,e){const t=Or(n,e),s=_t(t),i=Mr(n,t);return Ed(n,i,s),s}function Ed(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=H(t,l.path);let u=!1,d;if(p(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(ve(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=cd)u=!0,d="maxretry",i=i.concat(ve(n.serverSyncTree_,l.currentWriteId,!0));else{const h=Pr(n,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){Zn("transaction failed: Data returned ",f,l.path);let m=F(f);typeof f=="object"&&f!=null&&re(f,".priority")||(m=m.updatePriority(h.getPriority()));const w=l.currentWriteId,k=es(n),A=Ir(m,h,k);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=A,l.currentWriteId=Dr(n),o.splice(o.indexOf(w),1),i=i.concat(yr(n.serverSyncTree_,l.path,A,l.currentWriteId,l.applyLocally)),i=i.concat(ve(n.serverSyncTree_,w,!0))}else u=!0,d="nodata",i=i.concat(ve(n.serverSyncTree_,l.currentWriteId,!0))}X(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Yt(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Fe(s[a]);ns(n,n.transactionQueueTree_)}function Or(n,e){let t,s=n.transactionQueueTree_;for(t=E(e);t!==null&&Be(s)===void 0;)s=Jn(s,t),e=N(e),t=E(e);return s}function Mr(n,e){const t=[];return Lr(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Lr(n,e,t){const s=Be(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);qt(e,i=>{Lr(n,i,t)})}function Yt(n,e){const t=Be(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Nr(e,t.length>0?t:void 0)}qt(e,s=>{Yt(n,s)})}function Fr(n,e){const t=_t(Or(n,e)),s=Jn(n.transactionQueueTree_,e);return Qc(s,i=>{ln(n,i)}),ln(n,s),Tr(s,i=>{ln(n,i)}),t}function ln(n,e){const t=Be(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(p(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(ve(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Nr(e,void 0):t.length=r+1,X(n.eventQueue_,_t(e),i);for(let o=0;o<s.length;o++)Fe(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function wd(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):$(`Invalid query segment '${t}' in query '${n}'`)}return e}const Zs=function(n,e){const t=bd(n),s=t.namespace;t.domain==="firebase.com"&&se(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&se("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Oa();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Li(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new b(t.pathString)}},bd=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(i=Cd(n.substring(u,d)));const h=wd(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+D(this.snapshot.exportVal())}}class Nd{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return v(this._path)?null:Gi(this._path)}get ref(){return new oe(this._repo,this._path)}get _queryIdentifier(){const e=Bs(this._queryParams),t=kn(e);return t==="{}"?"default":t}get _queryObject(){return Bs(this._queryParams)}isEqual(e){if(e=Me(e),!(e instanceof ss))return!1;const t=this._repo===e._repo,s=Ki(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+gl(this._path)}}class oe extends ss{constructor(e,t){super(e,t,new Fn,!1)}get parent(){const e=ji(this._path);return e===null?null:new oe(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ct{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new b(e),s=Bt(this.ref,e);return new ct(this._node.getChild(t),s,R)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ct(i,Bt(this.ref,s),R)))}hasChild(e){const t=new b(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function We(n,e){return n=Me(n),n._checkNotDeleted("ref"),e!==void 0?Bt(n._root,e):n._root}function Bt(n,e){return n=Me(n),E(n._path)===null?nd("child","path",e):kr("child","path",e),new oe(n._repo,P(n._path,e))}function is(n,e){n=Me(n),sd("set",n._path),td("set",e,n._path);const t=new Wt;return md(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function rs(n){n=Me(n);const e=new Sd(()=>{}),t=new os(e);return pd(n._repo,n,t).then(s=>new ct(s,new oe(n._repo,n._path),n._queryParams.getIndex()))}class os{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Id("value",this,new ct(e.snapshotNode,new oe(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Nd(this,e,t):null}matches(e){return e instanceof os?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Tc(oe);Dc(oe);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="FIREBASE_DATABASE_EMULATOR_HOST",Sn={};let xd=!1;function Rd(n,e,t,s){n.repoInfo_=new Li(e,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function kd(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||se("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),U("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Zs(r,i),a=o.repoInfo,l;typeof process<"u"&&Es&&(l=Es[Td]),l?(r=`http://${l}?ns=${a.namespace}`,o=Zs(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new Ga(n.name,n.options,e);id("Invalid Firebase Database URL",o),v(o.path)||se("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Dd(a,n,c,new za(n,t));return new Pd(u,n)}function Ad(n,e){const t=Sn[e];(!t||t[n.key]!==n)&&se(`Database ${e}(${n.repoInfo_}) has already been deleted.`),gd(n),delete t[n.key]}function Dd(n,e,t,s){let i=Sn[e.name];i||(i={},Sn[e.name]=i);let r=i[n.toURLString()];return r&&se("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new dd(n,xd,t,s),i[n.toURLString()]=r,r}class Pd{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ud(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new oe(this._repo,C())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ad(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&se("Cannot call "+e+" on a deleted database.")}}function Od(n=ga(),e){const t=ha(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=eo("database");s&&Md(t,...s)}return t}function Md(n,e,t,s={}){n=Me(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&bt(s,r.repoInfo_.emulatorOptions))return;se("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&se('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new vt(vt.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:to(s.mockUserToken,n.app.options.projectId);o=new vt(a)}Rd(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(n){xa(_a),Nt(new et("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return kd(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Te(Cs,ws,n),Te(Cs,ws,"esm2017")}ee.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ee.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Ld();var Fd="firebase",Bd="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Te(Fd,Bd,"app");const Wd={apiKey:"AIzaSyCtDbxHlTC-9UqaQWrS-HMETfV5pakVf3o",authDomain:"water-tracker-6f8ca.firebaseapp.com",databaseURL:"https://water-tracker-6f8ca-default-rtdb.europe-west1.firebasedatabase.app",projectId:"water-tracker-6f8ca",storageBucket:"water-tracker-6f8ca.firebasestorage.app",messagingSenderId:"504549086275",appId:"1:504549086275:web:8e8de9603d52a80f9930f6",measurementId:"G-EQSDZGL49G"},Ud=yi(Wd),Ue=Od(Ud);async function Hd(){return(await rs(Bt(We(Ue),"cashEntries"))).val()}function Vd(){const n=document.createElement("div");return n.className="loading-message",n.textContent="Загрузка данных...",document.body.appendChild(n),n}const $d="v1.0.2",zd=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40mm" height="30mm" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 4000 3000"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
 <g id="Слой_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <g id="_2163097661776">
   <polygon fill="#ffffff" points="145.5,2155.43 1887.05,221.28 2261.4,645.49 1370.11,1634.9 2137.33,1634.9 2640.94,1075.58 3020.7,1505.91 2435.85,2155.43 "/>
   <polygon fill="#ffffff" points="3138.57,1939.54 2435.85,2719.98 3841.3,2719.98 "/>
   <polygon fill="#ffffff" fill-rule="nonzero" points="503.85,2792.85 417.74,2792.85 417.74,2719.41 152.68,2719.41 152.68,2399.68 247.06,2399.68 247.06,2659.16 373.9,2659.16 373.9,2399.68 468.27,2399.68 468.27,2659.16 503.85,2659.16 "/>
   <polygon id="_1" fill="#ffffff" fill-rule="nonzero" points="869.62,2719.41 775.25,2719.41 775.25,2577.8 647.37,2577.8 647.37,2719.41 553,2719.41 553,2399.68 647.37,2399.68 647.37,2516.67 775.25,2516.67 775.25,2399.68 869.62,2399.68 "/>
   <polygon id="_2" fill="#ffffff" fill-rule="nonzero" points="1270.88,2719.41 1178.06,2719.41 1178.06,2508.75 1034.28,2719.41 947.04,2719.41 947.04,2399.68 1039.87,2399.68 1039.87,2590.11 1172.82,2399.68 1270.88,2399.68 "/>
   <polygon id="_3" fill="#ffffff" fill-rule="nonzero" points="1670.68,2719.41 1577.87,2719.41 1577.87,2508.75 1434.08,2719.41 1346.85,2719.41 1346.85,2399.68 1439.67,2399.68 1439.67,2590.11 1572.62,2399.68 1670.68,2399.68 "/>
   <polygon id="_4" fill="#ffffff" fill-rule="nonzero" points="1818.84,2719.41 1818.84,2460.81 1707.98,2460.81 1707.98,2399.68 2024.08,2399.68 2024.08,2460.81 1913.21,2460.81 1913.21,2719.41 "/>
   <path fill="#ffffff" fill-rule="nonzero" d="M2421.32 2399.68l-125.13 255.59c-7.4,14.88 -15.73,26.61 -24.84,35.19 -9.12,8.57 -18.74,15.1 -28.79,19.57 -10.14,4.4 -20.2,7.4 -30.25,8.87 -10.06,1.54 -20.64,2.27 -31.72,2.27 -11.6,0 -25.09,-0.22 -40.39,-0.66 -15.38,-0.44 -25.61,-0.81 -30.85,-1.25l0 -67.58 5.76 0c1.55,0.3 3.86,0.59 7.05,1.03 3.17,0.44 7.21,0.8 12.11,1.24 4.04,0.3 8.42,0.59 13.06,0.81 4.72,0.29 9.03,0.44 12.9,0.44 11.17,0 21.83,-1.17 31.79,-3.59 9.97,-2.35 16.68,-6.45 20.03,-12.24l-138.8 -239.69 101.76 0 80.44 150.12 68.06 -150.12 97.81 0z"/>
  </g>
 </g>
</svg>`;function as(){const n=document.createElement("header");n.className="header-container";const e=document.createElement("img");e.src="/logo.svg";const t=document.createElement("div");t.className="text-container";const s=document.createElement("h1");s.textContent="Трекер воды";const i=document.createElement("b");i.textContent="отдел 308";const r=document.createElement("b");return r.className="version-label",r.textContent=$d,n.innerHTML=zd,t.append(s,i),n.append(t,r),n}function x({type:n,text:e,className:t,onClick:s,disabled:i=!1,iconSvg:r,iconClass:o}){const a=document.createElement("button");if(a.type=n,e&&(a.textContent=e),a.className=t,a.disabled=i,s&&a.addEventListener("click",s),r){const l=document.createElement("span");l.innerHTML=r.trim(),o&&(l.className=o),a.appendChild(l)}return a}function W(n){document.body.style.overflow="",document.body.removeChild(n)}function me(n){const e=document.createElement("button");e.className="close-btn",e.setAttribute("aria-label","Закрыть");const t=document.createElement("div"),s=document.createElement("div");return t.className="close-line",s.className="close-line",e.appendChild(t),e.appendChild(s),e.addEventListener("click",n),e}function Gd(n){const e=[];function t(r){const[o,a,l]=r.split("-");return`${l}.${a}.${o}`}n.forEach(r=>{const a=[t(r.date),0,0];r.type==="deposit"&&(a[1]=r.amount),r.type==="expense"&&(a[2]=r.amount),e.push(a)});const s={};for(const[r,o,a]of e)s[r]||(s[r]=[r,0,0]),s[r][1]+=o,s[r][2]+=a;return Object.values(s).sort((r,o)=>{const a=l=>{const[c,u,d]=l.split(".");return new Date(`${d}-${u}-${c}`)};return a(r[0]).getTime()-a(o[0]).getTime()})}function qd(n){const e=Gd(n);let t=0;function s(){return t<0?"red":t>0&&t<5?"orang":""}const i=document.createElement("div");i.className="modal-content";const r=document.createElement("div");return r.className="modal-table",e.forEach(o=>{t=t+o[1]-o[2];const a=document.createElement("div");a.className="modal-cash-up",a.innerHTML=`+ ${o[1].toFixed(2)}`;const l=document.createElement("div");l.className="modal-cash-date";const c=document.createElement("p");c.className="modal-data",c.innerText=o[0];const u=document.createElement("p");u.className=s(),u.innerText=`${t.toFixed(2)} BYN`,l.append(c,u);const d=document.createElement("div");d.className="modal-cash-lou",d.innerHTML=`- ${o[2].toFixed(2)}`;const h=document.createElement("div");h.className="line-modal",h.append(a,l,d),r.prepend(h)}),i.append(r),i}function jd(n,e){const t=document.createElement("div");t.className="modal-overlay";const s=document.createElement("div");s.className="modal";const i=document.createElement("div");i.className="top-windows";const r=document.createElement("div");r.className="modal-title",r.innerHTML=n;const o=me(()=>{W(t)});return i.append(r,o),s.appendChild(i),s.appendChild(qd(e)),t.appendChild(s),t.addEventListener("click",a=>{a.target===t&&W(t)}),document.addEventListener("keydown",a=>{a.key==="Escape"&&W(t)}),document.body.style.overflow="hidden",document.body.appendChild(t),t}function Kd(n){const e=document.createElement("div");e.className="users";let t=n;return Jd()?t=[...n].sort((s,i)=>s.employeeName.localeCompare(i.employeeName)):t=[...n].sort((s,i)=>i.employeeName.localeCompare(s.employeeName)),t.forEach(s=>{if(!s.isDelete){let i=function(){return o<0?"user-btn red":o>0&&o<5?"user-btn orang":"user-btn"};const r=s.transactions;let o=0;r.forEach(d=>{d.type==="deposit"?o+=d.amount:o-=d.amount});const a=document.createElement("div");a.className="user";const l=document.createElement("div");l.className="user-name";const c=x({type:"button",text:s.employeeName,className:i(),onClick:()=>{jd(s.employeeName,r)}});l.appendChild(c);const u=document.createElement("div");o<0?u.className="cash red":o>0&&o<5?u.className="cash orang":u.className="cash",u.textContent=String(Math.round(o*100)/100),a.append(l,u),e.append(a)}}),e}function Yd(n){let e=0;return n.forEach(t=>{t.isDelete||t.transactions.forEach(s=>{s.type==="deposit"?e+=s.amount:s.type==="expense"&&(e-=s.amount)})}),e}const Qd=`<svg xmlns="http://www.w3.org/2000/svg" width="8px" height="19px" viewBox="0 0 600 1200">
  <path fill="#FEFEFE" d="M291.88 81.5c28.62 0 52.02 23.4 52.02 52.02v811.81l125.8-125.8c20.24-20.24 53.33-20.24 73.57 0 20.23 20.24 20.23 53.33 0 73.57l-205.62 205.61c-2.23 3.91-5.02 7.6-8.35 10.93-17.71 17.71-45.26 19.92-65.42 6.64l-0.4-0.26c-4.06-2.66-7.73-5.88-10.91-9.54L41.21 895.13c-20.23-20.24-20.23-53.33 0-73.57 20.24-20.24 53.33-20.24 73.57 0l125.16 125.16V133.52c0-28.62 23.4-52.02 52.02-52.02z"/>
</svg>`;let Je=!0;function Xd(){return Je=!Je,Je}function Jd(){return Je}function Zd(n){const e=Object.entries(n).map(([l,c])=>({id:l,...c})),t=Yd(e),s=document.createElement("div");s.className="user-list";const i=document.createElement("div");i.className="text-content";const r=x({type:"button",className:"btn-arrow",onClick:()=>{Xd(),B()},iconSvg:Qd,iconClass:Je?"":"rotate-up"}),o=document.createElement("div");o.className="text-user",o.textContent="Сотрудник";const a=document.createElement("div");return a.className="text-cash",a.style.whiteSpace="pre-line",a.textContent=`Баланс 
${t.toFixed(2)} BYN`,o.append(r),i.append(o,a),s.append(i,Kd(e)),s}function ei(n){const e=We(Ue,"admin/password");is(e,n)}function eu(){const n=sessionStorage.getItem("pass"),e=document.createElement("div");e.className="modal-overlay";const t=document.createElement("div");t.className="modal";const s=document.createElement("div");s.className="top-windows";const i=document.createElement("div");i.className="modal-title",i.innerHTML="Сменить пароль";const r=me(()=>{W(e)}),o=document.createElement("div");o.className="modal-content";const a=document.createElement("div");a.className="content-for-authorization-modal";const l=document.createElement("p");l.className="pass-title",l.textContent="Старай пароль:";const c=document.createElement("input");c.className="pass-input",c.placeholder="Пароль",c.type="password",c.required=!0,c.addEventListener("input",()=>{c.classList.remove("input-error"),c.setCustomValidity("")});const u=document.createElement("p");u.className="pass-title",u.textContent="Новый пароль:";const d=document.createElement("input");d.className="pass-input",d.placeholder="Новый пароль",d.type="password",d.required=!0,d.addEventListener("input",()=>{d.classList.remove("input-error"),d.setCustomValidity("")});const h=document.createElement("p");h.className="pass-title",h.textContent="Повторите пароль:";const f=document.createElement("input");f.className="pass-input",f.placeholder="Повторить пароль",f.type="password",f.required=!0,f.addEventListener("input",()=>{f.classList.remove("input-error"),f.setCustomValidity("")});const m=x({type:"button",text:"Сменить",className:"btn-user-del",onClick:()=>{if(c.value!==n){c.setCustomValidity("Неверный пароль"),c.reportValidity(),c.classList.add("input-error");return}if(d.value.length<4){d.setCustomValidity("4 символа и больше "),d.reportValidity(),d.classList.add("input-error");return}if(d.value!==f.value){f.setCustomValidity("Пароль не совпадает"),f.reportValidity(),f.classList.add("input-error");return}ei(d.value),w(),B()}});a.append(l,c,u,d,h,f,m),o.append(a),s.append(i,r),t.append(s,o),e.appendChild(t),document.body.style.overflow="hidden",document.body.appendChild(e);const g=k=>{if(k.key==="Escape"&&w(),k.key==="Enter"){if(c.value!==n){c.setCustomValidity("Неверный пароль"),c.reportValidity(),c.classList.add("input-error");return}if(d.value.length<4){d.setCustomValidity("4 символа и больше "),d.reportValidity(),d.classList.add("input-error");return}if(d.value!==f.value){f.setCustomValidity("Пароль не совпадает"),f.reportValidity(),f.classList.add("input-error");return}ei(d.value),w(),B()}};function w(){document.removeEventListener("keydown",g),W(e)}document.addEventListener("keydown",g),e.addEventListener("click",k=>{k.target===e&&w()}),c.focus()}function cn(){const n=sessionStorage.getItem("pass"),e=document.createElement("div");e.className="modal-overlay";const t=document.createElement("div");t.className="modal";const s=document.createElement("div");s.className="top-windows";const i=document.createElement("div");i.className="modal-title",i.innerHTML="Выполнить вход";const r=me(()=>{W(e)}),o=document.createElement("div");o.className="modal-content";const a=document.createElement("div");a.className="content-for-authorization-modal";const l=document.createElement("p");l.className="pass-title",l.textContent="Пароль:";const c=document.createElement("input");c.className="pass-input",c.placeholder="Пароль",c.type="password",c.required=!0,c.addEventListener("input",()=>{c.classList.remove("input-error"),c.setCustomValidity("")});const u=x({type:"button",text:"Войти",className:"btn-user-del",onClick:()=>{c.value===n?(sessionStorage.setItem("authorization","true"),f(),ie("/"),B()):(c.setCustomValidity("Неверный пароль"),c.reportValidity(),c.classList.add("input-error"))}}),d=x({type:"button",text:"Сменить пароль.",className:"btn-cheng-pass",onClick:()=>{W(e),eu()}});a.append(l,c,u,d),o.append(a),s.append(i,r),t.append(s,o),e.appendChild(t),document.body.style.overflow="hidden",document.body.appendChild(e);const h=m=>{m.key==="Escape"&&f(),m.key==="Enter"&&(c.value===n?(sessionStorage.setItem("authorization","true"),f(),ie("/"),B()):(c.setCustomValidity("Неверный пароль"),c.reportValidity(),c.classList.add("input-error")))};function f(){document.removeEventListener("keydown",h),W(e)}document.addEventListener("keydown",h),e.addEventListener("click",m=>{m.target===e&&f()}),c.focus()}function tu(n){const e=We(Ue,"gameScores");is(e,n)}let Br;function nu(){const n=document.createElement("div");n.className="game-start-menu-content";const e=document.createElement("label");e.className="label-start",e.textContent="Введите имя Сотрудника";const t=document.createElement("input");t.className="input-cash-water";const s=x({type:"button",text:"Поднять KPI",className:"btn-start-game-disable",onClick:()=>{ou()}});return t.addEventListener("input",()=>{t.value.trim().length>2?(s.classList.remove("btn-start-game-disable"),s.classList.add("btn-start-game"),Br=t.value):(s.classList.remove("btn-start-game"),s.classList.add("btn-start-game-disable"))}),n.append(e,t,s),t.focus(),n}function Wr(){return Br}let qe=0;function su(){return qe}function iu(n){const e=n.getContext("2d"),t={x:50,y:150,vy:0,width:35,height:35,grounded:!0,gravity:1.5,jumpForce:-16,canJump:!0},s=[],i=["ОП","ТС","СБКТС","ОTТС","ОТШ","ЭПСМ","ЭПТС"];let r=!0,o=null,a=null,l=4;const c=50,u=.001;let d=performance.now();function h(){e.fillStyle="#000",e.font="20px Arial",e.fillText("KPI",t.x,t.y+t.height-10)}function f(){e.fillStyle="red",e.font="18px Arial";for(const T of s)e.fillText(T.text,T.x,T.y+T.height-15)}function m(){e.fillStyle="black",e.font="14px Courier New, monospace",e.textAlign="left",e.textBaseline="top",e.fillText(`У сотрудника ${Wr()} yровень KPI: ${qe}`,15,15)}function g(){e.fillStyle="black",e.font="14px Courier New, monospace",e.fillText("Для старта жми SPACE",n.width/2-90,n.height/2)}g();function w(){const T=n.width/2,O=n.height/2;e.textAlign="center",e.textBaseline="middle",e.fillStyle="black",e.font="14px Courier New, monospace",e.fillText("Вы не справились с документом.",T,O-15),e.fillText("Нажмите",T-110,O),e.font="bold 14px Courier New, monospace",e.fillText("ENTER",T-50,O),e.font="14px Courier New, monospace",e.fillText("чтобы начать заново.",T+65,O),e.fillText("Нажмите",T-70,O+15),e.font="bold 14px Courier New, monospace",e.fillText("ESC",T-20,O+15),e.font="14px Courier New, monospace",e.fillText("чтобы выйти.",T+50,O+15)}function k(){for(const O of s){const Q=t.y>=150;if(t.x+t.width>O.x+5&&t.x<O.x+O.width-5&&Q){r=!0,w(),document.removeEventListener("keydown",Qt),document.addEventListener("keydown",ls),o&&cancelAnimationFrame(o),a&&clearTimeout(a);break}}}function A(T=performance.now()){const O=(T-d)/1e3;d=T,e.clearRect(0,0,n.width,n.height),m(),l<c&&(l+=u*O*60),t.grounded||(t.vy+=t.gravity*O*60,t.y+=t.vy*O*60,t.y>=150&&(t.y=150,t.vy=0,t.grounded||(t.grounded=!0,setTimeout(()=>{t.canJump=!0},50))));for(const Q of s)Q.x-=l*O*60;for(let Q=s.length-1;Q>=0;Q--){const J=s[Q];!J.passed&&J.x+J.width<t.x&&(J.passed=!0,qe=+(qe+.01).toFixed(2)),J.x+J.width<0&&s.splice(Q,1)}h(),f(),k(),r||(o=requestAnimationFrame(A))}function G(){if(r)return;const T=i[Math.floor(Math.random()*i.length)],O=e.measureText(T).width;s.push({x:n.width,y:150,text:T,width:O,height:40,passed:!1});const Q=2e3,J=300;function Ur(Vr){const $r=Q-(Vr-4)*450;return Math.max($r,J)+Math.random()*600}const Hr=Ur(l);a=window.setTimeout(G,Hr)}function He(){qe=0,t.x=50,t.y=150,t.vy=0,t.grounded=!0,t.canJump=!0,s.length=0,l=4,r=!1,d=performance.now(),A(),G(),document.removeEventListener("keydown",ls)}r||He();const Qt=T=>{T.code==="Space"&&(r?He():t.grounded&&t.canJump&&(t.vy=t.jumpForce,t.grounded=!1,t.canJump=!1))},ls=T=>{T.code==="Enter"&&(r?(document.addEventListener("keydown",Qt),He()):t.grounded&&t.canJump&&(t.vy=t.jumpForce,t.grounded=!1,t.canJump=!1))};document.addEventListener("keydown",Qt)}function ti(n){const e=document.createElement("div");e.className="game-score-content";const t=document.createElement("div");t.className="text-content";const s=document.createElement("div");s.className="text-user",s.textContent="Сотрудник ";const i=document.createElement("div");i.className="text-cash",i.style.whiteSpace="pre-line",i.textContent="KPI",t.append(s,i);const r=document.createElement("div");return r.className="users",n.forEach(o=>{const a=document.createElement("div");a.className="user";const l=document.createElement("div");l.className="game-text-name",l.textContent=o.name;const c=document.createElement("div");c.className="game-text-score",c.style.whiteSpace="pre-line",c.textContent=o.score.toString(),a.append(l,c),r.append(a)}),e.append(t,r),e}let Et=!1,Ne,ae,dn,ni;function ru(n){if(document.querySelector(".modal-overlay"))return;const e=document.createElement("div");e.className="modal-overlay";const t=document.createElement("div");t.className="modal-game";const s=document.createElement("div");s.className="top-windows";const i=document.createElement("div");i.className="modal-title",i.innerHTML="Поднятие KPI в одиночку";const r=me(()=>{l()}),o=document.createElement("div");o.className="modal-content",Ne=document.createElement("div"),Ne.className="content-for-game-modal",ae=document.createElement("canvas"),ae.id="game",ae.width=800,ae.height=200,dn=nu(),ni=ti(n),Ne.append(ni,dn),o.append(Ne),s.append(i,r),t.append(s,o),e.appendChild(t),document.body.style.overflow="hidden",document.body.appendChild(e);const a=u=>{u.key==="Escape"&&(Et?(Et=!1,c()):l())};document.addEventListener("keydown",a),e.addEventListener("click",u=>{u.target===e&&l()});function l(){document.removeEventListener("keydown",a),document.body.style.overflow="",W(e),Et=!1}function c(){const u=[...n],d={name:Wr(),score:su()},h=u.findIndex(f=>f.name===d.name);if(h!==-1)d.score>u[h].score&&(u[h]=d);else{const f=Math.min(...u.map(g=>g.score)),m=u.findIndex(g=>g.score===f);d.score>f&&(u.splice(m,1),u.push(d))}u.sort((f,m)=>m.score-f.score),tu(u),ae.width=ae.clientWidth,Ne.replaceChildren(ti(u),dn)}}function ou(){Et=!0,Ne.replaceChildren(ae),iu(ae)}function au(n){const e=document.createElement("div");e.className="navigation-panel";const t=x({type:"button",text:"Войти",className:"btn-edit",onClick:()=>{cn()}}),s=x({type:"button",text:"Поднять KPI",className:"btn-edit",onClick:()=>{ru(n)}}),i=x({type:"button",text:"Редактировать",className:"btn-edit",onClick:()=>{sessionStorage.getItem("authorization")?(ie("/edit"),B()):cn()}}),r=x({type:"button",text:"Списать воду",className:"btn-edit",onClick:()=>{sessionStorage.getItem("authorization")?(ie("/water"),B()):cn()}}),o=x({type:"button",text:"Выйти из системы",className:"btn-edit",onClick:()=>{sessionStorage.removeItem("authorization"),B()}});return sessionStorage.getItem("authorization")?e.append(i,r,o):e.append(t,s),e}function lu(n,e){const t=document.createElement("div");return t.className="main-content",t.append(Zd(n),au(e)),t}function cu(n,e){const t=document.createElement("div");return t.className="main-container",t.append(as(),lu(n,e)),t}function te(n){n.forEach(e=>{const t=We(Ue,"cashEntries/"+e.employeeId);is(t,e)})}function du(){return"emp_"+Math.random().toString(36).substring(2,10)}const uu=/^[A-Za-zА-Яа-яЁё\\.\\s]{3,}$/;function hu(){const n=document.createElement("div");n.className="modal-overlay";const e=document.createElement("div");e.className="modal";const t=document.createElement("div");t.className="top-windows";const s=document.createElement("div");s.className="modal-title",s.innerHTML="Новый сотрудник";const i=me(()=>{W(n)}),r=document.createElement("div");r.className="modal-content";const o=document.createElement("div");o.className="content-for-edit-modal",o.textContent="Имя:";const a=document.createElement("input");a.disabled=!1,a.placeholder="Введите имя",a.type="text",a.className="input-user-edit",a.minLength=3,a.pattern="[A-Za-zА-Яа-яЁё\\.\\s]{3,}",a.required=!0,a.addEventListener("input",()=>{uu.test(a.value.trim())&&(a.classList.remove("input-cash-edit-alarm"),a.setCustomValidity(""))});const l=document.createElement("div");l.className="content-for-edit-modal",l.textContent="Сумма";const c=document.createElement("input");c.disabled=!1,c.type="number",c.min="0",c.setAttribute("step","0.01"),c.className="input-cash-edit";function u(){const m=a.value.trim(),g=Number(c.value);if(!a.checkValidity()){a.setCustomValidity("Введите корректное имя, например: Иванов В.В."),a.reportValidity(),a.classList.add("input-cash-edit-alarm"),a.focus();return}f();const w={employeeId:du(),employeeName:m,isActive:!0,isDelete:!1,transactions:[]},k={date:new Date().toISOString().slice(0,10),type:"deposit",amount:parseFloat(g.toFixed(2))};w.transactions.push(k),te([w]),B()}const d=x({type:"button",text:"Ok",className:"btn-up-cash",onClick:()=>{u()}});o.append(a,l,c,d),r.append(o),t.append(s,i),e.append(t,r),n.appendChild(e),document.body.style.overflow="hidden",document.body.appendChild(n);const h=m=>{m.key==="Escape"&&f(),m.key==="Enter"&&u()};function f(){document.removeEventListener("keydown",h),W(n)}document.addEventListener("keydown",h),n.addEventListener("click",m=>{m.target===n&&f()}),a.focus()}function fu(){const n=document.createElement("div");n.className="navigation-panel";const e=x({type:"button",text:"Добавить сотрудника",className:"btn-edit",onClick:()=>{hu()}}),t=x({type:"button",text:"Выход",className:"btn-edit",onClick:()=>{ie("/"),B()}});return n.append(e,t),n}function pu(n){const e=document.createElement("div");e.className="modal-overlay";const t=document.createElement("div");t.className="modal";const s=document.createElement("div");s.className="top-windows";const i=document.createElement("div");i.className="modal-title",i.innerHTML=n.employeeName;const r=me(()=>{W(e)}),o=document.createElement("div");o.className="modal-content";const a=document.createElement("div");a.className="content-for-edit-modal",a.textContent=`Удалить ${n.employeeName} ?`;const l=x({type:"button",text:"Удалить",className:"btn-user-del",onClick:()=>{n.isDelete=!0,te([n]),u(),B()}});a.append(l),o.append(a),s.append(i,r),t.append(s,o),e.appendChild(t),document.body.style.overflow="hidden",document.body.appendChild(e);const c=d=>{d.key==="Escape"&&u(),d.key==="Enter"&&(n.isDelete=!0,te([n]),u(),B())};function u(){document.removeEventListener("keydown",c),W(e)}document.addEventListener("keydown",c),e.addEventListener("click",d=>{d.target===e&&u()})}function si(n,e,t,s){const i=document.createElement("div");i.className="modal-overlay";const r=document.createElement("div");r.className="modal";const o=document.createElement("div");o.className="top-windows";const a=document.createElement("div");a.className="modal-title",a.innerHTML=`${n} : ${e.toFixed(2)} BYN`;const l=me(()=>{W(i)}),c=document.createElement("div");c.className="modal-content";const u=document.createElement("div");u.className="content-for-edit-modal",u.textContent=`Введите сумму ${t}: `;const d=document.createElement("input");d.disabled=!1,d.type="number",d.min="0",d.setAttribute("step","0.01"),d.className="input-cash-edit";const h=x({type:"button",text:"Ok",className:"btn-up-cash",onClick:()=>{s(Number(d.value)),m()}});u.append(d,h),c.append(u),o.append(a,l),r.append(o,c),i.appendChild(r),document.body.style.overflow="hidden",document.body.appendChild(i);const f=g=>{g.key==="Escape"&&m(),g.key==="Enter"&&(s(Number(d.value)),m())};function m(){document.removeEventListener("keydown",f),W(i)}return document.addEventListener("keydown",f),i.addEventListener("click",g=>{g.target===i&&m()}),d.focus(),i}const mu=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="23" height="25" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 10400 13600">
  <path fill="currentColor" d="M1681.49 4022.23l7037.03 0 -370.37 4576.71c-4.39,175.41 -38.66,392.5 -51.17,557.3l-88.41 1154.97c-44.6,339.06 -136.02,2101.05 -224.44,2262.33 -73.62,134.27 -228.85,205.29 -429.63,205.29l-4708.99 0c-502.14,0 -485.3,-352.52 -503.14,-713.8l-142.95 -1708.9c-30.89,-208.55 -23.32,-376.41 -45.78,-589.13l-472.15 -5744.77zm8677.24 -1225.65l0 881.73c0,162.22 -181.7,343.92 -343.92,343.92l-476.19 0c0,218.17 -47.51,445.31 -52.91,661.37 -8.35,334.1 -96.71,976.22 -105.57,1323l-163.02 1979.84c-20.94,198.29 -27.49,440.03 -56.17,658.11 -61.47,467.39 -99.7,1493.08 -166.7,1949.7 -47.73,325.28 -67.72,973.22 -109.7,1292.41 -61.9,470.66 21.59,1167.98 -624.04,1518.82 -140.67,76.44 -318.25,167 -520.83,167l-5079.36 0c-198.8,0 -402.63,-97.41 -538.25,-176.04 -644.37,-373.6 -546.15,-1093.81 -610.5,-1532.35 -33.34,-227.23 -23.65,-430.06 -56.99,-657.29l-328.61 -3930.65c-16.44,-523.88 -145.89,-1442.65 -158.77,-1957.63 -7.6,-304.01 -105.82,-1044.63 -105.82,-1296.29l-476.19 0c-162.22,0 -343.91,-181.7 -343.91,-343.92l0 -899.47c0,-613.96 580.2,-1137.56 1111.11,-1137.56l2063.49 0 0 -476.19c0,-613.96 580.2,-1137.57 1111.11,-1137.57l1719.57 0c368.51,0 596.77,160.04 787.15,350.42 403.24,403.24 350.42,731.05 350.42,1263.34l2037.03 0c368.51,0 596.77,160.04 787.15,350.41 236.18,236.18 322.47,510.83 350.42,804.89zm-7142.85 2363.21l0 6481.48c0,456.75 793.65,456.75 793.65,0l0 -6481.48c0,-456.76 -793.65,-456.76 -793.65,0zm3174.6 0l0 6481.48c0,456.75 793.65,456.75 793.65,0l0 -6481.48c0,-456.76 -793.65,-456.76 -793.65,0zm-1587.3 0l0 6481.48c0,456.75 793.65,456.75 793.65,0l0 -6481.48c0,-456.76 -793.66,-456.76 -793.65,0zm-3968.25 -2248.67c0,-311.78 164.41,-476.19 476.19,-476.19l7777.77 0c535.81,0 476.19,429.07 476.19,793.65l-8730.15 0 0 -317.46zm3174.6 -1613.76c0,-311.78 164.41,-476.19 476.19,-476.19l1428.57 0c541.93,0 476.19,439.86 476.19,820.11l-2380.95 0 0 -343.92z"/>
</svg>`;function _u(n,e){const{employeeName:t}=n,s=document.createElement("div");s.className="user-for-users-list";const i=x({type:"button",text:"",className:"btn-user-del",onClick:()=>{pu(n)}});i.insertAdjacentHTML("beforeend",mu);const r=x({type:"button",text:"Изменить имя",className:"btn-user-edit",onClick:()=>{o.disabled=!o.disabled,o.disabled?(r.textContent="Изменить имя",n.employeeName=o.value.trim(),te([n])):(o.focus(),o.value=t,r.textContent="Сохранить")}}),o=document.createElement("input");o.disabled=!0,o.type="text",o.placeholder=t,o.className="input-user-edit";const a=document.createElement("input");a.disabled=!0,a.type="text",a.value=String((Math.round(e*100)/100).toFixed(2)),a.placeholder=String((Math.round(e*100)/100).toFixed(2)),a.className="input-cash-edit";const l=x({type:"button",text:"+",className:"btn-up-cash",onClick:()=>{si(t,e,"пополнения",u=>{const d=Number(a.value)+u;a.value=d.toString();const h={date:new Date().toISOString().slice(0,10),type:"deposit",amount:u};n.transactions.push(h),te([n])})}}),c=x({type:"button",text:"-",className:"btn-lou-cash",onClick:()=>{si(t,e,"списания",u=>{const d=Number(a.value)-u;a.value=d.toString();const h={date:new Date().toISOString().slice(0,10),type:"expense",amount:u};n.transactions.push(h),te([n])})}});return s.append(i,o,r,a,l,c),s}function gu(n){const e=Object.entries(n).map(([s,i])=>({id:s,...i})),t=document.createElement("div");return t.className="users-list-for-edit-page",[...e].sort((s,i)=>s.employeeName.localeCompare(i.employeeName)).forEach(s=>{const i=s.transactions;let r=0;i.forEach(o=>{o.type==="deposit"?r+=o.amount:r-=o.amount}),s.isDelete||t.append(_u(s,r))}),t}function yu(n){const e=document.createElement("div");return e.className="edit-content",e.append(gu(n),fu()),e}function vu(n){const e=document.createElement("div");return e.className="main-container",e.append(as(),yu(n)),e}function Eu(){const n=document.createElement("div");n.className="navigation-panel";const e=x({type:"button",text:"Выход",className:"btn-edit",onClick:()=>{ie("/"),B()}});return n.append(e),n}function ii(n,e){const s=Object.entries(n).map(([r,o])=>({id:r,...o})).filter(r=>r.isActive&&!r.isDelete),i=e/s.length;for(const r of s){const o={date:new Date().toISOString().slice(0,10),type:"expense",amount:parseFloat(i.toFixed(2))};r.transactions.push(o),te([r])}}function Cu(n,e){const t=document.createElement("div");t.className="modal-overlay";const s=document.createElement("div");s.className="modal";const i=document.createElement("div");i.className="top-windows";const r=document.createElement("div");r.className="modal-title",r.innerHTML="Списание средств";const o=me(()=>{W(t)}),a=document.createElement("div");a.className="modal-content-for-write";const l=document.createElement("div");l.className="modal-content-user-list";const u=Object.entries(n).map(([A,G])=>({id:A,...G})).filter(A=>A.isActive&&!A.isDelete);for(const A of u){const G=document.createElement("div");G.className="modal-content-user",G.textContent=A.employeeName,l.append(G)}const d=document.createElement("div");d.className="content-for-water-modal";const h=document.createElement("div");h.className="line";const f=document.createElement("p");f.textContent=`Списать ${e} BYN?`;const m=document.createElement("p");m.className="line-2",m.textContent=`(с каждого сотрудника по ${(e/u.length).toFixed(2)} BYN)`,h.append(f,m);const g=x({type:"button",text:"Списать",className:"btn-user-del",onClick:()=>{ii(n,e),k(),ie("/"),B()}});d.append(h,g),a.append(l,d),i.append(r,o),s.append(i,a),t.appendChild(s),document.body.style.overflow="hidden",document.body.appendChild(t);const w=A=>{A.key==="Escape"&&k(),A.key==="Enter"&&(ii(n,e),k(),ie("/"),B())};function k(){document.removeEventListener("keydown",w),W(t)}document.addEventListener("keydown",w),t.addEventListener("click",A=>{A.target===t&&k()})}function wu(n){const e=document.createElement("div");e.className="control-content";const t=document.createElement("div");t.className="text-content";const s=document.createElement("div");s.className="label-for-user",s.textContent="Списать";const i=document.createElement("div");i.className="content-for-control";const r=document.createElement("input");r.className="input-cash-water",r.placeholder="Сумма списания",r.type="number",r.min="0",r.setAttribute("step","0.01");const o=x({type:"button",text:"Списать сумму",className:"btn-edit-disable",onClick:()=>{Cu(n,Number(r.value))}});return r.addEventListener("input",()=>{Number(r.value)>0?(o.classList.remove("btn-edit-disable"),o.classList.add("btn-edit")):(o.classList.remove("btn-edit"),o.classList.add("btn-edit-disable"))}),i.append(r,o),t.append(s),e.append(t,i),e}function bu(n){const e=document.createElement("div");e.className="user-for-water-page";const t=document.createElement("label");t.className="user-label";const s=document.createElement("input");s.type="checkbox",s.className="user-checkbox",n.isActive&&(s.checked=!0);const i=document.createElement("span");return i.textContent=n.employeeName,i.className="user-name-for-water",s.addEventListener("change",()=>{s.checked?(n.isActive=!0,te([n]),B()):(n.isActive=!1,te([n]),B())}),t.append(s,i),e.append(t),e}function Iu(n){const e=Object.entries(n).map(([a,l])=>({id:a,...l})),t=document.createElement("div");t.className="users-list-for-water-page";const s=document.createElement("div");s.className="user-content";const i=document.createElement("div");i.className="text-content";const r=document.createElement("div");r.className="label-for-user",r.textContent="Выберите сотрудников",i.append(r),s.append(i);const o=document.createElement("div");return o.className="users-for-water",[...e].sort((a,l)=>a.employeeName.localeCompare(l.employeeName)).forEach(a=>{a.isDelete||o.append(bu(a))}),s.append(o),t.append(s,wu(n)),t}function Nu(n){const e=document.createElement("div");return e.className="edit-content",e.append(Iu(n),Eu()),e}function Su(n){const e=document.createElement("div");return e.className="main-container",e.append(as(),Nu(n)),e}const Tu="/water-accounting";function ri(n,e){const t=window.location.pathname,s=sessionStorage.getItem("authorization");t==="/water-accounting/edit"&&s?document.body.replaceChildren(vu(n)):t==="/water-accounting/water"&&s?document.body.replaceChildren(Su(n)):(document.body.replaceChildren(cu(n,e)),ie("/"))}function ie(n){window.history.pushState({},"",Tu+n)}async function xu(){const n=We(Ue,"admin/password");return(await rs(n)).val()}async function Ru(){const n=We(Ue,"gameScores"),e=await rs(n);return e.exists()?e.val():null}async function B(){document.body.replaceChildren(),Vd();const[n]=await Promise.all([Hd()]),e=await xu(),t=await Ru()??[];sessionStorage.setItem("pass",e),ri(n,t),window.addEventListener("popstate",()=>{ri(n,t)})}B();
