(window.webpackJsonp=window.webpackJsonp||[]).push([[1468],{1539:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),c=(a(0),a(1583)),s={id:"image",title:"Image"},o={unversionedId:"image",id:"image",isDocsHomePage:!1,title:"Image",description:"Generic Image components from React Native.",source:"@site/docs/image.md",slug:"/image",permalink:"/next/image",editUrl:"https://github.com/nativebase/website/tree/main/docs/image.md",version:"current",sidebar:"componentsSidebar",previous:{title:"Icon",permalink:"/next/icon"},next:{title:"FAB",permalink:"/next/FAB"}},i=[{value:"Implements",id:"implements",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Sizes",id:"sizes",children:[]},{value:"Border Radius",id:"border-radius",children:[]},{value:"Fallback",id:"fallback",children:[]},{value:"Basic (With Ref)",id:"basic-with-ref",children:[]}]},{value:"Props",id:"props",children:[]}],p={toc:i};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Generic Image components from ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactnative.dev"}),"React Native"),"."),Object(c.b)("h2",{id:"implements"},"Implements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://reactnative.dev/docs/image"}),Object(c.b)("inlineCode",{parentName:"a"},"Image"))," from ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://reactnative.dev"}),"React Native"),"."),Object(c.b)("li",{parentName:"ul"},"You can use all props of React native Image.")),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("h3",{id:"basic"},"Basic"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Image%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20function%20Example()%20%7B%0A%20%20return%20%3CImage%20source%3D%7B%7B%0A%20%20%20%20uri%3A%20'https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F317501.jpg'%0A%20%20%7D%7D%20alt%3D%22Alternate%20Text%22%20size%3D%7B'xl'%7D%20%2F%3E%3B%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"sizes"},"Sizes"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20VStack%2C%20Image%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20function%20Example()%20%7B%0A%20%20return%20%3CVStack%20space%3D%7B2%7D%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%7B%5B'xs'%2C%20'sm'%2C%20'md'%2C%20'lg'%2C%20'xl'%2C%20'2xl'%5D.map(size%20%3D%3E%20%3CImage%20size%3D%7Bsize%7D%20resizeMode%3D%22cover%22%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F317501.jpg'%0A%20%20%20%20%7D%7D%20alt%3D%7B'Alternate%20Text%20'%20%2B%20size%7D%20%2F%3E)%7D%0A%20%20%20%20%3C%2FVStack%3E%3B%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"border-radius"},"Border Radius"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Image%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20function%20Example()%20%7B%0A%20%20return%20%3CImage%20size%3D%7B150%7D%20resizeMode%3D%7B'contain'%7D%20borderRadius%3D%7B100%7D%20source%3D%7B%7B%0A%20%20%20%20uri%3A%20'https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F317501.jpg'%0A%20%20%7D%7D%20alt%3D%22Alternate%20Text%22%20%2F%3E%3B%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"fallback"},"Fallback"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Image%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20function%20Example()%20%7B%0A%20%20return%20%3CImage%20size%3D%7B150%7D%20alt%3D%22fallback%20text%22%20borderRadius%3D%7B100%7D%20source%3D%7B%7B%0A%20%20%20%20uri%3A%20'https%3A%2F%2F-page-icon.png'%20%2F%2F%20uri%3A%20'https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F317501.jpg'%2C%0A%0A%20%20%7D%7D%20fallbackSource%3D%7B%7B%0A%20%20%20%20uri%3A%20'https%3A%2F%2Fwww.w3schools.com%2Fcss%2Fimg_lights.jpg'%0A%20%20%7D%7D%20%2F%3E%3B%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"basic-with-ref"},"Basic (With Ref)"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"%2F%2F%40ts-nocheck%0Aimport%20React%20from%20'react'%3B%0Aimport%20%7B%20Image%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20function%20Example()%20%7B%0A%20%20const%20myRef%20%3D%20React.useRef(null)%3B%0A%20%20React.useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20myRef.current%3F.setNativeProps(%7B%0A%20%20%20%20%20%20borderWidth%3A%2010%2C%0A%20%20%20%20%20%20opacity%3A%200.5%0A%20%20%20%20%7D)%3B%0A%20%20%7D%2C%20%5BmyRef%5D)%3B%0A%20%20return%20%3CImage%20ref%3D%7BmyRef%7D%20source%3D%7B%7B%0A%20%20%20%20uri%3A%20'https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F317501.jpg'%0A%20%20%7D%7D%20alt%3D%22Alternate%20Text%22%20size%3D%22xl%22%20%2F%3E%3B%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("undefined",null,Object(c.b)("table",null,"\n  ",Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        alt\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        The alt text that describes the image. This will be added as accessibilityLabel in android/iOS and alt on web\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        fallbackSource\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://reactnative.dev/docs/image#source"}),"ImageSourcePropType"),"\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        In event there was an error loading the src, specify a fallback source.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        ignoreFallback\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Opt out of the fallbackSource logic and show alternative text\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        _alt\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        ",Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"text#props"}),"ITextProps"),"\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Text styling for alt.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(c.b)("p",null,"Image implements ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"utility-props#color-and-background-color"}),"PlatformProps"),", ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactnative.dev/docs/image"}),Object(c.b)("code",{parentName:"a"},"Image from React Native")),", ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"utility-props#layout-width-and-height"}),"LayoutProps"),", ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"utility-props#flexbox"}),"FlexProps"),", ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"utility-props#position"}),"PositionProps"),", ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"utility-props#extra-props"}),"ExtraProps"),", ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"utility-props#borders"}),"BorderProps"),", ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"utility-props#shadow"}),"ShadowProps"))))}l.isMDXComponent=!0},1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,u=d["".concat(s,".").concat(m)]||d[m]||b[m]||c;return a?n.a.createElement(u,o(o({ref:t},p),{},{components:a})):n.a.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,s=new Array(c);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<c;p++)s[p]=a[p];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);