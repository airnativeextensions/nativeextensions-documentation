"use strict";(self.webpackChunknativeextensions_documentation=self.webpackChunknativeextensions_documentation||[]).push([[18116],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),i=n(86010),o=n(12466),l=n(16550),u=n(91980),s=n(67392),d=n(50012);function c(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,u._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[o,l]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=a.find((e=>e.default)))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[u,s]=f({queryString:n,groupId:a}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,i]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),h=(()=>{const e=null!=u?u:c;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);l(e),s(e),g(e)}),[s,g,i]),tabValues:i}}var h=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=s[n].value;a!==l&&(c(t),u(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{var a;const t=d.indexOf(e.currentTarget)+1;n=null!=(a=d[t])?a:d[0];break}case"ArrowLeft":{var r;const t=d.indexOf(e.currentTarget)-1;n=null!=(r=d[t])?r:d[d.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},o,{className:(0,i.Z)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},35392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));n(74866),n(85162);const i={title:"Migration v16.0"},o=void 0,l={unversionedId:"inappbilling/migration-v16.0",id:"inappbilling/migration-v16.0",title:"Migration v16.0",description:"This latest release brings a number of updates to the extension particularly around the Android integration.",source:"@site/docs/inappbilling/migration-v16.0.mdx",sourceDirName:"inappbilling",slug:"/inappbilling/migration-v16.0",permalink:"/docs/inappbilling/migration-v16.0",draft:!1,tags:[],version:"current",frontMatter:{title:"Migration v16.0"},sidebar:"inappbilling",previous:{title:"In App Updates",permalink:"/docs/inappbilling/in-app-updates"},next:{title:"Migration v15.4",permalink:"/docs/inappbilling/migration-v15.4"}},u={},s=[{value:"Android Integration",id:"android-integration",level:2},{value:"<code>com.google.android.play</code>",id:"comgoogleandroidplay",level:3},{value:"Gradle Dependencies",id:"gradle-dependencies",level:3},{value:"Updating code",id:"updating-code",level:4},{value:"Updating the manifest",id:"updating-the-manifest",level:4}],d={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This latest release brings a number of updates to the extension particularly around the Android integration. "),(0,r.kt)("p",null,"The iOS implementation remains largely unchanged. "),(0,r.kt)("h2",{id:"android-integration"},"Android Integration"),(0,r.kt)("h3",{id:"comgoogleandroidplay"},(0,r.kt)("inlineCode",{parentName:"h3"},"com.google.android.play")),(0,r.kt)("p",null,"The extension now requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"com.google.android.play.appupdate")," extension to be included in your application instead of the previously used ",(0,r.kt)("inlineCode",{parentName:"p"},"com.google.android.play"),".\nThis should resolve issues with a foreground service being required for the Play Billing Library."),(0,r.kt)("p",null,"You should remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"com.google.android.play")," extension from your application and include the ",(0,r.kt)("inlineCode",{parentName:"p"},"com.google.android.play.appupdate")," extension instead."),(0,r.kt)("h3",{id:"gradle-dependencies"},"Gradle Dependencies"),(0,r.kt)("p",null,"We have moved to using gradle dependencies within our extensions which will improve dependency resolution, reduce update times and improve compatibility with other extensions."),(0,r.kt)("p",null,"This also reduces the amount of work required to manually integrate the extensions, reducing the additions to the manifest in your application descriptor."),(0,r.kt)("h4",{id:"updating-code"},"Updating code"),(0,r.kt)("p",null,"There should be no required changes to your code to update to this version of the extension."),(0,r.kt)("h4",{id:"updating-the-manifest"},"Updating the manifest"),(0,r.kt)("p",null,"You can simplify the manifest now as well as the gradle implementation will add a significant amount of the required manifest entries for you. "),(0,r.kt)("p",null,"We highly recommend using the ",(0,r.kt)("a",{parentName:"p",href:"https://airnativeextensions.com/docs/using-apm"},"apm")," tool to manage the integration of the extensions in your application and to generate your application descriptor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apm update\napm generate app-descriptor\n")),(0,r.kt)("p",null,"If you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"apm")," tool to generate your application descriptor you will see the manifest entries are significantly reduced and simply running the commands above will update the manifest for you."),(0,r.kt)("p",null,"However, you can still integrate the manifest additions manually if you prefer. With this update we recommend starting fresh as there have been a lot of entries to be removed."),(0,r.kt)("p",null,"The minimum manifest additions now looks like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<manifest android:installLocation="auto" >\n    <uses-sdk android:minSdkVersion="21" android:targetSdkVersion="34" />\n\n    <uses-permission android:name="android.permission.INTERNET"/>\n\n    <application>\n\n        <activity android:name="com.distriqt.extension.inappbilling.activities.ProductViewActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" android:exported="false" />\n\n        <activity android:name="com.distriqt.core.auth.AuthorisationActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar" android:exported="false" />\n\n    </application>\n\n</manifest>\n')))}p.isMDXComponent=!0}}]);