(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{1583:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return v}));var a=o(0),n=o.n(a);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},s=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(o),u=a,v=s["".concat(i,".").concat(u)]||s[u]||d[u]||r;return o?n.a.createElement(v,c(c({ref:t},l),{},{components:o})):n.a.createElement(v,c({ref:t},l))}));function v(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=o[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},244:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return p})),o.d(t,"default",(function(){return b}));var a=o(3),n=o(7),r=(o(0),o(1583)),i={id:"popOver",title:"PopOver"},c={unversionedId:"popOver",id:"version-3.0.0-next.27/popOver",isDocsHomePage:!1,title:"PopOver",description:"Popover is a non-modal dialog that floats around a trigger. It's used to display contextual information to the user, and should be paired with a pressable trigger element.",source:"@site/versioned_docs/version-3.0.0-next.27/popOver.md",slug:"/popOver",permalink:"/3.0.0-next.27/popOver",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.27/popOver.md",version:"3.0.0-next.27",sidebar:"version-3.0.0-next.27/componentsSidebar",previous:{title:"Overlay",permalink:"/3.0.0-next.27/overlay"},next:{title:"Accordion",permalink:"/3.0.0-next.27/accordion"}},p=[{value:"Import",id:"import",children:[]},{value:"Basic",id:"basic",children:[]},{value:"Size",id:"size",children:[]},{value:"initialFocusRef and closeOnBlur",id:"initialfocusref-and-closeonblur",children:[]},{value:"Props",id:"props",children:[{value:"Popover",id:"popover",children:[]}]}],l={toc:p};function b(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Popover")," is a non-modal dialog that floats around a trigger. It's used to display contextual information to the user, and should be paired with a pressable trigger element."),Object(r.b)("h2",{id:"import"},"Import"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Popover"),": The wrapper that provides props, state, and context to its children."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Popover.Trigger"),": Used to wrap the reference (or trigger) element."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Popover.Content"),": The popover itself."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Popover.Header"),": The header of the popover."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Popover.Body"),": The body of the popover."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Popover.CloseButton"),": A button to close the popover.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { Popover } from 'native-base';\n")),Object(r.b)("h2",{id:"basic"},"Basic"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Popover Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Popover%2C%0A%20%20Button%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20PopoverComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CPopover%3E%0A%20%20%20%20%20%20%3CPopover.Trigger%3E%0A%20%20%20%20%20%20%20%20%3CButton%3ETrigger%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FPopover.Trigger%3E%0A%20%20%20%20%20%20%3CPopover.Content%20width%3D%7B250%7D%3E%0A%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Header%3EConfirmation!%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Body%3EAre%20you%20sure%20you%20want%20to%20have%20that%20milkshake%3F%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%3C%2FPopover%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CPopoverComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h2",{id:"size"},"Size"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Popover Size","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Popover%2C%0A%20%20Button%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20PopoverComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CPopover%20size%3D%22lg%22%3E%0A%20%20%20%20%20%20%3CPopover.Trigger%3E%0A%20%20%20%20%20%20%20%20%3CButton%3ETrigger%20for%20size%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FPopover.Trigger%3E%0A%20%20%20%20%20%20%3CPopover.Content%3E%0A%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Header%3EConfirmation!%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Body%3EAre%20you%20sure%20you%20want%20to%20have%20that%20milkshake%3F%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%3C%2FPopover%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CPopoverComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h2",{id:"initialfocusref-and-closeonblur"},"initialFocusRef and closeOnBlur"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Popover initialFocusRef and closeOnBlur","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Popover%2C%0A%20%20Button%2C%0A%20%20Input%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20PopoverComponent%20()%20%7B%0A%20%20const%20initialFocusRef%20%3D%20React.useRef()%3B%0A%20%20return%20(%0A%20%20%20%20%3CPopover%20initialFocusRef%3D%7BinitialFocusRef%7D%20closeOnBlur%3D%7Bfalse%7D%3E%0A%20%20%20%20%20%20%3CPopover.Trigger%3E%0A%20%20%20%20%20%20%20%20%3CButton%3ETrigger%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FPopover.Trigger%3E%0A%20%20%20%20%20%20%3CPopover.Content%20width%3D%7B250%7D%3E%0A%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Header%20fontSize%3D%7B20%7D%20fontWeight%3D%7B700%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Header%0A%20%20%20%20%20%20%20%20%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20%20%20%20%20mb%3D%7B3%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%22white%22%0A%20%20%20%20%20%20%20%20%20%20%20%20ref%3D%7BinitialFocusRef%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20placeholder%3D%22I%20will%20get%20focused%20on%20Popover%20opening%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20This%20Popover%20won't%20close%20on%20clicking%20outside%20the%20popover%20area.%0A%20%20%20%20%20%20%20%20%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Footer%3EThis%20is%20the%20footer%3C%2FPopover.Footer%3E%0A%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%3C%2FPopover%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CPopoverComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can pass custom backgroundColor using bg or backgroundColor, borderColor and borderWidth to Popover.")),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("h3",{id:"popover"},"Popover"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onOpen"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Callback fired when the popover opens."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onClose"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Callback fired when the popover closes."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"initialFocusRef"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"React.Ref"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The ref of the element that should receive focus when the popover opens."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"finalFocusRef"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"React.Ref"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The ref of the element that should receive focus when the popover closes."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"closeOnBlur"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If true, the popover will close when you blur it out by pressing outside."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"id"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The top-level id to use for the Popover and it's sub-components."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"size"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"full, lg, md, number, sm, string, xl, xs"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Size of the Popover component."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Popover.Content"),"\xa0composes\xa0",Object(r.b)("inlineCode",{parentName:"p"},"Box"),"\xa0and has the ability to smartly position itself."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Popover.Header"),",\xa0",Object(r.b)("inlineCode",{parentName:"p"},"Popover.Footer"),"\xa0and\xa0",Object(r.b)("inlineCode",{parentName:"p"},"Popover.Body"),"\xa0composes the\xa0",Object(r.b)("inlineCode",{parentName:"p"},"Box"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Popover.CloseButton"),"\xa0composes the\xa0",Object(r.b)("inlineCode",{parentName:"p"},"CloseButton"),"\xa0component."))}b.isMDXComponent=!0}}]);